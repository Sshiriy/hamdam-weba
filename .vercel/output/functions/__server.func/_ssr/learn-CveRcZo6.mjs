import { Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro } from "./ui-CQFk7eZh.mjs";
import { t as articles } from "./articles-aWE-m8ku.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-CveRcZo6.js
var import_jsx_runtime = require_jsx_runtime();
function Learn() {
	const cancers = articles.filter((article) => article.kind === "cancer");
	const guides = articles.filter((article) => article.kind === "guide");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "آموزش",
				title: "آنچه بین تشخیص و تصمیم، ارزش دانستن دارد.",
				lede: "متن‌ها عمومی و محافظه‌کارند. نقشهٔ سؤال هر سرطان در بخش مسیر است و دستورالعمل مجوزدار NCCN اینجا بازنشر نشده. برنامهٔ واقعی درمان را تیم بیمارستان آیت‌الله رئیسی می‌نویسد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold text-copper",
				children: "راهنماهای مشترک"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3 sm:grid-cols-2",
				children: guides.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/learn/$slug",
					params: { slug: article.slug },
					className: "block h-full rounded-card border border-line bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: article.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-muted",
						children: article.summary
					})]
				}) }, article.slug))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold text-copper",
				children: "به تفکیک نوع"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3 sm:grid-cols-2",
				children: cancers.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/learn/$slug",
					params: { slug: article.slug },
					className: "block h-full rounded-card border border-line bg-paper p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: article.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-lg font-bold",
							children: article.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted",
							children: article.summary
						})
					]
				}) }, article.slug))
			})] })
		]
	});
}
//#endregion
export { Learn as component };
