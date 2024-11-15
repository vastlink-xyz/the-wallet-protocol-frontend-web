import { j as a } from "./vendor-radix-CNSo_uHA.js";
import { C as j } from "./index--U8cBWcU.js";
import { k, j as v, r as c } from "./vendor-react-U4DfHahV.js";
import { g as l, k as m, h as p } from "./main-DA6B0E96.js";
import { B as f, a as M } from "./vendor-utils-BclDYac0.js";
function I() {
  const [e] = k(), d = v(), [g, i] = c.useState(!1), [h, x] = c.useState(!0), [y, w] = c.useState(!1);
  c.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), n = e == null ? void 0 : e.get("otp"), o = e == null ? void 0 : e.get("type"), r = e == null ? void 0 : e.get("rememberMe");
      s && n && (o === "login" ? S({
        authUsername: s,
        otp: n,
        isRememberMe: r === "true"
      }) : b({
        registerUsername: s,
        otp: n,
        isRememberMe: r === "true"
      }));
    })();
  }, [e]);
  async function S({
    authUsername: t,
    otp: s,
    isRememberMe: n = !0
  }) {
    l("call authenticate", t), i(!0);
    try {
      const o = await u({
        username: t,
        otp: s,
        isRememberMe: n
      });
      await m.signIn({
        authUsername: t
      }), d("/dashboard");
    } catch (o) {
      const r = p(o);
      f.error(r.message);
    } finally {
      i(!1);
    }
  }
  async function b({
    registerUsername: t,
    otp: s,
    isRememberMe: n = !0
  }) {
    l("call register"), x(!1), i(!0);
    try {
      const o = await u({
        username: t,
        otp: s,
        isRememberMe: n
      });
      await m.signUp({
        username: t
      }), w(!0);
    } catch (o) {
      const r = p(o);
      f.error(r.message);
    } finally {
      l("register finally"), i(!1);
    }
  }
  async function u({
    username: t,
    otp: s,
    isRememberMe: n = !0
  }) {
    return (await M.post(
      "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/verify-otp",
      {
        email: t,
        OTP: s,
        rememberMe: n
      }
    )).data;
  }
  return g ? /* @__PURE__ */ a.jsx("div", { className: "flex justify-center items-center mt-[200px]", children: /* @__PURE__ */ a.jsx(
    "img",
    {
      src: "/imgs/icons/loading.svg",
      alt: "loading",
      className: "h-[100px] w-[100px] animate-spin mt-[100px]"
    }
  ) }) : y ? /* @__PURE__ */ a.jsx(
    j,
    {
      title: `${h ? "Sign in" : "Sign up"} successfully`,
      buttonText: "Take me to the dashboard",
      redirectUrl: "/dashboard",
      description: "Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
    }
  ) : /* @__PURE__ */ a.jsx("div", { className: "flex justify-center items-center h-screen", children: /* @__PURE__ */ a.jsx("p", { className: "text-lg", children: "Something went wrong" }) });
}
export {
  I as default
};
