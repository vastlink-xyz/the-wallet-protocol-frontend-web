var or = Object.defineProperty;
var ar = (n, e, t) => e in n ? or(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ke = (n, e, t) => ar(n, typeof e != "symbol" ? e + "" : e, t);
import { _ as ht, j as h } from "./vendor-radix-BwSYOuH5.js";
import { b8 as w, u as cr, B as v, I as Je, m as T, b9 as O, aa as lr, ah as dr, ba as ur, bb as hr } from "./main-aWh1b37I.js";
import { p as Ye, r as Y } from "./vendor-react-wyPiRY-L.js";
import { B as J, g as At } from "./vendor-walletconnect-DUw8LJuH.js";
const re = typeof J == "function", kt = typeof TextDecoder == "function" ? new TextDecoder() : void 0, Pt = typeof TextEncoder == "function" ? new TextEncoder() : void 0, fr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", ue = Array.prototype.slice.call(fr), ke = ((n) => {
  let e = {};
  return n.forEach((t, r) => e[t] = r), e;
})(ue), pr = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, I = String.fromCharCode.bind(String), Rt = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (n) => new Uint8Array(Array.prototype.slice.call(n, 0)), gr = (n) => n.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), on = (n) => n.replace(/[^A-Za-z0-9\+\/]/g, ""), mr = (n) => {
  let e, t, r, s, i = "";
  const o = n.length % 3;
  for (let c = 0; c < n.length; ) {
    if ((t = n.charCodeAt(c++)) > 255 || (r = n.charCodeAt(c++)) > 255 || (s = n.charCodeAt(c++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | r << 8 | s, i += ue[e >> 18 & 63] + ue[e >> 12 & 63] + ue[e >> 6 & 63] + ue[e & 63];
  }
  return o ? i.slice(0, o - 3) + "===".substring(o) : i;
}, an = typeof btoa == "function" ? (n) => btoa(n) : re ? (n) => J.from(n, "binary").toString("base64") : mr, _r = re ? (n) => J.from(n).toString("base64") : (n) => {
  let t = [];
  for (let r = 0, s = n.length; r < s; r += 4096)
    t.push(I.apply(null, n.subarray(r, r + 4096)));
  return an(t.join(""));
}, vr = (n) => {
  if (n.length < 2) {
    var e = n.charCodeAt(0);
    return e < 128 ? n : e < 2048 ? I(192 | e >>> 6) + I(128 | e & 63) : I(224 | e >>> 12 & 15) + I(128 | e >>> 6 & 63) + I(128 | e & 63);
  } else {
    var e = 65536 + (n.charCodeAt(0) - 55296) * 1024 + (n.charCodeAt(1) - 56320);
    return I(240 | e >>> 18 & 7) + I(128 | e >>> 12 & 63) + I(128 | e >>> 6 & 63) + I(128 | e & 63);
  }
}, Ir = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, br = (n) => n.replace(Ir, vr), Ot = re ? (n) => J.from(n, "utf8").toString("base64") : Pt ? (n) => _r(Pt.encode(n)) : (n) => an(br(n)), yr = (n, e = !1) => e ? gr(Ot(n)) : Ot(n), wr = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, Er = (n) => {
  switch (n.length) {
    case 4:
      var e = (7 & n.charCodeAt(0)) << 18 | (63 & n.charCodeAt(1)) << 12 | (63 & n.charCodeAt(2)) << 6 | 63 & n.charCodeAt(3), t = e - 65536;
      return I((t >>> 10) + 55296) + I((t & 1023) + 56320);
    case 3:
      return I((15 & n.charCodeAt(0)) << 12 | (63 & n.charCodeAt(1)) << 6 | 63 & n.charCodeAt(2));
    default:
      return I((31 & n.charCodeAt(0)) << 6 | 63 & n.charCodeAt(1));
  }
}, Tr = (n) => n.replace(wr, Er), Sr = (n) => {
  if (n = n.replace(/\s+/g, ""), !pr.test(n))
    throw new TypeError("malformed base64.");
  n += "==".slice(2 - (n.length & 3));
  let e, t = "", r, s;
  for (let i = 0; i < n.length; )
    e = ke[n.charAt(i++)] << 18 | ke[n.charAt(i++)] << 12 | (r = ke[n.charAt(i++)]) << 6 | (s = ke[n.charAt(i++)]), t += r === 64 ? I(e >> 16 & 255) : s === 64 ? I(e >> 16 & 255, e >> 8 & 255) : I(e >> 16 & 255, e >> 8 & 255, e & 255);
  return t;
}, cn = typeof atob == "function" ? (n) => atob(on(n)) : re ? (n) => J.from(n, "base64").toString("binary") : Sr, Cr = re ? (n) => Rt(J.from(n, "base64")) : (n) => Rt(cn(n).split("").map((e) => e.charCodeAt(0))), Ar = re ? (n) => J.from(n, "base64").toString("utf8") : kt ? (n) => kt.decode(Cr(n)) : (n) => Tr(cn(n)), kr = (n) => on(n.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), Pr = (n) => Ar(kr(n));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln = function(n) {
  const e = [];
  let t = 0;
  for (let r = 0; r < n.length; r++) {
    let s = n.charCodeAt(r);
    s < 128 ? e[t++] = s : s < 2048 ? (e[t++] = s >> 6 | 192, e[t++] = s & 63 | 128) : (s & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320 ? (s = 65536 + ((s & 1023) << 10) + (n.charCodeAt(++r) & 1023), e[t++] = s >> 18 | 240, e[t++] = s >> 12 & 63 | 128, e[t++] = s >> 6 & 63 | 128, e[t++] = s & 63 | 128) : (e[t++] = s >> 12 | 224, e[t++] = s >> 6 & 63 | 128, e[t++] = s & 63 | 128);
  }
  return e;
}, Rr = function(n) {
  const e = [];
  let t = 0, r = 0;
  for (; t < n.length; ) {
    const s = n[t++];
    if (s < 128)
      e[r++] = String.fromCharCode(s);
    else if (s > 191 && s < 224) {
      const i = n[t++];
      e[r++] = String.fromCharCode((s & 31) << 6 | i & 63);
    } else if (s > 239 && s < 365) {
      const i = n[t++], o = n[t++], c = n[t++], a = ((s & 7) << 18 | (i & 63) << 12 | (o & 63) << 6 | c & 63) - 65536;
      e[r++] = String.fromCharCode(55296 + (a >> 10)), e[r++] = String.fromCharCode(56320 + (a & 1023));
    } else {
      const i = n[t++], o = n[t++];
      e[r++] = String.fromCharCode((s & 15) << 12 | (i & 63) << 6 | o & 63);
    }
  }
  return e.join("");
}, dn = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob == "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(n, e) {
    if (!Array.isArray(n))
      throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [];
    for (let s = 0; s < n.length; s += 3) {
      const i = n[s], o = s + 1 < n.length, c = o ? n[s + 1] : 0, a = s + 2 < n.length, l = a ? n[s + 2] : 0, p = i >> 2, _ = (i & 3) << 4 | c >> 4;
      let b = (c & 15) << 2 | l >> 6, S = l & 63;
      a || (S = 64, o || (b = 64)), r.push(t[p], t[_], t[b], t[S]);
    }
    return r.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(ln(n), e);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(n, e) {
    return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : Rr(this.decodeStringToByteArray(n, e));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(n, e) {
    this.init_();
    const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [];
    for (let s = 0; s < n.length; ) {
      const i = t[n.charAt(s++)], c = s < n.length ? t[n.charAt(s)] : 0;
      ++s;
      const l = s < n.length ? t[n.charAt(s)] : 64;
      ++s;
      const _ = s < n.length ? t[n.charAt(s)] : 64;
      if (++s, i == null || c == null || l == null || _ == null)
        throw new Or();
      const b = i << 2 | c >> 4;
      if (r.push(b), l !== 64) {
        const S = c << 4 & 240 | l >> 2;
        if (r.push(S), _ !== 64) {
          const F = l << 6 & 192 | _;
          r.push(F);
        }
      }
    }
    return r;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
      for (let n = 0; n < this.ENCODED_VALS.length; n++)
        this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n), this.charToByteMap_[this.byteToCharMap_[n]] = n, this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n, n >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n);
    }
  }
};
class Or extends Error {
  constructor() {
    super(...arguments), this.name = "DecodeBase64StringError";
  }
}
const Dr = function(n) {
  const e = ln(n);
  return dn.encodeByteArray(e, !0);
}, un = function(n) {
  return Dr(n).replace(/\./g, "");
}, hn = function(n) {
  try {
    return dn.decodeString(n, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nr() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof At < "u")
    return At;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lr = () => Nr().__FIREBASE_DEFAULTS__, xr = () => {
  if (typeof Ye > "u" || typeof Ye.env > "u")
    return;
  const n = Ye.env.__FIREBASE_DEFAULTS__;
  if (n)
    return JSON.parse(n);
}, Mr = () => {
  if (typeof document > "u")
    return;
  let n;
  try {
    n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch {
    return;
  }
  const e = n && hn(n[1]);
  return e && JSON.parse(e);
}, ft = () => {
  try {
    return Lr() || xr() || Mr();
  } catch (n) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
    return;
  }
}, Ur = (n) => {
  var e, t;
  return (t = (e = ft()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null || t === void 0 ? void 0 : t[n];
}, fn = () => {
  var n;
  return (n = ft()) === null || n === void 0 ? void 0 : n.config;
}, pn = (n) => {
  var e;
  return (e = ft()) === null || e === void 0 ? void 0 : e[`_${n}`];
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr {
  constructor() {
    this.reject = () => {
    }, this.resolve = () => {
    }, this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
  /**
   * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(e) {
    return (t, r) => {
      t ? this.reject(t) : this.resolve(r), typeof e == "function" && (this.promise.catch(() => {
      }), e.length === 1 ? e(t) : e(t, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Br() {
  return typeof window < "u" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E());
}
function jr() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function $r() {
  const n = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof n == "object" && n.id !== void 0;
}
function Hr() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Vr() {
  const n = E();
  return n.indexOf("MSIE ") >= 0 || n.indexOf("Trident/") >= 0;
}
function Wr() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function zr() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module", s = self.indexedDB.open(r);
      s.onsuccess = () => {
        s.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0);
      }, s.onupgradeneeded = () => {
        t = !1;
      }, s.onerror = () => {
        var i;
        e(((i = s.error) === null || i === void 0 ? void 0 : i.message) || "");
      };
    } catch (t) {
      e(t);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gr = "FirebaseError";
class z extends Error {
  constructor(e, t, r) {
    super(t), this.code = e, this.customData = r, this.name = Gr, Object.setPrototypeOf(this, z.prototype), Error.captureStackTrace && Error.captureStackTrace(this, _e.prototype.create);
  }
}
class _e {
  constructor(e, t, r) {
    this.service = e, this.serviceName = t, this.errors = r;
  }
  create(e, ...t) {
    const r = t[0] || {}, s = `${this.service}/${e}`, i = this.errors[e], o = i ? qr(i, r) : "Error", c = `${this.serviceName}: ${o} (${s}).`;
    return new z(s, c, r);
  }
}
function qr(n, e) {
  return n.replace(Kr, (t, r) => {
    const s = e[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const Kr = /\{\$([^}]+)}/g;
function Jr(n) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e))
      return !1;
  return !0;
}
function Le(n, e) {
  if (n === e)
    return !0;
  const t = Object.keys(n), r = Object.keys(e);
  for (const s of t) {
    if (!r.includes(s))
      return !1;
    const i = n[s], o = e[s];
    if (Dt(i) && Dt(o)) {
      if (!Le(i, o))
        return !1;
    } else if (i !== o)
      return !1;
  }
  for (const s of r)
    if (!t.includes(s))
      return !1;
  return !0;
}
function Dt(n) {
  return n !== null && typeof n == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(n) {
  const e = [];
  for (const [t, r] of Object.entries(n))
    Array.isArray(r) ? r.forEach((s) => {
      e.push(encodeURIComponent(t) + "=" + encodeURIComponent(s));
    }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function Yr(n, e) {
  const t = new Xr(n, e);
  return t.subscribe.bind(t);
}
class Xr {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(e, t) {
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(() => {
      e(this);
    }).catch((r) => {
      this.error(r);
    });
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver((t) => {
      t.error(e);
    }), this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }), this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber synchronously to their
   *   call to subscribe().
   */
  subscribe(e, t, r) {
    let s;
    if (e === void 0 && t === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    Qr(e, [
      "next",
      "error",
      "complete"
    ]) ? s = e : s = {
      next: e,
      error: t,
      complete: r
    }, s.next === void 0 && (s.next = Xe), s.error === void 0 && (s.error = Xe), s.complete === void 0 && (s.complete = Xe);
    const i = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(() => {
      try {
        this.finalError ? s.error(this.finalError) : s.complete();
      } catch {
      }
    }), this.observers.push(s), i;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(e) {
    this.observers === void 0 || this.observers[e] === void 0 || (delete this.observers[e], this.observerCount -= 1, this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++)
        this.sendOne(t, e);
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized || (this.finalized = !0, e !== void 0 && (this.finalError = e), this.task.then(() => {
      this.observers = void 0, this.onNoObservers = void 0;
    }));
  }
}
function Qr(n, e) {
  if (typeof n != "object" || n === null)
    return !1;
  for (const t of e)
    if (t in n && typeof n[t] == "function")
      return !0;
  return !1;
}
function Xe() {
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(n) {
  return n && n._delegate ? n._delegate : n;
}
class te {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(e, t, r) {
    this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    return this.instantiationMode = e, this;
  }
  setMultipleInstances(e) {
    return this.multipleInstances = e, this;
  }
  setServiceProps(e) {
    return this.serviceProps = e, this;
  }
  setInstanceCreatedCallback(e) {
    return this.onInstanceCreated = e, this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zr {
  constructor(e, t) {
    this.name = e, this.container = t, this.component = null, this.instances = /* @__PURE__ */ new Map(), this.instancesDeferred = /* @__PURE__ */ new Map(), this.instancesOptions = /* @__PURE__ */ new Map(), this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide multiple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const r = new Fr();
      if (this.instancesDeferred.set(t, r), this.isInitialized(t) || this.shouldAutoInitialize())
        try {
          const s = this.getOrInitializeService({
            instanceIdentifier: t
          });
          s && r.resolve(s);
        } catch {
        }
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier), s = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({
          instanceIdentifier: r
        });
      } catch (i) {
        if (s)
          return null;
        throw i;
      }
    else {
      if (s)
        return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, !!this.shouldAutoInitialize()) {
      if (ts(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: G });
        } catch {
        }
      for (const [t, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(t);
        try {
          const i = this.getOrInitializeService({
            instanceIdentifier: s
          });
          r.resolve(i);
        } catch {
        }
      }
    }
  }
  clearInstance(e = G) {
    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => "INTERNAL" in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => "_delete" in t).map((t) => t._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = G) {
    return this.instances.has(e);
  }
  getOptions(e = G) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: t
    });
    for (const [i, o] of this.instancesDeferred.entries()) {
      const c = this.normalizeInstanceIdentifier(i);
      r === c && o.resolve(s);
    }
    return s;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(e, t) {
    var r;
    const s = this.normalizeInstanceIdentifier(t), i = (r = this.onInitCallbacks.get(s)) !== null && r !== void 0 ? r : /* @__PURE__ */ new Set();
    i.add(e), this.onInitCallbacks.set(s, i);
    const o = this.instances.get(s);
    return o && e(o, s), () => {
      i.delete(e);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(e, t) {
    const r = this.onInitCallbacks.get(t);
    if (r)
      for (const s of r)
        try {
          s(e, t);
        } catch {
        }
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let r = this.instances.get(e);
    if (!r && this.component && (r = this.component.instanceFactory(this.container, {
      instanceIdentifier: es(e),
      options: t
    }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated))
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {
      }
    return r || null;
  }
  normalizeInstanceIdentifier(e = G) {
    return this.component ? this.component.multipleInstances ? e : G : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function es(n) {
  return n === G ? void 0 : n;
}
function ts(n) {
  return n.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns {
  constructor(e) {
    this.name = e, this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(e) {
    if (this.providers.has(e))
      return this.providers.get(e);
    const t = new Zr(e, this);
    return this.providers.set(e, t), t;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var g;
(function(n) {
  n[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT";
})(g || (g = {}));
const rs = {
  debug: g.DEBUG,
  verbose: g.VERBOSE,
  info: g.INFO,
  warn: g.WARN,
  error: g.ERROR,
  silent: g.SILENT
}, ss = g.INFO, is = {
  [g.DEBUG]: "log",
  [g.VERBOSE]: "log",
  [g.INFO]: "info",
  [g.WARN]: "warn",
  [g.ERROR]: "error"
}, os = (n, e, ...t) => {
  if (e < n.logLevel)
    return;
  const r = (/* @__PURE__ */ new Date()).toISOString(), s = is[e];
  if (s)
    console[s](`[${r}]  ${n.name}:`, ...t);
  else
    throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
};
class gn {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(e) {
    this.name = e, this._logLevel = ss, this._logHandler = os, this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in g))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? rs[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, g.DEBUG, ...e), this._logHandler(this, g.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, g.VERBOSE, ...e), this._logHandler(this, g.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, g.INFO, ...e), this._logHandler(this, g.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, g.WARN, ...e), this._logHandler(this, g.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, g.ERROR, ...e), this._logHandler(this, g.ERROR, ...e);
  }
}
const as = (n, e) => e.some((t) => n instanceof t);
let Nt, Lt;
function cs() {
  return Nt || (Nt = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function ls() {
  return Lt || (Lt = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const mn = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), _n = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap();
function ds(n) {
  const e = new Promise((t, r) => {
    const s = () => {
      n.removeEventListener("success", i), n.removeEventListener("error", o);
    }, i = () => {
      t(V(n.result)), s();
    }, o = () => {
      r(n.error), s();
    };
    n.addEventListener("success", i), n.addEventListener("error", o);
  });
  return e.then((t) => {
    t instanceof IDBCursor && mn.set(t, n);
  }).catch(() => {
  }), pt.set(e, n), e;
}
function us(n) {
  if (st.has(n))
    return;
  const e = new Promise((t, r) => {
    const s = () => {
      n.removeEventListener("complete", i), n.removeEventListener("error", o), n.removeEventListener("abort", o);
    }, i = () => {
      t(), s();
    }, o = () => {
      r(n.error || new DOMException("AbortError", "AbortError")), s();
    };
    n.addEventListener("complete", i), n.addEventListener("error", o), n.addEventListener("abort", o);
  });
  st.set(n, e);
}
let it = {
  get(n, e, t) {
    if (n instanceof IDBTransaction) {
      if (e === "done")
        return st.get(n);
      if (e === "objectStoreNames")
        return n.objectStoreNames || _n.get(n);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return V(n[e]);
  },
  set(n, e, t) {
    return n[e] = t, !0;
  },
  has(n, e) {
    return n instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in n;
  }
};
function hs(n) {
  it = n(it);
}
function fs(n) {
  return n === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const r = n.call(Ze(this), e, ...t);
    return _n.set(r, e.sort ? e.sort() : [e]), V(r);
  } : ls().includes(n) ? function(...e) {
    return n.apply(Ze(this), e), V(mn.get(this));
  } : function(...e) {
    return V(n.apply(Ze(this), e));
  };
}
function ps(n) {
  return typeof n == "function" ? fs(n) : (n instanceof IDBTransaction && us(n), as(n, cs()) ? new Proxy(n, it) : n);
}
function V(n) {
  if (n instanceof IDBRequest)
    return ds(n);
  if (Qe.has(n))
    return Qe.get(n);
  const e = ps(n);
  return e !== n && (Qe.set(n, e), pt.set(e, n)), e;
}
const Ze = (n) => pt.get(n);
function gs(n, e, { blocked: t, upgrade: r, blocking: s, terminated: i } = {}) {
  const o = indexedDB.open(n, e), c = V(o);
  return r && o.addEventListener("upgradeneeded", (a) => {
    r(V(o.result), a.oldVersion, a.newVersion, V(o.transaction), a);
  }), t && o.addEventListener("blocked", (a) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    a.oldVersion,
    a.newVersion,
    a
  )), c.then((a) => {
    i && a.addEventListener("close", () => i()), s && a.addEventListener("versionchange", (l) => s(l.oldVersion, l.newVersion, l));
  }).catch(() => {
  }), c;
}
const ms = ["get", "getKey", "getAll", "getAllKeys", "count"], _s = ["put", "add", "delete", "clear"], et = /* @__PURE__ */ new Map();
function xt(n, e) {
  if (!(n instanceof IDBDatabase && !(e in n) && typeof e == "string"))
    return;
  if (et.get(e))
    return et.get(e);
  const t = e.replace(/FromIndex$/, ""), r = e !== t, s = _s.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(s || ms.includes(t))
  )
    return;
  const i = async function(o, ...c) {
    const a = this.transaction(o, s ? "readwrite" : "readonly");
    let l = a.store;
    return r && (l = l.index(c.shift())), (await Promise.all([
      l[t](...c),
      s && a.done
    ]))[0];
  };
  return et.set(e, i), i;
}
hs((n) => ({
  ...n,
  get: (e, t, r) => xt(e, t) || n.get(e, t, r),
  has: (e, t) => !!xt(e, t) || n.has(e, t)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs {
  constructor(e) {
    this.container = e;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    return this.container.getProviders().map((t) => {
      if (Is(t)) {
        const r = t.getImmediate();
        return `${r.library}/${r.version}`;
      } else
        return null;
    }).filter((t) => t).join(" ");
  }
}
function Is(n) {
  const e = n.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const ot = "@firebase/app", Mt = "0.11.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x = new gn("@firebase/app"), bs = "@firebase/app-compat", ys = "@firebase/analytics-compat", ws = "@firebase/analytics", Es = "@firebase/app-check-compat", Ts = "@firebase/app-check", Ss = "@firebase/auth", Cs = "@firebase/auth-compat", As = "@firebase/database", ks = "@firebase/data-connect", Ps = "@firebase/database-compat", Rs = "@firebase/functions", Os = "@firebase/functions-compat", Ds = "@firebase/installations", Ns = "@firebase/installations-compat", Ls = "@firebase/messaging", xs = "@firebase/messaging-compat", Ms = "@firebase/performance", Us = "@firebase/performance-compat", Fs = "@firebase/remote-config", Bs = "@firebase/remote-config-compat", js = "@firebase/storage", $s = "@firebase/storage-compat", Hs = "@firebase/firestore", Vs = "@firebase/vertexai", Ws = "@firebase/firestore-compat", zs = "firebase", Gs = "11.3.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at = "[DEFAULT]", qs = {
  [ot]: "fire-core",
  [bs]: "fire-core-compat",
  [ws]: "fire-analytics",
  [ys]: "fire-analytics-compat",
  [Ts]: "fire-app-check",
  [Es]: "fire-app-check-compat",
  [Ss]: "fire-auth",
  [Cs]: "fire-auth-compat",
  [As]: "fire-rtdb",
  [ks]: "fire-data-connect",
  [Ps]: "fire-rtdb-compat",
  [Rs]: "fire-fn",
  [Os]: "fire-fn-compat",
  [Ds]: "fire-iid",
  [Ns]: "fire-iid-compat",
  [Ls]: "fire-fcm",
  [xs]: "fire-fcm-compat",
  [Ms]: "fire-perf",
  [Us]: "fire-perf-compat",
  [Fs]: "fire-rc",
  [Bs]: "fire-rc-compat",
  [js]: "fire-gcs",
  [$s]: "fire-gcs-compat",
  [Hs]: "fire-fst",
  [Ws]: "fire-fst-compat",
  [Vs]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [zs]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xe = /* @__PURE__ */ new Map(), Ks = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map();
function Ut(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    x.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t);
  }
}
function pe(n) {
  const e = n.name;
  if (ct.has(e))
    return x.debug(`There were multiple attempts to register component ${e}.`), !1;
  ct.set(e, n);
  for (const t of xe.values())
    Ut(t, n);
  for (const t of Ks.values())
    Ut(t, n);
  return !0;
}
function vn(n, e) {
  const t = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
function k(n) {
  return n == null ? !1 : n.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Js = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}'",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "server-app-deleted": "Firebase Server App has been deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}, W = new _e("app", "Firebase", Js);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ys {
  constructor(e, t, r) {
    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new te(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted)
      throw W.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ie = Gs;
function In(n, e = {}) {
  let t = n;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: at, automaticDataCollectionEnabled: !1 }, e), s = r.name;
  if (typeof s != "string" || !s)
    throw W.create("bad-app-name", {
      appName: String(s)
    });
  if (t || (t = fn()), !t)
    throw W.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  const i = xe.get(s);
  if (i) {
    if (Le(t, i.options) && Le(r, i.config))
      return i;
    throw W.create("duplicate-app", { appName: s });
  }
  const o = new ns(s);
  for (const a of ct.values())
    o.addComponent(a);
  const c = new Ys(t, r, o);
  return xe.set(s, c), c;
}
function Xs(n = at) {
  const e = xe.get(n);
  if (!e && n === at && fn())
    return In();
  if (!e)
    throw W.create("no-app", { appName: n });
  return e;
}
function X(n, e, t) {
  var r;
  let s = (r = qs[n]) !== null && r !== void 0 ? r : n;
  t && (s += `-${t}`);
  const i = s.match(/\s|\//), o = e.match(/\s|\//);
  if (i || o) {
    const c = [
      `Unable to register library "${s}" with version "${e}":`
    ];
    i && c.push(`library name "${s}" contains illegal characters (whitespace or "/")`), i && o && c.push("and"), o && c.push(`version name "${e}" contains illegal characters (whitespace or "/")`), x.warn(c.join(" "));
    return;
  }
  pe(new te(
    `${s}-version`,
    () => ({ library: s, version: e }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qs = "firebase-heartbeat-database", Zs = 1, ge = "firebase-heartbeat-store";
let tt = null;
function bn() {
  return tt || (tt = gs(Qs, Zs, {
    upgrade: (n, e) => {
      switch (e) {
        case 0:
          try {
            n.createObjectStore(ge);
          } catch (t) {
            console.warn(t);
          }
      }
    }
  }).catch((n) => {
    throw W.create("idb-open", {
      originalErrorMessage: n.message
    });
  })), tt;
}
async function ei(n) {
  try {
    const t = (await bn()).transaction(ge), r = await t.objectStore(ge).get(yn(n));
    return await t.done, r;
  } catch (e) {
    if (e instanceof z)
      x.warn(e.message);
    else {
      const t = W.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message
      });
      x.warn(t.message);
    }
  }
}
async function Ft(n, e) {
  try {
    const r = (await bn()).transaction(ge, "readwrite");
    await r.objectStore(ge).put(e, yn(n)), await r.done;
  } catch (t) {
    if (t instanceof z)
      x.warn(t.message);
    else {
      const r = W.create("idb-set", {
        originalErrorMessage: t == null ? void 0 : t.message
      });
      x.warn(r.message);
    }
  }
}
function yn(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ti = 1024, ni = 30;
class ri {
  constructor(e) {
    this.container = e, this._heartbeatsCache = null;
    const t = this.container.getProvider("app").getImmediate();
    this._storage = new ii(t), this._heartbeatsCachePromise = this._storage.read().then((r) => (this._heartbeatsCache = r, r));
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var e, t;
    try {
      const s = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), i = Bt();
      if (((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === i || this._heartbeatsCache.heartbeats.some((o) => o.date === i))
        return;
      if (this._heartbeatsCache.heartbeats.push({ date: i, agent: s }), this._heartbeatsCache.heartbeats.length > ni) {
        const o = oi(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(o, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (r) {
      x.warn(r);
    }
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var e;
    try {
      if (this._heartbeatsCache === null && await this._heartbeatsCachePromise, ((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
        return "";
      const t = Bt(), { heartbeatsToSend: r, unsentEntries: s } = si(this._heartbeatsCache.heartbeats), i = un(JSON.stringify({ version: 2, heartbeats: r }));
      return this._heartbeatsCache.lastSentHeartbeatDate = t, s.length > 0 ? (this._heartbeatsCache.heartbeats = s, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), i;
    } catch (t) {
      return x.warn(t), "";
    }
  }
}
function Bt() {
  return (/* @__PURE__ */ new Date()).toISOString().substring(0, 10);
}
function si(n, e = ti) {
  const t = [];
  let r = n.slice();
  for (const s of n) {
    const i = t.find((o) => o.agent === s.agent);
    if (i) {
      if (i.dates.push(s.date), jt(t) > e) {
        i.dates.pop();
        break;
      }
    } else if (t.push({
      agent: s.agent,
      dates: [s.date]
    }), jt(t) > e) {
      t.pop();
      break;
    }
    r = r.slice(1);
  }
  return {
    heartbeatsToSend: t,
    unsentEntries: r
  };
}
class ii {
  constructor(e) {
    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return Wr() ? zr().then(() => !0).catch(() => !1) : !1;
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await ei(this.app);
      return t != null && t.heartbeats ? t : { heartbeats: [] };
    } else
      return { heartbeats: [] };
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Ft(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : s.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    } else
      return;
  }
  // add heartbeats
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Ft(this.app, {
        lastSentHeartbeatDate: (t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : s.lastSentHeartbeatDate,
        heartbeats: [
          ...s.heartbeats,
          ...e.heartbeats
        ]
      });
    } else
      return;
  }
}
function jt(n) {
  return un(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: n })
  ).length;
}
function oi(n) {
  if (n.length === 0)
    return -1;
  let e = 0, t = n[0].date;
  for (let r = 1; r < n.length; r++)
    n[r].date < t && (t = n[r].date, e = r);
  return e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ai(n) {
  pe(new te(
    "platform-logger",
    (e) => new vs(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), pe(new te(
    "heartbeat",
    (e) => new ri(e),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  )), X(ot, Mt, n), X(ot, Mt, "esm2017"), X("fire-js", "");
}
ai("");
var ci = "firebase", li = "11.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
X(ci, li, "app");
function wn() {
  return {
    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const di = wn, En = new _e("auth", "Firebase", wn());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Me = new gn("@firebase/auth");
function ui(n, ...e) {
  Me.logLevel <= g.WARN && Me.warn(`Auth (${Ie}): ${n}`, ...e);
}
function Re(n, ...e) {
  Me.logLevel <= g.ERROR && Me.error(`Auth (${Ie}): ${n}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(n, ...e) {
  throw mt(n, ...e);
}
function A(n, ...e) {
  return mt(n, ...e);
}
function gt(n, e, t) {
  const r = Object.assign(Object.assign({}, di()), { [e]: t });
  return new _e("auth", "Firebase", r).create(e, {
    appName: n.name
  });
}
function K(n) {
  return gt(n, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function hi(n, e, t) {
  const r = t;
  if (!(e instanceof r))
    throw r.name !== e.constructor.name && R(
      n,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), gt(n, "argument-error", `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
}
function mt(n, ...e) {
  if (typeof n != "string") {
    const t = e[0], r = [...e.slice(1)];
    return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r);
  }
  return En.create(n, ...e);
}
function u(n, e, ...t) {
  if (!n)
    throw mt(e, ...t);
}
function D(n) {
  const e = "INTERNAL ASSERTION FAILED: " + n;
  throw Re(e), new Error(e);
}
function M(n, e) {
  n || D(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt() {
  var n;
  return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.href) || "";
}
function fi() {
  return $t() === "http:" || $t() === "https:";
}
function $t() {
  var n;
  return typeof self < "u" && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pi() {
  return typeof navigator < "u" && navigator && "onLine" in navigator && typeof navigator.onLine == "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (fi() || $r() || "connection" in navigator) ? navigator.onLine : !0;
}
function gi() {
  if (typeof navigator > "u")
    return null;
  const n = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    n.languages && n.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    n.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be {
  constructor(e, t) {
    this.shortDelay = e, this.longDelay = t, M(t > e, "Short delay should be less than long delay!"), this.isMobile = Br() || Hr();
  }
  get() {
    return pi() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(n, e) {
  M(n.emulator, "Emulator should always be set here");
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith("/") ? e.slice(1) : e}` : t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn {
  static initialize(e, t, r) {
    this.fetchImpl = e, t && (this.headersImpl = t), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl)
      return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self)
      return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch)
      return globalThis.fetch;
    if (typeof fetch < "u")
      return fetch;
    D("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl)
      return this.headersImpl;
    if (typeof self < "u" && "Headers" in self)
      return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u")
      return Headers;
    D("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl)
      return this.responseImpl;
    if (typeof self < "u" && "Response" in self)
      return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u")
      return Response;
    D("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mi = {
  // Custom token errors.
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  MISSING_CUSTOM_TOKEN: "internal-error",
  // Create Auth URI errors.
  INVALID_IDENTIFIER: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  MISSING_CONTINUE_URI: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  INVALID_PASSWORD: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  MISSING_PASSWORD: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  // Sign up with email and password errors.
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  MISSING_REQ_TYPE: "internal-error",
  // Send Password reset email errors:
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  MISSING_OOB_CODE: "internal-error",
  // Operations that require ID token in request:
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  // Other errors.
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  // Multi factor related errors.
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  // Recaptcha related errors.
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _i = new be(3e4, 6e4);
function vt(n, e) {
  return n.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId }) : e;
}
async function ie(n, e, t, r, s = {}) {
  return Sn(n, s, async () => {
    let i = {}, o = {};
    r && (e === "GET" ? o = r : i = {
      body: JSON.stringify(r)
    });
    const c = ve(Object.assign({ key: n.config.apiKey }, o)).slice(1), a = await n._getAdditionalHeaders();
    a[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json", n.languageCode && (a[
      "X-Firebase-Locale"
      /* HttpHeader.X_FIREBASE_LOCALE */
    ] = n.languageCode);
    const l = Object.assign({
      method: e,
      headers: a
    }, i);
    return jr() || (l.referrerPolicy = "no-referrer"), Tn.fetch()(Cn(n, n.config.apiHost, t, c), l);
  });
}
async function Sn(n, e, t) {
  n._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, mi), e);
  try {
    const s = new Ii(n), i = await Promise.race([
      t(),
      s.promise
    ]);
    s.clearNetworkTimeout();
    const o = await i.json();
    if ("needConfirmation" in o)
      throw Pe(n, "account-exists-with-different-credential", o);
    if (i.ok && !("errorMessage" in o))
      return o;
    {
      const c = i.ok ? o.errorMessage : o.error.message, [a, l] = c.split(" : ");
      if (a === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Pe(n, "credential-already-in-use", o);
      if (a === "EMAIL_EXISTS")
        throw Pe(n, "email-already-in-use", o);
      if (a === "USER_DISABLED")
        throw Pe(n, "user-disabled", o);
      const p = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
      if (l)
        throw gt(n, p, l);
      R(n, p);
    }
  } catch (s) {
    if (s instanceof z)
      throw s;
    R(n, "network-request-failed", { message: String(s) });
  }
}
async function vi(n, e, t, r, s = {}) {
  const i = await ie(n, e, t, r, s);
  return "mfaPendingCredential" in i && R(n, "multi-factor-auth-required", {
    _serverResponse: i
  }), i;
}
function Cn(n, e, t, r) {
  const s = `${e}${t}?${r}`;
  return n.config.emulator ? _t(n.config, s) : `${n.config.apiScheme}://${s}`;
}
class Ii {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    this.auth = e, this.timer = null, this.promise = new Promise((t, r) => {
      this.timer = setTimeout(() => r(A(
        this.auth,
        "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      )), _i.get());
    });
  }
}
function Pe(n, e, t) {
  const r = {
    appName: n.name
  };
  t.email && (r.email = t.email), t.phoneNumber && (r.phoneNumber = t.phoneNumber);
  const s = A(n, e, r);
  return s.customData._tokenResponse = t, s;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bi(n, e) {
  return ie(n, "POST", "/v1/accounts:delete", e);
}
async function An(n, e) {
  return ie(n, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime()))
        return e.toUTCString();
    } catch {
    }
}
async function yi(n, e = !1) {
  const t = se(n), r = await t.getIdToken(e), s = It(r);
  u(
    s && s.exp && s.auth_time && s.iat,
    t.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const i = typeof s.firebase == "object" ? s.firebase : void 0, o = i == null ? void 0 : i.sign_in_provider;
  return {
    claims: s,
    token: r,
    authTime: he(nt(s.auth_time)),
    issuedAtTime: he(nt(s.iat)),
    expirationTime: he(nt(s.exp)),
    signInProvider: o || null,
    signInSecondFactor: (i == null ? void 0 : i.sign_in_second_factor) || null
  };
}
function nt(n) {
  return Number(n) * 1e3;
}
function It(n) {
  const [e, t, r] = n.split(".");
  if (e === void 0 || t === void 0 || r === void 0)
    return Re("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const s = hn(t);
    return s ? JSON.parse(s) : (Re("Failed to decode base64 JWT payload"), null);
  } catch (s) {
    return Re("Caught error parsing JWT payload as JSON", s == null ? void 0 : s.toString()), null;
  }
}
function Ht(n) {
  const e = It(n);
  return u(
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), u(
    typeof e.exp < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), u(
    typeof e.iat < "u",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Number(e.exp) - Number(e.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function me(n, e, t = !1) {
  if (t)
    return e;
  try {
    return await e;
  } catch (r) {
    throw r instanceof z && wi(r) && n.auth.currentUser === n && await n.auth.signOut(), r;
  }
}
function wi({ code: n }) {
  return n === "auth/user-disabled" || n === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ei {
  constructor(e) {
    this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
  }
  _start() {
    this.isRunning || (this.isRunning = !0, this.schedule());
  }
  _stop() {
    this.isRunning && (this.isRunning = !1, this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var t;
    if (e) {
      const r = this.errorBackoff;
      return this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      ), r;
    } else {
      this.errorBackoff = 3e4;
      const s = ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) - Date.now() - 3e5;
      return Math.max(0, s);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning)
      return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(
        /* wasError */
        !0
      );
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt {
  constructor(e, t) {
    this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = he(this.lastLoginAt), this.creationTime = he(this.createdAt);
  }
  _copy(e) {
    this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ue(n) {
  var e;
  const t = n.auth, r = await n.getIdToken(), s = await me(n, An(t, { idToken: r }));
  u(
    s == null ? void 0 : s.users.length,
    t,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const i = s.users[0];
  n._notifyReloadListener(i);
  const o = !((e = i.providerUserInfo) === null || e === void 0) && e.length ? kn(i.providerUserInfo) : [], c = Si(n.providerData, o), a = n.isAnonymous, l = !(n.email && i.passwordHash) && !(c != null && c.length), p = a ? l : !1, _ = {
    uid: i.localId,
    displayName: i.displayName || null,
    photoURL: i.photoUrl || null,
    email: i.email || null,
    emailVerified: i.emailVerified || !1,
    phoneNumber: i.phoneNumber || null,
    tenantId: i.tenantId || null,
    providerData: c,
    metadata: new dt(i.createdAt, i.lastLoginAt),
    isAnonymous: p
  };
  Object.assign(n, _);
}
async function Ti(n) {
  const e = se(n);
  await Ue(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function Si(n, e) {
  return [...n.filter((r) => !e.some((s) => s.providerId === r.providerId)), ...e];
}
function kn(n) {
  return n.map((e) => {
    var { providerId: t } = e, r = ht(e, ["providerId"]);
    return {
      providerId: t,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ci(n, e) {
  const t = await Sn(n, {}, async () => {
    const r = ve({
      grant_type: "refresh_token",
      refresh_token: e
    }).slice(1), { tokenApiHost: s, apiKey: i } = n.config, o = Cn(n, s, "/v1/token", `key=${i}`), c = await n._getAdditionalHeaders();
    return c[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded", Tn.fetch()(o, {
      method: "POST",
      headers: c,
      body: r
    });
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token
  };
}
async function Ai(n, e) {
  return ie(n, "POST", "/v2/accounts:revokeToken", vt(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q {
  constructor() {
    this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    u(
      e.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), u(
      typeof e.idToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), u(
      typeof e.refreshToken < "u",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = "expiresIn" in e && typeof e.expiresIn < "u" ? Number(e.expiresIn) : Ht(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    u(
      e.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const t = Ht(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired ? this.accessToken : (u(
      this.refreshToken,
      e,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    ), this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: r, refreshToken: s, expiresIn: i } = await Ci(e, t);
    this.updateTokensAndExpiration(r, s, Number(i));
  }
  updateTokensAndExpiration(e, t, r) {
    this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + r * 1e3;
  }
  static fromJSON(e, t) {
    const { refreshToken: r, accessToken: s, expirationTime: i } = t, o = new Q();
    return r && (u(typeof r == "string", "internal-error", {
      appName: e
    }), o.refreshToken = r), s && (u(typeof s == "string", "internal-error", {
      appName: e
    }), o.accessToken = s), i && (u(typeof i == "number", "internal-error", {
      appName: e
    }), o.expirationTime = i), o;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(e) {
    this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
  }
  _clone() {
    return Object.assign(new Q(), this.toJSON());
  }
  _performRefresh() {
    return D("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(n, e) {
  u(typeof n == "string" || typeof n > "u", "internal-error", { appName: e });
}
class N {
  constructor(e) {
    var { uid: t, auth: r, stsTokenManager: s } = e, i = ht(e, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase", this.proactiveRefresh = new Ei(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = r, this.stsTokenManager = s, this.accessToken = s.accessToken, this.displayName = i.displayName || null, this.email = i.email || null, this.emailVerified = i.emailVerified || !1, this.phoneNumber = i.phoneNumber || null, this.photoURL = i.photoURL || null, this.isAnonymous = i.isAnonymous || !1, this.tenantId = i.tenantId || null, this.providerData = i.providerData ? [...i.providerData] : [], this.metadata = new dt(i.createdAt || void 0, i.lastLoginAt || void 0);
  }
  async getIdToken(e) {
    const t = await me(this, this.stsTokenManager.getToken(this.auth, e));
    return u(
      t,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
  }
  getIdTokenResult(e) {
    return yi(this, e);
  }
  reload() {
    return Ti(this);
  }
  _assign(e) {
    this !== e && (u(
      this.uid === e.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((t) => Object.assign({}, t)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new N(Object.assign(Object.assign({}, this), { auth: e, stsTokenManager: this.stsTokenManager._clone() }));
    return t.metadata._copy(this.metadata), t;
  }
  _onReload(e) {
    u(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let r = !1;
    e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), t && await Ue(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (k(this.auth.app))
      return Promise.reject(K(this.auth));
    const e = await this.getIdToken();
    return await me(this, bi(this.auth, { idToken: e })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((e) => Object.assign({}, e)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, t) {
    var r, s, i, o, c, a, l, p;
    const _ = (r = t.displayName) !== null && r !== void 0 ? r : void 0, b = (s = t.email) !== null && s !== void 0 ? s : void 0, S = (i = t.phoneNumber) !== null && i !== void 0 ? i : void 0, F = (o = t.photoURL) !== null && o !== void 0 ? o : void 0, we = (c = t.tenantId) !== null && c !== void 0 ? c : void 0, ae = (a = t._redirectEventId) !== null && a !== void 0 ? a : void 0, Ee = (l = t.createdAt) !== null && l !== void 0 ? l : void 0, Te = (p = t.lastLoginAt) !== null && p !== void 0 ? p : void 0, { uid: ce, emailVerified: Se, isAnonymous: Ce, providerData: le, stsTokenManager: Ae } = t;
    u(
      ce && Ae,
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const Ge = Q.fromJSON(this.name, Ae);
    u(
      typeof ce == "string",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), B(_, e.name), B(b, e.name), u(
      typeof Se == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), u(
      typeof Ce == "boolean",
      e,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), B(S, e.name), B(F, e.name), B(we, e.name), B(ae, e.name), B(Ee, e.name), B(Te, e.name);
    const de = new N({
      uid: ce,
      auth: e,
      email: b,
      emailVerified: Se,
      displayName: _,
      isAnonymous: Ce,
      photoURL: F,
      phoneNumber: S,
      tenantId: we,
      stsTokenManager: Ge,
      createdAt: Ee,
      lastLoginAt: Te
    });
    return le && Array.isArray(le) && (de.providerData = le.map((qe) => Object.assign({}, qe))), ae && (de._redirectEventId = ae), de;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(e, t, r = !1) {
    const s = new Q();
    s.updateFromServerResponse(t);
    const i = new N({
      uid: t.localId,
      auth: e,
      stsTokenManager: s,
      isAnonymous: r
    });
    return await Ue(i), i;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(e, t, r) {
    const s = t.users[0];
    u(
      s.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const i = s.providerUserInfo !== void 0 ? kn(s.providerUserInfo) : [], o = !(s.email && s.passwordHash) && !(i != null && i.length), c = new Q();
    c.updateFromIdToken(r);
    const a = new N({
      uid: s.localId,
      auth: e,
      stsTokenManager: c,
      isAnonymous: o
    }), l = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: i,
      metadata: new dt(s.createdAt, s.lastLoginAt),
      isAnonymous: !(s.email && s.passwordHash) && !(i != null && i.length)
    };
    return Object.assign(a, l), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt = /* @__PURE__ */ new Map();
function L(n) {
  M(n instanceof Function, "Expected a class definition");
  let e = Vt.get(n);
  return e ? (M(e instanceof n, "Instance stored in cache mismatched with class"), e) : (e = new n(), Vt.set(n, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn {
  constructor() {
    this.type = "NONE", this.storage = {};
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
Pn.type = "NONE";
const Wt = Pn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oe(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class Z {
  constructor(e, t, r) {
    this.persistence = e, this.auth = t, this.userKey = r;
    const { config: s, name: i } = this.auth;
    this.fullUserKey = Oe(this.userKey, s.apiKey, i), this.fullPersistenceKey = Oe("persistence", s.apiKey, i), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? N._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(e) {
    if (this.persistence === e)
      return;
    const t = await this.getCurrentUser();
    if (await this.removeCurrentUser(), this.persistence = e, t)
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, r = "authUser") {
    if (!t.length)
      return new Z(L(Wt), e, r);
    const s = (await Promise.all(t.map(async (l) => {
      if (await l._isAvailable())
        return l;
    }))).filter((l) => l);
    let i = s[0] || L(Wt);
    const o = Oe(r, e.config.apiKey, e.name);
    let c = null;
    for (const l of t)
      try {
        const p = await l._get(o);
        if (p) {
          const _ = N._fromJSON(e, p);
          l !== i && (c = _), i = l;
          break;
        }
      } catch {
      }
    const a = s.filter((l) => l._shouldAllowMigration);
    return !i._shouldAllowMigration || !a.length ? new Z(i, e, r) : (i = a[0], c && await i._set(o, c.toJSON()), await Promise.all(t.map(async (l) => {
      if (l !== i)
        try {
          await l._remove(o);
        } catch {
        }
    })), new Z(i, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zt(n) {
  const e = n.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Nn(e))
    return "IEMobile";
  if (e.includes("msie") || e.includes("trident/"))
    return "IE";
  if (e.includes("edge/"))
    return "Edge";
  if (Rn(e))
    return "Firefox";
  if (e.includes("silk/"))
    return "Silk";
  if (xn(e))
    return "Blackberry";
  if (Mn(e))
    return "Webos";
  if (On(e))
    return "Safari";
  if ((e.includes("chrome/") || Dn(e)) && !e.includes("edge/"))
    return "Chrome";
  if (Ln(e))
    return "Android";
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/, r = n.match(t);
    if ((r == null ? void 0 : r.length) === 2)
      return r[1];
  }
  return "Other";
}
function Rn(n = E()) {
  return /firefox\//i.test(n);
}
function On(n = E()) {
  const e = n.toLowerCase();
  return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
}
function Dn(n = E()) {
  return /crios\//i.test(n);
}
function Nn(n = E()) {
  return /iemobile/i.test(n);
}
function Ln(n = E()) {
  return /android/i.test(n);
}
function xn(n = E()) {
  return /blackberry/i.test(n);
}
function Mn(n = E()) {
  return /webos/i.test(n);
}
function bt(n = E()) {
  return /iphone|ipad|ipod/i.test(n) || /macintosh/i.test(n) && /mobile/i.test(n);
}
function ki(n = E()) {
  var e;
  return bt(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function Pi() {
  return Vr() && document.documentMode === 10;
}
function Un(n = E()) {
  return bt(n) || Ln(n) || Mn(n) || xn(n) || /windows phone/i.test(n) || Nn(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(n, e = []) {
  let t;
  switch (n) {
    case "Browser":
      t = zt(E());
      break;
    case "Worker":
      t = `${zt(E())}-${n}`;
      break;
    default:
      t = n;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${t}/JsCore/${Ie}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ri {
  constructor(e) {
    this.auth = e, this.queue = [];
  }
  pushCallback(e, t) {
    const r = (i) => new Promise((o, c) => {
      try {
        const a = e(i);
        o(a);
      } catch (a) {
        c(a);
      }
    });
    r.onAbort = t, this.queue.push(r);
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e)
      return;
    const t = [];
    try {
      for (const r of this.queue)
        await r(e), r.onAbort && t.push(r.onAbort);
    } catch (r) {
      t.reverse();
      for (const s of t)
        try {
          s();
        } catch {
        }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oi(n, e = {}) {
  return ie(n, "GET", "/v2/passwordPolicy", vt(n, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Di = 6;
class Ni {
  constructor(e) {
    var t, r, s, i;
    const o = e.customStrengthOptions;
    this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = (t = o.minPasswordLength) !== null && t !== void 0 ? t : Di, o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength), o.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter), o.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter), o.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter), o.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = o.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = (s = (r = e.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && s !== void 0 ? s : "", this.forceUpgradeOnSignin = (i = e.forceUpgradeOnSignin) !== null && i !== void 0 ? i : !1, this.schemaVersion = e.schemaVersion;
  }
  validatePassword(e) {
    var t, r, s, i, o, c;
    const a = {
      isValid: !0,
      passwordPolicy: this
    };
    return this.validatePasswordLengthOptions(e, a), this.validatePasswordCharacterOptions(e, a), a.isValid && (a.isValid = (t = a.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0), a.isValid && (a.isValid = (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0), a.isValid && (a.isValid = (s = a.containsLowercaseLetter) !== null && s !== void 0 ? s : !0), a.isValid && (a.isValid = (i = a.containsUppercaseLetter) !== null && i !== void 0 ? i : !0), a.isValid && (a.isValid = (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0), a.isValid && (a.isValid = (c = a.containsNonAlphanumericCharacter) !== null && c !== void 0 ? c : !0), a;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(e, t) {
    const r = this.customStrengthOptions.minPasswordLength, s = this.customStrengthOptions.maxPasswordLength;
    r && (t.meetsMinPasswordLength = e.length >= r), s && (t.meetsMaxPasswordLength = e.length <= s);
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(
      t,
      /* containsLowercaseCharacter= */
      !1,
      /* containsUppercaseCharacter= */
      !1,
      /* containsNumericCharacter= */
      !1,
      /* containsNonAlphanumericCharacter= */
      !1
    );
    let r;
    for (let s = 0; s < e.length; s++)
      r = e.charAt(s), this.updatePasswordCharacterOptionsStatuses(
        t,
        /* containsLowercaseCharacter= */
        r >= "a" && r <= "z",
        /* containsUppercaseCharacter= */
        r >= "A" && r <= "Z",
        /* containsNumericCharacter= */
        r >= "0" && r <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(r)
      );
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(e, t, r, s, i) {
    this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = s)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = i));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li {
  constructor(e, t, r, s) {
    this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = r, this.config = s, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Gt(this), this.idTokenSubscription = new Gt(this), this.beforeStateQueue = new Ri(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = En, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = { appVerificationDisabledForTesting: !1 }, this.frameworks = [], this.name = e.name, this.clientVersion = s.sdkClientVersion;
  }
  _initializeWithPersistence(e, t) {
    return t && (this._popupRedirectResolver = L(t)), this._initializationPromise = this.queue(async () => {
      var r, s;
      if (!this._deleted && (this.persistenceManager = await Z.create(this, e), !this._deleted)) {
        if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
          try {
            await this._popupRedirectResolver._initialize(this);
          } catch {
          }
        await this.initializeCurrentUser(t), this.lastNotifiedUid = ((s = this.currentUser) === null || s === void 0 ? void 0 : s.uid) || null, !this._deleted && (this._isInitialized = !0);
      }
    }), this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted)
      return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(
        e,
        /* skipBeforeStateCallbacks */
        !0
      );
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const t = await An(this, { idToken: e }), r = await N._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(r);
    } catch (t) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", t), await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var t;
    if (k(this.app)) {
      const o = this.app.settings.authIdToken;
      return o ? new Promise((c) => {
        setTimeout(() => this.initializeCurrentUserFromIdToken(o).then(c, c));
      }) : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let s = r, i = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId, c = s == null ? void 0 : s._redirectEventId, a = await this.tryRedirectSignIn(e);
      (!o || o === c) && (a != null && a.user) && (s = a.user, i = !0);
    }
    if (!s)
      return this.directlySetCurrentUser(null);
    if (!s._redirectEventId) {
      if (i)
        try {
          await this.beforeStateQueue.runMiddleware(s);
        } catch (o) {
          s = r, this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o));
        }
      return s ? this.reloadAndSetCurrentUserOrClear(s) : this.directlySetCurrentUser(null);
    }
    return u(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === s._redirectEventId ? this.directlySetCurrentUser(s) : this.reloadAndSetCurrentUserOrClear(s);
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await Ue(e);
    } catch (t) {
      if ((t == null ? void 0 : t.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = gi();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (k(this.app))
      return Promise.reject(K(this));
    const t = e ? se(e) : null;
    return t && u(
      t.auth.config.apiKey === this.config.apiKey,
      this,
      "invalid-user-token"
      /* AuthErrorCode.INVALID_AUTH */
    ), this._updateCurrentUser(t && t._clone(this));
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return e && u(
        this.tenantId === e.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      ), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async () => {
        await this.directlySetCurrentUser(e), this.notifyAuthListeners();
      });
  }
  async signOut() {
    return k(this.app) ? Promise.reject(K(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      !0
    ));
  }
  setPersistence(e) {
    return k(this.app) ? Promise.reject(K(this)) : this.queue(async () => {
      await this.assertedPersistence.setPersistence(L(e));
    });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await Oi(this), t = new Ni(e);
    this.tenantId === null ? this._projectPasswordPolicy = t : this._tenantPasswordPolicies[this.tenantId] = t;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new _e("auth", "Firebase", e());
  }
  onAuthStateChanged(e, t, r) {
    return this.registerStateListener(this.authStateSubscription, e, t, r);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, r) {
    return this.registerStateListener(this.idTokenSubscription, e, t, r);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser)
        e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, t);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(), r = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token: e,
        idToken: t
      };
      this.tenantId != null && (r.tenantId = this.tenantId), await Ai(this, r);
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
    };
  }
  async _setRedirectUser(e, t) {
    const r = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = e && L(e) || this._popupRedirectResolver;
      u(
        t,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      ), this.redirectPersistenceManager = await Z.create(
        this,
        [L(t._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      ), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, r;
    return this._isInitialized && await this.queue(async () => {
    }), ((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e ? this.redirectUser : null;
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, t;
    if (!this._isInitialized)
      return;
    this.idTokenSubscription.next(this.currentUser);
    const r = (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null && t !== void 0 ? t : null;
    this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, r, s) {
    if (this._deleted)
      return () => {
      };
    const i = typeof t == "function" ? t : t.next.bind(t);
    let o = !1;
    const c = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (u(
      c,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), c.then(() => {
      o || i(this.currentUser);
    }), typeof t == "function") {
      const a = e.addObserver(t, r, s);
      return () => {
        o = !0, a();
      };
    } else {
      const a = e.addObserver(t);
      return () => {
        o = !0, a();
      };
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(e) {
    this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return this.operations = this.operations.then(e, e), this.operations;
  }
  get assertedPersistence() {
    return u(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.persistenceManager;
  }
  _logFramework(e) {
    !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = Fn(this.config.clientPlatform, this._getFrameworks()));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = {
      "X-Client-Version": this.clientVersion
    };
    this.app.options.appId && (t[
      "X-Firebase-gmpid"
      /* HttpHeader.X_FIREBASE_GMPID */
    ] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0
    })) === null || e === void 0 ? void 0 : e.getHeartbeatsHeader());
    r && (t[
      "X-Firebase-Client"
      /* HttpHeader.X_FIREBASE_CLIENT */
    ] = r);
    const s = await this._getAppCheckToken();
    return s && (t[
      "X-Firebase-AppCheck"
      /* HttpHeader.X_FIREBASE_APP_CHECK */
    ] = s), t;
  }
  async _getAppCheckToken() {
    var e;
    if (k(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const t = await ((e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || e === void 0 ? void 0 : e.getToken());
    return t != null && t.error && ui(`Error while retrieving App Check token: ${t.error}`), t == null ? void 0 : t.token;
  }
}
function Ve(n) {
  return se(n);
}
class Gt {
  constructor(e) {
    this.auth = e, this.observer = null, this.addObserver = Yr((t) => this.observer = t);
  }
  get next() {
    return u(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let yt = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function xi(n) {
  yt = n;
}
function Mi(n) {
  return yt.loadJS(n);
}
function Ui() {
  return yt.gapiScript;
}
function Fi(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bi(n, e) {
  const t = vn(n, "auth");
  if (t.isInitialized()) {
    const s = t.getImmediate(), i = t.getOptions();
    if (Le(i, e ?? {}))
      return s;
    R(
      s,
      "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
    );
  }
  return t.initialize({ options: e });
}
function ji(n, e) {
  const t = (e == null ? void 0 : e.persistence) || [], r = (Array.isArray(t) ? t : [t]).map(L);
  e != null && e.errorMap && n._updateErrorMap(e.errorMap), n._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver);
}
function $i(n, e, t) {
  const r = Ve(n);
  u(
    r._canInitEmulator,
    r,
    "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  ), u(
    /^https?:\/\//.test(e),
    r,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const s = !1, i = Bn(e), { host: o, port: c } = Hi(e), a = c === null ? "" : `:${c}`;
  r.config.emulator = { url: `${i}//${o}${a}/` }, r.settings.appVerificationDisabledForTesting = !0, r.emulatorConfig = Object.freeze({
    host: o,
    port: c,
    protocol: i.replace(":", ""),
    options: Object.freeze({ disableWarnings: s })
  }), Vi();
}
function Bn(n) {
  const e = n.indexOf(":");
  return e < 0 ? "" : n.substr(0, e + 1);
}
function Hi(n) {
  const e = Bn(n), t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t)
    return { host: "", port: null };
  const r = t[2].split("@").pop() || "", s = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (s) {
    const i = s[1];
    return { host: i, port: qt(r.substr(i.length + 1)) };
  } else {
    const [i, o] = r.split(":");
    return { host: i, port: qt(o) };
  }
}
function qt(n) {
  if (!n)
    return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function Vi() {
  function n() {
    const e = document.createElement("p"), t = e.style;
    e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
  }
  typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", n) : n());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn {
  /** @internal */
  constructor(e, t) {
    this.providerId = e, this.signInMethod = t;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return D("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(e) {
    return D("not implemented");
  }
  /** @internal */
  _linkToIdToken(e, t) {
    return D("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    return D("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ee(n, e) {
  return vi(n, "POST", "/v1/accounts:signInWithIdp", vt(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wi = "http://localhost";
class U extends jn {
  constructor() {
    super(...arguments), this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(e) {
    const t = new U(e.providerId, e.signInMethod);
    return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : R(
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), t;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e, { providerId: r, signInMethod: s } = t, i = ht(t, ["providerId", "signInMethod"]);
    if (!r || !s)
      return null;
    const o = new U(r, s);
    return o.idToken = i.idToken || void 0, o.accessToken = i.accessToken || void 0, o.secret = i.secret, o.nonce = i.nonce, o.pendingToken = i.pendingToken || null, o;
  }
  /** @internal */
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return ee(e, t);
  }
  /** @internal */
  _linkToIdToken(e, t) {
    const r = this.buildRequest();
    return r.idToken = t, ee(e, r);
  }
  /** @internal */
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return t.autoCreate = !1, ee(e, t);
  }
  buildRequest() {
    const e = {
      requestUri: Wi,
      returnSecureToken: !0
    };
    if (this.pendingToken)
      e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = ve(t);
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(e) {
    this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(e) {
    return this.customParameters = e, this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oe extends wt {
  constructor() {
    super(...arguments), this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
}
class fe extends oe {
  /**
   * Creates an {@link OAuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(e) {
    const t = typeof e == "string" ? JSON.parse(e) : e;
    return u(
      "providerId" in t && "signInMethod" in t,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), U._fromParams(t);
  }
  /**
   * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
   *
   * @remarks
   * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
   * the raw nonce must match the nonce field in the ID token.
   *
   * @example
   * ```javascript
   * // `googleUser` from the onsuccess Google Sign In callback.
   * // Initialize a generate OAuth provider with a `google.com` providerId.
   * const provider = new OAuthProvider('google.com');
   * const credential = provider.credential({
   *   idToken: googleUser.getAuthResponse().id_token,
   * });
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param params - Either the options object containing the ID token, access token and raw nonce
   * or the ID token string.
   */
  credential(e) {
    return this._credential(Object.assign(Object.assign({}, e), { nonce: e.rawNonce }));
  }
  /** An internal credential method that accepts more permissive options */
  _credential(e) {
    return u(
      e.idToken || e.accessToken,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    ), U._fromParams(Object.assign(Object.assign({}, e), { providerId: this.providerId, signInMethod: this.providerId }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return fe.oauthCredentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return fe.oauthCredentialFromTaggedObject(e.customData || {});
  }
  static oauthCredentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: t, oauthAccessToken: r, oauthTokenSecret: s, pendingToken: i, nonce: o, providerId: c } = e;
    if (!r && !s && !t && !i || !c)
      return null;
    try {
      return new fe(c)._credential({
        idToken: t,
        accessToken: r,
        nonce: o,
        pendingToken: i
      });
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j extends oe {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(e) {
    return U._fromParams({
      providerId: j.PROVIDER_ID,
      signInMethod: j.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return j.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return j.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return j.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
j.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
j.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C extends oe {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    ), this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(e, t) {
    return U._fromParams({
      providerId: C.PROVIDER_ID,
      signInMethod: C.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return C.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return C.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthIdToken: t, oauthAccessToken: r } = e;
    if (!t && !r)
      return null;
    try {
      return C.credential(t, r);
    } catch {
      return null;
    }
  }
}
C.GOOGLE_SIGN_IN_METHOD = "google.com";
C.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $ extends oe {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for GitHub.
   *
   * @param accessToken - GitHub access token.
   */
  static credential(e) {
    return U._fromParams({
      providerId: $.PROVIDER_ID,
      signInMethod: $.GITHUB_SIGN_IN_METHOD,
      accessToken: e
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return $.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return $.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken)
      return null;
    try {
      return $.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
$.GITHUB_SIGN_IN_METHOD = "github.com";
$.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H extends oe {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(e, t) {
    return U._fromParams({
      providerId: H.PROVIDER_ID,
      signInMethod: H.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(e) {
    return H.credentialFromTaggedObject(e);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(e) {
    return H.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e)
      return null;
    const { oauthAccessToken: t, oauthTokenSecret: r } = e;
    if (!t || !r)
      return null;
    try {
      return H.credential(t, r);
    } catch {
      return null;
    }
  }
}
H.TWITTER_SIGN_IN_METHOD = "twitter.com";
H.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne {
  constructor(e) {
    this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
  }
  static async _fromIdTokenResponse(e, t, r, s = !1) {
    const i = await N._fromIdTokenResponse(e, r, s), o = Kt(r);
    return new ne({
      user: i,
      providerId: o,
      _tokenResponse: r,
      operationType: t
    });
  }
  static async _forOperation(e, t, r) {
    await e._updateTokensIfNecessary(
      r,
      /* reload */
      !0
    );
    const s = Kt(r);
    return new ne({
      user: e,
      providerId: s,
      _tokenResponse: r,
      operationType: t
    });
  }
}
function Kt(n) {
  return n.providerId ? n.providerId : "phoneNumber" in n ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe extends z {
  constructor(e, t, r, s) {
    var i;
    super(t.code, t.message), this.operationType = r, this.user = s, Object.setPrototypeOf(this, Fe.prototype), this.customData = {
      appName: e.name,
      tenantId: (i = e.tenantId) !== null && i !== void 0 ? i : void 0,
      _serverResponse: t.customData._serverResponse,
      operationType: r
    };
  }
  static _fromErrorAndOperation(e, t, r, s) {
    return new Fe(e, t, r, s);
  }
}
function $n(n, e, t, r) {
  return (e === "reauthenticate" ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)).catch((i) => {
    throw i.code === "auth/multi-factor-auth-required" ? Fe._fromErrorAndOperation(n, i, e, r) : i;
  });
}
async function zi(n, e, t = !1) {
  const r = await me(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return ne._forOperation(n, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gi(n, e, t = !1) {
  const { auth: r } = n;
  if (k(r.app))
    return Promise.reject(K(r));
  const s = "reauthenticate";
  try {
    const i = await me(n, $n(r, s, e, n), t);
    u(
      i.idToken,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const o = It(i.idToken);
    u(
      o,
      r,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: c } = o;
    return u(
      n.uid === c,
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), ne._forOperation(n, s, i);
  } catch (i) {
    throw (i == null ? void 0 : i.code) === "auth/user-not-found" && R(
      r,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    ), i;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qi(n, e, t = !1) {
  if (k(n.app))
    return Promise.reject(K(n));
  const r = "signIn", s = await $n(n, r, e), i = await ne._fromIdTokenResponse(n, r, s);
  return t || await n._updateCurrentUser(i.user), i;
}
function Ki(n, e, t, r) {
  return se(n).onIdTokenChanged(e, t, r);
}
function Ji(n, e, t) {
  return se(n).beforeAuthStateChanged(e, t);
}
const Be = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn {
  constructor(e, t) {
    this.storageRetriever = e, this.type = t;
  }
  _isAvailable() {
    try {
      return this.storage ? (this.storage.setItem(Be, "1"), this.storage.removeItem(Be), Promise.resolve(!0)) : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yi = 1e3, Xi = 10;
class Vn extends Hn {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    ), this.boundEventHandler = (e, t) => this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.fallbackToPolling = Un(), this._shouldAllowMigration = !0;
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const r = this.storage.getItem(t), s = this.localCache[t];
      r !== s && e(t, s, r);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, c, a) => {
        this.notifyListeners(o, a);
      });
      return;
    }
    const r = e.key;
    t ? this.detachListener() : this.stopPolling();
    const s = () => {
      const o = this.storage.getItem(r);
      !t && this.localCache[r] === o || this.notifyListeners(r, o);
    }, i = this.storage.getItem(r);
    Pi() && i !== e.newValue && e.newValue !== e.oldValue ? setTimeout(s, Xi) : s();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r)
      for (const s of Array.from(r))
        s(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((e, t, r) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key: e,
            oldValue: t,
            newValue: r
          }),
          /* poll */
          !0
        );
      });
    }, Yi);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  // Update local cache on base operations:
  async _set(e, t) {
    await super._set(e, t), this.localCache[e] = JSON.stringify(t);
  }
  async _get(e) {
    const t = await super._get(e);
    return this.localCache[e] = JSON.stringify(t), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
Vn.type = "LOCAL";
const Qi = Vn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn extends Hn {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(e, t) {
  }
  _removeListener(e, t) {
  }
}
Wn.type = "SESSION";
const zn = Wn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zi(n) {
  return Promise.all(n.map(async (e) => {
    try {
      return {
        fulfilled: !0,
        value: await e
      };
    } catch (t) {
      return {
        fulfilled: !1,
        reason: t
      };
    }
  }));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We {
  constructor(e) {
    this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(e) {
    const t = this.receivers.find((s) => s.isListeningto(e));
    if (t)
      return t;
    const r = new We(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(e) {
    const t = e, { eventId: r, eventType: s, data: i } = t.data, o = this.handlersMap[s];
    if (!(o != null && o.size))
      return;
    t.ports[0].postMessage({
      status: "ack",
      eventId: r,
      eventType: s
    });
    const c = Array.from(o).map(async (l) => l(t.origin, i)), a = await Zi(c);
    t.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: s,
      response: a
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = /* @__PURE__ */ new Set()), this.handlersMap[e].add(t);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t), (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e], Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
We.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(n = "", e = 10) {
  let t = "";
  for (let r = 0; r < e; r++)
    t += Math.floor(Math.random() * 10);
  return n + t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo {
  constructor(e) {
    this.target = e, this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(e) {
    e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(e, t, r = 50) {
    const s = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!s)
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    let i, o;
    return new Promise((c, a) => {
      const l = Et("", 20);
      s.port1.start();
      const p = setTimeout(() => {
        a(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, r);
      o = {
        messageChannel: s,
        onMessage(_) {
          const b = _;
          if (b.data.eventId === l)
            switch (b.data.status) {
              case "ack":
                clearTimeout(p), i = setTimeout(
                  () => {
                    a(new Error(
                      "timeout"
                      /* _MessageError.TIMEOUT */
                    ));
                  },
                  3e3
                  /* _TimeoutDuration.COMPLETION */
                );
                break;
              case "done":
                clearTimeout(i), c(b.data.response);
                break;
              default:
                clearTimeout(p), clearTimeout(i), a(new Error(
                  "invalid_response"
                  /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
        }
      }, this.handlers.add(o), s.port1.addEventListener("message", o.onMessage), this.target.postMessage({
        eventType: e,
        eventId: l,
        data: t
      }, [s.port2]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P() {
  return window;
}
function to(n) {
  P().location.href = n;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gn() {
  return typeof P().WorkerGlobalScope < "u" && typeof P().importScripts == "function";
}
async function no() {
  if (!(navigator != null && navigator.serviceWorker))
    return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function ro() {
  var n;
  return ((n = navigator == null ? void 0 : navigator.serviceWorker) === null || n === void 0 ? void 0 : n.controller) || null;
}
function so() {
  return Gn() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn = "firebaseLocalStorageDb", io = 1, je = "firebaseLocalStorage", Kn = "fbase_key";
class ye {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }), this.request.addEventListener("error", () => {
        t(this.request.error);
      });
    });
  }
}
function ze(n, e) {
  return n.transaction([je], e ? "readwrite" : "readonly").objectStore(je);
}
function oo() {
  const n = indexedDB.deleteDatabase(qn);
  return new ye(n).toPromise();
}
function ut() {
  const n = indexedDB.open(qn, io);
  return new Promise((e, t) => {
    n.addEventListener("error", () => {
      t(n.error);
    }), n.addEventListener("upgradeneeded", () => {
      const r = n.result;
      try {
        r.createObjectStore(je, { keyPath: Kn });
      } catch (s) {
        t(s);
      }
    }), n.addEventListener("success", async () => {
      const r = n.result;
      r.objectStoreNames.contains(je) ? e(r) : (r.close(), await oo(), e(await ut()));
    });
  });
}
async function Jt(n, e, t) {
  const r = ze(n, !0).put({
    [Kn]: e,
    value: t
  });
  return new ye(r).toPromise();
}
async function ao(n, e) {
  const t = ze(n, !1).get(e), r = await new ye(t).toPromise();
  return r === void 0 ? null : r.value;
}
function Yt(n, e) {
  const t = ze(n, !0).delete(e);
  return new ye(t).toPromise();
}
const co = 800, lo = 3;
class Jn {
  constructor() {
    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    return this.db ? this.db : (this.db = await ut(), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (; ; )
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (t++ > lo)
          throw r;
        this.db && (this.db.close(), this.db = void 0);
      }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return Gn() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = We._getInstance(so()), this.receiver._subscribe("keyChanged", async (e, t) => ({
      keyProcessed: (await this._poll()).includes(t.key)
    })), this.receiver._subscribe("ping", async (e, t) => [
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ]);
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var e, t;
    if (this.activeServiceWorker = await no(), !this.activeServiceWorker)
      return;
    this.sender = new eo(this.activeServiceWorker);
    const r = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    r && !((e = r[0]) === null || e === void 0) && e.fulfilled && !((t = r[0]) === null || t === void 0) && t.value.includes(
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ) && (this.serviceWorkerReceiverAvailable = !0);
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(e) {
    if (!(!this.sender || !this.activeServiceWorker || ro() !== this.activeServiceWorker))
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          // Use long timeout if receiver has previously responded to a ping from us.
          this.serviceWorkerReceiverAvailable ? 800 : 50
          /* _TimeoutDuration.ACK */
        );
      } catch {
      }
  }
  async _isAvailable() {
    try {
      if (!indexedDB)
        return !1;
      const e = await ut();
      return await Jt(e, Be, "1"), await Yt(e, Be), !0;
    } catch {
    }
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(async () => (await this._withRetries((r) => Jt(r, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
  }
  async _get(e) {
    const t = await this._withRetries((r) => ao(r, e));
    return this.localCache[e] = t, t;
  }
  async _remove(e) {
    return this._withPendingWrite(async () => (await this._withRetries((t) => Yt(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
  }
  async _poll() {
    const e = await this._withRetries((s) => {
      const i = ze(s, !1).getAll();
      return new ye(i).toPromise();
    });
    if (!e)
      return [];
    if (this.pendingWrites !== 0)
      return [];
    const t = [], r = /* @__PURE__ */ new Set();
    if (e.length !== 0)
      for (const { fbase_key: s, value: i } of e)
        r.add(s), JSON.stringify(this.localCache[s]) !== JSON.stringify(i) && (this.notifyListeners(s, i), t.push(s));
    for (const s of Object.keys(this.localCache))
      this.localCache[s] && !r.has(s) && (this.notifyListeners(s, null), t.push(s));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r)
      for (const s of Array.from(r))
        s(t);
  }
  startPolling() {
    this.stopPolling(), this.pollTimer = setInterval(async () => this._poll(), co);
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(), this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set(), this._get(e)), this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] && (this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]), Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Jn.type = "LOCAL";
const uo = Jn;
new be(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yn(n, e) {
  return e ? L(e) : (u(
    n._popupRedirectResolver,
    n,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  ), n._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends jn {
  constructor(e) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    ), this.params = e;
  }
  _getIdTokenResponse(e) {
    return ee(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return ee(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return ee(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0
    };
    return e && (t.idToken = e), t;
  }
}
function ho(n) {
  return qi(n.auth, new Tt(n), n.bypassAuthState);
}
function fo(n) {
  const { auth: e, user: t } = n;
  return u(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), Gi(t, new Tt(n), n.bypassAuthState);
}
async function po(n) {
  const { auth: e, user: t } = n;
  return u(
    t,
    e,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), zi(t, new Tt(n), n.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn {
  constructor(e, t, r, s, i = !1) {
    this.auth = e, this.resolver = r, this.user = s, this.bypassAuthState = i, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [t];
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const { urlResponse: t, sessionId: r, postBody: s, tenantId: i, error: o, type: c } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: t,
      sessionId: r,
      tenantId: i || void 0,
      postBody: s || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(c)(a));
    } catch (l) {
      this.reject(l);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return ho;
      case "linkViaPopup":
      case "linkViaRedirect":
        return po;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return fo;
      default:
        R(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(e) {
    M(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
  }
  reject(e) {
    M(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const go = new be(2e3, 1e4);
async function Xt(n, e, t) {
  if (k(n.app))
    return Promise.reject(A(
      n,
      "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    ));
  const r = Ve(n);
  hi(n, e, wt);
  const s = Yn(r, t);
  return new q(r, "signInViaPopup", e, s).executeNotNull();
}
class q extends Xn {
  constructor(e, t, r, s, i) {
    super(e, t, s, i), this.provider = r, this.authWindow = null, this.pollId = null, q.currentPopupAction && q.currentPopupAction.cancel(), q.currentPopupAction = this;
  }
  async executeNotNull() {
    const e = await this.execute();
    return u(
      e,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    ), e;
  }
  async onExecution() {
    M(this.filter.length === 1, "Popup operations only handle one event");
    const e = Et();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      e
    ), this.authWindow.associatedEvent = e, this.resolver._originValidation(this.auth).catch((t) => {
      this.reject(t);
    }), this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
      t || this.reject(A(
        this.auth,
        "web-storage-unsupported"
        /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
      ));
    }), this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject(A(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, q.currentPopupAction = null;
  }
  pollUserCancellation() {
    const e = () => {
      var t, r;
      if (!((r = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null || r === void 0) && r.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null, this.reject(A(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(e, go.get());
    };
    e();
  }
}
q.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mo = "pendingRedirect", De = /* @__PURE__ */ new Map();
class _o extends Xn {
  constructor(e, t, r = !1) {
    super(e, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], t, void 0, r), this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let e = De.get(this.auth._key());
    if (!e) {
      try {
        const r = await vo(this.resolver, this.auth) ? await super.execute() : null;
        e = () => Promise.resolve(r);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      De.set(this.auth._key(), e);
    }
    return this.bypassAuthState || De.set(this.auth._key(), () => Promise.resolve(null)), e();
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect")
      return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t)
        return this.user = t, super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function vo(n, e) {
  const t = yo(e), r = bo(n);
  if (!await r._isAvailable())
    return !1;
  const s = await r._get(t) === "true";
  return await r._remove(t), s;
}
function Io(n, e) {
  De.set(n._key(), e);
}
function bo(n) {
  return L(n._redirectPersistence);
}
function yo(n) {
  return Oe(mo, n.config.apiKey, n.name);
}
async function wo(n, e, t = !1) {
  if (k(n.app))
    return Promise.reject(K(n));
  const r = Ve(n), s = Yn(r, e), o = await new _o(r, s, t).execute();
  return o && !t && (delete o.user._redirectEventId, await r._persistUserIfCurrent(o.user), await r._setRedirectUser(null, e)), o;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Eo = 10 * 60 * 1e3;
class To {
  constructor(e) {
    this.auth = e, this.cachedEventUids = /* @__PURE__ */ new Set(), this.consumers = /* @__PURE__ */ new Set(), this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(e) {
    this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e))
      return !1;
    let t = !1;
    return this.consumers.forEach((r) => {
      this.isEventForConsumer(e, r) && (t = !0, this.sendToConsumer(e, r), this.saveEventToCache(e));
    }), this.hasHandledPotentialRedirect || !So(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t;
  }
  sendToConsumer(e, t) {
    var r;
    if (e.error && !Qn(e)) {
      const s = ((r = e.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
      t.onError(A(this.auth, s));
    } else
      t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const r = t.eventId === null || !!e.eventId && e.eventId === t.eventId;
    return t.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return Date.now() - this.lastProcessedEventTime >= Eo && this.cachedEventUids.clear(), this.cachedEventUids.has(Qt(e));
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Qt(e)), this.lastProcessedEventTime = Date.now();
  }
}
function Qt(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId].filter((e) => e).join("-");
}
function Qn({ type: n, error: e }) {
  return n === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event";
}
function So(n) {
  switch (n.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Qn(n);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Co(n, e = {}) {
  return ie(n, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ao = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, ko = /^https?/;
async function Po(n) {
  if (n.config.emulator)
    return;
  const { authorizedDomains: e } = await Co(n);
  for (const t of e)
    try {
      if (Ro(t))
        return;
    } catch {
    }
  R(
    n,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function Ro(n) {
  const e = lt(), { protocol: t, hostname: r } = new URL(e);
  if (n.startsWith("chrome-extension://")) {
    const o = new URL(n);
    return o.hostname === "" && r === "" ? t === "chrome-extension:" && n.replace("chrome-extension://", "") === e.replace("chrome-extension://", "") : t === "chrome-extension:" && o.hostname === r;
  }
  if (!ko.test(t))
    return !1;
  if (Ao.test(n))
    return r === n;
  const s = n.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oo = new be(3e4, 6e4);
function Zt() {
  const n = P().___jsl;
  if (n != null && n.H) {
    for (const e of Object.keys(n.H))
      if (n.H[e].r = n.H[e].r || [], n.H[e].L = n.H[e].L || [], n.H[e].r = [...n.H[e].L], n.CP)
        for (let t = 0; t < n.CP.length; t++)
          n.CP[t] = null;
  }
}
function Do(n) {
  return new Promise((e, t) => {
    var r, s, i;
    function o() {
      Zt(), gapi.load("gapi.iframes", {
        callback: () => {
          e(gapi.iframes.getContext());
        },
        ontimeout: () => {
          Zt(), t(A(
            n,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: Oo.get()
      });
    }
    if (!((s = (r = P().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || s === void 0) && s.Iframe)
      e(gapi.iframes.getContext());
    else if (!((i = P().gapi) === null || i === void 0) && i.load)
      o();
    else {
      const c = Fi("iframefcb");
      return P()[c] = () => {
        gapi.load ? o() : t(A(
          n,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, Mi(`${Ui()}?onload=${c}`).catch((a) => t(a));
    }
  }).catch((e) => {
    throw Ne = null, e;
  });
}
let Ne = null;
function No(n) {
  return Ne = Ne || Do(n), Ne;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lo = new be(5e3, 15e3), xo = "__/auth/iframe", Mo = "emulator/auth/iframe", Uo = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
}, Fo = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  // production
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  // staging
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function Bo(n) {
  const e = n.config;
  u(
    e.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const t = e.emulator ? _t(e, Mo) : `https://${n.config.authDomain}/${xo}`, r = {
    apiKey: e.apiKey,
    appName: n.name,
    v: Ie
  }, s = Fo.get(n.config.apiHost);
  s && (r.eid = s);
  const i = n._getFrameworks();
  return i.length && (r.fw = i.join(",")), `${t}?${ve(r).slice(1)}`;
}
async function jo(n) {
  const e = await No(n), t = P().gapi;
  return u(
    t,
    n,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  ), e.open({
    where: document.body,
    url: Bo(n),
    messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: Uo,
    dontclear: !0
  }, (r) => new Promise(async (s, i) => {
    await r.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: !1
    });
    const o = A(
      n,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ), c = P().setTimeout(() => {
      i(o);
    }, Lo.get());
    function a() {
      P().clearTimeout(c), s(r);
    }
    r.ping(a).then(a, () => {
      i(o);
    });
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $o = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
}, Ho = 500, Vo = 600, Wo = "_blank", zo = "http://localhost";
class en {
  constructor(e) {
    this.window = e, this.associatedEvent = null;
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {
      }
  }
}
function Go(n, e, t, r = Ho, s = Vo) {
  const i = Math.max((window.screen.availHeight - s) / 2, 0).toString(), o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let c = "";
  const a = Object.assign(Object.assign({}, $o), {
    width: r.toString(),
    height: s.toString(),
    top: i,
    left: o
  }), l = E().toLowerCase();
  t && (c = Dn(l) ? Wo : t), Rn(l) && (e = e || zo, a.scrollbars = "yes");
  const p = Object.entries(a).reduce((b, [S, F]) => `${b}${S}=${F},`, "");
  if (ki(l) && c !== "_self")
    return qo(e || "", c), new en(null);
  const _ = window.open(e || "", c, p);
  u(
    _,
    n,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    _.focus();
  } catch {
  }
  return new en(_);
}
function qo(n, e) {
  const t = document.createElement("a");
  t.href = n, t.target = e;
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), t.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ko = "__/auth/handler", Jo = "emulator/auth/handler", Yo = encodeURIComponent("fac");
async function tn(n, e, t, r, s, i) {
  u(
    n.config.authDomain,
    n,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  ), u(
    n.config.apiKey,
    n,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const o = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: r,
    v: Ie,
    eventId: s
  };
  if (e instanceof wt) {
    e.setDefaultLanguage(n.languageCode), o.providerId = e.providerId || "", Jr(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [p, _] of Object.entries({}))
      o[p] = _;
  }
  if (e instanceof oe) {
    const p = e.getScopes().filter((_) => _ !== "");
    p.length > 0 && (o.scopes = p.join(","));
  }
  n.tenantId && (o.tid = n.tenantId);
  const c = o;
  for (const p of Object.keys(c))
    c[p] === void 0 && delete c[p];
  const a = await n._getAppCheckToken(), l = a ? `#${Yo}=${encodeURIComponent(a)}` : "";
  return `${Xo(n)}?${ve(c).slice(1)}${l}`;
}
function Xo({ config: n }) {
  return n.emulator ? _t(n, Jo) : `https://${n.authDomain}/${Ko}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rt = "webStorageSupport";
class Qo {
  constructor() {
    this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = zn, this._completeRedirectFn = wo, this._overrideRedirectResult = Io;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(e, t, r, s) {
    var i;
    M((i = this.eventManagers[e._key()]) === null || i === void 0 ? void 0 : i.manager, "_initialize() not called before _openPopup()");
    const o = await tn(e, t, r, lt(), s);
    return Go(e, o, Et());
  }
  async _openRedirect(e, t, r, s) {
    await this._originValidation(e);
    const i = await tn(e, t, r, lt(), s);
    return to(i), new Promise(() => {
    });
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: s, promise: i } = this.eventManagers[t];
      return s ? Promise.resolve(s) : (M(i, "If manager is not set, promise should be"), i);
    }
    const r = this.initAndGetManager(e);
    return this.eventManagers[t] = { promise: r }, r.catch(() => {
      delete this.eventManagers[t];
    }), r;
  }
  async initAndGetManager(e) {
    const t = await jo(e), r = new To(e);
    return t.register("authEvent", (s) => (u(
      s == null ? void 0 : s.authEvent,
      e,
      "invalid-auth-event"
      /* AuthErrorCode.INVALID_AUTH_EVENT */
    ), {
      status: r.onEvent(s.authEvent) ? "ACK" : "ERROR"
      /* GapiOutcome.ERROR */
    }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = { manager: r }, this.iframes[e._key()] = t, r;
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(rt, { type: rt }, (s) => {
      var i;
      const o = (i = s == null ? void 0 : s[0]) === null || i === void 0 ? void 0 : i[rt];
      o !== void 0 && t(!!o), R(
        e,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(e) {
    const t = e._key();
    return this.originValidationPromises[t] || (this.originValidationPromises[t] = Po(e)), this.originValidationPromises[t];
  }
  get _shouldInitProactively() {
    return Un() || On() || bt();
  }
}
const Zo = Qo;
var nn = "@firebase/auth", rn = "1.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ea {
  constructor(e) {
    this.auth = e, this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var e;
    return this.assertAuthConfigured(), ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null;
  }
  async getToken(e) {
    return this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null;
  }
  addAuthTokenListener(e) {
    if (this.assertAuthConfigured(), this.internalListeners.has(e))
      return;
    const t = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    u(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ta(n) {
  switch (n) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function na(n) {
  pe(new te(
    "auth",
    (e, { options: t }) => {
      const r = e.getProvider("app").getImmediate(), s = e.getProvider("heartbeat"), i = e.getProvider("app-check-internal"), { apiKey: o, authDomain: c } = r.options;
      u(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
      const a = {
        apiKey: o,
        authDomain: c,
        clientPlatform: n,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: Fn(n)
      }, l = new Li(r, s, i, a);
      return ji(l, t), l;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((e, t, r) => {
    e.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    ).initialize();
  })), pe(new te(
    "auth-internal",
    (e) => {
      const t = Ve(e.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((r) => new ea(r))(t);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  )), X(nn, rn, ta(n)), X(nn, rn, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ra = 5 * 60, sa = pn("authIdTokenMaxAge") || ra;
let sn = null;
const ia = (n) => async (e) => {
  const t = e && await e.getIdTokenResult(), r = t && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (r && r > sa)
    return;
  const s = t == null ? void 0 : t.token;
  sn !== s && (sn = s, await fetch(n, {
    method: s ? "POST" : "DELETE",
    headers: s ? {
      Authorization: `Bearer ${s}`
    } : {}
  }));
};
function oa(n = Xs()) {
  const e = vn(n, "auth");
  if (e.isInitialized())
    return e.getImmediate();
  const t = Bi(n, {
    popupRedirectResolver: Zo,
    persistence: [
      uo,
      Qi,
      zn
    ]
  }), r = pn("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const i = new URL(r, location.origin);
    if (location.origin === i.origin) {
      const o = ia(i.toString());
      Ji(t, o, () => o(t.currentUser)), Ki(t, (c) => o(c));
    }
  }
  const s = Ur("auth");
  return s && $i(t, `http://${s}`), t;
}
function aa() {
  var n, e;
  return (e = (n = document.getElementsByTagName("head")) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : document;
}
xi({
  loadJS(n) {
    return new Promise((e, t) => {
      const r = document.createElement("script");
      r.setAttribute("src", n), r.onload = e, r.onerror = (s) => {
        const i = A(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        i.customData = s, t(i);
      }, r.type = "text/javascript", r.charset = "UTF-8", aa().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
na(
  "Browser"
  /* ClientPlatform.BROWSER */
);
const ca = "https://www.googleapis.com/auth/drive.appdata", Zn = "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest";
function la(n) {
  const e = new C();
  return e.addScope(ca), e.setCustomParameters({ login_hint: n }), e;
}
const da = {
  apiKey: "AIzaSyA2E5vK3fhxvftpfS02T8eIC3SrXnIUjrs",
  authDomain: "fireblocks-sdk-demo.firebaseapp.com",
  projectId: "fireblocks-sdk-demo",
  storageBucket: "fireblocks-sdk-demo.appspot.com",
  messagingSenderId: "127498444203",
  appId: "1:127498444203:web:31ff24e7a4c6bfa92e46ee"
};
class ua {
  constructor() {
    Ke(this, "_auth");
    Ke(this, "_loggedUser", null);
    const e = In(da);
    this._auth = oa(e), this._loggedUser = this._auth.currentUser, this._auth.onAuthStateChanged((t) => {
      this._loggedUser = t;
    });
  }
  async getGoogleDriveCredentials() {
    console.log("getting google drive credentials");
    const e = la(this._auth.currentUser.email);
    console.log("signing in with popup");
    const t = await Xt(this._auth, e);
    console.log("sign in with popup result", t);
    const r = C.credentialFromResult(t), s = r == null ? void 0 : r.accessToken;
    if (console.log("token from credential", s), !s)
      throw new Error("Failed to retrieve token");
    return s;
  }
  async login(e) {
    let t;
    switch (e) {
      case "GOOGLE":
        const i = new C();
        i.setCustomParameters({ prompt: "select_account" }), t = i;
        break;
      case "APPLE":
        t = new fe("apple.com");
        break;
      default:
        throw new Error("Unsupported provider");
    }
    const r = this._auth.onAuthStateChanged((i) => {
      this._loggedUser = i, r();
    }), s = await Xt(this._auth, t);
    this._loggedUser = s.user;
  }
  logout() {
    return this._auth.signOut();
  }
  getAccessToken() {
    if (!this._loggedUser)
      throw new Error("User is not logged in");
    return this._loggedUser.getIdToken();
  }
  get loggedUser() {
    return this._loggedUser;
  }
  onUserChanged(e) {
    return this._auth.onAuthStateChanged(e);
  }
}
const $e = new ua(), ha = (n, e) => new Promise((t, r) => {
  console.log("gapi loading"), gapi.load("client", {
    callback: async () => {
      var s;
      try {
        console.log("initializing gapi client");
        const i = `passphrase_${e}.txt`;
        await gapi.client.init({
          discoveryDocs: [Zn]
        }), console.log("initializing gapi client done"), console.log("listing files");
        const o = await gapi.client.drive.files.list({
          spaces: "appDataFolder",
          oauth_token: n,
          q: `name='${i}'`
        });
        console.log("listing files done", o), console.log("finding file");
        const c = (s = o.result.files) == null ? void 0 : s.find((a) => a.name === i);
        if (console.log("finding file done", c), c != null && c.id) {
          console.log("fetching file");
          const l = await (await fetch(`https://www.googleapis.com/drive/v3/files/${c.id}?alt=media`, {
            headers: {
              Authorization: `Bearer ${n}`
            }
          })).text();
          return console.log("fetching file done", l), t(l);
        } else
          throw new Error("not found");
      } catch (i) {
        r(i);
      }
    },
    onerror: r,
    ontimeout: r,
    timeout: 5e3
  });
}), fa = (n, e, t) => new Promise((r, s) => {
  console.log("gapi loading"), gapi.load("client", {
    callback: async () => {
      try {
        console.log("initializing gapi client"), await gapi.client.init({
          discoveryDocs: [Zn]
        }), console.log("initializing gapi client done");
        const i = `passphrase_${t}.txt`, o = new Blob([e], { type: "text/plain" }), c = {
          name: i,
          mimeType: "text/plain",
          parents: ["appDataFolder"]
        };
        console.log("creating file");
        const a = await gapi.client.drive.files.create({
          oauth_token: n,
          uploadType: "media",
          resource: c,
          fields: "id"
        });
        console.log("file created", a), console.log("uploading file");
        const l = await fetch(
          `https://www.googleapis.com/upload/drive/v3/files/${a.result.id}?uploadType=media`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${n}`,
              "Content-Type": c.mimeType,
              "Content-Length": o.size.toString()
            },
            body: e
          }
        );
        console.log("file uploaded", l), r();
      } catch (i) {
        s(i);
      }
    },
    onerror: s,
    ontimeout: s,
    timeout: 5e3
  });
}), He = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", pa = () => {
  const n = Array(256).fill(-1);
  for (let e = 0; e < He.length; ++e)
    n[He.charCodeAt(e)] = e;
  return n;
}, ga = pa();
function ma(n) {
  const e = [];
  for (const t of n) {
    let r = t;
    for (let s = 0; s < e.length; ++s) {
      const i = (ga[e[s]] << 8) + r;
      e[s] = He.charCodeAt(i % 58), r = i / 58 | 0;
    }
    for (; r; )
      e.push(He.charCodeAt(r % 58)), r = r / 58 | 0;
  }
  for (const t of n) {
    if (t) break;
    e.push(49);
  }
  return e.reverse(), String.fromCharCode(...e);
}
function _a() {
  const e = crypto.getRandomValues(new Uint8Array(16));
  return ma(e);
}
const er = async (n) => {
  const e = await $e.getGoogleDriveCredentials();
  return ha(e, n);
}, va = async (n) => {
  const { passphrases: e } = await w.getPassphraseInfos();
  if (e === null)
    throw new Error();
  for (const t of Object.values(e))
    if (t.location === n)
      switch (n) {
        case "GoogleDrive": {
          const r = await er(t.passphraseId);
          return { passphraseId: t.passphraseId, passphrase: r };
        }
        default:
          throw new Error(`Unsupported backup location ${n}`);
      }
  throw new Error(`Not found backup location ${n}`);
}, Ia = async (n, e) => {
  const t = await $e.getGoogleDriveCredentials();
  return fa(t, n, e);
}, ba = async (n) => {
  console.log("persisting passphrase", n);
  const { passphrases: e } = await w.getPassphraseInfos();
  if (e === null)
    throw new Error();
  try {
    console.log("recovering passphrase", n);
    const s = await va(n);
    if (s)
      return console.log("recovered passphrase", s), s;
  } catch (s) {
    console.warn("failed to load previous passphrase, creating new", s, n);
  }
  const t = _a(), r = crypto.randomUUID();
  switch (n) {
    case "GoogleDrive":
      return console.log("backing up passphrase", t, r), await Ia(t, r), await w.createPassphraseInfo(r, n), { passphraseId: r, passphrase: t };
    default:
      throw new Error(`Unsupported backup location ${n}`);
  }
}, ya = async (n) => {
  console.log("recovering passphraseId", n);
  const { passphrases: e } = await w.getPassphraseInfos();
  if (e === null)
    throw new Error();
  for (const t of Object.values(e))
    if (t.passphraseId === n)
      switch (t.location) {
        case "GoogleDrive":
          return console.log("recovering passphraseId from GoogleDrive", t.passphraseId), await er(t.passphraseId);
        default:
          throw new Error(`Unsupported backup location ${location}`);
      }
  throw new Error(`Not found backup location ${location} passphraseId ${n}`);
};
function Aa() {
  const { data: n, isFetched: e } = cr();
  Y.useState("LOW");
  const [t, r] = Y.useState(""), [s, i] = Y.useState(!1), [o, c] = Y.useState(""), [a, l] = Y.useState(""), [p, _] = Y.useState(""), b = async () => {
    i(!0), await T.signUp({
      username: (n == null ? void 0 : n.email) ?? "",
      sub: (n == null ? void 0 : n.sub) ?? ""
    }), i(!1);
  }, S = async () => {
    i(!0), await T.signIn({
      authUsername: (n == null ? void 0 : n.email) ?? "",
      sub: (n == null ? void 0 : n.sub) ?? ""
    }), i(!1);
  }, F = async () => {
    i(!0);
    const d = await w.getWallets();
    console.log("wallets", d), i(!1);
  }, we = async () => {
    i(!0), await T.generateMPCKeys(), i(!1);
  }, ae = async () => {
    if (i(!0), !e || !n)
      return;
    const d = O(n.sub);
    if (!d)
      return;
    const f = await w.getAssets(d, 0);
    console.log("assets", f), i(!1);
  }, Ee = async () => {
    if (i(!0), !e || !n)
      return;
    const d = O(n.sub);
    if (!d)
      return;
    const f = await w.getSupportedAssets(d, 0);
    console.log("supportedAssets", f), i(!1);
  }, Te = async () => {
    if (i(!0), !e || !n)
      return;
    const d = O(n.sub);
    if (!d)
      return;
    const f = 0, m = "BTC_TEST";
    await w.addAsset(d, f, m);
    const y = await w.getAsset(d, f, m);
    console.log("asset", y), i(!1);
  }, ce = async () => {
    if (i(!0), !e || !n)
      return;
    const d = O(n.sub);
    if (!d)
      return;
    const y = await w.getAddress(d, 0, "BTC_TEST");
    console.log("address", y), i(!1);
  }, Se = async () => {
    if (i(!0), !e || !n)
      return;
    const d = O(n.sub);
    if (!d)
      return;
    const y = await w.getBalance(d, 0, "BTC_TEST");
    console.log("balance", y), i(!1);
  }, Ce = async () => {
    var f;
    if (i(!0), !(!e || !n || !O(n.sub)))
      try {
        const m = await T.signTransaction({
          fromAddress: ((f = n.chainAddresses) == null ? void 0 : f.BITCOIN) ?? "",
          toAddress: p,
          amount: a,
          token: lr.BTC,
          transactionType: dr.TRANSFER
        });
        r(m.id), console.log("transaction", m);
      } catch (m) {
        console.log("error", m);
      } finally {
        i(!1);
      }
  }, le = async () => {
    if (i(!0), !e || !n)
      return;
    const d = O(n.sub);
    if (console.log("deviceId", d), !d)
      return;
    let f = {
      note: `API Transaction by ${d}`,
      accountId: "0",
      assetId: "BTC_TEST"
    };
    const m = await w.createTransaction(d, f);
    console.log("transaction", m), r(m.id), i(!1);
  }, Ae = async () => {
    if (i(!0), !e || !n)
      return;
    const d = O(n.sub);
    if (!d)
      return;
    if (!t) {
      alert("Please create a transaction first");
      return;
    }
    const f = await w.getTransactionById(d, t);
    console.log("transaction details", f), i(!1);
  }, Ge = async () => {
    var f, m;
    if (i(!0), !(!e || !n || !O(n.sub))) {
      if (!t) {
        alert("Please create a transaction first");
        return;
      }
      try {
        const y = await ((f = T.config.fireblocksNCWInstance) == null ? void 0 : f.signTransaction(t));
        console.log("result", y);
      } catch (y) {
        if (y instanceof ur) {
          if (y.txId === t)
            throw y;
          console.log("stopping in progress sign transaction"), await ((m = T.config.fireblocksNCWInstance) == null ? void 0 : m.stopInProgressSignTransaction()), console.log("stopped in progress sign transaction");
        } else
          throw y;
      } finally {
        i(!1);
      }
    }
  }, de = async () => {
    var f;
    i(!0);
    const d = await ((f = T.config.fireblocksNCWInstance) == null ? void 0 : f.getKeysStatus());
    console.log("keys status", d), i(!1);
  }, qe = async () => {
    var d;
    i(!0), await ((d = T.config.fireblocksNCWInstance) == null ? void 0 : d.requestJoinExistingWallet({
      onRequestId: (f) => {
        console.log("requestId", f);
        const m = yr(
          `{"email":"${(n == null ? void 0 : n.email) ?? "not available"}","platform":"Web","requestId":"${f}"}`
        );
        console.log("encodedData", m), c(m);
      },
      onProvisionerFound: () => {
        console.log("onProvisionerFound");
      }
    })), i(!1);
  }, tr = async () => {
    var m;
    i(!0);
    const d = await prompt("Insert encoded request data");
    if (!d) {
      alert("No request data provided");
      return;
    }
    const f = JSON.parse(Pr(d));
    console.log("decodedData", f), await ((m = T.config.fireblocksNCWInstance) == null ? void 0 : m.approveJoinWalletRequest(f.requestId)), i(!1);
  }, nr = async () => {
    i(!0), i(!1);
  }, rr = async () => {
    var m;
    i(!0), $e.loggedUser || alert("Please sign in first");
    const { passphrase: d, passphraseId: f } = await ba("GoogleDrive");
    console.log("fireblocks ncw backupKeys called with", d, f), await ((m = T.config.fireblocksNCWInstance) == null ? void 0 : m.backupKeys(d, f)), console.log("backed up with google drive successfully"), i(!1);
  }, sr = async () => {
    i(!0), await $e.login("GOOGLE"), i(!1);
  }, ir = async () => {
    var y, Ct;
    i(!0), console.log("recovering keys");
    const d = await St(), f = d == null ? void 0 : d.deviceId;
    if (!f) {
      alert("No device id found");
      return;
    }
    if (!e || !n)
      return;
    hr(f, n.sub), await T.initFireblocksNCWInstance(f), await ((y = T.config.fireblocksNCWInstance) == null ? void 0 : y.recoverKeys(ya)), console.log("keys recovered");
    const m = await ((Ct = T.config.fireblocksNCWInstance) == null ? void 0 : Ct.getKeysStatus());
    console.log("keys status", m), i(!1);
  }, St = async () => {
    try {
      i(!0);
      const d = await w.getWallets();
      console.log("wallets", d);
      const f = await w.getLatestBackup(d.wallets[0].walletId);
      return console.log("latest backup", f), f;
    } catch (d) {
      console.log("error", d);
    } finally {
      i(!1);
    }
  };
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: b, children: "Sign up by user id and init fireblocks" }),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: S, children: "Sign in by user id and init fireblocks" }),
    /* @__PURE__ */ h.jsx("br", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: de, children: "Get keys status" }),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: F, children: "Get wallets" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: we, children: "Generate MPC keys" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: Ee, children: "Supported Assets" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: ae, children: "Asset List" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: Te, children: "Add Asset(BTC_TEST)" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: ce, children: "Get Address" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: Se, children: "Get balance" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ h.jsx(Je, { placeholder: "btc amount", value: a, onChange: (d) => l(d.target.value) }),
      /* @__PURE__ */ h.jsx(Je, { placeholder: "destination address", value: p, onChange: (d) => _(d.target.value) }),
      /* @__PURE__ */ h.jsx(Je, { placeholder: "transaction id", value: t, onChange: (d) => r(d.target.value) })
    ] }),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: Ce, children: "Create a transfer transaction" }),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: le, children: "Create a typed message transaction" }),
    t && /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: Ae, children: "Get transaction" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: Ge, children: "Sign transaction" }),
    /* @__PURE__ */ h.jsx("hr", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: qe, children: "Join existing device" }),
    "request data: ",
    o,
    /* @__PURE__ */ h.jsx("br", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: tr, children: "Approve joining wallet" }),
    /* @__PURE__ */ h.jsx("br", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: nr, children: "Get Passphrases" }),
    /* @__PURE__ */ h.jsx("br", {}),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: St, children: "Get latest backup" }),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: sr, children: "Login with Google" }),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: rr, children: "Backup wallet with Google Drive" }),
    /* @__PURE__ */ h.jsx(v, { disabled: s, onClick: ir, children: "Recover wallet with Google Drive" }),
    /* @__PURE__ */ h.jsx("br", {})
  ] });
}
export {
  Aa as default
};
