import { j as i } from "./vendor-radix-BcySUdtt.js";
import { g as d } from "./main-CDK5RuLO.js";
import { a as t } from "./vendor-react-BdtkaT_f.js";
const o = t.createContext(void 0);
function x({ children: e }) {
  const [a, c] = t.useState(!1), n = t.useCallback(async () => {
    try {
      const u = (await d.get("/user/purchasedProducts")).data.some(
        (s) => s.status === "active" && s.unread
      );
      c(u);
    } catch (r) {
      console.error("Failed to check new products:", r);
    }
  }, []);
  return /* @__PURE__ */ i.jsx(o.Provider, { value: { checkNewProducts: n, hasNewProducts: a }, children: e });
}
const h = () => {
  const e = t.useContext(o);
  if (e === void 0)
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return e;
};
export {
  x as M,
  h as u
};
