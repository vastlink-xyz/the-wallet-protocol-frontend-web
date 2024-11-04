import { j as a } from "./vendor-radix-DcfHr-b-.js";
import { i as B, j as E, r as l } from "./vendor-react-Cqw-pUgZ.js";
import { u as L, B as n, b as g } from "./vendor-utils-BEOEHg0B.js";
import { e as $, l as u } from "./main-69rK11_z.js";
import { h } from "./error-BOjt9hlf.js";
import { C as M, a as U, b as F, c as H } from "./card-BEbVCKL7.js";
import { I as O } from "./input-e7uWnFsp.js";
import { L as V } from "./label-BsHZ7DxT.js";
import { B as q } from "./button-CTahMASr.js";
import { k as S } from "./index-D2MaAw-U.js";
function Z() {
  const [o] = B(), y = E(), { t: r } = L(), [d, b] = l.useState(""), [m, i] = l.useState(!1), [x, f] = l.useState(!1), [c, w] = l.useState(!0), [N, j] = l.useState(!1);
  l.useEffect(() => {
    (async () => {
      const t = o == null ? void 0 : o.get("email"), s = o == null ? void 0 : o.get("otp"), p = o == null ? void 0 : o.get("type");
      t && s && (b(t), p === "login" ? I(t, s) : C(t, s));
    })();
  }, [o]);
  async function k() {
    u("call register");
    try {
      f(!0);
      const e = await g.post(
        "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/generate-otp",
        {
          email: d
        }
      );
      u("register res", e), e.status === 200 && (n.info(
        r("/.otpSentMessage"),
        {
          autoClose: 1e4
        }
      ), f(!1));
    } catch (e) {
      const t = h(e);
      n.error(t.message);
    }
  }
  async function v(e, t) {
    return (await g.post(
      "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/verify-otp",
      {
        email: e,
        OTP: t
      }
    )).data;
  }
  async function C(e, t) {
    u("call register"), w(!1), f(!0);
    try {
      const s = await v(e, t);
      await S.signUp({
        username: e,
        idToken: s
      }), j(!0), y("/dashboard");
    } catch (s) {
      const p = h(s);
      n.error(p.message);
    } finally {
      u("register finally"), f(!1), i(!1);
    }
  }
  async function A() {
    try {
      i(!0), (await g.post(
        "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/generate-login-otp",
        {
          email: d
        }
      )).status === 200 && (n.info(
        r("/.otpLoginSentMessage"),
        {
          autoClose: 1e4
        }
      ), i(!1));
    } catch (e) {
      const t = h(e);
      n.error(t.message);
    } finally {
      i(!1);
    }
  }
  async function I(e, t) {
    u("call authenticate", e), i(!0);
    try {
      const s = await v(e, t);
      await S.signIn({
        authUsername: e,
        idToken: s
      }), j(!0), y("/dashboard");
    } catch (s) {
      const p = h(s);
      n.error(p.message);
    } finally {
      i(!1);
    }
  }
  const R = async (e) => {
    if (e.preventDefault(), c)
      await A();
    else {
      try {
        const { data: t } = await g.get("https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/address/", {
          params: {
            email: d
          }
        });
        if (t.success) {
          n.error(r("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await k();
    }
  }, T = () => r(c ? m ? "/.authenticating" : "/.signInButton" : x ? "/.registering" : m ? "/.authenticating" : "/.signUpButton");
  return /* @__PURE__ */ a.jsx("div", { className: "flex flex-grow flex-col items-center justify-center", children: N ? /* @__PURE__ */ a.jsx("div", { className: "text-center", children: /* @__PURE__ */ a.jsx("p", { className: "text-lg", children: "Redirecting to dashboard..." }) }) : /* @__PURE__ */ a.jsxs(M, { className: "sm:w-[360px] py-4 border-none shadow-none mb-12 bg-white", children: [
    /* @__PURE__ */ a.jsx(U, { children: /* @__PURE__ */ a.jsx("p", { className: "mb-4 text-lg md:text-2xl m-0 p-0", children: r(c ? "/.signinTitle" : "/.signupTitle") }) }),
    /* @__PURE__ */ a.jsx(F, { children: /* @__PURE__ */ a.jsxs("form", { onSubmit: (e) => R(e), className: "group", noValidate: !0, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-4 relative", children: [
        /* @__PURE__ */ a.jsx(V, { htmlFor: "email", children: r("/.emailLabel") }),
        /* @__PURE__ */ a.jsx(
          O,
          {
            className: "w-full mb-2 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 ring-offset-transparent mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer",
            type: "email",
            id: "email",
            value: d,
            onChange: (e) => b(e.target.value.trim()),
            placeholder: r("/.emailPlaceholder"),
            required: !0,
            pattern: $.source,
            disabled: x || m
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "absolute -bottom-5 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block", children: r("/.emailValidationError") })
      ] }),
      /* @__PURE__ */ a.jsx(
        q,
        {
          type: "submit",
          className: "w-full mt-2 rounded-full group-invalid:pointer-events-none group-invalid:opacity-30",
          disabled: x || m,
          children: T()
        }
      )
    ] }) }),
    /* @__PURE__ */ a.jsx(H, { children: /* @__PURE__ */ a.jsx("p", { className: "cursor-pointer select-none", onClick: () => w(!c), children: r(c ? "/.signUp" : "/.alreadyHaveAccount") }) })
  ] }) });
}
export {
  Z as A
};
