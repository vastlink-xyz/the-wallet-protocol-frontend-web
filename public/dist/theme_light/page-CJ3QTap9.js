import { j as e } from "./vendor-radix-C4qF-rbz.js";
import { a, L as c } from "./vendor-react-KTk2TwQ7.js";
import { u as B, a as k, h as C, T as l, f as r, L as E } from "./main-Cnoo90sq.js";
import { u as A, B as L } from "./vendor-utils-D1d8vwmL.js";
import { C as I } from "./index-CiD6PCwr.js";
import { C as S } from "./card-73JawrGP.js";
import { R as W } from "./vendor-ui-utils-C5-iOwQy.js";
function M() {
  const [d, m] = a.useState(""), [x, u] = a.useState(""), [f, h] = a.useState(""), [g, j] = a.useState(""), [p, o] = a.useState(!1), { logoPath: b } = B(), { t: y } = A();
  a.useEffect(() => {
    i();
  }, []);
  const i = async () => {
    const t = k.all().address;
    m(t), o(!0);
    try {
      const [s, n, T] = await Promise.all([
        v(t),
        N(t),
        w(t)
      ]);
      u(s), h(n), j(T);
    } catch (s) {
      const n = C(s);
      L.error(n.message);
    } finally {
      o(!1);
    }
  }, N = async (t) => {
    let s = await l.getInstance().createToken("ETH").getBalance(t);
    return s = r(s), s;
  }, v = async (t) => {
    let s = await l.getInstance().createToken("MATIC").getBalance(t);
    return s = r(s), s;
  }, w = async (t) => {
    let s = await l.getInstance().createToken("TVWT").getBalance(t);
    return s = r(s), s;
  };
  return /* @__PURE__ */ e.jsxs(S, { className: "p-6", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ e.jsx(I, { address: d }),
      /* @__PURE__ */ e.jsx("div", { title: y("/dashboard.userWallet.syncTitle"), className: "text-brand-foreground ml-4", children: /* @__PURE__ */ e.jsx(
        W,
        {
          size: 18,
          className: "cursor-pointer ml-2 hover:scale-125 hover:rotate-180 transition duration-300",
          onClick: () => i()
        }
      ) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "w-full mt-4 flex justify-between", children: /* @__PURE__ */ e.jsx(e.Fragment, { children: p ? /* @__PURE__ */ e.jsx("div", { className: "text-brand-foreground text-center w-full h-16 flex items-center justify-center", children: /* @__PURE__ */ e.jsx(E, { type: "breathe" }) }) : /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ e.jsxs(
        c,
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
            /* @__PURE__ */ e.jsx("p", { className: "text-2xl font-medium text-brand-foreground", children: r(f) })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        c,
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
        c,
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
function U() {
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "md:flex md:justify-between flex-wrap md:gap-6", children: [
    /* @__PURE__ */ e.jsx("section", { className: "flex-1", children: /* @__PURE__ */ e.jsx(M, {}) }),
    /* @__PURE__ */ e.jsx("section", { className: "flex-1" })
  ] }) });
}
export {
  U as default
};
