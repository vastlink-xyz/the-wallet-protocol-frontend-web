import { j as t } from "./vendor-radix-AvjOLIap.js";
import { a as o } from "./vendor-react-DSEtE0wE.js";
import { c as g, u as h } from "./main-93vrANEB.js";
import { P as w, R as b } from "./index-Cd0qZ9WW.js";
const C = ({ className: i, onSearch: a, defaultValue: d = "", ...n }) => {
  const [c, l] = o.useState(d), p = (s) => {
    var e;
    l(s.target.value), (e = n.onChange) == null || e.call(n, s);
  }, u = () => {
    l("");
    const s = new Event("input", { bubbles: !0 }), e = document.querySelector("input");
    e.value = "", e.dispatchEvent(s);
  }, m = (s) => {
    s.key === "Enter" && (a == null || a(c));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: g(
    "w-[342px] tablet:w-[392px]",
    "flex items-center gap-2 bg-[#F5F5F5] rounded-full px-2 py-3",
    "focus-within:ring-1 focus-within:ring-black",
    i
  ), children: [
    /* @__PURE__ */ t.jsx("img", { src: "/imgs/icons/search.svg" }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search",
        value: c,
        onChange: p,
        onKeyDown: m,
        className: g(
          "bg-transparent w-full outline-none text-gray-700 placeholder-gray-400",
          "text-base leading-5"
        ),
        ...n
      }
    ),
    c && /* @__PURE__ */ t.jsx(
      "img",
      {
        src: "/imgs/icons/clear.svg",
        className: "cursor-pointer w-4 h-4",
        onClick: u
      }
    )
  ] });
};
function I({
  loading: i,
  products: a,
  empty: d,
  selectedCategory: n
}) {
  const [c, l] = o.useState([]), [p, u] = o.useState(!1), [m, s] = o.useState({}), { data: e } = h();
  o.useEffect(() => {
    if (e && e.purchasedProducts) {
      const r = e.purchasedProducts.filter((x) => x.status === "active").map((x) => x.productId);
      l(r);
    }
  }, [e]);
  const f = (r) => {
    u(!0), s(r);
  };
  return i ? null : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    a.length === 0 ? d : /* @__PURE__ */ t.jsx("div", { className: g([
      "flex flex-wrap mx-auto",
      "desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]",
      "desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6"
    ]), children: a.map((r) => /* @__PURE__ */ t.jsx(
      w,
      {
        ...r,
        activedPurchasedProductIds: c,
        handleRampOpenModal: f,
        selectedCategory: n,
        className: "mobile:mb-[40px] mb-6"
      },
      r.id
    )) }),
    /* @__PURE__ */ t.jsx(b, { isOpen: p, onClose: () => u(!1), product: m })
  ] });
}
export {
  I as P,
  C as S
};
