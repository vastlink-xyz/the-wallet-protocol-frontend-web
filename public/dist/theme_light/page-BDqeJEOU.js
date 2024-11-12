import { j as t } from "./vendor-radix-BcySUdtt.js";
import { j as T, a, k as A, o as R } from "./vendor-react-BdtkaT_f.js";
import { c as p, r as z, g as C, j as B, t as k } from "./main-CDK5RuLO.js";
import { S as I, P as M } from "./ProductList-CedWaO4D.js";
import { u as O } from "./MarketplaceProvider-N7SHg3sd.js";
import { j as S, b as E } from "./vendor-ui-utils-D5jysYH4.js";
import { u as F, B as _ } from "./vendor-utils-CISROZyj.js";
import { E as D } from "./index-DXQ__9RP.js";
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
  onSelect: s,
  selectedValue: u
}) {
  const { checkNewProducts: h, hasNewProducts: l } = O(), c = T(), m = L, [o, x] = a.useState(!1), [r, v] = a.useState(!1), n = a.useRef(null), [j, g] = a.useState(!1), b = a.useRef(0), f = () => {
    const e = n.current;
    if (e) {
      const { scrollLeft: d, scrollWidth: w, clientWidth: P } = e;
      v(d > 0), x(d < w - P - 1);
    }
  };
  a.useEffect(() => {
    const e = n.current;
    if (e) {
      const d = new ResizeObserver(() => {
        f();
      });
      return d.observe(e), () => d.disconnect();
    }
  }, []), a.useEffect(() => {
    f();
  }, [m]), a.useEffect(() => {
    const e = n.current;
    if (e)
      return e.addEventListener("scroll", f), () => e.removeEventListener("scroll", f);
  }, []), a.useEffect(() => {
    c.pathname === "/marketplace" && h();
  }, [c.pathname, h]);
  const y = () => {
    const e = n.current;
    e && e.scrollBy({ left: -200, behavior: "smooth" });
  }, N = () => {
    const e = n.current;
    e && e.scrollBy({ left: 200, behavior: "smooth" });
  };
  a.useEffect(() => {
    const e = () => {
      const d = n.current;
      if (d) {
        const { top: w } = d.getBoundingClientRect();
        g(w <= 16);
      }
    };
    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e);
  }, []), a.useEffect(() => {
    const e = new MutationObserver(() => {
      window.scrollTo({
        top: b.current,
        behavior: "instant"
      }), e.disconnect();
    });
    return e.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => e.disconnect();
  }, [u]);
  const i = (e) => {
    b.current = window.scrollY, s == null || s(e);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    j && /* @__PURE__ */ t.jsx("div", { className: "fixed top-0 left-0 right-0 h-[68px] bg-white shadow z-30" }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: p([
          "w-full sticky z-40",
          // 提高 z-index
          "desktop:w-[1224px] laptop:w-[816px] mx-auto"
        ]),
        style: { top: j ? "16px" : 0 },
        children: [
          r && /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: y,
              className: "absolute left-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ t.jsx("div", { className: "bg-gradient-to-r from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ t.jsx(S, { className: "w-5 h-5 text-gray-500" }) })
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              ref: n,
              className: "w-full h-9 flex items-center gap-7 overflow-x-auto scrollbar-hide",
              children: m.map((e, d) => {
                const w = u === e;
                return /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    onClick: () => i(e),
                    className: p(
                      "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                      w ? "h-9 w-[110px] bg-black rounded-[60px] justify-center items-center gap-2 flex" : "h-9 flex items-center justify-center"
                    ),
                    children: /* @__PURE__ */ t.jsxs("div", { className: p(
                      "cursor-pointer relative",
                      w ? "text-white" : "text-black"
                    ), children: [
                      e,
                      e === "Added" && l && /* @__PURE__ */ t.jsx("div", { className: "absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" })
                    ] })
                  },
                  d
                );
              })
            }
          ),
          o && /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: N,
              className: "absolute right-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ t.jsx("div", { className: "bg-gradient-to-l from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ t.jsx(E, { className: "w-5 h-5 text-gray-500" }) })
            }
          )
        ]
      }
    )
  ] });
}
function W({
  current: s,
  total: u,
  pageSize: h = 30,
  onChange: l
}) {
  if (u === 0) return null;
  const c = Math.ceil(u / h), m = () => {
    const o = [];
    if (c <= 5)
      for (let r = 1; r <= c; r++)
        o.push(r);
    else if (o.push(1), s <= 3) {
      for (let r = 2; r <= 4; r++)
        o.push(r);
      o.push("ellipsis"), o.push(c);
    } else if (s >= c - 2) {
      o.push("ellipsis");
      for (let r = c - 3; r <= c; r++)
        o.push(r);
    } else
      o.push("ellipsis"), o.push(s - 1), o.push(s), o.push(s + 1), o.push("ellipsis"), o.push(c);
    return o.map((r, v) => {
      if (r === "ellipsis")
        return /* @__PURE__ */ t.jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ t.jsx("div", { className: "text-center text-black/25 text-sm font-normal leading-loose tracking-widest", children: "•••" }) }, `ellipsis-${v}`);
      const n = r === s;
      return /* @__PURE__ */ t.jsx(
        "div",
        {
          onClick: () => !n && (l == null ? void 0 : l(r)),
          className: p(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            n ? "bg-[#52c41a] border-[#52c41a]" : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          ),
          children: /* @__PURE__ */ t.jsx("div", { className: p(
            "text-center text-sm",
            n ? "text-white font-medium" : "text-black/90 font-normal"
          ), children: r })
        },
        r
      );
    });
  };
  return /* @__PURE__ */ t.jsx("div", { className: "h-8 justify-start items-center gap-4 inline-flex", children: /* @__PURE__ */ t.jsxs("div", { className: "justify-start items-center gap-2 flex", children: [
    /* @__PURE__ */ t.jsx("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ t.jsxs("div", { className: "text-black/90 text-sm font-normal", children: [
      "Total ",
      u,
      " items"
    ] }) }),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => s > 1 && (l == null ? void 0 : l(s - 1)),
        className: p(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          s > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ t.jsx(S, { className: "w-4 h-4" })
      }
    ),
    m(),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => s < c && (l == null ? void 0 : l(s + 1)),
        className: p(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          s < c ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ t.jsx(E, { className: "w-4 h-4" })
      }
    )
  ] }) });
}
function Y({ threshold: s = 300, className: u }) {
  const [h, l] = a.useState(!1);
  a.useEffect(() => {
    const m = () => {
      l(window.scrollY > s);
    };
    return window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m);
  }, [s]);
  const c = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return h ? /* @__PURE__ */ t.jsx(
    "div",
    {
      onClick: c,
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
const $ = "It looks like you haven’t added any items yet. Head over to the marketplace and discover new products and features to add!";
function X() {
  const s = A();
  F();
  const [u, h] = a.useState(!1), [l, c] = a.useState(L[0]), {
    pagination: m,
    handlePageChange: o,
    updateTotal: x,
    updatePageSize: r
  } = z(), { products: v, total: n } = R(), [j, g] = a.useState(v), b = a.useCallback(async (i) => {
    try {
      h(!0);
      const e = await C.post("/marketplace/product/search-products", i);
      g(e.data.products), x(e.data.total);
    } catch (e) {
      const d = B(e);
      _.error(d.message);
    } finally {
      h(!1);
    }
  }, [x]);
  a.useEffect(() => {
    r(k), x(n);
  }, []);
  const f = async (i) => {
    c(i);
    const e = {
      page: 1,
      pageSize: k
    };
    i === "Free" ? e.freeOnly = !0 : i === "Most popular" ? e.sortBy = "popular" : i === "Latest" ? e.sortBy = "latest" : i === "Added" ? e.installedOnly = !0 : e.category = i, b(e);
  }, y = (i) => {
    s(`/marketplace/search-result?search=${i}`);
  }, N = (i) => {
    o(i), b({
      page: i,
      pageSize: k
    });
  };
  return /* @__PURE__ */ t.jsxs("div", { className: p([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12"
  ]), children: [
    /* @__PURE__ */ t.jsx(
      I,
      {
        className: "my-[52px] mx-auto",
        onSearch: y
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: p([
      "mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]",
      "desktop:w-[1224px] laptop:w-[816px] mx-auto"
    ]), children: "All products" }),
    /* @__PURE__ */ t.jsx("div", { className: "sticky top-[16px] bg-white z-20 mb-8", children: /* @__PURE__ */ t.jsx(
      G,
      {
        onSelect: f,
        selectedValue: l
      }
    ) }),
    /* @__PURE__ */ t.jsxs("div", { className: p([
      "mb-[32px] mx-auto relative",
      "desktop:w-[1224px] laptop:w-[816px]",
      "min-h-[800px]"
    ]), children: [
      /* @__PURE__ */ t.jsx(
        M,
        {
          selectedCategory: l,
          products: j,
          empty: /* @__PURE__ */ t.jsx(D, { className: "mt-[96px] mx-auto", text: $ })
        }
      ),
      /* @__PURE__ */ t.jsx("div", { className: "mt-[67px] text-center", children: /* @__PURE__ */ t.jsx(
        W,
        {
          ...m,
          onChange: N
        }
      ) })
    ] }),
    /* @__PURE__ */ t.jsx(Y, {})
  ] });
}
export {
  X as default
};
