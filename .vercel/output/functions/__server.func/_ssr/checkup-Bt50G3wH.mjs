import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, c as TextInput, i as Field, n as Card, o as Select, r as Disclaimer, s as TextArea, t as Button } from "./ui-CQFk7eZh.mjs";
import { f as todayISO, m as useCare, n as cancerOptions, o as faNum } from "./store-a_Zrpcpw.mjs";
import { a as stagesFor, i as phases, r as phaseLabel, t as getPathway } from "./nccn-DxRf9wrR.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as LevelChip } from "./router-BG-louj4.mjs";
import { t as askCompanion } from "./companion.functions-C9Rq76J0.mjs";
import { t as assessReview } from "./flags-BJNhnRiI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkup-Bt50G3wH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var flagOptions = [
	["fever", "تب یا لرز"],
	["breath", "تنگی نفس تازه"],
	["chest", "درد قفسه سینه"],
	["bleeding", "خونریزی غیرمعمول"],
	["vomiting", "استفراغ مهارنشده"],
	["confusion", "گیجی یا غش"],
	["neuro", "ضعف یک‌طرفه یا اختلال گفتار"],
	["headache", "سردرد ناگهانی شدید"]
];
function CheckupPage() {
	const profile = useCare((state) => state.profile);
	const addReview = useCare((state) => state.addReview);
	const addSymptom = useCare((state) => state.addSymptom);
	const addVital = useCare((state) => state.addVital);
	const addChat = useCare((state) => state.addChat);
	const saveProfile = useCare((state) => state.saveProfile);
	const [cancerId, setCancerId] = (0, import_react.useState)(getPathway(profile.cancerId)?.slug ?? "breast");
	const [phase, setPhase] = (0, import_react.useState)(profile.phase || "unsure");
	const synced = (0, import_react.useRef)(profile.onboarded);
	const [pain, setPain] = (0, import_react.useState)(0);
	const [temp, setTemp] = (0, import_react.useState)("");
	const [spo2, setSpo2] = (0, import_react.useState)("");
	const [pulse, setPulse] = (0, import_react.useState)("");
	const [flags, setFlags] = (0, import_react.useState)([]);
	const [note, setNote] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [aiError, setAiError] = (0, import_react.useState)(null);
	const pathway = getPathway(cancerId);
	const assessment = assessReview({
		pain,
		temp,
		spo2,
		pulse,
		flags
	});
	const stages = pathway ? stagesFor(pathway, phase) : [];
	(0, import_react.useEffect)(() => {
		if (synced.current || !profile.onboarded) return;
		synced.current = true;
		const slug = getPathway(profile.cancerId)?.slug;
		if (slug) setCancerId(slug);
		setPhase(profile.phase);
	}, [profile]);
	function toggle(id) {
		setFlags((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
		setDone(false);
	}
	function save() {
		if (!pathway) return;
		addReview({
			date: todayISO(),
			cancerId: pathway.slug,
			phase,
			pain,
			temp,
			spo2,
			pulse,
			flags,
			note
		});
		addSymptom({
			date: todayISO(),
			pain,
			fatigue: 0,
			nausea: 0,
			appetite: 7,
			mood: 5,
			fever: flags.includes("fever"),
			breath: flags.includes("breath"),
			bleeding: flags.includes("bleeding"),
			vomiting: flags.includes("vomiting"),
			confusion: flags.includes("confusion") || flags.includes("neuro"),
			weight: "stable",
			note: note.trim() || "ثبت‌شده از چکاپ آموزشی."
		});
		if (temp.trim() || spo2.trim() || pulse.trim()) addVital({
			date: todayISO(),
			temp,
			spo2,
			pulse,
			note: note.trim()
		});
		if (profile.onboarded) saveProfile({
			...profile,
			cancerId: pathway.slug,
			phase
		});
		setDone(true);
		toast.success("چکاپ روی همین دستگاه ماند");
	}
	async function explain() {
		if (!pathway || pending) return;
		setPending(true);
		setAiError(null);
		const questions = stages.flatMap((stage) => stage.questions).slice(0, 4);
		const prompt = [
			"این جمع‌بندی چکاپ آموزشی را برای پزشک در پنج خط بنویس. تشخیص نده.",
			`نوع: ${pathway.title}. مرحلهٔ خوداظهار: ${phaseLabel(phase)}.`,
			`جمع‌بندی قاعده: ${assessment.title}. دلایل: ${assessment.reasons.join(" ")}`,
			note ? `یادداشت بیمار: ${note}` : "",
			`سؤال‌های آماده: ${questions.join(" / ")}`
		].filter(Boolean).join("\n");
		addChat({
			role: "user",
			text: prompt
		});
		try {
			const result = await askCompanion({ data: {
				message: prompt,
				history: [],
				context: `مسیر آموزشی ${pathway.title}. ${pathway.summary} هشدارها: ${pathway.redFlags.join("؛ ")}`
			} });
			if (!result.ok) {
				setAiError(result.error);
				return;
			}
			addChat({
				role: "assistant",
				text: result.text
			});
			toast.success("متن در همراه هوشمند ذخیره شد");
		} catch {
			setAiError("ارتباط برقرار نشد. سؤال‌ها را از فرم پیش‌ویزیت بخوانید.");
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "چکاپ آموزشی",
				title: "حال امروز را کنار نقشهٔ مسیر بگذارید.",
				lede: "این چکاپ سرطان را تشخیص نمی‌دهد و متاستاز را پیش‌بینی نمی‌کند. قاعده‌اش شفاف است: فقط علامت، دما، اکسیژن و دردی که خودتان وارد می‌کنید."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "مسیر گفتگو",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: cancerId,
							onChange: (event) => {
								setCancerId(event.target.value);
								setDone(false);
							},
							children: cancerOptions.filter((item) => getPathway(item.id)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.id,
								children: item.label
							}, item.id))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "کجای مسیر هستید؟",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: phase,
							onChange: (event) => {
								setPhase(event.target.value);
								setDone(false);
							},
							children: phases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.id,
								children: item.label
							}, item.id))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-baseline justify-between text-sm font-medium",
						children: ["درد الان", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-cypress",
							children: faNum(pain)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 10,
						value: pain,
						onChange: (event) => {
							setPain(Number(event.target.value));
							setDone(false);
						},
						className: "mt-3 w-full accent-cypress"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "دما",
							hint: "اگر گرفتید",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "decimal",
								value: temp,
								placeholder: "۳۶٫۸",
								onChange: (event) => {
									setTemp(event.target.value);
									setDone(false);
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "اکسیژن",
							hint: "پالس‌اکسی‌متر خانگی",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "numeric",
								value: spo2,
								placeholder: "۹۷",
								onChange: (event) => {
									setSpo2(event.target.value);
									setDone(false);
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "ضربان",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								inputMode: "numeric",
								value: pulse,
								placeholder: "۸۰",
								onChange: (event) => {
									setPulse(event.target.value);
									setDone(false);
								}
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-medium",
						children: "اگر همین حالا هست"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid gap-2 sm:grid-cols-2",
						children: flagOptions.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 items-center gap-3 rounded-xl border border-line px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: flags.includes(id),
								onChange: () => toggle(id),
								className: "size-4 accent-cypress"
							}), label]
						}, id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "یک خط برای پزشک",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
							value: note,
							onChange: (event) => {
								setNote(event.target.value);
								setDone(false);
							}
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl bg-paper px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelChip, { level: assessment.level }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-semibold",
							children: assessment.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 grid gap-1 text-sm leading-6 text-muted",
							children: assessment.reasons.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: reason }, reason))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: save,
						children: "ثبت چکاپ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						tone: "quiet",
						disabled: pending,
						onClick: () => void explain(),
						children: pending ? "در حال نوشتن…" : "پنج خط برای پزشک"
					})]
				}),
				aiError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-7 text-copper",
					children: aiError
				}) : null,
				done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-cypress",
					children: [
						"در دفتر پیگیری هم نشست.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/companion",
							className: "font-semibold underline",
							children: "متن همراه هوشمند"
						})
					]
				}) : null
			] }),
			pathway ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-lg font-bold",
					children: ["برای ویزیت ", pathway.title]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm leading-7 text-muted",
					children: [
						"این‌ها توصیهٔ درمانی نیستند. سؤال‌هایی‌اند که در مرحلهٔ «",
						phaseLabel(phase),
						"» معمولاً جا می‌مانند."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2 text-sm leading-7",
					children: stages.flatMap((stage) => stage.questions).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl border border-line px-3 py-2",
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/nccn/$slug",
					params: { slug: pathway.slug },
					className: "mt-4 inline-block text-sm font-semibold text-cypress",
					children: "شرح همین مسیر"
				})
			] }) : null
		]
	});
}
//#endregion
export { CheckupPage as component };
