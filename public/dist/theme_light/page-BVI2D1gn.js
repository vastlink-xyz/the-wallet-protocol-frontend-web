import { j as t } from "./vendor-radix-CXAw23nV.js";
import { r as s, k as f } from "./vendor-react-U4DfHahV.js";
import { S as x, P as h } from "./ProductList-Cnl6hcNt.js";
import { g as y, j as g, c as r } from "./main-aLpcFRdZ.js";
import { C as j } from "./index-B4x5zB6j.js";
import { B as S } from "./vendor-utils-y1QZaLEY.js";
import { E as b } from "./index-fnWk4Gz8.js";
import { B as m } from "./index-DrQ9bDzQ.js";
const k = "We couldn’t find what you’re looking for. Try using different keywords or explore other options.", P = "/imgs/icons/empty_search.png";
function T() {
  const [n, o] = s.useState(!1), [p, E] = f(), [i, l] = s.useState([]), e = p.get("search") || "", c = s.useCallback(async (d) => {
    try {
      o(!0);
      const a = await y.post("/marketplace/product/search-products", {
        keyword: d
      });
      l(a.data.products);
    } catch (a) {
      const u = g(a);
      S.error(u.message);
    } finally {
      o(!1);
    }
  }, []);
  return s.useEffect(() => {
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
        products: i,
        empty: /* @__PURE__ */ t.jsx(b, { className: "mt-[96px] mx-auto", text: k, imgSrc: P })
      }
    )
  ] }) });
}
export {
  T as default
};
