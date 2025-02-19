import { j as n } from "./vendor-radix-BwSYOuH5.js";
import { l as g, i as m, r as a } from "./vendor-react-wyPiRY-L.js";
import { m as p, t as h, g as v, h as x, n as j } from "./main-aWh1b37I.js";
import { B as T } from "./vendor-utils-BSjbfJFn.js";
function C() {
  const [t] = g(), o = m(), [c, u] = a.useState("pending"), l = a.useCallback(async (e, s) => {
    try {
      const { hash: r, token: i } = await p.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), d = await h.getToken(i).publicClient.waitForTransactionReceipt({ hash: r });
      d.status === "success" && (u("success"), o("/dashboard")), v("receipt", d);
    } catch (r) {
      u("error");
      const i = x(r);
      T.error(i.message);
    }
  }, [o]);
  a.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), l(e, s));
  }, [t, l]);
  const f = () => c === "pending" ? /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(j, {}) }) : c === "success" ? /* @__PURE__ */ n.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ n.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ n.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: f() });
}
export {
  C as default
};
