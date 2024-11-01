import { j as e } from "./vendor-radix-DcfHr-b-.js";
import { k as E, r as n, j as L } from "./vendor-react-Cqw-pUgZ.js";
import { l as T } from "./main-BQRn5y6W.js";
import { c as x } from "./style-JRa9Y8f9.js";
import { h as z } from "./error-BOjt9hlf.js";
import { S as A, P as R, E as B } from "./index-DbZaplHg.js";
import { u as C } from "./MarketplaceProvider-CPl4YILM.js";
import { h as y, C as k } from "./vendor-ui-utils-D8A1AlyV.js";
import { a as _ } from "./index-DEOj28UY.js";
import { u as M, B as I } from "./vendor-utils-BEOEHg0B.js";
function O() {
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
const S = [
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
function F({
  onSelect: r,
  selectedValue: f
}) {
  const { checkNewProducts: p, hasNewProducts: a } = C(), l = E(), u = S, [o, m] = n.useState(!1), [s, h] = n.useState(!1), c = n.useRef(null), [w, v] = n.useState(!1), g = () => {
    const t = c.current;
    if (t) {
      const { scrollLeft: d, scrollWidth: b, clientWidth: P } = t;
      h(d > 0), m(d < b - P - 1);
    }
  };
  n.useEffect(() => {
    const t = c.current;
    if (t) {
      const d = new ResizeObserver(() => {
        g();
      });
      return d.observe(t), () => d.disconnect();
    }
  }, []), n.useEffect(() => {
    g();
  }, [u]), n.useEffect(() => {
    const t = c.current;
    if (t)
      return t.addEventListener("scroll", g), () => t.removeEventListener("scroll", g);
  }, []), n.useEffect(() => {
    l.pathname === "/marketplace" && p();
  }, [l.pathname, p]);
  const N = () => {
    const t = c.current;
    t && t.scrollBy({ left: -200, behavior: "smooth" });
  }, i = () => {
    const t = c.current;
    t && t.scrollBy({ left: 200, behavior: "smooth" });
  };
  return n.useEffect(() => {
    const t = () => {
      const d = c.current;
      if (d) {
        const { top: b } = d.getBoundingClientRect();
        v(b <= 16);
      }
    };
    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t);
  }, []), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    w && /* @__PURE__ */ e.jsx("div", { className: "fixed top-0 left-0 right-0 h-[68px] bg-white shadow z-30" }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: x([
          "w-full sticky z-40",
          // 提高 z-index
          "desktop:w-[1224px] laptop:w-[816px] mx-auto"
        ]),
        style: { top: w ? "16px" : 0 },
        children: [
          s && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: N,
              className: "absolute left-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-r from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ e.jsx(y, { className: "w-5 h-5 text-gray-500" }) })
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              ref: c,
              className: "w-full h-9 flex items-center gap-7 overflow-x-auto scrollbar-hide",
              children: u.map((t, d) => {
                const b = f === t;
                return /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    onClick: () => r == null ? void 0 : r(t),
                    className: x(
                      "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                      b ? "h-9 w-[110px] bg-black rounded-[60px] justify-center items-center gap-2 flex" : "h-9 flex items-center justify-center"
                    ),
                    children: /* @__PURE__ */ e.jsxs("div", { className: x(
                      "cursor-pointer relative",
                      b ? "text-white" : "text-black"
                    ), children: [
                      t,
                      t === "Added" && a && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" })
                    ] })
                  },
                  d
                );
              })
            }
          ),
          o && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: i,
              className: "absolute right-0 top-0 h-full flex items-center z-10",
              children: /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-l from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ e.jsx(k, { className: "w-5 h-5 text-gray-500" }) })
            }
          )
        ]
      }
    )
  ] });
}
function G({
  current: r,
  total: f,
  pageSize: p = 30,
  onChange: a
}) {
  if (f === 0) return null;
  const l = Math.ceil(f / p), u = () => {
    const o = [];
    if (l <= 5)
      for (let s = 1; s <= l; s++)
        o.push(s);
    else if (o.push(1), r <= 3) {
      for (let s = 2; s <= 4; s++)
        o.push(s);
      o.push("ellipsis"), o.push(l);
    } else if (r >= l - 2) {
      o.push("ellipsis");
      for (let s = l - 3; s <= l; s++)
        o.push(s);
    } else
      o.push("ellipsis"), o.push(r - 1), o.push(r), o.push(r + 1), o.push("ellipsis"), o.push(l);
    return o.map((s, h) => {
      if (s === "ellipsis")
        return /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-center text-black/25 text-sm font-normal leading-loose tracking-widest", children: "•••" }) }, `ellipsis-${h}`);
      const c = s === r;
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => !c && (a == null ? void 0 : a(s)),
          className: x(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            c ? "bg-[#52c41a] border-[#52c41a]" : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          ),
          children: /* @__PURE__ */ e.jsx("div", { className: x(
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
      f,
      " items"
    ] }) }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => r > 1 && (a == null ? void 0 : a(r - 1)),
        className: x(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          r > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(y, { className: "w-4 h-4" })
      }
    ),
    u(),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => r < l && (a == null ? void 0 : a(r + 1)),
        className: x(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          r < l ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(k, { className: "w-4 h-4" })
      }
    )
  ] }) });
}
function W({
  total: r = 0,
  pageSize: f = 30
} = {}) {
  const [p, a] = n.useState({
    current: 1,
    total: r,
    pageSize: f
  });
  return {
    pagination: p,
    handlePageChange: (m) => {
      T("handlePageChange", m), a((s) => ({
        ...s,
        current: m
      }));
    },
    updateTotal: (m) => {
      a((s) => ({
        ...s,
        total: m
      }));
    },
    updatePageSize: (m) => {
      a((s) => ({
        ...s,
        pageSize: m,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
function $({ threshold: r = 300, className: f }) {
  const [p, a] = n.useState(!1);
  n.useEffect(() => {
    const u = () => {
      a(window.scrollY > r);
    };
    return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u);
  }, [r]);
  const l = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return p ? /* @__PURE__ */ e.jsx(
    "div",
    {
      onClick: l,
      className: x([
        "w-11 h-11 bg-white rounded-full",
        "flex items-center justify-center",
        "fixed bottom-[80px] right-[22px] cursor-pointer",
        "shadow-lg hover:shadow-xl transition-shadow",
        "hover:bg-gray-50",
        f
      ]),
      children: /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/arrow_up.svg", alt: "Scroll to top" })
    }
  ) : null;
}
const j = 30, D = "It looks like you haven’t added any items yet. Head over to the marketplace and discover new products and features to add!";
function ee() {
  const r = L();
  M();
  const [f, p] = n.useState(!1), [a, l] = n.useState([]), [u, o] = n.useState(S[0]), {
    pagination: m,
    handlePageChange: s,
    updateTotal: h,
    updatePageSize: c
  } = W(), w = n.useCallback(async (i) => {
    try {
      p(!0);
      const t = await _.post("/marketplace/product/search-products", i);
      l(t.data.products), h(t.data.total);
    } catch (t) {
      const d = z(t);
      I.error(d.message);
    } finally {
      p(!1);
    }
  }, [h]);
  n.useEffect(() => {
    c(j), w({
      page: 1,
      pageSize: j
    });
  }, []);
  const v = async (i) => {
    o(i);
    const t = {
      page: 1,
      pageSize: j
    };
    i === "Free" ? t.freeOnly = !0 : i === "Most popular" ? t.sortBy = "popular" : i === "Latest" ? t.sortBy = "latest" : i === "Added" ? t.installedOnly = !0 : t.category = i, w(t);
  }, g = (i) => {
    r(`/marketplace/search-result?search=${i}`);
  }, N = (i) => {
    s(i), w({
      page: i,
      pageSize: j
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: x([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12"
  ]), children: [
    /* @__PURE__ */ e.jsx(
      A,
      {
        className: "my-[52px] mx-auto",
        onSearch: g
      }
    ),
    /* @__PURE__ */ e.jsx(O, {}),
    /* @__PURE__ */ e.jsx("div", { className: x([
      "mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]",
      "desktop:w-[1224px] laptop:w-[816px] mx-auto"
    ]), children: "All features" }),
    /* @__PURE__ */ e.jsx("div", { className: "sticky top-[16px] bg-white z-20 mb-8", children: /* @__PURE__ */ e.jsx(
      F,
      {
        onSelect: v,
        selectedValue: u
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: x([
      "mb-[32px] mx-auto relative",
      "desktop:w-[1224px] laptop:w-[816px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(
        R,
        {
          selectedCategory: u,
          products: a,
          empty: /* @__PURE__ */ e.jsx(B, { className: "mt-[96px] mx-auto", text: D })
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "mt-[67px] text-center", children: /* @__PURE__ */ e.jsx(
        G,
        {
          ...m,
          onChange: N
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx($, {})
  ] });
}
export {
  ee as default
};
