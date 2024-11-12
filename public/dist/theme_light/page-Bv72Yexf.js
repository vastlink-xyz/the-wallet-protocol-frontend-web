import { j as t } from "./vendor-radix-BcySUdtt.js";
import { a, l as f } from "./vendor-react-BdtkaT_f.js";
import { S as x, P as h } from "./ProductList-CedWaO4D.js";
import { g as y, j as g, c as r } from "./main-CDK5RuLO.js";
import { C as j } from "./index-CjU6kghy.js";
import { B as S } from "./vendor-utils-CISROZyj.js";
import { E as b } from "./index-DXQ__9RP.js";
import { B as m } from "./index-Sjo3pVHC.js";
const k = "We couldn’t find what you’re looking for. Try using different keywords or explore other options.", P = "/imgs/icons/empty_search.png";
function T() {
  const [n, o] = a.useState(!1), [p, E] = f(), [l, i] = a.useState([]), e = p.get("search") || "", c = a.useCallback(async (d) => {
    try {
      o(!0);
      const s = await y.post("/marketplace/product/search-products", {
        keyword: d
      });
      i(s.data.products);
    } catch (s) {
      const u = g(s);
      S.error(u.message);
    } finally {
      o(!1);
    }
  }, []);
  return a.useEffect(() => {
    e && c(e);
  }, [e]), /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(j, { className: "relative", children: [
    /* @__PURE__ */ t.jsx(m, { className: r([
      "mb-[16px] mt-[20px]",
      "tablet:hidden"
    ]) }),
    /* @__PURE__ */ t.jsx(m, { className: r([
      "absolute top-[16px] left-[0px]",
      "tablet:block hidden"
    ]) }),
    /* @__PURE__ */ t.jsx(
      x,
      {
        className: r([
          "mb-[52px]",
          "tablet:mx-auto tablet:mt-[60px]"
        ]),
        onSearch: c,
        defaultValue: e
      }
    ),
    /* @__PURE__ */ t.jsx(
      h,
      {
        loading: n,
        products: l,
        empty: /* @__PURE__ */ t.jsx(b, { className: "mt-[96px] mx-auto", text: k, imgSrc: P })
      }
    )
  ] }) });
}
export {
  T as default
};
