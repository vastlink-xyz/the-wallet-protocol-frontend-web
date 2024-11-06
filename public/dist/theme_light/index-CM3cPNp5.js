import { b as n, B as i } from "./vendor-utils-C-Nds55G.js";
import "./main-DgHGudCI.js";
import { a as r } from "./auth-BZX__YKj.js";
const a = n.create({
  baseURL: "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com"
});
a.interceptors.request.use(
  (e) => {
    const o = r.all().idToken;
    return o && (e.headers.Authorization = `Bearer ${o}`), e;
  },
  (e) => Promise.reject(e)
);
a.interceptors.response.use(
  (e) => e,
  async (e) => {
    var o, t;
    if (((o = e.response) == null ? void 0 : o.status) === 401 || ((t = e.response) == null ? void 0 : t.status) === 403) {
      const s = e.response.data.message || "Authentication error";
      console.log(`${s}, redirecting to login...`), r.clearAllAuthData(), typeof window < "u" && (i.error(s), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(e);
  }
);
export {
  a
};
