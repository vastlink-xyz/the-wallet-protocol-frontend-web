import { r as uo, p as fo, a as c, b as Zt, R as ze, $ as ba, c as Ca } from "./vendor-react-DSEtE0wE.js";
var Ln = { exports: {} }, ht = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function Ea() {
  if (Wr) return ht;
  Wr = 1;
  var e = uo(), t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, u) {
    var f, d = {}, m = null, g = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (f in l) r.call(l, f) && !i.hasOwnProperty(f) && (d[f] = l[f]);
    if (a && a.defaultProps) for (f in l = a.defaultProps, l) d[f] === void 0 && (d[f] = l[f]);
    return { $$typeof: t, type: a, key: m, ref: g, props: d, _owner: o.current };
  }
  return ht.Fragment = n, ht.jsx = s, ht.jsxs = s, ht;
}
var gt = {}, Br;
function Ra() {
  return Br || (Br = 1, fo.env.NODE_ENV !== "production" && function() {
    var e = uo(), t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), w = Symbol.iterator, v = "@@iterator";
    function x(p) {
      if (p === null || typeof p != "object")
        return null;
      var E = w && p[w] || p[v];
      return typeof E == "function" ? E : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(p) {
      {
        for (var E = arguments.length, T = new Array(E > 1 ? E - 1 : 0), j = 1; j < E; j++)
          T[j - 1] = arguments[j];
        C("error", p, T);
      }
    }
    function C(p, E, T) {
      {
        var j = b.ReactDebugCurrentFrame, ee = j.getStackAddendum();
        ee !== "" && (E += "%s", T = T.concat([ee]));
        var te = T.map(function(K) {
          return String(K);
        });
        te.unshift("Warning: " + E), Function.prototype.apply.call(console[p], console, te);
      }
    }
    var R = !1, S = !1, O = !1, P = !1, M = !1, $;
    $ = Symbol.for("react.module.reference");
    function W(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === i || M || p === o || p === u || p === f || P || p === g || R || S || O || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === d || p.$$typeof === s || p.$$typeof === a || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === $ || p.getModuleId !== void 0));
    }
    function G(p, E, T) {
      var j = p.displayName;
      if (j)
        return j;
      var ee = E.displayName || E.name || "";
      return ee !== "" ? T + "(" + ee + ")" : T;
    }
    function V(p) {
      return p.displayName || "Context";
    }
    function k(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var E = p;
            return V(E) + ".Consumer";
          case s:
            var T = p;
            return V(T._context) + ".Provider";
          case l:
            return G(p, p.render, "ForwardRef");
          case d:
            var j = p.displayName || null;
            return j !== null ? j : k(p.type) || "Memo";
          case m: {
            var ee = p, te = ee._payload, K = ee._init;
            try {
              return k(K(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, z = 0, N, H, D, A, Z, ne, ie;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function fe() {
      {
        if (z === 0) {
          N = console.log, H = console.info, D = console.warn, A = console.error, Z = console.group, ne = console.groupCollapsed, ie = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        z++;
      }
    }
    function Ce() {
      {
        if (z--, z === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, p, {
              value: N
            }),
            info: L({}, p, {
              value: H
            }),
            warn: L({}, p, {
              value: D
            }),
            error: L({}, p, {
              value: A
            }),
            group: L({}, p, {
              value: Z
            }),
            groupCollapsed: L({}, p, {
              value: ne
            }),
            groupEnd: L({}, p, {
              value: ie
            })
          });
        }
        z < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = b.ReactCurrentDispatcher, I;
    function Y(p, E, T) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (ee) {
            var j = ee.stack.trim().match(/\n( *(at )?)/);
            I = j && j[1] || "";
          }
        return `
` + I + p;
      }
    }
    var J = !1, U;
    {
      var Q = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Q();
    }
    function X(p, E) {
      if (!p || J)
        return "";
      {
        var T = U.get(p);
        if (T !== void 0)
          return T;
      }
      var j;
      J = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = se.current, se.current = null, fe();
      try {
        if (E) {
          var K = function() {
            throw Error();
          };
          if (Object.defineProperty(K.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(K, []);
            } catch (de) {
              j = de;
            }
            Reflect.construct(p, [], K);
          } else {
            try {
              K.call();
            } catch (de) {
              j = de;
            }
            p.call(K.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            j = de;
          }
          p();
        }
      } catch (de) {
        if (de && j && typeof de.stack == "string") {
          for (var B = de.stack.split(`
`), ce = j.stack.split(`
`), re = B.length - 1, oe = ce.length - 1; re >= 1 && oe >= 0 && B[re] !== ce[oe]; )
            oe--;
          for (; re >= 1 && oe >= 0; re--, oe--)
            if (B[re] !== ce[oe]) {
              if (re !== 1 || oe !== 1)
                do
                  if (re--, oe--, oe < 0 || B[re] !== ce[oe]) {
                    var ge = `
` + B[re].replace(" at new ", " at ");
                    return p.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", p.displayName)), typeof p == "function" && U.set(p, ge), ge;
                  }
                while (re >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        J = !1, se.current = te, Ce(), Error.prepareStackTrace = ee;
      }
      var nt = p ? p.displayName || p.name : "", Ye = nt ? Y(nt) : "";
      return typeof p == "function" && U.set(p, Ye), Ye;
    }
    function ae(p, E, T) {
      return X(p, !1);
    }
    function he(p) {
      var E = p.prototype;
      return !!(E && E.isReactComponent);
    }
    function _e(p, E, T) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return X(p, he(p));
      if (typeof p == "string")
        return Y(p);
      switch (p) {
        case u:
          return Y("Suspense");
        case f:
          return Y("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return ae(p.render);
          case d:
            return _e(p.type, E, T);
          case m: {
            var j = p, ee = j._payload, te = j._init;
            try {
              return _e(te(ee), E, T);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, je = {}, Dt = b.ReactDebugCurrentFrame;
    function Ie(p) {
      if (p) {
        var E = p._owner, T = _e(p.type, p._source, E ? E.type : null);
        Dt.setExtraStackFrame(T);
      } else
        Dt.setExtraStackFrame(null);
    }
    function Qs(p, E, T, j, ee) {
      {
        var te = Function.call.bind(Ee);
        for (var K in p)
          if (te(p, K)) {
            var B = void 0;
            try {
              if (typeof p[K] != "function") {
                var ce = Error((j || "React class") + ": " + T + " type `" + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[K] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              B = p[K](E, K, j, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              B = re;
            }
            B && !(B instanceof Error) && (Ie(ee), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", T, K, typeof B), Ie(null)), B instanceof Error && !(B.message in je) && (je[B.message] = !0, Ie(ee), y("Failed %s type: %s", T, B.message), Ie(null));
          }
      }
    }
    var ea = Array.isArray;
    function bn(p) {
      return ea(p);
    }
    function ta(p) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, T = E && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return T;
      }
    }
    function na(p) {
      try {
        return Ar(p), !1;
      } catch {
        return !0;
      }
    }
    function Ar(p) {
      return "" + p;
    }
    function Mr(p) {
      if (na(p))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ta(p)), Ar(p);
    }
    var mt = b.ReactCurrentOwner, ra = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Or, Ir, Cn;
    Cn = {};
    function oa(p) {
      if (Ee.call(p, "ref")) {
        var E = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function ia(p) {
      if (Ee.call(p, "key")) {
        var E = Object.getOwnPropertyDescriptor(p, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function sa(p, E) {
      if (typeof p.ref == "string" && mt.current && E && mt.current.stateNode !== E) {
        var T = k(mt.current.type);
        Cn[T] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(mt.current.type), p.ref), Cn[T] = !0);
      }
    }
    function aa(p, E) {
      {
        var T = function() {
          Or || (Or = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        T.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function ca(p, E) {
      {
        var T = function() {
          Ir || (Ir = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        T.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var la = function(p, E, T, j, ee, te, K) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: E,
        ref: T,
        props: K,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function ua(p, E, T, j, ee) {
      {
        var te, K = {}, B = null, ce = null;
        T !== void 0 && (Mr(T), B = "" + T), ia(E) && (Mr(E.key), B = "" + E.key), oa(E) && (ce = E.ref, sa(E, ee));
        for (te in E)
          Ee.call(E, te) && !ra.hasOwnProperty(te) && (K[te] = E[te]);
        if (p && p.defaultProps) {
          var re = p.defaultProps;
          for (te in re)
            K[te] === void 0 && (K[te] = re[te]);
        }
        if (B || ce) {
          var oe = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          B && aa(K, oe), ce && ca(K, oe);
        }
        return la(p, B, ce, ee, j, mt.current, K);
      }
    }
    var En = b.ReactCurrentOwner, Dr = b.ReactDebugCurrentFrame;
    function tt(p) {
      if (p) {
        var E = p._owner, T = _e(p.type, p._source, E ? E.type : null);
        Dr.setExtraStackFrame(T);
      } else
        Dr.setExtraStackFrame(null);
    }
    var Rn;
    Rn = !1;
    function Sn(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function Nr() {
      {
        if (En.current) {
          var p = k(En.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function fa(p) {
      return "";
    }
    var jr = {};
    function da(p) {
      {
        var E = Nr();
        if (!E) {
          var T = typeof p == "string" ? p : p.displayName || p.name;
          T && (E = `

Check the top-level render call using <` + T + ">.");
        }
        return E;
      }
    }
    function kr(p, E) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var T = da(E);
        if (jr[T])
          return;
        jr[T] = !0;
        var j = "";
        p && p._owner && p._owner !== En.current && (j = " It was passed a child from " + k(p._owner.type) + "."), tt(p), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, j), tt(null);
      }
    }
    function Lr(p, E) {
      {
        if (typeof p != "object")
          return;
        if (bn(p))
          for (var T = 0; T < p.length; T++) {
            var j = p[T];
            Sn(j) && kr(j, E);
          }
        else if (Sn(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var ee = x(p);
          if (typeof ee == "function" && ee !== p.entries)
            for (var te = ee.call(p), K; !(K = te.next()).done; )
              Sn(K.value) && kr(K.value, E);
        }
      }
    }
    function pa(p) {
      {
        var E = p.type;
        if (E == null || typeof E == "string")
          return;
        var T;
        if (typeof E == "function")
          T = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === d))
          T = E.propTypes;
        else
          return;
        if (T) {
          var j = k(E);
          Qs(T, p.props, "prop", j, p);
        } else if (E.PropTypes !== void 0 && !Rn) {
          Rn = !0;
          var ee = k(E);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function va(p) {
      {
        for (var E = Object.keys(p.props), T = 0; T < E.length; T++) {
          var j = E[T];
          if (j !== "children" && j !== "key") {
            tt(p), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), tt(null);
            break;
          }
        }
        p.ref !== null && (tt(p), y("Invalid attribute `ref` supplied to `React.Fragment`."), tt(null));
      }
    }
    var Fr = {};
    function $r(p, E, T, j, ee, te) {
      {
        var K = W(p);
        if (!K) {
          var B = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = fa();
          ce ? B += ce : B += Nr();
          var re;
          p === null ? re = "null" : bn(p) ? re = "array" : p !== void 0 && p.$$typeof === t ? (re = "<" + (k(p.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : re = typeof p, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, B);
        }
        var oe = ua(p, E, T, ee, te);
        if (oe == null)
          return oe;
        if (K) {
          var ge = E.children;
          if (ge !== void 0)
            if (j)
              if (bn(ge)) {
                for (var nt = 0; nt < ge.length; nt++)
                  Lr(ge[nt], p);
                Object.freeze && Object.freeze(ge);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lr(ge, p);
        }
        if (Ee.call(E, "key")) {
          var Ye = k(p), de = Object.keys(E).filter(function(xa) {
            return xa !== "key";
          }), Pn = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fr[Ye + Pn]) {
            var ya = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pn, Ye, ya, Ye), Fr[Ye + Pn] = !0;
          }
        }
        return p === r ? va(oe) : pa(oe), oe;
      }
    }
    function ma(p, E, T) {
      return $r(p, E, T, !0);
    }
    function ha(p, E, T) {
      return $r(p, E, T, !1);
    }
    var ga = ha, wa = ma;
    gt.Fragment = r, gt.jsx = ga, gt.jsxs = wa;
  }()), gt;
}
fo.env.NODE_ENV === "production" ? Ln.exports = Ea() : Ln.exports = Ra();
var h = Ln.exports;
function Sa(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Jt(...e) {
  return (t) => e.forEach((n) => Sa(n, t));
}
function q(...e) {
  return c.useCallback(Jt(...e), e);
}
var Le = c.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = c.Children.toArray(n), i = o.find(Pa);
  if (i) {
    const s = i.props.children, a = o.map((l) => l === i ? c.Children.count(s) > 1 ? c.Children.only(null) : c.isValidElement(s) ? s.props.children : null : l);
    return /* @__PURE__ */ h.jsx(Fn, { ...r, ref: t, children: c.isValidElement(s) ? c.cloneElement(s, void 0, a) : null });
  }
  return /* @__PURE__ */ h.jsx(Fn, { ...r, ref: t, children: n });
});
Le.displayName = "Slot";
var Fn = c.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (c.isValidElement(n)) {
    const o = _a(n);
    return c.cloneElement(n, {
      ...Ta(r, n.props),
      // @ts-ignore
      ref: t ? Jt(t, o) : o
    });
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
Fn.displayName = "SlotClone";
var po = ({ children: e }) => /* @__PURE__ */ h.jsx(h.Fragment, { children: e });
function Pa(e) {
  return c.isValidElement(e) && e.type === po;
}
function Ta(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
      i(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function _a(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function _(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Aa(e, t) {
  const n = c.createContext(t), r = (i) => {
    const { children: s, ...a } = i, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ h.jsx(n.Provider, { value: l, children: s });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const s = c.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Je(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = c.createContext(s), l = n.length;
    n = [...n, s];
    const u = (d) => {
      var b;
      const { scope: m, children: g, ...w } = d, v = ((b = m == null ? void 0 : m[e]) == null ? void 0 : b[l]) || a, x = c.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ h.jsx(v.Provider, { value: x, children: g });
    };
    u.displayName = i + "Provider";
    function f(d, m) {
      var v;
      const g = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[l]) || a, w = c.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, f];
  }
  const o = () => {
    const i = n.map((s) => c.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, Ma(o, ...t)];
}
function Ma(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function xe(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Fe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = Oa({ defaultProp: t, onChange: n }), i = e !== void 0, s = i ? e : r, a = xe(n), l = c.useCallback(
    (u) => {
      if (i) {
        const d = typeof u == "function" ? u(e) : u;
        d !== e && a(d);
      } else
        o(u);
    },
    [i, e, o, a]
  );
  return [s, l];
}
function Oa({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e), [r] = n, o = c.useRef(r), i = xe(t);
  return c.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var Ia = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], F = Ia.reduce((e, t) => {
  const n = c.forwardRef((r, o) => {
    const { asChild: i, ...s } = r, a = i ? Le : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h.jsx(a, { ...s, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function vo(e, t) {
  e && Zt.flushSync(() => e.dispatchEvent(t));
}
function er(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = c.createContext(s), l = n.length;
    n = [...n, s];
    function u(d) {
      const { scope: m, children: g, ...w } = d, v = (m == null ? void 0 : m[e][l]) || a, x = c.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ h.jsx(v.Provider, { value: x, children: g });
    }
    function f(d, m) {
      const g = (m == null ? void 0 : m[e][l]) || a, w = c.useContext(g);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [u, f];
  }
  const o = () => {
    const i = n.map((s) => c.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, Da(o, ...t)];
}
function Da(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function tr(e) {
  const t = e + "CollectionProvider", [n, r] = er(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (g) => {
    const { scope: w, children: v } = g, x = ze.useRef(null), b = ze.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ h.jsx(o, { scope: w, itemMap: b, collectionRef: x, children: v });
  };
  s.displayName = t;
  const a = e + "CollectionSlot", l = ze.forwardRef(
    (g, w) => {
      const { scope: v, children: x } = g, b = i(a, v), y = q(w, b.collectionRef);
      return /* @__PURE__ */ h.jsx(Le, { ref: y, children: x });
    }
  );
  l.displayName = a;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", d = ze.forwardRef(
    (g, w) => {
      const { scope: v, children: x, ...b } = g, y = ze.useRef(null), C = q(w, y), R = i(u, v);
      return ze.useEffect(() => (R.itemMap.set(y, { ref: y, ...b }), () => void R.itemMap.delete(y))), /* @__PURE__ */ h.jsx(Le, { [f]: "", ref: C, children: x });
    }
  );
  d.displayName = u;
  function m(g) {
    const w = i(e + "CollectionConsumer", g);
    return ze.useCallback(() => {
      const x = w.collectionRef.current;
      if (!x) return [];
      const b = Array.from(x.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (R, S) => b.indexOf(R.ref.current) - b.indexOf(S.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: s, Slot: l, ItemSlot: d },
    m,
    r
  ];
}
var Na = c.createContext(void 0);
function Qt(e) {
  const t = c.useContext(Na);
  return e || t || "ltr";
}
function ja(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ka = "DismissableLayer", $n = "dismissableLayer.update", La = "dismissableLayer.pointerDownOutside", Fa = "dismissableLayer.focusOutside", Vr, mo = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ft = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(mo), [f, d] = c.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = c.useState({}), w = q(t, (P) => d(P)), v = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(x), y = f ? v.indexOf(f) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, R = y >= b, S = Ba((P) => {
      const M = P.target, $ = [...u.branches].some((W) => W.contains(M));
      !R || $ || (o == null || o(P), s == null || s(P), P.defaultPrevented || a == null || a());
    }, m), O = Va((P) => {
      const M = P.target;
      [...u.branches].some((W) => W.contains(M)) || (i == null || i(P), s == null || s(P), P.defaultPrevented || a == null || a());
    }, m);
    return ja((P) => {
      y === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, m), c.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Vr = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Hr(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Vr);
        };
    }, [f, m, n, u]), c.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Hr());
    }, [f, u]), c.useEffect(() => {
      const P = () => g({});
      return document.addEventListener($n, P), () => document.removeEventListener($n, P);
    }, []), /* @__PURE__ */ h.jsx(
      F.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: C ? R ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: _(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: _(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: _(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
ft.displayName = ka;
var $a = "DismissableLayerBranch", Wa = c.forwardRef((e, t) => {
  const n = c.useContext(mo), r = c.useRef(null), o = q(t, r);
  return c.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ h.jsx(F.div, { ...e, ref: o });
});
Wa.displayName = $a;
function Ba(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          ho(
            La,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Va(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xe(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && ho(Fa, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Hr() {
  const e = new CustomEvent($n);
  document.dispatchEvent(e);
}
function ho(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? vo(o, i) : o.dispatchEvent(i);
}
var Tn = 0;
function en() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ur()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ur()), Tn++, () => {
      Tn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Tn--;
    };
  }, []);
}
function Ur() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var _n = "focusScope.autoFocusOnMount", An = "focusScope.autoFocusOnUnmount", Kr = { bubbles: !1, cancelable: !0 }, Ha = "FocusScope", Rt = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = c.useState(null), u = xe(o), f = xe(i), d = c.useRef(null), m = q(t, (v) => l(v)), g = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let v = function(C) {
        if (g.paused || !a) return;
        const R = C.target;
        a.contains(R) ? d.current = R : ke(d.current, { select: !0 });
      }, x = function(C) {
        if (g.paused || !a) return;
        const R = C.relatedTarget;
        R !== null && (a.contains(R) || ke(d.current, { select: !0 }));
      }, b = function(C) {
        if (document.activeElement === document.body)
          for (const S of C)
            S.removedNodes.length > 0 && ke(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", x);
      const y = new MutationObserver(b);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", x), y.disconnect();
      };
    }
  }, [r, a, g.paused]), c.useEffect(() => {
    if (a) {
      Yr.add(g);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const b = new CustomEvent(_n, Kr);
        a.addEventListener(_n, u), a.dispatchEvent(b), b.defaultPrevented || (Ua(Xa(go(a)), { select: !0 }), document.activeElement === v && ke(a));
      }
      return () => {
        a.removeEventListener(_n, u), setTimeout(() => {
          const b = new CustomEvent(An, Kr);
          a.addEventListener(An, f), a.dispatchEvent(b), b.defaultPrevented || ke(v ?? document.body, { select: !0 }), a.removeEventListener(An, f), Yr.remove(g);
        }, 0);
      };
    }
  }, [a, u, f, g]);
  const w = c.useCallback(
    (v) => {
      if (!n && !r || g.paused) return;
      const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
      if (x && b) {
        const y = v.currentTarget, [C, R] = Ka(y);
        C && R ? !v.shiftKey && b === R ? (v.preventDefault(), n && ke(C, { select: !0 })) : v.shiftKey && b === C && (v.preventDefault(), n && ke(R, { select: !0 })) : b === y && v.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ h.jsx(F.div, { tabIndex: -1, ...s, ref: m, onKeyDown: w });
});
Rt.displayName = Ha;
function Ua(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ke(r, { select: t }), document.activeElement !== n) return;
}
function Ka(e) {
  const t = go(e), n = Gr(t, e), r = Gr(t.reverse(), e);
  return [n, r];
}
function go(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Gr(e, t) {
  for (const n of e)
    if (!Ga(n, { upTo: t })) return n;
}
function Ga(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ya(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ke(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ya(e) && t && e.select();
  }
}
var Yr = za();
function za() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = zr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = zr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function zr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Xa(e) {
  return e.filter((t) => t.tagName !== "A");
}
var le = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
}, qa = ba.useId || (() => {
}), Za = 0;
function we(e) {
  const [t, n] = c.useState(qa());
  return le(() => {
    e || n((r) => r ?? String(Za++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Ja = ["top", "right", "bottom", "left"], $e = Math.min, pe = Math.max, Ht = Math.round, Nt = Math.floor, We = (e) => ({
  x: e,
  y: e
}), Qa = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ec = {
  start: "end",
  end: "start"
};
function Wn(e, t, n) {
  return pe(e, $e(t, n));
}
function De(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ne(e) {
  return e.split("-")[0];
}
function dt(e) {
  return e.split("-")[1];
}
function nr(e) {
  return e === "x" ? "y" : "x";
}
function rr(e) {
  return e === "y" ? "height" : "width";
}
function Be(e) {
  return ["top", "bottom"].includes(Ne(e)) ? "y" : "x";
}
function or(e) {
  return nr(Be(e));
}
function tc(e, t, n) {
  n === void 0 && (n = !1);
  const r = dt(e), o = or(e), i = rr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ut(s)), [s, Ut(s)];
}
function nc(e) {
  const t = Ut(e);
  return [Bn(e), t, Bn(t)];
}
function Bn(e) {
  return e.replace(/start|end/g, (t) => ec[t]);
}
function rc(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function oc(e, t, n, r) {
  const o = dt(e);
  let i = rc(Ne(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Bn)))), i;
}
function Ut(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Qa[t]);
}
function ic(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function wo(e) {
  return typeof e != "number" ? ic(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Xr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Be(t), s = or(t), a = rr(s), l = Ne(t), u = i === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, m = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (dt(t)) {
    case "start":
      g[s] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      g[s] += m * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const sc = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = Xr(u, r, l), m = r, g = {}, w = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: x,
      fn: b
    } = a[v], {
      x: y,
      y: C,
      data: R,
      reset: S
    } = await b({
      x: f,
      y: d,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, d = C ?? d, g = {
      ...g,
      [x]: {
        ...g[x],
        ...R
      }
    }, S && w <= 50 && (w++, typeof S == "object" && (S.placement && (m = S.placement), S.rects && (u = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: f,
      y: d
    } = Xr(u, m, l)), v = -1);
  }
  return {
    x: f,
    y: d,
    placement: m,
    strategy: o,
    middlewareData: g
  };
};
async function xt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = De(t, e), w = wo(g), x = a[m ? d === "floating" ? "reference" : "floating" : d], b = Kt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), y = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), R = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Kt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: C,
    strategy: l
  }) : y);
  return {
    top: (b.top - S.top + w.top) / R.y,
    bottom: (S.bottom - b.bottom + w.bottom) / R.y,
    left: (b.left - S.left + w.left) / R.x,
    right: (S.right - b.right + w.right) / R.x
  };
}
const ac = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = De(e, t) || {};
    if (u == null)
      return {};
    const d = wo(f), m = {
      x: n,
      y: r
    }, g = or(o), w = rr(g), v = await s.getDimensions(u), x = g === "y", b = x ? "top" : "left", y = x ? "bottom" : "right", C = x ? "clientHeight" : "clientWidth", R = i.reference[w] + i.reference[g] - m[g] - i.floating[w], S = m[g] - i.reference[g], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let P = O ? O[C] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(O))) && (P = a.floating[C] || i.floating[w]);
    const M = R / 2 - S / 2, $ = P / 2 - v[w] / 2 - 1, W = $e(d[b], $), G = $e(d[y], $), V = W, k = P - v[w] - G, L = P / 2 - v[w] / 2 + M, z = Wn(V, L, k), N = !l.arrow && dt(o) != null && L !== z && i.reference[w] / 2 - (L < V ? W : G) - v[w] / 2 < 0, H = N ? L < V ? L - V : L - k : 0;
    return {
      [g]: m[g] + H,
      data: {
        [g]: z,
        centerOffset: L - z - H,
        ...N && {
          alignmentOffset: H
        }
      },
      reset: N
    };
  }
}), cc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: v = !0,
        ...x
      } = De(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Ne(o), y = Be(a), C = Ne(a) === a, R = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = m || (C || !v ? [Ut(a)] : nc(a)), O = w !== "none";
      !m && O && S.push(...oc(a, v, w, R));
      const P = [a, ...S], M = await xt(t, x), $ = [];
      let W = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && $.push(M[b]), d) {
        const L = tc(o, s, R);
        $.push(M[L[0]], M[L[1]]);
      }
      if (W = [...W, {
        placement: o,
        overflows: $
      }], !$.every((L) => L <= 0)) {
        var G, V;
        const L = (((G = i.flip) == null ? void 0 : G.index) || 0) + 1, z = P[L];
        if (z)
          return {
            data: {
              index: L,
              overflows: W
            },
            reset: {
              placement: z
            }
          };
        let N = (V = W.filter((H) => H.overflows[0] <= 0).sort((H, D) => H.overflows[1] - D.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!N)
          switch (g) {
            case "bestFit": {
              var k;
              const H = (k = W.filter((D) => {
                if (O) {
                  const A = Be(D.placement);
                  return A === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((A) => A > 0).reduce((A, Z) => A + Z, 0)]).sort((D, A) => D[1] - A[1])[0]) == null ? void 0 : k[0];
              H && (N = H);
              break;
            }
            case "initialPlacement":
              N = a;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function qr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Zr(e) {
  return Ja.some((t) => e[t] >= 0);
}
const lc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = De(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await xt(t, {
            ...o,
            elementContext: "reference"
          }), s = qr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Zr(s)
            }
          };
        }
        case "escaped": {
          const i = await xt(t, {
            ...o,
            altBoundary: !0
          }), s = qr(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Zr(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function uc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ne(n), a = dt(n), l = Be(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, f = i && l ? -1 : 1, d = De(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: w
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof w == "number" && (g = a === "end" ? w * -1 : w), l ? {
    x: g * f,
    y: m * u
  } : {
    x: m * u,
    y: g * f
  };
}
const fc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await uc(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, dc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (x) => {
            let {
              x: b,
              y
            } = x;
            return {
              x: b,
              y
            };
          }
        },
        ...l
      } = De(e, t), u = {
        x: n,
        y: r
      }, f = await xt(t, l), d = Be(Ne(o)), m = nr(d);
      let g = u[m], w = u[d];
      if (i) {
        const x = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", y = g + f[x], C = g - f[b];
        g = Wn(y, g, C);
      }
      if (s) {
        const x = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", y = w + f[x], C = w - f[b];
        w = Wn(y, w, C);
      }
      const v = a.fn({
        ...t,
        [m]: g,
        [d]: w
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [m]: i,
            [d]: s
          }
        }
      };
    }
  };
}, pc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = De(e, t), f = {
        x: n,
        y: r
      }, d = Be(o), m = nr(d);
      let g = f[m], w = f[d];
      const v = De(a, t), x = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const C = m === "y" ? "height" : "width", R = i.reference[m] - i.floating[C] + x.mainAxis, S = i.reference[m] + i.reference[C] - x.mainAxis;
        g < R ? g = R : g > S && (g = S);
      }
      if (u) {
        var b, y;
        const C = m === "y" ? "width" : "height", R = ["top", "left"].includes(Ne(o)), S = i.reference[d] - i.floating[C] + (R && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (R ? 0 : x.crossAxis), O = i.reference[d] + i.reference[C] + (R ? 0 : ((y = s.offset) == null ? void 0 : y[d]) || 0) - (R ? x.crossAxis : 0);
        w < S ? w = S : w > O && (w = O);
      }
      return {
        [m]: g,
        [d]: w
      };
    }
  };
}, vc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...u
      } = De(e, t), f = await xt(t, u), d = Ne(o), m = dt(o), g = Be(o) === "y", {
        width: w,
        height: v
      } = i.floating;
      let x, b;
      d === "top" || d === "bottom" ? (x = d, b = m === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = d, x = m === "end" ? "top" : "bottom");
      const y = v - f.top - f.bottom, C = w - f.left - f.right, R = $e(v - f[x], y), S = $e(w - f[b], C), O = !t.middlewareData.shift;
      let P = R, M = S;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = C), (r = t.middlewareData.shift) != null && r.enabled.y && (P = y), O && !m) {
        const W = pe(f.left, 0), G = pe(f.right, 0), V = pe(f.top, 0), k = pe(f.bottom, 0);
        g ? M = w - 2 * (W !== 0 || G !== 0 ? W + G : pe(f.left, f.right)) : P = v - 2 * (V !== 0 || k !== 0 ? V + k : pe(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: P
      });
      const $ = await s.getDimensions(a.floating);
      return w !== $.width || v !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function tn() {
  return typeof window < "u";
}
function pt(e) {
  return yo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ve(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Oe(e) {
  var t;
  return (t = (yo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yo(e) {
  return tn() ? e instanceof Node || e instanceof ve(e).Node : !1;
}
function Se(e) {
  return tn() ? e instanceof Element || e instanceof ve(e).Element : !1;
}
function Me(e) {
  return tn() ? e instanceof HTMLElement || e instanceof ve(e).HTMLElement : !1;
}
function Jr(e) {
  return !tn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ve(e).ShadowRoot;
}
function St(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function mc(e) {
  return ["table", "td", "th"].includes(pt(e));
}
function nn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ir(e) {
  const t = sr(), n = Se(e) ? Pe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function hc(e) {
  let t = Ve(e);
  for (; Me(t) && !ct(t); ) {
    if (ir(t))
      return t;
    if (nn(t))
      return null;
    t = Ve(t);
  }
  return null;
}
function sr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ct(e) {
  return ["html", "body", "#document"].includes(pt(e));
}
function Pe(e) {
  return ve(e).getComputedStyle(e);
}
function rn(e) {
  return Se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ve(e) {
  if (pt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jr(e) && e.host || // Fallback.
    Oe(e)
  );
  return Jr(t) ? t.host : t;
}
function xo(e) {
  const t = Ve(e);
  return ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Me(t) && St(t) ? t : xo(t);
}
function bt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = xo(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ve(o);
  if (i) {
    const a = Vn(s);
    return t.concat(s, s.visualViewport || [], St(o) ? o : [], a && n ? bt(a) : []);
  }
  return t.concat(o, bt(o, [], n));
}
function Vn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bo(e) {
  const t = Pe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Me(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ht(n) !== i || Ht(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function ar(e) {
  return Se(e) ? e : e.contextElement;
}
function st(e) {
  const t = ar(e);
  if (!Me(t))
    return We(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = bo(t);
  let s = (i ? Ht(n.width) : n.width) / r, a = (i ? Ht(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const gc = /* @__PURE__ */ We(0);
function Co(e) {
  const t = ve(e);
  return !sr() || !t.visualViewport ? gc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function wc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ve(e) ? !1 : t;
}
function Xe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ar(e);
  let s = We(1);
  t && (r ? Se(r) && (s = st(r)) : s = st(e));
  const a = wc(i, n, r) ? Co(i) : We(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, f = o.width / s.x, d = o.height / s.y;
  if (i) {
    const m = ve(i), g = r && Se(r) ? ve(r) : r;
    let w = m, v = Vn(w);
    for (; v && r && g !== w; ) {
      const x = st(v), b = v.getBoundingClientRect(), y = Pe(v), C = b.left + (v.clientLeft + parseFloat(y.paddingLeft)) * x.x, R = b.top + (v.clientTop + parseFloat(y.paddingTop)) * x.y;
      l *= x.x, u *= x.y, f *= x.x, d *= x.y, l += C, u += R, w = ve(v), v = Vn(w);
    }
  }
  return Kt({
    width: f,
    height: d,
    x: l,
    y: u
  });
}
function yc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Oe(r), a = t ? nn(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = We(1);
  const f = We(0), d = Me(r);
  if ((d || !d && !i) && ((pt(r) !== "body" || St(s)) && (l = rn(r)), Me(r))) {
    const m = Xe(r);
    u = st(r), f.x = m.x + r.clientLeft, f.y = m.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y
  };
}
function xc(e) {
  return Array.from(e.getClientRects());
}
function Hn(e, t) {
  const n = rn(e).scrollLeft;
  return t ? t.left + n : Xe(Oe(e)).left + n;
}
function bc(e) {
  const t = Oe(e), n = rn(e), r = e.ownerDocument.body, o = pe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = pe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Hn(e);
  const a = -n.scrollTop;
  return Pe(r).direction === "rtl" && (s += pe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Cc(e, t) {
  const n = ve(e), r = Oe(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = sr();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Ec(e, t) {
  const n = Xe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Me(e) ? st(e) : We(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Qr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Cc(e, n);
  else if (t === "document")
    r = bc(Oe(e));
  else if (Se(t))
    r = Ec(t, n);
  else {
    const o = Co(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Kt(r);
}
function Eo(e, t) {
  const n = Ve(e);
  return n === t || !Se(n) || ct(n) ? !1 : Pe(n).position === "fixed" || Eo(n, t);
}
function Rc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = bt(e, [], !1).filter((a) => Se(a) && pt(a) !== "body"), o = null;
  const i = Pe(e).position === "fixed";
  let s = i ? Ve(e) : e;
  for (; Se(s) && !ct(s); ) {
    const a = Pe(s), l = ir(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || St(s) && !l && Eo(e, s)) ? r = r.filter((f) => f !== s) : o = a, s = Ve(s);
  }
  return t.set(e, r), r;
}
function Sc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? nn(t) ? [] : Rc(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, f) => {
    const d = Qr(t, f, o);
    return u.top = pe(d.top, u.top), u.right = $e(d.right, u.right), u.bottom = $e(d.bottom, u.bottom), u.left = pe(d.left, u.left), u;
  }, Qr(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Pc(e) {
  const {
    width: t,
    height: n
  } = bo(e);
  return {
    width: t,
    height: n
  };
}
function Tc(e, t, n) {
  const r = Me(t), o = Oe(t), i = n === "fixed", s = Xe(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = We(0);
  if (r || !r && !i)
    if ((pt(t) !== "body" || St(o)) && (a = rn(t)), r) {
      const g = Xe(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && (l.x = Hn(o));
  let u = 0, f = 0;
  if (o && !r && !i) {
    const g = o.getBoundingClientRect();
    f = g.top + a.scrollTop, u = g.left + a.scrollLeft - // RTL <body> scrollbar.
    Hn(o, g);
  }
  const d = s.left + a.scrollLeft - l.x - u, m = s.top + a.scrollTop - l.y - f;
  return {
    x: d,
    y: m,
    width: s.width,
    height: s.height
  };
}
function Mn(e) {
  return Pe(e).position === "static";
}
function eo(e, t) {
  if (!Me(e) || Pe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Oe(e) === n && (n = n.ownerDocument.body), n;
}
function Ro(e, t) {
  const n = ve(e);
  if (nn(e))
    return n;
  if (!Me(e)) {
    let o = Ve(e);
    for (; o && !ct(o); ) {
      if (Se(o) && !Mn(o))
        return o;
      o = Ve(o);
    }
    return n;
  }
  let r = eo(e, t);
  for (; r && mc(r) && Mn(r); )
    r = eo(r, t);
  return r && ct(r) && Mn(r) && !ir(r) ? n : r || hc(e) || n;
}
const _c = async function(e) {
  const t = this.getOffsetParent || Ro, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Tc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ac(e) {
  return Pe(e).direction === "rtl";
}
const Mc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yc,
  getDocumentElement: Oe,
  getClippingRect: Sc,
  getOffsetParent: Ro,
  getElementRects: _c,
  getClientRects: xc,
  getDimensions: Pc,
  getScale: st,
  isElement: Se,
  isRTL: Ac
};
function Oc(e, t) {
  let n = null, r;
  const o = Oe(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: f,
      width: d,
      height: m
    } = e.getBoundingClientRect();
    if (a || t(), !d || !m)
      return;
    const g = Nt(f), w = Nt(o.clientWidth - (u + d)), v = Nt(o.clientHeight - (f + m)), x = Nt(u), y = {
      rootMargin: -g + "px " + -w + "px " + -v + "px " + -x + "px",
      threshold: pe(0, $e(1, l)) || 1
    };
    let C = !0;
    function R(S) {
      const O = S[0].intersectionRatio;
      if (O !== l) {
        if (!C)
          return s();
        O ? s(!1, O) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, y);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Ic(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = ar(e), f = o || i ? [...u ? bt(u) : [], ...bt(t)] : [];
  f.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const d = u && a ? Oc(u, n) : null;
  let m = -1, g = null;
  s && (g = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === u && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), n();
  }), u && !l && g.observe(u), g.observe(t));
  let w, v = l ? Xe(e) : null;
  l && x();
  function x() {
    const b = Xe(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, w = requestAnimationFrame(x);
  }
  return n(), () => {
    var b;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), d == null || d(), (b = g) == null || b.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const Dc = fc, Nc = dc, jc = cc, kc = vc, Lc = lc, to = ac, Fc = pc, $c = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Mc,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return sc(e, t, {
    ...o,
    platform: i
  });
};
var Wt = typeof document < "u" ? c.useLayoutEffect : c.useEffect;
function Gt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Gt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Gt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function So(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function no(e, t) {
  const n = So(e);
  return Math.round(t * n) / n;
}
function On(e) {
  const t = c.useRef(e);
  return Wt(() => {
    t.current = e;
  }), t;
}
function Wc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [f, d] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = c.useState(r);
  Gt(m, r) || g(r);
  const [w, v] = c.useState(null), [x, b] = c.useState(null), y = c.useCallback((D) => {
    D !== O.current && (O.current = D, v(D));
  }, []), C = c.useCallback((D) => {
    D !== P.current && (P.current = D, b(D));
  }, []), R = i || w, S = s || x, O = c.useRef(null), P = c.useRef(null), M = c.useRef(f), $ = l != null, W = On(l), G = On(o), V = On(u), k = c.useCallback(() => {
    if (!O.current || !P.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: m
    };
    G.current && (D.platform = G.current), $c(O.current, P.current, D).then((A) => {
      const Z = {
        ...A,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      L.current && !Gt(M.current, Z) && (M.current = Z, Zt.flushSync(() => {
        d(Z);
      }));
    });
  }, [m, t, n, G, V]);
  Wt(() => {
    u === !1 && M.current.isPositioned && (M.current.isPositioned = !1, d((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [u]);
  const L = c.useRef(!1);
  Wt(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Wt(() => {
    if (R && (O.current = R), S && (P.current = S), R && S) {
      if (W.current)
        return W.current(R, S, k);
      k();
    }
  }, [R, S, k, W, $]);
  const z = c.useMemo(() => ({
    reference: O,
    floating: P,
    setReference: y,
    setFloating: C
  }), [y, C]), N = c.useMemo(() => ({
    reference: R,
    floating: S
  }), [R, S]), H = c.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return D;
    const A = no(N.floating, f.x), Z = no(N.floating, f.y);
    return a ? {
      ...D,
      transform: "translate(" + A + "px, " + Z + "px)",
      ...So(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: A,
      top: Z
    };
  }, [n, a, N.floating, f.x, f.y]);
  return c.useMemo(() => ({
    ...f,
    update: k,
    refs: z,
    elements: N,
    floatingStyles: H
  }), [f, k, z, N, H]);
}
const Bc = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? to({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? to({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Vc = (e, t) => ({
  ...Dc(e),
  options: [e, t]
}), Hc = (e, t) => ({
  ...Nc(e),
  options: [e, t]
}), Uc = (e, t) => ({
  ...Fc(e),
  options: [e, t]
}), Kc = (e, t) => ({
  ...jc(e),
  options: [e, t]
}), Gc = (e, t) => ({
  ...kc(e),
  options: [e, t]
}), Yc = (e, t) => ({
  ...Lc(e),
  options: [e, t]
}), zc = (e, t) => ({
  ...Bc(e),
  options: [e, t]
});
var Xc = "Arrow", Po = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ h.jsx(
    F.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ h.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Po.displayName = Xc;
var qc = Po;
function Zc(e) {
  const [t, n] = c.useState(void 0);
  return le(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, a = u.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var cr = "Popper", [To, He] = er(cr), [Jc, _o] = To(cr), Ao = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ h.jsx(Jc, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Ao.displayName = cr;
var Mo = "PopperAnchor", Oo = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = _o(Mo, n), s = c.useRef(null), a = q(t, s);
    return c.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ h.jsx(F.div, { ...o, ref: a });
  }
);
Oo.displayName = Mo;
var lr = "PopperContent", [Qc, el] = To(lr), Io = c.forwardRef(
  (e, t) => {
    var I, Y, J, U, Q, X;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: w,
      ...v
    } = e, x = _o(lr, n), [b, y] = c.useState(null), C = q(t, (ae) => y(ae)), [R, S] = c.useState(null), O = Zc(R), P = (O == null ? void 0 : O.width) ?? 0, M = (O == null ? void 0 : O.height) ?? 0, $ = r + (i !== "center" ? "-" + i : ""), W = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, G = Array.isArray(u) ? u : [u], V = G.length > 0, k = {
      padding: W,
      boundary: G.filter(nl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: L, floatingStyles: z, placement: N, isPositioned: H, middlewareData: D } = Wc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: $,
      whileElementsMounted: (...ae) => Ic(...ae, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        Vc({ mainAxis: o + M, alignmentAxis: s }),
        l && Hc({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Uc() : void 0,
          ...k
        }),
        l && Kc({ ...k }),
        Gc({
          ...k,
          apply: ({ elements: ae, rects: he, availableWidth: _e, availableHeight: Ee }) => {
            const { width: je, height: Dt } = he.reference, Ie = ae.floating.style;
            Ie.setProperty("--radix-popper-available-width", `${_e}px`), Ie.setProperty("--radix-popper-available-height", `${Ee}px`), Ie.setProperty("--radix-popper-anchor-width", `${je}px`), Ie.setProperty("--radix-popper-anchor-height", `${Dt}px`);
          }
        }),
        R && zc({ element: R, padding: a }),
        rl({ arrowWidth: P, arrowHeight: M }),
        m && Yc({ strategy: "referenceHidden", ...k })
      ]
    }), [A, Z] = jo(N), ne = xe(w);
    le(() => {
      H && (ne == null || ne());
    }, [H, ne]);
    const ie = (I = D.arrow) == null ? void 0 : I.x, me = (Y = D.arrow) == null ? void 0 : Y.y, fe = ((J = D.arrow) == null ? void 0 : J.centerOffset) !== 0, [Ce, se] = c.useState();
    return le(() => {
      b && se(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: H ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ce,
          "--radix-popper-transform-origin": [
            (U = D.transformOrigin) == null ? void 0 : U.x,
            (Q = D.transformOrigin) == null ? void 0 : Q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = D.hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h.jsx(
          Qc,
          {
            scope: n,
            placedSide: A,
            onArrowChange: S,
            arrowX: ie,
            arrowY: me,
            shouldHideArrow: fe,
            children: /* @__PURE__ */ h.jsx(
              F.div,
              {
                "data-side": A,
                "data-align": Z,
                ...v,
                ref: C,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Io.displayName = lr;
var Do = "PopperArrow", tl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, No = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = el(Do, r), s = tl[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ h.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ h.jsx(
          qc,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
No.displayName = Do;
function nl(e) {
  return e !== null;
}
var rl = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, b, y;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, f] = jo(n), d = { start: "0%", center: "50%", end: "100%" }[f], m = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, g = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let w = "", v = "";
    return u === "bottom" ? (w = s ? d : `${m}px`, v = `${-l}px`) : u === "top" ? (w = s ? d : `${m}px`, v = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, v = s ? d : `${g}px`) : u === "left" && (w = `${r.floating.width + l}px`, v = s ? d : `${g}px`), { data: { x: w, y: v } };
  }
});
function jo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var on = Ao, Pt = Oo, sn = Io, an = No, ol = "Portal", Tt = c.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, i] = c.useState(!1);
  le(() => i(!0), []);
  const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? Ca.createPortal(/* @__PURE__ */ h.jsx(F.div, { ...r, ref: t }), s) : null;
});
Tt.displayName = ol;
function il(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var be = (e) => {
  const { present: t, children: n } = e, r = sl(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), i = q(r.ref, al(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: i }) : null;
};
be.displayName = "Presence";
function sl(e) {
  const [t, n] = c.useState(), r = c.useRef({}), o = c.useRef(e), i = c.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = il(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = jt(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), le(() => {
    const u = r.current, f = o.current;
    if (f !== e) {
      const m = i.current, g = jt(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), le(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, d = (g) => {
        const v = jt(r.current).includes(g.animationName);
        if (g.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, m = (g) => {
        g.target === t && (i.current = jt(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function jt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function al(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var In = "rovingFocusGroup.onEntryFocus", cl = { bubbles: !1, cancelable: !0 }, cn = "RovingFocusGroup", [Un, ko, ll] = tr(cn), [ul, ln] = er(
  cn,
  [ll]
), [fl, dl] = ul(cn), Lo = c.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(Un.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ h.jsx(Un.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ h.jsx(pl, { ...e, ref: t }) }) })
);
Lo.displayName = cn;
var pl = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...d
  } = e, m = c.useRef(null), g = q(t, m), w = Qt(i), [v = null, x] = Fe({
    prop: s,
    defaultProp: a,
    onChange: l
  }), [b, y] = c.useState(!1), C = xe(u), R = ko(n), S = c.useRef(!1), [O, P] = c.useState(0);
  return c.useEffect(() => {
    const M = m.current;
    if (M)
      return M.addEventListener(In, C), () => M.removeEventListener(In, C);
  }, [C]), /* @__PURE__ */ h.jsx(
    fl,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: v,
      onItemFocus: c.useCallback(
        (M) => x(M),
        [x]
      ),
      onItemShiftTab: c.useCallback(() => y(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => P((M) => M + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => P((M) => M - 1),
        []
      ),
      children: /* @__PURE__ */ h.jsx(
        F.div,
        {
          tabIndex: b || O === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: _(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: _(e.onFocus, (M) => {
            const $ = !S.current;
            if (M.target === M.currentTarget && $ && !b) {
              const W = new CustomEvent(In, cl);
              if (M.currentTarget.dispatchEvent(W), !W.defaultPrevented) {
                const G = R().filter((N) => N.focusable), V = G.find((N) => N.active), k = G.find((N) => N.id === v), z = [V, k, ...G].filter(
                  Boolean
                ).map((N) => N.ref.current);
                Wo(z, f);
              }
            }
            S.current = !1;
          }),
          onBlur: _(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Fo = "RovingFocusGroupItem", $o = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      ...s
    } = e, a = we(), l = i || a, u = dl(Fo, n), f = u.currentTabStopId === l, d = ko(n), { onFocusableItemAdd: m, onFocusableItemRemove: g } = u;
    return c.useEffect(() => {
      if (r)
        return m(), () => g();
    }, [r, m, g]), /* @__PURE__ */ h.jsx(
      Un.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ h.jsx(
          F.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...s,
            ref: t,
            onMouseDown: _(e.onMouseDown, (w) => {
              r ? u.onItemFocus(l) : w.preventDefault();
            }),
            onFocus: _(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: _(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const v = hl(w, u.orientation, u.dir);
              if (v !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let b = d().filter((y) => y.focusable).map((y) => y.ref.current);
                if (v === "last") b.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && b.reverse();
                  const y = b.indexOf(w.currentTarget);
                  b = u.loop ? gl(b, y + 1) : b.slice(y + 1);
                }
                setTimeout(() => Wo(b));
              }
            })
          }
        )
      }
    );
  }
);
$o.displayName = Fo;
var vl = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ml(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function hl(e, t, n) {
  const r = ml(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return vl[r];
}
function Wo(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function gl(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Bo = Lo, Vo = $o, wl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, rt = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Lt = {}, Dn = 0, Ho = function(e) {
  return e && (e.host || Ho(e.parentNode));
}, yl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ho(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, xl = function(e, t, n, r) {
  var o = yl(t, Array.isArray(e) ? e : [e]);
  Lt[n] || (Lt[n] = /* @__PURE__ */ new WeakMap());
  var i = Lt[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var f = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (a.has(m))
        f(m);
      else
        try {
          var g = m.getAttribute(r), w = g !== null && g !== "false", v = (rt.get(m) || 0) + 1, x = (i.get(m) || 0) + 1;
          rt.set(m, v), i.set(m, x), s.push(m), v === 1 && w && kt.set(m, !0), x === 1 && m.setAttribute(n, "true"), w || m.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", m, b);
        }
    });
  };
  return f(t), a.clear(), Dn++, function() {
    s.forEach(function(d) {
      var m = rt.get(d) - 1, g = i.get(d) - 1;
      rt.set(d, m), i.set(d, g), m || (kt.has(d) || d.removeAttribute(r), kt.delete(d)), g || d.removeAttribute(n);
    }), Dn--, Dn || (rt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), Lt = {});
  };
}, un = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = wl(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), xl(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ae = function() {
  return Ae = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Ae.apply(this, arguments);
};
function Uo(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function bl(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Bt = "right-scroll-bar-position", Vt = "width-before-scroll-bar", Cl = "with-scroll-bars-hidden", El = "--removed-body-scroll-bar-size";
function Nn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Rl(e, t) {
  var n = c.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Sl = typeof window < "u" ? c.useLayoutEffect : c.useEffect, ro = /* @__PURE__ */ new WeakMap();
function Pl(e, t) {
  var n = Rl(null, function(r) {
    return e.forEach(function(o) {
      return Nn(o, r);
    });
  });
  return Sl(function() {
    var r = ro.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(a) {
        i.has(a) || Nn(a, null);
      }), i.forEach(function(a) {
        o.has(a) || Nn(a, s);
      });
    }
    ro.set(n, e);
  }, [e]), n;
}
function Tl(e) {
  return e;
}
function _l(e, t) {
  t === void 0 && (t = Tl);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var l = function() {
        var f = s;
        s = [], f.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(f) {
          s.push(f), u();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function Al(e) {
  e === void 0 && (e = {});
  var t = _l(null);
  return t.options = Ae({ async: !0, ssr: !1 }, e), t;
}
var Ko = function(e) {
  var t = e.sideCar, n = Uo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, Ae({}, n));
};
Ko.isSideCarExport = !0;
function Ml(e, t) {
  return e.useMedium(t), Ko;
}
var Go = Al(), jn = function() {
}, fn = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: jn,
    onWheelCapture: jn,
    onTouchMoveCapture: jn
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, d = e.shards, m = e.sideCar, g = e.noIsolation, w = e.inert, v = e.allowPinchZoom, x = e.as, b = x === void 0 ? "div" : x, y = e.gapMode, C = Uo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = m, S = Pl([n, t]), O = Ae(Ae({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    f && c.createElement(R, { sideCar: Go, removeScrollBar: u, shards: d, noIsolation: g, inert: w, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: y }),
    s ? c.cloneElement(c.Children.only(a), Ae(Ae({}, O), { ref: S })) : c.createElement(b, Ae({}, O, { className: l, ref: S }), a)
  );
});
fn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
fn.classNames = {
  fullWidth: Vt,
  zeroRight: Bt
};
var Ol = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Il() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ol();
  return t && e.setAttribute("nonce", t), e;
}
function Dl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Nl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var jl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Il()) && (Dl(t, n), Nl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, kl = function() {
  var e = jl();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Yo = function() {
  var e = kl(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Ll = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, kn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Fl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [kn(n), kn(r), kn(o)];
}, $l = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ll;
  var t = Fl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Wl = Yo(), at = "data-scroll-locked", Bl = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Cl, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(at, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Bt, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Vt, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Bt, " .").concat(Bt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Vt, " .").concat(Vt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(at, `] {
    `).concat(El, ": ").concat(a, `px;
  }
`);
}, oo = function() {
  var e = parseInt(document.body.getAttribute(at) || "0", 10);
  return isFinite(e) ? e : 0;
}, Vl = function() {
  c.useEffect(function() {
    return document.body.setAttribute(at, (oo() + 1).toString()), function() {
      var e = oo() - 1;
      e <= 0 ? document.body.removeAttribute(at) : document.body.setAttribute(at, e.toString());
    };
  }, []);
}, Hl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Vl();
  var i = c.useMemo(function() {
    return $l(o);
  }, [o]);
  return c.createElement(Wl, { styles: Bl(i, !t, o, n ? "" : "!important") });
}, Kn = !1;
if (typeof window < "u")
  try {
    var Ft = Object.defineProperty({}, "passive", {
      get: function() {
        return Kn = !0, !0;
      }
    });
    window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
  } catch {
    Kn = !1;
  }
var ot = Kn ? { passive: !1 } : !1, Ul = function(e) {
  return e.tagName === "TEXTAREA";
}, zo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ul(e) && n[t] === "visible")
  );
}, Kl = function(e) {
  return zo(e, "overflowY");
}, Gl = function(e) {
  return zo(e, "overflowX");
}, io = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Xo(e, r);
    if (o) {
      var i = qo(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Yl = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, zl = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xo = function(e, t) {
  return e === "v" ? Kl(t) : Gl(t);
}, qo = function(e, t) {
  return e === "v" ? Yl(t) : zl(t);
}, Xl = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ql = function(e, t, n, r, o) {
  var i = Xl(e, window.getComputedStyle(t).direction), s = i * r, a = n.target, l = t.contains(a), u = !1, f = s > 0, d = 0, m = 0;
  do {
    var g = qo(e, a), w = g[0], v = g[1], x = g[2], b = v - x - i * w;
    (w || b) && Xo(e, a) && (d += b, m += w), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (f && (Math.abs(d) < 1 || !o) || !f && (Math.abs(m) < 1 || !o)) && (u = !0), u;
}, $t = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, so = function(e) {
  return [e.deltaX, e.deltaY];
}, ao = function(e) {
  return e && "current" in e ? e.current : e;
}, Zl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Jl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ql = 0, it = [];
function eu(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(Ql++)[0], i = c.useState(Yo)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = bl([e.lockRef.current], (e.shards || []).map(ao), !0).filter(Boolean);
      return v.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(v, x) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var b = $t(v), y = n.current, C = "deltaX" in v ? v.deltaX : y[0] - b[0], R = "deltaY" in v ? v.deltaY : y[1] - b[1], S, O = v.target, P = Math.abs(C) > Math.abs(R) ? "h" : "v";
    if ("touches" in v && P === "h" && O.type === "range")
      return !1;
    var M = io(P, O);
    if (!M)
      return !0;
    if (M ? S = P : (S = P === "v" ? "h" : "v", M = io(P, O)), !M)
      return !1;
    if (!r.current && "changedTouches" in v && (C || R) && (r.current = S), !S)
      return !0;
    var $ = r.current || S;
    return ql($, x, v, $ === "h" ? C : R, !0);
  }, []), l = c.useCallback(function(v) {
    var x = v;
    if (!(!it.length || it[it.length - 1] !== i)) {
      var b = "deltaY" in x ? so(x) : $t(x), y = t.current.filter(function(S) {
        return S.name === x.type && (S.target === x.target || x.target === S.shadowParent) && Zl(S.delta, b);
      })[0];
      if (y && y.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!y) {
        var C = (s.current.shards || []).map(ao).filter(Boolean).filter(function(S) {
          return S.contains(x.target);
        }), R = C.length > 0 ? a(x, C[0]) : !s.current.noIsolation;
        R && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, x, b, y) {
    var C = { name: v, delta: x, target: b, should: y, shadowParent: tu(b) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== C;
      });
    }, 1);
  }, []), f = c.useCallback(function(v) {
    n.current = $t(v), r.current = void 0;
  }, []), d = c.useCallback(function(v) {
    u(v.type, so(v), v.target, a(v, e.lockRef.current));
  }, []), m = c.useCallback(function(v) {
    u(v.type, $t(v), v.target, a(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return it.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, ot), document.addEventListener("touchmove", l, ot), document.addEventListener("touchstart", f, ot), function() {
      it = it.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", l, ot), document.removeEventListener("touchmove", l, ot), document.removeEventListener("touchstart", f, ot);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    w ? c.createElement(i, { styles: Jl(o) }) : null,
    g ? c.createElement(Hl, { gapMode: e.gapMode }) : null
  );
}
function tu(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const nu = Ml(Go, eu);
var _t = c.forwardRef(function(e, t) {
  return c.createElement(fn, Ae({}, e, { ref: t, sideCar: nu }));
});
_t.classNames = fn.classNames;
var Gn = ["Enter", " "], ru = ["ArrowDown", "PageUp", "Home"], Zo = ["ArrowUp", "PageDown", "End"], ou = [...ru, ...Zo], iu = {
  ltr: [...Gn, "ArrowRight"],
  rtl: [...Gn, "ArrowLeft"]
}, su = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, At = "Menu", [Ct, au, cu] = tr(At), [Qe, Jo] = Je(At, [
  cu,
  He,
  ln
]), dn = He(), Qo = ln(), [lu, et] = Qe(At), [uu, Mt] = Qe(At), ei = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: s = !0 } = e, a = dn(t), [l, u] = c.useState(null), f = c.useRef(!1), d = xe(i), m = Qt(o);
  return c.useEffect(() => {
    const g = () => {
      f.current = !0, document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
    }, w = () => f.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
    };
  }, []), /* @__PURE__ */ h.jsx(on, { ...a, children: /* @__PURE__ */ h.jsx(
    lu,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ h.jsx(
        uu,
        {
          scope: t,
          onClose: c.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
ei.displayName = At;
var fu = "MenuAnchor", ur = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = dn(n);
    return /* @__PURE__ */ h.jsx(Pt, { ...o, ...r, ref: t });
  }
);
ur.displayName = fu;
var fr = "MenuPortal", [du, ti] = Qe(fr, {
  forceMount: void 0
}), ni = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = et(fr, t);
  return /* @__PURE__ */ h.jsx(du, { scope: t, forceMount: n, children: /* @__PURE__ */ h.jsx(be, { present: n || i.open, children: /* @__PURE__ */ h.jsx(Tt, { asChild: !0, container: o, children: r }) }) });
};
ni.displayName = fr;
var ye = "MenuContent", [pu, dr] = Qe(ye), ri = c.forwardRef(
  (e, t) => {
    const n = ti(ye, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = et(ye, e.__scopeMenu), s = Mt(ye, e.__scopeMenu);
    return /* @__PURE__ */ h.jsx(Ct.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(be, { present: r || i.open, children: /* @__PURE__ */ h.jsx(Ct.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ h.jsx(vu, { ...o, ref: t }) : /* @__PURE__ */ h.jsx(mu, { ...o, ref: t }) }) }) });
  }
), vu = c.forwardRef(
  (e, t) => {
    const n = et(ye, e.__scopeMenu), r = c.useRef(null), o = q(t, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return un(i);
    }, []), /* @__PURE__ */ h.jsx(
      pr,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: _(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), mu = c.forwardRef((e, t) => {
  const n = et(ye, e.__scopeMenu);
  return /* @__PURE__ */ h.jsx(
    pr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), pr = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: d,
      onInteractOutside: m,
      onDismiss: g,
      disableOutsideScroll: w,
      ...v
    } = e, x = et(ye, n), b = Mt(ye, n), y = dn(n), C = Qo(n), R = au(n), [S, O] = c.useState(null), P = c.useRef(null), M = q(t, P, x.onContentChange), $ = c.useRef(0), W = c.useRef(""), G = c.useRef(0), V = c.useRef(null), k = c.useRef("right"), L = c.useRef(0), z = w ? _t : c.Fragment, N = w ? { as: Le, allowPinchZoom: !0 } : void 0, H = (A) => {
      var I, Y;
      const Z = W.current + A, ne = R().filter((J) => !J.disabled), ie = document.activeElement, me = (I = ne.find((J) => J.ref.current === ie)) == null ? void 0 : I.textValue, fe = ne.map((J) => J.textValue), Ce = Tu(fe, Z, me), se = (Y = ne.find((J) => J.textValue === Ce)) == null ? void 0 : Y.ref.current;
      (function J(U) {
        W.current = U, window.clearTimeout($.current), U !== "" && ($.current = window.setTimeout(() => J(""), 1e3));
      })(Z), se && setTimeout(() => se.focus());
    };
    c.useEffect(() => () => window.clearTimeout($.current), []), en();
    const D = c.useCallback((A) => {
      var ne, ie;
      return k.current === ((ne = V.current) == null ? void 0 : ne.side) && Au(A, (ie = V.current) == null ? void 0 : ie.area);
    }, []);
    return /* @__PURE__ */ h.jsx(
      pu,
      {
        scope: n,
        searchRef: W,
        onItemEnter: c.useCallback(
          (A) => {
            D(A) && A.preventDefault();
          },
          [D]
        ),
        onItemLeave: c.useCallback(
          (A) => {
            var Z;
            D(A) || ((Z = P.current) == null || Z.focus(), O(null));
          },
          [D]
        ),
        onTriggerLeave: c.useCallback(
          (A) => {
            D(A) && A.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: G,
        onPointerGraceIntentChange: c.useCallback((A) => {
          V.current = A;
        }, []),
        children: /* @__PURE__ */ h.jsx(z, { ...N, children: /* @__PURE__ */ h.jsx(
          Rt,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: _(i, (A) => {
              var Z;
              A.preventDefault(), (Z = P.current) == null || Z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ h.jsx(
              ft,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: d,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ h.jsx(
                  Bo,
                  {
                    asChild: !0,
                    ...C,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: O,
                    onEntryFocus: _(l, (A) => {
                      b.isUsingKeyboardRef.current || A.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ h.jsx(
                      sn,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": yi(x.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...y,
                        ...v,
                        ref: M,
                        style: { outline: "none", ...v.style },
                        onKeyDown: _(v.onKeyDown, (A) => {
                          const ne = A.target.closest("[data-radix-menu-content]") === A.currentTarget, ie = A.ctrlKey || A.altKey || A.metaKey, me = A.key.length === 1;
                          ne && (A.key === "Tab" && A.preventDefault(), !ie && me && H(A.key));
                          const fe = P.current;
                          if (A.target !== fe || !ou.includes(A.key)) return;
                          A.preventDefault();
                          const se = R().filter((I) => !I.disabled).map((I) => I.ref.current);
                          Zo.includes(A.key) && se.reverse(), Su(se);
                        }),
                        onBlur: _(e.onBlur, (A) => {
                          A.currentTarget.contains(A.target) || (window.clearTimeout($.current), W.current = "");
                        }),
                        onPointerMove: _(
                          e.onPointerMove,
                          Et((A) => {
                            const Z = A.target, ne = L.current !== A.clientX;
                            if (A.currentTarget.contains(Z) && ne) {
                              const ie = A.clientX > L.current ? "right" : "left";
                              k.current = ie, L.current = A.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ri.displayName = ye;
var hu = "MenuGroup", vr = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(F.div, { role: "group", ...r, ref: t });
  }
);
vr.displayName = hu;
var gu = "MenuLabel", oi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(F.div, { ...r, ref: t });
  }
);
oi.displayName = gu;
var Yt = "MenuItem", co = "menu.itemSelect", pn = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = c.useRef(null), s = Mt(Yt, e.__scopeMenu), a = dr(Yt, e.__scopeMenu), l = q(t, i), u = c.useRef(!1), f = () => {
      const d = i.current;
      if (!n && d) {
        const m = new CustomEvent(co, { bubbles: !0, cancelable: !0 });
        d.addEventListener(co, (g) => r == null ? void 0 : r(g), { once: !0 }), vo(d, m), m.defaultPrevented ? u.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ h.jsx(
      ii,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: _(e.onClick, f),
        onPointerDown: (d) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, d), u.current = !0;
        },
        onPointerUp: _(e.onPointerUp, (d) => {
          var m;
          u.current || (m = d.currentTarget) == null || m.click();
        }),
        onKeyDown: _(e.onKeyDown, (d) => {
          const m = a.searchRef.current !== "";
          n || m && d.key === " " || Gn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
pn.displayName = Yt;
var ii = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, s = dr(Yt, n), a = Qo(n), l = c.useRef(null), u = q(t, l), [f, d] = c.useState(!1), [m, g] = c.useState("");
    return c.useEffect(() => {
      const w = l.current;
      w && g((w.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ h.jsx(
      Ct.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ h.jsx(Vo, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ h.jsx(
          F.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: _(
              e.onPointerMove,
              Et((w) => {
                r ? s.onItemLeave(w) : (s.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: _(
              e.onPointerLeave,
              Et((w) => s.onItemLeave(w))
            ),
            onFocus: _(e.onFocus, () => d(!0)),
            onBlur: _(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), wu = "MenuCheckboxItem", si = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ h.jsx(fi, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ h.jsx(
      pn,
      {
        role: "menuitemcheckbox",
        "aria-checked": zt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": hr(n),
        onSelect: _(
          o.onSelect,
          () => r == null ? void 0 : r(zt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
si.displayName = wu;
var ai = "MenuRadioGroup", [yu, xu] = Qe(
  ai,
  { value: void 0, onValueChange: () => {
  } }
), ci = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = xe(r);
    return /* @__PURE__ */ h.jsx(yu, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ h.jsx(vr, { ...o, ref: t }) });
  }
);
ci.displayName = ai;
var li = "MenuRadioItem", ui = c.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = xu(li, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ h.jsx(fi, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ h.jsx(
      pn,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": hr(i),
        onSelect: _(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ui.displayName = li;
var mr = "MenuItemIndicator", [fi, bu] = Qe(
  mr,
  { checked: !1 }
), di = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = bu(mr, n);
    return /* @__PURE__ */ h.jsx(
      be,
      {
        present: r || zt(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ h.jsx(
          F.span,
          {
            ...o,
            ref: t,
            "data-state": hr(i.checked)
          }
        )
      }
    );
  }
);
di.displayName = mr;
var Cu = "MenuSeparator", pi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(
      F.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
pi.displayName = Cu;
var Eu = "MenuArrow", vi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = dn(n);
    return /* @__PURE__ */ h.jsx(an, { ...o, ...r, ref: t });
  }
);
vi.displayName = Eu;
var Ru = "MenuSub", [pd, mi] = Qe(Ru), wt = "MenuSubTrigger", hi = c.forwardRef(
  (e, t) => {
    const n = et(wt, e.__scopeMenu), r = Mt(wt, e.__scopeMenu), o = mi(wt, e.__scopeMenu), i = dr(wt, e.__scopeMenu), s = c.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, u = { __scopeMenu: e.__scopeMenu }, f = c.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return c.useEffect(() => f, [f]), c.useEffect(() => {
      const d = a.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [a, l]), /* @__PURE__ */ h.jsx(ur, { asChild: !0, ...u, children: /* @__PURE__ */ h.jsx(
      ii,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": yi(n.open),
        ...e,
        ref: Jt(t, o.onTriggerChange),
        onClick: (d) => {
          var m;
          (m = e.onClick) == null || m.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: _(
          e.onPointerMove,
          Et((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: _(
          e.onPointerLeave,
          Et((d) => {
            var g, w;
            f();
            const m = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
            if (m) {
              const v = (w = n.content) == null ? void 0 : w.dataset.side, x = v === "right", b = x ? -5 : 5, y = m[x ? "left" : "right"], C = m[x ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + b, y: d.clientY },
                  { x: y, y: m.top },
                  { x: C, y: m.top },
                  { x: C, y: m.bottom },
                  { x: y, y: m.bottom }
                ],
                side: v
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(d), d.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: _(e.onKeyDown, (d) => {
          var g;
          const m = i.searchRef.current !== "";
          e.disabled || m && d.key === " " || iu[r.dir].includes(d.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
hi.displayName = wt;
var gi = "MenuSubContent", wi = c.forwardRef(
  (e, t) => {
    const n = ti(ye, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = et(ye, e.__scopeMenu), s = Mt(ye, e.__scopeMenu), a = mi(gi, e.__scopeMenu), l = c.useRef(null), u = q(t, l);
    return /* @__PURE__ */ h.jsx(Ct.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(be, { present: r || i.open, children: /* @__PURE__ */ h.jsx(Ct.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(
      pr,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var d;
          s.isUsingKeyboardRef.current && ((d = l.current) == null || d.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: _(e.onFocusOutside, (f) => {
          f.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: _(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: _(e.onKeyDown, (f) => {
          var g;
          const d = f.currentTarget.contains(f.target), m = su[s.dir].includes(f.key);
          d && m && (i.onOpenChange(!1), (g = a.trigger) == null || g.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
wi.displayName = gi;
function yi(e) {
  return e ? "open" : "closed";
}
function zt(e) {
  return e === "indeterminate";
}
function hr(e) {
  return zt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Su(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Pu(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Tu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Pu(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function _u(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, u = t[s].x, f = t[s].y;
    l > r != f > r && n < (u - a) * (r - l) / (f - l) + a && (o = !o);
  }
  return o;
}
function Au(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return _u(n, t);
}
function Et(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Mu = ei, Ou = ur, Iu = ni, Du = ri, Nu = vr, ju = oi, ku = pn, Lu = si, Fu = ci, $u = ui, Wu = di, Bu = pi, Vu = vi, Hu = hi, Uu = wi, gr = "DropdownMenu", [Ku, vd] = Je(
  gr,
  [Jo]
), ue = Jo(), [Gu, xi] = Ku(gr), bi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, l = ue(t), u = c.useRef(null), [f = !1, d] = Fe({
    prop: o,
    defaultProp: i,
    onChange: s
  });
  return /* @__PURE__ */ h.jsx(
    Gu,
    {
      scope: t,
      triggerId: we(),
      triggerRef: u,
      contentId: we(),
      open: f,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((m) => !m), [d]),
      modal: a,
      children: /* @__PURE__ */ h.jsx(Mu, { ...l, open: f, onOpenChange: d, dir: r, modal: a, children: n })
    }
  );
};
bi.displayName = gr;
var Ci = "DropdownMenuTrigger", Ei = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = xi(Ci, n), s = ue(n);
    return /* @__PURE__ */ h.jsx(Ou, { asChild: !0, ...s, children: /* @__PURE__ */ h.jsx(
      F.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Jt(t, i.triggerRef),
        onPointerDown: _(e.onPointerDown, (a) => {
          !r && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: _(e.onKeyDown, (a) => {
          r || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
Ei.displayName = Ci;
var Yu = "DropdownMenuPortal", Ri = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = ue(t);
  return /* @__PURE__ */ h.jsx(Iu, { ...r, ...n });
};
Ri.displayName = Yu;
var Si = "DropdownMenuContent", Pi = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = xi(Si, n), i = ue(n), s = c.useRef(!1);
    return /* @__PURE__ */ h.jsx(
      Du,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: _(e.onCloseAutoFocus, (a) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, a.preventDefault();
        }),
        onInteractOutside: _(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || u;
          (!o.modal || f) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Pi.displayName = Si;
var zu = "DropdownMenuGroup", Xu = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
    return /* @__PURE__ */ h.jsx(Nu, { ...o, ...r, ref: t });
  }
);
Xu.displayName = zu;
var qu = "DropdownMenuLabel", Ti = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
    return /* @__PURE__ */ h.jsx(ju, { ...o, ...r, ref: t });
  }
);
Ti.displayName = qu;
var Zu = "DropdownMenuItem", _i = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
    return /* @__PURE__ */ h.jsx(ku, { ...o, ...r, ref: t });
  }
);
_i.displayName = Zu;
var Ju = "DropdownMenuCheckboxItem", Ai = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
  return /* @__PURE__ */ h.jsx(Lu, { ...o, ...r, ref: t });
});
Ai.displayName = Ju;
var Qu = "DropdownMenuRadioGroup", ef = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
  return /* @__PURE__ */ h.jsx(Fu, { ...o, ...r, ref: t });
});
ef.displayName = Qu;
var tf = "DropdownMenuRadioItem", Mi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
  return /* @__PURE__ */ h.jsx($u, { ...o, ...r, ref: t });
});
Mi.displayName = tf;
var nf = "DropdownMenuItemIndicator", Oi = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
  return /* @__PURE__ */ h.jsx(Wu, { ...o, ...r, ref: t });
});
Oi.displayName = nf;
var rf = "DropdownMenuSeparator", Ii = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
  return /* @__PURE__ */ h.jsx(Bu, { ...o, ...r, ref: t });
});
Ii.displayName = rf;
var of = "DropdownMenuArrow", sf = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
    return /* @__PURE__ */ h.jsx(Vu, { ...o, ...r, ref: t });
  }
);
sf.displayName = of;
var af = "DropdownMenuSubTrigger", Di = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
  return /* @__PURE__ */ h.jsx(Hu, { ...o, ...r, ref: t });
});
Di.displayName = af;
var cf = "DropdownMenuSubContent", Ni = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ue(n);
  return /* @__PURE__ */ h.jsx(
    Uu,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ni.displayName = cf;
var md = bi, hd = Ei, gd = Ri, wd = Pi, yd = Ti, xd = _i, bd = Ai, Cd = Mi, Ed = Oi, Rd = Ii, Sd = Di, Pd = Ni, wr = "Tabs", [lf, Td] = Je(wr, [
  ln
]), ji = ln(), [uf, yr] = lf(wr), ki = c.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: s = "horizontal",
      dir: a,
      activationMode: l = "automatic",
      ...u
    } = e, f = Qt(a), [d, m] = Fe({
      prop: r,
      onChange: o,
      defaultProp: i
    });
    return /* @__PURE__ */ h.jsx(
      uf,
      {
        scope: n,
        baseId: we(),
        value: d,
        onValueChange: m,
        orientation: s,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ h.jsx(
          F.div,
          {
            dir: f,
            "data-orientation": s,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
ki.displayName = wr;
var Li = "TabsList", Fi = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, i = yr(Li, n), s = ji(n);
    return /* @__PURE__ */ h.jsx(
      Bo,
      {
        asChild: !0,
        ...s,
        orientation: i.orientation,
        dir: i.dir,
        loop: r,
        children: /* @__PURE__ */ h.jsx(
          F.div,
          {
            role: "tablist",
            "aria-orientation": i.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
Fi.displayName = Li;
var $i = "TabsTrigger", Wi = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...i } = e, s = yr($i, n), a = ji(n), l = Hi(s.baseId, r), u = Ui(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ h.jsx(
      Vo,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ h.jsx(
          F.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": u,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...i,
            ref: t,
            onMouseDown: _(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: _(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && s.onValueChange(r);
            }),
            onFocus: _(e.onFocus, () => {
              const d = s.activationMode !== "manual";
              !f && !o && d && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Wi.displayName = $i;
var Bi = "TabsContent", Vi = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: i, ...s } = e, a = yr(Bi, n), l = Hi(a.baseId, r), u = Ui(a.baseId, r), f = r === a.value, d = c.useRef(f);
    return c.useEffect(() => {
      const m = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ h.jsx(be, { present: o || f, children: ({ present: m }) => /* @__PURE__ */ h.jsx(
      F.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !m,
        id: u,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: m && i
      }
    ) });
  }
);
Vi.displayName = Bi;
function Hi(e, t) {
  return `${e}-trigger-${t}`;
}
function Ui(e, t) {
  return `${e}-content-${t}`;
}
var _d = ki, Ad = Fi, Md = Wi, Od = Vi, xr = "Dialog", [Ki, Id] = Je(xr), [ff, Te] = Ki(xr), Gi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u = !1, f] = Fe({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ h.jsx(
    ff,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: we(),
      titleId: we(),
      descriptionId: we(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((d) => !d), [f]),
      modal: s,
      children: n
    }
  );
};
Gi.displayName = xr;
var Yi = "DialogTrigger", df = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(Yi, n), i = q(t, o.triggerRef);
    return /* @__PURE__ */ h.jsx(
      F.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Er(o.open),
        ...r,
        ref: i,
        onClick: _(e.onClick, o.onOpenToggle)
      }
    );
  }
);
df.displayName = Yi;
var br = "DialogPortal", [pf, zi] = Ki(br, {
  forceMount: void 0
}), Xi = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = Te(br, t);
  return /* @__PURE__ */ h.jsx(pf, { scope: t, forceMount: n, children: c.Children.map(r, (s) => /* @__PURE__ */ h.jsx(be, { present: n || i.open, children: /* @__PURE__ */ h.jsx(Tt, { asChild: !0, container: o, children: s }) })) });
};
Xi.displayName = br;
var Xt = "DialogOverlay", qi = c.forwardRef(
  (e, t) => {
    const n = zi(Xt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Te(Xt, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ h.jsx(be, { present: r || i.open, children: /* @__PURE__ */ h.jsx(vf, { ...o, ref: t }) }) : null;
  }
);
qi.displayName = Xt;
var vf = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(Xt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h.jsx(_t, { as: Le, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ h.jsx(
        F.div,
        {
          "data-state": Er(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), qe = "DialogContent", Zi = c.forwardRef(
  (e, t) => {
    const n = zi(qe, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = Te(qe, e.__scopeDialog);
    return /* @__PURE__ */ h.jsx(be, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h.jsx(mf, { ...o, ref: t }) : /* @__PURE__ */ h.jsx(hf, { ...o, ref: t }) });
  }
);
Zi.displayName = qe;
var mf = c.forwardRef(
  (e, t) => {
    const n = Te(qe, e.__scopeDialog), r = c.useRef(null), o = q(t, n.contentRef, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return un(i);
    }, []), /* @__PURE__ */ h.jsx(
      Ji,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: _(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: _(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: _(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), hf = c.forwardRef(
  (e, t) => {
    const n = Te(qe, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ h.jsx(
      Ji,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), Ji = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s } = e, a = Te(qe, n), l = c.useRef(null), u = q(t, l);
    return en(), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        Rt,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ h.jsx(
            ft,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Er(a.open),
              ...s,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsx(gf, { titleId: a.titleId }),
        /* @__PURE__ */ h.jsx(yf, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Cr = "DialogTitle", Qi = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(Cr, n);
    return /* @__PURE__ */ h.jsx(F.h2, { id: o.titleId, ...r, ref: t });
  }
);
Qi.displayName = Cr;
var es = "DialogDescription", ts = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(es, n);
    return /* @__PURE__ */ h.jsx(F.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ts.displayName = es;
var ns = "DialogClose", rs = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Te(ns, n);
    return /* @__PURE__ */ h.jsx(
      F.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: _(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
rs.displayName = ns;
function Er(e) {
  return e ? "open" : "closed";
}
var os = "DialogTitleWarning", [Dd, is] = Aa(os, {
  contentName: qe,
  titleName: Cr,
  docsSlug: "dialog"
}), gf = ({ titleId: e }) => {
  const t = is(os), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, wf = "DialogDescriptionWarning", yf = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${is(wf).contentName}}.`;
  return c.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Nd = Gi, jd = Xi, kd = qi, Ld = Zi, Fd = Qi, $d = ts, Wd = rs, xf = "Label", ss = c.forwardRef((e, t) => /* @__PURE__ */ h.jsx(
  F.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
ss.displayName = xf;
var Bd = ss;
function bf(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Cf = "VisuallyHidden", Rr = c.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(
    F.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Rr.displayName = Cf;
var Ef = Rr, [vn, Vd] = Je("Tooltip", [
  He
]), mn = He(), as = "TooltipProvider", Rf = 700, Yn = "tooltip.open", [Sf, Sr] = vn(as), cs = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Rf,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: i
  } = e, [s, a] = c.useState(!0), l = c.useRef(!1), u = c.useRef(0);
  return c.useEffect(() => {
    const f = u.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ h.jsx(
    Sf,
    {
      scope: t,
      isOpenDelayed: s,
      delayDuration: n,
      onOpen: c.useCallback(() => {
        window.clearTimeout(u.current), a(!1);
      }, []),
      onClose: c.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => a(!0),
          r
        );
      }, [r]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: c.useCallback((f) => {
        l.current = f;
      }, []),
      disableHoverableContent: o,
      children: i
    }
  );
};
cs.displayName = as;
var hn = "Tooltip", [Pf, gn] = vn(hn), ls = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o = !1,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: a
  } = e, l = Sr(hn, e.__scopeTooltip), u = mn(t), [f, d] = c.useState(null), m = we(), g = c.useRef(0), w = s ?? l.disableHoverableContent, v = a ?? l.delayDuration, x = c.useRef(!1), [b = !1, y] = Fe({
    prop: r,
    defaultProp: o,
    onChange: (P) => {
      P ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Yn))) : l.onClose(), i == null || i(P);
    }
  }), C = c.useMemo(() => b ? x.current ? "delayed-open" : "instant-open" : "closed", [b]), R = c.useCallback(() => {
    window.clearTimeout(g.current), x.current = !1, y(!0);
  }, [y]), S = c.useCallback(() => {
    window.clearTimeout(g.current), y(!1);
  }, [y]), O = c.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      x.current = !0, y(!0);
    }, v);
  }, [v, y]);
  return c.useEffect(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ h.jsx(on, { ...u, children: /* @__PURE__ */ h.jsx(
    Pf,
    {
      scope: t,
      contentId: m,
      open: b,
      stateAttribute: C,
      trigger: f,
      onTriggerChange: d,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayed ? O() : R();
      }, [l.isOpenDelayed, O, R]),
      onTriggerLeave: c.useCallback(() => {
        w ? S() : window.clearTimeout(g.current);
      }, [S, w]),
      onOpen: R,
      onClose: S,
      disableHoverableContent: w,
      children: n
    }
  ) });
};
ls.displayName = hn;
var zn = "TooltipTrigger", us = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = gn(zn, n), i = Sr(zn, n), s = mn(n), a = c.useRef(null), l = q(t, a, o.onTriggerChange), u = c.useRef(!1), f = c.useRef(!1), d = c.useCallback(() => u.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ h.jsx(Pt, { asChild: !0, ...s, children: /* @__PURE__ */ h.jsx(
      F.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: _(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: _(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: _(e.onPointerDown, () => {
          u.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: _(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: _(e.onBlur, o.onClose),
        onClick: _(e.onClick, o.onClose)
      }
    ) });
  }
);
us.displayName = zn;
var Tf = "TooltipPortal", [Hd, _f] = vn(Tf, {
  forceMount: void 0
}), lt = "TooltipContent", fs = c.forwardRef(
  (e, t) => {
    const n = _f(lt, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...i } = e, s = gn(lt, e.__scopeTooltip);
    return /* @__PURE__ */ h.jsx(be, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ h.jsx(ds, { side: o, ...i, ref: t }) : /* @__PURE__ */ h.jsx(Af, { side: o, ...i, ref: t }) });
  }
), Af = c.forwardRef((e, t) => {
  const n = gn(lt, e.__scopeTooltip), r = Sr(lt, e.__scopeTooltip), o = c.useRef(null), i = q(t, o), [s, a] = c.useState(null), { trigger: l, onClose: u } = n, f = o.current, { onPointerInTransitChange: d } = r, m = c.useCallback(() => {
    a(null), d(!1);
  }, [d]), g = c.useCallback(
    (w, v) => {
      const x = w.currentTarget, b = { x: w.clientX, y: w.clientY }, y = Df(b, x.getBoundingClientRect()), C = Nf(b, y), R = jf(v.getBoundingClientRect()), S = Lf([...C, ...R]);
      a(S), d(!0);
    },
    [d]
  );
  return c.useEffect(() => () => m(), [m]), c.useEffect(() => {
    if (l && f) {
      const w = (x) => g(x, f), v = (x) => g(x, l);
      return l.addEventListener("pointerleave", w), f.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", w), f.removeEventListener("pointerleave", v);
      };
    }
  }, [l, f, g, m]), c.useEffect(() => {
    if (s) {
      const w = (v) => {
        const x = v.target, b = { x: v.clientX, y: v.clientY }, y = (l == null ? void 0 : l.contains(x)) || (f == null ? void 0 : f.contains(x)), C = !kf(b, s);
        y ? m() : C && (m(), u());
      };
      return document.addEventListener("pointermove", w), () => document.removeEventListener("pointermove", w);
    }
  }, [l, f, s, u, m]), /* @__PURE__ */ h.jsx(ds, { ...e, ref: i });
}), [Mf, Of] = vn(hn, { isInside: !1 }), ds = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      ...a
    } = e, l = gn(lt, n), u = mn(n), { onClose: f } = l;
    return c.useEffect(() => (document.addEventListener(Yn, f), () => document.removeEventListener(Yn, f)), [f]), c.useEffect(() => {
      if (l.trigger) {
        const d = (m) => {
          const g = m.target;
          g != null && g.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ h.jsx(
      ft,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ h.jsxs(
          sn,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ h.jsx(po, { children: r }),
              /* @__PURE__ */ h.jsx(Mf, { scope: n, isInside: !0, children: /* @__PURE__ */ h.jsx(Ef, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
fs.displayName = lt;
var ps = "TooltipArrow", If = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = mn(n);
    return Of(
      ps,
      n
    ).isInside ? null : /* @__PURE__ */ h.jsx(an, { ...o, ...r, ref: t });
  }
);
If.displayName = ps;
function Df(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Nf(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function jf(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function kf(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, u = t[s].x, f = t[s].y;
    l > r != f > r && n < (u - a) * (r - l) / (f - l) + a && (o = !o);
  }
  return o;
}
function Lf(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Ff(t);
}
function Ff(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Ud = cs, Kd = ls, Gd = us, Yd = fs;
function lo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var $f = [" ", "Enter", "ArrowUp", "ArrowDown"], Wf = [" ", "Enter"], Ot = "Select", [wn, yn, Bf] = tr(Ot), [vt, zd] = Je(Ot, [
  Bf,
  He
]), xn = He(), [Vf, Ue] = vt(Ot), [Hf, Uf] = vt(Ot), vs = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    value: s,
    defaultValue: a,
    onValueChange: l,
    dir: u,
    name: f,
    autoComplete: d,
    disabled: m,
    required: g,
    form: w
  } = e, v = xn(t), [x, b] = c.useState(null), [y, C] = c.useState(null), [R, S] = c.useState(!1), O = Qt(u), [P = !1, M] = Fe({
    prop: r,
    defaultProp: o,
    onChange: i
  }), [$, W] = Fe({
    prop: s,
    defaultProp: a,
    onChange: l
  }), G = c.useRef(null), V = x ? w || !!x.closest("form") : !0, [k, L] = c.useState(/* @__PURE__ */ new Set()), z = Array.from(k).map((N) => N.props.value).join(";");
  return /* @__PURE__ */ h.jsx(on, { ...v, children: /* @__PURE__ */ h.jsxs(
    Vf,
    {
      required: g,
      scope: t,
      trigger: x,
      onTriggerChange: b,
      valueNode: y,
      onValueNodeChange: C,
      valueNodeHasChildren: R,
      onValueNodeHasChildrenChange: S,
      contentId: we(),
      value: $,
      onValueChange: W,
      open: P,
      onOpenChange: M,
      dir: O,
      triggerPointerDownPosRef: G,
      disabled: m,
      children: [
        /* @__PURE__ */ h.jsx(wn.Provider, { scope: t, children: /* @__PURE__ */ h.jsx(
          Hf,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((N) => {
              L((H) => new Set(H).add(N));
            }, []),
            onNativeOptionRemove: c.useCallback((N) => {
              L((H) => {
                const D = new Set(H);
                return D.delete(N), D;
              });
            }, []),
            children: n
          }
        ) }),
        V ? /* @__PURE__ */ h.jsxs(
          Ws,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: f,
            autoComplete: d,
            value: $,
            onChange: (N) => W(N.target.value),
            disabled: m,
            form: w,
            children: [
              $ === void 0 ? /* @__PURE__ */ h.jsx("option", { value: "" }) : null,
              Array.from(k)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
vs.displayName = Ot;
var ms = "SelectTrigger", hs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, i = xn(n), s = Ue(ms, n), a = s.disabled || r, l = q(t, s.onTriggerChange), u = yn(n), f = c.useRef("touch"), [d, m, g] = Bs((v) => {
      const x = u().filter((C) => !C.disabled), b = x.find((C) => C.value === s.value), y = Vs(x, v, b);
      y !== void 0 && s.onValueChange(y.value);
    }), w = (v) => {
      a || (s.onOpenChange(!0), g()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ h.jsx(Pt, { asChild: !0, ...i, children: /* @__PURE__ */ h.jsx(
      F.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": $s(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: _(o.onClick, (v) => {
          v.currentTarget.focus(), f.current !== "mouse" && w(v);
        }),
        onPointerDown: _(o.onPointerDown, (v) => {
          f.current = v.pointerType;
          const x = v.target;
          x.hasPointerCapture(v.pointerId) && x.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (w(v), v.preventDefault());
        }),
        onKeyDown: _(o.onKeyDown, (v) => {
          const x = d.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && m(v.key), !(x && v.key === " ") && $f.includes(v.key) && (w(), v.preventDefault());
        })
      }
    ) });
  }
);
hs.displayName = ms;
var gs = "SelectValue", ws = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: i, placeholder: s = "", ...a } = e, l = Ue(gs, n), { onValueNodeHasChildrenChange: u } = l, f = i !== void 0, d = q(t, l.onValueNodeChange);
    return le(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ h.jsx(
      F.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: $s(l.value) ? /* @__PURE__ */ h.jsx(h.Fragment, { children: s }) : i
      }
    );
  }
);
ws.displayName = gs;
var Kf = "SelectIcon", ys = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ h.jsx(F.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
ys.displayName = Kf;
var Gf = "SelectPortal", xs = (e) => /* @__PURE__ */ h.jsx(Tt, { asChild: !0, ...e });
xs.displayName = Gf;
var Ze = "SelectContent", bs = c.forwardRef(
  (e, t) => {
    const n = Ue(Ze, e.__scopeSelect), [r, o] = c.useState();
    if (le(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const i = r;
      return i ? Zt.createPortal(
        /* @__PURE__ */ h.jsx(Cs, { scope: e.__scopeSelect, children: /* @__PURE__ */ h.jsx(wn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ h.jsx("div", { children: e.children }) }) }),
        i
      ) : null;
    }
    return /* @__PURE__ */ h.jsx(Es, { ...e, ref: t });
  }
);
bs.displayName = Ze;
var Re = 10, [Cs, Ke] = vt(Ze), Yf = "SelectContentImpl", Es = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: v,
      avoidCollisions: x,
      //
      ...b
    } = e, y = Ue(Ze, n), [C, R] = c.useState(null), [S, O] = c.useState(null), P = q(t, (I) => R(I)), [M, $] = c.useState(null), [W, G] = c.useState(
      null
    ), V = yn(n), [k, L] = c.useState(!1), z = c.useRef(!1);
    c.useEffect(() => {
      if (C) return un(C);
    }, [C]), en();
    const N = c.useCallback(
      (I) => {
        const [Y, ...J] = V().map((X) => X.ref.current), [U] = J.slice(-1), Q = document.activeElement;
        for (const X of I)
          if (X === Q || (X == null || X.scrollIntoView({ block: "nearest" }), X === Y && S && (S.scrollTop = 0), X === U && S && (S.scrollTop = S.scrollHeight), X == null || X.focus(), document.activeElement !== Q)) return;
      },
      [V, S]
    ), H = c.useCallback(
      () => N([M, C]),
      [N, M, C]
    );
    c.useEffect(() => {
      k && H();
    }, [k, H]);
    const { onOpenChange: D, triggerPointerDownPosRef: A } = y;
    c.useEffect(() => {
      if (C) {
        let I = { x: 0, y: 0 };
        const Y = (U) => {
          var Q, X;
          I = {
            x: Math.abs(Math.round(U.pageX) - (((Q = A.current) == null ? void 0 : Q.x) ?? 0)),
            y: Math.abs(Math.round(U.pageY) - (((X = A.current) == null ? void 0 : X.y) ?? 0))
          };
        }, J = (U) => {
          I.x <= 10 && I.y <= 10 ? U.preventDefault() : C.contains(U.target) || D(!1), document.removeEventListener("pointermove", Y), A.current = null;
        };
        return A.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [C, D, A]), c.useEffect(() => {
      const I = () => D(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [D]);
    const [Z, ne] = Bs((I) => {
      const Y = V().filter((Q) => !Q.disabled), J = Y.find((Q) => Q.ref.current === document.activeElement), U = Vs(Y, I, J);
      U && setTimeout(() => U.ref.current.focus());
    }), ie = c.useCallback(
      (I, Y, J) => {
        const U = !z.current && !J;
        (y.value !== void 0 && y.value === Y || U) && ($(I), U && (z.current = !0));
      },
      [y.value]
    ), me = c.useCallback(() => C == null ? void 0 : C.focus(), [C]), fe = c.useCallback(
      (I, Y, J) => {
        const U = !z.current && !J;
        (y.value !== void 0 && y.value === Y || U) && G(I);
      },
      [y.value]
    ), Ce = r === "popper" ? Xn : Rs, se = Ce === Xn ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: v,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ h.jsx(
      Cs,
      {
        scope: n,
        content: C,
        viewport: S,
        onViewportChange: O,
        itemRefCallback: ie,
        selectedItem: M,
        onItemLeave: me,
        itemTextRefCallback: fe,
        focusSelectedItem: H,
        selectedItemText: W,
        position: r,
        isPositioned: k,
        searchRef: Z,
        children: /* @__PURE__ */ h.jsx(_t, { as: Le, allowPinchZoom: !0, children: /* @__PURE__ */ h.jsx(
          Rt,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: _(o, (I) => {
              var Y;
              (Y = y.trigger) == null || Y.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ h.jsx(
              ft,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: i,
                onPointerDownOutside: s,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ h.jsx(
                  Ce,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...b,
                    ...se,
                    onPlaced: () => L(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: _(b.onKeyDown, (I) => {
                      const Y = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !Y && I.key.length === 1 && ne(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let U = V().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (U = U.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const Q = I.target, X = U.indexOf(Q);
                          U = U.slice(X + 1);
                        }
                        setTimeout(() => N(U)), I.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Es.displayName = Yf;
var zf = "SelectItemAlignedPosition", Rs = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, i = Ue(Ze, n), s = Ke(Ze, n), [a, l] = c.useState(null), [u, f] = c.useState(null), d = q(t, (P) => f(P)), m = yn(n), g = c.useRef(!1), w = c.useRef(!0), { viewport: v, selectedItem: x, selectedItemText: b, focusSelectedItem: y } = s, C = c.useCallback(() => {
    if (i.trigger && i.valueNode && a && u && v && x && b) {
      const P = i.trigger.getBoundingClientRect(), M = u.getBoundingClientRect(), $ = i.valueNode.getBoundingClientRect(), W = b.getBoundingClientRect();
      if (i.dir !== "rtl") {
        const Q = W.left - M.left, X = $.left - Q, ae = P.left - X, he = P.width + ae, _e = Math.max(he, M.width), Ee = window.innerWidth - Re, je = lo(X, [
          Re,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Re, Ee - _e)
        ]);
        a.style.minWidth = he + "px", a.style.left = je + "px";
      } else {
        const Q = M.right - W.right, X = window.innerWidth - $.right - Q, ae = window.innerWidth - P.right - X, he = P.width + ae, _e = Math.max(he, M.width), Ee = window.innerWidth - Re, je = lo(X, [
          Re,
          Math.max(Re, Ee - _e)
        ]);
        a.style.minWidth = he + "px", a.style.right = je + "px";
      }
      const G = m(), V = window.innerHeight - Re * 2, k = v.scrollHeight, L = window.getComputedStyle(u), z = parseInt(L.borderTopWidth, 10), N = parseInt(L.paddingTop, 10), H = parseInt(L.borderBottomWidth, 10), D = parseInt(L.paddingBottom, 10), A = z + N + k + D + H, Z = Math.min(x.offsetHeight * 5, A), ne = window.getComputedStyle(v), ie = parseInt(ne.paddingTop, 10), me = parseInt(ne.paddingBottom, 10), fe = P.top + P.height / 2 - Re, Ce = V - fe, se = x.offsetHeight / 2, I = x.offsetTop + se, Y = z + N + I, J = A - Y;
      if (Y <= fe) {
        const Q = G.length > 0 && x === G[G.length - 1].ref.current;
        a.style.bottom = "0px";
        const X = u.clientHeight - v.offsetTop - v.offsetHeight, ae = Math.max(
          Ce,
          se + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Q ? me : 0) + X + H
        ), he = Y + ae;
        a.style.height = he + "px";
      } else {
        const Q = G.length > 0 && x === G[0].ref.current;
        a.style.top = "0px";
        const ae = Math.max(
          fe,
          z + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Q ? ie : 0) + se
        ) + J;
        a.style.height = ae + "px", v.scrollTop = Y - fe + v.offsetTop;
      }
      a.style.margin = `${Re}px 0`, a.style.minHeight = Z + "px", a.style.maxHeight = V + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    m,
    i.trigger,
    i.valueNode,
    a,
    u,
    v,
    x,
    b,
    i.dir,
    r
  ]);
  le(() => C(), [C]);
  const [R, S] = c.useState();
  le(() => {
    u && S(window.getComputedStyle(u).zIndex);
  }, [u]);
  const O = c.useCallback(
    (P) => {
      P && w.current === !0 && (C(), y == null || y(), w.current = !1);
    },
    [C, y]
  );
  return /* @__PURE__ */ h.jsx(
    qf,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: O,
      children: /* @__PURE__ */ h.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: R
          },
          children: /* @__PURE__ */ h.jsx(
            F.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Rs.displayName = zf;
var Xf = "SelectPopperPosition", Xn = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Re,
    ...i
  } = e, s = xn(n);
  return /* @__PURE__ */ h.jsx(
    sn,
    {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Xn.displayName = Xf;
var [qf, Pr] = vt(Ze, {}), qn = "SelectViewport", Ss = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, i = Ke(qn, n), s = Pr(qn, n), a = q(t, i.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ h.jsx(wn.Slot, { scope: n, children: /* @__PURE__ */ h.jsx(
        F.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: _(o.onScroll, (u) => {
            const f = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: m } = s;
            if (m != null && m.current && d) {
              const g = Math.abs(l.current - f.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - Re * 2, v = parseFloat(d.style.minHeight), x = parseFloat(d.style.height), b = Math.max(v, x);
                if (b < w) {
                  const y = b + g, C = Math.min(w, y), R = y - C;
                  d.style.height = C + "px", d.style.bottom === "0px" && (f.scrollTop = R > 0 ? R : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ss.displayName = qn;
var Ps = "SelectGroup", [Zf, Jf] = vt(Ps), Ts = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = we();
    return /* @__PURE__ */ h.jsx(Zf, { scope: n, id: o, children: /* @__PURE__ */ h.jsx(F.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Ts.displayName = Ps;
var _s = "SelectLabel", As = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Jf(_s, n);
    return /* @__PURE__ */ h.jsx(F.div, { id: o.id, ...r, ref: t });
  }
);
As.displayName = _s;
var qt = "SelectItem", [Qf, Ms] = vt(qt), Os = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: i,
      ...s
    } = e, a = Ue(qt, n), l = Ke(qt, n), u = a.value === r, [f, d] = c.useState(i ?? ""), [m, g] = c.useState(!1), w = q(
      t,
      (y) => {
        var C;
        return (C = l.itemRefCallback) == null ? void 0 : C.call(l, y, r, o);
      }
    ), v = we(), x = c.useRef("touch"), b = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ h.jsx(
      Qf,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: c.useCallback((y) => {
          d((C) => C || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ h.jsx(
          wn.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ h.jsx(
              F.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": u && m,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: w,
                onFocus: _(s.onFocus, () => g(!0)),
                onBlur: _(s.onBlur, () => g(!1)),
                onClick: _(s.onClick, () => {
                  x.current !== "mouse" && b();
                }),
                onPointerUp: _(s.onPointerUp, () => {
                  x.current === "mouse" && b();
                }),
                onPointerDown: _(s.onPointerDown, (y) => {
                  x.current = y.pointerType;
                }),
                onPointerMove: _(s.onPointerMove, (y) => {
                  var C;
                  x.current = y.pointerType, o ? (C = l.onItemLeave) == null || C.call(l) : x.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: _(s.onPointerLeave, (y) => {
                  var C;
                  y.currentTarget === document.activeElement && ((C = l.onItemLeave) == null || C.call(l));
                }),
                onKeyDown: _(s.onKeyDown, (y) => {
                  var R;
                  ((R = l.searchRef) == null ? void 0 : R.current) !== "" && y.key === " " || (Wf.includes(y.key) && b(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Os.displayName = qt;
var yt = "SelectItemText", Is = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e, s = Ue(yt, n), a = Ke(yt, n), l = Ms(yt, n), u = Uf(yt, n), [f, d] = c.useState(null), m = q(
      t,
      (b) => d(b),
      l.onItemTextChange,
      (b) => {
        var y;
        return (y = a.itemTextRefCallback) == null ? void 0 : y.call(a, b, l.value, l.disabled);
      }
    ), g = f == null ? void 0 : f.textContent, w = c.useMemo(
      () => /* @__PURE__ */ h.jsx("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: x } = u;
    return le(() => (v(w), () => x(w)), [v, x, w]), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(F.span, { id: l.textId, ...i, ref: m }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Zt.createPortal(i.children, s.valueNode) : null
    ] });
  }
);
Is.displayName = yt;
var Ds = "SelectItemIndicator", Ns = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Ms(Ds, n).isSelected ? /* @__PURE__ */ h.jsx(F.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Ns.displayName = Ds;
var Zn = "SelectScrollUpButton", js = c.forwardRef((e, t) => {
  const n = Ke(Zn, e.__scopeSelect), r = Pr(Zn, e.__scopeSelect), [o, i] = c.useState(!1), s = q(t, r.onScrollButtonChange);
  return le(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        i(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ h.jsx(
    Ls,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
js.displayName = Zn;
var Jn = "SelectScrollDownButton", ks = c.forwardRef((e, t) => {
  const n = Ke(Jn, e.__scopeSelect), r = Pr(Jn, e.__scopeSelect), [o, i] = c.useState(!1), s = q(t, r.onScrollButtonChange);
  return le(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < u;
        i(f);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ h.jsx(
    Ls,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
ks.displayName = Jn;
var Ls = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, i = Ke("SelectScrollButton", n), s = c.useRef(null), a = yn(n), l = c.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), le(() => {
    var f;
    const u = a().find((d) => d.ref.current === document.activeElement);
    (f = u == null ? void 0 : u.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ h.jsx(
    F.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: _(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: _(o.onPointerMove, () => {
        var u;
        (u = i.onItemLeave) == null || u.call(i), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: _(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), ed = "SelectSeparator", Fs = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(F.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Fs.displayName = ed;
var Qn = "SelectArrow", td = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = xn(n), i = Ue(Qn, n), s = Ke(Qn, n);
    return i.open && s.position === "popper" ? /* @__PURE__ */ h.jsx(an, { ...o, ...r, ref: t }) : null;
  }
);
td.displayName = Qn;
function $s(e) {
  return e === "" || e === void 0;
}
var Ws = c.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = c.useRef(null), i = q(t, o), s = bf(n);
    return c.useEffect(() => {
      const a = o.current, l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (s !== n && f) {
        const d = new Event("change", { bubbles: !0 });
        f.call(a, n), a.dispatchEvent(d);
      }
    }, [s, n]), /* @__PURE__ */ h.jsx(Rr, { asChild: !0, children: /* @__PURE__ */ h.jsx("select", { ...r, ref: i, defaultValue: n }) });
  }
);
Ws.displayName = "BubbleSelect";
function Bs(e) {
  const t = xe(e), n = c.useRef(""), r = c.useRef(0), o = c.useCallback(
    (s) => {
      const a = n.current + s;
      t(a), function l(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(a);
    },
    [t]
  ), i = c.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Vs(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = nd(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function nd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Xd = vs, qd = hs, Zd = ws, Jd = ys, Qd = xs, ep = bs, tp = Ss, np = Ts, rp = As, op = Os, ip = Is, sp = Ns, ap = js, cp = ks, lp = Fs, Tr = "Popover", [Hs, up] = Je(Tr, [
  He
]), It = He(), [rd, Ge] = Hs(Tr), Us = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = It(t), l = c.useRef(null), [u, f] = c.useState(!1), [d = !1, m] = Fe({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ h.jsx(on, { ...a, children: /* @__PURE__ */ h.jsx(
    rd,
    {
      scope: t,
      contentId: we(),
      triggerRef: l,
      open: d,
      onOpenChange: m,
      onOpenToggle: c.useCallback(() => m((g) => !g), [m]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: c.useCallback(() => f(!0), []),
      onCustomAnchorRemove: c.useCallback(() => f(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Us.displayName = Tr;
var Ks = "PopoverAnchor", od = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ge(Ks, n), i = It(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return c.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ h.jsx(Pt, { ...i, ...r, ref: t });
  }
);
od.displayName = Ks;
var Gs = "PopoverTrigger", Ys = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ge(Gs, n), i = It(n), s = q(t, o.triggerRef), a = /* @__PURE__ */ h.jsx(
      F.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Js(o.open),
        ...r,
        ref: s,
        onClick: _(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ h.jsx(Pt, { asChild: !0, ...i, children: a });
  }
);
Ys.displayName = Gs;
var _r = "PopoverPortal", [id, sd] = Hs(_r, {
  forceMount: void 0
}), zs = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = Ge(_r, t);
  return /* @__PURE__ */ h.jsx(id, { scope: t, forceMount: n, children: /* @__PURE__ */ h.jsx(be, { present: n || i.open, children: /* @__PURE__ */ h.jsx(Tt, { asChild: !0, container: o, children: r }) }) });
};
zs.displayName = _r;
var ut = "PopoverContent", Xs = c.forwardRef(
  (e, t) => {
    const n = sd(ut, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = Ge(ut, e.__scopePopover);
    return /* @__PURE__ */ h.jsx(be, { present: r || i.open, children: i.modal ? /* @__PURE__ */ h.jsx(ad, { ...o, ref: t }) : /* @__PURE__ */ h.jsx(cd, { ...o, ref: t }) });
  }
);
Xs.displayName = ut;
var ad = c.forwardRef(
  (e, t) => {
    const n = Ge(ut, e.__scopePopover), r = c.useRef(null), o = q(t, r), i = c.useRef(!1);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return un(s);
    }, []), /* @__PURE__ */ h.jsx(_t, { as: Le, allowPinchZoom: !0, children: /* @__PURE__ */ h.jsx(
      qs,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: _(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: _(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, u = a.button === 2 || l;
            i.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: _(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), cd = c.forwardRef(
  (e, t) => {
    const n = Ge(ut, e.__scopePopover), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ h.jsx(
      qs,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), qs = c.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: f,
      ...d
    } = e, m = Ge(ut, n), g = It(n);
    return en(), /* @__PURE__ */ h.jsx(
      Rt,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ h.jsx(
          ft,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ h.jsx(
              sn,
              {
                "data-state": Js(m.open),
                role: "dialog",
                id: m.contentId,
                ...g,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Zs = "PopoverClose", ld = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ge(Zs, n);
    return /* @__PURE__ */ h.jsx(
      F.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: _(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ld.displayName = Zs;
var ud = "PopoverArrow", fd = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = It(n);
    return /* @__PURE__ */ h.jsx(an, { ...o, ...r, ref: t });
  }
);
fd.displayName = ud;
function Js(e) {
  return e ? "open" : "closed";
}
var fp = Us, dp = Ys, pp = zs, vp = Xs;
export {
  sp as $,
  be as A,
  bf as B,
  wd as C,
  Zc as D,
  Yd as E,
  Ud as F,
  Kd as G,
  Gd as H,
  xd as I,
  Xd as J,
  np as K,
  yd as L,
  qd as M,
  Jd as N,
  ap as O,
  gd as P,
  cp as Q,
  Hl as R,
  Le as S,
  hd as T,
  Qd as U,
  Zd as V,
  ep as W,
  tp as X,
  rp as Y,
  op as Z,
  Uo as _,
  Ae as a,
  ip as a0,
  lp as a1,
  pp as a2,
  vp as a3,
  fp as a4,
  dp as a5,
  Bd as a6,
  kd as a7,
  Ld as a8,
  Wd as a9,
  Fd as aa,
  $d as ab,
  Nd as ac,
  jd as ad,
  bl as b,
  Al as c,
  Sd as d,
  Ml as e,
  Vt as f,
  Pd as g,
  un as h,
  bd as i,
  h as j,
  Ed as k,
  Cd as l,
  Rd as m,
  md as n,
  Ad as o,
  Md as p,
  Od as q,
  _d as r,
  Yo as s,
  Je as t,
  Pl as u,
  q as v,
  Fe as w,
  F as x,
  _ as y,
  Bt as z
};
