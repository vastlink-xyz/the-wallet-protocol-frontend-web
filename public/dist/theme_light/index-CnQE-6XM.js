import { j as e, E as V, F as z, G, H as Q } from "./vendor-radix-AvjOLIap.js";
import { a as o, l as H } from "./vendor-react-DSEtE0wE.js";
import { a as J, ae as K, c as y, af as X, ag as Y, B as v, V as Z, f as L, t as ee, L as te, g as A, ah as ae, o as se, k as ne, h as ie, ai as oe } from "./main-CXGbnggO.js";
import { u as re, B as u } from "./vendor-utils-Q0yJ_o1H.js";
import { u as le } from "./useTransaction-CYr4Hphk.js";
import { L as ce } from "./index-DHGdJzDo.js";
import { S as de, A as me } from "./vendor-ui-utils-CGOon9_P.js";
import { k as fe } from "./vendor-web3-CQEmmIwE.js";
import { u as xe, a as pe } from "./MarketplaceProvider-qEQl-lbf.js";
function Ie({
  text: r,
  imgSrc: d = "/imgs/icons/empty.png",
  className: l
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center ${l || ""}`, children: [
    /* @__PURE__ */ e.jsx("img", { className: "w-[186px]", src: d, alt: "empty" }),
    r && /* @__PURE__ */ e.jsx("div", { className: "tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8", children: r })
  ] });
}
function Ae({
  isOpen: r,
  product: d,
  onClose: l
}) {
  const { t: n } = re(), [t, f] = o.useState(!1), [p, g] = o.useState(!1), [w, j] = o.useState(""), [b, C] = o.useState(""), [a, m] = o.useState(!1), h = o.useRef(), N = o.useRef(), { signTransaction: U, waitForTransactionExection: ye } = le(), [E, k] = o.useState(!1), [M, S] = o.useState(!1), [T, B] = o.useState(null);
  o.useEffect(() => {
    F();
  }, []);
  const F = async () => {
    const {
      username: s,
      address: i
    } = J.all();
    j(s || void 0);
    const x = JSON.stringify({
      eth: i,
      matic_polygon: i
    });
    C(x);
  }, R = async (s) => (await L.get(`/thirdparty/sign-moonpay-params?url=${encodeURIComponent(s)}`)).data.signature, D = () => {
    l(!1), f(!1), g(!1);
  }, I = async (s) => {
    if (m(!1), await W()) {
      const c = ee.getToken(s.cryptoCurrency.code.toUpperCase());
      return h.current = c, await $(s), {
        // depositId: hash ? hash : '',
        depositId: ""
      };
    } else
      return {
        depositId: ""
      };
  }, W = (s) => new Promise((i) => {
    N.current = u(
      /* @__PURE__ */ e.jsxs("div", { className: "w-full text-primary", children: [
        /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold", children: n("/marketplace.moonpayRamp.depositConfirmation.title") }),
        /* @__PURE__ */ e.jsx("p", { className: "mt-2", children: n("/marketplace.moonpayRamp.depositConfirmation.message") }),
        /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex justify-end", children: [
          /* @__PURE__ */ e.jsx(
            v,
            {
              className: "mr-2 px-4 py-2",
              variant: "ghost",
              onClick: () => {
                u.dismiss(N.current), i(!1);
              },
              children: n("/marketplace.moonpayRamp.depositConfirmation.cancelButton")
            }
          ),
          /* @__PURE__ */ e.jsx(
            v,
            {
              className: "px-4 py-2",
              onClick: async () => {
                u.dismiss(N.current), i(!0);
              },
              disabled: a,
              children: a ? /* @__PURE__ */ e.jsx(te, {}) : n("/marketplace.moonpayRamp.depositConfirmation.confirmButton")
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
  async function $(s) {
    try {
      const i = s.cryptoCurrency.code.toUpperCase(), c = fe(BigInt(s.cryptoCurrencyAmountSmallestDenomination));
      A("amt", c), m(!0);
      const x = await U({
        to: s.depositWalletAddress,
        amount: c,
        token: i,
        transactionType: ae.SELL,
        data: ""
      });
      if (x != null && x.needOtp && se.getVerifyMethod() === "email-by-sendgrid") {
        B(x.transactionId), k(!0);
        return;
      }
      return x == null ? void 0 : x.hash;
    } catch (i) {
      const c = i.response;
      c && c.data && u.error(c.data);
    } finally {
      m(!1);
    }
  }
  const _ = async (s) => {
    if (!T) {
      u.error("No transaction id");
      return;
    }
    try {
      S(!0);
      const { hash: i } = await ne.signTransactionWithOTP({
        transactionId: T,
        otp: s
      });
      i && (k(!1), u.success("Transaction submitted successfully"));
    } catch (i) {
      const c = ie(i);
      u.error(c.message);
    } finally {
      S(!1);
    }
  }, q = async (s) => {
    A("transactionCreated", s);
  };
  return /* @__PURE__ */ e.jsxs(
    K,
    {
      contentClassName: "p-6",
      containerClassName: "max-w-md",
      isOpen: r,
      onClose: () => D(),
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: y(
          "flex items-center font-bold mb-6",
          "text-md tablet:text-2xl"
        ), children: [
          /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/moonpay-logo.png", alt: "MoonPay Logo", width: 32, height: 32, className: "mr-3" }),
          n("/marketplace.moonpayRamp.modalTitle")
        ] }),
        t && /* @__PURE__ */ e.jsx(
          X,
          {
            variant: "overlay",
            visible: t,
            email: w,
            onCloseOverlay: () => {
              f(!1);
            },
            walletAddresses: b,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onInitiateDeposit: I,
            onUrlSignatureRequested: R
          }
        ),
        p && /* @__PURE__ */ e.jsx(
          Y,
          {
            variant: "overlay",
            visible: p,
            email: w,
            walletAddresses: b,
            showWalletAddressForm: "true",
            showAllCurrencies: "true",
            onCloseOverlay: () => {
              g(!1);
            },
            onInitiateDeposit: I,
            onUrlSignatureRequested: R,
            onTransactionCreated: q
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs(
            v,
            {
              className: y(
                "font-semibold",
                "py-3 tablet:py-6",
                "text-xs tablet:text-sm"
              ),
              onClick: () => f(!0),
              children: [
                /* @__PURE__ */ e.jsx(de, { className: "hidden tablet:block tablet:mr-2" }),
                n("/marketplace.moonpayRamp.buyButton")
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            v,
            {
              className: y(
                "font-semibold",
                "py-3 tablet:py-6",
                "text-xs tablet:text-sm"
              ),
              onClick: () => g(!0),
              children: [
                /* @__PURE__ */ e.jsx(me, { className: "hidden tablet:block tablet:mr-2" }),
                n("/marketplace.moonpayRamp.sellButton")
              ]
            }
          )
        ] }),
        a && /* @__PURE__ */ e.jsx(ce, {}),
        /* @__PURE__ */ e.jsx(
          Z,
          {
            isOpen: E,
            onClose: () => k(!1),
            loading: M,
            onVerify: _,
            modalClassName: "z-[10004]"
          }
        )
      ]
    }
  );
}
const ue = z, he = G, ge = Q, O = o.forwardRef(({ className: r, sideOffset: d = 4, ...l }, n) => /* @__PURE__ */ e.jsx(
  V,
  {
    ref: n,
    sideOffset: d,
    className: y(
      "z-50 overflow-visible rounded-md bg-black px-3 py-1.5 text-sm text-white",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "relative after:absolute after:content-[''] after:w-2 after:h-2 after:rotate-45 after:bg-black",
      "data-[side=bottom]:after:-top-1 data-[side=bottom]:after:left-1/2 data-[side=bottom]:after:-translate-x-1/2",
      "data-[side=top]:after:-bottom-1 data-[side=top]:after:left-1/2 data-[side=top]:after:-translate-x-1/2",
      "data-[side=left]:after:-right-1 data-[side=left]:after:top-1/2 data-[side=left]:after:-translate-y-1/2",
      "data-[side=right]:after:-left-1 data-[side=right]:after:top-1/2 data-[side=right]:after:-translate-y-1/2",
      r
    ),
    ...l
  }
));
O.displayName = V.displayName;
function P({ variant: r }) {
  const d = {
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
  }, { bgColor: l, text: n, width: t, textAlign: f, showIcon: p } = d[r];
  return /* @__PURE__ */ e.jsxs("div", { className: `absolute right-0 top-0 -translate-y-[50%] ${l} h-[40px] px-[20px] rounded-l-[20px]`, children: [
    /* @__PURE__ */ e.jsx("div", { className: "w-full h-[20px]" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-center items-center h-[22px]", children: [
      p && /* @__PURE__ */ e.jsx("img", { className: "w-[12px]", src: "/imgs/icons/fire.svg", alt: "fire" }),
      /* @__PURE__ */ e.jsx("div", { className: `${t} ${f} text-black text-xs font-medium leading-none`, children: n })
    ] })
  ] });
}
const be = ({
  activedPurchasedProductIds: r,
  handleRampOpenModal: d
}) => {
  const l = H(), n = oe(), t = o.useRef(null), {
    setIsModalOpen: f,
    setDappInfo: p,
    isConnected: g,
    setDisplayUriInput: w
  } = xe(), { checkNewProducts: j } = pe();
  o.useEffect(() => () => {
    t.current && window.clearTimeout(t.current);
  }, []);
  const b = (a) => r.some((h) => h === a.id) ? "active" : "";
  return {
    handleClick: async (a) => {
      if (b(a) !== "active") {
        window.open(`/marketplace/feature-detail/${a.id}`, "_blank");
        return;
      }
      if (t.current = window.setTimeout(async () => {
        try {
          await L.post("/user/products/update-usage-status", {
            productId: a.id
          }), await n.invalidateQueries({ queryKey: ["userInfo"] }), await j();
        } catch (m) {
          console.error("Failed to mark product as viewed:", m);
        }
      }, 100), a.products && a.followOrder) {
        const m = new URLSearchParams();
        m.set("flowId", a.id), m.set("flowIndex", "0");
        const h = `${a.serviceUrl}?${m.toString()}`;
        a.integrationPoints.includes("standalone") ? window.open(h, "_blank") : l(h);
        return;
      }
      if (a.integrationPoints.includes("walletconnect")) {
        g ? window.open(a.serviceUrl, "_blank") : (p({
          name: a.name,
          url: a.serviceUrl
        }), w(!1), f(!0));
        return;
      }
      if (a.vendor === "Moonpay") {
        d(a);
        return;
      }
      if (a.integrationPoints.includes("theme")) {
        window.location.href = a.serviceUrl;
        return;
      }
      if (a.category === "Security") {
        window.open(a.website, "_blank");
        return;
      }
      a.integrationPoints.includes("standalone") && window.open(a.serviceUrl, "_blank");
    },
    checkPurchaseStatus: b
  };
};
function Pe({
  className: r,
  activedPurchasedProductIds: d,
  handleRampOpenModal: l,
  selectedCategory: n,
  ...t
}) {
  const { handleClick: f } = be({
    activedPurchasedProductIds: d,
    handleRampOpenModal: l
  });
  return /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsxs(he, { delayDuration: 100, children: [
    /* @__PURE__ */ e.jsx(ge, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: y([
          "laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]",
          "h-[200px] p-5 bg-white rounded-[20px] border-[1.5px] border-[#ebebeb] relative overflow-hidden",
          "hover:border-[#111111] cursor-pointer",
          r
        ]),
        onClick: () => f(t),
        children: [
          t.isFeatured ? /* @__PURE__ */ e.jsx(P, { variant: "featured" }) : t.price === 0 && /* @__PURE__ */ e.jsx(P, { variant: "free" }),
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
                onClick: (p) => {
                  p.stopPropagation(), window.open(t.website, "_blank");
                },
                children: t.vendor
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-5 right-5 h-4 flex items-center", children: [
            n === "Added" && /* @__PURE__ */ e.jsx("span", { className: "text-[#c4c4c4] text-sm font-medium leading-none inline-block mr-[10px]", children: "Added" }),
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
      O,
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
  Ie as E,
  Pe as P,
  Ae as R,
  be as u
};
