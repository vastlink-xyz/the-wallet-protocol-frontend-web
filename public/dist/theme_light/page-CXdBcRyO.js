import { j as r } from "./vendor-radix-CPmBDWYo.js";
import { l as f, k as g, r as i } from "./vendor-react-BA5A8Axg.js";
import { k as m, T as h, g as x, h as v } from "./main-D2V_1zST.js";
import { B as j } from "./vendor-utils-nZmF9_dO.js";
import { L as T } from "./index-BLDwsEmP.js";
function N() {
  const [t] = f(), o = g(), [c, l] = i.useState("pending"), u = i.useCallback(async (e, s) => {
    try {
      const { hash: n, token: a } = await m.signTransactionWithOTP({
        transactionId: e,
        otp: s
      }), d = await h.getInstance().createToken(a).publicClient.waitForTransactionReceipt({ hash: n });
      d.status === "success" && (l("success"), o("/dashboard")), x("receipt", d);
    } catch (n) {
      l("error");
      const a = v(n);
      j.error(a.message);
    }
  }, [o]);
  i.useEffect(() => {
    const e = t == null ? void 0 : t.get("id"), s = t == null ? void 0 : t.get("otp");
    e && s && (console.log(`verify-transaction ${e} ${s}`), u(e, s));
  }, [t, u]);
  const p = () => c === "pending" ? /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx(T, {}) }) : c === "success" ? /* @__PURE__ */ r.jsx("div", { className: "", children: "Transaction confirmed, redirecting to the dashboard..." }) : /* @__PURE__ */ r.jsx("div", { className: "text-destructive", children: "Error processing transaction" });
  return /* @__PURE__ */ r.jsx("div", { className: "min-h-[calc(100vh-60px)] flex items-center justify-center", children: p() });
}
export {
  N as default
};
