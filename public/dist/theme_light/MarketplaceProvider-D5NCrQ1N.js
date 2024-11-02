import { j as i } from "./vendor-radix-CjL5_ZCn.js";
import { a as d } from "./index-Dr7PNsrq.js";
import { a as t } from "./vendor-react-D6ZgZFQ5.js";
const a = t.createContext(void 0);
function x({ children: e }) {
  const [o, c] = t.useState(!1), n = t.useCallback(async () => {
    try {
      const u = (await d.get("/user/purchasedProducts")).data.some(
        (s) => s.status === "active" && s.unread
      );
      c(u);
    } catch (r) {
      console.error("Failed to check new products:", r);
    }
  }, []);
  return /* @__PURE__ */ i.jsx(a.Provider, { value: { checkNewProducts: n, hasNewProducts: o }, children: e });
}
const h = () => {
  const e = t.useContext(a);
  if (e === void 0)
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return e;
};
export {
  x as M,
  h as u
};
