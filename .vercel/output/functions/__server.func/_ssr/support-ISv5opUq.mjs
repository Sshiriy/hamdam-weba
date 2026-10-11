import { Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PageIntro, n as Card } from "./ui-CQFk7eZh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/support-ISv5opUq.js
var import_jsx_runtime = require_jsx_runtime();
var blocks = [
	{
		title: "حمایت روانی بخشی از درمان است",
		body: "ترس، بی‌خوابی، تحریک‌پذیری و احساس باری روی دوش خانواده در سرطان شایع است و نشانهٔ ضعف نیست. اگر حال روحی در دفتر همدم چند روز پایین مانده، همان را مثل تب با تیم درمان در میان بگذارید و بخواهید به روان‌پزشکی روان‌تن یا مددکاری وصل شوید."
	},
	{
		title: "مددکاری همین بیمارستان",
		body: "در نسخهٔ اول شمارهٔ ساختگی انجمن یا شخص نوشته نشده است. مسیر درست این است که از مددکاری بیمارستان آیت‌الله رئیسی بپرسید کدام کمک — دارو، ایاب‌وذهاب، معرفی به انجمن شهر — برای پروندهٔ شما باز است و چه مدرکی می‌خواهند. معمولاً معرفی پزشک، خلاصه پرونده و مدارک هویتی را می‌خواهند؛ فهرست دقیق را همان واحد می‌دهد."
	},
	{
		title: "خانواده و مراقب",
		body: "یک نفر را مشخص کنید که برگهٔ پیش از ویزیت را با شما بیاید. مراقب هم حق خستگی دارد؛ اگر فقط بیمار در این برنامه دیده شود، حمایت نصفه است. سابقهٔ خانوادگی را در بخش پرونده بنویسید تا سر ویزیت یادتان نرود، نه برای اینکه برنامه خطر سرطان اقوام را حساب کند."
	},
	{
		title: "انجمن‌ها",
		body: "انجمن‌های حمایتی کار پزشکی تشخیصی نمی‌کنند؛ بعضی کمک هزینه، همراهی و گروه همتایان دارند. مؤسسهٔ محک مخصوص کودکان است و جایگزین انجمن بزرگسال شهر شما نیست. نام و تلفن معتبر را از مددکاری یا پزشک‌تان بگیرید و در یادداشت پرونده ذخیره کنید."
	},
	{
		title: "بیمه و هزینه",
		body: "قبل از شروع داروی گران، از منشی بخش بپرسید آن قلم با بیمهٔ شما نیاز به معرفی‌نامه دارد یا نه. همدم قیمت درمان را برآورد نمی‌کند و وعدهٔ پوشش بیمه نمی‌دهد."
	}
];
function SupportPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: "حمایت",
				title: "کنار درمان طبی، یک مسیر اجتماعی هم هست.",
				lede: "این صفحه دفترچهٔ تلفن جعلی نیست. یاد می‌دهد از بیمارستان چه بخواهید تا حمایت روانی، خانوادگی و اداری گم نشود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-bold",
					children: block.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-8 text-muted",
					children: block.body
				})] }, block.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-7 text-muted",
				children: [
					"سابقهٔ خانوادگی را در",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/file",
						className: "font-semibold text-cypress",
						children: "پرونده"
					}),
					" ",
					"بنویسید. اگر حال روحی پایین است، در",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/track",
						className: "font-semibold text-cypress",
						children: "دفتر حال"
					}),
					" ",
					"ثبت شود تا قاعدهٔ هشدار یادآوری‌اش کند."
				]
			})
		]
	});
}
//#endregion
export { SupportPage as component };
