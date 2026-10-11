import { a as object, n as array, o as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/companion.functions-C9Rq76J0.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = object({
	message: string().trim().min(1).max(1200),
	history: array(object({
		role: _enum(["user", "assistant"]),
		text: string().max(2e3)
	})).max(8),
	context: string().max(1800)
});
var askCompanion = createServerFn({ method: "POST" }).validator((input) => Input.parse(input)).handler(createSsrRpc("a016544ba5b241b509748ab44f2231efc7fa2cf98f3347b3b352ad38313b8c10"));
//#endregion
export { askCompanion as t };
