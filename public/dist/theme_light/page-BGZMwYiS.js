import { j as e } from "./vendor-radix-BcySUdtt.js";
import { C as w } from "./index-CjU6kghy.js";
import { c as t, B as u, g as j, j as y, a as C, T as B } from "./main-CDK5RuLO.js";
import { C as E } from "./checkbox-CUO5jtUw.js";
import { u as P } from "./useTransaction-DDcs0bde.js";
import { a as x, c as S, n as T } from "./vendor-react-BdtkaT_f.js";
import { u as I, B as b } from "./vendor-utils-CISROZyj.js";
import { X as A } from "./vendor-ui-utils-D5jysYH4.js";
import { p as k } from "./vendor-web3-CfO0z015.js";
import { D as M } from "./dialog-DlqGznon.js";
import { B as v } from "./index-Sjo3pVHC.js";
import { C as z } from "./index-BL4wp5Ta.js";
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
  const [l, c] = x.useState(!1), { signTransaction: h, waitForTransactionExection: f } = P(), { t: d } = I(), m = n.discount ? n.price * (1 - n.discount / 100) : n.price, r = async () => {
    if (k(a) < k(String(m))) {
      b.error(d("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      c(!0);
      const { data: { success: p, needOtp: g, message: $, transactionId: N } } = await j.post("/user/purchase", {
        productId: n.id
      });
      if (p)
        i(!0), b.success(d("/marketplace.productCard.purchaseSuccess")), c(!1);
      else if (g && (b.warning(d("/marketplace.productCard.dailyLimitExceededOtpRequired")), await f(N))) {
        const { data: Y } = await j.post("/user/purchase/saveProducts", {
          productId: n.id
        });
        c(!1), i(!0), b.success(d("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (p) {
      const g = y(p);
      b.error(g.message), c(!1);
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
            children: /* @__PURE__ */ e.jsx(A, {})
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
            onClick: r,
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
            onClick: r,
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
    return S.createPortal(
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
      M,
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
                onClick: (c) => c.stopPropagation()
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
  var r;
  const [a, l] = x.useState(!1), [c, h] = x.useState(!1), f = () => {
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
    /* @__PURE__ */ e.jsx(v, { className: t([
      "mb-[16px] mt-[20px]",
      "tablet:hidden"
    ]) }),
    /* @__PURE__ */ e.jsxs("div", { className: t([
      "mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative",
      "tablet:w-[646px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(v, { className: t([
        "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer",
        "hidden tablet:block"
      ]) }),
      /* @__PURE__ */ e.jsx("span", { children: s == null ? void 0 : s.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (r = s == null ? void 0 : s.banners) == null ? void 0 : r.map((o) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
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
        /* @__PURE__ */ e.jsx(E, { checked: a, onCheckedChange: () => l(!a) }),
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
        isOpen: c,
        onClose: m,
        product: s,
        balance: i
      }
    )
  ] }) : null;
}
function ee() {
  const { productId: s } = T(), [i, n] = x.useState(""), [a, l] = x.useState(null), [c, h] = x.useState(!1);
  x.useEffect(() => {
    f();
  }, [s]);
  const f = async () => {
    const r = await j.get(`/marketplace/product/product/${s}`);
    l(r.data), d();
  }, d = async () => {
    const r = C.all().address, o = await B.getInstance().createToken("TVWT").getBalance(r);
    n(o);
  }, m = () => {
    h(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(w, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: c ? (
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
  ee as default
};
