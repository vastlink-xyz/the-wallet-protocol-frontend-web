import { j as r } from "./vendor-radix-CjL5_ZCn.js";
import { j as m, k as f, a as n } from "./vendor-react-D6ZgZFQ5.js";
import { l as g } from "./main-DrvVrxeO.js";
import { h } from "./error-DDWKB78C.js";
import { T as v } from "./TokenService-CBSYqvR8.js";
import { B as x } from "./vendor-utils-RvkaSVWD.js";
import { L as j } from "./index-BO59AZ-D.js";
import { k as T } from "./index-CH6Rc5WR.js";
function L() {
  const [t] = m(), i = f(), [c, u] = n.useState("pending"), d = n.useCallback(async (e, s) => {
    try {
      const { hash: o, token: a } = await T.signTransactionWithOTP({
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
  const p = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(j, { size: 48, type: "breathe" }) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "m-auto", children: p() });
}
export {
  L as default
};
