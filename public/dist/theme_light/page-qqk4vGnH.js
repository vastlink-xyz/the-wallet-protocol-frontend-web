import { j as t } from "./vendor-radix-DcfHr-b-.js";
import { i as w, j as k, r as o } from "./vendor-react-Cqw-pUgZ.js";
import { l as f } from "./main-69rK11_z.js";
import { B as C } from "./vendor-utils-BEOEHg0B.js";
import { B as d } from "./button-CTahMASr.js";
import { L as u } from "./index-3BRCbPgh.js";
import { u as S } from "./useTransaction-DQu5gCTZ.js";
import { T as R } from "./TokenService-hl2efiyX.js";
import { T as B } from "./transaction-Dz01ddzF.js";
import { a as p } from "./index-Ds-PW5Mo.js";
import { f as h } from "./vendor-web3-DM8VQNRv.js";
function Y() {
  const [r] = w(), x = k(), { signTransaction: g, waitForTransactionExection: I } = S(), [e, T] = o.useState(), [i, j] = o.useState("PENDING"), [c, m] = o.useState(!1), v = o.useRef();
  o.useEffect(() => {
    y();
  }, [r]), o.useEffect(() => {
    e && j(e.status);
  }, [e]);
  const y = async () => {
    const s = r == null ? void 0 : r.get("inviteInfoId");
    s && l(s);
  }, l = async (s) => {
    const a = await p.get(`/invite/invite-info/${s}`);
    if (a.data.success) {
      T(a.data.inviteInfo);
      const n = R.getInstance().createToken(a.data.inviteInfo.token);
      v.current = n;
    }
  }, N = async () => {
    try {
      b();
    } catch {
    }
  }, b = async () => {
    if (e)
      try {
        m(!0);
        const s = h(BigInt(e.amount));
        let a = "";
        const n = await g({
          to: e.to,
          amount: s,
          token: e.token,
          data: "",
          transactionType: B.INVITE_TRANSFER
        });
        f("result", n), n != null && n.needOtp ? a = await I(n.transactionId) : a = n == null ? void 0 : n.hash, await E(e.id, {
          status: "COMPLETED"
        }), l(e.id), f("hash is", a);
      } catch (s) {
        console.error("Error confirming transfer:", s), C.error("Transfer failed");
      } finally {
        m(!1);
      }
  }, E = async (s, a) => await p.post("/invite/update-invite-info", {
    id: s,
    ...a
  });
  return /* @__PURE__ */ t.jsx("div", { className: "h-screen bg-cool-frosted-aqua-80 bg-opacity-20 flex items-center justify-center", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-2xl shadow-lg px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ t.jsx("img", { src: "/logo-alone.png", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ t.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    e ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      i === "WAITING" && /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h1", { className: "text-2xl mb-2", children: "Confirm Crypto Transfer" }),
        /* @__PURE__ */ t.jsxs("p", { className: "text-primary/80 mb-4", children: [
          "You are about to send ",
          h(BigInt(e.amount)),
          " ",
          e.token,
          " to ",
          e.toEmail
        ] }),
        /* @__PURE__ */ t.jsxs("p", { children: [
          "From: ",
          e.fromEmail
        ] }),
        /* @__PURE__ */ t.jsx(
          d,
          {
            className: "w-full mt-4",
            onClick: () => N(),
            disabled: c,
            children: c ? /* @__PURE__ */ t.jsx(u, {}) : "Confirm Transfer"
          }
        )
      ] }),
      i === "COMPLETED" && /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Transfer Completed!" }),
        /* @__PURE__ */ t.jsx("p", { className: "text-primary/80", children: "The transaction has been submitted to the network" }),
        /* @__PURE__ */ t.jsx(
          d,
          {
            className: "w-full mt-6",
            onClick: () => x("/dashboard"),
            children: "Return to Dashboard"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ t.jsx(u, { type: "breathe" })
  ] }) });
}
export {
  Y as default
};
