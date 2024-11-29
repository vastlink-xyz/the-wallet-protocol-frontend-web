import { j as t } from "./vendor-radix-nT--cb5B.js";
import { r } from "./vendor-react-CwfAKKXk.js";
import { u as M, a as u, B as l } from "./vendor-utils-BMKgA_3H.js";
import { c as o, I as R, B, j as C, L as I, g as f, h as b } from "./main-CmE7wmKE.js";
import { L as U } from "./label-uFtGFFgT.js";
import { C as z } from "./checkbox-KgrdgH5g.js";
function T() {
  const { t: s } = M(), [j, $] = r.useState(""), [c, y] = r.useState(""), [m, v] = r.useState(!0), [p, x] = r.useState(!1), [d, h] = r.useState(!1), [n, w] = r.useState(!0), [g, i] = r.useState(!1), N = async (e) => {
    if (!e || !C.test(e))
      return i(!0), !1;
    if (n)
      try {
        const { data: a } = await u.get("https://api.vastwallet.j-labs.xyz/address/", {
          params: {
            email: e
          }
        });
        if (!a.success)
          return i(!0), !1;
      } catch {
      }
    return i(!1), !0;
  };
  async function S() {
    f("call register");
    try {
      h(!0);
      const e = await u.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-otp",
        {
          email: c,
          displayName: j,
          rememberMe: m
        }
      );
      f("register res", e), e.status === 200 && (l.success(
        s("/.otpSentMessage")
      ), h(!1));
    } catch (e) {
      const a = b(e);
      l.error(a.message);
    }
  }
  async function k() {
    try {
      x(!0), (await u.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-login-otp",
        {
          email: c,
          rememberMe: m
        }
      )).status === 200 && (l.success(
        s("/.otpLoginSentMessage")
      ), x(!1));
    } catch (e) {
      const a = b(e);
      l.error(a.message);
    } finally {
      x(!1);
    }
  }
  const A = async (e) => {
    if (e.preventDefault(), n)
      await k();
    else {
      try {
        const { data: a } = await u.get("https://api.vastwallet.j-labs.xyz/address/", {
          params: {
            email: c
          }
        });
        if (a.success) {
          l.error(s("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await S();
    }
  }, E = () => {
    w(!n), i(!1);
  }, L = () => d || p ? /* @__PURE__ */ t.jsx(I, {}) : s(n ? "/.signInButton" : "/.signUpButton");
  return /* @__PURE__ */ t.jsxs("div", { className: o(
    "relative mx-auto overflow-visible",
    "w-[343px] tablet:w-[536px]"
  ), children: [
    /* @__PURE__ */ t.jsx("div", { className: o(
      "text-[#111111] text-[32px] font-bold leading-tight",
      "text-xl tablet:text-[32px]"
    ), children: s(n ? "/.signinTitle" : "/.signupTitle") }),
    /* @__PURE__ */ t.jsx("div", { className: o(
      "mt-[8px]",
      "tablet:whitespace-nowrap",
      "text-[#979797]/90 font-normal leading-snug",
      "text-[10px] tablet:text-sm"
    ), children: "A sign up link will be sent to your email. Please check your inbox and click the link to sign in." }),
    /* @__PURE__ */ t.jsxs(
      "form",
      {
        className: o(
          "group mt-[84px]"
        ),
        onSubmit: (e) => A(e),
        noValidate: !0,
        children: [
          /* @__PURE__ */ t.jsxs("div", { className: "mb-4 relative", children: [
            /* @__PURE__ */ t.jsx(U, { htmlFor: "email", children: s("/.emailLabel") }),
            /* @__PURE__ */ t.jsx(
              R,
              {
                className: o(
                  "mt-[6px]"
                ),
                type: "email",
                id: "email",
                value: c,
                onChange: (e) => y(e.target.value.trim()),
                onBlur: (e) => N(e.target.value),
                placeholder: s("/.emailPlaceholder"),
                required: !0,
                disabled: d || p
              }
            ),
            g && /* @__PURE__ */ t.jsx("span", { className: "absolute -bottom-5 text-xs text-red-500", children: s("/.emailValidationError") })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 p-[10px] mt-[48px]", children: [
            /* @__PURE__ */ t.jsx(
              z,
              {
                id: "rememberMe",
                checked: m,
                onCheckedChange: () => v(!m)
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
            B,
            {
              type: "submit",
              className: "w-full cursor-pointer",
              disabled: d || p || g,
              children: L()
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
        children: s(n ? "/.signUp" : "/.alreadyHaveAccount")
      }
    )
  ] });
}
function H() {
  return /* @__PURE__ */ t.jsx("div", { className: "h-[calc(100vh-60px)] flex items-center", children: /* @__PURE__ */ t.jsx(T, {}) });
}
export {
  H as default
};
