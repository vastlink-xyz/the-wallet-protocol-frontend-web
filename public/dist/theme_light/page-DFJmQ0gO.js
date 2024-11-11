import { j as e } from "./vendor-radix-CtBTfL6E.js";
import { B as k, C as w } from "./index-C955f02t.js";
import { c as t, d as j, h as y, a as C } from "./main-BiNWeoEw.js";
import { B as u } from "./button-ClT0lWkU.js";
import { C as B } from "./checkbox-C1uexPRa.js";
import { u as E } from "./useTransaction-BRdQ32DR.js";
import { r as x, b as P, l as S } from "./vendor-react-lU71vM3H.js";
import { u as T, B as b } from "./vendor-utils-CKvC_yGz.js";
import { X as I } from "./vendor-ui-utils-i3zS6aVb.js";
import { p as v } from "./vendor-web3-N5LxOC8E.js";
import { D as A } from "./dialog-PXNU6LFt.js";
import { T as M } from "./TokenService-BJInqoec.js";
import { C as z } from "./index-CHCLczVB.js";
function O() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: t(
      "hidden tablet:flex",
      "fixed inset-0 justify-center bg-black/50",
      "z-[49]"
    ), children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/icons/loading.svg",
        alt: "loading",
        className: "h-[100px] w-[100px] animate-spin mt-[100px]"
      }
    ) }),
    /* @__PURE__ */ e.jsx("div", { className: t(
      "flex tablet:hidden",
      "fixed inset-0 justify-center items-center",
      "z-[51]"
    ), children: /* @__PURE__ */ e.jsx("div", { className: "w-[126px] h-[56px] py-[16px] px-[12px] bg-[#424242] rounded-lg backdrop-blur-[20px] flex justify-center items-center", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/icons/mobile_loading.png",
        alt: "loading",
        className: "h-8 w-8 animate-spin"
      }
    ) }) })
  ] });
}
const R = ({ isOpen: s, onClose: i, product: n, balance: a }) => {
  const [l, r] = x.useState(!1), { signTransaction: h, waitForTransactionExection: f } = E(), { t: d } = T(), m = n.discount ? n.price * (1 - n.discount / 100) : n.price, c = async () => {
    if (v(a) < v(String(m))) {
      b.error(d("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      r(!0);
      const { data: { success: p, needOtp: g, message: $, transactionId: N } } = await j.post("/user/purchase", {
        productId: n.id
      });
      if (p)
        i(!0), b.success(d("/marketplace.productCard.purchaseSuccess")), r(!1);
      else if (g && (b.warning(d("/marketplace.productCard.dailyLimitExceededOtpRequired")), await f(N))) {
        const { data: Y } = await j.post("/user/purchase/saveProducts", {
          productId: n.id
        });
        r(!1), i(!0), b.success(d("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (p) {
      const g = y(p);
      b.error(g.message), r(!1);
    }
  }, o = s ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    l && /* @__PURE__ */ e.jsx(O, {}),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: t(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Confirmation" }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => i(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ e.jsx(I, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-none", children: [
        m,
        'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: "Asset balance: " }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold font-['Roboto'] leading-none", children: [
          a,
          " V"
        ] }),
        /* @__PURE__ */ e.jsx(
          u,
          {
            disabled: l,
            onClick: c,
            children: "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: t(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Confirmation" }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-tight", children: [
          m,
          'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("footer", { className: "", children: [
        /* @__PURE__ */ e.jsx(
          u,
          {
            disabled: l,
            variant: "ghost",
            className: t(
              "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: c,
            children: "Add"
          }
        ),
        /* @__PURE__ */ e.jsx(
          u,
          {
            disabled: l,
            variant: "ghost",
            className: t(
              "w-full text-[15px] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: () => i(!1),
            children: "Cancel"
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return P.createPortal(
      o,
      document.body
    );
};
function V({ src: s, alt: i, className: n }) {
  const [a, l] = x.useState(!1);
  return s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: s,
        alt: i,
        className: `cursor-zoom-in ${n}`,
        onClick: () => l(!0)
      }
    ),
    a && /* @__PURE__ */ e.jsx(
      A,
      {
        open: a,
        onOpenChange: l,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "fixed inset-0 bg-[#1f2533]/40 z-50 flex items-center justify-center",
            onClick: () => l(!1),
            children: /* @__PURE__ */ e.jsx("div", { className: "relative w-[60vw]", children: /* @__PURE__ */ e.jsx(
              "img",
              {
                src: s,
                alt: i,
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
function F({
  product: s,
  balance: i,
  onPurchaseSuccess: n
}) {
  var c;
  const [a, l] = x.useState(!1), [r, h] = x.useState(!1), f = () => {
    if ((s == null ? void 0 : s.price) === 0)
      return "Add for free";
    if (s && s.price !== void 0 && s.price > 0)
      return "Add";
  }, d = () => {
    h(!0);
  }, m = (o) => {
    h(!1), o && n();
  };
  return s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(k, { className: t([
      "mb-[16px] mt-[20px]",
      "tablet:hidden"
    ]) }),
    /* @__PURE__ */ e.jsxs("div", { className: t([
      "mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative",
      "tablet:w-[646px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(k, { className: t([
        "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer",
        "hidden tablet:block"
      ]) }),
      /* @__PURE__ */ e.jsx("span", { children: s == null ? void 0 : s.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (c = s == null ? void 0 : s.banners) == null ? void 0 : c.map((o) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
      /* @__PURE__ */ e.jsx("img", { className: t([
        "w-full h-auto object-cover",
        "tablet:hidden"
      ]), src: o, alt: s == null ? void 0 : s.name }),
      /* @__PURE__ */ e.jsx(
        V,
        {
          src: o,
          alt: s == null ? void 0 : s.name,
          className: t([
            "w-full h-auto object-cover",
            "tablet:block hidden"
          ])
        }
      )
    ] }, o)) }) }),
    /* @__PURE__ */ e.jsxs("div", { className: t([
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
    /* @__PURE__ */ e.jsxs("div", { className: t([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-xl font-bold leading-none mb-2", children: "Subscription plan" }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
        s == null ? void 0 : s.price,
        "V"
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: "To manage your plan, go to Profile page, under purchase and select manage." })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: t([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-x-2 cursor-pointer", children: [
        /* @__PURE__ */ e.jsx(B, { checked: a, onCheckedChange: () => l(!a) }),
        /* @__PURE__ */ e.jsx("div", { className: "text-center text-black text-xs font-normal leading-none select-none", children: "I have read and agree the above terms and conditions" })
      ] }),
      /* @__PURE__ */ e.jsx(
        u,
        {
          className: "w-full mt-4",
          disabled: !a,
          onClick: () => d(),
          children: f()
        }
      )
    ] }),
    s && /* @__PURE__ */ e.jsx(
      R,
      {
        isOpen: r,
        onClose: m,
        product: s,
        balance: i
      }
    )
  ] }) : null;
}
function se() {
  const { productId: s } = S(), [i, n] = x.useState(""), [a, l] = x.useState(null), [r, h] = x.useState(!1);
  x.useEffect(() => {
    f();
  }, [s]);
  const f = async () => {
    const c = await j.get(`/marketplace/product/product/${s}`);
    l(c.data), d();
  }, d = async () => {
    const c = C.all().address, o = await M.getInstance().createToken("TVWT").getBalance(c);
    n(o);
  }, m = () => {
    h(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(w, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: r ? (
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
    F,
    {
      product: a,
      balance: i,
      onPurchaseSuccess: m
    }
  ) }) });
}
export {
  se as default
};
