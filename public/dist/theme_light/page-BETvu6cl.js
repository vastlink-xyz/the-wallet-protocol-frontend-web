import { j as r } from "./vendor-radix-nT--cb5B.js";
import { k as f, j as g, r as o } from "./vendor-react-CwfAKKXk.js";
import { k as m, T as h, g as v, h as x } from "./main-SeyaNRcB.js";
import { B as j } from "./vendor-utils-BxJrQXPu.js";
import { L as T } from "./index-C1Y4UoF-.js";
function N() {
  const [t] = f(), i = g(), [c, u] = o.useState("pending"), d = o.useCallback(async (e, s) => {
    try {
      const { hash: n, token: a } = await m.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), l = await h.getInstance().createToken(a).publicClient.waitForTransactionReceipt({ hash: n });
      l.status === "success" && (u("success"), i("/dashboard")), v("receipt", l);
    } catch (n) {
      u("error");
      const a = x(n);
      j.error(a.message);
    }
  }, [i]);
  o.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), d(e, s));
  }, [t, d]);
  const p = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(T, {}) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "m-auto", children: p() });
}
export {
  N as default
};
