import { j as r } from "./vendor-radix-DAGGyvqc.js";
import { m as f, l as m, a as i } from "./vendor-react-BNvQ9I2c.js";
import { k as g, T as h, g as x, h as v } from "./main-C7od9bzF.js";
import { B as j } from "./vendor-utils-B-eF5hYT.js";
import { L as T } from "./index-D2kfGm-9.js";
function N() {
  const [t] = f(), o = m(), [c, l] = i.useState("pending"), u = i.useCallback(async (e, s) => {
    try {
      const { hash: n, token: a } = await g.signTransactionWithOTP({
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
