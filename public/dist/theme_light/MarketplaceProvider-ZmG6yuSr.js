import { j as $ } from "./vendor-radix-BYJ0AyiX.js";
import { r as s } from "./vendor-react-CuOkI7kW.js";
import { a as O, af as ye, g as r, ad as ge, u as ke } from "./main-COWkWeS2.js";
import { W as xe, b as Te, i as Ee, U as Pe } from "./vendor-walletconnect-D5sGEk4j.js";
import { u as _e, B as C } from "./vendor-utils-DMWa-Mp_.js";
import { u as we } from "./useTransaction-CgxDhq0R.js";
import { k as je, h as Re } from "./vendor-web3-DDgB3Js4.js";
const F = s.createContext(void 0);
function Ae({ children: c }) {
  const { t: k } = _e(), m = O.isAuthenticated(), [x, l] = s.useState(""), [T, E] = s.useState(), [p, d] = s.useState(), [V] = s.useState(ye), [H, S] = s.useState(!1), [L, v] = s.useState(!1), [P, z] = s.useState({ method: "", message: "", topic: "", response: {} }), [_, w] = s.useState(null), j = s.useRef(null), [G, y] = s.useState(!1), [u, K] = s.useState(null), { signTransaction: Q, waitForTransactionExection: X, tokenTypeByChainId: Y } = we(), [Z, R] = s.useState(!1), [ee, M] = s.useState(!1), [se, te] = s.useState({ name: "", url: "" }), [W, b] = s.useState(!1), [t, ne] = s.useState(), q = s.useRef(), oe = (e) => {
    ne(e), q.current = e;
  }, f = s.useCallback(() => {
    var n;
    const e = (n = q.current) == null ? void 0 : n.getActiveSessions();
    if (r("activeSessions", e), e && Object.keys(e).length > 0) {
      const o = Object.values(e)[0];
      d(o), b(!0);
    } else
      b(!1), d(void 0);
  }, []), I = s.useCallback(async (e) => {
    r("event", e);
    const { topic: n, params: o, id: h } = e, { request: i, chainId: g } = o, a = i.params[0];
    i.method === "eth_sendTransaction" ? (K({
      from: a.from,
      to: a.to,
      value: je(Re(a.value || "")),
      data: a.data,
      token: Y(g)
    }), y(!0), z({
      message: JSON.stringify(a, null, 2),
      method: i.method,
      topic: n,
      response: { id: h, jsonrpc: "2.0", result: "" }
    })) : i.method === "eth_signTypedData_v4" ? r("transferrequest", a) : r("else");
  }, [T]), A = s.useCallback(async (e) => {
    r("proposal received", e), w(e), j.current = e, S(!0);
  }, []), D = (e) => {
    r("proposal_expire", e), U();
  }, N = s.useCallback(() => {
    r("on session delete"), f();
  }, [f]), ae = async () => {
    l(x);
  }, re = async () => {
    const e = new Te({ projectId: "b3feb6b7c0ea5530a6eaa11d45fb4293" }), n = await Ee.init({
      core: e,
      metadata: { name: "Vastlink", description: "Vastlink", url: "www.walletconnect.com", icons: [] }
    });
    oe(n), f();
  };
  s.useEffect(() => (ae(), re(), () => {
    t && (t.off("session_proposal", A), t.off("proposal_expire", D), t.off("session_request", I), t.off("session_delete", N));
  }), []), s.useEffect(() => {
    t && (t.on("session_proposal", A), t.on("proposal_expire", D), t.on("session_request", I), t.on("session_delete", N), f());
  }, [t, I, N, f]);
  const ce = async (e) => {
    if (r("pairing with uri", e), e)
      try {
        await (t == null ? void 0 : t.pair({ uri: e })), S(!0);
      } catch (n) {
        console.error("Error pairing with uri", n), C.error(n.message);
      }
  }, ie = s.useCallback(async () => {
    var h, i, g;
    const { address: e } = O.all();
    if (!j.current || !e)
      return;
    const { id: n, params: o } = j.current;
    try {
      const a = ((h = o.requiredNamespaces) == null ? void 0 : h.eip155) || ((i = o.optionalNamespaces) == null ? void 0 : i.eip155);
      if (!a)
        throw new Error("No EIP155 namespace found in proposal");
      const B = a.chains || [`eip155:${V.id}`], me = {
        proposal: o,
        supportedNamespaces: {
          eip155: {
            // chains: [`eip155:${chain.id}`],
            chains: B,
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            // accounts: [`eip155:${chain.id}:${address}`],
            accounts: B.map((ve) => `${ve}:${e}`)
          }
        }
      }, Se = xe(me);
      v(!0);
      const Ce = await ((g = q.current) == null ? void 0 : g.approveSession({ id: n, namespaces: Se }));
      d(Ce), b(!0), S(!1), R(!1), w(null), C.success(k("toastSuccess.connectSuccess"));
    } catch (a) {
      console.error("Error approving session:", a);
    } finally {
      v(!1);
    }
  }, [t]), ue = async () => {
    if (_)
      try {
        await (t == null ? void 0 : t.rejectSession({
          id: _.id,
          reason: Pe("USER_REJECTED")
        })), S(!1), w(null);
      } catch (e) {
        console.error("Error rejecting session:", e);
      }
  }, le = async () => {
    if (u)
      try {
        v(!0);
        let e = "";
        const n = await Q({
          to: u == null ? void 0 : u.to,
          amount: u.value,
          data: u.data,
          token: u.token,
          transactionType: ge.SWAP
        });
        n != null && n.needOtp ? e = await X(n.transactionId) : e = n == null ? void 0 : n.hash, r("hash is", e);
        const { topic: o, response: h } = P, i = {
          ...h,
          result: e
        };
        await (t == null ? void 0 : t.respondSessionRequest({
          topic: o,
          response: i
        })), r("successful"), y(!1);
      } catch (e) {
        console.error("Error confirming transfer:", e), C.error("Transfer failed");
      } finally {
        v(!1);
      }
  }, pe = async () => {
    const { topic: e, response: n } = P, { id: o } = n;
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
    })), y(!1), C.info("Transfer rejected");
  }, U = async () => {
    p != null && p.topic && (await (t == null ? void 0 : t.disconnectSession({
      topic: p.topic,
      reason: {
        code: 5e3,
        message: "User disconnected"
      }
    })), f(), C.info("Disconnected"));
  }, de = () => {
    r("open"), M(!0), R(!0);
  }, fe = s.useCallback(() => {
    m && (W ? U() : de());
  }, [m, W]), he = {
    isAuthenticated: m,
    isConnected: W,
    handleConnect: fe,
    connectOpen: H,
    setConnectOpen: S,
    sessionProposal: _,
    handleRejectSession: ue,
    handleApproveSession: ie,
    loading: L,
    transferOpen: G,
    setTransferOpen: y,
    transferDetails: u,
    requestContent: P,
    handleRejectTransfer: pe,
    handleConfirmTransfer: le,
    pair: ce,
    isModalOpen: Z,
    dappInfo: se,
    setDappInfo: te,
    setIsModalOpen: R,
    displayUriInput: ee,
    setDisplayUriInput: M
  };
  return /* @__PURE__ */ $.jsx(F.Provider, { value: he, children: c });
}
function De() {
  const c = s.useContext(F);
  if (c === void 0)
    throw new Error("useWalletConnect must be used within a WalletConnectProvider");
  return c;
}
const J = s.createContext(void 0);
function Ue({ children: c }) {
  const { address: k } = O.all(), [m, x] = s.useState(!1), { data: l } = ke({
    enabled: !!k
  }), T = s.useCallback(async () => {
    try {
      const p = ((l == null ? void 0 : l.purchasedProducts) || []).some(
        (d) => d.status === "active" && d.unread
      );
      x(p);
    } catch (E) {
      console.error("Failed to check new products:", E);
    }
  }, [l]);
  return /* @__PURE__ */ $.jsx(J.Provider, { value: { checkNewProducts: T, hasNewProducts: m }, children: c });
}
const Be = () => {
  const c = s.useContext(J);
  if (c === void 0)
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return c;
};
export {
  Ue as M,
  Ae as W,
  Be as a,
  De as u
};
