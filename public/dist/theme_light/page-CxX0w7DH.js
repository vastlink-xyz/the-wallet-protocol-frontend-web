import { j as e } from "./vendor-radix-AvjOLIap.js";
import { B as T } from "./index-RdGbomf2.js";
import { T as C, a as S, b as m, c as l, d as R, e as n } from "./table-Ci8kAyuV.js";
import { a as w, a4 as O, f as B, g as E, h as P, c as x, t as b, $ as h, i as D, S as $, a7 as H } from "./main-qUKxxNV6.js";
import { a } from "./vendor-react-DSEtE0wE.js";
import { B as f } from "./vendor-utils-Q0yJ_o1H.js";
import { R as I } from "./vendor-ui-utils-CGOon9_P.js";
import { P as L } from "./progress-DbvcPDzv.js";
const M = b.createTokenMap((t) => t.logo);
function K() {
  const { address: t } = w.all(), [g, j] = a.useState([]), [u, r] = a.useState(!1), [N, c] = a.useState(!1), [k, v] = a.useState(O.ETH), [o, p] = a.useState(!1);
  a.useEffect(() => {
    d();
  }, []);
  const d = async () => {
    try {
      p(!0);
      const s = await B("/user-assets/asset-distribution", {
        params: {
          address: t,
          useCache: !1
        }
      });
      E("ress", s), j(s.data.assetDistribution);
    } catch (s) {
      const i = P(s);
      f.error(i.message);
    } finally {
      p(!1);
    }
  }, y = async () => {
    o || (await d(), f.success("Refresh successfully"));
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-[46px] mb-[52px] text-[#52c41a]", children: [
      /* @__PURE__ */ e.jsx(T, {}),
      /* @__PURE__ */ e.jsx(
        I,
        {
          size: 22,
          className: x(
            "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
            o && "animate-spin duration-1000 hover:scale-100"
          ),
          onClick: y
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs(C, { className: x(
      o && "opacity-30"
    ), children: [
      /* @__PURE__ */ e.jsx(S, { className: "", children: /* @__PURE__ */ e.jsxs(m, { className: "text-xs text-[#7b8293] leading-none hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(l, { className: "h-[16px] px-0 pb-[8px]", children: "Asset" }),
        /* @__PURE__ */ e.jsx(l, { className: "h-[16px] px-0 pb-[8px]", children: "Price" }),
        /* @__PURE__ */ e.jsx(l, { className: "h-[16px] px-0 pb-[8px] text-right tablet:text-left", children: "Balance" }),
        /* @__PURE__ */ e.jsx(l, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Proportion" }),
        /* @__PURE__ */ e.jsx(l, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px] text-right" })
      ] }) }),
      /* @__PURE__ */ e.jsx(R, { children: g.map((s) => /* @__PURE__ */ e.jsxs(m, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(n, { className: "px-0 py-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx("img", { src: M[s.token], alt: "img", className: "w-[28px] h-[28px]" }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: b.getToken(s.token).symbol }) })
        ] }) }),
        /* @__PURE__ */ e.jsx(n, { className: "px-0 py-6", children: /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsxs("p", { className: "text-sm font-normal leading-snug text-black", children: [
            "$",
            h(s.price)
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: x(
            "text-sm font-normal leading-snug text-black",
            s.priceChange.startsWith("+") ? "text-[#52c41a]" : "text-[#ff0004]"
          ), children: s.priceChange })
        ] }) }),
        /* @__PURE__ */ e.jsxs(n, { className: "px-0 py-6 text-right tablet:text-left", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-normal leading-snug text-black", children: D(s.balance) }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-sm font-normal leading-snug text-[#828282]", children: [
            "$",
            h(s.value)
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(n, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(L, { percent: parseFloat(s.proportion), strokeColor: "#52c41a", strokeWidth: 12, format: (i) => `${i}%` }) }) }),
        /* @__PURE__ */ e.jsx(n, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-[17px]", children: [
          /* @__PURE__ */ e.jsx("img", { className: "cursor-pointer", src: "/imgs/icons/send.svg", alt: "", onClick: () => {
            v(s.token), r(!0);
          } }),
          /* @__PURE__ */ e.jsx("img", { className: "cursor-pointer", src: "/imgs/icons/receive.svg", alt: "", onClick: () => {
            c(!0);
          } })
        ] }) })
      ] }, s.token)) })
    ] }),
    /* @__PURE__ */ e.jsx(
      $,
      {
        open: u,
        setOpen: r,
        address: t,
        tokenType: k,
        onClose: () => r(!1)
      }
    ),
    /* @__PURE__ */ e.jsx(
      H,
      {
        address: t,
        open: N,
        setOpen: c,
        onClose: () => c(!1)
      }
    )
  ] });
}
export {
  K as default
};
