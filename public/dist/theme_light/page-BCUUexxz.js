import { j as a } from "./vendor-radix-C4qF-rbz.js";
import { l as g, h as f, a as o } from "./vendor-react-KTk2TwQ7.js";
import { o as m, T as h, l as v, h as x, L as T } from "./main-Cnoo90sq.js";
import { B as b } from "./vendor-utils-D1d8vwmL.js";
function C() {
  const [t] = g(), i = f(), [c, l] = o.useState("pending"), u = o.useCallback(async (e, s) => {
    try {
      const { hash: r, token: n } = await m.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), d = await h.getInstance().createToken(n).publicClient.waitForTransactionReceipt({ hash: r });
      d.status === "success" && (l("success"), i("/dashboard")), v("receipt", d);
    } catch (r) {
      l("error");
      const n = x(r);
      b.error(n.message);
    }
  }, [i]);
  o.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), u(e, s));
  }, [t, u]);
  const p = () => c === "pending" ? /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(T, { size: 48, type: "breathe" }) }) : c === "success" ? /* @__PURE__ */ a.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ a.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ a.jsx("div", { className: "m-auto", children: p() });
}
export {
  C as default
};
