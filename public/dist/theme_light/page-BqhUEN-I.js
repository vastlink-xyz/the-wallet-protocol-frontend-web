import { j as i } from "./vendor-radix-AvjOLIap.js";
import { C as M } from "./index-DNok3q_R.js";
import { m as k, l as R, a as u } from "./vendor-react-DSEtE0wE.js";
import { g as l, k as c, h as m } from "./main-93vrANEB.js";
import { B as f, a as p } from "./vendor-utils-Q0yJ_o1H.js";
import { L as C } from "./index-DzC3OD7r.js";
function $() {
  const [e] = k(), g = R(), [d, o] = u.useState(!1), [y, h] = u.useState(!0), [b, x] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), a = e == null ? void 0 : e.get("otp"), r = e == null ? void 0 : e.get("type"), n = e == null ? void 0 : e.get("rememberMe");
      s && a && (r === "login" ? w({
        authUsername: s,
        otp: a,
        isRememberMe: n === "true"
      }) : S({
        registerUsername: s,
        otp: a,
        isRememberMe: n === "true"
      }));
    })();
  }, [e]);
  async function w({
    authUsername: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    l("call authenticate", t), o(!0);
    try {
      await j({
        username: t,
        otp: s,
        isRememberMe: a
      }), await c.signIn({
        authUsername: t
      }), g("/dashboard");
    } catch (r) {
      const n = m(r);
      f.error(n.message);
    } finally {
      o(!1);
    }
  }
  async function S({
    registerUsername: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    l("call register"), h(!1), o(!0);
    try {
      await v({
        username: t,
        otp: s,
        isRememberMe: a
      }), await c.signUp({
        username: t
      }), x(!0);
    } catch (r) {
      const n = m(r);
      f.error(n.message);
    } finally {
      l("register finally"), o(!1);
    }
  }
  async function v({
    username: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    return (await p.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-registration-otp",
      {
        email: t,
        OTP: s,
        rememberMe: a
      }
    )).data;
  }
  async function j({
    username: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    return (await p.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-login-otp",
      {
        email: t,
        OTP: s,
        rememberMe: a
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
