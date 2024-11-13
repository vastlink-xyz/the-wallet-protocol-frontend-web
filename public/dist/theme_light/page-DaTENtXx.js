import { j as r } from "./vendor-radix-CXAw23nV.js";
import { k as f, j as g, r as o } from "./vendor-react-U4DfHahV.js";
import { k as m, T as h, f as v, j as x, L as j } from "./main-aLpcFRdZ.js";
import { B as T } from "./vendor-utils-y1QZaLEY.js";
function C() {
  const [t] = f(), i = g(), [c, u] = o.useState("pending"), d = o.useCallback(async (e, s) => {
    try {
      const { hash: a, token: n } = await m.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), l = await h.getInstance().createToken(n).publicClient.waitForTransactionReceipt({ hash: a });
      l.status === "success" && (u("success"), i("/dashboard")), v("receipt", l);
    } catch (a) {
      u("error");
      const n = x(a);
      T.error(n.message);
    }
  }, [i]);
  o.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), d(e, s));
  }, [t, d]);
  const p = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(j, { size: 48, type: "breathe" }) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "m-auto", children: p() });
}
export {
  C as default
};
