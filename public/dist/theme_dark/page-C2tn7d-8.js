import { j as e } from "./vendor-radix-CjL5_ZCn.js";
import { l as T, a as l, k as z } from "./vendor-react-D6ZgZFQ5.js";
import { l as A } from "./main-BJkbpKmW.js";
import { c as f } from "./style-CX3mXOu3.js";
import { h as C } from "./error-zbMK9Eli.js";
import { S as R, P as B, E as I } from "./index-BWb6RYI4.js";
import { u as M } from "./MarketplaceProvider-Croy5box.js";
import { h as S, C as P } from "./vendor-ui-utils-CwlQOkPE.js";
import { a as O } from "./index-CsjBluw_.js";
import { u as F, B as _ } from "./vendor-utils-C4jFYPlP.js";
const E = [
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
  selectedValue: p
}) {
  const { checkNewProducts: u, hasNewProducts: o } = M(), i = T(), h = E, [a, m] = l.useState(!1), [s, w] = l.useState(!1), n = l.useRef(null), [g, N] = l.useState(!1), j = l.useRef(0), v = () => {
    const t = n.current;
    if (t) {
      const { scrollLeft: x, scrollWidth: b, clientWidth: L } = t;
      w(x > 0), m(x < b - L - 1);
    }
  };
  l.useEffect(() => {
    const t = n.current;
    if (t) {
      const x = new ResizeObserver(() => {
        v();
      });
      return x.observe(t), () => x.disconnect();
    }
  }, []), l.useEffect(() => {
    v();
  }, [h]), l.useEffect(() => {
    const t = n.current;
    if (t)
      return t.addEventListener("scroll", v), () => t.removeEventListener("scroll", v);
  }, []), l.useEffect(() => {
    i.pathname === "/marketplace" && u();
  }, [i.pathname, u]);
  const c = () => {
    const t = n.current;
    t && t.scrollBy({ left: -200, behavior: "smooth" });
  }, d = () => {
    const t = n.current;
    t && t.scrollBy({ left: 200, behavior: "smooth" });
  };
  l.useEffect(() => {
    const t = () => {
      const x = n.current;
      if (x) {
        const { top: b } = x.getBoundingClientRect();
        N(b <= 16);
      }
    };
    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t);
  }, []), l.useEffect(() => {
    const t = new MutationObserver(() => {
      window.scrollTo({
        top: j.current,
        behavior: "instant"
      }), t.disconnect();
    });
    return t.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => t.disconnect();
  }, [p]);
  const k = (t) => {
    j.current = window.scrollY, r == null || r(t);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    g && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 left-0 right-0 h-[68px] bg-white shadow z-30" }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: f([
          "w-full sticky z-40",
          // 提高 z-index
          "desktop:w-[1224px] laptop:w-[816px] mx-auto"
        ]),
        style: { top: g ? "16px" : 0 },
        children: [
          s && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: c,
              className: "absolute left-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-r from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ e.jsx(S, { className: "w-5 h-5 text-gray-500" }) })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: n,
              className: "w-full h-9 flex items-center gap-7 overflow-x-auto scrollbar-hide",
              children: h.map((t, x) => {
                const b = p === t;
                return /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    onClick: () => k(t),
                    className: f(
                      "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                      b ? "h-9 w-[110px] bg-black rounded-[60px] justify-center items-center gap-2 flex" : "h-9 flex items-center justify-center"
                    ),
                    children: /* @__PURE__ */ e.jsxs("div", { className: f(
                      "cursor-pointer relative",
                      b ? "text-white" : "text-black"
                    ), children: [
                      t,
                      t === "Added" && o && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" })
                    ] })
                  },
                  x
                );
              })
            }
          ),
          a && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: d,
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
  total: p,
  pageSize: u = 30,
  onChange: o
}) {
  if (p === 0) return null;
  const i = Math.ceil(p / u), h = () => {
    const a = [];
    if (i <= 5)
      for (let s = 1; s <= i; s++)
        a.push(s);
    else if (a.push(1), r <= 3) {
      for (let s = 2; s <= 4; s++)
        a.push(s);
      a.push("ellipsis"), a.push(i);
    } else if (r >= i - 2) {
      a.push("ellipsis");
      for (let s = i - 3; s <= i; s++)
        a.push(s);
    } else
      a.push("ellipsis"), a.push(r - 1), a.push(r), a.push(r + 1), a.push("ellipsis"), a.push(i);
    return a.map((s, w) => {
      if (s === "ellipsis")
        return /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-center text-black/25 text-sm font-normal leading-loose tracking-widest", children: "•••" }) }, `ellipsis-${w}`);
      const n = s === r;
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => !n && (o == null ? void 0 : o(s)),
          className: f(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            n ? "bg-[#52c41a] border-[#52c41a]" : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          ),
          children: /* @__PURE__ */ e.jsx("div", { className: f(
            "text-center text-sm",
            n ? "text-white font-medium" : "text-black/90 font-normal"
          ), children: s })
        },
        s
      );
    });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "h-8 justify-start items-center gap-4 inline-flex", children: /* @__PURE__ */ e.jsxs("div", { className: "justify-start items-center gap-2 flex", children: [
    /* @__PURE__ */ e.jsx("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black/90 text-sm font-normal", children: [
      "Total ",
      p,
      " items"
    ] }) }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => r > 1 && (o == null ? void 0 : o(r - 1)),
        className: f(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          r > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(S, { className: "w-4 h-4" })
      }
    ),
    h(),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => r < i && (o == null ? void 0 : o(r + 1)),
        className: f(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          r < i ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(P, { className: "w-4 h-4" })
      }
    )
  ] }) });
}
function Y({
  total: r = 0,
  pageSize: p = 30
} = {}) {
  const [u, o] = l.useState({
    current: 1,
    total: r,
    pageSize: p
  });
  return {
    pagination: u,
    handlePageChange: (m) => {
      A("handlePageChange", m), o((s) => ({
        ...s,
        current: m
      }));
    },
    updateTotal: (m) => {
      o((s) => ({
        ...s,
        total: m
      }));
    },
    updatePageSize: (m) => {
      o((s) => ({
        ...s,
        pageSize: m,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
function $({ threshold: r = 300, className: p }) {
  const [u, o] = l.useState(!1);
  l.useEffect(() => {
    const h = () => {
      o(window.scrollY > r);
    };
    return window.addEventListener("scroll", h), () => window.removeEventListener("scroll", h);
  }, [r]);
  const i = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return u ? /* @__PURE__ */ e.jsx(
    "div",
    {
      onClick: i,
      className: f([
        "w-11 h-11 bg-white rounded-full",
        "flex items-center justify-center",
        "fixed bottom-[80px] right-[22px] cursor-pointer",
        "shadow-lg hover:shadow-xl transition-shadow",
        "hover:bg-gray-50",
        p
      ]),
      children: /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/arrow_up.svg", alt: "Scroll to top" })
    }
  ) : null;
}
const y = 30, D = "It looks like you haven’t added any items yet. Head over to the marketplace and discover new products and features to add!";
function te() {
  const r = z();
  F();
  const [p, u] = l.useState(!1), [o, i] = l.useState([]), [h, a] = l.useState(E[0]), {
    pagination: m,
    handlePageChange: s,
    updateTotal: w,
    updatePageSize: n
  } = Y(), g = l.useCallback(async (c) => {
    try {
      u(!0);
      const d = await O.post("/marketplace/product/search-products", c);
      i(d.data.products), w(d.data.total);
    } catch (d) {
      const k = C(d);
      _.error(k.message);
    } finally {
      u(!1);
    }
  }, [w]);
  l.useEffect(() => {
    n(y), g({
      page: 1,
      pageSize: y
    });
  }, []);
  const N = async (c) => {
    a(c);
    const d = {
      page: 1,
      pageSize: y
    };
    c === "Free" ? d.freeOnly = !0 : c === "Most popular" ? d.sortBy = "popular" : c === "Latest" ? d.sortBy = "latest" : c === "Added" ? d.installedOnly = !0 : d.category = c, g(d);
  }, j = (c) => {
    r(`/marketplace/search-result?search=${c}`);
  }, v = (c) => {
    s(c), g({
      page: c,
      pageSize: y
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: f([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12"
  ]), children: [
    /* @__PURE__ */ e.jsx(
      R,
      {
        className: "my-[52px] mx-auto",
        onSearch: j
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: f([
      "mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]",
      "desktop:w-[1224px] laptop:w-[816px] mx-auto"
    ]), children: "All products" }),
    /* @__PURE__ */ e.jsx("div", { className: "sticky top-[16px] bg-white z-20 mb-8", children: /* @__PURE__ */ e.jsx(
      G,
      {
        onSelect: N,
        selectedValue: h
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: f([
      "mb-[32px] mx-auto relative",
      "desktop:w-[1224px] laptop:w-[816px]",
      "min-h-[800px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(
        B,
        {
          selectedCategory: h,
          products: o,
          empty: /* @__PURE__ */ e.jsx(I, { className: "mt-[96px] mx-auto", text: D })
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "mt-[67px] text-center", children: /* @__PURE__ */ e.jsx(
        W,
        {
          ...m,
          onChange: v
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx($, {})
  ] });
}
export {
  te as default
};
