import { j as o } from "./vendor-radix-J-HUYjfF.js";
import { l as g, k as v, r as n } from "./vendor-react-BG344YhI.js";
import { f as y, h as x } from "./main-CUT_4fhD.js";
import { B as p } from "./vendor-utils-C0Sc_Wei.js";
import { L as w } from "./index-Mo08W7fN.js";
function C() {
  const [t] = g(), c = v(), [d, l] = n.useState("pending"), u = n.useCallback(async ({
    otp: s,
    limits: e
  }) => {
    const i = [
      {
        type: "ETH",
        value: (e == null ? void 0 : e.ETH) || "0"
      },
      {
        type: "MATIC",
        value: (e == null ? void 0 : e.MATIC) || "0"
      },
      {
        type: "TVWT",
        value: (e == null ? void 0 : e.TVWT) || "0"
      }
    ];
    try {
      await y.post("/user/update-daily-withdrawal-limits-with-otp", {
        otp: s,
        limits: i
      }), l("success"), p.success("Daily withdrawal limit successfully updated, redirecting to the profile"), c("/profile");
    } catch (r) {
      l("error");
      const a = x(r);
      p.error(a.message);
    }
  }, [c]);
  n.useEffect(() => {
    const s = t == null ? void 0 : t.get("email"), e = t == null ? void 0 : t.get("otp"), i = (t == null ? void 0 : t.get("ETH")) ?? void 0, r = (t == null ? void 0 : t.get("MATIC")) ?? void 0, a = (t == null ? void 0 : t.get("TVWT")) ?? void 0, T = {
      ETH: i,
      MATIC: r,
      TVWT: a
    };
    s && e && (console.log(`verify-transaction ${s} ${e}`), u({
      otp: e,
      limits: T
    }));
  }, [t, u]);
  const f = () => d === "pending" ? /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx(w, {}) }) : d === "success" ? /* @__PURE__ */ o.jsx("div", { className: "", children: "Daily withdrawal limit successfully updated, redirecting to the profile" }) : /* @__PURE__ */ o.jsx("div", { className: "text-destructive", children: "Failed to update daily withdrawal limit" });
  return /* @__PURE__ */ o.jsx("div", { className: "min-h-[calc(100vh-60px)] flex items-center justify-center", children: f() });
}
export {
  C as default
};
