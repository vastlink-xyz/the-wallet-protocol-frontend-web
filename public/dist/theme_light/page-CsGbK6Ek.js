import { j as c } from "./vendor-radix-CNSo_uHA.js";
import { C as j } from "./index-DhQBRzOJ.js";
import { k, j as v, r as i } from "./vendor-react-U4DfHahV.js";
import { g as u, k as m, h as p } from "./main-BjushY0K.js";
import { B as f, a as M } from "./vendor-utils-BclDYac0.js";
function T() {
  const [e] = k(), g = v(), [d, n] = i.useState(!1), [y, h] = i.useState(!0), [x, S] = i.useState(!1);
  i.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), o = e == null ? void 0 : e.get("otp"), r = e == null ? void 0 : e.get("type"), a = e == null ? void 0 : e.get("rememberMe");
      s && o && (r === "login" ? w({
        authUsername: s,
        otp: o,
        isRememberMe: a === "true"
      }) : b({
        registerUsername: s,
        otp: o,
        isRememberMe: a === "true"
      }));
    })();
  }, [e]);
  async function w({
    authUsername: t,
    otp: s,
    isRememberMe: o = !0
  }) {
    u("call authenticate", t), n(!0);
    try {
      await l({
        username: t,
        otp: s,
        isRememberMe: o
      }), await m.signIn({
        authUsername: t
      }), g("/dashboard");
    } catch (r) {
      const a = p(r);
      f.error(a.message);
    } finally {
      n(!1);
    }
  }
  async function b({
    registerUsername: t,
    otp: s,
    isRememberMe: o = !0
  }) {
    u("call register"), h(!1), n(!0);
    try {
      await l({
        username: t,
        otp: s,
        isRememberMe: o
      }), await m.signUp({
        username: t
      }), S(!0);
    } catch (r) {
      const a = p(r);
      f.error(a.message);
    } finally {
      u("register finally"), n(!1);
    }
  }
  async function l({
    username: t,
    otp: s,
    isRememberMe: o = !0
  }) {
    return (await M.post(
      "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/verify-otp",
      {
        email: t,
        OTP: s,
        rememberMe: o
      }
    )).data;
  }
  return d ? /* @__PURE__ */ c.jsx("div", { className: "flex justify-center items-center mt-[200px]", children: /* @__PURE__ */ c.jsx(
    "img",
    {
      src: "/imgs/icons/loading.svg",
      alt: "loading",
      className: "h-[100px] w-[100px] animate-spin mt-[100px]"
    }
  ) }) : x ? /* @__PURE__ */ c.jsx(
    j,
    {
      title: `${y ? "Sign in" : "Sign up"} successfully`,
      buttonText: "Take me to the dashboard",
      redirectUrl: "/dashboard",
      description: "Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
    }
  ) : null;
}
export {
  T as default
};
