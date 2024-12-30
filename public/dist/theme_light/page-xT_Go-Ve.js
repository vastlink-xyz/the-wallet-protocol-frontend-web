import { j as e } from "./vendor-radix-AvjOLIap.js";
import { C as y } from "./index-CVqB2tS_.js";
import { ae as C, c as l, B as g, L as T, f as v, h as P, ag as B, a as S, t as E, a4 as I } from "./main-kXKSh1Wy.js";
import { L as M } from "./index-BOw7GLyK.js";
import { u as A } from "./useTransaction-DFueDreS.js";
import { a as d, c as O, n as L } from "./vendor-react-DSEtE0wE.js";
import { u as R, B as j } from "./vendor-utils-BPVAmMsZ.js";
import { X as V } from "./vendor-ui-utils-CGOon9_P.js";
import { u as w } from "./vendor-web3-CQEmmIwE.js";
import { D as $ } from "./dialog-CZn7efWH.js";
import { B as k } from "./index-Cgk943zz.js";
import { C as U } from "./index-DuZtz2AU.js";
const W = ({ isOpen: s, onClose: r, product: i, balance: a }) => {
  const x = C(), [n, o] = d.useState(!1), { signTransaction: m, waitForTransactionExection: c } = A(), { t: u } = R(), h = i.discount ? i.price * (1 - i.discount / 100) : i.price, b = async () => {
    if (w(a) < w(String(h))) {
      j.error(u("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      o(!0);
      const { data: { success: t, needOtp: p, message: Y, transactionId: N } } = await v.post("/user/purchase", {
        productId: i.id
      });
      if (t)
        await x.invalidateQueries({ queryKey: ["userInfo"] }), r(!0), j.success(u("/marketplace.productCard.purchaseSuccess")), o(!1);
      else if (p && (j.warning(u("/marketplace.productCard.dailyLimitExceededOtpRequired")), await c(N))) {
        const { data: F } = await v.post("/user/purchase/saveProducts", {
          productId: i.id
        });
        await x.invalidateQueries({ queryKey: ["userInfo"] }), o(!1), r(!0), j.success(u("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (t) {
      const p = P(t);
      j.error(p.message), o(!1);
    }
  }, f = s ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    n && /* @__PURE__ */ e.jsx(M, {}),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: l(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Confirmation" }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => r(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ e.jsx(V, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-none", children: [
        h,
        'V will be deducted from your Asset. You can find the purchased product under the "Added" tab in the Marketplace."'
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: "Asset balance: " }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold font-['Roboto'] leading-none", children: [
          a,
          " V"
        ] }),
        /* @__PURE__ */ e.jsx(
          g,
          {
            disabled: n,
            onClick: b,
            children: n ? /* @__PURE__ */ e.jsx(T, {}) : "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: l(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Confirmation" }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-tight", children: [
          h,
          'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("footer", { className: "", children: [
        /* @__PURE__ */ e.jsx(
          g,
          {
            disabled: n,
            variant: "ghost",
            className: l(
              "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: b,
            children: "Add"
          }
        ),
        /* @__PURE__ */ e.jsx(
          g,
          {
            disabled: n,
            variant: "ghost",
            className: l(
              "w-full text-[15px] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: () => r(!1),
            children: "Cancel"
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return O.createPortal(
      f,
      document.body
    );
};
function z({ src: s, alt: r, className: i, type: a = "image" }) {
  const [x, n] = d.useState(!1);
  if (!s) return null;
  const o = () => a === "video" ? /* @__PURE__ */ e.jsx(
    "video",
    {
      src: s,
      controls: !1,
      className: i,
      onClick: () => n(!0)
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: s,
      alt: r,
      className: `cursor-zoom-in ${i}`,
      onClick: () => n(!0)
    }
  ), m = () => a === "video" ? /* @__PURE__ */ e.jsx(
    "video",
    {
      src: s,
      controls: !0,
      className: "w-full object-contain",
      onClick: (c) => c.stopPropagation(),
      autoPlay: !0
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: s,
      alt: r,
      className: "w-full object-contain",
      onClick: (c) => c.stopPropagation()
    }
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    o(),
    x && /* @__PURE__ */ e.jsx(
      $,
      {
        open: x,
        onOpenChange: n,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "fixed inset-0 bg-[#1f2533]/40 z-50 flex items-center justify-center",
            onClick: () => n(!1),
            children: /* @__PURE__ */ e.jsx("div", { className: "relative w-[60vw]", children: m() })
          }
        )
      }
    )
  ] });
}
function D({
  product: s,
  balance: r,
  onPurchaseSuccess: i
}) {
  var f;
  const [a, x] = d.useState(!0), [n, o] = d.useState(!1), { data: m } = B(), c = d.useMemo(() => {
    const t = Number(m == null ? void 0 : m.TVWT), p = Number(s == null ? void 0 : s.price);
    return t * p;
  }, [m, s == null ? void 0 : s.price]), u = () => {
    if ((s == null ? void 0 : s.price) === 0)
      return "Add for free";
    if (s && s.price !== void 0 && s.price > 0)
      return "Add";
  }, h = () => {
    o(!0);
  }, b = (t) => {
    o(!1), t && i();
  };
  return s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(k, { className: l([
      "mb-[16px] mt-[20px]",
      "tablet:hidden"
    ]) }),
    /* @__PURE__ */ e.jsxs("div", { className: l([
      "mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative",
      "tablet:w-[646px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(k, { className: l([
        "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer",
        "hidden tablet:block"
      ]) }),
      /* @__PURE__ */ e.jsx("span", { children: s == null ? void 0 : s.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (f = s == null ? void 0 : s.banners) == null ? void 0 : f.map((t) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
      t.endsWith(".mp4") ? /* @__PURE__ */ e.jsx(
        "video",
        {
          src: t,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          className: l([
            "w-full h-auto object-cover",
            "tablet:hidden"
          ]),
          children: /* @__PURE__ */ e.jsx("source", { src: t, type: "video/mp4" })
        }
      ) : /* @__PURE__ */ e.jsx(
        "img",
        {
          className: l([
            "w-full h-auto object-cover",
            "tablet:hidden"
          ]),
          src: t,
          alt: s == null ? void 0 : s.name
        }
      ),
      /* @__PURE__ */ e.jsx(
        z,
        {
          src: t,
          alt: s == null ? void 0 : s.name,
          type: t.endsWith(".mp4") ? "video" : "image",
          className: l([
            "w-full h-auto object-cover",
            "tablet:block hidden"
          ])
        }
      )
    ] }, t)) }) }),
    /* @__PURE__ */ e.jsx("div", { className: l([
      "tablet:w-[548px] w-[334px]",
      "tablet:mt-[76px] mt-[34px]",
      "mx-auto"
    ]), children: /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: s == null ? void 0 : s.description }) }),
    /* @__PURE__ */ e.jsx("div", { className: l([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
      s == null ? void 0 : s.price,
      " TWVT ( ",
      c,
      " USDT)"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: l([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: /* @__PURE__ */ e.jsx(
      g,
      {
        className: "w-full mt-4",
        disabled: !a,
        onClick: () => h(),
        children: u()
      }
    ) }),
    s && /* @__PURE__ */ e.jsx(
      W,
      {
        isOpen: n,
        onClose: b,
        product: s,
        balance: r
      }
    )
  ] }) : null;
}
function ne() {
  const { productId: s } = L(), [r, i] = d.useState(""), [a, x] = d.useState(null), [n, o] = d.useState(!1), [m, c] = d.useState({
    title: "",
    buttonText: "",
    redirectUrl: "",
    description: "",
    defaultCountdown: 10,
    openInNewTab: !1
  });
  d.useEffect(() => {
    u();
  }, [s]);
  const u = async () => {
    const f = await v.get(`/marketplace/product/product/${s}`);
    x(f.data), h();
  }, h = async () => {
    const f = S.all().address, t = await E.getToken(I.TVWT).getBalance(f);
    i(t);
  }, b = () => {
    a != null && a.integrationPoints.includes("standalone") && a.serviceUrl && a.vendor !== "Moonpay" ? c({
      title: `${a == null ? void 0 : a.name} added successfully`,
      buttonText: "Open",
      redirectUrl: a.serviceUrl,
      description: `You will be redirected to ${a == null ? void 0 : a.name} in`,
      defaultCountdown: 3,
      openInNewTab: !0
    }) : c({
      title: `${a == null ? void 0 : a.name} added successfully`,
      buttonText: "Back to Marketplace",
      redirectUrl: "/marketplace",
      description: 'You can find the purchased product under the "Added" tab in the Marketplace. You will be directed to Marketplace in',
      defaultCountdown: 10,
      openInNewTab: !1
    }), o(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(y, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: n ? (
    // <Success product={product} />
    /* @__PURE__ */ e.jsx(
      U,
      {
        ...m
      }
    )
  ) : /* @__PURE__ */ e.jsx(
    D,
    {
      product: a,
      balance: r,
      onPurchaseSuccess: b
    }
  ) }) });
}
export {
  ne as default
};
