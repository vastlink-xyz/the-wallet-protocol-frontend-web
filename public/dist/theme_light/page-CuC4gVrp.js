import { j as t } from "./vendor-radix-hWeKeDdS.js";
import { a, l as f } from "./vendor-react-DM3ZG7W6.js";
import { S as x, P as h } from "./ProductList-DkKwGUER.js";
import { f as y, h as g, c as r } from "./main-8RA78Fbz.js";
import { C as S } from "./index-D5wkn-8Q.js";
import { B as b } from "./vendor-utils-Ca3Nf2P-.js";
import { E as j } from "./index-DUoRPOKH.js";
import { B as m } from "./index-CvpsTdWE.js";
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
      b.error(u.message);
    } finally {
      o(!1);
    }
  }, []);
  return a.useEffect(() => {
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
