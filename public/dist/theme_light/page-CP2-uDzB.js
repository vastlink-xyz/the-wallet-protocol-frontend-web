import { j as t } from "./vendor-radix-AvjOLIap.js";
import { k as C, a as r, l as L, m as P, o as T } from "./vendor-react-DSEtE0wE.js";
import { c as d, a8 as A, f as R, h as z, a9 as E } from "./main-BMueK7Y5.js";
import { S as B, P as I } from "./ProductList-uvk6qgrh.js";
import { a as O } from "./MarketplaceProvider-CY-AOZ2t.js";
import { l as M, b as F } from "./vendor-ui-utils-CGOon9_P.js";
import { P as _ } from "./index-BJFfLcbg.js";
import { B as D } from "./vendor-utils-BPVAmMsZ.js";
import { E as G } from "./index-CR413rs3.js";
const N = [
  "Most popular",
  "Free",
  "Latest",
  "Security",
  "Payment",
  "Compliance",
  "Social",
  "Branding",
  "Added"
];
function W({
  onSelect: n,
  selectedValue: p
}) {
  const { checkNewProducts: l, hasNewProducts: m } = O(), i = C(), c = N, [v, b] = r.useState(!1), [y, h] = r.useState(!1), a = r.useRef(null), [f, j] = r.useState(!1), x = r.useRef(0), u = () => {
    const e = a.current;
    if (e) {
      const { scrollLeft: s, scrollWidth: o, clientWidth: k } = e;
      h(s > 0), b(s < o - k - 1);
    }
  };
  r.useEffect(() => {
    const e = a.current;
    if (e) {
      const s = new ResizeObserver(() => {
        u();
      });
      return s.observe(e), () => s.disconnect();
    }
  }, []), r.useEffect(() => {
    u();
  }, [c]), r.useEffect(() => {
    const e = a.current;
    if (e)
      return e.addEventListener("scroll", u), () => e.removeEventListener("scroll", u);
  }, []), r.useEffect(() => {
    i.pathname === "/marketplace" && l();
  }, [i.pathname, l]);
  const w = () => {
    const e = a.current;
    e && e.scrollBy({ left: -200, behavior: "smooth" });
  }, g = () => {
    const e = a.current;
    e && e.scrollBy({ left: 200, behavior: "smooth" });
  };
  r.useEffect(() => {
    const e = () => {
      const s = a.current;
      if (s) {
        const { top: o } = s.getBoundingClientRect();
        j(o <= 16);
      }
    };
    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e);
  }, []), r.useEffect(() => {
    const e = new MutationObserver(() => {
      window.scrollTo({
        top: x.current,
        behavior: "instant"
      }), e.disconnect();
    });
    return e.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => e.disconnect();
  }, [p]);
  const S = (e) => {
    x.current = window.scrollY, n == null || n(e);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    f && /* @__PURE__ */ t.jsx("div", { className: "fixed top-0 left-0 right-0 h-[68px] bg-white shadow z-30" }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: d([
          "w-full sticky z-40",
          // 提高 z-index
          "desktop:w-[1224px] laptop:w-[816px] mx-auto"
        ]),
        style: { top: f ? "16px" : 0 },
        children: [
          y && /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: w,
              className: "absolute left-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ t.jsx("div", { className: "bg-gradient-to-r from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ t.jsx(M, { className: "w-5 h-5 text-gray-500" }) })
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              ref: a,
              className: "w-full h-9 flex items-center gap-4 overflow-x-auto scrollbar-hide",
              children: c.map((e, s) => {
                const o = p === e;
                return /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: () => S(e),
                    className: d(
                      "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                      o ? "h-9 bg-black px-[16px] rounded-[60px] justify-center items-center gap-2 flex" : "h-9 bg-transparent px-[16px] rounded-[60px] justify-center items-center gap-2 flex"
                      // : "h-9 flex items-center justify-center"
                    ),
                    children: /* @__PURE__ */ t.jsxs("div", { className: d(
                      "cursor-pointer relative",
                      o ? "text-white" : "text-black"
                    ), children: [
                      e,
                      e === "Added" && m && /* @__PURE__ */ t.jsx("div", { className: "absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" })
                    ] })
                  },
                  s
                );
              })
            }
          ),
          v && /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: g,
              className: "absolute right-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ t.jsx("div", { className: "bg-gradient-to-l from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ t.jsx(F, { className: "w-5 h-5 text-gray-500" }) })
            }
          )
        ]
      }
    )
  ] });
}
function Y({ threshold: n = 300, className: p }) {
  const [l, m] = r.useState(!1);
  r.useEffect(() => {
    const c = () => {
      m(window.scrollY > n);
    };
    return window.addEventListener("scroll", c), () => window.removeEventListener("scroll", c);
  }, [n]);
  const i = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return l ? /* @__PURE__ */ t.jsx(
    "div",
    {
      onClick: i,
      className: d([
        "w-11 h-11 bg-white rounded-full",
        "flex items-center justify-center",
        "fixed bottom-[80px] right-[22px] cursor-pointer",
        "shadow-lg hover:shadow-xl transition-shadow",
        "hover:bg-gray-50",
        p
      ]),
      children: /* @__PURE__ */ t.jsx("img", { src: "/imgs/icons/arrow_up.svg", alt: "Scroll to top" })
    }
  ) : null;
}
const H = "It looks like you haven’t added any items yet. Head over to the marketplace and discover new products to add!";
function ee() {
  const n = L(), [p] = P(), l = p.get("category"), [m, i] = r.useState(!1), [c, v] = r.useState(N[0]), {
    pagination: b,
    handlePageChange: y,
    updateTotal: h,
    updatePageSize: a
  } = A(), { products: f, total: j } = T(), [x, u] = r.useState(f), w = r.useCallback(async (s) => {
    try {
      i(!0);
      const o = await R.post("/marketplace/product/search-products", s);
      u(o.data.products), h(o.data.total);
    } catch (o) {
      const k = z(o);
      D.error(k.message);
    } finally {
      i(!1);
    }
  }, [h]);
  r.useEffect(() => {
    a(E), h(j), l && g(l);
  }, []);
  const g = async (s) => {
    v(s);
    const o = {
      page: 1,
      pageSize: E
    };
    s === "Free" ? o.freeOnly = !0 : s === "Most popular" ? o.sortBy = "popular" : s === "Latest" ? o.sortBy = "latest" : s === "Added" ? o.installedOnly = !0 : o.category = s, w(o);
  }, S = (s) => {
    n(`/marketplace/search-result?search=${s}`);
  }, e = (s) => {
    y(s), w({
      page: s,
      pageSize: E
    });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: d([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12"
  ]), children: [
    /* @__PURE__ */ t.jsx(
      B,
      {
        className: "my-[52px] mx-auto",
        onSearch: S
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: d([
      "mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]",
      "desktop:w-[1224px] laptop:w-[816px] mx-auto"
    ]), children: "All products" }),
    /* @__PURE__ */ t.jsx("div", { className: "sticky top-[16px] bg-white z-20 mb-8", children: /* @__PURE__ */ t.jsx(
      W,
      {
        onSelect: g,
        selectedValue: c
      }
    ) }),
    /* @__PURE__ */ t.jsxs("div", { className: d([
      "mb-[32px] mx-auto relative",
      "desktop:w-[1224px] laptop:w-[816px]",
      "min-h-[800px]"
    ]), children: [
      /* @__PURE__ */ t.jsx(
        I,
        {
          selectedCategory: c,
          products: x,
          empty: /* @__PURE__ */ t.jsx(G, { className: "mt-[96px] mx-auto", text: H })
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: "mt-[67px] text-center", children: /* @__PURE__ */ t.jsx(
        _,
        {
          ...b,
          onChange: e
        }
      ) })
    ] }),
    /* @__PURE__ */ t.jsx(Y, {})
  ] });
}
export {
  ee as default
};
