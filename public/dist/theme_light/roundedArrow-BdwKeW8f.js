import { e as J, t as ru, _ as M, g as w, j as Ht } from "./vendor-web3-DmEdZR0k.js";
import { p as z, e as nu, R as Te, c as so, a as h, $ as ta, b as au } from "./vendor-react-DM3ZG7W6.js";
import { _ as pt } from "./vendor-ui-utils-CO-kYQvn.js";
import { g as Ta } from "./vendor-walletconnect-CFDOEMvA.js";
var Ua = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function iu() {
  if (co) return ie;
  co = 1;
  var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function g(f) {
    if (typeof f == "object" && f !== null) {
      var b = f.$$typeof;
      switch (b) {
        case t:
          switch (f = f.type, f) {
            case e:
            case a:
            case n:
            case u:
            case l:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case o:
                case c:
                case v:
                case d:
                case i:
                  return f;
                default:
                  return b;
              }
          }
        case r:
          return b;
      }
    }
  }
  return ie.ContextConsumer = o, ie.ContextProvider = i, ie.Element = t, ie.ForwardRef = c, ie.Fragment = e, ie.Lazy = v, ie.Memo = d, ie.Portal = r, ie.Profiler = a, ie.StrictMode = n, ie.Suspense = u, ie.SuspenseList = l, ie.isAsyncMode = function() {
    return !1;
  }, ie.isConcurrentMode = function() {
    return !1;
  }, ie.isContextConsumer = function(f) {
    return g(f) === o;
  }, ie.isContextProvider = function(f) {
    return g(f) === i;
  }, ie.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, ie.isForwardRef = function(f) {
    return g(f) === c;
  }, ie.isFragment = function(f) {
    return g(f) === e;
  }, ie.isLazy = function(f) {
    return g(f) === v;
  }, ie.isMemo = function(f) {
    return g(f) === d;
  }, ie.isPortal = function(f) {
    return g(f) === r;
  }, ie.isProfiler = function(f) {
    return g(f) === a;
  }, ie.isStrictMode = function(f) {
    return g(f) === n;
  }, ie.isSuspense = function(f) {
    return g(f) === u;
  }, ie.isSuspenseList = function(f) {
    return g(f) === l;
  }, ie.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === e || f === a || f === n || f === u || f === l || f === y || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === d || f.$$typeof === i || f.$$typeof === o || f.$$typeof === c || f.$$typeof === m || f.getModuleId !== void 0);
  }, ie.typeOf = g, ie;
}
var oe = {}, uo;
function ou() {
  return uo || (uo = 1, z.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m = !1, g = !1, f = !1, b = !1, p = !1, S;
    S = Symbol.for("react.module.reference");
    function x(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === e || W === a || p || W === n || W === u || W === l || b || W === y || m || g || f || typeof W == "object" && W !== null && (W.$$typeof === v || W.$$typeof === d || W.$$typeof === i || W.$$typeof === o || W.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      W.$$typeof === S || W.getModuleId !== void 0));
    }
    function C(W) {
      if (typeof W == "object" && W !== null) {
        var me = W.$$typeof;
        switch (me) {
          case t:
            var Se = W.type;
            switch (Se) {
              case e:
              case a:
              case n:
              case u:
              case l:
                return Se;
              default:
                var He = Se && Se.$$typeof;
                switch (He) {
                  case s:
                  case o:
                  case c:
                  case v:
                  case d:
                  case i:
                    return He;
                  default:
                    return me;
                }
            }
          case r:
            return me;
        }
      }
    }
    var E = o, P = i, R = t, A = c, O = e, I = v, D = d, $ = r, V = a, G = n, F = u, k = l, T = !1, N = !1;
    function _(W) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(W) {
      return N || (N = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(W) {
      return C(W) === o;
    }
    function q(W) {
      return C(W) === i;
    }
    function j(W) {
      return typeof W == "object" && W !== null && W.$$typeof === t;
    }
    function Y(W) {
      return C(W) === c;
    }
    function se(W) {
      return C(W) === e;
    }
    function re(W) {
      return C(W) === v;
    }
    function ke(W) {
      return C(W) === d;
    }
    function ge(W) {
      return C(W) === r;
    }
    function Re(W) {
      return C(W) === a;
    }
    function Ne(W) {
      return C(W) === n;
    }
    function fe(W) {
      return C(W) === u;
    }
    function Ee(W) {
      return C(W) === l;
    }
    oe.ContextConsumer = E, oe.ContextProvider = P, oe.Element = R, oe.ForwardRef = A, oe.Fragment = O, oe.Lazy = I, oe.Memo = D, oe.Portal = $, oe.Profiler = V, oe.StrictMode = G, oe.Suspense = F, oe.SuspenseList = k, oe.isAsyncMode = _, oe.isConcurrentMode = L, oe.isContextConsumer = U, oe.isContextProvider = q, oe.isElement = j, oe.isForwardRef = Y, oe.isFragment = se, oe.isLazy = re, oe.isMemo = ke, oe.isPortal = ge, oe.isProfiler = Re, oe.isStrictMode = Ne, oe.isSuspense = fe, oe.isSuspenseList = Ee, oe.isValidElementType = x, oe.typeOf = C;
  }()), oe;
}
z.env.NODE_ENV === "production" ? Ua.exports = iu() : Ua.exports = ou();
var Br = Ua.exports;
function Kr(t, r) {
  return Kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
    return e.__proto__ = n, e;
  }, Kr(t, r);
}
function Z(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
var Ss = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var r = {}.hasOwnProperty;
    function e() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        s && (i = a(i, n(s)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return e.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var s in i)
        r.call(i, s) && i[s] && (o = a(o, s));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    t.exports ? (e.default = e, t.exports = e) : window.classNames = e;
  })();
})(Ss);
var su = Ss.exports;
const Dt = /* @__PURE__ */ nu(su);
function Un(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [];
  return Te.Children.forEach(t, function(n) {
    n == null && !r.keepEmpty || (Array.isArray(n) ? e = e.concat(Un(n)) : Br.isFragment(n) && n.props ? e = e.concat(Un(n.props.children, r)) : e.push(n));
  }), e;
}
var Ga = {}, Wi = [], cu = function(r) {
  Wi.push(r);
};
function xr(t, r) {
  if (z.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = Wi.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, r);
    e && console.error("Warning: ".concat(e));
  }
}
function uu(t, r) {
  if (z.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = Wi.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, r);
    e && console.warn("Note: ".concat(e));
  }
}
function Cs() {
  Ga = {};
}
function Es(t, r, e) {
  !r && !Ga[e] && (t(!1, e), Ga[e] = !0);
}
function he(t, r) {
  Es(xr, t, r);
}
function lu(t, r) {
  Es(uu, t, r);
}
he.preMessage = cu;
he.resetWarned = Cs;
he.noteOnce = lu;
function Xr(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function fu(t) {
  return t && J(t) === "object" && Xr(t.nativeElement) ? t.nativeElement : Xr(t) ? t : null;
}
function Dn(t) {
  var r = fu(t);
  if (r)
    return r;
  if (t instanceof Te.Component) {
    var e;
    return (e = so.findDOMNode) === null || e === void 0 ? void 0 : e.call(so, t);
  }
  return null;
}
function Bi(t, r, e) {
  var n = h.useRef({});
  return (!("value" in n.current) || e(n.current.condition, r)) && (n.current.value = t(), n.current.condition = r), n.current.value;
}
var qi = function(r, e) {
  typeof r == "function" ? r(e) : J(r) === "object" && r && "current" in r && (r.current = e);
}, ws = function() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  var a = e.filter(Boolean);
  return a.length <= 1 ? a[0] : function(i) {
    e.forEach(function(o) {
      qi(o, i);
    });
  };
}, Ui = function() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  return Bi(function() {
    return ws.apply(void 0, e);
  }, e, function(a, i) {
    return a.length !== i.length || a.every(function(o, s) {
      return o !== i[s];
    });
  });
}, ra = function(r) {
  var e, n, a = Br.isMemo(r) ? r.type.type : r.type;
  return !(typeof a == "function" && !((e = a.prototype) !== null && e !== void 0 && e.render) && a.$$typeof !== Br.ForwardRef || typeof r == "function" && !((n = r.prototype) !== null && n !== void 0 && n.render) && r.$$typeof !== Br.ForwardRef);
};
function lo(t) {
  return /* @__PURE__ */ h.isValidElement(t) && !Br.isFragment(t);
}
Number(h.version.split(".")[0]) >= 19;
var Ka = /* @__PURE__ */ h.createContext(null);
function du(t) {
  var r = t.children, e = t.onBatchResize, n = h.useRef(0), a = h.useRef([]), i = h.useContext(Ka), o = h.useCallback(function(s, c, u) {
    n.current += 1;
    var l = n.current;
    a.current.push({
      size: s,
      element: c,
      data: u
    }), Promise.resolve().then(function() {
      l === n.current && (e == null || e(a.current), a.current = []);
    }), i == null || i(s, c, u);
  }, [e, i]);
  return /* @__PURE__ */ h.createElement(Ka.Provider, {
    value: o
  }, r);
}
var xs = function() {
  if (typeof Map < "u")
    return Map;
  function t(r, e) {
    var n = -1;
    return r.some(function(a, i) {
      return a[0] === e ? (n = i, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function r() {
        this.__entries__ = [];
      }
      return Object.defineProperty(r.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.get = function(e) {
        var n = t(this.__entries__, e), a = this.__entries__[n];
        return a && a[1];
      }, r.prototype.set = function(e, n) {
        var a = t(this.__entries__, e);
        ~a ? this.__entries__[a][1] = n : this.__entries__.push([e, n]);
      }, r.prototype.delete = function(e) {
        var n = this.__entries__, a = t(n, e);
        ~a && n.splice(a, 1);
      }, r.prototype.has = function(e) {
        return !!~t(this.__entries__, e);
      }, r.prototype.clear = function() {
        this.__entries__.splice(0);
      }, r.prototype.forEach = function(e, n) {
        n === void 0 && (n = null);
        for (var a = 0, i = this.__entries__; a < i.length; a++) {
          var o = i[a];
          e.call(n, o[1], o[0]);
        }
      }, r;
    }()
  );
}(), Xa = typeof window < "u" && typeof document < "u" && window.document === document, Gn = function() {
  return typeof Ta < "u" && Ta.Math === Math ? Ta : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), vu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Gn) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), hu = 2;
function gu(t, r) {
  var e = !1, n = !1, a = 0;
  function i() {
    e && (e = !1, t()), n && s();
  }
  function o() {
    vu(i);
  }
  function s() {
    var c = Date.now();
    if (e) {
      if (c - a < hu)
        return;
      n = !0;
    } else
      e = !0, n = !1, setTimeout(o, r);
    a = c;
  }
  return s;
}
var mu = 20, pu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], yu = typeof MutationObserver < "u", bu = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = gu(this.refresh.bind(this), mu);
    }
    return t.prototype.addObserver = function(r) {
      ~this.observers_.indexOf(r) || this.observers_.push(r), this.connected_ || this.connect_();
    }, t.prototype.removeObserver = function(r) {
      var e = this.observers_, n = e.indexOf(r);
      ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_();
    }, t.prototype.refresh = function() {
      var r = this.updateObservers_();
      r && this.refresh();
    }, t.prototype.updateObservers_ = function() {
      var r = this.observers_.filter(function(e) {
        return e.gatherActive(), e.hasActive();
      });
      return r.forEach(function(e) {
        return e.broadcastActive();
      }), r.length > 0;
    }, t.prototype.connect_ = function() {
      !Xa || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), yu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !Xa || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(r) {
      var e = r.propertyName, n = e === void 0 ? "" : e, a = pu.some(function(i) {
        return !!~n.indexOf(i);
      });
      a && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), Ps = function(t, r) {
  for (var e = 0, n = Object.keys(r); e < n.length; e++) {
    var a = n[e];
    Object.defineProperty(t, a, {
      value: r[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return t;
}, Pr = function(t) {
  var r = t && t.ownerDocument && t.ownerDocument.defaultView;
  return r || Gn;
}, ks = na(0, 0, 0, 0);
function Kn(t) {
  return parseFloat(t) || 0;
}
function fo(t) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  return r.reduce(function(n, a) {
    var i = t["border-" + a + "-width"];
    return n + Kn(i);
  }, 0);
}
function Su(t) {
  for (var r = ["top", "right", "bottom", "left"], e = {}, n = 0, a = r; n < a.length; n++) {
    var i = a[n], o = t["padding-" + i];
    e[i] = Kn(o);
  }
  return e;
}
function Cu(t) {
  var r = t.getBBox();
  return na(0, 0, r.width, r.height);
}
function Eu(t) {
  var r = t.clientWidth, e = t.clientHeight;
  if (!r && !e)
    return ks;
  var n = Pr(t).getComputedStyle(t), a = Su(n), i = a.left + a.right, o = a.top + a.bottom, s = Kn(n.width), c = Kn(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== r && (s -= fo(n, "left", "right") + i), Math.round(c + o) !== e && (c -= fo(n, "top", "bottom") + o)), !xu(t)) {
    var u = Math.round(s + i) - r, l = Math.round(c + o) - e;
    Math.abs(u) !== 1 && (s -= u), Math.abs(l) !== 1 && (c -= l);
  }
  return na(a.left, a.top, s, c);
}
var wu = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof Pr(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof Pr(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function xu(t) {
  return t === Pr(t).document.documentElement;
}
function Pu(t) {
  return Xa ? wu(t) ? Cu(t) : Eu(t) : ks;
}
function ku(t) {
  var r = t.x, e = t.y, n = t.width, a = t.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(i.prototype);
  return Ps(o, {
    x: r,
    y: e,
    width: n,
    height: a,
    top: e,
    right: r + n,
    bottom: a + e,
    left: r
  }), o;
}
function na(t, r, e, n) {
  return { x: t, y: r, width: e, height: n };
}
var Fu = (
  /** @class */
  function() {
    function t(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = na(0, 0, 0, 0), this.target = r;
    }
    return t.prototype.isActive = function() {
      var r = Pu(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, t;
  }()
), Mu = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(r, e) {
      var n = ku(e);
      Ps(this, { target: r, contentRect: n });
    }
    return t;
  }()
), Tu = (
  /** @class */
  function() {
    function t(r, e, n) {
      if (this.activeObservations_ = [], this.observations_ = new xs(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = e, this.callbackCtx_ = n;
    }
    return t.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof Pr(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(r) || (e.set(r, new Fu(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof Pr(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(r) && (e.delete(r), e.size || this.controller_.removeObserver(this));
      }
    }, t.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, t.prototype.gatherActive = function() {
      var r = this;
      this.clearActive(), this.observations_.forEach(function(e) {
        e.isActive() && r.activeObservations_.push(e);
      });
    }, t.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var r = this.callbackCtx_, e = this.activeObservations_.map(function(n) {
          return new Mu(n.target, n.broadcastRect());
        });
        this.callback_.call(r, e, r), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), Fs = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new xs(), Ms = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(r) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var e = bu.getInstance(), n = new Tu(r, e, this);
      Fs.set(this, n);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  Ms.prototype[t] = function() {
    var r;
    return (r = Fs.get(this))[t].apply(r, arguments);
  };
});
var Ru = function() {
  return typeof Gn.ResizeObserver < "u" ? Gn.ResizeObserver : Ms;
}(), Lt = /* @__PURE__ */ new Map();
function Ts(t) {
  t.forEach(function(r) {
    var e, n = r.target;
    (e = Lt.get(n)) === null || e === void 0 || e.forEach(function(a) {
      return a(n);
    });
  });
}
var Rs = new Ru(Ts);
z.env.NODE_ENV;
z.env.NODE_ENV;
function Au(t, r) {
  Lt.has(t) || (Lt.set(t, /* @__PURE__ */ new Set()), Rs.observe(t)), Lt.get(t).add(r);
}
function Ou(t, r) {
  Lt.has(t) && (Lt.get(t).delete(r), Lt.get(t).size || (Rs.unobserve(t), Lt.delete(t)));
}
function De(t, r) {
  if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function vo(t, r) {
  for (var e = 0; e < r.length; e++) {
    var n = r[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, ru(n.key), n);
  }
}
function je(t, r, e) {
  return r && vo(t.prototype, r), e && vo(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function nr(t, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), r && Kr(t, r);
}
function Qr(t) {
  return Qr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qr(t);
}
function Gi() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gi = function() {
    return !!t;
  })();
}
function _u(t, r) {
  if (r && (J(r) == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Z(t);
}
function ar(t) {
  var r = Gi();
  return function() {
    var e, n = Qr(t);
    if (r) {
      var a = Qr(this).constructor;
      e = Reflect.construct(n, arguments, a);
    } else e = n.apply(this, arguments);
    return _u(this, e);
  };
}
var Nu = /* @__PURE__ */ function(t) {
  nr(e, t);
  var r = ar(e);
  function e() {
    return De(this, e), r.apply(this, arguments);
  }
  return je(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(h.Component);
function Vu(t, r) {
  var e = t.children, n = t.disabled, a = h.useRef(null), i = h.useRef(null), o = h.useContext(Ka), s = typeof e == "function", c = s ? e(a) : e, u = h.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ h.isValidElement(c) && ra(c), d = l ? c.ref : null, v = Ui(d, a), y = function() {
    var b;
    return Dn(a.current) || // Support `nativeElement` format
    (a.current && J(a.current) === "object" ? Dn((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || Dn(i.current);
  };
  h.useImperativeHandle(r, function() {
    return y();
  });
  var m = h.useRef(t);
  m.current = t;
  var g = h.useCallback(function(f) {
    var b = m.current, p = b.onResize, S = b.data, x = f.getBoundingClientRect(), C = x.width, E = x.height, P = f.offsetWidth, R = f.offsetHeight, A = Math.floor(C), O = Math.floor(E);
    if (u.current.width !== A || u.current.height !== O || u.current.offsetWidth !== P || u.current.offsetHeight !== R) {
      var I = {
        width: A,
        height: O,
        offsetWidth: P,
        offsetHeight: R
      };
      u.current = I;
      var D = P === Math.round(C) ? C : P, $ = R === Math.round(E) ? E : R, V = M(M({}, I), {}, {
        offsetWidth: D,
        offsetHeight: $
      });
      o == null || o(V, f, S), p && Promise.resolve().then(function() {
        p(V, f);
      });
    }
  }, []);
  return h.useEffect(function() {
    var f = y();
    return f && !n && Au(f, g), function() {
      return Ou(f, g);
    };
  }, [a.current, n]), /* @__PURE__ */ h.createElement(Nu, {
    ref: i
  }, l ? /* @__PURE__ */ h.cloneElement(c, {
    ref: v
  }) : c);
}
var As = /* @__PURE__ */ h.forwardRef(Vu);
z.env.NODE_ENV !== "production" && (As.displayName = "SingleObserver");
var Iu = "rc-observer-key";
function $u(t, r) {
  var e = t.children, n = typeof e == "function" ? [e] : Un(e);
  return z.env.NODE_ENV !== "production" && (n.length > 1 ? xr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && xr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, i) {
    var o = (a == null ? void 0 : a.key) || "".concat(Iu, "-").concat(i);
    return /* @__PURE__ */ h.createElement(As, pt({}, t, {
      key: o,
      ref: i === 0 ? r : void 0
    }), a);
  });
}
var aa = /* @__PURE__ */ h.forwardRef($u);
z.env.NODE_ENV !== "production" && (aa.displayName = "ResizeObserver");
aa.Collection = du;
function Oh(t, r) {
  var e = Object.assign({}, t);
  return Array.isArray(r) && r.forEach(function(n) {
    delete e[n];
  }), e;
}
function Qa(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var e = 0, n = Array(r); e < r; e++) n[e] = t[e];
  return n;
}
function Lu(t) {
  if (Array.isArray(t)) return Qa(t);
}
function Os(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Ki(t, r) {
  if (t) {
    if (typeof t == "string") return Qa(t, r);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Qa(t, r) : void 0;
  }
}
function Du() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(t) {
  return Lu(t) || Os(t) || Ki(t) || Du();
}
var _s = function(r) {
  return +setTimeout(r, 16);
}, Ns = function(r) {
  return clearTimeout(r);
};
typeof window < "u" && "requestAnimationFrame" in window && (_s = function(r) {
  return window.requestAnimationFrame(r);
}, Ns = function(r) {
  return window.cancelAnimationFrame(r);
});
var ho = 0, ia = /* @__PURE__ */ new Map();
function Vs(t) {
  ia.delete(t);
}
var Xn = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ho += 1;
  var n = ho;
  function a(i) {
    if (i === 0)
      Vs(n), r();
    else {
      var o = _s(function() {
        a(i - 1);
      });
      ia.set(n, o);
    }
  }
  return a(e), n;
};
Xn.cancel = function(t) {
  var r = ia.get(t);
  return Vs(t), Ns(r);
};
z.env.NODE_ENV !== "production" && (Xn.ids = function() {
  return ia;
});
function Is(t) {
  if (Array.isArray(t)) return t;
}
function ju(t, r) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (e = e.call(t)).next, r === 0) {
        if (Object(e) !== e) return;
        c = !1;
      } else for (; !(c = (n = i.call(e)).done) && (s.push(n.value), s.length !== r); c = !0) ;
    } catch (l) {
      u = !0, a = l;
    } finally {
      try {
        if (!c && e.return != null && (o = e.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function $s() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(t, r) {
  return Is(t) || ju(t, r) || Ki(t, r) || $s();
}
function Yr(t) {
  for (var r = 0, e, n = 0, a = t.length; a >= 4; ++n, a -= 4)
    e = t.charCodeAt(n) & 255 | (t.charCodeAt(++n) & 255) << 8 | (t.charCodeAt(++n) & 255) << 16 | (t.charCodeAt(++n) & 255) << 24, e = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= /* k >>> r: */
    e >>> 24, r = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (t.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (t.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= t.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
function Xe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Hu(t, r) {
  if (!t)
    return !1;
  if (t.contains)
    return t.contains(r);
  for (var e = r; e; ) {
    if (e === t)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
var go = "data-rc-order", mo = "data-rc-priority", zu = "rc-util-key", Ya = /* @__PURE__ */ new Map();
function Ls() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.mark;
  return r ? r.startsWith("data-") ? r : "data-".concat(r) : zu;
}
function oa(t) {
  if (t.attachTo)
    return t.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function Wu(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function Xi(t) {
  return Array.from((Ya.get(t) || t).children).filter(function(r) {
    return r.tagName === "STYLE";
  });
}
function Ds(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Xe())
    return null;
  var e = r.csp, n = r.prepend, a = r.priority, i = a === void 0 ? 0 : a, o = Wu(n), s = o === "prependQueue", c = document.createElement("style");
  c.setAttribute(go, o), s && i && c.setAttribute(mo, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
  var u = oa(r), l = u.firstChild;
  if (n) {
    if (s) {
      var d = (r.styles || Xi(u)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(go)))
          return !1;
        var y = Number(v.getAttribute(mo) || 0);
        return i >= y;
      });
      if (d.length)
        return u.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    u.insertBefore(c, l);
  } else
    u.appendChild(c);
  return c;
}
function js(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = oa(r);
  return (r.styles || Xi(e)).find(function(n) {
    return n.getAttribute(Ls(r)) === t;
  });
}
function Zr(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = js(t, r);
  if (e) {
    var n = oa(r);
    n.removeChild(e);
  }
}
function Bu(t, r) {
  var e = Ya.get(t);
  if (!e || !Hu(document, e)) {
    var n = Ds("", r), a = n.parentNode;
    Ya.set(t, a), t.removeChild(n);
  }
}
function jt(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = oa(e), a = Xi(n), i = M(M({}, e), {}, {
    styles: a
  });
  Bu(n, i);
  var o = js(r, i);
  if (o) {
    var s, c;
    if ((s = i.csp) !== null && s !== void 0 && s.nonce && o.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var u;
      o.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return o.innerHTML !== t && (o.innerHTML = t), o;
  }
  var l = Ds(t, i);
  return l.setAttribute(Ls(i), r), l;
}
function Za(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(i, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(i);
    if (he(!c, "Warning: There may be circular references"), c)
      return !1;
    if (i === o)
      return !0;
    if (e && s > 1)
      return !1;
    n.add(i);
    var u = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(o) || i.length !== o.length)
        return !1;
      for (var l = 0; l < i.length; l++)
        if (!a(i[l], o[l], u))
          return !1;
      return !0;
    }
    if (i && o && J(i) === "object" && J(o) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(o).length ? !1 : d.every(function(v) {
        return a(i[v], o[v], u);
      });
    }
    return !1;
  }
  return a(t, r);
}
var qu = "%";
function Ja(t) {
  return t.join(qu);
}
var Uu = /* @__PURE__ */ function() {
  function t(r) {
    De(this, t), w(this, "instanceId", void 0), w(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = r;
  }
  return je(t, [{
    key: "get",
    value: function(e) {
      return this.opGet(Ja(e));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(e) {
      return this.cache.get(e) || null;
    }
  }, {
    key: "update",
    value: function(e, n) {
      return this.opUpdate(Ja(e), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, n) {
      var a = this.cache.get(e), i = n(a);
      i === null ? this.cache.delete(e) : this.cache.set(e, i);
    }
  }]), t;
}(), kr = "data-token-hash", ht = "data-css-hash", Gu = "data-cache-path", Ut = "__cssinjs_instance__";
function Ku() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var r = document.body.querySelectorAll("style[".concat(ht, "]")) || [], e = document.head.firstChild;
    Array.from(r).forEach(function(a) {
      a[Ut] = a[Ut] || t, a[Ut] === t && document.head.insertBefore(a, e);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(ht, "]"))).forEach(function(a) {
      var i = a.getAttribute(ht);
      if (n[i]) {
        if (a[Ut] === t) {
          var o;
          (o = a.parentNode) === null || o === void 0 || o.removeChild(a);
        }
      } else
        n[i] = !0;
    });
  }
  return new Uu(t);
}
var sa = /* @__PURE__ */ h.createContext({
  hashPriority: "low",
  cache: Ku(),
  defaultCache: !0
});
function Xu(t, r) {
  if (t.length !== r.length)
    return !1;
  for (var e = 0; e < t.length; e++)
    if (t[e] !== r[e])
      return !1;
  return !0;
}
var Qi = /* @__PURE__ */ function() {
  function t() {
    De(this, t), w(this, "cache", void 0), w(this, "keys", void 0), w(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return je(t, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(e) {
      var n, a, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
        map: this.cache
      };
      return e.forEach(function(s) {
        if (!o)
          o = void 0;
        else {
          var c;
          o = (c = o) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(s);
        }
      }), (n = o) !== null && n !== void 0 && n.value && i && (o.value[1] = this.cacheCallTimes++), (a = o) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(e) {
      var n;
      return (n = this.internalGet(e, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(e) {
      return !!this.internalGet(e);
    }
  }, {
    key: "set",
    value: function(e, n) {
      var a = this;
      if (!this.has(e)) {
        if (this.size() + 1 > t.MAX_CACHE_SIZE + t.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(u, l) {
            var d = H(u, 2), v = d[1];
            return a.internalGet(l)[1] < v ? [l, a.internalGet(l)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), o = H(i, 1), s = o[0];
          this.delete(s);
        }
        this.keys.push(e);
      }
      var c = this.cache;
      e.forEach(function(u, l) {
        if (l === e.length - 1)
          c.set(u, {
            value: [n, a.cacheCallTimes++]
          });
        else {
          var d = c.get(u);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(u, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(u).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(e, n) {
      var a = e.get(n[0]);
      if (n.length === 1) {
        var i;
        return a.map ? e.set(n[0], {
          map: a.map
        }) : e.delete(n[0]), (i = a.value) === null || i === void 0 ? void 0 : i[0];
      }
      var o = this.deleteByPath(a.map, n.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && e.delete(n[0]), o;
    }
  }, {
    key: "delete",
    value: function(e) {
      if (this.has(e))
        return this.keys = this.keys.filter(function(n) {
          return !Xu(n, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), t;
}();
w(Qi, "MAX_CACHE_SIZE", 20);
w(Qi, "MAX_CACHE_OFFSET", 5);
var po = 0, Hs = /* @__PURE__ */ function() {
  function t(r) {
    De(this, t), w(this, "derivatives", void 0), w(this, "id", void 0), this.derivatives = Array.isArray(r) ? r : [r], this.id = po, r.length === 0 && xr(r.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), po += 1;
  }
  return je(t, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(n, a) {
        return a(e, n);
      }, void 0);
    }
  }]), t;
}(), Ra = new Qi();
function ei(t) {
  var r = Array.isArray(t) ? t : [t];
  return Ra.has(r) || Ra.set(r, new Hs(r)), Ra.get(r);
}
var Qu = /* @__PURE__ */ new WeakMap(), Aa = {};
function Yu(t, r) {
  for (var e = Qu, n = 0; n < r.length; n += 1) {
    var a = r[n];
    e.has(a) || e.set(a, /* @__PURE__ */ new WeakMap()), e = e.get(a);
  }
  return e.has(Aa) || e.set(Aa, t()), e.get(Aa);
}
var yo = /* @__PURE__ */ new WeakMap();
function qr(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = yo.get(t) || "";
  return e || (Object.keys(t).forEach(function(n) {
    var a = t[n];
    e += n, a instanceof Hs ? e += a.id : a && J(a) === "object" ? e += qr(a, r) : e += a;
  }), r && (e = Yr(e)), yo.set(t, e)), e;
}
function bo(t, r) {
  return Yr("".concat(r, "_").concat(qr(t, !0)));
}
var ti = Xe();
function Qn(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function Yn(t, r, e) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return t;
  var i = M(M({}, n), {}, w(w({}, kr, r), ht, e)), o = Object.keys(i).map(function(s) {
    var c = i[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(o, ">").concat(t, "</style>");
}
var jn = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(r).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Zu = function(r, e, n) {
  return Object.keys(r).length ? ".".concat(e).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(r).map(function(a) {
    var i = H(a, 2), o = i[0], s = i[1];
    return "".concat(o, ":").concat(s, ";");
  }).join(""), "}") : "";
}, zs = function(r, e, n) {
  var a = {}, i = {};
  return Object.entries(r).forEach(function(o) {
    var s, c, u = H(o, 2), l = u[0], d = u[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[l])
      i[l] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[l])) {
      var v, y = jn(l, n == null ? void 0 : n.prefix);
      a[y] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[l]) ? "".concat(d, "px") : String(d), i[l] = "var(".concat(y, ")");
    }
  }), [i, Zu(a, e, {
    scope: n == null ? void 0 : n.scope
  })];
}, So = z.env.NODE_ENV !== "test" && Xe() ? h.useLayoutEffect : h.useEffect, Be = function(r, e) {
  var n = h.useRef(!0);
  So(function() {
    return r(n.current);
  }, e), So(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Co = function(r, e) {
  Be(function(n) {
    if (!n)
      return r();
  }, e);
}, Ju = M({}, ta), Eo = Ju.useInsertionEffect, el = function(r, e, n) {
  h.useMemo(r, n), Be(function() {
    return e(!0);
  }, n);
}, tl = Eo ? function(t, r, e) {
  return Eo(function() {
    return t(), r();
  }, e);
} : el, rl = M({}, ta), nl = rl.useInsertionEffect, al = function(r) {
  var e = [], n = !1;
  function a(i) {
    if (n) {
      z.env.NODE_ENV !== "production" && xr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(i);
  }
  return h.useEffect(function() {
    return n = !1, function() {
      n = !0, e.length && e.forEach(function(i) {
        return i();
      });
    };
  }, r), a;
}, il = function() {
  return function(r) {
    r();
  };
}, ol = typeof nl < "u" ? al : il;
function sl() {
  return !1;
}
var ri = !1;
function cl() {
  return ri;
}
const ul = z.env.NODE_ENV === "production" ? sl : cl;
if (z.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Oa = window;
  if (typeof Oa.webpackHotUpdate == "function") {
    var ll = Oa.webpackHotUpdate;
    Oa.webpackHotUpdate = function() {
      return ri = !0, setTimeout(function() {
        ri = !1;
      }, 0), ll.apply(void 0, arguments);
    };
  }
}
function Yi(t, r, e, n, a) {
  var i = h.useContext(sa), o = i.cache, s = [t].concat(K(r)), c = Ja(s), u = ol([c]), l = ul(), d = function(g) {
    o.opUpdate(c, function(f) {
      var b = f || [void 0, void 0], p = H(b, 2), S = p[0], x = S === void 0 ? 0 : S, C = p[1], E = C;
      z.env.NODE_ENV !== "production" && C && l && (n == null || n(E, l), E = null);
      var P = E || e(), R = [x, P];
      return g ? g(R) : R;
    });
  };
  h.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var v = o.opGet(c);
  z.env.NODE_ENV !== "production" && !v && (d(), v = o.opGet(c));
  var y = v[1];
  return tl(function() {
    a == null || a(y);
  }, function(m) {
    return d(function(g) {
      var f = H(g, 2), b = f[0], p = f[1];
      return m && b === 0 && (a == null || a(y)), [b + 1, p];
    }), function() {
      o.opUpdate(c, function(g) {
        var f = g || [], b = H(f, 2), p = b[0], S = p === void 0 ? 0 : p, x = b[1], C = S - 1;
        return C === 0 ? (u(function() {
          (m || !o.opGet(c)) && (n == null || n(x, !1));
        }), null) : [S - 1, x];
      });
    };
  }, [c]), y;
}
var fl = {}, dl = z.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Jt = /* @__PURE__ */ new Map();
function vl(t) {
  Jt.set(t, (Jt.get(t) || 0) + 1);
}
function hl(t, r) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(kr, '="').concat(t, '"]'));
    e.forEach(function(n) {
      if (n[Ut] === r) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var gl = 0;
function ml(t, r) {
  Jt.set(t, (Jt.get(t) || 0) - 1);
  var e = Array.from(Jt.keys()), n = e.filter(function(a) {
    var i = Jt.get(a) || 0;
    return i <= 0;
  });
  e.length - n.length > gl && n.forEach(function(a) {
    hl(a, r), Jt.delete(a);
  });
}
var pl = function(r, e, n, a) {
  var i = n.getDerivativeToken(r), o = M(M({}, i), e);
  return a && (o = a(o)), o;
}, Ws = "token";
function yl(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = h.useContext(sa), a = n.cache.instanceId, i = n.container, o = e.salt, s = o === void 0 ? "" : o, c = e.override, u = c === void 0 ? fl : c, l = e.formatToken, d = e.getComputedToken, v = e.cssVar, y = Yu(function() {
    return Object.assign.apply(Object, [{}].concat(K(r)));
  }, r), m = qr(y), g = qr(u), f = v ? qr(v) : "", b = Yi(Ws, [s, t.id, m, g, f], function() {
    var p, S = d ? d(y, u, t) : pl(y, u, t, l), x = M({}, S), C = "";
    if (v) {
      var E = zs(S, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), P = H(E, 2);
      S = P[0], C = P[1];
    }
    var R = bo(S, s);
    S._tokenKey = R, x._tokenKey = bo(x, s);
    var A = (p = v == null ? void 0 : v.key) !== null && p !== void 0 ? p : R;
    S._themeKey = A, vl(A);
    var O = "".concat(dl, "-").concat(Yr(R));
    return S._hashId = O, [S, O, x, C, (v == null ? void 0 : v.key) || ""];
  }, function(p) {
    ml(p[0]._themeKey, a);
  }, function(p) {
    var S = H(p, 4), x = S[0], C = S[3];
    if (v && C) {
      var E = jt(C, Yr("css-variables-".concat(x._themeKey)), {
        mark: ht,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      E[Ut] = a, E.setAttribute(kr, x._themeKey);
    }
  });
  return b;
}
var bl = function(r, e, n) {
  var a = H(r, 5), i = a[2], o = a[3], s = a[4], c = n || {}, u = c.plain;
  if (!o)
    return null;
  var l = i._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, y = Yn(o, s, l, v, u);
  return [d, l, y];
}, Sl = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Bs = "comm", qs = "rule", Us = "decl", Cl = "@import", El = "@keyframes", wl = "@layer", Gs = Math.abs, Zi = String.fromCharCode;
function Ks(t) {
  return t.trim();
}
function Hn(t, r, e) {
  return t.replace(r, e);
}
function xl(t, r, e) {
  return t.indexOf(r, e);
}
function Jr(t, r) {
  return t.charCodeAt(r) | 0;
}
function Fr(t, r, e) {
  return t.slice(r, e);
}
function wt(t) {
  return t.length;
}
function Pl(t) {
  return t.length;
}
function Mn(t, r) {
  return r.push(t), t;
}
var ca = 1, Mr = 1, Xs = 0, st = 0, Ce = 0, Rr = "";
function Ji(t, r, e, n, a, i, o, s) {
  return { value: t, root: r, parent: e, type: n, props: a, children: i, line: ca, column: Mr, length: o, return: "", siblings: s };
}
function kl() {
  return Ce;
}
function Fl() {
  return Ce = st > 0 ? Jr(Rr, --st) : 0, Mr--, Ce === 10 && (Mr = 1, ca--), Ce;
}
function gt() {
  return Ce = st < Xs ? Jr(Rr, st++) : 0, Mr++, Ce === 10 && (Mr = 1, ca++), Ce;
}
function Gt() {
  return Jr(Rr, st);
}
function zn() {
  return st;
}
function ua(t, r) {
  return Fr(Rr, t, r);
}
function en(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ml(t) {
  return ca = Mr = 1, Xs = wt(Rr = t), st = 0, [];
}
function Tl(t) {
  return Rr = "", t;
}
function _a(t) {
  return Ks(ua(st - 1, ni(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Rl(t) {
  for (; (Ce = Gt()) && Ce < 33; )
    gt();
  return en(t) > 2 || en(Ce) > 3 ? "" : " ";
}
function Al(t, r) {
  for (; --r && gt() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97); )
    ;
  return ua(t, zn() + (r < 6 && Gt() == 32 && gt() == 32));
}
function ni(t) {
  for (; gt(); )
    switch (Ce) {
      case t:
        return st;
      case 34:
      case 39:
        t !== 34 && t !== 39 && ni(Ce);
        break;
      case 40:
        t === 41 && ni(t);
        break;
      case 92:
        gt();
        break;
    }
  return st;
}
function Ol(t, r) {
  for (; gt() && t + Ce !== 57; )
    if (t + Ce === 84 && Gt() === 47)
      break;
  return "/*" + ua(r, st - 1) + "*" + Zi(t === 47 ? t : gt());
}
function _l(t) {
  for (; !en(Gt()); )
    gt();
  return ua(t, st);
}
function Nl(t) {
  return Tl(Wn("", null, null, null, [""], t = Ml(t), 0, [0], t));
}
function Wn(t, r, e, n, a, i, o, s, c) {
  for (var u = 0, l = 0, d = o, v = 0, y = 0, m = 0, g = 1, f = 1, b = 1, p = 0, S = "", x = a, C = i, E = n, P = S; f; )
    switch (m = p, p = gt()) {
      case 40:
        if (m != 108 && Jr(P, d - 1) == 58) {
          xl(P += Hn(_a(p), "&", "&\f"), "&\f", Gs(u ? s[u - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += _a(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += Rl(m);
        break;
      case 92:
        P += Al(zn() - 1, 7);
        continue;
      case 47:
        switch (Gt()) {
          case 42:
          case 47:
            Mn(Vl(Ol(gt(), zn()), r, e, c), c), (en(m || 1) == 5 || en(Gt() || 1) == 5) && wt(P) && Fr(P, -1, void 0) !== " " && (P += " ");
            break;
          default:
            P += "/";
        }
        break;
      case 123 * g:
        s[u++] = wt(P) * b;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            f = 0;
          case 59 + l:
            b == -1 && (P = Hn(P, /\f/g, "")), y > 0 && (wt(P) - d || g === 0 && m === 47) && Mn(y > 32 ? xo(P + ";", n, e, d - 1, c) : xo(Hn(P, " ", "") + ";", n, e, d - 2, c), c);
            break;
          case 59:
            P += ";";
          default:
            if (Mn(E = wo(P, r, e, u, l, a, s, S, x = [], C = [], d, i), i), p === 123)
              if (l === 0)
                Wn(P, r, E, E, x, i, d, s, C);
              else
                switch (v === 99 && Jr(P, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Wn(t, E, E, n && Mn(wo(t, E, E, 0, 0, a, s, S, a, x = [], d, C), C), a, C, d, s, n ? x : C);
                    break;
                  default:
                    Wn(P, E, E, E, [""], C, 0, s, C);
                }
        }
        u = l = y = 0, g = b = 1, S = P = "", d = o;
        break;
      case 58:
        d = 1 + wt(P), y = m;
      default:
        if (g < 1) {
          if (p == 123)
            --g;
          else if (p == 125 && g++ == 0 && Fl() == 125)
            continue;
        }
        switch (P += Zi(p), p * g) {
          case 38:
            b = l > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[u++] = (wt(P) - 1) * b, b = 1;
            break;
          case 64:
            Gt() === 45 && (P += _a(gt())), v = Gt(), l = d = wt(S = P += _l(zn())), p++;
            break;
          case 45:
            m === 45 && wt(P) == 2 && (g = 0);
        }
    }
  return i;
}
function wo(t, r, e, n, a, i, o, s, c, u, l, d) {
  for (var v = a - 1, y = a === 0 ? i : [""], m = Pl(y), g = 0, f = 0, b = 0; g < n; ++g)
    for (var p = 0, S = Fr(t, v + 1, v = Gs(f = o[g])), x = t; p < m; ++p)
      (x = Ks(f > 0 ? y[p] + " " + S : Hn(S, /&\f/g, y[p]))) && (c[b++] = x);
  return Ji(t, r, e, a === 0 ? qs : s, c, u, l, d);
}
function Vl(t, r, e, n) {
  return Ji(t, r, e, Bs, Zi(kl()), Fr(t, 2, -2), 0, n);
}
function xo(t, r, e, n, a) {
  return Ji(t, r, e, Us, Fr(t, 0, n), Fr(t, n + 1, -1), n, a);
}
function ai(t, r) {
  for (var e = "", n = 0; n < t.length; n++)
    e += r(t[n], n, t, r) || "";
  return e;
}
function Il(t, r, e, n) {
  switch (t.type) {
    case wl:
      if (t.children.length) break;
    case Cl:
    case Us:
      return t.return = t.return || t.value;
    case Bs:
      return "";
    case El:
      return t.return = t.value + "{" + ai(t.children, n) + "}";
    case qs:
      if (!wt(t.value = t.props.join(","))) return "";
  }
  return wt(e = ai(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function Qs(t, r) {
  var e = r.path, n = r.parentSelectors;
  he(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(t).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var $l = function(r, e, n) {
  if (r === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || i.indexOf(e) === -1 && !a.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && Qs("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), n);
  }
}, Ll = function(r, e, n) {
  r === "animation" && n.hashId && e !== "none" && Qs("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Po = "data-ant-cssinjs-cache-path", Ys = "_FILE_STYLE__", rr, Zs = !0;
function Dl() {
  if (!rr && (rr = {}, Xe())) {
    var t = document.createElement("div");
    t.className = Po, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var r = getComputedStyle(t).content || "";
    r = r.replace(/^"/, "").replace(/"$/, ""), r.split(";").forEach(function(a) {
      var i = a.split(":"), o = H(i, 2), s = o[0], c = o[1];
      rr[s] = c;
    });
    var e = document.querySelector("style[".concat(Po, "]"));
    if (e) {
      var n;
      Zs = !1, (n = e.parentNode) === null || n === void 0 || n.removeChild(e);
    }
    document.body.removeChild(t);
  }
}
function jl(t) {
  return Dl(), !!rr[t];
}
function Hl(t) {
  var r = rr[t], e = null;
  if (r && Xe())
    if (Zs)
      e = Ys;
    else {
      var n = document.querySelector("style[".concat(ht, '="').concat(rr[t], '"]'));
      n ? e = n.innerHTML : delete rr[t];
    }
  return [e, r];
}
var Js = "_skip_check_", ec = "_multi_value_";
function Bn(t) {
  var r = ai(Nl(t), Il);
  return r.replace(/\{%%%\:[^;];}/g, ";");
}
function zl(t) {
  return J(t) === "object" && t && (Js in t || ec in t);
}
function ko(t, r, e) {
  if (!r)
    return t;
  var n = ".".concat(r), a = e === "low" ? ":where(".concat(n, ")") : n, i = t.split(",").map(function(o) {
    var s, c = o.trim().split(/\s+/), u = c[0] || "", l = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(l).concat(a).concat(u.slice(l.length)), [u].concat(K(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var Wl = function t(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, i = n.injectHash, o = n.parentSelectors, s = e.hashId, c = e.layer, u = e.path, l = e.hashPriority, d = e.transformers, v = d === void 0 ? [] : d, y = e.linters, m = y === void 0 ? [] : y, g = "", f = {};
  function b(x) {
    var C = x.getName(s);
    if (!f[C]) {
      var E = t(x.style, e, {
        root: !1,
        parentSelectors: o
      }), P = H(E, 1), R = P[0];
      f[C] = "@keyframes ".concat(x.getName(s)).concat(R);
    }
  }
  function p(x) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return x.forEach(function(E) {
      Array.isArray(E) ? p(E, C) : E && C.push(E);
    }), C;
  }
  var S = p(Array.isArray(r) ? r : [r]);
  return S.forEach(function(x) {
    var C = typeof x == "string" && !a ? {} : x;
    if (typeof C == "string")
      g += "".concat(C, `
`);
    else if (C._keyframe)
      b(C);
    else {
      var E = v.reduce(function(P, R) {
        var A;
        return (R == null || (A = R.visit) === null || A === void 0 ? void 0 : A.call(R, P)) || P;
      }, C);
      Object.keys(E).forEach(function(P) {
        var R = E[P];
        if (J(R) === "object" && R && (P !== "animationName" || !R._keyframe) && !zl(R)) {
          var A = !1, O = P.trim(), I = !1;
          (a || i) && s ? O.startsWith("@") ? A = !0 : O === "&" ? O = ko("", s, l) : O = ko(P, s, l) : a && !s && (O === "&" || O === "") && (O = "", I = !0);
          var D = t(R, e, {
            root: I,
            injectHash: A,
            parentSelectors: [].concat(K(o), [O])
          }), $ = H(D, 2), V = $[0], G = $[1];
          f = M(M({}, f), G), g += "".concat(O).concat(V);
        } else {
          let T = function(N, _) {
            z.env.NODE_ENV !== "production" && (J(R) !== "object" || !(R != null && R[Js])) && [$l, Ll].concat(K(m)).forEach(function(q) {
              return q(N, _, {
                path: u,
                hashId: s,
                parentSelectors: o
              });
            });
            var L = N.replace(/[A-Z]/g, function(q) {
              return "-".concat(q.toLowerCase());
            }), U = _;
            !Sl[N] && typeof U == "number" && U !== 0 && (U = "".concat(U, "px")), N === "animationName" && _ !== null && _ !== void 0 && _._keyframe && (b(_), U = _.getName(s)), g += "".concat(L, ":").concat(U, ";");
          };
          var F, k = (F = R == null ? void 0 : R.value) !== null && F !== void 0 ? F : R;
          J(R) === "object" && R !== null && R !== void 0 && R[ec] && Array.isArray(k) ? k.forEach(function(N) {
            T(P, N);
          }) : T(P, k);
        }
      });
    }
  }), a ? c && (g = "@layer ".concat(c.name, " {").concat(g, "}"), c.dependencies && (f["@layer ".concat(c.name)] = c.dependencies.map(function(x) {
    return "@layer ".concat(x, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, f];
};
function tc(t, r) {
  return Yr("".concat(t.join("%")).concat(r));
}
function Bl() {
  return null;
}
var rc = "style";
function ii(t, r) {
  var e = t.token, n = t.path, a = t.hashId, i = t.layer, o = t.nonce, s = t.clientOnly, c = t.order, u = c === void 0 ? 0 : c, l = h.useContext(sa), d = l.autoClear, v = l.mock, y = l.defaultCache, m = l.hashPriority, g = l.container, f = l.ssrInline, b = l.transformers, p = l.linters, S = l.cache, x = l.layer, C = e._tokenKey, E = [C];
  x && E.push("layer"), E.push.apply(E, K(n));
  var P = ti;
  z.env.NODE_ENV !== "production" && v !== void 0 && (P = v === "client");
  var R = Yi(
    rc,
    E,
    // Create cache if needed
    function() {
      var $ = E.join("|");
      if (jl($)) {
        var V = Hl($), G = H(V, 2), F = G[0], k = G[1];
        if (F)
          return [F, C, k, {}, s, u];
      }
      var T = r(), N = Wl(T, {
        hashId: a,
        hashPriority: m,
        layer: x ? i : void 0,
        path: n.join("-"),
        transformers: b,
        linters: p
      }), _ = H(N, 2), L = _[0], U = _[1], q = Bn(L), j = tc(E, q);
      return [q, C, j, U, s, u];
    },
    // Remove cache if no need
    function($, V) {
      var G = H($, 3), F = G[2];
      (V || d) && ti && Zr(F, {
        mark: ht
      });
    },
    // Effect: Inject style here
    function($) {
      var V = H($, 4), G = V[0];
      V[1];
      var F = V[2], k = V[3];
      if (P && G !== Ys) {
        var T = {
          mark: ht,
          prepend: x ? !1 : "queue",
          attachTo: g,
          priority: u
        }, N = typeof o == "function" ? o() : o;
        N && (T.csp = {
          nonce: N
        });
        var _ = [], L = [];
        Object.keys(k).forEach(function(q) {
          q.startsWith("@layer") ? _.push(q) : L.push(q);
        }), _.forEach(function(q) {
          jt(Bn(k[q]), "_layer-".concat(q), M(M({}, T), {}, {
            prepend: !0
          }));
        });
        var U = jt(G, F, T);
        U[Ut] = S.instanceId, U.setAttribute(kr, C), z.env.NODE_ENV !== "production" && U.setAttribute(Gu, E.join("|")), L.forEach(function(q) {
          jt(Bn(k[q]), "_effect-".concat(q), T);
        });
      }
    }
  ), A = H(R, 3), O = A[0], I = A[1], D = A[2];
  return function($) {
    var V;
    return !f || P || !y ? V = /* @__PURE__ */ h.createElement(Bl, null) : V = /* @__PURE__ */ h.createElement("style", pt({}, w(w({}, kr, I), ht, D), {
      dangerouslySetInnerHTML: {
        __html: O
      }
    })), /* @__PURE__ */ h.createElement(h.Fragment, null, V, $);
  };
}
var ql = function(r, e, n) {
  var a = H(r, 6), i = a[0], o = a[1], s = a[2], c = a[3], u = a[4], l = a[5], d = n || {}, v = d.plain;
  if (u)
    return null;
  var y = i, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  };
  return y = Yn(i, o, s, m, v), c && Object.keys(c).forEach(function(g) {
    if (!e[g]) {
      e[g] = !0;
      var f = Bn(c[g]), b = Yn(f, o, "_effect-".concat(g), m, v);
      g.startsWith("@layer") ? y = b + y : y += b;
    }
  }), [l, s, y];
}, nc = "cssVar", Ul = function(r, e) {
  var n = r.key, a = r.prefix, i = r.unitless, o = r.ignore, s = r.token, c = r.scope, u = c === void 0 ? "" : c, l = h.useContext(sa), d = l.cache.instanceId, v = l.container, y = s._tokenKey, m = [].concat(K(r.path), [n, u, y]), g = Yi(nc, m, function() {
    var f = e(), b = zs(f, n, {
      prefix: a,
      unitless: i,
      ignore: o,
      scope: u
    }), p = H(b, 2), S = p[0], x = p[1], C = tc(m, x);
    return [S, x, C, n];
  }, function(f) {
    var b = H(f, 3), p = b[2];
    ti && Zr(p, {
      mark: ht
    });
  }, function(f) {
    var b = H(f, 3), p = b[1], S = b[2];
    if (p) {
      var x = jt(p, S, {
        mark: ht,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      x[Ut] = d, x.setAttribute(kr, n);
    }
  });
  return g;
}, Gl = function(r, e, n) {
  var a = H(r, 4), i = a[1], o = a[2], s = a[3], c = n || {}, u = c.plain;
  if (!i)
    return null;
  var l = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  }, v = Yn(i, s, o, d, u);
  return [l, o, v];
};
w(w(w({}, rc, ql), Ws, bl), nc, Gl);
var _h = /* @__PURE__ */ function() {
  function t(r, e) {
    De(this, t), w(this, "name", void 0), w(this, "style", void 0), w(this, "_keyframe", !0), this.name = r, this.style = e;
  }
  return je(t, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
function gr(t) {
  return t.notSplit = !0, t;
}
gr(["borderTop", "borderBottom"]), gr(["borderTop"]), gr(["borderBottom"]), gr(["borderLeft", "borderRight"]), gr(["borderLeft"]), gr(["borderRight"]);
var eo = /* @__PURE__ */ h.createContext({});
function Kl(t) {
  return Is(t) || Os(t) || Ki(t) || $s();
}
function xt(t, r) {
  for (var e = t, n = 0; n < r.length; n += 1) {
    if (e == null)
      return;
    e = e[r[n]];
  }
  return e;
}
function ac(t, r, e, n) {
  if (!r.length)
    return e;
  var a = Kl(r), i = a[0], o = a.slice(1), s;
  return !t && typeof i == "number" ? s = [] : Array.isArray(t) ? s = K(t) : s = M({}, t), n && e === void 0 && o.length === 1 ? delete s[i][o[0]] : s[i] = ac(s[i], o, e, n), s;
}
function dt(t, r, e) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return r.length && n && e === void 0 && !xt(t, r.slice(0, -1)) ? t : ac(t, r, e, n);
}
function Xl(t) {
  return J(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function Fo(t) {
  return Array.isArray(t) ? [] : {};
}
var Ql = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Sr() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  var n = Fo(r[0]);
  return r.forEach(function(a) {
    function i(o, s) {
      var c = new Set(s), u = xt(a, o), l = Array.isArray(u);
      if (l || Xl(u)) {
        if (!c.has(u)) {
          c.add(u);
          var d = xt(n, o);
          l ? n = dt(n, o, []) : (!d || J(d) !== "object") && (n = dt(n, o, Fo(u))), Ql(u).forEach(function(v) {
            i([].concat(K(o), [v]), c);
          });
        }
      } else
        n = dt(n, o, u);
    }
    i([]);
  }), n;
}
function ic() {
}
let It = null;
function Yl() {
  It = null, Cs();
}
let to = ic;
z.env.NODE_ENV !== "production" && (to = (t, r, e) => {
  he(t, `[antd: ${r}] ${e}`), z.env.NODE_ENV === "test" && Yl();
});
const oc = /* @__PURE__ */ h.createContext({}), cn = z.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: r
  } = h.useContext(oc), e = (n, a, i) => {
    if (!n)
      if (r === !1 && a === "deprecated") {
        const o = It;
        It || (It = {}), It[t] = It[t] || [], It[t].includes(i || "") || It[t].push(i || ""), o || console.warn("[antd] There exists deprecated usage in your code:", It);
      } else
        z.env.NODE_ENV !== "production" && to(n, t, i);
  };
  return e.deprecated = (n, a, i, o) => {
    e(n, "deprecated", `\`${a}\` is deprecated. Please use \`${i}\` instead.${o ? ` ${o}` : ""}`);
  }, e;
} : () => {
  const t = () => {
  };
  return t.deprecated = ic, t;
}, la = to, Zl = /* @__PURE__ */ h.createContext(void 0);
var Jl = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, ef = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, tf = M(M({}, ef), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const sc = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Mo = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, tf),
  timePickerLocale: Object.assign({}, sc)
}, Je = "${label} is not a valid ${type}", fa = {
  locale: "en",
  Pagination: Jl,
  DatePicker: Mo,
  TimePicker: sc,
  Calendar: Mo,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Je,
        method: Je,
        array: Je,
        object: Je,
        number: Je,
        date: Je,
        boolean: Je,
        integer: Je,
        float: Je,
        regexp: Je,
        email: Je,
        url: Je,
        hex: Je
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, fa.Modal);
let qn = [];
const To = () => qn.reduce((t, r) => Object.assign(Object.assign({}, t), r), fa.Modal);
function rf(t) {
  if (t) {
    const r = Object.assign({}, t);
    return qn.push(r), To(), () => {
      qn = qn.filter((e) => e !== r), To();
    };
  }
  Object.assign({}, fa.Modal);
}
const cc = /* @__PURE__ */ h.createContext(void 0), uc = "internalMark", lc = (t) => {
  const {
    locale: r = {},
    children: e,
    _ANT_MARK__: n
  } = t;
  if (z.env.NODE_ENV !== "production") {
    const i = cn("LocaleProvider");
    z.env.NODE_ENV !== "production" && i(n === uc, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  h.useEffect(() => rf(r == null ? void 0 : r.Modal), [r]);
  const a = h.useMemo(() => Object.assign(Object.assign({}, r), {
    exist: !0
  }), [r]);
  return /* @__PURE__ */ h.createElement(cc.Provider, {
    value: a
  }, e);
};
z.env.NODE_ENV !== "production" && (lc.displayName = "LocaleProvider");
function _e(t, r) {
  nf(t) && (t = "100%");
  var e = af(t);
  return t = r === 360 ? t : Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(String(t * r), 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : (r === 360 ? t = (t < 0 ? t % r + r : t % r) / parseFloat(String(r)) : t = t % r / parseFloat(String(r)), t);
}
function Tn(t) {
  return Math.min(1, Math.max(0, t));
}
function nf(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function af(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function fc(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function Rn(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function er(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function of(t, r, e) {
  return {
    r: _e(t, 255) * 255,
    g: _e(r, 255) * 255,
    b: _e(e, 255) * 255
  };
}
function Ro(t, r, e) {
  t = _e(t, 255), r = _e(r, 255), e = _e(e, 255);
  var n = Math.max(t, r, e), a = Math.min(t, r, e), i = 0, o = 0, s = (n + a) / 2;
  if (n === a)
    o = 0, i = 0;
  else {
    var c = n - a;
    switch (o = s > 0.5 ? c / (2 - n - a) : c / (n + a), n) {
      case t:
        i = (r - e) / c + (r < e ? 6 : 0);
        break;
      case r:
        i = (e - t) / c + 2;
        break;
      case e:
        i = (t - r) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: o, l: s };
}
function Na(t, r, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + (r - t) * (6 * e) : e < 1 / 2 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t;
}
function sf(t, r, e) {
  var n, a, i;
  if (t = _e(t, 360), r = _e(r, 100), e = _e(e, 100), r === 0)
    a = e, i = e, n = e;
  else {
    var o = e < 0.5 ? e * (1 + r) : e + r - e * r, s = 2 * e - o;
    n = Na(s, o, t + 1 / 3), a = Na(s, o, t), i = Na(s, o, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: i * 255 };
}
function oi(t, r, e) {
  t = _e(t, 255), r = _e(r, 255), e = _e(e, 255);
  var n = Math.max(t, r, e), a = Math.min(t, r, e), i = 0, o = n, s = n - a, c = n === 0 ? 0 : s / n;
  if (n === a)
    i = 0;
  else {
    switch (n) {
      case t:
        i = (r - e) / s + (r < e ? 6 : 0);
        break;
      case r:
        i = (e - t) / s + 2;
        break;
      case e:
        i = (t - r) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, v: o };
}
function cf(t, r, e) {
  t = _e(t, 360) * 6, r = _e(r, 100), e = _e(e, 100);
  var n = Math.floor(t), a = t - n, i = e * (1 - r), o = e * (1 - a * r), s = e * (1 - (1 - a) * r), c = n % 6, u = [e, o, i, i, s, e][c], l = [s, e, e, o, i, i][c], d = [i, i, s, e, e, o][c];
  return { r: u * 255, g: l * 255, b: d * 255 };
}
function si(t, r, e, n) {
  var a = [
    er(Math.round(t).toString(16)),
    er(Math.round(r).toString(16)),
    er(Math.round(e).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function uf(t, r, e, n, a) {
  var i = [
    er(Math.round(t).toString(16)),
    er(Math.round(r).toString(16)),
    er(Math.round(e).toString(16)),
    er(lf(n))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function lf(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function Ao(t) {
  return tt(t) / 255;
}
function tt(t) {
  return parseInt(t, 16);
}
function ff(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var ci = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function br(t) {
  var r = { r: 0, g: 0, b: 0 }, e = 1, n = null, a = null, i = null, o = !1, s = !1;
  return typeof t == "string" && (t = hf(t)), typeof t == "object" && (Vt(t.r) && Vt(t.g) && Vt(t.b) ? (r = of(t.r, t.g, t.b), o = !0, s = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : Vt(t.h) && Vt(t.s) && Vt(t.v) ? (n = Rn(t.s), a = Rn(t.v), r = cf(t.h, n, a), o = !0, s = "hsv") : Vt(t.h) && Vt(t.s) && Vt(t.l) && (n = Rn(t.s), i = Rn(t.l), r = sf(t.h, n, i), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (e = t.a)), e = fc(e), {
    ok: o,
    format: t.format || s,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: e
  };
}
var df = "[-\\+]?\\d+%?", vf = "[-\\+]?\\d*\\.\\d+%?", Kt = "(?:".concat(vf, ")|(?:").concat(df, ")"), Va = "[\\s|\\(]+(".concat(Kt, ")[,|\\s]+(").concat(Kt, ")[,|\\s]+(").concat(Kt, ")\\s*\\)?"), Ia = "[\\s|\\(]+(".concat(Kt, ")[,|\\s]+(").concat(Kt, ")[,|\\s]+(").concat(Kt, ")[,|\\s]+(").concat(Kt, ")\\s*\\)?"), ft = {
  CSS_UNIT: new RegExp(Kt),
  rgb: new RegExp("rgb" + Va),
  rgba: new RegExp("rgba" + Ia),
  hsl: new RegExp("hsl" + Va),
  hsla: new RegExp("hsla" + Ia),
  hsv: new RegExp("hsv" + Va),
  hsva: new RegExp("hsva" + Ia),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function hf(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var r = !1;
  if (ci[t])
    t = ci[t], r = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var e = ft.rgb.exec(t);
  return e ? { r: e[1], g: e[2], b: e[3] } : (e = ft.rgba.exec(t), e ? { r: e[1], g: e[2], b: e[3], a: e[4] } : (e = ft.hsl.exec(t), e ? { h: e[1], s: e[2], l: e[3] } : (e = ft.hsla.exec(t), e ? { h: e[1], s: e[2], l: e[3], a: e[4] } : (e = ft.hsv.exec(t), e ? { h: e[1], s: e[2], v: e[3] } : (e = ft.hsva.exec(t), e ? { h: e[1], s: e[2], v: e[3], a: e[4] } : (e = ft.hex8.exec(t), e ? {
    r: tt(e[1]),
    g: tt(e[2]),
    b: tt(e[3]),
    a: Ao(e[4]),
    format: r ? "name" : "hex8"
  } : (e = ft.hex6.exec(t), e ? {
    r: tt(e[1]),
    g: tt(e[2]),
    b: tt(e[3]),
    format: r ? "name" : "hex"
  } : (e = ft.hex4.exec(t), e ? {
    r: tt(e[1] + e[1]),
    g: tt(e[2] + e[2]),
    b: tt(e[3] + e[3]),
    a: Ao(e[4] + e[4]),
    format: r ? "name" : "hex8"
  } : (e = ft.hex3.exec(t), e ? {
    r: tt(e[1] + e[1]),
    g: tt(e[2] + e[2]),
    b: tt(e[3] + e[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function Vt(t) {
  return !!ft.CSS_UNIT.exec(String(t));
}
var qe = (
  /** @class */
  function() {
    function t(r, e) {
      r === void 0 && (r = ""), e === void 0 && (e = {});
      var n;
      if (r instanceof t)
        return r;
      typeof r == "number" && (r = ff(r)), this.originalInput = r;
      var a = br(r);
      this.originalInput = r, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = e.format) !== null && n !== void 0 ? n : a.format, this.gradientType = e.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var r = this.toRgb();
      return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var r = this.toRgb(), e, n, a, i = r.r / 255, o = r.g / 255, s = r.b / 255;
      return i <= 0.03928 ? e = i / 12.92 : e = Math.pow((i + 0.055) / 1.055, 2.4), o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * e + 0.7152 * n + 0.0722 * a;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(r) {
      return this.a = fc(r), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var r = this.toHsl().s;
      return r === 0;
    }, t.prototype.toHsv = function() {
      var r = oi(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, v: r.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var r = oi(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100), a = Math.round(r.v * 100);
      return this.a === 1 ? "hsv(".concat(e, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(e, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var r = Ro(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, l: r.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var r = Ro(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100), a = Math.round(r.l * 100);
      return this.a === 1 ? "hsl(".concat(e, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(e, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(r) {
      return r === void 0 && (r = !1), si(this.r, this.g, this.b, r);
    }, t.prototype.toHexString = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex(r);
    }, t.prototype.toHex8 = function(r) {
      return r === void 0 && (r = !1), uf(this.r, this.g, this.b, this.a, r);
    }, t.prototype.toHex8String = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex8(r);
    }, t.prototype.toHexShortString = function(r) {
      return r === void 0 && (r = !1), this.a === 1 ? this.toHexString(r) : this.toHex8String(r);
    }, t.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, t.prototype.toRgbString = function() {
      var r = Math.round(this.r), e = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(r, ", ").concat(e, ", ").concat(n, ")") : "rgba(".concat(r, ", ").concat(e, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, t.prototype.toPercentageRgb = function() {
      var r = function(e) {
        return "".concat(Math.round(_e(e, 255) * 100), "%");
      };
      return {
        r: r(this.r),
        g: r(this.g),
        b: r(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var r = function(e) {
        return Math.round(_e(e, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%)") : "rgba(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var r = "#" + si(this.r, this.g, this.b, !1), e = 0, n = Object.entries(ci); e < n.length; e++) {
        var a = n[e], i = a[0], o = a[1];
        if (r === o)
          return i;
      }
      return !1;
    }, t.prototype.toString = function(r) {
      var e = !!r;
      r = r ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, i = !e && a && (r.startsWith("hex") || r === "name");
      return i ? r === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (r === "rgb" && (n = this.toRgbString()), r === "prgb" && (n = this.toPercentageRgbString()), (r === "hex" || r === "hex6") && (n = this.toHexString()), r === "hex3" && (n = this.toHexString(!0)), r === "hex4" && (n = this.toHex8String(!0)), r === "hex8" && (n = this.toHex8String()), r === "name" && (n = this.toName()), r === "hsl" && (n = this.toHslString()), r === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.l += r / 100, e.l = Tn(e.l), new t(e);
    }, t.prototype.brighten = function(r) {
      r === void 0 && (r = 10);
      var e = this.toRgb();
      return e.r = Math.max(0, Math.min(255, e.r - Math.round(255 * -(r / 100)))), e.g = Math.max(0, Math.min(255, e.g - Math.round(255 * -(r / 100)))), e.b = Math.max(0, Math.min(255, e.b - Math.round(255 * -(r / 100)))), new t(e);
    }, t.prototype.darken = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.l -= r / 100, e.l = Tn(e.l), new t(e);
    }, t.prototype.tint = function(r) {
      return r === void 0 && (r = 10), this.mix("white", r);
    }, t.prototype.shade = function(r) {
      return r === void 0 && (r = 10), this.mix("black", r);
    }, t.prototype.desaturate = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.s -= r / 100, e.s = Tn(e.s), new t(e);
    }, t.prototype.saturate = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.s += r / 100, e.s = Tn(e.s), new t(e);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(r) {
      var e = this.toHsl(), n = (e.h + r) % 360;
      return e.h = n < 0 ? 360 + n : n, new t(e);
    }, t.prototype.mix = function(r, e) {
      e === void 0 && (e = 50);
      var n = this.toRgb(), a = new t(r).toRgb(), i = e / 100, o = {
        r: (a.r - n.r) * i + n.r,
        g: (a.g - n.g) * i + n.g,
        b: (a.b - n.b) * i + n.b,
        a: (a.a - n.a) * i + n.a
      };
      return new t(o);
    }, t.prototype.analogous = function(r, e) {
      r === void 0 && (r = 6), e === void 0 && (e = 30);
      var n = this.toHsl(), a = 360 / e, i = [this];
      for (n.h = (n.h - (a * r >> 1) + 720) % 360; --r; )
        n.h = (n.h + a) % 360, i.push(new t(n));
      return i;
    }, t.prototype.complement = function() {
      var r = this.toHsl();
      return r.h = (r.h + 180) % 360, new t(r);
    }, t.prototype.monochromatic = function(r) {
      r === void 0 && (r = 6);
      for (var e = this.toHsv(), n = e.h, a = e.s, i = e.v, o = [], s = 1 / r; r--; )
        o.push(new t({ h: n, s: a, v: i })), i = (i + s) % 1;
      return o;
    }, t.prototype.splitcomplement = function() {
      var r = this.toHsl(), e = r.h;
      return [
        this,
        new t({ h: (e + 72) % 360, s: r.s, l: r.l }),
        new t({ h: (e + 216) % 360, s: r.s, l: r.l })
      ];
    }, t.prototype.onBackground = function(r) {
      var e = this.toRgb(), n = new t(r).toRgb(), a = e.a + n.a * (1 - e.a);
      return new t({
        r: (e.r * e.a + n.r * n.a * (1 - e.a)) / a,
        g: (e.g * e.a + n.g * n.a * (1 - e.a)) / a,
        b: (e.b * e.a + n.b * n.a * (1 - e.a)) / a,
        a
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(r) {
      for (var e = this.toHsl(), n = e.h, a = [this], i = 360 / r, o = 1; o < r; o++)
        a.push(new t({ h: (n + o * i) % 360, s: e.s, l: e.l }));
      return a;
    }, t.prototype.equals = function(r) {
      return this.toRgbString() === new t(r).toRgbString();
    }, t;
  }()
), An = 2, Oo = 0.16, gf = 0.05, mf = 0.05, pf = 0.15, dc = 5, vc = 4, yf = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function _o(t) {
  var r = t.r, e = t.g, n = t.b, a = oi(r, e, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function On(t) {
  var r = t.r, e = t.g, n = t.b;
  return "#".concat(si(r, e, n, !1));
}
function bf(t, r, e) {
  var n = e / 100, a = {
    r: (r.r - t.r) * n + t.r,
    g: (r.g - t.g) * n + t.g,
    b: (r.b - t.b) * n + t.b
  };
  return a;
}
function No(t, r, e) {
  var n;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n = e ? Math.round(t.h) - An * r : Math.round(t.h) + An * r : n = e ? Math.round(t.h) + An * r : Math.round(t.h) - An * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Vo(t, r, e) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var n;
  return e ? n = t.s - Oo * r : r === vc ? n = t.s + Oo : n = t.s + gf * r, n > 1 && (n = 1), e && r === dc && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Io(t, r, e) {
  var n;
  return e ? n = t.v + mf * r : n = t.v - pf * r, n > 1 && (n = 1), Number(n.toFixed(2));
}
function tn(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], n = br(t), a = dc; a > 0; a -= 1) {
    var i = _o(n), o = On(br({
      h: No(i, a, !0),
      s: Vo(i, a, !0),
      v: Io(i, a, !0)
    }));
    e.push(o);
  }
  e.push(On(n));
  for (var s = 1; s <= vc; s += 1) {
    var c = _o(n), u = On(br({
      h: No(c, s),
      s: Vo(c, s),
      v: Io(c, s)
    }));
    e.push(u);
  }
  return r.theme === "dark" ? yf.map(function(l) {
    var d = l.index, v = l.opacity, y = On(bf(br(r.backgroundColor || "#141414"), br(e[d]), v * 100));
    return y;
  }) : e;
}
var $a = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ui = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ui.primary = ui[5];
var li = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
li.primary = li[5];
var fi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
fi.primary = fi[5];
var di = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
di.primary = di[5];
var vi = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
vi.primary = vi[5];
var hi = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
hi.primary = hi[5];
var gi = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
gi.primary = gi[5];
var mi = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
mi.primary = mi[5];
var Zn = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Zn.primary = Zn[5];
var pi = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
pi.primary = pi[5];
var yi = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
yi.primary = yi[5];
var bi = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
bi.primary = bi[5];
var Si = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Si.primary = Si[5];
var La = {
  red: ui,
  volcano: li,
  orange: fi,
  gold: di,
  yellow: vi,
  lime: hi,
  green: gi,
  cyan: mi,
  blue: Zn,
  geekblue: pi,
  purple: yi,
  magenta: bi,
  grey: Si
};
const hc = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, rn = Object.assign(Object.assign({}, hc), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function Sf(t, r) {
  let {
    generateColorPalettes: e,
    generateNeutralColorPalettes: n
  } = r;
  const {
    colorSuccess: a,
    colorWarning: i,
    colorError: o,
    colorInfo: s,
    colorPrimary: c,
    colorBgBase: u,
    colorTextBase: l
  } = t, d = e(c), v = e(a), y = e(i), m = e(o), g = e(s), f = n(u, l), b = t.colorLink || t.colorInfo, p = e(b), S = new qe(m[1]).mix(new qe(m[3]), 50).toHexString();
  return Object.assign(Object.assign({}, f), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBgFilledHover: S,
    colorErrorBgActive: m[3],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: y[1],
    colorWarningBgHover: y[2],
    colorWarningBorder: y[3],
    colorWarningBorderHover: y[4],
    colorWarningHover: y[4],
    colorWarning: y[6],
    colorWarningActive: y[7],
    colorWarningTextHover: y[8],
    colorWarningText: y[9],
    colorWarningTextActive: y[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: p[4],
    colorLink: p[6],
    colorLinkActive: p[7],
    colorBgMask: new qe("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Cf = (t) => {
  let r = t, e = t, n = t, a = t;
  return t < 6 && t >= 5 ? r = t + 1 : t < 16 && t >= 6 ? r = t + 2 : t >= 16 && (r = 16), t < 7 && t >= 5 ? e = 4 : t < 8 && t >= 7 ? e = 5 : t < 14 && t >= 8 ? e = 6 : t < 16 && t >= 14 ? e = 7 : t >= 16 && (e = 8), t < 6 && t >= 2 ? n = 1 : t >= 6 && (n = 2), t > 4 && t < 8 ? a = 4 : t >= 8 && (a = 6), {
    borderRadius: t,
    borderRadiusXS: n,
    borderRadiusSM: e,
    borderRadiusLG: r,
    borderRadiusOuter: a
  };
};
function Ef(t) {
  const {
    motionUnit: r,
    motionBase: e,
    borderRadius: n,
    lineWidth: a
  } = t;
  return Object.assign({
    // motion
    motionDurationFast: `${(e + r).toFixed(1)}s`,
    motionDurationMid: `${(e + r * 2).toFixed(1)}s`,
    motionDurationSlow: `${(e + r * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, Cf(n));
}
const wf = (t) => {
  const {
    controlHeight: r
  } = t;
  return {
    controlHeightSM: r * 0.75,
    controlHeightXS: r * 0.5,
    controlHeightLG: r * 1.25
  };
};
function xf(t) {
  return (t + 8) / t;
}
function Pf(t) {
  const r = new Array(10).fill(null).map((e, n) => {
    const a = n - 1, i = t * Math.pow(Math.E, a / 5), o = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(o / 2) * 2;
  });
  return r[1] = t, r.map((e) => ({
    size: e,
    lineHeight: xf(e)
  }));
}
const kf = (t) => {
  const r = Pf(t), e = r.map((l) => l.size), n = r.map((l) => l.lineHeight), a = e[1], i = e[0], o = e[2], s = n[1], c = n[0], u = n[2];
  return {
    fontSizeSM: i,
    fontSize: a,
    fontSizeLG: o,
    fontSizeXL: e[3],
    fontSizeHeading1: e[6],
    fontSizeHeading2: e[5],
    fontSizeHeading3: e[4],
    fontSizeHeading4: e[3],
    fontSizeHeading5: e[2],
    lineHeight: s,
    lineHeightLG: u,
    lineHeightSM: c,
    fontHeight: Math.round(s * a),
    fontHeightLG: Math.round(u * o),
    fontHeightSM: Math.round(c * i),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function Ff(t) {
  const {
    sizeUnit: r,
    sizeStep: e
  } = t;
  return {
    sizeXXL: r * (e + 8),
    // 48
    sizeXL: r * (e + 4),
    // 32
    sizeLG: r * (e + 2),
    // 24
    sizeMD: r * (e + 1),
    // 20
    sizeMS: r * e,
    // 16
    size: r * e,
    // 16
    sizeSM: r * (e - 1),
    // 12
    sizeXS: r * (e - 2),
    // 8
    sizeXXS: r * (e - 3)
    // 4
  };
}
const at = (t, r) => new qe(t).setAlpha(r).toRgbString(), Hr = (t, r) => new qe(t).darken(r).toHexString(), Mf = (t) => {
  const r = tn(t);
  return {
    1: r[0],
    2: r[1],
    3: r[2],
    4: r[3],
    5: r[4],
    6: r[5],
    7: r[6],
    8: r[4],
    9: r[5],
    10: r[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Tf = (t, r) => {
  const e = t || "#fff", n = r || "#000";
  return {
    colorBgBase: e,
    colorTextBase: n,
    colorText: at(n, 0.88),
    colorTextSecondary: at(n, 0.65),
    colorTextTertiary: at(n, 0.45),
    colorTextQuaternary: at(n, 0.25),
    colorFill: at(n, 0.15),
    colorFillSecondary: at(n, 0.06),
    colorFillTertiary: at(n, 0.04),
    colorFillQuaternary: at(n, 0.02),
    colorBgSolid: at(n, 1),
    colorBgSolidHover: at(n, 0.75),
    colorBgSolidActive: at(n, 0.95),
    colorBgLayout: Hr(e, 4),
    colorBgContainer: Hr(e, 0),
    colorBgElevated: Hr(e, 0),
    colorBgSpotlight: at(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Hr(e, 15),
    colorBorderSecondary: Hr(e, 6)
  };
};
function Rf(t) {
  $a.pink = $a.magenta, La.pink = La.magenta;
  const r = Object.keys(hc).map((e) => {
    const n = t[e] === $a[e] ? La[e] : tn(t[e]);
    return new Array(10).fill(1).reduce((a, i, o) => (a[`${e}-${o + 1}`] = n[o], a[`${e}${o + 1}`] = n[o], a), {});
  }).reduce((e, n) => (e = Object.assign(Object.assign({}, e), n), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), r), Sf(t, {
    generateColorPalettes: Mf,
    generateNeutralColorPalettes: Tf
  })), kf(t.fontSize)), Ff(t)), wf(t)), Ef(t));
}
const gc = ei(Rf), Ci = {
  token: rn,
  override: {
    override: rn
  },
  hashed: !0
}, mc = /* @__PURE__ */ Te.createContext(Ci), Ei = "ant", pc = "anticon", Nh = ["outlined", "borderless", "filled"], Af = (t, r) => r || (t ? `${Ei}-${t}` : Ei), nn = /* @__PURE__ */ h.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Af,
  iconPrefixCls: pc
}), Of = `-ant-${Date.now()}-${Math.random()}`;
function _f(t, r) {
  const e = {}, n = (o, s) => {
    let c = o.clone();
    return c = (s == null ? void 0 : s(c)) || c, c.toRgbString();
  }, a = (o, s) => {
    const c = new qe(o), u = tn(c.toRgbString());
    e[`${s}-color`] = n(c), e[`${s}-color-disabled`] = u[1], e[`${s}-color-hover`] = u[4], e[`${s}-color-active`] = u[6], e[`${s}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), e[`${s}-color-deprecated-bg`] = u[0], e[`${s}-color-deprecated-border`] = u[2];
  };
  if (r.primaryColor) {
    a(r.primaryColor, "primary");
    const o = new qe(r.primaryColor), s = tn(o.toRgbString());
    s.forEach((u, l) => {
      e[`primary-${l + 1}`] = u;
    }), e["primary-color-deprecated-l-35"] = n(o, (u) => u.lighten(35)), e["primary-color-deprecated-l-20"] = n(o, (u) => u.lighten(20)), e["primary-color-deprecated-t-20"] = n(o, (u) => u.tint(20)), e["primary-color-deprecated-t-50"] = n(o, (u) => u.tint(50)), e["primary-color-deprecated-f-12"] = n(o, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const c = new qe(s[0]);
    e["primary-color-active-deprecated-f-30"] = n(c, (u) => u.setAlpha(u.getAlpha() * 0.3)), e["primary-color-active-deprecated-d-02"] = n(c, (u) => u.darken(2));
  }
  return r.successColor && a(r.successColor, "success"), r.warningColor && a(r.warningColor, "warning"), r.errorColor && a(r.errorColor, "error"), r.infoColor && a(r.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((o) => `--${t}-${o}: ${e[o]};`).join(`
`)}
  }
  `.trim();
}
function Nf(t, r) {
  const e = _f(t, r);
  Xe() ? jt(e, `${Of}-dynamic-theme`) : z.env.NODE_ENV !== "production" && la(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const wi = /* @__PURE__ */ h.createContext(!1), Vf = (t) => {
  let {
    children: r,
    disabled: e
  } = t;
  const n = h.useContext(wi);
  return /* @__PURE__ */ h.createElement(wi.Provider, {
    value: e ?? n
  }, r);
}, an = /* @__PURE__ */ h.createContext(void 0), If = (t) => {
  let {
    children: r,
    size: e
  } = t;
  const n = h.useContext(an);
  return /* @__PURE__ */ h.createElement(an.Provider, {
    value: e || n
  }, r);
};
function $f() {
  const t = h.useContext(wi), r = h.useContext(an);
  return {
    componentDisabled: t,
    componentSize: r
  };
}
var yc = /* @__PURE__ */ je(function t() {
  De(this, t);
}), bc = "CALC_UNIT", Lf = new RegExp(bc, "g");
function Da(t) {
  return typeof t == "number" ? "".concat(t).concat(bc) : t;
}
var Df = /* @__PURE__ */ function(t) {
  nr(e, t);
  var r = ar(e);
  function e(n, a) {
    var i;
    De(this, e), i = r.call(this), w(Z(i), "result", ""), w(Z(i), "unitlessCssVar", void 0), w(Z(i), "lowPriority", void 0);
    var o = J(n);
    return i.unitlessCssVar = a, n instanceof e ? i.result = "(".concat(n.result, ")") : o === "number" ? i.result = Da(n) : o === "string" && (i.result = n), i;
  }
  return je(e, [{
    key: "add",
    value: function(a) {
      return a instanceof e ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(Da(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof e ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(Da(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof e ? this.result = "".concat(this.result, " * ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " * ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof e ? this.result = "".concat(this.result, " / ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " / ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(a) {
      return this.lowPriority || a ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(a) {
      var i = this, o = a || {}, s = o.unit, c = !0;
      return typeof s == "boolean" ? c = s : Array.from(this.unitlessCssVar).some(function(u) {
        return i.result.includes(u);
      }) && (c = !1), this.result = this.result.replace(Lf, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(yc), jf = /* @__PURE__ */ function(t) {
  nr(e, t);
  var r = ar(e);
  function e(n) {
    var a;
    return De(this, e), a = r.call(this), w(Z(a), "result", 0), n instanceof e ? a.result = n.result : typeof n == "number" && (a.result = n), a;
  }
  return je(e, [{
    key: "add",
    value: function(a) {
      return a instanceof e ? this.result += a.result : typeof a == "number" && (this.result += a), this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof e ? this.result -= a.result : typeof a == "number" && (this.result -= a), this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return a instanceof e ? this.result *= a.result : typeof a == "number" && (this.result *= a), this;
    }
  }, {
    key: "div",
    value: function(a) {
      return a instanceof e ? this.result /= a.result : typeof a == "number" && (this.result /= a), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), e;
}(yc), Hf = function(r, e) {
  var n = r === "css" ? Df : jf;
  return function(a) {
    return new n(a, e);
  };
}, $o = function(r, e) {
  return "".concat([e, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ot(t) {
  var r = h.useRef();
  r.current = t;
  var e = h.useCallback(function() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (n = r.current) === null || n === void 0 ? void 0 : n.call.apply(n, [r].concat(i));
  }, []);
  return e;
}
function on(t) {
  var r = h.useRef(!1), e = h.useState(t), n = H(e, 2), a = n[0], i = n[1];
  h.useEffect(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
  function o(s, c) {
    c && r.current || i(s);
  }
  return [a, o];
}
function ja(t) {
  return t !== void 0;
}
function Vh(t, r) {
  var e = r || {}, n = e.defaultValue, a = e.value, i = e.onChange, o = e.postState, s = on(function() {
    return ja(a) ? a : ja(n) ? typeof n == "function" ? n() : n : typeof t == "function" ? t() : t;
  }), c = H(s, 2), u = c[0], l = c[1], d = a !== void 0 ? a : u, v = o ? o(d) : d, y = ot(i), m = on([d]), g = H(m, 2), f = g[0], b = g[1];
  Co(function() {
    var S = f[0];
    u !== S && y(u, S);
  }, [f]), Co(function() {
    ja(a) || l(a);
  }, [a]);
  var p = ot(function(S, x) {
    l(S, x), b([d], x);
  });
  return [v, p];
}
function Lo(t, r, e, n) {
  var a = M({}, r[t]);
  if (n != null && n.deprecatedTokens) {
    var i = n.deprecatedTokens;
    i.forEach(function(s) {
      var c = H(s, 2), u = c[0], l = c[1];
      if (z.env.NODE_ENV !== "production" && he(!(a != null && a[u]), "Component Token `".concat(String(u), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(l), "` instead.")), a != null && a[u] || a != null && a[l]) {
        var d;
        (d = a[l]) !== null && d !== void 0 || (a[l] = a == null ? void 0 : a[u]);
      }
    });
  }
  var o = M(M({}, e), a);
  return Object.keys(o).forEach(function(s) {
    o[s] === r[s] && delete o[s];
  }), o;
}
var Sc = z.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", xi = !0;
function Cc() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  if (!Sc)
    return Object.assign.apply(Object, [{}].concat(r));
  xi = !1;
  var n = {};
  return r.forEach(function(a) {
    if (J(a) === "object") {
      var i = Object.keys(a);
      i.forEach(function(o) {
        Object.defineProperty(n, o, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return a[o];
          }
        });
      });
    }
  }), xi = !0, n;
}
var Do = {};
function zf() {
}
var Wf = function(r) {
  var e, n = r, a = zf;
  return Sc && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), n = new Proxy(r, {
    get: function(o, s) {
      if (xi) {
        var c;
        (c = e) === null || c === void 0 || c.add(s);
      }
      return o[s];
    }
  }), a = function(o, s) {
    var c;
    Do[o] = {
      global: Array.from(e),
      component: M(M({}, (c = Do[o]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: n,
    keys: e,
    flush: a
  };
};
function jo(t, r, e) {
  if (typeof e == "function") {
    var n;
    return e(Cc(r, (n = r[t]) !== null && n !== void 0 ? n : {}));
  }
  return e ?? {};
}
function Bf(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
        n[a] = arguments[a];
      return "max(".concat(n.map(function(i) {
        return Qn(i);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
        n[a] = arguments[a];
      return "min(".concat(n.map(function(i) {
        return Qn(i);
      }).join(","), ")");
    }
  };
}
var qf = 1e3 * 60 * 10, Uf = /* @__PURE__ */ function() {
  function t() {
    De(this, t), w(this, "map", /* @__PURE__ */ new Map()), w(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), w(this, "nextID", 0), w(this, "lastAccessBeat", /* @__PURE__ */ new Map()), w(this, "accessBeat", 0);
  }
  return je(t, [{
    key: "set",
    value: function(e, n) {
      this.clear();
      var a = this.getCompositeKey(e);
      this.map.set(a, n), this.lastAccessBeat.set(a, Date.now());
    }
  }, {
    key: "get",
    value: function(e) {
      var n = this.getCompositeKey(e), a = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, a;
    }
  }, {
    key: "getCompositeKey",
    value: function(e) {
      var n = this, a = e.map(function(i) {
        return i && J(i) === "object" ? "obj_".concat(n.getObjectID(i)) : "".concat(J(i), "_").concat(i);
      });
      return a.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(e) {
      if (this.objectIDMap.has(e))
        return this.objectIDMap.get(e);
      var n = this.nextID;
      return this.objectIDMap.set(e, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var e = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(a, i) {
          n - a > qf && (e.map.delete(i), e.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), Ho = new Uf();
function Gf(t, r) {
  return Te.useMemo(function() {
    var e = Ho.get(r);
    if (e)
      return e;
    var n = t();
    return Ho.set(r, n), n;
  }, r);
}
var Kf = function() {
  return {};
};
function Xf(t) {
  var r = t.useCSP, e = r === void 0 ? Kf : r, n = t.useToken, a = t.usePrefix, i = t.getResetStyles, o = t.getCommonStyle, s = t.getCompUnitless;
  function c(v, y, m, g) {
    var f = Array.isArray(v) ? v[0] : v;
    function b(R) {
      return "".concat(String(f)).concat(R.slice(0, 1).toUpperCase()).concat(R.slice(1));
    }
    var p = (g == null ? void 0 : g.unitless) || {}, S = typeof s == "function" ? s(v) : {}, x = M(M({}, S), {}, w({}, b("zIndexPopup"), !0));
    Object.keys(p).forEach(function(R) {
      x[b(R)] = p[R];
    });
    var C = M(M({}, g), {}, {
      unitless: x,
      prefixToken: b
    }), E = l(v, y, m, C), P = u(f, m, C);
    return function(R) {
      var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : R, O = E(R, A), I = H(O, 2), D = I[1], $ = P(A), V = H($, 2), G = V[0], F = V[1];
      return [G, D, F];
    };
  }
  function u(v, y, m) {
    var g = m.unitless, f = m.injectStyle, b = f === void 0 ? !0 : f, p = m.prefixToken, S = m.ignore, x = function(P) {
      var R = P.rootCls, A = P.cssVar, O = A === void 0 ? {} : A, I = n(), D = I.realToken;
      return Ul({
        path: [v],
        prefix: O.prefix,
        key: O.key,
        unitless: g,
        ignore: S,
        token: D,
        scope: R
      }, function() {
        var $ = jo(v, D, y), V = Lo(v, D, $, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys($).forEach(function(G) {
          V[p(G)] = V[G], delete V[G];
        }), V;
      }), null;
    }, C = function(P) {
      var R = n(), A = R.cssVar;
      return [function(O) {
        return b && A ? /* @__PURE__ */ Te.createElement(Te.Fragment, null, /* @__PURE__ */ Te.createElement(x, {
          rootCls: P,
          cssVar: A,
          component: v
        }), O) : O;
      }, A == null ? void 0 : A.key];
    };
    return C;
  }
  function l(v, y, m) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = Array.isArray(v) ? v : [v, v], b = H(f, 1), p = b[0], S = f.join("-"), x = t.layer || {
      name: "antd"
    };
    return function(C) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, P = n(), R = P.theme, A = P.realToken, O = P.hashId, I = P.token, D = P.cssVar, $ = a(), V = $.rootPrefixCls, G = $.iconPrefixCls, F = e(), k = D ? "css" : "js", T = Gf(function() {
        var j = /* @__PURE__ */ new Set();
        return D && Object.keys(g.unitless || {}).forEach(function(Y) {
          j.add(jn(Y, D.prefix)), j.add(jn(Y, $o(p, D.prefix)));
        }), Hf(k, j);
      }, [k, p, D == null ? void 0 : D.prefix]), N = Bf(k), _ = N.max, L = N.min, U = {
        theme: R,
        token: I,
        hashId: O,
        nonce: function() {
          return F.nonce;
        },
        clientOnly: g.clientOnly,
        layer: x,
        // antd is always at top of styles
        order: g.order || -999
      };
      ii(M(M({}, U), {}, {
        clientOnly: !1,
        path: ["Shared", V]
      }), function() {
        return typeof i == "function" ? i(I) : [];
      });
      var q = ii(M(M({}, U), {}, {
        path: [S, C, G]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var j = Wf(I), Y = j.token, se = j.flush, re = jo(p, A, m), ke = ".".concat(C), ge = Lo(p, A, re, {
          deprecatedTokens: g.deprecatedTokens
        });
        D && re && J(re) === "object" && Object.keys(re).forEach(function(Ee) {
          re[Ee] = "var(".concat(jn(Ee, $o(p, D.prefix)), ")");
        });
        var Re = Cc(Y, {
          componentCls: ke,
          prefixCls: C,
          iconCls: ".".concat(G),
          antCls: ".".concat(V),
          calc: T,
          // @ts-ignore
          max: _,
          // @ts-ignore
          min: L
        }, D ? re : ge), Ne = y(Re, {
          hashId: O,
          prefixCls: C,
          rootPrefixCls: V,
          iconPrefixCls: G
        });
        se(p, ge);
        var fe = typeof o == "function" ? o(Re, C, E, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : fe, Ne];
      });
      return [q, O];
    };
  }
  function d(v, y, m) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = l(v, y, m, M({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), b = function(S) {
      var x = S.prefixCls, C = S.rootCls, E = C === void 0 ? x : C;
      return f(x, E), null;
    };
    return z.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), b;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: l
  };
}
const Qf = "5.21.6";
function Ha(t) {
  return t >= 0 && t <= 255;
}
function _n(t, r) {
  const {
    r: e,
    g: n,
    b: a,
    a: i
  } = new qe(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: o,
    g: s,
    b: c
  } = new qe(r).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const l = Math.round((e - o * (1 - u)) / u), d = Math.round((n - s * (1 - u)) / u), v = Math.round((a - c * (1 - u)) / u);
    if (Ha(l) && Ha(d) && Ha(v))
      return new qe({
        r: l,
        g: d,
        b: v,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new qe({
    r: e,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var Yf = function(t, r) {
  var e = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
function Ec(t) {
  const {
    override: r
  } = t, e = Yf(t, ["override"]), n = Object.assign({}, r);
  Object.keys(rn).forEach((v) => {
    delete n[v];
  });
  const a = Object.assign(Object.assign({}, e), n), i = 480, o = 576, s = 768, c = 992, u = 1200, l = 1600;
  if (a.motion === !1) {
    const v = "0s";
    a.motionDurationFast = v, a.motionDurationMid = v, a.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: _n(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: _n(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: _n(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 3,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: _n(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: o - 1,
    screenSM: o,
    screenSMMin: o,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: l - 1,
    screenXXL: l,
    screenXXLMin: l,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new qe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new qe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new qe("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var zo = function(t, r) {
  var e = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
const wc = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Zf = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, Jf = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, xc = (t, r, e) => {
  const n = e.getDerivativeToken(t), {
    override: a
  } = r, i = zo(r, ["override"]);
  let o = Object.assign(Object.assign({}, n), {
    override: a
  });
  return o = Ec(o), i && Object.entries(i).forEach((s) => {
    let [c, u] = s;
    const {
      theme: l
    } = u, d = zo(u, ["theme"]);
    let v = d;
    l && (v = xc(Object.assign(Object.assign({}, o), d), {
      override: d
    }, l)), o[c] = v;
  }), o;
};
function da() {
  const {
    token: t,
    hashed: r,
    theme: e,
    override: n,
    cssVar: a
  } = Te.useContext(mc), i = `${Qf}-${r || ""}`, o = e || gc, [s, c, u] = yl(o, [rn, t], {
    salt: i,
    override: n,
    getComputedToken: xc,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Ec,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: wc,
      ignore: Zf,
      preserve: Jf
    }
  });
  return [o, u, r ? c : "", s, a];
}
const Ih = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, $h = function(t) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: t.colorText,
    fontSize: t.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: t.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: r ? "inherit" : t.fontFamily
  };
}, ed = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Lh = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), td = (t) => ({
  a: {
    color: t.colorLink,
    textDecoration: t.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${t.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: t.colorLinkHover
    },
    "&:active": {
      color: t.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: t.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: t.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: t.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), rd = (t, r, e, n) => {
  const a = `[class^="${r}"], [class*=" ${r}"]`, i = e ? `.${e}` : a, o = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: t.fontFamily,
    fontSize: t.fontSize
  }), {
    [i]: Object.assign(Object.assign(Object.assign({}, s), o), {
      [a]: o
    })
  };
}, nd = (t) => ({
  outline: `${Qn(t.lineWidthFocus)} solid ${t.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Dh = (t) => ({
  "&:focus-visible": Object.assign({}, nd(t))
}), Pc = (t, r) => {
  const [e, n] = da();
  return ii({
    theme: e,
    token: n,
    hashId: "",
    path: ["ant-design-icons", t],
    nonce: () => r == null ? void 0 : r.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${t}`]: Object.assign(Object.assign({}, ed()), {
      [`.${t} .${t}-icon`]: {
        display: "block"
      }
    })
  }]);
}, {
  genStyleHooks: jh,
  genComponentStyleHook: Hh,
  genSubStyleComponent: zh
} = Xf({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: r
    } = h.useContext(nn);
    return {
      rootPrefixCls: t(),
      iconPrefixCls: r
    };
  },
  useToken: () => {
    const [t, r, e, n, a] = da();
    return {
      theme: t,
      realToken: r,
      hashId: e,
      token: n,
      cssVar: a
    };
  },
  useCSP: () => {
    const {
      csp: t,
      iconPrefixCls: r
    } = h.useContext(nn);
    return Pc(r, t), t ?? {};
  },
  getResetStyles: (t) => [{
    "&": td(t)
  }],
  getCommonStyle: rd,
  getCompUnitless: () => wc
}), ad = Object.assign({}, ta), {
  useId: Wo
} = ad, id = () => "", od = typeof Wo > "u" ? id : Wo;
function sd(t, r, e) {
  var n, a;
  const i = cn("ConfigProvider"), o = t || {}, s = o.inherit === !1 || !r ? Object.assign(Object.assign({}, Ci), {
    hashed: (n = r == null ? void 0 : r.hashed) !== null && n !== void 0 ? n : Ci.hashed,
    cssVar: r == null ? void 0 : r.cssVar
  }) : r, c = od();
  if (z.env.NODE_ENV !== "production") {
    const u = o.cssVar || s.cssVar, l = !!(typeof o.cssVar == "object" && (!((a = o.cssVar) === null || a === void 0) && a.key) || c);
    z.env.NODE_ENV !== "production" && i(!u || l, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Bi(() => {
    var u, l;
    if (!t)
      return r;
    const d = Object.assign({}, s.components);
    Object.keys(t.components || {}).forEach((m) => {
      d[m] = Object.assign(Object.assign({}, d[m]), t.components[m]);
    });
    const v = `css-var-${c.replace(/:/g, "")}`, y = ((u = o.cssVar) !== null && u !== void 0 ? u : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof o.cssVar == "object" ? o.cssVar : {}), {
      key: typeof o.cssVar == "object" && ((l = o.cssVar) === null || l === void 0 ? void 0 : l.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, s), o), {
      token: Object.assign(Object.assign({}, s.token), o.token),
      components: d,
      cssVar: y
    });
  }, [o, s], (u, l) => u.some((d, v) => {
    const y = l[v];
    return !Za(d, y, !0);
  }));
}
var cd = ["children"], kc = /* @__PURE__ */ h.createContext({});
function ud(t) {
  var r = t.children, e = Ht(t, cd);
  return /* @__PURE__ */ h.createElement(kc.Provider, {
    value: e
  }, r);
}
var ld = /* @__PURE__ */ function(t) {
  nr(e, t);
  var r = ar(e);
  function e() {
    return De(this, e), r.apply(this, arguments);
  }
  return je(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(h.Component);
function fd(t) {
  var r = h.useReducer(function(s) {
    return s + 1;
  }, 0), e = H(r, 2), n = e[1], a = h.useRef(t), i = ot(function() {
    return a.current;
  }), o = ot(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, n();
  });
  return [i, o];
}
var qt = "none", Nn = "appear", Vn = "enter", In = "leave", Bo = "none", vt = "prepare", Cr = "start", Er = "active", ro = "end", Fc = "prepared";
function qo(t, r) {
  var e = {};
  return e[t.toLowerCase()] = r.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(r), e["Moz".concat(t)] = "moz".concat(r), e["ms".concat(t)] = "MS".concat(r), e["O".concat(t)] = "o".concat(r.toLowerCase()), e;
}
function dd(t, r) {
  var e = {
    animationend: qo("Animation", "AnimationEnd"),
    transitionend: qo("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in r || delete e.animationend.animation, "TransitionEvent" in r || delete e.transitionend.transition), e;
}
var vd = dd(Xe(), typeof window < "u" ? window : {}), Mc = {};
if (Xe()) {
  var hd = document.createElement("div");
  Mc = hd.style;
}
var $n = {};
function Tc(t) {
  if ($n[t])
    return $n[t];
  var r = vd[t];
  if (r)
    for (var e = Object.keys(r), n = e.length, a = 0; a < n; a += 1) {
      var i = e[a];
      if (Object.prototype.hasOwnProperty.call(r, i) && i in Mc)
        return $n[t] = r[i], $n[t];
    }
  return "";
}
var Rc = Tc("animationend"), Ac = Tc("transitionend"), Oc = !!(Rc && Ac), Uo = Rc || "animationend", Go = Ac || "transitionend";
function Ko(t, r) {
  if (!t) return null;
  if (J(t) === "object") {
    var e = r.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return t[e];
  }
  return "".concat(t, "-").concat(r);
}
const gd = function(t) {
  var r = h.useRef();
  function e(a) {
    a && (a.removeEventListener(Go, t), a.removeEventListener(Uo, t));
  }
  function n(a) {
    r.current && r.current !== a && e(r.current), a && a !== r.current && (a.addEventListener(Go, t), a.addEventListener(Uo, t), r.current = a);
  }
  return h.useEffect(function() {
    return function() {
      e(r.current);
    };
  }, []), [n, e];
};
var _c = Xe() ? h.useLayoutEffect : h.useEffect;
const md = function() {
  var t = h.useRef(null);
  function r() {
    Xn.cancel(t.current);
  }
  function e(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    r();
    var i = Xn(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return i !== t.current;
        }
      }) : e(n, a - 1);
    });
    t.current = i;
  }
  return h.useEffect(function() {
    return function() {
      r();
    };
  }, []), [e, r];
};
var pd = [vt, Cr, Er, ro], yd = [vt, Fc], Nc = !1, bd = !0;
function Vc(t) {
  return t === Er || t === ro;
}
const Sd = function(t, r, e) {
  var n = on(Bo), a = H(n, 2), i = a[0], o = a[1], s = md(), c = H(s, 2), u = c[0], l = c[1];
  function d() {
    o(vt, !0);
  }
  var v = r ? yd : pd;
  return _c(function() {
    if (i !== Bo && i !== ro) {
      var y = v.indexOf(i), m = v[y + 1], g = e(i);
      g === Nc ? o(m, !0) : m && u(function(f) {
        function b() {
          f.isCanceled() || o(m, !0);
        }
        g === !0 ? b() : Promise.resolve(g).then(b);
      });
    }
  }, [t, i]), h.useEffect(function() {
    return function() {
      l();
    };
  }, []), [d, i];
};
function Cd(t, r, e, n) {
  var a = n.motionEnter, i = a === void 0 ? !0 : a, o = n.motionAppear, s = o === void 0 ? !0 : o, c = n.motionLeave, u = c === void 0 ? !0 : c, l = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, y = n.onEnterPrepare, m = n.onLeavePrepare, g = n.onAppearStart, f = n.onEnterStart, b = n.onLeaveStart, p = n.onAppearActive, S = n.onEnterActive, x = n.onLeaveActive, C = n.onAppearEnd, E = n.onEnterEnd, P = n.onLeaveEnd, R = n.onVisibleChanged, A = on(), O = H(A, 2), I = O[0], D = O[1], $ = fd(qt), V = H($, 2), G = V[0], F = V[1], k = on(null), T = H(k, 2), N = T[0], _ = T[1], L = G(), U = h.useRef(!1), q = h.useRef(null);
  function j() {
    return e();
  }
  var Y = h.useRef(!1);
  function se() {
    F(qt), _(null, !0);
  }
  var re = ot(function(de) {
    var te = G();
    if (te !== qt) {
      var Ie = j();
      if (!(de && !de.deadline && de.target !== Ie)) {
        var ne = Y.current, ct;
        te === Nn && ne ? ct = C == null ? void 0 : C(Ie, de) : te === Vn && ne ? ct = E == null ? void 0 : E(Ie, de) : te === In && ne && (ct = P == null ? void 0 : P(Ie, de)), ne && ct !== !1 && se();
      }
    }
  }), ke = gd(re), ge = H(ke, 1), Re = ge[0], Ne = function(te) {
    switch (te) {
      case Nn:
        return w(w(w({}, vt, v), Cr, g), Er, p);
      case Vn:
        return w(w(w({}, vt, y), Cr, f), Er, S);
      case In:
        return w(w(w({}, vt, m), Cr, b), Er, x);
      default:
        return {};
    }
  }, fe = h.useMemo(function() {
    return Ne(L);
  }, [L]), Ee = Sd(L, !t, function(de) {
    if (de === vt) {
      var te = fe[vt];
      return te ? te(j()) : Nc;
    }
    if (Se in fe) {
      var Ie;
      _(((Ie = fe[Se]) === null || Ie === void 0 ? void 0 : Ie.call(fe, j(), null)) || null);
    }
    return Se === Er && L !== qt && (Re(j()), l > 0 && (clearTimeout(q.current), q.current = setTimeout(function() {
      re({
        deadline: !0
      });
    }, l))), Se === Fc && se(), bd;
  }), W = H(Ee, 2), me = W[0], Se = W[1], He = Vc(Se);
  Y.current = He, _c(function() {
    D(r);
    var de = U.current;
    U.current = !0;
    var te;
    !de && r && s && (te = Nn), de && r && i && (te = Vn), (de && !r && u || !de && d && !r && u) && (te = In);
    var Ie = Ne(te);
    te && (t || Ie[vt]) ? (F(te), me()) : F(qt);
  }, [r]), h.useEffect(function() {
    // Cancel appear
    (L === Nn && !s || // Cancel enter
    L === Vn && !i || // Cancel leave
    L === In && !u) && F(qt);
  }, [s, i, u]), h.useEffect(function() {
    return function() {
      U.current = !1, clearTimeout(q.current);
    };
  }, []);
  var Fe = h.useRef(!1);
  h.useEffect(function() {
    I && (Fe.current = !0), I !== void 0 && L === qt && ((Fe.current || I) && (R == null || R(I)), Fe.current = !0);
  }, [I, L]);
  var Ve = N;
  return fe[vt] && Se === Cr && (Ve = M({
    transition: "none"
  }, Ve)), [L, Se, Ve, I ?? r];
}
function Ed(t) {
  var r = t;
  J(t) === "object" && (r = t.transitionSupport);
  function e(a, i) {
    return !!(a.motionName && r && i !== !1);
  }
  var n = /* @__PURE__ */ h.forwardRef(function(a, i) {
    var o = a.visible, s = o === void 0 ? !0 : o, c = a.removeOnLeave, u = c === void 0 ? !0 : c, l = a.forceRender, d = a.children, v = a.motionName, y = a.leavedClassName, m = a.eventProps, g = h.useContext(kc), f = g.motion, b = e(a, f), p = h.useRef(), S = h.useRef();
    function x() {
      try {
        return p.current instanceof HTMLElement ? p.current : Dn(S.current);
      } catch {
        return null;
      }
    }
    var C = Cd(b, s, x, a), E = H(C, 4), P = E[0], R = E[1], A = E[2], O = E[3], I = h.useRef(O);
    O && (I.current = !0);
    var D = h.useCallback(function(N) {
      p.current = N, qi(i, N);
    }, [i]), $, V = M(M({}, m), {}, {
      visible: s
    });
    if (!d)
      $ = null;
    else if (P === qt)
      O ? $ = d(M({}, V), D) : !u && I.current && y ? $ = d(M(M({}, V), {}, {
        className: y
      }), D) : l || !u && !y ? $ = d(M(M({}, V), {}, {
        style: {
          display: "none"
        }
      }), D) : $ = null;
    else {
      var G;
      R === vt ? G = "prepare" : Vc(R) ? G = "active" : R === Cr && (G = "start");
      var F = Ko(v, "".concat(P, "-").concat(G));
      $ = d(M(M({}, V), {}, {
        className: Dt(Ko(v, P), w(w({}, F, F && G), v, typeof v == "string")),
        style: A
      }), D);
    }
    if (/* @__PURE__ */ h.isValidElement($) && ra($)) {
      var k = $, T = k.ref;
      T || ($ = /* @__PURE__ */ h.cloneElement($, {
        ref: D
      }));
    }
    return /* @__PURE__ */ h.createElement(ld, {
      ref: S
    }, $);
  });
  return n.displayName = "CSSMotion", n;
}
const no = Ed(Oc);
var Pi = "add", ki = "keep", Fi = "remove", za = "removed";
function wd(t) {
  var r;
  return t && J(t) === "object" && "key" in t ? r = t : r = {
    key: t
  }, M(M({}, r), {}, {
    key: String(r.key)
  });
}
function Mi() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(wd);
}
function xd() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], n = 0, a = r.length, i = Mi(t), o = Mi(r);
  i.forEach(function(u) {
    for (var l = !1, d = n; d < a; d += 1) {
      var v = o[d];
      if (v.key === u.key) {
        n < d && (e = e.concat(o.slice(n, d).map(function(y) {
          return M(M({}, y), {}, {
            status: Pi
          });
        })), n = d), e.push(M(M({}, v), {}, {
          status: ki
        })), n += 1, l = !0;
        break;
      }
    }
    l || e.push(M(M({}, u), {}, {
      status: Fi
    }));
  }), n < a && (e = e.concat(o.slice(n).map(function(u) {
    return M(M({}, u), {}, {
      status: Pi
    });
  })));
  var s = {};
  e.forEach(function(u) {
    var l = u.key;
    s[l] = (s[l] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(u) {
    return s[u] > 1;
  });
  return c.forEach(function(u) {
    e = e.filter(function(l) {
      var d = l.key, v = l.status;
      return d !== u || v !== Fi;
    }), e.forEach(function(l) {
      l.key === u && (l.status = ki);
    });
  }), e;
}
var Pd = ["component", "children", "onVisibleChanged", "onAllRemoved"], kd = ["status"], Fd = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Md(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : no, e = /* @__PURE__ */ function(n) {
    nr(i, n);
    var a = ar(i);
    function i() {
      var o;
      De(this, i);
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
        c[u] = arguments[u];
      return o = a.call.apply(a, [this].concat(c)), w(Z(o), "state", {
        keyEntities: []
      }), w(Z(o), "removeKey", function(l) {
        o.setState(function(d) {
          var v = d.keyEntities.map(function(y) {
            return y.key !== l ? y : M(M({}, y), {}, {
              status: za
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var d = o.state.keyEntities, v = d.filter(function(y) {
            var m = y.status;
            return m !== za;
          }).length;
          v === 0 && o.props.onAllRemoved && o.props.onAllRemoved();
        });
      }), o;
    }
    return je(i, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, u = this.props, l = u.component, d = u.children, v = u.onVisibleChanged;
        u.onAllRemoved;
        var y = Ht(u, Pd), m = l || h.Fragment, g = {};
        return Fd.forEach(function(f) {
          g[f] = y[f], delete y[f];
        }), delete y.keys, /* @__PURE__ */ h.createElement(m, y, c.map(function(f, b) {
          var p = f.status, S = Ht(f, kd), x = p === Pi || p === ki;
          return /* @__PURE__ */ h.createElement(r, pt({}, g, {
            key: S.key,
            visible: x,
            eventProps: S,
            onVisibleChanged: function(E) {
              v == null || v(E, {
                key: S.key
              }), E || s.removeKey(S.key);
            }
          }), function(C, E) {
            return d(M(M({}, C), {}, {
              index: b
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var u = s.keys, l = c.keyEntities, d = Mi(u), v = xd(l, d);
        return {
          keyEntities: v.filter(function(y) {
            var m = l.find(function(g) {
              var f = g.key;
              return y.key === f;
            });
            return !(m && m.status === za && y.status === Fi);
          })
        };
      }
    }]), i;
  }(h.Component);
  return w(e, "defaultProps", {
    component: "div"
  }), e;
}
Md(Oc);
function Td(t) {
  const {
    children: r
  } = t, [, e] = da(), {
    motion: n
  } = e, a = h.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ h.createElement(ud, {
    motion: n
  }, r) : r;
}
const Ic = /* @__PURE__ */ h.memo((t) => {
  let {
    dropdownMatchSelectWidth: r
  } = t;
  return cn("ConfigProvider").deprecated(r === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
z.env.NODE_ENV !== "production" && (Ic.displayName = "PropWarning");
const Rd = z.env.NODE_ENV !== "production" ? Ic : () => null;
var Ad = function(t, r) {
  var e = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
let Ti = !1;
z.env.NODE_ENV;
const Od = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let $c;
function _d() {
  return $c || Ei;
}
function Nd(t) {
  return Object.keys(t).some((r) => r.endsWith("Color"));
}
const Vd = (t) => {
  const {
    prefixCls: r,
    iconPrefixCls: e,
    theme: n,
    holderRender: a
  } = t;
  r !== void 0 && ($c = r), n && Nd(n) && (z.env.NODE_ENV !== "production" && la(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Nf(_d(), n));
}, Id = (t) => {
  const {
    children: r,
    csp: e,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: i,
    form: o,
    locale: s,
    componentSize: c,
    direction: u,
    space: l,
    splitter: d,
    virtual: v,
    dropdownMatchSelectWidth: y,
    popupMatchSelectWidth: m,
    popupOverflow: g,
    legacyLocale: f,
    parentContext: b,
    iconPrefixCls: p,
    theme: S,
    componentDisabled: x,
    segmented: C,
    statistic: E,
    spin: P,
    calendar: R,
    carousel: A,
    cascader: O,
    collapse: I,
    typography: D,
    checkbox: $,
    descriptions: V,
    divider: G,
    drawer: F,
    skeleton: k,
    steps: T,
    image: N,
    layout: _,
    list: L,
    mentions: U,
    modal: q,
    progress: j,
    result: Y,
    slider: se,
    breadcrumb: re,
    menu: ke,
    pagination: ge,
    input: Re,
    textArea: Ne,
    empty: fe,
    badge: Ee,
    radio: W,
    rate: me,
    switch: Se,
    transfer: He,
    avatar: Fe,
    message: Ve,
    tag: de,
    table: te,
    card: Ie,
    tabs: ne,
    timeline: ct,
    timePicker: Pt,
    upload: Ae,
    notification: yt,
    tree: ut,
    colorPicker: Nr,
    datePicker: Vr,
    rangePicker: ir,
    flex: Qe,
    wave: Ye,
    dropdown: Ue,
    warning: Ir,
    tour: kt,
    floatButtonGroup: Ge,
    variant: bt,
    inputNumber: $r,
    treeSelect: or
  } = t, sr = h.useCallback((le, ae) => {
    const {
      prefixCls: We
    } = t;
    if (ae)
      return ae;
    const Le = We || b.getPrefixCls("");
    return le ? `${Le}-${le}` : Le;
  }, [b.getPrefixCls, t.prefixCls]), Ft = p || b.iconPrefixCls || pc, $e = e || b.csp;
  Pc(Ft, $e);
  const Me = sd(S, b.theme, {
    prefixCls: sr("")
  });
  z.env.NODE_ENV !== "production" && (Ti = Ti || !!Me);
  const Mt = {
    csp: $e,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: i,
    locale: s || f,
    direction: u,
    space: l,
    splitter: d,
    virtual: v,
    popupMatchSelectWidth: m ?? y,
    popupOverflow: g,
    getPrefixCls: sr,
    iconPrefixCls: Ft,
    theme: Me,
    segmented: C,
    statistic: E,
    spin: P,
    calendar: R,
    carousel: A,
    cascader: O,
    collapse: I,
    typography: D,
    checkbox: $,
    descriptions: V,
    divider: G,
    drawer: F,
    skeleton: k,
    steps: T,
    image: N,
    input: Re,
    textArea: Ne,
    layout: _,
    list: L,
    mentions: U,
    modal: q,
    progress: j,
    result: Y,
    slider: se,
    breadcrumb: re,
    menu: ke,
    pagination: ge,
    empty: fe,
    badge: Ee,
    radio: W,
    rate: me,
    switch: Se,
    transfer: He,
    avatar: Fe,
    message: Ve,
    tag: de,
    table: te,
    card: Ie,
    tabs: ne,
    timeline: ct,
    timePicker: Pt,
    upload: Ae,
    notification: yt,
    tree: ut,
    colorPicker: Nr,
    datePicker: Vr,
    rangePicker: ir,
    flex: Qe,
    wave: Ye,
    dropdown: Ue,
    warning: Ir,
    tour: kt,
    floatButtonGroup: Ge,
    variant: bt,
    inputNumber: $r,
    treeSelect: or
  };
  z.env.NODE_ENV !== "production" && cn("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const pe = Object.assign({}, b);
  Object.keys(Mt).forEach((le) => {
    Mt[le] !== void 0 && (pe[le] = Mt[le]);
  }), Od.forEach((le) => {
    const ae = t[le];
    ae && (pe[le] = ae);
  }), typeof n < "u" && (pe.button = Object.assign({
    autoInsertSpace: n
  }, pe.button));
  const ze = Bi(() => pe, pe, (le, ae) => {
    const We = Object.keys(le), Le = Object.keys(ae);
    return We.length !== Le.length || We.some((Ze) => le[Ze] !== ae[Ze]);
  }), ce = h.useMemo(() => ({
    prefixCls: Ft,
    csp: $e
  }), [Ft, $e]);
  let Q = /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Rd, {
    dropdownMatchSelectWidth: y
  }), r);
  const Ke = h.useMemo(() => {
    var le, ae, We, Le;
    return Sr(((le = fa.Form) === null || le === void 0 ? void 0 : le.defaultValidateMessages) || {}, ((We = (ae = ze.locale) === null || ae === void 0 ? void 0 : ae.Form) === null || We === void 0 ? void 0 : We.defaultValidateMessages) || {}, ((Le = ze.form) === null || Le === void 0 ? void 0 : Le.validateMessages) || {}, (o == null ? void 0 : o.validateMessages) || {});
  }, [ze, o == null ? void 0 : o.validateMessages]);
  Object.keys(Ke).length > 0 && (Q = /* @__PURE__ */ h.createElement(Zl.Provider, {
    value: Ke
  }, Q)), s && (Q = /* @__PURE__ */ h.createElement(lc, {
    locale: s,
    _ANT_MARK__: uc
  }, Q)), (Ft || $e) && (Q = /* @__PURE__ */ h.createElement(eo.Provider, {
    value: ce
  }, Q)), c && (Q = /* @__PURE__ */ h.createElement(If, {
    size: c
  }, Q)), Q = /* @__PURE__ */ h.createElement(Td, null, Q);
  const Tt = h.useMemo(() => {
    const le = Me || {}, {
      algorithm: ae,
      token: We,
      components: Le,
      cssVar: Ze
    } = le, cr = Ad(le, ["algorithm", "token", "components", "cssVar"]), ur = ae && (!Array.isArray(ae) || ae.length > 0) ? ei(ae) : gc, Rt = {};
    Object.entries(Le || {}).forEach((Xt) => {
      let [Ot, _t] = Xt;
      const we = Object.assign({}, _t);
      "algorithm" in we && (we.algorithm === !0 ? we.theme = ur : (Array.isArray(we.algorithm) || typeof we.algorithm == "function") && (we.theme = ei(we.algorithm)), delete we.algorithm), Rt[Ot] = we;
    });
    const At = Object.assign(Object.assign({}, rn), We);
    return Object.assign(Object.assign({}, cr), {
      theme: ur,
      token: At,
      components: Rt,
      override: Object.assign({
        override: At
      }, Rt),
      cssVar: Ze
    });
  }, [Me]);
  return S && (Q = /* @__PURE__ */ h.createElement(mc.Provider, {
    value: Tt
  }, Q)), ze.warning && (Q = /* @__PURE__ */ h.createElement(oc.Provider, {
    value: ze.warning
  }, Q)), x !== void 0 && (Q = /* @__PURE__ */ h.createElement(Vf, {
    disabled: x
  }, Q)), /* @__PURE__ */ h.createElement(nn.Provider, {
    value: ze
  }, Q);
}, Ar = (t) => {
  const r = h.useContext(nn), e = h.useContext(cc);
  return /* @__PURE__ */ h.createElement(Id, Object.assign({
    parentContext: r,
    legacyLocale: e
  }, t));
};
Ar.ConfigContext = nn;
Ar.SizeContext = an;
Ar.config = Vd;
Ar.useConfig = $f;
Object.defineProperty(Ar, "SizeContext", {
  get: () => (z.env.NODE_ENV !== "production" && la(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), an)
});
z.env.NODE_ENV !== "production" && (Ar.displayName = "ConfigProvider");
function Lc(t) {
  var r;
  return t == null || (r = t.getRootNode) === null || r === void 0 ? void 0 : r.call(t);
}
function $d(t) {
  return Lc(t) instanceof ShadowRoot;
}
function Jn(t) {
  return $d(t) ? Lc(t) : null;
}
function Ld(t) {
  return t.replace(/-(.)/g, function(r, e) {
    return e.toUpperCase();
  });
}
function Dd(t, r) {
  he(t, "[@ant-design/icons] ".concat(r));
}
function Xo(t) {
  return J(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (J(t.icon) === "object" || typeof t.icon == "function");
}
function Qo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(t).reduce(function(r, e) {
    var n = t[e];
    switch (e) {
      case "class":
        r.className = n, delete r.class;
        break;
      default:
        delete r[e], r[Ld(e)] = n;
    }
    return r;
  }, {});
}
function Ri(t, r, e) {
  return e ? /* @__PURE__ */ Te.createElement(t.tag, M(M({
    key: r
  }, Qo(t.attrs)), e), (t.children || []).map(function(n, a) {
    return Ri(n, "".concat(r, "-").concat(t.tag, "-").concat(a));
  })) : /* @__PURE__ */ Te.createElement(t.tag, M({
    key: r
  }, Qo(t.attrs)), (t.children || []).map(function(n, a) {
    return Ri(n, "".concat(r, "-").concat(t.tag, "-").concat(a));
  }));
}
function Dc(t) {
  return tn(t)[0];
}
function jc(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var jd = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Hd = function(r) {
  var e = h.useContext(eo), n = e.csp, a = e.prefixCls, i = jd;
  a && (i = i.replace(/anticon/g, a)), h.useEffect(function() {
    var o = r.current, s = Jn(o);
    jt(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, zd = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Ur = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Wd(t) {
  var r = t.primaryColor, e = t.secondaryColor;
  Ur.primaryColor = r, Ur.secondaryColor = e || Dc(r), Ur.calculated = !!e;
}
function Bd() {
  return M({}, Ur);
}
var Or = function(r) {
  var e = r.icon, n = r.className, a = r.onClick, i = r.style, o = r.primaryColor, s = r.secondaryColor, c = Ht(r, zd), u = h.useRef(), l = Ur;
  if (o && (l = {
    primaryColor: o,
    secondaryColor: s || Dc(o)
  }), Hd(u), Dd(Xo(e), "icon should be icon definiton, but got ".concat(e)), !Xo(e))
    return null;
  var d = e;
  return d && typeof d.icon == "function" && (d = M(M({}, d), {}, {
    icon: d.icon(l.primaryColor, l.secondaryColor)
  })), Ri(d.icon, "svg-".concat(d.name), M(M({
    className: n,
    onClick: a,
    style: i,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: u
  }));
};
Or.displayName = "IconReact";
Or.getTwoToneColors = Bd;
Or.setTwoToneColors = Wd;
function Hc(t) {
  var r = jc(t), e = H(r, 2), n = e[0], a = e[1];
  return Or.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function qd() {
  var t = Or.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var Ud = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Hc(Zn.primary);
var _r = /* @__PURE__ */ h.forwardRef(function(t, r) {
  var e = t.className, n = t.icon, a = t.spin, i = t.rotate, o = t.tabIndex, s = t.onClick, c = t.twoToneColor, u = Ht(t, Ud), l = h.useContext(eo), d = l.prefixCls, v = d === void 0 ? "anticon" : d, y = l.rootClassName, m = Dt(y, v, w(w({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), e), g = o;
  g === void 0 && s && (g = -1);
  var f = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, b = jc(c), p = H(b, 2), S = p[0], x = p[1];
  return /* @__PURE__ */ h.createElement("span", pt({
    role: "img",
    "aria-label": n.name
  }, u, {
    ref: r,
    tabIndex: g,
    onClick: s,
    className: m
  }), /* @__PURE__ */ h.createElement(Or, {
    icon: n,
    primaryColor: S,
    secondaryColor: x,
    style: f
  }));
});
_r.displayName = "AntdIcon";
_r.getTwoToneColor = qd;
_r.setTwoToneColor = Hc;
var Gd = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Kd = function(r, e) {
  return /* @__PURE__ */ h.createElement(_r, pt({}, r, {
    ref: e,
    icon: Gd
  }));
}, Xd = /* @__PURE__ */ h.forwardRef(Kd);
z.env.NODE_ENV !== "production" && (Xd.displayName = "CloseCircleFilled");
var Qd = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Yd = function(r, e) {
  return /* @__PURE__ */ h.createElement(_r, pt({}, r, {
    ref: e,
    icon: Qd
  }));
}, Zd = /* @__PURE__ */ h.forwardRef(Yd);
z.env.NODE_ENV !== "production" && (Zd.displayName = "CloseOutlined");
function Wh(t) {
  return t && /* @__PURE__ */ Te.isValidElement(t) && t.type === Te.Fragment;
}
const Jd = (t, r, e) => /* @__PURE__ */ Te.isValidElement(t) ? /* @__PURE__ */ Te.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : r;
function Bh(t, r) {
  return Jd(t, t, r);
}
const zc = /* @__PURE__ */ Te.createContext(void 0);
z.env.NODE_ENV !== "production" && (zc.displayName = "zIndexContext");
const $t = 100, ev = 10, tv = $t * ev, rv = tv + $t, Wc = {
  Modal: $t,
  Drawer: $t,
  Popover: $t,
  Popconfirm: $t,
  Tooltip: $t,
  Tour: $t,
  FloatButton: $t
}, nv = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function av(t) {
  return t in Wc;
}
const qh = (t, r) => {
  const [, e] = da(), n = Te.useContext(zc), a = av(t);
  let i;
  if (r !== void 0)
    i = [r, r];
  else {
    let o = n ?? 0;
    a ? o += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : e.zIndexPopupBase) + // Container offset
    Wc[t] : o += nv[t], i = [n === void 0 ? r : o, o];
  }
  if (z.env.NODE_ENV !== "production") {
    const o = cn(t), s = e.zIndexPopupBase + rv, c = i[0] || 0;
    z.env.NODE_ENV !== "production" && o(r !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return i;
};
function mt() {
  mt = function() {
    return r;
  };
  var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, a = Object.defineProperty || function(F, k, T) {
    F[k] = T.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function u(F, k, T) {
    return Object.defineProperty(F, k, {
      value: T,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), F[k];
  }
  try {
    u({}, "");
  } catch {
    u = function(T, N, _) {
      return T[N] = _;
    };
  }
  function l(F, k, T, N) {
    var _ = k && k.prototype instanceof b ? k : b, L = Object.create(_.prototype), U = new V(N || []);
    return a(L, "_invoke", {
      value: O(F, T, U)
    }), L;
  }
  function d(F, k, T) {
    try {
      return {
        type: "normal",
        arg: F.call(k, T)
      };
    } catch (N) {
      return {
        type: "throw",
        arg: N
      };
    }
  }
  r.wrap = l;
  var v = "suspendedStart", y = "suspendedYield", m = "executing", g = "completed", f = {};
  function b() {
  }
  function p() {
  }
  function S() {
  }
  var x = {};
  u(x, o, function() {
    return this;
  });
  var C = Object.getPrototypeOf, E = C && C(C(G([])));
  E && E !== e && n.call(E, o) && (x = E);
  var P = S.prototype = b.prototype = Object.create(x);
  function R(F) {
    ["next", "throw", "return"].forEach(function(k) {
      u(F, k, function(T) {
        return this._invoke(k, T);
      });
    });
  }
  function A(F, k) {
    function T(_, L, U, q) {
      var j = d(F[_], F, L);
      if (j.type !== "throw") {
        var Y = j.arg, se = Y.value;
        return se && J(se) == "object" && n.call(se, "__await") ? k.resolve(se.__await).then(function(re) {
          T("next", re, U, q);
        }, function(re) {
          T("throw", re, U, q);
        }) : k.resolve(se).then(function(re) {
          Y.value = re, U(Y);
        }, function(re) {
          return T("throw", re, U, q);
        });
      }
      q(j.arg);
    }
    var N;
    a(this, "_invoke", {
      value: function(L, U) {
        function q() {
          return new k(function(j, Y) {
            T(L, U, j, Y);
          });
        }
        return N = N ? N.then(q, q) : q();
      }
    });
  }
  function O(F, k, T) {
    var N = v;
    return function(_, L) {
      if (N === m) throw Error("Generator is already running");
      if (N === g) {
        if (_ === "throw") throw L;
        return {
          value: t,
          done: !0
        };
      }
      for (T.method = _, T.arg = L; ; ) {
        var U = T.delegate;
        if (U) {
          var q = I(U, T);
          if (q) {
            if (q === f) continue;
            return q;
          }
        }
        if (T.method === "next") T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (N === v) throw N = g, T.arg;
          T.dispatchException(T.arg);
        } else T.method === "return" && T.abrupt("return", T.arg);
        N = m;
        var j = d(F, k, T);
        if (j.type === "normal") {
          if (N = T.done ? g : y, j.arg === f) continue;
          return {
            value: j.arg,
            done: T.done
          };
        }
        j.type === "throw" && (N = g, T.method = "throw", T.arg = j.arg);
      }
    };
  }
  function I(F, k) {
    var T = k.method, N = F.iterator[T];
    if (N === t) return k.delegate = null, T === "throw" && F.iterator.return && (k.method = "return", k.arg = t, I(F, k), k.method === "throw") || T !== "return" && (k.method = "throw", k.arg = new TypeError("The iterator does not provide a '" + T + "' method")), f;
    var _ = d(N, F.iterator, k.arg);
    if (_.type === "throw") return k.method = "throw", k.arg = _.arg, k.delegate = null, f;
    var L = _.arg;
    return L ? L.done ? (k[F.resultName] = L.value, k.next = F.nextLoc, k.method !== "return" && (k.method = "next", k.arg = t), k.delegate = null, f) : L : (k.method = "throw", k.arg = new TypeError("iterator result is not an object"), k.delegate = null, f);
  }
  function D(F) {
    var k = {
      tryLoc: F[0]
    };
    1 in F && (k.catchLoc = F[1]), 2 in F && (k.finallyLoc = F[2], k.afterLoc = F[3]), this.tryEntries.push(k);
  }
  function $(F) {
    var k = F.completion || {};
    k.type = "normal", delete k.arg, F.completion = k;
  }
  function V(F) {
    this.tryEntries = [{
      tryLoc: "root"
    }], F.forEach(D, this), this.reset(!0);
  }
  function G(F) {
    if (F || F === "") {
      var k = F[o];
      if (k) return k.call(F);
      if (typeof F.next == "function") return F;
      if (!isNaN(F.length)) {
        var T = -1, N = function _() {
          for (; ++T < F.length; ) if (n.call(F, T)) return _.value = F[T], _.done = !1, _;
          return _.value = t, _.done = !0, _;
        };
        return N.next = N;
      }
    }
    throw new TypeError(J(F) + " is not iterable");
  }
  return p.prototype = S, a(P, "constructor", {
    value: S,
    configurable: !0
  }), a(S, "constructor", {
    value: p,
    configurable: !0
  }), p.displayName = u(S, c, "GeneratorFunction"), r.isGeneratorFunction = function(F) {
    var k = typeof F == "function" && F.constructor;
    return !!k && (k === p || (k.displayName || k.name) === "GeneratorFunction");
  }, r.mark = function(F) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(F, S) : (F.__proto__ = S, u(F, c, "GeneratorFunction")), F.prototype = Object.create(P), F;
  }, r.awrap = function(F) {
    return {
      __await: F
    };
  }, R(A.prototype), u(A.prototype, s, function() {
    return this;
  }), r.AsyncIterator = A, r.async = function(F, k, T, N, _) {
    _ === void 0 && (_ = Promise);
    var L = new A(l(F, k, T, N), _);
    return r.isGeneratorFunction(k) ? L : L.next().then(function(U) {
      return U.done ? U.value : L.next();
    });
  }, R(P), u(P, c, "Generator"), u(P, o, function() {
    return this;
  }), u(P, "toString", function() {
    return "[object Generator]";
  }), r.keys = function(F) {
    var k = Object(F), T = [];
    for (var N in k) T.push(N);
    return T.reverse(), function _() {
      for (; T.length; ) {
        var L = T.pop();
        if (L in k) return _.value = L, _.done = !1, _;
      }
      return _.done = !0, _;
    };
  }, r.values = G, V.prototype = {
    constructor: V,
    reset: function(k) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach($), !k) for (var T in this) T.charAt(0) === "t" && n.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = t);
    },
    stop: function() {
      this.done = !0;
      var k = this.tryEntries[0].completion;
      if (k.type === "throw") throw k.arg;
      return this.rval;
    },
    dispatchException: function(k) {
      if (this.done) throw k;
      var T = this;
      function N(Y, se) {
        return U.type = "throw", U.arg = k, T.next = Y, se && (T.method = "next", T.arg = t), !!se;
      }
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var L = this.tryEntries[_], U = L.completion;
        if (L.tryLoc === "root") return N("end");
        if (L.tryLoc <= this.prev) {
          var q = n.call(L, "catchLoc"), j = n.call(L, "finallyLoc");
          if (q && j) {
            if (this.prev < L.catchLoc) return N(L.catchLoc, !0);
            if (this.prev < L.finallyLoc) return N(L.finallyLoc);
          } else if (q) {
            if (this.prev < L.catchLoc) return N(L.catchLoc, !0);
          } else {
            if (!j) throw Error("try statement without catch or finally");
            if (this.prev < L.finallyLoc) return N(L.finallyLoc);
          }
        }
      }
    },
    abrupt: function(k, T) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var _ = this.tryEntries[N];
        if (_.tryLoc <= this.prev && n.call(_, "finallyLoc") && this.prev < _.finallyLoc) {
          var L = _;
          break;
        }
      }
      L && (k === "break" || k === "continue") && L.tryLoc <= T && T <= L.finallyLoc && (L = null);
      var U = L ? L.completion : {};
      return U.type = k, U.arg = T, L ? (this.method = "next", this.next = L.finallyLoc, f) : this.complete(U);
    },
    complete: function(k, T) {
      if (k.type === "throw") throw k.arg;
      return k.type === "break" || k.type === "continue" ? this.next = k.arg : k.type === "return" ? (this.rval = this.arg = k.arg, this.method = "return", this.next = "end") : k.type === "normal" && T && (this.next = T), f;
    },
    finish: function(k) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var N = this.tryEntries[T];
        if (N.finallyLoc === k) return this.complete(N.completion, N.afterLoc), $(N), f;
      }
    },
    catch: function(k) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var N = this.tryEntries[T];
        if (N.tryLoc === k) {
          var _ = N.completion;
          if (_.type === "throw") {
            var L = _.arg;
            $(N);
          }
          return L;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(k, T, N) {
      return this.delegate = {
        iterator: G(k),
        resultName: T,
        nextLoc: N
      }, this.method === "next" && (this.arg = t), f;
    }
  }, r;
}
function Yo(t, r, e, n, a, i, o) {
  try {
    var s = t[i](o), c = s.value;
  } catch (u) {
    return void e(u);
  }
  s.done ? r(c) : Promise.resolve(c).then(n, a);
}
function un(t) {
  return function() {
    var r = this, e = arguments;
    return new Promise(function(n, a) {
      var i = t.apply(r, e);
      function o(c) {
        Yo(i, n, a, o, s, "next", c);
      }
      function s(c) {
        Yo(i, n, a, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
const iv = function(t) {
  if (!t)
    return !1;
  if (t instanceof Element) {
    if (t.offsetParent)
      return !0;
    if (t.getBBox) {
      var r = t.getBBox(), e = r.width, n = r.height;
      if (e || n)
        return !0;
    }
    if (t.getBoundingClientRect) {
      var a = t.getBoundingClientRect(), i = a.width, o = a.height;
      if (i || o)
        return !0;
    }
  }
  return !1;
}, Bc = /* @__PURE__ */ h.createContext(null), Uh = (t, r) => {
  const e = h.useContext(Bc), n = h.useMemo(() => {
    if (!e)
      return "";
    const {
      compactDirection: a,
      isFirstItem: i,
      isLastItem: o
    } = e, s = a === "vertical" ? "-vertical-" : "-";
    return Dt(`${t}-compact${s}item`, {
      [`${t}-compact${s}first-item`]: i,
      [`${t}-compact${s}last-item`]: o,
      [`${t}-compact${s}item-rtl`]: r === "rtl"
    });
  }, [t, r, e]);
  return {
    compactSize: e == null ? void 0 : e.compactSize,
    compactDirection: e == null ? void 0 : e.compactDirection,
    compactItemClassnames: n
  };
}, ov = (t) => {
  let {
    children: r
  } = t;
  return /* @__PURE__ */ h.createElement(Bc.Provider, {
    value: null
  }, r);
}, sv = (t) => ({
  animationDuration: t,
  animationFillMode: "both"
}), cv = (t) => ({
  animationDuration: t,
  animationFillMode: "both"
}), Gh = function(t, r, e, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${t}-enter,
      ${i}${t}-appear
    `]: Object.assign(Object.assign({}, sv(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${t}-leave`]: Object.assign(Object.assign({}, cv(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${t}-enter${t}-enter-active,
      ${i}${t}-appear${t}-appear-active
    `]: {
      animationName: r,
      animationPlayState: "running"
    },
    [`${i}${t}-leave${t}-leave-active`]: {
      animationName: e,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};
var qc = /* @__PURE__ */ h.createContext(null), Zo = [];
function uv(t, r) {
  var e = h.useState(function() {
    if (!Xe())
      return null;
    var m = document.createElement("div");
    return z.env.NODE_ENV !== "production" && r && m.setAttribute("data-debug", r), m;
  }), n = H(e, 1), a = n[0], i = h.useRef(!1), o = h.useContext(qc), s = h.useState(Zo), c = H(s, 2), u = c[0], l = c[1], d = o || (i.current ? void 0 : function(m) {
    l(function(g) {
      var f = [m].concat(K(g));
      return f;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), i.current = !0;
  }
  function y() {
    var m;
    (m = a.parentElement) === null || m === void 0 || m.removeChild(a), i.current = !1;
  }
  return Be(function() {
    return t ? o ? o(v) : v() : y(), y;
  }, [t]), Be(function() {
    u.length && (u.forEach(function(m) {
      return m();
    }), l(Zo));
  }, [u]), [a, d];
}
function lv(t) {
  var r = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), e = document.createElement("div");
  e.id = r;
  var n = e.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var a, i;
  if (t) {
    var o = getComputedStyle(t);
    n.scrollbarColor = o.scrollbarColor, n.scrollbarWidth = o.scrollbarWidth;
    var s = getComputedStyle(t, "::-webkit-scrollbar"), c = parseInt(s.width, 10), u = parseInt(s.height, 10);
    try {
      var l = c ? "width: ".concat(s.width, ";") : "", d = u ? "height: ".concat(s.height, ";") : "";
      jt(`
#`.concat(r, `::-webkit-scrollbar {
`).concat(l, `
`).concat(d, `
}`), r);
    } catch (m) {
      console.error(m), a = c, i = u;
    }
  }
  document.body.appendChild(e);
  var v = t && a && !isNaN(a) ? a : e.offsetWidth - e.clientWidth, y = t && i && !isNaN(i) ? i : e.offsetHeight - e.clientHeight;
  return document.body.removeChild(e), Zr(r), {
    width: v,
    height: y
  };
}
function fv(t) {
  return typeof document > "u" || !t || !(t instanceof Element) ? {
    width: 0,
    height: 0
  } : lv(t);
}
function dv() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var vv = "rc-util-locker-".concat(Date.now()), Jo = 0;
function hv(t) {
  var r = !!t, e = h.useState(function() {
    return Jo += 1, "".concat(vv, "_").concat(Jo);
  }), n = H(e, 1), a = n[0];
  Be(function() {
    if (r) {
      var i = fv(document.body).width, o = dv();
      jt(`
html body {
  overflow-y: hidden;
  `.concat(o ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), a);
    } else
      Zr(a);
    return function() {
      Zr(a);
    };
  }, [r, a]);
}
var gv = !1;
function mv(t) {
  return gv;
}
var es = function(r) {
  return r === !1 ? !1 : !Xe() || !r ? null : typeof r == "string" ? document.querySelector(r) : typeof r == "function" ? r() : r;
}, ao = /* @__PURE__ */ h.forwardRef(function(t, r) {
  var e = t.open, n = t.autoLock, a = t.getContainer, i = t.debug, o = t.autoDestroy, s = o === void 0 ? !0 : o, c = t.children, u = h.useState(e), l = H(u, 2), d = l[0], v = l[1], y = d || e;
  z.env.NODE_ENV !== "production" && he(Xe() || !e, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), h.useEffect(function() {
    (s || e) && v(e);
  }, [e, s]);
  var m = h.useState(function() {
    return es(a);
  }), g = H(m, 2), f = g[0], b = g[1];
  h.useEffect(function() {
    var D = es(a);
    b(D ?? null);
  });
  var p = uv(y && !f, i), S = H(p, 2), x = S[0], C = S[1], E = f ?? x;
  hv(n && e && Xe() && (E === x || E === document.body));
  var P = null;
  if (c && ra(c) && r) {
    var R = c;
    P = R.ref;
  }
  var A = Ui(P, r);
  if (!y || !Xe() || f === void 0)
    return null;
  var O = E === !1 || mv(), I = c;
  return r && (I = /* @__PURE__ */ h.cloneElement(c, {
    ref: A
  })), /* @__PURE__ */ h.createElement(qc.Provider, {
    value: C
  }, O ? I : /* @__PURE__ */ au.createPortal(I, E));
});
z.env.NODE_ENV !== "production" && (ao.displayName = "Portal");
function pv() {
  var t = M({}, ta);
  return t.useId;
}
var ts = 0, rs = pv();
const yv = rs ? (
  // Use React `useId`
  function(r) {
    var e = rs();
    return r || (z.env.NODE_ENV === "test" ? "test-id" : e);
  }
) : (
  // Use compatible of `useId`
  function(r) {
    var e = h.useState("ssr-id"), n = H(e, 2), a = n[0], i = n[1];
    return h.useEffect(function() {
      var o = ts;
      ts += 1, i("rc_unique_".concat(o));
    }, []), r || (z.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var tr = "RC_FORM_INTERNAL_HOOKS", ue = function() {
  he(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Tr = /* @__PURE__ */ h.createContext({
  getFieldValue: ue,
  getFieldsValue: ue,
  getFieldError: ue,
  getFieldWarning: ue,
  getFieldsError: ue,
  isFieldsTouched: ue,
  isFieldTouched: ue,
  isFieldValidating: ue,
  isFieldsValidating: ue,
  resetFields: ue,
  setFields: ue,
  setFieldValue: ue,
  setFieldsValue: ue,
  validateFields: ue,
  submit: ue,
  getInternalHooks: function() {
    return ue(), {
      dispatch: ue,
      initEntityValue: ue,
      registerField: ue,
      useSubscribe: ue,
      setInitialValues: ue,
      destroyForm: ue,
      setCallbacks: ue,
      registerWatch: ue,
      getFields: ue,
      setValidateMessages: ue,
      setPreserve: ue,
      getInitialValue: ue
    };
  }
}), ea = /* @__PURE__ */ h.createContext(null);
function Ai(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function bv(t) {
  return t && !!t._init;
}
function Oi() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var r = JSON.parse(JSON.stringify(this));
      return r.clone = this.clone, r;
    }
  };
}
var _i = Oi();
function Sv(t) {
  try {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  } catch {
    return typeof t == "function";
  }
}
function Cv(t, r, e) {
  if (Gi()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var a = new (t.bind.apply(t, n))();
  return e && Kr(a, e.prototype), a;
}
function Ni(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ni = function(n) {
    if (n === null || !Sv(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, a);
    }
    function a() {
      return Cv(n, arguments, Qr(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Kr(a, n);
  }, Ni(t);
}
var Ev = /%[sdj%]/g, Uc = function() {
};
typeof z < "u" && z.env && z.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Uc = function(r, e) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && e.every(function(n) {
    return typeof n == "string";
  }) && console.warn(r, e);
});
function Vi(t) {
  if (!t || !t.length) return null;
  var r = {};
  return t.forEach(function(e) {
    var n = e.field;
    r[n] = r[n] || [], r[n].push(e);
  }), r;
}
function rt(t) {
  for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    e[n - 1] = arguments[n];
  var a = 0, i = e.length;
  if (typeof t == "function")
    return t.apply(null, e);
  if (typeof t == "string") {
    var o = t.replace(Ev, function(s) {
      if (s === "%%")
        return "%";
      if (a >= i)
        return s;
      switch (s) {
        case "%s":
          return String(e[a++]);
        case "%d":
          return Number(e[a++]);
        case "%j":
          try {
            return JSON.stringify(e[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return o;
  }
  return t;
}
function wv(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function Pe(t, r) {
  return !!(t == null || r === "array" && Array.isArray(t) && !t.length || wv(r) && typeof t == "string" && !t);
}
function xv(t, r, e) {
  var n = [], a = 0, i = t.length;
  function o(s) {
    n.push.apply(n, K(s || [])), a++, a === i && e(n);
  }
  t.forEach(function(s) {
    r(s, o);
  });
}
function ns(t, r, e) {
  var n = 0, a = t.length;
  function i(o) {
    if (o && o.length) {
      e(o);
      return;
    }
    var s = n;
    n = n + 1, s < a ? r(t[s], i) : e([]);
  }
  i([]);
}
function Pv(t) {
  var r = [];
  return Object.keys(t).forEach(function(e) {
    r.push.apply(r, K(t[e] || []));
  }), r;
}
var as = /* @__PURE__ */ function(t) {
  nr(e, t);
  var r = ar(e);
  function e(n, a) {
    var i;
    return De(this, e), i = r.call(this, "Async Validation Error"), w(Z(i), "errors", void 0), w(Z(i), "fields", void 0), i.errors = n, i.fields = a, i;
  }
  return je(e);
}(/* @__PURE__ */ Ni(Error));
function kv(t, r, e, n, a) {
  if (r.first) {
    var i = new Promise(function(v, y) {
      var m = function(b) {
        return n(b), b.length ? y(new as(b, Vi(b))) : v(a);
      }, g = Pv(t);
      ns(g, e, m);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var o = r.firstFields === !0 ? Object.keys(t) : r.firstFields || [], s = Object.keys(t), c = s.length, u = 0, l = [], d = new Promise(function(v, y) {
    var m = function(f) {
      if (l.push.apply(l, f), u++, u === c)
        return n(l), l.length ? y(new as(l, Vi(l))) : v(a);
    };
    s.length || (n(l), v(a)), s.forEach(function(g) {
      var f = t[g];
      o.indexOf(g) !== -1 ? ns(f, e, m) : xv(f, e, m);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function Fv(t) {
  return !!(t && t.message !== void 0);
}
function Mv(t, r) {
  for (var e = t, n = 0; n < r.length; n++) {
    if (e == null)
      return e;
    e = e[r[n]];
  }
  return e;
}
function is(t, r) {
  return function(e) {
    var n;
    return t.fullFields ? n = Mv(r, t.fullFields) : n = r[e.field || t.fullField], Fv(e) ? (e.field = e.field || t.fullField, e.fieldValue = n, e) : {
      message: typeof e == "function" ? e() : e,
      fieldValue: n,
      field: e.field || t.fullField
    };
  };
}
function os(t, r) {
  if (r) {
    for (var e in r)
      if (r.hasOwnProperty(e)) {
        var n = r[e];
        J(n) === "object" && J(t[e]) === "object" ? t[e] = M(M({}, t[e]), n) : t[e] = n;
      }
  }
  return t;
}
var mr = "enum", Tv = function(r, e, n, a, i) {
  r[mr] = Array.isArray(r[mr]) ? r[mr] : [], r[mr].indexOf(e) === -1 && a.push(rt(i.messages[mr], r.fullField, r[mr].join(", ")));
}, Rv = function(r, e, n, a, i) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(e) || a.push(rt(i.messages.pattern.mismatch, r.fullField, e, r.pattern));
    else if (typeof r.pattern == "string") {
      var o = new RegExp(r.pattern);
      o.test(e) || a.push(rt(i.messages.pattern.mismatch, r.fullField, e, r.pattern));
    }
  }
}, Av = function(r, e, n, a, i) {
  var o = typeof r.len == "number", s = typeof r.min == "number", c = typeof r.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = e, d = null, v = typeof e == "number", y = typeof e == "string", m = Array.isArray(e);
  if (v ? d = "number" : y ? d = "string" : m && (d = "array"), !d)
    return !1;
  m && (l = e.length), y && (l = e.replace(u, "_").length), o ? l !== r.len && a.push(rt(i.messages[d].len, r.fullField, r.len)) : s && !c && l < r.min ? a.push(rt(i.messages[d].min, r.fullField, r.min)) : c && !s && l > r.max ? a.push(rt(i.messages[d].max, r.fullField, r.max)) : s && c && (l < r.min || l > r.max) && a.push(rt(i.messages[d].range, r.fullField, r.min, r.max));
}, Gc = function(r, e, n, a, i, o) {
  r.required && (!n.hasOwnProperty(r.field) || Pe(e, o || r.type)) && a.push(rt(i.messages.required, r.fullField));
}, Ln;
const Ov = function() {
  if (Ln)
    return Ln;
  var t = "[a-fA-F\\d:]", r = function(E) {
    return E && E.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(t, ")|(?<=").concat(t, ")(?=\\s|$))") : "";
  }, e = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", a = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(e, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(e, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(e, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(e, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(e, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(e, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(e, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], i = "(?:%[0-9a-zA-Z]{1,})?", o = "(?:".concat(a.join("|"), ")").concat(i), s = new RegExp("(?:^".concat(e, "$)|(?:^").concat(o, "$)")), c = new RegExp("^".concat(e, "$")), u = new RegExp("^".concat(o, "$")), l = function(E) {
    return E && E.exact ? s : new RegExp("(?:".concat(r(E)).concat(e).concat(r(E), ")|(?:").concat(r(E)).concat(o).concat(r(E), ")"), "g");
  };
  l.v4 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(r(C)).concat(e).concat(r(C)), "g");
  }, l.v6 = function(C) {
    return C && C.exact ? u : new RegExp("".concat(r(C)).concat(o).concat(r(C)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", y = l.v4().source, m = l.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", f = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", S = '(?:[/?#][^\\s"]*)?', x = "(?:".concat(d, "|www\\.)").concat(v, "(?:localhost|").concat(y, "|").concat(m, "|").concat(g).concat(f).concat(b, ")").concat(p).concat(S);
  return Ln = new RegExp("(?:^".concat(x, "$)"), "i"), Ln;
};
var ss = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Wr = {
  integer: function(r) {
    return Wr.number(r) && parseInt(r, 10) === r;
  },
  float: function(r) {
    return Wr.number(r) && !Wr.integer(r);
  },
  array: function(r) {
    return Array.isArray(r);
  },
  regexp: function(r) {
    if (r instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(r);
    } catch {
      return !1;
    }
  },
  date: function(r) {
    return typeof r.getTime == "function" && typeof r.getMonth == "function" && typeof r.getYear == "function" && !isNaN(r.getTime());
  },
  number: function(r) {
    return isNaN(r) ? !1 : typeof r == "number";
  },
  object: function(r) {
    return J(r) === "object" && !Wr.array(r);
  },
  method: function(r) {
    return typeof r == "function";
  },
  email: function(r) {
    return typeof r == "string" && r.length <= 320 && !!r.match(ss.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(Ov());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(ss.hex);
  }
}, _v = function(r, e, n, a, i) {
  if (r.required && e === void 0) {
    Gc(r, e, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = r.type;
  o.indexOf(s) > -1 ? Wr[s](e) || a.push(rt(i.messages.types[s], r.fullField, r.type)) : s && J(e) !== r.type && a.push(rt(i.messages.types[s], r.fullField, r.type));
}, Nv = function(r, e, n, a, i) {
  (/^\s+$/.test(e) || e === "") && a.push(rt(i.messages.whitespace, r.fullField));
};
const ee = {
  required: Gc,
  whitespace: Nv,
  type: _v,
  range: Av,
  enum: Tv,
  pattern: Rv
};
var Vv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i);
  }
  n(o);
}, Iv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (e == null && !r.required)
      return n();
    ee.required(r, e, a, o, i, "array"), e != null && (ee.type(r, e, a, o, i), ee.range(r, e, a, o, i));
  }
  n(o);
}, $v = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i), e !== void 0 && ee.type(r, e, a, o, i);
  }
  n(o);
}, Lv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e, "date") && !r.required)
      return n();
    if (ee.required(r, e, a, o, i), !Pe(e, "date")) {
      var c;
      e instanceof Date ? c = e : c = new Date(e), ee.type(r, c, a, o, i), c && ee.range(r, c.getTime(), a, o, i);
    }
  }
  n(o);
}, Dv = "enum", jv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i), e !== void 0 && ee[Dv](r, e, a, o, i);
  }
  n(o);
}, Hv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i), e !== void 0 && (ee.type(r, e, a, o, i), ee.range(r, e, a, o, i));
  }
  n(o);
}, zv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i), e !== void 0 && (ee.type(r, e, a, o, i), ee.range(r, e, a, o, i));
  }
  n(o);
}, Wv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i), e !== void 0 && ee.type(r, e, a, o, i);
  }
  n(o);
}, Bv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (e === "" && (e = void 0), Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i), e !== void 0 && (ee.type(r, e, a, o, i), ee.range(r, e, a, o, i));
  }
  n(o);
}, qv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i), e !== void 0 && ee.type(r, e, a, o, i);
  }
  n(o);
}, Uv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e, "string") && !r.required)
      return n();
    ee.required(r, e, a, o, i), Pe(e, "string") || ee.pattern(r, e, a, o, i);
  }
  n(o);
}, Gv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e) && !r.required)
      return n();
    ee.required(r, e, a, o, i), Pe(e) || ee.type(r, e, a, o, i);
  }
  n(o);
}, Kv = function(r, e, n, a, i) {
  var o = [], s = Array.isArray(e) ? "array" : J(e);
  ee.required(r, e, a, o, i, s), n(o);
}, Xv = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Pe(e, "string") && !r.required)
      return n();
    ee.required(r, e, a, o, i, "string"), Pe(e, "string") || (ee.type(r, e, a, o, i), ee.range(r, e, a, o, i), ee.pattern(r, e, a, o, i), r.whitespace === !0 && ee.whitespace(r, e, a, o, i));
  }
  n(o);
}, Wa = function(r, e, n, a, i) {
  var o = r.type, s = [], c = r.required || !r.required && a.hasOwnProperty(r.field);
  if (c) {
    if (Pe(e, o) && !r.required)
      return n();
    ee.required(r, e, a, s, i, o), Pe(e, o) || ee.type(r, e, a, s, i);
  }
  n(s);
};
const Gr = {
  string: Xv,
  method: Wv,
  number: Bv,
  boolean: $v,
  regexp: Gv,
  integer: zv,
  float: Hv,
  array: Iv,
  object: qv,
  enum: jv,
  pattern: Uv,
  date: Lv,
  url: Wa,
  hex: Wa,
  email: Wa,
  required: Kv,
  any: Vv
};
var ln = /* @__PURE__ */ function() {
  function t(r) {
    De(this, t), w(this, "rules", null), w(this, "_messages", _i), this.define(r);
  }
  return je(t, [{
    key: "define",
    value: function(e) {
      var n = this;
      if (!e)
        throw new Error("Cannot configure a schema with no rules");
      if (J(e) !== "object" || Array.isArray(e))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(e).forEach(function(a) {
        var i = e[a];
        n.rules[a] = Array.isArray(i) ? i : [i];
      });
    }
  }, {
    key: "messages",
    value: function(e) {
      return e && (this._messages = os(Oi(), e)), this._messages;
    }
  }, {
    key: "validate",
    value: function(e) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, o = e, s = a, c = i;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, o), Promise.resolve(o);
      function u(m) {
        var g = [], f = {};
        function b(S) {
          if (Array.isArray(S)) {
            var x;
            g = (x = g).concat.apply(x, K(S));
          } else
            g.push(S);
        }
        for (var p = 0; p < m.length; p++)
          b(m[p]);
        g.length ? (f = Vi(g), c(g, f)) : c(null, o);
      }
      if (s.messages) {
        var l = this.messages();
        l === _i && (l = Oi()), os(l, s.messages), s.messages = l;
      } else
        s.messages = this.messages();
      var d = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(m) {
        var g = n.rules[m], f = o[m];
        g.forEach(function(b) {
          var p = b;
          typeof p.transform == "function" && (o === e && (o = M({}, o)), f = o[m] = p.transform(f), f != null && (p.type = p.type || (Array.isArray(f) ? "array" : J(f)))), typeof p == "function" ? p = {
            validator: p
          } : p = M({}, p), p.validator = n.getValidationMethod(p), p.validator && (p.field = m, p.fullField = p.fullField || m, p.type = n.getType(p), d[m] = d[m] || [], d[m].push({
            rule: p,
            value: f,
            source: o,
            field: m
          }));
        });
      });
      var y = {};
      return kv(d, s, function(m, g) {
        var f = m.rule, b = (f.type === "object" || f.type === "array") && (J(f.fields) === "object" || J(f.defaultField) === "object");
        b = b && (f.required || !f.required && m.value), f.field = m.field;
        function p(P, R) {
          return M(M({}, R), {}, {
            fullField: "".concat(f.fullField, ".").concat(P),
            fullFields: f.fullFields ? [].concat(K(f.fullFields), [P]) : [P]
          });
        }
        function S() {
          var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], R = Array.isArray(P) ? P : [P];
          !s.suppressWarning && R.length && t.warning("async-validator:", R), R.length && f.message !== void 0 && (R = [].concat(f.message));
          var A = R.map(is(f, o));
          if (s.first && A.length)
            return y[f.field] = 1, g(A);
          if (!b)
            g(A);
          else {
            if (f.required && !m.value)
              return f.message !== void 0 ? A = [].concat(f.message).map(is(f, o)) : s.error && (A = [s.error(f, rt(s.messages.required, f.field))]), g(A);
            var O = {};
            f.defaultField && Object.keys(m.value).map(function($) {
              O[$] = f.defaultField;
            }), O = M(M({}, O), m.rule.fields);
            var I = {};
            Object.keys(O).forEach(function($) {
              var V = O[$], G = Array.isArray(V) ? V : [V];
              I[$] = G.map(p.bind(null, $));
            });
            var D = new t(I);
            D.messages(s.messages), m.rule.options && (m.rule.options.messages = s.messages, m.rule.options.error = s.error), D.validate(m.value, m.rule.options || s, function($) {
              var V = [];
              A && A.length && V.push.apply(V, K(A)), $ && $.length && V.push.apply(V, K($)), g(V.length ? V : null);
            });
          }
        }
        var x;
        if (f.asyncValidator)
          x = f.asyncValidator(f, m.value, S, m.source, s);
        else if (f.validator) {
          try {
            x = f.validator(f, m.value, S, m.source, s);
          } catch (P) {
            var C, E;
            (C = (E = console).error) === null || C === void 0 || C.call(E, P), s.suppressValidatorError || setTimeout(function() {
              throw P;
            }, 0), S(P.message);
          }
          x === !0 ? S() : x === !1 ? S(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || "".concat(f.fullField || f.field, " fails")) : x instanceof Array ? S(x) : x instanceof Error && S(x.message);
        }
        x && x.then && x.then(function() {
          return S();
        }, function(P) {
          return S(P);
        });
      }, function(m) {
        u(m);
      }, o);
    }
  }, {
    key: "getType",
    value: function(e) {
      if (e.type === void 0 && e.pattern instanceof RegExp && (e.type = "pattern"), typeof e.validator != "function" && e.type && !Gr.hasOwnProperty(e.type))
        throw new Error(rt("Unknown rule type %s", e.type));
      return e.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(e) {
      if (typeof e.validator == "function")
        return e.validator;
      var n = Object.keys(e), a = n.indexOf("message");
      return a !== -1 && n.splice(a, 1), n.length === 1 && n[0] === "required" ? Gr.required : Gr[this.getType(e)] || void 0;
    }
  }]), t;
}();
w(ln, "register", function(r, e) {
  if (typeof e != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Gr[r] = e;
});
w(ln, "warning", Uc);
w(ln, "messages", _i);
w(ln, "validators", Gr);
var et = "'${name}' is not a valid ${type}", Kc = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: et,
    method: et,
    array: et,
    object: et,
    number: et,
    date: et,
    boolean: et,
    integer: et,
    float: et,
    regexp: et,
    email: et,
    url: et,
    hex: et
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, cs = ln;
function Qv(t, r) {
  return t.replace(/\\?\$\{\w+\}/g, function(e) {
    if (e.startsWith("\\"))
      return e.slice(1);
    var n = e.slice(2, -1);
    return r[n];
  });
}
var us = "CODE_LOGIC_ERROR";
function Ii(t, r, e, n, a) {
  return $i.apply(this, arguments);
}
function $i() {
  return $i = un(/* @__PURE__ */ mt().mark(function t(r, e, n, a, i) {
    var o, s, c, u, l, d, v, y, m;
    return mt().wrap(function(f) {
      for (; ; ) switch (f.prev = f.next) {
        case 0:
          return o = M({}, n), delete o.ruleIndex, cs.warning = function() {
          }, o.validator && (s = o.validator, o.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(us);
            }
          }), c = null, o && o.type === "array" && o.defaultField && (c = o.defaultField, delete o.defaultField), u = new cs(w({}, r, [o])), l = Sr(Kc, a.validateMessages), u.messages(l), d = [], f.prev = 10, f.next = 13, Promise.resolve(u.validate(w({}, r, e), M({}, a)));
        case 13:
          f.next = 18;
          break;
        case 15:
          f.prev = 15, f.t0 = f.catch(10), f.t0.errors && (d = f.t0.errors.map(function(b, p) {
            var S = b.message, x = S === us ? l.default : S;
            return /* @__PURE__ */ h.isValidElement(x) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ h.cloneElement(x, {
                key: "error_".concat(p)
              })
            ) : x;
          }));
        case 18:
          if (!(!d.length && c)) {
            f.next = 23;
            break;
          }
          return f.next = 21, Promise.all(e.map(function(b, p) {
            return Ii("".concat(r, ".").concat(p), b, c, a, i);
          }));
        case 21:
          return v = f.sent, f.abrupt("return", v.reduce(function(b, p) {
            return [].concat(K(b), K(p));
          }, []));
        case 23:
          return y = M(M({}, n), {}, {
            name: r,
            enum: (n.enum || []).join(", ")
          }, i), m = d.map(function(b) {
            return typeof b == "string" ? Qv(b, y) : b;
          }), f.abrupt("return", m);
        case 26:
        case "end":
          return f.stop();
      }
    }, t, null, [[10, 15]]);
  })), $i.apply(this, arguments);
}
function Yv(t, r, e, n, a, i) {
  var o = t.join("."), s = e.map(function(l, d) {
    var v = l.validator, y = M(M({}, l), {}, {
      ruleIndex: d
    });
    return v && (y.validator = function(m, g, f) {
      var b = !1, p = function() {
        for (var C = arguments.length, E = new Array(C), P = 0; P < C; P++)
          E[P] = arguments[P];
        Promise.resolve().then(function() {
          he(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || f.apply(void 0, E);
        });
      }, S = v(m, g, p);
      b = S && typeof S.then == "function" && typeof S.catch == "function", he(b, "`callback` is deprecated. Please return a promise instead."), b && S.then(function() {
        f();
      }).catch(function(x) {
        f(x || " ");
      });
    }), y;
  }).sort(function(l, d) {
    var v = l.warningOnly, y = l.ruleIndex, m = d.warningOnly, g = d.ruleIndex;
    return !!v == !!m ? y - g : v ? 1 : -1;
  }), c;
  if (a === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var l = un(/* @__PURE__ */ mt().mark(function d(v, y) {
        var m, g, f;
        return mt().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              m = 0;
            case 1:
              if (!(m < s.length)) {
                p.next = 12;
                break;
              }
              return g = s[m], p.next = 5, Ii(o, r, g, n, i);
            case 5:
              if (f = p.sent, !f.length) {
                p.next = 9;
                break;
              }
              return y([{
                errors: f,
                rule: g
              }]), p.abrupt("return");
            case 9:
              m += 1, p.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return p.stop();
          }
        }, d);
      }));
      return function(d, v) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var u = s.map(function(l) {
      return Ii(o, r, l, n, i).then(function(d) {
        return {
          errors: d,
          rule: l
        };
      });
    });
    c = (a ? Jv(u) : Zv(u)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return c.catch(function(l) {
    return l;
  }), c;
}
function Zv(t) {
  return Li.apply(this, arguments);
}
function Li() {
  return Li = un(/* @__PURE__ */ mt().mark(function t(r) {
    return mt().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(r).then(function(a) {
            var i, o = (i = []).concat.apply(i, K(a));
            return o;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, t);
  })), Li.apply(this, arguments);
}
function Jv(t) {
  return Di.apply(this, arguments);
}
function Di() {
  return Di = un(/* @__PURE__ */ mt().mark(function t(r) {
    var e;
    return mt().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return e = 0, a.abrupt("return", new Promise(function(i) {
            r.forEach(function(o) {
              o.then(function(s) {
                s.errors.length && i([s]), e += 1, e === r.length && i([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, t);
  })), Di.apply(this, arguments);
}
function be(t) {
  return Ai(t);
}
function ls(t, r) {
  var e = {};
  return r.forEach(function(n) {
    var a = xt(t, n);
    e = dt(e, n, a);
  }), e;
}
function wr(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return t && t.some(function(n) {
    return Xc(r, n, e);
  });
}
function Xc(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !t || !r || !e && t.length !== r.length ? !1 : r.every(function(n, a) {
    return t[a] === n;
  });
}
function eh(t, r) {
  if (t === r)
    return !0;
  if (!t && r || t && !r || !t || !r || J(t) !== "object" || J(r) !== "object")
    return !1;
  var e = Object.keys(t), n = Object.keys(r), a = new Set([].concat(e, n));
  return K(a).every(function(i) {
    var o = t[i], s = r[i];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function th(t) {
  var r = arguments.length <= 1 ? void 0 : arguments[1];
  return r && r.target && J(r.target) === "object" && t in r.target ? r.target[t] : r;
}
function fs(t, r, e) {
  var n = t.length;
  if (r < 0 || r >= n || e < 0 || e >= n)
    return t;
  var a = t[r], i = r - e;
  return i > 0 ? [].concat(K(t.slice(0, e)), [a], K(t.slice(e, r)), K(t.slice(r + 1, n))) : i < 0 ? [].concat(K(t.slice(0, r)), K(t.slice(r + 1, e + 1)), [a], K(t.slice(e + 1, n))) : t;
}
var rh = ["name"], it = [];
function Ba(t, r, e, n, a, i) {
  return typeof t == "function" ? t(r, e, "source" in i ? {
    source: i.source
  } : {}) : n !== a;
}
var io = /* @__PURE__ */ function(t) {
  nr(e, t);
  var r = ar(e);
  function e(n) {
    var a;
    if (De(this, e), a = r.call(this, n), w(Z(a), "state", {
      resetCount: 0
    }), w(Z(a), "cancelRegisterFunc", null), w(Z(a), "mounted", !1), w(Z(a), "touched", !1), w(Z(a), "dirty", !1), w(Z(a), "validatePromise", void 0), w(Z(a), "prevValidating", void 0), w(Z(a), "errors", it), w(Z(a), "warnings", it), w(Z(a), "cancelRegister", function() {
      var c = a.props, u = c.preserve, l = c.isListField, d = c.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(l, u, be(d)), a.cancelRegisterFunc = null;
    }), w(Z(a), "getNamePath", function() {
      var c = a.props, u = c.name, l = c.fieldContext, d = l.prefixName, v = d === void 0 ? [] : d;
      return u !== void 0 ? [].concat(K(v), K(u)) : [];
    }), w(Z(a), "getRules", function() {
      var c = a.props, u = c.rules, l = u === void 0 ? [] : u, d = c.fieldContext;
      return l.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), w(Z(a), "refresh", function() {
      a.mounted && a.setState(function(c) {
        var u = c.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }), w(Z(a), "metaCache", null), w(Z(a), "triggerMetaEvent", function(c) {
      var u = a.props.onMetaChange;
      if (u) {
        var l = M(M({}, a.getMeta()), {}, {
          destroy: c
        });
        Za(a.metaCache, l) || u(l), a.metaCache = l;
      } else
        a.metaCache = null;
    }), w(Z(a), "onStoreChange", function(c, u, l) {
      var d = a.props, v = d.shouldUpdate, y = d.dependencies, m = y === void 0 ? [] : y, g = d.onReset, f = l.store, b = a.getNamePath(), p = a.getValue(c), S = a.getValue(f), x = u && wr(u, b);
      switch (l.type === "valueUpdate" && l.source === "external" && !Za(p, S) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = it, a.warnings = it, a.triggerMetaEvent()), l.type) {
        case "reset":
          if (!u || x) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = it, a.warnings = it, a.triggerMetaEvent(), g == null || g(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (v && Ba(v, c, f, p, S, l)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var C = l.data;
          if (x) {
            "touched" in C && (a.touched = C.touched), "validating" in C && !("originRCField" in C) && (a.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (a.errors = C.errors || it), "warnings" in C && (a.warnings = C.warnings || it), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in C && wr(u, b, !0)) {
            a.reRender();
            return;
          }
          if (v && !b.length && Ba(v, c, f, p, S, l)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var E = m.map(be);
          if (E.some(function(P) {
            return wr(l.relatedFields, P);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (x || (!m.length || b.length || v) && Ba(v, c, f, p, S, l)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), w(Z(a), "validateRules", function(c) {
      var u = a.getNamePath(), l = a.getValue(), d = c || {}, v = d.triggerName, y = d.validateOnly, m = y === void 0 ? !1 : y, g = Promise.resolve().then(/* @__PURE__ */ un(/* @__PURE__ */ mt().mark(function f() {
        var b, p, S, x, C, E, P;
        return mt().wrap(function(A) {
          for (; ; ) switch (A.prev = A.next) {
            case 0:
              if (a.mounted) {
                A.next = 2;
                break;
              }
              return A.abrupt("return", []);
            case 2:
              if (b = a.props, p = b.validateFirst, S = p === void 0 ? !1 : p, x = b.messageVariables, C = b.validateDebounce, E = a.getRules(), v && (E = E.filter(function(O) {
                return O;
              }).filter(function(O) {
                var I = O.validateTrigger;
                if (!I)
                  return !0;
                var D = Ai(I);
                return D.includes(v);
              })), !(C && v)) {
                A.next = 10;
                break;
              }
              return A.next = 8, new Promise(function(O) {
                setTimeout(O, C);
              });
            case 8:
              if (a.validatePromise === g) {
                A.next = 10;
                break;
              }
              return A.abrupt("return", []);
            case 10:
              return P = Yv(u, l, E, c, S, x), P.catch(function(O) {
                return O;
              }).then(function() {
                var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : it;
                if (a.validatePromise === g) {
                  var I;
                  a.validatePromise = null;
                  var D = [], $ = [];
                  (I = O.forEach) === null || I === void 0 || I.call(O, function(V) {
                    var G = V.rule.warningOnly, F = V.errors, k = F === void 0 ? it : F;
                    G ? $.push.apply($, K(k)) : D.push.apply(D, K(k));
                  }), a.errors = D, a.warnings = $, a.triggerMetaEvent(), a.reRender();
                }
              }), A.abrupt("return", P);
            case 13:
            case "end":
              return A.stop();
          }
        }, f);
      })));
      return m || (a.validatePromise = g, a.dirty = !0, a.errors = it, a.warnings = it, a.triggerMetaEvent(), a.reRender()), g;
    }), w(Z(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), w(Z(a), "isFieldTouched", function() {
      return a.touched;
    }), w(Z(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var c = a.props.fieldContext, u = c.getInternalHooks(tr), l = u.getInitialValue;
      return l(a.getNamePath()) !== void 0;
    }), w(Z(a), "getErrors", function() {
      return a.errors;
    }), w(Z(a), "getWarnings", function() {
      return a.warnings;
    }), w(Z(a), "isListField", function() {
      return a.props.isListField;
    }), w(Z(a), "isList", function() {
      return a.props.isList;
    }), w(Z(a), "isPreserve", function() {
      return a.props.preserve;
    }), w(Z(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var c = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return c;
    }), w(Z(a), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var u = a.getMeta();
        return M(M({}, a.getOnlyChild(c(a.getControlled(), u, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = Un(c);
      return l.length !== 1 || !/* @__PURE__ */ h.isValidElement(l[0]) ? {
        child: l,
        isFunction: !1
      } : {
        child: l[0],
        isFunction: !1
      };
    }), w(Z(a), "getValue", function(c) {
      var u = a.props.fieldContext.getFieldsValue, l = a.getNamePath();
      return xt(c || u(!0), l);
    }), w(Z(a), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, l = u.name, d = u.trigger, v = u.validateTrigger, y = u.getValueFromEvent, m = u.normalize, g = u.valuePropName, f = u.getValueProps, b = u.fieldContext, p = v !== void 0 ? v : b.validateTrigger, S = a.getNamePath(), x = b.getInternalHooks, C = b.getFieldsValue, E = x(tr), P = E.dispatch, R = a.getValue(), A = f || function(V) {
        return w({}, g, V);
      }, O = c[d], I = l !== void 0 ? A(R) : {};
      z.env.NODE_ENV !== "production" && I && Object.keys(I).forEach(function(V) {
        he(typeof I[V] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(V, ")"));
      });
      var D = M(M({}, c), I);
      D[d] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var V, G = arguments.length, F = new Array(G), k = 0; k < G; k++)
          F[k] = arguments[k];
        y ? V = y.apply(void 0, F) : V = th.apply(void 0, [g].concat(F)), m && (V = m(V, R, C(!0))), P({
          type: "updateValue",
          namePath: S,
          value: V
        }), O && O.apply(void 0, F);
      };
      var $ = Ai(p || []);
      return $.forEach(function(V) {
        var G = D[V];
        D[V] = function() {
          G && G.apply(void 0, arguments);
          var F = a.props.rules;
          F && F.length && P({
            type: "validateField",
            namePath: S,
            triggerName: V
          });
        };
      }), D;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, o = i(tr), s = o.initEntityValue;
      s(Z(a));
    }
    return a;
  }
  return je(e, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var s = o.getInternalHooks, c = s(tr), u = c.registerField;
        this.cancelRegisterFunc = u(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, i = this.props.children, o = this.getOnlyChild(i), s = o.child, c = o.isFunction, u;
      return c ? u = s : /* @__PURE__ */ h.isValidElement(s) ? u = /* @__PURE__ */ h.cloneElement(s, this.getControlled(s.props)) : (he(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ h.createElement(h.Fragment, {
        key: a
      }, u);
    }
  }]), e;
}(h.Component);
w(io, "contextType", Tr);
w(io, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Qc(t) {
  var r = t.name, e = Ht(t, rh), n = h.useContext(Tr), a = h.useContext(ea), i = r !== void 0 ? be(r) : void 0, o = "keep";
  return e.isListField || (o = "_".concat((i || []).join("_"))), z.env.NODE_ENV !== "production" && e.preserve === !1 && e.isListField && i.length <= 1 && he(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ h.createElement(io, pt({
    key: o,
    name: i,
    isListField: !!a
  }, e, {
    fieldContext: n
  }));
}
function nh(t) {
  var r = t.name, e = t.initialValue, n = t.children, a = t.rules, i = t.validateTrigger, o = t.isListField, s = h.useContext(Tr), c = h.useContext(ea), u = h.useRef({
    keys: [],
    id: 0
  }), l = u.current, d = h.useMemo(function() {
    var g = be(s.prefixName) || [];
    return [].concat(K(g), K(be(r)));
  }, [s.prefixName, r]), v = h.useMemo(function() {
    return M(M({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), y = h.useMemo(function() {
    return {
      getKey: function(f) {
        var b = d.length, p = f[b];
        return [l.keys[p], f.slice(b + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return he(!1, "Form.List only accepts function as children."), null;
  var m = function(f, b, p) {
    var S = p.source;
    return S === "internal" ? !1 : f !== b;
  };
  return /* @__PURE__ */ h.createElement(ea.Provider, {
    value: y
  }, /* @__PURE__ */ h.createElement(Tr.Provider, {
    value: v
  }, /* @__PURE__ */ h.createElement(Qc, {
    name: [],
    shouldUpdate: m,
    rules: a,
    validateTrigger: i,
    initialValue: e,
    isList: !0,
    isListField: o ?? !!c
  }, function(g, f) {
    var b = g.value, p = b === void 0 ? [] : b, S = g.onChange, x = s.getFieldValue, C = function() {
      var A = x(d || []);
      return A || [];
    }, E = {
      add: function(A, O) {
        var I = C();
        O >= 0 && O <= I.length ? (l.keys = [].concat(K(l.keys.slice(0, O)), [l.id], K(l.keys.slice(O))), S([].concat(K(I.slice(0, O)), [A], K(I.slice(O))))) : (z.env.NODE_ENV !== "production" && (O < 0 || O > I.length) && he(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(K(l.keys), [l.id]), S([].concat(K(I), [A]))), l.id += 1;
      },
      remove: function(A) {
        var O = C(), I = new Set(Array.isArray(A) ? A : [A]);
        I.size <= 0 || (l.keys = l.keys.filter(function(D, $) {
          return !I.has($);
        }), S(O.filter(function(D, $) {
          return !I.has($);
        })));
      },
      move: function(A, O) {
        if (A !== O) {
          var I = C();
          A < 0 || A >= I.length || O < 0 || O >= I.length || (l.keys = fs(l.keys, A, O), S(fs(I, A, O)));
        }
      }
    }, P = p || [];
    return Array.isArray(P) || (P = [], z.env.NODE_ENV !== "production" && he(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(P.map(function(R, A) {
      var O = l.keys[A];
      return O === void 0 && (l.keys[A] = l.id, O = l.keys[A], l.id += 1), {
        name: A,
        key: O,
        isListField: !0
      };
    }), E, f);
  })));
}
function ah(t) {
  var r = !1, e = t.length, n = [];
  return t.length ? new Promise(function(a, i) {
    t.forEach(function(o, s) {
      o.catch(function(c) {
        return r = !0, c;
      }).then(function(c) {
        e -= 1, n[s] = c, !(e > 0) && (r && i(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var Yc = "__@field_split__";
function qa(t) {
  return t.map(function(r) {
    return "".concat(J(r), ":").concat(r);
  }).join(Yc);
}
var pr = /* @__PURE__ */ function() {
  function t() {
    De(this, t), w(this, "kvs", /* @__PURE__ */ new Map());
  }
  return je(t, [{
    key: "set",
    value: function(e, n) {
      this.kvs.set(qa(e), n);
    }
  }, {
    key: "get",
    value: function(e) {
      return this.kvs.get(qa(e));
    }
  }, {
    key: "update",
    value: function(e, n) {
      var a = this.get(e), i = n(a);
      i ? this.set(e, i) : this.delete(e);
    }
  }, {
    key: "delete",
    value: function(e) {
      this.kvs.delete(qa(e));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(e) {
      return K(this.kvs.entries()).map(function(n) {
        var a = H(n, 2), i = a[0], o = a[1], s = i.split(Yc);
        return e({
          key: s.map(function(c) {
            var u = c.match(/^([^:]*):(.*)$/), l = H(u, 3), d = l[1], v = l[2];
            return d === "number" ? Number(v) : v;
          }),
          value: o
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var e = {};
      return this.map(function(n) {
        var a = n.key, i = n.value;
        return e[a.join(".")] = i, null;
      }), e;
    }
  }]), t;
}(), ih = ["name"], oh = /* @__PURE__ */ je(function t(r) {
  var e = this;
  De(this, t), w(this, "formHooked", !1), w(this, "forceRootUpdate", void 0), w(this, "subscribable", !0), w(this, "store", {}), w(this, "fieldEntities", []), w(this, "initialValues", {}), w(this, "callbacks", {}), w(this, "validateMessages", null), w(this, "preserve", null), w(this, "lastValidatePromise", null), w(this, "getForm", function() {
    return {
      getFieldValue: e.getFieldValue,
      getFieldsValue: e.getFieldsValue,
      getFieldError: e.getFieldError,
      getFieldWarning: e.getFieldWarning,
      getFieldsError: e.getFieldsError,
      isFieldsTouched: e.isFieldsTouched,
      isFieldTouched: e.isFieldTouched,
      isFieldValidating: e.isFieldValidating,
      isFieldsValidating: e.isFieldsValidating,
      resetFields: e.resetFields,
      setFields: e.setFields,
      setFieldValue: e.setFieldValue,
      setFieldsValue: e.setFieldsValue,
      validateFields: e.validateFields,
      submit: e.submit,
      _init: !0,
      getInternalHooks: e.getInternalHooks
    };
  }), w(this, "getInternalHooks", function(n) {
    return n === tr ? (e.formHooked = !0, {
      dispatch: e.dispatch,
      initEntityValue: e.initEntityValue,
      registerField: e.registerField,
      useSubscribe: e.useSubscribe,
      setInitialValues: e.setInitialValues,
      destroyForm: e.destroyForm,
      setCallbacks: e.setCallbacks,
      setValidateMessages: e.setValidateMessages,
      getFields: e.getFields,
      setPreserve: e.setPreserve,
      getInitialValue: e.getInitialValue,
      registerWatch: e.registerWatch
    }) : (he(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), w(this, "useSubscribe", function(n) {
    e.subscribable = n;
  }), w(this, "prevWithoutPreserves", null), w(this, "setInitialValues", function(n, a) {
    if (e.initialValues = n || {}, a) {
      var i, o = Sr(n, e.store);
      (i = e.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        o = dt(o, c, xt(n, c));
      }), e.prevWithoutPreserves = null, e.updateStore(o);
    }
  }), w(this, "destroyForm", function(n) {
    if (n)
      e.updateStore({});
    else {
      var a = new pr();
      e.getFieldEntities(!0).forEach(function(i) {
        e.isMergedPreserve(i.isPreserve()) || a.set(i.getNamePath(), !0);
      }), e.prevWithoutPreserves = a;
    }
  }), w(this, "getInitialValue", function(n) {
    var a = xt(e.initialValues, n);
    return n.length ? Sr(a) : a;
  }), w(this, "setCallbacks", function(n) {
    e.callbacks = n;
  }), w(this, "setValidateMessages", function(n) {
    e.validateMessages = n;
  }), w(this, "setPreserve", function(n) {
    e.preserve = n;
  }), w(this, "watchList", []), w(this, "registerWatch", function(n) {
    return e.watchList.push(n), function() {
      e.watchList = e.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), w(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (e.watchList.length) {
      var a = e.getFieldsValue(), i = e.getFieldsValue(!0);
      e.watchList.forEach(function(o) {
        o(a, i, n);
      });
    }
  }), w(this, "timeoutId", null), w(this, "warningUnhooked", function() {
    z.env.NODE_ENV !== "production" && !e.timeoutId && typeof window < "u" && (e.timeoutId = setTimeout(function() {
      e.timeoutId = null, e.formHooked || he(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), w(this, "updateStore", function(n) {
    e.store = n;
  }), w(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? e.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : e.fieldEntities;
  }), w(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new pr();
    return e.getFieldEntities(n).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }), w(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return e.getFieldEntities(!0);
    var a = e.getFieldsMap(!0);
    return n.map(function(i) {
      var o = be(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: be(i)
      };
    });
  }), w(this, "getFieldsValue", function(n, a) {
    e.warningUnhooked();
    var i, o, s;
    if (n === !0 || Array.isArray(n) ? (i = n, o = a) : n && J(n) === "object" && (s = n.strict, o = n.filter), i === !0 && !o)
      return e.store;
    var c = e.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), u = [];
    return c.forEach(function(l) {
      var d, v, y = "INVALIDATE_NAME_PATH" in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
      if (s) {
        var m, g;
        if ((m = (g = l).isList) !== null && m !== void 0 && m.call(g))
          return;
      } else if (!i && (d = (v = l).isListField) !== null && d !== void 0 && d.call(v))
        return;
      if (!o)
        u.push(y);
      else {
        var f = "getMeta" in l ? l.getMeta() : null;
        o(f) && u.push(y);
      }
    }), ls(e.store, u.map(be));
  }), w(this, "getFieldValue", function(n) {
    e.warningUnhooked();
    var a = be(n);
    return xt(e.store, a);
  }), w(this, "getFieldsError", function(n) {
    e.warningUnhooked();
    var a = e.getFieldEntitiesForNamePathList(n);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: be(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), w(this, "getFieldError", function(n) {
    e.warningUnhooked();
    var a = be(n), i = e.getFieldsError([a])[0];
    return i.errors;
  }), w(this, "getFieldWarning", function(n) {
    e.warningUnhooked();
    var a = be(n), i = e.getFieldsError([a])[0];
    return i.warnings;
  }), w(this, "isFieldsTouched", function() {
    e.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a[0], s = a[1], c, u = !1;
    a.length === 0 ? c = null : a.length === 1 ? Array.isArray(o) ? (c = o.map(be), u = !1) : (c = null, u = o) : (c = o.map(be), u = s);
    var l = e.getFieldEntities(!0), d = function(f) {
      return f.isFieldTouched();
    };
    if (!c)
      return u ? l.every(function(g) {
        return d(g) || g.isList();
      }) : l.some(d);
    var v = new pr();
    c.forEach(function(g) {
      v.set(g, []);
    }), l.forEach(function(g) {
      var f = g.getNamePath();
      c.forEach(function(b) {
        b.every(function(p, S) {
          return f[S] === p;
        }) && v.update(b, function(p) {
          return [].concat(K(p), [g]);
        });
      });
    });
    var y = function(f) {
      return f.some(d);
    }, m = v.map(function(g) {
      var f = g.value;
      return f;
    });
    return u ? m.every(y) : m.some(y);
  }), w(this, "isFieldTouched", function(n) {
    return e.warningUnhooked(), e.isFieldsTouched([n]);
  }), w(this, "isFieldsValidating", function(n) {
    e.warningUnhooked();
    var a = e.getFieldEntities();
    if (!n)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = n.map(be);
    return a.some(function(o) {
      var s = o.getNamePath();
      return wr(i, s) && o.isFieldValidating();
    });
  }), w(this, "isFieldValidating", function(n) {
    return e.warningUnhooked(), e.isFieldsValidating([n]);
  }), w(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new pr(), i = e.getFieldEntities(!0);
    i.forEach(function(c) {
      var u = c.props.initialValue, l = c.getNamePath();
      if (u !== void 0) {
        var d = a.get(l) || /* @__PURE__ */ new Set();
        d.add({
          entity: c,
          value: u
        }), a.set(l, d);
      }
    });
    var o = function(u) {
      u.forEach(function(l) {
        var d = l.props.initialValue;
        if (d !== void 0) {
          var v = l.getNamePath(), y = e.getInitialValue(v);
          if (y !== void 0)
            he(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var m = a.get(v);
            if (m && m.size > 1)
              he(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var g = e.getFieldValue(v), f = l.isListField();
              !f && (!n.skipExist || g === void 0) && e.updateStore(dt(e.store, v, K(m)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var u = a.get(c);
      if (u) {
        var l;
        (l = s).push.apply(l, K(K(u).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = i, o(s);
  }), w(this, "resetFields", function(n) {
    e.warningUnhooked();
    var a = e.store;
    if (!n) {
      e.updateStore(Sr(e.initialValues)), e.resetWithFieldInitialValue(), e.notifyObservers(a, null, {
        type: "reset"
      }), e.notifyWatch();
      return;
    }
    var i = n.map(be);
    i.forEach(function(o) {
      var s = e.getInitialValue(o);
      e.updateStore(dt(e.store, o, s));
    }), e.resetWithFieldInitialValue({
      namePathList: i
    }), e.notifyObservers(a, i, {
      type: "reset"
    }), e.notifyWatch(i);
  }), w(this, "setFields", function(n) {
    e.warningUnhooked();
    var a = e.store, i = [];
    n.forEach(function(o) {
      var s = o.name, c = Ht(o, ih), u = be(s);
      i.push(u), "value" in c && e.updateStore(dt(e.store, u, c.value)), e.notifyObservers(a, [u], {
        type: "setField",
        data: o
      });
    }), e.notifyWatch(i);
  }), w(this, "getFields", function() {
    var n = e.getFieldEntities(!0), a = n.map(function(i) {
      var o = i.getNamePath(), s = i.getMeta(), c = M(M({}, s), {}, {
        name: o,
        value: e.getFieldValue(o)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return a;
  }), w(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var i = n.getNamePath(), o = xt(e.store, i);
      o === void 0 && e.updateStore(dt(e.store, i, a));
    }
  }), w(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : e.preserve;
    return a ?? !0;
  }), w(this, "registerField", function(n) {
    e.fieldEntities.push(n);
    var a = n.getNamePath();
    if (e.notifyWatch([a]), n.props.initialValue !== void 0) {
      var i = e.store;
      e.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), e.notifyObservers(i, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (e.fieldEntities = e.fieldEntities.filter(function(d) {
        return d !== n;
      }), !e.isMergedPreserve(s) && (!o || c.length > 1)) {
        var u = o ? void 0 : e.getInitialValue(a);
        if (a.length && e.getFieldValue(a) !== u && e.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Xc(d.getNamePath(), a)
          );
        })) {
          var l = e.store;
          e.updateStore(dt(l, a, u, !0)), e.notifyObservers(l, [a], {
            type: "remove"
          }), e.triggerDependenciesUpdate(l, a);
        }
      }
      e.notifyWatch([a]);
    };
  }), w(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var a = n.namePath, i = n.value;
        e.updateValue(a, i);
        break;
      }
      case "validateField": {
        var o = n.namePath, s = n.triggerName;
        e.validateFields([o], {
          triggerName: s
        });
        break;
      }
    }
  }), w(this, "notifyObservers", function(n, a, i) {
    if (e.subscribable) {
      var o = M(M({}, i), {}, {
        store: e.getFieldsValue(!0)
      });
      e.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, a, o);
      });
    } else
      e.forceRootUpdate();
  }), w(this, "triggerDependenciesUpdate", function(n, a) {
    var i = e.getDependencyChildrenFields(a);
    return i.length && e.validateFields(i), e.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(K(i))
    }), i;
  }), w(this, "updateValue", function(n, a) {
    var i = be(n), o = e.store;
    e.updateStore(dt(e.store, i, a)), e.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), e.notifyWatch([i]);
    var s = e.triggerDependenciesUpdate(o, i), c = e.callbacks.onValuesChange;
    if (c) {
      var u = ls(e.store, [i]);
      c(u, e.getFieldsValue());
    }
    e.triggerOnFieldsChange([i].concat(K(s)));
  }), w(this, "setFieldsValue", function(n) {
    e.warningUnhooked();
    var a = e.store;
    if (n) {
      var i = Sr(e.store, n);
      e.updateStore(i);
    }
    e.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), e.notifyWatch();
  }), w(this, "setFieldValue", function(n, a) {
    e.setFields([{
      name: n,
      value: a
    }]);
  }), w(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), i = [], o = new pr();
    e.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(l) {
        var d = be(l);
        o.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(c), v;
        });
      });
    });
    var s = function c(u) {
      var l = o.get(u) || /* @__PURE__ */ new Set();
      l.forEach(function(d) {
        if (!a.has(d)) {
          a.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (i.push(v), c(v));
        }
      });
    };
    return s(n), i;
  }), w(this, "triggerOnFieldsChange", function(n, a) {
    var i = e.callbacks.onFieldsChange;
    if (i) {
      var o = e.getFields();
      if (a) {
        var s = new pr();
        a.forEach(function(u) {
          var l = u.name, d = u.errors;
          s.set(l, d);
        }), o.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var c = o.filter(function(u) {
        var l = u.name;
        return wr(n, l);
      });
      c.length && i(c, o);
    }
  }), w(this, "validateFields", function(n, a) {
    e.warningUnhooked();
    var i, o;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (i = n, o = a) : o = n;
    var s = !!i, c = s ? i.map(be) : [], u = [], l = String(Date.now()), d = /* @__PURE__ */ new Set(), v = o || {}, y = v.recursive, m = v.dirty;
    e.getFieldEntities(!0).forEach(function(p) {
      if (s || c.push(p.getNamePath()), !(!p.props.rules || !p.props.rules.length) && !(m && !p.isFieldDirty())) {
        var S = p.getNamePath();
        if (d.add(S.join(l)), !s || wr(c, S, y)) {
          var x = p.validateRules(M({
            validateMessages: M(M({}, Kc), e.validateMessages)
          }, o));
          u.push(x.then(function() {
            return {
              name: S,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var E, P = [], R = [];
            return (E = C.forEach) === null || E === void 0 || E.call(C, function(A) {
              var O = A.rule.warningOnly, I = A.errors;
              O ? R.push.apply(R, K(I)) : P.push.apply(P, K(I));
            }), P.length ? Promise.reject({
              name: S,
              errors: P,
              warnings: R
            }) : {
              name: S,
              errors: P,
              warnings: R
            };
          }));
        }
      }
    });
    var g = ah(u);
    e.lastValidatePromise = g, g.catch(function(p) {
      return p;
    }).then(function(p) {
      var S = p.map(function(x) {
        var C = x.name;
        return C;
      });
      e.notifyObservers(e.store, S, {
        type: "validateFinish"
      }), e.triggerOnFieldsChange(S, p);
    });
    var f = g.then(function() {
      return e.lastValidatePromise === g ? Promise.resolve(e.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(p) {
      var S = p.filter(function(x) {
        return x && x.errors.length;
      });
      return Promise.reject({
        values: e.getFieldsValue(c),
        errorFields: S,
        outOfDate: e.lastValidatePromise !== g
      });
    });
    f.catch(function(p) {
      return p;
    });
    var b = c.filter(function(p) {
      return d.has(p.join(l));
    });
    return e.triggerOnFieldsChange(b), f;
  }), w(this, "submit", function() {
    e.warningUnhooked(), e.validateFields().then(function(n) {
      var a = e.callbacks.onFinish;
      if (a)
        try {
          a(n);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(n) {
      var a = e.callbacks.onFinishFailed;
      a && a(n);
    });
  }), this.forceRootUpdate = r;
});
function Zc(t) {
  var r = h.useRef(), e = h.useState({}), n = H(e, 2), a = n[1];
  if (!r.current)
    if (t)
      r.current = t;
    else {
      var i = function() {
        a({});
      }, o = new oh(i);
      r.current = o.getForm();
    }
  return [r.current];
}
var ji = /* @__PURE__ */ h.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), sh = function(r) {
  var e = r.validateMessages, n = r.onFormChange, a = r.onFormFinish, i = r.children, o = h.useContext(ji), s = h.useRef({});
  return /* @__PURE__ */ h.createElement(ji.Provider, {
    value: M(M({}, o), {}, {
      validateMessages: M(M({}, o.validateMessages), e),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, l) {
        n && n(u, {
          changedFields: l,
          forms: s.current
        }), o.triggerFormChange(u, l);
      },
      triggerFormFinish: function(u, l) {
        a && a(u, {
          values: l,
          forms: s.current
        }), o.triggerFormFinish(u, l);
      },
      registerForm: function(u, l) {
        u && (s.current = M(M({}, s.current), {}, w({}, u, l))), o.registerForm(u, l);
      },
      unregisterForm: function(u) {
        var l = M({}, s.current);
        delete l[u], s.current = l, o.unregisterForm(u);
      }
    })
  }, i);
}, ch = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], uh = function(r, e) {
  var n = r.name, a = r.initialValues, i = r.fields, o = r.form, s = r.preserve, c = r.children, u = r.component, l = u === void 0 ? "form" : u, d = r.validateMessages, v = r.validateTrigger, y = v === void 0 ? "onChange" : v, m = r.onValuesChange, g = r.onFieldsChange, f = r.onFinish, b = r.onFinishFailed, p = r.clearOnDestroy, S = Ht(r, ch), x = h.useRef(null), C = h.useContext(ji), E = Zc(o), P = H(E, 1), R = P[0], A = R.getInternalHooks(tr), O = A.useSubscribe, I = A.setInitialValues, D = A.setCallbacks, $ = A.setValidateMessages, V = A.setPreserve, G = A.destroyForm;
  h.useImperativeHandle(e, function() {
    return M(M({}, R), {}, {
      nativeElement: x.current
    });
  }), h.useEffect(function() {
    return C.registerForm(n, R), function() {
      C.unregisterForm(n);
    };
  }, [C, R, n]), $(M(M({}, C.validateMessages), d)), D({
    onValuesChange: m,
    onFieldsChange: function(j) {
      if (C.triggerFormChange(n, j), g) {
        for (var Y = arguments.length, se = new Array(Y > 1 ? Y - 1 : 0), re = 1; re < Y; re++)
          se[re - 1] = arguments[re];
        g.apply(void 0, [j].concat(se));
      }
    },
    onFinish: function(j) {
      C.triggerFormFinish(n, j), f && f(j);
    },
    onFinishFailed: b
  }), V(s);
  var F = h.useRef(null);
  I(a, !F.current), F.current || (F.current = !0), h.useEffect(
    function() {
      return function() {
        return G(p);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var k, T = typeof c == "function";
  if (T) {
    var N = R.getFieldsValue(!0);
    k = c(N, R);
  } else
    k = c;
  O(!T);
  var _ = h.useRef();
  h.useEffect(function() {
    eh(_.current || [], i || []) || R.setFields(i || []), _.current = i;
  }, [i, R]);
  var L = h.useMemo(function() {
    return M(M({}, R), {}, {
      validateTrigger: y
    });
  }, [R, y]), U = /* @__PURE__ */ h.createElement(ea.Provider, {
    value: null
  }, /* @__PURE__ */ h.createElement(Tr.Provider, {
    value: L
  }, k));
  return l === !1 ? U : /* @__PURE__ */ h.createElement(l, pt({}, S, {
    ref: x,
    onSubmit: function(j) {
      j.preventDefault(), j.stopPropagation(), R.submit();
    },
    onReset: function(j) {
      var Y;
      j.preventDefault(), R.resetFields(), (Y = S.onReset) === null || Y === void 0 || Y.call(S, j);
    }
  }), U);
};
function ds(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return Math.random();
  }
}
var lh = z.env.NODE_ENV !== "production" ? function(t) {
  var r = t.join("__RC_FIELD_FORM_SPLIT__"), e = h.useRef(r);
  he(e.current === r, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function fh() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  var n = r[0], a = r[1], i = a === void 0 ? {} : a, o = bv(i) ? {
    form: i
  } : i, s = o.form, c = h.useState(), u = H(c, 2), l = u[0], d = u[1], v = h.useMemo(function() {
    return ds(l);
  }, [l]), y = h.useRef(v);
  y.current = v;
  var m = h.useContext(Tr), g = s || m, f = g && g._init;
  z.env.NODE_ENV !== "production" && he(r.length === 2 ? s ? f : !0 : f, "useWatch requires a form instance since it can not auto detect from context.");
  var b = be(n), p = h.useRef(b);
  return p.current = b, lh(b), h.useEffect(
    function() {
      if (f) {
        var S = g.getFieldsValue, x = g.getInternalHooks, C = x(tr), E = C.registerWatch, P = function(I, D) {
          var $ = o.preserve ? D : I;
          return typeof n == "function" ? n($) : xt($, p.current);
        }, R = E(function(O, I) {
          var D = P(O, I), $ = ds(D);
          y.current !== $ && (y.current = $, d(D));
        }), A = P(S(), S(!0));
        return l !== A && d(A), R;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f]
  ), l;
}
var dh = /* @__PURE__ */ h.forwardRef(uh), fn = dh;
fn.FormProvider = sh;
fn.Field = Qc;
fn.List = nh;
fn.useForm = Zc;
fn.useWatch = fh;
const Hi = /* @__PURE__ */ h.createContext({});
z.env.NODE_ENV !== "production" && (Hi.displayName = "FormItemInputContext");
const vh = (t) => {
  let {
    children: r,
    status: e,
    override: n
  } = t;
  const a = h.useContext(Hi), i = h.useMemo(() => {
    const o = Object.assign({}, a);
    return n && delete o.isFormItemInput, e && (delete o.status, delete o.hasFeedback, delete o.feedbackIcon), o;
  }, [e, n, a]);
  return /* @__PURE__ */ h.createElement(Hi.Provider, {
    value: i
  }, r);
}, Kh = /* @__PURE__ */ h.createContext(void 0), Xh = (t) => {
  const {
    space: r,
    form: e,
    children: n
  } = t;
  if (n == null)
    return null;
  let a = n;
  return e && (a = /* @__PURE__ */ Te.createElement(vh, {
    override: !0,
    status: !0
  }, a)), r && (a = /* @__PURE__ */ Te.createElement(ov, null, a)), a;
}, hh = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var t = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t == null ? void 0 : t.substr(0, 4));
};
function gh(t) {
  var r = t.prefixCls, e = t.align, n = t.arrow, a = t.arrowPos, i = n || {}, o = i.className, s = i.content, c = a.x, u = c === void 0 ? 0 : c, l = a.y, d = l === void 0 ? 0 : l, v = h.useRef();
  if (!e || !e.points)
    return null;
  var y = {
    position: "absolute"
  };
  if (e.autoArrow !== !1) {
    var m = e.points[0], g = e.points[1], f = m[0], b = m[1], p = g[0], S = g[1];
    f === p || !["t", "b"].includes(f) ? y.top = d : f === "t" ? y.top = 0 : y.bottom = 0, b === S || !["l", "r"].includes(b) ? y.left = u : b === "l" ? y.left = 0 : y.right = 0;
  }
  return /* @__PURE__ */ h.createElement("div", {
    ref: v,
    className: Dt("".concat(r, "-arrow"), o),
    style: y
  }, s);
}
function mh(t) {
  var r = t.prefixCls, e = t.open, n = t.zIndex, a = t.mask, i = t.motion;
  return a ? /* @__PURE__ */ h.createElement(no, pt({}, i, {
    motionAppear: !0,
    visible: e,
    removeOnLeave: !0
  }), function(o) {
    var s = o.className;
    return /* @__PURE__ */ h.createElement("div", {
      style: {
        zIndex: n
      },
      className: Dt("".concat(r, "-mask"), s)
    });
  }) : null;
}
var Jc = /* @__PURE__ */ h.memo(function(t) {
  var r = t.children;
  return r;
}, function(t, r) {
  return r.cache;
});
z.env.NODE_ENV !== "production" && (Jc.displayName = "PopupContent");
var eu = /* @__PURE__ */ h.forwardRef(function(t, r) {
  var e = t.popup, n = t.className, a = t.prefixCls, i = t.style, o = t.target, s = t.onVisibleChanged, c = t.open, u = t.keepDom, l = t.fresh, d = t.onClick, v = t.mask, y = t.arrow, m = t.arrowPos, g = t.align, f = t.motion, b = t.maskMotion, p = t.forceRender, S = t.getPopupContainer, x = t.autoDestroy, C = t.portal, E = t.zIndex, P = t.onMouseEnter, R = t.onMouseLeave, A = t.onPointerEnter, O = t.onPointerDownCapture, I = t.ready, D = t.offsetX, $ = t.offsetY, V = t.offsetR, G = t.offsetB, F = t.onAlign, k = t.onPrepare, T = t.stretch, N = t.targetWidth, _ = t.targetHeight, L = typeof e == "function" ? e() : e, U = c || u, q = (S == null ? void 0 : S.length) > 0, j = h.useState(!S || !q), Y = H(j, 2), se = Y[0], re = Y[1];
  if (Be(function() {
    !se && q && o && re(!0);
  }, [se, q, o]), !se)
    return null;
  var ke = "auto", ge = {
    left: "-1000vw",
    top: "-1000vh",
    right: ke,
    bottom: ke
  };
  if (I || !c) {
    var Re, Ne = g.points, fe = g.dynamicInset || ((Re = g._experimental) === null || Re === void 0 ? void 0 : Re.dynamicInset), Ee = fe && Ne[0][1] === "r", W = fe && Ne[0][0] === "b";
    Ee ? (ge.right = V, ge.left = ke) : (ge.left = D, ge.right = ke), W ? (ge.bottom = G, ge.top = ke) : (ge.top = $, ge.bottom = ke);
  }
  var me = {};
  return T && (T.includes("height") && _ ? me.height = _ : T.includes("minHeight") && _ && (me.minHeight = _), T.includes("width") && N ? me.width = N : T.includes("minWidth") && N && (me.minWidth = N)), c || (me.pointerEvents = "none"), /* @__PURE__ */ h.createElement(C, {
    open: p || U,
    getContainer: S && function() {
      return S(o);
    },
    autoDestroy: x
  }, /* @__PURE__ */ h.createElement(mh, {
    prefixCls: a,
    open: c,
    zIndex: E,
    mask: v,
    motion: b
  }), /* @__PURE__ */ h.createElement(aa, {
    onResize: F,
    disabled: !c
  }, function(Se) {
    return /* @__PURE__ */ h.createElement(no, pt({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: p,
      leavedClassName: "".concat(a, "-hidden")
    }, f, {
      onAppearPrepare: k,
      onEnterPrepare: k,
      visible: c,
      onVisibleChanged: function(Fe) {
        var Ve;
        f == null || (Ve = f.onVisibleChanged) === null || Ve === void 0 || Ve.call(f, Fe), s(Fe);
      }
    }), function(He, Fe) {
      var Ve = He.className, de = He.style, te = Dt(a, Ve, n);
      return /* @__PURE__ */ h.createElement("div", {
        ref: ws(Se, r, Fe),
        className: te,
        style: M(M(M(M({
          "--arrow-x": "".concat(m.x || 0, "px"),
          "--arrow-y": "".concat(m.y || 0, "px")
        }, ge), me), de), {}, {
          boxSizing: "border-box",
          zIndex: E
        }, i),
        onMouseEnter: P,
        onMouseLeave: R,
        onPointerEnter: A,
        onClick: d,
        onPointerDownCapture: O
      }, y && /* @__PURE__ */ h.createElement(gh, {
        prefixCls: a,
        arrow: y,
        arrowPos: m,
        align: g
      }), /* @__PURE__ */ h.createElement(Jc, {
        cache: !c && !l
      }, L));
    });
  }));
});
z.env.NODE_ENV !== "production" && (eu.displayName = "Popup");
var tu = /* @__PURE__ */ h.forwardRef(function(t, r) {
  var e = t.children, n = t.getTriggerDOMNode, a = ra(e), i = h.useCallback(function(s) {
    qi(r, n ? n(s) : s);
  }, [n]), o = Ui(i, e.ref);
  return a ? /* @__PURE__ */ h.cloneElement(e, {
    ref: o
  }) : e;
});
z.env.NODE_ENV !== "production" && (tu.displayName = "TriggerWrapper");
var vs = /* @__PURE__ */ h.createContext(null);
function hs(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
function ph(t, r, e, n) {
  return h.useMemo(function() {
    var a = hs(e ?? r), i = hs(n ?? r), o = new Set(a), s = new Set(i);
    return t && (o.has("hover") && (o.delete("hover"), o.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [o, s];
  }, [t, r, e, n]);
}
function yh() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = arguments.length > 2 ? arguments[2] : void 0;
  return e ? t[0] === r[0] : t[0] === r[0] && t[1] === r[1];
}
function bh(t, r, e, n) {
  for (var a = e.points, i = Object.keys(t), o = 0; o < i.length; o += 1) {
    var s, c = i[o];
    if (yh((s = t[c]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(r, "-placement-").concat(c);
  }
  return "";
}
function gs(t, r, e, n) {
  return r || (e ? {
    motionName: "".concat(t, "-").concat(e)
  } : n ? {
    motionName: n
  } : null);
}
function dn(t) {
  return t.ownerDocument.defaultView;
}
function zi(t) {
  for (var r = [], e = t == null ? void 0 : t.parentElement, n = ["hidden", "scroll", "clip", "auto"]; e; ) {
    var a = dn(e).getComputedStyle(e), i = a.overflowX, o = a.overflowY, s = a.overflow;
    [i, o, s].some(function(c) {
      return n.includes(c);
    }) && r.push(e), e = e.parentElement;
  }
  return r;
}
function sn(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(t) ? r : t;
}
function zr(t) {
  return sn(parseFloat(t), 0);
}
function ms(t, r) {
  var e = M({}, t);
  return (r || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = dn(n).getComputedStyle(n), i = a.overflow, o = a.overflowClipMargin, s = a.borderTopWidth, c = a.borderBottomWidth, u = a.borderLeftWidth, l = a.borderRightWidth, d = n.getBoundingClientRect(), v = n.offsetHeight, y = n.clientHeight, m = n.offsetWidth, g = n.clientWidth, f = zr(s), b = zr(c), p = zr(u), S = zr(l), x = sn(Math.round(d.width / m * 1e3) / 1e3), C = sn(Math.round(d.height / v * 1e3) / 1e3), E = (m - g - p - S) * x, P = (v - y - f - b) * C, R = f * C, A = b * C, O = p * x, I = S * x, D = 0, $ = 0;
      if (i === "clip") {
        var V = zr(o);
        D = V * x, $ = V * C;
      }
      var G = d.x + O - D, F = d.y + R - $, k = G + d.width + 2 * D - O - I - E, T = F + d.height + 2 * $ - R - A - P;
      e.left = Math.max(e.left, G), e.top = Math.max(e.top, F), e.right = Math.min(e.right, k), e.bottom = Math.min(e.bottom, T);
    }
  }), e;
}
function ps(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = "".concat(r), n = e.match(/^(.*)\%$/);
  return n ? t * (parseFloat(n[1]) / 100) : parseFloat(e);
}
function ys(t, r) {
  var e = r || [], n = H(e, 2), a = n[0], i = n[1];
  return [ps(t.width, a), ps(t.height, i)];
}
function bs() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [t[0], t[1]];
}
function yr(t, r) {
  var e = r[0], n = r[1], a, i;
  return e === "t" ? i = t.y : e === "b" ? i = t.y + t.height : i = t.y + t.height / 2, n === "l" ? a = t.x : n === "r" ? a = t.x + t.width : a = t.x + t.width / 2, {
    x: a,
    y: i
  };
}
function Bt(t, r) {
  var e = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return t.map(function(n, a) {
    return a === r ? e[n] || "c" : n;
  }).join("");
}
function Sh(t, r, e, n, a, i, o) {
  var s = h.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: a[n] || {}
  }), c = H(s, 2), u = c[0], l = c[1], d = h.useRef(0), v = h.useMemo(function() {
    return r ? zi(r) : [];
  }, [r]), y = h.useRef({}), m = function() {
    y.current = {};
  };
  t || m();
  var g = ot(function() {
    if (r && e && t) {
      let nt = function(hr, zt) {
        var Wt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ct, jr = j.x + hr, Pn = j.y + zt, Pa = jr + Ee, ka = Pn + fe, Fa = Math.max(jr, Wt.left), B = Math.max(Pn, Wt.top), X = Math.min(Pa, Wt.right), ve = Math.min(ka, Wt.bottom);
        return Math.max(0, (X - Fa) * (ve - B));
      }, xn = function() {
        Ot = j.y + Q, _t = Ot + fe, we = j.x + ce, lr = we + Ee;
      };
      var p, S, x, C, E = r, P = E.ownerDocument, R = dn(E), A = R.getComputedStyle(E), O = A.width, I = A.height, D = A.position, $ = E.style.left, V = E.style.top, G = E.style.right, F = E.style.bottom, k = E.style.overflow, T = M(M({}, a[n]), i), N = P.createElement("div");
      (p = E.parentElement) === null || p === void 0 || p.appendChild(N), N.style.left = "".concat(E.offsetLeft, "px"), N.style.top = "".concat(E.offsetTop, "px"), N.style.position = D, N.style.height = "".concat(E.offsetHeight, "px"), N.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var _;
      if (Array.isArray(e))
        _ = {
          x: e[0],
          y: e[1],
          width: 0,
          height: 0
        };
      else {
        var L, U, q = e.getBoundingClientRect();
        q.x = (L = q.x) !== null && L !== void 0 ? L : q.left, q.y = (U = q.y) !== null && U !== void 0 ? U : q.top, _ = {
          x: q.x,
          y: q.y,
          width: q.width,
          height: q.height
        };
      }
      var j = E.getBoundingClientRect();
      j.x = (S = j.x) !== null && S !== void 0 ? S : j.left, j.y = (x = j.y) !== null && x !== void 0 ? x : j.top;
      var Y = P.documentElement, se = Y.clientWidth, re = Y.clientHeight, ke = Y.scrollWidth, ge = Y.scrollHeight, Re = Y.scrollTop, Ne = Y.scrollLeft, fe = j.height, Ee = j.width, W = _.height, me = _.width, Se = {
        left: 0,
        top: 0,
        right: se,
        bottom: re
      }, He = {
        left: -Ne,
        top: -Re,
        right: ke - Ne,
        bottom: ge - Re
      }, Fe = T.htmlRegion, Ve = "visible", de = "visibleFirst";
      Fe !== "scroll" && Fe !== de && (Fe = Ve);
      var te = Fe === de, Ie = ms(He, v), ne = ms(Se, v), ct = Fe === Ve ? ne : Ie, Pt = te ? ne : ct;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var Ae = E.getBoundingClientRect();
      E.style.left = $, E.style.top = V, E.style.right = G, E.style.bottom = F, E.style.overflow = k, (C = E.parentElement) === null || C === void 0 || C.removeChild(N);
      var yt = sn(Math.round(Ee / parseFloat(O) * 1e3) / 1e3), ut = sn(Math.round(fe / parseFloat(I) * 1e3) / 1e3);
      if (yt === 0 || ut === 0 || Xr(e) && !iv(e))
        return;
      var Nr = T.offset, Vr = T.targetOffset, ir = ys(j, Nr), Qe = H(ir, 2), Ye = Qe[0], Ue = Qe[1], Ir = ys(_, Vr), kt = H(Ir, 2), Ge = kt[0], bt = kt[1];
      _.x -= Ge, _.y -= bt;
      var $r = T.points || [], or = H($r, 2), sr = or[0], Ft = or[1], $e = bs(Ft), Me = bs(sr), Mt = yr(_, $e), pe = yr(j, Me), ze = M({}, T), ce = Mt.x - pe.x + Ye, Q = Mt.y - pe.y + Ue, Ke = nt(ce, Q), Tt = nt(ce, Q, ne), le = yr(_, ["t", "l"]), ae = yr(j, ["t", "l"]), We = yr(_, ["b", "r"]), Le = yr(j, ["b", "r"]), Ze = T.overflow || {}, cr = Ze.adjustX, ur = Ze.adjustY, Rt = Ze.shiftX, At = Ze.shiftY, Xt = function(zt) {
        return typeof zt == "boolean" ? zt : zt >= 0;
      }, Ot, _t, we, lr;
      xn();
      var Qt = Xt(ur), vn = Me[0] === $e[0];
      if (Qt && Me[0] === "t" && (_t > Pt.bottom || y.current.bt)) {
        var Oe = Q;
        vn ? Oe -= fe - W : Oe = le.y - Le.y - Ue;
        var hn = nt(ce, Oe), va = nt(ce, Oe, ne);
        // Of course use larger one
        hn > Ke || hn === Ke && (!te || // Choose recommend one
        va >= Tt) ? (y.current.bt = !0, Q = Oe, Ue = -Ue, ze.points = [Bt(Me, 0), Bt($e, 0)]) : y.current.bt = !1;
      }
      if (Qt && Me[0] === "b" && (Ot < Pt.top || y.current.tb)) {
        var Yt = Q;
        vn ? Yt += fe - W : Yt = We.y - ae.y - Ue;
        var gn = nt(ce, Yt), ha = nt(ce, Yt, ne);
        // Of course use larger one
        gn > Ke || gn === Ke && (!te || // Choose recommend one
        ha >= Tt) ? (y.current.tb = !0, Q = Yt, Ue = -Ue, ze.points = [Bt(Me, 0), Bt($e, 0)]) : y.current.tb = !1;
      }
      var mn = Xt(cr), pn = Me[1] === $e[1];
      if (mn && Me[1] === "l" && (lr > Pt.right || y.current.rl)) {
        var Zt = ce;
        pn ? Zt -= Ee - me : Zt = le.x - Le.x - Ye;
        var yn = nt(Zt, Q), fr = nt(Zt, Q, ne);
        // Of course use larger one
        yn > Ke || yn === Ke && (!te || // Choose recommend one
        fr >= Tt) ? (y.current.rl = !0, ce = Zt, Ye = -Ye, ze.points = [Bt(Me, 1), Bt($e, 1)]) : y.current.rl = !1;
      }
      if (mn && Me[1] === "r" && (we < Pt.left || y.current.lr)) {
        var Nt = ce;
        pn ? Nt += Ee - me : Nt = We.x - ae.x - Ye;
        var bn = nt(Nt, Q), Sn = nt(Nt, Q, ne);
        // Of course use larger one
        bn > Ke || bn === Ke && (!te || // Choose recommend one
        Sn >= Tt) ? (y.current.lr = !0, ce = Nt, Ye = -Ye, ze.points = [Bt(Me, 1), Bt($e, 1)]) : y.current.lr = !1;
      }
      xn();
      var St = Rt === !0 ? 0 : Rt;
      typeof St == "number" && (we < ne.left && (ce -= we - ne.left - Ye, _.x + me < ne.left + St && (ce += _.x - ne.left + me - St)), lr > ne.right && (ce -= lr - ne.right - Ye, _.x > ne.right - St && (ce += _.x - ne.right + St)));
      var lt = At === !0 ? 0 : At;
      typeof lt == "number" && (Ot < ne.top && (Q -= Ot - ne.top - Ue, _.y + W < ne.top + lt && (Q += _.y - ne.top + W - lt)), _t > ne.bottom && (Q -= _t - ne.bottom - Ue, _.y > ne.bottom - lt && (Q += _.y - ne.bottom + lt)));
      var dr = j.x + ce, vr = dr + Ee, Ct = j.y + Q, ga = Ct + fe, Cn = _.x, ma = Cn + me, Lr = _.y, pa = Lr + W, ya = Math.max(dr, Cn), ba = Math.min(vr, ma), En = (ya + ba) / 2, Sa = En - dr, Ca = Math.max(Ct, Lr), wn = Math.min(ga, pa), Ea = (Ca + wn) / 2, wa = Ea - Ct;
      o == null || o(r, ze);
      var Dr = Ae.right - j.x - (ce + j.width), Et = Ae.bottom - j.y - (Q + j.height);
      yt === 1 && (ce = Math.round(ce), Dr = Math.round(Dr)), ut === 1 && (Q = Math.round(Q), Et = Math.round(Et));
      var xa = {
        ready: !0,
        offsetX: ce / yt,
        offsetY: Q / ut,
        offsetR: Dr / yt,
        offsetB: Et / ut,
        arrowX: Sa / yt,
        arrowY: wa / ut,
        scaleX: yt,
        scaleY: ut,
        align: ze
      };
      l(xa);
    }
  }), f = function() {
    d.current += 1;
    var S = d.current;
    Promise.resolve().then(function() {
      d.current === S && g();
    });
  }, b = function() {
    l(function(S) {
      return M(M({}, S), {}, {
        ready: !1
      });
    });
  };
  return Be(b, [n]), Be(function() {
    t || b();
  }, [t]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, f];
}
function Ch(t, r, e, n, a) {
  Be(function() {
    if (t && r && e) {
      let d = function() {
        n(), a();
      };
      var i = r, o = e, s = zi(i), c = zi(o), u = dn(o), l = new Set([u].concat(K(s), K(c)));
      return l.forEach(function(v) {
        v.addEventListener("scroll", d, {
          passive: !0
        });
      }), u.addEventListener("resize", d, {
        passive: !0
      }), n(), function() {
        l.forEach(function(v) {
          v.removeEventListener("scroll", d), u.removeEventListener("resize", d);
        });
      };
    }
  }, [t, r, e]);
}
function Eh(t, r, e, n, a, i, o, s) {
  var c = h.useRef(t);
  c.current = t;
  var u = h.useRef(!1);
  h.useEffect(function() {
    if (r && n && (!a || i)) {
      var d = function() {
        u.current = !1;
      }, v = function(x) {
        var C;
        c.current && !o(((C = x.composedPath) === null || C === void 0 || (C = C.call(x)) === null || C === void 0 ? void 0 : C[0]) || x.target) && !u.current && s(!1);
      }, y = dn(n);
      y.addEventListener("pointerdown", d, !0), y.addEventListener("mousedown", v, !0), y.addEventListener("contextmenu", v, !0);
      var m = Jn(e);
      if (m && (m.addEventListener("mousedown", v, !0), m.addEventListener("contextmenu", v, !0)), z.env.NODE_ENV !== "production") {
        var g, f, b = e == null || (g = e.getRootNode) === null || g === void 0 ? void 0 : g.call(e), p = (f = n.getRootNode) === null || f === void 0 ? void 0 : f.call(n);
        xr(b === p, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        y.removeEventListener("pointerdown", d, !0), y.removeEventListener("mousedown", v, !0), y.removeEventListener("contextmenu", v, !0), m && (m.removeEventListener("mousedown", v, !0), m.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [r, e, n, a, i]);
  function l() {
    u.current = !0;
  }
  return l;
}
var wh = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function xh() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ao, r = /* @__PURE__ */ h.forwardRef(function(e, n) {
    var a = e.prefixCls, i = a === void 0 ? "rc-trigger-popup" : a, o = e.children, s = e.action, c = s === void 0 ? "hover" : s, u = e.showAction, l = e.hideAction, d = e.popupVisible, v = e.defaultPopupVisible, y = e.onPopupVisibleChange, m = e.afterPopupVisibleChange, g = e.mouseEnterDelay, f = e.mouseLeaveDelay, b = f === void 0 ? 0.1 : f, p = e.focusDelay, S = e.blurDelay, x = e.mask, C = e.maskClosable, E = C === void 0 ? !0 : C, P = e.getPopupContainer, R = e.forceRender, A = e.autoDestroy, O = e.destroyPopupOnHide, I = e.popup, D = e.popupClassName, $ = e.popupStyle, V = e.popupPlacement, G = e.builtinPlacements, F = G === void 0 ? {} : G, k = e.popupAlign, T = e.zIndex, N = e.stretch, _ = e.getPopupClassNameFromAlign, L = e.fresh, U = e.alignPoint, q = e.onPopupClick, j = e.onPopupAlign, Y = e.arrow, se = e.popupMotion, re = e.maskMotion, ke = e.popupTransitionName, ge = e.popupAnimation, Re = e.maskTransitionName, Ne = e.maskAnimation, fe = e.className, Ee = e.getTriggerDOMNode, W = Ht(e, wh), me = A || O || !1, Se = h.useState(!1), He = H(Se, 2), Fe = He[0], Ve = He[1];
    Be(function() {
      Ve(hh());
    }, []);
    var de = h.useRef({}), te = h.useContext(vs), Ie = h.useMemo(function() {
      return {
        registerSubPopup: function(X, ve) {
          de.current[X] = ve, te == null || te.registerSubPopup(X, ve);
        }
      };
    }, [te]), ne = yv(), ct = h.useState(null), Pt = H(ct, 2), Ae = Pt[0], yt = Pt[1], ut = h.useRef(null), Nr = ot(function(B) {
      ut.current = B, Xr(B) && Ae !== B && yt(B), te == null || te.registerSubPopup(ne, B);
    }), Vr = h.useState(null), ir = H(Vr, 2), Qe = ir[0], Ye = ir[1], Ue = h.useRef(null), Ir = ot(function(B) {
      Xr(B) && Qe !== B && (Ye(B), Ue.current = B);
    }), kt = h.Children.only(o), Ge = (kt == null ? void 0 : kt.props) || {}, bt = {}, $r = ot(function(B) {
      var X, ve, xe = Qe;
      return (xe == null ? void 0 : xe.contains(B)) || ((X = Jn(xe)) === null || X === void 0 ? void 0 : X.host) === B || B === xe || (Ae == null ? void 0 : Ae.contains(B)) || ((ve = Jn(Ae)) === null || ve === void 0 ? void 0 : ve.host) === B || B === Ae || Object.values(de.current).some(function(ye) {
        return (ye == null ? void 0 : ye.contains(B)) || B === ye;
      });
    }), or = gs(i, se, ge, ke), sr = gs(i, re, Ne, Re), Ft = h.useState(v || !1), $e = H(Ft, 2), Me = $e[0], Mt = $e[1], pe = d ?? Me, ze = ot(function(B) {
      d === void 0 && Mt(B);
    });
    Be(function() {
      Mt(d || !1);
    }, [d]);
    var ce = h.useRef(pe);
    ce.current = pe;
    var Q = h.useRef([]);
    Q.current = [];
    var Ke = ot(function(B) {
      var X;
      ze(B), ((X = Q.current[Q.current.length - 1]) !== null && X !== void 0 ? X : pe) !== B && (Q.current.push(B), y == null || y(B));
    }), Tt = h.useRef(), le = function() {
      clearTimeout(Tt.current);
    }, ae = function(X) {
      var ve = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      le(), ve === 0 ? Ke(X) : Tt.current = setTimeout(function() {
        Ke(X);
      }, ve * 1e3);
    };
    h.useEffect(function() {
      return le;
    }, []);
    var We = h.useState(!1), Le = H(We, 2), Ze = Le[0], cr = Le[1];
    Be(function(B) {
      (!B || pe) && cr(!0);
    }, [pe]);
    var ur = h.useState(null), Rt = H(ur, 2), At = Rt[0], Xt = Rt[1], Ot = h.useState(null), _t = H(Ot, 2), we = _t[0], lr = _t[1], Qt = function(X) {
      lr([X.clientX, X.clientY]);
    }, vn = Sh(pe, Ae, U && we !== null ? we : Qe, V, F, k, j), Oe = H(vn, 11), hn = Oe[0], va = Oe[1], Yt = Oe[2], gn = Oe[3], ha = Oe[4], mn = Oe[5], pn = Oe[6], Zt = Oe[7], yn = Oe[8], fr = Oe[9], Nt = Oe[10], bn = ph(Fe, c, u, l), Sn = H(bn, 2), St = Sn[0], lt = Sn[1], dr = St.has("click"), vr = lt.has("click") || lt.has("contextMenu"), Ct = ot(function() {
      Ze || Nt();
    }), ga = function() {
      ce.current && U && vr && ae(!1);
    };
    Ch(pe, Qe, Ae, Ct, ga), Be(function() {
      Ct();
    }, [we, V]), Be(function() {
      pe && !(F != null && F[V]) && Ct();
    }, [JSON.stringify(k)]);
    var Cn = h.useMemo(function() {
      var B = bh(F, i, fr, U);
      return Dt(B, _ == null ? void 0 : _(fr));
    }, [fr, _, F, i, U]);
    h.useImperativeHandle(n, function() {
      return {
        nativeElement: Ue.current,
        popupElement: ut.current,
        forceAlign: Ct
      };
    });
    var ma = h.useState(0), Lr = H(ma, 2), pa = Lr[0], ya = Lr[1], ba = h.useState(0), En = H(ba, 2), Sa = En[0], Ca = En[1], wn = function() {
      if (N && Qe) {
        var X = Qe.getBoundingClientRect();
        ya(X.width), Ca(X.height);
      }
    }, Ea = function() {
      wn(), Ct();
    }, wa = function(X) {
      cr(!1), Nt(), m == null || m(X);
    }, Dr = function() {
      return new Promise(function(X) {
        wn(), Xt(function() {
          return X;
        });
      });
    };
    Be(function() {
      At && (Nt(), At(), Xt(null));
    }, [At]);
    function Et(B, X, ve, xe) {
      bt[B] = function(ye) {
        var kn;
        xe == null || xe(ye), ae(X, ve);
        for (var Ma = arguments.length, oo = new Array(Ma > 1 ? Ma - 1 : 0), Fn = 1; Fn < Ma; Fn++)
          oo[Fn - 1] = arguments[Fn];
        (kn = Ge[B]) === null || kn === void 0 || kn.call.apply(kn, [Ge, ye].concat(oo));
      };
    }
    (dr || vr) && (bt.onClick = function(B) {
      var X;
      ce.current && vr ? ae(!1) : !ce.current && dr && (Qt(B), ae(!0));
      for (var ve = arguments.length, xe = new Array(ve > 1 ? ve - 1 : 0), ye = 1; ye < ve; ye++)
        xe[ye - 1] = arguments[ye];
      (X = Ge.onClick) === null || X === void 0 || X.call.apply(X, [Ge, B].concat(xe));
    });
    var xa = Eh(pe, vr, Qe, Ae, x, E, $r, ae), nt = St.has("hover"), xn = lt.has("hover"), hr, zt;
    nt && (Et("onMouseEnter", !0, g, function(B) {
      Qt(B);
    }), Et("onPointerEnter", !0, g, function(B) {
      Qt(B);
    }), hr = function(X) {
      (pe || Ze) && Ae !== null && Ae !== void 0 && Ae.contains(X.target) && ae(!0, g);
    }, U && (bt.onMouseMove = function(B) {
      var X;
      (X = Ge.onMouseMove) === null || X === void 0 || X.call(Ge, B);
    })), xn && (Et("onMouseLeave", !1, b), Et("onPointerLeave", !1, b), zt = function() {
      ae(!1, b);
    }), St.has("focus") && Et("onFocus", !0, p), lt.has("focus") && Et("onBlur", !1, S), St.has("contextMenu") && (bt.onContextMenu = function(B) {
      var X;
      ce.current && lt.has("contextMenu") ? ae(!1) : (Qt(B), ae(!0)), B.preventDefault();
      for (var ve = arguments.length, xe = new Array(ve > 1 ? ve - 1 : 0), ye = 1; ye < ve; ye++)
        xe[ye - 1] = arguments[ye];
      (X = Ge.onContextMenu) === null || X === void 0 || X.call.apply(X, [Ge, B].concat(xe));
    }), fe && (bt.className = Dt(Ge.className, fe));
    var Wt = M(M({}, Ge), bt), jr = {}, Pn = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Pn.forEach(function(B) {
      W[B] && (jr[B] = function() {
        for (var X, ve = arguments.length, xe = new Array(ve), ye = 0; ye < ve; ye++)
          xe[ye] = arguments[ye];
        (X = Wt[B]) === null || X === void 0 || X.call.apply(X, [Wt].concat(xe)), W[B].apply(W, xe);
      });
    });
    var Pa = /* @__PURE__ */ h.cloneElement(kt, M(M({}, Wt), jr)), ka = {
      x: mn,
      y: pn
    }, Fa = Y ? M({}, Y !== !0 ? Y : {}) : null;
    return /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(aa, {
      disabled: !pe,
      ref: Ir,
      onResize: Ea
    }, /* @__PURE__ */ h.createElement(tu, {
      getTriggerDOMNode: Ee
    }, Pa)), /* @__PURE__ */ h.createElement(vs.Provider, {
      value: Ie
    }, /* @__PURE__ */ h.createElement(eu, {
      portal: t,
      ref: Nr,
      prefixCls: i,
      popup: I,
      className: Dt(D, Cn),
      style: $,
      target: Qe,
      onMouseEnter: hr,
      onMouseLeave: zt,
      onPointerEnter: hr,
      zIndex: T,
      open: pe,
      keepDom: Ze,
      fresh: L,
      onClick: q,
      onPointerDownCapture: xa,
      mask: x,
      motion: or,
      maskMotion: sr,
      onVisibleChanged: wa,
      onPrepare: Dr,
      forceRender: R,
      autoDestroy: me,
      getPopupContainer: P,
      align: fr,
      arrow: Fa,
      arrowPos: ka,
      ready: hn,
      offsetX: va,
      offsetY: Yt,
      offsetR: gn,
      offsetB: ha,
      onAlign: Ct,
      stretch: N,
      targetWidth: pa / Zt,
      targetHeight: Sa / yn
    })));
  });
  return z.env.NODE_ENV !== "production" && (r.displayName = "Trigger"), r;
}
const Qh = xh(ao);
var Ph = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, kh = function(r, e) {
  return /* @__PURE__ */ h.createElement(_r, pt({}, r, {
    ref: e,
    icon: Ph
  }));
}, Fh = /* @__PURE__ */ h.forwardRef(kh);
z.env.NODE_ENV !== "production" && (Fh.displayName = "CheckOutlined");
function Yh(t) {
  const {
    sizePopupArrow: r,
    borderRadiusXS: e,
    borderRadiusOuter: n
  } = t, a = r / 2, i = 0, o = a, s = n * 1 / Math.sqrt(2), c = a - n * (1 - 1 / Math.sqrt(2)), u = a - e * (1 / Math.sqrt(2)), l = n * (Math.sqrt(2) - 1) + e * (1 / Math.sqrt(2)), d = 2 * a - u, v = l, y = 2 * a - s, m = c, g = 2 * a - i, f = o, b = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), p = n * (Math.sqrt(2) - 1), S = `polygon(${p}px 100%, 50% ${p}px, ${2 * a - p}px 100%, ${p}px 100%)`, x = `path('M ${i} ${o} A ${n} ${n} 0 0 0 ${s} ${c} L ${u} ${l} A ${e} ${e} 0 0 1 ${d} ${v} L ${y} ${m} A ${n} ${n} 0 0 0 ${g} ${f} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: x,
    arrowPolygon: S
  };
}
const Zh = (t, r, e) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: a,
    arrowPath: i,
    arrowShadowWidth: o,
    borderRadiusXS: s,
    calc: c
  } = t;
  return {
    pointerEvents: "none",
    width: n,
    height: n,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: c(n).div(2).equal(),
      background: r,
      clipPath: {
        _multi_value_: !0,
        value: [a, i]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: o,
      height: o,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${Qn(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: e,
      zIndex: 0,
      background: "transparent"
    }
  };
};
export {
  Lh as $,
  Qn as A,
  Dh as B,
  no as C,
  zh as D,
  wi as E,
  Uh as F,
  Oh as G,
  Ar as H,
  _r as I,
  Be as J,
  _h as K,
  cc as L,
  Nh as M,
  ed as N,
  Xd as O,
  Fh as P,
  Zd as Q,
  aa as R,
  an as S,
  lu as T,
  Qh as U,
  Kh as V,
  K as W,
  he as X,
  Co as Y,
  $h as Z,
  un as _,
  mt as a,
  qe as a0,
  Yh as a1,
  Zh as a2,
  Ih as a3,
  Hi as a4,
  qh as a5,
  Xh as a6,
  Mo as a7,
  zc as a8,
  Xe as a9,
  $a as aa,
  Dt as b,
  ws as c,
  Ei as d,
  nn as e,
  ot as f,
  Hh as g,
  Bh as h,
  iv as i,
  cn as j,
  Wh as k,
  fa as l,
  nr as m,
  ar as n,
  De as o,
  je as p,
  H as q,
  Br as r,
  ra as s,
  Vh as t,
  da as u,
  Gh as v,
  Xn as w,
  Cc as x,
  xf as y,
  jh as z
};
