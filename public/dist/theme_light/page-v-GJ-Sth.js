import { j as a } from "./vendor-radix-CXAw23nV.js";
import { C as j } from "./index-BpteYW_5.js";
import { k, j as v, r as c } from "./vendor-react-U4DfHahV.js";
import { f as l, k as m, j as f } from "./main-aLpcFRdZ.js";
import { B as p, a as M } from "./vendor-utils-y1QZaLEY.js";
function I() {
  const [e] = k(), d = v(), [g, i] = c.useState(!1), [h, x] = c.useState(!0), [y, w] = c.useState(!1);
  c.useEffect(() => {
    (async () => {
      const n = e == null ? void 0 : e.get("email"), o = e == null ? void 0 : e.get("otp"), t = e == null ? void 0 : e.get("type"), r = e == null ? void 0 : e.get("rememberMe");
      n && o && (t === "login" ? S({
        authUsername: n,
        otp: o,
        isRememberMe: r === "true"
      }) : b({
        registerUsername: n,
        otp: o,
        isRememberMe: r === "true"
      }));
    })();
  }, [e]);
  async function S({
    authUsername: s,
    otp: n,
    isRememberMe: o = !0
  }) {
    l("call authenticate", s), i(!0);
    try {
      const t = await u({
        username: s,
        otp: n,
        isRememberMe: o
      });
      await m.signIn({
        authUsername: s,
        idToken: t
      }), d("/dashboard");
    } catch (t) {
      const r = f(t);
      p.error(r.message);
    } finally {
      i(!1);
    }
  }
  async function b({
    registerUsername: s,
    otp: n,
    isRememberMe: o = !0
  }) {
    l("call register"), x(!1), i(!0);
    try {
      const t = await u({
        username: s,
        otp: n,
        isRememberMe: o
      });
      await m.signUp({
        username: s,
        idToken: t
      }), w(!0);
    } catch (t) {
      const r = f(t);
      p.error(r.message);
    } finally {
      l("register finally"), i(!1);
    }
  }
  async function u({
    username: s,
    otp: n,
    isRememberMe: o = !0
  }) {
    return (await M.post(
      "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/verify-otp",
      {
        email: s,
        OTP: n,
        rememberMe: o
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
