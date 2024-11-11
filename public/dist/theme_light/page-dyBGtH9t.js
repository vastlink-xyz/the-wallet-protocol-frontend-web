import { j as r } from "./vendor-radix-CtBTfL6E.js";
import { k as m, j as f, r as n } from "./vendor-react-lU71vM3H.js";
import { b as g, h } from "./main-BiNWeoEw.js";
import { T as v } from "./TokenService-BJInqoec.js";
import { B as x } from "./vendor-utils-CKvC_yGz.js";
import { L as b } from "./index-BjYMiP7I.js";
import { k as j } from "./index-DZmehw99.js";
function I() {
  const [t] = m(), i = f(), [c, u] = n.useState("pending"), d = n.useCallback(async (e, s) => {
    try {
      const { hash: o, token: a } = await j.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), l = await v.getInstance().createToken(a).publicClient.waitForTransactionReceipt({ hash: o });
      l.status === "success" && (u("success"), i("/dashboard")), g("receipt", l);
    } catch (o) {
      u("error");
      const a = h(o);
      x.error(a.message);
    }
  }, [i]);
  n.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), d(e, s));
  }, [t, d]);
  const p = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(b, { size: 48, type: "breathe" }) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "m-auto", children: p() });
}
export {
  I as default
};
