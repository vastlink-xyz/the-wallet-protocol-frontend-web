import { j as e } from "./vendor-radix-DAGGyvqc.js";
import { B as k } from "./index-BUGR5v_c.js";
import { T, a as C, b as m, c as t, d as w, e as l } from "./table-CZdXmzvK.js";
import { a as R, f as S, g as B, h as E, c as x, $ as O, Z as h, i as P, S as D, a6 as H } from "./main-C7od9bzF.js";
import { a } from "./vendor-react-BNvQ9I2c.js";
import { B as f } from "./vendor-utils-B-eF5hYT.js";
import { R as I } from "./vendor-ui-utils-CsaM-dHT.js";
import { P as W } from "./progress-CW91twSq.js";
const $ = {
  ETH: "/imgs/logos/eth.png",
  MATIC: "/imgs/logos/matic.png",
  TVWT: "/imgs/logos/tvwt.png"
};
function G() {
  const { address: n } = R.all(), [g, b] = a.useState([]), [j, r] = a.useState(!1), [u, c] = a.useState(!1), [N, v] = a.useState("ETH"), [o, p] = a.useState(!1);
  a.useEffect(() => {
    d();
  }, []);
  const d = async () => {
    try {
      p(!0);
      const s = await S("/user-assets/asset-distribution", {
        params: {
          address: n,
          useCache: !1
        }
      });
      B("ress", s), b(s.data.assetDistribution);
    } catch (s) {
      const i = E(s);
      f.error(i.message);
    } finally {
      p(!1);
    }
  }, y = async () => {
    o || (await d(), f.success("Refresh successfully"));
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-[46px] mb-[52px] text-[#52c41a]", children: [
      /* @__PURE__ */ e.jsx(k, {}),
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
    /* @__PURE__ */ e.jsxs(T, { className: x(
      o && "opacity-30"
    ), children: [
      /* @__PURE__ */ e.jsx(C, { className: "", children: /* @__PURE__ */ e.jsxs(m, { className: "text-xs text-[#7b8293] leading-none hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(t, { className: "h-[16px] px-0 pb-[8px]", children: "Asset" }),
        /* @__PURE__ */ e.jsx(t, { className: "h-[16px] px-0 pb-[8px]", children: "Price" }),
        /* @__PURE__ */ e.jsx(t, { className: "h-[16px] px-0 pb-[8px] text-right tablet:text-left", children: "Balance" }),
        /* @__PURE__ */ e.jsx(t, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Proportion" }),
        /* @__PURE__ */ e.jsx(t, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px] text-right" })
      ] }) }),
      /* @__PURE__ */ e.jsx(w, { children: g.map((s) => /* @__PURE__ */ e.jsxs(m, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(l, { className: "px-0 py-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsx("img", { src: $[s.token], alt: "img", className: "w-[28px] h-[28px]" }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: O(s.token) }) })
        ] }) }),
        /* @__PURE__ */ e.jsx(l, { className: "px-0 py-6", children: /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsxs("p", { className: "text-sm font-normal leading-snug text-black", children: [
            "$",
            h(s.price)
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: x(
            "text-sm font-normal leading-snug text-black",
            s.priceChange.startsWith("+") ? "text-[#52c41a]" : "text-[#ff0004]"
          ), children: s.priceChange })
        ] }) }),
        /* @__PURE__ */ e.jsxs(l, { className: "px-0 py-6 text-right tablet:text-left", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-normal leading-snug text-black", children: P(s.balance) }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-sm font-normal leading-snug text-[#828282]", children: [
            "$",
            h(s.value)
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(l, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(W, { percent: parseFloat(s.proportion), strokeColor: "#52c41a", strokeWidth: 12, format: (i) => `${i}%` }) }) }),
        /* @__PURE__ */ e.jsx(l, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-end gap-[17px]", children: [
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
      D,
      {
        open: j,
        setOpen: r,
        address: n,
        tokenType: N,
        onClose: () => r(!1)
      }
    ),
    /* @__PURE__ */ e.jsx(
      H,
      {
        address: n,
        open: u,
        setOpen: c,
        onClose: () => c(!1)
      }
    )
  ] });
}
export {
  G as default
};
