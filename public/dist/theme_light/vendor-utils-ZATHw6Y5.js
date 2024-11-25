import { g as xr, B as Or } from "./vendor-walletconnect-CFDOEMvA.js";
import { p as le, a as U, r as Rr, e as Dn, R as J } from "./vendor-react-DM3ZG7W6.js";
import { c as me } from "./vendor-ui-utils-DxmL71y2.js";
function Fn(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Tr } = Object.prototype, { getPrototypeOf: Ut } = Object, et = /* @__PURE__ */ ((t) => (e) => {
  const n = Tr.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (t) => (t = t.toLowerCase(), (e) => et(e) === t), tt = (t) => (e) => typeof e === t, { isArray: Oe } = Array, Ne = tt("undefined");
function Cr(t) {
  return t !== null && !Ne(t) && t.constructor !== null && !Ne(t.constructor) && ce(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Un = de("ArrayBuffer");
function Pr(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Un(t.buffer), e;
}
const Lr = tt("string"), ce = tt("function"), Mn = tt("number"), nt = (t) => t !== null && typeof t == "object", Nr = (t) => t === !0 || t === !1, He = (t) => {
  if (et(t) !== "object")
    return !1;
  const e = Ut(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, Ar = de("Date"), Ir = de("File"), _r = de("Blob"), kr = de("FileList"), $r = (t) => nt(t) && ce(t.pipe), jr = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || ce(t.append) && ((e = et(t)) === "formdata" || // detect form-data instance
  e === "object" && ce(t.toString) && t.toString() === "[object FormData]"));
}, Dr = de("URLSearchParams"), [Fr, Ur, Mr, Br] = ["ReadableStream", "Request", "Response", "Headers"].map(de), zr = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ke(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), Oe(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], e.call(null, t[a], a, t);
  }
}
function Bn(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const ye = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : xr, zn = (t) => !Ne(t) && t !== ye;
function xt() {
  const { caseless: t } = zn(this) && this || {}, e = {}, n = (r, s) => {
    const i = t && Bn(e, s) || s;
    He(e[i]) && He(r) ? e[i] = xt(e[i], r) : He(r) ? e[i] = xt({}, r) : Oe(r) ? e[i] = r.slice() : e[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ke(arguments[r], n);
  return e;
}
const Hr = (t, e, n, { allOwnKeys: r } = {}) => (ke(e, (s, i) => {
  n && ce(s) ? t[i] = Fn(s, n) : t[i] = s;
}, { allOwnKeys: r }), t), qr = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Vr = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Kr = (t, e, n, r) => {
  let s, i, o;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, t, e)) && !a[o] && (e[o] = t[o], a[o] = !0);
    t = n !== !1 && Ut(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Jr = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Wr = (t) => {
  if (!t) return null;
  if (Oe(t)) return t;
  let e = t.length;
  if (!Mn(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Yr = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ut(Uint8Array)), Xr = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    e.call(t, i[0], i[1]);
  }
}, Gr = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Qr = de("HTMLFormElement"), Zr = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Jt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), es = de("RegExp"), Hn = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  ke(n, (s, i) => {
    let o;
    (o = e(s, i, t)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(t, r);
}, ts = (t) => {
  Hn(t, (e, n) => {
    if (ce(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (ce(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ns = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return Oe(t) ? r(t) : r(String(t).split(e)), n;
}, rs = () => {
}, ss = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, ut = "abcdefghijklmnopqrstuvwxyz", Wt = "0123456789", qn = {
  DIGIT: Wt,
  ALPHA: ut,
  ALPHA_DIGIT: ut + ut.toUpperCase() + Wt
}, is = (t = 16, e = qn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function os(t) {
  return !!(t && ce(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const as = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (nt(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const i = Oe(r) ? [] : {};
        return ke(r, (o, a) => {
          const l = n(o, s + 1);
          !Ne(l) && (i[a] = l);
        }), e[s] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, ls = de("AsyncFunction"), us = (t) => t && (nt(t) || ce(t)) && ce(t.then) && ce(t.catch), Vn = ((t, e) => t ? setImmediate : e ? ((n, r) => (ye.addEventListener("message", ({ source: s, data: i }) => {
  s === ye && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), ye.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  ce(ye.postMessage)
), cs = typeof queueMicrotask < "u" ? queueMicrotask.bind(ye) : typeof le < "u" && le.nextTick || Vn, p = {
  isArray: Oe,
  isArrayBuffer: Un,
  isBuffer: Cr,
  isFormData: jr,
  isArrayBufferView: Pr,
  isString: Lr,
  isNumber: Mn,
  isBoolean: Nr,
  isObject: nt,
  isPlainObject: He,
  isReadableStream: Fr,
  isRequest: Ur,
  isResponse: Mr,
  isHeaders: Br,
  isUndefined: Ne,
  isDate: Ar,
  isFile: Ir,
  isBlob: _r,
  isRegExp: es,
  isFunction: ce,
  isStream: $r,
  isURLSearchParams: Dr,
  isTypedArray: Yr,
  isFileList: kr,
  forEach: ke,
  merge: xt,
  extend: Hr,
  trim: zr,
  stripBOM: qr,
  inherits: Vr,
  toFlatObject: Kr,
  kindOf: et,
  kindOfTest: de,
  endsWith: Jr,
  toArray: Wr,
  forEachEntry: Xr,
  matchAll: Gr,
  isHTMLForm: Qr,
  hasOwnProperty: Jt,
  hasOwnProp: Jt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hn,
  freezeMethods: ts,
  toObjectSet: ns,
  toCamelCase: Zr,
  noop: rs,
  toFiniteNumber: ss,
  findKey: Bn,
  global: ye,
  isContextDefined: zn,
  ALPHABET: qn,
  generateString: is,
  isSpecCompliantForm: os,
  toJSONObject: as,
  isAsyncFn: ls,
  isThenable: us,
  setImmediate: Vn,
  asap: cs
};
function j(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
p.inherits(j, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Kn = j.prototype, Jn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Jn[t] = { value: t };
});
Object.defineProperties(j, Jn);
Object.defineProperty(Kn, "isAxiosError", { value: !0 });
j.from = (t, e, n, r, s, i) => {
  const o = Object.create(Kn);
  return p.toFlatObject(t, o, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), j.call(o, t.message, e, n, r, s), o.cause = t, o.name = t.name, i && Object.assign(o, i), o;
};
const fs = null;
function Ot(t) {
  return p.isPlainObject(t) || p.isArray(t);
}
function Wn(t) {
  return p.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Yt(t, e, n) {
  return t ? t.concat(e).map(function(s, i) {
    return s = Wn(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function ds(t) {
  return p.isArray(t) && !t.some(Ot);
}
const ps = p.toFlatObject(p, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function rt(t, e, n) {
  if (!p.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = p.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !p.isUndefined(g[m]);
  });
  const r = n.metaTokens, s = n.visitor || u, i = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(e);
  if (!p.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null) return "";
    if (p.isDate(h))
      return h.toISOString();
    if (!l && p.isBlob(h))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(h) || p.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Or.from(h) : h;
  }
  function u(h, m, g) {
    let x = h;
    if (h && !g && typeof h == "object") {
      if (p.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (p.isArray(h) && ds(h) || (p.isFileList(h) || p.endsWith(m, "[]")) && (x = p.toArray(h)))
        return m = Wn(m), x.forEach(function(S, E) {
          !(p.isUndefined(S) || S === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Yt([m], E, i) : o === null ? m : m + "[]",
            c(S)
          );
        }), !1;
    }
    return Ot(h) ? !0 : (e.append(Yt(g, m, i), c(h)), !1);
  }
  const d = [], f = Object.assign(ps, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ot
  });
  function y(h, m) {
    if (!p.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(h), p.forEach(h, function(x, w) {
        (!(p.isUndefined(x) || x === null) && s.call(
          e,
          x,
          p.isString(w) ? w.trim() : w,
          m,
          f
        )) === !0 && y(x, m ? m.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!p.isObject(t))
    throw new TypeError("data must be an object");
  return y(t), e;
}
function Xt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Mt(t, e) {
  this._pairs = [], t && rt(t, this, e);
}
const Yn = Mt.prototype;
Yn.append = function(e, n) {
  this._pairs.push([e, n]);
};
Yn.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Xt);
  } : Xt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function hs(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xn(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || hs, s = n && n.serialize;
  let i;
  if (s ? i = s(e, n) : i = p.isURLSearchParams(e) ? e.toString() : new Mt(e, n).toString(r), i) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class Gt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    p.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Gn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gs = typeof URLSearchParams < "u" ? URLSearchParams : Mt, ms = typeof FormData < "u" ? FormData : null, ys = typeof Blob < "u" ? Blob : null, bs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gs,
    FormData: ms,
    Blob: ys
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Bt = typeof window < "u" && typeof document < "u", Rt = typeof navigator == "object" && navigator || void 0, vs = Bt && (!Rt || ["ReactNative", "NativeScript", "NS"].indexOf(Rt.product) < 0), Ss = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ws = Bt && window.location.href || "http://localhost", Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Bt,
  hasStandardBrowserEnv: vs,
  hasStandardBrowserWebWorkerEnv: Ss,
  navigator: Rt,
  origin: ws
}, Symbol.toStringTag, { value: "Module" })), ie = {
  ...Es,
  ...bs
};
function xs(t, e) {
  return rt(t, new ie.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, i) {
      return ie.isNode && p.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Os(t) {
  return p.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Rs(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function Qn(t) {
  function e(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = i >= n.length;
    return o = !o && p.isArray(s) ? s.length : o, l ? (p.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !a) : ((!s[o] || !p.isObject(s[o])) && (s[o] = []), e(n, r, s[o], i) && p.isArray(s[o]) && (s[o] = Rs(s[o])), !a);
  }
  if (p.isFormData(t) && p.isFunction(t.entries)) {
    const n = {};
    return p.forEachEntry(t, (r, s) => {
      e(Os(r), s, n, 0);
    }), n;
  }
  return null;
}
function Ts(t, e, n) {
  if (p.isString(t))
    try {
      return (e || JSON.parse)(t), p.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(t);
}
const $e = {
  transitional: Gn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = p.isObject(e);
    if (i && p.isHTMLForm(e) && (e = new FormData(e)), p.isFormData(e))
      return s ? JSON.stringify(Qn(e)) : e;
    if (p.isArrayBuffer(e) || p.isBuffer(e) || p.isStream(e) || p.isFile(e) || p.isBlob(e) || p.isReadableStream(e))
      return e;
    if (p.isArrayBufferView(e))
      return e.buffer;
    if (p.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return xs(e, this.formSerializer).toString();
      if ((a = p.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return rt(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Ts(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || $e.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (p.isResponse(e) || p.isReadableStream(e))
      return e;
    if (e && p.isString(e) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? j.from(a, j.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ie.classes.FormData,
    Blob: ie.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
p.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  $e.headers[t] = {};
});
const Cs = p.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ps = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || e[n] && Cs[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Qt = Symbol("internals");
function Te(t) {
  return t && String(t).trim().toLowerCase();
}
function qe(t) {
  return t === !1 || t == null ? t : p.isArray(t) ? t.map(qe) : String(t);
}
function Ls(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const Ns = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ct(t, e, n, r, s) {
  if (p.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!p.isString(e)) {
    if (p.isString(r))
      return e.indexOf(r) !== -1;
    if (p.isRegExp(r))
      return r.test(e);
  }
}
function As(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function Is(t, e) {
  const n = p.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, e, s, i, o);
      },
      configurable: !0
    });
  });
}
class oe {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function i(a, l, c) {
      const u = Te(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = p.findKey(s, u);
      (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || l] = qe(a));
    }
    const o = (a, l) => p.forEach(a, (c, u) => i(c, u, l));
    if (p.isPlainObject(e) || e instanceof this.constructor)
      o(e, n);
    else if (p.isString(e) && (e = e.trim()) && !Ns(e))
      o(Ps(e), n);
    else if (p.isHeaders(e))
      for (const [a, l] of e.entries())
        i(l, a, r);
    else
      e != null && i(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = Te(e), e) {
      const r = p.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ls(s);
        if (p.isFunction(n))
          return n.call(this, s, r);
        if (p.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Te(e), e) {
      const r = p.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || ct(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = Te(o), o) {
        const a = p.findKey(r, o);
        a && (!n || ct(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return p.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || ct(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return p.forEach(this, (s, i) => {
      const o = p.findKey(r, i);
      if (o) {
        n[o] = qe(s), delete n[i];
        return;
      }
      const a = e ? As(i) : String(i).trim();
      a !== i && delete n[i], n[a] = qe(s), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && p.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Qt] = this[Qt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = Te(o);
      r[a] || (Is(s, o), r[a] = !0);
    }
    return p.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
oe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(oe.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
p.freezeMethods(oe);
function ft(t, e) {
  const n = this || $e, r = e || n, s = oe.from(r.headers);
  let i = r.data;
  return p.forEach(t, function(a) {
    i = a.call(n, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function Zn(t) {
  return !!(t && t.__CANCEL__);
}
function Re(t, e, n) {
  j.call(this, t ?? "canceled", j.ERR_CANCELED, e, n), this.name = "CanceledError";
}
p.inherits(Re, j, {
  __CANCEL__: !0
});
function er(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new j(
    "Request failed with status code " + n.status,
    [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function _s(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ks(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), u = r[i];
    o || (o = c), n[s] = l, r[s] = c;
    let d = i, f = 0;
    for (; d !== s; )
      f += n[d++], d = d % t;
    if (s = (s + 1) % t, s === i && (i = (i + 1) % t), c - o < e)
      return;
    const y = u && c - u;
    return y ? Math.round(f * 1e3 / y) : void 0;
  };
}
function $s(t, e) {
  let n = 0, r = 1e3 / e, s, i;
  const o = (c, u = Date.now()) => {
    n = u, s = null, i && (clearTimeout(i), i = null), t.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= r ? o(c, u) : (s = c, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - d)));
  }, () => s && o(s)];
}
const Ke = (t, e, n = 3) => {
  let r = 0;
  const s = ks(50, 250);
  return $s((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, l = o - r, c = s(l), u = o <= a;
    r = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && a && u ? (a - o) / c : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, n);
}, Zt = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, en = (t) => (...e) => p.asap(() => t(...e)), js = ie.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = ie.navigator && /(msie|trident)/i.test(ie.navigator.userAgent), n = document.createElement("a");
    let r;
    function s(i) {
      let o = i;
      return e && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(o) {
      const a = p.isString(o) ? s(o) : o;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Ds = ie.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, i) {
      const o = [t + "=" + encodeURIComponent(e)];
      p.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), p.isString(r) && o.push("path=" + r), p.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Fs(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Us(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function tr(t, e) {
  return t && !Fs(e) ? Us(t, e) : e;
}
const tn = (t) => t instanceof oe ? { ...t } : t;
function we(t, e) {
  e = e || {};
  const n = {};
  function r(c, u, d) {
    return p.isPlainObject(c) && p.isPlainObject(u) ? p.merge.call({ caseless: d }, c, u) : p.isPlainObject(u) ? p.merge({}, u) : p.isArray(u) ? u.slice() : u;
  }
  function s(c, u, d) {
    if (p.isUndefined(u)) {
      if (!p.isUndefined(c))
        return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function i(c, u) {
    if (!p.isUndefined(u))
      return r(void 0, u);
  }
  function o(c, u) {
    if (p.isUndefined(u)) {
      if (!p.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, d) {
    if (d in e)
      return r(c, u);
    if (d in t)
      return r(void 0, c);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, u) => s(tn(c), tn(u), !0)
  };
  return p.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const d = l[u] || s, f = d(t[u], e[u], u);
    p.isUndefined(f) && d !== a || (n[u] = f);
  }), n;
}
const nr = (t) => {
  const e = we({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = e;
  e.headers = o = oe.from(o), e.url = Xn(tr(e.baseURL, e.url), t.params, t.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (p.isFormData(n)) {
    if (ie.hasStandardBrowserEnv || ie.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [c, ...u] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ie.hasStandardBrowserEnv && (r && p.isFunction(r) && (r = r(e)), r || r !== !1 && js(e.url))) {
    const c = s && i && Ds.read(i);
    c && o.set(s, c);
  }
  return e;
}, Ms = typeof XMLHttpRequest < "u", Bs = Ms && function(t) {
  return new Promise(function(n, r) {
    const s = nr(t);
    let i = s.data;
    const o = oe.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = s, u, d, f, y, h;
    function m() {
      y && y(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(s.method.toUpperCase(), s.url, !0), g.timeout = s.timeout;
    function x() {
      if (!g)
        return;
      const S = oe.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), b = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: S,
        config: t,
        request: g
      };
      er(function(L) {
        n(L), m();
      }, function(L) {
        r(L), m();
      }, b), g = null;
    }
    "onloadend" in g ? g.onloadend = x : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, g.onabort = function() {
      g && (r(new j("Request aborted", j.ECONNABORTED, t, g)), g = null);
    }, g.onerror = function() {
      r(new j("Network Error", j.ERR_NETWORK, t, g)), g = null;
    }, g.ontimeout = function() {
      let E = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const b = s.transitional || Gn;
      s.timeoutErrorMessage && (E = s.timeoutErrorMessage), r(new j(
        E,
        b.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
        t,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && p.forEach(o.toJSON(), function(E, b) {
      g.setRequestHeader(b, E);
    }), p.isUndefined(s.withCredentials) || (g.withCredentials = !!s.withCredentials), a && a !== "json" && (g.responseType = s.responseType), c && ([f, h] = Ke(c, !0), g.addEventListener("progress", f)), l && g.upload && ([d, y] = Ke(l), g.upload.addEventListener("progress", d), g.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (u = (S) => {
      g && (r(!S || S.type ? new Re(null, t, g) : S), g.abort(), g = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const w = _s(s.url);
    if (w && ie.protocols.indexOf(w) === -1) {
      r(new j("Unsupported protocol " + w + ":", j.ERR_BAD_REQUEST, t));
      return;
    }
    g.send(i || null);
  });
}, zs = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const i = function(c) {
      if (!s) {
        s = !0, a();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof j ? u : new Re(u instanceof Error ? u.message : u));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new j(`timeout ${e} of ms exceeded`, j.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (o && clearTimeout(o), o = null, t.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((c) => c.addEventListener("abort", i));
    const { signal: l } = r;
    return l.unsubscribe = () => p.asap(a), l;
  }
}, Hs = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, qs = async function* (t, e) {
  for await (const n of Vs(t))
    yield* Hs(n, e);
}, Vs = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, nn = (t, e, n, r) => {
  const s = qs(t, e);
  let i = 0, o, a = (l) => {
    o || (o = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          a(), l.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let f = i += d;
          n(f);
        }
        l.enqueue(new Uint8Array(u));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(l) {
      return a(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, st = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", rr = st && typeof ReadableStream == "function", Ks = st && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), sr = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Js = rr && sr(() => {
  let t = !1;
  const e = new Request(ie.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), rn = 64 * 1024, Tt = rr && sr(() => p.isReadableStream(new Response("").body)), Je = {
  stream: Tt && ((t) => t.body)
};
st && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Je[e] && (Je[e] = p.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new j(`Response type '${e}' is not supported`, j.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ws = async (t) => {
  if (t == null)
    return 0;
  if (p.isBlob(t))
    return t.size;
  if (p.isSpecCompliantForm(t))
    return (await new Request(ie.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (p.isArrayBufferView(t) || p.isArrayBuffer(t))
    return t.byteLength;
  if (p.isURLSearchParams(t) && (t = t + ""), p.isString(t))
    return (await Ks(t)).byteLength;
}, Ys = async (t, e) => {
  const n = p.toFiniteNumber(t.getContentLength());
  return n ?? Ws(e);
}, Xs = st && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = nr(t);
  c = c ? (c + "").toLowerCase() : "text";
  let y = zs([s, i && i.toAbortSignal()], o), h;
  const m = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let g;
  try {
    if (l && Js && n !== "get" && n !== "head" && (g = await Ys(u, r)) !== 0) {
      let b = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), D;
      if (p.isFormData(r) && (D = b.headers.get("content-type")) && u.setContentType(D), b.body) {
        const [L, T] = Zt(
          g,
          Ke(en(l))
        );
        r = nn(b.body, rn, L, T);
      }
    }
    p.isString(d) || (d = d ? "include" : "omit");
    const x = "credentials" in Request.prototype;
    h = new Request(e, {
      ...f,
      signal: y,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: x ? d : void 0
    });
    let w = await fetch(h);
    const S = Tt && (c === "stream" || c === "response");
    if (Tt && (a || S && m)) {
      const b = {};
      ["status", "statusText", "headers"].forEach((I) => {
        b[I] = w[I];
      });
      const D = p.toFiniteNumber(w.headers.get("content-length")), [L, T] = a && Zt(
        D,
        Ke(en(a), !0)
      ) || [];
      w = new Response(
        nn(w.body, rn, L, () => {
          T && T(), m && m();
        }),
        b
      );
    }
    c = c || "text";
    let E = await Je[p.findKey(Je, c) || "text"](w, t);
    return !S && m && m(), await new Promise((b, D) => {
      er(b, D, {
        data: E,
        headers: oe.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: t,
        request: h
      });
    });
  } catch (x) {
    throw m && m(), x && x.name === "TypeError" && /fetch/i.test(x.message) ? Object.assign(
      new j("Network Error", j.ERR_NETWORK, t, h),
      {
        cause: x.cause || x
      }
    ) : j.from(x, x && x.code, t, h);
  }
}), Ct = {
  http: fs,
  xhr: Bs,
  fetch: Xs
};
p.forEach(Ct, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const sn = (t) => `- ${t}`, Gs = (t) => p.isFunction(t) || t === null || t === !1, ir = {
  getAdapter: (t) => {
    t = p.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let i = 0; i < e; i++) {
      n = t[i];
      let o;
      if (r = n, !Gs(n) && (r = Ct[(o = String(n)).toLowerCase()], r === void 0))
        throw new j(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(sn).join(`
`) : " " + sn(i[0]) : "as no adapter specified";
      throw new j(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ct
};
function dt(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Re(null, t);
}
function on(t) {
  return dt(t), t.headers = oe.from(t.headers), t.data = ft.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ir.getAdapter(t.adapter || $e.adapter)(t).then(function(r) {
    return dt(t), r.data = ft.call(
      t,
      t.transformResponse,
      r
    ), r.headers = oe.from(r.headers), r;
  }, function(r) {
    return Zn(r) || (dt(t), r && r.response && (r.response.data = ft.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = oe.from(r.response.headers))), Promise.reject(r);
  });
}
const or = "1.7.7", zt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  zt[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const an = {};
zt.transitional = function(e, n, r) {
  function s(i, o) {
    return "[Axios v" + or + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new j(
        s(o, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return n && !an[o] && (an[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
function Qs(t, e, n) {
  if (typeof t != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = e[i];
    if (o) {
      const a = t[i], l = a === void 0 || o(a, i, t);
      if (l !== !0)
        throw new j("option " + i + " must be " + l, j.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new j("Unknown option " + i, j.ERR_BAD_OPTION);
  }
}
const Pt = {
  assertOptions: Qs,
  validators: zt
}, ge = Pt.validators;
class be {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Gt(),
      response: new Gt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = we(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && Pt.assertOptions(r, {
      silentJSONParsing: ge.transitional(ge.boolean),
      forcedJSONParsing: ge.transitional(ge.boolean),
      clarifyTimeoutError: ge.transitional(ge.boolean)
    }, !1), s != null && (p.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Pt.assertOptions(s, {
      encode: ge.function,
      serialize: ge.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && p.merge(
      i.common,
      i[n.method]
    );
    i && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), n.headers = oe.concat(o, i);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const h = [on.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, c), f = h.length, u = Promise.resolve(n); d < f; )
        u = u.then(h[d++], h[d++]);
      return u;
    }
    f = a.length;
    let y = n;
    for (d = 0; d < f; ) {
      const h = a[d++], m = a[d++];
      try {
        y = h(y);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      u = on.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = we(this.defaults, e);
    const n = tr(e.baseURL, e.url);
    return Xn(n, e.params, e.paramsSerializer);
  }
}
p.forEach(["delete", "get", "head", "options"], function(e) {
  be.prototype[e] = function(n, r) {
    return this.request(we(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, o, a) {
      return this.request(we(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  be.prototype[e] = n(), be.prototype[e + "Form"] = n(!0);
});
class Ht {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, e(function(i, o, a) {
      r.reason || (r.reason = new Re(i, o, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Ht(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Zs(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function ei(t) {
  return p.isObject(t) && t.isAxiosError === !0;
}
const Lt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Lt).forEach(([t, e]) => {
  Lt[e] = t;
});
function ar(t) {
  const e = new be(t), n = Fn(be.prototype.request, e);
  return p.extend(n, be.prototype, e, { allOwnKeys: !0 }), p.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ar(we(t, s));
  }, n;
}
const Q = ar($e);
Q.Axios = be;
Q.CanceledError = Re;
Q.CancelToken = Ht;
Q.isCancel = Zn;
Q.VERSION = or;
Q.toFormData = rt;
Q.AxiosError = j;
Q.Cancel = Q.CanceledError;
Q.all = function(e) {
  return Promise.all(e);
};
Q.spread = Zs;
Q.isAxiosError = ei;
Q.mergeConfig = we;
Q.AxiosHeaders = oe;
Q.formToJSON = (t) => Qn(p.isHTMLForm(t) ? new FormData(t) : t);
Q.getAdapter = ir.getAdapter;
Q.HttpStatusCode = Lt;
Q.default = Q;
const ti = (...t) => {
  console != null && console.warn && (ve(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t));
}, ln = {}, Nt = (...t) => {
  ve(t[0]) && ln[t[0]] || (ve(t[0]) && (ln[t[0]] = /* @__PURE__ */ new Date()), ti(...t));
}, lr = (t, e) => () => {
  if (t.isInitialized)
    e();
  else {
    const n = () => {
      setTimeout(() => {
        t.off("initialized", n);
      }, 0), e();
    };
    t.on("initialized", n);
  }
}, un = (t, e, n) => {
  t.loadNamespaces(e, lr(t, n));
}, cn = (t, e, n, r) => {
  ve(n) && (n = [n]), n.forEach((s) => {
    t.options.ns.indexOf(s) < 0 && t.options.ns.push(s);
  }), t.loadLanguages(e, lr(t, r));
}, ni = (t, e, n = {}) => !e.languages || !e.languages.length ? (Nt("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(t, {
  lng: n.lng,
  precheck: (r, s) => {
    var i;
    if (((i = n.bindI18n) == null ? void 0 : i.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !s(r.isLanguageChangingTo, t)) return !1;
  }
}), ve = (t) => typeof t == "string", ri = (t) => typeof t == "object" && t !== null, si = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ii = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, oi = (t) => ii[t], ai = (t) => t.replace(si, oi);
let At = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: ai
};
const li = (t = {}) => {
  At = {
    ...At,
    ...t
  };
}, ui = () => At;
let ur;
const ci = (t) => {
  ur = t;
}, fi = () => ur, Ao = {
  type: "3rdParty",
  init(t) {
    li(t.options.react), ci(t);
  }
}, cr = U.createContext();
class di {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const pi = (t, e) => {
  const n = U.useRef();
  return U.useEffect(() => {
    n.current = t;
  }, [t, e]), n.current;
}, fr = (t, e, n, r) => t.getFixedT(e, n, r), hi = (t, e, n, r) => U.useCallback(fr(t, e, n, r), [t, e, n, r]), Io = (t, e = {}) => {
  var E, b, D, L;
  const {
    i18n: n
  } = e, {
    i18n: r,
    defaultNS: s
  } = U.useContext(cr) || {}, i = n || r || fi();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new di()), !i) {
    Nt("You will need to pass in an i18next instance by using initReactI18next");
    const T = (B, z) => ve(z) ? z : ri(z) && ve(z.defaultValue) ? z.defaultValue : Array.isArray(B) ? B[B.length - 1] : B, I = [T, {}, !1];
    return I.t = T, I.i18n = {}, I.ready = !1, I;
  }
  (E = i.options.react) != null && E.wait && Nt("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...ui(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: l
  } = o;
  let c = s || ((b = i.options) == null ? void 0 : b.defaultNS);
  c = ve(c) ? [c] : c || ["translation"], (L = (D = i.reportNamespaces).addUsedNamespaces) == null || L.call(D, c);
  const u = (i.isInitialized || i.initializedStoreOnce) && c.every((T) => ni(T, i, o)), d = hi(i, e.lng || null, o.nsMode === "fallback" ? c : c[0], l), f = () => d, y = () => fr(i, e.lng || null, o.nsMode === "fallback" ? c : c[0], l), [h, m] = U.useState(f);
  let g = c.join();
  e.lng && (g = `${e.lng}${g}`);
  const x = pi(g), w = U.useRef(!0);
  U.useEffect(() => {
    const {
      bindI18n: T,
      bindI18nStore: I
    } = o;
    w.current = !0, !u && !a && (e.lng ? cn(i, e.lng, c, () => {
      w.current && m(y);
    }) : un(i, c, () => {
      w.current && m(y);
    })), u && x && x !== g && w.current && m(y);
    const B = () => {
      w.current && m(y);
    };
    return T && (i == null || i.on(T, B)), I && (i == null || i.store.on(I, B)), () => {
      w.current = !1, i && (T == null || T.split(" ").forEach((z) => i.off(z, B))), I && i && I.split(" ").forEach((z) => i.store.off(z, B));
    };
  }, [i, g]), U.useEffect(() => {
    w.current && u && m(f);
  }, [i, l, u]);
  const S = [h, i, u];
  if (S.t = h, S.i18n = i, S.ready = u, u || !u && !a) return S;
  throw new Promise((T) => {
    e.lng ? cn(i, e.lng, c, () => T()) : un(i, c, () => T());
  });
};
function _o({
  i18n: t,
  defaultNS: e,
  children: n
}) {
  const r = U.useMemo(() => ({
    i18n: t,
    defaultNS: e
  }), [t, e]);
  return U.createElement(cr.Provider, {
    value: r
  }, n);
}
var it = {}, gi = function() {
  var t = document.getSelection();
  if (!t.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++)
    n.push(t.getRangeAt(r));
  switch (e.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      e.blur();
      break;
    default:
      e = null;
      break;
  }
  return t.removeAllRanges(), function() {
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(s) {
      t.addRange(s);
    }), e && e.focus();
  };
}, mi = gi, fn = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, yi = "Copy to clipboard: #{key}, Enter";
function bi(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function vi(t, e) {
  var n, r, s, i, o, a, l = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    s = mi(), i = document.createRange(), o = document.getSelection(), a = document.createElement("span"), a.textContent = t, a.ariaHidden = "true", a.style.all = "unset", a.style.position = "fixed", a.style.top = 0, a.style.clip = "rect(0, 0, 0, 0)", a.style.whiteSpace = "pre", a.style.webkitUserSelect = "text", a.style.MozUserSelect = "text", a.style.msUserSelect = "text", a.style.userSelect = "text", a.addEventListener("copy", function(u) {
      if (u.stopPropagation(), e.format)
        if (u.preventDefault(), typeof u.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = fn[e.format] || fn.default;
          window.clipboardData.setData(d, t);
        } else
          u.clipboardData.clearData(), u.clipboardData.setData(e.format, t);
      e.onCopy && (u.preventDefault(), e.onCopy(u.clipboardData));
    }), document.body.appendChild(a), i.selectNodeContents(a), o.addRange(i);
    var c = document.execCommand("copy");
    if (!c)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (u) {
    n && console.error("unable to copy using execCommand: ", u), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), l = !0;
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), r = bi("message" in e ? e.message : yi), window.prompt(r, t);
    }
  } finally {
    o && (typeof o.removeRange == "function" ? o.removeRange(i) : o.removeAllRanges()), a && document.body.removeChild(a), s();
  }
  return l;
}
var Si = vi;
function It(t) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, It(t);
}
Object.defineProperty(it, "__esModule", {
  value: !0
});
it.CopyToClipboard = void 0;
var De = dr(Rr()), wi = dr(Si), Ei = ["text", "onCopy", "options", "children"];
function dr(t) {
  return t && t.__esModule ? t : { default: t };
}
function dn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function pn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dn(Object(n), !0).forEach(function(r) {
      qt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dn(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function xi(t, e) {
  if (t == null) return {};
  var n = Oi(t, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (s = 0; s < i.length; s++)
      r = i[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Oi(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), s, i;
  for (i = 0; i < r.length; i++)
    s = r[i], !(e.indexOf(s) >= 0) && (n[s] = t[s]);
  return n;
}
function Ri(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ti(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function Ci(t, e, n) {
  return e && Ti(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Pi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _t(t, e);
}
function _t(t, e) {
  return _t = Object.setPrototypeOf || function(r, s) {
    return r.__proto__ = s, r;
  }, _t(t, e);
}
function Li(t) {
  var e = Ai();
  return function() {
    var r = We(t), s;
    if (e) {
      var i = We(this).constructor;
      s = Reflect.construct(r, arguments, i);
    } else
      s = r.apply(this, arguments);
    return Ni(this, s);
  };
}
function Ni(t, e) {
  if (e && (It(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pr(t);
}
function pr(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ai() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function We(t) {
  return We = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, We(t);
}
function qt(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var hr = /* @__PURE__ */ function(t) {
  Pi(n, t);
  var e = Li(n);
  function n() {
    var r;
    Ri(this, n);
    for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++)
      i[o] = arguments[o];
    return r = e.call.apply(e, [this].concat(i)), qt(pr(r), "onClick", function(a) {
      var l = r.props, c = l.text, u = l.onCopy, d = l.children, f = l.options, y = De.default.Children.only(d), h = (0, wi.default)(c, f);
      u && u(c, h), y && y.props && typeof y.props.onClick == "function" && y.props.onClick(a);
    }), r;
  }
  return Ci(n, [{
    key: "render",
    value: function() {
      var s = this.props;
      s.text, s.onCopy, s.options;
      var i = s.children, o = xi(s, Ei), a = De.default.Children.only(i);
      return /* @__PURE__ */ De.default.cloneElement(a, pn(pn({}, o), {}, {
        onClick: this.onClick
      }));
    }
  }]), n;
}(De.default.PureComponent);
it.CopyToClipboard = hr;
qt(hr, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var Ii = it, kt = Ii.CopyToClipboard;
kt.CopyToClipboard = kt;
var _i = kt;
const ko = /* @__PURE__ */ Dn(_i), Ae = (t) => typeof t == "number" && !isNaN(t), Se = (t) => typeof t == "string", ue = (t) => typeof t == "function", Ve = (t) => Se(t) || ue(t) ? t : null, $t = (t) => U.isValidElement(t) || Se(t) || ue(t) || Ae(t);
function ki(t, e, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: s } = t;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = r + "px", s.transition = `all ${n}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(e, n);
    });
  });
}
function ot(t) {
  let { enter: e, exit: n, appendPosition: r = !1, collapse: s = !0, collapseDuration: i = 300 } = t;
  return function(o) {
    let { children: a, position: l, preventExitTransition: c, done: u, nodeRef: d, isIn: f, playToast: y } = o;
    const h = r ? `${e}--${l}` : e, m = r ? `${n}--${l}` : n, g = U.useRef(0);
    return U.useLayoutEffect(() => {
      const x = d.current, w = h.split(" "), S = (E) => {
        E.target === d.current && (y(), x.removeEventListener("animationend", S), x.removeEventListener("animationcancel", S), g.current === 0 && E.type !== "animationcancel" && x.classList.remove(...w));
      };
      x.classList.add(...w), x.addEventListener("animationend", S), x.addEventListener("animationcancel", S);
    }, []), U.useEffect(() => {
      const x = d.current, w = () => {
        x.removeEventListener("animationend", w), s ? ki(x, u, i) : u();
      };
      f || (c ? w() : (g.current = 1, x.className += ` ${m}`, x.addEventListener("animationend", w)));
    }, [f]), J.createElement(J.Fragment, null, a);
  };
}
function hn(t, e) {
  return t != null ? { content: t.content, containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, status: e } : {};
}
const ne = /* @__PURE__ */ new Map();
let Ie = [];
const jt = /* @__PURE__ */ new Set(), $i = (t) => jt.forEach((e) => e(t)), gr = () => ne.size > 0;
function mr(t, e) {
  var n;
  if (e) return !((n = ne.get(e)) == null || !n.isToastActive(t));
  let r = !1;
  return ne.forEach((s) => {
    s.isToastActive(t) && (r = !0);
  }), r;
}
function yr(t, e) {
  $t(t) && (gr() || Ie.push({ content: t, options: e }), ne.forEach((n) => {
    n.buildToast(t, e);
  }));
}
function gn(t, e) {
  ne.forEach((n) => {
    e != null && e != null && e.containerId ? (e == null ? void 0 : e.containerId) === n.id && n.toggle(t, e == null ? void 0 : e.id) : n.toggle(t, e == null ? void 0 : e.id);
  });
}
function ji(t) {
  const { subscribe: e, getSnapshot: n, setProps: r } = U.useRef(function(i) {
    const o = i.containerId || 1;
    return { subscribe(a) {
      const l = /* @__PURE__ */ function(u, d, f) {
        let y = 1, h = 0, m = [], g = [], x = [], w = d;
        const S = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), b = () => {
          x = Array.from(S.values()), E.forEach((T) => T());
        }, D = (T) => {
          g = T == null ? [] : g.filter((I) => I !== T), b();
        }, L = (T) => {
          const { toastId: I, onOpen: B, updateId: z, children: ae } = T.props, fe = z == null;
          T.staleId && S.delete(T.staleId), S.set(I, T), g = [...g, T.props.toastId].filter((Y) => Y !== T.staleId), b(), f(hn(T, fe ? "added" : "updated")), fe && ue(B) && B(U.isValidElement(ae) && ae.props);
        };
        return { id: u, props: w, observe: (T) => (E.add(T), () => E.delete(T)), toggle: (T, I) => {
          S.forEach((B) => {
            I != null && I !== B.props.toastId || ue(B.toggle) && B.toggle(T);
          });
        }, removeToast: D, toasts: S, clearQueue: () => {
          h -= m.length, m = [];
        }, buildToast: (T, I) => {
          if (((N) => {
            let { containerId: P, toastId: C, updateId: k } = N;
            const A = P ? P !== u : u !== 1, $ = S.has(C) && k == null;
            return A || $;
          })(I)) return;
          const { toastId: B, updateId: z, data: ae, staleId: fe, delay: Y } = I, te = () => {
            D(B);
          }, X = z == null;
          X && h++;
          const G = { ...w, style: w.toastStyle, key: y++, ...Object.fromEntries(Object.entries(I).filter((N) => {
            let [P, C] = N;
            return C != null;
          })), toastId: B, updateId: z, data: ae, closeToast: te, isIn: !1, className: Ve(I.className || w.toastClassName), bodyClassName: Ve(I.bodyClassName || w.bodyClassName), progressClassName: Ve(I.progressClassName || w.progressClassName), autoClose: !I.isLoading && (K = I.autoClose, Z = w.autoClose, K === !1 || Ae(K) && K > 0 ? K : Z), deleteToast() {
            const N = S.get(B), { onClose: P, children: C } = N.props;
            ue(P) && P(U.isValidElement(C) && C.props), f(hn(N, "removed")), S.delete(B), h--, h < 0 && (h = 0), m.length > 0 ? L(m.shift()) : b();
          } };
          var K, Z;
          G.closeButton = w.closeButton, I.closeButton === !1 || $t(I.closeButton) ? G.closeButton = I.closeButton : I.closeButton === !0 && (G.closeButton = !$t(w.closeButton) || w.closeButton);
          let v = T;
          U.isValidElement(T) && !Se(T.type) ? v = U.cloneElement(T, { closeToast: te, toastProps: G, data: ae }) : ue(T) && (v = T({ closeToast: te, toastProps: G, data: ae }));
          const O = { content: v, props: G, staleId: fe };
          w.limit && w.limit > 0 && h > w.limit && X ? m.push(O) : Ae(Y) ? setTimeout(() => {
            L(O);
          }, Y) : L(O);
        }, setProps(T) {
          w = T;
        }, setToggle: (T, I) => {
          S.get(T).toggle = I;
        }, isToastActive: (T) => g.some((I) => I === T), getSnapshot: () => x };
      }(o, i, $i);
      ne.set(o, l);
      const c = l.observe(a);
      return Ie.forEach((u) => yr(u.content, u.options)), Ie = [], () => {
        c(), ne.delete(o);
      };
    }, setProps(a) {
      var l;
      (l = ne.get(o)) == null || l.setProps(a);
    }, getSnapshot() {
      var a;
      return (a = ne.get(o)) == null ? void 0 : a.getSnapshot();
    } };
  }(t)).current;
  r(t);
  const s = U.useSyncExternalStore(e, n, n);
  return { getToastToRender: function(i) {
    if (!s) return [];
    const o = /* @__PURE__ */ new Map();
    return t.newestOnTop && s.reverse(), s.forEach((a) => {
      const { position: l } = a.props;
      o.has(l) || o.set(l, []), o.get(l).push(a);
    }), Array.from(o, (a) => i(a[0], a[1]));
  }, isToastActive: mr, count: s == null ? void 0 : s.length };
}
function Di(t) {
  const [e, n] = U.useState(!1), [r, s] = U.useState(!1), i = U.useRef(null), o = U.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: a, pauseOnHover: l, closeToast: c, onClick: u, closeOnClick: d } = t;
  var f, y;
  function h() {
    n(!0);
  }
  function m() {
    n(!1);
  }
  function g(S) {
    const E = i.current;
    o.canDrag && E && (o.didMove = !0, e && m(), o.delta = t.draggableDirection === "x" ? S.clientX - o.start : S.clientY - o.start, o.start !== S.clientX && (o.canCloseOnClick = !1), E.style.transform = `translate3d(${t.draggableDirection === "x" ? `${o.delta}px, var(--y)` : `0, calc(${o.delta}px + var(--y))`},0)`, E.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
  }
  function x() {
    document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", x);
    const S = i.current;
    if (o.canDrag && o.didMove && S) {
      if (o.canDrag = !1, Math.abs(o.delta) > o.removalDistance) return s(!0), t.closeToast(), void t.collapseAll();
      S.style.transition = "transform 0.2s, opacity 0.2s", S.style.removeProperty("transform"), S.style.removeProperty("opacity");
    }
  }
  (y = ne.get((f = { id: t.toastId, containerId: t.containerId, fn: n }).containerId || 1)) == null || y.setToggle(f.id, f.fn), U.useEffect(() => {
    if (t.pauseOnFocusLoss) return document.hasFocus() || m(), window.addEventListener("focus", h), window.addEventListener("blur", m), () => {
      window.removeEventListener("focus", h), window.removeEventListener("blur", m);
    };
  }, [t.pauseOnFocusLoss]);
  const w = { onPointerDown: function(S) {
    if (t.draggable === !0 || t.draggable === S.pointerType) {
      o.didMove = !1, document.addEventListener("pointermove", g), document.addEventListener("pointerup", x);
      const E = i.current;
      o.canCloseOnClick = !0, o.canDrag = !0, E.style.transition = "none", t.draggableDirection === "x" ? (o.start = S.clientX, o.removalDistance = E.offsetWidth * (t.draggablePercent / 100)) : (o.start = S.clientY, o.removalDistance = E.offsetHeight * (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent) / 100);
    }
  }, onPointerUp: function(S) {
    const { top: E, bottom: b, left: D, right: L } = i.current.getBoundingClientRect();
    S.nativeEvent.type !== "touchend" && t.pauseOnHover && S.clientX >= D && S.clientX <= L && S.clientY >= E && S.clientY <= b ? m() : h();
  } };
  return a && l && (w.onMouseEnter = m, t.stacked || (w.onMouseLeave = h)), d && (w.onClick = (S) => {
    u && u(S), o.canCloseOnClick && c();
  }), { playToast: h, pauseToast: m, isRunning: e, preventExitTransition: r, toastRef: i, eventHandlers: w };
}
function Fi(t) {
  let { delay: e, isRunning: n, closeToast: r, type: s = "default", hide: i, className: o, style: a, controlledProgress: l, progress: c, rtl: u, isIn: d, theme: f } = t;
  const y = i || l && c === 0, h = { ...a, animationDuration: `${e}ms`, animationPlayState: n ? "running" : "paused" };
  l && (h.transform = `scaleX(${c})`);
  const m = me("Toastify__progress-bar", l ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${f}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": u }), g = ue(o) ? o({ rtl: u, type: s, defaultClassName: m }) : me(m, o), x = { [l && c >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: l && c < 1 ? null : () => {
    d && r();
  } };
  return J.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": y }, J.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${s}` }), J.createElement("div", { role: "progressbar", "aria-hidden": y ? "true" : "false", "aria-label": "notification timer", className: g, style: h, ...x }));
}
let Ui = 1;
const br = () => "" + Ui++;
function Mi(t) {
  return t && (Se(t.toastId) || Ae(t.toastId)) ? t.toastId : br();
}
function Pe(t, e) {
  return yr(t, e), e.toastId;
}
function Ye(t, e) {
  return { ...e, type: e && e.type || t, toastId: Mi(e) };
}
function Fe(t) {
  return (e, n) => Pe(e, Ye(t, n));
}
function W(t, e) {
  return Pe(t, Ye("default", e));
}
W.loading = (t, e) => Pe(t, Ye("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e })), W.promise = function(t, e, n) {
  let r, { pending: s, error: i, success: o } = e;
  s && (r = Se(s) ? W.loading(s, n) : W.loading(s.render, { ...n, ...s }));
  const a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l = (u, d, f) => {
    if (d == null) return void W.dismiss(r);
    const y = { type: u, ...a, ...n, data: f }, h = Se(d) ? { render: d } : d;
    return r ? W.update(r, { ...y, ...h }) : W(h.render, { ...y, ...h }), f;
  }, c = ue(t) ? t() : t;
  return c.then((u) => l("success", o, u)).catch((u) => l("error", i, u)), c;
}, W.success = Fe("success"), W.info = Fe("info"), W.error = Fe("error"), W.warning = Fe("warning"), W.warn = W.warning, W.dark = (t, e) => Pe(t, Ye("default", { theme: "dark", ...e })), W.dismiss = function(t) {
  (function(e) {
    var n;
    if (gr()) {
      if (e == null || Se(n = e) || Ae(n)) ne.forEach((r) => {
        r.removeToast(e);
      });
      else if (e && ("containerId" in e || "id" in e)) {
        const r = ne.get(e.containerId);
        r ? r.removeToast(e.id) : ne.forEach((s) => {
          s.removeToast(e.id);
        });
      }
    } else Ie = Ie.filter((r) => e != null && r.options.toastId !== e);
  })(t);
}, W.clearWaitingQueue = function(t) {
  t === void 0 && (t = {}), ne.forEach((e) => {
    !e.props.limit || t.containerId && e.id !== t.containerId || e.clearQueue();
  });
}, W.isActive = mr, W.update = function(t, e) {
  e === void 0 && (e = {});
  const n = ((r, s) => {
    var i;
    let { containerId: o } = s;
    return (i = ne.get(o || 1)) == null ? void 0 : i.toasts.get(r);
  })(t, e);
  if (n) {
    const { props: r, content: s } = n, i = { delay: 100, ...r, ...e, toastId: e.toastId || t, updateId: br() };
    i.toastId !== t && (i.staleId = t);
    const o = i.render || s;
    delete i.render, Pe(o, i);
  }
}, W.done = (t) => {
  W.update(t, { progress: 1 });
}, W.onChange = function(t) {
  return jt.add(t), () => {
    jt.delete(t);
  };
}, W.play = (t) => gn(!0, t), W.pause = (t) => gn(!1, t);
const Bi = typeof window < "u" ? U.useLayoutEffect : U.useEffect, Ue = (t) => {
  let { theme: e, type: n, isLoading: r, ...s } = t;
  return J.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`, ...s });
}, pt = { info: function(t) {
  return J.createElement(Ue, { ...t }, J.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t) {
  return J.createElement(Ue, { ...t }, J.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t) {
  return J.createElement(Ue, { ...t }, J.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t) {
  return J.createElement(Ue, { ...t }, J.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return J.createElement("div", { className: "Toastify__spinner" });
} }, zi = (t) => {
  const { isRunning: e, preventExitTransition: n, toastRef: r, eventHandlers: s, playToast: i } = Di(t), { closeButton: o, children: a, autoClose: l, onClick: c, type: u, hideProgressBar: d, closeToast: f, transition: y, position: h, className: m, style: g, bodyClassName: x, bodyStyle: w, progressClassName: S, progressStyle: E, updateId: b, role: D, progress: L, rtl: T, toastId: I, deleteToast: B, isIn: z, isLoading: ae, closeOnClick: fe, theme: Y } = t, te = me("Toastify__toast", `Toastify__toast-theme--${Y}`, `Toastify__toast--${u}`, { "Toastify__toast--rtl": T }, { "Toastify__toast--close-on-click": fe }), X = ue(m) ? m({ rtl: T, position: h, type: u, defaultClassName: te }) : me(te, m), G = function(O) {
    let { theme: N, type: P, isLoading: C, icon: k } = O, A = null;
    const $ = { theme: N, type: P };
    return k === !1 || (ue(k) ? A = k({ ...$, isLoading: C }) : U.isValidElement(k) ? A = U.cloneElement(k, $) : C ? A = pt.spinner() : ((F) => F in pt)(P) && (A = pt[P]($))), A;
  }(t), K = !!L || !l, Z = { closeToast: f, type: u, theme: Y };
  let v = null;
  return o === !1 || (v = ue(o) ? o(Z) : U.isValidElement(o) ? U.cloneElement(o, Z) : function(O) {
    let { closeToast: N, theme: P, ariaLabel: C = "close" } = O;
    return J.createElement("button", { className: `Toastify__close-button Toastify__close-button--${P}`, type: "button", onClick: (k) => {
      k.stopPropagation(), N(k);
    }, "aria-label": C }, J.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, J.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }(Z)), J.createElement(y, { isIn: z, done: B, position: h, preventExitTransition: n, nodeRef: r, playToast: i }, J.createElement("div", { id: I, onClick: c, "data-in": z, className: X, ...s, style: g, ref: r }, J.createElement("div", { ...z && { role: D }, className: ue(x) ? x({ type: u }) : me("Toastify__toast-body", x), style: w }, G != null && J.createElement("div", { className: me("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !ae }) }, G), J.createElement("div", null, a)), v, J.createElement(Fi, { ...b && !K ? { key: `pb-${b}` } : {}, rtl: T, theme: Y, delay: l, isRunning: e, isIn: z, closeToast: f, hide: d, type: u, style: E, className: S, controlledProgress: K, progress: L || 0 })));
}, at = function(t, e) {
  return e === void 0 && (e = !1), { enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: e };
}, Hi = ot(at("bounce", !0));
ot(at("slide", !0));
const $o = ot(at("zoom"));
ot(at("flip"));
const qi = { position: "top-right", transition: Hi, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
function jo(t) {
  let e = { ...qi, ...t };
  const n = t.stacked, [r, s] = U.useState(!0), i = U.useRef(null), { getToastToRender: o, isToastActive: a, count: l } = ji(e), { className: c, style: u, rtl: d, containerId: f } = e;
  function y(m) {
    const g = me("Toastify__toast-container", `Toastify__toast-container--${m}`, { "Toastify__toast-container--rtl": d });
    return ue(c) ? c({ position: m, rtl: d, defaultClassName: g }) : me(g, Ve(c));
  }
  function h() {
    n && (s(!0), W.play());
  }
  return Bi(() => {
    if (n) {
      var m;
      const g = i.current.querySelectorAll('[data-in="true"]'), x = 12, w = (m = e.position) == null ? void 0 : m.includes("top");
      let S = 0, E = 0;
      Array.from(g).reverse().forEach((b, D) => {
        const L = b;
        L.classList.add("Toastify__toast--stacked"), D > 0 && (L.dataset.collapsed = `${r}`), L.dataset.pos || (L.dataset.pos = w ? "top" : "bot");
        const T = S * (r ? 0.2 : 1) + (r ? 0 : x * D);
        L.style.setProperty("--y", `${w ? T : -1 * T}px`), L.style.setProperty("--g", `${x}`), L.style.setProperty("--s", "" + (1 - (r ? E : 0))), S += L.offsetHeight, E += 0.025;
      });
    }
  }, [r, l, n]), J.createElement("div", { ref: i, className: "Toastify", id: f, onMouseEnter: () => {
    n && (s(!1), W.pause());
  }, onMouseLeave: h }, o((m, g) => {
    const x = g.length ? { ...u } : { ...u, pointerEvents: "none" };
    return J.createElement("div", { className: y(m), style: x, key: `container-${m}` }, g.map((w) => {
      let { content: S, props: E } = w;
      return J.createElement(zi, { ...E, stacked: n, collapseAll: h, isIn: a(E.toastId, E.containerId), style: E.style, key: `toast-${E.key}` }, S);
    }));
  }));
}
const _ = (t) => typeof t == "string", Ce = () => {
  let t, e;
  const n = new Promise((r, s) => {
    t = r, e = s;
  });
  return n.resolve = t, n.reject = e, n;
}, mn = (t) => t == null ? "" : "" + t, Vi = (t, e, n) => {
  t.forEach((r) => {
    e[r] && (n[r] = e[r]);
  });
}, Ki = /###/g, yn = (t) => t && t.indexOf("###") > -1 ? t.replace(Ki, ".") : t, bn = (t) => !t || _(t), Le = (t, e, n) => {
  const r = _(e) ? e.split(".") : e;
  let s = 0;
  for (; s < r.length - 1; ) {
    if (bn(t)) return {};
    const i = yn(r[s]);
    !t[i] && n && (t[i] = new n()), Object.prototype.hasOwnProperty.call(t, i) ? t = t[i] : t = {}, ++s;
  }
  return bn(t) ? {} : {
    obj: t,
    k: yn(r[s])
  };
}, vn = (t, e, n) => {
  const {
    obj: r,
    k: s
  } = Le(t, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[s] = n;
    return;
  }
  let i = e[e.length - 1], o = e.slice(0, e.length - 1), a = Le(t, o, Object);
  for (; a.obj === void 0 && o.length; )
    i = `${o[o.length - 1]}.${i}`, o = o.slice(0, o.length - 1), a = Le(t, o, Object), a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${i}`] = n;
}, Ji = (t, e, n, r) => {
  const {
    obj: s,
    k: i
  } = Le(t, e, Object);
  s[i] = s[i] || [], s[i].push(n);
}, Xe = (t, e) => {
  const {
    obj: n,
    k: r
  } = Le(t, e);
  if (n)
    return n[r];
}, Wi = (t, e, n) => {
  const r = Xe(t, n);
  return r !== void 0 ? r : Xe(e, n);
}, vr = (t, e, n) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in t ? _(t[r]) || t[r] instanceof String || _(e[r]) || e[r] instanceof String ? n && (t[r] = e[r]) : vr(t[r], e[r], n) : t[r] = e[r]);
  return t;
}, Ee = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Yi = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Xi = (t) => _(t) ? t.replace(/[&<>"'\/]/g, (e) => Yi[e]) : t;
class Gi {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e);
    if (n !== void 0)
      return n;
    const r = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r;
  }
}
const Qi = [" ", ",", "?", "!", ";"], Zi = new Gi(20), eo = (t, e, n) => {
  e = e || "", n = n || "";
  const r = Qi.filter((o) => e.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0) return !0;
  const s = Zi.getRegExp(`(${r.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !s.test(t);
  if (!i) {
    const o = t.indexOf(n);
    o > 0 && !s.test(t.substring(0, o)) && (i = !0);
  }
  return i;
}, Dt = function(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!t) return;
  if (t[e]) return t[e];
  const r = e.split(n);
  let s = t;
  for (let i = 0; i < r.length; ) {
    if (!s || typeof s != "object")
      return;
    let o, a = "";
    for (let l = i; l < r.length; ++l)
      if (l !== i && (a += n), a += r[l], o = s[a], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && l < r.length - 1)
          continue;
        i += l - i + 1;
        break;
      }
    s = o;
  }
  return s;
}, Ge = (t) => t && t.replace("_", "-"), to = {
  type: "logger",
  log(t) {
    this.output("log", t);
  },
  warn(t) {
    this.output("warn", t);
  },
  error(t) {
    this.output("error", t);
  },
  output(t, e) {
    console && console[t] && console[t].apply(console, e);
  }
};
class Qe {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, n);
  }
  init(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = e || to, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, n, r, s) {
    return s && !this.debug ? null : (_(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[n](e));
  }
  create(e) {
    return new Qe(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Qe(this.logger, e);
  }
}
var he = new Qe();
class lt {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const s = this.observers[r].get(n) || 0;
      this.observers[r].set(n, s + 1);
    }), this;
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(n);
    }
  }
  emit(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((o) => {
      let [a, l] = o;
      for (let c = 0; c < l; c++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((o) => {
      let [a, l] = o;
      for (let c = 0; c < l; c++)
        a.apply(a, [e, ...r]);
    });
  }
}
class Sn extends lt {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, o = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, n], r && (Array.isArray(r) ? a.push(...r) : _(r) && i ? a.push(...r.split(i)) : a.push(r)));
    const l = Xe(this.data, a);
    return !l && !n && !r && e.indexOf(".") > -1 && (e = a[0], n = a[1], r = a.slice(2).join(".")), l || !o || !_(r) ? l : Dt(this.data && this.data[e] && this.data[e][n], r, i);
  }
  addResource(e, n, r, s) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, n];
    r && (a = a.concat(o ? r.split(o) : r)), e.indexOf(".") > -1 && (a = e.split("."), s = n, n = a[1]), this.addNamespaces(n), vn(this.data, a, s), i.silent || this.emit("added", e, n, r, s);
  }
  addResources(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in r)
      (_(r[i]) || Array.isArray(r[i])) && this.addResource(e, n, i, r[i], {
        silent: !0
      });
    s.silent || this.emit("added", e, n, r);
  }
  addResourceBundle(e, n, r, s, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [e, n];
    e.indexOf(".") > -1 && (a = e.split("."), s = r, r = n, n = a[1]), this.addNamespaces(n);
    let l = Xe(this.data, a) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))), s ? vr(l, r, i) : l = {
      ...l,
      ...r
    }, vn(this.data, a, l), o.silent || this.emit("added", e, n, r);
  }
  removeResourceBundle(e, n) {
    this.hasResourceBundle(e, n) && delete this.data[e][n], this.removeNamespaces(n), this.emit("removed", e, n);
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0;
  }
  getResourceBundle(e, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(e, n)
    } : this.getResource(e, n);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e);
    return !!(n && Object.keys(n) || []).find((s) => n[s] && Object.keys(n[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Sr = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, n, r, s) {
    return t.forEach((i) => {
      this.processors[i] && (e = this.processors[i].process(e, n, r, s));
    }), e;
  }
};
const wn = {};
class Ze extends lt {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Vi(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = he.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const r = this.resolve(e, n);
    return r && r.res !== void 0;
  }
  extractFromKey(e, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const o = r && e.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !eo(e, r, s);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: i
        };
      const c = e.split(r);
      (r !== s || r === s && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), e = c.join(s);
    }
    return _(i) && (i = [i]), {
      key: e,
      namespaces: i
    };
  }
  translate(e, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const s = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: a
    } = this.extractFromKey(e[e.length - 1], n), l = a[a.length - 1], c = n.lng || this.language, u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (u) {
        const E = n.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${l}${E}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${E}${o}`;
      }
      return s ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: c,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : o;
    }
    const d = this.resolve(e, n);
    let f = d && d.res;
    const y = d && d.usedKey || o, h = d && d.exactUsedKey || o, m = Object.prototype.toString.apply(f), g = ["[object Number]", "[object Function]", "[object RegExp]"], x = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, w = !this.i18nFormat || this.i18nFormat.handleAsObject, S = !_(f) && typeof f != "boolean" && typeof f != "number";
    if (w && f && S && g.indexOf(m) < 0 && !(_(x) && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const E = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, f, {
          ...n,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return s ? (d.res = E, d.usedParams = this.getUsedParamsDetails(n), d) : E;
      }
      if (i) {
        const E = Array.isArray(f), b = E ? [] : {}, D = E ? h : y;
        for (const L in f)
          if (Object.prototype.hasOwnProperty.call(f, L)) {
            const T = `${D}${i}${L}`;
            b[L] = this.translate(T, {
              ...n,
              joinArrays: !1,
              ns: a
            }), b[L] === T && (b[L] = f[L]);
          }
        f = b;
      }
    } else if (w && _(x) && Array.isArray(f))
      f = f.join(x), f && (f = this.extendTranslation(f, e, n, r));
    else {
      let E = !1, b = !1;
      const D = n.count !== void 0 && !_(n.count), L = Ze.hasDefaultValue(n), T = D ? this.pluralResolver.getSuffix(c, n.count, n) : "", I = n.ordinal && D ? this.pluralResolver.getSuffix(c, n.count, {
        ordinal: !1
      }) : "", B = D && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), z = B && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${T}`] || n[`defaultValue${I}`] || n.defaultValue;
      !this.isValidLookup(f) && L && (E = !0, f = z), this.isValidLookup(f) || (b = !0, f = o);
      const fe = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && b ? void 0 : f, Y = L && z !== f && this.options.updateMissing;
      if (b || E || Y) {
        if (this.logger.log(Y ? "updateKey" : "missingKey", c, l, o, Y ? z : f), i) {
          const K = this.resolve(o, {
            ...n,
            keySeparator: !1
          });
          K && K.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let te = [];
        const X = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && X && X[0])
          for (let K = 0; K < X.length; K++)
            te.push(X[K]);
        else this.options.saveMissingTo === "all" ? te = this.languageUtils.toResolveHierarchy(n.lng || this.language) : te.push(n.lng || this.language);
        const G = (K, Z, v) => {
          const O = L && v !== f ? v : fe;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(K, l, Z, O, Y, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(K, l, Z, O, Y, n), this.emit("missingKey", K, l, Z, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && D ? te.forEach((K) => {
          const Z = this.pluralResolver.getSuffixes(K, n);
          B && n[`defaultValue${this.options.pluralSeparator}zero`] && Z.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Z.push(`${this.options.pluralSeparator}zero`), Z.forEach((v) => {
            G([K], o + v, n[`defaultValue${v}`] || z);
          });
        }) : G(te, o, z));
      }
      f = this.extendTranslation(f, e, n, d, r), b && f === o && this.options.appendNamespaceToMissingKey && (f = `${l}:${o}`), (b || E) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, E ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return s ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(e, n, r, s, i) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const c = _(e) && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (c) {
        const f = e.match(this.interpolator.nestingRegexp);
        u = f && f.length;
      }
      let d = r.replace && !_(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), e = this.interpolator.interpolate(e, d, r.lng || this.language || s.usedLng, r), c) {
        const f = e.match(this.interpolator.nestingRegexp), y = f && f.length;
        u < y && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (r.lng = this.language || s.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, y = new Array(f), h = 0; h < f; h++)
          y[h] = arguments[h];
        return i && i[0] === y[0] && !r.context ? (o.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`), null) : o.translate(...y, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = _(a) ? [a] : a;
    return e != null && l && l.length && r.applyPostProcessor !== !1 && (e = Sr.handle(l, e, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, s, i, o, a;
    return _(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const c = this.extractFromKey(l, n), u = c.key;
      s = u;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && !_(n.count), y = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), h = n.context !== void 0 && (_(n.context) || typeof n.context == "number") && n.context !== "", m = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((g) => {
        this.isValidLookup(r) || (a = g, !wn[`${m[0]}-${g}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (wn[`${m[0]}-${g}`] = !0, this.logger.warn(`key "${s}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((x) => {
          if (this.isValidLookup(r)) return;
          o = x;
          const w = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(w, u, x, g, n);
          else {
            let E;
            f && (E = this.pluralResolver.getSuffix(x, n.count, n));
            const b = `${this.options.pluralSeparator}zero`, D = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (w.push(u + E), n.ordinal && E.indexOf(D) === 0 && w.push(u + E.replace(D, this.options.pluralSeparator)), y && w.push(u + b)), h) {
              const L = `${u}${this.options.contextSeparator}${n.context}`;
              w.push(L), f && (w.push(L + E), n.ordinal && E.indexOf(D) === 0 && w.push(L + E.replace(D, this.options.pluralSeparator)), y && w.push(L + b));
            }
          }
          let S;
          for (; S = w.pop(); )
            this.isValidLookup(r) || (i = S, r = this.getResource(x, g, S, n));
        }));
      });
    }), {
      res: r,
      usedKey: s,
      exactUsedKey: i,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, n, r, s) : this.resourceStore.getResource(e, n, r, s);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && !_(e.replace);
    let s = r ? e.replace : e;
    if (r && typeof e.count < "u" && (s.count = e.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !r) {
      s = {
        ...s
      };
      for (const i of n)
        delete s[i];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const n = "defaultValue";
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && n === r.substring(0, n.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
const ht = (t) => t.charAt(0).toUpperCase() + t.slice(1);
class En {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = he.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Ge(e), !e || e.indexOf("-") < 0) return null;
    const n = e.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Ge(e), !e || e.indexOf("-") < 0) return e;
    const n = e.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (_(e) && e.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let s = Intl.getCanonicalLocales(e)[0];
          if (s && this.options.lowerCaseLng && (s = s.toLowerCase()), s) return s;
        } catch {
        }
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = e.split("-");
      return this.options.lowerCaseLng ? r = r.map((s) => s.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ht(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ht(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = ht(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let n;
    return e.forEach((r) => {
      if (n) return;
      const s = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
    }), !n && this.options.supportedLngs && e.forEach((r) => {
      if (n) return;
      const s = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(s)) return n = s;
      n = this.options.supportedLngs.find((i) => {
        if (i === s) return i;
        if (!(i.indexOf("-") < 0 && s.indexOf("-") < 0) && (i.indexOf("-") > 0 && s.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === s || i.indexOf(s) === 0 && s.length > 1))
          return i;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(n)), _(e) && (e = [e]), Array.isArray(e)) return e;
    if (!n) return e.default || [];
    let r = e[n];
    return r || (r = e[this.getScriptPartFromCode(n)]), r || (r = e[this.formatLanguageCode(n)]), r || (r = e[this.getLanguagePartFromCode(n)]), r || (r = e.default), r || [];
  }
  toResolveHierarchy(e, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], e), s = [], i = (o) => {
      o && (this.isSupportedCode(o) ? s.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return _(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : _(e) && i(this.formatLanguageCode(e)), r.forEach((o) => {
      s.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), s;
  }
}
let no = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], ro = {
  1: (t) => +(t > 1),
  2: (t) => +(t != 1),
  3: (t) => 0,
  4: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  5: (t) => t == 0 ? 0 : t == 1 ? 1 : t == 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5,
  6: (t) => t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2,
  7: (t) => t == 1 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  8: (t) => t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3,
  9: (t) => +(t >= 2),
  10: (t) => t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4,
  11: (t) => t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3,
  12: (t) => +(t % 10 != 1 || t % 100 == 11),
  13: (t) => +(t !== 0),
  14: (t) => t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3,
  15: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  16: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2,
  17: (t) => t == 1 || t % 10 == 1 && t % 100 != 11 ? 0 : 1,
  18: (t) => t == 0 ? 0 : t == 1 ? 1 : 2,
  19: (t) => t == 1 ? 0 : t == 0 || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3,
  20: (t) => t == 1 ? 0 : t == 0 || t % 100 > 0 && t % 100 < 20 ? 1 : 2,
  21: (t) => t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0,
  22: (t) => t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3
};
const so = ["v1", "v2", "v3"], io = ["v4"], xn = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, oo = () => {
  const t = {};
  return no.forEach((e) => {
    e.lngs.forEach((n) => {
      t[n] = {
        numbers: e.nr,
        plurals: ro[e.fc]
      };
    });
  }), t;
};
class ao {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = n, this.logger = he.create("pluralResolver"), (!this.options.compatibilityJSON || io.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = oo(), this.pluralRulesCache = {};
  }
  addRule(e, n) {
    this.rules[e] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const r = Ge(e === "dev" ? "en" : e), s = n.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
          cleanedCode: r,
          type: s
        });
        if (i in this.pluralRulesCache)
          return this.pluralRulesCache[i];
        const o = new Intl.PluralRules(r, {
          type: s
        });
        return this.pluralRulesCache[i] = o, o;
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((s) => `${n}${s}`);
  }
  getSuffixes(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((s, i) => xn[s] - xn[i]).map((s) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : r.numbers.map((s) => this.getSuffix(e, s, n)) : [];
  }
  getSuffix(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, r);
    return s ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(n)}` : this.getSuffixRetroCompatible(s, n) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, n) {
    const r = e.noAbs ? e.plurals(n) : e.plurals(Math.abs(n));
    let s = e.numbers[r];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (s === 2 ? s = "plural" : s === 1 && (s = ""));
    const i = () => this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
    return this.options.compatibilityJSON === "v1" ? s === 1 ? "" : typeof s == "number" ? `_plural_${s.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !so.includes(this.options.compatibilityJSON);
  }
}
const On = function(t, e, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Wi(t, e, n);
  return !i && s && _(n) && (i = Dt(t, n, r), i === void 0 && (i = Dt(e, n, r))), i;
}, gt = (t) => t.replace(/\$/g, "$$$$");
class lo {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = he.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((n) => n), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: i,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: y,
      nestingSuffix: h,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: g,
      maxReplaces: x,
      alwaysFormat: w
    } = e.interpolation;
    this.escape = n !== void 0 ? n : Xi, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = i ? Ee(i) : o || "{{", this.suffix = a ? Ee(a) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? Ee(f) : y || Ee("$t("), this.nestingSuffix = h ? Ee(h) : m || Ee(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = x || 1e3, this.alwaysFormat = w !== void 0 ? w : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, n, r, s) {
    let i, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (y) => {
      if (y.indexOf(this.formatSeparator) < 0) {
        const x = On(n, l, y, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, r, {
          ...s,
          ...n,
          interpolationkey: y
        }) : x;
      }
      const h = y.split(this.formatSeparator), m = h.shift().trim(), g = h.join(this.formatSeparator).trim();
      return this.format(On(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), g, r, {
        ...s,
        ...n,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const u = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, d = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (y) => gt(y)
    }, {
      regex: this.regexp,
      safeValue: (y) => this.escapeValue ? gt(this.escape(y)) : gt(y)
    }].forEach((y) => {
      for (a = 0; i = y.regex.exec(e); ) {
        const h = i[1].trim();
        if (o = c(h), o === void 0)
          if (typeof u == "function") {
            const g = u(e, i, s);
            o = _(g) ? g : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, h))
            o = "";
          else if (d) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`), o = "";
        else !_(o) && !this.useRawValueToEscape && (o = mn(o));
        const m = y.safeValue(o);
        if (e = e.replace(i[0], m), d ? (y.regex.lastIndex += o.length, y.regex.lastIndex -= i[0].length) : y.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, i, o;
    const a = (l, c) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const d = l.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, o);
      const y = f.match(/'/g), h = f.match(/"/g);
      (y && y.length % 2 === 0 && !h || h.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        o = JSON.parse(f), c && (o = {
          ...c,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${u}${f}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...r
      }, o = o.replace && !_(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let c = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const u = s[1].split(this.formatSeparator).map((d) => d.trim());
        s[1] = u.shift(), l = u, c = !0;
      }
      if (i = n(a.call(this, s[1].trim(), o), o), i && s[0] === e && !_(i)) return i;
      _(i) || (i = mn(i)), i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), i = ""), c && (i = l.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: s[1].trim()
      }), i.trim())), e = e.replace(s[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const uo = (t) => {
  let e = t.toLowerCase().trim();
  const n = {};
  if (t.indexOf("(") > -1) {
    const r = t.split("(");
    e = r[0].toLowerCase().trim();
    const s = r[1].substring(0, r[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? n.currency || (n.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? n.range || (n.range = s.trim()) : s.split(";").forEach((o) => {
      if (o) {
        const [a, ...l] = o.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
        n[u] || (n[u] = c), c === "false" && (n[u] = !1), c === "true" && (n[u] = !0), isNaN(c) || (n[u] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: n
  };
}, xe = (t) => {
  const e = {};
  return (n, r, s) => {
    let i = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (i = {
      ...i,
      [s.interpolationkey]: void 0
    });
    const o = r + JSON.stringify(i);
    let a = e[o];
    return a || (a = t(Ge(r), s), e[o] = a), a(n);
  };
};
class co {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = he.create("formatter"), this.options = e, this.formats = {
      number: xe((n, r) => (s) => new Intl.NumberFormat(n, {
        ...r
      }).format(s)),
      currency: xe((n, r) => (s) => new Intl.NumberFormat(n, {
        ...r,
        style: "currency"
      }).format(s)),
      datetime: xe((n, r) => (s) => new Intl.DateTimeFormat(n, {
        ...r
      }).format(s)),
      relativetime: xe((n, r) => (s) => new Intl.RelativeTimeFormat(n, {
        ...r
      }).format(s, r.range || "day")),
      list: xe((n, r) => (s) => new Intl.ListFormat(n, {
        ...r
      }).format(s))
    }, this.init(e);
  }
  init(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = n.interpolation.formatSeparator || ",";
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n;
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = xe(n);
  }
  format(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((a) => a.indexOf(")") > -1)) {
      const a = i.findIndex((l) => l.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, l) => {
      const {
        formatName: c,
        formatOptions: u
      } = uo(l);
      if (this.formats[c]) {
        let d = a;
        try {
          const f = s && s.formatParams && s.formatParams[s.interpolationkey] || {}, y = f.locale || f.lng || s.locale || s.lng || r;
          d = this.formats[c](a, y, {
            ...u,
            ...s,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, e);
  }
}
const fo = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class po extends lt {
  constructor(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = s, this.logger = he.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, s.backend, s);
  }
  queueLoad(e, n, r, s) {
    const i = {}, o = {}, a = {}, l = {};
    return e.forEach((c) => {
      let u = !0;
      n.forEach((d) => {
        const f = `${c}|${d}`;
        !r.reload && this.store.hasResourceBundle(c, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? o[f] === void 0 && (o[f] = !0) : (this.state[f] = 1, u = !1, o[f] === void 0 && (o[f] = !0), i[f] === void 0 && (i[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), u || (a[c] = !0);
    }), (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, n, r) {
    const s = e.split("|"), i = s[0], o = s[1];
    n && this.emit("failedLoading", i, o, n), !n && r && this.store.addResourceBundle(i, o, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = n ? -1 : 2, n && r && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      Ji(l.loaded, [i], o), fo(l, e), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        a[c] || (a[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach((d) => {
          a[c][d] === void 0 && (a[c][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: r,
        tried: s,
        wait: i,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const a = (c, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && u && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, n, r, s + 1, i * 2, o);
        }, i);
        return;
      }
      o(c, u);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, n);
        c && typeof c.then == "function" ? c.then((u) => a(null, u)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return l(e, n, a);
  }
  prepareLoading(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    _(e) && (e = this.languageUtils.toResolveHierarchy(e)), _(n) && (n = [n]);
    const i = this.queueLoad(e, n, r, s);
    if (!i.toLoad.length)
      return i.pending.length || s(), null;
    i.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, n, r) {
    this.prepareLoading(e, n, {}, r);
  }
  reload(e, n, r) {
    this.prepareLoading(e, n, {
      reload: !0
    }, r);
  }
  loadOne(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = e.split("|"), s = r[0], i = r[1];
    this.read(s, i, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${n}loading namespace ${i} for language ${s} failed`, o), !o && a && this.logger.log(`${n}loaded namespace ${i} for language ${s}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, n, r, s, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...o,
          isUpdate: i
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let u;
            c.length === 5 ? u = c(e, n, r, s, l) : u = c(e, n, r, s), u && typeof u.then == "function" ? u.then((d) => a(null, d)).catch(a) : a(null, u);
          } catch (u) {
            a(u);
          }
        else
          c(e, n, r, s, a, l);
      }
      !e || !e[0] || this.store.addResource(e[0], n, r, s);
    }
  }
}
const Rn = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (t) => {
    let e = {};
    if (typeof t[1] == "object" && (e = t[1]), _(t[1]) && (e.defaultValue = t[1]), _(t[2]) && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
      const n = t[3] || t[2];
      Object.keys(n).forEach((r) => {
        e[r] = n[r];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (t) => t,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), Tn = (t) => (_(t.ns) && (t.ns = [t.ns]), _(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]), _(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t), Me = () => {
}, ho = (t) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
};
class _e extends lt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Tn(e), this.services = {}, this.logger = he, this.modules = {
      external: []
    }, ho(this), n && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, n), this;
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init() {
    var e = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (_(n.ns) ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const s = Rn();
    this.options = {
      ...s,
      ...this.options,
      ...Tn(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? he.init(i(this.modules.logger), this.options) : he.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = co);
      const d = new En(this.options);
      this.store = new Sn(this.options.resources, this.options);
      const f = this.services;
      f.logger = he, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new ao(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new lo(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new po(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(y) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          m[g - 1] = arguments[g];
        e.emit(y, ...m);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Ze(this.services, this.options), this.translator.on("*", function(y) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          m[g - 1] = arguments[g];
        e.emit(y, ...m);
      }), this.modules.external.forEach((y) => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Me), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments), e;
      };
    });
    const l = Ce(), c = () => {
      const u = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Me;
    const s = _(e) ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (s && s.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const i = [], o = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
          c !== "cimode" && i.indexOf(c) < 0 && i.push(c);
        });
      };
      s ? o(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload && this.options.preload.forEach((a) => o(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(e, n, r) {
    const s = Ce();
    return typeof e == "function" && (r = e, e = void 0), typeof n == "function" && (r = n, n = void 0), e || (e = this.languages), n || (n = this.options.ns), r || (r = Me), this.services.backendConnector.reload(e, n, (i) => {
      s.resolve(), r(i);
    }), s;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Sr.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(e, n) {
    var r = this;
    this.isLanguageChangingTo = e;
    const s = Ce();
    this.emit("languageChanging", e);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, c) => {
      c ? (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return r.t(...arguments);
      }), n && n(l, function() {
        return r.t(...arguments);
      });
    }, a = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const c = _(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (u) => {
        o(u, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), s;
  }
  getFixedT(e, n, r) {
    var s = this;
    const i = function(o, a) {
      let l;
      if (typeof a != "object") {
        for (var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), d = 2; d < c; d++)
          u[d - 2] = arguments[d];
        l = s.options.overloadTranslationOptionHandler([o, a].concat(u));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
      const f = s.options.keySeparator || ".";
      let y;
      return l.keyPrefix && Array.isArray(o) ? y = o.map((h) => `${l.keyPrefix}${f}${h}`) : y = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o, s.t(y, l);
    };
    return _(e) ? i.lng = e : i.lngs = e, i.ns = n, i.keyPrefix = r, i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const o = (a, l) => {
      const c = this.services.backendConnector.state[`${a}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(r, e) && (!s || o(i, e)));
  }
  loadNamespaces(e, n) {
    const r = Ce();
    return this.options.ns ? (_(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const r = Ce();
    _(e) && (e = [e]);
    const s = this.options.preload || [], i = e.filter((o) => s.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return i.length ? (this.options.preload = s.concat(i), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new En(Rn());
    return n.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new _e(e, n);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Me;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const s = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new _e(s);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new Sn(this.store.data, s), i.services.resourceStore = i.store), i.translator = new Ze(i.services, s), i.translator.on("*", function(a) {
      for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
        c[u - 1] = arguments[u];
      i.emit(a, ...c);
    }), i.init(s, n), i.translator.options = s, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const re = _e.createInstance();
re.createInstance = _e.createInstance;
re.createInstance;
re.dir;
re.init;
re.loadResources;
re.reloadResources;
re.use;
re.changeLanguage;
re.getFixedT;
re.t;
re.exists;
re.setDefaultNamespace;
re.hasLoadedNamespace;
re.loadNamespaces;
re.loadLanguages;
var Ft = { exports: {} }, Be = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function go() {
  if (Cn) return H;
  Cn = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, u = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, f = t ? Symbol.for("react.suspense_list") : 60120, y = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, g = t ? Symbol.for("react.fundamental") : 60117, x = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var D = b.$$typeof;
      switch (D) {
        case e:
          switch (b = b.type, b) {
            case l:
            case c:
            case r:
            case i:
            case s:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case u:
                case h:
                case y:
                case o:
                  return b;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  function E(b) {
    return S(b) === c;
  }
  return H.AsyncMode = l, H.ConcurrentMode = c, H.ContextConsumer = a, H.ContextProvider = o, H.Element = e, H.ForwardRef = u, H.Fragment = r, H.Lazy = h, H.Memo = y, H.Portal = n, H.Profiler = i, H.StrictMode = s, H.Suspense = d, H.isAsyncMode = function(b) {
    return E(b) || S(b) === l;
  }, H.isConcurrentMode = E, H.isContextConsumer = function(b) {
    return S(b) === a;
  }, H.isContextProvider = function(b) {
    return S(b) === o;
  }, H.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, H.isForwardRef = function(b) {
    return S(b) === u;
  }, H.isFragment = function(b) {
    return S(b) === r;
  }, H.isLazy = function(b) {
    return S(b) === h;
  }, H.isMemo = function(b) {
    return S(b) === y;
  }, H.isPortal = function(b) {
    return S(b) === n;
  }, H.isProfiler = function(b) {
    return S(b) === i;
  }, H.isStrictMode = function(b) {
    return S(b) === s;
  }, H.isSuspense = function(b) {
    return S(b) === d;
  }, H.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === c || b === i || b === s || b === d || b === f || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === y || b.$$typeof === o || b.$$typeof === a || b.$$typeof === u || b.$$typeof === g || b.$$typeof === x || b.$$typeof === w || b.$$typeof === m);
  }, H.typeOf = S, H;
}
var q = {}, Pn;
function mo() {
  return Pn || (Pn = 1, le.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, u = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, f = t ? Symbol.for("react.suspense_list") : 60120, y = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, g = t ? Symbol.for("react.fundamental") : 60117, x = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function S(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === r || R === c || R === i || R === s || R === d || R === f || typeof R == "object" && R !== null && (R.$$typeof === h || R.$$typeof === y || R.$$typeof === o || R.$$typeof === a || R.$$typeof === u || R.$$typeof === g || R.$$typeof === x || R.$$typeof === w || R.$$typeof === m);
    }
    function E(R) {
      if (typeof R == "object" && R !== null) {
        var pe = R.$$typeof;
        switch (pe) {
          case e:
            var je = R.type;
            switch (je) {
              case l:
              case c:
              case r:
              case i:
              case s:
              case d:
                return je;
              default:
                var Kt = je && je.$$typeof;
                switch (Kt) {
                  case a:
                  case u:
                  case h:
                  case y:
                  case o:
                    return Kt;
                  default:
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var b = l, D = c, L = a, T = o, I = e, B = u, z = r, ae = h, fe = y, Y = n, te = i, X = s, G = d, K = !1;
    function Z(R) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(R) || E(R) === l;
    }
    function v(R) {
      return E(R) === c;
    }
    function O(R) {
      return E(R) === a;
    }
    function N(R) {
      return E(R) === o;
    }
    function P(R) {
      return typeof R == "object" && R !== null && R.$$typeof === e;
    }
    function C(R) {
      return E(R) === u;
    }
    function k(R) {
      return E(R) === r;
    }
    function A(R) {
      return E(R) === h;
    }
    function $(R) {
      return E(R) === y;
    }
    function F(R) {
      return E(R) === n;
    }
    function V(R) {
      return E(R) === i;
    }
    function M(R) {
      return E(R) === s;
    }
    function se(R) {
      return E(R) === d;
    }
    q.AsyncMode = b, q.ConcurrentMode = D, q.ContextConsumer = L, q.ContextProvider = T, q.Element = I, q.ForwardRef = B, q.Fragment = z, q.Lazy = ae, q.Memo = fe, q.Portal = Y, q.Profiler = te, q.StrictMode = X, q.Suspense = G, q.isAsyncMode = Z, q.isConcurrentMode = v, q.isContextConsumer = O, q.isContextProvider = N, q.isElement = P, q.isForwardRef = C, q.isFragment = k, q.isLazy = A, q.isMemo = $, q.isPortal = F, q.isProfiler = V, q.isStrictMode = M, q.isSuspense = se, q.isValidElementType = S, q.typeOf = E;
  }()), q;
}
var Ln;
function wr() {
  return Ln || (Ln = 1, le.env.NODE_ENV === "production" ? Be.exports = go() : Be.exports = mo()), Be.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mt, Nn;
function yo() {
  if (Nn) return mt;
  Nn = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, a = 0; a < 10; a++)
        o["_" + String.fromCharCode(a)] = a;
      var l = Object.getOwnPropertyNames(o).map(function(u) {
        return o[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return mt = s() ? Object.assign : function(i, o) {
    for (var a, l = r(i), c, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var d in a)
        e.call(a, d) && (l[d] = a[d]);
      if (t) {
        c = t(a);
        for (var f = 0; f < c.length; f++)
          n.call(a, c[f]) && (l[c[f]] = a[c[f]]);
      }
    }
    return l;
  }, mt;
}
var yt, An;
function Vt() {
  if (An) return yt;
  An = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yt = t, yt;
}
var bt, In;
function Er() {
  return In || (In = 1, bt = Function.call.bind(Object.prototype.hasOwnProperty)), bt;
}
var vt, _n;
function bo() {
  if (_n) return vt;
  _n = 1;
  var t = function() {
  };
  if (le.env.NODE_ENV !== "production") {
    var e = Vt(), n = {}, r = Er();
    t = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(i, o, a, l, c) {
    if (le.env.NODE_ENV !== "production") {
      for (var u in i)
        if (r(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var f = Error(
                (l || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = i[u](o, u, l, a, null, e);
          } catch (h) {
            d = h;
          }
          if (d && !(d instanceof Error) && t(
            (l || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var y = c ? c() : "";
            t(
              "Failed " + a + " type: " + d.message + (y ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    le.env.NODE_ENV !== "production" && (n = {});
  }, vt = s, vt;
}
var St, kn;
function vo() {
  if (kn) return St;
  kn = 1;
  var t = wr(), e = yo(), n = Vt(), r = Er(), s = bo(), i = function() {
  };
  le.env.NODE_ENV !== "production" && (i = function(a) {
    var l = "Warning: " + a;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return St = function(a, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(v) {
      var O = v && (c && v[c] || v[u]);
      if (typeof O == "function")
        return O;
    }
    var f = "<<anonymous>>", y = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: w(),
      arrayOf: S,
      element: E(),
      elementType: b(),
      instanceOf: D,
      node: B(),
      objectOf: T,
      oneOf: L,
      oneOfType: I,
      shape: ae,
      exact: fe
    };
    function h(v, O) {
      return v === O ? v !== 0 || 1 / v === 1 / O : v !== v && O !== O;
    }
    function m(v, O) {
      this.message = v, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(v) {
      if (le.env.NODE_ENV !== "production")
        var O = {}, N = 0;
      function P(k, A, $, F, V, M, se) {
        if (F = F || f, M = M || $, se !== n) {
          if (l) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (le.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = F + ":" + $;
            !O[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[pe] = !0, N++);
          }
        }
        return A[$] == null ? k ? A[$] === null ? new m("The " + V + " `" + M + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new m("The " + V + " `" + M + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : v(A, $, F, V, M);
      }
      var C = P.bind(null, !1);
      return C.isRequired = P.bind(null, !0), C;
    }
    function x(v) {
      function O(N, P, C, k, A, $) {
        var F = N[P], V = X(F);
        if (V !== v) {
          var M = G(F);
          return new m(
            "Invalid " + k + " `" + A + "` of type " + ("`" + M + "` supplied to `" + C + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return g(O);
    }
    function w() {
      return g(o);
    }
    function S(v) {
      function O(N, P, C, k, A) {
        if (typeof v != "function")
          return new m("Property `" + A + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var $ = N[P];
        if (!Array.isArray($)) {
          var F = X($);
          return new m("Invalid " + k + " `" + A + "` of type " + ("`" + F + "` supplied to `" + C + "`, expected an array."));
        }
        for (var V = 0; V < $.length; V++) {
          var M = v($, V, C, k, A + "[" + V + "]", n);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return g(O);
    }
    function E() {
      function v(O, N, P, C, k) {
        var A = O[N];
        if (!a(A)) {
          var $ = X(A);
          return new m("Invalid " + C + " `" + k + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(v);
    }
    function b() {
      function v(O, N, P, C, k) {
        var A = O[N];
        if (!t.isValidElementType(A)) {
          var $ = X(A);
          return new m("Invalid " + C + " `" + k + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(v);
    }
    function D(v) {
      function O(N, P, C, k, A) {
        if (!(N[P] instanceof v)) {
          var $ = v.name || f, F = Z(N[P]);
          return new m("Invalid " + k + " `" + A + "` of type " + ("`" + F + "` supplied to `" + C + "`, expected ") + ("instance of `" + $ + "`."));
        }
        return null;
      }
      return g(O);
    }
    function L(v) {
      if (!Array.isArray(v))
        return le.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function O(N, P, C, k, A) {
        for (var $ = N[P], F = 0; F < v.length; F++)
          if (h($, v[F]))
            return null;
        var V = JSON.stringify(v, function(se, R) {
          var pe = G(R);
          return pe === "symbol" ? String(R) : R;
        });
        return new m("Invalid " + k + " `" + A + "` of value `" + String($) + "` " + ("supplied to `" + C + "`, expected one of " + V + "."));
      }
      return g(O);
    }
    function T(v) {
      function O(N, P, C, k, A) {
        if (typeof v != "function")
          return new m("Property `" + A + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var $ = N[P], F = X($);
        if (F !== "object")
          return new m("Invalid " + k + " `" + A + "` of type " + ("`" + F + "` supplied to `" + C + "`, expected an object."));
        for (var V in $)
          if (r($, V)) {
            var M = v($, V, C, k, A + "." + V, n);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return g(O);
    }
    function I(v) {
      if (!Array.isArray(v))
        return le.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var O = 0; O < v.length; O++) {
        var N = v[O];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(N) + " at index " + O + "."
          ), o;
      }
      function P(C, k, A, $, F) {
        for (var V = [], M = 0; M < v.length; M++) {
          var se = v[M], R = se(C, k, A, $, F, n);
          if (R == null)
            return null;
          R.data && r(R.data, "expectedType") && V.push(R.data.expectedType);
        }
        var pe = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new m("Invalid " + $ + " `" + F + "` supplied to " + ("`" + A + "`" + pe + "."));
      }
      return g(P);
    }
    function B() {
      function v(O, N, P, C, k) {
        return Y(O[N]) ? null : new m("Invalid " + C + " `" + k + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return g(v);
    }
    function z(v, O, N, P, C) {
      return new m(
        (v || "React class") + ": " + O + " type `" + N + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function ae(v) {
      function O(N, P, C, k, A) {
        var $ = N[P], F = X($);
        if (F !== "object")
          return new m("Invalid " + k + " `" + A + "` of type `" + F + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var V in v) {
          var M = v[V];
          if (typeof M != "function")
            return z(C, k, A, V, G(M));
          var se = M($, V, C, k, A + "." + V, n);
          if (se)
            return se;
        }
        return null;
      }
      return g(O);
    }
    function fe(v) {
      function O(N, P, C, k, A) {
        var $ = N[P], F = X($);
        if (F !== "object")
          return new m("Invalid " + k + " `" + A + "` of type `" + F + "` " + ("supplied to `" + C + "`, expected `object`."));
        var V = e({}, N[P], v);
        for (var M in V) {
          var se = v[M];
          if (r(v, M) && typeof se != "function")
            return z(C, k, A, M, G(se));
          if (!se)
            return new m(
              "Invalid " + k + " `" + A + "` key `" + M + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(N[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var R = se($, M, C, k, A + "." + M, n);
          if (R)
            return R;
        }
        return null;
      }
      return g(O);
    }
    function Y(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(Y);
          if (v === null || a(v))
            return !0;
          var O = d(v);
          if (O) {
            var N = O.call(v), P;
            if (O !== v.entries) {
              for (; !(P = N.next()).done; )
                if (!Y(P.value))
                  return !1;
            } else
              for (; !(P = N.next()).done; ) {
                var C = P.value;
                if (C && !Y(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(v, O) {
      return v === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function X(v) {
      var O = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : te(O, v) ? "symbol" : O;
    }
    function G(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var O = X(v);
      if (O === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function K(v) {
      var O = G(v);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Z(v) {
      return !v.constructor || !v.constructor.name ? f : v.constructor.name;
    }
    return y.checkPropTypes = s, y.resetWarningCache = s.resetWarningCache, y.PropTypes = y, y;
  }, St;
}
var wt, $n;
function So() {
  if ($n) return wt;
  $n = 1;
  var t = Vt();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, wt = function() {
    function r(o, a, l, c, u, d) {
      if (d !== t) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, wt;
}
if (le.env.NODE_ENV !== "production") {
  var wo = wr(), Eo = !0;
  Ft.exports = vo()(wo.isElement, Eo);
} else
  Ft.exports = So()();
var xo = Ft.exports;
const Do = /* @__PURE__ */ Dn(xo);
var ee = [];
for (var Et = 0; Et < 256; ++Et)
  ee.push((Et + 256).toString(16).slice(1));
function Oo(t, e = 0) {
  return (ee[t[e + 0]] + ee[t[e + 1]] + ee[t[e + 2]] + ee[t[e + 3]] + "-" + ee[t[e + 4]] + ee[t[e + 5]] + "-" + ee[t[e + 6]] + ee[t[e + 7]] + "-" + ee[t[e + 8]] + ee[t[e + 9]] + "-" + ee[t[e + 10]] + ee[t[e + 11]] + ee[t[e + 12]] + ee[t[e + 13]] + ee[t[e + 14]] + ee[t[e + 15]]).toLowerCase();
}
var ze, Ro = new Uint8Array(16);
function To() {
  if (!ze && (ze = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ze))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ze(Ro);
}
var Co = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const jn = {
  randomUUID: Co
};
function Fo(t, e, n) {
  if (jn.randomUUID && !e && !t)
    return jn.randomUUID();
  t = t || {};
  var r = t.random || (t.rng || To)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Oo(r);
}
export {
  W as B,
  ko as C,
  _o as I,
  Do as P,
  jo as Q,
  $o as X,
  Q as a,
  Ao as b,
  re as i,
  Io as u,
  Fo as v
};
