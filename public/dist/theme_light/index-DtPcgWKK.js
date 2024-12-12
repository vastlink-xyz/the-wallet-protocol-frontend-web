import { j as e, t as I, v as D, w as M, x as O } from "./vendor-radix-DAGGyvqc.js";
import { a as l, l as $ } from "./vendor-react-BNvQ9I2c.js";
import { a as V, a9 as _, c as h, aa as q, ab as z, B as y, f as A, T as Q, L as G, g as T, ac as J, ad as K } from "./main-C7od9bzF.js";
import { u as H, B as w } from "./vendor-utils-B-eF5hYT.js";
import { u as X } from "./useTransaction-Cfpzirn8.js";
import { L as Y } from "./index-D2kfGm-9.js";
import { S as Z, A as ee } from "./vendor-ui-utils-CsaM-dHT.js";
import { f as te } from "./vendor-web3-DanlmASa.js";
import { u as se, a as ae } from "./MarketplaceProvider-DzdeitCL.js";
function be({
  text: o,
  imgSrc: c = "/imgs/icons/empty.png",
  className: i
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center ${i || ""}`, children: [
    /* @__PURE__ */ e.jsx("img", { className: "w-[186px]", src: c, alt: "empty" }),
    o && /* @__PURE__ */ e.jsx("div", { className: "tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8", children: o })
  ] });
}
function ye({
  isOpen: o,
  product: c,
  onClose: i
}) {
  const { t: a } = H(), [t, m] = l.useState(!1), [x, p] = l.useState(!1), [g, b] = l.useState(""), [u, N] = l.useState(""), [s, d] = l.useState(!1), j = l.useRef(), v = l.useRef(), { signTransaction: U, waitForTransactionExection: le } = X();
  l.useEffect(() => {
    B();
  }, []);
  const B = async () => {
    const {
      username: n,
      address: r
    } = V.all();
    b(n || void 0);
    const R = JSON.stringify({
      eth: r,
      matic_polygon: r
    });
    N(R);
  }, C = async (n) => (await A.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(n)}`)).data.signature, E = () => {
    i(!1), m(!1), p(!1);
  }, k = async (n) => {
    if (d(!1), await L()) {
      const f = Q.getInstance().createToken(n.cryptoCurrency.code.toUpperCase());
      return j.current = f, await F(n), {
        // depositId: hash ? hash : '',
        depositId: ""
      };
    } else
      return {
        depositId: ""
      };
  }, L = (n) => new Promise((r) => {
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
                w.dismiss(v.current), r(!1);
              },
              children: a("/marketplace.moonpayRamp.depositConfirmation.cancelButton")
            }
          ),
          /* @__PURE__ */ e.jsx(
            y,
            {
              className: "px-4 py-2",
              onClick: async () => {
                w.dismiss(v.current), r(!0);
              },
              disabled: s,
              children: s ? /* @__PURE__ */ e.jsx(G, {}) : a("/marketplace.moonpayRamp.depositConfirmation.confirmButton")
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
      T("amt", f), d(!0);
      const R = await U({
        to: n.depositWalletAddress,
        amount: f,
        token: r,
        transactionType: J.SELL,
        data: ""
      });
    } catch (r) {
      const f = r.response;
      f && f.data && w.error(f.data);
    } finally {
      d(!1);
    }
  }
  const W = async (n) => {
    T("transactionCreated", n);
  };
  return /* @__PURE__ */ e.jsxs(
    _,
    {
      contentClassName: "p-6",
      containerClassName: "max-w-md",
      isOpen: o,
      onClose: () => E(),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: h(
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
            email: g,
            onCloseOverlay: () => {
              m(!1);
            },
            walletAddresses: u,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onInitiateDeposit: k,
            onUrlSignatureRequested: C
          }
        ),
        x && /* @__PURE__ */ e.jsx(
          z,
          {
            variant: "overlay",
            visible: x,
            email: g,
            walletAddresses: u,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onCloseOverlay: () => {
              p(!1);
            },
            onInitiateDeposit: k,
            onUrlSignatureRequested: C,
            onTransactionCreated: W
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs(
            y,
            {
              className: h(
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
              className: h(
                "font-semibold",
                "py-3 tablet:py-6",
                "text-xs tablet:text-sm"
              ),
              onClick: () => p(!0),
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
const ne = D, ie = M, oe = O, P = l.forwardRef(({ className: o, sideOffset: c = 4, ...i }, a) => /* @__PURE__ */ e.jsx(
  I,
  {
    ref: a,
    sideOffset: c,
    className: h(
      "z-50 overflow-visible rounded-md bg-black px-3 py-1.5 text-sm text-white",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "relative after:absolute after:content-[''] after:w-2 after:h-2 after:rotate-45 after:bg-black",
      "data-[side=bottom]:after:-top-1 data-[side=bottom]:after:left-1/2 data-[side=bottom]:after:-translate-x-1/2",
      "data-[side=top]:after:-bottom-1 data-[side=top]:after:left-1/2 data-[side=top]:after:-translate-x-1/2",
      "data-[side=left]:after:-right-1 data-[side=left]:after:top-1/2 data-[side=left]:after:-translate-y-1/2",
      "data-[side=right]:after:-left-1 data-[side=right]:after:top-1/2 data-[side=right]:after:-translate-y-1/2",
      o
    ),
    ...i
  }
));
P.displayName = I.displayName;
function S({ variant: o }) {
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
  }, { bgColor: i, text: a, width: t, textAlign: m, showIcon: x } = c[o];
  return /* @__PURE__ */ e.jsxs("div", { className: `absolute right-0 top-0 -translate-y-[50%] ${i} h-[40px] px-[20px] rounded-l-[20px]`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-[20px]" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-center items-center h-[22px]", children: [
      x && /* @__PURE__ */ e.jsx("img", { className: "w-[12px]", src: "/imgs/icons/fire.svg", alt: "fire" }),
      /* @__PURE__ */ e.jsx("div", { className: `${t} ${m} text-black text-xs font-medium leading-none`, children: a })
    ] })
  ] });
}
const re = ({
  activedPurchasedProductIds: o,
  handleRampOpenModal: c
}) => {
  const i = $(), a = K(), t = l.useRef(null), {
    setIsModalOpen: m,
    setDappInfo: x,
    isConnected: p,
    setDisplayUriInput: g
  } = se(), { checkNewProducts: b } = ae();
  l.useEffect(() => () => {
    t.current && window.clearTimeout(t.current);
  }, []);
  const u = (s) => o.some((j) => j === s.id) ? "active" : "";
  return {
    handleClick: async (s) => {
      if (u(s) !== "active") {
        i(`/marketplace/feature-detail/${s.id}`);
        return;
      }
      if (t.current = window.setTimeout(async () => {
        try {
          await A.post("/user/products/update-usage-status", {
            productId: s.id
          }), await a.invalidateQueries({ queryKey: ["userInfo"] }), await b();
        } catch (d) {
          console.error("Failed to mark product as viewed:", d);
        }
      }, 100), s.products && s.followOrder) {
        const d = new URLSearchParams();
        d.set("flowId", s.id), d.set("flowIndex", "0"), i(`${s.serviceUrl}?${d.toString()}`);
        return;
      }
      if (s.integrationPoints.includes("walletconnect")) {
        p ? window.open(s.serviceUrl, "_blank") : (x({
          name: s.name,
          url: s.serviceUrl
        }), g(!1), m(!0));
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
      s.serviceUrl.startsWith("http") ? window.open(s.serviceUrl, "_blank") : s.serviceUrl.startsWith("/") && i(s.serviceUrl);
    },
    checkPurchaseStatus: u
  };
};
function we({
  className: o,
  activedPurchasedProductIds: c,
  handleRampOpenModal: i,
  selectedCategory: a,
  ...t
}) {
  const { handleClick: m } = re({
    activedPurchasedProductIds: c,
    handleRampOpenModal: i
  });
  return /* @__PURE__ */ e.jsx(ne, { children: /* @__PURE__ */ e.jsxs(ie, { delayDuration: 100, children: [
    /* @__PURE__ */ e.jsx(oe, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: h([
          "laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]",
          "h-[200px] p-5 bg-white rounded-[20px] border-[1.5px] border-[#ebebeb] relative overflow-hidden",
          "hover:border-[#111111] cursor-pointer",
          o
        ]),
        onClick: () => m(t),
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
  be as E,
  we as P,
  ye as R,
  re as u
};
