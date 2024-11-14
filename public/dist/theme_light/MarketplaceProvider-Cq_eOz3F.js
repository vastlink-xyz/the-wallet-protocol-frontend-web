import { j as i } from "./vendor-radix-CXAw23nV.js";
import { u as f, f as h, a as m } from "./main-OpUhS-4m.js";
import { r } from "./vendor-react-U4DfHahV.js";
const p = async () => {
  const { data: e } = await h.get("/user/info");
  return e;
}, w = (e) => f({
  queryKey: ["userInfo"],
  queryFn: p,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  gcTime: 0,
  ...e
}), c = r.createContext(void 0);
function v({ children: e }) {
  const { address: o } = m.all(), [n, u] = r.useState(!1), { data: t } = w({
    enabled: !!o
  }), d = r.useCallback(async () => {
    try {
      const l = ((t == null ? void 0 : t.purchasedProducts) || []).some(
        (s) => s.status === "active" && s.unread
      );
      u(l);
    } catch (a) {
      console.error("Failed to check new products:", a);
    }
  }, [t]);
  return /* @__PURE__ */ i.jsx(c.Provider, { value: { checkNewProducts: d, hasNewProducts: n }, children: e });
}
const P = () => {
  const e = r.useContext(c);
  if (e === void 0)
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return e;
};
export {
  v as M,
  P as a,
  w as u
};
