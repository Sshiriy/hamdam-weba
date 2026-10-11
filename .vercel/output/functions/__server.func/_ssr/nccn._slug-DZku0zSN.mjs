import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Card, t as Button } from "./ui-CQFk7eZh.mjs";
import { m as useCare } from "./store-a_Zrpcpw.mjs";
import { a as stagesFor, i as phases, r as phaseLabel, t as getPathway } from "./nccn-DxRf9wrR.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route$1 } from "./router-BG-louj4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nccn._slug-DZku0zSN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PathwayPage() {
	const { slug } = Route$1.useParams();
	const pathway = getPathway(slug);
	const profile = useCare((state) => state.profile);
	const setVisit = useCare((state) => state.setVisit);
	const visit = useCare((state) => state.visit);
	const [phase, setPhase] = (0, import_react.useState)(profile.phase || "unsure");
	const synced = (0, import_react.useRef)(profile.onboarded);
	(0, import_react.useEffect)(() => {
		if (synced.current || !profile.onboarded) return;
		synced.current = true;
		setPhase(profile.phase);
	}, [profile]);
	if (!pathway) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-extrabold",
			children: "این مسیر در نسخهٔ دوم نیست."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/nccn",
			className: "mt-4 inline-block font-semibold text-cypress",
			children: "بازگشت به مسیرها"
		})]
	});
	const stages = stagesFor(pathway, phase);
	function keepQuestions(questions) {
		const block = questions.map((item) => `• ${item}`).join("\n");
		if (visit.questions.includes(questions[0] ?? "___")) {
			toast("این سؤال‌ها قبلاً در فرم پیش‌ویزیت هست");
			return;
		}
		setVisit({
			...visit,
			questions: [visit.questions.trim(), block].filter(Boolean).join("\n")
		});
		toast.success("به فرم پیش از ویزیت اضافه شد");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/nccn",
					className: "text-sm font-medium text-cypress",
					children: "مسیرها"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm font-medium text-copper",
					children: "آموزش بیمار · الهام از ساختار گفتگو، نه متن NCCN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl",
					children: pathway.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-lg leading-8 text-muted",
					children: pathway.summary
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: phases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPhase(item.id),
					className: phase === item.id ? "shrink-0 rounded-full bg-cypress px-4 py-2 text-sm font-semibold text-paper" : "shrink-0 rounded-full border border-line bg-surface px-4 py-2 text-sm",
					children: item.label
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-7 text-muted",
				children: phases.find((item) => item.id === phase)?.hint
			}),
			stages.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold text-copper",
					children: phaseLabel(stage.phase)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-xl font-bold",
					children: stage.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-7 text-muted",
					children: stage.intent
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-4",
					children: stage.topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "border-s-2 border-cypress ps-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold",
							children: topic.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-7 text-muted",
							children: topic.body
						})]
					}, topic.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-bold",
					children: "سؤال‌هایی که می‌توانید ببرید"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid gap-2 text-sm leading-7",
					children: stage.questions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl bg-paper px-3 py-2",
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					tone: "quiet",
					onClick: () => keepQuestions(stage.questions),
					children: "افزودن به فرم پیش‌ویزیت"
				})
			] }, stage.phase)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: "واژه‌هایی که در گزارش می‌آیند"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3",
					children: pathway.markers.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-7 text-muted",
						children: item.body
					})] }, item.title))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: "به نوبت بعدی نسپارید"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2 text-sm leading-7",
						children: pathway.redFlags.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-xl bg-copper-soft px-3 py-2 text-copper",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-bold",
						children: "موضوع‌های پیگیری"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 grid gap-2 text-sm leading-7 text-muted",
						children: pathway.followThemes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/checkup",
					className: "inline-flex min-h-11 items-center rounded-xl bg-cypress px-4 text-sm font-semibold text-paper",
					children: "چکاپ آموزشی همین مسیر"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/learn/$slug",
					params: { slug: pathway.slug },
					className: "inline-flex min-h-11 items-center rounded-xl border border-line bg-surface px-4 text-sm font-semibold",
					children: ["برگهٔ آموزش ", pathway.title]
				})]
			})
		]
	});
}
//#endregion
export { PathwayPage as component };
