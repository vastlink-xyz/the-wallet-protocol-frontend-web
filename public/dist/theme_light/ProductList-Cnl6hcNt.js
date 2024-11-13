import { j as e, t as A, v as L, w as W, x as $ } from "./vendor-radix-CXAw23nV.js";
import { r as o, j as V, b as z } from "./vendor-react-U4DfHahV.js";
import { c as b, r as _, g as C, a as q, M as K, x as X, B as j, L as I, T as G, f as R, t as J } from "./main-aLpcFRdZ.js";
import { u as H } from "./MarketplaceProvider-CCBnEQPv.js";
import { X as Q, S as Y, A as Z } from "./vendor-ui-utils-DB1608yX.js";
import { u as ee, B as N } from "./vendor-utils-y1QZaLEY.js";
import { u as te } from "./useTransaction-Db6jmW6G.js";
import { f as se } from "./vendor-web3-BOznxXNv.js";
const be = ({ className: l, onSearch: i, defaultValue: c = "", ...s }) => {
  const [t, n] = o.useState(c), f = (d) => {
    var m;
    n(d.target.value), (m = s.onChange) == null || m.call(s, d);
  }, p = () => {
    n("");
    const d = new Event("input", { bubbles: !0 }), m = document.querySelector("input");
    m.value = "", m.dispatchEvent(d);
  }, g = (d) => {
    d.key === "Enter" && (i == null || i(t));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: b(
    "w-[342px] tablet:w-[392px]",
    "flex items-center gap-2 bg-[#F5F5F5] rounded-full px-2 py-3",
    "focus-within:ring-1 focus-within:ring-black",
    l
  ), children: [
    /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/search.svg" }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search",
        value: t,
        onChange: f,
        onKeyDown: g,
        className: b(
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
}, ae = L, ne = W, ie = $, U = o.forwardRef(({ className: l, sideOffset: i = 4, ...c }, s) => /* @__PURE__ */ e.jsx(
  A,
  {
    ref: s,
    sideOffset: i,
    className: b(
      "z-50 overflow-visible rounded-md bg-black px-3 py-1.5 text-sm text-white",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "relative after:absolute after:content-[''] after:w-2 after:h-2 after:rotate-45 after:bg-black",
      "data-[side=bottom]:after:-top-1 data-[side=bottom]:after:left-1/2 data-[side=bottom]:after:-translate-x-1/2",
      "data-[side=top]:after:-bottom-1 data-[side=top]:after:left-1/2 data-[side=top]:after:-translate-x-1/2",
      "data-[side=left]:after:-right-1 data-[side=left]:after:top-1/2 data-[side=left]:after:-translate-y-1/2",
      "data-[side=right]:after:-left-1 data-[side=right]:after:top-1/2 data-[side=right]:after:-translate-y-1/2",
      l
    ),
    ...c
  }
));
U.displayName = A.displayName;
function T({ variant: l }) {
  const i = {
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
  }, { bgColor: c, text: s, width: t, textAlign: n, showIcon: f } = i[l];
  return /* @__PURE__ */ e.jsxs("div", { className: `absolute right-0 top-0 -translate-y-[50%] ${c} h-[40px] px-[20px] rounded-l-[20px]`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-[20px]" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-center items-center h-[22px]", children: [
      f && /* @__PURE__ */ e.jsx("img", { className: "w-[12px]", src: "/imgs/icons/fire.svg", alt: "fire" }),
      /* @__PURE__ */ e.jsx("div", { className: `${t} ${n} text-black text-xs font-medium leading-none`, children: s })
    ] })
  ] });
}
function re({
  className: l,
  activedPurchasedProductIds: i,
  handleRampOpenModal: c,
  selectedCategory: s,
  ...t
}) {
  const n = V(), {
    setIsModalOpen: f,
    setDappInfo: p,
    isConnected: g,
    setDisplayUriInput: d
  } = _(), { checkNewProducts: m } = H(), y = (a) => i.some((u) => u === a.id) ? "active" : "", w = async () => {
    if (y(t) !== "active") {
      n(`/marketplace/feature-detail/${t.id}`);
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
      a.set("flowId", t.id), a.set("flowIndex", "0"), n(`${t.serviceUrl}?${a.toString()}`);
      return;
    }
    if (t.integrationPoints.includes("walletconnect")) {
      g ? window.open(t.serviceUrl, "_blank") : (p({
        name: t.name,
        url: t.serviceUrl
      }), d(!1), f(!0));
      return;
    }
    if (t.vendor === "Moonpay") {
      c(t);
      return;
    }
    if (t.integrationPoints.includes("theme")) {
      window.location.href = t.serviceUrl;
      return;
    }
    if (t.category === "Security") {
      window.open(t.website, "_blank");
      return;
    }
    t.serviceUrl.startsWith("http") ? window.open(t.serviceUrl, "_blank") : t.serviceUrl.startsWith("/") && n(t.serviceUrl);
  };
  return /* @__PURE__ */ e.jsx(ae, { children: /* @__PURE__ */ e.jsxs(ne, { delayDuration: 100, children: [
    /* @__PURE__ */ e.jsx(ie, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: b([
          "laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]",
          "h-[200px] p-5 bg-white rounded-[20px] border-[1.5px] border-[#ebebeb] relative overflow-hidden",
          "hover:border-[#111111] cursor-pointer",
          l
        ]),
        onClick: () => w(),
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
const oe = ({ isOpen: l, onClose: i, className: c, overlayClassName: s, children: t }) => {
  const n = l ? /* @__PURE__ */ e.jsxs("div", { className: b(
    "fixed inset-0 z-50 flex items-center justify-center",
    c
  ), children: [
    /* @__PURE__ */ e.jsx("div", { className: b(
      "fixed inset-0 bg-black/80",
      s
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative z-50 bg-background text-primary rounded-lg p-6 max-w-md w-full", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: i,
          className: "absolute top-2 right-2 text-primary hover:text-primary/80",
          children: /* @__PURE__ */ e.jsx(Q, {})
        }
      ),
      t
    ] })
  ] }) : null;
  if (typeof window < "u")
    return z.createPortal(
      n,
      document.body
    );
};
function le({
  isOpen: l,
  product: i,
  onClose: c
}) {
  const { t: s } = ee(), [t, n] = o.useState(!1), [f, p] = o.useState(!1), [g, d] = o.useState(""), [m, y] = o.useState(""), [w, a] = o.useState(!1), v = o.useRef(), u = o.useRef(), { signTransaction: F, waitForTransactionExection: ce } = te();
  o.useEffect(() => {
    M();
  }, []);
  const M = async () => {
    const {
      username: r,
      address: x
    } = q.all();
    d(r || void 0);
    const S = JSON.stringify({
      eth: x,
      matic_polygon: x
    });
    y(S);
  }, k = async (r) => (await C.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(r)}`)).data.signature, O = () => {
    c(!1), n(!1), p(!1);
  }, P = async (r) => {
    if (a(!1), await E()) {
      const h = G.getInstance().createToken(r.cryptoCurrency.code.toUpperCase());
      return v.current = h, await B(r), {
        // depositId: hash ? hash : '',
        depositId: ""
      };
    } else
      return {
        depositId: ""
      };
  }, E = (r) => new Promise((x) => {
    u.current = N(
      /* @__PURE__ */ e.jsxs("div", { className: "w-full text-primary", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold", children: s("/marketplace.moonpayRamp.depositConfirmation.title") }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-2", children: s("/marketplace.moonpayRamp.depositConfirmation.message") }),
        /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex justify-end", children: [
          /* @__PURE__ */ e.jsx(
            j,
            {
              className: "mr-2 px-4 py-2",
              variant: "ghost",
              onClick: () => {
                N.dismiss(u.current), x(!1);
              },
              children: s("/marketplace.moonpayRamp.depositConfirmation.cancelButton")
            }
          ),
          /* @__PURE__ */ e.jsx(
            j,
            {
              className: "px-4 py-2",
              onClick: async () => {
                N.dismiss(u.current), x(!0);
              },
              disabled: w,
              children: w ? /* @__PURE__ */ e.jsx(I, {}) : s("/marketplace.moonpayRamp.depositConfirmation.confirmButton")
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
  async function B(r) {
    try {
      const x = r.cryptoCurrency.code.toUpperCase(), h = se(BigInt(r.cryptoCurrencyAmountSmallestDenomination));
      R("amt", h), a(!0);
      const S = await F({
        to: r.depositWalletAddress,
        amount: h,
        token: x,
        transactionType: J.SELL,
        data: ""
      });
    } catch (x) {
      const h = x.response;
      h && h.data && N.error(h.data);
    } finally {
      a(!1);
    }
  }
  const D = async (r) => {
    R("transactionCreated", r);
  };
  return /* @__PURE__ */ e.jsxs(
    oe,
    {
      className: b(
        "text-primary p-6"
      ),
      isOpen: l,
      onClose: () => O(),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-2xl font-bold mb-6", children: [
          /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/moonpay-logo.png", alt: "MoonPay Logo", width: 32, height: 32, className: "mr-3" }),
          s("/marketplace.moonpayRamp.modalTitle")
        ] }),
        t && /* @__PURE__ */ e.jsx(
          K,
          {
            variant: "overlay",
            visible: t,
            email: g,
            onCloseOverlay: () => {
              n(!1);
            },
            walletAddresses: m,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onInitiateDeposit: P,
            onUrlSignatureRequested: k
          }
        ),
        f && /* @__PURE__ */ e.jsx(
          X,
          {
            variant: "overlay",
            visible: f,
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
            j,
            {
              className: "font-semibold py-6",
              onClick: () => n(!0),
              children: [
                /* @__PURE__ */ e.jsx(Y, { className: "mr-2" }),
                s("/marketplace.moonpayRamp.buyButton")
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            j,
            {
              className: "font-semibold py-6",
              onClick: () => p(!0),
              children: [
                /* @__PURE__ */ e.jsx(Z, { className: "mr-2" }),
                s("/marketplace.moonpayRamp.sellButton")
              ]
            }
          )
        ] }),
        w && /* @__PURE__ */ e.jsx(I, { fullscreen: !0, type: "breathe" })
      ]
    }
  );
}
function we({
  loading: l,
  products: i,
  empty: c,
  selectedCategory: s
}) {
  const [t, n] = o.useState([]), [f, p] = o.useState(!1), [g, d] = o.useState({});
  o.useEffect(() => {
    m();
  }, []);
  const m = async () => {
    const v = (await y()).filter((u) => u.status === "active").map((u) => u.productId);
    n(v);
  }, y = async () => (await C.get("/user/purchasedProducts")).data, w = (a) => {
    p(!0), d(a);
  };
  return l ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    i.length === 0 ? c : /* @__PURE__ */ e.jsx("div", { className: b([
      "flex flex-wrap mx-auto",
      "desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]",
      "desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6"
    ]), children: i.map((a) => /* @__PURE__ */ e.jsx(
      re,
      {
        ...a,
        activedPurchasedProductIds: t,
        handleRampOpenModal: w,
        selectedCategory: s,
        className: "mobile:mb-[40px] mb-6"
      },
      a.id
    )) }),
    /* @__PURE__ */ e.jsx(le, { isOpen: f, onClose: () => p(!1), product: g })
  ] });
}
export {
  we as P,
  be as S
};
