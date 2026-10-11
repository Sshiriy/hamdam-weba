import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro } from "./ui-CQFk7eZh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scope-HwSULmV-.js
var import_jsx_runtime = require_jsx_runtime();
var rows = [
	[
		"نقشهٔ گفتگو، شش سرطان طرح",
		"هست",
		"آموزش بیمار با ساختار ویزیت. بازنشر دستورالعمل NCCN، دستهٔ شواهد یا نام پروتکل نیست."
	],
	[
		"چکاپ آموزشی",
		"هست و شفاف",
		"تب، درد، اکسیژن، ضربان و علامت‌هایی که خود بیمار زده. جعبهٔ سیاه تشخیص نیست."
	],
	[
		"علائم حیاتی خانگی",
		"هست، دستی",
		"دما و پالس‌اکسی‌متر را خودتان می‌نویسید. اتصال هولتر یا دستگاه پزشکی نیست."
	],
	[
		"دفتر حال و تقویم",
		"هست",
		"درد، خستگی، تهوع و نوبت ویزیت، آزمایش، تصویر و جلسهٔ درمان."
	],
	[
		"فرم پیش از ویزیت",
		"هست",
		"سؤال‌های مسیر را می‌شود به فرم برد. به پروندهٔ بیمارستان وصل نیست."
	],
	[
		"سابقهٔ خانوادگی",
		"هست، محلی",
		"یادآوری برای پزشک، نه محاسبهٔ خطر ژنتیکی."
	],
	[
		"حمایت روانی و اجتماعی",
		"هست",
		"مسیر مددکاری، بدون تلفن ساختگی."
	],
	[
		"همراه هوشمند",
		"هست، آموزشی",
		"با زمینهٔ مسیر. تشخیص، دوز، آمار و نقل‌قول NCCN ممنوع شده است."
	],
	[
		"شبکهٔ عصبی تشخیص سرطان",
		"نیست",
		"بدون دادهٔ دارای رضایت، آزمون خارجی و مجوز، خروجی‌اش تصمیم پزشکی خطرناک است."
	],
	[
		"پیش‌بینی متاستاز",
		"نیست",
		"علامت عصبی را به تماس فوری برمی‌گرداند، نه به یک احتمال عددی."
	],
	[
		"خواندن خودکار EMR کلینیک",
		"نیست",
		"نیاز به رابط بیمارستان، رضایت و کنترل دسترسی دارد."
	],
	[
		"حساب ابری و ورود",
		"نیست",
		"دادهٔ سلامت تا آماده شدن امنیت و رضایت، روی دستگاه خود کاربر می‌ماند."
	]
];
function ScopePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "نسخهٔ دوم",
				title: "مسیر گفتگو کامل شد؛ ادعای تشخیص هنوز عمداً نیست.",
				lede: "طرح، وب‌اپلیکیشن اطلاع‌رسانی درمان، پشتیبانی و پیگیری برای بیمارستان آیت‌الله رئیسی است و از دادهٔ NCCN حرف می‌زند. نسخهٔ دوم همان نقشه را به شکل سؤال‌های قابل‌بردن سر ویزیت پیاده کرده، بدون اینکه متن مجوزدار را کپی کند یا جای پزشک را بگیرد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-card border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[40rem] text-right text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-foam text-cypress-deep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-semibold",
								children: "قابلیت طرح"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-semibold",
								children: "نسخهٔ دوم"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-semibold",
								children: "دلیل"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map(([feature, status, why]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: feature
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 whitespace-nowrap",
								children: status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 leading-6 text-muted",
								children: why
							})
						]
					}, feature)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-2xl leading-8 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold text-ink",
						children: "NCCN این‌جا چه نقشی دارد"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "شبکهٔ ملی جامع سرطان دستورالعمل بالینی می‌نویسد که برای متخصص است، مرتب عوض می‌شود و اجازهٔ بازنشر متنش را نداریم. بیمار معمولاً به نسخهٔ انگلیسی «راهنمای بیمار» همان شبکه دسترسی راحت ندارد. همدم به‌جای کپی، موضوع‌هایی را که در گفتگوی درمان این شش سرطان شنیده می‌شود — گیرنده‌ها، محل تومور، جراحی، دارو، پرتو، پیگیری — به زبان ساده و با سؤال آماده می‌کند. تصمیم همچنان با تیم بیمارستان است."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-xl font-bold text-ink",
						children: "چرا مدل تشخیصی نیامد"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "تشخیص زودهنگام و هشدار متاستاز در طرح آمده‌اند، اما شبکهٔ عصبی بدون دادهٔ دارای رضایت و آزمون مستقل، دقت بالینی ندارد. اگر خروجی‌اش را تشخیص بنامیم، بیمار ممکن است مراجعه را عقب بیندازد یا بی‌جهت بترسد. تا مسیر کیفیت نرم‌افزار پزشکی طی نشود، این کار محصول قابل‌عرضه به بیمار نیست. علامت خطر در نسخهٔ دوم فقط همان چیزی است که خودتان تیک زده‌اید."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "ناظر علمی طرح دکتر مهرداد پاینده است. داده از دستگاه خارج نمی‌شود و شمارهٔ تماس افراد حقیقی طرح منتشر نشده است."
					})
				]
			})
		]
	});
}
//#endregion
export { ScopePage as component };
