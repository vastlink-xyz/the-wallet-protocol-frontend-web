import { j as a } from "./vendor-radix-CtBTfL6E.js";
import { C as j } from "./index-CHCLczVB.js";
import { k, j as v, r as c } from "./vendor-react-lU71vM3H.js";
import { b as l, h as m } from "./main-BiNWeoEw.js";
import { B as p, a as M } from "./vendor-utils-CKvC_yGz.js";
import { k as f } from "./index-DZmehw99.js";
function A() {
  const [e] = k(), d = v(), [g, i] = c.useState(!1), [h, x] = c.useState(!0), [y, w] = c.useState(!1);
  c.useEffect(() => {
    (async () => {
      const o = e == null ? void 0 : e.get("email"), n = e == null ? void 0 : e.get("otp"), t = e == null ? void 0 : e.get("type"), r = e == null ? void 0 : e.get("rememberMe");
      o && n && (t === "login" ? S({
        authUsername: o,
        otp: n,
        isRememberMe: r === "true"
      }) : b({
        registerUsername: o,
        otp: n,
        isRememberMe: r === "true"
      }));
    })();
  }, [e]);
  async function S({
    authUsername: s,
    otp: o,
    isRememberMe: n = !0
  }) {
    l("call authenticate", s), i(!0);
    try {
      const t = await u({
        username: s,
        otp: o,
        isRememberMe: n
      });
      await f.signIn({
        authUsername: s,
        idToken: t
      }), d("/dashboard");
    } catch (t) {
      const r = m(t);
      p.error(r.message);
    } finally {
      i(!1);
    }
  }
  async function b({
    registerUsername: s,
    otp: o,
    isRememberMe: n = !0
  }) {
    l("call register"), x(!1), i(!0);
    try {
      const t = await u({
        username: s,
        otp: o,
        isRememberMe: n
      });
      await f.signUp({
        username: s,
        idToken: t
      }), w(!0);
    } catch (t) {
      const r = m(t);
      p.error(r.message);
    } finally {
      l("register finally"), i(!1);
    }
  }
  async function u({
    username: s,
    otp: o,
    isRememberMe: n = !0
  }) {
    return (await M.post(
      "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/verify-otp",
      {
        email: s,
        OTP: o,
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
  A as default
};
