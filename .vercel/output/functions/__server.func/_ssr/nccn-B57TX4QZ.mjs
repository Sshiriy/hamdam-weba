import { Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, n as Card, r as Disclaimer } from "./ui-CQFk7eZh.mjs";
import { m as useCare, t as cancerLabel } from "./store-a_Zrpcpw.mjs";
import { n as pathways } from "./nccn-DxRf9wrR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nccn-B57TX4QZ.js
var import_jsx_runtime = require_jsx_runtime();
function NccnIndex() {
	const profile = useCare((state) => state.profile);
	const mine = pathways.find((item) => item.slug === profile.cancerId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "نسخهٔ دوم · نقشهٔ گفتگو",
				title: "آنچه بیمار از ساختار مسیر درمان می‌شنود.",
				lede: "NCCN شبکهٔ ملی جامع سرطان است و دستورالعمل‌های بالینی‌اش برای تیم درمان نوشته می‌شود، مرتب عوض می‌شود و مجوز بازنشر ندارد. همدم آن متن را کپی نمی‌کند. این صفحه‌ها نقشهٔ سؤال‌اند تا سر ویزیت بدانید معمولاً چه موضوع‌هایی روی میز است."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {}),
			mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "هم‌راستا با پروندهٔ این دستگاه"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-1 text-xl font-bold",
						children: ["مسیر ", mine.title]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: cancerLabel(profile)
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/nccn/$slug",
					params: { slug: mine.slug },
					className: "inline-flex min-h-11 items-center rounded-xl bg-cypress px-4 text-sm font-semibold text-paper sm:ms-auto",
					children: "باز کردن مسیر من"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2",
				children: pathways.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/nccn/$slug",
					params: { slug: item.slug },
					className: "block h-full rounded-card border border-line bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-copper",
							children: item.english
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-xl font-bold",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-7 text-muted",
							children: item.summary
						})
					]
				}) }, item.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "این نقشه چه چیزی نیست"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-2 text-sm leading-7 text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "دستهٔ شواهد، نام پروتکل، یا نسخهٔ رسمی NCCN نیست." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "مرحلهٔ بیماری شما را از روی فرم حدس نمی‌زند." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "جای کمیتهٔ درمان بیمارستان آیت‌الله رئیسی را نمی‌گیرد." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/scope",
					className: "mt-4 inline-block text-sm font-semibold text-cypress",
					children: "محدودهٔ نسخهٔ دوم"
				})
			] })
		]
	});
}
//#endregion
export { NccnIndex as component };
