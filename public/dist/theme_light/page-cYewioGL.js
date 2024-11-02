import { x as V, y as L, A as $, j as e, B as T, D as B, E as X, F as Y, G as q } from "./vendor-radix-CjL5_ZCn.js";
import { B as I, C as H } from "./index-DGqYAzF6.js";
import { a as P } from "./index-Dr7PNsrq.js";
import "./main-DrvVrxeO.js";
import { a as K } from "./auth-D53HHgot.js";
import { c as o } from "./style-CX3mXOu3.js";
import { B as C } from "./button-CQRi4ddT.js";
import { a as c, c as W, k as G, m as Z } from "./vendor-react-D6ZgZFQ5.js";
import { a as J, X as Q } from "./vendor-ui-utils-CwlQOkPE.js";
import { u as U } from "./useTransaction-BDwwSswq.js";
import { h as ee } from "./error-DDWKB78C.js";
import { u as te, B as N } from "./vendor-utils-RvkaSVWD.js";
import { p as R } from "./vendor-web3-B_6NVwwj.js";
import { D as se } from "./dialog-CZtxwvHq.js";
import { T as ae } from "./TokenService-CBSYqvR8.js";
var S = "Checkbox", [ne, Be] = V(S), [re, ce] = ne(S), A = c.forwardRef(
  (t, a) => {
    const {
      __scopeCheckbox: s,
      name: r,
      checked: i,
      defaultChecked: n,
      required: u,
      disabled: d,
      value: x = "on",
      onCheckedChange: h,
      form: l,
      ...m
    } = t, [f, b] = c.useState(null), w = L(a, (p) => b(p)), k = c.useRef(!1), y = f ? l || !!f.closest("form") : !0, [j = !1, E] = $({
      prop: i,
      defaultProp: n,
      onChange: h
    }), _ = c.useRef(j);
    return c.useEffect(() => {
      const p = f == null ? void 0 : f.form;
      if (p) {
        const v = () => E(_.current);
        return p.addEventListener("reset", v), () => p.removeEventListener("reset", v);
      }
    }, [f, E]), /* @__PURE__ */ e.jsxs(re, { scope: s, state: j, disabled: d, children: [
      /* @__PURE__ */ e.jsx(
        T.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": g(j) ? "mixed" : j,
          "aria-required": u,
          "data-state": D(j),
          "data-disabled": d ? "" : void 0,
          disabled: d,
          value: x,
          ...m,
          ref: w,
          onKeyDown: B(t.onKeyDown, (p) => {
            p.key === "Enter" && p.preventDefault();
          }),
          onClick: B(t.onClick, (p) => {
            E((v) => g(v) ? !0 : !v), y && (k.current = p.isPropagationStopped(), k.current || p.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ e.jsx(
        ie,
        {
          control: f,
          bubbles: !k.current,
          name: r,
          value: x,
          checked: j,
          required: u,
          disabled: d,
          form: l,
          style: { transform: "translateX(-100%)" },
          defaultChecked: g(n) ? !1 : n
        }
      )
    ] });
  }
);
A.displayName = S;
var M = "CheckboxIndicator", O = c.forwardRef(
  (t, a) => {
    const { __scopeCheckbox: s, forceMount: r, ...i } = t, n = ce(M, s);
    return /* @__PURE__ */ e.jsx(X, { present: r || g(n.state) || n.state === !0, children: /* @__PURE__ */ e.jsx(
      T.span,
      {
        "data-state": D(n.state),
        "data-disabled": n.disabled ? "" : void 0,
        ...i,
        ref: a,
        style: { pointerEvents: "none", ...t.style }
      }
    ) });
  }
);
O.displayName = M;
var ie = (t) => {
  const { control: a, checked: s, bubbles: r = !0, defaultChecked: i, ...n } = t, u = c.useRef(null), d = Y(s), x = q(a);
  c.useEffect(() => {
    const l = u.current, m = window.HTMLInputElement.prototype, b = Object.getOwnPropertyDescriptor(m, "checked").set;
    if (d !== s && b) {
      const w = new Event("click", { bubbles: r });
      l.indeterminate = g(s), b.call(l, g(s) ? !1 : s), l.dispatchEvent(w);
    }
  }, [d, s, r]);
  const h = c.useRef(g(s) ? !1 : s);
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: i ?? h.current,
      ...n,
      tabIndex: -1,
      ref: u,
      style: {
        ...t.style,
        ...x,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function g(t) {
  return t === "indeterminate";
}
function D(t) {
  return g(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
var z = A, oe = O;
const F = c.forwardRef(({ className: t, ...a }, s) => /* @__PURE__ */ e.jsx(
  z,
  {
    ref: s,
    className: o(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      t
    ),
    ...a,
    children: /* @__PURE__ */ e.jsx(
      oe,
      {
        className: o("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ e.jsx(J, { className: "h-4 w-4" })
      }
    )
  }
));
F.displayName = z.displayName;
function le() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: o(
      "hidden tablet:flex",
      "fixed inset-0 justify-center bg-black/50",
      "z-[49]"
    ), children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/icons/loading.svg",
        alt: "loading",
        className: "h-[100px] w-[100px] animate-spin mt-[100px]"
      }
    ) }),
    /* @__PURE__ */ e.jsx("div", { className: o(
      "flex tablet:hidden",
      "fixed inset-0 justify-center items-center",
      "z-[51]"
    ), children: /* @__PURE__ */ e.jsx("div", { className: "w-[126px] h-[56px] py-[16px] px-[12px] bg-[#424242] rounded-lg backdrop-blur-[20px] flex justify-center items-center", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: "/imgs/icons/mobile_loading.png",
        alt: "loading",
        className: "h-8 w-8 animate-spin"
      }
    ) }) })
  ] });
}
const de = ({ isOpen: t, onClose: a, product: s, balance: r }) => {
  const [i, n] = c.useState(!1), { signTransaction: u, waitForTransactionExection: d } = U(), { t: x } = te(), h = s.discount ? s.price * (1 - s.discount / 100) : s.price, l = async () => {
    if (R(r) < R(String(h))) {
      N.error(x("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      n(!0);
      const { data: { success: f, needOtp: b, message: w, transactionId: k } } = await P.post("/user/purchase", {
        productId: s.id
      });
      if (f)
        a(!0), N.success(x("/marketplace.productCard.purchaseSuccess")), n(!1);
      else if (b && (N.warning(x("/marketplace.productCard.dailyLimitExceededOtpRequired")), await d(k))) {
        const { data: j } = await P.post("/user/purchase/saveProducts", {
          productId: s.id
        });
        n(!1), a(!0), N.success(x("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (f) {
      const b = ee(f);
      N.error(b.message), n(!1);
    }
  }, m = t ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    i && /* @__PURE__ */ e.jsx(le, {}),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: o(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Confirmation" }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => a(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ e.jsx(Q, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-none", children: [
        h,
        'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: "Asset balance: " }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold font-['Roboto'] leading-none", children: [
          r,
          " V"
        ] }),
        /* @__PURE__ */ e.jsx(
          C,
          {
            disabled: i,
            onClick: l,
            children: "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: o(
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
          C,
          {
            disabled: i,
            variant: "ghost",
            className: o(
              "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: l,
            children: "Add"
          }
        ),
        /* @__PURE__ */ e.jsx(
          C,
          {
            disabled: i,
            variant: "ghost",
            className: o(
              "w-full text-[15px] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: () => a(!1),
            children: "Cancel"
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return W.createPortal(
      m,
      document.body
    );
};
function xe({ src: t, alt: a, className: s }) {
  const [r, i] = c.useState(!1);
  return t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "img",
      {
        src: t,
        alt: a,
        className: `cursor-zoom-in ${s}`,
        onClick: () => i(!0)
      }
    ),
    r && /* @__PURE__ */ e.jsx(
      se,
      {
        open: r,
        onOpenChange: i,
        children: /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "fixed inset-0 bg-[#1f2533]/40 z-50 flex items-center justify-center",
            onClick: () => i(!1),
            children: /* @__PURE__ */ e.jsx("div", { className: "relative w-[60vw]", children: /* @__PURE__ */ e.jsx(
              "img",
              {
                src: t,
                alt: a,
                className: "w-full object-contain",
                onClick: (n) => n.stopPropagation()
              }
            ) })
          }
        )
      }
    )
  ] }) : null;
}
function me({
  product: t,
  balance: a,
  onPurchaseSuccess: s
}) {
  var l;
  const [r, i] = c.useState(!1), [n, u] = c.useState(!1), d = () => {
    if ((t == null ? void 0 : t.price) === 0)
      return "Add for free";
    if (t && t.price !== void 0 && t.price > 0)
      return "Add";
  }, x = () => {
    u(!0);
  }, h = (m) => {
    u(!1), m && s();
  };
  return t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(I, { className: o([
      "mb-[16px] mt-[20px]",
      "tablet:hidden"
    ]) }),
    /* @__PURE__ */ e.jsxs("div", { className: o([
      "mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px] mx-auto relative",
      "tablet:w-[646px]"
    ]), children: [
      /* @__PURE__ */ e.jsx(I, { className: o([
        "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer",
        "hidden tablet:block"
      ]) }),
      /* @__PURE__ */ e.jsx("span", { children: t == null ? void 0 : t.name })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (l = t == null ? void 0 : t.banners) == null ? void 0 : l.map((m) => /* @__PURE__ */ e.jsxs("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: [
      /* @__PURE__ */ e.jsx("img", { className: o([
        "w-full h-auto object-cover",
        "tablet:hidden"
      ]), src: m, alt: t == null ? void 0 : t.name }),
      /* @__PURE__ */ e.jsx(
        xe,
        {
          src: m,
          alt: t == null ? void 0 : t.name,
          className: o([
            "w-full h-auto object-cover",
            "tablet:block hidden"
          ])
        }
      )
    ] }, m)) }) }),
    /* @__PURE__ */ e.jsxs("div", { className: o([
      "tablet:w-[548px] w-[334px]",
      "tablet:mt-[76px] mt-[34px]",
      "mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-black text-xl font-bold leading-none mb-2", children: [
        "Version ",
        t == null ? void 0 : t.version
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: t == null ? void 0 : t.description })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: o([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-xl font-bold leading-none mb-2", children: "Subscription plan" }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
        t == null ? void 0 : t.price,
        "V"
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: "To manage your plan, go to Profile page, under purchase and select manage." })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: o([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-x-2 cursor-pointer", children: [
        /* @__PURE__ */ e.jsx(F, { checked: r, onCheckedChange: () => i(!r) }),
        /* @__PURE__ */ e.jsx("div", { className: "text-center text-black text-xs font-normal leading-none select-none", children: "I have read and agree the above terms and conditions" })
      ] }),
      /* @__PURE__ */ e.jsx(
        C,
        {
          className: "w-full mt-4",
          disabled: !r,
          onClick: () => x(),
          children: d()
        }
      )
    ] }),
    t && /* @__PURE__ */ e.jsx(
      de,
      {
        isOpen: n,
        onClose: h,
        product: t,
        balance: a
      }
    )
  ] }) : null;
}
function fe({ product: t }) {
  const a = G(), [s, r] = c.useState(10);
  return c.useEffect(() => {
    const i = setInterval(() => {
      r((n) => n - 1);
    }, 1e3);
    return () => clearInterval(i);
  }, []), c.useEffect(() => {
    s === 0 && a("/marketplace");
  }, [s, a]), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]", children: [
      t == null ? void 0 : t.name,
      " added successfully"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "h-4 flex justify-center items-center", children: /* @__PURE__ */ e.jsxs("p", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-[#979797] text-sm font-medium font-['Roboto'] leading-none", children: 'You can find the purchased product under the "Added" tab in the Marketplace. You will be directed to Marketplace in' }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: [
        " ",
        s,
        " s "
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: o([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto",
      "flex flex-col items-center"
    ]), children: [
      /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/success_added.png", alt: "success" }),
      /* @__PURE__ */ e.jsx(
        C,
        {
          className: "w-full mt-[46px]",
          onClick: () => a("/marketplace"),
          children: "Back to Marketplace"
        }
      )
    ] })
  ] });
}
function Ie() {
  const { productId: t } = Z(), [a, s] = c.useState(""), [r, i] = c.useState(null), [n, u] = c.useState(!1);
  c.useEffect(() => {
    d();
  }, [t]);
  const d = async () => {
    const l = await P.get(`/marketplace/product/product/${t}`);
    i(l.data), x();
  }, x = async () => {
    const l = K.all().address, m = await ae.getInstance().createToken("TVWT").getBalance(l);
    s(m);
  }, h = () => {
    u(!0);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(H, { className: "laptop:w-[1000px] tablet:mt-[76px]", children: n ? /* @__PURE__ */ e.jsx(fe, { product: r }) : /* @__PURE__ */ e.jsx(
    me,
    {
      product: r,
      balance: a,
      onPurchaseSuccess: h
    }
  ) }) });
}
export {
  Ie as default
};
