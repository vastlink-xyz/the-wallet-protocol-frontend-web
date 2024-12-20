import { j as e } from "./vendor-radix-CPmBDWYo.js";
import { C as y } from "./index-3532rTpC.js";
import { ad as C, c as i, B as g, L as B, f as v, h as T, af as P, a as E, T as S } from "./main-DH96ONN5.js";
import { L as I } from "./index-DozcSJTu.js";
import { u as A } from "./useTransaction-DF96Fmcv.js";
import { r as x, b as M, m as O } from "./vendor-react-BA5A8Axg.js";
import { u as R, B as p } from "./vendor-utils-nZmF9_dO.js";
import { X as V } from "./vendor-ui-utils-BWSrTfCS.js";
import { p as k } from "./vendor-web3-CqtRdeC5.js";
import { D as L } from "./dialog-BhHd4fCT.js";
import { B as w } from "./index-Cx1YQCaI.js";
import { C as W } from "./index-obJM6x9R.js";
const z = ({ isOpen: s, onClose: r, product: n, balance: l }) => {
  const u = C(), [t, o] = x.useState(!1), { signTransaction: c, waitForTransactionExection: d } = A(), { t: f } = R(), m = n.discount ? n.price * (1 - n.discount / 100) : n.price, h = async () => {
    if (k(l) < k(String(m))) {
      p.error(f("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      o(!0);
      const { data: { success: a, needOtp: b, message: $, transactionId: N } } = await v.post("/user/purchase", {
        productId: n.id
      });
      if (a)
        await u.invalidateQueries({ queryKey: ["userInfo"] }), r(!0), p.success(f("/marketplace.productCard.purchaseSuccess")), o(!1);
      else if (b && (p.warning(f("/marketplace.productCard.dailyLimitExceededOtpRequired")), await d(N))) {
        const { data: Y } = await v.post("/user/purchase/saveProducts", {
          productId: n.id
        });
        await u.invalidateQueries({ queryKey: ["userInfo"] }), o(!1), r(!0), p.success(f("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (a) {
      const b = T(a);
      p.error(b.message), o(!1);
    }
  }, j = s ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    t && /* @__PURE__ */ e.jsx(I, {}),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: i(
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
        m,
        'V will be deducted from your Asset. You can find the purchased product under the "Added" tab in the Marketplace."'
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: "Asset balance: " }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold font-['Roboto'] leading-none", children: [
          l,
          " V"
        ] }),
        /* @__PURE__ */ e.jsx(
          g,
          {
            disabled: t,
            onClick: h,
            children: t ? /* @__PURE__ */ e.jsx(B, {}) : "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: i(
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
          g,
          {
            disabled: t,
            variant: "ghost",
            className: i(
              "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: h,
            children: "Add"
          }
        ),
        /* @__PURE__ */ e.jsx(
          g,
          {
            disabled: t,
            variant: "ghost",
            className: i(
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
    return M.createPortal(
      j,
      document.body
    );
};
function D({ src: s, alt: r, className: n, type: l = "image" }) {
  const [u, t] = x.useState(!1);
  if (!s) return null;
  const o = () => l === "video" ? /* @__PURE__ */ e.jsx(
    "video",
    {
      src: s,
      controls: !1,
      className: n,
      onClick: () => t(!0)
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: s,
      alt: r,
      className: `cursor-zoom-in ${n}`,
      onClick: () => t(!0)
    }
  ), c = () => l === "video" ? /* @__PURE__ */ e.jsx(
    "video",
    {
      src: s,
      controls: !0,
      className: "w-full object-contain",
      onClick: (d) => d.stopPropagation(),
      autoPlay: !0
    }
  ) : /* @__PURE__ */ e.jsx(
    "img",
    {
      src: s,
      alt: r,
      className: "w-full object-contain",
      onClick: (d) => d.stopPropagation()
    }
  );
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    o(),
    u && /* @__PURE__ */ e.jsx(
      L,
      {
        open: u,
        onOpenChange: t,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "fixed inset-0 bg-[#1f2533]/40 z-50 flex items-center justify-center",
            onClick: () => t(!1),
            children: /* @__PURE__ */ e.jsx("div", { className: "relative w-[60vw]", children: c() })
          }
        )
      }
    )
  ] });
}
function F({
  product: s,
  balance: r,
  onPurchaseSuccess: n
}) {
  var j;
  const [l, u] = x.useState(!0), [t, o] = x.useState(!1), { data: c } = P(), d = x.useMemo(() => {
    const a = Number(c == null ? void 0 : c.TVWT), b = Number(s == null ? void 0 : s.price);
    return a * b;
  }, [c, s == null ? void 0 : s.price]), f = () => {
    if ((s == null ? void 0 : s.price) === 0)
      return "Add for free";
    if (s && s.price !== void 0 && s.price > 0)
      return "Add";
  }, m = () => {
    o(!0);
  }, h = (a) => {
    o(!1), a && n();
  };
  return s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(w, { className: i([
      "mb-[16px] mt-[20px]",
      "tablet:hidden"
    ]) }),
    /* @__PURE__ */ e.jsxs("div", { className: i([
      "mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative",
      "tablet:w-[646px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(w, { className: i([
        "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer",
        "hidden tablet:block"
      ]) }),
      /* @__PURE__ */ e.jsx("span", { children: s == null ? void 0 : s.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (j = s == null ? void 0 : s.banners) == null ? void 0 : j.map((a) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
      a.endsWith(".mp4") ? /* @__PURE__ */ e.jsx(
        "video",
        {
          src: a,
          autoPlay: !0,
          muted: !0,
          loop: !0,
          className: i([
            "w-full h-auto object-cover",
            "tablet:hidden"
          ]),
          children: /* @__PURE__ */ e.jsx("source", { src: a, type: "video/mp4" })
        }
      ) : /* @__PURE__ */ e.jsx(
        "img",
        {
          className: i([
            "w-full h-auto object-cover",
            "tablet:hidden"
          ]),
          src: a,
          alt: s == null ? void 0 : s.name
        }
      ),
      /* @__PURE__ */ e.jsx(
        D,
        {
          src: a,
          alt: s == null ? void 0 : s.name,
          type: a.endsWith(".mp4") ? "video" : "image",
          className: i([
            "w-full h-auto object-cover",
            "tablet:block hidden"
          ])
        }
      )
    ] }, a)) }) }),
    /* @__PURE__ */ e.jsx("div", { className: i([
      "tablet:w-[548px] w-[334px]",
      "tablet:mt-[76px] mt-[34px]",
      "mx-auto"
    ]), children: /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: s == null ? void 0 : s.description }) }),
    /* @__PURE__ */ e.jsx("div", { className: i([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
      s == null ? void 0 : s.price,
      " TWVT ( ",
      d,
      " USDT)"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: i([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: /* @__PURE__ */ e.jsx(
      g,
      {
        className: "w-full mt-4",
        disabled: !l,
        onClick: () => m(),
        children: f()
      }
    ) }),
    s && /* @__PURE__ */ e.jsx(
      z,
      {
        isOpen: t,
        onClose: h,
        product: s,
        balance: r
      }
    )
  ] }) : null;
}
function te() {
  const { productId: s } = O(), [r, n] = x.useState(""), [l, u] = x.useState(null), [t, o] = x.useState(!1);
  x.useEffect(() => {
    c();
  }, [s]);
  const c = async () => {
    const m = await v.get(`/marketplace/product/product/${s}`);
    u(m.data), d();
  }, d = async () => {
    const m = E.all().address, h = await S.getInstance().createToken("TVWT").getBalance(m);
    n(h);
  }, f = () => {
    o(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(y, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: t ? (
    // <Success product={product} />
    /* @__PURE__ */ e.jsx(
      W,
      {
        title: `${l == null ? void 0 : l.name} added successfully`,
        buttonText: "Back to Marketplace",
        redirectUrl: "/marketplace",
        description: 'You can find the purchased product under the "Added" tab in the Marketplace. You will be directed to Marketplace in'
      }
    )
  ) : /* @__PURE__ */ e.jsx(
    F,
    {
      product: l,
      balance: r,
      onPurchaseSuccess: f
    }
  ) }) });
}
export {
  te as default
};
