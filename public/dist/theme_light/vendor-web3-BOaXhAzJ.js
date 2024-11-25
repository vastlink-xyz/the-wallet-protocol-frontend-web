var gm = Object.defineProperty;
var Ml = (t) => {
  throw TypeError(t);
};
var ym = (t, e, n) => e in t ? gm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Fl = (t, e, n) => ym(t, typeof e != "symbol" ? e + "" : e, n), za = (t, e, n) => e.has(t) || Ml("Cannot " + n);
var ue = (t, e, n) => (za(t, e, "read from private field"), n ? n.call(t) : e.get(t)), me = (t, e, n) => e.has(t) ? Ml("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), te = (t, e, n, r) => (za(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Ki = (t, e, n) => (za(t, e, "access private method"), n);
import { c as bm, a as mm, B as xe, e as Cs, r as Or, s as wm, b as Em, d as Kt, E as xm, f as vm, g as Ul } from "./vendor-walletconnect-DWr_8Xx3.js";
import { c as Sm, d as tf, g as _m } from "./vendor-react-CwfAKKXk.js";
function fs(t) {
  "@babel/helpers - typeof";
  return fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, fs(t);
}
function Am(t, e) {
  if (fs(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (fs(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Im(t) {
  var e = Am(t, "string");
  return fs(e) == "symbol" ? e : e + "";
}
function oe(t, e, n) {
  return (e = Im(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
const Pm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oe
}, Symbol.toStringTag, { value: "Module" }));
function Bm(t, e) {
  var n = Object.setPrototypeOf;
  n ? n(t, e) : t.__proto__ = e;
}
function Tm(t, e) {
  e === void 0 && (e = t.constructor);
  var n = Error.captureStackTrace;
  n && n(t, e);
}
var $m = /* @__PURE__ */ function() {
  var t = function(n, r) {
    return t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(i, s) {
      i.__proto__ = s;
    } || function(i, s) {
      for (var o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (i[o] = s[o]);
    }, t(n, r);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Nm = function(t) {
  $m(e, t);
  function e(n, r) {
    var i = this.constructor, s = t.call(this, n, r) || this;
    return Object.defineProperty(s, "name", {
      value: i.name,
      enumerable: !1,
      configurable: !0
    }), Bm(s, i.prototype), Tm(s), s;
  }
  return e;
}(Error);
function Rm(t) {
  const e = t.findIndex((s) => s instanceof Error), n = t.findIndex((s) => typeof s == "string"), r = t.findIndex((s) => s && typeof s == "object" && "status" in s && "type" in s);
  let i;
  if (r !== -1) {
    const s = t[r];
    i = new Error(`${s.status} ${s.type.toString()} ${s.statusText}`);
  } else e !== -1 ? i = t.splice(e, 1)[0] : n !== -1 ? i = new Error(t.splice(n, 1)[0]) : i = new Error("Unknown error");
  return [i, t];
}
class Jo extends Nm {
  constructor(e, n, r) {
    super(n), oe(this, "code", void 0), oe(this, "message", void 0), oe(this, "cause", void 0), this.code = e, this.message = n || "", this.cause = r, Object.defineProperty(this, "name", {
      value: "Web3AuthError"
    });
  }
  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      cause: Rm([this.cause])
    };
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
}
class ke extends Jo {
  constructor(e, n, r) {
    super(e, n, r), Object.defineProperty(this, "name", {
      value: "WalletInitializationError"
    });
  }
  static fromCode(e, n = "", r) {
    return new ke(e, `${ke.messages[e]}, ${n}`, r);
  }
  // Custom methods
  static notFound(e = "", n) {
    return ke.fromCode(5001, e, n);
  }
  static notInstalled(e = "", n) {
    return ke.fromCode(5002, e, n);
  }
  static notReady(e = "", n) {
    return ke.fromCode(5003, e, n);
  }
  static windowBlocked(e = "", n) {
    return ke.fromCode(5004, e, n);
  }
  static windowClosed(e = "", n) {
    return ke.fromCode(5005, e, n);
  }
  static incompatibleChainNameSpace(e = "", n) {
    return ke.fromCode(5006, e, n);
  }
  static duplicateAdapterError(e = "", n) {
    return ke.fromCode(5007, e, n);
  }
  static invalidProviderConfigError(e = "", n) {
    return ke.fromCode(5008, e, n);
  }
  static providerNotReadyError(e = "", n) {
    return ke.fromCode(5009, e, n);
  }
  static rpcConnectionError(e = "", n) {
    return ke.fromCode(5010, e, n);
  }
  static invalidParams(e = "", n) {
    return ke.fromCode(5011, e, n);
  }
  static invalidNetwork(e = "", n) {
    return ke.fromCode(5013, e, n);
  }
}
oe(ke, "messages", {
  5e3: "Custom",
  5001: "Wallet is not found",
  5002: "Wallet is not installed",
  5003: "Wallet is not ready yet",
  5004: "Wallet window is blocked",
  5005: "Wallet window has been closed by the user",
  5006: "Incompatible chain namespace provided",
  5007: "Adapter has already been included",
  5008: "Invalid provider Config",
  5009: "Provider is not ready yet",
  5010: "Failed to connect with rpc url",
  5011: "Invalid params passed in",
  5013: "Invalid network provided"
});
class dt extends Jo {
  constructor(e, n, r) {
    super(e, n, r), Object.defineProperty(this, "name", {
      value: "WalletLoginError"
    });
  }
  static fromCode(e, n = "", r) {
    return new dt(e, `${dt.messages[e]}. ${n}`, r);
  }
  static connectionError(e = "", n) {
    return dt.fromCode(5111, e, n);
  }
  static disconnectionError(e = "", n) {
    return dt.fromCode(5112, e, n);
  }
  static notConnectedError(e = "", n) {
    return dt.fromCode(5113, e, n);
  }
  static popupClosed(e = "", n) {
    return dt.fromCode(5114, e, n);
  }
  static mfaEnabled(e = "", n) {
    return dt.fromCode(5115, e, n);
  }
  static chainConfigNotAdded(e = "", n) {
    return dt.fromCode(5116, e, n);
  }
  static unsupportedOperation(e = "", n) {
    return dt.fromCode(5117, e, n);
  }
  static coreKitKeyNotFound(e = "", n) {
    return dt.fromCode(5118, e, n);
  }
  static userNotLoggedIn(e = "", n) {
    return dt.fromCode(5119, e, n);
  }
}
oe(dt, "messages", {
  5e3: "Custom",
  5111: "Failed to connect with wallet",
  5112: "Failed to disconnect from wallet",
  5113: "Wallet is not connected",
  5114: "Wallet popup has been closed by the user",
  5115: "User has already enabled mfa, please use the @web3auth/web3auth-web sdk for login with mfa",
  5116: "Chain config has not been added. Please add the chain config before calling switchChain",
  5117: "Unsupported operation",
  5118: "useCoreKitKey flag is enabled but coreKitKey is not available",
  5119: "User not logged in."
});
class kt extends Jo {
  constructor(e, n, r) {
    super(e, n, r), Object.defineProperty(this, "name", {
      value: "WalletOperationsError"
    });
  }
  static fromCode(e, n = "", r) {
    return new kt(e, `${kt.messages[e]}, ${n}`, r);
  }
  // Custom methods
  static chainIDNotAllowed(e = "", n) {
    return kt.fromCode(5201, e, n);
  }
  static operationNotAllowed(e = "", n) {
    return kt.fromCode(5202, e, n);
  }
  static chainNamespaceNotAllowed(e = "", n) {
    return kt.fromCode(5203, e, n);
  }
}
oe(kt, "messages", {
  5e3: "Custom",
  5201: "Provided chainId is not allowed",
  5202: "This operation is not allowed"
});
class dn extends Jo {
  constructor(e, n, r) {
    super(e, n, r), Object.defineProperty(this, "name", {
      value: "WalletProviderError"
    });
  }
  static fromCode(e, n = "", r) {
    return new kt(e, `${dn.messages[e]}, ${n}`, r);
  }
  // Custom methods
  static invalidRequestArgs(e = "", n) {
    return kt.fromCode(5301, e, n);
  }
  static invalidRequestMethod(e = "", n) {
    return kt.fromCode(5302, e, n);
  }
  static invalidRequestParams(e = "", n) {
    return kt.fromCode(5303, e, n);
  }
}
oe(dn, "messages", {
  5e3: "Custom",
  5301: "Expected a single, non-array, object argument.",
  5302: "'args.method' must be a non-empty string.",
  5303: "'args.params' must be an object or array if provided."
});
const Va = {
  EIP155: "eip155",
  SOLANA: "solana",
  CASPER: "casper",
  XRPL: "xrpl",
  OTHER: "other"
};
var $0 = { exports: {} };
(function(t) {
  (function(e, n) {
    t.exports ? t.exports = n() : e.log = n();
  })(Sm, function() {
    var e = function() {
    }, n = "undefined", r = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent), i = [
      "trace",
      "debug",
      "info",
      "warn",
      "error"
    ], s = {}, o = null;
    function a(h, g) {
      var b = h[g];
      if (typeof b.bind == "function")
        return b.bind(h);
      try {
        return Function.prototype.bind.call(b, h);
      } catch {
        return function() {
          return Function.prototype.apply.apply(b, [h, arguments]);
        };
      }
    }
    function c() {
      console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
    }
    function u(h) {
      return h === "debug" && (h = "log"), typeof console === n ? !1 : h === "trace" && r ? c : console[h] !== void 0 ? a(console, h) : console.log !== void 0 ? a(console, "log") : e;
    }
    function f() {
      for (var h = this.getLevel(), g = 0; g < i.length; g++) {
        var b = i[g];
        this[b] = g < h ? e : this.methodFactory(b, h, this.name);
      }
      if (this.log = this.debug, typeof console === n && h < this.levels.SILENT)
        return "No console available for logging";
    }
    function l(h) {
      return function() {
        typeof console !== n && (f.call(this), this[h].apply(this, arguments));
      };
    }
    function d(h, g, b) {
      return u(h) || l.apply(this, arguments);
    }
    function y(h, g) {
      var b = this, E, S, N, O = "loglevel";
      typeof h == "string" ? O += ":" + h : typeof h == "symbol" && (O = void 0);
      function C(P) {
        var I = (i[P] || "silent").toUpperCase();
        if (!(typeof window === n || !O)) {
          try {
            window.localStorage[O] = I;
            return;
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(O) + "=" + I + ";";
          } catch {
          }
        }
      }
      function L() {
        var P;
        if (!(typeof window === n || !O)) {
          try {
            P = window.localStorage[O];
          } catch {
          }
          if (typeof P === n)
            try {
              var I = window.document.cookie, A = encodeURIComponent(O), R = I.indexOf(A + "=");
              R !== -1 && (P = /^([^;]+)/.exec(
                I.slice(R + A.length + 1)
              )[1]);
            } catch {
            }
          return b.levels[P] === void 0 && (P = void 0), P;
        }
      }
      function p() {
        if (!(typeof window === n || !O)) {
          try {
            window.localStorage.removeItem(O);
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(O) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch {
          }
        }
      }
      function x(P) {
        var I = P;
        if (typeof I == "string" && b.levels[I.toUpperCase()] !== void 0 && (I = b.levels[I.toUpperCase()]), typeof I == "number" && I >= 0 && I <= b.levels.SILENT)
          return I;
        throw new TypeError("log.setLevel() called with invalid level: " + P);
      }
      b.name = h, b.levels = {
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        SILENT: 5
      }, b.methodFactory = g || d, b.getLevel = function() {
        return N ?? S ?? E;
      }, b.setLevel = function(P, I) {
        return N = x(P), I !== !1 && C(N), f.call(b);
      }, b.setDefaultLevel = function(P) {
        S = x(P), L() || b.setLevel(P, !1);
      }, b.resetLevel = function() {
        N = null, p(), f.call(b);
      }, b.enableAll = function(P) {
        b.setLevel(b.levels.TRACE, P);
      }, b.disableAll = function(P) {
        b.setLevel(b.levels.SILENT, P);
      }, b.rebuild = function() {
        if (o !== b && (E = x(o.getLevel())), f.call(b), o === b)
          for (var P in s)
            s[P].rebuild();
      }, E = x(
        o ? o.getLevel() : "WARN"
      );
      var _ = L();
      _ != null && (N = x(_)), f.call(b);
    }
    o = new y(), o.getLogger = function(g) {
      if (typeof g != "symbol" && typeof g != "string" || g === "")
        throw new TypeError("You must supply a name when creating a logger.");
      var b = s[g];
      return b || (b = s[g] = new y(
        g,
        o.methodFactory
      )), b;
    };
    var w = typeof window !== n ? window.log : void 0;
    return o.noConflict = function() {
      return typeof window !== n && window.log === o && (window.log = w), o;
    }, o.getLoggers = function() {
      return s;
    }, o.default = o, o;
  });
})($0);
var N0 = $0.exports;
const nf = /* @__PURE__ */ tf(N0);
var Bo = nf.getLogger("web3auth-logger");
function Dl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function le(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Dl(Object(n), !0).forEach(function(r) {
      oe(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Dl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ls(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
function Om(t) {
  if (typeof t != "boolean")
    throw new Error(`boolean expected, not ${t}`);
}
function Cm(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function Mi(t, ...e) {
  if (!Cm(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function R0(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  ls(t.outputLen), ls(t.blockLen);
}
function _r(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function rf(t, e) {
  Mi(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const km = { number: ls, bool: Om, bytes: Mi, hash: R0, exists: _r, output: rf }, Wa = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Lm = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), Ka = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), Gt = (t, e) => t << 32 - e | t >>> e, jl = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, Mm = (t) => t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
function Hl(t) {
  for (let e = 0; e < t.length; e++)
    t[e] = Mm(t[e]);
}
function Fm(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Xo(t) {
  return typeof t == "string" && (t = Fm(t)), Mi(t), t;
}
function Um(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    Mi(i), e += i.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const s = t[r];
    n.set(s, i), i += s.length;
  }
  return n;
}
let sf = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
function O0(t) {
  const e = (r) => t().update(Xo(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function Dm(t = 32) {
  if (Wa && typeof Wa.getRandomValues == "function")
    return Wa.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
let C0 = class extends sf {
  constructor(e, n) {
    super(), this.finished = !1, this.destroyed = !1, R0(e);
    const r = Xo(n);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, s = new Uint8Array(i);
    s.set(r.length > i ? e.create().update(r).digest() : r);
    for (let o = 0; o < s.length; o++)
      s[o] ^= 54;
    this.iHash.update(s), this.oHash = e.create();
    for (let o = 0; o < s.length; o++)
      s[o] ^= 106;
    this.oHash.update(s), s.fill(0);
  }
  update(e) {
    return _r(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    _r(this), Mi(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: i, destroyed: s, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = i, e.destroyed = s, e.blockLen = o, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const k0 = (t, e, n) => new C0(t, e).update(n).digest();
k0.create = (t, e) => new C0(t, e);
function jm(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const i = BigInt(32), s = BigInt(4294967295), o = Number(n >> i & s), a = Number(n & s), c = r ? 4 : 0, u = r ? 0 : 4;
  t.setUint32(e + c, o, r), t.setUint32(e + u, a, r);
}
const Hm = (t, e, n) => t & e ^ ~t & n, Gm = (t, e, n) => t & e ^ t & n ^ e & n;
let qm = class extends sf {
  constructor(e, n, r, i) {
    super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Ka(this.buffer);
  }
  update(e) {
    _r(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = Xo(e);
    const s = e.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(i - this.pos, s - o);
      if (a === i) {
        const c = Ka(e);
        for (; i <= s - o; o += i)
          this.process(c, o);
        continue;
      }
      r.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === i && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    _r(this), rf(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    n[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(r, 0), o = 0);
    for (let l = o; l < i; l++)
      n[l] = 0;
    jm(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const a = Ka(e), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let l = 0; l < u; l++)
      a.setUint32(4 * l, f[l], s);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: s, destroyed: o, pos: a } = this;
    return e.length = i, e.pos = a, e.finished = s, e.destroyed = o, i % n && e.buffer.set(r), e;
  }
};
const zm = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), $n = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Nn = /* @__PURE__ */ new Uint32Array(64);
let Vm = class extends qm {
  constructor() {
    super(64, 32, 8, !1), this.A = $n[0] | 0, this.B = $n[1] | 0, this.C = $n[2] | 0, this.D = $n[3] | 0, this.E = $n[4] | 0, this.F = $n[5] | 0, this.G = $n[6] | 0, this.H = $n[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: i, E: s, F: o, G: a, H: c } = this;
    return [e, n, r, i, s, o, a, c];
  }
  // prettier-ignore
  set(e, n, r, i, s, o, a, c) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = s | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, n) {
    for (let l = 0; l < 16; l++, n += 4)
      Nn[l] = e.getUint32(n, !1);
    for (let l = 16; l < 64; l++) {
      const d = Nn[l - 15], y = Nn[l - 2], w = Gt(d, 7) ^ Gt(d, 18) ^ d >>> 3, h = Gt(y, 17) ^ Gt(y, 19) ^ y >>> 10;
      Nn[l] = h + Nn[l - 7] + w + Nn[l - 16] | 0;
    }
    let { A: r, B: i, C: s, D: o, E: a, F: c, G: u, H: f } = this;
    for (let l = 0; l < 64; l++) {
      const d = Gt(a, 6) ^ Gt(a, 11) ^ Gt(a, 25), y = f + d + Hm(a, c, u) + zm[l] + Nn[l] | 0, h = (Gt(r, 2) ^ Gt(r, 13) ^ Gt(r, 22)) + Gm(r, i, s) | 0;
      f = u, u = c, c = a, a = o + y | 0, o = s, s = i, i = r, r = y + h | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(r, i, s, o, a, c, u, f);
  }
  roundClean() {
    Nn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
const Wm = /* @__PURE__ */ O0(() => new Vm()), ao = /* @__PURE__ */ BigInt(2 ** 32 - 1), Gl = /* @__PURE__ */ BigInt(32);
function Km(t, e = !1) {
  return e ? { h: Number(t & ao), l: Number(t >> Gl & ao) } : { h: Number(t >> Gl & ao) | 0, l: Number(t & ao) | 0 };
}
function Zm(t, e = !1) {
  let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: o } = Km(t[i], e);
    [n[i], r[i]] = [s, o];
  }
  return [n, r];
}
const Ym = (t, e, n) => t << n | e >>> 32 - n, Jm = (t, e, n) => e << n | t >>> 32 - n, Xm = (t, e, n) => e << n - 32 | t >>> 64 - n, Qm = (t, e, n) => t << n - 32 | e >>> 64 - n;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const L0 = /* @__PURE__ */ BigInt(0), Qo = /* @__PURE__ */ BigInt(1), ew = /* @__PURE__ */ BigInt(2);
function Ar(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function ks(t) {
  if (!Ar(t))
    throw new Error("Uint8Array expected");
}
const tw = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function mi(t) {
  ks(t);
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += tw[t[n]];
  return e;
}
function M0(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function of(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
const sn = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function ql(t) {
  if (t >= sn._0 && t <= sn._9)
    return t - sn._0;
  if (t >= sn._A && t <= sn._F)
    return t - (sn._A - 10);
  if (t >= sn._a && t <= sn._f)
    return t - (sn._a - 10);
}
function wi(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length, n = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(n);
  for (let i = 0, s = 0; i < n; i++, s += 2) {
    const o = ql(t.charCodeAt(s)), a = ql(t.charCodeAt(s + 1));
    if (o === void 0 || a === void 0) {
      const c = t[s] + t[s + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + s);
    }
    r[i] = o * 16 + a;
  }
  return r;
}
function yr(t) {
  return of(mi(t));
}
function af(t) {
  return ks(t), of(mi(Uint8Array.from(t).reverse()));
}
function Ei(t, e) {
  return wi(t.toString(16).padStart(e * 2, "0"));
}
function cf(t, e) {
  return Ei(t, e).reverse();
}
function nw(t) {
  return wi(M0(t));
}
function $t(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = wi(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (Ar(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof n == "number" && i !== n)
    throw new Error(`${t} expected ${n} bytes, got ${i}`);
  return r;
}
function ds(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    ks(i), e += i.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const s = t[r];
    n.set(s, i), i += s.length;
  }
  return n;
}
function rw(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = 0;
  for (let r = 0; r < t.length; r++)
    n |= t[r] ^ e[r];
  return n === 0;
}
function iw(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function sw(t) {
  let e;
  for (e = 0; t > L0; t >>= Qo, e += 1)
    ;
  return e;
}
function ow(t, e) {
  return t >> BigInt(e) & Qo;
}
function aw(t, e, n) {
  return t | (n ? Qo : L0) << BigInt(e);
}
const uf = (t) => (ew << BigInt(t - 1)) - Qo, Za = (t) => new Uint8Array(t), zl = (t) => Uint8Array.from(t);
function F0(t, e, n) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = Za(t), i = Za(t), s = 0;
  const o = () => {
    r.fill(1), i.fill(0), s = 0;
  }, a = (...l) => n(i, r, ...l), c = (l = Za()) => {
    i = a(zl([0]), l), r = a(), l.length !== 0 && (i = a(zl([1]), l), r = a());
  }, u = () => {
    if (s++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let l = 0;
    const d = [];
    for (; l < e; ) {
      r = a();
      const y = r.slice();
      d.push(y), l += r.length;
    }
    return ds(...d);
  };
  return (l, d) => {
    o(), c(l);
    let y;
    for (; !(y = d(u())); )
      c();
    return o(), y;
  };
}
const cw = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || Ar(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Ls(t, e, n = {}) {
  const r = (i, s, o) => {
    const a = cw[s];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const c = t[i];
    if (!(o && c === void 0) && !a(c, t))
      throw new Error(`Invalid param ${String(i)}=${c} (${typeof c}), expected ${s}`);
  };
  for (const [i, s] of Object.entries(e))
    r(i, s, !1);
  for (const [i, s] of Object.entries(n))
    r(i, s, !0);
  return t;
}
const uw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  abytes: ks,
  bitGet: ow,
  bitLen: sw,
  bitMask: uf,
  bitSet: aw,
  bytesToHex: mi,
  bytesToNumberBE: yr,
  bytesToNumberLE: af,
  concatBytes: ds,
  createHmacDrbg: F0,
  ensureBytes: $t,
  equalBytes: rw,
  hexToBytes: wi,
  hexToNumber: of,
  isBytes: Ar,
  numberToBytesBE: Ei,
  numberToBytesLE: cf,
  numberToHexUnpadded: M0,
  numberToVarBytesBE: nw,
  utf8ToBytes: iw,
  validateObject: Ls
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ze = BigInt(0), $e = BigInt(1), or = BigInt(2), fw = BigInt(3), Kc = BigInt(4), Vl = BigInt(5), Wl = BigInt(8);
BigInt(9);
BigInt(16);
function st(t, e) {
  const n = t % e;
  return n >= ze ? n : e + n;
}
function lw(t, e, n) {
  if (n <= ze || e < ze)
    throw new Error("Expected power/modulo > 0");
  if (n === $e)
    return ze;
  let r = $e;
  for (; e > ze; )
    e & $e && (r = r * t % n), t = t * t % n, e >>= $e;
  return r;
}
function yt(t, e, n) {
  let r = t;
  for (; e-- > ze; )
    r *= r, r %= n;
  return r;
}
function Zc(t, e) {
  if (t === ze || e <= ze)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = st(t, e), r = e, i = ze, s = $e;
  for (; n !== ze; ) {
    const a = r / n, c = r % n, u = i - s * a;
    r = n, n = c, i = s, s = u;
  }
  if (r !== $e)
    throw new Error("invert: does not exist");
  return st(i, e);
}
function dw(t) {
  const e = (t - $e) / or;
  let n, r, i;
  for (n = t - $e, r = 0; n % or === ze; n /= or, r++)
    ;
  for (i = or; i < t && lw(i, e, t) !== t - $e; i++)
    ;
  if (r === 1) {
    const o = (t + $e) / Kc;
    return function(c, u) {
      const f = c.pow(u, o);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const s = (n + $e) / or;
  return function(a, c) {
    if (a.pow(c, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = r, f = a.pow(a.mul(a.ONE, i), n), l = a.pow(c, s), d = a.pow(c, n);
    for (; !a.eql(d, a.ONE); ) {
      if (a.eql(d, a.ZERO))
        return a.ZERO;
      let y = 1;
      for (let h = a.sqr(d); y < u && !a.eql(h, a.ONE); y++)
        h = a.sqr(h);
      const w = a.pow(f, $e << BigInt(u - y - 1));
      f = a.sqr(w), l = a.mul(l, w), d = a.mul(d, f), u = y;
    }
    return l;
  };
}
function hw(t) {
  if (t % Kc === fw) {
    const e = (t + $e) / Kc;
    return function(r, i) {
      const s = r.pow(i, e);
      if (!r.eql(r.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % Wl === Vl) {
    const e = (t - Vl) / Wl;
    return function(r, i) {
      const s = r.mul(i, or), o = r.pow(s, e), a = r.mul(i, o), c = r.mul(r.mul(a, or), o), u = r.mul(a, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(u), i))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return dw(t);
}
const pw = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function gw(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = pw.reduce((r, i) => (r[i] = "function", r), e);
  return Ls(t, n);
}
function yw(t, e, n) {
  if (n < ze)
    throw new Error("Expected power > 0");
  if (n === ze)
    return t.ONE;
  if (n === $e)
    return e;
  let r = t.ONE, i = e;
  for (; n > ze; )
    n & $e && (r = t.mul(r, i)), i = t.sqr(i), n >>= $e;
  return r;
}
function bw(t, e) {
  const n = new Array(e.length), r = e.reduce((s, o, a) => t.is0(o) ? s : (n[a] = s, t.mul(s, o)), t.ONE), i = t.inv(r);
  return e.reduceRight((s, o, a) => t.is0(o) ? s : (n[a] = t.mul(s, n[a]), t.mul(s, o)), i), n;
}
function U0(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function mw(t, e, n = !1, r = {}) {
  if (t <= ze)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = U0(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = hw(t), a = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: uf(i),
    ZERO: ze,
    ONE: $e,
    create: (c) => st(c, t),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return ze <= c && c < t;
    },
    is0: (c) => c === ze,
    isOdd: (c) => (c & $e) === $e,
    neg: (c) => st(-c, t),
    eql: (c, u) => c === u,
    sqr: (c) => st(c * c, t),
    add: (c, u) => st(c + u, t),
    sub: (c, u) => st(c - u, t),
    mul: (c, u) => st(c * u, t),
    pow: (c, u) => yw(a, c, u),
    div: (c, u) => st(c * Zc(u, t), t),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => Zc(c, t),
    sqrt: r.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => bw(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => n ? cf(c, s) : Ei(c, s),
    fromBytes: (c) => {
      if (c.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${c.length}`);
      return n ? af(c) : yr(c);
    }
  });
  return Object.freeze(a);
}
function D0(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function j0(t) {
  const e = D0(t);
  return e + Math.ceil(e / 2);
}
function ww(t, e, n = !1) {
  const r = t.length, i = D0(e), s = j0(e);
  if (r < 16 || r < s || r > 1024)
    throw new Error(`expected ${s}-1024 bytes of input, got ${r}`);
  const o = n ? yr(t) : af(t), a = st(o, e - $e) + $e;
  return n ? cf(a, i) : Ei(a, i);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ew = BigInt(0), Ya = BigInt(1);
function xw(t, e) {
  const n = (i, s) => {
    const o = s.negate();
    return i ? o : s;
  }, r = (i) => {
    const s = Math.ceil(e / i) + 1, o = 2 ** (i - 1);
    return { windows: s, windowSize: o };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(i, s) {
      let o = t.ZERO, a = i;
      for (; s > Ew; )
        s & Ya && (o = o.add(a)), a = a.double(), s >>= Ya;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(i, s) {
      const { windows: o, windowSize: a } = r(s), c = [];
      let u = i, f = u;
      for (let l = 0; l < o; l++) {
        f = u, c.push(f);
        for (let d = 1; d < a; d++)
          f = f.add(u), c.push(f);
        u = f.double();
      }
      return c;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(i, s, o) {
      const { windows: a, windowSize: c } = r(i);
      let u = t.ZERO, f = t.BASE;
      const l = BigInt(2 ** i - 1), d = 2 ** i, y = BigInt(i);
      for (let w = 0; w < a; w++) {
        const h = w * c;
        let g = Number(o & l);
        o >>= y, g > c && (g -= d, o += Ya);
        const b = h, E = h + Math.abs(g) - 1, S = w % 2 !== 0, N = g < 0;
        g === 0 ? f = f.add(n(S, s[b])) : u = u.add(n(N, s[E]));
      }
      return { p: u, f };
    },
    wNAFCached(i, s, o, a) {
      const c = i._WINDOW_SIZE || 1;
      let u = s.get(i);
      return u || (u = this.precomputeWindow(i, c), c !== 1 && s.set(i, a(u))), this.wNAF(c, u, o);
    }
  };
}
function H0(t) {
  return gw(t.Fp), Ls(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...U0(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function vw(t) {
  const e = H0(t);
  Ls(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: n, Fp: r, a: i } = e;
  if (n) {
    if (!r.eql(i, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: Sw, hexToBytes: _w } = uw, dr = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  _parseInt(t) {
    const { Err: e } = dr;
    if (t.length < 2 || t[0] !== 2)
      throw new e("Invalid signature integer tag");
    const n = t[1], r = t.subarray(2, n + 2);
    if (!n || r.length !== n)
      throw new e("Invalid signature integer: wrong length");
    if (r[0] & 128)
      throw new e("Invalid signature integer: negative");
    if (r[0] === 0 && !(r[1] & 128))
      throw new e("Invalid signature integer: unnecessary leading zero");
    return { d: Sw(r), l: t.subarray(n + 2) };
  },
  toSig(t) {
    const { Err: e } = dr, n = typeof t == "string" ? _w(t) : t;
    ks(n);
    let r = n.length;
    if (r < 2 || n[0] != 48)
      throw new e("Invalid signature tag");
    if (n[1] !== r - 2)
      throw new e("Invalid signature: incorrect length");
    const { d: i, l: s } = dr._parseInt(n.subarray(2)), { d: o, l: a } = dr._parseInt(s);
    if (a.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: i, s: o };
  },
  hexFromSig(t) {
    const e = (u) => Number.parseInt(u[0], 16) & 8 ? "00" + u : u, n = (u) => {
      const f = u.toString(16);
      return f.length & 1 ? `0${f}` : f;
    }, r = e(n(t.s)), i = e(n(t.r)), s = r.length / 2, o = i.length / 2, a = n(s), c = n(o);
    return `30${n(o + s + 4)}02${c}${i}02${a}${r}`;
  }
}, bn = BigInt(0), _t = BigInt(1);
BigInt(2);
const Kl = BigInt(3);
BigInt(4);
function Aw(t) {
  const e = vw(t), { Fp: n } = e, r = e.toBytes || ((w, h, g) => {
    const b = h.toAffine();
    return ds(Uint8Array.from([4]), n.toBytes(b.x), n.toBytes(b.y));
  }), i = e.fromBytes || ((w) => {
    const h = w.subarray(1), g = n.fromBytes(h.subarray(0, n.BYTES)), b = n.fromBytes(h.subarray(n.BYTES, 2 * n.BYTES));
    return { x: g, y: b };
  });
  function s(w) {
    const { a: h, b: g } = e, b = n.sqr(w), E = n.mul(b, w);
    return n.add(n.add(E, n.mul(w, h)), g);
  }
  if (!n.eql(n.sqr(e.Gy), s(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(w) {
    return typeof w == "bigint" && bn < w && w < e.n;
  }
  function a(w) {
    if (!o(w))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(w) {
    const { allowedPrivateKeyLengths: h, nByteLength: g, wrapPrivateKey: b, n: E } = e;
    if (h && typeof w != "bigint") {
      if (Ar(w) && (w = mi(w)), typeof w != "string" || !h.includes(w.length))
        throw new Error("Invalid key");
      w = w.padStart(g * 2, "0");
    }
    let S;
    try {
      S = typeof w == "bigint" ? w : yr($t("private key", w, g));
    } catch {
      throw new Error(`private key must be ${g} bytes, hex or bigint, not ${typeof w}`);
    }
    return b && (S = st(S, E)), a(S), S;
  }
  const u = /* @__PURE__ */ new Map();
  function f(w) {
    if (!(w instanceof l))
      throw new Error("ProjectivePoint expected");
  }
  class l {
    constructor(h, g, b) {
      if (this.px = h, this.py = g, this.pz = b, h == null || !n.isValid(h))
        throw new Error("x required");
      if (g == null || !n.isValid(g))
        throw new Error("y required");
      if (b == null || !n.isValid(b))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(h) {
      const { x: g, y: b } = h || {};
      if (!h || !n.isValid(g) || !n.isValid(b))
        throw new Error("invalid affine point");
      if (h instanceof l)
        throw new Error("projective point not allowed");
      const E = (S) => n.eql(S, n.ZERO);
      return E(g) && E(b) ? l.ZERO : new l(g, b, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(h) {
      const g = n.invertBatch(h.map((b) => b.pz));
      return h.map((b, E) => b.toAffine(g[E])).map(l.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(h) {
      const g = l.fromAffine(i($t("pointHex", h)));
      return g.assertValidity(), g;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(h) {
      return l.BASE.multiply(c(h));
    }
    // "Private method", don't use it directly
    _setWindowSize(h) {
      this._WINDOW_SIZE = h, u.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !n.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: h, y: g } = this.toAffine();
      if (!n.isValid(h) || !n.isValid(g))
        throw new Error("bad point: x or y not FE");
      const b = n.sqr(g), E = s(h);
      if (!n.eql(b, E))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: h } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(h);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(h) {
      f(h);
      const { px: g, py: b, pz: E } = this, { px: S, py: N, pz: O } = h, C = n.eql(n.mul(g, O), n.mul(S, E)), L = n.eql(n.mul(b, O), n.mul(N, E));
      return C && L;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new l(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: h, b: g } = e, b = n.mul(g, Kl), { px: E, py: S, pz: N } = this;
      let O = n.ZERO, C = n.ZERO, L = n.ZERO, p = n.mul(E, E), x = n.mul(S, S), _ = n.mul(N, N), P = n.mul(E, S);
      return P = n.add(P, P), L = n.mul(E, N), L = n.add(L, L), O = n.mul(h, L), C = n.mul(b, _), C = n.add(O, C), O = n.sub(x, C), C = n.add(x, C), C = n.mul(O, C), O = n.mul(P, O), L = n.mul(b, L), _ = n.mul(h, _), P = n.sub(p, _), P = n.mul(h, P), P = n.add(P, L), L = n.add(p, p), p = n.add(L, p), p = n.add(p, _), p = n.mul(p, P), C = n.add(C, p), _ = n.mul(S, N), _ = n.add(_, _), p = n.mul(_, P), O = n.sub(O, p), L = n.mul(_, x), L = n.add(L, L), L = n.add(L, L), new l(O, C, L);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(h) {
      f(h);
      const { px: g, py: b, pz: E } = this, { px: S, py: N, pz: O } = h;
      let C = n.ZERO, L = n.ZERO, p = n.ZERO;
      const x = e.a, _ = n.mul(e.b, Kl);
      let P = n.mul(g, S), I = n.mul(b, N), A = n.mul(E, O), R = n.add(g, b), m = n.add(S, N);
      R = n.mul(R, m), m = n.add(P, I), R = n.sub(R, m), m = n.add(g, E);
      let v = n.add(S, O);
      return m = n.mul(m, v), v = n.add(P, A), m = n.sub(m, v), v = n.add(b, E), C = n.add(N, O), v = n.mul(v, C), C = n.add(I, A), v = n.sub(v, C), p = n.mul(x, m), C = n.mul(_, A), p = n.add(C, p), C = n.sub(I, p), p = n.add(I, p), L = n.mul(C, p), I = n.add(P, P), I = n.add(I, P), A = n.mul(x, A), m = n.mul(_, m), I = n.add(I, A), A = n.sub(P, A), A = n.mul(x, A), m = n.add(m, A), P = n.mul(I, m), L = n.add(L, P), P = n.mul(v, m), C = n.mul(R, C), C = n.sub(C, P), P = n.mul(R, I), p = n.mul(v, p), p = n.add(p, P), new l(C, L, p);
    }
    subtract(h) {
      return this.add(h.negate());
    }
    is0() {
      return this.equals(l.ZERO);
    }
    wNAF(h) {
      return y.wNAFCached(this, u, h, (g) => {
        const b = n.invertBatch(g.map((E) => E.pz));
        return g.map((E, S) => E.toAffine(b[S])).map(l.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(h) {
      const g = l.ZERO;
      if (h === bn)
        return g;
      if (a(h), h === _t)
        return this;
      const { endo: b } = e;
      if (!b)
        return y.unsafeLadder(this, h);
      let { k1neg: E, k1: S, k2neg: N, k2: O } = b.splitScalar(h), C = g, L = g, p = this;
      for (; S > bn || O > bn; )
        S & _t && (C = C.add(p)), O & _t && (L = L.add(p)), p = p.double(), S >>= _t, O >>= _t;
      return E && (C = C.negate()), N && (L = L.negate()), L = new l(n.mul(L.px, b.beta), L.py, L.pz), C.add(L);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(h) {
      a(h);
      let g = h, b, E;
      const { endo: S } = e;
      if (S) {
        const { k1neg: N, k1: O, k2neg: C, k2: L } = S.splitScalar(g);
        let { p, f: x } = this.wNAF(O), { p: _, f: P } = this.wNAF(L);
        p = y.constTimeNegate(N, p), _ = y.constTimeNegate(C, _), _ = new l(n.mul(_.px, S.beta), _.py, _.pz), b = p.add(_), E = x.add(P);
      } else {
        const { p: N, f: O } = this.wNAF(g);
        b = N, E = O;
      }
      return l.normalizeZ([b, E])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(h, g, b) {
      const E = l.BASE, S = (O, C) => C === bn || C === _t || !O.equals(E) ? O.multiplyUnsafe(C) : O.multiply(C), N = S(this, g).add(S(h, b));
      return N.is0() ? void 0 : N;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(h) {
      const { px: g, py: b, pz: E } = this, S = this.is0();
      h == null && (h = S ? n.ONE : n.inv(E));
      const N = n.mul(g, h), O = n.mul(b, h), C = n.mul(E, h);
      if (S)
        return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(C, n.ONE))
        throw new Error("invZ was invalid");
      return { x: N, y: O };
    }
    isTorsionFree() {
      const { h, isTorsionFree: g } = e;
      if (h === _t)
        return !0;
      if (g)
        return g(l, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h, clearCofactor: g } = e;
      return h === _t ? this : g ? g(l, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(h = !0) {
      return this.assertValidity(), r(l, this, h);
    }
    toHex(h = !0) {
      return mi(this.toRawBytes(h));
    }
  }
  l.BASE = new l(e.Gx, e.Gy, n.ONE), l.ZERO = new l(n.ZERO, n.ONE, n.ZERO);
  const d = e.nBitLength, y = xw(l, e.endo ? Math.ceil(d / 2) : d);
  return {
    CURVE: e,
    ProjectivePoint: l,
    normPrivateKeyToScalar: c,
    weierstrassEquation: s,
    isWithinCurveOrder: o
  };
}
function Iw(t) {
  const e = H0(t);
  return Ls(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function Pw(t) {
  const e = Iw(t), { Fp: n, n: r } = e, i = n.BYTES + 1, s = 2 * n.BYTES + 1;
  function o(m) {
    return bn < m && m < n.ORDER;
  }
  function a(m) {
    return st(m, r);
  }
  function c(m) {
    return Zc(m, r);
  }
  const { ProjectivePoint: u, normPrivateKeyToScalar: f, weierstrassEquation: l, isWithinCurveOrder: d } = Aw({
    ...e,
    toBytes(m, v, B) {
      const $ = v.toAffine(), M = n.toBytes($.x), D = ds;
      return B ? D(Uint8Array.from([v.hasEvenY() ? 2 : 3]), M) : D(Uint8Array.from([4]), M, n.toBytes($.y));
    },
    fromBytes(m) {
      const v = m.length, B = m[0], $ = m.subarray(1);
      if (v === i && (B === 2 || B === 3)) {
        const M = yr($);
        if (!o(M))
          throw new Error("Point is not on curve");
        const D = l(M);
        let H;
        try {
          H = n.sqrt(D);
        } catch (Z) {
          const Y = Z instanceof Error ? ": " + Z.message : "";
          throw new Error("Point is not on curve" + Y);
        }
        const V = (H & _t) === _t;
        return (B & 1) === 1 !== V && (H = n.neg(H)), { x: M, y: H };
      } else if (v === s && B === 4) {
        const M = n.fromBytes($.subarray(0, n.BYTES)), D = n.fromBytes($.subarray(n.BYTES, 2 * n.BYTES));
        return { x: M, y: D };
      } else
        throw new Error(`Point of length ${v} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`);
    }
  }), y = (m) => mi(Ei(m, e.nByteLength));
  function w(m) {
    const v = r >> _t;
    return m > v;
  }
  function h(m) {
    return w(m) ? a(-m) : m;
  }
  const g = (m, v, B) => yr(m.slice(v, B));
  class b {
    constructor(v, B, $) {
      this.r = v, this.s = B, this.recovery = $, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(v) {
      const B = e.nByteLength;
      return v = $t("compactSignature", v, B * 2), new b(g(v, 0, B), g(v, B, 2 * B));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(v) {
      const { r: B, s: $ } = dr.toSig($t("DER", v));
      return new b(B, $);
    }
    assertValidity() {
      if (!d(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!d(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(v) {
      return new b(this.r, this.s, v);
    }
    recoverPublicKey(v) {
      const { r: B, s: $, recovery: M } = this, D = L($t("msgHash", v));
      if (M == null || ![0, 1, 2, 3].includes(M))
        throw new Error("recovery id invalid");
      const H = M === 2 || M === 3 ? B + e.n : B;
      if (H >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const V = M & 1 ? "03" : "02", q = u.fromHex(V + y(H)), Z = c(H), Y = a(-D * Z), ee = a($ * Z), ie = u.BASE.multiplyAndAddUnsafe(q, Y, ee);
      if (!ie)
        throw new Error("point at infinify");
      return ie.assertValidity(), ie;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return w(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new b(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return wi(this.toDERHex());
    }
    toDERHex() {
      return dr.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return wi(this.toCompactHex());
    }
    toCompactHex() {
      return y(this.r) + y(this.s);
    }
  }
  const E = {
    isValidPrivateKey(m) {
      try {
        return f(m), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: f,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const m = j0(e.n);
      return ww(e.randomBytes(m), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(m = 8, v = u.BASE) {
      return v._setWindowSize(m), v.multiply(BigInt(3)), v;
    }
  };
  function S(m, v = !0) {
    return u.fromPrivateKey(m).toRawBytes(v);
  }
  function N(m) {
    const v = Ar(m), B = typeof m == "string", $ = (v || B) && m.length;
    return v ? $ === i || $ === s : B ? $ === 2 * i || $ === 2 * s : m instanceof u;
  }
  function O(m, v, B = !0) {
    if (N(m))
      throw new Error("first arg must be private key");
    if (!N(v))
      throw new Error("second arg must be public key");
    return u.fromHex(v).multiply(f(m)).toRawBytes(B);
  }
  const C = e.bits2int || function(m) {
    const v = yr(m), B = m.length * 8 - e.nBitLength;
    return B > 0 ? v >> BigInt(B) : v;
  }, L = e.bits2int_modN || function(m) {
    return a(C(m));
  }, p = uf(e.nBitLength);
  function x(m) {
    if (typeof m != "bigint")
      throw new Error("bigint expected");
    if (!(bn <= m && m < p))
      throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return Ei(m, e.nByteLength);
  }
  function _(m, v, B = P) {
    if (["recovered", "canonical"].some((ge) => ge in B))
      throw new Error("sign() legacy options not supported");
    const { hash: $, randomBytes: M } = e;
    let { lowS: D, prehash: H, extraEntropy: V } = B;
    D == null && (D = !0), m = $t("msgHash", m), H && (m = $t("prehashed msgHash", $(m)));
    const q = L(m), Z = f(v), Y = [x(Z), x(q)];
    if (V != null && V !== !1) {
      const ge = V === !0 ? M(n.BYTES) : V;
      Y.push($t("extraEntropy", ge));
    }
    const ee = ds(...Y), ie = q;
    function be(ge) {
      const Ie = C(ge);
      if (!d(Ie))
        return;
      const ye = c(Ie), de = u.BASE.multiply(Ie).toAffine(), F = a(de.x);
      if (F === bn)
        return;
      const U = a(ye * a(ie + F * Z));
      if (U === bn)
        return;
      let j = (de.x === F ? 0 : 2) | Number(de.y & _t), J = U;
      return D && w(U) && (J = h(U), j ^= 1), new b(F, J, j);
    }
    return { seed: ee, k2sig: be };
  }
  const P = { lowS: e.lowS, prehash: !1 }, I = { lowS: e.lowS, prehash: !1 };
  function A(m, v, B = P) {
    const { seed: $, k2sig: M } = _(m, v, B), D = e;
    return F0(D.hash.outputLen, D.nByteLength, D.hmac)($, M);
  }
  u.BASE._setWindowSize(8);
  function R(m, v, B, $ = I) {
    var de;
    const M = m;
    if (v = $t("msgHash", v), B = $t("publicKey", B), "strict" in $)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: D, prehash: H } = $;
    let V, q;
    try {
      if (typeof M == "string" || Ar(M))
        try {
          V = b.fromDER(M);
        } catch (F) {
          if (!(F instanceof dr.Err))
            throw F;
          V = b.fromCompact(M);
        }
      else if (typeof M == "object" && typeof M.r == "bigint" && typeof M.s == "bigint") {
        const { r: F, s: U } = M;
        V = new b(F, U);
      } else
        throw new Error("PARSE");
      q = u.fromHex(B);
    } catch (F) {
      if (F.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (D && V.hasHighS())
      return !1;
    H && (v = e.hash(v));
    const { r: Z, s: Y } = V, ee = L(v), ie = c(Y), be = a(ee * ie), ge = a(Z * ie), Ie = (de = u.BASE.multiplyAndAddUnsafe(q, be, ge)) == null ? void 0 : de.toAffine();
    return Ie ? a(Ie.x) === Z : !1;
  }
  return {
    CURVE: e,
    getPublicKey: S,
    getSharedSecret: O,
    sign: A,
    verify: R,
    ProjectivePoint: u,
    Signature: b,
    utils: E
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Bw(t) {
  return {
    hash: t,
    hmac: (e, ...n) => k0(t, e, Um(...n)),
    randomBytes: Dm
  };
}
function Tw(t, e) {
  const n = (r) => Pw({ ...t, ...Bw(r) });
  return Object.freeze({ ...n(e), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const G0 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Zl = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), $w = BigInt(1), Yc = BigInt(2), Yl = (t, e) => (t + e / Yc) / e;
function Nw(t) {
  const e = G0, n = BigInt(3), r = BigInt(6), i = BigInt(11), s = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), u = t * t * t % e, f = u * u * t % e, l = yt(f, n, e) * f % e, d = yt(l, n, e) * f % e, y = yt(d, Yc, e) * u % e, w = yt(y, i, e) * y % e, h = yt(w, s, e) * w % e, g = yt(h, a, e) * h % e, b = yt(g, c, e) * g % e, E = yt(b, a, e) * h % e, S = yt(E, n, e) * f % e, N = yt(S, o, e) * w % e, O = yt(N, r, e) * u % e, C = yt(O, Yc, e);
  if (!Jc.eql(Jc.sqr(C), t))
    throw new Error("Cannot find square root");
  return C;
}
const Jc = mw(G0, void 0, void 0, { sqrt: Nw }), ea = Tw({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: Jc,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: Zl,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (t) => {
      const e = Zl, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -$w * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s = n, o = BigInt("0x100000000000000000000000000000000"), a = Yl(s * t, e), c = Yl(-r * t, e);
      let u = st(t - a * n - c * i, e), f = st(-a * r - c * s, e);
      const l = u > o, d = f > o;
      if (l && (u = e - u), d && (f = e - f), u > o || f > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + t);
      return { k1neg: l, k1: u, k2neg: d, k2: f };
    }
  }
}, Wm);
BigInt(0);
ea.ProjectivePoint;
var Jl = Object.prototype.toString, q0 = function(e) {
  var n = Jl.call(e), r = n === "[object Arguments]";
  return r || (r = n !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Jl.call(e.callee) === "[object Function]"), r;
}, Ja, Xl;
function Rw() {
  if (Xl) return Ja;
  Xl = 1;
  var t;
  if (!Object.keys) {
    var e = Object.prototype.hasOwnProperty, n = Object.prototype.toString, r = q0, i = Object.prototype.propertyIsEnumerable, s = !i.call({ toString: null }, "toString"), o = i.call(function() {
    }, "prototype"), a = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], c = function(d) {
      var y = d.constructor;
      return y && y.prototype === d;
    }, u = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, f = function() {
      if (typeof window > "u")
        return !1;
      for (var d in window)
        try {
          if (!u["$" + d] && e.call(window, d) && window[d] !== null && typeof window[d] == "object")
            try {
              c(window[d]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), l = function(d) {
      if (typeof window > "u" || !f)
        return c(d);
      try {
        return c(d);
      } catch {
        return !1;
      }
    };
    t = function(y) {
      var w = y !== null && typeof y == "object", h = n.call(y) === "[object Function]", g = r(y), b = w && n.call(y) === "[object String]", E = [];
      if (!w && !h && !g)
        throw new TypeError("Object.keys called on a non-object");
      var S = o && h;
      if (b && y.length > 0 && !e.call(y, 0))
        for (var N = 0; N < y.length; ++N)
          E.push(String(N));
      if (g && y.length > 0)
        for (var O = 0; O < y.length; ++O)
          E.push(String(O));
      else
        for (var C in y)
          !(S && C === "prototype") && e.call(y, C) && E.push(String(C));
      if (s)
        for (var L = l(y), p = 0; p < a.length; ++p)
          !(L && a[p] === "constructor") && e.call(y, a[p]) && E.push(a[p]);
      return E;
    };
  }
  return Ja = t, Ja;
}
var Ow = Array.prototype.slice, Cw = q0, Ql = Object.keys, To = Ql ? function(e) {
  return Ql(e);
} : Rw(), ed = Object.keys;
To.shim = function() {
  if (Object.keys) {
    var e = function() {
      var n = Object.keys(arguments);
      return n && n.length === arguments.length;
    }(1, 2);
    e || (Object.keys = function(r) {
      return Cw(r) ? ed(Ow.call(r)) : ed(r);
    });
  } else
    Object.keys = To;
  return Object.keys || To;
};
var kw = To, Lw = function(e) {
  return Mw(e) && !Fw(e);
};
function Mw(t) {
  return !!t && typeof t == "object";
}
function Fw(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || jw(t);
}
var Uw = typeof Symbol == "function" && Symbol.for, Dw = Uw ? Symbol.for("react.element") : 60103;
function jw(t) {
  return t.$$typeof === Dw;
}
function Hw(t) {
  return Array.isArray(t) ? [] : {};
}
function hs(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? xi(Hw(t), t, e) : t;
}
function Gw(t, e, n) {
  return t.concat(e).map(function(r) {
    return hs(r, n);
  });
}
function qw(t, e) {
  if (!e.customMerge)
    return xi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : xi;
}
function zw(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function td(t) {
  return Object.keys(t).concat(zw(t));
}
function z0(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Vw(t, e) {
  return z0(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Ww(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && td(t).forEach(function(i) {
    r[i] = hs(t[i], n);
  }), td(e).forEach(function(i) {
    Vw(t, i) || (z0(t, i) && n.isMergeableObject(e[i]) ? r[i] = qw(i, n)(t[i], e[i], n) : r[i] = hs(e[i], n));
  }), r;
}
function xi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Gw, n.isMergeableObject = n.isMergeableObject || Lw, n.cloneUnlessOtherwiseSpecified = hs;
  var r = Array.isArray(e), i = Array.isArray(t), s = r === i;
  return s ? r ? n.arrayMerge(t, e, n) : Ww(t, e, n) : hs(e, n);
}
xi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return xi(r, i, n);
  }, {});
};
var Kw = xi, Zw = Kw;
const Yw = /* @__PURE__ */ tf(Zw), Xc = nf.getLogger("http-helpers");
Xc.setLevel(N0.levels.INFO);
let Jw = "torus-default";
const Xw = "x-api-key";
async function Qw(t, e) {
  let n = null;
  try {
    n = new URL(t);
  } catch {
  }
  return fetch(t, e);
}
function e1() {
  const t = {};
  return t[Xw] = Jw, t;
}
function t1(t) {
  Xc.info(`Response: ${t.status} ${t.statusText}`), Xc.info(`Url: ${t.url}`);
}
const V0 = async (t, e = {}, n = {}) => {
  const r = {
    mode: "cors",
    headers: {}
  };
  n.useAPIKey && (r.headers = le(le({}, r.headers), e1())), e.method = "GET";
  const i = Yw(r, e), s = await Qw(t, i);
  if (s.ok) {
    const o = s.headers.get("content-type");
    return o != null && o.includes("application/json") ? s.json() : s.text();
  }
  throw t1(s), s;
};
var co = {}, Xa, nd;
function n1() {
  if (nd) return Xa;
  nd = 1;
  var t, e, n = {
    '"': '"',
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: `
`,
    r: "\r",
    t: "	"
  }, r;
  function i(y) {
    throw {
      name: "SyntaxError",
      message: y,
      at: t,
      text: r
    };
  }
  function s(y) {
    return y && y !== e && i("Expected '" + y + "' instead of '" + e + "'"), e = r.charAt(t), t += 1, e;
  }
  function o() {
    var y, w = "";
    for (e === "-" && (w = "-", s("-")); e >= "0" && e <= "9"; )
      w += e, s();
    if (e === ".")
      for (w += "."; s() && e >= "0" && e <= "9"; )
        w += e;
    if (e === "e" || e === "E")
      for (w += e, s(), (e === "-" || e === "+") && (w += e, s()); e >= "0" && e <= "9"; )
        w += e, s();
    return y = Number(w), isFinite(y) || i("Bad number"), y;
  }
  function a() {
    var y, w, h = "", g;
    if (e === '"')
      for (; s(); ) {
        if (e === '"')
          return s(), h;
        if (e === "\\")
          if (s(), e === "u") {
            for (g = 0, w = 0; w < 4 && (y = parseInt(s(), 16), !!isFinite(y)); w += 1)
              g = g * 16 + y;
            h += String.fromCharCode(g);
          } else if (typeof n[e] == "string")
            h += n[e];
          else
            break;
        else
          h += e;
      }
    i("Bad string");
  }
  function c() {
    for (; e && e <= " "; )
      s();
  }
  function u() {
    switch (e) {
      case "t":
        return s("t"), s("r"), s("u"), s("e"), !0;
      case "f":
        return s("f"), s("a"), s("l"), s("s"), s("e"), !1;
      case "n":
        return s("n"), s("u"), s("l"), s("l"), null;
      default:
        i("Unexpected '" + e + "'");
    }
  }
  function f() {
    var y = [];
    if (e === "[") {
      if (s("["), c(), e === "]")
        return s("]"), y;
      for (; e; ) {
        if (y.push(d()), c(), e === "]")
          return s("]"), y;
        s(","), c();
      }
    }
    i("Bad array");
  }
  function l() {
    var y, w = {};
    if (e === "{") {
      if (s("{"), c(), e === "}")
        return s("}"), w;
      for (; e; ) {
        if (y = a(), c(), s(":"), Object.prototype.hasOwnProperty.call(w, y) && i('Duplicate key "' + y + '"'), w[y] = d(), c(), e === "}")
          return s("}"), w;
        s(","), c();
      }
    }
    i("Bad object");
  }
  function d() {
    switch (c(), e) {
      case "{":
        return l();
      case "[":
        return f();
      case '"':
        return a();
      case "-":
        return o();
      default:
        return e >= "0" && e <= "9" ? o() : u();
    }
  }
  return Xa = function(y, w) {
    var h;
    return r = y, t = 0, e = " ", h = d(), c(), e && i("Syntax error"), typeof w == "function" ? function g(b, E) {
      var S, N, O = b[E];
      if (O && typeof O == "object")
        for (S in d)
          Object.prototype.hasOwnProperty.call(O, S) && (N = g(O, S), typeof N > "u" ? delete O[S] : O[S] = N);
      return w.call(b, E, O);
    }({ "": h }, "") : h;
  }, Xa;
}
var Qa, rd;
function r1() {
  if (rd) return Qa;
  rd = 1;
  var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, n, r = {
    // table of character substitutions
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  }, i;
  function s(a) {
    return t.lastIndex = 0, t.test(a) ? '"' + a.replace(t, function(c) {
      var u = r[c];
      return typeof u == "string" ? u : "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + a + '"';
  }
  function o(a, c) {
    var u, f, l, d, y = e, w, h = c[a];
    switch (h && typeof h == "object" && typeof h.toJSON == "function" && (h = h.toJSON(a)), typeof i == "function" && (h = i.call(c, a, h)), typeof h) {
      case "string":
        return s(h);
      case "number":
        return isFinite(h) ? String(h) : "null";
      case "boolean":
      case "null":
        return String(h);
      case "object":
        if (!h)
          return "null";
        if (e += n, w = [], Object.prototype.toString.apply(h) === "[object Array]") {
          for (d = h.length, u = 0; u < d; u += 1)
            w[u] = o(u, h) || "null";
          return l = w.length === 0 ? "[]" : e ? `[
` + e + w.join(`,
` + e) + `
` + y + "]" : "[" + w.join(",") + "]", e = y, l;
        }
        if (i && typeof i == "object")
          for (d = i.length, u = 0; u < d; u += 1)
            f = i[u], typeof f == "string" && (l = o(f, h), l && w.push(s(f) + (e ? ": " : ":") + l));
        else
          for (f in h)
            Object.prototype.hasOwnProperty.call(h, f) && (l = o(f, h), l && w.push(s(f) + (e ? ": " : ":") + l));
        return l = w.length === 0 ? "{}" : e ? `{
` + e + w.join(`,
` + e) + `
` + y + "}" : "{" + w.join(",") + "}", e = y, l;
    }
  }
  return Qa = function(a, c, u) {
    var f;
    if (e = "", n = "", typeof u == "number")
      for (f = 0; f < u; f += 1)
        n += " ";
    else typeof u == "string" && (n = u);
    if (i = c, c && typeof c != "function" && (typeof c != "object" || typeof c.length != "number"))
      throw new Error("JSON.stringify");
    return o("", { "": a });
  }, Qa;
}
var id;
function i1() {
  return id || (id = 1, co.parse = n1(), co.stringify = r1()), co;
}
var s1 = {}.toString, o1 = Array.isArray || function(t) {
  return s1.call(t) == "[object Array]";
}, uo = (typeof JSON < "u" ? JSON : i1()).stringify, a1 = o1, c1 = kw, u1 = mm, W0 = bm, sd = W0("Array.prototype.join"), ec = W0("Array.prototype.push"), od = function(e, n) {
  for (var r = "", i = 0; i < e; i += 1)
    r += n;
  return r;
}, f1 = function(t, e, n) {
  return n;
}, l1 = function(e) {
  var n = arguments.length > 1 ? arguments[1] : void 0, r = n && n.space || "";
  typeof r == "number" && (r = od(r, " "));
  var i = !!n && typeof n.cycles == "boolean" && n.cycles, s = n && n.replacer ? u1(n.replacer) : f1, o = typeof n == "function" ? n : n && n.cmp, a = o && function(u) {
    var f = o.length > 2 && function(d) {
      return u[d];
    };
    return function(l, d) {
      return o(
        { key: l, value: u[l] },
        { key: d, value: u[d] },
        f ? { __proto__: null, get: f } : void 0
      );
    };
  }, c = [];
  return function u(f, l, d, y) {
    var w = r ? `
` + od(y, r) : "", h = r ? ": " : ":";
    if (d && d.toJSON && typeof d.toJSON == "function" && (d = d.toJSON()), d = s(f, l, d), d !== void 0) {
      if (typeof d != "object" || d === null)
        return uo(d);
      if (a1(d)) {
        for (var S = [], g = 0; g < d.length; g++) {
          var b = u(d, g, d[g], y + 1) || uo(null);
          ec(S, w + r + b);
        }
        return "[" + sd(S, ",") + w + "]";
      }
      if (c.indexOf(d) !== -1) {
        if (i)
          return uo("__cycle__");
        throw new TypeError("Converting circular structure to JSON");
      } else
        ec(c, d);
      for (var E = c1(d).sort(a && a(d)), S = [], g = 0; g < E.length; g++) {
        var l = E[g], N = u(d, l, d[l], y + 1);
        if (N) {
          var O = uo(l) + h + N;
          ec(S, w + r + O);
        }
      }
      return c.splice(c.indexOf(d), 1), "{" + sd(S, ",") + w + "}";
    }
  }({ "": e }, "", e, 0);
};
const K0 = /* @__PURE__ */ tf(l1), Z0 = [], Y0 = [], J0 = [], d1 = /* @__PURE__ */ BigInt(0), Zi = /* @__PURE__ */ BigInt(1), h1 = /* @__PURE__ */ BigInt(2), p1 = /* @__PURE__ */ BigInt(7), g1 = /* @__PURE__ */ BigInt(256), y1 = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = Zi, n = 1, r = 0; t < 24; t++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Z0.push(2 * (5 * r + n)), Y0.push((t + 1) * (t + 2) / 2 % 64);
  let i = d1;
  for (let s = 0; s < 7; s++)
    e = (e << Zi ^ (e >> p1) * y1) % g1, e & h1 && (i ^= Zi << (Zi << /* @__PURE__ */ BigInt(s)) - Zi);
  J0.push(i);
}
const [b1, m1] = /* @__PURE__ */ Zm(J0, !0), ad = (t, e, n) => n > 32 ? Xm(t, e, n) : Ym(t, e, n), cd = (t, e, n) => n > 32 ? Qm(t, e, n) : Jm(t, e, n);
function w1(t, e = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, u = n[c], f = n[c + 1], l = ad(u, f, 1) ^ n[a], d = cd(u, f, 1) ^ n[a + 1];
      for (let y = 0; y < 50; y += 10)
        t[o + y] ^= l, t[o + y + 1] ^= d;
    }
    let i = t[2], s = t[3];
    for (let o = 0; o < 24; o++) {
      const a = Y0[o], c = ad(i, s, a), u = cd(i, s, a), f = Z0[o];
      i = t[f], s = t[f + 1], t[f] = c, t[f + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        n[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    t[0] ^= b1[r], t[1] ^= m1[r];
  }
  n.fill(0);
}
let E1 = class X0 extends sf {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, n, r, i = !1, s = 24) {
    if (super(), this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, ls(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = Lm(this.state);
  }
  keccak() {
    jl || Hl(this.state32), w1(this.state32, this.rounds), jl || Hl(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    _r(this);
    const { blockLen: n, state: r } = this;
    e = Xo(e);
    const i = e.length;
    for (let s = 0; s < i; ) {
      const o = Math.min(n - this.pos, i - s);
      for (let a = 0; a < o; a++)
        r[this.pos++] ^= e[s++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: n, pos: r, blockLen: i } = this;
    e[r] ^= n, n & 128 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    _r(this, !1), Mi(e), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let i = 0, s = e.length; i < s; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, s - i);
      e.set(n.subarray(this.posOut, this.posOut + o), i), this.posOut += o, i += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return ls(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (rf(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: n, suffix: r, outputLen: i, rounds: s, enableXOF: o } = this;
    return e || (e = new X0(n, r, i, o, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r, e.outputLen = i, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
};
const x1 = (t, e, n) => O0(() => new E1(e, t, n)), ud = /* @__PURE__ */ x1(1, 136, 256 / 8);
function v1(t) {
  return (e) => (km.bytes(e), t(e));
}
(() => {
  const t = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0, e = typeof module < "u" && typeof module.require == "function" && module.require.bind(module);
  return {
    node: e && !t ? e("crypto") : void 0,
    web: t
  };
})();
const S1 = (() => {
  const t = v1(ud);
  return t.create = ud.create, t;
})(), Jt = /* @__PURE__ */ Object.create(null);
Jt.open = "0";
Jt.close = "1";
Jt.ping = "2";
Jt.pong = "3";
Jt.message = "4";
Jt.upgrade = "5";
Jt.noop = "6";
const $o = /* @__PURE__ */ Object.create(null);
Object.keys(Jt).forEach((t) => {
  $o[Jt[t]] = t;
});
const Qc = { type: "error", data: "parser error" }, Q0 = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", ep = typeof ArrayBuffer == "function", tp = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, ff = ({ type: t, data: e }, n, r) => Q0 && e instanceof Blob ? n ? r(e) : fd(e, r) : ep && (e instanceof ArrayBuffer || tp(e)) ? n ? r(e) : fd(new Blob([e]), r) : r(Jt[t] + (e || "")), fd = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const r = n.result.split(",")[1];
    e("b" + (r || ""));
  }, n.readAsDataURL(t);
};
function ld(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let tc;
function _1(t, e) {
  if (Q0 && t.data instanceof Blob)
    return t.data.arrayBuffer().then(ld).then(e);
  if (ep && (t.data instanceof ArrayBuffer || tp(t.data)))
    return e(ld(t.data));
  ff(t, !1, (n) => {
    tc || (tc = new TextEncoder()), e(tc.encode(n));
  });
}
const dd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ss = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < dd.length; t++)
  ss[dd.charCodeAt(t)] = t;
const A1 = (t) => {
  let e = t.length * 0.75, n = t.length, r, i = 0, s, o, a, c;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), f = new Uint8Array(u);
  for (r = 0; r < n; r += 4)
    s = ss[t.charCodeAt(r)], o = ss[t.charCodeAt(r + 1)], a = ss[t.charCodeAt(r + 2)], c = ss[t.charCodeAt(r + 3)], f[i++] = s << 2 | o >> 4, f[i++] = (o & 15) << 4 | a >> 2, f[i++] = (a & 3) << 6 | c & 63;
  return u;
}, I1 = typeof ArrayBuffer == "function", lf = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: np(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: P1(t.substring(1), e)
  } : $o[n] ? t.length > 1 ? {
    type: $o[n],
    data: t.substring(1)
  } : {
    type: $o[n]
  } : Qc;
}, P1 = (t, e) => {
  if (I1) {
    const n = A1(t);
    return np(n, e);
  } else
    return { base64: !0, data: t };
}, np = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, rp = "", B1 = (t, e) => {
  const n = t.length, r = new Array(n);
  let i = 0;
  t.forEach((s, o) => {
    ff(s, !1, (a) => {
      r[o] = a, ++i === n && e(r.join(rp));
    });
  });
}, T1 = (t, e) => {
  const n = t.split(rp), r = [];
  for (let i = 0; i < n.length; i++) {
    const s = lf(n[i], e);
    if (r.push(s), s.type === "error")
      break;
  }
  return r;
};
function $1() {
  return new TransformStream({
    transform(t, e) {
      _1(t, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const s = new DataView(i.buffer);
          s.setUint8(0, 126), s.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const s = new DataView(i.buffer);
          s.setUint8(0, 127), s.setBigUint64(1, BigInt(r));
        }
        t.data && typeof t.data != "string" && (i[0] |= 128), e.enqueue(i), e.enqueue(n);
      });
    }
  });
}
let nc;
function fo(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function lo(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let r = 0;
  for (let i = 0; i < e; i++)
    n[i] = t[0][r++], r === t[0].length && (t.shift(), r = 0);
  return t.length && r < t[0].length && (t[0] = t[0].slice(r)), n;
}
function N1(t, e) {
  nc || (nc = new TextDecoder());
  const n = [];
  let r = 0, i = -1, s = !1;
  return new TransformStream({
    transform(o, a) {
      for (n.push(o); ; ) {
        if (r === 0) {
          if (fo(n) < 1)
            break;
          const c = lo(n, 1);
          s = (c[0] & 128) === 128, i = c[0] & 127, i < 126 ? r = 3 : i === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (fo(n) < 2)
            break;
          const c = lo(n, 2);
          i = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (fo(n) < 8)
            break;
          const c = lo(n, 8), u = new DataView(c.buffer, c.byteOffset, c.length), f = u.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            a.enqueue(Qc);
            break;
          }
          i = f * Math.pow(2, 32) + u.getUint32(4), r = 3;
        } else {
          if (fo(n) < i)
            break;
          const c = lo(n, i);
          a.enqueue(lf(s ? c : nc.decode(c), e)), r = 0;
        }
        if (i === 0 || i > t) {
          a.enqueue(Qc);
          break;
        }
      }
    }
  });
}
const ip = 4;
function Me(t) {
  if (t) return R1(t);
}
function R1(t) {
  for (var e in Me.prototype)
    t[e] = Me.prototype[e];
  return t;
}
Me.prototype.on = Me.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Me.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
Me.prototype.off = Me.prototype.removeListener = Me.prototype.removeAllListeners = Me.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + t];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var r, i = 0; i < n.length; i++)
    if (r = n[i], r === e || r.fn === e) {
      n.splice(i, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + t], this;
};
Me.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r)
      n[r].apply(this, e);
  }
  return this;
};
Me.prototype.emitReserved = Me.prototype.emit;
Me.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Me.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const ta = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), It = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), O1 = "arraybuffer";
function sp(t, ...e) {
  return e.reduce((n, r) => (t.hasOwnProperty(r) && (n[r] = t[r]), n), {});
}
const C1 = It.setTimeout, k1 = It.clearTimeout;
function na(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = C1.bind(It), t.clearTimeoutFn = k1.bind(It)) : (t.setTimeoutFn = It.setTimeout.bind(It), t.clearTimeoutFn = It.clearTimeout.bind(It));
}
const L1 = 1.33;
function M1(t) {
  return typeof t == "string" ? F1(t) : Math.ceil((t.byteLength || t.size) * L1);
}
function F1(t) {
  let e = 0, n = 0;
  for (let r = 0, i = t.length; r < i; r++)
    e = t.charCodeAt(r), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4);
  return n;
}
function op() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function U1(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function D1(t) {
  let e = {}, n = t.split("&");
  for (let r = 0, i = n.length; r < i; r++) {
    let s = n[r].split("=");
    e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
  }
  return e;
}
class j1 extends Error {
  constructor(e, n, r) {
    super(e), this.description = n, this.context = r, this.type = "TransportError";
  }
}
class df extends Me {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, na(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, n, r) {
    return super.emitReserved("error", new j1(e, n, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const n = lf(e, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, n = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const n = U1(e);
    return n.length ? "?" + n : "";
  }
}
class H1 extends df {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", e();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || n();
      })), this.writable || (r++, this.once("drain", function() {
        --r || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const n = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    T1(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, B1(e, (n) => {
      this.doWrite(n, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = op()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
}
let ap = !1;
try {
  ap = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const G1 = ap;
function q1() {
}
class z1 extends H1 {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), typeof location < "u") {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, n) {
    const r = this.request({
      method: "POST",
      data: e
    });
    r.on("success", n), r.on("error", (i, s) => {
      this.onError("xhr post error", i, s);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (n, r) => {
      this.onError("xhr poll error", n, r);
    }), this.pollXhr = e;
  }
}
let Jr = class No extends Me {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n, r) {
    super(), this.createRequest = e, na(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var e;
    const n = sp(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(n);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(i) && r.setRequestHeader(i, this._opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var i;
        r.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this._onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = No.requestsCount++, No.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(e) {
    this.emitReserved("error", e, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(e) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = q1, e)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete No.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const e = this._xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
Jr.requestsCount = 0;
Jr.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", hd);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in It ? "pagehide" : "unload";
    addEventListener(t, hd, !1);
  }
}
function hd() {
  for (let t in Jr.requests)
    Jr.requests.hasOwnProperty(t) && Jr.requests[t].abort();
}
const V1 = function() {
  const t = cp({
    xdomain: !1
  });
  return t && t.responseType !== null;
}();
class W1 extends z1 {
  constructor(e) {
    super(e);
    const n = e && e.forceBase64;
    this.supportsBinary = V1 && !n;
  }
  request(e = {}) {
    return Object.assign(e, { xd: this.xd }, this.opts), new Jr(cp, this.uri(), e);
  }
}
function cp(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || G1))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new It[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const up = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class K1 extends df {
  get name() {
    return "websocket";
  }
  doOpen() {
    const e = this.uri(), n = this.opts.protocols, r = up ? {} : sp(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(e, n, r);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = n === e.length - 1;
      ff(r, this.supportsBinary, (s) => {
        try {
          this.doWrite(r, s);
        } catch {
        }
        i && ta(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = op()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
}
const rc = It.WebSocket || It.MozWebSocket;
class Z1 extends K1 {
  createSocket(e, n, r) {
    return up ? new rc(e, n, r) : n ? new rc(e, n) : new rc(e);
  }
  doWrite(e, n) {
    this.ws.send(n);
  }
}
class Y1 extends df {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (e) {
      return this.emitReserved("error", e);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((e) => {
        const n = N1(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = e.readable.pipeThrough(n).getReader(), i = $1();
        i.readable.pipeTo(e.writable), this._writer = i.writable.getWriter();
        const s = () => {
          r.read().then(({ done: a, value: c }) => {
            a || (this.onPacket(c), s());
          }).catch((a) => {
          });
        };
        s();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = n === e.length - 1;
      this._writer.write(r).then(() => {
        i && ta(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this._transport) === null || e === void 0 || e.close();
  }
}
const J1 = {
  websocket: Z1,
  webtransport: Y1,
  polling: W1
}, X1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Q1 = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function eu(t) {
  if (t.length > 8e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), r = t.indexOf("]");
  n != -1 && r != -1 && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
  let i = X1.exec(t || ""), s = {}, o = 14;
  for (; o--; )
    s[Q1[o]] = i[o] || "";
  return n != -1 && r != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = eE(s, s.path), s.queryKey = tE(s, s.query), s;
}
function eE(t, e) {
  const n = /\/{2,9}/g, r = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && r.splice(0, 1), e.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function tE(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
    i && (n[i] = s);
  }), n;
}
const tu = typeof addEventListener == "function" && typeof removeEventListener == "function", Ro = [];
tu && addEventListener("offline", () => {
  Ro.forEach((t) => t());
}, !1);
class qn extends Me {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n) {
    if (super(), this.binaryType = O1, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (n = e, e = null), e) {
      const r = eu(e);
      n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query);
    } else n.host && (n.hostname = eu(n.host).host);
    na(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((r) => {
      const i = r.prototype.name;
      this.transports.push(i), this._transportsByName[i] = r;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = D1(this.opts.query)), tu && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Ro.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = ip, n.transport = e, this.id && (n.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new this._transportsByName[e](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const e = this.opts.rememberUpgrade && qn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(e);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", qn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          n.code = e.data, this._onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const e = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this._getWritablePackets();
      this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if (i && (n += M1(i)), r > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const e = Date.now() > this._pingTimeoutTime;
    return e && (this._pingTimeoutTime = 0, ta(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), e;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(e, n, r) {
    return this._sendPacket("message", e, n, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(e, n, r, i) {
    if (typeof n == "function" && (i = n, n = void 0), typeof r == "function" && (i = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const s = {
      type: e,
      data: n,
      options: r
    };
    this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), e();
    }, r = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : e();
    }) : this.upgrading ? r() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(e) {
    if (qn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", e), this._onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(e, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), tu && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Ro.indexOf(this._offlineEventListener);
        r !== -1 && Ro.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
qn.protocol = ip;
class nE extends qn {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let e = 0; e < this._upgrades.length; e++)
        this._probe(this._upgrades[e]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(e) {
    let n = this.createTransport(e), r = !1;
    qn.priorWebsocketSuccess = !1;
    const i = () => {
      r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (l) => {
        if (!r)
          if (l.type === "pong" && l.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            qn.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (f(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = n.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function s() {
      r || (r = !0, f(), n.close(), n = null);
    }
    const o = (l) => {
      const d = new Error("probe error: " + l);
      d.transport = n.name, s(), this.emitReserved("upgradeError", d);
    };
    function a() {
      o("transport closed");
    }
    function c() {
      o("socket closed");
    }
    function u(l) {
      n && l.name !== n.name && s();
    }
    const f = () => {
      n.removeListener("open", i), n.removeListener("error", o), n.removeListener("close", a), this.off("close", c), this.off("upgrading", u);
    };
    n.once("open", i), n.once("error", o), n.once("close", a), this.once("close", c), this.once("upgrading", u), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      r || n.open();
    }, 200) : n.open();
  }
  onHandshake(e) {
    this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(e) {
    const n = [];
    for (let r = 0; r < e.length; r++)
      ~this.transports.indexOf(e[r]) && n.push(e[r]);
    return n;
  }
}
let rE = class extends nE {
  constructor(e, n = {}) {
    const r = typeof e == "object" ? e : n;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((i) => J1[i]).filter((i) => !!i)), super(e, r);
  }
};
function iE(t, e = "", n) {
  let r = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), r = eu(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + s + ":" + r.port + e, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r;
}
const sE = typeof ArrayBuffer == "function", oE = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, fp = Object.prototype.toString, aE = typeof Blob == "function" || typeof Blob < "u" && fp.call(Blob) === "[object BlobConstructor]", cE = typeof File == "function" || typeof File < "u" && fp.call(File) === "[object FileConstructor]";
function hf(t) {
  return sE && (t instanceof ArrayBuffer || oE(t)) || aE && t instanceof Blob || cE && t instanceof File;
}
function Oo(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, r = t.length; n < r; n++)
      if (Oo(t[n]))
        return !0;
    return !1;
  }
  if (hf(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return Oo(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && Oo(t[n]))
      return !0;
  return !1;
}
function uE(t) {
  const e = [], n = t.data, r = t;
  return r.data = nu(n, e), r.attachments = e.length, { packet: r, buffers: e };
}
function nu(t, e) {
  if (!t)
    return t;
  if (hf(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = nu(t[r], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const r in t)
      Object.prototype.hasOwnProperty.call(t, r) && (n[r] = nu(t[r], e));
    return n;
  }
  return t;
}
function fE(t, e) {
  return t.data = ru(t.data, e), delete t.attachments, t;
}
function ru(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = ru(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = ru(t[n], e));
  return t;
}
const lE = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], dE = 5;
var pe;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(pe || (pe = {}));
class hE {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === pe.EVENT || e.type === pe.ACK) && Oo(e) ? this.encodeAsBinary({
      type: e.type === pe.EVENT ? pe.BINARY_EVENT : pe.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let n = "" + e.type;
    return (e.type === pe.BINARY_EVENT || e.type === pe.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = uE(e), r = this.encodeAsString(n.packet), i = n.buffers;
    return i.unshift(r), i;
  }
}
function pd(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class pf extends Me {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const r = n.type === pe.BINARY_EVENT;
      r || n.type === pe.BINARY_ACK ? (n.type = r ? pe.EVENT : pe.ACK, this.reconstructor = new pE(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (hf(e) || e.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let n = 0;
    const r = {
      type: Number(e.charAt(0))
    };
    if (pe[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === pe.BINARY_EVENT || r.type === pe.BINARY_ACK) {
      const s = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; )
        ;
      const o = e.substring(s, n);
      if (o != Number(o) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(o);
    }
    if (e.charAt(n + 1) === "/") {
      const s = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); )
        ;
      r.nsp = e.substring(s, n);
    } else
      r.nsp = "/";
    const i = e.charAt(n + 1);
    if (i !== "" && Number(i) == i) {
      const s = n + 1;
      for (; ++n; ) {
        const o = e.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === e.length)
          break;
      }
      r.id = Number(e.substring(s, n + 1));
    }
    if (e.charAt(++n)) {
      const s = this.tryParse(e.substr(n));
      if (pf.isPayloadValid(r.type, s))
        r.data = s;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case pe.CONNECT:
        return pd(n);
      case pe.DISCONNECT:
        return n === void 0;
      case pe.CONNECT_ERROR:
        return typeof n == "string" || pd(n);
      case pe.EVENT:
      case pe.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && lE.indexOf(n[0]) === -1);
      case pe.ACK:
      case pe.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class pE {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const n = fE(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const gE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: pf,
  Encoder: hE,
  get PacketType() {
    return pe;
  },
  protocol: dE
}, Symbol.toStringTag, { value: "Module" }));
function Ot(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const yE = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class lp extends Me {
  /**
   * `Socket` constructor.
   */
  constructor(e, n, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      Ot(e, "open", this.onopen.bind(this)),
      Ot(e, "packet", this.onpacket.bind(this)),
      Ot(e, "error", this.onerror.bind(this)),
      Ot(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...n) {
    var r, i, s;
    if (yE.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const o = {
      type: pe.EVENT,
      data: n
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const f = this.ids++, l = n.pop();
      this._registerAckCallback(f, l), o.id = f;
    }
    const a = (i = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || i === void 0 ? void 0 : i.writable, c = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
    return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, n) {
    var r;
    const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[e] = n;
      return;
    }
    const s = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, i), o = (...a) => {
      this.io.clearTimeoutFn(s), n.apply(this, a);
    };
    o.withError = !0, this.acks[e] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...n) {
    return new Promise((r, i) => {
      const s = (o, a) => o ? i(o) : r(a);
      s.withError = !0, n.push(s), this.emit(e, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((i, ...s) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(i)) : (this._queue.shift(), n && n(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !e || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: pe.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((e) => {
      if (!this.sendBuffer.some((r) => String(r.id) === e)) {
        const r = this.acks[e];
        delete this.acks[e], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case pe.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case pe.EVENT:
        case pe.BINARY_EVENT:
          this.onevent(e);
          break;
        case pe.ACK:
        case pe.BINARY_ACK:
          this.onack(e);
          break;
        case pe.DISCONNECT:
          this.ondisconnect();
          break;
        case pe.CONNECT_ERROR:
          this.destroy();
          const r = new Error(e.data.message);
          r.data = e.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n)
        r.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const n = this;
    let r = !1;
    return function(...i) {
      r || (r = !0, n.packet({
        type: pe.ACK,
        id: e,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (delete this.acks[e.id], n.withError && e.data.unshift(null), n.apply(this, e.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, n) {
    this.id = e, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: pe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (e === n[r])
          return n.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n)
        r.apply(this, e.data);
    }
  }
}
function Fi(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
Fi.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = Math.floor(e * 10) & 1 ? t + n : t - n;
  }
  return Math.min(t, this.max) | 0;
};
Fi.prototype.reset = function() {
  this.attempts = 0;
};
Fi.prototype.setMin = function(t) {
  this.ms = t;
};
Fi.prototype.setMax = function(t) {
  this.max = t;
};
Fi.prototype.setJitter = function(t) {
  this.jitter = t;
};
class iu extends Me {
  constructor(e, n) {
    var r;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, na(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Fi({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const i = n.parser || gE;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (n = this.backoff) === null || n === void 0 || n.setMin(e), this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (n = this.backoff) === null || n === void 0 || n.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (n = this.backoff) === null || n === void 0 || n.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new rE(this.uri, this.opts);
    const n = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = Ot(n, "open", function() {
      r.onopen(), e && e();
    }), s = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
    }, o = Ot(n, "error", s);
    if (this._timeout !== !1) {
      const a = this._timeout, c = this.setTimeoutFn(() => {
        i(), s(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && c.unref(), this.subs.push(() => {
        this.clearTimeoutFn(c);
      });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(
      Ot(e, "ping", this.onping.bind(this)),
      Ot(e, "data", this.ondata.bind(this)),
      Ot(e, "error", this.onerror.bind(this)),
      Ot(e, "close", this.onclose.bind(this)),
      // @ts-ignore
      Ot(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    ta(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, n) {
    let r = this.nsps[e];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new lp(this, e, n), this.nsps[e] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const n = Object.keys(this.nsps);
    for (const r of n)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let r = 0; r < n.length; r++)
      this.engine.write(n[r], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(e, n) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((i) => {
          i ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", i)) : e.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const Yi = {};
function ic(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = iE(t, e.path || "/socket.io"), r = n.source, i = n.id, s = n.path, o = Yi[i] && s in Yi[i].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let c;
  return a ? c = new iu(r, e) : (Yi[i] || (Yi[i] = new iu(r, e)), c = Yi[i]), n.query && !e.query && (e.query = n.queryKey), c.socket(n.path, e);
}
Object.assign(ic, {
  Manager: iu,
  Socket: lp,
  io: ic,
  connect: ic
});
var bE = { exports: {} }, gf = {}, yf = {};
Object.defineProperty(yf, "__esModule", { value: !0 });
function mE(t) {
  var e = 4, n = t.length, r = n % e;
  if (!r)
    return t;
  var i = n, s = e - r, o = n + s, a = xe.alloc(o);
  for (a.write(t); s--; )
    a.write("=", i++);
  return a.toString();
}
yf.default = mE;
Object.defineProperty(gf, "__esModule", { value: !0 });
var wE = yf;
function dp(t, e) {
  return e === void 0 && (e = "utf8"), xe.isBuffer(t) ? su(t.toString("base64")) : su(xe.from(t, e).toString("base64"));
}
function EE(t, e) {
  return e === void 0 && (e = "utf8"), xe.from(bf(t), "base64").toString(e);
}
function bf(t) {
  return t = t.toString(), wE.default(t).replace(/\-/g, "+").replace(/_/g, "/");
}
function su(t) {
  return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function xE(t) {
  return xe.from(bf(t), "base64");
}
var Ui = dp;
Ui.encode = dp;
Ui.decode = EE;
Ui.toBase64 = bf;
Ui.fromBase64 = su;
Ui.toBuffer = xE;
gf.default = Ui;
(function(t) {
  t.exports = gf.default, t.exports.default = t.exports;
})(bE);
var vE = { exports: {} }, sc = { exports: {} }, Te = {
  ArrayIsArray(t) {
    return Array.isArray(t);
  },
  ArrayPrototypeIncludes(t, e) {
    return t.includes(e);
  },
  ArrayPrototypeIndexOf(t, e) {
    return t.indexOf(e);
  },
  ArrayPrototypeJoin(t, e) {
    return t.join(e);
  },
  ArrayPrototypeMap(t, e) {
    return t.map(e);
  },
  ArrayPrototypePop(t, e) {
    return t.pop(e);
  },
  ArrayPrototypePush(t, e) {
    return t.push(e);
  },
  ArrayPrototypeSlice(t, e, n) {
    return t.slice(e, n);
  },
  Error,
  FunctionPrototypeCall(t, e, ...n) {
    return t.call(e, ...n);
  },
  FunctionPrototypeSymbolHasInstance(t, e) {
    return Function.prototype[Symbol.hasInstance].call(t, e);
  },
  MathFloor: Math.floor,
  Number,
  NumberIsInteger: Number.isInteger,
  NumberIsNaN: Number.isNaN,
  NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
  NumberParseInt: Number.parseInt,
  ObjectDefineProperties(t, e) {
    return Object.defineProperties(t, e);
  },
  ObjectDefineProperty(t, e, n) {
    return Object.defineProperty(t, e, n);
  },
  ObjectGetOwnPropertyDescriptor(t, e) {
    return Object.getOwnPropertyDescriptor(t, e);
  },
  ObjectKeys(t) {
    return Object.keys(t);
  },
  ObjectSetPrototypeOf(t, e) {
    return Object.setPrototypeOf(t, e);
  },
  Promise,
  PromisePrototypeCatch(t, e) {
    return t.catch(e);
  },
  PromisePrototypeThen(t, e, n) {
    return t.then(e, n);
  },
  PromiseReject(t) {
    return Promise.reject(t);
  },
  PromiseResolve(t) {
    return Promise.resolve(t);
  },
  ReflectApply: Reflect.apply,
  RegExpPrototypeTest(t, e) {
    return t.test(e);
  },
  SafeSet: Set,
  String,
  StringPrototypeSlice(t, e, n) {
    return t.slice(e, n);
  },
  StringPrototypeToLowerCase(t) {
    return t.toLowerCase();
  },
  StringPrototypeToUpperCase(t) {
    return t.toUpperCase();
  },
  StringPrototypeTrim(t) {
    return t.trim();
  },
  Symbol,
  SymbolFor: Symbol.for,
  SymbolAsyncIterator: Symbol.asyncIterator,
  SymbolHasInstance: Symbol.hasInstance,
  SymbolIterator: Symbol.iterator,
  SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"),
  SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"),
  TypedArrayPrototypeSet(t, e, n) {
    return t.set(e, n);
  },
  Boolean,
  Uint8Array
}, hp = { exports: {} }, Ji = { exports: {} }, gd;
function ps() {
  if (gd) return Ji.exports;
  gd = 1;
  const { AbortController: t, AbortSignal: e } = typeof self < "u" ? self : typeof window < "u" ? window : (
    /* otherwise */
    void 0
  );
  return Ji.exports = t, Ji.exports.AbortSignal = e, Ji.exports.default = t, Ji.exports;
}
(function(t) {
  const e = Or, { kResistStopPropagation: n, SymbolDispose: r } = Te, i = globalThis.AbortSignal || ps().AbortSignal, s = globalThis.AbortController || ps().AbortController, o = Object.getPrototypeOf(async function() {
  }).constructor, a = globalThis.Blob || e.Blob, c = typeof a < "u" ? function(y) {
    return y instanceof a;
  } : function(y) {
    return !1;
  }, u = (d, y) => {
    if (d !== void 0 && (d === null || typeof d != "object" || !("aborted" in d)))
      throw new ERR_INVALID_ARG_TYPE(y, "AbortSignal", d);
  }, f = (d, y) => {
    if (typeof d != "function") throw new ERR_INVALID_ARG_TYPE(y, "Function", d);
  };
  class l extends Error {
    constructor(y) {
      if (!Array.isArray(y))
        throw new TypeError(`Expected input to be an Array, got ${typeof y}`);
      let w = "";
      for (let h = 0; h < y.length; h++)
        w += `    ${y[h].stack}
`;
      super(w), this.name = "AggregateError", this.errors = y;
    }
  }
  t.exports = {
    AggregateError: l,
    kEmptyObject: Object.freeze({}),
    once(d) {
      let y = !1;
      return function(...w) {
        y || (y = !0, d.apply(this, w));
      };
    },
    createDeferredPromise: function() {
      let d, y;
      return {
        promise: new Promise((h, g) => {
          d = h, y = g;
        }),
        resolve: d,
        reject: y
      };
    },
    promisify(d) {
      return new Promise((y, w) => {
        d((h, ...g) => h ? w(h) : y(...g));
      });
    },
    debuglog() {
      return function() {
      };
    },
    format(d, ...y) {
      return d.replace(/%([sdifj])/g, function(...[w, h]) {
        const g = y.shift();
        return h === "f" ? g.toFixed(6) : h === "j" ? JSON.stringify(g) : h === "s" && typeof g == "object" ? `${g.constructor !== Object ? g.constructor.name : ""} {}`.trim() : g.toString();
      });
    },
    inspect(d) {
      switch (typeof d) {
        case "string":
          if (d.includes("'"))
            if (d.includes('"')) {
              if (!d.includes("`") && !d.includes("${"))
                return `\`${d}\``;
            } else return `"${d}"`;
          return `'${d}'`;
        case "number":
          return isNaN(d) ? "NaN" : Object.is(d, -0) ? String(d) : d;
        case "bigint":
          return `${String(d)}n`;
        case "boolean":
        case "undefined":
          return String(d);
        case "object":
          return "{}";
      }
    },
    types: {
      isAsyncFunction(d) {
        return d instanceof o;
      },
      isArrayBufferView(d) {
        return ArrayBuffer.isView(d);
      }
    },
    isBlob: c,
    deprecate(d, y) {
      return d;
    },
    addAbortListener: Cs.addAbortListener || function(y, w) {
      if (y === void 0)
        throw new ERR_INVALID_ARG_TYPE("signal", "AbortSignal", y);
      u(y, "signal"), f(w, "listener");
      let h;
      return y.aborted ? queueMicrotask(() => w()) : (y.addEventListener("abort", w, {
        __proto__: null,
        once: !0,
        [n]: !0
      }), h = () => {
        y.removeEventListener("abort", w);
      }), {
        __proto__: null,
        [r]() {
          var g;
          (g = h) === null || g === void 0 || g();
        }
      };
    },
    AbortSignalAny: i.any || function(y) {
      if (y.length === 1)
        return y[0];
      const w = new s(), h = () => w.abort();
      return y.forEach((g) => {
        u(g, "signals"), g.addEventListener("abort", h, {
          once: !0
        });
      }), w.signal.addEventListener(
        "abort",
        () => {
          y.forEach((g) => g.removeEventListener("abort", h));
        },
        {
          once: !0
        }
      ), w.signal;
    }
  }, t.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
})(hp);
var nt = hp.exports, mf = {};
const { format: SE, inspect: Mo, AggregateError: _E } = nt, AE = globalThis.AggregateError || _E, IE = Symbol("kIsNodeError"), PE = [
  "string",
  "function",
  "number",
  "object",
  // Accept 'Function' and 'Object' as alternative to the lower cased version.
  "Function",
  "Object",
  "boolean",
  "bigint",
  "symbol"
], BE = /^([A-Z][a-z0-9]*)+$/, TE = "__node_internal_", ra = {};
function br(t, e) {
  if (!t)
    throw new ra.ERR_INTERNAL_ASSERTION(e);
}
function yd(t) {
  let e = "", n = t.length;
  const r = t[0] === "-" ? 1 : 0;
  for (; n >= r + 4; n -= 3)
    e = `_${t.slice(n - 3, n)}${e}`;
  return `${t.slice(0, n)}${e}`;
}
function $E(t, e, n) {
  if (typeof e == "function")
    return br(
      e.length <= n.length,
      // Default options do not count.
      `Code: ${t}; The provided arguments length (${n.length}) does not match the required ones (${e.length}).`
    ), e(...n);
  const r = (e.match(/%[dfijoOs]/g) || []).length;
  return br(
    r === n.length,
    `Code: ${t}; The provided arguments length (${n.length}) does not match the required ones (${r}).`
  ), n.length === 0 ? e : SE(e, ...n);
}
function Xe(t, e, n) {
  n || (n = Error);
  class r extends n {
    constructor(...s) {
      super($E(t, e, s));
    }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
  }
  Object.defineProperties(r.prototype, {
    name: {
      value: n.name,
      writable: !0,
      enumerable: !1,
      configurable: !0
    },
    toString: {
      value() {
        return `${this.name} [${t}]: ${this.message}`;
      },
      writable: !0,
      enumerable: !1,
      configurable: !0
    }
  }), r.prototype.code = t, r.prototype[IE] = !0, ra[t] = r;
}
function bd(t) {
  const e = TE + t.name;
  return Object.defineProperty(t, "name", {
    value: e
  }), t;
}
function NE(t, e) {
  if (t && e && t !== e) {
    if (Array.isArray(e.errors))
      return e.errors.push(t), e;
    const n = new AE([e, t], e.message);
    return n.code = e.code, n;
  }
  return t || e;
}
let RE = class extends Error {
  constructor(e = "The operation was aborted", n = void 0) {
    if (n !== void 0 && typeof n != "object")
      throw new ra.ERR_INVALID_ARG_TYPE("options", "Object", n);
    super(e, n), this.code = "ABORT_ERR", this.name = "AbortError";
  }
};
Xe("ERR_ASSERTION", "%s", Error);
Xe(
  "ERR_INVALID_ARG_TYPE",
  (t, e, n) => {
    br(typeof t == "string", "'name' must be a string"), Array.isArray(e) || (e = [e]);
    let r = "The ";
    t.endsWith(" argument") ? r += `${t} ` : r += `"${t}" ${t.includes(".") ? "property" : "argument"} `, r += "must be ";
    const i = [], s = [], o = [];
    for (const c of e)
      br(typeof c == "string", "All expected entries have to be of type string"), PE.includes(c) ? i.push(c.toLowerCase()) : BE.test(c) ? s.push(c) : (br(c !== "object", 'The value "object" should be written as "Object"'), o.push(c));
    if (s.length > 0) {
      const c = i.indexOf("object");
      c !== -1 && (i.splice(i, c, 1), s.push("Object"));
    }
    if (i.length > 0) {
      switch (i.length) {
        case 1:
          r += `of type ${i[0]}`;
          break;
        case 2:
          r += `one of type ${i[0]} or ${i[1]}`;
          break;
        default: {
          const c = i.pop();
          r += `one of type ${i.join(", ")}, or ${c}`;
        }
      }
      (s.length > 0 || o.length > 0) && (r += " or ");
    }
    if (s.length > 0) {
      switch (s.length) {
        case 1:
          r += `an instance of ${s[0]}`;
          break;
        case 2:
          r += `an instance of ${s[0]} or ${s[1]}`;
          break;
        default: {
          const c = s.pop();
          r += `an instance of ${s.join(", ")}, or ${c}`;
        }
      }
      o.length > 0 && (r += " or ");
    }
    switch (o.length) {
      case 0:
        break;
      case 1:
        o[0].toLowerCase() !== o[0] && (r += "an "), r += `${o[0]}`;
        break;
      case 2:
        r += `one of ${o[0]} or ${o[1]}`;
        break;
      default: {
        const c = o.pop();
        r += `one of ${o.join(", ")}, or ${c}`;
      }
    }
    if (n == null)
      r += `. Received ${n}`;
    else if (typeof n == "function" && n.name)
      r += `. Received function ${n.name}`;
    else if (typeof n == "object") {
      var a;
      if ((a = n.constructor) !== null && a !== void 0 && a.name)
        r += `. Received an instance of ${n.constructor.name}`;
      else {
        const c = Mo(n, {
          depth: -1
        });
        r += `. Received ${c}`;
      }
    } else {
      let c = Mo(n, {
        colors: !1
      });
      c.length > 25 && (c = `${c.slice(0, 25)}...`), r += `. Received type ${typeof n} (${c})`;
    }
    return r;
  },
  TypeError
);
Xe(
  "ERR_INVALID_ARG_VALUE",
  (t, e, n = "is invalid") => {
    let r = Mo(e);
    return r.length > 128 && (r = r.slice(0, 128) + "..."), `The ${t.includes(".") ? "property" : "argument"} '${t}' ${n}. Received ${r}`;
  },
  TypeError
);
Xe(
  "ERR_INVALID_RETURN_VALUE",
  (t, e, n) => {
    var r;
    const i = n != null && (r = n.constructor) !== null && r !== void 0 && r.name ? `instance of ${n.constructor.name}` : `type ${typeof n}`;
    return `Expected ${t} to be returned from the "${e}" function but got ${i}.`;
  },
  TypeError
);
Xe(
  "ERR_MISSING_ARGS",
  (...t) => {
    br(t.length > 0, "At least one arg needs to be specified");
    let e;
    const n = t.length;
    switch (t = (Array.isArray(t) ? t : [t]).map((r) => `"${r}"`).join(" or "), n) {
      case 1:
        e += `The ${t[0]} argument`;
        break;
      case 2:
        e += `The ${t[0]} and ${t[1]} arguments`;
        break;
      default:
        {
          const r = t.pop();
          e += `The ${t.join(", ")}, and ${r} arguments`;
        }
        break;
    }
    return `${e} must be specified`;
  },
  TypeError
);
Xe(
  "ERR_OUT_OF_RANGE",
  (t, e, n) => {
    br(e, 'Missing "range" argument');
    let r;
    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? r = yd(String(n)) : typeof n == "bigint" ? (r = String(n), (n > 2n ** 32n || n < -(2n ** 32n)) && (r = yd(r)), r += "n") : r = Mo(n), `The value of "${t}" is out of range. It must be ${e}. Received ${r}`;
  },
  RangeError
);
Xe("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
Xe("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
Xe("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
Xe("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
Xe("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
Xe("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Xe("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
Xe("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
Xe("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
Xe("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
Xe("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
var ft = {
  AbortError: RE,
  aggregateTwoErrors: bd(NE),
  hideStackFrames: bd,
  codes: ra
};
const {
  ArrayIsArray: wf,
  ArrayPrototypeIncludes: pp,
  ArrayPrototypeJoin: gp,
  ArrayPrototypeMap: OE,
  NumberIsInteger: Ef,
  NumberIsNaN: CE,
  NumberMAX_SAFE_INTEGER: kE,
  NumberMIN_SAFE_INTEGER: LE,
  NumberParseInt: ME,
  ObjectPrototypeHasOwnProperty: FE,
  RegExpPrototypeExec: yp,
  String: UE,
  StringPrototypeToUpperCase: DE,
  StringPrototypeTrim: jE
} = Te, {
  hideStackFrames: Pt,
  codes: { ERR_SOCKET_BAD_PORT: HE, ERR_INVALID_ARG_TYPE: et, ERR_INVALID_ARG_VALUE: Di, ERR_OUT_OF_RANGE: Ir, ERR_UNKNOWN_SIGNAL: md }
} = ft, { normalizeEncoding: GE } = nt, { isAsyncFunction: qE, isArrayBufferView: zE } = nt.types, wd = {};
function VE(t) {
  return t === (t | 0);
}
function WE(t) {
  return t === t >>> 0;
}
const KE = /^[0-7]+$/, ZE = "must be a 32-bit unsigned integer or an octal string";
function YE(t, e, n) {
  if (typeof t > "u" && (t = n), typeof t == "string") {
    if (yp(KE, t) === null)
      throw new Di(e, t, ZE);
    t = ME(t, 8);
  }
  return bp(t, e), t;
}
const JE = Pt((t, e, n = LE, r = kE) => {
  if (typeof t != "number") throw new et(e, "number", t);
  if (!Ef(t)) throw new Ir(e, "an integer", t);
  if (t < n || t > r) throw new Ir(e, `>= ${n} && <= ${r}`, t);
}), XE = Pt((t, e, n = -2147483648, r = 2147483647) => {
  if (typeof t != "number")
    throw new et(e, "number", t);
  if (!Ef(t))
    throw new Ir(e, "an integer", t);
  if (t < n || t > r)
    throw new Ir(e, `>= ${n} && <= ${r}`, t);
}), bp = Pt((t, e, n = !1) => {
  if (typeof t != "number")
    throw new et(e, "number", t);
  if (!Ef(t))
    throw new Ir(e, "an integer", t);
  const r = n ? 1 : 0, i = 4294967295;
  if (t < r || t > i)
    throw new Ir(e, `>= ${r} && <= ${i}`, t);
});
function xf(t, e) {
  if (typeof t != "string") throw new et(e, "string", t);
}
function QE(t, e, n = void 0, r) {
  if (typeof t != "number") throw new et(e, "number", t);
  if (n != null && t < n || r != null && t > r || (n != null || r != null) && CE(t))
    throw new Ir(
      e,
      `${n != null ? `>= ${n}` : ""}${n != null && r != null ? " && " : ""}${r != null ? `<= ${r}` : ""}`,
      t
    );
}
const e2 = Pt((t, e, n) => {
  if (!pp(n, t)) {
    const i = "must be one of: " + gp(
      OE(n, (s) => typeof s == "string" ? `'${s}'` : UE(s)),
      ", "
    );
    throw new Di(e, t, i);
  }
});
function mp(t, e) {
  if (typeof t != "boolean") throw new et(e, "boolean", t);
}
function oc(t, e, n) {
  return t == null || !FE(t, e) ? n : t[e];
}
const t2 = Pt((t, e, n = null) => {
  const r = oc(n, "allowArray", !1), i = oc(n, "allowFunction", !1);
  if (!oc(n, "nullable", !1) && t === null || !r && wf(t) || typeof t != "object" && (!i || typeof t != "function"))
    throw new et(e, "Object", t);
}), n2 = Pt((t, e) => {
  if (t != null && typeof t != "object" && typeof t != "function")
    throw new et(e, "a dictionary", t);
}), ia = Pt((t, e, n = 0) => {
  if (!wf(t))
    throw new et(e, "Array", t);
  if (t.length < n) {
    const r = `must be longer than ${n}`;
    throw new Di(e, t, r);
  }
});
function r2(t, e) {
  ia(t, e);
  for (let n = 0; n < t.length; n++)
    xf(t[n], `${e}[${n}]`);
}
function i2(t, e) {
  ia(t, e);
  for (let n = 0; n < t.length; n++)
    mp(t[n], `${e}[${n}]`);
}
function s2(t, e) {
  ia(t, e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n], i = `${e}[${n}]`;
    if (r == null)
      throw new et(i, "AbortSignal", r);
    wp(r, i);
  }
}
function o2(t, e = "signal") {
  if (xf(t, e), wd[t] === void 0)
    throw wd[DE(t)] !== void 0 ? new md(t + " (signals must use all capital letters)") : new md(t);
}
const a2 = Pt((t, e = "buffer") => {
  if (!zE(t))
    throw new et(e, ["Buffer", "TypedArray", "DataView"], t);
});
function c2(t, e) {
  const n = GE(e), r = t.length;
  if (n === "hex" && r % 2 !== 0)
    throw new Di("encoding", e, `is invalid for data of length ${r}`);
}
function u2(t, e = "Port", n = !0) {
  if (typeof t != "number" && typeof t != "string" || typeof t == "string" && jE(t).length === 0 || +t !== +t >>> 0 || t > 65535 || t === 0 && !n)
    throw new HE(e, t, n);
  return t | 0;
}
const wp = Pt((t, e) => {
  if (t !== void 0 && (t === null || typeof t != "object" || !("aborted" in t)))
    throw new et(e, "AbortSignal", t);
}), f2 = Pt((t, e) => {
  if (typeof t != "function") throw new et(e, "Function", t);
}), l2 = Pt((t, e) => {
  if (typeof t != "function" || qE(t)) throw new et(e, "Function", t);
}), d2 = Pt((t, e) => {
  if (t !== void 0) throw new et(e, "undefined", t);
});
function h2(t, e, n) {
  if (!pp(n, t))
    throw new et(e, `('${gp(n, "|")}')`, t);
}
const p2 = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
function Ed(t, e) {
  if (typeof t > "u" || !yp(p2, t))
    throw new Di(
      e,
      t,
      'must be an array or string of format "</styles.css>; rel=preload; as=style"'
    );
}
function g2(t) {
  if (typeof t == "string")
    return Ed(t, "hints"), t;
  if (wf(t)) {
    const e = t.length;
    let n = "";
    if (e === 0)
      return n;
    for (let r = 0; r < e; r++) {
      const i = t[r];
      Ed(i, "hints"), n += i, r !== e - 1 && (n += ", ");
    }
    return n;
  }
  throw new Di(
    "hints",
    t,
    'must be an array or string of format "</styles.css>; rel=preload; as=style"'
  );
}
var Ms = {
  isInt32: VE,
  isUint32: WE,
  parseFileMode: YE,
  validateArray: ia,
  validateStringArray: r2,
  validateBooleanArray: i2,
  validateAbortSignalArray: s2,
  validateBoolean: mp,
  validateBuffer: a2,
  validateDictionary: n2,
  validateEncoding: c2,
  validateFunction: f2,
  validateInt32: XE,
  validateInteger: JE,
  validateNumber: QE,
  validateObject: t2,
  validateOneOf: e2,
  validatePlainFunction: l2,
  validatePort: u2,
  validateSignalName: o2,
  validateString: xf,
  validateUint32: bp,
  validateUndefined: d2,
  validateUnion: h2,
  validateAbortSignal: wp,
  validateLinkHeaderValue: g2
}, vf = { exports: {} }, Jn = {};
(function(t) {
  Object.defineProperties(t, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: "Module" } });
  function e(N) {
    return N && N.__esModule && Object.prototype.hasOwnProperty.call(N, "default") ? N.default : N;
  }
  var n = { exports: {} }, r = n.exports = {}, i, s;
  function o() {
    throw new Error("setTimeout has not been defined");
  }
  function a() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? i = setTimeout : i = o;
    } catch {
      i = o;
    }
    try {
      typeof clearTimeout == "function" ? s = clearTimeout : s = a;
    } catch {
      s = a;
    }
  })();
  function c(N) {
    if (i === setTimeout)
      return setTimeout(N, 0);
    if ((i === o || !i) && setTimeout)
      return i = setTimeout, setTimeout(N, 0);
    try {
      return i(N, 0);
    } catch {
      try {
        return i.call(null, N, 0);
      } catch {
        return i.call(this, N, 0);
      }
    }
  }
  function u(N) {
    if (s === clearTimeout)
      return clearTimeout(N);
    if ((s === a || !s) && clearTimeout)
      return s = clearTimeout, clearTimeout(N);
    try {
      return s(N);
    } catch {
      try {
        return s.call(null, N);
      } catch {
        return s.call(this, N);
      }
    }
  }
  var f = [], l = !1, d, y = -1;
  function w() {
    !l || !d || (l = !1, d.length ? f = d.concat(f) : y = -1, f.length && h());
  }
  function h() {
    if (!l) {
      var N = c(w);
      l = !0;
      for (var O = f.length; O; ) {
        for (d = f, f = []; ++y < O; )
          d && d[y].run();
        y = -1, O = f.length;
      }
      d = null, l = !1, u(N);
    }
  }
  r.nextTick = function(N) {
    var O = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var C = 1; C < arguments.length; C++)
        O[C - 1] = arguments[C];
    f.push(new g(N, O)), f.length === 1 && !l && c(h);
  };
  function g(N, O) {
    this.fun = N, this.array = O;
  }
  g.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {};
  function b() {
  }
  r.on = b, r.addListener = b, r.once = b, r.off = b, r.removeListener = b, r.removeAllListeners = b, r.emit = b, r.prependListener = b, r.prependOnceListener = b, r.listeners = function(N) {
    return [];
  }, r.binding = function(N) {
    throw new Error("process.binding is not supported");
  }, r.cwd = function() {
    return "/";
  }, r.chdir = function(N) {
    throw new Error("process.chdir is not supported");
  }, r.umask = function() {
    return 0;
  };
  var E = n.exports;
  const S = /* @__PURE__ */ e(E);
  t.default = S, t.process = S;
})(Jn);
const { SymbolAsyncIterator: xd, SymbolIterator: vd, SymbolFor: Cr } = Te, Ep = Cr("nodejs.stream.destroyed"), xp = Cr("nodejs.stream.errored"), ou = Cr("nodejs.stream.readable"), au = Cr("nodejs.stream.writable"), vp = Cr("nodejs.stream.disturbed"), y2 = Cr("nodejs.webstream.isClosedPromise"), b2 = Cr("nodejs.webstream.controllerErrorFunction");
function sa(t, e = !1) {
  var n;
  return !!(t && typeof t.pipe == "function" && typeof t.on == "function" && (!e || typeof t.pause == "function" && typeof t.resume == "function") && (!t._writableState || ((n = t._readableState) === null || n === void 0 ? void 0 : n.readable) !== !1) && // Duplex
  (!t._writableState || t._readableState));
}
function oa(t) {
  var e;
  return !!(t && typeof t.write == "function" && typeof t.on == "function" && (!t._readableState || ((e = t._writableState) === null || e === void 0 ? void 0 : e.writable) !== !1));
}
function m2(t) {
  return !!(t && typeof t.pipe == "function" && t._readableState && typeof t.on == "function" && typeof t.write == "function");
}
function tn(t) {
  return t && (t._readableState || t._writableState || typeof t.write == "function" && typeof t.on == "function" || typeof t.pipe == "function" && typeof t.on == "function");
}
function Sp(t) {
  return !!(t && !tn(t) && typeof t.pipeThrough == "function" && typeof t.getReader == "function" && typeof t.cancel == "function");
}
function _p(t) {
  return !!(t && !tn(t) && typeof t.getWriter == "function" && typeof t.abort == "function");
}
function Ap(t) {
  return !!(t && !tn(t) && typeof t.readable == "object" && typeof t.writable == "object");
}
function w2(t) {
  return Sp(t) || _p(t) || Ap(t);
}
function E2(t, e) {
  return t == null ? !1 : e === !0 ? typeof t[xd] == "function" : e === !1 ? typeof t[vd] == "function" : typeof t[xd] == "function" || typeof t[vd] == "function";
}
function aa(t) {
  if (!tn(t)) return null;
  const e = t._writableState, n = t._readableState, r = e || n;
  return !!(t.destroyed || t[Ep] || r != null && r.destroyed);
}
function Ip(t) {
  if (!oa(t)) return null;
  if (t.writableEnded === !0) return !0;
  const e = t._writableState;
  return e != null && e.errored ? !1 : typeof (e == null ? void 0 : e.ended) != "boolean" ? null : e.ended;
}
function x2(t, e) {
  if (!oa(t)) return null;
  if (t.writableFinished === !0) return !0;
  const n = t._writableState;
  return n != null && n.errored ? !1 : typeof (n == null ? void 0 : n.finished) != "boolean" ? null : !!(n.finished || e === !1 && n.ended === !0 && n.length === 0);
}
function v2(t) {
  if (!sa(t)) return null;
  if (t.readableEnded === !0) return !0;
  const e = t._readableState;
  return !e || e.errored ? !1 : typeof (e == null ? void 0 : e.ended) != "boolean" ? null : e.ended;
}
function Pp(t, e) {
  if (!sa(t)) return null;
  const n = t._readableState;
  return n != null && n.errored ? !1 : typeof (n == null ? void 0 : n.endEmitted) != "boolean" ? null : !!(n.endEmitted || e === !1 && n.ended === !0 && n.length === 0);
}
function Bp(t) {
  return t && t[ou] != null ? t[ou] : typeof (t == null ? void 0 : t.readable) != "boolean" ? null : aa(t) ? !1 : sa(t) && t.readable && !Pp(t);
}
function Tp(t) {
  return t && t[au] != null ? t[au] : typeof (t == null ? void 0 : t.writable) != "boolean" ? null : aa(t) ? !1 : oa(t) && t.writable && !Ip(t);
}
function S2(t, e) {
  return tn(t) ? aa(t) ? !0 : !((e == null ? void 0 : e.readable) !== !1 && Bp(t) || (e == null ? void 0 : e.writable) !== !1 && Tp(t)) : null;
}
function _2(t) {
  var e, n;
  return tn(t) ? t.writableErrored ? t.writableErrored : (e = (n = t._writableState) === null || n === void 0 ? void 0 : n.errored) !== null && e !== void 0 ? e : null : null;
}
function A2(t) {
  var e, n;
  return tn(t) ? t.readableErrored ? t.readableErrored : (e = (n = t._readableState) === null || n === void 0 ? void 0 : n.errored) !== null && e !== void 0 ? e : null : null;
}
function I2(t) {
  if (!tn(t))
    return null;
  if (typeof t.closed == "boolean")
    return t.closed;
  const e = t._writableState, n = t._readableState;
  return typeof (e == null ? void 0 : e.closed) == "boolean" || typeof (n == null ? void 0 : n.closed) == "boolean" ? (e == null ? void 0 : e.closed) || (n == null ? void 0 : n.closed) : typeof t._closed == "boolean" && $p(t) ? t._closed : null;
}
function $p(t) {
  return typeof t._closed == "boolean" && typeof t._defaultKeepAlive == "boolean" && typeof t._removedConnection == "boolean" && typeof t._removedContLen == "boolean";
}
function Np(t) {
  return typeof t._sent100 == "boolean" && $p(t);
}
function P2(t) {
  var e;
  return typeof t._consuming == "boolean" && typeof t._dumped == "boolean" && ((e = t.req) === null || e === void 0 ? void 0 : e.upgradeOrConnect) === void 0;
}
function B2(t) {
  if (!tn(t)) return null;
  const e = t._writableState, n = t._readableState, r = e || n;
  return !r && Np(t) || !!(r && r.autoDestroy && r.emitClose && r.closed === !1);
}
function T2(t) {
  var e;
  return !!(t && ((e = t[vp]) !== null && e !== void 0 ? e : t.readableDidRead || t.readableAborted));
}
function $2(t) {
  var e, n, r, i, s, o, a, c, u, f;
  return !!(t && ((e = (n = (r = (i = (s = (o = t[xp]) !== null && o !== void 0 ? o : t.readableErrored) !== null && s !== void 0 ? s : t.writableErrored) !== null && i !== void 0 ? i : (a = t._readableState) === null || a === void 0 ? void 0 : a.errorEmitted) !== null && r !== void 0 ? r : (c = t._writableState) === null || c === void 0 ? void 0 : c.errorEmitted) !== null && n !== void 0 ? n : (u = t._readableState) === null || u === void 0 ? void 0 : u.errored) !== null && e !== void 0 ? e : !((f = t._writableState) === null || f === void 0) && f.errored));
}
var Pn = {
  isDestroyed: aa,
  kIsDestroyed: Ep,
  isDisturbed: T2,
  kIsDisturbed: vp,
  isErrored: $2,
  kIsErrored: xp,
  isReadable: Bp,
  kIsReadable: ou,
  kIsClosedPromise: y2,
  kControllerErrorFunction: b2,
  kIsWritable: au,
  isClosed: I2,
  isDuplexNodeStream: m2,
  isFinished: S2,
  isIterable: E2,
  isReadableNodeStream: sa,
  isReadableStream: Sp,
  isReadableEnded: v2,
  isReadableFinished: Pp,
  isReadableErrored: A2,
  isNodeStream: tn,
  isWebStream: w2,
  isWritable: Tp,
  isWritableNodeStream: oa,
  isWritableStream: _p,
  isWritableEnded: Ip,
  isWritableFinished: x2,
  isWritableErrored: _2,
  isServerRequest: P2,
  isServerResponse: Np,
  willEmitClose: B2,
  isTransformStream: Ap
};
const Dn = Jn, { AbortError: Rp, codes: N2 } = ft, { ERR_INVALID_ARG_TYPE: R2, ERR_STREAM_PREMATURE_CLOSE: Sd } = N2, { kEmptyObject: cu, once: uu } = nt, { validateAbortSignal: O2, validateFunction: C2, validateObject: k2, validateBoolean: L2 } = Ms, { Promise: M2, PromisePrototypeThen: F2, SymbolDispose: Op } = Te, {
  isClosed: U2,
  isReadable: _d,
  isReadableNodeStream: ac,
  isReadableStream: D2,
  isReadableFinished: Ad,
  isReadableErrored: Id,
  isWritable: Pd,
  isWritableNodeStream: Bd,
  isWritableStream: j2,
  isWritableFinished: Td,
  isWritableErrored: $d,
  isNodeStream: H2,
  willEmitClose: G2,
  kIsClosedPromise: q2
} = Pn;
let Xr;
function z2(t) {
  return t.setHeader && typeof t.abort == "function";
}
const fu = () => {
};
function Cp(t, e, n) {
  var r, i;
  if (arguments.length === 2 ? (n = e, e = cu) : e == null ? e = cu : k2(e, "options"), C2(n, "callback"), O2(e.signal, "options.signal"), n = uu(n), D2(t) || j2(t))
    return V2(t, e, n);
  if (!H2(t))
    throw new R2("stream", ["ReadableStream", "WritableStream", "Stream"], t);
  const s = (r = e.readable) !== null && r !== void 0 ? r : ac(t), o = (i = e.writable) !== null && i !== void 0 ? i : Bd(t), a = t._writableState, c = t._readableState, u = () => {
    t.writable || d();
  };
  let f = G2(t) && ac(t) === s && Bd(t) === o, l = Td(t, !1);
  const d = () => {
    l = !0, t.destroyed && (f = !1), !(f && (!t.readable || s)) && (!s || y) && n.call(t);
  };
  let y = Ad(t, !1);
  const w = () => {
    y = !0, t.destroyed && (f = !1), !(f && (!t.writable || o)) && (!o || l) && n.call(t);
  }, h = (O) => {
    n.call(t, O);
  };
  let g = U2(t);
  const b = () => {
    g = !0;
    const O = $d(t) || Id(t);
    if (O && typeof O != "boolean")
      return n.call(t, O);
    if (s && !y && ac(t, !0) && !Ad(t, !1))
      return n.call(t, new Sd());
    if (o && !l && !Td(t, !1))
      return n.call(t, new Sd());
    n.call(t);
  }, E = () => {
    g = !0;
    const O = $d(t) || Id(t);
    if (O && typeof O != "boolean")
      return n.call(t, O);
    n.call(t);
  }, S = () => {
    t.req.on("finish", d);
  };
  z2(t) ? (t.on("complete", d), f || t.on("abort", b), t.req ? S() : t.on("request", S)) : o && !a && (t.on("end", u), t.on("close", u)), !f && typeof t.aborted == "boolean" && t.on("aborted", b), t.on("end", w), t.on("finish", d), e.error !== !1 && t.on("error", h), t.on("close", b), g ? Dn.nextTick(b) : a != null && a.errorEmitted || c != null && c.errorEmitted ? f || Dn.nextTick(E) : (!s && (!f || _d(t)) && (l || Pd(t) === !1) || !o && (!f || Pd(t)) && (y || _d(t) === !1) || c && t.req && t.aborted) && Dn.nextTick(E);
  const N = () => {
    n = fu, t.removeListener("aborted", b), t.removeListener("complete", d), t.removeListener("abort", b), t.removeListener("request", S), t.req && t.req.removeListener("finish", d), t.removeListener("end", u), t.removeListener("close", u), t.removeListener("finish", d), t.removeListener("end", w), t.removeListener("error", h), t.removeListener("close", b);
  };
  if (e.signal && !g) {
    const O = () => {
      const C = n;
      N(), C.call(
        t,
        new Rp(void 0, {
          cause: e.signal.reason
        })
      );
    };
    if (e.signal.aborted)
      Dn.nextTick(O);
    else {
      Xr = Xr || nt.addAbortListener;
      const C = Xr(e.signal, O), L = n;
      n = uu((...p) => {
        C[Op](), L.apply(t, p);
      });
    }
  }
  return N;
}
function V2(t, e, n) {
  let r = !1, i = fu;
  if (e.signal)
    if (i = () => {
      r = !0, n.call(
        t,
        new Rp(void 0, {
          cause: e.signal.reason
        })
      );
    }, e.signal.aborted)
      Dn.nextTick(i);
    else {
      Xr = Xr || nt.addAbortListener;
      const o = Xr(e.signal, i), a = n;
      n = uu((...c) => {
        o[Op](), a.apply(t, c);
      });
    }
  const s = (...o) => {
    r || Dn.nextTick(() => n.apply(t, o));
  };
  return F2(t[q2].promise, s, s), fu;
}
function W2(t, e) {
  var n;
  let r = !1;
  return e === null && (e = cu), (n = e) !== null && n !== void 0 && n.cleanup && (L2(e.cleanup, "cleanup"), r = e.cleanup), new M2((i, s) => {
    const o = Cp(t, e, (a) => {
      r && o(), a ? s(a) : i();
    });
  });
}
vf.exports = Cp;
vf.exports.finished = W2;
var Xn = vf.exports;
const Zt = Jn, {
  aggregateTwoErrors: K2,
  codes: { ERR_MULTIPLE_CALLBACK: Z2 },
  AbortError: Y2
} = ft, { Symbol: kp } = Te, { kIsDestroyed: J2, isDestroyed: X2, isFinished: Q2, isServerRequest: ex } = Pn, Lp = kp("kDestroy"), lu = kp("kConstruct");
function Mp(t, e, n) {
  t && (t.stack, e && !e.errored && (e.errored = t), n && !n.errored && (n.errored = t));
}
function tx(t, e) {
  const n = this._readableState, r = this._writableState, i = r || n;
  return r != null && r.destroyed || n != null && n.destroyed ? (typeof e == "function" && e(), this) : (Mp(t, r, n), r && (r.destroyed = !0), n && (n.destroyed = !0), i.constructed ? Nd(this, t, e) : this.once(Lp, function(s) {
    Nd(this, K2(s, t), e);
  }), this);
}
function Nd(t, e, n) {
  let r = !1;
  function i(s) {
    if (r)
      return;
    r = !0;
    const o = t._readableState, a = t._writableState;
    Mp(s, a, o), a && (a.closed = !0), o && (o.closed = !0), typeof n == "function" && n(s), s ? Zt.nextTick(nx, t, s) : Zt.nextTick(Fp, t);
  }
  try {
    t._destroy(e || null, i);
  } catch (s) {
    i(s);
  }
}
function nx(t, e) {
  du(t, e), Fp(t);
}
function Fp(t) {
  const e = t._readableState, n = t._writableState;
  n && (n.closeEmitted = !0), e && (e.closeEmitted = !0), (n != null && n.emitClose || e != null && e.emitClose) && t.emit("close");
}
function du(t, e) {
  const n = t._readableState, r = t._writableState;
  r != null && r.errorEmitted || n != null && n.errorEmitted || (r && (r.errorEmitted = !0), n && (n.errorEmitted = !0), t.emit("error", e));
}
function rx() {
  const t = this._readableState, e = this._writableState;
  t && (t.constructed = !0, t.closed = !1, t.closeEmitted = !1, t.destroyed = !1, t.errored = null, t.errorEmitted = !1, t.reading = !1, t.ended = t.readable === !1, t.endEmitted = t.readable === !1), e && (e.constructed = !0, e.destroyed = !1, e.closed = !1, e.closeEmitted = !1, e.errored = null, e.errorEmitted = !1, e.finalCalled = !1, e.prefinished = !1, e.ended = e.writable === !1, e.ending = e.writable === !1, e.finished = e.writable === !1);
}
function hu(t, e, n) {
  const r = t._readableState, i = t._writableState;
  if (i != null && i.destroyed || r != null && r.destroyed)
    return this;
  r != null && r.autoDestroy || i != null && i.autoDestroy ? t.destroy(e) : e && (e.stack, i && !i.errored && (i.errored = e), r && !r.errored && (r.errored = e), n ? Zt.nextTick(du, t, e) : du(t, e));
}
function ix(t, e) {
  if (typeof t._construct != "function")
    return;
  const n = t._readableState, r = t._writableState;
  n && (n.constructed = !1), r && (r.constructed = !1), t.once(lu, e), !(t.listenerCount(lu) > 1) && Zt.nextTick(sx, t);
}
function sx(t) {
  let e = !1;
  function n(r) {
    if (e) {
      hu(t, r ?? new Z2());
      return;
    }
    e = !0;
    const i = t._readableState, s = t._writableState, o = s || i;
    i && (i.constructed = !0), s && (s.constructed = !0), o.destroyed ? t.emit(Lp, r) : r ? hu(t, r, !0) : Zt.nextTick(ox, t);
  }
  try {
    t._construct((r) => {
      Zt.nextTick(n, r);
    });
  } catch (r) {
    Zt.nextTick(n, r);
  }
}
function ox(t) {
  t.emit(lu);
}
function Rd(t) {
  return (t == null ? void 0 : t.setHeader) && typeof t.abort == "function";
}
function Up(t) {
  t.emit("close");
}
function ax(t, e) {
  t.emit("error", e), Zt.nextTick(Up, t);
}
function cx(t, e) {
  !t || X2(t) || (!e && !Q2(t) && (e = new Y2()), ex(t) ? (t.socket = null, t.destroy(e)) : Rd(t) ? t.abort() : Rd(t.req) ? t.req.abort() : typeof t.destroy == "function" ? t.destroy(e) : typeof t.close == "function" ? t.close() : e ? Zt.nextTick(ax, t, e) : Zt.nextTick(Up, t), t.destroyed || (t[J2] = !0));
}
var ji = {
  construct: ix,
  destroyer: cx,
  destroy: tx,
  undestroy: rx,
  errorOrDestroy: hu
};
const { ArrayIsArray: ux, ObjectSetPrototypeOf: Dp } = Te, { EventEmitter: ca } = Cs;
function ua(t) {
  ca.call(this, t);
}
Dp(ua.prototype, ca.prototype);
Dp(ua, ca);
ua.prototype.pipe = function(t, e) {
  const n = this;
  function r(f) {
    t.writable && t.write(f) === !1 && n.pause && n.pause();
  }
  n.on("data", r);
  function i() {
    n.readable && n.resume && n.resume();
  }
  t.on("drain", i), !t._isStdio && (!e || e.end !== !1) && (n.on("end", o), n.on("close", a));
  let s = !1;
  function o() {
    s || (s = !0, t.end());
  }
  function a() {
    s || (s = !0, typeof t.destroy == "function" && t.destroy());
  }
  function c(f) {
    u(), ca.listenerCount(this, "error") === 0 && this.emit("error", f);
  }
  pu(n, "error", c), pu(t, "error", c);
  function u() {
    n.removeListener("data", r), t.removeListener("drain", i), n.removeListener("end", o), n.removeListener("close", a), n.removeListener("error", c), t.removeListener("error", c), n.removeListener("end", u), n.removeListener("close", u), t.removeListener("close", u);
  }
  return n.on("end", u), n.on("close", u), t.on("close", u), t.emit("pipe", n), t;
};
function pu(t, e, n) {
  if (typeof t.prependListener == "function") return t.prependListener(e, n);
  !t._events || !t._events[e] ? t.on(e, n) : ux(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]];
}
var Sf = {
  Stream: ua,
  prependListener: pu
}, jp = { exports: {} };
(function(t) {
  const { SymbolDispose: e } = Te, { AbortError: n, codes: r } = ft, { isNodeStream: i, isWebStream: s, kControllerErrorFunction: o } = Pn, a = Xn, { ERR_INVALID_ARG_TYPE: c } = r;
  let u;
  const f = (l, d) => {
    if (typeof l != "object" || !("aborted" in l))
      throw new c(d, "AbortSignal", l);
  };
  t.exports.addAbortSignal = function(d, y) {
    if (f(d, "signal"), !i(y) && !s(y))
      throw new c("stream", ["ReadableStream", "WritableStream", "Stream"], y);
    return t.exports.addAbortSignalNoValidate(d, y);
  }, t.exports.addAbortSignalNoValidate = function(l, d) {
    if (typeof l != "object" || !("aborted" in l))
      return d;
    const y = i(d) ? () => {
      d.destroy(
        new n(void 0, {
          cause: l.reason
        })
      );
    } : () => {
      d[o](
        new n(void 0, {
          cause: l.reason
        })
      );
    };
    if (l.aborted)
      y();
    else {
      u = u || nt.addAbortListener;
      const w = u(l, y);
      a(d, w[e]);
    }
    return d;
  };
})(jp);
var fa = jp.exports;
const { StringPrototypeSlice: Od, SymbolIterator: fx, TypedArrayPrototypeSet: ho, Uint8Array: lx } = Te, { Buffer: cc } = Or, { inspect: dx } = nt;
var hx = class {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  push(e) {
    const n = {
      data: e,
      next: null
    };
    this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
  }
  unshift(e) {
    const n = {
      data: e,
      next: this.head
    };
    this.length === 0 && (this.tail = n), this.head = n, ++this.length;
  }
  shift() {
    if (this.length === 0) return;
    const e = this.head.data;
    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
  }
  clear() {
    this.head = this.tail = null, this.length = 0;
  }
  join(e) {
    if (this.length === 0) return "";
    let n = this.head, r = "" + n.data;
    for (; (n = n.next) !== null; ) r += e + n.data;
    return r;
  }
  concat(e) {
    if (this.length === 0) return cc.alloc(0);
    const n = cc.allocUnsafe(e >>> 0);
    let r = this.head, i = 0;
    for (; r; )
      ho(n, r.data, i), i += r.data.length, r = r.next;
    return n;
  }
  // Consumes a specified amount of bytes or characters from the buffered data.
  consume(e, n) {
    const r = this.head.data;
    if (e < r.length) {
      const i = r.slice(0, e);
      return this.head.data = r.slice(e), i;
    }
    return e === r.length ? this.shift() : n ? this._getString(e) : this._getBuffer(e);
  }
  first() {
    return this.head.data;
  }
  *[fx]() {
    for (let e = this.head; e; e = e.next)
      yield e.data;
  }
  // Consumes a specified amount of characters from the buffered data.
  _getString(e) {
    let n = "", r = this.head, i = 0;
    do {
      const s = r.data;
      if (e > s.length)
        n += s, e -= s.length;
      else {
        e === s.length ? (n += s, ++i, r.next ? this.head = r.next : this.head = this.tail = null) : (n += Od(s, 0, e), this.head = r, r.data = Od(s, e));
        break;
      }
      ++i;
    } while ((r = r.next) !== null);
    return this.length -= i, n;
  }
  // Consumes a specified amount of bytes from the buffered data.
  _getBuffer(e) {
    const n = cc.allocUnsafe(e), r = e;
    let i = this.head, s = 0;
    do {
      const o = i.data;
      if (e > o.length)
        ho(n, o, r - e), e -= o.length;
      else {
        e === o.length ? (ho(n, o, r - e), ++s, i.next ? this.head = i.next : this.head = this.tail = null) : (ho(n, new lx(o.buffer, o.byteOffset, e), r - e), this.head = i, i.data = o.slice(e));
        break;
      }
      ++s;
    } while ((i = i.next) !== null);
    return this.length -= s, n;
  }
  // Make sure the linked list only shows the minimal necessary information.
  [Symbol.for("nodejs.util.inspect.custom")](e, n) {
    return dx(this, {
      ...n,
      // Only inspect one level.
      depth: 0,
      // It should not recurse.
      customInspect: !1
    });
  }
};
const { MathFloor: px, NumberIsInteger: gx } = Te, { validateInteger: yx } = Ms, { ERR_INVALID_ARG_VALUE: bx } = ft.codes;
let Hp = 16 * 1024, Gp = 16;
function mx(t, e, n) {
  return t.highWaterMark != null ? t.highWaterMark : e ? t[n] : null;
}
function qp(t) {
  return t ? Gp : Hp;
}
function wx(t, e) {
  yx(e, "value", 0), t ? Gp = e : Hp = e;
}
function Ex(t, e, n, r) {
  const i = mx(e, r, n);
  if (i != null) {
    if (!gx(i) || i < 0) {
      const s = r ? `options.${n}` : "options.highWaterMark";
      throw new bx(s, i);
    }
    return px(i);
  }
  return qp(t.objectMode);
}
var la = {
  getHighWaterMark: Ex,
  getDefaultHighWaterMark: qp,
  setDefaultHighWaterMark: wx
};
const Cd = Jn, { PromisePrototypeThen: xx, SymbolAsyncIterator: kd, SymbolIterator: Ld } = Te, { Buffer: vx } = Or, { ERR_INVALID_ARG_TYPE: Sx, ERR_STREAM_NULL_VALUES: _x } = ft.codes;
function Ax(t, e, n) {
  let r;
  if (typeof e == "string" || e instanceof vx)
    return new t({
      objectMode: !0,
      ...n,
      read() {
        this.push(e), this.push(null);
      }
    });
  let i;
  if (e && e[kd])
    i = !0, r = e[kd]();
  else if (e && e[Ld])
    i = !1, r = e[Ld]();
  else
    throw new Sx("iterable", ["Iterable"], e);
  const s = new t({
    objectMode: !0,
    highWaterMark: 1,
    // TODO(ronag): What options should be allowed?
    ...n
  });
  let o = !1;
  s._read = function() {
    o || (o = !0, c());
  }, s._destroy = function(u, f) {
    xx(
      a(u),
      () => Cd.nextTick(f, u),
      // nextTick is here in case cb throws
      (l) => Cd.nextTick(f, l || u)
    );
  };
  async function a(u) {
    const f = u != null, l = typeof r.throw == "function";
    if (f && l) {
      const { value: d, done: y } = await r.throw(u);
      if (await d, y)
        return;
    }
    if (typeof r.return == "function") {
      const { value: d } = await r.return();
      await d;
    }
  }
  async function c() {
    for (; ; ) {
      try {
        const { value: u, done: f } = i ? await r.next() : r.next();
        if (f)
          s.push(null);
        else {
          const l = u && typeof u.then == "function" ? await u : u;
          if (l === null)
            throw o = !1, new _x();
          if (s.push(l))
            continue;
          o = !1;
        }
      } catch (u) {
        s.destroy(u);
      }
      break;
    }
  }
  return s;
}
var zp = Ax, uc, Md;
function da() {
  if (Md) return uc;
  Md = 1;
  const t = Jn, {
    ArrayPrototypeIndexOf: e,
    NumberIsInteger: n,
    NumberIsNaN: r,
    NumberParseInt: i,
    ObjectDefineProperties: s,
    ObjectKeys: o,
    ObjectSetPrototypeOf: a,
    Promise: c,
    SafeSet: u,
    SymbolAsyncDispose: f,
    SymbolAsyncIterator: l,
    Symbol: d
  } = Te;
  uc = se, se.ReadableState = nn;
  const { EventEmitter: y } = Cs, { Stream: w, prependListener: h } = Sf, { Buffer: g } = Or, { addAbortSignal: b } = fa, E = Xn;
  let S = nt.debuglog("stream", (T) => {
    S = T;
  });
  const N = hx, O = ji, { getHighWaterMark: C, getDefaultHighWaterMark: L } = la, {
    aggregateTwoErrors: p,
    codes: {
      ERR_INVALID_ARG_TYPE: x,
      ERR_METHOD_NOT_IMPLEMENTED: _,
      ERR_OUT_OF_RANGE: P,
      ERR_STREAM_PUSH_AFTER_EOF: I,
      ERR_STREAM_UNSHIFT_AFTER_END_EVENT: A
    },
    AbortError: R
  } = ft, { validateObject: m } = Ms, v = d("kPaused"), { StringDecoder: B } = wm, $ = zp;
  a(se.prototype, w.prototype), a(se, w);
  const M = () => {
  }, { errorOrDestroy: D } = O, H = 1, V = 2, q = 4, Z = 8, Y = 16, ee = 32, ie = 64, be = 128, ge = 256, Ie = 512, ye = 1024, de = 2048, F = 4096, U = 8192, j = 16384, J = 32768, Q = 65536, Se = 1 << 17, Pe = 1 << 18;
  function Ee(T) {
    return {
      enumerable: !1,
      get() {
        return (this.state & T) !== 0;
      },
      set(k) {
        k ? this.state |= T : this.state &= ~T;
      }
    };
  }
  s(nn.prototype, {
    objectMode: Ee(H),
    ended: Ee(V),
    endEmitted: Ee(q),
    reading: Ee(Z),
    // Stream is still being constructed and cannot be
    // destroyed until construction finished or failed.
    // Async construction is opt in, therefore we start as
    // constructed.
    constructed: Ee(Y),
    // A flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    sync: Ee(ee),
    // Whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    needReadable: Ee(ie),
    emittedReadable: Ee(be),
    readableListening: Ee(ge),
    resumeScheduled: Ee(Ie),
    // True if the error was already emitted and should not be thrown again.
    errorEmitted: Ee(ye),
    emitClose: Ee(de),
    autoDestroy: Ee(F),
    // Has it been destroyed.
    destroyed: Ee(U),
    // Indicates whether the stream has finished destroying.
    closed: Ee(j),
    // True if close has been emitted or would have been emitted
    // depending on emitClose.
    closeEmitted: Ee(J),
    multiAwaitDrain: Ee(Q),
    // If true, a maybeReadMore has been scheduled.
    readingMore: Ee(Se),
    dataEmitted: Ee(Pe)
  });
  function nn(T, k, W) {
    typeof W != "boolean" && (W = k instanceof vn()), this.state = de | F | Y | ee, T && T.objectMode && (this.state |= H), W && T && T.readableObjectMode && (this.state |= H), this.highWaterMark = T ? C(this, T, "readableHighWaterMark", W) : L(!1), this.buffer = new N(), this.length = 0, this.pipes = [], this.flowing = null, this[v] = null, T && T.emitClose === !1 && (this.state &= ~de), T && T.autoDestroy === !1 && (this.state &= ~F), this.errored = null, this.defaultEncoding = T && T.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, T && T.encoding && (this.decoder = new B(T.encoding), this.encoding = T.encoding);
  }
  function se(T) {
    if (!(this instanceof se)) return new se(T);
    const k = this instanceof vn();
    this._readableState = new nn(T, this, k), T && (typeof T.read == "function" && (this._read = T.read), typeof T.destroy == "function" && (this._destroy = T.destroy), typeof T.construct == "function" && (this._construct = T.construct), T.signal && !k && b(T.signal, this)), w.call(this, T), O.construct(this, () => {
      this._readableState.needReadable && oo(this, this._readableState);
    });
  }
  se.prototype.destroy = O.destroy, se.prototype._undestroy = O.undestroy, se.prototype._destroy = function(T, k) {
    k(T);
  }, se.prototype[y.captureRejectionSymbol] = function(T) {
    this.destroy(T);
  }, se.prototype[f] = function() {
    let T;
    return this.destroyed || (T = this.readableEnded ? null : new R(), this.destroy(T)), new c((k, W) => E(this, (K) => K && K !== T ? W(K) : k(null)));
  }, se.prototype.push = function(T, k) {
    return Tn(this, T, k, !1);
  }, se.prototype.unshift = function(T, k) {
    return Tn(this, T, k, !0);
  };
  function Tn(T, k, W, K) {
    S("readableAddChunk", k);
    const X = T._readableState;
    let Qe;
    if (X.state & H || (typeof k == "string" ? (W = W || X.defaultEncoding, X.encoding !== W && (K && X.encoding ? k = g.from(k, W).toString(X.encoding) : (k = g.from(k, W), W = ""))) : k instanceof g ? W = "" : w._isUint8Array(k) ? (k = w._uint8ArrayToBuffer(k), W = "") : k != null && (Qe = new x("chunk", ["string", "Buffer", "Uint8Array"], k))), Qe)
      D(T, Qe);
    else if (k === null)
      X.state &= ~Z, sm(T, X);
    else if (X.state & H || k && k.length > 0)
      if (K)
        if (X.state & q) D(T, new A());
        else {
          if (X.destroyed || X.errored) return !1;
          Ua(T, X, k, !0);
        }
      else if (X.ended)
        D(T, new I());
      else {
        if (X.destroyed || X.errored)
          return !1;
        X.state &= ~Z, X.decoder && !W ? (k = X.decoder.write(k), X.objectMode || k.length !== 0 ? Ua(T, X, k, !1) : oo(T, X)) : Ua(T, X, k, !1);
      }
    else K || (X.state &= ~Z, oo(T, X));
    return !X.ended && (X.length < X.highWaterMark || X.length === 0);
  }
  function Ua(T, k, W, K) {
    k.flowing && k.length === 0 && !k.sync && T.listenerCount("data") > 0 ? (k.state & Q ? k.awaitDrainWriters.clear() : k.awaitDrainWriters = null, k.dataEmitted = !0, T.emit("data", W)) : (k.length += k.objectMode ? 1 : W.length, K ? k.buffer.unshift(W) : k.buffer.push(W), k.state & ie && so(T)), oo(T, k);
  }
  se.prototype.isPaused = function() {
    const T = this._readableState;
    return T[v] === !0 || T.flowing === !1;
  }, se.prototype.setEncoding = function(T) {
    const k = new B(T);
    this._readableState.decoder = k, this._readableState.encoding = this._readableState.decoder.encoding;
    const W = this._readableState.buffer;
    let K = "";
    for (const X of W)
      K += k.write(X);
    return W.clear(), K !== "" && W.push(K), this._readableState.length = K.length, this;
  };
  const rm = 1073741824;
  function im(T) {
    if (T > rm)
      throw new P("size", "<= 1GiB", T);
    return T--, T |= T >>> 1, T |= T >>> 2, T |= T >>> 4, T |= T >>> 8, T |= T >>> 16, T++, T;
  }
  function Il(T, k) {
    return T <= 0 || k.length === 0 && k.ended ? 0 : k.state & H ? 1 : r(T) ? k.flowing && k.length ? k.buffer.first().length : k.length : T <= k.length ? T : k.ended ? k.length : 0;
  }
  se.prototype.read = function(T) {
    S("read", T), T === void 0 ? T = NaN : n(T) || (T = i(T, 10));
    const k = this._readableState, W = T;
    if (T > k.highWaterMark && (k.highWaterMark = im(T)), T !== 0 && (k.state &= ~be), T === 0 && k.needReadable && ((k.highWaterMark !== 0 ? k.length >= k.highWaterMark : k.length > 0) || k.ended))
      return S("read: emitReadable", k.length, k.ended), k.length === 0 && k.ended ? Da(this) : so(this), null;
    if (T = Il(T, k), T === 0 && k.ended)
      return k.length === 0 && Da(this), null;
    let K = (k.state & ie) !== 0;
    if (S("need readable", K), (k.length === 0 || k.length - T < k.highWaterMark) && (K = !0, S("length less than watermark", K)), k.ended || k.reading || k.destroyed || k.errored || !k.constructed)
      K = !1, S("reading, ended or constructing", K);
    else if (K) {
      S("do read"), k.state |= Z | ee, k.length === 0 && (k.state |= ie);
      try {
        this._read(k.highWaterMark);
      } catch (Qe) {
        D(this, Qe);
      }
      k.state &= ~ee, k.reading || (T = Il(W, k));
    }
    let X;
    return T > 0 ? X = Nl(T, k) : X = null, X === null ? (k.needReadable = k.length <= k.highWaterMark, T = 0) : (k.length -= T, k.multiAwaitDrain ? k.awaitDrainWriters.clear() : k.awaitDrainWriters = null), k.length === 0 && (k.ended || (k.needReadable = !0), W !== T && k.ended && Da(this)), X !== null && !k.errorEmitted && !k.closeEmitted && (k.dataEmitted = !0, this.emit("data", X)), X;
  };
  function sm(T, k) {
    if (S("onEofChunk"), !k.ended) {
      if (k.decoder) {
        const W = k.decoder.end();
        W && W.length && (k.buffer.push(W), k.length += k.objectMode ? 1 : W.length);
      }
      k.ended = !0, k.sync ? so(T) : (k.needReadable = !1, k.emittedReadable = !0, Pl(T));
    }
  }
  function so(T) {
    const k = T._readableState;
    S("emitReadable", k.needReadable, k.emittedReadable), k.needReadable = !1, k.emittedReadable || (S("emitReadable", k.flowing), k.emittedReadable = !0, t.nextTick(Pl, T));
  }
  function Pl(T) {
    const k = T._readableState;
    S("emitReadable_", k.destroyed, k.length, k.ended), !k.destroyed && !k.errored && (k.length || k.ended) && (T.emit("readable"), k.emittedReadable = !1), k.needReadable = !k.flowing && !k.ended && k.length <= k.highWaterMark, Tl(T);
  }
  function oo(T, k) {
    !k.readingMore && k.constructed && (k.readingMore = !0, t.nextTick(om, T, k));
  }
  function om(T, k) {
    for (; !k.reading && !k.ended && (k.length < k.highWaterMark || k.flowing && k.length === 0); ) {
      const W = k.length;
      if (S("maybeReadMore read 0"), T.read(0), W === k.length)
        break;
    }
    k.readingMore = !1;
  }
  se.prototype._read = function(T) {
    throw new _("_read()");
  }, se.prototype.pipe = function(T, k) {
    const W = this, K = this._readableState;
    K.pipes.length === 1 && (K.multiAwaitDrain || (K.multiAwaitDrain = !0, K.awaitDrainWriters = new u(K.awaitDrainWriters ? [K.awaitDrainWriters] : []))), K.pipes.push(T), S("pipe count=%d opts=%j", K.pipes.length, k);
    const Qe = (!k || k.end !== !1) && T !== t.stdout && T !== t.stderr ? Ol : Wi;
    K.endEmitted ? t.nextTick(Qe) : W.once("end", Qe), T.on("unpipe", gt);
    function gt(tr, rn) {
      S("onunpipe"), tr === W && rn && rn.hasUnpiped === !1 && (rn.hasUnpiped = !0, pm());
    }
    function Ol() {
      S("onend"), T.end();
    }
    let er, Cl = !1;
    function pm() {
      S("cleanup"), T.removeListener("close", Ga), T.removeListener("finish", qa), er && T.removeListener("drain", er), T.removeListener("error", Ha), T.removeListener("unpipe", gt), W.removeListener("end", Ol), W.removeListener("end", Wi), W.removeListener("data", Ll), Cl = !0, er && K.awaitDrainWriters && (!T._writableState || T._writableState.needDrain) && er();
    }
    function kl() {
      Cl || (K.pipes.length === 1 && K.pipes[0] === T ? (S("false write response, pause", 0), K.awaitDrainWriters = T, K.multiAwaitDrain = !1) : K.pipes.length > 1 && K.pipes.includes(T) && (S("false write response, pause", K.awaitDrainWriters.size), K.awaitDrainWriters.add(T)), W.pause()), er || (er = am(W, T), T.on("drain", er));
    }
    W.on("data", Ll);
    function Ll(tr) {
      S("ondata");
      const rn = T.write(tr);
      S("dest.write", rn), rn === !1 && kl();
    }
    function Ha(tr) {
      if (S("onerror", tr), Wi(), T.removeListener("error", Ha), T.listenerCount("error") === 0) {
        const rn = T._writableState || T._readableState;
        rn && !rn.errorEmitted ? D(T, tr) : T.emit("error", tr);
      }
    }
    h(T, "error", Ha);
    function Ga() {
      T.removeListener("finish", qa), Wi();
    }
    T.once("close", Ga);
    function qa() {
      S("onfinish"), T.removeListener("close", Ga), Wi();
    }
    T.once("finish", qa);
    function Wi() {
      S("unpipe"), W.unpipe(T);
    }
    return T.emit("pipe", W), T.writableNeedDrain === !0 ? kl() : K.flowing || (S("pipe resume"), W.resume()), T;
  };
  function am(T, k) {
    return function() {
      const K = T._readableState;
      K.awaitDrainWriters === k ? (S("pipeOnDrain", 1), K.awaitDrainWriters = null) : K.multiAwaitDrain && (S("pipeOnDrain", K.awaitDrainWriters.size), K.awaitDrainWriters.delete(k)), (!K.awaitDrainWriters || K.awaitDrainWriters.size === 0) && T.listenerCount("data") && T.resume();
    };
  }
  se.prototype.unpipe = function(T) {
    const k = this._readableState, W = {
      hasUnpiped: !1
    };
    if (k.pipes.length === 0) return this;
    if (!T) {
      const X = k.pipes;
      k.pipes = [], this.pause();
      for (let Qe = 0; Qe < X.length; Qe++)
        X[Qe].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    const K = e(k.pipes, T);
    return K === -1 ? this : (k.pipes.splice(K, 1), k.pipes.length === 0 && this.pause(), T.emit("unpipe", this, W), this);
  }, se.prototype.on = function(T, k) {
    const W = w.prototype.on.call(this, T, k), K = this._readableState;
    return T === "data" ? (K.readableListening = this.listenerCount("readable") > 0, K.flowing !== !1 && this.resume()) : T === "readable" && !K.endEmitted && !K.readableListening && (K.readableListening = K.needReadable = !0, K.flowing = !1, K.emittedReadable = !1, S("on readable", K.length, K.reading), K.length ? so(this) : K.reading || t.nextTick(cm, this)), W;
  }, se.prototype.addListener = se.prototype.on, se.prototype.removeListener = function(T, k) {
    const W = w.prototype.removeListener.call(this, T, k);
    return T === "readable" && t.nextTick(Bl, this), W;
  }, se.prototype.off = se.prototype.removeListener, se.prototype.removeAllListeners = function(T) {
    const k = w.prototype.removeAllListeners.apply(this, arguments);
    return (T === "readable" || T === void 0) && t.nextTick(Bl, this), k;
  };
  function Bl(T) {
    const k = T._readableState;
    k.readableListening = T.listenerCount("readable") > 0, k.resumeScheduled && k[v] === !1 ? k.flowing = !0 : T.listenerCount("data") > 0 ? T.resume() : k.readableListening || (k.flowing = null);
  }
  function cm(T) {
    S("readable nexttick read 0"), T.read(0);
  }
  se.prototype.resume = function() {
    const T = this._readableState;
    return T.flowing || (S("resume"), T.flowing = !T.readableListening, um(this, T)), T[v] = !1, this;
  };
  function um(T, k) {
    k.resumeScheduled || (k.resumeScheduled = !0, t.nextTick(fm, T, k));
  }
  function fm(T, k) {
    S("resume", k.reading), k.reading || T.read(0), k.resumeScheduled = !1, T.emit("resume"), Tl(T), k.flowing && !k.reading && T.read(0);
  }
  se.prototype.pause = function() {
    return S("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (S("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[v] = !0, this;
  };
  function Tl(T) {
    const k = T._readableState;
    for (S("flow", k.flowing); k.flowing && T.read() !== null; ) ;
  }
  se.prototype.wrap = function(T) {
    let k = !1;
    T.on("data", (K) => {
      !this.push(K) && T.pause && (k = !0, T.pause());
    }), T.on("end", () => {
      this.push(null);
    }), T.on("error", (K) => {
      D(this, K);
    }), T.on("close", () => {
      this.destroy();
    }), T.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      k && T.resume && (k = !1, T.resume());
    };
    const W = o(T);
    for (let K = 1; K < W.length; K++) {
      const X = W[K];
      this[X] === void 0 && typeof T[X] == "function" && (this[X] = T[X].bind(T));
    }
    return this;
  }, se.prototype[l] = function() {
    return $l(this);
  }, se.prototype.iterator = function(T) {
    return T !== void 0 && m(T, "options"), $l(this, T);
  };
  function $l(T, k) {
    typeof T.read != "function" && (T = se.wrap(T, {
      objectMode: !0
    }));
    const W = lm(T, k);
    return W.stream = T, W;
  }
  async function* lm(T, k) {
    let W = M;
    function K(gt) {
      this === T ? (W(), W = M) : W = gt;
    }
    T.on("readable", K);
    let X;
    const Qe = E(
      T,
      {
        writable: !1
      },
      (gt) => {
        X = gt ? p(X, gt) : null, W(), W = M;
      }
    );
    try {
      for (; ; ) {
        const gt = T.destroyed ? null : T.read();
        if (gt !== null)
          yield gt;
        else {
          if (X)
            throw X;
          if (X === null)
            return;
          await new c(K);
        }
      }
    } catch (gt) {
      throw X = p(X, gt), X;
    } finally {
      (X || (k == null ? void 0 : k.destroyOnReturn) !== !1) && (X === void 0 || T._readableState.autoDestroy) ? O.destroyer(T, null) : (T.off("readable", K), Qe());
    }
  }
  s(se.prototype, {
    readable: {
      __proto__: null,
      get() {
        const T = this._readableState;
        return !!T && T.readable !== !1 && !T.destroyed && !T.errorEmitted && !T.endEmitted;
      },
      set(T) {
        this._readableState && (this._readableState.readable = !!T);
      }
    },
    readableDidRead: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.dataEmitted;
      }
    },
    readableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
      }
    },
    readableHighWaterMark: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.highWaterMark;
      }
    },
    readableBuffer: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState && this._readableState.buffer;
      }
    },
    readableFlowing: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return this._readableState.flowing;
      },
      set: function(T) {
        this._readableState && (this._readableState.flowing = T);
      }
    },
    readableLength: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState.length;
      }
    },
    readableObjectMode: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.objectMode : !1;
      }
    },
    readableEncoding: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.encoding : null;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.errored : null;
      }
    },
    closed: {
      __proto__: null,
      get() {
        return this._readableState ? this._readableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.destroyed : !1;
      },
      set(T) {
        this._readableState && (this._readableState.destroyed = T);
      }
    },
    readableEnded: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._readableState ? this._readableState.endEmitted : !1;
      }
    }
  }), s(nn.prototype, {
    // Legacy getter for `pipesCount`.
    pipesCount: {
      __proto__: null,
      get() {
        return this.pipes.length;
      }
    },
    // Legacy property for `paused`.
    paused: {
      __proto__: null,
      get() {
        return this[v] !== !1;
      },
      set(T) {
        this[v] = !!T;
      }
    }
  }), se._fromList = Nl;
  function Nl(T, k) {
    if (k.length === 0) return null;
    let W;
    return k.objectMode ? W = k.buffer.shift() : !T || T >= k.length ? (k.decoder ? W = k.buffer.join("") : k.buffer.length === 1 ? W = k.buffer.first() : W = k.buffer.concat(k.length), k.buffer.clear()) : W = k.buffer.consume(T, k.decoder), W;
  }
  function Da(T) {
    const k = T._readableState;
    S("endReadable", k.endEmitted), k.endEmitted || (k.ended = !0, t.nextTick(dm, k, T));
  }
  function dm(T, k) {
    if (S("endReadableNT", T.endEmitted, T.length), !T.errored && !T.closeEmitted && !T.endEmitted && T.length === 0) {
      if (T.endEmitted = !0, k.emit("end"), k.writable && k.allowHalfOpen === !1)
        t.nextTick(hm, k);
      else if (T.autoDestroy) {
        const W = k._writableState;
        (!W || W.autoDestroy && // We don't expect the writable to ever 'finish'
        // if writable is explicitly set to false.
        (W.finished || W.writable === !1)) && k.destroy();
      }
    }
  }
  function hm(T) {
    T.writable && !T.writableEnded && !T.destroyed && T.end();
  }
  se.from = function(T, k) {
    return $(se, T, k);
  };
  let ja;
  function Rl() {
    return ja === void 0 && (ja = {}), ja;
  }
  return se.fromWeb = function(T, k) {
    return Rl().newStreamReadableFromReadableStream(T, k);
  }, se.toWeb = function(T, k) {
    return Rl().newReadableStreamFromStreamReadable(T, k);
  }, se.wrap = function(T, k) {
    var W, K;
    return new se({
      objectMode: (W = (K = T.readableObjectMode) !== null && K !== void 0 ? K : T.objectMode) !== null && W !== void 0 ? W : !0,
      ...k,
      destroy(X, Qe) {
        O.destroyer(T, X), Qe(X);
      }
    }).wrap(T);
  }, uc;
}
var fc, Fd;
function _f() {
  if (Fd) return fc;
  Fd = 1;
  const t = Jn, {
    ArrayPrototypeSlice: e,
    Error: n,
    FunctionPrototypeSymbolHasInstance: r,
    ObjectDefineProperty: i,
    ObjectDefineProperties: s,
    ObjectSetPrototypeOf: o,
    StringPrototypeToLowerCase: a,
    Symbol: c,
    SymbolHasInstance: u
  } = Te;
  fc = m, m.WritableState = A;
  const { EventEmitter: f } = Cs, l = Sf.Stream, { Buffer: d } = Or, y = ji, { addAbortSignal: w } = fa, { getHighWaterMark: h, getDefaultHighWaterMark: g } = la, {
    ERR_INVALID_ARG_TYPE: b,
    ERR_METHOD_NOT_IMPLEMENTED: E,
    ERR_MULTIPLE_CALLBACK: S,
    ERR_STREAM_CANNOT_PIPE: N,
    ERR_STREAM_DESTROYED: O,
    ERR_STREAM_ALREADY_FINISHED: C,
    ERR_STREAM_NULL_VALUES: L,
    ERR_STREAM_WRITE_AFTER_END: p,
    ERR_UNKNOWN_ENCODING: x
  } = ft.codes, { errorOrDestroy: _ } = y;
  o(m.prototype, l.prototype), o(m, l);
  function P() {
  }
  const I = c("kOnFinished");
  function A(F, U, j) {
    typeof j != "boolean" && (j = U instanceof vn()), this.objectMode = !!(F && F.objectMode), j && (this.objectMode = this.objectMode || !!(F && F.writableObjectMode)), this.highWaterMark = F ? h(this, F, "writableHighWaterMark", j) : g(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    const J = !!(F && F.decodeStrings === !1);
    this.decodeStrings = !J, this.defaultEncoding = F && F.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = D.bind(void 0, U), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, R(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !F || F.emitClose !== !1, this.autoDestroy = !F || F.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[I] = [];
  }
  function R(F) {
    F.buffered = [], F.bufferedIndex = 0, F.allBuffers = !0, F.allNoop = !0;
  }
  A.prototype.getBuffer = function() {
    return e(this.buffered, this.bufferedIndex);
  }, i(A.prototype, "bufferedRequestCount", {
    __proto__: null,
    get() {
      return this.buffered.length - this.bufferedIndex;
    }
  });
  function m(F) {
    const U = this instanceof vn();
    if (!U && !r(m, this)) return new m(F);
    this._writableState = new A(F, this, U), F && (typeof F.write == "function" && (this._write = F.write), typeof F.writev == "function" && (this._writev = F.writev), typeof F.destroy == "function" && (this._destroy = F.destroy), typeof F.final == "function" && (this._final = F.final), typeof F.construct == "function" && (this._construct = F.construct), F.signal && w(F.signal, this)), l.call(this, F), y.construct(this, () => {
      const j = this._writableState;
      j.writing || Z(this, j), be(this, j);
    });
  }
  i(m, u, {
    __proto__: null,
    value: function(F) {
      return r(this, F) ? !0 : this !== m ? !1 : F && F._writableState instanceof A;
    }
  }), m.prototype.pipe = function() {
    _(this, new N());
  };
  function v(F, U, j, J) {
    const Q = F._writableState;
    if (typeof j == "function")
      J = j, j = Q.defaultEncoding;
    else {
      if (!j) j = Q.defaultEncoding;
      else if (j !== "buffer" && !d.isEncoding(j)) throw new x(j);
      typeof J != "function" && (J = P);
    }
    if (U === null)
      throw new L();
    if (!Q.objectMode)
      if (typeof U == "string")
        Q.decodeStrings !== !1 && (U = d.from(U, j), j = "buffer");
      else if (U instanceof d)
        j = "buffer";
      else if (l._isUint8Array(U))
        U = l._uint8ArrayToBuffer(U), j = "buffer";
      else
        throw new b("chunk", ["string", "Buffer", "Uint8Array"], U);
    let Se;
    return Q.ending ? Se = new p() : Q.destroyed && (Se = new O("write")), Se ? (t.nextTick(J, Se), _(F, Se, !0), Se) : (Q.pendingcb++, B(F, Q, U, j, J));
  }
  m.prototype.write = function(F, U, j) {
    return v(this, F, U, j) === !0;
  }, m.prototype.cork = function() {
    this._writableState.corked++;
  }, m.prototype.uncork = function() {
    const F = this._writableState;
    F.corked && (F.corked--, F.writing || Z(this, F));
  }, m.prototype.setDefaultEncoding = function(U) {
    if (typeof U == "string" && (U = a(U)), !d.isEncoding(U)) throw new x(U);
    return this._writableState.defaultEncoding = U, this;
  };
  function B(F, U, j, J, Q) {
    const Se = U.objectMode ? 1 : j.length;
    U.length += Se;
    const Pe = U.length < U.highWaterMark;
    return Pe || (U.needDrain = !0), U.writing || U.corked || U.errored || !U.constructed ? (U.buffered.push({
      chunk: j,
      encoding: J,
      callback: Q
    }), U.allBuffers && J !== "buffer" && (U.allBuffers = !1), U.allNoop && Q !== P && (U.allNoop = !1)) : (U.writelen = Se, U.writecb = Q, U.writing = !0, U.sync = !0, F._write(j, J, U.onwrite), U.sync = !1), Pe && !U.errored && !U.destroyed;
  }
  function $(F, U, j, J, Q, Se, Pe) {
    U.writelen = J, U.writecb = Pe, U.writing = !0, U.sync = !0, U.destroyed ? U.onwrite(new O("write")) : j ? F._writev(Q, U.onwrite) : F._write(Q, Se, U.onwrite), U.sync = !1;
  }
  function M(F, U, j, J) {
    --U.pendingcb, J(j), q(U), _(F, j);
  }
  function D(F, U) {
    const j = F._writableState, J = j.sync, Q = j.writecb;
    if (typeof Q != "function") {
      _(F, new S());
      return;
    }
    j.writing = !1, j.writecb = null, j.length -= j.writelen, j.writelen = 0, U ? (U.stack, j.errored || (j.errored = U), F._readableState && !F._readableState.errored && (F._readableState.errored = U), J ? t.nextTick(M, F, j, U, Q) : M(F, j, U, Q)) : (j.buffered.length > j.bufferedIndex && Z(F, j), J ? j.afterWriteTickInfo !== null && j.afterWriteTickInfo.cb === Q ? j.afterWriteTickInfo.count++ : (j.afterWriteTickInfo = {
      count: 1,
      cb: Q,
      stream: F,
      state: j
    }, t.nextTick(H, j.afterWriteTickInfo)) : V(F, j, 1, Q));
  }
  function H({ stream: F, state: U, count: j, cb: J }) {
    return U.afterWriteTickInfo = null, V(F, U, j, J);
  }
  function V(F, U, j, J) {
    for (!U.ending && !F.destroyed && U.length === 0 && U.needDrain && (U.needDrain = !1, F.emit("drain")); j-- > 0; )
      U.pendingcb--, J();
    U.destroyed && q(U), be(F, U);
  }
  function q(F) {
    if (F.writing)
      return;
    for (let Q = F.bufferedIndex; Q < F.buffered.length; ++Q) {
      var U;
      const { chunk: Se, callback: Pe } = F.buffered[Q], Ee = F.objectMode ? 1 : Se.length;
      F.length -= Ee, Pe(
        (U = F.errored) !== null && U !== void 0 ? U : new O("write")
      );
    }
    const j = F[I].splice(0);
    for (let Q = 0; Q < j.length; Q++) {
      var J;
      j[Q](
        (J = F.errored) !== null && J !== void 0 ? J : new O("end")
      );
    }
    R(F);
  }
  function Z(F, U) {
    if (U.corked || U.bufferProcessing || U.destroyed || !U.constructed)
      return;
    const { buffered: j, bufferedIndex: J, objectMode: Q } = U, Se = j.length - J;
    if (!Se)
      return;
    let Pe = J;
    if (U.bufferProcessing = !0, Se > 1 && F._writev) {
      U.pendingcb -= Se - 1;
      const Ee = U.allNoop ? P : (se) => {
        for (let Tn = Pe; Tn < j.length; ++Tn)
          j[Tn].callback(se);
      }, nn = U.allNoop && Pe === 0 ? j : e(j, Pe);
      nn.allBuffers = U.allBuffers, $(F, U, !0, U.length, nn, "", Ee), R(U);
    } else {
      do {
        const { chunk: Ee, encoding: nn, callback: se } = j[Pe];
        j[Pe++] = null;
        const Tn = Q ? 1 : Ee.length;
        $(F, U, !1, Tn, Ee, nn, se);
      } while (Pe < j.length && !U.writing);
      Pe === j.length ? R(U) : Pe > 256 ? (j.splice(0, Pe), U.bufferedIndex = 0) : U.bufferedIndex = Pe;
    }
    U.bufferProcessing = !1;
  }
  m.prototype._write = function(F, U, j) {
    if (this._writev)
      this._writev(
        [
          {
            chunk: F,
            encoding: U
          }
        ],
        j
      );
    else
      throw new E("_write()");
  }, m.prototype._writev = null, m.prototype.end = function(F, U, j) {
    const J = this._writableState;
    typeof F == "function" ? (j = F, F = null, U = null) : typeof U == "function" && (j = U, U = null);
    let Q;
    if (F != null) {
      const Se = v(this, F, U);
      Se instanceof n && (Q = Se);
    }
    return J.corked && (J.corked = 1, this.uncork()), Q || (!J.errored && !J.ending ? (J.ending = !0, be(this, J, !0), J.ended = !0) : J.finished ? Q = new C("end") : J.destroyed && (Q = new O("end"))), typeof j == "function" && (Q || J.finished ? t.nextTick(j, Q) : J[I].push(j)), this;
  };
  function Y(F) {
    return F.ending && !F.destroyed && F.constructed && F.length === 0 && !F.errored && F.buffered.length === 0 && !F.finished && !F.writing && !F.errorEmitted && !F.closeEmitted;
  }
  function ee(F, U) {
    let j = !1;
    function J(Q) {
      if (j) {
        _(F, Q ?? S());
        return;
      }
      if (j = !0, U.pendingcb--, Q) {
        const Se = U[I].splice(0);
        for (let Pe = 0; Pe < Se.length; Pe++)
          Se[Pe](Q);
        _(F, Q, U.sync);
      } else Y(U) && (U.prefinished = !0, F.emit("prefinish"), U.pendingcb++, t.nextTick(ge, F, U));
    }
    U.sync = !0, U.pendingcb++;
    try {
      F._final(J);
    } catch (Q) {
      J(Q);
    }
    U.sync = !1;
  }
  function ie(F, U) {
    !U.prefinished && !U.finalCalled && (typeof F._final == "function" && !U.destroyed ? (U.finalCalled = !0, ee(F, U)) : (U.prefinished = !0, F.emit("prefinish")));
  }
  function be(F, U, j) {
    Y(U) && (ie(F, U), U.pendingcb === 0 && (j ? (U.pendingcb++, t.nextTick(
      (J, Q) => {
        Y(Q) ? ge(J, Q) : Q.pendingcb--;
      },
      F,
      U
    )) : Y(U) && (U.pendingcb++, ge(F, U))));
  }
  function ge(F, U) {
    U.pendingcb--, U.finished = !0;
    const j = U[I].splice(0);
    for (let J = 0; J < j.length; J++)
      j[J]();
    if (F.emit("finish"), U.autoDestroy) {
      const J = F._readableState;
      (!J || J.autoDestroy && // We don't expect the readable to ever 'end'
      // if readable is explicitly set to false.
      (J.endEmitted || J.readable === !1)) && F.destroy();
    }
  }
  s(m.prototype, {
    closed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.closed : !1;
      }
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.destroyed : !1;
      },
      set(F) {
        this._writableState && (this._writableState.destroyed = F);
      }
    },
    writable: {
      __proto__: null,
      get() {
        const F = this._writableState;
        return !!F && F.writable !== !1 && !F.destroyed && !F.errored && !F.ending && !F.ended;
      },
      set(F) {
        this._writableState && (this._writableState.writable = !!F);
      }
    },
    writableFinished: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.finished : !1;
      }
    },
    writableObjectMode: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.objectMode : !1;
      }
    },
    writableBuffer: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.getBuffer();
      }
    },
    writableEnded: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.ending : !1;
      }
    },
    writableNeedDrain: {
      __proto__: null,
      get() {
        const F = this._writableState;
        return F ? !F.destroyed && !F.ending && F.needDrain : !1;
      }
    },
    writableHighWaterMark: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.highWaterMark;
      }
    },
    writableCorked: {
      __proto__: null,
      get() {
        return this._writableState ? this._writableState.corked : 0;
      }
    },
    writableLength: {
      __proto__: null,
      get() {
        return this._writableState && this._writableState.length;
      }
    },
    errored: {
      __proto__: null,
      enumerable: !1,
      get() {
        return this._writableState ? this._writableState.errored : null;
      }
    },
    writableAborted: {
      __proto__: null,
      enumerable: !1,
      get: function() {
        return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
      }
    }
  });
  const Ie = y.destroy;
  m.prototype.destroy = function(F, U) {
    const j = this._writableState;
    return !j.destroyed && (j.bufferedIndex < j.buffered.length || j[I].length) && t.nextTick(q, j), Ie.call(this, F, U), this;
  }, m.prototype._undestroy = y.undestroy, m.prototype._destroy = function(F, U) {
    U(F);
  }, m.prototype[f.captureRejectionSymbol] = function(F) {
    this.destroy(F);
  };
  let ye;
  function de() {
    return ye === void 0 && (ye = {}), ye;
  }
  return m.fromWeb = function(F, U) {
    return de().newStreamWritableFromWritableStream(F, U);
  }, m.toWeb = function(F) {
    return de().newWritableStreamFromStreamWritable(F);
  }, fc;
}
var lc, Ud;
function Ix() {
  if (Ud) return lc;
  Ud = 1;
  const t = Jn, e = Or, {
    isReadable: n,
    isWritable: r,
    isIterable: i,
    isNodeStream: s,
    isReadableNodeStream: o,
    isWritableNodeStream: a,
    isDuplexNodeStream: c,
    isReadableStream: u,
    isWritableStream: f
  } = Pn, l = Xn, {
    AbortError: d,
    codes: { ERR_INVALID_ARG_TYPE: y, ERR_INVALID_RETURN_VALUE: w }
  } = ft, { destroyer: h } = ji, g = vn(), b = da(), E = _f(), { createDeferredPromise: S } = nt, N = zp, O = globalThis.Blob || e.Blob, C = typeof O < "u" ? function(A) {
    return A instanceof O;
  } : function(A) {
    return !1;
  }, L = globalThis.AbortController || ps().AbortController, { FunctionPrototypeCall: p } = Te;
  class x extends g {
    constructor(A) {
      super(A), (A == null ? void 0 : A.readable) === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), (A == null ? void 0 : A.writable) === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  }
  lc = function I(A, R) {
    if (c(A))
      return A;
    if (o(A))
      return P({
        readable: A
      });
    if (a(A))
      return P({
        writable: A
      });
    if (s(A))
      return P({
        writable: !1,
        readable: !1
      });
    if (u(A))
      return P({
        readable: b.fromWeb(A)
      });
    if (f(A))
      return P({
        writable: E.fromWeb(A)
      });
    if (typeof A == "function") {
      const { value: v, write: B, final: $, destroy: M } = _(A);
      if (i(v))
        return N(x, v, {
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          write: B,
          final: $,
          destroy: M
        });
      const D = v == null ? void 0 : v.then;
      if (typeof D == "function") {
        let H;
        const V = p(
          D,
          v,
          (q) => {
            if (q != null)
              throw new w("nully", "body", q);
          },
          (q) => {
            h(H, q);
          }
        );
        return H = new x({
          // TODO (ronag): highWaterMark?
          objectMode: !0,
          readable: !1,
          write: B,
          final(q) {
            $(async () => {
              try {
                await V, t.nextTick(q, null);
              } catch (Z) {
                t.nextTick(q, Z);
              }
            });
          },
          destroy: M
        });
      }
      throw new w("Iterable, AsyncIterable or AsyncFunction", R, v);
    }
    if (C(A))
      return I(A.arrayBuffer());
    if (i(A))
      return N(x, A, {
        // TODO (ronag): highWaterMark?
        objectMode: !0,
        writable: !1
      });
    if (u(A == null ? void 0 : A.readable) && f(A == null ? void 0 : A.writable))
      return x.fromWeb(A);
    if (typeof (A == null ? void 0 : A.writable) == "object" || typeof (A == null ? void 0 : A.readable) == "object") {
      const v = A != null && A.readable ? o(A == null ? void 0 : A.readable) ? A == null ? void 0 : A.readable : I(A.readable) : void 0, B = A != null && A.writable ? a(A == null ? void 0 : A.writable) ? A == null ? void 0 : A.writable : I(A.writable) : void 0;
      return P({
        readable: v,
        writable: B
      });
    }
    const m = A == null ? void 0 : A.then;
    if (typeof m == "function") {
      let v;
      return p(
        m,
        A,
        (B) => {
          B != null && v.push(B), v.push(null);
        },
        (B) => {
          h(v, B);
        }
      ), v = new x({
        objectMode: !0,
        writable: !1,
        read() {
        }
      });
    }
    throw new y(
      R,
      [
        "Blob",
        "ReadableStream",
        "WritableStream",
        "Stream",
        "Iterable",
        "AsyncIterable",
        "Function",
        "{ readable, writable } pair",
        "Promise"
      ],
      A
    );
  };
  function _(I) {
    let { promise: A, resolve: R } = S();
    const m = new L(), v = m.signal;
    return {
      value: I(
        async function* () {
          for (; ; ) {
            const $ = A;
            A = null;
            const { chunk: M, done: D, cb: H } = await $;
            if (t.nextTick(H), D) return;
            if (v.aborted)
              throw new d(void 0, {
                cause: v.reason
              });
            ({ promise: A, resolve: R } = S()), yield M;
          }
        }(),
        {
          signal: v
        }
      ),
      write($, M, D) {
        const H = R;
        R = null, H({
          chunk: $,
          done: !1,
          cb: D
        });
      },
      final($) {
        const M = R;
        R = null, M({
          done: !0,
          cb: $
        });
      },
      destroy($, M) {
        m.abort(), M($);
      }
    };
  }
  function P(I) {
    const A = I.readable && typeof I.readable.read != "function" ? b.wrap(I.readable) : I.readable, R = I.writable;
    let m = !!n(A), v = !!r(R), B, $, M, D, H;
    function V(q) {
      const Z = D;
      D = null, Z ? Z(q) : q && H.destroy(q);
    }
    return H = new x({
      // TODO (ronag): highWaterMark?
      readableObjectMode: !!(A != null && A.readableObjectMode),
      writableObjectMode: !!(R != null && R.writableObjectMode),
      readable: m,
      writable: v
    }), v && (l(R, (q) => {
      v = !1, q && h(A, q), V(q);
    }), H._write = function(q, Z, Y) {
      R.write(q, Z) ? Y() : B = Y;
    }, H._final = function(q) {
      R.end(), $ = q;
    }, R.on("drain", function() {
      if (B) {
        const q = B;
        B = null, q();
      }
    }), R.on("finish", function() {
      if ($) {
        const q = $;
        $ = null, q();
      }
    })), m && (l(A, (q) => {
      m = !1, q && h(A, q), V(q);
    }), A.on("readable", function() {
      if (M) {
        const q = M;
        M = null, q();
      }
    }), A.on("end", function() {
      H.push(null);
    }), H._read = function() {
      for (; ; ) {
        const q = A.read();
        if (q === null) {
          M = H._read;
          return;
        }
        if (!H.push(q))
          return;
      }
    }), H._destroy = function(q, Z) {
      !q && D !== null && (q = new d()), M = null, B = null, $ = null, D === null ? Z(q) : (D = Z, h(R, q), h(A, q));
    }, H;
  }
  return lc;
}
var dc, Dd;
function vn() {
  if (Dd) return dc;
  Dd = 1;
  const {
    ObjectDefineProperties: t,
    ObjectGetOwnPropertyDescriptor: e,
    ObjectKeys: n,
    ObjectSetPrototypeOf: r
  } = Te;
  dc = o;
  const i = da(), s = _f();
  r(o.prototype, i.prototype), r(o, i);
  {
    const f = n(s.prototype);
    for (let l = 0; l < f.length; l++) {
      const d = f[l];
      o.prototype[d] || (o.prototype[d] = s.prototype[d]);
    }
  }
  function o(f) {
    if (!(this instanceof o)) return new o(f);
    i.call(this, f), s.call(this, f), f ? (this.allowHalfOpen = f.allowHalfOpen !== !1, f.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), f.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  t(o.prototype, {
    writable: {
      __proto__: null,
      ...e(s.prototype, "writable")
    },
    writableHighWaterMark: {
      __proto__: null,
      ...e(s.prototype, "writableHighWaterMark")
    },
    writableObjectMode: {
      __proto__: null,
      ...e(s.prototype, "writableObjectMode")
    },
    writableBuffer: {
      __proto__: null,
      ...e(s.prototype, "writableBuffer")
    },
    writableLength: {
      __proto__: null,
      ...e(s.prototype, "writableLength")
    },
    writableFinished: {
      __proto__: null,
      ...e(s.prototype, "writableFinished")
    },
    writableCorked: {
      __proto__: null,
      ...e(s.prototype, "writableCorked")
    },
    writableEnded: {
      __proto__: null,
      ...e(s.prototype, "writableEnded")
    },
    writableNeedDrain: {
      __proto__: null,
      ...e(s.prototype, "writableNeedDrain")
    },
    destroyed: {
      __proto__: null,
      get() {
        return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
      },
      set(f) {
        this._readableState && this._writableState && (this._readableState.destroyed = f, this._writableState.destroyed = f);
      }
    }
  });
  let a;
  function c() {
    return a === void 0 && (a = {}), a;
  }
  o.fromWeb = function(f, l) {
    return c().newStreamDuplexFromReadableWritablePair(f, l);
  }, o.toWeb = function(f) {
    return c().newReadableWritablePairFromDuplex(f);
  };
  let u;
  return o.from = function(f) {
    return u || (u = Ix()), u(f, "body");
  }, dc;
}
const { ObjectSetPrototypeOf: Vp, Symbol: Px } = Te;
var Wp = Sn;
const { ERR_METHOD_NOT_IMPLEMENTED: Bx } = ft.codes, Af = vn(), { getHighWaterMark: Tx } = la;
Vp(Sn.prototype, Af.prototype);
Vp(Sn, Af);
const cs = Px("kCallback");
function Sn(t) {
  if (!(this instanceof Sn)) return new Sn(t);
  const e = t ? Tx(this, t, "readableHighWaterMark", !0) : null;
  e === 0 && (t = {
    ...t,
    highWaterMark: null,
    readableHighWaterMark: e,
    // TODO (ronag): 0 is not optimal since we have
    // a "bug" where we check needDrain before calling _write and not after.
    // Refs: https://github.com/nodejs/node/pull/32887
    // Refs: https://github.com/nodejs/node/pull/35941
    writableHighWaterMark: t.writableHighWaterMark || 0
  }), Af.call(this, t), this._readableState.sync = !1, this[cs] = null, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", $x);
}
function gu(t) {
  typeof this._flush == "function" && !this.destroyed ? this._flush((e, n) => {
    if (e) {
      t ? t(e) : this.destroy(e);
      return;
    }
    n != null && this.push(n), this.push(null), t && t();
  }) : (this.push(null), t && t());
}
function $x() {
  this._final !== gu && gu.call(this);
}
Sn.prototype._final = gu;
Sn.prototype._transform = function(t, e, n) {
  throw new Bx("_transform()");
};
Sn.prototype._write = function(t, e, n) {
  const r = this._readableState, i = this._writableState, s = r.length;
  this._transform(t, e, (o, a) => {
    if (o) {
      n(o);
      return;
    }
    a != null && this.push(a), i.ended || // Backwards compat.
    s === r.length || // Backwards compat.
    r.length < r.highWaterMark ? n() : this[cs] = n;
  });
};
Sn.prototype._read = function() {
  if (this[cs]) {
    const t = this[cs];
    this[cs] = null, t();
  }
};
const { ObjectSetPrototypeOf: Kp } = Te;
var Zp = vi;
const If = Wp;
Kp(vi.prototype, If.prototype);
Kp(vi, If);
function vi(t) {
  if (!(this instanceof vi)) return new vi(t);
  If.call(this, t);
}
vi.prototype._transform = function(t, e, n) {
  n(null, t);
};
const os = Jn, { ArrayIsArray: Nx, Promise: Rx, SymbolAsyncIterator: Ox, SymbolDispose: Cx } = Te, Fo = Xn, { once: kx } = nt, Lx = ji, jd = vn(), {
  aggregateTwoErrors: Mx,
  codes: {
    ERR_INVALID_ARG_TYPE: yu,
    ERR_INVALID_RETURN_VALUE: hc,
    ERR_MISSING_ARGS: Fx,
    ERR_STREAM_DESTROYED: Ux,
    ERR_STREAM_PREMATURE_CLOSE: Dx
  },
  AbortError: jx
} = ft, { validateFunction: Hx, validateAbortSignal: Gx } = Ms, {
  isIterable: sr,
  isReadable: pc,
  isReadableNodeStream: Co,
  isNodeStream: Hd,
  isTransformStream: qr,
  isWebStream: qx,
  isReadableStream: gc,
  isReadableFinished: zx
} = Pn, Vx = globalThis.AbortController || ps().AbortController;
let yc, bc, mc;
function Gd(t, e, n) {
  let r = !1;
  t.on("close", () => {
    r = !0;
  });
  const i = Fo(
    t,
    {
      readable: e,
      writable: n
    },
    (s) => {
      r = !s;
    }
  );
  return {
    destroy: (s) => {
      r || (r = !0, Lx.destroyer(t, s || new Ux("pipe")));
    },
    cleanup: i
  };
}
function Wx(t) {
  return Hx(t[t.length - 1], "streams[stream.length - 1]"), t.pop();
}
function wc(t) {
  if (sr(t))
    return t;
  if (Co(t))
    return Kx(t);
  throw new yu("val", ["Readable", "Iterable", "AsyncIterable"], t);
}
async function* Kx(t) {
  bc || (bc = da()), yield* bc.prototype[Ox].call(t);
}
async function po(t, e, n, { end: r }) {
  let i, s = null;
  const o = (u) => {
    if (u && (i = u), s) {
      const f = s;
      s = null, f();
    }
  }, a = () => new Rx((u, f) => {
    i ? f(i) : s = () => {
      i ? f(i) : u();
    };
  });
  e.on("drain", o);
  const c = Fo(
    e,
    {
      readable: !1
    },
    o
  );
  try {
    e.writableNeedDrain && await a();
    for await (const u of t)
      e.write(u) || await a();
    r && (e.end(), await a()), n();
  } catch (u) {
    n(i !== u ? Mx(i, u) : u);
  } finally {
    c(), e.off("drain", o);
  }
}
async function Ec(t, e, n, { end: r }) {
  qr(e) && (e = e.writable);
  const i = e.getWriter();
  try {
    for await (const s of t)
      await i.ready, i.write(s).catch(() => {
      });
    await i.ready, r && await i.close(), n();
  } catch (s) {
    try {
      await i.abort(s), n(s);
    } catch (o) {
      n(o);
    }
  }
}
function Zx(...t) {
  return Yp(t, kx(Wx(t)));
}
function Yp(t, e, n) {
  if (t.length === 1 && Nx(t[0]) && (t = t[0]), t.length < 2)
    throw new Fx("streams");
  const r = new Vx(), i = r.signal, s = n == null ? void 0 : n.signal, o = [];
  Gx(s, "options.signal");
  function a() {
    w(new jx());
  }
  mc = mc || nt.addAbortListener;
  let c;
  s && (c = mc(s, a));
  let u, f;
  const l = [];
  let d = 0;
  function y(E) {
    w(E, --d === 0);
  }
  function w(E, S) {
    var N;
    if (E && (!u || u.code === "ERR_STREAM_PREMATURE_CLOSE") && (u = E), !(!u && !S)) {
      for (; l.length; )
        l.shift()(u);
      (N = c) === null || N === void 0 || N[Cx](), r.abort(), S && (u || o.forEach((O) => O()), os.nextTick(e, u, f));
    }
  }
  let h;
  for (let E = 0; E < t.length; E++) {
    const S = t[E], N = E < t.length - 1, O = E > 0, C = N || (n == null ? void 0 : n.end) !== !1, L = E === t.length - 1;
    if (Hd(S)) {
      let p = function(x) {
        x && x.name !== "AbortError" && x.code !== "ERR_STREAM_PREMATURE_CLOSE" && y(x);
      };
      if (C) {
        const { destroy: x, cleanup: _ } = Gd(S, N, O);
        l.push(x), pc(S) && L && o.push(_);
      }
      S.on("error", p), pc(S) && L && o.push(() => {
        S.removeListener("error", p);
      });
    }
    if (E === 0)
      if (typeof S == "function") {
        if (h = S({
          signal: i
        }), !sr(h))
          throw new hc("Iterable, AsyncIterable or Stream", "source", h);
      } else sr(S) || Co(S) || qr(S) ? h = S : h = jd.from(S);
    else if (typeof S == "function") {
      if (qr(h)) {
        var g;
        h = wc((g = h) === null || g === void 0 ? void 0 : g.readable);
      } else
        h = wc(h);
      if (h = S(h, {
        signal: i
      }), N) {
        if (!sr(h, !0))
          throw new hc("AsyncIterable", `transform[${E - 1}]`, h);
      } else {
        var b;
        yc || (yc = Zp);
        const p = new yc({
          objectMode: !0
        }), x = (b = h) === null || b === void 0 ? void 0 : b.then;
        if (typeof x == "function")
          d++, x.call(
            h,
            (I) => {
              f = I, I != null && p.write(I), C && p.end(), os.nextTick(y);
            },
            (I) => {
              p.destroy(I), os.nextTick(y, I);
            }
          );
        else if (sr(h, !0))
          d++, po(h, p, y, {
            end: C
          });
        else if (gc(h) || qr(h)) {
          const I = h.readable || h;
          d++, po(I, p, y, {
            end: C
          });
        } else
          throw new hc("AsyncIterable or Promise", "destination", h);
        h = p;
        const { destroy: _, cleanup: P } = Gd(h, !1, !0);
        l.push(_), L && o.push(P);
      }
    } else if (Hd(S)) {
      if (Co(h)) {
        d += 2;
        const p = Yx(h, S, y, {
          end: C
        });
        pc(S) && L && o.push(p);
      } else if (qr(h) || gc(h)) {
        const p = h.readable || h;
        d++, po(p, S, y, {
          end: C
        });
      } else if (sr(h))
        d++, po(h, S, y, {
          end: C
        });
      else
        throw new yu(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          h
        );
      h = S;
    } else if (qx(S)) {
      if (Co(h))
        d++, Ec(wc(h), S, y, {
          end: C
        });
      else if (gc(h) || sr(h))
        d++, Ec(h, S, y, {
          end: C
        });
      else if (qr(h))
        d++, Ec(h.readable, S, y, {
          end: C
        });
      else
        throw new yu(
          "val",
          ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"],
          h
        );
      h = S;
    } else
      h = jd.from(S);
  }
  return (i != null && i.aborted || s != null && s.aborted) && os.nextTick(a), h;
}
function Yx(t, e, n, { end: r }) {
  let i = !1;
  if (e.on("close", () => {
    i || n(new Dx());
  }), t.pipe(e, {
    end: !1
  }), r) {
    let s = function() {
      i = !0, e.end();
    };
    zx(t) ? os.nextTick(s) : t.once("end", s);
  } else
    n();
  return Fo(
    t,
    {
      readable: !0,
      writable: !1
    },
    (s) => {
      const o = t._readableState;
      s && s.code === "ERR_STREAM_PREMATURE_CLOSE" && o && o.ended && !o.errored && !o.errorEmitted ? t.once("end", n).once("error", n) : n(s);
    }
  ), Fo(
    e,
    {
      readable: !1,
      writable: !0
    },
    n
  );
}
var Pf = {
  pipelineImpl: Yp,
  pipeline: Zx
};
const { pipeline: Jx } = Pf, go = vn(), { destroyer: Xx } = ji, {
  isNodeStream: yo,
  isReadable: qd,
  isWritable: zd,
  isWebStream: xc,
  isTransformStream: nr,
  isWritableStream: Vd,
  isReadableStream: Wd
} = Pn, {
  AbortError: Qx,
  codes: { ERR_INVALID_ARG_VALUE: Kd, ERR_MISSING_ARGS: ev }
} = ft, tv = Xn;
var Jp = function(...e) {
  if (e.length === 0)
    throw new ev("streams");
  if (e.length === 1)
    return go.from(e[0]);
  const n = [...e];
  if (typeof e[0] == "function" && (e[0] = go.from(e[0])), typeof e[e.length - 1] == "function") {
    const y = e.length - 1;
    e[y] = go.from(e[y]);
  }
  for (let y = 0; y < e.length; ++y)
    if (!(!yo(e[y]) && !xc(e[y]))) {
      if (y < e.length - 1 && !(qd(e[y]) || Wd(e[y]) || nr(e[y])))
        throw new Kd(`streams[${y}]`, n[y], "must be readable");
      if (y > 0 && !(zd(e[y]) || Vd(e[y]) || nr(e[y])))
        throw new Kd(`streams[${y}]`, n[y], "must be writable");
    }
  let r, i, s, o, a;
  function c(y) {
    const w = o;
    o = null, w ? w(y) : y ? a.destroy(y) : !d && !l && a.destroy();
  }
  const u = e[0], f = Jx(e, c), l = !!(zd(u) || Vd(u) || nr(u)), d = !!(qd(f) || Wd(f) || nr(f));
  if (a = new go({
    // TODO (ronag): highWaterMark?
    writableObjectMode: !!(u != null && u.writableObjectMode),
    readableObjectMode: !!(f != null && f.readableObjectMode),
    writable: l,
    readable: d
  }), l) {
    if (yo(u))
      a._write = function(w, h, g) {
        u.write(w, h) ? g() : r = g;
      }, a._final = function(w) {
        u.end(), i = w;
      }, u.on("drain", function() {
        if (r) {
          const w = r;
          r = null, w();
        }
      });
    else if (xc(u)) {
      const h = (nr(u) ? u.writable : u).getWriter();
      a._write = async function(g, b, E) {
        try {
          await h.ready, h.write(g).catch(() => {
          }), E();
        } catch (S) {
          E(S);
        }
      }, a._final = async function(g) {
        try {
          await h.ready, h.close().catch(() => {
          }), i = g;
        } catch (b) {
          g(b);
        }
      };
    }
    const y = nr(f) ? f.readable : f;
    tv(y, () => {
      if (i) {
        const w = i;
        i = null, w();
      }
    });
  }
  if (d) {
    if (yo(f))
      f.on("readable", function() {
        if (s) {
          const y = s;
          s = null, y();
        }
      }), f.on("end", function() {
        a.push(null);
      }), a._read = function() {
        for (; ; ) {
          const y = f.read();
          if (y === null) {
            s = a._read;
            return;
          }
          if (!a.push(y))
            return;
        }
      };
    else if (xc(f)) {
      const w = (nr(f) ? f.readable : f).getReader();
      a._read = async function() {
        for (; ; )
          try {
            const { value: h, done: g } = await w.read();
            if (!a.push(h))
              return;
            if (g) {
              a.push(null);
              return;
            }
          } catch {
            return;
          }
      };
    }
  }
  return a._destroy = function(y, w) {
    !y && o !== null && (y = new Qx()), s = null, r = null, i = null, o === null ? w(y) : (o = w, yo(f) && Xx(f, y));
  }, a;
};
const nv = globalThis.AbortController || ps().AbortController, {
  codes: { ERR_INVALID_ARG_VALUE: rv, ERR_INVALID_ARG_TYPE: Fs, ERR_MISSING_ARGS: iv, ERR_OUT_OF_RANGE: sv },
  AbortError: Xt
} = ft, { validateAbortSignal: kr, validateInteger: Zd, validateObject: Lr } = Ms, ov = Te.Symbol("kWeak"), av = Te.Symbol("kResistStopPropagation"), { finished: cv } = Xn, uv = Jp, { addAbortSignalNoValidate: fv } = fa, { isWritable: lv, isNodeStream: dv } = Pn, { deprecate: hv } = nt, {
  ArrayPrototypePush: pv,
  Boolean: gv,
  MathFloor: Yd,
  Number: yv,
  NumberIsNaN: bv,
  Promise: Jd,
  PromiseReject: Xd,
  PromiseResolve: mv,
  PromisePrototypeThen: Qd,
  Symbol: Xp
} = Te, Uo = Xp("kEmpty"), eh = Xp("kEof");
function wv(t, e) {
  if (e != null && Lr(e, "options"), (e == null ? void 0 : e.signal) != null && kr(e.signal, "options.signal"), dv(t) && !lv(t))
    throw new rv("stream", t, "must be writable");
  const n = uv(this, t);
  return e != null && e.signal && fv(e.signal, n), n;
}
function ha(t, e) {
  if (typeof t != "function")
    throw new Fs("fn", ["Function", "AsyncFunction"], t);
  e != null && Lr(e, "options"), (e == null ? void 0 : e.signal) != null && kr(e.signal, "options.signal");
  let n = 1;
  (e == null ? void 0 : e.concurrency) != null && (n = Yd(e.concurrency));
  let r = n - 1;
  return (e == null ? void 0 : e.highWaterMark) != null && (r = Yd(e.highWaterMark)), Zd(n, "options.concurrency", 1), Zd(r, "options.highWaterMark", 0), r += n, (async function* () {
    const s = nt.AbortSignalAny(
      [e == null ? void 0 : e.signal].filter(gv)
    ), o = this, a = [], c = {
      signal: s
    };
    let u, f, l = !1, d = 0;
    function y() {
      l = !0, w();
    }
    function w() {
      d -= 1, h();
    }
    function h() {
      f && !l && d < n && a.length < r && (f(), f = null);
    }
    async function g() {
      try {
        for await (let b of o) {
          if (l)
            return;
          if (s.aborted)
            throw new Xt();
          try {
            if (b = t(b, c), b === Uo)
              continue;
            b = mv(b);
          } catch (E) {
            b = Xd(E);
          }
          d += 1, Qd(b, w, y), a.push(b), u && (u(), u = null), !l && (a.length >= r || d >= n) && await new Jd((E) => {
            f = E;
          });
        }
        a.push(eh);
      } catch (b) {
        const E = Xd(b);
        Qd(E, w, y), a.push(E);
      } finally {
        l = !0, u && (u(), u = null);
      }
    }
    g();
    try {
      for (; ; ) {
        for (; a.length > 0; ) {
          const b = await a[0];
          if (b === eh)
            return;
          if (s.aborted)
            throw new Xt();
          b !== Uo && (yield b), a.shift(), h();
        }
        await new Jd((b) => {
          u = b;
        });
      }
    } finally {
      l = !0, f && (f(), f = null);
    }
  }).call(this);
}
function Ev(t = void 0) {
  return t != null && Lr(t, "options"), (t == null ? void 0 : t.signal) != null && kr(t.signal, "options.signal"), (async function* () {
    let n = 0;
    for await (const i of this) {
      var r;
      if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted)
        throw new Xt({
          cause: t.signal.reason
        });
      yield [n++, i];
    }
  }).call(this);
}
async function Qp(t, e = void 0) {
  for await (const n of Bf.call(this, t, e))
    return !0;
  return !1;
}
async function xv(t, e = void 0) {
  if (typeof t != "function")
    throw new Fs("fn", ["Function", "AsyncFunction"], t);
  return !await Qp.call(
    this,
    async (...n) => !await t(...n),
    e
  );
}
async function vv(t, e) {
  for await (const n of Bf.call(this, t, e))
    return n;
}
async function Sv(t, e) {
  if (typeof t != "function")
    throw new Fs("fn", ["Function", "AsyncFunction"], t);
  async function n(r, i) {
    return await t(r, i), Uo;
  }
  for await (const r of ha.call(this, n, e)) ;
}
function Bf(t, e) {
  if (typeof t != "function")
    throw new Fs("fn", ["Function", "AsyncFunction"], t);
  async function n(r, i) {
    return await t(r, i) ? r : Uo;
  }
  return ha.call(this, n, e);
}
class _v extends iv {
  constructor() {
    super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
  }
}
async function Av(t, e, n) {
  var r;
  if (typeof t != "function")
    throw new Fs("reducer", ["Function", "AsyncFunction"], t);
  n != null && Lr(n, "options"), (n == null ? void 0 : n.signal) != null && kr(n.signal, "options.signal");
  let i = arguments.length > 1;
  if (n != null && (r = n.signal) !== null && r !== void 0 && r.aborted) {
    const u = new Xt(void 0, {
      cause: n.signal.reason
    });
    throw this.once("error", () => {
    }), await cv(this.destroy(u)), u;
  }
  const s = new nv(), o = s.signal;
  if (n != null && n.signal) {
    const u = {
      once: !0,
      [ov]: this,
      [av]: !0
    };
    n.signal.addEventListener("abort", () => s.abort(), u);
  }
  let a = !1;
  try {
    for await (const u of this) {
      var c;
      if (a = !0, n != null && (c = n.signal) !== null && c !== void 0 && c.aborted)
        throw new Xt();
      i ? e = await t(e, u, {
        signal: o
      }) : (e = u, i = !0);
    }
    if (!a && !i)
      throw new _v();
  } finally {
    s.abort();
  }
  return e;
}
async function Iv(t) {
  t != null && Lr(t, "options"), (t == null ? void 0 : t.signal) != null && kr(t.signal, "options.signal");
  const e = [];
  for await (const r of this) {
    var n;
    if (t != null && (n = t.signal) !== null && n !== void 0 && n.aborted)
      throw new Xt(void 0, {
        cause: t.signal.reason
      });
    pv(e, r);
  }
  return e;
}
function Pv(t, e) {
  const n = ha.call(this, t, e);
  return (async function* () {
    for await (const i of n)
      yield* i;
  }).call(this);
}
function eg(t) {
  if (t = yv(t), bv(t))
    return 0;
  if (t < 0)
    throw new sv("number", ">= 0", t);
  return t;
}
function Bv(t, e = void 0) {
  return e != null && Lr(e, "options"), (e == null ? void 0 : e.signal) != null && kr(e.signal, "options.signal"), t = eg(t), (async function* () {
    var r;
    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
      throw new Xt();
    for await (const s of this) {
      var i;
      if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted)
        throw new Xt();
      t-- <= 0 && (yield s);
    }
  }).call(this);
}
function Tv(t, e = void 0) {
  return e != null && Lr(e, "options"), (e == null ? void 0 : e.signal) != null && kr(e.signal, "options.signal"), t = eg(t), (async function* () {
    var r;
    if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted)
      throw new Xt();
    for await (const s of this) {
      var i;
      if (e != null && (i = e.signal) !== null && i !== void 0 && i.aborted)
        throw new Xt();
      if (t-- > 0 && (yield s), t <= 0)
        return;
    }
  }).call(this);
}
mf.streamReturningOperators = {
  asIndexedPairs: hv(Ev, "readable.asIndexedPairs will be removed in a future version."),
  drop: Bv,
  filter: Bf,
  flatMap: Pv,
  map: ha,
  take: Tv,
  compose: wv
};
mf.promiseReturningOperators = {
  every: xv,
  forEach: Sv,
  reduce: Av,
  toArray: Iv,
  some: Qp,
  find: vv
};
var vc, th;
function tg() {
  if (th) return vc;
  th = 1;
  const { ArrayPrototypePop: t, Promise: e } = Te, { isIterable: n, isNodeStream: r, isWebStream: i } = Pn, { pipelineImpl: s } = Pf, { finished: o } = Xn;
  ng();
  function a(...c) {
    return new e((u, f) => {
      let l, d;
      const y = c[c.length - 1];
      if (y && typeof y == "object" && !r(y) && !n(y) && !i(y)) {
        const w = t(c);
        l = w.signal, d = w.end;
      }
      s(
        c,
        (w, h) => {
          w ? f(w) : u(h);
        },
        {
          signal: l,
          end: d
        }
      );
    });
  }
  return vc = {
    finished: o,
    pipeline: a
  }, vc;
}
var nh;
function ng() {
  if (nh) return sc.exports;
  nh = 1;
  const { Buffer: t } = Or, { ObjectDefineProperty: e, ObjectKeys: n, ReflectApply: r } = Te, {
    promisify: { custom: i }
  } = nt, { streamReturningOperators: s, promiseReturningOperators: o } = mf, {
    codes: { ERR_ILLEGAL_CONSTRUCTOR: a }
  } = ft, c = Jp, { setDefaultHighWaterMark: u, getDefaultHighWaterMark: f } = la, { pipeline: l } = Pf, { destroyer: d } = ji, y = Xn, w = tg(), h = Pn, g = sc.exports = Sf.Stream;
  g.isDestroyed = h.isDestroyed, g.isDisturbed = h.isDisturbed, g.isErrored = h.isErrored, g.isReadable = h.isReadable, g.isWritable = h.isWritable, g.Readable = da();
  for (const E of n(s)) {
    let N = function(...O) {
      if (new.target)
        throw a();
      return g.Readable.from(r(S, this, O));
    };
    const S = s[E];
    e(N, "name", {
      __proto__: null,
      value: S.name
    }), e(N, "length", {
      __proto__: null,
      value: S.length
    }), e(g.Readable.prototype, E, {
      __proto__: null,
      value: N,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  for (const E of n(o)) {
    let N = function(...O) {
      if (new.target)
        throw a();
      return r(S, this, O);
    };
    const S = o[E];
    e(N, "name", {
      __proto__: null,
      value: S.name
    }), e(N, "length", {
      __proto__: null,
      value: S.length
    }), e(g.Readable.prototype, E, {
      __proto__: null,
      value: N,
      enumerable: !1,
      configurable: !0,
      writable: !0
    });
  }
  g.Writable = _f(), g.Duplex = vn(), g.Transform = Wp, g.PassThrough = Zp, g.pipeline = l;
  const { addAbortSignal: b } = fa;
  return g.addAbortSignal = b, g.finished = y, g.destroy = d, g.compose = c, g.setDefaultHighWaterMark = u, g.getDefaultHighWaterMark = f, e(g, "promises", {
    __proto__: null,
    configurable: !0,
    enumerable: !0,
    get() {
      return w;
    }
  }), e(l, i, {
    __proto__: null,
    enumerable: !0,
    get() {
      return w.pipeline;
    }
  }), e(y, i, {
    __proto__: null,
    enumerable: !0,
    get() {
      return w.finished;
    }
  }), g.Stream = g, g._isUint8Array = function(S) {
    return S instanceof Uint8Array;
  }, g._uint8ArrayToBuffer = function(S) {
    return t.from(S.buffer, S.byteOffset, S.byteLength);
  }, sc.exports;
}
(function(t) {
  const e = ng(), n = tg(), r = e.Readable.destroy;
  t.exports = e.Readable, t.exports._uint8ArrayToBuffer = e._uint8ArrayToBuffer, t.exports._isUint8Array = e._isUint8Array, t.exports.isDisturbed = e.isDisturbed, t.exports.isErrored = e.isErrored, t.exports.isReadable = e.isReadable, t.exports.Readable = e.Readable, t.exports.Writable = e.Writable, t.exports.Duplex = e.Duplex, t.exports.Transform = e.Transform, t.exports.PassThrough = e.PassThrough, t.exports.addAbortSignal = e.addAbortSignal, t.exports.finished = e.finished, t.exports.destroy = e.destroy, t.exports.destroy = r, t.exports.pipeline = e.pipeline, t.exports.compose = e.compose, Object.defineProperty(e, "promises", {
    configurable: !0,
    enumerable: !0,
    get() {
      return n;
    }
  }), t.exports.Stream = e.Stream, t.exports.default = t.exports;
})(vE);
function rh(t, e, n) {
  try {
    Reflect.apply(t, e, n);
  } catch (r) {
    setTimeout(() => {
      throw r;
    });
  }
}
function $v(t) {
  const e = t.length, n = new Array(e);
  for (let r = 0; r < e; r += 1)
    n[r] = t[r];
  return n;
}
class Tf extends Cs.EventEmitter {
  emit(e, ...n) {
    let r = e === "error";
    const i = this._events;
    if (i !== void 0)
      r = r && i.error === void 0;
    else if (!r)
      return !1;
    if (r) {
      let o;
      if (n.length > 0 && ([o] = n), o instanceof Error)
        throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw a.context = o, a;
    }
    const s = i[e];
    if (s === void 0)
      return !1;
    if (typeof s == "function")
      rh(s, this, n);
    else {
      const o = s.length, a = $v(s);
      for (let c = 0; c < o; c += 1)
        rh(a[c], this, n);
    }
    return !0;
  }
}
class Xi extends Error {
  constructor({
    code: e,
    message: n,
    data: r
  }) {
    if (!Number.isInteger(e))
      throw new Error("code must be an integer");
    if (!n || typeof n != "string")
      throw new Error("message must be string");
    super(n), oe(this, "code", void 0), oe(this, "data", void 0), this.code = e, r !== void 0 && (this.data = r);
  }
  toString() {
    return K0({
      code: this.code,
      message: this.message,
      data: this.data,
      stack: this.stack
    });
  }
}
const Ye = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
}, ih = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
}, sh = Ye.rpc.internal, Nv = "Unspecified error message. This is a bug, please report it.", Rv = "Unspecified server error.";
function rg(t) {
  return Number.isInteger(t);
}
function oh(t) {
  return typeof t == "string" && t.length > 0;
}
function Do(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function Ov(t) {
  if (typeof t != "object" || t === null)
    return !1;
  try {
    let e = t;
    for (; Object.getPrototypeOf(e) !== null; )
      e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
  } catch {
    return !1;
  }
}
function Cv(t) {
  return t >= -32099 && t <= -32e3;
}
function ig(t) {
  const e = t;
  return !(!e || !rg(e.code) || !oh(e.message) || e.stack && !oh(e.stack));
}
function $f(t, e = Nv) {
  if (rg(t)) {
    const n = t.toString();
    if (Object.hasOwn(ih, n))
      return ih[n].message;
    if (Cv(t))
      return Rv;
  }
  return e;
}
const kv = {
  code: sh,
  message: $f(sh)
};
function bu(t) {
  try {
    JSON.parse(JSON.stringify(t, (e, n) => {
      if (e === "__proto__" || e === "constructor")
        throw new Error("Not valid json");
      if (typeof n == "function" || typeof n == "symbol")
        throw new Error("Not valid json");
      return n;
    }), (e, n) => {
      if (!(e === "__proto__" || e === "constructor"))
        return n;
    });
  } catch {
    return !1;
  }
  return !0;
}
function ah(t) {
  return Object.getOwnPropertyNames(t).reduce((e, n) => {
    const r = t[n];
    return bu(r) && (e[n] = r), e;
  }, {});
}
function sg(t) {
  return Array.isArray(t) ? t.map((e) => bu(e) ? e : Do(e) ? ah(e) : null) : Do(t) ? ah(t) : bu(t) ? t : null;
}
function Lv(t, e) {
  if (t && typeof t == "object" && "serialize" in t && typeof t.serialize == "function")
    return t.serialize();
  if (ig(t))
    return t;
  const n = sg(t);
  return le(le({}, e), {}, {
    data: {
      cause: n
    }
  });
}
function mu(t, {
  fallbackError: e = kv,
  shouldIncludeStack: n = !0
} = {}) {
  if (!ig(e))
    throw new Error("Must provide fallback error with integer number code and string message.");
  const r = Lv(t, e);
  return n || delete r.stack, r;
}
function Mv(t) {
  return Do(t) && Object.hasOwn(t, "cause") && Do(t.cause);
}
function Fv(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function Uv(t, e) {
  if (e !== "[Circular]")
    return e;
}
class og extends Error {
  constructor(e, n, r) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!n || typeof n != "string")
      throw new Error('"message" must be a non-empty string.');
    Mv(r) ? (super(n, {
      cause: r.cause
    }), oe(this, "cause", void 0), oe(this, "code", void 0), oe(this, "data", void 0), Object.hasOwn(this, "cause") || Object.assign(this, {
      cause: r.cause
    })) : (super(n), oe(this, "cause", void 0), oe(this, "code", void 0), oe(this, "data", void 0)), r !== void 0 && (this.data = r), this.code = e, this.cause = r == null ? void 0 : r.cause;
  }
  /**
   * Get the error as JSON-serializable object.
   *
   * @returns A plain object with all public class properties.
   */
  serialize() {
    const e = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (e.data = this.data, Ov(this.data) && (e.data.cause = sg(this.data.cause))), this.stack && (e.stack = this.stack), e;
  }
  /**
   * Get a string representation of the serialized error, omitting any circular
   * references.
   *
   * @returns A string representation of the serialized error.
   */
  toString() {
    return K0(this.serialize(), {
      replacer: Uv,
      space: 2
    });
  }
}
class ag extends og {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   *
   * @param code - The JSON-RPC error code. Must be an integer in the
   * `1000 <= n <= 4999` range.
   * @param message - The JSON-RPC error message.
   * @param data - Optional data to include in the error.
   */
  constructor(e, n, r) {
    if (!Fv(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, n, r);
  }
}
function cg(t) {
  if (t) {
    if (typeof t == "string")
      return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const {
        message: e,
        data: n
      } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e ?? void 0, n];
    }
  }
  return [];
}
function bt(t, e) {
  const [n, r] = cg(e);
  return new og(t, n ?? $f(t), r);
}
function Qi(t, e) {
  const [n, r] = cg(e);
  return new ag(t, n ?? $f(t), r);
}
const we = {
  /**
   * Get a JSON RPC 2.0 Parse (-32700) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  parse: (t) => bt(Ye.rpc.parse, t),
  /**
   * Get a JSON RPC 2.0 Invalid Request (-32600) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidRequest: (t) => bt(Ye.rpc.invalidRequest, t),
  /**
   * Get a JSON RPC 2.0 Invalid Params (-32602) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidParams: (t) => bt(Ye.rpc.invalidParams, t),
  /**
   * Get a JSON RPC 2.0 Method Not Found (-32601) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  methodNotFound: (t) => bt(Ye.rpc.methodNotFound, t),
  /**
   * Get a JSON RPC 2.0 Internal (-32603) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  internal: (t) => bt(Ye.rpc.internal, t),
  /**
   * Get a JSON RPC 2.0 Server error.
   * Permits integer error codes in the [ -32099 <= -32005 ] range.
   * Codes -32000 through -32004 are reserved by EIP-1474.
   *
   * @param opts - The error options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  server: (t) => {
    if (!t || typeof t != "object" || Array.isArray(t))
      throw new Error("Ethereum RPC Server errors must provide single object argument.");
    const {
      code: e
    } = t;
    if (!Number.isInteger(e) || e > -32005 || e < -32099)
      throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
    return bt(e, t);
  },
  /**
   * Get an Ethereum JSON RPC Invalid Input (-32000) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  invalidInput: (t) => bt(Ye.rpc.invalidInput, t),
  /**
   * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  resourceNotFound: (t) => bt(Ye.rpc.resourceNotFound, t),
  /**
   * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  resourceUnavailable: (t) => bt(Ye.rpc.resourceUnavailable, t),
  /**
   * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  transactionRejected: (t) => bt(Ye.rpc.transactionRejected, t),
  /**
   * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  methodNotSupported: (t) => bt(Ye.rpc.methodNotSupported, t),
  /**
   * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link JsonRpcError} class.
   */
  limitExceeded: (t) => bt(Ye.rpc.limitExceeded, t)
}, Ct = {
  /**
   * Get an Ethereum Provider User Rejected Request (4001) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  userRejectedRequest: (t) => Qi(Ye.provider.userRejectedRequest, t),
  /**
   * Get an Ethereum Provider Unauthorized (4100) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  unauthorized: (t) => Qi(Ye.provider.unauthorized, t),
  /**
   * Get an Ethereum Provider Unsupported Method (4200) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  unsupportedMethod: (t) => Qi(Ye.provider.unsupportedMethod, t),
  /**
   * Get an Ethereum Provider Not Connected (4900) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  disconnected: (t) => Qi(Ye.provider.disconnected, t),
  /**
   * Get an Ethereum Provider Chain Not Connected (4901) error.
   *
   * @param arg - The error message or options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  chainDisconnected: (t) => Qi(Ye.provider.chainDisconnected, t),
  /**
   * Get a custom Ethereum Provider error.
   *
   * @param opts - The error options bag.
   * @returns An instance of the {@link EthereumProviderError} class.
   */
  custom: (t) => {
    if (!t || typeof t != "object" || Array.isArray(t))
      throw new Error("Ethereum Provider custom errors must provide single object argument.");
    const {
      code: e,
      message: n,
      data: r
    } = t;
    if (!n || typeof n != "string")
      throw new Error('"message" must be a nonempty string');
    return new ag(e, n, r);
  }
};
function pa(t) {
  return (e, n, r, i) => {
    const s = t[e.method];
    return s === void 0 ? r() : typeof s == "function" ? s(e, n, r, i) : (n.result = s, i());
  };
}
function it(t) {
  return async (e, n, r, i) => {
    let s;
    const o = new Promise((f) => {
      s = f;
    });
    let a = null, c = !1;
    const u = async () => {
      c = !0, r((f) => {
        a = f, s();
      }), await o;
    };
    try {
      await t(e, n, u), c ? (await o, a(null)) : i(null);
    } catch (f) {
      const l = f;
      a ? a(l) : i(l);
    }
  };
}
class Vt extends Tf {
  constructor() {
    super(), oe(this, "_middleware", void 0), this._middleware = [];
  }
  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */
  static async _runAllMiddleware(e, n, r) {
    const i = [];
    let s = null, o = !1;
    for (const a of r)
      if ([s, o] = await Vt._runMiddleware(e, n, a, i), o)
        break;
    return [s, o, i.reverse()];
  }
  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * and a boolean indicating whether the request should end.
   */
  static _runMiddleware(e, n, r, i) {
    return new Promise((s) => {
      const o = (c) => {
        const u = c || n.error;
        u && (typeof u == "object" && Object.keys(u).includes("stack") === !1 && (u.stack = "Stack trace is not available."), n.error = mu(u, {
          shouldIncludeStack: !0,
          fallbackError: {
            message: (u == null ? void 0 : u.message) || (u == null ? void 0 : u.toString()),
            code: (u == null ? void 0 : u.code) || -32603,
            stack: (u == null ? void 0 : u.stack) || "Stack trace is not available.",
            data: (u == null ? void 0 : u.data) || (u == null ? void 0 : u.message) || (u == null ? void 0 : u.toString())
          }
        })), s([u, !0]);
      }, a = (c) => {
        n.error ? o(n.error) : (c && (typeof c != "function" && o(new Xi({
          code: -32603,
          message: "JRPCEngine: 'next' return handlers must be functions"
        })), i.push(c)), s([null, !1]));
      };
      try {
        r(e, n, a, o);
      } catch (c) {
        o(c);
      }
    });
  }
  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */
  static async _runReturnHandlers(e) {
    for (const n of e)
      await new Promise((r, i) => {
        n((s) => s ? i(s) : r());
      });
  }
  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */
  static _checkForCompletion(e, n, r) {
    if (!("result" in n) && !("error" in n))
      throw new Xi({
        code: -32603,
        message: "Response has no error or result for request"
      });
    if (!r)
      throw new Xi({
        code: -32603,
        message: "Nothing ended request"
      });
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(e) {
    this._middleware.push(e);
  }
  /**
   * Handle a JSON-RPC request, and return a response.
   *
   * @param request - The request to handle.
   * @param callback - An error-first callback that will receive the response.
   */
  /**
   * Handle an array of JSON-RPC requests, and return an array of responses.
   *
   * @param request - The requests to handle.
   * @param callback - An error-first callback that will receive the array of
   * responses.
   */
  /**
   * Handle a JSON-RPC request, and return a response.
   *
   * @param request - The request to handle.
   * @returns A promise that resolves with the response, or rejects with an
   * error.
   */
  /**
   * Handle an array of JSON-RPC requests, and return an array of responses.
   *
   * @param request - The requests to handle.
   * @returns A promise that resolves with the array of responses, or rejects
   * with an error.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handle(e, n) {
    if (n && typeof n != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(e) ? n ? this._handleBatch(e, n) : this._handleBatch(e) : n ? this._handle(e, n) : this._promiseHandle(e);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return async (e, n, r, i) => {
      try {
        const [s, o, a] = await Vt._runAllMiddleware(e, n, this._middleware);
        return o ? (await Vt._runReturnHandlers(a), i(s)) : r(async (c) => {
          try {
            await Vt._runReturnHandlers(a);
          } catch (u) {
            return c(u);
          }
          return c();
        });
      } catch (s) {
        return i(s);
      }
    };
  }
  /**
   * Like _handle, but for batch requests.
   */
  /**
   * Like _handle, but for batch requests.
   */
  async _handleBatch(e, n) {
    try {
      const r = await Promise.all(
        // 1. Begin executing each request in the order received
        e.map(this._promiseHandle.bind(this))
      );
      return n ? n(null, r) : r;
    } catch (r) {
      if (n)
        return n(r);
      throw r;
    }
  }
  /**
   * A promise-wrapped _handle.
   */
  _promiseHandle(e) {
    return new Promise((n, r) => {
      this._handle(e, (i, s) => {
        i && s === void 0 ? r(i) : n(s);
      }).catch(r);
    });
  }
  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */
  async _handle(e, n) {
    if (!e || Array.isArray(e) || typeof e != "object") {
      const y = new Xi({
        code: -32603,
        message: "request must be plain object"
      });
      return n(y, {
        id: void 0,
        jsonrpc: "2.0",
        error: y
      });
    }
    if (typeof e.method != "string") {
      const y = new Xi({
        code: -32603,
        message: "method must be string"
      });
      return n(y, {
        id: e.id,
        jsonrpc: "2.0",
        error: y
      });
    }
    const r = le({}, e), i = {
      id: r.id,
      jsonrpc: r.jsonrpc
    };
    let s = null;
    try {
      await this._processRequest(r, i);
    } catch (y) {
      s = y;
    }
    if (s && (delete i.result, !i.error)) {
      var o, a, c, u, f, l, d;
      typeof s == "object" && Object.keys(s).includes("stack") === !1 && (s.stack = "Stack trace is not available."), i.error = mu(s, {
        shouldIncludeStack: !0,
        fallbackError: {
          message: ((o = s) === null || o === void 0 ? void 0 : o.message) || ((a = s) === null || a === void 0 ? void 0 : a.toString()),
          code: ((c = s) === null || c === void 0 ? void 0 : c.code) || -32603,
          stack: ((u = s) === null || u === void 0 ? void 0 : u.stack) || "Stack trace is not available.",
          data: ((f = s) === null || f === void 0 ? void 0 : f.data) || ((l = s) === null || l === void 0 ? void 0 : l.message) || ((d = s) === null || d === void 0 ? void 0 : d.toString())
        }
      });
    }
    return n(s, i);
  }
  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */
  async _processRequest(e, n) {
    const [r, i, s] = await Vt._runAllMiddleware(e, n, this._middleware);
    if (Vt._checkForCompletion(e, n, i), await Vt._runReturnHandlers(s), r)
      throw r;
  }
}
function ug(t) {
  const e = new Vt();
  return t.forEach((n) => {
    e.push(n);
  }), e.asMiddleware();
}
function Dv(t) {
  const e = new Tf();
  return e.sendAsync = async (n) => {
    const r = await t.handle(n);
    if (r.error) {
      var i, s, o, a, c, u, f;
      typeof r.error == "object" && Object.keys(r.error).includes("stack") === !1 && (r.error.stack = "Stack trace is not available.");
      const l = mu(r.error, {
        fallbackError: {
          message: ((i = r.error) === null || i === void 0 ? void 0 : i.message) || ((s = r.error) === null || s === void 0 ? void 0 : s.toString()),
          code: ((o = r.error) === null || o === void 0 ? void 0 : o.code) || -32603,
          stack: ((a = r.error) === null || a === void 0 ? void 0 : a.stack) || "Stack trace is not available.",
          data: ((c = r.error) === null || c === void 0 ? void 0 : c.data) || ((u = r.error) === null || u === void 0 ? void 0 : u.message) || ((f = r.error) === null || f === void 0 ? void 0 : f.toString())
        },
        shouldIncludeStack: !0
      });
      throw we.internal(l);
    }
    return r.result;
  }, e.send = (n, r) => {
    if (typeof r != "function")
      throw new Error('Must provide callback to "send" method.');
    t.handle(n, r);
  }, t.on && t.on("notification", (n) => {
    e.emit("data", null, n);
  }), e.request = async (n) => {
    const r = le(le({}, n), {}, {
      id: Math.random().toString(36).slice(2),
      jsonrpc: "2.0"
    });
    return await e.sendAsync(r);
  }, e;
}
function Us(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/));
}
const Vn = (t) => {
  if (typeof t != "string")
    throw new Error(`[stripHexPrefix] input must be type 'string', received ${typeof t}`);
  return Us(t) ? t.slice(2) : t;
};
function Nf(t) {
  let e = t;
  if (typeof e != "string")
    throw new Error(`[padToEven] value must be type 'string', received ${typeof e}`);
  return e.length % 2 && (e = `0${e}`), e;
}
const jv = function(t) {
  if (!(t instanceof Uint8Array)) {
    const e = `This method only supports Uint8Array but input was: ${t}`;
    throw new Error(e);
  }
}, Hv = function(t) {
  if (typeof t != "string") {
    const e = `This method only supports strings but input was: ${t}`;
    throw new Error(e);
  }
}, fg = BigInt(0), wu = {}, Eu = {};
for (let t = 0; t < 16; t++) {
  const e = t, n = t * 16, r = t.toString(16).toLowerCase();
  Eu[r] = e, Eu[r.toUpperCase()] = e, wu[r] = n, wu[r.toUpperCase()] = n;
}
function lg(t) {
  const e = t.length, n = new Uint8Array(e / 2);
  for (let r = 0; r < e; r += 2)
    n[r / 2] = wu[t[r]] + Eu[t[r + 1]];
  return n;
}
const Gv = (t) => {
  if (t.slice(0, 2) === "0x")
    throw new Error("hex string is prefixed with 0x, should be unprefixed");
  return lg(Nf(t));
}, qv = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0")), zv = (t) => {
  let e = "0x";
  if (t === void 0 || t.length === 0)
    return e;
  for (const n of t)
    e = `${e}${qv[n]}`;
  return e;
}, xu = [];
for (let t = 0; t <= 256 * 256 - 1; t++)
  xu[t] = BigInt(t);
const dg = (t, e = !1) => {
  e && t.reverse();
  const n = zv(t);
  return n === "0x" ? fg : n.length === 4 ? xu[t[0]] : n.length === 6 ? xu[t[0] * 256 + t[1]] : BigInt(n);
}, Ds = (t) => {
  if (typeof t != "string")
    throw new Error(`hex argument type ${typeof t} must be of type string`);
  if (!/^0x[0-9a-fA-F]*$/.test(t))
    throw new Error(`Input must be a 0x-prefixed hexadecimal string, got ${t}`);
  const e = t.slice(2);
  return lg(e.length % 2 === 0 ? e : Nf(e));
}, Vv = (t) => {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`Received an invalid integer type: ${t}`);
  return `0x${t.toString(16)}`;
}, Mr = (t) => {
  const e = Vv(t);
  return Ds(e);
}, Wv = (t, e = !1) => {
  const n = Rf(`0x${Nf(t.toString(16))}`);
  return e ? n.reverse() : n;
}, Rf = (t) => {
  if (t == null)
    return new Uint8Array();
  if (Array.isArray(t) || t instanceof Uint8Array)
    return Uint8Array.from(t);
  if (typeof t == "string") {
    if (!Us(t))
      throw new Error(`Cannot convert string to Uint8Array. toBytes only supports 0x-prefixed hex strings and this string was given: ${t}`);
    return Ds(t);
  }
  if (typeof t == "number")
    return Mr(t);
  if (typeof t == "bigint") {
    if (t < fg)
      throw new Error(`Cannot convert negative bigint to Uint8Array. Given: ${t}`);
    let e = t.toString(16);
    return e.length % 2 && (e = "0" + e), Gv(e);
  }
  if (t.toBytes !== void 0)
    return t.toBytes();
  throw new Error("invalid type");
}, ch = (t) => BigInt.asIntN(256, dg(t)), uh = (t) => Wv(BigInt.asUintN(256, t)), Ze = (t) => typeof t != "string" || Us(t) ? t : `0x${t}`, Kv = (t) => `0x${t.toString(16)}`;
BigInt("0xffffffffffffffff");
BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935");
ea.CURVE.n;
ea.CURVE.n / BigInt(2);
BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
const Zv = "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
Ds(Zv);
const Yv = "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347";
Ds(Yv);
const Jv = "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421";
Ds(Jv);
Uint8Array.from([128]);
BigInt(-1);
BigInt(0);
BigInt(1);
BigInt(2);
BigInt(3);
BigInt(7);
BigInt(8);
BigInt(27);
BigInt(28);
BigInt(31);
BigInt(32);
BigInt(64);
BigInt(128);
BigInt(255);
BigInt(256);
BigInt(96);
BigInt(100);
BigInt(160);
BigInt(224);
BigInt(7922816251426434e13);
BigInt(1461501637330903e33);
BigInt(2695994666715064e52);
BigInt(1e9);
Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
const Xv = function(t) {
  try {
    Hv(t);
  } catch {
    return !1;
  }
  return /^0x[0-9a-fA-F]{40}$/.test(t);
}, Qv = function(t, e = !1) {
  if (jv(t), e && t.length !== 64 && (t = ea.ProjectivePoint.fromHex(t).toRawBytes(!1).slice(1)), t.length !== 64)
    throw new Error("Expected pubKey to be of length 64");
  return S1(t).subarray(-20);
}, eS = Qv;
var fh;
(function(t) {
  t.String = "string", t.Bytes = "view", t.Number = "number";
})(fh || (fh = {}));
var lh;
(function(t) {
  t.String = "string", t.Bytes = "view", t.JSON = "json";
})(lh || (lh = {}));
var dh;
(function(t) {
  t[t.Number = 0] = "Number", t[t.BigInt = 1] = "BigInt", t[t.Uint8Array = 2] = "Uint8Array", t[t.PrefixedHexString = 3] = "PrefixedHexString";
})(dh || (dh = {}));
var hh;
(function(t) {
  t[t.Deposit = 0] = "Deposit", t[t.Withdrawal = 1] = "Withdrawal", t[t.Consolidation = 2] = "Consolidation";
})(hh || (hh = {}));
var Pr;
(function(t) {
  t[t.Version = 0] = "Version", t[t.Balance = 1] = "Balance", t[t.Nonce = 2] = "Nonce", t[t.CodeHash = 3] = "CodeHash", t[t.CodeSize = 4] = "CodeSize";
})(Pr || (Pr = {}));
Mr(Pr.Version);
Mr(Pr.Balance);
Mr(Pr.Nonce);
Mr(Pr.CodeHash);
Mr(Pr.CodeSize);
BigInt(256) ** BigInt(31);
class tS extends Tf {
  /**
   * Creates a BaseController instance. Both initial state and initial
   * configuration options are merged with defaults upon initialization.
   *
   * @param config - Initial options used to configure this controller
   * @param state - Initial state to set on this controller
   */
  constructor({
    config: e = {},
    state: n = {}
  }) {
    super(), oe(this, "defaultConfig", {}), oe(this, "defaultState", {}), oe(this, "disabled", !1), oe(this, "name", "BaseController"), oe(this, "initialConfig", void 0), oe(this, "initialState", void 0), oe(this, "internalConfig", this.defaultConfig), oe(this, "internalState", this.defaultState), this.initialState = n, this.initialConfig = e;
  }
  /**
   * Retrieves current controller configuration options
   *
   * @returns - Current configuration
   */
  get config() {
    return this.internalConfig;
  }
  /**
   * Retrieves current controller state
   *
   * @returns - Current state
   */
  get state() {
    return this.internalState;
  }
  /**
   * Updates controller configuration
   *
   * @param config - New configuration options
   * @param overwrite - Overwrite config instead of merging
   * @param fullUpdate - Boolean that defines if the update is partial or not
   */
  configure(e, n = !1, r = !0) {
    if (r) {
      this.internalConfig = n ? e : Object.assign(this.internalConfig, e);
      for (const i in this.internalConfig)
        typeof this.internalConfig[i] < "u" && (this[i] = this.internalConfig[i]);
    } else
      for (const i in e)
        typeof this.internalConfig[i] < "u" && (this.internalConfig[i] = e[i], this[i] = e[i]);
  }
  /**
   * Updates controller state
   *
   * @param state - New state
   * @param overwrite - Overwrite state instead of merging
   */
  update(e, n = !1) {
    this.internalState = le(n ? {} : le({}, this.internalState), e), this.emit("store", this.internalState);
  }
  /**
   * Enables the controller. This sets each config option as a member
   * variable on this instance and triggers any defined setters. This
   * also sets initial state and triggers any listeners.
   *
   * @returns - This controller instance
   */
  initialize() {
    return this.internalState = this.defaultState, this.internalConfig = this.defaultConfig, this.configure(this.initialConfig), this.update(this.initialState), this;
  }
}
const nS = () => !0, rS = ["newListener", "removeListener"], iS = (t) => !rS.includes(t);
function sS(t, e) {
  return typeof t.rawListeners < "u" ? t.rawListeners(e) : t.listeners(e);
}
function oS(t, e) {
  let r = {}.eventFilter || nS;
  if (typeof r == "string" && r === "skipInternal" && (r = iS), typeof r != "function") throw new Error("createEventEmitterProxy - Invalid eventFilter");
  let i = t, s = (a) => {
    if (i === a) return;
    const c = i;
    i = a, c.eventNames().filter(r).forEach((f) => {
      sS(c, f).forEach((l) => {
        a.on(f, l);
      });
    }), c.removeAllListeners();
  };
  return new Proxy({}, {
    get: (a, c) => c === "setTarget" ? s : i[c],
    set: (a, c, u) => c === "setTarget" ? (s = u, !0) : (i[c] = u, !0)
  });
}
var aS = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Sc = Math.ceil, xt = Math.floor, rt = "[BigNumber Error] ", ph = rt + "Number primitive has more than 15 significant digits: ", Bt = 1e14, ae = 14, _c = 9007199254740991, Ac = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Rn = 1e7, De = 1e9;
function hg(t) {
  var e, n, r, i = E.prototype = { constructor: E, toString: null, valueOf: null }, s = new E(1), o = 20, a = 4, c = -7, u = 21, f = -1e7, l = 1e7, d = !1, y = 1, w = 0, h = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, g = "0123456789abcdefghijklmnopqrstuvwxyz", b = !0;
  function E(p, x) {
    var _, P, I, A, R, m, v, B, $ = this;
    if (!($ instanceof E)) return new E(p, x);
    if (x == null) {
      if (p && p._isBigNumber === !0) {
        $.s = p.s, !p.c || p.e > l ? $.c = $.e = null : p.e < f ? $.c = [$.e = 0] : ($.e = p.e, $.c = p.c.slice());
        return;
      }
      if ((m = typeof p == "number") && p * 0 == 0) {
        if ($.s = 1 / p < 0 ? (p = -p, -1) : 1, p === ~~p) {
          for (A = 0, R = p; R >= 10; R /= 10, A++) ;
          A > l ? $.c = $.e = null : ($.e = A, $.c = [p]);
          return;
        }
        B = String(p);
      } else {
        if (!aS.test(B = String(p))) return r($, B, m);
        $.s = B.charCodeAt(0) == 45 ? (B = B.slice(1), -1) : 1;
      }
      (A = B.indexOf(".")) > -1 && (B = B.replace(".", "")), (R = B.search(/e/i)) > 0 ? (A < 0 && (A = R), A += +B.slice(R + 1), B = B.substring(0, R)) : A < 0 && (A = B.length);
    } else {
      if (Be(x, 2, g.length, "Base"), x == 10 && b)
        return $ = new E(p), C($, o + $.e + 1, a);
      if (B = String(p), m = typeof p == "number") {
        if (p * 0 != 0) return r($, B, m, x);
        if ($.s = 1 / p < 0 ? (B = B.slice(1), -1) : 1, E.DEBUG && B.replace(/^0\.0*|\./, "").length > 15)
          throw Error(ph + p);
      } else
        $.s = B.charCodeAt(0) === 45 ? (B = B.slice(1), -1) : 1;
      for (_ = g.slice(0, x), A = R = 0, v = B.length; R < v; R++)
        if (_.indexOf(P = B.charAt(R)) < 0) {
          if (P == ".") {
            if (R > A) {
              A = v;
              continue;
            }
          } else if (!I && (B == B.toUpperCase() && (B = B.toLowerCase()) || B == B.toLowerCase() && (B = B.toUpperCase()))) {
            I = !0, R = -1, A = 0;
            continue;
          }
          return r($, String(p), m, x);
        }
      m = !1, B = n(B, x, 10, $.s), (A = B.indexOf(".")) > -1 ? B = B.replace(".", "") : A = B.length;
    }
    for (R = 0; B.charCodeAt(R) === 48; R++) ;
    for (v = B.length; B.charCodeAt(--v) === 48; ) ;
    if (B = B.slice(R, ++v)) {
      if (v -= R, m && E.DEBUG && v > 15 && (p > _c || p !== xt(p)))
        throw Error(ph + $.s * p);
      if ((A = A - R - 1) > l)
        $.c = $.e = null;
      else if (A < f)
        $.c = [$.e = 0];
      else {
        if ($.e = A, $.c = [], R = (A + 1) % ae, A < 0 && (R += ae), R < v) {
          for (R && $.c.push(+B.slice(0, R)), v -= ae; R < v; )
            $.c.push(+B.slice(R, R += ae));
          R = ae - (B = B.slice(R)).length;
        } else
          R -= v;
        for (; R--; B += "0") ;
        $.c.push(+B);
      }
    } else
      $.c = [$.e = 0];
  }
  E.clone = hg, E.ROUND_UP = 0, E.ROUND_DOWN = 1, E.ROUND_CEIL = 2, E.ROUND_FLOOR = 3, E.ROUND_HALF_UP = 4, E.ROUND_HALF_DOWN = 5, E.ROUND_HALF_EVEN = 6, E.ROUND_HALF_CEIL = 7, E.ROUND_HALF_FLOOR = 8, E.EUCLID = 9, E.config = E.set = function(p) {
    var x, _;
    if (p != null)
      if (typeof p == "object") {
        if (p.hasOwnProperty(x = "DECIMAL_PLACES") && (_ = p[x], Be(_, 0, De, x), o = _), p.hasOwnProperty(x = "ROUNDING_MODE") && (_ = p[x], Be(_, 0, 8, x), a = _), p.hasOwnProperty(x = "EXPONENTIAL_AT") && (_ = p[x], _ && _.pop ? (Be(_[0], -De, 0, x), Be(_[1], 0, De, x), c = _[0], u = _[1]) : (Be(_, -De, De, x), c = -(u = _ < 0 ? -_ : _))), p.hasOwnProperty(x = "RANGE"))
          if (_ = p[x], _ && _.pop)
            Be(_[0], -De, -1, x), Be(_[1], 1, De, x), f = _[0], l = _[1];
          else if (Be(_, -De, De, x), _)
            f = -(l = _ < 0 ? -_ : _);
          else
            throw Error(rt + x + " cannot be zero: " + _);
        if (p.hasOwnProperty(x = "CRYPTO"))
          if (_ = p[x], _ === !!_)
            if (_)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                d = _;
              else
                throw d = !_, Error(rt + "crypto unavailable");
            else
              d = _;
          else
            throw Error(rt + x + " not true or false: " + _);
        if (p.hasOwnProperty(x = "MODULO_MODE") && (_ = p[x], Be(_, 0, 9, x), y = _), p.hasOwnProperty(x = "POW_PRECISION") && (_ = p[x], Be(_, 0, De, x), w = _), p.hasOwnProperty(x = "FORMAT"))
          if (_ = p[x], typeof _ == "object") h = _;
          else throw Error(rt + x + " not an object: " + _);
        if (p.hasOwnProperty(x = "ALPHABET"))
          if (_ = p[x], typeof _ == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(_))
            b = _.slice(0, 10) == "0123456789", g = _;
          else
            throw Error(rt + x + " invalid: " + _);
      } else
        throw Error(rt + "Object expected: " + p);
    return {
      DECIMAL_PLACES: o,
      ROUNDING_MODE: a,
      EXPONENTIAL_AT: [c, u],
      RANGE: [f, l],
      CRYPTO: d,
      MODULO_MODE: y,
      POW_PRECISION: w,
      FORMAT: h,
      ALPHABET: g
    };
  }, E.isBigNumber = function(p) {
    if (!p || p._isBigNumber !== !0) return !1;
    if (!E.DEBUG) return !0;
    var x, _, P = p.c, I = p.e, A = p.s;
    e: if ({}.toString.call(P) == "[object Array]") {
      if ((A === 1 || A === -1) && I >= -De && I <= De && I === xt(I)) {
        if (P[0] === 0) {
          if (I === 0 && P.length === 1) return !0;
          break e;
        }
        if (x = (I + 1) % ae, x < 1 && (x += ae), String(P[0]).length == x) {
          for (x = 0; x < P.length; x++)
            if (_ = P[x], _ < 0 || _ >= Bt || _ !== xt(_)) break e;
          if (_ !== 0) return !0;
        }
      }
    } else if (P === null && I === null && (A === null || A === 1 || A === -1))
      return !0;
    throw Error(rt + "Invalid BigNumber: " + p);
  }, E.maximum = E.max = function() {
    return N(arguments, -1);
  }, E.minimum = E.min = function() {
    return N(arguments, 1);
  }, E.random = function() {
    var p = 9007199254740992, x = Math.random() * p & 2097151 ? function() {
      return xt(Math.random() * p);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(_) {
      var P, I, A, R, m, v = 0, B = [], $ = new E(s);
      if (_ == null ? _ = o : Be(_, 0, De), R = Sc(_ / ae), d)
        if (crypto.getRandomValues) {
          for (P = crypto.getRandomValues(new Uint32Array(R *= 2)); v < R; )
            m = P[v] * 131072 + (P[v + 1] >>> 11), m >= 9e15 ? (I = crypto.getRandomValues(new Uint32Array(2)), P[v] = I[0], P[v + 1] = I[1]) : (B.push(m % 1e14), v += 2);
          v = R / 2;
        } else if (crypto.randomBytes) {
          for (P = crypto.randomBytes(R *= 7); v < R; )
            m = (P[v] & 31) * 281474976710656 + P[v + 1] * 1099511627776 + P[v + 2] * 4294967296 + P[v + 3] * 16777216 + (P[v + 4] << 16) + (P[v + 5] << 8) + P[v + 6], m >= 9e15 ? crypto.randomBytes(7).copy(P, v) : (B.push(m % 1e14), v += 7);
          v = R / 7;
        } else
          throw d = !1, Error(rt + "crypto unavailable");
      if (!d)
        for (; v < R; )
          m = x(), m < 9e15 && (B[v++] = m % 1e14);
      for (R = B[--v], _ %= ae, R && _ && (m = Ac[ae - _], B[v] = xt(R / m) * m); B[v] === 0; B.pop(), v--) ;
      if (v < 0)
        B = [A = 0];
      else {
        for (A = -1; B[0] === 0; B.splice(0, 1), A -= ae) ;
        for (v = 1, m = B[0]; m >= 10; m /= 10, v++) ;
        v < ae && (A -= ae - v);
      }
      return $.e = A, $.c = B, $;
    };
  }(), E.sum = function() {
    for (var p = 1, x = arguments, _ = new E(x[0]); p < x.length; ) _ = _.plus(x[p++]);
    return _;
  }, n = /* @__PURE__ */ function() {
    var p = "0123456789";
    function x(_, P, I, A) {
      for (var R, m = [0], v, B = 0, $ = _.length; B < $; ) {
        for (v = m.length; v--; m[v] *= P) ;
        for (m[0] += A.indexOf(_.charAt(B++)), R = 0; R < m.length; R++)
          m[R] > I - 1 && (m[R + 1] == null && (m[R + 1] = 0), m[R + 1] += m[R] / I | 0, m[R] %= I);
      }
      return m.reverse();
    }
    return function(_, P, I, A, R) {
      var m, v, B, $, M, D, H, V, q = _.indexOf("."), Z = o, Y = a;
      for (q >= 0 && ($ = w, w = 0, _ = _.replace(".", ""), V = new E(P), D = V.pow(_.length - q), w = $, V.c = x(
        on(mt(D.c), D.e, "0"),
        10,
        I,
        p
      ), V.e = V.c.length), H = x(_, P, I, R ? (m = g, p) : (m = p, g)), B = $ = H.length; H[--$] == 0; H.pop()) ;
      if (!H[0]) return m.charAt(0);
      if (q < 0 ? --B : (D.c = H, D.e = B, D.s = A, D = e(D, V, Z, Y, I), H = D.c, M = D.r, B = D.e), v = B + Z + 1, q = H[v], $ = I / 2, M = M || v < 0 || H[v + 1] != null, M = Y < 4 ? (q != null || M) && (Y == 0 || Y == (D.s < 0 ? 3 : 2)) : q > $ || q == $ && (Y == 4 || M || Y == 6 && H[v - 1] & 1 || Y == (D.s < 0 ? 8 : 7)), v < 1 || !H[0])
        _ = M ? on(m.charAt(1), -Z, m.charAt(0)) : m.charAt(0);
      else {
        if (H.length = v, M)
          for (--I; ++H[--v] > I; )
            H[v] = 0, v || (++B, H = [1].concat(H));
        for ($ = H.length; !H[--$]; ) ;
        for (q = 0, _ = ""; q <= $; _ += m.charAt(H[q++])) ;
        _ = on(_, B, m.charAt(0));
      }
      return _;
    };
  }(), e = /* @__PURE__ */ function() {
    function p(P, I, A) {
      var R, m, v, B, $ = 0, M = P.length, D = I % Rn, H = I / Rn | 0;
      for (P = P.slice(); M--; )
        v = P[M] % Rn, B = P[M] / Rn | 0, R = H * v + B * D, m = D * v + R % Rn * Rn + $, $ = (m / A | 0) + (R / Rn | 0) + H * B, P[M] = m % A;
      return $ && (P = [$].concat(P)), P;
    }
    function x(P, I, A, R) {
      var m, v;
      if (A != R)
        v = A > R ? 1 : -1;
      else
        for (m = v = 0; m < A; m++)
          if (P[m] != I[m]) {
            v = P[m] > I[m] ? 1 : -1;
            break;
          }
      return v;
    }
    function _(P, I, A, R) {
      for (var m = 0; A--; )
        P[A] -= m, m = P[A] < I[A] ? 1 : 0, P[A] = m * R + P[A] - I[A];
      for (; !P[0] && P.length > 1; P.splice(0, 1)) ;
    }
    return function(P, I, A, R, m) {
      var v, B, $, M, D, H, V, q, Z, Y, ee, ie, be, ge, Ie, ye, de, F = P.s == I.s ? 1 : -1, U = P.c, j = I.c;
      if (!U || !U[0] || !j || !j[0])
        return new E(
          // Return NaN if either NaN, or both Infinity or 0.
          !P.s || !I.s || (U ? j && U[0] == j[0] : !j) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            U && U[0] == 0 || !j ? F * 0 : F / 0
          )
        );
      for (q = new E(F), Z = q.c = [], B = P.e - I.e, F = A + B + 1, m || (m = Bt, B = vt(P.e / ae) - vt(I.e / ae), F = F / ae | 0), $ = 0; j[$] == (U[$] || 0); $++) ;
      if (j[$] > (U[$] || 0) && B--, F < 0)
        Z.push(1), M = !0;
      else {
        for (ge = U.length, ye = j.length, $ = 0, F += 2, D = xt(m / (j[0] + 1)), D > 1 && (j = p(j, D, m), U = p(U, D, m), ye = j.length, ge = U.length), be = ye, Y = U.slice(0, ye), ee = Y.length; ee < ye; Y[ee++] = 0) ;
        de = j.slice(), de = [0].concat(de), Ie = j[0], j[1] >= m / 2 && Ie++;
        do {
          if (D = 0, v = x(j, Y, ye, ee), v < 0) {
            if (ie = Y[0], ye != ee && (ie = ie * m + (Y[1] || 0)), D = xt(ie / Ie), D > 1)
              for (D >= m && (D = m - 1), H = p(j, D, m), V = H.length, ee = Y.length; x(H, Y, V, ee) == 1; )
                D--, _(H, ye < V ? de : j, V, m), V = H.length, v = 1;
            else
              D == 0 && (v = D = 1), H = j.slice(), V = H.length;
            if (V < ee && (H = [0].concat(H)), _(Y, H, ee, m), ee = Y.length, v == -1)
              for (; x(j, Y, ye, ee) < 1; )
                D++, _(Y, ye < ee ? de : j, ee, m), ee = Y.length;
          } else v === 0 && (D++, Y = [0]);
          Z[$++] = D, Y[0] ? Y[ee++] = U[be] || 0 : (Y = [U[be]], ee = 1);
        } while ((be++ < ge || Y[0] != null) && F--);
        M = Y[0] != null, Z[0] || Z.splice(0, 1);
      }
      if (m == Bt) {
        for ($ = 1, F = Z[0]; F >= 10; F /= 10, $++) ;
        C(q, A + (q.e = $ + B * ae - 1) + 1, R, M);
      } else
        q.e = B, q.r = +M;
      return q;
    };
  }();
  function S(p, x, _, P) {
    var I, A, R, m, v;
    if (_ == null ? _ = a : Be(_, 0, 8), !p.c) return p.toString();
    if (I = p.c[0], R = p.e, x == null)
      v = mt(p.c), v = P == 1 || P == 2 && (R <= c || R >= u) ? mo(v, R) : on(v, R, "0");
    else if (p = C(new E(p), x, _), A = p.e, v = mt(p.c), m = v.length, P == 1 || P == 2 && (x <= A || A <= c)) {
      for (; m < x; v += "0", m++) ;
      v = mo(v, A);
    } else if (x -= R, v = on(v, A, "0"), A + 1 > m) {
      if (--x > 0) for (v += "."; x--; v += "0") ;
    } else if (x += A - m, x > 0)
      for (A + 1 == m && (v += "."); x--; v += "0") ;
    return p.s < 0 && I ? "-" + v : v;
  }
  function N(p, x) {
    for (var _, P, I = 1, A = new E(p[0]); I < p.length; I++)
      P = new E(p[I]), (!P.s || (_ = rr(A, P)) === x || _ === 0 && A.s === x) && (A = P);
    return A;
  }
  function O(p, x, _) {
    for (var P = 1, I = x.length; !x[--I]; x.pop()) ;
    for (I = x[0]; I >= 10; I /= 10, P++) ;
    return (_ = P + _ * ae - 1) > l ? p.c = p.e = null : _ < f ? p.c = [p.e = 0] : (p.e = _, p.c = x), p;
  }
  r = /* @__PURE__ */ function() {
    var p = /^(-?)0([xbo])(?=\w[\w.]*$)/i, x = /^([^.]+)\.$/, _ = /^\.([^.]+)$/, P = /^-?(Infinity|NaN)$/, I = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(A, R, m, v) {
      var B, $ = m ? R : R.replace(I, "");
      if (P.test($))
        A.s = isNaN($) ? null : $ < 0 ? -1 : 1;
      else {
        if (!m && ($ = $.replace(p, function(M, D, H) {
          return B = (H = H.toLowerCase()) == "x" ? 16 : H == "b" ? 2 : 8, !v || v == B ? D : M;
        }), v && (B = v, $ = $.replace(x, "$1").replace(_, "0.$1")), R != $))
          return new E($, B);
        if (E.DEBUG)
          throw Error(rt + "Not a" + (v ? " base " + v : "") + " number: " + R);
        A.s = null;
      }
      A.c = A.e = null;
    };
  }();
  function C(p, x, _, P) {
    var I, A, R, m, v, B, $, M = p.c, D = Ac;
    if (M) {
      e: {
        for (I = 1, m = M[0]; m >= 10; m /= 10, I++) ;
        if (A = x - I, A < 0)
          A += ae, R = x, v = M[B = 0], $ = xt(v / D[I - R - 1] % 10);
        else if (B = Sc((A + 1) / ae), B >= M.length)
          if (P) {
            for (; M.length <= B; M.push(0)) ;
            v = $ = 0, I = 1, A %= ae, R = A - ae + 1;
          } else
            break e;
        else {
          for (v = m = M[B], I = 1; m >= 10; m /= 10, I++) ;
          A %= ae, R = A - ae + I, $ = R < 0 ? 0 : xt(v / D[I - R - 1] % 10);
        }
        if (P = P || x < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        M[B + 1] != null || (R < 0 ? v : v % D[I - R - 1]), P = _ < 4 ? ($ || P) && (_ == 0 || _ == (p.s < 0 ? 3 : 2)) : $ > 5 || $ == 5 && (_ == 4 || P || _ == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (A > 0 ? R > 0 ? v / D[I - R] : 0 : M[B - 1]) % 10 & 1 || _ == (p.s < 0 ? 8 : 7)), x < 1 || !M[0])
          return M.length = 0, P ? (x -= p.e + 1, M[0] = D[(ae - x % ae) % ae], p.e = -x || 0) : M[0] = p.e = 0, p;
        if (A == 0 ? (M.length = B, m = 1, B--) : (M.length = B + 1, m = D[ae - A], M[B] = R > 0 ? xt(v / D[I - R] % D[R]) * m : 0), P)
          for (; ; )
            if (B == 0) {
              for (A = 1, R = M[0]; R >= 10; R /= 10, A++) ;
              for (R = M[0] += m, m = 1; R >= 10; R /= 10, m++) ;
              A != m && (p.e++, M[0] == Bt && (M[0] = 1));
              break;
            } else {
              if (M[B] += m, M[B] != Bt) break;
              M[B--] = 0, m = 1;
            }
        for (A = M.length; M[--A] === 0; M.pop()) ;
      }
      p.e > l ? p.c = p.e = null : p.e < f && (p.c = [p.e = 0]);
    }
    return p;
  }
  function L(p) {
    var x, _ = p.e;
    return _ === null ? p.toString() : (x = mt(p.c), x = _ <= c || _ >= u ? mo(x, _) : on(x, _, "0"), p.s < 0 ? "-" + x : x);
  }
  return i.absoluteValue = i.abs = function() {
    var p = new E(this);
    return p.s < 0 && (p.s = 1), p;
  }, i.comparedTo = function(p, x) {
    return rr(this, new E(p, x));
  }, i.decimalPlaces = i.dp = function(p, x) {
    var _, P, I, A = this;
    if (p != null)
      return Be(p, 0, De), x == null ? x = a : Be(x, 0, 8), C(new E(A), p + A.e + 1, x);
    if (!(_ = A.c)) return null;
    if (P = ((I = _.length - 1) - vt(this.e / ae)) * ae, I = _[I]) for (; I % 10 == 0; I /= 10, P--) ;
    return P < 0 && (P = 0), P;
  }, i.dividedBy = i.div = function(p, x) {
    return e(this, new E(p, x), o, a);
  }, i.dividedToIntegerBy = i.idiv = function(p, x) {
    return e(this, new E(p, x), 0, 1);
  }, i.exponentiatedBy = i.pow = function(p, x) {
    var _, P, I, A, R, m, v, B, $, M = this;
    if (p = new E(p), p.c && !p.isInteger())
      throw Error(rt + "Exponent not an integer: " + L(p));
    if (x != null && (x = new E(x)), m = p.e > 14, !M.c || !M.c[0] || M.c[0] == 1 && !M.e && M.c.length == 1 || !p.c || !p.c[0])
      return $ = new E(Math.pow(+L(M), m ? p.s * (2 - bo(p)) : +L(p))), x ? $.mod(x) : $;
    if (v = p.s < 0, x) {
      if (x.c ? !x.c[0] : !x.s) return new E(NaN);
      P = !v && M.isInteger() && x.isInteger(), P && (M = M.mod(x));
    } else {
      if (p.e > 9 && (M.e > 0 || M.e < -1 || (M.e == 0 ? M.c[0] > 1 || m && M.c[1] >= 24e7 : M.c[0] < 8e13 || m && M.c[0] <= 9999975e7)))
        return A = M.s < 0 && bo(p) ? -0 : 0, M.e > -1 && (A = 1 / A), new E(v ? 1 / A : A);
      w && (A = Sc(w / ae + 2));
    }
    for (m ? (_ = new E(0.5), v && (p.s = 1), B = bo(p)) : (I = Math.abs(+L(p)), B = I % 2), $ = new E(s); ; ) {
      if (B) {
        if ($ = $.times(M), !$.c) break;
        A ? $.c.length > A && ($.c.length = A) : P && ($ = $.mod(x));
      }
      if (I) {
        if (I = xt(I / 2), I === 0) break;
        B = I % 2;
      } else if (p = p.times(_), C(p, p.e + 1, 1), p.e > 14)
        B = bo(p);
      else {
        if (I = +L(p), I === 0) break;
        B = I % 2;
      }
      M = M.times(M), A ? M.c && M.c.length > A && (M.c.length = A) : P && (M = M.mod(x));
    }
    return P ? $ : (v && ($ = s.div($)), x ? $.mod(x) : A ? C($, w, a, R) : $);
  }, i.integerValue = function(p) {
    var x = new E(this);
    return p == null ? p = a : Be(p, 0, 8), C(x, x.e + 1, p);
  }, i.isEqualTo = i.eq = function(p, x) {
    return rr(this, new E(p, x)) === 0;
  }, i.isFinite = function() {
    return !!this.c;
  }, i.isGreaterThan = i.gt = function(p, x) {
    return rr(this, new E(p, x)) > 0;
  }, i.isGreaterThanOrEqualTo = i.gte = function(p, x) {
    return (x = rr(this, new E(p, x))) === 1 || x === 0;
  }, i.isInteger = function() {
    return !!this.c && vt(this.e / ae) > this.c.length - 2;
  }, i.isLessThan = i.lt = function(p, x) {
    return rr(this, new E(p, x)) < 0;
  }, i.isLessThanOrEqualTo = i.lte = function(p, x) {
    return (x = rr(this, new E(p, x))) === -1 || x === 0;
  }, i.isNaN = function() {
    return !this.s;
  }, i.isNegative = function() {
    return this.s < 0;
  }, i.isPositive = function() {
    return this.s > 0;
  }, i.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, i.minus = function(p, x) {
    var _, P, I, A, R = this, m = R.s;
    if (p = new E(p, x), x = p.s, !m || !x) return new E(NaN);
    if (m != x)
      return p.s = -x, R.plus(p);
    var v = R.e / ae, B = p.e / ae, $ = R.c, M = p.c;
    if (!v || !B) {
      if (!$ || !M) return $ ? (p.s = -x, p) : new E(M ? R : NaN);
      if (!$[0] || !M[0])
        return M[0] ? (p.s = -x, p) : new E($[0] ? R : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          a == 3 ? -0 : 0
        ));
    }
    if (v = vt(v), B = vt(B), $ = $.slice(), m = v - B) {
      for ((A = m < 0) ? (m = -m, I = $) : (B = v, I = M), I.reverse(), x = m; x--; I.push(0)) ;
      I.reverse();
    } else
      for (P = (A = (m = $.length) < (x = M.length)) ? m : x, m = x = 0; x < P; x++)
        if ($[x] != M[x]) {
          A = $[x] < M[x];
          break;
        }
    if (A && (I = $, $ = M, M = I, p.s = -p.s), x = (P = M.length) - (_ = $.length), x > 0) for (; x--; $[_++] = 0) ;
    for (x = Bt - 1; P > m; ) {
      if ($[--P] < M[P]) {
        for (_ = P; _ && !$[--_]; $[_] = x) ;
        --$[_], $[P] += Bt;
      }
      $[P] -= M[P];
    }
    for (; $[0] == 0; $.splice(0, 1), --B) ;
    return $[0] ? O(p, $, B) : (p.s = a == 3 ? -1 : 1, p.c = [p.e = 0], p);
  }, i.modulo = i.mod = function(p, x) {
    var _, P, I = this;
    return p = new E(p, x), !I.c || !p.s || p.c && !p.c[0] ? new E(NaN) : !p.c || I.c && !I.c[0] ? new E(I) : (y == 9 ? (P = p.s, p.s = 1, _ = e(I, p, 0, 3), p.s = P, _.s *= P) : _ = e(I, p, 0, y), p = I.minus(_.times(p)), !p.c[0] && y == 1 && (p.s = I.s), p);
  }, i.multipliedBy = i.times = function(p, x) {
    var _, P, I, A, R, m, v, B, $, M, D, H, V, q, Z, Y = this, ee = Y.c, ie = (p = new E(p, x)).c;
    if (!ee || !ie || !ee[0] || !ie[0])
      return !Y.s || !p.s || ee && !ee[0] && !ie || ie && !ie[0] && !ee ? p.c = p.e = p.s = null : (p.s *= Y.s, !ee || !ie ? p.c = p.e = null : (p.c = [0], p.e = 0)), p;
    for (P = vt(Y.e / ae) + vt(p.e / ae), p.s *= Y.s, v = ee.length, M = ie.length, v < M && (V = ee, ee = ie, ie = V, I = v, v = M, M = I), I = v + M, V = []; I--; V.push(0)) ;
    for (q = Bt, Z = Rn, I = M; --I >= 0; ) {
      for (_ = 0, D = ie[I] % Z, H = ie[I] / Z | 0, R = v, A = I + R; A > I; )
        B = ee[--R] % Z, $ = ee[R] / Z | 0, m = H * B + $ * D, B = D * B + m % Z * Z + V[A] + _, _ = (B / q | 0) + (m / Z | 0) + H * $, V[A--] = B % q;
      V[A] = _;
    }
    return _ ? ++P : V.splice(0, 1), O(p, V, P);
  }, i.negated = function() {
    var p = new E(this);
    return p.s = -p.s || null, p;
  }, i.plus = function(p, x) {
    var _, P = this, I = P.s;
    if (p = new E(p, x), x = p.s, !I || !x) return new E(NaN);
    if (I != x)
      return p.s = -x, P.minus(p);
    var A = P.e / ae, R = p.e / ae, m = P.c, v = p.c;
    if (!A || !R) {
      if (!m || !v) return new E(I / 0);
      if (!m[0] || !v[0]) return v[0] ? p : new E(m[0] ? P : I * 0);
    }
    if (A = vt(A), R = vt(R), m = m.slice(), I = A - R) {
      for (I > 0 ? (R = A, _ = v) : (I = -I, _ = m), _.reverse(); I--; _.push(0)) ;
      _.reverse();
    }
    for (I = m.length, x = v.length, I - x < 0 && (_ = v, v = m, m = _, x = I), I = 0; x; )
      I = (m[--x] = m[x] + v[x] + I) / Bt | 0, m[x] = Bt === m[x] ? 0 : m[x] % Bt;
    return I && (m = [I].concat(m), ++R), O(p, m, R);
  }, i.precision = i.sd = function(p, x) {
    var _, P, I, A = this;
    if (p != null && p !== !!p)
      return Be(p, 1, De), x == null ? x = a : Be(x, 0, 8), C(new E(A), p, x);
    if (!(_ = A.c)) return null;
    if (I = _.length - 1, P = I * ae + 1, I = _[I]) {
      for (; I % 10 == 0; I /= 10, P--) ;
      for (I = _[0]; I >= 10; I /= 10, P++) ;
    }
    return p && A.e + 1 > P && (P = A.e + 1), P;
  }, i.shiftedBy = function(p) {
    return Be(p, -_c, _c), this.times("1e" + p);
  }, i.squareRoot = i.sqrt = function() {
    var p, x, _, P, I, A = this, R = A.c, m = A.s, v = A.e, B = o + 4, $ = new E("0.5");
    if (m !== 1 || !R || !R[0])
      return new E(!m || m < 0 && (!R || R[0]) ? NaN : R ? A : 1 / 0);
    if (m = Math.sqrt(+L(A)), m == 0 || m == 1 / 0 ? (x = mt(R), (x.length + v) % 2 == 0 && (x += "0"), m = Math.sqrt(+x), v = vt((v + 1) / 2) - (v < 0 || v % 2), m == 1 / 0 ? x = "5e" + v : (x = m.toExponential(), x = x.slice(0, x.indexOf("e") + 1) + v), _ = new E(x)) : _ = new E(m + ""), _.c[0]) {
      for (v = _.e, m = v + B, m < 3 && (m = 0); ; )
        if (I = _, _ = $.times(I.plus(e(A, I, B, 1))), mt(I.c).slice(0, m) === (x = mt(_.c)).slice(0, m))
          if (_.e < v && --m, x = x.slice(m - 3, m + 1), x == "9999" || !P && x == "4999") {
            if (!P && (C(I, I.e + o + 2, 0), I.times(I).eq(A))) {
              _ = I;
              break;
            }
            B += 4, m += 4, P = 1;
          } else {
            (!+x || !+x.slice(1) && x.charAt(0) == "5") && (C(_, _.e + o + 2, 1), p = !_.times(_).eq(A));
            break;
          }
    }
    return C(_, _.e + o + 1, a, p);
  }, i.toExponential = function(p, x) {
    return p != null && (Be(p, 0, De), p++), S(this, p, x, 1);
  }, i.toFixed = function(p, x) {
    return p != null && (Be(p, 0, De), p = p + this.e + 1), S(this, p, x);
  }, i.toFormat = function(p, x, _) {
    var P, I = this;
    if (_ == null)
      p != null && x && typeof x == "object" ? (_ = x, x = null) : p && typeof p == "object" ? (_ = p, p = x = null) : _ = h;
    else if (typeof _ != "object")
      throw Error(rt + "Argument not an object: " + _);
    if (P = I.toFixed(p, x), I.c) {
      var A, R = P.split("."), m = +_.groupSize, v = +_.secondaryGroupSize, B = _.groupSeparator || "", $ = R[0], M = R[1], D = I.s < 0, H = D ? $.slice(1) : $, V = H.length;
      if (v && (A = m, m = v, v = A, V -= A), m > 0 && V > 0) {
        for (A = V % m || m, $ = H.substr(0, A); A < V; A += m) $ += B + H.substr(A, m);
        v > 0 && ($ += B + H.slice(A)), D && ($ = "-" + $);
      }
      P = M ? $ + (_.decimalSeparator || "") + ((v = +_.fractionGroupSize) ? M.replace(
        new RegExp("\\d{" + v + "}\\B", "g"),
        "$&" + (_.fractionGroupSeparator || "")
      ) : M) : $;
    }
    return (_.prefix || "") + P + (_.suffix || "");
  }, i.toFraction = function(p) {
    var x, _, P, I, A, R, m, v, B, $, M, D, H = this, V = H.c;
    if (p != null && (m = new E(p), !m.isInteger() && (m.c || m.s !== 1) || m.lt(s)))
      throw Error(rt + "Argument " + (m.isInteger() ? "out of range: " : "not an integer: ") + L(m));
    if (!V) return new E(H);
    for (x = new E(s), B = _ = new E(s), P = v = new E(s), D = mt(V), A = x.e = D.length - H.e - 1, x.c[0] = Ac[(R = A % ae) < 0 ? ae + R : R], p = !p || m.comparedTo(x) > 0 ? A > 0 ? x : B : m, R = l, l = 1 / 0, m = new E(D), v.c[0] = 0; $ = e(m, x, 0, 1), I = _.plus($.times(P)), I.comparedTo(p) != 1; )
      _ = P, P = I, B = v.plus($.times(I = B)), v = I, x = m.minus($.times(I = x)), m = I;
    return I = e(p.minus(_), P, 0, 1), v = v.plus(I.times(B)), _ = _.plus(I.times(P)), v.s = B.s = H.s, A = A * 2, M = e(B, P, A, a).minus(H).abs().comparedTo(
      e(v, _, A, a).minus(H).abs()
    ) < 1 ? [B, P] : [v, _], l = R, M;
  }, i.toNumber = function() {
    return +L(this);
  }, i.toPrecision = function(p, x) {
    return p != null && Be(p, 1, De), S(this, p, x, 2);
  }, i.toString = function(p) {
    var x, _ = this, P = _.s, I = _.e;
    return I === null ? P ? (x = "Infinity", P < 0 && (x = "-" + x)) : x = "NaN" : (p == null ? x = I <= c || I >= u ? mo(mt(_.c), I) : on(mt(_.c), I, "0") : p === 10 && b ? (_ = C(new E(_), o + I + 1, a), x = on(mt(_.c), _.e, "0")) : (Be(p, 2, g.length, "Base"), x = n(on(mt(_.c), I, "0"), 10, p, P, !0)), P < 0 && _.c[0] && (x = "-" + x)), x;
  }, i.valueOf = i.toJSON = function() {
    return L(this);
  }, i._isBigNumber = !0, i[Symbol.toStringTag] = "BigNumber", i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf, t != null && E.set(t), E;
}
function vt(t) {
  var e = t | 0;
  return t > 0 || t === e ? e : e - 1;
}
function mt(t) {
  for (var e, n, r = 1, i = t.length, s = t[0] + ""; r < i; ) {
    for (e = t[r++] + "", n = ae - e.length; n--; e = "0" + e) ;
    s += e;
  }
  for (i = s.length; s.charCodeAt(--i) === 48; ) ;
  return s.slice(0, i + 1 || 1);
}
function rr(t, e) {
  var n, r, i = t.c, s = e.c, o = t.s, a = e.s, c = t.e, u = e.e;
  if (!o || !a) return null;
  if (n = i && !i[0], r = s && !s[0], n || r) return n ? r ? 0 : -a : o;
  if (o != a) return o;
  if (n = o < 0, r = c == u, !i || !s) return r ? 0 : !i ^ n ? 1 : -1;
  if (!r) return c > u ^ n ? 1 : -1;
  for (a = (c = i.length) < (u = s.length) ? c : u, o = 0; o < a; o++) if (i[o] != s[o]) return i[o] > s[o] ^ n ? 1 : -1;
  return c == u ? 0 : c > u ^ n ? 1 : -1;
}
function Be(t, e, n, r) {
  if (t < e || t > n || t !== xt(t))
    throw Error(rt + (r || "Argument") + (typeof t == "number" ? t < e || t > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t));
}
function bo(t) {
  var e = t.c.length - 1;
  return vt(t.e / ae) == e && t.c[e] % 2 != 0;
}
function mo(t, e) {
  return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e;
}
function on(t, e, n) {
  var r, i;
  if (e < 0) {
    for (i = n + "."; ++e; i += n) ;
    t = i + t;
  } else if (r = t.length, ++e > r) {
    for (i = n, e -= r; --e; i += n) ;
    t += i;
  } else e < r && (t = t.slice(0, e) + "." + t.slice(e));
  return t;
}
var qe = hg();
function gh(t, e) {
  if (t !== "" && !/^[a-f0-9]+$/iu.test(t))
    throw new Error(`Expected an unprefixed hex string. Received: ${t}`);
  return String.prototype.padStart.call(t, e, "0");
}
function Of(t, e, n) {
  const r = ch(e), i = ch(n), s = dg(t), o = gh(xe.from(uh(r)).toString("hex"), 64), a = gh(xe.from(uh(i)).toString("hex"), 64), c = Vn(Kv(s));
  return Ze(o.concat(a, c));
}
const cS = [
  // ignore server overload errors
  "Gateway timeout",
  "ETIMEDOUT",
  // ignore server sent html error pages
  // or truncated json responses
  "failed to parse response body",
  // ignore errors where http req failed to establish
  "Failed to fetch"
];
function uS(t) {
  switch (t.status) {
    case 405:
      throw we.methodNotFound();
    case 418:
      throw we.internal({
        message: "Request is being rate limited.",
        data: {
          cause: t
        }
      });
    case 503:
    case 504:
      throw we.internal({
        message: "Gateway timeout. The request took too long to process.This can happen when querying over too wide a block range.",
        data: {
          cause: t
        }
      });
  }
}
function fS(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function lS(t, e) {
  if (t.status !== 200)
    throw we.internal({
      message: `Non-200 status code: '${t.status}'`,
      data: e
    });
  if (e.error) {
    var n;
    throw we.internal({
      data: e.error,
      message: (n = e.error) === null || n === void 0 ? void 0 : n.message
    });
  }
  return e.result;
}
function dS({
  req: t,
  rpcTarget: e,
  originHttpHeaderKey: n
}) {
  const r = new URL(e), i = {
    id: t.id,
    jsonrpc: t.jsonrpc,
    method: t.method,
    params: t.params
  }, s = t.origin, o = JSON.stringify(i), a = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: o
  };
  return n && s && (a.headers[n] = s), {
    fetchUrl: r.href,
    fetchParams: a
  };
}
function hS({
  rpcTarget: t,
  originHttpHeaderKey: e
}) {
  return it(async (n, r, i) => {
    const {
      fetchUrl: s,
      fetchParams: o
    } = dS({
      req: n,
      rpcTarget: t,
      originHttpHeaderKey: e
    }), a = 5, c = 1e3;
    for (let u = 0; u < a; u++) {
      try {
        const f = await fetch(s, o);
        uS(f);
        const l = await f.json(), d = lS(f, l);
        r.result = d;
        return;
      } catch (f) {
        const l = (f.message || f).toString();
        if (!cS.some((y) => l.includes(y)))
          throw f;
      }
      await fS(c);
    }
  });
}
function VT(t) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...t
  };
}
const pg = "2.21.32";
let es = {
  getDocsUrl: ({ docsBaseUrl: t, docsPath: e = "", docsSlug: n }) => e ? `${t ?? "https://viem.sh"}${e}${n ? `#${n}` : ""}` : void 0,
  version: `viem@${pg}`
}, G = class vu extends Error {
  constructor(e, n = {}) {
    var a;
    const r = (() => {
      var c;
      return n.cause instanceof vu ? n.cause.details : (c = n.cause) != null && c.message ? n.cause.message : n.details;
    })(), i = n.cause instanceof vu && n.cause.docsPath || n.docsPath, s = (a = es.getDocsUrl) == null ? void 0 : a.call(es, { ...n, docsPath: i }), o = [
      e || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...s ? [`Docs: ${s}`] : [],
      ...r ? [`Details: ${r}`] : [],
      ...es.version ? [`Version: ${es.version}`] : []
    ].join(`
`);
    super(o, n.cause ? { cause: n.cause } : void 0), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "BaseError"
    }), this.details = r, this.docsPath = i, this.metaMessages = n.metaMessages, this.name = n.name ?? this.name, this.shortMessage = e, this.version = pg;
  }
  walk(e) {
    return gg(this, e);
  }
};
function gg(t, e) {
  return e != null && e(t) ? t : t && typeof t == "object" && "cause" in t ? gg(t.cause, e) : e ? null : t;
}
class pS extends G {
  constructor({ max: e, min: n, signed: r, size: i, value: s }) {
    super(`Number "${s}" is not in safe ${i ? `${i * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${e ? `(${n} to ${e})` : `(above ${n})`}`, { name: "IntegerOutOfRangeError" });
  }
}
class gS extends G {
  constructor(e) {
    super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
      name: "InvalidBytesBooleanError"
    });
  }
}
class yS extends G {
  constructor(e) {
    super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`, { name: "InvalidHexBooleanError" });
  }
}
class bS extends G {
  constructor({ givenSize: e, maxSize: n }) {
    super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`, { name: "SizeOverflowError" });
  }
}
function Mt(t, { strict: e = !0 } = {}) {
  return !t || typeof t != "string" ? !1 : e ? /^0x[0-9a-fA-F]*$/.test(t) : t.startsWith("0x");
}
function Ce(t) {
  return Mt(t, { strict: !1 }) ? Math.ceil((t.length - 2) / 2) : t.length;
}
function mr(t, { dir: e = "left" } = {}) {
  let n = typeof t == "string" ? t.replace("0x", "") : t, r = 0;
  for (let i = 0; i < n.length - 1 && n[e === "left" ? i : n.length - i - 1].toString() === "0"; i++)
    r++;
  return n = e === "left" ? n.slice(r) : n.slice(0, n.length - r), typeof t == "string" ? (n.length === 1 && e === "right" && (n = `${n}0`), `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n;
}
class yg extends G {
  constructor({ offset: e, position: n, size: r }) {
    super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${e}" is out-of-bounds (size: ${r}).`, { name: "SliceOffsetOutOfBoundsError" });
  }
}
class bg extends G {
  constructor({ size: e, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`, { name: "SizeExceedsPaddingSizeError" });
  }
}
class yh extends G {
  constructor({ size: e, targetSize: n, type: r }) {
    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${e} ${r} long.`, { name: "InvalidBytesLengthError" });
  }
}
function Hi(t, { dir: e, size: n = 32 } = {}) {
  return typeof t == "string" ? zn(t, { dir: e, size: n }) : mS(t, { dir: e, size: n });
}
function zn(t, { dir: e, size: n = 32 } = {}) {
  if (n === null)
    return t;
  const r = t.replace("0x", "");
  if (r.length > n * 2)
    throw new bg({
      size: Math.ceil(r.length / 2),
      targetSize: n,
      type: "hex"
    });
  return `0x${r[e === "right" ? "padEnd" : "padStart"](n * 2, "0")}`;
}
function mS(t, { dir: e, size: n = 32 } = {}) {
  if (n === null)
    return t;
  if (t.length > n)
    throw new bg({
      size: t.length,
      targetSize: n,
      type: "bytes"
    });
  const r = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    const s = e === "right";
    r[s ? i : n - i - 1] = t[s ? i : t.length - i - 1];
  }
  return r;
}
const wS = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Qt(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? re(t, e) : typeof t == "string" ? Si(t, e) : typeof t == "boolean" ? mg(t, e) : Ue(t, e);
}
function mg(t, e = {}) {
  const n = `0x${Number(t)}`;
  return typeof e.size == "number" ? (Ht(n, { size: e.size }), Hi(n, { size: e.size })) : n;
}
function Ue(t, e = {}) {
  let n = "";
  for (let i = 0; i < t.length; i++)
    n += wS[t[i]];
  const r = `0x${n}`;
  return typeof e.size == "number" ? (Ht(r, { size: e.size }), Hi(r, { dir: "right", size: e.size })) : r;
}
function re(t, e = {}) {
  const { signed: n, size: r } = e, i = BigInt(t);
  let s;
  r ? n ? s = (1n << BigInt(r) * 8n - 1n) - 1n : s = 2n ** (BigInt(r) * 8n) - 1n : typeof t == "number" && (s = BigInt(Number.MAX_SAFE_INTEGER));
  const o = typeof s == "bigint" && n ? -s - 1n : 0;
  if (s && i > s || i < o) {
    const c = typeof t == "bigint" ? "n" : "";
    throw new pS({
      max: s ? `${s}${c}` : void 0,
      min: `${o}${c}`,
      signed: n,
      size: r,
      value: `${t}${c}`
    });
  }
  const a = `0x${(n && i < 0 ? (1n << BigInt(r * 8)) + BigInt(i) : i).toString(16)}`;
  return r ? Hi(a, { size: r }) : a;
}
const ES = /* @__PURE__ */ new TextEncoder();
function Si(t, e = {}) {
  const n = ES.encode(t);
  return Ue(n, e);
}
const xS = /* @__PURE__ */ new TextEncoder();
function Gi(t, e = {}) {
  return typeof t == "number" || typeof t == "bigint" ? SS(t, e) : typeof t == "boolean" ? vS(t, e) : Mt(t) ? Ft(t, e) : wr(t, e);
}
function vS(t, e = {}) {
  const n = new Uint8Array(1);
  return n[0] = Number(t), typeof e.size == "number" ? (Ht(n, { size: e.size }), Hi(n, { size: e.size })) : n;
}
const an = {
  zero: 48,
  nine: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function bh(t) {
  if (t >= an.zero && t <= an.nine)
    return t - an.zero;
  if (t >= an.A && t <= an.F)
    return t - (an.A - 10);
  if (t >= an.a && t <= an.f)
    return t - (an.a - 10);
}
function Ft(t, e = {}) {
  let n = t;
  e.size && (Ht(n, { size: e.size }), n = Hi(n, { dir: "right", size: e.size }));
  let r = n.slice(2);
  r.length % 2 && (r = `0${r}`);
  const i = r.length / 2, s = new Uint8Array(i);
  for (let o = 0, a = 0; o < i; o++) {
    const c = bh(r.charCodeAt(a++)), u = bh(r.charCodeAt(a++));
    if (c === void 0 || u === void 0)
      throw new G(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
    s[o] = c * 16 + u;
  }
  return s;
}
function SS(t, e) {
  const n = re(t, e);
  return Ft(n);
}
function wr(t, e = {}) {
  const n = xS.encode(t);
  return typeof e.size == "number" ? (Ht(n, { size: e.size }), Hi(n, { dir: "right", size: e.size })) : n;
}
function Ht(t, { size: e }) {
  if (Ce(t) > e)
    throw new bS({
      givenSize: Ce(t),
      maxSize: e
    });
}
function Wn(t, e = {}) {
  const { signed: n } = e;
  e.size && Ht(t, { size: e.size });
  const r = BigInt(t);
  if (!n)
    return r;
  const i = (t.length - 2) / 2, s = (1n << BigInt(i) * 8n - 1n) - 1n;
  return r <= s ? r : r - BigInt(`0x${"f".padStart(i * 2, "f")}`) - 1n;
}
function _S(t, e = {}) {
  let n = t;
  if (e.size && (Ht(n, { size: e.size }), n = mr(n)), mr(n) === "0x00")
    return !1;
  if (mr(n) === "0x01")
    return !0;
  throw new yS(n);
}
function _n(t, e = {}) {
  return Number(Wn(t, e));
}
const wg = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function Eg(t) {
  const e = {
    ...t,
    blockHash: t.blockHash ? t.blockHash : null,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    chainId: t.chainId ? _n(t.chainId) : void 0,
    gas: t.gas ? BigInt(t.gas) : void 0,
    gasPrice: t.gasPrice ? BigInt(t.gasPrice) : void 0,
    maxFeePerBlobGas: t.maxFeePerBlobGas ? BigInt(t.maxFeePerBlobGas) : void 0,
    maxFeePerGas: t.maxFeePerGas ? BigInt(t.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: t.maxPriorityFeePerGas ? BigInt(t.maxPriorityFeePerGas) : void 0,
    nonce: t.nonce ? _n(t.nonce) : void 0,
    to: t.to ? t.to : null,
    transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
    type: t.type ? wg[t.type] : void 0,
    typeHex: t.type ? t.type : void 0,
    value: t.value ? BigInt(t.value) : void 0,
    v: t.v ? BigInt(t.v) : void 0
  };
  return t.authorizationList && (e.authorizationList = AS(t.authorizationList)), e.yParity = (() => {
    if (t.yParity)
      return Number(t.yParity);
    if (typeof e.v == "bigint") {
      if (e.v === 0n || e.v === 27n)
        return 0;
      if (e.v === 1n || e.v === 28n)
        return 1;
      if (e.v >= 35n)
        return e.v % 2n === 0n ? 1 : 0;
    }
  })(), e.type === "legacy" && (delete e.accessList, delete e.maxFeePerBlobGas, delete e.maxFeePerGas, delete e.maxPriorityFeePerGas, delete e.yParity), e.type === "eip2930" && (delete e.maxFeePerBlobGas, delete e.maxFeePerGas, delete e.maxPriorityFeePerGas), e.type === "eip1559" && delete e.maxFeePerBlobGas, e;
}
function AS(t) {
  return t.map((e) => ({
    contractAddress: e.address,
    chainId: Number(e.chainId),
    nonce: Number(e.nonce),
    r: e.r,
    s: e.s,
    yParity: Number(e.yParity)
  }));
}
function xg(t) {
  var n;
  const e = (n = t.transactions) == null ? void 0 : n.map((r) => typeof r == "string" ? r : Eg(r));
  return {
    ...t,
    baseFeePerGas: t.baseFeePerGas ? BigInt(t.baseFeePerGas) : null,
    blobGasUsed: t.blobGasUsed ? BigInt(t.blobGasUsed) : void 0,
    difficulty: t.difficulty ? BigInt(t.difficulty) : void 0,
    excessBlobGas: t.excessBlobGas ? BigInt(t.excessBlobGas) : void 0,
    gasLimit: t.gasLimit ? BigInt(t.gasLimit) : void 0,
    gasUsed: t.gasUsed ? BigInt(t.gasUsed) : void 0,
    hash: t.hash ? t.hash : null,
    logsBloom: t.logsBloom ? t.logsBloom : null,
    nonce: t.nonce ? t.nonce : null,
    number: t.number ? BigInt(t.number) : null,
    size: t.size ? BigInt(t.size) : void 0,
    timestamp: t.timestamp ? BigInt(t.timestamp) : void 0,
    transactions: e,
    totalDifficulty: t.totalDifficulty ? BigInt(t.totalDifficulty) : null
  };
}
function Kn(t, { args: e, eventName: n } = {}) {
  return {
    ...t,
    blockHash: t.blockHash ? t.blockHash : null,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    logIndex: t.logIndex ? Number(t.logIndex) : null,
    transactionHash: t.transactionHash ? t.transactionHash : null,
    transactionIndex: t.transactionIndex ? Number(t.transactionIndex) : null,
    ...n ? { args: e, eventName: n } : {}
  };
}
const IS = {
  "0x0": "reverted",
  "0x1": "success"
};
function PS(t) {
  const e = {
    ...t,
    blockNumber: t.blockNumber ? BigInt(t.blockNumber) : null,
    contractAddress: t.contractAddress ? t.contractAddress : null,
    cumulativeGasUsed: t.cumulativeGasUsed ? BigInt(t.cumulativeGasUsed) : null,
    effectiveGasPrice: t.effectiveGasPrice ? BigInt(t.effectiveGasPrice) : null,
    gasUsed: t.gasUsed ? BigInt(t.gasUsed) : null,
    logs: t.logs ? t.logs.map((n) => Kn(n)) : null,
    to: t.to ? t.to : null,
    transactionIndex: t.transactionIndex ? _n(t.transactionIndex) : null,
    status: t.status ? IS[t.status] : null,
    type: t.type ? wg[t.type] || t.type : null
  };
  return t.blobGasPrice && (e.blobGasPrice = BigInt(t.blobGasPrice)), t.blobGasUsed && (e.blobGasUsed = BigInt(t.blobGasUsed)), e;
}
const BS = {
  legacy: "0x0",
  eip2930: "0x1",
  eip1559: "0x2",
  eip4844: "0x3",
  eip7702: "0x4"
};
function ga(t) {
  const e = {};
  return typeof t.authorizationList < "u" && (e.authorizationList = TS(t.authorizationList)), typeof t.accessList < "u" && (e.accessList = t.accessList), typeof t.blobVersionedHashes < "u" && (e.blobVersionedHashes = t.blobVersionedHashes), typeof t.blobs < "u" && (typeof t.blobs[0] != "string" ? e.blobs = t.blobs.map((n) => Ue(n)) : e.blobs = t.blobs), typeof t.data < "u" && (e.data = t.data), typeof t.from < "u" && (e.from = t.from), typeof t.gas < "u" && (e.gas = re(t.gas)), typeof t.gasPrice < "u" && (e.gasPrice = re(t.gasPrice)), typeof t.maxFeePerBlobGas < "u" && (e.maxFeePerBlobGas = re(t.maxFeePerBlobGas)), typeof t.maxFeePerGas < "u" && (e.maxFeePerGas = re(t.maxFeePerGas)), typeof t.maxPriorityFeePerGas < "u" && (e.maxPriorityFeePerGas = re(t.maxPriorityFeePerGas)), typeof t.nonce < "u" && (e.nonce = re(t.nonce)), typeof t.to < "u" && (e.to = t.to), typeof t.type < "u" && (e.type = BS[t.type]), typeof t.value < "u" && (e.value = re(t.value)), e;
}
function TS(t) {
  return t.map((e) => ({
    address: e.contractAddress,
    r: e.r,
    s: e.s,
    chainId: re(e.chainId),
    nonce: re(e.nonce),
    ...typeof e.yParity < "u" ? { yParity: re(e.yParity) } : {},
    ...typeof e.v < "u" && typeof e.yParity > "u" ? { v: re(e.v) } : {}
  }));
}
const $S = 2n ** 256n - 1n;
function en(t) {
  return typeof t[0] == "string" ? js(t) : NS(t);
}
function NS(t) {
  let e = 0;
  for (const i of t)
    e += i.length;
  const n = new Uint8Array(e);
  let r = 0;
  for (const i of t)
    n.set(i, r), r += i.length;
  return n;
}
function js(t) {
  return `0x${t.reduce((e, n) => e + n.replace("0x", ""), "")}`;
}
class mh extends G {
  constructor({ offset: e }) {
    super(`Offset \`${e}\` cannot be negative.`, {
      name: "NegativeOffsetError"
    });
  }
}
class vg extends G {
  constructor({ length: e, position: n }) {
    super(`Position \`${n}\` is out of bounds (\`0 < position < ${e}\`).`, { name: "PositionOutOfBoundsError" });
  }
}
class RS extends G {
  constructor({ count: e, limit: n }) {
    super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${e}\`).`, { name: "RecursiveReadLimitExceededError" });
  }
}
const OS = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new RS({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(t) {
    if (t < 0 || t > this.bytes.length - 1)
      throw new vg({
        length: this.bytes.length,
        position: t
      });
  },
  decrementPosition(t) {
    if (t < 0)
      throw new mh({ offset: t });
    const e = this.position - t;
    this.assertPosition(e), this.position = e;
  },
  getReadCount(t) {
    return this.positionReadCount.get(t || this.position) || 0;
  },
  incrementPosition(t) {
    if (t < 0)
      throw new mh({ offset: t });
    const e = this.position + t;
    this.assertPosition(e), this.position = e;
  },
  inspectByte(t) {
    const e = t ?? this.position;
    return this.assertPosition(e), this.bytes[e];
  },
  inspectBytes(t, e) {
    const n = e ?? this.position;
    return this.assertPosition(n + t - 1), this.bytes.subarray(n, n + t);
  },
  inspectUint8(t) {
    const e = t ?? this.position;
    return this.assertPosition(e), this.bytes[e];
  },
  inspectUint16(t) {
    const e = t ?? this.position;
    return this.assertPosition(e + 1), this.dataView.getUint16(e);
  },
  inspectUint24(t) {
    const e = t ?? this.position;
    return this.assertPosition(e + 2), (this.dataView.getUint16(e) << 8) + this.dataView.getUint8(e + 2);
  },
  inspectUint32(t) {
    const e = t ?? this.position;
    return this.assertPosition(e + 3), this.dataView.getUint32(e);
  },
  pushByte(t) {
    this.assertPosition(this.position), this.bytes[this.position] = t, this.position++;
  },
  pushBytes(t) {
    this.assertPosition(this.position + t.length - 1), this.bytes.set(t, this.position), this.position += t.length;
  },
  pushUint8(t) {
    this.assertPosition(this.position), this.bytes[this.position] = t, this.position++;
  },
  pushUint16(t) {
    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, t), this.position += 2;
  },
  pushUint24(t) {
    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, t >> 8), this.dataView.setUint8(this.position + 2, t & 255), this.position += 3;
  },
  pushUint32(t) {
    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, t), this.position += 4;
  },
  readByte() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectByte();
    return this.position++, t;
  },
  readBytes(t, e) {
    this.assertReadLimit(), this._touch();
    const n = this.inspectBytes(t);
    return this.position += e ?? t, n;
  },
  readUint8() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint8();
    return this.position += 1, t;
  },
  readUint16() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint16();
    return this.position += 2, t;
  },
  readUint24() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint24();
    return this.position += 3, t;
  },
  readUint32() {
    this.assertReadLimit(), this._touch();
    const t = this.inspectUint32();
    return this.position += 4, t;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(t) {
    const e = this.position;
    return this.assertPosition(t), this.position = t, () => this.position = e;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const t = this.getReadCount();
    this.positionReadCount.set(this.position, t + 1), t > 0 && this.recursiveReadCount++;
  }
};
function Cf(t, { recursiveReadLimit: e = 8192 } = {}) {
  const n = Object.create(OS);
  return n.bytes = t, n.dataView = new DataView(t.buffer, t.byteOffset, t.byteLength), n.positionReadCount = /* @__PURE__ */ new Map(), n.recursiveReadLimit = e, n;
}
function CS(t, e = "hex") {
  const n = Sg(t), r = Cf(new Uint8Array(n.length));
  return n.encode(r), e === "hex" ? Ue(r.bytes) : r.bytes;
}
function Sg(t) {
  return Array.isArray(t) ? kS(t.map((e) => Sg(e))) : LS(t);
}
function kS(t) {
  const e = t.reduce((i, s) => i + s.length, 0), n = _g(e);
  return {
    length: e <= 55 ? 1 + e : 1 + n + e,
    encode(i) {
      e <= 55 ? i.pushByte(192 + e) : (i.pushByte(247 + n), n === 1 ? i.pushUint8(e) : n === 2 ? i.pushUint16(e) : n === 3 ? i.pushUint24(e) : i.pushUint32(e));
      for (const { encode: s } of t)
        s(i);
    }
  };
}
function LS(t) {
  const e = typeof t == "string" ? Ft(t) : t, n = _g(e.length);
  return {
    length: e.length === 1 && e[0] < 128 ? 1 : e.length <= 55 ? 1 + e.length : 1 + n + e.length,
    encode(i) {
      e.length === 1 && e[0] < 128 ? i.pushBytes(e) : e.length <= 55 ? (i.pushByte(128 + e.length), i.pushBytes(e)) : (i.pushByte(183 + n), n === 1 ? i.pushUint8(e.length) : n === 2 ? i.pushUint16(e.length) : n === 3 ? i.pushUint24(e.length) : i.pushUint32(e.length), i.pushBytes(e));
    }
  };
}
function _g(t) {
  if (t < 2 ** 8)
    return 1;
  if (t < 2 ** 16)
    return 2;
  if (t < 2 ** 24)
    return 3;
  if (t < 2 ** 32)
    return 4;
  throw new G("Length is too large.");
}
const Ag = {
  gwei: 9,
  wei: 18
}, MS = {
  ether: -9,
  wei: 9
};
function Ig(t, e) {
  let n = t.toString();
  const r = n.startsWith("-");
  r && (n = n.slice(1)), n = n.padStart(e, "0");
  let [i, s] = [
    n.slice(0, n.length - e),
    n.slice(n.length - e)
  ];
  return s = s.replace(/(0+)$/, ""), `${r ? "-" : ""}${i || "0"}${s ? `.${s}` : ""}`;
}
function kf(t, e = "wei") {
  return Ig(t, Ag[e]);
}
function ut(t, e = "wei") {
  return Ig(t, MS[e]);
}
function Hs(t) {
  const e = Object.entries(t).map(([r, i]) => i === void 0 || i === !1 ? null : [r, i]).filter(Boolean), n = e.reduce((r, [i]) => Math.max(r, i.length), 0);
  return e.map(([r, i]) => `  ${`${r}:`.padEnd(n + 1)}  ${i}`).join(`
`);
}
class FS extends G {
  constructor() {
    super([
      "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
      "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
    ].join(`
`), { name: "FeeConflictError" });
  }
}
class US extends G {
  constructor({ transaction: e }) {
    super("Cannot infer a transaction type from provided transaction.", {
      metaMessages: [
        "Provided Transaction:",
        "{",
        Hs(e),
        "}",
        "",
        "To infer the type, either provide:",
        "- a `type` to the Transaction, or",
        "- an EIP-1559 Transaction with `maxFeePerGas`, or",
        "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
        "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
        "- an EIP-7702 Transaction with `authorizationList`, or",
        "- a Legacy Transaction with `gasPrice`"
      ],
      name: "InvalidSerializableTransactionError"
    });
  }
}
class DS extends G {
  constructor(e, { account: n, docsPath: r, chain: i, data: s, gas: o, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: l, value: d }) {
    var w;
    const y = Hs({
      chain: i && `${i == null ? void 0 : i.name} (id: ${i == null ? void 0 : i.id})`,
      from: n == null ? void 0 : n.address,
      to: l,
      value: typeof d < "u" && `${kf(d)} ${((w = i == null ? void 0 : i.nativeCurrency) == null ? void 0 : w.symbol) || "ETH"}`,
      data: s,
      gas: o,
      gasPrice: typeof a < "u" && `${ut(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${ut(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${ut(u)} gwei`,
      nonce: f
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: r,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Request Arguments:",
        y
      ].filter(Boolean),
      name: "TransactionExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = e;
  }
}
class Pg extends G {
  constructor({ blockHash: e, blockNumber: n, blockTag: r, hash: i, index: s }) {
    let o = "Transaction";
    r && s !== void 0 && (o = `Transaction at block time "${r}" at index "${s}"`), e && s !== void 0 && (o = `Transaction at block hash "${e}" at index "${s}"`), n && s !== void 0 && (o = `Transaction at block number "${n}" at index "${s}"`), i && (o = `Transaction with hash "${i}"`), super(`${o} could not be found.`, {
      name: "TransactionNotFoundError"
    });
  }
}
class Bg extends G {
  constructor({ hash: e }) {
    super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`, {
      name: "TransactionReceiptNotFoundError"
    });
  }
}
class jS extends G {
  constructor({ hash: e }) {
    super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`, { name: "WaitForTransactionReceiptTimeoutError" });
  }
}
function Tg(t) {
  const { kzg: e } = t, n = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"), r = typeof t.blobs[0] == "string" ? t.blobs.map((s) => Ft(s)) : t.blobs, i = [];
  for (const s of r)
    i.push(Uint8Array.from(e.blobToKzgCommitment(s)));
  return n === "bytes" ? i : i.map((s) => Ue(s));
}
function $g(t) {
  const { kzg: e } = t, n = t.to ?? (typeof t.blobs[0] == "string" ? "hex" : "bytes"), r = typeof t.blobs[0] == "string" ? t.blobs.map((o) => Ft(o)) : t.blobs, i = typeof t.commitments[0] == "string" ? t.commitments.map((o) => Ft(o)) : t.commitments, s = [];
  for (let o = 0; o < r.length; o++) {
    const a = r[o], c = i[o];
    s.push(Uint8Array.from(e.computeBlobKzgProof(a, c)));
  }
  return n === "bytes" ? s : s.map((o) => Ue(o));
}
function jo(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`positive integer expected, not ${t}`);
}
function HS(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function Gs(t, ...e) {
  if (!HS(t))
    throw new Error("Uint8Array expected");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function GS(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  jo(t.outputLen), jo(t.blockLen);
}
function _i(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function Ng(t, e) {
  Gs(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const jr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const qS = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), Ic = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), qt = (t, e) => t << 32 - e | t >>> e, wh = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, zS = (t) => t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
function Eh(t) {
  for (let e = 0; e < t.length; e++)
    t[e] = zS(t[e]);
}
function VS(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function ya(t) {
  return typeof t == "string" && (t = VS(t)), Gs(t), t;
}
function WS(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    Gs(i), e += i.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const s = t[r];
    n.set(s, i), i += s.length;
  }
  return n;
}
let Lf = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
function Rg(t) {
  const e = (r) => t().update(ya(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function KS(t = 32) {
  if (jr && typeof jr.getRandomValues == "function")
    return jr.getRandomValues(new Uint8Array(t));
  if (jr && typeof jr.randomBytes == "function")
    return jr.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function ZS(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const i = BigInt(32), s = BigInt(4294967295), o = Number(n >> i & s), a = Number(n & s), c = r ? 4 : 0, u = r ? 0 : 4;
  t.setUint32(e + c, o, r), t.setUint32(e + u, a, r);
}
const YS = (t, e, n) => t & e ^ ~t & n, JS = (t, e, n) => t & e ^ t & n ^ e & n;
class XS extends Lf {
  constructor(e, n, r, i) {
    super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Ic(this.buffer);
  }
  update(e) {
    _i(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = ya(e);
    const s = e.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(i - this.pos, s - o);
      if (a === i) {
        const c = Ic(e);
        for (; i <= s - o; o += i)
          this.process(c, o);
        continue;
      }
      r.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === i && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    _i(this), Ng(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    n[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(r, 0), o = 0);
    for (let l = o; l < i; l++)
      n[l] = 0;
    ZS(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const a = Ic(e), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let l = 0; l < u; l++)
      a.setUint32(4 * l, f[l], s);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: s, destroyed: o, pos: a } = this;
    return e.length = i, e.pos = a, e.finished = s, e.destroyed = o, i % n && e.buffer.set(r), e;
  }
}
const QS = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), On = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Cn = /* @__PURE__ */ new Uint32Array(64);
let e_ = class extends XS {
  constructor() {
    super(64, 32, 8, !1), this.A = On[0] | 0, this.B = On[1] | 0, this.C = On[2] | 0, this.D = On[3] | 0, this.E = On[4] | 0, this.F = On[5] | 0, this.G = On[6] | 0, this.H = On[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: i, E: s, F: o, G: a, H: c } = this;
    return [e, n, r, i, s, o, a, c];
  }
  // prettier-ignore
  set(e, n, r, i, s, o, a, c) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = s | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, n) {
    for (let l = 0; l < 16; l++, n += 4)
      Cn[l] = e.getUint32(n, !1);
    for (let l = 16; l < 64; l++) {
      const d = Cn[l - 15], y = Cn[l - 2], w = qt(d, 7) ^ qt(d, 18) ^ d >>> 3, h = qt(y, 17) ^ qt(y, 19) ^ y >>> 10;
      Cn[l] = h + Cn[l - 7] + w + Cn[l - 16] | 0;
    }
    let { A: r, B: i, C: s, D: o, E: a, F: c, G: u, H: f } = this;
    for (let l = 0; l < 64; l++) {
      const d = qt(a, 6) ^ qt(a, 11) ^ qt(a, 25), y = f + d + YS(a, c, u) + QS[l] + Cn[l] | 0, h = (qt(r, 2) ^ qt(r, 13) ^ qt(r, 22)) + JS(r, i, s) | 0;
      f = u, u = c, c = a, a = o + y | 0, o = s, s = i, i = r, r = y + h | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(r, i, s, o, a, c, u, f);
  }
  roundClean() {
    Cn.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
const Og = /* @__PURE__ */ Rg(() => new e_());
function t_(t, e) {
  return Og(Mt(t, { strict: !1 }) ? Gi(t) : t);
}
function n_(t) {
  const { commitment: e, version: n = 1 } = t, r = t.to ?? (typeof e == "string" ? "hex" : "bytes"), i = t_(e);
  return i.set([n], 0), r === "bytes" ? i : Ue(i);
}
function r_(t) {
  const { commitments: e, version: n } = t, r = t.to ?? (typeof e[0] == "string" ? "hex" : "bytes"), i = [];
  for (const s of e)
    i.push(n_({
      commitment: s,
      to: r,
      version: n
    }));
  return i;
}
const xh = 6, Cg = 32, Mf = 4096, kg = Cg * Mf, vh = kg * xh - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * Mf * xh;
class i_ extends G {
  constructor({ maxSize: e, size: n }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${e} bytes`, `Given: ${n} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
}
class s_ extends G {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}
function o_(t) {
  const e = t.to ?? (typeof t.data == "string" ? "hex" : "bytes"), n = typeof t.data == "string" ? Ft(t.data) : t.data, r = Ce(n);
  if (!r)
    throw new s_();
  if (r > vh)
    throw new i_({
      maxSize: vh,
      size: r
    });
  const i = [];
  let s = !0, o = 0;
  for (; s; ) {
    const a = Cf(new Uint8Array(kg));
    let c = 0;
    for (; c < Mf; ) {
      const u = n.slice(o, o + (Cg - 1));
      if (a.pushByte(0), a.pushBytes(u), u.length < 31) {
        a.pushByte(128), s = !1;
        break;
      }
      c++, o += 31;
    }
    i.push(a);
  }
  return e === "bytes" ? i.map((a) => a.bytes) : i.map((a) => Ue(a.bytes));
}
function a_(t) {
  const { data: e, kzg: n, to: r } = t, i = t.blobs ?? o_({ data: e, to: r }), s = t.commitments ?? Tg({ blobs: i, kzg: n, to: r }), o = t.proofs ?? $g({ blobs: i, commitments: s, kzg: n, to: r }), a = [];
  for (let c = 0; c < i.length; c++)
    a.push({
      blob: i[c],
      commitment: s[c],
      proof: o[c]
    });
  return a;
}
class Zn extends G {
  constructor({ address: e }) {
    super(`Address "${e}" is invalid.`, {
      metaMessages: [
        "- Address must be a hex value of 20 bytes (40 hex characters).",
        "- Address must match its checksum counterpart."
      ],
      name: "InvalidAddressError"
    });
  }
}
class Su extends G {
  constructor({ blockNumber: e, chain: n, contract: r }) {
    super(`Chain "${n.name}" does not support contract "${r.name}".`, {
      metaMessages: [
        "This could be due to any of the following:",
        ...e && r.blockCreated && r.blockCreated > e ? [
          `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`
        ] : [
          `- The chain does not have the contract "${r.name}" configured.`
        ]
      ],
      name: "ChainDoesNotSupportContract"
    });
  }
}
class c_ extends G {
  constructor({ chain: e, currentChainId: n }) {
    super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, {
      metaMessages: [
        `Current Chain ID:  ${n}`,
        `Expected Chain ID: ${e.id} – ${e.name}`
      ],
      name: "ChainMismatchError"
    });
  }
}
class u_ extends G {
  constructor() {
    super([
      "No chain was provided to the request.",
      "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
    ].join(`
`), {
      name: "ChainNotFoundError"
    });
  }
}
class Lg extends G {
  constructor() {
    super("No chain was provided to the Client.", {
      name: "ClientChainNotConfiguredError"
    });
  }
}
class Wr extends G {
  constructor({ cause: e, message: n } = {}) {
    var i;
    const r = (i = n == null ? void 0 : n.replace("execution reverted: ", "")) == null ? void 0 : i.replace("execution reverted", "");
    super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
      cause: e,
      name: "ExecutionRevertedError"
    });
  }
}
Object.defineProperty(Wr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 3
});
Object.defineProperty(Wr, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /execution reverted/
});
class Ho extends G {
  constructor({ cause: e, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${ut(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
      cause: e,
      name: "FeeCapTooHighError"
    });
  }
}
Object.defineProperty(Ho, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class _u extends G {
  constructor({ cause: e, maxFeePerGas: n } = {}) {
    super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${ut(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
      cause: e,
      name: "FeeCapTooLowError"
    });
  }
}
Object.defineProperty(_u, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class Au extends G {
  constructor({ cause: e, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, { cause: e, name: "NonceTooHighError" });
  }
}
Object.defineProperty(Au, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too high/
});
class Iu extends G {
  constructor({ cause: e, nonce: n } = {}) {
    super([
      `Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`,
      "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
    ].join(`
`), { cause: e, name: "NonceTooLowError" });
  }
}
Object.defineProperty(Iu, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce too low|transaction already imported|already known/
});
class Pu extends G {
  constructor({ cause: e, nonce: n } = {}) {
    super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, { cause: e, name: "NonceMaxValueError" });
  }
}
Object.defineProperty(Pu, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /nonce has max value/
});
class Bu extends G {
  constructor({ cause: e } = {}) {
    super([
      "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
    ].join(`
`), {
      cause: e,
      metaMessages: [
        "This error could arise when the account does not have enough funds to:",
        " - pay for the total gas fee,",
        " - pay for the value to send.",
        " ",
        "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
        " - `gas` is the amount of gas needed for transaction to execute,",
        " - `gas fee` is the gas fee,",
        " - `value` is the amount of ether to send to the recipient."
      ],
      name: "InsufficientFundsError"
    });
  }
}
Object.defineProperty(Bu, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /insufficient funds|exceeds transaction sender account balance/
});
class Tu extends G {
  constructor({ cause: e, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
      cause: e,
      name: "IntrinsicGasTooHighError"
    });
  }
}
Object.defineProperty(Tu, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too high|gas limit reached/
});
class $u extends G {
  constructor({ cause: e, gas: n } = {}) {
    super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
      cause: e,
      name: "IntrinsicGasTooLowError"
    });
  }
}
Object.defineProperty($u, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /intrinsic gas too low/
});
class Nu extends G {
  constructor({ cause: e }) {
    super("The transaction type is not supported for this chain.", {
      cause: e,
      name: "TransactionTypeNotSupportedError"
    });
  }
}
Object.defineProperty(Nu, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /transaction type not valid/
});
class Go extends G {
  constructor({ cause: e, maxPriorityFeePerGas: n, maxFeePerGas: r } = {}) {
    super([
      `The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${ut(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${ut(r)} gwei` : ""}).`
    ].join(`
`), {
      cause: e,
      name: "TipAboveFeeCapError"
    });
  }
}
Object.defineProperty(Go, "nodeMessage", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class ba extends G {
  constructor({ cause: e }) {
    super(`An error occurred while executing: ${e == null ? void 0 : e.shortMessage}`, {
      cause: e,
      name: "UnknownNodeError"
    });
  }
}
class ma extends Map {
  constructor(e) {
    super(), Object.defineProperty(this, "maxSize", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.maxSize = e;
  }
  get(e) {
    const n = super.get(e);
    return super.has(e) && n !== void 0 && (this.delete(e), super.set(e, n)), n;
  }
  set(e, n) {
    if (super.set(e, n), this.maxSize && this.size > this.maxSize) {
      const r = this.keys().next().value;
      r && this.delete(r);
    }
    return this;
  }
}
const wo = /* @__PURE__ */ BigInt(2 ** 32 - 1), Sh = /* @__PURE__ */ BigInt(32);
function f_(t, e = !1) {
  return e ? { h: Number(t & wo), l: Number(t >> Sh & wo) } : { h: Number(t >> Sh & wo) | 0, l: Number(t & wo) | 0 };
}
function l_(t, e = !1) {
  let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: o } = f_(t[i], e);
    [n[i], r[i]] = [s, o];
  }
  return [n, r];
}
const d_ = (t, e, n) => t << n | e >>> 32 - n, h_ = (t, e, n) => e << n | t >>> 32 - n, p_ = (t, e, n) => e << n - 32 | t >>> 64 - n, g_ = (t, e, n) => t << n - 32 | e >>> 64 - n, Mg = [], Fg = [], Ug = [], y_ = /* @__PURE__ */ BigInt(0), ts = /* @__PURE__ */ BigInt(1), b_ = /* @__PURE__ */ BigInt(2), m_ = /* @__PURE__ */ BigInt(7), w_ = /* @__PURE__ */ BigInt(256), E_ = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = ts, n = 1, r = 0; t < 24; t++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Mg.push(2 * (5 * r + n)), Fg.push((t + 1) * (t + 2) / 2 % 64);
  let i = y_;
  for (let s = 0; s < 7; s++)
    e = (e << ts ^ (e >> m_) * E_) % w_, e & b_ && (i ^= ts << (ts << /* @__PURE__ */ BigInt(s)) - ts);
  Ug.push(i);
}
const [x_, v_] = /* @__PURE__ */ l_(Ug, !0), _h = (t, e, n) => n > 32 ? p_(t, e, n) : d_(t, e, n), Ah = (t, e, n) => n > 32 ? g_(t, e, n) : h_(t, e, n);
function S_(t, e = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, u = n[c], f = n[c + 1], l = _h(u, f, 1) ^ n[a], d = Ah(u, f, 1) ^ n[a + 1];
      for (let y = 0; y < 50; y += 10)
        t[o + y] ^= l, t[o + y + 1] ^= d;
    }
    let i = t[2], s = t[3];
    for (let o = 0; o < 24; o++) {
      const a = Fg[o], c = _h(i, s, a), u = Ah(i, s, a), f = Mg[o];
      i = t[f], s = t[f + 1], t[f] = c, t[f + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        n[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    t[0] ^= x_[r], t[1] ^= v_[r];
  }
  n.fill(0);
}
let __ = class Dg extends Lf {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, n, r, i = !1, s = 24) {
    if (super(), this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, jo(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = qS(this.state);
  }
  keccak() {
    wh || Eh(this.state32), S_(this.state32, this.rounds), wh || Eh(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    _i(this);
    const { blockLen: n, state: r } = this;
    e = ya(e);
    const i = e.length;
    for (let s = 0; s < i; ) {
      const o = Math.min(n - this.pos, i - s);
      for (let a = 0; a < o; a++)
        r[this.pos++] ^= e[s++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: n, pos: r, blockLen: i } = this;
    e[r] ^= n, n & 128 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    _i(this, !1), Gs(e), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let i = 0, s = e.length; i < s; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, s - i);
      e.set(n.subarray(this.posOut, this.posOut + o), i), this.posOut += o, i += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return jo(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (Ng(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: n, suffix: r, outputLen: i, rounds: s, enableXOF: o } = this;
    return e || (e = new Dg(n, r, i, o, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r, e.outputLen = i, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
};
const A_ = (t, e, n) => Rg(() => new __(e, t, n)), I_ = /* @__PURE__ */ A_(1, 136, 256 / 8);
function Ve(t, e) {
  const n = e || "hex", r = I_(Mt(t, { strict: !1 }) ? Gi(t) : t);
  return n === "bytes" ? r : Qt(r);
}
const Pc = /* @__PURE__ */ new ma(8192);
function qs(t, e) {
  if (Pc.has(`${t}.${e}`))
    return Pc.get(`${t}.${e}`);
  const n = t.substring(2).toLowerCase(), r = Ve(wr(n), "bytes"), i = n.split("");
  for (let o = 0; o < 40; o += 2)
    r[o >> 1] >> 4 >= 8 && i[o] && (i[o] = i[o].toUpperCase()), (r[o >> 1] & 15) >= 8 && i[o + 1] && (i[o + 1] = i[o + 1].toUpperCase());
  const s = `0x${i.join("")}`;
  return Pc.set(`${t}.${e}`, s), s;
}
function jg(t, e) {
  if (!Ut(t, { strict: !1 }))
    throw new Zn({ address: t });
  return qs(t, e);
}
const P_ = /^0x[a-fA-F0-9]{40}$/, Bc = /* @__PURE__ */ new ma(8192);
function Ut(t, e) {
  const { strict: n = !0 } = e ?? {}, r = `${t}.${n}`;
  if (Bc.has(r))
    return Bc.get(r);
  const i = P_.test(t) ? t.toLowerCase() === t ? !0 : n ? qs(t) === t : !0 : !1;
  return Bc.set(r, i), i;
}
function qo(t, e, n, { strict: r } = {}) {
  return Mt(t, { strict: !1 }) ? zg(t, e, n, {
    strict: r
  }) : qg(t, e, n, {
    strict: r
  });
}
function Hg(t, e) {
  if (typeof e == "number" && e > 0 && e > Ce(t) - 1)
    throw new yg({
      offset: e,
      position: "start",
      size: Ce(t)
    });
}
function Gg(t, e, n) {
  if (typeof e == "number" && typeof n == "number" && Ce(t) !== n - e)
    throw new yg({
      offset: n,
      position: "end",
      size: Ce(t)
    });
}
function qg(t, e, n, { strict: r } = {}) {
  Hg(t, e);
  const i = t.slice(e, n);
  return r && Gg(i, e, n), i;
}
function zg(t, e, n, { strict: r } = {}) {
  Hg(t, e);
  const i = `0x${t.replace("0x", "").slice((e ?? 0) * 2, (n ?? t.length) * 2)}`;
  return r && Gg(i, e, n), i;
}
function B_(t) {
  if (t.type)
    return t.type;
  if (typeof t.authorizationList < "u")
    return "eip7702";
  if (typeof t.blobs < "u" || typeof t.blobVersionedHashes < "u" || typeof t.maxFeePerBlobGas < "u" || typeof t.sidecars < "u")
    return "eip4844";
  if (typeof t.maxFeePerGas < "u" || typeof t.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof t.gasPrice < "u")
    return typeof t.accessList < "u" ? "eip2930" : "legacy";
  throw new US({ transaction: t });
}
function Vg({ chain: t, currentChainId: e }) {
  if (!t)
    throw new u_();
  if (e !== t.id)
    throw new c_({ chain: t, currentChainId: e });
}
function qi({ blockNumber: t, chain: e, contract: n }) {
  var i;
  const r = (i = e == null ? void 0 : e.contracts) == null ? void 0 : i[n];
  if (!r)
    throw new Su({
      chain: e,
      contract: { name: n }
    });
  if (t && r.blockCreated && r.blockCreated > t)
    throw new Su({
      blockNumber: t,
      chain: e,
      contract: {
        name: n,
        blockCreated: r.blockCreated
      }
    });
  return r.address;
}
function pt(t) {
  return typeof t == "string" ? { address: t, type: "json-rpc" } : t;
}
class T_ extends G {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
}
class Ff extends G {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
}
class $_ extends G {
  constructor({ maxPriorityFeePerGas: e }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${ut(e)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
}
function ne(t, e, n) {
  const r = t[e.name];
  if (typeof r == "function")
    return r;
  const i = t[n];
  return typeof i == "function" ? i : (s) => e(t, s);
}
class Wg extends G {
  constructor({ blockHash: e, blockNumber: n }) {
    let r = "Block";
    e && (r = `Block at hash "${e}"`), n && (r = `Block at number "${n}"`), super(`${r} could not be found.`, { name: "BlockNotFoundError" });
  }
}
async function En(t, { blockHash: e, blockNumber: n, blockTag: r, includeTransactions: i } = {}) {
  var f, l, d;
  const s = r ?? "latest", o = i ?? !1, a = n !== void 0 ? re(n) : void 0;
  let c = null;
  if (e ? c = await t.request({
    method: "eth_getBlockByHash",
    params: [e, o]
  }, { dedupe: !0 }) : c = await t.request({
    method: "eth_getBlockByNumber",
    params: [a || s, o]
  }, { dedupe: !!a }), !c)
    throw new Wg({ blockHash: e, blockNumber: n });
  return (((d = (l = (f = t.chain) == null ? void 0 : f.formatters) == null ? void 0 : l.block) == null ? void 0 : d.format) || xg)(c);
}
async function Uf(t) {
  const e = await t.request({
    method: "eth_gasPrice"
  });
  return BigInt(e);
}
async function N_(t, e) {
  return Kg(t, e);
}
async function Kg(t, e) {
  var s, o;
  const { block: n, chain: r = t.chain, request: i } = e || {};
  try {
    const a = ((s = r == null ? void 0 : r.fees) == null ? void 0 : s.maxPriorityFeePerGas) ?? ((o = r == null ? void 0 : r.fees) == null ? void 0 : o.defaultPriorityFee);
    if (typeof a == "function") {
      const u = n || await ne(t, En, "getBlock")({}), f = await a({
        block: u,
        client: t,
        request: i
      });
      if (f === null)
        throw new Error();
      return f;
    }
    if (typeof a < "u")
      return a;
    const c = await t.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return Wn(c);
  } catch {
    const [a, c] = await Promise.all([
      n ? Promise.resolve(n) : ne(t, En, "getBlock")({}),
      ne(t, Uf, "getGasPrice")({})
    ]);
    if (typeof a.baseFeePerGas != "bigint")
      throw new Ff();
    const u = c - a.baseFeePerGas;
    return u < 0n ? 0n : u;
  }
}
async function R_(t, e) {
  return Ru(t, e);
}
async function Ru(t, e) {
  var d, y;
  const { block: n, chain: r = t.chain, request: i, type: s = "eip1559" } = e || {}, o = await (async () => {
    var w, h;
    return typeof ((w = r == null ? void 0 : r.fees) == null ? void 0 : w.baseFeeMultiplier) == "function" ? r.fees.baseFeeMultiplier({
      block: n,
      client: t,
      request: i
    }) : ((h = r == null ? void 0 : r.fees) == null ? void 0 : h.baseFeeMultiplier) ?? 1.2;
  })();
  if (o < 1)
    throw new T_();
  const c = 10 ** (((d = o.toString().split(".")[1]) == null ? void 0 : d.length) ?? 0), u = (w) => w * BigInt(Math.ceil(o * c)) / BigInt(c), f = n || await ne(t, En, "getBlock")({});
  if (typeof ((y = r == null ? void 0 : r.fees) == null ? void 0 : y.estimateFeesPerGas) == "function") {
    const w = await r.fees.estimateFeesPerGas({
      block: n,
      client: t,
      multiply: u,
      request: i,
      type: s
    });
    if (w !== null)
      return w;
  }
  if (s === "eip1559") {
    if (typeof f.baseFeePerGas != "bigint")
      throw new Ff();
    const w = typeof (i == null ? void 0 : i.maxPriorityFeePerGas) == "bigint" ? i.maxPriorityFeePerGas : await Kg(t, {
      block: f,
      chain: r,
      request: i
    }), h = u(f.baseFeePerGas);
    return {
      maxFeePerGas: (i == null ? void 0 : i.maxFeePerGas) ?? h + w,
      maxPriorityFeePerGas: w
    };
  }
  return {
    gasPrice: (i == null ? void 0 : i.gasPrice) ?? u(await ne(t, Uf, "getGasPrice")({}))
  };
}
function O_(t) {
  const e = Ve(`0x${t.substring(4)}`).substring(26);
  return qs(`0x${e}`);
}
async function C_({ hash: t, signature: e }) {
  const n = Mt(t) ? t : Qt(t), { secp256k1: r } = await Promise.resolve().then(() => PP);
  return `0x${(() => {
    if (typeof e == "object" && "r" in e && "s" in e) {
      const { r: u, s: f, v: l, yParity: d } = e, y = Number(d ?? l), w = Ih(y);
      return new r.Signature(Wn(u), Wn(f)).addRecoveryBit(w);
    }
    const o = Mt(e) ? e : Qt(e), a = _n(`0x${o.slice(130)}`), c = Ih(a);
    return r.Signature.fromCompact(o.substring(2, 130)).addRecoveryBit(c);
  })().recoverPublicKey(n.substring(2)).toHex(!1)}`;
}
function Ih(t) {
  if (t === 0 || t === 1)
    return t;
  if (t === 27)
    return 0;
  if (t === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}
async function Zg({ hash: t, signature: e }) {
  return O_(await C_({ hash: t, signature: e }));
}
function k_(t) {
  const { chainId: e, contractAddress: n, nonce: r, to: i } = t, s = Ve(js([
    "0x05",
    CS([
      e ? re(e) : "0x",
      n,
      r ? re(r) : "0x"
    ])
  ]));
  return i === "bytes" ? Ft(s) : s;
}
async function Yg(t) {
  const { authorization: e, signature: n } = t;
  return Zg({
    hash: k_(e),
    signature: n ?? e
  });
}
class L_ extends G {
  constructor(e, { account: n, docsPath: r, chain: i, data: s, gas: o, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: l, value: d }) {
    var w;
    const y = Hs({
      from: n == null ? void 0 : n.address,
      to: l,
      value: typeof d < "u" && `${kf(d)} ${((w = i == null ? void 0 : i.nativeCurrency) == null ? void 0 : w.symbol) || "ETH"}`,
      data: s,
      gas: o,
      gasPrice: typeof a < "u" && `${ut(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${ut(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${ut(u)} gwei`,
      nonce: f
    });
    super(e.shortMessage, {
      cause: e,
      docsPath: r,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        y
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = e;
  }
}
const Fe = (t, e, n) => JSON.stringify(t, (r, i) => typeof i == "bigint" ? i.toString() : i, n), M_ = (t) => t, zs = (t) => t;
class Er extends G {
  constructor({ body: e, cause: n, details: r, headers: i, status: s, url: o }) {
    super("HTTP request failed.", {
      cause: n,
      details: r,
      metaMessages: [
        s && `Status: ${s}`,
        `URL: ${zs(o)}`,
        e && `Request body: ${Fe(e)}`
      ].filter(Boolean),
      name: "HttpRequestError"
    }), Object.defineProperty(this, "body", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "headers", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "status", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "url", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.body = e, this.headers = i, this.status = s, this.url = o;
  }
}
class Jg extends G {
  constructor({ body: e, error: n, url: r }) {
    super("RPC Request failed.", {
      cause: n,
      details: n.message,
      metaMessages: [`URL: ${zs(r)}`, `Request body: ${Fe(e)}`],
      name: "RpcRequestError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.code = n.code;
  }
}
class Ph extends G {
  constructor({ body: e, url: n }) {
    super("The request took too long to respond.", {
      details: "The request timed out.",
      metaMessages: [`URL: ${zs(n)}`, `Request body: ${Fe(e)}`],
      name: "TimeoutError"
    });
  }
}
const F_ = -1;
class lt extends G {
  constructor(e, { code: n, docsPath: r, metaMessages: i, name: s, shortMessage: o }) {
    super(o, {
      cause: e,
      docsPath: r,
      metaMessages: i || (e == null ? void 0 : e.metaMessages),
      name: s || "RpcError"
    }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = s || e.name, this.code = e instanceof Jg ? e.code : n ?? F_;
  }
}
class zi extends lt {
  constructor(e, n) {
    super(e, n), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = n.data;
  }
}
class gs extends lt {
  constructor(e) {
    super(e, {
      code: gs.code,
      name: "ParseRpcError",
      shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    });
  }
}
Object.defineProperty(gs, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32700
});
class ys extends lt {
  constructor(e) {
    super(e, {
      code: ys.code,
      name: "InvalidRequestRpcError",
      shortMessage: "JSON is not a valid request object."
    });
  }
}
Object.defineProperty(ys, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32600
});
class bs extends lt {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: bs.code,
      name: "MethodNotFoundRpcError",
      shortMessage: `The method${n ? ` "${n}"` : ""} does not exist / is not available.`
    });
  }
}
Object.defineProperty(bs, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32601
});
class ms extends lt {
  constructor(e) {
    super(e, {
      code: ms.code,
      name: "InvalidParamsRpcError",
      shortMessage: [
        "Invalid parameters were provided to the RPC method.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(ms, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32602
});
class Br extends lt {
  constructor(e) {
    super(e, {
      code: Br.code,
      name: "InternalRpcError",
      shortMessage: "An internal error was received."
    });
  }
}
Object.defineProperty(Br, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32603
});
class Tr extends lt {
  constructor(e) {
    super(e, {
      code: Tr.code,
      name: "InvalidInputRpcError",
      shortMessage: [
        "Missing or invalid parameters.",
        "Double check you have provided the correct parameters."
      ].join(`
`)
    });
  }
}
Object.defineProperty(Tr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32e3
});
class ws extends lt {
  constructor(e) {
    super(e, {
      code: ws.code,
      name: "ResourceNotFoundRpcError",
      shortMessage: "Requested resource not found."
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "ResourceNotFoundRpcError"
    });
  }
}
Object.defineProperty(ws, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32001
});
class Es extends lt {
  constructor(e) {
    super(e, {
      code: Es.code,
      name: "ResourceUnavailableRpcError",
      shortMessage: "Requested resource not available."
    });
  }
}
Object.defineProperty(Es, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32002
});
class xs extends lt {
  constructor(e) {
    super(e, {
      code: xs.code,
      name: "TransactionRejectedRpcError",
      shortMessage: "Transaction creation failed."
    });
  }
}
Object.defineProperty(xs, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32003
});
class vs extends lt {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: vs.code,
      name: "MethodNotSupportedRpcError",
      shortMessage: `Method${n ? ` "${n}"` : ""} is not implemented.`
    });
  }
}
Object.defineProperty(vs, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32004
});
class Ai extends lt {
  constructor(e) {
    super(e, {
      code: Ai.code,
      name: "LimitExceededRpcError",
      shortMessage: "Request exceeds defined limit."
    });
  }
}
Object.defineProperty(Ai, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32005
});
class Ss extends lt {
  constructor(e) {
    super(e, {
      code: Ss.code,
      name: "JsonRpcVersionUnsupportedError",
      shortMessage: "Version of JSON-RPC protocol is not supported."
    });
  }
}
Object.defineProperty(Ss, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: -32006
});
class Qr extends zi {
  constructor(e) {
    super(e, {
      code: Qr.code,
      name: "UserRejectedRequestError",
      shortMessage: "User rejected the request."
    });
  }
}
Object.defineProperty(Qr, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4001
});
class _s extends zi {
  constructor(e) {
    super(e, {
      code: _s.code,
      name: "UnauthorizedProviderError",
      shortMessage: "The requested method and/or account has not been authorized by the user."
    });
  }
}
Object.defineProperty(_s, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4100
});
class As extends zi {
  constructor(e, { method: n } = {}) {
    super(e, {
      code: As.code,
      name: "UnsupportedProviderMethodError",
      shortMessage: `The Provider does not support the requested method${n ? ` " ${n}"` : ""}.`
    });
  }
}
Object.defineProperty(As, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4200
});
class Is extends zi {
  constructor(e) {
    super(e, {
      code: Is.code,
      name: "ProviderDisconnectedError",
      shortMessage: "The Provider is disconnected from all chains."
    });
  }
}
Object.defineProperty(Is, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4900
});
class Ps extends zi {
  constructor(e) {
    super(e, {
      code: Ps.code,
      name: "ChainDisconnectedError",
      shortMessage: "The Provider is not connected to the requested chain."
    });
  }
}
Object.defineProperty(Ps, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4901
});
class Bs extends zi {
  constructor(e) {
    super(e, {
      code: Bs.code,
      name: "SwitchChainError",
      shortMessage: "An error occurred when attempting to switch chain."
    });
  }
}
Object.defineProperty(Bs, "code", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 4902
});
class U_ extends lt {
  constructor(e) {
    super(e, {
      name: "UnknownRpcError",
      shortMessage: "An unknown RPC error occurred."
    });
  }
}
function Df(t, e) {
  const n = (t.details || "").toLowerCase(), r = t instanceof G ? t.walk((i) => (i == null ? void 0 : i.code) === Wr.code) : t;
  return r instanceof G ? new Wr({
    cause: t,
    message: r.details
  }) : Wr.nodeMessage.test(n) ? new Wr({
    cause: t,
    message: t.details
  }) : Ho.nodeMessage.test(n) ? new Ho({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas
  }) : _u.nodeMessage.test(n) ? new _u({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas
  }) : Au.nodeMessage.test(n) ? new Au({ cause: t, nonce: e == null ? void 0 : e.nonce }) : Iu.nodeMessage.test(n) ? new Iu({ cause: t, nonce: e == null ? void 0 : e.nonce }) : Pu.nodeMessage.test(n) ? new Pu({ cause: t, nonce: e == null ? void 0 : e.nonce }) : Bu.nodeMessage.test(n) ? new Bu({ cause: t }) : Tu.nodeMessage.test(n) ? new Tu({ cause: t, gas: e == null ? void 0 : e.gas }) : $u.nodeMessage.test(n) ? new $u({ cause: t, gas: e == null ? void 0 : e.gas }) : Nu.nodeMessage.test(n) ? new Nu({ cause: t }) : Go.nodeMessage.test(n) ? new Go({
    cause: t,
    maxFeePerGas: e == null ? void 0 : e.maxFeePerGas,
    maxPriorityFeePerGas: e == null ? void 0 : e.maxPriorityFeePerGas
  }) : new ba({
    cause: t
  });
}
function D_(t, { docsPath: e, ...n }) {
  const r = (() => {
    const i = Df(t, n);
    return i instanceof ba ? t : i;
  })();
  return new L_(r, {
    docsPath: e,
    ...n
  });
}
function jf(t, { format: e }) {
  if (!e)
    return {};
  const n = {};
  function r(s) {
    const o = Object.keys(s);
    for (const a of o)
      a in t && (n[a] = t[a]), s[a] && typeof s[a] == "object" && !Array.isArray(s[a]) && r(s[a]);
  }
  const i = e(t || {});
  return r(i), n;
}
class j_ extends G {
  constructor({ address: e }) {
    super(`State for account "${e}" is set multiple times.`, {
      name: "AccountStateConflictError"
    });
  }
}
class H_ extends G {
  constructor() {
    super("state and stateDiff are set on the same account.", {
      name: "StateAssignmentConflictError"
    });
  }
}
function Bh(t) {
  return t.reduce((e, { slot: n, value: r }) => `${e}        ${n}: ${r}
`, "");
}
function G_(t) {
  return t.reduce((e, { address: n, ...r }) => {
    let i = `${e}    ${n}:
`;
    return r.nonce && (i += `      nonce: ${r.nonce}
`), r.balance && (i += `      balance: ${r.balance}
`), r.code && (i += `      code: ${r.code}
`), r.state && (i += `      state:
`, i += Bh(r.state)), r.stateDiff && (i += `      stateDiff:
`, i += Bh(r.stateDiff)), i;
  }, `  State Override:
`).slice(0, -1);
}
function Th(t) {
  if (!(!t || t.length === 0))
    return t.reduce((e, { slot: n, value: r }) => {
      if (n.length !== 66)
        throw new yh({
          size: n.length,
          targetSize: 66,
          type: "hex"
        });
      if (r.length !== 66)
        throw new yh({
          size: r.length,
          targetSize: 66,
          type: "hex"
        });
      return e[n] = r, e;
    }, {});
}
function q_(t) {
  const { balance: e, nonce: n, state: r, stateDiff: i, code: s } = t, o = {};
  if (s !== void 0 && (o.code = s), e !== void 0 && (o.balance = re(e)), n !== void 0 && (o.nonce = re(n)), r !== void 0 && (o.state = Th(r)), i !== void 0) {
    if (o.state)
      throw new H_();
    o.stateDiff = Th(i);
  }
  return o;
}
function Xg(t) {
  if (!t)
    return;
  const e = {};
  for (const { address: n, ...r } of t) {
    if (!Ut(n, { strict: !1 }))
      throw new Zn({ address: n });
    if (e[n])
      throw new j_({ address: n });
    e[n] = q_(r);
  }
  return e;
}
function Vs(t) {
  const { account: e, gasPrice: n, maxFeePerGas: r, maxPriorityFeePerGas: i, to: s } = t, o = e ? pt(e) : void 0;
  if (o && !Ut(o.address))
    throw new Zn({ address: o.address });
  if (s && !Ut(s))
    throw new Zn({ address: s });
  if (typeof n < "u" && (typeof r < "u" || typeof i < "u"))
    throw new FS();
  if (r && r > $S)
    throw new Ho({ maxFeePerGas: r });
  if (i && r && i > r)
    throw new Go({ maxFeePerGas: r, maxPriorityFeePerGas: i });
}
async function Qg(t, { address: e, blockNumber: n, blockTag: r = "latest" }) {
  const i = n ? re(n) : void 0, s = await t.request({
    method: "eth_getBalance",
    params: [e, i || r]
  });
  return BigInt(s);
}
async function Hf(t, e) {
  var i, s, o;
  const n = e.account ?? t.account, r = n ? pt(n) : void 0;
  try {
    let R = function(v) {
      const { block: B, request: $, rpcStateOverride: M } = v;
      return t.request({
        method: "eth_estimateGas",
        params: M ? [$, B ?? "latest", M] : B ? [$, B] : [$]
      });
    };
    const { accessList: a, authorizationList: c, blobs: u, blobVersionedHashes: f, blockNumber: l, blockTag: d, data: y, gas: w, gasPrice: h, maxFeePerBlobGas: g, maxFeePerGas: b, maxPriorityFeePerGas: E, nonce: S, value: N, stateOverride: O, ...C } = await wa(t, {
      ...e,
      parameters: (
        // Some RPC Providers do not compute versioned hashes from blobs. We will need
        // to compute them.
        (r == null ? void 0 : r.type) === "local" ? void 0 : ["blobVersionedHashes"]
      )
    }), p = (l ? re(l) : void 0) || d, x = Xg(O), _ = await (async () => {
      if (C.to)
        return C.to;
      if (c && c.length > 0)
        return await Yg({
          authorization: c[0]
        }).catch(() => {
          throw new G("`to` is required. Could not infer from `authorizationList`");
        });
    })();
    Vs(e);
    const P = (o = (s = (i = t.chain) == null ? void 0 : i.formatters) == null ? void 0 : s.transactionRequest) == null ? void 0 : o.format, A = (P || ga)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...jf(C, { format: P }),
      from: r == null ? void 0 : r.address,
      accessList: a,
      authorizationList: c,
      blobs: u,
      blobVersionedHashes: f,
      data: y,
      gas: w,
      gasPrice: h,
      maxFeePerBlobGas: g,
      maxFeePerGas: b,
      maxPriorityFeePerGas: E,
      nonce: S,
      to: _,
      value: N
    });
    let m = BigInt(await R({ block: p, request: A, rpcStateOverride: x }));
    if (c) {
      const v = await Qg(t, { address: A.from }), B = await Promise.all(c.map(async ($) => {
        const { contractAddress: M } = $, D = await R({
          block: p,
          request: {
            authorizationList: void 0,
            data: y,
            from: r == null ? void 0 : r.address,
            to: M,
            value: re(v)
          },
          rpcStateOverride: x
        }).catch(() => 100000n);
        return 2n * BigInt(D);
      }));
      m += B.reduce(($, M) => $ + M, 0n);
    }
    return m;
  } catch (a) {
    throw D_(a, {
      ...e,
      account: r,
      chain: t.chain
    });
  }
}
async function ey(t, { address: e, blockTag: n = "latest", blockNumber: r }) {
  const i = await t.request({
    method: "eth_getTransactionCount",
    params: [e, r ? re(r) : n]
  }, { dedupe: !!r });
  return _n(i);
}
async function Ws(t) {
  const e = await t.request({
    method: "eth_chainId"
  }, { dedupe: !0 });
  return _n(e);
}
const ty = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
async function wa(t, e) {
  const { account: n = t.account, blobs: r, chain: i, gas: s, kzg: o, nonce: a, nonceManager: c, parameters: u = ty, type: f } = e, l = n ? pt(n) : void 0, d = { ...e, ...l ? { from: l == null ? void 0 : l.address } : {} };
  let y;
  async function w() {
    return y || (y = await ne(t, En, "getBlock")({ blockTag: "latest" }), y);
  }
  let h;
  async function g() {
    return h || (i ? i.id : typeof e.chainId < "u" ? e.chainId : (h = await ne(t, Ws, "getChainId")({}), h));
  }
  if ((u.includes("blobVersionedHashes") || u.includes("sidecars")) && r && o) {
    const b = Tg({ blobs: r, kzg: o });
    if (u.includes("blobVersionedHashes")) {
      const E = r_({
        commitments: b,
        to: "hex"
      });
      d.blobVersionedHashes = E;
    }
    if (u.includes("sidecars")) {
      const E = $g({ blobs: r, commitments: b, kzg: o }), S = a_({
        blobs: r,
        commitments: b,
        proofs: E,
        to: "hex"
      });
      d.sidecars = S;
    }
  }
  if (u.includes("chainId") && (d.chainId = await g()), u.includes("nonce") && typeof a > "u" && l)
    if (c) {
      const b = await g();
      d.nonce = await c.consume({
        address: l.address,
        chainId: b,
        client: t
      });
    } else
      d.nonce = await ne(t, ey, "getTransactionCount")({
        address: l.address,
        blockTag: "pending"
      });
  if ((u.includes("fees") || u.includes("type")) && typeof f > "u")
    try {
      d.type = B_(d);
    } catch {
      const b = await w();
      d.type = typeof (b == null ? void 0 : b.baseFeePerGas) == "bigint" ? "eip1559" : "legacy";
    }
  if (u.includes("fees"))
    if (d.type !== "legacy" && d.type !== "eip2930") {
      if (typeof d.maxFeePerGas > "u" || typeof d.maxPriorityFeePerGas > "u") {
        const b = await w(), { maxFeePerGas: E, maxPriorityFeePerGas: S } = await Ru(t, {
          block: b,
          chain: i,
          request: d
        });
        if (typeof e.maxPriorityFeePerGas > "u" && e.maxFeePerGas && e.maxFeePerGas < S)
          throw new $_({
            maxPriorityFeePerGas: S
          });
        d.maxPriorityFeePerGas = S, d.maxFeePerGas = E;
      }
    } else {
      if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
        throw new Ff();
      const b = await w(), { gasPrice: E } = await Ru(t, {
        block: b,
        chain: i,
        request: d,
        type: "legacy"
      });
      d.gasPrice = E;
    }
  return u.includes("gas") && typeof s > "u" && (d.gas = await ne(t, Hf, "estimateGas")({
    ...d,
    account: l ? { address: l.address, type: "json-rpc" } : void 0
  })), Vs(d), delete d.parameters, d;
}
class Ks extends G {
  constructor({ docsPath: e } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
    ].join(`
`), {
      docsPath: e,
      docsSlug: "account",
      name: "AccountNotFoundError"
    });
  }
}
class Tc extends G {
  constructor({ docsPath: e, metaMessages: n, type: r }) {
    super(`Account type "${r}" is not supported.`, {
      docsPath: e,
      metaMessages: n,
      name: "AccountTypeNotSupportedError"
    });
  }
}
const ny = {
  1: "An `assert` condition failed.",
  17: "Arithmetic operation resulted in underflow or overflow.",
  18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
  33: "Attempted to convert to an invalid type.",
  34: "Attempted to access a storage byte array that is incorrectly encoded.",
  49: "Performed `.pop()` on an empty array",
  50: "Array index is out of bounds.",
  65: "Allocated too much memory or created an array which is too large.",
  81: "Attempted to call a zero-initialized variable of internal function type."
}, z_ = {
  inputs: [
    {
      name: "message",
      type: "string"
    }
  ],
  name: "Error",
  type: "error"
}, V_ = {
  inputs: [
    {
      name: "reason",
      type: "uint256"
    }
  ],
  name: "Panic",
  type: "error"
};
function An(t, { includeName: e = !1 } = {}) {
  if (t.type !== "function" && t.type !== "event" && t.type !== "error")
    throw new sA(t.type);
  return `${t.name}(${Ea(t.inputs, { includeName: e })})`;
}
function Ea(t, { includeName: e = !1 } = {}) {
  return t ? t.map((n) => W_(n, { includeName: e })).join(e ? ", " : ",") : "";
}
function W_(t, { includeName: e }) {
  return t.type.startsWith("tuple") ? `(${Ea(t.components, { includeName: e })})${t.type.slice(5)}` : t.type + (e && t.name ? ` ${t.name}` : "");
}
class K_ extends G {
  constructor({ docsPath: e }) {
    super([
      "A constructor was not found on the ABI.",
      "Make sure you are using the correct ABI and that the constructor exists on it."
    ].join(`
`), {
      docsPath: e,
      name: "AbiConstructorNotFoundError"
    });
  }
}
class $h extends G {
  constructor({ docsPath: e }) {
    super([
      "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.",
      "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."
    ].join(`
`), {
      docsPath: e,
      name: "AbiConstructorParamsNotFoundError"
    });
  }
}
class ry extends G {
  constructor({ data: e, params: n, size: r }) {
    super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
      metaMessages: [
        `Params: (${Ea(n, { includeName: !0 })})`,
        `Data:   ${e} (${r} bytes)`
      ],
      name: "AbiDecodingDataSizeTooSmallError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = e, this.params = n, this.size = r;
  }
}
class xa extends G {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.', {
      name: "AbiDecodingZeroDataError"
    });
  }
}
class Z_ extends G {
  constructor({ expectedLength: e, givenLength: n, type: r }) {
    super([
      `ABI encoding array length mismatch for type ${r}.`,
      `Expected length: ${e}`,
      `Given length: ${n}`
    ].join(`
`), { name: "AbiEncodingArrayLengthMismatchError" });
  }
}
class Y_ extends G {
  constructor({ expectedSize: e, value: n }) {
    super(`Size of bytes "${n}" (bytes${Ce(n)}) does not match expected size (bytes${e}).`, { name: "AbiEncodingBytesSizeMismatchError" });
  }
}
class J_ extends G {
  constructor({ expectedLength: e, givenLength: n }) {
    super([
      "ABI encoding params/values length mismatch.",
      `Expected length (params): ${e}`,
      `Given length (values): ${n}`
    ].join(`
`), { name: "AbiEncodingLengthMismatchError" });
  }
}
class iy extends G {
  constructor(e, { docsPath: n }) {
    super([
      `Encoded error signature "${e}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiErrorSignatureNotFoundError"
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.signature = e;
  }
}
class X_ extends G {
  constructor({ docsPath: e }) {
    super("Cannot extract event signature from empty topics.", {
      docsPath: e,
      name: "AbiEventSignatureEmptyTopicsError"
    });
  }
}
class sy extends G {
  constructor(e, { docsPath: n }) {
    super([
      `Encoded event signature "${e}" not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it.",
      `You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventSignatureNotFoundError"
    });
  }
}
class Nh extends G {
  constructor(e, { docsPath: n } = {}) {
    super([
      `Event ${e ? `"${e}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the event exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiEventNotFoundError"
    });
  }
}
class zo extends G {
  constructor(e, { docsPath: n } = {}) {
    super([
      `Function ${e ? `"${e}" ` : ""}not found on ABI.`,
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionNotFoundError"
    });
  }
}
class Q_ extends G {
  constructor(e, { docsPath: n }) {
    super([
      `Function "${e}" does not contain any \`outputs\` on ABI.`,
      "Cannot decode function result without knowing what the parameter types are.",
      "Make sure you are using the correct ABI and that the function exists on it."
    ].join(`
`), {
      docsPath: n,
      name: "AbiFunctionOutputsNotFoundError"
    });
  }
}
class eA extends G {
  constructor(e, n) {
    super("Found ambiguous types in overloaded ABI items.", {
      metaMessages: [
        `\`${e.type}\` in \`${An(e.abiItem)}\`, and`,
        `\`${n.type}\` in \`${An(n.abiItem)}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ],
      name: "AbiItemAmbiguityError"
    });
  }
}
class tA extends G {
  constructor({ expectedSize: e, givenSize: n }) {
    super(`Expected bytes${e}, got bytes${n}.`, {
      name: "BytesSizeMismatchError"
    });
  }
}
class Ts extends G {
  constructor({ abiItem: e, data: n, params: r, size: i }) {
    super([
      `Data size of ${i} bytes is too small for non-indexed event parameters.`
    ].join(`
`), {
      metaMessages: [
        `Params: (${Ea(r, { includeName: !0 })})`,
        `Data:   ${n} (${i} bytes)`
      ],
      name: "DecodeLogDataMismatch"
    }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "params", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "size", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = e, this.data = n, this.params = r, this.size = i;
  }
}
class va extends G {
  constructor({ abiItem: e, param: n }) {
    super([
      `Expected a topic for indexed event parameter${n.name ? ` "${n.name}"` : ""} on event "${An(e, { includeName: !0 })}".`
    ].join(`
`), { name: "DecodeLogTopicsMismatch" }), Object.defineProperty(this, "abiItem", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abiItem = e;
  }
}
class nA extends G {
  constructor(e, { docsPath: n }) {
    super([
      `Type "${e}" is not a valid encoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiEncodingType" });
  }
}
class rA extends G {
  constructor(e, { docsPath: n }) {
    super([
      `Type "${e}" is not a valid decoding type.`,
      "Please provide a valid ABI type."
    ].join(`
`), { docsPath: n, name: "InvalidAbiDecodingType" });
  }
}
class iA extends G {
  constructor(e) {
    super([`Value "${e}" is not a valid array.`].join(`
`), {
      name: "InvalidArrayError"
    });
  }
}
class sA extends G {
  constructor(e) {
    super([
      `"${e}" is not a valid definition type.`,
      'Valid types: "function", "event", "error"'
    ].join(`
`), { name: "InvalidDefinitionTypeError" });
  }
}
const oA = (t) => Ve(Gi(t));
function aA(t) {
  return oA(t);
}
const cA = "1.0.6";
class tt extends Error {
  constructor(e, n = {}) {
    var o;
    const r = n.cause instanceof tt ? n.cause.details : (o = n.cause) != null && o.message ? n.cause.message : n.details, i = n.cause instanceof tt && n.cause.docsPath || n.docsPath, s = [
      e || "An error occurred.",
      "",
      ...n.metaMessages ? [...n.metaMessages, ""] : [],
      ...i ? [`Docs: https://abitype.dev${i}`] : [],
      ...r ? [`Details: ${r}`] : [],
      `Version: abitype@${cA}`
    ].join(`
`);
    super(s), Object.defineProperty(this, "details", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "docsPath", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "metaMessages", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "shortMessage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "AbiTypeError"
    }), n.cause && (this.cause = n.cause), this.details = r, this.docsPath = i, this.metaMessages = n.metaMessages, this.shortMessage = e;
  }
}
function Qn(t, e) {
  const n = t.exec(e);
  return n == null ? void 0 : n.groups;
}
const oy = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, ay = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/, cy = /^\(.+?\).*?$/, Rh = /^tuple(?<array>(\[(\d*)\])*)$/;
function Ou(t) {
  let e = t.type;
  if (Rh.test(t.type) && "components" in t) {
    e = "(";
    const n = t.components.length;
    for (let i = 0; i < n; i++) {
      const s = t.components[i];
      e += Ou(s), i < n - 1 && (e += ", ");
    }
    const r = Qn(Rh, t.type);
    return e += `)${(r == null ? void 0 : r.array) ?? ""}`, Ou({
      ...t,
      type: e
    });
  }
  return "indexed" in t && t.indexed && (e = `${e} indexed`), t.name ? `${e} ${t.name}` : e;
}
function ns(t) {
  let e = "";
  const n = t.length;
  for (let r = 0; r < n; r++) {
    const i = t[r];
    e += Ou(i), r !== n - 1 && (e += ", ");
  }
  return e;
}
function uA(t) {
  return t.type === "function" ? `function ${t.name}(${ns(t.inputs)})${t.stateMutability && t.stateMutability !== "nonpayable" ? ` ${t.stateMutability}` : ""}${t.outputs.length ? ` returns (${ns(t.outputs)})` : ""}` : t.type === "event" ? `event ${t.name}(${ns(t.inputs)})` : t.type === "error" ? `error ${t.name}(${ns(t.inputs)})` : t.type === "constructor" ? `constructor(${ns(t.inputs)})${t.stateMutability === "payable" ? " payable" : ""}` : t.type === "fallback" ? "fallback()" : "receive() external payable";
}
const uy = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function fA(t) {
  return uy.test(t);
}
function lA(t) {
  return Qn(uy, t);
}
const fy = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function dA(t) {
  return fy.test(t);
}
function hA(t) {
  return Qn(fy, t);
}
const ly = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function pA(t) {
  return ly.test(t);
}
function gA(t) {
  return Qn(ly, t);
}
const dy = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function hy(t) {
  return dy.test(t);
}
function yA(t) {
  return Qn(dy, t);
}
const py = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function bA(t) {
  return py.test(t);
}
function mA(t) {
  return Qn(py, t);
}
const wA = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function EA(t) {
  return wA.test(t);
}
const xA = /^receive\(\) external payable$/;
function vA(t) {
  return xA.test(t);
}
const SA = /* @__PURE__ */ new Set(["indexed"]), Cu = /* @__PURE__ */ new Set([
  "calldata",
  "memory",
  "storage"
]);
class _A extends tt {
  constructor({ type: e }) {
    super("Unknown type.", {
      metaMessages: [
        `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownTypeError"
    });
  }
}
class AA extends tt {
  constructor({ type: e }) {
    super("Unknown type.", {
      metaMessages: [`Type "${e}" is not a valid ABI type.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSolidityTypeError"
    });
  }
}
class IA extends tt {
  constructor({ param: e }) {
    super("Invalid ABI parameter.", {
      details: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParameterError"
    });
  }
}
class PA extends tt {
  constructor({ param: e, name: n }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "SolidityProtectedKeywordError"
    });
  }
}
class BA extends tt {
  constructor({ param: e, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidModifierError"
    });
  }
}
class TA extends tt {
  constructor({ param: e, type: n, modifier: r }) {
    super("Invalid ABI parameter.", {
      details: e,
      metaMessages: [
        `Modifier "${r}" not allowed${n ? ` in "${n}" type` : ""}.`,
        `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`
      ]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidFunctionModifierError"
    });
  }
}
class $A extends tt {
  constructor({ abiParameter: e }) {
    super("Invalid ABI parameter.", {
      details: JSON.stringify(e, null, 2),
      metaMessages: ["ABI parameter type is invalid."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidAbiTypeParameterError"
    });
  }
}
class as extends tt {
  constructor({ signature: e, type: n }) {
    super(`Invalid ${n} signature.`, {
      details: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidSignatureError"
    });
  }
}
class NA extends tt {
  constructor({ signature: e }) {
    super("Unknown signature.", {
      details: e
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "UnknownSignatureError"
    });
  }
}
class RA extends tt {
  constructor({ signature: e }) {
    super("Invalid struct signature.", {
      details: e,
      metaMessages: ["No properties exist."]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidStructSignatureError"
    });
  }
}
class OA extends tt {
  constructor({ type: e }) {
    super("Circular reference detected.", {
      metaMessages: [`Struct "${e}" is a circular reference.`]
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "CircularReferenceError"
    });
  }
}
class CA extends tt {
  constructor({ current: e, depth: n }) {
    super("Unbalanced parentheses.", {
      metaMessages: [
        `"${e.trim()}" has too many ${n > 0 ? "opening" : "closing"} parentheses.`
      ],
      details: `Depth "${n}"`
    }), Object.defineProperty(this, "name", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "InvalidParenthesisError"
    });
  }
}
function kA(t, e) {
  return e ? `${e}:${t}` : t;
}
const $c = /* @__PURE__ */ new Map([
  // Unnamed
  ["address", { type: "address" }],
  ["bool", { type: "bool" }],
  ["bytes", { type: "bytes" }],
  ["bytes32", { type: "bytes32" }],
  ["int", { type: "int256" }],
  ["int256", { type: "int256" }],
  ["string", { type: "string" }],
  ["uint", { type: "uint256" }],
  ["uint8", { type: "uint8" }],
  ["uint16", { type: "uint16" }],
  ["uint24", { type: "uint24" }],
  ["uint32", { type: "uint32" }],
  ["uint64", { type: "uint64" }],
  ["uint96", { type: "uint96" }],
  ["uint112", { type: "uint112" }],
  ["uint160", { type: "uint160" }],
  ["uint192", { type: "uint192" }],
  ["uint256", { type: "uint256" }],
  // Named
  ["address owner", { type: "address", name: "owner" }],
  ["address to", { type: "address", name: "to" }],
  ["bool approved", { type: "bool", name: "approved" }],
  ["bytes _data", { type: "bytes", name: "_data" }],
  ["bytes data", { type: "bytes", name: "data" }],
  ["bytes signature", { type: "bytes", name: "signature" }],
  ["bytes32 hash", { type: "bytes32", name: "hash" }],
  ["bytes32 r", { type: "bytes32", name: "r" }],
  ["bytes32 root", { type: "bytes32", name: "root" }],
  ["bytes32 s", { type: "bytes32", name: "s" }],
  ["string name", { type: "string", name: "name" }],
  ["string symbol", { type: "string", name: "symbol" }],
  ["string tokenURI", { type: "string", name: "tokenURI" }],
  ["uint tokenId", { type: "uint256", name: "tokenId" }],
  ["uint8 v", { type: "uint8", name: "v" }],
  ["uint256 balance", { type: "uint256", name: "balance" }],
  ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
  ["uint256 value", { type: "uint256", name: "value" }],
  // Indexed
  [
    "event:address indexed from",
    { type: "address", name: "from", indexed: !0 }
  ],
  ["event:address indexed to", { type: "address", name: "to", indexed: !0 }],
  [
    "event:uint indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ],
  [
    "event:uint256 indexed tokenId",
    { type: "uint256", name: "tokenId", indexed: !0 }
  ]
]);
function LA(t, e = {}) {
  if (pA(t)) {
    const n = gA(t);
    if (!n)
      throw new as({ signature: t, type: "function" });
    const r = Lt(n.parameters), i = [], s = r.length;
    for (let a = 0; a < s; a++)
      i.push(ar(r[a], {
        modifiers: Cu,
        structs: e,
        type: "function"
      }));
    const o = [];
    if (n.returns) {
      const a = Lt(n.returns), c = a.length;
      for (let u = 0; u < c; u++)
        o.push(ar(a[u], {
          modifiers: Cu,
          structs: e,
          type: "function"
        }));
    }
    return {
      name: n.name,
      type: "function",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: i,
      outputs: o
    };
  }
  if (dA(t)) {
    const n = hA(t);
    if (!n)
      throw new as({ signature: t, type: "event" });
    const r = Lt(n.parameters), i = [], s = r.length;
    for (let o = 0; o < s; o++)
      i.push(ar(r[o], {
        modifiers: SA,
        structs: e,
        type: "event"
      }));
    return { name: n.name, type: "event", inputs: i };
  }
  if (fA(t)) {
    const n = lA(t);
    if (!n)
      throw new as({ signature: t, type: "error" });
    const r = Lt(n.parameters), i = [], s = r.length;
    for (let o = 0; o < s; o++)
      i.push(ar(r[o], { structs: e, type: "error" }));
    return { name: n.name, type: "error", inputs: i };
  }
  if (bA(t)) {
    const n = mA(t);
    if (!n)
      throw new as({ signature: t, type: "constructor" });
    const r = Lt(n.parameters), i = [], s = r.length;
    for (let o = 0; o < s; o++)
      i.push(ar(r[o], { structs: e, type: "constructor" }));
    return {
      type: "constructor",
      stateMutability: n.stateMutability ?? "nonpayable",
      inputs: i
    };
  }
  if (EA(t))
    return { type: "fallback" };
  if (vA(t))
    return {
      type: "receive",
      stateMutability: "payable"
    };
  throw new NA({ signature: t });
}
const MA = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, FA = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/, UA = /^u?int$/;
function ar(t, e) {
  var l, d;
  const n = kA(t, e == null ? void 0 : e.type);
  if ($c.has(n))
    return $c.get(n);
  const r = cy.test(t), i = Qn(r ? FA : MA, t);
  if (!i)
    throw new IA({ param: t });
  if (i.name && jA(i.name))
    throw new PA({ param: t, name: i.name });
  const s = i.name ? { name: i.name } : {}, o = i.modifier === "indexed" ? { indexed: !0 } : {}, a = (e == null ? void 0 : e.structs) ?? {};
  let c, u = {};
  if (r) {
    c = "tuple";
    const y = Lt(i.type), w = [], h = y.length;
    for (let g = 0; g < h; g++)
      w.push(ar(y[g], { structs: a }));
    u = { components: w };
  } else if (i.type in a)
    c = "tuple", u = { components: a[i.type] };
  else if (UA.test(i.type))
    c = `${i.type}256`;
  else if (c = i.type, (e == null ? void 0 : e.type) !== "struct" && !gy(c))
    throw new AA({ type: c });
  if (i.modifier) {
    if (!((d = (l = e == null ? void 0 : e.modifiers) == null ? void 0 : l.has) != null && d.call(l, i.modifier)))
      throw new BA({
        param: t,
        type: e == null ? void 0 : e.type,
        modifier: i.modifier
      });
    if (Cu.has(i.modifier) && !HA(c, !!i.array))
      throw new TA({
        param: t,
        type: e == null ? void 0 : e.type,
        modifier: i.modifier
      });
  }
  const f = {
    type: `${c}${i.array ?? ""}`,
    ...s,
    ...o,
    ...u
  };
  return $c.set(n, f), f;
}
function Lt(t, e = [], n = "", r = 0) {
  const i = t.trim().length;
  for (let s = 0; s < i; s++) {
    const o = t[s], a = t.slice(s + 1);
    switch (o) {
      case ",":
        return r === 0 ? Lt(a, [...e, n.trim()]) : Lt(a, e, `${n}${o}`, r);
      case "(":
        return Lt(a, e, `${n}${o}`, r + 1);
      case ")":
        return Lt(a, e, `${n}${o}`, r - 1);
      default:
        return Lt(a, e, `${n}${o}`, r);
    }
  }
  if (n === "")
    return e;
  if (r !== 0)
    throw new CA({ current: n, depth: r });
  return e.push(n.trim()), e;
}
function gy(t) {
  return t === "address" || t === "bool" || t === "function" || t === "string" || oy.test(t) || ay.test(t);
}
const DA = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function jA(t) {
  return t === "address" || t === "bool" || t === "function" || t === "string" || t === "tuple" || oy.test(t) || ay.test(t) || DA.test(t);
}
function HA(t, e) {
  return e || t === "bytes" || t === "string" || t === "tuple";
}
function GA(t) {
  const e = {}, n = t.length;
  for (let o = 0; o < n; o++) {
    const a = t[o];
    if (!hy(a))
      continue;
    const c = yA(a);
    if (!c)
      throw new as({ signature: a, type: "struct" });
    const u = c.properties.split(";"), f = [], l = u.length;
    for (let d = 0; d < l; d++) {
      const w = u[d].trim();
      if (!w)
        continue;
      const h = ar(w, {
        type: "struct"
      });
      f.push(h);
    }
    if (!f.length)
      throw new RA({ signature: a });
    e[c.name] = f;
  }
  const r = {}, i = Object.entries(e), s = i.length;
  for (let o = 0; o < s; o++) {
    const [a, c] = i[o];
    r[a] = yy(c, e);
  }
  return r;
}
const qA = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function yy(t, e, n = /* @__PURE__ */ new Set()) {
  const r = [], i = t.length;
  for (let s = 0; s < i; s++) {
    const o = t[s];
    if (cy.test(o.type))
      r.push(o);
    else {
      const c = Qn(qA, o.type);
      if (!(c != null && c.type))
        throw new $A({ abiParameter: o });
      const { array: u, type: f } = c;
      if (f in e) {
        if (n.has(f))
          throw new OA({ type: f });
        r.push({
          ...o,
          type: `tuple${u ?? ""}`,
          components: yy(e[f] ?? [], e, /* @__PURE__ */ new Set([...n, f]))
        });
      } else if (gy(f))
        r.push(o);
      else
        throw new _A({ type: f });
    }
  }
  return r;
}
function by(t) {
  const e = GA(t), n = [], r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t[i];
    hy(s) || n.push(LA(s, e));
  }
  return n;
}
function zA(t) {
  let e = !0, n = "", r = 0, i = "", s = !1;
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (["(", ")", ","].includes(a) && (e = !0), a === "(" && r++, a === ")" && r--, !!e) {
      if (r === 0) {
        if (a === " " && ["event", "function", ""].includes(i))
          i = "";
        else if (i += a, a === ")") {
          s = !0;
          break;
        }
        continue;
      }
      if (a === " ") {
        t[o - 1] !== "," && n !== "," && n !== ",(" && (n = "", e = !1);
        continue;
      }
      i += a, n += a;
    }
  }
  if (!s)
    throw new G("Unable to normalize signature.");
  return i;
}
const VA = (t) => {
  const e = typeof t == "string" ? t : uA(t);
  return zA(e);
};
function my(t) {
  return aA(VA(t));
}
const Gf = (t) => qo(my(t), 0, 4);
function WA(t, e = {}) {
  typeof e.size < "u" && Ht(t, { size: e.size });
  const n = Ue(t, e);
  return Wn(n, e);
}
function KA(t, e = {}) {
  let n = t;
  if (typeof e.size < "u" && (Ht(n, { size: e.size }), n = mr(n)), n.length > 1 || n[0] > 1)
    throw new gS(n);
  return !!n[0];
}
function xn(t, e = {}) {
  typeof e.size < "u" && Ht(t, { size: e.size });
  const n = Ue(t, e);
  return _n(n, e);
}
function ZA(t, e = {}) {
  let n = t;
  return typeof e.size < "u" && (Ht(n, { size: e.size }), n = mr(n, { dir: "right" })), new TextDecoder().decode(n);
}
function Fr(t, e) {
  if (t.length !== e.length)
    throw new J_({
      expectedLength: t.length,
      givenLength: e.length
    });
  const n = YA({
    params: t,
    values: e
  }), r = zf(n);
  return r.length === 0 ? "0x" : r;
}
function YA({ params: t, values: e }) {
  const n = [];
  for (let r = 0; r < t.length; r++)
    n.push(qf({ param: t[r], value: e[r] }));
  return n;
}
function qf({ param: t, value: e }) {
  const n = Vf(t.type);
  if (n) {
    const [r, i] = n;
    return XA(e, { length: r, param: { ...t, type: i } });
  }
  if (t.type === "tuple")
    return r6(e, {
      param: t
    });
  if (t.type === "address")
    return JA(e);
  if (t.type === "bool")
    return e6(e);
  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
    const r = t.type.startsWith("int");
    return t6(e, { signed: r });
  }
  if (t.type.startsWith("bytes"))
    return QA(e, { param: t });
  if (t.type === "string")
    return n6(e);
  throw new nA(t.type, {
    docsPath: "/docs/contract/encodeAbiParameters"
  });
}
function zf(t) {
  let e = 0;
  for (let s = 0; s < t.length; s++) {
    const { dynamic: o, encoded: a } = t[s];
    o ? e += 32 : e += Ce(a);
  }
  const n = [], r = [];
  let i = 0;
  for (let s = 0; s < t.length; s++) {
    const { dynamic: o, encoded: a } = t[s];
    o ? (n.push(re(e + i, { size: 32 })), r.push(a), i += Ce(a)) : n.push(a);
  }
  return en([...n, ...r]);
}
function JA(t) {
  if (!Ut(t))
    throw new Zn({ address: t });
  return { dynamic: !1, encoded: zn(t.toLowerCase()) };
}
function XA(t, { length: e, param: n }) {
  const r = e === null;
  if (!Array.isArray(t))
    throw new iA(t);
  if (!r && t.length !== e)
    throw new Z_({
      expectedLength: e,
      givenLength: t.length,
      type: `${n.type}[${e}]`
    });
  let i = !1;
  const s = [];
  for (let o = 0; o < t.length; o++) {
    const a = qf({ param: n, value: t[o] });
    a.dynamic && (i = !0), s.push(a);
  }
  if (r || i) {
    const o = zf(s);
    if (r) {
      const a = re(s.length, { size: 32 });
      return {
        dynamic: !0,
        encoded: s.length > 0 ? en([a, o]) : a
      };
    }
    if (i)
      return { dynamic: !0, encoded: o };
  }
  return {
    dynamic: !1,
    encoded: en(s.map(({ encoded: o }) => o))
  };
}
function QA(t, { param: e }) {
  const [, n] = e.type.split("bytes"), r = Ce(t);
  if (!n) {
    let i = t;
    return r % 32 !== 0 && (i = zn(i, {
      dir: "right",
      size: Math.ceil((t.length - 2) / 2 / 32) * 32
    })), {
      dynamic: !0,
      encoded: en([zn(re(r, { size: 32 })), i])
    };
  }
  if (r !== Number.parseInt(n))
    throw new Y_({
      expectedSize: Number.parseInt(n),
      value: t
    });
  return { dynamic: !1, encoded: zn(t, { dir: "right" }) };
}
function e6(t) {
  if (typeof t != "boolean")
    throw new G(`Invalid boolean value: "${t}" (type: ${typeof t}). Expected: \`true\` or \`false\`.`);
  return { dynamic: !1, encoded: zn(mg(t)) };
}
function t6(t, { signed: e }) {
  return {
    dynamic: !1,
    encoded: re(t, {
      size: 32,
      signed: e
    })
  };
}
function n6(t) {
  const e = Si(t), n = Math.ceil(Ce(e) / 32), r = [];
  for (let i = 0; i < n; i++)
    r.push(zn(qo(e, i * 32, (i + 1) * 32), {
      dir: "right"
    }));
  return {
    dynamic: !0,
    encoded: en([
      zn(re(Ce(e), { size: 32 })),
      ...r
    ])
  };
}
function r6(t, { param: e }) {
  let n = !1;
  const r = [];
  for (let i = 0; i < e.components.length; i++) {
    const s = e.components[i], o = Array.isArray(t) ? i : s.name, a = qf({
      param: s,
      value: t[o]
    });
    r.push(a), a.dynamic && (n = !0);
  }
  return {
    dynamic: n,
    encoded: n ? zf(r) : en(r.map(({ encoded: i }) => i))
  };
}
function Vf(t) {
  const e = t.match(/^(.*)\[(\d+)?\]$/);
  return e ? (
    // Return `null` if the array is dynamic.
    [e[2] ? Number(e[2]) : null, e[1]]
  ) : void 0;
}
function Sa(t, e) {
  const n = typeof e == "string" ? Ft(e) : e, r = Cf(n);
  if (Ce(n) === 0 && t.length > 0)
    throw new xa();
  if (Ce(e) && Ce(e) < 32)
    throw new ry({
      data: typeof e == "string" ? e : Ue(e),
      params: t,
      size: Ce(e)
    });
  let i = 0;
  const s = [];
  for (let o = 0; o < t.length; ++o) {
    const a = t[o];
    r.setPosition(i);
    const [c, u] = ei(r, a, {
      staticPosition: 0
    });
    i += u, s.push(c);
  }
  return s;
}
function ei(t, e, { staticPosition: n }) {
  const r = Vf(e.type);
  if (r) {
    const [i, s] = r;
    return s6(t, { ...e, type: s }, { length: i, staticPosition: n });
  }
  if (e.type === "tuple")
    return u6(t, e, { staticPosition: n });
  if (e.type === "address")
    return i6(t);
  if (e.type === "bool")
    return o6(t);
  if (e.type.startsWith("bytes"))
    return a6(t, e, { staticPosition: n });
  if (e.type.startsWith("uint") || e.type.startsWith("int"))
    return c6(t, e);
  if (e.type === "string")
    return f6(t, { staticPosition: n });
  throw new rA(e.type, {
    docsPath: "/docs/contract/decodeAbiParameters"
  });
}
const Oh = 32, ku = 32;
function i6(t) {
  const e = t.readBytes(32);
  return [qs(Ue(qg(e, -20))), 32];
}
function s6(t, e, { length: n, staticPosition: r }) {
  if (!n) {
    const o = xn(t.readBytes(ku)), a = r + o, c = a + Oh;
    t.setPosition(a);
    const u = xn(t.readBytes(Oh)), f = $s(e);
    let l = 0;
    const d = [];
    for (let y = 0; y < u; ++y) {
      t.setPosition(c + (f ? y * 32 : l));
      const [w, h] = ei(t, e, {
        staticPosition: c
      });
      l += h, d.push(w);
    }
    return t.setPosition(r + 32), [d, 32];
  }
  if ($s(e)) {
    const o = xn(t.readBytes(ku)), a = r + o, c = [];
    for (let u = 0; u < n; ++u) {
      t.setPosition(a + u * 32);
      const [f] = ei(t, e, {
        staticPosition: a
      });
      c.push(f);
    }
    return t.setPosition(r + 32), [c, 32];
  }
  let i = 0;
  const s = [];
  for (let o = 0; o < n; ++o) {
    const [a, c] = ei(t, e, {
      staticPosition: r + i
    });
    i += c, s.push(a);
  }
  return [s, i];
}
function o6(t) {
  return [KA(t.readBytes(32), { size: 32 }), 32];
}
function a6(t, e, { staticPosition: n }) {
  const [r, i] = e.type.split("bytes");
  if (!i) {
    const o = xn(t.readBytes(32));
    t.setPosition(n + o);
    const a = xn(t.readBytes(32));
    if (a === 0)
      return t.setPosition(n + 32), ["0x", 32];
    const c = t.readBytes(a);
    return t.setPosition(n + 32), [Ue(c), 32];
  }
  return [Ue(t.readBytes(Number.parseInt(i), 32)), 32];
}
function c6(t, e) {
  const n = e.type.startsWith("int"), r = Number.parseInt(e.type.split("int")[1] || "256"), i = t.readBytes(32);
  return [
    r > 48 ? WA(i, { signed: n }) : xn(i, { signed: n }),
    32
  ];
}
function u6(t, e, { staticPosition: n }) {
  const r = e.components.length === 0 || e.components.some(({ name: o }) => !o), i = r ? [] : {};
  let s = 0;
  if ($s(e)) {
    const o = xn(t.readBytes(ku)), a = n + o;
    for (let c = 0; c < e.components.length; ++c) {
      const u = e.components[c];
      t.setPosition(a + s);
      const [f, l] = ei(t, u, {
        staticPosition: a
      });
      s += l, i[r ? c : u == null ? void 0 : u.name] = f;
    }
    return t.setPosition(n + 32), [i, 32];
  }
  for (let o = 0; o < e.components.length; ++o) {
    const a = e.components[o], [c, u] = ei(t, a, {
      staticPosition: n
    });
    i[r ? o : a == null ? void 0 : a.name] = c, s += u;
  }
  return [i, s];
}
function f6(t, { staticPosition: e }) {
  const n = xn(t.readBytes(32)), r = e + n;
  t.setPosition(r);
  const i = xn(t.readBytes(32));
  if (i === 0)
    return t.setPosition(e + 32), ["", 32];
  const s = t.readBytes(i, 32), o = ZA(mr(s));
  return t.setPosition(e + 32), [o, 32];
}
function $s(t) {
  var r;
  const { type: e } = t;
  if (e === "string" || e === "bytes" || e.endsWith("[]"))
    return !0;
  if (e === "tuple")
    return (r = t.components) == null ? void 0 : r.some($s);
  const n = Vf(t.type);
  return !!(n && $s({ ...t, type: n[1] }));
}
function wy(t) {
  const { abi: e, data: n } = t, r = qo(n, 0, 4);
  if (r === "0x")
    throw new xa();
  const s = [...e || [], z_, V_].find((o) => o.type === "error" && r === Gf(An(o)));
  if (!s)
    throw new iy(r, {
      docsPath: "/docs/contract/decodeErrorResult"
    });
  return {
    abiItem: s,
    args: "inputs" in s && s.inputs && s.inputs.length > 0 ? Sa(s.inputs, qo(n, 4)) : void 0,
    errorName: s.name
  };
}
function Ey({ abiItem: t, args: e, includeFunctionName: n = !0, includeName: r = !1 }) {
  if ("name" in t && "inputs" in t && t.inputs)
    return `${n ? t.name : ""}(${t.inputs.map((i, s) => `${r && i.name ? `${i.name}: ` : ""}${typeof e[s] == "object" ? Fe(e[s]) : e[s]}`).join(", ")})`;
}
const _a = my;
function Zs(t) {
  const { abi: e, args: n = [], name: r } = t, i = Mt(r, { strict: !1 }), s = e.filter((a) => i ? a.type === "function" ? Gf(a) === r : a.type === "event" ? _a(a) === r : !1 : "name" in a && a.name === r);
  if (s.length === 0)
    return;
  if (s.length === 1)
    return s[0];
  let o;
  for (const a of s) {
    if (!("inputs" in a))
      continue;
    if (!n || n.length === 0) {
      if (!a.inputs || a.inputs.length === 0)
        return a;
      continue;
    }
    if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length)
      continue;
    if (n.every((u, f) => {
      const l = "inputs" in a && a.inputs[f];
      return l ? Lu(u, l) : !1;
    })) {
      if (o && "inputs" in o && o.inputs) {
        const u = xy(a.inputs, o.inputs, n);
        if (u)
          throw new eA({
            abiItem: a,
            type: u[0]
          }, {
            abiItem: o,
            type: u[1]
          });
      }
      o = a;
    }
  }
  return o || s[0];
}
function Lu(t, e) {
  const n = typeof t, r = e.type;
  switch (r) {
    case "address":
      return Ut(t, { strict: !1 });
    case "bool":
      return n === "boolean";
    case "function":
      return n === "string";
    case "string":
      return n === "string";
    default:
      return r === "tuple" && "components" in e ? Object.values(e.components).every((i, s) => Lu(Object.values(t)[s], i)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || t instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(t) && t.every((i) => Lu(i, {
        ...e,
        // Pop off `[]` or `[M]` from end of type
        type: r.replace(/(\[[0-9]{0,}\])$/, "")
      })) : !1;
  }
}
function xy(t, e, n) {
  for (const r in t) {
    const i = t[r], s = e[r];
    if (i.type === "tuple" && s.type === "tuple" && "components" in i && "components" in s)
      return xy(i.components, s.components, n[r]);
    const o = [i.type, s.type];
    if (o.includes("address") && o.includes("bytes20") ? !0 : o.includes("address") && o.includes("string") ? Ut(n[r], { strict: !1 }) : o.includes("address") && o.includes("bytes") ? Ut(n[r], { strict: !1 }) : !1)
      return o;
  }
}
class vy extends G {
  constructor(e, { account: n, docsPath: r, chain: i, data: s, gas: o, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: u, nonce: f, to: l, value: d, stateOverride: y }) {
    var g;
    const w = n ? pt(n) : void 0;
    let h = Hs({
      from: w == null ? void 0 : w.address,
      to: l,
      value: typeof d < "u" && `${kf(d)} ${((g = i == null ? void 0 : i.nativeCurrency) == null ? void 0 : g.symbol) || "ETH"}`,
      data: s,
      gas: o,
      gasPrice: typeof a < "u" && `${ut(a)} gwei`,
      maxFeePerGas: typeof c < "u" && `${ut(c)} gwei`,
      maxPriorityFeePerGas: typeof u < "u" && `${ut(u)} gwei`,
      nonce: f
    });
    y && (h += `
${G_(y)}`), super(e.shortMessage, {
      cause: e,
      docsPath: r,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        "Raw Call Arguments:",
        h
      ].filter(Boolean),
      name: "CallExecutionError"
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.cause = e;
  }
}
class l6 extends G {
  constructor(e, { abi: n, args: r, contractAddress: i, docsPath: s, functionName: o, sender: a }) {
    const c = Zs({ abi: n, args: r, name: o }), u = c ? Ey({
      abiItem: c,
      args: r,
      includeFunctionName: !1,
      includeName: !1
    }) : void 0, f = c ? An(c, { includeName: !0 }) : void 0, l = Hs({
      address: i && M_(i),
      function: f,
      args: u && u !== "()" && `${[...Array((o == null ? void 0 : o.length) ?? 0).keys()].map(() => " ").join("")}${u}`,
      sender: a
    });
    super(e.shortMessage || `An unknown error occurred while executing the contract function "${o}".`, {
      cause: e,
      docsPath: s,
      metaMessages: [
        ...e.metaMessages ? [...e.metaMessages, " "] : [],
        l && "Contract Call:",
        l
      ].filter(Boolean),
      name: "ContractFunctionExecutionError"
    }), Object.defineProperty(this, "abi", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "args", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "cause", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "contractAddress", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "formattedArgs", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "functionName", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "sender", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.abi = n, this.args = r, this.cause = e, this.contractAddress = i, this.functionName = o, this.sender = a;
  }
}
class Mu extends G {
  constructor({ abi: e, data: n, functionName: r, message: i }) {
    let s, o, a, c;
    if (n && n !== "0x")
      try {
        o = wy({ abi: e, data: n });
        const { abiItem: f, errorName: l, args: d } = o;
        if (l === "Error")
          c = d[0];
        else if (l === "Panic") {
          const [y] = d;
          c = ny[y];
        } else {
          const y = f ? An(f, { includeName: !0 }) : void 0, w = f && d ? Ey({
            abiItem: f,
            args: d,
            includeFunctionName: !1,
            includeName: !1
          }) : void 0;
          a = [
            y ? `Error: ${y}` : "",
            w && w !== "()" ? `       ${[...Array((l == null ? void 0 : l.length) ?? 0).keys()].map(() => " ").join("")}${w}` : ""
          ];
        }
      } catch (f) {
        s = f;
      }
    else i && (c = i);
    let u;
    s instanceof iy && (u = s.signature, a = [
      `Unable to decode signature "${u}" as it was not found on the provided ABI.`,
      "Make sure you are using the correct ABI and that the error exists on it.",
      `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`
    ]), super(c && c !== "execution reverted" || u ? [
      `The contract function "${r}" reverted with the following ${u ? "signature" : "reason"}:`,
      c || u
    ].join(`
`) : `The contract function "${r}" reverted.`, {
      cause: s,
      metaMessages: a,
      name: "ContractFunctionRevertedError"
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "reason", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "signature", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = o, this.reason = c, this.signature = u;
  }
}
class d6 extends G {
  constructor({ functionName: e }) {
    super(`The contract function "${e}" returned no data ("0x").`, {
      metaMessages: [
        "This could be due to any of the following:",
        `  - The contract does not have the function "${e}",`,
        "  - The parameters passed to the contract function may be invalid, or",
        "  - The address is not a contract."
      ],
      name: "ContractFunctionZeroDataError"
    });
  }
}
class h6 extends G {
  constructor({ factory: e }) {
    super(`Deployment for counterfactual contract call failed${e ? ` for factory "${e}".` : ""}`, {
      metaMessages: [
        "Please ensure:",
        "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
        "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."
      ],
      name: "CounterfactualDeploymentFailedError"
    });
  }
}
class Wf extends G {
  constructor({ data: e, message: n }) {
    super(n || "", { name: "RawContractError" }), Object.defineProperty(this, "code", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 3
    }), Object.defineProperty(this, "data", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.data = e;
  }
}
function p6(t, { docsPath: e, ...n }) {
  const r = (() => {
    const i = Df(t, n);
    return i instanceof ba ? t : i;
  })();
  return new vy(r, {
    docsPath: e,
    ...n
  });
}
class g6 extends G {
  constructor(e) {
    super(`Filter type "${e}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
}
const Ch = "/docs/contract/encodeEventTopics";
function Ys(t) {
  var c;
  const { abi: e, eventName: n, args: r } = t;
  let i = e[0];
  if (n) {
    const u = Zs({ abi: e, name: n });
    if (!u)
      throw new Nh(n, { docsPath: Ch });
    i = u;
  }
  if (i.type !== "event")
    throw new Nh(void 0, { docsPath: Ch });
  const s = An(i), o = _a(s);
  let a = [];
  if (r && "inputs" in i) {
    const u = (c = i.inputs) == null ? void 0 : c.filter((l) => "indexed" in l && l.indexed), f = Array.isArray(r) ? r : Object.values(r).length > 0 ? (u == null ? void 0 : u.map((l) => r[l.name])) ?? [] : [];
    f.length > 0 && (a = (u == null ? void 0 : u.map((l, d) => Array.isArray(f[d]) ? f[d].map((y, w) => kh({ param: l, value: f[d][w] })) : f[d] ? kh({ param: l, value: f[d] }) : null)) ?? []);
  }
  return [o, ...a];
}
function kh({ param: t, value: e }) {
  if (t.type === "string" || t.type === "bytes")
    return Ve(Gi(e));
  if (t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/))
    throw new g6(t.type);
  return Fr([t], [e]);
}
function Aa(t, { method: e }) {
  var r, i;
  const n = {};
  return t.transport.type === "fallback" && ((i = (r = t.transport).onResponse) == null || i.call(r, ({ method: s, response: o, status: a, transport: c }) => {
    a === "success" && e === s && (n[o] = c.request);
  })), (s) => n[s] || t.request;
}
async function Sy(t, e) {
  const { address: n, abi: r, args: i, eventName: s, fromBlock: o, strict: a, toBlock: c } = e, u = Aa(t, {
    method: "eth_newFilter"
  }), f = s ? Ys({
    abi: r,
    args: i,
    eventName: s
  }) : void 0, l = await t.request({
    method: "eth_newFilter",
    params: [
      {
        address: n,
        fromBlock: typeof o == "bigint" ? re(o) : o,
        toBlock: typeof c == "bigint" ? re(c) : c,
        topics: f
      }
    ]
  });
  return {
    abi: r,
    args: i,
    eventName: s,
    id: l,
    request: u(l),
    strict: !!a,
    type: "event"
  };
}
const Lh = "/docs/contract/encodeFunctionData";
function y6(t) {
  const { abi: e, args: n, functionName: r } = t;
  let i = e[0];
  if (r) {
    const s = Zs({
      abi: e,
      args: n,
      name: r
    });
    if (!s)
      throw new zo(r, { docsPath: Lh });
    i = s;
  }
  if (i.type !== "function")
    throw new zo(void 0, { docsPath: Lh });
  return {
    abi: [i],
    functionName: Gf(An(i))
  };
}
function Bn(t) {
  const { args: e } = t, { abi: n, functionName: r } = (() => {
    var a;
    return t.abi.length === 1 && ((a = t.functionName) != null && a.startsWith("0x")) ? t : y6(t);
  })(), i = n[0], s = r, o = "inputs" in i && i.inputs ? Fr(i.inputs, e ?? []) : void 0;
  return js([s, o ?? "0x"]);
}
const b6 = 3;
function Ii(t, { abi: e, address: n, args: r, docsPath: i, functionName: s, sender: o }) {
  const { code: a, data: c, message: u, shortMessage: f } = t instanceof Wf ? t : t instanceof G ? t.walk((d) => "data" in d) || t.walk() : {}, l = t instanceof xa ? new d6({ functionName: s }) : [b6, Br.code].includes(a) && (c || u || f) ? new Mu({
    abi: e,
    data: typeof c == "object" ? c.data : c,
    functionName: s,
    message: f ?? u
  }) : t;
  return new l6(l, {
    abi: e,
    args: r,
    contractAddress: n,
    docsPath: i,
    functionName: s,
    sender: o
  });
}
async function m6(t, e) {
  const { abi: n, address: r, args: i, functionName: s, ...o } = e, a = Bn({
    abi: n,
    args: i,
    functionName: s
  });
  try {
    return await ne(t, Hf, "estimateGas")({
      data: a,
      to: r,
      ...o
    });
  } catch (c) {
    const u = o.account ? pt(o.account) : void 0;
    throw Ii(c, {
      abi: n,
      address: r,
      args: i,
      docsPath: "/docs/contract/estimateContractGas",
      functionName: s,
      sender: u == null ? void 0 : u.address
    });
  }
}
function Ia(t, e) {
  if (!Ut(t, { strict: !1 }))
    throw new Zn({ address: t });
  if (!Ut(e, { strict: !1 }))
    throw new Zn({ address: e });
  return t.toLowerCase() === e.toLowerCase();
}
const Mh = "/docs/contract/decodeEventLog";
function Kf(t) {
  const { abi: e, data: n, strict: r, topics: i } = t, s = r ?? !0, [o, ...a] = i;
  if (!o)
    throw new X_({ docsPath: Mh });
  const c = e.length === 1 ? e[0] : e.find((h) => h.type === "event" && o === _a(An(h)));
  if (!(c && "name" in c) || c.type !== "event")
    throw new sy(o, { docsPath: Mh });
  const { name: u, inputs: f } = c, l = f == null ? void 0 : f.some((h) => !("name" in h && h.name));
  let d = l ? [] : {};
  const y = f.filter((h) => "indexed" in h && h.indexed);
  for (let h = 0; h < y.length; h++) {
    const g = y[h], b = a[h];
    if (!b)
      throw new va({
        abiItem: c,
        param: g
      });
    d[l ? h : g.name || h] = w6({ param: g, value: b });
  }
  const w = f.filter((h) => !("indexed" in h && h.indexed));
  if (w.length > 0) {
    if (n && n !== "0x")
      try {
        const h = Sa(w, n);
        if (h)
          if (l)
            d = [...d, ...h];
          else
            for (let g = 0; g < w.length; g++)
              d[w[g].name] = h[g];
      } catch (h) {
        if (s)
          throw h instanceof ry || h instanceof vg ? new Ts({
            abiItem: c,
            data: n,
            params: w,
            size: Ce(n)
          }) : h;
      }
    else if (s)
      throw new Ts({
        abiItem: c,
        data: "0x",
        params: w,
        size: 0
      });
  }
  return {
    eventName: u,
    args: Object.values(d).length > 0 ? d : void 0
  };
}
function w6({ param: t, value: e }) {
  return t.type === "string" || t.type === "bytes" || t.type === "tuple" || t.type.match(/^(.*)\[(\d+)?\]$/) ? e : (Sa([t], e) || [])[0];
}
function Zf(t) {
  const { abi: e, args: n, logs: r, strict: i = !0 } = t, s = (() => {
    if (t.eventName)
      return Array.isArray(t.eventName) ? t.eventName : [t.eventName];
  })();
  return r.map((o) => {
    var a;
    try {
      const c = e.find((f) => f.type === "event" && o.topics[0] === _a(f));
      if (!c)
        return null;
      const u = Kf({
        ...o,
        abi: [c],
        strict: i
      });
      return s && !s.includes(u.eventName) || !E6({
        args: u.args,
        inputs: c.inputs,
        matchArgs: n
      }) ? null : { ...u, ...o };
    } catch (c) {
      let u, f;
      if (c instanceof sy)
        return null;
      if (c instanceof Ts || c instanceof va) {
        if (i)
          return null;
        u = c.abiItem.name, f = (a = c.abiItem.inputs) == null ? void 0 : a.some((l) => !("name" in l && l.name));
      }
      return { ...o, args: f ? [] : {}, eventName: u };
    }
  }).filter(Boolean);
}
function E6(t) {
  const { args: e, inputs: n, matchArgs: r } = t;
  if (!r)
    return !0;
  if (!e)
    return !1;
  function i(s, o, a) {
    try {
      return s.type === "address" ? Ia(o, a) : s.type === "string" || s.type === "bytes" ? Ve(Gi(o)) === a : o === a;
    } catch {
      return !1;
    }
  }
  return Array.isArray(e) && Array.isArray(r) ? r.every((s, o) => {
    if (s == null)
      return !0;
    const a = n[o];
    return a ? (Array.isArray(s) ? s : [s]).some((u) => i(a, u, e[o])) : !1;
  }) : typeof e == "object" && !Array.isArray(e) && typeof r == "object" && !Array.isArray(r) ? Object.entries(r).every(([s, o]) => {
    if (o == null)
      return !0;
    const a = n.find((u) => u.name === s);
    return a ? (Array.isArray(o) ? o : [o]).some((u) => i(a, u, e[s])) : !1;
  }) : !1;
}
async function Yf(t, { address: e, blockHash: n, fromBlock: r, toBlock: i, event: s, events: o, args: a, strict: c } = {}) {
  const u = c ?? !1, f = o ?? (s ? [s] : void 0);
  let l = [];
  f && (l = [f.flatMap((h) => Ys({
    abi: [h],
    eventName: h.name,
    args: o ? void 0 : a
  }))], s && (l = l[0]));
  let d;
  n ? d = await t.request({
    method: "eth_getLogs",
    params: [{ address: e, topics: l, blockHash: n }]
  }) : d = await t.request({
    method: "eth_getLogs",
    params: [
      {
        address: e,
        topics: l,
        fromBlock: typeof r == "bigint" ? re(r) : r,
        toBlock: typeof i == "bigint" ? re(i) : i
      }
    ]
  });
  const y = d.map((w) => Kn(w));
  return f ? Zf({
    abi: f,
    args: a,
    logs: y,
    strict: u
  }) : y;
}
async function _y(t, e) {
  const { abi: n, address: r, args: i, blockHash: s, eventName: o, fromBlock: a, toBlock: c, strict: u } = e, f = o ? Zs({ abi: n, name: o }) : void 0, l = f ? void 0 : n.filter((d) => d.type === "event");
  return ne(t, Yf, "getLogs")({
    address: r,
    args: i,
    blockHash: s,
    event: f,
    events: l,
    fromBlock: a,
    toBlock: c,
    strict: u
  });
}
const Nc = "/docs/contract/decodeFunctionResult";
function Vi(t) {
  const { abi: e, args: n, functionName: r, data: i } = t;
  let s = e[0];
  if (r) {
    const a = Zs({ abi: e, args: n, name: r });
    if (!a)
      throw new zo(r, { docsPath: Nc });
    s = a;
  }
  if (s.type !== "function")
    throw new zo(void 0, { docsPath: Nc });
  if (!s.outputs)
    throw new Q_(s.name, { docsPath: Nc });
  const o = Sa(s.outputs, i);
  if (o && o.length > 1)
    return o;
  if (o && o.length === 1)
    return o[0];
}
const Fu = [
  {
    inputs: [
      {
        components: [
          {
            name: "target",
            type: "address"
          },
          {
            name: "allowFailure",
            type: "bool"
          },
          {
            name: "callData",
            type: "bytes"
          }
        ],
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            name: "success",
            type: "bool"
          },
          {
            name: "returnData",
            type: "bytes"
          }
        ],
        name: "returnData",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
], Ay = [
  {
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
  },
  {
    inputs: [],
    name: "ResolverNotContract",
    type: "error"
  },
  {
    inputs: [
      {
        name: "returnData",
        type: "bytes"
      }
    ],
    name: "ResolverError",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          {
            name: "status",
            type: "uint16"
          },
          {
            name: "message",
            type: "string"
          }
        ],
        name: "errors",
        type: "tuple[]"
      }
    ],
    name: "HttpError",
    type: "error"
  }
], Iy = [
  ...Ay,
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  },
  {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes" },
      { name: "data", type: "bytes" },
      { name: "gateways", type: "string[]" }
    ],
    outputs: [
      { name: "", type: "bytes" },
      { name: "address", type: "address" }
    ]
  }
], x6 = [
  ...Ay,
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{ type: "bytes", name: "reverseName" }],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  },
  {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [
      { type: "bytes", name: "reverseName" },
      { type: "string[]", name: "gateways" }
    ],
    outputs: [
      { type: "string", name: "resolvedName" },
      { type: "address", name: "resolvedAddress" },
      { type: "address", name: "reverseResolver" },
      { type: "address", name: "resolver" }
    ]
  }
], Fh = [
  {
    name: "text",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "key", type: "string" }
    ],
    outputs: [{ name: "", type: "string" }]
  }
], Uh = [
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "name", type: "bytes32" }],
    outputs: [{ name: "", type: "address" }]
  },
  {
    name: "addr",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "name", type: "bytes32" },
      { name: "coinType", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bytes" }]
  }
], Dh = [
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "isValidSig"
  }
], v6 = "0x82ad56cb", S6 = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe", _6 = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe", A6 = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572", Rc = "/docs/contract/encodeDeployData";
function Pa(t) {
  const { abi: e, args: n, bytecode: r } = t;
  if (!n || n.length === 0)
    return r;
  const i = e.find((o) => "type" in o && o.type === "constructor");
  if (!i)
    throw new K_({ docsPath: Rc });
  if (!("inputs" in i))
    throw new $h({ docsPath: Rc });
  if (!i.inputs || i.inputs.length === 0)
    throw new $h({ docsPath: Rc });
  const s = Fr(i.inputs, n);
  return js([r, s]);
}
const Oc = /* @__PURE__ */ new Map();
function Py({ fn: t, id: e, shouldSplitBatch: n, wait: r = 0, sort: i }) {
  const s = async () => {
    const f = c();
    o();
    const l = f.map(({ args: d }) => d);
    l.length !== 0 && t(l).then((d) => {
      var y;
      i && Array.isArray(d) && d.sort(i);
      for (let w = 0; w < f.length; w++) {
        const { pendingPromise: h } = f[w];
        (y = h.resolve) == null || y.call(h, [d[w], d]);
      }
    }).catch((d) => {
      var y;
      for (let w = 0; w < f.length; w++) {
        const { pendingPromise: h } = f[w];
        (y = h.reject) == null || y.call(h, d);
      }
    });
  }, o = () => Oc.delete(e), a = () => c().map(({ args: f }) => f), c = () => Oc.get(e) || [], u = (f) => Oc.set(e, [...c(), f]);
  return {
    flush: o,
    async schedule(f) {
      const l = {}, d = new Promise((h, g) => {
        l.resolve = h, l.reject = g;
      });
      return (n == null ? void 0 : n([...a(), f])) && s(), c().length > 0 ? (u({ args: f, pendingPromise: l }), d) : (u({ args: f, pendingPromise: l }), setTimeout(s, r), d);
    }
  };
}
async function Js(t, e) {
  var P, I, A, R;
  const { account: n = t.account, batch: r = !!((P = t.batch) != null && P.multicall), blockNumber: i, blockTag: s = "latest", accessList: o, blobs: a, code: c, data: u, factory: f, factoryData: l, gas: d, gasPrice: y, maxFeePerBlobGas: w, maxFeePerGas: h, maxPriorityFeePerGas: g, nonce: b, to: E, value: S, stateOverride: N, ...O } = e, C = n ? pt(n) : void 0;
  if (c && (f || l))
    throw new G("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
  if (c && E)
    throw new G("Cannot provide both `code` & `to` as parameters.");
  const L = c && u, p = f && l && E && u, x = L || p, _ = L ? B6({
    code: c,
    data: u
  }) : p ? T6({
    data: u,
    factory: f,
    factoryData: l,
    to: E
  }) : u;
  try {
    Vs(e);
    const v = (i ? re(i) : void 0) || s, B = Xg(N), $ = (R = (A = (I = t.chain) == null ? void 0 : I.formatters) == null ? void 0 : A.transactionRequest) == null ? void 0 : R.format, D = ($ || ga)({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...jf(O, { format: $ }),
      from: C == null ? void 0 : C.address,
      accessList: o,
      blobs: a,
      data: _,
      gas: d,
      gasPrice: y,
      maxFeePerBlobGas: w,
      maxFeePerGas: h,
      maxPriorityFeePerGas: g,
      nonce: b,
      to: x ? void 0 : E,
      value: S
    });
    if (r && I6({ request: D }) && !B)
      try {
        return await P6(t, {
          ...D,
          blockNumber: i,
          blockTag: s
        });
      } catch (V) {
        if (!(V instanceof Lg) && !(V instanceof Su))
          throw V;
      }
    const H = await t.request({
      method: "eth_call",
      params: B ? [
        D,
        v,
        B
      ] : [D, v]
    });
    return H === "0x" ? { data: void 0 } : { data: H };
  } catch (m) {
    const v = $6(m), { offchainLookup: B, offchainLookupSignature: $ } = await Promise.resolve().then(() => PI);
    if (t.ccipRead !== !1 && (v == null ? void 0 : v.slice(0, 10)) === $ && E)
      return { data: await B(t, { data: v, to: E }) };
    throw x && (v == null ? void 0 : v.slice(0, 10)) === "0x101bb98d" ? new h6({ factory: f }) : p6(m, {
      ...e,
      account: C,
      chain: t.chain
    });
  }
}
function I6({ request: t }) {
  const { data: e, to: n, ...r } = t;
  return !(!e || e.startsWith(v6) || !n || Object.values(r).filter((i) => typeof i < "u").length > 0);
}
async function P6(t, e) {
  var h;
  const { batchSize: n = 1024, wait: r = 0 } = typeof ((h = t.batch) == null ? void 0 : h.multicall) == "object" ? t.batch.multicall : {}, { blockNumber: i, blockTag: s = "latest", data: o, multicallAddress: a, to: c } = e;
  let u = a;
  if (!u) {
    if (!t.chain)
      throw new Lg();
    u = qi({
      blockNumber: i,
      chain: t.chain,
      contract: "multicall3"
    });
  }
  const l = (i ? re(i) : void 0) || s, { schedule: d } = Py({
    id: `${t.uid}.${l}`,
    wait: r,
    shouldSplitBatch(g) {
      return g.reduce((E, { data: S }) => E + (S.length - 2), 0) > n * 2;
    },
    fn: async (g) => {
      const b = g.map((N) => ({
        allowFailure: !0,
        callData: N.data,
        target: N.to
      })), E = Bn({
        abi: Fu,
        args: [b],
        functionName: "aggregate3"
      }), S = await t.request({
        method: "eth_call",
        params: [
          {
            data: E,
            to: u
          },
          l
        ]
      });
      return Vi({
        abi: Fu,
        args: [b],
        functionName: "aggregate3",
        data: S || "0x"
      });
    }
  }), [{ returnData: y, success: w }] = await d({ data: o, to: c });
  if (!w)
    throw new Wf({ data: y });
  return y === "0x" ? { data: void 0 } : { data: y };
}
function B6(t) {
  const { code: e, data: n } = t;
  return Pa({
    abi: by(["constructor(bytes, bytes)"]),
    bytecode: S6,
    args: [e, n]
  });
}
function T6(t) {
  const { data: e, factory: n, factoryData: r, to: i } = t;
  return Pa({
    abi: by(["constructor(address, bytes, address, bytes)"]),
    bytecode: _6,
    args: [i, e, n, r]
  });
}
function $6(t) {
  var n;
  if (!(t instanceof G))
    return;
  const e = t.walk();
  return typeof (e == null ? void 0 : e.data) == "object" ? (n = e.data) == null ? void 0 : n.data : e.data;
}
async function In(t, e) {
  const { abi: n, address: r, args: i, functionName: s, ...o } = e, a = Bn({
    abi: n,
    args: i,
    functionName: s
  });
  try {
    const { data: c } = await ne(t, Js, "call")({
      ...o,
      data: a,
      to: r
    });
    return Vi({
      abi: n,
      args: i,
      functionName: s,
      data: c || "0x"
    });
  } catch (c) {
    throw Ii(c, {
      abi: n,
      address: r,
      args: i,
      docsPath: "/docs/contract/readContract",
      functionName: s
    });
  }
}
async function N6(t, e) {
  const { abi: n, address: r, args: i, dataSuffix: s, functionName: o, ...a } = e, c = a.account ? pt(a.account) : t.account, u = Bn({ abi: n, args: i, functionName: o });
  try {
    const { data: f } = await ne(t, Js, "call")({
      batch: !1,
      data: `${u}${s ? s.replace("0x", "") : ""}`,
      to: r,
      ...a,
      account: c
    }), l = Vi({
      abi: n,
      args: i,
      functionName: o,
      data: f || "0x"
    }), d = n.filter((y) => "name" in y && y.name === e.functionName);
    return {
      result: l,
      request: {
        abi: d,
        address: r,
        args: i,
        dataSuffix: s,
        functionName: o,
        ...a,
        account: c
      }
    };
  } catch (f) {
    throw Ii(f, {
      abi: n,
      address: r,
      args: i,
      docsPath: "/docs/contract/simulateContract",
      functionName: o,
      sender: c == null ? void 0 : c.address
    });
  }
}
const Cc = /* @__PURE__ */ new Map(), jh = /* @__PURE__ */ new Map();
let R6 = 0;
function Yn(t, e, n) {
  const r = ++R6, i = () => Cc.get(t) || [], s = () => {
    const f = i();
    Cc.set(t, f.filter((l) => l.id !== r));
  }, o = () => {
    const f = jh.get(t);
    i().length === 1 && f && f(), s();
  }, a = i();
  if (Cc.set(t, [
    ...a,
    { id: r, fns: e }
  ]), a && a.length > 0)
    return o;
  const c = {};
  for (const f in e)
    c[f] = (...l) => {
      var y, w;
      const d = i();
      if (d.length !== 0)
        for (const h of d)
          (w = (y = h.fns)[f]) == null || w.call(y, ...l);
    };
  const u = n(c);
  return typeof u == "function" && jh.set(t, u), o;
}
async function Uu(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Xs(t, { emitOnBegin: e, initialWaitTime: n, interval: r }) {
  let i = !0;
  const s = () => i = !1;
  return (async () => {
    let a;
    e && (a = await t({ unpoll: s }));
    const c = await (n == null ? void 0 : n(a)) ?? r;
    await Uu(c);
    const u = async () => {
      i && (await t({ unpoll: s }), await Uu(r), u());
    };
    u();
  })(), s;
}
const O6 = /* @__PURE__ */ new Map(), C6 = /* @__PURE__ */ new Map();
function k6(t) {
  const e = (i, s) => ({
    clear: () => s.delete(i),
    get: () => s.get(i),
    set: (o) => s.set(i, o)
  }), n = e(t, O6), r = e(t, C6);
  return {
    clear: () => {
      n.clear(), r.clear();
    },
    promise: n,
    response: r
  };
}
async function L6(t, { cacheKey: e, cacheTime: n = Number.POSITIVE_INFINITY }) {
  const r = k6(e), i = r.response.get();
  if (i && n > 0 && (/* @__PURE__ */ new Date()).getTime() - i.created.getTime() < n)
    return i.data;
  let s = r.promise.get();
  s || (s = t(), r.promise.set(s));
  try {
    const o = await s;
    return r.response.set({ created: /* @__PURE__ */ new Date(), data: o }), o;
  } finally {
    r.promise.clear();
  }
}
const M6 = (t) => `blockNumber.${t}`;
async function Qs(t, { cacheTime: e = t.cacheTime } = {}) {
  const n = await L6(() => t.request({
    method: "eth_blockNumber"
  }), { cacheKey: M6(t.uid), cacheTime: e });
  return BigInt(n);
}
async function Ba(t, { filter: e }) {
  const n = "strict" in e && e.strict, r = await e.request({
    method: "eth_getFilterChanges",
    params: [e.id]
  });
  if (typeof r[0] == "string")
    return r;
  const i = r.map((s) => Kn(s));
  return !("abi" in e) || !e.abi ? i : Zf({
    abi: e.abi,
    logs: i,
    strict: n
  });
}
async function Ta(t, { filter: e }) {
  return e.request({
    method: "eth_uninstallFilter",
    params: [e.id]
  });
}
function F6(t, e) {
  const { abi: n, address: r, args: i, batch: s = !0, eventName: o, fromBlock: a, onError: c, onLogs: u, poll: f, pollingInterval: l = t.pollingInterval, strict: d } = e;
  return (typeof f < "u" ? f : typeof a == "bigint" ? !0 : !(t.transport.type === "webSocket" || t.transport.type === "fallback" && t.transport.transports[0].config.type === "webSocket")) ? (() => {
    const g = d ?? !1, b = Fe([
      "watchContractEvent",
      r,
      i,
      s,
      t.uid,
      o,
      l,
      g,
      a
    ]);
    return Yn(b, { onLogs: u, onError: c }, (E) => {
      let S;
      a !== void 0 && (S = a - 1n);
      let N, O = !1;
      const C = Xs(async () => {
        var L;
        if (!O) {
          try {
            N = await ne(t, Sy, "createContractEventFilter")({
              abi: n,
              address: r,
              args: i,
              eventName: o,
              strict: g,
              fromBlock: a
            });
          } catch {
          }
          O = !0;
          return;
        }
        try {
          let p;
          if (N)
            p = await ne(t, Ba, "getFilterChanges")({ filter: N });
          else {
            const x = await ne(t, Qs, "getBlockNumber")({});
            S && S < x ? p = await ne(t, _y, "getContractEvents")({
              abi: n,
              address: r,
              args: i,
              eventName: o,
              fromBlock: S + 1n,
              toBlock: x,
              strict: g
            }) : p = [], S = x;
          }
          if (p.length === 0)
            return;
          if (s)
            E.onLogs(p);
          else
            for (const x of p)
              E.onLogs([x]);
        } catch (p) {
          N && p instanceof Tr && (O = !1), (L = E.onError) == null || L.call(E, p);
        }
      }, {
        emitOnBegin: !0,
        interval: l
      });
      return async () => {
        N && await ne(t, Ta, "uninstallFilter")({ filter: N }), C();
      };
    });
  })() : (() => {
    const g = d ?? !1, b = Fe([
      "watchContractEvent",
      r,
      i,
      s,
      t.uid,
      o,
      l,
      g
    ]);
    let E = !0, S = () => E = !1;
    return Yn(b, { onLogs: u, onError: c }, (N) => ((async () => {
      try {
        const O = (() => {
          if (t.transport.type === "fallback") {
            const p = t.transport.transports.find((x) => x.config.type === "webSocket");
            return p ? p.value : t.transport;
          }
          return t.transport;
        })(), C = o ? Ys({
          abi: n,
          eventName: o,
          args: i
        }) : [], { unsubscribe: L } = await O.subscribe({
          params: ["logs", { address: r, topics: C }],
          onData(p) {
            var _;
            if (!E)
              return;
            const x = p.result;
            try {
              const { eventName: P, args: I } = Kf({
                abi: n,
                data: x.data,
                topics: x.topics,
                strict: d
              }), A = Kn(x, {
                args: I,
                eventName: P
              });
              N.onLogs([A]);
            } catch (P) {
              let I, A;
              if (P instanceof Ts || P instanceof va) {
                if (d)
                  return;
                I = P.abiItem.name, A = (_ = P.abiItem.inputs) == null ? void 0 : _.some((m) => !("name" in m && m.name));
              }
              const R = Kn(x, {
                args: A ? [] : {},
                eventName: I
              });
              N.onLogs([R]);
            }
          },
          onError(p) {
            var x;
            (x = N.onError) == null || x.call(N, p);
          }
        });
        S = L, E || S();
      } catch (O) {
        c == null || c(O);
      }
    })(), () => S()));
  })();
}
function U6(t, { docsPath: e, ...n }) {
  const r = (() => {
    const i = Df(t, n);
    return i instanceof ba ? t : i;
  })();
  return new DS(r, {
    docsPath: e,
    ...n
  });
}
async function Jf(t, { serializedTransaction: e }) {
  return t.request({
    method: "eth_sendRawTransaction",
    params: [e]
  }, { retryCount: 0 });
}
const Hh = new ma(128);
async function Xf(t, e) {
  var b, E, S, N;
  const { account: n = t.account, chain: r = t.chain, accessList: i, authorizationList: s, blobs: o, data: a, gas: c, gasPrice: u, maxFeePerBlobGas: f, maxFeePerGas: l, maxPriorityFeePerGas: d, nonce: y, value: w, ...h } = e;
  if (typeof n > "u")
    throw new Ks({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const g = n ? pt(n) : null;
  try {
    Vs(e);
    const O = await (async () => {
      if (e.to)
        return e.to;
      if (s && s.length > 0)
        return await Yg({
          authorization: s[0]
        }).catch(() => {
          throw new G("`to` is required. Could not infer from `authorizationList`.");
        });
    })();
    if ((g == null ? void 0 : g.type) === "json-rpc" || g === null) {
      let C;
      r !== null && (C = await ne(t, Ws, "getChainId")({}), Vg({
        currentChainId: C,
        chain: r
      }));
      const L = (S = (E = (b = t.chain) == null ? void 0 : b.formatters) == null ? void 0 : E.transactionRequest) == null ? void 0 : S.format, x = (L || ga)({
        // Pick out extra data that might exist on the chain's transaction request type.
        ...jf(h, { format: L }),
        accessList: i,
        authorizationList: s,
        blobs: o,
        chainId: C,
        data: a,
        from: g == null ? void 0 : g.address,
        gas: c,
        gasPrice: u,
        maxFeePerBlobGas: f,
        maxFeePerGas: l,
        maxPriorityFeePerGas: d,
        nonce: y,
        to: O,
        value: w
      }), _ = Hh.get(t.uid) ? "wallet_sendTransaction" : "eth_sendTransaction";
      try {
        return await t.request({
          method: _,
          params: [x]
        }, { retryCount: 0 });
      } catch (P) {
        const I = P;
        if (I.name === "InvalidInputRpcError" || I.name === "InvalidParamsRpcError" || I.name === "MethodNotFoundRpcError" || I.name === "MethodNotSupportedRpcError")
          return await t.request({
            method: "wallet_sendTransaction",
            params: [x]
          }, { retryCount: 0 }).then((A) => (Hh.set(t.uid, !0), A));
        throw I;
      }
    }
    if ((g == null ? void 0 : g.type) === "local") {
      const C = await ne(t, wa, "prepareTransactionRequest")({
        account: g,
        accessList: i,
        authorizationList: s,
        blobs: o,
        chain: r,
        data: a,
        gas: c,
        gasPrice: u,
        maxFeePerBlobGas: f,
        maxFeePerGas: l,
        maxPriorityFeePerGas: d,
        nonce: y,
        nonceManager: g.nonceManager,
        parameters: [...ty, "sidecars"],
        value: w,
        ...h,
        to: O
      }), L = (N = r == null ? void 0 : r.serializers) == null ? void 0 : N.transaction, p = await g.signTransaction(C, {
        serializer: L
      });
      return await ne(t, Jf, "sendRawTransaction")({
        serializedTransaction: p
      });
    }
    throw (g == null ? void 0 : g.type) === "smart" ? new Tc({
      metaMessages: [
        "Consider using the `sendUserOperation` Action instead."
      ],
      docsPath: "/docs/actions/bundler/sendUserOperation",
      type: "smart"
    }) : new Tc({
      docsPath: "/docs/actions/wallet/sendTransaction",
      type: g == null ? void 0 : g.type
    });
  } catch (O) {
    throw O instanceof Tc ? O : U6(O, {
      ...e,
      account: g,
      chain: e.chain || void 0
    });
  }
}
async function D6(t, e) {
  const { abi: n, account: r = t.account, address: i, args: s, dataSuffix: o, functionName: a, ...c } = e;
  if (typeof r > "u")
    throw new Ks({
      docsPath: "/docs/contract/writeContract"
    });
  const u = r ? pt(r) : null, f = Bn({
    abi: n,
    args: s,
    functionName: a
  });
  try {
    return await ne(t, Xf, "sendTransaction")({
      data: `${f}${o ? o.replace("0x", "") : ""}`,
      to: i,
      account: u,
      ...c
    });
  } catch (l) {
    throw Ii(l, {
      abi: n,
      address: i,
      args: s,
      docsPath: "/docs/contract/writeContract",
      functionName: a,
      sender: u == null ? void 0 : u.address
    });
  }
}
class j6 extends G {
  constructor({ address: e }) {
    super(`No EIP-712 domain found on contract "${e}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${e}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
}
async function H6(t, e) {
  const { address: n, factory: r, factoryData: i } = e;
  try {
    const [s, o, a, c, u, f, l] = await ne(t, In, "readContract")({
      abi: G6,
      address: n,
      functionName: "eip712Domain",
      factory: r,
      factoryData: i
    });
    return {
      domain: {
        name: o,
        version: a,
        chainId: Number(c),
        verifyingContract: u,
        salt: f
      },
      extensions: l,
      fields: s
    };
  } catch (s) {
    const o = s;
    throw o.name === "ContractFunctionExecutionError" && o.cause.name === "ContractFunctionZeroDataError" ? new j6({ address: n }) : o;
  }
}
const G6 = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  }
];
async function q6(t, { chain: e }) {
  const { id: n, name: r, nativeCurrency: i, rpcUrls: s, blockExplorers: o } = e;
  await t.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: re(n),
        chainName: r,
        nativeCurrency: i,
        rpcUrls: s.default.http,
        blockExplorerUrls: o ? Object.values(o).map(({ url: a }) => a) : void 0
      }
    ]
  }, { dedupe: !0, retryCount: 0 });
}
const Du = 256;
let Eo = Du, xo;
function By(t = 11) {
  if (!xo || Eo + t > Du * 2) {
    xo = "", Eo = 0;
    for (let e = 0; e < Du; e++)
      xo += (256 + Math.random() * 256 | 0).toString(16).substring(1);
  }
  return xo.substring(Eo, Eo++ + t);
}
function Ty(t) {
  const { batch: e, cacheTime: n = t.pollingInterval ?? 4e3, ccipRead: r, key: i = "base", name: s = "Base Client", pollingInterval: o = 4e3, type: a = "base" } = t, c = t.chain, u = t.account ? pt(t.account) : void 0, { config: f, request: l, value: d } = t.transport({
    chain: c,
    pollingInterval: o
  }), y = { ...f, ...d }, w = {
    account: u,
    batch: e,
    cacheTime: n,
    ccipRead: r,
    chain: c,
    key: i,
    name: s,
    pollingInterval: o,
    request: l,
    transport: y,
    type: a,
    uid: By()
  };
  function h(g) {
    return (b) => {
      const E = b(g);
      for (const N in w)
        delete E[N];
      const S = { ...g, ...E };
      return Object.assign(S, { extend: h(S) });
    };
  }
  return Object.assign(w, { extend: h(w) });
}
const vo = /* @__PURE__ */ new ma(8192);
function z6(t, { enabled: e = !0, id: n }) {
  if (!e || !n)
    return t();
  if (vo.get(n))
    return vo.get(n);
  const r = t().finally(() => vo.delete(n));
  return vo.set(n, r), r;
}
function ju(t, { delay: e = 100, retryCount: n = 2, shouldRetry: r = () => !0 } = {}) {
  return new Promise((i, s) => {
    const o = async ({ count: a = 0 } = {}) => {
      const c = async ({ error: u }) => {
        const f = typeof e == "function" ? e({ count: a, error: u }) : e;
        f && await Uu(f), o({ count: a + 1 });
      };
      try {
        const u = await t();
        i(u);
      } catch (u) {
        if (a < n && await r({ count: a, error: u }))
          return c({ error: u });
        s(u);
      }
    };
    o();
  });
}
function V6(t, e = {}) {
  return async (n, r = {}) => {
    const { dedupe: i = !1, retryDelay: s = 150, retryCount: o = 3, uid: a } = {
      ...e,
      ...r
    }, c = i ? Ve(Si(`${a}.${Fe(n)}`)) : void 0;
    return z6(() => ju(async () => {
      try {
        return await t(n);
      } catch (u) {
        const f = u;
        switch (f.code) {
          case gs.code:
            throw new gs(f);
          case ys.code:
            throw new ys(f);
          case bs.code:
            throw new bs(f, { method: n.method });
          case ms.code:
            throw new ms(f);
          case Br.code:
            throw new Br(f);
          case Tr.code:
            throw new Tr(f);
          case ws.code:
            throw new ws(f);
          case Es.code:
            throw new Es(f);
          case xs.code:
            throw new xs(f);
          case vs.code:
            throw new vs(f, {
              method: n.method
            });
          case Ai.code:
            throw new Ai(f);
          case Ss.code:
            throw new Ss(f);
          case Qr.code:
            throw new Qr(f);
          case _s.code:
            throw new _s(f);
          case As.code:
            throw new As(f);
          case Is.code:
            throw new Is(f);
          case Ps.code:
            throw new Ps(f);
          case Bs.code:
            throw new Bs(f);
          case 5e3:
            throw new Qr(f);
          default:
            throw u instanceof G ? u : new U_(f);
        }
      }
    }, {
      delay: ({ count: u, error: f }) => {
        var l;
        if (f && f instanceof Er) {
          const d = (l = f == null ? void 0 : f.headers) == null ? void 0 : l.get("Retry-After");
          if (d != null && d.match(/\d/))
            return Number.parseInt(d) * 1e3;
        }
        return ~~(1 << u) * s;
      },
      retryCount: o,
      shouldRetry: ({ error: u }) => W6(u)
    }), { enabled: i, id: c });
  };
}
function W6(t) {
  return "code" in t && typeof t.code == "number" ? t.code === -1 || t.code === Ai.code || t.code === Br.code : t instanceof Er && t.status ? t.status === 403 || t.status === 408 || t.status === 413 || t.status === 429 || t.status === 500 || t.status === 502 || t.status === 503 || t.status === 504 : !0;
}
function $y({ key: t, name: e, request: n, retryCount: r = 3, retryDelay: i = 150, timeout: s, type: o }, a) {
  const c = By();
  return {
    config: {
      key: t,
      name: e,
      request: n,
      retryCount: r,
      retryDelay: i,
      timeout: s,
      type: o
    },
    request: V6(n, { retryCount: r, retryDelay: i, uid: c }),
    value: a
  };
}
function ZT(t, e = {}) {
  const { key: n = "custom", name: r = "Custom Provider", retryDelay: i } = e;
  return ({ retryCount: s }) => $y({
    key: n,
    name: r,
    request: t.request.bind(t),
    retryCount: e.retryCount ?? s,
    retryDelay: i,
    type: "custom"
  });
}
class K6 extends G {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro",
      name: "UrlRequiredError"
    });
  }
}
function Z6(t, { errorInstance: e = new Error("timed out"), timeout: n, signal: r }) {
  return new Promise((i, s) => {
    (async () => {
      let o;
      try {
        const a = new AbortController();
        n > 0 && (o = setTimeout(() => {
          r ? a.abort() : s(e);
        }, n)), i(await t({ signal: (a == null ? void 0 : a.signal) || null }));
      } catch (a) {
        (a == null ? void 0 : a.name) === "AbortError" && s(e), s(a);
      } finally {
        clearTimeout(o);
      }
    })();
  });
}
function Y6() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
const Gh = /* @__PURE__ */ Y6();
function J6(t, e = {}) {
  return {
    async request(n) {
      var l;
      const { body: r, onRequest: i = e.onRequest, onResponse: s = e.onResponse, timeout: o = e.timeout ?? 1e4 } = n, a = {
        ...e.fetchOptions ?? {},
        ...n.fetchOptions ?? {}
      }, { headers: c, method: u, signal: f } = a;
      try {
        const d = await Z6(async ({ signal: w }) => {
          const h = {
            ...a,
            body: Array.isArray(r) ? Fe(r.map((S) => ({
              jsonrpc: "2.0",
              id: S.id ?? Gh.take(),
              ...S
            }))) : Fe({
              jsonrpc: "2.0",
              id: r.id ?? Gh.take(),
              ...r
            }),
            headers: {
              "Content-Type": "application/json",
              ...c
            },
            method: u || "POST",
            signal: f || (o > 0 ? w : null)
          }, g = new Request(t, h), b = await (i == null ? void 0 : i(g, h)) ?? { ...h, url: t };
          return await fetch(b.url ?? t, b);
        }, {
          errorInstance: new Ph({ body: r, url: t }),
          timeout: o,
          signal: !0
        });
        s && await s(d);
        let y;
        if ((l = d.headers.get("Content-Type")) != null && l.startsWith("application/json"))
          y = await d.json();
        else {
          y = await d.text();
          try {
            y = JSON.parse(y || "{}");
          } catch (w) {
            if (d.ok)
              throw w;
            y = { error: y };
          }
        }
        if (!d.ok)
          throw new Er({
            body: r,
            details: Fe(y.error) || d.statusText,
            headers: d.headers,
            status: d.status,
            url: t
          });
        return y;
      } catch (d) {
        throw d instanceof Er || d instanceof Ph ? d : new Er({
          body: r,
          cause: d,
          url: t
        });
      }
    }
  };
}
function YT(t, e = {}) {
  const { batch: n, fetchOptions: r, key: i = "http", name: s = "HTTP JSON-RPC", onFetchRequest: o, onFetchResponse: a, retryDelay: c } = e;
  return ({ chain: u, retryCount: f, timeout: l }) => {
    const { batchSize: d = 1e3, wait: y = 0 } = typeof n == "object" ? n : {}, w = e.retryCount ?? f, h = l ?? e.timeout ?? 1e4, g = t || (u == null ? void 0 : u.rpcUrls.default.http[0]);
    if (!g)
      throw new K6();
    const b = J6(g, {
      fetchOptions: r,
      onRequest: o,
      onResponse: a,
      timeout: h
    });
    return $y({
      key: i,
      name: s,
      async request({ method: E, params: S }) {
        const N = { method: E, params: S }, { schedule: O } = Py({
          id: g,
          wait: y,
          shouldSplitBatch(x) {
            return x.length > d;
          },
          fn: (x) => b.request({
            body: x
          }),
          sort: (x, _) => x.id - _.id
        }), C = async (x) => n ? O(x) : [
          await b.request({
            body: x
          })
        ], [{ error: L, result: p }] = await C(N);
        if (L)
          throw new Jg({
            body: N,
            error: L,
            url: g
          });
        return p;
      },
      retryCount: w,
      retryDelay: c,
      timeout: h,
      type: "http"
    }, {
      fetchOptions: r,
      url: g
    });
  };
}
function Qf(t, e) {
  var r, i, s, o, a, c;
  if (!(t instanceof G))
    return !1;
  const n = t.walk((u) => u instanceof Mu);
  return n instanceof Mu ? !!(((r = n.data) == null ? void 0 : r.errorName) === "ResolverNotFound" || ((i = n.data) == null ? void 0 : i.errorName) === "ResolverWildcardNotSupported" || ((s = n.data) == null ? void 0 : s.errorName) === "ResolverNotContract" || ((o = n.data) == null ? void 0 : o.errorName) === "ResolverError" || ((a = n.data) == null ? void 0 : a.errorName) === "HttpError" || (c = n.reason) != null && c.includes("Wildcard on non-extended resolvers is not supported") || e === "reverse" && n.reason === ny[50]) : !1;
}
function Ny(t) {
  if (t.length !== 66 || t.indexOf("[") !== 0 || t.indexOf("]") !== 65)
    return null;
  const e = `0x${t.slice(1, 65)}`;
  return Mt(e) ? e : null;
}
function ko(t) {
  let e = new Uint8Array(32).fill(0);
  if (!t)
    return Ue(e);
  const n = t.split(".");
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const i = Ny(n[r]), s = i ? Gi(i) : Ve(wr(n[r]), "bytes");
    e = Ve(en([e, s]), "bytes");
  }
  return Ue(e);
}
function X6(t) {
  return `[${t.slice(2)}]`;
}
function Q6(t) {
  const e = new Uint8Array(32).fill(0);
  return t ? Ny(t) || Ve(wr(t)) : Ue(e);
}
function $a(t) {
  const e = t.replace(/^\.|\.$/gm, "");
  if (e.length === 0)
    return new Uint8Array(1);
  const n = new Uint8Array(wr(e).byteLength + 2);
  let r = 0;
  const i = e.split(".");
  for (let s = 0; s < i.length; s++) {
    let o = wr(i[s]);
    o.byteLength > 255 && (o = wr(X6(Q6(i[s])))), n[r] = o.length, n.set(o, r + 1), r += o.length + 1;
  }
  return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n;
}
async function eI(t, { blockNumber: e, blockTag: n, coinType: r, name: i, gatewayUrls: s, strict: o, universalResolverAddress: a }) {
  let c = a;
  if (!c) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = qi({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = Bn({
      abi: Uh,
      functionName: "addr",
      ...r != null ? { args: [ko(i), BigInt(r)] } : { args: [ko(i)] }
    }), f = {
      address: c,
      abi: Iy,
      functionName: "resolve",
      args: [Qt($a(i)), u],
      blockNumber: e,
      blockTag: n
    }, l = ne(t, In, "readContract"), d = s ? await l({
      ...f,
      args: [...f.args, s]
    }) : await l(f);
    if (d[0] === "0x")
      return null;
    const y = Vi({
      abi: Uh,
      args: r != null ? [ko(i), BigInt(r)] : void 0,
      functionName: "addr",
      data: d[0]
    });
    return y === "0x" || mr(y) === "0x00" ? null : y;
  } catch (u) {
    if (o)
      throw u;
    if (Qf(u, "resolve"))
      return null;
    throw u;
  }
}
class tI extends G {
  constructor({ data: e }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(e)}`
      ],
      name: "EnsAvatarInvalidMetadataError"
    });
  }
}
class rs extends G {
  constructor({ reason: e }) {
    super(`ENS NFT avatar URI is invalid. ${e}`, {
      name: "EnsAvatarInvalidNftUriError"
    });
  }
}
class el extends G {
  constructor({ uri: e }) {
    super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
  }
}
class nI extends G {
  constructor({ namespace: e }) {
    super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
  }
}
const rI = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/, iI = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/, sI = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/, oI = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function aI(t) {
  try {
    const e = await fetch(t, { method: "HEAD" });
    if (e.status === 200) {
      const n = e.headers.get("content-type");
      return n == null ? void 0 : n.startsWith("image/");
    }
    return !1;
  } catch (e) {
    return typeof e == "object" && typeof e.response < "u" || !globalThis.hasOwnProperty("Image") ? !1 : new Promise((n) => {
      const r = new Image();
      r.onload = () => {
        n(!0);
      }, r.onerror = () => {
        n(!1);
      }, r.src = t;
    });
  }
}
function qh(t, e) {
  return t ? t.endsWith("/") ? t.slice(0, -1) : t : e;
}
function Ry({ uri: t, gatewayUrls: e }) {
  const n = sI.test(t);
  if (n)
    return { uri: t, isOnChain: !0, isEncoded: n };
  const r = qh(e == null ? void 0 : e.ipfs, "https://ipfs.io"), i = qh(e == null ? void 0 : e.arweave, "https://arweave.net"), s = t.match(rI), { protocol: o, subpath: a, target: c, subtarget: u = "" } = (s == null ? void 0 : s.groups) || {}, f = o === "ipns:/" || a === "ipns/", l = o === "ipfs:/" || a === "ipfs/" || iI.test(t);
  if (t.startsWith("http") && !f && !l) {
    let y = t;
    return e != null && e.arweave && (y = t.replace(/https:\/\/arweave.net/g, e == null ? void 0 : e.arweave)), { uri: y, isOnChain: !1, isEncoded: !1 };
  }
  if ((f || l) && c)
    return {
      uri: `${r}/${f ? "ipns" : "ipfs"}/${c}${u}`,
      isOnChain: !1,
      isEncoded: !1
    };
  if (o === "ar:/" && c)
    return {
      uri: `${i}/${c}${u || ""}`,
      isOnChain: !1,
      isEncoded: !1
    };
  let d = t.replace(oI, "");
  if (d.startsWith("<svg") && (d = `data:image/svg+xml;base64,${btoa(d)}`), d.startsWith("data:") || d.startsWith("{"))
    return {
      uri: d,
      isOnChain: !0,
      isEncoded: !1
    };
  throw new el({ uri: t });
}
function Oy(t) {
  if (typeof t != "object" || !("image" in t) && !("image_url" in t) && !("image_data" in t))
    throw new tI({ data: t });
  return t.image || t.image_url || t.image_data;
}
async function cI({ gatewayUrls: t, uri: e }) {
  try {
    const n = await fetch(e).then((i) => i.json());
    return await tl({
      gatewayUrls: t,
      uri: Oy(n)
    });
  } catch {
    throw new el({ uri: e });
  }
}
async function tl({ gatewayUrls: t, uri: e }) {
  const { uri: n, isOnChain: r } = Ry({ uri: e, gatewayUrls: t });
  if (r || await aI(n))
    return n;
  throw new el({ uri: e });
}
function uI(t) {
  let e = t;
  e.startsWith("did:nft:") && (e = e.replace("did:nft:", "").replace(/_/g, "/"));
  const [n, r, i] = e.split("/"), [s, o] = n.split(":"), [a, c] = r.split(":");
  if (!s || s.toLowerCase() !== "eip155")
    throw new rs({ reason: "Only EIP-155 supported" });
  if (!o)
    throw new rs({ reason: "Chain ID not found" });
  if (!c)
    throw new rs({
      reason: "Contract address not found"
    });
  if (!i)
    throw new rs({ reason: "Token ID not found" });
  if (!a)
    throw new rs({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(o),
    namespace: a.toLowerCase(),
    contractAddress: c,
    tokenID: i
  };
}
async function fI(t, { nft: e }) {
  if (e.namespace === "erc721")
    return In(t, {
      address: e.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(e.tokenID)]
    });
  if (e.namespace === "erc1155")
    return In(t, {
      address: e.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(e.tokenID)]
    });
  throw new nI({ namespace: e.namespace });
}
async function lI(t, { gatewayUrls: e, record: n }) {
  return /eip155:/i.test(n) ? dI(t, { gatewayUrls: e, record: n }) : tl({ uri: n, gatewayUrls: e });
}
async function dI(t, { gatewayUrls: e, record: n }) {
  const r = uI(n), i = await fI(t, { nft: r }), { uri: s, isOnChain: o, isEncoded: a } = Ry({ uri: i, gatewayUrls: e });
  if (o && (s.includes("data:application/json;base64,") || s.startsWith("{"))) {
    const u = a ? (
      // if it is encoded, decode it
      atob(s.replace("data:application/json;base64,", ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      s
    ), f = JSON.parse(u);
    return tl({ uri: Oy(f), gatewayUrls: e });
  }
  let c = r.tokenID;
  return r.namespace === "erc1155" && (c = c.replace("0x", "").padStart(64, "0")), cI({
    gatewayUrls: e,
    uri: s.replace(/(?:0x)?{id}/, c)
  });
}
async function Cy(t, { blockNumber: e, blockTag: n, name: r, key: i, gatewayUrls: s, strict: o, universalResolverAddress: a }) {
  let c = a;
  if (!c) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    c = qi({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  try {
    const u = {
      address: c,
      abi: Iy,
      functionName: "resolve",
      args: [
        Qt($a(r)),
        Bn({
          abi: Fh,
          functionName: "text",
          args: [ko(r), i]
        })
      ],
      blockNumber: e,
      blockTag: n
    }, f = ne(t, In, "readContract"), l = s ? await f({
      ...u,
      args: [...u.args, s]
    }) : await f(u);
    if (l[0] === "0x")
      return null;
    const d = Vi({
      abi: Fh,
      functionName: "text",
      data: l[0]
    });
    return d === "" ? null : d;
  } catch (u) {
    if (o)
      throw u;
    if (Qf(u, "resolve"))
      return null;
    throw u;
  }
}
async function hI(t, { blockNumber: e, blockTag: n, assetGatewayUrls: r, name: i, gatewayUrls: s, strict: o, universalResolverAddress: a }) {
  const c = await ne(t, Cy, "getEnsText")({
    blockNumber: e,
    blockTag: n,
    key: "avatar",
    name: i,
    universalResolverAddress: a,
    gatewayUrls: s,
    strict: o
  });
  if (!c)
    return null;
  try {
    return await lI(t, {
      record: c,
      gatewayUrls: r
    });
  } catch {
    return null;
  }
}
async function pI(t, { address: e, blockNumber: n, blockTag: r, gatewayUrls: i, strict: s, universalResolverAddress: o }) {
  let a = o;
  if (!a) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    a = qi({
      blockNumber: n,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  const c = `${e.toLowerCase().substring(2)}.addr.reverse`;
  try {
    const u = {
      address: a,
      abi: x6,
      functionName: "reverse",
      args: [Qt($a(c))],
      blockNumber: n,
      blockTag: r
    }, f = ne(t, In, "readContract"), [l, d] = i ? await f({
      ...u,
      args: [...u.args, i]
    }) : await f(u);
    return e.toLowerCase() !== d.toLowerCase() ? null : l;
  } catch (u) {
    if (s)
      throw u;
    if (Qf(u, "reverse"))
      return null;
    throw u;
  }
}
async function gI(t, { blockNumber: e, blockTag: n, name: r, universalResolverAddress: i }) {
  let s = i;
  if (!s) {
    if (!t.chain)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    s = qi({
      blockNumber: e,
      chain: t.chain,
      contract: "ensUniversalResolver"
    });
  }
  const [o] = await ne(t, In, "readContract")({
    address: s,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [{ type: "address" }, { type: "bytes32" }],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [Qt($a(r))],
    blockNumber: e,
    blockTag: n
  });
  return o;
}
async function yI(t) {
  const e = Aa(t, {
    method: "eth_newBlockFilter"
  }), n = await t.request({
    method: "eth_newBlockFilter"
  });
  return { id: n, request: e(n), type: "block" };
}
async function ky(t, { address: e, args: n, event: r, events: i, fromBlock: s, strict: o, toBlock: a } = {}) {
  const c = i ?? (r ? [r] : void 0), u = Aa(t, {
    method: "eth_newFilter"
  });
  let f = [];
  c && (f = [c.flatMap((y) => Ys({
    abi: [y],
    eventName: y.name,
    args: n
  }))], r && (f = f[0]));
  const l = await t.request({
    method: "eth_newFilter",
    params: [
      {
        address: e,
        fromBlock: typeof s == "bigint" ? re(s) : s,
        toBlock: typeof a == "bigint" ? re(a) : a,
        ...f.length ? { topics: f } : {}
      }
    ]
  });
  return {
    abi: c,
    args: n,
    eventName: r ? r.name : void 0,
    fromBlock: s,
    id: l,
    request: u(l),
    strict: !!o,
    toBlock: a,
    type: "event"
  };
}
async function Ly(t) {
  const e = Aa(t, {
    method: "eth_newPendingTransactionFilter"
  }), n = await t.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: n, request: e(n), type: "transaction" };
}
async function bI(t) {
  const e = await t.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(e);
}
async function mI(t, { blockHash: e, blockNumber: n, blockTag: r = "latest" } = {}) {
  const i = n !== void 0 ? re(n) : void 0;
  let s;
  return e ? s = await t.request({
    method: "eth_getBlockTransactionCountByHash",
    params: [e]
  }, { dedupe: !0 }) : s = await t.request({
    method: "eth_getBlockTransactionCountByNumber",
    params: [i || r]
  }, { dedupe: !!i }), _n(s);
}
async function zh(t, { address: e, blockNumber: n, blockTag: r = "latest" }) {
  const i = n !== void 0 ? re(n) : void 0, s = await t.request({
    method: "eth_getCode",
    params: [e, i || r]
  }, { dedupe: !!i });
  if (s !== "0x")
    return s;
}
function wI(t) {
  var e;
  return {
    baseFeePerGas: t.baseFeePerGas.map((n) => BigInt(n)),
    gasUsedRatio: t.gasUsedRatio,
    oldestBlock: BigInt(t.oldestBlock),
    reward: (e = t.reward) == null ? void 0 : e.map((n) => n.map((r) => BigInt(r)))
  };
}
async function EI(t, { blockCount: e, blockNumber: n, blockTag: r = "latest", rewardPercentiles: i }) {
  const s = n ? re(n) : void 0, o = await t.request({
    method: "eth_feeHistory",
    params: [
      re(e),
      s || r,
      i
    ]
  }, { dedupe: !!s });
  return wI(o);
}
async function xI(t, { filter: e }) {
  const n = e.strict ?? !1, i = (await e.request({
    method: "eth_getFilterLogs",
    params: [e.id]
  })).map((s) => Kn(s));
  return e.abi ? Zf({
    abi: e.abi,
    logs: i,
    strict: n
  }) : i;
}
class vI extends G {
  constructor({ callbackSelector: e, cause: n, data: r, extraData: i, sender: s, urls: o }) {
    var a;
    super(n.shortMessage || "An error occurred while fetching for an offchain result.", {
      cause: n,
      metaMessages: [
        ...n.metaMessages || [],
        (a = n.metaMessages) != null && a.length ? "" : [],
        "Offchain Gateway Call:",
        o && [
          "  Gateway URL(s):",
          ...o.map((c) => `    ${zs(c)}`)
        ],
        `  Sender: ${s}`,
        `  Data: ${r}`,
        `  Callback selector: ${e}`,
        `  Extra data: ${i}`
      ].flat(),
      name: "OffchainLookupError"
    });
  }
}
class SI extends G {
  constructor({ result: e, url: n }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", {
      metaMessages: [
        `Gateway URL: ${zs(n)}`,
        `Response: ${Fe(e)}`
      ],
      name: "OffchainLookupResponseMalformedError"
    });
  }
}
class _I extends G {
  constructor({ sender: e, to: n }) {
    super("Reverted sender address does not match target contract address (`to`).", {
      metaMessages: [
        `Contract address: ${n}`,
        `OffchainLookup sender address: ${e}`
      ],
      name: "OffchainLookupSenderMismatchError"
    });
  }
}
const AI = "0x556f1830", My = {
  name: "OffchainLookup",
  type: "error",
  inputs: [
    {
      name: "sender",
      type: "address"
    },
    {
      name: "urls",
      type: "string[]"
    },
    {
      name: "callData",
      type: "bytes"
    },
    {
      name: "callbackFunction",
      type: "bytes4"
    },
    {
      name: "extraData",
      type: "bytes"
    }
  ]
};
async function II(t, { blockNumber: e, blockTag: n, data: r, to: i }) {
  const { args: s } = wy({
    data: r,
    abi: [My]
  }), [o, a, c, u, f] = s, { ccipRead: l } = t, d = l && typeof (l == null ? void 0 : l.request) == "function" ? l.request : Fy;
  try {
    if (!Ia(i, o))
      throw new _I({ sender: o, to: i });
    const y = await d({ data: c, sender: o, urls: a }), { data: w } = await Js(t, {
      blockNumber: e,
      blockTag: n,
      data: en([
        u,
        Fr([{ type: "bytes" }, { type: "bytes" }], [y, f])
      ]),
      to: i
    });
    return w;
  } catch (y) {
    throw new vI({
      callbackSelector: u,
      cause: y,
      data: r,
      extraData: f,
      sender: o,
      urls: a
    });
  }
}
async function Fy({ data: t, sender: e, urls: n }) {
  var i;
  let r = new Error("An unknown error occurred.");
  for (let s = 0; s < n.length; s++) {
    const o = n[s], a = o.includes("{data}") ? "GET" : "POST", c = a === "POST" ? { data: t, sender: e } : void 0, u = a === "POST" ? { "Content-Type": "application/json" } : {};
    try {
      const f = await fetch(o.replace("{sender}", e).replace("{data}", t), {
        body: JSON.stringify(c),
        headers: u,
        method: a
      });
      let l;
      if ((i = f.headers.get("Content-Type")) != null && i.startsWith("application/json") ? l = (await f.json()).data : l = await f.text(), !f.ok) {
        r = new Er({
          body: c,
          details: l != null && l.error ? Fe(l.error) : f.statusText,
          headers: f.headers,
          status: f.status,
          url: o
        });
        continue;
      }
      if (!Mt(l)) {
        r = new SI({
          result: l,
          url: o
        });
        continue;
      }
      return l;
    } catch (f) {
      r = new Er({
        body: c,
        details: f.message,
        url: o
      });
    }
  }
  throw r;
}
const PI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ccipRequest: Fy,
  offchainLookup: II,
  offchainLookupAbiItem: My,
  offchainLookupSignature: AI
}, Symbol.toStringTag, { value: "Module" })), BI = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/, TI = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
class $I extends G {
  constructor({ type: e }) {
    super(`Struct type "${e}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
}
function NI(t) {
  const { domain: e = {}, message: n, primaryType: r } = t, i = {
    EIP712Domain: qy({ domain: e }),
    ...t.types
  };
  Gy({
    domain: e,
    message: n,
    primaryType: r,
    types: i
  });
  const s = ["0x1901"];
  return e && s.push(RI({
    domain: e,
    types: i
  })), r !== "EIP712Domain" && s.push(Uy({
    data: n,
    primaryType: r,
    types: i
  })), Ve(en(s));
}
function RI({ domain: t, types: e }) {
  return Uy({
    data: t,
    primaryType: "EIP712Domain",
    types: e
  });
}
function Uy({ data: t, primaryType: e, types: n }) {
  const r = Dy({
    data: t,
    primaryType: e,
    types: n
  });
  return Ve(r);
}
function Dy({ data: t, primaryType: e, types: n }) {
  const r = [{ type: "bytes32" }], i = [OI({ primaryType: e, types: n })];
  for (const s of n[e]) {
    const [o, a] = Hy({
      types: n,
      name: s.name,
      type: s.type,
      value: t[s.name]
    });
    r.push(o), i.push(a);
  }
  return Fr(r, i);
}
function OI({ primaryType: t, types: e }) {
  const n = Qt(CI({ primaryType: t, types: e }));
  return Ve(n);
}
function CI({ primaryType: t, types: e }) {
  let n = "";
  const r = jy({ primaryType: t, types: e });
  r.delete(t);
  const i = [t, ...Array.from(r).sort()];
  for (const s of i)
    n += `${s}(${e[s].map(({ name: o, type: a }) => `${a} ${o}`).join(",")})`;
  return n;
}
function jy({ primaryType: t, types: e }, n = /* @__PURE__ */ new Set()) {
  const r = t.match(/^\w*/u), i = r == null ? void 0 : r[0];
  if (n.has(i) || e[i] === void 0)
    return n;
  n.add(i);
  for (const s of e[i])
    jy({ primaryType: s.type, types: e }, n);
  return n;
}
function Hy({ types: t, name: e, type: n, value: r }) {
  if (t[n] !== void 0)
    return [
      { type: "bytes32" },
      Ve(Dy({ data: r, primaryType: n, types: t }))
    ];
  if (n === "bytes")
    return r = `0x${(r.length % 2 ? "0" : "") + r.slice(2)}`, [{ type: "bytes32" }, Ve(r)];
  if (n === "string")
    return [{ type: "bytes32" }, Ve(Qt(r))];
  if (n.lastIndexOf("]") === n.length - 1) {
    const i = n.slice(0, n.lastIndexOf("[")), s = r.map((o) => Hy({
      name: e,
      type: i,
      types: t,
      value: o
    }));
    return [
      { type: "bytes32" },
      Ve(Fr(s.map(([o]) => o), s.map(([, o]) => o)))
    ];
  }
  return [{ type: n }, r];
}
function kI(t) {
  const { domain: e, message: n, primaryType: r, types: i } = t, s = (c, u) => {
    const f = { ...u };
    for (const l of c) {
      const { name: d, type: y } = l;
      y === "address" && (f[d] = f[d].toLowerCase());
    }
    return f;
  }, o = i.EIP712Domain ? e ? s(i.EIP712Domain, e) : {} : {}, a = (() => {
    if (r !== "EIP712Domain")
      return s(i[r], n);
  })();
  return Fe({ domain: o, message: a, primaryType: r, types: i });
}
function Gy(t) {
  const { domain: e, message: n, primaryType: r, types: i } = t, s = (o, a) => {
    for (const c of o) {
      const { name: u, type: f } = c, l = a[u], d = f.match(TI);
      if (d && (typeof l == "number" || typeof l == "bigint")) {
        const [h, g, b] = d;
        re(l, {
          signed: g === "int",
          size: Number.parseInt(b) / 8
        });
      }
      if (f === "address" && typeof l == "string" && !Ut(l))
        throw new Zn({ address: l });
      const y = f.match(BI);
      if (y) {
        const [h, g] = y;
        if (g && Ce(l) !== Number.parseInt(g))
          throw new tA({
            expectedSize: Number.parseInt(g),
            givenSize: Ce(l)
          });
      }
      const w = i[f];
      w && (LI(f), s(w, l));
    }
  };
  i.EIP712Domain && e && s(i.EIP712Domain, e), r !== "EIP712Domain" && s(i[r], n);
}
function qy({ domain: t }) {
  return [
    typeof (t == null ? void 0 : t.name) == "string" && { name: "name", type: "string" },
    (t == null ? void 0 : t.version) && { name: "version", type: "string" },
    typeof (t == null ? void 0 : t.chainId) == "number" && {
      name: "chainId",
      type: "uint256"
    },
    (t == null ? void 0 : t.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (t == null ? void 0 : t.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function LI(t) {
  if (t === "address" || t === "bool" || t === "string" || t.startsWith("bytes") || t.startsWith("uint") || t.startsWith("int"))
    throw new $I({ type: t });
}
const MI = `Ethereum Signed Message:
`;
function FI(t) {
  const e = typeof t == "string" ? Si(t) : typeof t.raw == "string" ? t.raw : Ue(t.raw), n = Si(`${MI}${Ce(e)}`);
  return en([n, e]);
}
function zy(t, e) {
  return Ve(FI(t), e);
}
const Vy = "0x6492649264926492649264926492649264926492649264926492649264926492";
function UI(t) {
  return zg(t, -32) === Vy;
}
function DI(t) {
  const { address: e, data: n, signature: r, to: i = "hex" } = t, s = js([
    Fr([{ type: "address" }, { type: "bytes" }, { type: "bytes" }], [e, n, r]),
    Vy
  ]);
  return i === "hex" ? s : Ft(s);
}
class jI extends G {
  constructor({ value: e }) {
    super(`Number \`${e}\` is not a valid decimal number.`, {
      name: "InvalidDecimalNumberError"
    });
  }
}
function HI(t, e) {
  if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(t))
    throw new jI({ value: t });
  let [n, r = "0"] = t.split(".");
  const i = n.startsWith("-");
  if (i && (n = n.slice(1)), r = r.replace(/(0+)$/, ""), e === 0)
    Math.round(+`.${r}`) === 1 && (n = `${BigInt(n) + 1n}`), r = "";
  else if (r.length > e) {
    const [s, o, a] = [
      r.slice(0, e - 1),
      r.slice(e - 1, e),
      r.slice(e)
    ], c = Math.round(+`${o}.${a}`);
    c > 9 ? r = `${BigInt(s) + BigInt(1)}0`.padStart(s.length + 1, "0") : r = `${s}${c}`, r.length > e && (r = r.slice(1), n = `${BigInt(n) + 1n}`), r = r.slice(0, e);
  } else
    r = r.padEnd(e, "0");
  return BigInt(`${i ? "-" : ""}${n}${r}`);
}
function JT(t, e = "wei") {
  return HI(t, Ag[e]);
}
function GI(t) {
  return t.map((e) => ({
    ...e,
    value: BigInt(e.value)
  }));
}
function qI(t) {
  return {
    ...t,
    balance: t.balance ? BigInt(t.balance) : void 0,
    nonce: t.nonce ? _n(t.nonce) : void 0,
    storageProof: t.storageProof ? GI(t.storageProof) : void 0
  };
}
async function zI(t, { address: e, blockNumber: n, blockTag: r, storageKeys: i }) {
  const s = r ?? "latest", o = n !== void 0 ? re(n) : void 0, a = await t.request({
    method: "eth_getProof",
    params: [e, i, o || s]
  });
  return qI(a);
}
async function VI(t, { address: e, blockNumber: n, blockTag: r = "latest", slot: i }) {
  const s = n !== void 0 ? re(n) : void 0;
  return await t.request({
    method: "eth_getStorageAt",
    params: [e, i, s || r]
  });
}
async function nl(t, { blockHash: e, blockNumber: n, blockTag: r, hash: i, index: s }) {
  var f, l, d;
  const o = r || "latest", a = n !== void 0 ? re(n) : void 0;
  let c = null;
  if (i ? c = await t.request({
    method: "eth_getTransactionByHash",
    params: [i]
  }, { dedupe: !0 }) : e ? c = await t.request({
    method: "eth_getTransactionByBlockHashAndIndex",
    params: [e, re(s)]
  }, { dedupe: !0 }) : (a || o) && (c = await t.request({
    method: "eth_getTransactionByBlockNumberAndIndex",
    params: [a || o, re(s)]
  }, { dedupe: !!a })), !c)
    throw new Pg({
      blockHash: e,
      blockNumber: n,
      blockTag: o,
      hash: i,
      index: s
    });
  return (((d = (l = (f = t.chain) == null ? void 0 : f.formatters) == null ? void 0 : l.transaction) == null ? void 0 : d.format) || Eg)(c);
}
async function WI(t, { hash: e, transactionReceipt: n }) {
  const [r, i] = await Promise.all([
    ne(t, Qs, "getBlockNumber")({}),
    e ? ne(t, nl, "getTransaction")({ hash: e }) : void 0
  ]), s = (n == null ? void 0 : n.blockNumber) || (i == null ? void 0 : i.blockNumber);
  return s ? r - s + 1n : 0n;
}
async function Hu(t, { hash: e }) {
  var i, s, o;
  const n = await t.request({
    method: "eth_getTransactionReceipt",
    params: [e]
  }, { dedupe: !0 });
  if (!n)
    throw new Bg({ hash: e });
  return (((o = (s = (i = t.chain) == null ? void 0 : i.formatters) == null ? void 0 : s.transactionReceipt) == null ? void 0 : o.format) || PS)(n);
}
async function KI(t, e) {
  var g;
  const { allowFailure: n = !0, batchSize: r, blockNumber: i, blockTag: s, multicallAddress: o, stateOverride: a } = e, c = e.contracts, u = r ?? (typeof ((g = t.batch) == null ? void 0 : g.multicall) == "object" && t.batch.multicall.batchSize || 1024);
  let f = o;
  if (!f) {
    if (!t.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    f = qi({
      blockNumber: i,
      chain: t.chain,
      contract: "multicall3"
    });
  }
  const l = [[]];
  let d = 0, y = 0;
  for (let b = 0; b < c.length; b++) {
    const { abi: E, address: S, args: N, functionName: O } = c[b];
    try {
      const C = Bn({ abi: E, args: N, functionName: O });
      y += (C.length - 2) / 2, // Check if batching is enabled.
      u > 0 && // Check if the current size of the batch exceeds the size limit.
      y > u && // Check if the current chunk is not already empty.
      l[d].length > 0 && (d++, y = (C.length - 2) / 2, l[d] = []), l[d] = [
        ...l[d],
        {
          allowFailure: !0,
          callData: C,
          target: S
        }
      ];
    } catch (C) {
      const L = Ii(C, {
        abi: E,
        address: S,
        args: N,
        docsPath: "/docs/contract/multicall",
        functionName: O
      });
      if (!n)
        throw L;
      l[d] = [
        ...l[d],
        {
          allowFailure: !0,
          callData: "0x",
          target: S
        }
      ];
    }
  }
  const w = await Promise.allSettled(l.map((b) => ne(t, In, "readContract")({
    abi: Fu,
    address: f,
    args: [b],
    blockNumber: i,
    blockTag: s,
    functionName: "aggregate3",
    stateOverride: a
  }))), h = [];
  for (let b = 0; b < w.length; b++) {
    const E = w[b];
    if (E.status === "rejected") {
      if (!n)
        throw E.reason;
      for (let N = 0; N < l[b].length; N++)
        h.push({
          status: "failure",
          error: E.reason,
          result: void 0
        });
      continue;
    }
    const S = E.value;
    for (let N = 0; N < S.length; N++) {
      const { returnData: O, success: C } = S[N], { callData: L } = l[b][N], { abi: p, address: x, functionName: _, args: P } = c[h.length];
      try {
        if (L === "0x")
          throw new xa();
        if (!C)
          throw new Wf({ data: O });
        const I = Vi({
          abi: p,
          args: P,
          data: O,
          functionName: _
        });
        h.push(n ? { result: I, status: "success" } : I);
      } catch (I) {
        const A = Ii(I, {
          abi: p,
          address: x,
          args: P,
          docsPath: "/docs/contract/multicall",
          functionName: _
        });
        if (!n)
          throw A;
        h.push({ error: A, result: void 0, status: "failure" });
      }
    }
  }
  if (h.length !== c.length)
    throw new G("multicall results mismatch");
  return h;
}
let Wy = class extends Lf {
  constructor(e, n) {
    super(), this.finished = !1, this.destroyed = !1, GS(e);
    const r = ya(n);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, s = new Uint8Array(i);
    s.set(r.length > i ? e.create().update(r).digest() : r);
    for (let o = 0; o < s.length; o++)
      s[o] ^= 54;
    this.iHash.update(s), this.oHash = e.create();
    for (let o = 0; o < s.length; o++)
      s[o] ^= 106;
    this.oHash.update(s), s.fill(0);
  }
  update(e) {
    return _i(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    _i(this), Gs(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: i, destroyed: s, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = i, e.destroyed = s, e.blockLen = o, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const Ky = (t, e, n) => new Wy(t, e).update(n).digest();
Ky.create = (t, e) => new Wy(t, e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const rl = /* @__PURE__ */ BigInt(0), Na = /* @__PURE__ */ BigInt(1), ZI = /* @__PURE__ */ BigInt(2);
function $r(t) {
  return t instanceof Uint8Array || t != null && typeof t == "object" && t.constructor.name === "Uint8Array";
}
function eo(t) {
  if (!$r(t))
    throw new Error("Uint8Array expected");
}
function Pi(t, e) {
  if (typeof e != "boolean")
    throw new Error(`${t} must be valid boolean, got "${e}".`);
}
const YI = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Bi(t) {
  eo(t);
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += YI[t[n]];
  return e;
}
function Kr(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function il(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
const cn = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function Vh(t) {
  if (t >= cn._0 && t <= cn._9)
    return t - cn._0;
  if (t >= cn._A && t <= cn._F)
    return t - (cn._A - 10);
  if (t >= cn._a && t <= cn._f)
    return t - (cn._a - 10);
}
function Ti(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length, n = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(n);
  for (let i = 0, s = 0; i < n; i++, s += 2) {
    const o = Vh(t.charCodeAt(s)), a = Vh(t.charCodeAt(s + 1));
    if (o === void 0 || a === void 0) {
      const c = t[s] + t[s + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + s);
    }
    r[i] = o * 16 + a;
  }
  return r;
}
function xr(t) {
  return il(Bi(t));
}
function sl(t) {
  return eo(t), il(Bi(Uint8Array.from(t).reverse()));
}
function $i(t, e) {
  return Ti(t.toString(16).padStart(e * 2, "0"));
}
function ol(t, e) {
  return $i(t, e).reverse();
}
function JI(t) {
  return Ti(Kr(t));
}
function Nt(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = Ti(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if ($r(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof n == "number" && i !== n)
    throw new Error(`${t} expected ${n} bytes, got ${i}`);
  return r;
}
function Ns(...t) {
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    eo(i), e += i.length;
  }
  const n = new Uint8Array(e);
  for (let r = 0, i = 0; r < t.length; r++) {
    const s = t[r];
    n.set(s, i), i += s.length;
  }
  return n;
}
function XI(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = 0;
  for (let r = 0; r < t.length; r++)
    n |= t[r] ^ e[r];
  return n === 0;
}
function QI(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
const kc = (t) => typeof t == "bigint" && rl <= t;
function Ra(t, e, n) {
  return kc(t) && kc(e) && kc(n) && e <= t && t < n;
}
function vr(t, e, n, r) {
  if (!Ra(e, n, r))
    throw new Error(`expected valid ${t}: ${n} <= n < ${r}, got ${typeof e} ${e}`);
}
function Zy(t) {
  let e;
  for (e = 0; t > rl; t >>= Na, e += 1)
    ;
  return e;
}
function eP(t, e) {
  return t >> BigInt(e) & Na;
}
function tP(t, e, n) {
  return t | (n ? Na : rl) << BigInt(e);
}
const al = (t) => (ZI << BigInt(t - 1)) - Na, Lc = (t) => new Uint8Array(t), Wh = (t) => Uint8Array.from(t);
function Yy(t, e, n) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = Lc(t), i = Lc(t), s = 0;
  const o = () => {
    r.fill(1), i.fill(0), s = 0;
  }, a = (...l) => n(i, r, ...l), c = (l = Lc()) => {
    i = a(Wh([0]), l), r = a(), l.length !== 0 && (i = a(Wh([1]), l), r = a());
  }, u = () => {
    if (s++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let l = 0;
    const d = [];
    for (; l < e; ) {
      r = a();
      const y = r.slice();
      d.push(y), l += r.length;
    }
    return Ns(...d);
  };
  return (l, d) => {
    o(), c(l);
    let y;
    for (; !(y = d(u())); )
      c();
    return o(), y;
  };
}
const nP = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || $r(t),
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function to(t, e, n = {}) {
  const r = (i, s, o) => {
    const a = nP[s];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const c = t[i];
    if (!(o && c === void 0) && !a(c, t))
      throw new Error(`Invalid param ${String(i)}=${c} (${typeof c}), expected ${s}`);
  };
  for (const [i, s] of Object.entries(e))
    r(i, s, !1);
  for (const [i, s] of Object.entries(n))
    r(i, s, !0);
  return t;
}
const rP = () => {
  throw new Error("not implemented");
};
function Gu(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return (n, ...r) => {
    const i = e.get(n);
    if (i !== void 0)
      return i;
    const s = t(n, ...r);
    return e.set(n, s), s;
  };
}
const iP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aInRange: vr,
  abool: Pi,
  abytes: eo,
  bitGet: eP,
  bitLen: Zy,
  bitMask: al,
  bitSet: tP,
  bytesToHex: Bi,
  bytesToNumberBE: xr,
  bytesToNumberLE: sl,
  concatBytes: Ns,
  createHmacDrbg: Yy,
  ensureBytes: Nt,
  equalBytes: XI,
  hexToBytes: Ti,
  hexToNumber: il,
  inRange: Ra,
  isBytes: $r,
  memoized: Gu,
  notImplemented: rP,
  numberToBytesBE: $i,
  numberToBytesLE: ol,
  numberToHexUnpadded: Kr,
  numberToVarBytesBE: JI,
  utf8ToBytes: QI,
  validateObject: to
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const We = BigInt(0), Ne = BigInt(1), cr = BigInt(2), sP = BigInt(3), qu = BigInt(4), Kh = BigInt(5), Zh = BigInt(8);
BigInt(9);
BigInt(16);
function ot(t, e) {
  const n = t % e;
  return n >= We ? n : e + n;
}
function oP(t, e, n) {
  if (n <= We || e < We)
    throw new Error("Expected power/modulo > 0");
  if (n === Ne)
    return We;
  let r = Ne;
  for (; e > We; )
    e & Ne && (r = r * t % n), t = t * t % n, e >>= Ne;
  return r;
}
function wt(t, e, n) {
  let r = t;
  for (; e-- > We; )
    r *= r, r %= n;
  return r;
}
function zu(t, e) {
  if (t === We || e <= We)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = ot(t, e), r = e, i = We, s = Ne;
  for (; n !== We; ) {
    const a = r / n, c = r % n, u = i - s * a;
    r = n, n = c, i = s, s = u;
  }
  if (r !== Ne)
    throw new Error("invert: does not exist");
  return ot(i, e);
}
function aP(t) {
  const e = (t - Ne) / cr;
  let n, r, i;
  for (n = t - Ne, r = 0; n % cr === We; n /= cr, r++)
    ;
  for (i = cr; i < t && oP(i, e, t) !== t - Ne; i++)
    ;
  if (r === 1) {
    const o = (t + Ne) / qu;
    return function(c, u) {
      const f = c.pow(u, o);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const s = (n + Ne) / cr;
  return function(a, c) {
    if (a.pow(c, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = r, f = a.pow(a.mul(a.ONE, i), n), l = a.pow(c, s), d = a.pow(c, n);
    for (; !a.eql(d, a.ONE); ) {
      if (a.eql(d, a.ZERO))
        return a.ZERO;
      let y = 1;
      for (let h = a.sqr(d); y < u && !a.eql(h, a.ONE); y++)
        h = a.sqr(h);
      const w = a.pow(f, Ne << BigInt(u - y - 1));
      f = a.sqr(w), l = a.mul(l, w), d = a.mul(d, f), u = y;
    }
    return l;
  };
}
function cP(t) {
  if (t % qu === sP) {
    const e = (t + Ne) / qu;
    return function(r, i) {
      const s = r.pow(i, e);
      if (!r.eql(r.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % Zh === Kh) {
    const e = (t - Kh) / Zh;
    return function(r, i) {
      const s = r.mul(i, cr), o = r.pow(s, e), a = r.mul(i, o), c = r.mul(r.mul(a, cr), o), u = r.mul(a, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(u), i))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return aP(t);
}
const uP = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function fP(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = uP.reduce((r, i) => (r[i] = "function", r), e);
  return to(t, n);
}
function lP(t, e, n) {
  if (n < We)
    throw new Error("Expected power > 0");
  if (n === We)
    return t.ONE;
  if (n === Ne)
    return e;
  let r = t.ONE, i = e;
  for (; n > We; )
    n & Ne && (r = t.mul(r, i)), i = t.sqr(i), n >>= Ne;
  return r;
}
function dP(t, e) {
  const n = new Array(e.length), r = e.reduce((s, o, a) => t.is0(o) ? s : (n[a] = s, t.mul(s, o)), t.ONE), i = t.inv(r);
  return e.reduceRight((s, o, a) => t.is0(o) ? s : (n[a] = t.mul(s, n[a]), t.mul(s, o)), i), n;
}
function Jy(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Xy(t, e, n = !1, r = {}) {
  if (t <= We)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = Jy(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = cP(t), a = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: al(i),
    ZERO: We,
    ONE: Ne,
    create: (c) => ot(c, t),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return We <= c && c < t;
    },
    is0: (c) => c === We,
    isOdd: (c) => (c & Ne) === Ne,
    neg: (c) => ot(-c, t),
    eql: (c, u) => c === u,
    sqr: (c) => ot(c * c, t),
    add: (c, u) => ot(c + u, t),
    sub: (c, u) => ot(c - u, t),
    mul: (c, u) => ot(c * u, t),
    pow: (c, u) => lP(a, c, u),
    div: (c, u) => ot(c * zu(u, t), t),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => zu(c, t),
    sqrt: r.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => dP(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => n ? ol(c, s) : $i(c, s),
    fromBytes: (c) => {
      if (c.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${c.length}`);
      return n ? sl(c) : xr(c);
    }
  });
  return Object.freeze(a);
}
function Qy(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function eb(t) {
  const e = Qy(t);
  return e + Math.ceil(e / 2);
}
function hP(t, e, n = !1) {
  const r = t.length, i = Qy(e), s = eb(e);
  if (r < 16 || r < s || r > 1024)
    throw new Error(`expected ${s}-1024 bytes of input, got ${r}`);
  const o = n ? xr(t) : sl(t), a = ot(o, e - Ne) + Ne;
  return n ? ol(a, i) : $i(a, i);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const pP = BigInt(0), Mc = BigInt(1), Fc = /* @__PURE__ */ new WeakMap(), Yh = /* @__PURE__ */ new WeakMap();
function gP(t, e) {
  const n = (s, o) => {
    const a = o.negate();
    return s ? a : o;
  }, r = (s) => {
    if (!Number.isSafeInteger(s) || s <= 0 || s > e)
      throw new Error(`Wrong window size=${s}, should be [1..${e}]`);
  }, i = (s) => {
    r(s);
    const o = Math.ceil(e / s) + 1, a = 2 ** (s - 1);
    return { windows: o, windowSize: a };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(s, o) {
      let a = t.ZERO, c = s;
      for (; o > pP; )
        o & Mc && (a = a.add(c)), c = c.double(), o >>= Mc;
      return a;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(s, o) {
      const { windows: a, windowSize: c } = i(o), u = [];
      let f = s, l = f;
      for (let d = 0; d < a; d++) {
        l = f, u.push(l);
        for (let y = 1; y < c; y++)
          l = l.add(f), u.push(l);
        f = l.double();
      }
      return u;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(s, o, a) {
      const { windows: c, windowSize: u } = i(s);
      let f = t.ZERO, l = t.BASE;
      const d = BigInt(2 ** s - 1), y = 2 ** s, w = BigInt(s);
      for (let h = 0; h < c; h++) {
        const g = h * u;
        let b = Number(a & d);
        a >>= w, b > u && (b -= y, a += Mc);
        const E = g, S = g + Math.abs(b) - 1, N = h % 2 !== 0, O = b < 0;
        b === 0 ? l = l.add(n(N, o[E])) : f = f.add(n(O, o[S]));
      }
      return { p: f, f: l };
    },
    wNAFCached(s, o, a) {
      const c = Yh.get(s) || 1;
      let u = Fc.get(s);
      return u || (u = this.precomputeWindow(s, c), c !== 1 && Fc.set(s, a(u))), this.wNAF(c, u, o);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(s, o) {
      r(o), Yh.set(s, o), Fc.delete(s);
    }
  };
}
function yP(t, e, n, r) {
  if (!Array.isArray(n) || !Array.isArray(r) || r.length !== n.length)
    throw new Error("arrays of points and scalars must have equal length");
  r.forEach((f, l) => {
    if (!e.isValid(f))
      throw new Error(`wrong scalar at index ${l}`);
  }), n.forEach((f, l) => {
    if (!(f instanceof t))
      throw new Error(`wrong point at index ${l}`);
  });
  const i = Zy(BigInt(n.length)), s = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1, o = (1 << s) - 1, a = new Array(o + 1).fill(t.ZERO), c = Math.floor((e.BITS - 1) / s) * s;
  let u = t.ZERO;
  for (let f = c; f >= 0; f -= s) {
    a.fill(t.ZERO);
    for (let d = 0; d < r.length; d++) {
      const y = r[d], w = Number(y >> BigInt(f) & BigInt(o));
      a[w] = a[w].add(n[d]);
    }
    let l = t.ZERO;
    for (let d = a.length - 1, y = t.ZERO; d > 0; d--)
      y = y.add(a[d]), l = l.add(y);
    if (u = u.add(l), f !== 0)
      for (let d = 0; d < s; d++)
        u = u.double();
  }
  return u;
}
function tb(t) {
  return fP(t.Fp), to(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Jy(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Jh(t) {
  t.lowS !== void 0 && Pi("lowS", t.lowS), t.prehash !== void 0 && Pi("prehash", t.prehash);
}
function bP(t) {
  const e = tb(t);
  to(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: n, Fp: r, a: i } = e;
  if (n) {
    if (!r.eql(i, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: mP, hexToBytes: wP } = iP, hn = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  // Basic building block is TLV (Tag-Length-Value)
  _tlv: {
    encode: (t, e) => {
      const { Err: n } = hn;
      if (t < 0 || t > 256)
        throw new n("tlv.encode: wrong tag");
      if (e.length & 1)
        throw new n("tlv.encode: unpadded data");
      const r = e.length / 2, i = Kr(r);
      if (i.length / 2 & 128)
        throw new n("tlv.encode: long form length too big");
      const s = r > 127 ? Kr(i.length / 2 | 128) : "";
      return `${Kr(t)}${s}${i}${e}`;
    },
    // v - value, l - left bytes (unparsed)
    decode(t, e) {
      const { Err: n } = hn;
      let r = 0;
      if (t < 0 || t > 256)
        throw new n("tlv.encode: wrong tag");
      if (e.length < 2 || e[r++] !== t)
        throw new n("tlv.decode: wrong tlv");
      const i = e[r++], s = !!(i & 128);
      let o = 0;
      if (!s)
        o = i;
      else {
        const c = i & 127;
        if (!c)
          throw new n("tlv.decode(long): indefinite length not supported");
        if (c > 4)
          throw new n("tlv.decode(long): byte length is too big");
        const u = e.subarray(r, r + c);
        if (u.length !== c)
          throw new n("tlv.decode: length bytes not complete");
        if (u[0] === 0)
          throw new n("tlv.decode(long): zero leftmost byte");
        for (const f of u)
          o = o << 8 | f;
        if (r += c, o < 128)
          throw new n("tlv.decode(long): not minimal encoding");
      }
      const a = e.subarray(r, r + o);
      if (a.length !== o)
        throw new n("tlv.decode: wrong value length");
      return { v: a, l: e.subarray(r + o) };
    }
  },
  // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
  // since we always use positive integers here. It must always be empty:
  // - add zero byte if exists
  // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
  _int: {
    encode(t) {
      const { Err: e } = hn;
      if (t < mn)
        throw new e("integer: negative integers are not allowed");
      let n = Kr(t);
      if (Number.parseInt(n[0], 16) & 8 && (n = "00" + n), n.length & 1)
        throw new e("unexpected assertion");
      return n;
    },
    decode(t) {
      const { Err: e } = hn;
      if (t[0] & 128)
        throw new e("Invalid signature integer: negative");
      if (t[0] === 0 && !(t[1] & 128))
        throw new e("Invalid signature integer: unnecessary leading zero");
      return mP(t);
    }
  },
  toSig(t) {
    const { Err: e, _int: n, _tlv: r } = hn, i = typeof t == "string" ? wP(t) : t;
    eo(i);
    const { v: s, l: o } = r.decode(48, i);
    if (o.length)
      throw new e("Invalid signature: left bytes after parsing");
    const { v: a, l: c } = r.decode(2, s), { v: u, l: f } = r.decode(2, c);
    if (f.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: n.decode(a), s: n.decode(u) };
  },
  hexFromSig(t) {
    const { _tlv: e, _int: n } = hn, r = `${e.encode(2, n.encode(t.r))}${e.encode(2, n.encode(t.s))}`;
    return e.encode(48, r);
  }
}, mn = BigInt(0), je = BigInt(1);
BigInt(2);
const Xh = BigInt(3);
BigInt(4);
function EP(t) {
  const e = bP(t), { Fp: n } = e, r = Xy(e.n, e.nBitLength), i = e.toBytes || ((h, g, b) => {
    const E = g.toAffine();
    return Ns(Uint8Array.from([4]), n.toBytes(E.x), n.toBytes(E.y));
  }), s = e.fromBytes || ((h) => {
    const g = h.subarray(1), b = n.fromBytes(g.subarray(0, n.BYTES)), E = n.fromBytes(g.subarray(n.BYTES, 2 * n.BYTES));
    return { x: b, y: E };
  });
  function o(h) {
    const { a: g, b } = e, E = n.sqr(h), S = n.mul(E, h);
    return n.add(n.add(S, n.mul(h, g)), b);
  }
  if (!n.eql(n.sqr(e.Gy), o(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function a(h) {
    return Ra(h, je, e.n);
  }
  function c(h) {
    const { allowedPrivateKeyLengths: g, nByteLength: b, wrapPrivateKey: E, n: S } = e;
    if (g && typeof h != "bigint") {
      if ($r(h) && (h = Bi(h)), typeof h != "string" || !g.includes(h.length))
        throw new Error("Invalid key");
      h = h.padStart(b * 2, "0");
    }
    let N;
    try {
      N = typeof h == "bigint" ? h : xr(Nt("private key", h, b));
    } catch {
      throw new Error(`private key must be ${b} bytes, hex or bigint, not ${typeof h}`);
    }
    return E && (N = ot(N, S)), vr("private key", N, je, S), N;
  }
  function u(h) {
    if (!(h instanceof d))
      throw new Error("ProjectivePoint expected");
  }
  const f = Gu((h, g) => {
    const { px: b, py: E, pz: S } = h;
    if (n.eql(S, n.ONE))
      return { x: b, y: E };
    const N = h.is0();
    g == null && (g = N ? n.ONE : n.inv(S));
    const O = n.mul(b, g), C = n.mul(E, g), L = n.mul(S, g);
    if (N)
      return { x: n.ZERO, y: n.ZERO };
    if (!n.eql(L, n.ONE))
      throw new Error("invZ was invalid");
    return { x: O, y: C };
  }), l = Gu((h) => {
    if (h.is0()) {
      if (e.allowInfinityPoint && !n.is0(h.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: g, y: b } = h.toAffine();
    if (!n.isValid(g) || !n.isValid(b))
      throw new Error("bad point: x or y not FE");
    const E = n.sqr(b), S = o(g);
    if (!n.eql(E, S))
      throw new Error("bad point: equation left != right");
    if (!h.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  class d {
    constructor(g, b, E) {
      if (this.px = g, this.py = b, this.pz = E, g == null || !n.isValid(g))
        throw new Error("x required");
      if (b == null || !n.isValid(b))
        throw new Error("y required");
      if (E == null || !n.isValid(E))
        throw new Error("z required");
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(g) {
      const { x: b, y: E } = g || {};
      if (!g || !n.isValid(b) || !n.isValid(E))
        throw new Error("invalid affine point");
      if (g instanceof d)
        throw new Error("projective point not allowed");
      const S = (N) => n.eql(N, n.ZERO);
      return S(b) && S(E) ? d.ZERO : new d(b, E, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(g) {
      const b = n.invertBatch(g.map((E) => E.pz));
      return g.map((E, S) => E.toAffine(b[S])).map(d.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(g) {
      const b = d.fromAffine(s(Nt("pointHex", g)));
      return b.assertValidity(), b;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(g) {
      return d.BASE.multiply(c(g));
    }
    // Multiscalar Multiplication
    static msm(g, b) {
      return yP(d, r, g, b);
    }
    // "Private method", don't use it directly
    _setWindowSize(g) {
      w.setWindowSize(this, g);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      l(this);
    }
    hasEvenY() {
      const { y: g } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(g);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(g) {
      u(g);
      const { px: b, py: E, pz: S } = this, { px: N, py: O, pz: C } = g, L = n.eql(n.mul(b, C), n.mul(N, S)), p = n.eql(n.mul(E, C), n.mul(O, S));
      return L && p;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new d(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: g, b } = e, E = n.mul(b, Xh), { px: S, py: N, pz: O } = this;
      let C = n.ZERO, L = n.ZERO, p = n.ZERO, x = n.mul(S, S), _ = n.mul(N, N), P = n.mul(O, O), I = n.mul(S, N);
      return I = n.add(I, I), p = n.mul(S, O), p = n.add(p, p), C = n.mul(g, p), L = n.mul(E, P), L = n.add(C, L), C = n.sub(_, L), L = n.add(_, L), L = n.mul(C, L), C = n.mul(I, C), p = n.mul(E, p), P = n.mul(g, P), I = n.sub(x, P), I = n.mul(g, I), I = n.add(I, p), p = n.add(x, x), x = n.add(p, x), x = n.add(x, P), x = n.mul(x, I), L = n.add(L, x), P = n.mul(N, O), P = n.add(P, P), x = n.mul(P, I), C = n.sub(C, x), p = n.mul(P, _), p = n.add(p, p), p = n.add(p, p), new d(C, L, p);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(g) {
      u(g);
      const { px: b, py: E, pz: S } = this, { px: N, py: O, pz: C } = g;
      let L = n.ZERO, p = n.ZERO, x = n.ZERO;
      const _ = e.a, P = n.mul(e.b, Xh);
      let I = n.mul(b, N), A = n.mul(E, O), R = n.mul(S, C), m = n.add(b, E), v = n.add(N, O);
      m = n.mul(m, v), v = n.add(I, A), m = n.sub(m, v), v = n.add(b, S);
      let B = n.add(N, C);
      return v = n.mul(v, B), B = n.add(I, R), v = n.sub(v, B), B = n.add(E, S), L = n.add(O, C), B = n.mul(B, L), L = n.add(A, R), B = n.sub(B, L), x = n.mul(_, v), L = n.mul(P, R), x = n.add(L, x), L = n.sub(A, x), x = n.add(A, x), p = n.mul(L, x), A = n.add(I, I), A = n.add(A, I), R = n.mul(_, R), v = n.mul(P, v), A = n.add(A, R), R = n.sub(I, R), R = n.mul(_, R), v = n.add(v, R), I = n.mul(A, v), p = n.add(p, I), I = n.mul(B, v), L = n.mul(m, L), L = n.sub(L, I), I = n.mul(m, A), x = n.mul(B, x), x = n.add(x, I), new d(L, p, x);
    }
    subtract(g) {
      return this.add(g.negate());
    }
    is0() {
      return this.equals(d.ZERO);
    }
    wNAF(g) {
      return w.wNAFCached(this, g, d.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(g) {
      vr("scalar", g, mn, e.n);
      const b = d.ZERO;
      if (g === mn)
        return b;
      if (g === je)
        return this;
      const { endo: E } = e;
      if (!E)
        return w.unsafeLadder(this, g);
      let { k1neg: S, k1: N, k2neg: O, k2: C } = E.splitScalar(g), L = b, p = b, x = this;
      for (; N > mn || C > mn; )
        N & je && (L = L.add(x)), C & je && (p = p.add(x)), x = x.double(), N >>= je, C >>= je;
      return S && (L = L.negate()), O && (p = p.negate()), p = new d(n.mul(p.px, E.beta), p.py, p.pz), L.add(p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(g) {
      const { endo: b, n: E } = e;
      vr("scalar", g, je, E);
      let S, N;
      if (b) {
        const { k1neg: O, k1: C, k2neg: L, k2: p } = b.splitScalar(g);
        let { p: x, f: _ } = this.wNAF(C), { p: P, f: I } = this.wNAF(p);
        x = w.constTimeNegate(O, x), P = w.constTimeNegate(L, P), P = new d(n.mul(P.px, b.beta), P.py, P.pz), S = x.add(P), N = _.add(I);
      } else {
        const { p: O, f: C } = this.wNAF(g);
        S = O, N = C;
      }
      return d.normalizeZ([S, N])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(g, b, E) {
      const S = d.BASE, N = (C, L) => L === mn || L === je || !C.equals(S) ? C.multiplyUnsafe(L) : C.multiply(L), O = N(this, b).add(N(g, E));
      return O.is0() ? void 0 : O;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(g) {
      return f(this, g);
    }
    isTorsionFree() {
      const { h: g, isTorsionFree: b } = e;
      if (g === je)
        return !0;
      if (b)
        return b(d, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: g, clearCofactor: b } = e;
      return g === je ? this : b ? b(d, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(g = !0) {
      return Pi("isCompressed", g), this.assertValidity(), i(d, this, g);
    }
    toHex(g = !0) {
      return Pi("isCompressed", g), Bi(this.toRawBytes(g));
    }
  }
  d.BASE = new d(e.Gx, e.Gy, n.ONE), d.ZERO = new d(n.ZERO, n.ONE, n.ZERO);
  const y = e.nBitLength, w = gP(d, e.endo ? Math.ceil(y / 2) : y);
  return {
    CURVE: e,
    ProjectivePoint: d,
    normPrivateKeyToScalar: c,
    weierstrassEquation: o,
    isWithinCurveOrder: a
  };
}
function xP(t) {
  const e = tb(t);
  return to(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function vP(t) {
  const e = xP(t), { Fp: n, n: r } = e, i = n.BYTES + 1, s = 2 * n.BYTES + 1;
  function o(R) {
    return ot(R, r);
  }
  function a(R) {
    return zu(R, r);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: u, weierstrassEquation: f, isWithinCurveOrder: l } = EP({
    ...e,
    toBytes(R, m, v) {
      const B = m.toAffine(), $ = n.toBytes(B.x), M = Ns;
      return Pi("isCompressed", v), v ? M(Uint8Array.from([m.hasEvenY() ? 2 : 3]), $) : M(Uint8Array.from([4]), $, n.toBytes(B.y));
    },
    fromBytes(R) {
      const m = R.length, v = R[0], B = R.subarray(1);
      if (m === i && (v === 2 || v === 3)) {
        const $ = xr(B);
        if (!Ra($, je, n.ORDER))
          throw new Error("Point is not on curve");
        const M = f($);
        let D;
        try {
          D = n.sqrt(M);
        } catch (q) {
          const Z = q instanceof Error ? ": " + q.message : "";
          throw new Error("Point is not on curve" + Z);
        }
        const H = (D & je) === je;
        return (v & 1) === 1 !== H && (D = n.neg(D)), { x: $, y: D };
      } else if (m === s && v === 4) {
        const $ = n.fromBytes(B.subarray(0, n.BYTES)), M = n.fromBytes(B.subarray(n.BYTES, 2 * n.BYTES));
        return { x: $, y: M };
      } else
        throw new Error(`Point of length ${m} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`);
    }
  }), d = (R) => Bi($i(R, e.nByteLength));
  function y(R) {
    const m = r >> je;
    return R > m;
  }
  function w(R) {
    return y(R) ? o(-R) : R;
  }
  const h = (R, m, v) => xr(R.slice(m, v));
  class g {
    constructor(m, v, B) {
      this.r = m, this.s = v, this.recovery = B, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(m) {
      const v = e.nByteLength;
      return m = Nt("compactSignature", m, v * 2), new g(h(m, 0, v), h(m, v, 2 * v));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(m) {
      const { r: v, s: B } = hn.toSig(Nt("DER", m));
      return new g(v, B);
    }
    assertValidity() {
      vr("r", this.r, je, r), vr("s", this.s, je, r);
    }
    addRecoveryBit(m) {
      return new g(this.r, this.s, m);
    }
    recoverPublicKey(m) {
      const { r: v, s: B, recovery: $ } = this, M = C(Nt("msgHash", m));
      if ($ == null || ![0, 1, 2, 3].includes($))
        throw new Error("recovery id invalid");
      const D = $ === 2 || $ === 3 ? v + e.n : v;
      if (D >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const H = $ & 1 ? "03" : "02", V = c.fromHex(H + d(D)), q = a(D), Z = o(-M * q), Y = o(B * q), ee = c.BASE.multiplyAndAddUnsafe(V, Z, Y);
      if (!ee)
        throw new Error("point at infinify");
      return ee.assertValidity(), ee;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return y(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new g(this.r, o(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Ti(this.toDERHex());
    }
    toDERHex() {
      return hn.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Ti(this.toCompactHex());
    }
    toCompactHex() {
      return d(this.r) + d(this.s);
    }
  }
  const b = {
    isValidPrivateKey(R) {
      try {
        return u(R), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const R = eb(e.n);
      return hP(e.randomBytes(R), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(R = 8, m = c.BASE) {
      return m._setWindowSize(R), m.multiply(BigInt(3)), m;
    }
  };
  function E(R, m = !0) {
    return c.fromPrivateKey(R).toRawBytes(m);
  }
  function S(R) {
    const m = $r(R), v = typeof R == "string", B = (m || v) && R.length;
    return m ? B === i || B === s : v ? B === 2 * i || B === 2 * s : R instanceof c;
  }
  function N(R, m, v = !0) {
    if (S(R))
      throw new Error("first arg must be private key");
    if (!S(m))
      throw new Error("second arg must be public key");
    return c.fromHex(m).multiply(u(R)).toRawBytes(v);
  }
  const O = e.bits2int || function(R) {
    const m = xr(R), v = R.length * 8 - e.nBitLength;
    return v > 0 ? m >> BigInt(v) : m;
  }, C = e.bits2int_modN || function(R) {
    return o(O(R));
  }, L = al(e.nBitLength);
  function p(R) {
    return vr(`num < 2^${e.nBitLength}`, R, mn, L), $i(R, e.nByteLength);
  }
  function x(R, m, v = _) {
    if (["recovered", "canonical"].some((be) => be in v))
      throw new Error("sign() legacy options not supported");
    const { hash: B, randomBytes: $ } = e;
    let { lowS: M, prehash: D, extraEntropy: H } = v;
    M == null && (M = !0), R = Nt("msgHash", R), Jh(v), D && (R = Nt("prehashed msgHash", B(R)));
    const V = C(R), q = u(m), Z = [p(q), p(V)];
    if (H != null && H !== !1) {
      const be = H === !0 ? $(n.BYTES) : H;
      Z.push(Nt("extraEntropy", be));
    }
    const Y = Ns(...Z), ee = V;
    function ie(be) {
      const ge = O(be);
      if (!l(ge))
        return;
      const Ie = a(ge), ye = c.BASE.multiply(ge).toAffine(), de = o(ye.x);
      if (de === mn)
        return;
      const F = o(Ie * o(ee + de * q));
      if (F === mn)
        return;
      let U = (ye.x === de ? 0 : 2) | Number(ye.y & je), j = F;
      return M && y(F) && (j = w(F), U ^= 1), new g(de, j, U);
    }
    return { seed: Y, k2sig: ie };
  }
  const _ = { lowS: e.lowS, prehash: !1 }, P = { lowS: e.lowS, prehash: !1 };
  function I(R, m, v = _) {
    const { seed: B, k2sig: $ } = x(R, m, v), M = e;
    return Yy(M.hash.outputLen, M.nByteLength, M.hmac)(B, $);
  }
  c.BASE._setWindowSize(8);
  function A(R, m, v, B = P) {
    var ye;
    const $ = R;
    if (m = Nt("msgHash", m), v = Nt("publicKey", v), "strict" in B)
      throw new Error("options.strict was renamed to lowS");
    Jh(B);
    const { lowS: M, prehash: D } = B;
    let H, V;
    try {
      if (typeof $ == "string" || $r($))
        try {
          H = g.fromDER($);
        } catch (de) {
          if (!(de instanceof hn.Err))
            throw de;
          H = g.fromCompact($);
        }
      else if (typeof $ == "object" && typeof $.r == "bigint" && typeof $.s == "bigint") {
        const { r: de, s: F } = $;
        H = new g(de, F);
      } else
        throw new Error("PARSE");
      V = c.fromHex(v);
    } catch (de) {
      if (de.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (M && H.hasHighS())
      return !1;
    D && (m = e.hash(m));
    const { r: q, s: Z } = H, Y = C(m), ee = a(Z), ie = o(Y * ee), be = o(q * ee), ge = (ye = c.BASE.multiplyAndAddUnsafe(V, ie, be)) == null ? void 0 : ye.toAffine();
    return ge ? o(ge.x) === q : !1;
  }
  return {
    CURVE: e,
    getPublicKey: E,
    getSharedSecret: N,
    sign: I,
    verify: A,
    ProjectivePoint: c,
    Signature: g,
    utils: b
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function SP(t) {
  return {
    hash: t,
    hmac: (e, ...n) => Ky(t, e, WS(...n)),
    randomBytes: KS
  };
}
function _P(t, e) {
  const n = (r) => vP({ ...t, ...SP(r) });
  return Object.freeze({ ...n(e), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const nb = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Qh = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), AP = BigInt(1), Vu = BigInt(2), e0 = (t, e) => (t + e / Vu) / e;
function IP(t) {
  const e = nb, n = BigInt(3), r = BigInt(6), i = BigInt(11), s = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), u = t * t * t % e, f = u * u * t % e, l = wt(f, n, e) * f % e, d = wt(l, n, e) * f % e, y = wt(d, Vu, e) * u % e, w = wt(y, i, e) * y % e, h = wt(w, s, e) * w % e, g = wt(h, a, e) * h % e, b = wt(g, c, e) * g % e, E = wt(b, a, e) * h % e, S = wt(E, n, e) * f % e, N = wt(S, o, e) * w % e, O = wt(N, r, e) * u % e, C = wt(O, Vu, e);
  if (!Wu.eql(Wu.sqr(C), t))
    throw new Error("Cannot find square root");
  return C;
}
const Wu = Xy(nb, void 0, void 0, { sqrt: IP }), cl = _P({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: Wu,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: Qh,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (t) => {
      const e = Qh, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -AP * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s = n, o = BigInt("0x100000000000000000000000000000000"), a = e0(s * t, e), c = e0(-r * t, e);
      let u = ot(t - a * n - c * i, e), f = ot(-a * r - c * s, e);
      const l = u > o, d = f > o;
      if (l && (u = e - u), d && (f = e - f), u > o || f > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + t);
      return { k1neg: l, k1: u, k2neg: d, k2: f };
    }
  }
}, Og);
BigInt(0);
cl.ProjectivePoint;
const PP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  secp256k1: cl
}, Symbol.toStringTag, { value: "Module" }));
function BP({ r: t, s: e, to: n = "hex", v: r, yParity: i }) {
  const s = (() => {
    if (i === 0 || i === 1)
      return i;
    if (r && (r === 27n || r === 28n || r >= 35n))
      return r % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })(), o = `0x${new cl.Signature(Wn(t), Wn(e)).toCompactHex()}${s === 0 ? "1b" : "1c"}`;
  return n === "hex" ? o : Ft(o);
}
async function ul(t, e) {
  var l, d, y;
  const { address: n, factory: r, factoryData: i, hash: s, signature: o, universalSignatureVerifierAddress: a = (y = (d = (l = t.chain) == null ? void 0 : l.contracts) == null ? void 0 : d.universalSignatureVerifier) == null ? void 0 : y.address, ...c } = e, u = Mt(o) ? o : typeof o == "object" && "r" in o && "s" in o ? BP(o) : Ue(o), f = await (async () => !r && !i || UI(u) ? u : DI({
    address: r,
    data: i,
    signature: u
  }))();
  try {
    const w = a ? {
      to: a,
      data: Bn({
        abi: Dh,
        functionName: "isValidSig",
        args: [n, s, f]
      }),
      ...c
    } : {
      data: Pa({
        abi: Dh,
        args: [n, s, f],
        bytecode: A6
      }),
      ...c
    }, { data: h } = await ne(t, Js, "call")(w);
    return _S(h ?? "0x0");
  } catch (w) {
    try {
      if (Ia(jg(n), await Zg({ hash: s, signature: o })))
        return !0;
    } catch {
    }
    if (w instanceof vy)
      return !1;
    throw w;
  }
}
async function TP(t, { address: e, message: n, factory: r, factoryData: i, signature: s, ...o }) {
  const a = zy(n);
  return ul(t, {
    address: e,
    factory: r,
    factoryData: i,
    hash: a,
    signature: s,
    ...o
  });
}
async function $P(t, e) {
  const { address: n, factory: r, factoryData: i, signature: s, message: o, primaryType: a, types: c, domain: u, ...f } = e, l = NI({ message: o, primaryType: a, types: c, domain: u });
  return ul(t, {
    address: n,
    factory: r,
    factoryData: i,
    hash: l,
    signature: s,
    ...f
  });
}
function rb(t, { emitOnBegin: e = !1, emitMissed: n = !1, onBlockNumber: r, onError: i, poll: s, pollingInterval: o = t.pollingInterval }) {
  const a = typeof s < "u" ? s : !(t.transport.type === "webSocket" || t.transport.type === "fallback" && t.transport.transports[0].config.type === "webSocket");
  let c;
  return a ? (() => {
    const l = Fe([
      "watchBlockNumber",
      t.uid,
      e,
      n,
      o
    ]);
    return Yn(l, { onBlockNumber: r, onError: i }, (d) => Xs(async () => {
      var y;
      try {
        const w = await ne(t, Qs, "getBlockNumber")({ cacheTime: 0 });
        if (c) {
          if (w === c)
            return;
          if (w - c > 1 && n)
            for (let h = c + 1n; h < w; h++)
              d.onBlockNumber(h, c), c = h;
        }
        (!c || w > c) && (d.onBlockNumber(w, c), c = w);
      } catch (w) {
        (y = d.onError) == null || y.call(d, w);
      }
    }, {
      emitOnBegin: e,
      interval: o
    }));
  })() : (() => {
    const l = Fe([
      "watchBlockNumber",
      t.uid,
      e,
      n
    ]);
    return Yn(l, { onBlockNumber: r, onError: i }, (d) => {
      let y = !0, w = () => y = !1;
      return (async () => {
        try {
          const h = (() => {
            if (t.transport.type === "fallback") {
              const b = t.transport.transports.find((E) => E.config.type === "webSocket");
              return b ? b.value : t.transport;
            }
            return t.transport;
          })(), { unsubscribe: g } = await h.subscribe({
            params: ["newHeads"],
            onData(b) {
              var S;
              if (!y)
                return;
              const E = Wn((S = b.result) == null ? void 0 : S.number);
              d.onBlockNumber(E, c), c = E;
            },
            onError(b) {
              var E;
              (E = d.onError) == null || E.call(d, b);
            }
          });
          w = g, y || w();
        } catch (h) {
          i == null || i(h);
        }
      })(), () => w();
    });
  })();
}
async function NP(t, {
  confirmations: e = 1,
  hash: n,
  onReplaced: r,
  pollingInterval: i = t.pollingInterval,
  retryCount: s = 6,
  retryDelay: o = ({ count: c }) => ~~(1 << c) * 200,
  // exponential backoff
  timeout: a = 18e4
}) {
  const c = Fe(["waitForTransactionReceipt", t.uid, n]);
  let u, f, l, d = !1;
  return new Promise((y, w) => {
    a && setTimeout(() => w(new jS({ hash: n })), a);
    const h = Yn(c, { onReplaced: r, resolve: y, reject: w }, (g) => {
      const b = ne(t, rb, "watchBlockNumber")({
        emitMissed: !0,
        emitOnBegin: !0,
        poll: !0,
        pollingInterval: i,
        async onBlockNumber(E) {
          const S = (O) => {
            b(), O(), h();
          };
          let N = E;
          if (!d)
            try {
              if (l) {
                if (e > 1 && (!l.blockNumber || N - l.blockNumber + 1n < e))
                  return;
                S(() => g.resolve(l));
                return;
              }
              if (u || (d = !0, await ju(async () => {
                u = await ne(t, nl, "getTransaction")({ hash: n }), u.blockNumber && (N = u.blockNumber);
              }, {
                delay: o,
                retryCount: s
              }), d = !1), l = await ne(t, Hu, "getTransactionReceipt")({ hash: n }), e > 1 && (!l.blockNumber || N - l.blockNumber + 1n < e))
                return;
              S(() => g.resolve(l));
            } catch (O) {
              if (O instanceof Pg || O instanceof Bg) {
                if (!u) {
                  d = !1;
                  return;
                }
                try {
                  f = u, d = !0;
                  const C = await ju(() => ne(t, En, "getBlock")({
                    blockNumber: N,
                    includeTransactions: !0
                  }), {
                    delay: o,
                    retryCount: s,
                    shouldRetry: ({ error: x }) => x instanceof Wg
                  });
                  d = !1;
                  const L = C.transactions.find(({ from: x, nonce: _ }) => x === f.from && _ === f.nonce);
                  if (!L || (l = await ne(t, Hu, "getTransactionReceipt")({
                    hash: L.hash
                  }), e > 1 && (!l.blockNumber || N - l.blockNumber + 1n < e)))
                    return;
                  let p = "replaced";
                  L.to === f.to && L.value === f.value ? p = "repriced" : L.from === L.to && L.value === 0n && (p = "cancelled"), S(() => {
                    var x;
                    (x = g.onReplaced) == null || x.call(g, {
                      reason: p,
                      replacedTransaction: f,
                      transaction: L,
                      transactionReceipt: l
                    }), g.resolve(l);
                  });
                } catch (C) {
                  S(() => g.reject(C));
                }
              } else
                S(() => g.reject(O));
            }
        }
      });
    });
  });
}
function RP(t, { blockTag: e = "latest", emitMissed: n = !1, emitOnBegin: r = !1, onBlock: i, onError: s, includeTransactions: o, poll: a, pollingInterval: c = t.pollingInterval }) {
  const u = typeof a < "u" ? a : !(t.transport.type === "webSocket" || t.transport.type === "fallback" && t.transport.transports[0].config.type === "webSocket"), f = o ?? !1;
  let l;
  return u ? (() => {
    const w = Fe([
      "watchBlocks",
      t.uid,
      e,
      n,
      r,
      f,
      c
    ]);
    return Yn(w, { onBlock: i, onError: s }, (h) => Xs(async () => {
      var g;
      try {
        const b = await ne(t, En, "getBlock")({
          blockTag: e,
          includeTransactions: f
        });
        if (b.number && (l != null && l.number)) {
          if (b.number === l.number)
            return;
          if (b.number - l.number > 1 && n)
            for (let E = (l == null ? void 0 : l.number) + 1n; E < b.number; E++) {
              const S = await ne(t, En, "getBlock")({
                blockNumber: E,
                includeTransactions: f
              });
              h.onBlock(S, l), l = S;
            }
        }
        // If no previous block exists, emit.
        (!(l != null && l.number) || // If the block tag is "pending" with no block number, emit.
        e === "pending" && !(b != null && b.number) || // If the next block number is greater than the previous block number, emit.
        // We don't want to emit blocks in the past.
        b.number && b.number > l.number) && (h.onBlock(b, l), l = b);
      } catch (b) {
        (g = h.onError) == null || g.call(h, b);
      }
    }, {
      emitOnBegin: r,
      interval: c
    }));
  })() : (() => {
    let w = !0, h = !0, g = () => w = !1;
    return (async () => {
      try {
        r && ne(t, En, "getBlock")({
          blockTag: e,
          includeTransactions: f
        }).then((S) => {
          w && h && (i(S, void 0), h = !1);
        });
        const b = (() => {
          if (t.transport.type === "fallback") {
            const S = t.transport.transports.find((N) => N.config.type === "webSocket");
            return S ? S.value : t.transport;
          }
          return t.transport;
        })(), { unsubscribe: E } = await b.subscribe({
          params: ["newHeads"],
          onData(S) {
            var C, L, p;
            if (!w)
              return;
            const O = (((p = (L = (C = t.chain) == null ? void 0 : C.formatters) == null ? void 0 : L.block) == null ? void 0 : p.format) || xg)(S.result);
            i(O, l), h = !1, l = O;
          },
          onError(S) {
            s == null || s(S);
          }
        });
        g = E, w || g();
      } catch (b) {
        s == null || s(b);
      }
    })(), () => g();
  })();
}
function OP(t, { address: e, args: n, batch: r = !0, event: i, events: s, fromBlock: o, onError: a, onLogs: c, poll: u, pollingInterval: f = t.pollingInterval, strict: l }) {
  const d = typeof u < "u" ? u : typeof o == "bigint" ? !0 : !(t.transport.type === "webSocket" || t.transport.type === "fallback" && t.transport.transports[0].config.type === "webSocket"), y = l ?? !1;
  return d ? (() => {
    const g = Fe([
      "watchEvent",
      e,
      n,
      r,
      t.uid,
      i,
      f,
      o
    ]);
    return Yn(g, { onLogs: c, onError: a }, (b) => {
      let E;
      o !== void 0 && (E = o - 1n);
      let S, N = !1;
      const O = Xs(async () => {
        var C;
        if (!N) {
          try {
            S = await ne(t, ky, "createEventFilter")({
              address: e,
              args: n,
              event: i,
              events: s,
              strict: y,
              fromBlock: o
            });
          } catch {
          }
          N = !0;
          return;
        }
        try {
          let L;
          if (S)
            L = await ne(t, Ba, "getFilterChanges")({ filter: S });
          else {
            const p = await ne(t, Qs, "getBlockNumber")({});
            E && E !== p ? L = await ne(t, Yf, "getLogs")({
              address: e,
              args: n,
              event: i,
              events: s,
              fromBlock: E + 1n,
              toBlock: p
            }) : L = [], E = p;
          }
          if (L.length === 0)
            return;
          if (r)
            b.onLogs(L);
          else
            for (const p of L)
              b.onLogs([p]);
        } catch (L) {
          S && L instanceof Tr && (N = !1), (C = b.onError) == null || C.call(b, L);
        }
      }, {
        emitOnBegin: !0,
        interval: f
      });
      return async () => {
        S && await ne(t, Ta, "uninstallFilter")({ filter: S }), O();
      };
    });
  })() : (() => {
    let g = !0, b = () => g = !1;
    return (async () => {
      try {
        const E = (() => {
          if (t.transport.type === "fallback") {
            const C = t.transport.transports.find((L) => L.config.type === "webSocket");
            return C ? C.value : t.transport;
          }
          return t.transport;
        })(), S = s ?? (i ? [i] : void 0);
        let N = [];
        S && (N = [S.flatMap((L) => Ys({
          abi: [L],
          eventName: L.name,
          args: n
        }))], i && (N = N[0]));
        const { unsubscribe: O } = await E.subscribe({
          params: ["logs", { address: e, topics: N }],
          onData(C) {
            var p;
            if (!g)
              return;
            const L = C.result;
            try {
              const { eventName: x, args: _ } = Kf({
                abi: S ?? [],
                data: L.data,
                topics: L.topics,
                strict: y
              }), P = Kn(L, { args: _, eventName: x });
              c([P]);
            } catch (x) {
              let _, P;
              if (x instanceof Ts || x instanceof va) {
                if (l)
                  return;
                _ = x.abiItem.name, P = (p = x.abiItem.inputs) == null ? void 0 : p.some((A) => !("name" in A && A.name));
              }
              const I = Kn(L, {
                args: P ? [] : {},
                eventName: _
              });
              c([I]);
            }
          },
          onError(C) {
            a == null || a(C);
          }
        });
        b = O, g || b();
      } catch (E) {
        a == null || a(E);
      }
    })(), () => b();
  })();
}
function CP(t, { batch: e = !0, onError: n, onTransactions: r, poll: i, pollingInterval: s = t.pollingInterval }) {
  return (typeof i < "u" ? i : t.transport.type !== "webSocket") ? (() => {
    const u = Fe([
      "watchPendingTransactions",
      t.uid,
      e,
      s
    ]);
    return Yn(u, { onTransactions: r, onError: n }, (f) => {
      let l;
      const d = Xs(async () => {
        var y;
        try {
          if (!l)
            try {
              l = await ne(t, Ly, "createPendingTransactionFilter")({});
              return;
            } catch (h) {
              throw d(), h;
            }
          const w = await ne(t, Ba, "getFilterChanges")({ filter: l });
          if (w.length === 0)
            return;
          if (e)
            f.onTransactions(w);
          else
            for (const h of w)
              f.onTransactions([h]);
        } catch (w) {
          (y = f.onError) == null || y.call(f, w);
        }
      }, {
        emitOnBegin: !0,
        interval: s
      });
      return async () => {
        l && await ne(t, Ta, "uninstallFilter")({ filter: l }), d();
      };
    });
  })() : (() => {
    let u = !0, f = () => u = !1;
    return (async () => {
      try {
        const { unsubscribe: l } = await t.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(d) {
            if (!u)
              return;
            const y = d.result;
            r([y]);
          },
          onError(d) {
            n == null || n(d);
          }
        });
        f = l, u || f();
      } catch (l) {
        n == null || n(l);
      }
    })(), () => f();
  })();
}
function kP(t) {
  var l, d, y;
  const { scheme: e, statement: n, ...r } = ((l = t.match(LP)) == null ? void 0 : l.groups) ?? {}, { chainId: i, expirationTime: s, issuedAt: o, notBefore: a, requestId: c, ...u } = ((d = t.match(MP)) == null ? void 0 : d.groups) ?? {}, f = (y = t.split("Resources:")[1]) == null ? void 0 : y.split(`
- `).slice(1);
  return {
    ...r,
    ...u,
    ...i ? { chainId: Number(i) } : {},
    ...s ? { expirationTime: new Date(s) } : {},
    ...o ? { issuedAt: new Date(o) } : {},
    ...a ? { notBefore: new Date(a) } : {},
    ...c ? { requestId: c } : {},
    ...f ? { resources: f } : {},
    ...e ? { scheme: e } : {},
    ...n ? { statement: n } : {}
  };
}
const LP = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/, MP = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
function FP(t) {
  const { address: e, domain: n, message: r, nonce: i, scheme: s, time: o = /* @__PURE__ */ new Date() } = t;
  if (n && r.domain !== n || i && r.nonce !== i || s && r.scheme !== s || r.expirationTime && o >= r.expirationTime || r.notBefore && o < r.notBefore)
    return !1;
  try {
    if (!r.address || e && !Ia(r.address, e))
      return !1;
  } catch {
    return !1;
  }
  return !0;
}
async function UP(t, e) {
  const { address: n, domain: r, message: i, nonce: s, scheme: o, signature: a, time: c = /* @__PURE__ */ new Date(), ...u } = e, f = kP(i);
  if (!f.address || !FP({
    address: n,
    domain: r,
    message: f,
    nonce: s,
    scheme: o,
    time: c
  }))
    return !1;
  const d = zy(i);
  return ul(t, {
    address: f.address,
    hash: d,
    signature: a,
    ...u
  });
}
function DP(t) {
  return {
    call: (e) => Js(t, e),
    createBlockFilter: () => yI(t),
    createContractEventFilter: (e) => Sy(t, e),
    createEventFilter: (e) => ky(t, e),
    createPendingTransactionFilter: () => Ly(t),
    estimateContractGas: (e) => m6(t, e),
    estimateGas: (e) => Hf(t, e),
    getBalance: (e) => Qg(t, e),
    getBlobBaseFee: () => bI(t),
    getBlock: (e) => En(t, e),
    getBlockNumber: (e) => Qs(t, e),
    getBlockTransactionCount: (e) => mI(t, e),
    getBytecode: (e) => zh(t, e),
    getChainId: () => Ws(t),
    getCode: (e) => zh(t, e),
    getContractEvents: (e) => _y(t, e),
    getEip712Domain: (e) => H6(t, e),
    getEnsAddress: (e) => eI(t, e),
    getEnsAvatar: (e) => hI(t, e),
    getEnsName: (e) => pI(t, e),
    getEnsResolver: (e) => gI(t, e),
    getEnsText: (e) => Cy(t, e),
    getFeeHistory: (e) => EI(t, e),
    estimateFeesPerGas: (e) => R_(t, e),
    getFilterChanges: (e) => Ba(t, e),
    getFilterLogs: (e) => xI(t, e),
    getGasPrice: () => Uf(t),
    getLogs: (e) => Yf(t, e),
    getProof: (e) => zI(t, e),
    estimateMaxPriorityFeePerGas: (e) => N_(t, e),
    getStorageAt: (e) => VI(t, e),
    getTransaction: (e) => nl(t, e),
    getTransactionConfirmations: (e) => WI(t, e),
    getTransactionCount: (e) => ey(t, e),
    getTransactionReceipt: (e) => Hu(t, e),
    multicall: (e) => KI(t, e),
    prepareTransactionRequest: (e) => wa(t, e),
    readContract: (e) => In(t, e),
    sendRawTransaction: (e) => Jf(t, e),
    simulateContract: (e) => N6(t, e),
    verifyMessage: (e) => TP(t, e),
    verifySiweMessage: (e) => UP(t, e),
    verifyTypedData: (e) => $P(t, e),
    uninstallFilter: (e) => Ta(t, e),
    waitForTransactionReceipt: (e) => NP(t, e),
    watchBlocks: (e) => RP(t, e),
    watchBlockNumber: (e) => rb(t, e),
    watchContractEvent: (e) => F6(t, e),
    watchEvent: (e) => OP(t, e),
    watchPendingTransactions: (e) => CP(t, e)
  };
}
function e3(t) {
  const { key: e = "public", name: n = "Public Client" } = t;
  return Ty({
    ...t,
    key: e,
    name: n,
    type: "publicClient"
  }).extend(DP);
}
function jP(t, e) {
  const { abi: n, args: r, bytecode: i, ...s } = e, o = Pa({ abi: n, args: r, bytecode: i });
  return Xf(t, {
    ...s,
    data: o
  });
}
async function HP(t) {
  var n;
  return ((n = t.account) == null ? void 0 : n.type) === "local" ? [t.account.address] : (await t.request({ method: "eth_accounts" }, { dedupe: !0 })).map((r) => qs(r));
}
async function GP(t) {
  return await t.request({ method: "wallet_getPermissions" }, { dedupe: !0 });
}
async function qP(t) {
  return (await t.request({ method: "eth_requestAccounts" }, { dedupe: !0, retryCount: 0 })).map((n) => jg(n));
}
async function zP(t, e) {
  return t.request({
    method: "wallet_requestPermissions",
    params: [e]
  }, { retryCount: 0 });
}
async function VP(t, { account: e = t.account, message: n }) {
  if (!e)
    throw new Ks({
      docsPath: "/docs/actions/wallet/signMessage"
    });
  const r = pt(e);
  if (r.signMessage)
    return r.signMessage({ message: n });
  const i = typeof n == "string" ? Si(n) : n.raw instanceof Uint8Array ? Qt(n.raw) : n.raw;
  return t.request({
    method: "personal_sign",
    params: [i, r.address]
  }, { retryCount: 0 });
}
async function WP(t, e) {
  var u, f, l, d;
  const { account: n = t.account, chain: r = t.chain, ...i } = e;
  if (!n)
    throw new Ks({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const s = pt(n);
  Vs({
    account: s,
    ...e
  });
  const o = await ne(t, Ws, "getChainId")({});
  r !== null && Vg({
    currentChainId: o,
    chain: r
  });
  const a = (r == null ? void 0 : r.formatters) || ((u = t.chain) == null ? void 0 : u.formatters), c = ((f = a == null ? void 0 : a.transactionRequest) == null ? void 0 : f.format) || ga;
  return s.signTransaction ? s.signTransaction({
    ...i,
    chainId: o
  }, { serializer: (d = (l = t.chain) == null ? void 0 : l.serializers) == null ? void 0 : d.transaction }) : await t.request({
    method: "eth_signTransaction",
    params: [
      {
        ...c(i),
        chainId: re(o),
        from: s.address
      }
    ]
  }, { retryCount: 0 });
}
async function KP(t, e) {
  const { account: n = t.account, domain: r, message: i, primaryType: s } = e;
  if (!n)
    throw new Ks({
      docsPath: "/docs/actions/wallet/signTypedData"
    });
  const o = pt(n), a = {
    EIP712Domain: qy({ domain: r }),
    ...e.types
  };
  if (Gy({ domain: r, message: i, primaryType: s, types: a }), o.signTypedData)
    return o.signTypedData({ domain: r, message: i, primaryType: s, types: a });
  const c = kI({ domain: r, message: i, primaryType: s, types: a });
  return t.request({
    method: "eth_signTypedData_v4",
    params: [o.address, c]
  }, { retryCount: 0 });
}
async function ZP(t, { id: e }) {
  await t.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: re(e)
      }
    ]
  }, { retryCount: 0 });
}
async function YP(t, e) {
  return await t.request({
    method: "wallet_watchAsset",
    params: e
  }, { retryCount: 0 });
}
function JP(t) {
  return {
    addChain: (e) => q6(t, e),
    deployContract: (e) => jP(t, e),
    getAddresses: () => HP(t),
    getChainId: () => Ws(t),
    getPermissions: () => GP(t),
    prepareTransactionRequest: (e) => wa(t, e),
    requestAddresses: () => qP(t),
    requestPermissions: (e) => zP(t, e),
    sendRawTransaction: (e) => Jf(t, e),
    sendTransaction: (e) => Xf(t, e),
    signMessage: (e) => VP(t, e),
    signTransaction: (e) => WP(t, e),
    signTypedData: (e) => KP(t, e),
    switchChain: (e) => ZP(t, e),
    watchAsset: (e) => YP(t, e),
    writeContract: (e) => D6(t, e)
  };
}
function t3(t) {
  const { key: e = "wallet", name: n = "Wallet Client", transport: r } = t;
  return Ty({
    ...t,
    key: e,
    name: n,
    transport: r,
    type: "walletClient"
  }).extend(JP);
}
function XP(t, e) {
  const {
    setPrototypeOf: n
  } = Object;
  n ? n(t, e) : t.__proto__ = e;
}
function QP(t, e = t.constructor) {
  const {
    captureStackTrace: n
  } = Error;
  n && n(t, e);
}
class e5 extends Error {
  constructor(e, n) {
    super(e, n), oe(this, "name", void 0), Object.defineProperty(this, "name", {
      value: new.target.name,
      enumerable: !1,
      configurable: !0
    }), XP(this, new.target.prototype), QP(this);
  }
}
class t5 extends e5 {
  constructor(e, n) {
    super(n), oe(this, "code", void 0), oe(this, "message", void 0), this.code = e, this.message = n || "", Object.defineProperty(this, "name", {
      value: "TkeyError"
    });
  }
  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message
    };
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
}
class ce extends t5 {
  constructor(e, n) {
    super(e, n), Object.defineProperty(this, "name", {
      value: "CoreKitError"
    });
  }
  static fromCode(e, n = "") {
    return new ce(e, `${ce.messages[e]} ${n}`);
  }
  static default(e = "") {
    return new ce(1e3, `${ce.messages[1e3]} ${e}`);
  }
  // Configuration errors
  static chainConfigInvalid(e = "") {
    return ce.fromCode(1001, e);
  }
  static clientIdInvalid(e = "") {
    return ce.fromCode(1002, e);
  }
  static storageTypeUnsupported(e = "") {
    return ce.fromCode(1003, e);
  }
  static oauthLoginUnsupported(e = "") {
    return ce.fromCode(1004, e);
  }
  static noValidStorageOptionFound(e = "") {
    return ce.fromCode(1005, e);
  }
  static noDataFoundInStorage(e = "") {
    return ce.fromCode(1006, e);
  }
  static invalidConfig(e = "") {
    return ce.fromCode(1007, e);
  }
  // TSS and key management errors
  static tssLibRequired(e = "") {
    return ce.fromCode(1101, e);
  }
  static tkeyInstanceUninitialized(e = "") {
    return ce.fromCode(1102, e);
  }
  static duplicateTssIndex(e = "") {
    return ce.fromCode(1103, e);
  }
  static nodeDetailsRetrievalFailed(e = "") {
    return ce.fromCode(1104, e);
  }
  static prefetchValueExceeded(e = "") {
    return ce.fromCode(1105, e);
  }
  static invalidTorusLoginResponse(e = "") {
    return ce.fromCode(1106, e);
  }
  static invalidTorusAggregateLoginResponse(e = "") {
    return ce.fromCode(1107, e);
  }
  static unsupportedRedirectMethod(e = "") {
    return ce.fromCode(1108, e);
  }
  static postBoxKeyMissing(e = "") {
    return ce.fromCode(1109, e);
  }
  static tssShareTypeIndexMissing(e = "") {
    return ce.fromCode(1110, e);
  }
  static tssPublicKeyOrEndpointsMissing(e = "") {
    return ce.fromCode(1111, e);
  }
  static activeSessionNotFound(e = "") {
    return ce.fromCode(1112, e);
  }
  static tssNoncesMissing(e = "") {
    return ce.fromCode(1113, e);
  }
  static tssKeyImportNotAllowed(e = "") {
    return ce.fromCode(1114, e);
  }
  // Factor key and authentication errors
  static factorKeyNotPresent(e = "") {
    return ce.fromCode(1201, e);
  }
  static factorKeyAlreadyExists(e = "") {
    return ce.fromCode(1202, e);
  }
  static mfaAlreadyEnabled(e = "") {
    return ce.fromCode(1203, e);
  }
  static cannotDeleteLastFactor(e = "") {
    return ce.fromCode(1204, e);
  }
  static factorInUseCannotBeDeleted(e = "") {
    return ce.fromCode(1205, e);
  }
  static userNotLoggedIn(e = "") {
    return ce.fromCode(1206, e);
  }
  static providedFactorKeyInvalid(e = "") {
    return ce.fromCode(1207, e);
  }
  static factorEncsMissing(e = "") {
    return ce.fromCode(1208, e);
  }
  static noMetadataFound(e = "") {
    return ce.fromCode(1209, e);
  }
  static newShareIndexInvalid(e = "") {
    return ce.fromCode(1210, e);
  }
  static maximumFactorsReached(e = "") {
    return ce.fromCode(1211, e);
  }
  static noMetadataShareFound(e = "") {
    return ce.fromCode(1212, e);
  }
  static signaturesNotPresent(e = "") {
    return ce.fromCode(1213, e);
  }
  static factorPubsMissing(e = "") {
    return ce.fromCode(1214, e);
  }
  // Initialization and session management
  static commitChangesBeforeMFA(e = "") {
    return ce.fromCode(1301, e);
  }
  static mpcCoreKitNotInitialized(e = "") {
    return ce.fromCode(1302, e);
  }
}
oe(ce, "messages", {
  // Configuration errors
  1001: "You must specify a valid eip155 chain configuration in the options.",
  1002: "You must specify a web3auth clientId.",
  1003: "Unsupported storage type in this UX mode.",
  1004: "OAuth login is NOT supported in this UX mode.",
  1005: "No valid storage option found.",
  1006: "No data found in storage.",
  1007: "Invalid config.",
  // TSS and key management errors
  1101: "'tssLib' is required when running in this UX mode.",
  1102: "'tkey' instance has not been initialized.",
  1103: "Duplicate TSS index found. Ensure that each TSS index is unique.",
  1104: "Failed to retrieve node details. Please check your network connection and try again.",
  1105: "The prefetch TSS public keys exceeds the maximum allowed limit of 3.",
  1106: "Invalid 'TorusLoginResponse' data provided.",
  1107: "Invalid 'TorusAggregateLoginResponse' data provided.",
  1108: "Unsupported method type encountered in redirect result.",
  1109: "OAuthKey not present in state.",
  1110: "TSS Share Type (Index) not present in state when getting current factor key.",
  1111: "'tssPubKey' or 'torusNodeTSSEndpoints' are missing.",
  1112: "No active session found.",
  1113: "tssNonces not present in metadata when getting tss nonce.",
  1114: "A TSS key cannot be imported for an existing user who already has a key configured.",
  // Factor key and authentication errors
  1201: "factorKey not present in state when required.",
  1202: "A factor with the same key already exists.",
  1203: "MFA is already enabled.",
  1204: "Cannot delete the last remaining factor as at least one factor is required.",
  1205: "The factor currently in use cannot be deleted.",
  1206: "User is not logged in.",
  1207: "Provided factor key is invalid.",
  1208: "'factorEncs' mpt [resemt].",
  1209: "No metadata found for the provided factor key. Consider resetting your account if this error persists.",
  1210: "The new share index is not valid. It must be one of the valid share indices.",
  1211: "The maximum number of allowable factors (10) has been reached.",
  1212: "No metadata share found in the current polynomial.",
  1213: "No signatures found.",
  1214: "Factor public keys not present",
  // Initialization and session management
  1301: "The 'CommitChanges' method must be called before enabling MFA.",
  1302: "The MPC Core Kit is not initialized. Please ensure you call the 'init()' method to initialize the kit properly before attempting any operations."
});
let n5 = /* @__PURE__ */ function(t) {
  return t.secp256k1 = "secp256k1", t.ed25519 = "ed25519", t;
}({});
function r5(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t) if ({}.hasOwnProperty.call(t, r)) {
    if (e.includes(r)) continue;
    n[r] = t[r];
  }
  return n;
}
function n3(t, e) {
  if (t == null) return {};
  var n, r, i = r5(t, e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++) n = s[r], e.includes(n) || {}.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
  }
  return i;
}
const Vo = new Em.ec("secp256k1");
class fn {
  constructor(e, n) {
    oe(this, "x", void 0), oe(this, "y", void 0), this.x = new Kt(e, "hex"), this.y = new Kt(n, "hex");
  }
  static fromScalar(e, n) {
    const r = n.g.mul(e);
    return fn.fromElliptic(r);
  }
  /**
   * @deprecated Use `fromSEC1` instead.
   */
  static fromCompressedPub(e) {
    const r = Vo.keyFromPublic(e, "hex").getPublic();
    return new fn(r.getX(), r.getY());
  }
  static fromJSON(e) {
    const {
      x: n,
      y: r
    } = e;
    return new fn(n, r);
  }
  static fromElliptic(e) {
    return e.isInfinity() ? new fn(null, null) : new fn(e.getX(), e.getY());
  }
  /**
   * Construct a point from SEC1 format.
   */
  static fromSEC1(e, n) {
    if (n.length === 2 && n === "00") {
      const s = e.g.mul(new Kt(0));
      return fn.fromElliptic(s);
    }
    const i = e.keyFromPublic(n, "hex").getPublic();
    return fn.fromElliptic(i);
  }
  /**
   * @deprecated Use `toSEC1` instead.
   *
   * complies with EC and elliptic pub key types
   */
  encode(e) {
    switch (e) {
      case "arr":
        return xe.concat([xe.from("0x04", "hex"), xe.from(this.x.toString("hex"), "hex"), xe.from(this.y.toString("hex"), "hex")]);
      case "elliptic-compressed": {
        const r = Vo.keyFromPublic({
          x: this.x.toString("hex"),
          y: this.y.toString("hex")
        }, "hex");
        return xe.from(r.getPublic(!0, "hex"));
      }
      default:
        throw new Error("encoding doesnt exist in Point");
    }
  }
  toEllipticPoint(e) {
    return this.isIdentity() ? e.g.mul(new Kt(0)) : e.keyFromPublic({
      x: this.x.toString("hex"),
      y: this.y.toString("hex")
    }, "hex").getPublic();
  }
  /**
   * Returns this point encoded in SEC1 format.
   * @param ec - Curve which point is on.
   * @param compressed - Whether to use compressed format.
   * @returns The SEC1-encoded point.
   */
  toSEC1(e, n = !1) {
    if (this.isIdentity())
      return xe.from("00", "hex");
    const r = this.toEllipticPoint(e);
    return xe.from(r.encode("hex", n), "hex");
  }
  toJSON() {
    return {
      x: this.x.toString("hex"),
      y: this.y.toString("hex")
    };
  }
  isIdentity() {
    return this.x === null && this.y === null;
  }
  equals(e) {
    return this.isIdentity() ? e.isIdentity() : this.x.eq(e.x) && this.y.eq(e.y);
  }
}
var i5 = fn;
class r3 extends xm.ec {
  constructor() {
    super("ed25519");
  }
  bufferToScalar(e) {
    return new Kt(e, "le");
  }
  generateScalar() {
    return this.genKeyPair().getPrivate();
  }
  scalarToBuffer(e, n) {
    return e.toString("hex"), e.toArrayLike(n, "le", 32);
  }
  pointToBuffer(e, n) {
    const r = e.getX(), s = e.getY().toArrayLike(n, "le", 32);
    return s[s.length - 1] |= r.and(new Kt(1)).eqn(1) ? 128 : 0, s;
  }
}
const s5 = "x-web3-session-id", o5 = {
  Delimiter1: "",
  Delimiter2: "",
  Delimiter3: "",
  Delimiter4: ""
};
globalThis.tss_clients === void 0 && (globalThis.tss_clients = /* @__PURE__ */ new Map());
globalThis.js_read_msg === void 0 && (globalThis.js_read_msg = async function(t, e, n, r) {
  const i = globalThis.tss_clients.get(t);
  if (i.log(`reading msg, ${r}`), r === "ga1_worker_support")
    return "unsupported";
  const s = i.msgQueue.find((o) => o.sender === n && o.recipient === e && o.msg_type === r);
  return s ? s.msg_data : new Promise((o, a) => {
    let c = 0;
    const u = setInterval(() => {
      const f = i.msgQueue.find((l) => l.sender === n && l.recipient === e && l.msg_type === r);
      f !== void 0 && (clearInterval(u), o(f.msg_data)), c >= 1e3 && (clearInterval(u), a("Message not received in a reasonable time")), c++;
    }, 10);
  });
});
globalThis.js_send_msg === void 0 && (globalThis.js_send_msg = async function(t, e, n, r, i) {
  const s = globalThis.tss_clients.get(t);
  if (s.log(`sending msg, ${r}`), r.indexOf("ga1_data_unprocessed") > -1)
    throw new Error("ga1_data_unprocessed should not be sent directly");
  if (s.websocketOnly)
    s.sockets[n].emit("send_msg", {
      session: t,
      sender: e,
      recipient: n,
      msg_type: r,
      msg_data: i
    });
  else {
    const o = t.split(o5.Delimiter4)[1], a = s.lookupEndpoint(t, n);
    fetch(`${a}/send`, {
      method: "POST",
      headers: {
        [s5]: o,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: t,
        sender: e,
        recipient: n,
        msg_type: r,
        msg_data: i
      })
    });
  }
  return !0;
});
var a5 = { exports: {} };
const c5 = /* @__PURE__ */ _m(Pm);
(function(t) {
  (() => {
    var e = {};
    e.n = (y) => {
      var w = y && y.__esModule ? (
        /******/
        () => y.default
      ) : (
        /******/
        () => y
      );
      return e.d(w, { a: w }), w;
    }, e.d = (y, w) => {
      for (var h in w)
        e.o(w, h) && !e.o(y, h) && Object.defineProperty(y, h, { enumerable: !0, get: w[h] });
    }, e.o = (y, w) => Object.prototype.hasOwnProperty.call(y, w), e.r = (y) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(y, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(y, "__esModule", { value: !0 });
    };
    var n = {};
    e.r(n), e.d(n, {
      AwaitableMap: () => (
        /* reexport */
        s
      ),
      MapQueue: () => (
        /* reexport */
        o
      ),
      deriveShareCoefficients: () => (
        /* reexport */
        d
      ),
      fraction: () => (
        /* reexport */
        u
      ),
      lagrangeCoefficient: () => (
        /* reexport */
        f
      ),
      lagrangeCoefficients: () => (
        /* reexport */
        l
      )
    });
    const r = c5;
    var i = /* @__PURE__ */ e.n(r);
    class s {
      constructor() {
        i()(this, "map", /* @__PURE__ */ new Map()), i()(this, "queue", /* @__PURE__ */ new Map());
      }
      get size() {
        return this.map.size;
      }
      getSync(w) {
        return this.map.get(w);
      }
      /**
       * Gets the value at key `k`, or waits for the duration of `timeout` for a
       * corresponding value to be set. If `timeout` is reached, returns
       * `undefined`.
       */
      async get(w, h = 0) {
        const g = this.map.get(w);
        return g || new Promise((b) => {
          const E = {
            resolve: b,
            timeout: setTimeout(() => {
              const N = this.queue.get(w);
              if (N) {
                const O = N.indexOf(E);
                O >= 0 && N.splice(O, 1);
              }
              b(void 0);
            }, h)
          };
          let S = this.queue.get(w);
          S || (S = [], this.queue.set(w, S)), S.push(E);
        });
      }
      set(w, h) {
        this.map.set(w, h);
        const g = this.queue.get(w);
        if (g) {
          for (const b of g)
            clearTimeout(b.timeout), b.resolve(h);
          this.queue.delete(w);
        }
      }
      delete(w) {
        this.map.delete(w), this.queue.delete(w);
      }
      forEach(w) {
        this.map.forEach(w);
      }
      clear() {
        this.map.clear(), this.queue.clear();
      }
    }
    class o {
      constructor() {
        i()(this, "buffer", /* @__PURE__ */ new Map()), i()(this, "queue", /* @__PURE__ */ new Map());
      }
      /**
       * Pops the next value queued for key `k` from the buffer, or waits for the
       * duration of `timeout` for a corresponding value to arrive. If `timeout` is
       * reached, returns `undefined`.
       */
      async pop(w, h = 0) {
        const g = this.buffer.get(w);
        return g && g.length > 0 ? g.splice(0, 1)[0] : new Promise((b) => {
          const E = {
            resolve: b,
            timeout: setTimeout(() => {
              const N = this.queue.get(w);
              if (N) {
                const O = N.indexOf(E);
                O >= 0 && N.splice(O, 1);
              }
              b(void 0);
            }, h)
          };
          let S = this.queue.get(w);
          S || (S = [], this.queue.set(w, S)), S.push(E);
        });
      }
      push(w, h) {
        const g = this.queue.get(w);
        if (g && g.length > 0) {
          const E = g.splice(0, 1)[0];
          clearTimeout(E.timeout), E.resolve(h);
          return;
        }
        let b = this.buffer.get(w);
        b || (b = [], this.buffer.set(w, b)), b.push(h);
      }
      delete(w) {
        this.buffer.delete(w), this.queue.delete(w);
      }
      forEach(w) {
        this.buffer.forEach((h, g) => {
          h.forEach((b) => {
            w(b, g);
          });
        });
      }
      clear() {
        this.buffer.clear(), this.queue.clear();
      }
    }
    const a = vm;
    var c = /* @__PURE__ */ e.n(a);
    function u(y, w, h) {
      return y.mul(w.invm(h)).umod(h);
    }
    function f(y, w, h, g) {
      return y.filter((b, E) => E !== w).reduce((b, E) => {
        const S = u(h.sub(E), y[w].sub(E), g);
        return b.mul(S).umod(g);
      }, new (c())(1));
    }
    function l(y, w, h) {
      const g = y.map((E) => new (c())(E)), b = new (c())(w);
      return g.map((E, S) => f(g, S, b, h));
    }
    function d(y, w, h, g = 1, b = 2) {
      const E = l([g, b], 0, h), S = l(y, 0, h);
      if (y.includes(w))
        throw new Error(`Invalid server x-coordinates: overlapping with client x-coordinate: ${y} ${w}`);
      const N = l([w, ...y], 0, h), O = S.map((L, p) => u(E[0].mul(L), N[p + 1], h)), C = u(E[1], N[0], h);
      return {
        serverCoefficients: O,
        clientCoefficient: C
      };
    }
    t.exports = n;
  })();
})(a5);
const ve = {
  MAINNET: "mainnet",
  TESTNET: "testnet",
  CYAN: "cyan",
  AQUA: "aqua",
  CELESTE: "celeste"
}, jn = {
  SAPPHIRE_DEVNET: "sapphire_devnet",
  SAPPHIRE_MAINNET: "sapphire_mainnet"
};
ve.MAINNET + "", ve.TESTNET + "", ve.CYAN + "", ve.AQUA + "", ve.CELESTE + "";
ve.AQUA + "", jn.SAPPHIRE_MAINNET, ve.CELESTE + "", jn.SAPPHIRE_MAINNET, ve.CYAN + "", jn.SAPPHIRE_MAINNET, ve.MAINNET + "", jn.SAPPHIRE_MAINNET, ve.TESTNET + "", jn.SAPPHIRE_DEVNET;
ve.MAINNET + "", ve.TESTNET + "", ve.CYAN + "", ve.AQUA + "", ve.CELESTE + "";
jn.SAPPHIRE_MAINNET + "", jn.SAPPHIRE_DEVNET + "", ve.MAINNET + "", ve.TESTNET + "", ve.CYAN + "", ve.AQUA + "", ve.CELESTE + "";
ve.MAINNET + "", ve.TESTNET + "", ve.CYAN + "", ve.AQUA + "", ve.CELESTE + "";
function t0(t) {
  let e = !1, n = 0, r;
  try {
    r = window[t], e = !0, n = r.length;
    const i = "__storage_test__";
    return r.setItem(i, i), r.removeItem(i), !0;
  } catch (i) {
    const s = i;
    return s && // everything except Firefox
    (s.code === 22 || // Firefox
    s.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    s.name === "QuotaExceededError" || // Firefox
    s.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
    e && n !== 0;
  }
}
class u5 {
  constructor() {
    oe(this, "store", /* @__PURE__ */ new Map());
  }
  getItem(e) {
    return this.store.get(e) || null;
  }
  setItem(e, n) {
    this.store.set(e, n);
  }
  removeItem(e) {
    this.store.delete(e);
  }
}
class f5 {
  constructor(e, n) {
    oe(this, "storage", void 0), oe(this, "_storeKey", void 0), this.storage = n, this._storeKey = e;
    try {
      n.getItem(e) || this.resetStore();
    } catch {
    }
  }
  static getInstance(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "local";
    if (!this.instanceMap.has(e)) {
      let r;
      n === "local" && t0("localStorage") ? r = window.localStorage : n === "session" && t0("sessionStorage") ? r = window.sessionStorage : r = new u5(), this.instanceMap.set(e, new this(e, r));
    }
    return this.instanceMap.get(e);
  }
  toJSON() {
    return this.storage.getItem(this._storeKey);
  }
  resetStore() {
    const e = this.getStore();
    return this.storage.removeItem(this._storeKey), e;
  }
  getStore() {
    return JSON.parse(this.storage.getItem(this._storeKey) || "{}");
  }
  get(e) {
    return JSON.parse(this.storage.getItem(this._storeKey) || "{}")[e];
  }
  set(e, n) {
    const r = JSON.parse(this.storage.getItem(this._storeKey) || "{}");
    r[e] = n, this.storage.setItem(this._storeKey, JSON.stringify(r));
  }
}
oe(f5, "instanceMap", /* @__PURE__ */ new Map());
le(le({}, jn), ve);
function l5(t) {
  if (t.length !== 65)
    throw new Error(`Invalid signature length: expected 65, got ${t.length}`);
  return {
    r: t.subarray(0, 32),
    s: t.subarray(32, 64),
    v: t[64]
  };
}
function i3(t) {
  if (t.keyType !== n5.secp256k1)
    throw new Error(`Invalid key type: expected secp256k1, got ${t.keyType}`);
  return {
    sign: async (e) => {
      const n = await t.sign(e, !0);
      return l5(n);
    },
    getPublic: async () => i5.fromSEC1(Vo, t.getPubKey().toString("hex")).toSEC1(Vo).subarray(1)
  };
}
const d5 = nf.getLogger("mpc-core-kit");
d5.disableAll();
class h5 extends tS {
  constructor({
    config: e,
    state: n
  }) {
    if (super({
      config: e,
      state: n
    }), oe(this, "_providerEngineProxy", null), oe(this, "keyExportFlagSetByCode", !1), !e.chainConfig) throw ke.invalidProviderConfigError("Please provide chainConfig");
    if (!e.chainConfig.chainId) throw ke.invalidProviderConfigError("Please provide chainId inside chainConfig");
    if (!e.chainConfig.rpcTarget) throw ke.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");
    typeof e.keyExportEnabled == "boolean" && (this.keyExportFlagSetByCode = !0), this.defaultState = {
      chainId: "loading"
    }, this.defaultConfig = {
      chainConfig: e.chainConfig,
      networks: {
        [e.chainConfig.chainId]: e.chainConfig
      },
      keyExportEnabled: typeof e.keyExportEnabled == "boolean" ? e.keyExportEnabled : !0
    }, super.initialize();
  }
  get currentChainConfig() {
    return this.config.chainConfig;
  }
  get provider() {
    return this._providerEngineProxy;
  }
  get chainId() {
    return this.state.chainId;
  }
  set provider(e) {
    throw new Error("Method not implemented.");
  }
  async request(e) {
    var n;
    if (!e || typeof e != "object" || Array.isArray(e))
      throw we.invalidRequest({
        message: dn.invalidRequestArgs().message,
        data: le(le({}, e || {}), {}, {
          cause: dn.invalidRequestArgs().message
        })
      });
    const {
      method: r,
      params: i
    } = e;
    if (typeof r != "string" || r.length === 0)
      throw we.invalidRequest({
        message: dn.invalidRequestMethod().message,
        data: le(le({}, e || {}), {}, {
          cause: dn.invalidRequestMethod().message
        })
      });
    if (i !== void 0 && !Array.isArray(i) && (typeof i != "object" || i === null))
      throw we.invalidRequest({
        message: dn.invalidRequestParams().message,
        data: le(le({}, e || {}), {}, {
          cause: dn.invalidRequestParams().message
        })
      });
    return (n = this.provider) === null || n === void 0 ? void 0 : n.request(e);
  }
  sendAsync(e, n) {
    return n ? this.send(e, n) : this.request(e);
  }
  send(e, n) {
    this.request(e).then((r) => n(null, {
      result: r
    })).catch((r) => n(r, null));
  }
  addChain(e) {
    if (!e.chainId || !e.rpcTarget) throw we.invalidParams("chainId is required");
    this.configure({
      networks: le(le({}, this.config.networks), {}, {
        [e.chainId]: e
      })
    });
  }
  getChainConfig(e) {
    var n;
    const r = (n = this.config.networks) === null || n === void 0 ? void 0 : n[e];
    if (!r) throw we.invalidRequest(`Chain ${e} is not supported, please add chainConfig for it`);
    return r;
  }
  updateProviderEngineProxy(e) {
    this._providerEngineProxy ? this._providerEngineProxy.setTarget(e) : this._providerEngineProxy = oS(e);
  }
  setKeyExportFlag(e) {
    this.keyExportFlagSetByCode || this.configure({
      keyExportEnabled: e
    });
  }
  getProviderEngineProxy() {
    return this._providerEngineProxy;
  }
}
function p5({
  getAccounts: t,
  getPrivateKey: e,
  getPublicKey: n,
  processEthSignMessage: r,
  processPersonalMessage: i,
  processTransaction: s,
  processSignTransaction: o,
  processTypedMessageV4: a
}) {
  if (!t)
    throw new Error("opts.getAccounts is required");
  async function c(b, E) {
    if (typeof b == "string" && b.length > 0) {
      const N = (await t(E)).map((C) => C.toLowerCase()), O = b.toLowerCase();
      if (N.includes(O))
        return O;
    }
    throw we.invalidParams({
      message: "Invalid parameters: must provide an Ethereum address."
    });
  }
  async function u(b, E) {
    E.result = await t(b);
  }
  async function f(b, E) {
    if (!s)
      throw we.methodNotSupported();
    const S = b.params[0] || {
      from: ""
    };
    S.from = await c(S.from, b), E.result = await s(S, b);
  }
  async function l(b, E) {
    if (!o)
      throw we.methodNotSupported();
    const S = b.params[0] || {
      from: ""
    };
    S.from = await c(S.from, b), E.result = await o(S, b);
  }
  async function d(b, E) {
    if (!r)
      throw we.methodNotSupported();
    let S = b.params;
    const N = b.params[2] || {};
    if (Array.isArray(b.params)) {
      if (b.params.length !== 2) throw new Error(`WalletMiddleware - incorrect params for ${b.method} method. expected [address, message]`);
      const O = b.params, C = O[0], L = O[1];
      S = {
        from: C,
        data: L
      };
    }
    S = le(le({}, N), S), E.result = await r(S, b);
  }
  async function y(b, E) {
    if (!a)
      throw we.methodNotSupported();
    if (!(b != null && b.params)) throw new Error("WalletMiddleware - missing params");
    let S = b.params;
    if (Array.isArray(b.params)) {
      if (b.params.length !== 2) throw new Error(`WalletMiddleware - incorrect params for ${b.method} method. expected [address, typedData]`);
      const N = b.params, O = N[0], C = N[1];
      S = {
        from: O,
        data: C
      };
    }
    E.result = await a(S, b);
  }
  async function w(b, E) {
    if (!i)
      throw we.methodNotSupported();
    let S = b.params;
    const N = b.params[2] || {};
    if (Array.isArray(b.params)) {
      if (!(b.params.length >= 2)) throw new Error(`WalletMiddleware - incorrect params for ${b.method} method. expected [message, address]`);
      const O = b.params;
      if (typeof O[0] == "object") {
        const {
          challenge: C,
          address: L
        } = O[0];
        S = {
          from: L,
          data: C
        };
      } else {
        const C = O[0];
        S = {
          from: O[1],
          data: C
        };
      }
    }
    S = le(le({}, N), S), E.result = await i(S, b);
  }
  async function h(b, E) {
    if (!e)
      throw we.methodNotSupported();
    E.result = e(b);
  }
  async function g(b, E) {
    if (!n)
      throw we.methodNotSupported();
    E.result = n(b);
  }
  return pa({
    // account lookups
    eth_accounts: it(u),
    eth_private_key: it(h),
    eth_public_key: it(g),
    public_key: it(g),
    private_key: it(h),
    // tx signatures
    eth_sendTransaction: it(f),
    eth_signTransaction: it(l),
    // message signatures
    eth_sign: it(d),
    eth_signTypedData_v4: it(y),
    personal_sign: it(w)
  });
}
function g5(t) {
  const {
    getAccounts: e,
    getPrivateKey: n,
    getPublicKey: r,
    processTransaction: i,
    processSignTransaction: s,
    processEthSignMessage: o,
    processTypedMessageV4: a,
    processPersonalMessage: c
  } = t;
  return ug([pa({
    eth_syncing: !1
  }), p5({
    getAccounts: e,
    getPrivateKey: n,
    getPublicKey: r,
    processTransaction: i,
    processEthSignMessage: o,
    processSignTransaction: s,
    processTypedMessageV4: a,
    processPersonalMessage: c
  })]);
}
function y5({
  addChain: t,
  switchChain: e
}) {
  async function n(i, s) {
    var o;
    const a = (o = i.params) !== null && o !== void 0 && o.length ? i.params[0] : void 0;
    if (!a) throw we.invalidParams("Missing chain params");
    if (!a.chainId) throw we.invalidParams("Missing chainId in chainParams");
    if (!a.rpcUrls || a.rpcUrls.length === 0) throw we.invalidParams("Missing rpcUrls in chainParams");
    if (!a.nativeCurrency) throw we.invalidParams("Missing nativeCurrency in chainParams");
    s.result = await t(a);
  }
  async function r(i, s) {
    var o;
    const a = (o = i.params) !== null && o !== void 0 && o.length ? i.params[0] : void 0;
    if (!a) throw we.invalidParams("Missing chainId");
    s.result = await e(a);
  }
  return pa({
    wallet_addEthereumChain: it(n),
    wallet_switchEthereumChain: it(r)
  });
}
function b5(t) {
  return (e, n, r, i) => e.method === "eth_chainId" ? (n.result = t, i()) : r();
}
function m5(t) {
  return (e, n, r, i) => e.method === "eth_provider_config" ? (n.result = t, i()) : r();
}
function w5(t) {
  const {
    chainId: e,
    rpcTarget: n
  } = t, r = hS({
    rpcTarget: n
  });
  return {
    networkMiddleware: ug([b5(e), m5(t), r]),
    fetchMiddleware: r
  };
}
const ib = "6.13.4";
function Wo(t, e, n) {
  for (let r in e) {
    let i = e[r];
    Object.defineProperty(t, r, { enumerable: !0, value: i, writable: !1 });
  }
}
function Zr(t) {
  if (t == null)
    return "null";
  if (Array.isArray(t))
    return "[ " + t.map(Zr).join(", ") + " ]";
  if (t instanceof Uint8Array) {
    const e = "0123456789abcdef";
    let n = "0x";
    for (let r = 0; r < t.length; r++)
      n += e[t[r] >> 4], n += e[t[r] & 15];
    return n;
  }
  if (typeof t == "object" && typeof t.toJSON == "function")
    return Zr(t.toJSON());
  switch (typeof t) {
    case "boolean":
    case "symbol":
      return t.toString();
    case "bigint":
      return BigInt(t).toString();
    case "number":
      return t.toString();
    case "string":
      return JSON.stringify(t);
    case "object": {
      const e = Object.keys(t);
      return e.sort(), "{ " + e.map((n) => `${Zr(n)}: ${Zr(t[n])}`).join(", ") + " }";
    }
  }
  return "[ COULD NOT SERIALIZE ]";
}
function sb(t, e, n) {
  let r = t;
  {
    const s = [];
    if (n) {
      if ("message" in n || "code" in n || "name" in n)
        throw new Error(`value will overwrite populated values: ${Zr(n)}`);
      for (const o in n) {
        if (o === "shortMessage")
          continue;
        const a = n[o];
        s.push(o + "=" + Zr(a));
      }
    }
    s.push(`code=${e}`), s.push(`version=${ib}`), s.length && (t += " (" + s.join(", ") + ")");
  }
  let i;
  switch (e) {
    case "INVALID_ARGUMENT":
      i = new TypeError(t);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      i = new RangeError(t);
      break;
    default:
      i = new Error(t);
  }
  return Wo(i, { code: e }), n && Object.assign(i, n), i.shortMessage == null && Wo(i, { shortMessage: r }), i;
}
function He(t, e, n, r) {
  if (!t)
    throw sb(e, n, r);
}
function z(t, e, n, r) {
  He(t, e, "INVALID_ARGUMENT", { argument: n, value: r });
}
["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
  try {
    if ("test".normalize(e) !== "test")
      throw new Error("bad");
    if (e === "NFD" && "é".normalize("NFD") !== "é")
      throw new Error("broken");
    t.push(e);
  } catch {
  }
  return t;
}, []);
function ob(t, e, n) {
  if (t !== e) {
    let r = n, i = "new";
    r += ".", i += " " + n, He(!1, `private constructor; use ${r}from* methods`, "UNSUPPORTED_OPERATION", {
      operation: i
    });
  }
}
function ab(t, e, n) {
  if (t instanceof Uint8Array)
    return n ? new Uint8Array(t) : t;
  if (typeof t == "string" && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
    const r = new Uint8Array((t.length - 2) / 2);
    let i = 2;
    for (let s = 0; s < r.length; s++)
      r[s] = parseInt(t.substring(i, i + 2), 16), i += 2;
    return r;
  }
  z(!1, "invalid BytesLike value", e || "value", t);
}
function Ae(t, e) {
  return ab(t, e, !1);
}
function zr(t, e) {
  return ab(t, e, !0);
}
function Dt(t, e) {
  return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && t.length !== 2 + 2 * e || e === !0 && t.length % 2 !== 0);
}
function fl(t) {
  return Dt(t, !0) || t instanceof Uint8Array;
}
const n0 = "0123456789abcdef";
function he(t) {
  const e = Ae(t);
  let n = "0x";
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    n += n0[(i & 240) >> 4] + n0[i & 15];
  }
  return n;
}
function ht(t) {
  return "0x" + t.map((e) => he(e).substring(2)).join("");
}
function ti(t) {
  return Dt(t, !0) ? (t.length - 2) / 2 : Ae(t).length;
}
function E5(t, e, n) {
  const r = Ae(t);
  He(e >= r.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(r),
    length: e,
    offset: e + 1
  });
  const i = new Uint8Array(e);
  return i.fill(0), i.set(r, e - r.length), he(i);
}
function Nr(t, e) {
  return E5(t, e);
}
const ll = BigInt(0), ur = BigInt(1), Yr = 9007199254740991;
function cb(t, e) {
  let n = Le(t, "value");
  const r = BigInt(Yt(e, "width")), i = ur << r - ur;
  if (n < ll) {
    n = -n, He(n <= i, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: t
    });
    const s = (ur << r) - ur;
    return (~n & s) + ur;
  } else
    He(n < i, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: t
    });
  return n;
}
function ub(t, e) {
  const n = Oa(t, "value"), r = BigInt(Yt(e, "bits"));
  return n & (ur << r) - ur;
}
function Le(t, e) {
  switch (typeof t) {
    case "bigint":
      return t;
    case "number":
      return z(Number.isInteger(t), "underflow", e || "value", t), z(t >= -Yr && t <= Yr, "overflow", e || "value", t), BigInt(t);
    case "string":
      try {
        if (t === "")
          throw new Error("empty string");
        return t[0] === "-" && t[1] !== "-" ? -BigInt(t.substring(1)) : BigInt(t);
      } catch (n) {
        z(!1, `invalid BigNumberish string: ${n.message}`, e || "value", t);
      }
  }
  z(!1, "invalid BigNumberish value", e || "value", t);
}
function Oa(t, e) {
  const n = Le(t, e);
  return He(n >= ll, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value: t
  }), n;
}
function Yt(t, e) {
  switch (typeof t) {
    case "bigint":
      return z(t >= -Yr && t <= Yr, "overflow", e || "value", t), Number(t);
    case "number":
      return z(Number.isInteger(t), "underflow", e || "value", t), z(t >= -Yr && t <= Yr, "overflow", e || "value", t), t;
    case "string":
      try {
        if (t === "")
          throw new Error("empty string");
        return Yt(BigInt(t), e);
      } catch (n) {
        z(!1, `invalid numeric string: ${n.message}`, e || "value", t);
      }
  }
  z(!1, "invalid numeric value", e || "value", t);
}
function Ni(t, e) {
  let r = Oa(t, "value").toString(16);
  {
    const i = Yt(e, "width");
    for (He(i * 2 >= r.length, `value exceeds width (${i} bytes)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: t
    }); r.length < i * 2; )
      r = "0" + r;
  }
  return "0x" + r;
}
function ct(t) {
  const e = Oa(t, "value");
  if (e === ll)
    return new Uint8Array([]);
  let n = e.toString(16);
  n.length % 2 && (n = "0" + n);
  const r = new Uint8Array(n.length / 2);
  for (let i = 0; i < r.length; i++) {
    const s = i * 2;
    r[i] = parseInt(n.substring(s, s + 2), 16);
  }
  return r;
}
function fb(t) {
  let e = he(fl(t) ? t : ct(t)).substring(2);
  for (; e.startsWith("0"); )
    e = e.substring(1);
  return e === "" && (e = "0"), "0x" + e;
}
function us(t, e) {
  z(typeof t == "string", "invalid string value", "str", t);
  let n = [];
  for (let r = 0; r < t.length; r++) {
    const i = t.charCodeAt(r);
    if (i < 128)
      n.push(i);
    else if (i < 2048)
      n.push(i >> 6 | 192), n.push(i & 63 | 128);
    else if ((i & 64512) == 55296) {
      r++;
      const s = t.charCodeAt(r);
      z(r < t.length && (s & 64512) === 56320, "invalid surrogate pair", "str", t);
      const o = 65536 + ((i & 1023) << 10) + (s & 1023);
      n.push(o >> 18 | 240), n.push(o >> 12 & 63 | 128), n.push(o >> 6 & 63 | 128), n.push(o & 63 | 128);
    } else
      n.push(i >> 12 | 224), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
  }
  return new Uint8Array(n);
}
function x5(t) {
  let e = t.toString(16);
  for (; e.length < 2; )
    e = "0" + e;
  return "0x" + e;
}
function r0(t, e, n) {
  let r = 0;
  for (let i = 0; i < n; i++)
    r = r * 256 + t[e + i];
  return r;
}
function i0(t, e, n, r) {
  const i = [];
  for (; n < e + 1 + r; ) {
    const s = lb(t, n);
    i.push(s.result), n += s.consumed, He(n <= e + 1 + r, "child data too short", "BUFFER_OVERRUN", {
      buffer: t,
      length: r,
      offset: e
    });
  }
  return { consumed: 1 + r, result: i };
}
function lb(t, e) {
  He(t.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: t,
    length: 0,
    offset: 1
  });
  const n = (r) => {
    He(r <= t.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: t,
      length: t.length,
      offset: r
    });
  };
  if (t[e] >= 248) {
    const r = t[e] - 247;
    n(e + 1 + r);
    const i = r0(t, e + 1, r);
    return n(e + 1 + r + i), i0(t, e, e + 1 + r, r + i);
  } else if (t[e] >= 192) {
    const r = t[e] - 192;
    return n(e + 1 + r), i0(t, e, e + 1, r);
  } else if (t[e] >= 184) {
    const r = t[e] - 183;
    n(e + 1 + r);
    const i = r0(t, e + 1, r);
    n(e + 1 + r + i);
    const s = he(t.slice(e + 1 + r, e + 1 + r + i));
    return { consumed: 1 + r + i, result: s };
  } else if (t[e] >= 128) {
    const r = t[e] - 128;
    n(e + 1 + r);
    const i = he(t.slice(e + 1, e + 1 + r));
    return { consumed: 1 + r, result: i };
  }
  return { consumed: 1, result: x5(t[e]) };
}
function no(t) {
  const e = Ae(t, "data"), n = lb(e, 0);
  return z(n.consumed === e.length, "unexpected junk after rlp payload", "data", t), n.result;
}
function s0(t) {
  const e = [];
  for (; t; )
    e.unshift(t & 255), t >>= 8;
  return e;
}
function db(t) {
  if (Array.isArray(t)) {
    let r = [];
    if (t.forEach(function(s) {
      r = r.concat(db(s));
    }), r.length <= 55)
      return r.unshift(192 + r.length), r;
    const i = s0(r.length);
    return i.unshift(247 + i.length), i.concat(r);
  }
  const e = Array.prototype.slice.call(Ae(t, "object"));
  if (e.length === 1 && e[0] <= 127)
    return e;
  if (e.length <= 55)
    return e.unshift(128 + e.length), e;
  const n = s0(e.length);
  return n.unshift(183 + n.length), n.concat(e);
}
const o0 = "0123456789abcdef";
function Rr(t) {
  let e = "0x";
  for (const n of db(t))
    e += o0[n >> 4], e += o0[n & 15];
  return e;
}
function Ko(t) {
  if (!Number.isSafeInteger(t) || t < 0)
    throw new Error(`Wrong positive integer: ${t}`);
}
function dl(t, ...e) {
  if (!(t instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function v5(t) {
  if (typeof t != "function" || typeof t.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ko(t.outputLen), Ko(t.blockLen);
}
function Ri(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function hb(t, e) {
  dl(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Uc = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const pb = (t) => t instanceof Uint8Array, S5 = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)), Dc = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), zt = (t, e) => t << 32 - e | t >>> e, _5 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!_5)
  throw new Error("Non little-endian hardware is not supported");
function A5(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function Ca(t) {
  if (typeof t == "string" && (t = A5(t)), !pb(t))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function I5(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return t.forEach((r) => {
    if (!pb(r))
      throw new Error("Uint8Array expected");
    e.set(r, n), n += r.length;
  }), e;
}
class hl {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function pl(t) {
  const e = (r) => t().update(Ca(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function P5(t = 32) {
  if (Uc && typeof Uc.getRandomValues == "function")
    return Uc.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
class gb extends hl {
  constructor(e, n) {
    super(), this.finished = !1, this.destroyed = !1, v5(e);
    const r = Ca(n);
    if (this.iHash = e.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const i = this.blockLen, s = new Uint8Array(i);
    s.set(r.length > i ? e.create().update(r).digest() : r);
    for (let o = 0; o < s.length; o++)
      s[o] ^= 54;
    this.iHash.update(s), this.oHash = e.create();
    for (let o = 0; o < s.length; o++)
      s[o] ^= 106;
    this.oHash.update(s), s.fill(0);
  }
  update(e) {
    return Ri(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Ri(this), dl(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: i, destroyed: s, blockLen: o, outputLen: a } = this;
    return e = e, e.finished = i, e.destroyed = s, e.blockLen = o, e.outputLen = a, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const yb = (t, e, n) => new gb(t, e).update(n).digest();
yb.create = (t, e) => new gb(t, e);
function B5(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const i = BigInt(32), s = BigInt(4294967295), o = Number(n >> i & s), a = Number(n & s), c = r ? 4 : 0, u = r ? 0 : 4;
  t.setUint32(e + c, o, r), t.setUint32(e + u, a, r);
}
class bb extends hl {
  constructor(e, n, r, i) {
    super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Dc(this.buffer);
  }
  update(e) {
    Ri(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = Ca(e);
    const s = e.length;
    for (let o = 0; o < s; ) {
      const a = Math.min(i - this.pos, s - o);
      if (a === i) {
        const c = Dc(e);
        for (; i <= s - o; o += i)
          this.process(c, o);
        continue;
      }
      r.set(e.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === i && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Ri(this), hb(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: i, isLE: s } = this;
    let { pos: o } = this;
    n[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(r, 0), o = 0);
    for (let l = o; l < i; l++)
      n[l] = 0;
    B5(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const a = Dc(e), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const u = c / 4, f = this.get();
    if (u > f.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let l = 0; l < u; l++)
      a.setUint32(4 * l, f[l], s);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: s, destroyed: o, pos: a } = this;
    return e.length = i, e.pos = a, e.finished = s, e.destroyed = o, i % n && e.buffer.set(r), e;
  }
}
const T5 = (t, e, n) => t & e ^ ~t & n, $5 = (t, e, n) => t & e ^ t & n ^ e & n, N5 = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), kn = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Ln = /* @__PURE__ */ new Uint32Array(64);
class R5 extends bb {
  constructor() {
    super(64, 32, 8, !1), this.A = kn[0] | 0, this.B = kn[1] | 0, this.C = kn[2] | 0, this.D = kn[3] | 0, this.E = kn[4] | 0, this.F = kn[5] | 0, this.G = kn[6] | 0, this.H = kn[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: i, E: s, F: o, G: a, H: c } = this;
    return [e, n, r, i, s, o, a, c];
  }
  // prettier-ignore
  set(e, n, r, i, s, o, a, c) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = s | 0, this.F = o | 0, this.G = a | 0, this.H = c | 0;
  }
  process(e, n) {
    for (let l = 0; l < 16; l++, n += 4)
      Ln[l] = e.getUint32(n, !1);
    for (let l = 16; l < 64; l++) {
      const d = Ln[l - 15], y = Ln[l - 2], w = zt(d, 7) ^ zt(d, 18) ^ d >>> 3, h = zt(y, 17) ^ zt(y, 19) ^ y >>> 10;
      Ln[l] = h + Ln[l - 7] + w + Ln[l - 16] | 0;
    }
    let { A: r, B: i, C: s, D: o, E: a, F: c, G: u, H: f } = this;
    for (let l = 0; l < 64; l++) {
      const d = zt(a, 6) ^ zt(a, 11) ^ zt(a, 25), y = f + d + T5(a, c, u) + N5[l] + Ln[l] | 0, h = (zt(r, 2) ^ zt(r, 13) ^ zt(r, 22)) + $5(r, i, s) | 0;
      f = u, u = c, c = a, a = o + y | 0, o = s, s = i, i = r, r = y + h | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, f = f + this.H | 0, this.set(r, i, s, o, a, c, u, f);
  }
  roundClean() {
    Ln.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const mb = /* @__PURE__ */ pl(() => new R5()), So = /* @__PURE__ */ BigInt(2 ** 32 - 1), Ku = /* @__PURE__ */ BigInt(32);
function wb(t, e = !1) {
  return e ? { h: Number(t & So), l: Number(t >> Ku & So) } : { h: Number(t >> Ku & So) | 0, l: Number(t & So) | 0 };
}
function Eb(t, e = !1) {
  let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: o } = wb(t[i], e);
    [n[i], r[i]] = [s, o];
  }
  return [n, r];
}
const O5 = (t, e) => BigInt(t >>> 0) << Ku | BigInt(e >>> 0), C5 = (t, e, n) => t >>> n, k5 = (t, e, n) => t << 32 - n | e >>> n, L5 = (t, e, n) => t >>> n | e << 32 - n, M5 = (t, e, n) => t << 32 - n | e >>> n, F5 = (t, e, n) => t << 64 - n | e >>> n - 32, U5 = (t, e, n) => t >>> n - 32 | e << 64 - n, D5 = (t, e) => e, j5 = (t, e) => t, xb = (t, e, n) => t << n | e >>> 32 - n, vb = (t, e, n) => e << n | t >>> 32 - n, Sb = (t, e, n) => e << n - 32 | t >>> 64 - n, _b = (t, e, n) => t << n - 32 | e >>> 64 - n;
function H5(t, e, n, r) {
  const i = (e >>> 0) + (r >>> 0);
  return { h: t + n + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const G5 = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0), q5 = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0, z5 = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0), V5 = (t, e, n, r, i) => e + n + r + i + (t / 2 ** 32 | 0) | 0, W5 = (t, e, n, r, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0), K5 = (t, e, n, r, i, s) => e + n + r + i + s + (t / 2 ** 32 | 0) | 0, fe = {
  fromBig: wb,
  split: Eb,
  toBig: O5,
  shrSH: C5,
  shrSL: k5,
  rotrSH: L5,
  rotrSL: M5,
  rotrBH: F5,
  rotrBL: U5,
  rotr32H: D5,
  rotr32L: j5,
  rotlSH: xb,
  rotlSL: vb,
  rotlBH: Sb,
  rotlBL: _b,
  add: H5,
  add3L: G5,
  add3H: q5,
  add4L: z5,
  add4H: V5,
  add5H: K5,
  add5L: W5
}, [Z5, Y5] = fe.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((t) => BigInt(t))), Mn = /* @__PURE__ */ new Uint32Array(80), Fn = /* @__PURE__ */ new Uint32Array(80);
class J5 extends bb {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: n, Bh: r, Bl: i, Ch: s, Cl: o, Dh: a, Dl: c, Eh: u, El: f, Fh: l, Fl: d, Gh: y, Gl: w, Hh: h, Hl: g } = this;
    return [e, n, r, i, s, o, a, c, u, f, l, d, y, w, h, g];
  }
  // prettier-ignore
  set(e, n, r, i, s, o, a, c, u, f, l, d, y, w, h, g) {
    this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = s | 0, this.Cl = o | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = u | 0, this.El = f | 0, this.Fh = l | 0, this.Fl = d | 0, this.Gh = y | 0, this.Gl = w | 0, this.Hh = h | 0, this.Hl = g | 0;
  }
  process(e, n) {
    for (let S = 0; S < 16; S++, n += 4)
      Mn[S] = e.getUint32(n), Fn[S] = e.getUint32(n += 4);
    for (let S = 16; S < 80; S++) {
      const N = Mn[S - 15] | 0, O = Fn[S - 15] | 0, C = fe.rotrSH(N, O, 1) ^ fe.rotrSH(N, O, 8) ^ fe.shrSH(N, O, 7), L = fe.rotrSL(N, O, 1) ^ fe.rotrSL(N, O, 8) ^ fe.shrSL(N, O, 7), p = Mn[S - 2] | 0, x = Fn[S - 2] | 0, _ = fe.rotrSH(p, x, 19) ^ fe.rotrBH(p, x, 61) ^ fe.shrSH(p, x, 6), P = fe.rotrSL(p, x, 19) ^ fe.rotrBL(p, x, 61) ^ fe.shrSL(p, x, 6), I = fe.add4L(L, P, Fn[S - 7], Fn[S - 16]), A = fe.add4H(I, C, _, Mn[S - 7], Mn[S - 16]);
      Mn[S] = A | 0, Fn[S] = I | 0;
    }
    let { Ah: r, Al: i, Bh: s, Bl: o, Ch: a, Cl: c, Dh: u, Dl: f, Eh: l, El: d, Fh: y, Fl: w, Gh: h, Gl: g, Hh: b, Hl: E } = this;
    for (let S = 0; S < 80; S++) {
      const N = fe.rotrSH(l, d, 14) ^ fe.rotrSH(l, d, 18) ^ fe.rotrBH(l, d, 41), O = fe.rotrSL(l, d, 14) ^ fe.rotrSL(l, d, 18) ^ fe.rotrBL(l, d, 41), C = l & y ^ ~l & h, L = d & w ^ ~d & g, p = fe.add5L(E, O, L, Y5[S], Fn[S]), x = fe.add5H(p, b, N, C, Z5[S], Mn[S]), _ = p | 0, P = fe.rotrSH(r, i, 28) ^ fe.rotrBH(r, i, 34) ^ fe.rotrBH(r, i, 39), I = fe.rotrSL(r, i, 28) ^ fe.rotrBL(r, i, 34) ^ fe.rotrBL(r, i, 39), A = r & s ^ r & a ^ s & a, R = i & o ^ i & c ^ o & c;
      b = h | 0, E = g | 0, h = y | 0, g = w | 0, y = l | 0, w = d | 0, { h: l, l: d } = fe.add(u | 0, f | 0, x | 0, _ | 0), u = a | 0, f = c | 0, a = s | 0, c = o | 0, s = r | 0, o = i | 0;
      const m = fe.add3L(_, I, R);
      r = fe.add3H(m, x, P, A), i = m | 0;
    }
    ({ h: r, l: i } = fe.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: s, l: o } = fe.add(this.Bh | 0, this.Bl | 0, s | 0, o | 0), { h: a, l: c } = fe.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: u, l: f } = fe.add(this.Dh | 0, this.Dl | 0, u | 0, f | 0), { h: l, l: d } = fe.add(this.Eh | 0, this.El | 0, l | 0, d | 0), { h: y, l: w } = fe.add(this.Fh | 0, this.Fl | 0, y | 0, w | 0), { h, l: g } = fe.add(this.Gh | 0, this.Gl | 0, h | 0, g | 0), { h: b, l: E } = fe.add(this.Hh | 0, this.Hl | 0, b | 0, E | 0), this.set(r, i, s, o, a, c, u, f, l, d, y, w, h, g, b, E);
  }
  roundClean() {
    Mn.fill(0), Fn.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const X5 = /* @__PURE__ */ pl(() => new J5());
function Q5() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof Ul < "u")
    return Ul;
  throw new Error("unable to locate global object");
}
const a0 = Q5();
a0.crypto || a0.msCrypto;
function eB(t) {
  switch (t) {
    case "sha256":
      return mb.create();
    case "sha512":
      return X5.create();
  }
  z(!1, "invalid hashing algorithm name", "algorithm", t);
}
const [Ab, Ib, Pb] = [[], [], []], tB = /* @__PURE__ */ BigInt(0), is = /* @__PURE__ */ BigInt(1), nB = /* @__PURE__ */ BigInt(2), rB = /* @__PURE__ */ BigInt(7), iB = /* @__PURE__ */ BigInt(256), sB = /* @__PURE__ */ BigInt(113);
for (let t = 0, e = is, n = 1, r = 0; t < 24; t++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Ab.push(2 * (5 * r + n)), Ib.push((t + 1) * (t + 2) / 2 % 64);
  let i = tB;
  for (let s = 0; s < 7; s++)
    e = (e << is ^ (e >> rB) * sB) % iB, e & nB && (i ^= is << (is << /* @__PURE__ */ BigInt(s)) - is);
  Pb.push(i);
}
const [oB, aB] = /* @__PURE__ */ Eb(Pb, !0), c0 = (t, e, n) => n > 32 ? Sb(t, e, n) : xb(t, e, n), u0 = (t, e, n) => n > 32 ? _b(t, e, n) : vb(t, e, n);
function cB(t, e = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - e; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, u = n[c], f = n[c + 1], l = c0(u, f, 1) ^ n[a], d = u0(u, f, 1) ^ n[a + 1];
      for (let y = 0; y < 50; y += 10)
        t[o + y] ^= l, t[o + y + 1] ^= d;
    }
    let i = t[2], s = t[3];
    for (let o = 0; o < 24; o++) {
      const a = Ib[o], c = c0(i, s, a), u = u0(i, s, a), f = Ab[o];
      i = t[f], s = t[f + 1], t[f] = c, t[f + 1] = u;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++)
        n[a] = t[o + a];
      for (let a = 0; a < 10; a++)
        t[o + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
    }
    t[0] ^= oB[r], t[1] ^= aB[r];
  }
  n.fill(0);
}
class gl extends hl {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(e, n, r, i = !1, s = 24) {
    if (super(), this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Ko(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = S5(this.state);
  }
  keccak() {
    cB(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(e) {
    Ri(this);
    const { blockLen: n, state: r } = this;
    e = Ca(e);
    const i = e.length;
    for (let s = 0; s < i; ) {
      const o = Math.min(n - this.pos, i - s);
      for (let a = 0; a < o; a++)
        r[this.pos++] ^= e[s++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: e, suffix: n, pos: r, blockLen: i } = this;
    e[r] ^= n, n & 128 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak();
  }
  writeInto(e) {
    Ri(this, !1), dl(e), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let i = 0, s = e.length; i < s; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, s - i);
      e.set(n.subarray(this.posOut, this.posOut + o), i), this.posOut += o, i += o;
    }
    return e;
  }
  xofInto(e) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(e);
  }
  xof(e) {
    return Ko(e), this.xofInto(new Uint8Array(e));
  }
  digestInto(e) {
    if (hb(e, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(e), this.destroy(), e;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(e) {
    const { blockLen: n, suffix: r, outputLen: i, rounds: s, enableXOF: o } = this;
    return e || (e = new gl(n, r, i, o, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r, e.outputLen = i, e.enableXOF = o, e.destroyed = this.destroyed, e;
  }
}
const uB = (t, e, n) => pl(() => new gl(e, t, n)), fB = /* @__PURE__ */ uB(1, 136, 256 / 8);
let Bb = !1;
const Tb = function(t) {
  return fB(t);
};
let $b = Tb;
function Je(t) {
  const e = Ae(t, "data");
  return he($b(e));
}
Je._ = Tb;
Je.lock = function() {
  Bb = !0;
};
Je.register = function(t) {
  if (Bb)
    throw new TypeError("keccak256 is locked");
  $b = t;
};
Object.freeze(Je);
const Nb = function(t) {
  return eB("sha256").update(t).digest();
};
let Rb = Nb, Ob = !1;
function Ur(t) {
  const e = Ae(t, "data");
  return he(Rb(e));
}
Ur._ = Nb;
Ur.lock = function() {
  Ob = !0;
};
Ur.register = function(t) {
  if (Ob)
    throw new Error("sha256 is locked");
  Rb = t;
};
Object.freeze(Ur);
Object.freeze(Ur);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Cb = BigInt(0), ka = BigInt(1), lB = BigInt(2), La = (t) => t instanceof Uint8Array, dB = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Oi(t) {
  if (!La(t))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += dB[t[n]];
  return e;
}
function kb(t) {
  const e = t.toString(16);
  return e.length & 1 ? `0${e}` : e;
}
function yl(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
function Ci(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(e / 2);
  for (let r = 0; r < n.length; r++) {
    const i = r * 2, s = t.slice(i, i + 2), o = Number.parseInt(s, 16);
    if (Number.isNaN(o) || o < 0)
      throw new Error("Invalid byte sequence");
    n[r] = o;
  }
  return n;
}
function Sr(t) {
  return yl(Oi(t));
}
function bl(t) {
  if (!La(t))
    throw new Error("Uint8Array expected");
  return yl(Oi(Uint8Array.from(t).reverse()));
}
function ki(t, e) {
  return Ci(t.toString(16).padStart(e * 2, "0"));
}
function ml(t, e) {
  return ki(t, e).reverse();
}
function hB(t) {
  return Ci(kb(t));
}
function Rt(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = Ci(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (La(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof n == "number" && i !== n)
    throw new Error(`${t} expected ${n} bytes, got ${i}`);
  return r;
}
function Rs(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return t.forEach((r) => {
    if (!La(r))
      throw new Error("Uint8Array expected");
    e.set(r, n), n += r.length;
  }), e;
}
function pB(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function gB(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function yB(t) {
  let e;
  for (e = 0; t > Cb; t >>= ka, e += 1)
    ;
  return e;
}
function bB(t, e) {
  return t >> BigInt(e) & ka;
}
const mB = (t, e, n) => t | (n ? ka : Cb) << BigInt(e), wl = (t) => (lB << BigInt(t - 1)) - ka, jc = (t) => new Uint8Array(t), f0 = (t) => Uint8Array.from(t);
function Lb(t, e, n) {
  if (typeof t != "number" || t < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = jc(t), i = jc(t), s = 0;
  const o = () => {
    r.fill(1), i.fill(0), s = 0;
  }, a = (...l) => n(i, r, ...l), c = (l = jc()) => {
    i = a(f0([0]), l), r = a(), l.length !== 0 && (i = a(f0([1]), l), r = a());
  }, u = () => {
    if (s++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let l = 0;
    const d = [];
    for (; l < e; ) {
      r = a();
      const y = r.slice();
      d.push(y), l += r.length;
    }
    return Rs(...d);
  };
  return (l, d) => {
    o(), c(l);
    let y;
    for (; !(y = d(u())); )
      c();
    return o(), y;
  };
}
const wB = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || t instanceof Uint8Array,
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function ro(t, e, n = {}) {
  const r = (i, s, o) => {
    const a = wB[s];
    if (typeof a != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const c = t[i];
    if (!(o && c === void 0) && !a(c, t))
      throw new Error(`Invalid param ${String(i)}=${c} (${typeof c}), expected ${s}`);
  };
  for (const [i, s] of Object.entries(e))
    r(i, s, !1);
  for (const [i, s] of Object.entries(n))
    r(i, s, !0);
  return t;
}
const EB = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: bB,
  bitLen: yB,
  bitMask: wl,
  bitSet: mB,
  bytesToHex: Oi,
  bytesToNumberBE: Sr,
  bytesToNumberLE: bl,
  concatBytes: Rs,
  createHmacDrbg: Lb,
  ensureBytes: Rt,
  equalBytes: pB,
  hexToBytes: Ci,
  hexToNumber: yl,
  numberToBytesBE: ki,
  numberToBytesLE: ml,
  numberToHexUnpadded: kb,
  numberToVarBytesBE: hB,
  utf8ToBytes: gB,
  validateObject: ro
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ke = BigInt(0), Re = BigInt(1), fr = BigInt(2), xB = BigInt(3), Zu = BigInt(4), l0 = BigInt(5), d0 = BigInt(8);
BigInt(9);
BigInt(16);
function at(t, e) {
  const n = t % e;
  return n >= Ke ? n : e + n;
}
function vB(t, e, n) {
  if (n <= Ke || e < Ke)
    throw new Error("Expected power/modulo > 0");
  if (n === Re)
    return Ke;
  let r = Re;
  for (; e > Ke; )
    e & Re && (r = r * t % n), t = t * t % n, e >>= Re;
  return r;
}
function Et(t, e, n) {
  let r = t;
  for (; e-- > Ke; )
    r *= r, r %= n;
  return r;
}
function Yu(t, e) {
  if (t === Ke || e <= Ke)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = at(t, e), r = e, i = Ke, s = Re;
  for (; n !== Ke; ) {
    const a = r / n, c = r % n, u = i - s * a;
    r = n, n = c, i = s, s = u;
  }
  if (r !== Re)
    throw new Error("invert: does not exist");
  return at(i, e);
}
function SB(t) {
  const e = (t - Re) / fr;
  let n, r, i;
  for (n = t - Re, r = 0; n % fr === Ke; n /= fr, r++)
    ;
  for (i = fr; i < t && vB(i, e, t) !== t - Re; i++)
    ;
  if (r === 1) {
    const o = (t + Re) / Zu;
    return function(c, u) {
      const f = c.pow(u, o);
      if (!c.eql(c.sqr(f), u))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  const s = (n + Re) / fr;
  return function(a, c) {
    if (a.pow(c, e) === a.neg(a.ONE))
      throw new Error("Cannot find square root");
    let u = r, f = a.pow(a.mul(a.ONE, i), n), l = a.pow(c, s), d = a.pow(c, n);
    for (; !a.eql(d, a.ONE); ) {
      if (a.eql(d, a.ZERO))
        return a.ZERO;
      let y = 1;
      for (let h = a.sqr(d); y < u && !a.eql(h, a.ONE); y++)
        h = a.sqr(h);
      const w = a.pow(f, Re << BigInt(u - y - 1));
      f = a.sqr(w), l = a.mul(l, w), d = a.mul(d, f), u = y;
    }
    return l;
  };
}
function _B(t) {
  if (t % Zu === xB) {
    const e = (t + Re) / Zu;
    return function(r, i) {
      const s = r.pow(i, e);
      if (!r.eql(r.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % d0 === l0) {
    const e = (t - l0) / d0;
    return function(r, i) {
      const s = r.mul(i, fr), o = r.pow(s, e), a = r.mul(i, o), c = r.mul(r.mul(a, fr), o), u = r.mul(a, r.sub(c, r.ONE));
      if (!r.eql(r.sqr(u), i))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  return SB(t);
}
const AB = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function IB(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = AB.reduce((r, i) => (r[i] = "function", r), e);
  return ro(t, n);
}
function PB(t, e, n) {
  if (n < Ke)
    throw new Error("Expected power > 0");
  if (n === Ke)
    return t.ONE;
  if (n === Re)
    return e;
  let r = t.ONE, i = e;
  for (; n > Ke; )
    n & Re && (r = t.mul(r, i)), i = t.sqr(i), n >>= Re;
  return r;
}
function BB(t, e) {
  const n = new Array(e.length), r = e.reduce((s, o, a) => t.is0(o) ? s : (n[a] = s, t.mul(s, o)), t.ONE), i = t.inv(r);
  return e.reduceRight((s, o, a) => t.is0(o) ? s : (n[a] = t.mul(s, n[a]), t.mul(s, o)), i), n;
}
function Mb(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function TB(t, e, n = !1, r = {}) {
  if (t <= Ke)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = Mb(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = _B(t), a = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: wl(i),
    ZERO: Ke,
    ONE: Re,
    create: (c) => at(c, t),
    isValid: (c) => {
      if (typeof c != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
      return Ke <= c && c < t;
    },
    is0: (c) => c === Ke,
    isOdd: (c) => (c & Re) === Re,
    neg: (c) => at(-c, t),
    eql: (c, u) => c === u,
    sqr: (c) => at(c * c, t),
    add: (c, u) => at(c + u, t),
    sub: (c, u) => at(c - u, t),
    mul: (c, u) => at(c * u, t),
    pow: (c, u) => PB(a, c, u),
    div: (c, u) => at(c * Yu(u, t), t),
    // Same as above, but doesn't normalize
    sqrN: (c) => c * c,
    addN: (c, u) => c + u,
    subN: (c, u) => c - u,
    mulN: (c, u) => c * u,
    inv: (c) => Yu(c, t),
    sqrt: r.sqrt || ((c) => o(a, c)),
    invertBatch: (c) => BB(a, c),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (c, u, f) => f ? u : c,
    toBytes: (c) => n ? ml(c, s) : ki(c, s),
    fromBytes: (c) => {
      if (c.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${c.length}`);
      return n ? bl(c) : Sr(c);
    }
  });
  return Object.freeze(a);
}
function Fb(t) {
  if (typeof t != "bigint")
    throw new Error("field order must be bigint");
  const e = t.toString(2).length;
  return Math.ceil(e / 8);
}
function Ub(t) {
  const e = Fb(t);
  return e + Math.ceil(e / 2);
}
function $B(t, e, n = !1) {
  const r = t.length, i = Fb(e), s = Ub(e);
  if (r < 16 || r < s || r > 1024)
    throw new Error(`expected ${s}-1024 bytes of input, got ${r}`);
  const o = n ? Sr(t) : bl(t), a = at(o, e - Re) + Re;
  return n ? ml(a, i) : ki(a, i);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const NB = BigInt(0), Hc = BigInt(1);
function RB(t, e) {
  const n = (i, s) => {
    const o = s.negate();
    return i ? o : s;
  }, r = (i) => {
    const s = Math.ceil(e / i) + 1, o = 2 ** (i - 1);
    return { windows: s, windowSize: o };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(i, s) {
      let o = t.ZERO, a = i;
      for (; s > NB; )
        s & Hc && (o = o.add(a)), a = a.double(), s >>= Hc;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(i, s) {
      const { windows: o, windowSize: a } = r(s), c = [];
      let u = i, f = u;
      for (let l = 0; l < o; l++) {
        f = u, c.push(f);
        for (let d = 1; d < a; d++)
          f = f.add(u), c.push(f);
        u = f.double();
      }
      return c;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(i, s, o) {
      const { windows: a, windowSize: c } = r(i);
      let u = t.ZERO, f = t.BASE;
      const l = BigInt(2 ** i - 1), d = 2 ** i, y = BigInt(i);
      for (let w = 0; w < a; w++) {
        const h = w * c;
        let g = Number(o & l);
        o >>= y, g > c && (g -= d, o += Hc);
        const b = h, E = h + Math.abs(g) - 1, S = w % 2 !== 0, N = g < 0;
        g === 0 ? f = f.add(n(S, s[b])) : u = u.add(n(N, s[E]));
      }
      return { p: u, f };
    },
    wNAFCached(i, s, o, a) {
      const c = i._WINDOW_SIZE || 1;
      let u = s.get(i);
      return u || (u = this.precomputeWindow(i, c), c !== 1 && s.set(i, a(u))), this.wNAF(c, u, o);
    }
  };
}
function Db(t) {
  return IB(t.Fp), ro(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Mb(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function OB(t) {
  const e = Db(t);
  ro(e, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: n, Fp: r, a: i } = e;
  if (n) {
    if (!r.eql(i, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...e });
}
const { bytesToNumberBE: CB, hexToBytes: kB } = EB, hr = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(e = "") {
      super(e);
    }
  },
  _parseInt(t) {
    const { Err: e } = hr;
    if (t.length < 2 || t[0] !== 2)
      throw new e("Invalid signature integer tag");
    const n = t[1], r = t.subarray(2, n + 2);
    if (!n || r.length !== n)
      throw new e("Invalid signature integer: wrong length");
    if (r[0] & 128)
      throw new e("Invalid signature integer: negative");
    if (r[0] === 0 && !(r[1] & 128))
      throw new e("Invalid signature integer: unnecessary leading zero");
    return { d: CB(r), l: t.subarray(n + 2) };
  },
  toSig(t) {
    const { Err: e } = hr, n = typeof t == "string" ? kB(t) : t;
    if (!(n instanceof Uint8Array))
      throw new Error("ui8a expected");
    let r = n.length;
    if (r < 2 || n[0] != 48)
      throw new e("Invalid signature tag");
    if (n[1] !== r - 2)
      throw new e("Invalid signature: incorrect length");
    const { d: i, l: s } = hr._parseInt(n.subarray(2)), { d: o, l: a } = hr._parseInt(s);
    if (a.length)
      throw new e("Invalid signature: left bytes after parsing");
    return { r: i, s: o };
  },
  hexFromSig(t) {
    const e = (u) => Number.parseInt(u[0], 16) & 8 ? "00" + u : u, n = (u) => {
      const f = u.toString(16);
      return f.length & 1 ? `0${f}` : f;
    }, r = e(n(t.s)), i = e(n(t.r)), s = r.length / 2, o = i.length / 2, a = n(s), c = n(o);
    return `30${n(o + s + 4)}02${c}${i}02${a}${r}`;
  }
}, wn = BigInt(0), At = BigInt(1);
BigInt(2);
const h0 = BigInt(3);
BigInt(4);
function LB(t) {
  const e = OB(t), { Fp: n } = e, r = e.toBytes || ((w, h, g) => {
    const b = h.toAffine();
    return Rs(Uint8Array.from([4]), n.toBytes(b.x), n.toBytes(b.y));
  }), i = e.fromBytes || ((w) => {
    const h = w.subarray(1), g = n.fromBytes(h.subarray(0, n.BYTES)), b = n.fromBytes(h.subarray(n.BYTES, 2 * n.BYTES));
    return { x: g, y: b };
  });
  function s(w) {
    const { a: h, b: g } = e, b = n.sqr(w), E = n.mul(b, w);
    return n.add(n.add(E, n.mul(w, h)), g);
  }
  if (!n.eql(n.sqr(e.Gy), s(e.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(w) {
    return typeof w == "bigint" && wn < w && w < e.n;
  }
  function a(w) {
    if (!o(w))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function c(w) {
    const { allowedPrivateKeyLengths: h, nByteLength: g, wrapPrivateKey: b, n: E } = e;
    if (h && typeof w != "bigint") {
      if (w instanceof Uint8Array && (w = Oi(w)), typeof w != "string" || !h.includes(w.length))
        throw new Error("Invalid key");
      w = w.padStart(g * 2, "0");
    }
    let S;
    try {
      S = typeof w == "bigint" ? w : Sr(Rt("private key", w, g));
    } catch {
      throw new Error(`private key must be ${g} bytes, hex or bigint, not ${typeof w}`);
    }
    return b && (S = at(S, E)), a(S), S;
  }
  const u = /* @__PURE__ */ new Map();
  function f(w) {
    if (!(w instanceof l))
      throw new Error("ProjectivePoint expected");
  }
  class l {
    constructor(h, g, b) {
      if (this.px = h, this.py = g, this.pz = b, h == null || !n.isValid(h))
        throw new Error("x required");
      if (g == null || !n.isValid(g))
        throw new Error("y required");
      if (b == null || !n.isValid(b))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(h) {
      const { x: g, y: b } = h || {};
      if (!h || !n.isValid(g) || !n.isValid(b))
        throw new Error("invalid affine point");
      if (h instanceof l)
        throw new Error("projective point not allowed");
      const E = (S) => n.eql(S, n.ZERO);
      return E(g) && E(b) ? l.ZERO : new l(g, b, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(h) {
      const g = n.invertBatch(h.map((b) => b.pz));
      return h.map((b, E) => b.toAffine(g[E])).map(l.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(h) {
      const g = l.fromAffine(i(Rt("pointHex", h)));
      return g.assertValidity(), g;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(h) {
      return l.BASE.multiply(c(h));
    }
    // "Private method", don't use it directly
    _setWindowSize(h) {
      this._WINDOW_SIZE = h, u.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (e.allowInfinityPoint && !n.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: h, y: g } = this.toAffine();
      if (!n.isValid(h) || !n.isValid(g))
        throw new Error("bad point: x or y not FE");
      const b = n.sqr(g), E = s(h);
      if (!n.eql(b, E))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: h } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(h);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(h) {
      f(h);
      const { px: g, py: b, pz: E } = this, { px: S, py: N, pz: O } = h, C = n.eql(n.mul(g, O), n.mul(S, E)), L = n.eql(n.mul(b, O), n.mul(N, E));
      return C && L;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new l(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: h, b: g } = e, b = n.mul(g, h0), { px: E, py: S, pz: N } = this;
      let O = n.ZERO, C = n.ZERO, L = n.ZERO, p = n.mul(E, E), x = n.mul(S, S), _ = n.mul(N, N), P = n.mul(E, S);
      return P = n.add(P, P), L = n.mul(E, N), L = n.add(L, L), O = n.mul(h, L), C = n.mul(b, _), C = n.add(O, C), O = n.sub(x, C), C = n.add(x, C), C = n.mul(O, C), O = n.mul(P, O), L = n.mul(b, L), _ = n.mul(h, _), P = n.sub(p, _), P = n.mul(h, P), P = n.add(P, L), L = n.add(p, p), p = n.add(L, p), p = n.add(p, _), p = n.mul(p, P), C = n.add(C, p), _ = n.mul(S, N), _ = n.add(_, _), p = n.mul(_, P), O = n.sub(O, p), L = n.mul(_, x), L = n.add(L, L), L = n.add(L, L), new l(O, C, L);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(h) {
      f(h);
      const { px: g, py: b, pz: E } = this, { px: S, py: N, pz: O } = h;
      let C = n.ZERO, L = n.ZERO, p = n.ZERO;
      const x = e.a, _ = n.mul(e.b, h0);
      let P = n.mul(g, S), I = n.mul(b, N), A = n.mul(E, O), R = n.add(g, b), m = n.add(S, N);
      R = n.mul(R, m), m = n.add(P, I), R = n.sub(R, m), m = n.add(g, E);
      let v = n.add(S, O);
      return m = n.mul(m, v), v = n.add(P, A), m = n.sub(m, v), v = n.add(b, E), C = n.add(N, O), v = n.mul(v, C), C = n.add(I, A), v = n.sub(v, C), p = n.mul(x, m), C = n.mul(_, A), p = n.add(C, p), C = n.sub(I, p), p = n.add(I, p), L = n.mul(C, p), I = n.add(P, P), I = n.add(I, P), A = n.mul(x, A), m = n.mul(_, m), I = n.add(I, A), A = n.sub(P, A), A = n.mul(x, A), m = n.add(m, A), P = n.mul(I, m), L = n.add(L, P), P = n.mul(v, m), C = n.mul(R, C), C = n.sub(C, P), P = n.mul(R, I), p = n.mul(v, p), p = n.add(p, P), new l(C, L, p);
    }
    subtract(h) {
      return this.add(h.negate());
    }
    is0() {
      return this.equals(l.ZERO);
    }
    wNAF(h) {
      return y.wNAFCached(this, u, h, (g) => {
        const b = n.invertBatch(g.map((E) => E.pz));
        return g.map((E, S) => E.toAffine(b[S])).map(l.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(h) {
      const g = l.ZERO;
      if (h === wn)
        return g;
      if (a(h), h === At)
        return this;
      const { endo: b } = e;
      if (!b)
        return y.unsafeLadder(this, h);
      let { k1neg: E, k1: S, k2neg: N, k2: O } = b.splitScalar(h), C = g, L = g, p = this;
      for (; S > wn || O > wn; )
        S & At && (C = C.add(p)), O & At && (L = L.add(p)), p = p.double(), S >>= At, O >>= At;
      return E && (C = C.negate()), N && (L = L.negate()), L = new l(n.mul(L.px, b.beta), L.py, L.pz), C.add(L);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(h) {
      a(h);
      let g = h, b, E;
      const { endo: S } = e;
      if (S) {
        const { k1neg: N, k1: O, k2neg: C, k2: L } = S.splitScalar(g);
        let { p, f: x } = this.wNAF(O), { p: _, f: P } = this.wNAF(L);
        p = y.constTimeNegate(N, p), _ = y.constTimeNegate(C, _), _ = new l(n.mul(_.px, S.beta), _.py, _.pz), b = p.add(_), E = x.add(P);
      } else {
        const { p: N, f: O } = this.wNAF(g);
        b = N, E = O;
      }
      return l.normalizeZ([b, E])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(h, g, b) {
      const E = l.BASE, S = (O, C) => C === wn || C === At || !O.equals(E) ? O.multiplyUnsafe(C) : O.multiply(C), N = S(this, g).add(S(h, b));
      return N.is0() ? void 0 : N;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(h) {
      const { px: g, py: b, pz: E } = this, S = this.is0();
      h == null && (h = S ? n.ONE : n.inv(E));
      const N = n.mul(g, h), O = n.mul(b, h), C = n.mul(E, h);
      if (S)
        return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(C, n.ONE))
        throw new Error("invZ was invalid");
      return { x: N, y: O };
    }
    isTorsionFree() {
      const { h, isTorsionFree: g } = e;
      if (h === At)
        return !0;
      if (g)
        return g(l, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h, clearCofactor: g } = e;
      return h === At ? this : g ? g(l, this) : this.multiplyUnsafe(e.h);
    }
    toRawBytes(h = !0) {
      return this.assertValidity(), r(l, this, h);
    }
    toHex(h = !0) {
      return Oi(this.toRawBytes(h));
    }
  }
  l.BASE = new l(e.Gx, e.Gy, n.ONE), l.ZERO = new l(n.ZERO, n.ONE, n.ZERO);
  const d = e.nBitLength, y = RB(l, e.endo ? Math.ceil(d / 2) : d);
  return {
    CURVE: e,
    ProjectivePoint: l,
    normPrivateKeyToScalar: c,
    weierstrassEquation: s,
    isWithinCurveOrder: o
  };
}
function MB(t) {
  const e = Db(t);
  return ro(e, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...e });
}
function FB(t) {
  const e = MB(t), { Fp: n, n: r } = e, i = n.BYTES + 1, s = 2 * n.BYTES + 1;
  function o(m) {
    return wn < m && m < n.ORDER;
  }
  function a(m) {
    return at(m, r);
  }
  function c(m) {
    return Yu(m, r);
  }
  const { ProjectivePoint: u, normPrivateKeyToScalar: f, weierstrassEquation: l, isWithinCurveOrder: d } = LB({
    ...e,
    toBytes(m, v, B) {
      const $ = v.toAffine(), M = n.toBytes($.x), D = Rs;
      return B ? D(Uint8Array.from([v.hasEvenY() ? 2 : 3]), M) : D(Uint8Array.from([4]), M, n.toBytes($.y));
    },
    fromBytes(m) {
      const v = m.length, B = m[0], $ = m.subarray(1);
      if (v === i && (B === 2 || B === 3)) {
        const M = Sr($);
        if (!o(M))
          throw new Error("Point is not on curve");
        const D = l(M);
        let H = n.sqrt(D);
        const V = (H & At) === At;
        return (B & 1) === 1 !== V && (H = n.neg(H)), { x: M, y: H };
      } else if (v === s && B === 4) {
        const M = n.fromBytes($.subarray(0, n.BYTES)), D = n.fromBytes($.subarray(n.BYTES, 2 * n.BYTES));
        return { x: M, y: D };
      } else
        throw new Error(`Point of length ${v} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`);
    }
  }), y = (m) => Oi(ki(m, e.nByteLength));
  function w(m) {
    const v = r >> At;
    return m > v;
  }
  function h(m) {
    return w(m) ? a(-m) : m;
  }
  const g = (m, v, B) => Sr(m.slice(v, B));
  class b {
    constructor(v, B, $) {
      this.r = v, this.s = B, this.recovery = $, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(v) {
      const B = e.nByteLength;
      return v = Rt("compactSignature", v, B * 2), new b(g(v, 0, B), g(v, B, 2 * B));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(v) {
      const { r: B, s: $ } = hr.toSig(Rt("DER", v));
      return new b(B, $);
    }
    assertValidity() {
      if (!d(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!d(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(v) {
      return new b(this.r, this.s, v);
    }
    recoverPublicKey(v) {
      const { r: B, s: $, recovery: M } = this, D = L(Rt("msgHash", v));
      if (M == null || ![0, 1, 2, 3].includes(M))
        throw new Error("recovery id invalid");
      const H = M === 2 || M === 3 ? B + e.n : B;
      if (H >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const V = M & 1 ? "03" : "02", q = u.fromHex(V + y(H)), Z = c(H), Y = a(-D * Z), ee = a($ * Z), ie = u.BASE.multiplyAndAddUnsafe(q, Y, ee);
      if (!ie)
        throw new Error("point at infinify");
      return ie.assertValidity(), ie;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return w(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new b(this.r, a(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return Ci(this.toDERHex());
    }
    toDERHex() {
      return hr.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return Ci(this.toCompactHex());
    }
    toCompactHex() {
      return y(this.r) + y(this.s);
    }
  }
  const E = {
    isValidPrivateKey(m) {
      try {
        return f(m), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: f,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const m = Ub(e.n);
      return $B(e.randomBytes(m), e.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(m = 8, v = u.BASE) {
      return v._setWindowSize(m), v.multiply(BigInt(3)), v;
    }
  };
  function S(m, v = !0) {
    return u.fromPrivateKey(m).toRawBytes(v);
  }
  function N(m) {
    const v = m instanceof Uint8Array, B = typeof m == "string", $ = (v || B) && m.length;
    return v ? $ === i || $ === s : B ? $ === 2 * i || $ === 2 * s : m instanceof u;
  }
  function O(m, v, B = !0) {
    if (N(m))
      throw new Error("first arg must be private key");
    if (!N(v))
      throw new Error("second arg must be public key");
    return u.fromHex(v).multiply(f(m)).toRawBytes(B);
  }
  const C = e.bits2int || function(m) {
    const v = Sr(m), B = m.length * 8 - e.nBitLength;
    return B > 0 ? v >> BigInt(B) : v;
  }, L = e.bits2int_modN || function(m) {
    return a(C(m));
  }, p = wl(e.nBitLength);
  function x(m) {
    if (typeof m != "bigint")
      throw new Error("bigint expected");
    if (!(wn <= m && m < p))
      throw new Error(`bigint expected < 2^${e.nBitLength}`);
    return ki(m, e.nByteLength);
  }
  function _(m, v, B = P) {
    if (["recovered", "canonical"].some((ge) => ge in B))
      throw new Error("sign() legacy options not supported");
    const { hash: $, randomBytes: M } = e;
    let { lowS: D, prehash: H, extraEntropy: V } = B;
    D == null && (D = !0), m = Rt("msgHash", m), H && (m = Rt("prehashed msgHash", $(m)));
    const q = L(m), Z = f(v), Y = [x(Z), x(q)];
    if (V != null) {
      const ge = V === !0 ? M(n.BYTES) : V;
      Y.push(Rt("extraEntropy", ge));
    }
    const ee = Rs(...Y), ie = q;
    function be(ge) {
      const Ie = C(ge);
      if (!d(Ie))
        return;
      const ye = c(Ie), de = u.BASE.multiply(Ie).toAffine(), F = a(de.x);
      if (F === wn)
        return;
      const U = a(ye * a(ie + F * Z));
      if (U === wn)
        return;
      let j = (de.x === F ? 0 : 2) | Number(de.y & At), J = U;
      return D && w(U) && (J = h(U), j ^= 1), new b(F, J, j);
    }
    return { seed: ee, k2sig: be };
  }
  const P = { lowS: e.lowS, prehash: !1 }, I = { lowS: e.lowS, prehash: !1 };
  function A(m, v, B = P) {
    const { seed: $, k2sig: M } = _(m, v, B), D = e;
    return Lb(D.hash.outputLen, D.nByteLength, D.hmac)($, M);
  }
  u.BASE._setWindowSize(8);
  function R(m, v, B, $ = I) {
    var de;
    const M = m;
    if (v = Rt("msgHash", v), B = Rt("publicKey", B), "strict" in $)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: D, prehash: H } = $;
    let V, q;
    try {
      if (typeof M == "string" || M instanceof Uint8Array)
        try {
          V = b.fromDER(M);
        } catch (F) {
          if (!(F instanceof hr.Err))
            throw F;
          V = b.fromCompact(M);
        }
      else if (typeof M == "object" && typeof M.r == "bigint" && typeof M.s == "bigint") {
        const { r: F, s: U } = M;
        V = new b(F, U);
      } else
        throw new Error("PARSE");
      q = u.fromHex(B);
    } catch (F) {
      if (F.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (D && V.hasHighS())
      return !1;
    H && (v = e.hash(v));
    const { r: Z, s: Y } = V, ee = L(v), ie = c(Y), be = a(ee * ie), ge = a(Z * ie), Ie = (de = u.BASE.multiplyAndAddUnsafe(q, be, ge)) == null ? void 0 : de.toAffine();
    return Ie ? a(Ie.x) === Z : !1;
  }
  return {
    CURVE: e,
    getPublicKey: S,
    getSharedSecret: O,
    sign: A,
    verify: R,
    ProjectivePoint: u,
    Signature: b,
    utils: E
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function UB(t) {
  return {
    hash: t,
    hmac: (e, ...n) => yb(t, e, I5(...n)),
    randomBytes: P5
  };
}
function DB(t, e) {
  const n = (r) => FB({ ...t, ...UB(r) });
  return Object.freeze({ ...n(e), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const jb = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), p0 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), jB = BigInt(1), Ju = BigInt(2), g0 = (t, e) => (t + e / Ju) / e;
function HB(t) {
  const e = jb, n = BigInt(3), r = BigInt(6), i = BigInt(11), s = BigInt(22), o = BigInt(23), a = BigInt(44), c = BigInt(88), u = t * t * t % e, f = u * u * t % e, l = Et(f, n, e) * f % e, d = Et(l, n, e) * f % e, y = Et(d, Ju, e) * u % e, w = Et(y, i, e) * y % e, h = Et(w, s, e) * w % e, g = Et(h, a, e) * h % e, b = Et(g, c, e) * g % e, E = Et(b, a, e) * h % e, S = Et(E, n, e) * f % e, N = Et(S, o, e) * w % e, O = Et(N, r, e) * u % e, C = Et(O, Ju, e);
  if (!Xu.eql(Xu.sqr(C), t))
    throw new Error("Cannot find square root");
  return C;
}
const Xu = TB(jb, void 0, void 0, { sqrt: HB }), Un = DB({
  a: BigInt(0),
  b: BigInt(7),
  Fp: Xu,
  n: p0,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: !0,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (t) => {
      const e = p0, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -jB * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s = n, o = BigInt("0x100000000000000000000000000000000"), a = g0(s * t, e), c = g0(-r * t, e);
      let u = at(t - a * n - c * i, e), f = at(-a * r - c * s, e);
      const l = u > o, d = f > o;
      if (l && (u = e - u), d && (f = e - f), u > o || f > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + t);
      return { k1neg: l, k1: u, k2neg: d, k2: f };
    }
  }
}, mb);
BigInt(0);
Un.ProjectivePoint;
const El = "0x0000000000000000000000000000000000000000", Qu = "0x0000000000000000000000000000000000000000000000000000000000000000", Hb = `Ethereum Signed Message:
`, y0 = BigInt(0), b0 = BigInt(1), m0 = BigInt(2), w0 = BigInt(27), E0 = BigInt(28), _o = BigInt(35), Hr = {};
function x0(t) {
  return Nr(ct(t), 32);
}
var ni, ri, ii, pr;
const Tt = class Tt {
  /**
   *  @private
   */
  constructor(e, n, r, i) {
    me(this, ni);
    me(this, ri);
    me(this, ii);
    me(this, pr);
    ob(e, Hr, "Signature"), te(this, ni, n), te(this, ri, r), te(this, ii, i), te(this, pr, null);
  }
  /**
   *  The ``r`` value for a signautre.
   *
   *  This represents the ``x`` coordinate of a "reference" or
   *  challenge point, from which the ``y`` can be computed.
   */
  get r() {
    return ue(this, ni);
  }
  set r(e) {
    z(ti(e) === 32, "invalid r", "value", e), te(this, ni, he(e));
  }
  /**
   *  The ``s`` value for a signature.
   */
  get s() {
    return ue(this, ri);
  }
  set s(e) {
    z(ti(e) === 32, "invalid s", "value", e);
    const n = he(e);
    z(parseInt(n.substring(0, 3)) < 8, "non-canonical s", "value", n), te(this, ri, n);
  }
  /**
   *  The ``v`` value for a signature.
   *
   *  Since a given ``x`` value for ``r`` has two possible values for
   *  its correspondin ``y``, the ``v`` indicates which of the two ``y``
   *  values to use.
   *
   *  It is normalized to the values ``27`` or ``28`` for legacy
   *  purposes.
   */
  get v() {
    return ue(this, ii);
  }
  set v(e) {
    const n = Yt(e, "value");
    z(n === 27 || n === 28, "invalid v", "v", e), te(this, ii, n);
  }
  /**
   *  The EIP-155 ``v`` for legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get networkV() {
    return ue(this, pr);
  }
  /**
   *  The chain ID for EIP-155 legacy transactions. For non-legacy
   *  transactions, this value is ``null``.
   */
  get legacyChainId() {
    const e = this.networkV;
    return e == null ? null : Tt.getChainId(e);
  }
  /**
   *  The ``yParity`` for the signature.
   *
   *  See ``v`` for more details on how this value is used.
   */
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  /**
   *  The [[link-eip-2098]] compact representation of the ``yParity``
   *  and ``s`` compacted into a single ``bytes32``.
   */
  get yParityAndS() {
    const e = Ae(this.s);
    return this.yParity && (e[0] |= 128), he(e);
  }
  /**
   *  The [[link-eip-2098]] compact representation.
   */
  get compactSerialized() {
    return ht([this.r, this.yParityAndS]);
  }
  /**
   *  The serialized representation.
   */
  get serialized() {
    return ht([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  /**
   *  Returns a new identical [[Signature]].
   */
  clone() {
    const e = new Tt(Hr, this.r, this.s, this.v);
    return this.networkV && te(e, pr, this.networkV), e;
  }
  /**
   *  Returns a representation that is compatible with ``JSON.stringify``.
   */
  toJSON() {
    const e = this.networkV;
    return {
      _type: "signature",
      networkV: e != null ? e.toString() : null,
      r: this.r,
      s: this.s,
      v: this.v
    };
  }
  /**
   *  Compute the chain ID from the ``v`` in a legacy EIP-155 transactions.
   *
   *  @example:
   *    Signature.getChainId(45)
   *    //_result:
   *
   *    Signature.getChainId(46)
   *    //_result:
   */
  static getChainId(e) {
    const n = Le(e, "v");
    return n == w0 || n == E0 ? y0 : (z(n >= _o, "invalid EIP-155 v", "v", e), (n - _o) / m0);
  }
  /**
   *  Compute the ``v`` for a chain ID for a legacy EIP-155 transactions.
   *
   *  Legacy transactions which use [[link-eip-155]] hijack the ``v``
   *  property to include the chain ID.
   *
   *  @example:
   *    Signature.getChainIdV(5, 27)
   *    //_result:
   *
   *    Signature.getChainIdV(5, 28)
   *    //_result:
   *
   */
  static getChainIdV(e, n) {
    return Le(e) * m0 + BigInt(35 + n - 27);
  }
  /**
   *  Compute the normalized legacy transaction ``v`` from a ``yParirty``,
   *  a legacy transaction ``v`` or a legacy [[link-eip-155]] transaction.
   *
   *  @example:
   *    // The values 0 and 1 imply v is actually yParity
   *    Signature.getNormalizedV(0)
   *    //_result:
   *
   *    // Legacy non-EIP-1559 transaction (i.e. 27 or 28)
   *    Signature.getNormalizedV(27)
   *    //_result:
   *
   *    // Legacy EIP-155 transaction (i.e. >= 35)
   *    Signature.getNormalizedV(46)
   *    //_result:
   *
   *    // Invalid values throw
   *    Signature.getNormalizedV(5)
   *    //_error:
   */
  static getNormalizedV(e) {
    const n = Le(e);
    return n === y0 || n === w0 ? 27 : n === b0 || n === E0 ? 28 : (z(n >= _o, "invalid v", "v", e), n & b0 ? 27 : 28);
  }
  /**
   *  Creates a new [[Signature]].
   *
   *  If no %%sig%% is provided, a new [[Signature]] is created
   *  with default values.
   *
   *  If %%sig%% is a string, it is parsed.
   */
  static from(e) {
    function n(u, f) {
      z(u, f, "signature", e);
    }
    if (e == null)
      return new Tt(Hr, Qu, Qu, 27);
    if (typeof e == "string") {
      const u = Ae(e, "signature");
      if (u.length === 64) {
        const f = he(u.slice(0, 32)), l = u.slice(32, 64), d = l[0] & 128 ? 28 : 27;
        return l[0] &= 127, new Tt(Hr, f, he(l), d);
      }
      if (u.length === 65) {
        const f = he(u.slice(0, 32)), l = u.slice(32, 64);
        n((l[0] & 128) === 0, "non-canonical s");
        const d = Tt.getNormalizedV(u[64]);
        return new Tt(Hr, f, he(l), d);
      }
      n(!1, "invalid raw signature length");
    }
    if (e instanceof Tt)
      return e.clone();
    const r = e.r;
    n(r != null, "missing r");
    const i = x0(r), s = function(u, f) {
      if (u != null)
        return x0(u);
      if (f != null) {
        n(Dt(f, 32), "invalid yParityAndS");
        const l = Ae(f);
        return l[0] &= 127, he(l);
      }
      n(!1, "missing s");
    }(e.s, e.yParityAndS);
    n((Ae(s)[0] & 128) == 0, "non-canonical s");
    const { networkV: o, v: a } = function(u, f, l) {
      if (u != null) {
        const d = Le(u);
        return {
          networkV: d >= _o ? d : void 0,
          v: Tt.getNormalizedV(d)
        };
      }
      if (f != null)
        return n(Dt(f, 32), "invalid yParityAndS"), { v: Ae(f)[0] & 128 ? 28 : 27 };
      if (l != null) {
        switch (Yt(l, "sig.yParity")) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        n(!1, "invalid yParity");
      }
      n(!1, "missing v");
    }(e.v, e.yParityAndS, e.yParity), c = new Tt(Hr, i, s, a);
    return o && te(c, pr, o), n(e.yParity == null || Yt(e.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), n(e.yParityAndS == null || e.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c;
  }
};
ni = new WeakMap(), ri = new WeakMap(), ii = new WeakMap(), pr = new WeakMap();
let jt = Tt;
var pn;
const lr = class lr {
  /**
   *  Creates a new **SigningKey** for %%privateKey%%.
   */
  constructor(e) {
    me(this, pn);
    z(ti(e) === 32, "invalid private key", "privateKey", "[REDACTED]"), te(this, pn, he(e));
  }
  /**
   *  The private key.
   */
  get privateKey() {
    return ue(this, pn);
  }
  /**
   *  The uncompressed public key.
   *
   * This will always begin with the prefix ``0x04`` and be 132
   * characters long (the ``0x`` prefix and 130 hexadecimal nibbles).
   */
  get publicKey() {
    return lr.computePublicKey(ue(this, pn));
  }
  /**
   *  The compressed public key.
   *
   *  This will always begin with either the prefix ``0x02`` or ``0x03``
   *  and be 68 characters long (the ``0x`` prefix and 33 hexadecimal
   *  nibbles)
   */
  get compressedPublicKey() {
    return lr.computePublicKey(ue(this, pn), !0);
  }
  /**
   *  Return the signature of the signed %%digest%%.
   */
  sign(e) {
    z(ti(e) === 32, "invalid digest length", "digest", e);
    const n = Un.sign(zr(e), zr(ue(this, pn)), {
      lowS: !0
    });
    return jt.from({
      r: Ni(n.r, 32),
      s: Ni(n.s, 32),
      v: n.recovery ? 28 : 27
    });
  }
  /**
   *  Returns the [[link-wiki-ecdh]] shared secret between this
   *  private key and the %%other%% key.
   *
   *  The %%other%% key may be any type of key, a raw public key,
   *  a compressed/uncompressed pubic key or aprivate key.
   *
   *  Best practice is usually to use a cryptographic hash on the
   *  returned value before using it as a symetric secret.
   *
   *  @example:
   *    sign1 = new SigningKey(id("some-secret-1"))
   *    sign2 = new SigningKey(id("some-secret-2"))
   *
   *    // Notice that privA.computeSharedSecret(pubB)...
   *    sign1.computeSharedSecret(sign2.publicKey)
   *    //_result:
   *
   *    // ...is equal to privB.computeSharedSecret(pubA).
   *    sign2.computeSharedSecret(sign1.publicKey)
   *    //_result:
   */
  computeSharedSecret(e) {
    const n = lr.computePublicKey(e);
    return he(Un.getSharedSecret(zr(ue(this, pn)), Ae(n), !1));
  }
  /**
   *  Compute the public key for %%key%%, optionally %%compressed%%.
   *
   *  The %%key%% may be any type of key, a raw public key, a
   *  compressed/uncompressed public key or private key.
   *
   *  @example:
   *    sign = new SigningKey(id("some-secret"));
   *
   *    // Compute the uncompressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey)
   *    //_result:
   *
   *    // Compute the compressed public key for a private key
   *    SigningKey.computePublicKey(sign.privateKey, true)
   *    //_result:
   *
   *    // Compute the uncompressed public key
   *    SigningKey.computePublicKey(sign.publicKey, false);
   *    //_result:
   *
   *    // Compute the Compressed a public key
   *    SigningKey.computePublicKey(sign.publicKey, true);
   *    //_result:
   */
  static computePublicKey(e, n) {
    let r = Ae(e, "key");
    if (r.length === 32) {
      const s = Un.getPublicKey(r, !!n);
      return he(s);
    }
    if (r.length === 64) {
      const s = new Uint8Array(65);
      s[0] = 4, s.set(r, 1), r = s;
    }
    const i = Un.ProjectivePoint.fromHex(r);
    return he(i.toRawBytes(n));
  }
  /**
   *  Returns the public key for the private key which produced the
   *  %%signature%% for the given %%digest%%.
   *
   *  @example:
   *    key = new SigningKey(id("some-secret"))
   *    digest = id("hello world")
   *    sig = key.sign(digest)
   *
   *    // Notice the signer public key...
   *    key.publicKey
   *    //_result:
   *
   *    // ...is equal to the recovered public key
   *    SigningKey.recoverPublicKey(digest, sig)
   *    //_result:
   *
   */
  static recoverPublicKey(e, n) {
    z(ti(e) === 32, "invalid digest length", "digest", e);
    const r = jt.from(n);
    let i = Un.Signature.fromCompact(zr(ht([r.r, r.s])));
    i = i.addRecoveryBit(r.yParity);
    const s = i.recoverPublicKey(zr(e));
    return z(s != null, "invalid signautre for digest", "signature", n), "0x" + s.toHex(!1);
  }
  /**
   *  Returns the point resulting from adding the ellipic curve points
   *  %%p0%% and %%p1%%.
   *
   *  This is not a common function most developers should require, but
   *  can be useful for certain privacy-specific techniques.
   *
   *  For example, it is used by [[HDNodeWallet]] to compute child
   *  addresses from parent public keys and chain codes.
   */
  static addPoints(e, n, r) {
    const i = Un.ProjectivePoint.fromHex(lr.computePublicKey(e).substring(2)), s = Un.ProjectivePoint.fromHex(lr.computePublicKey(n).substring(2));
    return "0x" + i.add(s).toHex(!!r);
  }
};
pn = new WeakMap();
let Li = lr;
const GB = BigInt(0), qB = BigInt(36);
function v0(t) {
  t = t.toLowerCase();
  const e = t.substring(2).split(""), n = new Uint8Array(40);
  for (let i = 0; i < 40; i++)
    n[i] = e[i].charCodeAt(0);
  const r = Ae(Je(n));
  for (let i = 0; i < 40; i += 2)
    r[i >> 1] >> 4 >= 8 && (e[i] = e[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && (e[i + 1] = e[i + 1].toUpperCase());
  return "0x" + e.join("");
}
const xl = {};
for (let t = 0; t < 10; t++)
  xl[String(t)] = String(t);
for (let t = 0; t < 26; t++)
  xl[String.fromCharCode(65 + t)] = String(10 + t);
const S0 = 15;
function zB(t) {
  t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
  let e = t.split("").map((r) => xl[r]).join("");
  for (; e.length >= S0; ) {
    let r = e.substring(0, S0);
    e = parseInt(r, 10) % 97 + e.substring(r.length);
  }
  let n = String(98 - parseInt(e, 10) % 97);
  for (; n.length < 2; )
    n = "0" + n;
  return n;
}
const VB = function() {
  const t = {};
  for (let e = 0; e < 36; e++) {
    const n = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
    t[n] = BigInt(e);
  }
  return t;
}();
function WB(t) {
  t = t.toLowerCase();
  let e = GB;
  for (let n = 0; n < t.length; n++)
    e = e * qB + VB[t[n]];
  return e;
}
function Dr(t) {
  if (z(typeof t == "string", "invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    t.startsWith("0x") || (t = "0x" + t);
    const e = v0(t);
    return z(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t, "bad address checksum", "address", t), e;
  }
  if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    z(t.substring(2, 4) === zB(t), "bad icap checksum", "address", t);
    let e = WB(t.substring(4)).toString(16);
    for (; e.length < 40; )
      e = "0" + e;
    return v0("0x" + e);
  }
  z(!1, "invalid address", "address", t);
}
function vl(t) {
  return Je(us(t));
}
function Gc(t, e) {
  return {
    address: Dr(t),
    storageKeys: e.map((n, r) => (z(Dt(n, 32), "invalid slot", `storageKeys[${r}]`, n), n.toLowerCase()))
  };
}
function Ma(t) {
  if (Array.isArray(t))
    return t.map((n, r) => Array.isArray(n) ? (z(n.length === 2, "invalid slot set", `value[${r}]`, n), Gc(n[0], n[1])) : (z(n != null && typeof n == "object", "invalid address-slot set", "value", t), Gc(n.address, n.storageKeys)));
  z(t != null && typeof t == "object", "invalid access list", "value", t);
  const e = Object.keys(t).map((n) => {
    const r = t[n].reduce((i, s) => (i[s] = !0, i), {});
    return Gc(n, Object.keys(r).sort());
  });
  return e.sort((n, r) => n.address.localeCompare(r.address)), e;
}
function Gb(t) {
  let e;
  return typeof t == "string" ? e = Li.computePublicKey(t, !1) : e = t.publicKey, Dr(Je("0x" + e.substring(4)).substring(26));
}
function qb(t, e) {
  return Gb(Li.recoverPublicKey(t, e));
}
const Ge = BigInt(0), KB = BigInt(2), ZB = BigInt(27), YB = BigInt(28), JB = BigInt(35), XB = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), qc = 4096 * 32;
function _0(t, e) {
  let n = t.toString(16);
  for (; n.length < 2; )
    n = "0" + n;
  return n += Ur(e).substring(4), "0x" + n;
}
function Fa(t) {
  return t === "0x" ? null : Dr(t);
}
function Sl(t, e) {
  try {
    return Ma(t);
  } catch (n) {
    z(!1, n.message, e, t);
  }
}
function io(t, e) {
  return t === "0x" ? 0 : Yt(t, e);
}
function Oe(t, e) {
  if (t === "0x")
    return Ge;
  const n = Le(t, e);
  return z(n <= XB, "value exceeds uint size", e, n), n;
}
function _e(t, e) {
  const n = Le(t, "value"), r = ct(n);
  return z(r.length <= 32, "value too large", `tx.${e}`, n), r;
}
function _l(t) {
  return Ma(t).map((e) => [e.address, e.storageKeys]);
}
function QB(t, e) {
  z(Array.isArray(t), `invalid ${e}`, "value", t);
  for (let n = 0; n < t.length; n++)
    z(Dt(t[n], 32), "invalid ${ param } hash", `value[${n}]`, t[n]);
  return t;
}
function eT(t) {
  const e = no(t);
  z(Array.isArray(e) && (e.length === 9 || e.length === 6), "invalid field count for legacy transaction", "data", t);
  const n = {
    type: 0,
    nonce: io(e[0], "nonce"),
    gasPrice: Oe(e[1], "gasPrice"),
    gasLimit: Oe(e[2], "gasLimit"),
    to: Fa(e[3]),
    value: Oe(e[4], "value"),
    data: he(e[5]),
    chainId: Ge
  };
  if (e.length === 6)
    return n;
  const r = Oe(e[6], "v"), i = Oe(e[7], "r"), s = Oe(e[8], "s");
  if (i === Ge && s === Ge)
    n.chainId = r;
  else {
    let o = (r - JB) / KB;
    o < Ge && (o = Ge), n.chainId = o, z(o !== Ge || r === ZB || r === YB, "non-canonical legacy v", "v", e[6]), n.signature = jt.from({
      r: Nr(e[7], 32),
      s: Nr(e[8], 32),
      v: r
    });
  }
  return n;
}
function tT(t, e) {
  const n = [
    _e(t.nonce, "nonce"),
    _e(t.gasPrice || 0, "gasPrice"),
    _e(t.gasLimit, "gasLimit"),
    t.to || "0x",
    _e(t.value, "value"),
    t.data
  ];
  let r = Ge;
  if (t.chainId != Ge)
    r = Le(t.chainId, "tx.chainId"), z(!e || e.networkV == null || e.legacyChainId === r, "tx.chainId/sig.v mismatch", "sig", e);
  else if (t.signature) {
    const s = t.signature.legacyChainId;
    s != null && (r = s);
  }
  if (!e)
    return r !== Ge && (n.push(ct(r)), n.push("0x"), n.push("0x")), Rr(n);
  let i = BigInt(27 + e.yParity);
  return r !== Ge ? i = jt.getChainIdV(r, e.v) : BigInt(e.v) !== i && z(!1, "tx.chainId/sig.v mismatch", "sig", e), n.push(ct(i)), n.push(ct(e.r)), n.push(ct(e.s)), Rr(n);
}
function Al(t, e) {
  let n;
  try {
    if (n = io(e[0], "yParity"), n !== 0 && n !== 1)
      throw new Error("bad yParity");
  } catch {
    z(!1, "invalid yParity", "yParity", e[0]);
  }
  const r = Nr(e[1], 32), i = Nr(e[2], 32), s = jt.from({ r, s: i, yParity: n });
  t.signature = s;
}
function nT(t) {
  const e = no(Ae(t).slice(1));
  z(Array.isArray(e) && (e.length === 9 || e.length === 12), "invalid field count for transaction type: 2", "data", he(t));
  const n = {
    type: 2,
    chainId: Oe(e[0], "chainId"),
    nonce: io(e[1], "nonce"),
    maxPriorityFeePerGas: Oe(e[2], "maxPriorityFeePerGas"),
    maxFeePerGas: Oe(e[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: Oe(e[4], "gasLimit"),
    to: Fa(e[5]),
    value: Oe(e[6], "value"),
    data: he(e[7]),
    accessList: Sl(e[8], "accessList")
  };
  return e.length === 9 || Al(n, e.slice(9)), n;
}
function rT(t, e) {
  const n = [
    _e(t.chainId, "chainId"),
    _e(t.nonce, "nonce"),
    _e(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    _e(t.maxFeePerGas || 0, "maxFeePerGas"),
    _e(t.gasLimit, "gasLimit"),
    t.to || "0x",
    _e(t.value, "value"),
    t.data,
    _l(t.accessList || [])
  ];
  return e && (n.push(_e(e.yParity, "yParity")), n.push(ct(e.r)), n.push(ct(e.s))), ht(["0x02", Rr(n)]);
}
function iT(t) {
  const e = no(Ae(t).slice(1));
  z(Array.isArray(e) && (e.length === 8 || e.length === 11), "invalid field count for transaction type: 1", "data", he(t));
  const n = {
    type: 1,
    chainId: Oe(e[0], "chainId"),
    nonce: io(e[1], "nonce"),
    gasPrice: Oe(e[2], "gasPrice"),
    gasLimit: Oe(e[3], "gasLimit"),
    to: Fa(e[4]),
    value: Oe(e[5], "value"),
    data: he(e[6]),
    accessList: Sl(e[7], "accessList")
  };
  return e.length === 8 || Al(n, e.slice(8)), n;
}
function sT(t, e) {
  const n = [
    _e(t.chainId, "chainId"),
    _e(t.nonce, "nonce"),
    _e(t.gasPrice || 0, "gasPrice"),
    _e(t.gasLimit, "gasLimit"),
    t.to || "0x",
    _e(t.value, "value"),
    t.data,
    _l(t.accessList || [])
  ];
  return e && (n.push(_e(e.yParity, "recoveryParam")), n.push(ct(e.r)), n.push(ct(e.s))), ht(["0x01", Rr(n)]);
}
function oT(t) {
  let e = no(Ae(t).slice(1)), n = "3", r = null;
  if (e.length === 4 && Array.isArray(e[0])) {
    n = "3 (network format)";
    const s = e[1], o = e[2], a = e[3];
    z(Array.isArray(s), "invalid network format: blobs not an array", "fields[1]", s), z(Array.isArray(o), "invalid network format: commitments not an array", "fields[2]", o), z(Array.isArray(a), "invalid network format: proofs not an array", "fields[3]", a), z(s.length === o.length, "invalid network format: blobs/commitments length mismatch", "fields", e), z(s.length === a.length, "invalid network format: blobs/proofs length mismatch", "fields", e), r = [];
    for (let c = 0; c < e[1].length; c++)
      r.push({
        data: s[c],
        commitment: o[c],
        proof: a[c]
      });
    e = e[0];
  }
  z(Array.isArray(e) && (e.length === 11 || e.length === 14), `invalid field count for transaction type: ${n}`, "data", he(t));
  const i = {
    type: 3,
    chainId: Oe(e[0], "chainId"),
    nonce: io(e[1], "nonce"),
    maxPriorityFeePerGas: Oe(e[2], "maxPriorityFeePerGas"),
    maxFeePerGas: Oe(e[3], "maxFeePerGas"),
    gasPrice: null,
    gasLimit: Oe(e[4], "gasLimit"),
    to: Fa(e[5]),
    value: Oe(e[6], "value"),
    data: he(e[7]),
    accessList: Sl(e[8], "accessList"),
    maxFeePerBlobGas: Oe(e[9], "maxFeePerBlobGas"),
    blobVersionedHashes: e[10]
  };
  r && (i.blobs = r), z(i.to != null, `invalid address for transaction type: ${n}`, "data", t), z(Array.isArray(i.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", t);
  for (let s = 0; s < i.blobVersionedHashes.length; s++)
    z(Dt(i.blobVersionedHashes[s], 32), `invalid blobVersionedHash at index ${s}: must be length 32`, "data", t);
  return e.length === 11 || Al(i, e.slice(11)), i;
}
function aT(t, e, n) {
  const r = [
    _e(t.chainId, "chainId"),
    _e(t.nonce, "nonce"),
    _e(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    _e(t.maxFeePerGas || 0, "maxFeePerGas"),
    _e(t.gasLimit, "gasLimit"),
    t.to || El,
    _e(t.value, "value"),
    t.data,
    _l(t.accessList || []),
    _e(t.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
    QB(t.blobVersionedHashes || [], "blobVersionedHashes")
  ];
  return e && (r.push(_e(e.yParity, "yParity")), r.push(ct(e.r)), r.push(ct(e.s)), n) ? ht([
    "0x03",
    Rr([
      r,
      n.map((i) => i.data),
      n.map((i) => i.commitment),
      n.map((i) => i.proof)
    ])
  ]) : ht(["0x03", Rr(r)]);
}
var Wt, si, oi, ai, ci, ui, fi, li, di, hi, pi, gi, gr, Hn, gn, Gn, yi, Lo;
const ln = class ln {
  /**
   *  Creates a new Transaction with default values.
   */
  constructor() {
    me(this, yi);
    me(this, Wt);
    me(this, si);
    me(this, oi);
    me(this, ai);
    me(this, ci);
    me(this, ui);
    me(this, fi);
    me(this, li);
    me(this, di);
    me(this, hi);
    me(this, pi);
    me(this, gi);
    me(this, gr);
    me(this, Hn);
    me(this, gn);
    me(this, Gn);
    te(this, Wt, null), te(this, si, null), te(this, ai, 0), te(this, ci, Ge), te(this, ui, null), te(this, fi, null), te(this, li, null), te(this, oi, "0x"), te(this, di, Ge), te(this, hi, Ge), te(this, pi, null), te(this, gi, null), te(this, gr, null), te(this, Hn, null), te(this, Gn, null), te(this, gn, null);
  }
  /**
   *  The transaction type.
   *
   *  If null, the type will be automatically inferred based on
   *  explicit properties.
   */
  get type() {
    return ue(this, Wt);
  }
  set type(e) {
    switch (e) {
      case null:
        te(this, Wt, null);
        break;
      case 0:
      case "legacy":
        te(this, Wt, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        te(this, Wt, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        te(this, Wt, 2);
        break;
      case 3:
      case "cancun":
      case "eip-4844":
        te(this, Wt, 3);
        break;
      default:
        z(!1, "unsupported transaction type", "type", e);
    }
  }
  /**
   *  The name of the transaction type.
   */
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
      case 3:
        return "eip-4844";
    }
    return null;
  }
  /**
   *  The ``to`` address for the transaction or ``null`` if the
   *  transaction is an ``init`` transaction.
   */
  get to() {
    const e = ue(this, si);
    return e == null && this.type === 3 ? El : e;
  }
  set to(e) {
    te(this, si, e == null ? null : Dr(e));
  }
  /**
   *  The transaction nonce.
   */
  get nonce() {
    return ue(this, ai);
  }
  set nonce(e) {
    te(this, ai, Yt(e, "value"));
  }
  /**
   *  The gas limit.
   */
  get gasLimit() {
    return ue(this, ci);
  }
  set gasLimit(e) {
    te(this, ci, Le(e));
  }
  /**
   *  The gas price.
   *
   *  On legacy networks this defines the fee that will be paid. On
   *  EIP-1559 networks, this should be ``null``.
   */
  get gasPrice() {
    const e = ue(this, ui);
    return e == null && (this.type === 0 || this.type === 1) ? Ge : e;
  }
  set gasPrice(e) {
    te(this, ui, e == null ? null : Le(e, "gasPrice"));
  }
  /**
   *  The maximum priority fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxPriorityFeePerGas() {
    const e = ue(this, fi);
    return e ?? (this.type === 2 || this.type === 3 ? Ge : null);
  }
  set maxPriorityFeePerGas(e) {
    te(this, fi, e == null ? null : Le(e, "maxPriorityFeePerGas"));
  }
  /**
   *  The maximum total fee per unit of gas to pay. On legacy
   *  networks this should be ``null``.
   */
  get maxFeePerGas() {
    const e = ue(this, li);
    return e ?? (this.type === 2 || this.type === 3 ? Ge : null);
  }
  set maxFeePerGas(e) {
    te(this, li, e == null ? null : Le(e, "maxFeePerGas"));
  }
  /**
   *  The transaction data. For ``init`` transactions this is the
   *  deployment code.
   */
  get data() {
    return ue(this, oi);
  }
  set data(e) {
    te(this, oi, he(e));
  }
  /**
   *  The amount of ether (in wei) to send in this transactions.
   */
  get value() {
    return ue(this, di);
  }
  set value(e) {
    te(this, di, Le(e, "value"));
  }
  /**
   *  The chain ID this transaction is valid on.
   */
  get chainId() {
    return ue(this, hi);
  }
  set chainId(e) {
    te(this, hi, Le(e));
  }
  /**
   *  If signed, the signature for this transaction.
   */
  get signature() {
    return ue(this, pi) || null;
  }
  set signature(e) {
    te(this, pi, e == null ? null : jt.from(e));
  }
  /**
   *  The access list.
   *
   *  An access list permits discounted (but pre-paid) access to
   *  bytecode and state variable access within contract execution.
   */
  get accessList() {
    const e = ue(this, gi) || null;
    return e ?? (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null);
  }
  set accessList(e) {
    te(this, gi, e == null ? null : Ma(e));
  }
  /**
   *  The max fee per blob gas for Cancun transactions.
   */
  get maxFeePerBlobGas() {
    const e = ue(this, gr);
    return e == null && this.type === 3 ? Ge : e;
  }
  set maxFeePerBlobGas(e) {
    te(this, gr, e == null ? null : Le(e, "maxFeePerBlobGas"));
  }
  /**
   *  The BLOb versioned hashes for Cancun transactions.
   */
  get blobVersionedHashes() {
    let e = ue(this, Hn);
    return e == null && this.type === 3 ? [] : e;
  }
  set blobVersionedHashes(e) {
    if (e != null) {
      z(Array.isArray(e), "blobVersionedHashes must be an Array", "value", e), e = e.slice();
      for (let n = 0; n < e.length; n++)
        z(Dt(e[n], 32), "invalid blobVersionedHash", `value[${n}]`, e[n]);
    }
    te(this, Hn, e);
  }
  /**
   *  The BLObs for the Transaction, if any.
   *
   *  If ``blobs`` is non-``null``, then the [[seriailized]]
   *  will return the network formatted sidecar, otherwise it
   *  will return the standard [[link-eip-2718]] payload. The
   *  [[unsignedSerialized]] is unaffected regardless.
   *
   *  When setting ``blobs``, either fully valid [[Blob]] objects
   *  may be specified (i.e. correctly padded, with correct
   *  committments and proofs) or a raw [[BytesLike]] may
   *  be provided.
   *
   *  If raw [[BytesLike]] are provided, the [[kzg]] property **must**
   *  be already set. The blob will be correctly padded and the
   *  [[KzgLibrary]] will be used to compute the committment and
   *  proof for the blob.
   *
   *  A BLOb is a sequence of field elements, each of which must
   *  be within the BLS field modulo, so some additional processing
   *  may be required to encode arbitrary data to ensure each 32 byte
   *  field is within the valid range.
   *
   *  Setting this automatically populates [[blobVersionedHashes]],
   *  overwriting any existing values. Setting this to ``null``
   *  does **not** remove the [[blobVersionedHashes]], leaving them
   *  present.
   */
  get blobs() {
    return ue(this, Gn) == null ? null : ue(this, Gn).map((e) => Object.assign({}, e));
  }
  set blobs(e) {
    if (e == null) {
      te(this, Gn, null);
      return;
    }
    const n = [], r = [];
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      if (fl(s)) {
        He(ue(this, gn), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
          operation: "set blobs()"
        });
        let o = Ae(s);
        if (z(o.length <= qc, "blob is too large", `blobs[${i}]`, s), o.length !== qc) {
          const u = new Uint8Array(qc);
          u.set(o), o = u;
        }
        const a = ue(this, gn).blobToKzgCommitment(o), c = he(ue(this, gn).computeBlobKzgProof(o, a));
        n.push({
          data: he(o),
          commitment: he(a),
          proof: c
        }), r.push(_0(1, a));
      } else {
        const o = he(s.commitment);
        n.push({
          data: he(s.data),
          commitment: o,
          proof: he(s.proof)
        }), r.push(_0(1, o));
      }
    }
    te(this, Gn, n), te(this, Hn, r);
  }
  get kzg() {
    return ue(this, gn);
  }
  set kzg(e) {
    te(this, gn, e);
  }
  /**
   *  The transaction hash, if signed. Otherwise, ``null``.
   */
  get hash() {
    return this.signature == null ? null : Je(Ki(this, yi, Lo).call(this, !0, !1));
  }
  /**
   *  The pre-image hash of this transaction.
   *
   *  This is the digest that a [[Signer]] must sign to authorize
   *  this transaction.
   */
  get unsignedHash() {
    return Je(this.unsignedSerialized);
  }
  /**
   *  The sending address, if signed. Otherwise, ``null``.
   */
  get from() {
    return this.signature == null ? null : qb(this.unsignedHash, this.signature);
  }
  /**
   *  The public key of the sender, if signed. Otherwise, ``null``.
   */
  get fromPublicKey() {
    return this.signature == null ? null : Li.recoverPublicKey(this.unsignedHash, this.signature);
  }
  /**
   *  Returns true if signed.
   *
   *  This provides a Type Guard that properties requiring a signed
   *  transaction are non-null.
   */
  isSigned() {
    return this.signature != null;
  }
  /**
   *  The serialized transaction.
   *
   *  This throws if the transaction is unsigned. For the pre-image,
   *  use [[unsignedSerialized]].
   */
  get serialized() {
    return Ki(this, yi, Lo).call(this, !0, !0);
  }
  /**
   *  The transaction pre-image.
   *
   *  The hash of this is the digest which needs to be signed to
   *  authorize this transaction.
   */
  get unsignedSerialized() {
    return Ki(this, yi, Lo).call(this, !1, !1);
  }
  /**
   *  Return the most "likely" type; currently the highest
   *  supported transaction type.
   */
  inferType() {
    const e = this.inferTypes();
    return e.indexOf(2) >= 0 ? 2 : e.pop();
  }
  /**
   *  Validates the explicit properties and returns a list of compatible
   *  transaction types.
   */
  inferTypes() {
    const e = this.gasPrice != null, n = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null, r = this.accessList != null, i = ue(this, gr) != null || ue(this, Hn);
    this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && He(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this }), He(!n || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this }), He(this.type !== 0 || !r, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const s = [];
    return this.type != null ? s.push(this.type) : n ? s.push(2) : e ? (s.push(1), r || s.push(0)) : r ? (s.push(1), s.push(2)) : (i && this.to || (s.push(0), s.push(1), s.push(2)), s.push(3)), s.sort(), s;
  }
  /**
   *  Returns true if this transaction is a legacy transaction (i.e.
   *  ``type === 0``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLegacy() {
    return this.type === 0;
  }
  /**
   *  Returns true if this transaction is berlin hardform transaction (i.e.
   *  ``type === 1``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isBerlin() {
    return this.type === 1;
  }
  /**
   *  Returns true if this transaction is london hardform transaction (i.e.
   *  ``type === 2``).
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isLondon() {
    return this.type === 2;
  }
  /**
   *  Returns true if this transaction is an [[link-eip-4844]] BLOB
   *  transaction.
   *
   *  This provides a Type Guard that the related properties are
   *  non-null.
   */
  isCancun() {
    return this.type === 3;
  }
  /**
   *  Create a copy of this transaciton.
   */
  clone() {
    return ln.from(this);
  }
  /**
   *  Return a JSON-friendly object.
   */
  toJSON() {
    const e = (n) => n == null ? null : n.toString();
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: e(this.gasLimit),
      gasPrice: e(this.gasPrice),
      maxPriorityFeePerGas: e(this.maxPriorityFeePerGas),
      maxFeePerGas: e(this.maxFeePerGas),
      value: e(this.value),
      chainId: e(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  /**
   *  Create a **Transaction** from a serialized transaction or a
   *  Transaction-like object.
   */
  static from(e) {
    if (e == null)
      return new ln();
    if (typeof e == "string") {
      const r = Ae(e);
      if (r[0] >= 127)
        return ln.from(eT(r));
      switch (r[0]) {
        case 1:
          return ln.from(iT(r));
        case 2:
          return ln.from(nT(r));
        case 3:
          return ln.from(oT(r));
      }
      He(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const n = new ln();
    return e.type != null && (n.type = e.type), e.to != null && (n.to = e.to), e.nonce != null && (n.nonce = e.nonce), e.gasLimit != null && (n.gasLimit = e.gasLimit), e.gasPrice != null && (n.gasPrice = e.gasPrice), e.maxPriorityFeePerGas != null && (n.maxPriorityFeePerGas = e.maxPriorityFeePerGas), e.maxFeePerGas != null && (n.maxFeePerGas = e.maxFeePerGas), e.maxFeePerBlobGas != null && (n.maxFeePerBlobGas = e.maxFeePerBlobGas), e.data != null && (n.data = e.data), e.value != null && (n.value = e.value), e.chainId != null && (n.chainId = e.chainId), e.signature != null && (n.signature = jt.from(e.signature)), e.accessList != null && (n.accessList = e.accessList), e.blobVersionedHashes != null && (n.blobVersionedHashes = e.blobVersionedHashes), e.kzg != null && (n.kzg = e.kzg), e.blobs != null && (n.blobs = e.blobs), e.hash != null && (z(n.isSigned(), "unsigned transaction cannot define '.hash'", "tx", e), z(n.hash === e.hash, "hash mismatch", "tx", e)), e.from != null && (z(n.isSigned(), "unsigned transaction cannot define '.from'", "tx", e), z(n.from.toLowerCase() === (e.from || "").toLowerCase(), "from mismatch", "tx", e)), n;
  }
};
Wt = new WeakMap(), si = new WeakMap(), oi = new WeakMap(), ai = new WeakMap(), ci = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), li = new WeakMap(), di = new WeakMap(), hi = new WeakMap(), pi = new WeakMap(), gi = new WeakMap(), gr = new WeakMap(), Hn = new WeakMap(), gn = new WeakMap(), Gn = new WeakMap(), yi = new WeakSet(), Lo = function(e, n) {
  He(!e || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  const r = e ? this.signature : null;
  switch (this.inferType()) {
    case 0:
      return tT(this, r);
    case 1:
      return sT(this, r);
    case 2:
      return rT(this, r);
    case 3:
      return aT(this, r, n ? this.blobs : null);
  }
  He(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
};
let ef = ln;
function zb(t) {
  return typeof t == "string" && (t = us(t)), Je(ht([
    us(Hb),
    us(String(t.length)),
    t
  ]));
}
const Vb = new Uint8Array(32);
Vb.fill(0);
const cT = BigInt(-1), Wb = BigInt(0), Kb = BigInt(1), uT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function fT(t) {
  const e = Ae(t), n = e.length % 32;
  return n ? ht([e, Vb.slice(n)]) : he(e);
}
const lT = Ni(Kb, 32), dT = Ni(Wb, 32), A0 = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
}, zc = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function I0(t) {
  return function(e) {
    return z(typeof e == "string", `invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e;
  };
}
const hT = {
  name: I0("name"),
  version: I0("version"),
  chainId: function(t) {
    const e = Le(t, "domain.chainId");
    return z(e >= 0, "invalid chain ID", "domain.chainId", t), Number.isSafeInteger(e) ? Number(e) : fb(e);
  },
  verifyingContract: function(t) {
    try {
      return Dr(t).toLowerCase();
    } catch {
    }
    z(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t);
  },
  salt: function(t) {
    const e = Ae(t, "domain.salt");
    return z(e.length === 32, 'invalid domain value "salt"', "domain.salt", t), he(e);
  }
};
function Vc(t) {
  {
    const e = t.match(/^(u?)int(\d+)$/);
    if (e) {
      const n = e[1] === "", r = parseInt(e[2]);
      z(r % 8 === 0 && r !== 0 && r <= 256 && e[2] === String(r), "invalid numeric width", "type", t);
      const i = ub(uT, n ? r - 1 : r), s = n ? (i + Kb) * cT : Wb;
      return function(o) {
        const a = Le(o, "value");
        return z(a >= s && a <= i, `value out-of-bounds for ${t}`, "value", a), Ni(n ? cb(a, 256) : a, 32);
      };
    }
  }
  {
    const e = t.match(/^bytes(\d+)$/);
    if (e) {
      const n = parseInt(e[1]);
      return z(n !== 0 && n <= 32 && e[1] === String(n), "invalid bytes width", "type", t), function(r) {
        const i = Ae(r);
        return z(i.length === n, `invalid length for ${t}`, "value", r), fT(r);
      };
    }
  }
  switch (t) {
    case "address":
      return function(e) {
        return Nr(Dr(e), 32);
      };
    case "bool":
      return function(e) {
        return e ? lT : dT;
      };
    case "bytes":
      return function(e) {
        return Je(e);
      };
    case "string":
      return function(e) {
        return vl(e);
      };
  }
  return null;
}
function P0(t, e) {
  return `${t}(${e.map(({ name: n, type: r }) => r + " " + n).join(",")})`;
}
function Ao(t) {
  const e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
  return e ? {
    base: e[1],
    index: e[2] + e[4],
    array: {
      base: e[1],
      prefix: e[1] + e[2],
      count: e[5] ? parseInt(e[5]) : -1
    }
  } : { base: t };
}
var Os, yn, bi, Yo, Zb;
const St = class St {
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   *
   *  This performs all necessary checking that types are valid and
   *  do not violate the [[link-eip-712]] structural constraints as
   *  well as computes the [[primaryType]].
   */
  constructor(e) {
    me(this, Yo);
    /**
     *  The primary type for the structured [[types]].
     *
     *  This is derived automatically from the [[types]], since no
     *  recursion is possible, once the DAG for the types is consturcted
     *  internally, the primary type must be the only remaining type with
     *  no parent nodes.
     */
    Fl(this, "primaryType");
    me(this, Os);
    me(this, yn);
    me(this, bi);
    te(this, yn, /* @__PURE__ */ new Map()), te(this, bi, /* @__PURE__ */ new Map());
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = {};
    Object.keys(e).forEach((c) => {
      s[c] = e[c].map(({ name: u, type: f }) => {
        let { base: l, index: d } = Ao(f);
        return l === "int" && !e.int && (l = "int256"), l === "uint" && !e.uint && (l = "uint256"), { name: u, type: l + (d || "") };
      }), n.set(c, /* @__PURE__ */ new Set()), r.set(c, []), i.set(c, /* @__PURE__ */ new Set());
    }), te(this, Os, JSON.stringify(s));
    for (const c in s) {
      const u = /* @__PURE__ */ new Set();
      for (const f of s[c]) {
        z(!u.has(f.name), `duplicate variable name ${JSON.stringify(f.name)} in ${JSON.stringify(c)}`, "types", e), u.add(f.name);
        const l = Ao(f.type).base;
        z(l !== c, `circular type reference to ${JSON.stringify(l)}`, "types", e), !Vc(l) && (z(r.has(l), `unknown type ${JSON.stringify(l)}`, "types", e), r.get(l).push(c), n.get(c).add(l));
      }
    }
    const o = Array.from(r.keys()).filter((c) => r.get(c).length === 0);
    z(o.length !== 0, "missing primary type", "types", e), z(o.length === 1, `ambiguous primary types or unused types: ${o.map((c) => JSON.stringify(c)).join(", ")}`, "types", e), Wo(this, { primaryType: o[0] });
    function a(c, u) {
      z(!u.has(c), `circular type reference to ${JSON.stringify(c)}`, "types", e), u.add(c);
      for (const f of n.get(c))
        if (r.has(f)) {
          a(f, u);
          for (const l of u)
            i.get(l).add(f);
        }
      u.delete(c);
    }
    a(this.primaryType, /* @__PURE__ */ new Set());
    for (const [c, u] of i) {
      const f = Array.from(u);
      f.sort(), ue(this, yn).set(c, P0(c, s[c]) + f.map((l) => P0(l, s[l])).join(""));
    }
  }
  /**
   *  The types.
   */
  get types() {
    return JSON.parse(ue(this, Os));
  }
  /**
   *  Returnthe encoder for the specific %%type%%.
   */
  getEncoder(e) {
    let n = ue(this, bi).get(e);
    return n || (n = Ki(this, Yo, Zb).call(this, e), ue(this, bi).set(e, n)), n;
  }
  /**
   *  Return the full type for %%name%%.
   */
  encodeType(e) {
    const n = ue(this, yn).get(e);
    return z(n, `unknown type: ${JSON.stringify(e)}`, "name", e), n;
  }
  /**
   *  Return the encoded %%value%% for the %%type%%.
   */
  encodeData(e, n) {
    return this.getEncoder(e)(n);
  }
  /**
   *  Returns the hash of %%value%% for the type of %%name%%.
   */
  hashStruct(e, n) {
    return Je(this.encodeData(e, n));
  }
  /**
   *  Return the fulled encoded %%value%% for the [[types]].
   */
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  /**
   *  Return the hash of the fully encoded %%value%% for the [[types]].
   */
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  /**
   *  @_ignore:
   */
  _visit(e, n, r) {
    if (Vc(e))
      return r(e, n);
    const i = Ao(e).array;
    if (i)
      return z(i.count === -1 || i.count === n.length, `array length mismatch; expected length ${i.count}`, "value", n), n.map((o) => this._visit(i.prefix, o, r));
    const s = this.types[e];
    if (s)
      return s.reduce((o, { name: a, type: c }) => (o[a] = this._visit(c, n[a], r), o), {});
    z(!1, `unknown type: ${e}`, "type", e);
  }
  /**
   *  Call %%calback%% for each value in %%value%%, passing the type and
   *  component within %%value%%.
   *
   *  This is useful for replacing addresses or other transformation that
   *  may be desired on each component, based on its type.
   */
  visit(e, n) {
    return this._visit(this.primaryType, e, n);
  }
  /**
   *  Create a new **TypedDataEncoder** for %%types%%.
   */
  static from(e) {
    return new St(e);
  }
  /**
   *  Return the primary type for %%types%%.
   */
  static getPrimaryType(e) {
    return St.from(e).primaryType;
  }
  /**
   *  Return the hashed struct for %%value%% using %%types%% and %%name%%.
   */
  static hashStruct(e, n, r) {
    return St.from(n).hashStruct(e, r);
  }
  /**
   *  Return the domain hash for %%domain%%.
   */
  static hashDomain(e) {
    const n = [];
    for (const r in e) {
      if (e[r] == null)
        continue;
      const i = A0[r];
      z(i, `invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), n.push({ name: r, type: i });
    }
    return n.sort((r, i) => zc.indexOf(r.name) - zc.indexOf(i.name)), St.hashStruct("EIP712Domain", { EIP712Domain: n }, e);
  }
  /**
   *  Return the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static encode(e, n, r) {
    return ht([
      "0x1901",
      St.hashDomain(e),
      St.from(n).hash(r)
    ]);
  }
  /**
   *  Return the hash of the fully encoded [[link-eip-712]] %%value%% for %%types%% with %%domain%%.
   */
  static hash(e, n, r) {
    return Je(St.encode(e, n, r));
  }
  // Replaces all address types with ENS names with their looked up address
  /**
   * Resolves to the value from resolving all addresses in %%value%% for
   * %%types%% and the %%domain%%.
   */
  static async resolveNames(e, n, r, i) {
    e = Object.assign({}, e);
    for (const a in e)
      e[a] == null && delete e[a];
    const s = {};
    e.verifyingContract && !Dt(e.verifyingContract, 20) && (s[e.verifyingContract] = "0x");
    const o = St.from(n);
    o.visit(r, (a, c) => (a === "address" && !Dt(c, 20) && (s[c] = "0x"), c));
    for (const a in s)
      s[a] = await i(a);
    return e.verifyingContract && s[e.verifyingContract] && (e.verifyingContract = s[e.verifyingContract]), r = o.visit(r, (a, c) => a === "address" && s[c] ? s[c] : c), { domain: e, value: r };
  }
  /**
   *  Returns the JSON-encoded payload expected by nodes which implement
   *  the JSON-RPC [[link-eip-712]] method.
   */
  static getPayload(e, n, r) {
    St.hashDomain(e);
    const i = {}, s = [];
    zc.forEach((c) => {
      const u = e[c];
      u != null && (i[c] = hT[c](u), s.push({ name: c, type: A0[c] }));
    });
    const o = St.from(n);
    n = o.types;
    const a = Object.assign({}, n);
    return z(a.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", n), a.EIP712Domain = s, o.encode(r), {
      types: a,
      domain: i,
      primaryType: o.primaryType,
      message: o.visit(r, (c, u) => {
        if (c.match(/^bytes(\d*)/))
          return he(Ae(u));
        if (c.match(/^u?int/))
          return Le(u).toString();
        switch (c) {
          case "address":
            return u.toLowerCase();
          case "bool":
            return !!u;
          case "string":
            return z(typeof u == "string", "invalid string", "value", u), u;
        }
        z(!1, "unsupported type", "type", c);
      })
    };
  }
};
Os = new WeakMap(), yn = new WeakMap(), bi = new WeakMap(), Yo = new WeakSet(), Zb = function(e) {
  {
    const i = Vc(e);
    if (i)
      return i;
  }
  const n = Ao(e).array;
  if (n) {
    const i = n.prefix, s = this.getEncoder(i);
    return (o) => {
      z(n.count === -1 || n.count === o.length, `array length mismatch; expected length ${n.count}`, "value", o);
      let a = o.map(s);
      return ue(this, yn).has(i) && (a = a.map(Je)), Je(ht(a));
    };
  }
  const r = this.types[e];
  if (r) {
    const i = vl(ue(this, yn).get(e));
    return (s) => {
      const o = r.map(({ name: a, type: c }) => {
        const u = this.getEncoder(c)(s[a]);
        return ue(this, yn).has(c) ? Je(u) : u;
      });
      return o.unshift(i), ht(o);
    };
  }
  z(!1, `unknown type: ${e}`, "type", e);
};
let Zo = St;
const pT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MessagePrefix: Hb,
  Signature: jt,
  SigningKey: Li,
  Transaction: ef,
  TypedDataEncoder: Zo,
  ZeroAddress: El,
  ZeroHash: Qu,
  accessListify: Ma,
  assert: He,
  assertArgument: z,
  assertPrivate: ob,
  computeAddress: Gb,
  concat: ht,
  dataLength: ti,
  decodeRlp: no,
  defineProperties: Wo,
  encodeRlp: Rr,
  getAddress: Dr,
  getBigInt: Le,
  getBytes: Ae,
  getBytesCopy: zr,
  getNumber: Yt,
  getUint: Oa,
  hashMessage: zb,
  hexlify: he,
  id: vl,
  isBytesLike: fl,
  isHexString: Dt,
  keccak256: Je,
  makeError: sb,
  mask: ub,
  recoverAddress: qb,
  sha256: Ur,
  toBeArray: ct,
  toBeHex: Ni,
  toQuantity: fb,
  toTwos: cb,
  toUtf8Bytes: us,
  version: ib,
  zeroPadValue: Nr
}, Symbol.toStringTag, { value: "Module" })), Yb = new qe("1e18"), Jb = new qe("1e9"), Xb = new qe("1"), gT = {
  hex: (t) => typeof t == "string" ? new qe(Vn(t), 16) : new qe(t, 16),
  dec: (t) => new qe(t, 10)
}, yT = {
  WEI: (t) => t.div(Yb),
  GWEI: (t) => t.div(Jb),
  ETH: (t) => t.div(Xb)
}, bT = {
  WEI: (t) => t.times(Yb).dp(0, qe.ROUND_HALF_UP),
  GWEI: (t) => t.times(Jb).dp(9, qe.ROUND_HALF_UP),
  ETH: (t) => t.times(Xb).dp(9, qe.ROUND_HALF_UP)
}, mT = {
  hex: (t) => t.toString(16),
  dec: (t) => new qe(t).toString(10)
}, wT = (t) => {
  const {
    value: e,
    fromNumericBase: n,
    fromDenomination: r,
    toNumericBase: i,
    toDenomination: s,
    numberOfDecimals: o
  } = t;
  let a = gT[n](e);
  return r && (a = yT[r](a)), s && (a = bT[s](a)), o && (a = a.dp(o, qe.ROUND_HALF_DOWN)), i && (a = mT[i](a)), a;
}, Qb = (t, {
  fromNumericBase: e = "hex",
  toNumericBase: n,
  fromDenomination: r,
  toDenomination: i,
  numberOfDecimals: s
}) => wT({
  fromNumericBase: e,
  toNumericBase: n,
  fromDenomination: r,
  toDenomination: i,
  numberOfDecimals: s,
  value: t || "0"
});
function Vr(t) {
  return Qb(t, {
    fromNumericBase: "dec",
    toNumericBase: "hex",
    fromDenomination: "GWEI",
    toDenomination: "WEI"
  });
}
function un(t) {
  return Qb(t, {
    fromNumericBase: "hex",
    toNumericBase: "dec",
    fromDenomination: "WEI",
    toDenomination: "GWEI"
  });
}
function ir(t) {
  const e = Vr(t);
  return un(e).toString();
}
async function ET(t) {
  const e = await V0(t);
  return le(le({}, e), {}, {
    estimatedBaseFee: ir(e.estimatedBaseFee),
    low: le(le({}, e.low), {}, {
      suggestedMaxPriorityFeePerGas: ir(e.low.suggestedMaxPriorityFeePerGas),
      suggestedMaxFeePerGas: ir(e.low.suggestedMaxFeePerGas)
    }),
    medium: le(le({}, e.medium), {}, {
      suggestedMaxPriorityFeePerGas: ir(e.medium.suggestedMaxPriorityFeePerGas),
      suggestedMaxFeePerGas: ir(e.medium.suggestedMaxFeePerGas)
    }),
    high: le(le({}, e.high), {}, {
      suggestedMaxPriorityFeePerGas: ir(e.high.suggestedMaxPriorityFeePerGas),
      suggestedMaxFeePerGas: ir(e.high.suggestedMaxFeePerGas)
    })
  });
}
async function xT(t) {
  const e = await V0(t, {
    referrer: t,
    referrerPolicy: "no-referrer-when-downgrade",
    method: "GET",
    mode: "cors"
  });
  return {
    low: e.SafeGasPrice,
    medium: e.ProposeGasPrice,
    high: e.FastGasPrice
  };
}
function vT(t, e) {
  if (!t || typeof t != "string" || !Xv(t))
    throw new Error(`Invalid "${e}" address: ${t} must be a valid string.`);
}
async function ST(t, e) {
  if (vT(t.from, "from"), !t.data || Array.isArray(t.data) || typeof t.data != "object" && typeof t.data != "string")
    throw new Error('Invalid message "data": Must be a valid string or object.');
  let n;
  if (typeof t.data == "object")
    n = t.data;
  else
    try {
      n = JSON.parse(t.data);
    } catch {
      throw new Error("Data must be passed as a valid JSON string.");
    }
  if (!e)
    throw new Error("Current chainId cannot be null or undefined.");
  let {
    chainId: r
  } = n.domain;
  if (r) {
    typeof r == "string" && (r = parseInt(r, r.startsWith("0x") ? 16 : 10));
    const i = parseInt(e, 16);
    if (Number.isNaN(i))
      throw new Error(`Cannot sign messages for chainId "${r}", because Web3Auth is switching networks.`);
    if (r !== i)
      throw new Error(`Provided chainId "${r}" must match the active chainId "${i}"`);
  }
}
function _T(t, e) {
  return t == null || e === null || e === void 0 ? null : new qe(t, 10).lt(e, 10);
}
function Io(t) {
  return Ze(t.toString(16));
}
function Wc(t) {
  return Kt.isBN(t) ? t : new Kt(Vn(t), 16);
}
function AT(t, e, n) {
  const r = new Kt(e), i = new Kt(n);
  return t.mul(r).div(i);
}
const IT = "https://gas-api.metaswap.codefi.network/networks/<chain_id>/gasPrices", PT = "https://gas-api.metaswap.codefi.network/networks/<chain_id>/suggestedGasFees", B0 = {
  LEGACY: "0x0",
  ACCESS_LIST: "0x1",
  FEE_MARKET: "0x2"
}, Po = {
  SENT_ETHER: "sentEther",
  CONTRACT_INTERACTION: "contractInteraction",
  DEPLOY_CONTRACT: "contractDeployment",
  STANDARD_TRANSACTION: "transaction"
}, Gr = {
  FEE_MARKET: "fee-market",
  LEGACY: "legacy",
  ETH_GASPRICE: "eth_gasPrice",
  NONE: "none"
};
class BT {
  constructor({
    getProviderEngineProxy: e
  }) {
    oe(this, "API_SUPPORTED_CHAINIDS", /* @__PURE__ */ new Set(["0x1", "0x5", "0x13881", "0xa4b1", "0xa86a", "0x2105", "0x38", "0xfa", "0xa", "0x89"])), oe(this, "chainConfig", null), oe(this, "getProviderEngineProxy", void 0), oe(this, "isEIP1559Compatible", !1), this.getProviderEngineProxy = e;
  }
  get providerProxy() {
    return this.getProviderEngineProxy();
  }
  async init() {
    this.chainConfig = await this.providerProxy.request({
      method: "eth_provider_config"
    }), this.isEIP1559Compatible = await this.getEIP1559Compatibility();
  }
  async formatTransaction(e) {
    if (!this.chainConfig) throw new Error("Chain config not initialized");
    const n = le({}, e);
    if (n.nonce === void 0 && (n.nonce = await this.providerProxy.request({
      method: "eth_getTransactionCount",
      params: [e.from, "latest"]
    })), !this.isEIP1559Compatible && n.gasPrice) {
      if (n.maxFeePerGas && delete n.maxFeePerGas, n.maxPriorityFeePerGas && delete n.maxPriorityFeePerGas, !n.gasLimit)
        if (n.gas)
          n.gasLimit = Ze(n.gas);
        else {
          const o = await this.getDefaultGasLimit(n);
          o && (n.gasLimit = o);
        }
      return n;
    }
    if (!n.gasLimit)
      if (n.gas)
        n.gasLimit = Ze(n.gas);
      else {
        const o = await this.getDefaultGasLimit(n);
        o && (n.gasLimit = o);
      }
    const {
      gasPrice: r,
      maxFeePerGas: i,
      maxPriorityFeePerGas: s
    } = await this.getDefaultGasFees(n);
    return this.isEIP1559Compatible ? (n.gasPrice && !n.maxFeePerGas && !n.maxPriorityFeePerGas ? (n.maxFeePerGas = n.gasPrice, n.maxPriorityFeePerGas = _T(typeof s == "string" ? Vn(s) : s, typeof n.gasPrice == "string" ? Vn(n.gasPrice) : n.gasPrice.toString()) ? Ze(s) : Ze(n.gasPrice.toString())) : (i && !n.maxFeePerGas && (n.maxFeePerGas = Ze(i)), s && !n.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = Ze(s)), r && !n.maxFeePerGas && (n.maxFeePerGas = Ze(r)), n.maxFeePerGas && !n.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = n.maxFeePerGas)), delete n.gasPrice) : (delete n.maxPriorityFeePerGas, delete n.maxFeePerGas), r && !n.gasPrice && !n.maxPriorityFeePerGas && !n.maxFeePerGas && (n.gasPrice = r), n.type = Number.parseInt(this.isEIP1559Compatible ? B0.FEE_MARKET : B0.LEGACY, 16), n.chainId = this.chainConfig.chainId, n;
  }
  async fetchEthGasPriceEstimate() {
    const e = await this.providerProxy.request({
      method: "eth_gasPrice",
      params: []
    });
    return {
      gasPrice: un(e).toString()
    };
  }
  async fetchGasEstimatesViaEthFeeHistory() {
    const n = "latest", r = [10, 50, 95], i = await this.providerProxy.request({
      method: "eth_feeHistory",
      params: [10, n, r]
    }), s = i.baseFeePerGas[i.baseFeePerGas.length - 1], o = i.reward.reduce((a, c) => ({
      slow: a.slow.plus(new qe(c[0], 16)),
      average: a.average.plus(new qe(c[1], 16)),
      fast: a.fast.plus(new qe(c[2], 16))
    }), {
      slow: new qe(0),
      average: new qe(0),
      fast: new qe(0)
    });
    return {
      estimatedBaseFee: un(s).toString(),
      high: {
        maxWaitTimeEstimate: 3e4,
        minWaitTimeEstimate: 15e3,
        suggestedMaxFeePerGas: un(o.fast.plus(s).toString(16)).toString(),
        suggestedMaxPriorityFeePerGas: un(o.fast.toString(16)).toString()
      },
      medium: {
        maxWaitTimeEstimate: 45e3,
        minWaitTimeEstimate: 15e3,
        suggestedMaxFeePerGas: un(o.average.plus(s).toString(16)).toString(),
        suggestedMaxPriorityFeePerGas: un(o.average.toString(16)).toString()
      },
      low: {
        maxWaitTimeEstimate: 6e4,
        minWaitTimeEstimate: 15e3,
        suggestedMaxFeePerGas: un(o.slow.plus(s).toString(16)).toString(),
        suggestedMaxPriorityFeePerGas: un(o.slow.toString(16)).toString()
      }
    };
  }
  async getEIP1559Compatibility() {
    const e = await this.providerProxy.request({
      method: "eth_getBlockByNumber",
      params: ["latest", !1]
    });
    return !!(e && e.baseFeePerGas !== void 0);
  }
  async fetchGasFeeEstimateData() {
    if (!this.chainConfig) throw new Error("Chain config not initialized");
    const e = this.chainConfig.chainId === "0x1", n = Number.parseInt(this.chainConfig.chainId, 16);
    let r;
    try {
      if (this.isEIP1559Compatible) {
        let i;
        try {
          if (this.API_SUPPORTED_CHAINIDS.has(this.chainConfig.chainId))
            i = await ET(PT.replace("<chain_id>", `${n}`));
          else
            throw new Error("Chain id not supported by api");
        } catch {
          i = await this.fetchGasEstimatesViaEthFeeHistory();
        }
        r = {
          gasFeeEstimates: i,
          gasEstimateType: Gr.FEE_MARKET
        };
      } else if (e)
        r = {
          gasFeeEstimates: await xT(IT.replace("<chain_id>", `${n}`)),
          gasEstimateType: Gr.LEGACY
        };
      else
        throw new Error("Main gas fee/price estimation failed. Use fallback");
    } catch {
      try {
        r = {
          gasFeeEstimates: await this.fetchEthGasPriceEstimate(),
          gasEstimateType: Gr.ETH_GASPRICE
        };
      } catch (s) {
        throw new Error(`Gas fee/price estimation failed. Message: ${s.message}`);
      }
    }
    return r;
  }
  async getDefaultGasFees(e) {
    if (!this.isEIP1559Compatible && e.gasPrice || this.isEIP1559Compatible && e.maxFeePerGas && e.maxPriorityFeePerGas)
      return {};
    try {
      const {
        gasFeeEstimates: r,
        gasEstimateType: i
      } = await this.fetchGasFeeEstimateData();
      if (this.isEIP1559Compatible && i === Gr.FEE_MARKET) {
        const {
          medium: {
            suggestedMaxPriorityFeePerGas: s,
            suggestedMaxFeePerGas: o
          } = {}
        } = r;
        if (s && o)
          return {
            maxFeePerGas: Ze(Vr(o)),
            maxPriorityFeePerGas: Ze(Vr(s))
          };
      } else {
        if (i === Gr.LEGACY)
          return {
            gasPrice: Ze(Vr(r.medium))
          };
        if (i === Gr.ETH_GASPRICE)
          return {
            gasPrice: Ze(Vr(r.gasPrice))
          };
      }
    } catch (r) {
      Bo.error(r);
    }
    const {
      gasPrice: n
    } = await this.fetchEthGasPriceEstimate();
    return {
      gasPrice: Ze(Vr(n))
    };
  }
  async estimateTxGas(e) {
    const n = le({}, e);
    return delete n.gasPrice, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, await this.providerProxy.request({
      method: "eth_estimateGas",
      params: [n]
    });
  }
  async analyzeGasUsage(e) {
    const n = await this.providerProxy.request({
      method: "eth_getBlockByNumber",
      params: ["latest", !1]
    }), r = Wc(n.gasLimit), i = AT(r, 19, 20);
    let s = Io(i);
    try {
      s = await this.estimateTxGas(e);
    } catch (o) {
      Bo.warn(o);
    }
    return {
      blockGasLimit: n.gasLimit,
      estimatedGasHex: s
    };
  }
  addGasBuffer(e, n, r = 1.5) {
    const i = Wc(e), o = Wc(n).muln(0.9), a = i.muln(r);
    return i.gt(o) ? Io(i) : a.lt(o) ? Io(a) : Io(o);
  }
  async determineTransactionCategory(e) {
    const {
      data: n,
      to: r
    } = e;
    let i = "", s;
    if (n && !r)
      s = Po.DEPLOY_CONTRACT;
    else {
      try {
        i = await this.providerProxy.request({
          method: "eth_getCode",
          params: [r, "latest"]
        });
      } catch (a) {
        Bo.warn(a);
      }
      s = !i || i === "0x" || i === "0x0" ? Po.SENT_ETHER : Po.CONTRACT_INTERACTION;
    }
    return {
      transactionCategory: s,
      code: i
    };
  }
  async getDefaultGasLimit(e) {
    const {
      transactionCategory: n
    } = await this.determineTransactionCategory(le({}, e));
    if (e.gas)
      return Ze(e.gas);
    if (e.to && n === Po.SENT_ETHER) {
      if (e.data)
        throw Error("TxGasUtil - Trying to call a function on a non-contract address");
      return Ze(21e3.toString(16));
    }
    const {
      blockGasLimit: r,
      estimatedGasHex: i
    } = await this.analyzeGasUsage(e);
    return this.addGasBuffer(Ze(i), r);
  }
}
let em = /* @__PURE__ */ function(t) {
  return t.V1 = "V1", t.V3 = "V3", t.V4 = "V4", t;
}({});
function TT({
  updatePrivatekey: t
}) {
  async function e(n, r) {
    var i;
    const s = (i = n.params) !== null && i !== void 0 && i.length ? n.params[0] : void 0;
    if (!(s != null && s.privateKey)) throw we.invalidParams("Missing privateKey");
    r.result = await t(s);
  }
  return pa({
    wallet_updateAccount: it(e)
  });
}
async function T0(t, e, n) {
  const {
    Transaction: r
  } = await Promise.resolve().then(() => pT), i = await n.formatTransaction(t), s = r.from(le(le({}, i), {}, {
    from: void 0
    // from is already calculated inside Transaction.from and is not allowed to be passed in
  })), o = Vn(s.unsignedHash), a = await e(xe.from(o, "hex"));
  let {
    v: c
  } = a;
  const {
    r: u,
    s: f
  } = a;
  c > 1 && (c = c - 27);
  const l = s;
  return l.signature = jt.from({
    v: c,
    r: `0x${u.toString("hex")}`,
    s: `0x${f.toString("hex")}`
  }), l.serialized;
}
async function $T(t, e) {
  const n = Vn(e), r = await t(xe.from(n, "hex"));
  let i = r.v;
  return i <= 1 && (i = i + 27), Of(xe.from(Mr(i)), r.r, r.s);
}
async function NT(t, e) {
  if (e == null)
    throw new Error("Missing data parameter");
  const n = Us(e) ? xe.from(Vn(e), "hex") : xe.from(e), r = zb(n), i = xe.from(`Ethereum Signed Message:
${n.length}`, "utf-8"), s = await t(xe.from(r.slice(2), "hex"), xe.concat([i, n]));
  let o = s.v;
  return o <= 1 && (o = o + 27), Of(xe.from(Rf(o)), s.r, s.s);
}
function RT(t, e) {
  if (!Object.keys(em).includes(t))
    throw new Error(`Invalid version: '${t}'`);
}
async function OT(t, e, n) {
  if (RT(n), e == null)
    throw new Error("Missing data parameter");
  const r = typeof e == "string" ? JSON.parse(e) : e, {
    v: i,
    r: s,
    s: o
  } = await t(xe.from(Zo.hash(r.domain, r.types, r.message).slice(2), "hex"));
  let a = i;
  return a <= 1 && (a = a + 27), Of(xe.from(Rf(a)), s, o);
}
function CT({
  txFormatter: t,
  sign: e,
  getPublic: n,
  getProviderEngineProxy: r
}) {
  return {
    getAccounts: async (i) => {
      const s = await n();
      return [`0x${xe.from(eS(s)).toString("hex")}`];
    },
    getPrivateKey: async (i) => {
      throw Ct.custom({
        message: "MPC Provider cannot return private key",
        code: 4902
      });
    },
    getPublicKey: async (i) => `0x${(await n()).toString("hex")}`,
    processTransaction: async (i, s) => {
      const o = r();
      if (!o) throw Ct.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const a = await T0(i, e, t);
      return await o.request({
        method: "eth_sendRawTransaction",
        params: [a]
      });
    },
    processSignTransaction: async (i, s) => {
      if (!r()) throw Ct.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      return await T0(i, e, t);
    },
    processEthSignMessage: async (i, s) => $T(e, i.data),
    processPersonalMessage: async (i, s) => NT(e, i.data),
    processTypedMessageV4: async (i, s) => {
      Bo.debug("processTypedMessageV4", i);
      const o = r();
      if (!o) throw Ct.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const a = await o.request({
        method: "eth_chainId"
      });
      await ST(i, a);
      const c = typeof i.data == "string" ? JSON.parse(i.data) : i.data;
      return OT(e, c, em.V4);
    }
  };
}
var tm;
class nm extends h5 {
  constructor({
    config: e,
    state: n
  }) {
    super({
      config: {
        chainConfig: le(le({}, e.chainConfig), {}, {
          chainNamespace: Va.EIP155
        })
      },
      state: n
    }), oe(this, "PROVIDER_CHAIN_NAMESPACE", Va.EIP155);
  }
  async enable() {
    if (!this.state.signMethods) throw Ct.custom({
      message: "signMethods are not found in state, plz pass it in constructor state param",
      code: 4902
    });
    return await this.setupProvider(this.state.signMethods), this._providerEngineProxy.request({
      method: "eth_accounts"
    });
  }
  async setupProvider({
    sign: e,
    getPublic: n
  }) {
    const {
      chainNamespace: r
    } = this.config.chainConfig;
    if (r !== this.PROVIDER_CHAIN_NAMESPACE) throw ke.incompatibleChainNameSpace("Invalid chain namespace");
    const i = new BT({
      getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
    }), s = CT({
      txFormatter: i,
      sign: e,
      getPublic: n,
      getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
    }), o = g5(s), a = this.getChainSwitchMiddleware(), c = new Vt(), {
      networkMiddleware: u
    } = w5(this.config.chainConfig);
    c.push(o), c.push(a), c.push(this.getAccountMiddleware()), c.push(u);
    const f = Dv(c);
    this.updateProviderEngineProxy(f), await i.init(), await this.lookupNetwork(), this.state.signMethods = {
      sign: e,
      getPublic: n
    };
  }
  async updateAccount(e) {
    if (!this._providerEngineProxy) throw Ct.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const n = this.state.signMethods;
    if (!n)
      throw Ct.custom({
        message: "signing methods are unavailable ",
        code: 4092
      });
    const r = (await n.getPublic()).toString("hex"), i = (await e.signMethods.getPublic()).toString("hex");
    if (r !== i) {
      await this.setupProvider(e.signMethods);
      const s = await this._providerEngineProxy.request({
        method: "eth_accounts"
      });
      this.emit("accountsChanged", s);
    }
  }
  async switchChain(e) {
    if (!this._providerEngineProxy) throw Ct.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const n = this.getChainConfig(e.chainId);
    if (this.update({
      chainId: "loading"
    }), this.configure({
      chainConfig: n
    }), !this.state.signMethods)
      throw Ct.custom({
        message: "sign methods are undefined",
        code: 4902
      });
    await this.setupProvider(this.state.signMethods);
  }
  async lookupNetwork() {
    if (!this._providerEngineProxy) throw Ct.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const {
      chainId: e
    } = this.config.chainConfig;
    if (!e) throw we.invalidParams("chainId is required while lookupNetwork");
    const n = await this._providerEngineProxy.request({
      method: "net_version",
      params: []
    }), r = Us(n) ? parseInt(n, 16) : parseInt(n, 10);
    if (parseInt(e, 16) !== r) throw Ct.chainDisconnected(`Invalid network, net_version is: ${n}`);
    return this.state.chainId !== e && (this.emit("chainChanged", e), this.emit("connect", {
      chainId: e
    })), this.update({
      chainId: e
    }), n;
  }
  getChainSwitchMiddleware() {
    return y5({
      addChain: async (r) => {
        const {
          chainId: i,
          chainName: s,
          rpcUrls: o,
          blockExplorerUrls: a,
          nativeCurrency: c,
          iconUrls: u
        } = r;
        this.addChain({
          chainNamespace: Va.EIP155,
          chainId: i,
          ticker: (c == null ? void 0 : c.symbol) || "ETH",
          tickerName: (c == null ? void 0 : c.name) || "Ether",
          displayName: s,
          rpcTarget: o[0],
          blockExplorerUrl: (a == null ? void 0 : a[0]) || "",
          decimals: (c == null ? void 0 : c.decimals) || 18,
          logo: (u == null ? void 0 : u[0]) || "https://images.toruswallet.io/eth.svg"
        });
      },
      switchChain: async (r) => {
        const {
          chainId: i
        } = r;
        await this.switchChain({
          chainId: i
        });
      }
    });
  }
  getAccountMiddleware() {
    return TT({
      updateSignMethods: async (n) => {
        await this.updateAccount(n);
      }
    });
  }
}
tm = nm;
oe(nm, "getProviderInstance", async (t) => {
  const e = new tm({
    config: {
      chainConfig: t.chainConfig
    }
  });
  return await e.setupProvider(t.signMethods), e;
});
export {
  Va as C,
  nm as E,
  le as _,
  t3 as a,
  ZT as b,
  e3 as c,
  VT as d,
  fs as e,
  kf as f,
  oe as g,
  YT as h,
  Ut as i,
  n3 as j,
  Ia as k,
  Wn as l,
  i3 as m,
  JT as p,
  Im as t
};
