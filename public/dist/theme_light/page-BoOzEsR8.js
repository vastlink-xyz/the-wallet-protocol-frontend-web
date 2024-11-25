import { j as e } from "./vendor-radix-nT--cb5B.js";
import { i as T, r as i, j as A, k as R, n as z } from "./vendor-react-CwfAKKXk.js";
import { c as p, r as C, f as B, h as I, s as S } from "./main-Gzb6y-w8.js";
import { S as M, P as O } from "./ProductList-B0hC2mDS.js";
import { b as F } from "./MarketplaceProvider-C3yoJvfW.js";
import { k as E, b as P } from "./vendor-ui-utils-ERHZUJ9g.js";
import { B as _ } from "./vendor-utils-DOORVzle.js";
import { E as D } from "./index-BLn1zaQ8.js";
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
  onSelect: r,
  selectedValue: u
}) {
  const { checkNewProducts: m, hasNewProducts: n } = F(), l = T(), h = L, [a, w] = i.useState(!1), [o, x] = i.useState(!1), d = i.useRef(null), [b, y] = i.useState(!1), v = i.useRef(0), f = () => {
    const t = d.current;
    if (t) {
      const { scrollLeft: s, scrollWidth: c, clientWidth: k } = t;
      x(s > 0), w(s < c - k - 1);
    }
  };
  i.useEffect(() => {
    const t = d.current;
    if (t) {
      const s = new ResizeObserver(() => {
        f();
      });
      return s.observe(t), () => s.disconnect();
    }
  }, []), i.useEffect(() => {
    f();
  }, [h]), i.useEffect(() => {
    const t = d.current;
    if (t)
      return t.addEventListener("scroll", f), () => t.removeEventListener("scroll", f);
  }, []), i.useEffect(() => {
    l.pathname === "/marketplace" && m();
  }, [l.pathname, m]);
  const g = () => {
    const t = d.current;
    t && t.scrollBy({ left: -200, behavior: "smooth" });
  }, j = () => {
    const t = d.current;
    t && t.scrollBy({ left: 200, behavior: "smooth" });
  };
  i.useEffect(() => {
    const t = () => {
      const s = d.current;
      if (s) {
        const { top: c } = s.getBoundingClientRect();
        y(c <= 16);
      }
    };
    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t);
  }, []), i.useEffect(() => {
    const t = new MutationObserver(() => {
      window.scrollTo({
        top: v.current,
        behavior: "instant"
      }), t.disconnect();
    });
    return t.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => t.disconnect();
  }, [u]);
  const N = (t) => {
    v.current = window.scrollY, r == null || r(t);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    b && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 left-0 right-0 h-[68px] bg-white shadow z-30" }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: p([
          "w-full sticky z-40",
          // 提高 z-index
          "desktop:w-[1224px] laptop:w-[816px] mx-auto"
        ]),
        style: { top: b ? "16px" : 0 },
        children: [
          o && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: g,
              className: "absolute left-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-r from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ e.jsx(E, { className: "w-5 h-5 text-gray-500" }) })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: d,
              className: "w-full h-9 flex items-center gap-4 overflow-x-auto scrollbar-hide",
              children: h.map((t, s) => {
                const c = u === t;
                return /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    onClick: () => N(t),
                    className: p(
                      "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                      c ? "h-9 bg-black px-[16px] rounded-[60px] justify-center items-center gap-2 flex" : "h-9 bg-transparent px-[16px] rounded-[60px] justify-center items-center gap-2 flex"
                      // : "h-9 flex items-center justify-center"
                    ),
                    children: /* @__PURE__ */ e.jsxs("div", { className: p(
                      "cursor-pointer relative",
                      c ? "text-white" : "text-black"
                    ), children: [
                      t,
                      t === "Added" && n && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" })
                    ] })
                  },
                  s
                );
              })
            }
          ),
          a && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: j,
              className: "absolute right-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-l from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ e.jsx(P, { className: "w-5 h-5 text-gray-500" }) })
            }
          )
        ]
      }
    )
  ] });
}
function W({
  current: r,
  total: u,
  pageSize: m = 30,
  onChange: n
}) {
  if (u === 0) return null;
  const l = Math.ceil(u / m), h = () => {
    const a = [];
    if (l <= 5)
      for (let o = 1; o <= l; o++)
        a.push(o);
    else if (a.push(1), r <= 3) {
      for (let o = 2; o <= 4; o++)
        a.push(o);
      a.push("ellipsis"), a.push(l);
    } else if (r >= l - 2) {
      a.push("ellipsis");
      for (let o = l - 3; o <= l; o++)
        a.push(o);
    } else
      a.push("ellipsis"), a.push(r - 1), a.push(r), a.push(r + 1), a.push("ellipsis"), a.push(l);
    return a.map((o, x) => {
      if (o === "ellipsis")
        return /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-center text-black/25 text-sm font-normal leading-loose tracking-widest", children: "•••" }) }, `ellipsis-${x}`);
      const d = o === r;
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => !d && (n == null ? void 0 : n(o)),
          className: p(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            d ? "bg-[#52c41a] border-[#52c41a]" : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          ),
          children: /* @__PURE__ */ e.jsx("div", { className: p(
            "text-center text-sm",
            d ? "text-white font-medium" : "text-black/90 font-normal"
          ), children: o })
        },
        o
      );
    });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "h-8 justify-start items-center gap-4 inline-flex", children: /* @__PURE__ */ e.jsxs("div", { className: "justify-start items-center gap-2 flex", children: [
    /* @__PURE__ */ e.jsx("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black/90 text-sm font-normal", children: [
      "Total ",
      u,
      " items"
    ] }) }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => r > 1 && (n == null ? void 0 : n(r - 1)),
        className: p(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          r > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(E, { className: "w-4 h-4" })
      }
    ),
    h(),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => r < l && (n == null ? void 0 : n(r + 1)),
        className: p(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          r < l ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(P, { className: "w-4 h-4" })
      }
    )
  ] }) });
}
function Y({ threshold: r = 300, className: u }) {
  const [m, n] = i.useState(!1);
  i.useEffect(() => {
    const h = () => {
      n(window.scrollY > r);
    };
    return window.addEventListener("scroll", h), () => window.removeEventListener("scroll", h);
  }, [r]);
  const l = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return m ? /* @__PURE__ */ e.jsx(
    "div",
    {
      onClick: l,
      className: p([
        "w-11 h-11 bg-white rounded-full",
        "flex items-center justify-center",
        "fixed bottom-[80px] right-[22px] cursor-pointer",
        "shadow-lg hover:shadow-xl transition-shadow",
        "hover:bg-gray-50",
        u
      ]),
      children: /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/arrow_up.svg", alt: "Scroll to top" })
    }
  ) : null;
}
const $ = "It looks like you haven’t added any items yet. Head over to the marketplace and discover new products and features to add!";
function X() {
  const r = A(), [u] = R(), m = u.get("category"), [n, l] = i.useState(!1), [h, a] = i.useState(L[0]), {
    pagination: w,
    handlePageChange: o,
    updateTotal: x,
    updatePageSize: d
  } = C(), { products: b, total: y } = z(), [v, f] = i.useState(b), g = i.useCallback(async (s) => {
    try {
      l(!0);
      const c = await B.post("/marketplace/product/search-products", s);
      f(c.data.products), x(c.data.total);
    } catch (c) {
      const k = I(c);
      _.error(k.message);
    } finally {
      l(!1);
    }
  }, [x]);
  i.useEffect(() => {
    d(S), x(y), m && j(m);
  }, []);
  const j = async (s) => {
    a(s);
    const c = {
      page: 1,
      pageSize: S
    };
    s === "Free" ? c.freeOnly = !0 : s === "Most popular" ? c.sortBy = "popular" : s === "Latest" ? c.sortBy = "latest" : s === "Added" ? c.installedOnly = !0 : c.category = s, g(c);
  }, N = (s) => {
    r(`/marketplace/search-result?search=${s}`);
  }, t = (s) => {
    o(s), g({
      page: s,
      pageSize: S
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: p([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12"
  ]), children: [
    /* @__PURE__ */ e.jsx(
      M,
      {
        className: "my-[52px] mx-auto",
        onSearch: N
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: p([
      "mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]",
      "desktop:w-[1224px] laptop:w-[816px] mx-auto"
    ]), children: "All products" }),
    /* @__PURE__ */ e.jsx("div", { className: "sticky top-[16px] bg-white z-20 mb-8", children: /* @__PURE__ */ e.jsx(
      G,
      {
        onSelect: j,
        selectedValue: h
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: p([
      "mb-[32px] mx-auto relative",
      "desktop:w-[1224px] laptop:w-[816px]",
      "min-h-[800px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(
        O,
        {
          selectedCategory: h,
          products: v,
          empty: /* @__PURE__ */ e.jsx(D, { className: "mt-[96px] mx-auto", text: $ })
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "mt-[67px] text-center", children: /* @__PURE__ */ e.jsx(
        W,
        {
          ...w,
          onChange: t
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(Y, {})
  ] });
}
export {
  X as default
};
