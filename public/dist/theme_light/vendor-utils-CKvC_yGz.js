import { g as Jn, B as Wn } from "./vendor-web3-N5LxOC8E.js";
import { p as Tt, r as L, R as P, g as Xn } from "./vendor-react-lU71vM3H.js";
import { c as ie } from "./vendor-ui-utils-i3zS6aVb.js";
function un(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Gn } = Object.prototype, { getPrototypeOf: xt } = Object, Ve = /* @__PURE__ */ ((t) => (e) => {
  const n = Gn.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), G = (t) => (t = t.toLowerCase(), (e) => Ve(e) === t), ze = (t) => (e) => typeof e === t, { isArray: he } = Array, xe = ze("undefined");
function Qn(t) {
  return t !== null && !xe(t) && t.constructor !== null && !xe(t.constructor) && z(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const cn = G("ArrayBuffer");
function Yn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && cn(t.buffer), e;
}
const Zn = ze("string"), z = ze("function"), fn = ze("number"), Ke = (t) => t !== null && typeof t == "object", es = (t) => t === !0 || t === !1, ke = (t) => {
  if (Ve(t) !== "object")
    return !1;
  const e = xt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, ts = G("Date"), ns = G("File"), ss = G("Blob"), rs = G("FileList"), is = (t) => Ke(t) && z(t.pipe), os = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || z(t.append) && ((e = Ve(t)) === "formdata" || // detect form-data instance
  e === "object" && z(t.toString) && t.toString() === "[object FormData]"));
}, as = G("URLSearchParams"), [ls, us, cs, fs] = ["ReadableStream", "Request", "Response", "Headers"].map(G), ds = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Re(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let s, r;
  if (typeof t != "object" && (t = [t]), he(t))
    for (s = 0, r = t.length; s < r; s++)
      e.call(null, t[s], s, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), o = i.length;
    let a;
    for (s = 0; s < o; s++)
      a = i[s], e.call(null, t[a], a, t);
  }
}
function dn(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], e === r.toLowerCase())
      return r;
  return null;
}
const ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Jn, pn = (t) => !xe(t) && t !== ae;
function ot() {
  const { caseless: t } = pn(this) && this || {}, e = {}, n = (s, r) => {
    const i = t && dn(e, r) || r;
    ke(e[i]) && ke(s) ? e[i] = ot(e[i], s) : ke(s) ? e[i] = ot({}, s) : he(s) ? e[i] = s.slice() : e[i] = s;
  };
  for (let s = 0, r = arguments.length; s < r; s++)
    arguments[s] && Re(arguments[s], n);
  return e;
}
const ps = (t, e, n, { allOwnKeys: s } = {}) => (Re(e, (r, i) => {
  n && z(r) ? t[i] = un(r, n) : t[i] = r;
}, { allOwnKeys: s }), t), hs = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), gs = (t, e, n, s) => {
  t.prototype = Object.create(e.prototype, s), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, ms = (t, e, n, s) => {
  let r, i, o;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (r = Object.getOwnPropertyNames(t), i = r.length; i-- > 0; )
      o = r[i], (!s || s(o, t, e)) && !a[o] && (e[o] = t[o], a[o] = !0);
    t = n !== !1 && xt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, ys = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const s = t.indexOf(e, n);
  return s !== -1 && s === n;
}, bs = (t) => {
  if (!t) return null;
  if (he(t)) return t;
  let e = t.length;
  if (!fn(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, ws = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && xt(Uint8Array)), Ss = (t, e) => {
  const s = (t && t[Symbol.iterator]).call(t);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const i = r.value;
    e.call(t, i[0], i[1]);
  }
}, xs = (t, e) => {
  let n;
  const s = [];
  for (; (n = t.exec(e)) !== null; )
    s.push(n);
  return s;
}, Es = G("HTMLFormElement"), Os = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, r) {
    return s.toUpperCase() + r;
  }
), Lt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), vs = G("RegExp"), hn = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), s = {};
  Re(n, (r, i) => {
    let o;
    (o = e(r, i, t)) !== !1 && (s[i] = o || r);
  }), Object.defineProperties(t, s);
}, Rs = (t) => {
  hn(t, (e, n) => {
    if (z(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = t[n];
    if (z(s)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Cs = (t, e) => {
  const n = {}, s = (r) => {
    r.forEach((i) => {
      n[i] = !0;
    });
  };
  return he(t) ? s(t) : s(String(t).split(e)), n;
}, Ts = () => {
}, Ls = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, Ye = "abcdefghijklmnopqrstuvwxyz", Nt = "0123456789", gn = {
  DIGIT: Nt,
  ALPHA: Ye,
  ALPHA_DIGIT: Ye + Ye.toUpperCase() + Nt
}, Ns = (t = 16, e = gn.ALPHA_DIGIT) => {
  let n = "";
  const { length: s } = e;
  for (; t--; )
    n += e[Math.random() * s | 0];
  return n;
};
function Ps(t) {
  return !!(t && z(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const As = (t) => {
  const e = new Array(10), n = (s, r) => {
    if (Ke(s)) {
      if (e.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        e[r] = s;
        const i = he(s) ? [] : {};
        return Re(s, (o, a) => {
          const l = n(o, r + 1);
          !xe(l) && (i[a] = l);
        }), e[r] = void 0, i;
      }
    }
    return s;
  };
  return n(t, 0);
}, ks = G("AsyncFunction"), Is = (t) => t && (Ke(t) || z(t)) && z(t.then) && z(t.catch), mn = ((t, e) => t ? setImmediate : e ? ((n, s) => (ae.addEventListener("message", ({ source: r, data: i }) => {
  r === ae && i === n && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), ae.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  z(ae.postMessage)
), Ds = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof Tt < "u" && Tt.nextTick || mn, p = {
  isArray: he,
  isArrayBuffer: cn,
  isBuffer: Qn,
  isFormData: os,
  isArrayBufferView: Yn,
  isString: Zn,
  isNumber: fn,
  isBoolean: es,
  isObject: Ke,
  isPlainObject: ke,
  isReadableStream: ls,
  isRequest: us,
  isResponse: cs,
  isHeaders: fs,
  isUndefined: xe,
  isDate: ts,
  isFile: ns,
  isBlob: ss,
  isRegExp: vs,
  isFunction: z,
  isStream: is,
  isURLSearchParams: as,
  isTypedArray: ws,
  isFileList: rs,
  forEach: Re,
  merge: ot,
  extend: ps,
  trim: ds,
  stripBOM: hs,
  inherits: gs,
  toFlatObject: ms,
  kindOf: Ve,
  kindOfTest: G,
  endsWith: ys,
  toArray: bs,
  forEachEntry: Ss,
  matchAll: xs,
  isHTMLForm: Es,
  hasOwnProperty: Lt,
  hasOwnProp: Lt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hn,
  freezeMethods: Rs,
  toObjectSet: Cs,
  toCamelCase: Os,
  noop: Ts,
  toFiniteNumber: Ls,
  findKey: dn,
  global: ae,
  isContextDefined: pn,
  ALPHABET: gn,
  generateString: Ns,
  isSpecCompliantForm: Ps,
  toJSONObject: As,
  isAsyncFn: ks,
  isThenable: Is,
  setImmediate: mn,
  asap: Ds
};
function C(t, e, n, s, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), s && (this.request = s), r && (this.response = r, this.status = r.status ? r.status : null);
}
p.inherits(C, Error, {
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
const yn = C.prototype, bn = {};
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
  bn[t] = { value: t };
});
Object.defineProperties(C, bn);
Object.defineProperty(yn, "isAxiosError", { value: !0 });
C.from = (t, e, n, s, r, i) => {
  const o = Object.create(yn);
  return p.toFlatObject(t, o, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), C.call(o, t.message, e, n, s, r), o.cause = t, o.name = t.name, i && Object.assign(o, i), o;
};
const Fs = null;
function at(t) {
  return p.isPlainObject(t) || p.isArray(t);
}
function wn(t) {
  return p.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Pt(t, e, n) {
  return t ? t.concat(e).map(function(r, i) {
    return r = wn(r), !n && i ? "[" + r + "]" : r;
  }).join(n ? "." : "") : e;
}
function $s(t) {
  return p.isArray(t) && !t.some(at);
}
const js = p.toFlatObject(p, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function qe(t, e, n) {
  if (!p.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = p.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !p.isUndefined(g[m]);
  });
  const s = n.metaTokens, r = n.visitor || c, i = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(e);
  if (!p.isFunction(r))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (p.isDate(h))
      return h.toISOString();
    if (!l && p.isBlob(h))
      throw new C("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(h) || p.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Wn.from(h) : h;
  }
  function c(h, m, g) {
    let S = h;
    if (h && !g && typeof h == "object") {
      if (p.endsWith(m, "{}"))
        m = s ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (p.isArray(h) && $s(h) || (p.isFileList(h) || p.endsWith(m, "[]")) && (S = p.toArray(h)))
        return m = wn(m), S.forEach(function(w, x) {
          !(p.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Pt([m], x, i) : o === null ? m : m + "[]",
            u(w)
          );
        }), !1;
    }
    return at(h) ? !0 : (e.append(Pt(g, m, i), u(h)), !1);
  }
  const d = [], f = Object.assign(js, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: at
  });
  function y(h, m) {
    if (!p.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(h), p.forEach(h, function(S, b) {
        (!(p.isUndefined(S) || S === null) && r.call(
          e,
          S,
          p.isString(b) ? b.trim() : b,
          m,
          f
        )) === !0 && y(S, m ? m.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!p.isObject(t))
    throw new TypeError("data must be an object");
  return y(t), e;
}
function At(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(s) {
    return e[s];
  });
}
function Et(t, e) {
  this._pairs = [], t && qe(t, this, e);
}
const Sn = Et.prototype;
Sn.append = function(e, n) {
  this._pairs.push([e, n]);
};
Sn.toString = function(e) {
  const n = e ? function(s) {
    return e.call(this, s, At);
  } : At;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function _s(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xn(t, e, n) {
  if (!e)
    return t;
  const s = n && n.encode || _s, r = n && n.serialize;
  let i;
  if (r ? i = r(e, n) : i = p.isURLSearchParams(e) ? e.toString() : new Et(e, n).toString(s), i) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class kt {
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
  use(e, n, s) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
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
    p.forEach(this.handlers, function(s) {
      s !== null && e(s);
    });
  }
}
const En = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Us = typeof URLSearchParams < "u" ? URLSearchParams : Et, Bs = typeof FormData < "u" ? FormData : null, Ms = typeof Blob < "u" ? Blob : null, Hs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Us,
    FormData: Bs,
    Blob: Ms
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ot = typeof window < "u" && typeof document < "u", lt = typeof navigator == "object" && navigator || void 0, Vs = Ot && (!lt || ["ReactNative", "NativeScript", "NS"].indexOf(lt.product) < 0), zs = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ks = Ot && window.location.href || "http://localhost", qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ot,
  hasStandardBrowserEnv: Vs,
  hasStandardBrowserWebWorkerEnv: zs,
  navigator: lt,
  origin: Ks
}, Symbol.toStringTag, { value: "Module" })), M = {
  ...qs,
  ...Hs
};
function Js(t, e) {
  return qe(t, new M.classes.URLSearchParams(), Object.assign({
    visitor: function(n, s, r, i) {
      return M.isNode && p.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Ws(t) {
  return p.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Xs(t) {
  const e = {}, n = Object.keys(t);
  let s;
  const r = n.length;
  let i;
  for (s = 0; s < r; s++)
    i = n[s], e[i] = t[i];
  return e;
}
function On(t) {
  function e(n, s, r, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = i >= n.length;
    return o = !o && p.isArray(r) ? r.length : o, l ? (p.hasOwnProp(r, o) ? r[o] = [r[o], s] : r[o] = s, !a) : ((!r[o] || !p.isObject(r[o])) && (r[o] = []), e(n, s, r[o], i) && p.isArray(r[o]) && (r[o] = Xs(r[o])), !a);
  }
  if (p.isFormData(t) && p.isFunction(t.entries)) {
    const n = {};
    return p.forEachEntry(t, (s, r) => {
      e(Ws(s), r, n, 0);
    }), n;
  }
  return null;
}
function Gs(t, e, n) {
  if (p.isString(t))
    try {
      return (e || JSON.parse)(t), p.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (0, JSON.stringify)(t);
}
const Ce = {
  transitional: En,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, i = p.isObject(e);
    if (i && p.isHTMLForm(e) && (e = new FormData(e)), p.isFormData(e))
      return r ? JSON.stringify(On(e)) : e;
    if (p.isArrayBuffer(e) || p.isBuffer(e) || p.isStream(e) || p.isFile(e) || p.isBlob(e) || p.isReadableStream(e))
      return e;
    if (p.isArrayBufferView(e))
      return e.buffer;
    if (p.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Js(e, this.formSerializer).toString();
      if ((a = p.isFileList(e)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return qe(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || r ? (n.setContentType("application/json", !1), Gs(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Ce.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (p.isResponse(e) || p.isReadableStream(e))
      return e;
    if (e && p.isString(e) && (s && !this.responseType || r)) {
      const o = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? C.from(a, C.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: M.classes.FormData,
    Blob: M.classes.Blob
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
  Ce.headers[t] = {};
});
const Qs = p.toObjectSet([
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
]), Ys = (t) => {
  const e = {};
  let n, s, r;
  return t && t.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), n = o.substring(0, r).trim().toLowerCase(), s = o.substring(r + 1).trim(), !(!n || e[n] && Qs[n]) && (n === "set-cookie" ? e[n] ? e[n].push(s) : e[n] = [s] : e[n] = e[n] ? e[n] + ", " + s : s);
  }), e;
}, It = Symbol("internals");
function ye(t) {
  return t && String(t).trim().toLowerCase();
}
function Ie(t) {
  return t === !1 || t == null ? t : p.isArray(t) ? t.map(Ie) : String(t);
}
function Zs(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(t); )
    e[s[1]] = s[2];
  return e;
}
const er = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ze(t, e, n, s, r) {
  if (p.isFunction(s))
    return s.call(this, e, n);
  if (r && (e = n), !!p.isString(e)) {
    if (p.isString(s))
      return e.indexOf(s) !== -1;
    if (p.isRegExp(s))
      return s.test(e);
  }
}
function tr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, s) => n.toUpperCase() + s);
}
function nr(t, e) {
  const n = p.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(t, s + n, {
      value: function(r, i, o) {
        return this[s].call(this, e, r, i, o);
      },
      configurable: !0
    });
  });
}
class H {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, s) {
    const r = this;
    function i(a, l, u) {
      const c = ye(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = p.findKey(r, c);
      (!d || r[d] === void 0 || u === !0 || u === void 0 && r[d] !== !1) && (r[d || l] = Ie(a));
    }
    const o = (a, l) => p.forEach(a, (u, c) => i(u, c, l));
    if (p.isPlainObject(e) || e instanceof this.constructor)
      o(e, n);
    else if (p.isString(e) && (e = e.trim()) && !er(e))
      o(Ys(e), n);
    else if (p.isHeaders(e))
      for (const [a, l] of e.entries())
        i(l, a, s);
    else
      e != null && i(n, e, s);
    return this;
  }
  get(e, n) {
    if (e = ye(e), e) {
      const s = p.findKey(this, e);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return Zs(r);
        if (p.isFunction(n))
          return n.call(this, r, s);
        if (p.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = ye(e), e) {
      const s = p.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!n || Ze(this, this[s], s, n)));
    }
    return !1;
  }
  delete(e, n) {
    const s = this;
    let r = !1;
    function i(o) {
      if (o = ye(o), o) {
        const a = p.findKey(s, o);
        a && (!n || Ze(s, s[a], a, n)) && (delete s[a], r = !0);
      }
    }
    return p.isArray(e) ? e.forEach(i) : i(e), r;
  }
  clear(e) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const i = n[s];
      (!e || Ze(this, this[i], i, e, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(e) {
    const n = this, s = {};
    return p.forEach(this, (r, i) => {
      const o = p.findKey(s, i);
      if (o) {
        n[o] = Ie(r), delete n[i];
        return;
      }
      const a = e ? tr(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Ie(r), s[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = e && p.isArray(s) ? s.join(", ") : s);
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
    const s = new this(e);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(e) {
    const s = (this[It] = this[It] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const a = ye(o);
      s[a] || (nr(r, o), s[a] = !0);
    }
    return p.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
H.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(H.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(s) {
      this[n] = s;
    }
  };
});
p.freezeMethods(H);
function et(t, e) {
  const n = this || Ce, s = e || n, r = H.from(s.headers);
  let i = s.data;
  return p.forEach(t, function(a) {
    i = a.call(n, i, r.normalize(), e ? e.status : void 0);
  }), r.normalize(), i;
}
function vn(t) {
  return !!(t && t.__CANCEL__);
}
function ge(t, e, n) {
  C.call(this, t ?? "canceled", C.ERR_CANCELED, e, n), this.name = "CanceledError";
}
p.inherits(ge, C, {
  __CANCEL__: !0
});
function Rn(t, e, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? t(n) : e(new C(
    "Request failed with status code " + n.status,
    [C.ERR_BAD_REQUEST, C.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function sr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function rr(t, e) {
  t = t || 10;
  const n = new Array(t), s = new Array(t);
  let r = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), c = s[i];
    o || (o = u), n[r] = l, s[r] = u;
    let d = i, f = 0;
    for (; d !== r; )
      f += n[d++], d = d % t;
    if (r = (r + 1) % t, r === i && (i = (i + 1) % t), u - o < e)
      return;
    const y = c && u - c;
    return y ? Math.round(f * 1e3 / y) : void 0;
  };
}
function ir(t, e) {
  let n = 0, s = 1e3 / e, r, i;
  const o = (u, c = Date.now()) => {
    n = c, r = null, i && (clearTimeout(i), i = null), t.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), d = c - n;
    d >= s ? o(u, c) : (r = u, i || (i = setTimeout(() => {
      i = null, o(r);
    }, s - d)));
  }, () => r && o(r)];
}
const Fe = (t, e, n = 3) => {
  let s = 0;
  const r = rr(50, 250);
  return ir((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, l = o - s, u = r(l), c = o <= a;
    s = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && c ? (a - o) / u : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, n);
}, Dt = (t, e) => {
  const n = t != null;
  return [(s) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: s
  }), e[1]];
}, Ft = (t) => (...e) => p.asap(() => t(...e)), or = M.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = M.navigator && /(msie|trident)/i.test(M.navigator.userAgent), n = document.createElement("a");
    let s;
    function r(i) {
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
    return s = r(window.location.href), function(o) {
      const a = p.isString(o) ? r(o) : o;
      return a.protocol === s.protocol && a.host === s.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), ar = M.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, s, r, i) {
      const o = [t + "=" + encodeURIComponent(e)];
      p.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), p.isString(s) && o.push("path=" + s), p.isString(r) && o.push("domain=" + r), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function lr(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function ur(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Cn(t, e) {
  return t && !lr(e) ? ur(t, e) : e;
}
const $t = (t) => t instanceof H ? { ...t } : t;
function fe(t, e) {
  e = e || {};
  const n = {};
  function s(u, c, d) {
    return p.isPlainObject(u) && p.isPlainObject(c) ? p.merge.call({ caseless: d }, u, c) : p.isPlainObject(c) ? p.merge({}, c) : p.isArray(c) ? c.slice() : c;
  }
  function r(u, c, d) {
    if (p.isUndefined(c)) {
      if (!p.isUndefined(u))
        return s(void 0, u, d);
    } else return s(u, c, d);
  }
  function i(u, c) {
    if (!p.isUndefined(c))
      return s(void 0, c);
  }
  function o(u, c) {
    if (p.isUndefined(c)) {
      if (!p.isUndefined(u))
        return s(void 0, u);
    } else return s(void 0, c);
  }
  function a(u, c, d) {
    if (d in e)
      return s(u, c);
    if (d in t)
      return s(void 0, u);
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
    headers: (u, c) => r($t(u), $t(c), !0)
  };
  return p.forEach(Object.keys(Object.assign({}, t, e)), function(c) {
    const d = l[c] || r, f = d(t[c], e[c], c);
    p.isUndefined(f) && d !== a || (n[c] = f);
  }), n;
}
const Tn = (t) => {
  const e = fe({}, t);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a } = e;
  e.headers = o = H.from(o), e.url = xn(Cn(e.baseURL, e.url), t.params, t.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (p.isFormData(n)) {
    if (M.hasStandardBrowserEnv || M.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [u, ...c] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (M.hasStandardBrowserEnv && (s && p.isFunction(s) && (s = s(e)), s || s !== !1 && or(e.url))) {
    const u = r && i && ar.read(i);
    u && o.set(r, u);
  }
  return e;
}, cr = typeof XMLHttpRequest < "u", fr = cr && function(t) {
  return new Promise(function(n, s) {
    const r = Tn(t);
    let i = r.data;
    const o = H.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = r, c, d, f, y, h;
    function m() {
      y && y(), h && h(), r.cancelToken && r.cancelToken.unsubscribe(c), r.signal && r.signal.removeEventListener("abort", c);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function S() {
      if (!g)
        return;
      const w = H.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), R = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: w,
        config: t,
        request: g
      };
      Rn(function(O) {
        n(O), m();
      }, function(O) {
        s(O), m();
      }, R), g = null;
    }
    "onloadend" in g ? g.onloadend = S : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, g.onabort = function() {
      g && (s(new C("Request aborted", C.ECONNABORTED, t, g)), g = null);
    }, g.onerror = function() {
      s(new C("Network Error", C.ERR_NETWORK, t, g)), g = null;
    }, g.ontimeout = function() {
      let x = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const R = r.transitional || En;
      r.timeoutErrorMessage && (x = r.timeoutErrorMessage), s(new C(
        x,
        R.clarifyTimeoutError ? C.ETIMEDOUT : C.ECONNABORTED,
        t,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && p.forEach(o.toJSON(), function(x, R) {
      g.setRequestHeader(R, x);
    }), p.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), a && a !== "json" && (g.responseType = r.responseType), u && ([f, h] = Fe(u, !0), g.addEventListener("progress", f)), l && g.upload && ([d, y] = Fe(l), g.upload.addEventListener("progress", d), g.upload.addEventListener("loadend", y)), (r.cancelToken || r.signal) && (c = (w) => {
      g && (s(!w || w.type ? new ge(null, t, g) : w), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(c), r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
    const b = sr(r.url);
    if (b && M.protocols.indexOf(b) === -1) {
      s(new C("Unsupported protocol " + b + ":", C.ERR_BAD_REQUEST, t));
      return;
    }
    g.send(i || null);
  });
}, dr = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let s = new AbortController(), r;
    const i = function(u) {
      if (!r) {
        r = !0, a();
        const c = u instanceof Error ? u : this.reason;
        s.abort(c instanceof C ? c : new ge(c instanceof Error ? c.message : c));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new C(`timeout ${e} of ms exceeded`, C.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (o && clearTimeout(o), o = null, t.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((u) => u.addEventListener("abort", i));
    const { signal: l } = s;
    return l.unsubscribe = () => p.asap(a), l;
  }
}, pr = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + e, yield t.slice(s, r), s = r;
}, hr = async function* (t, e) {
  for await (const n of gr(t))
    yield* pr(n, e);
}, gr = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: s } = await e.read();
      if (n)
        break;
      yield s;
    }
  } finally {
    await e.cancel();
  }
}, jt = (t, e, n, s) => {
  const r = hr(t, e);
  let i = 0, o, a = (l) => {
    o || (o = !0, s && s(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: c } = await r.next();
        if (u) {
          a(), l.close();
          return;
        }
        let d = c.byteLength;
        if (n) {
          let f = i += d;
          n(f);
        }
        l.enqueue(new Uint8Array(c));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(l) {
      return a(l), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Je = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ln = Je && typeof ReadableStream == "function", mr = Je && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Nn = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, yr = Ln && Nn(() => {
  let t = !1;
  const e = new Request(M.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), _t = 64 * 1024, ut = Ln && Nn(() => p.isReadableStream(new Response("").body)), $e = {
  stream: ut && ((t) => t.body)
};
Je && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !$e[e] && ($e[e] = p.isFunction(t[e]) ? (n) => n[e]() : (n, s) => {
      throw new C(`Response type '${e}' is not supported`, C.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const br = async (t) => {
  if (t == null)
    return 0;
  if (p.isBlob(t))
    return t.size;
  if (p.isSpecCompliantForm(t))
    return (await new Request(M.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (p.isArrayBufferView(t) || p.isArrayBuffer(t))
    return t.byteLength;
  if (p.isURLSearchParams(t) && (t = t + ""), p.isString(t))
    return (await mr(t)).byteLength;
}, wr = async (t, e) => {
  const n = p.toFiniteNumber(t.getContentLength());
  return n ?? br(e);
}, Sr = Je && (async (t) => {
  let {
    url: e,
    method: n,
    data: s,
    signal: r,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: u,
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = Tn(t);
  u = u ? (u + "").toLowerCase() : "text";
  let y = dr([r, i && i.toAbortSignal()], o), h;
  const m = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let g;
  try {
    if (l && yr && n !== "get" && n !== "head" && (g = await wr(c, s)) !== 0) {
      let R = new Request(e, {
        method: "POST",
        body: s,
        duplex: "half"
      }), N;
      if (p.isFormData(s) && (N = R.headers.get("content-type")) && c.setContentType(N), R.body) {
        const [O, E] = Dt(
          g,
          Fe(Ft(l))
        );
        s = jt(R.body, _t, O, E);
      }
    }
    p.isString(d) || (d = d ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    h = new Request(e, {
      ...f,
      signal: y,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: S ? d : void 0
    });
    let b = await fetch(h);
    const w = ut && (u === "stream" || u === "response");
    if (ut && (a || w && m)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((T) => {
        R[T] = b[T];
      });
      const N = p.toFiniteNumber(b.headers.get("content-length")), [O, E] = a && Dt(
        N,
        Fe(Ft(a), !0)
      ) || [];
      b = new Response(
        jt(b.body, _t, O, () => {
          E && E(), m && m();
        }),
        R
      );
    }
    u = u || "text";
    let x = await $e[p.findKey($e, u) || "text"](b, t);
    return !w && m && m(), await new Promise((R, N) => {
      Rn(R, N, {
        data: x,
        headers: H.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: t,
        request: h
      });
    });
  } catch (S) {
    throw m && m(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new C("Network Error", C.ERR_NETWORK, t, h),
      {
        cause: S.cause || S
      }
    ) : C.from(S, S && S.code, t, h);
  }
}), ct = {
  http: Fs,
  xhr: fr,
  fetch: Sr
};
p.forEach(ct, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Ut = (t) => `- ${t}`, xr = (t) => p.isFunction(t) || t === null || t === !1, Pn = {
  getAdapter: (t) => {
    t = p.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, s;
    const r = {};
    for (let i = 0; i < e; i++) {
      n = t[i];
      let o;
      if (s = n, !xr(n) && (s = ct[(o = String(n)).toLowerCase()], s === void 0))
        throw new C(`Unknown adapter '${o}'`);
      if (s)
        break;
      r[o || "#" + i] = s;
    }
    if (!s) {
      const i = Object.entries(r).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(Ut).join(`
`) : " " + Ut(i[0]) : "as no adapter specified";
      throw new C(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: ct
};
function tt(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ge(null, t);
}
function Bt(t) {
  return tt(t), t.headers = H.from(t.headers), t.data = et.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Pn.getAdapter(t.adapter || Ce.adapter)(t).then(function(s) {
    return tt(t), s.data = et.call(
      t,
      t.transformResponse,
      s
    ), s.headers = H.from(s.headers), s;
  }, function(s) {
    return vn(s) || (tt(t), s && s.response && (s.response.data = et.call(
      t,
      t.transformResponse,
      s.response
    ), s.response.headers = H.from(s.response.headers))), Promise.reject(s);
  });
}
const An = "1.7.7", vt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  vt[t] = function(s) {
    return typeof s === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Mt = {};
vt.transitional = function(e, n, s) {
  function r(i, o) {
    return "[Axios v" + An + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new C(
        r(o, " has been removed" + (n ? " in " + n : "")),
        C.ERR_DEPRECATED
      );
    return n && !Mt[o] && (Mt[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
function Er(t, e, n) {
  if (typeof t != "object")
    throw new C("options must be an object", C.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(t);
  let r = s.length;
  for (; r-- > 0; ) {
    const i = s[r], o = e[i];
    if (o) {
      const a = t[i], l = a === void 0 || o(a, i, t);
      if (l !== !0)
        throw new C("option " + i + " must be " + l, C.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new C("Unknown option " + i, C.ERR_BAD_OPTION);
  }
}
const ft = {
  assertOptions: Er,
  validators: vt
}, re = ft.validators;
class le {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new kt(),
      response: new kt()
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
    } catch (s) {
      if (s instanceof Error) {
        let r;
        Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = new Error();
        const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + i) : s.stack = i;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = fe(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: i } = n;
    s !== void 0 && ft.assertOptions(s, {
      silentJSONParsing: re.transitional(re.boolean),
      forcedJSONParsing: re.transitional(re.boolean),
      clarifyTimeoutError: re.transitional(re.boolean)
    }, !1), r != null && (p.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : ft.assertOptions(r, {
      encode: re.function,
      serialize: re.function
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
    ), n.headers = H.concat(o, i);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, d = 0, f;
    if (!l) {
      const h = [Bt.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, u), f = h.length, c = Promise.resolve(n); d < f; )
        c = c.then(h[d++], h[d++]);
      return c;
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
      c = Bt.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, f = u.length; d < f; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(e) {
    e = fe(this.defaults, e);
    const n = Cn(e.baseURL, e.url);
    return xn(n, e.params, e.paramsSerializer);
  }
}
p.forEach(["delete", "get", "head", "options"], function(e) {
  le.prototype[e] = function(n, s) {
    return this.request(fe(s || {}, {
      method: e,
      url: n,
      data: (s || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(e) {
  function n(s) {
    return function(i, o, a) {
      return this.request(fe(a || {}, {
        method: e,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  le.prototype[e] = n(), le.prototype[e + "Form"] = n(!0);
});
class Rt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let i = s._listeners.length;
      for (; i-- > 0; )
        s._listeners[i](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let i;
      const o = new Promise((a) => {
        s.subscribe(a), i = a;
      }).then(r);
      return o.cancel = function() {
        s.unsubscribe(i);
      }, o;
    }, e(function(i, o, a) {
      s.reason || (s.reason = new ge(i, o, a), n(s.reason));
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
    const e = new AbortController(), n = (s) => {
      e.abort(s);
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
      token: new Rt(function(r) {
        e = r;
      }),
      cancel: e
    };
  }
}
function Or(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function vr(t) {
  return p.isObject(t) && t.isAxiosError === !0;
}
const dt = {
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
Object.entries(dt).forEach(([t, e]) => {
  dt[e] = t;
});
function kn(t) {
  const e = new le(t), n = un(le.prototype.request, e);
  return p.extend(n, le.prototype, e, { allOwnKeys: !0 }), p.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(r) {
    return kn(fe(t, r));
  }, n;
}
const F = kn(Ce);
F.Axios = le;
F.CanceledError = ge;
F.CancelToken = Rt;
F.isCancel = vn;
F.VERSION = An;
F.toFormData = qe;
F.AxiosError = C;
F.Cancel = F.CanceledError;
F.all = function(e) {
  return Promise.all(e);
};
F.spread = Or;
F.isAxiosError = vr;
F.mergeConfig = fe;
F.AxiosHeaders = H;
F.formToJSON = (t) => On(p.isHTMLForm(t) ? new FormData(t) : t);
F.getAdapter = Pn.getAdapter;
F.HttpStatusCode = dt;
F.default = F;
const Ee = (t) => typeof t == "number" && !isNaN(t), ue = (t) => typeof t == "string", V = (t) => typeof t == "function", De = (t) => ue(t) || V(t) ? t : null, pt = (t) => L.isValidElement(t) || ue(t) || V(t) || Ee(t);
function Rr(t, e, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: s, style: r } = t;
  requestAnimationFrame(() => {
    r.minHeight = "initial", r.height = s + "px", r.transition = `all ${n}ms`, requestAnimationFrame(() => {
      r.height = "0", r.padding = "0", r.margin = "0", setTimeout(e, n);
    });
  });
}
function We(t) {
  let { enter: e, exit: n, appendPosition: s = !1, collapse: r = !0, collapseDuration: i = 300 } = t;
  return function(o) {
    let { children: a, position: l, preventExitTransition: u, done: c, nodeRef: d, isIn: f, playToast: y } = o;
    const h = s ? `${e}--${l}` : e, m = s ? `${n}--${l}` : n, g = L.useRef(0);
    return L.useLayoutEffect(() => {
      const S = d.current, b = h.split(" "), w = (x) => {
        x.target === d.current && (y(), S.removeEventListener("animationend", w), S.removeEventListener("animationcancel", w), g.current === 0 && x.type !== "animationcancel" && S.classList.remove(...b));
      };
      S.classList.add(...b), S.addEventListener("animationend", w), S.addEventListener("animationcancel", w);
    }, []), L.useEffect(() => {
      const S = d.current, b = () => {
        S.removeEventListener("animationend", b), r ? Rr(S, c, i) : c();
      };
      f || (u ? b() : (g.current = 1, S.className += ` ${m}`, S.addEventListener("animationend", b)));
    }, [f]), P.createElement(P.Fragment, null, a);
  };
}
function Ht(t, e) {
  return t != null ? { content: t.content, containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, status: e } : {};
}
const j = /* @__PURE__ */ new Map();
let Oe = [];
const ht = /* @__PURE__ */ new Set(), Cr = (t) => ht.forEach((e) => e(t)), In = () => j.size > 0;
function Dn(t, e) {
  var n;
  if (e) return !((n = j.get(e)) == null || !n.isToastActive(t));
  let s = !1;
  return j.forEach((r) => {
    r.isToastActive(t) && (s = !0);
  }), s;
}
function Fn(t, e) {
  pt(t) && (In() || Oe.push({ content: t, options: e }), j.forEach((n) => {
    n.buildToast(t, e);
  }));
}
function Vt(t, e) {
  j.forEach((n) => {
    e != null && e != null && e.containerId ? (e == null ? void 0 : e.containerId) === n.id && n.toggle(t, e == null ? void 0 : e.id) : n.toggle(t, e == null ? void 0 : e.id);
  });
}
function Tr(t) {
  const { subscribe: e, getSnapshot: n, setProps: s } = L.useRef(function(i) {
    const o = i.containerId || 1;
    return { subscribe(a) {
      const l = /* @__PURE__ */ function(c, d, f) {
        let y = 1, h = 0, m = [], g = [], S = [], b = d;
        const w = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set(), R = () => {
          S = Array.from(w.values()), x.forEach((E) => E());
        }, N = (E) => {
          g = E == null ? [] : g.filter((T) => T !== E), R();
        }, O = (E) => {
          const { toastId: T, onOpen: A, updateId: k, children: te } = E.props, se = k == null;
          E.staleId && w.delete(E.staleId), w.set(T, E), g = [...g, E.props.toastId].filter((U) => U !== E.staleId), R(), f(Ht(E, se ? "added" : "updated")), se && V(A) && A(L.isValidElement(te) && te.props);
        };
        return { id: c, props: b, observe: (E) => (x.add(E), () => x.delete(E)), toggle: (E, T) => {
          w.forEach((A) => {
            T != null && T !== A.props.toastId || V(A.toggle) && A.toggle(E);
          });
        }, removeToast: N, toasts: w, clearQueue: () => {
          h -= m.length, m = [];
        }, buildToast: (E, T) => {
          if (((Y) => {
            let { containerId: W, toastId: X, updateId: Z } = Y;
            const oe = W ? W !== c : c !== 1, me = w.has(X) && Z == null;
            return oe || me;
          })(T)) return;
          const { toastId: A, updateId: k, data: te, staleId: se, delay: U } = T, K = () => {
            N(A);
          }, ne = k == null;
          ne && h++;
          const q = { ...b, style: b.toastStyle, key: y++, ...Object.fromEntries(Object.entries(T).filter((Y) => {
            let [W, X] = Y;
            return X != null;
          })), toastId: A, updateId: k, data: te, closeToast: K, isIn: !1, className: De(T.className || b.toastClassName), bodyClassName: De(T.bodyClassName || b.bodyClassName), progressClassName: De(T.progressClassName || b.progressClassName), autoClose: !T.isLoading && (D = T.autoClose, B = b.autoClose, D === !1 || Ee(D) && D > 0 ? D : B), deleteToast() {
            const Y = w.get(A), { onClose: W, children: X } = Y.props;
            V(W) && W(L.isValidElement(X) && X.props), f(Ht(Y, "removed")), w.delete(A), h--, h < 0 && (h = 0), m.length > 0 ? O(m.shift()) : R();
          } };
          var D, B;
          q.closeButton = b.closeButton, T.closeButton === !1 || pt(T.closeButton) ? q.closeButton = T.closeButton : T.closeButton === !0 && (q.closeButton = !pt(b.closeButton) || b.closeButton);
          let J = E;
          L.isValidElement(E) && !ue(E.type) ? J = L.cloneElement(E, { closeToast: K, toastProps: q, data: te }) : V(E) && (J = E({ closeToast: K, toastProps: q, data: te }));
          const Q = { content: J, props: q, staleId: se };
          b.limit && b.limit > 0 && h > b.limit && ne ? m.push(Q) : Ee(U) ? setTimeout(() => {
            O(Q);
          }, U) : O(Q);
        }, setProps(E) {
          b = E;
        }, setToggle: (E, T) => {
          w.get(E).toggle = T;
        }, isToastActive: (E) => g.some((T) => T === E), getSnapshot: () => S };
      }(o, i, Cr);
      j.set(o, l);
      const u = l.observe(a);
      return Oe.forEach((c) => Fn(c.content, c.options)), Oe = [], () => {
        u(), j.delete(o);
      };
    }, setProps(a) {
      var l;
      (l = j.get(o)) == null || l.setProps(a);
    }, getSnapshot() {
      var a;
      return (a = j.get(o)) == null ? void 0 : a.getSnapshot();
    } };
  }(t)).current;
  s(t);
  const r = L.useSyncExternalStore(e, n, n);
  return { getToastToRender: function(i) {
    if (!r) return [];
    const o = /* @__PURE__ */ new Map();
    return t.newestOnTop && r.reverse(), r.forEach((a) => {
      const { position: l } = a.props;
      o.has(l) || o.set(l, []), o.get(l).push(a);
    }), Array.from(o, (a) => i(a[0], a[1]));
  }, isToastActive: Dn, count: r == null ? void 0 : r.length };
}
function Lr(t) {
  const [e, n] = L.useState(!1), [s, r] = L.useState(!1), i = L.useRef(null), o = L.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: a, pauseOnHover: l, closeToast: u, onClick: c, closeOnClick: d } = t;
  var f, y;
  function h() {
    n(!0);
  }
  function m() {
    n(!1);
  }
  function g(w) {
    const x = i.current;
    o.canDrag && x && (o.didMove = !0, e && m(), o.delta = t.draggableDirection === "x" ? w.clientX - o.start : w.clientY - o.start, o.start !== w.clientX && (o.canCloseOnClick = !1), x.style.transform = `translate3d(${t.draggableDirection === "x" ? `${o.delta}px, var(--y)` : `0, calc(${o.delta}px + var(--y))`},0)`, x.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
  }
  function S() {
    document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", S);
    const w = i.current;
    if (o.canDrag && o.didMove && w) {
      if (o.canDrag = !1, Math.abs(o.delta) > o.removalDistance) return r(!0), t.closeToast(), void t.collapseAll();
      w.style.transition = "transform 0.2s, opacity 0.2s", w.style.removeProperty("transform"), w.style.removeProperty("opacity");
    }
  }
  (y = j.get((f = { id: t.toastId, containerId: t.containerId, fn: n }).containerId || 1)) == null || y.setToggle(f.id, f.fn), L.useEffect(() => {
    if (t.pauseOnFocusLoss) return document.hasFocus() || m(), window.addEventListener("focus", h), window.addEventListener("blur", m), () => {
      window.removeEventListener("focus", h), window.removeEventListener("blur", m);
    };
  }, [t.pauseOnFocusLoss]);
  const b = { onPointerDown: function(w) {
    if (t.draggable === !0 || t.draggable === w.pointerType) {
      o.didMove = !1, document.addEventListener("pointermove", g), document.addEventListener("pointerup", S);
      const x = i.current;
      o.canCloseOnClick = !0, o.canDrag = !0, x.style.transition = "none", t.draggableDirection === "x" ? (o.start = w.clientX, o.removalDistance = x.offsetWidth * (t.draggablePercent / 100)) : (o.start = w.clientY, o.removalDistance = x.offsetHeight * (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent) / 100);
    }
  }, onPointerUp: function(w) {
    const { top: x, bottom: R, left: N, right: O } = i.current.getBoundingClientRect();
    w.nativeEvent.type !== "touchend" && t.pauseOnHover && w.clientX >= N && w.clientX <= O && w.clientY >= x && w.clientY <= R ? m() : h();
  } };
  return a && l && (b.onMouseEnter = m, t.stacked || (b.onMouseLeave = h)), d && (b.onClick = (w) => {
    c && c(w), o.canCloseOnClick && u();
  }), { playToast: h, pauseToast: m, isRunning: e, preventExitTransition: s, toastRef: i, eventHandlers: b };
}
function Nr(t) {
  let { delay: e, isRunning: n, closeToast: s, type: r = "default", hide: i, className: o, style: a, controlledProgress: l, progress: u, rtl: c, isIn: d, theme: f } = t;
  const y = i || l && u === 0, h = { ...a, animationDuration: `${e}ms`, animationPlayState: n ? "running" : "paused" };
  l && (h.transform = `scaleX(${u})`);
  const m = ie("Toastify__progress-bar", l ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${f}`, `Toastify__progress-bar--${r}`, { "Toastify__progress-bar--rtl": c }), g = V(o) ? o({ rtl: c, type: r, defaultClassName: m }) : ie(m, o), S = { [l && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: l && u < 1 ? null : () => {
    d && s();
  } };
  return P.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": y }, P.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${r}` }), P.createElement("div", { role: "progressbar", "aria-hidden": y ? "true" : "false", "aria-label": "notification timer", className: g, style: h, ...S }));
}
let Pr = 1;
const $n = () => "" + Pr++;
function Ar(t) {
  return t && (ue(t.toastId) || Ee(t.toastId)) ? t.toastId : $n();
}
function we(t, e) {
  return Fn(t, e), e.toastId;
}
function je(t, e) {
  return { ...e, type: e && e.type || t, toastId: Ar(e) };
}
function Te(t) {
  return (e, n) => we(e, je(t, n));
}
function I(t, e) {
  return we(t, je("default", e));
}
I.loading = (t, e) => we(t, je("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e })), I.promise = function(t, e, n) {
  let s, { pending: r, error: i, success: o } = e;
  r && (s = ue(r) ? I.loading(r, n) : I.loading(r.render, { ...n, ...r }));
  const a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l = (c, d, f) => {
    if (d == null) return void I.dismiss(s);
    const y = { type: c, ...a, ...n, data: f }, h = ue(d) ? { render: d } : d;
    return s ? I.update(s, { ...y, ...h }) : I(h.render, { ...y, ...h }), f;
  }, u = V(t) ? t() : t;
  return u.then((c) => l("success", o, c)).catch((c) => l("error", i, c)), u;
}, I.success = Te("success"), I.info = Te("info"), I.error = Te("error"), I.warning = Te("warning"), I.warn = I.warning, I.dark = (t, e) => we(t, je("default", { theme: "dark", ...e })), I.dismiss = function(t) {
  (function(e) {
    var n;
    if (In()) {
      if (e == null || ue(n = e) || Ee(n)) j.forEach((s) => {
        s.removeToast(e);
      });
      else if (e && ("containerId" in e || "id" in e)) {
        const s = j.get(e.containerId);
        s ? s.removeToast(e.id) : j.forEach((r) => {
          r.removeToast(e.id);
        });
      }
    } else Oe = Oe.filter((s) => e != null && s.options.toastId !== e);
  })(t);
}, I.clearWaitingQueue = function(t) {
  t === void 0 && (t = {}), j.forEach((e) => {
    !e.props.limit || t.containerId && e.id !== t.containerId || e.clearQueue();
  });
}, I.isActive = Dn, I.update = function(t, e) {
  e === void 0 && (e = {});
  const n = ((s, r) => {
    var i;
    let { containerId: o } = r;
    return (i = j.get(o || 1)) == null ? void 0 : i.toasts.get(s);
  })(t, e);
  if (n) {
    const { props: s, content: r } = n, i = { delay: 100, ...s, ...e, toastId: e.toastId || t, updateId: $n() };
    i.toastId !== t && (i.staleId = t);
    const o = i.render || r;
    delete i.render, we(o, i);
  }
}, I.done = (t) => {
  I.update(t, { progress: 1 });
}, I.onChange = function(t) {
  return ht.add(t), () => {
    ht.delete(t);
  };
}, I.play = (t) => Vt(!0, t), I.pause = (t) => Vt(!1, t);
const kr = typeof window < "u" ? L.useLayoutEffect : L.useEffect, Le = (t) => {
  let { theme: e, type: n, isLoading: s, ...r } = t;
  return P.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`, ...r });
}, nt = { info: function(t) {
  return P.createElement(Le, { ...t }, P.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t) {
  return P.createElement(Le, { ...t }, P.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t) {
  return P.createElement(Le, { ...t }, P.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t) {
  return P.createElement(Le, { ...t }, P.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return P.createElement("div", { className: "Toastify__spinner" });
} }, Ir = (t) => {
  const { isRunning: e, preventExitTransition: n, toastRef: s, eventHandlers: r, playToast: i } = Lr(t), { closeButton: o, children: a, autoClose: l, onClick: u, type: c, hideProgressBar: d, closeToast: f, transition: y, position: h, className: m, style: g, bodyClassName: S, bodyStyle: b, progressClassName: w, progressStyle: x, updateId: R, role: N, progress: O, rtl: E, toastId: T, deleteToast: A, isIn: k, isLoading: te, closeOnClick: se, theme: U } = t, K = ie("Toastify__toast", `Toastify__toast-theme--${U}`, `Toastify__toast--${c}`, { "Toastify__toast--rtl": E }, { "Toastify__toast--close-on-click": se }), ne = V(m) ? m({ rtl: E, position: h, type: c, defaultClassName: K }) : ie(K, m), q = function(Q) {
    let { theme: Y, type: W, isLoading: X, icon: Z } = Q, oe = null;
    const me = { theme: Y, type: W };
    return Z === !1 || (V(Z) ? oe = Z({ ...me, isLoading: X }) : L.isValidElement(Z) ? oe = L.cloneElement(Z, me) : X ? oe = nt.spinner() : ((qn) => qn in nt)(W) && (oe = nt[W](me))), oe;
  }(t), D = !!O || !l, B = { closeToast: f, type: c, theme: U };
  let J = null;
  return o === !1 || (J = V(o) ? o(B) : L.isValidElement(o) ? L.cloneElement(o, B) : function(Q) {
    let { closeToast: Y, theme: W, ariaLabel: X = "close" } = Q;
    return P.createElement("button", { className: `Toastify__close-button Toastify__close-button--${W}`, type: "button", onClick: (Z) => {
      Z.stopPropagation(), Y(Z);
    }, "aria-label": X }, P.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, P.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }(B)), P.createElement(y, { isIn: k, done: A, position: h, preventExitTransition: n, nodeRef: s, playToast: i }, P.createElement("div", { id: T, onClick: u, "data-in": k, className: ne, ...r, style: g, ref: s }, P.createElement("div", { ...k && { role: N }, className: V(S) ? S({ type: c }) : ie("Toastify__toast-body", S), style: b }, q != null && P.createElement("div", { className: ie("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !te }) }, q), P.createElement("div", null, a)), J, P.createElement(Nr, { ...R && !D ? { key: `pb-${R}` } : {}, rtl: E, theme: U, delay: l, isRunning: e, isIn: k, closeToast: f, hide: d, type: c, style: x, className: w, controlledProgress: D, progress: O || 0 })));
}, Xe = function(t, e) {
  return e === void 0 && (e = !1), { enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: e };
}, Dr = We(Xe("bounce", !0));
We(Xe("slide", !0));
const Ki = We(Xe("zoom"));
We(Xe("flip"));
const Fr = { position: "top-right", transition: Dr, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
function qi(t) {
  let e = { ...Fr, ...t };
  const n = t.stacked, [s, r] = L.useState(!0), i = L.useRef(null), { getToastToRender: o, isToastActive: a, count: l } = Tr(e), { className: u, style: c, rtl: d, containerId: f } = e;
  function y(m) {
    const g = ie("Toastify__toast-container", `Toastify__toast-container--${m}`, { "Toastify__toast-container--rtl": d });
    return V(u) ? u({ position: m, rtl: d, defaultClassName: g }) : ie(g, De(u));
  }
  function h() {
    n && (r(!0), I.play());
  }
  return kr(() => {
    if (n) {
      var m;
      const g = i.current.querySelectorAll('[data-in="true"]'), S = 12, b = (m = e.position) == null ? void 0 : m.includes("top");
      let w = 0, x = 0;
      Array.from(g).reverse().forEach((R, N) => {
        const O = R;
        O.classList.add("Toastify__toast--stacked"), N > 0 && (O.dataset.collapsed = `${s}`), O.dataset.pos || (O.dataset.pos = b ? "top" : "bot");
        const E = w * (s ? 0.2 : 1) + (s ? 0 : S * N);
        O.style.setProperty("--y", `${b ? E : -1 * E}px`), O.style.setProperty("--g", `${S}`), O.style.setProperty("--s", "" + (1 - (s ? x : 0))), w += O.offsetHeight, x += 0.025;
      });
    }
  }, [s, l, n]), P.createElement("div", { ref: i, className: "Toastify", id: f, onMouseEnter: () => {
    n && (r(!1), I.pause());
  }, onMouseLeave: h }, o((m, g) => {
    const S = g.length ? { ...c } : { ...c, pointerEvents: "none" };
    return P.createElement("div", { className: y(m), style: S, key: `container-${m}` }, g.map((b) => {
      let { content: w, props: x } = b;
      return P.createElement(Ir, { ...x, stacked: n, collapseAll: h, isIn: a(x.toastId, x.containerId), style: x.style, key: `toast-${x.key}` }, w);
    }));
  }));
}
const v = (t) => typeof t == "string", be = () => {
  let t, e;
  const n = new Promise((s, r) => {
    t = s, e = r;
  });
  return n.resolve = t, n.reject = e, n;
}, zt = (t) => t == null ? "" : "" + t, $r = (t, e, n) => {
  t.forEach((s) => {
    e[s] && (n[s] = e[s]);
  });
}, jr = /###/g, Kt = (t) => t && t.indexOf("###") > -1 ? t.replace(jr, ".") : t, qt = (t) => !t || v(t), Se = (t, e, n) => {
  const s = v(e) ? e.split(".") : e;
  let r = 0;
  for (; r < s.length - 1; ) {
    if (qt(t)) return {};
    const i = Kt(s[r]);
    !t[i] && n && (t[i] = new n()), Object.prototype.hasOwnProperty.call(t, i) ? t = t[i] : t = {}, ++r;
  }
  return qt(t) ? {} : {
    obj: t,
    k: Kt(s[r])
  };
}, Jt = (t, e, n) => {
  const {
    obj: s,
    k: r
  } = Se(t, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[r] = n;
    return;
  }
  let i = e[e.length - 1], o = e.slice(0, e.length - 1), a = Se(t, o, Object);
  for (; a.obj === void 0 && o.length; )
    i = `${o[o.length - 1]}.${i}`, o = o.slice(0, o.length - 1), a = Se(t, o, Object), a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${i}`] = n;
}, _r = (t, e, n, s) => {
  const {
    obj: r,
    k: i
  } = Se(t, e, Object);
  r[i] = r[i] || [], r[i].push(n);
}, _e = (t, e) => {
  const {
    obj: n,
    k: s
  } = Se(t, e);
  if (n)
    return n[s];
}, Ur = (t, e, n) => {
  const s = _e(t, n);
  return s !== void 0 ? s : _e(e, n);
}, jn = (t, e, n) => {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in t ? v(t[s]) || t[s] instanceof String || v(e[s]) || e[s] instanceof String ? n && (t[s] = e[s]) : jn(t[s], e[s], n) : t[s] = e[s]);
  return t;
}, de = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Br = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Mr = (t) => v(t) ? t.replace(/[&<>"'\/]/g, (e) => Br[e]) : t;
class Hr {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e);
    if (n !== void 0)
      return n;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const Vr = [" ", ",", "?", "!", ";"], zr = new Hr(20), Kr = (t, e, n) => {
  e = e || "", n = n || "";
  const s = Vr.filter((o) => e.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (s.length === 0) return !0;
  const r = zr.getRegExp(`(${s.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !r.test(t);
  if (!i) {
    const o = t.indexOf(n);
    o > 0 && !r.test(t.substring(0, o)) && (i = !0);
  }
  return i;
}, gt = function(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!t) return;
  if (t[e]) return t[e];
  const s = e.split(n);
  let r = t;
  for (let i = 0; i < s.length; ) {
    if (!r || typeof r != "object")
      return;
    let o, a = "";
    for (let l = i; l < s.length; ++l)
      if (l !== i && (a += n), a += s[l], o = r[a], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && l < s.length - 1)
          continue;
        i += l - i + 1;
        break;
      }
    r = o;
  }
  return r;
}, Ue = (t) => t && t.replace("_", "-"), qr = {
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
class Be {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, n);
  }
  init(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = e || qr, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
      n[s] = arguments[s];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
      n[s] = arguments[s];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
      n[s] = arguments[s];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
      n[s] = arguments[s];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, n, s, r) {
    return r && !this.debug ? null : (v(e[0]) && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[n](e));
  }
  create(e) {
    return new Be(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Be(this.logger, e);
  }
}
var ee = new Be();
class Ge {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const r = this.observers[s].get(n) || 0;
      this.observers[s].set(n, r + 1);
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
    for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      s[r - 1] = arguments[r];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((o) => {
      let [a, l] = o;
      for (let u = 0; u < l; u++)
        a(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((o) => {
      let [a, l] = o;
      for (let u = 0; u < l; u++)
        a.apply(a, [e, ...s]);
    });
  }
}
class Wt extends Ge {
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
  getResource(e, n, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, o = r.ignoreJSONStructure !== void 0 ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, n], s && (Array.isArray(s) ? a.push(...s) : v(s) && i ? a.push(...s.split(i)) : a.push(s)));
    const l = _e(this.data, a);
    return !l && !n && !s && e.indexOf(".") > -1 && (e = a[0], n = a[1], s = a.slice(2).join(".")), l || !o || !v(s) ? l : gt(this.data && this.data[e] && this.data[e][n], s, i);
  }
  addResource(e, n, s, r) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, n];
    s && (a = a.concat(o ? s.split(o) : s)), e.indexOf(".") > -1 && (a = e.split("."), r = n, n = a[1]), this.addNamespaces(n), Jt(this.data, a, r), i.silent || this.emit("added", e, n, s, r);
  }
  addResources(e, n, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in s)
      (v(s[i]) || Array.isArray(s[i])) && this.addResource(e, n, i, s[i], {
        silent: !0
      });
    r.silent || this.emit("added", e, n, s);
  }
  addResourceBundle(e, n, s, r, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [e, n];
    e.indexOf(".") > -1 && (a = e.split("."), r = s, s = n, n = a[1]), this.addNamespaces(n);
    let l = _e(this.data, a) || {};
    o.skipCopy || (s = JSON.parse(JSON.stringify(s))), r ? jn(l, s, i) : l = {
      ...l,
      ...s
    }, Jt(this.data, a, l), o.silent || this.emit("added", e, n, s);
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
    return !!(n && Object.keys(n) || []).find((r) => n[r] && Object.keys(n[r]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var _n = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, n, s, r) {
    return t.forEach((i) => {
      this.processors[i] && (e = this.processors[i].process(e, n, s, r));
    }), e;
  }
};
const Xt = {};
class Me extends Ge {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), $r(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ee.create("translator");
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
    const s = this.resolve(e, n);
    return s && s.res !== void 0;
  }
  extractFromKey(e, n) {
    let s = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const r = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const o = s && e.indexOf(s) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Kr(e, s, r);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: i
        };
      const u = e.split(s);
      (s !== r || s === r && this.options.ns.indexOf(u[0]) > -1) && (i = u.shift()), e = u.join(r);
    }
    return v(i) && (i = [i]), {
      key: e,
      namespaces: i
    };
  }
  translate(e, n, s) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const r = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: a
    } = this.extractFromKey(e[e.length - 1], n), l = a[a.length - 1], u = n.lng || this.language, c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const x = n.nsSeparator || this.options.nsSeparator;
        return r ? {
          res: `${l}${x}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: u,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${x}${o}`;
      }
      return r ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: u,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : o;
    }
    const d = this.resolve(e, n);
    let f = d && d.res;
    const y = d && d.usedKey || o, h = d && d.exactUsedKey || o, m = Object.prototype.toString.apply(f), g = ["[object Number]", "[object Function]", "[object RegExp]"], S = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, w = !v(f) && typeof f != "boolean" && typeof f != "number";
    if (b && f && w && g.indexOf(m) < 0 && !(v(S) && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const x = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, f, {
          ...n,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return r ? (d.res = x, d.usedParams = this.getUsedParamsDetails(n), d) : x;
      }
      if (i) {
        const x = Array.isArray(f), R = x ? [] : {}, N = x ? h : y;
        for (const O in f)
          if (Object.prototype.hasOwnProperty.call(f, O)) {
            const E = `${N}${i}${O}`;
            R[O] = this.translate(E, {
              ...n,
              joinArrays: !1,
              ns: a
            }), R[O] === E && (R[O] = f[O]);
          }
        f = R;
      }
    } else if (b && v(S) && Array.isArray(f))
      f = f.join(S), f && (f = this.extendTranslation(f, e, n, s));
    else {
      let x = !1, R = !1;
      const N = n.count !== void 0 && !v(n.count), O = Me.hasDefaultValue(n), E = N ? this.pluralResolver.getSuffix(u, n.count, n) : "", T = n.ordinal && N ? this.pluralResolver.getSuffix(u, n.count, {
        ordinal: !1
      }) : "", A = N && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), k = A && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${E}`] || n[`defaultValue${T}`] || n.defaultValue;
      !this.isValidLookup(f) && O && (x = !0, f = k), this.isValidLookup(f) || (R = !0, f = o);
      const se = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && R ? void 0 : f, U = O && k !== f && this.options.updateMissing;
      if (R || x || U) {
        if (this.logger.log(U ? "updateKey" : "missingKey", u, l, o, U ? k : f), i) {
          const D = this.resolve(o, {
            ...n,
            keySeparator: !1
          });
          D && D.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let K = [];
        const ne = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && ne && ne[0])
          for (let D = 0; D < ne.length; D++)
            K.push(ne[D]);
        else this.options.saveMissingTo === "all" ? K = this.languageUtils.toResolveHierarchy(n.lng || this.language) : K.push(n.lng || this.language);
        const q = (D, B, J) => {
          const Q = O && J !== f ? J : se;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(D, l, B, Q, U, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(D, l, B, Q, U, n), this.emit("missingKey", D, l, B, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && N ? K.forEach((D) => {
          const B = this.pluralResolver.getSuffixes(D, n);
          A && n[`defaultValue${this.options.pluralSeparator}zero`] && B.indexOf(`${this.options.pluralSeparator}zero`) < 0 && B.push(`${this.options.pluralSeparator}zero`), B.forEach((J) => {
            q([D], o + J, n[`defaultValue${J}`] || k);
          });
        }) : q(K, o, k));
      }
      f = this.extendTranslation(f, e, n, d, s), R && f === o && this.options.appendNamespaceToMissingKey && (f = `${l}:${o}`), (R || x) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, x ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return r ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(e, n, s, r, i) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
        resolved: r
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const u = v(e) && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = e.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = s.replace && !v(s.replace) ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), e = this.interpolator.interpolate(e, d, s.lng || this.language || r.usedLng, s), u) {
        const f = e.match(this.interpolator.nestingRegexp), y = f && f.length;
        c < y && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== "v1" && r && r.res && (s.lng = this.language || r.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, y = new Array(f), h = 0; h < f; h++)
          y[h] = arguments[h];
        return i && i[0] === y[0] && !s.context ? (o.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`), null) : o.translate(...y, n);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const a = s.postProcess || this.options.postProcess, l = v(a) ? [a] : a;
    return e != null && l && l.length && s.applyPostProcessor !== !1 && (e = _n.handle(l, e, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...r,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, r, i, o, a;
    return v(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(s)) return;
      const u = this.extractFromKey(l, n), c = u.key;
      r = c;
      let d = u.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && !v(n.count), y = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), h = n.context !== void 0 && (v(n.context) || typeof n.context == "number") && n.context !== "", m = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((g) => {
        this.isValidLookup(s) || (a = g, !Xt[`${m[0]}-${g}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Xt[`${m[0]}-${g}`] = !0, this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((S) => {
          if (this.isValidLookup(s)) return;
          o = S;
          const b = [c];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(b, c, S, g, n);
          else {
            let x;
            f && (x = this.pluralResolver.getSuffix(S, n.count, n));
            const R = `${this.options.pluralSeparator}zero`, N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (b.push(c + x), n.ordinal && x.indexOf(N) === 0 && b.push(c + x.replace(N, this.options.pluralSeparator)), y && b.push(c + R)), h) {
              const O = `${c}${this.options.contextSeparator}${n.context}`;
              b.push(O), f && (b.push(O + x), n.ordinal && x.indexOf(N) === 0 && b.push(O + x.replace(N, this.options.pluralSeparator)), y && b.push(O + R));
            }
          }
          let w;
          for (; w = b.pop(); )
            this.isValidLookup(s) || (i = w, s = this.getResource(S, g, w, n));
        }));
      });
    }), {
      res: s,
      usedKey: r,
      exactUsedKey: i,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, n, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, n, s, r) : this.resourceStore.getResource(e, n, s, r);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && !v(e.replace);
    let r = s ? e.replace : e;
    if (s && typeof e.count < "u" && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
      ...this.options.interpolation.defaultVariables,
      ...r
    }), !s) {
      r = {
        ...r
      };
      for (const i of n)
        delete r[i];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const n = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && n === s.substring(0, n.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
const st = (t) => t.charAt(0).toUpperCase() + t.slice(1);
class Gt {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ee.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Ue(e), !e || e.indexOf("-") < 0) return null;
    const n = e.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Ue(e), !e || e.indexOf("-") < 0) return e;
    const n = e.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (v(e) && e.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let r = Intl.getCanonicalLocales(e)[0];
          if (r && this.options.lowerCaseLng && (r = r.toLowerCase()), r) return r;
        } catch {
        }
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let s = e.split("-");
      return this.options.lowerCaseLng ? s = s.map((r) => r.toLowerCase()) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), n.indexOf(s[1].toLowerCase()) > -1 && (s[1] = st(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), n.indexOf(s[1].toLowerCase()) > -1 && (s[1] = st(s[1].toLowerCase())), n.indexOf(s[2].toLowerCase()) > -1 && (s[2] = st(s[2].toLowerCase()))), s.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let n;
    return e.forEach((s) => {
      if (n) return;
      const r = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(r)) && (n = r);
    }), !n && this.options.supportedLngs && e.forEach((s) => {
      if (n) return;
      const r = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(r)) return n = r;
      n = this.options.supportedLngs.find((i) => {
        if (i === r) return i;
        if (!(i.indexOf("-") < 0 && r.indexOf("-") < 0) && (i.indexOf("-") > 0 && r.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === r || i.indexOf(r) === 0 && r.length > 1))
          return i;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(n)), v(e) && (e = [e]), Array.isArray(e)) return e;
    if (!n) return e.default || [];
    let s = e[n];
    return s || (s = e[this.getScriptPartFromCode(n)]), s || (s = e[this.formatLanguageCode(n)]), s || (s = e[this.getLanguagePartFromCode(n)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, n) {
    const s = this.getFallbackCodes(n || this.options.fallbackLng || [], e), r = [], i = (o) => {
      o && (this.isSupportedCode(o) ? r.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return v(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : v(e) && i(this.formatLanguageCode(e)), s.forEach((o) => {
      r.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), r;
  }
}
let Jr = [{
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
}], Wr = {
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
const Xr = ["v1", "v2", "v3"], Gr = ["v4"], Qt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Qr = () => {
  const t = {};
  return Jr.forEach((e) => {
    e.lngs.forEach((n) => {
      t[n] = {
        numbers: e.nr,
        plurals: Wr[e.fc]
      };
    });
  }), t;
};
class Yr {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = n, this.logger = ee.create("pluralResolver"), (!this.options.compatibilityJSON || Gr.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Qr(), this.pluralRulesCache = {};
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
        const s = Ue(e === "dev" ? "en" : e), r = n.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
          cleanedCode: s,
          type: r
        });
        if (i in this.pluralRulesCache)
          return this.pluralRulesCache[i];
        const o = new Intl.PluralRules(s, {
          type: r
        });
        return this.pluralRulesCache[i] = o, o;
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, n);
    return this.shouldUseIntlApi() ? s && s.resolvedOptions().pluralCategories.length > 1 : s && s.numbers.length > 1;
  }
  getPluralFormsOfKey(e, n) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, s).map((r) => `${n}${r}`);
  }
  getSuffixes(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, n);
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((r, i) => Qt[r] - Qt[i]).map((r) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r}`) : s.numbers.map((r) => this.getSuffix(e, r, n)) : [];
  }
  getSuffix(e, n) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = this.getRule(e, s);
    return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(n)}` : this.getSuffixRetroCompatible(r, n) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, n) {
    const s = e.noAbs ? e.plurals(n) : e.plurals(Math.abs(n));
    let r = e.numbers[s];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (r === 2 ? r = "plural" : r === 1 && (r = ""));
    const i = () => this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
    return this.options.compatibilityJSON === "v1" ? r === 1 ? "" : typeof r == "number" ? `_plural_${r.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? i() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
  }
  shouldUseIntlApi() {
    return !Xr.includes(this.options.compatibilityJSON);
  }
}
const Yt = function(t, e, n) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Ur(t, e, n);
  return !i && r && v(n) && (i = gt(t, n, s), i === void 0 && (i = gt(e, n, s))), i;
}, rt = (t) => t.replace(/\$/g, "$$$$");
class Zr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ee.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((n) => n), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: s,
      useRawValueToEscape: r,
      prefix: i,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: y,
      nestingSuffix: h,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: g,
      maxReplaces: S,
      alwaysFormat: b
    } = e.interpolation;
    this.escape = n !== void 0 ? n : Mr, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = r !== void 0 ? r : !1, this.prefix = i ? de(i) : o || "{{", this.suffix = a ? de(a) : l || "}}", this.formatSeparator = u || ",", this.unescapePrefix = c ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = f ? de(f) : y || de("$t("), this.nestingSuffix = h ? de(h) : m || de(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = S || 1e3, this.alwaysFormat = b !== void 0 ? b : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (n, s) => n && n.source === s ? (n.lastIndex = 0, n) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, n, s, r) {
    let i, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (y) => {
      if (y.indexOf(this.formatSeparator) < 0) {
        const S = Yt(n, l, y, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(S, void 0, s, {
          ...r,
          ...n,
          interpolationkey: y
        }) : S;
      }
      const h = y.split(this.formatSeparator), m = h.shift().trim(), g = h.join(this.formatSeparator).trim();
      return this.format(Yt(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), g, s, {
        ...r,
        ...n,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const c = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler, d = r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (y) => rt(y)
    }, {
      regex: this.regexp,
      safeValue: (y) => this.escapeValue ? rt(this.escape(y)) : rt(y)
    }].forEach((y) => {
      for (a = 0; i = y.regex.exec(e); ) {
        const h = i[1].trim();
        if (o = u(h), o === void 0)
          if (typeof c == "function") {
            const g = c(e, i, r);
            o = v(g) ? g : "";
          } else if (r && Object.prototype.hasOwnProperty.call(r, h))
            o = "";
          else if (d) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`), o = "";
        else !v(o) && !this.useRawValueToEscape && (o = zt(o));
        const m = y.safeValue(o);
        if (e = e.replace(i[0], m), d ? (y.regex.lastIndex += o.length, y.regex.lastIndex -= i[0].length) : y.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, n) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, i, o;
    const a = (l, u) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const d = l.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, o);
      const y = f.match(/'/g), h = f.match(/"/g);
      (y && y.length % 2 === 0 && !h || h.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        o = JSON.parse(f), u && (o = {
          ...u,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${c}${f}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; r = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...s
      }, o = o.replace && !v(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let u = !1;
      if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
        const c = r[1].split(this.formatSeparator).map((d) => d.trim());
        r[1] = c.shift(), l = c, u = !0;
      }
      if (i = n(a.call(this, r[1].trim(), o), o), i && r[0] === e && !v(i)) return i;
      v(i) || (i = zt(i)), i || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), i = ""), u && (i = l.reduce((c, d) => this.format(c, d, s.lng, {
        ...s,
        interpolationkey: r[1].trim()
      }), i.trim())), e = e.replace(r[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const ei = (t) => {
  let e = t.toLowerCase().trim();
  const n = {};
  if (t.indexOf("(") > -1) {
    const s = t.split("(");
    e = s[0].toLowerCase().trim();
    const r = s[1].substring(0, s[1].length - 1);
    e === "currency" && r.indexOf(":") < 0 ? n.currency || (n.currency = r.trim()) : e === "relativetime" && r.indexOf(":") < 0 ? n.range || (n.range = r.trim()) : r.split(";").forEach((o) => {
      if (o) {
        const [a, ...l] = o.split(":"), u = l.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
        n[c] || (n[c] = u), u === "false" && (n[c] = !1), u === "true" && (n[c] = !0), isNaN(u) || (n[c] = parseInt(u, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: n
  };
}, pe = (t) => {
  const e = {};
  return (n, s, r) => {
    let i = r;
    r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (i = {
      ...i,
      [r.interpolationkey]: void 0
    });
    const o = s + JSON.stringify(i);
    let a = e[o];
    return a || (a = t(Ue(s), r), e[o] = a), a(n);
  };
};
class ti {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ee.create("formatter"), this.options = e, this.formats = {
      number: pe((n, s) => (r) => new Intl.NumberFormat(n, {
        ...s
      }).format(r)),
      currency: pe((n, s) => (r) => new Intl.NumberFormat(n, {
        ...s,
        style: "currency"
      }).format(r)),
      datetime: pe((n, s) => (r) => new Intl.DateTimeFormat(n, {
        ...s
      }).format(r)),
      relativetime: pe((n, s) => (r) => new Intl.RelativeTimeFormat(n, {
        ...s
      }).format(r, s.range || "day")),
      list: pe((n, s) => (r) => new Intl.ListFormat(n, {
        ...s
      }).format(r))
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
    this.formats[e.toLowerCase().trim()] = pe(n);
  }
  format(e, n, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((a) => a.indexOf(")") > -1)) {
      const a = i.findIndex((l) => l.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, l) => {
      const {
        formatName: u,
        formatOptions: c
      } = ei(l);
      if (this.formats[u]) {
        let d = a;
        try {
          const f = r && r.formatParams && r.formatParams[r.interpolationkey] || {}, y = f.locale || f.lng || r.locale || r.lng || s;
          d = this.formats[u](a, y, {
            ...c,
            ...r,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, e);
  }
}
const ni = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class si extends Ge {
  constructor(e, n, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = n, this.services = s, this.languageUtils = s.languageUtils, this.options = r, this.logger = ee.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, r.backend, r);
  }
  queueLoad(e, n, s, r) {
    const i = {}, o = {}, a = {}, l = {};
    return e.forEach((u) => {
      let c = !0;
      n.forEach((d) => {
        const f = `${u}|${d}`;
        !s.reload && this.store.hasResourceBundle(u, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? o[f] === void 0 && (o[f] = !0) : (this.state[f] = 1, c = !1, o[f] === void 0 && (o[f] = !0), i[f] === void 0 && (i[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), c || (a[u] = !0);
    }), (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: r
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, n, s) {
    const r = e.split("|"), i = r[0], o = r[1];
    n && this.emit("failedLoading", i, o, n), !n && s && this.store.addResourceBundle(i, o, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = n ? -1 : 2, n && s && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      _r(l.loaded, [i], o), ni(l, e), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((u) => {
        a[u] || (a[u] = {});
        const c = l.loaded[u];
        c.length && c.forEach((d) => {
          a[u][d] === void 0 && (a[u][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, n, s) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: s,
        tried: r,
        wait: i,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (u && c && r < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, n, s, r + 1, i * 2, o);
        }, i);
        return;
      }
      o(u, c);
    }, l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(e, n);
        u && typeof u.then == "function" ? u.then((c) => a(null, c)).catch(a) : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(e, n, a);
  }
  prepareLoading(e, n) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
    v(e) && (e = this.languageUtils.toResolveHierarchy(e)), v(n) && (n = [n]);
    const i = this.queueLoad(e, n, s, r);
    if (!i.toLoad.length)
      return i.pending.length || r(), null;
    i.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, n, s) {
    this.prepareLoading(e, n, {}, s);
  }
  reload(e, n, s) {
    this.prepareLoading(e, n, {
      reload: !0
    }, s);
  }
  loadOne(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = e.split("|"), r = s[0], i = s[1];
    this.read(r, i, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${n}loading namespace ${i} for language ${r} failed`, o), !o && a && this.logger.log(`${n}loaded namespace ${i} for language ${r}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, n, s, r, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...o,
          isUpdate: i
        }, u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? c = u(e, n, s, r, l) : c = u(e, n, s, r), c && typeof c.then == "function" ? c.then((d) => a(null, d)).catch(a) : a(null, c);
          } catch (c) {
            a(c);
          }
        else
          u(e, n, s, r, a, l);
      }
      !e || !e[0] || this.store.addResource(e[0], n, s, r);
    }
  }
}
const Zt = () => ({
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
    if (typeof t[1] == "object" && (e = t[1]), v(t[1]) && (e.defaultValue = t[1]), v(t[2]) && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
      const n = t[3] || t[2];
      Object.keys(n).forEach((s) => {
        e[s] = n[s];
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
}), en = (t) => (v(t.ns) && (t.ns = [t.ns]), v(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]), v(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t), Ne = () => {
}, ri = (t) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
};
class ve extends Ge {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = en(e), this.services = {}, this.logger = ee, this.modules = {
      external: []
    }, ri(this), n && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, n), this;
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init() {
    var e = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (s = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (v(n.ns) ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const r = Zt();
    this.options = {
      ...r,
      ...this.options,
      ...en(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? ee.init(i(this.modules.logger), this.options) : ee.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = ti);
      const d = new Gt(this.options);
      this.store = new Wt(this.options.resources, this.options);
      const f = this.services;
      f.logger = ee, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Yr(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (f.formatter = i(c), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Zr(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new si(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(y) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          m[g - 1] = arguments[g];
        e.emit(y, ...m);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Me(this.services, this.options), this.translator.on("*", function(y) {
        for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          m[g - 1] = arguments[g];
        e.emit(y, ...m);
      }), this.modules.external.forEach((y) => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = Ne), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = function() {
        return e.store[c](...arguments), e;
      };
    });
    const l = be(), u = () => {
      const c = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), s(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne;
    const r = v(e) ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (r && r.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
      const i = [], o = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
          u !== "cimode" && i.indexOf(u) < 0 && i.push(u);
        });
      };
      r ? o(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload && this.options.preload.forEach((a) => o(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(a);
      });
    } else
      s(null);
  }
  reloadResources(e, n, s) {
    const r = be();
    return typeof e == "function" && (s = e, e = void 0), typeof n == "function" && (s = n, n = void 0), e || (e = this.languages), n || (n = this.options.ns), s || (s = Ne), this.services.backendConnector.reload(e, n, (i) => {
      r.resolve(), s(i);
    }), r;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && _n.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const s = this.languages[n];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(e, n) {
    var s = this;
    this.isLanguageChangingTo = e;
    const r = be();
    this.emit("languageChanging", e);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, u) => {
      u ? (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, r.resolve(function() {
        return s.t(...arguments);
      }), n && n(l, function() {
        return s.t(...arguments);
      });
    }, a = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const u = v(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      u && (this.language || i(u), this.translator.language || this.translator.changeLanguage(u), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(u)), this.loadResources(u, (c) => {
        o(c, u);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), r;
  }
  getFixedT(e, n, s) {
    var r = this;
    const i = function(o, a) {
      let l;
      if (typeof a != "object") {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2; d < u; d++)
          c[d - 2] = arguments[d];
        l = r.options.overloadTranslationOptionHandler([o, a].concat(c));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || s || i.keyPrefix);
      const f = r.options.keySeparator || ".";
      let y;
      return l.keyPrefix && Array.isArray(o) ? y = o.map((h) => `${l.keyPrefix}${f}${h}`) : y = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o, r.t(y, l);
    };
    return v(e) ? i.lng = e : i.lngs = e, i.ns = n, i.keyPrefix = s, i;
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
    const s = n.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const o = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(s, e) && (!r || o(i, e)));
  }
  loadNamespaces(e, n) {
    const s = be();
    return this.options.ns ? (v(e) && (e = [e]), e.forEach((r) => {
      this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
    }), this.loadResources((r) => {
      s.resolve(), n && n(r);
    }), s) : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const s = be();
    v(e) && (e = [e]);
    const r = this.options.preload || [], i = e.filter((o) => r.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return i.length ? (this.options.preload = r.concat(i), this.loadResources((o) => {
      s.resolve(), n && n(o);
    }), s) : (n && n(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new Gt(Zt());
    return n.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new ve(e, n);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const r = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new ve(r);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, s && (i.store = new Wt(this.store.data, r), i.services.resourceStore = i.store), i.translator = new Me(i.services, r), i.translator.on("*", function(a) {
      for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1; c < l; c++)
        u[c - 1] = arguments[c];
      i.emit(a, ...u);
    }), i.init(r, n), i.translator.options = r, i.translator.backendConnector.services.utils = {
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
const _ = ve.createInstance();
_.createInstance = ve.createInstance;
_.createInstance;
_.dir;
_.init;
_.loadResources;
_.reloadResources;
_.use;
_.changeLanguage;
_.getFixedT;
_.t;
_.exists;
_.setDefaultNamespace;
_.hasLoadedNamespace;
_.loadNamespaces;
_.loadLanguages;
const ii = (...t) => {
  console != null && console.warn && (ce(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t));
}, tn = {}, mt = (...t) => {
  ce(t[0]) && tn[t[0]] || (ce(t[0]) && (tn[t[0]] = /* @__PURE__ */ new Date()), ii(...t));
}, Un = (t, e) => () => {
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
}, nn = (t, e, n) => {
  t.loadNamespaces(e, Un(t, n));
}, sn = (t, e, n, s) => {
  ce(n) && (n = [n]), n.forEach((r) => {
    t.options.ns.indexOf(r) < 0 && t.options.ns.push(r);
  }), t.loadLanguages(e, Un(t, s));
}, oi = (t, e, n = {}) => !e.languages || !e.languages.length ? (mt("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(t, {
  lng: n.lng,
  precheck: (s, r) => {
    var i;
    if (((i = n.bindI18n) == null ? void 0 : i.indexOf("languageChanging")) > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !r(s.isLanguageChangingTo, t)) return !1;
  }
}), ce = (t) => typeof t == "string", ai = (t) => typeof t == "object" && t !== null, li = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ui = {
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
}, ci = (t) => ui[t], fi = (t) => t.replace(li, ci);
let yt = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: fi
};
const di = (t = {}) => {
  yt = {
    ...yt,
    ...t
  };
}, pi = () => yt;
let Bn;
const hi = (t) => {
  Bn = t;
}, gi = () => Bn, Ji = {
  type: "3rdParty",
  init(t) {
    di(t.options.react), hi(t);
  }
}, Mn = L.createContext();
class mi {
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
const yi = (t, e) => {
  const n = L.useRef();
  return L.useEffect(() => {
    n.current = t;
  }, [t, e]), n.current;
}, Hn = (t, e, n, s) => t.getFixedT(e, n, s), bi = (t, e, n, s) => L.useCallback(Hn(t, e, n, s), [t, e, n, s]), Wi = (t, e = {}) => {
  var x, R, N, O;
  const {
    i18n: n
  } = e, {
    i18n: s,
    defaultNS: r
  } = L.useContext(Mn) || {}, i = n || s || gi();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new mi()), !i) {
    mt("You will need to pass in an i18next instance by using initReactI18next");
    const E = (A, k) => ce(k) ? k : ai(k) && ce(k.defaultValue) ? k.defaultValue : Array.isArray(A) ? A[A.length - 1] : A, T = [E, {}, !1];
    return T.t = E, T.i18n = {}, T.ready = !1, T;
  }
  (x = i.options.react) != null && x.wait && mt("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...pi(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: l
  } = o;
  let u = r || ((R = i.options) == null ? void 0 : R.defaultNS);
  u = ce(u) ? [u] : u || ["translation"], (O = (N = i.reportNamespaces).addUsedNamespaces) == null || O.call(N, u);
  const c = (i.isInitialized || i.initializedStoreOnce) && u.every((E) => oi(E, i, o)), d = bi(i, e.lng || null, o.nsMode === "fallback" ? u : u[0], l), f = () => d, y = () => Hn(i, e.lng || null, o.nsMode === "fallback" ? u : u[0], l), [h, m] = L.useState(f);
  let g = u.join();
  e.lng && (g = `${e.lng}${g}`);
  const S = yi(g), b = L.useRef(!0);
  L.useEffect(() => {
    const {
      bindI18n: E,
      bindI18nStore: T
    } = o;
    b.current = !0, !c && !a && (e.lng ? sn(i, e.lng, u, () => {
      b.current && m(y);
    }) : nn(i, u, () => {
      b.current && m(y);
    })), c && S && S !== g && b.current && m(y);
    const A = () => {
      b.current && m(y);
    };
    return E && (i == null || i.on(E, A)), T && (i == null || i.store.on(T, A)), () => {
      b.current = !1, i && (E == null || E.split(" ").forEach((k) => i.off(k, A))), T && i && T.split(" ").forEach((k) => i.store.off(k, A));
    };
  }, [i, g]), L.useEffect(() => {
    b.current && c && m(f);
  }, [i, l, c]);
  const w = [h, i, c];
  if (w.t = h, w.i18n = i, w.ready = c, c || !c && !a) return w;
  throw new Promise((E) => {
    e.lng ? sn(i, e.lng, u, () => E()) : nn(i, u, () => E());
  });
};
function Xi({
  i18n: t,
  defaultNS: e,
  children: n
}) {
  const s = L.useMemo(() => ({
    i18n: t,
    defaultNS: e
  }), [t, e]);
  return L.createElement(Mn.Provider, {
    value: s
  }, n);
}
var Qe = {}, wi = function() {
  var t = document.getSelection();
  if (!t.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, n = [], s = 0; s < t.rangeCount; s++)
    n.push(t.getRangeAt(s));
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
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(r) {
      t.addRange(r);
    }), e && e.focus();
  };
}, Si = wi, rn = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, xi = "Copy to clipboard: #{key}, Enter";
function Ei(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function Oi(t, e) {
  var n, s, r, i, o, a, l = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    r = Si(), i = document.createRange(), o = document.getSelection(), a = document.createElement("span"), a.textContent = t, a.ariaHidden = "true", a.style.all = "unset", a.style.position = "fixed", a.style.top = 0, a.style.clip = "rect(0, 0, 0, 0)", a.style.whiteSpace = "pre", a.style.webkitUserSelect = "text", a.style.MozUserSelect = "text", a.style.msUserSelect = "text", a.style.userSelect = "text", a.addEventListener("copy", function(c) {
      if (c.stopPropagation(), e.format)
        if (c.preventDefault(), typeof c.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = rn[e.format] || rn.default;
          window.clipboardData.setData(d, t);
        } else
          c.clipboardData.clearData(), c.clipboardData.setData(e.format, t);
      e.onCopy && (c.preventDefault(), e.onCopy(c.clipboardData));
    }), document.body.appendChild(a), i.selectNodeContents(a), o.addRange(i);
    var u = document.execCommand("copy");
    if (!u)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (c) {
    n && console.error("unable to copy using execCommand: ", c), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), l = !0;
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), s = Ei("message" in e ? e.message : xi), window.prompt(s, t);
    }
  } finally {
    o && (typeof o.removeRange == "function" ? o.removeRange(i) : o.removeAllRanges()), a && document.body.removeChild(a), r();
  }
  return l;
}
var vi = Oi;
function bt(t) {
  "@babel/helpers - typeof";
  return bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bt(t);
}
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.CopyToClipboard = void 0;
var Pe = Vn(L), Ri = Vn(vi), Ci = ["text", "onCopy", "options", "children"];
function Vn(t) {
  return t && t.__esModule ? t : { default: t };
}
function on(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, s);
  }
  return n;
}
function an(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? on(Object(n), !0).forEach(function(s) {
      Ct(t, s, n[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(n, s));
    });
  }
  return t;
}
function Ti(t, e) {
  if (t == null) return {};
  var n = Li(t, e), s, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      s = i[r], !(e.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (n[s] = t[s]);
  }
  return n;
}
function Li(t, e) {
  if (t == null) return {};
  var n = {}, s = Object.keys(t), r, i;
  for (i = 0; i < s.length; i++)
    r = s[i], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function Ni(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Pi(t, e) {
  for (var n = 0; n < e.length; n++) {
    var s = e[n];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
  }
}
function Ai(t, e, n) {
  return e && Pi(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function ki(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && wt(t, e);
}
function wt(t, e) {
  return wt = Object.setPrototypeOf || function(s, r) {
    return s.__proto__ = r, s;
  }, wt(t, e);
}
function Ii(t) {
  var e = Fi();
  return function() {
    var s = He(t), r;
    if (e) {
      var i = He(this).constructor;
      r = Reflect.construct(s, arguments, i);
    } else
      r = s.apply(this, arguments);
    return Di(this, r);
  };
}
function Di(t, e) {
  if (e && (bt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zn(t);
}
function zn(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Fi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function He(t) {
  return He = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, He(t);
}
function Ct(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Kn = /* @__PURE__ */ function(t) {
  ki(n, t);
  var e = Ii(n);
  function n() {
    var s;
    Ni(this, n);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return s = e.call.apply(e, [this].concat(i)), Ct(zn(s), "onClick", function(a) {
      var l = s.props, u = l.text, c = l.onCopy, d = l.children, f = l.options, y = Pe.default.Children.only(d), h = (0, Ri.default)(u, f);
      c && c(u, h), y && y.props && typeof y.props.onClick == "function" && y.props.onClick(a);
    }), s;
  }
  return Ai(n, [{
    key: "render",
    value: function() {
      var r = this.props;
      r.text, r.onCopy, r.options;
      var i = r.children, o = Ti(r, Ci), a = Pe.default.Children.only(i);
      return /* @__PURE__ */ Pe.default.cloneElement(a, an(an({}, o), {}, {
        onClick: this.onClick
      }));
    }
  }]), n;
}(Pe.default.PureComponent);
Qe.CopyToClipboard = Kn;
Ct(Kn, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var $i = Qe, St = $i.CopyToClipboard;
St.CopyToClipboard = St;
var ji = St;
const Gi = /* @__PURE__ */ Xn(ji);
var $ = [];
for (var it = 0; it < 256; ++it)
  $.push((it + 256).toString(16).slice(1));
function _i(t, e = 0) {
  return ($[t[e + 0]] + $[t[e + 1]] + $[t[e + 2]] + $[t[e + 3]] + "-" + $[t[e + 4]] + $[t[e + 5]] + "-" + $[t[e + 6]] + $[t[e + 7]] + "-" + $[t[e + 8]] + $[t[e + 9]] + "-" + $[t[e + 10]] + $[t[e + 11]] + $[t[e + 12]] + $[t[e + 13]] + $[t[e + 14]] + $[t[e + 15]]).toLowerCase();
}
var Ae, Ui = new Uint8Array(16);
function Bi() {
  if (!Ae && (Ae = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ae))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ae(Ui);
}
var Mi = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ln = {
  randomUUID: Mi
};
function Qi(t, e, n) {
  if (ln.randomUUID && !e && !t)
    return ln.randomUUID();
  t = t || {};
  var s = t.random || (t.rng || Bi)();
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, _i(s);
}
export {
  I as B,
  Gi as C,
  Xi as I,
  qi as Q,
  Ki as X,
  F as a,
  Ji as b,
  _ as i,
  Wi as u,
  Qi as v
};
