import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, i as Field, n as Card, r as Disclaimer, s as TextArea, t as Button } from "./ui-CQFk7eZh.mjs";
import { f as todayISO, m as useCare, o as faNum, s as formatFa, t as cancerLabel } from "./store-a_Zrpcpw.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visit-BrKpjWBh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VisitPage() {
	const profile = useCare((state) => state.profile);
	const saved = useCare((state) => state.visit);
	const setVisit = useCare((state) => state.setVisit);
	const [form, setForm] = (0, import_react.useState)(saved);
	(0, import_react.useEffect)(() => {
		setForm(saved);
	}, [saved]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "پیش از ویزیت",
				title: "قبل از اتاق پزشک، حال‌تان را مرتب کنید.",
				lede: "این فرم برای تیم درمان بیمارستان فرستاده نمی‌شود. روی همین دستگاه می‌ماند تا سر ویزیت از رویش بخوانید یا چاپ کنید."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit: (event) => {
						event.preventDefault();
						setVisit(form);
						toast.success("فرم روی این دستگاه ذخیره شد");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "از ویزیت قبل چه عوض شده؟",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: form.sinceLast,
								onChange: (event) => setForm({
									...form,
									sinceLast: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "دارو؛ آنچه خوردم و آنچه جا افتاد",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: form.meds,
								onChange: (event) => setForm({
									...form,
									meds: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "علامت تازه",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: form.newSymptoms,
								onChange: (event) => setForm({
									...form,
									newSymptoms: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "سؤال‌هایی که باید بپرسم",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
								value: form.questions,
								onChange: (event) => setForm({
									...form,
									questions: event.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex justify-between",
								children: ["درد الآن ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-cypress",
									children: faNum(form.painNow)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: 10,
								value: form.painNow,
								onChange: (event) => setForm({
									...form,
									painNow: Number(event.target.value)
								}),
								className: "mt-3 w-full accent-cypress"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex justify-between",
								children: ["حال روحی ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-cypress",
									children: faNum(form.mood)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: 10,
								value: form.mood,
								onChange: (event) => setForm({
									...form,
									mood: Number(event.target.value)
								}),
								className: "mt-3 w-full accent-cypress"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "ذخیره"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								tone: "quiet",
								onClick: () => window.print(),
								children: "چاپ برای همراه بردن"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "h-fit",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-copper",
							children: "برگهٔ خواندنی برای پزشک"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-extrabold",
							children: profile.name || "بیمار"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								cancerLabel(profile),
								" · ",
								formatFa(todayISO()),
								profile.demo ? " · نمونهٔ نمایشی" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 grid gap-4 text-sm leading-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									term: "از ویزیت قبل",
									text: form.sinceLast
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									term: "دارو",
									text: form.meds
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									term: "علامت تازه",
									text: form.newSymptoms
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									term: "سؤال‌ها",
									text: form.questions
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									term: "درد الآن",
									text: faNum(form.painNow)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									term: "حال روحی",
									text: faNum(form.mood)
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Item({ term, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "font-semibold",
		children: term
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "text-muted",
		children: text.trim() || "—"
	})] });
}
//#endregion
export { VisitPage as component };
