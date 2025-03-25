import { j as i } from "./vendor-radix-BYJ0AyiX.js";
import { C as M } from "./index-CK7Whage.js";
import { l as k, k as R, r as u } from "./vendor-react-CuOkI7kW.js";
import { g as l, k as c, h as m } from "./main-Cs8rq8oH.js";
import { B as f, a as p } from "./vendor-utils-BfzDPiRN.js";
import { L as C } from "./index-CMEmOasf.js";
function $() {
  const [e] = k(), g = R(), [d, o] = u.useState(!1), [y, h] = u.useState(!0), [b, x] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), r = e == null ? void 0 : e.get("otp"), a = e == null ? void 0 : e.get("type"), n = e == null ? void 0 : e.get("rememberMe");
      s && r && (a === "login" ? w({
        authUsername: s,
        otp: r,
        isRememberMe: n === "true"
      }) : S({
        registerUsername: s,
        otp: r,
        isRememberMe: n === "true"
      }));
    })();
  }, [e]);
  async function w({
    authUsername: t,
    otp: s,
    isRememberMe: r = !0
  }) {
    l("call authenticate", t), o(!0);
    try {
      await j({
        username: t,
        otp: s,
        isRememberMe: r
      }), await c.signIn({
        authUsername: t
      }), g("/dashboard");
    } catch (a) {
      const n = m(a);
      f.error(n.message);
    } finally {
      o(!1);
    }
  }
  async function S({
    registerUsername: t,
    otp: s,
    isRememberMe: r = !0
  }) {
    l("call register"), h(!1), o(!0);
    try {
      await v({
        username: t,
        otp: s,
        isRememberMe: r
      }), await c.signUp({
        username: t
      }), x(!0);
    } catch (a) {
      const n = m(a);
      f.error(n.message);
    } finally {
      l("register finally"), o(!1);
    }
  }
  async function v({
    username: t,
    otp: s,
    isRememberMe: r = !0
  }) {
    return (await p.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-registration-otp",
      {
        email: t,
        OTP: s,
        rememberMe: r
      }
    )).data;
  }
  async function j({
    username: t,
    otp: s,
    isRememberMe: r = !0
  }) {
    return (await p.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-login-otp",
      {
        email: t,
        OTP: s,
        rememberMe: r
      }
    )).data;
  }
  return /* @__PURE__ */ i.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: d ? /* @__PURE__ */ i.jsx(C, {}) : b ? /* @__PURE__ */ i.jsx("div", { className: "-mt-[48px]", children: /* @__PURE__ */ i.jsx(
    M,
    {
      title: `${y ? "Sign in" : "Sign up"} successfully`,
      buttonText: "Take me to the dashboard",
      redirectUrl: "/dashboard",
      description: "Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
    }
  ) }) : null });
}
export {
  $ as default
};
