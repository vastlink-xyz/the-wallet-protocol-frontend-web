import { j as r } from "./vendor-radix-D7Ti2ut_.js";
import { l as p, f as m, r as a } from "./vendor-react-Bi1rjDlg.js";
import { p as g, t as h, g as v, h as x } from "./main-Bv5HMVJf.js";
import { B as j } from "./vendor-utils-BZIeOlaI.js";
import { L as T } from "./index-CghDsl9s.js";
function N() {
  const [t] = p(), o = m(), [c, u] = a.useState("pending"), l = a.useCallback(async (e, s) => {
    try {
      const { hash: n, token: i } = await g.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), d = await h.getToken(i).publicClient.waitForTransactionReceipt({ hash: n });
      d.status === "success" && (u("success"), o("/dashboard")), v("receipt", d);
    } catch (n) {
      u("error");
      const i = x(n);
      j.error(i.message);
    }
  }, [o]);
  a.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), l(e, s));
  }, [t, l]);
  const f = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(T, {}) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: f() });
}
export {
  N as default
};
