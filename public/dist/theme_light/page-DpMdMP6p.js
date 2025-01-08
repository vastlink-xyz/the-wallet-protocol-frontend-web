import { j as s } from "./vendor-radix-AvjOLIap.js";
import { m as g, l as y, a as o } from "./vendor-react-DSEtE0wE.js";
import { t as u, f as h, h as v } from "./main-CeYGBtxc.js";
import { B as p } from "./vendor-utils-BPVAmMsZ.js";
import { L as w } from "./index-D_knZJPv.js";
function S() {
  const [t] = g(), n = y(), [l, c] = o.useState("pending"), d = o.useCallback(async ({
    otp: a,
    limits: e
  }) => {
    const r = u.getAllTokens().map((i) => ({
      type: i.tokenType,
      value: (e == null ? void 0 : e[i.tokenType]) || "0"
    }));
    try {
      await h.post("/user/update-daily-withdrawal-limits-with-otp", {
        otp: a,
        limits: r
      }), c("success"), p.success("Daily withdrawal limit successfully updated, redirecting to the profile"), n("/profile");
    } catch (i) {
      c("error");
      const f = v(i);
      p.error(f.message);
    }
  }, [n]);
  o.useEffect(() => {
    const a = t == null ? void 0 : t.get("email"), e = t == null ? void 0 : t.get("otp"), r = u.createTokenMap((i) => (t == null ? void 0 : t.get(i.tokenType)) ?? void 0);
    a && e && (console.log(`verify-transaction ${a} ${e}`), d({
      otp: e,
      limits: r
    }));
  }, [t, d]);
  const m = () => l === "pending" ? /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsx(w, {}) }) : l === "success" ? /* @__PURE__ */ s.jsx("div", { className: "", children: "Daily withdrawal limit successfully updated, redirecting to the profile" }) : /* @__PURE__ */ s.jsx("div", { className: "text-destructive", children: "Failed to update daily withdrawal limit" });
  return /* @__PURE__ */ s.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: m() });
}
export {
  S as default
};
