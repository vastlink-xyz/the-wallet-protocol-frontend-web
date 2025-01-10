import { j as i } from "./vendor-radix-BYJ0AyiX.js";
import { C as j } from "./index-g-AfEFAl.js";
import { l as v, k, r as u } from "./vendor-react-CuOkI7kW.js";
import { g as c, k as m, h as f } from "./main-B1SHNhU7.js";
import { B as p, a as M } from "./vendor-utils-BfzDPiRN.js";
import { L as C } from "./index-3QF42qaW.js";
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
      }), await m.signIn({
        authUsername: t
      }), d("/dashboard");
    } catch (a) {
      const n = f(a);
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
      }), await m.signUp({
        username: t
      }), S(!0);
    } catch (a) {
      const n = f(a);
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
