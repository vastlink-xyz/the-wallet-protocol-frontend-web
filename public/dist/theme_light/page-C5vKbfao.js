import { j as t } from "./vendor-radix-AvjOLIap.js";
import { m as b, l as k, a as i } from "./vendor-react-DSEtE0wE.js";
import { f as d, t as w, B as f, L as S, ad as C, g as u } from "./main-DuqIT5w7.js";
import { B as L } from "./vendor-utils-BPVAmMsZ.js";
import { u as R } from "./useTransaction-BUYdNy7r.js";
import { L as B } from "./index-DKrJ6L8h.js";
import { k as x } from "./vendor-web3-CQEmmIwE.js";
function V() {
  const [o] = b(), h = k(), { signTransaction: p, waitForTransactionExection: g } = R(), [s, v] = i.useState(), [r, I] = i.useState("PENDING"), [c, m] = i.useState(!1), j = i.useRef();
  i.useEffect(() => {
    T();
  }, [o]), i.useEffect(() => {
    s && I(s.status);
  }, [s]);
  const T = async () => {
    const e = o == null ? void 0 : o.get("inviteInfoId");
    e && l(e);
  }, l = async (e) => {
    const a = await d.get(`/invite/invite-info/${e}`);
    if (a.data.success) {
      v(a.data.inviteInfo);
      const n = w.getToken(a.data.inviteInfo.token);
      j.current = n;
    }
  }, N = async () => {
    try {
      E();
    } catch {
    }
  }, E = async () => {
    if (s)
      try {
        m(!0);
        const e = x(BigInt(s.amount));
        let a = "";
        const n = await p({
          to: s.to,
          amount: e,
          token: s.token,
          data: "",
          transactionType: C.INVITE_TRANSFER
        });
        u("result", n), n != null && n.needOtp ? a = await g(n.transactionId) : a = n == null ? void 0 : n.hash, await y(s.id, {
          status: "COMPLETED"
        }), l(s.id), u("hash is", a);
      } catch (e) {
        console.error("Error confirming transfer:", e), L.error("Transfer failed");
      } finally {
        m(!1);
      }
  }, y = async (e, a) => await d.post("/invite/update-invite-info", {
    id: e,
    ...a
  });
  return /* @__PURE__ */ t.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-2xl px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
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
          f,
          {
            className: "w-full mt-4",
            onClick: () => N(),
            disabled: c,
            children: c ? /* @__PURE__ */ t.jsx(S, {}) : "Confirm Transfer"
          }
        )
      ] }),
      r === "COMPLETED" && /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Transfer Completed!" }),
        /* @__PURE__ */ t.jsx("p", { className: "text-primary/80", children: "The transaction has been submitted to the network" }),
        /* @__PURE__ */ t.jsx(
          f,
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
