import { j as e } from "./vendor-radix-CjL5_ZCn.js";
import { j as C, k as L, a as n } from "./vendor-react-D6ZgZFQ5.js";
import { B as i, b as A } from "./vendor-utils-RvkaSVWD.js";
import { l as O } from "./main-DrvVrxeO.js";
import { a as U } from "./auth-D53HHgot.js";
import { h as v } from "./error-DDWKB78C.js";
import { B as d } from "./button-CQRi4ddT.js";
import { L as f } from "./index-BO59AZ-D.js";
import { a as o } from "./index-Dr7PNsrq.js";
import { k as V } from "./index-CH6Rc5WR.js";
import { f as W } from "./vendor-web3-B_6NVwwj.js";
function _() {
  const [l] = C(), b = L(), [u, E] = n.useState(!1), [p, h] = n.useState(!1), [x, g] = n.useState(!1), [w, j] = n.useState(!1), [t, I] = n.useState(), [m, S] = n.useState("PENDING"), [k, T] = n.useState("");
  n.useEffect(() => {
    G();
  }, [l]), n.useEffect(() => {
    t && S(t.status);
  }, [t]);
  const G = async () => {
    const a = l.get("inviteInfoId"), s = l.get("otp");
    a && s ? (T(s), P(a)) : i.error("inviteInfoId or otp is not existed.");
  }, P = async (a) => {
    try {
      j(!0);
      const s = await c(a);
      if ((await o.get("/address/check", {
        params: { email: s.toEmail }
      })).data.exists && s.status === "PENDING" && !s.to) {
        const N = await o.get("/address/", {
          params: { email: s.toEmail }
        });
        N.data.success && (await y(s.id, {
          status: "REGISTERED",
          to: N.data.address
        }), c(a));
      }
    } catch (s) {
      O("error", s);
    } finally {
      j(!1);
    }
  }, c = async (a) => {
    const s = await o.get(`/invite/invite-info/${a}`);
    if (s.data.success) {
      const r = s.data.inviteInfo;
      return I(r), r;
    }
  }, R = () => p ? "registering..." : u ? "authenticating..." : "Click To Sign Up";
  async function D(a, s) {
    return (await A.post(
      "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/verify-otp",
      {
        email: a,
        OTP: s
      }
    )).data;
  }
  async function B() {
    const a = t == null ? void 0 : t.toEmail;
    if (!a) {
      i.error("username is not exited.");
      return;
    }
    try {
      h(!0);
      const s = await D(a, k);
      await V.signUp({
        username: a,
        idToken: s
      });
      const { address: r } = U.all();
      await y(t.id, {
        status: "REGISTERED",
        to: r
      }), c(t.id);
    } catch (s) {
      const r = v(s);
      i.error(r.message);
    } finally {
      h(!1), E(!1);
    }
  }
  const y = async (a, s) => await o.post("/invite/update-invite-info", {
    id: a,
    ...s
  }), F = async () => {
    try {
      g(!0), (await o.post("/invite/send-inviter-transfer-email", {
        inviteInfoId: t == null ? void 0 : t.id
      })).data.success && (i.success("Transfer email sent successfully"), c(t.id));
    } catch (a) {
      const s = v(a);
      i.error(s.message);
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ e.jsx("div", { className: "h-screen bg-cool-frosted-aqua-80 bg-opacity-20 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-2xl shadow-lg px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ e.jsx("img", { src: "/logo-alone.png", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ e.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    w ? /* @__PURE__ */ e.jsx(f, { type: "breathe" }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      m === "PENDING" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ e.jsxs("p", { className: "text-xl font-medium text-primary mb-2", children: [
            "Welcome, ",
            t == null ? void 0 : t.toEmail
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "text-primary/80", children: "This is your username for Vastlink" })
        ] }),
        /* @__PURE__ */ e.jsx(
          d,
          {
            className: "w-full",
            onClick: () => B(),
            disabled: p || u,
            children: R()
          }
        )
      ] }),
      m === "REGISTERED" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "You have received a crypto transfer!" }),
          /* @__PURE__ */ e.jsxs("p", { className: "mb-2", children: [
            t.fromEmail,
            " sent you"
          ] }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-3xl font-bold mb-2", children: [
            W(BigInt(t.amount)),
            " ",
            t.token
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: "To accept this transfer, please confirm below." }),
          /* @__PURE__ */ e.jsx(
            d,
            {
              className: "w-full mb-4",
              onClick: () => F(),
              disabled: x,
              children: x ? /* @__PURE__ */ e.jsx(f, {}) : "Accept Transfer"
            }
          )
        ] })
      ] }),
      m === "WAITING" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: "Email sent successfully! Please wait for the inviter to complete the transfer." }),
        /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: "You will receive an email notification once the transfer is complete." }),
        /* @__PURE__ */ e.jsx(
          d,
          {
            className: "w-full",
            onClick: () => b("/dashboard"),
            children: "Go To Dashboard"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsx(f, { type: "breathe" }) })
  ] }) });
}
export {
  _ as default
};
