import { j as t } from "./vendor-radix-BcySUdtt.js";
import { a as r } from "./vendor-react-BdtkaT_f.js";
import { u as M, a as m, B as l } from "./vendor-utils-CISROZyj.js";
import { c as i, I as R, B, i as C, f as g, j as b } from "./main-CDK5RuLO.js";
import { L as I } from "./label-CaKGckwU.js";
import { C as U } from "./checkbox-CUO5jtUw.js";
function L() {
  const { t: a } = M(), [w, $] = r.useState(""), [c, y] = r.useState(""), [p, j] = r.useState(!0), [d, u] = r.useState(!1), [x, h] = r.useState(!1), [o, k] = r.useState(!0), [f, n] = r.useState(!1), v = async (e) => {
    if (!e || !C.test(e))
      return n(!0), !1;
    if (o)
      try {
        const { data: s } = await m.get("https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/address/", {
          params: {
            email: e
          }
        });
        if (!s.success)
          return n(!0), !1;
      } catch {
      }
    return n(!1), !0;
  };
  async function S() {
    g("call register");
    try {
      h(!0);
      const e = await m.post(
        "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/generate-otp",
        {
          email: c,
          displayName: w,
          rememberMe: p
        }
      );
      g("register res", e), e.status === 200 && (l.success(
        a("/.otpSentMessage")
      ), h(!1));
    } catch (e) {
      const s = b(e);
      l.error(s.message);
    }
  }
  async function N() {
    try {
      u(!0), (await m.post(
        "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/generate-login-otp",
        {
          email: c,
          rememberMe: p
        }
      )).status === 200 && (l.success(
        a("/.otpLoginSentMessage")
      ), u(!1));
    } catch (e) {
      const s = b(e);
      l.error(s.message);
    } finally {
      u(!1);
    }
  }
  const A = async (e) => {
    if (e.preventDefault(), o)
      await N();
    else {
      try {
        const { data: s } = await m.get("https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/address/", {
          params: {
            email: c
          }
        });
        if (s.success) {
          l.error(a("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await S();
    }
  }, E = () => {
    k(!o), n(!1);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: i(
    "relative mx-auto overflow-visible",
    "w-[343px] tablet:w-[536px]",
    "pt-[60px] tablet:pt-[120px]"
  ), children: [
    /* @__PURE__ */ t.jsx("div", { className: i(
      "text-[#111111] text-[32px] font-bold leading-tight",
      "text-xl tablet:text-[32px]"
    ), children: a(o ? "/.signinTitle" : "/.signupTitle") }),
    /* @__PURE__ */ t.jsx("div", { className: i(
      "tablet:whitespace-nowrap",
      "absolute left-0",
      "top-[87px] tablet:top-[155px]",
      "text-[#979797]/90 font-normal leading-snug",
      "text-[10px] tablet:text-sm"
    ), children: "A sign up link will be sent to your email. Please check your inbox and click the link to sign in." }),
    /* @__PURE__ */ t.jsxs(
      "form",
      {
        className: i(
          "group mt-[84px]"
        ),
        onSubmit: (e) => A(e),
        noValidate: !0,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "mb-4 relative", children: [
            /* @__PURE__ */ t.jsx(I, { htmlFor: "email", children: a("/.emailLabel") }),
            /* @__PURE__ */ t.jsx(
              R,
              {
                className: i(
                  "mt-[6px]"
                ),
                type: "email",
                id: "email",
                value: c,
                onChange: (e) => y(e.target.value.trim()),
                onBlur: (e) => v(e.target.value),
                placeholder: a("/.emailPlaceholder"),
                required: !0,
                disabled: x || d
              }
            ),
            f && /* @__PURE__ */ t.jsx("span", { className: "absolute -bottom-5 text-xs text-red-500", children: a("/.emailValidationError") })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 p-[10px] mt-[48px]", children: [
            /* @__PURE__ */ t.jsx(
              U,
              {
                id: "rememberMe",
                checked: p,
                onCheckedChange: () => j(!p)
              }
            ),
            /* @__PURE__ */ t.jsx(
              "label",
              {
                htmlFor: "rememberMe",
                className: "text-xs text-black leading-none font-normal cursor-pointer select-none",
                children: "Remember me for 30 days"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx(
            B,
            {
              type: "submit",
              className: "w-full cursor-pointer",
              disabled: x || d || f,
              children: a(o ? "/.signInButton" : "/.signUpButton")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "text-center text-black/90 text-sm font-normal leading-snug cursor-pointer select-none mt-[12px]",
        onClick: E,
        children: a(o ? "/.signUp" : "/.alreadyHaveAccount")
      }
    )
  ] });
}
function q() {
  return /* @__PURE__ */ t.jsx(L, {});
}
export {
  q as default
};
