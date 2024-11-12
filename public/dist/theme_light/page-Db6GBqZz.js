import { j as a } from "./vendor-radix-BcySUdtt.js";
import { l as f, k as g, a as o } from "./vendor-react-BdtkaT_f.js";
import { k as m, T as h, f as v, j as x, L as j } from "./main-CDK5RuLO.js";
import { B as T } from "./vendor-utils-CISROZyj.js";
function C() {
  const [t] = f(), i = g(), [c, u] = o.useState("pending"), d = o.useCallback(async (e, s) => {
    try {
      const { hash: r, token: n } = await m.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), l = await h.getInstance().createToken(n).publicClient.waitForTransactionReceipt({ hash: r });
      l.status === "success" && (u("success"), i("/dashboard")), v("receipt", l);
    } catch (r) {
      u("error");
      const n = x(r);
      T.error(n.message);
    }
  }, [i]);
  o.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), d(e, s));
  }, [t, d]);
  const p = () => c === "pending" ? /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(j, { size: 48, type: "breathe" }) }) : c === "success" ? /* @__PURE__ */ a.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ a.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ a.jsx("div", { className: "m-auto", children: p() });
}
export {
  C as default
};
