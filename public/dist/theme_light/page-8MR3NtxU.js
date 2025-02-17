import { j as n } from "./vendor-radix-DUwj-Z7L.js";
import { m as f, j as g, a } from "./vendor-react-DV6Kf_ot.js";
import { m as p, t as h, g as v, h as x, n as j } from "./main-DvSwU80m.js";
import { B as T } from "./vendor-utils-24jm1iP0.js";
function C() {
  const [t] = f(), o = g(), [c, u] = a.useState("pending"), d = a.useCallback(async (e, s) => {
    try {
      const { hash: r, token: i } = await p.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), l = await h.getToken(i).publicClient.waitForTransactionReceipt({ hash: r });
      l.status === "success" && (u("success"), o("/dashboard")), v("receipt", l);
    } catch (r) {
      u("error");
      const i = x(r);
      T.error(i.message);
    }
  }, [o]);
  a.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), d(e, s));
  }, [t, d]);
  const m = () => c === "pending" ? /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(j, {}) }) : c === "success" ? /* @__PURE__ */ n.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ n.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ n.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: m() });
}
export {
  C as default
};
