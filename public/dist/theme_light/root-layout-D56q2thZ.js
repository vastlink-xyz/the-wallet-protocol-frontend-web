import { j as h } from "./vendor-radix-D0lo_cKZ.js";
import { c as N, g as T, h as O, r as L, O as M } from "./vendor-react-CA5sEv1f.js";
var k = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(p, j) {
  (function(t, i) {
    p.exports = i();
  })(N, function() {
    var t = {};
    t.version = "0.2.0";
    var i = t.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: !0,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: !0,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    t.configure = function(e) {
      var r, n;
      for (r in e)
        n = e[r], n !== void 0 && e.hasOwnProperty(r) && (i[r] = n);
      return this;
    }, t.status = null, t.set = function(e) {
      var r = t.isStarted();
      e = v(e, i.minimum, 1), t.status = e === 1 ? null : e;
      var n = t.render(!r), o = n.querySelector(i.barSelector), a = i.speed, f = i.easing;
      return n.offsetWidth, w(function(s) {
        i.positionUsing === "" && (i.positionUsing = t.getPositioningCSS()), m(o, E(e, a, f)), e === 1 ? (m(n, {
          transition: "none",
          opacity: 1
        }), n.offsetWidth, setTimeout(function() {
          m(n, {
            transition: "all " + a + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            t.remove(), s();
          }, a);
        }, a)) : setTimeout(s, a);
      }), this;
    }, t.isStarted = function() {
      return typeof t.status == "number";
    }, t.start = function() {
      t.status || t.set(0);
      var e = function() {
        setTimeout(function() {
          t.status && (t.trickle(), e());
        }, i.trickleSpeed);
      };
      return i.trickle && e(), this;
    }, t.done = function(e) {
      return !e && !t.status ? this : t.inc(0.3 + 0.5 * Math.random()).set(1);
    }, t.inc = function(e) {
      var r = t.status;
      return r ? (typeof e != "number" && (e = (1 - r) * v(Math.random() * r, 0.1, 0.95)), r = v(r + e, 0, 0.994), t.set(r)) : t.start();
    }, t.trickle = function() {
      return t.inc(Math.random() * i.trickleRate);
    }, function() {
      var e = 0, r = 0;
      t.promise = function(n) {
        return !n || n.state() === "resolved" ? this : (r === 0 && t.start(), e++, r++, n.always(function() {
          r--, r === 0 ? (e = 0, t.done()) : t.set((e - r) / e);
        }), this);
      };
    }(), t.render = function(e) {
      if (t.isRendered()) return document.getElementById("nprogress");
      x(document.documentElement, "nprogress-busy");
      var r = document.createElement("div");
      r.id = "nprogress", r.innerHTML = i.template;
      var n = r.querySelector(i.barSelector), o = e ? "-100" : g(t.status || 0), a = document.querySelector(i.parent), f;
      return m(n, {
        transition: "all 0 linear",
        transform: "translate3d(" + o + "%,0,0)"
      }), i.showSpinner || (f = r.querySelector(i.spinnerSelector), f && P(f)), a != document.body && x(a, "nprogress-custom-parent"), a.appendChild(r), r;
    }, t.remove = function() {
      C(document.documentElement, "nprogress-busy"), C(document.querySelector(i.parent), "nprogress-custom-parent");
      var e = document.getElementById("nprogress");
      e && P(e);
    }, t.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, t.getPositioningCSS = function() {
      var e = document.body.style, r = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
      return r + "Perspective" in e ? "translate3d" : r + "Transform" in e ? "translate" : "margin";
    };
    function v(e, r, n) {
      return e < r ? r : e > n ? n : e;
    }
    function g(e) {
      return (-1 + e) * 100;
    }
    function E(e, r, n) {
      var o;
      return i.positionUsing === "translate3d" ? o = { transform: "translate3d(" + g(e) + "%,0,0)" } : i.positionUsing === "translate" ? o = { transform: "translate(" + g(e) + "%,0)" } : o = { "margin-left": g(e) + "%" }, o.transition = "all " + r + "ms " + n, o;
    }
    var w = /* @__PURE__ */ function() {
      var e = [];
      function r() {
        var n = e.shift();
        n && n(r);
      }
      return function(n) {
        e.push(n), e.length == 1 && r();
      };
    }(), m = /* @__PURE__ */ function() {
      var e = ["Webkit", "O", "Moz", "ms"], r = {};
      function n(s) {
        return s.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(u, c) {
          return c.toUpperCase();
        });
      }
      function o(s) {
        var u = document.body.style;
        if (s in u) return s;
        for (var c = e.length, d = s.charAt(0).toUpperCase() + s.slice(1), l; c--; )
          if (l = e[c] + d, l in u) return l;
        return s;
      }
      function a(s) {
        return s = n(s), r[s] || (r[s] = o(s));
      }
      function f(s, u, c) {
        u = a(u), s.style[u] = c;
      }
      return function(s, u) {
        var c = arguments, d, l;
        if (c.length == 2)
          for (d in u)
            l = u[d], l !== void 0 && u.hasOwnProperty(d) && f(s, d, l);
        else
          f(s, c[1], c[2]);
      };
    }();
    function b(e, r) {
      var n = typeof e == "string" ? e : y(e);
      return n.indexOf(" " + r + " ") >= 0;
    }
    function x(e, r) {
      var n = y(e), o = n + r;
      b(n, r) || (e.className = o.substring(1));
    }
    function C(e, r) {
      var n = y(e), o;
      b(e, r) && (o = n.replace(" " + r + " ", " "), e.className = o.substring(1, o.length - 1));
    }
    function y(e) {
      return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
    }
    function P(e) {
      e && e.parentNode && e.parentNode.removeChild(e);
    }
    return t;
  });
})(k);
var U = k.exports;
const S = /* @__PURE__ */ T(U);
S.configure({
  showSpinner: !1,
  minimum: 0.1,
  easing: "ease",
  speed: 500
});
function W() {
  const p = O();
  return L.useEffect(() => {
    console.log("navigation", p), p.state !== "idle" ? S.start() : S.done();
  }, [p]), /* @__PURE__ */ h.jsx(h.Fragment, { children: /* @__PURE__ */ h.jsx(M, {}) });
}
export {
  W as RootLayout
};
