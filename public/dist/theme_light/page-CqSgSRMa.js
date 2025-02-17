import { j as t } from "./vendor-radix-D7Ti2ut_.js";
import { r as s, l as f } from "./vendor-react-Bi1rjDlg.js";
import { S as x, P as h } from "./ProductList-Dg_hdD1I.js";
import { f as y, h as g, c as r } from "./main-Bv5HMVJf.js";
import { C as S } from "./index-ChhI3_SP.js";
import { B as b } from "./vendor-utils-BZIeOlaI.js";
import { E as j } from "./index-D8ZRDlUO.js";
import { B as m } from "./index-BWxOykWg.js";
const k = "We couldn’t find what you’re looking for. Try using different keywords or explore other options.", P = "/imgs/icons/empty_search.png";
function T() {
  const [n, o] = s.useState(!1), [p, E] = f(), [l, i] = s.useState([]), e = p.get("search") || "", c = s.useCallback(async (d) => {
    try {
      o(!0);
      const a = await y.post("/marketplace/product/search-products", {
        keyword: d
      });
      i(a.data.products);
    } catch (a) {
      const u = g(a);
      b.error(u.message);
    } finally {
      o(!1);
    }
  }, []);
  return s.useEffect(() => {
    e && c(e);
  }, [e]), /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(S, { className: "relative", children: [
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
        empty: /* @__PURE__ */ t.jsx(j, { className: "mt-[96px] mx-auto", text: k, imgSrc: P })
      }
    )
  ] }) });
}
export {
  T as default
};
