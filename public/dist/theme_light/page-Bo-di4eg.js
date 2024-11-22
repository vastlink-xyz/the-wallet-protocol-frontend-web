import { j as u } from "./vendor-radix-hWeKeDdS.js";
import { C as v } from "./index-BCXm_x-t.js";
import { l as j, k, a as i } from "./vendor-react-DM3ZG7W6.js";
import { g as l, k as m, h as f } from "./main-DGj32xDv.js";
import { B as p, a as M } from "./vendor-utils-Ca3Nf2P-.js";
function T() {
  const [e] = j(), g = k(), [d, o] = i.useState(!1), [y, x] = i.useState(!0), [h, S] = i.useState(!1);
  i.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), a = e == null ? void 0 : e.get("otp"), n = e == null ? void 0 : e.get("type"), r = e == null ? void 0 : e.get("rememberMe");
      s && a && (n === "login" ? b({
        authUsername: s,
        otp: a,
        isRememberMe: r === "true"
      }) : w({
        registerUsername: s,
        otp: a,
        isRememberMe: r === "true"
      }));
    })();
  }, [e]);
  async function b({
    authUsername: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    l("call authenticate", t), o(!0);
    try {
      await c({
        username: t,
        otp: s,
        isRememberMe: a
      }), await m.signIn({
        authUsername: t
      }), g("/dashboard");
    } catch (n) {
      const r = f(n);
      p.error(r.message);
    } finally {
      o(!1);
    }
  }
  async function w({
    registerUsername: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    l("call register"), x(!1), o(!0);
    try {
      await c({
        username: t,
        otp: s,
        isRememberMe: a
      }), await m.signUp({
        username: t
      }), S(!0);
    } catch (n) {
      const r = f(n);
      p.error(r.message);
    } finally {
      l("register finally"), o(!1);
    }
  }
  async function c({
    username: t,
    otp: s,
    isRememberMe: a = !0
  }) {
    return (await M.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-otp",
      {
        email: t,
        OTP: s,
        rememberMe: a
      }
    )).data;
  }
  return d ? /* @__PURE__ */ u.jsx("div", { className: "flex justify-center items-center mt-[200px]", children: /* @__PURE__ */ u.jsx(
    "img",
    {
      src: "/imgs/icons/loading.svg",
      alt: "loading",
      className: "h-[100px] w-[100px] animate-spin mt-[100px]"
    }
  ) }) : h ? /* @__PURE__ */ u.jsx(
    v,
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
