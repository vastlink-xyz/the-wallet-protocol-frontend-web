import { j as t } from "./vendor-radix-nT--cb5B.js";
import { r } from "./vendor-react-CwfAKKXk.js";
import { u as M, a as u, B as i } from "./vendor-utils-DOORVzle.js";
import { c as o, I as R, B, j as C, L as I, g as h, h as b } from "./main-BY45iJ-a.js";
import { L as U } from "./label-Csn0AnSo.js";
import { C as z } from "./checkbox-CcvB0OwM.js";
function T() {
  const { t: s } = M(), [j, $] = r.useState(""), [c, y] = r.useState(""), [m, v] = r.useState(!0), [p, x] = r.useState(!1), [d, g] = r.useState(!1), [n, w] = r.useState(!0), [f, l] = r.useState(!1), S = async (e) => {
    if (!e || !C.test(e))
      return l(!0), !1;
    if (n)
      try {
        const { data: a } = await u.get("https://api.vastwallet.j-labs.xyz/address/", {
          params: {
            email: e
          }
        });
        if (!a.success)
          return l(!0), !1;
      } catch {
      }
    return l(!1), !0;
  };
  async function N() {
    h("call register");
    try {
      g(!0);
      const e = await u.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-otp",
        {
          email: c,
          displayName: j,
          rememberMe: m
        }
      );
      h("register res", e), e.status === 200 && (i.success(
        s("/.otpSentMessage")
      ), g(!1));
    } catch (e) {
      const a = b(e);
      i.error(a.message);
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
      )).status === 200 && (i.success(
        s("/.otpLoginSentMessage")
      ), x(!1));
    } catch (e) {
      const a = b(e);
      i.error(a.message);
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
          i.error(s("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await N();
    }
  }, E = () => {
    w(!n), l(!1);
  }, L = () => d || p ? /* @__PURE__ */ t.jsx(I, {}) : s(n ? "/.signInButton" : "/.signUpButton");
  return /* @__PURE__ */ t.jsxs("div", { className: o(
    "relative mx-auto overflow-visible",
    "w-[343px] tablet:w-[536px]",
    "pt-[60px] tablet:pt-[120px]"
  ), children: [
    /* @__PURE__ */ t.jsx("div", { className: o(
      "text-[#111111] text-[32px] font-bold leading-tight",
      "text-xl tablet:text-[32px]"
    ), children: s(n ? "/.signinTitle" : "/.signupTitle") }),
    /* @__PURE__ */ t.jsx("div", { className: o(
      "tablet:whitespace-nowrap",
      "absolute left-0",
      "top-[87px] tablet:top-[155px]",
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
                onBlur: (e) => S(e.target.value),
                placeholder: s("/.emailPlaceholder"),
                required: !0,
                disabled: d || p
              }
            ),
            f && /* @__PURE__ */ t.jsx("span", { className: "absolute -bottom-5 text-xs text-red-500", children: s("/.emailValidationError") })
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
              disabled: d || p || f,
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
  return /* @__PURE__ */ t.jsx(T, {});
}
export {
  H as default
};
