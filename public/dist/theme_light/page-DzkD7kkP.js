import { j as e } from "./vendor-radix-CjL5_ZCn.js";
import { l as T, a as l, k as z } from "./vendor-react-D6ZgZFQ5.js";
import { l as A } from "./main-DrvVrxeO.js";
import { c as f } from "./style-CX3mXOu3.js";
import { h as R } from "./error-DDWKB78C.js";
import { S as C, P as B, E as M } from "./index-CsiemUTq.js";
import { u as _ } from "./MarketplaceProvider-D5NCrQ1N.js";
import { h as S, C as P } from "./vendor-ui-utils-CwlQOkPE.js";
import { a as I } from "./index-Dr7PNsrq.js";
import { u as O, B as F } from "./vendor-utils-RvkaSVWD.js";
function G() {
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full relative rounded-[20px] overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/banners/marketplace_banner_1.mobile.svg",
        alt: "Marketplace Banner",
        className: "w-full h-full object-contain tablet:hidden"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/banners/marketplace_banner_1.laptop.svg",
        alt: "Marketplace Banner",
        className: "hidden tablet:block laptop:hidden w-full h-full object-contain"
      }
    ),
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/banners/marketplace_banner_1.desktop.svg",
        alt: "Marketplace Banner",
        className: "hidden laptop:block w-full h-full object-contain"
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col justify-start items-center gap-5 inline-flex", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "justify-start items-center gap-2.5 inline-flex", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-[9.50px] h-[9.50px] bg-white rounded-full" }),
        /* @__PURE__ */ e.jsx("div", { className: "w-[9.50px] h-[9.50px] bg-white/50 rounded-full" }),
        /* @__PURE__ */ e.jsx("div", { className: "w-[9.50px] h-[9.50px] bg-white/50 rounded-full" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "justify-center items-center gap-2.5 inline-flex", children: /* @__PURE__ */ e.jsx("div", { className: "h-9 px-4 py-2.5 bg-[#333333] rounded-[100px] justify-center items-center gap-2 flex", children: /* @__PURE__ */ e.jsx("div", { className: "text-center text-[#f2f2f2] text-sm font-medium font-['Roboto'] leading-none", children: "Recommended bundle" }) }) })
    ] })
  ] });
}
const E = [
  "Most popular",
  "Free",
  "Latest",
  "Security",
  "Payment",
  "Compliance",
  "Social",
  "Branding tool",
  "Added"
];
function W({
  onSelect: r,
  selectedValue: p
}) {
  const { checkNewProducts: u, hasNewProducts: a } = _(), n = T(), m = E, [o, h] = l.useState(!1), [s, w] = l.useState(!1), c = l.useRef(null), [b, y] = l.useState(!1), j = l.useRef(0), g = () => {
    const t = c.current;
    if (t) {
      const { scrollLeft: x, scrollWidth: v, clientWidth: L } = t;
      w(x > 0), h(x < v - L - 1);
    }
  };
  l.useEffect(() => {
    const t = c.current;
    if (t) {
      const x = new ResizeObserver(() => {
        g();
      });
      return x.observe(t), () => x.disconnect();
    }
  }, []), l.useEffect(() => {
    g();
  }, [m]), l.useEffect(() => {
    const t = c.current;
    if (t)
      return t.addEventListener("scroll", g), () => t.removeEventListener("scroll", g);
  }, []), l.useEffect(() => {
    n.pathname === "/marketplace" && u();
  }, [n.pathname, u]);
  const i = () => {
    const t = c.current;
    t && t.scrollBy({ left: -200, behavior: "smooth" });
  }, d = () => {
    const t = c.current;
    t && t.scrollBy({ left: 200, behavior: "smooth" });
  };
  l.useEffect(() => {
    const t = () => {
      const x = c.current;
      if (x) {
        const { top: v } = x.getBoundingClientRect();
        y(v <= 16);
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
    b && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 left-0 right-0 h-[68px] bg-white shadow z-30" }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: f([
          "w-full sticky z-40",
          // 提高 z-index
          "desktop:w-[1224px] laptop:w-[816px] mx-auto"
        ]),
        style: { top: b ? "16px" : 0 },
        children: [
          s && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: i,
              className: "absolute left-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-r from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ e.jsx(S, { className: "w-5 h-5 text-gray-500" }) })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: c,
              className: "w-full h-9 flex items-center gap-7 overflow-x-auto scrollbar-hide",
              children: m.map((t, x) => {
                const v = p === t;
                return /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    onClick: () => k(t),
                    className: f(
                      "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                      v ? "h-9 w-[110px] bg-black rounded-[60px] justify-center items-center gap-2 flex" : "h-9 flex items-center justify-center"
                    ),
                    children: /* @__PURE__ */ e.jsxs("div", { className: f(
                      "cursor-pointer relative",
                      v ? "text-white" : "text-black"
                    ), children: [
                      t,
                      t === "Added" && a && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" })
                    ] })
                  },
                  x
                );
              })
            }
          ),
          o && /* @__PURE__ */ e.jsx(
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
function Y({
  current: r,
  total: p,
  pageSize: u = 30,
  onChange: a
}) {
  if (p === 0) return null;
  const n = Math.ceil(p / u), m = () => {
    const o = [];
    if (n <= 5)
      for (let s = 1; s <= n; s++)
        o.push(s);
    else if (o.push(1), r <= 3) {
      for (let s = 2; s <= 4; s++)
        o.push(s);
      o.push("ellipsis"), o.push(n);
    } else if (r >= n - 2) {
      o.push("ellipsis");
      for (let s = n - 3; s <= n; s++)
        o.push(s);
    } else
      o.push("ellipsis"), o.push(r - 1), o.push(r), o.push(r + 1), o.push("ellipsis"), o.push(n);
    return o.map((s, w) => {
      if (s === "ellipsis")
        return /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-center text-black/25 text-sm font-normal leading-loose tracking-widest", children: "•••" }) }, `ellipsis-${w}`);
      const c = s === r;
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => !c && (a == null ? void 0 : a(s)),
          className: f(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            c ? "bg-[#52c41a] border-[#52c41a]" : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          ),
          children: /* @__PURE__ */ e.jsx("div", { className: f(
            "text-center text-sm",
            c ? "text-white font-medium" : "text-black/90 font-normal"
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
        onClick: () => r > 1 && (a == null ? void 0 : a(r - 1)),
        className: f(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          r > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(S, { className: "w-4 h-4" })
      }
    ),
    m(),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => r < n && (a == null ? void 0 : a(r + 1)),
        className: f(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          r < n ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(P, { className: "w-4 h-4" })
      }
    )
  ] }) });
}
function $({
  total: r = 0,
  pageSize: p = 30
} = {}) {
  const [u, a] = l.useState({
    current: 1,
    total: r,
    pageSize: p
  });
  return {
    pagination: u,
    handlePageChange: (h) => {
      A("handlePageChange", h), a((s) => ({
        ...s,
        current: h
      }));
    },
    updateTotal: (h) => {
      a((s) => ({
        ...s,
        total: h
      }));
    },
    updatePageSize: (h) => {
      a((s) => ({
        ...s,
        pageSize: h,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
function D({ threshold: r = 300, className: p }) {
  const [u, a] = l.useState(!1);
  l.useEffect(() => {
    const m = () => {
      a(window.scrollY > r);
    };
    return window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m);
  }, [r]);
  const n = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return u ? /* @__PURE__ */ e.jsx(
    "div",
    {
      onClick: n,
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
const N = 30, H = "It looks like you haven’t added any items yet. Head over to the marketplace and discover new products and features to add!";
function se() {
  const r = z();
  O();
  const [p, u] = l.useState(!1), [a, n] = l.useState([]), [m, o] = l.useState(E[0]), {
    pagination: h,
    handlePageChange: s,
    updateTotal: w,
    updatePageSize: c
  } = $(), b = l.useCallback(async (i) => {
    try {
      u(!0);
      const d = await I.post("/marketplace/product/search-products", i);
      n(d.data.products), w(d.data.total);
    } catch (d) {
      const k = R(d);
      F.error(k.message);
    } finally {
      u(!1);
    }
  }, [w]);
  l.useEffect(() => {
    c(N), b({
      page: 1,
      pageSize: N
    });
  }, []);
  const y = async (i) => {
    o(i);
    const d = {
      page: 1,
      pageSize: N
    };
    i === "Free" ? d.freeOnly = !0 : i === "Most popular" ? d.sortBy = "popular" : i === "Latest" ? d.sortBy = "latest" : i === "Added" ? d.installedOnly = !0 : d.category = i, b(d);
  }, j = (i) => {
    r(`/marketplace/search-result?search=${i}`);
  }, g = (i) => {
    s(i), b({
      page: i,
      pageSize: N
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: f([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12"
  ]), children: [
    /* @__PURE__ */ e.jsx(
      C,
      {
        className: "my-[52px] mx-auto",
        onSearch: j
      }
    ),
    /* @__PURE__ */ e.jsx(G, {}),
    /* @__PURE__ */ e.jsx("div", { className: f([
      "mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]",
      "desktop:w-[1224px] laptop:w-[816px] mx-auto"
    ]), children: "All features" }),
    /* @__PURE__ */ e.jsx("div", { className: "sticky top-[16px] bg-white z-20 mb-8", children: /* @__PURE__ */ e.jsx(
      W,
      {
        onSelect: y,
        selectedValue: m
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
          selectedCategory: m,
          products: a,
          empty: /* @__PURE__ */ e.jsx(M, { className: "mt-[96px] mx-auto", text: H })
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "mt-[67px] text-center", children: /* @__PURE__ */ e.jsx(
        Y,
        {
          ...h,
          onChange: g
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx(D, {})
  ] });
}
export {
  se as default
};
