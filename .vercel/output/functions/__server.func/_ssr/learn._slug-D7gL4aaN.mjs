import { Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getPathway } from "./nccn-DxRf9wrR.mjs";
import { n as getArticle } from "./articles-aWE-m8ku.mjs";
import { r as Route$2 } from "./router-BG-louj4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn._slug-D7gL4aaN.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { slug } = Route$2.useParams();
	const article = getArticle(slug);
	const pathway = getPathway(slug);
	if (!article) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-extrabold",
			children: "این صفحه در آموزش همدم نیست."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/learn",
			className: "mt-4 inline-block font-semibold text-cypress",
			children: "بازگشت به فهرست"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/learn",
				className: "text-sm font-medium text-cypress",
				children: "آموزش"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm font-medium text-copper",
				children: article.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-8 text-muted",
				children: article.summary
			}),
			pathway ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/nccn/$slug",
				params: { slug },
				className: "mt-4 inline-block text-sm font-semibold text-cypress",
				children: "نقشهٔ سؤال‌های همین سرطان در نسخهٔ دوم"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-8",
				children: article.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border-s-2 border-cypress ps-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: section.heading
						}),
						section.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-8 text-ink",
							children: paragraph
						}, paragraph)),
						section.bullets ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid gap-2 text-sm leading-7 text-muted",
							children: section.bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-xl bg-surface px-3 py-2",
								children: item
							}, item))
						}) : null
					]
				}, section.heading))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-card bg-foam px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bold text-cypress-deep",
					children: "برای پزشک بنویسید"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2 text-sm leading-7",
					children: article.askDoctor.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				})]
			})
		]
	});
}
//#endregion
export { ArticlePage as component };
