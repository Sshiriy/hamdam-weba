import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as TextInput, i as Field, n as Card, o as Select, s as TextArea, t as Button } from "./ui-CQFk7eZh.mjs";
import { c as formatFaShort, f as todayISO, l as orderedSymptoms, m as useCare, o as faNum, r as checkupKinds, s as formatFa } from "./store-a_Zrpcpw.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as LevelChip } from "./router-BG-louj4.mjs";
import { n as assessSymptom, t as assessReview } from "./flags-BJNhnRiI.mjs";
import { a as CartesianGrid, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-DDxGGtMV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyDraft = () => ({
	date: todayISO(),
	pain: 0,
	fatigue: 0,
	nausea: 0,
	appetite: 7,
	mood: 5,
	fever: false,
	breath: false,
	bleeding: false,
	vomiting: false,
	confusion: false,
	weight: "stable",
	note: ""
});
function TrackPage() {
	const symptoms = useCare((state) => state.symptoms);
	const checkups = useCare((state) => state.checkups);
	const addSymptom = useCare((state) => state.addSymptom);
	const removeSymptom = useCare((state) => state.removeSymptom);
	const addCheckup = useCare((state) => state.addCheckup);
	const updateCheckup = useCare((state) => state.updateCheckup);
	const removeCheckup = useCare((state) => state.removeCheckup);
	const vitals = useCare((state) => state.vitals);
	const addVital = useCare((state) => state.addVital);
	const removeVital = useCare((state) => state.removeVital);
	const [draft, setDraft] = (0, import_react.useState)(emptyDraft);
	const [title, setTitle] = (0, import_react.useState)("");
	const [date, setDate] = (0, import_react.useState)(todayISO);
	const [kind, setKind] = (0, import_react.useState)("visit");
	const [place, setPlace] = (0, import_react.useState)("بیمارستان آیت‌الله رئیسی");
	const [vDate, setVDate] = (0, import_react.useState)(todayISO);
	const [spo2, setSpo2] = (0, import_react.useState)("");
	const [pulse, setPulse] = (0, import_react.useState)("");
	const [temp, setTemp] = (0, import_react.useState)("");
	const [vNote, setVNote] = (0, import_react.useState)("");
	const chart = orderedSymptoms(symptoms).map((item) => ({
		name: formatFaShort(item.date),
		درد: item.pain,
		خستگی: item.fatigue,
		تهوع: item.nausea
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "پیگیری",
				title: "دفتر حال و تقویم مراجعه.",
				lede: "عددها برای یادآوری سر ویزیت‌اند. اکسیژن و دمای خانگی را خودتان می‌نویسید؛ دستگاه پزشکی به برنامه وصل نیست و قاعدهٔ هشدار تشخیص نمی‌دهد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-bold",
				children: "ثبت حال"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-4 grid gap-5",
				onSubmit: (event) => {
					event.preventDefault();
					addSymptom(draft);
					setDraft(emptyDraft());
					toast.success("حال امروز در پروندهٔ این دستگاه ثبت شد");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "تاریخ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							type: "date",
							required: true,
							value: draft.date,
							onChange: (event) => setDraft({
								...draft,
								date: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
								label: "درد",
								hint: "۰ یعنی ندارم، ۱۰ یعنی شدیدترین",
								value: draft.pain,
								onChange: (pain) => setDraft({
									...draft,
									pain
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
								label: "خستگی",
								value: draft.fatigue,
								onChange: (fatigue) => setDraft({
									...draft,
									fatigue
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
								label: "تهوع",
								value: draft.nausea,
								onChange: (nausea) => setDraft({
									...draft,
									nausea
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
								label: "اشتها",
								hint: "۱۰ یعنی اشتهای همیشگی",
								value: draft.appetite,
								onChange: (appetite) => setDraft({
									...draft,
									appetite
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, {
								label: "حال روحی",
								hint: "۰ خیلی پایین، ۱۰ پایدار",
								value: draft.mood,
								onChange: (mood) => setDraft({
									...draft,
									mood
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "وزن از دید خودتان",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: draft.weight,
									onChange: (event) => setDraft({
										...draft,
										weight: event.target.value
									}),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "stable",
											children: "تقریباً ثابت"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "down",
											children: "کم شده"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "up",
											children: "زیاد شده"
										})
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-medium",
						children: "اگر امروز بوده، علامت بزنید"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid gap-2 sm:grid-cols-2",
						children: [
							["fever", "تب"],
							["breath", "تنگی نفس"],
							["bleeding", "خونریزی"],
							["vomiting", "استفراغ شدید"],
							["confusion", "گیجی یا غش"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 items-center gap-3 rounded-xl border border-line px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: draft[key],
								onChange: (event) => setDraft({
									...draft,
									[key]: event.target.checked
								}),
								className: "size-4 accent-cypress"
							}), label]
						}, key))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "یادداشت آزاد",
						hint: "محل درد، عدد تب، دارویی که جا افتاده",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							value: draft.note,
							onChange: (event) => setDraft({
								...draft,
								note: event.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, { assessment: assessSymptom({
						...draft,
						id: "draft"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "ثبت در دفتر"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "روند ثبت‌ها"
				}),
				chart.length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-7 text-muted",
					children: "با دو ثبت در روزهای مختلف، نمودار درد و خستگی کشیده می‌شود."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-64 w-full",
					dir: "ltr",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: chart,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: "var(--color-line)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									tick: {
										fill: "var(--color-muted)",
										fontSize: 12
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									domain: [0, 10],
									tick: {
										fill: "var(--color-muted)",
										fontSize: 12
									},
									width: 28
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "درد",
									stroke: "var(--color-copper)",
									strokeWidth: 2,
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "خستگی",
									stroke: "var(--color-cypress)",
									strokeWidth: 2,
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "تهوع",
									stroke: "var(--color-muted)",
									strokeWidth: 2,
									dot: false
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3",
					children: [...symptoms].sort((a, b) => b.date.localeCompare(a.date)).map((item) => {
						const assessment = assessSymptom(item);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-line px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: formatFa(item.date)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelChip, { level: assessment.level })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted",
									children: [
										"درد ",
										faNum(item.pain),
										" · خستگی ",
										faNum(item.fatigue),
										" · تهوع ",
										faNum(item.nausea)
									]
								}),
								item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-6",
									children: item.note
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeSymptom(item.id),
									className: "mt-2 text-sm text-copper",
									children: "حذف این ثبت"
								})
							]
						}, item.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "دما، اکسیژن، ضربان"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-7 text-muted",
					children: "اگر پالس‌اکسی‌متر خانگی دارید عدد را کنار حال نفس بنویسید. انگشت سرد یا لاک ناخن عدد را خراب می‌کند."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					onSubmit: (event) => {
						event.preventDefault();
						if (!spo2.trim() && !pulse.trim() && !temp.trim()) return;
						addVital({
							date: vDate,
							spo2: spo2.trim(),
							pulse: pulse.trim(),
							temp: temp.trim(),
							note: vNote.trim()
						});
						setSpo2("");
						setPulse("");
						setTemp("");
						setVNote("");
						toast.success("علائم خانگی ثبت شد");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "تاریخ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								type: "date",
								required: true,
								value: vDate,
								onChange: (event) => setVDate(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "اکسیژن",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "numeric",
								value: spo2,
								onChange: (event) => setSpo2(event.target.value),
								placeholder: "۹۷"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ضربان",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "numeric",
								value: pulse,
								onChange: (event) => setPulse(event.target.value),
								placeholder: "۸۰"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "دما",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "decimal",
								value: temp,
								onChange: (event) => setTemp(event.target.value),
								placeholder: "۳۶.۸"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "یادداشت",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: vNote,
									onChange: (event) => setVNote(event.target.value)
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "ثبت علائم خانگی"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2",
					children: vitals.map((item) => {
						const level = assessReview({
							pain: 0,
							temp: item.temp,
							spo2: item.spo2,
							pulse: item.pulse,
							flags: []
						});
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl border border-line px-4 py-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: formatFa(item.date)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelChip, { level: level.level })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-muted",
									children: [
										item.spo2 ? `اکسیژن ${item.spo2}` : "اکسیژن —",
										item.pulse ? ` · ضربان ${item.pulse}` : "",
										item.temp ? ` · دما ${item.temp}` : ""
									]
								}),
								item.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1",
									children: item.note
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "mt-2 text-copper",
									onClick: () => removeVital(item.id),
									children: "حذف"
								})
							]
						}, item.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "تقویم پیگیری"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					onSubmit: (event) => {
						event.preventDefault();
						if (!title.trim()) return;
						addCheckup({
							title: title.trim(),
							date,
							kind,
							place: place.trim(),
							done: false,
							note: ""
						});
						setTitle("");
						toast.success("به تقویم اضافه شد");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "عنوان",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: title,
								onChange: (event) => setTitle(event.target.value),
								required: true,
								placeholder: "ویزیت، آزمایش، تصویربرداری"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "تاریخ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								type: "date",
								required: true,
								value: date,
								onChange: (event) => setDate(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "نوع",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								value: kind,
								onChange: (event) => setKind(event.target.value),
								children: checkupKinds.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item.id,
									children: item.label
								}, item.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "محل",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: place,
								onChange: (event) => setPlace(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: "افزودن نوبت"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-3",
					children: [...checkups].sort((a, b) => a.date.localeCompare(b.date)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-center gap-3 rounded-xl border border-line px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 flex-1 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: item.done,
								onChange: (event) => updateCheckup(item.id, { done: event.target.checked }),
								className: "size-4 accent-cypress"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-muted",
								children: [
									formatFa(item.date),
									" · ",
									checkupKinds.find((kindItem) => kindItem.id === item.kind)?.label,
									item.place ? ` · ${item.place}` : ""
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => removeCheckup(item.id),
							className: "text-sm text-copper",
							children: "حذف"
						})]
					}, item.id))
				})
			] })
		]
	});
}
function Scale({ label, hint, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-baseline justify-between gap-3 text-sm font-medium",
				children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-cypress",
					children: faNum(value)
				})]
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-muted",
				children: hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: 0,
				max: 10,
				value,
				onChange: (event) => onChange(Number(event.target.value)),
				className: "mt-3 w-full accent-cypress"
			})
		]
	});
}
function Preview({ assessment }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-paper px-4 py-3 text-sm leading-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelChip, { level: assessment.level }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-medium",
			children: assessment.title
		})]
	});
}
//#endregion
export { TrackPage as component };
