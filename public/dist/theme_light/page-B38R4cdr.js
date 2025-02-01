import { j as o } from "./vendor-radix-AvjOLIap.js";
import { C as k } from "./index-Bn66942N.js";
import { m as M, l as R, a as u } from "./vendor-react-DSEtE0wE.js";
import { g as c, k as l, h as m } from "./main-CXGbnggO.js";
import { B as f, a as p } from "./vendor-utils-Q0yJ_o1H.js";
import { L as C } from "./index-DHGdJzDo.js";
function $() {
  const [e] = M(), g = R(), [d, i] = u.useState(!1), [y, h] = u.useState(!0), [x, S] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), n = e == null ? void 0 : e.get("otp"), r = e == null ? void 0 : e.get("type"), a = e == null ? void 0 : e.get("rememberMe");
      s && n && (r === "login" ? b({
        authUsername: s,
        otp: n,
        isRememberMe: a === "true"
      }) : w({
        registerUsername: s,
        otp: n,
        isRememberMe: a === "true"
      }));
    })();
  }, [e]);
  async function b({
    authUsername: t,
    otp: s,
    isRememberMe: n = !0
  }) {
    c("call authenticate", t), i(!0);
    try {
      await j({
        username: t,
        otp: s,
        isRememberMe: n
      }), await l.signIn({
        authUsername: t
      }), g("/dashboard");
    } catch (r) {
      const a = m(r);
      f.error(a.message);
    } finally {
      i(!1);
    }
  }
  async function w({
    registerUsername: t,
    otp: s,
    isRememberMe: n = !0
  }) {
    c("call register"), h(!1), i(!0);
    try {
      await v({
        username: t,
        otp: s,
        isRememberMe: n
      }), await l.signUp({
        username: t
      }), S(!0);
    } catch (r) {
      const a = m(r);
      f.error(a.message);
    } finally {
      c("register finally"), i(!1);
    }
  }
  async function v({
    username: t,
    otp: s,
    isRememberMe: n = !0
  }) {
    return (await p.post(
      "https://staging.api.vastlink.xyz/auth/verify-registration-otp",
      {
        email: t,
        OTP: s,
        rememberMe: n
      }
    )).data;
  }
  async function j({
    username: t,
    otp: s,
    isRememberMe: n = !0
  }) {
    return (await p.post(
      "https://staging.api.vastlink.xyz/auth/verify-login-otp",
      {
        email: t,
        OTP: s,
        rememberMe: n
      }
    )).data;
  }
  return /* @__PURE__ */ o.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: d ? /* @__PURE__ */ o.jsx(C, {}) : x ? /* @__PURE__ */ o.jsx("div", { className: "-mt-[48px]", children: /* @__PURE__ */ o.jsx(
    k,
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
