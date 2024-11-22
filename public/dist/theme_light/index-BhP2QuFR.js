import { p as z, d as pu, R as $e, b as mo, r as h, $ as ca, a as yu } from "./vendor-react-CwfAKKXk.js";
import { _ as dt } from "./vendor-ui-utils-BZIqroPj.js";
import { e as ee, t as bu, _ as F, g as P, j as Ft } from "./vendor-web3-VgZtbLWg.js";
import { g as Ia } from "./vendor-walletconnect-CwfKDfL-.js";
var Ja = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function wu() {
  if (po) return oe;
  po = 1;
  var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function g(d) {
    if (typeof d == "object" && d !== null) {
      var b = d.$$typeof;
      switch (b) {
        case t:
          switch (d = d.type, d) {
            case e:
            case a:
            case n:
            case u:
            case l:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case o:
                case c:
                case v:
                case f:
                case i:
                  return d;
                default:
                  return b;
              }
          }
        case r:
          return b;
      }
    }
  }
  return oe.ContextConsumer = o, oe.ContextProvider = i, oe.Element = t, oe.ForwardRef = c, oe.Fragment = e, oe.Lazy = v, oe.Memo = f, oe.Portal = r, oe.Profiler = a, oe.StrictMode = n, oe.Suspense = u, oe.SuspenseList = l, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(d) {
    return g(d) === o;
  }, oe.isContextProvider = function(d) {
    return g(d) === i;
  }, oe.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === t;
  }, oe.isForwardRef = function(d) {
    return g(d) === c;
  }, oe.isFragment = function(d) {
    return g(d) === e;
  }, oe.isLazy = function(d) {
    return g(d) === v;
  }, oe.isMemo = function(d) {
    return g(d) === f;
  }, oe.isPortal = function(d) {
    return g(d) === r;
  }, oe.isProfiler = function(d) {
    return g(d) === a;
  }, oe.isStrictMode = function(d) {
    return g(d) === n;
  }, oe.isSuspense = function(d) {
    return g(d) === u;
  }, oe.isSuspenseList = function(d) {
    return g(d) === l;
  }, oe.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === e || d === a || d === n || d === u || d === l || d === p || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === f || d.$$typeof === i || d.$$typeof === o || d.$$typeof === c || d.$$typeof === m || d.getModuleId !== void 0);
  }, oe.typeOf = g, oe;
}
var se = {}, yo;
function Cu() {
  return yo || (yo = 1, z.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = !1, g = !1, d = !1, b = !1, y = !1, w;
    w = Symbol.for("react.module.reference");
    function E(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === e || B === a || y || B === n || B === u || B === l || b || B === p || m || g || d || typeof B == "object" && B !== null && (B.$$typeof === v || B.$$typeof === f || B.$$typeof === i || B.$$typeof === o || B.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === w || B.getModuleId !== void 0));
    }
    function C(B) {
      if (typeof B == "object" && B !== null) {
        var he = B.$$typeof;
        switch (he) {
          case t:
            var ge = B.type;
            switch (ge) {
              case e:
              case a:
              case n:
              case u:
              case l:
                return ge;
              default:
                var Ie = ge && ge.$$typeof;
                switch (Ie) {
                  case s:
                  case o:
                  case c:
                  case v:
                  case f:
                  case i:
                    return Ie;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var S = o, x = i, R = t, M = c, _ = e, I = v, j = f, V = r, $ = a, U = n, O = u, k = l, T = !1, N = !1;
    function A(B) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(B) {
      return N || (N = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(B) {
      return C(B) === o;
    }
    function W(B) {
      return C(B) === i;
    }
    function D(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function Z(B) {
      return C(B) === c;
    }
    function ne(B) {
      return C(B) === e;
    }
    function ae(B) {
      return C(B) === v;
    }
    function Pe(B) {
      return C(B) === f;
    }
    function le(B) {
      return C(B) === r;
    }
    function Ce(B) {
      return C(B) === a;
    }
    function Se(B) {
      return C(B) === n;
    }
    function fe(B) {
      return C(B) === u;
    }
    function Ee(B) {
      return C(B) === l;
    }
    se.ContextConsumer = S, se.ContextProvider = x, se.Element = R, se.ForwardRef = M, se.Fragment = _, se.Lazy = I, se.Memo = j, se.Portal = V, se.Profiler = $, se.StrictMode = U, se.Suspense = O, se.SuspenseList = k, se.isAsyncMode = A, se.isConcurrentMode = L, se.isContextConsumer = G, se.isContextProvider = W, se.isElement = D, se.isForwardRef = Z, se.isFragment = ne, se.isLazy = ae, se.isMemo = Pe, se.isPortal = le, se.isProfiler = Ce, se.isStrictMode = Se, se.isSuspense = fe, se.isSuspenseList = Ee, se.isValidElementType = E, se.typeOf = C;
  }()), se;
}
z.env.NODE_ENV === "production" ? Ja.exports = wu() : Ja.exports = Cu();
var Zr = Ja.exports;
function tn(t, r) {
  return tn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
    return e.__proto__ = n, e;
  }, tn(t, r);
}
function J(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
var Ms = { exports: {} };
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
})(Ms);
var Su = Ms.exports;
const Ze = /* @__PURE__ */ pu(Su);
function Jn(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [];
  return $e.Children.forEach(t, function(n) {
    n == null && !r.keepEmpty || (Array.isArray(n) ? e = e.concat(Jn(n)) : Zr.isFragment(n) && n.props ? e = e.concat(Jn(n.props.children, r)) : e.push(n));
  }), e;
}
var ei = {}, Yi = [], Eu = function(r) {
  Yi.push(r);
};
function Rr(t, r) {
  if (z.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = Yi.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, r);
    e && console.error("Warning: ".concat(e));
  }
}
function xu(t, r) {
  if (z.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var e = Yi.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, r);
    e && console.warn("Note: ".concat(e));
  }
}
function _s() {
  ei = {};
}
function As(t, r, e) {
  !r && !ei[e] && (t(!1, e), ei[e] = !0);
}
function pe(t, r) {
  As(Rr, t, r);
}
function Pu(t, r) {
  As(xu, t, r);
}
pe.preMessage = Eu;
pe.resetWarned = _s;
pe.noteOnce = Pu;
function rn(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function ku(t) {
  return t && ee(t) === "object" && rn(t.nativeElement) ? t.nativeElement : rn(t) ? t : null;
}
function Un(t) {
  var r = ku(t);
  if (r)
    return r;
  if (t instanceof $e.Component) {
    var e;
    return (e = mo.findDOMNode) === null || e === void 0 ? void 0 : e.call(mo, t);
  }
  return null;
}
function Zi(t, r, e) {
  var n = h.useRef({});
  return (!("value" in n.current) || e(n.current.condition, r)) && (n.current.value = t(), n.current.condition = r), n.current.value;
}
var Qi = function(r, e) {
  typeof r == "function" ? r(e) : ee(r) === "object" && r && "current" in r && (r.current = e);
}, Ns = function() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  var a = e.filter(Boolean);
  return a.length <= 1 ? a[0] : function(i) {
    e.forEach(function(o) {
      Qi(o, i);
    });
  };
}, Ji = function() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  return Zi(function() {
    return Ns.apply(void 0, e);
  }, e, function(a, i) {
    return a.length !== i.length || a.every(function(o, s) {
      return o !== i[s];
    });
  });
}, ua = function(r) {
  var e, n, a = Zr.isMemo(r) ? r.type.type : r.type;
  return !(typeof a == "function" && !((e = a.prototype) !== null && e !== void 0 && e.render) && a.$$typeof !== Zr.ForwardRef || typeof r == "function" && !((n = r.prototype) !== null && n !== void 0 && n.render) && r.$$typeof !== Zr.ForwardRef);
};
function bo(t) {
  return /* @__PURE__ */ h.isValidElement(t) && !Zr.isFragment(t);
}
Number(h.version.split(".")[0]) >= 19;
var ti = /* @__PURE__ */ h.createContext(null);
function Ou(t) {
  var r = t.children, e = t.onBatchResize, n = h.useRef(0), a = h.useRef([]), i = h.useContext(ti), o = h.useCallback(function(s, c, u) {
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
  return /* @__PURE__ */ h.createElement(ti.Provider, {
    value: o
  }, r);
}
var $s = function() {
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
}(), ri = typeof window < "u" && typeof document < "u" && window.document === document, ea = function() {
  return typeof Ia < "u" && Ia.Math === Math ? Ia : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Tu = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ea) : function(t) {
    return setTimeout(function() {
      return t(Date.now());
    }, 1e3 / 60);
  };
}(), Fu = 2;
function Ru(t, r) {
  var e = !1, n = !1, a = 0;
  function i() {
    e && (e = !1, t()), n && s();
  }
  function o() {
    Tu(i);
  }
  function s() {
    var c = Date.now();
    if (e) {
      if (c - a < Fu)
        return;
      n = !0;
    } else
      e = !0, n = !1, setTimeout(o, r);
    a = c;
  }
  return s;
}
var Mu = 20, _u = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Au = typeof MutationObserver < "u", Nu = (
  /** @class */
  function() {
    function t() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ru(this.refresh.bind(this), Mu);
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
      !ri || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Au ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, t.prototype.disconnect_ = function() {
      !ri || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, t.prototype.onTransitionEnd_ = function(r) {
      var e = r.propertyName, n = e === void 0 ? "" : e, a = _u.some(function(i) {
        return !!~n.indexOf(i);
      });
      a && this.refresh();
    }, t.getInstance = function() {
      return this.instance_ || (this.instance_ = new t()), this.instance_;
    }, t.instance_ = null, t;
  }()
), Is = function(t, r) {
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
}, Mr = function(t) {
  var r = t && t.ownerDocument && t.ownerDocument.defaultView;
  return r || ea;
}, Vs = la(0, 0, 0, 0);
function ta(t) {
  return parseFloat(t) || 0;
}
function wo(t) {
  for (var r = [], e = 1; e < arguments.length; e++)
    r[e - 1] = arguments[e];
  return r.reduce(function(n, a) {
    var i = t["border-" + a + "-width"];
    return n + ta(i);
  }, 0);
}
function $u(t) {
  for (var r = ["top", "right", "bottom", "left"], e = {}, n = 0, a = r; n < a.length; n++) {
    var i = a[n], o = t["padding-" + i];
    e[i] = ta(o);
  }
  return e;
}
function Iu(t) {
  var r = t.getBBox();
  return la(0, 0, r.width, r.height);
}
function Vu(t) {
  var r = t.clientWidth, e = t.clientHeight;
  if (!r && !e)
    return Vs;
  var n = Mr(t).getComputedStyle(t), a = $u(n), i = a.left + a.right, o = a.top + a.bottom, s = ta(n.width), c = ta(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== r && (s -= wo(n, "left", "right") + i), Math.round(c + o) !== e && (c -= wo(n, "top", "bottom") + o)), !ju(t)) {
    var u = Math.round(s + i) - r, l = Math.round(c + o) - e;
    Math.abs(u) !== 1 && (s -= u), Math.abs(l) !== 1 && (c -= l);
  }
  return la(a.left, a.top, s, c);
}
var Lu = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(t) {
    return t instanceof Mr(t).SVGGraphicsElement;
  } : function(t) {
    return t instanceof Mr(t).SVGElement && typeof t.getBBox == "function";
  };
}();
function ju(t) {
  return t === Mr(t).document.documentElement;
}
function Du(t) {
  return ri ? Lu(t) ? Iu(t) : Vu(t) : Vs;
}
function zu(t) {
  var r = t.x, e = t.y, n = t.width, a = t.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(i.prototype);
  return Is(o, {
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
function la(t, r, e, n) {
  return { x: t, y: r, width: e, height: n };
}
var Hu = (
  /** @class */
  function() {
    function t(r) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = la(0, 0, 0, 0), this.target = r;
    }
    return t.prototype.isActive = function() {
      var r = Du(this.target);
      return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight;
    }, t.prototype.broadcastRect = function() {
      var r = this.contentRect_;
      return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r;
    }, t;
  }()
), Bu = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(r, e) {
      var n = zu(e);
      Is(this, { target: r, contentRect: n });
    }
    return t;
  }()
), Wu = (
  /** @class */
  function() {
    function t(r, e, n) {
      if (this.activeObservations_ = [], this.observations_ = new $s(), typeof r != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = r, this.controller_ = e, this.callbackCtx_ = n;
    }
    return t.prototype.observe = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof Mr(r).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(r) || (e.set(r, new Hu(r)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, t.prototype.unobserve = function(r) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(r instanceof Mr(r).Element))
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
          return new Bu(n.target, n.broadcastRect());
        });
        this.callback_.call(r, e, r), this.clearActive();
      }
    }, t.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, t.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, t;
  }()
), Ls = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new $s(), js = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(r) {
      if (!(this instanceof t))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var e = Nu.getInstance(), n = new Wu(r, e, this);
      Ls.set(this, n);
    }
    return t;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(t) {
  js.prototype[t] = function() {
    var r;
    return (r = Ls.get(this))[t].apply(r, arguments);
  };
});
var qu = function() {
  return typeof ea.ResizeObserver < "u" ? ea.ResizeObserver : js;
}(), Ht = /* @__PURE__ */ new Map();
function Ds(t) {
  t.forEach(function(r) {
    var e, n = r.target;
    (e = Ht.get(n)) === null || e === void 0 || e.forEach(function(a) {
      return a(n);
    });
  });
}
var zs = new qu(Ds);
z.env.NODE_ENV;
z.env.NODE_ENV;
function Uu(t, r) {
  Ht.has(t) || (Ht.set(t, /* @__PURE__ */ new Set()), zs.observe(t)), Ht.get(t).add(r);
}
function Gu(t, r) {
  Ht.has(t) && (Ht.get(t).delete(r), Ht.get(t).size || (zs.unobserve(t), Ht.delete(t)));
}
function He(t, r) {
  if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Co(t, r) {
  for (var e = 0; e < r.length; e++) {
    var n = r[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, bu(n.key), n);
  }
}
function Be(t, r, e) {
  return r && Co(t.prototype, r), e && Co(t, e), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function sr(t, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), r && tn(t, r);
}
function nn(t) {
  return nn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nn(t);
}
function eo() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (eo = function() {
    return !!t;
  })();
}
function Ku(t, r) {
  if (r && (ee(r) == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return J(t);
}
function cr(t) {
  var r = eo();
  return function() {
    var e, n = nn(t);
    if (r) {
      var a = nn(this).constructor;
      e = Reflect.construct(n, arguments, a);
    } else e = n.apply(this, arguments);
    return Ku(this, e);
  };
}
var Xu = /* @__PURE__ */ function(t) {
  sr(e, t);
  var r = cr(e);
  function e() {
    return He(this, e), r.apply(this, arguments);
  }
  return Be(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(h.Component);
function Yu(t, r) {
  var e = t.children, n = t.disabled, a = h.useRef(null), i = h.useRef(null), o = h.useContext(ti), s = typeof e == "function", c = s ? e(a) : e, u = h.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ h.isValidElement(c) && ua(c), f = l ? c.ref : null, v = Ji(f, a), p = function() {
    var b;
    return Un(a.current) || // Support `nativeElement` format
    (a.current && ee(a.current) === "object" ? Un((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || Un(i.current);
  };
  h.useImperativeHandle(r, function() {
    return p();
  });
  var m = h.useRef(t);
  m.current = t;
  var g = h.useCallback(function(d) {
    var b = m.current, y = b.onResize, w = b.data, E = d.getBoundingClientRect(), C = E.width, S = E.height, x = d.offsetWidth, R = d.offsetHeight, M = Math.floor(C), _ = Math.floor(S);
    if (u.current.width !== M || u.current.height !== _ || u.current.offsetWidth !== x || u.current.offsetHeight !== R) {
      var I = {
        width: M,
        height: _,
        offsetWidth: x,
        offsetHeight: R
      };
      u.current = I;
      var j = x === Math.round(C) ? C : x, V = R === Math.round(S) ? S : R, $ = F(F({}, I), {}, {
        offsetWidth: j,
        offsetHeight: V
      });
      o == null || o($, d, w), y && Promise.resolve().then(function() {
        y($, d);
      });
    }
  }, []);
  return h.useEffect(function() {
    var d = p();
    return d && !n && Uu(d, g), function() {
      return Gu(d, g);
    };
  }, [a.current, n]), /* @__PURE__ */ h.createElement(Xu, {
    ref: i
  }, l ? /* @__PURE__ */ h.cloneElement(c, {
    ref: v
  }) : c);
}
var Hs = /* @__PURE__ */ h.forwardRef(Yu);
z.env.NODE_ENV !== "production" && (Hs.displayName = "SingleObserver");
var Zu = "rc-observer-key";
function Qu(t, r) {
  var e = t.children, n = typeof e == "function" ? [e] : Jn(e);
  return z.env.NODE_ENV !== "production" && (n.length > 1 ? Rr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && Rr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, i) {
    var o = (a == null ? void 0 : a.key) || "".concat(Zu, "-").concat(i);
    return /* @__PURE__ */ h.createElement(Hs, dt({}, t, {
      key: o,
      ref: i === 0 ? r : void 0
    }), a);
  });
}
var fa = /* @__PURE__ */ h.forwardRef(Qu);
z.env.NODE_ENV !== "production" && (fa.displayName = "ResizeObserver");
fa.Collection = Ou;
function Ng(t, r) {
  var e = Object.assign({}, t);
  return Array.isArray(r) && r.forEach(function(n) {
    delete e[n];
  }), e;
}
function ni(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var e = 0, n = Array(r); e < r; e++) n[e] = t[e];
  return n;
}
function Ju(t) {
  if (Array.isArray(t)) return ni(t);
}
function Bs(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function to(t, r) {
  if (t) {
    if (typeof t == "string") return ni(t, r);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ni(t, r) : void 0;
  }
}
function el() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(t) {
  return Ju(t) || Bs(t) || to(t) || el();
}
var Ws = function(r) {
  return +setTimeout(r, 16);
}, qs = function(r) {
  return clearTimeout(r);
};
typeof window < "u" && "requestAnimationFrame" in window && (Ws = function(r) {
  return window.requestAnimationFrame(r);
}, qs = function(r) {
  return window.cancelAnimationFrame(r);
});
var So = 0, da = /* @__PURE__ */ new Map();
function Us(t) {
  da.delete(t);
}
var ra = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  So += 1;
  var n = So;
  function a(i) {
    if (i === 0)
      Us(n), r();
    else {
      var o = Ws(function() {
        a(i - 1);
      });
      da.set(n, o);
    }
  }
  return a(e), n;
};
ra.cancel = function(t) {
  var r = da.get(t);
  return Us(t), qs(r);
};
z.env.NODE_ENV !== "production" && (ra.ids = function() {
  return da;
});
function Gs(t) {
  if (Array.isArray(t)) return t;
}
function tl(t, r) {
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
function Ks() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(t, r) {
  return Gs(t) || tl(t, r) || to(t, r) || Ks();
}
function an(t) {
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
function Qe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function rl(t, r) {
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
var Eo = "data-rc-order", xo = "data-rc-priority", nl = "rc-util-key", ai = /* @__PURE__ */ new Map();
function Xs() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.mark;
  return r ? r.startsWith("data-") ? r : "data-".concat(r) : nl;
}
function va(t) {
  if (t.attachTo)
    return t.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function al(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function ro(t) {
  return Array.from((ai.get(t) || t).children).filter(function(r) {
    return r.tagName === "STYLE";
  });
}
function Ys(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Qe())
    return null;
  var e = r.csp, n = r.prepend, a = r.priority, i = a === void 0 ? 0 : a, o = al(n), s = o === "prependQueue", c = document.createElement("style");
  c.setAttribute(Eo, o), s && i && c.setAttribute(xo, "".concat(i)), e != null && e.nonce && (c.nonce = e == null ? void 0 : e.nonce), c.innerHTML = t;
  var u = va(r), l = u.firstChild;
  if (n) {
    if (s) {
      var f = (r.styles || ro(u)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Eo)))
          return !1;
        var p = Number(v.getAttribute(xo) || 0);
        return i >= p;
      });
      if (f.length)
        return u.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    u.insertBefore(c, l);
  } else
    u.appendChild(c);
  return c;
}
function Zs(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = va(r);
  return (r.styles || ro(e)).find(function(n) {
    return n.getAttribute(Xs(r)) === t;
  });
}
function on(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Zs(t, r);
  if (e) {
    var n = va(r);
    n.removeChild(e);
  }
}
function il(t, r) {
  var e = ai.get(t);
  if (!e || !rl(document, e)) {
    var n = Ys("", r), a = n.parentNode;
    ai.set(t, a), t.removeChild(n);
  }
}
function Bt(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = va(e), a = ro(n), i = F(F({}, e), {}, {
    styles: a
  });
  il(n, i);
  var o = Zs(r, i);
  if (o) {
    var s, c;
    if ((s = i.csp) !== null && s !== void 0 && s.nonce && o.nonce !== ((c = i.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var u;
      o.nonce = (u = i.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return o.innerHTML !== t && (o.innerHTML = t), o;
  }
  var l = Ys(t, i);
  return l.setAttribute(Xs(i), r), l;
}
function ii(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(i, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(i);
    if (pe(!c, "Warning: There may be circular references"), c)
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
    if (i && o && ee(i) === "object" && ee(o) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(o).length ? !1 : f.every(function(v) {
        return a(i[v], o[v], u);
      });
    }
    return !1;
  }
  return a(t, r);
}
var ol = "%";
function oi(t) {
  return t.join(ol);
}
var sl = /* @__PURE__ */ function() {
  function t(r) {
    He(this, t), P(this, "instanceId", void 0), P(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = r;
  }
  return Be(t, [{
    key: "get",
    value: function(e) {
      return this.opGet(oi(e));
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
      return this.opUpdate(oi(e), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, n) {
      var a = this.cache.get(e), i = n(a);
      i === null ? this.cache.delete(e) : this.cache.set(e, i);
    }
  }]), t;
}(), _r = "data-token-hash", bt = "data-css-hash", cl = "data-cache-path", Kt = "__cssinjs_instance__";
function ul() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var r = document.body.querySelectorAll("style[".concat(bt, "]")) || [], e = document.head.firstChild;
    Array.from(r).forEach(function(a) {
      a[Kt] = a[Kt] || t, a[Kt] === t && document.head.insertBefore(a, e);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(bt, "]"))).forEach(function(a) {
      var i = a.getAttribute(bt);
      if (n[i]) {
        if (a[Kt] === t) {
          var o;
          (o = a.parentNode) === null || o === void 0 || o.removeChild(a);
        }
      } else
        n[i] = !0;
    });
  }
  return new sl(t);
}
var ha = /* @__PURE__ */ h.createContext({
  hashPriority: "low",
  cache: ul(),
  defaultCache: !0
});
function ll(t, r) {
  if (t.length !== r.length)
    return !1;
  for (var e = 0; e < t.length; e++)
    if (t[e] !== r[e])
      return !1;
  return !0;
}
var no = /* @__PURE__ */ function() {
  function t() {
    He(this, t), P(this, "cache", void 0), P(this, "keys", void 0), P(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Be(t, [{
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
            var f = H(u, 2), v = f[1];
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
          var f = c.get(u);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : c.set(u, {
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
          return !ll(n, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), t;
}();
P(no, "MAX_CACHE_SIZE", 20);
P(no, "MAX_CACHE_OFFSET", 5);
var Po = 0, Qs = /* @__PURE__ */ function() {
  function t(r) {
    He(this, t), P(this, "derivatives", void 0), P(this, "id", void 0), this.derivatives = Array.isArray(r) ? r : [r], this.id = Po, r.length === 0 && Rr(r.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Po += 1;
  }
  return Be(t, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(n, a) {
        return a(e, n);
      }, void 0);
    }
  }]), t;
}(), Va = new no();
function si(t) {
  var r = Array.isArray(t) ? t : [t];
  return Va.has(r) || Va.set(r, new Qs(r)), Va.get(r);
}
var fl = /* @__PURE__ */ new WeakMap(), La = {};
function dl(t, r) {
  for (var e = fl, n = 0; n < r.length; n += 1) {
    var a = r[n];
    e.has(a) || e.set(a, /* @__PURE__ */ new WeakMap()), e = e.get(a);
  }
  return e.has(La) || e.set(La, t()), e.get(La);
}
var ko = /* @__PURE__ */ new WeakMap();
function Qr(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, e = ko.get(t) || "";
  return e || (Object.keys(t).forEach(function(n) {
    var a = t[n];
    e += n, a instanceof Qs ? e += a.id : a && ee(a) === "object" ? e += Qr(a, r) : e += a;
  }), r && (e = an(e)), ko.set(t, e)), e;
}
function Oo(t, r) {
  return an("".concat(r, "_").concat(Qr(t, !0)));
}
var ci = Qe();
function Zt(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function na(t, r, e) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return t;
  var i = F(F({}, n), {}, P(P({}, _r, r), bt, e)), o = Object.keys(i).map(function(s) {
    var c = i[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(o, ">").concat(t, "</style>");
}
var Gn = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(r).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, vl = function(r, e, n) {
  return Object.keys(r).length ? ".".concat(e).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(r).map(function(a) {
    var i = H(a, 2), o = i[0], s = i[1];
    return "".concat(o, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Js = function(r, e, n) {
  var a = {}, i = {};
  return Object.entries(r).forEach(function(o) {
    var s, c, u = H(o, 2), l = u[0], f = u[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[l])
      i[l] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[l])) {
      var v, p = Gn(l, n == null ? void 0 : n.prefix);
      a[p] = typeof f == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[l]) ? "".concat(f, "px") : String(f), i[l] = "var(".concat(p, ")");
    }
  }), [i, vl(a, e, {
    scope: n == null ? void 0 : n.scope
  })];
}, To = z.env.NODE_ENV !== "test" && Qe() ? h.useLayoutEffect : h.useEffect, Ue = function(r, e) {
  var n = h.useRef(!0);
  To(function() {
    return r(n.current);
  }, e), To(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Fo = function(r, e) {
  Ue(function(n) {
    if (!n)
      return r();
  }, e);
}, hl = F({}, ca), Ro = hl.useInsertionEffect, gl = function(r, e, n) {
  h.useMemo(r, n), Ue(function() {
    return e(!0);
  }, n);
}, ml = Ro ? function(t, r, e) {
  return Ro(function() {
    return t(), r();
  }, e);
} : gl, pl = F({}, ca), yl = pl.useInsertionEffect, bl = function(r) {
  var e = [], n = !1;
  function a(i) {
    if (n) {
      z.env.NODE_ENV !== "production" && Rr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, wl = function() {
  return function(r) {
    r();
  };
}, Cl = typeof yl < "u" ? bl : wl;
function Sl() {
  return !1;
}
var ui = !1;
function El() {
  return ui;
}
const xl = z.env.NODE_ENV === "production" ? Sl : El;
if (z.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ja = window;
  if (typeof ja.webpackHotUpdate == "function") {
    var Pl = ja.webpackHotUpdate;
    ja.webpackHotUpdate = function() {
      return ui = !0, setTimeout(function() {
        ui = !1;
      }, 0), Pl.apply(void 0, arguments);
    };
  }
}
function ao(t, r, e, n, a) {
  var i = h.useContext(ha), o = i.cache, s = [t].concat(K(r)), c = oi(s), u = Cl([c]), l = xl(), f = function(g) {
    o.opUpdate(c, function(d) {
      var b = d || [void 0, void 0], y = H(b, 2), w = y[0], E = w === void 0 ? 0 : w, C = y[1], S = C;
      z.env.NODE_ENV !== "production" && C && l && (n == null || n(S, l), S = null);
      var x = S || e(), R = [E, x];
      return g ? g(R) : R;
    });
  };
  h.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var v = o.opGet(c);
  z.env.NODE_ENV !== "production" && !v && (f(), v = o.opGet(c));
  var p = v[1];
  return ml(function() {
    a == null || a(p);
  }, function(m) {
    return f(function(g) {
      var d = H(g, 2), b = d[0], y = d[1];
      return m && b === 0 && (a == null || a(p)), [b + 1, y];
    }), function() {
      o.opUpdate(c, function(g) {
        var d = g || [], b = H(d, 2), y = b[0], w = y === void 0 ? 0 : y, E = b[1], C = w - 1;
        return C === 0 ? (u(function() {
          (m || !o.opGet(c)) && (n == null || n(E, !1));
        }), null) : [w - 1, E];
      });
    };
  }, [c]), p;
}
var kl = {}, Ol = z.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", rr = /* @__PURE__ */ new Map();
function Tl(t) {
  rr.set(t, (rr.get(t) || 0) + 1);
}
function Fl(t, r) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(_r, '="').concat(t, '"]'));
    e.forEach(function(n) {
      if (n[Kt] === r) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var Rl = 0;
function Ml(t, r) {
  rr.set(t, (rr.get(t) || 0) - 1);
  var e = Array.from(rr.keys()), n = e.filter(function(a) {
    var i = rr.get(a) || 0;
    return i <= 0;
  });
  e.length - n.length > Rl && n.forEach(function(a) {
    Fl(a, r), rr.delete(a);
  });
}
var _l = function(r, e, n, a) {
  var i = n.getDerivativeToken(r), o = F(F({}, i), e);
  return a && (o = a(o)), o;
}, ec = "token";
function Al(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = h.useContext(ha), a = n.cache.instanceId, i = n.container, o = e.salt, s = o === void 0 ? "" : o, c = e.override, u = c === void 0 ? kl : c, l = e.formatToken, f = e.getComputedToken, v = e.cssVar, p = dl(function() {
    return Object.assign.apply(Object, [{}].concat(K(r)));
  }, r), m = Qr(p), g = Qr(u), d = v ? Qr(v) : "", b = ao(ec, [s, t.id, m, g, d], function() {
    var y, w = f ? f(p, u, t) : _l(p, u, t, l), E = F({}, w), C = "";
    if (v) {
      var S = Js(w, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), x = H(S, 2);
      w = x[0], C = x[1];
    }
    var R = Oo(w, s);
    w._tokenKey = R, E._tokenKey = Oo(E, s);
    var M = (y = v == null ? void 0 : v.key) !== null && y !== void 0 ? y : R;
    w._themeKey = M, Tl(M);
    var _ = "".concat(Ol, "-").concat(an(R));
    return w._hashId = _, [w, _, E, C, (v == null ? void 0 : v.key) || ""];
  }, function(y) {
    Ml(y[0]._themeKey, a);
  }, function(y) {
    var w = H(y, 4), E = w[0], C = w[3];
    if (v && C) {
      var S = Bt(C, an("css-variables-".concat(E._themeKey)), {
        mark: bt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      S[Kt] = a, S.setAttribute(_r, E._themeKey);
    }
  });
  return b;
}
var Nl = function(r, e, n) {
  var a = H(r, 5), i = a[2], o = a[3], s = a[4], c = n || {}, u = c.plain;
  if (!o)
    return null;
  var l = i._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, p = na(o, s, l, v, u);
  return [f, l, p];
}, $l = {
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
}, tc = "comm", rc = "rule", nc = "decl", Il = "@import", Vl = "@keyframes", Ll = "@layer", ac = Math.abs, io = String.fromCharCode;
function ic(t) {
  return t.trim();
}
function Kn(t, r, e) {
  return t.replace(r, e);
}
function jl(t, r, e) {
  return t.indexOf(r, e);
}
function sn(t, r) {
  return t.charCodeAt(r) | 0;
}
function Ar(t, r, e) {
  return t.slice(r, e);
}
function Ot(t) {
  return t.length;
}
function Dl(t) {
  return t.length;
}
function Nn(t, r) {
  return r.push(t), t;
}
var ga = 1, Nr = 1, oc = 0, ft = 0, Oe = 0, Ir = "";
function oo(t, r, e, n, a, i, o, s) {
  return { value: t, root: r, parent: e, type: n, props: a, children: i, line: ga, column: Nr, length: o, return: "", siblings: s };
}
function zl() {
  return Oe;
}
function Hl() {
  return Oe = ft > 0 ? sn(Ir, --ft) : 0, Nr--, Oe === 10 && (Nr = 1, ga--), Oe;
}
function wt() {
  return Oe = ft < oc ? sn(Ir, ft++) : 0, Nr++, Oe === 10 && (Nr = 1, ga++), Oe;
}
function Xt() {
  return sn(Ir, ft);
}
function Xn() {
  return ft;
}
function ma(t, r) {
  return Ar(Ir, t, r);
}
function cn(t) {
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
function Bl(t) {
  return ga = Nr = 1, oc = Ot(Ir = t), ft = 0, [];
}
function Wl(t) {
  return Ir = "", t;
}
function Da(t) {
  return ic(ma(ft - 1, li(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function ql(t) {
  for (; (Oe = Xt()) && Oe < 33; )
    wt();
  return cn(t) > 2 || cn(Oe) > 3 ? "" : " ";
}
function Ul(t, r) {
  for (; --r && wt() && !(Oe < 48 || Oe > 102 || Oe > 57 && Oe < 65 || Oe > 70 && Oe < 97); )
    ;
  return ma(t, Xn() + (r < 6 && Xt() == 32 && wt() == 32));
}
function li(t) {
  for (; wt(); )
    switch (Oe) {
      case t:
        return ft;
      case 34:
      case 39:
        t !== 34 && t !== 39 && li(Oe);
        break;
      case 40:
        t === 41 && li(t);
        break;
      case 92:
        wt();
        break;
    }
  return ft;
}
function Gl(t, r) {
  for (; wt() && t + Oe !== 57; )
    if (t + Oe === 84 && Xt() === 47)
      break;
  return "/*" + ma(r, ft - 1) + "*" + io(t === 47 ? t : wt());
}
function Kl(t) {
  for (; !cn(Xt()); )
    wt();
  return ma(t, ft);
}
function Xl(t) {
  return Wl(Yn("", null, null, null, [""], t = Bl(t), 0, [0], t));
}
function Yn(t, r, e, n, a, i, o, s, c) {
  for (var u = 0, l = 0, f = o, v = 0, p = 0, m = 0, g = 1, d = 1, b = 1, y = 0, w = "", E = a, C = i, S = n, x = w; d; )
    switch (m = y, y = wt()) {
      case 40:
        if (m != 108 && sn(x, f - 1) == 58) {
          jl(x += Kn(Da(y), "&", "&\f"), "&\f", ac(u ? s[u - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Da(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += ql(m);
        break;
      case 92:
        x += Ul(Xn() - 1, 7);
        continue;
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            Nn(Yl(Gl(wt(), Xn()), r, e, c), c), (cn(m || 1) == 5 || cn(Xt() || 1) == 5) && Ot(x) && Ar(x, -1, void 0) !== " " && (x += " ");
            break;
          default:
            x += "/";
        }
        break;
      case 123 * g:
        s[u++] = Ot(x) * b;
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            d = 0;
          case 59 + l:
            b == -1 && (x = Kn(x, /\f/g, "")), p > 0 && (Ot(x) - f || g === 0 && m === 47) && Nn(p > 32 ? _o(x + ";", n, e, f - 1, c) : _o(Kn(x, " ", "") + ";", n, e, f - 2, c), c);
            break;
          case 59:
            x += ";";
          default:
            if (Nn(S = Mo(x, r, e, u, l, a, s, w, E = [], C = [], f, i), i), y === 123)
              if (l === 0)
                Yn(x, r, S, S, E, i, f, s, C);
              else
                switch (v === 99 && sn(x, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Yn(t, S, S, n && Nn(Mo(t, S, S, 0, 0, a, s, w, a, E = [], f, C), C), a, C, f, s, n ? E : C);
                    break;
                  default:
                    Yn(x, S, S, S, [""], C, 0, s, C);
                }
        }
        u = l = p = 0, g = b = 1, w = x = "", f = o;
        break;
      case 58:
        f = 1 + Ot(x), p = m;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && Hl() == 125)
            continue;
        }
        switch (x += io(y), y * g) {
          case 38:
            b = l > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[u++] = (Ot(x) - 1) * b, b = 1;
            break;
          case 64:
            Xt() === 45 && (x += Da(wt())), v = Xt(), l = f = Ot(w = x += Kl(Xn())), y++;
            break;
          case 45:
            m === 45 && Ot(x) == 2 && (g = 0);
        }
    }
  return i;
}
function Mo(t, r, e, n, a, i, o, s, c, u, l, f) {
  for (var v = a - 1, p = a === 0 ? i : [""], m = Dl(p), g = 0, d = 0, b = 0; g < n; ++g)
    for (var y = 0, w = Ar(t, v + 1, v = ac(d = o[g])), E = t; y < m; ++y)
      (E = ic(d > 0 ? p[y] + " " + w : Kn(w, /&\f/g, p[y]))) && (c[b++] = E);
  return oo(t, r, e, a === 0 ? rc : s, c, u, l, f);
}
function Yl(t, r, e, n) {
  return oo(t, r, e, tc, io(zl()), Ar(t, 2, -2), 0, n);
}
function _o(t, r, e, n, a) {
  return oo(t, r, e, nc, Ar(t, 0, n), Ar(t, n + 1, -1), n, a);
}
function fi(t, r) {
  for (var e = "", n = 0; n < t.length; n++)
    e += r(t[n], n, t, r) || "";
  return e;
}
function Zl(t, r, e, n) {
  switch (t.type) {
    case Ll:
      if (t.children.length) break;
    case Il:
    case nc:
      return t.return = t.return || t.value;
    case tc:
      return "";
    case Vl:
      return t.return = t.value + "{" + fi(t.children, n) + "}";
    case rc:
      if (!Ot(t.value = t.props.join(","))) return "";
  }
  return Ot(e = fi(t.children, n)) ? t.return = t.value + "{" + e + "}" : "";
}
function sc(t, r) {
  var e = r.path, n = r.parentSelectors;
  pe(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(t).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Ql = function(r, e, n) {
  if (r === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || i.indexOf(e) === -1 && !a.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && sc("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), n);
  }
}, Jl = function(r, e, n) {
  r === "animation" && n.hashId && e !== "none" && sc("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Ao = "data-ant-cssinjs-cache-path", cc = "_FILE_STYLE__", ir, uc = !0;
function ef() {
  if (!ir && (ir = {}, Qe())) {
    var t = document.createElement("div");
    t.className = Ao, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var r = getComputedStyle(t).content || "";
    r = r.replace(/^"/, "").replace(/"$/, ""), r.split(";").forEach(function(a) {
      var i = a.split(":"), o = H(i, 2), s = o[0], c = o[1];
      ir[s] = c;
    });
    var e = document.querySelector("style[".concat(Ao, "]"));
    if (e) {
      var n;
      uc = !1, (n = e.parentNode) === null || n === void 0 || n.removeChild(e);
    }
    document.body.removeChild(t);
  }
}
function tf(t) {
  return ef(), !!ir[t];
}
function rf(t) {
  var r = ir[t], e = null;
  if (r && Qe())
    if (uc)
      e = cc;
    else {
      var n = document.querySelector("style[".concat(bt, '="').concat(ir[t], '"]'));
      n ? e = n.innerHTML : delete ir[t];
    }
  return [e, r];
}
var lc = "_skip_check_", fc = "_multi_value_";
function Zn(t) {
  var r = fi(Xl(t), Zl);
  return r.replace(/\{%%%\:[^;];}/g, ";");
}
function nf(t) {
  return ee(t) === "object" && t && (lc in t || fc in t);
}
function No(t, r, e) {
  if (!r)
    return t;
  var n = ".".concat(r), a = e === "low" ? ":where(".concat(n, ")") : n, i = t.split(",").map(function(o) {
    var s, c = o.trim().split(/\s+/), u = c[0] || "", l = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(l).concat(a).concat(u.slice(l.length)), [u].concat(K(c.slice(1))).join(" ");
  });
  return i.join(",");
}
var af = function t(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, i = n.injectHash, o = n.parentSelectors, s = e.hashId, c = e.layer, u = e.path, l = e.hashPriority, f = e.transformers, v = f === void 0 ? [] : f, p = e.linters, m = p === void 0 ? [] : p, g = "", d = {};
  function b(E) {
    var C = E.getName(s);
    if (!d[C]) {
      var S = t(E.style, e, {
        root: !1,
        parentSelectors: o
      }), x = H(S, 1), R = x[0];
      d[C] = "@keyframes ".concat(E.getName(s)).concat(R);
    }
  }
  function y(E) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(S) {
      Array.isArray(S) ? y(S, C) : S && C.push(S);
    }), C;
  }
  var w = y(Array.isArray(r) ? r : [r]);
  return w.forEach(function(E) {
    var C = typeof E == "string" && !a ? {} : E;
    if (typeof C == "string")
      g += "".concat(C, `
`);
    else if (C._keyframe)
      b(C);
    else {
      var S = v.reduce(function(x, R) {
        var M;
        return (R == null || (M = R.visit) === null || M === void 0 ? void 0 : M.call(R, x)) || x;
      }, C);
      Object.keys(S).forEach(function(x) {
        var R = S[x];
        if (ee(R) === "object" && R && (x !== "animationName" || !R._keyframe) && !nf(R)) {
          var M = !1, _ = x.trim(), I = !1;
          (a || i) && s ? _.startsWith("@") ? M = !0 : _ === "&" ? _ = No("", s, l) : _ = No(x, s, l) : a && !s && (_ === "&" || _ === "") && (_ = "", I = !0);
          var j = t(R, e, {
            root: I,
            injectHash: M,
            parentSelectors: [].concat(K(o), [_])
          }), V = H(j, 2), $ = V[0], U = V[1];
          d = F(F({}, d), U), g += "".concat(_).concat($);
        } else {
          let T = function(N, A) {
            z.env.NODE_ENV !== "production" && (ee(R) !== "object" || !(R != null && R[lc])) && [Ql, Jl].concat(K(m)).forEach(function(W) {
              return W(N, A, {
                path: u,
                hashId: s,
                parentSelectors: o
              });
            });
            var L = N.replace(/[A-Z]/g, function(W) {
              return "-".concat(W.toLowerCase());
            }), G = A;
            !$l[N] && typeof G == "number" && G !== 0 && (G = "".concat(G, "px")), N === "animationName" && A !== null && A !== void 0 && A._keyframe && (b(A), G = A.getName(s)), g += "".concat(L, ":").concat(G, ";");
          };
          var O, k = (O = R == null ? void 0 : R.value) !== null && O !== void 0 ? O : R;
          ee(R) === "object" && R !== null && R !== void 0 && R[fc] && Array.isArray(k) ? k.forEach(function(N) {
            T(x, N);
          }) : T(x, k);
        }
      });
    }
  }), a ? c && (g = "@layer ".concat(c.name, " {").concat(g, "}"), c.dependencies && (d["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, d];
};
function dc(t, r) {
  return an("".concat(t.join("%")).concat(r));
}
function of() {
  return null;
}
var vc = "style";
function di(t, r) {
  var e = t.token, n = t.path, a = t.hashId, i = t.layer, o = t.nonce, s = t.clientOnly, c = t.order, u = c === void 0 ? 0 : c, l = h.useContext(ha), f = l.autoClear, v = l.mock, p = l.defaultCache, m = l.hashPriority, g = l.container, d = l.ssrInline, b = l.transformers, y = l.linters, w = l.cache, E = l.layer, C = e._tokenKey, S = [C];
  E && S.push("layer"), S.push.apply(S, K(n));
  var x = ci;
  z.env.NODE_ENV !== "production" && v !== void 0 && (x = v === "client");
  var R = ao(
    vc,
    S,
    // Create cache if needed
    function() {
      var V = S.join("|");
      if (tf(V)) {
        var $ = rf(V), U = H($, 2), O = U[0], k = U[1];
        if (O)
          return [O, C, k, {}, s, u];
      }
      var T = r(), N = af(T, {
        hashId: a,
        hashPriority: m,
        layer: E ? i : void 0,
        path: n.join("-"),
        transformers: b,
        linters: y
      }), A = H(N, 2), L = A[0], G = A[1], W = Zn(L), D = dc(S, W);
      return [W, C, D, G, s, u];
    },
    // Remove cache if no need
    function(V, $) {
      var U = H(V, 3), O = U[2];
      ($ || f) && ci && on(O, {
        mark: bt
      });
    },
    // Effect: Inject style here
    function(V) {
      var $ = H(V, 4), U = $[0];
      $[1];
      var O = $[2], k = $[3];
      if (x && U !== cc) {
        var T = {
          mark: bt,
          prepend: E ? !1 : "queue",
          attachTo: g,
          priority: u
        }, N = typeof o == "function" ? o() : o;
        N && (T.csp = {
          nonce: N
        });
        var A = [], L = [];
        Object.keys(k).forEach(function(W) {
          W.startsWith("@layer") ? A.push(W) : L.push(W);
        }), A.forEach(function(W) {
          Bt(Zn(k[W]), "_layer-".concat(W), F(F({}, T), {}, {
            prepend: !0
          }));
        });
        var G = Bt(U, O, T);
        G[Kt] = w.instanceId, G.setAttribute(_r, C), z.env.NODE_ENV !== "production" && G.setAttribute(cl, S.join("|")), L.forEach(function(W) {
          Bt(Zn(k[W]), "_effect-".concat(W), T);
        });
      }
    }
  ), M = H(R, 3), _ = M[0], I = M[1], j = M[2];
  return function(V) {
    var $;
    return !d || x || !p ? $ = /* @__PURE__ */ h.createElement(of, null) : $ = /* @__PURE__ */ h.createElement("style", dt({}, P(P({}, _r, I), bt, j), {
      dangerouslySetInnerHTML: {
        __html: _
      }
    })), /* @__PURE__ */ h.createElement(h.Fragment, null, $, V);
  };
}
var sf = function(r, e, n) {
  var a = H(r, 6), i = a[0], o = a[1], s = a[2], c = a[3], u = a[4], l = a[5], f = n || {}, v = f.plain;
  if (u)
    return null;
  var p = i, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  };
  return p = na(i, o, s, m, v), c && Object.keys(c).forEach(function(g) {
    if (!e[g]) {
      e[g] = !0;
      var d = Zn(c[g]), b = na(d, o, "_effect-".concat(g), m, v);
      g.startsWith("@layer") ? p = b + p : p += b;
    }
  }), [l, s, p];
}, hc = "cssVar", cf = function(r, e) {
  var n = r.key, a = r.prefix, i = r.unitless, o = r.ignore, s = r.token, c = r.scope, u = c === void 0 ? "" : c, l = h.useContext(ha), f = l.cache.instanceId, v = l.container, p = s._tokenKey, m = [].concat(K(r.path), [n, u, p]), g = ao(hc, m, function() {
    var d = e(), b = Js(d, n, {
      prefix: a,
      unitless: i,
      ignore: o,
      scope: u
    }), y = H(b, 2), w = y[0], E = y[1], C = dc(m, E);
    return [w, E, C, n];
  }, function(d) {
    var b = H(d, 3), y = b[2];
    ci && on(y, {
      mark: bt
    });
  }, function(d) {
    var b = H(d, 3), y = b[1], w = b[2];
    if (y) {
      var E = Bt(y, w, {
        mark: bt,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      E[Kt] = f, E.setAttribute(_r, n);
    }
  });
  return g;
}, uf = function(r, e, n) {
  var a = H(r, 4), i = a[1], o = a[2], s = a[3], c = n || {}, u = c.plain;
  if (!i)
    return null;
  var l = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  }, v = na(i, s, o, f, u);
  return [l, o, v];
};
P(P(P({}, vc, sf), ec, Nl), hc, uf);
var vt = /* @__PURE__ */ function() {
  function t(r, e) {
    He(this, t), P(this, "name", void 0), P(this, "style", void 0), P(this, "_keyframe", !0), this.name = r, this.style = e;
  }
  return Be(t, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), t;
}();
function br(t) {
  return t.notSplit = !0, t;
}
br(["borderTop", "borderBottom"]), br(["borderTop"]), br(["borderBottom"]), br(["borderLeft", "borderRight"]), br(["borderLeft"]), br(["borderRight"]);
var so = /* @__PURE__ */ h.createContext({});
function lf(t) {
  return Gs(t) || Bs(t) || to(t) || Ks();
}
function Tt(t, r) {
  for (var e = t, n = 0; n < r.length; n += 1) {
    if (e == null)
      return;
    e = e[r[n]];
  }
  return e;
}
function gc(t, r, e, n) {
  if (!r.length)
    return e;
  var a = lf(r), i = a[0], o = a.slice(1), s;
  return !t && typeof i == "number" ? s = [] : Array.isArray(t) ? s = K(t) : s = F({}, t), n && e === void 0 && o.length === 1 ? delete s[i][o[0]] : s[i] = gc(s[i], o, e, n), s;
}
function pt(t, r, e) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return r.length && n && e === void 0 && !Tt(t, r.slice(0, -1)) ? t : gc(t, r, e, n);
}
function ff(t) {
  return ee(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function $o(t) {
  return Array.isArray(t) ? [] : {};
}
var df = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function kr() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  var n = $o(r[0]);
  return r.forEach(function(a) {
    function i(o, s) {
      var c = new Set(s), u = Tt(a, o), l = Array.isArray(u);
      if (l || ff(u)) {
        if (!c.has(u)) {
          c.add(u);
          var f = Tt(n, o);
          l ? n = pt(n, o, []) : (!f || ee(f) !== "object") && (n = pt(n, o, $o(u))), df(u).forEach(function(v) {
            i([].concat(K(o), [v]), c);
          });
        }
      } else
        n = pt(n, o, u);
    }
    i([]);
  }), n;
}
function mc() {
}
let Dt = null;
function vf() {
  Dt = null, _s();
}
let co = mc;
z.env.NODE_ENV !== "production" && (co = (t, r, e) => {
  pe(t, `[antd: ${r}] ${e}`), z.env.NODE_ENV === "test" && vf();
});
const pc = /* @__PURE__ */ h.createContext({}), Vr = z.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: r
  } = h.useContext(pc), e = (n, a, i) => {
    if (!n)
      if (r === !1 && a === "deprecated") {
        const o = Dt;
        Dt || (Dt = {}), Dt[t] = Dt[t] || [], Dt[t].includes(i || "") || Dt[t].push(i || ""), o || console.warn("[antd] There exists deprecated usage in your code:", Dt);
      } else
        z.env.NODE_ENV !== "production" && co(n, t, i);
  };
  return e.deprecated = (n, a, i, o) => {
    e(n, "deprecated", `\`${a}\` is deprecated. Please use \`${i}\` instead.${o ? ` ${o}` : ""}`);
  }, e;
} : () => {
  const t = () => {
  };
  return t.deprecated = mc, t;
}, pa = co, hf = /* @__PURE__ */ h.createContext(void 0);
var gf = {
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
}, mf = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, pf = F(F({}, mf), {}, {
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
const yc = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Io = {
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
  }, pf),
  timePickerLocale: Object.assign({}, yc)
}, rt = "${label} is not a valid ${type}", ya = {
  locale: "en",
  Pagination: gf,
  DatePicker: Io,
  TimePicker: yc,
  Calendar: Io,
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
        string: rt,
        method: rt,
        array: rt,
        object: rt,
        number: rt,
        date: rt,
        boolean: rt,
        integer: rt,
        float: rt,
        regexp: rt,
        email: rt,
        url: rt,
        hex: rt
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
Object.assign({}, ya.Modal);
let Qn = [];
const Vo = () => Qn.reduce((t, r) => Object.assign(Object.assign({}, t), r), ya.Modal);
function yf(t) {
  if (t) {
    const r = Object.assign({}, t);
    return Qn.push(r), Vo(), () => {
      Qn = Qn.filter((e) => e !== r), Vo();
    };
  }
  Object.assign({}, ya.Modal);
}
const bc = /* @__PURE__ */ h.createContext(void 0), wc = "internalMark", Cc = (t) => {
  const {
    locale: r = {},
    children: e,
    _ANT_MARK__: n
  } = t;
  if (z.env.NODE_ENV !== "production") {
    const i = Vr("LocaleProvider");
    z.env.NODE_ENV !== "production" && i(n === wc, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  h.useEffect(() => yf(r == null ? void 0 : r.Modal), [r]);
  const a = h.useMemo(() => Object.assign(Object.assign({}, r), {
    exist: !0
  }), [r]);
  return /* @__PURE__ */ h.createElement(bc.Provider, {
    value: a
  }, e);
};
z.env.NODE_ENV !== "production" && (Cc.displayName = "LocaleProvider");
function je(t, r) {
  bf(t) && (t = "100%");
  var e = wf(t);
  return t = r === 360 ? t : Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(String(t * r), 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : (r === 360 ? t = (t < 0 ? t % r + r : t % r) / parseFloat(String(r)) : t = t % r / parseFloat(String(r)), t);
}
function $n(t) {
  return Math.min(1, Math.max(0, t));
}
function bf(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function wf(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Sc(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function In(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function nr(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function Cf(t, r, e) {
  return {
    r: je(t, 255) * 255,
    g: je(r, 255) * 255,
    b: je(e, 255) * 255
  };
}
function Lo(t, r, e) {
  t = je(t, 255), r = je(r, 255), e = je(e, 255);
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
function za(t, r, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + (r - t) * (6 * e) : e < 1 / 2 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t;
}
function Sf(t, r, e) {
  var n, a, i;
  if (t = je(t, 360), r = je(r, 100), e = je(e, 100), r === 0)
    a = e, i = e, n = e;
  else {
    var o = e < 0.5 ? e * (1 + r) : e + r - e * r, s = 2 * e - o;
    n = za(s, o, t + 1 / 3), a = za(s, o, t), i = za(s, o, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: i * 255 };
}
function vi(t, r, e) {
  t = je(t, 255), r = je(r, 255), e = je(e, 255);
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
function Ef(t, r, e) {
  t = je(t, 360) * 6, r = je(r, 100), e = je(e, 100);
  var n = Math.floor(t), a = t - n, i = e * (1 - r), o = e * (1 - a * r), s = e * (1 - (1 - a) * r), c = n % 6, u = [e, o, i, i, s, e][c], l = [s, e, e, o, i, i][c], f = [i, i, s, e, e, o][c];
  return { r: u * 255, g: l * 255, b: f * 255 };
}
function hi(t, r, e, n) {
  var a = [
    nr(Math.round(t).toString(16)),
    nr(Math.round(r).toString(16)),
    nr(Math.round(e).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function xf(t, r, e, n, a) {
  var i = [
    nr(Math.round(t).toString(16)),
    nr(Math.round(r).toString(16)),
    nr(Math.round(e).toString(16)),
    nr(Pf(n))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Pf(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function jo(t) {
  return at(t) / 255;
}
function at(t) {
  return parseInt(t, 16);
}
function kf(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var gi = {
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
function Pr(t) {
  var r = { r: 0, g: 0, b: 0 }, e = 1, n = null, a = null, i = null, o = !1, s = !1;
  return typeof t == "string" && (t = Ff(t)), typeof t == "object" && (jt(t.r) && jt(t.g) && jt(t.b) ? (r = Cf(t.r, t.g, t.b), o = !0, s = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : jt(t.h) && jt(t.s) && jt(t.v) ? (n = In(t.s), a = In(t.v), r = Ef(t.h, n, a), o = !0, s = "hsv") : jt(t.h) && jt(t.s) && jt(t.l) && (n = In(t.s), i = In(t.l), r = Sf(t.h, n, i), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (e = t.a)), e = Sc(e), {
    ok: o,
    format: t.format || s,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: e
  };
}
var Of = "[-\\+]?\\d+%?", Tf = "[-\\+]?\\d*\\.\\d+%?", Yt = "(?:".concat(Tf, ")|(?:").concat(Of, ")"), Ha = "[\\s|\\(]+(".concat(Yt, ")[,|\\s]+(").concat(Yt, ")[,|\\s]+(").concat(Yt, ")\\s*\\)?"), Ba = "[\\s|\\(]+(".concat(Yt, ")[,|\\s]+(").concat(Yt, ")[,|\\s]+(").concat(Yt, ")[,|\\s]+(").concat(Yt, ")\\s*\\)?"), mt = {
  CSS_UNIT: new RegExp(Yt),
  rgb: new RegExp("rgb" + Ha),
  rgba: new RegExp("rgba" + Ba),
  hsl: new RegExp("hsl" + Ha),
  hsla: new RegExp("hsla" + Ba),
  hsv: new RegExp("hsv" + Ha),
  hsva: new RegExp("hsva" + Ba),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ff(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var r = !1;
  if (gi[t])
    t = gi[t], r = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var e = mt.rgb.exec(t);
  return e ? { r: e[1], g: e[2], b: e[3] } : (e = mt.rgba.exec(t), e ? { r: e[1], g: e[2], b: e[3], a: e[4] } : (e = mt.hsl.exec(t), e ? { h: e[1], s: e[2], l: e[3] } : (e = mt.hsla.exec(t), e ? { h: e[1], s: e[2], l: e[3], a: e[4] } : (e = mt.hsv.exec(t), e ? { h: e[1], s: e[2], v: e[3] } : (e = mt.hsva.exec(t), e ? { h: e[1], s: e[2], v: e[3], a: e[4] } : (e = mt.hex8.exec(t), e ? {
    r: at(e[1]),
    g: at(e[2]),
    b: at(e[3]),
    a: jo(e[4]),
    format: r ? "name" : "hex8"
  } : (e = mt.hex6.exec(t), e ? {
    r: at(e[1]),
    g: at(e[2]),
    b: at(e[3]),
    format: r ? "name" : "hex"
  } : (e = mt.hex4.exec(t), e ? {
    r: at(e[1] + e[1]),
    g: at(e[2] + e[2]),
    b: at(e[3] + e[3]),
    a: jo(e[4] + e[4]),
    format: r ? "name" : "hex8"
  } : (e = mt.hex3.exec(t), e ? {
    r: at(e[1] + e[1]),
    g: at(e[2] + e[2]),
    b: at(e[3] + e[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function jt(t) {
  return !!mt.CSS_UNIT.exec(String(t));
}
var Ge = (
  /** @class */
  function() {
    function t(r, e) {
      r === void 0 && (r = ""), e === void 0 && (e = {});
      var n;
      if (r instanceof t)
        return r;
      typeof r == "number" && (r = kf(r)), this.originalInput = r;
      var a = Pr(r);
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
      return this.a = Sc(r), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var r = this.toHsl().s;
      return r === 0;
    }, t.prototype.toHsv = function() {
      var r = vi(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, v: r.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var r = vi(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100), a = Math.round(r.v * 100);
      return this.a === 1 ? "hsv(".concat(e, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(e, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var r = Lo(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, l: r.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var r = Lo(this.r, this.g, this.b), e = Math.round(r.h * 360), n = Math.round(r.s * 100), a = Math.round(r.l * 100);
      return this.a === 1 ? "hsl(".concat(e, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(e, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(r) {
      return r === void 0 && (r = !1), hi(this.r, this.g, this.b, r);
    }, t.prototype.toHexString = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex(r);
    }, t.prototype.toHex8 = function(r) {
      return r === void 0 && (r = !1), xf(this.r, this.g, this.b, this.a, r);
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
        return "".concat(Math.round(je(e, 255) * 100), "%");
      };
      return {
        r: r(this.r),
        g: r(this.g),
        b: r(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var r = function(e) {
        return Math.round(je(e, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%)") : "rgba(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var r = "#" + hi(this.r, this.g, this.b, !1), e = 0, n = Object.entries(gi); e < n.length; e++) {
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
      return e.l += r / 100, e.l = $n(e.l), new t(e);
    }, t.prototype.brighten = function(r) {
      r === void 0 && (r = 10);
      var e = this.toRgb();
      return e.r = Math.max(0, Math.min(255, e.r - Math.round(255 * -(r / 100)))), e.g = Math.max(0, Math.min(255, e.g - Math.round(255 * -(r / 100)))), e.b = Math.max(0, Math.min(255, e.b - Math.round(255 * -(r / 100)))), new t(e);
    }, t.prototype.darken = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.l -= r / 100, e.l = $n(e.l), new t(e);
    }, t.prototype.tint = function(r) {
      return r === void 0 && (r = 10), this.mix("white", r);
    }, t.prototype.shade = function(r) {
      return r === void 0 && (r = 10), this.mix("black", r);
    }, t.prototype.desaturate = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.s -= r / 100, e.s = $n(e.s), new t(e);
    }, t.prototype.saturate = function(r) {
      r === void 0 && (r = 10);
      var e = this.toHsl();
      return e.s += r / 100, e.s = $n(e.s), new t(e);
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
), Vn = 2, Do = 0.16, Rf = 0.05, Mf = 0.05, _f = 0.15, Ec = 5, xc = 4, Af = [{
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
function zo(t) {
  var r = t.r, e = t.g, n = t.b, a = vi(r, e, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Ln(t) {
  var r = t.r, e = t.g, n = t.b;
  return "#".concat(hi(r, e, n, !1));
}
function Nf(t, r, e) {
  var n = e / 100, a = {
    r: (r.r - t.r) * n + t.r,
    g: (r.g - t.g) * n + t.g,
    b: (r.b - t.b) * n + t.b
  };
  return a;
}
function Ho(t, r, e) {
  var n;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n = e ? Math.round(t.h) - Vn * r : Math.round(t.h) + Vn * r : n = e ? Math.round(t.h) + Vn * r : Math.round(t.h) - Vn * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Bo(t, r, e) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var n;
  return e ? n = t.s - Do * r : r === xc ? n = t.s + Do : n = t.s + Rf * r, n > 1 && (n = 1), e && r === Ec && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Wo(t, r, e) {
  var n;
  return e ? n = t.v + Mf * r : n = t.v - _f * r, n > 1 && (n = 1), Number(n.toFixed(2));
}
function un(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], n = Pr(t), a = Ec; a > 0; a -= 1) {
    var i = zo(n), o = Ln(Pr({
      h: Ho(i, a, !0),
      s: Bo(i, a, !0),
      v: Wo(i, a, !0)
    }));
    e.push(o);
  }
  e.push(Ln(n));
  for (var s = 1; s <= xc; s += 1) {
    var c = zo(n), u = Ln(Pr({
      h: Ho(c, s),
      s: Bo(c, s),
      v: Wo(c, s)
    }));
    e.push(u);
  }
  return r.theme === "dark" ? Af.map(function(l) {
    var f = l.index, v = l.opacity, p = Ln(Nf(Pr(r.backgroundColor || "#141414"), Pr(e[f]), v * 100));
    return p;
  }) : e;
}
var Wa = {
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
}, mi = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
mi.primary = mi[5];
var pi = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
pi.primary = pi[5];
var yi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
yi.primary = yi[5];
var bi = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
bi.primary = bi[5];
var wi = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
wi.primary = wi[5];
var Ci = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Ci.primary = Ci[5];
var Si = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Si.primary = Si[5];
var Ei = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ei.primary = Ei[5];
var aa = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
aa.primary = aa[5];
var xi = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
xi.primary = xi[5];
var Pi = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Pi.primary = Pi[5];
var ki = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
ki.primary = ki[5];
var Oi = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Oi.primary = Oi[5];
var qa = {
  red: mi,
  volcano: pi,
  orange: yi,
  gold: bi,
  yellow: wi,
  lime: Ci,
  green: Si,
  cyan: Ei,
  blue: aa,
  geekblue: xi,
  purple: Pi,
  magenta: ki,
  grey: Oi
};
const Pc = {
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
}, ln = Object.assign(Object.assign({}, Pc), {
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
function $f(t, r) {
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
  } = t, f = e(c), v = e(a), p = e(i), m = e(o), g = e(s), d = n(u, l), b = t.colorLink || t.colorInfo, y = e(b), w = new Ge(m[1]).mix(new Ge(m[3]), 50).toHexString();
  return Object.assign(Object.assign({}, d), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
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
    colorErrorBgFilledHover: w,
    colorErrorBgActive: m[3],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: p[1],
    colorWarningBgHover: p[2],
    colorWarningBorder: p[3],
    colorWarningBorderHover: p[4],
    colorWarningHover: p[4],
    colorWarning: p[6],
    colorWarningActive: p[7],
    colorWarningTextHover: p[8],
    colorWarningText: p[9],
    colorWarningTextActive: p[10],
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
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new Ge("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const If = (t) => {
  let r = t, e = t, n = t, a = t;
  return t < 6 && t >= 5 ? r = t + 1 : t < 16 && t >= 6 ? r = t + 2 : t >= 16 && (r = 16), t < 7 && t >= 5 ? e = 4 : t < 8 && t >= 7 ? e = 5 : t < 14 && t >= 8 ? e = 6 : t < 16 && t >= 14 ? e = 7 : t >= 16 && (e = 8), t < 6 && t >= 2 ? n = 1 : t >= 6 && (n = 2), t > 4 && t < 8 ? a = 4 : t >= 8 && (a = 6), {
    borderRadius: t,
    borderRadiusXS: n,
    borderRadiusSM: e,
    borderRadiusLG: r,
    borderRadiusOuter: a
  };
};
function Vf(t) {
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
  }, If(n));
}
const Lf = (t) => {
  const {
    controlHeight: r
  } = t;
  return {
    controlHeightSM: r * 0.75,
    controlHeightXS: r * 0.5,
    controlHeightLG: r * 1.25
  };
};
function jf(t) {
  return (t + 8) / t;
}
function Df(t) {
  const r = new Array(10).fill(null).map((e, n) => {
    const a = n - 1, i = t * Math.pow(Math.E, a / 5), o = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(o / 2) * 2;
  });
  return r[1] = t, r.map((e) => ({
    size: e,
    lineHeight: jf(e)
  }));
}
const zf = (t) => {
  const r = Df(t), e = r.map((l) => l.size), n = r.map((l) => l.lineHeight), a = e[1], i = e[0], o = e[2], s = n[1], c = n[0], u = n[2];
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
function Hf(t) {
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
const st = (t, r) => new Ge(t).setAlpha(r).toRgbString(), Kr = (t, r) => new Ge(t).darken(r).toHexString(), Bf = (t) => {
  const r = un(t);
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
}, Wf = (t, r) => {
  const e = t || "#fff", n = r || "#000";
  return {
    colorBgBase: e,
    colorTextBase: n,
    colorText: st(n, 0.88),
    colorTextSecondary: st(n, 0.65),
    colorTextTertiary: st(n, 0.45),
    colorTextQuaternary: st(n, 0.25),
    colorFill: st(n, 0.15),
    colorFillSecondary: st(n, 0.06),
    colorFillTertiary: st(n, 0.04),
    colorFillQuaternary: st(n, 0.02),
    colorBgSolid: st(n, 1),
    colorBgSolidHover: st(n, 0.75),
    colorBgSolidActive: st(n, 0.95),
    colorBgLayout: Kr(e, 4),
    colorBgContainer: Kr(e, 0),
    colorBgElevated: Kr(e, 0),
    colorBgSpotlight: st(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Kr(e, 15),
    colorBorderSecondary: Kr(e, 6)
  };
};
function qf(t) {
  Wa.pink = Wa.magenta, qa.pink = qa.magenta;
  const r = Object.keys(Pc).map((e) => {
    const n = t[e] === Wa[e] ? qa[e] : un(t[e]);
    return new Array(10).fill(1).reduce((a, i, o) => (a[`${e}-${o + 1}`] = n[o], a[`${e}${o + 1}`] = n[o], a), {});
  }).reduce((e, n) => (e = Object.assign(Object.assign({}, e), n), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), r), $f(t, {
    generateColorPalettes: Bf,
    generateNeutralColorPalettes: Wf
  })), zf(t.fontSize)), Hf(t)), Lf(t)), Vf(t));
}
const kc = si(qf), Ti = {
  token: ln,
  override: {
    override: ln
  },
  hashed: !0
}, Oc = /* @__PURE__ */ $e.createContext(Ti), Fi = "ant", Tc = "anticon", $g = ["outlined", "borderless", "filled"], Uf = (t, r) => r || (t ? `${Fi}-${t}` : Fi), or = /* @__PURE__ */ h.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Uf,
  iconPrefixCls: Tc
}), Gf = `-ant-${Date.now()}-${Math.random()}`;
function Kf(t, r) {
  const e = {}, n = (o, s) => {
    let c = o.clone();
    return c = (s == null ? void 0 : s(c)) || c, c.toRgbString();
  }, a = (o, s) => {
    const c = new Ge(o), u = un(c.toRgbString());
    e[`${s}-color`] = n(c), e[`${s}-color-disabled`] = u[1], e[`${s}-color-hover`] = u[4], e[`${s}-color-active`] = u[6], e[`${s}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), e[`${s}-color-deprecated-bg`] = u[0], e[`${s}-color-deprecated-border`] = u[2];
  };
  if (r.primaryColor) {
    a(r.primaryColor, "primary");
    const o = new Ge(r.primaryColor), s = un(o.toRgbString());
    s.forEach((u, l) => {
      e[`primary-${l + 1}`] = u;
    }), e["primary-color-deprecated-l-35"] = n(o, (u) => u.lighten(35)), e["primary-color-deprecated-l-20"] = n(o, (u) => u.lighten(20)), e["primary-color-deprecated-t-20"] = n(o, (u) => u.tint(20)), e["primary-color-deprecated-t-50"] = n(o, (u) => u.tint(50)), e["primary-color-deprecated-f-12"] = n(o, (u) => u.setAlpha(u.getAlpha() * 0.12));
    const c = new Ge(s[0]);
    e["primary-color-active-deprecated-f-30"] = n(c, (u) => u.setAlpha(u.getAlpha() * 0.3)), e["primary-color-active-deprecated-d-02"] = n(c, (u) => u.darken(2));
  }
  return r.successColor && a(r.successColor, "success"), r.warningColor && a(r.warningColor, "warning"), r.errorColor && a(r.errorColor, "error"), r.infoColor && a(r.infoColor, "info"), `
  :root {
    ${Object.keys(e).map((o) => `--${t}-${o}: ${e[o]};`).join(`
`)}
  }
  `.trim();
}
function Xf(t, r) {
  const e = Kf(t, r);
  Qe() ? Bt(e, `${Gf}-dynamic-theme`) : z.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ri = /* @__PURE__ */ h.createContext(!1), Yf = (t) => {
  let {
    children: r,
    disabled: e
  } = t;
  const n = h.useContext(Ri);
  return /* @__PURE__ */ h.createElement(Ri.Provider, {
    value: e ?? n
  }, r);
}, fn = /* @__PURE__ */ h.createContext(void 0), Zf = (t) => {
  let {
    children: r,
    size: e
  } = t;
  const n = h.useContext(fn);
  return /* @__PURE__ */ h.createElement(fn.Provider, {
    value: e || n
  }, r);
};
function Qf() {
  const t = h.useContext(Ri), r = h.useContext(fn);
  return {
    componentDisabled: t,
    componentSize: r
  };
}
var Fc = /* @__PURE__ */ Be(function t() {
  He(this, t);
}), Rc = "CALC_UNIT", Jf = new RegExp(Rc, "g");
function Ua(t) {
  return typeof t == "number" ? "".concat(t).concat(Rc) : t;
}
var ed = /* @__PURE__ */ function(t) {
  sr(e, t);
  var r = cr(e);
  function e(n, a) {
    var i;
    He(this, e), i = r.call(this), P(J(i), "result", ""), P(J(i), "unitlessCssVar", void 0), P(J(i), "lowPriority", void 0);
    var o = ee(n);
    return i.unitlessCssVar = a, n instanceof e ? i.result = "(".concat(n.result, ")") : o === "number" ? i.result = Ua(n) : o === "string" && (i.result = n), i;
  }
  return Be(e, [{
    key: "add",
    value: function(a) {
      return a instanceof e ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(Ua(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof e ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(Ua(a))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(Jf, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(Fc), td = /* @__PURE__ */ function(t) {
  sr(e, t);
  var r = cr(e);
  function e(n) {
    var a;
    return He(this, e), a = r.call(this), P(J(a), "result", 0), n instanceof e ? a.result = n.result : typeof n == "number" && (a.result = n), a;
  }
  return Be(e, [{
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
}(Fc), rd = function(r, e) {
  var n = r === "css" ? ed : td;
  return function(a) {
    return new n(a, e);
  };
}, qo = function(r, e) {
  return "".concat([e, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function lt(t) {
  var r = h.useRef();
  r.current = t;
  var e = h.useCallback(function() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (n = r.current) === null || n === void 0 ? void 0 : n.call.apply(n, [r].concat(i));
  }, []);
  return e;
}
function dn(t) {
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
function Ga(t) {
  return t !== void 0;
}
function nd(t, r) {
  var e = r || {}, n = e.defaultValue, a = e.value, i = e.onChange, o = e.postState, s = dn(function() {
    return Ga(a) ? a : Ga(n) ? typeof n == "function" ? n() : n : typeof t == "function" ? t() : t;
  }), c = H(s, 2), u = c[0], l = c[1], f = a !== void 0 ? a : u, v = o ? o(f) : f, p = lt(i), m = dn([f]), g = H(m, 2), d = g[0], b = g[1];
  Fo(function() {
    var w = d[0];
    u !== w && p(u, w);
  }, [d]), Fo(function() {
    Ga(a) || l(a);
  }, [a]);
  var y = lt(function(w, E) {
    l(w, E), b([f], E);
  });
  return [v, y];
}
function Uo(t, r, e, n) {
  var a = F({}, r[t]);
  if (n != null && n.deprecatedTokens) {
    var i = n.deprecatedTokens;
    i.forEach(function(s) {
      var c = H(s, 2), u = c[0], l = c[1];
      if (z.env.NODE_ENV !== "production" && pe(!(a != null && a[u]), "Component Token `".concat(String(u), "` of ").concat(String(t), " is deprecated. Please use `").concat(String(l), "` instead.")), a != null && a[u] || a != null && a[l]) {
        var f;
        (f = a[l]) !== null && f !== void 0 || (a[l] = a == null ? void 0 : a[u]);
      }
    });
  }
  var o = F(F({}, e), a);
  return Object.keys(o).forEach(function(s) {
    o[s] === r[s] && delete o[s];
  }), o;
}
var Mc = z.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Mi = !0;
function ba() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  if (!Mc)
    return Object.assign.apply(Object, [{}].concat(r));
  Mi = !1;
  var n = {};
  return r.forEach(function(a) {
    if (ee(a) === "object") {
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
  }), Mi = !0, n;
}
var Go = {};
function ad() {
}
var id = function(r) {
  var e, n = r, a = ad;
  return Mc && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), n = new Proxy(r, {
    get: function(o, s) {
      if (Mi) {
        var c;
        (c = e) === null || c === void 0 || c.add(s);
      }
      return o[s];
    }
  }), a = function(o, s) {
    var c;
    Go[o] = {
      global: Array.from(e),
      component: F(F({}, (c = Go[o]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: n,
    keys: e,
    flush: a
  };
};
function Ko(t, r, e) {
  if (typeof e == "function") {
    var n;
    return e(ba(r, (n = r[t]) !== null && n !== void 0 ? n : {}));
  }
  return e ?? {};
}
function od(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
        n[a] = arguments[a];
      return "max(".concat(n.map(function(i) {
        return Zt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
        n[a] = arguments[a];
      return "min(".concat(n.map(function(i) {
        return Zt(i);
      }).join(","), ")");
    }
  };
}
var sd = 1e3 * 60 * 10, cd = /* @__PURE__ */ function() {
  function t() {
    He(this, t), P(this, "map", /* @__PURE__ */ new Map()), P(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), P(this, "nextID", 0), P(this, "lastAccessBeat", /* @__PURE__ */ new Map()), P(this, "accessBeat", 0);
  }
  return Be(t, [{
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
        return i && ee(i) === "object" ? "obj_".concat(n.getObjectID(i)) : "".concat(ee(i), "_").concat(i);
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
          n - a > sd && (e.map.delete(i), e.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), t;
}(), Xo = new cd();
function ud(t, r) {
  return $e.useMemo(function() {
    var e = Xo.get(r);
    if (e)
      return e;
    var n = t();
    return Xo.set(r, n), n;
  }, r);
}
var ld = function() {
  return {};
};
function fd(t) {
  var r = t.useCSP, e = r === void 0 ? ld : r, n = t.useToken, a = t.usePrefix, i = t.getResetStyles, o = t.getCommonStyle, s = t.getCompUnitless;
  function c(v, p, m, g) {
    var d = Array.isArray(v) ? v[0] : v;
    function b(R) {
      return "".concat(String(d)).concat(R.slice(0, 1).toUpperCase()).concat(R.slice(1));
    }
    var y = (g == null ? void 0 : g.unitless) || {}, w = typeof s == "function" ? s(v) : {}, E = F(F({}, w), {}, P({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function(R) {
      E[b(R)] = y[R];
    });
    var C = F(F({}, g), {}, {
      unitless: E,
      prefixToken: b
    }), S = l(v, p, m, C), x = u(d, m, C);
    return function(R) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : R, _ = S(R, M), I = H(_, 2), j = I[1], V = x(M), $ = H(V, 2), U = $[0], O = $[1];
      return [U, j, O];
    };
  }
  function u(v, p, m) {
    var g = m.unitless, d = m.injectStyle, b = d === void 0 ? !0 : d, y = m.prefixToken, w = m.ignore, E = function(x) {
      var R = x.rootCls, M = x.cssVar, _ = M === void 0 ? {} : M, I = n(), j = I.realToken;
      return cf({
        path: [v],
        prefix: _.prefix,
        key: _.key,
        unitless: g,
        ignore: w,
        token: j,
        scope: R
      }, function() {
        var V = Ko(v, j, p), $ = Uo(v, j, V, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys(V).forEach(function(U) {
          $[y(U)] = $[U], delete $[U];
        }), $;
      }), null;
    }, C = function(x) {
      var R = n(), M = R.cssVar;
      return [function(_) {
        return b && M ? /* @__PURE__ */ $e.createElement($e.Fragment, null, /* @__PURE__ */ $e.createElement(E, {
          rootCls: x,
          cssVar: M,
          component: v
        }), _) : _;
      }, M == null ? void 0 : M.key];
    };
    return C;
  }
  function l(v, p, m) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = Array.isArray(v) ? v : [v, v], b = H(d, 1), y = b[0], w = d.join("-"), E = t.layer || {
      name: "antd"
    };
    return function(C) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, x = n(), R = x.theme, M = x.realToken, _ = x.hashId, I = x.token, j = x.cssVar, V = a(), $ = V.rootPrefixCls, U = V.iconPrefixCls, O = e(), k = j ? "css" : "js", T = ud(function() {
        var D = /* @__PURE__ */ new Set();
        return j && Object.keys(g.unitless || {}).forEach(function(Z) {
          D.add(Gn(Z, j.prefix)), D.add(Gn(Z, qo(y, j.prefix)));
        }), rd(k, D);
      }, [k, y, j == null ? void 0 : j.prefix]), N = od(k), A = N.max, L = N.min, G = {
        theme: R,
        token: I,
        hashId: _,
        nonce: function() {
          return O.nonce;
        },
        clientOnly: g.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: g.order || -999
      };
      di(F(F({}, G), {}, {
        clientOnly: !1,
        path: ["Shared", $]
      }), function() {
        return typeof i == "function" ? i(I) : [];
      });
      var W = di(F(F({}, G), {}, {
        path: [w, C, U]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var D = id(I), Z = D.token, ne = D.flush, ae = Ko(y, M, m), Pe = ".".concat(C), le = Uo(y, M, ae, {
          deprecatedTokens: g.deprecatedTokens
        });
        j && ae && ee(ae) === "object" && Object.keys(ae).forEach(function(Ee) {
          ae[Ee] = "var(".concat(Gn(Ee, qo(y, j.prefix)), ")");
        });
        var Ce = ba(Z, {
          componentCls: Pe,
          prefixCls: C,
          iconCls: ".".concat(U),
          antCls: ".".concat($),
          calc: T,
          // @ts-ignore
          max: A,
          // @ts-ignore
          min: L
        }, j ? ae : le), Se = p(Ce, {
          hashId: _,
          prefixCls: C,
          rootPrefixCls: $,
          iconPrefixCls: U
        });
        ne(y, le);
        var fe = typeof o == "function" ? o(Ce, C, S, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : fe, Se];
      });
      return [W, _];
    };
  }
  function f(v, p, m) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = l(v, p, m, F({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), b = function(w) {
      var E = w.prefixCls, C = w.rootCls, S = C === void 0 ? E : C;
      return d(E, S), null;
    };
    return z.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), b;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: l
  };
}
const ia = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], dd = "5.21.6";
function Ka(t) {
  return t >= 0 && t <= 255;
}
function jn(t, r) {
  const {
    r: e,
    g: n,
    b: a,
    a: i
  } = new Ge(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: o,
    g: s,
    b: c
  } = new Ge(r).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const l = Math.round((e - o * (1 - u)) / u), f = Math.round((n - s * (1 - u)) / u), v = Math.round((a - c * (1 - u)) / u);
    if (Ka(l) && Ka(f) && Ka(v))
      return new Ge({
        r: l,
        g: f,
        b: v,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new Ge({
    r: e,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var vd = function(t, r) {
  var e = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
function _c(t) {
  const {
    override: r
  } = t, e = vd(t, ["override"]), n = Object.assign({}, r);
  Object.keys(ln).forEach((v) => {
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
    colorSplit: jn(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: jn(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: jn(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: jn(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new Ge("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ge("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ge("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Yo = function(t, r) {
  var e = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
const Ac = {
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
}, hd = {
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
}, gd = {
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
}, Nc = (t, r, e) => {
  const n = e.getDerivativeToken(t), {
    override: a
  } = r, i = Yo(r, ["override"]);
  let o = Object.assign(Object.assign({}, n), {
    override: a
  });
  return o = _c(o), i && Object.entries(i).forEach((s) => {
    let [c, u] = s;
    const {
      theme: l
    } = u, f = Yo(u, ["theme"]);
    let v = f;
    l && (v = Nc(Object.assign(Object.assign({}, o), f), {
      override: f
    }, l)), o[c] = v;
  }), o;
};
function hn() {
  const {
    token: t,
    hashed: r,
    theme: e,
    override: n,
    cssVar: a
  } = $e.useContext(Oc), i = `${dd}-${r || ""}`, o = e || kc, [s, c, u] = Al(o, [ln, t], {
    salt: i,
    override: n,
    getComputedToken: Nc,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: _c,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: Ac,
      ignore: hd,
      preserve: gd
    }
  });
  return [o, u, r ? c : "", s, a];
}
const Ig = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, md = function(t) {
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
}, pd = () => ({
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
}), Vg = () => ({
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
}), yd = (t) => ({
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
}), bd = (t, r, e, n) => {
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
}, wd = (t) => ({
  outline: `${Zt(t.lineWidthFocus)} solid ${t.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Lg = (t) => ({
  "&:focus-visible": Object.assign({}, wd(t))
}), $c = (t, r) => {
  const [e, n] = hn();
  return di({
    theme: e,
    token: n,
    hashId: "",
    path: ["ant-design-icons", t],
    nonce: () => r == null ? void 0 : r.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${t}`]: Object.assign(Object.assign({}, pd()), {
      [`.${t} .${t}-icon`]: {
        display: "block"
      }
    })
  }]);
}, {
  genStyleHooks: Cd,
  genComponentStyleHook: jg,
  genSubStyleComponent: Dg
} = fd({
  usePrefix: () => {
    const {
      getPrefixCls: t,
      iconPrefixCls: r
    } = h.useContext(or);
    return {
      rootPrefixCls: t(),
      iconPrefixCls: r
    };
  },
  useToken: () => {
    const [t, r, e, n, a] = hn();
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
    } = h.useContext(or);
    return $c(r, t), t ?? {};
  },
  getResetStyles: (t) => [{
    "&": yd(t)
  }],
  getCommonStyle: bd,
  getCompUnitless: () => Ac
});
function Sd(t, r) {
  return ia.reduce((e, n) => {
    const a = t[`${n}1`], i = t[`${n}3`], o = t[`${n}6`], s = t[`${n}7`];
    return Object.assign(Object.assign({}, e), r(n, {
      lightColor: a,
      lightBorderColor: i,
      darkColor: o,
      textColor: s
    }));
  }, {});
}
const Ed = Object.assign({}, ca), {
  useId: Zo
} = Ed, xd = () => "", Pd = typeof Zo > "u" ? xd : Zo;
function kd(t, r, e) {
  var n, a;
  const i = Vr("ConfigProvider"), o = t || {}, s = o.inherit === !1 || !r ? Object.assign(Object.assign({}, Ti), {
    hashed: (n = r == null ? void 0 : r.hashed) !== null && n !== void 0 ? n : Ti.hashed,
    cssVar: r == null ? void 0 : r.cssVar
  }) : r, c = Pd();
  if (z.env.NODE_ENV !== "production") {
    const u = o.cssVar || s.cssVar, l = !!(typeof o.cssVar == "object" && (!((a = o.cssVar) === null || a === void 0) && a.key) || c);
    z.env.NODE_ENV !== "production" && i(!u || l, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Zi(() => {
    var u, l;
    if (!t)
      return r;
    const f = Object.assign({}, s.components);
    Object.keys(t.components || {}).forEach((m) => {
      f[m] = Object.assign(Object.assign({}, f[m]), t.components[m]);
    });
    const v = `css-var-${c.replace(/:/g, "")}`, p = ((u = o.cssVar) !== null && u !== void 0 ? u : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: e == null ? void 0 : e.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof o.cssVar == "object" ? o.cssVar : {}), {
      key: typeof o.cssVar == "object" && ((l = o.cssVar) === null || l === void 0 ? void 0 : l.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, s), o), {
      token: Object.assign(Object.assign({}, s.token), o.token),
      components: f,
      cssVar: p
    });
  }, [o, s], (u, l) => u.some((f, v) => {
    const p = l[v];
    return !ii(f, p, !0);
  }));
}
var Od = ["children"], Ic = /* @__PURE__ */ h.createContext({});
function Td(t) {
  var r = t.children, e = Ft(t, Od);
  return /* @__PURE__ */ h.createElement(Ic.Provider, {
    value: e
  }, r);
}
var Fd = /* @__PURE__ */ function(t) {
  sr(e, t);
  var r = cr(e);
  function e() {
    return He(this, e), r.apply(this, arguments);
  }
  return Be(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(h.Component);
function Rd(t) {
  var r = h.useReducer(function(s) {
    return s + 1;
  }, 0), e = H(r, 2), n = e[1], a = h.useRef(t), i = lt(function() {
    return a.current;
  }), o = lt(function(s) {
    a.current = typeof s == "function" ? s(a.current) : s, n();
  });
  return [i, o];
}
var Gt = "none", Dn = "appear", zn = "enter", Hn = "leave", Qo = "none", yt = "prepare", Or = "start", Tr = "active", uo = "end", Vc = "prepared";
function Jo(t, r) {
  var e = {};
  return e[t.toLowerCase()] = r.toLowerCase(), e["Webkit".concat(t)] = "webkit".concat(r), e["Moz".concat(t)] = "moz".concat(r), e["ms".concat(t)] = "MS".concat(r), e["O".concat(t)] = "o".concat(r.toLowerCase()), e;
}
function Md(t, r) {
  var e = {
    animationend: Jo("Animation", "AnimationEnd"),
    transitionend: Jo("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in r || delete e.animationend.animation, "TransitionEvent" in r || delete e.transitionend.transition), e;
}
var _d = Md(Qe(), typeof window < "u" ? window : {}), Lc = {};
if (Qe()) {
  var Ad = document.createElement("div");
  Lc = Ad.style;
}
var Bn = {};
function jc(t) {
  if (Bn[t])
    return Bn[t];
  var r = _d[t];
  if (r)
    for (var e = Object.keys(r), n = e.length, a = 0; a < n; a += 1) {
      var i = e[a];
      if (Object.prototype.hasOwnProperty.call(r, i) && i in Lc)
        return Bn[t] = r[i], Bn[t];
    }
  return "";
}
var Dc = jc("animationend"), zc = jc("transitionend"), Hc = !!(Dc && zc), es = Dc || "animationend", ts = zc || "transitionend";
function rs(t, r) {
  if (!t) return null;
  if (ee(t) === "object") {
    var e = r.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return t[e];
  }
  return "".concat(t, "-").concat(r);
}
const Nd = function(t) {
  var r = h.useRef();
  function e(a) {
    a && (a.removeEventListener(ts, t), a.removeEventListener(es, t));
  }
  function n(a) {
    r.current && r.current !== a && e(r.current), a && a !== r.current && (a.addEventListener(ts, t), a.addEventListener(es, t), r.current = a);
  }
  return h.useEffect(function() {
    return function() {
      e(r.current);
    };
  }, []), [n, e];
};
var Bc = Qe() ? h.useLayoutEffect : h.useEffect;
const $d = function() {
  var t = h.useRef(null);
  function r() {
    ra.cancel(t.current);
  }
  function e(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    r();
    var i = ra(function() {
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
var Id = [yt, Or, Tr, uo], Vd = [yt, Vc], Wc = !1, Ld = !0;
function qc(t) {
  return t === Tr || t === uo;
}
const jd = function(t, r, e) {
  var n = dn(Qo), a = H(n, 2), i = a[0], o = a[1], s = $d(), c = H(s, 2), u = c[0], l = c[1];
  function f() {
    o(yt, !0);
  }
  var v = r ? Vd : Id;
  return Bc(function() {
    if (i !== Qo && i !== uo) {
      var p = v.indexOf(i), m = v[p + 1], g = e(i);
      g === Wc ? o(m, !0) : m && u(function(d) {
        function b() {
          d.isCanceled() || o(m, !0);
        }
        g === !0 ? b() : Promise.resolve(g).then(b);
      });
    }
  }, [t, i]), h.useEffect(function() {
    return function() {
      l();
    };
  }, []), [f, i];
};
function Dd(t, r, e, n) {
  var a = n.motionEnter, i = a === void 0 ? !0 : a, o = n.motionAppear, s = o === void 0 ? !0 : o, c = n.motionLeave, u = c === void 0 ? !0 : c, l = n.motionDeadline, f = n.motionLeaveImmediately, v = n.onAppearPrepare, p = n.onEnterPrepare, m = n.onLeavePrepare, g = n.onAppearStart, d = n.onEnterStart, b = n.onLeaveStart, y = n.onAppearActive, w = n.onEnterActive, E = n.onLeaveActive, C = n.onAppearEnd, S = n.onEnterEnd, x = n.onLeaveEnd, R = n.onVisibleChanged, M = dn(), _ = H(M, 2), I = _[0], j = _[1], V = Rd(Gt), $ = H(V, 2), U = $[0], O = $[1], k = dn(null), T = H(k, 2), N = T[0], A = T[1], L = U(), G = h.useRef(!1), W = h.useRef(null);
  function D() {
    return e();
  }
  var Z = h.useRef(!1);
  function ne() {
    O(Gt), A(null, !0);
  }
  var ae = lt(function(de) {
    var te = U();
    if (te !== Gt) {
      var _e = D();
      if (!(de && !de.deadline && de.target !== _e)) {
        var X = Z.current, ye;
        te === Dn && X ? ye = C == null ? void 0 : C(_e, de) : te === zn && X ? ye = S == null ? void 0 : S(_e, de) : te === Hn && X && (ye = x == null ? void 0 : x(_e, de)), X && ye !== !1 && ne();
      }
    }
  }), Pe = Nd(ae), le = H(Pe, 1), Ce = le[0], Se = function(te) {
    switch (te) {
      case Dn:
        return P(P(P({}, yt, v), Or, g), Tr, y);
      case zn:
        return P(P(P({}, yt, p), Or, d), Tr, w);
      case Hn:
        return P(P(P({}, yt, m), Or, b), Tr, E);
      default:
        return {};
    }
  }, fe = h.useMemo(function() {
    return Se(L);
  }, [L]), Ee = jd(L, !t, function(de) {
    if (de === yt) {
      var te = fe[yt];
      return te ? te(D()) : Wc;
    }
    if (ge in fe) {
      var _e;
      A(((_e = fe[ge]) === null || _e === void 0 ? void 0 : _e.call(fe, D(), null)) || null);
    }
    return ge === Tr && L !== Gt && (Ce(D()), l > 0 && (clearTimeout(W.current), W.current = setTimeout(function() {
      ae({
        deadline: !0
      });
    }, l))), ge === Vc && ne(), Ld;
  }), B = H(Ee, 2), he = B[0], ge = B[1], Ie = qc(ge);
  Z.current = Ie, Bc(function() {
    j(r);
    var de = G.current;
    G.current = !0;
    var te;
    !de && r && s && (te = Dn), de && r && i && (te = zn), (de && !r && u || !de && f && !r && u) && (te = Hn);
    var _e = Se(te);
    te && (t || _e[yt]) ? (O(te), he()) : O(Gt);
  }, [r]), h.useEffect(function() {
    // Cancel appear
    (L === Dn && !s || // Cancel enter
    L === zn && !i || // Cancel leave
    L === Hn && !u) && O(Gt);
  }, [s, i, u]), h.useEffect(function() {
    return function() {
      G.current = !1, clearTimeout(W.current);
    };
  }, []);
  var ke = h.useRef(!1);
  h.useEffect(function() {
    I && (ke.current = !0), I !== void 0 && L === Gt && ((ke.current || I) && (R == null || R(I)), ke.current = !0);
  }, [I, L]);
  var Me = N;
  return fe[yt] && ge === Or && (Me = F({
    transition: "none"
  }, Me)), [L, ge, Me, I ?? r];
}
function zd(t) {
  var r = t;
  ee(t) === "object" && (r = t.transitionSupport);
  function e(a, i) {
    return !!(a.motionName && r && i !== !1);
  }
  var n = /* @__PURE__ */ h.forwardRef(function(a, i) {
    var o = a.visible, s = o === void 0 ? !0 : o, c = a.removeOnLeave, u = c === void 0 ? !0 : c, l = a.forceRender, f = a.children, v = a.motionName, p = a.leavedClassName, m = a.eventProps, g = h.useContext(Ic), d = g.motion, b = e(a, d), y = h.useRef(), w = h.useRef();
    function E() {
      try {
        return y.current instanceof HTMLElement ? y.current : Un(w.current);
      } catch {
        return null;
      }
    }
    var C = Dd(b, s, E, a), S = H(C, 4), x = S[0], R = S[1], M = S[2], _ = S[3], I = h.useRef(_);
    _ && (I.current = !0);
    var j = h.useCallback(function(N) {
      y.current = N, Qi(i, N);
    }, [i]), V, $ = F(F({}, m), {}, {
      visible: s
    });
    if (!f)
      V = null;
    else if (x === Gt)
      _ ? V = f(F({}, $), j) : !u && I.current && p ? V = f(F(F({}, $), {}, {
        className: p
      }), j) : l || !u && !p ? V = f(F(F({}, $), {}, {
        style: {
          display: "none"
        }
      }), j) : V = null;
    else {
      var U;
      R === yt ? U = "prepare" : qc(R) ? U = "active" : R === Or && (U = "start");
      var O = rs(v, "".concat(x, "-").concat(U));
      V = f(F(F({}, $), {}, {
        className: Ze(rs(v, x), P(P({}, O, O && U), v, typeof v == "string")),
        style: M
      }), j);
    }
    if (/* @__PURE__ */ h.isValidElement(V) && ua(V)) {
      var k = V, T = k.ref;
      T || (V = /* @__PURE__ */ h.cloneElement(V, {
        ref: j
      }));
    }
    return /* @__PURE__ */ h.createElement(Fd, {
      ref: w
    }, V);
  });
  return n.displayName = "CSSMotion", n;
}
const lo = zd(Hc);
var _i = "add", Ai = "keep", Ni = "remove", Xa = "removed";
function Hd(t) {
  var r;
  return t && ee(t) === "object" && "key" in t ? r = t : r = {
    key: t
  }, F(F({}, r), {}, {
    key: String(r.key)
  });
}
function $i() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(Hd);
}
function Bd() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], n = 0, a = r.length, i = $i(t), o = $i(r);
  i.forEach(function(u) {
    for (var l = !1, f = n; f < a; f += 1) {
      var v = o[f];
      if (v.key === u.key) {
        n < f && (e = e.concat(o.slice(n, f).map(function(p) {
          return F(F({}, p), {}, {
            status: _i
          });
        })), n = f), e.push(F(F({}, v), {}, {
          status: Ai
        })), n += 1, l = !0;
        break;
      }
    }
    l || e.push(F(F({}, u), {}, {
      status: Ni
    }));
  }), n < a && (e = e.concat(o.slice(n).map(function(u) {
    return F(F({}, u), {}, {
      status: _i
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
      var f = l.key, v = l.status;
      return f !== u || v !== Ni;
    }), e.forEach(function(l) {
      l.key === u && (l.status = Ai);
    });
  }), e;
}
var Wd = ["component", "children", "onVisibleChanged", "onAllRemoved"], qd = ["status"], Ud = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Gd(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo, e = /* @__PURE__ */ function(n) {
    sr(i, n);
    var a = cr(i);
    function i() {
      var o;
      He(this, i);
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
        c[u] = arguments[u];
      return o = a.call.apply(a, [this].concat(c)), P(J(o), "state", {
        keyEntities: []
      }), P(J(o), "removeKey", function(l) {
        o.setState(function(f) {
          var v = f.keyEntities.map(function(p) {
            return p.key !== l ? p : F(F({}, p), {}, {
              status: Xa
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var f = o.state.keyEntities, v = f.filter(function(p) {
            var m = p.status;
            return m !== Xa;
          }).length;
          v === 0 && o.props.onAllRemoved && o.props.onAllRemoved();
        });
      }), o;
    }
    return Be(i, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, u = this.props, l = u.component, f = u.children, v = u.onVisibleChanged;
        u.onAllRemoved;
        var p = Ft(u, Wd), m = l || h.Fragment, g = {};
        return Ud.forEach(function(d) {
          g[d] = p[d], delete p[d];
        }), delete p.keys, /* @__PURE__ */ h.createElement(m, p, c.map(function(d, b) {
          var y = d.status, w = Ft(d, qd), E = y === _i || y === Ai;
          return /* @__PURE__ */ h.createElement(r, dt({}, g, {
            key: w.key,
            visible: E,
            eventProps: w,
            onVisibleChanged: function(S) {
              v == null || v(S, {
                key: w.key
              }), S || s.removeKey(w.key);
            }
          }), function(C, S) {
            return f(F(F({}, C), {}, {
              index: b
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var u = s.keys, l = c.keyEntities, f = $i(u), v = Bd(l, f);
        return {
          keyEntities: v.filter(function(p) {
            var m = l.find(function(g) {
              var d = g.key;
              return p.key === d;
            });
            return !(m && m.status === Xa && p.status === Ni);
          })
        };
      }
    }]), i;
  }(h.Component);
  return P(e, "defaultProps", {
    component: "div"
  }), e;
}
Gd(Hc);
function Kd(t) {
  const {
    children: r
  } = t, [, e] = hn(), {
    motion: n
  } = e, a = h.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ h.createElement(Td, {
    motion: n
  }, r) : r;
}
const Uc = /* @__PURE__ */ h.memo((t) => {
  let {
    dropdownMatchSelectWidth: r
  } = t;
  return Vr("ConfigProvider").deprecated(r === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
z.env.NODE_ENV !== "production" && (Uc.displayName = "PropWarning");
const Xd = z.env.NODE_ENV !== "production" ? Uc : () => null;
var Yd = function(t, r) {
  var e = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
let Ii = !1;
z.env.NODE_ENV;
const Zd = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Gc;
function Qd() {
  return Gc || Fi;
}
function Jd(t) {
  return Object.keys(t).some((r) => r.endsWith("Color"));
}
const ev = (t) => {
  const {
    prefixCls: r,
    iconPrefixCls: e,
    theme: n,
    holderRender: a
  } = t;
  r !== void 0 && (Gc = r), n && Jd(n) && (z.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Xf(Qd(), n));
}, tv = (t) => {
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
    splitter: f,
    virtual: v,
    dropdownMatchSelectWidth: p,
    popupMatchSelectWidth: m,
    popupOverflow: g,
    legacyLocale: d,
    parentContext: b,
    iconPrefixCls: y,
    theme: w,
    componentDisabled: E,
    segmented: C,
    statistic: S,
    spin: x,
    calendar: R,
    carousel: M,
    cascader: _,
    collapse: I,
    typography: j,
    checkbox: V,
    descriptions: $,
    divider: U,
    drawer: O,
    skeleton: k,
    steps: T,
    image: N,
    layout: A,
    list: L,
    mentions: G,
    modal: W,
    progress: D,
    result: Z,
    slider: ne,
    breadcrumb: ae,
    menu: Pe,
    pagination: le,
    input: Ce,
    textArea: Se,
    empty: fe,
    badge: Ee,
    radio: B,
    rate: he,
    switch: ge,
    transfer: Ie,
    avatar: ke,
    message: Me,
    tag: de,
    table: te,
    card: _e,
    tabs: X,
    timeline: ye,
    timePicker: Ae,
    upload: Ve,
    notification: St,
    tree: ht,
    colorPicker: zr,
    datePicker: Hr,
    rangePicker: ur,
    flex: Je,
    wave: et,
    dropdown: Ke,
    warning: Br,
    tour: Rt,
    floatButtonGroup: Xe,
    variant: Et,
    inputNumber: Wr,
    treeSelect: lr
  } = t, fr = h.useCallback((ve, ie) => {
    const {
      prefixCls: qe
    } = t;
    if (ie)
      return ie;
    const ze = qe || b.getPrefixCls("");
    return ve ? `${ze}-${ve}` : ze;
  }, [b.getPrefixCls, t.prefixCls]), Mt = y || b.iconPrefixCls || Tc, De = e || b.csp;
  $c(Mt, De);
  const Ne = kd(w, b.theme, {
    prefixCls: fr("")
  });
  z.env.NODE_ENV !== "production" && (Ii = Ii || !!Ne);
  const _t = {
    csp: De,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: i,
    locale: s || d,
    direction: u,
    space: l,
    splitter: f,
    virtual: v,
    popupMatchSelectWidth: m ?? p,
    popupOverflow: g,
    getPrefixCls: fr,
    iconPrefixCls: Mt,
    theme: Ne,
    segmented: C,
    statistic: S,
    spin: x,
    calendar: R,
    carousel: M,
    cascader: _,
    collapse: I,
    typography: j,
    checkbox: V,
    descriptions: $,
    divider: U,
    drawer: O,
    skeleton: k,
    steps: T,
    image: N,
    input: Ce,
    textArea: Se,
    layout: A,
    list: L,
    mentions: G,
    modal: W,
    progress: D,
    result: Z,
    slider: ne,
    breadcrumb: ae,
    menu: Pe,
    pagination: le,
    empty: fe,
    badge: Ee,
    radio: B,
    rate: he,
    switch: ge,
    transfer: Ie,
    avatar: ke,
    message: Me,
    tag: de,
    table: te,
    card: _e,
    tabs: X,
    timeline: ye,
    timePicker: Ae,
    upload: Ve,
    notification: St,
    tree: ht,
    colorPicker: zr,
    datePicker: Hr,
    rangePicker: ur,
    flex: Je,
    wave: et,
    dropdown: Ke,
    warning: Br,
    tour: Rt,
    floatButtonGroup: Xe,
    variant: Et,
    inputNumber: Wr,
    treeSelect: lr
  };
  z.env.NODE_ENV !== "production" && Vr("ConfigProvider")(!("autoInsertSpaceInButton" in t), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const be = Object.assign({}, b);
  Object.keys(_t).forEach((ve) => {
    _t[ve] !== void 0 && (be[ve] = _t[ve]);
  }), Zd.forEach((ve) => {
    const ie = t[ve];
    ie && (be[ve] = ie);
  }), typeof n < "u" && (be.button = Object.assign({
    autoInsertSpace: n
  }, be.button));
  const We = Zi(() => be, be, (ve, ie) => {
    const qe = Object.keys(ve), ze = Object.keys(ie);
    return qe.length !== ze.length || qe.some((tt) => ve[tt] !== ie[tt]);
  }), ce = h.useMemo(() => ({
    prefixCls: Mt,
    csp: De
  }), [Mt, De]);
  let Q = /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Xd, {
    dropdownMatchSelectWidth: p
  }), r);
  const Ye = h.useMemo(() => {
    var ve, ie, qe, ze;
    return kr(((ve = ya.Form) === null || ve === void 0 ? void 0 : ve.defaultValidateMessages) || {}, ((qe = (ie = We.locale) === null || ie === void 0 ? void 0 : ie.Form) === null || qe === void 0 ? void 0 : qe.defaultValidateMessages) || {}, ((ze = We.form) === null || ze === void 0 ? void 0 : ze.validateMessages) || {}, (o == null ? void 0 : o.validateMessages) || {});
  }, [We, o == null ? void 0 : o.validateMessages]);
  Object.keys(Ye).length > 0 && (Q = /* @__PURE__ */ h.createElement(hf.Provider, {
    value: Ye
  }, Q)), s && (Q = /* @__PURE__ */ h.createElement(Cc, {
    locale: s,
    _ANT_MARK__: wc
  }, Q)), (Mt || De) && (Q = /* @__PURE__ */ h.createElement(so.Provider, {
    value: ce
  }, Q)), c && (Q = /* @__PURE__ */ h.createElement(Zf, {
    size: c
  }, Q)), Q = /* @__PURE__ */ h.createElement(Kd, null, Q);
  const At = h.useMemo(() => {
    const ve = Ne || {}, {
      algorithm: ie,
      token: qe,
      components: ze,
      cssVar: tt
    } = ve, dr = Yd(ve, ["algorithm", "token", "components", "cssVar"]), vr = ie && (!Array.isArray(ie) || ie.length > 0) ? si(ie) : kc, Nt = {};
    Object.entries(ze || {}).forEach((Qt) => {
      let [It, Vt] = Qt;
      const Te = Object.assign({}, Vt);
      "algorithm" in Te && (Te.algorithm === !0 ? Te.theme = vr : (Array.isArray(Te.algorithm) || typeof Te.algorithm == "function") && (Te.theme = si(Te.algorithm)), delete Te.algorithm), Nt[It] = Te;
    });
    const $t = Object.assign(Object.assign({}, ln), qe);
    return Object.assign(Object.assign({}, dr), {
      theme: vr,
      token: $t,
      components: Nt,
      override: Object.assign({
        override: $t
      }, Nt),
      cssVar: tt
    });
  }, [Ne]);
  return w && (Q = /* @__PURE__ */ h.createElement(Oc.Provider, {
    value: At
  }, Q)), We.warning && (Q = /* @__PURE__ */ h.createElement(pc.Provider, {
    value: We.warning
  }, Q)), E !== void 0 && (Q = /* @__PURE__ */ h.createElement(Yf, {
    disabled: E
  }, Q)), /* @__PURE__ */ h.createElement(or.Provider, {
    value: We
  }, Q);
}, Lr = (t) => {
  const r = h.useContext(or), e = h.useContext(bc);
  return /* @__PURE__ */ h.createElement(tv, Object.assign({
    parentContext: r,
    legacyLocale: e
  }, t));
};
Lr.ConfigContext = or;
Lr.SizeContext = fn;
Lr.config = ev;
Lr.useConfig = Qf;
Object.defineProperty(Lr, "SizeContext", {
  get: () => (z.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), fn)
});
z.env.NODE_ENV !== "production" && (Lr.displayName = "ConfigProvider");
function Kc(t) {
  var r;
  return t == null || (r = t.getRootNode) === null || r === void 0 ? void 0 : r.call(t);
}
function rv(t) {
  return Kc(t) instanceof ShadowRoot;
}
function oa(t) {
  return rv(t) ? Kc(t) : null;
}
function nv(t) {
  return t.replace(/-(.)/g, function(r, e) {
    return e.toUpperCase();
  });
}
function av(t, r) {
  pe(t, "[@ant-design/icons] ".concat(r));
}
function ns(t) {
  return ee(t) === "object" && typeof t.name == "string" && typeof t.theme == "string" && (ee(t.icon) === "object" || typeof t.icon == "function");
}
function as() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(t).reduce(function(r, e) {
    var n = t[e];
    switch (e) {
      case "class":
        r.className = n, delete r.class;
        break;
      default:
        delete r[e], r[nv(e)] = n;
    }
    return r;
  }, {});
}
function Vi(t, r, e) {
  return e ? /* @__PURE__ */ $e.createElement(t.tag, F(F({
    key: r
  }, as(t.attrs)), e), (t.children || []).map(function(n, a) {
    return Vi(n, "".concat(r, "-").concat(t.tag, "-").concat(a));
  })) : /* @__PURE__ */ $e.createElement(t.tag, F({
    key: r
  }, as(t.attrs)), (t.children || []).map(function(n, a) {
    return Vi(n, "".concat(r, "-").concat(t.tag, "-").concat(a));
  }));
}
function Xc(t) {
  return un(t)[0];
}
function Yc(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
var iv = `
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
`, ov = function(r) {
  var e = h.useContext(so), n = e.csp, a = e.prefixCls, i = iv;
  a && (i = i.replace(/anticon/g, a)), h.useEffect(function() {
    var o = r.current, s = oa(o);
    Bt(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: s
    });
  }, []);
}, sv = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Jr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function cv(t) {
  var r = t.primaryColor, e = t.secondaryColor;
  Jr.primaryColor = r, Jr.secondaryColor = e || Xc(r), Jr.calculated = !!e;
}
function uv() {
  return F({}, Jr);
}
var jr = function(r) {
  var e = r.icon, n = r.className, a = r.onClick, i = r.style, o = r.primaryColor, s = r.secondaryColor, c = Ft(r, sv), u = h.useRef(), l = Jr;
  if (o && (l = {
    primaryColor: o,
    secondaryColor: s || Xc(o)
  }), ov(u), av(ns(e), "icon should be icon definiton, but got ".concat(e)), !ns(e))
    return null;
  var f = e;
  return f && typeof f.icon == "function" && (f = F(F({}, f), {}, {
    icon: f.icon(l.primaryColor, l.secondaryColor)
  })), Vi(f.icon, "svg-".concat(f.name), F(F({
    className: n,
    onClick: a,
    style: i,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: u
  }));
};
jr.displayName = "IconReact";
jr.getTwoToneColors = uv;
jr.setTwoToneColors = cv;
function Zc(t) {
  var r = Yc(t), e = H(r, 2), n = e[0], a = e[1];
  return jr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function lv() {
  var t = jr.getTwoToneColors();
  return t.calculated ? [t.primaryColor, t.secondaryColor] : t.primaryColor;
}
var fv = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Zc(aa.primary);
var Dr = /* @__PURE__ */ h.forwardRef(function(t, r) {
  var e = t.className, n = t.icon, a = t.spin, i = t.rotate, o = t.tabIndex, s = t.onClick, c = t.twoToneColor, u = Ft(t, fv), l = h.useContext(so), f = l.prefixCls, v = f === void 0 ? "anticon" : f, p = l.rootClassName, m = Ze(p, v, P(P({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), e), g = o;
  g === void 0 && s && (g = -1);
  var d = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, b = Yc(c), y = H(b, 2), w = y[0], E = y[1];
  return /* @__PURE__ */ h.createElement("span", dt({
    role: "img",
    "aria-label": n.name
  }, u, {
    ref: r,
    tabIndex: g,
    onClick: s,
    className: m
  }), /* @__PURE__ */ h.createElement(jr, {
    icon: n,
    primaryColor: w,
    secondaryColor: E,
    style: d
  }));
});
Dr.displayName = "AntdIcon";
Dr.getTwoToneColor = lv;
Dr.setTwoToneColor = Zc;
var dv = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, vv = function(r, e) {
  return /* @__PURE__ */ h.createElement(Dr, dt({}, r, {
    ref: e,
    icon: dv
  }));
}, hv = /* @__PURE__ */ h.forwardRef(vv);
z.env.NODE_ENV !== "production" && (hv.displayName = "CloseCircleFilled");
var gv = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, mv = function(r, e) {
  return /* @__PURE__ */ h.createElement(Dr, dt({}, r, {
    ref: e,
    icon: gv
  }));
}, pv = /* @__PURE__ */ h.forwardRef(mv);
z.env.NODE_ENV !== "production" && (pv.displayName = "CloseOutlined");
function yv(t) {
  return t && /* @__PURE__ */ $e.isValidElement(t) && t.type === $e.Fragment;
}
const bv = (t, r, e) => /* @__PURE__ */ $e.isValidElement(t) ? /* @__PURE__ */ $e.cloneElement(t, typeof e == "function" ? e(t.props || {}) : e) : r;
function wv(t, r) {
  return bv(t, t, r);
}
const fo = /* @__PURE__ */ $e.createContext(void 0);
z.env.NODE_ENV !== "production" && (fo.displayName = "zIndexContext");
const zt = 100, Cv = 10, Sv = zt * Cv, Ev = Sv + zt, Qc = {
  Modal: zt,
  Drawer: zt,
  Popover: zt,
  Popconfirm: zt,
  Tooltip: zt,
  Tour: zt,
  FloatButton: zt
}, xv = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function Pv(t) {
  return t in Qc;
}
const kv = (t, r) => {
  const [, e] = hn(), n = $e.useContext(fo), a = Pv(t);
  let i;
  if (r !== void 0)
    i = [r, r];
  else {
    let o = n ?? 0;
    a ? o += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : e.zIndexPopupBase) + // Container offset
    Qc[t] : o += xv[t], i = [n === void 0 ? r : o, o];
  }
  if (z.env.NODE_ENV !== "production") {
    const o = Vr(t), s = e.zIndexPopupBase + Ev, c = i[0] || 0;
    z.env.NODE_ENV !== "production" && o(r !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return i;
};
function Ct() {
  Ct = function() {
    return r;
  };
  var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, a = Object.defineProperty || function(O, k, T) {
    O[k] = T.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function u(O, k, T) {
    return Object.defineProperty(O, k, {
      value: T,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), O[k];
  }
  try {
    u({}, "");
  } catch {
    u = function(T, N, A) {
      return T[N] = A;
    };
  }
  function l(O, k, T, N) {
    var A = k && k.prototype instanceof b ? k : b, L = Object.create(A.prototype), G = new $(N || []);
    return a(L, "_invoke", {
      value: _(O, T, G)
    }), L;
  }
  function f(O, k, T) {
    try {
      return {
        type: "normal",
        arg: O.call(k, T)
      };
    } catch (N) {
      return {
        type: "throw",
        arg: N
      };
    }
  }
  r.wrap = l;
  var v = "suspendedStart", p = "suspendedYield", m = "executing", g = "completed", d = {};
  function b() {
  }
  function y() {
  }
  function w() {
  }
  var E = {};
  u(E, o, function() {
    return this;
  });
  var C = Object.getPrototypeOf, S = C && C(C(U([])));
  S && S !== e && n.call(S, o) && (E = S);
  var x = w.prototype = b.prototype = Object.create(E);
  function R(O) {
    ["next", "throw", "return"].forEach(function(k) {
      u(O, k, function(T) {
        return this._invoke(k, T);
      });
    });
  }
  function M(O, k) {
    function T(A, L, G, W) {
      var D = f(O[A], O, L);
      if (D.type !== "throw") {
        var Z = D.arg, ne = Z.value;
        return ne && ee(ne) == "object" && n.call(ne, "__await") ? k.resolve(ne.__await).then(function(ae) {
          T("next", ae, G, W);
        }, function(ae) {
          T("throw", ae, G, W);
        }) : k.resolve(ne).then(function(ae) {
          Z.value = ae, G(Z);
        }, function(ae) {
          return T("throw", ae, G, W);
        });
      }
      W(D.arg);
    }
    var N;
    a(this, "_invoke", {
      value: function(L, G) {
        function W() {
          return new k(function(D, Z) {
            T(L, G, D, Z);
          });
        }
        return N = N ? N.then(W, W) : W();
      }
    });
  }
  function _(O, k, T) {
    var N = v;
    return function(A, L) {
      if (N === m) throw Error("Generator is already running");
      if (N === g) {
        if (A === "throw") throw L;
        return {
          value: t,
          done: !0
        };
      }
      for (T.method = A, T.arg = L; ; ) {
        var G = T.delegate;
        if (G) {
          var W = I(G, T);
          if (W) {
            if (W === d) continue;
            return W;
          }
        }
        if (T.method === "next") T.sent = T._sent = T.arg;
        else if (T.method === "throw") {
          if (N === v) throw N = g, T.arg;
          T.dispatchException(T.arg);
        } else T.method === "return" && T.abrupt("return", T.arg);
        N = m;
        var D = f(O, k, T);
        if (D.type === "normal") {
          if (N = T.done ? g : p, D.arg === d) continue;
          return {
            value: D.arg,
            done: T.done
          };
        }
        D.type === "throw" && (N = g, T.method = "throw", T.arg = D.arg);
      }
    };
  }
  function I(O, k) {
    var T = k.method, N = O.iterator[T];
    if (N === t) return k.delegate = null, T === "throw" && O.iterator.return && (k.method = "return", k.arg = t, I(O, k), k.method === "throw") || T !== "return" && (k.method = "throw", k.arg = new TypeError("The iterator does not provide a '" + T + "' method")), d;
    var A = f(N, O.iterator, k.arg);
    if (A.type === "throw") return k.method = "throw", k.arg = A.arg, k.delegate = null, d;
    var L = A.arg;
    return L ? L.done ? (k[O.resultName] = L.value, k.next = O.nextLoc, k.method !== "return" && (k.method = "next", k.arg = t), k.delegate = null, d) : L : (k.method = "throw", k.arg = new TypeError("iterator result is not an object"), k.delegate = null, d);
  }
  function j(O) {
    var k = {
      tryLoc: O[0]
    };
    1 in O && (k.catchLoc = O[1]), 2 in O && (k.finallyLoc = O[2], k.afterLoc = O[3]), this.tryEntries.push(k);
  }
  function V(O) {
    var k = O.completion || {};
    k.type = "normal", delete k.arg, O.completion = k;
  }
  function $(O) {
    this.tryEntries = [{
      tryLoc: "root"
    }], O.forEach(j, this), this.reset(!0);
  }
  function U(O) {
    if (O || O === "") {
      var k = O[o];
      if (k) return k.call(O);
      if (typeof O.next == "function") return O;
      if (!isNaN(O.length)) {
        var T = -1, N = function A() {
          for (; ++T < O.length; ) if (n.call(O, T)) return A.value = O[T], A.done = !1, A;
          return A.value = t, A.done = !0, A;
        };
        return N.next = N;
      }
    }
    throw new TypeError(ee(O) + " is not iterable");
  }
  return y.prototype = w, a(x, "constructor", {
    value: w,
    configurable: !0
  }), a(w, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = u(w, c, "GeneratorFunction"), r.isGeneratorFunction = function(O) {
    var k = typeof O == "function" && O.constructor;
    return !!k && (k === y || (k.displayName || k.name) === "GeneratorFunction");
  }, r.mark = function(O) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(O, w) : (O.__proto__ = w, u(O, c, "GeneratorFunction")), O.prototype = Object.create(x), O;
  }, r.awrap = function(O) {
    return {
      __await: O
    };
  }, R(M.prototype), u(M.prototype, s, function() {
    return this;
  }), r.AsyncIterator = M, r.async = function(O, k, T, N, A) {
    A === void 0 && (A = Promise);
    var L = new M(l(O, k, T, N), A);
    return r.isGeneratorFunction(k) ? L : L.next().then(function(G) {
      return G.done ? G.value : L.next();
    });
  }, R(x), u(x, c, "Generator"), u(x, o, function() {
    return this;
  }), u(x, "toString", function() {
    return "[object Generator]";
  }), r.keys = function(O) {
    var k = Object(O), T = [];
    for (var N in k) T.push(N);
    return T.reverse(), function A() {
      for (; T.length; ) {
        var L = T.pop();
        if (L in k) return A.value = L, A.done = !1, A;
      }
      return A.done = !0, A;
    };
  }, r.values = U, $.prototype = {
    constructor: $,
    reset: function(k) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(V), !k) for (var T in this) T.charAt(0) === "t" && n.call(this, T) && !isNaN(+T.slice(1)) && (this[T] = t);
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
      function N(Z, ne) {
        return G.type = "throw", G.arg = k, T.next = Z, ne && (T.method = "next", T.arg = t), !!ne;
      }
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var L = this.tryEntries[A], G = L.completion;
        if (L.tryLoc === "root") return N("end");
        if (L.tryLoc <= this.prev) {
          var W = n.call(L, "catchLoc"), D = n.call(L, "finallyLoc");
          if (W && D) {
            if (this.prev < L.catchLoc) return N(L.catchLoc, !0);
            if (this.prev < L.finallyLoc) return N(L.finallyLoc);
          } else if (W) {
            if (this.prev < L.catchLoc) return N(L.catchLoc, !0);
          } else {
            if (!D) throw Error("try statement without catch or finally");
            if (this.prev < L.finallyLoc) return N(L.finallyLoc);
          }
        }
      }
    },
    abrupt: function(k, T) {
      for (var N = this.tryEntries.length - 1; N >= 0; --N) {
        var A = this.tryEntries[N];
        if (A.tryLoc <= this.prev && n.call(A, "finallyLoc") && this.prev < A.finallyLoc) {
          var L = A;
          break;
        }
      }
      L && (k === "break" || k === "continue") && L.tryLoc <= T && T <= L.finallyLoc && (L = null);
      var G = L ? L.completion : {};
      return G.type = k, G.arg = T, L ? (this.method = "next", this.next = L.finallyLoc, d) : this.complete(G);
    },
    complete: function(k, T) {
      if (k.type === "throw") throw k.arg;
      return k.type === "break" || k.type === "continue" ? this.next = k.arg : k.type === "return" ? (this.rval = this.arg = k.arg, this.method = "return", this.next = "end") : k.type === "normal" && T && (this.next = T), d;
    },
    finish: function(k) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var N = this.tryEntries[T];
        if (N.finallyLoc === k) return this.complete(N.completion, N.afterLoc), V(N), d;
      }
    },
    catch: function(k) {
      for (var T = this.tryEntries.length - 1; T >= 0; --T) {
        var N = this.tryEntries[T];
        if (N.tryLoc === k) {
          var A = N.completion;
          if (A.type === "throw") {
            var L = A.arg;
            V(N);
          }
          return L;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(k, T, N) {
      return this.delegate = {
        iterator: U(k),
        resultName: T,
        nextLoc: N
      }, this.method === "next" && (this.arg = t), d;
    }
  }, r;
}
function is(t, r, e, n, a, i, o) {
  try {
    var s = t[i](o), c = s.value;
  } catch (u) {
    return void e(u);
  }
  s.done ? r(c) : Promise.resolve(c).then(n, a);
}
function gn(t) {
  return function() {
    var r = this, e = arguments;
    return new Promise(function(n, a) {
      var i = t.apply(r, e);
      function o(c) {
        is(i, n, a, o, s, "next", c);
      }
      function s(c) {
        is(i, n, a, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
const Ov = (t, r, e) => e !== void 0 ? e : `${t}-${r}`, Tv = function(t) {
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
}, Jc = /* @__PURE__ */ h.createContext(null), zg = (t, r) => {
  const e = h.useContext(Jc), n = h.useMemo(() => {
    if (!e)
      return "";
    const {
      compactDirection: a,
      isFirstItem: i,
      isLastItem: o
    } = e, s = a === "vertical" ? "-vertical-" : "-";
    return Ze(`${t}-compact${s}item`, {
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
}, Fv = (t) => {
  let {
    children: r
  } = t;
  return /* @__PURE__ */ h.createElement(Jc.Provider, {
    value: null
  }, r);
}, Rv = (t) => ({
  animationDuration: t,
  animationFillMode: "both"
}), Mv = (t) => ({
  animationDuration: t,
  animationFillMode: "both"
}), _v = function(t, r, e, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${t}-enter,
      ${i}${t}-appear
    `]: Object.assign(Object.assign({}, Rv(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${t}-leave`]: Object.assign(Object.assign({}, Mv(n)), {
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
}, Av = new vt("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Nv = new vt("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), os = new vt("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), ss = new vt("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), $v = new vt("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Iv = new vt("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Vv = new vt("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Lv = new vt("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), jv = new vt("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Dv = new vt("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), zv = new vt("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Hv = new vt("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Bv = {
  zoom: {
    inKeyframes: Av,
    outKeyframes: Nv
  },
  "zoom-big": {
    inKeyframes: os,
    outKeyframes: ss
  },
  "zoom-big-fast": {
    inKeyframes: os,
    outKeyframes: ss
  },
  "zoom-left": {
    inKeyframes: Vv,
    outKeyframes: Lv
  },
  "zoom-right": {
    inKeyframes: jv,
    outKeyframes: Dv
  },
  "zoom-up": {
    inKeyframes: $v,
    outKeyframes: Iv
  },
  "zoom-down": {
    inKeyframes: zv,
    outKeyframes: Hv
  }
}, Wv = (t, r) => {
  const {
    antCls: e
  } = t, n = `${e}-${r}`, {
    inKeyframes: a,
    outKeyframes: i
  } = Bv[r];
  return [_v(n, a, i, t.motionDurationFast), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: t.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: t.motionEaseInOutCirc
    }
  }];
};
var eu = /* @__PURE__ */ h.createContext(null), cs = [];
function qv(t, r) {
  var e = h.useState(function() {
    if (!Qe())
      return null;
    var m = document.createElement("div");
    return z.env.NODE_ENV !== "production" && r && m.setAttribute("data-debug", r), m;
  }), n = H(e, 1), a = n[0], i = h.useRef(!1), o = h.useContext(eu), s = h.useState(cs), c = H(s, 2), u = c[0], l = c[1], f = o || (i.current ? void 0 : function(m) {
    l(function(g) {
      var d = [m].concat(K(g));
      return d;
    });
  });
  function v() {
    a.parentElement || document.body.appendChild(a), i.current = !0;
  }
  function p() {
    var m;
    (m = a.parentElement) === null || m === void 0 || m.removeChild(a), i.current = !1;
  }
  return Ue(function() {
    return t ? o ? o(v) : v() : p(), p;
  }, [t]), Ue(function() {
    u.length && (u.forEach(function(m) {
      return m();
    }), l(cs));
  }, [u]), [a, f];
}
function Uv(t) {
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
      var l = c ? "width: ".concat(s.width, ";") : "", f = u ? "height: ".concat(s.height, ";") : "";
      Bt(`
#`.concat(r, `::-webkit-scrollbar {
`).concat(l, `
`).concat(f, `
}`), r);
    } catch (m) {
      console.error(m), a = c, i = u;
    }
  }
  document.body.appendChild(e);
  var v = t && a && !isNaN(a) ? a : e.offsetWidth - e.clientWidth, p = t && i && !isNaN(i) ? i : e.offsetHeight - e.clientHeight;
  return document.body.removeChild(e), on(r), {
    width: v,
    height: p
  };
}
function Gv(t) {
  return typeof document > "u" || !t || !(t instanceof Element) ? {
    width: 0,
    height: 0
  } : Uv(t);
}
function Kv() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Xv = "rc-util-locker-".concat(Date.now()), us = 0;
function Yv(t) {
  var r = !!t, e = h.useState(function() {
    return us += 1, "".concat(Xv, "_").concat(us);
  }), n = H(e, 1), a = n[0];
  Ue(function() {
    if (r) {
      var i = Gv(document.body).width, o = Kv();
      Bt(`
html body {
  overflow-y: hidden;
  `.concat(o ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), a);
    } else
      on(a);
    return function() {
      on(a);
    };
  }, [r, a]);
}
var Zv = !1;
function Qv(t) {
  return Zv;
}
var ls = function(r) {
  return r === !1 ? !1 : !Qe() || !r ? null : typeof r == "string" ? document.querySelector(r) : typeof r == "function" ? r() : r;
}, vo = /* @__PURE__ */ h.forwardRef(function(t, r) {
  var e = t.open, n = t.autoLock, a = t.getContainer, i = t.debug, o = t.autoDestroy, s = o === void 0 ? !0 : o, c = t.children, u = h.useState(e), l = H(u, 2), f = l[0], v = l[1], p = f || e;
  z.env.NODE_ENV !== "production" && pe(Qe() || !e, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), h.useEffect(function() {
    (s || e) && v(e);
  }, [e, s]);
  var m = h.useState(function() {
    return ls(a);
  }), g = H(m, 2), d = g[0], b = g[1];
  h.useEffect(function() {
    var j = ls(a);
    b(j ?? null);
  });
  var y = qv(p && !d, i), w = H(y, 2), E = w[0], C = w[1], S = d ?? E;
  Yv(n && e && Qe() && (S === E || S === document.body));
  var x = null;
  if (c && ua(c) && r) {
    var R = c;
    x = R.ref;
  }
  var M = Ji(x, r);
  if (!p || !Qe() || d === void 0)
    return null;
  var _ = S === !1 || Qv(), I = c;
  return r && (I = /* @__PURE__ */ h.cloneElement(c, {
    ref: M
  })), /* @__PURE__ */ h.createElement(eu.Provider, {
    value: C
  }, _ ? I : /* @__PURE__ */ yu.createPortal(I, S));
});
z.env.NODE_ENV !== "production" && (vo.displayName = "Portal");
function Jv() {
  var t = F({}, ca);
  return t.useId;
}
var fs = 0, ds = Jv();
const eh = ds ? (
  // Use React `useId`
  function(r) {
    var e = ds();
    return r || (z.env.NODE_ENV === "test" ? "test-id" : e);
  }
) : (
  // Use compatible of `useId`
  function(r) {
    var e = h.useState("ssr-id"), n = H(e, 2), a = n[0], i = n[1];
    return h.useEffect(function() {
      var o = fs;
      fs += 1, i("rc_unique_".concat(o));
    }, []), r || (z.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var ar = "RC_FORM_INTERNAL_HOOKS", ue = function() {
  pe(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, $r = /* @__PURE__ */ h.createContext({
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
}), sa = /* @__PURE__ */ h.createContext(null);
function Li(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function th(t) {
  return t && !!t._init;
}
function ji() {
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
var Di = ji();
function rh(t) {
  try {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  } catch {
    return typeof t == "function";
  }
}
function nh(t, r, e) {
  if (eo()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var a = new (t.bind.apply(t, n))();
  return e && tn(a, e.prototype), a;
}
function zi(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return zi = function(n) {
    if (n === null || !rh(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, a);
    }
    function a() {
      return nh(n, arguments, nn(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), tn(a, n);
  }, zi(t);
}
var ah = /%[sdj%]/g, tu = function() {
};
typeof z < "u" && z.env && z.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (tu = function(r, e) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && e.every(function(n) {
    return typeof n == "string";
  }) && console.warn(r, e);
});
function Hi(t) {
  if (!t || !t.length) return null;
  var r = {};
  return t.forEach(function(e) {
    var n = e.field;
    r[n] = r[n] || [], r[n].push(e);
  }), r;
}
function it(t) {
  for (var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    e[n - 1] = arguments[n];
  var a = 0, i = e.length;
  if (typeof t == "function")
    return t.apply(null, e);
  if (typeof t == "string") {
    var o = t.replace(ah, function(s) {
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
function ih(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function Re(t, r) {
  return !!(t == null || r === "array" && Array.isArray(t) && !t.length || ih(r) && typeof t == "string" && !t);
}
function oh(t, r, e) {
  var n = [], a = 0, i = t.length;
  function o(s) {
    n.push.apply(n, K(s || [])), a++, a === i && e(n);
  }
  t.forEach(function(s) {
    r(s, o);
  });
}
function vs(t, r, e) {
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
function sh(t) {
  var r = [];
  return Object.keys(t).forEach(function(e) {
    r.push.apply(r, K(t[e] || []));
  }), r;
}
var hs = /* @__PURE__ */ function(t) {
  sr(e, t);
  var r = cr(e);
  function e(n, a) {
    var i;
    return He(this, e), i = r.call(this, "Async Validation Error"), P(J(i), "errors", void 0), P(J(i), "fields", void 0), i.errors = n, i.fields = a, i;
  }
  return Be(e);
}(/* @__PURE__ */ zi(Error));
function ch(t, r, e, n, a) {
  if (r.first) {
    var i = new Promise(function(v, p) {
      var m = function(b) {
        return n(b), b.length ? p(new hs(b, Hi(b))) : v(a);
      }, g = sh(t);
      vs(g, e, m);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var o = r.firstFields === !0 ? Object.keys(t) : r.firstFields || [], s = Object.keys(t), c = s.length, u = 0, l = [], f = new Promise(function(v, p) {
    var m = function(d) {
      if (l.push.apply(l, d), u++, u === c)
        return n(l), l.length ? p(new hs(l, Hi(l))) : v(a);
    };
    s.length || (n(l), v(a)), s.forEach(function(g) {
      var d = t[g];
      o.indexOf(g) !== -1 ? vs(d, e, m) : oh(d, e, m);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function uh(t) {
  return !!(t && t.message !== void 0);
}
function lh(t, r) {
  for (var e = t, n = 0; n < r.length; n++) {
    if (e == null)
      return e;
    e = e[r[n]];
  }
  return e;
}
function gs(t, r) {
  return function(e) {
    var n;
    return t.fullFields ? n = lh(r, t.fullFields) : n = r[e.field || t.fullField], uh(e) ? (e.field = e.field || t.fullField, e.fieldValue = n, e) : {
      message: typeof e == "function" ? e() : e,
      fieldValue: n,
      field: e.field || t.fullField
    };
  };
}
function ms(t, r) {
  if (r) {
    for (var e in r)
      if (r.hasOwnProperty(e)) {
        var n = r[e];
        ee(n) === "object" && ee(t[e]) === "object" ? t[e] = F(F({}, t[e]), n) : t[e] = n;
      }
  }
  return t;
}
var wr = "enum", fh = function(r, e, n, a, i) {
  r[wr] = Array.isArray(r[wr]) ? r[wr] : [], r[wr].indexOf(e) === -1 && a.push(it(i.messages[wr], r.fullField, r[wr].join(", ")));
}, dh = function(r, e, n, a, i) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(e) || a.push(it(i.messages.pattern.mismatch, r.fullField, e, r.pattern));
    else if (typeof r.pattern == "string") {
      var o = new RegExp(r.pattern);
      o.test(e) || a.push(it(i.messages.pattern.mismatch, r.fullField, e, r.pattern));
    }
  }
}, vh = function(r, e, n, a, i) {
  var o = typeof r.len == "number", s = typeof r.min == "number", c = typeof r.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = e, f = null, v = typeof e == "number", p = typeof e == "string", m = Array.isArray(e);
  if (v ? f = "number" : p ? f = "string" : m && (f = "array"), !f)
    return !1;
  m && (l = e.length), p && (l = e.replace(u, "_").length), o ? l !== r.len && a.push(it(i.messages[f].len, r.fullField, r.len)) : s && !c && l < r.min ? a.push(it(i.messages[f].min, r.fullField, r.min)) : c && !s && l > r.max ? a.push(it(i.messages[f].max, r.fullField, r.max)) : s && c && (l < r.min || l > r.max) && a.push(it(i.messages[f].range, r.fullField, r.min, r.max));
}, ru = function(r, e, n, a, i, o) {
  r.required && (!n.hasOwnProperty(r.field) || Re(e, o || r.type)) && a.push(it(i.messages.required, r.fullField));
}, Wn;
const hh = function() {
  if (Wn)
    return Wn;
  var t = "[a-fA-F\\d:]", r = function(S) {
    return S && S.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(t, ")|(?<=").concat(t, ")(?=\\s|$))") : "";
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
  ], i = "(?:%[0-9a-zA-Z]{1,})?", o = "(?:".concat(a.join("|"), ")").concat(i), s = new RegExp("(?:^".concat(e, "$)|(?:^").concat(o, "$)")), c = new RegExp("^".concat(e, "$")), u = new RegExp("^".concat(o, "$")), l = function(S) {
    return S && S.exact ? s : new RegExp("(?:".concat(r(S)).concat(e).concat(r(S), ")|(?:").concat(r(S)).concat(o).concat(r(S), ")"), "g");
  };
  l.v4 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(r(C)).concat(e).concat(r(C)), "g");
  }, l.v6 = function(C) {
    return C && C.exact ? u : new RegExp("".concat(r(C)).concat(o).concat(r(C)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", p = l.v4().source, m = l.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", d = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", w = '(?:[/?#][^\\s"]*)?', E = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(p, "|").concat(m, "|").concat(g).concat(d).concat(b, ")").concat(y).concat(w);
  return Wn = new RegExp("(?:^".concat(E, "$)"), "i"), Wn;
};
var ps = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Yr = {
  integer: function(r) {
    return Yr.number(r) && parseInt(r, 10) === r;
  },
  float: function(r) {
    return Yr.number(r) && !Yr.integer(r);
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
    return ee(r) === "object" && !Yr.array(r);
  },
  method: function(r) {
    return typeof r == "function";
  },
  email: function(r) {
    return typeof r == "string" && r.length <= 320 && !!r.match(ps.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(hh());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(ps.hex);
  }
}, gh = function(r, e, n, a, i) {
  if (r.required && e === void 0) {
    ru(r, e, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = r.type;
  o.indexOf(s) > -1 ? Yr[s](e) || a.push(it(i.messages.types[s], r.fullField, r.type)) : s && ee(e) !== r.type && a.push(it(i.messages.types[s], r.fullField, r.type));
}, mh = function(r, e, n, a, i) {
  (/^\s+$/.test(e) || e === "") && a.push(it(i.messages.whitespace, r.fullField));
};
const re = {
  required: ru,
  whitespace: mh,
  type: gh,
  range: vh,
  enum: fh,
  pattern: dh
};
var ph = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i);
  }
  n(o);
}, yh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (e == null && !r.required)
      return n();
    re.required(r, e, a, o, i, "array"), e != null && (re.type(r, e, a, o, i), re.range(r, e, a, o, i));
  }
  n(o);
}, bh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i), e !== void 0 && re.type(r, e, a, o, i);
  }
  n(o);
}, wh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e, "date") && !r.required)
      return n();
    if (re.required(r, e, a, o, i), !Re(e, "date")) {
      var c;
      e instanceof Date ? c = e : c = new Date(e), re.type(r, c, a, o, i), c && re.range(r, c.getTime(), a, o, i);
    }
  }
  n(o);
}, Ch = "enum", Sh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i), e !== void 0 && re[Ch](r, e, a, o, i);
  }
  n(o);
}, Eh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i), e !== void 0 && (re.type(r, e, a, o, i), re.range(r, e, a, o, i));
  }
  n(o);
}, xh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i), e !== void 0 && (re.type(r, e, a, o, i), re.range(r, e, a, o, i));
  }
  n(o);
}, Ph = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i), e !== void 0 && re.type(r, e, a, o, i);
  }
  n(o);
}, kh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (e === "" && (e = void 0), Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i), e !== void 0 && (re.type(r, e, a, o, i), re.range(r, e, a, o, i));
  }
  n(o);
}, Oh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i), e !== void 0 && re.type(r, e, a, o, i);
  }
  n(o);
}, Th = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e, "string") && !r.required)
      return n();
    re.required(r, e, a, o, i), Re(e, "string") || re.pattern(r, e, a, o, i);
  }
  n(o);
}, Fh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e) && !r.required)
      return n();
    re.required(r, e, a, o, i), Re(e) || re.type(r, e, a, o, i);
  }
  n(o);
}, Rh = function(r, e, n, a, i) {
  var o = [], s = Array.isArray(e) ? "array" : ee(e);
  re.required(r, e, a, o, i, s), n(o);
}, Mh = function(r, e, n, a, i) {
  var o = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Re(e, "string") && !r.required)
      return n();
    re.required(r, e, a, o, i, "string"), Re(e, "string") || (re.type(r, e, a, o, i), re.range(r, e, a, o, i), re.pattern(r, e, a, o, i), r.whitespace === !0 && re.whitespace(r, e, a, o, i));
  }
  n(o);
}, Ya = function(r, e, n, a, i) {
  var o = r.type, s = [], c = r.required || !r.required && a.hasOwnProperty(r.field);
  if (c) {
    if (Re(e, o) && !r.required)
      return n();
    re.required(r, e, a, s, i, o), Re(e, o) || re.type(r, e, a, s, i);
  }
  n(s);
};
const en = {
  string: Mh,
  method: Ph,
  number: kh,
  boolean: bh,
  regexp: Fh,
  integer: xh,
  float: Eh,
  array: yh,
  object: Oh,
  enum: Sh,
  pattern: Th,
  date: wh,
  url: Ya,
  hex: Ya,
  email: Ya,
  required: Rh,
  any: ph
};
var mn = /* @__PURE__ */ function() {
  function t(r) {
    He(this, t), P(this, "rules", null), P(this, "_messages", Di), this.define(r);
  }
  return Be(t, [{
    key: "define",
    value: function(e) {
      var n = this;
      if (!e)
        throw new Error("Cannot configure a schema with no rules");
      if (ee(e) !== "object" || Array.isArray(e))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(e).forEach(function(a) {
        var i = e[a];
        n.rules[a] = Array.isArray(i) ? i : [i];
      });
    }
  }, {
    key: "messages",
    value: function(e) {
      return e && (this._messages = ms(ji(), e)), this._messages;
    }
  }, {
    key: "validate",
    value: function(e) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, o = e, s = a, c = i;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, o), Promise.resolve(o);
      function u(m) {
        var g = [], d = {};
        function b(w) {
          if (Array.isArray(w)) {
            var E;
            g = (E = g).concat.apply(E, K(w));
          } else
            g.push(w);
        }
        for (var y = 0; y < m.length; y++)
          b(m[y]);
        g.length ? (d = Hi(g), c(g, d)) : c(null, o);
      }
      if (s.messages) {
        var l = this.messages();
        l === Di && (l = ji()), ms(l, s.messages), s.messages = l;
      } else
        s.messages = this.messages();
      var f = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(m) {
        var g = n.rules[m], d = o[m];
        g.forEach(function(b) {
          var y = b;
          typeof y.transform == "function" && (o === e && (o = F({}, o)), d = o[m] = y.transform(d), d != null && (y.type = y.type || (Array.isArray(d) ? "array" : ee(d)))), typeof y == "function" ? y = {
            validator: y
          } : y = F({}, y), y.validator = n.getValidationMethod(y), y.validator && (y.field = m, y.fullField = y.fullField || m, y.type = n.getType(y), f[m] = f[m] || [], f[m].push({
            rule: y,
            value: d,
            source: o,
            field: m
          }));
        });
      });
      var p = {};
      return ch(f, s, function(m, g) {
        var d = m.rule, b = (d.type === "object" || d.type === "array") && (ee(d.fields) === "object" || ee(d.defaultField) === "object");
        b = b && (d.required || !d.required && m.value), d.field = m.field;
        function y(x, R) {
          return F(F({}, R), {}, {
            fullField: "".concat(d.fullField, ".").concat(x),
            fullFields: d.fullFields ? [].concat(K(d.fullFields), [x]) : [x]
          });
        }
        function w() {
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], R = Array.isArray(x) ? x : [x];
          !s.suppressWarning && R.length && t.warning("async-validator:", R), R.length && d.message !== void 0 && (R = [].concat(d.message));
          var M = R.map(gs(d, o));
          if (s.first && M.length)
            return p[d.field] = 1, g(M);
          if (!b)
            g(M);
          else {
            if (d.required && !m.value)
              return d.message !== void 0 ? M = [].concat(d.message).map(gs(d, o)) : s.error && (M = [s.error(d, it(s.messages.required, d.field))]), g(M);
            var _ = {};
            d.defaultField && Object.keys(m.value).map(function(V) {
              _[V] = d.defaultField;
            }), _ = F(F({}, _), m.rule.fields);
            var I = {};
            Object.keys(_).forEach(function(V) {
              var $ = _[V], U = Array.isArray($) ? $ : [$];
              I[V] = U.map(y.bind(null, V));
            });
            var j = new t(I);
            j.messages(s.messages), m.rule.options && (m.rule.options.messages = s.messages, m.rule.options.error = s.error), j.validate(m.value, m.rule.options || s, function(V) {
              var $ = [];
              M && M.length && $.push.apply($, K(M)), V && V.length && $.push.apply($, K(V)), g($.length ? $ : null);
            });
          }
        }
        var E;
        if (d.asyncValidator)
          E = d.asyncValidator(d, m.value, w, m.source, s);
        else if (d.validator) {
          try {
            E = d.validator(d, m.value, w, m.source, s);
          } catch (x) {
            var C, S;
            (C = (S = console).error) === null || C === void 0 || C.call(S, x), s.suppressValidatorError || setTimeout(function() {
              throw x;
            }, 0), w(x.message);
          }
          E === !0 ? w() : E === !1 ? w(typeof d.message == "function" ? d.message(d.fullField || d.field) : d.message || "".concat(d.fullField || d.field, " fails")) : E instanceof Array ? w(E) : E instanceof Error && w(E.message);
        }
        E && E.then && E.then(function() {
          return w();
        }, function(x) {
          return w(x);
        });
      }, function(m) {
        u(m);
      }, o);
    }
  }, {
    key: "getType",
    value: function(e) {
      if (e.type === void 0 && e.pattern instanceof RegExp && (e.type = "pattern"), typeof e.validator != "function" && e.type && !en.hasOwnProperty(e.type))
        throw new Error(it("Unknown rule type %s", e.type));
      return e.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(e) {
      if (typeof e.validator == "function")
        return e.validator;
      var n = Object.keys(e), a = n.indexOf("message");
      return a !== -1 && n.splice(a, 1), n.length === 1 && n[0] === "required" ? en.required : en[this.getType(e)] || void 0;
    }
  }]), t;
}();
P(mn, "register", function(r, e) {
  if (typeof e != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  en[r] = e;
});
P(mn, "warning", tu);
P(mn, "messages", Di);
P(mn, "validators", en);
var nt = "'${name}' is not a valid ${type}", nu = {
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
    string: nt,
    method: nt,
    array: nt,
    object: nt,
    number: nt,
    date: nt,
    boolean: nt,
    integer: nt,
    float: nt,
    regexp: nt,
    email: nt,
    url: nt,
    hex: nt
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
}, ys = mn;
function _h(t, r) {
  return t.replace(/\\?\$\{\w+\}/g, function(e) {
    if (e.startsWith("\\"))
      return e.slice(1);
    var n = e.slice(2, -1);
    return r[n];
  });
}
var bs = "CODE_LOGIC_ERROR";
function Bi(t, r, e, n, a) {
  return Wi.apply(this, arguments);
}
function Wi() {
  return Wi = gn(/* @__PURE__ */ Ct().mark(function t(r, e, n, a, i) {
    var o, s, c, u, l, f, v, p, m;
    return Ct().wrap(function(d) {
      for (; ; ) switch (d.prev = d.next) {
        case 0:
          return o = F({}, n), delete o.ruleIndex, ys.warning = function() {
          }, o.validator && (s = o.validator, o.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(bs);
            }
          }), c = null, o && o.type === "array" && o.defaultField && (c = o.defaultField, delete o.defaultField), u = new ys(P({}, r, [o])), l = kr(nu, a.validateMessages), u.messages(l), f = [], d.prev = 10, d.next = 13, Promise.resolve(u.validate(P({}, r, e), F({}, a)));
        case 13:
          d.next = 18;
          break;
        case 15:
          d.prev = 15, d.t0 = d.catch(10), d.t0.errors && (f = d.t0.errors.map(function(b, y) {
            var w = b.message, E = w === bs ? l.default : w;
            return /* @__PURE__ */ h.isValidElement(E) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ h.cloneElement(E, {
                key: "error_".concat(y)
              })
            ) : E;
          }));
        case 18:
          if (!(!f.length && c)) {
            d.next = 23;
            break;
          }
          return d.next = 21, Promise.all(e.map(function(b, y) {
            return Bi("".concat(r, ".").concat(y), b, c, a, i);
          }));
        case 21:
          return v = d.sent, d.abrupt("return", v.reduce(function(b, y) {
            return [].concat(K(b), K(y));
          }, []));
        case 23:
          return p = F(F({}, n), {}, {
            name: r,
            enum: (n.enum || []).join(", ")
          }, i), m = f.map(function(b) {
            return typeof b == "string" ? _h(b, p) : b;
          }), d.abrupt("return", m);
        case 26:
        case "end":
          return d.stop();
      }
    }, t, null, [[10, 15]]);
  })), Wi.apply(this, arguments);
}
function Ah(t, r, e, n, a, i) {
  var o = t.join("."), s = e.map(function(l, f) {
    var v = l.validator, p = F(F({}, l), {}, {
      ruleIndex: f
    });
    return v && (p.validator = function(m, g, d) {
      var b = !1, y = function() {
        for (var C = arguments.length, S = new Array(C), x = 0; x < C; x++)
          S[x] = arguments[x];
        Promise.resolve().then(function() {
          pe(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || d.apply(void 0, S);
        });
      }, w = v(m, g, y);
      b = w && typeof w.then == "function" && typeof w.catch == "function", pe(b, "`callback` is deprecated. Please return a promise instead."), b && w.then(function() {
        d();
      }).catch(function(E) {
        d(E || " ");
      });
    }), p;
  }).sort(function(l, f) {
    var v = l.warningOnly, p = l.ruleIndex, m = f.warningOnly, g = f.ruleIndex;
    return !!v == !!m ? p - g : v ? 1 : -1;
  }), c;
  if (a === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var l = gn(/* @__PURE__ */ Ct().mark(function f(v, p) {
        var m, g, d;
        return Ct().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              m = 0;
            case 1:
              if (!(m < s.length)) {
                y.next = 12;
                break;
              }
              return g = s[m], y.next = 5, Bi(o, r, g, n, i);
            case 5:
              if (d = y.sent, !d.length) {
                y.next = 9;
                break;
              }
              return p([{
                errors: d,
                rule: g
              }]), y.abrupt("return");
            case 9:
              m += 1, y.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return y.stop();
          }
        }, f);
      }));
      return function(f, v) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var u = s.map(function(l) {
      return Bi(o, r, l, n, i).then(function(f) {
        return {
          errors: f,
          rule: l
        };
      });
    });
    c = (a ? $h(u) : Nh(u)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return c.catch(function(l) {
    return l;
  }), c;
}
function Nh(t) {
  return qi.apply(this, arguments);
}
function qi() {
  return qi = gn(/* @__PURE__ */ Ct().mark(function t(r) {
    return Ct().wrap(function(n) {
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
  })), qi.apply(this, arguments);
}
function $h(t) {
  return Ui.apply(this, arguments);
}
function Ui() {
  return Ui = gn(/* @__PURE__ */ Ct().mark(function t(r) {
    var e;
    return Ct().wrap(function(a) {
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
  })), Ui.apply(this, arguments);
}
function xe(t) {
  return Li(t);
}
function ws(t, r) {
  var e = {};
  return r.forEach(function(n) {
    var a = Tt(t, n);
    e = pt(e, n, a);
  }), e;
}
function Fr(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return t && t.some(function(n) {
    return au(r, n, e);
  });
}
function au(t, r) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !t || !r || !e && t.length !== r.length ? !1 : r.every(function(n, a) {
    return t[a] === n;
  });
}
function Ih(t, r) {
  if (t === r)
    return !0;
  if (!t && r || t && !r || !t || !r || ee(t) !== "object" || ee(r) !== "object")
    return !1;
  var e = Object.keys(t), n = Object.keys(r), a = new Set([].concat(e, n));
  return K(a).every(function(i) {
    var o = t[i], s = r[i];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function Vh(t) {
  var r = arguments.length <= 1 ? void 0 : arguments[1];
  return r && r.target && ee(r.target) === "object" && t in r.target ? r.target[t] : r;
}
function Cs(t, r, e) {
  var n = t.length;
  if (r < 0 || r >= n || e < 0 || e >= n)
    return t;
  var a = t[r], i = r - e;
  return i > 0 ? [].concat(K(t.slice(0, e)), [a], K(t.slice(e, r)), K(t.slice(r + 1, n))) : i < 0 ? [].concat(K(t.slice(0, r)), K(t.slice(r + 1, e + 1)), [a], K(t.slice(e + 1, n))) : t;
}
var Lh = ["name"], ct = [];
function Za(t, r, e, n, a, i) {
  return typeof t == "function" ? t(r, e, "source" in i ? {
    source: i.source
  } : {}) : n !== a;
}
var ho = /* @__PURE__ */ function(t) {
  sr(e, t);
  var r = cr(e);
  function e(n) {
    var a;
    if (He(this, e), a = r.call(this, n), P(J(a), "state", {
      resetCount: 0
    }), P(J(a), "cancelRegisterFunc", null), P(J(a), "mounted", !1), P(J(a), "touched", !1), P(J(a), "dirty", !1), P(J(a), "validatePromise", void 0), P(J(a), "prevValidating", void 0), P(J(a), "errors", ct), P(J(a), "warnings", ct), P(J(a), "cancelRegister", function() {
      var c = a.props, u = c.preserve, l = c.isListField, f = c.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(l, u, xe(f)), a.cancelRegisterFunc = null;
    }), P(J(a), "getNamePath", function() {
      var c = a.props, u = c.name, l = c.fieldContext, f = l.prefixName, v = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(K(v), K(u)) : [];
    }), P(J(a), "getRules", function() {
      var c = a.props, u = c.rules, l = u === void 0 ? [] : u, f = c.fieldContext;
      return l.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), P(J(a), "refresh", function() {
      a.mounted && a.setState(function(c) {
        var u = c.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }), P(J(a), "metaCache", null), P(J(a), "triggerMetaEvent", function(c) {
      var u = a.props.onMetaChange;
      if (u) {
        var l = F(F({}, a.getMeta()), {}, {
          destroy: c
        });
        ii(a.metaCache, l) || u(l), a.metaCache = l;
      } else
        a.metaCache = null;
    }), P(J(a), "onStoreChange", function(c, u, l) {
      var f = a.props, v = f.shouldUpdate, p = f.dependencies, m = p === void 0 ? [] : p, g = f.onReset, d = l.store, b = a.getNamePath(), y = a.getValue(c), w = a.getValue(d), E = u && Fr(u, b);
      switch (l.type === "valueUpdate" && l.source === "external" && !ii(y, w) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = ct, a.warnings = ct, a.triggerMetaEvent()), l.type) {
        case "reset":
          if (!u || E) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = ct, a.warnings = ct, a.triggerMetaEvent(), g == null || g(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (v && Za(v, c, d, y, w, l)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var C = l.data;
          if (E) {
            "touched" in C && (a.touched = C.touched), "validating" in C && !("originRCField" in C) && (a.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (a.errors = C.errors || ct), "warnings" in C && (a.warnings = C.warnings || ct), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in C && Fr(u, b, !0)) {
            a.reRender();
            return;
          }
          if (v && !b.length && Za(v, c, d, y, w, l)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var S = m.map(xe);
          if (S.some(function(x) {
            return Fr(l.relatedFields, x);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!m.length || b.length || v) && Za(v, c, d, y, w, l)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), P(J(a), "validateRules", function(c) {
      var u = a.getNamePath(), l = a.getValue(), f = c || {}, v = f.triggerName, p = f.validateOnly, m = p === void 0 ? !1 : p, g = Promise.resolve().then(/* @__PURE__ */ gn(/* @__PURE__ */ Ct().mark(function d() {
        var b, y, w, E, C, S, x;
        return Ct().wrap(function(M) {
          for (; ; ) switch (M.prev = M.next) {
            case 0:
              if (a.mounted) {
                M.next = 2;
                break;
              }
              return M.abrupt("return", []);
            case 2:
              if (b = a.props, y = b.validateFirst, w = y === void 0 ? !1 : y, E = b.messageVariables, C = b.validateDebounce, S = a.getRules(), v && (S = S.filter(function(_) {
                return _;
              }).filter(function(_) {
                var I = _.validateTrigger;
                if (!I)
                  return !0;
                var j = Li(I);
                return j.includes(v);
              })), !(C && v)) {
                M.next = 10;
                break;
              }
              return M.next = 8, new Promise(function(_) {
                setTimeout(_, C);
              });
            case 8:
              if (a.validatePromise === g) {
                M.next = 10;
                break;
              }
              return M.abrupt("return", []);
            case 10:
              return x = Ah(u, l, S, c, w, E), x.catch(function(_) {
                return _;
              }).then(function() {
                var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ct;
                if (a.validatePromise === g) {
                  var I;
                  a.validatePromise = null;
                  var j = [], V = [];
                  (I = _.forEach) === null || I === void 0 || I.call(_, function($) {
                    var U = $.rule.warningOnly, O = $.errors, k = O === void 0 ? ct : O;
                    U ? V.push.apply(V, K(k)) : j.push.apply(j, K(k));
                  }), a.errors = j, a.warnings = V, a.triggerMetaEvent(), a.reRender();
                }
              }), M.abrupt("return", x);
            case 13:
            case "end":
              return M.stop();
          }
        }, d);
      })));
      return m || (a.validatePromise = g, a.dirty = !0, a.errors = ct, a.warnings = ct, a.triggerMetaEvent(), a.reRender()), g;
    }), P(J(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), P(J(a), "isFieldTouched", function() {
      return a.touched;
    }), P(J(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var c = a.props.fieldContext, u = c.getInternalHooks(ar), l = u.getInitialValue;
      return l(a.getNamePath()) !== void 0;
    }), P(J(a), "getErrors", function() {
      return a.errors;
    }), P(J(a), "getWarnings", function() {
      return a.warnings;
    }), P(J(a), "isListField", function() {
      return a.props.isListField;
    }), P(J(a), "isList", function() {
      return a.props.isList;
    }), P(J(a), "isPreserve", function() {
      return a.props.preserve;
    }), P(J(a), "getMeta", function() {
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
    }), P(J(a), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var u = a.getMeta();
        return F(F({}, a.getOnlyChild(c(a.getControlled(), u, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = Jn(c);
      return l.length !== 1 || !/* @__PURE__ */ h.isValidElement(l[0]) ? {
        child: l,
        isFunction: !1
      } : {
        child: l[0],
        isFunction: !1
      };
    }), P(J(a), "getValue", function(c) {
      var u = a.props.fieldContext.getFieldsValue, l = a.getNamePath();
      return Tt(c || u(!0), l);
    }), P(J(a), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, l = u.name, f = u.trigger, v = u.validateTrigger, p = u.getValueFromEvent, m = u.normalize, g = u.valuePropName, d = u.getValueProps, b = u.fieldContext, y = v !== void 0 ? v : b.validateTrigger, w = a.getNamePath(), E = b.getInternalHooks, C = b.getFieldsValue, S = E(ar), x = S.dispatch, R = a.getValue(), M = d || function($) {
        return P({}, g, $);
      }, _ = c[f], I = l !== void 0 ? M(R) : {};
      z.env.NODE_ENV !== "production" && I && Object.keys(I).forEach(function($) {
        pe(typeof I[$] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat($, ")"));
      });
      var j = F(F({}, c), I);
      j[f] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var $, U = arguments.length, O = new Array(U), k = 0; k < U; k++)
          O[k] = arguments[k];
        p ? $ = p.apply(void 0, O) : $ = Vh.apply(void 0, [g].concat(O)), m && ($ = m($, R, C(!0))), x({
          type: "updateValue",
          namePath: w,
          value: $
        }), _ && _.apply(void 0, O);
      };
      var V = Li(y || []);
      return V.forEach(function($) {
        var U = j[$];
        j[$] = function() {
          U && U.apply(void 0, arguments);
          var O = a.props.rules;
          O && O.length && x({
            type: "validateField",
            namePath: w,
            triggerName: $
          });
        };
      }), j;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, o = i(ar), s = o.initEntityValue;
      s(J(a));
    }
    return a;
  }
  return Be(e, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var s = o.getInternalHooks, c = s(ar), u = c.registerField;
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
      return c ? u = s : /* @__PURE__ */ h.isValidElement(s) ? u = /* @__PURE__ */ h.cloneElement(s, this.getControlled(s.props)) : (pe(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ h.createElement(h.Fragment, {
        key: a
      }, u);
    }
  }]), e;
}(h.Component);
P(ho, "contextType", $r);
P(ho, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function iu(t) {
  var r = t.name, e = Ft(t, Lh), n = h.useContext($r), a = h.useContext(sa), i = r !== void 0 ? xe(r) : void 0, o = "keep";
  return e.isListField || (o = "_".concat((i || []).join("_"))), z.env.NODE_ENV !== "production" && e.preserve === !1 && e.isListField && i.length <= 1 && pe(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ h.createElement(ho, dt({
    key: o,
    name: i,
    isListField: !!a
  }, e, {
    fieldContext: n
  }));
}
function jh(t) {
  var r = t.name, e = t.initialValue, n = t.children, a = t.rules, i = t.validateTrigger, o = t.isListField, s = h.useContext($r), c = h.useContext(sa), u = h.useRef({
    keys: [],
    id: 0
  }), l = u.current, f = h.useMemo(function() {
    var g = xe(s.prefixName) || [];
    return [].concat(K(g), K(xe(r)));
  }, [s.prefixName, r]), v = h.useMemo(function() {
    return F(F({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), p = h.useMemo(function() {
    return {
      getKey: function(d) {
        var b = f.length, y = d[b];
        return [l.keys[y], d.slice(b + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return pe(!1, "Form.List only accepts function as children."), null;
  var m = function(d, b, y) {
    var w = y.source;
    return w === "internal" ? !1 : d !== b;
  };
  return /* @__PURE__ */ h.createElement(sa.Provider, {
    value: p
  }, /* @__PURE__ */ h.createElement($r.Provider, {
    value: v
  }, /* @__PURE__ */ h.createElement(iu, {
    name: [],
    shouldUpdate: m,
    rules: a,
    validateTrigger: i,
    initialValue: e,
    isList: !0,
    isListField: o ?? !!c
  }, function(g, d) {
    var b = g.value, y = b === void 0 ? [] : b, w = g.onChange, E = s.getFieldValue, C = function() {
      var M = E(f || []);
      return M || [];
    }, S = {
      add: function(M, _) {
        var I = C();
        _ >= 0 && _ <= I.length ? (l.keys = [].concat(K(l.keys.slice(0, _)), [l.id], K(l.keys.slice(_))), w([].concat(K(I.slice(0, _)), [M], K(I.slice(_))))) : (z.env.NODE_ENV !== "production" && (_ < 0 || _ > I.length) && pe(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(K(l.keys), [l.id]), w([].concat(K(I), [M]))), l.id += 1;
      },
      remove: function(M) {
        var _ = C(), I = new Set(Array.isArray(M) ? M : [M]);
        I.size <= 0 || (l.keys = l.keys.filter(function(j, V) {
          return !I.has(V);
        }), w(_.filter(function(j, V) {
          return !I.has(V);
        })));
      },
      move: function(M, _) {
        if (M !== _) {
          var I = C();
          M < 0 || M >= I.length || _ < 0 || _ >= I.length || (l.keys = Cs(l.keys, M, _), w(Cs(I, M, _)));
        }
      }
    }, x = y || [];
    return Array.isArray(x) || (x = [], z.env.NODE_ENV !== "production" && pe(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(x.map(function(R, M) {
      var _ = l.keys[M];
      return _ === void 0 && (l.keys[M] = l.id, _ = l.keys[M], l.id += 1), {
        name: M,
        key: _,
        isListField: !0
      };
    }), S, d);
  })));
}
function Dh(t) {
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
var ou = "__@field_split__";
function Qa(t) {
  return t.map(function(r) {
    return "".concat(ee(r), ":").concat(r);
  }).join(ou);
}
var Cr = /* @__PURE__ */ function() {
  function t() {
    He(this, t), P(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Be(t, [{
    key: "set",
    value: function(e, n) {
      this.kvs.set(Qa(e), n);
    }
  }, {
    key: "get",
    value: function(e) {
      return this.kvs.get(Qa(e));
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
      this.kvs.delete(Qa(e));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(e) {
      return K(this.kvs.entries()).map(function(n) {
        var a = H(n, 2), i = a[0], o = a[1], s = i.split(ou);
        return e({
          key: s.map(function(c) {
            var u = c.match(/^([^:]*):(.*)$/), l = H(u, 3), f = l[1], v = l[2];
            return f === "number" ? Number(v) : v;
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
}(), zh = ["name"], Hh = /* @__PURE__ */ Be(function t(r) {
  var e = this;
  He(this, t), P(this, "formHooked", !1), P(this, "forceRootUpdate", void 0), P(this, "subscribable", !0), P(this, "store", {}), P(this, "fieldEntities", []), P(this, "initialValues", {}), P(this, "callbacks", {}), P(this, "validateMessages", null), P(this, "preserve", null), P(this, "lastValidatePromise", null), P(this, "getForm", function() {
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
  }), P(this, "getInternalHooks", function(n) {
    return n === ar ? (e.formHooked = !0, {
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
    }) : (pe(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), P(this, "useSubscribe", function(n) {
    e.subscribable = n;
  }), P(this, "prevWithoutPreserves", null), P(this, "setInitialValues", function(n, a) {
    if (e.initialValues = n || {}, a) {
      var i, o = kr(n, e.store);
      (i = e.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var c = s.key;
        o = pt(o, c, Tt(n, c));
      }), e.prevWithoutPreserves = null, e.updateStore(o);
    }
  }), P(this, "destroyForm", function(n) {
    if (n)
      e.updateStore({});
    else {
      var a = new Cr();
      e.getFieldEntities(!0).forEach(function(i) {
        e.isMergedPreserve(i.isPreserve()) || a.set(i.getNamePath(), !0);
      }), e.prevWithoutPreserves = a;
    }
  }), P(this, "getInitialValue", function(n) {
    var a = Tt(e.initialValues, n);
    return n.length ? kr(a) : a;
  }), P(this, "setCallbacks", function(n) {
    e.callbacks = n;
  }), P(this, "setValidateMessages", function(n) {
    e.validateMessages = n;
  }), P(this, "setPreserve", function(n) {
    e.preserve = n;
  }), P(this, "watchList", []), P(this, "registerWatch", function(n) {
    return e.watchList.push(n), function() {
      e.watchList = e.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), P(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (e.watchList.length) {
      var a = e.getFieldsValue(), i = e.getFieldsValue(!0);
      e.watchList.forEach(function(o) {
        o(a, i, n);
      });
    }
  }), P(this, "timeoutId", null), P(this, "warningUnhooked", function() {
    z.env.NODE_ENV !== "production" && !e.timeoutId && typeof window < "u" && (e.timeoutId = setTimeout(function() {
      e.timeoutId = null, e.formHooked || pe(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), P(this, "updateStore", function(n) {
    e.store = n;
  }), P(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? e.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : e.fieldEntities;
  }), P(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Cr();
    return e.getFieldEntities(n).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }), P(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return e.getFieldEntities(!0);
    var a = e.getFieldsMap(!0);
    return n.map(function(i) {
      var o = xe(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: xe(i)
      };
    });
  }), P(this, "getFieldsValue", function(n, a) {
    e.warningUnhooked();
    var i, o, s;
    if (n === !0 || Array.isArray(n) ? (i = n, o = a) : n && ee(n) === "object" && (s = n.strict, o = n.filter), i === !0 && !o)
      return e.store;
    var c = e.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), u = [];
    return c.forEach(function(l) {
      var f, v, p = "INVALIDATE_NAME_PATH" in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
      if (s) {
        var m, g;
        if ((m = (g = l).isList) !== null && m !== void 0 && m.call(g))
          return;
      } else if (!i && (f = (v = l).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!o)
        u.push(p);
      else {
        var d = "getMeta" in l ? l.getMeta() : null;
        o(d) && u.push(p);
      }
    }), ws(e.store, u.map(xe));
  }), P(this, "getFieldValue", function(n) {
    e.warningUnhooked();
    var a = xe(n);
    return Tt(e.store, a);
  }), P(this, "getFieldsError", function(n) {
    e.warningUnhooked();
    var a = e.getFieldEntitiesForNamePathList(n);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: xe(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), P(this, "getFieldError", function(n) {
    e.warningUnhooked();
    var a = xe(n), i = e.getFieldsError([a])[0];
    return i.errors;
  }), P(this, "getFieldWarning", function(n) {
    e.warningUnhooked();
    var a = xe(n), i = e.getFieldsError([a])[0];
    return i.warnings;
  }), P(this, "isFieldsTouched", function() {
    e.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a[0], s = a[1], c, u = !1;
    a.length === 0 ? c = null : a.length === 1 ? Array.isArray(o) ? (c = o.map(xe), u = !1) : (c = null, u = o) : (c = o.map(xe), u = s);
    var l = e.getFieldEntities(!0), f = function(d) {
      return d.isFieldTouched();
    };
    if (!c)
      return u ? l.every(function(g) {
        return f(g) || g.isList();
      }) : l.some(f);
    var v = new Cr();
    c.forEach(function(g) {
      v.set(g, []);
    }), l.forEach(function(g) {
      var d = g.getNamePath();
      c.forEach(function(b) {
        b.every(function(y, w) {
          return d[w] === y;
        }) && v.update(b, function(y) {
          return [].concat(K(y), [g]);
        });
      });
    });
    var p = function(d) {
      return d.some(f);
    }, m = v.map(function(g) {
      var d = g.value;
      return d;
    });
    return u ? m.every(p) : m.some(p);
  }), P(this, "isFieldTouched", function(n) {
    return e.warningUnhooked(), e.isFieldsTouched([n]);
  }), P(this, "isFieldsValidating", function(n) {
    e.warningUnhooked();
    var a = e.getFieldEntities();
    if (!n)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = n.map(xe);
    return a.some(function(o) {
      var s = o.getNamePath();
      return Fr(i, s) && o.isFieldValidating();
    });
  }), P(this, "isFieldValidating", function(n) {
    return e.warningUnhooked(), e.isFieldsValidating([n]);
  }), P(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Cr(), i = e.getFieldEntities(!0);
    i.forEach(function(c) {
      var u = c.props.initialValue, l = c.getNamePath();
      if (u !== void 0) {
        var f = a.get(l) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: u
        }), a.set(l, f);
      }
    });
    var o = function(u) {
      u.forEach(function(l) {
        var f = l.props.initialValue;
        if (f !== void 0) {
          var v = l.getNamePath(), p = e.getInitialValue(v);
          if (p !== void 0)
            pe(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var m = a.get(v);
            if (m && m.size > 1)
              pe(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var g = e.getFieldValue(v), d = l.isListField();
              !d && (!n.skipExist || g === void 0) && e.updateStore(pt(e.store, v, K(m)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var u = a.get(c);
      if (u) {
        var l;
        (l = s).push.apply(l, K(K(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = i, o(s);
  }), P(this, "resetFields", function(n) {
    e.warningUnhooked();
    var a = e.store;
    if (!n) {
      e.updateStore(kr(e.initialValues)), e.resetWithFieldInitialValue(), e.notifyObservers(a, null, {
        type: "reset"
      }), e.notifyWatch();
      return;
    }
    var i = n.map(xe);
    i.forEach(function(o) {
      var s = e.getInitialValue(o);
      e.updateStore(pt(e.store, o, s));
    }), e.resetWithFieldInitialValue({
      namePathList: i
    }), e.notifyObservers(a, i, {
      type: "reset"
    }), e.notifyWatch(i);
  }), P(this, "setFields", function(n) {
    e.warningUnhooked();
    var a = e.store, i = [];
    n.forEach(function(o) {
      var s = o.name, c = Ft(o, zh), u = xe(s);
      i.push(u), "value" in c && e.updateStore(pt(e.store, u, c.value)), e.notifyObservers(a, [u], {
        type: "setField",
        data: o
      });
    }), e.notifyWatch(i);
  }), P(this, "getFields", function() {
    var n = e.getFieldEntities(!0), a = n.map(function(i) {
      var o = i.getNamePath(), s = i.getMeta(), c = F(F({}, s), {}, {
        name: o,
        value: e.getFieldValue(o)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return a;
  }), P(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var i = n.getNamePath(), o = Tt(e.store, i);
      o === void 0 && e.updateStore(pt(e.store, i, a));
    }
  }), P(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : e.preserve;
    return a ?? !0;
  }), P(this, "registerField", function(n) {
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
      if (e.fieldEntities = e.fieldEntities.filter(function(f) {
        return f !== n;
      }), !e.isMergedPreserve(s) && (!o || c.length > 1)) {
        var u = o ? void 0 : e.getInitialValue(a);
        if (a.length && e.getFieldValue(a) !== u && e.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !au(f.getNamePath(), a)
          );
        })) {
          var l = e.store;
          e.updateStore(pt(l, a, u, !0)), e.notifyObservers(l, [a], {
            type: "remove"
          }), e.triggerDependenciesUpdate(l, a);
        }
      }
      e.notifyWatch([a]);
    };
  }), P(this, "dispatch", function(n) {
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
  }), P(this, "notifyObservers", function(n, a, i) {
    if (e.subscribable) {
      var o = F(F({}, i), {}, {
        store: e.getFieldsValue(!0)
      });
      e.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, a, o);
      });
    } else
      e.forceRootUpdate();
  }), P(this, "triggerDependenciesUpdate", function(n, a) {
    var i = e.getDependencyChildrenFields(a);
    return i.length && e.validateFields(i), e.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(K(i))
    }), i;
  }), P(this, "updateValue", function(n, a) {
    var i = xe(n), o = e.store;
    e.updateStore(pt(e.store, i, a)), e.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), e.notifyWatch([i]);
    var s = e.triggerDependenciesUpdate(o, i), c = e.callbacks.onValuesChange;
    if (c) {
      var u = ws(e.store, [i]);
      c(u, e.getFieldsValue());
    }
    e.triggerOnFieldsChange([i].concat(K(s)));
  }), P(this, "setFieldsValue", function(n) {
    e.warningUnhooked();
    var a = e.store;
    if (n) {
      var i = kr(e.store, n);
      e.updateStore(i);
    }
    e.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), e.notifyWatch();
  }), P(this, "setFieldValue", function(n, a) {
    e.setFields([{
      name: n,
      value: a
    }]);
  }), P(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), i = [], o = new Cr();
    e.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(l) {
        var f = xe(l);
        o.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(c), v;
        });
      });
    });
    var s = function c(u) {
      var l = o.get(u) || /* @__PURE__ */ new Set();
      l.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (i.push(v), c(v));
        }
      });
    };
    return s(n), i;
  }), P(this, "triggerOnFieldsChange", function(n, a) {
    var i = e.callbacks.onFieldsChange;
    if (i) {
      var o = e.getFields();
      if (a) {
        var s = new Cr();
        a.forEach(function(u) {
          var l = u.name, f = u.errors;
          s.set(l, f);
        }), o.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var c = o.filter(function(u) {
        var l = u.name;
        return Fr(n, l);
      });
      c.length && i(c, o);
    }
  }), P(this, "validateFields", function(n, a) {
    e.warningUnhooked();
    var i, o;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (i = n, o = a) : o = n;
    var s = !!i, c = s ? i.map(xe) : [], u = [], l = String(Date.now()), f = /* @__PURE__ */ new Set(), v = o || {}, p = v.recursive, m = v.dirty;
    e.getFieldEntities(!0).forEach(function(y) {
      if (s || c.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(m && !y.isFieldDirty())) {
        var w = y.getNamePath();
        if (f.add(w.join(l)), !s || Fr(c, w, p)) {
          var E = y.validateRules(F({
            validateMessages: F(F({}, nu), e.validateMessages)
          }, o));
          u.push(E.then(function() {
            return {
              name: w,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var S, x = [], R = [];
            return (S = C.forEach) === null || S === void 0 || S.call(C, function(M) {
              var _ = M.rule.warningOnly, I = M.errors;
              _ ? R.push.apply(R, K(I)) : x.push.apply(x, K(I));
            }), x.length ? Promise.reject({
              name: w,
              errors: x,
              warnings: R
            }) : {
              name: w,
              errors: x,
              warnings: R
            };
          }));
        }
      }
    });
    var g = Dh(u);
    e.lastValidatePromise = g, g.catch(function(y) {
      return y;
    }).then(function(y) {
      var w = y.map(function(E) {
        var C = E.name;
        return C;
      });
      e.notifyObservers(e.store, w, {
        type: "validateFinish"
      }), e.triggerOnFieldsChange(w, y);
    });
    var d = g.then(function() {
      return e.lastValidatePromise === g ? Promise.resolve(e.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(y) {
      var w = y.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: e.getFieldsValue(c),
        errorFields: w,
        outOfDate: e.lastValidatePromise !== g
      });
    });
    d.catch(function(y) {
      return y;
    });
    var b = c.filter(function(y) {
      return f.has(y.join(l));
    });
    return e.triggerOnFieldsChange(b), d;
  }), P(this, "submit", function() {
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
function su(t) {
  var r = h.useRef(), e = h.useState({}), n = H(e, 2), a = n[1];
  if (!r.current)
    if (t)
      r.current = t;
    else {
      var i = function() {
        a({});
      }, o = new Hh(i);
      r.current = o.getForm();
    }
  return [r.current];
}
var Gi = /* @__PURE__ */ h.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Bh = function(r) {
  var e = r.validateMessages, n = r.onFormChange, a = r.onFormFinish, i = r.children, o = h.useContext(Gi), s = h.useRef({});
  return /* @__PURE__ */ h.createElement(Gi.Provider, {
    value: F(F({}, o), {}, {
      validateMessages: F(F({}, o.validateMessages), e),
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
        u && (s.current = F(F({}, s.current), {}, P({}, u, l))), o.registerForm(u, l);
      },
      unregisterForm: function(u) {
        var l = F({}, s.current);
        delete l[u], s.current = l, o.unregisterForm(u);
      }
    })
  }, i);
}, Wh = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], qh = function(r, e) {
  var n = r.name, a = r.initialValues, i = r.fields, o = r.form, s = r.preserve, c = r.children, u = r.component, l = u === void 0 ? "form" : u, f = r.validateMessages, v = r.validateTrigger, p = v === void 0 ? "onChange" : v, m = r.onValuesChange, g = r.onFieldsChange, d = r.onFinish, b = r.onFinishFailed, y = r.clearOnDestroy, w = Ft(r, Wh), E = h.useRef(null), C = h.useContext(Gi), S = su(o), x = H(S, 1), R = x[0], M = R.getInternalHooks(ar), _ = M.useSubscribe, I = M.setInitialValues, j = M.setCallbacks, V = M.setValidateMessages, $ = M.setPreserve, U = M.destroyForm;
  h.useImperativeHandle(e, function() {
    return F(F({}, R), {}, {
      nativeElement: E.current
    });
  }), h.useEffect(function() {
    return C.registerForm(n, R), function() {
      C.unregisterForm(n);
    };
  }, [C, R, n]), V(F(F({}, C.validateMessages), f)), j({
    onValuesChange: m,
    onFieldsChange: function(D) {
      if (C.triggerFormChange(n, D), g) {
        for (var Z = arguments.length, ne = new Array(Z > 1 ? Z - 1 : 0), ae = 1; ae < Z; ae++)
          ne[ae - 1] = arguments[ae];
        g.apply(void 0, [D].concat(ne));
      }
    },
    onFinish: function(D) {
      C.triggerFormFinish(n, D), d && d(D);
    },
    onFinishFailed: b
  }), $(s);
  var O = h.useRef(null);
  I(a, !O.current), O.current || (O.current = !0), h.useEffect(
    function() {
      return function() {
        return U(y);
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
  _(!T);
  var A = h.useRef();
  h.useEffect(function() {
    Ih(A.current || [], i || []) || R.setFields(i || []), A.current = i;
  }, [i, R]);
  var L = h.useMemo(function() {
    return F(F({}, R), {}, {
      validateTrigger: p
    });
  }, [R, p]), G = /* @__PURE__ */ h.createElement(sa.Provider, {
    value: null
  }, /* @__PURE__ */ h.createElement($r.Provider, {
    value: L
  }, k));
  return l === !1 ? G : /* @__PURE__ */ h.createElement(l, dt({}, w, {
    ref: E,
    onSubmit: function(D) {
      D.preventDefault(), D.stopPropagation(), R.submit();
    },
    onReset: function(D) {
      var Z;
      D.preventDefault(), R.resetFields(), (Z = w.onReset) === null || Z === void 0 || Z.call(w, D);
    }
  }), G);
};
function Ss(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return Math.random();
  }
}
var Uh = z.env.NODE_ENV !== "production" ? function(t) {
  var r = t.join("__RC_FIELD_FORM_SPLIT__"), e = h.useRef(r);
  pe(e.current === r, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Gh() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  var n = r[0], a = r[1], i = a === void 0 ? {} : a, o = th(i) ? {
    form: i
  } : i, s = o.form, c = h.useState(), u = H(c, 2), l = u[0], f = u[1], v = h.useMemo(function() {
    return Ss(l);
  }, [l]), p = h.useRef(v);
  p.current = v;
  var m = h.useContext($r), g = s || m, d = g && g._init;
  z.env.NODE_ENV !== "production" && pe(r.length === 2 ? s ? d : !0 : d, "useWatch requires a form instance since it can not auto detect from context.");
  var b = xe(n), y = h.useRef(b);
  return y.current = b, Uh(b), h.useEffect(
    function() {
      if (d) {
        var w = g.getFieldsValue, E = g.getInternalHooks, C = E(ar), S = C.registerWatch, x = function(I, j) {
          var V = o.preserve ? j : I;
          return typeof n == "function" ? n(V) : Tt(V, y.current);
        }, R = S(function(_, I) {
          var j = x(_, I), V = Ss(j);
          p.current !== V && (p.current = V, f(j));
        }), M = x(w(), w(!0));
        return l !== M && f(M), R;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d]
  ), l;
}
var Kh = /* @__PURE__ */ h.forwardRef(qh), pn = Kh;
pn.FormProvider = Bh;
pn.Field = iu;
pn.List = jh;
pn.useForm = su;
pn.useWatch = Gh;
const Ki = /* @__PURE__ */ h.createContext({});
z.env.NODE_ENV !== "production" && (Ki.displayName = "FormItemInputContext");
const Xh = (t) => {
  let {
    children: r,
    status: e,
    override: n
  } = t;
  const a = h.useContext(Ki), i = h.useMemo(() => {
    const o = Object.assign({}, a);
    return n && delete o.isFormItemInput, e && (delete o.status, delete o.hasFeedback, delete o.feedbackIcon), o;
  }, [e, n, a]);
  return /* @__PURE__ */ h.createElement(Ki.Provider, {
    value: i
  }, r);
}, Hg = /* @__PURE__ */ h.createContext(void 0), Yh = (t) => {
  const {
    space: r,
    form: e,
    children: n
  } = t;
  if (n == null)
    return null;
  let a = n;
  return e && (a = /* @__PURE__ */ $e.createElement(Xh, {
    override: !0,
    status: !0
  }, a)), r && (a = /* @__PURE__ */ $e.createElement(Fv, null, a)), a;
}, Zh = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var t = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t == null ? void 0 : t.substr(0, 4));
};
function Qh(t) {
  var r = t.prefixCls, e = t.align, n = t.arrow, a = t.arrowPos, i = n || {}, o = i.className, s = i.content, c = a.x, u = c === void 0 ? 0 : c, l = a.y, f = l === void 0 ? 0 : l, v = h.useRef();
  if (!e || !e.points)
    return null;
  var p = {
    position: "absolute"
  };
  if (e.autoArrow !== !1) {
    var m = e.points[0], g = e.points[1], d = m[0], b = m[1], y = g[0], w = g[1];
    d === y || !["t", "b"].includes(d) ? p.top = f : d === "t" ? p.top = 0 : p.bottom = 0, b === w || !["l", "r"].includes(b) ? p.left = u : b === "l" ? p.left = 0 : p.right = 0;
  }
  return /* @__PURE__ */ h.createElement("div", {
    ref: v,
    className: Ze("".concat(r, "-arrow"), o),
    style: p
  }, s);
}
function Jh(t) {
  var r = t.prefixCls, e = t.open, n = t.zIndex, a = t.mask, i = t.motion;
  return a ? /* @__PURE__ */ h.createElement(lo, dt({}, i, {
    motionAppear: !0,
    visible: e,
    removeOnLeave: !0
  }), function(o) {
    var s = o.className;
    return /* @__PURE__ */ h.createElement("div", {
      style: {
        zIndex: n
      },
      className: Ze("".concat(r, "-mask"), s)
    });
  }) : null;
}
var cu = /* @__PURE__ */ h.memo(function(t) {
  var r = t.children;
  return r;
}, function(t, r) {
  return r.cache;
});
z.env.NODE_ENV !== "production" && (cu.displayName = "PopupContent");
var uu = /* @__PURE__ */ h.forwardRef(function(t, r) {
  var e = t.popup, n = t.className, a = t.prefixCls, i = t.style, o = t.target, s = t.onVisibleChanged, c = t.open, u = t.keepDom, l = t.fresh, f = t.onClick, v = t.mask, p = t.arrow, m = t.arrowPos, g = t.align, d = t.motion, b = t.maskMotion, y = t.forceRender, w = t.getPopupContainer, E = t.autoDestroy, C = t.portal, S = t.zIndex, x = t.onMouseEnter, R = t.onMouseLeave, M = t.onPointerEnter, _ = t.onPointerDownCapture, I = t.ready, j = t.offsetX, V = t.offsetY, $ = t.offsetR, U = t.offsetB, O = t.onAlign, k = t.onPrepare, T = t.stretch, N = t.targetWidth, A = t.targetHeight, L = typeof e == "function" ? e() : e, G = c || u, W = (w == null ? void 0 : w.length) > 0, D = h.useState(!w || !W), Z = H(D, 2), ne = Z[0], ae = Z[1];
  if (Ue(function() {
    !ne && W && o && ae(!0);
  }, [ne, W, o]), !ne)
    return null;
  var Pe = "auto", le = {
    left: "-1000vw",
    top: "-1000vh",
    right: Pe,
    bottom: Pe
  };
  if (I || !c) {
    var Ce, Se = g.points, fe = g.dynamicInset || ((Ce = g._experimental) === null || Ce === void 0 ? void 0 : Ce.dynamicInset), Ee = fe && Se[0][1] === "r", B = fe && Se[0][0] === "b";
    Ee ? (le.right = $, le.left = Pe) : (le.left = j, le.right = Pe), B ? (le.bottom = U, le.top = Pe) : (le.top = V, le.bottom = Pe);
  }
  var he = {};
  return T && (T.includes("height") && A ? he.height = A : T.includes("minHeight") && A && (he.minHeight = A), T.includes("width") && N ? he.width = N : T.includes("minWidth") && N && (he.minWidth = N)), c || (he.pointerEvents = "none"), /* @__PURE__ */ h.createElement(C, {
    open: y || G,
    getContainer: w && function() {
      return w(o);
    },
    autoDestroy: E
  }, /* @__PURE__ */ h.createElement(Jh, {
    prefixCls: a,
    open: c,
    zIndex: S,
    mask: v,
    motion: b
  }), /* @__PURE__ */ h.createElement(fa, {
    onResize: O,
    disabled: !c
  }, function(ge) {
    return /* @__PURE__ */ h.createElement(lo, dt({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(a, "-hidden")
    }, d, {
      onAppearPrepare: k,
      onEnterPrepare: k,
      visible: c,
      onVisibleChanged: function(ke) {
        var Me;
        d == null || (Me = d.onVisibleChanged) === null || Me === void 0 || Me.call(d, ke), s(ke);
      }
    }), function(Ie, ke) {
      var Me = Ie.className, de = Ie.style, te = Ze(a, Me, n);
      return /* @__PURE__ */ h.createElement("div", {
        ref: Ns(ge, r, ke),
        className: te,
        style: F(F(F(F({
          "--arrow-x": "".concat(m.x || 0, "px"),
          "--arrow-y": "".concat(m.y || 0, "px")
        }, le), he), de), {}, {
          boxSizing: "border-box",
          zIndex: S
        }, i),
        onMouseEnter: x,
        onMouseLeave: R,
        onPointerEnter: M,
        onClick: f,
        onPointerDownCapture: _
      }, p && /* @__PURE__ */ h.createElement(Qh, {
        prefixCls: a,
        arrow: p,
        arrowPos: m,
        align: g
      }), /* @__PURE__ */ h.createElement(cu, {
        cache: !c && !l
      }, L));
    });
  }));
});
z.env.NODE_ENV !== "production" && (uu.displayName = "Popup");
var lu = /* @__PURE__ */ h.forwardRef(function(t, r) {
  var e = t.children, n = t.getTriggerDOMNode, a = ua(e), i = h.useCallback(function(s) {
    Qi(r, n ? n(s) : s);
  }, [n]), o = Ji(i, e.ref);
  return a ? /* @__PURE__ */ h.cloneElement(e, {
    ref: o
  }) : e;
});
z.env.NODE_ENV !== "production" && (lu.displayName = "TriggerWrapper");
var Es = /* @__PURE__ */ h.createContext(null);
function xs(t) {
  return t ? Array.isArray(t) ? t : [t] : [];
}
function eg(t, r, e, n) {
  return h.useMemo(function() {
    var a = xs(e ?? r), i = xs(n ?? r), o = new Set(a), s = new Set(i);
    return t && (o.has("hover") && (o.delete("hover"), o.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [o, s];
  }, [t, r, e, n]);
}
function tg() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = arguments.length > 2 ? arguments[2] : void 0;
  return e ? t[0] === r[0] : t[0] === r[0] && t[1] === r[1];
}
function rg(t, r, e, n) {
  for (var a = e.points, i = Object.keys(t), o = 0; o < i.length; o += 1) {
    var s, c = i[o];
    if (tg((s = t[c]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(r, "-placement-").concat(c);
  }
  return "";
}
function Ps(t, r, e, n) {
  return r || (e ? {
    motionName: "".concat(t, "-").concat(e)
  } : n ? {
    motionName: n
  } : null);
}
function yn(t) {
  return t.ownerDocument.defaultView;
}
function Xi(t) {
  for (var r = [], e = t == null ? void 0 : t.parentElement, n = ["hidden", "scroll", "clip", "auto"]; e; ) {
    var a = yn(e).getComputedStyle(e), i = a.overflowX, o = a.overflowY, s = a.overflow;
    [i, o, s].some(function(c) {
      return n.includes(c);
    }) && r.push(e), e = e.parentElement;
  }
  return r;
}
function vn(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(t) ? r : t;
}
function Xr(t) {
  return vn(parseFloat(t), 0);
}
function ks(t, r) {
  var e = F({}, t);
  return (r || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = yn(n).getComputedStyle(n), i = a.overflow, o = a.overflowClipMargin, s = a.borderTopWidth, c = a.borderBottomWidth, u = a.borderLeftWidth, l = a.borderRightWidth, f = n.getBoundingClientRect(), v = n.offsetHeight, p = n.clientHeight, m = n.offsetWidth, g = n.clientWidth, d = Xr(s), b = Xr(c), y = Xr(u), w = Xr(l), E = vn(Math.round(f.width / m * 1e3) / 1e3), C = vn(Math.round(f.height / v * 1e3) / 1e3), S = (m - g - y - w) * E, x = (v - p - d - b) * C, R = d * C, M = b * C, _ = y * E, I = w * E, j = 0, V = 0;
      if (i === "clip") {
        var $ = Xr(o);
        j = $ * E, V = $ * C;
      }
      var U = f.x + _ - j, O = f.y + R - V, k = U + f.width + 2 * j - _ - I - S, T = O + f.height + 2 * V - R - M - x;
      e.left = Math.max(e.left, U), e.top = Math.max(e.top, O), e.right = Math.min(e.right, k), e.bottom = Math.min(e.bottom, T);
    }
  }), e;
}
function Os(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = "".concat(r), n = e.match(/^(.*)\%$/);
  return n ? t * (parseFloat(n[1]) / 100) : parseFloat(e);
}
function Ts(t, r) {
  var e = r || [], n = H(e, 2), a = n[0], i = n[1];
  return [Os(t.width, a), Os(t.height, i)];
}
function Fs() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [t[0], t[1]];
}
function Sr(t, r) {
  var e = r[0], n = r[1], a, i;
  return e === "t" ? i = t.y : e === "b" ? i = t.y + t.height : i = t.y + t.height / 2, n === "l" ? a = t.x : n === "r" ? a = t.x + t.width : a = t.x + t.width / 2, {
    x: a,
    y: i
  };
}
function Ut(t, r) {
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
function ng(t, r, e, n, a, i, o) {
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
  }), c = H(s, 2), u = c[0], l = c[1], f = h.useRef(0), v = h.useMemo(function() {
    return r ? Xi(r) : [];
  }, [r]), p = h.useRef({}), m = function() {
    p.current = {};
  };
  t || m();
  var g = lt(function() {
    if (r && e && t) {
      let ot = function(yr, Wt) {
        var qt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ye, Gr = D.x + yr, Mn = D.y + Wt, _a = Gr + Ee, Aa = Mn + fe, Na = Math.max(Gr, qt.left), q = Math.max(Mn, qt.top), Y = Math.min(_a, qt.right), me = Math.min(Aa, qt.bottom);
        return Math.max(0, (Y - Na) * (me - q));
      }, Rn = function() {
        It = D.y + Q, Vt = It + fe, Te = D.x + ce, hr = Te + Ee;
      };
      var y, w, E, C, S = r, x = S.ownerDocument, R = yn(S), M = R.getComputedStyle(S), _ = M.width, I = M.height, j = M.position, V = S.style.left, $ = S.style.top, U = S.style.right, O = S.style.bottom, k = S.style.overflow, T = F(F({}, a[n]), i), N = x.createElement("div");
      (y = S.parentElement) === null || y === void 0 || y.appendChild(N), N.style.left = "".concat(S.offsetLeft, "px"), N.style.top = "".concat(S.offsetTop, "px"), N.style.position = j, N.style.height = "".concat(S.offsetHeight, "px"), N.style.width = "".concat(S.offsetWidth, "px"), S.style.left = "0", S.style.top = "0", S.style.right = "auto", S.style.bottom = "auto", S.style.overflow = "hidden";
      var A;
      if (Array.isArray(e))
        A = {
          x: e[0],
          y: e[1],
          width: 0,
          height: 0
        };
      else {
        var L, G, W = e.getBoundingClientRect();
        W.x = (L = W.x) !== null && L !== void 0 ? L : W.left, W.y = (G = W.y) !== null && G !== void 0 ? G : W.top, A = {
          x: W.x,
          y: W.y,
          width: W.width,
          height: W.height
        };
      }
      var D = S.getBoundingClientRect();
      D.x = (w = D.x) !== null && w !== void 0 ? w : D.left, D.y = (E = D.y) !== null && E !== void 0 ? E : D.top;
      var Z = x.documentElement, ne = Z.clientWidth, ae = Z.clientHeight, Pe = Z.scrollWidth, le = Z.scrollHeight, Ce = Z.scrollTop, Se = Z.scrollLeft, fe = D.height, Ee = D.width, B = A.height, he = A.width, ge = {
        left: 0,
        top: 0,
        right: ne,
        bottom: ae
      }, Ie = {
        left: -Se,
        top: -Ce,
        right: Pe - Se,
        bottom: le - Ce
      }, ke = T.htmlRegion, Me = "visible", de = "visibleFirst";
      ke !== "scroll" && ke !== de && (ke = Me);
      var te = ke === de, _e = ks(Ie, v), X = ks(ge, v), ye = ke === Me ? X : _e, Ae = te ? X : ye;
      S.style.left = "auto", S.style.top = "auto", S.style.right = "0", S.style.bottom = "0";
      var Ve = S.getBoundingClientRect();
      S.style.left = V, S.style.top = $, S.style.right = U, S.style.bottom = O, S.style.overflow = k, (C = S.parentElement) === null || C === void 0 || C.removeChild(N);
      var St = vn(Math.round(Ee / parseFloat(_) * 1e3) / 1e3), ht = vn(Math.round(fe / parseFloat(I) * 1e3) / 1e3);
      if (St === 0 || ht === 0 || rn(e) && !Tv(e))
        return;
      var zr = T.offset, Hr = T.targetOffset, ur = Ts(D, zr), Je = H(ur, 2), et = Je[0], Ke = Je[1], Br = Ts(A, Hr), Rt = H(Br, 2), Xe = Rt[0], Et = Rt[1];
      A.x -= Xe, A.y -= Et;
      var Wr = T.points || [], lr = H(Wr, 2), fr = lr[0], Mt = lr[1], De = Fs(Mt), Ne = Fs(fr), _t = Sr(A, De), be = Sr(D, Ne), We = F({}, T), ce = _t.x - be.x + et, Q = _t.y - be.y + Ke, Ye = ot(ce, Q), At = ot(ce, Q, X), ve = Sr(A, ["t", "l"]), ie = Sr(D, ["t", "l"]), qe = Sr(A, ["b", "r"]), ze = Sr(D, ["b", "r"]), tt = T.overflow || {}, dr = tt.adjustX, vr = tt.adjustY, Nt = tt.shiftX, $t = tt.shiftY, Qt = function(Wt) {
        return typeof Wt == "boolean" ? Wt : Wt >= 0;
      }, It, Vt, Te, hr;
      Rn();
      var Jt = Qt(vr), bn = Ne[0] === De[0];
      if (Jt && Ne[0] === "t" && (Vt > Ae.bottom || p.current.bt)) {
        var Le = Q;
        bn ? Le -= fe - B : Le = ve.y - ze.y - Ke;
        var wn = ot(ce, Le), wa = ot(ce, Le, X);
        // Of course use larger one
        wn > Ye || wn === Ye && (!te || // Choose recommend one
        wa >= At) ? (p.current.bt = !0, Q = Le, Ke = -Ke, We.points = [Ut(Ne, 0), Ut(De, 0)]) : p.current.bt = !1;
      }
      if (Jt && Ne[0] === "b" && (It < Ae.top || p.current.tb)) {
        var er = Q;
        bn ? er += fe - B : er = qe.y - ie.y - Ke;
        var Cn = ot(ce, er), Ca = ot(ce, er, X);
        // Of course use larger one
        Cn > Ye || Cn === Ye && (!te || // Choose recommend one
        Ca >= At) ? (p.current.tb = !0, Q = er, Ke = -Ke, We.points = [Ut(Ne, 0), Ut(De, 0)]) : p.current.tb = !1;
      }
      var Sn = Qt(dr), En = Ne[1] === De[1];
      if (Sn && Ne[1] === "l" && (hr > Ae.right || p.current.rl)) {
        var tr = ce;
        En ? tr -= Ee - he : tr = ve.x - ze.x - et;
        var xn = ot(tr, Q), gr = ot(tr, Q, X);
        // Of course use larger one
        xn > Ye || xn === Ye && (!te || // Choose recommend one
        gr >= At) ? (p.current.rl = !0, ce = tr, et = -et, We.points = [Ut(Ne, 1), Ut(De, 1)]) : p.current.rl = !1;
      }
      if (Sn && Ne[1] === "r" && (Te < Ae.left || p.current.lr)) {
        var Lt = ce;
        En ? Lt += Ee - he : Lt = qe.x - ie.x - et;
        var Pn = ot(Lt, Q), kn = ot(Lt, Q, X);
        // Of course use larger one
        Pn > Ye || Pn === Ye && (!te || // Choose recommend one
        kn >= At) ? (p.current.lr = !0, ce = Lt, et = -et, We.points = [Ut(Ne, 1), Ut(De, 1)]) : p.current.lr = !1;
      }
      Rn();
      var xt = Nt === !0 ? 0 : Nt;
      typeof xt == "number" && (Te < X.left && (ce -= Te - X.left - et, A.x + he < X.left + xt && (ce += A.x - X.left + he - xt)), hr > X.right && (ce -= hr - X.right - et, A.x > X.right - xt && (ce += A.x - X.right + xt)));
      var gt = $t === !0 ? 0 : $t;
      typeof gt == "number" && (It < X.top && (Q -= It - X.top - Ke, A.y + B < X.top + gt && (Q += A.y - X.top + B - gt)), Vt > X.bottom && (Q -= Vt - X.bottom - Ke, A.y > X.bottom - gt && (Q += A.y - X.bottom + gt)));
      var mr = D.x + ce, pr = mr + Ee, Pt = D.y + Q, Sa = Pt + fe, On = A.x, Ea = On + he, qr = A.y, xa = qr + B, Pa = Math.max(mr, On), ka = Math.min(pr, Ea), Tn = (Pa + ka) / 2, Oa = Tn - mr, Ta = Math.max(Pt, qr), Fn = Math.min(Sa, xa), Fa = (Ta + Fn) / 2, Ra = Fa - Pt;
      o == null || o(r, We);
      var Ur = Ve.right - D.x - (ce + D.width), kt = Ve.bottom - D.y - (Q + D.height);
      St === 1 && (ce = Math.round(ce), Ur = Math.round(Ur)), ht === 1 && (Q = Math.round(Q), kt = Math.round(kt));
      var Ma = {
        ready: !0,
        offsetX: ce / St,
        offsetY: Q / ht,
        offsetR: Ur / St,
        offsetB: kt / ht,
        arrowX: Oa / St,
        arrowY: Ra / ht,
        scaleX: St,
        scaleY: ht,
        align: We
      };
      l(Ma);
    }
  }), d = function() {
    f.current += 1;
    var w = f.current;
    Promise.resolve().then(function() {
      f.current === w && g();
    });
  }, b = function() {
    l(function(w) {
      return F(F({}, w), {}, {
        ready: !1
      });
    });
  };
  return Ue(b, [n]), Ue(function() {
    t || b();
  }, [t]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, d];
}
function ag(t, r, e, n, a) {
  Ue(function() {
    if (t && r && e) {
      let f = function() {
        n(), a();
      };
      var i = r, o = e, s = Xi(i), c = Xi(o), u = yn(o), l = new Set([u].concat(K(s), K(c)));
      return l.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), u.addEventListener("resize", f, {
        passive: !0
      }), n(), function() {
        l.forEach(function(v) {
          v.removeEventListener("scroll", f), u.removeEventListener("resize", f);
        });
      };
    }
  }, [t, r, e]);
}
function ig(t, r, e, n, a, i, o, s) {
  var c = h.useRef(t);
  c.current = t;
  var u = h.useRef(!1);
  h.useEffect(function() {
    if (r && n && (!a || i)) {
      var f = function() {
        u.current = !1;
      }, v = function(E) {
        var C;
        c.current && !o(((C = E.composedPath) === null || C === void 0 || (C = C.call(E)) === null || C === void 0 ? void 0 : C[0]) || E.target) && !u.current && s(!1);
      }, p = yn(n);
      p.addEventListener("pointerdown", f, !0), p.addEventListener("mousedown", v, !0), p.addEventListener("contextmenu", v, !0);
      var m = oa(e);
      if (m && (m.addEventListener("mousedown", v, !0), m.addEventListener("contextmenu", v, !0)), z.env.NODE_ENV !== "production") {
        var g, d, b = e == null || (g = e.getRootNode) === null || g === void 0 ? void 0 : g.call(e), y = (d = n.getRootNode) === null || d === void 0 ? void 0 : d.call(n);
        Rr(b === y, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        p.removeEventListener("pointerdown", f, !0), p.removeEventListener("mousedown", v, !0), p.removeEventListener("contextmenu", v, !0), m && (m.removeEventListener("mousedown", v, !0), m.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [r, e, n, a, i]);
  function l() {
    u.current = !0;
  }
  return l;
}
var og = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function sg() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vo, r = /* @__PURE__ */ h.forwardRef(function(e, n) {
    var a = e.prefixCls, i = a === void 0 ? "rc-trigger-popup" : a, o = e.children, s = e.action, c = s === void 0 ? "hover" : s, u = e.showAction, l = e.hideAction, f = e.popupVisible, v = e.defaultPopupVisible, p = e.onPopupVisibleChange, m = e.afterPopupVisibleChange, g = e.mouseEnterDelay, d = e.mouseLeaveDelay, b = d === void 0 ? 0.1 : d, y = e.focusDelay, w = e.blurDelay, E = e.mask, C = e.maskClosable, S = C === void 0 ? !0 : C, x = e.getPopupContainer, R = e.forceRender, M = e.autoDestroy, _ = e.destroyPopupOnHide, I = e.popup, j = e.popupClassName, V = e.popupStyle, $ = e.popupPlacement, U = e.builtinPlacements, O = U === void 0 ? {} : U, k = e.popupAlign, T = e.zIndex, N = e.stretch, A = e.getPopupClassNameFromAlign, L = e.fresh, G = e.alignPoint, W = e.onPopupClick, D = e.onPopupAlign, Z = e.arrow, ne = e.popupMotion, ae = e.maskMotion, Pe = e.popupTransitionName, le = e.popupAnimation, Ce = e.maskTransitionName, Se = e.maskAnimation, fe = e.className, Ee = e.getTriggerDOMNode, B = Ft(e, og), he = M || _ || !1, ge = h.useState(!1), Ie = H(ge, 2), ke = Ie[0], Me = Ie[1];
    Ue(function() {
      Me(Zh());
    }, []);
    var de = h.useRef({}), te = h.useContext(Es), _e = h.useMemo(function() {
      return {
        registerSubPopup: function(Y, me) {
          de.current[Y] = me, te == null || te.registerSubPopup(Y, me);
        }
      };
    }, [te]), X = eh(), ye = h.useState(null), Ae = H(ye, 2), Ve = Ae[0], St = Ae[1], ht = h.useRef(null), zr = lt(function(q) {
      ht.current = q, rn(q) && Ve !== q && St(q), te == null || te.registerSubPopup(X, q);
    }), Hr = h.useState(null), ur = H(Hr, 2), Je = ur[0], et = ur[1], Ke = h.useRef(null), Br = lt(function(q) {
      rn(q) && Je !== q && (et(q), Ke.current = q);
    }), Rt = h.Children.only(o), Xe = (Rt == null ? void 0 : Rt.props) || {}, Et = {}, Wr = lt(function(q) {
      var Y, me, Fe = Je;
      return (Fe == null ? void 0 : Fe.contains(q)) || ((Y = oa(Fe)) === null || Y === void 0 ? void 0 : Y.host) === q || q === Fe || (Ve == null ? void 0 : Ve.contains(q)) || ((me = oa(Ve)) === null || me === void 0 ? void 0 : me.host) === q || q === Ve || Object.values(de.current).some(function(we) {
        return (we == null ? void 0 : we.contains(q)) || q === we;
      });
    }), lr = Ps(i, ne, le, Pe), fr = Ps(i, ae, Se, Ce), Mt = h.useState(v || !1), De = H(Mt, 2), Ne = De[0], _t = De[1], be = f ?? Ne, We = lt(function(q) {
      f === void 0 && _t(q);
    });
    Ue(function() {
      _t(f || !1);
    }, [f]);
    var ce = h.useRef(be);
    ce.current = be;
    var Q = h.useRef([]);
    Q.current = [];
    var Ye = lt(function(q) {
      var Y;
      We(q), ((Y = Q.current[Q.current.length - 1]) !== null && Y !== void 0 ? Y : be) !== q && (Q.current.push(q), p == null || p(q));
    }), At = h.useRef(), ve = function() {
      clearTimeout(At.current);
    }, ie = function(Y) {
      var me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      ve(), me === 0 ? Ye(Y) : At.current = setTimeout(function() {
        Ye(Y);
      }, me * 1e3);
    };
    h.useEffect(function() {
      return ve;
    }, []);
    var qe = h.useState(!1), ze = H(qe, 2), tt = ze[0], dr = ze[1];
    Ue(function(q) {
      (!q || be) && dr(!0);
    }, [be]);
    var vr = h.useState(null), Nt = H(vr, 2), $t = Nt[0], Qt = Nt[1], It = h.useState(null), Vt = H(It, 2), Te = Vt[0], hr = Vt[1], Jt = function(Y) {
      hr([Y.clientX, Y.clientY]);
    }, bn = ng(be, Ve, G && Te !== null ? Te : Je, $, O, k, D), Le = H(bn, 11), wn = Le[0], wa = Le[1], er = Le[2], Cn = Le[3], Ca = Le[4], Sn = Le[5], En = Le[6], tr = Le[7], xn = Le[8], gr = Le[9], Lt = Le[10], Pn = eg(ke, c, u, l), kn = H(Pn, 2), xt = kn[0], gt = kn[1], mr = xt.has("click"), pr = gt.has("click") || gt.has("contextMenu"), Pt = lt(function() {
      tt || Lt();
    }), Sa = function() {
      ce.current && G && pr && ie(!1);
    };
    ag(be, Je, Ve, Pt, Sa), Ue(function() {
      Pt();
    }, [Te, $]), Ue(function() {
      be && !(O != null && O[$]) && Pt();
    }, [JSON.stringify(k)]);
    var On = h.useMemo(function() {
      var q = rg(O, i, gr, G);
      return Ze(q, A == null ? void 0 : A(gr));
    }, [gr, A, O, i, G]);
    h.useImperativeHandle(n, function() {
      return {
        nativeElement: Ke.current,
        popupElement: ht.current,
        forceAlign: Pt
      };
    });
    var Ea = h.useState(0), qr = H(Ea, 2), xa = qr[0], Pa = qr[1], ka = h.useState(0), Tn = H(ka, 2), Oa = Tn[0], Ta = Tn[1], Fn = function() {
      if (N && Je) {
        var Y = Je.getBoundingClientRect();
        Pa(Y.width), Ta(Y.height);
      }
    }, Fa = function() {
      Fn(), Pt();
    }, Ra = function(Y) {
      dr(!1), Lt(), m == null || m(Y);
    }, Ur = function() {
      return new Promise(function(Y) {
        Fn(), Qt(function() {
          return Y;
        });
      });
    };
    Ue(function() {
      $t && (Lt(), $t(), Qt(null));
    }, [$t]);
    function kt(q, Y, me, Fe) {
      Et[q] = function(we) {
        var _n;
        Fe == null || Fe(we), ie(Y, me);
        for (var $a = arguments.length, go = new Array($a > 1 ? $a - 1 : 0), An = 1; An < $a; An++)
          go[An - 1] = arguments[An];
        (_n = Xe[q]) === null || _n === void 0 || _n.call.apply(_n, [Xe, we].concat(go));
      };
    }
    (mr || pr) && (Et.onClick = function(q) {
      var Y;
      ce.current && pr ? ie(!1) : !ce.current && mr && (Jt(q), ie(!0));
      for (var me = arguments.length, Fe = new Array(me > 1 ? me - 1 : 0), we = 1; we < me; we++)
        Fe[we - 1] = arguments[we];
      (Y = Xe.onClick) === null || Y === void 0 || Y.call.apply(Y, [Xe, q].concat(Fe));
    });
    var Ma = ig(be, pr, Je, Ve, E, S, Wr, ie), ot = xt.has("hover"), Rn = gt.has("hover"), yr, Wt;
    ot && (kt("onMouseEnter", !0, g, function(q) {
      Jt(q);
    }), kt("onPointerEnter", !0, g, function(q) {
      Jt(q);
    }), yr = function(Y) {
      (be || tt) && Ve !== null && Ve !== void 0 && Ve.contains(Y.target) && ie(!0, g);
    }, G && (Et.onMouseMove = function(q) {
      var Y;
      (Y = Xe.onMouseMove) === null || Y === void 0 || Y.call(Xe, q);
    })), Rn && (kt("onMouseLeave", !1, b), kt("onPointerLeave", !1, b), Wt = function() {
      ie(!1, b);
    }), xt.has("focus") && kt("onFocus", !0, y), gt.has("focus") && kt("onBlur", !1, w), xt.has("contextMenu") && (Et.onContextMenu = function(q) {
      var Y;
      ce.current && gt.has("contextMenu") ? ie(!1) : (Jt(q), ie(!0)), q.preventDefault();
      for (var me = arguments.length, Fe = new Array(me > 1 ? me - 1 : 0), we = 1; we < me; we++)
        Fe[we - 1] = arguments[we];
      (Y = Xe.onContextMenu) === null || Y === void 0 || Y.call.apply(Y, [Xe, q].concat(Fe));
    }), fe && (Et.className = Ze(Xe.className, fe));
    var qt = F(F({}, Xe), Et), Gr = {}, Mn = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Mn.forEach(function(q) {
      B[q] && (Gr[q] = function() {
        for (var Y, me = arguments.length, Fe = new Array(me), we = 0; we < me; we++)
          Fe[we] = arguments[we];
        (Y = qt[q]) === null || Y === void 0 || Y.call.apply(Y, [qt].concat(Fe)), B[q].apply(B, Fe);
      });
    });
    var _a = /* @__PURE__ */ h.cloneElement(Rt, F(F({}, qt), Gr)), Aa = {
      x: Sn,
      y: En
    }, Na = Z ? F({}, Z !== !0 ? Z : {}) : null;
    return /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(fa, {
      disabled: !be,
      ref: Br,
      onResize: Fa
    }, /* @__PURE__ */ h.createElement(lu, {
      getTriggerDOMNode: Ee
    }, _a)), /* @__PURE__ */ h.createElement(Es.Provider, {
      value: _e
    }, /* @__PURE__ */ h.createElement(uu, {
      portal: t,
      ref: zr,
      prefixCls: i,
      popup: I,
      className: Ze(j, On),
      style: V,
      target: Je,
      onMouseEnter: yr,
      onMouseLeave: Wt,
      onPointerEnter: yr,
      zIndex: T,
      open: be,
      keepDom: tt,
      fresh: L,
      onClick: W,
      onPointerDownCapture: Ma,
      mask: E,
      motion: lr,
      maskMotion: fr,
      onVisibleChanged: Ra,
      onPrepare: Ur,
      forceRender: R,
      autoDestroy: he,
      getPopupContainer: x,
      align: gr,
      arrow: Na,
      arrowPos: Aa,
      ready: wn,
      offsetX: wa,
      offsetY: er,
      offsetR: Cn,
      offsetB: Ca,
      onAlign: Pt,
      stretch: N,
      targetWidth: xa / tr,
      targetHeight: Oa / xn
    })));
  });
  return z.env.NODE_ENV !== "production" && (r.displayName = "Trigger"), r;
}
const cg = sg(vo);
var ug = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, lg = function(r, e) {
  return /* @__PURE__ */ h.createElement(Dr, dt({}, r, {
    ref: e,
    icon: ug
  }));
}, fg = /* @__PURE__ */ h.forwardRef(lg);
z.env.NODE_ENV !== "production" && (fg.displayName = "CheckOutlined");
function fu(t) {
  var r = t.children, e = t.prefixCls, n = t.id, a = t.overlayInnerStyle, i = t.className, o = t.style;
  return /* @__PURE__ */ h.createElement("div", {
    className: Ze("".concat(e, "-content"), i),
    style: o
  }, /* @__PURE__ */ h.createElement("div", {
    className: "".concat(e, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof r == "function" ? r() : r));
}
var Er = {
  shiftX: 64,
  adjustY: 1
}, xr = {
  adjustX: 1,
  shiftY: !0
}, ut = [0, 0], dg = {
  left: {
    points: ["cr", "cl"],
    overflow: xr,
    offset: [-4, 0],
    targetOffset: ut
  },
  right: {
    points: ["cl", "cr"],
    overflow: xr,
    offset: [4, 0],
    targetOffset: ut
  },
  top: {
    points: ["bc", "tc"],
    overflow: Er,
    offset: [0, -4],
    targetOffset: ut
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Er,
    offset: [0, 4],
    targetOffset: ut
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Er,
    offset: [0, -4],
    targetOffset: ut
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: xr,
    offset: [-4, 0],
    targetOffset: ut
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Er,
    offset: [0, -4],
    targetOffset: ut
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: xr,
    offset: [4, 0],
    targetOffset: ut
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Er,
    offset: [0, 4],
    targetOffset: ut
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: xr,
    offset: [4, 0],
    targetOffset: ut
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Er,
    offset: [0, 4],
    targetOffset: ut
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: xr,
    offset: [-4, 0],
    targetOffset: ut
  }
}, vg = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], hg = function(r, e) {
  var n = r.overlayClassName, a = r.trigger, i = a === void 0 ? ["hover"] : a, o = r.mouseEnterDelay, s = o === void 0 ? 0 : o, c = r.mouseLeaveDelay, u = c === void 0 ? 0.1 : c, l = r.overlayStyle, f = r.prefixCls, v = f === void 0 ? "rc-tooltip" : f, p = r.children, m = r.onVisibleChange, g = r.afterVisibleChange, d = r.transitionName, b = r.animation, y = r.motion, w = r.placement, E = w === void 0 ? "right" : w, C = r.align, S = C === void 0 ? {} : C, x = r.destroyTooltipOnHide, R = x === void 0 ? !1 : x, M = r.defaultVisible, _ = r.getTooltipContainer, I = r.overlayInnerStyle;
  r.arrowContent;
  var j = r.overlay, V = r.id, $ = r.showArrow, U = $ === void 0 ? !0 : $, O = Ft(r, vg), k = h.useRef(null);
  h.useImperativeHandle(e, function() {
    return k.current;
  });
  var T = F({}, O);
  "visible" in r && (T.popupVisible = r.visible);
  var N = function() {
    return /* @__PURE__ */ h.createElement(fu, {
      key: "content",
      prefixCls: v,
      id: V,
      overlayInnerStyle: I
    }, j);
  };
  return /* @__PURE__ */ h.createElement(cg, dt({
    popupClassName: n,
    prefixCls: v,
    popup: N,
    action: i,
    builtinPlacements: dg,
    popupPlacement: E,
    ref: k,
    popupAlign: S,
    getPopupContainer: _,
    onPopupVisibleChange: m,
    afterPopupVisibleChange: g,
    popupTransitionName: d,
    popupAnimation: b,
    popupMotion: y,
    defaultPopupVisible: M,
    autoDestroy: R,
    mouseLeaveDelay: u,
    popupStyle: l,
    mouseEnterDelay: s,
    arrow: U
  }, T), p);
};
const gg = /* @__PURE__ */ h.forwardRef(hg);
function mg(t) {
  const {
    sizePopupArrow: r,
    borderRadiusXS: e,
    borderRadiusOuter: n
  } = t, a = r / 2, i = 0, o = a, s = n * 1 / Math.sqrt(2), c = a - n * (1 - 1 / Math.sqrt(2)), u = a - e * (1 / Math.sqrt(2)), l = n * (Math.sqrt(2) - 1) + e * (1 / Math.sqrt(2)), f = 2 * a - u, v = l, p = 2 * a - s, m = c, g = 2 * a - i, d = o, b = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), y = n * (Math.sqrt(2) - 1), w = `polygon(${y}px 100%, 50% ${y}px, ${2 * a - y}px 100%, ${y}px 100%)`, E = `path('M ${i} ${o} A ${n} ${n} 0 0 0 ${s} ${c} L ${u} ${l} A ${e} ${e} 0 0 1 ${f} ${v} L ${p} ${m} A ${n} ${n} 0 0 0 ${g} ${d} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: E,
    arrowPolygon: w
  };
}
const pg = (t, r, e) => {
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
        value: `0 0 ${Zt(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: e,
      zIndex: 0,
      background: "transparent"
    }
  };
}, du = 8;
function vu(t) {
  const {
    contentRadius: r,
    limitVerticalRadius: e
  } = t, n = r > 12 ? r + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: e ? du : n
  };
}
function qn(t, r) {
  return t ? r : {};
}
function yg(t, r, e) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: a,
    arrowOffsetVertical: i,
    arrowOffsetHorizontal: o
  } = t, {
    arrowDistance: s = 0,
    arrowPlacement: c = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, pg(t, r, a)), {
        "&:before": {
          background: r
        }
      })]
    }, qn(!!c.top, {
      [[`&-placement-top > ${n}-arrow`, `&-placement-topLeft > ${n}-arrow`, `&-placement-topRight > ${n}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": o,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: o
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${Zt(o)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: o
          }
        }
      }
    })), qn(!!c.bottom, {
      [[`&-placement-bottom > ${n}-arrow`, `&-placement-bottomLeft > ${n}-arrow`, `&-placement-bottomRight > ${n}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": o,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: o
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${Zt(o)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: o
          }
        }
      }
    })), qn(!!c.left, {
      [[`&-placement-left > ${n}-arrow`, `&-placement-leftTop > ${n}-arrow`, `&-placement-leftBottom > ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${n}-arrow`]: {
        top: i
      },
      [`&-placement-leftBottom > ${n}-arrow`]: {
        bottom: i
      }
    })), qn(!!c.right, {
      [[`&-placement-right > ${n}-arrow`, `&-placement-rightTop > ${n}-arrow`, `&-placement-rightBottom > ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${n}-arrow`]: {
        top: i
      },
      [`&-placement-rightBottom > ${n}-arrow`]: {
        bottom: i
      }
    }))
  };
}
function bg(t, r, e, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const a = n && typeof n == "object" ? n : {}, i = {};
  switch (t) {
    case "top":
    case "bottom":
      i.shiftX = r.arrowOffsetHorizontal * 2 + e, i.shiftY = !0, i.adjustY = !0;
      break;
    case "left":
    case "right":
      i.shiftY = r.arrowOffsetVertical * 2 + e, i.shiftX = !0, i.adjustX = !0;
      break;
  }
  const o = Object.assign(Object.assign({}, i), a);
  return o.shiftX || (o.adjustX = !0), o.shiftY || (o.adjustY = !0), o;
}
const Rs = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, wg = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, Cg = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function Sg(t) {
  const {
    arrowWidth: r,
    autoAdjustOverflow: e,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: i,
    visibleFirst: o
  } = t, s = r / 2, c = {};
  return Object.keys(Rs).forEach((u) => {
    const l = n && wg[u] || Rs[u], f = Object.assign(Object.assign({}, l), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (c[u] = f, Cg.has(u) && (f.autoArrow = !1), u) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -s - a;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = s + a;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -s - a;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = s + a;
        break;
    }
    const v = vu({
      contentRadius: i,
      limitVerticalRadius: !0
    });
    if (n)
      switch (u) {
        case "topLeft":
        case "bottomLeft":
          f.offset[0] = -v.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          f.offset[0] = v.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          f.offset[1] = -v.arrowOffsetHorizontal * 2 + s;
          break;
        case "leftBottom":
        case "rightBottom":
          f.offset[1] = v.arrowOffsetHorizontal * 2 - s;
          break;
      }
    f.overflow = bg(u, v, r, e), o && (f.htmlRegion = "visibleFirst");
  }), c;
}
const Eg = (t) => {
  const {
    componentCls: r,
    // ant-tooltip
    tooltipMaxWidth: e,
    tooltipColor: n,
    tooltipBg: a,
    tooltipBorderRadius: i,
    zIndexPopup: o,
    controlHeight: s,
    boxShadowSecondary: c,
    paddingSM: u,
    paddingXS: l
  } = t;
  return [
    {
      [r]: Object.assign(Object.assign(Object.assign(Object.assign({}, md(t)), {
        position: "absolute",
        zIndex: o,
        display: "block",
        width: "max-content",
        maxWidth: e,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${r}-inner`]: {
          minWidth: "1em",
          minHeight: s,
          padding: `${Zt(t.calc(u).div(2).equal())} ${Zt(l)}`,
          color: n,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: i,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${r}-inner`]: {
            borderRadius: t.min(i, du)
          }
        },
        [`${r}-content`]: {
          position: "relative"
        }
      }), Sd(t, (f, v) => {
        let {
          darkColor: p
        } = v;
        return {
          [`&${r}-${f}`]: {
            [`${r}-inner`]: {
              backgroundColor: p
            },
            [`${r}-arrow`]: {
              "--antd-arrow-background-color": p
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    yg(t, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${r}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: t.sizePopupArrow
      }
    }
  ];
}, xg = (t) => Object.assign(Object.assign({
  zIndexPopup: t.zIndexPopupBase + 70
}, vu({
  contentRadius: t.borderRadius,
  limitVerticalRadius: !0
})), mg(ba(t, {
  borderRadiusOuter: Math.min(t.borderRadiusOuter, 4)
}))), hu = function(t) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Cd("Tooltip", (n) => {
    const {
      borderRadius: a,
      colorTextLightSolid: i,
      colorBgSpotlight: o
    } = n, s = ba(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: i,
      tooltipBorderRadius: a,
      tooltipBg: o
    });
    return [Eg(s), Wv(n, "zoom-big-fast")];
  }, xg, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: r
  })(t);
}, Pg = ia.map((t) => `${t}-inverse`);
function kg(t) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(K(Pg), K(ia)).includes(t) : ia.includes(t);
}
function gu(t, r) {
  const e = kg(r), n = Ze({
    [`${t}-${r}`]: r && e
  }), a = {}, i = {};
  return r && !e && (a.background = r, i["--antd-arrow-background-color"] = r), {
    className: n,
    overlayStyle: a,
    arrowStyle: i
  };
}
const Og = (t) => {
  const {
    prefixCls: r,
    className: e,
    placement: n = "top",
    title: a,
    color: i,
    overlayInnerStyle: o
  } = t, {
    getPrefixCls: s
  } = h.useContext(or), c = s("tooltip", r), [u, l, f] = hu(c), v = gu(c, i), p = v.arrowStyle, m = Object.assign(Object.assign({}, o), v.overlayStyle), g = Ze(l, f, c, `${c}-pure`, `${c}-placement-${n}`, e, v.className);
  return u(/* @__PURE__ */ h.createElement("div", {
    className: g,
    style: p
  }, /* @__PURE__ */ h.createElement("div", {
    className: `${c}-arrow`
  }), /* @__PURE__ */ h.createElement(fu, Object.assign({}, t, {
    className: l,
    prefixCls: c,
    overlayInnerStyle: m
  }), a)));
};
var Tg = function(t, r) {
  var e = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
};
const Fg = /* @__PURE__ */ h.forwardRef((t, r) => {
  var e, n;
  const {
    prefixCls: a,
    openClassName: i,
    getTooltipContainer: o,
    overlayClassName: s,
    color: c,
    overlayInnerStyle: u,
    children: l,
    afterOpenChange: f,
    afterVisibleChange: v,
    destroyTooltipOnHide: p,
    arrow: m = !0,
    title: g,
    overlay: d,
    builtinPlacements: b,
    arrowPointAtCenter: y = !1,
    autoAdjustOverflow: w = !0
  } = t, E = !!m, [, C] = hn(), {
    getPopupContainer: S,
    getPrefixCls: x,
    direction: R
  } = h.useContext(or), M = Vr("Tooltip"), _ = h.useRef(null), I = () => {
    var X;
    (X = _.current) === null || X === void 0 || X.forceAlign();
  };
  h.useImperativeHandle(r, () => {
    var X;
    return {
      forceAlign: I,
      forcePopupAlign: () => {
        M.deprecated(!1, "forcePopupAlign", "forceAlign"), I();
      },
      nativeElement: (X = _.current) === null || X === void 0 ? void 0 : X.nativeElement
    };
  }), z.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((X) => {
    let [ye, Ae] = X;
    M.deprecated(!(ye in t), ye, Ae);
  }), z.env.NODE_ENV !== "production" && M(!p || typeof p == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), z.env.NODE_ENV !== "production" && M(!m || typeof m == "boolean" || !("arrowPointAtCenter" in m), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [j, V] = nd(!1, {
    value: (e = t.open) !== null && e !== void 0 ? e : t.visible,
    defaultValue: (n = t.defaultOpen) !== null && n !== void 0 ? n : t.defaultVisible
  }), $ = !g && !d && g !== 0, U = (X) => {
    var ye, Ae;
    V($ ? !1 : X), $ || ((ye = t.onOpenChange) === null || ye === void 0 || ye.call(t, X), (Ae = t.onVisibleChange) === null || Ae === void 0 || Ae.call(t, X));
  }, O = h.useMemo(() => {
    var X, ye;
    let Ae = y;
    return typeof m == "object" && (Ae = (ye = (X = m.pointAtCenter) !== null && X !== void 0 ? X : m.arrowPointAtCenter) !== null && ye !== void 0 ? ye : y), b || Sg({
      arrowPointAtCenter: Ae,
      autoAdjustOverflow: w,
      arrowWidth: E ? C.sizePopupArrow : 0,
      borderRadius: C.borderRadius,
      offset: C.marginXXS,
      visibleFirst: !0
    });
  }, [y, m, b, C]), k = h.useMemo(() => g === 0 ? g : d || g || "", [d, g]), T = /* @__PURE__ */ h.createElement(Yh, {
    space: !0
  }, typeof k == "function" ? k() : k), {
    getPopupContainer: N,
    placement: A = "top",
    mouseEnterDelay: L = 0.1,
    mouseLeaveDelay: G = 0.1,
    overlayStyle: W,
    rootClassName: D
  } = t, Z = Tg(t, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), ne = x("tooltip", a), ae = x(), Pe = t["data-popover-inject"];
  let le = j;
  !("open" in t) && !("visible" in t) && $ && (le = !1);
  const Ce = /* @__PURE__ */ h.isValidElement(l) && !yv(l) ? l : /* @__PURE__ */ h.createElement("span", null, l), Se = Ce.props, fe = !Se.className || typeof Se.className == "string" ? Ze(Se.className, i || `${ne}-open`) : Se.className, [Ee, B, he] = hu(ne, !Pe), ge = gu(ne, c), Ie = ge.arrowStyle, ke = Object.assign(Object.assign({}, u), ge.overlayStyle), Me = Ze(s, {
    [`${ne}-rtl`]: R === "rtl"
  }, ge.className, D, B, he), [de, te] = kv("Tooltip", Z.zIndex), _e = /* @__PURE__ */ h.createElement(gg, Object.assign({}, Z, {
    zIndex: de,
    showArrow: E,
    placement: A,
    mouseEnterDelay: L,
    mouseLeaveDelay: G,
    prefixCls: ne,
    overlayClassName: Me,
    overlayStyle: Object.assign(Object.assign({}, Ie), W),
    getTooltipContainer: N || o || S,
    ref: _,
    builtinPlacements: O,
    overlay: T,
    visible: le,
    onVisibleChange: U,
    afterVisibleChange: f ?? v,
    overlayInnerStyle: ke,
    arrowContent: /* @__PURE__ */ h.createElement("span", {
      className: `${ne}-arrow-content`
    }),
    motion: {
      motionName: Ov(ae, "zoom-big-fast", t.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!p
  }), le ? wv(Ce, {
    className: fe
  }) : Ce);
  return Ee(/* @__PURE__ */ h.createElement(fo.Provider, {
    value: te
  }, _e));
}), mu = Fg;
z.env.NODE_ENV !== "production" && (mu.displayName = "Tooltip");
mu._InternalPanelDoNotUseOrYouWillBeFired = Og;
export {
  Vg as $,
  Zt as A,
  Lg as B,
  lo as C,
  Dg as D,
  Ri as E,
  zg as F,
  Ng as G,
  Lr as H,
  Dr as I,
  Ue as J,
  vt as K,
  bc as L,
  $g as M,
  pd as N,
  hv as O,
  fg as P,
  pv as Q,
  fa as R,
  fn as S,
  Pu as T,
  cg as U,
  Hg as V,
  K as W,
  pe as X,
  Fo as Y,
  md as Z,
  gn as _,
  Ct as a,
  Ge as a0,
  mg as a1,
  pg as a2,
  Ig as a3,
  Ki as a4,
  kv as a5,
  Yh as a6,
  Io as a7,
  mu as a8,
  Qe as a9,
  Wa as aa,
  Ze as b,
  Ns as c,
  Fi as d,
  or as e,
  lt as f,
  jg as g,
  wv as h,
  Tv as i,
  Vr as j,
  yv as k,
  ya as l,
  sr as m,
  cr as n,
  He as o,
  Be as p,
  H as q,
  Zr as r,
  ua as s,
  nd as t,
  hn as u,
  _v as v,
  ra as w,
  ba as x,
  jf as y,
  Cd as z
};
