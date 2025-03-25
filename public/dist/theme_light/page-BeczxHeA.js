import { t as se, v as ae, w as re, j as t, x as z, y as T, A as ne, B as ie, D as oe } from "./vendor-radix-BYJ0AyiX.js";
import { r as a, k as ce } from "./vendor-react-CuOkI7kW.js";
import { u as le, a as E, B as w } from "./vendor-utils-BfzDPiRN.js";
import { c as S, o as P, I as de, B as ue, V as fe, j as pe, k as D, h as I, g as O, L as me } from "./main-Cs8rq8oH.js";
import { L as he } from "./label-BYSB5m6g.js";
import { d as xe } from "./vendor-ui-utils-2_WY-nJY.js";
var L = "Checkbox", [ge, Pe] = se(L), [be, ye] = ge(L), _ = a.forwardRef(
  (e, p) => {
    const {
      __scopeCheckbox: n,
      name: k,
      checked: o,
      defaultChecked: c,
      required: d,
      disabled: h,
      value: b = "on",
      onCheckedChange: x,
      form: m,
      ...y
    } = e, [i, C] = a.useState(null), N = ae(p, (l) => C(l)), u = a.useRef(!1), M = i ? m || !!i.closest("form") : !0, [f = !1, R] = re({
      prop: o,
      defaultProp: c,
      onChange: x
    }), j = a.useRef(f);
    return a.useEffect(() => {
      const l = i == null ? void 0 : i.form;
      if (l) {
        const g = () => R(j.current);
        return l.addEventListener("reset", g), () => l.removeEventListener("reset", g);
      }
    }, [i, R]), /* @__PURE__ */ t.jsxs(be, { scope: n, state: f, disabled: h, children: [
      /* @__PURE__ */ t.jsx(
        z.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": v(f) ? "mixed" : f,
          "aria-required": d,
          "data-state": H(f),
          "data-disabled": h ? "" : void 0,
          disabled: h,
          value: b,
          ...y,
          ref: N,
          onKeyDown: T(e.onKeyDown, (l) => {
            l.key === "Enter" && l.preventDefault();
          }),
          onClick: T(e.onClick, (l) => {
            R((g) => v(g) ? !0 : !g), M && (u.current = l.isPropagationStopped(), u.current || l.stopPropagation());
          })
        }
      ),
      M && /* @__PURE__ */ t.jsx(
        ve,
        {
          control: i,
          bubbles: !u.current,
          name: k,
          value: b,
          checked: f,
          required: d,
          disabled: h,
          form: m,
          style: { transform: "translateX(-100%)" },
          defaultChecked: v(c) ? !1 : c
        }
      )
    ] });
  }
);
_.displayName = L;
var U = "CheckboxIndicator", $ = a.forwardRef(
  (e, p) => {
    const { __scopeCheckbox: n, forceMount: k, ...o } = e, c = ye(U, n);
    return /* @__PURE__ */ t.jsx(ne, { present: k || v(c.state) || c.state === !0, children: /* @__PURE__ */ t.jsx(
      z.span,
      {
        "data-state": H(c.state),
        "data-disabled": c.disabled ? "" : void 0,
        ...o,
        ref: p,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
$.displayName = U;
var ve = (e) => {
  const { control: p, checked: n, bubbles: k = !0, defaultChecked: o, ...c } = e, d = a.useRef(null), h = ie(n), b = oe(p);
  a.useEffect(() => {
    const m = d.current, y = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(y, "checked").set;
    if (h !== n && C) {
      const N = new Event("click", { bubbles: k });
      m.indeterminate = v(n), C.call(m, v(n) ? !1 : n), m.dispatchEvent(N);
    }
  }, [h, n, k]);
  const x = a.useRef(v(n) ? !1 : n);
  return /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: o ?? x.current,
      ...c,
      tabIndex: -1,
      ref: d,
      style: {
        ...e.style,
        ...b,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function v(e) {
  return e === "indeterminate";
}
function H(e) {
  return v(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var q = _, ke = $;
const F = a.forwardRef(({ className: e, ...p }, n) => /* @__PURE__ */ t.jsx(
  q,
  {
    ref: n,
    className: S(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...p,
    children: /* @__PURE__ */ t.jsx(
      ke,
      {
        className: S("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ t.jsx(xe, { className: "h-4 w-4" })
      }
    )
  }
));
F.displayName = q.displayName;
function Ce() {
  const { t: e } = le(), p = ce(), [n, k] = a.useState(""), [o, c] = a.useState(""), [d, h] = a.useState(!0), [b, x] = a.useState(!1), [m, y] = a.useState(!1), [i, C] = a.useState(!0), [N, u] = a.useState(!1), [M, f] = a.useState(!1), [R, j] = a.useState(!1), [l, g] = a.useState(""), [V, B] = a.useState("signin");
  a.useEffect(() => {
    K();
  }, []);
  const K = () => {
    c(""), y(!1), x(!1), C(!0), u(!1), f(!1), j(!1), g("");
  }, X = async (s) => {
    if (!s || !pe.test(s))
      return u(!0), !1;
    if (i)
      try {
        const { data: r } = await E.get("https://api.vastwallet.j-labs.xyz/address/", {
          params: {
            email: s
          }
        });
        if (!r.success)
          return u(!0), !1;
      } catch {
      }
    return u(!1), !0;
  };
  async function G() {
    try {
      y(!0), (await E.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-registration-otp",
        {
          email: o,
          displayName: n,
          rememberMe: d
        }
      )).status === 200 && (P.getVerifyMethod() === "email-by-nodemailer" ? (w.success(e("/.otpSentMessage")), y(!1)) : P.getVerifyMethod() === "email-by-sendgrid" && (f(!0), B("signup"), g("A verification code has been sent to your email. Please check your inbox and enter the code to sign up.")));
    } catch (s) {
      const r = I(s);
      w.error(r.message);
    }
  }
  async function J() {
    try {
      x(!0), (await E.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-login-otp",
        {
          email: o,
          rememberMe: d
        }
      )).status === 200 && (P.getVerifyMethod() === "email-by-nodemailer" ? (w.success(e("/.otpLoginSentMessage")), x(!1)) : P.getVerifyMethod() === "email-by-sendgrid" && (f(!0), B("signin"), g("A verification code has been sent to your email. Please check your inbox and enter the code to sign in.")));
    } catch (s) {
      const r = I(s);
      w.error(r.message);
    } finally {
      x(!1);
    }
  }
  async function Q(s) {
    V === "signin" ? Y(s) : V === "signup" && W(s);
  }
  async function W(s) {
    try {
      j(!0), (await E.post(
        "https://api.vastwallet.j-labs.xyz/auth/verify-registration-otp",
        {
          email: o,
          OTP: s,
          rememberMe: d
        }
      )).data && (await D.signUp({
        username: o
      }), p("/dashboard"));
    } catch (r) {
      const A = I(r);
      w.error(A.message);
    } finally {
      j(!1);
    }
  }
  async function Y(s) {
    try {
      j(!0), O("verify login", s);
      const r = await E.post(
        "https://api.vastwallet.j-labs.xyz/auth/verify-login-otp",
        {
          email: o,
          OTP: s,
          rememberMe: d
        }
      );
      O("verify res", r), r.data && (await D.signIn({
        authUsername: o
      }), p("/dashboard"));
    } catch (r) {
      const A = I(r);
      w.error(A.message);
    } finally {
      j(!1);
    }
  }
  const Z = async (s) => {
    if (s.preventDefault(), i)
      await J();
    else {
      try {
        const { data: r } = await E.get("https://api.vastwallet.j-labs.xyz/address/", {
          params: {
            email: o
          }
        });
        if (r.success) {
          w.error(e("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await G();
    }
  }, ee = () => {
    C(!i), u(!1);
  }, te = () => m || b ? /* @__PURE__ */ t.jsx(me, {}) : e(i ? "/.signInButton" : "/.signUpButton");
  return /* @__PURE__ */ t.jsxs("div", { className: S(
    "relative mx-auto overflow-visible",
    "w-[343px] tablet:w-[536px]"
  ), children: [
    /* @__PURE__ */ t.jsx("div", { className: S(
      "text-[#111111] text-[32px] font-bold leading-tight",
      "text-xl tablet:text-[32px]"
    ), children: e(i ? "/.signinTitle" : "/.signupTitle") }),
    P.getVerifyMethod() === "email-by-nodemailer" && /* @__PURE__ */ t.jsx("div", { className: S(
      "mt-[8px]",
      "tablet:whitespace-nowrap",
      "text-[#979797]/90 font-normal leading-snug",
      "text-[10px] tablet:text-sm"
    ), children: "A sign up verification code will be sent to your email. Please check your inbox and get it." }),
    /* @__PURE__ */ t.jsxs(
      "form",
      {
        className: S(
          "group mt-[84px]"
        ),
        onSubmit: (s) => Z(s),
        noValidate: !0,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "mb-4 relative", children: [
            /* @__PURE__ */ t.jsx(he, { htmlFor: "email", children: e("/.emailLabel") }),
            /* @__PURE__ */ t.jsx(
              de,
              {
                className: S(
                  "mt-[6px]"
                ),
                type: "email",
                id: "email",
                value: o,
                onChange: (s) => c(s.target.value.trim()),
                onBlur: (s) => X(s.target.value),
                placeholder: e("/.emailPlaceholder"),
                required: !0,
                disabled: m || b
              }
            ),
            N && /* @__PURE__ */ t.jsx("span", { className: "absolute -bottom-5 text-xs text-red-500", children: e("/.emailValidationError") })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 p-[10px] mt-[48px]", children: [
            /* @__PURE__ */ t.jsx(
              F,
              {
                id: "rememberMe",
                checked: d,
                onCheckedChange: () => h(!d)
              }
            ),
            /* @__PURE__ */ t.jsx(
              "label",
              {
                htmlFor: "rememberMe",
                className: "text-xs text-black leading-none font-normal cursor-pointer select-none",
                children: "Remember me for 7 days"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx(
            ue,
            {
              type: "submit",
              className: "w-full cursor-pointer",
              disabled: m || b || N,
              children: te()
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "text-center text-black/90 text-sm font-normal leading-snug cursor-pointer select-none mt-[12px]",
        onClick: ee,
        children: e(i ? "/.signUp" : "/.alreadyHaveAccount")
      }
    ),
    /* @__PURE__ */ t.jsx(
      fe,
      {
        isOpen: M,
        onClose: () => {
          f(!1), y(!1), x(!1), u(!1);
        },
        loading: R,
        onVerify: Q,
        message: l
      },
      V
    )
  ] });
}
function Me() {
  return /* @__PURE__ */ t.jsx("div", { className: "h-custom-main flex items-center", children: /* @__PURE__ */ t.jsx(Ce, {}) });
}
export {
  Me as default
};
