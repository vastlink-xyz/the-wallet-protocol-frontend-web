import { t as te, v as se, w as ae, j as t, x as D, y as T, A as re, B as ne, D as ie } from "./vendor-radix-CPmBDWYo.js";
import { r as a, k as oe } from "./vendor-react-BA5A8Axg.js";
import { u as ce, a as E, B as w } from "./vendor-utils-DbEkyxvy.js";
import { c as S, o as P, I as le, B as de, V as ue, j as fe, h as V, g as _, L as me } from "./main-D4-Rhh9a.js";
import { L as pe } from "./label-Ck-4DT5_.js";
import { d as he } from "./vendor-ui-utils-BWSrTfCS.js";
var L = "Checkbox", [ge, Re] = te(L), [xe, be] = ge(L), O = a.forwardRef(
  (e, m) => {
    const {
      __scopeCheckbox: n,
      name: k,
      checked: l,
      defaultChecked: o,
      required: d,
      disabled: h,
      value: b = "on",
      onCheckedChange: g,
      form: p,
      ...y
    } = e, [i, C] = a.useState(null), N = se(m, (c) => C(c)), u = a.useRef(!1), M = i ? p || !!i.closest("form") : !0, [f = !1, R] = ae({
      prop: l,
      defaultProp: o,
      onChange: g
    }), j = a.useRef(f);
    return a.useEffect(() => {
      const c = i == null ? void 0 : i.form;
      if (c) {
        const x = () => R(j.current);
        return c.addEventListener("reset", x), () => c.removeEventListener("reset", x);
      }
    }, [i, R]), /* @__PURE__ */ t.jsxs(xe, { scope: n, state: f, disabled: h, children: [
      /* @__PURE__ */ t.jsx(
        D.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": v(f) ? "mixed" : f,
          "aria-required": d,
          "data-state": U(f),
          "data-disabled": h ? "" : void 0,
          disabled: h,
          value: b,
          ...y,
          ref: N,
          onKeyDown: T(e.onKeyDown, (c) => {
            c.key === "Enter" && c.preventDefault();
          }),
          onClick: T(e.onClick, (c) => {
            R((x) => v(x) ? !0 : !x), M && (u.current = c.isPropagationStopped(), u.current || c.stopPropagation());
          })
        }
      ),
      M && /* @__PURE__ */ t.jsx(
        ye,
        {
          control: i,
          bubbles: !u.current,
          name: k,
          value: b,
          checked: f,
          required: d,
          disabled: h,
          form: p,
          style: { transform: "translateX(-100%)" },
          defaultChecked: v(o) ? !1 : o
        }
      )
    ] });
  }
);
O.displayName = L;
var z = "CheckboxIndicator", $ = a.forwardRef(
  (e, m) => {
    const { __scopeCheckbox: n, forceMount: k, ...l } = e, o = be(z, n);
    return /* @__PURE__ */ t.jsx(re, { present: k || v(o.state) || o.state === !0, children: /* @__PURE__ */ t.jsx(
      D.span,
      {
        "data-state": U(o.state),
        "data-disabled": o.disabled ? "" : void 0,
        ...l,
        ref: m,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
$.displayName = z;
var ye = (e) => {
  const { control: m, checked: n, bubbles: k = !0, defaultChecked: l, ...o } = e, d = a.useRef(null), h = ne(n), b = ie(m);
  a.useEffect(() => {
    const p = d.current, y = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(y, "checked").set;
    if (h !== n && C) {
      const N = new Event("click", { bubbles: k });
      p.indeterminate = v(n), C.call(p, v(n) ? !1 : n), p.dispatchEvent(N);
    }
  }, [h, n, k]);
  const g = a.useRef(v(n) ? !1 : n);
  return /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: l ?? g.current,
      ...o,
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
function U(e) {
  return v(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var H = O, ve = $;
const q = a.forwardRef(({ className: e, ...m }, n) => /* @__PURE__ */ t.jsx(
  H,
  {
    ref: n,
    className: S(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...m,
    children: /* @__PURE__ */ t.jsx(
      ve,
      {
        className: S("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ t.jsx(he, { className: "h-4 w-4" })
      }
    )
  }
));
q.displayName = H.displayName;
function ke() {
  const { t: e } = ce(), m = oe(), [n, k] = a.useState(""), [l, o] = a.useState(""), [d, h] = a.useState(!0), [b, g] = a.useState(!1), [p, y] = a.useState(!1), [i, C] = a.useState(!0), [N, u] = a.useState(!1), [M, f] = a.useState(!1), [R, j] = a.useState(!1), [c, x] = a.useState(""), [I, B] = a.useState("signin");
  a.useEffect(() => {
    F();
  }, []);
  const F = () => {
    o(""), y(!1), g(!1), C(!0), u(!1), f(!1), j(!1), x("");
  }, K = async (s) => {
    if (!s || !fe.test(s))
      return u(!0), !1;
    if (i)
      try {
        const { data: r } = await E.get("https://staging.api.vastlink.xyz/address/", {
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
  async function X() {
    try {
      y(!0), (await E.post(
        "https://staging.api.vastlink.xyz/auth/generate-registration-otp",
        {
          email: l,
          displayName: n,
          rememberMe: d
        }
      )).status === 200 && (P.getVerifyMethod() === "email-by-nodemailer" ? (w.success(e("/.otpSentMessage")), y(!1)) : P.getVerifyMethod() === "email-by-sendgrid" && (f(!0), B("signup"), x("A verification code has been sent to your email. Please check your inbox and enter the code to sign up.")));
    } catch (s) {
      const r = V(s);
      w.error(r.message);
    }
  }
  async function G() {
    try {
      g(!0), (await E.post(
        "https://staging.api.vastlink.xyz/auth/generate-login-otp",
        {
          email: l,
          rememberMe: d
        }
      )).status === 200 && (P.getVerifyMethod() === "email-by-nodemailer" ? (w.success(e("/.otpLoginSentMessage")), g(!1)) : P.getVerifyMethod() === "email-by-sendgrid" && (f(!0), B("signin"), x("A verification code has been sent to your email. Please check your inbox and enter the code to sign in.")));
    } catch (s) {
      const r = V(s);
      w.error(r.message);
    } finally {
      g(!1);
    }
  }
  async function J(s) {
    I === "signin" ? W(s) : I === "signup" && Q(s);
  }
  async function Q(s) {
    try {
      j(!0);
      const r = await E.post(
        "https://staging.api.vastlink.xyz/auth/verify-registration-otp",
        {
          email: l,
          OTP: s,
          rememberMe: d
        }
      );
      r.data && r.data.sub && m("/fireblocks_demo");
    } catch (r) {
      const A = V(r);
      w.error(A.message);
    } finally {
      j(!1);
    }
  }
  async function W(s) {
    try {
      j(!0), _("verify login", s);
      const r = await E.post(
        "https://staging.api.vastlink.xyz/auth/verify-login-otp",
        {
          email: l,
          OTP: s,
          rememberMe: d
        }
      );
      _("verify res", r), r.data && r.data.sub && m("/fireblocks_demo");
    } catch (r) {
      const A = V(r);
      w.error(A.message);
    } finally {
      j(!1);
    }
  }
  const Y = async (s) => {
    if (s.preventDefault(), i)
      await G();
    else {
      try {
        const { data: r } = await E.get("https://staging.api.vastlink.xyz/address/", {
          params: {
            email: l
          }
        });
        if (r.success) {
          w.error(e("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await X();
    }
  }, Z = () => {
    C(!i), u(!1);
  }, ee = () => p || b ? /* @__PURE__ */ t.jsx(me, {}) : e(i ? "/.signInButton" : "/.signUpButton");
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
        onSubmit: (s) => Y(s),
        noValidate: !0,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "mb-4 relative", children: [
            /* @__PURE__ */ t.jsx(pe, { htmlFor: "email", children: e("/.emailLabel") }),
            /* @__PURE__ */ t.jsx(
              le,
              {
                className: S(
                  "mt-[6px]"
                ),
                type: "email",
                id: "email",
                value: l,
                onChange: (s) => o(s.target.value.trim()),
                onBlur: (s) => K(s.target.value),
                placeholder: e("/.emailPlaceholder"),
                required: !0,
                disabled: p || b
              }
            ),
            N && /* @__PURE__ */ t.jsx("span", { className: "absolute -bottom-5 text-xs text-red-500", children: e("/.emailValidationError") })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 p-[10px] mt-[48px]", children: [
            /* @__PURE__ */ t.jsx(
              q,
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
            de,
            {
              type: "submit",
              className: "w-full cursor-pointer",
              disabled: p || b || N,
              children: ee()
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "text-center text-black/90 text-sm font-normal leading-snug cursor-pointer select-none mt-[12px]",
        onClick: Z,
        children: e(i ? "/.signUp" : "/.alreadyHaveAccount")
      }
    ),
    /* @__PURE__ */ t.jsx(
      ue,
      {
        isOpen: M,
        onClose: () => {
          f(!1), y(!1), g(!1), u(!1);
        },
        loading: R,
        onVerify: J,
        message: c
      },
      I
    )
  ] });
}
function Pe() {
  return /* @__PURE__ */ t.jsx("div", { className: "h-custom-main flex items-center", children: /* @__PURE__ */ t.jsx(ke, {}) });
}
export {
  Pe as default
};
