import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-CQFk7eZh.js
var import_jsx_runtime = require_jsx_runtime();
function cx(...parts) {
	return parts.filter(Boolean).join(" ");
}
function Card({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cx("rounded-card border border-line bg-surface px-5 py-5 shadow-[0_1px_0_rgba(28,42,39,0.04),0_16px_40px_rgba(28,42,39,0.04)]", className),
		children
	});
}
function Button({ tone = "primary", className, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cx("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50", tone === "primary" && "bg-cypress text-paper hover:bg-cypress-deep", tone === "quiet" && "border border-line bg-surface text-ink hover:bg-foam", tone === "copper" && "bg-copper text-paper hover:bg-cypress-deep", className),
		...props
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium text-ink",
				children: label
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-muted",
				children: hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2",
				children
			})
		]
	});
}
var control = "w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-base text-ink outline-none ring-cypress placeholder:text-muted/70 focus:ring-2";
function TextInput(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: cx(control, props.className)
	});
}
function TextArea(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		...props,
		className: cx(control, "min-h-28 resize-y leading-7", props.className)
	});
}
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		...props,
		className: cx(control, "min-h-11", className),
		children
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-copper",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl",
				children: title
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg leading-8 text-muted",
				children: lede
			}) : null
		]
	});
}
function Disclaimer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl border border-line bg-foam px-4 py-3 text-sm leading-6 text-cypress-deep",
		children: "همدم ابزار اطلاع‌رسانی و پیگیری است، نه تشخیص، نه نسخه‌نویسی، و نه جایگزین ویزیت پزشک یا اورژانس."
	});
}
//#endregion
export { PageIntro as a, TextInput as c, Field as i, cx as l, Card as n, Select as o, Disclaimer as r, TextArea as s, Button as t };
