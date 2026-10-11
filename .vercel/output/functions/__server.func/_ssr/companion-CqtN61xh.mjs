import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, r as Disclaimer, s as TextArea, t as Button } from "./ui-CQFk7eZh.mjs";
import { m as useCare, p as upcomingCheckups, s as formatFa, t as cancerLabel } from "./store-a_Zrpcpw.mjs";
import { r as phaseLabel, t as getPathway } from "./nccn-DxRf9wrR.mjs";
import { t as askCompanion } from "./companion.functions-C9Rq76J0.mjs";
import { r as latestAssessment } from "./flags-BJNhnRiI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/companion-CqtN61xh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var suggestions = [
	"فرق دستورالعمل NCCN با این نقشهٔ سؤال چیست؟",
	"تب در طول درمان را چطور برای بخش توضیح دهم؟",
	"واژهٔ گیرندهٔ هورمونی را بدون توصیهٔ دارو توضیح بده.",
	"حال این هفته‌ام را برای پزشک در پنج خط خلاصه کن، بدون تشخیص."
];
function CompanionPage() {
	const profile = useCare((state) => state.profile);
	const symptoms = useCare((state) => state.symptoms);
	const checkups = useCare((state) => state.checkups);
	const visit = useCare((state) => state.visit);
	const reviews = useCare((state) => state.reviews);
	const chat = useCare((state) => state.chat);
	const addChat = useCare((state) => state.addChat);
	const clearChat = useCare((state) => state.clearChat);
	const [message, setMessage] = (0, import_react.useState)("");
	const [attach, setAttach] = (0, import_react.useState)(true);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function send(text) {
		const trimmed = text.trim();
		if (!trimmed || pending) return;
		setPending(true);
		setError(null);
		setMessage("");
		addChat({
			role: "user",
			text: trimmed
		});
		const history = chat.slice(-6).map((turn) => ({
			role: turn.role,
			text: turn.text
		}));
		try {
			const result = await askCompanion({ data: {
				message: trimmed,
				history,
				context: attach ? buildContext() : "کاربر نخواسته زمینهٔ پرونده پیوست شود."
			} });
			if (!result.ok) {
				setError(result.error);
				return;
			}
			addChat({
				role: "assistant",
				text: result.text
			});
		} catch {
			setError("پرسش فرستاده نشد. دوباره تلاش کنید، یا سؤال را برای پزشک بنویسید.");
		} finally {
			setPending(false);
		}
	}
	function buildContext() {
		const assessment = latestAssessment(symptoms);
		const next = upcomingCheckups(checkups)[0];
		const latest = [...symptoms].sort((a, b) => b.date.localeCompare(a.date))[0];
		const pathway = getPathway(profile.cancerId);
		const review = [...reviews].sort((a, b) => b.date.localeCompare(a.date))[0];
		return [
			profile.demo ? "این پرونده نمونهٔ نمایشی و ساختگی است." : "پروندهٔ محلی کاربر.",
			profile.onboarded ? `نام: ${profile.name || "ناگفته"}. نوع ثبت‌شده: ${cancerLabel(profile)}. مرحلهٔ خوداظهار: ${phaseLabel(profile.phase)}.` : "پرونده کامل نشده.",
			pathway ? `خلاصهٔ مسیر آموزشی ${pathway.title} که بازنشر NCCN نیست: ${pathway.summary} هشدارهای همین برگه: ${pathway.redFlags.join("؛ ")}.` : "مسیر آموزشی انتخاب نشده.",
			`جمع‌بندی قاعدهٔ هشدار روی آخرین ثبت حال: ${assessment.title}`,
			latest ? `آخرین حال ${formatFa(latest.date)}: درد ${latest.pain}، خستگی ${latest.fatigue}، تهوع ${latest.nausea}. یادداشت: ${latest.note || "ندارد"}` : "حال ثبت نشده.",
			review ? `آخرین چکاپ ${formatFa(review.date)} با درد ${review.pain}. یادداشت: ${review.note || "ندارد"}` : "",
			next ? `نوبت بعدی: ${next.title} در ${formatFa(next.date)}` : "نوبت آینده ثبت نشده.",
			visit.questions ? `سؤال‌های پیش‌ویزیت: ${visit.questions}` : ""
		].filter(Boolean).join("\n").slice(0, 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-2xl gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "همراه هوشمند",
				title: "سؤال آموزشی بپرسید، نه تشخیص.",
				lede: "نسخهٔ دوم می‌تواند نقشهٔ مسیر را ساده کند. پاسخ مدل ممکن است اشتباه باشد و دستورالعمل NCCN نیست. علامت فوری را به چت نسپارید."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-h-11 items-center gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: attach,
					onChange: (event) => setAttach(event.target.checked),
					className: "size-4 accent-cypress"
				}), "خلاصهٔ پروندهٔ همین دستگاه به سؤال پیوست شود"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: suggestions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: pending,
					onClick: () => void send(item),
					className: "rounded-full border border-line bg-surface px-3 py-2 text-start text-sm leading-6",
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "grid gap-4",
				children: [chat.map((turn) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-s-2 border-line ps-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-copper",
						children: turn.role === "user" ? "شما" : "همدم"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 whitespace-pre-wrap leading-8",
						children: turn.text
					})]
				}, turn.id)), pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted",
					children: "در حال نوشتن پاسخ…"
				}) : null]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-copper-soft px-4 py-3 text-sm leading-7 text-copper",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3",
				onSubmit: (event) => {
					event.preventDefault();
					send(message);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					value: message,
					maxLength: 1200,
					placeholder: "مثلاً: پرتودرمانی با شیمی‌درمانی چه فرقی دارد؟",
					onChange: (event) => setMessage(event.target.value)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: pending || !message.trim(),
						children: "پرسیدن"
					}), chat.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "quiet",
						onClick: clearChat,
						children: "پاک کردن گفتگو"
					}) : null]
				})]
			})
		]
	});
}
//#endregion
export { CompanionPage as component };
