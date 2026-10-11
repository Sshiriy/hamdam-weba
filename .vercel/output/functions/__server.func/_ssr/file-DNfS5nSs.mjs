import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as TextInput, i as Field, n as Card, o as Select, t as Button } from "./ui-CQFk7eZh.mjs";
import { m as useCare, n as cancerOptions } from "./store-a_Zrpcpw.mjs";
import { i as phases } from "./nccn-DxRf9wrR.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/file-DNfS5nSs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FilePage() {
	const profile = useCare((state) => state.profile);
	const saveProfile = useCare((state) => state.saveProfile);
	const family = useCare((state) => state.family);
	const addFamily = useCare((state) => state.addFamily);
	const removeFamily = useCare((state) => state.removeFamily);
	const clearAll = useCare((state) => state.clearAll);
	const [draft, setDraft] = (0, import_react.useState)(profile);
	(0, import_react.useEffect)(() => {
		setDraft(profile);
	}, [profile]);
	const [relation, setRelation] = (0, import_react.useState)("مادر");
	const [condition, setCondition] = (0, import_react.useState)("");
	const [ageAt, setAgeAt] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "پرونده",
				title: "اطلاعاتی که فقط روی این دستگاه می‌ماند.",
				lede: "نسخهٔ دوم هم حساب ابری ندارد. نام، مرحلهٔ خوداظهار، سابقهٔ خانوادگی و شمارهٔ درمانگاه فقط روی همین دستگاه می‌ماند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-4 sm:grid-cols-2",
				onSubmit: (event) => {
					event.preventDefault();
					saveProfile({
						...draft,
						onboarded: true,
						demo: false
					});
					toast.success("پرونده ذخیره شد");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "نام و نام خانوادگی",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							required: true,
							value: draft.name,
							onChange: (event) => setDraft({
								...draft,
								name: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "سن",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: draft.age,
							onChange: (event) => setDraft({
								...draft,
								age: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "جنسیت",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: draft.sex,
							onChange: (event) => setDraft({
								...draft,
								sex: event.target.value
							}),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "female",
									children: "زن"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "male",
									children: "مرد"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "unspecified",
									children: "ترجیح می‌دهم نگویم"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "نوع سرطان، اگر گفته شده",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: draft.cancerId,
							onChange: (event) => setDraft({
								...draft,
								cancerId: event.target.value
							}),
							children: cancerOptions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.id,
								children: item.label
							}, item.id))
						})
					}),
					draft.cancerId === "other" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "نامی که پزشک گفته",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: draft.cancerNote,
							onChange: (event) => setDraft({
								...draft,
								cancerNote: event.target.value
							})
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "کجای مسیر هستید؟",
						hint: "برای چیدن سؤال‌هاست، نه مرحله‌بندی پزشکی.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: draft.phase,
							onChange: (event) => setDraft({
								...draft,
								phase: event.target.value
							}),
							children: phases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.id,
								children: item.label
							}, item.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "سال شروع پیگیری",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: draft.diagnosisYear,
							onChange: (event) => setDraft({
								...draft,
								diagnosisYear: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "پزشک یا تیم درمان",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: draft.doctor,
							onChange: (event) => setDraft({
								...draft,
								doctor: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "شهر",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: draft.city,
							onChange: (event) => setDraft({
								...draft,
								city: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "شمارهٔ درمانگاه",
						hint: "اختیاری. فقط برای دکمهٔ تماس خودتان، جایی منتشر نمی‌شود.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							inputMode: "tel",
							value: draft.clinicPhone,
							onChange: (event) => setDraft({
								...draft,
								clinicPhone: event.target.value
							}),
							placeholder: "مثلاً شمارهٔ بخش"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "ذخیرهٔ پرونده"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							tone: "quiet",
							onClick: () => {
								if (window.confirm("همهٔ داده‌های همدم از این دستگاه پاک شود؟")) clearAll();
							},
							children: "پاک کردن همهٔ داده‌های این دستگاه"
						})]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "سابقه در خانواده"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-7 text-muted",
					children: "این فهرست خطر کسی را حساب نمی‌کند. فقط کمک می‌کند سر ویزیت چیزی را از قلم نیندازید."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					onSubmit: (event) => {
						event.preventDefault();
						if (!condition.trim()) return;
						addFamily({
							relation,
							condition: condition.trim(),
							ageAt,
							note
						});
						setCondition("");
						setAgeAt("");
						setNote("");
						toast.success("به سابقهٔ خانوادگی اضافه شد");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "نسبت",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: relation,
								onChange: (event) => setRelation(event.target.value),
								children: [
									"مادر",
									"پدر",
									"خواهر",
									"برادر",
									"فرزند",
									"مادربزرگ",
									"پدربزرگ",
									"سایر"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "بیماری، همان‌طور که می‌دانید",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								required: true,
								value: condition,
								onChange: (event) => setCondition(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "سن تقریبی هنگام بیماری",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: ageAt,
								onChange: (event) => setAgeAt(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "یادداشت",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: note,
								onChange: (event) => setNote(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "افزودن"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2",
					children: family.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start justify-between gap-3 rounded-xl border border-line px-3 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: member.relation
							}),
							" · ",
							member.condition,
							member.ageAt ? ` · سن ${member.ageAt}` : "",
							member.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-muted",
								children: member.note
							}) : null
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-copper",
							onClick: () => removeFamily(member.id),
							children: "حذف"
						})]
					}, member.id))
				})
			] })
		]
	});
}
//#endregion
export { FilePage as component };
