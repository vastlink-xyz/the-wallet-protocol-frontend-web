import { j as d } from "./vendor-radix-CtBTfL6E.js";
import { d as i } from "./main-BiNWeoEw.js";
import { r as t } from "./vendor-react-lU71vM3H.js";
const o = t.createContext(void 0);
function x({ children: e }) {
  const [a, c] = t.useState(!1), n = t.useCallback(async () => {
    try {
      const u = (await i.get("/user/purchasedProducts")).data.some(
        (s) => s.status === "active" && s.unread
      );
      c(u);
    } catch (r) {
      console.error("Failed to check new products:", r);
    }
  }, []);
  return /* @__PURE__ */ d.jsx(o.Provider, { value: { checkNewProducts: n, hasNewProducts: a }, children: e });
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
