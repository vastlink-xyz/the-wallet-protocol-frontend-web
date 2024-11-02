import { b as n } from "./vendor-utils-RvkaSVWD.js";
function a(s) {
  var r;
  if (n.isAxiosError(s)) {
    const e = s;
    return e.response ? { message: `${((r = e.response.data) == null ? void 0 : r.message) || e.message}` } : e.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${e.message}` };
  } else return s instanceof Error ? { message: s.message } : { message: "An unknown error occurred" };
}
export {
  a as h
};
