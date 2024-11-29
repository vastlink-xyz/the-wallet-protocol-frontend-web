import { j as t } from "./vendor-radix-hWeKeDdS.js";
import { l as b, k, a as o } from "./vendor-react-DM3ZG7W6.js";
import { f, T as w, B as d, L as C, v as S, g as u } from "./main-DvzXJLQE.js";
import { B as L } from "./vendor-utils-CV-CuKFW.js";
import { u as R } from "./useTransaction-CYpDvV0T.js";
import { L as B } from "./index-DmHhZ-sH.js";
import { f as x } from "./vendor-web3-BgTEZO-2.js";
function V() {
  const [i] = b(), h = k(), { signTransaction: p, waitForTransactionExection: g } = R(), [s, v] = o.useState(), [r, I] = o.useState("PENDING"), [c, l] = o.useState(!1), T = o.useRef();
  o.useEffect(() => {
    j();
  }, [i]), o.useEffect(() => {
    s && I(s.status);
  }, [s]);
  const j = async () => {
    const e = i == null ? void 0 : i.get("inviteInfoId");
    e && m(e);
  }, m = async (e) => {
    const a = await f.get(`/invite/invite-info/${e}`);
    if (a.data.success) {
      v(a.data.inviteInfo);
      const n = w.getInstance().createToken(a.data.inviteInfo.token);
      T.current = n;
    }
  }, N = async () => {
    try {
      y();
    } catch {
    }
  }, y = async () => {
    if (s)
      try {
        l(!0);
        const e = x(BigInt(s.amount));
        let a = "";
        const n = await p({
          to: s.to,
          amount: e,
          token: s.token,
          data: "",
          transactionType: S.INVITE_TRANSFER
        });
        u("result", n), n != null && n.needOtp ? a = await g(n.transactionId) : a = n == null ? void 0 : n.hash, await E(s.id, {
          status: "COMPLETED"
        }), m(s.id), u("hash is", a);
      } catch (e) {
        console.error("Error confirming transfer:", e), L.error("Transfer failed");
      } finally {
        l(!1);
      }
  }, E = async (e, a) => await f.post("/invite/update-invite-info", {
    id: e,
    ...a
  });
  return /* @__PURE__ */ t.jsx("div", { className: "min-h-[calc(100vh-60px)] flex items-center justify-center", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-2xl px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ t.jsx("img", { src: "/imgs/logos/logo.svg", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ t.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    s ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      r === "WAITING" && /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h1", { className: "text-2xl mb-2", children: "Confirm Crypto Transfer" }),
        /* @__PURE__ */ t.jsxs("p", { className: "text-primary/80 mb-4", children: [
          "You are about to send ",
          x(BigInt(s.amount)),
          " ",
          s.token,
          " to ",
          s.toEmail
        ] }),
        /* @__PURE__ */ t.jsxs("p", { children: [
          "From: ",
          s.fromEmail
        ] }),
        /* @__PURE__ */ t.jsx(
          d,
          {
            className: "w-full mt-4",
            onClick: () => N(),
            disabled: c,
            children: c ? /* @__PURE__ */ t.jsx(C, {}) : "Confirm Transfer"
          }
        )
      ] }),
      r === "COMPLETED" && /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Transfer Completed!" }),
        /* @__PURE__ */ t.jsx("p", { className: "text-primary/80", children: "The transaction has been submitted to the network" }),
        /* @__PURE__ */ t.jsx(
          d,
          {
            className: "w-full mt-6",
            onClick: () => h("/dashboard"),
            children: "Return to Dashboard"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ t.jsx(B, {})
  ] }) });
}
export {
  V as default
};
