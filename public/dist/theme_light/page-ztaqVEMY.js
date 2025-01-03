import { j as e } from "./vendor-radix-AvjOLIap.js";
import { C } from "./index-66DMrufA.js";
import { ae as T, c as r, B as g, L as S, f as v, h as P, ag as B, a as E, t as I, a4 as A } from "./main-60uJFh8T.js";
import { L as M } from "./index-BXdir5-U.js";
import { u as O } from "./useTransaction-LjglLtuU.js";
import { a as d, c as L, l as R, n as V } from "./vendor-react-DSEtE0wE.js";
import { u as $, B as j } from "./vendor-utils-BPVAmMsZ.js";
import { X as U } from "./vendor-ui-utils-CGOon9_P.js";
import { u as k } from "./vendor-web3-CQEmmIwE.js";
import { D as z } from "./dialog-BoPbZCLz.js";
import { B as N } from "./index-LfzRSz8t.js";
import { C as D } from "./index-CfgfOCmC.js";
const Y = ({ isOpen: s, onClose: o, product: n, balance: a }) => {
  const m = T(), [i, c] = d.useState(!1), { signTransaction: f, waitForTransactionExection: l } = O(), { t: x } = $(), h = n.discount ? n.price * (1 - n.discount / 100) : n.price, p = async () => {
    if (k(a) < k(String(h))) {
      j.error(x("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      c(!0);
      const { data: { success: u, needOtp: t, message: w, transactionId: y } } = await v.post("/user/purchase", {
        productId: n.id
      });
      if (u)
        await m.invalidateQueries({ queryKey: ["userInfo"] }), o(!0), j.success(x("/marketplace.productCard.purchaseSuccess")), c(!1);
      else if (t && (j.warning(x("/marketplace.productCard.dailyLimitExceededOtpRequired")), await l(y))) {
        const { data: Q } = await v.post("/user/purchase/saveProducts", {
          productId: n.id
        });
        await m.invalidateQueries({ queryKey: ["userInfo"] }), c(!1), o(!0), j.success(x("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (u) {
      const t = P(u);
      j.error(t.message), c(!1);
    }
  }, b = s ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    i && /* @__PURE__ */ e.jsx(M, {}),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: r(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Confirmation" }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => o(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ e.jsx(U, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-none", children: [
        h,
        'VAST will be deducted from your Asset. You can find the purchased product under the "Added" tab in the Marketplace."'
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: "Asset balance: " }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold font-['Roboto'] leading-none", children: [
          a,
          " VAST"
        ] }),
        /* @__PURE__ */ e.jsx(
          g,
          {
            disabled: i,
            onClick: p,
            children: i ? /* @__PURE__ */ e.jsx(S, {}) : "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: r(
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
            disabled: i,
            variant: "ghost",
            className: r(
              "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: p,
            children: "Add"
          }
        ),
        /* @__PURE__ */ e.jsx(
          g,
          {
            disabled: i,
            variant: "ghost",
            className: r(
              "w-full text-[15px] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: () => o(!1),
            children: "Cancel"
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return L.createPortal(
      b,
      document.body
    );
};
function q({ src: s, alt: o, className: n, type: a = "image" }) {
  const [m, i] = d.useState(!1);
  if (!s) return null;
  const c = () => a === "video" ? /* @__PURE__ */ e.jsx(
    "video",
    {
      src: s,
      controls: !1,
      className: n,
      onClick: () => i(!0)
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: s,
      alt: o,
      className: `cursor-zoom-in ${n}`,
      onClick: () => i(!0)
    }
  ), f = () => a === "video" ? /* @__PURE__ */ e.jsx(
    "video",
    {
      src: s,
      controls: !0,
      className: "w-full object-contain",
      onClick: (l) => l.stopPropagation(),
      autoPlay: !0
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: s,
      alt: o,
      className: "w-full object-contain",
      onClick: (l) => l.stopPropagation()
    }
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    c(),
    m && /* @__PURE__ */ e.jsx(
      z,
      {
        open: m,
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
function F({
  product: s,
  balance: o,
  onPurchaseSuccess: n
}) {
  var u;
  const a = R(), [m, i] = d.useState(!0), [c, f] = d.useState(!1), { data: l } = B(), x = d.useMemo(() => {
    const t = Number(l == null ? void 0 : l.TVWT), w = Number(s == null ? void 0 : s.price);
    return t * w;
  }, [l, s == null ? void 0 : s.price]), h = () => {
    if ((s == null ? void 0 : s.price) === 0)
      return "Add for free";
    if (s && s.price !== void 0 && s.price > 0)
      return "Add";
  }, p = () => {
    f(!0);
  }, b = (t) => {
    f(!1), t && n();
  };
  return s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      N,
      {
        className: r([
          "mb-[16px] mt-[20px]",
          "tablet:hidden"
        ]),
        onClick: () => a("/marketplace")
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: r([
      "mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative",
      "tablet:w-[646px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(
        N,
        {
          className: r([
            "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer",
            "hidden tablet:block"
          ]),
          onClick: () => a("/marketplace")
        }
      ),
      /* @__PURE__ */ e.jsx("span", { children: s == null ? void 0 : s.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (u = s == null ? void 0 : s.banners) == null ? void 0 : u.map((t) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
      t.endsWith(".mp4") ? /* @__PURE__ */ e.jsx(
        "video",
        {
          src: t,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          className: r([
            "w-full h-auto object-cover",
            "tablet:hidden"
          ]),
          children: /* @__PURE__ */ e.jsx("source", { src: t, type: "video/mp4" })
        }
      ) : /* @__PURE__ */ e.jsx(
        "img",
        {
          className: r([
            "w-full h-auto object-cover",
            "tablet:hidden"
          ]),
          src: t,
          alt: s == null ? void 0 : s.name
        }
      ),
      /* @__PURE__ */ e.jsx(
        q,
        {
          src: t,
          alt: s == null ? void 0 : s.name,
          type: t.endsWith(".mp4") ? "video" : "image",
          className: r([
            "w-full h-auto object-cover",
            "tablet:block hidden"
          ])
        }
      )
    ] }, t)) }) }),
    /* @__PURE__ */ e.jsx("div", { className: r([
      "tablet:w-[548px] w-[334px]",
      "tablet:mt-[76px] mt-[34px]",
      "mx-auto"
    ]), children: /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: s == null ? void 0 : s.description }) }),
    /* @__PURE__ */ e.jsx("div", { className: r([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
      s == null ? void 0 : s.price,
      " VAST ( ",
      x,
      " USDT)"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: r([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: /* @__PURE__ */ e.jsx(
      g,
      {
        className: "w-full mt-4",
        disabled: !m,
        onClick: () => p(),
        children: h()
      }
    ) }),
    s && /* @__PURE__ */ e.jsx(
      Y,
      {
        isOpen: c,
        onClose: b,
        product: s,
        balance: o
      }
    )
  ] }) : null;
}
function ie() {
  const { productId: s } = V(), [o, n] = d.useState(""), [a, m] = d.useState(null), [i, c] = d.useState(!1), [f, l] = d.useState({
    title: "",
    buttonText: "",
    redirectUrl: "",
    description: "",
    defaultCountdown: 10,
    openInNewTab: !1
  });
  d.useEffect(() => {
    x();
  }, [s]);
  const x = async () => {
    const b = await v.get(`/marketplace/product/product/${s}`);
    m(b.data), h();
  }, h = async () => {
    const b = E.all().address, u = await I.getToken(A.VAST).getBalance(b);
    n(u);
  }, p = () => {
    a != null && a.integrationPoints.includes("standalone") && a.serviceUrl && a.vendor !== "Moonpay" ? l({
      title: `${a == null ? void 0 : a.name} added successfully`,
      buttonText: "Open",
      redirectUrl: a.serviceUrl,
      description: `You will be redirected to ${a == null ? void 0 : a.name} in`,
      defaultCountdown: 3,
      openInNewTab: !0
    }) : l({
      title: `${a == null ? void 0 : a.name} added successfully`,
      buttonText: "Back to Marketplace",
      redirectUrl: "/marketplace",
      description: 'You can find the purchased product under the "Added" tab in the Marketplace. You will be directed to Marketplace in',
      defaultCountdown: 10,
      openInNewTab: !1
    }), c(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(C, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: i ? (
    // <Success product={product} />
    /* @__PURE__ */ e.jsx(
      D,
      {
        ...f
      }
    )
  ) : /* @__PURE__ */ e.jsx(
    F,
    {
      product: a,
      balance: o,
      onPurchaseSuccess: p
    }
  ) }) });
}
export {
  ie as default
};
