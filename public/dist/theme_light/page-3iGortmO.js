import { j as a } from "./vendor-radix-DUwj-Z7L.js";
import { C as w } from "./index-DEtK84YR.js";
import { m as j, j as k, a as u } from "./vendor-react-DV6Kf_ot.js";
import { n as M, g as c, h as f } from "./main-DvSwU80m.js";
import { B as m, a as p } from "./vendor-utils-24jm1iP0.js";
function N() {
  const [e] = j(), l = k(), [g, i] = u.useState(!1), [d, y] = u.useState(!0), [h, R] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), n = e == null ? void 0 : e.get("otp"), t = e == null ? void 0 : e.get("type"), o = e == null ? void 0 : e.get("rememberMe");
      s && n && (t === "login" ? b({
        authUsername: s,
        otp: n,
        isRememberMe: o === "true"
      }) : x({
        registerUsername: s,
        otp: n,
        isRememberMe: o === "true"
      }));
    })();
  }, [e]);
  async function b({
    authUsername: r,
    otp: s,
    isRememberMe: n = !0
  }) {
    c("call authenticate", r), i(!0);
    try {
      const t = await v({
        username: r,
        otp: s,
        isRememberMe: n
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
    registerUsername: r,
    otp: s,
    isRememberMe: n = !0
  }) {
    c("call register"), y(!1), i(!0);
    try {
      const t = await S({
        username: r,
        otp: s,
        isRememberMe: n
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
    username: r,
    otp: s,
    isRememberMe: n = !0
  }) {
    return await p.post(
      "https://staging.api.vastlink.xyz/auth/verify-registration-otp",
      {
        email: r,
        OTP: s,
        rememberMe: n
      }
    );
  }
  async function v({
    username: r,
    otp: s,
    isRememberMe: n = !0
  }) {
    return await p.post(
      "https://staging.api.vastlink.xyz/auth/verify-login-otp",
      {
        email: r,
        OTP: s,
        rememberMe: n
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
