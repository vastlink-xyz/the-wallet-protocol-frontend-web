import { j as e } from "./vendor-radix-DcfHr-b-.js";
import { r as a, L as o } from "./vendor-react-Cqw-pUgZ.js";
import "./main-BQRn5y6W.js";
import { a as B } from "./auth-BKVikp7y.js";
import { f as r } from "./transaction-CEOvBeKV.js";
import { h as k } from "./error-BOjt9hlf.js";
import { u as C, B as E } from "./vendor-utils-BEOEHg0B.js";
import { T as c } from "./TokenService-hl2efiyX.js";
import { C as A } from "./index-BwpaVryO.js";
import { C as L } from "./card-LX48OVW8.js";
import { u as I, L as S } from "./index-YZ-oGsCe.js";
import { R as W } from "./vendor-ui-utils-D8A1AlyV.js";
function M() {
  const [m, d] = a.useState(""), [x, f] = a.useState(""), [u, h] = a.useState(""), [g, p] = a.useState(""), [j, l] = a.useState(!1), { logoPath: b } = I(), { t: y } = C();
  a.useEffect(() => {
    i();
  }, []);
  const i = async () => {
    const t = B.all().address;
    d(t), l(!0);
    try {
      const [s, n, T] = await Promise.all([
        v(t),
        N(t),
        w(t)
      ]);
      f(s), h(n), p(T);
    } catch (s) {
      const n = k(s);
      E.error(n.message);
    } finally {
      l(!1);
    }
  }, N = async (t) => {
    let s = await c.getInstance().createToken("ETH").getBalance(t);
    return s = r(s), s;
  }, v = async (t) => {
    let s = await c.getInstance().createToken("MATIC").getBalance(t);
    return s = r(s), s;
  }, w = async (t) => {
    let s = await c.getInstance().createToken("TVWT").getBalance(t);
    return s = r(s), s;
  };
  return /* @__PURE__ */ e.jsxs(L, { className: "p-6", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ e.jsx(A, { address: m }),
      /* @__PURE__ */ e.jsx("div", { title: y("/dashboard.userWallet.syncTitle"), className: "text-brand-foreground ml-4", children: /* @__PURE__ */ e.jsx(
        W,
        {
          size: 18,
          className: "cursor-pointer ml-2 hover:scale-125 hover:rotate-180 transition duration-300",
          onClick: () => i()
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "w-full mt-4 flex justify-between", children: /* @__PURE__ */ e.jsx(e.Fragment, { children: j ? /* @__PURE__ */ e.jsx("div", { className: "text-brand-foreground text-center w-full h-16 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(S, { type: "breathe" }) }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ e.jsxs(
        o,
        {
          to: "/dashboard/eth",
          className: "flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand",
          children: [
            /* @__PURE__ */ e.jsxs("section", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsx(
                "img",
                {
                  className: "w-[20px]",
                  src: "/imgs/logos/eth.png",
                  alt: ""
                }
              ),
              /* @__PURE__ */ e.jsx("p", { className: "ml-2 text-xl text-primary", children: "ETH" })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-2xl font-medium text-brand-foreground", children: r(u) })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        o,
        {
          to: "/dashboard/matic",
          className: "flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand",
          children: [
            /* @__PURE__ */ e.jsxs("section", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsx(
                "img",
                {
                  className: "w-[20px]",
                  src: "https://amoy.polygonscan.com/assets/poly/images/svg/logos/token-light.svg?v=24.7.3.0",
                  alt: ""
                }
              ),
              /* @__PURE__ */ e.jsx("p", { className: "ml-2 text-xl text-primary", children: "MATIC" })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-2xl font-medium text-brand-foreground", children: r(x) })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        o,
        {
          to: "/dashboard/tvwt",
          className: "flex justify-between items-center text-muted-foreground p-4 bg-background rounded-xl cursor-pointer mb-2 hover:scale-105 hover:bg-brand",
          children: [
            /* @__PURE__ */ e.jsxs("section", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsx(
                "img",
                {
                  className: "w-[20px]",
                  src: b,
                  alt: ""
                }
              ),
              /* @__PURE__ */ e.jsx("p", { className: "ml-2 text-xl text-primary", children: "TVWT" })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-2xl font-medium text-brand-foreground", children: g })
          ]
        }
      )
    ] }) }) })
  ] });
}
function O() {
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "md:flex md:justify-between flex-wrap md:gap-6", children: [
    /* @__PURE__ */ e.jsx("section", { className: "flex-1", children: /* @__PURE__ */ e.jsx(M, {}) }),
    /* @__PURE__ */ e.jsx("section", { className: "flex-1" })
  ] }) });
}
export {
  O as default
};
