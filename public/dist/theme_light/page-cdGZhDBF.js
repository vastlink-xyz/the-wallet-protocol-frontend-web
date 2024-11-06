import { j as t } from "./vendor-radix-D0lo_cKZ.js";
import { r } from "./vendor-react-CA5sEv1f.js";
import { u as B, b as p, B as n } from "./vendor-utils-C-Nds55G.js";
import { c as l, e as I, a as b } from "./main-B77raCsP.js";
import { h as y } from "./error-EuuGdfel.js";
import { I as j } from "./input-CC8JUZAX.js";
import { L as N } from "./label-CaqIVIIl.js";
import { B as L } from "./button-CKwz-iep.js";
import { C as U } from "./checkbox-DqrXzfMG.js";
function $() {
  const { t: a } = B(), [h, v] = r.useState(""), [c, w] = r.useState(""), [m, S] = r.useState(!0), [u, d] = r.useState(!1), [x, f] = r.useState(!1), [o, k] = r.useState(!0), [g, i] = r.useState(!1), A = async (e) => {
    if (!e || !I.test(e))
      return i(!0), !1;
    if (o)
      try {
        const { data: s } = await p.get("https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/address/", {
          params: {
            email: e
          }
        });
        if (!s.success)
          return i(!0), !1;
      } catch {
      }
    return i(!1), !0;
  };
  async function E() {
    b("call register");
    try {
      f(!0);
      const e = await p.post(
        "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/generate-otp",
        {
          email: c,
          displayName: h,
          rememberMe: m
        }
      );
      b("register res", e), e.status === 200 && (n.success(
        a("/.otpSentMessage")
      ), f(!1));
    } catch (e) {
      const s = y(e);
      n.error(s.message);
    }
  }
  async function C() {
    try {
      d(!0), (await p.post(
        "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/generate-login-otp",
        {
          email: c,
          rememberMe: m
        }
      )).status === 200 && (n.success(
        a("/.otpLoginSentMessage")
      ), d(!1));
    } catch (e) {
      const s = y(e);
      n.error(s.message);
    } finally {
      d(!1);
    }
  }
  const M = async (e) => {
    if (e.preventDefault(), o)
      await C();
    else {
      try {
        const { data: s } = await p.get("https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/address/", {
          params: {
            email: c
          }
        });
        if (s.success) {
          n.error(a("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await E();
    }
  }, R = () => {
    k(!o), i(!1);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: l(
    "relative mx-auto overflow-visible",
    "w-[343px] tablet:w-[536px]",
    "pt-[60px] tablet:pt-[120px]"
  ), children: [
    /* @__PURE__ */ t.jsx("div", { className: l(
      "text-[#111111] text-[32px] font-bold leading-tight",
      "text-xl tablet:text-[32px]"
    ), children: a(o ? "/.signinTitle" : "/.signupTitle") }),
    /* @__PURE__ */ t.jsx("div", { className: l(
      "tablet:whitespace-nowrap",
      "absolute left-0",
      "top-[87px] tablet:top-[155px]",
      "text-[#979797]/90 font-normal leading-snug",
      "text-[10px] tablet:text-sm"
    ), children: "A sign up link will be sent to your email. Please check your inbox and click the link to sign in." }),
    /* @__PURE__ */ t.jsxs(
      "form",
      {
        className: l(
          "group mt-[84px]"
        ),
        onSubmit: (e) => M(e),
        noValidate: !0,
        children: [
          !o && /* @__PURE__ */ t.jsxs("div", { className: "mb-[40px] relative", children: [
            /* @__PURE__ */ t.jsx(N, { htmlFor: "displayName", children: "Name" }),
            /* @__PURE__ */ t.jsx(
              j,
              {
                className: l(
                  "mt-[6px]"
                ),
                type: "text",
                id: "displayName",
                value: h,
                onChange: (e) => v(e.target.value.trim()),
                placeholder: "Display Name",
                required: !0,
                disabled: x || u
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "mb-4 relative", children: [
            /* @__PURE__ */ t.jsx(N, { htmlFor: "email", children: a("/.emailLabel") }),
            /* @__PURE__ */ t.jsx(
              j,
              {
                className: l(
                  "mt-[6px]"
                ),
                type: "email",
                id: "email",
                value: c,
                onChange: (e) => w(e.target.value.trim()),
                onBlur: (e) => A(e.target.value),
                placeholder: a("/.emailPlaceholder"),
                required: !0,
                disabled: x || u
              }
            ),
            g && /* @__PURE__ */ t.jsx("span", { className: "absolute -bottom-5 text-xs text-red-500", children: a("/.emailValidationError") })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 mt-[48px] p-[10px]", children: [
            /* @__PURE__ */ t.jsx(
              U,
              {
                id: "rememberMe",
                checked: m,
                onCheckedChange: () => S(!m)
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
            L,
            {
              type: "submit",
              className: "w-full cursor-pointer",
              disabled: x || u || g,
              children: "Send to email"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "text-center text-black/90 text-sm font-normal leading-snug cursor-pointer select-none mt-[12px]",
        onClick: R,
        children: a(o ? "/.signUp" : "/.alreadyHaveAccount")
      }
    )
  ] });
}
function G() {
  return /* @__PURE__ */ t.jsx($, {});
}
export {
  G as default
};
