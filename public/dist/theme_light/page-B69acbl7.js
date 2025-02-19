import { j as t } from "./vendor-radix-BwSYOuH5.js";
import { h as T, r as o, i as A, l as R } from "./vendor-react-wyPiRY-L.js";
import { c as p, f as E, h as N } from "./main-aWh1b37I.js";
import { S as z, P as I } from "./ProductList-BajcDB73.js";
import { a as B } from "./MarketplaceProvider-DG3hvRo7.js";
import { l as O, b as M } from "./vendor-ui-utils-BbSwUILz.js";
import { u as D, P as F, D as S } from "./usePagination-D-CDBNPq.js";
import { B as C } from "./vendor-utils-BSjbfJFn.js";
import { E as _ } from "./index-DK9tN0_5.js";
const L = [
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
function G({
  onSelect: c,
  selectedValue: u
}) {
  const { checkNewProducts: f, hasNewProducts: l } = B(), i = T(), d = L, [b, y] = o.useState(!1), [x, k] = o.useState(!1), n = o.useRef(null), [w, g] = o.useState(!1), v = o.useRef(0), h = () => {
    const e = n.current;
    if (e) {
      const { scrollLeft: a, scrollWidth: m, clientWidth: P } = e;
      k(a > 0), y(a < m - P - 1);
    }
  };
  o.useEffect(() => {
    const e = n.current;
    if (e) {
      const a = new ResizeObserver(() => {
        h();
      });
      return a.observe(e), () => a.disconnect();
    }
  }, []), o.useEffect(() => {
    h();
  }, [d]), o.useEffect(() => {
    const e = n.current;
    if (e)
      return e.addEventListener("scroll", h), () => e.removeEventListener("scroll", h);
  }, []), o.useEffect(() => {
    i.pathname === "/marketplace" && f();
  }, [i.pathname, f]);
  const j = () => {
    const e = n.current;
    e && e.scrollBy({ left: -200, behavior: "smooth" });
  }, r = () => {
    const e = n.current;
    e && e.scrollBy({ left: 200, behavior: "smooth" });
  };
  o.useEffect(() => {
    const e = () => {
      const a = n.current;
      if (a) {
        const { top: m } = a.getBoundingClientRect();
        g(m <= 16);
      }
    };
    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e);
  }, []), o.useEffect(() => {
    const e = new MutationObserver(() => {
      window.scrollTo({
        top: v.current,
        behavior: "instant"
      }), e.disconnect();
    });
    return e.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => e.disconnect();
  }, [u]);
  const s = (e) => {
    v.current = window.scrollY, c == null || c(e);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    w && /* @__PURE__ */ t.jsx("div", { className: "fixed top-0 left-0 right-0 h-[68px] bg-white shadow z-30" }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: p([
          "w-full sticky z-40",
          // 提高 z-index
          "desktop:w-[1224px] laptop:w-[816px] mx-auto"
        ]),
        style: { top: w ? "16px" : 0 },
        children: [
          x && /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: j,
              className: "absolute left-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ t.jsx("div", { className: "bg-gradient-to-r from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ t.jsx(O, { className: "w-5 h-5 text-gray-500" }) })
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              ref: n,
              className: "w-full h-9 flex items-center gap-4 overflow-x-auto scrollbar-hide",
              children: d.map((e, a) => {
                const m = u === e;
                return /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: () => s(e),
                    className: p(
                      "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                      m ? "h-9 bg-black px-[16px] rounded-[60px] justify-center items-center gap-2 flex" : "h-9 bg-transparent px-[16px] rounded-[60px] justify-center items-center gap-2 flex"
                      // : "h-9 flex items-center justify-center"
                    ),
                    children: /* @__PURE__ */ t.jsxs("div", { className: p(
                      "cursor-pointer relative",
                      m ? "text-white" : "text-black"
                    ), children: [
                      e,
                      e === "Added" && l && /* @__PURE__ */ t.jsx("div", { className: "absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" })
                    ] })
                  },
                  a
                );
              })
            }
          ),
          b && /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: r,
              className: "absolute right-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ t.jsx("div", { className: "bg-gradient-to-l from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ t.jsx(M, { className: "w-5 h-5 text-gray-500" }) })
            }
          )
        ]
      }
    )
  ] });
}
function W({ threshold: c = 300, className: u }) {
  const [f, l] = o.useState(!1);
  o.useEffect(() => {
    const d = () => {
      l(window.scrollY > c);
    };
    return window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d);
  }, [c]);
  const i = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return f ? /* @__PURE__ */ t.jsx(
    "div",
    {
      onClick: i,
      className: p([
        "w-11 h-11 bg-white rounded-full",
        "flex items-center justify-center",
        "fixed bottom-[80px] right-[22px] cursor-pointer",
        "shadow-lg hover:shadow-xl transition-shadow",
        "hover:bg-gray-50",
        u
      ]),
      children: /* @__PURE__ */ t.jsx("img", { src: "/imgs/icons/arrow_up.svg", alt: "Scroll to top" })
    }
  ) : null;
}
const Y = "It looks like you haven’t added any items yet. Head over to the marketplace and discover new products to add!";
function X() {
  const c = A(), [u] = R();
  u.get("category");
  const [f, l] = o.useState(!1), [i, d] = o.useState(L[0]), {
    pagination: b,
    handlePageChange: y,
    updateTotal: x,
    updatePageSize: k
  } = D(), [n, w] = o.useState([]), g = o.useCallback(async (r) => {
    try {
      l(!0);
      const s = await E.post("/marketplace/product/search-products", r);
      w(s.data.products), x(s.data.total);
    } catch (s) {
      const e = N(s);
      C.error(e.message);
    } finally {
      l(!1);
    }
  }, [x]);
  o.useEffect(() => {
    (async () => {
      try {
        const s = await E.post("/marketplace/product/search-products", {
          page: 1,
          pageSize: S
        });
        w(s.data.products), x(s.data.total);
      } catch (s) {
        const e = N(s);
        C.error(e.message);
      } finally {
        l(!1);
      }
    })();
  }, []);
  const v = async (r) => {
    d(r);
    const s = {
      page: 1,
      pageSize: S
    };
    r === "Free" ? s.freeOnly = !0 : r === "Most popular" ? s.sortBy = "popular" : r === "Latest" ? s.sortBy = "latest" : r === "Added" ? s.installedOnly = !0 : s.category = r, g(s);
  }, h = (r) => {
    c(`/marketplace/search-result?search=${r}`);
  }, j = (r) => {
    y(r), g({
      page: r,
      pageSize: S
    });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: p([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12"
  ]), children: [
    /* @__PURE__ */ t.jsx(
      z,
      {
        className: "my-[52px] mx-auto",
        onSearch: h
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: p([
      "mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]",
      "desktop:w-[1224px] laptop:w-[816px] mx-auto"
    ]), children: "All products" }),
    /* @__PURE__ */ t.jsx("div", { className: "sticky top-[16px] bg-white z-20 mb-8", children: /* @__PURE__ */ t.jsx(
      G,
      {
        onSelect: v,
        selectedValue: i
      }
    ) }),
    /* @__PURE__ */ t.jsxs("div", { className: p([
      "mb-[32px] mx-auto relative",
      "desktop:w-[1224px] laptop:w-[816px]",
      "min-h-[800px]"
    ]), children: [
      /* @__PURE__ */ t.jsx(
        I,
        {
          selectedCategory: i,
          products: n,
          empty: /* @__PURE__ */ t.jsx(_, { className: "mt-[96px] mx-auto", text: Y })
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: "mt-[67px] text-center", children: /* @__PURE__ */ t.jsx(
        F,
        {
          ...b,
          onChange: j
        }
      ) })
    ] }),
    /* @__PURE__ */ t.jsx(W, {})
  ] });
}
export {
  X as default
};
