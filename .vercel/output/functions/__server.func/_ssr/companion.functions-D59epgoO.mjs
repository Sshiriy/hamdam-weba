import { a as object, n as array, o as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/companion.functions-D59epgoO.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = object({
	message: string().trim().min(1).max(1200),
	history: array(object({
		role: _enum(["user", "assistant"]),
		text: string().max(2e3)
	})).max(8),
	context: string().max(1800)
});
var SYSTEM = `تو «همراه هوشمند همدم» هستی؛ دستیار آموزشی نسخهٔ دوم برای بیماران بیمارستان آیت‌الله رئیسی کرمانشاه.
قواعد قطعی:
- پزشک نیستی و حق تشخیص سرطان، رد سرطان، مرحله‌بندی، پیش‌بینی متاستاز، یا خواندن جواب آزمایش به‌جای پزشک را نداری.
- شروع، قطع، یا تغییر دوز دارو را توصیه نکن.
- آمار بقا، درصد خطر، نام پروتکل، و دستهٔ شواهد NCCN را از خودت نساز.
- اگر پرسیدند «NCCN برای من چه می‌گوید»، بگو دستورالعمل رسمی برای تیم درمان است، به‌روز می‌شود و این برنامه آن را بازنشر نمی‌کند. بعد فقط سؤال‌هایی پیشنهاد بده که بیمار از پزشک خودش بپرسد.
- متن مسیر پیوست‌شده آموزش بیمار است، نه نقل‌قول NCCN. از آن فراتر نرو و دارو تجویز نکن.
- اگر در پرسش یا زمینه تب، تنگی نفس، خونریزی، درد قفسه سینه، گیجی، غش، استفراغ مهارنشده، اکسیژن زیر ۹۲ یا درد بسیار شدید هست، اول و روشن بگو همین حالا با تیم درمان یا اورژانس تماس بگیرد.
- فارسی روان، کوتاه، آرام. حداکثر چند پاراگراف.
- اگر اطلاعات کافی نیست بگو این را باید از پزشک معالج پرسید.
- زمینهٔ پرونده ممکن است ناقص یا نمونهٔ نمایشی باشد؛ از آن برای تشخیص استفاده نکن.`;
var recent = [];
function allowed() {
	const now = Date.now();
	while (recent.length && now - recent[0] > 36e5) recent.shift();
	if (now - (recent[recent.length - 1] ?? 0) < 2500) return "کمی صبر کنید و دوباره بپرسید.";
	if (recent.length >= 30) return "سقف پرسش این ساعت پر شده است. کمی بعد دوباره تلاش کنید.";
	recent.push(now);
	return null;
}
var askCompanion_createServerFn_handler = createServerRpc({
	id: "a016544ba5b241b509748ab44f2231efc7fa2cf98f3347b3b352ad38313b8c10",
	name: "askCompanion",
	filename: "src/lib/companion.functions.ts"
}, (opts) => askCompanion.__executeServer(opts));
var askCompanion = createServerFn({ method: "POST" }).validator((input) => Input.parse(input)).handler(askCompanion_createServerFn_handler, async ({ data }) => {
	const limited = allowed();
	if (limited) return {
		ok: false,
		error: limited
	};
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "همراه هوشمند در این محیط در دسترس نیست. دفتر حال و قواعد هشدار همچنان کار می‌کنند."
	};
	const messages = [
		{
			role: "system",
			content: SYSTEM
		},
		{
			role: "system",
			content: `زمینهٔ محلی که کاربر اجازه داده پیوست شود. این زمینه تشخیص نیست:\n${data.context || "زمینه‌ای فرستاده نشده."}`
		},
		...data.history.map((turn) => ({
			role: turn.role,
			content: turn.text
		})),
		{
			role: "user",
			content: data.message
		}
	];
	try {
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "grok-4.5",
				temperature: .3,
				max_tokens: 700,
				messages
			})
		});
		if (!res.ok) return {
			ok: false,
			error: "پاسخ همراه هوشمند این بار نرسید. دوباره تلاش کنید یا سؤال را برای پزشک بنویسید."
		};
		const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
		if (!text) return {
			ok: false,
			error: "پاسخ خالی بود. سؤال را کوتاه‌تر دوباره بپرسید."
		};
		return {
			ok: true,
			text
		};
	} catch {
		return {
			ok: false,
			error: "ارتباط با همراه هوشمند برقرار نشد. قواعد هشدار دفتر حال همچنان مستقل از این بخش کار می‌کنند."
		};
	}
});
//#endregion
export { askCompanion_createServerFn_handler };
