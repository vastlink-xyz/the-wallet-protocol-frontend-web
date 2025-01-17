import { j as N } from "./vendor-radix-AvjOLIap.js";
import { a as s } from "./vendor-react-DSEtE0wE.js";
import { a as V, ah as Ie, g as c, V as _e, k as je, h as Re, af as We, o as we, u as Oe } from "./main-93vrANEB.js";
import { W as qe, b as be, i as Me, U as Ne } from "./vendor-walletconnect-BTBFp_yD.js";
import { u as Ve, B as p } from "./vendor-utils-Q0yJ_o1H.js";
import { u as Ae } from "./useTransaction-D_KWhrfX.js";
import { k as De, h as Ue } from "./vendor-web3-CQEmmIwE.js";
const J = s.createContext(void 0);
function Ge({ children: i }) {
  const { t: k } = Ve(), S = V.isAuthenticated(), [x, d] = s.useState(""), [E, P] = s.useState(), [f, h] = s.useState(), [H] = s.useState(Ie), [G, y] = s.useState(!1), [K, g] = s.useState(!1), [C, Q] = s.useState({ method: "", message: "", topic: "", response: {} }), [I, _] = s.useState(null), j = s.useRef(null), [X, v] = s.useState(!1), [u, Y] = s.useState(null), { signTransaction: Z, waitForTransactionExection: ee, tokenTypeByChainId: se } = Ae(), [te, R] = s.useState(!1), [ne, A] = s.useState(!1), [oe, ae] = s.useState({ name: "", url: "" }), [W, w] = s.useState(!1), [t, re] = s.useState(), O = s.useRef(), [ce, q] = s.useState(!1), [ie, D] = s.useState(!1), [U, ue] = s.useState(null), le = (e) => {
    re(e), O.current = e;
  }, m = s.useCallback(() => {
    var n;
    const e = (n = O.current) == null ? void 0 : n.getActiveSessions();
    if (c("activeSessions", e), e && Object.keys(e).length > 0) {
      const o = Object.values(e)[0];
      h(o), w(!0);
    } else
      w(!1), h(void 0);
  }, []), b = s.useCallback(async (e) => {
    c("event", e);
    const { topic: n, params: o, id: l } = e, { request: a, chainId: T } = o, r = a.params[0];
    a.method === "eth_sendTransaction" ? (Y({
      from: r.from,
      to: r.to,
      value: De(Ue(r.value || "")),
      data: r.data,
      token: se(T)
    }), v(!0), Q({
      message: JSON.stringify(r, null, 2),
      method: a.method,
      topic: n,
      response: { id: l, jsonrpc: "2.0", result: "" }
    })) : a.method === "eth_signTypedData_v4" ? c("transferrequest", r) : c("else");
  }, [E]), B = s.useCallback(async (e) => {
    c("proposal received", e), _(e), j.current = e, y(!0);
  }, []), L = (e) => {
    c("proposal_expire", e), $();
  }, M = s.useCallback(() => {
    c("on session delete"), m();
  }, [m]), pe = async () => {
    d(x);
  }, de = async () => {
    const e = new be({ projectId: "b3feb6b7c0ea5530a6eaa11d45fb4293" }), n = await Me.init({
      core: e,
      metadata: { name: "Vastlink", description: "Vastlink", url: "www.walletconnect.com", icons: [] }
    });
    le(n), m();
  };
  s.useEffect(() => (pe(), de(), () => {
    t && (t.off("session_proposal", B), t.off("proposal_expire", L), t.off("session_request", b), t.off("session_delete", M));
  }), []), s.useEffect(() => {
    t && (t.on("session_proposal", B), t.on("proposal_expire", L), t.on("session_request", b), t.on("session_delete", M), m());
  }, [t, b, M, m]);
  const fe = async (e) => {
    if (c("pairing with uri", e), e)
      try {
        await (t == null ? void 0 : t.pair({ uri: e })), y(!0);
      } catch (n) {
        console.error("Error pairing with uri", n), p.error(n.message);
      }
  }, he = s.useCallback(async () => {
    var l, a, T;
    const { address: e } = V.all();
    if (!j.current || !e)
      return;
    const { id: n, params: o } = j.current;
    try {
      const r = ((l = o.requiredNamespaces) == null ? void 0 : l.eip155) || ((a = o.optionalNamespaces) == null ? void 0 : a.eip155);
      if (!r)
        throw new Error("No EIP155 namespace found in proposal");
      const F = r.chains || [`eip155:${H.id}`], ke = {
        proposal: o,
        supportedNamespaces: {
          eip155: {
            // chains: [`eip155:${chain.id}`],
            chains: F,
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            // accounts: [`eip155:${chain.id}:${address}`],
            accounts: F.map((Pe) => `${Pe}:${e}`)
          }
        }
      }, xe = qe(ke);
      g(!0);
      const Ee = await ((T = O.current) == null ? void 0 : T.approveSession({ id: n, namespaces: xe }));
      h(Ee), w(!0), y(!1), R(!1), _(null), p.success(k("toastSuccess.connectSuccess"));
    } catch (r) {
      console.error("Error approving session:", r);
    } finally {
      g(!1);
    }
  }, [t]), me = async () => {
    if (I)
      try {
        await (t == null ? void 0 : t.rejectSession({
          id: I.id,
          reason: Ne("USER_REJECTED")
        })), y(!1), _(null);
      } catch (e) {
        console.error("Error rejecting session:", e);
      }
  }, Se = async () => {
    if (u)
      try {
        g(!0);
        let e = "";
        const n = await Z({
          to: u == null ? void 0 : u.to,
          amount: u.value,
          data: u.data,
          token: u.token,
          transactionType: We.SWAP
        });
        n != null && n.needOtp ? (we.getVerifyMethod() === "email-by-sendgrid" && (ue(n.transactionId), q(!0)), e = await ee(n.transactionId)) : e = n == null ? void 0 : n.hash, c("hash is", e);
        const { topic: o, response: l } = C, a = {
          ...l,
          result: e
        };
        await (t == null ? void 0 : t.respondSessionRequest({
          topic: o,
          response: a
        })), c("successful"), v(!1);
      } catch (e) {
        console.error("Error confirming transfer:", e), p.error("Transfer failed");
      } finally {
        g(!1);
      }
  }, ye = async (e) => {
    if (!U) {
      p.error("No transaction id");
      return;
    }
    try {
      D(!0);
      const { hash: n } = await je.signTransactionWithOTP({
        transactionId: U,
        otp: e
      });
      if (n) {
        const { topic: o, response: l } = C, a = {
          ...l,
          result: n
        };
        await (t == null ? void 0 : t.respondSessionRequest({
          topic: o,
          response: a
        })), q(!1), v(!1), p.success("Transaction submitted successfully");
      }
    } catch (n) {
      const o = Re(n);
      p.error(o.message);
    } finally {
      D(!1);
    }
  }, ve = async () => {
    const { topic: e, response: n } = C, { id: o } = n;
    await (t == null ? void 0 : t.respondSessionRequest({
      topic: e,
      response: {
        id: o,
        jsonrpc: "2.0",
        error: {
          code: 5e3,
          message: "User rejected."
        }
      }
    })), v(!1), p.info("Transfer rejected");
  }, $ = async () => {
    f != null && f.topic && (await (t == null ? void 0 : t.disconnectSession({
      topic: f.topic,
      reason: {
        code: 5e3,
        message: "User disconnected"
      }
    })), m(), p.info("Disconnected"));
  }, ge = () => {
    c("open"), A(!0), R(!0);
  }, Ce = s.useCallback(() => {
    S && (W ? $() : ge());
  }, [S, W]), Te = {
    isAuthenticated: S,
    isConnected: W,
    handleConnect: Ce,
    connectOpen: G,
    setConnectOpen: y,
    sessionProposal: I,
    handleRejectSession: me,
    handleApproveSession: he,
    loading: K,
    transferOpen: X,
    setTransferOpen: v,
    transferDetails: u,
    requestContent: C,
    handleRejectTransfer: ve,
    handleConfirmTransfer: Se,
    pair: fe,
    isModalOpen: te,
    dappInfo: oe,
    setDappInfo: ae,
    setIsModalOpen: R,
    displayUriInput: ne,
    setDisplayUriInput: A
  };
  return /* @__PURE__ */ N.jsxs(J.Provider, { value: Te, children: [
    i,
    /* @__PURE__ */ N.jsx(
      _e,
      {
        isOpen: ce,
        onClose: () => q(!1),
        loading: ie,
        onVerify: ye,
        modalClassName: "z-[10004]"
      }
    )
  ] });
}
function Ke() {
  const i = s.useContext(J);
  if (i === void 0)
    throw new Error("useWalletConnect must be used within a WalletConnectProvider");
  return i;
}
const z = s.createContext(void 0);
function Qe({ children: i }) {
  const { address: k } = V.all(), [S, x] = s.useState(!1), { data: d } = Oe({
    enabled: !!k
  }), E = s.useCallback(async () => {
    try {
      const f = ((d == null ? void 0 : d.purchasedProducts) || []).some(
        (h) => h.status === "active" && h.unread
      );
      x(f);
    } catch (P) {
      console.error("Failed to check new products:", P);
    }
  }, [d]);
  return /* @__PURE__ */ N.jsx(z.Provider, { value: { checkNewProducts: E, hasNewProducts: S }, children: i });
}
const Xe = () => {
  const i = s.useContext(z);
  if (i === void 0)
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return i;
};
export {
  Qe as M,
  Ge as W,
  Xe as a,
  Ke as u
};
