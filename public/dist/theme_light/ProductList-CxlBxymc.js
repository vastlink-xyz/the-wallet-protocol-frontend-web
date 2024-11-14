import { j as e } from "./vendor-radix-CXAw23nV.js";
import { r as n, b as F } from "./vendor-react-U4DfHahV.js";
import { c as h, a as L, M as O, x as D, B as b, L as S, f as U, T as W, g as R, v as V } from "./main-OpUhS-4m.js";
import { P as q } from "./index-DaCT8V52.js";
import { X as $, S as z, A as K } from "./vendor-ui-utils-DB1608yX.js";
import { u as X, B as w } from "./vendor-utils-CQorlrD-.js";
import { u as G } from "./useTransaction-DYOvkNm2.js";
import { f as J } from "./vendor-web3-BqNTAT7x.js";
import { u as _ } from "./MarketplaceProvider-Cq_eOz3F.js";
const ie = ({ className: p, onSearch: d, defaultValue: f = "", ...t }) => {
  const [l, i] = n.useState(f), g = (o) => {
    var a;
    i(o.target.value), (a = t.onChange) == null || a.call(t, o);
  }, u = () => {
    i("");
    const o = new Event("input", { bubbles: !0 }), a = document.querySelector("input");
    a.value = "", a.dispatchEvent(o);
  }, y = (o) => {
    o.key === "Enter" && (d == null || d(l));
  };
  return /* @__PURE__ */ e.jsxs("div", { className: h(
    "w-[342px] tablet:w-[392px]",
    "flex items-center gap-2 bg-[#F5F5F5] rounded-full px-2 py-3",
    "focus-within:ring-1 focus-within:ring-black",
    p
  ), children: [
    /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/search.svg" }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "text",
        placeholder: "Search",
        value: l,
        onChange: g,
        onKeyDown: y,
        className: h(
          "bg-transparent w-full outline-none text-gray-700 placeholder-gray-400",
          "text-base leading-5"
        ),
        ...t
      }
    ),
    l && /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/icons/clear.svg",
        className: "cursor-pointer w-4 h-4",
        onClick: u
      }
    )
  ] });
}, H = ({ isOpen: p, onClose: d, className: f, overlayClassName: t, children: l }) => {
  const i = p ? /* @__PURE__ */ e.jsxs("div", { className: h(
    "fixed inset-0 z-50 flex items-center justify-center",
    f
  ), children: [
    /* @__PURE__ */ e.jsx("div", { className: h(
      "fixed inset-0 bg-black/80",
      t
    ) }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative z-50 bg-background text-primary rounded-lg p-6 max-w-md w-full", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: d,
          className: "absolute top-2 right-2 text-primary hover:text-primary/80",
          children: /* @__PURE__ */ e.jsx($, {})
        }
      ),
      l
    ] })
  ] }) : null;
  if (typeof window < "u")
    return F.createPortal(
      i,
      document.body
    );
};
function Q({
  isOpen: p,
  product: d,
  onClose: f
}) {
  const { t } = X(), [l, i] = n.useState(!1), [g, u] = n.useState(!1), [y, o] = n.useState(""), [a, C] = n.useState(""), [c, x] = n.useState(!1), I = n.useRef(), j = n.useRef(), { signTransaction: P, waitForTransactionExection: Y } = G();
  n.useEffect(() => {
    T();
  }, []);
  const T = async () => {
    const {
      username: s,
      address: r
    } = L.all();
    o(s || void 0);
    const N = JSON.stringify({
      eth: r,
      matic_polygon: r
    });
    C(N);
  }, v = async (s) => (await U.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(s)}`)).data.signature, A = () => {
    f(!1), i(!1), u(!1);
  }, k = async (s) => {
    if (x(!1), await E()) {
      const m = W.getInstance().createToken(s.cryptoCurrency.code.toUpperCase());
      return I.current = m, await B(s), {
        // depositId: hash ? hash : '',
        depositId: ""
      };
    } else
      return {
        depositId: ""
      };
  }, E = (s) => new Promise((r) => {
    j.current = w(
      /* @__PURE__ */ e.jsxs("div", { className: "w-full text-primary", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold", children: t("/marketplace.moonpayRamp.depositConfirmation.title") }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-2", children: t("/marketplace.moonpayRamp.depositConfirmation.message") }),
        /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex justify-end", children: [
          /* @__PURE__ */ e.jsx(
            b,
            {
              className: "mr-2 px-4 py-2",
              variant: "ghost",
              onClick: () => {
                w.dismiss(j.current), r(!1);
              },
              children: t("/marketplace.moonpayRamp.depositConfirmation.cancelButton")
            }
          ),
          /* @__PURE__ */ e.jsx(
            b,
            {
              className: "px-4 py-2",
              onClick: async () => {
                w.dismiss(j.current), r(!0);
              },
              disabled: c,
              children: c ? /* @__PURE__ */ e.jsx(S, {}) : t("/marketplace.moonpayRamp.depositConfirmation.confirmButton")
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
  async function B(s) {
    try {
      const r = s.cryptoCurrency.code.toUpperCase(), m = J(BigInt(s.cryptoCurrencyAmountSmallestDenomination));
      R("amt", m), x(!0);
      const N = await P({
        to: s.depositWalletAddress,
        amount: m,
        token: r,
        transactionType: V.SELL,
        data: ""
      });
    } catch (r) {
      const m = r.response;
      m && m.data && w.error(m.data);
    } finally {
      x(!1);
    }
  }
  const M = async (s) => {
    R("transactionCreated", s);
  };
  return /* @__PURE__ */ e.jsxs(
    H,
    {
      className: h(
        "text-primary p-6"
      ),
      isOpen: p,
      onClose: () => A(),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-2xl font-bold mb-6", children: [
          /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/moonpay-logo.png", alt: "MoonPay Logo", width: 32, height: 32, className: "mr-3" }),
          t("/marketplace.moonpayRamp.modalTitle")
        ] }),
        l && /* @__PURE__ */ e.jsx(
          O,
          {
            variant: "overlay",
            visible: l,
            email: y,
            onCloseOverlay: () => {
              i(!1);
            },
            walletAddresses: a,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onInitiateDeposit: k,
            onUrlSignatureRequested: v
          }
        ),
        g && /* @__PURE__ */ e.jsx(
          D,
          {
            variant: "overlay",
            visible: g,
            email: y,
            walletAddresses: a,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onCloseOverlay: () => {
              u(!1);
            },
            onInitiateDeposit: k,
            onUrlSignatureRequested: v,
            onTransactionCreated: M
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs(
            b,
            {
              className: "font-semibold py-6",
              onClick: () => i(!0),
              children: [
                /* @__PURE__ */ e.jsx(z, { className: "mr-2" }),
                t("/marketplace.moonpayRamp.buyButton")
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            b,
            {
              className: "font-semibold py-6",
              onClick: () => u(!0),
              children: [
                /* @__PURE__ */ e.jsx(K, { className: "mr-2" }),
                t("/marketplace.moonpayRamp.sellButton")
              ]
            }
          )
        ] }),
        c && /* @__PURE__ */ e.jsx(S, { fullscreen: !0, type: "breathe" })
      ]
    }
  );
}
function ce({
  loading: p,
  products: d,
  empty: f,
  selectedCategory: t
}) {
  const [l, i] = n.useState([]), [g, u] = n.useState(!1), [y, o] = n.useState({}), { data: a } = _();
  n.useEffect(() => {
    if (a && a.purchasedProducts) {
      const c = a.purchasedProducts.filter((x) => x.status === "active").map((x) => x.productId);
      i(c);
    }
  }, [a]);
  const C = (c) => {
    u(!0), o(c);
  };
  return p ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    d.length === 0 ? f : /* @__PURE__ */ e.jsx("div", { className: h([
      "flex flex-wrap mx-auto",
      "desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]",
      "desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6"
    ]), children: d.map((c) => /* @__PURE__ */ e.jsx(
      q,
      {
        ...c,
        activedPurchasedProductIds: l,
        handleRampOpenModal: C,
        selectedCategory: t,
        className: "mobile:mb-[40px] mb-6"
      },
      c.id
    )) }),
    /* @__PURE__ */ e.jsx(Q, { isOpen: g, onClose: () => u(!1), product: y })
  ] });
}
export {
  ce as P,
  ie as S
};
