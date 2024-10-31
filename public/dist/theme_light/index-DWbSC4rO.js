import { j as e, Z as A, $ as L, a0 as W, a1 as V } from "./vendor-radix-C4qF-rbz.js";
import { a as r, h as z, c as _ } from "./vendor-react-KTk2TwQ7.js";
import { c as b, i as k, j as q, k as K, a as X, M as G, m as H, B as j, L as R, T as J, l as I, n as Z } from "./main-Cnoo90sq.js";
import { X as Q, S as Y, A as ee } from "./vendor-ui-utils-C5-iOwQy.js";
import { u as te, B as N } from "./vendor-utils-D1d8vwmL.js";
import { f as se } from "./vendor-web3-CjewkP9U.js";
const ge = ({ className: a, onSearch: n, defaultValue: i = "", ...s }) => {
  const [t, o] = r.useState(i), c = (d) => {
    var u;
    o(d.target.value), (u = s.onChange) == null || u.call(s, d);
  }, x = () => {
    o("");
    const d = new Event("input", { bubbles: !0 }), u = document.querySelector("input");
    u.value = "", u.dispatchEvent(d);
  }, g = (d) => {
    d.key === "Enter" && (n == null || n(t));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: b(
    "w-[342px] tablet:w-[392px]",
    "flex items-center gap-2 bg-[#F5F5F5] rounded-full px-2 py-3",
    "focus-within:ring-1 focus-within:ring-black",
    a
  ), children: [
    /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/search.svg" }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search",
        value: t,
        onChange: c,
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
        onClick: x
      }
    )
  ] });
}, ae = L, ne = W, re = V, M = r.forwardRef(({ className: a, sideOffset: n = 4, ...i }, s) => /* @__PURE__ */ e.jsx(
  A,
  {
    ref: s,
    sideOffset: n,
    className: b(
      "z-50 overflow-visible rounded-md bg-black px-3 py-1.5 text-sm text-white",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "relative after:absolute after:content-[''] after:w-2 after:h-2 after:rotate-45 after:bg-black",
      "data-[side=bottom]:after:-top-1 data-[side=bottom]:after:left-1/2 data-[side=bottom]:after:-translate-x-1/2",
      "data-[side=top]:after:-bottom-1 data-[side=top]:after:left-1/2 data-[side=top]:after:-translate-x-1/2",
      "data-[side=left]:after:-right-1 data-[side=left]:after:top-1/2 data-[side=left]:after:-translate-y-1/2",
      "data-[side=right]:after:-left-1 data-[side=right]:after:top-1/2 data-[side=right]:after:-translate-y-1/2",
      a
    ),
    ...i
  }
));
M.displayName = A.displayName;
function T({ variant: a }) {
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
  }, { bgColor: i, text: s, width: t, textAlign: o, showIcon: c } = n[a];
  return /* @__PURE__ */ e.jsxs("div", { className: `absolute right-0 top-0 -translate-y-[50%] ${i} h-[40px] px-[20px] rounded-l-[20px]`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-[20px]" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-center items-center h-[22px]", children: [
      c && /* @__PURE__ */ e.jsx("img", { className: "w-[12px]", src: "/imgs/icons/fire.svg", alt: "fire" }),
      /* @__PURE__ */ e.jsx("div", { className: `${t} ${o} text-black text-xs font-medium leading-none`, children: s })
    ] })
  ] });
}
const U = r.createContext(void 0);
function be({ children: a }) {
  const [n, i] = r.useState(!1), s = r.useCallback(async () => {
    try {
      const c = (await k.get("/user/purchasedProducts")).data.some(
        (x) => x.status === "active" && x.unread
      );
      i(c);
    } catch (t) {
      console.error("Failed to check new products:", t);
    }
  }, []);
  return /* @__PURE__ */ e.jsx(U.Provider, { value: { checkNewProducts: s, hasNewProducts: n }, children: a });
}
const ie = () => {
  const a = r.useContext(U);
  if (a === void 0)
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return a;
};
function oe({
  className: a,
  activedPurchasedProductIds: n,
  handleRampOpenModal: i,
  selectedCategory: s,
  ...t
}) {
  const o = z(), {
    setIsModalOpen: c,
    setDappInfo: x,
    isConnected: g,
    setDisplayUriInput: d
  } = q(), { checkNewProducts: u } = ie(), y = (m) => n.some((v) => v === m.id) ? "active" : "", f = async () => {
    if (y(t) !== "active") {
      o(`/marketplace/feature-detail/${t.id}`);
      return;
    }
    if (t.unread)
      try {
        await k.post("/user/products/mark-as-viewed", {
          productId: t.id
        }), await u();
      } catch (m) {
        console.error("Failed to mark product as viewed:", m);
      }
    if (t.products && t.followOrder) {
      const m = new URLSearchParams();
      m.set("flowId", t.id), m.set("flowIndex", "0"), o(`${t.serviceUrl}?${m.toString()}`);
      return;
    }
    if (t.integrationPoints.includes("walletconnect")) {
      g ? window.open(t.serviceUrl, "_blank") : (x({
        name: t.name,
        url: t.serviceUrl
      }), d(!1), c(!0));
      return;
    }
    if (t.vendor === "Moonpay") {
      i(t);
      return;
    }
    t.serviceUrl.startsWith("http") ? window.open(t.serviceUrl, "_blank") : t.serviceUrl.startsWith("/") && o(t.serviceUrl);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: b([
        "laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]",
        "h-[200px] p-5 bg-white rounded-[20px] border border-[#ebebeb] relative overflow-hidden",
        "hover:border-[#111111] cursor-pointer",
        a
      ]),
      onClick: () => f(),
      children: [
        t.isFeatured ? /* @__PURE__ */ e.jsx(T, { variant: "featured" }) : t.price === 0 && /* @__PURE__ */ e.jsx(T, { variant: "free" }),
        /* @__PURE__ */ e.jsxs("div", { className: "justify-start items-center gap-4 inline-flex mb-5", children: [
          /* @__PURE__ */ e.jsx("img", { src: t.logoUrl, alt: t.name, className: "w-[52px] h-[52px] object-contain rounded-full" }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-col justify-center items-start inline-flex", children: [
            /* @__PURE__ */ e.jsx("div", { className: "text-[#111111] text-base font-bold leading-normal", children: t.name }),
            /* @__PURE__ */ e.jsx("div", { className: "h-4 p-0.5 bg-[#f2f2f2] rounded-sm justify-center items-center gap-2.5 inline-flex", children: /* @__PURE__ */ e.jsx("div", { className: "text-[#4f4f4f] text-[10px] font-normal leading-none", children: t.category }) })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(ae, { children: /* @__PURE__ */ e.jsxs(ne, { children: [
          /* @__PURE__ */ e.jsx(re, { asChild: !0, children: /* @__PURE__ */ e.jsx("div", { className: "self-stretch max-h-[32px] text-[#828282] text-sm font-normal leading-4 line-clamp-2", children: t.description }) }),
          /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx("p", { className: "max-w-[300px] break-words", children: t.description }) })
        ] }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "h-4 flex items-center mt-1 mb-5", children: [
          /* @__PURE__ */ e.jsx("span", { className: "text-[#979797] text-sm font-normal inline-block mr-1", children: "Developer:" }),
          /* @__PURE__ */ e.jsx(
            "span",
            {
              className: "text-black text-sm font-bold underline cursor-pointer",
              onClick: () => {
                window.open(t.website, "_blank");
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
            t.discount ? t.price * (t.discount / 100) : t.price,
            " V"
          ] }),
          t.discount && /* @__PURE__ */ e.jsx("div", { className: "ml-1 h-4 px-2 py-[5px] bg-black/5 rounded-[54px] justify-center items-center gap-2.5 inline-flex", children: /* @__PURE__ */ e.jsxs("div", { className: "text-center text-black text-xs font-medium leading-none", children: [
            "-",
            100 - t.discount,
            "%"
          ] }) })
        ] })
      ]
    }
  );
}
const le = ({ isOpen: a, onClose: n, className: i, children: s }) => {
  const t = a ? /* @__PURE__ */ e.jsxs("div", { className: b(
    "fixed inset-0 z-50 flex items-center justify-center",
    i
  ), children: [
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black/80" }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative z-50 bg-background text-primary rounded-lg p-6 max-w-md w-full", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: n,
          className: "absolute top-2 right-2 text-primary hover:text-primary/80",
          children: /* @__PURE__ */ e.jsx(Q, {})
        }
      ),
      s
    ] })
  ] }) : null;
  if (typeof window < "u")
    return _.createPortal(
      t,
      document.body
    );
};
function ce({
  isOpen: a,
  product: n,
  onClose: i
}) {
  const { t: s } = te(), [t, o] = r.useState(!1), [c, x] = r.useState(!1), [g, d] = r.useState(""), [u, y] = r.useState(""), [f, m] = r.useState(!1), w = r.useRef(), v = r.useRef(), { signTransaction: E, waitForTransactionExection: de } = K();
  r.useEffect(() => {
    F();
  }, []);
  const F = async () => {
    const {
      username: l,
      address: p
    } = X.all();
    d(l || void 0);
    const S = JSON.stringify({
      eth: p,
      matic_polygon: p
    });
    y(S);
  }, C = async (l) => (await k.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(l)}`)).data.signature, $ = () => {
    i(!1), o(!1), x(!1);
  }, P = async (l) => {
    if (m(!1), await B()) {
      const h = J.getInstance().createToken(l.cryptoCurrency.code.toUpperCase());
      return w.current = h, await O(l), {
        // depositId: hash ? hash : '',
        depositId: ""
      };
    } else
      return {
        depositId: ""
      };
  }, B = (l) => new Promise((p) => {
    v.current = N(
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
                N.dismiss(v.current), p(!1);
              },
              children: s("/marketplace.moonpayRamp.depositConfirmation.cancelButton")
            }
          ),
          /* @__PURE__ */ e.jsx(
            j,
            {
              className: "px-4 py-2",
              onClick: async () => {
                N.dismiss(v.current), p(!0);
              },
              disabled: f,
              children: f ? /* @__PURE__ */ e.jsx(R, {}) : s("/marketplace.moonpayRamp.depositConfirmation.confirmButton")
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
  async function O(l) {
    try {
      const p = l.cryptoCurrency.code.toUpperCase(), h = se(BigInt(l.cryptoCurrencyAmountSmallestDenomination));
      I("amt", h), m(!0);
      const S = await E({
        to: l.depositWalletAddress,
        amount: h,
        token: p,
        transactionType: Z.SELL,
        data: ""
      });
    } catch (p) {
      const h = p.response;
      h && h.data && N.error(h.data);
    } finally {
      m(!1);
    }
  }
  const D = async (l) => {
    I("transactionCreated", l);
  };
  return /* @__PURE__ */ e.jsxs(
    le,
    {
      className: b(
        "text-primary p-6"
      ),
      isOpen: a,
      onClose: () => $(),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-2xl font-bold mb-6", children: [
          /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/moonpay-logo.png", alt: "MoonPay Logo", width: 32, height: 32, className: "mr-3" }),
          s("/marketplace.moonpayRamp.modalTitle")
        ] }),
        t && /* @__PURE__ */ e.jsx(
          G,
          {
            variant: "overlay",
            visible: t,
            email: g,
            onCloseOverlay: () => {
              o(!1);
            },
            walletAddresses: u,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onInitiateDeposit: P,
            onUrlSignatureRequested: C
          }
        ),
        c && /* @__PURE__ */ e.jsx(
          H,
          {
            variant: "overlay",
            visible: c,
            email: g,
            walletAddresses: u,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onCloseOverlay: () => {
              x(!1);
            },
            onInitiateDeposit: P,
            onUrlSignatureRequested: C,
            onTransactionCreated: D
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs(
            j,
            {
              className: "font-semibold py-6",
              onClick: () => o(!0),
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
              onClick: () => x(!0),
              children: [
                /* @__PURE__ */ e.jsx(ee, { className: "mr-2" }),
                s("/marketplace.moonpayRamp.sellButton")
              ]
            }
          )
        ] }),
        f && /* @__PURE__ */ e.jsx(R, { fullscreen: !0, type: "breathe" })
      ]
    }
  );
}
function we({
  products: a,
  empty: n,
  selectedCategory: i
}) {
  const [s, t] = r.useState([]), [o, c] = r.useState(!1), [x, g] = r.useState({});
  r.useEffect(() => {
    d();
  }, []);
  const d = async () => {
    const m = (await u()).filter((w) => w.status === "active").map((w) => w.productId);
    t(m);
  }, u = async () => (await k.get("/user/purchasedProducts")).data, y = (f) => {
    c(!0), g(f);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    a.length === 0 ? n : /* @__PURE__ */ e.jsx("div", { className: b([
      "flex flex-wrap mx-auto",
      "desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]",
      "desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6"
    ]), children: a.map((f) => /* @__PURE__ */ e.jsx(
      oe,
      {
        ...f,
        activedPurchasedProductIds: s,
        handleRampOpenModal: y,
        selectedCategory: i,
        className: "mobile:mb-[40px] mb-6"
      },
      f.id
    )) }),
    /* @__PURE__ */ e.jsx(ce, { isOpen: o, onClose: () => c(!1), product: x })
  ] });
}
function ye({
  text: a,
  imgSrc: n = "/imgs/icons/empty.png",
  className: i
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center ${i || ""}`, children: [
    /* @__PURE__ */ e.jsx("img", { className: "w-[186px]", src: n, alt: "empty" }),
    a && /* @__PURE__ */ e.jsx("div", { className: "tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8", children: a })
  ] });
}
export {
  ye as E,
  be as M,
  we as P,
  ge as S,
  ie as u
};
