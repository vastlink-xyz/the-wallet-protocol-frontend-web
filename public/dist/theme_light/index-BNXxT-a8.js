import { R as bt, a as f, p as H, b as qa, $ as Wa } from "./vendor-react-DSEtE0wE.js";
import { Z as Ha, aj as Sn, ak as Nn, J as kt, H as Tt, az as $n, aO as xn, aP as tn, aQ as cn, aR as Tn, _ as W, o as et, E as An, au as Ba, n as Ae, K as De, aE as Gt, z as D, p as Fe, aS as fa, aT as fn, A as de, aU as Ua, aV as da, aW as Ka, al as q, ah as Xt, ai as Ze, aX as Kt, aY as pt, aZ as lt, a_ as Dn, an as va, ax as Za, a$ as Ga, b0 as dn, b1 as vn, q as Qt, N as Ja, M as ha, O as Qa, m as ma, ay as Ya, v as Xa, X as ei, b2 as ti } from "./main-DuqIT5w7.js";
import { _ as At } from "./vendor-ui-utils-CGOon9_P.js";
import { p as N, _ as ge, q as C, r as er } from "./vendor-web3-CQEmmIwE.js";
import { g as rn } from "./vendor-walletconnect-BTBFp_yD.js";
function Or(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [];
  return bt.Children.forEach(r, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? e = e.concat(Or(n)) : Ha.isFragment(n) && n.props ? e = e.concat(Or(n.props.children, t)) : e.push(n));
  }), e;
}
var hn = /* @__PURE__ */ f.createContext(null);
function ri(r) {
  var t = r.children, e = r.onBatchResize, n = f.useRef(0), a = f.useRef([]), i = f.useContext(hn), o = f.useCallback(function(s, u, c) {
    n.current += 1;
    var l = n.current;
    a.current.push({
      size: s,
      element: u,
      data: c
    }), Promise.resolve().then(function() {
      l === n.current && (e == null || e(a.current), a.current = []);
    }), i == null || i(s, u, c);
  }, [e, i]);
  return /* @__PURE__ */ f.createElement(hn.Provider, {
    value: o
  }, t);
}
var ga = function() {
  if (typeof Map < "u")
    return Map;
  function r(t, e) {
    var n = -1;
    return t.some(function(a, i) {
      return a[0] === e ? (n = i, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(e) {
        var n = r(this.__entries__, e), a = this.__entries__[n];
        return a && a[1];
      }, t.prototype.set = function(e, n) {
        var a = r(this.__entries__, e);
        ~a ? this.__entries__[a][1] = n : this.__entries__.push([e, n]);
      }, t.prototype.delete = function(e) {
        var n = this.__entries__, a = r(n, e);
        ~a && n.splice(a, 1);
      }, t.prototype.has = function(e) {
        return !!~r(this.__entries__, e);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(e, n) {
        n === void 0 && (n = null);
        for (var a = 0, i = this.__entries__; a < i.length; a++) {
          var o = i[a];
          e.call(n, o[1], o[0]);
        }
      }, t;
    }()
  );
}(), mn = typeof window < "u" && typeof document < "u" && window.document === document, Vr = function() {
  return typeof rn < "u" && rn.Math === Math ? rn : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), ni = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Vr) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), ai = 2;
function ii(r, t) {
  var e = !1, n = !1, a = 0;
  function i() {
    e && (e = !1, r()), n && s();
  }
  function o() {
    ni(i);
  }
  function s() {
    var u = Date.now();
    if (e) {
      if (u - a < ai)
        return;
      n = !0;
    } else
      e = !0, n = !1, setTimeout(o, t);
    a = u;
  }
  return s;
}
var oi = 20, si = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], ui = typeof MutationObserver < "u", li = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = ii(this.refresh.bind(this), oi);
    }
    return r.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, r.prototype.removeObserver = function(t) {
      var e = this.observers_, n = e.indexOf(t);
      ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_();
    }, r.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, r.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(e) {
        return e.gatherActive(), e.hasActive();
      });
      return t.forEach(function(e) {
        return e.broadcastActive();
      }), t.length > 0;
    }, r.prototype.connect_ = function() {
      !mn || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), ui ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !mn || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(t) {
      var e = t.propertyName, n = e === void 0 ? "" : e, a = si.some(function(i) {
        return !!~n.indexOf(i);
      });
      a && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), pa = function(r, t) {
  for (var e = 0, n = Object.keys(t); e < n.length; e++) {
    var a = n[e];
    Object.defineProperty(r, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return r;
}, Mt = function(r) {
  var t = r && r.ownerDocument && r.ownerDocument.defaultView;
  return t || Vr;
}, ya = $r(0, 0, 0, 0);
function Rr(r) {
  return parseFloat(r) || 0;
}
function In(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return t.reduce(function(n, a) {
    var i = r["border-" + a + "-width"];
    return n + Rr(i);
  }, 0);
}
function ci(r) {
  for (var t = ["top", "right", "bottom", "left"], e = {}, n = 0, a = t; n < a.length; n++) {
    var i = a[n], o = r["padding-" + i];
    e[i] = Rr(o);
  }
  return e;
}
function fi(r) {
  var t = r.getBBox();
  return $r(0, 0, t.width, t.height);
}
function di(r) {
  var t = r.clientWidth, e = r.clientHeight;
  if (!t && !e)
    return ya;
  var n = Mt(r).getComputedStyle(r), a = ci(n), i = a.left + a.right, o = a.top + a.bottom, s = Rr(n.width), u = Rr(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= In(n, "left", "right") + i), Math.round(u + o) !== e && (u -= In(n, "top", "bottom") + o)), !hi(r)) {
    var c = Math.round(s + i) - t, l = Math.round(u + o) - e;
    Math.abs(c) !== 1 && (s -= c), Math.abs(l) !== 1 && (u -= l);
  }
  return $r(a.left, a.top, s, u);
}
var vi = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(r) {
    return r instanceof Mt(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof Mt(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function hi(r) {
  return r === Mt(r).document.documentElement;
}
function mi(r) {
  return mn ? vi(r) ? fi(r) : di(r) : ya;
}
function gi(r) {
  var t = r.x, e = r.y, n = r.width, a = r.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(i.prototype);
  return pa(o, {
    x: t,
    y: e,
    width: n,
    height: a,
    top: e,
    right: t + n,
    bottom: a + e,
    left: t
  }), o;
}
function $r(r, t, e, n) {
  return { x: r, y: t, width: e, height: n };
}
var pi = (
  /** @class */
  function() {
    function r(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = $r(0, 0, 0, 0), this.target = t;
    }
    return r.prototype.isActive = function() {
      var t = mi(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, r;
  }()
), yi = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t, e) {
      var n = gi(e);
      pa(this, { target: t, contentRect: n });
    }
    return r;
  }()
), bi = (
  /** @class */
  function() {
    function r(t, e, n) {
      if (this.activeObservations_ = [], this.observations_ = new ga(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n;
    }
    return r.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Mt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) || (e.set(t, new pi(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, r.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Mt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
      }
    }, r.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, r.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(e) {
        e.isActive() && t.activeObservations_.push(e);
      });
    }, r.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, e = this.activeObservations_.map(function(n) {
          return new yi(n.target, n.broadcastRect());
        });
        this.callback_.call(t, e, t), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), ba = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ga(), wa = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var e = li.getInstance(), n = new bi(t, e, this);
      ba.set(this, n);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  wa.prototype[r] = function() {
    var t;
    return (t = ba.get(this))[r].apply(t, arguments);
  };
});
var wi = function() {
  return typeof Vr.ResizeObserver < "u" ? Vr.ResizeObserver : wa;
}(), tt = /* @__PURE__ */ new Map();
function Ca(r) {
  r.forEach(function(t) {
    var e, n = t.target;
    (e = tt.get(n)) === null || e === void 0 || e.forEach(function(a) {
      return a(n);
    });
  });
}
var Fa = new wi(Ca);
H.env.NODE_ENV;
H.env.NODE_ENV;
function Ci(r, t) {
  tt.has(r) || (tt.set(r, /* @__PURE__ */ new Set()), Fa.observe(r)), tt.get(r).add(t);
}
function Fi(r, t) {
  tt.has(r) && (tt.get(r).delete(t), tt.get(r).size || (Fa.unobserve(r), tt.delete(r)));
}
var Ei = /* @__PURE__ */ function(r) {
  Sn(e, r);
  var t = Nn(e);
  function e() {
    return kt(this, e), t.apply(this, arguments);
  }
  return Tt(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(f.Component);
function Pi(r, t) {
  var e = r.children, n = r.disabled, a = f.useRef(null), i = f.useRef(null), o = f.useContext(hn), s = typeof e == "function", u = s ? e(a) : e, c = f.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ f.isValidElement(u) && $n(u), v = l ? u.ref : null, m = xn(v, a), y = function() {
    var b;
    return tn(a.current) || // Support `nativeElement` format
    (a.current && ge(a.current) === "object" ? tn((b = a.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || tn(i.current);
  };
  f.useImperativeHandle(t, function() {
    return y();
  });
  var h = f.useRef(r);
  h.current = r;
  var g = f.useCallback(function(d) {
    var b = h.current, p = b.onResize, w = b.data, P = d.getBoundingClientRect(), F = P.width, E = P.height, R = d.offsetWidth, x = d.offsetHeight, O = Math.floor(F), V = Math.floor(E);
    if (c.current.width !== O || c.current.height !== V || c.current.offsetWidth !== R || c.current.offsetHeight !== x) {
      var $ = {
        width: O,
        height: V,
        offsetWidth: R,
        offsetHeight: x
      };
      c.current = $;
      var A = R === Math.round(F) ? F : R, k = x === Math.round(E) ? E : x, M = N(N({}, $), {}, {
        offsetWidth: A,
        offsetHeight: k
      });
      o == null || o(M, d, w), p && Promise.resolve().then(function() {
        p(M, d);
      });
    }
  }, []);
  return f.useEffect(function() {
    var d = y();
    return d && !n && Ci(d, g), function() {
      return Fi(d, g);
    };
  }, [a.current, n]), /* @__PURE__ */ f.createElement(Ei, {
    ref: i
  }, l ? /* @__PURE__ */ f.cloneElement(u, {
    ref: m
  }) : u);
}
var Ea = /* @__PURE__ */ f.forwardRef(Pi);
H.env.NODE_ENV !== "production" && (Ea.displayName = "SingleObserver");
var Oi = "rc-observer-key";
function Vi(r, t) {
  var e = r.children, n = typeof e == "function" ? [e] : Or(e);
  return H.env.NODE_ENV !== "production" && (n.length > 1 ? cn(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && cn(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(a, i) {
    var o = (a == null ? void 0 : a.key) || "".concat(Oi, "-").concat(i);
    return /* @__PURE__ */ f.createElement(Ea, At({}, r, {
      key: o,
      ref: i === 0 ? t : void 0
    }), a);
  });
}
var xr = /* @__PURE__ */ f.forwardRef(Vi);
H.env.NODE_ENV !== "production" && (xr.displayName = "ResizeObserver");
xr.Collection = ri;
function nn(r) {
  return r !== void 0;
}
function Ri(r, t) {
  var e = t || {}, n = e.defaultValue, a = e.value, i = e.onChange, o = e.postState, s = Tn(function() {
    return nn(a) ? a : nn(n) ? typeof n == "function" ? n() : n : typeof r == "function" ? r() : r;
  }), u = W(s, 2), c = u[0], l = u[1], v = a !== void 0 ? a : c, m = o ? o(v) : v, y = et(i), h = Tn([v]), g = W(h, 2), d = g[0], b = g[1];
  An(function() {
    var w = d[0];
    c !== w && y(c, w);
  }, [d]), An(function() {
    nn(a) || l(a);
  }, [a]);
  var p = et(function(w, P) {
    l(w, P), b([v], P);
  });
  return [m, p];
}
const Sr = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function Si(r, t) {
  return Sr.reduce((e, n) => {
    const a = r[`${n}1`], i = r[`${n}3`], o = r[`${n}6`], s = r[`${n}7`];
    return Object.assign(Object.assign({}, e), t(n, {
      lightColor: a,
      lightBorderColor: i,
      darkColor: o,
      textColor: s
    }));
  }, {});
}
function Ni(r) {
  return r && /* @__PURE__ */ bt.isValidElement(r) && r.type === bt.Fragment;
}
const $i = (r, t, e) => /* @__PURE__ */ bt.isValidElement(r) ? /* @__PURE__ */ bt.cloneElement(r, typeof e == "function" ? e(r.props || {}) : e) : t;
function xi(r, t) {
  return $i(r, r, t);
}
const an = () => ({
  height: 0,
  opacity: 0
}), Ln = (r) => {
  const {
    scrollHeight: t
  } = r;
  return {
    height: t,
    opacity: 1
  };
}, Mi = (r) => ({
  height: r ? r.offsetHeight : 0
}), on = (r, t) => (t == null ? void 0 : t.deadline) === !0 || t.propertyName === "height", Ls = function() {
  return {
    motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ba}-motion-collapse`,
    onAppearStart: an,
    onEnterStart: an,
    onAppearActive: Ln,
    onEnterActive: Ln,
    onLeaveStart: Mi,
    onLeaveActive: an,
    onAppearEnd: on,
    onEnterEnd: on,
    onLeaveEnd: on,
    motionDeadline: 500
  };
}, _i = (r, t, e) => e !== void 0 ? e : `${r}-${t}`, ki = function(r) {
  if (!r)
    return !1;
  if (r instanceof Element) {
    if (r.offsetParent)
      return !0;
    if (r.getBBox) {
      var t = r.getBBox(), e = t.width, n = t.height;
      if (e || n)
        return !0;
    }
    if (r.getBoundingClientRect) {
      var a = r.getBoundingClientRect(), i = a.width, o = a.height;
      if (i || o)
        return !0;
    }
  }
  return !1;
}, Pa = /* @__PURE__ */ f.createContext(null), zs = (r, t) => {
  const e = f.useContext(Pa), n = f.useMemo(() => {
    if (!e)
      return "";
    const {
      compactDirection: a,
      isFirstItem: i,
      isLastItem: o
    } = e, s = a === "vertical" ? "-vertical-" : "-";
    return Ae(`${r}-compact${s}item`, {
      [`${r}-compact${s}first-item`]: i,
      [`${r}-compact${s}last-item`]: o,
      [`${r}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [r, t, e]);
  return {
    compactSize: e == null ? void 0 : e.compactSize,
    compactDirection: e == null ? void 0 : e.compactDirection,
    compactItemClassnames: n
  };
}, Ti = (r) => {
  let {
    children: t
  } = r;
  return /* @__PURE__ */ f.createElement(Pa.Provider, {
    value: null
  }, t);
}, Ai = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), Di = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), Ii = function(r, t, e, n) {
  const i = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${i}${r}-enter,
      ${i}${r}-appear
    `]: Object.assign(Object.assign({}, Ai(n)), {
      animationPlayState: "paused"
    }),
    [`${i}${r}-leave`]: Object.assign(Object.assign({}, Di(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${r}-enter${r}-enter-active,
      ${i}${r}-appear${r}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${r}-leave${r}-leave-active`]: {
      animationName: e,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, Li = new De("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), zi = new De("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), zn = new De("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), jn = new De("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), ji = new De("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), qi = new De("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Wi = new De("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Hi = new De("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Bi = new De("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Ui = new De("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Ki = new De("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Zi = new De("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Gi = {
  zoom: {
    inKeyframes: Li,
    outKeyframes: zi
  },
  "zoom-big": {
    inKeyframes: zn,
    outKeyframes: jn
  },
  "zoom-big-fast": {
    inKeyframes: zn,
    outKeyframes: jn
  },
  "zoom-left": {
    inKeyframes: Wi,
    outKeyframes: Hi
  },
  "zoom-right": {
    inKeyframes: Bi,
    outKeyframes: Ui
  },
  "zoom-up": {
    inKeyframes: ji,
    outKeyframes: qi
  },
  "zoom-down": {
    inKeyframes: Ki,
    outKeyframes: Zi
  }
}, Ji = (r, t) => {
  const {
    antCls: e
  } = r, n = `${e}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = Gi[t];
  return [Ii(n, a, i, r.motionDurationFast), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: r.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: r.motionEaseInOutCirc
    }
  }];
};
var Oa = /* @__PURE__ */ f.createContext(null), qn = [];
function Qi(r, t) {
  var e = f.useState(function() {
    if (!Gt())
      return null;
    var h = document.createElement("div");
    return H.env.NODE_ENV !== "production" && t && h.setAttribute("data-debug", t), h;
  }), n = W(e, 1), a = n[0], i = f.useRef(!1), o = f.useContext(Oa), s = f.useState(qn), u = W(s, 2), c = u[0], l = u[1], v = o || (i.current ? void 0 : function(h) {
    l(function(g) {
      var d = [h].concat(D(g));
      return d;
    });
  });
  function m() {
    a.parentElement || document.body.appendChild(a), i.current = !0;
  }
  function y() {
    var h;
    (h = a.parentElement) === null || h === void 0 || h.removeChild(a), i.current = !1;
  }
  return Fe(function() {
    return r ? o ? o(m) : m() : y(), y;
  }, [r]), Fe(function() {
    c.length && (c.forEach(function(h) {
      return h();
    }), l(qn));
  }, [c]), [a, v];
}
function Yi(r) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), e = document.createElement("div");
  e.id = t;
  var n = e.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var a, i;
  if (r) {
    var o = getComputedStyle(r);
    n.scrollbarColor = o.scrollbarColor, n.scrollbarWidth = o.scrollbarWidth;
    var s = getComputedStyle(r, "::-webkit-scrollbar"), u = parseInt(s.width, 10), c = parseInt(s.height, 10);
    try {
      var l = u ? "width: ".concat(s.width, ";") : "", v = c ? "height: ".concat(s.height, ";") : "";
      fa(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(l, `
`).concat(v, `
}`), t);
    } catch (h) {
      console.error(h), a = u, i = c;
    }
  }
  document.body.appendChild(e);
  var m = r && a && !isNaN(a) ? a : e.offsetWidth - e.clientWidth, y = r && i && !isNaN(i) ? i : e.offsetHeight - e.clientHeight;
  return document.body.removeChild(e), fn(t), {
    width: m,
    height: y
  };
}
function Xi(r) {
  return typeof document > "u" || !r || !(r instanceof Element) ? {
    width: 0,
    height: 0
  } : Yi(r);
}
function eo() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var to = "rc-util-locker-".concat(Date.now()), Wn = 0;
function ro(r) {
  var t = !!r, e = f.useState(function() {
    return Wn += 1, "".concat(to, "_").concat(Wn);
  }), n = W(e, 1), a = n[0];
  Fe(function() {
    if (t) {
      var i = Xi(document.body).width, o = eo();
      fa(`
html body {
  overflow-y: hidden;
  `.concat(o ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), a);
    } else
      fn(a);
    return function() {
      fn(a);
    };
  }, [t, a]);
}
var no = !1;
function ao(r) {
  return no;
}
var Hn = function(t) {
  return t === !1 ? !1 : !Gt() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Mn = /* @__PURE__ */ f.forwardRef(function(r, t) {
  var e = r.open, n = r.autoLock, a = r.getContainer, i = r.debug, o = r.autoDestroy, s = o === void 0 ? !0 : o, u = r.children, c = f.useState(e), l = W(c, 2), v = l[0], m = l[1], y = v || e;
  H.env.NODE_ENV !== "production" && de(Gt() || !e, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), f.useEffect(function() {
    (s || e) && m(e);
  }, [e, s]);
  var h = f.useState(function() {
    return Hn(a);
  }), g = W(h, 2), d = g[0], b = g[1];
  f.useEffect(function() {
    var A = Hn(a);
    b(A ?? null);
  });
  var p = Qi(y && !d, i), w = W(p, 2), P = w[0], F = w[1], E = d ?? P;
  ro(n && e && Gt() && (E === P || E === document.body));
  var R = null;
  if (u && $n(u) && t) {
    var x = u;
    R = x.ref;
  }
  var O = xn(R, t);
  if (!y || !Gt() || d === void 0)
    return null;
  var V = E === !1 || ao(), $ = u;
  return t && ($ = /* @__PURE__ */ f.cloneElement(u, {
    ref: O
  })), /* @__PURE__ */ f.createElement(Oa.Provider, {
    value: F
  }, V ? $ : /* @__PURE__ */ qa.createPortal($, E));
});
H.env.NODE_ENV !== "production" && (Mn.displayName = "Portal");
function io() {
  var r = N({}, Wa);
  return r.useId;
}
var Bn = 0, Un = io();
const oo = Un ? (
  // Use React `useId`
  function(t) {
    var e = Un();
    return t || (H.env.NODE_ENV === "test" ? "test-id" : e);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var e = f.useState("ssr-id"), n = W(e, 2), a = n[0], i = n[1];
    return f.useEffect(function() {
      var o = Bn;
      Bn += 1, i("rc_unique_".concat(o));
    }, []), t || (H.env.NODE_ENV === "test" ? "test-id" : a);
  }
);
var yt = "RC_FORM_INTERNAL_HOOKS", U = function() {
  de(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, _t = /* @__PURE__ */ f.createContext({
  getFieldValue: U,
  getFieldsValue: U,
  getFieldError: U,
  getFieldWarning: U,
  getFieldsError: U,
  isFieldsTouched: U,
  isFieldTouched: U,
  isFieldValidating: U,
  isFieldsValidating: U,
  resetFields: U,
  setFields: U,
  setFieldValue: U,
  setFieldsValue: U,
  validateFields: U,
  submit: U,
  getInternalHooks: function() {
    return U(), {
      dispatch: U,
      initEntityValue: U,
      registerField: U,
      useSubscribe: U,
      setInitialValues: U,
      destroyForm: U,
      setCallbacks: U,
      registerWatch: U,
      getFields: U,
      setValidateMessages: U,
      setPreserve: U,
      getInitialValue: U
    };
  }
}), Nr = /* @__PURE__ */ f.createContext(null);
function gn(r) {
  return r == null ? [] : Array.isArray(r) ? r : [r];
}
function so(r) {
  return r && !!r._init;
}
function pn() {
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
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var yn = pn();
function uo(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function lo(r, t, e) {
  if (Ua()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (r.bind.apply(r, n))();
  return e && da(a, e.prototype), a;
}
function bn(r) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return bn = function(n) {
    if (n === null || !uo(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, a);
    }
    function a() {
      return lo(n, arguments, Ka(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), da(a, n);
  }, bn(r);
}
var co = /%[sdj%]/g, Va = function() {
};
typeof H < "u" && H.env && H.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Va = function(t, e) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && e.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, e);
});
function wn(r) {
  if (!r || !r.length) return null;
  var t = {};
  return r.forEach(function(e) {
    var n = e.field;
    t[n] = t[n] || [], t[n].push(e);
  }), t;
}
function Ee(r) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  var a = 0, i = e.length;
  if (typeof r == "function")
    return r.apply(null, e);
  if (typeof r == "string") {
    var o = r.replace(co, function(s) {
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
  return r;
}
function fo(r) {
  return r === "string" || r === "url" || r === "hex" || r === "email" || r === "date" || r === "pattern";
}
function ae(r, t) {
  return !!(r == null || t === "array" && Array.isArray(r) && !r.length || fo(t) && typeof r == "string" && !r);
}
function vo(r, t, e) {
  var n = [], a = 0, i = r.length;
  function o(s) {
    n.push.apply(n, D(s || [])), a++, a === i && e(n);
  }
  r.forEach(function(s) {
    t(s, o);
  });
}
function Kn(r, t, e) {
  var n = 0, a = r.length;
  function i(o) {
    if (o && o.length) {
      e(o);
      return;
    }
    var s = n;
    n = n + 1, s < a ? t(r[s], i) : e([]);
  }
  i([]);
}
function ho(r) {
  var t = [];
  return Object.keys(r).forEach(function(e) {
    t.push.apply(t, D(r[e] || []));
  }), t;
}
var Zn = /* @__PURE__ */ function(r) {
  Sn(e, r);
  var t = Nn(e);
  function e(n, a) {
    var i;
    return kt(this, e), i = t.call(this, "Async Validation Error"), C(q(i), "errors", void 0), C(q(i), "fields", void 0), i.errors = n, i.fields = a, i;
  }
  return Tt(e);
}(/* @__PURE__ */ bn(Error));
function mo(r, t, e, n, a) {
  if (t.first) {
    var i = new Promise(function(m, y) {
      var h = function(b) {
        return n(b), b.length ? y(new Zn(b, wn(b))) : m(a);
      }, g = ho(r);
      Kn(g, e, h);
    });
    return i.catch(function(m) {
      return m;
    }), i;
  }
  var o = t.firstFields === !0 ? Object.keys(r) : t.firstFields || [], s = Object.keys(r), u = s.length, c = 0, l = [], v = new Promise(function(m, y) {
    var h = function(d) {
      if (l.push.apply(l, d), c++, c === u)
        return n(l), l.length ? y(new Zn(l, wn(l))) : m(a);
    };
    s.length || (n(l), m(a)), s.forEach(function(g) {
      var d = r[g];
      o.indexOf(g) !== -1 ? Kn(d, e, h) : vo(d, e, h);
    });
  });
  return v.catch(function(m) {
    return m;
  }), v;
}
function go(r) {
  return !!(r && r.message !== void 0);
}
function po(r, t) {
  for (var e = r, n = 0; n < t.length; n++) {
    if (e == null)
      return e;
    e = e[t[n]];
  }
  return e;
}
function Gn(r, t) {
  return function(e) {
    var n;
    return r.fullFields ? n = po(t, r.fullFields) : n = t[e.field || r.fullField], go(e) ? (e.field = e.field || r.fullField, e.fieldValue = n, e) : {
      message: typeof e == "function" ? e() : e,
      fieldValue: n,
      field: e.field || r.fullField
    };
  };
}
function Jn(r, t) {
  if (t) {
    for (var e in t)
      if (t.hasOwnProperty(e)) {
        var n = t[e];
        ge(n) === "object" && ge(r[e]) === "object" ? r[e] = N(N({}, r[e]), n) : r[e] = n;
      }
  }
  return r;
}
var Vt = "enum", yo = function(t, e, n, a, i) {
  t[Vt] = Array.isArray(t[Vt]) ? t[Vt] : [], t[Vt].indexOf(e) === -1 && a.push(Ee(i.messages[Vt], t.fullField, t[Vt].join(", ")));
}, bo = function(t, e, n, a, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(e) || a.push(Ee(i.messages.pattern.mismatch, t.fullField, e, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(e) || a.push(Ee(i.messages.pattern.mismatch, t.fullField, e, t.pattern));
    }
  }
}, wo = function(t, e, n, a, i) {
  var o = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = e, v = null, m = typeof e == "number", y = typeof e == "string", h = Array.isArray(e);
  if (m ? v = "number" : y ? v = "string" : h && (v = "array"), !v)
    return !1;
  h && (l = e.length), y && (l = e.replace(c, "_").length), o ? l !== t.len && a.push(Ee(i.messages[v].len, t.fullField, t.len)) : s && !u && l < t.min ? a.push(Ee(i.messages[v].min, t.fullField, t.min)) : u && !s && l > t.max ? a.push(Ee(i.messages[v].max, t.fullField, t.max)) : s && u && (l < t.min || l > t.max) && a.push(Ee(i.messages[v].range, t.fullField, t.min, t.max));
}, Ra = function(t, e, n, a, i, o) {
  t.required && (!n.hasOwnProperty(t.field) || ae(e, o || t.type)) && a.push(Ee(i.messages.required, t.fullField));
}, Er;
const Co = function() {
  if (Er)
    return Er;
  var r = "[a-fA-F\\d:]", t = function(E) {
    return E && E.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(r, ")|(?<=").concat(r, ")(?=\\s|$))") : "";
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
  ], i = "(?:%[0-9a-zA-Z]{1,})?", o = "(?:".concat(a.join("|"), ")").concat(i), s = new RegExp("(?:^".concat(e, "$)|(?:^").concat(o, "$)")), u = new RegExp("^".concat(e, "$")), c = new RegExp("^".concat(o, "$")), l = function(E) {
    return E && E.exact ? s : new RegExp("(?:".concat(t(E)).concat(e).concat(t(E), ")|(?:").concat(t(E)).concat(o).concat(t(E), ")"), "g");
  };
  l.v4 = function(F) {
    return F && F.exact ? u : new RegExp("".concat(t(F)).concat(e).concat(t(F)), "g");
  }, l.v6 = function(F) {
    return F && F.exact ? c : new RegExp("".concat(t(F)).concat(o).concat(t(F)), "g");
  };
  var v = "(?:(?:[a-z]+:)?//)", m = "(?:\\S+(?::\\S*)?@)?", y = l.v4().source, h = l.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", d = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", p = "(?::\\d{2,5})?", w = '(?:[/?#][^\\s"]*)?', P = "(?:".concat(v, "|www\\.)").concat(m, "(?:localhost|").concat(y, "|").concat(h, "|").concat(g).concat(d).concat(b, ")").concat(p).concat(w);
  return Er = new RegExp("(?:^".concat(P, "$)"), "i"), Er;
};
var Qn = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Zt = {
  integer: function(t) {
    return Zt.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Zt.number(t) && !Zt.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return ge(t) === "object" && !Zt.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Qn.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Co());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Qn.hex);
  }
}, Fo = function(t, e, n, a, i) {
  if (t.required && e === void 0) {
    Ra(t, e, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  o.indexOf(s) > -1 ? Zt[s](e) || a.push(Ee(i.messages.types[s], t.fullField, t.type)) : s && ge(e) !== t.type && a.push(Ee(i.messages.types[s], t.fullField, t.type));
}, Eo = function(t, e, n, a, i) {
  (/^\s+$/.test(e) || e === "") && a.push(Ee(i.messages.whitespace, t.fullField));
};
const z = {
  required: Ra,
  whitespace: Eo,
  type: Fo,
  range: wo,
  enum: yo,
  pattern: bo
};
var Po = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i);
  }
  n(o);
}, Oo = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (e == null && !t.required)
      return n();
    z.required(t, e, a, o, i, "array"), e != null && (z.type(t, e, a, o, i), z.range(t, e, a, o, i));
  }
  n(o);
}, Vo = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i), e !== void 0 && z.type(t, e, a, o, i);
  }
  n(o);
}, Ro = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e, "date") && !t.required)
      return n();
    if (z.required(t, e, a, o, i), !ae(e, "date")) {
      var u;
      e instanceof Date ? u = e : u = new Date(e), z.type(t, u, a, o, i), u && z.range(t, u.getTime(), a, o, i);
    }
  }
  n(o);
}, So = "enum", No = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i), e !== void 0 && z[So](t, e, a, o, i);
  }
  n(o);
}, $o = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i), e !== void 0 && (z.type(t, e, a, o, i), z.range(t, e, a, o, i));
  }
  n(o);
}, xo = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i), e !== void 0 && (z.type(t, e, a, o, i), z.range(t, e, a, o, i));
  }
  n(o);
}, Mo = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i), e !== void 0 && z.type(t, e, a, o, i);
  }
  n(o);
}, _o = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (e === "" && (e = void 0), ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i), e !== void 0 && (z.type(t, e, a, o, i), z.range(t, e, a, o, i));
  }
  n(o);
}, ko = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i), e !== void 0 && z.type(t, e, a, o, i);
  }
  n(o);
}, To = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e, "string") && !t.required)
      return n();
    z.required(t, e, a, o, i), ae(e, "string") || z.pattern(t, e, a, o, i);
  }
  n(o);
}, Ao = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e) && !t.required)
      return n();
    z.required(t, e, a, o, i), ae(e) || z.type(t, e, a, o, i);
  }
  n(o);
}, Do = function(t, e, n, a, i) {
  var o = [], s = Array.isArray(e) ? "array" : ge(e);
  z.required(t, e, a, o, i, s), n(o);
}, Io = function(t, e, n, a, i) {
  var o = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (ae(e, "string") && !t.required)
      return n();
    z.required(t, e, a, o, i, "string"), ae(e, "string") || (z.type(t, e, a, o, i), z.range(t, e, a, o, i), z.pattern(t, e, a, o, i), t.whitespace === !0 && z.whitespace(t, e, a, o, i));
  }
  n(o);
}, sn = function(t, e, n, a, i) {
  var o = t.type, s = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (ae(e, o) && !t.required)
      return n();
    z.required(t, e, a, s, i, o), ae(e, o) || z.type(t, e, a, s, i);
  }
  n(s);
};
const Jt = {
  string: Io,
  method: Mo,
  number: _o,
  boolean: Vo,
  regexp: Ao,
  integer: xo,
  float: $o,
  array: Oo,
  object: ko,
  enum: No,
  pattern: To,
  date: Ro,
  url: sn,
  hex: sn,
  email: sn,
  required: Do,
  any: Po
};
var tr = /* @__PURE__ */ function() {
  function r(t) {
    kt(this, r), C(this, "rules", null), C(this, "_messages", yn), this.define(t);
  }
  return Tt(r, [{
    key: "define",
    value: function(e) {
      var n = this;
      if (!e)
        throw new Error("Cannot configure a schema with no rules");
      if (ge(e) !== "object" || Array.isArray(e))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(e).forEach(function(a) {
        var i = e[a];
        n.rules[a] = Array.isArray(i) ? i : [i];
      });
    }
  }, {
    key: "messages",
    value: function(e) {
      return e && (this._messages = Jn(pn(), e)), this._messages;
    }
  }, {
    key: "validate",
    value: function(e) {
      var n = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, o = e, s = a, u = i;
      if (typeof s == "function" && (u = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return u && u(null, o), Promise.resolve(o);
      function c(h) {
        var g = [], d = {};
        function b(w) {
          if (Array.isArray(w)) {
            var P;
            g = (P = g).concat.apply(P, D(w));
          } else
            g.push(w);
        }
        for (var p = 0; p < h.length; p++)
          b(h[p]);
        g.length ? (d = wn(g), u(g, d)) : u(null, o);
      }
      if (s.messages) {
        var l = this.messages();
        l === yn && (l = pn()), Jn(l, s.messages), s.messages = l;
      } else
        s.messages = this.messages();
      var v = {}, m = s.keys || Object.keys(this.rules);
      m.forEach(function(h) {
        var g = n.rules[h], d = o[h];
        g.forEach(function(b) {
          var p = b;
          typeof p.transform == "function" && (o === e && (o = N({}, o)), d = o[h] = p.transform(d), d != null && (p.type = p.type || (Array.isArray(d) ? "array" : ge(d)))), typeof p == "function" ? p = {
            validator: p
          } : p = N({}, p), p.validator = n.getValidationMethod(p), p.validator && (p.field = h, p.fullField = p.fullField || h, p.type = n.getType(p), v[h] = v[h] || [], v[h].push({
            rule: p,
            value: d,
            source: o,
            field: h
          }));
        });
      });
      var y = {};
      return mo(v, s, function(h, g) {
        var d = h.rule, b = (d.type === "object" || d.type === "array") && (ge(d.fields) === "object" || ge(d.defaultField) === "object");
        b = b && (d.required || !d.required && h.value), d.field = h.field;
        function p(R, x) {
          return N(N({}, x), {}, {
            fullField: "".concat(d.fullField, ".").concat(R),
            fullFields: d.fullFields ? [].concat(D(d.fullFields), [R]) : [R]
          });
        }
        function w() {
          var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], x = Array.isArray(R) ? R : [R];
          !s.suppressWarning && x.length && r.warning("async-validator:", x), x.length && d.message !== void 0 && (x = [].concat(d.message));
          var O = x.map(Gn(d, o));
          if (s.first && O.length)
            return y[d.field] = 1, g(O);
          if (!b)
            g(O);
          else {
            if (d.required && !h.value)
              return d.message !== void 0 ? O = [].concat(d.message).map(Gn(d, o)) : s.error && (O = [s.error(d, Ee(s.messages.required, d.field))]), g(O);
            var V = {};
            d.defaultField && Object.keys(h.value).map(function(k) {
              V[k] = d.defaultField;
            }), V = N(N({}, V), h.rule.fields);
            var $ = {};
            Object.keys(V).forEach(function(k) {
              var M = V[k], Z = Array.isArray(M) ? M : [M];
              $[k] = Z.map(p.bind(null, k));
            });
            var A = new r($);
            A.messages(s.messages), h.rule.options && (h.rule.options.messages = s.messages, h.rule.options.error = s.error), A.validate(h.value, h.rule.options || s, function(k) {
              var M = [];
              O && O.length && M.push.apply(M, D(O)), k && k.length && M.push.apply(M, D(k)), g(M.length ? M : null);
            });
          }
        }
        var P;
        if (d.asyncValidator)
          P = d.asyncValidator(d, h.value, w, h.source, s);
        else if (d.validator) {
          try {
            P = d.validator(d, h.value, w, h.source, s);
          } catch (R) {
            var F, E;
            (F = (E = console).error) === null || F === void 0 || F.call(E, R), s.suppressValidatorError || setTimeout(function() {
              throw R;
            }, 0), w(R.message);
          }
          P === !0 ? w() : P === !1 ? w(typeof d.message == "function" ? d.message(d.fullField || d.field) : d.message || "".concat(d.fullField || d.field, " fails")) : P instanceof Array ? w(P) : P instanceof Error && w(P.message);
        }
        P && P.then && P.then(function() {
          return w();
        }, function(R) {
          return w(R);
        });
      }, function(h) {
        c(h);
      }, o);
    }
  }, {
    key: "getType",
    value: function(e) {
      if (e.type === void 0 && e.pattern instanceof RegExp && (e.type = "pattern"), typeof e.validator != "function" && e.type && !Jt.hasOwnProperty(e.type))
        throw new Error(Ee("Unknown rule type %s", e.type));
      return e.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(e) {
      if (typeof e.validator == "function")
        return e.validator;
      var n = Object.keys(e), a = n.indexOf("message");
      return a !== -1 && n.splice(a, 1), n.length === 1 && n[0] === "required" ? Jt.required : Jt[this.getType(e)] || void 0;
    }
  }]), r;
}();
C(tr, "register", function(t, e) {
  if (typeof e != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Jt[t] = e;
});
C(tr, "warning", Va);
C(tr, "messages", yn);
C(tr, "validators", Jt);
var Ce = "'${name}' is not a valid ${type}", Sa = {
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
    string: Ce,
    method: Ce,
    array: Ce,
    object: Ce,
    number: Ce,
    date: Ce,
    boolean: Ce,
    integer: Ce,
    float: Ce,
    regexp: Ce,
    email: Ce,
    url: Ce,
    hex: Ce
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
}, Yn = tr;
function Lo(r, t) {
  return r.replace(/\\?\$\{\w+\}/g, function(e) {
    if (e.startsWith("\\"))
      return e.slice(1);
    var n = e.slice(2, -1);
    return t[n];
  });
}
var Xn = "CODE_LOGIC_ERROR";
function Cn(r, t, e, n, a) {
  return Fn.apply(this, arguments);
}
function Fn() {
  return Fn = Xt(/* @__PURE__ */ Ze().mark(function r(t, e, n, a, i) {
    var o, s, u, c, l, v, m, y, h;
    return Ze().wrap(function(d) {
      for (; ; ) switch (d.prev = d.next) {
        case 0:
          return o = N({}, n), delete o.ruleIndex, Yn.warning = function() {
          }, o.validator && (s = o.validator, o.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(Xn);
            }
          }), u = null, o && o.type === "array" && o.defaultField && (u = o.defaultField, delete o.defaultField), c = new Yn(C({}, t, [o])), l = Kt(Sa, a.validateMessages), c.messages(l), v = [], d.prev = 10, d.next = 13, Promise.resolve(c.validate(C({}, t, e), N({}, a)));
        case 13:
          d.next = 18;
          break;
        case 15:
          d.prev = 15, d.t0 = d.catch(10), d.t0.errors && (v = d.t0.errors.map(function(b, p) {
            var w = b.message, P = w === Xn ? l.default : w;
            return /* @__PURE__ */ f.isValidElement(P) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ f.cloneElement(P, {
                key: "error_".concat(p)
              })
            ) : P;
          }));
        case 18:
          if (!(!v.length && u)) {
            d.next = 23;
            break;
          }
          return d.next = 21, Promise.all(e.map(function(b, p) {
            return Cn("".concat(t, ".").concat(p), b, u, a, i);
          }));
        case 21:
          return m = d.sent, d.abrupt("return", m.reduce(function(b, p) {
            return [].concat(D(b), D(p));
          }, []));
        case 23:
          return y = N(N({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, i), h = v.map(function(b) {
            return typeof b == "string" ? Lo(b, y) : b;
          }), d.abrupt("return", h);
        case 26:
        case "end":
          return d.stop();
      }
    }, r, null, [[10, 15]]);
  })), Fn.apply(this, arguments);
}
function zo(r, t, e, n, a, i) {
  var o = r.join("."), s = e.map(function(l, v) {
    var m = l.validator, y = N(N({}, l), {}, {
      ruleIndex: v
    });
    return m && (y.validator = function(h, g, d) {
      var b = !1, p = function() {
        for (var F = arguments.length, E = new Array(F), R = 0; R < F; R++)
          E[R] = arguments[R];
        Promise.resolve().then(function() {
          de(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || d.apply(void 0, E);
        });
      }, w = m(h, g, p);
      b = w && typeof w.then == "function" && typeof w.catch == "function", de(b, "`callback` is deprecated. Please return a promise instead."), b && w.then(function() {
        d();
      }).catch(function(P) {
        d(P || " ");
      });
    }), y;
  }).sort(function(l, v) {
    var m = l.warningOnly, y = l.ruleIndex, h = v.warningOnly, g = v.ruleIndex;
    return !!m == !!h ? y - g : m ? 1 : -1;
  }), u;
  if (a === !0)
    u = new Promise(/* @__PURE__ */ function() {
      var l = Xt(/* @__PURE__ */ Ze().mark(function v(m, y) {
        var h, g, d;
        return Ze().wrap(function(p) {
          for (; ; ) switch (p.prev = p.next) {
            case 0:
              h = 0;
            case 1:
              if (!(h < s.length)) {
                p.next = 12;
                break;
              }
              return g = s[h], p.next = 5, Cn(o, t, g, n, i);
            case 5:
              if (d = p.sent, !d.length) {
                p.next = 9;
                break;
              }
              return y([{
                errors: d,
                rule: g
              }]), p.abrupt("return");
            case 9:
              h += 1, p.next = 1;
              break;
            case 12:
              m([]);
            case 13:
            case "end":
              return p.stop();
          }
        }, v);
      }));
      return function(v, m) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var c = s.map(function(l) {
      return Cn(o, t, l, n, i).then(function(v) {
        return {
          errors: v,
          rule: l
        };
      });
    });
    u = (a ? qo(c) : jo(c)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return u.catch(function(l) {
    return l;
  }), u;
}
function jo(r) {
  return En.apply(this, arguments);
}
function En() {
  return En = Xt(/* @__PURE__ */ Ze().mark(function r(t) {
    return Ze().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(a) {
            var i, o = (i = []).concat.apply(i, D(a));
            return o;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, r);
  })), En.apply(this, arguments);
}
function qo(r) {
  return Pn.apply(this, arguments);
}
function Pn() {
  return Pn = Xt(/* @__PURE__ */ Ze().mark(function r(t) {
    var e;
    return Ze().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return e = 0, a.abrupt("return", new Promise(function(i) {
            t.forEach(function(o) {
              o.then(function(s) {
                s.errors.length && i([s]), e += 1, e === t.length && i([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, r);
  })), Pn.apply(this, arguments);
}
function re(r) {
  return gn(r);
}
function ea(r, t) {
  var e = {};
  return t.forEach(function(n) {
    var a = pt(r, n);
    e = lt(e, n, a);
  }), e;
}
function xt(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return r && r.some(function(n) {
    return Na(t, n, e);
  });
}
function Na(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !r || !t || !e && r.length !== t.length ? !1 : t.every(function(n, a) {
    return r[a] === n;
  });
}
function Wo(r, t) {
  if (r === t)
    return !0;
  if (!r && t || r && !t || !r || !t || ge(r) !== "object" || ge(t) !== "object")
    return !1;
  var e = Object.keys(r), n = Object.keys(t), a = new Set([].concat(e, n));
  return D(a).every(function(i) {
    var o = r[i], s = t[i];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function Ho(r) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ge(t.target) === "object" && r in t.target ? t.target[r] : t;
}
function ta(r, t, e) {
  var n = r.length;
  if (t < 0 || t >= n || e < 0 || e >= n)
    return r;
  var a = r[t], i = t - e;
  return i > 0 ? [].concat(D(r.slice(0, e)), [a], D(r.slice(e, t)), D(r.slice(t + 1, n))) : i < 0 ? [].concat(D(r.slice(0, t)), D(r.slice(t + 1, e + 1)), [a], D(r.slice(e + 1, n))) : r;
}
var Bo = ["name"], ke = [];
function un(r, t, e, n, a, i) {
  return typeof r == "function" ? r(t, e, "source" in i ? {
    source: i.source
  } : {}) : n !== a;
}
var _n = /* @__PURE__ */ function(r) {
  Sn(e, r);
  var t = Nn(e);
  function e(n) {
    var a;
    if (kt(this, e), a = t.call(this, n), C(q(a), "state", {
      resetCount: 0
    }), C(q(a), "cancelRegisterFunc", null), C(q(a), "mounted", !1), C(q(a), "touched", !1), C(q(a), "dirty", !1), C(q(a), "validatePromise", void 0), C(q(a), "prevValidating", void 0), C(q(a), "errors", ke), C(q(a), "warnings", ke), C(q(a), "cancelRegister", function() {
      var u = a.props, c = u.preserve, l = u.isListField, v = u.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(l, c, re(v)), a.cancelRegisterFunc = null;
    }), C(q(a), "getNamePath", function() {
      var u = a.props, c = u.name, l = u.fieldContext, v = l.prefixName, m = v === void 0 ? [] : v;
      return c !== void 0 ? [].concat(D(m), D(c)) : [];
    }), C(q(a), "getRules", function() {
      var u = a.props, c = u.rules, l = c === void 0 ? [] : c, v = u.fieldContext;
      return l.map(function(m) {
        return typeof m == "function" ? m(v) : m;
      });
    }), C(q(a), "refresh", function() {
      a.mounted && a.setState(function(u) {
        var c = u.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), C(q(a), "metaCache", null), C(q(a), "triggerMetaEvent", function(u) {
      var c = a.props.onMetaChange;
      if (c) {
        var l = N(N({}, a.getMeta()), {}, {
          destroy: u
        });
        Dn(a.metaCache, l) || c(l), a.metaCache = l;
      } else
        a.metaCache = null;
    }), C(q(a), "onStoreChange", function(u, c, l) {
      var v = a.props, m = v.shouldUpdate, y = v.dependencies, h = y === void 0 ? [] : y, g = v.onReset, d = l.store, b = a.getNamePath(), p = a.getValue(u), w = a.getValue(d), P = c && xt(c, b);
      switch (l.type === "valueUpdate" && l.source === "external" && !Dn(p, w) && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = ke, a.warnings = ke, a.triggerMetaEvent()), l.type) {
        case "reset":
          if (!c || P) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = ke, a.warnings = ke, a.triggerMetaEvent(), g == null || g(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (m && un(m, u, d, p, w, l)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var F = l.data;
          if (P) {
            "touched" in F && (a.touched = F.touched), "validating" in F && !("originRCField" in F) && (a.validatePromise = F.validating ? Promise.resolve([]) : null), "errors" in F && (a.errors = F.errors || ke), "warnings" in F && (a.warnings = F.warnings || ke), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in F && xt(c, b, !0)) {
            a.reRender();
            return;
          }
          if (m && !b.length && un(m, u, d, p, w, l)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var E = h.map(re);
          if (E.some(function(R) {
            return xt(l.relatedFields, R);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (P || (!h.length || b.length || m) && un(m, u, d, p, w, l)) {
            a.reRender();
            return;
          }
          break;
      }
      m === !0 && a.reRender();
    }), C(q(a), "validateRules", function(u) {
      var c = a.getNamePath(), l = a.getValue(), v = u || {}, m = v.triggerName, y = v.validateOnly, h = y === void 0 ? !1 : y, g = Promise.resolve().then(/* @__PURE__ */ Xt(/* @__PURE__ */ Ze().mark(function d() {
        var b, p, w, P, F, E, R;
        return Ze().wrap(function(O) {
          for (; ; ) switch (O.prev = O.next) {
            case 0:
              if (a.mounted) {
                O.next = 2;
                break;
              }
              return O.abrupt("return", []);
            case 2:
              if (b = a.props, p = b.validateFirst, w = p === void 0 ? !1 : p, P = b.messageVariables, F = b.validateDebounce, E = a.getRules(), m && (E = E.filter(function(V) {
                return V;
              }).filter(function(V) {
                var $ = V.validateTrigger;
                if (!$)
                  return !0;
                var A = gn($);
                return A.includes(m);
              })), !(F && m)) {
                O.next = 10;
                break;
              }
              return O.next = 8, new Promise(function(V) {
                setTimeout(V, F);
              });
            case 8:
              if (a.validatePromise === g) {
                O.next = 10;
                break;
              }
              return O.abrupt("return", []);
            case 10:
              return R = zo(c, l, E, u, w, P), R.catch(function(V) {
                return V;
              }).then(function() {
                var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ke;
                if (a.validatePromise === g) {
                  var $;
                  a.validatePromise = null;
                  var A = [], k = [];
                  ($ = V.forEach) === null || $ === void 0 || $.call(V, function(M) {
                    var Z = M.rule.warningOnly, j = M.errors, B = j === void 0 ? ke : j;
                    Z ? k.push.apply(k, D(B)) : A.push.apply(A, D(B));
                  }), a.errors = A, a.warnings = k, a.triggerMetaEvent(), a.reRender();
                }
              }), O.abrupt("return", R);
            case 13:
            case "end":
              return O.stop();
          }
        }, d);
      })));
      return h || (a.validatePromise = g, a.dirty = !0, a.errors = ke, a.warnings = ke, a.triggerMetaEvent(), a.reRender()), g;
    }), C(q(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), C(q(a), "isFieldTouched", function() {
      return a.touched;
    }), C(q(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var u = a.props.fieldContext, c = u.getInternalHooks(yt), l = c.getInitialValue;
      return l(a.getNamePath()) !== void 0;
    }), C(q(a), "getErrors", function() {
      return a.errors;
    }), C(q(a), "getWarnings", function() {
      return a.warnings;
    }), C(q(a), "isListField", function() {
      return a.props.isListField;
    }), C(q(a), "isList", function() {
      return a.props.isList;
    }), C(q(a), "isPreserve", function() {
      return a.props.preserve;
    }), C(q(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var u = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return u;
    }), C(q(a), "getOnlyChild", function(u) {
      if (typeof u == "function") {
        var c = a.getMeta();
        return N(N({}, a.getOnlyChild(u(a.getControlled(), c, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = Or(u);
      return l.length !== 1 || !/* @__PURE__ */ f.isValidElement(l[0]) ? {
        child: l,
        isFunction: !1
      } : {
        child: l[0],
        isFunction: !1
      };
    }), C(q(a), "getValue", function(u) {
      var c = a.props.fieldContext.getFieldsValue, l = a.getNamePath();
      return pt(u || c(!0), l);
    }), C(q(a), "getControlled", function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = a.props, l = c.name, v = c.trigger, m = c.validateTrigger, y = c.getValueFromEvent, h = c.normalize, g = c.valuePropName, d = c.getValueProps, b = c.fieldContext, p = m !== void 0 ? m : b.validateTrigger, w = a.getNamePath(), P = b.getInternalHooks, F = b.getFieldsValue, E = P(yt), R = E.dispatch, x = a.getValue(), O = d || function(M) {
        return C({}, g, M);
      }, V = u[v], $ = l !== void 0 ? O(x) : {};
      H.env.NODE_ENV !== "production" && $ && Object.keys($).forEach(function(M) {
        de(typeof $[M] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(M, ")"));
      });
      var A = N(N({}, u), $);
      A[v] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var M, Z = arguments.length, j = new Array(Z), B = 0; B < Z; B++)
          j[B] = arguments[B];
        y ? M = y.apply(void 0, j) : M = Ho.apply(void 0, [g].concat(j)), h && (M = h(M, x, F(!0))), R({
          type: "updateValue",
          namePath: w,
          value: M
        }), V && V.apply(void 0, j);
      };
      var k = gn(p || []);
      return k.forEach(function(M) {
        var Z = A[M];
        A[M] = function() {
          Z && Z.apply(void 0, arguments);
          var j = a.props.rules;
          j && j.length && R({
            type: "validateField",
            namePath: w,
            triggerName: M
          });
        };
      }), A;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, o = i(yt), s = o.initEntityValue;
      s(q(a));
    }
    return a;
  }
  return Tt(e, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var s = o.getInternalHooks, u = s(yt), c = u.registerField;
        this.cancelRegisterFunc = c(this);
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
      var a = this.state.resetCount, i = this.props.children, o = this.getOnlyChild(i), s = o.child, u = o.isFunction, c;
      return u ? c = s : /* @__PURE__ */ f.isValidElement(s) ? c = /* @__PURE__ */ f.cloneElement(s, this.getControlled(s.props)) : (de(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ f.createElement(f.Fragment, {
        key: a
      }, c);
    }
  }]), e;
}(f.Component);
C(_n, "contextType", _t);
C(_n, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function $a(r) {
  var t = r.name, e = er(r, Bo), n = f.useContext(_t), a = f.useContext(Nr), i = t !== void 0 ? re(t) : void 0, o = "keep";
  return e.isListField || (o = "_".concat((i || []).join("_"))), H.env.NODE_ENV !== "production" && e.preserve === !1 && e.isListField && i.length <= 1 && de(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ f.createElement(_n, At({
    key: o,
    name: i,
    isListField: !!a
  }, e, {
    fieldContext: n
  }));
}
function Uo(r) {
  var t = r.name, e = r.initialValue, n = r.children, a = r.rules, i = r.validateTrigger, o = r.isListField, s = f.useContext(_t), u = f.useContext(Nr), c = f.useRef({
    keys: [],
    id: 0
  }), l = c.current, v = f.useMemo(function() {
    var g = re(s.prefixName) || [];
    return [].concat(D(g), D(re(t)));
  }, [s.prefixName, t]), m = f.useMemo(function() {
    return N(N({}, s), {}, {
      prefixName: v
    });
  }, [s, v]), y = f.useMemo(function() {
    return {
      getKey: function(d) {
        var b = v.length, p = d[b];
        return [l.keys[p], d.slice(b + 1)];
      }
    };
  }, [v]);
  if (typeof n != "function")
    return de(!1, "Form.List only accepts function as children."), null;
  var h = function(d, b, p) {
    var w = p.source;
    return w === "internal" ? !1 : d !== b;
  };
  return /* @__PURE__ */ f.createElement(Nr.Provider, {
    value: y
  }, /* @__PURE__ */ f.createElement(_t.Provider, {
    value: m
  }, /* @__PURE__ */ f.createElement($a, {
    name: [],
    shouldUpdate: h,
    rules: a,
    validateTrigger: i,
    initialValue: e,
    isList: !0,
    isListField: o ?? !!u
  }, function(g, d) {
    var b = g.value, p = b === void 0 ? [] : b, w = g.onChange, P = s.getFieldValue, F = function() {
      var O = P(v || []);
      return O || [];
    }, E = {
      add: function(O, V) {
        var $ = F();
        V >= 0 && V <= $.length ? (l.keys = [].concat(D(l.keys.slice(0, V)), [l.id], D(l.keys.slice(V))), w([].concat(D($.slice(0, V)), [O], D($.slice(V))))) : (H.env.NODE_ENV !== "production" && (V < 0 || V > $.length) && de(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(D(l.keys), [l.id]), w([].concat(D($), [O]))), l.id += 1;
      },
      remove: function(O) {
        var V = F(), $ = new Set(Array.isArray(O) ? O : [O]);
        $.size <= 0 || (l.keys = l.keys.filter(function(A, k) {
          return !$.has(k);
        }), w(V.filter(function(A, k) {
          return !$.has(k);
        })));
      },
      move: function(O, V) {
        if (O !== V) {
          var $ = F();
          O < 0 || O >= $.length || V < 0 || V >= $.length || (l.keys = ta(l.keys, O, V), w(ta($, O, V)));
        }
      }
    }, R = p || [];
    return Array.isArray(R) || (R = [], H.env.NODE_ENV !== "production" && de(!1, "Current value of '".concat(v.join(" > "), "' is not an array type."))), n(R.map(function(x, O) {
      var V = l.keys[O];
      return V === void 0 && (l.keys[O] = l.id, V = l.keys[O], l.id += 1), {
        name: O,
        key: V,
        isListField: !0
      };
    }), E, d);
  })));
}
function Ko(r) {
  var t = !1, e = r.length, n = [];
  return r.length ? new Promise(function(a, i) {
    r.forEach(function(o, s) {
      o.catch(function(u) {
        return t = !0, u;
      }).then(function(u) {
        e -= 1, n[s] = u, !(e > 0) && (t && i(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var xa = "__@field_split__";
function ln(r) {
  return r.map(function(t) {
    return "".concat(ge(t), ":").concat(t);
  }).join(xa);
}
var Rt = /* @__PURE__ */ function() {
  function r() {
    kt(this, r), C(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Tt(r, [{
    key: "set",
    value: function(e, n) {
      this.kvs.set(ln(e), n);
    }
  }, {
    key: "get",
    value: function(e) {
      return this.kvs.get(ln(e));
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
      this.kvs.delete(ln(e));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(e) {
      return D(this.kvs.entries()).map(function(n) {
        var a = W(n, 2), i = a[0], o = a[1], s = i.split(xa);
        return e({
          key: s.map(function(u) {
            var c = u.match(/^([^:]*):(.*)$/), l = W(c, 3), v = l[1], m = l[2];
            return v === "number" ? Number(m) : m;
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
  }]), r;
}(), Zo = ["name"], Go = /* @__PURE__ */ Tt(function r(t) {
  var e = this;
  kt(this, r), C(this, "formHooked", !1), C(this, "forceRootUpdate", void 0), C(this, "subscribable", !0), C(this, "store", {}), C(this, "fieldEntities", []), C(this, "initialValues", {}), C(this, "callbacks", {}), C(this, "validateMessages", null), C(this, "preserve", null), C(this, "lastValidatePromise", null), C(this, "getForm", function() {
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
  }), C(this, "getInternalHooks", function(n) {
    return n === yt ? (e.formHooked = !0, {
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
    }) : (de(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), C(this, "useSubscribe", function(n) {
    e.subscribable = n;
  }), C(this, "prevWithoutPreserves", null), C(this, "setInitialValues", function(n, a) {
    if (e.initialValues = n || {}, a) {
      var i, o = Kt(n, e.store);
      (i = e.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var u = s.key;
        o = lt(o, u, pt(n, u));
      }), e.prevWithoutPreserves = null, e.updateStore(o);
    }
  }), C(this, "destroyForm", function(n) {
    if (n)
      e.updateStore({});
    else {
      var a = new Rt();
      e.getFieldEntities(!0).forEach(function(i) {
        e.isMergedPreserve(i.isPreserve()) || a.set(i.getNamePath(), !0);
      }), e.prevWithoutPreserves = a;
    }
  }), C(this, "getInitialValue", function(n) {
    var a = pt(e.initialValues, n);
    return n.length ? Kt(a) : a;
  }), C(this, "setCallbacks", function(n) {
    e.callbacks = n;
  }), C(this, "setValidateMessages", function(n) {
    e.validateMessages = n;
  }), C(this, "setPreserve", function(n) {
    e.preserve = n;
  }), C(this, "watchList", []), C(this, "registerWatch", function(n) {
    return e.watchList.push(n), function() {
      e.watchList = e.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), C(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (e.watchList.length) {
      var a = e.getFieldsValue(), i = e.getFieldsValue(!0);
      e.watchList.forEach(function(o) {
        o(a, i, n);
      });
    }
  }), C(this, "timeoutId", null), C(this, "warningUnhooked", function() {
    H.env.NODE_ENV !== "production" && !e.timeoutId && typeof window < "u" && (e.timeoutId = setTimeout(function() {
      e.timeoutId = null, e.formHooked || de(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), C(this, "updateStore", function(n) {
    e.store = n;
  }), C(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? e.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : e.fieldEntities;
  }), C(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Rt();
    return e.getFieldEntities(n).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }), C(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return e.getFieldEntities(!0);
    var a = e.getFieldsMap(!0);
    return n.map(function(i) {
      var o = re(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: re(i)
      };
    });
  }), C(this, "getFieldsValue", function(n, a) {
    e.warningUnhooked();
    var i, o, s;
    if (n === !0 || Array.isArray(n) ? (i = n, o = a) : n && ge(n) === "object" && (s = n.strict, o = n.filter), i === !0 && !o)
      return e.store;
    var u = e.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), c = [];
    return u.forEach(function(l) {
      var v, m, y = "INVALIDATE_NAME_PATH" in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
      if (s) {
        var h, g;
        if ((h = (g = l).isList) !== null && h !== void 0 && h.call(g))
          return;
      } else if (!i && (v = (m = l).isListField) !== null && v !== void 0 && v.call(m))
        return;
      if (!o)
        c.push(y);
      else {
        var d = "getMeta" in l ? l.getMeta() : null;
        o(d) && c.push(y);
      }
    }), ea(e.store, c.map(re));
  }), C(this, "getFieldValue", function(n) {
    e.warningUnhooked();
    var a = re(n);
    return pt(e.store, a);
  }), C(this, "getFieldsError", function(n) {
    e.warningUnhooked();
    var a = e.getFieldEntitiesForNamePathList(n);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: re(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), C(this, "getFieldError", function(n) {
    e.warningUnhooked();
    var a = re(n), i = e.getFieldsError([a])[0];
    return i.errors;
  }), C(this, "getFieldWarning", function(n) {
    e.warningUnhooked();
    var a = re(n), i = e.getFieldsError([a])[0];
    return i.warnings;
  }), C(this, "isFieldsTouched", function() {
    e.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a[0], s = a[1], u, c = !1;
    a.length === 0 ? u = null : a.length === 1 ? Array.isArray(o) ? (u = o.map(re), c = !1) : (u = null, c = o) : (u = o.map(re), c = s);
    var l = e.getFieldEntities(!0), v = function(d) {
      return d.isFieldTouched();
    };
    if (!u)
      return c ? l.every(function(g) {
        return v(g) || g.isList();
      }) : l.some(v);
    var m = new Rt();
    u.forEach(function(g) {
      m.set(g, []);
    }), l.forEach(function(g) {
      var d = g.getNamePath();
      u.forEach(function(b) {
        b.every(function(p, w) {
          return d[w] === p;
        }) && m.update(b, function(p) {
          return [].concat(D(p), [g]);
        });
      });
    });
    var y = function(d) {
      return d.some(v);
    }, h = m.map(function(g) {
      var d = g.value;
      return d;
    });
    return c ? h.every(y) : h.some(y);
  }), C(this, "isFieldTouched", function(n) {
    return e.warningUnhooked(), e.isFieldsTouched([n]);
  }), C(this, "isFieldsValidating", function(n) {
    e.warningUnhooked();
    var a = e.getFieldEntities();
    if (!n)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = n.map(re);
    return a.some(function(o) {
      var s = o.getNamePath();
      return xt(i, s) && o.isFieldValidating();
    });
  }), C(this, "isFieldValidating", function(n) {
    return e.warningUnhooked(), e.isFieldsValidating([n]);
  }), C(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Rt(), i = e.getFieldEntities(!0);
    i.forEach(function(u) {
      var c = u.props.initialValue, l = u.getNamePath();
      if (c !== void 0) {
        var v = a.get(l) || /* @__PURE__ */ new Set();
        v.add({
          entity: u,
          value: c
        }), a.set(l, v);
      }
    });
    var o = function(c) {
      c.forEach(function(l) {
        var v = l.props.initialValue;
        if (v !== void 0) {
          var m = l.getNamePath(), y = e.getInitialValue(m);
          if (y !== void 0)
            de(!1, "Form already set 'initialValues' with path '".concat(m.join("."), "'. Field can not overwrite it."));
          else {
            var h = a.get(m);
            if (h && h.size > 1)
              de(!1, "Multiple Field with path '".concat(m.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (h) {
              var g = e.getFieldValue(m), d = l.isListField();
              !d && (!n.skipExist || g === void 0) && e.updateStore(lt(e.store, m, D(h)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(u) {
      var c = a.get(u);
      if (c) {
        var l;
        (l = s).push.apply(l, D(D(c).map(function(v) {
          return v.entity;
        })));
      }
    })) : s = i, o(s);
  }), C(this, "resetFields", function(n) {
    e.warningUnhooked();
    var a = e.store;
    if (!n) {
      e.updateStore(Kt(e.initialValues)), e.resetWithFieldInitialValue(), e.notifyObservers(a, null, {
        type: "reset"
      }), e.notifyWatch();
      return;
    }
    var i = n.map(re);
    i.forEach(function(o) {
      var s = e.getInitialValue(o);
      e.updateStore(lt(e.store, o, s));
    }), e.resetWithFieldInitialValue({
      namePathList: i
    }), e.notifyObservers(a, i, {
      type: "reset"
    }), e.notifyWatch(i);
  }), C(this, "setFields", function(n) {
    e.warningUnhooked();
    var a = e.store, i = [];
    n.forEach(function(o) {
      var s = o.name, u = er(o, Zo), c = re(s);
      i.push(c), "value" in u && e.updateStore(lt(e.store, c, u.value)), e.notifyObservers(a, [c], {
        type: "setField",
        data: o
      });
    }), e.notifyWatch(i);
  }), C(this, "getFields", function() {
    var n = e.getFieldEntities(!0), a = n.map(function(i) {
      var o = i.getNamePath(), s = i.getMeta(), u = N(N({}, s), {}, {
        name: o,
        value: e.getFieldValue(o)
      });
      return Object.defineProperty(u, "originRCField", {
        value: !0
      }), u;
    });
    return a;
  }), C(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var i = n.getNamePath(), o = pt(e.store, i);
      o === void 0 && e.updateStore(lt(e.store, i, a));
    }
  }), C(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : e.preserve;
    return a ?? !0;
  }), C(this, "registerField", function(n) {
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
      var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (e.fieldEntities = e.fieldEntities.filter(function(v) {
        return v !== n;
      }), !e.isMergedPreserve(s) && (!o || u.length > 1)) {
        var c = o ? void 0 : e.getInitialValue(a);
        if (a.length && e.getFieldValue(a) !== c && e.fieldEntities.every(function(v) {
          return (
            // Only reset when no namePath exist
            !Na(v.getNamePath(), a)
          );
        })) {
          var l = e.store;
          e.updateStore(lt(l, a, c, !0)), e.notifyObservers(l, [a], {
            type: "remove"
          }), e.triggerDependenciesUpdate(l, a);
        }
      }
      e.notifyWatch([a]);
    };
  }), C(this, "dispatch", function(n) {
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
  }), C(this, "notifyObservers", function(n, a, i) {
    if (e.subscribable) {
      var o = N(N({}, i), {}, {
        store: e.getFieldsValue(!0)
      });
      e.getFieldEntities().forEach(function(s) {
        var u = s.onStoreChange;
        u(n, a, o);
      });
    } else
      e.forceRootUpdate();
  }), C(this, "triggerDependenciesUpdate", function(n, a) {
    var i = e.getDependencyChildrenFields(a);
    return i.length && e.validateFields(i), e.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(D(i))
    }), i;
  }), C(this, "updateValue", function(n, a) {
    var i = re(n), o = e.store;
    e.updateStore(lt(e.store, i, a)), e.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), e.notifyWatch([i]);
    var s = e.triggerDependenciesUpdate(o, i), u = e.callbacks.onValuesChange;
    if (u) {
      var c = ea(e.store, [i]);
      u(c, e.getFieldsValue());
    }
    e.triggerOnFieldsChange([i].concat(D(s)));
  }), C(this, "setFieldsValue", function(n) {
    e.warningUnhooked();
    var a = e.store;
    if (n) {
      var i = Kt(e.store, n);
      e.updateStore(i);
    }
    e.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), e.notifyWatch();
  }), C(this, "setFieldValue", function(n, a) {
    e.setFields([{
      name: n,
      value: a
    }]);
  }), C(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), i = [], o = new Rt();
    e.getFieldEntities().forEach(function(u) {
      var c = u.props.dependencies;
      (c || []).forEach(function(l) {
        var v = re(l);
        o.update(v, function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return m.add(u), m;
        });
      });
    });
    var s = function u(c) {
      var l = o.get(c) || /* @__PURE__ */ new Set();
      l.forEach(function(v) {
        if (!a.has(v)) {
          a.add(v);
          var m = v.getNamePath();
          v.isFieldDirty() && m.length && (i.push(m), u(m));
        }
      });
    };
    return s(n), i;
  }), C(this, "triggerOnFieldsChange", function(n, a) {
    var i = e.callbacks.onFieldsChange;
    if (i) {
      var o = e.getFields();
      if (a) {
        var s = new Rt();
        a.forEach(function(c) {
          var l = c.name, v = c.errors;
          s.set(l, v);
        }), o.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var u = o.filter(function(c) {
        var l = c.name;
        return xt(n, l);
      });
      u.length && i(u, o);
    }
  }), C(this, "validateFields", function(n, a) {
    e.warningUnhooked();
    var i, o;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (i = n, o = a) : o = n;
    var s = !!i, u = s ? i.map(re) : [], c = [], l = String(Date.now()), v = /* @__PURE__ */ new Set(), m = o || {}, y = m.recursive, h = m.dirty;
    e.getFieldEntities(!0).forEach(function(p) {
      if (s || u.push(p.getNamePath()), !(!p.props.rules || !p.props.rules.length) && !(h && !p.isFieldDirty())) {
        var w = p.getNamePath();
        if (v.add(w.join(l)), !s || xt(u, w, y)) {
          var P = p.validateRules(N({
            validateMessages: N(N({}, Sa), e.validateMessages)
          }, o));
          c.push(P.then(function() {
            return {
              name: w,
              errors: [],
              warnings: []
            };
          }).catch(function(F) {
            var E, R = [], x = [];
            return (E = F.forEach) === null || E === void 0 || E.call(F, function(O) {
              var V = O.rule.warningOnly, $ = O.errors;
              V ? x.push.apply(x, D($)) : R.push.apply(R, D($));
            }), R.length ? Promise.reject({
              name: w,
              errors: R,
              warnings: x
            }) : {
              name: w,
              errors: R,
              warnings: x
            };
          }));
        }
      }
    });
    var g = Ko(c);
    e.lastValidatePromise = g, g.catch(function(p) {
      return p;
    }).then(function(p) {
      var w = p.map(function(P) {
        var F = P.name;
        return F;
      });
      e.notifyObservers(e.store, w, {
        type: "validateFinish"
      }), e.triggerOnFieldsChange(w, p);
    });
    var d = g.then(function() {
      return e.lastValidatePromise === g ? Promise.resolve(e.getFieldsValue(u)) : Promise.reject([]);
    }).catch(function(p) {
      var w = p.filter(function(P) {
        return P && P.errors.length;
      });
      return Promise.reject({
        values: e.getFieldsValue(u),
        errorFields: w,
        outOfDate: e.lastValidatePromise !== g
      });
    });
    d.catch(function(p) {
      return p;
    });
    var b = u.filter(function(p) {
      return v.has(p.join(l));
    });
    return e.triggerOnFieldsChange(b), d;
  }), C(this, "submit", function() {
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
  }), this.forceRootUpdate = t;
});
function Ma(r) {
  var t = f.useRef(), e = f.useState({}), n = W(e, 2), a = n[1];
  if (!t.current)
    if (r)
      t.current = r;
    else {
      var i = function() {
        a({});
      }, o = new Go(i);
      t.current = o.getForm();
    }
  return [t.current];
}
var On = /* @__PURE__ */ f.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Jo = function(t) {
  var e = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, i = t.children, o = f.useContext(On), s = f.useRef({});
  return /* @__PURE__ */ f.createElement(On.Provider, {
    value: N(N({}, o), {}, {
      validateMessages: N(N({}, o.validateMessages), e),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, l) {
        n && n(c, {
          changedFields: l,
          forms: s.current
        }), o.triggerFormChange(c, l);
      },
      triggerFormFinish: function(c, l) {
        a && a(c, {
          values: l,
          forms: s.current
        }), o.triggerFormFinish(c, l);
      },
      registerForm: function(c, l) {
        c && (s.current = N(N({}, s.current), {}, C({}, c, l))), o.registerForm(c, l);
      },
      unregisterForm: function(c) {
        var l = N({}, s.current);
        delete l[c], s.current = l, o.unregisterForm(c);
      }
    })
  }, i);
}, Qo = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Yo = function(t, e) {
  var n = t.name, a = t.initialValues, i = t.fields, o = t.form, s = t.preserve, u = t.children, c = t.component, l = c === void 0 ? "form" : c, v = t.validateMessages, m = t.validateTrigger, y = m === void 0 ? "onChange" : m, h = t.onValuesChange, g = t.onFieldsChange, d = t.onFinish, b = t.onFinishFailed, p = t.clearOnDestroy, w = er(t, Qo), P = f.useRef(null), F = f.useContext(On), E = Ma(o), R = W(E, 1), x = R[0], O = x.getInternalHooks(yt), V = O.useSubscribe, $ = O.setInitialValues, A = O.setCallbacks, k = O.setValidateMessages, M = O.setPreserve, Z = O.destroyForm;
  f.useImperativeHandle(e, function() {
    return N(N({}, x), {}, {
      nativeElement: P.current
    });
  }), f.useEffect(function() {
    return F.registerForm(n, x), function() {
      F.unregisterForm(n);
    };
  }, [F, x, n]), k(N(N({}, F.validateMessages), v)), A({
    onValuesChange: h,
    onFieldsChange: function(I) {
      if (F.triggerFormChange(n, I), g) {
        for (var Q = arguments.length, ie = new Array(Q > 1 ? Q - 1 : 0), Pe = 1; Pe < Q; Pe++)
          ie[Pe - 1] = arguments[Pe];
        g.apply(void 0, [I].concat(ie));
      }
    },
    onFinish: function(I) {
      F.triggerFormFinish(n, I), d && d(I);
    },
    onFinishFailed: b
  }), M(s);
  var j = f.useRef(null);
  $(a, !j.current), j.current || (j.current = !0), f.useEffect(
    function() {
      return function() {
        return Z(p);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var B, J = typeof u == "function";
  if (J) {
    var te = x.getFieldsValue(!0);
    B = u(te, x);
  } else
    B = u;
  V(!J);
  var L = f.useRef();
  f.useEffect(function() {
    Wo(L.current || [], i || []) || x.setFields(i || []), L.current = i;
  }, [i, x]);
  var Ie = f.useMemo(function() {
    return N(N({}, x), {}, {
      validateTrigger: y
    });
  }, [x, y]), le = /* @__PURE__ */ f.createElement(Nr.Provider, {
    value: null
  }, /* @__PURE__ */ f.createElement(_t.Provider, {
    value: Ie
  }, B));
  return l === !1 ? le : /* @__PURE__ */ f.createElement(l, At({}, w, {
    ref: P,
    onSubmit: function(I) {
      I.preventDefault(), I.stopPropagation(), x.submit();
    },
    onReset: function(I) {
      var Q;
      I.preventDefault(), x.resetFields(), (Q = w.onReset) === null || Q === void 0 || Q.call(w, I);
    }
  }), le);
};
function ra(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return Math.random();
  }
}
var Xo = H.env.NODE_ENV !== "production" ? function(r) {
  var t = r.join("__RC_FIELD_FORM_SPLIT__"), e = f.useRef(t);
  de(e.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function es() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  var n = t[0], a = t[1], i = a === void 0 ? {} : a, o = so(i) ? {
    form: i
  } : i, s = o.form, u = f.useState(), c = W(u, 2), l = c[0], v = c[1], m = f.useMemo(function() {
    return ra(l);
  }, [l]), y = f.useRef(m);
  y.current = m;
  var h = f.useContext(_t), g = s || h, d = g && g._init;
  H.env.NODE_ENV !== "production" && de(t.length === 2 ? s ? d : !0 : d, "useWatch requires a form instance since it can not auto detect from context.");
  var b = re(n), p = f.useRef(b);
  return p.current = b, Xo(b), f.useEffect(
    function() {
      if (d) {
        var w = g.getFieldsValue, P = g.getInternalHooks, F = P(yt), E = F.registerWatch, R = function($, A) {
          var k = o.preserve ? A : $;
          return typeof n == "function" ? n(k) : pt(k, p.current);
        }, x = E(function(V, $) {
          var A = R(V, $), k = ra(A);
          y.current !== k && (y.current = k, v(A));
        }), O = R(w(), w(!0));
        return l !== O && v(O), x;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d]
  ), l;
}
var ts = /* @__PURE__ */ f.forwardRef(Yo), rr = ts;
rr.FormProvider = Jo;
rr.Field = $a;
rr.List = Uo;
rr.useForm = Ma;
rr.useWatch = es;
const Vn = /* @__PURE__ */ f.createContext({});
H.env.NODE_ENV !== "production" && (Vn.displayName = "FormItemInputContext");
const rs = (r) => {
  let {
    children: t,
    status: e,
    override: n
  } = r;
  const a = f.useContext(Vn), i = f.useMemo(() => {
    const o = Object.assign({}, a);
    return n && delete o.isFormItemInput, e && (delete o.status, delete o.hasFeedback, delete o.feedbackIcon), o;
  }, [e, n, a]);
  return /* @__PURE__ */ f.createElement(Vn.Provider, {
    value: i
  }, t);
}, js = /* @__PURE__ */ f.createContext(void 0), ns = (r) => {
  const {
    space: t,
    form: e,
    children: n
  } = r;
  if (n == null)
    return null;
  let a = n;
  return e && (a = /* @__PURE__ */ bt.createElement(rs, {
    override: !0,
    status: !0
  }, a)), t && (a = /* @__PURE__ */ bt.createElement(Ti, null, a)), a;
}, as = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var r = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(r == null ? void 0 : r.substr(0, 4));
};
function is(r) {
  var t = r.prefixCls, e = r.align, n = r.arrow, a = r.arrowPos, i = n || {}, o = i.className, s = i.content, u = a.x, c = u === void 0 ? 0 : u, l = a.y, v = l === void 0 ? 0 : l, m = f.useRef();
  if (!e || !e.points)
    return null;
  var y = {
    position: "absolute"
  };
  if (e.autoArrow !== !1) {
    var h = e.points[0], g = e.points[1], d = h[0], b = h[1], p = g[0], w = g[1];
    d === p || !["t", "b"].includes(d) ? y.top = v : d === "t" ? y.top = 0 : y.bottom = 0, b === w || !["l", "r"].includes(b) ? y.left = c : b === "l" ? y.left = 0 : y.right = 0;
  }
  return /* @__PURE__ */ f.createElement("div", {
    ref: m,
    className: Ae("".concat(t, "-arrow"), o),
    style: y
  }, s);
}
function os(r) {
  var t = r.prefixCls, e = r.open, n = r.zIndex, a = r.mask, i = r.motion;
  return a ? /* @__PURE__ */ f.createElement(va, At({}, i, {
    motionAppear: !0,
    visible: e,
    removeOnLeave: !0
  }), function(o) {
    var s = o.className;
    return /* @__PURE__ */ f.createElement("div", {
      style: {
        zIndex: n
      },
      className: Ae("".concat(t, "-mask"), s)
    });
  }) : null;
}
var _a = /* @__PURE__ */ f.memo(function(r) {
  var t = r.children;
  return t;
}, function(r, t) {
  return t.cache;
});
H.env.NODE_ENV !== "production" && (_a.displayName = "PopupContent");
var ka = /* @__PURE__ */ f.forwardRef(function(r, t) {
  var e = r.popup, n = r.className, a = r.prefixCls, i = r.style, o = r.target, s = r.onVisibleChanged, u = r.open, c = r.keepDom, l = r.fresh, v = r.onClick, m = r.mask, y = r.arrow, h = r.arrowPos, g = r.align, d = r.motion, b = r.maskMotion, p = r.forceRender, w = r.getPopupContainer, P = r.autoDestroy, F = r.portal, E = r.zIndex, R = r.onMouseEnter, x = r.onMouseLeave, O = r.onPointerEnter, V = r.onPointerDownCapture, $ = r.ready, A = r.offsetX, k = r.offsetY, M = r.offsetR, Z = r.offsetB, j = r.onAlign, B = r.onPrepare, J = r.stretch, te = r.targetWidth, L = r.targetHeight, Ie = typeof e == "function" ? e() : e, le = u || c, X = (w == null ? void 0 : w.length) > 0, I = f.useState(!w || !X), Q = W(I, 2), ie = Q[0], Pe = Q[1];
  if (Fe(function() {
    !ie && X && o && Pe(!0);
  }, [ie, X, o]), !ie)
    return null;
  var Oe = "auto", oe = {
    left: "-1000vw",
    top: "-1000vh",
    right: Oe,
    bottom: Oe
  };
  if ($ || !u) {
    var Ve, Re = g.points, pe = g.dynamicInset || ((Ve = g._experimental) === null || Ve === void 0 ? void 0 : Ve.dynamicInset), Se = pe && Re[0][1] === "r", be = pe && Re[0][0] === "b";
    Se ? (oe.right = M, oe.left = Oe) : (oe.left = A, oe.right = Oe), be ? (oe.bottom = Z, oe.top = Oe) : (oe.top = k, oe.bottom = Oe);
  }
  var ce = {};
  return J && (J.includes("height") && L ? ce.height = L : J.includes("minHeight") && L && (ce.minHeight = L), J.includes("width") && te ? ce.width = te : J.includes("minWidth") && te && (ce.minWidth = te)), u || (ce.pointerEvents = "none"), /* @__PURE__ */ f.createElement(F, {
    open: p || le,
    getContainer: w && function() {
      return w(o);
    },
    autoDestroy: P
  }, /* @__PURE__ */ f.createElement(os, {
    prefixCls: a,
    open: u,
    zIndex: E,
    mask: m,
    motion: b
  }), /* @__PURE__ */ f.createElement(xr, {
    onResize: j,
    disabled: !u
  }, function(Ge) {
    return /* @__PURE__ */ f.createElement(va, At({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: p,
      leavedClassName: "".concat(a, "-hidden")
    }, d, {
      onAppearPrepare: B,
      onEnterPrepare: B,
      visible: u,
      onVisibleChanged: function(ye) {
        var Ne;
        d == null || (Ne = d.onVisibleChanged) === null || Ne === void 0 || Ne.call(d, ye), s(ye);
      }
    }), function(We, ye) {
      var Ne = We.className, Je = We.style, se = Ae(a, Ne, n);
      return /* @__PURE__ */ f.createElement("div", {
        ref: Za(Ge, t, ye),
        className: se,
        style: N(N(N(N({
          "--arrow-x": "".concat(h.x || 0, "px"),
          "--arrow-y": "".concat(h.y || 0, "px")
        }, oe), ce), Je), {}, {
          boxSizing: "border-box",
          zIndex: E
        }, i),
        onMouseEnter: R,
        onMouseLeave: x,
        onPointerEnter: O,
        onClick: v,
        onPointerDownCapture: V
      }, y && /* @__PURE__ */ f.createElement(is, {
        prefixCls: a,
        arrow: y,
        arrowPos: h,
        align: g
      }), /* @__PURE__ */ f.createElement(_a, {
        cache: !u && !l
      }, Ie));
    });
  }));
});
H.env.NODE_ENV !== "production" && (ka.displayName = "Popup");
var Ta = /* @__PURE__ */ f.forwardRef(function(r, t) {
  var e = r.children, n = r.getTriggerDOMNode, a = $n(e), i = f.useCallback(function(s) {
    Ga(t, n ? n(s) : s);
  }, [n]), o = xn(i, e.ref);
  return a ? /* @__PURE__ */ f.cloneElement(e, {
    ref: o
  }) : e;
});
H.env.NODE_ENV !== "production" && (Ta.displayName = "TriggerWrapper");
var na = /* @__PURE__ */ f.createContext(null);
function aa(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
function ss(r, t, e, n) {
  return f.useMemo(function() {
    var a = aa(e ?? t), i = aa(n ?? t), o = new Set(a), s = new Set(i);
    return r && (o.has("hover") && (o.delete("hover"), o.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [o, s];
  }, [r, t, e, n]);
}
function us() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = arguments.length > 2 ? arguments[2] : void 0;
  return e ? r[0] === t[0] : r[0] === t[0] && r[1] === t[1];
}
function ls(r, t, e, n) {
  for (var a = e.points, i = Object.keys(r), o = 0; o < i.length; o += 1) {
    var s, u = i[o];
    if (us((s = r[u]) === null || s === void 0 ? void 0 : s.points, a, n))
      return "".concat(t, "-placement-").concat(u);
  }
  return "";
}
function ia(r, t, e, n) {
  return t || (e ? {
    motionName: "".concat(r, "-").concat(e)
  } : n ? {
    motionName: n
  } : null);
}
function nr(r) {
  return r.ownerDocument.defaultView;
}
function Rn(r) {
  for (var t = [], e = r == null ? void 0 : r.parentElement, n = ["hidden", "scroll", "clip", "auto"]; e; ) {
    var a = nr(e).getComputedStyle(e), i = a.overflowX, o = a.overflowY, s = a.overflow;
    [i, o, s].some(function(u) {
      return n.includes(u);
    }) && t.push(e), e = e.parentElement;
  }
  return t;
}
function Yt(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(r) ? t : r;
}
function Ut(r) {
  return Yt(parseFloat(r), 0);
}
function oa(r, t) {
  var e = N({}, r);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var a = nr(n).getComputedStyle(n), i = a.overflow, o = a.overflowClipMargin, s = a.borderTopWidth, u = a.borderBottomWidth, c = a.borderLeftWidth, l = a.borderRightWidth, v = n.getBoundingClientRect(), m = n.offsetHeight, y = n.clientHeight, h = n.offsetWidth, g = n.clientWidth, d = Ut(s), b = Ut(u), p = Ut(c), w = Ut(l), P = Yt(Math.round(v.width / h * 1e3) / 1e3), F = Yt(Math.round(v.height / m * 1e3) / 1e3), E = (h - g - p - w) * P, R = (m - y - d - b) * F, x = d * F, O = b * F, V = p * P, $ = w * P, A = 0, k = 0;
      if (i === "clip") {
        var M = Ut(o);
        A = M * P, k = M * F;
      }
      var Z = v.x + V - A, j = v.y + x - k, B = Z + v.width + 2 * A - V - $ - E, J = j + v.height + 2 * k - x - O - R;
      e.left = Math.max(e.left, Z), e.top = Math.max(e.top, j), e.right = Math.min(e.right, B), e.bottom = Math.min(e.bottom, J);
    }
  }), e;
}
function sa(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = "".concat(t), n = e.match(/^(.*)\%$/);
  return n ? r * (parseFloat(n[1]) / 100) : parseFloat(e);
}
function ua(r, t) {
  var e = t || [], n = W(e, 2), a = n[0], i = n[1];
  return [sa(r.width, a), sa(r.height, i)];
}
function la() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [r[0], r[1]];
}
function St(r, t) {
  var e = t[0], n = t[1], a, i;
  return e === "t" ? i = r.y : e === "b" ? i = r.y + r.height : i = r.y + r.height / 2, n === "l" ? a = r.x : n === "r" ? a = r.x + r.width : a = r.x + r.width / 2, {
    x: a,
    y: i
  };
}
function ut(r, t) {
  var e = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return r.map(function(n, a) {
    return a === t ? e[n] || "c" : n;
  }).join("");
}
function cs(r, t, e, n, a, i, o) {
  var s = f.useState({
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
  }), u = W(s, 2), c = u[0], l = u[1], v = f.useRef(0), m = f.useMemo(function() {
    return t ? Rn(t) : [];
  }, [t]), y = f.useRef({}), h = function() {
    y.current = {};
  };
  r || h();
  var g = et(function() {
    if (t && e && r) {
      let _e = function(Ot, ot) {
        var st = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ve, Bt = I.x + Ot, wr = I.y + ot, Qr = Bt + Se, Yr = wr + pe, Xr = Math.max(Bt, st.left), S = Math.max(wr, st.top), _ = Math.min(Qr, st.right), Y = Math.min(Yr, st.bottom);
        return Math.max(0, (_ - Xr) * (Y - S));
      }, br = function() {
        dt = I.y + G, vt = dt + pe, Ye = I.x + K, Ct = Ye + Se;
      };
      var p, w, P, F, E = t, R = E.ownerDocument, x = nr(E), O = x.getComputedStyle(E), V = O.width, $ = O.height, A = O.position, k = E.style.left, M = E.style.top, Z = E.style.right, j = E.style.bottom, B = E.style.overflow, J = N(N({}, a[n]), i), te = R.createElement("div");
      (p = E.parentElement) === null || p === void 0 || p.appendChild(te), te.style.left = "".concat(E.offsetLeft, "px"), te.style.top = "".concat(E.offsetTop, "px"), te.style.position = A, te.style.height = "".concat(E.offsetHeight, "px"), te.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var L;
      if (Array.isArray(e))
        L = {
          x: e[0],
          y: e[1],
          width: 0,
          height: 0
        };
      else {
        var Ie, le, X = e.getBoundingClientRect();
        X.x = (Ie = X.x) !== null && Ie !== void 0 ? Ie : X.left, X.y = (le = X.y) !== null && le !== void 0 ? le : X.top, L = {
          x: X.x,
          y: X.y,
          width: X.width,
          height: X.height
        };
      }
      var I = E.getBoundingClientRect();
      I.x = (w = I.x) !== null && w !== void 0 ? w : I.left, I.y = (P = I.y) !== null && P !== void 0 ? P : I.top;
      var Q = R.documentElement, ie = Q.clientWidth, Pe = Q.clientHeight, Oe = Q.scrollWidth, oe = Q.scrollHeight, Ve = Q.scrollTop, Re = Q.scrollLeft, pe = I.height, Se = I.width, be = L.height, ce = L.width, Ge = {
        left: 0,
        top: 0,
        right: ie,
        bottom: Pe
      }, We = {
        left: -Re,
        top: -Ve,
        right: Oe - Re,
        bottom: oe - Ve
      }, ye = J.htmlRegion, Ne = "visible", Je = "visibleFirst";
      ye !== "scroll" && ye !== Je && (ye = Ne);
      var se = ye === Je, Dt = oa(We, m), T = oa(Ge, m), ve = ye === Ne ? T : Dt, fe = se ? T : ve;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var he = E.getBoundingClientRect();
      E.style.left = k, E.style.top = M, E.style.right = Z, E.style.bottom = j, E.style.overflow = B, (F = E.parentElement) === null || F === void 0 || F.removeChild(te);
      var rt = Yt(Math.round(Se / parseFloat(V) * 1e3) / 1e3), Qe = Yt(Math.round(pe / parseFloat($) * 1e3) / 1e3);
      if (rt === 0 || Qe === 0 || dn(e) && !ki(e))
        return;
      var Mr = J.offset, _r = J.targetOffset, ar = ua(I, Mr), Le = W(ar, 2), ze = Le[0], $e = Le[1], kr = ua(L, _r), ct = W(kr, 2), xe = ct[0], nt = ct[1];
      L.x -= xe, L.y -= nt;
      var Tr = J.points || [], ir = W(Tr, 2), Ar = ir[0], Dr = ir[1], He = la(Dr), we = la(Ar), It = St(L, He), me = St(I, we), at = N({}, J), K = It.x - me.x + ze, G = It.y - me.y + $e, je = _e(K, G), ft = _e(K, G, T), Lt = St(L, ["t", "l"]), Me = St(I, ["t", "l"]), or = St(L, ["b", "r"]), zt = St(I, ["b", "r"]), it = J.overflow || {}, sr = it.adjustX, Ir = it.adjustY, jt = it.shiftX, wt = it.shiftY, qt = function(ot) {
        return typeof ot == "boolean" ? ot : ot >= 0;
      }, dt, vt, Ye, Ct;
      br();
      var ht = qt(Ir), ur = we[0] === He[0];
      if (ht && we[0] === "t" && (vt > fe.bottom || y.current.bt)) {
        var ue = G;
        ur ? ue -= pe - be : ue = Lt.y - zt.y - $e;
        var lr = _e(K, ue), Lr = _e(K, ue, T);
        // Of course use larger one
        lr > je || lr === je && (!se || // Choose recommend one
        Lr >= ft) ? (y.current.bt = !0, G = ue, $e = -$e, at.points = [ut(we, 0), ut(He, 0)]) : y.current.bt = !1;
      }
      if (ht && we[0] === "b" && (dt < fe.top || y.current.tb)) {
        var mt = G;
        ur ? mt += pe - be : mt = or.y - Me.y - $e;
        var cr = _e(K, mt), zr = _e(K, mt, T);
        // Of course use larger one
        cr > je || cr === je && (!se || // Choose recommend one
        zr >= ft) ? (y.current.tb = !0, G = mt, $e = -$e, at.points = [ut(we, 0), ut(He, 0)]) : y.current.tb = !1;
      }
      var fr = qt(sr), dr = we[1] === He[1];
      if (fr && we[1] === "l" && (Ct > fe.right || y.current.rl)) {
        var gt = K;
        dr ? gt -= Se - ce : gt = Lt.x - zt.x - ze;
        var vr = _e(gt, G), Ft = _e(gt, G, T);
        // Of course use larger one
        vr > je || vr === je && (!se || // Choose recommend one
        Ft >= ft) ? (y.current.rl = !0, K = gt, ze = -ze, at.points = [ut(we, 1), ut(He, 1)]) : y.current.rl = !1;
      }
      if (fr && we[1] === "r" && (Ye < fe.left || y.current.lr)) {
        var Xe = K;
        dr ? Xe += Se - ce : Xe = or.x - Me.x - ze;
        var hr = _e(Xe, G), mr = _e(Xe, G, T);
        // Of course use larger one
        hr > je || hr === je && (!se || // Choose recommend one
        mr >= ft) ? (y.current.lr = !0, K = Xe, ze = -ze, at.points = [ut(we, 1), ut(He, 1)]) : y.current.lr = !1;
      }
      br();
      var Be = jt === !0 ? 0 : jt;
      typeof Be == "number" && (Ye < T.left && (K -= Ye - T.left - ze, L.x + ce < T.left + Be && (K += L.x - T.left + ce - Be)), Ct > T.right && (K -= Ct - T.right - ze, L.x > T.right - Be && (K += L.x - T.right + Be)));
      var qe = wt === !0 ? 0 : wt;
      typeof qe == "number" && (dt < T.top && (G -= dt - T.top - $e, L.y + be < T.top + qe && (G += L.y - T.top + be - qe)), vt > T.bottom && (G -= vt - T.bottom - $e, L.y > T.bottom - qe && (G += L.y - T.bottom + qe)));
      var Et = I.x + K, Pt = Et + Se, Ue = I.y + G, jr = Ue + pe, gr = L.x, qr = gr + ce, Wt = L.y, Wr = Wt + be, Hr = Math.max(Et, gr), Br = Math.min(Pt, qr), pr = (Hr + Br) / 2, Ur = pr - Et, Kr = Math.max(Ue, Wt), yr = Math.min(jr, Wr), Zr = (Kr + yr) / 2, Gr = Zr - Ue;
      o == null || o(t, at);
      var Ht = he.right - I.x - (K + I.width), Ke = he.bottom - I.y - (G + I.height);
      rt === 1 && (K = Math.round(K), Ht = Math.round(Ht)), Qe === 1 && (G = Math.round(G), Ke = Math.round(Ke));
      var Jr = {
        ready: !0,
        offsetX: K / rt,
        offsetY: G / Qe,
        offsetR: Ht / rt,
        offsetB: Ke / Qe,
        arrowX: Ur / rt,
        arrowY: Gr / Qe,
        scaleX: rt,
        scaleY: Qe,
        align: at
      };
      l(Jr);
    }
  }), d = function() {
    v.current += 1;
    var w = v.current;
    Promise.resolve().then(function() {
      v.current === w && g();
    });
  }, b = function() {
    l(function(w) {
      return N(N({}, w), {}, {
        ready: !1
      });
    });
  };
  return Fe(b, [n]), Fe(function() {
    r || b();
  }, [r]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, d];
}
function fs(r, t, e, n, a) {
  Fe(function() {
    if (r && t && e) {
      let v = function() {
        n(), a();
      };
      var i = t, o = e, s = Rn(i), u = Rn(o), c = nr(o), l = new Set([c].concat(D(s), D(u)));
      return l.forEach(function(m) {
        m.addEventListener("scroll", v, {
          passive: !0
        });
      }), c.addEventListener("resize", v, {
        passive: !0
      }), n(), function() {
        l.forEach(function(m) {
          m.removeEventListener("scroll", v), c.removeEventListener("resize", v);
        });
      };
    }
  }, [r, t, e]);
}
function ds(r, t, e, n, a, i, o, s) {
  var u = f.useRef(r);
  u.current = r;
  var c = f.useRef(!1);
  f.useEffect(function() {
    if (t && n && (!a || i)) {
      var v = function() {
        c.current = !1;
      }, m = function(P) {
        var F;
        u.current && !o(((F = P.composedPath) === null || F === void 0 || (F = F.call(P)) === null || F === void 0 ? void 0 : F[0]) || P.target) && !c.current && s(!1);
      }, y = nr(n);
      y.addEventListener("pointerdown", v, !0), y.addEventListener("mousedown", m, !0), y.addEventListener("contextmenu", m, !0);
      var h = vn(e);
      if (h && (h.addEventListener("mousedown", m, !0), h.addEventListener("contextmenu", m, !0)), H.env.NODE_ENV !== "production") {
        var g, d, b = e == null || (g = e.getRootNode) === null || g === void 0 ? void 0 : g.call(e), p = (d = n.getRootNode) === null || d === void 0 ? void 0 : d.call(n);
        cn(b === p, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        y.removeEventListener("pointerdown", v, !0), y.removeEventListener("mousedown", m, !0), y.removeEventListener("contextmenu", m, !0), h && (h.removeEventListener("mousedown", m, !0), h.removeEventListener("contextmenu", m, !0));
      };
    }
  }, [t, e, n, a, i]);
  function l() {
    c.current = !0;
  }
  return l;
}
var vs = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function hs() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mn, t = /* @__PURE__ */ f.forwardRef(function(e, n) {
    var a = e.prefixCls, i = a === void 0 ? "rc-trigger-popup" : a, o = e.children, s = e.action, u = s === void 0 ? "hover" : s, c = e.showAction, l = e.hideAction, v = e.popupVisible, m = e.defaultPopupVisible, y = e.onPopupVisibleChange, h = e.afterPopupVisibleChange, g = e.mouseEnterDelay, d = e.mouseLeaveDelay, b = d === void 0 ? 0.1 : d, p = e.focusDelay, w = e.blurDelay, P = e.mask, F = e.maskClosable, E = F === void 0 ? !0 : F, R = e.getPopupContainer, x = e.forceRender, O = e.autoDestroy, V = e.destroyPopupOnHide, $ = e.popup, A = e.popupClassName, k = e.popupStyle, M = e.popupPlacement, Z = e.builtinPlacements, j = Z === void 0 ? {} : Z, B = e.popupAlign, J = e.zIndex, te = e.stretch, L = e.getPopupClassNameFromAlign, Ie = e.fresh, le = e.alignPoint, X = e.onPopupClick, I = e.onPopupAlign, Q = e.arrow, ie = e.popupMotion, Pe = e.maskMotion, Oe = e.popupTransitionName, oe = e.popupAnimation, Ve = e.maskTransitionName, Re = e.maskAnimation, pe = e.className, Se = e.getTriggerDOMNode, be = er(e, vs), ce = O || V || !1, Ge = f.useState(!1), We = W(Ge, 2), ye = We[0], Ne = We[1];
    Fe(function() {
      Ne(as());
    }, []);
    var Je = f.useRef({}), se = f.useContext(na), Dt = f.useMemo(function() {
      return {
        registerSubPopup: function(_, Y) {
          Je.current[_] = Y, se == null || se.registerSubPopup(_, Y);
        }
      };
    }, [se]), T = oo(), ve = f.useState(null), fe = W(ve, 2), he = fe[0], rt = fe[1], Qe = f.useRef(null), Mr = et(function(S) {
      Qe.current = S, dn(S) && he !== S && rt(S), se == null || se.registerSubPopup(T, S);
    }), _r = f.useState(null), ar = W(_r, 2), Le = ar[0], ze = ar[1], $e = f.useRef(null), kr = et(function(S) {
      dn(S) && Le !== S && (ze(S), $e.current = S);
    }), ct = f.Children.only(o), xe = (ct == null ? void 0 : ct.props) || {}, nt = {}, Tr = et(function(S) {
      var _, Y, ne = Le;
      return (ne == null ? void 0 : ne.contains(S)) || ((_ = vn(ne)) === null || _ === void 0 ? void 0 : _.host) === S || S === ne || (he == null ? void 0 : he.contains(S)) || ((Y = vn(he)) === null || Y === void 0 ? void 0 : Y.host) === S || S === he || Object.values(Je.current).some(function(ee) {
        return (ee == null ? void 0 : ee.contains(S)) || S === ee;
      });
    }), ir = ia(i, ie, oe, Oe), Ar = ia(i, Pe, Re, Ve), Dr = f.useState(m || !1), He = W(Dr, 2), we = He[0], It = He[1], me = v ?? we, at = et(function(S) {
      v === void 0 && It(S);
    });
    Fe(function() {
      It(v || !1);
    }, [v]);
    var K = f.useRef(me);
    K.current = me;
    var G = f.useRef([]);
    G.current = [];
    var je = et(function(S) {
      var _;
      at(S), ((_ = G.current[G.current.length - 1]) !== null && _ !== void 0 ? _ : me) !== S && (G.current.push(S), y == null || y(S));
    }), ft = f.useRef(), Lt = function() {
      clearTimeout(ft.current);
    }, Me = function(_) {
      var Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Lt(), Y === 0 ? je(_) : ft.current = setTimeout(function() {
        je(_);
      }, Y * 1e3);
    };
    f.useEffect(function() {
      return Lt;
    }, []);
    var or = f.useState(!1), zt = W(or, 2), it = zt[0], sr = zt[1];
    Fe(function(S) {
      (!S || me) && sr(!0);
    }, [me]);
    var Ir = f.useState(null), jt = W(Ir, 2), wt = jt[0], qt = jt[1], dt = f.useState(null), vt = W(dt, 2), Ye = vt[0], Ct = vt[1], ht = function(_) {
      Ct([_.clientX, _.clientY]);
    }, ur = cs(me, he, le && Ye !== null ? Ye : Le, M, j, B, I), ue = W(ur, 11), lr = ue[0], Lr = ue[1], mt = ue[2], cr = ue[3], zr = ue[4], fr = ue[5], dr = ue[6], gt = ue[7], vr = ue[8], Ft = ue[9], Xe = ue[10], hr = ss(ye, u, c, l), mr = W(hr, 2), Be = mr[0], qe = mr[1], Et = Be.has("click"), Pt = qe.has("click") || qe.has("contextMenu"), Ue = et(function() {
      it || Xe();
    }), jr = function() {
      K.current && le && Pt && Me(!1);
    };
    fs(me, Le, he, Ue, jr), Fe(function() {
      Ue();
    }, [Ye, M]), Fe(function() {
      me && !(j != null && j[M]) && Ue();
    }, [JSON.stringify(B)]);
    var gr = f.useMemo(function() {
      var S = ls(j, i, Ft, le);
      return Ae(S, L == null ? void 0 : L(Ft));
    }, [Ft, L, j, i, le]);
    f.useImperativeHandle(n, function() {
      return {
        nativeElement: $e.current,
        popupElement: Qe.current,
        forceAlign: Ue
      };
    });
    var qr = f.useState(0), Wt = W(qr, 2), Wr = Wt[0], Hr = Wt[1], Br = f.useState(0), pr = W(Br, 2), Ur = pr[0], Kr = pr[1], yr = function() {
      if (te && Le) {
        var _ = Le.getBoundingClientRect();
        Hr(_.width), Kr(_.height);
      }
    }, Zr = function() {
      yr(), Ue();
    }, Gr = function(_) {
      sr(!1), Xe(), h == null || h(_);
    }, Ht = function() {
      return new Promise(function(_) {
        yr(), qt(function() {
          return _;
        });
      });
    };
    Fe(function() {
      wt && (Xe(), wt(), qt(null));
    }, [wt]);
    function Ke(S, _, Y, ne) {
      nt[S] = function(ee) {
        var Cr;
        ne == null || ne(ee), Me(_, Y);
        for (var en = arguments.length, kn = new Array(en > 1 ? en - 1 : 0), Fr = 1; Fr < en; Fr++)
          kn[Fr - 1] = arguments[Fr];
        (Cr = xe[S]) === null || Cr === void 0 || Cr.call.apply(Cr, [xe, ee].concat(kn));
      };
    }
    (Et || Pt) && (nt.onClick = function(S) {
      var _;
      K.current && Pt ? Me(!1) : !K.current && Et && (ht(S), Me(!0));
      for (var Y = arguments.length, ne = new Array(Y > 1 ? Y - 1 : 0), ee = 1; ee < Y; ee++)
        ne[ee - 1] = arguments[ee];
      (_ = xe.onClick) === null || _ === void 0 || _.call.apply(_, [xe, S].concat(ne));
    });
    var Jr = ds(me, Pt, Le, he, P, E, Tr, Me), _e = Be.has("hover"), br = qe.has("hover"), Ot, ot;
    _e && (Ke("onMouseEnter", !0, g, function(S) {
      ht(S);
    }), Ke("onPointerEnter", !0, g, function(S) {
      ht(S);
    }), Ot = function(_) {
      (me || it) && he !== null && he !== void 0 && he.contains(_.target) && Me(!0, g);
    }, le && (nt.onMouseMove = function(S) {
      var _;
      (_ = xe.onMouseMove) === null || _ === void 0 || _.call(xe, S);
    })), br && (Ke("onMouseLeave", !1, b), Ke("onPointerLeave", !1, b), ot = function() {
      Me(!1, b);
    }), Be.has("focus") && Ke("onFocus", !0, p), qe.has("focus") && Ke("onBlur", !1, w), Be.has("contextMenu") && (nt.onContextMenu = function(S) {
      var _;
      K.current && qe.has("contextMenu") ? Me(!1) : (ht(S), Me(!0)), S.preventDefault();
      for (var Y = arguments.length, ne = new Array(Y > 1 ? Y - 1 : 0), ee = 1; ee < Y; ee++)
        ne[ee - 1] = arguments[ee];
      (_ = xe.onContextMenu) === null || _ === void 0 || _.call.apply(_, [xe, S].concat(ne));
    }), pe && (nt.className = Ae(xe.className, pe));
    var st = N(N({}, xe), nt), Bt = {}, wr = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    wr.forEach(function(S) {
      be[S] && (Bt[S] = function() {
        for (var _, Y = arguments.length, ne = new Array(Y), ee = 0; ee < Y; ee++)
          ne[ee] = arguments[ee];
        (_ = st[S]) === null || _ === void 0 || _.call.apply(_, [st].concat(ne)), be[S].apply(be, ne);
      });
    });
    var Qr = /* @__PURE__ */ f.cloneElement(ct, N(N({}, st), Bt)), Yr = {
      x: fr,
      y: dr
    }, Xr = Q ? N({}, Q !== !0 ? Q : {}) : null;
    return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(xr, {
      disabled: !me,
      ref: kr,
      onResize: Zr
    }, /* @__PURE__ */ f.createElement(Ta, {
      getTriggerDOMNode: Se
    }, Qr)), /* @__PURE__ */ f.createElement(na.Provider, {
      value: Dt
    }, /* @__PURE__ */ f.createElement(ka, {
      portal: r,
      ref: Mr,
      prefixCls: i,
      popup: $,
      className: Ae(A, gr),
      style: k,
      target: Le,
      onMouseEnter: Ot,
      onMouseLeave: ot,
      onPointerEnter: Ot,
      zIndex: J,
      open: me,
      keepDom: it,
      fresh: Ie,
      onClick: X,
      onPointerDownCapture: Jr,
      mask: P,
      motion: ir,
      maskMotion: Ar,
      onVisibleChanged: Gr,
      onPrepare: Ht,
      forceRender: x,
      autoDestroy: ce,
      getPopupContainer: R,
      align: Ft,
      arrow: Xr,
      arrowPos: Yr,
      ready: lr,
      offsetX: Lr,
      offsetY: mt,
      offsetR: cr,
      offsetB: zr,
      onAlign: Ue,
      stretch: te,
      targetWidth: Wr / gt,
      targetHeight: Ur / vr
    })));
  });
  return H.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const ms = hs(Mn);
function Aa(r) {
  var t = r.children, e = r.prefixCls, n = r.id, a = r.overlayInnerStyle, i = r.className, o = r.style;
  return /* @__PURE__ */ f.createElement("div", {
    className: Ae("".concat(e, "-content"), i),
    style: o
  }, /* @__PURE__ */ f.createElement("div", {
    className: "".concat(e, "-inner"),
    id: n,
    role: "tooltip",
    style: a
  }, typeof t == "function" ? t() : t));
}
var Nt = {
  shiftX: 64,
  adjustY: 1
}, $t = {
  adjustX: 1,
  shiftY: !0
}, Te = [0, 0], gs = {
  left: {
    points: ["cr", "cl"],
    overflow: $t,
    offset: [-4, 0],
    targetOffset: Te
  },
  right: {
    points: ["cl", "cr"],
    overflow: $t,
    offset: [4, 0],
    targetOffset: Te
  },
  top: {
    points: ["bc", "tc"],
    overflow: Nt,
    offset: [0, -4],
    targetOffset: Te
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Nt,
    offset: [0, 4],
    targetOffset: Te
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Nt,
    offset: [0, -4],
    targetOffset: Te
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: $t,
    offset: [-4, 0],
    targetOffset: Te
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Nt,
    offset: [0, -4],
    targetOffset: Te
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: $t,
    offset: [4, 0],
    targetOffset: Te
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Nt,
    offset: [0, 4],
    targetOffset: Te
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: $t,
    offset: [4, 0],
    targetOffset: Te
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Nt,
    offset: [0, 4],
    targetOffset: Te
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: $t,
    offset: [-4, 0],
    targetOffset: Te
  }
}, ps = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], ys = function(t, e) {
  var n = t.overlayClassName, a = t.trigger, i = a === void 0 ? ["hover"] : a, o = t.mouseEnterDelay, s = o === void 0 ? 0 : o, u = t.mouseLeaveDelay, c = u === void 0 ? 0.1 : u, l = t.overlayStyle, v = t.prefixCls, m = v === void 0 ? "rc-tooltip" : v, y = t.children, h = t.onVisibleChange, g = t.afterVisibleChange, d = t.transitionName, b = t.animation, p = t.motion, w = t.placement, P = w === void 0 ? "right" : w, F = t.align, E = F === void 0 ? {} : F, R = t.destroyTooltipOnHide, x = R === void 0 ? !1 : R, O = t.defaultVisible, V = t.getTooltipContainer, $ = t.overlayInnerStyle;
  t.arrowContent;
  var A = t.overlay, k = t.id, M = t.showArrow, Z = M === void 0 ? !0 : M, j = er(t, ps), B = f.useRef(null);
  f.useImperativeHandle(e, function() {
    return B.current;
  });
  var J = N({}, j);
  "visible" in t && (J.popupVisible = t.visible);
  var te = function() {
    return /* @__PURE__ */ f.createElement(Aa, {
      key: "content",
      prefixCls: m,
      id: k,
      overlayInnerStyle: $
    }, A);
  };
  return /* @__PURE__ */ f.createElement(ms, At({
    popupClassName: n,
    prefixCls: m,
    popup: te,
    action: i,
    builtinPlacements: gs,
    popupPlacement: P,
    ref: B,
    popupAlign: E,
    getPopupContainer: V,
    onPopupVisibleChange: h,
    afterPopupVisibleChange: g,
    popupTransitionName: d,
    popupAnimation: b,
    popupMotion: p,
    defaultPopupVisible: O,
    autoDestroy: x,
    mouseLeaveDelay: c,
    popupStyle: l,
    mouseEnterDelay: s,
    arrow: Z
  }, J), y);
};
const bs = /* @__PURE__ */ f.forwardRef(ys);
function ws(r) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: e,
    borderRadiusOuter: n
  } = r, a = t / 2, i = 0, o = a, s = n * 1 / Math.sqrt(2), u = a - n * (1 - 1 / Math.sqrt(2)), c = a - e * (1 / Math.sqrt(2)), l = n * (Math.sqrt(2) - 1) + e * (1 / Math.sqrt(2)), v = 2 * a - c, m = l, y = 2 * a - s, h = u, g = 2 * a - i, d = o, b = a * Math.sqrt(2) + n * (Math.sqrt(2) - 2), p = n * (Math.sqrt(2) - 1), w = `polygon(${p}px 100%, 50% ${p}px, ${2 * a - p}px 100%, ${p}px 100%)`, P = `path('M ${i} ${o} A ${n} ${n} 0 0 0 ${s} ${u} L ${c} ${l} A ${e} ${e} 0 0 1 ${v} ${m} L ${y} ${h} A ${n} ${n} 0 0 0 ${g} ${d} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: P,
    arrowPolygon: w
  };
}
const Cs = (r, t, e) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: a,
    arrowPath: i,
    arrowShadowWidth: o,
    borderRadiusXS: s,
    calc: u
  } = r;
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
      height: u(n).div(2).equal(),
      background: t,
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
        value: `0 0 ${Qt(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: e,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Da = 8;
function Ia(r) {
  const {
    contentRadius: t,
    limitVerticalRadius: e
  } = r, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: e ? Da : n
  };
}
function Pr(r, t) {
  return r ? t : {};
}
function Fs(r, t, e) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: a,
    arrowOffsetVertical: i,
    arrowOffsetHorizontal: o
  } = r, {
    arrowDistance: s = 0,
    arrowPlacement: u = {
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
      }, Cs(r, t, a)), {
        "&:before": {
          background: t
        }
      })]
    }, Pr(!!u.top, {
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
        "--arrow-offset-horizontal": `calc(100% - ${Qt(o)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: o
          }
        }
      }
    })), Pr(!!u.bottom, {
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
        "--arrow-offset-horizontal": `calc(100% - ${Qt(o)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: o
          }
        }
      }
    })), Pr(!!u.left, {
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
    })), Pr(!!u.right, {
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
function Es(r, t, e, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const a = n && typeof n == "object" ? n : {}, i = {};
  switch (r) {
    case "top":
    case "bottom":
      i.shiftX = t.arrowOffsetHorizontal * 2 + e, i.shiftY = !0, i.adjustY = !0;
      break;
    case "left":
    case "right":
      i.shiftY = t.arrowOffsetVertical * 2 + e, i.shiftX = !0, i.adjustX = !0;
      break;
  }
  const o = Object.assign(Object.assign({}, i), a);
  return o.shiftX || (o.adjustX = !0), o.shiftY || (o.adjustY = !0), o;
}
const ca = {
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
}, Ps = {
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
}, Os = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function Vs(r) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: e,
    arrowPointAtCenter: n,
    offset: a,
    borderRadius: i,
    visibleFirst: o
  } = r, s = t / 2, u = {};
  return Object.keys(ca).forEach((c) => {
    const l = n && Ps[c] || ca[c], v = Object.assign(Object.assign({}, l), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (u[c] = v, Os.has(c) && (v.autoArrow = !1), c) {
      case "top":
      case "topLeft":
      case "topRight":
        v.offset[1] = -s - a;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        v.offset[1] = s + a;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        v.offset[0] = -s - a;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        v.offset[0] = s + a;
        break;
    }
    const m = Ia({
      contentRadius: i,
      limitVerticalRadius: !0
    });
    if (n)
      switch (c) {
        case "topLeft":
        case "bottomLeft":
          v.offset[0] = -m.arrowOffsetHorizontal - s;
          break;
        case "topRight":
        case "bottomRight":
          v.offset[0] = m.arrowOffsetHorizontal + s;
          break;
        case "leftTop":
        case "rightTop":
          v.offset[1] = -m.arrowOffsetHorizontal * 2 + s;
          break;
        case "leftBottom":
        case "rightBottom":
          v.offset[1] = m.arrowOffsetHorizontal * 2 - s;
          break;
      }
    v.overflow = Es(c, m, t, e), o && (v.htmlRegion = "visibleFirst");
  }), u;
}
const Rs = (r) => {
  const {
    componentCls: t,
    // ant-tooltip
    tooltipMaxWidth: e,
    tooltipColor: n,
    tooltipBg: a,
    tooltipBorderRadius: i,
    zIndexPopup: o,
    controlHeight: s,
    boxShadowSecondary: u,
    paddingSM: c,
    paddingXS: l
  } = r;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Qa(r)), {
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
        [`${t}-inner`]: {
          minWidth: "1em",
          minHeight: s,
          padding: `${Qt(r.calc(c).div(2).equal())} ${Qt(l)}`,
          color: n,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: i,
          boxShadow: u,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${t}-inner`]: {
            borderRadius: r.min(i, Da)
          }
        },
        [`${t}-content`]: {
          position: "relative"
        }
      }), Si(r, (v, m) => {
        let {
          darkColor: y
        } = m;
        return {
          [`&${t}-${v}`]: {
            [`${t}-inner`]: {
              backgroundColor: y
            },
            [`${t}-arrow`]: {
              "--antd-arrow-background-color": y
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
    Fs(r, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${t}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: r.sizePopupArrow
      }
    }
  ];
}, Ss = (r) => Object.assign(Object.assign({
  zIndexPopup: r.zIndexPopupBase + 70
}, Ia({
  contentRadius: r.borderRadius,
  limitVerticalRadius: !0
})), ws(ha(r, {
  borderRadiusOuter: Math.min(r.borderRadiusOuter, 4)
}))), La = function(r) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Ja("Tooltip", (n) => {
    const {
      borderRadius: a,
      colorTextLightSolid: i,
      colorBgSpotlight: o
    } = n, s = ha(n, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: i,
      tooltipBorderRadius: a,
      tooltipBg: o
    });
    return [Rs(s), Ji(n, "zoom-big-fast")];
  }, Ss, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: t
  })(r);
}, Ns = Sr.map((r) => `${r}-inverse`);
function $s(r) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(D(Ns), D(Sr)).includes(r) : Sr.includes(r);
}
function za(r, t) {
  const e = $s(t), n = Ae({
    [`${r}-${t}`]: t && e
  }), a = {}, i = {};
  return t && !e && (a.background = t, i["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: a,
    arrowStyle: i
  };
}
const xs = (r) => {
  const {
    prefixCls: t,
    className: e,
    placement: n = "top",
    title: a,
    color: i,
    overlayInnerStyle: o
  } = r, {
    getPrefixCls: s
  } = f.useContext(ma), u = s("tooltip", t), [c, l, v] = La(u), m = za(u, i), y = m.arrowStyle, h = Object.assign(Object.assign({}, o), m.overlayStyle), g = Ae(l, v, u, `${u}-pure`, `${u}-placement-${n}`, e, m.className);
  return c(/* @__PURE__ */ f.createElement("div", {
    className: g,
    style: y
  }, /* @__PURE__ */ f.createElement("div", {
    className: `${u}-arrow`
  }), /* @__PURE__ */ f.createElement(Aa, Object.assign({}, r, {
    className: l,
    prefixCls: u,
    overlayInnerStyle: h
  }), a)));
};
var Ms = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(r); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[a]) && (e[n[a]] = r[n[a]]);
  return e;
};
const _s = /* @__PURE__ */ f.forwardRef((r, t) => {
  var e, n;
  const {
    prefixCls: a,
    openClassName: i,
    getTooltipContainer: o,
    overlayClassName: s,
    color: u,
    overlayInnerStyle: c,
    children: l,
    afterOpenChange: v,
    afterVisibleChange: m,
    destroyTooltipOnHide: y,
    arrow: h = !0,
    title: g,
    overlay: d,
    builtinPlacements: b,
    arrowPointAtCenter: p = !1,
    autoAdjustOverflow: w = !0
  } = r, P = !!h, [, F] = Ya(), {
    getPopupContainer: E,
    getPrefixCls: R,
    direction: x
  } = f.useContext(ma), O = Xa("Tooltip"), V = f.useRef(null), $ = () => {
    var T;
    (T = V.current) === null || T === void 0 || T.forceAlign();
  };
  f.useImperativeHandle(t, () => {
    var T;
    return {
      forceAlign: $,
      forcePopupAlign: () => {
        O.deprecated(!1, "forcePopupAlign", "forceAlign"), $();
      },
      nativeElement: (T = V.current) === null || T === void 0 ? void 0 : T.nativeElement
    };
  }), H.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((T) => {
    let [ve, fe] = T;
    O.deprecated(!(ve in r), ve, fe);
  }), H.env.NODE_ENV !== "production" && O(!y || typeof y == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), H.env.NODE_ENV !== "production" && O(!h || typeof h == "boolean" || !("arrowPointAtCenter" in h), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [A, k] = Ri(!1, {
    value: (e = r.open) !== null && e !== void 0 ? e : r.visible,
    defaultValue: (n = r.defaultOpen) !== null && n !== void 0 ? n : r.defaultVisible
  }), M = !g && !d && g !== 0, Z = (T) => {
    var ve, fe;
    k(M ? !1 : T), M || ((ve = r.onOpenChange) === null || ve === void 0 || ve.call(r, T), (fe = r.onVisibleChange) === null || fe === void 0 || fe.call(r, T));
  }, j = f.useMemo(() => {
    var T, ve;
    let fe = p;
    return typeof h == "object" && (fe = (ve = (T = h.pointAtCenter) !== null && T !== void 0 ? T : h.arrowPointAtCenter) !== null && ve !== void 0 ? ve : p), b || Vs({
      arrowPointAtCenter: fe,
      autoAdjustOverflow: w,
      arrowWidth: P ? F.sizePopupArrow : 0,
      borderRadius: F.borderRadius,
      offset: F.marginXXS,
      visibleFirst: !0
    });
  }, [p, h, b, F]), B = f.useMemo(() => g === 0 ? g : d || g || "", [d, g]), J = /* @__PURE__ */ f.createElement(ns, {
    space: !0
  }, typeof B == "function" ? B() : B), {
    getPopupContainer: te,
    placement: L = "top",
    mouseEnterDelay: Ie = 0.1,
    mouseLeaveDelay: le = 0.1,
    overlayStyle: X,
    rootClassName: I
  } = r, Q = Ms(r, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), ie = R("tooltip", a), Pe = R(), Oe = r["data-popover-inject"];
  let oe = A;
  !("open" in r) && !("visible" in r) && M && (oe = !1);
  const Ve = /* @__PURE__ */ f.isValidElement(l) && !Ni(l) ? l : /* @__PURE__ */ f.createElement("span", null, l), Re = Ve.props, pe = !Re.className || typeof Re.className == "string" ? Ae(Re.className, i || `${ie}-open`) : Re.className, [Se, be, ce] = La(ie, !Oe), Ge = za(ie, u), We = Ge.arrowStyle, ye = Object.assign(Object.assign({}, c), Ge.overlayStyle), Ne = Ae(s, {
    [`${ie}-rtl`]: x === "rtl"
  }, Ge.className, I, be, ce), [Je, se] = ei("Tooltip", Q.zIndex), Dt = /* @__PURE__ */ f.createElement(bs, Object.assign({}, Q, {
    zIndex: Je,
    showArrow: P,
    placement: L,
    mouseEnterDelay: Ie,
    mouseLeaveDelay: le,
    prefixCls: ie,
    overlayClassName: Ne,
    overlayStyle: Object.assign(Object.assign({}, We), X),
    getTooltipContainer: te || o || E,
    ref: V,
    builtinPlacements: j,
    overlay: J,
    visible: oe,
    onVisibleChange: Z,
    afterVisibleChange: v ?? m,
    overlayInnerStyle: ye,
    arrowContent: /* @__PURE__ */ f.createElement("span", {
      className: `${ie}-arrow-content`
    }),
    motion: {
      motionName: _i(Pe, "zoom-big-fast", r.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!y
  }), oe ? xi(Ve, {
    className: pe
  }) : Ve);
  return Se(/* @__PURE__ */ f.createElement(ti.Provider, {
    value: se
  }, Dt));
}), ja = _s;
H.env.NODE_ENV !== "production" && (ja.displayName = "Tooltip");
ja._InternalPanelDoNotUseOrYouWillBeFired = xs;
export {
  ns as C,
  Vn as F,
  xr as R,
  ms as T,
  js as V,
  ki as a,
  Cs as b,
  zs as c,
  ja as d,
  Ls as e,
  xi as f,
  ws as g,
  Ni as h,
  Ii as i,
  Ri as u
};
