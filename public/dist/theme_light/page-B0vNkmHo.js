import { j as i } from "./vendor-radix-AvjOLIap.js";
import { C as M } from "./index-MtMPgGPJ.js";
import { m as k, l as R, a as u } from "./vendor-react-DSEtE0wE.js";
import { g as c, k as l, h as m } from "./main-DV2eeK4Q.js";
import { B as f, a as p } from "./vendor-utils-Q0yJ_o1H.js";
import { L as C } from "./index-CS0Zbm51.js";
function $() {
  const [e] = k(), g = R(), [d, a] = u.useState(!1), [y, h] = u.useState(!0), [S, b] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), o = e == null ? void 0 : e.get("otp"), r = e == null ? void 0 : e.get("type"), n = e == null ? void 0 : e.get("rememberMe");
      s && o && (r === "login" ? x({
        authUsername: s,
        otp: o,
        isRememberMe: n === "true"
      }) : w({
        registerUsername: s,
        otp: o,
        isRememberMe: n === "true"
      }));
    })();
  }, [e]);
  async function x({
    authUsername: t,
    otp: s,
    isRememberMe: o = !0
  }) {
    c("call authenticate", t), a(!0);
    try {
      await j({
        username: t,
        otp: s,
        isRememberMe: o
      }), await l.signIn({
        authUsername: t
      }), g("/dashboard");
    } catch (r) {
      const n = m(r);
      f.error(n.message);
    } finally {
      a(!1);
    }
  }
  async function w({
    registerUsername: t,
    otp: s,
    isRememberMe: o = !0
  }) {
    c("call register"), h(!1), a(!0);
    try {
      await v({
        username: t,
        otp: s,
        isRememberMe: o
      }), await l.signUp({
        username: t
      }), b(!0);
    } catch (r) {
      const n = m(r);
      f.error(n.message);
    } finally {
      c("register finally"), a(!1);
    }
  }
  async function v({
    username: t,
    otp: s,
    isRememberMe: o = !0
  }) {
    return (await p.post(
      "http://localhost:5001/auth/verify-registration-otp",
      {
        email: t,
        OTP: s,
        rememberMe: o
      }
    )).data;
  }
  async function j({
    username: t,
    otp: s,
    isRememberMe: o = !0
  }) {
    return (await p.post(
      "http://localhost:5001/auth/verify-login-otp",
      {
        email: t,
        OTP: s,
        rememberMe: o
      }
    )).data;
  }
  return /* @__PURE__ */ i.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: d ? /* @__PURE__ */ i.jsx(C, {}) : S ? /* @__PURE__ */ i.jsx("div", { className: "-mt-[48px]", children: /* @__PURE__ */ i.jsx(
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
