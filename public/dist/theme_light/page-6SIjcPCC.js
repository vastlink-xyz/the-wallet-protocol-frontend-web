import { j as e } from "./vendor-radix-nT--cb5B.js";
import { C as y } from "./index-BA8Hvckn.js";
import { w as C, c as n, B as b, f as j, h as B, a as E, T as P } from "./main-BgKFo9t1.js";
import { C as S } from "./checkbox-BOC0FS9A.js";
import { L as T } from "./index-Cdpry7qW.js";
import { u as I } from "./useTransaction-KCBu6XjJ.js";
import { r as m, b as A, m as M } from "./vendor-react-CwfAKKXk.js";
import { u as O, B as f } from "./vendor-utils-BxJrQXPu.js";
import { X as R } from "./vendor-ui-utils-ERHZUJ9g.js";
import { p as k } from "./vendor-web3-BOaXhAzJ.js";
import { D as V } from "./dialog-D6vBB_JJ.js";
import { B as v } from "./index-CkRSXN-S.js";
import { C as z } from "./index-BiIm9Pnk.js";
const F = ({ isOpen: s, onClose: l, product: t, balance: a }) => {
  const i = C(), [r, d] = m.useState(!1), { signTransaction: u, waitForTransactionExection: h } = I(), { t: x } = O(), c = t.discount ? t.price * (1 - t.discount / 100) : t.price, o = async () => {
    if (k(a) < k(String(c))) {
      f.error(x("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      d(!0);
      const { data: { success: p, needOtp: g, message: D, transactionId: N } } = await j.post("/user/purchase", {
        productId: t.id
      });
      if (p)
        await i.invalidateQueries({ queryKey: ["userInfo"] }), l(!0), f.success(x("/marketplace.productCard.purchaseSuccess")), d(!1);
      else if (g && (f.warning(x("/marketplace.productCard.dailyLimitExceededOtpRequired")), await h(N))) {
        const { data: L } = await j.post("/user/purchase/saveProducts", {
          productId: t.id
        });
        await i.invalidateQueries({ queryKey: ["userInfo"] }), d(!1), l(!0), f.success(x("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (p) {
      const g = B(p);
      f.error(g.message), d(!1);
    }
  }, w = s ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
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
          a,
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
      w,
      document.body
    );
};
function $({ src: s, alt: l, className: t }) {
  const [a, i] = m.useState(!1);
  return s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: s,
        alt: l,
        className: `cursor-zoom-in ${t}`,
        onClick: () => i(!0)
      }
    ),
    a && /* @__PURE__ */ e.jsx(
      V,
      {
        open: a,
        onOpenChange: i,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "fixed inset-0 bg-[#1f2533]/40 z-50 flex items-center justify-center",
            onClick: () => i(!1),
            children: /* @__PURE__ */ e.jsx("div", { className: "relative w-[60vw]", children: /* @__PURE__ */ e.jsx(
              "img",
              {
                src: s,
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
  product: s,
  balance: l,
  onPurchaseSuccess: t
}) {
  var c;
  const [a, i] = m.useState(!1), [r, d] = m.useState(!1), u = () => {
    if ((s == null ? void 0 : s.price) === 0)
      return "Add for free";
    if (s && s.price !== void 0 && s.price > 0)
      return "Add";
  }, h = () => {
    d(!0);
  }, x = (o) => {
    d(!1), o && t();
  };
  return s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
      /* @__PURE__ */ e.jsx("span", { children: s == null ? void 0 : s.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (c = s == null ? void 0 : s.banners) == null ? void 0 : c.map((o) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
      /* @__PURE__ */ e.jsx("img", { className: n([
        "w-full h-auto object-cover",
        "tablet:hidden"
      ]), src: o, alt: s == null ? void 0 : s.name }),
      /* @__PURE__ */ e.jsx(
        $,
        {
          src: o,
          alt: s == null ? void 0 : s.name,
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
        s == null ? void 0 : s.version
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: s == null ? void 0 : s.description })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: n([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-xl font-bold leading-none mb-2", children: "Subscription plan" }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
        s == null ? void 0 : s.price,
        "V"
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: n([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-x-2 cursor-pointer", children: [
        /* @__PURE__ */ e.jsx(S, { checked: a, onCheckedChange: () => i(!a) }),
        /* @__PURE__ */ e.jsx("div", { className: "text-center text-black text-xs font-normal leading-none select-none", children: "I have read and agree the above terms and conditions" })
      ] }),
      /* @__PURE__ */ e.jsx(
        b,
        {
          className: "w-full mt-4",
          disabled: !a,
          onClick: () => h(),
          children: u()
        }
      )
    ] }),
    s && /* @__PURE__ */ e.jsx(
      F,
      {
        isOpen: r,
        onClose: x,
        product: s,
        balance: l
      }
    )
  ] }) : null;
}
function te() {
  const { productId: s } = M(), [l, t] = m.useState(""), [a, i] = m.useState(null), [r, d] = m.useState(!1);
  m.useEffect(() => {
    u();
  }, [s]);
  const u = async () => {
    const c = await j.get(`/marketplace/product/product/${s}`);
    i(c.data), h();
  }, h = async () => {
    const c = E.all().address, o = await P.getInstance().createToken("TVWT").getBalance(c);
    t(o);
  }, x = () => {
    d(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(y, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: r ? (
    // <Success product={product} />
    /* @__PURE__ */ e.jsx(
      z,
      {
        title: `${a == null ? void 0 : a.name} added successfully`,
        buttonText: "Back to Marketplace",
        redirectUrl: "/marketplace",
        description: 'You can find the purchased product under the "Added" tab in the Marketplace. You will be directed to Marketplace in'
      }
    )
  ) : /* @__PURE__ */ e.jsx(
    q,
    {
      product: a,
      balance: l,
      onPurchaseSuccess: x
    }
  ) }) });
}
export {
  te as default
};
