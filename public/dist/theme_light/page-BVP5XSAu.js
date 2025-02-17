import { j as n } from "./vendor-radix-DUwj-Z7L.js";
import { u as X, B as l, I as w, m as x, b8 as h, b9 as g, aa as Y, ah as ee, ba as te } from "./main-DvSwU80m.js";
import { a as y } from "./vendor-react-DV6Kf_ot.js";
import { B as b } from "./vendor-walletconnect-Dh2cBDGW.js";
const C = typeof b == "function", S = typeof TextDecoder == "function" ? new TextDecoder() : void 0, k = typeof TextEncoder == "function" ? new TextEncoder() : void 0, se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", m = Array.prototype.slice.call(se), j = ((e) => {
  let t = {};
  return e.forEach((c, f) => t[c] = f), t;
})(m), ae = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, d = String.fromCharCode.bind(String), v = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (e) => new Uint8Array(Array.prototype.slice.call(e, 0)), ne = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (t) => t == "+" ? "-" : "_"), D = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""), oe = (e) => {
  let t, c, f, r, s = "";
  const A = e.length % 3;
  for (let p = 0; p < e.length; ) {
    if ((c = e.charCodeAt(p++)) > 255 || (f = e.charCodeAt(p++)) > 255 || (r = e.charCodeAt(p++)) > 255)
      throw new TypeError("invalid character found");
    t = c << 16 | f << 8 | r, s += m[t >> 18 & 63] + m[t >> 12 & 63] + m[t >> 6 & 63] + m[t & 63];
  }
  return A ? s.slice(0, A - 3) + "===".substring(A) : s;
}, _ = typeof btoa == "function" ? (e) => btoa(e) : C ? (e) => b.from(e, "binary").toString("base64") : oe, re = C ? (e) => b.from(e).toString("base64") : (e) => {
  let c = [];
  for (let f = 0, r = e.length; f < r; f += 4096)
    c.push(d.apply(null, e.subarray(f, f + 4096)));
  return _(c.join(""));
}, ie = (e) => {
  if (e.length < 2) {
    var t = e.charCodeAt(0);
    return t < 128 ? e : t < 2048 ? d(192 | t >>> 6) + d(128 | t & 63) : d(224 | t >>> 12 & 15) + d(128 | t >>> 6 & 63) + d(128 | t & 63);
  } else {
    var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
    return d(240 | t >>> 18 & 7) + d(128 | t >>> 12 & 63) + d(128 | t >>> 6 & 63) + d(128 | t & 63);
  }
}, ce = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, le = (e) => e.replace(ce, ie), B = C ? (e) => b.from(e, "utf8").toString("base64") : k ? (e) => re(k.encode(e)) : (e) => _(le(e)), de = (e, t = !1) => t ? ne(B(e)) : B(e), ue = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, fe = (e) => {
  switch (e.length) {
    case 4:
      var t = (7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3), c = t - 65536;
      return d((c >>> 10) + 55296) + d((c & 1023) + 56320);
    case 3:
      return d((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
    default:
      return d((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
  }
}, xe = (e) => e.replace(ue, fe), he = (e) => {
  if (e = e.replace(/\s+/g, ""), !ae.test(e))
    throw new TypeError("malformed base64.");
  e += "==".slice(2 - (e.length & 3));
  let t, c = "", f, r;
  for (let s = 0; s < e.length; )
    t = j[e.charAt(s++)] << 18 | j[e.charAt(s++)] << 12 | (f = j[e.charAt(s++)]) << 6 | (r = j[e.charAt(s++)]), c += f === 64 ? d(t >> 16 & 255) : r === 64 ? d(t >> 16 & 255, t >> 8 & 255) : d(t >> 16 & 255, t >> 8 & 255, t & 255);
  return c;
}, F = typeof atob == "function" ? (e) => atob(D(e)) : C ? (e) => b.from(e, "base64").toString("binary") : he, ge = C ? (e) => v(b.from(e, "base64")) : (e) => v(F(e).split("").map((t) => t.charCodeAt(0))), be = C ? (e) => b.from(e, "base64").toString("utf8") : S ? (e) => S.decode(ge(e)) : (e) => xe(F(e)), pe = (e) => D(e.replace(/[-_]/g, (t) => t == "-" ? "+" : "/")), ye = (e) => be(pe(e));
function Ie() {
  const { data: e, isFetched: t } = X();
  y.useState("LOW");
  const [c, f] = y.useState(""), [r, s] = y.useState(!1), [A, p] = y.useState(""), [I, E] = y.useState(""), [T, G] = y.useState(""), P = async () => {
    s(!0), await x.signUp({
      username: (e == null ? void 0 : e.email) ?? "",
      sub: (e == null ? void 0 : e.sub) ?? ""
    }), s(!1);
  }, U = async () => {
    s(!0), await x.signIn({
      authUsername: (e == null ? void 0 : e.email) ?? "",
      sub: (e == null ? void 0 : e.sub) ?? ""
    }), s(!1);
  }, W = async () => {
    s(!0);
    const a = await h.getWallets();
    console.log("wallets", a), s(!1);
  }, q = async () => {
    s(!0), await x.generateMPCKeys(), s(!1);
  }, N = async () => {
    if (s(!0), !t || !e)
      return;
    const a = g(e.sub);
    if (!a)
      return;
    const o = await h.getAssets(a, 0);
    console.log("assets", o), s(!1);
  }, R = async () => {
    if (s(!0), !t || !e)
      return;
    const a = g(e.sub);
    if (!a)
      return;
    const o = await h.getSupportedAssets(a, 0);
    console.log("supportedAssets", o), s(!1);
  }, J = async () => {
    if (s(!0), !t || !e)
      return;
    const a = g(e.sub);
    if (!a)
      return;
    const o = 0, i = "BTC_TEST";
    await h.addAsset(a, o, i);
    const u = await h.getAsset(a, o, i);
    console.log("asset", u), s(!1);
  }, z = async () => {
    if (s(!0), !t || !e)
      return;
    const a = g(e.sub);
    if (!a)
      return;
    const u = await h.getAddress(a, 0, "BTC_TEST");
    console.log("address", u), s(!1);
  }, K = async () => {
    if (s(!0), !t || !e)
      return;
    const a = g(e.sub);
    if (!a)
      return;
    const u = await h.getBalance(a, 0, "BTC_TEST");
    console.log("balance", u), s(!1);
  }, L = async () => {
    var o;
    if (s(!0), !(!t || !e || !g(e.sub)))
      try {
        const i = await x.signTransaction({
          fromAddress: ((o = e.chainAddresses) == null ? void 0 : o.BITCOIN) ?? "",
          toAddress: T,
          amount: I,
          token: Y.BTC,
          transactionType: ee.TRANSFER
        });
        f(i.id), console.log("transaction", i);
      } catch (i) {
        console.log("error", i);
      } finally {
        s(!1);
      }
  }, M = async () => {
    if (s(!0), !t || !e)
      return;
    const a = g(e.sub);
    if (!a)
      return;
    if (!c) {
      alert("Please create a transaction first");
      return;
    }
    const o = await h.getTransactionById(a, c);
    console.log("transaction details", o), s(!1);
  }, Z = async () => {
    var o, i;
    if (s(!0), !(!t || !e || !g(e.sub))) {
      if (!c) {
        alert("Please create a transaction first");
        return;
      }
      try {
        const u = await ((o = x.config.fireblocksNCWInstance) == null ? void 0 : o.signTransaction(c));
        console.log("result", u);
      } catch (u) {
        if (u instanceof te) {
          if (u.txId === c)
            throw u;
          console.log("stopping in progress sign transaction"), await ((i = x.config.fireblocksNCWInstance) == null ? void 0 : i.stopInProgressSignTransaction()), console.log("stopped in progress sign transaction");
        } else
          throw u;
      } finally {
        s(!1);
      }
    }
  }, O = async () => {
    var o;
    s(!0);
    const a = await ((o = x.config.fireblocksNCWInstance) == null ? void 0 : o.getKeysStatus());
    console.log("keys status", a), s(!1);
  }, V = async () => {
    var a;
    s(!0), await ((a = x.config.fireblocksNCWInstance) == null ? void 0 : a.requestJoinExistingWallet({
      onRequestId: (o) => {
        console.log("requestId", o);
        const i = de(
          `{"email":"${(e == null ? void 0 : e.email) ?? "not available"}","platform":"Web","requestId":"${o}"}`
        );
        console.log("encodedData", i), p(i);
      },
      onProvisionerFound: () => {
        console.log("onProvisionerFound");
      }
    })), s(!1);
  }, $ = async () => {
    var i;
    s(!0);
    const a = await prompt("Insert encoded request data");
    if (!a) {
      alert("No request data provided");
      return;
    }
    const o = JSON.parse(ye(a));
    console.log("decodedData", o), await ((i = x.config.fireblocksNCWInstance) == null ? void 0 : i.approveJoinWalletRequest(o.requestId)), s(!1);
  }, Q = async () => {
    s(!0);
    const { passphrases: a } = await h.getPassphraseInfos(), o = a.reduce((i, u) => (i[u.passphraseId] = u, i), {});
    console.log("passphrases", o), s(!1);
  }, H = async () => {
    s(!0), s(!1);
  };
  return /* @__PURE__ */ n.jsxs("div", { children: [
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: P, children: "Sign up by user id and init fireblocks" }),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: U, children: "Sign in by user id and init fireblocks" }),
    /* @__PURE__ */ n.jsx("br", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: O, children: "Get keys status" }),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: W, children: "Get wallets" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: q, children: "Generate MPC keys" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: R, children: "Supported Assets" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: N, children: "Asset List" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: J, children: "Add Asset(BTC_TEST)" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: z, children: "Get Address" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: K, children: "Get balance" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ n.jsx(w, { placeholder: "btc amount", value: I, onChange: (a) => E(a.target.value) }),
      /* @__PURE__ */ n.jsx(w, { placeholder: "destination address", value: T, onChange: (a) => G(a.target.value) })
    ] }),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: L, children: "Create transaction" }),
    c && /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: M, children: "Get transaction" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: Z, children: "Sign transaction" }),
    /* @__PURE__ */ n.jsx("hr", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: V, children: "Join existing device" }),
    "request data: ",
    A,
    /* @__PURE__ */ n.jsx("br", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: $, children: "Approve joining wallet" }),
    /* @__PURE__ */ n.jsx("br", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: Q, children: "Get Passphrases" }),
    /* @__PURE__ */ n.jsx("br", {}),
    /* @__PURE__ */ n.jsx(l, { disabled: r, onClick: H, children: "Backup wallet with Google Drive" }),
    /* @__PURE__ */ n.jsx("br", {})
  ] });
}
export {
  Ie as default
};
