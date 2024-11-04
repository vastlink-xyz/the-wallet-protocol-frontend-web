import { j as t } from "./vendor-radix-DcfHr-b-.js";
import { r as a, i as f } from "./vendor-react-Cqw-pUgZ.js";
import { S as x, P as h, E as y } from "./index-IxbzFlKi.js";
import { a as g } from "./index-Ds-PW5Mo.js";
import { C as S, B as m } from "./index-DN3PbaX7.js";
import "./main-69rK11_z.js";
import { c as r } from "./style-JRa9Y8f9.js";
import { h as b } from "./error-BOjt9hlf.js";
import { B as j } from "./vendor-utils-BEOEHg0B.js";
const k = "We couldn’t find what you’re looking for. Try using different keywords or explore other options.", P = "/imgs/icons/empty_search.png";
function K() {
  const [n, o] = a.useState(!1), [p, E] = f(), [i, l] = a.useState([]), e = p.get("search") || "", c = a.useCallback(async (d) => {
    try {
      o(!0);
      const s = await g.post("/marketplace/product/search-products", {
        keyword: d
      });
      l(s.data.products);
    } catch (s) {
      const u = b(s);
      j.error(u.message);
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
        products: i,
        empty: /* @__PURE__ */ t.jsx(y, { className: "mt-[96px] mx-auto", text: k, imgSrc: P })
      }
    )
  ] }) });
}
export {
  K as default
};
