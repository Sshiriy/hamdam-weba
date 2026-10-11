import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-a_Zrpcpw.js
var longDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
	year: "numeric",
	month: "long",
	day: "numeric"
});
var shortDate = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
	month: "short",
	day: "numeric"
});
function todayISO() {
	const d = /* @__PURE__ */ new Date();
	const m = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${d.getFullYear()}-${m}-${day}`;
}
function asDate(iso) {
	const value = iso.length === 10 ? `${iso}T12:00:00` : iso;
	const date = new Date(value);
	return Number.isNaN(date.getTime()) ? null : date;
}
function formatFa(iso) {
	const date = asDate(iso);
	return date ? longDate.format(date) : iso;
}
function formatFaShort(iso) {
	const date = asDate(iso);
	return date ? shortDate.format(date) : iso;
}
function daysUntil(iso) {
	const date = asDate(iso);
	if (!date) return null;
	const now = /* @__PURE__ */ new Date();
	now.setHours(12, 0, 0, 0);
	return Math.round((date.getTime() - now.getTime()) / 864e5);
}
function relativeDay(iso) {
	const days = daysUntil(iso);
	if (days === null) return "";
	if (days === 0) return "امروز";
	if (days === 1) return "فردا";
	if (days === -1) return "دیروز";
	if (days > 1) return `${new Intl.NumberFormat("fa-IR").format(days)} روز دیگر`;
	return `${new Intl.NumberFormat("fa-IR").format(Math.abs(days))} روز پیش`;
}
function faNum(value) {
	return new Intl.NumberFormat("fa-IR").format(value);
}
function safeTel(phone) {
	const trimmed = phone.trim();
	if (!/^[0-9+][0-9+\-\s]{6,}$/.test(trimmed)) return null;
	return `tel:${trimmed.replace(/[\s-]/g, "")}`;
}
var cancerOptions = [
	{
		id: "unknown",
		label: "هنوز مشخص نیست"
	},
	{
		id: "breast",
		label: "پستان"
	},
	{
		id: "colorectal",
		label: "روده بزرگ"
	},
	{
		id: "lung",
		label: "ریه"
	},
	{
		id: "prostate",
		label: "پروستات"
	},
	{
		id: "liver",
		label: "کبد"
	},
	{
		id: "skin",
		label: "پوست"
	},
	{
		id: "other",
		label: "نوع دیگر"
	}
];
var checkupKinds = [
	{
		id: "visit",
		label: "ویزیت پزشک"
	},
	{
		id: "lab",
		label: "آزمایش"
	},
	{
		id: "imaging",
		label: "تصویربرداری"
	},
	{
		id: "infusion",
		label: "جلسهٔ درمان"
	},
	{
		id: "other",
		label: "سایر"
	}
];
var emptyProfile = {
	name: "",
	age: "",
	sex: "unspecified",
	cancerId: "unknown",
	cancerNote: "",
	diagnosisYear: "",
	doctor: "",
	city: "کرمانشاه",
	clinicPhone: "",
	phase: "unsure",
	demo: false,
	onboarded: false
};
var emptyVisit = {
	sinceLast: "",
	meds: "",
	newSymptoms: "",
	questions: "",
	mood: 5,
	painNow: 0
};
function uid() {
	return crypto.randomUUID();
}
function shiftISO(days) {
	const date = /* @__PURE__ */ new Date();
	date.setDate(date.getDate() + days);
	const m = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${date.getFullYear()}-${m}-${day}`;
}
var initial = {
	profile: emptyProfile,
	family: [],
	symptoms: [],
	checkups: [],
	visit: emptyVisit,
	vitals: [],
	reviews: [],
	chat: []
};
var useCare = create()(persist((set) => ({
	...initial,
	saveProfile: (profile) => set({ profile }),
	addFamily: (member) => set((state) => ({ family: [{
		...member,
		id: uid()
	}, ...state.family] })),
	removeFamily: (id) => set((state) => ({ family: state.family.filter((item) => item.id !== id) })),
	addSymptom: (symptom) => set((state) => ({ symptoms: [{
		...symptom,
		id: uid()
	}, ...state.symptoms] })),
	removeSymptom: (id) => set((state) => ({ symptoms: state.symptoms.filter((item) => item.id !== id) })),
	addCheckup: (checkup) => set((state) => ({ checkups: [{
		...checkup,
		id: uid()
	}, ...state.checkups] })),
	updateCheckup: (id, patch) => set((state) => ({ checkups: state.checkups.map((item) => item.id === id ? {
		...item,
		...patch
	} : item) })),
	removeCheckup: (id) => set((state) => ({ checkups: state.checkups.filter((item) => item.id !== id) })),
	setVisit: (visit) => set({ visit }),
	addVital: (vital) => set((state) => ({ vitals: [{
		...vital,
		id: uid()
	}, ...state.vitals] })),
	removeVital: (id) => set((state) => ({ vitals: state.vitals.filter((item) => item.id !== id) })),
	addReview: (review) => set((state) => ({ reviews: [{
		...review,
		id: uid()
	}, ...state.reviews] })),
	addChat: (turn) => set((state) => ({ chat: [...state.chat, {
		...turn,
		id: uid()
	}] })),
	clearChat: () => set({ chat: [] }),
	loadDemo: () => set({
		profile: {
			name: "سارا مرادی",
			age: "۴۶",
			sex: "female",
			cancerId: "breast",
			cancerNote: "",
			diagnosisYear: "۱۴۰۳",
			doctor: "تیم درمان بیمارستان آیت‌الله رئیسی",
			city: "کرمانشاه",
			clinicPhone: "",
			phase: "active",
			demo: true,
			onboarded: true
		},
		family: [{
			id: uid(),
			relation: "مادر",
			condition: "سرطان پستان",
			ageAt: "۵۸",
			note: "نمونهٔ نمایشی؛ سابقهٔ واقعی نیست."
		}],
		symptoms: [
			{
				id: uid(),
				date: shiftISO(-10),
				pain: 3,
				fatigue: 4,
				nausea: 2,
				appetite: 7,
				mood: 6,
				fever: false,
				breath: false,
				bleeding: false,
				vomiting: false,
				confusion: false,
				weight: "stable",
				note: "روز آرام پس از جلسهٔ درمان. نمونهٔ نمایشی."
			},
			{
				id: uid(),
				date: shiftISO(-6),
				pain: 4,
				fatigue: 6,
				nausea: 5,
				appetite: 5,
				mood: 5,
				fever: false,
				breath: false,
				bleeding: false,
				vomiting: false,
				confusion: false,
				weight: "stable",
				note: "تهوع عصرها بیشتر بود."
			},
			{
				id: uid(),
				date: shiftISO(-1),
				pain: 6,
				fatigue: 7,
				nausea: 4,
				appetite: 4,
				mood: 4,
				fever: false,
				breath: false,
				bleeding: false,
				vomiting: false,
				confusion: false,
				weight: "down",
				note: "درد بازو کمی بیشتر شده. وزن را دقیق نسنجیده‌ام."
			}
		],
		checkups: [
			{
				id: uid(),
				title: "آزمایش خون پیش از جلسه",
				date: shiftISO(-4),
				kind: "lab",
				place: "آزمایشگاه بیمارستان",
				done: true,
				note: "نتیجه نزد پزشک است. این یادداشت ساختگی است."
			},
			{
				id: uid(),
				title: "ویزیت انکولوژی",
				date: shiftISO(5),
				kind: "visit",
				place: "بیمارستان آیت‌الله رئیسی",
				done: false,
				note: ""
			},
			{
				id: uid(),
				title: "جلسهٔ درمان",
				date: shiftISO(6),
				kind: "infusion",
				place: "بخش درمان",
				done: false,
				note: ""
			}
		],
		visit: {
			sinceLast: "خستگی عصرها بیشتر شده و آستین سمت جراحی کمی سفت است.",
			meds: "داروهای ضدتهوع را دو شب جا انداخته‌ام.",
			newSymptoms: "کاهش اشتها. تب نداشته‌ام.",
			questions: "آیا تورم بازو نیاز به مراجعهٔ جدا دارد؟ آزمایش بعدی کی است؟",
			mood: 4,
			painNow: 6
		},
		vitals: [{
			id: uid(),
			date: shiftISO(-6),
			spo2: "98",
			pulse: "76",
			temp: "36.7",
			note: "عصر، در حال استراحت. نمونهٔ نمایشی."
		}, {
			id: uid(),
			date: shiftISO(-1),
			spo2: "97",
			pulse: "88",
			temp: "37.1",
			note: "بعد از پیاده‌روی کوتاه کمی تندتر بود."
		}],
		reviews: [{
			id: uid(),
			date: shiftISO(-1),
			cancerId: "breast",
			phase: "active",
			pain: 6,
			temp: "37.1",
			spo2: "97",
			pulse: "88",
			flags: [],
			note: "چکاپ آموزشی نمونه. تب واقعی نداشته‌ام."
		}],
		chat: []
	}),
	clearAll: () => set({
		...initial,
		visit: { ...emptyVisit },
		profile: { ...emptyProfile }
	})
}), {
	name: "hamdam-v2",
	skipHydration: true,
	partialize: (state) => ({
		profile: state.profile,
		family: state.family,
		symptoms: state.symptoms,
		checkups: state.checkups,
		visit: state.visit,
		vitals: state.vitals,
		reviews: state.reviews,
		chat: state.chat
	})
}));
function cancerLabel(profile) {
	const known = cancerOptions.find((item) => item.id === profile.cancerId)?.label;
	if (profile.cancerId === "other" && profile.cancerNote.trim()) return profile.cancerNote.trim();
	return known ?? "نامشخص";
}
function upcomingCheckups(checkups) {
	const today = todayISO();
	return [...checkups].filter((item) => !item.done && item.date >= today).sort((a, b) => a.date.localeCompare(b.date));
}
function orderedSymptoms(symptoms) {
	return [...symptoms].sort((a, b) => a.date.localeCompare(b.date));
}
//#endregion
export { emptyVisit as a, formatFaShort as c, safeTel as d, todayISO as f, emptyProfile as i, orderedSymptoms as l, useCare as m, cancerOptions as n, faNum as o, upcomingCheckups as p, checkupKinds as r, formatFa as s, cancerLabel as t, relativeDay as u };
