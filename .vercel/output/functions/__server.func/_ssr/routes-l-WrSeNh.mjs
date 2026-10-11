import { Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Card, r as Disclaimer } from "./ui-CQFk7eZh.mjs";
import { d as safeTel, m as useCare, p as upcomingCheckups, s as formatFa, t as cancerLabel, u as relativeDay } from "./store-a_Zrpcpw.mjs";
import { r as phaseLabel, t as getPathway } from "./nccn-DxRf9wrR.mjs";
import { a as Route, i as ShieldCheck, l as ClipboardList, r as Stethoscope } from "../_libs/lucide-react.mjs";
import { i as LevelChip } from "./router-BG-louj4.mjs";
import { i as trendNote, r as latestAssessment, t as assessReview } from "./flags-BJNhnRiI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-l-WrSeNh.js
var import_jsx_runtime = require_jsx_runtime();
var paths = [
	{
		title: "مسیر گفتگو",
		text: "شش سرطان شایع طرح؛ سؤال‌هایی که سر ویزیت جا می‌مانند، بدون بازنشر NCCN.",
		to: "/nccn"
	},
	{
		title: "چکاپ آموزشی",
		text: "درد، تب، اکسیژن و هشدار شفاف. تشخیص و پیش‌بینی متاستاز ندارد.",
		to: "/checkup"
	},
	{
		title: "پیگیری",
		text: "دفتر حال، علائم حیاتی خانگی و تقویم آزمایش و تزریق.",
		to: "/track"
	}
];
function Home() {
	if (!useCare((state) => state.profile).onboarded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {});
}
function Landing() {
	const loadDemo = useCare((state) => state.loadDemo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid items-end gap-8 lg:grid-cols-[1.4fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-copper",
						children: "مرکز رشد فناوری سلامت · نسخهٔ دوم"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl",
						children: "نقشهٔ درمان، برای فاصلهٔ بین دو ویزیت."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lg leading-8 text-muted",
						children: "همدم برای بیماران بیمارستان آیت‌الله رئیسی است. نسخهٔ دوم مسیر گفتگو با تیم درمان را — به زبان بیمار و جدا از متن مجوزدار NCCN — کنار دفتر حال، چکاپ و حمایت می‌گذارد."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/file",
							className: "inline-flex min-h-11 items-center rounded-xl bg-cypress px-4 text-sm font-semibold text-paper",
							children: "ساخت پرونده روی این دستگاه"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: loadDemo,
							className: "inline-flex min-h-11 items-center rounded-xl border border-line bg-surface px-4 text-sm font-semibold",
							children: "دیدن با نمونهٔ نمایشی"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "bg-cypress text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-foam",
						children: "نسخهٔ دوم چه چیزی اضافه کرده"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-3 text-sm leading-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "نقشهٔ سؤال برای پستان، روده، ریه، پروستات، کبد و پوست." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "چکاپ آموزشی با قاعدهٔ روشن تب، درد، اکسیژن و علامت عصبی." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ثبت دمای خانگی، ضربان و پالس‌اکسی‌متر؛ بدون ادعای اتصال دستگاه پزشکی." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "همراه هوشمند که متن مسیر را توضیح می‌دهد و تشخیص نمی‌دهد." })
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: paths.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: "rounded-card border border-line bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-muted",
						children: item.text
					})]
				}, item.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
						className: "size-6 shrink-0 text-cypress",
						strokeWidth: 1.75
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-7 text-muted",
						children: "شبکهٔ عصبی تشخیص سرطان و پیش‌بینی متاستاز هنوز در محصول بیمار نیست. دلیلش را در محدودهٔ نسخه بخوانید."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/scope",
						className: "text-sm font-semibold text-cypress sm:ms-auto",
						children: "محدودهٔ نسخهٔ دوم"
					})
				]
			})
		]
	});
}
function Dashboard() {
	const profile = useCare((state) => state.profile);
	const symptoms = useCare((state) => state.symptoms);
	const checkups = useCare((state) => state.checkups);
	const reviews = useCare((state) => state.reviews);
	const vitals = useCare((state) => state.vitals);
	const clearAll = useCare((state) => state.clearAll);
	const assessment = latestAssessment(symptoms);
	const trend = trendNote(symptoms);
	const next = upcomingCheckups(checkups)[0];
	const tel = safeTel(profile.clinicPhone);
	const latest = [...symptoms].sort((a, b) => b.date.localeCompare(a.date))[0];
	const review = [...reviews].sort((a, b) => b.date.localeCompare(a.date))[0];
	const vital = [...vitals].sort((a, b) => b.date.localeCompare(a.date))[0];
	const pathway = getPathway(profile.cancerId);
	const reviewAssessment = review ? assessReview(review) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disclaimer, {}),
			profile.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-6 text-copper",
				children: [
					"این پرونده نمونهٔ نمایشی و ساختگی است.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: clearAll,
						className: "font-semibold underline",
						children: "پاک کردن و شروع واقعی"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 lg:grid-cols-[1.3fr_0.7fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "پروندهٔ این دستگاه"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 text-3xl font-extrabold tracking-tight",
								children: profile.name || "بدون نام"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [
									cancerLabel(profile),
									` · ${phaseLabel(profile.phase)}`,
									profile.city ? ` · ${profile.city}` : "",
									profile.doctor ? ` · ${profile.doctor}` : ""
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelChip, { level: reviewAssessment?.level ?? assessment.level })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-xl font-bold",
						children: (reviewAssessment ?? assessment).title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2 text-sm leading-6 text-muted",
						children: (reviewAssessment ?? assessment).reasons.map((reason) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: reason }, reason))
					}),
					trend ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-medium text-cypress",
						children: trend
					}) : null,
					assessment.level === "urgent" || reviewAssessment?.level === "urgent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4",
						children: tel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: tel,
							className: "inline-flex min-h-11 items-center rounded-xl bg-copper px-4 text-sm font-semibold text-paper",
							children: "تماس با شماره‌ای که خودتان ذخیره کرده‌اید"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/file",
							className: "text-sm font-semibold text-copper",
							children: "شمارهٔ درمانگاه را در پرونده بنویسید تا دکمهٔ تماس فعال شود"
						})
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "نوبت پیش رو"
						}),
						next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-extrabold tabular-nums",
								children: relativeDay(next.date)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-medium",
								children: next.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [formatFa(next.date), next.place ? ` · ${next.place}` : ""]
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-7 text-muted",
							children: "نوبت آینده‌ای در تقویم نیست."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/track",
							className: "mt-auto pt-4 text-sm font-semibold text-cypress",
							children: "دفتر پیگیری"
						})
					]
				})]
			}),
			pathway ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
						className: "size-5 shrink-0 text-cypress",
						strokeWidth: 1.75
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-bold",
						children: ["مسیر ", pathway.title]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-6 text-muted",
						children: pathway.summary
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/nccn/$slug",
						params: { slug: pathway.slug },
						className: "text-sm font-semibold text-cypress sm:ms-auto",
						children: "باز کردن نقشه"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bold",
					children: "مسیر گفتگو هنوز انتخاب نشده"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-7 text-muted",
					children: "نوع را در پرونده مشخص کنید تا سؤال‌های همان سرطان بیاید."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/nccn",
					className: "mt-3 inline-block text-sm font-semibold text-cypress",
					children: "دیدن هر شش مسیر"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/checkup",
						className: "rounded-card border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
								className: "size-5 text-cypress",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-bold",
								children: "چکاپ آموزشی"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: review ? `آخرین چکاپ ${formatFa(review.date)}` : "هنوز چکاپی ثبت نشده"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/visit",
						className: "rounded-card border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
								className: "size-5 text-cypress",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-bold",
								children: "پیش از ویزیت"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "سؤال‌های مسیر را این‌جا جمع کنید."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/track",
						className: "rounded-card border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-cypress",
								children: "علائم خانگی"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-bold",
								children: vital ? `اکسیژن ${vital.spo2 || "—"}` : "ثبت نشده"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted",
								children: [latest ? `حال ${formatFa(latest.date)}` : "دفتر حال خالی است", vital?.temp ? ` · دما ${vital.temp}` : ""]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
