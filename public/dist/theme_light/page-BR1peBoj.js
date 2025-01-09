import { j as i } from "./vendor-radix-AvjOLIap.js";
import { C as j } from "./index-BPImkhik.js";
import { m as v, l as M, a as u } from "./vendor-react-DSEtE0wE.js";
import { g as c, k as m, h as f } from "./main-BMueK7Y5.js";
import { B as p, a as k } from "./vendor-utils-BPVAmMsZ.js";
import { L as C } from "./index-CPvK7NgA.js";
function A() {
  const [e] = v(), d = M(), [g, o] = u.useState(!1), [y, h] = u.useState(!0), [x, S] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), a = e == null ? void 0 : e.get("otp"), r = e == null ? void 0 : e.get("type"), n = e == null ? void 0 : e.get("rememberMe");
      s && a && (r === "login" ? b({
        authUsername: s,
        otp: a,
        isRememberMe: n === "true"
      }) : w({
        registerUsername: s,
        otp: a,
        isRememberMe: n === "true"
      }));
    })();
  }, [e]);
  async function b({
    authUsername: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    c("call authenticate", t), o(!0);
    try {
      await l({
        username: t,
        otp: s,
        isRememberMe: a
      }), await m.signIn({
        authUsername: t
      }), d("/dashboard");
    } catch (r) {
      const n = f(r);
      p.error(n.message);
    } finally {
      o(!1);
    }
  }
  async function w({
    registerUsername: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    c("call register"), h(!1), o(!0);
    try {
      await l({
        username: t,
        otp: s,
        isRememberMe: a
      }), await m.signUp({
        username: t
      }), S(!0);
    } catch (r) {
      const n = f(r);
      p.error(n.message);
    } finally {
      c("register finally"), o(!1);
    }
  }
  async function l({
    username: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    return (await k.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-otp",
      {
        email: t,
        OTP: s,
        rememberMe: a
      }
    )).data;
  }
  return /* @__PURE__ */ i.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: g ? /* @__PURE__ */ i.jsx(C, {}) : x ? /* @__PURE__ */ i.jsx("div", { className: "-mt-[48px]", children: /* @__PURE__ */ i.jsx(
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
