import { j as s } from "./vendor-radix-AvjOLIap.js";
import { m as C, l as A, a as r } from "./vendor-react-DSEtE0wE.js";
import { B as i, a as O } from "./vendor-utils-BPVAmMsZ.js";
import { f as o, g as U, B as d, L as f, k as V, a as W, h as y } from "./main-DuqIT5w7.js";
import { L as E } from "./index-DKrJ6L8h.js";
import { k as Y } from "./vendor-web3-CQEmmIwE.js";
function K() {
  const [l] = C(), w = A(), [u, b] = r.useState(!1), [x, p] = r.useState(!1), [h, g] = r.useState(!1), [I, j] = r.useState(!1), [t, S] = r.useState(), [m, T] = r.useState("PENDING"), [k, G] = r.useState("");
  r.useEffect(() => {
    P();
  }, [l]), r.useEffect(() => {
    t && T(t.status);
  }, [t]);
  const P = async () => {
    const a = l.get("inviteInfoId"), e = l.get("otp");
    a && e ? (G(e), R(a)) : i.error("inviteInfoId or otp is not existed.");
  }, R = async (a) => {
    try {
      j(!0);
      const e = await c(a);
      if ((await o.get("/address/check", {
        params: { email: e.toEmail }
      })).data.exists && e.status === "PENDING" && !e.to) {
        const N = await o.get("/address/", {
          params: { email: e.toEmail }
        });
        N.data.success && (await v(e.id, {
          status: "REGISTERED",
          to: N.data.address
        }), c(a));
      }
    } catch (e) {
      U("error", e);
    } finally {
      j(!1);
    }
  }, c = async (a) => {
    const e = await o.get(`/invite/invite-info/${a}`);
    if (e.data.success) {
      const n = e.data.inviteInfo;
      return S(n), n;
    }
  }, D = () => x ? /* @__PURE__ */ s.jsx(f, {}) : u ? /* @__PURE__ */ s.jsx(f, {}) : "Click To Sign Up";
  async function L(a, e) {
    return (await O.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-otp",
      {
        email: a,
        OTP: e
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
      p(!0);
      const e = await L(a, k);
      await V.signUp({
        username: a
      });
      const { address: n } = W.all();
      await v(t.id, {
        status: "REGISTERED",
        to: n
      }), c(t.id);
    } catch (e) {
      const n = y(e);
      i.error(n.message);
    } finally {
      p(!1), b(!1);
    }
  }
  const v = async (a, e) => await o.post("/invite/update-invite-info", {
    id: a,
    ...e
  }), F = async () => {
    try {
      g(!0), (await o.post("/invite/send-inviter-transfer-email", {
        inviteInfoId: t == null ? void 0 : t.id
      })).data.success && (i.success("Transfer email sent successfully"), c(t.id));
    } catch (a) {
      const e = y(a);
      i.error(e.message);
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ s.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-white rounded-2xl px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ s.jsx("img", { src: "/imgs/logos/logo.svg", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ s.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    I ? /* @__PURE__ */ s.jsx(E, {}) : /* @__PURE__ */ s.jsx(s.Fragment, { children: t ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      m === "PENDING" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ s.jsxs("p", { className: "text-xl font-medium text-primary mb-2", children: [
            "Welcome, ",
            t == null ? void 0 : t.toEmail
          ] }),
          /* @__PURE__ */ s.jsx("p", { className: "text-primary/80", children: "This is your username for Vastlink" })
        ] }),
        /* @__PURE__ */ s.jsx(
          d,
          {
            className: "w-full",
            onClick: () => B(),
            disabled: x || u,
            children: D()
          }
        )
      ] }),
      m === "REGISTERED" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ s.jsx("h2", { className: "text-2xl font-bold mb-4", children: "You have received a crypto transfer!" }),
          /* @__PURE__ */ s.jsxs("p", { className: "mb-2", children: [
            t.fromEmail,
            " sent you"
          ] }),
          /* @__PURE__ */ s.jsxs("p", { className: "text-3xl font-bold mb-2", children: [
            Y(BigInt(t.amount)),
            " ",
            t.token
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ s.jsx("p", { className: "mb-4", children: "To accept this transfer, please confirm below." }),
          /* @__PURE__ */ s.jsx(
            d,
            {
              className: "w-full mb-4",
              onClick: () => F(),
              disabled: h,
              children: h ? /* @__PURE__ */ s.jsx(f, {}) : "Accept Transfer"
            }
          )
        ] })
      ] }),
      m === "WAITING" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("p", { className: "mb-4", children: "Email sent successfully! Please wait for the inviter to complete the transfer." }),
        /* @__PURE__ */ s.jsx("p", { className: "mb-4", children: "You will receive an email notification once the transfer is complete." }),
        /* @__PURE__ */ s.jsx(
          d,
          {
            className: "w-full",
            onClick: () => w("/dashboard"),
            children: "Go To Dashboard"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ s.jsx(E, {}) })
  ] }) });
}
export {
  K as default
};
