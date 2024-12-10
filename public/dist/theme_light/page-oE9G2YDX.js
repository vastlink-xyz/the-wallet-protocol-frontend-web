import { j as e } from "./vendor-radix-J-HUYjfF.js";
import { B as y } from "./index-BsWisfL9.js";
import { T, a as C, b as m, c as t, d as w, e as l } from "./table-DlO-aRPH.js";
import { a as R, f as S, g as E, h as O, c as x, Y as h, i as B, S as P, a5 as D } from "./main-CUT_4fhD.js";
import { r as a } from "./vendor-react-BG344YhI.js";
import { B as f } from "./vendor-utils-C0Sc_Wei.js";
import { R as H } from "./vendor-ui-utils-BXvI5fwV.js";
import { P as I } from "./progress-tH12YMpK.js";
const W = {
  ETH: "/imgs/logos/eth.png",
  MATIC: "/imgs/logos/matic.png",
  TVWT: "/imgs/logos/tvwt.png"
};
function q() {
  const { address: n } = R.all(), [g, j] = a.useState([]), [b, r] = a.useState(!1), [u, c] = a.useState(!1), [N, v] = a.useState("ETH"), [i, p] = a.useState(!1);
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
      E("ress", s), j(s.data.assetDistribution);
    } catch (s) {
      const o = O(s);
      f.error(o.message);
    } finally {
      p(!1);
    }
  }, k = async () => {
    i || (await d(), f.success("Refresh successfully"));
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mt-[46px] mb-[52px] text-[#52c41a]", children: [
      /* @__PURE__ */ e.jsx(y, {}),
      /* @__PURE__ */ e.jsx(
        H,
        {
          size: 22,
          className: x(
            "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
            i && "animate-spin duration-1000 hover:scale-100"
          ),
          onClick: k
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs(T, { className: x(
      i && "opacity-30"
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
          /* @__PURE__ */ e.jsx("img", { src: W[s.token], alt: "img", className: "w-[28px] h-[28px]" }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ e.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: s.token }) })
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
          /* @__PURE__ */ e.jsx("p", { className: "text-sm font-normal leading-snug text-black", children: B(s.balance) }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-sm font-normal leading-snug text-[#828282]", children: [
            "$",
            h(s.value)
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(l, { className: "hidden tablet:table-cell px-0 py-6", children: /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(I, { percent: parseFloat(s.proportion), strokeColor: "#52c41a", strokeWidth: 12, format: (o) => `${o}%` }) }) }),
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
      P,
      {
        open: b,
        setOpen: r,
        address: n,
        tokenType: N,
        onClose: () => r(!1)
      }
    ),
    /* @__PURE__ */ e.jsx(
      D,
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
  q as default
};
