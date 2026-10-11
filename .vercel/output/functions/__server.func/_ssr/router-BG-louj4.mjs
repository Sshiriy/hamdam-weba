import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime, _ as lazyRouteComponent, b as Link, f as Scripts, g as Outlet, h as createRouter, p as HeadContent, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as cx } from "./ui-CQFk7eZh.mjs";
import { a as emptyVisit, i as emptyProfile, m as useCare } from "./store-a_Zrpcpw.mjs";
import { t as getPathway } from "./nccn-DxRf9wrR.mjs";
import { n as getArticle } from "./articles-aWE-m8ku.mjs";
import { a as object, i as number, o as string, r as literal, s as union } from "../_libs/zod.mjs";
import { a as Route, c as HeartHandshake, n as TriangleAlert, o as MessagesSquare, r as Stethoscope, s as House, t as UserRound, u as Activity } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BG-louj4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var nav = [
	{
		to: "/",
		label: "خانه",
		icon: House,
		exact: true
	},
	{
		to: "/nccn",
		label: "مسیر",
		icon: Route,
		exact: false
	},
	{
		to: "/checkup",
		label: "چکاپ",
		icon: Stethoscope,
		exact: false
	},
	{
		to: "/track",
		label: "پیگیری",
		icon: Activity,
		exact: false
	},
	{
		to: "/support",
		label: "حمایت",
		icon: HeartHandshake,
		exact: false
	}
];
var desktopNav = [
	...nav,
	{
		to: "/learn",
		label: "آموزش",
		exact: false
	},
	{
		to: "/visit",
		label: "پیش‌ویزیت",
		exact: false
	}
];
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		"aria-hidden": "true",
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "16",
			cy: "16",
			r: "13.25",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M16 7.2c.2 2.4-.2 4.2-1.4 6.1-1.1 1.7-1.8 3-1.8 4.6a3.2 3.2 0 0 0 6.4 0c0-1.6-.7-2.9-1.8-4.6-1.2-1.9-1.6-3.7-1.4-6.1Z",
			fill: "currentColor"
		})]
	});
}
function Shell({ children }) {
	(0, import_react.useEffect)(() => {
		const current = useCare.getState();
		if (current.profile.onboarded || current.profile.name.length > 0 || current.symptoms.length > 0 || current.checkups.length > 0 || current.family.length > 0 || current.vitals.length > 0 || current.reviews.length > 0 || current.chat.length > 0 || current.visit.sinceLast.length > 0 || current.visit.questions.length > 0) return;
		try {
			const raw = localStorage.getItem("hamdam-v2") ?? localStorage.getItem("hamdam-v1");
			if (!raw) return;
			const saved = JSON.parse(raw).state;
			if (!saved) return;
			const profile = {
				...emptyProfile,
				...saved.profile ?? {},
				phase: saved.profile?.phase ?? "unsure"
			};
			useCare.setState({
				profile,
				family: saved.family ?? [],
				symptoms: saved.symptoms ?? [],
				checkups: saved.checkups ?? [],
				visit: saved.visit ?? emptyVisit,
				chat: saved.chat ?? [],
				vitals: saved.vitals ?? [],
				reviews: saved.reviews ?? []
			});
		} catch {}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "no-print border-b border-line bg-paper/95 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl items-center gap-4 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-full bg-cypress text-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-7" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-lg font-extrabold leading-none tracking-tight",
									children: "همدم"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block truncate text-xs text-muted",
									children: "بیمارستان آیت‌الله رئیسی · کرمانشاه"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ms-auto hidden items-center gap-1 lg:flex",
							children: desktopNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeOptions: { exact: item.exact },
								className: "rounded-full px-3 py-2 text-sm",
								activeProps: { className: "bg-foam font-semibold text-cypress" },
								inactiveProps: { className: "text-muted" },
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ms-auto flex items-center gap-2 lg:ms-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/companion",
								className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3 text-sm font-medium",
								activeProps: { className: "border-cypress bg-foam font-semibold text-cypress" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessagesSquare, {
									className: "size-4",
									strokeWidth: 1.75
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "همراه هوشمند"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/file",
								"aria-label": "پرونده",
								className: "grid size-11 place-items-center rounded-full border border-line bg-surface",
								activeProps: { className: "border-cypress bg-foam text-cypress" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
									className: "size-5",
									strokeWidth: 1.75
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-5xl flex-1 px-4 py-6 pb-28 lg:pb-10",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "no-print mx-auto hidden w-full max-w-5xl px-4 pb-8 text-sm text-muted lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "نسخهٔ دوم · داده فقط روی همین دستگاه می‌ماند." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/scope",
						className: "font-medium text-cypress",
						children: "محدودهٔ بالینی این نسخه"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "no-print fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface/95 backdrop-blur lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto grid max-w-lg grid-cols-5",
					children: nav.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							activeOptions: { exact: item.exact },
							className: "flex min-h-16 flex-col items-center justify-center gap-1 text-[11px]",
							activeProps: { className: "font-semibold text-cypress" },
							inactiveProps: { className: "text-muted" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.75
							}), item.label]
						}) }, item.to);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				dir: "rtl",
				toastOptions: { style: {
					fontFamily: "Vazirmatn, sans-serif",
					background: "var(--color-surface)",
					color: "var(--color-ink)",
					border: "1px solid var(--color-line)"
				} }
			})
		]
	});
}
function LevelChip({ level }) {
	const label = {
		urgent: "تماس امروز",
		soon: "مطرح در ویزیت",
		steady: "پیگیری معمول",
		empty: "بدون ثبت"
	}[level];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cx("inline-flex min-h-8 items-center rounded-full px-3 text-xs font-semibold", level === "urgent" && "bg-copper-soft text-copper", level === "soon" && "bg-foam text-cypress", (level === "steady" || level === "empty") && "bg-paper text-muted ring-1 ring-line"),
		children: label
	});
}
var styles_default = "/assets/styles-DyaNEXPz.css";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "همدم | بیمارستان آیت‌الله رئیسی" },
			{
				name: "description",
				content: "همدم؛ اطلاع‌رسانی درمان سرطان، پیگیری حال و پشتیبانی بیماران بیمارستان آیت‌الله رئیسی کرمانشاه. ابزار آموزشی است، نه تشخیص."
			},
			{
				name: "theme-color",
				content: "#1a5c48"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fa",
		dir: "rtl",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$11 = () => import("./routes-l-WrSeNh.mjs");
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "همدم | بیمارستان آیت‌الله رئیسی" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./checkup-Bt50G3wH.mjs");
var Route$11 = createFileRoute("/checkup")({
	head: () => ({ meta: [{ title: "چکاپ آموزشی | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./companion-CqtN61xh.mjs");
var Route$10 = createFileRoute("/companion")({
	head: () => ({ meta: [{ title: "همراه هوشمند | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./file-DNfS5nSs.mjs");
var Route$9 = createFileRoute("/file")({
	head: () => ({ meta: [{ title: "پرونده | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./learn-CveRcZo6.mjs");
var Route$8 = createFileRoute("/learn")({
	head: () => ({ meta: [{ title: "آموزش | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./nccn-B57TX4QZ.mjs");
var Route$7 = createFileRoute("/nccn")({
	head: () => ({ meta: [{ title: "مسیر آموزشی | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./scope-HwSULmV-.mjs");
var Route$6 = createFileRoute("/scope")({
	head: () => ({ meta: [{ title: "محدودهٔ نسخهٔ دوم | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./support-ISv5opUq.mjs");
var Route$5 = createFileRoute("/support")({
	head: () => ({ meta: [{ title: "حمایت | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./track-DDxGGtMV.mjs");
var Route$4 = createFileRoute("/track")({
	head: () => ({ meta: [{ title: "پیگیری | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./visit-BrKpjWBh.mjs");
var Route$3 = createFileRoute("/visit")({
	head: () => ({ meta: [{ title: "پیش از ویزیت | همدم" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./learn._slug-D7gL4aaN.mjs");
var Route$2 = createFileRoute("/learn/$slug")({
	head: ({ params }) => ({ meta: [{ title: `${getArticle(params.slug)?.title ?? "آموزش"} | همدم` }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./nccn._slug-DZku0zSN.mjs");
var Route$1 = createFileRoute("/nccn/$slug")({
	head: ({ params }) => ({ meta: [{ title: `${getPathway(params.slug)?.title ?? "مسیر"} | همدم` }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var CheckupRoute = Route$11.update({
	id: "/checkup",
	path: "/checkup",
	getParentRoute: () => Route$13
});
var CompanionRoute = Route$10.update({
	id: "/companion",
	path: "/companion",
	getParentRoute: () => Route$13
});
var FileRoute = Route$9.update({
	id: "/file",
	path: "/file",
	getParentRoute: () => Route$13
});
var LearnRoute = Route$8.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => Route$13
});
var NccnRoute = Route$7.update({
	id: "/nccn",
	path: "/nccn",
	getParentRoute: () => Route$13
});
var ScopeRoute = Route$6.update({
	id: "/scope",
	path: "/scope",
	getParentRoute: () => Route$13
});
var SupportRoute = Route$5.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => Route$13
});
var TrackRoute = Route$4.update({
	id: "/track",
	path: "/track",
	getParentRoute: () => Route$13
});
var VisitRoute = Route$3.update({
	id: "/visit",
	path: "/visit",
	getParentRoute: () => Route$13
});
var LearnSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => LearnRoute
});
var NccnSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => NccnRoute
});
var LearnRouteChildren = { LearnSlugRoute };
var LearnRouteWithChildren = LearnRoute._addFileChildren(LearnRouteChildren);
var NccnRouteChildren = { NccnSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	CheckupRoute,
	CompanionRoute,
	FileRoute,
	LearnRoute: LearnRouteWithChildren,
	NccnRoute: NccnRoute._addFileChildren(NccnRouteChildren),
	ScopeRoute,
	SupportRoute,
	TrackRoute,
	VisitRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { LevelChip as i, Route$1 as n, Route$2 as r, router_exports as t };
