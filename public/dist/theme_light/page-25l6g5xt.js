import { j as e } from "./vendor-radix-nT--cb5B.js";
import { k as F, j as C, r as n } from "./vendor-react-CwfAKKXk.js";
import { B as i, a as A } from "./vendor-utils-DOORVzle.js";
import { f as o, g as O, B as d, L as U, k as V, a as W, h as y } from "./main-Gzb6y-w8.js";
import { L as N } from "./index-FoQ3Vmd8.js";
import { f as Y } from "./vendor-web3-VgZtbLWg.js";
function K() {
  const [l] = F(), E = C(), [f, b] = n.useState(!1), [u, p] = n.useState(!1), [x, h] = n.useState(!1), [w, g] = n.useState(!1), [t, I] = n.useState(), [m, S] = n.useState("PENDING"), [T, k] = n.useState("");
  n.useEffect(() => {
    G();
  }, [l]), n.useEffect(() => {
    t && S(t.status);
  }, [t]);
  const G = async () => {
    const a = l.get("inviteInfoId"), s = l.get("otp");
    a && s ? (k(s), P(a)) : i.error("inviteInfoId or otp is not existed.");
  }, P = async (a) => {
    try {
      g(!0);
      const s = await c(a);
      if ((await o.get("/address/check", {
        params: { email: s.toEmail }
      })).data.exists && s.status === "PENDING" && !s.to) {
        const v = await o.get("/address/", {
          params: { email: s.toEmail }
        });
        v.data.success && (await j(s.id, {
          status: "REGISTERED",
          to: v.data.address
        }), c(a));
      }
    } catch (s) {
      O("error", s);
    } finally {
      g(!1);
    }
  }, c = async (a) => {
    const s = await o.get(`/invite/invite-info/${a}`);
    if (s.data.success) {
      const r = s.data.inviteInfo;
      return I(r), r;
    }
  }, R = () => u ? "registering..." : f ? "authenticating..." : "Click To Sign Up";
  async function D(a, s) {
    return (await A.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-otp",
      {
        email: a,
        OTP: s
      }
    )).data;
  }
  async function L() {
    const a = t == null ? void 0 : t.toEmail;
    if (!a) {
      i.error("username is not exited.");
      return;
    }
    try {
      p(!0);
      const s = await D(a, T);
      await V.signUp({
        username: a
      });
      const { address: r } = W.all();
      await j(t.id, {
        status: "REGISTERED",
        to: r
      }), c(t.id);
    } catch (s) {
      const r = y(s);
      i.error(r.message);
    } finally {
      p(!1), b(!1);
    }
  }
  const j = async (a, s) => await o.post("/invite/update-invite-info", {
    id: a,
    ...s
  }), B = async () => {
    try {
      h(!0), (await o.post("/invite/send-inviter-transfer-email", {
        inviteInfoId: t == null ? void 0 : t.id
      })).data.success && (i.success("Transfer email sent successfully"), c(t.id));
    } catch (a) {
      const s = y(a);
      i.error(s.message);
    } finally {
      h(!1);
    }
  };
  return /* @__PURE__ */ e.jsx("div", { className: "h-screen bg-cool-frosted-aqua-80 bg-opacity-20 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-2xl shadow-lg px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/logo.svg", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ e.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    w ? /* @__PURE__ */ e.jsx(N, {}) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
            onClick: () => L(),
            disabled: u || f,
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
            Y(BigInt(t.amount)),
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
              onClick: () => B(),
              disabled: x,
              children: x ? /* @__PURE__ */ e.jsx(U, {}) : "Accept Transfer"
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
            onClick: () => E("/dashboard"),
            children: "Go To Dashboard"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsx(N, {}) })
  ] }) });
}
export {
  K as default
};
