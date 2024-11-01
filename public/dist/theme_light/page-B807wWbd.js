import { j as r } from "./vendor-radix-DcfHr-b-.js";
import { i as m, j as f, r as n } from "./vendor-react-Cqw-pUgZ.js";
import { l as g } from "./main-BQRn5y6W.js";
import { h } from "./error-BOjt9hlf.js";
import { T as v } from "./TokenService-hl2efiyX.js";
import { B as x } from "./vendor-utils-BEOEHg0B.js";
import { L as j } from "./index-YZ-oGsCe.js";
import { k as T } from "./index-BE51hq0_.js";
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
