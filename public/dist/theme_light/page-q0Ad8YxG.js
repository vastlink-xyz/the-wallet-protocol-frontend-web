import { j as r } from "./vendor-radix-hWeKeDdS.js";
import { l as f, k as g, a as o } from "./vendor-react-DM3ZG7W6.js";
import { k as m, T as h, g as v, h as x } from "./main-DYpMdtTj.js";
import { B as T } from "./vendor-utils-ZATHw6Y5.js";
import { L as j } from "./index-C7stWzhH.js";
function N() {
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
  const p = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(j, {}) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "m-auto", children: p() });
}
export {
  N as default
};
