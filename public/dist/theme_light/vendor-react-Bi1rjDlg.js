function Hw(c, v) {
  for (var m = 0; m < v.length; m++) {
    const C = v[m];
    if (typeof C != "string" && !Array.isArray(C)) {
      for (const w in C)
        if (w !== "default" && !(w in c)) {
          const x = Object.getOwnPropertyDescriptor(C, w);
          x && Object.defineProperty(c, w, x.get ? x : {
            enumerable: !0,
            get: () => C[w]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
function Zk(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var jw = { exports: {} }, dr = jw.exports = {}, so, co;
function pE() {
  throw new Error("setTimeout has not been defined");
}
function vE() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? so = setTimeout : so = pE;
  } catch {
    so = pE;
  }
  try {
    typeof clearTimeout == "function" ? co = clearTimeout : co = vE;
  } catch {
    co = vE;
  }
})();
function Vw(c) {
  if (so === setTimeout)
    return setTimeout(c, 0);
  if ((so === pE || !so) && setTimeout)
    return so = setTimeout, setTimeout(c, 0);
  try {
    return so(c, 0);
  } catch {
    try {
      return so.call(null, c, 0);
    } catch {
      return so.call(this, c, 0);
    }
  }
}
function eO(c) {
  if (co === clearTimeout)
    return clearTimeout(c);
  if ((co === vE || !co) && clearTimeout)
    return co = clearTimeout, clearTimeout(c);
  try {
    return co(c);
  } catch {
    try {
      return co.call(null, c);
    } catch {
      return co.call(this, c);
    }
  }
}
var eu = [], Sd = !1, wc, Ty = -1;
function tO() {
  !Sd || !wc || (Sd = !1, wc.length ? eu = wc.concat(eu) : Ty = -1, eu.length && Bw());
}
function Bw() {
  if (!Sd) {
    var c = Vw(tO);
    Sd = !0;
    for (var v = eu.length; v; ) {
      for (wc = eu, eu = []; ++Ty < v; )
        wc && wc[Ty].run();
      Ty = -1, v = eu.length;
    }
    wc = null, Sd = !1, eO(c);
  }
}
dr.nextTick = function(c) {
  var v = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var m = 1; m < arguments.length; m++)
      v[m - 1] = arguments[m];
  eu.push(new Iw(c, v)), eu.length === 1 && !Sd && Vw(Bw);
};
function Iw(c, v) {
  this.fun = c, this.array = v;
}
Iw.prototype.run = function() {
  this.fun.apply(null, this.array);
};
dr.title = "browser";
dr.browser = !0;
dr.env = {};
dr.argv = [];
dr.version = "";
dr.versions = {};
function nu() {
}
dr.on = nu;
dr.addListener = nu;
dr.once = nu;
dr.off = nu;
dr.removeListener = nu;
dr.removeAllListeners = nu;
dr.emit = nu;
dr.prependListener = nu;
dr.prependOnceListener = nu;
dr.listeners = function(c) {
  return [];
};
dr.binding = function(c) {
  throw new Error("process.binding is not supported");
};
dr.cwd = function() {
  return "/";
};
dr.chdir = function(c) {
  throw new Error("process.chdir is not supported");
};
dr.umask = function() {
  return 0;
};
var nO = jw.exports;
const ft = /* @__PURE__ */ Zk(nO);
var sN = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $w(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
function cN(c) {
  if (c.__esModule) return c;
  var v = c.default;
  if (typeof v == "function") {
    var m = function C() {
      return this instanceof C ? Reflect.construct(v, arguments, this.constructor) : v.apply(this, arguments);
    };
    m.prototype = v.prototype;
  } else m = {};
  return Object.defineProperty(m, "__esModule", { value: !0 }), Object.keys(c).forEach(function(C) {
    var w = Object.getOwnPropertyDescriptor(c, C);
    Object.defineProperty(m, C, w.get ? w : {
      enumerable: !0,
      get: function() {
        return c[C];
      }
    });
  }), m;
}
var hE = { exports: {} }, Bt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dw;
function rO() {
  if (dw) return Bt;
  dw = 1;
  var c = Symbol.for("react.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), y = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), O = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), M = Symbol.iterator;
  function I(F) {
    return F === null || typeof F != "object" ? null : (F = M && F[M] || F["@@iterator"], typeof F == "function" ? F : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, ue = {};
  function pe(F, te, nt) {
    this.props = F, this.context = te, this.refs = ue, this.updater = nt || K;
  }
  pe.prototype.isReactComponent = {}, pe.prototype.setState = function(F, te) {
    if (typeof F != "object" && typeof F != "function" && F != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, F, te, "setState");
  }, pe.prototype.forceUpdate = function(F) {
    this.updater.enqueueForceUpdate(this, F, "forceUpdate");
  };
  function Ae() {
  }
  Ae.prototype = pe.prototype;
  function he(F, te, nt) {
    this.props = F, this.context = te, this.refs = ue, this.updater = nt || K;
  }
  var ye = he.prototype = new Ae();
  ye.constructor = he, ae(ye, pe.prototype), ye.isPureReactComponent = !0;
  var be = Array.isArray, De = Object.prototype.hasOwnProperty, $ = { current: null }, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(F, te, nt) {
    var qe, gt = {}, St = null, Ut = null;
    if (te != null) for (qe in te.ref !== void 0 && (Ut = te.ref), te.key !== void 0 && (St = "" + te.key), te) De.call(te, qe) && !Fe.hasOwnProperty(qe) && (gt[qe] = te[qe]);
    var zt = arguments.length - 2;
    if (zt === 1) gt.children = nt;
    else if (1 < zt) {
      for (var Nt = Array(zt), Nn = 0; Nn < zt; Nn++) Nt[Nn] = arguments[Nn + 2];
      gt.children = Nt;
    }
    if (F && F.defaultProps) for (qe in zt = F.defaultProps, zt) gt[qe] === void 0 && (gt[qe] = zt[qe]);
    return { $$typeof: c, type: F, key: St, ref: Ut, props: gt, _owner: $.current };
  }
  function Ze(F, te) {
    return { $$typeof: c, type: F.type, key: te, ref: F.ref, props: F.props, _owner: F._owner };
  }
  function et(F) {
    return typeof F == "object" && F !== null && F.$$typeof === c;
  }
  function pt(F) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + F.replace(/[=:]/g, function(nt) {
      return te[nt];
    });
  }
  var Mt = /\/+/g;
  function tt(F, te) {
    return typeof F == "object" && F !== null && F.key != null ? pt("" + F.key) : te.toString(36);
  }
  function it(F, te, nt, qe, gt) {
    var St = typeof F;
    (St === "undefined" || St === "boolean") && (F = null);
    var Ut = !1;
    if (F === null) Ut = !0;
    else switch (St) {
      case "string":
      case "number":
        Ut = !0;
        break;
      case "object":
        switch (F.$$typeof) {
          case c:
          case v:
            Ut = !0;
        }
    }
    if (Ut) return Ut = F, gt = gt(Ut), F = qe === "" ? "." + tt(Ut, 0) : qe, be(gt) ? (nt = "", F != null && (nt = F.replace(Mt, "$&/") + "/"), it(gt, te, nt, "", function(Nn) {
      return Nn;
    })) : gt != null && (et(gt) && (gt = Ze(gt, nt + (!gt.key || Ut && Ut.key === gt.key ? "" : ("" + gt.key).replace(Mt, "$&/") + "/") + F)), te.push(gt)), 1;
    if (Ut = 0, qe = qe === "" ? "." : qe + ":", be(F)) for (var zt = 0; zt < F.length; zt++) {
      St = F[zt];
      var Nt = qe + tt(St, zt);
      Ut += it(St, te, nt, Nt, gt);
    }
    else if (Nt = I(F), typeof Nt == "function") for (F = Nt.call(F), zt = 0; !(St = F.next()).done; ) St = St.value, Nt = qe + tt(St, zt++), Ut += it(St, te, nt, Nt, gt);
    else if (St === "object") throw te = String(F), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(F).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return Ut;
  }
  function qt(F, te, nt) {
    if (F == null) return F;
    var qe = [], gt = 0;
    return it(F, qe, "", "", function(St) {
      return te.call(nt, St, gt++);
    }), qe;
  }
  function Pt(F) {
    if (F._status === -1) {
      var te = F._result;
      te = te(), te.then(function(nt) {
        (F._status === 0 || F._status === -1) && (F._status = 1, F._result = nt);
      }, function(nt) {
        (F._status === 0 || F._status === -1) && (F._status = 2, F._result = nt);
      }), F._status === -1 && (F._status = 0, F._result = te);
    }
    if (F._status === 1) return F._result.default;
    throw F._result;
  }
  var Se = { current: null }, ve = { transition: null }, Qe = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: ve, ReactCurrentOwner: $ };
  function ge() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Bt.Children = { map: qt, forEach: function(F, te, nt) {
    qt(F, function() {
      te.apply(this, arguments);
    }, nt);
  }, count: function(F) {
    var te = 0;
    return qt(F, function() {
      te++;
    }), te;
  }, toArray: function(F) {
    return qt(F, function(te) {
      return te;
    }) || [];
  }, only: function(F) {
    if (!et(F)) throw Error("React.Children.only expected to receive a single React element child.");
    return F;
  } }, Bt.Component = pe, Bt.Fragment = m, Bt.Profiler = w, Bt.PureComponent = he, Bt.StrictMode = C, Bt.Suspense = _, Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qe, Bt.act = ge, Bt.cloneElement = function(F, te, nt) {
    if (F == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + F + ".");
    var qe = ae({}, F.props), gt = F.key, St = F.ref, Ut = F._owner;
    if (te != null) {
      if (te.ref !== void 0 && (St = te.ref, Ut = $.current), te.key !== void 0 && (gt = "" + te.key), F.type && F.type.defaultProps) var zt = F.type.defaultProps;
      for (Nt in te) De.call(te, Nt) && !Fe.hasOwnProperty(Nt) && (qe[Nt] = te[Nt] === void 0 && zt !== void 0 ? zt[Nt] : te[Nt]);
    }
    var Nt = arguments.length - 2;
    if (Nt === 1) qe.children = nt;
    else if (1 < Nt) {
      zt = Array(Nt);
      for (var Nn = 0; Nn < Nt; Nn++) zt[Nn] = arguments[Nn + 2];
      qe.children = zt;
    }
    return { $$typeof: c, type: F.type, key: gt, ref: St, props: qe, _owner: Ut };
  }, Bt.createContext = function(F) {
    return F = { $$typeof: y, _currentValue: F, _currentValue2: F, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, F.Provider = { $$typeof: x, _context: F }, F.Consumer = F;
  }, Bt.createElement = je, Bt.createFactory = function(F) {
    var te = je.bind(null, F);
    return te.type = F, te;
  }, Bt.createRef = function() {
    return { current: null };
  }, Bt.forwardRef = function(F) {
    return { $$typeof: A, render: F };
  }, Bt.isValidElement = et, Bt.lazy = function(F) {
    return { $$typeof: B, _payload: { _status: -1, _result: F }, _init: Pt };
  }, Bt.memo = function(F, te) {
    return { $$typeof: O, type: F, compare: te === void 0 ? null : te };
  }, Bt.startTransition = function(F) {
    var te = ve.transition;
    ve.transition = {};
    try {
      F();
    } finally {
      ve.transition = te;
    }
  }, Bt.unstable_act = ge, Bt.useCallback = function(F, te) {
    return Se.current.useCallback(F, te);
  }, Bt.useContext = function(F) {
    return Se.current.useContext(F);
  }, Bt.useDebugValue = function() {
  }, Bt.useDeferredValue = function(F) {
    return Se.current.useDeferredValue(F);
  }, Bt.useEffect = function(F, te) {
    return Se.current.useEffect(F, te);
  }, Bt.useId = function() {
    return Se.current.useId();
  }, Bt.useImperativeHandle = function(F, te, nt) {
    return Se.current.useImperativeHandle(F, te, nt);
  }, Bt.useInsertionEffect = function(F, te) {
    return Se.current.useInsertionEffect(F, te);
  }, Bt.useLayoutEffect = function(F, te) {
    return Se.current.useLayoutEffect(F, te);
  }, Bt.useMemo = function(F, te) {
    return Se.current.useMemo(F, te);
  }, Bt.useReducer = function(F, te, nt) {
    return Se.current.useReducer(F, te, nt);
  }, Bt.useRef = function(F) {
    return Se.current.useRef(F);
  }, Bt.useState = function(F) {
    return Se.current.useState(F);
  }, Bt.useSyncExternalStore = function(F, te, nt) {
    return Se.current.useSyncExternalStore(F, te, nt);
  }, Bt.useTransition = function() {
    return Se.current.useTransition();
  }, Bt.version = "18.3.1", Bt;
}
var Dv = { exports: {} };
Dv.exports;
var pw;
function aO() {
  return pw || (pw = 1, function(c, v) {
    ft.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.3.1", C = Symbol.for("react.element"), w = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), O = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), pe = Symbol.iterator, Ae = "@@iterator";
      function he(S) {
        if (S === null || typeof S != "object")
          return null;
        var D = pe && S[pe] || S[Ae];
        return typeof D == "function" ? D : null;
      }
      var ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, be = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, $ = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Fe = {}, je = null;
      function Ze(S) {
        je = S;
      }
      Fe.setExtraStackFrame = function(S) {
        je = S;
      }, Fe.getCurrentStack = null, Fe.getStackAddendum = function() {
        var S = "";
        je && (S += je);
        var D = Fe.getCurrentStack;
        return D && (S += D() || ""), S;
      };
      var et = !1, pt = !1, Mt = !1, tt = !1, it = !1, qt = {
        ReactCurrentDispatcher: ye,
        ReactCurrentBatchConfig: be,
        ReactCurrentOwner: $
      };
      qt.ReactDebugCurrentFrame = Fe, qt.ReactCurrentActQueue = De;
      function Pt(S) {
        {
          for (var D = arguments.length, G = new Array(D > 1 ? D - 1 : 0), J = 1; J < D; J++)
            G[J - 1] = arguments[J];
          ve("warn", S, G);
        }
      }
      function Se(S) {
        {
          for (var D = arguments.length, G = new Array(D > 1 ? D - 1 : 0), J = 1; J < D; J++)
            G[J - 1] = arguments[J];
          ve("error", S, G);
        }
      }
      function ve(S, D, G) {
        {
          var J = qt.ReactDebugCurrentFrame, de = J.getStackAddendum();
          de !== "" && (D += "%s", G = G.concat([de]));
          var ut = G.map(function(xe) {
            return String(xe);
          });
          ut.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, ut);
        }
      }
      var Qe = {};
      function ge(S, D) {
        {
          var G = S.constructor, J = G && (G.displayName || G.name) || "ReactClass", de = J + "." + D;
          if (Qe[de])
            return;
          Se("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, J), Qe[de] = !0;
        }
      }
      var F = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(S, D, G) {
          ge(S, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(S, D, G, J) {
          ge(S, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(S, D, G, J) {
          ge(S, "setState");
        }
      }, te = Object.assign, nt = {};
      Object.freeze(nt);
      function qe(S, D, G) {
        this.props = S, this.context = D, this.refs = nt, this.updater = G || F;
      }
      qe.prototype.isReactComponent = {}, qe.prototype.setState = function(S, D) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, D, "setState");
      }, qe.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var gt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, St = function(S, D) {
          Object.defineProperty(qe.prototype, S, {
            get: function() {
              Pt("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var Ut in gt)
          gt.hasOwnProperty(Ut) && St(Ut, gt[Ut]);
      }
      function zt() {
      }
      zt.prototype = qe.prototype;
      function Nt(S, D, G) {
        this.props = S, this.context = D, this.refs = nt, this.updater = G || F;
      }
      var Nn = Nt.prototype = new zt();
      Nn.constructor = Nt, te(Nn, qe.prototype), Nn.isPureReactComponent = !0;
      function en() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var pr = Array.isArray;
      function Dn(S) {
        return pr(S);
      }
      function vr(S) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, G = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return G;
        }
      }
      function Pn(S) {
        try {
          return Pr(S), !1;
        } catch {
          return !0;
        }
      }
      function Pr(S) {
        return "" + S;
      }
      function Jn(S) {
        if (Pn(S))
          return Se("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(S)), Pr(S);
      }
      function ua(S, D, G) {
        var J = S.displayName;
        if (J)
          return J;
        var de = D.displayName || D.name || "";
        return de !== "" ? G + "(" + de + ")" : G;
      }
      function di(S) {
        return S.displayName || "Context";
      }
      function hr(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Se("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case x:
            return "Fragment";
          case w:
            return "Portal";
          case A:
            return "Profiler";
          case y:
            return "StrictMode";
          case M:
            return "Suspense";
          case I:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case O:
              var D = S;
              return di(D) + ".Consumer";
            case _:
              var G = S;
              return di(G._context) + ".Provider";
            case B:
              return ua(S, S.render, "ForwardRef");
            case K:
              var J = S.displayName || null;
              return J !== null ? J : hr(S.type) || "Memo";
            case ae: {
              var de = S, ut = de._payload, xe = de._init;
              try {
                return hr(xe(ut));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Hr = Object.prototype.hasOwnProperty, ja = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Hn, Tr, br;
      br = {};
      function Qr(S) {
        if (Hr.call(S, "ref")) {
          var D = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function yn(S) {
        if (Hr.call(S, "key")) {
          var D = Object.getOwnPropertyDescriptor(S, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Mn(S, D) {
        var G = function() {
          Hn || (Hn = !0, Se("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: G,
          configurable: !0
        });
      }
      function xi(S, D) {
        var G = function() {
          Tr || (Tr = !0, Se("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        G.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: G,
          configurable: !0
        });
      }
      function Wr(S) {
        if (typeof S.ref == "string" && $.current && S.__self && $.current.stateNode !== S.__self) {
          var D = hr($.current.type);
          br[D] || (Se('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, S.ref), br[D] = !0);
        }
      }
      var Ee = function(S, D, G, J, de, ut, xe) {
        var ot = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: C,
          // Built-in properties that belong on the element
          type: S,
          key: D,
          ref: G,
          props: xe,
          // Record the component responsible for creating this element.
          _owner: ut
        };
        return ot._store = {}, Object.defineProperty(ot._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ot, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: J
        }), Object.defineProperty(ot, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: de
        }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
      };
      function Ve(S, D, G) {
        var J, de = {}, ut = null, xe = null, ot = null, Ot = null;
        if (D != null) {
          Qr(D) && (xe = D.ref, Wr(D)), yn(D) && (Jn(D.key), ut = "" + D.key), ot = D.__self === void 0 ? null : D.__self, Ot = D.__source === void 0 ? null : D.__source;
          for (J in D)
            Hr.call(D, J) && !ja.hasOwnProperty(J) && (de[J] = D[J]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          de.children = G;
        else if (Yt > 1) {
          for (var vn = Array(Yt), ln = 0; ln < Yt; ln++)
            vn[ln] = arguments[ln + 2];
          Object.freeze && Object.freeze(vn), de.children = vn;
        }
        if (S && S.defaultProps) {
          var hn = S.defaultProps;
          for (J in hn)
            de[J] === void 0 && (de[J] = hn[J]);
        }
        if (ut || xe) {
          var En = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          ut && Mn(de, En), xe && xi(de, En);
        }
        return Ee(S, ut, xe, ot, Ot, $.current, de);
      }
      function Dt(S, D) {
        var G = Ee(S.type, D, S.ref, S._self, S._source, S._owner, S.props);
        return G;
      }
      function Qt(S, D, G) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var J, de = te({}, S.props), ut = S.key, xe = S.ref, ot = S._self, Ot = S._source, Yt = S._owner;
        if (D != null) {
          Qr(D) && (xe = D.ref, Yt = $.current), yn(D) && (Jn(D.key), ut = "" + D.key);
          var vn;
          S.type && S.type.defaultProps && (vn = S.type.defaultProps);
          for (J in D)
            Hr.call(D, J) && !ja.hasOwnProperty(J) && (D[J] === void 0 && vn !== void 0 ? de[J] = vn[J] : de[J] = D[J]);
        }
        var ln = arguments.length - 2;
        if (ln === 1)
          de.children = G;
        else if (ln > 1) {
          for (var hn = Array(ln), En = 0; En < ln; En++)
            hn[En] = arguments[En + 2];
          de.children = hn;
        }
        return Ee(S.type, ut, xe, ot, Ot, Yt, de);
      }
      function Jt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === C;
      }
      var Wn = ".", _n = ":";
      function ar(S) {
        var D = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, J = S.replace(D, function(de) {
          return G[de];
        });
        return "$" + J;
      }
      var on = !1, jr = /\/+/g;
      function dn(S) {
        return S.replace(jr, "$&/");
      }
      function un(S, D) {
        return typeof S == "object" && S !== null && S.key != null ? (Jn(S.key), ar("" + S.key)) : D.toString(36);
      }
      function Di(S, D, G, J, de) {
        var ut = typeof S;
        (ut === "undefined" || ut === "boolean") && (S = null);
        var xe = !1;
        if (S === null)
          xe = !0;
        else
          switch (ut) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case C:
                case w:
                  xe = !0;
              }
          }
        if (xe) {
          var ot = S, Ot = de(ot), Yt = J === "" ? Wn + un(ot, 0) : J;
          if (Dn(Ot)) {
            var vn = "";
            Yt != null && (vn = dn(Yt) + "/"), Di(Ot, D, vn, "", function(Td) {
              return Td;
            });
          } else Ot != null && (Jt(Ot) && (Ot.key && (!ot || ot.key !== Ot.key) && Jn(Ot.key), Ot = Dt(
            Ot,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ot.key && (!ot || ot.key !== Ot.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              dn("" + Ot.key) + "/"
            ) : "") + Yt
          )), D.push(Ot));
          return 1;
        }
        var ln, hn, En = 0, Vt = J === "" ? Wn : J + _n;
        if (Dn(S))
          for (var Ji = 0; Ji < S.length; Ji++)
            ln = S[Ji], hn = Vt + un(ln, Ji), En += Di(ln, D, G, hn, de);
        else {
          var du = he(S);
          if (typeof du == "function") {
            var Ss = S;
            du === Ss.entries && (on || Pt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), on = !0);
            for (var wd = du.call(Ss), mi, Es = 0; !(mi = wd.next()).done; )
              ln = mi.value, hn = Vt + un(ln, Es++), En += Di(ln, D, G, hn, de);
          } else if (ut === "object") {
            var Cs = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (Cs === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : Cs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return En;
      }
      function pi(S, D, G) {
        if (S == null)
          return S;
        var J = [], de = 0;
        return Di(S, J, "", "", function(ut) {
          return D.call(G, ut, de++);
        }), J;
      }
      function Yi(S) {
        var D = 0;
        return pi(S, function() {
          D++;
        }), D;
      }
      function Qi(S, D, G) {
        pi(S, function() {
          D.apply(this, arguments);
        }, G);
      }
      function Wi(S) {
        return pi(S, function(D) {
          return D;
        }) || [];
      }
      function Dl(S) {
        if (!Jt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function po(S) {
        var D = {
          $$typeof: O,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        D.Provider = {
          $$typeof: _,
          _context: D
        };
        var G = !1, J = !1, de = !1;
        {
          var ut = {
            $$typeof: O,
            _context: D
          };
          Object.defineProperties(ut, {
            Provider: {
              get: function() {
                return J || (J = !0, Se("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(xe) {
                D.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(xe) {
                D._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(xe) {
                D._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(xe) {
                D._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, Se("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(xe) {
                de || (Pt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), de = !0);
              }
            }
          }), D.Consumer = ut;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var k = -1, P = 0, Q = 1, ie = 2;
      function Ce(S) {
        if (S._status === k) {
          var D = S._result, G = D();
          if (G.then(function(ut) {
            if (S._status === P || S._status === k) {
              var xe = S;
              xe._status = Q, xe._result = ut;
            }
          }, function(ut) {
            if (S._status === P || S._status === k) {
              var xe = S;
              xe._status = ie, xe._result = ut;
            }
          }), S._status === k) {
            var J = S;
            J._status = P, J._result = G;
          }
        }
        if (S._status === Q) {
          var de = S._result;
          return de === void 0 && Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, de), "default" in de || Se(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, de), de.default;
        } else
          throw S._result;
      }
      function Pe(S) {
        var D = {
          // We use these fields to store the result.
          _status: k,
          _result: S
        }, G = {
          $$typeof: ae,
          _payload: D,
          _init: Ce
        };
        {
          var J, de;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return J;
              },
              set: function(ut) {
                Se("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), J = ut, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return de;
              },
              set: function(ut) {
                Se("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), de = ut, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function lt(S) {
        S != null && S.$$typeof === K ? Se("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Se("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Se("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Se("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: B,
          render: S
        };
        {
          var G;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(J) {
              G = J, !S.name && !S.displayName && (S.displayName = J);
            }
          });
        }
        return D;
      }
      var ke;
      ke = Symbol.for("react.module.reference");
      function Ue(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === x || S === A || it || S === y || S === M || S === I || tt || S === ue || et || pt || Mt || typeof S == "object" && S !== null && (S.$$typeof === ae || S.$$typeof === K || S.$$typeof === _ || S.$$typeof === O || S.$$typeof === B || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === ke || S.getModuleId !== void 0));
      }
      function Le(S, D) {
        Ue(S) || Se("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var G = {
          $$typeof: K,
          type: S,
          compare: D === void 0 ? null : D
        };
        {
          var J;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return J;
            },
            set: function(de) {
              J = de, !S.name && !S.displayName && (S.displayName = de);
            }
          });
        }
        return G;
      }
      function Re() {
        var S = ye.current;
        return S === null && Se(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function vt(S) {
        var D = Re();
        if (S._context !== void 0) {
          var G = S._context;
          G.Consumer === S ? Se("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === S && Se("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(S);
      }
      function _t(S) {
        var D = Re();
        return D.useState(S);
      }
      function gn(S, D, G) {
        var J = Re();
        return J.useReducer(S, D, G);
      }
      function wt(S) {
        var D = Re();
        return D.useRef(S);
      }
      function Ht(S, D) {
        var G = Re();
        return G.useEffect(S, D);
      }
      function pn(S, D) {
        var G = Re();
        return G.useInsertionEffect(S, D);
      }
      function Va(S, D) {
        var G = Re();
        return G.useLayoutEffect(S, D);
      }
      function _i(S, D) {
        var G = Re();
        return G.useCallback(S, D);
      }
      function _a(S, D) {
        var G = Re();
        return G.useMemo(S, D);
      }
      function sa(S, D, G) {
        var J = Re();
        return J.useImperativeHandle(S, D, G);
      }
      function sn(S, D) {
        {
          var G = Re();
          return G.useDebugValue(S, D);
        }
      }
      function Gi() {
        var S = Re();
        return S.useTransition();
      }
      function ir(S) {
        var D = Re();
        return D.useDeferredValue(S);
      }
      function Tt() {
        var S = Re();
        return S.useId();
      }
      function Gr(S, D, G) {
        var J = Re();
        return J.useSyncExternalStore(S, D, G);
      }
      var kt = 0, an, Kr, Zn, Sn, jn, _l, vo;
      function xc() {
      }
      xc.__reactDisabledLog = !0;
      function ru() {
        {
          if (kt === 0) {
            an = console.log, Kr = console.info, Zn = console.warn, Sn = console.error, jn = console.group, _l = console.groupCollapsed, vo = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: xc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          kt++;
        }
      }
      function kl() {
        {
          if (kt--, kt === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: te({}, S, {
                value: an
              }),
              info: te({}, S, {
                value: Kr
              }),
              warn: te({}, S, {
                value: Zn
              }),
              error: te({}, S, {
                value: Sn
              }),
              group: te({}, S, {
                value: jn
              }),
              groupCollapsed: te({}, S, {
                value: _l
              }),
              groupEnd: te({}, S, {
                value: vo
              })
            });
          }
          kt < 0 && Se("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var vi = qt.ReactCurrentDispatcher, Xr;
      function Ol(S, D, G) {
        {
          if (Xr === void 0)
            try {
              throw Error();
            } catch (de) {
              var J = de.stack.trim().match(/\n( *(at )?)/);
              Xr = J && J[1] || "";
            }
          return `
` + Xr + S;
        }
      }
      var Ll = !1, Nl;
      {
        var au = typeof WeakMap == "function" ? WeakMap : Map;
        Nl = new au();
      }
      function iu(S, D) {
        if (!S || Ll)
          return "";
        {
          var G = Nl.get(S);
          if (G !== void 0)
            return G;
        }
        var J;
        Ll = !0;
        var de = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ut;
        ut = vi.current, vi.current = null, ru();
        try {
          if (D) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (Vt) {
                J = Vt;
              }
              Reflect.construct(S, [], xe);
            } else {
              try {
                xe.call();
              } catch (Vt) {
                J = Vt;
              }
              S.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Vt) {
              J = Vt;
            }
            S();
          }
        } catch (Vt) {
          if (Vt && J && typeof Vt.stack == "string") {
            for (var ot = Vt.stack.split(`
`), Ot = J.stack.split(`
`), Yt = ot.length - 1, vn = Ot.length - 1; Yt >= 1 && vn >= 0 && ot[Yt] !== Ot[vn]; )
              vn--;
            for (; Yt >= 1 && vn >= 0; Yt--, vn--)
              if (ot[Yt] !== Ot[vn]) {
                if (Yt !== 1 || vn !== 1)
                  do
                    if (Yt--, vn--, vn < 0 || ot[Yt] !== Ot[vn]) {
                      var ln = `
` + ot[Yt].replace(" at new ", " at ");
                      return S.displayName && ln.includes("<anonymous>") && (ln = ln.replace("<anonymous>", S.displayName)), typeof S == "function" && Nl.set(S, ln), ln;
                    }
                  while (Yt >= 1 && vn >= 0);
                break;
              }
          }
        } finally {
          Ll = !1, vi.current = ut, kl(), Error.prepareStackTrace = de;
        }
        var hn = S ? S.displayName || S.name : "", En = hn ? Ol(hn) : "";
        return typeof S == "function" && Nl.set(S, En), En;
      }
      function Ki(S, D, G) {
        return iu(S, !1);
      }
      function Rd(S) {
        var D = S.prototype;
        return !!(D && D.isReactComponent);
      }
      function ki(S, D, G) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return iu(S, Rd(S));
        if (typeof S == "string")
          return Ol(S);
        switch (S) {
          case M:
            return Ol("Suspense");
          case I:
            return Ol("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case B:
              return Ki(S.render);
            case K:
              return ki(S.type, D, G);
            case ae: {
              var J = S, de = J._payload, ut = J._init;
              try {
                return ki(ut(de), D, G);
              } catch {
              }
            }
          }
        return "";
      }
      var Wt = {}, lu = qt.ReactDebugCurrentFrame;
      function ho(S) {
        if (S) {
          var D = S._owner, G = ki(S.type, S._source, D ? D.type : null);
          lu.setExtraStackFrame(G);
        } else
          lu.setExtraStackFrame(null);
      }
      function ou(S, D, G, J, de) {
        {
          var ut = Function.call.bind(Hr);
          for (var xe in S)
            if (ut(S, xe)) {
              var ot = void 0;
              try {
                if (typeof S[xe] != "function") {
                  var Ot = Error((J || "React class") + ": " + G + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ot.name = "Invariant Violation", Ot;
                }
                ot = S[xe](D, xe, J, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Yt) {
                ot = Yt;
              }
              ot && !(ot instanceof Error) && (ho(de), Se("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", J || "React class", G, xe, typeof ot), ho(null)), ot instanceof Error && !(ot.message in Wt) && (Wt[ot.message] = !0, ho(de), Se("Failed %s type: %s", G, ot.message), ho(null));
            }
        }
      }
      function jt(S) {
        if (S) {
          var D = S._owner, G = ki(S.type, S._source, D ? D.type : null);
          Ze(G);
        } else
          Ze(null);
      }
      var uu;
      uu = !1;
      function su() {
        if ($.current) {
          var S = hr($.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function Et(S) {
        if (S !== void 0) {
          var D = S.fileName.replace(/^.*[\\\/]/, ""), G = S.lineNumber;
          return `

Check your code at ` + D + ":" + G + ".";
        }
        return "";
      }
      function mo(S) {
        return S != null ? Et(S.__source) : "";
      }
      var Un = {};
      function ca(S) {
        var D = su();
        if (!D) {
          var G = typeof S == "string" ? S : S.displayName || S.name;
          G && (D = `

Check the top-level render call using <` + G + ">.");
        }
        return D;
      }
      function qr(S, D) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var G = ca(D);
          if (!Un[G]) {
            Un[G] = !0;
            var J = "";
            S && S._owner && S._owner !== $.current && (J = " It was passed a child from " + hr(S._owner.type) + "."), jt(S), Se('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, J), jt(null);
          }
        }
      }
      function Ml(S, D) {
        if (typeof S == "object") {
          if (Dn(S))
            for (var G = 0; G < S.length; G++) {
              var J = S[G];
              Jt(J) && qr(J, D);
            }
          else if (Jt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var de = he(S);
            if (typeof de == "function" && de !== S.entries)
              for (var ut = de.call(S), xe; !(xe = ut.next()).done; )
                Jt(xe.value) && qr(xe.value, D);
          }
        }
      }
      function Vn(S) {
        {
          var D = S.type;
          if (D == null || typeof D == "string")
            return;
          var G;
          if (typeof D == "function")
            G = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === B || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === K))
            G = D.propTypes;
          else
            return;
          if (G) {
            var J = hr(D);
            ou(G, S.props, "prop", J, S);
          } else if (D.PropTypes !== void 0 && !uu) {
            uu = !0;
            var de = hr(D);
            Se("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", de || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && Se("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function tn(S) {
        {
          for (var D = Object.keys(S.props), G = 0; G < D.length; G++) {
            var J = D[G];
            if (J !== "children" && J !== "key") {
              jt(S), Se("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", J), jt(null);
              break;
            }
          }
          S.ref !== null && (jt(S), Se("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
        }
      }
      function Dc(S, D, G) {
        var J = Ue(S);
        if (!J) {
          var de = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ut = mo(D);
          ut ? de += ut : de += su();
          var xe;
          S === null ? xe = "null" : Dn(S) ? xe = "array" : S !== void 0 && S.$$typeof === C ? (xe = "<" + (hr(S.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof S, Se("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, de);
        }
        var ot = Ve.apply(this, arguments);
        if (ot == null)
          return ot;
        if (J)
          for (var Ot = 2; Ot < arguments.length; Ot++)
            Ml(arguments[Ot], S);
        return S === x ? tn(ot) : Vn(ot), ot;
      }
      var fa = !1;
      function mr(S) {
        var D = Dc.bind(null, S);
        return D.type = S, fa || (fa = !0, Pt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return Pt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), D;
      }
      function Oi(S, D, G) {
        for (var J = Qt.apply(this, arguments), de = 2; de < arguments.length; de++)
          Ml(arguments[de], J.type);
        return Vn(J), J;
      }
      function _c(S, D) {
        var G = be.transition;
        be.transition = {};
        var J = be.transition;
        be.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (be.transition = G, G === null && J._updatedFibers) {
            var de = J._updatedFibers.size;
            de > 10 && Pt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), J._updatedFibers.clear();
          }
        }
      }
      var Xi = !1, Ul = null;
      function kc(S) {
        if (Ul === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), G = c && c[D];
            Ul = G.call(c, "timers").setImmediate;
          } catch {
            Ul = function(de) {
              Xi === !1 && (Xi = !0, typeof MessageChannel > "u" && Se("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ut = new MessageChannel();
              ut.port1.onmessage = de, ut.port2.postMessage(void 0);
            };
          }
        return Ul(S);
      }
      var Ba = 0, zl = !1;
      function qi(S) {
        {
          var D = Ba;
          Ba++, De.current === null && (De.current = []);
          var G = De.isBatchingLegacy, J;
          try {
            if (De.isBatchingLegacy = !0, J = S(), !G && De.didScheduleLegacyUpdate) {
              var de = De.current;
              de !== null && (De.didScheduleLegacyUpdate = !1, Fl(de));
            }
          } catch (hn) {
            throw Ia(D), hn;
          } finally {
            De.isBatchingLegacy = G;
          }
          if (J !== null && typeof J == "object" && typeof J.then == "function") {
            var ut = J, xe = !1, ot = {
              then: function(hn, En) {
                xe = !0, ut.then(function(Vt) {
                  Ia(D), Ba === 0 ? cu(Vt, hn, En) : hn(Vt);
                }, function(Vt) {
                  Ia(D), En(Vt);
                });
              }
            };
            return !zl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (zl = !0, Se("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ot;
          } else {
            var Ot = J;
            if (Ia(D), Ba === 0) {
              var Yt = De.current;
              Yt !== null && (Fl(Yt), De.current = null);
              var vn = {
                then: function(hn, En) {
                  De.current === null ? (De.current = [], cu(Ot, hn, En)) : hn(Ot);
                }
              };
              return vn;
            } else {
              var ln = {
                then: function(hn, En) {
                  hn(Ot);
                }
              };
              return ln;
            }
          }
        }
      }
      function Ia(S) {
        S !== Ba - 1 && Se("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ba = S;
      }
      function cu(S, D, G) {
        {
          var J = De.current;
          if (J !== null)
            try {
              Fl(J), kc(function() {
                J.length === 0 ? (De.current = null, D(S)) : cu(S, D, G);
              });
            } catch (de) {
              G(de);
            }
          else
            D(S);
        }
      }
      var Al = !1;
      function Fl(S) {
        if (!Al) {
          Al = !0;
          var D = 0;
          try {
            for (; D < S.length; D++) {
              var G = S[D];
              do
                G = G(!0);
              while (G !== null);
            }
            S.length = 0;
          } catch (J) {
            throw S = S.slice(D + 1), J;
          } finally {
            Al = !1;
          }
        }
      }
      var yo = Dc, fu = Oi, gs = mr, hi = {
        map: pi,
        forEach: Qi,
        count: Yi,
        toArray: Wi,
        only: Dl
      };
      v.Children = hi, v.Component = qe, v.Fragment = x, v.Profiler = A, v.PureComponent = Nt, v.StrictMode = y, v.Suspense = M, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qt, v.act = qi, v.cloneElement = fu, v.createContext = po, v.createElement = yo, v.createFactory = gs, v.createRef = en, v.forwardRef = lt, v.isValidElement = Jt, v.lazy = Pe, v.memo = Le, v.startTransition = _c, v.unstable_act = qi, v.useCallback = _i, v.useContext = vt, v.useDebugValue = sn, v.useDeferredValue = ir, v.useEffect = Ht, v.useId = Tt, v.useImperativeHandle = sa, v.useInsertionEffect = pn, v.useLayoutEffect = Va, v.useMemo = _a, v.useReducer = gn, v.useRef = wt, v.useState = _t, v.useSyncExternalStore = Gr, v.useTransition = Gi, v.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Dv, Dv.exports)), Dv.exports;
}
ft.env.NODE_ENV === "production" ? hE.exports = rO() : hE.exports = aO();
var re = hE.exports;
const iO = /* @__PURE__ */ $w(re), lO = /* @__PURE__ */ Hw({
  __proto__: null,
  default: iO
}, [re]);
var mE = { exports: {} }, si = {}, Cy = { exports: {} }, oE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vw;
function oO() {
  return vw || (vw = 1, function(c) {
    function v(ve, Qe) {
      var ge = ve.length;
      ve.push(Qe);
      e: for (; 0 < ge; ) {
        var F = ge - 1 >>> 1, te = ve[F];
        if (0 < w(te, Qe)) ve[F] = Qe, ve[ge] = te, ge = F;
        else break e;
      }
    }
    function m(ve) {
      return ve.length === 0 ? null : ve[0];
    }
    function C(ve) {
      if (ve.length === 0) return null;
      var Qe = ve[0], ge = ve.pop();
      if (ge !== Qe) {
        ve[0] = ge;
        e: for (var F = 0, te = ve.length, nt = te >>> 1; F < nt; ) {
          var qe = 2 * (F + 1) - 1, gt = ve[qe], St = qe + 1, Ut = ve[St];
          if (0 > w(gt, ge)) St < te && 0 > w(Ut, gt) ? (ve[F] = Ut, ve[St] = ge, F = St) : (ve[F] = gt, ve[qe] = ge, F = qe);
          else if (St < te && 0 > w(Ut, ge)) ve[F] = Ut, ve[St] = ge, F = St;
          else break e;
        }
      }
      return Qe;
    }
    function w(ve, Qe) {
      var ge = ve.sortIndex - Qe.sortIndex;
      return ge !== 0 ? ge : ve.id - Qe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      c.unstable_now = function() {
        return x.now();
      };
    } else {
      var y = Date, A = y.now();
      c.unstable_now = function() {
        return y.now() - A;
      };
    }
    var _ = [], O = [], B = 1, M = null, I = 3, K = !1, ae = !1, ue = !1, pe = typeof setTimeout == "function" ? setTimeout : null, Ae = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ye(ve) {
      for (var Qe = m(O); Qe !== null; ) {
        if (Qe.callback === null) C(O);
        else if (Qe.startTime <= ve) C(O), Qe.sortIndex = Qe.expirationTime, v(_, Qe);
        else break;
        Qe = m(O);
      }
    }
    function be(ve) {
      if (ue = !1, ye(ve), !ae) if (m(_) !== null) ae = !0, Pt(De);
      else {
        var Qe = m(O);
        Qe !== null && Se(be, Qe.startTime - ve);
      }
    }
    function De(ve, Qe) {
      ae = !1, ue && (ue = !1, Ae(je), je = -1), K = !0;
      var ge = I;
      try {
        for (ye(Qe), M = m(_); M !== null && (!(M.expirationTime > Qe) || ve && !pt()); ) {
          var F = M.callback;
          if (typeof F == "function") {
            M.callback = null, I = M.priorityLevel;
            var te = F(M.expirationTime <= Qe);
            Qe = c.unstable_now(), typeof te == "function" ? M.callback = te : M === m(_) && C(_), ye(Qe);
          } else C(_);
          M = m(_);
        }
        if (M !== null) var nt = !0;
        else {
          var qe = m(O);
          qe !== null && Se(be, qe.startTime - Qe), nt = !1;
        }
        return nt;
      } finally {
        M = null, I = ge, K = !1;
      }
    }
    var $ = !1, Fe = null, je = -1, Ze = 5, et = -1;
    function pt() {
      return !(c.unstable_now() - et < Ze);
    }
    function Mt() {
      if (Fe !== null) {
        var ve = c.unstable_now();
        et = ve;
        var Qe = !0;
        try {
          Qe = Fe(!0, ve);
        } finally {
          Qe ? tt() : ($ = !1, Fe = null);
        }
      } else $ = !1;
    }
    var tt;
    if (typeof he == "function") tt = function() {
      he(Mt);
    };
    else if (typeof MessageChannel < "u") {
      var it = new MessageChannel(), qt = it.port2;
      it.port1.onmessage = Mt, tt = function() {
        qt.postMessage(null);
      };
    } else tt = function() {
      pe(Mt, 0);
    };
    function Pt(ve) {
      Fe = ve, $ || ($ = !0, tt());
    }
    function Se(ve, Qe) {
      je = pe(function() {
        ve(c.unstable_now());
      }, Qe);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ve) {
      ve.callback = null;
    }, c.unstable_continueExecution = function() {
      ae || K || (ae = !0, Pt(De));
    }, c.unstable_forceFrameRate = function(ve) {
      0 > ve || 125 < ve ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ze = 0 < ve ? Math.floor(1e3 / ve) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, c.unstable_getFirstCallbackNode = function() {
      return m(_);
    }, c.unstable_next = function(ve) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var Qe = 3;
          break;
        default:
          Qe = I;
      }
      var ge = I;
      I = Qe;
      try {
        return ve();
      } finally {
        I = ge;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ve, Qe) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ve = 3;
      }
      var ge = I;
      I = ve;
      try {
        return Qe();
      } finally {
        I = ge;
      }
    }, c.unstable_scheduleCallback = function(ve, Qe, ge) {
      var F = c.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? F + ge : F) : ge = F, ve) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return te = ge + te, ve = { id: B++, callback: Qe, priorityLevel: ve, startTime: ge, expirationTime: te, sortIndex: -1 }, ge > F ? (ve.sortIndex = ge, v(O, ve), m(_) === null && ve === m(O) && (ue ? (Ae(je), je = -1) : ue = !0, Se(be, ge - F))) : (ve.sortIndex = te, v(_, ve), ae || K || (ae = !0, Pt(De))), ve;
    }, c.unstable_shouldYield = pt, c.unstable_wrapCallback = function(ve) {
      var Qe = I;
      return function() {
        var ge = I;
        I = Qe;
        try {
          return ve.apply(this, arguments);
        } finally {
          I = ge;
        }
      };
    };
  }(oE)), oE;
}
var uE = {}, hw;
function uO() {
  return hw || (hw = 1, function(c) {
    ft.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, m = !1, C = 5;
      function w(Ee, Ve) {
        var Dt = Ee.length;
        Ee.push(Ve), A(Ee, Ve, Dt);
      }
      function x(Ee) {
        return Ee.length === 0 ? null : Ee[0];
      }
      function y(Ee) {
        if (Ee.length === 0)
          return null;
        var Ve = Ee[0], Dt = Ee.pop();
        return Dt !== Ve && (Ee[0] = Dt, _(Ee, Dt, 0)), Ve;
      }
      function A(Ee, Ve, Dt) {
        for (var Qt = Dt; Qt > 0; ) {
          var Jt = Qt - 1 >>> 1, Wn = Ee[Jt];
          if (O(Wn, Ve) > 0)
            Ee[Jt] = Ve, Ee[Qt] = Wn, Qt = Jt;
          else
            return;
        }
      }
      function _(Ee, Ve, Dt) {
        for (var Qt = Dt, Jt = Ee.length, Wn = Jt >>> 1; Qt < Wn; ) {
          var _n = (Qt + 1) * 2 - 1, ar = Ee[_n], on = _n + 1, jr = Ee[on];
          if (O(ar, Ve) < 0)
            on < Jt && O(jr, ar) < 0 ? (Ee[Qt] = jr, Ee[on] = Ve, Qt = on) : (Ee[Qt] = ar, Ee[_n] = Ve, Qt = _n);
          else if (on < Jt && O(jr, Ve) < 0)
            Ee[Qt] = jr, Ee[on] = Ve, Qt = on;
          else
            return;
        }
      }
      function O(Ee, Ve) {
        var Dt = Ee.sortIndex - Ve.sortIndex;
        return Dt !== 0 ? Dt : Ee.id - Ve.id;
      }
      var B = 1, M = 2, I = 3, K = 4, ae = 5;
      function ue(Ee, Ve) {
      }
      var pe = typeof performance == "object" && typeof performance.now == "function";
      if (pe) {
        var Ae = performance;
        c.unstable_now = function() {
          return Ae.now();
        };
      } else {
        var he = Date, ye = he.now();
        c.unstable_now = function() {
          return he.now() - ye;
        };
      }
      var be = 1073741823, De = -1, $ = 250, Fe = 5e3, je = 1e4, Ze = be, et = [], pt = [], Mt = 1, tt = null, it = I, qt = !1, Pt = !1, Se = !1, ve = typeof setTimeout == "function" ? setTimeout : null, Qe = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function F(Ee) {
        for (var Ve = x(pt); Ve !== null; ) {
          if (Ve.callback === null)
            y(pt);
          else if (Ve.startTime <= Ee)
            y(pt), Ve.sortIndex = Ve.expirationTime, w(et, Ve);
          else
            return;
          Ve = x(pt);
        }
      }
      function te(Ee) {
        if (Se = !1, F(Ee), !Pt)
          if (x(et) !== null)
            Pt = !0, Qr(nt);
          else {
            var Ve = x(pt);
            Ve !== null && yn(te, Ve.startTime - Ee);
          }
      }
      function nt(Ee, Ve) {
        Pt = !1, Se && (Se = !1, Mn()), qt = !0;
        var Dt = it;
        try {
          var Qt;
          if (!m) return qe(Ee, Ve);
        } finally {
          tt = null, it = Dt, qt = !1;
        }
      }
      function qe(Ee, Ve) {
        var Dt = Ve;
        for (F(Dt), tt = x(et); tt !== null && !v && !(tt.expirationTime > Dt && (!Ee || di())); ) {
          var Qt = tt.callback;
          if (typeof Qt == "function") {
            tt.callback = null, it = tt.priorityLevel;
            var Jt = tt.expirationTime <= Dt, Wn = Qt(Jt);
            Dt = c.unstable_now(), typeof Wn == "function" ? tt.callback = Wn : tt === x(et) && y(et), F(Dt);
          } else
            y(et);
          tt = x(et);
        }
        if (tt !== null)
          return !0;
        var _n = x(pt);
        return _n !== null && yn(te, _n.startTime - Dt), !1;
      }
      function gt(Ee, Ve) {
        switch (Ee) {
          case B:
          case M:
          case I:
          case K:
          case ae:
            break;
          default:
            Ee = I;
        }
        var Dt = it;
        it = Ee;
        try {
          return Ve();
        } finally {
          it = Dt;
        }
      }
      function St(Ee) {
        var Ve;
        switch (it) {
          case B:
          case M:
          case I:
            Ve = I;
            break;
          default:
            Ve = it;
            break;
        }
        var Dt = it;
        it = Ve;
        try {
          return Ee();
        } finally {
          it = Dt;
        }
      }
      function Ut(Ee) {
        var Ve = it;
        return function() {
          var Dt = it;
          it = Ve;
          try {
            return Ee.apply(this, arguments);
          } finally {
            it = Dt;
          }
        };
      }
      function zt(Ee, Ve, Dt) {
        var Qt = c.unstable_now(), Jt;
        if (typeof Dt == "object" && Dt !== null) {
          var Wn = Dt.delay;
          typeof Wn == "number" && Wn > 0 ? Jt = Qt + Wn : Jt = Qt;
        } else
          Jt = Qt;
        var _n;
        switch (Ee) {
          case B:
            _n = De;
            break;
          case M:
            _n = $;
            break;
          case ae:
            _n = Ze;
            break;
          case K:
            _n = je;
            break;
          case I:
          default:
            _n = Fe;
            break;
        }
        var ar = Jt + _n, on = {
          id: Mt++,
          callback: Ve,
          priorityLevel: Ee,
          startTime: Jt,
          expirationTime: ar,
          sortIndex: -1
        };
        return Jt > Qt ? (on.sortIndex = Jt, w(pt, on), x(et) === null && on === x(pt) && (Se ? Mn() : Se = !0, yn(te, Jt - Qt))) : (on.sortIndex = ar, w(et, on), !Pt && !qt && (Pt = !0, Qr(nt))), on;
      }
      function Nt() {
      }
      function Nn() {
        !Pt && !qt && (Pt = !0, Qr(nt));
      }
      function en() {
        return x(et);
      }
      function pr(Ee) {
        Ee.callback = null;
      }
      function Dn() {
        return it;
      }
      var vr = !1, Pn = null, Pr = -1, Jn = C, ua = -1;
      function di() {
        var Ee = c.unstable_now() - ua;
        return !(Ee < Jn);
      }
      function hr() {
      }
      function Hr(Ee) {
        if (Ee < 0 || Ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ee > 0 ? Jn = Math.floor(1e3 / Ee) : Jn = C;
      }
      var ja = function() {
        if (Pn !== null) {
          var Ee = c.unstable_now();
          ua = Ee;
          var Ve = !0, Dt = !0;
          try {
            Dt = Pn(Ve, Ee);
          } finally {
            Dt ? Hn() : (vr = !1, Pn = null);
          }
        } else
          vr = !1;
      }, Hn;
      if (typeof ge == "function")
        Hn = function() {
          ge(ja);
        };
      else if (typeof MessageChannel < "u") {
        var Tr = new MessageChannel(), br = Tr.port2;
        Tr.port1.onmessage = ja, Hn = function() {
          br.postMessage(null);
        };
      } else
        Hn = function() {
          ve(ja, 0);
        };
      function Qr(Ee) {
        Pn = Ee, vr || (vr = !0, Hn());
      }
      function yn(Ee, Ve) {
        Pr = ve(function() {
          Ee(c.unstable_now());
        }, Ve);
      }
      function Mn() {
        Qe(Pr), Pr = -1;
      }
      var xi = hr, Wr = null;
      c.unstable_IdlePriority = ae, c.unstable_ImmediatePriority = B, c.unstable_LowPriority = K, c.unstable_NormalPriority = I, c.unstable_Profiling = Wr, c.unstable_UserBlockingPriority = M, c.unstable_cancelCallback = pr, c.unstable_continueExecution = Nn, c.unstable_forceFrameRate = Hr, c.unstable_getCurrentPriorityLevel = Dn, c.unstable_getFirstCallbackNode = en, c.unstable_next = St, c.unstable_pauseExecution = Nt, c.unstable_requestPaint = xi, c.unstable_runWithPriority = gt, c.unstable_scheduleCallback = zt, c.unstable_shouldYield = di, c.unstable_wrapCallback = Ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(uE)), uE;
}
var mw;
function Yw() {
  return mw || (mw = 1, ft.env.NODE_ENV === "production" ? Cy.exports = oO() : Cy.exports = uO()), Cy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yw;
function sO() {
  if (yw) return si;
  yw = 1;
  var c = re, v = Yw();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), w = {};
  function x(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++) C.add(r[n]);
  }
  var A = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, M = {};
  function I(n) {
    return _.call(M, n) ? !0 : _.call(B, n) ? !1 : O.test(n) ? M[n] = !0 : (B[n] = !0, !1);
  }
  function K(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ae(n, r, l, u) {
    if (r === null || typeof r > "u" || K(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ue(n, r, l, u, f, p, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = E;
  }
  var pe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pe[n] = new ue(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pe[r] = new ue(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pe[n] = new ue(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pe[n] = new ue(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pe[n] = new ue(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pe[n] = new ue(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pe[n] = new ue(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pe[n] = new ue(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pe[n] = new ue(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ae = /[\-:]([a-z])/g;
  function he(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ae,
      he
    );
    pe[r] = new ue(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ae, he);
    pe[r] = new ue(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ae, he);
    pe[r] = new ue(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pe[n] = new ue(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pe.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pe[n] = new ue(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ye(n, r, l, u) {
    var f = pe.hasOwnProperty(r) ? pe[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ae(r, l, f, u) && (l = null), u || f === null ? I(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : f.mustUseProperty ? n[f.propertyName] = l === null ? f.type === 3 ? !1 : "" : l : (r = f.attributeName, u = f.attributeNamespace, l === null ? n.removeAttribute(r) : (f = f.type, l = f === 3 || f === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var be = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), $ = Symbol.for("react.portal"), Fe = Symbol.for("react.fragment"), je = Symbol.for("react.strict_mode"), Ze = Symbol.for("react.profiler"), et = Symbol.for("react.provider"), pt = Symbol.for("react.context"), Mt = Symbol.for("react.forward_ref"), tt = Symbol.for("react.suspense"), it = Symbol.for("react.suspense_list"), qt = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), ve = Symbol.iterator;
  function Qe(n) {
    return n === null || typeof n != "object" ? null : (n = ve && n[ve] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ge = Object.assign, F;
  function te(n) {
    if (F === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      F = r && r[1] || "";
    }
    return `
` + F + n;
  }
  var nt = !1;
  function qe(n, r) {
    if (!n || nt) return "";
    nt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (X) {
          var u = X;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (X) {
          u = X;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (X) {
          u = X;
        }
        n();
      }
    } catch (X) {
      if (X && u && typeof X.stack == "string") {
        for (var f = X.stack.split(`
`), p = u.stack.split(`
`), E = f.length - 1, b = p.length - 1; 1 <= E && 0 <= b && f[E] !== p[b]; ) b--;
        for (; 1 <= E && 0 <= b; E--, b--) if (f[E] !== p[b]) {
          if (E !== 1 || b !== 1)
            do
              if (E--, b--, 0 > b || f[E] !== p[b]) {
                var L = `
` + f[E].replace(" at new ", " at ");
                return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
              }
            while (1 <= E && 0 <= b);
          break;
        }
      }
    } finally {
      nt = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? te(n) : "";
  }
  function gt(n) {
    switch (n.tag) {
      case 5:
        return te(n.type);
      case 16:
        return te("Lazy");
      case 13:
        return te("Suspense");
      case 19:
        return te("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = qe(n.type, !1), n;
      case 11:
        return n = qe(n.type.render, !1), n;
      case 1:
        return n = qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function St(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Fe:
        return "Fragment";
      case $:
        return "Portal";
      case Ze:
        return "Profiler";
      case je:
        return "StrictMode";
      case tt:
        return "Suspense";
      case it:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case pt:
        return (n.displayName || "Context") + ".Consumer";
      case et:
        return (n._context.displayName || "Context") + ".Provider";
      case Mt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case qt:
        return r = n.displayName || null, r !== null ? r : St(n.type) || "Memo";
      case Pt:
        r = n._payload, n = n._init;
        try {
          return St(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ut(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return St(r);
      case 8:
        return r === je ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function zt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Nt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Nn(n) {
    var r = Nt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var f = l.get, p = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(E) {
        u = "" + E, p.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(E) {
        u = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function en(n) {
    n._valueTracker || (n._valueTracker = Nn(n));
  }
  function pr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = Nt(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function vr(n, r) {
    var l = r.checked;
    return ge({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = zt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Pr(n, r) {
    r = r.checked, r != null && ye(n, "checked", r, !1);
  }
  function Jn(n, r) {
    Pr(n, r);
    var l = zt(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? di(n, r.type, l) : r.hasOwnProperty("defaultValue") && di(n, r.type, zt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ua(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function di(n, r, l) {
    (r !== "number" || Dn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var hr = Array.isArray;
  function Hr(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < l.length; f++) r["$" + l[f]] = !0;
      for (l = 0; l < n.length; l++) f = r.hasOwnProperty("$" + n[l].value), n[l].selected !== f && (n[l].selected = f), f && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + zt(l), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === l) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ja(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(m(91));
    return ge({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Hn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(m(92));
        if (hr(l)) {
          if (1 < l.length) throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: zt(l) };
  }
  function Tr(n, r) {
    var l = zt(r.value), u = zt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function br(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Qr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Qr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Mn, xi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Mn = Mn || document.createElement("div"), Mn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Mn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Wr(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ee).forEach(function(n) {
    Ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ee[r] = Ee[n];
    });
  });
  function Dt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ee.hasOwnProperty(n) && Ee[n] ? ("" + r).trim() : r + "px";
  }
  function Qt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, f = Dt(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, f) : n[l] = f;
    }
  }
  var Jt = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Wn(n, r) {
    if (r) {
      if (Jt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(m(62));
    }
  }
  function _n(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ar = null;
  function on(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var jr = null, dn = null, un = null;
  function Di(n) {
    if (n = Ns(n)) {
      if (typeof jr != "function") throw Error(m(280));
      var r = n.stateNode;
      r && (r = rt(r), jr(n.stateNode, n.type, r));
    }
  }
  function pi(n) {
    dn ? un ? un.push(n) : un = [n] : dn = n;
  }
  function Yi() {
    if (dn) {
      var n = dn, r = un;
      if (un = dn = null, Di(n), r) for (n = 0; n < r.length; n++) Di(r[n]);
    }
  }
  function Qi(n, r) {
    return n(r);
  }
  function Wi() {
  }
  var Dl = !1;
  function po(n, r, l) {
    if (Dl) return n(r, l);
    Dl = !0;
    try {
      return Qi(n, r, l);
    } finally {
      Dl = !1, (dn !== null || un !== null) && (Wi(), Yi());
    }
  }
  function k(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = rt(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(m(231, r, typeof l));
    return l;
  }
  var P = !1;
  if (A) try {
    var Q = {};
    Object.defineProperty(Q, "passive", { get: function() {
      P = !0;
    } }), window.addEventListener("test", Q, Q), window.removeEventListener("test", Q, Q);
  } catch {
    P = !1;
  }
  function ie(n, r, l, u, f, p, E, b, L) {
    var X = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, X);
    } catch (se) {
      this.onError(se);
    }
  }
  var Ce = !1, Pe = null, lt = !1, ke = null, Ue = { onError: function(n) {
    Ce = !0, Pe = n;
  } };
  function Le(n, r, l, u, f, p, E, b, L) {
    Ce = !1, Pe = null, ie.apply(Ue, arguments);
  }
  function Re(n, r, l, u, f, p, E, b, L) {
    if (Le.apply(this, arguments), Ce) {
      if (Ce) {
        var X = Pe;
        Ce = !1, Pe = null;
      } else throw Error(m(198));
      lt || (lt = !0, ke = X);
    }
  }
  function vt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function _t(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function gn(n) {
    if (vt(n) !== n) throw Error(m(188));
  }
  function wt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = vt(n), r === null) throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var f = l.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (u = f.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === l) return gn(f), n;
          if (p === u) return gn(f), r;
          p = p.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== u.return) l = f, u = p;
      else {
        for (var E = !1, b = f.child; b; ) {
          if (b === l) {
            E = !0, l = f, u = p;
            break;
          }
          if (b === u) {
            E = !0, u = f, l = p;
            break;
          }
          b = b.sibling;
        }
        if (!E) {
          for (b = p.child; b; ) {
            if (b === l) {
              E = !0, l = p, u = f;
              break;
            }
            if (b === u) {
              E = !0, u = p, l = f;
              break;
            }
            b = b.sibling;
          }
          if (!E) throw Error(m(189));
        }
      }
      if (l.alternate !== u) throw Error(m(190));
    }
    if (l.tag !== 3) throw Error(m(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ht(n) {
    return n = wt(n), n !== null ? pn(n) : null;
  }
  function pn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = pn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Va = v.unstable_scheduleCallback, _i = v.unstable_cancelCallback, _a = v.unstable_shouldYield, sa = v.unstable_requestPaint, sn = v.unstable_now, Gi = v.unstable_getCurrentPriorityLevel, ir = v.unstable_ImmediatePriority, Tt = v.unstable_UserBlockingPriority, Gr = v.unstable_NormalPriority, kt = v.unstable_LowPriority, an = v.unstable_IdlePriority, Kr = null, Zn = null;
  function Sn(n) {
    if (Zn && typeof Zn.onCommitFiberRoot == "function") try {
      Zn.onCommitFiberRoot(Kr, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var jn = Math.clz32 ? Math.clz32 : xc, _l = Math.log, vo = Math.LN2;
  function xc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (_l(n) / vo | 0) | 0;
  }
  var ru = 64, kl = 4194304;
  function vi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Xr(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, f = n.suspendedLanes, p = n.pingedLanes, E = l & 268435455;
    if (E !== 0) {
      var b = E & ~f;
      b !== 0 ? u = vi(b) : (p &= E, p !== 0 && (u = vi(p)));
    } else E = l & ~f, E !== 0 ? u = vi(E) : p !== 0 && (u = vi(p));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & f) && (f = u & -u, p = r & -r, f >= p || f === 16 && (p & 4194240) !== 0)) return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - jn(r), f = 1 << l, u |= n[l], r &= ~f;
    return u;
  }
  function Ol(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ll(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var E = 31 - jn(p), b = 1 << E, L = f[E];
      L === -1 ? (!(b & l) || b & u) && (f[E] = Ol(b, r)) : L <= r && (n.expiredLanes |= b), p &= ~b;
    }
  }
  function Nl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function au() {
    var n = ru;
    return ru <<= 1, !(ru & 4194240) && (ru = 64), n;
  }
  function iu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Ki(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - jn(r), n[r] = l;
  }
  function Rd(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var f = 31 - jn(l), p = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, l &= ~p;
    }
  }
  function ki(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - jn(l), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), l &= ~f;
    }
  }
  var Wt = 0;
  function lu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ho, ou, jt, uu, su, Et = !1, mo = [], Un = null, ca = null, qr = null, Ml = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), tn = [], Dc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function fa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Un = null;
        break;
      case "dragenter":
      case "dragleave":
        ca = null;
        break;
      case "mouseover":
      case "mouseout":
        qr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ml.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vn.delete(r.pointerId);
    }
  }
  function mr(n, r, l, u, f, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: p, targetContainers: [f] }, r !== null && (r = Ns(r), r !== null && ou(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function Oi(n, r, l, u, f) {
    switch (r) {
      case "focusin":
        return Un = mr(Un, n, r, l, u, f), !0;
      case "dragenter":
        return ca = mr(ca, n, r, l, u, f), !0;
      case "mouseover":
        return qr = mr(qr, n, r, l, u, f), !0;
      case "pointerover":
        var p = f.pointerId;
        return Ml.set(p, mr(Ml.get(p) || null, n, r, l, u, f)), !0;
      case "gotpointercapture":
        return p = f.pointerId, Vn.set(p, mr(Vn.get(p) || null, n, r, l, u, f)), !0;
    }
    return !1;
  }
  function _c(n) {
    var r = Ya(n.target);
    if (r !== null) {
      var l = vt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = _t(l), r !== null) {
            n.blockedOn = r, su(n.priority, function() {
              jt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Xi(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = fu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        ar = u, l.target.dispatchEvent(u), ar = null;
      } else return r = Ns(l), r !== null && ou(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Ul(n, r, l) {
    Xi(n) && l.delete(r);
  }
  function kc() {
    Et = !1, Un !== null && Xi(Un) && (Un = null), ca !== null && Xi(ca) && (ca = null), qr !== null && Xi(qr) && (qr = null), Ml.forEach(Ul), Vn.forEach(Ul);
  }
  function Ba(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Et || (Et = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, kc)));
  }
  function zl(n) {
    function r(f) {
      return Ba(f, n);
    }
    if (0 < mo.length) {
      Ba(mo[0], n);
      for (var l = 1; l < mo.length; l++) {
        var u = mo[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Un !== null && Ba(Un, n), ca !== null && Ba(ca, n), qr !== null && Ba(qr, n), Ml.forEach(r), Vn.forEach(r), l = 0; l < tn.length; l++) u = tn[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < tn.length && (l = tn[0], l.blockedOn === null); ) _c(l), l.blockedOn === null && tn.shift();
  }
  var qi = be.ReactCurrentBatchConfig, Ia = !0;
  function cu(n, r, l, u) {
    var f = Wt, p = qi.transition;
    qi.transition = null;
    try {
      Wt = 1, Fl(n, r, l, u);
    } finally {
      Wt = f, qi.transition = p;
    }
  }
  function Al(n, r, l, u) {
    var f = Wt, p = qi.transition;
    qi.transition = null;
    try {
      Wt = 4, Fl(n, r, l, u);
    } finally {
      Wt = f, qi.transition = p;
    }
  }
  function Fl(n, r, l, u) {
    if (Ia) {
      var f = fu(n, r, l, u);
      if (f === null) Pc(n, r, u, yo, l), fa(n, u);
      else if (Oi(f, n, r, l, u)) u.stopPropagation();
      else if (fa(n, u), r & 4 && -1 < Dc.indexOf(n)) {
        for (; f !== null; ) {
          var p = Ns(f);
          if (p !== null && ho(p), p = fu(n, r, l, u), p === null && Pc(n, r, u, yo, l), p === f) break;
          f = p;
        }
        f !== null && u.stopPropagation();
      } else Pc(n, r, u, null, l);
    }
  }
  var yo = null;
  function fu(n, r, l, u) {
    if (yo = null, n = on(u), n = Ya(n), n !== null) if (r = vt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = _t(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return yo = n, null;
  }
  function gs(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Gi()) {
          case ir:
            return 1;
          case Tt:
            return 4;
          case Gr:
          case kt:
            return 16;
          case an:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var hi = null, S = null, D = null;
  function G() {
    if (D) return D;
    var n, r = S, l = r.length, u, f = "value" in hi ? hi.value : hi.textContent, p = f.length;
    for (n = 0; n < l && r[n] === f[n]; n++) ;
    var E = l - n;
    for (u = 1; u <= E && r[l - u] === f[p - u]; u++) ;
    return D = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function J(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function de() {
    return !0;
  }
  function ut() {
    return !1;
  }
  function xe(n) {
    function r(l, u, f, p, E) {
      this._reactName = l, this._targetInst = f, this.type = u, this.nativeEvent = p, this.target = E, this.currentTarget = null;
      for (var b in n) n.hasOwnProperty(b) && (l = n[b], this[b] = l ? l(p) : p[b]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? de : ut, this.isPropagationStopped = ut, this;
    }
    return ge(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = de);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = de);
    }, persist: function() {
    }, isPersistent: de }), r;
  }
  var ot = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ot = xe(ot), Yt = ge({}, ot, { view: 0, detail: 0 }), vn = xe(Yt), ln, hn, En, Vt = ge({}, Yt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== En && (En && n.type === "mousemove" ? (ln = n.screenX - En.screenX, hn = n.screenY - En.screenY) : hn = ln = 0, En = n), ln);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : hn;
  } }), Ji = xe(Vt), du = ge({}, Vt, { dataTransfer: 0 }), Ss = xe(du), wd = ge({}, Yt, { relatedTarget: 0 }), mi = xe(wd), Es = ge({}, ot, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cs = xe(Es), Td = ge({}, ot, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Py = xe(Td), Hy = ge({}, ot, { data: 0 }), bd = xe(Hy), xd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Mv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Uv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Mv[n]) ? !!r[n] : !1;
  }
  function Dd() {
    return Uv;
  }
  var Zi = ge({}, Yt, { key: function(n) {
    if (n.key) {
      var r = xd[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = J(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dd, charCode: function(n) {
    return n.type === "keypress" ? J(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? J(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), jy = xe(Zi), _d = ge({}, Vt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oc = xe(_d), kd = ge({}, Yt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dd }), Vy = xe(kd), Lc = ge({}, ot, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zv = xe(Lc), da = ge({}, Vt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), el = xe(da), er = [9, 13, 27, 32], yi = A && "CompositionEvent" in window, go = null;
  A && "documentMode" in document && (go = document.documentMode);
  var Nc = A && "TextEvent" in window && !go, Av = A && (!yi || go && 8 < go && 11 >= go), pu = " ", Fv = !1;
  function Pv(n, r) {
    switch (n) {
      case "keyup":
        return er.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Mc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var vu = !1;
  function By(n, r) {
    switch (n) {
      case "compositionend":
        return Mc(r);
      case "keypress":
        return r.which !== 32 ? null : (Fv = !0, pu);
      case "textInput":
        return n = r.data, n === pu && Fv ? null : n;
      default:
        return null;
    }
  }
  function Iy(n, r) {
    if (vu) return n === "compositionend" || !yi && Pv(n, r) ? (n = G(), D = S = hi = null, vu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Av && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Hv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function jv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Hv[n.type] : r === "textarea";
  }
  function Vv(n, r, l, u) {
    pi(u), r = ks(r, "onChange"), 0 < r.length && (l = new Ot("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var Rs = null, hu = null;
  function mu(n) {
    Fc(n, 0);
  }
  function yu(n) {
    var r = Su(n);
    if (pr(r)) return n;
  }
  function Bv(n, r) {
    if (n === "change") return r;
  }
  var Od = !1;
  if (A) {
    var Ld;
    if (A) {
      var Nd = "oninput" in document;
      if (!Nd) {
        var Iv = document.createElement("div");
        Iv.setAttribute("oninput", "return;"), Nd = typeof Iv.oninput == "function";
      }
      Ld = Nd;
    } else Ld = !1;
    Od = Ld && (!document.documentMode || 9 < document.documentMode);
  }
  function $v() {
    Rs && (Rs.detachEvent("onpropertychange", Yv), hu = Rs = null);
  }
  function Yv(n) {
    if (n.propertyName === "value" && yu(hu)) {
      var r = [];
      Vv(r, hu, n, on(n)), po(mu, r);
    }
  }
  function $y(n, r, l) {
    n === "focusin" ? ($v(), Rs = r, hu = l, Rs.attachEvent("onpropertychange", Yv)) : n === "focusout" && $v();
  }
  function Yy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return yu(hu);
  }
  function Qy(n, r) {
    if (n === "click") return yu(r);
  }
  function Qv(n, r) {
    if (n === "input" || n === "change") return yu(r);
  }
  function Wy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var $a = typeof Object.is == "function" ? Object.is : Wy;
  function ws(n, r) {
    if ($a(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var f = l[u];
      if (!_.call(r, f) || !$a(n[f], r[f])) return !1;
    }
    return !0;
  }
  function Wv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Gv(n, r) {
    var l = Wv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Wv(l);
    }
  }
  function Kv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Kv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Uc() {
    for (var n = window, r = Dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Dn(n.document);
    }
    return r;
  }
  function tl(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function zc(n) {
    var r = Uc(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Kv(l.ownerDocument.documentElement, l)) {
      if (u !== null && tl(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = l.textContent.length, p = Math.min(u.start, f);
          u = u.end === void 0 ? p : Math.min(u.end, f), !n.extend && p > u && (f = u, u = p, p = f), f = Gv(l, p);
          var E = Gv(
            l,
            u
          );
          f && E && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Xv = A && "documentMode" in document && 11 >= document.documentMode, gi = null, Md = null, Ts = null, Ud = !1;
  function qv(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ud || gi == null || gi !== Dn(u) || (u = gi, "selectionStart" in u && tl(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Ts && ws(Ts, u) || (Ts = u, u = ks(Md, "onSelect"), 0 < u.length && (r = new Ot("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = gi)));
  }
  function Ac(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var So = { animationend: Ac("Animation", "AnimationEnd"), animationiteration: Ac("Animation", "AnimationIteration"), animationstart: Ac("Animation", "AnimationStart"), transitionend: Ac("Transition", "TransitionEnd") }, zd = {}, Ad = {};
  A && (Ad = document.createElement("div").style, "AnimationEvent" in window || (delete So.animationend.animation, delete So.animationiteration.animation, delete So.animationstart.animation), "TransitionEvent" in window || delete So.transitionend.transition);
  function yr(n) {
    if (zd[n]) return zd[n];
    if (!So[n]) return n;
    var r = So[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Ad) return zd[n] = r[l];
    return n;
  }
  var Fd = yr("animationend"), Jv = yr("animationiteration"), Zv = yr("animationstart"), eh = yr("transitionend"), th = /* @__PURE__ */ new Map(), nh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function nl(n, r) {
    th.set(n, r), x(r, [n]);
  }
  for (var bs = 0; bs < nh.length; bs++) {
    var Eo = nh[bs], Gy = Eo.toLowerCase(), xs = Eo[0].toUpperCase() + Eo.slice(1);
    nl(Gy, "on" + xs);
  }
  nl(Fd, "onAnimationEnd"), nl(Jv, "onAnimationIteration"), nl(Zv, "onAnimationStart"), nl("dblclick", "onDoubleClick"), nl("focusin", "onFocus"), nl("focusout", "onBlur"), nl(eh, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), x("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), x("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), x("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), x("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), x("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ky = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));
  function rh(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, Re(u, r, void 0, n), n.currentTarget = null;
  }
  function Fc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], f = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r) for (var E = u.length - 1; 0 <= E; E--) {
          var b = u[E], L = b.instance, X = b.currentTarget;
          if (b = b.listener, L !== p && f.isPropagationStopped()) break e;
          rh(f, b, X), p = L;
        }
        else for (E = 0; E < u.length; E++) {
          if (b = u[E], L = b.instance, X = b.currentTarget, b = b.listener, L !== p && f.isPropagationStopped()) break e;
          rh(f, b, X), p = L;
        }
      }
    }
    if (lt) throw n = ke, lt = !1, ke = null, n;
  }
  function mn(n, r) {
    var l = r[$d];
    l === void 0 && (l = r[$d] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (ah(r, n, 2, !1), l.add(u));
  }
  function Pl(n, r, l) {
    var u = 0;
    r && (u |= 4), ah(l, n, u, r);
  }
  var rl = "_reactListening" + Math.random().toString(36).slice(2);
  function gu(n) {
    if (!n[rl]) {
      n[rl] = !0, C.forEach(function(l) {
        l !== "selectionchange" && (Ky.has(l) || Pl(l, !1, n), Pl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[rl] || (r[rl] = !0, Pl("selectionchange", !1, r));
    }
  }
  function ah(n, r, l, u) {
    switch (gs(r)) {
      case 1:
        var f = cu;
        break;
      case 4:
        f = Al;
        break;
      default:
        f = Fl;
    }
    l = f.bind(null, r, l, n), f = void 0, !P || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: f }) : n.addEventListener(r, l, !0) : f !== void 0 ? n.addEventListener(r, l, { passive: f }) : n.addEventListener(r, l, !1);
  }
  function Pc(n, r, l, u, f) {
    var p = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var E = u.tag;
      if (E === 3 || E === 4) {
        var b = u.stateNode.containerInfo;
        if (b === f || b.nodeType === 8 && b.parentNode === f) break;
        if (E === 4) for (E = u.return; E !== null; ) {
          var L = E.tag;
          if ((L === 3 || L === 4) && (L = E.stateNode.containerInfo, L === f || L.nodeType === 8 && L.parentNode === f)) return;
          E = E.return;
        }
        for (; b !== null; ) {
          if (E = Ya(b), E === null) return;
          if (L = E.tag, L === 5 || L === 6) {
            u = p = E;
            continue e;
          }
          b = b.parentNode;
        }
      }
      u = u.return;
    }
    po(function() {
      var X = p, se = on(l), ce = [];
      e: {
        var oe = th.get(n);
        if (oe !== void 0) {
          var Ne = Ot, Be = n;
          switch (n) {
            case "keypress":
              if (J(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ne = jy;
              break;
            case "focusin":
              Be = "focus", Ne = mi;
              break;
            case "focusout":
              Be = "blur", Ne = mi;
              break;
            case "beforeblur":
            case "afterblur":
              Ne = mi;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ne = Ji;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ne = Ss;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ne = Vy;
              break;
            case Fd:
            case Jv:
            case Zv:
              Ne = Cs;
              break;
            case eh:
              Ne = zv;
              break;
            case "scroll":
              Ne = vn;
              break;
            case "wheel":
              Ne = el;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ne = Py;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ne = Oc;
          }
          var Ye = (r & 4) !== 0, Xn = !Ye && n === "scroll", H = Ye ? oe !== null ? oe + "Capture" : null : oe;
          Ye = [];
          for (var U = X, Y; U !== null; ) {
            Y = U;
            var me = Y.stateNode;
            if (Y.tag === 5 && me !== null && (Y = me, H !== null && (me = k(U, H), me != null && Ye.push(_s(U, me, Y)))), Xn) break;
            U = U.return;
          }
          0 < Ye.length && (oe = new Ne(oe, Be, null, l, se), ce.push({ event: oe, listeners: Ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (oe = n === "mouseover" || n === "pointerover", Ne = n === "mouseout" || n === "pointerout", oe && l !== ar && (Be = l.relatedTarget || l.fromElement) && (Ya(Be) || Be[al])) break e;
          if ((Ne || oe) && (oe = se.window === se ? se : (oe = se.ownerDocument) ? oe.defaultView || oe.parentWindow : window, Ne ? (Be = l.relatedTarget || l.toElement, Ne = X, Be = Be ? Ya(Be) : null, Be !== null && (Xn = vt(Be), Be !== Xn || Be.tag !== 5 && Be.tag !== 6) && (Be = null)) : (Ne = null, Be = X), Ne !== Be)) {
            if (Ye = Ji, me = "onMouseLeave", H = "onMouseEnter", U = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = Oc, me = "onPointerLeave", H = "onPointerEnter", U = "pointer"), Xn = Ne == null ? oe : Su(Ne), Y = Be == null ? oe : Su(Be), oe = new Ye(me, U + "leave", Ne, l, se), oe.target = Xn, oe.relatedTarget = Y, me = null, Ya(se) === X && (Ye = new Ye(H, U + "enter", Be, l, se), Ye.target = Y, Ye.relatedTarget = Xn, me = Ye), Xn = me, Ne && Be) t: {
              for (Ye = Ne, H = Be, U = 0, Y = Ye; Y; Y = Co(Y)) U++;
              for (Y = 0, me = H; me; me = Co(me)) Y++;
              for (; 0 < U - Y; ) Ye = Co(Ye), U--;
              for (; 0 < Y - U; ) H = Co(H), Y--;
              for (; U--; ) {
                if (Ye === H || H !== null && Ye === H.alternate) break t;
                Ye = Co(Ye), H = Co(H);
              }
              Ye = null;
            }
            else Ye = null;
            Ne !== null && Pd(ce, oe, Ne, Ye, !1), Be !== null && Xn !== null && Pd(ce, Xn, Be, Ye, !0);
          }
        }
        e: {
          if (oe = X ? Su(X) : window, Ne = oe.nodeName && oe.nodeName.toLowerCase(), Ne === "select" || Ne === "input" && oe.type === "file") var Ge = Bv;
          else if (jv(oe)) if (Od) Ge = Qv;
          else {
            Ge = Yy;
            var st = $y;
          }
          else (Ne = oe.nodeName) && Ne.toLowerCase() === "input" && (oe.type === "checkbox" || oe.type === "radio") && (Ge = Qy);
          if (Ge && (Ge = Ge(n, X))) {
            Vv(ce, Ge, l, se);
            break e;
          }
          st && st(n, oe, X), n === "focusout" && (st = oe._wrapperState) && st.controlled && oe.type === "number" && di(oe, "number", oe.value);
        }
        switch (st = X ? Su(X) : window, n) {
          case "focusin":
            (jv(st) || st.contentEditable === "true") && (gi = st, Md = X, Ts = null);
            break;
          case "focusout":
            Ts = Md = gi = null;
            break;
          case "mousedown":
            Ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ud = !1, qv(ce, l, se);
            break;
          case "selectionchange":
            if (Xv) break;
          case "keydown":
          case "keyup":
            qv(ce, l, se);
        }
        var Ie;
        if (yi) e: {
          switch (n) {
            case "compositionstart":
              var ct = "onCompositionStart";
              break e;
            case "compositionend":
              ct = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ct = "onCompositionUpdate";
              break e;
          }
          ct = void 0;
        }
        else vu ? Pv(n, l) && (ct = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ct = "onCompositionStart");
        ct && (Av && l.locale !== "ko" && (vu || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && vu && (Ie = G()) : (hi = se, S = "value" in hi ? hi.value : hi.textContent, vu = !0)), st = ks(X, ct), 0 < st.length && (ct = new bd(ct, n, null, l, se), ce.push({ event: ct, listeners: st }), Ie ? ct.data = Ie : (Ie = Mc(l), Ie !== null && (ct.data = Ie)))), (Ie = Nc ? By(n, l) : Iy(n, l)) && (X = ks(X, "onBeforeInput"), 0 < X.length && (se = new bd("onBeforeInput", "beforeinput", null, l, se), ce.push({ event: se, listeners: X }), se.data = Ie));
      }
      Fc(ce, r);
    });
  }
  function _s(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ks(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var f = n, p = f.stateNode;
      f.tag === 5 && p !== null && (f = p, p = k(n, l), p != null && u.unshift(_s(n, p, f)), p = k(n, r), p != null && u.push(_s(n, p, f))), n = n.return;
    }
    return u;
  }
  function Co(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Pd(n, r, l, u, f) {
    for (var p = r._reactName, E = []; l !== null && l !== u; ) {
      var b = l, L = b.alternate, X = b.stateNode;
      if (L !== null && L === u) break;
      b.tag === 5 && X !== null && (b = X, f ? (L = k(l, p), L != null && E.unshift(_s(l, L, b))) : f || (L = k(l, p), L != null && E.push(_s(l, L, b)))), l = l.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var Hd = /\r\n?/g, Xy = /\u0000|\uFFFD/g;
  function jd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Hd, `
`).replace(Xy, "");
  }
  function Hc(n, r, l) {
    if (r = jd(r), jd(n) !== r && l) throw Error(m(425));
  }
  function jc() {
  }
  var Vd = null, Ro = null;
  function Os(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var wo = typeof setTimeout == "function" ? setTimeout : void 0, ih = typeof clearTimeout == "function" ? clearTimeout : void 0, Bd = typeof Promise == "function" ? Promise : void 0, Id = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bd < "u" ? function(n) {
    return Bd.resolve(null).then(n).catch(qy);
  } : wo;
  function qy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Hl(n, r) {
    var l = r, u = 0;
    do {
      var f = l.nextSibling;
      if (n.removeChild(l), f && f.nodeType === 8) if (l = f.data, l === "/$") {
        if (u === 0) {
          n.removeChild(f), zl(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = f;
    } while (l);
    zl(r);
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Ls(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var jl = Math.random().toString(36).slice(2), Li = "__reactFiber$" + jl, To = "__reactProps$" + jl, al = "__reactContainer$" + jl, $d = "__reactEvents$" + jl, Jy = "__reactListeners$" + jl, Yd = "__reactHandles$" + jl;
  function Ya(n) {
    var r = n[Li];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[al] || l[Li]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Ls(n); n !== null; ) {
          if (l = n[Li]) return l;
          n = Ls(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ns(n) {
    return n = n[Li] || n[al], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Su(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(m(33));
  }
  function rt(n) {
    return n[To] || null;
  }
  var Vl = [], wn = -1;
  function xt(n) {
    return { current: n };
  }
  function Zt(n) {
    0 > wn || (n.current = Vl[wn], Vl[wn] = null, wn--);
  }
  function nn(n, r) {
    wn++, Vl[wn] = n.current, n.current = r;
  }
  var Ni = {}, mt = xt(Ni), Bn = xt(!1), pa = Ni;
  function Qa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ni;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, p;
    for (p in l) f[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function kn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Wa() {
    Zt(Bn), Zt(mt);
  }
  function Bl(n, r, l) {
    if (mt.current !== Ni) throw Error(m(168));
    nn(mt, r), nn(Bn, l);
  }
  function Ms(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(m(108, Ut(n) || "Unknown", f));
    return ge({}, l, u);
  }
  function Vc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ni, pa = mt.current, nn(mt, n), nn(Bn, Bn.current), !0;
  }
  function lh(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(m(169));
    l ? (n = Ms(n, r, pa), u.__reactInternalMemoizedMergedChildContext = n, Zt(Bn), Zt(mt), nn(mt, n)) : Zt(Bn), nn(Bn, l);
  }
  var ka = null, gr = !1, Us = !1;
  function Qd(n) {
    ka === null ? ka = [n] : ka.push(n);
  }
  function Wd(n) {
    gr = !0, Qd(n);
  }
  function va() {
    if (!Us && ka !== null) {
      Us = !0;
      var n = 0, r = Wt;
      try {
        var l = ka;
        for (Wt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        ka = null, gr = !1;
      } catch (f) {
        throw ka !== null && (ka = ka.slice(n + 1)), Va(ir, va), f;
      } finally {
        Wt = r, Us = !1;
      }
    }
    return null;
  }
  var Il = [], ha = 0, bo = null, Eu = 0, ma = [], Vr = 0, Ga = null, xr = 1, il = "";
  function Oa(n, r) {
    Il[ha++] = Eu, Il[ha++] = bo, bo = n, Eu = r;
  }
  function Gd(n, r, l) {
    ma[Vr++] = xr, ma[Vr++] = il, ma[Vr++] = Ga, Ga = n;
    var u = xr;
    n = il;
    var f = 32 - jn(u) - 1;
    u &= ~(1 << f), l += 1;
    var p = 32 - jn(r) + f;
    if (30 < p) {
      var E = f - f % 5;
      p = (u & (1 << E) - 1).toString(32), u >>= E, f -= E, xr = 1 << 32 - jn(r) + f | l << f | u, il = p + n;
    } else xr = 1 << p | l << f | u, il = n;
  }
  function Bc(n) {
    n.return !== null && (Oa(n, 1), Gd(n, 1, 0));
  }
  function Kd(n) {
    for (; n === bo; ) bo = Il[--ha], Il[ha] = null, Eu = Il[--ha], Il[ha] = null;
    for (; n === Ga; ) Ga = ma[--Vr], ma[Vr] = null, il = ma[--Vr], ma[Vr] = null, xr = ma[--Vr], ma[Vr] = null;
  }
  var La = null, ya = null, Tn = !1, Ka = null;
  function Xd(n, r) {
    var l = ri(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function oh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, La = n, ya = Si(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, La = n, ya = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ga !== null ? { id: xr, overflow: il } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ri(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, La = n, ya = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ic(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function $c(n) {
    if (Tn) {
      var r = ya;
      if (r) {
        var l = r;
        if (!oh(n, r)) {
          if (Ic(n)) throw Error(m(418));
          r = Si(l.nextSibling);
          var u = La;
          r && oh(n, r) ? Xd(u, l) : (n.flags = n.flags & -4097 | 2, Tn = !1, La = n);
        }
      } else {
        if (Ic(n)) throw Error(m(418));
        n.flags = n.flags & -4097 | 2, Tn = !1, La = n;
      }
    }
  }
  function uh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    La = n;
  }
  function Yc(n) {
    if (n !== La) return !1;
    if (!Tn) return uh(n), Tn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Os(n.type, n.memoizedProps)), r && (r = ya)) {
      if (Ic(n)) throw sh(), Error(m(418));
      for (; r; ) Xd(n, r), r = Si(r.nextSibling);
    }
    if (uh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ya = Si(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ya = null;
      }
    } else ya = La ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function sh() {
    for (var n = ya; n; ) n = Si(n.nextSibling);
  }
  function zn() {
    ya = La = null, Tn = !1;
  }
  function qd(n) {
    Ka === null ? Ka = [n] : Ka.push(n);
  }
  var Qc = be.ReactCurrentBatchConfig;
  function xo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(m(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(m(147, n));
        var f = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(E) {
          var b = f.refs;
          E === null ? delete b[p] : b[p] = E;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string") throw Error(m(284));
      if (!l._owner) throw Error(m(290, n));
    }
    return n;
  }
  function Mi(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function ch(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Wc(n) {
    function r(H, U) {
      if (n) {
        var Y = H.deletions;
        Y === null ? (H.deletions = [U], H.flags |= 16) : Y.push(U);
      }
    }
    function l(H, U) {
      if (!n) return null;
      for (; U !== null; ) r(H, U), U = U.sibling;
      return null;
    }
    function u(H, U) {
      for (H = /* @__PURE__ */ new Map(); U !== null; ) U.key !== null ? H.set(U.key, U) : H.set(U.index, U), U = U.sibling;
      return H;
    }
    function f(H, U) {
      return H = ql(H, U), H.index = 0, H.sibling = null, H;
    }
    function p(H, U, Y) {
      return H.index = Y, n ? (Y = H.alternate, Y !== null ? (Y = Y.index, Y < U ? (H.flags |= 2, U) : Y) : (H.flags |= 2, U)) : (H.flags |= 1048576, U);
    }
    function E(H) {
      return n && H.alternate === null && (H.flags |= 2), H;
    }
    function b(H, U, Y, me) {
      return U === null || U.tag !== 6 ? (U = zf(Y, H.mode, me), U.return = H, U) : (U = f(U, Y), U.return = H, U);
    }
    function L(H, U, Y, me) {
      var Ge = Y.type;
      return Ge === Fe ? se(H, U, Y.props.children, me, Y.key) : U !== null && (U.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === Pt && ch(Ge) === U.type) ? (me = f(U, Y.props), me.ref = xo(H, U, Y), me.return = H, me) : (me = Mf(Y.type, Y.key, Y.props, null, H.mode, me), me.ref = xo(H, U, Y), me.return = H, me);
    }
    function X(H, U, Y, me) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== Y.containerInfo || U.stateNode.implementation !== Y.implementation ? (U = Js(Y, H.mode, me), U.return = H, U) : (U = f(U, Y.children || []), U.return = H, U);
    }
    function se(H, U, Y, me, Ge) {
      return U === null || U.tag !== 7 ? (U = Vo(Y, H.mode, me, Ge), U.return = H, U) : (U = f(U, Y), U.return = H, U);
    }
    function ce(H, U, Y) {
      if (typeof U == "string" && U !== "" || typeof U == "number") return U = zf("" + U, H.mode, Y), U.return = H, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case De:
            return Y = Mf(U.type, U.key, U.props, null, H.mode, Y), Y.ref = xo(H, null, U), Y.return = H, Y;
          case $:
            return U = Js(U, H.mode, Y), U.return = H, U;
          case Pt:
            var me = U._init;
            return ce(H, me(U._payload), Y);
        }
        if (hr(U) || Qe(U)) return U = Vo(U, H.mode, Y, null), U.return = H, U;
        Mi(H, U);
      }
      return null;
    }
    function oe(H, U, Y, me) {
      var Ge = U !== null ? U.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return Ge !== null ? null : b(H, U, "" + Y, me);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case De:
            return Y.key === Ge ? L(H, U, Y, me) : null;
          case $:
            return Y.key === Ge ? X(H, U, Y, me) : null;
          case Pt:
            return Ge = Y._init, oe(
              H,
              U,
              Ge(Y._payload),
              me
            );
        }
        if (hr(Y) || Qe(Y)) return Ge !== null ? null : se(H, U, Y, me, null);
        Mi(H, Y);
      }
      return null;
    }
    function Ne(H, U, Y, me, Ge) {
      if (typeof me == "string" && me !== "" || typeof me == "number") return H = H.get(Y) || null, b(U, H, "" + me, Ge);
      if (typeof me == "object" && me !== null) {
        switch (me.$$typeof) {
          case De:
            return H = H.get(me.key === null ? Y : me.key) || null, L(U, H, me, Ge);
          case $:
            return H = H.get(me.key === null ? Y : me.key) || null, X(U, H, me, Ge);
          case Pt:
            var st = me._init;
            return Ne(H, U, Y, st(me._payload), Ge);
        }
        if (hr(me) || Qe(me)) return H = H.get(Y) || null, se(U, H, me, Ge, null);
        Mi(U, me);
      }
      return null;
    }
    function Be(H, U, Y, me) {
      for (var Ge = null, st = null, Ie = U, ct = U = 0, cr = null; Ie !== null && ct < Y.length; ct++) {
        Ie.index > ct ? (cr = Ie, Ie = null) : cr = Ie.sibling;
        var Gt = oe(H, Ie, Y[ct], me);
        if (Gt === null) {
          Ie === null && (Ie = cr);
          break;
        }
        n && Ie && Gt.alternate === null && r(H, Ie), U = p(Gt, U, ct), st === null ? Ge = Gt : st.sibling = Gt, st = Gt, Ie = cr;
      }
      if (ct === Y.length) return l(H, Ie), Tn && Oa(H, ct), Ge;
      if (Ie === null) {
        for (; ct < Y.length; ct++) Ie = ce(H, Y[ct], me), Ie !== null && (U = p(Ie, U, ct), st === null ? Ge = Ie : st.sibling = Ie, st = Ie);
        return Tn && Oa(H, ct), Ge;
      }
      for (Ie = u(H, Ie); ct < Y.length; ct++) cr = Ne(Ie, H, ct, Y[ct], me), cr !== null && (n && cr.alternate !== null && Ie.delete(cr.key === null ? ct : cr.key), U = p(cr, U, ct), st === null ? Ge = cr : st.sibling = cr, st = cr);
      return n && Ie.forEach(function(dl) {
        return r(H, dl);
      }), Tn && Oa(H, ct), Ge;
    }
    function Ye(H, U, Y, me) {
      var Ge = Qe(Y);
      if (typeof Ge != "function") throw Error(m(150));
      if (Y = Ge.call(Y), Y == null) throw Error(m(151));
      for (var st = Ge = null, Ie = U, ct = U = 0, cr = null, Gt = Y.next(); Ie !== null && !Gt.done; ct++, Gt = Y.next()) {
        Ie.index > ct ? (cr = Ie, Ie = null) : cr = Ie.sibling;
        var dl = oe(H, Ie, Gt.value, me);
        if (dl === null) {
          Ie === null && (Ie = cr);
          break;
        }
        n && Ie && dl.alternate === null && r(H, Ie), U = p(dl, U, ct), st === null ? Ge = dl : st.sibling = dl, st = dl, Ie = cr;
      }
      if (Gt.done) return l(
        H,
        Ie
      ), Tn && Oa(H, ct), Ge;
      if (Ie === null) {
        for (; !Gt.done; ct++, Gt = Y.next()) Gt = ce(H, Gt.value, me), Gt !== null && (U = p(Gt, U, ct), st === null ? Ge = Gt : st.sibling = Gt, st = Gt);
        return Tn && Oa(H, ct), Ge;
      }
      for (Ie = u(H, Ie); !Gt.done; ct++, Gt = Y.next()) Gt = Ne(Ie, H, ct, Gt.value, me), Gt !== null && (n && Gt.alternate !== null && Ie.delete(Gt.key === null ? ct : Gt.key), U = p(Gt, U, ct), st === null ? Ge = Gt : st.sibling = Gt, st = Gt);
      return n && Ie.forEach(function(mg) {
        return r(H, mg);
      }), Tn && Oa(H, ct), Ge;
    }
    function Xn(H, U, Y, me) {
      if (typeof Y == "object" && Y !== null && Y.type === Fe && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case De:
            e: {
              for (var Ge = Y.key, st = U; st !== null; ) {
                if (st.key === Ge) {
                  if (Ge = Y.type, Ge === Fe) {
                    if (st.tag === 7) {
                      l(H, st.sibling), U = f(st, Y.props.children), U.return = H, H = U;
                      break e;
                    }
                  } else if (st.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === Pt && ch(Ge) === st.type) {
                    l(H, st.sibling), U = f(st, Y.props), U.ref = xo(H, st, Y), U.return = H, H = U;
                    break e;
                  }
                  l(H, st);
                  break;
                } else r(H, st);
                st = st.sibling;
              }
              Y.type === Fe ? (U = Vo(Y.props.children, H.mode, me, Y.key), U.return = H, H = U) : (me = Mf(Y.type, Y.key, Y.props, null, H.mode, me), me.ref = xo(H, U, Y), me.return = H, H = me);
            }
            return E(H);
          case $:
            e: {
              for (st = Y.key; U !== null; ) {
                if (U.key === st) if (U.tag === 4 && U.stateNode.containerInfo === Y.containerInfo && U.stateNode.implementation === Y.implementation) {
                  l(H, U.sibling), U = f(U, Y.children || []), U.return = H, H = U;
                  break e;
                } else {
                  l(H, U);
                  break;
                }
                else r(H, U);
                U = U.sibling;
              }
              U = Js(Y, H.mode, me), U.return = H, H = U;
            }
            return E(H);
          case Pt:
            return st = Y._init, Xn(H, U, st(Y._payload), me);
        }
        if (hr(Y)) return Be(H, U, Y, me);
        if (Qe(Y)) return Ye(H, U, Y, me);
        Mi(H, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, U !== null && U.tag === 6 ? (l(H, U.sibling), U = f(U, Y), U.return = H, H = U) : (l(H, U), U = zf(Y, H.mode, me), U.return = H, H = U), E(H)) : l(H, U);
    }
    return Xn;
  }
  var Cu = Wc(!0), fh = Wc(!1), ll = xt(null), lr = null, we = null, Xa = null;
  function Na() {
    Xa = we = lr = null;
  }
  function Jd(n) {
    var r = ll.current;
    Zt(ll), n._currentValue = r;
  }
  function Zd(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Ru(n, r) {
    lr = n, Xa = we = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Ea = !0), n.firstContext = null);
  }
  function qa(n) {
    var r = n._currentValue;
    if (Xa !== n) if (n = { context: n, memoizedValue: r, next: null }, we === null) {
      if (lr === null) throw Error(m(308));
      we = n, lr.dependencies = { lanes: 0, firstContext: n };
    } else we = we.next = n;
    return r;
  }
  var Do = null;
  function tr(n) {
    Do === null ? Do = [n] : Do.push(n);
  }
  function dh(n, r, l, u) {
    var f = r.interleaved;
    return f === null ? (l.next = l, tr(r)) : (l.next = f.next, f.next = l), r.interleaved = l, ol(n, u);
  }
  function ol(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $l = !1;
  function Gc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function wu(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ga(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Yl(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, At & 2) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, ol(n, l);
    }
    return f = u.interleaved, f === null ? (r.next = r, tr(u)) : (r.next = f.next, f.next = r), u.interleaved = r, ol(n, l);
  }
  function Kc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ki(n, l);
    }
  }
  function ph(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var f = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var E = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          p === null ? f = p = E : p = p.next = E, l = l.next;
        } while (l !== null);
        p === null ? f = p = r : p = p.next = r;
      } else f = p = r;
      l = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Xc(n, r, l, u) {
    var f = n.updateQueue;
    $l = !1;
    var p = f.firstBaseUpdate, E = f.lastBaseUpdate, b = f.shared.pending;
    if (b !== null) {
      f.shared.pending = null;
      var L = b, X = L.next;
      L.next = null, E === null ? p = X : E.next = X, E = L;
      var se = n.alternate;
      se !== null && (se = se.updateQueue, b = se.lastBaseUpdate, b !== E && (b === null ? se.firstBaseUpdate = X : b.next = X, se.lastBaseUpdate = L));
    }
    if (p !== null) {
      var ce = f.baseState;
      E = 0, se = X = L = null, b = p;
      do {
        var oe = b.lane, Ne = b.eventTime;
        if ((u & oe) === oe) {
          se !== null && (se = se.next = {
            eventTime: Ne,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var Be = n, Ye = b;
            switch (oe = r, Ne = l, Ye.tag) {
              case 1:
                if (Be = Ye.payload, typeof Be == "function") {
                  ce = Be.call(Ne, ce, oe);
                  break e;
                }
                ce = Be;
                break e;
              case 3:
                Be.flags = Be.flags & -65537 | 128;
              case 0:
                if (Be = Ye.payload, oe = typeof Be == "function" ? Be.call(Ne, ce, oe) : Be, oe == null) break e;
                ce = ge({}, ce, oe);
                break e;
              case 2:
                $l = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, oe = f.effects, oe === null ? f.effects = [b] : oe.push(b));
        } else Ne = { eventTime: Ne, lane: oe, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, se === null ? (X = se = Ne, L = ce) : se = se.next = Ne, E |= oe;
        if (b = b.next, b === null) {
          if (b = f.shared.pending, b === null) break;
          oe = b, b = oe.next, oe.next = null, f.lastBaseUpdate = oe, f.shared.pending = null;
        }
      } while (!0);
      if (se === null && (L = ce), f.baseState = L, f.firstBaseUpdate = X, f.lastBaseUpdate = se, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          E |= f.lane, f = f.next;
        while (f !== r);
      } else p === null && (f.shared.lanes = 0);
      Fo |= E, n.lanes = E, n.memoizedState = ce;
    }
  }
  function vh(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = l, typeof f != "function") throw Error(m(191, f));
        f.call(u);
      }
    }
  }
  var zs = {}, Ei = xt(zs), Tu = xt(zs), As = xt(zs);
  function _o(n) {
    if (n === zs) throw Error(m(174));
    return n;
  }
  function ep(n, r) {
    switch (nn(As, r), nn(Tu, n), nn(Ei, zs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = yn(r, n);
    }
    Zt(Ei), nn(Ei, r);
  }
  function bu() {
    Zt(Ei), Zt(Tu), Zt(As);
  }
  function hh(n) {
    _o(As.current);
    var r = _o(Ei.current), l = yn(r, n.type);
    r !== l && (nn(Tu, n), nn(Ei, l));
  }
  function tp(n) {
    Tu.current === n && (Zt(Ei), Zt(Tu));
  }
  var On = xt(0);
  function qc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Jc = [];
  function np() {
    for (var n = 0; n < Jc.length; n++) Jc[n]._workInProgressVersionPrimary = null;
    Jc.length = 0;
  }
  var Zc = be.ReactCurrentDispatcher, Fs = be.ReactCurrentBatchConfig, We = 0, Ke = null, yt = null, Lt = null, Ma = !1, xu = !1, Ps = 0, Zy = 0;
  function Br() {
    throw Error(m(321));
  }
  function Hs(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!$a(n[l], r[l])) return !1;
    return !0;
  }
  function le(n, r, l, u, f, p) {
    if (We = p, Ke = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Zc.current = n === null || n.memoizedState === null ? eg : Cn, n = l(u, f), xu) {
      p = 0;
      do {
        if (xu = !1, Ps = 0, 25 <= p) throw Error(m(301));
        p += 1, Lt = yt = null, r.updateQueue = null, Zc.current = hf, n = l(u, f);
      } while (xu);
    }
    if (Zc.current = Ir, r = yt !== null && yt.next !== null, We = 0, Lt = yt = Ke = null, Ma = !1, r) throw Error(m(300));
    return n;
  }
  function nr() {
    var n = Ps !== 0;
    return Ps = 0, n;
  }
  function Je() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Lt === null ? Ke.memoizedState = Lt = n : Lt = Lt.next = n, Lt;
  }
  function Dr() {
    if (yt === null) {
      var n = Ke.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = yt.next;
    var r = Lt === null ? Ke.memoizedState : Lt.next;
    if (r !== null) Lt = r, yt = n;
    else {
      if (n === null) throw Error(m(310));
      yt = n, n = { memoizedState: yt.memoizedState, baseState: yt.baseState, baseQueue: yt.baseQueue, queue: yt.queue, next: null }, Lt === null ? Ke.memoizedState = Lt = n : Lt = Lt.next = n;
    }
    return Lt;
  }
  function Ua(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ul(n) {
    var r = Dr(), l = r.queue;
    if (l === null) throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = yt, f = u.baseQueue, p = l.pending;
    if (p !== null) {
      if (f !== null) {
        var E = f.next;
        f.next = p.next, p.next = E;
      }
      u.baseQueue = f = p, l.pending = null;
    }
    if (f !== null) {
      p = f.next, u = u.baseState;
      var b = E = null, L = null, X = p;
      do {
        var se = X.lane;
        if ((We & se) === se) L !== null && (L = L.next = { lane: 0, action: X.action, hasEagerState: X.hasEagerState, eagerState: X.eagerState, next: null }), u = X.hasEagerState ? X.eagerState : n(u, X.action);
        else {
          var ce = {
            lane: se,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          };
          L === null ? (b = L = ce, E = u) : L = L.next = ce, Ke.lanes |= se, Fo |= se;
        }
        X = X.next;
      } while (X !== null && X !== p);
      L === null ? E = u : L.next = b, $a(u, r.memoizedState) || (Ea = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = L, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      f = n;
      do
        p = f.lane, Ke.lanes |= p, Fo |= p, f = f.next;
      while (f !== n);
    } else f === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ja(n) {
    var r = Dr(), l = r.queue;
    if (l === null) throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, f = l.pending, p = r.memoizedState;
    if (f !== null) {
      l.pending = null;
      var E = f = f.next;
      do
        p = n(p, E.action), E = E.next;
      while (E !== f);
      $a(p, r.memoizedState) || (Ea = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), l.lastRenderedState = p;
    }
    return [p, u];
  }
  function Du() {
  }
  function ko(n, r) {
    var l = Ke, u = Dr(), f = r(), p = !$a(u.memoizedState, f);
    if (p && (u.memoizedState = f, Ea = !0), u = u.queue, js(tf.bind(null, l, u, n), [n]), u.getSnapshot !== r || p || Lt !== null && Lt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Oo(9, ef.bind(null, l, u, f, r), void 0, null), $n === null) throw Error(m(349));
      We & 30 || _u(l, r, f);
    }
    return f;
  }
  function _u(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ke.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ke.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function ef(n, r, l, u) {
    r.value = l, r.getSnapshot = u, nf(r) && rf(n);
  }
  function tf(n, r, l) {
    return l(function() {
      nf(r) && rf(n);
    });
  }
  function nf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !$a(n, l);
    } catch {
      return !0;
    }
  }
  function rf(n) {
    var r = ol(n, 1);
    r !== null && An(r, n, 1, -1);
  }
  function af(n) {
    var r = Je();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ua, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vs.bind(null, Ke, n), [r.memoizedState, n];
  }
  function Oo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = Ke.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ke.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function lf() {
    return Dr().memoizedState;
  }
  function ku(n, r, l, u) {
    var f = Je();
    Ke.flags |= n, f.memoizedState = Oo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Ou(n, r, l, u) {
    var f = Dr();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (yt !== null) {
      var E = yt.memoizedState;
      if (p = E.destroy, u !== null && Hs(u, E.deps)) {
        f.memoizedState = Oo(r, l, p, u);
        return;
      }
    }
    Ke.flags |= n, f.memoizedState = Oo(1 | r, l, p, u);
  }
  function of(n, r) {
    return ku(8390656, 8, n, r);
  }
  function js(n, r) {
    return Ou(2048, 8, n, r);
  }
  function uf(n, r) {
    return Ou(4, 2, n, r);
  }
  function sf(n, r) {
    return Ou(4, 4, n, r);
  }
  function cf(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function ff(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ou(4, 4, cf.bind(null, r, n), l);
  }
  function Lu() {
  }
  function Lo(n, r) {
    var l = Dr();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Hs(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function df(n, r) {
    var l = Dr();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Hs(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function pf(n, r, l) {
    return We & 21 ? ($a(l, r) || (l = au(), Ke.lanes |= l, Fo |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Ea = !0), n.memoizedState = l);
  }
  function rp(n, r) {
    var l = Wt;
    Wt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Fs.transition;
    Fs.transition = {};
    try {
      n(!1), r();
    } finally {
      Wt = l, Fs.transition = u;
    }
  }
  function vf() {
    return Dr().memoizedState;
  }
  function mh(n, r, l) {
    var u = fl(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, ap(n)) Nu(r, l);
    else if (l = dh(n, r, l, u), l !== null) {
      var f = Cr();
      An(l, n, u, f), Ql(l, r, u);
    }
  }
  function Vs(n, r, l) {
    var u = fl(n), f = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ap(n)) Nu(r, f);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null)) try {
        var E = r.lastRenderedState, b = p(E, l);
        if (f.hasEagerState = !0, f.eagerState = b, $a(b, E)) {
          var L = r.interleaved;
          L === null ? (f.next = f, tr(r)) : (f.next = L.next, L.next = f), r.interleaved = f;
          return;
        }
      } catch {
      } finally {
      }
      l = dh(n, r, f, u), l !== null && (f = Cr(), An(l, n, u, f), Ql(l, r, u));
    }
  }
  function ap(n) {
    var r = n.alternate;
    return n === Ke || r !== null && r === Ke;
  }
  function Nu(n, r) {
    xu = Ma = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ql(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, ki(n, l);
    }
  }
  var Ir = { readContext: qa, useCallback: Br, useContext: Br, useEffect: Br, useImperativeHandle: Br, useInsertionEffect: Br, useLayoutEffect: Br, useMemo: Br, useReducer: Br, useRef: Br, useState: Br, useDebugValue: Br, useDeferredValue: Br, useTransition: Br, useMutableSource: Br, useSyncExternalStore: Br, useId: Br, unstable_isNewReconciler: !1 }, eg = { readContext: qa, useCallback: function(n, r) {
    return Je().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: qa, useEffect: of, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ku(
      4194308,
      4,
      cf.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ku(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ku(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Je();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = Je();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = mh.bind(null, Ke, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Je();
    return n = { current: n }, r.memoizedState = n;
  }, useState: af, useDebugValue: Lu, useDeferredValue: function(n) {
    return Je().memoizedState = n;
  }, useTransition: function() {
    var n = af(!1), r = n[0];
    return n = rp.bind(null, n[1]), Je().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = Ke, f = Je();
    if (Tn) {
      if (l === void 0) throw Error(m(407));
      l = l();
    } else {
      if (l = r(), $n === null) throw Error(m(349));
      We & 30 || _u(u, r, l);
    }
    f.memoizedState = l;
    var p = { value: l, getSnapshot: r };
    return f.queue = p, of(tf.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, Oo(9, ef.bind(null, u, p, l, r), void 0, null), l;
  }, useId: function() {
    var n = Je(), r = $n.identifierPrefix;
    if (Tn) {
      var l = il, u = xr;
      l = (u & ~(1 << 32 - jn(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ps++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Zy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cn = {
    readContext: qa,
    useCallback: Lo,
    useContext: qa,
    useEffect: js,
    useImperativeHandle: ff,
    useInsertionEffect: uf,
    useLayoutEffect: sf,
    useMemo: df,
    useReducer: ul,
    useRef: lf,
    useState: function() {
      return ul(Ua);
    },
    useDebugValue: Lu,
    useDeferredValue: function(n) {
      var r = Dr();
      return pf(r, yt.memoizedState, n);
    },
    useTransition: function() {
      var n = ul(Ua)[0], r = Dr().memoizedState;
      return [n, r];
    },
    useMutableSource: Du,
    useSyncExternalStore: ko,
    useId: vf,
    unstable_isNewReconciler: !1
  }, hf = { readContext: qa, useCallback: Lo, useContext: qa, useEffect: js, useImperativeHandle: ff, useInsertionEffect: uf, useLayoutEffect: sf, useMemo: df, useReducer: Ja, useRef: lf, useState: function() {
    return Ja(Ua);
  }, useDebugValue: Lu, useDeferredValue: function(n) {
    var r = Dr();
    return yt === null ? r.memoizedState = n : pf(r, yt.memoizedState, n);
  }, useTransition: function() {
    var n = Ja(Ua)[0], r = Dr().memoizedState;
    return [n, r];
  }, useMutableSource: Du, useSyncExternalStore: ko, useId: vf, unstable_isNewReconciler: !1 };
  function Sa(n, r) {
    if (n && n.defaultProps) {
      r = ge({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function No(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : ge({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Mo = { isMounted: function(n) {
    return (n = n._reactInternals) ? vt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = Cr(), f = fl(n), p = ga(u, f);
    p.payload = r, l != null && (p.callback = l), r = Yl(n, p, f), r !== null && (An(r, n, f, u), Kc(r, n, f));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = Cr(), f = fl(n), p = ga(u, f);
    p.tag = 1, p.payload = r, l != null && (p.callback = l), r = Yl(n, p, f), r !== null && (An(r, n, f, u), Kc(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cr(), u = fl(n), f = ga(l, u);
    f.tag = 2, r != null && (f.callback = r), r = Yl(n, f, u), r !== null && (An(r, n, u, l), Kc(r, n, u));
  } };
  function yh(n, r, l, u, f, p, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, E) : r.prototype && r.prototype.isPureReactComponent ? !ws(l, u) || !ws(f, p) : !0;
  }
  function gh(n, r, l) {
    var u = !1, f = Ni, p = r.contextType;
    return typeof p == "object" && p !== null ? p = qa(p) : (f = kn(r) ? pa : mt.current, u = r.contextTypes, p = (u = u != null) ? Qa(n, f) : Ni), r = new r(l, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Mo, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function Sh(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Mo.enqueueReplaceState(r, r.state, null);
  }
  function ip(n, r, l, u) {
    var f = n.stateNode;
    f.props = l, f.state = n.memoizedState, f.refs = {}, Gc(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? f.context = qa(p) : (p = kn(r) ? pa : mt.current, f.context = Qa(n, p)), f.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (No(n, r, p, l), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && Mo.enqueueReplaceState(f, f.state, null), Xc(n, l, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Wl(n, r) {
    try {
      var l = "", u = r;
      do
        l += gt(u), u = u.return;
      while (u);
      var f = l;
    } catch (p) {
      f = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function lp(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Bs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Eh = typeof WeakMap == "function" ? WeakMap : Map;
  function Ch(n, r, l) {
    l = ga(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Df || (Df = !0, hp = u), Bs(n, r);
    }, l;
  }
  function Rh(n, r, l) {
    l = ga(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      l.payload = function() {
        return u(f);
      }, l.callback = function() {
        Bs(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
      Bs(n, r), typeof u != "function" && (ti === null ? ti = /* @__PURE__ */ new Set([this]) : ti.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), l;
  }
  function Is(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Eh();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(l) || (f.add(l), n = cg.bind(null, n, r, l), r.then(n, n));
  }
  function wh(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function op(n, r, l, u, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ga(-1, 1), r.tag = 2, Yl(l, r, 1))), l.lanes |= 1), n);
  }
  var Th = be.ReactCurrentOwner, Ea = !1;
  function Gn(n, r, l, u) {
    r.child = n === null ? fh(r, null, l, u) : Cu(r, n.child, l, u);
  }
  function Mu(n, r, l, u, f) {
    l = l.render;
    var p = r.ref;
    return Ru(r, f), u = le(n, r, l, u, p, f), l = nr(), n !== null && !Ea ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Kn(n, r, f)) : (Tn && l && Bc(r), r.flags |= 1, Gn(n, r, u, f), r.child);
  }
  function Gl(n, r, l, u, f) {
    if (n === null) {
      var p = l.type;
      return typeof p == "function" && !Ep(p) && p.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = p, mf(n, r, p, u, f)) : (n = Mf(l.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & f)) {
      var E = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ws, l(E, u) && n.ref === r.ref) return Kn(n, r, f);
    }
    return r.flags |= 1, n = ql(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function mf(n, r, l, u, f) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (ws(p, u) && n.ref === r.ref) if (Ea = !1, r.pendingProps = u = p, (n.lanes & f) !== 0) n.flags & 131072 && (Ea = !0);
      else return r.lanes = n.lanes, Kn(n, r, f);
    }
    return bt(n, r, l, u, f);
  }
  function Ca(n, r, l) {
    var u = r.pendingProps, f = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nn(Iu, Ra), Ra |= l;
    else {
      if (!(l & 1073741824)) return n = p !== null ? p.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, nn(Iu, Ra), Ra |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : l, nn(Iu, Ra), Ra |= u;
    }
    else p !== null ? (u = p.baseLanes | l, r.memoizedState = null) : u = l, nn(Iu, Ra), Ra |= u;
    return Gn(n, r, f, l), r.child;
  }
  function Uo(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function bt(n, r, l, u, f) {
    var p = kn(l) ? pa : mt.current;
    return p = Qa(r, p), Ru(r, f), l = le(n, r, l, u, p, f), u = nr(), n !== null && !Ea ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, Kn(n, r, f)) : (Tn && u && Bc(r), r.flags |= 1, Gn(n, r, l, f), r.child);
  }
  function $s(n, r, l, u, f) {
    if (kn(l)) {
      var p = !0;
      Vc(r);
    } else p = !1;
    if (Ru(r, f), r.stateNode === null) Qs(n, r), gh(r, l, u), ip(r, l, u, f), u = !0;
    else if (n === null) {
      var E = r.stateNode, b = r.memoizedProps;
      E.props = b;
      var L = E.context, X = l.contextType;
      typeof X == "object" && X !== null ? X = qa(X) : (X = kn(l) ? pa : mt.current, X = Qa(r, X));
      var se = l.getDerivedStateFromProps, ce = typeof se == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ce || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (b !== u || L !== X) && Sh(r, E, u, X), $l = !1;
      var oe = r.memoizedState;
      E.state = oe, Xc(r, u, E, f), L = r.memoizedState, b !== u || oe !== L || Bn.current || $l ? (typeof se == "function" && (No(r, l, se, u), L = r.memoizedState), (b = $l || yh(r, l, b, u, oe, L, X)) ? (ce || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), E.props = u, E.state = L, E.context = X, u = b) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, wu(n, r), b = r.memoizedProps, X = r.type === r.elementType ? b : Sa(r.type, b), E.props = X, ce = r.pendingProps, oe = E.context, L = l.contextType, typeof L == "object" && L !== null ? L = qa(L) : (L = kn(l) ? pa : mt.current, L = Qa(r, L));
      var Ne = l.getDerivedStateFromProps;
      (se = typeof Ne == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (b !== ce || oe !== L) && Sh(r, E, u, L), $l = !1, oe = r.memoizedState, E.state = oe, Xc(r, u, E, f);
      var Be = r.memoizedState;
      b !== ce || oe !== Be || Bn.current || $l ? (typeof Ne == "function" && (No(r, l, Ne, u), Be = r.memoizedState), (X = $l || yh(r, l, X, u, oe, Be, L) || !1) ? (se || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, Be, L), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, Be, L)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || b === n.memoizedProps && oe === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && oe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Be), E.props = u, E.state = Be, E.context = L, u = X) : (typeof E.componentDidUpdate != "function" || b === n.memoizedProps && oe === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && oe === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return yf(n, r, l, u, p, f);
  }
  function yf(n, r, l, u, f, p) {
    Uo(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E) return f && lh(r, l, !1), Kn(n, r, p);
    u = r.stateNode, Th.current = r;
    var b = E && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = Cu(r, n.child, null, p), r.child = Cu(r, null, b, p)) : Gn(n, r, b, p), r.memoizedState = u.state, f && lh(r, l, !0), r.child;
  }
  function tg(n) {
    var r = n.stateNode;
    r.pendingContext ? Bl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Bl(n, r.context, !1), ep(n, r.containerInfo);
  }
  function bh(n, r, l, u, f) {
    return zn(), qd(f), r.flags |= 256, Gn(n, r, l, u), r.child;
  }
  var Ys = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zo(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function xh(n, r, l) {
    var u = r.pendingProps, f = On.current, p = !1, E = (r.flags & 128) !== 0, b;
    if ((b = E) || (b = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), b ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), nn(On, f & 1), n === null)
      return $c(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, E = { mode: "hidden", children: E }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = E) : p = Uf(E, u, 0, null), n = Vo(n, u, l, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = zo(l), r.memoizedState = Ys, n) : gf(r, E));
    if (f = n.memoizedState, f !== null && (b = f.dehydrated, b !== null)) return up(n, r, E, u, b, f, l);
    if (p) {
      p = u.fallback, E = r.mode, f = n.child, b = f.sibling;
      var L = { mode: "hidden", children: u.children };
      return !(E & 1) && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = ql(f, L), u.subtreeFlags = f.subtreeFlags & 14680064), b !== null ? p = ql(b, p) : (p = Vo(p, E, l, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, E = n.child.memoizedState, E = E === null ? zo(l) : { baseLanes: E.baseLanes | l, cachePool: null, transitions: E.transitions }, p.memoizedState = E, p.childLanes = n.childLanes & ~l, r.memoizedState = Ys, u;
    }
    return p = n.child, n = p.sibling, u = ql(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function gf(n, r) {
    return r = Uf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Sf(n, r, l, u) {
    return u !== null && qd(u), Cu(r, n.child, null, l), n = gf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function up(n, r, l, u, f, p, E) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = lp(Error(m(422))), Sf(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, f = r.mode, u = Uf({ mode: "visible", children: u.children }, f, 0, null), p = Vo(p, f, E, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && Cu(r, n.child, null, E), r.child.memoizedState = zo(E), r.memoizedState = Ys, p);
    if (!(r.mode & 1)) return Sf(n, r, E, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var b = u.dgst;
      return u = b, p = Error(m(419)), u = lp(p, u, void 0), Sf(n, r, E, u);
    }
    if (b = (E & n.childLanes) !== 0, Ea || b) {
      if (u = $n, u !== null) {
        switch (E & -E) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (u.suspendedLanes | E) ? 0 : f, f !== 0 && f !== p.retryLane && (p.retryLane = f, ol(n, f), An(u, n, f, -1));
      }
      return qs(), u = lp(Error(m(421))), Sf(n, r, E, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Sp.bind(null, n), f._reactRetry = r, null) : (n = p.treeContext, ya = Si(f.nextSibling), La = r, Tn = !0, Ka = null, n !== null && (ma[Vr++] = xr, ma[Vr++] = il, ma[Vr++] = Ga, xr = n.id, il = n.overflow, Ga = r), r = gf(r, u.children), r.flags |= 4096, r);
  }
  function Dh(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Zd(n.return, r, l);
  }
  function Ef(n, r, l, u, f) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: f } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = l, p.tailMode = f);
  }
  function sp(n, r, l) {
    var u = r.pendingProps, f = u.revealOrder, p = u.tail;
    if (Gn(n, r, u.children, l), u = On.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Dh(n, l, r);
        else if (n.tag === 19) Dh(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (nn(On, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (l = r.child, f = null; l !== null; ) n = l.alternate, n !== null && qc(n) === null && (f = l), l = l.sibling;
        l = f, l === null ? (f = r.child, r.child = null) : (f = l.sibling, l.sibling = null), Ef(r, !1, f, l, p);
        break;
      case "backwards":
        for (l = null, f = r.child, r.child = null; f !== null; ) {
          if (n = f.alternate, n !== null && qc(n) === null) {
            r.child = f;
            break;
          }
          n = f.sibling, f.sibling = l, l = f, f = n;
        }
        Ef(r, !0, l, null, p);
        break;
      case "together":
        Ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Qs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Kn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Fo |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = ql(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = ql(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function sl(n, r, l) {
    switch (r.tag) {
      case 3:
        tg(r), zn();
        break;
      case 5:
        hh(r);
        break;
      case 1:
        kn(r.type) && Vc(r);
        break;
      case 4:
        ep(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        nn(ll, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (nn(On, On.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? xh(n, r, l) : (nn(On, On.current & 1), n = Kn(n, r, l), n !== null ? n.sibling : null);
        nn(On, On.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u) return sp(n, r, l);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), nn(On, On.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ca(n, r, l);
    }
    return Kn(n, r, l);
  }
  var Ui, Uu, zu, Za;
  Ui = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Uu = function() {
  }, zu = function(n, r, l, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, _o(Ei.current);
      var p = null;
      switch (l) {
        case "input":
          f = vr(n, f), u = vr(n, u), p = [];
          break;
        case "select":
          f = ge({}, f, { value: void 0 }), u = ge({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          f = ja(n, f), u = ja(n, u), p = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = jc);
      }
      Wn(l, u);
      var E;
      l = null;
      for (X in f) if (!u.hasOwnProperty(X) && f.hasOwnProperty(X) && f[X] != null) if (X === "style") {
        var b = f[X];
        for (E in b) b.hasOwnProperty(E) && (l || (l = {}), l[E] = "");
      } else X !== "dangerouslySetInnerHTML" && X !== "children" && X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && X !== "autoFocus" && (w.hasOwnProperty(X) ? p || (p = []) : (p = p || []).push(X, null));
      for (X in u) {
        var L = u[X];
        if (b = f != null ? f[X] : void 0, u.hasOwnProperty(X) && L !== b && (L != null || b != null)) if (X === "style") if (b) {
          for (E in b) !b.hasOwnProperty(E) || L && L.hasOwnProperty(E) || (l || (l = {}), l[E] = "");
          for (E in L) L.hasOwnProperty(E) && b[E] !== L[E] && (l || (l = {}), l[E] = L[E]);
        } else l || (p || (p = []), p.push(
          X,
          l
        )), l = L;
        else X === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, b = b ? b.__html : void 0, L != null && b !== L && (p = p || []).push(X, L)) : X === "children" ? typeof L != "string" && typeof L != "number" || (p = p || []).push(X, "" + L) : X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && (w.hasOwnProperty(X) ? (L != null && X === "onScroll" && mn("scroll", n), p || b === L || (p = [])) : (p = p || []).push(X, L));
      }
      l && (p = p || []).push("style", l);
      var X = p;
      (r.updateQueue = X) && (r.flags |= 4);
    }
  }, Za = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function In(n, r) {
    if (!Tn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function $r(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var f = n.child; f !== null; ) l |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else for (f = n.child; f !== null; ) l |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function ng(n, r, l) {
    var u = r.pendingProps;
    switch (Kd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $r(r), null;
      case 1:
        return kn(r.type) && Wa(), $r(r), null;
      case 3:
        return u = r.stateNode, bu(), Zt(Bn), Zt(mt), np(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ka !== null && (mp(Ka), Ka = null))), Uu(n, r), $r(r), null;
      case 5:
        tp(r);
        var f = _o(As.current);
        if (l = r.type, n !== null && r.stateNode != null) zu(n, r, l, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(m(166));
            return $r(r), null;
          }
          if (n = _o(Ei.current), Yc(r)) {
            u = r.stateNode, l = r.type;
            var p = r.memoizedProps;
            switch (u[Li] = r, u[To] = p, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                mn("cancel", u), mn("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                mn("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Ds.length; f++) mn(Ds[f], u);
                break;
              case "source":
                mn("error", u);
                break;
              case "img":
              case "image":
              case "link":
                mn(
                  "error",
                  u
                ), mn("load", u);
                break;
              case "details":
                mn("toggle", u);
                break;
              case "input":
                Pn(u, p), mn("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, mn("invalid", u);
                break;
              case "textarea":
                Hn(u, p), mn("invalid", u);
            }
            Wn(l, p), f = null;
            for (var E in p) if (p.hasOwnProperty(E)) {
              var b = p[E];
              E === "children" ? typeof b == "string" ? u.textContent !== b && (p.suppressHydrationWarning !== !0 && Hc(u.textContent, b, n), f = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (p.suppressHydrationWarning !== !0 && Hc(
                u.textContent,
                b,
                n
              ), f = ["children", "" + b]) : w.hasOwnProperty(E) && b != null && E === "onScroll" && mn("scroll", u);
            }
            switch (l) {
              case "input":
                en(u), ua(u, p, !0);
                break;
              case "textarea":
                en(u), br(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = jc);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Qr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(l, { is: u.is }) : (n = E.createElement(l), l === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, l), n[Li] = r, n[To] = u, Ui(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = _n(l, u), l) {
                case "dialog":
                  mn("cancel", n), mn("close", n), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  mn("load", n), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Ds.length; f++) mn(Ds[f], n);
                  f = u;
                  break;
                case "source":
                  mn("error", n), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  mn(
                    "error",
                    n
                  ), mn("load", n), f = u;
                  break;
                case "details":
                  mn("toggle", n), f = u;
                  break;
                case "input":
                  Pn(n, u), f = vr(n, u), mn("invalid", n);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = ge({}, u, { value: void 0 }), mn("invalid", n);
                  break;
                case "textarea":
                  Hn(n, u), f = ja(n, u), mn("invalid", n);
                  break;
                default:
                  f = u;
              }
              Wn(l, f), b = f;
              for (p in b) if (b.hasOwnProperty(p)) {
                var L = b[p];
                p === "style" ? Qt(n, L) : p === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && xi(n, L)) : p === "children" ? typeof L == "string" ? (l !== "textarea" || L !== "") && Wr(n, L) : typeof L == "number" && Wr(n, "" + L) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (w.hasOwnProperty(p) ? L != null && p === "onScroll" && mn("scroll", n) : L != null && ye(n, p, L, E));
              }
              switch (l) {
                case "input":
                  en(n), ua(n, u, !1);
                  break;
                case "textarea":
                  en(n), br(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + zt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? Hr(n, !!u.multiple, p, !1) : u.defaultValue != null && Hr(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = jc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return $r(r), null;
      case 6:
        if (n && r.stateNode != null) Za(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(m(166));
          if (l = _o(As.current), _o(Ei.current), Yc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Li] = r, (p = u.nodeValue !== l) && (n = La, n !== null)) switch (n.tag) {
              case 3:
                Hc(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Hc(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            p && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Li] = r, r.stateNode = u;
        }
        return $r(r), null;
      case 13:
        if (Zt(On), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Tn && ya !== null && r.mode & 1 && !(r.flags & 128)) sh(), zn(), r.flags |= 98560, p = !1;
          else if (p = Yc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p) throw Error(m(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(m(317));
              p[Li] = r;
            } else zn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            $r(r), p = !1;
          } else Ka !== null && (mp(Ka), Ka = null), p = !0;
          if (!p) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || On.current & 1 ? ur === 0 && (ur = 3) : qs())), r.updateQueue !== null && (r.flags |= 4), $r(r), null);
      case 4:
        return bu(), Uu(n, r), n === null && gu(r.stateNode.containerInfo), $r(r), null;
      case 10:
        return Jd(r.type._context), $r(r), null;
      case 17:
        return kn(r.type) && Wa(), $r(r), null;
      case 19:
        if (Zt(On), p = r.memoizedState, p === null) return $r(r), null;
        if (u = (r.flags & 128) !== 0, E = p.rendering, E === null) if (u) In(p, !1);
        else {
          if (ur !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (E = qc(n), E !== null) {
              for (r.flags |= 128, In(p, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) p = l, n = u, p.flags &= 14680066, E = p.alternate, E === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = E.childLanes, p.lanes = E.lanes, p.child = E.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = E.memoizedProps, p.memoizedState = E.memoizedState, p.updateQueue = E.updateQueue, p.type = E.type, n = E.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return nn(On, On.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          p.tail !== null && sn() > Yu && (r.flags |= 128, u = !0, In(p, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = qc(E), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), In(p, !0), p.tail === null && p.tailMode === "hidden" && !E.alternate && !Tn) return $r(r), null;
          } else 2 * sn() - p.renderingStartTime > Yu && l !== 1073741824 && (r.flags |= 128, u = !0, In(p, !1), r.lanes = 4194304);
          p.isBackwards ? (E.sibling = r.child, r.child = E) : (l = p.last, l !== null ? l.sibling = E : r.child = E, p.last = E);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = sn(), r.sibling = null, l = On.current, nn(On, u ? l & 1 | 2 : l & 1), r) : ($r(r), null);
      case 22:
      case 23:
        return Lf(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Ra & 1073741824 && ($r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : $r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function rg(n, r) {
    switch (Kd(r), r.tag) {
      case 1:
        return kn(r.type) && Wa(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return bu(), Zt(Bn), Zt(mt), np(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return tp(r), null;
      case 13:
        if (Zt(On), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(m(340));
          zn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Zt(On), null;
      case 4:
        return bu(), null;
      case 10:
        return Jd(r.type._context), null;
      case 22:
      case 23:
        return Lf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Au = !1, _r = !1, Cf = typeof WeakSet == "function" ? WeakSet : Set, He = null;
  function Fu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      Yn(n, r, u);
    }
    else l.current = null;
  }
  function cp(n, r, l) {
    try {
      l();
    } catch (u) {
      Yn(n, r, u);
    }
  }
  var Rf = !1;
  function ag(n, r) {
    if (Vd = Ia, n = Uc(), tl(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var f = u.anchorOffset, p = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, p.nodeType;
          } catch {
            l = null;
            break e;
          }
          var E = 0, b = -1, L = -1, X = 0, se = 0, ce = n, oe = null;
          t: for (; ; ) {
            for (var Ne; ce !== l || f !== 0 && ce.nodeType !== 3 || (b = E + f), ce !== p || u !== 0 && ce.nodeType !== 3 || (L = E + u), ce.nodeType === 3 && (E += ce.nodeValue.length), (Ne = ce.firstChild) !== null; )
              oe = ce, ce = Ne;
            for (; ; ) {
              if (ce === n) break t;
              if (oe === l && ++X === f && (b = E), oe === p && ++se === u && (L = E), (Ne = ce.nextSibling) !== null) break;
              ce = oe, oe = ce.parentNode;
            }
            ce = Ne;
          }
          l = b === -1 || L === -1 ? null : { start: b, end: L };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ro = { focusedElem: n, selectionRange: l }, Ia = !1, He = r; He !== null; ) if (r = He, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, He = n;
    else for (; He !== null; ) {
      r = He;
      try {
        var Be = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Be !== null) {
              var Ye = Be.memoizedProps, Xn = Be.memoizedState, H = r.stateNode, U = H.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : Sa(r.type, Ye), Xn);
              H.__reactInternalSnapshotBeforeUpdate = U;
            }
            break;
          case 3:
            var Y = r.stateNode.containerInfo;
            Y.nodeType === 1 ? Y.textContent = "" : Y.nodeType === 9 && Y.documentElement && Y.removeChild(Y.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (me) {
        Yn(r, r.return, me);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, He = n;
        break;
      }
      He = r.return;
    }
    return Be = Rf, Rf = !1, Be;
  }
  function Pu(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var p = f.destroy;
          f.destroy = void 0, p !== void 0 && cp(r, l, p);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function wf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Tf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function _h(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, _h(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Li], delete r[To], delete r[$d], delete r[Jy], delete r[Yd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function fp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function kh(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || fp(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ws(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = jc));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ws(n, r, l), n = n.sibling; n !== null; ) Ws(n, r, l), n = n.sibling;
  }
  function Hu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Hu(n, r, l), n = n.sibling; n !== null; ) Hu(n, r, l), n = n.sibling;
  }
  var Ln = null, Sr = !1;
  function Jr(n, r, l) {
    for (l = l.child; l !== null; ) ju(n, r, l), l = l.sibling;
  }
  function ju(n, r, l) {
    if (Zn && typeof Zn.onCommitFiberUnmount == "function") try {
      Zn.onCommitFiberUnmount(Kr, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        _r || Fu(l, r);
      case 6:
        var u = Ln, f = Sr;
        Ln = null, Jr(n, r, l), Ln = u, Sr = f, Ln !== null && (Sr ? (n = Ln, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Ln.removeChild(l.stateNode));
        break;
      case 18:
        Ln !== null && (Sr ? (n = Ln, l = l.stateNode, n.nodeType === 8 ? Hl(n.parentNode, l) : n.nodeType === 1 && Hl(n, l), zl(n)) : Hl(Ln, l.stateNode));
        break;
      case 4:
        u = Ln, f = Sr, Ln = l.stateNode.containerInfo, Sr = !0, Jr(n, r, l), Ln = u, Sr = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_r && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var p = f, E = p.destroy;
            p = p.tag, E !== void 0 && (p & 2 || p & 4) && cp(l, r, E), f = f.next;
          } while (f !== u);
        }
        Jr(n, r, l);
        break;
      case 1:
        if (!_r && (Fu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (b) {
          Yn(l, r, b);
        }
        Jr(n, r, l);
        break;
      case 21:
        Jr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (_r = (u = _r) || l.memoizedState !== null, Jr(n, r, l), _r = u) : Jr(n, r, l);
        break;
      default:
        Jr(n, r, l);
    }
  }
  function Vu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Cf()), r.forEach(function(u) {
        var f = fg.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(f, f));
      });
    }
  }
  function Er(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var f = l[u];
      try {
        var p = n, E = r, b = E;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 5:
              Ln = b.stateNode, Sr = !1;
              break e;
            case 3:
              Ln = b.stateNode.containerInfo, Sr = !0;
              break e;
            case 4:
              Ln = b.stateNode.containerInfo, Sr = !0;
              break e;
          }
          b = b.return;
        }
        if (Ln === null) throw Error(m(160));
        ju(p, E, f), Ln = null, Sr = !1;
        var L = f.alternate;
        L !== null && (L.return = null), f.return = null;
      } catch (X) {
        Yn(f, r, X);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Oh(r, n), r = r.sibling;
  }
  function Oh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Er(r, n), zi(n), u & 4) {
          try {
            Pu(3, n, n.return), wf(3, n);
          } catch (Ye) {
            Yn(n, n.return, Ye);
          }
          try {
            Pu(5, n, n.return);
          } catch (Ye) {
            Yn(n, n.return, Ye);
          }
        }
        break;
      case 1:
        Er(r, n), zi(n), u & 512 && l !== null && Fu(l, l.return);
        break;
      case 5:
        if (Er(r, n), zi(n), u & 512 && l !== null && Fu(l, l.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            Wr(f, "");
          } catch (Ye) {
            Yn(n, n.return, Ye);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var p = n.memoizedProps, E = l !== null ? l.memoizedProps : p, b = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            b === "input" && p.type === "radio" && p.name != null && Pr(f, p), _n(b, E);
            var X = _n(b, p);
            for (E = 0; E < L.length; E += 2) {
              var se = L[E], ce = L[E + 1];
              se === "style" ? Qt(f, ce) : se === "dangerouslySetInnerHTML" ? xi(f, ce) : se === "children" ? Wr(f, ce) : ye(f, se, ce, X);
            }
            switch (b) {
              case "input":
                Jn(f, p);
                break;
              case "textarea":
                Tr(f, p);
                break;
              case "select":
                var oe = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!p.multiple;
                var Ne = p.value;
                Ne != null ? Hr(f, !!p.multiple, Ne, !1) : oe !== !!p.multiple && (p.defaultValue != null ? Hr(
                  f,
                  !!p.multiple,
                  p.defaultValue,
                  !0
                ) : Hr(f, !!p.multiple, p.multiple ? [] : "", !1));
            }
            f[To] = p;
          } catch (Ye) {
            Yn(n, n.return, Ye);
          }
        }
        break;
      case 6:
        if (Er(r, n), zi(n), u & 4) {
          if (n.stateNode === null) throw Error(m(162));
          f = n.stateNode, p = n.memoizedProps;
          try {
            f.nodeValue = p;
          } catch (Ye) {
            Yn(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (Er(r, n), zi(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          zl(r.containerInfo);
        } catch (Ye) {
          Yn(n, n.return, Ye);
        }
        break;
      case 4:
        Er(r, n), zi(n);
        break;
      case 13:
        Er(r, n), zi(n), f = n.child, f.flags & 8192 && (p = f.memoizedState !== null, f.stateNode.isHidden = p, !p || f.alternate !== null && f.alternate.memoizedState !== null || (xf = sn())), u & 4 && Vu(n);
        break;
      case 22:
        if (se = l !== null && l.memoizedState !== null, n.mode & 1 ? (_r = (X = _r) || se, Er(r, n), _r = X) : Er(r, n), zi(n), u & 8192) {
          if (X = n.memoizedState !== null, (n.stateNode.isHidden = X) && !se && n.mode & 1) for (He = n, se = n.child; se !== null; ) {
            for (ce = He = se; He !== null; ) {
              switch (oe = He, Ne = oe.child, oe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pu(4, oe, oe.return);
                  break;
                case 1:
                  Fu(oe, oe.return);
                  var Be = oe.stateNode;
                  if (typeof Be.componentWillUnmount == "function") {
                    u = oe, l = oe.return;
                    try {
                      r = u, Be.props = r.memoizedProps, Be.state = r.memoizedState, Be.componentWillUnmount();
                    } catch (Ye) {
                      Yn(u, l, Ye);
                    }
                  }
                  break;
                case 5:
                  Fu(oe, oe.return);
                  break;
                case 22:
                  if (oe.memoizedState !== null) {
                    Lh(ce);
                    continue;
                  }
              }
              Ne !== null ? (Ne.return = oe, He = Ne) : Lh(ce);
            }
            se = se.sibling;
          }
          e: for (se = null, ce = n; ; ) {
            if (ce.tag === 5) {
              if (se === null) {
                se = ce;
                try {
                  f = ce.stateNode, X ? (p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (b = ce.stateNode, L = ce.memoizedProps.style, E = L != null && L.hasOwnProperty("display") ? L.display : null, b.style.display = Dt("display", E));
                } catch (Ye) {
                  Yn(n, n.return, Ye);
                }
              }
            } else if (ce.tag === 6) {
              if (se === null) try {
                ce.stateNode.nodeValue = X ? "" : ce.memoizedProps;
              } catch (Ye) {
                Yn(n, n.return, Ye);
              }
            } else if ((ce.tag !== 22 && ce.tag !== 23 || ce.memoizedState === null || ce === n) && ce.child !== null) {
              ce.child.return = ce, ce = ce.child;
              continue;
            }
            if (ce === n) break e;
            for (; ce.sibling === null; ) {
              if (ce.return === null || ce.return === n) break e;
              se === ce && (se = null), ce = ce.return;
            }
            se === ce && (se = null), ce.sibling.return = ce.return, ce = ce.sibling;
          }
        }
        break;
      case 19:
        Er(r, n), zi(n), u & 4 && Vu(n);
        break;
      case 21:
        break;
      default:
        Er(
          r,
          n
        ), zi(n);
    }
  }
  function zi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (fp(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Wr(f, ""), u.flags &= -33);
            var p = kh(n);
            Hu(n, p, f);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, b = kh(n);
            Ws(n, b, E);
            break;
          default:
            throw Error(m(161));
        }
      } catch (L) {
        Yn(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ig(n, r, l) {
    He = n, dp(n);
  }
  function dp(n, r, l) {
    for (var u = (n.mode & 1) !== 0; He !== null; ) {
      var f = He, p = f.child;
      if (f.tag === 22 && u) {
        var E = f.memoizedState !== null || Au;
        if (!E) {
          var b = f.alternate, L = b !== null && b.memoizedState !== null || _r;
          b = Au;
          var X = _r;
          if (Au = E, (_r = L) && !X) for (He = f; He !== null; ) E = He, L = E.child, E.tag === 22 && E.memoizedState !== null ? pp(f) : L !== null ? (L.return = E, He = L) : pp(f);
          for (; p !== null; ) He = p, dp(p), p = p.sibling;
          He = f, Au = b, _r = X;
        }
        Bu(n);
      } else f.subtreeFlags & 8772 && p !== null ? (p.return = f, He = p) : Bu(n);
    }
  }
  function Bu(n) {
    for (; He !== null; ) {
      var r = He;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              _r || wf(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !_r) if (l === null) u.componentDidMount();
              else {
                var f = r.elementType === r.type ? l.memoizedProps : Sa(r.type, l.memoizedProps);
                u.componentDidUpdate(f, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var p = r.updateQueue;
              p !== null && vh(r, p, u);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                vh(r, E, l);
              }
              break;
            case 5:
              var b = r.stateNode;
              if (l === null && r.flags & 4) {
                l = b;
                var L = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    L.autoFocus && l.focus();
                    break;
                  case "img":
                    L.src && (l.src = L.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var X = r.alternate;
                if (X !== null) {
                  var se = X.memoizedState;
                  if (se !== null) {
                    var ce = se.dehydrated;
                    ce !== null && zl(ce);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          _r || r.flags & 512 && Tf(r);
        } catch (oe) {
          Yn(r, r.return, oe);
        }
      }
      if (r === n) {
        He = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, He = l;
        break;
      }
      He = r.return;
    }
  }
  function Lh(n) {
    for (; He !== null; ) {
      var r = He;
      if (r === n) {
        He = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, He = l;
        break;
      }
      He = r.return;
    }
  }
  function pp(n) {
    for (; He !== null; ) {
      var r = He;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              wf(4, r);
            } catch (L) {
              Yn(r, l, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                Yn(r, f, L);
              }
            }
            var p = r.return;
            try {
              Tf(r);
            } catch (L) {
              Yn(r, p, L);
            }
            break;
          case 5:
            var E = r.return;
            try {
              Tf(r);
            } catch (L) {
              Yn(r, E, L);
            }
        }
      } catch (L) {
        Yn(r, r.return, L);
      }
      if (r === n) {
        He = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, He = b;
        break;
      }
      He = r.return;
    }
  }
  var lg = Math.ceil, Ao = be.ReactCurrentDispatcher, bf = be.ReactCurrentOwner, ei = be.ReactCurrentBatchConfig, At = 0, $n = null, bn = null, or = 0, Ra = 0, Iu = xt(0), ur = 0, Gs = null, Fo = 0, $u = 0, vp = 0, Kl = null, Yr = null, xf = 0, Yu = 1 / 0, cl = null, Df = !1, hp = null, ti = null, Qu = !1, ni = null, _f = 0, Ks = 0, kf = null, Xs = -1, Po = 0;
  function Cr() {
    return At & 6 ? sn() : Xs !== -1 ? Xs : Xs = sn();
  }
  function fl(n) {
    return n.mode & 1 ? At & 2 && or !== 0 ? or & -or : Qc.transition !== null ? (Po === 0 && (Po = au()), Po) : (n = Wt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : gs(n.type)), n) : 1;
  }
  function An(n, r, l, u) {
    if (50 < Ks) throw Ks = 0, kf = null, Error(m(185));
    Ki(n, l, u), (!(At & 2) || n !== $n) && (n === $n && (!(At & 2) && ($u |= l), ur === 4 && Ai(n, or)), sr(n, u), l === 1 && At === 0 && !(r.mode & 1) && (Yu = sn() + 500, gr && va()));
  }
  function sr(n, r) {
    var l = n.callbackNode;
    Ll(n, r);
    var u = Xr(n, n === $n ? or : 0);
    if (u === 0) l !== null && _i(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && _i(l), r === 1) n.tag === 0 ? Wd(Wu.bind(null, n)) : Qd(Wu.bind(null, n)), Id(function() {
        !(At & 6) && va();
      }), l = null;
      else {
        switch (lu(u)) {
          case 1:
            l = ir;
            break;
          case 4:
            l = Tt;
            break;
          case 16:
            l = Gr;
            break;
          case 536870912:
            l = an;
            break;
          default:
            l = Gr;
        }
        l = Hh(l, Of.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Of(n, r) {
    if (Xs = -1, Po = 0, At & 6) throw Error(m(327));
    var l = n.callbackNode;
    if (Gu() && n.callbackNode !== l) return null;
    var u = Xr(n, n === $n ? or : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = Nf(n, u);
    else {
      r = u;
      var f = At;
      At |= 2;
      var p = Mh();
      ($n !== n || or !== r) && (cl = null, Yu = sn() + 500, jo(n, r));
      do
        try {
          ug();
          break;
        } catch (b) {
          Nh(n, b);
        }
      while (!0);
      Na(), Ao.current = p, At = f, bn !== null ? r = 0 : ($n = null, or = 0, r = ur);
    }
    if (r !== 0) {
      if (r === 2 && (f = Nl(n), f !== 0 && (u = f, r = Ho(n, f))), r === 1) throw l = Gs, jo(n, 0), Ai(n, u), sr(n, sn()), l;
      if (r === 6) Ai(n, u);
      else {
        if (f = n.current.alternate, !(u & 30) && !yp(f) && (r = Nf(n, u), r === 2 && (p = Nl(n), p !== 0 && (u = p, r = Ho(n, p))), r === 1)) throw l = Gs, jo(n, 0), Ai(n, u), sr(n, sn()), l;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Xl(n, Yr, cl);
            break;
          case 3:
            if (Ai(n, u), (u & 130023424) === u && (r = xf + 500 - sn(), 10 < r)) {
              if (Xr(n, 0) !== 0) break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                Cr(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = wo(Xl.bind(null, n, Yr, cl), r);
              break;
            }
            Xl(n, Yr, cl);
            break;
          case 4:
            if (Ai(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var E = 31 - jn(u);
              p = 1 << E, E = r[E], E > f && (f = E), u &= ~p;
            }
            if (u = f, u = sn() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * lg(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = wo(Xl.bind(null, n, Yr, cl), u);
              break;
            }
            Xl(n, Yr, cl);
            break;
          case 5:
            Xl(n, Yr, cl);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return sr(n, sn()), n.callbackNode === l ? Of.bind(null, n) : null;
  }
  function Ho(n, r) {
    var l = Kl;
    return n.current.memoizedState.isDehydrated && (jo(n, r).flags |= 256), n = Nf(n, r), n !== 2 && (r = Yr, Yr = l, r !== null && mp(r)), n;
  }
  function mp(n) {
    Yr === null ? Yr = n : Yr.push.apply(Yr, n);
  }
  function yp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var f = l[u], p = f.getSnapshot;
          f = f.value;
          try {
            if (!$a(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ai(n, r) {
    for (r &= ~vp, r &= ~$u, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - jn(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Wu(n) {
    if (At & 6) throw Error(m(327));
    Gu();
    var r = Xr(n, 0);
    if (!(r & 1)) return sr(n, sn()), null;
    var l = Nf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Nl(n);
      u !== 0 && (r = u, l = Ho(n, u));
    }
    if (l === 1) throw l = Gs, jo(n, 0), Ai(n, r), sr(n, sn()), l;
    if (l === 6) throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Xl(n, Yr, cl), sr(n, sn()), null;
  }
  function gp(n, r) {
    var l = At;
    At |= 1;
    try {
      return n(r);
    } finally {
      At = l, At === 0 && (Yu = sn() + 500, gr && va());
    }
  }
  function Fi(n) {
    ni !== null && ni.tag === 0 && !(At & 6) && Gu();
    var r = At;
    At |= 1;
    var l = ei.transition, u = Wt;
    try {
      if (ei.transition = null, Wt = 1, n) return n();
    } finally {
      Wt = u, ei.transition = l, At = r, !(At & 6) && va();
    }
  }
  function Lf() {
    Ra = Iu.current, Zt(Iu);
  }
  function jo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ih(l)), bn !== null) for (l = bn.return; l !== null; ) {
      var u = l;
      switch (Kd(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Wa();
          break;
        case 3:
          bu(), Zt(Bn), Zt(mt), np();
          break;
        case 5:
          tp(u);
          break;
        case 4:
          bu();
          break;
        case 13:
          Zt(On);
          break;
        case 19:
          Zt(On);
          break;
        case 10:
          Jd(u.type._context);
          break;
        case 22:
        case 23:
          Lf();
      }
      l = l.return;
    }
    if ($n = n, bn = n = ql(n.current, null), or = Ra = r, ur = 0, Gs = null, vp = $u = Fo = 0, Yr = Kl = null, Do !== null) {
      for (r = 0; r < Do.length; r++) if (l = Do[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var f = u.next, p = l.pending;
        if (p !== null) {
          var E = p.next;
          p.next = f, u.next = E;
        }
        l.pending = u;
      }
      Do = null;
    }
    return n;
  }
  function Nh(n, r) {
    do {
      var l = bn;
      try {
        if (Na(), Zc.current = Ir, Ma) {
          for (var u = Ke.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          Ma = !1;
        }
        if (We = 0, Lt = yt = Ke = null, xu = !1, Ps = 0, bf.current = null, l === null || l.return === null) {
          ur = 1, Gs = r, bn = null;
          break;
        }
        e: {
          var p = n, E = l.return, b = l, L = r;
          if (r = or, b.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var X = L, se = b, ce = se.tag;
            if (!(se.mode & 1) && (ce === 0 || ce === 11 || ce === 15)) {
              var oe = se.alternate;
              oe ? (se.updateQueue = oe.updateQueue, se.memoizedState = oe.memoizedState, se.lanes = oe.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var Ne = wh(E);
            if (Ne !== null) {
              Ne.flags &= -257, op(Ne, E, b, p, r), Ne.mode & 1 && Is(p, X, r), r = Ne, L = X;
              var Be = r.updateQueue;
              if (Be === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(L), r.updateQueue = Ye;
              } else Be.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                Is(p, X, r), qs();
                break e;
              }
              L = Error(m(426));
            }
          } else if (Tn && b.mode & 1) {
            var Xn = wh(E);
            if (Xn !== null) {
              !(Xn.flags & 65536) && (Xn.flags |= 256), op(Xn, E, b, p, r), qd(Wl(L, b));
              break e;
            }
          }
          p = L = Wl(L, b), ur !== 4 && (ur = 2), Kl === null ? Kl = [p] : Kl.push(p), p = E;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var H = Ch(p, L, r);
                ph(p, H);
                break e;
              case 1:
                b = L;
                var U = p.type, Y = p.stateNode;
                if (!(p.flags & 128) && (typeof U.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (ti === null || !ti.has(Y)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var me = Rh(p, b, r);
                  ph(p, me);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        zh(l);
      } catch (Ge) {
        r = Ge, bn === l && l !== null && (bn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Mh() {
    var n = Ao.current;
    return Ao.current = Ir, n === null ? Ir : n;
  }
  function qs() {
    (ur === 0 || ur === 3 || ur === 2) && (ur = 4), $n === null || !(Fo & 268435455) && !($u & 268435455) || Ai($n, or);
  }
  function Nf(n, r) {
    var l = At;
    At |= 2;
    var u = Mh();
    ($n !== n || or !== r) && (cl = null, jo(n, r));
    do
      try {
        og();
        break;
      } catch (f) {
        Nh(n, f);
      }
    while (!0);
    if (Na(), At = l, Ao.current = u, bn !== null) throw Error(m(261));
    return $n = null, or = 0, ur;
  }
  function og() {
    for (; bn !== null; ) Uh(bn);
  }
  function ug() {
    for (; bn !== null && !_a(); ) Uh(bn);
  }
  function Uh(n) {
    var r = Ph(n.alternate, n, Ra);
    n.memoizedProps = n.pendingProps, r === null ? zh(n) : bn = r, bf.current = null;
  }
  function zh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = rg(l, r), l !== null) {
          l.flags &= 32767, bn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          ur = 6, bn = null;
          return;
        }
      } else if (l = ng(l, r, Ra), l !== null) {
        bn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        bn = r;
        return;
      }
      bn = r = n;
    } while (r !== null);
    ur === 0 && (ur = 5);
  }
  function Xl(n, r, l) {
    var u = Wt, f = ei.transition;
    try {
      ei.transition = null, Wt = 1, sg(n, r, l, u);
    } finally {
      ei.transition = f, Wt = u;
    }
    return null;
  }
  function sg(n, r, l, u) {
    do
      Gu();
    while (ni !== null);
    if (At & 6) throw Error(m(327));
    l = n.finishedWork;
    var f = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = l.lanes | l.childLanes;
    if (Rd(n, p), n === $n && (bn = $n = null, or = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Qu || (Qu = !0, Hh(Gr, function() {
      return Gu(), null;
    })), p = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || p) {
      p = ei.transition, ei.transition = null;
      var E = Wt;
      Wt = 1;
      var b = At;
      At |= 4, bf.current = null, ag(n, l), Oh(l, n), zc(Ro), Ia = !!Vd, Ro = Vd = null, n.current = l, ig(l), sa(), At = b, Wt = E, ei.transition = p;
    } else n.current = l;
    if (Qu && (Qu = !1, ni = n, _f = f), p = n.pendingLanes, p === 0 && (ti = null), Sn(l.stateNode), sr(n, sn()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) f = r[l], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (Df) throw Df = !1, n = hp, hp = null, n;
    return _f & 1 && n.tag !== 0 && Gu(), p = n.pendingLanes, p & 1 ? n === kf ? Ks++ : (Ks = 0, kf = n) : Ks = 0, va(), null;
  }
  function Gu() {
    if (ni !== null) {
      var n = lu(_f), r = ei.transition, l = Wt;
      try {
        if (ei.transition = null, Wt = 16 > n ? 16 : n, ni === null) var u = !1;
        else {
          if (n = ni, ni = null, _f = 0, At & 6) throw Error(m(331));
          var f = At;
          for (At |= 4, He = n.current; He !== null; ) {
            var p = He, E = p.child;
            if (He.flags & 16) {
              var b = p.deletions;
              if (b !== null) {
                for (var L = 0; L < b.length; L++) {
                  var X = b[L];
                  for (He = X; He !== null; ) {
                    var se = He;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pu(8, se, p);
                    }
                    var ce = se.child;
                    if (ce !== null) ce.return = se, He = ce;
                    else for (; He !== null; ) {
                      se = He;
                      var oe = se.sibling, Ne = se.return;
                      if (_h(se), se === X) {
                        He = null;
                        break;
                      }
                      if (oe !== null) {
                        oe.return = Ne, He = oe;
                        break;
                      }
                      He = Ne;
                    }
                  }
                }
                var Be = p.alternate;
                if (Be !== null) {
                  var Ye = Be.child;
                  if (Ye !== null) {
                    Be.child = null;
                    do {
                      var Xn = Ye.sibling;
                      Ye.sibling = null, Ye = Xn;
                    } while (Ye !== null);
                  }
                }
                He = p;
              }
            }
            if (p.subtreeFlags & 2064 && E !== null) E.return = p, He = E;
            else e: for (; He !== null; ) {
              if (p = He, p.flags & 2048) switch (p.tag) {
                case 0:
                case 11:
                case 15:
                  Pu(9, p, p.return);
              }
              var H = p.sibling;
              if (H !== null) {
                H.return = p.return, He = H;
                break e;
              }
              He = p.return;
            }
          }
          var U = n.current;
          for (He = U; He !== null; ) {
            E = He;
            var Y = E.child;
            if (E.subtreeFlags & 2064 && Y !== null) Y.return = E, He = Y;
            else e: for (E = U; He !== null; ) {
              if (b = He, b.flags & 2048) try {
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wf(9, b);
                }
              } catch (Ge) {
                Yn(b, b.return, Ge);
              }
              if (b === E) {
                He = null;
                break e;
              }
              var me = b.sibling;
              if (me !== null) {
                me.return = b.return, He = me;
                break e;
              }
              He = b.return;
            }
          }
          if (At = f, va(), Zn && typeof Zn.onPostCommitFiberRoot == "function") try {
            Zn.onPostCommitFiberRoot(Kr, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Wt = l, ei.transition = r;
      }
    }
    return !1;
  }
  function Ah(n, r, l) {
    r = Wl(l, r), r = Ch(n, r, 1), n = Yl(n, r, 1), r = Cr(), n !== null && (Ki(n, 1, r), sr(n, r));
  }
  function Yn(n, r, l) {
    if (n.tag === 3) Ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ti === null || !ti.has(u))) {
          n = Wl(l, n), n = Rh(r, n, 1), r = Yl(r, n, 1), n = Cr(), r !== null && (Ki(r, 1, n), sr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function cg(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Cr(), n.pingedLanes |= n.suspendedLanes & l, $n === n && (or & l) === l && (ur === 4 || ur === 3 && (or & 130023424) === or && 500 > sn() - xf ? jo(n, 0) : vp |= l), sr(n, r);
  }
  function Fh(n, r) {
    r === 0 && (n.mode & 1 ? (r = kl, kl <<= 1, !(kl & 130023424) && (kl = 4194304)) : r = 1);
    var l = Cr();
    n = ol(n, r), n !== null && (Ki(n, r, l), sr(n, l));
  }
  function Sp(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Fh(n, l);
  }
  function fg(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, f = n.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(r), Fh(n, l);
  }
  var Ph;
  Ph = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Bn.current) Ea = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Ea = !1, sl(n, r, l);
      Ea = !!(n.flags & 131072);
    }
    else Ea = !1, Tn && r.flags & 1048576 && Gd(r, Eu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Qs(n, r), n = r.pendingProps;
        var f = Qa(r, mt.current);
        Ru(r, l), f = le(null, r, u, n, f, l);
        var p = nr();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, kn(u) ? (p = !0, Vc(r)) : p = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Gc(r), f.updater = Mo, r.stateNode = f, f._reactInternals = r, ip(r, u, n, l), r = yf(null, r, u, !0, p, l)) : (r.tag = 0, Tn && p && Bc(r), Gn(null, r, f, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Qs(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = dg(u), n = Sa(u, n), f) {
            case 0:
              r = bt(null, r, u, n, l);
              break e;
            case 1:
              r = $s(null, r, u, n, l);
              break e;
            case 11:
              r = Mu(null, r, u, n, l);
              break e;
            case 14:
              r = Gl(null, r, u, Sa(u.type, n), l);
              break e;
          }
          throw Error(m(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Sa(u, f), bt(n, r, u, f, l);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Sa(u, f), $s(n, r, u, f, l);
      case 3:
        e: {
          if (tg(r), n === null) throw Error(m(387));
          u = r.pendingProps, p = r.memoizedState, f = p.element, wu(n, r), Xc(r, u, null, l);
          var E = r.memoizedState;
          if (u = E.element, p.isDehydrated) if (p = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
            f = Wl(Error(m(423)), r), r = bh(n, r, u, l, f);
            break e;
          } else if (u !== f) {
            f = Wl(Error(m(424)), r), r = bh(n, r, u, l, f);
            break e;
          } else for (ya = Si(r.stateNode.containerInfo.firstChild), La = r, Tn = !0, Ka = null, l = fh(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (zn(), u === f) {
              r = Kn(n, r, l);
              break e;
            }
            Gn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return hh(r), n === null && $c(r), u = r.type, f = r.pendingProps, p = n !== null ? n.memoizedProps : null, E = f.children, Os(u, f) ? E = null : p !== null && Os(u, p) && (r.flags |= 32), Uo(n, r), Gn(n, r, E, l), r.child;
      case 6:
        return n === null && $c(r), null;
      case 13:
        return xh(n, r, l);
      case 4:
        return ep(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Cu(r, null, u, l) : Gn(n, r, u, l), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Sa(u, f), Mu(n, r, u, f, l);
      case 7:
        return Gn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Gn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Gn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, p = r.memoizedProps, E = f.value, nn(ll, u._currentValue), u._currentValue = E, p !== null) if ($a(p.value, E)) {
            if (p.children === f.children && !Bn.current) {
              r = Kn(n, r, l);
              break e;
            }
          } else for (p = r.child, p !== null && (p.return = r); p !== null; ) {
            var b = p.dependencies;
            if (b !== null) {
              E = p.child;
              for (var L = b.firstContext; L !== null; ) {
                if (L.context === u) {
                  if (p.tag === 1) {
                    L = ga(-1, l & -l), L.tag = 2;
                    var X = p.updateQueue;
                    if (X !== null) {
                      X = X.shared;
                      var se = X.pending;
                      se === null ? L.next = L : (L.next = se.next, se.next = L), X.pending = L;
                    }
                  }
                  p.lanes |= l, L = p.alternate, L !== null && (L.lanes |= l), Zd(
                    p.return,
                    l,
                    r
                  ), b.lanes |= l;
                  break;
                }
                L = L.next;
              }
            } else if (p.tag === 10) E = p.type === r.type ? null : p.child;
            else if (p.tag === 18) {
              if (E = p.return, E === null) throw Error(m(341));
              E.lanes |= l, b = E.alternate, b !== null && (b.lanes |= l), Zd(E, l, r), E = p.sibling;
            } else E = p.child;
            if (E !== null) E.return = p;
            else for (E = p; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (p = E.sibling, p !== null) {
                p.return = E.return, E = p;
                break;
              }
              E = E.return;
            }
            p = E;
          }
          Gn(n, r, f.children, l), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, Ru(r, l), f = qa(f), u = u(f), r.flags |= 1, Gn(n, r, u, l), r.child;
      case 14:
        return u = r.type, f = Sa(u, r.pendingProps), f = Sa(u.type, f), Gl(n, r, u, f, l);
      case 15:
        return mf(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Sa(u, f), Qs(n, r), r.tag = 1, kn(u) ? (n = !0, Vc(r)) : n = !1, Ru(r, l), gh(r, u, f), ip(r, u, f, l), yf(null, r, u, !0, n, l);
      case 19:
        return sp(n, r, l);
      case 22:
        return Ca(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function Hh(n, r) {
    return Va(n, r);
  }
  function jh(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ri(n, r, l, u) {
    return new jh(n, r, l, u);
  }
  function Ep(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function dg(n) {
    if (typeof n == "function") return Ep(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Mt) return 11;
      if (n === qt) return 14;
    }
    return 2;
  }
  function ql(n, r) {
    var l = n.alternate;
    return l === null ? (l = ri(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Mf(n, r, l, u, f, p) {
    var E = 2;
    if (u = n, typeof n == "function") Ep(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case Fe:
        return Vo(l.children, f, p, r);
      case je:
        E = 8, f |= 8;
        break;
      case Ze:
        return n = ri(12, l, r, f | 2), n.elementType = Ze, n.lanes = p, n;
      case tt:
        return n = ri(13, l, r, f), n.elementType = tt, n.lanes = p, n;
      case it:
        return n = ri(19, l, r, f), n.elementType = it, n.lanes = p, n;
      case Se:
        return Uf(l, f, p, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case et:
            E = 10;
            break e;
          case pt:
            E = 9;
            break e;
          case Mt:
            E = 11;
            break e;
          case qt:
            E = 14;
            break e;
          case Pt:
            E = 16, u = null;
            break e;
        }
        throw Error(m(130, n == null ? n : typeof n, ""));
    }
    return r = ri(E, l, r, f), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function Vo(n, r, l, u) {
    return n = ri(7, n, u, r), n.lanes = l, n;
  }
  function Uf(n, r, l, u) {
    return n = ri(22, n, u, r), n.elementType = Se, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function zf(n, r, l) {
    return n = ri(6, n, null, r), n.lanes = l, n;
  }
  function Js(n, r, l) {
    return r = ri(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Zs(n, r, l, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = iu(0), this.expirationTimes = iu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = iu(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Cp(n, r, l, u, f, p, E, b, L) {
    return n = new Zs(n, r, l, b, L), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = ri(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Gc(p), n;
  }
  function Vh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: $, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function Rp(n) {
    if (!n) return Ni;
    n = n._reactInternals;
    e: {
      if (vt(n) !== n || n.tag !== 1) throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (kn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (kn(l)) return Ms(n, l, r);
    }
    return r;
  }
  function wp(n, r, l, u, f, p, E, b, L) {
    return n = Cp(l, u, !0, n, f, p, E, b, L), n.context = Rp(null), l = n.current, u = Cr(), f = fl(l), p = ga(u, f), p.callback = r ?? null, Yl(l, p, f), n.current.lanes = f, Ki(n, f, u), sr(n, u), n;
  }
  function Af(n, r, l, u) {
    var f = r.current, p = Cr(), E = fl(f);
    return l = Rp(l), r.context === null ? r.context = l : r.pendingContext = l, r = ga(p, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Yl(f, r, E), n !== null && (An(n, f, E, p), Kc(n, f, E)), E;
  }
  function ec(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Bh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Tp(n, r) {
    Bh(n, r), (n = n.alternate) && Bh(n, r);
  }
  function pg() {
    return null;
  }
  var bp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ff(n) {
    this._internalRoot = n;
  }
  tc.prototype.render = Ff.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(m(409));
    Af(n, r, null, null);
  }, tc.prototype.unmount = Ff.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Fi(function() {
        Af(null, n, null, null);
      }), r[al] = null;
    }
  };
  function tc(n) {
    this._internalRoot = n;
  }
  tc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = uu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < tn.length && r !== 0 && r < tn[l].priority; l++) ;
      tn.splice(l, 0, n), l === 0 && _c(n);
    }
  };
  function Jl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Pf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ih() {
  }
  function vg(n, r, l, u, f) {
    if (f) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var X = ec(E);
          p.call(X);
        };
      }
      var E = wp(r, u, n, 0, null, !1, !1, "", Ih);
      return n._reactRootContainer = E, n[al] = E.current, gu(n.nodeType === 8 ? n.parentNode : n), Fi(), E;
    }
    for (; f = n.lastChild; ) n.removeChild(f);
    if (typeof u == "function") {
      var b = u;
      u = function() {
        var X = ec(L);
        b.call(X);
      };
    }
    var L = Cp(n, 0, !1, null, null, !1, !1, "", Ih);
    return n._reactRootContainer = L, n[al] = L.current, gu(n.nodeType === 8 ? n.parentNode : n), Fi(function() {
      Af(r, L, l, u);
    }), L;
  }
  function Hf(n, r, l, u, f) {
    var p = l._reactRootContainer;
    if (p) {
      var E = p;
      if (typeof f == "function") {
        var b = f;
        f = function() {
          var L = ec(E);
          b.call(L);
        };
      }
      Af(r, E, n, f);
    } else E = vg(l, r, n, f, u);
    return ec(E);
  }
  ho = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = vi(r.pendingLanes);
          l !== 0 && (ki(r, l | 1), sr(r, sn()), !(At & 6) && (Yu = sn() + 500, va()));
        }
        break;
      case 13:
        Fi(function() {
          var u = ol(n, 1);
          if (u !== null) {
            var f = Cr();
            An(u, n, 1, f);
          }
        }), Tp(n, 1);
    }
  }, ou = function(n) {
    if (n.tag === 13) {
      var r = ol(n, 134217728);
      if (r !== null) {
        var l = Cr();
        An(r, n, 134217728, l);
      }
      Tp(n, 134217728);
    }
  }, jt = function(n) {
    if (n.tag === 13) {
      var r = fl(n), l = ol(n, r);
      if (l !== null) {
        var u = Cr();
        An(l, n, r, u);
      }
      Tp(n, r);
    }
  }, uu = function() {
    return Wt;
  }, su = function(n, r) {
    var l = Wt;
    try {
      return Wt = n, r();
    } finally {
      Wt = l;
    }
  }, jr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Jn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var f = rt(u);
              if (!f) throw Error(m(90));
              pr(u), Jn(u, f);
            }
          }
        }
        break;
      case "textarea":
        Tr(n, l);
        break;
      case "select":
        r = l.value, r != null && Hr(n, !!l.multiple, r, !1);
    }
  }, Qi = gp, Wi = Fi;
  var hg = { usingClientEntryPoint: !1, Events: [Ns, Su, rt, pi, Yi, gp] }, nc = { findFiberByHostInstance: Ya, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $h = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ht(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: nc.findFiberByHostInstance || pg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jf.isDisabled && jf.supportsFiber) try {
      Kr = jf.inject($h), Zn = jf;
    } catch {
    }
  }
  return si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hg, si.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Jl(r)) throw Error(m(200));
    return Vh(n, r, null, l);
  }, si.createRoot = function(n, r) {
    if (!Jl(n)) throw Error(m(299));
    var l = !1, u = "", f = bp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Cp(n, 1, !1, null, null, l, !1, u, f), n[al] = r.current, gu(n.nodeType === 8 ? n.parentNode : n), new Ff(r);
  }, si.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Ht(r), n = n === null ? null : n.stateNode, n;
  }, si.flushSync = function(n) {
    return Fi(n);
  }, si.hydrate = function(n, r, l) {
    if (!Pf(r)) throw Error(m(200));
    return Hf(null, n, r, !0, l);
  }, si.hydrateRoot = function(n, r, l) {
    if (!Jl(n)) throw Error(m(405));
    var u = l != null && l.hydratedSources || null, f = !1, p = "", E = bp;
    if (l != null && (l.unstable_strictMode === !0 && (f = !0), l.identifierPrefix !== void 0 && (p = l.identifierPrefix), l.onRecoverableError !== void 0 && (E = l.onRecoverableError)), r = wp(r, null, n, 1, l ?? null, f, !1, p, E), n[al] = r.current, gu(n), u) for (n = 0; n < u.length; n++) l = u[n], f = l._getVersion, f = f(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, f] : r.mutableSourceEagerHydrationData.push(
      l,
      f
    );
    return new tc(r);
  }, si.render = function(n, r, l) {
    if (!Pf(r)) throw Error(m(200));
    return Hf(null, n, r, !1, l);
  }, si.unmountComponentAtNode = function(n) {
    if (!Pf(n)) throw Error(m(40));
    return n._reactRootContainer ? (Fi(function() {
      Hf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[al] = null;
      });
    }), !0) : !1;
  }, si.unstable_batchedUpdates = gp, si.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Pf(l)) throw Error(m(200));
    if (n == null || n._reactInternals === void 0) throw Error(m(38));
    return Hf(n, r, l, !1, u);
  }, si.version = "18.3.1-next-f1338f8080-20240426", si;
}
var ci = {}, gw;
function cO() {
  return gw || (gw = 1, ft.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var c = re, v = Yw(), m = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, C = !1;
    function w(e) {
      C = e;
    }
    function x(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("warn", e, a);
      }
    }
    function y(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("error", e, a);
      }
    }
    function A(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var _ = 0, O = 1, B = 2, M = 3, I = 4, K = 5, ae = 6, ue = 7, pe = 8, Ae = 9, he = 10, ye = 11, be = 12, De = 13, $ = 14, Fe = 15, je = 16, Ze = 17, et = 18, pt = 19, Mt = 21, tt = 22, it = 23, qt = 24, Pt = 25, Se = !0, ve = !1, Qe = !1, ge = !1, F = !1, te = !0, nt = !1, qe = !0, gt = !0, St = !0, Ut = !0, zt = /* @__PURE__ */ new Set(), Nt = {}, Nn = {};
    function en(e, t) {
      pr(e, t), pr(e + "Capture", t);
    }
    function pr(e, t) {
      Nt[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Nt[e] = t;
      {
        var a = e.toLowerCase();
        Nn[a] = e, e === "onDoubleClick" && (Nn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        zt.add(t[i]);
    }
    var Dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vr = Object.prototype.hasOwnProperty;
    function Pn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Pr(e) {
      try {
        return Jn(e), !1;
      } catch {
        return !0;
      }
    }
    function Jn(e) {
      return "" + e;
    }
    function ua(e, t) {
      if (Pr(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), Jn(e);
    }
    function di(e) {
      if (Pr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pn(e)), Jn(e);
    }
    function hr(e, t) {
      if (Pr(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), Jn(e);
    }
    function Hr(e, t) {
      if (Pr(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), Jn(e);
    }
    function ja(e) {
      if (Pr(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Pn(e)), Jn(e);
    }
    function Hn(e) {
      if (Pr(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Pn(e)), Jn(e);
    }
    var Tr = 0, br = 1, Qr = 2, yn = 3, Mn = 4, xi = 5, Wr = 6, Ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ve = Ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Dt = new RegExp("^[" + Ee + "][" + Ve + "]*$"), Qt = {}, Jt = {};
    function Wn(e) {
      return vr.call(Jt, e) ? !0 : vr.call(Qt, e) ? !1 : Dt.test(e) ? (Jt[e] = !0, !0) : (Qt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function _n(e, t, a) {
      return t !== null ? t.type === Tr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ar(e, t, a, i) {
      if (a !== null && a.type === Tr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function on(e, t, a, i) {
      if (t === null || typeof t > "u" || ar(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case yn:
            return !t;
          case Mn:
            return t === !1;
          case xi:
            return isNaN(t);
          case Wr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function jr(e) {
      return un.hasOwnProperty(e) ? un[e] : null;
    }
    function dn(e, t, a, i, o, s, d) {
      this.acceptsBooleans = t === Qr || t === yn || t === Mn, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var un = {}, Di = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Di.forEach(function(e) {
      un[e] = new dn(
        e,
        Tr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      un[t] = new dn(
        t,
        br,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      un[e] = new dn(
        e,
        Qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      un[e] = new dn(
        e,
        Qr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      un[e] = new dn(
        e,
        yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new dn(
        e,
        yn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new dn(
        e,
        Mn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      un[e] = new dn(
        e,
        Wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      un[e] = new dn(
        e,
        xi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var pi = /[\-\:]([a-z])/g, Yi = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(pi, Yi);
      un[t] = new dn(
        t,
        br,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(pi, Yi);
      un[t] = new dn(
        t,
        br,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(pi, Yi);
      un[t] = new dn(
        t,
        br,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      un[e] = new dn(
        e,
        br,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Qi = "xlinkHref";
    un[Qi] = new dn(
      "xlinkHref",
      br,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      un[e] = new dn(
        e,
        br,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Wi = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Dl = !1;
    function po(e) {
      !Dl && Wi.test(e) && (Dl = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function k(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        ua(a, t), i.sanitizeURL && po("" + a);
        var s = i.attributeName, d = null;
        if (i.type === Mn) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : on(t, a, i, !1) ? h : h === "" + a ? a : h;
          }
        } else if (e.hasAttribute(s)) {
          if (on(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === yn)
            return a;
          d = e.getAttribute(s);
        }
        return on(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function P(e, t, a, i) {
      {
        if (!Wn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return ua(a, t), o === "" + a ? a : o;
      }
    }
    function Q(e, t, a, i) {
      var o = jr(t);
      if (!_n(t, o, i)) {
        if (on(t, a, o, i) && (a = null), i || o === null) {
          if (Wn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (ua(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = o.mustUseProperty;
        if (d) {
          var h = o.propertyName;
          if (a === null) {
            var g = o.type;
            e[h] = g === yn ? !1 : "";
          } else
            e[h] = a;
          return;
        }
        var R = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var z = o.type, N;
          z === yn || z === Mn && a === !0 ? N = "" : (ua(a, R), N = "" + a, o.sanitizeURL && po(N.toString())), T ? e.setAttributeNS(T, R, N) : e.setAttribute(R, N);
        }
      }
    }
    var ie = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), lt = Symbol.for("react.strict_mode"), ke = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), Le = Symbol.for("react.context"), Re = Symbol.for("react.forward_ref"), vt = Symbol.for("react.suspense"), _t = Symbol.for("react.suspense_list"), gn = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), Ht = Symbol.for("react.scope"), pn = Symbol.for("react.debug_trace_mode"), Va = Symbol.for("react.offscreen"), _i = Symbol.for("react.legacy_hidden"), _a = Symbol.for("react.cache"), sa = Symbol.for("react.tracing_marker"), sn = Symbol.iterator, Gi = "@@iterator";
    function ir(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = sn && e[sn] || e[Gi];
      return typeof t == "function" ? t : null;
    }
    var Tt = Object.assign, Gr = 0, kt, an, Kr, Zn, Sn, jn, _l;
    function vo() {
    }
    vo.__reactDisabledLog = !0;
    function xc() {
      {
        if (Gr === 0) {
          kt = console.log, an = console.info, Kr = console.warn, Zn = console.error, Sn = console.group, jn = console.groupCollapsed, _l = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: vo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Gr++;
      }
    }
    function ru() {
      {
        if (Gr--, Gr === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Tt({}, e, {
              value: kt
            }),
            info: Tt({}, e, {
              value: an
            }),
            warn: Tt({}, e, {
              value: Kr
            }),
            error: Tt({}, e, {
              value: Zn
            }),
            group: Tt({}, e, {
              value: Sn
            }),
            groupCollapsed: Tt({}, e, {
              value: jn
            }),
            groupEnd: Tt({}, e, {
              value: _l
            })
          });
        }
        Gr < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var kl = m.ReactCurrentDispatcher, vi;
    function Xr(e, t, a) {
      {
        if (vi === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            vi = i && i[1] || "";
          }
        return `
` + vi + e;
      }
    }
    var Ol = !1, Ll;
    {
      var Nl = typeof WeakMap == "function" ? WeakMap : Map;
      Ll = new Nl();
    }
    function au(e, t) {
      if (!e || Ol)
        return "";
      {
        var a = Ll.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ol = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = kl.current, kl.current = null, xc();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (q) {
              i = q;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (q) {
              i = q;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            i = q;
          }
          e();
        }
      } catch (q) {
        if (q && i && typeof q.stack == "string") {
          for (var h = q.stack.split(`
`), g = i.stack.split(`
`), R = h.length - 1, T = g.length - 1; R >= 1 && T >= 0 && h[R] !== g[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (h[R] !== g[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || h[R] !== g[T]) {
                    var z = `
` + h[R].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && Ll.set(e, z), z;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Ol = !1, kl.current = s, ru(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", W = N ? Xr(N) : "";
      return typeof e == "function" && Ll.set(e, W), W;
    }
    function iu(e, t, a) {
      return au(e, !0);
    }
    function Ki(e, t, a) {
      return au(e, !1);
    }
    function Rd(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ki(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, Rd(e));
      if (typeof e == "string")
        return Xr(e);
      switch (e) {
        case vt:
          return Xr("Suspense");
        case _t:
          return Xr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Re:
            return Ki(e.render);
          case gn:
            return ki(e.type, t, a);
          case wt: {
            var i = e, o = i._payload, s = i._init;
            try {
              return ki(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case K:
          return Xr(e.type);
        case je:
          return Xr("Lazy");
        case De:
          return Xr("Suspense");
        case pt:
          return Xr("SuspenseList");
        case _:
        case B:
        case Fe:
          return Ki(e.type);
        case ye:
          return Ki(e.type.render);
        case O:
          return iu(e.type);
        default:
          return "";
      }
    }
    function lu(e) {
      try {
        var t = "", a = e;
        do
          t += Wt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ho(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function ou(e) {
      return e.displayName || "Context";
    }
    function jt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Pe:
          return "Fragment";
        case Ce:
          return "Portal";
        case ke:
          return "Profiler";
        case lt:
          return "StrictMode";
        case vt:
          return "Suspense";
        case _t:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Le:
            var t = e;
            return ou(t) + ".Consumer";
          case Ue:
            var a = e;
            return ou(a._context) + ".Provider";
          case Re:
            return ho(e, e.render, "ForwardRef");
          case gn:
            var i = e.displayName || null;
            return i !== null ? i : jt(e.type) || "Memo";
          case wt: {
            var o = e, s = o._payload, d = o._init;
            try {
              return jt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function uu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function su(e) {
      return e.displayName || "Context";
    }
    function Et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case qt:
          return "Cache";
        case Ae:
          var i = a;
          return su(i) + ".Consumer";
        case he:
          var o = a;
          return su(o._context) + ".Provider";
        case et:
          return "DehydratedFragment";
        case ye:
          return uu(a, a.render, "ForwardRef");
        case ue:
          return "Fragment";
        case K:
          return a;
        case I:
          return "Portal";
        case M:
          return "Root";
        case ae:
          return "Text";
        case je:
          return jt(a);
        case pe:
          return a === lt ? "StrictMode" : "Mode";
        case tt:
          return "Offscreen";
        case be:
          return "Profiler";
        case Mt:
          return "Scope";
        case De:
          return "Suspense";
        case pt:
          return "SuspenseList";
        case Pt:
          return "TracingMarker";
        case O:
        case _:
        case Ze:
        case B:
        case $:
        case Fe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var mo = m.ReactDebugCurrentFrame, Un = null, ca = !1;
    function qr() {
      {
        if (Un === null)
          return null;
        var e = Un._debugOwner;
        if (e !== null && typeof e < "u")
          return Et(e);
      }
      return null;
    }
    function Ml() {
      return Un === null ? "" : lu(Un);
    }
    function Vn() {
      mo.getCurrentStack = null, Un = null, ca = !1;
    }
    function tn(e) {
      mo.getCurrentStack = e === null ? null : Ml, Un = e, ca = !1;
    }
    function Dc() {
      return Un;
    }
    function fa(e) {
      ca = e;
    }
    function mr(e) {
      return "" + e;
    }
    function Oi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Hn(e), e;
        default:
          return "";
      }
    }
    var _c = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Xi(e, t) {
      _c[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ul(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function kc(e) {
      return e._valueTracker;
    }
    function Ba(e) {
      e._valueTracker = null;
    }
    function zl(e) {
      var t = "";
      return e && (Ul(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function qi(e) {
      var t = Ul(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Hn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(h) {
            Hn(h), i = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            Hn(h), i = "" + h;
          },
          stopTracking: function() {
            Ba(e), delete e[t];
          }
        };
        return d;
      }
    }
    function Ia(e) {
      kc(e) || (e._valueTracker = qi(e));
    }
    function cu(e) {
      if (!e)
        return !1;
      var t = kc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = zl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Al(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Fl = !1, yo = !1, fu = !1, gs = !1;
    function hi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function S(e, t) {
      var a = e, i = t.checked, o = Tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function D(e, t) {
      Xi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !yo && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component", t.type), yo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Fl && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component", t.type), Fl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oi(t.value != null ? t.value : i),
        controlled: hi(t)
      };
    }
    function G(e, t) {
      var a = e, i = t.checked;
      i != null && Q(a, "checked", i, !1);
    }
    function J(e, t) {
      var a = e;
      {
        var i = hi(t);
        !a._wrapperState.controlled && i && !gs && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), gs = !0), a._wrapperState.controlled && !i && !fu && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fu = !0);
      }
      G(e, t);
      var o = Oi(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = mr(o)) : a.value !== mr(o) && (a.value = mr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ot(a, t.type, o) : t.hasOwnProperty("defaultValue") && ot(a, t.type, Oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function de(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = mr(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var h = i.name;
      h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
    }
    function ut(e, t) {
      var a = e;
      J(a, t), xe(a, t);
    }
    function xe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        ua(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var d = o[s];
          if (!(d === e || d.form !== e.form)) {
            var h = om(d);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            cu(d), J(d, h);
          }
        }
      }
    }
    function ot(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Al(e.ownerDocument) !== e) && (a == null ? e.defaultValue = mr(e._wrapperState.initialValue) : e.defaultValue !== mr(a) && (e.defaultValue = mr(a)));
    }
    var Ot = !1, Yt = !1, vn = !1;
    function ln(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Yt || (Yt = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vn || (vn = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ot && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ot = !0);
    }
    function hn(e, t) {
      t.value != null && e.setAttribute("value", mr(Oi(t.value)));
    }
    var En = Array.isArray;
    function Vt(e) {
      return En(e);
    }
    var Ji;
    Ji = !1;
    function du() {
      var e = qr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ss = ["value", "defaultValue"];
    function wd(e) {
      {
        Xi("select", e);
        for (var t = 0; t < Ss.length; t++) {
          var a = Ss[t];
          if (e[a] != null) {
            var i = Vt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, du()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, du());
          }
        }
      }
    }
    function mi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, d = {}, h = 0; h < s.length; h++)
          d["$" + s[h]] = !0;
        for (var g = 0; g < o.length; g++) {
          var R = d.hasOwnProperty("$" + o[g].value);
          o[g].selected !== R && (o[g].selected = R), R && i && (o[g].defaultSelected = !0);
        }
      } else {
        for (var T = mr(Oi(a)), z = null, N = 0; N < o.length; N++) {
          if (o[N].value === T) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          z === null && !o[N].disabled && (z = o[N]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function Es(e, t) {
      return Tt({}, t, {
        value: void 0
      });
    }
    function Cs(e, t) {
      var a = e;
      wd(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ji && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ji = !0);
    }
    function Td(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? mi(a, !!t.multiple, i, !1) : t.defaultValue != null && mi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Py(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? mi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? mi(a, !!t.multiple, t.defaultValue, !0) : mi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Hy(e, t) {
      var a = e, i = t.value;
      i != null && mi(a, !!t.multiple, i, !1);
    }
    var bd = !1;
    function xd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: mr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Nv(e, t) {
      var a = e;
      Xi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !bd && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", qr() || "A component"), bd = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Vt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Oi(i)
      };
    }
    function Mv(e, t) {
      var a = e, i = Oi(t.value), o = Oi(t.defaultValue);
      if (i != null) {
        var s = mr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = mr(o));
    }
    function Uv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Dd(e, t) {
      Mv(e, t);
    }
    var Zi = "http://www.w3.org/1999/xhtml", jy = "http://www.w3.org/1998/Math/MathML", _d = "http://www.w3.org/2000/svg";
    function Oc(e) {
      switch (e) {
        case "svg":
          return _d;
        case "math":
          return jy;
        default:
          return Zi;
      }
    }
    function kd(e, t) {
      return e == null || e === Zi ? Oc(t) : e === _d && t === "foreignObject" ? Zi : e;
    }
    var Vy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Lc, zv = Vy(function(e, t) {
      if (e.namespaceURI === _d && !("innerHTML" in e)) {
        Lc = Lc || document.createElement("div"), Lc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Lc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), da = 1, el = 3, er = 8, yi = 9, go = 11, Nc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === el) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Av = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, pu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Fv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Pv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pu).forEach(function(e) {
      Pv.forEach(function(t) {
        pu[Fv(t, e)] = pu[e];
      });
    });
    function Mc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(pu.hasOwnProperty(e) && pu[e]) ? t + "px" : (Hr(t, e), ("" + t).trim());
    }
    var vu = /([A-Z])/g, By = /^ms-/;
    function Iy(e) {
      return e.replace(vu, "-$1").toLowerCase().replace(By, "-ms-");
    }
    var Hv = function() {
    };
    {
      var jv = /^(?:webkit|moz|o)[A-Z]/, Vv = /^-ms-/, Rs = /-(.)/g, hu = /;\s*$/, mu = {}, yu = {}, Bv = !1, Od = !1, Ld = function(e) {
        return e.replace(Rs, function(t, a) {
          return a.toUpperCase();
        });
      }, Nd = function(e) {
        mu.hasOwnProperty(e) && mu[e] || (mu[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ld(e.replace(Vv, "ms-"))
        ));
      }, Iv = function(e) {
        mu.hasOwnProperty(e) && mu[e] || (mu[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, $v = function(e, t) {
        yu.hasOwnProperty(t) && yu[t] || (yu[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(hu, "")));
      }, Yv = function(e, t) {
        Bv || (Bv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $y = function(e, t) {
        Od || (Od = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Hv = function(e, t) {
        e.indexOf("-") > -1 ? Nd(e) : jv.test(e) ? Iv(e) : hu.test(t) && $v(e, t), typeof t == "number" && (isNaN(t) ? Yv(e, t) : isFinite(t) || $y(e, t));
      };
    }
    var Yy = Hv;
    function Qy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Iy(i)) + ":", t += Mc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Qv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Yy(i, t[i]);
          var s = Mc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Wy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function $a(e) {
      var t = {};
      for (var a in e)
        for (var i = Av[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function ws(e, t) {
      {
        if (!t)
          return;
        var a = $a(e), i = $a(t), o = {};
        for (var s in a) {
          var d = a[s], h = i[s];
          if (h && d !== h) {
            var g = d + "," + h;
            if (o[g])
              continue;
            o[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Wy(e[d]) ? "Removing" : "Updating", d, h);
          }
        }
      }
    }
    var Wv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Gv = Tt({
      menuitem: !0
    }, Wv), Kv = "__html";
    function Uc(e, t) {
      if (t) {
        if (Gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Kv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var zc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Xv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, gi = {}, Md = new RegExp("^(aria)-[" + Ve + "]*$"), Ts = new RegExp("^(aria)[A-Z][" + Ve + "]*$");
    function Ud(e, t) {
      {
        if (vr.call(gi, t) && gi[t])
          return !0;
        if (Ts.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Xv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), gi[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), gi[t] = !0, !0;
        }
        if (Md.test(t)) {
          var o = t.toLowerCase(), s = Xv.hasOwnProperty(o) ? o : null;
          if (s == null)
            return gi[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), gi[t] = !0, !0;
        }
      }
      return !0;
    }
    function qv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Ud(e, i);
          o || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ac(e, t) {
      tl(e, t) || qv(e, t);
    }
    var So = !1;
    function zd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !So && (So = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ad = function() {
    };
    {
      var yr = {}, Fd = /^on./, Jv = /^on[^A-Z]/, Zv = new RegExp("^(aria)-[" + Ve + "]*$"), eh = new RegExp("^(aria)[A-Z][" + Ve + "]*$");
      Ad = function(e, t, a, i) {
        if (vr.call(yr, t) && yr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), yr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = d.hasOwnProperty(o) ? d[o] : null;
          if (h != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, h), yr[t] = !0, !0;
          if (Fd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), yr[t] = !0, !0;
        } else if (Fd.test(t))
          return Jv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), yr[t] = !0, !0;
        if (Zv.test(t) || eh.test(t))
          return !0;
        if (o === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), yr[t] = !0, !0;
        if (o === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), yr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), yr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), yr[t] = !0, !0;
        var g = jr(t), R = g !== null && g.type === Tr;
        if (zc.hasOwnProperty(o)) {
          var T = zc[o];
          if (T !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, T), yr[t] = !0, !0;
        } else if (!R && t !== o)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), yr[t] = !0, !0;
        return typeof a == "boolean" && ar(t, a, g, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), yr[t] = !0, !0) : R ? !0 : ar(t, a, g, !1) ? (yr[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === yn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), yr[t] = !0), !0);
      };
    }
    var th = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = Ad(e, o, t[o], a);
          s || i.push(o);
        }
        var d = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function nh(e, t, a) {
      tl(e, t) || th(e, t, a);
    }
    var nl = 1, bs = 2, Eo = 4, Gy = nl | bs | Eo, xs = null;
    function Ds(e) {
      xs !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), xs = e;
    }
    function Ky() {
      xs === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), xs = null;
    }
    function rh(e) {
      return e === xs;
    }
    function Fc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === el ? t.parentNode : t;
    }
    var mn = null, Pl = null, rl = null;
    function gu(e) {
      var t = qu(e);
      if (t) {
        if (typeof mn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = om(a);
          mn(t.stateNode, t.type, i);
        }
      }
    }
    function ah(e) {
      mn = e;
    }
    function Pc(e) {
      Pl ? rl ? rl.push(e) : rl = [e] : Pl = e;
    }
    function _s() {
      return Pl !== null || rl !== null;
    }
    function ks() {
      if (Pl) {
        var e = Pl, t = rl;
        if (Pl = null, rl = null, gu(e), t)
          for (var a = 0; a < t.length; a++)
            gu(t[a]);
      }
    }
    var Co = function(e, t) {
      return e(t);
    }, Pd = function() {
    }, Hd = !1;
    function Xy() {
      var e = _s();
      e && (Pd(), ks());
    }
    function jd(e, t, a) {
      if (Hd)
        return e(t, a);
      Hd = !0;
      try {
        return Co(e, t, a);
      } finally {
        Hd = !1, Xy();
      }
    }
    function Hc(e, t, a) {
      Co = e, Pd = a;
    }
    function jc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Vd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && jc(t));
        default:
          return !1;
      }
    }
    function Ro(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = om(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Vd(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Os = !1;
    if (Dn)
      try {
        var wo = {};
        Object.defineProperty(wo, "passive", {
          get: function() {
            Os = !0;
          }
        }), window.addEventListener("test", wo, wo), window.removeEventListener("test", wo, wo);
      } catch {
        Os = !1;
      }
    function ih(e, t, a, i, o, s, d, h, g) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (T) {
        this.onError(T);
      }
    }
    var Bd = ih;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Id = document.createElement("react");
      Bd = function(t, a, i, o, s, d, h, g, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), z = !1, N = !0, W = window.event, q = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Id.removeEventListener(ee, at, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = W);
        }
        var _e = Array.prototype.slice.call(arguments, 3);
        function at() {
          z = !0, Z(), a.apply(i, _e), N = !1;
        }
        var Xe, $t = !1, Ft = !1;
        function j(V) {
          if (Xe = V.error, $t = !0, Xe === null && V.colno === 0 && V.lineno === 0 && (Ft = !0), V.defaultPrevented && Xe != null && typeof Xe == "object")
            try {
              Xe._suppressLogging = !0;
            } catch {
            }
        }
        var ee = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", j), Id.addEventListener(ee, at, !1), T.initEvent(ee, !1, !1), Id.dispatchEvent(T), q && Object.defineProperty(window, "event", q), z && N && ($t ? Ft && (Xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Xe)), window.removeEventListener("error", j), !z)
          return Z(), ih.apply(this, arguments);
      };
    }
    var qy = Bd, Hl = !1, Si = null, Ls = !1, jl = null, Li = {
      onError: function(e) {
        Hl = !0, Si = e;
      }
    };
    function To(e, t, a, i, o, s, d, h, g) {
      Hl = !1, Si = null, qy.apply(Li, arguments);
    }
    function al(e, t, a, i, o, s, d, h, g) {
      if (To.apply(this, arguments), Hl) {
        var R = Yd();
        Ls || (Ls = !0, jl = R);
      }
    }
    function $d() {
      if (Ls) {
        var e = jl;
        throw Ls = !1, jl = null, e;
      }
    }
    function Jy() {
      return Hl;
    }
    function Yd() {
      if (Hl) {
        var e = Si;
        return Hl = !1, Si = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ya(e) {
      return e._reactInternals;
    }
    function Ns(e) {
      return e._reactInternals !== void 0;
    }
    function Su(e, t) {
      e._reactInternals = t;
    }
    var rt = (
      /*                      */
      0
    ), Vl = (
      /*                */
      1
    ), wn = (
      /*                    */
      2
    ), xt = (
      /*                       */
      4
    ), Zt = (
      /*                */
      16
    ), nn = (
      /*                 */
      32
    ), Ni = (
      /*                     */
      64
    ), mt = (
      /*                   */
      128
    ), Bn = (
      /*            */
      256
    ), pa = (
      /*                          */
      512
    ), Qa = (
      /*                     */
      1024
    ), kn = (
      /*                      */
      2048
    ), Wa = (
      /*                    */
      4096
    ), Bl = (
      /*                   */
      8192
    ), Ms = (
      /*             */
      16384
    ), Vc = kn | xt | Ni | pa | Qa | Ms, lh = (
      /*               */
      32767
    ), ka = (
      /*                   */
      32768
    ), gr = (
      /*                */
      65536
    ), Us = (
      /* */
      131072
    ), Qd = (
      /*                       */
      1048576
    ), Wd = (
      /*                    */
      2097152
    ), va = (
      /*                 */
      4194304
    ), Il = (
      /*                */
      8388608
    ), ha = (
      /*               */
      16777216
    ), bo = (
      /*              */
      33554432
    ), Eu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      xt | Qa | 0
    ), ma = wn | xt | Zt | nn | pa | Wa | Bl, Vr = xt | Ni | pa | Bl, Ga = kn | Zt, xr = va | Il | Wd, il = m.ReactCurrentOwner;
    function Oa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (wn | Wa)) !== rt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === M ? a : null;
    }
    function Gd(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Bc(e) {
      return e.tag === M ? e.stateNode.containerInfo : null;
    }
    function Kd(e) {
      return Oa(e) === e;
    }
    function La(e) {
      {
        var t = il.current;
        if (t !== null && t.tag === O) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Et(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Ya(e);
      return o ? Oa(o) === o : !1;
    }
    function ya(e) {
      if (Oa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Tn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Oa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var h = s.return;
          if (h !== null) {
            i = o = h;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return ya(s), e;
            if (g === o)
              return ya(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = d;
        else {
          for (var R = !1, T = s.child; T; ) {
            if (T === i) {
              R = !0, i = s, o = d;
              break;
            }
            if (T === o) {
              R = !0, o = s, i = d;
              break;
            }
            T = T.sibling;
          }
          if (!R) {
            for (T = d.child; T; ) {
              if (T === i) {
                R = !0, i = d, o = s;
                break;
              }
              if (T === o) {
                R = !0, o = d, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== M)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ka(e) {
      var t = Tn(e);
      return t !== null ? Xd(t) : null;
    }
    function Xd(e) {
      if (e.tag === K || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Xd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function oh(e) {
      var t = Tn(e);
      return t !== null ? Ic(t) : null;
    }
    function Ic(e) {
      if (e.tag === K || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== I) {
          var a = Ic(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var $c = v.unstable_scheduleCallback, uh = v.unstable_cancelCallback, Yc = v.unstable_shouldYield, sh = v.unstable_requestPaint, zn = v.unstable_now, qd = v.unstable_getCurrentPriorityLevel, Qc = v.unstable_ImmediatePriority, xo = v.unstable_UserBlockingPriority, Mi = v.unstable_NormalPriority, ch = v.unstable_LowPriority, Wc = v.unstable_IdlePriority, Cu = v.unstable_yieldValue, fh = v.unstable_setDisableYieldValue, ll = null, lr = null, we = null, Xa = !1, Na = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Jd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        gt && (e = Tt({}, e, {
          getLaneLabelMap: ol,
          injectProfilingHooks: dh
        })), ll = t.inject(e), lr = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Zd(e, t) {
      if (lr && typeof lr.onScheduleFiberRoot == "function")
        try {
          lr.onScheduleFiberRoot(ll, e, t);
        } catch (a) {
          Xa || (Xa = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Ru(e, t) {
      if (lr && typeof lr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & mt) === mt;
          if (St) {
            var i;
            switch (t) {
              case Kn:
                i = Qc;
                break;
              case sl:
                i = xo;
                break;
              case Ui:
                i = Mi;
                break;
              case Uu:
                i = Wc;
                break;
              default:
                i = Mi;
                break;
            }
            lr.onCommitFiberRoot(ll, e, i, a);
          }
        } catch (o) {
          Xa || (Xa = !0, y("React instrumentation encountered an error: %s", o));
        }
    }
    function qa(e) {
      if (lr && typeof lr.onPostCommitFiberRoot == "function")
        try {
          lr.onPostCommitFiberRoot(ll, e);
        } catch (t) {
          Xa || (Xa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Do(e) {
      if (lr && typeof lr.onCommitFiberUnmount == "function")
        try {
          lr.onCommitFiberUnmount(ll, e);
        } catch (t) {
          Xa || (Xa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function tr(e) {
      if (typeof Cu == "function" && (fh(e), w(e)), lr && typeof lr.setStrictMode == "function")
        try {
          lr.setStrictMode(ll, e);
        } catch (t) {
          Xa || (Xa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function dh(e) {
      we = e;
    }
    function ol() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Hs; a++) {
          var i = eg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function $l(e) {
      we !== null && typeof we.markCommitStarted == "function" && we.markCommitStarted(e);
    }
    function Gc() {
      we !== null && typeof we.markCommitStopped == "function" && we.markCommitStopped();
    }
    function wu(e) {
      we !== null && typeof we.markComponentRenderStarted == "function" && we.markComponentRenderStarted(e);
    }
    function ga() {
      we !== null && typeof we.markComponentRenderStopped == "function" && we.markComponentRenderStopped();
    }
    function Yl(e) {
      we !== null && typeof we.markComponentPassiveEffectMountStarted == "function" && we.markComponentPassiveEffectMountStarted(e);
    }
    function Kc() {
      we !== null && typeof we.markComponentPassiveEffectMountStopped == "function" && we.markComponentPassiveEffectMountStopped();
    }
    function ph(e) {
      we !== null && typeof we.markComponentPassiveEffectUnmountStarted == "function" && we.markComponentPassiveEffectUnmountStarted(e);
    }
    function Xc() {
      we !== null && typeof we.markComponentPassiveEffectUnmountStopped == "function" && we.markComponentPassiveEffectUnmountStopped();
    }
    function vh(e) {
      we !== null && typeof we.markComponentLayoutEffectMountStarted == "function" && we.markComponentLayoutEffectMountStarted(e);
    }
    function zs() {
      we !== null && typeof we.markComponentLayoutEffectMountStopped == "function" && we.markComponentLayoutEffectMountStopped();
    }
    function Ei(e) {
      we !== null && typeof we.markComponentLayoutEffectUnmountStarted == "function" && we.markComponentLayoutEffectUnmountStarted(e);
    }
    function Tu() {
      we !== null && typeof we.markComponentLayoutEffectUnmountStopped == "function" && we.markComponentLayoutEffectUnmountStopped();
    }
    function As(e, t, a) {
      we !== null && typeof we.markComponentErrored == "function" && we.markComponentErrored(e, t, a);
    }
    function _o(e, t, a) {
      we !== null && typeof we.markComponentSuspended == "function" && we.markComponentSuspended(e, t, a);
    }
    function ep(e) {
      we !== null && typeof we.markLayoutEffectsStarted == "function" && we.markLayoutEffectsStarted(e);
    }
    function bu() {
      we !== null && typeof we.markLayoutEffectsStopped == "function" && we.markLayoutEffectsStopped();
    }
    function hh(e) {
      we !== null && typeof we.markPassiveEffectsStarted == "function" && we.markPassiveEffectsStarted(e);
    }
    function tp() {
      we !== null && typeof we.markPassiveEffectsStopped == "function" && we.markPassiveEffectsStopped();
    }
    function On(e) {
      we !== null && typeof we.markRenderStarted == "function" && we.markRenderStarted(e);
    }
    function qc() {
      we !== null && typeof we.markRenderYielded == "function" && we.markRenderYielded();
    }
    function Jc() {
      we !== null && typeof we.markRenderStopped == "function" && we.markRenderStopped();
    }
    function np(e) {
      we !== null && typeof we.markRenderScheduled == "function" && we.markRenderScheduled(e);
    }
    function Zc(e, t) {
      we !== null && typeof we.markForceUpdateScheduled == "function" && we.markForceUpdateScheduled(e, t);
    }
    function Fs(e, t) {
      we !== null && typeof we.markStateUpdateScheduled == "function" && we.markStateUpdateScheduled(e, t);
    }
    var We = (
      /*                         */
      0
    ), Ke = (
      /*                 */
      1
    ), yt = (
      /*                    */
      2
    ), Lt = (
      /*               */
      8
    ), Ma = (
      /*              */
      16
    ), xu = Math.clz32 ? Math.clz32 : Br, Ps = Math.log, Zy = Math.LN2;
    function Br(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ps(t) / Zy | 0) | 0;
    }
    var Hs = 31, le = (
      /*                        */
      0
    ), nr = (
      /*                          */
      0
    ), Je = (
      /*                        */
      1
    ), Dr = (
      /*    */
      2
    ), Ua = (
      /*             */
      4
    ), ul = (
      /*            */
      8
    ), Ja = (
      /*                     */
      16
    ), Du = (
      /*                */
      32
    ), ko = (
      /*                       */
      4194240
    ), _u = (
      /*                        */
      64
    ), ef = (
      /*                        */
      128
    ), tf = (
      /*                        */
      256
    ), nf = (
      /*                        */
      512
    ), rf = (
      /*                        */
      1024
    ), af = (
      /*                        */
      2048
    ), Oo = (
      /*                        */
      4096
    ), lf = (
      /*                        */
      8192
    ), ku = (
      /*                        */
      16384
    ), Ou = (
      /*                       */
      32768
    ), of = (
      /*                       */
      65536
    ), js = (
      /*                       */
      131072
    ), uf = (
      /*                       */
      262144
    ), sf = (
      /*                       */
      524288
    ), cf = (
      /*                       */
      1048576
    ), ff = (
      /*                       */
      2097152
    ), Lu = (
      /*                            */
      130023424
    ), Lo = (
      /*                             */
      4194304
    ), df = (
      /*                             */
      8388608
    ), pf = (
      /*                             */
      16777216
    ), rp = (
      /*                             */
      33554432
    ), vf = (
      /*                             */
      67108864
    ), mh = Lo, Vs = (
      /*          */
      134217728
    ), ap = (
      /*                          */
      268435455
    ), Nu = (
      /*               */
      268435456
    ), Ql = (
      /*                        */
      536870912
    ), Ir = (
      /*                   */
      1073741824
    );
    function eg(e) {
      {
        if (e & Je)
          return "Sync";
        if (e & Dr)
          return "InputContinuousHydration";
        if (e & Ua)
          return "InputContinuous";
        if (e & ul)
          return "DefaultHydration";
        if (e & Ja)
          return "Default";
        if (e & Du)
          return "TransitionHydration";
        if (e & ko)
          return "Transition";
        if (e & Lu)
          return "Retry";
        if (e & Vs)
          return "SelectiveHydration";
        if (e & Nu)
          return "IdleHydration";
        if (e & Ql)
          return "Idle";
        if (e & Ir)
          return "Offscreen";
      }
    }
    var Cn = -1, hf = _u, Sa = Lo;
    function No(e) {
      switch (Gn(e)) {
        case Je:
          return Je;
        case Dr:
          return Dr;
        case Ua:
          return Ua;
        case ul:
          return ul;
        case Ja:
          return Ja;
        case Du:
          return Du;
        case _u:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Oo:
        case lf:
        case ku:
        case Ou:
        case of:
        case js:
        case uf:
        case sf:
        case cf:
        case ff:
          return e & ko;
        case Lo:
        case df:
        case pf:
        case rp:
        case vf:
          return e & Lu;
        case Vs:
          return Vs;
        case Nu:
          return Nu;
        case Ql:
          return Ql;
        case Ir:
          return Ir;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Mo(e, t) {
      var a = e.pendingLanes;
      if (a === le)
        return le;
      var i = le, o = e.suspendedLanes, s = e.pingedLanes, d = a & ap;
      if (d !== le) {
        var h = d & ~o;
        if (h !== le)
          i = No(h);
        else {
          var g = d & s;
          g !== le && (i = No(g));
        }
      } else {
        var R = a & ~o;
        R !== le ? i = No(R) : s !== le && (i = No(s));
      }
      if (i === le)
        return le;
      if (t !== le && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === le) {
        var T = Gn(i), z = Gn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Ja && (z & ko) !== le
        )
          return t;
      }
      (i & Ua) !== le && (i |= a & Ja);
      var N = e.entangledLanes;
      if (N !== le)
        for (var W = e.entanglements, q = i & N; q > 0; ) {
          var Z = Gl(q), _e = 1 << Z;
          i |= W[Z], q &= ~_e;
        }
      return i;
    }
    function yh(e, t) {
      for (var a = e.eventTimes, i = Cn; t > 0; ) {
        var o = Gl(t), s = 1 << o, d = a[o];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function gh(e, t) {
      switch (e) {
        case Je:
        case Dr:
        case Ua:
          return t + 250;
        case ul:
        case Ja:
        case Du:
        case _u:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Oo:
        case lf:
        case ku:
        case Ou:
        case of:
        case js:
        case uf:
        case sf:
        case cf:
        case ff:
          return t + 5e3;
        case Lo:
        case df:
        case pf:
        case rp:
        case vf:
          return Cn;
        case Vs:
        case Nu:
        case Ql:
        case Ir:
          return Cn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Cn;
      }
    }
    function Sh(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var h = Gl(d), g = 1 << h, R = s[h];
        R === Cn ? ((g & i) === le || (g & o) !== le) && (s[h] = gh(g, t)) : R <= t && (e.expiredLanes |= g), d &= ~g;
      }
    }
    function ip(e) {
      return No(e.pendingLanes);
    }
    function Wl(e) {
      var t = e.pendingLanes & ~Ir;
      return t !== le ? t : t & Ir ? Ir : le;
    }
    function lp(e) {
      return (e & Je) !== le;
    }
    function Bs(e) {
      return (e & ap) !== le;
    }
    function Eh(e) {
      return (e & Lu) === e;
    }
    function Ch(e) {
      var t = Je | Ua | Ja;
      return (e & t) === le;
    }
    function Rh(e) {
      return (e & ko) === e;
    }
    function Is(e, t) {
      var a = Dr | Ua | ul | Ja;
      return (t & a) !== le;
    }
    function wh(e, t) {
      return (t & e.expiredLanes) !== le;
    }
    function op(e) {
      return (e & ko) !== le;
    }
    function Th() {
      var e = hf;
      return hf <<= 1, (hf & ko) === le && (hf = _u), e;
    }
    function Ea() {
      var e = Sa;
      return Sa <<= 1, (Sa & Lu) === le && (Sa = Lo), e;
    }
    function Gn(e) {
      return e & -e;
    }
    function Mu(e) {
      return Gn(e);
    }
    function Gl(e) {
      return 31 - xu(e);
    }
    function mf(e) {
      return Gl(e);
    }
    function Ca(e, t) {
      return (e & t) !== le;
    }
    function Uo(e, t) {
      return (e & t) === t;
    }
    function bt(e, t) {
      return e | t;
    }
    function $s(e, t) {
      return e & ~t;
    }
    function yf(e, t) {
      return e & t;
    }
    function tg(e) {
      return e;
    }
    function bh(e, t) {
      return e !== nr && e < t ? e : t;
    }
    function Ys(e) {
      for (var t = [], a = 0; a < Hs; a++)
        t.push(e);
      return t;
    }
    function zo(e, t, a) {
      e.pendingLanes |= t, t !== Ql && (e.suspendedLanes = le, e.pingedLanes = le);
      var i = e.eventTimes, o = mf(t);
      i[o] = a;
    }
    function xh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Gl(i), s = 1 << o;
        a[o] = Cn, i &= ~s;
      }
    }
    function gf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Sf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = le, e.pingedLanes = le, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var h = Gl(d), g = 1 << h;
        i[h] = le, o[h] = Cn, s[h] = Cn, d &= ~g;
      }
    }
    function up(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Gl(o), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~d;
      }
    }
    function Dh(e, t) {
      var a = Gn(t), i;
      switch (a) {
        case Ua:
          i = Dr;
          break;
        case Ja:
          i = ul;
          break;
        case _u:
        case ef:
        case tf:
        case nf:
        case rf:
        case af:
        case Oo:
        case lf:
        case ku:
        case Ou:
        case of:
        case js:
        case uf:
        case sf:
        case cf:
        case ff:
        case Lo:
        case df:
        case pf:
        case rp:
        case vf:
          i = Du;
          break;
        case Ql:
          i = Nu;
          break;
        default:
          i = nr;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== nr ? nr : i;
    }
    function Ef(e, t, a) {
      if (Na)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = mf(a), s = 1 << o, d = i[o];
          d.add(t), a &= ~s;
        }
    }
    function sp(e, t) {
      if (Na)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = mf(t), s = 1 << o, d = a[o];
          d.size > 0 && (d.forEach(function(h) {
            var g = h.alternate;
            (g === null || !i.has(g)) && i.add(h);
          }), d.clear()), t &= ~s;
        }
    }
    function Qs(e, t) {
      return null;
    }
    var Kn = Je, sl = Ua, Ui = Ja, Uu = Ql, zu = nr;
    function Za() {
      return zu;
    }
    function In(e) {
      zu = e;
    }
    function $r(e, t) {
      var a = zu;
      try {
        return zu = e, t();
      } finally {
        zu = a;
      }
    }
    function ng(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function rg(e, t) {
      return e > t ? e : t;
    }
    function Au(e, t) {
      return e !== 0 && e < t;
    }
    function _r(e) {
      var t = Gn(e);
      return Au(Kn, t) ? Au(sl, t) ? Bs(t) ? Ui : Uu : sl : Kn;
    }
    function Cf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var He;
    function Fu(e) {
      He = e;
    }
    function cp(e) {
      He(e);
    }
    var Rf;
    function ag(e) {
      Rf = e;
    }
    var Pu;
    function wf(e) {
      Pu = e;
    }
    var Tf;
    function _h(e) {
      Tf = e;
    }
    var fp;
    function kh(e) {
      fp = e;
    }
    var Ws = !1, Hu = [], Ln = null, Sr = null, Jr = null, ju = /* @__PURE__ */ new Map(), Vu = /* @__PURE__ */ new Map(), Er = [], Oh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function zi(e) {
      return Oh.indexOf(e) > -1;
    }
    function ig(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function dp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ln = null;
          break;
        case "dragenter":
        case "dragleave":
          Sr = null;
          break;
        case "mouseover":
        case "mouseout":
          Jr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ju.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Vu.delete(i);
          break;
        }
      }
    }
    function Bu(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = ig(t, a, i, o, s);
        if (t !== null) {
          var h = qu(t);
          h !== null && Rf(h);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return o !== null && g.indexOf(o) === -1 && g.push(o), e;
    }
    function Lh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return Ln = Bu(Ln, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = o;
          return Sr = Bu(Sr, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var h = o;
          return Jr = Bu(Jr, e, t, a, i, h), !0;
        }
        case "pointerover": {
          var g = o, R = g.pointerId;
          return ju.set(R, Bu(ju.get(R) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var T = o, z = T.pointerId;
          return Vu.set(z, Bu(Vu.get(z) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function pp(e) {
      var t = ic(e.target);
      if (t !== null) {
        var a = Oa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var o = Gd(a);
            if (o !== null) {
              e.blockedOn = o, fp(e.priority, function() {
                Pu(a);
              });
              return;
            }
          } else if (i === M) {
            var s = a.stateNode;
            if (Cf(s)) {
              e.blockedOn = Bc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function lg(e) {
      for (var t = Tf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Er.length && Au(t, Er[i].priority); i++)
        ;
      Er.splice(i, 0, a), i === 0 && pp(a);
    }
    function Ao(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Yr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          Ds(s), o.target.dispatchEvent(s), Ky();
        } else {
          var d = qu(i);
          return d !== null && Rf(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function bf(e, t, a) {
      Ao(e) && a.delete(t);
    }
    function ei() {
      Ws = !1, Ln !== null && Ao(Ln) && (Ln = null), Sr !== null && Ao(Sr) && (Sr = null), Jr !== null && Ao(Jr) && (Jr = null), ju.forEach(bf), Vu.forEach(bf);
    }
    function At(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ws || (Ws = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, ei)));
    }
    function $n(e) {
      if (Hu.length > 0) {
        At(Hu[0], e);
        for (var t = 1; t < Hu.length; t++) {
          var a = Hu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ln !== null && At(Ln, e), Sr !== null && At(Sr, e), Jr !== null && At(Jr, e);
      var i = function(h) {
        return At(h, e);
      };
      ju.forEach(i), Vu.forEach(i);
      for (var o = 0; o < Er.length; o++) {
        var s = Er[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Er.length > 0; ) {
        var d = Er[0];
        if (d.blockedOn !== null)
          break;
        pp(d), d.blockedOn === null && Er.shift();
      }
    }
    var bn = m.ReactCurrentBatchConfig, or = !0;
    function Ra(e) {
      or = !!e;
    }
    function Iu() {
      return or;
    }
    function ur(e, t, a) {
      var i = xf(t), o;
      switch (i) {
        case Kn:
          o = Gs;
          break;
        case sl:
          o = Fo;
          break;
        case Ui:
        default:
          o = $u;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Gs(e, t, a, i) {
      var o = Za(), s = bn.transition;
      bn.transition = null;
      try {
        In(Kn), $u(e, t, a, i);
      } finally {
        In(o), bn.transition = s;
      }
    }
    function Fo(e, t, a, i) {
      var o = Za(), s = bn.transition;
      bn.transition = null;
      try {
        In(sl), $u(e, t, a, i);
      } finally {
        In(o), bn.transition = s;
      }
    }
    function $u(e, t, a, i) {
      or && vp(e, t, a, i);
    }
    function vp(e, t, a, i) {
      var o = Yr(e, t, a, i);
      if (o === null) {
        wg(e, t, i, Kl, a), dp(e, i);
        return;
      }
      if (Lh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (dp(e, i), t & Eo && zi(e)) {
        for (; o !== null; ) {
          var s = qu(o);
          s !== null && cp(s);
          var d = Yr(e, t, a, i);
          if (d === null && wg(e, t, i, Kl, a), d === o)
            break;
          o = d;
        }
        o !== null && i.stopPropagation();
        return;
      }
      wg(e, t, i, null, a);
    }
    var Kl = null;
    function Yr(e, t, a, i) {
      Kl = null;
      var o = Fc(i), s = ic(o);
      if (s !== null) {
        var d = Oa(s);
        if (d === null)
          s = null;
        else {
          var h = d.tag;
          if (h === De) {
            var g = Gd(d);
            if (g !== null)
              return g;
            s = null;
          } else if (h === M) {
            var R = d.stateNode;
            if (Cf(R))
              return Bc(d);
            s = null;
          } else d !== s && (s = null);
        }
      }
      return Kl = s, null;
    }
    function xf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Kn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return sl;
        case "message": {
          var t = qd();
          switch (t) {
            case Qc:
              return Kn;
            case xo:
              return sl;
            case Mi:
            case ch:
              return Ui;
            case Wc:
              return Uu;
            default:
              return Ui;
          }
        }
        default:
          return Ui;
      }
    }
    function Yu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function cl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Df(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function hp(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ti = null, Qu = null, ni = null;
    function _f(e) {
      return ti = e, Qu = Xs(), !0;
    }
    function Ks() {
      ti = null, Qu = null, ni = null;
    }
    function kf() {
      if (ni)
        return ni;
      var e, t = Qu, a = t.length, i, o = Xs(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return ni = o.slice(e, h), ni;
    }
    function Xs() {
      return "value" in ti ? ti.value : ti.textContent;
    }
    function Po(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cr() {
      return !0;
    }
    function fl() {
      return !1;
    }
    function An(e) {
      function t(a, i, o, s, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var g = e[h];
            g ? this[h] = g(s) : this[h] = s[h];
          }
        var R = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return R ? this.isDefaultPrevented = Cr : this.isDefaultPrevented = fl, this.isPropagationStopped = fl, this;
      }
      return Tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cr
      }), t;
    }
    var sr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Of = An(sr), Ho = Tt({}, sr, {
      view: 0,
      detail: 0
    }), mp = An(Ho), yp, Ai, Wu;
    function gp(e) {
      e !== Wu && (Wu && e.type === "mousemove" ? (yp = e.screenX - Wu.screenX, Ai = e.screenY - Wu.screenY) : (yp = 0, Ai = 0), Wu = e);
    }
    var Fi = Tt({}, Ho, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (gp(e), yp);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ai;
      }
    }), Lf = An(Fi), jo = Tt({}, Fi, {
      dataTransfer: 0
    }), Nh = An(jo), Mh = Tt({}, Ho, {
      relatedTarget: 0
    }), qs = An(Mh), Nf = Tt({}, sr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), og = An(Nf), ug = Tt({}, sr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Uh = An(ug), zh = Tt({}, sr, {
      data: 0
    }), Xl = An(zh), sg = Xl, Gu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ah = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Yn(e) {
      if (e.key) {
        var t = Gu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Po(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ah[e.keyCode] || "Unidentified" : "";
    }
    var cg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Fh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = cg[e];
      return i ? !!a[i] : !1;
    }
    function Sp(e) {
      return Fh;
    }
    var fg = Tt({}, Ho, {
      key: Yn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Po(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Po(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ph = An(fg), Hh = Tt({}, Fi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), jh = An(Hh), ri = Tt({}, Ho, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sp
    }), Ep = An(ri), dg = Tt({}, sr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ql = An(dg), Mf = Tt({}, Fi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Vo = An(Mf), Uf = [9, 13, 27, 32], zf = 229, Js = Dn && "CompositionEvent" in window, Zs = null;
    Dn && "documentMode" in document && (Zs = document.documentMode);
    var Cp = Dn && "TextEvent" in window && !Zs, Vh = Dn && (!Js || Zs && Zs > 8 && Zs <= 11), Rp = 32, wp = String.fromCharCode(Rp);
    function Af() {
      en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), en("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), en("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), en("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ec = !1;
    function Bh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Tp(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function pg(e, t) {
      return e === "keydown" && t.keyCode === zf;
    }
    function bp(e, t) {
      switch (e) {
        case "keyup":
          return Uf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== zf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Ff(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function tc(e) {
      return e.locale === "ko";
    }
    var Jl = !1;
    function Pf(e, t, a, i, o) {
      var s, d;
      if (Js ? s = Tp(t) : Jl ? bp(t, i) && (s = "onCompositionEnd") : pg(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Vh && !tc(i) && (!Jl && s === "onCompositionStart" ? Jl = _f(o) : s === "onCompositionEnd" && Jl && (d = kf()));
      var h = Gh(a, s);
      if (h.length > 0) {
        var g = new Xl(s, t, null, i, o);
        if (e.push({
          event: g,
          listeners: h
        }), d)
          g.data = d;
        else {
          var R = Ff(i);
          R !== null && (g.data = R);
        }
      }
    }
    function Ih(e, t) {
      switch (e) {
        case "compositionend":
          return Ff(t);
        case "keypress":
          var a = t.which;
          return a !== Rp ? null : (ec = !0, wp);
        case "textInput":
          var i = t.data;
          return i === wp && ec ? null : i;
        default:
          return null;
      }
    }
    function vg(e, t) {
      if (Jl) {
        if (e === "compositionend" || !Js && bp(e, t)) {
          var a = kf();
          return Ks(), Jl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Bh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Vh && !tc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Hf(e, t, a, i, o) {
      var s;
      if (Cp ? s = Ih(t, i) : s = vg(t, i), !s)
        return null;
      var d = Gh(a, "onBeforeInput");
      if (d.length > 0) {
        var h = new sg("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: h,
          listeners: d
        }), h.data = s;
      }
    }
    function hg(e, t, a, i, o, s, d) {
      Pf(e, t, a, i, o), Hf(e, t, a, i, o);
    }
    var nc = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function $h(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!nc[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function jf(e) {
      if (!Dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      en("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Pc(i);
      var o = Gh(t, "onChange");
      if (o.length > 0) {
        var s = new Of("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var l = null, u = null;
    function f(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      r(t, u, e, Fc(e)), jd(E, t);
    }
    function E(e) {
      IE(e, 0);
    }
    function b(e) {
      var t = Qf(e);
      if (cu(t))
        return e;
    }
    function L(e, t) {
      if (e === "change")
        return t;
    }
    var X = !1;
    Dn && (X = jf("input") && (!document.documentMode || document.documentMode > 9));
    function se(e, t) {
      l = e, u = t, l.attachEvent("onpropertychange", oe);
    }
    function ce() {
      l && (l.detachEvent("onpropertychange", oe), l = null, u = null);
    }
    function oe(e) {
      e.propertyName === "value" && b(u) && p(e);
    }
    function Ne(e, t, a) {
      e === "focusin" ? (ce(), se(t, a)) : e === "focusout" && ce();
    }
    function Be(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return b(u);
    }
    function Ye(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Xn(e, t) {
      if (e === "click")
        return b(t);
    }
    function H(e, t) {
      if (e === "input" || e === "change")
        return b(t);
    }
    function U(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ot(e, "number", e.value);
    }
    function Y(e, t, a, i, o, s, d) {
      var h = a ? Qf(a) : window, g, R;
      if (f(h) ? g = L : $h(h) ? X ? g = H : (g = Be, R = Ne) : Ye(h) && (g = Xn), g) {
        var T = g(t, a);
        if (T) {
          r(e, T, i, o);
          return;
        }
      }
      R && R(t, h, a), t === "focusout" && U(h);
    }
    function me() {
      pr("onMouseEnter", ["mouseout", "mouseover"]), pr("onMouseLeave", ["mouseout", "mouseover"]), pr("onPointerEnter", ["pointerout", "pointerover"]), pr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ge(e, t, a, i, o, s, d) {
      var h = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (h && !rh(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (ic(R) || Hp(R)))
          return;
      }
      if (!(!g && !h)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var z = o.ownerDocument;
          z ? T = z.defaultView || z.parentWindow : T = window;
        }
        var N, W;
        if (g) {
          var q = i.relatedTarget || i.toElement;
          if (N = a, W = q ? ic(q) : null, W !== null) {
            var Z = Oa(W);
            (W !== Z || W.tag !== K && W.tag !== ae) && (W = null);
          }
        } else
          N = null, W = a;
        if (N !== W) {
          var _e = Lf, at = "onMouseLeave", Xe = "onMouseEnter", $t = "mouse";
          (t === "pointerout" || t === "pointerover") && (_e = jh, at = "onPointerLeave", Xe = "onPointerEnter", $t = "pointer");
          var Ft = N == null ? T : Qf(N), j = W == null ? T : Qf(W), ee = new _e(at, $t + "leave", N, i, o);
          ee.target = Ft, ee.relatedTarget = j;
          var V = null, fe = ic(o);
          if (fe === a) {
            var ze = new _e(Xe, $t + "enter", W, i, o);
            ze.target = j, ze.relatedTarget = Ft, V = ze;
          }
          LT(e, ee, V, N, W);
        }
      }
    }
    function st(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ie = typeof Object.is == "function" ? Object.is : st;
    function ct(e, t) {
      if (Ie(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!vr.call(t, s) || !Ie(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function cr(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Gt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function dl(e, t) {
      for (var a = cr(e), i = 0, o = 0; a; ) {
        if (a.nodeType === el) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = cr(Gt(a));
      }
    }
    function mg(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, d = i.focusNode, h = i.focusOffset;
      try {
        o.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return fT(e, o, s, d, h);
    }
    function fT(e, t, a, i, o) {
      var s = 0, d = -1, h = -1, g = 0, R = 0, T = e, z = null;
      e: for (; ; ) {
        for (var N = null; T === t && (a === 0 || T.nodeType === el) && (d = s + a), T === i && (o === 0 || T.nodeType === el) && (h = s + o), T.nodeType === el && (s += T.nodeValue.length), (N = T.firstChild) !== null; )
          z = T, T = N;
        for (; ; ) {
          if (T === e)
            break e;
          if (z === t && ++g === a && (d = s), z === i && ++R === o && (h = s), (N = T.nextSibling) !== null)
            break;
          T = z, z = T.parentNode;
        }
        T = N;
      }
      return d === -1 || h === -1 ? null : {
        start: d,
        end: h
      };
    }
    function dT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), h = t.end === void 0 ? d : Math.min(t.end, s);
        if (!o.extend && d > h) {
          var g = h;
          h = d, d = g;
        }
        var R = dl(e, d), T = dl(e, h);
        if (R && T) {
          if (o.rangeCount === 1 && o.anchorNode === R.node && o.anchorOffset === R.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var z = a.createRange();
          z.setStart(R.node, R.offset), o.removeAllRanges(), d > h ? (o.addRange(z), o.extend(T.node, T.offset)) : (z.setEnd(T.node, T.offset), o.addRange(z));
        }
      }
    }
    function LE(e) {
      return e && e.nodeType === el;
    }
    function NE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : LE(e) ? !1 : LE(t) ? NE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function pT(e) {
      return e && e.ownerDocument && NE(e.ownerDocument.documentElement, e);
    }
    function vT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function ME() {
      for (var e = window, t = Al(); t instanceof e.HTMLIFrameElement; ) {
        if (vT(t))
          e = t.contentWindow;
        else
          return t;
        t = Al(e.document);
      }
      return t;
    }
    function yg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function hT() {
      var e = ME();
      return {
        focusedElem: e,
        selectionRange: yg(e) ? yT(e) : null
      };
    }
    function mT(e) {
      var t = ME(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && pT(a)) {
        i !== null && yg(a) && gT(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === da && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < o.length; d++) {
          var h = o[d];
          h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
        }
      }
    }
    function yT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = mg(e), t || {
        start: 0,
        end: 0
      };
    }
    function gT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : dT(e, t);
    }
    var ST = Dn && "documentMode" in document && document.documentMode <= 11;
    function ET() {
      en("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Vf = null, gg = null, xp = null, Sg = !1;
    function CT(e) {
      if ("selectionStart" in e && yg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function RT(e) {
      return e.window === e ? e.document : e.nodeType === yi ? e : e.ownerDocument;
    }
    function UE(e, t, a) {
      var i = RT(a);
      if (!(Sg || Vf == null || Vf !== Al(i))) {
        var o = CT(Vf);
        if (!xp || !ct(xp, o)) {
          xp = o;
          var s = Gh(gg, "onSelect");
          if (s.length > 0) {
            var d = new Of("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = Vf;
          }
        }
      }
    }
    function wT(e, t, a, i, o, s, d) {
      var h = a ? Qf(a) : window;
      switch (t) {
        case "focusin":
          ($h(h) || h.contentEditable === "true") && (Vf = h, gg = a, xp = null);
          break;
        case "focusout":
          Vf = null, gg = null, xp = null;
          break;
        case "mousedown":
          Sg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sg = !1, UE(e, i, o);
          break;
        case "selectionchange":
          if (ST)
            break;
        case "keydown":
        case "keyup":
          UE(e, i, o);
      }
    }
    function Yh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Bf = {
      animationend: Yh("Animation", "AnimationEnd"),
      animationiteration: Yh("Animation", "AnimationIteration"),
      animationstart: Yh("Animation", "AnimationStart"),
      transitionend: Yh("Transition", "TransitionEnd")
    }, Eg = {}, zE = {};
    Dn && (zE = document.createElement("div").style, "AnimationEvent" in window || (delete Bf.animationend.animation, delete Bf.animationiteration.animation, delete Bf.animationstart.animation), "TransitionEvent" in window || delete Bf.transitionend.transition);
    function Qh(e) {
      if (Eg[e])
        return Eg[e];
      if (!Bf[e])
        return e;
      var t = Bf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in zE)
          return Eg[e] = t[a];
      return e;
    }
    var AE = Qh("animationend"), FE = Qh("animationiteration"), PE = Qh("animationstart"), HE = Qh("transitionend"), jE = /* @__PURE__ */ new Map(), VE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ku(e, t) {
      jE.set(e, t), en(t, [e]);
    }
    function TT() {
      for (var e = 0; e < VE.length; e++) {
        var t = VE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ku(a, "on" + i);
      }
      Ku(AE, "onAnimationEnd"), Ku(FE, "onAnimationIteration"), Ku(PE, "onAnimationStart"), Ku("dblclick", "onDoubleClick"), Ku("focusin", "onFocus"), Ku("focusout", "onBlur"), Ku(HE, "onTransitionEnd");
    }
    function bT(e, t, a, i, o, s, d) {
      var h = jE.get(t);
      if (h !== void 0) {
        var g = Of, R = t;
        switch (t) {
          case "keypress":
            if (Po(i) === 0)
              return;
          case "keydown":
          case "keyup":
            g = Ph;
            break;
          case "focusin":
            R = "focus", g = qs;
            break;
          case "focusout":
            R = "blur", g = qs;
            break;
          case "beforeblur":
          case "afterblur":
            g = qs;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Nh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ep;
            break;
          case AE:
          case FE:
          case PE:
            g = og;
            break;
          case HE:
            g = ql;
            break;
          case "scroll":
            g = mp;
            break;
          case "wheel":
            g = Vo;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Uh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = jh;
            break;
        }
        var T = (s & Eo) !== 0;
        {
          var z = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = kT(a, h, i.type, T, z);
          if (N.length > 0) {
            var W = new g(h, R, null, i, o);
            e.push({
              event: W,
              listeners: N
            });
          }
        }
      }
    }
    TT(), me(), n(), ET(), Af();
    function xT(e, t, a, i, o, s, d) {
      bT(e, t, a, i, o, s);
      var h = (s & Gy) === 0;
      h && (Ge(e, t, a, i, o), Y(e, t, a, i, o), wT(e, t, a, i, o), hg(e, t, a, i, o));
    }
    var Dp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Dp));
    function BE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, al(i, t, void 0, e), e.currentTarget = null;
    }
    function DT(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], d = s.instance, h = s.currentTarget, g = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          BE(e, g, h), i = d;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var T = t[R], z = T.instance, N = T.currentTarget, W = T.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          BE(e, W, N), i = z;
        }
    }
    function IE(e, t) {
      for (var a = (t & Eo) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, d = o.listeners;
        DT(s, d, a);
      }
      $d();
    }
    function _T(e, t, a, i, o) {
      var s = Fc(a), d = [];
      xT(d, e, i, a, s, t), IE(d, t);
    }
    function Fn(e, t) {
      Cg.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ax(t), o = NT(e);
      i.has(o) || ($E(t, e, bs, a), i.add(o));
    }
    function Rg(e, t, a) {
      Cg.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Eo), $E(a, e, i, t);
    }
    var Wh = "_reactListening" + Math.random().toString(36).slice(2);
    function _p(e) {
      if (!e[Wh]) {
        e[Wh] = !0, zt.forEach(function(a) {
          a !== "selectionchange" && (Cg.has(a) || Rg(a, !1, e), Rg(a, !0, e));
        });
        var t = e.nodeType === yi ? e : e.ownerDocument;
        t !== null && (t[Wh] || (t[Wh] = !0, Rg("selectionchange", !1, t)));
      }
    }
    function $E(e, t, a, i, o) {
      var s = ur(e, t, a), d = void 0;
      Os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? Df(e, t, s, d) : cl(e, t, s) : d !== void 0 ? hp(e, t, s, d) : Yu(e, t, s);
    }
    function YE(e, t) {
      return e === t || e.nodeType === er && e.parentNode === t;
    }
    function wg(e, t, a, i, o) {
      var s = i;
      if (!(t & nl) && !(t & bs)) {
        var d = o;
        if (i !== null) {
          var h = i;
          e: for (; ; ) {
            if (h === null)
              return;
            var g = h.tag;
            if (g === M || g === I) {
              var R = h.stateNode.containerInfo;
              if (YE(R, d))
                break;
              if (g === I)
                for (var T = h.return; T !== null; ) {
                  var z = T.tag;
                  if (z === M || z === I) {
                    var N = T.stateNode.containerInfo;
                    if (YE(N, d))
                      return;
                  }
                  T = T.return;
                }
              for (; R !== null; ) {
                var W = ic(R);
                if (W === null)
                  return;
                var q = W.tag;
                if (q === K || q === ae) {
                  h = s = W;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            h = h.return;
          }
        }
      }
      jd(function() {
        return _T(e, t, a, s);
      });
    }
    function kp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kT(e, t, a, i, o, s) {
      for (var d = t !== null ? t + "Capture" : null, h = i ? d : t, g = [], R = e, T = null; R !== null; ) {
        var z = R, N = z.stateNode, W = z.tag;
        if (W === K && N !== null && (T = N, h !== null)) {
          var q = Ro(R, h);
          q != null && g.push(kp(R, q, T));
        }
        if (o)
          break;
        R = R.return;
      }
      return g;
    }
    function Gh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, d = s.stateNode, h = s.tag;
        if (h === K && d !== null) {
          var g = d, R = Ro(o, a);
          R != null && i.unshift(kp(o, R, g));
          var T = Ro(o, t);
          T != null && i.push(kp(o, T, g));
        }
        o = o.return;
      }
      return i;
    }
    function If(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== K);
      return e || null;
    }
    function OT(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = If(s))
        o++;
      for (var d = 0, h = i; h; h = If(h))
        d++;
      for (; o - d > 0; )
        a = If(a), o--;
      for (; d - o > 0; )
        i = If(i), d--;
      for (var g = o; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = If(a), i = If(i);
      }
      return null;
    }
    function QE(e, t, a, i, o) {
      for (var s = t._reactName, d = [], h = a; h !== null && h !== i; ) {
        var g = h, R = g.alternate, T = g.stateNode, z = g.tag;
        if (R !== null && R === i)
          break;
        if (z === K && T !== null) {
          var N = T;
          if (o) {
            var W = Ro(h, s);
            W != null && d.unshift(kp(h, W, N));
          } else if (!o) {
            var q = Ro(h, s);
            q != null && d.push(kp(h, q, N));
          }
        }
        h = h.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function LT(e, t, a, i, o) {
      var s = i && o ? OT(i, o) : null;
      i !== null && QE(e, t, i, s, !1), o !== null && a !== null && QE(e, a, o, s, !0);
    }
    function NT(e, t) {
      return e + "__bubble";
    }
    var ai = !1, Op = "dangerouslySetInnerHTML", Kh = "suppressContentEditableWarning", Xu = "suppressHydrationWarning", WE = "autoFocus", rc = "children", ac = "style", Xh = "__html", Tg, qh, Lp, GE, Jh, KE, XE;
    Tg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, qh = function(e, t) {
      Ac(e, t), zd(e, t), nh(e, t, {
        registrationNameDependencies: Nt,
        possibleRegistrationNames: Nn
      });
    }, KE = Dn && !document.documentMode, Lp = function(e, t, a) {
      if (!ai) {
        var i = Zh(a), o = Zh(t);
        o !== i && (ai = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, GE = function(e) {
      if (!ai) {
        ai = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Jh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, XE = function(e, t) {
      var a = e.namespaceURI === Zi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var MT = /\r\n?/g, UT = /\u0000|\uFFFD/g;
    function Zh(e) {
      ja(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(MT, `
`).replace(UT, "");
    }
    function em(e, t, a, i) {
      var o = Zh(t), s = Zh(e);
      if (s !== o && (i && (ai || (ai = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Se))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function qE(e) {
      return e.nodeType === yi ? e : e.ownerDocument;
    }
    function zT() {
    }
    function tm(e) {
      e.onclick = zT;
    }
    function AT(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === ac)
            d && Object.freeze(d), Qv(t, d);
          else if (s === Op) {
            var h = d ? d[Xh] : void 0;
            h != null && zv(t, h);
          } else if (s === rc)
            if (typeof d == "string") {
              var g = e !== "textarea" || d !== "";
              g && Nc(t, d);
            } else typeof d == "number" && Nc(t, "" + d);
          else s === Kh || s === Xu || s === WE || (Nt.hasOwnProperty(s) ? d != null && (typeof d != "function" && Jh(s, d), s === "onScroll" && Fn("scroll", t)) : d != null && Q(t, s, d, o));
        }
    }
    function FT(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], d = t[o + 1];
        s === ac ? Qv(e, d) : s === Op ? zv(e, d) : s === rc ? Nc(e, d) : Q(e, s, d, i);
      }
    }
    function PT(e, t, a, i) {
      var o, s = qE(a), d, h = i;
      if (h === Zi && (h = Oc(e)), h === Zi) {
        if (o = tl(e, t), !o && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var R = g.firstChild;
          d = g.removeChild(R);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var T = d;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        d = s.createElementNS(h, e);
      return h === Zi && !o && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !vr.call(Tg, e) && (Tg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function HT(e, t) {
      return qE(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var o = tl(t, a);
      qh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Fn("cancel", e), Fn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Fn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < Dp.length; d++)
            Fn(Dp[d], e);
          s = a;
          break;
        case "source":
          Fn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Fn("error", e), Fn("load", e), s = a;
          break;
        case "details":
          Fn("toggle", e), s = a;
          break;
        case "input":
          D(e, a), s = S(e, a), Fn("invalid", e);
          break;
        case "option":
          ln(e, a), s = a;
          break;
        case "select":
          Cs(e, a), s = Es(e, a), Fn("invalid", e);
          break;
        case "textarea":
          Nv(e, a), s = xd(e, a), Fn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Uc(t, s), AT(t, e, i, s, o), t) {
        case "input":
          Ia(e), de(e, a, !1);
          break;
        case "textarea":
          Ia(e), Uv(e);
          break;
        case "option":
          hn(e, a);
          break;
        case "select":
          Td(e, a);
          break;
        default:
          typeof s.onClick == "function" && tm(e);
          break;
      }
    }
    function VT(e, t, a, i, o) {
      qh(t, i);
      var s = null, d, h;
      switch (t) {
        case "input":
          d = S(e, a), h = S(e, i), s = [];
          break;
        case "select":
          d = Es(e, a), h = Es(e, i), s = [];
          break;
        case "textarea":
          d = xd(e, a), h = xd(e, i), s = [];
          break;
        default:
          d = a, h = i, typeof d.onClick != "function" && typeof h.onClick == "function" && tm(e);
          break;
      }
      Uc(t, h);
      var g, R, T = null;
      for (g in d)
        if (!(h.hasOwnProperty(g) || !d.hasOwnProperty(g) || d[g] == null))
          if (g === ac) {
            var z = d[g];
            for (R in z)
              z.hasOwnProperty(R) && (T || (T = {}), T[R] = "");
          } else g === Op || g === rc || g === Kh || g === Xu || g === WE || (Nt.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in h) {
        var N = h[g], W = d != null ? d[g] : void 0;
        if (!(!h.hasOwnProperty(g) || N === W || N == null && W == null))
          if (g === ac)
            if (N && Object.freeze(N), W) {
              for (R in W)
                W.hasOwnProperty(R) && (!N || !N.hasOwnProperty(R)) && (T || (T = {}), T[R] = "");
              for (R in N)
                N.hasOwnProperty(R) && W[R] !== N[R] && (T || (T = {}), T[R] = N[R]);
            } else
              T || (s || (s = []), s.push(g, T)), T = N;
          else if (g === Op) {
            var q = N ? N[Xh] : void 0, Z = W ? W[Xh] : void 0;
            q != null && Z !== q && (s = s || []).push(g, q);
          } else g === rc ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(g, "" + N) : g === Kh || g === Xu || (Nt.hasOwnProperty(g) ? (N != null && (typeof N != "function" && Jh(g, N), g === "onScroll" && Fn("scroll", e)), !s && W !== N && (s = [])) : (s = s || []).push(g, N));
      }
      return T && (ws(T, h[ac]), (s = s || []).push(ac, T)), s;
    }
    function BT(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && G(e, o);
      var s = tl(a, i), d = tl(a, o);
      switch (FT(e, t, s, d), a) {
        case "input":
          J(e, o);
          break;
        case "textarea":
          Mv(e, o);
          break;
        case "select":
          Py(e, o);
          break;
      }
    }
    function IT(e) {
      {
        var t = e.toLowerCase();
        return zc.hasOwnProperty(t) && zc[t] || null;
      }
    }
    function $T(e, t, a, i, o, s, d) {
      var h, g;
      switch (h = tl(t, a), qh(t, a), t) {
        case "dialog":
          Fn("cancel", e), Fn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Fn("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < Dp.length; R++)
            Fn(Dp[R], e);
          break;
        case "source":
          Fn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Fn("error", e), Fn("load", e);
          break;
        case "details":
          Fn("toggle", e);
          break;
        case "input":
          D(e, a), Fn("invalid", e);
          break;
        case "option":
          ln(e, a);
          break;
        case "select":
          Cs(e, a), Fn("invalid", e);
          break;
        case "textarea":
          Nv(e, a), Fn("invalid", e);
          break;
      }
      Uc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var T = e.attributes, z = 0; z < T.length; z++) {
          var N = T[z].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(T[z].name);
          }
        }
      }
      var W = null;
      for (var q in a)
        if (a.hasOwnProperty(q)) {
          var Z = a[q];
          if (q === rc)
            typeof Z == "string" ? e.textContent !== Z && (a[Xu] !== !0 && em(e.textContent, Z, s, d), W = [rc, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (a[Xu] !== !0 && em(e.textContent, Z, s, d), W = [rc, "" + Z]);
          else if (Nt.hasOwnProperty(q))
            Z != null && (typeof Z != "function" && Jh(q, Z), q === "onScroll" && Fn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var _e = void 0, at = h && nt ? null : jr(q);
            if (a[Xu] !== !0) {
              if (!(q === Kh || q === Xu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              q === "value" || q === "checked" || q === "selected")) {
                if (q === Op) {
                  var Xe = e.innerHTML, $t = Z ? Z[Xh] : void 0;
                  if ($t != null) {
                    var Ft = XE(e, $t);
                    Ft !== Xe && Lp(q, Xe, Ft);
                  }
                } else if (q === ac) {
                  if (g.delete(q), KE) {
                    var j = Qy(Z);
                    _e = e.getAttribute("style"), j !== _e && Lp(q, _e, j);
                  }
                } else if (h && !nt)
                  g.delete(q.toLowerCase()), _e = P(e, q, Z), Z !== _e && Lp(q, _e, Z);
                else if (!_n(q, at, h) && !on(q, Z, at, h)) {
                  var ee = !1;
                  if (at !== null)
                    g.delete(at.attributeName), _e = k(e, q, Z, at);
                  else {
                    var V = i;
                    if (V === Zi && (V = Oc(t)), V === Zi)
                      g.delete(q.toLowerCase());
                    else {
                      var fe = IT(q);
                      fe !== null && fe !== q && (ee = !0, g.delete(fe)), g.delete(q);
                    }
                    _e = P(e, q, Z);
                  }
                  var ze = nt;
                  !ze && Z !== _e && !ee && Lp(q, _e, Z);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[Xu] !== !0 && GE(g), t) {
        case "input":
          Ia(e), de(e, a, !0);
          break;
        case "textarea":
          Ia(e), Uv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && tm(e);
          break;
      }
      return W;
    }
    function YT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function bg(e, t) {
      {
        if (ai)
          return;
        ai = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function xg(e, t) {
      {
        if (ai)
          return;
        ai = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dg(e, t, a) {
      {
        if (ai)
          return;
        ai = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function _g(e, t) {
      {
        if (t === "" || ai)
          return;
        ai = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function QT(e, t, a) {
      switch (t) {
        case "input":
          ut(e, a);
          return;
        case "textarea":
          Dd(e, a);
          return;
        case "select":
          Hy(e, a);
          return;
      }
    }
    var Np = function() {
    }, Mp = function() {
    };
    {
      var WT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], JE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], GT = JE.concat(["button"]), KT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], ZE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Mp = function(e, t) {
        var a = Tt({}, e || ZE), i = {
          tag: t
        };
        return JE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), GT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), WT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var XT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return KT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, qT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, eC = {};
      Np = function(e, t, a) {
        a = a || ZE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = XT(e, o) ? null : i, d = s ? null : qT(e, a), h = s || d;
        if (h) {
          var g = h.tag, R = !!s + "|" + e + "|" + g;
          if (!eC[R]) {
            eC[R] = !0;
            var T = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var N = "";
              g === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, g, z, N);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, g);
          }
        }
      };
    }
    var nm = "suppressHydrationWarning", rm = "$", am = "/$", Up = "$?", zp = "$!", JT = "style", kg = null, Og = null;
    function ZT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case yi:
        case go: {
          t = i === yi ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : kd(null, "");
          break;
        }
        default: {
          var s = i === er ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = kd(d, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), g = Mp(null, h);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function eb(e, t, a) {
      {
        var i = e, o = kd(i.namespace, t), s = Mp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function lN(e) {
      return e;
    }
    function tb(e) {
      kg = Iu(), Og = hT();
      var t = null;
      return Ra(!1), t;
    }
    function nb(e) {
      mT(Og), Ra(kg), kg = null, Og = null;
    }
    function rb(e, t, a, i, o) {
      var s;
      {
        var d = i;
        if (Np(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, g = Mp(d.ancestorInfo, e);
          Np(null, h, g);
        }
        s = d.namespace;
      }
      var R = PT(e, t, a, s);
      return Pp(o, R), Pg(R, t), R;
    }
    function ab(e, t) {
      e.appendChild(t);
    }
    function ib(e, t, a, i, o) {
      switch (jT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function lb(e, t, a, i, o, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, g = Mp(d.ancestorInfo, t);
          Np(null, h, g);
        }
      }
      return VT(e, t, a, i);
    }
    function Lg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ob(e, t, a, i) {
      {
        var o = a;
        Np(null, e, o.ancestorInfo);
      }
      var s = HT(e, t);
      return Pp(i, s), s;
    }
    function ub() {
      var e = window.event;
      return e === void 0 ? Ui : xf(e.type);
    }
    var Ng = typeof setTimeout == "function" ? setTimeout : void 0, sb = typeof clearTimeout == "function" ? clearTimeout : void 0, Mg = -1, tC = typeof Promise == "function" ? Promise : void 0, cb = typeof queueMicrotask == "function" ? queueMicrotask : typeof tC < "u" ? function(e) {
      return tC.resolve(null).then(e).catch(fb);
    } : Ng;
    function fb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function db(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function pb(e, t, a, i, o, s) {
      BT(e, t, a, i, o), Pg(e, o);
    }
    function nC(e) {
      Nc(e, "");
    }
    function vb(e, t, a) {
      e.nodeValue = a;
    }
    function hb(e, t) {
      e.appendChild(t);
    }
    function mb(e, t) {
      var a;
      e.nodeType === er ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && tm(a);
    }
    function yb(e, t, a) {
      e.insertBefore(t, a);
    }
    function gb(e, t, a) {
      e.nodeType === er ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Sb(e, t) {
      e.removeChild(t);
    }
    function Eb(e, t) {
      e.nodeType === er ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ug(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === er) {
          var s = o.data;
          if (s === am)
            if (i === 0) {
              e.removeChild(o), $n(t);
              return;
            } else
              i--;
          else (s === rm || s === Up || s === zp) && i++;
        }
        a = o;
      } while (a);
      $n(t);
    }
    function Cb(e, t) {
      e.nodeType === er ? Ug(e.parentNode, t) : e.nodeType === da && Ug(e, t), $n(e);
    }
    function Rb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function wb(e) {
      e.nodeValue = "";
    }
    function Tb(e, t) {
      e = e;
      var a = t[JT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Mc("display", i);
    }
    function bb(e, t) {
      e.nodeValue = t;
    }
    function xb(e) {
      e.nodeType === da ? e.textContent = "" : e.nodeType === yi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Db(e, t, a) {
      return e.nodeType !== da || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function _b(e, t) {
      return t === "" || e.nodeType !== el ? null : e;
    }
    function kb(e) {
      return e.nodeType !== er ? null : e;
    }
    function rC(e) {
      return e.data === Up;
    }
    function zg(e) {
      return e.data === zp;
    }
    function Ob(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Lb(e, t) {
      e._reactRetry = t;
    }
    function im(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === da || t === el)
          break;
        if (t === er) {
          var a = e.data;
          if (a === rm || a === zp || a === Up)
            break;
          if (a === am)
            return null;
        }
      }
      return e;
    }
    function Ap(e) {
      return im(e.nextSibling);
    }
    function Nb(e) {
      return im(e.firstChild);
    }
    function Mb(e) {
      return im(e.firstChild);
    }
    function Ub(e) {
      return im(e.nextSibling);
    }
    function zb(e, t, a, i, o, s, d) {
      Pp(s, e), Pg(e, a);
      var h;
      {
        var g = o;
        h = g.namespace;
      }
      var R = (s.mode & Ke) !== We;
      return $T(e, t, a, h, i, R, d);
    }
    function Ab(e, t, a, i) {
      return Pp(a, e), a.mode & Ke, YT(e, t);
    }
    function Fb(e, t) {
      Pp(t, e);
    }
    function Pb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === er) {
          var i = t.data;
          if (i === am) {
            if (a === 0)
              return Ap(t);
            a--;
          } else (i === rm || i === zp || i === Up) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function aC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === er) {
          var i = t.data;
          if (i === rm || i === zp || i === Up) {
            if (a === 0)
              return t;
            a--;
          } else i === am && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Hb(e) {
      $n(e);
    }
    function jb(e) {
      $n(e);
    }
    function Vb(e) {
      return e !== "head" && e !== "body";
    }
    function Bb(e, t, a, i) {
      var o = !0;
      em(t.nodeValue, a, i, o);
    }
    function Ib(e, t, a, i, o, s) {
      if (t[nm] !== !0) {
        var d = !0;
        em(i.nodeValue, o, s, d);
      }
    }
    function $b(e, t) {
      t.nodeType === da ? bg(e, t) : t.nodeType === er || xg(e, t);
    }
    function Yb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === da ? bg(a, t) : t.nodeType === er || xg(a, t));
      }
    }
    function Qb(e, t, a, i, o) {
      (o || t[nm] !== !0) && (i.nodeType === da ? bg(a, i) : i.nodeType === er || xg(a, i));
    }
    function Wb(e, t, a) {
      Dg(e, t);
    }
    function Gb(e, t) {
      _g(e, t);
    }
    function Kb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dg(i, t);
      }
    }
    function Xb(e, t) {
      {
        var a = e.parentNode;
        a !== null && _g(a, t);
      }
    }
    function qb(e, t, a, i, o, s) {
      (s || t[nm] !== !0) && Dg(a, i);
    }
    function Jb(e, t, a, i, o) {
      (o || t[nm] !== !0) && _g(a, i);
    }
    function Zb(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ex(e) {
      _p(e);
    }
    var $f = Math.random().toString(36).slice(2), Yf = "__reactFiber$" + $f, Ag = "__reactProps$" + $f, Fp = "__reactContainer$" + $f, Fg = "__reactEvents$" + $f, tx = "__reactListeners$" + $f, nx = "__reactHandles$" + $f;
    function rx(e) {
      delete e[Yf], delete e[Ag], delete e[Fg], delete e[tx], delete e[nx];
    }
    function Pp(e, t) {
      t[Yf] = e;
    }
    function lm(e, t) {
      t[Fp] = e;
    }
    function iC(e) {
      e[Fp] = null;
    }
    function Hp(e) {
      return !!e[Fp];
    }
    function ic(e) {
      var t = e[Yf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Fp] || a[Yf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = aC(e); o !== null; ) {
              var s = o[Yf];
              if (s)
                return s;
              o = aC(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function qu(e) {
      var t = e[Yf] || e[Fp];
      return t && (t.tag === K || t.tag === ae || t.tag === De || t.tag === M) ? t : null;
    }
    function Qf(e) {
      if (e.tag === K || e.tag === ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function om(e) {
      return e[Ag] || null;
    }
    function Pg(e, t) {
      e[Ag] = t;
    }
    function ax(e) {
      var t = e[Fg];
      return t === void 0 && (t = e[Fg] = /* @__PURE__ */ new Set()), t;
    }
    var lC = {}, oC = m.ReactDebugCurrentFrame;
    function um(e) {
      if (e) {
        var t = e._owner, a = ki(e.type, e._source, t ? t.type : null);
        oC.setExtraStackFrame(a);
      } else
        oC.setExtraStackFrame(null);
    }
    function pl(e, t, a, i, o) {
      {
        var s = Function.call.bind(vr);
        for (var d in e)
          if (s(e, d)) {
            var h = void 0;
            try {
              if (typeof e[d] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              h = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              h = R;
            }
            h && !(h instanceof Error) && (um(o), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof h), um(null)), h instanceof Error && !(h.message in lC) && (lC[h.message] = !0, um(o), y("Failed %s type: %s", a, h.message), um(null));
          }
      }
    }
    var Hg = [], sm;
    sm = [];
    var Bo = -1;
    function Ju(e) {
      return {
        current: e
      };
    }
    function wa(e, t) {
      if (Bo < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== sm[Bo] && y("Unexpected Fiber popped."), e.current = Hg[Bo], Hg[Bo] = null, sm[Bo] = null, Bo--;
    }
    function Ta(e, t, a) {
      Bo++, Hg[Bo] = e.current, sm[Bo] = a, e.current = t;
    }
    var jg;
    jg = {};
    var Ci = {};
    Object.freeze(Ci);
    var Io = Ju(Ci), Zl = Ju(!1), Vg = Ci;
    function Wf(e, t, a) {
      return a && eo(t) ? Vg : Io.current;
    }
    function uC(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Gf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ci;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var h = Et(e) || "Unknown";
          pl(i, s, "context", h);
        }
        return o && uC(e, t, s), s;
      }
    }
    function cm() {
      return Zl.current;
    }
    function eo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function fm(e) {
      wa(Zl, e), wa(Io, e);
    }
    function Bg(e) {
      wa(Zl, e), wa(Io, e);
    }
    function sC(e, t, a) {
      {
        if (Io.current !== Ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Ta(Io, t, e), Ta(Zl, a, e);
      }
    }
    function cC(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Et(e) || "Unknown";
            jg[s] || (jg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var h in d)
          if (!(h in o))
            throw new Error((Et(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var g = Et(e) || "Unknown";
          pl(o, d, "child context", g);
        }
        return Tt({}, a, d);
      }
    }
    function dm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ci;
        return Vg = Io.current, Ta(Io, a, e), Ta(Zl, Zl.current, e), !0;
      }
    }
    function fC(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = cC(e, t, Vg);
          i.__reactInternalMemoizedMergedChildContext = o, wa(Zl, e), wa(Io, e), Ta(Io, o, e), Ta(Zl, a, e);
        } else
          wa(Zl, e), Ta(Zl, a, e);
      }
    }
    function ix(e) {
      {
        if (!Kd(e) || e.tag !== O)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case M:
              return t.stateNode.context;
            case O: {
              var a = t.type;
              if (eo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Zu = 0, pm = 1, $o = null, Ig = !1, $g = !1;
    function dC(e) {
      $o === null ? $o = [e] : $o.push(e);
    }
    function lx(e) {
      Ig = !0, dC(e);
    }
    function pC() {
      Ig && es();
    }
    function es() {
      if (!$g && $o !== null) {
        $g = !0;
        var e = 0, t = Za();
        try {
          var a = !0, i = $o;
          for (In(Kn); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          $o = null, Ig = !1;
        } catch (s) {
          throw $o !== null && ($o = $o.slice(e + 1)), $c(Qc, es), s;
        } finally {
          In(t), $g = !1;
        }
      }
      return null;
    }
    var Kf = [], Xf = 0, vm = null, hm = 0, Pi = [], Hi = 0, lc = null, Yo = 1, Qo = "";
    function ox(e) {
      return uc(), (e.flags & Qd) !== rt;
    }
    function ux(e) {
      return uc(), hm;
    }
    function sx() {
      var e = Qo, t = Yo, a = t & ~cx(t);
      return a.toString(32) + e;
    }
    function oc(e, t) {
      uc(), Kf[Xf++] = hm, Kf[Xf++] = vm, vm = e, hm = t;
    }
    function vC(e, t, a) {
      uc(), Pi[Hi++] = Yo, Pi[Hi++] = Qo, Pi[Hi++] = lc, lc = e;
      var i = Yo, o = Qo, s = mm(i) - 1, d = i & ~(1 << s), h = a + 1, g = mm(t) + s;
      if (g > 30) {
        var R = s - s % 5, T = (1 << R) - 1, z = (d & T).toString(32), N = d >> R, W = s - R, q = mm(t) + W, Z = h << W, _e = Z | N, at = z + o;
        Yo = 1 << q | _e, Qo = at;
      } else {
        var Xe = h << s, $t = Xe | d, Ft = o;
        Yo = 1 << g | $t, Qo = Ft;
      }
    }
    function Yg(e) {
      uc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        oc(e, a), vC(e, a, i);
      }
    }
    function mm(e) {
      return 32 - xu(e);
    }
    function cx(e) {
      return 1 << mm(e) - 1;
    }
    function Qg(e) {
      for (; e === vm; )
        vm = Kf[--Xf], Kf[Xf] = null, hm = Kf[--Xf], Kf[Xf] = null;
      for (; e === lc; )
        lc = Pi[--Hi], Pi[Hi] = null, Qo = Pi[--Hi], Pi[Hi] = null, Yo = Pi[--Hi], Pi[Hi] = null;
    }
    function fx() {
      return uc(), lc !== null ? {
        id: Yo,
        overflow: Qo
      } : null;
    }
    function dx(e, t) {
      uc(), Pi[Hi++] = Yo, Pi[Hi++] = Qo, Pi[Hi++] = lc, Yo = t.id, Qo = t.overflow, lc = e;
    }
    function uc() {
      ea() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Zr = null, ji = null, vl = !1, sc = !1, ts = null;
    function px() {
      vl && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function hC() {
      sc = !0;
    }
    function vx() {
      return sc;
    }
    function hx(e) {
      var t = e.stateNode.containerInfo;
      return ji = Mb(t), Zr = e, vl = !0, ts = null, sc = !1, !0;
    }
    function mx(e, t, a) {
      return ji = Ub(t), Zr = e, vl = !0, ts = null, sc = !1, a !== null && dx(e, a), !0;
    }
    function mC(e, t) {
      switch (e.tag) {
        case M: {
          $b(e.stateNode.containerInfo, t);
          break;
        }
        case K: {
          var a = (e.mode & Ke) !== We;
          Qb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && Yb(i.dehydrated, t);
          break;
        }
      }
    }
    function yC(e, t) {
      mC(e, t);
      var a = Ek();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Zt) : i.push(a);
    }
    function Wg(e, t) {
      {
        if (sc)
          return;
        switch (e.tag) {
          case M: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case K:
                var i = t.type;
                t.pendingProps, Wb(a, i);
                break;
              case ae:
                var o = t.pendingProps;
                Gb(a, o);
                break;
            }
            break;
          }
          case K: {
            var s = e.type, d = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case K: {
                var g = t.type, R = t.pendingProps, T = (e.mode & Ke) !== We;
                qb(
                  s,
                  d,
                  h,
                  g,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case ae: {
                var z = t.pendingProps, N = (e.mode & Ke) !== We;
                Jb(
                  s,
                  d,
                  h,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case De: {
            var W = e.memoizedState, q = W.dehydrated;
            if (q !== null) switch (t.tag) {
              case K:
                var Z = t.type;
                t.pendingProps, Kb(q, Z);
                break;
              case ae:
                var _e = t.pendingProps;
                Xb(q, _e);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function gC(e, t) {
      t.flags = t.flags & ~Wa | wn, Wg(e, t);
    }
    function SC(e, t) {
      switch (e.tag) {
        case K: {
          var a = e.type;
          e.pendingProps;
          var i = Db(t, a);
          return i !== null ? (e.stateNode = i, Zr = e, ji = Nb(i), !0) : !1;
        }
        case ae: {
          var o = e.pendingProps, s = _b(t, o);
          return s !== null ? (e.stateNode = s, Zr = e, ji = null, !0) : !1;
        }
        case De: {
          var d = kb(t);
          if (d !== null) {
            var h = {
              dehydrated: d,
              treeContext: fx(),
              retryLane: Ir
            };
            e.memoizedState = h;
            var g = Ck(d);
            return g.return = e, e.child = g, Zr = e, ji = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gg(e) {
      return (e.mode & Ke) !== We && (e.flags & mt) === rt;
    }
    function Kg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xg(e) {
      if (vl) {
        var t = ji;
        if (!t) {
          Gg(e) && (Wg(Zr, e), Kg()), gC(Zr, e), vl = !1, Zr = e;
          return;
        }
        var a = t;
        if (!SC(e, t)) {
          Gg(e) && (Wg(Zr, e), Kg()), t = Ap(a);
          var i = Zr;
          if (!t || !SC(e, t)) {
            gC(Zr, e), vl = !1, Zr = e;
            return;
          }
          yC(i, a);
        }
      }
    }
    function yx(e, t, a) {
      var i = e.stateNode, o = !sc, s = zb(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function gx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Ab(t, a, e);
      if (i) {
        var o = Zr;
        if (o !== null)
          switch (o.tag) {
            case M: {
              var s = o.stateNode.containerInfo, d = (o.mode & Ke) !== We;
              Bb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case K: {
              var h = o.type, g = o.memoizedProps, R = o.stateNode, T = (o.mode & Ke) !== We;
              Ib(
                h,
                g,
                R,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function Sx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Fb(a, e);
    }
    function Ex(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Pb(a);
    }
    function EC(e) {
      for (var t = e.return; t !== null && t.tag !== K && t.tag !== M && t.tag !== De; )
        t = t.return;
      Zr = t;
    }
    function ym(e) {
      if (e !== Zr)
        return !1;
      if (!vl)
        return EC(e), vl = !0, !1;
      if (e.tag !== M && (e.tag !== K || Vb(e.type) && !Lg(e.type, e.memoizedProps))) {
        var t = ji;
        if (t)
          if (Gg(e))
            CC(e), Kg();
          else
            for (; t; )
              yC(e, t), t = Ap(t);
      }
      return EC(e), e.tag === De ? ji = Ex(e) : ji = Zr ? Ap(e.stateNode) : null, !0;
    }
    function Cx() {
      return vl && ji !== null;
    }
    function CC(e) {
      for (var t = ji; t; )
        mC(e, t), t = Ap(t);
    }
    function qf() {
      Zr = null, ji = null, vl = !1, sc = !1;
    }
    function RC() {
      ts !== null && (h1(ts), ts = null);
    }
    function ea() {
      return vl;
    }
    function qg(e) {
      ts === null ? ts = [e] : ts.push(e);
    }
    var Rx = m.ReactCurrentBatchConfig, wx = null;
    function Tx() {
      return Rx.transition;
    }
    var hl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var bx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Lt && (t = a), a = a.return;
        return t;
      }, cc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, jp = [], Vp = [], Bp = [], Ip = [], $p = [], Yp = [], fc = /* @__PURE__ */ new Set();
      hl.recordUnsafeLifecycleWarnings = function(e, t) {
        fc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && jp.push(e), e.mode & Lt && typeof t.UNSAFE_componentWillMount == "function" && Vp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Bp.push(e), e.mode & Lt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ip.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & Lt && typeof t.UNSAFE_componentWillUpdate == "function" && Yp.push(e));
      }, hl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        jp.length > 0 && (jp.forEach(function(N) {
          e.add(Et(N) || "Component"), fc.add(N.type);
        }), jp = []);
        var t = /* @__PURE__ */ new Set();
        Vp.length > 0 && (Vp.forEach(function(N) {
          t.add(Et(N) || "Component"), fc.add(N.type);
        }), Vp = []);
        var a = /* @__PURE__ */ new Set();
        Bp.length > 0 && (Bp.forEach(function(N) {
          a.add(Et(N) || "Component"), fc.add(N.type);
        }), Bp = []);
        var i = /* @__PURE__ */ new Set();
        Ip.length > 0 && (Ip.forEach(function(N) {
          i.add(Et(N) || "Component"), fc.add(N.type);
        }), Ip = []);
        var o = /* @__PURE__ */ new Set();
        $p.length > 0 && ($p.forEach(function(N) {
          o.add(Et(N) || "Component"), fc.add(N.type);
        }), $p = []);
        var s = /* @__PURE__ */ new Set();
        if (Yp.length > 0 && (Yp.forEach(function(N) {
          s.add(Et(N) || "Component"), fc.add(N.type);
        }), Yp = []), t.size > 0) {
          var d = cc(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var h = cc(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var g = cc(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var R = cc(e);
          x(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var T = cc(a);
          x(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var z = cc(o);
          x(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var gm = /* @__PURE__ */ new Map(), wC = /* @__PURE__ */ new Set();
      hl.recordLegacyContextWarning = function(e, t) {
        var a = bx(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!wC.has(e.type)) {
          var i = gm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], gm.set(a, i)), i.push(e));
        }
      }, hl.flushLegacyContextWarning = function() {
        gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Et(s) || "Component"), wC.add(s.type);
            });
            var o = cc(i);
            try {
              tn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Vn();
            }
          }
        });
      }, hl.discardPendingWarnings = function() {
        jp = [], Vp = [], Bp = [], Ip = [], $p = [], Yp = [], gm = /* @__PURE__ */ new Map();
      };
    }
    var Jg, Zg, eS, tS, nS, TC = function(e, t) {
    };
    Jg = !1, Zg = !1, eS = {}, tS = {}, nS = {}, TC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Et(t) || "Component";
        tS[a] || (tS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Qp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Lt || qe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== O) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = Et(e) || "Component";
          eS[o] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), eS[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var h = s;
            if (h.tag !== O)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = h.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = d;
          hr(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var T = function(z) {
            var N = g.refs;
            z === null ? delete N[R] : N[R] = z;
          };
          return T._stringRef = R, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Sm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Em(e) {
      {
        var t = Et(e) || "Component";
        if (nS[t])
          return;
        nS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function bC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function xC(e) {
      function t(j, ee) {
        if (e) {
          var V = j.deletions;
          V === null ? (j.deletions = [ee], j.flags |= Zt) : V.push(ee);
        }
      }
      function a(j, ee) {
        if (!e)
          return null;
        for (var V = ee; V !== null; )
          t(j, V), V = V.sibling;
        return null;
      }
      function i(j, ee) {
        for (var V = /* @__PURE__ */ new Map(), fe = ee; fe !== null; )
          fe.key !== null ? V.set(fe.key, fe) : V.set(fe.index, fe), fe = fe.sibling;
        return V;
      }
      function o(j, ee) {
        var V = Ec(j, ee);
        return V.index = 0, V.sibling = null, V;
      }
      function s(j, ee, V) {
        if (j.index = V, !e)
          return j.flags |= Qd, ee;
        var fe = j.alternate;
        if (fe !== null) {
          var ze = fe.index;
          return ze < ee ? (j.flags |= wn, ee) : ze;
        } else
          return j.flags |= wn, ee;
      }
      function d(j) {
        return e && j.alternate === null && (j.flags |= wn), j;
      }
      function h(j, ee, V, fe) {
        if (ee === null || ee.tag !== ae) {
          var ze = q0(V, j.mode, fe);
          return ze.return = j, ze;
        } else {
          var Oe = o(ee, V);
          return Oe.return = j, Oe;
        }
      }
      function g(j, ee, V, fe) {
        var ze = V.type;
        if (ze === Pe)
          return T(j, ee, V.props.children, fe, V.key);
        if (ee !== null && (ee.elementType === ze || // Keep this check inline so it only runs on the false path:
        L1(ee, V) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ze == "object" && ze !== null && ze.$$typeof === wt && bC(ze) === ee.type)) {
          var Oe = o(ee, V.props);
          return Oe.ref = Qp(j, ee, V), Oe.return = j, Oe._debugSource = V._source, Oe._debugOwner = V._owner, Oe;
        }
        var ht = X0(V, j.mode, fe);
        return ht.ref = Qp(j, ee, V), ht.return = j, ht;
      }
      function R(j, ee, V, fe) {
        if (ee === null || ee.tag !== I || ee.stateNode.containerInfo !== V.containerInfo || ee.stateNode.implementation !== V.implementation) {
          var ze = J0(V, j.mode, fe);
          return ze.return = j, ze;
        } else {
          var Oe = o(ee, V.children || []);
          return Oe.return = j, Oe;
        }
      }
      function T(j, ee, V, fe, ze) {
        if (ee === null || ee.tag !== ue) {
          var Oe = ds(V, j.mode, fe, ze);
          return Oe.return = j, Oe;
        } else {
          var ht = o(ee, V);
          return ht.return = j, ht;
        }
      }
      function z(j, ee, V) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var fe = q0("" + ee, j.mode, V);
          return fe.return = j, fe;
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case ie: {
              var ze = X0(ee, j.mode, V);
              return ze.ref = Qp(j, null, ee), ze.return = j, ze;
            }
            case Ce: {
              var Oe = J0(ee, j.mode, V);
              return Oe.return = j, Oe;
            }
            case wt: {
              var ht = ee._payload, Rt = ee._init;
              return z(j, Rt(ht), V);
            }
          }
          if (Vt(ee) || ir(ee)) {
            var fn = ds(ee, j.mode, V, null);
            return fn.return = j, fn;
          }
          Sm(j, ee);
        }
        return typeof ee == "function" && Em(j), null;
      }
      function N(j, ee, V, fe) {
        var ze = ee !== null ? ee.key : null;
        if (typeof V == "string" && V !== "" || typeof V == "number")
          return ze !== null ? null : h(j, ee, "" + V, fe);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ie:
              return V.key === ze ? g(j, ee, V, fe) : null;
            case Ce:
              return V.key === ze ? R(j, ee, V, fe) : null;
            case wt: {
              var Oe = V._payload, ht = V._init;
              return N(j, ee, ht(Oe), fe);
            }
          }
          if (Vt(V) || ir(V))
            return ze !== null ? null : T(j, ee, V, fe, null);
          Sm(j, V);
        }
        return typeof V == "function" && Em(j), null;
      }
      function W(j, ee, V, fe, ze) {
        if (typeof fe == "string" && fe !== "" || typeof fe == "number") {
          var Oe = j.get(V) || null;
          return h(ee, Oe, "" + fe, ze);
        }
        if (typeof fe == "object" && fe !== null) {
          switch (fe.$$typeof) {
            case ie: {
              var ht = j.get(fe.key === null ? V : fe.key) || null;
              return g(ee, ht, fe, ze);
            }
            case Ce: {
              var Rt = j.get(fe.key === null ? V : fe.key) || null;
              return R(ee, Rt, fe, ze);
            }
            case wt:
              var fn = fe._payload, Kt = fe._init;
              return W(j, ee, V, Kt(fn), ze);
          }
          if (Vt(fe) || ir(fe)) {
            var fr = j.get(V) || null;
            return T(ee, fr, fe, ze, null);
          }
          Sm(ee, fe);
        }
        return typeof fe == "function" && Em(ee), null;
      }
      function q(j, ee, V) {
        {
          if (typeof j != "object" || j === null)
            return ee;
          switch (j.$$typeof) {
            case ie:
            case Ce:
              TC(j, V);
              var fe = j.key;
              if (typeof fe != "string")
                break;
              if (ee === null) {
                ee = /* @__PURE__ */ new Set(), ee.add(fe);
                break;
              }
              if (!ee.has(fe)) {
                ee.add(fe);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", fe);
              break;
            case wt:
              var ze = j._payload, Oe = j._init;
              q(Oe(ze), ee, V);
              break;
          }
        }
        return ee;
      }
      function Z(j, ee, V, fe) {
        for (var ze = null, Oe = 0; Oe < V.length; Oe++) {
          var ht = V[Oe];
          ze = q(ht, ze, j);
        }
        for (var Rt = null, fn = null, Kt = ee, fr = 0, Xt = 0, rr = null; Kt !== null && Xt < V.length; Xt++) {
          Kt.index > Xt ? (rr = Kt, Kt = null) : rr = Kt.sibling;
          var xa = N(j, Kt, V[Xt], fe);
          if (xa === null) {
            Kt === null && (Kt = rr);
            break;
          }
          e && Kt && xa.alternate === null && t(j, Kt), fr = s(xa, fr, Xt), fn === null ? Rt = xa : fn.sibling = xa, fn = xa, Kt = rr;
        }
        if (Xt === V.length) {
          if (a(j, Kt), ea()) {
            var oa = Xt;
            oc(j, oa);
          }
          return Rt;
        }
        if (Kt === null) {
          for (; Xt < V.length; Xt++) {
            var wi = z(j, V[Xt], fe);
            wi !== null && (fr = s(wi, fr, Xt), fn === null ? Rt = wi : fn.sibling = wi, fn = wi);
          }
          if (ea()) {
            var Pa = Xt;
            oc(j, Pa);
          }
          return Rt;
        }
        for (var Ha = i(j, Kt); Xt < V.length; Xt++) {
          var Da = W(Ha, j, Xt, V[Xt], fe);
          Da !== null && (e && Da.alternate !== null && Ha.delete(Da.key === null ? Xt : Da.key), fr = s(Da, fr, Xt), fn === null ? Rt = Da : fn.sibling = Da, fn = Da);
        }
        if (e && Ha.forEach(function(md) {
          return t(j, md);
        }), ea()) {
          var Zo = Xt;
          oc(j, Zo);
        }
        return Rt;
      }
      function _e(j, ee, V, fe) {
        var ze = ir(V);
        if (typeof ze != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          V[Symbol.toStringTag] === "Generator" && (Zg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Zg = !0), V.entries === ze && (Jg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jg = !0);
          var Oe = ze.call(V);
          if (Oe)
            for (var ht = null, Rt = Oe.next(); !Rt.done; Rt = Oe.next()) {
              var fn = Rt.value;
              ht = q(fn, ht, j);
            }
        }
        var Kt = ze.call(V);
        if (Kt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var fr = null, Xt = null, rr = ee, xa = 0, oa = 0, wi = null, Pa = Kt.next(); rr !== null && !Pa.done; oa++, Pa = Kt.next()) {
          rr.index > oa ? (wi = rr, rr = null) : wi = rr.sibling;
          var Ha = N(j, rr, Pa.value, fe);
          if (Ha === null) {
            rr === null && (rr = wi);
            break;
          }
          e && rr && Ha.alternate === null && t(j, rr), xa = s(Ha, xa, oa), Xt === null ? fr = Ha : Xt.sibling = Ha, Xt = Ha, rr = wi;
        }
        if (Pa.done) {
          if (a(j, rr), ea()) {
            var Da = oa;
            oc(j, Da);
          }
          return fr;
        }
        if (rr === null) {
          for (; !Pa.done; oa++, Pa = Kt.next()) {
            var Zo = z(j, Pa.value, fe);
            Zo !== null && (xa = s(Zo, xa, oa), Xt === null ? fr = Zo : Xt.sibling = Zo, Xt = Zo);
          }
          if (ea()) {
            var md = oa;
            oc(j, md);
          }
          return fr;
        }
        for (var Tv = i(j, rr); !Pa.done; oa++, Pa = Kt.next()) {
          var uo = W(Tv, j, oa, Pa.value, fe);
          uo !== null && (e && uo.alternate !== null && Tv.delete(uo.key === null ? oa : uo.key), xa = s(uo, xa, oa), Xt === null ? fr = uo : Xt.sibling = uo, Xt = uo);
        }
        if (e && Tv.forEach(function(Jk) {
          return t(j, Jk);
        }), ea()) {
          var qk = oa;
          oc(j, qk);
        }
        return fr;
      }
      function at(j, ee, V, fe) {
        if (ee !== null && ee.tag === ae) {
          a(j, ee.sibling);
          var ze = o(ee, V);
          return ze.return = j, ze;
        }
        a(j, ee);
        var Oe = q0(V, j.mode, fe);
        return Oe.return = j, Oe;
      }
      function Xe(j, ee, V, fe) {
        for (var ze = V.key, Oe = ee; Oe !== null; ) {
          if (Oe.key === ze) {
            var ht = V.type;
            if (ht === Pe) {
              if (Oe.tag === ue) {
                a(j, Oe.sibling);
                var Rt = o(Oe, V.props.children);
                return Rt.return = j, Rt._debugSource = V._source, Rt._debugOwner = V._owner, Rt;
              }
            } else if (Oe.elementType === ht || // Keep this check inline so it only runs on the false path:
            L1(Oe, V) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ht == "object" && ht !== null && ht.$$typeof === wt && bC(ht) === Oe.type) {
              a(j, Oe.sibling);
              var fn = o(Oe, V.props);
              return fn.ref = Qp(j, Oe, V), fn.return = j, fn._debugSource = V._source, fn._debugOwner = V._owner, fn;
            }
            a(j, Oe);
            break;
          } else
            t(j, Oe);
          Oe = Oe.sibling;
        }
        if (V.type === Pe) {
          var Kt = ds(V.props.children, j.mode, fe, V.key);
          return Kt.return = j, Kt;
        } else {
          var fr = X0(V, j.mode, fe);
          return fr.ref = Qp(j, ee, V), fr.return = j, fr;
        }
      }
      function $t(j, ee, V, fe) {
        for (var ze = V.key, Oe = ee; Oe !== null; ) {
          if (Oe.key === ze)
            if (Oe.tag === I && Oe.stateNode.containerInfo === V.containerInfo && Oe.stateNode.implementation === V.implementation) {
              a(j, Oe.sibling);
              var ht = o(Oe, V.children || []);
              return ht.return = j, ht;
            } else {
              a(j, Oe);
              break;
            }
          else
            t(j, Oe);
          Oe = Oe.sibling;
        }
        var Rt = J0(V, j.mode, fe);
        return Rt.return = j, Rt;
      }
      function Ft(j, ee, V, fe) {
        var ze = typeof V == "object" && V !== null && V.type === Pe && V.key === null;
        if (ze && (V = V.props.children), typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case ie:
              return d(Xe(j, ee, V, fe));
            case Ce:
              return d($t(j, ee, V, fe));
            case wt:
              var Oe = V._payload, ht = V._init;
              return Ft(j, ee, ht(Oe), fe);
          }
          if (Vt(V))
            return Z(j, ee, V, fe);
          if (ir(V))
            return _e(j, ee, V, fe);
          Sm(j, V);
        }
        return typeof V == "string" && V !== "" || typeof V == "number" ? d(at(j, ee, "" + V, fe)) : (typeof V == "function" && Em(j), a(j, ee));
      }
      return Ft;
    }
    var Jf = xC(!0), DC = xC(!1);
    function Dx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Ec(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Ec(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _x(e, t) {
      for (var a = e.child; a !== null; )
        hk(a, t), a = a.sibling;
    }
    var rS = Ju(null), aS;
    aS = {};
    var Cm = null, Zf = null, iS = null, Rm = !1;
    function wm() {
      Cm = null, Zf = null, iS = null, Rm = !1;
    }
    function _C() {
      Rm = !0;
    }
    function kC() {
      Rm = !1;
    }
    function OC(e, t, a) {
      Ta(rS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== aS && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = aS;
    }
    function lS(e, t) {
      var a = rS.current;
      wa(rS, t), e._currentValue = a;
    }
    function oS(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Uo(i.childLanes, t) ? o !== null && !Uo(o.childLanes, t) && (o.childLanes = bt(o.childLanes, t)) : (i.childLanes = bt(i.childLanes, t), o !== null && (o.childLanes = bt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kx(e, t, a) {
      Ox(e, t, a);
    }
    function Ox(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === O) {
                var h = Mu(a), g = Wo(Cn, h);
                g.tag = bm;
                var R = i.updateQueue;
                if (R !== null) {
                  var T = R.shared, z = T.pending;
                  z === null ? g.next = g : (g.next = z.next, z.next = g), T.pending = g;
                }
              }
              i.lanes = bt(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = bt(N.lanes, a)), oS(i.return, a, e), s.lanes = bt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === he)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === et) {
          var W = i.return;
          if (W === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          W.lanes = bt(W.lanes, a);
          var q = W.alternate;
          q !== null && (q.lanes = bt(q.lanes, a)), oS(W, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var Z = o.sibling;
            if (Z !== null) {
              Z.return = o.return, o = Z;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function ed(e, t) {
      Cm = e, Zf = null, iS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Ca(a.lanes, t) && ov(), a.firstContext = null);
      }
    }
    function Rr(e) {
      Rm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (iS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Zf === null) {
          if (Cm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Zf = a, Cm.dependencies = {
            lanes: le,
            firstContext: a
          };
        } else
          Zf = Zf.next = a;
      }
      return t;
    }
    var dc = null;
    function uS(e) {
      dc === null ? dc = [e] : dc.push(e);
    }
    function Lx() {
      if (dc !== null) {
        for (var e = 0; e < dc.length; e++) {
          var t = dc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        dc = null;
      }
    }
    function LC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, uS(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Tm(e, i);
    }
    function Nx(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, uS(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function Mx(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, uS(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Tm(e, i);
    }
    function ii(e, t) {
      return Tm(e, t);
    }
    var Ux = Tm;
    function Tm(e, t) {
      e.lanes = bt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = bt(a.lanes, t)), a === null && (e.flags & (wn | Wa)) !== rt && D1(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = bt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = bt(a.childLanes, t) : (o.flags & (wn | Wa)) !== rt && D1(e), i = o, o = o.return;
      if (i.tag === M) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var NC = 0, MC = 1, bm = 2, sS = 3, xm = !1, cS, Dm;
    cS = !1, Dm = null;
    function fS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: le
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function UC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Wo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: NC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function ns(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Dm === o && !cS && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cS = !0), N_()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, Ux(e, a);
      } else
        return Mx(e, o, t, a);
    }
    function _m(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (op(a)) {
          var s = o.lanes;
          s = yf(s, e.pendingLanes);
          var d = bt(s, a);
          o.lanes = d, up(e, d);
        }
      }
    }
    function dS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, d = null, h = a.firstBaseUpdate;
          if (h !== null) {
            var g = h;
            do {
              var R = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              d === null ? s = d = R : (d.next = R, d = R), g = g.next;
            } while (g !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function zx(e, t, a, i, o, s) {
      switch (a.tag) {
        case MC: {
          var d = a.payload;
          if (typeof d == "function") {
            _C();
            var h = d.call(s, i, o);
            {
              if (e.mode & Lt) {
                tr(!0);
                try {
                  d.call(s, i, o);
                } finally {
                  tr(!1);
                }
              }
              kC();
            }
            return h;
          }
          return d;
        }
        case sS:
          e.flags = e.flags & ~gr | mt;
        case NC: {
          var g = a.payload, R;
          if (typeof g == "function") {
            _C(), R = g.call(s, i, o);
            {
              if (e.mode & Lt) {
                tr(!0);
                try {
                  g.call(s, i, o);
                } finally {
                  tr(!1);
                }
              }
              kC();
            }
          } else
            R = g;
          return R == null ? i : Tt({}, i, R);
        }
        case bm:
          return xm = !0, i;
      }
      return i;
    }
    function km(e, t, a, i) {
      var o = e.updateQueue;
      xm = !1, Dm = o.shared;
      var s = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var g = h, R = g.next;
        g.next = null, d === null ? s = R : d.next = R, d = g;
        var T = e.alternate;
        if (T !== null) {
          var z = T.updateQueue, N = z.lastBaseUpdate;
          N !== d && (N === null ? z.firstBaseUpdate = R : N.next = R, z.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var W = o.baseState, q = le, Z = null, _e = null, at = null, Xe = s;
        do {
          var $t = Xe.lane, Ft = Xe.eventTime;
          if (Uo(i, $t)) {
            if (at !== null) {
              var ee = {
                eventTime: Ft,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: nr,
                tag: Xe.tag,
                payload: Xe.payload,
                callback: Xe.callback,
                next: null
              };
              at = at.next = ee;
            }
            W = zx(e, o, Xe, W, t, a);
            var V = Xe.callback;
            if (V !== null && // If the update was already committed, we should not queue its
            // callback again.
            Xe.lane !== nr) {
              e.flags |= Ni;
              var fe = o.effects;
              fe === null ? o.effects = [Xe] : fe.push(Xe);
            }
          } else {
            var j = {
              eventTime: Ft,
              lane: $t,
              tag: Xe.tag,
              payload: Xe.payload,
              callback: Xe.callback,
              next: null
            };
            at === null ? (_e = at = j, Z = W) : at = at.next = j, q = bt(q, $t);
          }
          if (Xe = Xe.next, Xe === null) {
            if (h = o.shared.pending, h === null)
              break;
            var ze = h, Oe = ze.next;
            ze.next = null, Xe = Oe, o.lastBaseUpdate = ze, o.shared.pending = null;
          }
        } while (!0);
        at === null && (Z = W), o.baseState = Z, o.firstBaseUpdate = _e, o.lastBaseUpdate = at;
        var ht = o.shared.interleaved;
        if (ht !== null) {
          var Rt = ht;
          do
            q = bt(q, Rt.lane), Rt = Rt.next;
          while (Rt !== ht);
        } else s === null && (o.shared.lanes = le);
        Sv(q), e.lanes = q, e.memoizedState = W;
      }
      Dm = null;
    }
    function Ax(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function zC() {
      xm = !1;
    }
    function Om() {
      return xm;
    }
    function AC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], d = s.callback;
          d !== null && (s.callback = null, Ax(d, a));
        }
    }
    var Wp = {}, rs = Ju(Wp), Gp = Ju(Wp), Lm = Ju(Wp);
    function Nm(e) {
      if (e === Wp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function FC() {
      var e = Nm(Lm.current);
      return e;
    }
    function pS(e, t) {
      Ta(Lm, t, e), Ta(Gp, e, e), Ta(rs, Wp, e);
      var a = ZT(t);
      wa(rs, e), Ta(rs, a, e);
    }
    function td(e) {
      wa(rs, e), wa(Gp, e), wa(Lm, e);
    }
    function vS() {
      var e = Nm(rs.current);
      return e;
    }
    function PC(e) {
      Nm(Lm.current);
      var t = Nm(rs.current), a = eb(t, e.type);
      t !== a && (Ta(Gp, e, e), Ta(rs, a, e));
    }
    function hS(e) {
      Gp.current === e && (wa(rs, e), wa(Gp, e));
    }
    var Fx = 0, HC = 1, jC = 1, Kp = 2, ml = Ju(Fx);
    function mS(e, t) {
      return (e & t) !== 0;
    }
    function nd(e) {
      return e & HC;
    }
    function yS(e, t) {
      return e & HC | t;
    }
    function Px(e, t) {
      return e | t;
    }
    function as(e, t) {
      Ta(ml, t, e);
    }
    function rd(e) {
      wa(ml, e);
    }
    function Hx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Mm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || rC(i) || zg(i))
              return t;
          }
        } else if (t.tag === pt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & mt) !== rt;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var li = (
      /*   */
      0
    ), kr = (
      /* */
      1
    ), to = (
      /*  */
      2
    ), Or = (
      /*    */
      4
    ), ta = (
      /*   */
      8
    ), gS = [];
    function SS() {
      for (var e = 0; e < gS.length; e++) {
        var t = gS[e];
        t._workInProgressVersionPrimary = null;
      }
      gS.length = 0;
    }
    function jx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Me = m.ReactCurrentDispatcher, Xp = m.ReactCurrentBatchConfig, ES, ad;
    ES = /* @__PURE__ */ new Set();
    var pc = le, cn = null, Lr = null, Nr = null, Um = !1, qp = !1, Jp = 0, Vx = 0, Bx = 25, ne = null, Vi = null, is = -1, CS = !1;
    function rn() {
      {
        var e = ne;
        Vi === null ? Vi = [e] : Vi.push(e);
      }
    }
    function Te() {
      {
        var e = ne;
        Vi !== null && (is++, Vi[is] !== e && Ix(e));
      }
    }
    function id(e) {
      e != null && !Vt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function Ix(e) {
      {
        var t = Et(cn);
        if (!ES.has(t) && (ES.add(t), Vi !== null)) {
          for (var a = "", i = 30, o = 0; o <= is; o++) {
            for (var s = Vi[o], d = o === is ? e : s, h = o + 1 + ". " + s; h.length < i; )
              h += " ";
            h += d + `
`, a += h;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ba() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function RS(e, t) {
      if (CS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ie(e[a], t[a]))
          return !1;
      return !0;
    }
    function ld(e, t, a, i, o, s) {
      pc = s, cn = t, Vi = e !== null ? e._debugHookTypes : null, is = -1, CS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = le, e !== null && e.memoizedState !== null ? Me.current = uR : Vi !== null ? Me.current = oR : Me.current = lR;
      var d = a(i, o);
      if (qp) {
        var h = 0;
        do {
          if (qp = !1, Jp = 0, h >= Bx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, CS = !1, Lr = null, Nr = null, t.updateQueue = null, is = -1, Me.current = sR, d = a(i, o);
        } while (qp);
      }
      Me.current = Wm, t._debugHookTypes = Vi;
      var g = Lr !== null && Lr.next !== null;
      if (pc = le, cn = null, Lr = null, Nr = null, ne = null, Vi = null, is = -1, e !== null && (e.flags & xr) !== (t.flags & xr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ke) !== We && y("Internal React error: Expected static flag was missing. Please notify the React team."), Um = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function od() {
      var e = Jp !== 0;
      return Jp = 0, e;
    }
    function VC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ma) !== We ? t.flags &= ~(bo | ha | kn | xt) : t.flags &= ~(kn | xt), e.lanes = $s(e.lanes, a);
    }
    function BC() {
      if (Me.current = Wm, Um) {
        for (var e = cn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Um = !1;
      }
      pc = le, cn = null, Lr = null, Nr = null, Vi = null, is = -1, ne = null, tR = !1, qp = !1, Jp = 0;
    }
    function no() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Nr === null ? cn.memoizedState = Nr = e : Nr = Nr.next = e, Nr;
    }
    function Bi() {
      var e;
      if (Lr === null) {
        var t = cn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Lr.next;
      var a;
      if (Nr === null ? a = cn.memoizedState : a = Nr.next, a !== null)
        Nr = a, a = Nr.next, Lr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Lr = e;
        var i = {
          memoizedState: Lr.memoizedState,
          baseState: Lr.baseState,
          baseQueue: Lr.baseQueue,
          queue: Lr.queue,
          next: null
        };
        Nr === null ? cn.memoizedState = Nr = i : Nr = Nr.next = i;
      }
      return Nr;
    }
    function IC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function TS(e, t, a) {
      var i = no(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var d = s.dispatch = Wx.bind(null, cn, s);
      return [i.memoizedState, d];
    }
    function bS(e, t, a) {
      var i = Bi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = Lr, d = s.baseQueue, h = o.pending;
      if (h !== null) {
        if (d !== null) {
          var g = d.next, R = h.next;
          d.next = R, h.next = g;
        }
        s.baseQueue !== d && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = h, o.pending = null;
      }
      if (d !== null) {
        var T = d.next, z = s.baseState, N = null, W = null, q = null, Z = T;
        do {
          var _e = Z.lane;
          if (Uo(pc, _e)) {
            if (q !== null) {
              var Xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: nr,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              q = q.next = Xe;
            }
            if (Z.hasEagerState)
              z = Z.eagerState;
            else {
              var $t = Z.action;
              z = e(z, $t);
            }
          } else {
            var at = {
              lane: _e,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            q === null ? (W = q = at, N = z) : q = q.next = at, cn.lanes = bt(cn.lanes, _e), Sv(_e);
          }
          Z = Z.next;
        } while (Z !== null && Z !== T);
        q === null ? N = z : q.next = W, Ie(z, i.memoizedState) || ov(), i.memoizedState = z, i.baseState = N, i.baseQueue = q, o.lastRenderedState = z;
      }
      var Ft = o.interleaved;
      if (Ft !== null) {
        var j = Ft;
        do {
          var ee = j.lane;
          cn.lanes = bt(cn.lanes, ee), Sv(ee), j = j.next;
        } while (j !== Ft);
      } else d === null && (o.lanes = le);
      var V = o.dispatch;
      return [i.memoizedState, V];
    }
    function xS(e, t, a) {
      var i = Bi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, d = o.pending, h = i.memoizedState;
      if (d !== null) {
        o.pending = null;
        var g = d.next, R = g;
        do {
          var T = R.action;
          h = e(h, T), R = R.next;
        } while (R !== g);
        Ie(h, i.memoizedState) || ov(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), o.lastRenderedState = h;
      }
      return [h, s];
    }
    function oN(e, t, a) {
    }
    function uN(e, t, a) {
    }
    function DS(e, t, a) {
      var i = cn, o = no(), s, d = ea();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), ad || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), ad = !0);
      } else {
        if (s = t(), !ad) {
          var h = t();
          Ie(s, h) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), ad = !0);
        }
        var g = dy();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Is(g, pc) || $C(i, t, s);
      }
      o.memoizedState = s;
      var R = {
        value: s,
        getSnapshot: t
      };
      return o.queue = R, Hm(QC.bind(null, i, R, e), [e]), i.flags |= kn, Zp(kr | ta, YC.bind(null, i, R, s, t), void 0, null), s;
    }
    function zm(e, t, a) {
      var i = cn, o = Bi(), s = t();
      if (!ad) {
        var d = t();
        Ie(s, d) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), ad = !0);
      }
      var h = o.memoizedState, g = !Ie(h, s);
      g && (o.memoizedState = s, ov());
      var R = o.queue;
      if (tv(QC.bind(null, i, R, e), [e]), R.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Nr !== null && Nr.memoizedState.tag & kr) {
        i.flags |= kn, Zp(kr | ta, YC.bind(null, i, R, s, t), void 0, null);
        var T = dy();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Is(T, pc) || $C(i, t, s);
      }
      return s;
    }
    function $C(e, t, a) {
      e.flags |= Ms;
      var i = {
        getSnapshot: t,
        value: a
      }, o = cn.updateQueue;
      if (o === null)
        o = IC(), cn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function YC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, WC(t) && GC(e);
    }
    function QC(e, t, a) {
      var i = function() {
        WC(t) && GC(e);
      };
      return a(i);
    }
    function WC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Ie(a, i);
      } catch {
        return !0;
      }
    }
    function GC(e) {
      var t = ii(e, Je);
      t !== null && Ar(t, e, Je, Cn);
    }
    function Am(e) {
      var t = no();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: le,
        dispatch: null,
        lastRenderedReducer: wS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Gx.bind(null, cn, a);
      return [t.memoizedState, i];
    }
    function _S(e) {
      return bS(wS);
    }
    function kS(e) {
      return xS(wS);
    }
    function Zp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = cn.updateQueue;
      if (s === null)
        s = IC(), cn.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = o.next = o;
        else {
          var h = d.next;
          d.next = o, o.next = h, s.lastEffect = o;
        }
      }
      return o;
    }
    function OS(e) {
      var t = no();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Fm(e) {
      var t = Bi();
      return t.memoizedState;
    }
    function ev(e, t, a, i) {
      var o = no(), s = i === void 0 ? null : i;
      cn.flags |= e, o.memoizedState = Zp(kr | t, a, void 0, s);
    }
    function Pm(e, t, a, i) {
      var o = Bi(), s = i === void 0 ? null : i, d = void 0;
      if (Lr !== null) {
        var h = Lr.memoizedState;
        if (d = h.destroy, s !== null) {
          var g = h.deps;
          if (RS(s, g)) {
            o.memoizedState = Zp(t, a, d, s);
            return;
          }
        }
      }
      cn.flags |= e, o.memoizedState = Zp(kr | t, a, d, s);
    }
    function Hm(e, t) {
      return (cn.mode & Ma) !== We ? ev(bo | kn | Il, ta, e, t) : ev(kn | Il, ta, e, t);
    }
    function tv(e, t) {
      return Pm(kn, ta, e, t);
    }
    function LS(e, t) {
      return ev(xt, to, e, t);
    }
    function jm(e, t) {
      return Pm(xt, to, e, t);
    }
    function NS(e, t) {
      var a = xt;
      return a |= va, (cn.mode & Ma) !== We && (a |= ha), ev(a, Or, e, t);
    }
    function Vm(e, t) {
      return Pm(xt, Or, e, t);
    }
    function KC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function MS(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = xt;
      return o |= va, (cn.mode & Ma) !== We && (o |= ha), ev(o, Or, KC.bind(null, t, e), i);
    }
    function Bm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Pm(xt, Or, KC.bind(null, t, e), i);
    }
    function $x(e, t) {
    }
    var Im = $x;
    function US(e, t) {
      var a = no(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function $m(e, t) {
      var a = Bi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (RS(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function zS(e, t) {
      var a = no(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Ym(e, t) {
      var a = Bi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (RS(i, s))
          return o[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function AS(e) {
      var t = no();
      return t.memoizedState = e, e;
    }
    function XC(e) {
      var t = Bi(), a = Lr, i = a.memoizedState;
      return JC(t, i, e);
    }
    function qC(e) {
      var t = Bi();
      if (Lr === null)
        return t.memoizedState = e, e;
      var a = Lr.memoizedState;
      return JC(t, a, e);
    }
    function JC(e, t, a) {
      var i = !Ch(pc);
      if (i) {
        if (!Ie(a, t)) {
          var o = Th();
          cn.lanes = bt(cn.lanes, o), Sv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, ov()), e.memoizedState = a, a;
    }
    function Yx(e, t, a) {
      var i = Za();
      In(ng(i, sl)), e(!0);
      var o = Xp.transition;
      Xp.transition = {};
      var s = Xp.transition;
      Xp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Xp.transition = o, o === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && x("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function FS() {
      var e = Am(!1), t = e[0], a = e[1], i = Yx.bind(null, a), o = no();
      return o.memoizedState = i, [t, i];
    }
    function ZC() {
      var e = _S(), t = e[0], a = Bi(), i = a.memoizedState;
      return [t, i];
    }
    function eR() {
      var e = kS(), t = e[0], a = Bi(), i = a.memoizedState;
      return [t, i];
    }
    var tR = !1;
    function Qx() {
      return tR;
    }
    function PS() {
      var e = no(), t = dy(), a = t.identifierPrefix, i;
      if (ea()) {
        var o = sx();
        i = ":" + a + "R" + o;
        var s = Jp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = Vx++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Qm() {
      var e = Bi(), t = e.memoizedState;
      return t;
    }
    function Wx(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = cs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (nR(e))
        rR(t, o);
      else {
        var s = LC(e, t, o, i);
        if (s !== null) {
          var d = Fa();
          Ar(s, e, i, d), aR(s, t, i);
        }
      }
      iR(e, i);
    }
    function Gx(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = cs(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (nR(e))
        rR(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === le && (s === null || s.lanes === le)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var h;
            h = Me.current, Me.current = yl;
            try {
              var g = t.lastRenderedState, R = d(g, a);
              if (o.hasEagerState = !0, o.eagerState = R, Ie(R, g)) {
                Nx(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Me.current = h;
            }
          }
        }
        var T = LC(e, t, o, i);
        if (T !== null) {
          var z = Fa();
          Ar(T, e, i, z), aR(T, t, i);
        }
      }
      iR(e, i);
    }
    function nR(e) {
      var t = e.alternate;
      return e === cn || t !== null && t === cn;
    }
    function rR(e, t) {
      qp = Um = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function aR(e, t, a) {
      if (op(a)) {
        var i = t.lanes;
        i = yf(i, e.pendingLanes);
        var o = bt(i, a);
        t.lanes = o, up(e, o);
      }
    }
    function iR(e, t, a) {
      Fs(e, t);
    }
    var Wm = {
      readContext: Rr,
      useCallback: ba,
      useContext: ba,
      useEffect: ba,
      useImperativeHandle: ba,
      useInsertionEffect: ba,
      useLayoutEffect: ba,
      useMemo: ba,
      useReducer: ba,
      useRef: ba,
      useState: ba,
      useDebugValue: ba,
      useDeferredValue: ba,
      useTransition: ba,
      useMutableSource: ba,
      useSyncExternalStore: ba,
      useId: ba,
      unstable_isNewReconciler: ve
    }, lR = null, oR = null, uR = null, sR = null, ro = null, yl = null, Gm = null;
    {
      var HS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ct = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      lR = {
        readContext: function(e) {
          return Rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", rn(), id(t), US(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", rn(), Rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", rn(), id(t), Hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", rn(), id(a), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", rn(), id(t), LS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", rn(), id(t), NS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", rn(), id(t);
          var a = Me.current;
          Me.current = ro;
          try {
            return zS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", rn();
          var i = Me.current;
          Me.current = ro;
          try {
            return TS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", rn(), OS(e);
        },
        useState: function(e) {
          ne = "useState", rn();
          var t = Me.current;
          Me.current = ro;
          try {
            return Am(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", rn(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", rn(), AS(e);
        },
        useTransition: function() {
          return ne = "useTransition", rn(), FS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", rn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", rn(), DS(e, t, a);
        },
        useId: function() {
          return ne = "useId", rn(), PS();
        },
        unstable_isNewReconciler: ve
      }, oR = {
        readContext: function(e) {
          return Rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Te(), US(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Te(), Rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Te(), Hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Te(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Te(), LS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Te(), NS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Te();
          var a = Me.current;
          Me.current = ro;
          try {
            return zS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Te();
          var i = Me.current;
          Me.current = ro;
          try {
            return TS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Te(), OS(e);
        },
        useState: function(e) {
          ne = "useState", Te();
          var t = Me.current;
          Me.current = ro;
          try {
            return Am(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Te(), AS(e);
        },
        useTransition: function() {
          return ne = "useTransition", Te(), FS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Te(), DS(e, t, a);
        },
        useId: function() {
          return ne = "useId", Te(), PS();
        },
        unstable_isNewReconciler: ve
      }, uR = {
        readContext: function(e) {
          return Rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Te(), $m(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Te(), Rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Te(), tv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Te(), Bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Te(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Te(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Te();
          var a = Me.current;
          Me.current = yl;
          try {
            return Ym(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Te();
          var i = Me.current;
          Me.current = yl;
          try {
            return bS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Te(), Fm();
        },
        useState: function(e) {
          ne = "useState", Te();
          var t = Me.current;
          Me.current = yl;
          try {
            return _S(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Te(), Im();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Te(), XC(e);
        },
        useTransition: function() {
          return ne = "useTransition", Te(), ZC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Te(), zm(e, t);
        },
        useId: function() {
          return ne = "useId", Te(), Qm();
        },
        unstable_isNewReconciler: ve
      }, sR = {
        readContext: function(e) {
          return Rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Te(), $m(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Te(), Rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Te(), tv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Te(), Bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Te(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Te(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Te();
          var a = Me.current;
          Me.current = Gm;
          try {
            return Ym(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Te();
          var i = Me.current;
          Me.current = Gm;
          try {
            return xS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Te(), Fm();
        },
        useState: function(e) {
          ne = "useState", Te();
          var t = Me.current;
          Me.current = Gm;
          try {
            return kS(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Te(), Im();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Te(), qC(e);
        },
        useTransition: function() {
          return ne = "useTransition", Te(), eR();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Te(), zm(e, t);
        },
        useId: function() {
          return ne = "useId", Te(), Qm();
        },
        unstable_isNewReconciler: ve
      }, ro = {
        readContext: function(e) {
          return HS(), Rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Ct(), rn(), US(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Ct(), rn(), Rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Ct(), rn(), Hm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Ct(), rn(), MS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Ct(), rn(), LS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Ct(), rn(), NS(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Ct(), rn();
          var a = Me.current;
          Me.current = ro;
          try {
            return zS(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Ct(), rn();
          var i = Me.current;
          Me.current = ro;
          try {
            return TS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Ct(), rn(), OS(e);
        },
        useState: function(e) {
          ne = "useState", Ct(), rn();
          var t = Me.current;
          Me.current = ro;
          try {
            return Am(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Ct(), rn(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Ct(), rn(), AS(e);
        },
        useTransition: function() {
          return ne = "useTransition", Ct(), rn(), FS();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Ct(), rn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Ct(), rn(), DS(e, t, a);
        },
        useId: function() {
          return ne = "useId", Ct(), rn(), PS();
        },
        unstable_isNewReconciler: ve
      }, yl = {
        readContext: function(e) {
          return HS(), Rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Ct(), Te(), $m(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Ct(), Te(), Rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Ct(), Te(), tv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Ct(), Te(), Bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Ct(), Te(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Ct(), Te(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Ct(), Te();
          var a = Me.current;
          Me.current = yl;
          try {
            return Ym(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Ct(), Te();
          var i = Me.current;
          Me.current = yl;
          try {
            return bS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Ct(), Te(), Fm();
        },
        useState: function(e) {
          ne = "useState", Ct(), Te();
          var t = Me.current;
          Me.current = yl;
          try {
            return _S(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Ct(), Te(), Im();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Ct(), Te(), XC(e);
        },
        useTransition: function() {
          return ne = "useTransition", Ct(), Te(), ZC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Ct(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Ct(), Te(), zm(e, t);
        },
        useId: function() {
          return ne = "useId", Ct(), Te(), Qm();
        },
        unstable_isNewReconciler: ve
      }, Gm = {
        readContext: function(e) {
          return HS(), Rr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", Ct(), Te(), $m(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", Ct(), Te(), Rr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", Ct(), Te(), tv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", Ct(), Te(), Bm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", Ct(), Te(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", Ct(), Te(), Vm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", Ct(), Te();
          var a = Me.current;
          Me.current = yl;
          try {
            return Ym(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", Ct(), Te();
          var i = Me.current;
          Me.current = yl;
          try {
            return xS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", Ct(), Te(), Fm();
        },
        useState: function(e) {
          ne = "useState", Ct(), Te();
          var t = Me.current;
          Me.current = yl;
          try {
            return kS(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", Ct(), Te(), Im();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", Ct(), Te(), qC(e);
        },
        useTransition: function() {
          return ne = "useTransition", Ct(), Te(), eR();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", Ct(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", Ct(), Te(), zm(e, t);
        },
        useId: function() {
          return ne = "useId", Ct(), Te(), Qm();
        },
        unstable_isNewReconciler: ve
      };
    }
    var ls = v.unstable_now, cR = 0, Km = -1, nv = -1, Xm = -1, jS = !1, qm = !1;
    function fR() {
      return jS;
    }
    function Kx() {
      qm = !0;
    }
    function Xx() {
      jS = !1, qm = !1;
    }
    function qx() {
      jS = qm, qm = !1;
    }
    function dR() {
      return cR;
    }
    function pR() {
      cR = ls();
    }
    function VS(e) {
      nv = ls(), e.actualStartTime < 0 && (e.actualStartTime = ls());
    }
    function vR(e) {
      nv = -1;
    }
    function Jm(e, t) {
      if (nv >= 0) {
        var a = ls() - nv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), nv = -1;
      }
    }
    function ao(e) {
      if (Km >= 0) {
        var t = ls() - Km;
        Km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case be:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function BS(e) {
      if (Xm >= 0) {
        var t = ls() - Xm;
        Xm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case be:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function io() {
      Km = ls();
    }
    function IS() {
      Xm = ls();
    }
    function $S(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function gl(e, t) {
      if (e && e.defaultProps) {
        var a = Tt({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var YS = {}, QS, WS, GS, KS, XS, hR, Zm, qS, JS, ZS, rv;
    {
      QS = /* @__PURE__ */ new Set(), WS = /* @__PURE__ */ new Set(), GS = /* @__PURE__ */ new Set(), KS = /* @__PURE__ */ new Set(), qS = /* @__PURE__ */ new Set(), XS = /* @__PURE__ */ new Set(), JS = /* @__PURE__ */ new Set(), ZS = /* @__PURE__ */ new Set(), rv = /* @__PURE__ */ new Set();
      var mR = /* @__PURE__ */ new Set();
      Zm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          mR.has(a) || (mR.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, hR = function(e, t) {
        if (t === void 0) {
          var a = jt(e) || "Component";
          XS.has(a) || (XS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(YS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(YS);
    }
    function e0(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & Lt) {
          tr(!0);
          try {
            s = a(i, o);
          } finally {
            tr(!1);
          }
        }
        hR(t, s);
      }
      var d = s == null ? o : Tt({}, o, s);
      if (e.memoizedState = d, e.lanes === le) {
        var h = e.updateQueue;
        h.baseState = d;
      }
    }
    var t0 = {
      isMounted: La,
      enqueueSetState: function(e, t, a) {
        var i = Ya(e), o = Fa(), s = cs(i), d = Wo(o, s);
        d.payload = t, a != null && (Zm(a, "setState"), d.callback = a);
        var h = ns(i, d, s);
        h !== null && (Ar(h, i, s, o), _m(h, i, s)), Fs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ya(e), o = Fa(), s = cs(i), d = Wo(o, s);
        d.tag = MC, d.payload = t, a != null && (Zm(a, "replaceState"), d.callback = a);
        var h = ns(i, d, s);
        h !== null && (Ar(h, i, s, o), _m(h, i, s)), Fs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ya(e), i = Fa(), o = cs(a), s = Wo(i, o);
        s.tag = bm, t != null && (Zm(t, "forceUpdate"), s.callback = t);
        var d = ns(a, s, o);
        d !== null && (Ar(d, a, o, i), _m(d, a, o)), Zc(a, o);
      }
    };
    function yR(e, t, a, i, o, s, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var g = h.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & Lt) {
            tr(!0);
            try {
              g = h.shouldComponentUpdate(i, s, d);
            } finally {
              tr(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", jt(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ct(a, i) || !ct(o, s) : !0;
    }
    function Jx(e, t, a) {
      var i = e.stateNode;
      {
        var o = jt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !rv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Lt) === We && (rv.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !rv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Lt) === We && (rv.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !JS.has(t) && (JS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", jt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = i.props !== a;
        i.props !== void 0 && d && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !GS.has(t) && (GS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", jt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var h = i.state;
        h && (typeof h != "object" || Vt(h)) && y("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function gR(e, t) {
      t.updater = t0, e.stateNode = t, Su(t, e), t._reactInternalInstance = YS;
    }
    function SR(e, t, a) {
      var i = !1, o = Ci, s = Ci, d = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Le && d._context === void 0
        );
        if (!h && !ZS.has(t)) {
          ZS.add(t);
          var g = "";
          d === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? g = " However, it is set to a " + typeof d + "." : d.$$typeof === Ue ? g = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", jt(t) || "Component", g);
        }
      }
      if (typeof d == "object" && d !== null)
        s = Rr(d);
      else {
        o = Wf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, s = i ? Gf(e, o) : Ci;
      }
      var T = new t(a, s);
      if (e.mode & Lt) {
        tr(!0);
        try {
          T = new t(a, s);
        } finally {
          tr(!1);
        }
      }
      var z = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      gR(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var N = jt(t) || "Component";
          WS.has(N) || (WS.add(N), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, T.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var W = null, q = null, Z = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? q = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (q = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), W !== null || q !== null || Z !== null) {
            var _e = jt(t) || "Component", at = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            KS.has(_e) || (KS.add(_e), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _e, at, W !== null ? `
  ` + W : "", q !== null ? `
  ` + q : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return i && uC(e, o, s), T;
    }
    function Zx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Et(e) || "Component"), t0.enqueueReplaceState(t, t.state, null));
    }
    function ER(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = Et(e) || "Component";
          QS.has(s) || (QS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        t0.enqueueReplaceState(t, t.state, null);
      }
    }
    function n0(e, t, a, i) {
      Jx(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, fS(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = Rr(s);
      else {
        var d = Wf(e, t, !0);
        o.context = Gf(e, d);
      }
      {
        if (o.state === a) {
          var h = jt(t) || "Component";
          qS.has(h) || (qS.add(h), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & Lt && hl.recordLegacyContextWarning(e, o), hl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (e0(e, t, g, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (Zx(e, o), km(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var R = xt;
        R |= va, (e.mode & Ma) !== We && (R |= ha), e.flags |= R;
      }
    }
    function eD(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var d = o.context, h = t.contextType, g = Ci;
      if (typeof h == "object" && h !== null)
        g = Rr(h);
      else {
        var R = Wf(e, t, !0);
        g = Gf(e, R);
      }
      var T = t.getDerivedStateFromProps, z = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !z && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || d !== g) && ER(e, o, a, g), zC();
      var N = e.memoizedState, W = o.state = N;
      if (km(e, a, o, i), W = e.memoizedState, s === a && N === W && !cm() && !Om()) {
        if (typeof o.componentDidMount == "function") {
          var q = xt;
          q |= va, (e.mode & Ma) !== We && (q |= ha), e.flags |= q;
        }
        return !1;
      }
      typeof T == "function" && (e0(e, t, T, a), W = e.memoizedState);
      var Z = Om() || yR(e, t, s, a, N, W, g);
      if (Z) {
        if (!z && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var _e = xt;
          _e |= va, (e.mode & Ma) !== We && (_e |= ha), e.flags |= _e;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var at = xt;
          at |= va, (e.mode & Ma) !== We && (at |= ha), e.flags |= at;
        }
        e.memoizedProps = a, e.memoizedState = W;
      }
      return o.props = a, o.state = W, o.context = g, Z;
    }
    function tD(e, t, a, i, o) {
      var s = t.stateNode;
      UC(e, t);
      var d = t.memoizedProps, h = t.type === t.elementType ? d : gl(t.type, d);
      s.props = h;
      var g = t.pendingProps, R = s.context, T = a.contextType, z = Ci;
      if (typeof T == "object" && T !== null)
        z = Rr(T);
      else {
        var N = Wf(t, a, !0);
        z = Gf(t, N);
      }
      var W = a.getDerivedStateFromProps, q = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !q && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== g || R !== z) && ER(t, s, i, z), zC();
      var Z = t.memoizedState, _e = s.state = Z;
      if (km(t, i, s, o), _e = t.memoizedState, d === g && Z === _e && !cm() && !Om() && !Qe)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Qa), !1;
      typeof W == "function" && (e0(t, a, W, i), _e = t.memoizedState);
      var at = Om() || yR(t, a, h, i, Z, _e, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Qe;
      return at ? (!q && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, _e, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, _e, z)), typeof s.componentDidUpdate == "function" && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Qa)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= xt), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= Qa), t.memoizedProps = i, t.memoizedState = _e), s.props = i, s.state = _e, s.context = z, at;
    }
    function vc(e, t) {
      return {
        value: e,
        source: t,
        stack: lu(t),
        digest: null
      };
    }
    function r0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function nD(e, t) {
      return !0;
    }
    function a0(e, t) {
      try {
        var a = nD(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === O)
            return;
          console.error(i);
        }
        var h = o ? Et(o) : null, g = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === M)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = Et(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var z = g + `
` + d + `

` + ("" + R);
        console.error(z);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var rD = typeof WeakMap == "function" ? WeakMap : Map;
    function CR(e, t, a) {
      var i = Wo(Cn, a);
      i.tag = sS, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        K_(o), a0(e, t);
      }, i;
    }
    function i0(e, t, a) {
      var i = Wo(Cn, a);
      i.tag = sS;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          N1(e), a0(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        N1(e), a0(e, t), typeof o != "function" && W_(this);
        var g = t.value, R = t.stack;
        this.componentDidCatch(g, {
          componentStack: R !== null ? R : ""
        }), typeof o != "function" && (Ca(e.lanes, Je) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Et(e) || "Unknown"));
      }), i;
    }
    function RR(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new rD(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = X_.bind(null, e, t, a);
        Na && Ev(e, a), t.then(s, s);
      }
    }
    function aD(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function iD(e, t) {
      var a = e.tag;
      if ((e.mode & Ke) === We && (a === _ || a === ye || a === Fe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function wR(e) {
      var t = e;
      do {
        if (t.tag === De && Hx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function TR(e, t, a, i, o) {
      if ((e.mode & Ke) === We) {
        if (e === t)
          e.flags |= gr;
        else {
          if (e.flags |= mt, a.flags |= Us, a.flags &= ~(Vc | ka), a.tag === O) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ze;
            else {
              var d = Wo(Cn, Je);
              d.tag = bm, ns(a, d, Je);
            }
          }
          a.lanes = bt(a.lanes, Je);
        }
        return e;
      }
      return e.flags |= gr, e.lanes = o, e;
    }
    function lD(e, t, a, i, o) {
      if (a.flags |= ka, Na && Ev(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        iD(a), ea() && a.mode & Ke && hC();
        var d = wR(t);
        if (d !== null) {
          d.flags &= ~Bn, TR(d, t, a, e, o), d.mode & Ke && RR(e, s, o), aD(d, e, s);
          return;
        } else {
          if (!lp(o)) {
            RR(e, s, o), P0();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if (ea() && a.mode & Ke) {
        hC();
        var g = wR(t);
        if (g !== null) {
          (g.flags & gr) === rt && (g.flags |= Bn), TR(g, t, a, e, o), qg(vc(i, a));
          return;
        }
      }
      i = vc(i, a), H_(i);
      var R = t;
      do {
        switch (R.tag) {
          case M: {
            var T = i;
            R.flags |= gr;
            var z = Mu(o);
            R.lanes = bt(R.lanes, z);
            var N = CR(R, T, z);
            dS(R, N);
            return;
          }
          case O:
            var W = i, q = R.type, Z = R.stateNode;
            if ((R.flags & mt) === rt && (typeof q.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !w1(Z))) {
              R.flags |= gr;
              var _e = Mu(o);
              R.lanes = bt(R.lanes, _e);
              var at = i0(R, W, _e);
              dS(R, at);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function oD() {
      return null;
    }
    var av = m.ReactCurrentOwner, Sl = !1, l0, iv, o0, u0, s0, hc, c0, ey, lv;
    l0 = {}, iv = {}, o0 = {}, u0 = {}, s0 = {}, hc = !1, c0 = {}, ey = {}, lv = {};
    function za(e, t, a, i) {
      e === null ? t.child = DC(t, null, a, i) : t.child = Jf(t, e.child, a, i);
    }
    function uD(e, t, a, i) {
      t.child = Jf(t, e.child, null, i), t.child = Jf(t, null, a, i);
    }
    function bR(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && pl(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var d = a.render, h = t.ref, g, R;
      ed(t, o), wu(t);
      {
        if (av.current = t, fa(!0), g = ld(e, t, d, i, h, o), R = od(), t.mode & Lt) {
          tr(!0);
          try {
            g = ld(e, t, d, i, h, o), R = od();
          } finally {
            tr(!1);
          }
        }
        fa(!1);
      }
      return ga(), e !== null && !Sl ? (VC(e, t, o), Go(e, t, o)) : (ea() && R && Yg(t), t.flags |= Vl, za(e, t, g, o), t.child);
    }
    function xR(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (pk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = hd(s), t.tag = Fe, t.type = d, p0(t, s), DR(e, t, d, i, o);
        }
        {
          var h = s.propTypes;
          if (h && pl(
            h,
            i,
            // Resolved props
            "prop",
            jt(s)
          ), a.defaultProps !== void 0) {
            var g = jt(s) || "Unknown";
            lv[g] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", g), lv[g] = !0);
          }
        }
        var R = K0(a.type, null, i, t, t.mode, o);
        return R.ref = t.ref, R.return = t, t.child = R, R;
      }
      {
        var T = a.type, z = T.propTypes;
        z && pl(
          z,
          i,
          // Resolved props
          "prop",
          jt(T)
        );
      }
      var N = e.child, W = S0(e, o);
      if (!W) {
        var q = N.memoizedProps, Z = a.compare;
        if (Z = Z !== null ? Z : ct, Z(q, i) && e.ref === t.ref)
          return Go(e, t, o);
      }
      t.flags |= Vl;
      var _e = Ec(N, i);
      return _e.ref = t.ref, _e.return = t, t.child = _e, _e;
    }
    function DR(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === wt) {
          var d = s, h = d._payload, g = d._init;
          try {
            s = g(h);
          } catch {
            s = null;
          }
          var R = s && s.propTypes;
          R && pl(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            jt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (ct(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Sl = !1, t.pendingProps = i = T, S0(e, o))
            (e.flags & Us) !== rt && (Sl = !0);
          else return t.lanes = e.lanes, Go(e, t, o);
      }
      return f0(e, t, a, i, o);
    }
    function _R(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ge)
        if ((t.mode & Ke) === We) {
          var d = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, py(t, a);
        } else if (Ca(a, Ir)) {
          var z = {
            baseLanes: le,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var N = s !== null ? s.baseLanes : a;
          py(t, N);
        } else {
          var h = null, g;
          if (s !== null) {
            var R = s.baseLanes;
            g = bt(R, a);
          } else
            g = a;
          t.lanes = t.childLanes = Ir;
          var T = {
            baseLanes: g,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, py(t, g), null;
        }
      else {
        var W;
        s !== null ? (W = bt(s.baseLanes, a), t.memoizedState = null) : W = a, py(t, W);
      }
      return za(e, t, o, a), t.child;
    }
    function sD(e, t, a) {
      var i = t.pendingProps;
      return za(e, t, i, a), t.child;
    }
    function cD(e, t, a) {
      var i = t.pendingProps.children;
      return za(e, t, i, a), t.child;
    }
    function fD(e, t, a) {
      {
        t.flags |= xt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return za(e, t, s, a), t.child;
    }
    function kR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= pa, t.flags |= Wd);
    }
    function f0(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && pl(
          s,
          i,
          // Resolved props
          "prop",
          jt(a)
        );
      }
      var d;
      {
        var h = Wf(t, a, !0);
        d = Gf(t, h);
      }
      var g, R;
      ed(t, o), wu(t);
      {
        if (av.current = t, fa(!0), g = ld(e, t, a, i, d, o), R = od(), t.mode & Lt) {
          tr(!0);
          try {
            g = ld(e, t, a, i, d, o), R = od();
          } finally {
            tr(!1);
          }
        }
        fa(!1);
      }
      return ga(), e !== null && !Sl ? (VC(e, t, o), Go(e, t, o)) : (ea() && R && Yg(t), t.flags |= Vl, za(e, t, g, o), t.child);
    }
    function OR(e, t, a, i, o) {
      {
        switch (_k(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, h = new d(t.memoizedProps, s.context), g = h.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= mt, t.flags |= gr;
            var R = new Error("Simulated error coming from DevTools"), T = Mu(o);
            t.lanes = bt(t.lanes, T);
            var z = i0(t, vc(R, t), T);
            dS(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var N = a.propTypes;
          N && pl(
            N,
            i,
            // Resolved props
            "prop",
            jt(a)
          );
        }
      }
      var W;
      eo(a) ? (W = !0, dm(t)) : W = !1, ed(t, o);
      var q = t.stateNode, Z;
      q === null ? (ny(e, t), SR(t, a, i), n0(t, a, i, o), Z = !0) : e === null ? Z = eD(t, a, i, o) : Z = tD(e, t, a, i, o);
      var _e = d0(e, t, a, Z, W, o);
      {
        var at = t.stateNode;
        Z && at.props !== i && (hc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Et(t) || "a component"), hc = !0);
      }
      return _e;
    }
    function d0(e, t, a, i, o, s) {
      kR(e, t);
      var d = (t.flags & mt) !== rt;
      if (!i && !d)
        return o && fC(t, a, !1), Go(e, t, s);
      var h = t.stateNode;
      av.current = t;
      var g;
      if (d && typeof a.getDerivedStateFromError != "function")
        g = null, vR();
      else {
        wu(t);
        {
          if (fa(!0), g = h.render(), t.mode & Lt) {
            tr(!0);
            try {
              h.render();
            } finally {
              tr(!1);
            }
          }
          fa(!1);
        }
        ga();
      }
      return t.flags |= Vl, e !== null && d ? uD(e, t, g, s) : za(e, t, g, s), t.memoizedState = h.state, o && fC(t, a, !0), t.child;
    }
    function LR(e) {
      var t = e.stateNode;
      t.pendingContext ? sC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sC(e, t.context, !1), pS(e, t.containerInfo);
    }
    function dD(e, t, a) {
      if (LR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      UC(e, t), km(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var h = d.element;
      if (o.isDehydrated) {
        var g = {
          element: h,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, R = t.updateQueue;
        if (R.baseState = g, t.memoizedState = g, t.flags & Bn) {
          var T = vc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return NR(e, t, h, a, T);
        } else if (h !== s) {
          var z = vc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return NR(e, t, h, a, z);
        } else {
          hx(t);
          var N = DC(t, null, h, a);
          t.child = N;
          for (var W = N; W; )
            W.flags = W.flags & ~wn | Wa, W = W.sibling;
        }
      } else {
        if (qf(), h === s)
          return Go(e, t, a);
        za(e, t, h, a);
      }
      return t.child;
    }
    function NR(e, t, a, i, o) {
      return qf(), qg(o), t.flags |= Bn, za(e, t, a, i), t.child;
    }
    function pD(e, t, a) {
      PC(t), e === null && Xg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = o.children, h = Lg(i, o);
      return h ? d = null : s !== null && Lg(i, s) && (t.flags |= nn), kR(e, t), za(e, t, d, a), t.child;
    }
    function vD(e, t) {
      return e === null && Xg(t), null;
    }
    function hD(e, t, a, i) {
      ny(e, t);
      var o = t.pendingProps, s = a, d = s._payload, h = s._init, g = h(d);
      t.type = g;
      var R = t.tag = vk(g), T = gl(g, o), z;
      switch (R) {
        case _:
          return p0(t, g), t.type = g = hd(g), z = f0(null, t, g, T, i), z;
        case O:
          return t.type = g = I0(g), z = OR(null, t, g, T, i), z;
        case ye:
          return t.type = g = $0(g), z = bR(null, t, g, T, i), z;
        case $: {
          if (t.type !== t.elementType) {
            var N = g.propTypes;
            N && pl(
              N,
              T,
              // Resolved for outer only
              "prop",
              jt(g)
            );
          }
          return z = xR(
            null,
            t,
            g,
            gl(g.type, T),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var W = "";
      throw g !== null && typeof g == "object" && g.$$typeof === wt && (W = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + W));
    }
    function mD(e, t, a, i, o) {
      ny(e, t), t.tag = O;
      var s;
      return eo(a) ? (s = !0, dm(t)) : s = !1, ed(t, o), SR(t, a, i), n0(t, a, i, o), d0(null, t, a, !0, s, o);
    }
    function yD(e, t, a, i) {
      ny(e, t);
      var o = t.pendingProps, s;
      {
        var d = Wf(t, a, !1);
        s = Gf(t, d);
      }
      ed(t, i);
      var h, g;
      wu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = jt(a) || "Unknown";
          l0[R] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), l0[R] = !0);
        }
        t.mode & Lt && hl.recordLegacyContextWarning(t, null), fa(!0), av.current = t, h = ld(null, t, a, o, s, i), g = od(), fa(!1);
      }
      if (ga(), t.flags |= Vl, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var T = jt(a) || "Unknown";
        iv[T] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), iv[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var z = jt(a) || "Unknown";
          iv[z] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), iv[z] = !0);
        }
        t.tag = O, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return eo(a) ? (N = !0, dm(t)) : N = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, fS(t), gR(t, h), n0(t, a, o, i), d0(null, t, a, !0, N, i);
      } else {
        if (t.tag = _, t.mode & Lt) {
          tr(!0);
          try {
            h = ld(null, t, a, o, s, i), g = od();
          } finally {
            tr(!1);
          }
        }
        return ea() && g && Yg(t), za(null, t, h, i), p0(t, a), t.child;
      }
    }
    function p0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = qr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), s0[o] || (s0[o] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var d = jt(t) || "Unknown";
          lv[d] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", d), lv[d] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = jt(t) || "Unknown";
          u0[h] || (y("%s: Function components do not support getDerivedStateFromProps.", h), u0[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var g = jt(t) || "Unknown";
          o0[g] || (y("%s: Function components do not support contextType.", g), o0[g] = !0);
        }
      }
    }
    var v0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: nr
    };
    function h0(e) {
      return {
        baseLanes: e,
        cachePool: oD(),
        transitions: null
      };
    }
    function gD(e, t) {
      var a = null;
      return {
        baseLanes: bt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function SD(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return mS(e, Kp);
    }
    function ED(e, t) {
      return $s(e.childLanes, t);
    }
    function MR(e, t, a) {
      var i = t.pendingProps;
      kk(t) && (t.flags |= mt);
      var o = ml.current, s = !1, d = (t.flags & mt) !== rt;
      if (d || SD(o, e) ? (s = !0, t.flags &= ~mt) : (e === null || e.memoizedState !== null) && (o = Px(o, jC)), o = nd(o), as(t, o), e === null) {
        Xg(t);
        var h = t.memoizedState;
        if (h !== null) {
          var g = h.dehydrated;
          if (g !== null)
            return bD(t, g);
        }
        var R = i.children, T = i.fallback;
        if (s) {
          var z = CD(t, R, T, a), N = t.child;
          return N.memoizedState = h0(a), t.memoizedState = v0, z;
        } else
          return m0(t, R);
      } else {
        var W = e.memoizedState;
        if (W !== null) {
          var q = W.dehydrated;
          if (q !== null)
            return xD(e, t, d, i, q, W, a);
        }
        if (s) {
          var Z = i.fallback, _e = i.children, at = wD(e, t, _e, Z, a), Xe = t.child, $t = e.child.memoizedState;
          return Xe.memoizedState = $t === null ? h0(a) : gD($t, a), Xe.childLanes = ED(e, a), t.memoizedState = v0, at;
        } else {
          var Ft = i.children, j = RD(e, t, Ft, a);
          return t.memoizedState = null, j;
        }
      }
    }
    function m0(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = y0(o, i);
      return s.return = e, e.child = s, s;
    }
    function CD(e, t, a, i) {
      var o = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, h, g;
      return (o & Ke) === We && s !== null ? (h = s, h.childLanes = le, h.pendingProps = d, e.mode & yt && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), g = ds(a, o, i, null)) : (h = y0(d, o), g = ds(a, o, i, null)), h.return = e, g.return = e, h.sibling = g, e.child = h, g;
    }
    function y0(e, t, a) {
      return U1(e, t, le, null);
    }
    function UR(e, t) {
      return Ec(e, t);
    }
    function RD(e, t, a, i) {
      var o = e.child, s = o.sibling, d = UR(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ke) === We && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Zt) : h.push(s);
      }
      return t.child = d, d;
    }
    function wD(e, t, a, i, o) {
      var s = t.mode, d = e.child, h = d.sibling, g = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ke) === We && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var T = t.child;
        R = T, R.childLanes = le, R.pendingProps = g, t.mode & yt && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = d.selfBaseDuration, R.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        R = UR(d, g), R.subtreeFlags = d.subtreeFlags & xr;
      var z;
      return h !== null ? z = Ec(h, i) : (z = ds(i, s, o, null), z.flags |= wn), z.return = t, R.return = t, R.sibling = z, t.child = R, z;
    }
    function ty(e, t, a, i) {
      i !== null && qg(i), Jf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, d = m0(t, s);
      return d.flags |= wn, t.memoizedState = null, d;
    }
    function TD(e, t, a, i, o) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, h = y0(d, s), g = ds(i, s, o, null);
      return g.flags |= wn, h.return = t, g.return = t, h.sibling = g, t.child = h, (t.mode & Ke) !== We && Jf(t, e.child, null, o), g;
    }
    function bD(e, t, a) {
      return (e.mode & Ke) === We ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Je) : zg(t) ? e.lanes = ul : e.lanes = Ir, null;
    }
    function xD(e, t, a, i, o, s, d) {
      if (a)
        if (t.flags & Bn) {
          t.flags &= ~Bn;
          var j = r0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ty(e, t, d, j);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= mt, null;
          var ee = i.children, V = i.fallback, fe = TD(e, t, ee, V, d), ze = t.child;
          return ze.memoizedState = h0(d), t.memoizedState = v0, fe;
        }
      else {
        if (px(), (t.mode & Ke) === We)
          return ty(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (zg(o)) {
          var h, g, R;
          {
            var T = Ob(o);
            h = T.digest, g = T.message, R = T.stack;
          }
          var z;
          g ? z = new Error(g) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = r0(z, h, R);
          return ty(e, t, d, N);
        }
        var W = Ca(d, e.childLanes);
        if (Sl || W) {
          var q = dy();
          if (q !== null) {
            var Z = Dh(q, d);
            if (Z !== nr && Z !== s.retryLane) {
              s.retryLane = Z;
              var _e = Cn;
              ii(e, Z), Ar(q, e, Z, _e);
            }
          }
          P0();
          var at = r0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ty(e, t, d, at);
        } else if (rC(o)) {
          t.flags |= mt, t.child = e.child;
          var Xe = q_.bind(null, e);
          return Lb(o, Xe), null;
        } else {
          mx(t, o, s.treeContext);
          var $t = i.children, Ft = m0(t, $t);
          return Ft.flags |= Wa, Ft;
        }
      }
    }
    function zR(e, t, a) {
      e.lanes = bt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = bt(i.lanes, t)), oS(e.return, t, a);
    }
    function DD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var o = i.memoizedState;
          o !== null && zR(i, a, e);
        } else if (i.tag === pt)
          zR(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _D(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Mm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function kD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !c0[e])
        if (c0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function OD(e, t) {
      e !== void 0 && !ey[e] && (e !== "collapsed" && e !== "hidden" ? (ey[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ey[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function AR(e, t) {
      {
        var a = Vt(e), i = !a && typeof ir(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function LD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Vt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!AR(e[a], a))
              return;
        } else {
          var i = ir(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), d = 0; !s.done; s = o.next()) {
                if (!AR(s.value, d))
                  return;
                d++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function g0(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function FR(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, d = i.children;
      kD(o), OD(s, o), LD(d, o), za(e, t, d, a);
      var h = ml.current, g = mS(h, Kp);
      if (g)
        h = yS(h, Kp), t.flags |= mt;
      else {
        var R = e !== null && (e.flags & mt) !== rt;
        R && DD(t, t.child, a), h = nd(h);
      }
      if (as(t, h), (t.mode & Ke) === We)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = _D(t.child), z;
            T === null ? (z = t.child, t.child = null) : (z = T.sibling, T.sibling = null), g0(
              t,
              !1,
              // isBackwards
              z,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var N = null, W = t.child;
            for (t.child = null; W !== null; ) {
              var q = W.alternate;
              if (q !== null && Mm(q) === null) {
                t.child = W;
                break;
              }
              var Z = W.sibling;
              W.sibling = N, N = W, W = Z;
            }
            g0(
              t,
              !0,
              // isBackwards
              N,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            g0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function ND(e, t, a) {
      pS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Jf(t, null, i, a) : za(e, t, i, a), t.child;
    }
    var PR = !1;
    function MD(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, d = t.memoizedProps, h = s.value;
      {
        "value" in s || PR || (PR = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && pl(g, s, "prop", "Context.Provider");
      }
      if (OC(t, o, h), d !== null) {
        var R = d.value;
        if (Ie(R, h)) {
          if (d.children === s.children && !cm())
            return Go(e, t, a);
        } else
          kx(t, o, a);
      }
      var T = s.children;
      return za(e, t, T, a), t.child;
    }
    var HR = !1;
    function UD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (HR || (HR = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ed(t, a);
      var d = Rr(i);
      wu(t);
      var h;
      return av.current = t, fa(!0), h = s(d), fa(!1), ga(), t.flags |= Vl, za(e, t, h, a), t.child;
    }
    function ov() {
      Sl = !0;
    }
    function ny(e, t) {
      (t.mode & Ke) === We && e !== null && (e.alternate = null, t.alternate = null, t.flags |= wn);
    }
    function Go(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), vR(), Sv(t.lanes), Ca(a, t.childLanes) ? (Dx(e, t), t.child) : null;
    }
    function zD(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Zt) : s.push(e), a.flags |= wn, a;
      }
    }
    function S0(e, t) {
      var a = e.lanes;
      return !!Ca(a, t);
    }
    function AD(e, t, a) {
      switch (t.tag) {
        case M:
          LR(t), t.stateNode, qf();
          break;
        case K:
          PC(t);
          break;
        case O: {
          var i = t.type;
          eo(i) && dm(t);
          break;
        }
        case I:
          pS(t, t.stateNode.containerInfo);
          break;
        case he: {
          var o = t.memoizedProps.value, s = t.type._context;
          OC(t, s, o);
          break;
        }
        case be:
          {
            var d = Ca(a, t.childLanes);
            d && (t.flags |= xt);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return as(t, nd(ml.current)), t.flags |= mt, null;
            var R = t.child, T = R.childLanes;
            if (Ca(a, T))
              return MR(e, t, a);
            as(t, nd(ml.current));
            var z = Go(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            as(t, nd(ml.current));
          break;
        }
        case pt: {
          var N = (e.flags & mt) !== rt, W = Ca(a, t.childLanes);
          if (N) {
            if (W)
              return FR(e, t, a);
            t.flags |= mt;
          }
          var q = t.memoizedState;
          if (q !== null && (q.rendering = null, q.tail = null, q.lastEffect = null), as(t, ml.current), W)
            break;
          return null;
        }
        case tt:
        case it:
          return t.lanes = le, _R(e, t, a);
      }
      return Go(e, t, a);
    }
    function jR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return zD(e, t, K0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || cm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Sl = !0;
        else {
          var s = S0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & mt) === rt)
            return Sl = !1, AD(e, t, a);
          (e.flags & Us) !== rt ? Sl = !0 : Sl = !1;
        }
      } else if (Sl = !1, ea() && ox(t)) {
        var d = t.index, h = ux();
        vC(t, h, d);
      }
      switch (t.lanes = le, t.tag) {
        case B:
          return yD(e, t, t.type, a);
        case je: {
          var g = t.elementType;
          return hD(e, t, g, a);
        }
        case _: {
          var R = t.type, T = t.pendingProps, z = t.elementType === R ? T : gl(R, T);
          return f0(e, t, R, z, a);
        }
        case O: {
          var N = t.type, W = t.pendingProps, q = t.elementType === N ? W : gl(N, W);
          return OR(e, t, N, q, a);
        }
        case M:
          return dD(e, t, a);
        case K:
          return pD(e, t, a);
        case ae:
          return vD(e, t);
        case De:
          return MR(e, t, a);
        case I:
          return ND(e, t, a);
        case ye: {
          var Z = t.type, _e = t.pendingProps, at = t.elementType === Z ? _e : gl(Z, _e);
          return bR(e, t, Z, at, a);
        }
        case ue:
          return sD(e, t, a);
        case pe:
          return cD(e, t, a);
        case be:
          return fD(e, t, a);
        case he:
          return MD(e, t, a);
        case Ae:
          return UD(e, t, a);
        case $: {
          var Xe = t.type, $t = t.pendingProps, Ft = gl(Xe, $t);
          if (t.type !== t.elementType) {
            var j = Xe.propTypes;
            j && pl(
              j,
              Ft,
              // Resolved for outer only
              "prop",
              jt(Xe)
            );
          }
          return Ft = gl(Xe.type, Ft), xR(e, t, Xe, Ft, a);
        }
        case Fe:
          return DR(e, t, t.type, t.pendingProps, a);
        case Ze: {
          var ee = t.type, V = t.pendingProps, fe = t.elementType === ee ? V : gl(ee, V);
          return mD(e, t, ee, fe, a);
        }
        case pt:
          return FR(e, t, a);
        case Mt:
          break;
        case tt:
          return _R(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ud(e) {
      e.flags |= xt;
    }
    function VR(e) {
      e.flags |= pa, e.flags |= Wd;
    }
    var BR, E0, IR, $R;
    BR = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === K || o.tag === ae)
          ab(e, o.stateNode);
        else if (o.tag !== I) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, E0 = function(e, t) {
    }, IR = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, h = vS(), g = lb(d, a, s, i, o, h);
        t.updateQueue = g, g && ud(t);
      }
    }, $R = function(e, t, a, i) {
      a !== i && ud(t);
    };
    function uv(e, t) {
      if (!ea())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function na(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = le, i = rt;
      if (t) {
        if ((e.mode & yt) !== We) {
          for (var g = e.selfBaseDuration, R = e.child; R !== null; )
            a = bt(a, bt(R.lanes, R.childLanes)), i |= R.subtreeFlags & xr, i |= R.flags & xr, g += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = g;
        } else
          for (var T = e.child; T !== null; )
            a = bt(a, bt(T.lanes, T.childLanes)), i |= T.subtreeFlags & xr, i |= T.flags & xr, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & yt) !== We) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = bt(a, bt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            a = bt(a, bt(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function FD(e, t, a) {
      if (Cx() && (t.mode & Ke) !== We && (t.flags & mt) === rt)
        return CC(t), qf(), t.flags |= Bn | ka | gr, !1;
      var i = ym(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Sx(t), na(t), (t.mode & yt) !== We) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (qf(), (t.flags & mt) === rt && (t.memoizedState = null), t.flags |= xt, na(t), (t.mode & yt) !== We) {
            var d = a !== null;
            if (d) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return RC(), !0;
    }
    function YR(e, t, a) {
      var i = t.pendingProps;
      switch (Qg(t), t.tag) {
        case B:
        case je:
        case Fe:
        case _:
        case ye:
        case ue:
        case pe:
        case be:
        case Ae:
        case $:
          return na(t), null;
        case O: {
          var o = t.type;
          return eo(o) && fm(t), na(t), null;
        }
        case M: {
          var s = t.stateNode;
          if (td(t), Bg(t), SS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = ym(t);
            if (d)
              ud(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Bn) !== rt) && (t.flags |= Qa, RC());
            }
          }
          return E0(e, t), na(t), null;
        }
        case K: {
          hS(t);
          var g = FC(), R = t.type;
          if (e !== null && t.stateNode != null)
            IR(e, t, R, i, g), e.ref !== t.ref && VR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return na(t), null;
            }
            var T = vS(), z = ym(t);
            if (z)
              yx(t, g, T) && ud(t);
            else {
              var N = rb(R, i, g, T, t);
              BR(N, t, !1, !1), t.stateNode = N, ib(N, R, i, g) && ud(t);
            }
            t.ref !== null && VR(t);
          }
          return na(t), null;
        }
        case ae: {
          var W = i;
          if (e && t.stateNode != null) {
            var q = e.memoizedProps;
            $R(e, t, q, W);
          } else {
            if (typeof W != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = FC(), _e = vS(), at = ym(t);
            at ? gx(t) && ud(t) : t.stateNode = ob(W, Z, _e, t);
          }
          return na(t), null;
        }
        case De: {
          rd(t);
          var Xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var $t = FD(e, t, Xe);
            if (!$t)
              return t.flags & gr ? t : null;
          }
          if ((t.flags & mt) !== rt)
            return t.lanes = a, (t.mode & yt) !== We && $S(t), t;
          var Ft = Xe !== null, j = e !== null && e.memoizedState !== null;
          if (Ft !== j && Ft) {
            var ee = t.child;
            if (ee.flags |= Bl, (t.mode & Ke) !== We) {
              var V = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !F);
              V || mS(ml.current, jC) ? P_() : P0();
            }
          }
          var fe = t.updateQueue;
          if (fe !== null && (t.flags |= xt), na(t), (t.mode & yt) !== We && Ft) {
            var ze = t.child;
            ze !== null && (t.treeBaseDuration -= ze.treeBaseDuration);
          }
          return null;
        }
        case I:
          return td(t), E0(e, t), e === null && ex(t.stateNode.containerInfo), na(t), null;
        case he:
          var Oe = t.type._context;
          return lS(Oe, t), na(t), null;
        case Ze: {
          var ht = t.type;
          return eo(ht) && fm(t), na(t), null;
        }
        case pt: {
          rd(t);
          var Rt = t.memoizedState;
          if (Rt === null)
            return na(t), null;
          var fn = (t.flags & mt) !== rt, Kt = Rt.rendering;
          if (Kt === null)
            if (fn)
              uv(Rt, !1);
            else {
              var fr = j_() && (e === null || (e.flags & mt) === rt);
              if (!fr)
                for (var Xt = t.child; Xt !== null; ) {
                  var rr = Mm(Xt);
                  if (rr !== null) {
                    fn = !0, t.flags |= mt, uv(Rt, !1);
                    var xa = rr.updateQueue;
                    return xa !== null && (t.updateQueue = xa, t.flags |= xt), t.subtreeFlags = rt, _x(t, a), as(t, yS(ml.current, Kp)), t.child;
                  }
                  Xt = Xt.sibling;
                }
              Rt.tail !== null && zn() > d1() && (t.flags |= mt, fn = !0, uv(Rt, !1), t.lanes = mh);
            }
          else {
            if (!fn) {
              var oa = Mm(Kt);
              if (oa !== null) {
                t.flags |= mt, fn = !0;
                var wi = oa.updateQueue;
                if (wi !== null && (t.updateQueue = wi, t.flags |= xt), uv(Rt, !0), Rt.tail === null && Rt.tailMode === "hidden" && !Kt.alternate && !ea())
                  return na(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              zn() * 2 - Rt.renderingStartTime > d1() && a !== Ir && (t.flags |= mt, fn = !0, uv(Rt, !1), t.lanes = mh);
            }
            if (Rt.isBackwards)
              Kt.sibling = t.child, t.child = Kt;
            else {
              var Pa = Rt.last;
              Pa !== null ? Pa.sibling = Kt : t.child = Kt, Rt.last = Kt;
            }
          }
          if (Rt.tail !== null) {
            var Ha = Rt.tail;
            Rt.rendering = Ha, Rt.tail = Ha.sibling, Rt.renderingStartTime = zn(), Ha.sibling = null;
            var Da = ml.current;
            return fn ? Da = yS(Da, Kp) : Da = nd(Da), as(t, Da), Ha;
          }
          return na(t), null;
        }
        case Mt:
          break;
        case tt:
        case it: {
          F0(t);
          var Zo = t.memoizedState, md = Zo !== null;
          if (e !== null) {
            var Tv = e.memoizedState, uo = Tv !== null;
            uo !== md && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ge && (t.flags |= Bl);
          }
          return !md || (t.mode & Ke) === We ? na(t) : Ca(oo, Ir) && (na(t), t.subtreeFlags & (wn | xt) && (t.flags |= Bl)), null;
        }
        case qt:
          return null;
        case Pt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function PD(e, t, a) {
      switch (Qg(t), t.tag) {
        case O: {
          var i = t.type;
          eo(i) && fm(t);
          var o = t.flags;
          return o & gr ? (t.flags = o & ~gr | mt, (t.mode & yt) !== We && $S(t), t) : null;
        }
        case M: {
          t.stateNode, td(t), Bg(t), SS();
          var s = t.flags;
          return (s & gr) !== rt && (s & mt) === rt ? (t.flags = s & ~gr | mt, t) : null;
        }
        case K:
          return hS(t), null;
        case De: {
          rd(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            qf();
          }
          var h = t.flags;
          return h & gr ? (t.flags = h & ~gr | mt, (t.mode & yt) !== We && $S(t), t) : null;
        }
        case pt:
          return rd(t), null;
        case I:
          return td(t), null;
        case he:
          var g = t.type._context;
          return lS(g, t), null;
        case tt:
        case it:
          return F0(t), null;
        case qt:
          return null;
        default:
          return null;
      }
    }
    function QR(e, t, a) {
      switch (Qg(t), t.tag) {
        case O: {
          var i = t.type.childContextTypes;
          i != null && fm(t);
          break;
        }
        case M: {
          t.stateNode, td(t), Bg(t), SS();
          break;
        }
        case K: {
          hS(t);
          break;
        }
        case I:
          td(t);
          break;
        case De:
          rd(t);
          break;
        case pt:
          rd(t);
          break;
        case he:
          var o = t.type._context;
          lS(o, t);
          break;
        case tt:
        case it:
          F0(t);
          break;
      }
    }
    var WR = null;
    WR = /* @__PURE__ */ new Set();
    var ry = !1, ra = !1, HD = typeof WeakSet == "function" ? WeakSet : Set, $e = null, sd = null, cd = null;
    function jD(e) {
      To(null, function() {
        throw e;
      }), Yd();
    }
    var VD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & yt)
        try {
          io(), t.componentWillUnmount();
        } finally {
          ao(e);
        }
      else
        t.componentWillUnmount();
    };
    function GR(e, t) {
      try {
        os(Or, e);
      } catch (a) {
        xn(e, t, a);
      }
    }
    function C0(e, t, a) {
      try {
        VD(e, a);
      } catch (i) {
        xn(e, t, i);
      }
    }
    function BD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        xn(e, t, i);
      }
    }
    function KR(e, t) {
      try {
        qR(e);
      } catch (a) {
        xn(e, t, a);
      }
    }
    function fd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (St && Ut && e.mode & yt)
              try {
                io(), i = a(null);
              } finally {
                ao(e);
              }
            else
              i = a(null);
          } catch (o) {
            xn(e, t, o);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Et(e));
        } else
          a.current = null;
    }
    function ay(e, t, a) {
      try {
        a();
      } catch (i) {
        xn(e, t, i);
      }
    }
    var XR = !1;
    function ID(e, t) {
      tb(e.containerInfo), $e = t, $D();
      var a = XR;
      return XR = !1, a;
    }
    function $D() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        (e.subtreeFlags & Eu) !== rt && t !== null ? (t.return = e, $e = t) : YD();
      }
    }
    function YD() {
      for (; $e !== null; ) {
        var e = $e;
        tn(e);
        try {
          QD(e);
        } catch (a) {
          xn(e, e.return, a);
        }
        Vn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function QD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Qa) !== rt) {
        switch (tn(e), e.tag) {
          case _:
          case ye:
          case Fe:
            break;
          case O: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !hc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : gl(e.type, i), o);
              {
                var h = WR;
                d === void 0 && !h.has(e.type) && (h.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Et(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case M: {
            {
              var g = e.stateNode;
              xb(g.containerInfo);
            }
            break;
          }
          case K:
          case ae:
          case I:
          case Ze:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Vn();
      }
    }
    function El(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var h = d.destroy;
            d.destroy = void 0, h !== void 0 && ((e & ta) !== li ? ph(t) : (e & Or) !== li && Ei(t), (e & to) !== li && Cv(!0), ay(t, a, h), (e & to) !== li && Cv(!1), (e & ta) !== li ? Xc() : (e & Or) !== li && Tu());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function os(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & ta) !== li ? Yl(t) : (e & Or) !== li && vh(t);
            var d = s.create;
            (e & to) !== li && Cv(!0), s.destroy = d(), (e & to) !== li && Cv(!1), (e & ta) !== li ? Kc() : (e & Or) !== li && zs();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var g = void 0;
                (s.tag & Or) !== rt ? g = "useLayoutEffect" : (s.tag & to) !== rt ? g = "useInsertionEffect" : g = "useEffect";
                var R = void 0;
                h === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? R = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + h, y("%s must not return anything besides a function, which is used for clean-up.%s", g, R);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function WD(e, t) {
      if ((t.flags & xt) !== rt)
        switch (t.tag) {
          case be: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, d = dR(), h = t.alternate === null ? "mount" : "update";
            fR() && (h = "nested-update"), typeof s == "function" && s(o, h, a, d);
            var g = t.return;
            e: for (; g !== null; ) {
              switch (g.tag) {
                case M:
                  var R = g.stateNode;
                  R.passiveEffectDuration += a;
                  break e;
                case be:
                  var T = g.stateNode;
                  T.passiveEffectDuration += a;
                  break e;
              }
              g = g.return;
            }
            break;
          }
        }
    }
    function GD(e, t, a, i) {
      if ((a.flags & Vr) !== rt)
        switch (a.tag) {
          case _:
          case ye:
          case Fe: {
            if (!ra)
              if (a.mode & yt)
                try {
                  io(), os(Or | kr, a);
                } finally {
                  ao(a);
                }
              else
                os(Or | kr, a);
            break;
          }
          case O: {
            var o = a.stateNode;
            if (a.flags & xt && !ra)
              if (t === null)
                if (a.type === a.elementType && !hc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(a) || "instance")), a.mode & yt)
                  try {
                    io(), o.componentDidMount();
                  } finally {
                    ao(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : gl(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !hc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(a) || "instance")), a.mode & yt)
                  try {
                    io(), o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ao(a);
                  }
                else
                  o.componentDidUpdate(s, d, o.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !hc && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Et(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Et(a) || "instance")), AC(a, h, o));
            break;
          }
          case M: {
            var g = a.updateQueue;
            if (g !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case K:
                    R = a.child.stateNode;
                    break;
                  case O:
                    R = a.child.stateNode;
                    break;
                }
              AC(a, g, R);
            }
            break;
          }
          case K: {
            var T = a.stateNode;
            if (t === null && a.flags & xt) {
              var z = a.type, N = a.memoizedProps;
              db(T, z, N);
            }
            break;
          }
          case ae:
            break;
          case I:
            break;
          case be: {
            {
              var W = a.memoizedProps, q = W.onCommit, Z = W.onRender, _e = a.stateNode.effectDuration, at = dR(), Xe = t === null ? "mount" : "update";
              fR() && (Xe = "nested-update"), typeof Z == "function" && Z(a.memoizedProps.id, Xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, at);
              {
                typeof q == "function" && q(a.memoizedProps.id, Xe, _e, at), Y_(a);
                var $t = a.return;
                e: for (; $t !== null; ) {
                  switch ($t.tag) {
                    case M:
                      var Ft = $t.stateNode;
                      Ft.effectDuration += _e;
                      break e;
                    case be:
                      var j = $t.stateNode;
                      j.effectDuration += _e;
                      break e;
                  }
                  $t = $t.return;
                }
              }
            }
            break;
          }
          case De: {
            n_(e, a);
            break;
          }
          case pt:
          case Ze:
          case Mt:
          case tt:
          case it:
          case Pt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      ra || a.flags & pa && qR(a);
    }
    function KD(e) {
      switch (e.tag) {
        case _:
        case ye:
        case Fe: {
          if (e.mode & yt)
            try {
              io(), GR(e, e.return);
            } finally {
              ao(e);
            }
          else
            GR(e, e.return);
          break;
        }
        case O: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && BD(e, e.return, t), KR(e, e.return);
          break;
        }
        case K: {
          KR(e, e.return);
          break;
        }
      }
    }
    function XD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === K) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Rb(o) : Tb(i.stateNode, i.memoizedProps);
            } catch (d) {
              xn(e, e.return, d);
            }
          }
        } else if (i.tag === ae) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? wb(s) : bb(s, i.memoizedProps);
            } catch (d) {
              xn(e, e.return, d);
            }
        } else if (!((i.tag === tt || i.tag === it) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function qR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case K:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & yt)
            try {
              io(), o = t(i);
            } finally {
              ao(e);
            }
          else
            o = t(i);
          typeof o == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Et(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Et(e)), t.current = i;
      }
    }
    function qD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function JR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, JR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === K) {
          var a = e.stateNode;
          a !== null && rx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function JD(e) {
      for (var t = e.return; t !== null; ) {
        if (ZR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ZR(e) {
      return e.tag === K || e.tag === M || e.tag === I;
    }
    function e1(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ZR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== K && t.tag !== ae && t.tag !== et; ) {
          if (t.flags & wn || t.child === null || t.tag === I)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & wn))
          return t.stateNode;
      }
    }
    function ZD(e) {
      var t = JD(e);
      switch (t.tag) {
        case K: {
          var a = t.stateNode;
          t.flags & nn && (nC(a), t.flags &= ~nn);
          var i = e1(e);
          w0(e, i, a);
          break;
        }
        case M:
        case I: {
          var o = t.stateNode.containerInfo, s = e1(e);
          R0(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function R0(e, t, a) {
      var i = e.tag, o = i === K || i === ae;
      if (o) {
        var s = e.stateNode;
        t ? gb(a, s, t) : mb(a, s);
      } else if (i !== I) {
        var d = e.child;
        if (d !== null) {
          R0(d, t, a);
          for (var h = d.sibling; h !== null; )
            R0(h, t, a), h = h.sibling;
        }
      }
    }
    function w0(e, t, a) {
      var i = e.tag, o = i === K || i === ae;
      if (o) {
        var s = e.stateNode;
        t ? yb(a, s, t) : hb(a, s);
      } else if (i !== I) {
        var d = e.child;
        if (d !== null) {
          w0(d, t, a);
          for (var h = d.sibling; h !== null; )
            w0(h, t, a), h = h.sibling;
        }
      }
    }
    var aa = null, Cl = !1;
    function e_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case K: {
              aa = i.stateNode, Cl = !1;
              break e;
            }
            case M: {
              aa = i.stateNode.containerInfo, Cl = !0;
              break e;
            }
            case I: {
              aa = i.stateNode.containerInfo, Cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (aa === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        t1(e, t, a), aa = null, Cl = !1;
      }
      qD(a);
    }
    function us(e, t, a) {
      for (var i = a.child; i !== null; )
        t1(e, t, i), i = i.sibling;
    }
    function t1(e, t, a) {
      switch (Do(a), a.tag) {
        case K:
          ra || fd(a, t);
        case ae: {
          {
            var i = aa, o = Cl;
            aa = null, us(e, t, a), aa = i, Cl = o, aa !== null && (Cl ? Eb(aa, a.stateNode) : Sb(aa, a.stateNode));
          }
          return;
        }
        case et: {
          aa !== null && (Cl ? Cb(aa, a.stateNode) : Ug(aa, a.stateNode));
          return;
        }
        case I: {
          {
            var s = aa, d = Cl;
            aa = a.stateNode.containerInfo, Cl = !0, us(e, t, a), aa = s, Cl = d;
          }
          return;
        }
        case _:
        case ye:
        case $:
        case Fe: {
          if (!ra) {
            var h = a.updateQueue;
            if (h !== null) {
              var g = h.lastEffect;
              if (g !== null) {
                var R = g.next, T = R;
                do {
                  var z = T, N = z.destroy, W = z.tag;
                  N !== void 0 && ((W & to) !== li ? ay(a, t, N) : (W & Or) !== li && (Ei(a), a.mode & yt ? (io(), ay(a, t, N), ao(a)) : ay(a, t, N), Tu())), T = T.next;
                } while (T !== R);
              }
            }
          }
          us(e, t, a);
          return;
        }
        case O: {
          if (!ra) {
            fd(a, t);
            var q = a.stateNode;
            typeof q.componentWillUnmount == "function" && C0(a, t, q);
          }
          us(e, t, a);
          return;
        }
        case Mt: {
          us(e, t, a);
          return;
        }
        case tt: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ke
          ) {
            var Z = ra;
            ra = Z || a.memoizedState !== null, us(e, t, a), ra = Z;
          } else
            us(e, t, a);
          break;
        }
        default: {
          us(e, t, a);
          return;
        }
      }
    }
    function t_(e) {
      e.memoizedState;
    }
    function n_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && jb(s);
          }
        }
      }
    }
    function n1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new HD()), t.forEach(function(i) {
          var o = J_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Na)
              if (sd !== null && cd !== null)
                Ev(cd, sd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function r_(e, t, a) {
      sd = a, cd = e, tn(t), r1(t, e), tn(t), sd = null, cd = null;
    }
    function Rl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            e_(e, t, s);
          } catch (g) {
            xn(s, t, g);
          }
        }
      var d = Dc();
      if (t.subtreeFlags & ma)
        for (var h = t.child; h !== null; )
          tn(h), r1(h, e), h = h.sibling;
      tn(d);
    }
    function r1(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case _:
        case ye:
        case $:
        case Fe: {
          if (Rl(t, e), lo(e), o & xt) {
            try {
              El(to | kr, e, e.return), os(to | kr, e);
            } catch (ht) {
              xn(e, e.return, ht);
            }
            if (e.mode & yt) {
              try {
                io(), El(Or | kr, e, e.return);
              } catch (ht) {
                xn(e, e.return, ht);
              }
              ao(e);
            } else
              try {
                El(Or | kr, e, e.return);
              } catch (ht) {
                xn(e, e.return, ht);
              }
          }
          return;
        }
        case O: {
          Rl(t, e), lo(e), o & pa && i !== null && fd(i, i.return);
          return;
        }
        case K: {
          Rl(t, e), lo(e), o & pa && i !== null && fd(i, i.return);
          {
            if (e.flags & nn) {
              var s = e.stateNode;
              try {
                nC(s);
              } catch (ht) {
                xn(e, e.return, ht);
              }
            }
            if (o & xt) {
              var d = e.stateNode;
              if (d != null) {
                var h = e.memoizedProps, g = i !== null ? i.memoizedProps : h, R = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    pb(d, T, R, g, h, e);
                  } catch (ht) {
                    xn(e, e.return, ht);
                  }
              }
            }
          }
          return;
        }
        case ae: {
          if (Rl(t, e), lo(e), o & xt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, N = e.memoizedProps, W = i !== null ? i.memoizedProps : N;
            try {
              vb(z, W, N);
            } catch (ht) {
              xn(e, e.return, ht);
            }
          }
          return;
        }
        case M: {
          if (Rl(t, e), lo(e), o & xt && i !== null) {
            var q = i.memoizedState;
            if (q.isDehydrated)
              try {
                Hb(t.containerInfo);
              } catch (ht) {
                xn(e, e.return, ht);
              }
          }
          return;
        }
        case I: {
          Rl(t, e), lo(e);
          return;
        }
        case De: {
          Rl(t, e), lo(e);
          var Z = e.child;
          if (Z.flags & Bl) {
            var _e = Z.stateNode, at = Z.memoizedState, Xe = at !== null;
            if (_e.isHidden = Xe, Xe) {
              var $t = Z.alternate !== null && Z.alternate.memoizedState !== null;
              $t || F_();
            }
          }
          if (o & xt) {
            try {
              t_(e);
            } catch (ht) {
              xn(e, e.return, ht);
            }
            n1(e);
          }
          return;
        }
        case tt: {
          var Ft = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ke
          ) {
            var j = ra;
            ra = j || Ft, Rl(t, e), ra = j;
          } else
            Rl(t, e);
          if (lo(e), o & Bl) {
            var ee = e.stateNode, V = e.memoizedState, fe = V !== null, ze = e;
            if (ee.isHidden = fe, fe && !Ft && (ze.mode & Ke) !== We) {
              $e = ze;
              for (var Oe = ze.child; Oe !== null; )
                $e = Oe, i_(Oe), Oe = Oe.sibling;
            }
            XD(ze, fe);
          }
          return;
        }
        case pt: {
          Rl(t, e), lo(e), o & xt && n1(e);
          return;
        }
        case Mt:
          return;
        default: {
          Rl(t, e), lo(e);
          return;
        }
      }
    }
    function lo(e) {
      var t = e.flags;
      if (t & wn) {
        try {
          ZD(e);
        } catch (a) {
          xn(e, e.return, a);
        }
        e.flags &= ~wn;
      }
      t & Wa && (e.flags &= ~Wa);
    }
    function a_(e, t, a) {
      sd = a, cd = t, $e = e, a1(e, t, a), sd = null, cd = null;
    }
    function a1(e, t, a) {
      for (var i = (e.mode & Ke) !== We; $e !== null; ) {
        var o = $e, s = o.child;
        if (o.tag === tt && i) {
          var d = o.memoizedState !== null, h = d || ry;
          if (h) {
            T0(e, t, a);
            continue;
          } else {
            var g = o.alternate, R = g !== null && g.memoizedState !== null, T = R || ra, z = ry, N = ra;
            ry = h, ra = T, ra && !N && ($e = o, l_(o));
            for (var W = s; W !== null; )
              $e = W, a1(
                W,
                // New root; bubble back up to here and stop.
                t,
                a
              ), W = W.sibling;
            $e = o, ry = z, ra = N, T0(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Vr) !== rt && s !== null ? (s.return = o, $e = s) : T0(e, t, a);
      }
    }
    function T0(e, t, a) {
      for (; $e !== null; ) {
        var i = $e;
        if ((i.flags & Vr) !== rt) {
          var o = i.alternate;
          tn(i);
          try {
            GD(t, o, i, a);
          } catch (d) {
            xn(i, i.return, d);
          }
          Vn();
        }
        if (i === e) {
          $e = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, $e = s;
          return;
        }
        $e = i.return;
      }
    }
    function i_(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.child;
        switch (t.tag) {
          case _:
          case ye:
          case $:
          case Fe: {
            if (t.mode & yt)
              try {
                io(), El(Or, t, t.return);
              } finally {
                ao(t);
              }
            else
              El(Or, t, t.return);
            break;
          }
          case O: {
            fd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && C0(t, t.return, i);
            break;
          }
          case K: {
            fd(t, t.return);
            break;
          }
          case tt: {
            var o = t.memoizedState !== null;
            if (o) {
              i1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, $e = a) : i1(e);
      }
    }
    function i1(e) {
      for (; $e !== null; ) {
        var t = $e;
        if (t === e) {
          $e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, $e = a;
          return;
        }
        $e = t.return;
      }
    }
    function l_(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.child;
        if (t.tag === tt) {
          var i = t.memoizedState !== null;
          if (i) {
            l1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, $e = a) : l1(e);
      }
    }
    function l1(e) {
      for (; $e !== null; ) {
        var t = $e;
        tn(t);
        try {
          KD(t);
        } catch (i) {
          xn(t, t.return, i);
        }
        if (Vn(), t === e) {
          $e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, $e = a;
          return;
        }
        $e = t.return;
      }
    }
    function o_(e, t, a, i) {
      $e = t, u_(t, e, a, i);
    }
    function u_(e, t, a, i) {
      for (; $e !== null; ) {
        var o = $e, s = o.child;
        (o.subtreeFlags & Ga) !== rt && s !== null ? (s.return = o, $e = s) : s_(e, t, a, i);
      }
    }
    function s_(e, t, a, i) {
      for (; $e !== null; ) {
        var o = $e;
        if ((o.flags & kn) !== rt) {
          tn(o);
          try {
            c_(t, o, a, i);
          } catch (d) {
            xn(o, o.return, d);
          }
          Vn();
        }
        if (o === e) {
          $e = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, $e = s;
          return;
        }
        $e = o.return;
      }
    }
    function c_(e, t, a, i) {
      switch (t.tag) {
        case _:
        case ye:
        case Fe: {
          if (t.mode & yt) {
            IS();
            try {
              os(ta | kr, t);
            } finally {
              BS(t);
            }
          } else
            os(ta | kr, t);
          break;
        }
      }
    }
    function f_(e) {
      $e = e, d_();
    }
    function d_() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        if (($e.flags & Zt) !== rt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              $e = o, h_(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var h = d.sibling;
                    d.sibling = null, d = h;
                  } while (d !== null);
                }
              }
            }
            $e = e;
          }
        }
        (e.subtreeFlags & Ga) !== rt && t !== null ? (t.return = e, $e = t) : p_();
      }
    }
    function p_() {
      for (; $e !== null; ) {
        var e = $e;
        (e.flags & kn) !== rt && (tn(e), v_(e), Vn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function v_(e) {
      switch (e.tag) {
        case _:
        case ye:
        case Fe: {
          e.mode & yt ? (IS(), El(ta | kr, e, e.return), BS(e)) : El(ta | kr, e, e.return);
          break;
        }
      }
    }
    function h_(e, t) {
      for (; $e !== null; ) {
        var a = $e;
        tn(a), y_(a, t), Vn();
        var i = a.child;
        i !== null ? (i.return = a, $e = i) : m_(e);
      }
    }
    function m_(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.sibling, i = t.return;
        if (JR(t), t === e) {
          $e = null;
          return;
        }
        if (a !== null) {
          a.return = i, $e = a;
          return;
        }
        $e = i;
      }
    }
    function y_(e, t) {
      switch (e.tag) {
        case _:
        case ye:
        case Fe: {
          e.mode & yt ? (IS(), El(ta, e, t), BS(e)) : El(ta, e, t);
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case _:
        case ye:
        case Fe: {
          try {
            os(Or | kr, e);
          } catch (a) {
            xn(e, e.return, a);
          }
          break;
        }
        case O: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            xn(e, e.return, a);
          }
          break;
        }
      }
    }
    function S_(e) {
      switch (e.tag) {
        case _:
        case ye:
        case Fe: {
          try {
            os(ta | kr, e);
          } catch (t) {
            xn(e, e.return, t);
          }
          break;
        }
      }
    }
    function E_(e) {
      switch (e.tag) {
        case _:
        case ye:
        case Fe: {
          try {
            El(Or | kr, e, e.return);
          } catch (a) {
            xn(e, e.return, a);
          }
          break;
        }
        case O: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && C0(e, e.return, t);
          break;
        }
      }
    }
    function C_(e) {
      switch (e.tag) {
        case _:
        case ye:
        case Fe:
          try {
            El(ta | kr, e, e.return);
          } catch (t) {
            xn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var sv = Symbol.for;
      sv("selector.component"), sv("selector.has_pseudo_class"), sv("selector.role"), sv("selector.test_id"), sv("selector.text");
    }
    var R_ = [];
    function w_() {
      R_.forEach(function(e) {
        return e();
      });
    }
    var T_ = m.ReactCurrentActQueue;
    function b_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function o1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && T_.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x_ = Math.ceil, b0 = m.ReactCurrentDispatcher, x0 = m.ReactCurrentOwner, ia = m.ReactCurrentBatchConfig, wl = m.ReactCurrentActQueue, Mr = (
      /*             */
      0
    ), u1 = (
      /*               */
      1
    ), la = (
      /*                */
      2
    ), Ii = (
      /*                */
      4
    ), Ko = 0, cv = 1, mc = 2, iy = 3, fv = 4, s1 = 5, D0 = 6, It = Mr, Aa = null, qn = null, Ur = le, oo = le, _0 = Ju(le), zr = Ko, dv = null, ly = le, pv = le, oy = le, vv = null, oi = null, k0 = 0, c1 = 500, f1 = 1 / 0, D_ = 500, Xo = null;
    function hv() {
      f1 = zn() + D_;
    }
    function d1() {
      return f1;
    }
    var uy = !1, O0 = null, dd = null, yc = !1, ss = null, mv = le, L0 = [], N0 = null, __ = 50, yv = 0, M0 = null, U0 = !1, sy = !1, k_ = 50, pd = 0, cy = null, gv = Cn, fy = le, p1 = !1;
    function dy() {
      return Aa;
    }
    function Fa() {
      return (It & (la | Ii)) !== Mr ? zn() : (gv !== Cn || (gv = zn()), gv);
    }
    function cs(e) {
      var t = e.mode;
      if ((t & Ke) === We)
        return Je;
      if ((It & la) !== Mr && Ur !== le)
        return Mu(Ur);
      var a = Tx() !== wx;
      if (a) {
        if (ia.transition !== null) {
          var i = ia.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return fy === nr && (fy = Th()), fy;
      }
      var o = Za();
      if (o !== nr)
        return o;
      var s = ub();
      return s;
    }
    function O_(e) {
      var t = e.mode;
      return (t & Ke) === We ? Je : Ea();
    }
    function Ar(e, t, a, i) {
      ek(), p1 && y("useInsertionEffect must not schedule updates."), U0 && (sy = !0), zo(e, a, i), (It & la) !== le && e === Aa ? rk(t) : (Na && Ef(e, t, a), ak(t), e === Aa && ((It & la) === Mr && (pv = bt(pv, a)), zr === fv && fs(e, Ur)), ui(e, i), a === Je && It === Mr && (t.mode & Ke) === We && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !wl.isBatchingLegacy && (hv(), pC()));
    }
    function L_(e, t, a) {
      var i = e.current;
      i.lanes = t, zo(e, t, a), ui(e, a);
    }
    function N_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (It & la) !== Mr
      );
    }
    function ui(e, t) {
      var a = e.callbackNode;
      Sh(e, t);
      var i = Mo(e, e === Aa ? Ur : le);
      if (i === le) {
        a !== null && k1(a), e.callbackNode = null, e.callbackPriority = nr;
        return;
      }
      var o = Gn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(wl.current !== null && a !== V0)) {
        a == null && s !== Je && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && k1(a);
      var d;
      if (o === Je)
        e.tag === Zu ? (wl.isBatchingLegacy !== null && (wl.didScheduleLegacyUpdate = !0), lx(m1.bind(null, e))) : dC(m1.bind(null, e)), wl.current !== null ? wl.current.push(es) : cb(function() {
          (It & (la | Ii)) === Mr && es();
        }), d = null;
      else {
        var h;
        switch (_r(i)) {
          case Kn:
            h = Qc;
            break;
          case sl:
            h = xo;
            break;
          case Ui:
            h = Mi;
            break;
          case Uu:
            h = Wc;
            break;
          default:
            h = Mi;
            break;
        }
        d = B0(h, v1.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = d;
    }
    function v1(e, t) {
      if (Xx(), gv = Cn, fy = le, (It & (la | Ii)) !== Mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Jo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Mo(e, e === Aa ? Ur : le);
      if (o === le)
        return null;
      var s = !Is(e, o) && !wh(e, o) && !t, d = s ? B_(e, o) : vy(e, o);
      if (d !== Ko) {
        if (d === mc) {
          var h = Wl(e);
          h !== le && (o = h, d = z0(e, h));
        }
        if (d === cv) {
          var g = dv;
          throw gc(e, le), fs(e, o), ui(e, zn()), g;
        }
        if (d === D0)
          fs(e, o);
        else {
          var R = !Is(e, o), T = e.current.alternate;
          if (R && !U_(T)) {
            if (d = vy(e, o), d === mc) {
              var z = Wl(e);
              z !== le && (o = z, d = z0(e, z));
            }
            if (d === cv) {
              var N = dv;
              throw gc(e, le), fs(e, o), ui(e, zn()), N;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, M_(e, d, o);
        }
      }
      return ui(e, zn()), e.callbackNode === a ? v1.bind(null, e) : null;
    }
    function z0(e, t) {
      var a = vv;
      if (Cf(e)) {
        var i = gc(e, t);
        i.flags |= Bn, Zb(e.containerInfo);
      }
      var o = vy(e, t);
      if (o !== mc) {
        var s = oi;
        oi = a, s !== null && h1(s);
      }
      return o;
    }
    function h1(e) {
      oi === null ? oi = e : oi.push.apply(oi, e);
    }
    function M_(e, t, a) {
      switch (t) {
        case Ko:
        case cv:
          throw new Error("Root did not complete. This is a bug in React.");
        case mc: {
          Sc(e, oi, Xo);
          break;
        }
        case iy: {
          if (fs(e, a), Eh(a) && // do not delay if we're inside an act() scope
          !O1()) {
            var i = k0 + c1 - zn();
            if (i > 10) {
              var o = Mo(e, le);
              if (o !== le)
                break;
              var s = e.suspendedLanes;
              if (!Uo(s, a)) {
                Fa(), gf(e, s);
                break;
              }
              e.timeoutHandle = Ng(Sc.bind(null, e, oi, Xo), i);
              break;
            }
          }
          Sc(e, oi, Xo);
          break;
        }
        case fv: {
          if (fs(e, a), Rh(a))
            break;
          if (!O1()) {
            var d = yh(e, a), h = d, g = zn() - h, R = Z_(g) - g;
            if (R > 10) {
              e.timeoutHandle = Ng(Sc.bind(null, e, oi, Xo), R);
              break;
            }
          }
          Sc(e, oi, Xo);
          break;
        }
        case s1: {
          Sc(e, oi, Xo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function U_(e) {
      for (var t = e; ; ) {
        if (t.flags & Ms) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], d = s.getSnapshot, h = s.value;
                try {
                  if (!Ie(d(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & Ms && g !== null) {
          g.return = t, t = g;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function fs(e, t) {
      t = $s(t, oy), t = $s(t, pv), xh(e, t);
    }
    function m1(e) {
      if (qx(), (It & (la | Ii)) !== Mr)
        throw new Error("Should not already be working.");
      Jo();
      var t = Mo(e, le);
      if (!Ca(t, Je))
        return ui(e, zn()), null;
      var a = vy(e, t);
      if (e.tag !== Zu && a === mc) {
        var i = Wl(e);
        i !== le && (t = i, a = z0(e, i));
      }
      if (a === cv) {
        var o = dv;
        throw gc(e, le), fs(e, t), ui(e, zn()), o;
      }
      if (a === D0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Sc(e, oi, Xo), ui(e, zn()), null;
    }
    function z_(e, t) {
      t !== le && (up(e, bt(t, Je)), ui(e, zn()), (It & (la | Ii)) === Mr && (hv(), es()));
    }
    function A0(e, t) {
      var a = It;
      It |= u1;
      try {
        return e(t);
      } finally {
        It = a, It === Mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !wl.isBatchingLegacy && (hv(), pC());
      }
    }
    function A_(e, t, a, i, o) {
      var s = Za(), d = ia.transition;
      try {
        return ia.transition = null, In(Kn), e(t, a, i, o);
      } finally {
        In(s), ia.transition = d, It === Mr && hv();
      }
    }
    function qo(e) {
      ss !== null && ss.tag === Zu && (It & (la | Ii)) === Mr && Jo();
      var t = It;
      It |= u1;
      var a = ia.transition, i = Za();
      try {
        return ia.transition = null, In(Kn), e ? e() : void 0;
      } finally {
        In(i), ia.transition = a, It = t, (It & (la | Ii)) === Mr && es();
      }
    }
    function y1() {
      return (It & (la | Ii)) !== Mr;
    }
    function py(e, t) {
      Ta(_0, oo, e), oo = bt(oo, t);
    }
    function F0(e) {
      oo = _0.current, wa(_0, e);
    }
    function gc(e, t) {
      e.finishedWork = null, e.finishedLanes = le;
      var a = e.timeoutHandle;
      if (a !== Mg && (e.timeoutHandle = Mg, sb(a)), qn !== null)
        for (var i = qn.return; i !== null; ) {
          var o = i.alternate;
          QR(o, i), i = i.return;
        }
      Aa = e;
      var s = Ec(e.current, null);
      return qn = s, Ur = oo = t, zr = Ko, dv = null, ly = le, pv = le, oy = le, vv = null, oi = null, Lx(), hl.discardPendingWarnings(), s;
    }
    function g1(e, t) {
      do {
        var a = qn;
        try {
          if (wm(), BC(), Vn(), x0.current = null, a === null || a.return === null) {
            zr = cv, dv = t, qn = null;
            return;
          }
          if (St && a.mode & yt && Jm(a, !0), gt)
            if (ga(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              _o(a, i, Ur);
            } else
              As(a, t, Ur);
          lD(e, a.return, a, t, Ur), R1(a);
        } catch (o) {
          t = o, qn === a && a !== null ? (a = a.return, qn = a) : a = qn;
          continue;
        }
        return;
      } while (!0);
    }
    function S1() {
      var e = b0.current;
      return b0.current = Wm, e === null ? Wm : e;
    }
    function E1(e) {
      b0.current = e;
    }
    function F_() {
      k0 = zn();
    }
    function Sv(e) {
      ly = bt(e, ly);
    }
    function P_() {
      zr === Ko && (zr = iy);
    }
    function P0() {
      (zr === Ko || zr === iy || zr === mc) && (zr = fv), Aa !== null && (Bs(ly) || Bs(pv)) && fs(Aa, Ur);
    }
    function H_(e) {
      zr !== fv && (zr = mc), vv === null ? vv = [e] : vv.push(e);
    }
    function j_() {
      return zr === Ko;
    }
    function vy(e, t) {
      var a = It;
      It |= la;
      var i = S1();
      if (Aa !== e || Ur !== t) {
        if (Na) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Ev(e, Ur), o.clear()), sp(e, t);
        }
        Xo = Qs(), gc(e, t);
      }
      On(t);
      do
        try {
          V_();
          break;
        } catch (s) {
          g1(e, s);
        }
      while (!0);
      if (wm(), It = a, E1(i), qn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Jc(), Aa = null, Ur = le, zr;
    }
    function V_() {
      for (; qn !== null; )
        C1(qn);
    }
    function B_(e, t) {
      var a = It;
      It |= la;
      var i = S1();
      if (Aa !== e || Ur !== t) {
        if (Na) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Ev(e, Ur), o.clear()), sp(e, t);
        }
        Xo = Qs(), hv(), gc(e, t);
      }
      On(t);
      do
        try {
          I_();
          break;
        } catch (s) {
          g1(e, s);
        }
      while (!0);
      return wm(), E1(i), It = a, qn !== null ? (qc(), Ko) : (Jc(), Aa = null, Ur = le, zr);
    }
    function I_() {
      for (; qn !== null && !Yc(); )
        C1(qn);
    }
    function C1(e) {
      var t = e.alternate;
      tn(e);
      var a;
      (e.mode & yt) !== We ? (VS(e), a = H0(t, e, oo), Jm(e, !0)) : a = H0(t, e, oo), Vn(), e.memoizedProps = e.pendingProps, a === null ? R1(e) : qn = a, x0.current = null;
    }
    function R1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ka) === rt) {
          tn(t);
          var o = void 0;
          if ((t.mode & yt) === We ? o = YR(a, t, oo) : (VS(t), o = YR(a, t, oo), Jm(t, !1)), Vn(), o !== null) {
            qn = o;
            return;
          }
        } else {
          var s = PD(a, t);
          if (s !== null) {
            s.flags &= lh, qn = s;
            return;
          }
          if ((t.mode & yt) !== We) {
            Jm(t, !1);
            for (var d = t.actualDuration, h = t.child; h !== null; )
              d += h.actualDuration, h = h.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= ka, i.subtreeFlags = rt, i.deletions = null;
          else {
            zr = D0, qn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          qn = g;
          return;
        }
        t = i, qn = t;
      } while (t !== null);
      zr === Ko && (zr = s1);
    }
    function Sc(e, t, a) {
      var i = Za(), o = ia.transition;
      try {
        ia.transition = null, In(Kn), $_(e, t, a, i);
      } finally {
        ia.transition = o, In(i);
      }
      return null;
    }
    function $_(e, t, a, i) {
      do
        Jo();
      while (ss !== null);
      if (tk(), (It & (la | Ii)) !== Mr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if ($l(s), o === null)
        return Gc(), null;
      if (s === le && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = le, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = nr;
      var d = bt(o.lanes, o.childLanes);
      Sf(e, d), e === Aa && (Aa = null, qn = null, Ur = le), ((o.subtreeFlags & Ga) !== rt || (o.flags & Ga) !== rt) && (yc || (yc = !0, N0 = a, B0(Mi, function() {
        return Jo(), null;
      })));
      var h = (o.subtreeFlags & (Eu | ma | Vr | Ga)) !== rt, g = (o.flags & (Eu | ma | Vr | Ga)) !== rt;
      if (h || g) {
        var R = ia.transition;
        ia.transition = null;
        var T = Za();
        In(Kn);
        var z = It;
        It |= Ii, x0.current = null, ID(e, o), pR(), r_(e, o, s), nb(e.containerInfo), e.current = o, ep(s), a_(o, e, s), bu(), sh(), It = z, In(T), ia.transition = R;
      } else
        e.current = o, pR();
      var N = yc;
      if (yc ? (yc = !1, ss = e, mv = s) : (pd = 0, cy = null), d = e.pendingLanes, d === le && (dd = null), N || x1(e.current, !1), Ru(o.stateNode, i), Na && e.memoizedUpdaters.clear(), w_(), ui(e, zn()), t !== null)
        for (var W = e.onRecoverableError, q = 0; q < t.length; q++) {
          var Z = t[q], _e = Z.stack, at = Z.digest;
          W(Z.value, {
            componentStack: _e,
            digest: at
          });
        }
      if (uy) {
        uy = !1;
        var Xe = O0;
        throw O0 = null, Xe;
      }
      return Ca(mv, Je) && e.tag !== Zu && Jo(), d = e.pendingLanes, Ca(d, Je) ? (Kx(), e === M0 ? yv++ : (yv = 0, M0 = e)) : yv = 0, es(), Gc(), null;
    }
    function Jo() {
      if (ss !== null) {
        var e = _r(mv), t = rg(Ui, e), a = ia.transition, i = Za();
        try {
          return ia.transition = null, In(t), Q_();
        } finally {
          In(i), ia.transition = a;
        }
      }
      return !1;
    }
    function Y_(e) {
      L0.push(e), yc || (yc = !0, B0(Mi, function() {
        return Jo(), null;
      }));
    }
    function Q_() {
      if (ss === null)
        return !1;
      var e = N0;
      N0 = null;
      var t = ss, a = mv;
      if (ss = null, mv = le, (It & (la | Ii)) !== Mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      U0 = !0, sy = !1, hh(a);
      var i = It;
      It |= Ii, f_(t.current), o_(t, t.current, a, e);
      {
        var o = L0;
        L0 = [];
        for (var s = 0; s < o.length; s++) {
          var d = o[s];
          WD(t, d);
        }
      }
      tp(), x1(t.current, !0), It = i, es(), sy ? t === cy ? pd++ : (pd = 0, cy = t) : pd = 0, U0 = !1, sy = !1, qa(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function w1(e) {
      return dd !== null && dd.has(e);
    }
    function W_(e) {
      dd === null ? dd = /* @__PURE__ */ new Set([e]) : dd.add(e);
    }
    function G_(e) {
      uy || (uy = !0, O0 = e);
    }
    var K_ = G_;
    function T1(e, t, a) {
      var i = vc(a, t), o = CR(e, i, Je), s = ns(e, o, Je), d = Fa();
      s !== null && (zo(s, Je, d), ui(s, d));
    }
    function xn(e, t, a) {
      if (jD(a), Cv(!1), e.tag === M) {
        T1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === M) {
          T1(i, e, a);
          return;
        } else if (i.tag === O) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !w1(s)) {
            var d = vc(a, e), h = i0(i, d, Je), g = ns(i, h, Je), R = Fa();
            g !== null && (zo(g, Je, R), ui(g, R));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function X_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Fa();
      gf(e, a), ik(e), Aa === e && Uo(Ur, a) && (zr === fv || zr === iy && Eh(Ur) && zn() - k0 < c1 ? gc(e, le) : oy = bt(oy, a)), ui(e, o);
    }
    function b1(e, t) {
      t === nr && (t = O_(e));
      var a = Fa(), i = ii(e, t);
      i !== null && (zo(i, t, a), ui(i, a));
    }
    function q_(e) {
      var t = e.memoizedState, a = nr;
      t !== null && (a = t.retryLane), b1(e, a);
    }
    function J_(e, t) {
      var a = nr, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case pt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), b1(e, a);
    }
    function Z_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x_(e / 1960) * 1960;
    }
    function ek() {
      if (yv > __)
        throw yv = 0, M0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      pd > k_ && (pd = 0, cy = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function tk() {
      hl.flushLegacyContextWarning(), hl.flushPendingUnsafeLifecycleWarnings();
    }
    function x1(e, t) {
      tn(e), hy(e, ha, E_), t && hy(e, bo, C_), hy(e, ha, g_), t && hy(e, bo, S_), Vn();
    }
    function hy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== rt ? i = i.child : ((i.flags & t) !== rt && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var my = null;
    function D1(e) {
      {
        if ((It & la) !== Mr || !(e.mode & Ke))
          return;
        var t = e.tag;
        if (t !== B && t !== M && t !== O && t !== _ && t !== ye && t !== $ && t !== Fe)
          return;
        var a = Et(e) || "ReactComponent";
        if (my !== null) {
          if (my.has(a))
            return;
          my.add(a);
        } else
          my = /* @__PURE__ */ new Set([a]);
        var i = Un;
        try {
          tn(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? tn(e) : Vn();
        }
      }
    }
    var H0;
    {
      var nk = null;
      H0 = function(e, t, a) {
        var i = z1(nk, t);
        try {
          return jR(e, t, a);
        } catch (s) {
          if (vx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (wm(), BC(), QR(e, t), z1(t, i), t.mode & yt && VS(t), To(null, jR, null, e, t, a), Jy()) {
            var o = Yd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var _1 = !1, j0;
    j0 = /* @__PURE__ */ new Set();
    function rk(e) {
      if (ca && !Qx())
        switch (e.tag) {
          case _:
          case ye:
          case Fe: {
            var t = qn && Et(qn) || "Unknown", a = t;
            if (!j0.has(a)) {
              j0.add(a);
              var i = Et(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case O: {
            _1 || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), _1 = !0);
            break;
          }
        }
    }
    function Ev(e, t) {
      if (Na) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ef(e, i, t);
        });
      }
    }
    var V0 = {};
    function B0(e, t) {
      {
        var a = wl.current;
        return a !== null ? (a.push(t), V0) : $c(e, t);
      }
    }
    function k1(e) {
      if (e !== V0)
        return uh(e);
    }
    function O1() {
      return wl.current !== null;
    }
    function ak(e) {
      {
        if (e.mode & Ke) {
          if (!o1())
            return;
        } else if (!b_() || It !== Mr || e.tag !== _ && e.tag !== ye && e.tag !== Fe)
          return;
        if (wl.current === null) {
          var t = Un;
          try {
            tn(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Et(e));
          } finally {
            t ? tn(e) : Vn();
          }
        }
      }
    }
    function ik(e) {
      e.tag !== Zu && o1() && wl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Cv(e) {
      p1 = e;
    }
    var $i = null, vd = null, lk = function(e) {
      $i = e;
    };
    function hd(e) {
      {
        if ($i === null)
          return e;
        var t = $i(e);
        return t === void 0 ? e : t.current;
      }
    }
    function I0(e) {
      return hd(e);
    }
    function $0(e) {
      {
        if ($i === null)
          return e;
        var t = $i(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = hd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Re,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function L1(e, t) {
      {
        if ($i === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case O: {
            typeof i == "function" && (o = !0);
            break;
          }
          case _: {
            (typeof i == "function" || s === wt) && (o = !0);
            break;
          }
          case ye: {
            (s === Re || s === wt) && (o = !0);
            break;
          }
          case $:
          case Fe: {
            (s === gn || s === wt) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var d = $i(a);
          if (d !== void 0 && d === $i(i))
            return !0;
        }
        return !1;
      }
    }
    function N1(e) {
      {
        if ($i === null || typeof WeakSet != "function")
          return;
        vd === null && (vd = /* @__PURE__ */ new WeakSet()), vd.add(e);
      }
    }
    var ok = function(e, t) {
      {
        if ($i === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Jo(), qo(function() {
          Y0(e.current, i, a);
        });
      }
    }, uk = function(e, t) {
      {
        if (e.context !== Ci)
          return;
        Jo(), qo(function() {
          Rv(t, e, null, null);
        });
      }
    };
    function Y0(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, d = e.tag, h = e.type, g = null;
        switch (d) {
          case _:
          case Fe:
          case O:
            g = h;
            break;
          case ye:
            g = h.render;
            break;
        }
        if ($i === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, T = !1;
        if (g !== null) {
          var z = $i(g);
          z !== void 0 && (a.has(z) ? T = !0 : t.has(z) && (d === O ? T = !0 : R = !0));
        }
        if (vd !== null && (vd.has(e) || i !== null && vd.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || R) {
          var N = ii(e, Je);
          N !== null && Ar(N, e, Je, Cn);
        }
        o !== null && !T && Y0(o, t, a), s !== null && Y0(s, t, a);
      }
    }
    var sk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return Q0(e.current, i, a), a;
      }
    };
    function Q0(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, d = e.type, h = null;
        switch (s) {
          case _:
          case Fe:
          case O:
            h = d;
            break;
          case ye:
            h = d.render;
            break;
        }
        var g = !1;
        h !== null && t.has(h) && (g = !0), g ? ck(e, a) : i !== null && Q0(i, t, a), o !== null && Q0(o, t, a);
      }
    }
    function ck(e, t) {
      {
        var a = fk(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case K:
              t.add(i.stateNode);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
            case M:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function fk(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === K)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var W0;
    {
      W0 = !1;
      try {
        var M1 = Object.preventExtensions({});
      } catch {
        W0 = !0;
      }
    }
    function dk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = rt, this.subtreeFlags = rt, this.deletions = null, this.lanes = le, this.childLanes = le, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !W0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ri = function(e, t, a, i) {
      return new dk(e, t, a, i);
    };
    function G0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function pk(e) {
      return typeof e == "function" && !G0(e) && e.defaultProps === void 0;
    }
    function vk(e) {
      if (typeof e == "function")
        return G0(e) ? O : _;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Re)
          return ye;
        if (t === gn)
          return $;
      }
      return B;
    }
    function Ec(e, t) {
      var a = e.alternate;
      a === null ? (a = Ri(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = rt, a.subtreeFlags = rt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & xr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case B:
        case _:
        case Fe:
          a.type = hd(e.type);
          break;
        case O:
          a.type = I0(e.type);
          break;
        case ye:
          a.type = $0(e.type);
          break;
      }
      return a;
    }
    function hk(e, t) {
      e.flags &= xr | wn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = le, e.lanes = t, e.child = null, e.subtreeFlags = rt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = rt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function mk(e, t, a) {
      var i;
      return e === pm ? (i = Ke, t === !0 && (i |= Lt, i |= Ma)) : i = We, Na && (i |= yt), Ri(M, null, null, i);
    }
    function K0(e, t, a, i, o, s) {
      var d = B, h = e;
      if (typeof e == "function")
        G0(e) ? (d = O, h = I0(h)) : h = hd(h);
      else if (typeof e == "string")
        d = K;
      else
        e: switch (e) {
          case Pe:
            return ds(a.children, o, s, t);
          case lt:
            d = pe, o |= Lt, (o & Ke) !== We && (o |= Ma);
            break;
          case ke:
            return yk(a, o, s, t);
          case vt:
            return gk(a, o, s, t);
          case _t:
            return Sk(a, o, s, t);
          case Va:
            return U1(a, o, s, t);
          case _i:
          case Ht:
          case _a:
          case sa:
          case pn:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ue:
                  d = he;
                  break e;
                case Le:
                  d = Ae;
                  break e;
                case Re:
                  d = ye, h = $0(h);
                  break e;
                case gn:
                  d = $;
                  break e;
                case wt:
                  d = je, h = null;
                  break e;
              }
            var g = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = i ? Et(i) : null;
              R && (g += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
          }
        }
      var T = Ri(d, a, t, o);
      return T.elementType = e, T.type = h, T.lanes = s, T._debugOwner = i, T;
    }
    function X0(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, d = e.props, h = K0(o, s, d, i, t, a);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function ds(e, t, a, i) {
      var o = Ri(ue, e, i, t);
      return o.lanes = a, o;
    }
    function yk(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = Ri(be, e, i, t | yt);
      return o.elementType = ke, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function gk(e, t, a, i) {
      var o = Ri(De, e, i, t);
      return o.elementType = vt, o.lanes = a, o;
    }
    function Sk(e, t, a, i) {
      var o = Ri(pt, e, i, t);
      return o.elementType = _t, o.lanes = a, o;
    }
    function U1(e, t, a, i) {
      var o = Ri(tt, e, i, t);
      o.elementType = Va, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function q0(e, t, a) {
      var i = Ri(ae, e, null, t);
      return i.lanes = a, i;
    }
    function Ek() {
      var e = Ri(K, null, null, We);
      return e.elementType = "DELETED", e;
    }
    function Ck(e) {
      var t = Ri(et, null, null, We);
      return t.stateNode = e, t;
    }
    function J0(e, t, a) {
      var i = e.children !== null ? e.children : [], o = Ri(I, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function z1(e, t) {
      return e === null && (e = Ri(B, null, null, We)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Rk(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Mg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = nr, this.eventTimes = Ys(le), this.expirationTimes = Ys(Cn), this.pendingLanes = le, this.suspendedLanes = le, this.pingedLanes = le, this.expiredLanes = le, this.mutableReadLanes = le, this.finishedLanes = le, this.entangledLanes = le, this.entanglements = Ys(le), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Hs; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case pm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Zu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function A1(e, t, a, i, o, s, d, h, g, R) {
      var T = new Rk(e, t, a, h, g), z = mk(t, s);
      T.current = z, z.stateNode = T;
      {
        var N = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = N;
      }
      return fS(z), T;
    }
    var Z0 = "18.3.1";
    function wk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return di(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Ce,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var eE, tE;
    eE = !1, tE = {};
    function F1(e) {
      if (!e)
        return Ci;
      var t = Ya(e), a = ix(t);
      if (t.tag === O) {
        var i = t.type;
        if (eo(i))
          return cC(t, i, a);
      }
      return a;
    }
    function Tk(e, t) {
      {
        var a = Ya(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Ka(a);
        if (o === null)
          return null;
        if (o.mode & Lt) {
          var s = Et(a) || "Component";
          if (!tE[s]) {
            tE[s] = !0;
            var d = Un;
            try {
              tn(o), a.mode & Lt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? tn(d) : Vn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function P1(e, t, a, i, o, s, d, h) {
      var g = !1, R = null;
      return A1(e, t, g, R, a, i, o, s, d);
    }
    function H1(e, t, a, i, o, s, d, h, g, R) {
      var T = !0, z = A1(a, i, T, e, o, s, d, h, g);
      z.context = F1(null);
      var N = z.current, W = Fa(), q = cs(N), Z = Wo(W, q);
      return Z.callback = t ?? null, ns(N, Z, q), L_(z, q, W), z;
    }
    function Rv(e, t, a, i) {
      Zd(t, e);
      var o = t.current, s = Fa(), d = cs(o);
      np(d);
      var h = F1(a);
      t.context === null ? t.context = h : t.pendingContext = h, ca && Un !== null && !eE && (eE = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Et(Un) || "Unknown"));
      var g = Wo(s, d);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var R = ns(o, g, d);
      return R !== null && (Ar(R, o, d, s), _m(R, o, d)), d;
    }
    function yy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case K:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function bk(e) {
      switch (e.tag) {
        case M: {
          var t = e.stateNode;
          if (Cf(t)) {
            var a = ip(t);
            z_(t, a);
          }
          break;
        }
        case De: {
          qo(function() {
            var o = ii(e, Je);
            if (o !== null) {
              var s = Fa();
              Ar(o, e, Je, s);
            }
          });
          var i = Je;
          nE(e, i);
          break;
        }
      }
    }
    function j1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = bh(a.retryLane, t));
    }
    function nE(e, t) {
      j1(e, t);
      var a = e.alternate;
      a && j1(a, t);
    }
    function xk(e) {
      if (e.tag === De) {
        var t = Vs, a = ii(e, t);
        if (a !== null) {
          var i = Fa();
          Ar(a, e, t, i);
        }
        nE(e, t);
      }
    }
    function Dk(e) {
      if (e.tag === De) {
        var t = cs(e), a = ii(e, t);
        if (a !== null) {
          var i = Fa();
          Ar(a, e, t, i);
        }
        nE(e, t);
      }
    }
    function V1(e) {
      var t = oh(e);
      return t === null ? null : t.stateNode;
    }
    var B1 = function(e) {
      return null;
    };
    function _k(e) {
      return B1(e);
    }
    var I1 = function(e) {
      return !1;
    };
    function kk(e) {
      return I1(e);
    }
    var $1 = null, Y1 = null, Q1 = null, W1 = null, G1 = null, K1 = null, X1 = null, q1 = null, J1 = null;
    {
      var Z1 = function(e, t, a) {
        var i = t[a], o = Vt(e) ? e.slice() : Tt({}, e);
        return a + 1 === t.length ? (Vt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Z1(e[i], t, a + 1), o);
      }, ew = function(e, t) {
        return Z1(e, t, 0);
      }, tw = function(e, t, a, i) {
        var o = t[i], s = Vt(e) ? e.slice() : Tt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[o], Vt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = tw(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, nw = function(e, t, a) {
        if (t.length !== a.length) {
          x("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              x("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return tw(e, t, a, 0);
      }, rw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Vt(e) ? e.slice() : Tt({}, e);
        return s[o] = rw(e[o], t, a + 1, i), s;
      }, aw = function(e, t, a) {
        return rw(e, t, 0, a);
      }, rE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      $1 = function(e, t, a, i) {
        var o = rE(e, t);
        if (o !== null) {
          var s = aw(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Tt({}, e.memoizedProps);
          var d = ii(e, Je);
          d !== null && Ar(d, e, Je, Cn);
        }
      }, Y1 = function(e, t, a) {
        var i = rE(e, t);
        if (i !== null) {
          var o = ew(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = Tt({}, e.memoizedProps);
          var s = ii(e, Je);
          s !== null && Ar(s, e, Je, Cn);
        }
      }, Q1 = function(e, t, a, i) {
        var o = rE(e, t);
        if (o !== null) {
          var s = nw(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = Tt({}, e.memoizedProps);
          var d = ii(e, Je);
          d !== null && Ar(d, e, Je, Cn);
        }
      }, W1 = function(e, t, a) {
        e.pendingProps = aw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ii(e, Je);
        i !== null && Ar(i, e, Je, Cn);
      }, G1 = function(e, t) {
        e.pendingProps = ew(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ii(e, Je);
        a !== null && Ar(a, e, Je, Cn);
      }, K1 = function(e, t, a) {
        e.pendingProps = nw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ii(e, Je);
        i !== null && Ar(i, e, Je, Cn);
      }, X1 = function(e) {
        var t = ii(e, Je);
        t !== null && Ar(t, e, Je, Cn);
      }, q1 = function(e) {
        B1 = e;
      }, J1 = function(e) {
        I1 = e;
      };
    }
    function Ok(e) {
      var t = Ka(e);
      return t === null ? null : t.stateNode;
    }
    function Lk(e) {
      return null;
    }
    function Nk() {
      return Un;
    }
    function Mk(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return Jd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: $1,
        overrideHookStateDeletePath: Y1,
        overrideHookStateRenamePath: Q1,
        overrideProps: W1,
        overridePropsDeletePath: G1,
        overridePropsRenamePath: K1,
        setErrorHandler: q1,
        setSuspenseHandler: J1,
        scheduleUpdate: X1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Ok,
        findFiberByHostInstance: t || Lk,
        // React Refresh
        findHostInstancesForRefresh: sk,
        scheduleRefresh: ok,
        scheduleRoot: uk,
        setRefreshHandler: lk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Nk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Z0
      });
    }
    var iw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function aE(e) {
      this._internalRoot = e;
    }
    gy.prototype.render = aE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Sy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== er) {
          var i = V1(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Rv(e, t, null, null);
    }, gy.prototype.unmount = aE.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        y1() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), qo(function() {
          Rv(null, e, null, null);
        }), iC(t);
      }
    };
    function Uk(e, t) {
      if (!Sy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      lw(e);
      var a = !1, i = !1, o = "", s = iw;
      t != null && (t.hydrate ? x("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ie && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = P1(e, pm, null, a, i, o, s);
      lm(d.current, e);
      var h = e.nodeType === er ? e.parentNode : e;
      return _p(h), new aE(d);
    }
    function gy(e) {
      this._internalRoot = e;
    }
    function zk(e) {
      e && lg(e);
    }
    gy.prototype.unstable_scheduleHydration = zk;
    function Ak(e, t, a) {
      if (!Sy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      lw(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, d = !1, h = "", g = iw;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var R = H1(t, null, e, pm, i, s, d, h, g);
      if (lm(R.current, e), _p(e), o)
        for (var T = 0; T < o.length; T++) {
          var z = o[T];
          jx(R, z);
        }
      return new gy(R);
    }
    function Sy(e) {
      return !!(e && (e.nodeType === da || e.nodeType === yi || e.nodeType === go || !te));
    }
    function wv(e) {
      return !!(e && (e.nodeType === da || e.nodeType === yi || e.nodeType === go || e.nodeType === er && e.nodeValue === " react-mount-point-unstable "));
    }
    function lw(e) {
      e.nodeType === da && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Hp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Fk = m.ReactCurrentOwner, ow;
    ow = function(e) {
      if (e._reactRootContainer && e.nodeType !== er) {
        var t = V1(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = iE(e), o = !!(i && qu(i));
      o && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === da && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function iE(e) {
      return e ? e.nodeType === yi ? e.documentElement : e.firstChild : null;
    }
    function uw() {
    }
    function Pk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = yy(d);
            s.call(N);
          };
        }
        var d = H1(
          t,
          i,
          e,
          Zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          uw
        );
        e._reactRootContainer = d, lm(d.current, e);
        var h = e.nodeType === er ? e.parentNode : e;
        return _p(h), qo(), d;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var N = yy(T);
            R.call(N);
          };
        }
        var T = P1(
          e,
          Zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          uw
        );
        e._reactRootContainer = T, lm(T.current, e);
        var z = e.nodeType === er ? e.parentNode : e;
        return _p(z), qo(function() {
          Rv(t, T, a, i);
        }), T;
      }
    }
    function Hk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ey(e, t, a, i, o) {
      ow(a), Hk(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = Pk(a, t, e, o, i);
      else {
        if (d = s, typeof o == "function") {
          var h = o;
          o = function() {
            var g = yy(d);
            h.call(g);
          };
        }
        Rv(t, d, e, o);
      }
      return yy(d);
    }
    var sw = !1;
    function jk(e) {
      {
        sw || (sw = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Fk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", jt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === da ? e : Tk(e, "findDOMNode");
    }
    function Vk(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ey(null, e, t, !0, a);
    }
    function Bk(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ey(null, e, t, !1, a);
    }
    function Ik(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !wv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ns(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ey(e, t, a, !1, i);
    }
    var cw = !1;
    function $k(e) {
      if (cw || (cw = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !wv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Hp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = iE(e), i = a && !qu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return qo(function() {
          Ey(null, null, e, !1, function() {
            e._reactRootContainer = null, iC(e);
          });
        }), !0;
      } else {
        {
          var o = iE(e), s = !!(o && qu(o)), d = e.nodeType === da && wv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Fu(bk), ag(xk), wf(Dk), _h(Za), kh($r), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ah(QT), Hc(A0, A_, qo);
    function Yk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Sy(t))
        throw new Error("Target container is not a DOM element.");
      return wk(e, t, null, a);
    }
    function Qk(e, t, a, i) {
      return Ik(e, t, a, i);
    }
    var lE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [qu, Qf, om, Pc, ks, A0]
    };
    function Wk(e, t) {
      return lE.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Uk(e, t);
    }
    function Gk(e, t, a) {
      return lE.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ak(e, t, a);
    }
    function Kk(e) {
      return y1() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), qo(e);
    }
    var Xk = Mk({
      findFiberByHostInstance: ic,
      bundleType: 1,
      version: Z0,
      rendererPackageName: "react-dom"
    });
    if (!Xk && Dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var fw = window.location.protocol;
      /^(https?|file):$/.test(fw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (fw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lE, ci.createPortal = Yk, ci.createRoot = Wk, ci.findDOMNode = jk, ci.flushSync = Kk, ci.hydrate = Vk, ci.hydrateRoot = Gk, ci.render = Bk, ci.unmountComponentAtNode = $k, ci.unstable_batchedUpdates = A0, ci.unstable_renderSubtreeIntoContainer = Qk, ci.version = Z0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ci;
}
function Qw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (ft.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qw);
    } catch (c) {
      console.error(c);
    }
  }
}
ft.env.NODE_ENV === "production" ? (Qw(), mE.exports = sO()) : mE.exports = cO();
var Ww = mE.exports;
const fO = /* @__PURE__ */ $w(Ww), dO = /* @__PURE__ */ Hw({
  __proto__: null,
  default: fO
}, [Ww]);
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qn() {
  return Qn = Object.assign ? Object.assign.bind() : function(c) {
    for (var v = 1; v < arguments.length; v++) {
      var m = arguments[v];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (c[C] = m[C]);
    }
    return c;
  }, Qn.apply(this, arguments);
}
var wr;
(function(c) {
  c.Pop = "POP", c.Push = "PUSH", c.Replace = "REPLACE";
})(wr || (wr = {}));
const Sw = "popstate";
function pO(c) {
  c === void 0 && (c = {});
  function v(C, w) {
    let {
      pathname: x,
      search: y,
      hash: A
    } = C.location;
    return kv(
      "",
      {
        pathname: x,
        search: y,
        hash: A
      },
      // state defaults to `null` because `window.history.state` does
      w.state && w.state.usr || null,
      w.state && w.state.key || "default"
    );
  }
  function m(C, w) {
    return typeof w == "string" ? w : hs(w);
  }
  return hO(v, m, null, c);
}
function dt(c, v) {
  if (c === !1 || c === null || typeof c > "u")
    throw new Error(v);
}
function Fr(c, v) {
  if (!c) {
    typeof console < "u" && console.warn(v);
    try {
      throw new Error(v);
    } catch {
    }
  }
}
function vO() {
  return Math.random().toString(36).substr(2, 8);
}
function Ew(c, v) {
  return {
    usr: c.state,
    key: c.key,
    idx: v
  };
}
function kv(c, v, m, C) {
  return m === void 0 && (m = null), Qn({
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: ""
  }, typeof v == "string" ? ys(v) : v, {
    state: m,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: v && v.key || C || vO()
  });
}
function hs(c) {
  let {
    pathname: v = "/",
    search: m = "",
    hash: C = ""
  } = c;
  return m && m !== "?" && (v += m.charAt(0) === "?" ? m : "?" + m), C && C !== "#" && (v += C.charAt(0) === "#" ? C : "#" + C), v;
}
function ys(c) {
  let v = {};
  if (c) {
    let m = c.indexOf("#");
    m >= 0 && (v.hash = c.substr(m), c = c.substr(0, m));
    let C = c.indexOf("?");
    C >= 0 && (v.search = c.substr(C), c = c.substr(0, C)), c && (v.pathname = c);
  }
  return v;
}
function hO(c, v, m, C) {
  C === void 0 && (C = {});
  let {
    window: w = document.defaultView,
    v5Compat: x = !1
  } = C, y = w.history, A = wr.Pop, _ = null, O = B();
  O == null && (O = 0, y.replaceState(Qn({}, y.state, {
    idx: O
  }), ""));
  function B() {
    return (y.state || {
      idx: null
    }).idx;
  }
  function M() {
    A = wr.Pop;
    let pe = B(), Ae = pe == null ? null : pe - O;
    O = pe, _ && _({
      action: A,
      location: ue.location,
      delta: Ae
    });
  }
  function I(pe, Ae) {
    A = wr.Push;
    let he = kv(ue.location, pe, Ae);
    O = B() + 1;
    let ye = Ew(he, O), be = ue.createHref(he);
    try {
      y.pushState(ye, "", be);
    } catch (De) {
      if (De instanceof DOMException && De.name === "DataCloneError")
        throw De;
      w.location.assign(be);
    }
    x && _ && _({
      action: A,
      location: ue.location,
      delta: 1
    });
  }
  function K(pe, Ae) {
    A = wr.Replace;
    let he = kv(ue.location, pe, Ae);
    O = B();
    let ye = Ew(he, O), be = ue.createHref(he);
    y.replaceState(ye, "", be), x && _ && _({
      action: A,
      location: ue.location,
      delta: 0
    });
  }
  function ae(pe) {
    let Ae = w.location.origin !== "null" ? w.location.origin : w.location.href, he = typeof pe == "string" ? pe : hs(pe);
    return he = he.replace(/ $/, "%20"), dt(Ae, "No window.location.(origin|href) available to create URL for href: " + he), new URL(he, Ae);
  }
  let ue = {
    get action() {
      return A;
    },
    get location() {
      return c(w, y);
    },
    listen(pe) {
      if (_)
        throw new Error("A history only accepts one active listener");
      return w.addEventListener(Sw, M), _ = pe, () => {
        w.removeEventListener(Sw, M), _ = null;
      };
    },
    createHref(pe) {
      return v(w, pe);
    },
    createURL: ae,
    encodeLocation(pe) {
      let Ae = ae(pe);
      return {
        pathname: Ae.pathname,
        search: Ae.search,
        hash: Ae.hash
      };
    },
    push: I,
    replace: K,
    go(pe) {
      return y.go(pe);
    }
  };
  return ue;
}
var Rn;
(function(c) {
  c.data = "data", c.deferred = "deferred", c.redirect = "redirect", c.error = "error";
})(Rn || (Rn = {}));
const mO = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function yO(c) {
  return c.index === !0;
}
function _y(c, v, m, C) {
  return m === void 0 && (m = []), C === void 0 && (C = {}), c.map((w, x) => {
    let y = [...m, String(x)], A = typeof w.id == "string" ? w.id : y.join("-");
    if (dt(w.index !== !0 || !w.children, "Cannot specify children on an index route"), dt(!C[A], 'Found a route id collision on id "' + A + `".  Route id's must be globally unique within Data Router usages`), yO(w)) {
      let _ = Qn({}, w, v(w), {
        id: A
      });
      return C[A] = _, _;
    } else {
      let _ = Qn({}, w, v(w), {
        id: A,
        children: void 0
      });
      return C[A] = _, w.children && (_.children = _y(w.children, v, y, C)), _;
    }
  });
}
function Cc(c, v, m) {
  return m === void 0 && (m = "/"), by(c, v, m, !1);
}
function by(c, v, m, C) {
  let w = typeof v == "string" ? ys(v) : v, x = bi(w.pathname || "/", m);
  if (x == null)
    return null;
  let y = Gw(c);
  SO(y);
  let A = null;
  for (let _ = 0; A == null && _ < y.length; ++_) {
    let O = OO(x);
    A = _O(y[_], O, C);
  }
  return A;
}
function gO(c, v) {
  let {
    route: m,
    pathname: C,
    params: w
  } = c;
  return {
    id: m.id,
    pathname: C,
    params: w,
    data: v[m.id],
    handle: m.handle
  };
}
function Gw(c, v, m, C) {
  v === void 0 && (v = []), m === void 0 && (m = []), C === void 0 && (C = "");
  let w = (x, y, A) => {
    let _ = {
      relativePath: A === void 0 ? x.path || "" : A,
      caseSensitive: x.caseSensitive === !0,
      childrenIndex: y,
      route: x
    };
    _.relativePath.startsWith("/") && (dt(_.relativePath.startsWith(C), 'Absolute route path "' + _.relativePath + '" nested under path ' + ('"' + C + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), _.relativePath = _.relativePath.slice(C.length));
    let O = fo([C, _.relativePath]), B = m.concat(_);
    x.children && x.children.length > 0 && (dt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      x.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + O + '".')
    ), Gw(x.children, v, B, O)), !(x.path == null && !x.index) && v.push({
      path: O,
      score: xO(O, x.index),
      routesMeta: B
    });
  };
  return c.forEach((x, y) => {
    var A;
    if (x.path === "" || !((A = x.path) != null && A.includes("?")))
      w(x, y);
    else
      for (let _ of Kw(x.path))
        w(x, y, _);
  }), v;
}
function Kw(c) {
  let v = c.split("/");
  if (v.length === 0) return [];
  let [m, ...C] = v, w = m.endsWith("?"), x = m.replace(/\?$/, "");
  if (C.length === 0)
    return w ? [x, ""] : [x];
  let y = Kw(C.join("/")), A = [];
  return A.push(...y.map((_) => _ === "" ? x : [x, _].join("/"))), w && A.push(...y), A.map((_) => c.startsWith("/") && _ === "" ? "/" : _);
}
function SO(c) {
  c.sort((v, m) => v.score !== m.score ? m.score - v.score : DO(v.routesMeta.map((C) => C.childrenIndex), m.routesMeta.map((C) => C.childrenIndex)));
}
const EO = /^:[\w-]+$/, CO = 3, RO = 2, wO = 1, TO = 10, bO = -2, Cw = (c) => c === "*";
function xO(c, v) {
  let m = c.split("/"), C = m.length;
  return m.some(Cw) && (C += bO), v && (C += RO), m.filter((w) => !Cw(w)).reduce((w, x) => w + (EO.test(x) ? CO : x === "" ? wO : TO), C);
}
function DO(c, v) {
  return c.length === v.length && c.slice(0, -1).every((C, w) => C === v[w]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    c[c.length - 1] - v[v.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function _O(c, v, m) {
  m === void 0 && (m = !1);
  let {
    routesMeta: C
  } = c, w = {}, x = "/", y = [];
  for (let A = 0; A < C.length; ++A) {
    let _ = C[A], O = A === C.length - 1, B = x === "/" ? v : v.slice(x.length) || "/", M = ky({
      path: _.relativePath,
      caseSensitive: _.caseSensitive,
      end: O
    }, B), I = _.route;
    if (!M && O && m && !C[C.length - 1].route.index && (M = ky({
      path: _.relativePath,
      caseSensitive: _.caseSensitive,
      end: !1
    }, B)), !M)
      return null;
    Object.assign(w, M.params), y.push({
      // TODO: Can this as be avoided?
      params: w,
      pathname: fo([x, M.pathname]),
      pathnameBase: MO(fo([x, M.pathnameBase])),
      route: I
    }), M.pathnameBase !== "/" && (x = fo([x, M.pathnameBase]));
  }
  return y;
}
function ky(c, v) {
  typeof c == "string" && (c = {
    path: c,
    caseSensitive: !1,
    end: !0
  });
  let [m, C] = kO(c.path, c.caseSensitive, c.end), w = v.match(m);
  if (!w) return null;
  let x = w[0], y = x.replace(/(.)\/+$/, "$1"), A = w.slice(1);
  return {
    params: C.reduce((O, B, M) => {
      let {
        paramName: I,
        isOptional: K
      } = B;
      if (I === "*") {
        let ue = A[M] || "";
        y = x.slice(0, x.length - ue.length).replace(/(.)\/+$/, "$1");
      }
      const ae = A[M];
      return K && !ae ? O[I] = void 0 : O[I] = (ae || "").replace(/%2F/g, "/"), O;
    }, {}),
    pathname: x,
    pathnameBase: y,
    pattern: c
  };
}
function kO(c, v, m) {
  v === void 0 && (v = !1), m === void 0 && (m = !0), Fr(c === "*" || !c.endsWith("*") || c.endsWith("/*"), 'Route path "' + c + '" will be treated as if it were ' + ('"' + c.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + c.replace(/\*$/, "/*") + '".'));
  let C = [], w = "^" + c.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (y, A, _) => (C.push({
    paramName: A,
    isOptional: _ != null
  }), _ ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return c.endsWith("*") ? (C.push({
    paramName: "*"
  }), w += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : m ? w += "\\/*$" : c !== "" && c !== "/" && (w += "(?:(?=\\/|$))"), [new RegExp(w, v ? void 0 : "i"), C];
}
function OO(c) {
  try {
    return c.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (v) {
    return Fr(!1, 'The URL path "' + c + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + v + ").")), c;
  }
}
function bi(c, v) {
  if (v === "/") return c;
  if (!c.toLowerCase().startsWith(v.toLowerCase()))
    return null;
  let m = v.endsWith("/") ? v.length - 1 : v.length, C = c.charAt(m);
  return C && C !== "/" ? null : c.slice(m) || "/";
}
function LO(c, v) {
  v === void 0 && (v = "/");
  let {
    pathname: m,
    search: C = "",
    hash: w = ""
  } = typeof c == "string" ? ys(c) : c;
  return {
    pathname: m ? m.startsWith("/") ? m : NO(m, v) : v,
    search: UO(C),
    hash: zO(w)
  };
}
function NO(c, v) {
  let m = v.replace(/\/+$/, "").split("/");
  return c.split("/").forEach((w) => {
    w === ".." ? m.length > 1 && m.pop() : w !== "." && m.push(w);
  }), m.length > 1 ? m.join("/") : "/";
}
function sE(c, v, m, C) {
  return "Cannot include a '" + c + "' character in a manually specified " + ("`to." + v + "` field [" + JSON.stringify(C) + "].  Please separate it out to the ") + ("`to." + m + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Xw(c) {
  return c.filter((v, m) => m === 0 || v.route.path && v.route.path.length > 0);
}
function CE(c, v) {
  let m = Xw(c);
  return v ? m.map((C, w) => w === m.length - 1 ? C.pathname : C.pathnameBase) : m.map((C) => C.pathnameBase);
}
function RE(c, v, m, C) {
  C === void 0 && (C = !1);
  let w;
  typeof c == "string" ? w = ys(c) : (w = Qn({}, c), dt(!w.pathname || !w.pathname.includes("?"), sE("?", "pathname", "search", w)), dt(!w.pathname || !w.pathname.includes("#"), sE("#", "pathname", "hash", w)), dt(!w.search || !w.search.includes("#"), sE("#", "search", "hash", w)));
  let x = c === "" || w.pathname === "", y = x ? "/" : w.pathname, A;
  if (y == null)
    A = m;
  else {
    let M = v.length - 1;
    if (!C && y.startsWith("..")) {
      let I = y.split("/");
      for (; I[0] === ".."; )
        I.shift(), M -= 1;
      w.pathname = I.join("/");
    }
    A = M >= 0 ? v[M] : "/";
  }
  let _ = LO(w, A), O = y && y !== "/" && y.endsWith("/"), B = (x || y === ".") && m.endsWith("/");
  return !_.pathname.endsWith("/") && (O || B) && (_.pathname += "/"), _;
}
const fo = (c) => c.join("/").replace(/\/\/+/g, "/"), MO = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"), UO = (c) => !c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c, zO = (c) => !c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c;
class Oy {
  constructor(v, m, C, w) {
    w === void 0 && (w = !1), this.status = v, this.statusText = m || "", this.internal = w, C instanceof Error ? (this.data = C.toString(), this.error = C) : this.data = C;
  }
}
function Ny(c) {
  return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c;
}
const qw = ["post", "put", "patch", "delete"], AO = new Set(qw), FO = ["get", ...qw], PO = new Set(FO), HO = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), jO = /* @__PURE__ */ new Set([307, 308]), cE = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, VO = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, gd = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, wE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, BO = (c) => ({
  hasErrorBoundary: !!c.hasErrorBoundary
}), Jw = "remix-router-transitions";
function IO(c) {
  const v = c.window ? c.window : typeof window < "u" ? window : void 0, m = typeof v < "u" && typeof v.document < "u" && typeof v.document.createElement < "u", C = !m;
  dt(c.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let w;
  if (c.mapRouteProperties)
    w = c.mapRouteProperties;
  else if (c.detectErrorBoundary) {
    let k = c.detectErrorBoundary;
    w = (P) => ({
      hasErrorBoundary: k(P)
    });
  } else
    w = BO;
  let x = {}, y = _y(c.routes, w, void 0, x), A, _ = c.basename || "/", O = c.dataStrategy || WO, B = c.patchRoutesOnNavigation, M = Qn({
    v7_fetcherPersist: !1,
    v7_normalizeFormMethod: !1,
    v7_partialHydration: !1,
    v7_prependBasename: !1,
    v7_relativeSplatPath: !1,
    v7_skipActionErrorRevalidation: !1
  }, c.future), I = null, K = /* @__PURE__ */ new Set(), ae = null, ue = null, pe = null, Ae = c.hydrationData != null, he = Cc(y, c.history.location, _), ye = null;
  if (he == null && !B) {
    let k = fi(404, {
      pathname: c.history.location.pathname
    }), {
      matches: P,
      route: Q
    } = Nw(y);
    he = P, ye = {
      [Q.id]: k
    };
  }
  he && !c.hydrationData && Qi(he, y, c.history.location.pathname).active && (he = null);
  let be;
  if (he)
    if (he.some((k) => k.route.lazy))
      be = !1;
    else if (!he.some((k) => k.route.loader))
      be = !0;
    else if (M.v7_partialHydration) {
      let k = c.hydrationData ? c.hydrationData.loaderData : null, P = c.hydrationData ? c.hydrationData.errors : null;
      if (P) {
        let Q = he.findIndex((ie) => P[ie.route.id] !== void 0);
        be = he.slice(0, Q + 1).every((ie) => !gE(ie.route, k, P));
      } else
        be = he.every((Q) => !gE(Q.route, k, P));
    } else
      be = c.hydrationData != null;
  else if (be = !1, he = [], M.v7_partialHydration) {
    let k = Qi(null, y, c.history.location.pathname);
    k.active && k.matches && (he = k.matches);
  }
  let De, $ = {
    historyAction: c.history.action,
    location: c.history.location,
    matches: he,
    initialized: be,
    navigation: cE,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: c.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: c.hydrationData && c.hydrationData.loaderData || {},
    actionData: c.hydrationData && c.hydrationData.actionData || null,
    errors: c.hydrationData && c.hydrationData.errors || ye,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, Fe = wr.Pop, je = !1, Ze, et = !1, pt = /* @__PURE__ */ new Map(), Mt = null, tt = !1, it = !1, qt = [], Pt = /* @__PURE__ */ new Set(), Se = /* @__PURE__ */ new Map(), ve = 0, Qe = -1, ge = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Set(), gt = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Ut;
  function zt() {
    if (I = c.history.listen((k) => {
      let {
        action: P,
        location: Q,
        delta: ie
      } = k;
      if (Ut) {
        Ut(), Ut = void 0;
        return;
      }
      Fr(St.size === 0 || ie != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let Ce = on({
        currentLocation: $.location,
        nextLocation: Q,
        historyAction: P
      });
      if (Ce && ie != null) {
        let Pe = new Promise((lt) => {
          Ut = lt;
        });
        c.history.go(ie * -1), ar(Ce, {
          state: "blocked",
          location: Q,
          proceed() {
            ar(Ce, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: Q
            }), Pe.then(() => c.history.go(ie));
          },
          reset() {
            let lt = new Map($.blockers);
            lt.set(Ce, gd), en({
              blockers: lt
            });
          }
        });
        return;
      }
      return Pn(P, Q);
    }), m) {
      oL(v, pt);
      let k = () => uL(v, pt);
      v.addEventListener("pagehide", k), Mt = () => v.removeEventListener("pagehide", k);
    }
    return $.initialized || Pn(wr.Pop, $.location, {
      initialHydration: !0
    }), De;
  }
  function Nt() {
    I && I(), Mt && Mt(), K.clear(), Ze && Ze.abort(), $.fetchers.forEach((k, P) => Wr(P)), $.blockers.forEach((k, P) => _n(P));
  }
  function Nn(k) {
    return K.add(k), () => K.delete(k);
  }
  function en(k, P) {
    P === void 0 && (P = {}), $ = Qn({}, $, k);
    let Q = [], ie = [];
    M.v7_fetcherPersist && $.fetchers.forEach((Ce, Pe) => {
      Ce.state === "idle" && (qe.has(Pe) ? ie.push(Pe) : Q.push(Pe));
    }), [...K].forEach((Ce) => Ce($, {
      deletedFetchers: ie,
      viewTransitionOpts: P.viewTransitionOpts,
      flushSync: P.flushSync === !0
    })), M.v7_fetcherPersist && (Q.forEach((Ce) => $.fetchers.delete(Ce)), ie.forEach((Ce) => Wr(Ce)));
  }
  function pr(k, P, Q) {
    var ie, Ce;
    let {
      flushSync: Pe
    } = Q === void 0 ? {} : Q, lt = $.actionData != null && $.navigation.formMethod != null && Tl($.navigation.formMethod) && $.navigation.state === "loading" && ((ie = k.state) == null ? void 0 : ie._isRedirect) !== !0, ke;
    P.actionData ? Object.keys(P.actionData).length > 0 ? ke = P.actionData : ke = null : lt ? ke = $.actionData : ke = null;
    let Ue = P.loaderData ? Ow($.loaderData, P.loaderData, P.matches || [], P.errors) : $.loaderData, Le = $.blockers;
    Le.size > 0 && (Le = new Map(Le), Le.forEach((_t, gn) => Le.set(gn, gd)));
    let Re = je === !0 || $.navigation.formMethod != null && Tl($.navigation.formMethod) && ((Ce = k.state) == null ? void 0 : Ce._isRedirect) !== !0;
    A && (y = A, A = void 0), tt || Fe === wr.Pop || (Fe === wr.Push ? c.history.push(k, k.state) : Fe === wr.Replace && c.history.replace(k, k.state));
    let vt;
    if (Fe === wr.Pop) {
      let _t = pt.get($.location.pathname);
      _t && _t.has(k.pathname) ? vt = {
        currentLocation: $.location,
        nextLocation: k
      } : pt.has(k.pathname) && (vt = {
        currentLocation: k,
        nextLocation: $.location
      });
    } else if (et) {
      let _t = pt.get($.location.pathname);
      _t ? _t.add(k.pathname) : (_t = /* @__PURE__ */ new Set([k.pathname]), pt.set($.location.pathname, _t)), vt = {
        currentLocation: $.location,
        nextLocation: k
      };
    }
    en(Qn({}, P, {
      actionData: ke,
      loaderData: Ue,
      historyAction: Fe,
      location: k,
      initialized: !0,
      navigation: cE,
      revalidation: "idle",
      restoreScrollPosition: Yi(k, P.matches || $.matches),
      preventScrollReset: Re,
      blockers: Le
    }), {
      viewTransitionOpts: vt,
      flushSync: Pe === !0
    }), Fe = wr.Pop, je = !1, et = !1, tt = !1, it = !1, qt = [];
  }
  async function Dn(k, P) {
    if (typeof k == "number") {
      c.history.go(k);
      return;
    }
    let Q = yE($.location, $.matches, _, M.v7_prependBasename, k, M.v7_relativeSplatPath, P == null ? void 0 : P.fromRouteId, P == null ? void 0 : P.relative), {
      path: ie,
      submission: Ce,
      error: Pe
    } = Rw(M.v7_normalizeFormMethod, !1, Q, P), lt = $.location, ke = kv($.location, ie, P && P.state);
    ke = Qn({}, ke, c.history.encodeLocation(ke));
    let Ue = P && P.replace != null ? P.replace : void 0, Le = wr.Push;
    Ue === !0 ? Le = wr.Replace : Ue === !1 || Ce != null && Tl(Ce.formMethod) && Ce.formAction === $.location.pathname + $.location.search && (Le = wr.Replace);
    let Re = P && "preventScrollReset" in P ? P.preventScrollReset === !0 : void 0, vt = (P && P.flushSync) === !0, _t = on({
      currentLocation: lt,
      nextLocation: ke,
      historyAction: Le
    });
    if (_t) {
      ar(_t, {
        state: "blocked",
        location: ke,
        proceed() {
          ar(_t, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ke
          }), Dn(k, P);
        },
        reset() {
          let gn = new Map($.blockers);
          gn.set(_t, gd), en({
            blockers: gn
          });
        }
      });
      return;
    }
    return await Pn(Le, ke, {
      submission: Ce,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: Pe,
      preventScrollReset: Re,
      replace: P && P.replace,
      enableViewTransition: P && P.viewTransition,
      flushSync: vt
    });
  }
  function vr() {
    if (Qr(), en({
      revalidation: "loading"
    }), $.navigation.state !== "submitting") {
      if ($.navigation.state === "idle") {
        Pn($.historyAction, $.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      Pn(Fe || $.historyAction, $.navigation.location, {
        overrideNavigation: $.navigation,
        // Proxy through any rending view transition
        enableViewTransition: et === !0
      });
    }
  }
  async function Pn(k, P, Q) {
    Ze && Ze.abort(), Ze = null, Fe = k, tt = (Q && Q.startUninterruptedRevalidation) === !0, pi($.location, $.matches), je = (Q && Q.preventScrollReset) === !0, et = (Q && Q.enableViewTransition) === !0;
    let ie = A || y, Ce = Q && Q.overrideNavigation, Pe = Cc(ie, P, _), lt = (Q && Q.flushSync) === !0, ke = Qi(Pe, ie, P.pathname);
    if (ke.active && ke.matches && (Pe = ke.matches), !Pe) {
      let {
        error: wt,
        notFoundMatches: Ht,
        route: pn
      } = jr(P.pathname);
      pr(P, {
        matches: Ht,
        loaderData: {},
        errors: {
          [pn.id]: wt
        }
      }, {
        flushSync: lt
      });
      return;
    }
    if ($.initialized && !it && ZO($.location, P) && !(Q && Q.submission && Tl(Q.submission.formMethod))) {
      pr(P, {
        matches: Pe
      }, {
        flushSync: lt
      });
      return;
    }
    Ze = new AbortController();
    let Ue = yd(c.history, P, Ze.signal, Q && Q.submission), Le;
    if (Q && Q.pendingError)
      Le = [Rc(Pe).route.id, {
        type: Rn.error,
        error: Q.pendingError
      }];
    else if (Q && Q.submission && Tl(Q.submission.formMethod)) {
      let wt = await Pr(Ue, P, Q.submission, Pe, ke.active, {
        replace: Q.replace,
        flushSync: lt
      });
      if (wt.shortCircuited)
        return;
      if (wt.pendingActionResult) {
        let [Ht, pn] = wt.pendingActionResult;
        if (Ti(pn) && Ny(pn.error) && pn.error.status === 404) {
          Ze = null, pr(P, {
            matches: wt.matches,
            loaderData: {},
            errors: {
              [Ht]: pn.error
            }
          });
          return;
        }
      }
      Pe = wt.matches || Pe, Le = wt.pendingActionResult, Ce = fE(P, Q.submission), lt = !1, ke.active = !1, Ue = yd(c.history, Ue.url, Ue.signal);
    }
    let {
      shortCircuited: Re,
      matches: vt,
      loaderData: _t,
      errors: gn
    } = await Jn(Ue, P, Pe, ke.active, Ce, Q && Q.submission, Q && Q.fetcherSubmission, Q && Q.replace, Q && Q.initialHydration === !0, lt, Le);
    Re || (Ze = null, pr(P, Qn({
      matches: vt || Pe
    }, Lw(Le), {
      loaderData: _t,
      errors: gn
    })));
  }
  async function Pr(k, P, Q, ie, Ce, Pe) {
    Pe === void 0 && (Pe = {}), Qr();
    let lt = iL(P, Q);
    if (en({
      navigation: lt
    }, {
      flushSync: Pe.flushSync === !0
    }), Ce) {
      let Le = await Wi(ie, P.pathname, k.signal);
      if (Le.type === "aborted")
        return {
          shortCircuited: !0
        };
      if (Le.type === "error") {
        let Re = Rc(Le.partialMatches).route.id;
        return {
          matches: Le.partialMatches,
          pendingActionResult: [Re, {
            type: Rn.error,
            error: Le.error
          }]
        };
      } else if (Le.matches)
        ie = Le.matches;
      else {
        let {
          notFoundMatches: Re,
          error: vt,
          route: _t
        } = jr(P.pathname);
        return {
          matches: Re,
          pendingActionResult: [_t.id, {
            type: Rn.error,
            error: vt
          }]
        };
      }
    }
    let ke, Ue = _v(ie, P);
    if (!Ue.route.action && !Ue.route.lazy)
      ke = {
        type: Rn.error,
        error: fi(405, {
          method: k.method,
          pathname: P.pathname,
          routeId: Ue.route.id
        })
      };
    else if (ke = (await Tr("action", $, k, [Ue], ie, null))[Ue.route.id], k.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (Tc(ke)) {
      let Le;
      return Pe && Pe.replace != null ? Le = Pe.replace : Le = Dw(ke.response.headers.get("Location"), new URL(k.url), _) === $.location.pathname + $.location.search, await Hn(k, ke, !0, {
        submission: Q,
        replace: Le
      }), {
        shortCircuited: !0
      };
    }
    if (vs(ke))
      throw fi(400, {
        type: "defer-action"
      });
    if (Ti(ke)) {
      let Le = Rc(ie, Ue.route.id);
      return (Pe && Pe.replace) !== !0 && (Fe = wr.Push), {
        matches: ie,
        pendingActionResult: [Le.route.id, ke]
      };
    }
    return {
      matches: ie,
      pendingActionResult: [Ue.route.id, ke]
    };
  }
  async function Jn(k, P, Q, ie, Ce, Pe, lt, ke, Ue, Le, Re) {
    let vt = Ce || fE(P, Pe), _t = Pe || lt || Uw(vt), gn = !tt && (!M.v7_partialHydration || !Ue);
    if (ie) {
      if (gn) {
        let an = ua(Re);
        en(Qn({
          navigation: vt
        }, an !== void 0 ? {
          actionData: an
        } : {}), {
          flushSync: Le
        });
      }
      let kt = await Wi(Q, P.pathname, k.signal);
      if (kt.type === "aborted")
        return {
          shortCircuited: !0
        };
      if (kt.type === "error") {
        let an = Rc(kt.partialMatches).route.id;
        return {
          matches: kt.partialMatches,
          loaderData: {},
          errors: {
            [an]: kt.error
          }
        };
      } else if (kt.matches)
        Q = kt.matches;
      else {
        let {
          error: an,
          notFoundMatches: Kr,
          route: Zn
        } = jr(P.pathname);
        return {
          matches: Kr,
          loaderData: {},
          errors: {
            [Zn.id]: an
          }
        };
      }
    }
    let wt = A || y, [Ht, pn] = Tw(c.history, $, Q, _t, P, M.v7_partialHydration && Ue === !0, M.v7_skipActionErrorRevalidation, it, qt, Pt, qe, te, F, wt, _, Re);
    if (dn((kt) => !(Q && Q.some((an) => an.route.id === kt)) || Ht && Ht.some((an) => an.route.id === kt)), Qe = ++ve, Ht.length === 0 && pn.length === 0) {
      let kt = Qt();
      return pr(P, Qn({
        matches: Q,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: Re && Ti(Re[1]) ? {
          [Re[0]]: Re[1].error
        } : null
      }, Lw(Re), kt ? {
        fetchers: new Map($.fetchers)
      } : {}), {
        flushSync: Le
      }), {
        shortCircuited: !0
      };
    }
    if (gn) {
      let kt = {};
      if (!ie) {
        kt.navigation = vt;
        let an = ua(Re);
        an !== void 0 && (kt.actionData = an);
      }
      pn.length > 0 && (kt.fetchers = di(pn)), en(kt, {
        flushSync: Le
      });
    }
    pn.forEach((kt) => {
      Ve(kt.key), kt.controller && Se.set(kt.key, kt.controller);
    });
    let Va = () => pn.forEach((kt) => Ve(kt.key));
    Ze && Ze.signal.addEventListener("abort", Va);
    let {
      loaderResults: _i,
      fetcherResults: _a
    } = await br($, Q, Ht, pn, k);
    if (k.signal.aborted)
      return {
        shortCircuited: !0
      };
    Ze && Ze.signal.removeEventListener("abort", Va), pn.forEach((kt) => Se.delete(kt.key));
    let sa = Ry(_i);
    if (sa)
      return await Hn(k, sa.result, !0, {
        replace: ke
      }), {
        shortCircuited: !0
      };
    if (sa = Ry(_a), sa)
      return F.add(sa.key), await Hn(k, sa.result, !0, {
        replace: ke
      }), {
        shortCircuited: !0
      };
    let {
      loaderData: sn,
      errors: Gi
    } = kw($, Q, _i, Re, pn, _a, gt);
    gt.forEach((kt, an) => {
      kt.subscribe((Kr) => {
        (Kr || kt.done) && gt.delete(an);
      });
    }), M.v7_partialHydration && Ue && $.errors && (Gi = Qn({}, $.errors, Gi));
    let ir = Qt(), Tt = Jt(Qe), Gr = ir || Tt || pn.length > 0;
    return Qn({
      matches: Q,
      loaderData: sn,
      errors: Gi
    }, Gr ? {
      fetchers: new Map($.fetchers)
    } : {});
  }
  function ua(k) {
    if (k && !Ti(k[1]))
      return {
        [k[0]]: k[1].data
      };
    if ($.actionData)
      return Object.keys($.actionData).length === 0 ? null : $.actionData;
  }
  function di(k) {
    return k.forEach((P) => {
      let Q = $.fetchers.get(P.key), ie = bv(void 0, Q ? Q.data : void 0);
      $.fetchers.set(P.key, ie);
    }), new Map($.fetchers);
  }
  function hr(k, P, Q, ie) {
    if (C)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    Ve(k);
    let Ce = (ie && ie.flushSync) === !0, Pe = A || y, lt = yE($.location, $.matches, _, M.v7_prependBasename, Q, M.v7_relativeSplatPath, P, ie == null ? void 0 : ie.relative), ke = Cc(Pe, lt, _), Ue = Qi(ke, Pe, lt);
    if (Ue.active && Ue.matches && (ke = Ue.matches), !ke) {
      Mn(k, P, fi(404, {
        pathname: lt
      }), {
        flushSync: Ce
      });
      return;
    }
    let {
      path: Le,
      submission: Re,
      error: vt
    } = Rw(M.v7_normalizeFormMethod, !0, lt, ie);
    if (vt) {
      Mn(k, P, vt, {
        flushSync: Ce
      });
      return;
    }
    let _t = _v(ke, Le), gn = (ie && ie.preventScrollReset) === !0;
    if (Re && Tl(Re.formMethod)) {
      Hr(k, P, Le, _t, ke, Ue.active, Ce, gn, Re);
      return;
    }
    te.set(k, {
      routeId: P,
      path: Le
    }), ja(k, P, Le, _t, ke, Ue.active, Ce, gn, Re);
  }
  async function Hr(k, P, Q, ie, Ce, Pe, lt, ke, Ue) {
    Qr(), te.delete(k);
    function Le(Sn) {
      if (!Sn.route.action && !Sn.route.lazy) {
        let jn = fi(405, {
          method: Ue.formMethod,
          pathname: Q,
          routeId: P
        });
        return Mn(k, P, jn, {
          flushSync: lt
        }), !0;
      }
      return !1;
    }
    if (!Pe && Le(ie))
      return;
    let Re = $.fetchers.get(k);
    yn(k, lL(Ue, Re), {
      flushSync: lt
    });
    let vt = new AbortController(), _t = yd(c.history, Q, vt.signal, Ue);
    if (Pe) {
      let Sn = await Wi(Ce, Q, _t.signal);
      if (Sn.type === "aborted")
        return;
      if (Sn.type === "error") {
        Mn(k, P, Sn.error, {
          flushSync: lt
        });
        return;
      } else if (Sn.matches) {
        if (Ce = Sn.matches, ie = _v(Ce, Q), Le(ie))
          return;
      } else {
        Mn(k, P, fi(404, {
          pathname: Q
        }), {
          flushSync: lt
        });
        return;
      }
    }
    Se.set(k, vt);
    let gn = ve, Ht = (await Tr("action", $, _t, [ie], Ce, k))[ie.route.id];
    if (_t.signal.aborted) {
      Se.get(k) === vt && Se.delete(k);
      return;
    }
    if (M.v7_fetcherPersist && qe.has(k)) {
      if (Tc(Ht) || Ti(Ht)) {
        yn(k, ps(void 0));
        return;
      }
    } else {
      if (Tc(Ht))
        if (Se.delete(k), Qe > gn) {
          yn(k, ps(void 0));
          return;
        } else
          return F.add(k), yn(k, bv(Ue)), Hn(_t, Ht, !1, {
            fetcherSubmission: Ue,
            preventScrollReset: ke
          });
      if (Ti(Ht)) {
        Mn(k, P, Ht.error);
        return;
      }
    }
    if (vs(Ht))
      throw fi(400, {
        type: "defer-action"
      });
    let pn = $.navigation.location || $.location, Va = yd(c.history, pn, vt.signal), _i = A || y, _a = $.navigation.state !== "idle" ? Cc(_i, $.navigation.location, _) : $.matches;
    dt(_a, "Didn't find any matches after fetcher action");
    let sa = ++ve;
    ge.set(k, sa);
    let sn = bv(Ue, Ht.data);
    $.fetchers.set(k, sn);
    let [Gi, ir] = Tw(c.history, $, _a, Ue, pn, !1, M.v7_skipActionErrorRevalidation, it, qt, Pt, qe, te, F, _i, _, [ie.route.id, Ht]);
    ir.filter((Sn) => Sn.key !== k).forEach((Sn) => {
      let jn = Sn.key, _l = $.fetchers.get(jn), vo = bv(void 0, _l ? _l.data : void 0);
      $.fetchers.set(jn, vo), Ve(jn), Sn.controller && Se.set(jn, Sn.controller);
    }), en({
      fetchers: new Map($.fetchers)
    });
    let Tt = () => ir.forEach((Sn) => Ve(Sn.key));
    vt.signal.addEventListener("abort", Tt);
    let {
      loaderResults: Gr,
      fetcherResults: kt
    } = await br($, _a, Gi, ir, Va);
    if (vt.signal.aborted)
      return;
    vt.signal.removeEventListener("abort", Tt), ge.delete(k), Se.delete(k), ir.forEach((Sn) => Se.delete(Sn.key));
    let an = Ry(Gr);
    if (an)
      return Hn(Va, an.result, !1, {
        preventScrollReset: ke
      });
    if (an = Ry(kt), an)
      return F.add(an.key), Hn(Va, an.result, !1, {
        preventScrollReset: ke
      });
    let {
      loaderData: Kr,
      errors: Zn
    } = kw($, _a, Gr, void 0, ir, kt, gt);
    if ($.fetchers.has(k)) {
      let Sn = ps(Ht.data);
      $.fetchers.set(k, Sn);
    }
    Jt(sa), $.navigation.state === "loading" && sa > Qe ? (dt(Fe, "Expected pending action"), Ze && Ze.abort(), pr($.navigation.location, {
      matches: _a,
      loaderData: Kr,
      errors: Zn,
      fetchers: new Map($.fetchers)
    })) : (en({
      errors: Zn,
      loaderData: Ow($.loaderData, Kr, _a, Zn),
      fetchers: new Map($.fetchers)
    }), it = !1);
  }
  async function ja(k, P, Q, ie, Ce, Pe, lt, ke, Ue) {
    let Le = $.fetchers.get(k);
    yn(k, bv(Ue, Le ? Le.data : void 0), {
      flushSync: lt
    });
    let Re = new AbortController(), vt = yd(c.history, Q, Re.signal);
    if (Pe) {
      let Ht = await Wi(Ce, Q, vt.signal);
      if (Ht.type === "aborted")
        return;
      if (Ht.type === "error") {
        Mn(k, P, Ht.error, {
          flushSync: lt
        });
        return;
      } else if (Ht.matches)
        Ce = Ht.matches, ie = _v(Ce, Q);
      else {
        Mn(k, P, fi(404, {
          pathname: Q
        }), {
          flushSync: lt
        });
        return;
      }
    }
    Se.set(k, Re);
    let _t = ve, wt = (await Tr("loader", $, vt, [ie], Ce, k))[ie.route.id];
    if (vs(wt) && (wt = await TE(wt, vt.signal, !0) || wt), Se.get(k) === Re && Se.delete(k), !vt.signal.aborted) {
      if (qe.has(k)) {
        yn(k, ps(void 0));
        return;
      }
      if (Tc(wt))
        if (Qe > _t) {
          yn(k, ps(void 0));
          return;
        } else {
          F.add(k), await Hn(vt, wt, !1, {
            preventScrollReset: ke
          });
          return;
        }
      if (Ti(wt)) {
        Mn(k, P, wt.error);
        return;
      }
      dt(!vs(wt), "Unhandled fetcher deferred data"), yn(k, ps(wt.data));
    }
  }
  async function Hn(k, P, Q, ie) {
    let {
      submission: Ce,
      fetcherSubmission: Pe,
      preventScrollReset: lt,
      replace: ke
    } = ie === void 0 ? {} : ie;
    P.response.headers.has("X-Remix-Revalidate") && (it = !0);
    let Ue = P.response.headers.get("Location");
    dt(Ue, "Expected a Location header on the redirect Response"), Ue = Dw(Ue, new URL(k.url), _);
    let Le = kv($.location, Ue, {
      _isRedirect: !0
    });
    if (m) {
      let Ht = !1;
      if (P.response.headers.has("X-Remix-Reload-Document"))
        Ht = !0;
      else if (wE.test(Ue)) {
        const pn = c.history.createURL(Ue);
        Ht = // Hard reload if it's an absolute URL to a new origin
        pn.origin !== v.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        bi(pn.pathname, _) == null;
      }
      if (Ht) {
        ke ? v.location.replace(Ue) : v.location.assign(Ue);
        return;
      }
    }
    Ze = null;
    let Re = ke === !0 || P.response.headers.has("X-Remix-Replace") ? wr.Replace : wr.Push, {
      formMethod: vt,
      formAction: _t,
      formEncType: gn
    } = $.navigation;
    !Ce && !Pe && vt && _t && gn && (Ce = Uw($.navigation));
    let wt = Ce || Pe;
    if (jO.has(P.response.status) && wt && Tl(wt.formMethod))
      await Pn(Re, Le, {
        submission: Qn({}, wt, {
          formAction: Ue
        }),
        // Preserve these flags across redirects
        preventScrollReset: lt || je,
        enableViewTransition: Q ? et : void 0
      });
    else {
      let Ht = fE(Le, Ce);
      await Pn(Re, Le, {
        overrideNavigation: Ht,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: Pe,
        // Preserve these flags across redirects
        preventScrollReset: lt || je,
        enableViewTransition: Q ? et : void 0
      });
    }
  }
  async function Tr(k, P, Q, ie, Ce, Pe) {
    let lt, ke = {};
    try {
      lt = await GO(O, k, P, Q, ie, Ce, Pe, x, w);
    } catch (Ue) {
      return ie.forEach((Le) => {
        ke[Le.route.id] = {
          type: Rn.error,
          error: Ue
        };
      }), ke;
    }
    for (let [Ue, Le] of Object.entries(lt))
      if (eL(Le)) {
        let Re = Le.result;
        ke[Ue] = {
          type: Rn.redirect,
          response: qO(Re, Q, Ue, Ce, _, M.v7_relativeSplatPath)
        };
      } else
        ke[Ue] = await XO(Le);
    return ke;
  }
  async function br(k, P, Q, ie, Ce) {
    let Pe = k.matches, lt = Tr("loader", k, Ce, Q, P, null), ke = Promise.all(ie.map(async (Re) => {
      if (Re.matches && Re.match && Re.controller) {
        let _t = (await Tr("loader", k, yd(c.history, Re.path, Re.controller.signal), [Re.match], Re.matches, Re.key))[Re.match.route.id];
        return {
          [Re.key]: _t
        };
      } else
        return Promise.resolve({
          [Re.key]: {
            type: Rn.error,
            error: fi(404, {
              pathname: Re.path
            })
          }
        });
    })), Ue = await lt, Le = (await ke).reduce((Re, vt) => Object.assign(Re, vt), {});
    return await Promise.all([rL(P, Ue, Ce.signal, Pe, k.loaderData), aL(P, Le, ie)]), {
      loaderResults: Ue,
      fetcherResults: Le
    };
  }
  function Qr() {
    it = !0, qt.push(...dn()), te.forEach((k, P) => {
      Se.has(P) && Pt.add(P), Ve(P);
    });
  }
  function yn(k, P, Q) {
    Q === void 0 && (Q = {}), $.fetchers.set(k, P), en({
      fetchers: new Map($.fetchers)
    }, {
      flushSync: (Q && Q.flushSync) === !0
    });
  }
  function Mn(k, P, Q, ie) {
    ie === void 0 && (ie = {});
    let Ce = Rc($.matches, P);
    Wr(k), en({
      errors: {
        [Ce.route.id]: Q
      },
      fetchers: new Map($.fetchers)
    }, {
      flushSync: (ie && ie.flushSync) === !0
    });
  }
  function xi(k) {
    return M.v7_fetcherPersist && (nt.set(k, (nt.get(k) || 0) + 1), qe.has(k) && qe.delete(k)), $.fetchers.get(k) || VO;
  }
  function Wr(k) {
    let P = $.fetchers.get(k);
    Se.has(k) && !(P && P.state === "loading" && ge.has(k)) && Ve(k), te.delete(k), ge.delete(k), F.delete(k), qe.delete(k), Pt.delete(k), $.fetchers.delete(k);
  }
  function Ee(k) {
    if (M.v7_fetcherPersist) {
      let P = (nt.get(k) || 0) - 1;
      P <= 0 ? (nt.delete(k), qe.add(k)) : nt.set(k, P);
    } else
      Wr(k);
    en({
      fetchers: new Map($.fetchers)
    });
  }
  function Ve(k) {
    let P = Se.get(k);
    P && (P.abort(), Se.delete(k));
  }
  function Dt(k) {
    for (let P of k) {
      let Q = xi(P), ie = ps(Q.data);
      $.fetchers.set(P, ie);
    }
  }
  function Qt() {
    let k = [], P = !1;
    for (let Q of F) {
      let ie = $.fetchers.get(Q);
      dt(ie, "Expected fetcher: " + Q), ie.state === "loading" && (F.delete(Q), k.push(Q), P = !0);
    }
    return Dt(k), P;
  }
  function Jt(k) {
    let P = [];
    for (let [Q, ie] of ge)
      if (ie < k) {
        let Ce = $.fetchers.get(Q);
        dt(Ce, "Expected fetcher: " + Q), Ce.state === "loading" && (Ve(Q), ge.delete(Q), P.push(Q));
      }
    return Dt(P), P.length > 0;
  }
  function Wn(k, P) {
    let Q = $.blockers.get(k) || gd;
    return St.get(k) !== P && St.set(k, P), Q;
  }
  function _n(k) {
    $.blockers.delete(k), St.delete(k);
  }
  function ar(k, P) {
    let Q = $.blockers.get(k) || gd;
    dt(Q.state === "unblocked" && P.state === "blocked" || Q.state === "blocked" && P.state === "blocked" || Q.state === "blocked" && P.state === "proceeding" || Q.state === "blocked" && P.state === "unblocked" || Q.state === "proceeding" && P.state === "unblocked", "Invalid blocker state transition: " + Q.state + " -> " + P.state);
    let ie = new Map($.blockers);
    ie.set(k, P), en({
      blockers: ie
    });
  }
  function on(k) {
    let {
      currentLocation: P,
      nextLocation: Q,
      historyAction: ie
    } = k;
    if (St.size === 0)
      return;
    St.size > 1 && Fr(!1, "A router only supports one blocker at a time");
    let Ce = Array.from(St.entries()), [Pe, lt] = Ce[Ce.length - 1], ke = $.blockers.get(Pe);
    if (!(ke && ke.state === "proceeding") && lt({
      currentLocation: P,
      nextLocation: Q,
      historyAction: ie
    }))
      return Pe;
  }
  function jr(k) {
    let P = fi(404, {
      pathname: k
    }), Q = A || y, {
      matches: ie,
      route: Ce
    } = Nw(Q);
    return dn(), {
      notFoundMatches: ie,
      route: Ce,
      error: P
    };
  }
  function dn(k) {
    let P = [];
    return gt.forEach((Q, ie) => {
      (!k || k(ie)) && (Q.cancel(), P.push(ie), gt.delete(ie));
    }), P;
  }
  function un(k, P, Q) {
    if (ae = k, pe = P, ue = Q || null, !Ae && $.navigation === cE) {
      Ae = !0;
      let ie = Yi($.location, $.matches);
      ie != null && en({
        restoreScrollPosition: ie
      });
    }
    return () => {
      ae = null, pe = null, ue = null;
    };
  }
  function Di(k, P) {
    return ue && ue(k, P.map((ie) => gO(ie, $.loaderData))) || k.key;
  }
  function pi(k, P) {
    if (ae && pe) {
      let Q = Di(k, P);
      ae[Q] = pe();
    }
  }
  function Yi(k, P) {
    if (ae) {
      let Q = Di(k, P), ie = ae[Q];
      if (typeof ie == "number")
        return ie;
    }
    return null;
  }
  function Qi(k, P, Q) {
    if (B)
      if (k) {
        if (Object.keys(k[0].params).length > 0)
          return {
            active: !0,
            matches: by(P, Q, _, !0)
          };
      } else
        return {
          active: !0,
          matches: by(P, Q, _, !0) || []
        };
    return {
      active: !1,
      matches: null
    };
  }
  async function Wi(k, P, Q) {
    if (!B)
      return {
        type: "success",
        matches: k
      };
    let ie = k;
    for (; ; ) {
      let Ce = A == null, Pe = A || y, lt = x;
      try {
        await B({
          path: P,
          matches: ie,
          patch: (Le, Re) => {
            Q.aborted || xw(Le, Re, Pe, lt, w);
          }
        });
      } catch (Le) {
        return {
          type: "error",
          error: Le,
          partialMatches: ie
        };
      } finally {
        Ce && !Q.aborted && (y = [...y]);
      }
      if (Q.aborted)
        return {
          type: "aborted"
        };
      let ke = Cc(Pe, P, _);
      if (ke)
        return {
          type: "success",
          matches: ke
        };
      let Ue = by(Pe, P, _, !0);
      if (!Ue || ie.length === Ue.length && ie.every((Le, Re) => Le.route.id === Ue[Re].route.id))
        return {
          type: "success",
          matches: null
        };
      ie = Ue;
    }
  }
  function Dl(k) {
    x = {}, A = _y(k, w, void 0, x);
  }
  function po(k, P) {
    let Q = A == null;
    xw(k, P, A || y, x, w), Q && (y = [...y], en({}));
  }
  return De = {
    get basename() {
      return _;
    },
    get future() {
      return M;
    },
    get state() {
      return $;
    },
    get routes() {
      return y;
    },
    get window() {
      return v;
    },
    initialize: zt,
    subscribe: Nn,
    enableScrollRestoration: un,
    navigate: Dn,
    fetch: hr,
    revalidate: vr,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (k) => c.history.createHref(k),
    encodeLocation: (k) => c.history.encodeLocation(k),
    getFetcher: xi,
    deleteFetcher: Ee,
    dispose: Nt,
    getBlocker: Wn,
    deleteBlocker: _n,
    patchRoutes: po,
    _internalFetchControllers: Se,
    _internalActiveDeferreds: gt,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: Dl
  }, De;
}
function $O(c) {
  return c != null && ("formData" in c && c.formData != null || "body" in c && c.body !== void 0);
}
function yE(c, v, m, C, w, x, y, A) {
  let _, O;
  if (y) {
    _ = [];
    for (let M of v)
      if (_.push(M), M.route.id === y) {
        O = M;
        break;
      }
  } else
    _ = v, O = v[v.length - 1];
  let B = RE(w || ".", CE(_, x), bi(c.pathname, m) || c.pathname, A === "path");
  if (w == null && (B.search = c.search, B.hash = c.hash), (w == null || w === "" || w === ".") && O) {
    let M = bE(B.search);
    if (O.route.index && !M)
      B.search = B.search ? B.search.replace(/^\?/, "?index&") : "?index";
    else if (!O.route.index && M) {
      let I = new URLSearchParams(B.search), K = I.getAll("index");
      I.delete("index"), K.filter((ue) => ue).forEach((ue) => I.append("index", ue));
      let ae = I.toString();
      B.search = ae ? "?" + ae : "";
    }
  }
  return C && m !== "/" && (B.pathname = B.pathname === "/" ? m : fo([m, B.pathname])), hs(B);
}
function Rw(c, v, m, C) {
  if (!C || !$O(C))
    return {
      path: m
    };
  if (C.formMethod && !nL(C.formMethod))
    return {
      path: m,
      error: fi(405, {
        method: C.formMethod
      })
    };
  let w = () => ({
    path: m,
    error: fi(400, {
      type: "invalid-body"
    })
  }), x = C.formMethod || "get", y = c ? x.toUpperCase() : x.toLowerCase(), A = tT(m);
  if (C.body !== void 0) {
    if (C.formEncType === "text/plain") {
      if (!Tl(y))
        return w();
      let I = typeof C.body == "string" ? C.body : C.body instanceof FormData || C.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(C.body.entries()).reduce((K, ae) => {
          let [ue, pe] = ae;
          return "" + K + ue + "=" + pe + `
`;
        }, "")
      ) : String(C.body);
      return {
        path: m,
        submission: {
          formMethod: y,
          formAction: A,
          formEncType: C.formEncType,
          formData: void 0,
          json: void 0,
          text: I
        }
      };
    } else if (C.formEncType === "application/json") {
      if (!Tl(y))
        return w();
      try {
        let I = typeof C.body == "string" ? JSON.parse(C.body) : C.body;
        return {
          path: m,
          submission: {
            formMethod: y,
            formAction: A,
            formEncType: C.formEncType,
            formData: void 0,
            json: I,
            text: void 0
          }
        };
      } catch {
        return w();
      }
    }
  }
  dt(typeof FormData == "function", "FormData is not available in this environment");
  let _, O;
  if (C.formData)
    _ = SE(C.formData), O = C.formData;
  else if (C.body instanceof FormData)
    _ = SE(C.body), O = C.body;
  else if (C.body instanceof URLSearchParams)
    _ = C.body, O = _w(_);
  else if (C.body == null)
    _ = new URLSearchParams(), O = new FormData();
  else
    try {
      _ = new URLSearchParams(C.body), O = _w(_);
    } catch {
      return w();
    }
  let B = {
    formMethod: y,
    formAction: A,
    formEncType: C && C.formEncType || "application/x-www-form-urlencoded",
    formData: O,
    json: void 0,
    text: void 0
  };
  if (Tl(B.formMethod))
    return {
      path: m,
      submission: B
    };
  let M = ys(m);
  return v && M.search && bE(M.search) && _.append("index", ""), M.search = "?" + _, {
    path: hs(M),
    submission: B
  };
}
function ww(c, v, m) {
  m === void 0 && (m = !1);
  let C = c.findIndex((w) => w.route.id === v);
  return C >= 0 ? c.slice(0, m ? C + 1 : C) : c;
}
function Tw(c, v, m, C, w, x, y, A, _, O, B, M, I, K, ae, ue) {
  let pe = ue ? Ti(ue[1]) ? ue[1].error : ue[1].data : void 0, Ae = c.createURL(v.location), he = c.createURL(w), ye = m;
  x && v.errors ? ye = ww(m, Object.keys(v.errors)[0], !0) : ue && Ti(ue[1]) && (ye = ww(m, ue[0]));
  let be = ue ? ue[1].statusCode : void 0, De = y && be && be >= 400, $ = ye.filter((je, Ze) => {
    let {
      route: et
    } = je;
    if (et.lazy)
      return !0;
    if (et.loader == null)
      return !1;
    if (x)
      return gE(et, v.loaderData, v.errors);
    if (YO(v.loaderData, v.matches[Ze], je) || _.some((tt) => tt === je.route.id))
      return !0;
    let pt = v.matches[Ze], Mt = je;
    return bw(je, Qn({
      currentUrl: Ae,
      currentParams: pt.params,
      nextUrl: he,
      nextParams: Mt.params
    }, C, {
      actionResult: pe,
      actionStatus: be,
      defaultShouldRevalidate: De ? !1 : (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        A || Ae.pathname + Ae.search === he.pathname + he.search || // Search params affect all loaders
        Ae.search !== he.search || Zw(pt, Mt)
      )
    }));
  }), Fe = [];
  return M.forEach((je, Ze) => {
    if (x || !m.some((it) => it.route.id === je.routeId) || B.has(Ze))
      return;
    let et = Cc(K, je.path, ae);
    if (!et) {
      Fe.push({
        key: Ze,
        routeId: je.routeId,
        path: je.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let pt = v.fetchers.get(Ze), Mt = _v(et, je.path), tt = !1;
    I.has(Ze) ? tt = !1 : O.has(Ze) ? (O.delete(Ze), tt = !0) : pt && pt.state !== "idle" && pt.data === void 0 ? tt = A : tt = bw(Mt, Qn({
      currentUrl: Ae,
      currentParams: v.matches[v.matches.length - 1].params,
      nextUrl: he,
      nextParams: m[m.length - 1].params
    }, C, {
      actionResult: pe,
      actionStatus: be,
      defaultShouldRevalidate: De ? !1 : A
    })), tt && Fe.push({
      key: Ze,
      routeId: je.routeId,
      path: je.path,
      matches: et,
      match: Mt,
      controller: new AbortController()
    });
  }), [$, Fe];
}
function gE(c, v, m) {
  if (c.lazy)
    return !0;
  if (!c.loader)
    return !1;
  let C = v != null && v[c.id] !== void 0, w = m != null && m[c.id] !== void 0;
  return !C && w ? !1 : typeof c.loader == "function" && c.loader.hydrate === !0 ? !0 : !C && !w;
}
function YO(c, v, m) {
  let C = (
    // [a] -> [a, b]
    !v || // [a, b] -> [a, c]
    m.route.id !== v.route.id
  ), w = c[m.route.id] === void 0;
  return C || w;
}
function Zw(c, v) {
  let m = c.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    c.pathname !== v.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    m != null && m.endsWith("*") && c.params["*"] !== v.params["*"]
  );
}
function bw(c, v) {
  if (c.route.shouldRevalidate) {
    let m = c.route.shouldRevalidate(v);
    if (typeof m == "boolean")
      return m;
  }
  return v.defaultShouldRevalidate;
}
function xw(c, v, m, C, w) {
  var x;
  let y;
  if (c) {
    let O = C[c];
    dt(O, "No route found to patch children into: routeId = " + c), O.children || (O.children = []), y = O.children;
  } else
    y = m;
  let A = v.filter((O) => !y.some((B) => eT(O, B))), _ = _y(A, w, [c || "_", "patch", String(((x = y) == null ? void 0 : x.length) || "0")], C);
  y.push(..._);
}
function eT(c, v) {
  return "id" in c && "id" in v && c.id === v.id ? !0 : c.index === v.index && c.path === v.path && c.caseSensitive === v.caseSensitive ? (!c.children || c.children.length === 0) && (!v.children || v.children.length === 0) ? !0 : c.children.every((m, C) => {
    var w;
    return (w = v.children) == null ? void 0 : w.some((x) => eT(m, x));
  }) : !1;
}
async function QO(c, v, m) {
  if (!c.lazy)
    return;
  let C = await c.lazy();
  if (!c.lazy)
    return;
  let w = m[c.id];
  dt(w, "No route found in manifest");
  let x = {};
  for (let y in C) {
    let _ = w[y] !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    y !== "hasErrorBoundary";
    Fr(!_, 'Route "' + w.id + '" has a static property "' + y + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + y + '" will be ignored.')), !_ && !mO.has(y) && (x[y] = C[y]);
  }
  Object.assign(w, x), Object.assign(w, Qn({}, v(w), {
    lazy: void 0
  }));
}
async function WO(c) {
  let {
    matches: v
  } = c, m = v.filter((w) => w.shouldLoad);
  return (await Promise.all(m.map((w) => w.resolve()))).reduce((w, x, y) => Object.assign(w, {
    [m[y].route.id]: x
  }), {});
}
async function GO(c, v, m, C, w, x, y, A, _, O) {
  let B = x.map((K) => K.route.lazy ? QO(K.route, _, A) : void 0), M = x.map((K, ae) => {
    let ue = B[ae], pe = w.some((he) => he.route.id === K.route.id);
    return Qn({}, K, {
      shouldLoad: pe,
      resolve: async (he) => (he && C.method === "GET" && (K.route.lazy || K.route.loader) && (pe = !0), pe ? KO(v, C, K, ue, he, O) : Promise.resolve({
        type: Rn.data,
        result: void 0
      }))
    });
  }), I = await c({
    matches: M,
    request: C,
    params: x[0].params,
    fetcherKey: y,
    context: O
  });
  try {
    await Promise.all(B);
  } catch {
  }
  return I;
}
async function KO(c, v, m, C, w, x) {
  let y, A, _ = (O) => {
    let B, M = new Promise((ae, ue) => B = ue);
    A = () => B(), v.signal.addEventListener("abort", A);
    let I = (ae) => typeof O != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + c + '" [routeId: ' + m.route.id + "]"))) : O({
      request: v,
      params: m.params,
      context: x
    }, ...ae !== void 0 ? [ae] : []), K = (async () => {
      try {
        return {
          type: "data",
          result: await (w ? w((ue) => I(ue)) : I())
        };
      } catch (ae) {
        return {
          type: "error",
          result: ae
        };
      }
    })();
    return Promise.race([K, M]);
  };
  try {
    let O = m.route[c];
    if (C)
      if (O) {
        let B, [M] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          _(O).catch((I) => {
            B = I;
          }),
          C
        ]);
        if (B !== void 0)
          throw B;
        y = M;
      } else if (await C, O = m.route[c], O)
        y = await _(O);
      else if (c === "action") {
        let B = new URL(v.url), M = B.pathname + B.search;
        throw fi(405, {
          method: v.method,
          pathname: M,
          routeId: m.route.id
        });
      } else
        return {
          type: Rn.data,
          result: void 0
        };
    else if (O)
      y = await _(O);
    else {
      let B = new URL(v.url), M = B.pathname + B.search;
      throw fi(404, {
        pathname: M
      });
    }
    dt(y.result !== void 0, "You defined " + (c === "action" ? "an action" : "a loader") + " for route " + ('"' + m.route.id + "\" but didn't return anything from your `" + c + "` ") + "function. Please return a value or `null`.");
  } catch (O) {
    return {
      type: Rn.error,
      result: O
    };
  } finally {
    A && v.signal.removeEventListener("abort", A);
  }
  return y;
}
async function XO(c) {
  let {
    result: v,
    type: m
  } = c;
  if (nT(v)) {
    let O;
    try {
      let B = v.headers.get("Content-Type");
      B && /\bapplication\/json\b/.test(B) ? v.body == null ? O = null : O = await v.json() : O = await v.text();
    } catch (B) {
      return {
        type: Rn.error,
        error: B
      };
    }
    return m === Rn.error ? {
      type: Rn.error,
      error: new Oy(v.status, v.statusText, O),
      statusCode: v.status,
      headers: v.headers
    } : {
      type: Rn.data,
      data: O,
      statusCode: v.status,
      headers: v.headers
    };
  }
  if (m === Rn.error) {
    if (Mw(v)) {
      var C;
      if (v.data instanceof Error) {
        var w;
        return {
          type: Rn.error,
          error: v.data,
          statusCode: (w = v.init) == null ? void 0 : w.status
        };
      }
      v = new Oy(((C = v.init) == null ? void 0 : C.status) || 500, void 0, v.data);
    }
    return {
      type: Rn.error,
      error: v,
      statusCode: Ny(v) ? v.status : void 0
    };
  }
  if (tL(v)) {
    var x, y;
    return {
      type: Rn.deferred,
      deferredData: v,
      statusCode: (x = v.init) == null ? void 0 : x.status,
      headers: ((y = v.init) == null ? void 0 : y.headers) && new Headers(v.init.headers)
    };
  }
  if (Mw(v)) {
    var A, _;
    return {
      type: Rn.data,
      data: v.data,
      statusCode: (A = v.init) == null ? void 0 : A.status,
      headers: (_ = v.init) != null && _.headers ? new Headers(v.init.headers) : void 0
    };
  }
  return {
    type: Rn.data,
    data: v
  };
}
function qO(c, v, m, C, w, x) {
  let y = c.headers.get("Location");
  if (dt(y, "Redirects returned/thrown from loaders/actions must have a Location header"), !wE.test(y)) {
    let A = C.slice(0, C.findIndex((_) => _.route.id === m) + 1);
    y = yE(new URL(v.url), A, w, !0, y, x), c.headers.set("Location", y);
  }
  return c;
}
function Dw(c, v, m) {
  if (wE.test(c)) {
    let C = c, w = C.startsWith("//") ? new URL(v.protocol + C) : new URL(C), x = bi(w.pathname, m) != null;
    if (w.origin === v.origin && x)
      return w.pathname + w.search + w.hash;
  }
  return c;
}
function yd(c, v, m, C) {
  let w = c.createURL(tT(v)).toString(), x = {
    signal: m
  };
  if (C && Tl(C.formMethod)) {
    let {
      formMethod: y,
      formEncType: A
    } = C;
    x.method = y.toUpperCase(), A === "application/json" ? (x.headers = new Headers({
      "Content-Type": A
    }), x.body = JSON.stringify(C.json)) : A === "text/plain" ? x.body = C.text : A === "application/x-www-form-urlencoded" && C.formData ? x.body = SE(C.formData) : x.body = C.formData;
  }
  return new Request(w, x);
}
function SE(c) {
  let v = new URLSearchParams();
  for (let [m, C] of c.entries())
    v.append(m, typeof C == "string" ? C : C.name);
  return v;
}
function _w(c) {
  let v = new FormData();
  for (let [m, C] of c.entries())
    v.append(m, C);
  return v;
}
function JO(c, v, m, C, w) {
  let x = {}, y = null, A, _ = !1, O = {}, B = m && Ti(m[1]) ? m[1].error : void 0;
  return c.forEach((M) => {
    if (!(M.route.id in v))
      return;
    let I = M.route.id, K = v[I];
    if (dt(!Tc(K), "Cannot handle redirect results in processLoaderData"), Ti(K)) {
      let ae = K.error;
      B !== void 0 && (ae = B, B = void 0), y = y || {};
      {
        let ue = Rc(c, I);
        y[ue.route.id] == null && (y[ue.route.id] = ae);
      }
      x[I] = void 0, _ || (_ = !0, A = Ny(K.error) ? K.error.status : 500), K.headers && (O[I] = K.headers);
    } else
      vs(K) ? (C.set(I, K.deferredData), x[I] = K.deferredData.data, K.statusCode != null && K.statusCode !== 200 && !_ && (A = K.statusCode), K.headers && (O[I] = K.headers)) : (x[I] = K.data, K.statusCode && K.statusCode !== 200 && !_ && (A = K.statusCode), K.headers && (O[I] = K.headers));
  }), B !== void 0 && m && (y = {
    [m[0]]: B
  }, x[m[0]] = void 0), {
    loaderData: x,
    errors: y,
    statusCode: A || 200,
    loaderHeaders: O
  };
}
function kw(c, v, m, C, w, x, y) {
  let {
    loaderData: A,
    errors: _
  } = JO(v, m, C, y);
  return w.forEach((O) => {
    let {
      key: B,
      match: M,
      controller: I
    } = O, K = x[B];
    if (dt(K, "Did not find corresponding fetcher result"), !(I && I.signal.aborted))
      if (Ti(K)) {
        let ae = Rc(c.matches, M == null ? void 0 : M.route.id);
        _ && _[ae.route.id] || (_ = Qn({}, _, {
          [ae.route.id]: K.error
        })), c.fetchers.delete(B);
      } else if (Tc(K))
        dt(!1, "Unhandled fetcher revalidation redirect");
      else if (vs(K))
        dt(!1, "Unhandled fetcher deferred data");
      else {
        let ae = ps(K.data);
        c.fetchers.set(B, ae);
      }
  }), {
    loaderData: A,
    errors: _
  };
}
function Ow(c, v, m, C) {
  let w = Qn({}, v);
  for (let x of m) {
    let y = x.route.id;
    if (v.hasOwnProperty(y) ? v[y] !== void 0 && (w[y] = v[y]) : c[y] !== void 0 && x.route.loader && (w[y] = c[y]), C && C.hasOwnProperty(y))
      break;
  }
  return w;
}
function Lw(c) {
  return c ? Ti(c[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [c[0]]: c[1].data
    }
  } : {};
}
function Rc(c, v) {
  return (v ? c.slice(0, c.findIndex((C) => C.route.id === v) + 1) : [...c]).reverse().find((C) => C.route.hasErrorBoundary === !0) || c[0];
}
function Nw(c) {
  let v = c.length === 1 ? c[0] : c.find((m) => m.index || !m.path || m.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: v
    }],
    route: v
  };
}
function fi(c, v) {
  let {
    pathname: m,
    routeId: C,
    method: w,
    type: x,
    message: y
  } = v === void 0 ? {} : v, A = "Unknown Server Error", _ = "Unknown @remix-run/router error";
  return c === 400 ? (A = "Bad Request", w && m && C ? _ = "You made a " + w + ' request to "' + m + '" but ' + ('did not provide a `loader` for route "' + C + '", ') + "so there is no way to handle the request." : x === "defer-action" ? _ = "defer() is not supported in actions" : x === "invalid-body" && (_ = "Unable to encode submission body")) : c === 403 ? (A = "Forbidden", _ = 'Route "' + C + '" does not match URL "' + m + '"') : c === 404 ? (A = "Not Found", _ = 'No route matches URL "' + m + '"') : c === 405 && (A = "Method Not Allowed", w && m && C ? _ = "You made a " + w.toUpperCase() + ' request to "' + m + '" but ' + ('did not provide an `action` for route "' + C + '", ') + "so there is no way to handle the request." : w && (_ = 'Invalid request method "' + w.toUpperCase() + '"')), new Oy(c || 500, A, new Error(_), !0);
}
function Ry(c) {
  let v = Object.entries(c);
  for (let m = v.length - 1; m >= 0; m--) {
    let [C, w] = v[m];
    if (Tc(w))
      return {
        key: C,
        result: w
      };
  }
}
function tT(c) {
  let v = typeof c == "string" ? ys(c) : c;
  return hs(Qn({}, v, {
    hash: ""
  }));
}
function ZO(c, v) {
  return c.pathname !== v.pathname || c.search !== v.search ? !1 : c.hash === "" ? v.hash !== "" : c.hash === v.hash ? !0 : v.hash !== "";
}
function eL(c) {
  return nT(c.result) && HO.has(c.result.status);
}
function vs(c) {
  return c.type === Rn.deferred;
}
function Ti(c) {
  return c.type === Rn.error;
}
function Tc(c) {
  return (c && c.type) === Rn.redirect;
}
function Mw(c) {
  return typeof c == "object" && c != null && "type" in c && "data" in c && "init" in c && c.type === "DataWithResponseInit";
}
function tL(c) {
  let v = c;
  return v && typeof v == "object" && typeof v.data == "object" && typeof v.subscribe == "function" && typeof v.cancel == "function" && typeof v.resolveData == "function";
}
function nT(c) {
  return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.headers == "object" && typeof c.body < "u";
}
function nL(c) {
  return PO.has(c.toLowerCase());
}
function Tl(c) {
  return AO.has(c.toLowerCase());
}
async function rL(c, v, m, C, w) {
  let x = Object.entries(v);
  for (let y = 0; y < x.length; y++) {
    let [A, _] = x[y], O = c.find((I) => (I == null ? void 0 : I.route.id) === A);
    if (!O)
      continue;
    let B = C.find((I) => I.route.id === O.route.id), M = B != null && !Zw(B, O) && (w && w[O.route.id]) !== void 0;
    vs(_) && M && await TE(_, m, !1).then((I) => {
      I && (v[A] = I);
    });
  }
}
async function aL(c, v, m) {
  for (let C = 0; C < m.length; C++) {
    let {
      key: w,
      routeId: x,
      controller: y
    } = m[C], A = v[w];
    c.find((O) => (O == null ? void 0 : O.route.id) === x) && vs(A) && (dt(y, "Expected an AbortController for revalidating fetcher deferred result"), await TE(A, y.signal, !0).then((O) => {
      O && (v[w] = O);
    }));
  }
}
async function TE(c, v, m) {
  if (m === void 0 && (m = !1), !await c.deferredData.resolveData(v)) {
    if (m)
      try {
        return {
          type: Rn.data,
          data: c.deferredData.unwrappedData
        };
      } catch (w) {
        return {
          type: Rn.error,
          error: w
        };
      }
    return {
      type: Rn.data,
      data: c.deferredData.data
    };
  }
}
function bE(c) {
  return new URLSearchParams(c).getAll("index").some((v) => v === "");
}
function _v(c, v) {
  let m = typeof v == "string" ? ys(v).search : v.search;
  if (c[c.length - 1].route.index && bE(m || ""))
    return c[c.length - 1];
  let C = Xw(c);
  return C[C.length - 1];
}
function Uw(c) {
  let {
    formMethod: v,
    formAction: m,
    formEncType: C,
    text: w,
    formData: x,
    json: y
  } = c;
  if (!(!v || !m || !C)) {
    if (w != null)
      return {
        formMethod: v,
        formAction: m,
        formEncType: C,
        formData: void 0,
        json: void 0,
        text: w
      };
    if (x != null)
      return {
        formMethod: v,
        formAction: m,
        formEncType: C,
        formData: x,
        json: void 0,
        text: void 0
      };
    if (y !== void 0)
      return {
        formMethod: v,
        formAction: m,
        formEncType: C,
        formData: void 0,
        json: y,
        text: void 0
      };
  }
}
function fE(c, v) {
  return v ? {
    state: "loading",
    location: c,
    formMethod: v.formMethod,
    formAction: v.formAction,
    formEncType: v.formEncType,
    formData: v.formData,
    json: v.json,
    text: v.text
  } : {
    state: "loading",
    location: c,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function iL(c, v) {
  return {
    state: "submitting",
    location: c,
    formMethod: v.formMethod,
    formAction: v.formAction,
    formEncType: v.formEncType,
    formData: v.formData,
    json: v.json,
    text: v.text
  };
}
function bv(c, v) {
  return c ? {
    state: "loading",
    formMethod: c.formMethod,
    formAction: c.formAction,
    formEncType: c.formEncType,
    formData: c.formData,
    json: c.json,
    text: c.text,
    data: v
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: v
  };
}
function lL(c, v) {
  return {
    state: "submitting",
    formMethod: c.formMethod,
    formAction: c.formAction,
    formEncType: c.formEncType,
    formData: c.formData,
    json: c.json,
    text: c.text,
    data: v ? v.data : void 0
  };
}
function ps(c) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: c
  };
}
function oL(c, v) {
  try {
    let m = c.sessionStorage.getItem(Jw);
    if (m) {
      let C = JSON.parse(m);
      for (let [w, x] of Object.entries(C || {}))
        x && Array.isArray(x) && v.set(w, new Set(x || []));
    }
  } catch {
  }
}
function uL(c, v) {
  if (v.size > 0) {
    let m = {};
    for (let [C, w] of v)
      m[C] = [...w];
    try {
      c.sessionStorage.setItem(Jw, JSON.stringify(m));
    } catch (C) {
      Fr(!1, "Failed to save applied view transitions in sessionStorage (" + C + ").");
    }
  }
}
function Ed() {
  return Ed = Object.assign ? Object.assign.bind() : function(c) {
    for (var v = 1; v < arguments.length; v++) {
      var m = arguments[v];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (c[C] = m[C]);
    }
    return c;
  }, Ed.apply(this, arguments);
}
const Cd = /* @__PURE__ */ re.createContext(null);
ft.env.NODE_ENV !== "production" && (Cd.displayName = "DataRouter");
const My = /* @__PURE__ */ re.createContext(null);
ft.env.NODE_ENV !== "production" && (My.displayName = "DataRouterState");
const sL = /* @__PURE__ */ re.createContext(null);
ft.env.NODE_ENV !== "production" && (sL.displayName = "Await");
const bl = /* @__PURE__ */ re.createContext(null);
ft.env.NODE_ENV !== "production" && (bl.displayName = "Navigation");
const Uy = /* @__PURE__ */ re.createContext(null);
ft.env.NODE_ENV !== "production" && (Uy.displayName = "Location");
const xl = /* @__PURE__ */ re.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ft.env.NODE_ENV !== "production" && (xl.displayName = "Route");
const xE = /* @__PURE__ */ re.createContext(null);
ft.env.NODE_ENV !== "production" && (xE.displayName = "RouteError");
function cL(c, v) {
  let {
    relative: m
  } = v === void 0 ? {} : v;
  Ov() || (ft.env.NODE_ENV !== "production" ? dt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : dt(!1));
  let {
    basename: C,
    navigator: w
  } = re.useContext(bl), {
    hash: x,
    pathname: y,
    search: A
  } = Lv(c, {
    relative: m
  }), _ = y;
  return C !== "/" && (_ = y === "/" ? C : fo([C, y])), w.createHref({
    pathname: _,
    search: A,
    hash: x
  });
}
function Ov() {
  return re.useContext(Uy) != null;
}
function bc() {
  return Ov() || (ft.env.NODE_ENV !== "production" ? dt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : dt(!1)), re.useContext(Uy).location;
}
const rT = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function aT(c) {
  re.useContext(bl).static || re.useLayoutEffect(c);
}
function iT() {
  let {
    isDataRoute: c
  } = re.useContext(xl);
  return c ? TL() : fL();
}
function fL() {
  Ov() || (ft.env.NODE_ENV !== "production" ? dt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : dt(!1));
  let c = re.useContext(Cd), {
    basename: v,
    future: m,
    navigator: C
  } = re.useContext(bl), {
    matches: w
  } = re.useContext(xl), {
    pathname: x
  } = bc(), y = JSON.stringify(CE(w, m.v7_relativeSplatPath)), A = re.useRef(!1);
  return aT(() => {
    A.current = !0;
  }), re.useCallback(function(O, B) {
    if (B === void 0 && (B = {}), ft.env.NODE_ENV !== "production" && Fr(A.current, rT), !A.current) return;
    if (typeof O == "number") {
      C.go(O);
      return;
    }
    let M = RE(O, JSON.parse(y), x, B.relative === "path");
    c == null && v !== "/" && (M.pathname = M.pathname === "/" ? v : fo([v, M.pathname])), (B.replace ? C.replace : C.push)(M, B.state, B);
  }, [v, C, y, x, c]);
}
const dL = /* @__PURE__ */ re.createContext(null);
function pL(c) {
  let v = re.useContext(xl).outlet;
  return v && /* @__PURE__ */ re.createElement(dL.Provider, {
    value: c
  }, v);
}
function fN() {
  let {
    matches: c
  } = re.useContext(xl), v = c[c.length - 1];
  return v ? v.params : {};
}
function Lv(c, v) {
  let {
    relative: m
  } = v === void 0 ? {} : v, {
    future: C
  } = re.useContext(bl), {
    matches: w
  } = re.useContext(xl), {
    pathname: x
  } = bc(), y = JSON.stringify(CE(w, C.v7_relativeSplatPath));
  return re.useMemo(() => RE(c, JSON.parse(y), x, m === "path"), [c, y, x, m]);
}
function vL(c, v, m, C) {
  Ov() || (ft.env.NODE_ENV !== "production" ? dt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : dt(!1));
  let {
    navigator: w
  } = re.useContext(bl), {
    matches: x
  } = re.useContext(xl), y = x[x.length - 1], A = y ? y.params : {}, _ = y ? y.pathname : "/", O = y ? y.pathnameBase : "/", B = y && y.route;
  if (ft.env.NODE_ENV !== "production") {
    let Ae = B && B.path || "";
    oT(_, !B || Ae.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + _ + '" (under <Route path="' + Ae + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + Ae + '"> to <Route ') + ('path="' + (Ae === "/" ? "*" : Ae + "/*") + '">.'));
  }
  let M = bc(), I;
  I = M;
  let K = I.pathname || "/", ae = K;
  if (O !== "/") {
    let Ae = O.replace(/^\//, "").split("/");
    ae = "/" + K.replace(/^\//, "").split("/").slice(Ae.length).join("/");
  }
  let ue = Cc(c, {
    pathname: ae
  });
  return ft.env.NODE_ENV !== "production" && (ft.env.NODE_ENV !== "production" && Fr(B || ue != null, 'No routes matched location "' + I.pathname + I.search + I.hash + '" '), ft.env.NODE_ENV !== "production" && Fr(ue == null || ue[ue.length - 1].route.element !== void 0 || ue[ue.length - 1].route.Component !== void 0 || ue[ue.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + I.pathname + I.search + I.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')), SL(ue && ue.map((Ae) => Object.assign({}, Ae, {
    params: Object.assign({}, A, Ae.params),
    pathname: fo([
      O,
      // Re-encode pathnames that were decoded inside matchRoutes
      w.encodeLocation ? w.encodeLocation(Ae.pathname).pathname : Ae.pathname
    ]),
    pathnameBase: Ae.pathnameBase === "/" ? O : fo([
      O,
      // Re-encode pathnames that were decoded inside matchRoutes
      w.encodeLocation ? w.encodeLocation(Ae.pathnameBase).pathname : Ae.pathnameBase
    ])
  })), x, m, C);
}
function hL() {
  let c = RL(), v = Ny(c) ? c.status + " " + c.statusText : c instanceof Error ? c.message : JSON.stringify(c), m = c instanceof Error ? c.stack : null, C = "rgba(200,200,200, 0.5)", w = {
    padding: "0.5rem",
    backgroundColor: C
  }, x = {
    padding: "2px 4px",
    backgroundColor: C
  }, y = null;
  return ft.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", c), y = /* @__PURE__ */ re.createElement(re.Fragment, null, /* @__PURE__ */ re.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ re.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ re.createElement("code", {
    style: x
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ re.createElement("code", {
    style: x
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ re.createElement(re.Fragment, null, /* @__PURE__ */ re.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ re.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, v), m ? /* @__PURE__ */ re.createElement("pre", {
    style: w
  }, m) : null, y);
}
const mL = /* @__PURE__ */ re.createElement(hL, null);
class yL extends re.Component {
  constructor(v) {
    super(v), this.state = {
      location: v.location,
      revalidation: v.revalidation,
      error: v.error
    };
  }
  static getDerivedStateFromError(v) {
    return {
      error: v
    };
  }
  static getDerivedStateFromProps(v, m) {
    return m.location !== v.location || m.revalidation !== "idle" && v.revalidation === "idle" ? {
      error: v.error,
      location: v.location,
      revalidation: v.revalidation
    } : {
      error: v.error !== void 0 ? v.error : m.error,
      location: m.location,
      revalidation: v.revalidation || m.revalidation
    };
  }
  componentDidCatch(v, m) {
    console.error("React Router caught the following error during render", v, m);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ re.createElement(xl.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ re.createElement(xE.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function gL(c) {
  let {
    routeContext: v,
    match: m,
    children: C
  } = c, w = re.useContext(Cd);
  return w && w.static && w.staticContext && (m.route.errorElement || m.route.ErrorBoundary) && (w.staticContext._deepestRenderedBoundaryId = m.route.id), /* @__PURE__ */ re.createElement(xl.Provider, {
    value: v
  }, C);
}
function SL(c, v, m, C) {
  var w;
  if (v === void 0 && (v = []), m === void 0 && (m = null), C === void 0 && (C = null), c == null) {
    var x;
    if (!m)
      return null;
    if (m.errors)
      c = m.matches;
    else if ((x = C) != null && x.v7_partialHydration && v.length === 0 && !m.initialized && m.matches.length > 0)
      c = m.matches;
    else
      return null;
  }
  let y = c, A = (w = m) == null ? void 0 : w.errors;
  if (A != null) {
    let B = y.findIndex((M) => M.route.id && (A == null ? void 0 : A[M.route.id]) !== void 0);
    B >= 0 || (ft.env.NODE_ENV !== "production" ? dt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(A).join(",")) : dt(!1)), y = y.slice(0, Math.min(y.length, B + 1));
  }
  let _ = !1, O = -1;
  if (m && C && C.v7_partialHydration)
    for (let B = 0; B < y.length; B++) {
      let M = y[B];
      if ((M.route.HydrateFallback || M.route.hydrateFallbackElement) && (O = B), M.route.id) {
        let {
          loaderData: I,
          errors: K
        } = m, ae = M.route.loader && I[M.route.id] === void 0 && (!K || K[M.route.id] === void 0);
        if (M.route.lazy || ae) {
          _ = !0, O >= 0 ? y = y.slice(0, O + 1) : y = [y[0]];
          break;
        }
      }
    }
  return y.reduceRight((B, M, I) => {
    let K, ae = !1, ue = null, pe = null;
    m && (K = A && M.route.id ? A[M.route.id] : void 0, ue = M.route.errorElement || mL, _ && (O < 0 && I === 0 ? (oT("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), ae = !0, pe = null) : O === I && (ae = !0, pe = M.route.hydrateFallbackElement || null)));
    let Ae = v.concat(y.slice(0, I + 1)), he = () => {
      let ye;
      return K ? ye = ue : ae ? ye = pe : M.route.Component ? ye = /* @__PURE__ */ re.createElement(M.route.Component, null) : M.route.element ? ye = M.route.element : ye = B, /* @__PURE__ */ re.createElement(gL, {
        match: M,
        routeContext: {
          outlet: B,
          matches: Ae,
          isDataRoute: m != null
        },
        children: ye
      });
    };
    return m && (M.route.ErrorBoundary || M.route.errorElement || I === 0) ? /* @__PURE__ */ re.createElement(yL, {
      location: m.location,
      revalidation: m.revalidation,
      component: ue,
      error: K,
      children: he(),
      routeContext: {
        outlet: null,
        matches: Ae,
        isDataRoute: !0
      }
    }) : he();
  }, null);
}
var DE = /* @__PURE__ */ function(c) {
  return c.UseBlocker = "useBlocker", c.UseRevalidator = "useRevalidator", c.UseNavigateStable = "useNavigate", c;
}(DE || {}), tu = /* @__PURE__ */ function(c) {
  return c.UseBlocker = "useBlocker", c.UseLoaderData = "useLoaderData", c.UseActionData = "useActionData", c.UseRouteError = "useRouteError", c.UseNavigation = "useNavigation", c.UseRouteLoaderData = "useRouteLoaderData", c.UseMatches = "useMatches", c.UseRevalidator = "useRevalidator", c.UseNavigateStable = "useNavigate", c.UseRouteId = "useRouteId", c;
}(tu || {});
function _E(c) {
  return c + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function lT(c) {
  let v = re.useContext(Cd);
  return v || (ft.env.NODE_ENV !== "production" ? dt(!1, _E(c)) : dt(!1)), v;
}
function zy(c) {
  let v = re.useContext(My);
  return v || (ft.env.NODE_ENV !== "production" ? dt(!1, _E(c)) : dt(!1)), v;
}
function EL(c) {
  let v = re.useContext(xl);
  return v || (ft.env.NODE_ENV !== "production" ? dt(!1, _E(c)) : dt(!1)), v;
}
function Ay(c) {
  let v = EL(c), m = v.matches[v.matches.length - 1];
  return m.route.id || (ft.env.NODE_ENV !== "production" ? dt(!1, c + ' can only be used on routes that contain a unique "id"') : dt(!1)), m.route.id;
}
function CL() {
  return Ay(tu.UseRouteId);
}
function dN() {
  return zy(tu.UseNavigation).navigation;
}
function pN() {
  let c = zy(tu.UseLoaderData), v = Ay(tu.UseLoaderData);
  if (c.errors && c.errors[v] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + v + ")");
    return;
  }
  return c.loaderData[v];
}
function RL() {
  var c;
  let v = re.useContext(xE), m = zy(tu.UseRouteError), C = Ay(tu.UseRouteError);
  return v !== void 0 ? v : (c = m.errors) == null ? void 0 : c[C];
}
let wL = 0;
function vN(c) {
  let {
    router: v,
    basename: m
  } = lT(DE.UseBlocker), C = zy(tu.UseBlocker), [w, x] = re.useState(""), y = re.useCallback((A) => {
    if (typeof c != "function")
      return !!c;
    if (m === "/")
      return c(A);
    let {
      currentLocation: _,
      nextLocation: O,
      historyAction: B
    } = A;
    return c({
      currentLocation: Ed({}, _, {
        pathname: bi(_.pathname, m) || _.pathname
      }),
      nextLocation: Ed({}, O, {
        pathname: bi(O.pathname, m) || O.pathname
      }),
      historyAction: B
    });
  }, [m, c]);
  return re.useEffect(() => {
    let A = String(++wL);
    return x(A), () => v.deleteBlocker(A);
  }, [v]), re.useEffect(() => {
    w !== "" && v.getBlocker(w, y);
  }, [v, w, y]), w && C.blockers.has(w) ? C.blockers.get(w) : gd;
}
function TL() {
  let {
    router: c
  } = lT(DE.UseNavigateStable), v = Ay(tu.UseNavigateStable), m = re.useRef(!1);
  return aT(() => {
    m.current = !0;
  }), re.useCallback(function(w, x) {
    x === void 0 && (x = {}), ft.env.NODE_ENV !== "production" && Fr(m.current, rT), m.current && (typeof w == "number" ? c.navigate(w) : c.navigate(w, Ed({
      fromRouteId: v
    }, x)));
  }, [c, v]);
}
const zw = {};
function oT(c, v, m) {
  !v && !zw[c] && (zw[c] = !0, ft.env.NODE_ENV !== "production" && Fr(!1, m));
}
function hN(c) {
  return pL(c.context);
}
function bL(c) {
  let {
    basename: v = "/",
    children: m = null,
    location: C,
    navigationType: w = wr.Pop,
    navigator: x,
    static: y = !1,
    future: A
  } = c;
  Ov() && (ft.env.NODE_ENV !== "production" ? dt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : dt(!1));
  let _ = v.replace(/^\/*/, "/"), O = re.useMemo(() => ({
    basename: _,
    navigator: x,
    static: y,
    future: Ed({
      v7_relativeSplatPath: !1
    }, A)
  }), [_, A, x, y]);
  typeof C == "string" && (C = ys(C));
  let {
    pathname: B = "/",
    search: M = "",
    hash: I = "",
    state: K = null,
    key: ae = "default"
  } = C, ue = re.useMemo(() => {
    let pe = bi(B, _);
    return pe == null ? null : {
      location: {
        pathname: pe,
        search: M,
        hash: I,
        state: K,
        key: ae
      },
      navigationType: w
    };
  }, [_, B, M, I, K, ae, w]);
  return ft.env.NODE_ENV !== "production" && Fr(ue != null, '<Router basename="' + _ + '"> is not able to match the URL ' + ('"' + B + M + I + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), ue == null ? null : /* @__PURE__ */ re.createElement(bl.Provider, {
    value: O
  }, /* @__PURE__ */ re.createElement(Uy.Provider, {
    children: m,
    value: ue
  }));
}
new Promise(() => {
});
function xL(c) {
  let v = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: c.ErrorBoundary != null || c.errorElement != null
  };
  return c.Component && (ft.env.NODE_ENV !== "production" && c.element && ft.env.NODE_ENV !== "production" && Fr(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(v, {
    element: /* @__PURE__ */ re.createElement(c.Component),
    Component: void 0
  })), c.HydrateFallback && (ft.env.NODE_ENV !== "production" && c.hydrateFallbackElement && ft.env.NODE_ENV !== "production" && Fr(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(v, {
    hydrateFallbackElement: /* @__PURE__ */ re.createElement(c.HydrateFallback),
    HydrateFallback: void 0
  })), c.ErrorBoundary && (ft.env.NODE_ENV !== "production" && c.errorElement && ft.env.NODE_ENV !== "production" && Fr(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(v, {
    errorElement: /* @__PURE__ */ re.createElement(c.ErrorBoundary),
    ErrorBoundary: void 0
  })), v;
}
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(c) {
    for (var v = 1; v < arguments.length; v++) {
      var m = arguments[v];
      for (var C in m)
        Object.prototype.hasOwnProperty.call(m, C) && (c[C] = m[C]);
    }
    return c;
  }, ms.apply(this, arguments);
}
function kE(c, v) {
  if (c == null) return {};
  var m = {}, C = Object.keys(c), w, x;
  for (x = 0; x < C.length; x++)
    w = C[x], !(v.indexOf(w) >= 0) && (m[w] = c[w]);
  return m;
}
const xy = "get", Dy = "application/x-www-form-urlencoded";
function Fy(c) {
  return c != null && typeof c.tagName == "string";
}
function DL(c) {
  return Fy(c) && c.tagName.toLowerCase() === "button";
}
function _L(c) {
  return Fy(c) && c.tagName.toLowerCase() === "form";
}
function kL(c) {
  return Fy(c) && c.tagName.toLowerCase() === "input";
}
function OL(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function LL(c, v) {
  return c.button === 0 && // Ignore everything but left clicks
  (!v || v === "_self") && // Let browser handle "target=_blank" etc.
  !OL(c);
}
function EE(c) {
  return c === void 0 && (c = ""), new URLSearchParams(typeof c == "string" || Array.isArray(c) || c instanceof URLSearchParams ? c : Object.keys(c).reduce((v, m) => {
    let C = c[m];
    return v.concat(Array.isArray(C) ? C.map((w) => [m, w]) : [[m, C]]);
  }, []));
}
function NL(c, v) {
  let m = EE(c);
  return v && v.forEach((C, w) => {
    m.has(w) || v.getAll(w).forEach((x) => {
      m.append(w, x);
    });
  }), m;
}
let wy = null;
function ML() {
  if (wy === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), wy = !1;
    } catch {
      wy = !0;
    }
  return wy;
}
const UL = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function dE(c) {
  return c != null && !UL.has(c) ? (ft.env.NODE_ENV !== "production" && Fr(!1, '"' + c + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Dy + '"')), null) : c;
}
function zL(c, v) {
  let m, C, w, x, y;
  if (_L(c)) {
    let A = c.getAttribute("action");
    C = A ? bi(A, v) : null, m = c.getAttribute("method") || xy, w = dE(c.getAttribute("enctype")) || Dy, x = new FormData(c);
  } else if (DL(c) || kL(c) && (c.type === "submit" || c.type === "image")) {
    let A = c.form;
    if (A == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let _ = c.getAttribute("formaction") || A.getAttribute("action");
    if (C = _ ? bi(_, v) : null, m = c.getAttribute("formmethod") || A.getAttribute("method") || xy, w = dE(c.getAttribute("formenctype")) || dE(A.getAttribute("enctype")) || Dy, x = new FormData(A, c), !ML()) {
      let {
        name: O,
        type: B,
        value: M
      } = c;
      if (B === "image") {
        let I = O ? O + "." : "";
        x.append(I + "x", "0"), x.append(I + "y", "0");
      } else O && x.append(O, M);
    }
  } else {
    if (Fy(c))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    m = xy, C = null, w = Dy, y = c;
  }
  return x && w === "text/plain" && (y = x, x = void 0), {
    action: C,
    method: m.toLowerCase(),
    encType: w,
    formData: x,
    body: y
  };
}
const AL = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], FL = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], PL = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], HL = "6";
try {
  window.__reactRouterVersion = HL;
} catch {
}
function mN(c, v) {
  return IO({
    basename: void 0,
    future: ms({}, void 0, {
      v7_prependBasename: !0
    }),
    history: pO({
      window: void 0
    }),
    hydrationData: jL(),
    routes: c,
    mapRouteProperties: xL,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0
  }).initialize();
}
function jL() {
  var c;
  let v = (c = window) == null ? void 0 : c.__staticRouterHydrationData;
  return v && v.errors && (v = ms({}, v, {
    errors: VL(v.errors)
  })), v;
}
function VL(c) {
  if (!c) return null;
  let v = Object.entries(c), m = {};
  for (let [C, w] of v)
    if (w && w.__type === "RouteErrorResponse")
      m[C] = new Oy(w.status, w.statusText, w.data, w.internal === !0);
    else if (w && w.__type === "Error") {
      if (w.__subType) {
        let x = window[w.__subType];
        if (typeof x == "function")
          try {
            let y = new x(w.message);
            y.stack = "", m[C] = y;
          } catch {
          }
      }
      if (m[C] == null) {
        let x = new Error(w.message);
        x.stack = "", m[C] = x;
      }
    } else
      m[C] = w;
  return m;
}
const OE = /* @__PURE__ */ re.createContext({
  isTransitioning: !1
});
ft.env.NODE_ENV !== "production" && (OE.displayName = "ViewTransition");
const uT = /* @__PURE__ */ re.createContext(/* @__PURE__ */ new Map());
ft.env.NODE_ENV !== "production" && (uT.displayName = "Fetchers");
const BL = "startTransition", Aw = lO[BL], IL = "flushSync", Fw = dO[IL];
function $L(c) {
  Aw ? Aw(c) : c();
}
function xv(c) {
  Fw ? Fw(c) : c();
}
class YL {
  constructor() {
    this.status = "pending", this.promise = new Promise((v, m) => {
      this.resolve = (C) => {
        this.status === "pending" && (this.status = "resolved", v(C));
      }, this.reject = (C) => {
        this.status === "pending" && (this.status = "rejected", m(C));
      };
    });
  }
}
function yN(c) {
  let {
    fallbackElement: v,
    router: m,
    future: C
  } = c, [w, x] = re.useState(m.state), [y, A] = re.useState(), [_, O] = re.useState({
    isTransitioning: !1
  }), [B, M] = re.useState(), [I, K] = re.useState(), [ae, ue] = re.useState(), pe = re.useRef(/* @__PURE__ */ new Map()), {
    v7_startTransition: Ae
  } = C || {}, he = re.useCallback((je) => {
    Ae ? $L(je) : je();
  }, [Ae]), ye = re.useCallback((je, Ze) => {
    let {
      deletedFetchers: et,
      flushSync: pt,
      viewTransitionOpts: Mt
    } = Ze;
    et.forEach((it) => pe.current.delete(it)), je.fetchers.forEach((it, qt) => {
      it.data !== void 0 && pe.current.set(qt, it.data);
    });
    let tt = m.window == null || m.window.document == null || typeof m.window.document.startViewTransition != "function";
    if (!Mt || tt) {
      pt ? xv(() => x(je)) : he(() => x(je));
      return;
    }
    if (pt) {
      xv(() => {
        I && (B && B.resolve(), I.skipTransition()), O({
          isTransitioning: !0,
          flushSync: !0,
          currentLocation: Mt.currentLocation,
          nextLocation: Mt.nextLocation
        });
      });
      let it = m.window.document.startViewTransition(() => {
        xv(() => x(je));
      });
      it.finished.finally(() => {
        xv(() => {
          M(void 0), K(void 0), A(void 0), O({
            isTransitioning: !1
          });
        });
      }), xv(() => K(it));
      return;
    }
    I ? (B && B.resolve(), I.skipTransition(), ue({
      state: je,
      currentLocation: Mt.currentLocation,
      nextLocation: Mt.nextLocation
    })) : (A(je), O({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: Mt.currentLocation,
      nextLocation: Mt.nextLocation
    }));
  }, [m.window, I, B, pe, he]);
  re.useLayoutEffect(() => m.subscribe(ye), [m, ye]), re.useEffect(() => {
    _.isTransitioning && !_.flushSync && M(new YL());
  }, [_]), re.useEffect(() => {
    if (B && y && m.window) {
      let je = y, Ze = B.promise, et = m.window.document.startViewTransition(async () => {
        he(() => x(je)), await Ze;
      });
      et.finished.finally(() => {
        M(void 0), K(void 0), A(void 0), O({
          isTransitioning: !1
        });
      }), K(et);
    }
  }, [he, y, B, m.window]), re.useEffect(() => {
    B && y && w.location.key === y.location.key && B.resolve();
  }, [B, I, w.location, y]), re.useEffect(() => {
    !_.isTransitioning && ae && (A(ae.state), O({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: ae.currentLocation,
      nextLocation: ae.nextLocation
    }), ue(void 0));
  }, [_.isTransitioning, ae]), re.useEffect(() => {
    ft.env.NODE_ENV !== "production" && Fr(v == null || !m.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using `v7_partialHydration`, use a `HydrateFallback` component instead");
  }, []);
  let be = re.useMemo(() => ({
    createHref: m.createHref,
    encodeLocation: m.encodeLocation,
    go: (je) => m.navigate(je),
    push: (je, Ze, et) => m.navigate(je, {
      state: Ze,
      preventScrollReset: et == null ? void 0 : et.preventScrollReset
    }),
    replace: (je, Ze, et) => m.navigate(je, {
      replace: !0,
      state: Ze,
      preventScrollReset: et == null ? void 0 : et.preventScrollReset
    })
  }), [m]), De = m.basename || "/", $ = re.useMemo(() => ({
    router: m,
    navigator: be,
    static: !1,
    basename: De
  }), [m, be, De]), Fe = re.useMemo(() => ({
    v7_relativeSplatPath: m.future.v7_relativeSplatPath
  }), [m.future.v7_relativeSplatPath]);
  return /* @__PURE__ */ re.createElement(re.Fragment, null, /* @__PURE__ */ re.createElement(Cd.Provider, {
    value: $
  }, /* @__PURE__ */ re.createElement(My.Provider, {
    value: w
  }, /* @__PURE__ */ re.createElement(uT.Provider, {
    value: pe.current
  }, /* @__PURE__ */ re.createElement(OE.Provider, {
    value: _
  }, /* @__PURE__ */ re.createElement(bL, {
    basename: De,
    location: w.location,
    navigationType: w.historyAction,
    navigator: be,
    future: Fe
  }, w.initialized || m.future.v7_partialHydration ? /* @__PURE__ */ re.createElement(QL, {
    routes: m.routes,
    future: m.future,
    state: w
  }) : v))))), null);
}
const QL = /* @__PURE__ */ re.memo(WL);
function WL(c) {
  let {
    routes: v,
    future: m,
    state: C
  } = c;
  return vL(v, void 0, C, m);
}
ft.env.NODE_ENV;
const GL = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", KL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, sT = /* @__PURE__ */ re.forwardRef(function(v, m) {
  let {
    onClick: C,
    relative: w,
    reloadDocument: x,
    replace: y,
    state: A,
    target: _,
    to: O,
    preventScrollReset: B,
    viewTransition: M
  } = v, I = kE(v, AL), {
    basename: K
  } = re.useContext(bl), ae, ue = !1;
  if (typeof O == "string" && KL.test(O) && (ae = O, GL))
    try {
      let ye = new URL(window.location.href), be = O.startsWith("//") ? new URL(ye.protocol + O) : new URL(O), De = bi(be.pathname, K);
      be.origin === ye.origin && De != null ? O = De + be.search + be.hash : ue = !0;
    } catch {
      ft.env.NODE_ENV !== "production" && Fr(!1, '<Link to="' + O + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let pe = cL(O, {
    relative: w
  }), Ae = ZL(O, {
    replace: y,
    state: A,
    target: _,
    preventScrollReset: B,
    relative: w,
    viewTransition: M
  });
  function he(ye) {
    C && C(ye), ye.defaultPrevented || Ae(ye);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ re.createElement("a", ms({}, I, {
      href: ae || pe,
      onClick: ue || x ? C : he,
      ref: m,
      target: _
    }))
  );
});
ft.env.NODE_ENV !== "production" && (sT.displayName = "Link");
const XL = /* @__PURE__ */ re.forwardRef(function(v, m) {
  let {
    "aria-current": C = "page",
    caseSensitive: w = !1,
    className: x = "",
    end: y = !1,
    style: A,
    to: _,
    viewTransition: O,
    children: B
  } = v, M = kE(v, FL), I = Lv(_, {
    relative: M.relative
  }), K = bc(), ae = re.useContext(My), {
    navigator: ue,
    basename: pe
  } = re.useContext(bl), Ae = ae != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  iN(I) && O === !0, he = ue.encodeLocation ? ue.encodeLocation(I).pathname : I.pathname, ye = K.pathname, be = ae && ae.navigation && ae.navigation.location ? ae.navigation.location.pathname : null;
  w || (ye = ye.toLowerCase(), be = be ? be.toLowerCase() : null, he = he.toLowerCase()), be && pe && (be = bi(be, pe) || be);
  const De = he !== "/" && he.endsWith("/") ? he.length - 1 : he.length;
  let $ = ye === he || !y && ye.startsWith(he) && ye.charAt(De) === "/", Fe = be != null && (be === he || !y && be.startsWith(he) && be.charAt(he.length) === "/"), je = {
    isActive: $,
    isPending: Fe,
    isTransitioning: Ae
  }, Ze = $ ? C : void 0, et;
  typeof x == "function" ? et = x(je) : et = [x, $ ? "active" : null, Fe ? "pending" : null, Ae ? "transitioning" : null].filter(Boolean).join(" ");
  let pt = typeof A == "function" ? A(je) : A;
  return /* @__PURE__ */ re.createElement(sT, ms({}, M, {
    "aria-current": Ze,
    className: et,
    ref: m,
    style: pt,
    to: _,
    viewTransition: O
  }), typeof B == "function" ? B(je) : B);
});
ft.env.NODE_ENV !== "production" && (XL.displayName = "NavLink");
const qL = /* @__PURE__ */ re.forwardRef((c, v) => {
  let {
    fetcherKey: m,
    navigate: C,
    reloadDocument: w,
    replace: x,
    state: y,
    method: A = xy,
    action: _,
    onSubmit: O,
    relative: B,
    preventScrollReset: M,
    viewTransition: I
  } = c, K = kE(c, PL), ae = rN(), ue = aN(_, {
    relative: B
  }), pe = A.toLowerCase() === "get" ? "get" : "post", Ae = (he) => {
    if (O && O(he), he.defaultPrevented) return;
    he.preventDefault();
    let ye = he.nativeEvent.submitter, be = (ye == null ? void 0 : ye.getAttribute("formmethod")) || A;
    ae(ye || he.currentTarget, {
      fetcherKey: m,
      method: be,
      navigate: C,
      replace: x,
      state: y,
      relative: B,
      preventScrollReset: M,
      viewTransition: I
    });
  };
  return /* @__PURE__ */ re.createElement("form", ms({
    ref: v,
    method: pe,
    action: ue,
    onSubmit: w ? O : Ae
  }, K));
});
ft.env.NODE_ENV !== "production" && (qL.displayName = "Form");
ft.env.NODE_ENV;
var Ly;
(function(c) {
  c.UseScrollRestoration = "useScrollRestoration", c.UseSubmit = "useSubmit", c.UseSubmitFetcher = "useSubmitFetcher", c.UseFetcher = "useFetcher", c.useViewTransitionState = "useViewTransitionState";
})(Ly || (Ly = {}));
var Pw;
(function(c) {
  c.UseFetcher = "useFetcher", c.UseFetchers = "useFetchers", c.UseScrollRestoration = "useScrollRestoration";
})(Pw || (Pw = {}));
function JL(c) {
  return c + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function cT(c) {
  let v = re.useContext(Cd);
  return v || (ft.env.NODE_ENV !== "production" ? dt(!1, JL(c)) : dt(!1)), v;
}
function ZL(c, v) {
  let {
    target: m,
    replace: C,
    state: w,
    preventScrollReset: x,
    relative: y,
    viewTransition: A
  } = v === void 0 ? {} : v, _ = iT(), O = bc(), B = Lv(c, {
    relative: y
  });
  return re.useCallback((M) => {
    if (LL(M, m)) {
      M.preventDefault();
      let I = C !== void 0 ? C : hs(O) === hs(B);
      _(c, {
        replace: I,
        state: w,
        preventScrollReset: x,
        relative: y,
        viewTransition: A
      });
    }
  }, [O, _, B, C, w, m, c, x, y, A]);
}
function gN(c) {
  ft.env.NODE_ENV !== "production" && Fr(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
  let v = re.useRef(EE(c)), m = re.useRef(!1), C = bc(), w = re.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    NL(C.search, m.current ? null : v.current)
  ), [C.search]), x = iT(), y = re.useCallback((A, _) => {
    const O = EE(typeof A == "function" ? A(w) : A);
    m.current = !0, x("?" + O, _);
  }, [x, w]);
  return [w, y];
}
function eN() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let tN = 0, nN = () => "__" + String(++tN) + "__";
function rN() {
  let {
    router: c
  } = cT(Ly.UseSubmit), {
    basename: v
  } = re.useContext(bl), m = CL();
  return re.useCallback(function(C, w) {
    w === void 0 && (w = {}), eN();
    let {
      action: x,
      method: y,
      encType: A,
      formData: _,
      body: O
    } = zL(C, v);
    if (w.navigate === !1) {
      let B = w.fetcherKey || nN();
      c.fetch(B, m, w.action || x, {
        preventScrollReset: w.preventScrollReset,
        formData: _,
        body: O,
        formMethod: w.method || y,
        formEncType: w.encType || A,
        flushSync: w.flushSync
      });
    } else
      c.navigate(w.action || x, {
        preventScrollReset: w.preventScrollReset,
        formData: _,
        body: O,
        formMethod: w.method || y,
        formEncType: w.encType || A,
        replace: w.replace,
        state: w.state,
        fromRouteId: m,
        flushSync: w.flushSync,
        viewTransition: w.viewTransition
      });
  }, [c, v, m]);
}
function aN(c, v) {
  let {
    relative: m
  } = v === void 0 ? {} : v, {
    basename: C
  } = re.useContext(bl), w = re.useContext(xl);
  w || (ft.env.NODE_ENV !== "production" ? dt(!1, "useFormAction must be used inside a RouteContext") : dt(!1));
  let [x] = w.matches.slice(-1), y = ms({}, Lv(c || ".", {
    relative: m
  })), A = bc();
  if (c == null) {
    y.search = A.search;
    let _ = new URLSearchParams(y.search), O = _.getAll("index");
    if (O.some((M) => M === "")) {
      _.delete("index"), O.filter((I) => I).forEach((I) => _.append("index", I));
      let M = _.toString();
      y.search = M ? "?" + M : "";
    }
  }
  return (!c || c === ".") && x.route.index && (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"), C !== "/" && (y.pathname = y.pathname === "/" ? C : fo([C, y.pathname])), hs(y);
}
function SN(c, v) {
  let {
    capture: m
  } = {};
  re.useEffect(() => {
    let C = m != null ? {
      capture: m
    } : void 0;
    return window.addEventListener("beforeunload", c, C), () => {
      window.removeEventListener("beforeunload", c, C);
    };
  }, [c, m]);
}
function iN(c, v) {
  v === void 0 && (v = {});
  let m = re.useContext(OE);
  m == null && (ft.env.NODE_ENV !== "production" ? dt(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : dt(!1));
  let {
    basename: C
  } = cT(Ly.useViewTransitionState), w = Lv(c, {
    relative: v.relative
  });
  if (!m.isTransitioning)
    return !1;
  let x = bi(m.currentLocation.pathname, C) || m.currentLocation.pathname, y = bi(m.nextLocation.pathname, C) || m.nextLocation.pathname;
  return ky(w.pathname, y) != null || ky(w.pathname, x) != null;
}
export {
  lO as $,
  sT as L,
  hN as O,
  iO as R,
  Ww as a,
  fO as b,
  sN as c,
  $w as d,
  dO as e,
  iT as f,
  cN as g,
  dN as h,
  bc as i,
  mN as j,
  yN as k,
  gN as l,
  fN as m,
  pN as n,
  SN as o,
  ft as p,
  vN as q,
  re as r,
  RL as u
};
