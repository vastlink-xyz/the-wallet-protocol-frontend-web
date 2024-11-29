import { j as e, t as I, v as M, w as W, x as D } from "./vendor-radix-nT--cb5B.js";
import { b as O, r as d, j as V } from "./vendor-react-CwfAKKXk.js";
import { c as p, a as z, M as _, t as q, B as y, f as A, T as Q, L as X, g as T, v as G, w as J } from "./main-CmE7wmKE.js";
import { X as K, S as H, A as Y } from "./vendor-ui-utils-Cm_-IfYd.js";
import { u as Z, B as w } from "./vendor-utils-BMKgA_3H.js";
import { u as ee } from "./useTransaction-5pA7Tj1L.js";
import { L as te } from "./index-DGLuelxM.js";
import { f as se } from "./vendor-web3-SIldcrZc.js";
import { u as ae, b as ne } from "./MarketplaceProvider-DCbhkPBF.js";
function we({
  text: i,
  imgSrc: o = "/imgs/icons/empty.png",
  className: n
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center ${n || ""}`, children: [
    /* @__PURE__ */ e.jsx("img", { className: "w-[186px]", src: o, alt: "empty" }),
    i && /* @__PURE__ */ e.jsx("div", { className: "tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8", children: i })
  ] });
}
const ie = ({ isOpen: i, onClose: o, className: n, overlayClassName: a, children: t }) => {
  const l = i ? /* @__PURE__ */ e.jsxs("div", { className: p(
    "fixed inset-0 z-50 flex items-center justify-center",
    n
  ), children: [
    /* @__PURE__ */ e.jsx("div", { className: p(
      "fixed inset-0 bg-black/80",
      a
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative z-50 bg-background text-primary rounded-lg p-6 max-w-md w-full", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: o,
          className: "absolute top-2 right-2 text-primary hover:text-primary/80",
          children: /* @__PURE__ */ e.jsx(K, {})
        }
      ),
      t
    ] })
  ] }) : null;
  if (typeof window < "u")
    return O.createPortal(
      l,
      document.body
    );
};
function je({
  isOpen: i,
  product: o,
  onClose: n
}) {
  const { t: a } = Z(), [t, l] = d.useState(!1), [x, u] = d.useState(!1), [g, b] = d.useState(""), [h, N] = d.useState(""), [s, m] = d.useState(!1), j = d.useRef(), v = d.useRef(), { signTransaction: U, waitForTransactionExection: de } = ee();
  d.useEffect(() => {
    B();
  }, []);
  const B = async () => {
    const {
      username: r,
      address: c
    } = z.all();
    b(r || void 0);
    const R = JSON.stringify({
      eth: c,
      matic_polygon: c
    });
    N(R);
  }, k = async (r) => (await A.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(r)}`)).data.signature, E = () => {
    n(!1), l(!1), u(!1);
  }, C = async (r) => {
    if (m(!1), await L()) {
      const f = Q.getInstance().createToken(r.cryptoCurrency.code.toUpperCase());
      return j.current = f, await $(r), {
        // depositId: hash ? hash : '',
        depositId: ""
      };
    } else
      return {
        depositId: ""
      };
  }, L = (r) => new Promise((c) => {
    v.current = w(
      /* @__PURE__ */ e.jsxs("div", { className: "w-full text-primary", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold", children: a("/marketplace.moonpayRamp.depositConfirmation.title") }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-2", children: a("/marketplace.moonpayRamp.depositConfirmation.message") }),
        /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex justify-end", children: [
          /* @__PURE__ */ e.jsx(
            y,
            {
              className: "mr-2 px-4 py-2",
              variant: "ghost",
              onClick: () => {
                w.dismiss(v.current), c(!1);
              },
              children: a("/marketplace.moonpayRamp.depositConfirmation.cancelButton")
            }
          ),
          /* @__PURE__ */ e.jsx(
            y,
            {
              className: "px-4 py-2",
              onClick: async () => {
                w.dismiss(v.current), c(!0);
              },
              disabled: s,
              children: s ? /* @__PURE__ */ e.jsx(X, {}) : a("/marketplace.moonpayRamp.depositConfirmation.confirmButton")
            }
          )
        ] })
      ] }),
      {
        closeOnClick: !1,
        autoClose: !1,
        className: "bg-card !important"
      }
    );
  });
  async function $(r) {
    try {
      const c = r.cryptoCurrency.code.toUpperCase(), f = se(BigInt(r.cryptoCurrencyAmountSmallestDenomination));
      T("amt", f), m(!0);
      const R = await U({
        to: r.depositWalletAddress,
        amount: f,
        token: c,
        transactionType: G.SELL,
        data: ""
      });
    } catch (c) {
      const f = c.response;
      f && f.data && w.error(f.data);
    } finally {
      m(!1);
    }
  }
  const F = async (r) => {
    T("transactionCreated", r);
  };
  return /* @__PURE__ */ e.jsxs(
    ie,
    {
      className: p(
        "text-primary p-4 tablet:p-6"
      ),
      isOpen: i,
      onClose: () => E(),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: p(
          "flex items-center font-bold mb-6",
          "text-md tablet:text-2xl"
        ), children: [
          /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/moonpay-logo.png", alt: "MoonPay Logo", width: 32, height: 32, className: "mr-3" }),
          a("/marketplace.moonpayRamp.modalTitle")
        ] }),
        t && /* @__PURE__ */ e.jsx(
          _,
          {
            variant: "overlay",
            visible: t,
            email: g,
            onCloseOverlay: () => {
              l(!1);
            },
            walletAddresses: h,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onInitiateDeposit: C,
            onUrlSignatureRequested: k
          }
        ),
        x && /* @__PURE__ */ e.jsx(
          q,
          {
            variant: "overlay",
            visible: x,
            email: g,
            walletAddresses: h,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onCloseOverlay: () => {
              u(!1);
            },
            onInitiateDeposit: C,
            onUrlSignatureRequested: k,
            onTransactionCreated: F
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs(
            y,
            {
              className: p(
                "font-semibold",
                "py-3 tablet:py-6",
                "text-xs tablet:text-sm"
              ),
              onClick: () => l(!0),
              children: [
                /* @__PURE__ */ e.jsx(H, { className: "hidden tablet:block tablet:mr-2" }),
                a("/marketplace.moonpayRamp.buyButton")
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            y,
            {
              className: p(
                "font-semibold",
                "py-3 tablet:py-6",
                "text-xs tablet:text-sm"
              ),
              onClick: () => u(!0),
              children: [
                /* @__PURE__ */ e.jsx(Y, { className: "hidden tablet:block tablet:mr-2" }),
                a("/marketplace.moonpayRamp.sellButton")
              ]
            }
          )
        ] }),
        s && /* @__PURE__ */ e.jsx(te, {})
      ]
    }
  );
}
const re = M, oe = W, le = D, P = d.forwardRef(({ className: i, sideOffset: o = 4, ...n }, a) => /* @__PURE__ */ e.jsx(
  I,
  {
    ref: a,
    sideOffset: o,
    className: p(
      "z-50 overflow-visible rounded-md bg-black px-3 py-1.5 text-sm text-white",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "relative after:absolute after:content-[''] after:w-2 after:h-2 after:rotate-45 after:bg-black",
      "data-[side=bottom]:after:-top-1 data-[side=bottom]:after:left-1/2 data-[side=bottom]:after:-translate-x-1/2",
      "data-[side=top]:after:-bottom-1 data-[side=top]:after:left-1/2 data-[side=top]:after:-translate-x-1/2",
      "data-[side=left]:after:-right-1 data-[side=left]:after:top-1/2 data-[side=left]:after:-translate-y-1/2",
      "data-[side=right]:after:-left-1 data-[side=right]:after:top-1/2 data-[side=right]:after:-translate-y-1/2",
      i
    ),
    ...n
  }
));
P.displayName = I.displayName;
function S({ variant: i }) {
  const o = {
    featured: {
      bgColor: "bg-[#ffebc1]",
      text: "Featured",
      width: "w-[51px]",
      textAlign: "text-right",
      showIcon: !0
    },
    free: {
      bgColor: "bg-[#73d742]",
      text: "Free",
      width: "w-[25px]",
      textAlign: "text-center",
      showIcon: !1
    }
  }, { bgColor: n, text: a, width: t, textAlign: l, showIcon: x } = o[i];
  return /* @__PURE__ */ e.jsxs("div", { className: `absolute right-0 top-0 -translate-y-[50%] ${n} h-[40px] px-[20px] rounded-l-[20px]`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-[20px]" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-center items-center h-[22px]", children: [
      x && /* @__PURE__ */ e.jsx("img", { className: "w-[12px]", src: "/imgs/icons/fire.svg", alt: "fire" }),
      /* @__PURE__ */ e.jsx("div", { className: `${t} ${l} text-black text-xs font-medium leading-none`, children: a })
    ] })
  ] });
}
const ce = ({
  activedPurchasedProductIds: i,
  handleRampOpenModal: o
}) => {
  const n = V(), a = J(), t = d.useRef(null), {
    setIsModalOpen: l,
    setDappInfo: x,
    isConnected: u,
    setDisplayUriInput: g
  } = ae(), { checkNewProducts: b } = ne();
  d.useEffect(() => () => {
    t.current && window.clearTimeout(t.current);
  }, []);
  const h = (s) => i.some((j) => j === s.id) ? "active" : "";
  return {
    handleClick: async (s) => {
      if (h(s) !== "active") {
        n(`/marketplace/feature-detail/${s.id}`);
        return;
      }
      if (t.current = window.setTimeout(async () => {
        try {
          await A.post("/user/products/update-usage-status", {
            productId: s.id
          }), await a.invalidateQueries({ queryKey: ["userInfo"] }), await b();
        } catch (m) {
          console.error("Failed to mark product as viewed:", m);
        }
      }, 100), s.products && s.followOrder) {
        const m = new URLSearchParams();
        m.set("flowId", s.id), m.set("flowIndex", "0"), n(`${s.serviceUrl}?${m.toString()}`);
        return;
      }
      if (s.integrationPoints.includes("walletconnect")) {
        u ? window.open(s.serviceUrl, "_blank") : (x({
          name: s.name,
          url: s.serviceUrl
        }), g(!1), l(!0));
        return;
      }
      if (s.vendor === "Moonpay") {
        o(s);
        return;
      }
      if (s.integrationPoints.includes("theme")) {
        window.location.href = s.serviceUrl;
        return;
      }
      if (s.category === "Security") {
        window.open(s.website, "_blank");
        return;
      }
      s.serviceUrl.startsWith("http") ? window.open(s.serviceUrl, "_blank") : s.serviceUrl.startsWith("/") && n(s.serviceUrl);
    },
    checkPurchaseStatus: h
  };
};
function ve({
  className: i,
  activedPurchasedProductIds: o,
  handleRampOpenModal: n,
  selectedCategory: a,
  ...t
}) {
  const { handleClick: l } = ce({
    activedPurchasedProductIds: o,
    handleRampOpenModal: n
  });
  return /* @__PURE__ */ e.jsx(re, { children: /* @__PURE__ */ e.jsxs(oe, { delayDuration: 100, children: [
    /* @__PURE__ */ e.jsx(le, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: p([
          "laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]",
          "h-[200px] p-5 bg-white rounded-[20px] border-[1.5px] border-[#ebebeb] relative overflow-hidden",
          "hover:border-[#111111] cursor-pointer",
          i
        ]),
        onClick: () => l(t),
        children: [
          t.isFeatured ? /* @__PURE__ */ e.jsx(S, { variant: "featured" }) : t.price === 0 && /* @__PURE__ */ e.jsx(S, { variant: "free" }),
          /* @__PURE__ */ e.jsxs("div", { className: "justify-start items-center gap-4 inline-flex mb-5", children: [
            /* @__PURE__ */ e.jsx("img", { src: t.logoUrl, alt: t.name, className: "w-[52px] h-[52px] object-contain rounded-full" }),
            /* @__PURE__ */ e.jsxs("div", { className: "flex-col justify-center items-start inline-flex", children: [
              /* @__PURE__ */ e.jsx("div", { className: "text-[#111111] text-base font-bold leading-normal", children: t.name }),
              /* @__PURE__ */ e.jsx("div", { className: "h-4 p-0.5 bg-[#f2f2f2] rounded-sm justify-center items-center gap-2.5 inline-flex", children: /* @__PURE__ */ e.jsx("div", { className: "text-[#4f4f4f] text-[10px] font-normal leading-none", children: t.category }) })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "self-stretch max-h-[32px] text-[#828282] text-sm font-normal leading-4 line-clamp-2", children: t.description }),
          /* @__PURE__ */ e.jsxs("div", { className: "h-4 flex items-center mt-1 mb-5", children: [
            /* @__PURE__ */ e.jsx("span", { className: "text-[#979797] text-sm font-normal inline-block mr-1", children: "Developer:" }),
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: "text-black text-sm font-bold underline cursor-pointer",
                onClick: (x) => {
                  x.stopPropagation(), window.open(t.website, "_blank");
                },
                children: t.vendor
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-5 right-5 h-4 flex items-center", children: [
            a === "Added" && /* @__PURE__ */ e.jsx("span", { className: "text-[#c4c4c4] text-sm font-medium leading-none inline-block mr-[10px]", children: "Added" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-[#979797] text-sm font-medium leading-none", children: "Price: " }),
            t.discount && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("span", { className: "text-[#979797] text-sm font-normal line-through leading-none", children: [
              t.price,
              " V"
            ] }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[#111111] text-base font-bold leading-none ml-1", children: [
              t.discount ? t.price * (100 - t.discount) / 100 : t.price,
              " V"
            ] }),
            t.discount && /* @__PURE__ */ e.jsx("div", { className: "ml-1 h-4 px-2 py-[5px] bg-black/5 rounded-[54px] justify-center items-center gap-2.5 inline-flex", children: /* @__PURE__ */ e.jsxs("div", { className: "text-center text-black text-xs font-medium leading-none", children: [
              "-",
              t.discount,
              "%"
            ] }) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsx(
      P,
      {
        side: "top",
        align: "center",
        alignOffset: 0,
        sideOffset: -80,
        children: /* @__PURE__ */ e.jsx("p", { className: "max-w-[300px] break-words", children: t.description })
      }
    )
  ] }) });
}
export {
  we as E,
  ve as P,
  je as R,
  ce as u
};
