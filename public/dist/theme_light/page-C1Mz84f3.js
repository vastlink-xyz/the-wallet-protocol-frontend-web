import { j as a } from "./vendor-radix-hWeKeDdS.js";
import { l as g, k as f, a as o } from "./vendor-react-DM3ZG7W6.js";
import { k as m, T as h, g as v, h as x, L as T } from "./main-CYQqoPkH.js";
import { B as b } from "./vendor-utils-Ca3Nf2P-.js";
function C() {
  const [t] = g(), i = f(), [c, u] = o.useState("pending"), d = o.useCallback(async (e, s) => {
    try {
      const { hash: r, token: n } = await m.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), l = await h.getInstance().createToken(n).publicClient.waitForTransactionReceipt({ hash: r });
      l.status === "success" && (u("success"), i("/dashboard")), v("receipt", l);
    } catch (r) {
      u("error");
      const n = x(r);
      b.error(n.message);
    }
  }, [i]);
  o.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), d(e, s));
  }, [t, d]);
  const p = () => c === "pending" ? /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(T, { size: 48, type: "breathe" }) }) : c === "success" ? /* @__PURE__ */ a.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ a.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ a.jsx("div", { className: "m-auto", children: p() });
}
export {
  C as default
};
