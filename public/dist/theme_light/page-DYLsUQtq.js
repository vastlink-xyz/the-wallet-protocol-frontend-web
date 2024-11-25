import { j as t } from "./vendor-radix-nT--cb5B.js";
import { r } from "./vendor-react-CwfAKKXk.js";
import { u as M, a as u, B as i } from "./vendor-utils-DOORVzle.js";
import { c as o, I as R, B, j as C, g, h as b } from "./main-Gzb6y-w8.js";
import { L as I } from "./label-CPPy9qx5.js";
import { C as U } from "./checkbox-CvRfsEyN.js";
function z() {
  const { t: s } = M(), [y, L] = r.useState(""), [c, j] = r.useState(""), [m, v] = r.useState(!0), [x, p] = r.useState(!1), [d, h] = r.useState(!1), [n, w] = r.useState(!0), [f, l] = r.useState(!1), S = async (e) => {
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
    g("call register");
    try {
      h(!0);
      const e = await u.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-otp",
        {
          email: c,
          displayName: y,
          rememberMe: m
        }
      );
      g("register res", e), e.status === 200 && (i.success(
        s("/.otpSentMessage")
      ), h(!1));
    } catch (e) {
      const a = b(e);
      i.error(a.message);
    }
  }
  async function k() {
    try {
      p(!0), (await u.post(
        "https://api.vastwallet.j-labs.xyz/auth/generate-login-otp",
        {
          email: c,
          rememberMe: m
        }
      )).status === 200 && (i.success(
        s("/.otpLoginSentMessage")
      ), p(!1));
    } catch (e) {
      const a = b(e);
      i.error(a.message);
    } finally {
      p(!1);
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
  };
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
            /* @__PURE__ */ t.jsx(I, { htmlFor: "email", children: s("/.emailLabel") }),
            /* @__PURE__ */ t.jsx(
              R,
              {
                className: o(
                  "mt-[6px]"
                ),
                type: "email",
                id: "email",
                value: c,
                onChange: (e) => j(e.target.value.trim()),
                onBlur: (e) => S(e.target.value),
                placeholder: s("/.emailPlaceholder"),
                required: !0,
                disabled: d || x
              }
            ),
            f && /* @__PURE__ */ t.jsx("span", { className: "absolute -bottom-5 text-xs text-red-500", children: s("/.emailValidationError") })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 p-[10px] mt-[48px]", children: [
            /* @__PURE__ */ t.jsx(
              U,
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
              disabled: d || x || f,
              children: s(n ? "/.signInButton" : "/.signUpButton")
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
function _() {
  return /* @__PURE__ */ t.jsx(z, {});
}
export {
  _ as default
};
