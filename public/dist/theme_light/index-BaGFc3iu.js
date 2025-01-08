import { j as e, E as A, F as M, G as O, H as $ } from "./vendor-radix-AvjOLIap.js";
import { a as l, l as W } from "./vendor-react-DSEtE0wE.js";
import { a as _, aa as V, c as g, ab as q, ac as z, B as y, f as I, t as G, L as Q, g as S, ad as H, ae as J } from "./main-CeYGBtxc.js";
import { u as K, B as j } from "./vendor-utils-BPVAmMsZ.js";
import { u as X } from "./useTransaction-syQ8syQR.js";
import { L as Y } from "./index-D_knZJPv.js";
import { S as Z, A as ee } from "./vendor-ui-utils-CGOon9_P.js";
import { k as te } from "./vendor-web3-CQEmmIwE.js";
import { u as se, a as ae } from "./MarketplaceProvider-BcAGnSpg.js";
function be({
  text: i,
  imgSrc: c = "/imgs/icons/empty.png",
  className: o
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center ${o || ""}`, children: [
    /* @__PURE__ */ e.jsx("img", { className: "w-[186px]", src: c, alt: "empty" }),
    i && /* @__PURE__ */ e.jsx("div", { className: "tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8", children: i })
  ] });
}
function we({
  isOpen: i,
  product: c,
  onClose: o
}) {
  const { t: a } = K(), [t, m] = l.useState(!1), [x, u] = l.useState(!1), [b, w] = l.useState(""), [h, N] = l.useState(""), [s, d] = l.useState(!1), p = l.useRef(), v = l.useRef(), { signTransaction: U, waitForTransactionExection: le } = X();
  l.useEffect(() => {
    E();
  }, []);
  const E = async () => {
    const {
      username: n,
      address: r
    } = _.all();
    w(n || void 0);
    const R = JSON.stringify({
      eth: r,
      matic_polygon: r
    });
    N(R);
  }, k = async (n) => (await I.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(n)}`)).data.signature, L = () => {
    o(!1), m(!1), u(!1);
  }, C = async (n) => {
    if (d(!1), await B()) {
      const f = G.getToken(n.cryptoCurrency.code.toUpperCase());
      return p.current = f, await F(n), {
        // depositId: hash ? hash : '',
        depositId: ""
      };
    } else
      return {
        depositId: ""
      };
  }, B = (n) => new Promise((r) => {
    v.current = j(
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
                j.dismiss(v.current), r(!1);
              },
              children: a("/marketplace.moonpayRamp.depositConfirmation.cancelButton")
            }
          ),
          /* @__PURE__ */ e.jsx(
            y,
            {
              className: "px-4 py-2",
              onClick: async () => {
                j.dismiss(v.current), r(!0);
              },
              disabled: s,
              children: s ? /* @__PURE__ */ e.jsx(Q, {}) : a("/marketplace.moonpayRamp.depositConfirmation.confirmButton")
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
  async function F(n) {
    try {
      const r = n.cryptoCurrency.code.toUpperCase(), f = te(BigInt(n.cryptoCurrencyAmountSmallestDenomination));
      S("amt", f), d(!0);
      const R = await U({
        to: n.depositWalletAddress,
        amount: f,
        token: r,
        transactionType: H.SELL,
        data: ""
      });
    } catch (r) {
      const f = r.response;
      f && f.data && j.error(f.data);
    } finally {
      d(!1);
    }
  }
  const D = async (n) => {
    S("transactionCreated", n);
  };
  return /* @__PURE__ */ e.jsxs(
    V,
    {
      contentClassName: "p-6",
      containerClassName: "max-w-md",
      isOpen: i,
      onClose: () => L(),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: g(
          "flex items-center font-bold mb-6",
          "text-md tablet:text-2xl"
        ), children: [
          /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/moonpay-logo.png", alt: "MoonPay Logo", width: 32, height: 32, className: "mr-3" }),
          a("/marketplace.moonpayRamp.modalTitle")
        ] }),
        t && /* @__PURE__ */ e.jsx(
          q,
          {
            variant: "overlay",
            visible: t,
            email: b,
            onCloseOverlay: () => {
              m(!1);
            },
            walletAddresses: h,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onInitiateDeposit: C,
            onUrlSignatureRequested: k
          }
        ),
        x && /* @__PURE__ */ e.jsx(
          z,
          {
            variant: "overlay",
            visible: x,
            email: b,
            walletAddresses: h,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onCloseOverlay: () => {
              u(!1);
            },
            onInitiateDeposit: C,
            onUrlSignatureRequested: k,
            onTransactionCreated: D
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs(
            y,
            {
              className: g(
                "font-semibold",
                "py-3 tablet:py-6",
                "text-xs tablet:text-sm"
              ),
              onClick: () => m(!0),
              children: [
                /* @__PURE__ */ e.jsx(Z, { className: "hidden tablet:block tablet:mr-2" }),
                a("/marketplace.moonpayRamp.buyButton")
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            y,
            {
              className: g(
                "font-semibold",
                "py-3 tablet:py-6",
                "text-xs tablet:text-sm"
              ),
              onClick: () => u(!0),
              children: [
                /* @__PURE__ */ e.jsx(ee, { className: "hidden tablet:block tablet:mr-2" }),
                a("/marketplace.moonpayRamp.sellButton")
              ]
            }
          )
        ] }),
        s && /* @__PURE__ */ e.jsx(Y, {})
      ]
    }
  );
}
const ne = M, ie = O, oe = $, P = l.forwardRef(({ className: i, sideOffset: c = 4, ...o }, a) => /* @__PURE__ */ e.jsx(
  A,
  {
    ref: a,
    sideOffset: c,
    className: g(
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
    ...o
  }
));
P.displayName = A.displayName;
function T({ variant: i }) {
  const c = {
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
  }, { bgColor: o, text: a, width: t, textAlign: m, showIcon: x } = c[i];
  return /* @__PURE__ */ e.jsxs("div", { className: `absolute right-0 top-0 -translate-y-[50%] ${o} h-[40px] px-[20px] rounded-l-[20px]`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-[20px]" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-center items-center h-[22px]", children: [
      x && /* @__PURE__ */ e.jsx("img", { className: "w-[12px]", src: "/imgs/icons/fire.svg", alt: "fire" }),
      /* @__PURE__ */ e.jsx("div", { className: `${t} ${m} text-black text-xs font-medium leading-none`, children: a })
    ] })
  ] });
}
const re = ({
  activedPurchasedProductIds: i,
  handleRampOpenModal: c
}) => {
  const o = W(), a = J(), t = l.useRef(null), {
    setIsModalOpen: m,
    setDappInfo: x,
    isConnected: u,
    setDisplayUriInput: b
  } = se(), { checkNewProducts: w } = ae();
  l.useEffect(() => () => {
    t.current && window.clearTimeout(t.current);
  }, []);
  const h = (s) => i.some((p) => p === s.id) ? "active" : "";
  return {
    handleClick: async (s) => {
      if (h(s) !== "active") {
        window.open(`/marketplace/feature-detail/${s.id}`, "_blank");
        return;
      }
      if (t.current = window.setTimeout(async () => {
        try {
          await I.post("/user/products/update-usage-status", {
            productId: s.id
          }), await a.invalidateQueries({ queryKey: ["userInfo"] }), await w();
        } catch (d) {
          console.error("Failed to mark product as viewed:", d);
        }
      }, 100), s.products && s.followOrder) {
        const d = new URLSearchParams();
        d.set("flowId", s.id), d.set("flowIndex", "0");
        const p = `${s.serviceUrl}?${d.toString()}`;
        s.integrationPoints.includes("standalone") ? window.open(p, "_blank") : o(p);
        return;
      }
      if (s.integrationPoints.includes("walletconnect")) {
        u ? window.open(s.serviceUrl, "_blank") : (x({
          name: s.name,
          url: s.serviceUrl
        }), b(!1), m(!0));
        return;
      }
      if (s.vendor === "Moonpay") {
        c(s);
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
      s.integrationPoints.includes("standalone") && window.open(s.serviceUrl, "_blank");
    },
    checkPurchaseStatus: h
  };
};
function ye({
  className: i,
  activedPurchasedProductIds: c,
  handleRampOpenModal: o,
  selectedCategory: a,
  ...t
}) {
  const { handleClick: m } = re({
    activedPurchasedProductIds: c,
    handleRampOpenModal: o
  });
  return /* @__PURE__ */ e.jsx(ne, { children: /* @__PURE__ */ e.jsxs(ie, { delayDuration: 100, children: [
    /* @__PURE__ */ e.jsx(oe, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: g([
          "laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]",
          "h-[200px] p-5 bg-white rounded-[20px] border-[1.5px] border-[#ebebeb] relative overflow-hidden",
          "hover:border-[#111111] cursor-pointer",
          i
        ]),
        onClick: () => m(t),
        children: [
          t.isFeatured ? /* @__PURE__ */ e.jsx(T, { variant: "featured" }) : t.price === 0 && /* @__PURE__ */ e.jsx(T, { variant: "free" }),
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
              " VAST"
            ] }) }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[#111111] text-base font-bold leading-none ml-1", children: [
              t.discount ? t.price * (100 - t.discount) / 100 : t.price,
              " VAST"
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
  be as E,
  ye as P,
  we as R,
  re as u
};
