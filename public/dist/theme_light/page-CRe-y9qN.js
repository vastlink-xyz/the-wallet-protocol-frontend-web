import { j as r } from "./vendor-radix-D0lo_cKZ.js";
import { k as m, j as f, r as n } from "./vendor-react-CA5sEv1f.js";
import { a as g } from "./main-DgHGudCI.js";
import { h } from "./error-EuuGdfel.js";
import { T as v } from "./TokenService-Dm8dxXLZ.js";
import { B as x } from "./vendor-utils-C-Nds55G.js";
import { L as j } from "./index-Cfi7cMJg.js";
import { k as T } from "./index-N9v62Kbs.js";
function L() {
  const [t] = m(), i = f(), [c, u] = n.useState("pending"), d = n.useCallback(async (e, s) => {
    try {
      const { hash: o, token: a } = await T.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), p = await v.getInstance().createToken(a).publicClient.waitForTransactionReceipt({ hash: o });
      p.status === "success" && (u("success"), i("/dashboard")), g("receipt", p);
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
  const l = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(j, { size: 48, type: "breathe" }) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "m-auto", children: l() });
}
export {
  L as default
};
