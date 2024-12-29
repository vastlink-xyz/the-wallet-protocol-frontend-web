import { t as $, v as H, w as O, j as s, x as B, y as I, A as q, B as F, D as K } from "./vendor-radix-BYJ0AyiX.js";
import { r as a } from "./vendor-react-CuOkI7kW.js";
import { u as V, a as E, B as N } from "./vendor-utils-DMWa-Mp_.js";
import { c as C, I as X, B as G, j as J, L as Q, g as A, h as M } from "./main-COWkWeS2.js";
import { L as W } from "./label-CkCzKayB.js";
import { d as Y } from "./vendor-ui-utils-2_WY-nJY.js";
var P = "Checkbox", [Z, de] = $(P), [ee, te] = Z(P), L = a.forwardRef(
  (e, d) => {
    const {
      __scopeCheckbox: r,
      name: i,
      checked: g,
      defaultChecked: n,
      required: k,
      disabled: c,
      value: x = "on",
      onCheckedChange: v,
      form: m,
      ...l
    } = e, [u, y] = a.useState(null), p = H(d, (o) => y(o)), j = a.useRef(!1), S = u ? m || !!u.closest("form") : !0, [h = !1, w] = O({
      prop: g,
      defaultProp: n,
      onChange: v
    }), R = a.useRef(h);
    return a.useEffect(() => {
      const o = u == null ? void 0 : u.form;
      if (o) {
        const t = () => w(R.current);
        return o.addEventListener("reset", t), () => o.removeEventListener("reset", t);
      }
    }, [u, w]), /* @__PURE__ */ s.jsxs(ee, { scope: r, state: h, disabled: c, children: [
      /* @__PURE__ */ s.jsx(
        B.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": b(h) ? "mixed" : h,
          "aria-required": k,
          "data-state": z(h),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: x,
          ...l,
          ref: p,
          onKeyDown: I(e.onKeyDown, (o) => {
            o.key === "Enter" && o.preventDefault();
          }),
          onClick: I(e.onClick, (o) => {
            w((t) => b(t) ? !0 : !t), S && (j.current = o.isPropagationStopped(), j.current || o.stopPropagation());
          })
        }
      ),
      S && /* @__PURE__ */ s.jsx(
        se,
        {
          control: u,
          bubbles: !j.current,
          name: i,
          value: x,
          checked: h,
          required: k,
          disabled: c,
          form: m,
          style: { transform: "translateX(-100%)" },
          defaultChecked: b(n) ? !1 : n
        }
      )
    ] });
  }
);
L.displayName = P;
var D = "CheckboxIndicator", _ = a.forwardRef(
  (e, d) => {
    const { __scopeCheckbox: r, forceMount: i, ...g } = e, n = te(D, r);
    return /* @__PURE__ */ s.jsx(q, { present: i || b(n.state) || n.state === !0, children: /* @__PURE__ */ s.jsx(
      B.span,
      {
        "data-state": z(n.state),
        "data-disabled": n.disabled ? "" : void 0,
        ...g,
        ref: d,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
_.displayName = D;
var se = (e) => {
  const { control: d, checked: r, bubbles: i = !0, defaultChecked: g, ...n } = e, k = a.useRef(null), c = F(r), x = K(d);
  a.useEffect(() => {
    const m = k.current, l = window.HTMLInputElement.prototype, y = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (c !== r && y) {
      const p = new Event("click", { bubbles: i });
      m.indeterminate = b(r), y.call(m, b(r) ? !1 : r), m.dispatchEvent(p);
    }
  }, [c, r, i]);
  const v = a.useRef(b(r) ? !1 : r);
  return /* @__PURE__ */ s.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: g ?? v.current,
      ...n,
      tabIndex: -1,
      ref: k,
      style: {
        ...e.style,
        ...x,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function b(e) {
  return e === "indeterminate";
}
function z(e) {
  return b(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var T = L, ae = _;
const U = a.forwardRef(({ className: e, ...d }, r) => /* @__PURE__ */ s.jsx(
  T,
  {
    ref: r,
    className: C(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...d,
    children: /* @__PURE__ */ s.jsx(
      ae,
      {
        className: C("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ s.jsx(Y, { className: "h-4 w-4" })
      }
    )
  }
));
U.displayName = T.displayName;
function re() {
  const { t: e } = V(), [d, r] = a.useState(""), [i, g] = a.useState(""), [n, k] = a.useState(!0), [c, x] = a.useState(!1), [v, m] = a.useState(!1), [l, u] = a.useState(!0), [y, p] = a.useState(!1), j = async (t) => {
    if (!t || !J.test(t))
      return p(!0), !1;
    if (l)
      try {
        const { data: f } = await E.get("https://api.vastwallet.j-labs.xyz/address/", {
          params: {
            email: t
          }
        });
        if (!f.success)
          return p(!0), !1;
      } catch {
      }
    return p(!1), !0;
  };
  async function S() {
    A("call register");
    try {
      m(!0);
      const t = await E.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-otp",
        {
          email: i,
          displayName: d,
          rememberMe: n
        }
      );
      A("register res", t), t.status === 200 && (N.success(
        e("/.otpSentMessage")
      ), m(!1));
    } catch (t) {
      const f = M(t);
      N.error(f.message);
    }
  }
  async function h() {
    try {
      x(!0), (await E.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-login-otp",
        {
          email: i,
          rememberMe: n
        }
      )).status === 200 && (N.success(
        e("/.otpLoginSentMessage")
      ), x(!1));
    } catch (t) {
      const f = M(t);
      N.error(f.message);
    } finally {
      x(!1);
    }
  }
  const w = async (t) => {
    if (t.preventDefault(), l)
      await h();
    else {
      try {
        const { data: f } = await E.get("https://api.vastwallet.j-labs.xyz/address/", {
          params: {
            email: i
          }
        });
        if (f.success) {
          N.error(e("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await S();
    }
  }, R = () => {
    u(!l), p(!1);
  }, o = () => v || c ? /* @__PURE__ */ s.jsx(Q, {}) : e(l ? "/.signInButton" : "/.signUpButton");
  return /* @__PURE__ */ s.jsxs("div", { className: C(
    "relative mx-auto overflow-visible",
    "w-[343px] tablet:w-[536px]"
  ), children: [
    /* @__PURE__ */ s.jsx("div", { className: C(
      "text-[#111111] text-[32px] font-bold leading-tight",
      "text-xl tablet:text-[32px]"
    ), children: e(l ? "/.signinTitle" : "/.signupTitle") }),
    /* @__PURE__ */ s.jsx("div", { className: C(
      "mt-[8px]",
      "tablet:whitespace-nowrap",
      "text-[#979797]/90 font-normal leading-snug",
      "text-[10px] tablet:text-sm"
    ), children: "A sign up link will be sent to your email. Please check your inbox and click the link to sign in." }),
    /* @__PURE__ */ s.jsxs(
      "form",
      {
        className: C(
          "group mt-[84px]"
        ),
        onSubmit: (t) => w(t),
        noValidate: !0,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "mb-4 relative", children: [
            /* @__PURE__ */ s.jsx(W, { htmlFor: "email", children: e("/.emailLabel") }),
            /* @__PURE__ */ s.jsx(
              X,
              {
                className: C(
                  "mt-[6px]"
                ),
                type: "email",
                id: "email",
                value: i,
                onChange: (t) => g(t.target.value.trim()),
                onBlur: (t) => j(t.target.value),
                placeholder: e("/.emailPlaceholder"),
                required: !0,
                disabled: v || c
              }
            ),
            y && /* @__PURE__ */ s.jsx("span", { className: "absolute -bottom-5 text-xs text-red-500", children: e("/.emailValidationError") })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2 p-[10px] mt-[48px]", children: [
            /* @__PURE__ */ s.jsx(
              U,
              {
                id: "rememberMe",
                checked: n,
                onCheckedChange: () => k(!n)
              }
            ),
            /* @__PURE__ */ s.jsx(
              "label",
              {
                htmlFor: "rememberMe",
                className: "text-xs text-black leading-none font-normal cursor-pointer select-none",
                children: "Remember me for 7 days"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx(
            G,
            {
              type: "submit",
              className: "w-full cursor-pointer",
              disabled: v || c || y,
              children: o()
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "text-center text-black/90 text-sm font-normal leading-snug cursor-pointer select-none mt-[12px]",
        onClick: R,
        children: e(l ? "/.signUp" : "/.alreadyHaveAccount")
      }
    )
  ] });
}
function me() {
  return /* @__PURE__ */ s.jsx("div", { className: "h-custom-main flex items-center", children: /* @__PURE__ */ s.jsx(re, {}) });
}
export {
  me as default
};
