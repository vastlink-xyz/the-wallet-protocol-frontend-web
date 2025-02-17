import { j as n } from "./vendor-radix-nHPuu8ug.js";
import { m as p, h as f, a } from "./vendor-react-DG1r0zWq.js";
import { p as g, t as h, g as v, h as x } from "./main-ZrsMs0Kw.js";
import { B as j } from "./vendor-utils-CARgNrN0.js";
import { L as T } from "./index-DB8_Lllq.js";
function N() {
  const [t] = p(), o = f(), [c, u] = a.useState("pending"), d = a.useCallback(async (e, s) => {
    try {
      const { hash: r, token: i } = await g.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), l = await h.getToken(i).publicClient.waitForTransactionReceipt({ hash: r });
      l.status === "success" && (u("success"), o("/dashboard")), v("receipt", l);
    } catch (r) {
      u("error");
      const i = x(r);
      j.error(i.message);
    }
  }, [o]);
  a.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), d(e, s));
  }, [t, d]);
  const m = () => c === "pending" ? /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(T, {}) }) : c === "success" ? /* @__PURE__ */ n.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ n.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ n.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: m() });
}
export {
  N as default
};
