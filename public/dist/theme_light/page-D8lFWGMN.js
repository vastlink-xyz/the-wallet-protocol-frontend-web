import { a2 as _, a3 as L, a4 as z, j as e, a5 as I, a6 as B, a7 as X, a8 as Y, a9 as $ } from "./vendor-radix-B8_5rGTC.js";
import { B as q, C as H } from "./index-BspuBG-8.js";
import { c as b, k as K, B as N, i as P, h as W, l as G, a as J, T as Q } from "./main-BVot_80u.js";
import { r as c, b as U, f as Z, j as ee } from "./vendor-react-X5c0QESR.js";
import { a as te, X as se } from "./vendor-ui-utils-5hin2QBi.js";
import { L as ae } from "./index-CTOk33jm.js";
import { u as ne, B as C } from "./vendor-utils-avI_LICu.js";
import { p as R } from "./vendor-web3-A0hL30sH.js";
var S = "Checkbox", [re, je] = _(S), [ce, oe] = re(S), T = c.forwardRef(
  (t, r) => {
    const {
      __scopeCheckbox: s,
      name: a,
      checked: o,
      defaultChecked: n,
      required: u,
      disabled: d,
      value: x = "on",
      onCheckedChange: h,
      form: i,
      ...l
    } = t, [m, k] = c.useState(null), v = L(r, (f) => k(f)), w = c.useRef(!1), y = m ? i || !!m.closest("form") : !0, [g = !1, E] = z({
      prop: o,
      defaultProp: n,
      onChange: h
    }), V = c.useRef(g);
    return c.useEffect(() => {
      const f = m == null ? void 0 : m.form;
      if (f) {
        const j = () => E(V.current);
        return f.addEventListener("reset", j), () => f.removeEventListener("reset", j);
      }
    }, [m, E]), /* @__PURE__ */ e.jsxs(ce, { scope: s, state: g, disabled: d, children: [
      /* @__PURE__ */ e.jsx(
        I.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": p(g) ? "mixed" : g,
          "aria-required": u,
          "data-state": O(g),
          "data-disabled": d ? "" : void 0,
          disabled: d,
          value: x,
          ...l,
          ref: v,
          onKeyDown: B(t.onKeyDown, (f) => {
            f.key === "Enter" && f.preventDefault();
          }),
          onClick: B(t.onClick, (f) => {
            E((j) => p(j) ? !0 : !j), y && (w.current = f.isPropagationStopped(), w.current || f.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ e.jsx(
        ie,
        {
          control: m,
          bubbles: !w.current,
          name: a,
          value: x,
          checked: g,
          required: u,
          disabled: d,
          form: i,
          style: { transform: "translateX(-100%)" },
          defaultChecked: p(n) ? !1 : n
        }
      )
    ] });
  }
);
T.displayName = S;
var A = "CheckboxIndicator", M = c.forwardRef(
  (t, r) => {
    const { __scopeCheckbox: s, forceMount: a, ...o } = t, n = oe(A, s);
    return /* @__PURE__ */ e.jsx(X, { present: a || p(n.state) || n.state === !0, children: /* @__PURE__ */ e.jsx(
      I.span,
      {
        "data-state": O(n.state),
        "data-disabled": n.disabled ? "" : void 0,
        ...o,
        ref: r,
        style: { pointerEvents: "none", ...t.style }
      }
    ) });
  }
);
M.displayName = A;
var ie = (t) => {
  const { control: r, checked: s, bubbles: a = !0, defaultChecked: o, ...n } = t, u = c.useRef(null), d = Y(s), x = $(r);
  c.useEffect(() => {
    const i = u.current, l = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (d !== s && k) {
      const v = new Event("click", { bubbles: a });
      i.indeterminate = p(s), k.call(i, p(s) ? !1 : s), i.dispatchEvent(v);
    }
  }, [d, s, a]);
  const h = c.useRef(p(s) ? !1 : s);
  return /* @__PURE__ */ e.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o ?? h.current,
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
function p(t) {
  return t === "indeterminate";
}
function O(t) {
  return p(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
var D = T, le = M;
const F = c.forwardRef(({ className: t, ...r }, s) => /* @__PURE__ */ e.jsx(
  D,
  {
    ref: s,
    className: b(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      t
    ),
    ...r,
    children: /* @__PURE__ */ e.jsx(
      le,
      {
        className: b("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ e.jsx(te, { className: "h-4 w-4" })
      }
    )
  }
));
F.displayName = D.displayName;
const de = ({ isOpen: t, onClose: r, product: s, balance: a }) => {
  const [o, n] = c.useState(!1), { signTransaction: u, waitForTransactionExection: d } = K(), { t: x } = ne(), h = async () => {
    if (R(a) < R(String(s.price))) {
      C.error(x("/marketplace.productCard.insufficientBalance"));
      return;
    }
    try {
      n(!0);
      const { data: { success: l, needOtp: m, message: k, transactionId: v } } = await P.post("/user/purchase", {
        productId: s.id
      });
      if (l)
        r(!0), C.success(x("/marketplace.productCard.purchaseSuccess")), n(!1);
      else if (m && (C.warning(x("/marketplace.productCard.dailyLimitExceededOtpRequired")), await d(v))) {
        const { data: y } = await P.post("/user/purchase/saveProducts", {
          productId: s.id
        });
        n(!1), r(!0), C.success(x("/marketplace.productCard.purchaseSuccess"));
      }
    } catch (l) {
      const m = W(l);
      C.error(m.message), n(!1);
    }
  }, i = t ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    o && /* @__PURE__ */ e.jsx(ae, {}),
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: b(
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
            children: /* @__PURE__ */ e.jsx(se, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-none", children: [
        a,
        'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: "Asset balance: " }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold font-['Roboto'] leading-none", children: [
          a,
          " V"
        ] }),
        /* @__PURE__ */ e.jsx(
          N,
          {
            disabled: o,
            onClick: h,
            children: "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: b(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Confirmation" }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-tight", children: [
          a,
          'V will be deducted from your Asset. This is a monthly recurring charge.You can find the purchased product under the "Added" tab in the Marketplace. To manage your subscription, go to the "Profile" page, navigate to "Purchases," and select "Manage."'
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("footer", { className: "", children: [
        /* @__PURE__ */ e.jsx(
          N,
          {
            disabled: o,
            variant: "ghost",
            className: b(
              "w-full text-[15px] font-bold border-b border-[#EBEBEB] rounded-none",
              "hover:bg-black/5"
            ),
            onClick: h,
            children: "Add"
          }
        ),
        /* @__PURE__ */ e.jsx(
          N,
          {
            disabled: o,
            variant: "ghost",
            className: b(
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
    return U.createPortal(
      i,
      document.body
    );
};
function xe({
  product: t,
  balance: r,
  onPurchaseSuccess: s
}) {
  var i;
  const [a, o] = c.useState(!1), [n, u] = c.useState(!1), d = () => {
    if ((t == null ? void 0 : t.price) === 0)
      return "Add for free";
    if (t && t.price !== void 0 && t.price > 0)
      return "Add";
  }, x = () => {
    u(!0);
  }, h = (l) => {
    u(!1), l && s();
  };
  return t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "mt-[48px] mb-[60px] text-center text-black text-[28px] font-bold leading-[36.96px]", children: t == null ? void 0 : t.name }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e.jsx("div", { className: "flex gap-x-[22px] min-w-min mx-auto w-fit", children: (i = t == null ? void 0 : t.banners) == null ? void 0 : i.map((l) => /* @__PURE__ */ e.jsx("div", { className: "w-[312px] shrink-0 p-2.5 bg-[#161616] rounded-[20px]", children: /* @__PURE__ */ e.jsx("img", { src: l, alt: t == null ? void 0 : t.name, className: "w-full h-auto object-cover" }) }, l)) }) }),
    /* @__PURE__ */ e.jsxs("div", { className: b([
      "tablet:w-[548px] w-[334px]",
      "tablet:mt-[76px] mt-[34px]",
      "mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-normal leading-none", children: [
        "Version ",
        t == null ? void 0 : t.version
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: t == null ? void 0 : t.description })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: b([
      "tablet:w-[548px] w-[334px]",
      "mt-[40px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-base font-bold leading-none mb-2", children: "Subscription plan" }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-bold leading-none mb-1", children: [
        t == null ? void 0 : t.price,
        "V"
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "text-black text-sm font-normal leading-none", children: "To manage your plan, go to Profile page, under purchase and select manage." })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: b([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto"
    ]), children: [
      /* @__PURE__ */ e.jsxs("label", { className: "flex items-center gap-x-2 cursor-pointer", children: [
        /* @__PURE__ */ e.jsx(F, { checked: a, onCheckedChange: () => o(!a) }),
        /* @__PURE__ */ e.jsx("div", { className: "text-center text-black text-xs font-normal leading-none select-none", children: "I have read and agree the above terms and conditions" })
      ] }),
      /* @__PURE__ */ e.jsx(
        N,
        {
          className: "w-full mt-4",
          disabled: !a,
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
        balance: r
      }
    )
  ] }) : null;
}
function me({ product: t }) {
  const r = Z(), [s, a] = c.useState(10);
  return c.useEffect(() => {
    const o = setInterval(() => {
      a((n) => n - 1);
    }, 1e3);
    return () => clearInterval(o);
  }, []), c.useEffect(() => {
    s === 0 && r("/marketplace");
  }, [s, r]), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
    /* @__PURE__ */ e.jsxs("div", { className: b([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto",
      "flex flex-col items-center"
    ]), children: [
      /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/success_added.png", alt: "success" }),
      /* @__PURE__ */ e.jsx(
        N,
        {
          className: "w-full mt-[46px]",
          onClick: () => r("/marketplace"),
          children: "Back to Marketplace"
        }
      )
    ] })
  ] });
}
function Ce() {
  const { productId: t } = ee(), [r, s] = c.useState(""), [a, o] = c.useState(null), [n, u] = c.useState(!1);
  c.useEffect(() => {
    d();
  }, [t]);
  const d = async () => {
    const i = await P.get(`/marketplace/product/product/${t}`);
    G("res", i), o(i.data), x();
  }, x = async () => {
    const i = J.all().address, l = await Q.getInstance().createToken("TVWT").getBalance(i);
    s(l);
  }, h = () => {
    u(!0);
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(
      q,
      {
        primaryRoute: {
          path: "/marketplace",
          name: "Marketplace"
        },
        secondaryRoute: {
          name: (a == null ? void 0 : a.name) || "Feature detail"
        }
      }
    ),
    /* @__PURE__ */ e.jsx(H, { className: "laptop:w-[1000px]", children: n ? /* @__PURE__ */ e.jsx(me, { product: a }) : /* @__PURE__ */ e.jsx(
      xe,
      {
        product: a,
        balance: r,
        onPurchaseSuccess: h
      }
    ) })
  ] });
}
export {
  Ce as default
};
