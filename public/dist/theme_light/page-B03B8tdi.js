import { j as t } from "./vendor-radix-CtBTfL6E.js";
import { r as s, k as x } from "./vendor-react-lU71vM3H.js";
import { S as f, P as h, E as y } from "./index-Bwk5X3du.js";
import { d as g, h as S, c as r } from "./main-BiNWeoEw.js";
import { C as b, B as n } from "./index-C955f02t.js";
import { B as j } from "./vendor-utils-CKvC_yGz.js";
const k = "We couldn’t find what you’re looking for. Try using different keywords or explore other options.", P = "/imgs/icons/empty_search.png";
function L() {
  const [m, o] = s.useState(!1), [l, E] = x(), [p, i] = s.useState([]), e = l.get("search") || "", c = s.useCallback(async (d) => {
    try {
      o(!0);
      const a = await g.post("/marketplace/product/search-products", {
        keyword: d
      });
      i(a.data.products);
    } catch (a) {
      const u = S(a);
      j.error(u.message);
    } finally {
      o(!1);
    }
  }, []);
  return s.useEffect(() => {
    e && c(e);
  }, [e]), /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(b, { className: "relative", children: [
    /* @__PURE__ */ t.jsx(n, { className: r([
      "mb-[16px] mt-[20px]",
      "tablet:hidden"
    ]) }),
    /* @__PURE__ */ t.jsx(n, { className: r([
      "absolute top-[16px] left-[0px]",
      "tablet:block hidden"
    ]) }),
    /* @__PURE__ */ t.jsx(
      f,
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
        loading: m,
        products: p,
        empty: /* @__PURE__ */ t.jsx(y, { className: "mt-[96px] mx-auto", text: k, imgSrc: P })
      }
    )
  ] }) });
}
export {
  L as default
};
