import { j as i } from "./vendor-radix-nT--cb5B.js";
import { C as j } from "./index-CojELWlp.js";
import { k as v, j as k, r as u } from "./vendor-react-CwfAKKXk.js";
import { g as c, k as f, h as m } from "./main-CKrQADNS.js";
import { B as p, a as M } from "./vendor-utils-BMKgA_3H.js";
import { L as C } from "./index-CdsDmRmp.js";
function A() {
  const [e] = v(), d = k(), [g, o] = u.useState(!1), [y, h] = u.useState(!0), [x, S] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), r = e == null ? void 0 : e.get("otp"), a = e == null ? void 0 : e.get("type"), n = e == null ? void 0 : e.get("rememberMe");
      s && r && (a === "login" ? b({
        authUsername: s,
        otp: r,
        isRememberMe: n === "true"
      }) : w({
        registerUsername: s,
        otp: r,
        isRememberMe: n === "true"
      }));
    })();
  }, [e]);
  async function b({
    authUsername: t,
    otp: s,
    isRememberMe: r = !0
  }) {
    c("call authenticate", t), o(!0);
    try {
      await l({
        username: t,
        otp: s,
        isRememberMe: r
      }), await f.signIn({
        authUsername: t
      }), d("/dashboard");
    } catch (a) {
      const n = m(a);
      p.error(n.message);
    } finally {
      o(!1);
    }
  }
  async function w({
    registerUsername: t,
    otp: s,
    isRememberMe: r = !0
  }) {
    c("call register"), h(!1), o(!0);
    try {
      await l({
        username: t,
        otp: s,
        isRememberMe: r
      }), await f.signUp({
        username: t
      }), S(!0);
    } catch (a) {
      const n = m(a);
      p.error(n.message);
    } finally {
      c("register finally"), o(!1);
    }
  }
  async function l({
    username: t,
    otp: s,
    isRememberMe: r = !0
  }) {
    return (await M.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-otp",
      {
        email: t,
        OTP: s,
        rememberMe: r
      }
    )).data;
  }
  return /* @__PURE__ */ i.jsx("div", { className: "min-h-[calc(100vh-60px)] flex items-center justify-center", children: g ? /* @__PURE__ */ i.jsx(C, {}) : x ? /* @__PURE__ */ i.jsx("div", { className: "-mt-[48px]", children: /* @__PURE__ */ i.jsx(
    j,
    {
      title: `${y ? "Sign in" : "Sign up"} successfully`,
      buttonText: "Take me to the dashboard",
      redirectUrl: "/dashboard",
      description: "Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
    }
  ) }) : null });
}
export {
  A as default
};
