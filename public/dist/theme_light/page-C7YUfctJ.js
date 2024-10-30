import { j as r } from "./vendor-radix-B8_5rGTC.js";
import { k as f, f as g, r as o } from "./vendor-react-X5c0QESR.js";
import { o as m, T as h, l as v, h as x, L as T } from "./main-BVot_80u.js";
import { B as b } from "./vendor-utils-avI_LICu.js";
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
      b.error(n.message);
    }
  }, [i]);
  o.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), d(e, s));
  }, [t, d]);
  const p = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(T, { size: 48, type: "breathe" }) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "m-auto", children: p() });
}
export {
  C as default
};
