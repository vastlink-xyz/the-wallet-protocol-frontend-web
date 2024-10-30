import { j as e } from "./vendor-radix-B8_5rGTC.js";
import { u as S, r as c, f as P } from "./vendor-react-X5c0QESR.js";
import { c as m, l as E, i as L, h as T } from "./main-BVot_80u.js";
import { u as A, M as z, S as R, P as C, E as B } from "./index-CAzu9dJx.js";
import { i as N, C as y } from "./vendor-ui-utils-5hin2QBi.js";
import { u as M, B as I } from "./vendor-utils-avI_LICu.js";
import { L as O } from "./index-CTOk33jm.js";
function _() {
  return /* @__PURE__ */ e.jsxs("div", { className: "w-full relative rounded-[20px] overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        className: "w-full h-full object-contain",
        src: "/imgs/banners/marketplace_banner_1.jpg",
        alt: "banner"
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
const k = [
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
  onSelect: s,
  selectedValue: d
}) {
  const { checkNewProducts: h, hasNewProducts: o } = A(), i = S(), p = k, [l, x] = c.useState(!1), [t, w] = c.useState(!1), u = c.useRef(null), f = () => {
    const a = u.current;
    if (a) {
      const { scrollLeft: r, scrollWidth: n, clientWidth: b } = a;
      w(r > 0), x(r < n - b - 1);
    }
  };
  c.useEffect(() => {
    const a = u.current;
    if (a) {
      const r = new ResizeObserver(() => {
        f();
      });
      return r.observe(a), () => r.disconnect();
    }
  }, []), c.useEffect(() => {
    f();
  }, [p]), c.useEffect(() => {
    const a = u.current;
    if (a)
      return a.addEventListener("scroll", f), () => a.removeEventListener("scroll", f);
  }, []), c.useEffect(() => {
    i.pathname === "/marketplace" && h();
  }, [i.pathname, h]);
  const j = () => {
    const a = u.current;
    a && a.scrollBy({ left: -200, behavior: "smooth" });
  }, v = () => {
    const a = u.current;
    a && a.scrollBy({ left: 200, behavior: "smooth" });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "relative w-full", children: [
    t && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: j,
        className: "absolute left-0 top-0 h-full flex items-center z-10",
        children: /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-r from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ e.jsx(N, { className: "w-5 h-5 text-gray-500" }) })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: u,
        className: "w-full h-9 flex items-center gap-7 overflow-x-auto scrollbar-hide",
        children: p.map((a, r) => {
          const n = d === a;
          return /* @__PURE__ */ e.jsx(
            "div",
            {
              onClick: () => s == null ? void 0 : s(a),
              className: m(
                "text-center text-sm font-medium font-['Roboto'] leading-none whitespace-nowrap relative shrink-0",
                n ? "h-9 w-[110px] bg-black rounded-[60px] justify-center items-center gap-2 flex" : "h-9 flex items-center justify-center"
              ),
              children: /* @__PURE__ */ e.jsxs("div", { className: m(
                "cursor-pointer relative",
                n ? "text-white" : "text-black"
              ), children: [
                a,
                a === "Added" && o && /* @__PURE__ */ e.jsx("div", { className: "absolute -top-1 -right-4 w-2 h-2 bg-red-500 rounded-full" })
              ] })
            },
            r
          );
        })
      }
    ),
    l && /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: v,
        className: "absolute right-0 top-0 h-full flex items-center z-10",
        children: /* @__PURE__ */ e.jsx("div", { className: "bg-gradient-to-l from-white via-white to-transparent h-full flex items-center", children: /* @__PURE__ */ e.jsx(y, { className: "w-5 h-5 text-gray-500" }) })
      }
    )
  ] });
}
function G({
  current: s,
  total: d,
  pageSize: h = 30,
  onChange: o
}) {
  if (d === 0) return null;
  const i = Math.ceil(d / h), p = () => {
    const l = [];
    if (i <= 5)
      for (let t = 1; t <= i; t++)
        l.push(t);
    else if (l.push(1), s <= 3) {
      for (let t = 2; t <= 4; t++)
        l.push(t);
      l.push("ellipsis"), l.push(i);
    } else if (s >= i - 2) {
      l.push("ellipsis");
      for (let t = i - 3; t <= i; t++)
        l.push(t);
    } else
      l.push("ellipsis"), l.push(s - 1), l.push(s), l.push(s + 1), l.push("ellipsis"), l.push(i);
    return l.map((t, w) => {
      if (t === "ellipsis")
        return /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e.jsx("div", { className: "text-center text-black/25 text-sm font-normal leading-loose tracking-widest", children: "•••" }) }, `ellipsis-${w}`);
      const u = t === s;
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => !u && (o == null ? void 0 : o(t)),
          className: m(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            u ? "bg-[#52c41a] border-[#52c41a]" : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          ),
          children: /* @__PURE__ */ e.jsx("div", { className: m(
            "text-center text-sm",
            u ? "text-white font-medium" : "text-black/90 font-normal"
          ), children: t })
        },
        t
      );
    });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "h-8 justify-start items-center gap-4 inline-flex", children: /* @__PURE__ */ e.jsxs("div", { className: "justify-start items-center gap-2 flex", children: [
    /* @__PURE__ */ e.jsx("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black/90 text-sm font-normal", children: [
      "Total ",
      d,
      " items"
    ] }) }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => s > 1 && (o == null ? void 0 : o(s - 1)),
        className: m(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          s > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(N, { className: "w-4 h-4" })
      }
    ),
    p(),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => s < i && (o == null ? void 0 : o(s + 1)),
        className: m(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          s < i ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ e.jsx(y, { className: "w-4 h-4" })
      }
    )
  ] }) });
}
function W({
  total: s = 0,
  pageSize: d = 30
} = {}) {
  const [h, o] = c.useState({
    current: 1,
    total: s,
    pageSize: d
  });
  return {
    pagination: h,
    handlePageChange: (x) => {
      E("handlePageChange", x), o((t) => ({
        ...t,
        current: x
      }));
    },
    updateTotal: (x) => {
      o((t) => ({
        ...t,
        total: x
      }));
    },
    updatePageSize: (x) => {
      o((t) => ({
        ...t,
        pageSize: x,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
function $({ threshold: s = 300, className: d }) {
  const [h, o] = c.useState(!1);
  c.useEffect(() => {
    const p = () => {
      o(window.scrollY > s);
    };
    return window.addEventListener("scroll", p), () => window.removeEventListener("scroll", p);
  }, [s]);
  const i = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return h ? /* @__PURE__ */ e.jsx(
    "div",
    {
      onClick: i,
      className: m([
        "w-11 h-11 bg-white rounded-full",
        "flex items-center justify-center",
        "fixed bottom-[80px] right-[22px] cursor-pointer",
        "shadow-lg hover:shadow-xl transition-shadow",
        "hover:bg-gray-50",
        d
      ]),
      children: /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/arrow_up.svg", alt: "Scroll to top" })
    }
  ) : null;
}
const g = 30, D = "It looks like you haven’t added any items yet. Head over to the marketplace and discover new products and features to add!";
function K() {
  M();
  const [s, d] = c.useState(!1), h = P(), [o, i] = c.useState([]), [p, l] = c.useState(k[0]), {
    pagination: x,
    handlePageChange: t,
    updateTotal: w,
    updatePageSize: u
  } = W(), f = c.useCallback(async (r) => {
    try {
      d(!0);
      const n = await L.post("/marketplace/product/search-products", r);
      i(n.data.products), w(n.data.total);
    } catch (n) {
      const b = T(n);
      I.error(b.message);
    } finally {
      d(!1);
    }
  }, [w]);
  c.useEffect(() => {
    u(g), f({
      page: 1,
      pageSize: g
    });
  }, []);
  const j = async (r) => {
    l(r);
    const n = {
      page: 1,
      pageSize: g
    };
    r === "Free" ? n.freeOnly = !0 : r === "Most popular" ? n.sortBy = "popular" : r === "Latest" ? n.sortBy = "latest" : r === "Added" ? n.installedOnly = !0 : n.category = r, f(n);
  }, v = (r) => {
    console.log("Search value:", r), h(`/marketplace/search-result?search=${r}`);
  }, a = (r) => {
    t(r), f({
      page: r,
      pageSize: g
    });
  };
  return /* @__PURE__ */ e.jsx(z, { children: /* @__PURE__ */ e.jsxs("div", { className: m([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12"
  ]), children: [
    s && /* @__PURE__ */ e.jsx(O, {}),
    /* @__PURE__ */ e.jsx(
      R,
      {
        className: "my-[52px] mx-auto",
        onSearch: v
      }
    ),
    /* @__PURE__ */ e.jsx(_, {}),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[60px] mb-[16px] text-black text-[28px] font-bold leading-[36.96px]", children: "All features" }),
    /* @__PURE__ */ e.jsx("div", { className: "sticky top-[0px] bg-white z-20 mb-8", children: /* @__PURE__ */ e.jsx(
      F,
      {
        onSelect: j,
        selectedValue: p
      }
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: m([
      "mb-[32px] mx-auto relative",
      "desktop:w-[1224px] laptop:w-[816px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(
        C,
        {
          selectedCategory: p,
          products: o,
          empty: /* @__PURE__ */ e.jsx(B, { className: "mt-[96px] mx-auto", text: D })
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "mt-[67px] text-center", children: /* @__PURE__ */ e.jsx(
        G,
        {
          ...x,
          onChange: a
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx($, {})
  ] }) });
}
export {
  K as default
};
