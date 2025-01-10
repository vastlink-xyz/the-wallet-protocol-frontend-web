import { j as n } from "./vendor-radix-AvjOLIap.js";
import { m as f, l as p, a } from "./vendor-react-DSEtE0wE.js";
import { k as g, t as h, g as v, h as x } from "./main-qUKxxNV6.js";
import { B as j } from "./vendor-utils-Q0yJ_o1H.js";
import { L as T } from "./index-0lIkLyp4.js";
function N() {
  const [t] = f(), o = p(), [c, u] = a.useState("pending"), l = a.useCallback(async (e, s) => {
    try {
      const { hash: r, token: i } = await g.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), d = await h.getToken(i).publicClient.waitForTransactionReceipt({ hash: r });
      d.status === "success" && (u("success"), o("/dashboard")), v("receipt", d);
    } catch (r) {
      u("error");
      const i = x(r);
      j.error(i.message);
    }
  }, [o]);
  a.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), l(e, s));
  }, [t, l]);
  const m = () => c === "pending" ? /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(T, {}) }) : c === "success" ? /* @__PURE__ */ n.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ n.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ n.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: m() });
}
export {
  N as default
};
