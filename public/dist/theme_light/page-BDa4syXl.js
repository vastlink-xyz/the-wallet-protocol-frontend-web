import { j as e } from "./vendor-radix-nHPuu8ug.js";
import { C as A } from "./index-wRzO4Gxe.js";
import { al as O, c as o, B as w, L, V as R, f as k, o as P, h as B, p as $, an as z, a as U, t as Y, ab as q } from "./main-ZrsMs0Kw.js";
import { L as D } from "./index-DB8_Lllq.js";
import { u as W } from "./useTransaction-C_s6iHPH.js";
import { a as l, c as F, h as Q, n as K } from "./vendor-react-DG1r0zWq.js";
import { u as X, B as x } from "./vendor-utils-CARgNrN0.js";
import { X as Z } from "./vendor-ui-utils-9-Ouo9pm.js";
import { u as I } from "./vendor-web3-CfovYfnB.js";
import { D as G } from "./dialog-Bhpp7xXP.js";
import { B as E } from "./index-BNrloX3-.js";
import { C as H } from "./index-CnE1YIJV.js";
const J = ({ isOpen: a, onClose: c, product: t, balance: s }) => {
  const d = O(), [i, m] = l.useState(!1), { signTransaction: f, waitForTransactionExection: r } = W(), { t: u } = X(), [j, h] = l.useState(!1), [b, p] = l.useState(!1), [n, y] = l.useState(null), N = t.discount ? t.price * (1 - t.discount / 100) : t.price, T = async () => {
    if (I(s) < I(String(N))) {
      x.error(u("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      m(!0);
      const { data: { success: v, needOtp: g, message: C, transactionId: S } } = await k.post("/user/purchase", {
        productId: t.id
      });
      if (v)
        await d.invalidateQueries({ queryKey: ["userInfo"] }), c(!0), x.success(u("/marketplace.productCard.purchaseSuccess")), m(!1);
      else if (g && (P.getVerifyMethod() === "email-by-sendgrid" ? (y(S), h(!0)) : P.getVerifyMethod() === "email-by-nodemailer" && x.warning(u("/marketplace.productCard.dailyLimitExceededOtpRequired")), await r(S))) {
        const { data: se } = await k.post("/user/purchase/saveProducts", {
          productId: t.id
        });
        await d.invalidateQueries({ queryKey: ["userInfo"] }), m(!1), c(!0), x.success(u("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (v) {
      const g = B(v);
      x.error(g.message), m(!1);
    }
  }, V = async (v) => {
    if (!n) {
      x.error("No transaction id");
      return;
    }
    try {
      p(!0);
      const { hash: g } = await $.signTransactionWithOTP({
        transactionId: n,
        otp: v
      });
      if (g) {
        const { data: C } = await k.post("/user/purchase/saveProducts", {
          productId: t.id
        });
        await d.invalidateQueries({ queryKey: ["userInfo"] }), h(!1), c(!0), x.success(u("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (g) {
      const C = B(g);
      x.error(C.message);
    } finally {
      p(!1);
    }
  }, M = a ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    i && /* @__PURE__ */ e.jsx(D, {}),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: o(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Confirmation" }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => c(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ e.jsx(Z, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-none", children: [
        N,
        'VAST will be deducted from your Asset. You can find the purchased product under the "Added" tab in the Marketplace."'
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: "Asset balance: " }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold font-['Roboto'] leading-none", children: [
          s,
          " VAST"
        ] }),
        /* @__PURE__ */ e.jsx(
          w,
          {
            disabled: i,
            onClick: T,
            children: i ? /* @__PURE__ */ e.jsx(L, {}) : "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: o(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Confirmation" }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-tight", children: [
          N,
          'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("footer", { className: "", children: [
        /* @__PURE__ */ e.jsx(
          w,
          {
            disabled: i,
            variant: "ghost",
            className: o(
              "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: T,
            children: "Add"
          }
        ),
        /* @__PURE__ */ e.jsx(
          w,
          {
            disabled: i,
            variant: "ghost",
            className: o(
              "w-full text-[15px] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: () => c(!1),
            children: "Cancel"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(
      R,
      {
        isOpen: j,
        onClose: () => h(!1),
        loading: b,
        onVerify: V,
        modalClassName: "z-[10004]",
        message: "Your purchase exceeds the daily limit. Please enter the verification code we sent to your email to complete this purchase."
      }
    )
  ] }) : null;
  if (typeof window < "u")
    return F.createPortal(
      M,
      document.body
    );
};
function _({ src: a, alt: c, className: t, type: s = "image" }) {
  const [d, i] = l.useState(!1);
  if (!a) return null;
  const m = () => s === "video" ? /* @__PURE__ */ e.jsx(
    "video",
    {
      src: a,
      controls: !1,
      className: t,
      onClick: () => i(!0)
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: a,
      alt: c,
      className: `cursor-zoom-in ${t}`,
      onClick: () => i(!0)
    }
  ), f = () => s === "video" ? /* @__PURE__ */ e.jsx(
    "video",
    {
      src: a,
      controls: !0,
      className: "w-full object-contain",
      onClick: (r) => r.stopPropagation(),
      autoPlay: !0
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: a,
      alt: c,
      className: "w-full object-contain",
      onClick: (r) => r.stopPropagation()
    }
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    m(),
    d && /* @__PURE__ */ e.jsx(
      G,
      {
        open: d,
        onOpenChange: i,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "fixed inset-0 bg-[#1f2533]/40 z-50 flex items-center justify-center",
            onClick: () => i(!1),
            children: /* @__PURE__ */ e.jsx("div", { className: "relative w-[60vw]", children: f() })
          }
        )
      }
    )
  ] });
}
function ee({
  product: a,
  balance: c,
  onPurchaseSuccess: t
}) {
  var p;
  const s = Q(), [d, i] = l.useState(!0), [m, f] = l.useState(!1), { data: r } = z(), u = l.useMemo(() => {
    const n = Number(r == null ? void 0 : r.TVWT), y = Number(a == null ? void 0 : a.price);
    return n * y;
  }, [r, a == null ? void 0 : a.price]), j = () => {
    if ((a == null ? void 0 : a.price) === 0)
      return "Add for free";
    if (a && a.price !== void 0 && a.price > 0)
      return "Add";
  }, h = () => {
    f(!0);
  }, b = (n) => {
    f(!1), n && t();
  };
  return a ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      E,
      {
        className: o([
          "mb-[16px] mt-[20px]",
          "tablet:hidden"
        ]),
        onClick: () => s("/marketplace")
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: o([
      "mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative",
      "tablet:w-[646px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(
        E,
        {
          className: o([
            "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer",
            "hidden tablet:block"
          ]),
          onClick: () => s("/marketplace")
        }
      ),
      /* @__PURE__ */ e.jsx("span", { children: a == null ? void 0 : a.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (p = a == null ? void 0 : a.banners) == null ? void 0 : p.map((n) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
      n.endsWith(".mp4") ? /* @__PURE__ */ e.jsx(
        "video",
        {
          src: n,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          className: o([
            "w-full h-auto object-cover",
            "tablet:hidden"
          ]),
          children: /* @__PURE__ */ e.jsx("source", { src: n, type: "video/mp4" })
        }
      ) : /* @__PURE__ */ e.jsx(
        "img",
        {
          className: o([
            "w-full h-auto object-cover",
            "tablet:hidden"
          ]),
          src: n,
          alt: a == null ? void 0 : a.name
        }
      ),
      /* @__PURE__ */ e.jsx(
        _,
        {
          src: n,
          alt: a == null ? void 0 : a.name,
          type: n.endsWith(".mp4") ? "video" : "image",
          className: o([
            "w-full h-auto object-cover",
            "tablet:block hidden"
          ])
        }
      )
    ] }, n)) }) }),
    /* @__PURE__ */ e.jsx("div", { className: o([
      "tablet:w-[548px] w-[334px]",
      "tablet:mt-[76px] mt-[34px]",
      "mx-auto"
    ]), children: /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: a == null ? void 0 : a.description }) }),
    /* @__PURE__ */ e.jsx("div", { className: o([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
      a == null ? void 0 : a.price,
      " VAST ( ",
      u,
      " USDT)"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: o([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: /* @__PURE__ */ e.jsx(
      w,
      {
        className: "w-full mt-4",
        disabled: !d,
        onClick: () => h(),
        children: j()
      }
    ) }),
    a && /* @__PURE__ */ e.jsx(
      J,
      {
        isOpen: m,
        onClose: b,
        product: a,
        balance: c
      }
    )
  ] }) : null;
}
function he() {
  const { productId: a } = K(), [c, t] = l.useState(""), [s, d] = l.useState(null), [i, m] = l.useState(!1), [f, r] = l.useState({
    title: "",
    buttonText: "",
    redirectUrl: "",
    description: "",
    defaultCountdown: 10,
    openInNewTab: !1
  });
  l.useEffect(() => {
    u();
  }, [a]);
  const u = async () => {
    const b = await k.get(`/marketplace/product/product/${a}`);
    d(b.data), j();
  }, j = async () => {
    const b = U.all().address, p = await Y.getToken(q.VAST).getBalance(b);
    t(p);
  }, h = () => {
    s != null && s.integrationPoints.includes("standalone") && s.serviceUrl && s.vendor !== "Moonpay" ? r({
      title: `${s == null ? void 0 : s.name} added successfully`,
      buttonText: "Open",
      redirectUrl: s.serviceUrl,
      description: `You will be redirected to ${s == null ? void 0 : s.name} in`,
      defaultCountdown: 3,
      openInNewTab: !0
    }) : r({
      title: `${s == null ? void 0 : s.name} added successfully`,
      buttonText: "Back to Marketplace",
      redirectUrl: "/marketplace",
      description: 'You can find the purchased product under the "Added" tab in the Marketplace. You will be directed to Marketplace in',
      defaultCountdown: 10,
      openInNewTab: !1
    }), m(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(A, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: i ? (
    // <Success product={product} />
    /* @__PURE__ */ e.jsx(
      H,
      {
        ...f
      }
    )
  ) : /* @__PURE__ */ e.jsx(
    ee,
    {
      product: s,
      balance: c,
      onPurchaseSuccess: h
    }
  ) }) });
}
export {
  he as default
};
