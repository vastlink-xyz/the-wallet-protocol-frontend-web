import { j as r } from "./vendor-radix-CjL5_ZCn.js";
import { j as B, k as E, a as l } from "./vendor-react-D6ZgZFQ5.js";
import { u as L, B as n, b as g } from "./vendor-utils-RvkaSVWD.js";
import { e as $, l as u } from "./main-DrvVrxeO.js";
import { h } from "./error-DDWKB78C.js";
import { C as M, a as U, b as F, c as H } from "./card-CbHBAfSW.js";
import { I as O } from "./input-CKttCQxA.js";
import { L as V } from "./label-BnEcla3d.js";
import { B as q } from "./button-CQRi4ddT.js";
import { k as S } from "./index-CH6Rc5WR.js";
function Z() {
  const [o] = B(), y = E(), { t: a } = L(), [d, b] = l.useState(""), [m, i] = l.useState(!1), [x, f] = l.useState(!1), [c, w] = l.useState(!0), [N, j] = l.useState(!1);
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
        a("/.otpSentMessage"),
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
        a("/.otpLoginSentMessage"),
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
          n.error(a("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await k();
    }
  }, T = () => a(c ? m ? "/.authenticating" : "/.signInButton" : x ? "/.registering" : m ? "/.authenticating" : "/.signUpButton");
  return /* @__PURE__ */ r.jsx("div", { className: "flex flex-grow flex-col items-center justify-center", children: N ? /* @__PURE__ */ r.jsx("div", { className: "text-center", children: /* @__PURE__ */ r.jsx("p", { className: "text-lg", children: "Redirecting to dashboard..." }) }) : /* @__PURE__ */ r.jsxs(M, { className: "sm:w-[360px] py-4 border-none shadow-none mb-12 bg-white", children: [
    /* @__PURE__ */ r.jsx(U, { children: /* @__PURE__ */ r.jsx("p", { className: "mb-4 text-lg md:text-2xl m-0 p-0", children: a(c ? "/.signinTitle" : "/.signupTitle") }) }),
    /* @__PURE__ */ r.jsx(F, { children: /* @__PURE__ */ r.jsxs("form", { onSubmit: (e) => R(e), className: "group", noValidate: !0, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "mb-4 relative", children: [
        /* @__PURE__ */ r.jsx(V, { htmlFor: "email", children: a("/.emailLabel") }),
        /* @__PURE__ */ r.jsx(
          O,
          {
            className: "w-full mb-2 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 ring-offset-transparent mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer",
            type: "email",
            id: "email",
            value: d,
            onChange: (e) => b(e.target.value.trim()),
            placeholder: a("/.emailPlaceholder"),
            required: !0,
            pattern: $.source,
            disabled: x || m
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "absolute -bottom-5 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block", children: a("/.emailValidationError") })
      ] }),
      /* @__PURE__ */ r.jsx(
        q,
        {
          type: "submit",
          className: "w-full mt-2 rounded-full group-invalid:pointer-events-none group-invalid:opacity-30",
          disabled: x || m,
          children: T()
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(H, { children: /* @__PURE__ */ r.jsx("p", { className: "cursor-pointer select-none", onClick: () => w(!c), children: a(c ? "/.signUp" : "/.alreadyHaveAccount") }) })
  ] }) });
}
export {
  Z as A
};
