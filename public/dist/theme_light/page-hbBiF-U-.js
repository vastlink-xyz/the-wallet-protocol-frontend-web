import { j as r } from "./vendor-radix-BYJ0AyiX.js";
import { l as m, k as p, r as a } from "./vendor-react-CuOkI7kW.js";
import { k as g, t as h, g as v, h as x } from "./main-BfI7SH81.js";
import { B as j } from "./vendor-utils-BfzDPiRN.js";
import { L as k } from "./index-CYR_zgwl.js";
function N() {
  const [t] = m(), o = p(), [c, u] = a.useState("pending"), l = a.useCallback(async (e, s) => {
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
  const f = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(k, {}) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: f() });
}
export {
  N as default
};
