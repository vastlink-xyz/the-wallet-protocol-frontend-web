import { j as e, r as A, t as $, v as L, w as W } from "./vendor-radix-DcfHr-b-.js";
import { r as c, j as V, b as z } from "./vendor-react-Cqw-pUgZ.js";
import { u as _, M as q, b as K, l as R } from "./main-69rK11_z.js";
import { c as y } from "./style-JRa9Y8f9.js";
import { a as C } from "./index-Ds-PW5Mo.js";
import { u as X } from "./MarketplaceProvider-Bq8s_aEe.js";
import { B as v } from "./button-CTahMASr.js";
import { a as G } from "./auth-B3K6SQ4G.js";
import { X as J, S as H, A as Q } from "./vendor-ui-utils-D8A1AlyV.js";
import { u as Y, B as N } from "./vendor-utils-BEOEHg0B.js";
import { T as Z } from "./TokenService-hl2efiyX.js";
import { L as I } from "./index-3BRCbPgh.js";
import { T as ee } from "./transaction-Dz01ddzF.js";
import { u as te } from "./useTransaction-DQu5gCTZ.js";
import { f as se } from "./vendor-web3-DM8VQNRv.js";
const ke = ({ className: i, onSearch: n, defaultValue: r = "", ...s }) => {
  const [t, o] = c.useState(r), x = (d) => {
    var m;
    o(d.target.value), (m = s.onChange) == null || m.call(s, d);
  }, p = () => {
    o("");
    const d = new Event("input", { bubbles: !0 }), m = document.querySelector("input");
    m.value = "", m.dispatchEvent(d);
  }, g = (d) => {
    d.key === "Enter" && (n == null || n(t));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: y(
    "w-[342px] tablet:w-[392px]",
    "flex items-center gap-2 bg-[#F5F5F5] rounded-full px-2 py-3",
    "focus-within:ring-1 focus-within:ring-black",
    i
  ), children: [
    /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/search.svg" }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search",
        value: t,
        onChange: x,
        onKeyDown: g,
        className: y(
          "bg-transparent w-full outline-none text-gray-700 placeholder-gray-400",
          "text-base leading-5"
        ),
        ...s
      }
    ),
    t && /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/icons/clear.svg",
        className: "cursor-pointer w-4 h-4",
        onClick: p
      }
    )
  ] });
}, ae = $, ne = L, ie = W, U = c.forwardRef(({ className: i, sideOffset: n = 4, ...r }, s) => /* @__PURE__ */ e.jsx(
  A,
  {
    ref: s,
    sideOffset: n,
    className: y(
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
    ...r
  }
));
U.displayName = A.displayName;
function T({ variant: i }) {
  const n = {
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
  }, { bgColor: r, text: s, width: t, textAlign: o, showIcon: x } = n[i];
  return /* @__PURE__ */ e.jsxs("div", { className: `absolute right-0 top-0 -translate-y-[50%] ${r} h-[40px] px-[20px] rounded-l-[20px]`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-[20px]" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-center items-center h-[22px]", children: [
      x && /* @__PURE__ */ e.jsx("img", { className: "w-[12px]", src: "/imgs/icons/fire.svg", alt: "fire" }),
      /* @__PURE__ */ e.jsx("div", { className: `${t} ${o} text-black text-xs font-medium leading-none`, children: s })
    ] })
  ] });
}
function re({
  className: i,
  activedPurchasedProductIds: n,
  handleRampOpenModal: r,
  selectedCategory: s,
  ...t
}) {
  const o = V(), {
    setIsModalOpen: x,
    setDappInfo: p,
    isConnected: g,
    setDisplayUriInput: d
  } = _(), { checkNewProducts: m } = X(), w = (a) => n.some((u) => u === a.id) ? "active" : "", b = async () => {
    if (w(t) !== "active") {
      o(`/marketplace/feature-detail/${t.id}`);
      return;
    }
    if (t.unread)
      try {
        await C.post("/user/products/mark-as-viewed", {
          productId: t.id
        }), await m();
      } catch (a) {
        console.error("Failed to mark product as viewed:", a);
      }
    if (t.products && t.followOrder) {
      const a = new URLSearchParams();
      a.set("flowId", t.id), a.set("flowIndex", "0"), o(`${t.serviceUrl}?${a.toString()}`);
      return;
    }
    if (t.integrationPoints.includes("walletconnect")) {
      g ? window.open(t.serviceUrl, "_blank") : (p({
        name: t.name,
        url: t.serviceUrl
      }), d(!1), x(!0));
      return;
    }
    if (t.vendor === "Moonpay") {
      r(t);
      return;
    }
    if (t.category === "Security") {
      window.open(t.website, "_blank");
      return;
    }
    t.serviceUrl.startsWith("http") ? window.open(t.serviceUrl, "_blank") : t.serviceUrl.startsWith("/") && o(t.serviceUrl);
  };
  return /* @__PURE__ */ e.jsx(ae, { children: /* @__PURE__ */ e.jsxs(ne, { delayDuration: 100, children: [
    /* @__PURE__ */ e.jsx(ie, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: y([
          "laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]",
          "h-[200px] p-5 bg-white rounded-[20px] border-[1.5px] border-[#ebebeb] relative overflow-hidden",
          "hover:border-[#111111] cursor-pointer",
          i
        ]),
        onClick: () => b(),
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
                onClick: (a) => {
                  a.stopPropagation(), window.open(t.website, "_blank");
                },
                children: t.vendor
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-5 right-5 h-4 flex items-center", children: [
            s === "Added" && /* @__PURE__ */ e.jsx("span", { className: "text-[#c4c4c4] text-sm font-medium leading-none inline-block mr-[10px]", children: "Added" }),
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
      U,
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
const oe = ({ isOpen: i, onClose: n, className: r, children: s }) => {
  const t = i ? /* @__PURE__ */ e.jsxs("div", { className: y(
    "fixed inset-0 z-50 flex items-center justify-center",
    r
  ), children: [
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black/80" }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative z-50 bg-background text-primary rounded-lg p-6 max-w-md w-full", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: n,
          className: "absolute top-2 right-2 text-primary hover:text-primary/80",
          children: /* @__PURE__ */ e.jsx(J, {})
        }
      ),
      s
    ] })
  ] }) : null;
  if (typeof window < "u")
    return z.createPortal(
      t,
      document.body
    );
};
function le({
  isOpen: i,
  product: n,
  onClose: r
}) {
  const { t: s } = Y(), [t, o] = c.useState(!1), [x, p] = c.useState(!1), [g, d] = c.useState(""), [m, w] = c.useState(""), [b, a] = c.useState(!1), j = c.useRef(), u = c.useRef(), { signTransaction: E, waitForTransactionExection: ce } = te();
  c.useEffect(() => {
    F();
  }, []);
  const F = async () => {
    const {
      username: l,
      address: f
    } = G.all();
    d(l || void 0);
    const S = JSON.stringify({
      eth: f,
      matic_polygon: f
    });
    w(S);
  }, k = async (l) => (await C.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(l)}`)).data.signature, M = () => {
    r(!1), o(!1), p(!1);
  }, P = async (l) => {
    if (a(!1), await O()) {
      const h = Z.getInstance().createToken(l.cryptoCurrency.code.toUpperCase());
      return j.current = h, await B(l), {
        // depositId: hash ? hash : '',
        depositId: ""
      };
    } else
      return {
        depositId: ""
      };
  }, O = (l) => new Promise((f) => {
    u.current = N(
      /* @__PURE__ */ e.jsxs("div", { className: "w-full text-primary", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold", children: s("/marketplace.moonpayRamp.depositConfirmation.title") }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-2", children: s("/marketplace.moonpayRamp.depositConfirmation.message") }),
        /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex justify-end", children: [
          /* @__PURE__ */ e.jsx(
            v,
            {
              className: "mr-2 px-4 py-2",
              variant: "ghost",
              onClick: () => {
                N.dismiss(u.current), f(!1);
              },
              children: s("/marketplace.moonpayRamp.depositConfirmation.cancelButton")
            }
          ),
          /* @__PURE__ */ e.jsx(
            v,
            {
              className: "px-4 py-2",
              onClick: async () => {
                N.dismiss(u.current), f(!0);
              },
              disabled: b,
              children: b ? /* @__PURE__ */ e.jsx(I, {}) : s("/marketplace.moonpayRamp.depositConfirmation.confirmButton")
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
  async function B(l) {
    try {
      const f = l.cryptoCurrency.code.toUpperCase(), h = se(BigInt(l.cryptoCurrencyAmountSmallestDenomination));
      R("amt", h), a(!0);
      const S = await E({
        to: l.depositWalletAddress,
        amount: h,
        token: f,
        transactionType: ee.SELL,
        data: ""
      });
    } catch (f) {
      const h = f.response;
      h && h.data && N.error(h.data);
    } finally {
      a(!1);
    }
  }
  const D = async (l) => {
    R("transactionCreated", l);
  };
  return /* @__PURE__ */ e.jsxs(
    oe,
    {
      className: y(
        "text-primary p-6"
      ),
      isOpen: i,
      onClose: () => M(),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-2xl font-bold mb-6", children: [
          /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/moonpay-logo.png", alt: "MoonPay Logo", width: 32, height: 32, className: "mr-3" }),
          s("/marketplace.moonpayRamp.modalTitle")
        ] }),
        t && /* @__PURE__ */ e.jsx(
          q,
          {
            variant: "overlay",
            visible: t,
            email: g,
            onCloseOverlay: () => {
              o(!1);
            },
            walletAddresses: m,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onInitiateDeposit: P,
            onUrlSignatureRequested: k
          }
        ),
        x && /* @__PURE__ */ e.jsx(
          K,
          {
            variant: "overlay",
            visible: x,
            email: g,
            walletAddresses: m,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onCloseOverlay: () => {
              p(!1);
            },
            onInitiateDeposit: P,
            onUrlSignatureRequested: k,
            onTransactionCreated: D
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs(
            v,
            {
              className: "font-semibold py-6",
              onClick: () => o(!0),
              children: [
                /* @__PURE__ */ e.jsx(H, { className: "mr-2" }),
                s("/marketplace.moonpayRamp.buyButton")
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            v,
            {
              className: "font-semibold py-6",
              onClick: () => p(!0),
              children: [
                /* @__PURE__ */ e.jsx(Q, { className: "mr-2" }),
                s("/marketplace.moonpayRamp.sellButton")
              ]
            }
          )
        ] }),
        b && /* @__PURE__ */ e.jsx(I, { fullscreen: !0, type: "breathe" })
      ]
    }
  );
}
function Pe({
  loading: i,
  products: n,
  empty: r,
  selectedCategory: s
}) {
  const [t, o] = c.useState([]), [x, p] = c.useState(!1), [g, d] = c.useState({});
  c.useEffect(() => {
    m();
  }, []);
  const m = async () => {
    const j = (await w()).filter((u) => u.status === "active").map((u) => u.productId);
    o(j);
  }, w = async () => (await C.get("/user/purchasedProducts")).data, b = (a) => {
    p(!0), d(a);
  };
  return i ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    n.length === 0 ? r : /* @__PURE__ */ e.jsx("div", { className: y([
      "flex flex-wrap mx-auto",
      "desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]",
      "desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6"
    ]), children: n.map((a) => /* @__PURE__ */ e.jsx(
      re,
      {
        ...a,
        activedPurchasedProductIds: t,
        handleRampOpenModal: b,
        selectedCategory: s,
        className: "mobile:mb-[40px] mb-6"
      },
      a.id
    )) }),
    /* @__PURE__ */ e.jsx(le, { isOpen: x, onClose: () => p(!1), product: g })
  ] });
}
function Se({
  text: i,
  imgSrc: n = "/imgs/icons/empty.png",
  className: r
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center ${r || ""}`, children: [
    /* @__PURE__ */ e.jsx("img", { className: "w-[186px]", src: n, alt: "empty" }),
    i && /* @__PURE__ */ e.jsx("div", { className: "tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8", children: i })
  ] });
}
export {
  Se as E,
  Pe as P,
  ke as S
};
