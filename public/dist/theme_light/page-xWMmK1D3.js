import { j as r } from "./vendor-radix-B8_5rGTC.js";
import { r as t, k as h } from "./vendor-react-X5c0QESR.js";
import { B as l, C as f } from "./index-BspuBG-8.js";
import { S as x, P as y, E as g } from "./index-CAzu9dJx.js";
import { i as S, h as j } from "./main-BVot_80u.js";
import { L as k } from "./index-CTOk33jm.js";
import { B as P } from "./vendor-utils-avI_LICu.js";
const E = "We couldn’t find what you’re looking for. Try using different keywords or explore other options.", w = "/imgs/icons/empty_search.png";
function T() {
  const [m, s] = t.useState(!0), [p, o] = h(), [i, u] = t.useState([]), e = p.get("search") || "", c = t.useCallback(async (n) => {
    try {
      s(!0), o({ search: n });
      const a = await S.post("/marketplace/product/search-products", {
        keyword: n
      });
      u(a.data.products);
    } catch (a) {
      const d = j(a);
      P.error(d.message);
    } finally {
      s(!1);
    }
  }, [o]);
  return t.useEffect(() => {
    e && c(e);
  }, [e]), /* @__PURE__ */ r.jsxs("div", { children: [
    /* @__PURE__ */ r.jsx(
      l,
      {
        primaryRoute: {
          path: "/marketplace",
          name: "Marketplace"
        },
        secondaryRoute: {
          name: "Search results"
        }
      }
    ),
    m && /* @__PURE__ */ r.jsx(k, {}),
    /* @__PURE__ */ r.jsxs(f, { children: [
      /* @__PURE__ */ r.jsx(
        x,
        {
          className: "mb-[52px] mt-[24px] mx-auto",
          onSearch: c,
          defaultValue: e
        }
      ),
      /* @__PURE__ */ r.jsx(
        y,
        {
          products: i,
          empty: /* @__PURE__ */ r.jsx(g, { className: "mt-[96px] mx-auto", text: E, imgSrc: w })
        }
      )
    ] })
  ] });
}
export {
  T as default
};
