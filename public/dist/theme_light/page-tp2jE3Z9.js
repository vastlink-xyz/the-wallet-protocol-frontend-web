import { j as a } from "./vendor-radix-D7Ti2ut_.js";
import { u as Q, B as l, I as S, p as x, m as h, bb as g, ab as H, ak as X, bc as Y } from "./main-Bv5HMVJf.js";
import { r as y } from "./vendor-react-Bi1rjDlg.js";
import { B as b } from "./vendor-walletconnect-DgnLJNqO.js";
const A = typeof b == "function", v = typeof TextDecoder == "function" ? new TextDecoder() : void 0, w = typeof TextEncoder == "function" ? new TextEncoder() : void 0, ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", m = Array.prototype.slice.call(ee), T = ((e) => {
  let t = {};
  return e.forEach((i, u) => t[i] = u), t;
})(m), te = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, d = String.fromCharCode.bind(String), k = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (e) => new Uint8Array(Array.prototype.slice.call(e, 0)), se = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (t) => t == "+" ? "-" : "_"), B = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""), ne = (e) => {
  let t, i, u, r, s = "";
  const C = e.length % 3;
  for (let p = 0; p < e.length; ) {
    if ((i = e.charCodeAt(p++)) > 255 || (u = e.charCodeAt(p++)) > 255 || (r = e.charCodeAt(p++)) > 255)
      throw new TypeError("invalid character found");
    t = i << 16 | u << 8 | r, s += m[t >> 18 & 63] + m[t >> 12 & 63] + m[t >> 6 & 63] + m[t & 63];
  }
  return C ? s.slice(0, C - 3) + "===".substring(C) : s;
}, D = typeof btoa == "function" ? (e) => btoa(e) : A ? (e) => b.from(e, "binary").toString("base64") : ne, ae = A ? (e) => b.from(e).toString("base64") : (e) => {
  let i = [];
  for (let u = 0, r = e.length; u < r; u += 4096)
    i.push(d.apply(null, e.subarray(u, u + 4096)));
  return D(i.join(""));
}, oe = (e) => {
  if (e.length < 2) {
    var t = e.charCodeAt(0);
    return t < 128 ? e : t < 2048 ? d(192 | t >>> 6) + d(128 | t & 63) : d(224 | t >>> 12 & 15) + d(128 | t >>> 6 & 63) + d(128 | t & 63);
  } else {
    var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
    return d(240 | t >>> 18 & 7) + d(128 | t >>> 12 & 63) + d(128 | t >>> 6 & 63) + d(128 | t & 63);
  }
}, re = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, ie = (e) => e.replace(re, oe), _ = A ? (e) => b.from(e, "utf8").toString("base64") : w ? (e) => ae(w.encode(e)) : (e) => D(ie(e)), ce = (e, t = !1) => t ? se(_(e)) : _(e), de = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, le = (e) => {
  switch (e.length) {
    case 4:
      var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3), i = t - 65536;
      return d((i >>> 10) + 55296) + d((i & 1023) + 56320);
    case 3:
      return d((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
    default:
      return d((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
  }
}, ue = (e) => e.replace(de, le), fe = (e) => {
  if (e = e.replace(/\s+/g, ""), !te.test(e))
    throw new TypeError("malformed base64.");
  e += "==".slice(2 - (e.length & 3));
  let t, i = "", u, r;
  for (let s = 0; s < e.length; )
    t = T[e.charAt(s++)] << 18 | T[e.charAt(s++)] << 12 | (u = T[e.charAt(s++)]) << 6 | (r = T[e.charAt(s++)]), i += u === 64 ? d(t >> 16 & 255) : r === 64 ? d(t >> 16 & 255, t >> 8 & 255) : d(t >> 16 & 255, t >> 8 & 255, t & 255);
  return i;
}, F = typeof atob == "function" ? (e) => atob(B(e)) : A ? (e) => b.from(e, "base64").toString("binary") : fe, xe = A ? (e) => k(b.from(e, "base64")) : (e) => k(F(e).split("").map((t) => t.charCodeAt(0))), he = A ? (e) => b.from(e, "base64").toString("utf8") : v ? (e) => v.decode(xe(e)) : (e) => ue(F(e)), ge = (e) => B(e.replace(/[-_]/g, (t) => t == "-" ? "+" : "/")), be = (e) => he(ge(e));
function me() {
  const { data: e, isFetched: t } = Q();
  y.useState("LOW");
  const [i, u] = y.useState(""), [r, s] = y.useState(!1), [C, p] = y.useState(""), [I, E] = y.useState(""), [j, U] = y.useState(""), G = async () => {
    s(!0), await x.signUp({
      username: (e == null ? void 0 : e.email) ?? "",
      sub: (e == null ? void 0 : e.sub) ?? ""
    }), s(!1);
  }, P = async () => {
    s(!0), await x.signIn({
      authUsername: (e == null ? void 0 : e.email) ?? "",
      sub: (e == null ? void 0 : e.sub) ?? ""
    }), s(!1);
  }, W = async () => {
    s(!0);
    const n = await h.getWallets();
    console.log("wallets", n), s(!1);
  }, q = async () => {
    s(!0), await x.generateMPCKeys(), s(!1);
  }, N = async () => {
    if (s(!0), !t || !e)
      return;
    const n = g(e.sub);
    if (!n)
      return;
    const o = await h.getAssets(n, 0);
    console.log("assets", o), s(!1);
  }, R = async () => {
    if (s(!0), !t || !e)
      return;
    const n = g(e.sub);
    if (!n)
      return;
    const o = await h.getSupportedAssets(n, 0);
    console.log("supportedAssets", o), s(!1);
  }, J = async () => {
    if (s(!0), !t || !e)
      return;
    const n = g(e.sub);
    if (!n)
      return;
    const o = 0, c = "BTC_TEST";
    await h.addAsset(n, o, c);
    const f = await h.getAsset(n, o, c);
    console.log("asset", f), s(!1);
  }, z = async () => {
    if (s(!0), !t || !e)
      return;
    const n = g(e.sub);
    if (!n)
      return;
    const f = await h.getAddress(n, 0, "BTC_TEST");
    console.log("address", f), s(!1);
  }, K = async () => {
    if (s(!0), !t || !e)
      return;
    const n = g(e.sub);
    if (!n)
      return;
    const f = await h.getBalance(n, 0, "BTC_TEST");
    console.log("balance", f), s(!1);
  }, L = async () => {
    var o;
    if (s(!0), !(!t || !e || !g(e.sub)))
      try {
        const c = await x.signTransaction({
          fromAddress: ((o = e.chainAddresses) == null ? void 0 : o.BITCOIN) ?? "",
          toAddress: j,
          amount: I,
          token: H.BTC,
          transactionType: X.TRANSFER
        });
        u(c.id), console.log("transaction", c);
      } catch (c) {
        console.log("error", c);
      } finally {
        s(!1);
      }
  }, M = async () => {
    if (s(!0), !t || !e)
      return;
    const n = g(e.sub);
    if (!n)
      return;
    if (!i) {
      alert("Please create a transaction first");
      return;
    }
    const o = await h.getTransactionById(n, i);
    console.log("transaction details", o), s(!1);
  }, Z = async () => {
    var o, c;
    if (s(!0), !(!t || !e || !g(e.sub))) {
      if (!i) {
        alert("Please create a transaction first");
        return;
      }
      try {
        const f = await ((o = x.config.fireblocksNCWInstance) == null ? void 0 : o.signTransaction(i));
        console.log("result", f);
      } catch (f) {
        if (f instanceof Y) {
          if (f.txId === i)
            throw f;
          console.log("stopping in progress sign transaction"), await ((c = x.config.fireblocksNCWInstance) == null ? void 0 : c.stopInProgressSignTransaction()), console.log("stopped in progress sign transaction");
        } else
          throw f;
      } finally {
        s(!1);
      }
    }
  }, O = async () => {
    var o;
    s(!0);
    const n = await ((o = x.config.fireblocksNCWInstance) == null ? void 0 : o.getKeysStatus());
    console.log("keys status", n), s(!1);
  }, V = async () => {
    var n;
    s(!0), await ((n = x.config.fireblocksNCWInstance) == null ? void 0 : n.requestJoinExistingWallet({
      onRequestId: (o) => {
        console.log("requestId", o);
        const c = ce(
          `{"email":"${(e == null ? void 0 : e.email) ?? "not available"}","platform":"Web","requestId":"${o}"}`
        );
        console.log("encodedData", c), p(c);
      },
      onProvisionerFound: () => {
        console.log("onProvisionerFound");
      }
    })), s(!1);
  }, $ = async () => {
    var c;
    s(!0);
    const n = await prompt("Insert encoded request data");
    if (!n) {
      alert("No request data provided");
      return;
    }
    const o = JSON.parse(be(n));
    console.log("decodedData", o), await ((c = x.config.fireblocksNCWInstance) == null ? void 0 : c.approveJoinWalletRequest(o.requestId)), s(!1);
  };
  return /* @__PURE__ */ a.jsxs("div", { children: [
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: G, children: "Sign up by user id and init fireblocks" }),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: P, children: "Sign in by user id and init fireblocks" }),
    /* @__PURE__ */ a.jsx("br", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: O, children: "Get keys status" }),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: W, children: "Get wallets" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: q, children: "Generate MPC keys" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: R, children: "Supported Assets" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: N, children: "Asset List" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: J, children: "Add Asset(BTC_TEST)" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: z, children: "Get Address" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: K, children: "Get balance" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ a.jsx(S, { placeholder: "btc amount", value: I, onChange: (n) => E(n.target.value) }),
      /* @__PURE__ */ a.jsx(S, { placeholder: "destination address", value: j, onChange: (n) => U(n.target.value) })
    ] }),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: L, children: "Create transaction" }),
    i && /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: M, children: "Get transaction" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: Z, children: "Sign transaction" }),
    /* @__PURE__ */ a.jsx("hr", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: V, children: "Join existing device" }),
    "request data: ",
    C,
    /* @__PURE__ */ a.jsx("br", {}),
    /* @__PURE__ */ a.jsx(l, { disabled: r, onClick: $, children: "Approve joining wallet" })
  ] });
}
export {
  me as default
};
