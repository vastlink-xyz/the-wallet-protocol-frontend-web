import { j as e } from "./vendor-radix-nT--cb5B.js";
import { C as y } from "./index-CCzQ_xt7.js";
import { w as C, c as n, B as b, f as j, h as B, a as E, T as P } from "./main-Gzb6y-w8.js";
import { C as S } from "./checkbox-CvRfsEyN.js";
import { L as T } from "./index-FoQ3Vmd8.js";
import { u as I } from "./useTransaction-C3tTgD3H.js";
import { r as x, b as A, m as M } from "./vendor-react-CwfAKKXk.js";
import { u as O, B as f } from "./vendor-utils-DOORVzle.js";
import { X as R } from "./vendor-ui-utils-ERHZUJ9g.js";
import { p as k } from "./vendor-web3-VgZtbLWg.js";
import { D as V } from "./dialog-DWT5vxnO.js";
import { B as v } from "./index-C6weRSNt.js";
import { C as z } from "./index-Cy5dnAAj.js";
const F = ({ isOpen: a, onClose: l, product: t, balance: s }) => {
  const i = C(), [r, d] = x.useState(!1), { signTransaction: u, waitForTransactionExection: h } = I(), { t: m } = O(), c = t.discount ? t.price * (1 - t.discount / 100) : t.price, o = async () => {
    if (k(s) < k(String(c))) {
      f.error(m("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      d(!0);
      const { data: { success: p, needOtp: g, message: D, transactionId: w } } = await j.post("/user/purchase", {
        productId: t.id
      });
      if (p)
        await i.invalidateQueries({ queryKey: ["userInfo"] }), l(!0), f.success(m("/marketplace.productCard.purchaseSuccess")), d(!1);
      else if (g && (f.warning(m("/marketplace.productCard.dailyLimitExceededOtpRequired")), await h(w))) {
        const { data: L } = await j.post("/user/purchase/saveProducts", {
          productId: t.id
        });
        await i.invalidateQueries({ queryKey: ["userInfo"] }), d(!1), l(!0), f.success(m("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (p) {
      const g = B(p);
      f.error(g.message), d(!1);
    }
  }, N = a ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    r && /* @__PURE__ */ e.jsx(T, {}),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: n(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Confirmation" }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => l(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ e.jsx(R, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-none", children: [
        c,
        'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: "Asset balance: " }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold font-['Roboto'] leading-none", children: [
          s,
          " V"
        ] }),
        /* @__PURE__ */ e.jsx(
          b,
          {
            disabled: r,
            onClick: o,
            children: "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: n(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Confirmation" }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-tight", children: [
          c,
          'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("footer", { className: "", children: [
        /* @__PURE__ */ e.jsx(
          b,
          {
            disabled: r,
            variant: "ghost",
            className: n(
              "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: o,
            children: "Add"
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            disabled: r,
            variant: "ghost",
            className: n(
              "w-full text-[15px] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: () => l(!1),
            children: "Cancel"
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return A.createPortal(
      N,
      document.body
    );
};
function $({ src: a, alt: l, className: t }) {
  const [s, i] = x.useState(!1);
  return a ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: a,
        alt: l,
        className: `cursor-zoom-in ${t}`,
        onClick: () => i(!0)
      }
    ),
    s && /* @__PURE__ */ e.jsx(
      V,
      {
        open: s,
        onOpenChange: i,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "fixed inset-0 bg-[#1f2533]/40 z-50 flex items-center justify-center",
            onClick: () => i(!1),
            children: /* @__PURE__ */ e.jsx("div", { className: "relative w-[60vw]", children: /* @__PURE__ */ e.jsx(
              "img",
              {
                src: a,
                alt: l,
                className: "w-full object-contain",
                onClick: (r) => r.stopPropagation()
              }
            ) })
          }
        )
      }
    )
  ] }) : null;
}
function q({
  product: a,
  balance: l,
  onPurchaseSuccess: t
}) {
  var c;
  const [s, i] = x.useState(!1), [r, d] = x.useState(!1), u = () => {
    if ((a == null ? void 0 : a.price) === 0)
      return "Add for free";
    if (a && a.price !== void 0 && a.price > 0)
      return "Add";
  }, h = () => {
    d(!0);
  }, m = (o) => {
    d(!1), o && t();
  };
  return a ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(v, { className: n([
      "mb-[16px] mt-[20px]",
      "tablet:hidden"
    ]) }),
    /* @__PURE__ */ e.jsxs("div", { className: n([
      "mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative",
      "tablet:w-[646px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(v, { className: n([
        "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer",
        "hidden tablet:block"
      ]) }),
      /* @__PURE__ */ e.jsx("span", { children: a == null ? void 0 : a.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (c = a == null ? void 0 : a.banners) == null ? void 0 : c.map((o) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
      /* @__PURE__ */ e.jsx("img", { className: n([
        "w-full h-auto object-cover",
        "tablet:hidden"
      ]), src: o, alt: a == null ? void 0 : a.name }),
      /* @__PURE__ */ e.jsx(
        $,
        {
          src: o,
          alt: a == null ? void 0 : a.name,
          className: n([
            "w-full h-auto object-cover",
            "tablet:block hidden"
          ])
        }
      )
    ] }, o)) }) }),
    /* @__PURE__ */ e.jsxs("div", { className: n([
      "tablet:w-[548px] w-[334px]",
      "tablet:mt-[76px] mt-[34px]",
      "mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-black text-xl font-bold leading-none mb-2", children: [
        "Version ",
        a == null ? void 0 : a.version
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: a == null ? void 0 : a.description })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: n([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-xl font-bold leading-none mb-2", children: "Subscription plan" }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
        a == null ? void 0 : a.price,
        "V"
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: "To manage your plan, go to Profile page, under purchase and select manage." })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: n([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-x-2 cursor-pointer", children: [
        /* @__PURE__ */ e.jsx(S, { checked: s, onCheckedChange: () => i(!s) }),
        /* @__PURE__ */ e.jsx("div", { className: "text-center text-black text-xs font-normal leading-none select-none", children: "I have read and agree the above terms and conditions" })
      ] }),
      /* @__PURE__ */ e.jsx(
        b,
        {
          className: "w-full mt-4",
          disabled: !s,
          onClick: () => h(),
          children: u()
        }
      )
    ] }),
    a && /* @__PURE__ */ e.jsx(
      F,
      {
        isOpen: r,
        onClose: m,
        product: a,
        balance: l
      }
    )
  ] }) : null;
}
function te() {
  const { productId: a } = M(), [l, t] = x.useState(""), [s, i] = x.useState(null), [r, d] = x.useState(!1);
  x.useEffect(() => {
    u();
  }, [a]);
  const u = async () => {
    const c = await j.get(`/marketplace/product/product/${a}`);
    i(c.data), h();
  }, h = async () => {
    const c = E.all().address, o = await P.getInstance().createToken("TVWT").getBalance(c);
    t(o);
  }, m = () => {
    d(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(y, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: r ? (
    // <Success product={product} />
    /* @__PURE__ */ e.jsx(
      z,
      {
        title: `${s == null ? void 0 : s.name} added successfully`,
        buttonText: "Back to Marketplace",
        redirectUrl: "/marketplace",
        description: 'You can find the purchased product under the "Added" tab in the Marketplace. You will be directed to Marketplace in'
      }
    )
  ) : /* @__PURE__ */ e.jsx(
    q,
    {
      product: s,
      balance: l,
      onPurchaseSuccess: m
    }
  ) }) });
}
export {
  te as default
};
