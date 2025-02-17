import { j as a } from "./vendor-radix-BwSYOuH5.js";
import { C as w } from "./index-CZtX9Wpx.js";
import { l as j, i as k, r as u } from "./vendor-react-wyPiRY-L.js";
import { n as M, g as c, h as f } from "./main-CPzCMQxT.js";
import { B as m, a as p } from "./vendor-utils-BSjbfJFn.js";
function N() {
  const [e] = j(), l = k(), [g, i] = u.useState(!1), [d, y] = u.useState(!0), [h, R] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), r = e == null ? void 0 : e.get("otp"), t = e == null ? void 0 : e.get("type"), o = e == null ? void 0 : e.get("rememberMe");
      s && r && (t === "login" ? b({
        authUsername: s,
        otp: r,
        isRememberMe: o === "true"
      }) : x({
        registerUsername: s,
        otp: r,
        isRememberMe: o === "true"
      }));
    })();
  }, [e]);
  async function b({
    authUsername: n,
    otp: s,
    isRememberMe: r = !0
  }) {
    c("call authenticate", n), i(!0);
    try {
      const t = await v({
        username: n,
        otp: s,
        isRememberMe: r
      });
      t.data && t.data.sub && l("/fireblocks_demo");
    } catch (t) {
      const o = f(t);
      m.error(o.message);
    } finally {
      i(!1);
    }
  }
  async function x({
    registerUsername: n,
    otp: s,
    isRememberMe: r = !0
  }) {
    c("call register"), y(!1), i(!0);
    try {
      const t = await S({
        username: n,
        otp: s,
        isRememberMe: r
      });
      t.data && t.data.sub && l("/fireblocks_demo");
    } catch (t) {
      const o = f(t);
      m.error(o.message);
    } finally {
      c("register finally"), i(!1);
    }
  }
  async function S({
    username: n,
    otp: s,
    isRememberMe: r = !0
  }) {
    return await p.post(
      "https://staging.api.vastlink.xyz/auth/verify-registration-otp",
      {
        email: n,
        OTP: s,
        rememberMe: r
      }
    );
  }
  async function v({
    username: n,
    otp: s,
    isRememberMe: r = !0
  }) {
    return await p.post(
      "https://staging.api.vastlink.xyz/auth/verify-login-otp",
      {
        email: n,
        OTP: s,
        rememberMe: r
      }
    );
  }
  return /* @__PURE__ */ a.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: g ? /* @__PURE__ */ a.jsx(M, {}) : h ? /* @__PURE__ */ a.jsx("div", { className: "-mt-[48px]", children: /* @__PURE__ */ a.jsx(
    w,
    {
      title: `${d ? "Sign in" : "Sign up"} successfully`,
      buttonText: "Take me to the dashboard",
      redirectUrl: "/dashboard",
      description: "Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
    }
  ) }) : null });
}
export {
  N as default
};
