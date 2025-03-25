import { j as F } from "./vendor-radix-BYJ0AyiX.js";
import { K as Et, C as ig, m as Yl, n as qe, w as yr, _ as X, p as St, q as kr, r as Ew, s as Tw, v as se, x as qi, y as Of, R as Mw, z as Iw, A as jw, E as Ft, F as ur, H as Dw, J as $f, M as kw, N as Nw, O as Gn, P as og, Q as Bo, T as Rw, U as Fo, W as Lw, X as lg, Y as ug, Z as cg, $ as sg, a0 as Bw, a1 as cc, t as Sn, a as Ki, a2 as Pf, a3 as Cf, a4 as _f, f as Gi, h as Af, c as xe, a5 as Fw, a6 as Hw, a7 as Ww, D as Vw, b as zw, d as Uw, e as Yw, B as Ef, g as Tf, a8 as qw, a9 as jn, aa as fg, u as Mf } from "./main-Cs8rq8oH.js";
import { _ as Pe, c as Ae, h as Kw, R as Gw } from "./vendor-ui-utils-2_WY-nJY.js";
import { r as S, a as Xw, R as N, p as je, g as Le, d as lr, k as ql } from "./vendor-react-CuOkI7kW.js";
import { P as _e, B as dg } from "./vendor-utils-BfzDPiRN.js";
import { i as pg, u as br, R as Kl, V as Zw, T as Qw, a as Jw, g as e1, b as t1, c as vg, F as hg, C as mg, d as Dn } from "./index-CSoZbC2k.js";
import { r as cr, p as pe, q as Te, _ as Xi, k as r1 } from "./vendor-web3-DDgB3Js4.js";
import { R as n1, o as gg } from "./CheckOutlined-zhTDqrfd.js";
import { R as a1, g as yg, B as i1, u as bg, a as xg } from "./button-NFO9cKrN.js";
import { T as o1, a as l1, b as sc, c as on, d as Wd, e as zr } from "./table-CYAe8pkI.js";
import { E as u1, R as wg, P as c1, u as s1 } from "./index-C38JBnDC.js";
import { W as f1 } from "./index-COcY0cE_.js";
import { u as Vd } from "./MarketplaceProvider-DRaB_Td7.js";
const d1 = new Et("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), p1 = new Et("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), v1 = new Et("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), h1 = new Et("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), m1 = new Et("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), g1 = new Et("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), y1 = new Et("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), b1 = new Et("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), x1 = {
  "move-up": {
    inKeyframes: y1,
    outKeyframes: b1
  },
  "move-down": {
    inKeyframes: d1,
    outKeyframes: p1
  },
  "move-left": {
    inKeyframes: v1,
    outKeyframes: h1
  },
  "move-right": {
    inKeyframes: m1,
    outKeyframes: g1
  }
}, zd = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = x1[t];
  return [pg(n, a, i, e.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Sg = new Et("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Og = new Et("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), $g = new Et("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), Pg = new Et("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), w1 = new Et("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), S1 = new Et("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), O1 = new Et("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), $1 = new Et("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), P1 = {
  "slide-up": {
    inKeyframes: Sg,
    outKeyframes: Og
  },
  "slide-down": {
    inKeyframes: $g,
    outKeyframes: Pg
  },
  "slide-left": {
    inKeyframes: w1,
    outKeyframes: S1
  },
  "slide-right": {
    inKeyframes: O1,
    outKeyframes: $1
  }
}, Ud = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = P1[t];
  return [pg(n, a, i, e.motionDurationMid), {
    [`
      ${n}-enter,
      ${n}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
};
function C1(e) {
  return (t) => /* @__PURE__ */ S.createElement(ig, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ S.createElement(e, Object.assign({}, t)));
}
const Cg = (e, t, r, n) => C1((i) => {
  const {
    prefixCls: o,
    style: l
  } = i, u = S.useRef(null), [c, s] = S.useState(0), [f, d] = S.useState(0), [p, h] = br(!1, {
    value: i.open
  }), {
    getPrefixCls: m
  } = S.useContext(Yl), v = m(t, o);
  S.useEffect(() => {
    if (h(!0), typeof ResizeObserver < "u") {
      const w = new ResizeObserver((g) => {
        const b = g[0].target;
        s(b.offsetHeight + 8), d(b.offsetWidth);
      }), O = setInterval(() => {
        var g;
        const b = `.${v}-dropdown`, $ = (g = u.current) === null || g === void 0 ? void 0 : g.querySelector(b);
        $ && (clearInterval(O), w.observe($));
      }, 10);
      return () => {
        clearInterval(O), w.disconnect();
      };
    }
  }, []);
  let y = Object.assign(Object.assign({}, i), {
    style: Object.assign(Object.assign({}, l), {
      margin: 0
    }),
    open: p,
    visible: p,
    getPopupContainer: () => u.current
  });
  n && (y = n(y));
  const x = {
    paddingBottom: c,
    position: "relative",
    minWidth: f
  };
  return /* @__PURE__ */ S.createElement("div", {
    ref: u,
    style: x
  }, /* @__PURE__ */ S.createElement(e, Object.assign({}, y)));
});
var _1 = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], kn = void 0;
function A1(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, i = e.renderItem, o = e.responsive, l = e.responsiveDisabled, u = e.registerSize, c = e.itemKey, s = e.className, f = e.style, d = e.children, p = e.display, h = e.order, m = e.component, v = m === void 0 ? "div" : m, y = cr(e, _1), x = o && !p;
  function w(P) {
    u(c, P);
  }
  S.useEffect(function() {
    return function() {
      w(null);
    };
  }, []);
  var O = i && a !== kn ? i(a) : d, g;
  n || (g = {
    opacity: x ? 0 : 1,
    height: x ? 0 : kn,
    overflowY: x ? "hidden" : kn,
    order: o ? h : kn,
    pointerEvents: x ? "none" : kn,
    position: x ? "absolute" : kn
  });
  var b = {};
  x && (b["aria-hidden"] = !0);
  var $ = /* @__PURE__ */ S.createElement(v, Pe({
    className: qe(!n && r, s),
    style: pe(pe({}, g), f)
  }, b, y, {
    ref: t
  }), O);
  return o && ($ = /* @__PURE__ */ S.createElement(Kl, {
    onResize: function(A) {
      var T = A.offsetWidth;
      w(T);
    },
    disabled: l
  }, $)), $;
}
var ii = /* @__PURE__ */ S.forwardRef(A1);
ii.displayName = "Item";
function E1(e) {
  if (typeof MessageChannel > "u")
    yr(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function T1() {
  var e = S.useRef(null), t = function(n) {
    e.current || (e.current = [], E1(function() {
      Xw.unstable_batchedUpdates(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function Va(e, t) {
  var r = S.useState(t), n = X(r, 2), a = n[0], i = n[1], o = St(function(l) {
    e(function() {
      i(l);
    });
  });
  return [a, o];
}
var Ho = /* @__PURE__ */ N.createContext(null), M1 = ["component"], I1 = ["className"], j1 = ["className"], D1 = function(t, r) {
  var n = S.useContext(Ho);
  if (!n) {
    var a = t.component, i = a === void 0 ? "div" : a, o = cr(t, M1);
    return /* @__PURE__ */ S.createElement(i, Pe({}, o, {
      ref: r
    }));
  }
  var l = n.className, u = cr(n, I1), c = t.className, s = cr(t, j1);
  return /* @__PURE__ */ S.createElement(Ho.Provider, {
    value: null
  }, /* @__PURE__ */ S.createElement(ii, Pe({
    ref: r,
    className: qe(l, c)
  }, u, s)));
}, _g = /* @__PURE__ */ S.forwardRef(D1);
_g.displayName = "RawItem";
var k1 = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Ag = "responsive", Eg = "invalidate";
function N1(e) {
  return "+ ".concat(e.length, " ...");
}
function R1(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, i = a === void 0 ? [] : a, o = e.renderItem, l = e.renderRawItem, u = e.itemKey, c = e.itemWidth, s = c === void 0 ? 10 : c, f = e.ssr, d = e.style, p = e.className, h = e.maxCount, m = e.renderRest, v = e.renderRawRest, y = e.suffix, x = e.component, w = x === void 0 ? "div" : x, O = e.itemComponent, g = e.onVisibleChange, b = cr(e, k1), $ = f === "full", P = T1(), A = Va(P, null), T = X(A, 2), C = T[0], M = T[1], D = C || 0, I = Va(P, /* @__PURE__ */ new Map()), _ = X(I, 2), E = _[0], j = _[1], k = Va(P, 0), R = X(k, 2), B = R[0], H = R[1], L = Va(P, 0), V = X(L, 2), z = V[0], K = V[1], J = Va(P, 0), te = X(J, 2), ie = te[0], U = te[1], G = S.useState(null), q = X(G, 2), W = q[0], Z = q[1], Q = S.useState(null), ue = X(Q, 2), re = ue[0], ne = ue[1], de = S.useMemo(function() {
    return re === null && $ ? Number.MAX_SAFE_INTEGER : re || 0;
  }, [re, C]), Oe = S.useState(!1), Re = X(Oe, 2), Ee = Re[0], De = Re[1], it = "".concat(n, "-item"), ot = Math.max(B, z), nt = h === Ag, ze = i.length && nt, He = h === Eg, Wt = ze || typeof h == "number" && i.length > h, Fe = S.useMemo(function() {
    var ye = i;
    return ze ? C === null && $ ? ye = i : ye = i.slice(0, Math.min(i.length, D / s)) : typeof h == "number" && (ye = i.slice(0, h)), ye;
  }, [i, s, C, h, ze]), ct = S.useMemo(function() {
    return ze ? i.slice(de + 1) : i.slice(Fe.length);
  }, [i, Fe, ze, de]), Ge = S.useCallback(function(ye, ke) {
    var Xe;
    return typeof u == "function" ? u(ye) : (Xe = u && (ye == null ? void 0 : ye[u])) !== null && Xe !== void 0 ? Xe : ke;
  }, [u]), We = S.useCallback(o || function(ye) {
    return ye;
  }, [o]);
  function he(ye, ke, Xe) {
    re === ye && (ke === void 0 || ke === W) || (ne(ye), Xe || (De(ye < i.length - 1), g == null || g(ye)), ke !== void 0 && Z(ke));
  }
  function oe(ye, ke) {
    M(ke.clientWidth);
  }
  function fe(ye, ke) {
    j(function(Xe) {
      var pt = new Map(Xe);
      return ke === null ? pt.delete(ye) : pt.set(ye, ke), pt;
    });
  }
  function Se(ye, ke) {
    K(ke), H(z);
  }
  function ae(ye, ke) {
    U(ke);
  }
  function ce(ye) {
    return E.get(Ge(Fe[ye], ye));
  }
  kr(function() {
    if (D && typeof ot == "number" && Fe) {
      var ye = ie, ke = Fe.length, Xe = ke - 1;
      if (!ke) {
        he(0, null);
        return;
      }
      for (var pt = 0; pt < ke; pt += 1) {
        var Vt = ce(pt);
        if ($ && (Vt = Vt || 0), Vt === void 0) {
          he(pt - 1, void 0, !0);
          break;
        }
        if (ye += Vt, // Only one means `totalWidth` is the final width
        Xe === 0 && ye <= D || // Last two width will be the final width
        pt === Xe - 1 && ye + ce(Xe) <= D) {
          he(Xe, null);
          break;
        } else if (ye + ot > D) {
          he(pt - 1, ye - Vt - ie + z);
          break;
        }
      }
      y && ce(0) + ie > D && Z(null);
    }
  }, [D, E, z, ie, Ge, Fe]);
  var Ve = Ee && !!ct.length, et = {};
  W !== null && ze && (et = {
    position: "absolute",
    left: W,
    top: 0
  });
  var Ye = {
    prefixCls: it,
    responsive: ze,
    component: O,
    invalidate: He
  }, Ct = l ? function(ye, ke) {
    var Xe = Ge(ye, ke);
    return /* @__PURE__ */ S.createElement(Ho.Provider, {
      key: Xe,
      value: pe(pe({}, Ye), {}, {
        order: ke,
        item: ye,
        itemKey: Xe,
        registerSize: fe,
        display: ke <= de
      })
    }, l(ye, ke));
  } : function(ye, ke) {
    var Xe = Ge(ye, ke);
    return /* @__PURE__ */ S.createElement(ii, Pe({}, Ye, {
      order: ke,
      key: Xe,
      item: ye,
      renderItem: We,
      itemKey: Xe,
      registerSize: fe,
      display: ke <= de
    }));
  }, Tt, $t = {
    order: Ve ? de : Number.MAX_SAFE_INTEGER,
    className: "".concat(it, "-rest"),
    registerSize: Se,
    display: Ve
  };
  if (v)
    v && (Tt = /* @__PURE__ */ S.createElement(Ho.Provider, {
      value: pe(pe({}, Ye), $t)
    }, v(ct)));
  else {
    var Mt = m || N1;
    Tt = /* @__PURE__ */ S.createElement(ii, Pe({}, Ye, $t), typeof Mt == "function" ? Mt(ct) : Mt);
  }
  var bt = /* @__PURE__ */ S.createElement(w, Pe({
    className: qe(!He && n, p),
    style: d,
    ref: t
  }, b), Fe.map(Ct), Wt ? Tt : null, y && /* @__PURE__ */ S.createElement(ii, Pe({}, Ye, {
    responsive: nt,
    responsiveDisabled: !ze,
    order: de,
    className: "".concat(it, "-suffix"),
    registerSize: ae,
    display: !0,
    style: et
  }), y));
  return nt && (bt = /* @__PURE__ */ S.createElement(Kl, {
    onResize: oe,
    disabled: !ze
  }, bt)), bt;
}
var Zi = /* @__PURE__ */ S.forwardRef(R1);
Zi.displayName = "Overflow";
Zi.Item = _g;
Zi.RESPONSIVE = Ag;
Zi.INVALIDATE = Eg;
function Tg(e, t, r) {
  return qe({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const Mg = (e, t) => t || e, Ig = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, a;
  const {
    variant: i,
    [e]: o
  } = S.useContext(Yl), l = S.useContext(Zw), u = o == null ? void 0 : o.variant;
  let c;
  typeof t < "u" ? c = t : r === !1 ? c = "borderless" : c = (a = (n = l ?? u) !== null && n !== void 0 ? n : i) !== null && a !== void 0 ? a : "outlined";
  const s = Ew.includes(c);
  return [c, s];
}, L1 = (e) => {
  const {
    multipleSelectItemHeight: t,
    paddingXXS: r,
    lineWidth: n,
    INTERNAL_FIXED_ITEM_MARGIN: a
  } = e, i = e.max(e.calc(r).sub(n).equal(), 0), o = e.max(e.calc(i).sub(a).equal(), 0);
  return {
    basePadding: i,
    containerPadding: o,
    itemHeight: se(t),
    itemLineHeight: se(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
  };
}, B1 = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    borderRadiusSM: n,
    motionDurationSlow: a,
    paddingXS: i,
    multipleItemColorDisabled: o,
    multipleItemBorderColorDisabled: l,
    colorIcon: u,
    colorIconHover: c,
    INTERNAL_FIXED_ITEM_MARGIN: s
  } = e;
  return {
    /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */
    // =========================== Overflow ===========================
    [`${t}-selection-overflow`]: {
      position: "relative",
      display: "flex",
      flex: "auto",
      flexWrap: "wrap",
      maxWidth: "100%",
      "&-item": {
        flex: "none",
        alignSelf: "center",
        maxWidth: "100%",
        display: "inline-flex"
      },
      // ======================== Selections ==========================
      [`${t}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        marginBlock: s,
        borderRadius: n,
        cursor: "default",
        transition: `font-size ${a}, line-height ${a}, height ${a}`,
        marginInlineEnd: e.calc(s).mul(2).equal(),
        paddingInlineStart: i,
        paddingInlineEnd: e.calc(i).div(2).equal(),
        [`${t}-disabled&`]: {
          color: o,
          borderColor: l,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.calc(i).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, Tw()), {
          display: "inline-flex",
          alignItems: "center",
          color: u,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${r}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: c
          }
        })
      }
    }
  };
};
var F1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, H1 = function(t, r) {
  return /* @__PURE__ */ S.createElement(qi, Pe({}, t, {
    ref: r,
    icon: F1
  }));
}, jg = /* @__PURE__ */ S.forwardRef(H1);
je.env.NODE_ENV !== "production" && (jg.displayName = "DownOutlined");
var W1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, V1 = function(t, r) {
  return /* @__PURE__ */ S.createElement(qi, Pe({}, t, {
    ref: r,
    icon: W1
  }));
}, Dg = /* @__PURE__ */ S.forwardRef(V1);
je.env.NODE_ENV !== "production" && (Dg.displayName = "SearchOutlined");
function z1(e) {
  let {
    suffixIcon: t,
    clearIcon: r,
    menuItemSelectedIcon: n,
    removeIcon: a,
    loading: i,
    multiple: o,
    hasFeedback: l,
    prefixCls: u,
    showSuffixIcon: c,
    feedbackIcon: s,
    showArrow: f,
    componentName: d
  } = e;
  je.env.NODE_ENV !== "production" && Of(d).deprecated(!r, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const p = r ?? /* @__PURE__ */ S.createElement(Mw, null), h = (x) => t === null && !l && !f ? null : /* @__PURE__ */ S.createElement(S.Fragment, null, c !== !1 && x, l && s);
  let m = null;
  if (t !== void 0)
    m = h(t);
  else if (i)
    m = h(/* @__PURE__ */ S.createElement(a1, {
      spin: !0
    }));
  else {
    const x = `${u}-suffix`;
    m = (w) => {
      let {
        open: O,
        showSearch: g
      } = w;
      return h(O && g ? /* @__PURE__ */ S.createElement(Dg, {
        className: x
      }) : /* @__PURE__ */ S.createElement(jg, {
        className: x
      }));
    };
  }
  let v = null;
  n !== void 0 ? v = n : o ? v = /* @__PURE__ */ S.createElement(n1, null) : v = null;
  let y = null;
  return a !== void 0 ? y = a : y = /* @__PURE__ */ S.createElement(Iw, null), {
    clearIcon: p,
    suffixIcon: m,
    itemIcon: v,
    removeIcon: y
  };
}
var kg = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(lr, function() {
    var r = 1e3, n = 6e4, a = 36e5, i = "millisecond", o = "second", l = "minute", u = "hour", c = "day", s = "week", f = "month", d = "quarter", p = "year", h = "date", m = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var _ = ["th", "st", "nd", "rd"], E = I % 100;
      return "[" + I + (_[(E - 20) % 10] || _[E] || _[0]) + "]";
    } }, w = function(I, _, E) {
      var j = String(I);
      return !j || j.length >= _ ? I : "" + Array(_ + 1 - j.length).join(E) + I;
    }, O = { s: w, z: function(I) {
      var _ = -I.utcOffset(), E = Math.abs(_), j = Math.floor(E / 60), k = E % 60;
      return (_ <= 0 ? "+" : "-") + w(j, 2, "0") + ":" + w(k, 2, "0");
    }, m: function I(_, E) {
      if (_.date() < E.date()) return -I(E, _);
      var j = 12 * (E.year() - _.year()) + (E.month() - _.month()), k = _.clone().add(j, f), R = E - k < 0, B = _.clone().add(j + (R ? -1 : 1), f);
      return +(-(j + (E - k) / (R ? k - B : B - k)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: f, y: p, w: s, d: c, D: h, h: u, m: l, s: o, ms: i, Q: d }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, g = "en", b = {};
    b[g] = x;
    var $ = "$isDayjsObject", P = function(I) {
      return I instanceof M || !(!I || !I[$]);
    }, A = function I(_, E, j) {
      var k;
      if (!_) return g;
      if (typeof _ == "string") {
        var R = _.toLowerCase();
        b[R] && (k = R), E && (b[R] = E, k = R);
        var B = _.split("-");
        if (!k && B.length > 1) return I(B[0]);
      } else {
        var H = _.name;
        b[H] = _, k = H;
      }
      return !j && k && (g = k), k || !j && g;
    }, T = function(I, _) {
      if (P(I)) return I.clone();
      var E = typeof _ == "object" ? _ : {};
      return E.date = I, E.args = arguments, new M(E);
    }, C = O;
    C.l = A, C.i = P, C.w = function(I, _) {
      return T(I, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var M = function() {
      function I(E) {
        this.$L = A(E.locale, null, !0), this.parse(E), this.$x = this.$x || E.x || {}, this[$] = !0;
      }
      var _ = I.prototype;
      return _.parse = function(E) {
        this.$d = function(j) {
          var k = j.date, R = j.utc;
          if (k === null) return /* @__PURE__ */ new Date(NaN);
          if (C.u(k)) return /* @__PURE__ */ new Date();
          if (k instanceof Date) return new Date(k);
          if (typeof k == "string" && !/Z$/i.test(k)) {
            var B = k.match(v);
            if (B) {
              var H = B[2] - 1 || 0, L = (B[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(B[1], H, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, L)) : new Date(B[1], H, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, L);
            }
          }
          return new Date(k);
        }(E), this.init();
      }, _.init = function() {
        var E = this.$d;
        this.$y = E.getFullYear(), this.$M = E.getMonth(), this.$D = E.getDate(), this.$W = E.getDay(), this.$H = E.getHours(), this.$m = E.getMinutes(), this.$s = E.getSeconds(), this.$ms = E.getMilliseconds();
      }, _.$utils = function() {
        return C;
      }, _.isValid = function() {
        return this.$d.toString() !== m;
      }, _.isSame = function(E, j) {
        var k = T(E);
        return this.startOf(j) <= k && k <= this.endOf(j);
      }, _.isAfter = function(E, j) {
        return T(E) < this.startOf(j);
      }, _.isBefore = function(E, j) {
        return this.endOf(j) < T(E);
      }, _.$g = function(E, j, k) {
        return C.u(E) ? this[j] : this.set(k, E);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(E, j) {
        var k = this, R = !!C.u(j) || j, B = C.p(E), H = function(U, G) {
          var q = C.w(k.$u ? Date.UTC(k.$y, G, U) : new Date(k.$y, G, U), k);
          return R ? q : q.endOf(c);
        }, L = function(U, G) {
          return C.w(k.toDate()[U].apply(k.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), k);
        }, V = this.$W, z = this.$M, K = this.$D, J = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case p:
            return R ? H(1, 0) : H(31, 11);
          case f:
            return R ? H(1, z) : H(0, z + 1);
          case s:
            var te = this.$locale().weekStart || 0, ie = (V < te ? V + 7 : V) - te;
            return H(R ? K - ie : K + (6 - ie), z);
          case c:
          case h:
            return L(J + "Hours", 0);
          case u:
            return L(J + "Minutes", 1);
          case l:
            return L(J + "Seconds", 2);
          case o:
            return L(J + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(E) {
        return this.startOf(E, !1);
      }, _.$set = function(E, j) {
        var k, R = C.p(E), B = "set" + (this.$u ? "UTC" : ""), H = (k = {}, k[c] = B + "Date", k[h] = B + "Date", k[f] = B + "Month", k[p] = B + "FullYear", k[u] = B + "Hours", k[l] = B + "Minutes", k[o] = B + "Seconds", k[i] = B + "Milliseconds", k)[R], L = R === c ? this.$D + (j - this.$W) : j;
        if (R === f || R === p) {
          var V = this.clone().set(h, 1);
          V.$d[H](L), V.init(), this.$d = V.set(h, Math.min(this.$D, V.daysInMonth())).$d;
        } else H && this.$d[H](L);
        return this.init(), this;
      }, _.set = function(E, j) {
        return this.clone().$set(E, j);
      }, _.get = function(E) {
        return this[C.p(E)]();
      }, _.add = function(E, j) {
        var k, R = this;
        E = Number(E);
        var B = C.p(j), H = function(z) {
          var K = T(R);
          return C.w(K.date(K.date() + Math.round(z * E)), R);
        };
        if (B === f) return this.set(f, this.$M + E);
        if (B === p) return this.set(p, this.$y + E);
        if (B === c) return H(1);
        if (B === s) return H(7);
        var L = (k = {}, k[l] = n, k[u] = a, k[o] = r, k)[B] || 1, V = this.$d.getTime() + E * L;
        return C.w(V, this);
      }, _.subtract = function(E, j) {
        return this.add(-1 * E, j);
      }, _.format = function(E) {
        var j = this, k = this.$locale();
        if (!this.isValid()) return k.invalidDate || m;
        var R = E || "YYYY-MM-DDTHH:mm:ssZ", B = C.z(this), H = this.$H, L = this.$m, V = this.$M, z = k.weekdays, K = k.months, J = k.meridiem, te = function(G, q, W, Z) {
          return G && (G[q] || G(j, R)) || W[q].slice(0, Z);
        }, ie = function(G) {
          return C.s(H % 12 || 12, G, "0");
        }, U = J || function(G, q, W) {
          var Z = G < 12 ? "AM" : "PM";
          return W ? Z.toLowerCase() : Z;
        };
        return R.replace(y, function(G, q) {
          return q || function(W) {
            switch (W) {
              case "YY":
                return String(j.$y).slice(-2);
              case "YYYY":
                return C.s(j.$y, 4, "0");
              case "M":
                return V + 1;
              case "MM":
                return C.s(V + 1, 2, "0");
              case "MMM":
                return te(k.monthsShort, V, K, 3);
              case "MMMM":
                return te(K, V);
              case "D":
                return j.$D;
              case "DD":
                return C.s(j.$D, 2, "0");
              case "d":
                return String(j.$W);
              case "dd":
                return te(k.weekdaysMin, j.$W, z, 2);
              case "ddd":
                return te(k.weekdaysShort, j.$W, z, 3);
              case "dddd":
                return z[j.$W];
              case "H":
                return String(H);
              case "HH":
                return C.s(H, 2, "0");
              case "h":
                return ie(1);
              case "hh":
                return ie(2);
              case "a":
                return U(H, L, !0);
              case "A":
                return U(H, L, !1);
              case "m":
                return String(L);
              case "mm":
                return C.s(L, 2, "0");
              case "s":
                return String(j.$s);
              case "ss":
                return C.s(j.$s, 2, "0");
              case "SSS":
                return C.s(j.$ms, 3, "0");
              case "Z":
                return B;
            }
            return null;
          }(G) || B.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(E, j, k) {
        var R, B = this, H = C.p(j), L = T(E), V = (L.utcOffset() - this.utcOffset()) * n, z = this - L, K = function() {
          return C.m(B, L);
        };
        switch (H) {
          case p:
            R = K() / 12;
            break;
          case f:
            R = K();
            break;
          case d:
            R = K() / 3;
            break;
          case s:
            R = (z - V) / 6048e5;
            break;
          case c:
            R = (z - V) / 864e5;
            break;
          case u:
            R = z / a;
            break;
          case l:
            R = z / n;
            break;
          case o:
            R = z / r;
            break;
          default:
            R = z;
        }
        return k ? R : C.a(R);
      }, _.daysInMonth = function() {
        return this.endOf(f).$D;
      }, _.$locale = function() {
        return b[this.$L];
      }, _.locale = function(E, j) {
        if (!E) return this.$L;
        var k = this.clone(), R = A(E, j, !0);
        return R && (k.$L = R), k;
      }, _.clone = function() {
        return C.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, I;
    }(), D = M.prototype;
    return T.prototype = D, [["$ms", i], ["$s", o], ["$m", l], ["$H", u], ["$W", c], ["$M", f], ["$y", p], ["$D", h]].forEach(function(I) {
      D[I[1]] = function(_) {
        return this.$g(_, I[0], I[1]);
      };
    }), T.extend = function(I, _) {
      return I.$i || (I(_, M, T), I.$i = !0), T;
    }, T.locale = A, T.isDayjs = P, T.unix = function(I) {
      return T(1e3 * I);
    }, T.en = b[g], T.Ls = b, T.p = {}, T;
  });
})(kg);
var U1 = kg.exports;
const lt = /* @__PURE__ */ Le(U1);
var Ng = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(lr, function() {
    return function(r, n) {
      n.prototype.weekday = function(a) {
        var i = this.$locale().weekStart || 0, o = this.$W, l = (o < i ? o + 7 : o) - i;
        return this.$utils().u(a) ? l : this.subtract(l, "day").add(a, "day");
      };
    };
  });
})(Ng);
var Y1 = Ng.exports;
const q1 = /* @__PURE__ */ Le(Y1);
var Rg = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(lr, function() {
    return function(r, n, a) {
      var i = n.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, l = function(f, d, p, h, m) {
        var v = f.name ? f : f.$locale(), y = o(v[d]), x = o(v[p]), w = y || x.map(function(g) {
          return g.slice(0, h);
        });
        if (!m) return w;
        var O = v.weekStart;
        return w.map(function(g, b) {
          return w[(b + (O || 0)) % 7];
        });
      }, u = function() {
        return a.Ls[a.locale()];
      }, c = function(f, d) {
        return f.formats[d] || function(p) {
          return p.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(h, m, v) {
            return m || v.slice(1);
          });
        }(f.formats[d.toUpperCase()]);
      }, s = function() {
        var f = this;
        return { months: function(d) {
          return d ? d.format("MMMM") : l(f, "months");
        }, monthsShort: function(d) {
          return d ? d.format("MMM") : l(f, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return f.$locale().weekStart || 0;
        }, weekdays: function(d) {
          return d ? d.format("dddd") : l(f, "weekdays");
        }, weekdaysMin: function(d) {
          return d ? d.format("dd") : l(f, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(d) {
          return d ? d.format("ddd") : l(f, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(d) {
          return c(f.$locale(), d);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      i.localeData = function() {
        return s.bind(this)();
      }, a.localeData = function() {
        var f = u();
        return { firstDayOfWeek: function() {
          return f.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(d) {
          return c(f, d);
        }, meridiem: f.meridiem, ordinal: f.ordinal };
      }, a.months = function() {
        return l(u(), "months");
      }, a.monthsShort = function() {
        return l(u(), "monthsShort", "months", 3);
      }, a.weekdays = function(f) {
        return l(u(), "weekdays", null, null, f);
      }, a.weekdaysShort = function(f) {
        return l(u(), "weekdaysShort", "weekdays", 3, f);
      }, a.weekdaysMin = function(f) {
        return l(u(), "weekdaysMin", "weekdays", 2, f);
      };
    };
  });
})(Rg);
var K1 = Rg.exports;
const G1 = /* @__PURE__ */ Le(K1);
var Lg = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(lr, function() {
    var r = "week", n = "year";
    return function(a, i, o) {
      var l = i.prototype;
      l.week = function(u) {
        if (u === void 0 && (u = null), u !== null) return this.add(7 * (u - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var s = o(this).startOf(n).add(1, n).date(c), f = o(this).endOf(r);
          if (s.isBefore(f)) return 1;
        }
        var d = o(this).startOf(n).date(c).startOf(r).subtract(1, "millisecond"), p = this.diff(d, r, !0);
        return p < 0 ? o(this).startOf("week").week() : Math.ceil(p);
      }, l.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(Lg);
var X1 = Lg.exports;
const Z1 = /* @__PURE__ */ Le(X1);
var Bg = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(lr, function() {
    return function(r, n) {
      n.prototype.weekYear = function() {
        var a = this.month(), i = this.week(), o = this.year();
        return i === 1 && a === 11 ? o + 1 : a === 0 && i >= 52 ? o - 1 : o;
      };
    };
  });
})(Bg);
var Q1 = Bg.exports;
const J1 = /* @__PURE__ */ Le(Q1);
var Fg = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(lr, function() {
    return function(r, n) {
      var a = n.prototype, i = a.format;
      a.format = function(o) {
        var l = this, u = this.$locale();
        if (!this.isValid()) return i.bind(this)(o);
        var c = this.$utils(), s = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(f) {
          switch (f) {
            case "Q":
              return Math.ceil((l.$M + 1) / 3);
            case "Do":
              return u.ordinal(l.$D);
            case "gggg":
              return l.weekYear();
            case "GGGG":
              return l.isoWeekYear();
            case "wo":
              return u.ordinal(l.week(), "W");
            case "w":
            case "ww":
              return c.s(l.week(), f === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return c.s(l.isoWeek(), f === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return c.s(String(l.$H === 0 ? 24 : l.$H), f === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(l.$d.getTime() / 1e3);
            case "x":
              return l.$d.getTime();
            case "z":
              return "[" + l.offsetName() + "]";
            case "zzz":
              return "[" + l.offsetName("long") + "]";
            default:
              return f;
          }
        });
        return i.bind(this)(s);
      };
    };
  });
})(Fg);
var eS = Fg.exports;
const tS = /* @__PURE__ */ Le(eS);
var Hg = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(lr, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, u = {}, c = function(v) {
      return (v = +v) + (v > 68 ? 1900 : 2e3);
    }, s = function(v) {
      return function(y) {
        this[v] = +y;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z") return 0;
        var x = y.match(/([+-]|\d\d)/g), w = 60 * x[1] + (+x[2] || 0);
        return w === 0 ? 0 : x[0] === "+" ? -w : w;
      }(v);
    }], d = function(v) {
      var y = u[v];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, p = function(v, y) {
      var x, w = u.meridiem;
      if (w) {
        for (var O = 1; O <= 24; O += 1) if (v.indexOf(w(O, 0, y)) > -1) {
          x = O > 12;
          break;
        }
      } else x = v === (y ? "pm" : "PM");
      return x;
    }, h = { A: [l, function(v) {
      this.afternoon = p(v, !1);
    }], a: [l, function(v) {
      this.afternoon = p(v, !0);
    }], Q: [a, function(v) {
      this.month = 3 * (v - 1) + 1;
    }], S: [a, function(v) {
      this.milliseconds = 100 * +v;
    }], SS: [i, function(v) {
      this.milliseconds = 10 * +v;
    }], SSS: [/\d{3}/, function(v) {
      this.milliseconds = +v;
    }], s: [o, s("seconds")], ss: [o, s("seconds")], m: [o, s("minutes")], mm: [o, s("minutes")], H: [o, s("hours")], h: [o, s("hours")], HH: [o, s("hours")], hh: [o, s("hours")], D: [o, s("day")], DD: [i, s("day")], Do: [l, function(v) {
      var y = u.ordinal, x = v.match(/\d+/);
      if (this.day = x[0], y) for (var w = 1; w <= 31; w += 1) y(w).replace(/\[|\]/g, "") === v && (this.day = w);
    }], w: [o, s("week")], ww: [i, s("week")], M: [o, s("month")], MM: [i, s("month")], MMM: [l, function(v) {
      var y = d("months"), x = (d("monthsShort") || y.map(function(w) {
        return w.slice(0, 3);
      })).indexOf(v) + 1;
      if (x < 1) throw new Error();
      this.month = x % 12 || x;
    }], MMMM: [l, function(v) {
      var y = d("months").indexOf(v) + 1;
      if (y < 1) throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, s("year")], YY: [i, function(v) {
      this.year = c(v);
    }], YYYY: [/\d{4}/, s("year")], Z: f, ZZ: f };
    function m(v) {
      var y, x;
      y = v, x = u && u.formats;
      for (var w = (v = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(T, C, M) {
        var D = M && M.toUpperCase();
        return C || x[M] || r[M] || x[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, _, E) {
          return _ || E.slice(1);
        });
      })).match(n), O = w.length, g = 0; g < O; g += 1) {
        var b = w[g], $ = h[b], P = $ && $[0], A = $ && $[1];
        w[g] = A ? { regex: P, parser: A } : b.replace(/^\[|\]$/g, "");
      }
      return function(T) {
        for (var C = {}, M = 0, D = 0; M < O; M += 1) {
          var I = w[M];
          if (typeof I == "string") D += I.length;
          else {
            var _ = I.regex, E = I.parser, j = T.slice(D), k = _.exec(j)[0];
            E.call(C, k), T = T.replace(k, "");
          }
        }
        return function(R) {
          var B = R.afternoon;
          if (B !== void 0) {
            var H = R.hours;
            B ? H < 12 && (R.hours += 12) : H === 12 && (R.hours = 0), delete R.afternoon;
          }
        }(C), C;
      };
    }
    return function(v, y, x) {
      x.p.customParseFormat = !0, v && v.parseTwoDigitYear && (c = v.parseTwoDigitYear);
      var w = y.prototype, O = w.parse;
      w.parse = function(g) {
        var b = g.date, $ = g.utc, P = g.args;
        this.$u = $;
        var A = P[1];
        if (typeof A == "string") {
          var T = P[2] === !0, C = P[3] === !0, M = T || C, D = P[2];
          C && (D = P[2]), u = this.$locale(), !T && D && (u = x.Ls[D]), this.$d = function(j, k, R, B) {
            try {
              if (["x", "X"].indexOf(k) > -1) return new Date((k === "X" ? 1e3 : 1) * j);
              var H = m(k)(j), L = H.year, V = H.month, z = H.day, K = H.hours, J = H.minutes, te = H.seconds, ie = H.milliseconds, U = H.zone, G = H.week, q = /* @__PURE__ */ new Date(), W = z || (L || V ? 1 : q.getDate()), Z = L || q.getFullYear(), Q = 0;
              L && !V || (Q = V > 0 ? V - 1 : q.getMonth());
              var ue, re = K || 0, ne = J || 0, de = te || 0, Oe = ie || 0;
              return U ? new Date(Date.UTC(Z, Q, W, re, ne, de, Oe + 60 * U.offset * 1e3)) : R ? new Date(Date.UTC(Z, Q, W, re, ne, de, Oe)) : (ue = new Date(Z, Q, W, re, ne, de, Oe), G && (ue = B(ue).week(G).toDate()), ue);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(b, A, $, x), this.init(), D && D !== !0 && (this.$L = this.locale(D).$L), M && b != this.format(A) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
        } else if (A instanceof Array) for (var I = A.length, _ = 1; _ <= I; _ += 1) {
          P[1] = A[_ - 1];
          var E = x.apply(this, P);
          if (E.isValid()) {
            this.$d = E.$d, this.$L = E.$L, this.init();
            break;
          }
          _ === I && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else O.call(this, g);
      };
    };
  });
})(Hg);
var rS = Hg.exports;
const nS = /* @__PURE__ */ Le(rS);
lt.extend(nS);
lt.extend(tS);
lt.extend(q1);
lt.extend(G1);
lt.extend(Z1);
lt.extend(J1);
lt.extend(function(e, t) {
  var r = t.prototype, n = r.format;
  r.format = function(i) {
    var o = (i || "").replace("Wo", "wo");
    return n.bind(this)(o);
  };
});
var aS = {
  // ar_EG:
  // az_AZ:
  // bg_BG:
  bn_BD: "bn-bd",
  by_BY: "be",
  // ca_ES:
  // cs_CZ:
  // da_DK:
  // de_DE:
  // el_GR:
  en_GB: "en-gb",
  en_US: "en",
  // es_ES:
  // et_EE:
  // fa_IR:
  // fi_FI:
  fr_BE: "fr",
  // todo: dayjs has no fr_BE locale, use fr at present
  fr_CA: "fr-ca",
  // fr_FR:
  // ga_IE:
  // gl_ES:
  // he_IL:
  // hi_IN:
  // hr_HR:
  // hu_HU:
  hy_AM: "hy-am",
  // id_ID:
  // is_IS:
  // it_IT:
  // ja_JP:
  // ka_GE:
  // kk_KZ:
  // km_KH:
  kmr_IQ: "ku",
  // kn_IN:
  // ko_KR:
  // ku_IQ: // previous ku in antd
  // lt_LT:
  // lv_LV:
  // mk_MK:
  // ml_IN:
  // mn_MN:
  // ms_MY:
  // nb_NO:
  // ne_NP:
  nl_BE: "nl-be",
  // nl_NL:
  // pl_PL:
  pt_BR: "pt-br",
  // pt_PT:
  // ro_RO:
  // ru_RU:
  // sk_SK:
  // sl_SI:
  // sr_RS:
  // sv_SE:
  // ta_IN:
  // th_TH:
  // tr_TR:
  // uk_UA:
  // ur_PK:
  // vi_VN:
  zh_CN: "zh-cn",
  zh_HK: "zh-hk",
  zh_TW: "zh-tw"
}, ln = function(t) {
  var r = aS[t];
  return r || t.split("_")[0];
}, Yd = function() {
  jw(!1, "Not match any format. Please help to fire a issue about this.");
}, iS = {
  // get
  getNow: function() {
    var t = lt();
    return typeof t.tz == "function" ? t.tz() : t;
  },
  getFixedDate: function(t) {
    return lt(t, ["YYYY-M-DD", "YYYY-MM-DD"]);
  },
  getEndDate: function(t) {
    return t.endOf("month");
  },
  getWeekDay: function(t) {
    var r = t.locale("en");
    return r.weekday() + r.localeData().firstDayOfWeek();
  },
  getYear: function(t) {
    return t.year();
  },
  getMonth: function(t) {
    return t.month();
  },
  getDate: function(t) {
    return t.date();
  },
  getHour: function(t) {
    return t.hour();
  },
  getMinute: function(t) {
    return t.minute();
  },
  getSecond: function(t) {
    return t.second();
  },
  getMillisecond: function(t) {
    return t.millisecond();
  },
  // set
  addYear: function(t, r) {
    return t.add(r, "year");
  },
  addMonth: function(t, r) {
    return t.add(r, "month");
  },
  addDate: function(t, r) {
    return t.add(r, "day");
  },
  setYear: function(t, r) {
    return t.year(r);
  },
  setMonth: function(t, r) {
    return t.month(r);
  },
  setDate: function(t, r) {
    return t.date(r);
  },
  setHour: function(t, r) {
    return t.hour(r);
  },
  setMinute: function(t, r) {
    return t.minute(r);
  },
  setSecond: function(t, r) {
    return t.second(r);
  },
  setMillisecond: function(t, r) {
    return t.millisecond(r);
  },
  // Compare
  isAfter: function(t, r) {
    return t.isAfter(r);
  },
  isValidate: function(t) {
    return t.isValid();
  },
  locale: {
    getWeekFirstDay: function(t) {
      return lt().locale(ln(t)).localeData().firstDayOfWeek();
    },
    getWeekFirstDate: function(t, r) {
      return r.locale(ln(t)).weekday(0);
    },
    getWeek: function(t, r) {
      return r.locale(ln(t)).week();
    },
    getShortWeekDays: function(t) {
      return lt().locale(ln(t)).localeData().weekdaysMin();
    },
    getShortMonths: function(t) {
      return lt().locale(ln(t)).localeData().monthsShort();
    },
    format: function(t, r, n) {
      return r.locale(ln(t)).format(n);
    },
    parse: function(t, r, n) {
      for (var a = ln(t), i = 0; i < n.length; i += 1) {
        var o = n[i], l = r;
        if (o.includes("wo") || o.includes("Wo")) {
          for (var u = l.split("-")[0], c = l.split("-")[1], s = lt(u, "YYYY").startOf("year").locale(a), f = 0; f <= 52; f += 1) {
            var d = s.add(f, "week");
            if (d.format("Wo") === c)
              return d;
          }
          return Yd(), null;
        }
        var p = lt(l, o, !0).locale(a);
        if (p.isValid())
          return p;
      }
      return r && Yd(), null;
    }
  }
};
function Gl(e, t) {
  return e !== void 0 ? e : t ? "bottomRight" : "bottomLeft";
}
function Wg(e, t) {
  var r = Gl(e, t), n = r == null ? void 0 : r.toLowerCase().endsWith("right"), a = n ? "insetInlineEnd" : "insetInlineStart";
  return t && (a = ["insetInlineStart", "insetInlineEnd"].find(function(i) {
    return i !== a;
  })), a;
}
var sr = /* @__PURE__ */ S.createContext(null), oS = {
  bottomLeft: {
    points: ["tl", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ["tr", "br"],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["bl", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ["br", "tr"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
function Vg(e) {
  var t = e.popupElement, r = e.popupStyle, n = e.popupClassName, a = e.popupAlign, i = e.transitionName, o = e.getPopupContainer, l = e.children, u = e.range, c = e.placement, s = e.builtinPlacements, f = s === void 0 ? oS : s, d = e.direction, p = e.visible, h = e.onClose, m = S.useContext(sr), v = m.prefixCls, y = "".concat(v, "-dropdown"), x = Gl(c, d === "rtl");
  return /* @__PURE__ */ S.createElement(Qw, {
    showAction: [],
    hideAction: ["click"],
    popupPlacement: x,
    builtinPlacements: f,
    prefixCls: y,
    popupTransitionName: i,
    popup: t,
    popupAlign: a,
    popupVisible: p,
    popupClassName: qe(n, Te(Te({}, "".concat(y, "-range"), u), "".concat(y, "-rtl"), d === "rtl")),
    popupStyle: r,
    stretch: "minWidth",
    getPopupContainer: o,
    onPopupVisibleChange: function(O) {
      O || h();
    }
  }, l);
}
function If(e, t) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0", n = String(e); n.length < t; )
    n = "".concat(r).concat(n);
  return n;
}
function _n(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function oi(e, t, r) {
  var n = Ft(e);
  return n[t] = r, n;
}
function Xl(e, t) {
  var r = {}, n = t || Object.keys(e);
  return n.forEach(function(a) {
    e[a] !== void 0 && (r[a] = e[a]);
  }), r;
}
function zg(e, t, r) {
  if (r)
    return r;
  switch (e) {
    case "time":
      return t.fieldTimeFormat;
    case "datetime":
      return t.fieldDateTimeFormat;
    case "month":
      return t.fieldMonthFormat;
    case "year":
      return t.fieldYearFormat;
    case "quarter":
      return t.fieldQuarterFormat;
    case "week":
      return t.fieldWeekFormat;
    default:
      return t.fieldDateFormat;
  }
}
function Ug(e, t, r) {
  var n = r !== void 0 ? r : t[t.length - 1], a = t.find(function(i) {
    return e[i];
  });
  return n !== a ? e[a] : void 0;
}
function Yg(e) {
  return Xl(e, ["placement", "builtinPlacements", "popupAlign", "getPopupContainer", "transitionName", "direction"]);
}
function jf(e, t, r, n) {
  je.env.NODE_ENV !== "production" && (ur(!t, "'dateRender' is deprecated. Please use 'cellRender' instead."), ur(!r, "'monthCellRender' is deprecated. Please use 'cellRender' instead."));
  var a = S.useMemo(function() {
    return e || function(o, l) {
      var u = o;
      return t && l.type === "date" ? t(u, l.today) : r && l.type === "month" ? r(u, l.locale) : l.originNode;
    };
  }, [e, r, t]), i = S.useCallback(function(o, l) {
    return a(o, pe(pe({}, l), {}, {
      range: n
    }));
  }, [a, n]);
  return i;
}
function qg(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = S.useState([!1, !1]), a = X(n, 2), i = a[0], o = a[1], l = function(s, f) {
    o(function(d) {
      return oi(d, f, s);
    });
  }, u = S.useMemo(function() {
    return i.map(function(c, s) {
      if (c)
        return !0;
      var f = e[s];
      return f ? !!(!r[s] && !f || f && t(f, {
        activeIndex: s
      })) : !1;
    });
  }, [e, i, t, r]);
  return [u, l];
}
function Kg(e, t, r, n, a) {
  var i = "", o = [];
  return e && o.push(a ? "hh" : "HH"), t && o.push("mm"), r && o.push("ss"), i = o.join(":"), n && (i += ".SSS"), a && (i += " A"), i;
}
function lS(e, t, r, n, a, i) {
  var o = e.fieldDateTimeFormat, l = e.fieldDateFormat, u = e.fieldTimeFormat, c = e.fieldMonthFormat, s = e.fieldYearFormat, f = e.fieldWeekFormat, d = e.fieldQuarterFormat, p = e.yearFormat, h = e.cellYearFormat, m = e.cellQuarterFormat, v = e.dayFormat, y = e.cellDateFormat, x = Kg(t, r, n, a, i);
  return pe(pe({}, e), {}, {
    fieldDateTimeFormat: o || "YYYY-MM-DD ".concat(x),
    fieldDateFormat: l || "YYYY-MM-DD",
    fieldTimeFormat: u || x,
    fieldMonthFormat: c || "YYYY-MM",
    fieldYearFormat: s || "YYYY",
    fieldWeekFormat: f || "gggg-wo",
    fieldQuarterFormat: d || "YYYY-[Q]Q",
    yearFormat: p || "YYYY",
    cellYearFormat: h || "YYYY",
    cellQuarterFormat: m || "[Q]Q",
    cellDateFormat: y || v || "D"
  });
}
function Gg(e, t) {
  var r = t.showHour, n = t.showMinute, a = t.showSecond, i = t.showMillisecond, o = t.use12Hours;
  return N.useMemo(function() {
    return lS(e, r, n, a, i, o);
  }, [e, r, n, a, i, o]);
}
function za(e, t, r) {
  return r ?? t.some(function(n) {
    return e.includes(n);
  });
}
var uS = [
  // 'format',
  "showNow",
  "showHour",
  "showMinute",
  "showSecond",
  "showMillisecond",
  "use12Hours",
  "hourStep",
  "minuteStep",
  "secondStep",
  "millisecondStep",
  "hideDisabledOptions",
  "defaultValue",
  "disabledHours",
  "disabledMinutes",
  "disabledSeconds",
  "disabledMilliseconds",
  "disabledTime",
  "changeOnScroll",
  "defaultOpenValue"
];
function cS(e) {
  var t = Xl(e, uS), r = e.format, n = e.picker, a = null;
  return r && (a = r, Array.isArray(a) && (a = a[0]), a = Xi(a) === "object" ? a.format : a), n === "time" && (t.format = a), [t, a];
}
function sS(e) {
  return e && typeof e == "string";
}
function Xg(e, t, r, n) {
  return [e, t, r, n].some(function(a) {
    return a !== void 0;
  });
}
function Zg(e, t, r, n, a) {
  var i = t, o = r, l = n;
  if (!e && !i && !o && !l && !a)
    i = !0, o = !0, l = !0;
  else if (e) {
    var u, c, s, f = [i, o, l].some(function(h) {
      return h === !1;
    }), d = [i, o, l].some(function(h) {
      return h === !0;
    }), p = f ? !0 : !d;
    i = (u = i) !== null && u !== void 0 ? u : p, o = (c = o) !== null && c !== void 0 ? c : p, l = (s = l) !== null && s !== void 0 ? s : p;
  }
  return [i, o, l, a];
}
function Qg(e) {
  var t = e.showTime, r = cS(e), n = X(r, 2), a = n[0], i = n[1], o = t && Xi(t) === "object" ? t : {}, l = pe(pe({
    defaultOpenValue: o.defaultOpenValue || o.defaultValue
  }, a), o), u = l.showMillisecond, c = l.showHour, s = l.showMinute, f = l.showSecond, d = Xg(c, s, f, u), p = Zg(d, c, s, f, u), h = X(p, 3);
  return c = h[0], s = h[1], f = h[2], [l, pe(pe({}, l), {}, {
    showHour: c,
    showMinute: s,
    showSecond: f,
    showMillisecond: u
  }), l.format, i];
}
function Jg(e, t, r, n, a) {
  var i = e === "time";
  if (e === "datetime" || i) {
    for (var o = n, l = zg(e, a, null), u = l, c = [t, r], s = 0; s < c.length; s += 1) {
      var f = _n(c[s])[0];
      if (sS(f)) {
        u = f;
        break;
      }
    }
    var d = o.showHour, p = o.showMinute, h = o.showSecond, m = o.showMillisecond, v = o.use12Hours, y = za(u, ["a", "A", "LT", "LLL", "LTS"], v), x = Xg(d, p, h, m);
    x || (d = za(u, ["H", "h", "k", "LT", "LLL"]), p = za(u, ["m", "LT", "LLL"]), h = za(u, ["s", "LTS"]), m = za(u, ["SSS"]));
    var w = Zg(x, d, p, h, m), O = X(w, 3);
    d = O[0], p = O[1], h = O[2];
    var g = t || Kg(d, p, h, m, y);
    return pe(pe({}, o), {}, {
      // Format
      format: g,
      // Show Config
      showHour: d,
      showMinute: p,
      showSecond: h,
      showMillisecond: m,
      use12Hours: y
    });
  }
  return null;
}
function fS(e, t, r) {
  if (je.env.NODE_ENV !== "production" && r && ur(!1, "`clearIcon` will be removed in future. Please use `allowClear` instead."), t === !1)
    return null;
  var n = t && Xi(t) === "object" ? t : {};
  return n.clearIcon || r || /* @__PURE__ */ S.createElement("span", {
    className: "".concat(e, "-clear-btn")
  });
}
var fc = 7;
function Zr(e, t, r) {
  return !e && !t || e === t ? !0 : !e || !t ? !1 : r();
}
function qc(e, t, r) {
  return Zr(t, r, function() {
    var n = Math.floor(e.getYear(t) / 10), a = Math.floor(e.getYear(r) / 10);
    return n === a;
  });
}
function On(e, t, r) {
  return Zr(t, r, function() {
    return e.getYear(t) === e.getYear(r);
  });
}
function qd(e, t) {
  var r = Math.floor(e.getMonth(t) / 3);
  return r + 1;
}
function dS(e, t, r) {
  return Zr(t, r, function() {
    return On(e, t, r) && qd(e, t) === qd(e, r);
  });
}
function Df(e, t, r) {
  return Zr(t, r, function() {
    return On(e, t, r) && e.getMonth(t) === e.getMonth(r);
  });
}
function kf(e, t, r) {
  return Zr(t, r, function() {
    return On(e, t, r) && Df(e, t, r) && e.getDate(t) === e.getDate(r);
  });
}
function ey(e, t, r) {
  return Zr(t, r, function() {
    return e.getHour(t) === e.getHour(r) && e.getMinute(t) === e.getMinute(r) && e.getSecond(t) === e.getSecond(r);
  });
}
function ty(e, t, r) {
  return Zr(t, r, function() {
    return kf(e, t, r) && ey(e, t, r) && e.getMillisecond(t) === e.getMillisecond(r);
  });
}
function ri(e, t, r, n) {
  return Zr(r, n, function() {
    var a = e.locale.getWeekFirstDate(t, r), i = e.locale.getWeekFirstDate(t, n);
    return On(e, a, i) && e.locale.getWeek(t, r) === e.locale.getWeek(t, n);
  });
}
function At(e, t, r, n, a) {
  switch (a) {
    case "date":
      return kf(e, r, n);
    case "week":
      return ri(e, t.locale, r, n);
    case "month":
      return Df(e, r, n);
    case "quarter":
      return dS(e, r, n);
    case "year":
      return On(e, r, n);
    case "decade":
      return qc(e, r, n);
    case "time":
      return ey(e, r, n);
    default:
      return ty(e, r, n);
  }
}
function Zl(e, t, r, n) {
  return !t || !r || !n ? !1 : e.isAfter(n, t) && e.isAfter(r, n);
}
function go(e, t, r, n, a) {
  return At(e, t, r, n, a) ? !0 : e.isAfter(r, n);
}
function pS(e, t, r) {
  var n = t.locale.getWeekFirstDay(e), a = t.setDate(r, 1), i = t.getWeekDay(a), o = t.addDate(a, n - i);
  return t.getMonth(o) === t.getMonth(r) && t.getDate(o) > 1 && (o = t.addDate(o, -7)), o;
}
function mt(e, t) {
  var r = t.generateConfig, n = t.locale, a = t.format;
  return e ? typeof a == "function" ? a(e) : r.locale.format(n.locale, e, a) : "";
}
function Wo(e, t, r) {
  var n = t, a = ["getHour", "getMinute", "getSecond", "getMillisecond"], i = ["setHour", "setMinute", "setSecond", "setMillisecond"];
  return i.forEach(function(o, l) {
    r ? n = e[o](n, e[a[l]](r)) : n = e[o](n, 0);
  }), n;
}
function vS(e, t, r, n, a) {
  var i = St(function(o, l) {
    return !!(r && r(o, l) || n && e.isAfter(n, o) && !At(e, t, n, o, l.type) || a && e.isAfter(o, a) && !At(e, t, a, o, l.type));
  });
  return i;
}
function hS(e, t, r) {
  return S.useMemo(function() {
    var n = zg(e, t, r), a = _n(n), i = a[0], o = Xi(i) === "object" && i.type === "mask" ? i.format : null;
    return [
      // Format list
      a.map(function(l) {
        return typeof l == "string" || typeof l == "function" ? l : l.format;
      }),
      // Mask Format
      o
    ];
  }, [e, t, r]);
}
function mS(e, t, r) {
  return typeof e[0] == "function" || r ? !0 : t;
}
function gS(e, t, r, n) {
  var a = St(function(i, o) {
    var l = pe({
      type: t
    }, o);
    if (delete l.activeIndex, // Date object is invalid
    !e.isValidate(i) || // Date is disabled by `disabledDate`
    r && r(i, l))
      return !0;
    if ((t === "date" || t === "time") && n) {
      var u, c = o && o.activeIndex === 1 ? "end" : "start", s = ((u = n.disabledTime) === null || u === void 0 ? void 0 : u.call(n, i, c, {
        from: l.from
      })) || {}, f = s.disabledHours, d = s.disabledMinutes, p = s.disabledSeconds, h = s.disabledMilliseconds, m = n.disabledHours, v = n.disabledMinutes, y = n.disabledSeconds, x = f || m, w = d || v, O = p || y, g = e.getHour(i), b = e.getMinute(i), $ = e.getSecond(i), P = e.getMillisecond(i);
      if (x && x().includes(g) || w && w(g).includes(b) || O && O(g, b).includes($) || h && h(g, b, $).includes(P))
        return !0;
    }
    return !1;
  });
  return a;
}
function yo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = S.useMemo(function() {
    var n = e && _n(e);
    return t && n && (n[1] = n[1] || n[0]), n;
  }, [e, t]);
  return r;
}
function ry(e, t) {
  var r = e.generateConfig, n = e.locale, a = e.picker, i = a === void 0 ? "date" : a, o = e.prefixCls, l = o === void 0 ? "rc-picker" : o, u = e.styles, c = u === void 0 ? {} : u, s = e.classNames, f = s === void 0 ? {} : s, d = e.order, p = d === void 0 ? !0 : d, h = e.components, m = h === void 0 ? {} : h, v = e.inputRender, y = e.allowClear, x = e.clearIcon, w = e.needConfirm, O = e.multiple, g = e.format, b = e.inputReadOnly, $ = e.disabledDate, P = e.minDate, A = e.maxDate, T = e.showTime, C = e.value, M = e.defaultValue, D = e.pickerValue, I = e.defaultPickerValue, _ = yo(C), E = yo(M), j = yo(D), k = yo(I), R = i === "date" && T ? "datetime" : i, B = R === "time" || R === "datetime", H = B || O, L = w ?? B, V = Qg(e), z = X(V, 4), K = z[0], J = z[1], te = z[2], ie = z[3], U = Gg(n, J), G = S.useMemo(function() {
    return Jg(R, te, ie, K, U);
  }, [R, te, ie, K, U]);
  je.env.NODE_ENV !== "production" && i === "time" && ["disabledHours", "disabledMinutes", "disabledSeconds"].some(function(Re) {
    return e[Re];
  }) && ur(!1, "'disabledHours', 'disabledMinutes', 'disabledSeconds' will be removed in the next major version, please use 'disabledTime' instead.");
  var q = S.useMemo(function() {
    return pe(pe({}, e), {}, {
      prefixCls: l,
      locale: U,
      picker: i,
      styles: c,
      classNames: f,
      order: p,
      components: pe({
        input: v
      }, m),
      clearIcon: fS(l, y, x),
      showTime: G,
      value: _,
      defaultValue: E,
      pickerValue: j,
      defaultPickerValue: k
    }, t == null ? void 0 : t());
  }, [e]), W = hS(R, U, g), Z = X(W, 2), Q = Z[0], ue = Z[1], re = mS(Q, b, O), ne = vS(r, n, $, P, A), de = gS(r, i, ne, G), Oe = S.useMemo(function() {
    return pe(pe({}, q), {}, {
      needConfirm: L,
      inputReadOnly: re,
      disabledDate: ne
    });
  }, [q, L, re, ne]);
  return [Oe, R, H, Q, ue, de];
}
function yS(e, t, r) {
  var n = br(t, {
    value: e
  }), a = X(n, 2), i = a[0], o = a[1], l = N.useRef(e), u = N.useRef(), c = function() {
    yr.cancel(u.current);
  }, s = St(function() {
    o(l.current), r && i !== l.current && r(l.current);
  }), f = St(function(d, p) {
    c(), l.current = d, d || p ? s() : u.current = yr(s);
  });
  return N.useEffect(function() {
    return c;
  }, []), [i, f];
}
function ny(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = arguments.length > 3 ? arguments[3] : void 0, a = r.every(function(s) {
    return s;
  }) ? !1 : e, i = yS(a, t || !1, n), o = X(i, 2), l = o[0], u = o[1];
  function c(s) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (!f.inherit || l) && u(s, f.force);
  }
  return [l, c];
}
function ay(e) {
  var t = S.useRef();
  return S.useImperativeHandle(e, function() {
    var r;
    return {
      nativeElement: (r = t.current) === null || r === void 0 ? void 0 : r.nativeElement,
      focus: function(a) {
        var i;
        (i = t.current) === null || i === void 0 || i.focus(a);
      },
      blur: function() {
        var a;
        (a = t.current) === null || a === void 0 || a.blur();
      }
    };
  }), t;
}
function iy(e, t) {
  return S.useMemo(function() {
    return e || (t ? (ur(!1, "`ranges` is deprecated. Please use `presets` instead."), Object.entries(t).map(function(r) {
      var n = X(r, 2), a = n[0], i = n[1];
      return {
        label: a,
        value: i
      };
    })) : []);
  }, [e, t]);
}
function Nf(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, n = S.useRef(t);
  n.current = t, Dw(function() {
    if (e)
      n.current(e);
    else {
      var a = yr(function() {
        n.current(e);
      }, r);
      return function() {
        yr.cancel(a);
      };
    }
  }, [e]);
}
function oy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = S.useState(0), a = X(n, 2), i = a[0], o = a[1], l = S.useState(!1), u = X(l, 2), c = u[0], s = u[1], f = S.useRef([]), d = S.useRef(null), p = function(y) {
    s(y);
  }, h = function(y) {
    return y && (d.current = y), d.current;
  }, m = function(y) {
    var x = f.current, w = new Set(x.filter(function(g) {
      return y[g] || t[g];
    })), O = x[x.length - 1] === 0 ? 1 : 0;
    return w.size >= 2 || e[O] ? null : O;
  };
  return Nf(c || r, function() {
    c || (f.current = []);
  }), S.useEffect(function() {
    c && f.current.push(i);
  }, [c, i]), [c, p, h, i, o, m, f.current];
}
function bS(e, t, r, n, a, i) {
  var o = r[r.length - 1], l = function(c, s) {
    var f = X(e, 2), d = f[0], p = f[1], h = pe(pe({}, s), {}, {
      from: Ug(e, r)
    });
    return o === 1 && t[0] && d && // Same date isOK
    !At(n, a, d, c, h.type) && // Before start date
    n.isAfter(d, c) || o === 0 && t[1] && p && // Same date isOK
    !At(n, a, p, c, h.type) && // After end date
    n.isAfter(c, p) ? !0 : i == null ? void 0 : i(c, h);
  };
  return l;
}
function ni(e, t, r, n) {
  switch (t) {
    case "date":
    case "week":
      return e.addMonth(r, n);
    case "month":
    case "quarter":
      return e.addYear(r, n);
    case "year":
      return e.addYear(r, n * 10);
    case "decade":
      return e.addYear(r, n * 100);
    default:
      return r;
  }
}
var dc = [];
function ly(e, t, r, n, a, i, o, l) {
  var u = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : dc, c = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : dc, s = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : dc, f = arguments.length > 11 ? arguments[11] : void 0, d = arguments.length > 12 ? arguments[12] : void 0, p = arguments.length > 13 ? arguments[13] : void 0, h = o === "time", m = i || 0, v = function(j) {
    var k = e.getNow();
    return h && (k = Wo(e, k)), u[j] || r[j] || k;
  }, y = X(c, 2), x = y[0], w = y[1], O = br(function() {
    return v(0);
  }, {
    value: x
  }), g = X(O, 2), b = g[0], $ = g[1], P = br(function() {
    return v(1);
  }, {
    value: w
  }), A = X(P, 2), T = A[0], C = A[1], M = S.useMemo(function() {
    var E = [b, T][m];
    return h ? E : Wo(e, E, s[m]);
  }, [h, b, T, m, e, s]), D = function(j) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "panel", R = [$, C][m];
    R(j);
    var B = [b, T];
    B[m] = j, f && (!At(e, t, b, B[0], o) || !At(e, t, T, B[1], o)) && f(B, {
      source: k,
      range: m === 1 ? "end" : "start",
      mode: n
    });
  }, I = function(j, k) {
    if (l) {
      var R = {
        date: "month",
        week: "month",
        month: "year",
        quarter: "year"
      }, B = R[o];
      if (B && !At(e, t, j, k, B))
        return ni(e, o, k, -1);
      if (o === "year" && j) {
        var H = Math.floor(e.getYear(j) / 10), L = Math.floor(e.getYear(k) / 10);
        if (H !== L)
          return ni(e, o, k, -1);
      }
    }
    return k;
  }, _ = S.useRef(null);
  return kr(function() {
    if (a && !u[m]) {
      var E = h ? null : e.getNow();
      if (_.current !== null && _.current !== m ? E = [b, T][m ^ 1] : r[m] ? E = m === 0 ? r[0] : I(r[0], r[1]) : r[m ^ 1] && (E = r[m ^ 1]), E) {
        d && e.isAfter(d, E) && (E = d);
        var j = l ? ni(e, o, E, 1) : E;
        p && e.isAfter(j, p) && (E = l ? ni(e, o, p, -1) : p), D(E, "reset");
      }
    }
  }, [a, m, r[m]]), S.useEffect(function() {
    a ? _.current = m : _.current = null;
  }, [a, m]), kr(function() {
    a && u && u[m] && D(u[m], "reset");
  }, [a, m]), [M, D];
}
function uy(e, t) {
  var r = S.useRef(e), n = S.useState({}), a = X(n, 2), i = a[1], o = function(c) {
    return c && t !== void 0 ? t : r.current;
  }, l = function(c) {
    r.current = c, i({});
  };
  return [o, l, o(!0)];
}
var xS = [];
function cy(e, t, r) {
  var n = function(o) {
    return o.map(function(l) {
      return mt(l, {
        generateConfig: e,
        locale: t,
        format: r[0]
      });
    });
  }, a = function(o, l) {
    for (var u = Math.max(o.length, l.length), c = -1, s = 0; s < u; s += 1) {
      var f = o[s] || null, d = l[s] || null;
      if (f !== d && !ty(e, f, d)) {
        c = s;
        break;
      }
    }
    return [c < 0, c !== 0];
  };
  return [n, a];
}
function sy(e, t) {
  return Ft(e).sort(function(r, n) {
    return t.isAfter(r, n) ? 1 : -1;
  });
}
function wS(e) {
  var t = uy(e), r = X(t, 2), n = r[0], a = r[1], i = St(function() {
    a(e);
  });
  return S.useEffect(function() {
    i();
  }, [e]), [n, a];
}
function fy(e, t, r, n, a, i, o, l, u) {
  var c = br(i, {
    value: o
  }), s = X(c, 2), f = s[0], d = s[1], p = f || xS, h = wS(p), m = X(h, 2), v = m[0], y = m[1], x = cy(e, t, r), w = X(x, 2), O = w[0], g = w[1], b = St(function(P) {
    var A = Ft(P);
    if (n)
      for (var T = 0; T < 2; T += 1)
        A[T] = A[T] || null;
    else a && (A = sy(A.filter(function(E) {
      return E;
    }), e));
    var C = g(v(), A), M = X(C, 2), D = M[0], I = M[1];
    if (!D && (y(A), l)) {
      var _ = O(A);
      l(A, _, {
        range: I ? "end" : "start"
      });
    }
  }), $ = function() {
    u && u(v());
  };
  return [p, d, v, b, $];
}
function dy(e, t, r, n, a, i, o, l, u, c) {
  var s = e.generateConfig, f = e.locale, d = e.picker, p = e.onChange, h = e.allowEmpty, m = e.order, v = i.some(function(D) {
    return D;
  }) ? !1 : m, y = cy(s, f, o), x = X(y, 2), w = x[0], O = x[1], g = uy(t), b = X(g, 2), $ = b[0], P = b[1], A = St(function() {
    P(t);
  });
  S.useEffect(function() {
    A();
  }, [t]);
  var T = St(function(D) {
    var I = D === null, _ = Ft(D || $());
    if (I)
      for (var E = Math.max(i.length, _.length), j = 0; j < E; j += 1)
        i[j] || (_[j] = null);
    v && _[0] && _[1] && (_ = sy(_, s)), a(_);
    var k = _, R = X(k, 2), B = R[0], H = R[1], L = !B, V = !H, z = h ? (
      // Validate empty start
      (!L || h[0]) && // Validate empty end
      (!V || h[1])
    ) : !0, K = !m || L || V || At(s, f, B, H, d) || s.isAfter(H, B), J = (
      // Validate start
      (!B || !c(B, {
        activeIndex: 0
      })) && // Validate end
      (!H || !c(H, {
        from: B,
        activeIndex: 1
      }))
    ), te = (
      // Null value is from clear button
      I || // Normal check
      z && K && J
    );
    if (te) {
      r(_);
      var ie = O(_, t), U = X(ie, 1), G = U[0];
      p && !G && p(
        // Return null directly if all date are empty
        I && _.every(function(q) {
          return !q;
        }) ? null : _,
        w(_)
      );
    }
    return te;
  }), C = St(function(D, I) {
    var _ = oi($(), D, n()[D]);
    P(_), I && T();
  }), M = !l && !u;
  return Nf(!M, function() {
    M && (T(), a(t), A());
  }, 2), [C, T];
}
function py(e, t, r, n, a) {
  return t !== "date" && t !== "time" ? !1 : r !== void 0 ? r : n !== void 0 ? n : !a && (e === "date" || e === "time");
}
function SS(e, t, r, n, a, i) {
  var o = e;
  function l(f, d, p) {
    var h = i[f](o), m = p.find(function(w) {
      return w.value === h;
    });
    if (!m || m.disabled) {
      var v = p.filter(function(w) {
        return !w.disabled;
      }), y = Ft(v).reverse(), x = y.find(function(w) {
        return w.value <= h;
      }) || v[0];
      x && (h = x.value, o = i[d](o, h));
    }
    return h;
  }
  var u = l("getHour", "setHour", t()), c = l("getMinute", "setMinute", r(u)), s = l("getSecond", "setSecond", n(u, c));
  return l("getMillisecond", "setMillisecond", a(u, c, s)), o;
}
function bo() {
  return [];
}
function xo(e, t) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 2, o = [], l = r >= 1 ? r | 0 : 1, u = e; u <= t; u += l) {
    var c = a.includes(u);
    (!c || !n) && o.push({
      label: If(u, i),
      value: u,
      disabled: c
    });
  }
  return o;
}
function Rf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = t || {}, a = n.use12Hours, i = n.hourStep, o = i === void 0 ? 1 : i, l = n.minuteStep, u = l === void 0 ? 1 : l, c = n.secondStep, s = c === void 0 ? 1 : c, f = n.millisecondStep, d = f === void 0 ? 100 : f, p = n.hideDisabledOptions, h = n.disabledTime, m = n.disabledHours, v = n.disabledMinutes, y = n.disabledSeconds, x = S.useMemo(function() {
    return r || e.getNow();
  }, [r, e]);
  if (je.env.NODE_ENV !== "production") {
    var w = 24 % o === 0, O = 60 % u === 0, g = 60 % s === 0;
    ur(w, "`hourStep` ".concat(o, " is invalid. It should be a factor of 24.")), ur(O, "`minuteStep` ".concat(u, " is invalid. It should be a factor of 60.")), ur(g, "`secondStep` ".concat(s, " is invalid. It should be a factor of 60."));
  }
  var b = S.useCallback(function(H) {
    var L = (h == null ? void 0 : h(H)) || {};
    return [L.disabledHours || m || bo, L.disabledMinutes || v || bo, L.disabledSeconds || y || bo, L.disabledMilliseconds || bo];
  }, [h, m, v, y]), $ = S.useMemo(function() {
    return b(x);
  }, [x, b]), P = X($, 4), A = P[0], T = P[1], C = P[2], M = P[3], D = S.useCallback(function(H, L, V, z) {
    var K = xo(0, 23, o, p, H()), J = a ? K.map(function(G) {
      return pe(pe({}, G), {}, {
        label: If(G.value % 12 || 12, 2)
      });
    }) : K, te = function(q) {
      return xo(0, 59, u, p, L(q));
    }, ie = function(q, W) {
      return xo(0, 59, s, p, V(q, W));
    }, U = function(q, W, Z) {
      return xo(0, 999, d, p, z(q, W, Z), 3);
    };
    return [J, te, ie, U];
  }, [p, o, a, d, u, s]), I = S.useMemo(function() {
    return D(A, T, C, M);
  }, [D, A, T, C, M]), _ = X(I, 4), E = _[0], j = _[1], k = _[2], R = _[3], B = function(L, V) {
    var z = function() {
      return E;
    }, K = j, J = k, te = R;
    if (V) {
      var ie = b(V), U = X(ie, 4), G = U[0], q = U[1], W = U[2], Z = U[3], Q = D(G, q, W, Z), ue = X(Q, 4), re = ue[0], ne = ue[1], de = ue[2], Oe = ue[3];
      z = function() {
        return re;
      }, K = ne, J = de, te = Oe;
    }
    var Re = SS(L, z, K, J, te, e);
    return Re;
  };
  return [
    // getValidTime
    B,
    // Units
    E,
    j,
    k,
    R
  ];
}
function OS(e) {
  var t = e.mode, r = e.internalMode, n = e.renderExtraFooter, a = e.showNow, i = e.showTime, o = e.onSubmit, l = e.onNow, u = e.invalid, c = e.needConfirm, s = e.generateConfig, f = e.disabledDate, d = S.useContext(sr), p = d.prefixCls, h = d.locale, m = d.button, v = m === void 0 ? "button" : m, y = s.getNow(), x = Rf(s, i, y), w = X(x, 1), O = w[0], g = n == null ? void 0 : n(t), b = f(y, {
    type: t
  }), $ = function() {
    if (!b) {
      var I = O(y);
      l(I);
    }
  }, P = "".concat(p, "-now"), A = "".concat(P, "-btn"), T = a && /* @__PURE__ */ S.createElement("li", {
    className: P
  }, /* @__PURE__ */ S.createElement("a", {
    className: qe(A, b && "".concat(A, "-disabled")),
    "aria-disabled": b,
    onClick: $
  }, r === "date" ? h.today : h.now)), C = c && /* @__PURE__ */ S.createElement("li", {
    className: "".concat(p, "-ok")
  }, /* @__PURE__ */ S.createElement(v, {
    disabled: u,
    onClick: o
  }, h.ok)), M = (T || C) && /* @__PURE__ */ S.createElement("ul", {
    className: "".concat(p, "-ranges")
  }, T, C);
  return !g && !M ? null : /* @__PURE__ */ S.createElement("div", {
    className: "".concat(p, "-footer")
  }, g && /* @__PURE__ */ S.createElement("div", {
    className: "".concat(p, "-footer-extra")
  }, g), M);
}
function vy(e, t, r) {
  function n(a, i) {
    var o = a.findIndex(function(u) {
      return At(e, t, u, i, r);
    });
    if (o === -1)
      return [].concat(Ft(a), [i]);
    var l = Ft(a);
    return l.splice(o, 1), l;
  }
  return n;
}
var An = /* @__PURE__ */ S.createContext(null);
function Ql() {
  return S.useContext(An);
}
function Oa(e, t) {
  var r = e.prefixCls, n = e.generateConfig, a = e.locale, i = e.disabledDate, o = e.minDate, l = e.maxDate, u = e.cellRender, c = e.hoverValue, s = e.hoverRangeValue, f = e.onHover, d = e.values, p = e.pickerValue, h = e.onSelect, m = e.prevIcon, v = e.nextIcon, y = e.superPrevIcon, x = e.superNextIcon, w = n.getNow(), O = {
    now: w,
    values: d,
    pickerValue: p,
    prefixCls: r,
    disabledDate: i,
    minDate: o,
    maxDate: l,
    cellRender: u,
    hoverValue: c,
    hoverRangeValue: s,
    onHover: f,
    locale: a,
    generateConfig: n,
    onSelect: h,
    panelType: t,
    // Icons
    prevIcon: m,
    nextIcon: v,
    superPrevIcon: y,
    superNextIcon: x
  };
  return [O, w];
}
var Tr = /* @__PURE__ */ S.createContext({});
je.env.NODE_ENV !== "production" && (Tr.displayName = "PickerHackContext");
function Qi(e) {
  for (var t = e.rowNum, r = e.colNum, n = e.baseDate, a = e.getCellDate, i = e.prefixColumn, o = e.rowClassName, l = e.titleFormat, u = e.getCellText, c = e.getCellClassName, s = e.headerCells, f = e.cellSelection, d = f === void 0 ? !0 : f, p = e.disabledDate, h = Ql(), m = h.prefixCls, v = h.panelType, y = h.now, x = h.disabledDate, w = h.cellRender, O = h.onHover, g = h.hoverValue, b = h.hoverRangeValue, $ = h.generateConfig, P = h.values, A = h.locale, T = h.onSelect, C = p || x, M = "".concat(m, "-cell"), D = S.useContext(Tr), I = D.onCellDblClick, _ = function(V) {
    return P.some(function(z) {
      return z && At($, A, V, z, v);
    });
  }, E = [], j = 0; j < t; j += 1) {
    for (var k = [], R = void 0, B = function() {
      var V = j * r + H, z = a(n, V), K = C == null ? void 0 : C(z, {
        type: v
      });
      H === 0 && (R = z, i && k.push(i(R)));
      var J = !1, te = !1, ie = !1;
      if (d && b) {
        var U = X(b, 2), G = U[0], q = U[1];
        J = Zl($, G, q, z), te = At($, A, z, G, v), ie = At($, A, z, q, v);
      }
      var W = l ? mt(z, {
        locale: A,
        format: l,
        generateConfig: $
      }) : void 0, Z = /* @__PURE__ */ S.createElement("div", {
        className: "".concat(M, "-inner")
      }, u(z));
      k.push(/* @__PURE__ */ S.createElement("td", {
        key: H,
        title: W,
        className: qe(M, pe(Te(Te(Te(Te(Te(Te({}, "".concat(M, "-disabled"), K), "".concat(M, "-hover"), (g || []).some(function(Q) {
          return At($, A, z, Q, v);
        })), "".concat(M, "-in-range"), J && !te && !ie), "".concat(M, "-range-start"), te), "".concat(M, "-range-end"), ie), "".concat(m, "-cell-selected"), !b && // WeekPicker use row instead
        v !== "week" && _(z)), c(z))),
        onClick: function() {
          K || T(z);
        },
        onDoubleClick: function() {
          !K && I && I();
        },
        onMouseEnter: function() {
          K || O == null || O(z);
        },
        onMouseLeave: function() {
          K || O == null || O(null);
        }
      }, w ? w(z, {
        prefixCls: m,
        originNode: Z,
        today: y,
        type: v,
        locale: A
      }) : Z));
    }, H = 0; H < r; H += 1)
      B();
    E.push(/* @__PURE__ */ S.createElement("tr", {
      key: j,
      className: o == null ? void 0 : o(R)
    }, k));
  }
  return /* @__PURE__ */ S.createElement("div", {
    className: "".concat(m, "-body")
  }, /* @__PURE__ */ S.createElement("table", {
    className: "".concat(m, "-content")
  }, s && /* @__PURE__ */ S.createElement("thead", null, /* @__PURE__ */ S.createElement("tr", null, s)), /* @__PURE__ */ S.createElement("tbody", null, E)));
}
var wo = {
  visibility: "hidden"
};
function $a(e) {
  var t = e.offset, r = e.superOffset, n = e.onChange, a = e.getStart, i = e.getEnd, o = e.children, l = Ql(), u = l.prefixCls, c = l.prevIcon, s = c === void 0 ? "‹" : c, f = l.nextIcon, d = f === void 0 ? "›" : f, p = l.superPrevIcon, h = p === void 0 ? "«" : p, m = l.superNextIcon, v = m === void 0 ? "»" : m, y = l.minDate, x = l.maxDate, w = l.generateConfig, O = l.locale, g = l.pickerValue, b = l.panelType, $ = "".concat(u, "-header"), P = S.useContext(Tr), A = P.hidePrev, T = P.hideNext, C = P.hideHeader, M = S.useMemo(function() {
    if (!y || !t || !i)
      return !1;
    var L = i(t(-1, g));
    return !go(w, O, L, y, b);
  }, [y, t, g, i, w, O, b]), D = S.useMemo(function() {
    if (!y || !r || !i)
      return !1;
    var L = i(r(-1, g));
    return !go(w, O, L, y, b);
  }, [y, r, g, i, w, O, b]), I = S.useMemo(function() {
    if (!x || !t || !a)
      return !1;
    var L = a(t(1, g));
    return !go(w, O, x, L, b);
  }, [x, t, g, a, w, O, b]), _ = S.useMemo(function() {
    if (!x || !r || !a)
      return !1;
    var L = a(r(1, g));
    return !go(w, O, x, L, b);
  }, [x, r, g, a, w, O, b]), E = function(V) {
    t && n(t(V, g));
  }, j = function(V) {
    r && n(r(V, g));
  };
  if (C)
    return null;
  var k = "".concat($, "-prev-btn"), R = "".concat($, "-next-btn"), B = "".concat($, "-super-prev-btn"), H = "".concat($, "-super-next-btn");
  return /* @__PURE__ */ S.createElement("div", {
    className: $
  }, r && /* @__PURE__ */ S.createElement("button", {
    type: "button",
    "aria-label": "super-prev-year",
    onClick: function() {
      return j(-1);
    },
    tabIndex: -1,
    className: qe(B, D && "".concat(B, "-disabled")),
    disabled: D,
    style: A ? wo : {}
  }, h), t && /* @__PURE__ */ S.createElement("button", {
    type: "button",
    "aria-label": "prev-year",
    onClick: function() {
      return E(-1);
    },
    tabIndex: -1,
    className: qe(k, M && "".concat(k, "-disabled")),
    disabled: M,
    style: A ? wo : {}
  }, s), /* @__PURE__ */ S.createElement("div", {
    className: "".concat($, "-view")
  }, o), t && /* @__PURE__ */ S.createElement("button", {
    type: "button",
    "aria-label": "next-year",
    onClick: function() {
      return E(1);
    },
    tabIndex: -1,
    className: qe(R, I && "".concat(R, "-disabled")),
    disabled: I,
    style: T ? wo : {}
  }, d), r && /* @__PURE__ */ S.createElement("button", {
    type: "button",
    "aria-label": "super-next-year",
    onClick: function() {
      return j(1);
    },
    tabIndex: -1,
    className: qe(H, _ && "".concat(H, "-disabled")),
    disabled: _,
    style: T ? wo : {}
  }, v));
}
function Jl(e) {
  var t = e.prefixCls, r = e.panelName, n = r === void 0 ? "date" : r, a = e.locale, i = e.generateConfig, o = e.pickerValue, l = e.onPickerValueChange, u = e.onModeChange, c = e.mode, s = c === void 0 ? "date" : c, f = e.disabledDate, d = e.onSelect, p = e.onHover, h = e.showWeek, m = "".concat(t, "-").concat(n, "-panel"), v = "".concat(t, "-cell"), y = s === "week", x = Oa(e, s), w = X(x, 2), O = w[0], g = w[1], b = i.locale.getWeekFirstDay(a.locale), $ = i.setDate(o, 1), P = pS(a.locale, i, $), A = i.getMonth(o), T = h === void 0 ? y : h, C = T ? function(L) {
    var V = f == null ? void 0 : f(L, {
      type: "week"
    });
    return /* @__PURE__ */ S.createElement("td", {
      key: "week",
      className: qe(v, "".concat(v, "-week"), Te({}, "".concat(v, "-disabled"), V)),
      onClick: function() {
        V || d(L);
      },
      onMouseEnter: function() {
        V || p == null || p(L);
      },
      onMouseLeave: function() {
        V || p == null || p(null);
      }
    }, /* @__PURE__ */ S.createElement("div", {
      className: "".concat(v, "-inner")
    }, i.locale.getWeek(a.locale, L)));
  } : null, M = [], D = a.shortWeekDays || (i.locale.getShortWeekDays ? i.locale.getShortWeekDays(a.locale) : []);
  C && M.push(/* @__PURE__ */ S.createElement("th", {
    key: "empty",
    "aria-label": "empty cell"
  }));
  for (var I = 0; I < fc; I += 1)
    M.push(/* @__PURE__ */ S.createElement("th", {
      key: I
    }, D[(I + b) % fc]));
  var _ = function(V, z) {
    return i.addDate(V, z);
  }, E = function(V) {
    return mt(V, {
      locale: a,
      format: a.cellDateFormat,
      generateConfig: i
    });
  }, j = function(V) {
    var z = Te(Te({}, "".concat(t, "-cell-in-view"), Df(i, V, o)), "".concat(t, "-cell-today"), kf(i, V, g));
    return z;
  }, k = a.shortMonths || (i.locale.getShortMonths ? i.locale.getShortMonths(a.locale) : []), R = /* @__PURE__ */ S.createElement("button", {
    type: "button",
    "aria-label": "year panel",
    key: "year",
    onClick: function() {
      u("year", o);
    },
    tabIndex: -1,
    className: "".concat(t, "-year-btn")
  }, mt(o, {
    locale: a,
    format: a.yearFormat,
    generateConfig: i
  })), B = /* @__PURE__ */ S.createElement("button", {
    type: "button",
    "aria-label": "month panel",
    key: "month",
    onClick: function() {
      u("month", o);
    },
    tabIndex: -1,
    className: "".concat(t, "-month-btn")
  }, a.monthFormat ? mt(o, {
    locale: a,
    format: a.monthFormat,
    generateConfig: i
  }) : k[A]), H = a.monthBeforeYear ? [B, R] : [R, B];
  return /* @__PURE__ */ S.createElement(An.Provider, {
    value: O
  }, /* @__PURE__ */ S.createElement("div", {
    className: qe(m, h && "".concat(m, "-show-week"))
  }, /* @__PURE__ */ S.createElement($a, {
    offset: function(V) {
      return i.addMonth(o, V);
    },
    superOffset: function(V) {
      return i.addYear(o, V);
    },
    onChange: l,
    getStart: function(V) {
      return i.setDate(V, 1);
    },
    getEnd: function(V) {
      var z = i.setDate(V, 1);
      return z = i.addMonth(z, 1), i.addDate(z, -1);
    }
  }, H), /* @__PURE__ */ S.createElement(Qi, Pe({
    titleFormat: a.fieldDateFormat
  }, e, {
    colNum: fc,
    rowNum: 6,
    baseDate: P,
    headerCells: M,
    getCellDate: _,
    getCellText: E,
    getCellClassName: j,
    prefixColumn: C,
    cellSelection: !y
  }))));
}
var $S = 1 / 3;
function PS(e, t) {
  var r = S.useRef(!1), n = S.useRef(null), a = S.useRef(null), i = function() {
    return r.current;
  }, o = function() {
    yr.cancel(n.current), r.current = !1;
  }, l = S.useRef(), u = function() {
    var f = e.current;
    if (a.current = null, l.current = 0, f) {
      var d = f.querySelector('[data-value="'.concat(t, '"]')), p = f.querySelector("li"), h = function m() {
        o(), r.current = !0, l.current += 1;
        var v = f.scrollTop, y = p.offsetTop, x = d.offsetTop, w = x - y;
        if (x === 0 && d !== p || !Jw(f)) {
          l.current <= 5 && (n.current = yr(m));
          return;
        }
        var O = v + (w - v) * $S, g = Math.abs(w - O);
        if (a.current !== null && a.current < g) {
          o();
          return;
        }
        if (a.current = g, g <= 1) {
          f.scrollTop = w, o();
          return;
        }
        f.scrollTop = O, n.current = yr(m);
      };
      d && p && h();
    }
  }, c = St(u);
  return [c, o, i];
}
var CS = 300;
function Ua(e) {
  var t = e.units, r = e.value, n = e.optionalValue, a = e.type, i = e.onChange, o = e.onHover, l = e.onDblClick, u = e.changeOnScroll, c = Ql(), s = c.prefixCls, f = c.cellRender, d = c.now, p = c.locale, h = "".concat(s, "-time-panel"), m = "".concat(s, "-time-panel-cell"), v = S.useRef(null), y = S.useRef(), x = function() {
    clearTimeout(y.current);
  }, w = PS(v, r ?? n), O = X(w, 3), g = O[0], b = O[1], $ = O[2];
  kr(function() {
    return g(), x(), function() {
      b(), x();
    };
  }, [r, n, t]);
  var P = function(C) {
    x();
    var M = C.target;
    !$() && u && (y.current = setTimeout(function() {
      var D = v.current, I = D.querySelector("li").offsetTop, _ = Array.from(D.querySelectorAll("li")), E = _.map(function(H) {
        return H.offsetTop - I;
      }), j = E.map(function(H, L) {
        return t[L].disabled ? Number.MAX_SAFE_INTEGER : Math.abs(H - M.scrollTop);
      }), k = Math.min.apply(Math, Ft(j)), R = j.findIndex(function(H) {
        return H === k;
      }), B = t[R];
      B && !B.disabled && i(B.value);
    }, CS));
  }, A = "".concat(h, "-column");
  return /* @__PURE__ */ S.createElement("ul", {
    className: A,
    ref: v,
    "data-type": a,
    onScroll: P
  }, t.map(function(T) {
    var C = T.label, M = T.value, D = T.disabled, I = /* @__PURE__ */ S.createElement("div", {
      className: "".concat(m, "-inner")
    }, C);
    return /* @__PURE__ */ S.createElement("li", {
      key: M,
      className: qe(m, Te(Te({}, "".concat(m, "-selected"), r === M), "".concat(m, "-disabled"), D)),
      onClick: function() {
        D || i(M);
      },
      onDoubleClick: function() {
        !D && l && l();
      },
      onMouseEnter: function() {
        o(M);
      },
      onMouseLeave: function() {
        o(null);
      },
      "data-value": M
    }, f ? f(M, {
      prefixCls: s,
      originNode: I,
      today: d,
      type: "time",
      subType: a,
      locale: p
    }) : I);
  }));
}
function Ur(e) {
  return e < 12;
}
function _S(e) {
  var t = e.showHour, r = e.showMinute, n = e.showSecond, a = e.showMillisecond, i = e.use12Hours, o = e.changeOnScroll, l = Ql(), u = l.prefixCls, c = l.values, s = l.generateConfig, f = l.locale, d = l.onSelect, p = l.onHover, h = p === void 0 ? function() {
  } : p, m = l.pickerValue, v = (c == null ? void 0 : c[0]) || null, y = S.useContext(Tr), x = y.onCellDblClick, w = Rf(s, e, v), O = X(w, 5), g = O[0], b = O[1], $ = O[2], P = O[3], A = O[4], T = function(ce) {
    var Ve = v && s[ce](v), et = m && s[ce](m);
    return [Ve, et];
  }, C = T("getHour"), M = X(C, 2), D = M[0], I = M[1], _ = T("getMinute"), E = X(_, 2), j = E[0], k = E[1], R = T("getSecond"), B = X(R, 2), H = B[0], L = B[1], V = T("getMillisecond"), z = X(V, 2), K = z[0], J = z[1], te = D === null ? null : Ur(D) ? "am" : "pm", ie = S.useMemo(function() {
    return i ? Ur(D) ? b.filter(function(ae) {
      return Ur(ae.value);
    }) : b.filter(function(ae) {
      return !Ur(ae.value);
    }) : b;
  }, [D, b, i]), U = function(ce, Ve) {
    var et, Ye = ce.filter(function(Ct) {
      return !Ct.disabled;
    });
    return Ve ?? // Fallback to enabled value
    (Ye == null || (et = Ye[0]) === null || et === void 0 ? void 0 : et.value);
  }, G = U(b, D), q = S.useMemo(function() {
    return $(G);
  }, [$, G]), W = U(q, j), Z = S.useMemo(function() {
    return P(G, W);
  }, [P, G, W]), Q = U(Z, H), ue = S.useMemo(function() {
    return A(G, W, Q);
  }, [A, G, W, Q]), re = U(ue, K), ne = S.useMemo(function() {
    if (!i)
      return [];
    var ae = s.getNow(), ce = s.setHour(ae, 6), Ve = s.setHour(ae, 18), et = function(Ct, Tt) {
      var $t = f.cellMeridiemFormat;
      return $t ? mt(Ct, {
        generateConfig: s,
        locale: f,
        format: $t
      }) : Tt;
    };
    return [{
      label: et(ce, "AM"),
      value: "am",
      disabled: b.every(function(Ye) {
        return Ye.disabled || !Ur(Ye.value);
      })
    }, {
      label: et(Ve, "PM"),
      value: "pm",
      disabled: b.every(function(Ye) {
        return Ye.disabled || Ur(Ye.value);
      })
    }];
  }, [b, i, s, f]), de = function(ce) {
    var Ve = g(ce);
    d(Ve);
  }, Oe = S.useMemo(function() {
    var ae = v || m || s.getNow(), ce = function(et) {
      return et != null;
    };
    return ce(D) ? (ae = s.setHour(ae, D), ae = s.setMinute(ae, j), ae = s.setSecond(ae, H), ae = s.setMillisecond(ae, K)) : ce(I) ? (ae = s.setHour(ae, I), ae = s.setMinute(ae, k), ae = s.setSecond(ae, L), ae = s.setMillisecond(ae, J)) : ce(G) && (ae = s.setHour(ae, G), ae = s.setMinute(ae, W), ae = s.setSecond(ae, Q), ae = s.setMillisecond(ae, re)), ae;
  }, [v, m, D, j, H, K, G, W, Q, re, I, k, L, J, s]), Re = function(ce, Ve) {
    return ce === null ? null : s[Ve](Oe, ce);
  }, Ee = function(ce) {
    return Re(ce, "setHour");
  }, De = function(ce) {
    return Re(ce, "setMinute");
  }, it = function(ce) {
    return Re(ce, "setSecond");
  }, ot = function(ce) {
    return Re(ce, "setMillisecond");
  }, nt = function(ce) {
    return ce === null ? null : ce === "am" && !Ur(D) ? s.setHour(Oe, D - 12) : ce === "pm" && Ur(D) ? s.setHour(Oe, D + 12) : Oe;
  }, ze = function(ce) {
    de(Ee(ce));
  }, He = function(ce) {
    de(De(ce));
  }, Wt = function(ce) {
    de(it(ce));
  }, Fe = function(ce) {
    de(ot(ce));
  }, ct = function(ce) {
    de(nt(ce));
  }, Ge = function(ce) {
    h(Ee(ce));
  }, We = function(ce) {
    h(De(ce));
  }, he = function(ce) {
    h(it(ce));
  }, oe = function(ce) {
    h(ot(ce));
  }, fe = function(ce) {
    h(nt(ce));
  }, Se = {
    onDblClick: x,
    changeOnScroll: o
  };
  return /* @__PURE__ */ S.createElement("div", {
    className: "".concat(u, "-content")
  }, t && /* @__PURE__ */ S.createElement(Ua, Pe({
    units: ie,
    value: D,
    optionalValue: I,
    type: "hour",
    onChange: ze,
    onHover: Ge
  }, Se)), r && /* @__PURE__ */ S.createElement(Ua, Pe({
    units: q,
    value: j,
    optionalValue: k,
    type: "minute",
    onChange: He,
    onHover: We
  }, Se)), n && /* @__PURE__ */ S.createElement(Ua, Pe({
    units: Z,
    value: H,
    optionalValue: L,
    type: "second",
    onChange: Wt,
    onHover: he
  }, Se)), a && /* @__PURE__ */ S.createElement(Ua, Pe({
    units: ue,
    value: K,
    optionalValue: J,
    type: "millisecond",
    onChange: Fe,
    onHover: oe
  }, Se)), i && /* @__PURE__ */ S.createElement(Ua, Pe({
    units: ne,
    value: te,
    type: "meridiem",
    onChange: ct,
    onHover: fe
  }, Se)));
}
function hy(e) {
  var t = e.prefixCls, r = e.value, n = e.locale, a = e.generateConfig, i = e.showTime, o = i || {}, l = o.format, u = "".concat(t, "-time-panel"), c = Oa(e, "time"), s = X(c, 1), f = s[0];
  return /* @__PURE__ */ S.createElement(An.Provider, {
    value: f
  }, /* @__PURE__ */ S.createElement("div", {
    className: qe(u)
  }, /* @__PURE__ */ S.createElement($a, null, r ? mt(r, {
    locale: n,
    format: l,
    generateConfig: a
  }) : " "), /* @__PURE__ */ S.createElement(_S, i)));
}
function AS(e) {
  var t = e.prefixCls, r = e.generateConfig, n = e.showTime, a = e.onSelect, i = e.value, o = e.pickerValue, l = e.onHover, u = "".concat(t, "-datetime-panel"), c = Rf(r, n), s = X(c, 1), f = s[0], d = function(v) {
    return i ? Wo(r, v, i) : Wo(r, v, o);
  }, p = function(v) {
    l == null || l(v && d(v));
  }, h = function(v) {
    var y = d(v);
    a(f(y, y));
  };
  return /* @__PURE__ */ S.createElement("div", {
    className: u
  }, /* @__PURE__ */ S.createElement(Jl, Pe({}, e, {
    onSelect: h,
    onHover: p
  })), /* @__PURE__ */ S.createElement(hy, e));
}
function ES(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = "".concat(t, "-decade-panel"), u = Oa(e, "decade"), c = X(u, 1), s = c[0], f = function(b) {
    var $ = Math.floor(n.getYear(a) / 100) * 100;
    return n.setYear(b, $);
  }, d = function(b) {
    var $ = f(b);
    return n.addYear($, 99);
  }, p = f(a), h = d(a), m = n.addYear(p, -10), v = function(b, $) {
    return n.addYear(b, $ * 10);
  }, y = function(b) {
    var $ = r.cellYearFormat, P = mt(b, {
      locale: r,
      format: $,
      generateConfig: n
    }), A = mt(n.addYear(b, 9), {
      locale: r,
      format: $,
      generateConfig: n
    });
    return "".concat(P, "-").concat(A);
  }, x = function(b) {
    return Te({}, "".concat(t, "-cell-in-view"), qc(n, b, p) || qc(n, b, h) || Zl(n, p, h, b));
  }, w = i ? function(g, b) {
    var $ = n.setDate(g, 1), P = n.setMonth($, 0), A = n.setYear(P, Math.floor(n.getYear(P) / 10) * 10), T = n.addYear(A, 10), C = n.addDate(T, -1);
    return i(A, b) && i(C, b);
  } : null, O = "".concat(mt(p, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }), "-").concat(mt(h, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ S.createElement(An.Provider, {
    value: s
  }, /* @__PURE__ */ S.createElement("div", {
    className: l
  }, /* @__PURE__ */ S.createElement($a, {
    superOffset: function(b) {
      return n.addYear(a, b * 100);
    },
    onChange: o,
    getStart: f,
    getEnd: d
  }, O), /* @__PURE__ */ S.createElement(Qi, Pe({}, e, {
    disabledDate: w,
    colNum: 3,
    rowNum: 4,
    baseDate: m,
    getCellDate: v,
    getCellText: y,
    getCellClassName: x
  }))));
}
function TS(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = e.onModeChange, u = "".concat(t, "-month-panel"), c = Oa(e, "month"), s = X(c, 1), f = s[0], d = n.setMonth(a, 0), p = r.shortMonths || (n.locale.getShortMonths ? n.locale.getShortMonths(r.locale) : []), h = function(O, g) {
    return n.addMonth(O, g);
  }, m = function(O) {
    var g = n.getMonth(O);
    return r.monthFormat ? mt(O, {
      locale: r,
      format: r.monthFormat,
      generateConfig: n
    }) : p[g];
  }, v = function() {
    return Te({}, "".concat(t, "-cell-in-view"), !0);
  }, y = i ? function(w, O) {
    var g = n.setDate(w, 1), b = n.setMonth(g, n.getMonth(g) + 1), $ = n.addDate(b, -1);
    return i(g, O) && i($, O);
  } : null, x = /* @__PURE__ */ S.createElement("button", {
    type: "button",
    key: "year",
    "aria-label": "year panel",
    onClick: function() {
      l("year");
    },
    tabIndex: -1,
    className: "".concat(t, "-year-btn")
  }, mt(a, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ S.createElement(An.Provider, {
    value: f
  }, /* @__PURE__ */ S.createElement("div", {
    className: u
  }, /* @__PURE__ */ S.createElement($a, {
    superOffset: function(O) {
      return n.addYear(a, O);
    },
    onChange: o,
    getStart: function(O) {
      return n.setMonth(O, 0);
    },
    getEnd: function(O) {
      return n.setMonth(O, 11);
    }
  }, x), /* @__PURE__ */ S.createElement(Qi, Pe({}, e, {
    disabledDate: y,
    titleFormat: r.fieldMonthFormat,
    colNum: 3,
    rowNum: 4,
    baseDate: d,
    getCellDate: h,
    getCellText: m,
    getCellClassName: v
  }))));
}
function MS(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.onPickerValueChange, o = e.onModeChange, l = "".concat(t, "-quarter-panel"), u = Oa(e, "quarter"), c = X(u, 1), s = c[0], f = n.setMonth(a, 0), d = function(y, x) {
    return n.addMonth(y, x * 3);
  }, p = function(y) {
    return mt(y, {
      locale: r,
      format: r.cellQuarterFormat,
      generateConfig: n
    });
  }, h = function() {
    return Te({}, "".concat(t, "-cell-in-view"), !0);
  }, m = /* @__PURE__ */ S.createElement("button", {
    type: "button",
    key: "year",
    "aria-label": "year panel",
    onClick: function() {
      o("year");
    },
    tabIndex: -1,
    className: "".concat(t, "-year-btn")
  }, mt(a, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ S.createElement(An.Provider, {
    value: s
  }, /* @__PURE__ */ S.createElement("div", {
    className: l
  }, /* @__PURE__ */ S.createElement($a, {
    superOffset: function(y) {
      return n.addYear(a, y);
    },
    onChange: i,
    getStart: function(y) {
      return n.setMonth(y, 0);
    },
    getEnd: function(y) {
      return n.setMonth(y, 11);
    }
  }, m), /* @__PURE__ */ S.createElement(Qi, Pe({}, e, {
    titleFormat: r.fieldQuarterFormat,
    colNum: 4,
    rowNum: 1,
    baseDate: f,
    getCellDate: d,
    getCellText: p,
    getCellClassName: h
  }))));
}
function IS(e) {
  var t = e.prefixCls, r = e.generateConfig, n = e.locale, a = e.value, i = e.hoverValue, o = e.hoverRangeValue, l = n.locale, u = "".concat(t, "-week-panel-row"), c = function(f) {
    var d = {};
    if (o) {
      var p = X(o, 2), h = p[0], m = p[1], v = ri(r, l, h, f), y = ri(r, l, m, f);
      d["".concat(u, "-range-start")] = v, d["".concat(u, "-range-end")] = y, d["".concat(u, "-range-hover")] = !v && !y && Zl(r, h, m, f);
    }
    return i && (d["".concat(u, "-hover")] = i.some(function(x) {
      return ri(r, l, f, x);
    })), qe(
      u,
      Te({}, "".concat(u, "-selected"), !o && ri(r, l, a, f)),
      // Patch for hover range
      d
    );
  };
  return /* @__PURE__ */ S.createElement(Jl, Pe({}, e, {
    mode: "week",
    panelName: "week",
    rowClassName: c
  }));
}
function jS(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = e.onModeChange, u = "".concat(t, "-year-panel"), c = Oa(e, "year"), s = X(c, 1), f = s[0], d = function($) {
    var P = Math.floor(n.getYear(a) / 10) * 10;
    return n.setYear($, P);
  }, p = function($) {
    var P = d($);
    return n.addYear(P, 9);
  }, h = d(a), m = p(a), v = n.addYear(h, -1), y = function($, P) {
    return n.addYear($, P);
  }, x = function($) {
    return mt($, {
      locale: r,
      format: r.cellYearFormat,
      generateConfig: n
    });
  }, w = function($) {
    return Te({}, "".concat(t, "-cell-in-view"), On(n, $, h) || On(n, $, m) || Zl(n, h, m, $));
  }, O = i ? function(b, $) {
    var P = n.setMonth(b, 0), A = n.setDate(P, 1), T = n.addYear(A, 1), C = n.addDate(T, -1);
    return i(A, $) && i(C, $);
  } : null, g = /* @__PURE__ */ S.createElement("button", {
    type: "button",
    key: "decade",
    "aria-label": "decade panel",
    onClick: function() {
      l("decade");
    },
    tabIndex: -1,
    className: "".concat(t, "-decade-btn")
  }, mt(h, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }), "-", mt(m, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ S.createElement(An.Provider, {
    value: f
  }, /* @__PURE__ */ S.createElement("div", {
    className: u
  }, /* @__PURE__ */ S.createElement($a, {
    superOffset: function($) {
      return n.addYear(a, $ * 10);
    },
    onChange: o,
    getStart: d,
    getEnd: p
  }, g), /* @__PURE__ */ S.createElement(Qi, Pe({}, e, {
    disabledDate: O,
    titleFormat: r.fieldYearFormat,
    colNum: 3,
    rowNum: 4,
    baseDate: v,
    getCellDate: y,
    getCellText: x,
    getCellClassName: w
  }))));
}
var DS = {
  date: Jl,
  datetime: AS,
  week: IS,
  month: TS,
  quarter: MS,
  year: jS,
  decade: ES,
  time: hy
};
function kS(e, t) {
  var r, n = e.locale, a = e.generateConfig, i = e.direction, o = e.prefixCls, l = e.tabIndex, u = l === void 0 ? 0 : l, c = e.multiple, s = e.defaultValue, f = e.value, d = e.onChange, p = e.onSelect, h = e.defaultPickerValue, m = e.pickerValue, v = e.onPickerValueChange, y = e.mode, x = e.onPanelChange, w = e.picker, O = w === void 0 ? "date" : w, g = e.showTime, b = e.hoverValue, $ = e.hoverRangeValue, P = e.cellRender, A = e.dateRender, T = e.monthCellRender, C = e.components, M = C === void 0 ? {} : C, D = e.hideHeader, I = ((r = S.useContext(sr)) === null || r === void 0 ? void 0 : r.prefixCls) || o || "rc-picker", _ = S.useRef();
  S.useImperativeHandle(t, function() {
    return {
      nativeElement: _.current
    };
  });
  var E = Qg(e), j = X(E, 4), k = j[0], R = j[1], B = j[2], H = j[3], L = Gg(n, R), V = O === "date" && g ? "datetime" : O, z = S.useMemo(function() {
    return Jg(V, B, H, k, L);
  }, [V, B, H, k, L]), K = a.getNow(), J = br(O, {
    value: y,
    postState: function(fe) {
      return fe || "date";
    }
  }), te = X(J, 2), ie = te[0], U = te[1], G = ie === "date" && z ? "datetime" : ie, q = vy(a, n, V), W = br(s, {
    value: f
  }), Z = X(W, 2), Q = Z[0], ue = Z[1], re = S.useMemo(function() {
    var oe = _n(Q).filter(function(fe) {
      return fe;
    });
    return c ? oe : oe.slice(0, 1);
  }, [Q, c]), ne = St(function(oe) {
    ue(oe), d && (oe === null || re.length !== oe.length || re.some(function(fe, Se) {
      return !At(a, n, fe, oe[Se], V);
    })) && (d == null || d(c ? oe : oe[0]));
  }), de = St(function(oe) {
    if (p == null || p(oe), ie === O) {
      var fe = c ? q(re, oe) : [oe];
      ne(fe);
    }
  }), Oe = br(h || re[0] || K, {
    value: m
  }), Re = X(Oe, 2), Ee = Re[0], De = Re[1];
  S.useEffect(function() {
    re[0] && !m && De(re[0]);
  }, [re[0]]);
  var it = function(fe, Se) {
    x == null || x(fe || m, Se || ie);
  }, ot = function(fe) {
    var Se = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    De(fe), v == null || v(fe), Se && it(fe);
  }, nt = function(fe, Se) {
    U(fe), Se && ot(Se), it(Se, fe);
  }, ze = function(fe) {
    if (de(fe), ot(fe), ie !== O) {
      var Se = ["decade", "year"], ae = [].concat(Se, ["month"]), ce = {
        quarter: [].concat(Se, ["quarter"]),
        week: [].concat(Ft(ae), ["week"]),
        date: [].concat(Ft(ae), ["date"])
      }, Ve = ce[O] || ae, et = Ve.indexOf(ie), Ye = Ve[et + 1];
      Ye && nt(Ye, fe);
    }
  }, He = S.useMemo(function() {
    var oe, fe;
    if (Array.isArray($)) {
      var Se = X($, 2);
      oe = Se[0], fe = Se[1];
    } else
      oe = $;
    return !oe && !fe ? null : (oe = oe || fe, fe = fe || oe, a.isAfter(oe, fe) ? [fe, oe] : [oe, fe]);
  }, [$, a]), Wt = jf(P, A, T), Fe = M[G] || DS[G] || Jl, ct = S.useContext(Tr), Ge = S.useMemo(function() {
    return pe(pe({}, ct), {}, {
      hideHeader: D
    });
  }, [ct, D]);
  je.env.NODE_ENV !== "production" && ur(!re || re.every(function(oe) {
    return a.isValidate(oe);
  }), "Invalidate date pass to `value` or `defaultValue`.");
  var We = "".concat(I, "-panel"), he = Xl(e, [
    // Week
    "showWeek",
    // Icons
    "prevIcon",
    "nextIcon",
    "superPrevIcon",
    "superNextIcon",
    // Disabled
    "disabledDate",
    "minDate",
    "maxDate",
    // Hover
    "onHover"
  ]);
  return /* @__PURE__ */ S.createElement(Tr.Provider, {
    value: Ge
  }, /* @__PURE__ */ S.createElement("div", {
    ref: _,
    tabIndex: u,
    className: qe(We, Te({}, "".concat(We, "-rtl"), i === "rtl"))
  }, /* @__PURE__ */ S.createElement(Fe, Pe({}, he, {
    // Time
    showTime: z,
    prefixCls: I,
    locale: L,
    generateConfig: a,
    onModeChange: nt,
    pickerValue: Ee,
    onPickerValueChange: function(fe) {
      ot(fe, !0);
    },
    value: re[0],
    onSelect: ze,
    values: re,
    cellRender: Wt,
    hoverRangeValue: He,
    hoverValue: b
  }))));
}
var Ro = /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(kS));
je.env.NODE_ENV !== "production" && (Ro.displayName = "PanelPicker");
function NS(e) {
  var t = e.picker, r = e.multiplePanel, n = e.pickerValue, a = e.onPickerValueChange, i = e.needConfirm, o = e.onSubmit, l = e.range, u = e.hoverValue, c = S.useContext(sr), s = c.prefixCls, f = c.generateConfig, d = S.useCallback(function(x, w) {
    return ni(f, t, x, w);
  }, [f, t]), p = S.useMemo(function() {
    return d(n, 1);
  }, [n, d]), h = function(w) {
    a(d(w, -1));
  }, m = {
    onCellDblClick: function() {
      i && o();
    }
  }, v = t === "time", y = pe(pe({}, e), {}, {
    hoverValue: null,
    hoverRangeValue: null,
    hideHeader: v
  });
  return l ? y.hoverRangeValue = u : y.hoverValue = u, r ? /* @__PURE__ */ S.createElement("div", {
    className: "".concat(s, "-panels")
  }, /* @__PURE__ */ S.createElement(Tr.Provider, {
    value: pe(pe({}, m), {}, {
      hideNext: !0
    })
  }, /* @__PURE__ */ S.createElement(Ro, y)), /* @__PURE__ */ S.createElement(Tr.Provider, {
    value: pe(pe({}, m), {}, {
      hidePrev: !0
    })
  }, /* @__PURE__ */ S.createElement(Ro, Pe({}, y, {
    pickerValue: p,
    onPickerValueChange: h
  })))) : /* @__PURE__ */ S.createElement(Tr.Provider, {
    value: pe({}, m)
  }, /* @__PURE__ */ S.createElement(Ro, y));
}
function Kd(e) {
  return typeof e == "function" ? e() : e;
}
function RS(e) {
  var t = e.prefixCls, r = e.presets, n = e.onClick, a = e.onHover;
  return r.length ? /* @__PURE__ */ S.createElement("div", {
    className: "".concat(t, "-presets")
  }, /* @__PURE__ */ S.createElement("ul", null, r.map(function(i, o) {
    var l = i.label, u = i.value;
    return /* @__PURE__ */ S.createElement("li", {
      key: o,
      onClick: function() {
        n(Kd(u));
      },
      onMouseEnter: function() {
        a(Kd(u));
      },
      onMouseLeave: function() {
        a(null);
      }
    }, l);
  }))) : null;
}
function my(e) {
  var t = e.panelRender, r = e.internalMode, n = e.picker, a = e.showNow, i = e.range, o = e.multiple, l = e.activeOffset, u = l === void 0 ? 0 : l, c = e.placement, s = e.presets, f = e.onPresetHover, d = e.onPresetSubmit, p = e.onFocus, h = e.onBlur, m = e.onPanelMouseDown, v = e.direction, y = e.value, x = e.onSelect, w = e.isInvalid, O = e.defaultOpenValue, g = e.onOk, b = e.onSubmit, $ = S.useContext(sr), P = $.prefixCls, A = "".concat(P, "-panel"), T = v === "rtl", C = S.useRef(null), M = S.useRef(null), D = S.useState(0), I = X(D, 2), _ = I[0], E = I[1], j = S.useState(0), k = X(j, 2), R = k[0], B = k[1], H = function(ne) {
    ne.offsetWidth && E(ne.offsetWidth);
  };
  S.useEffect(function() {
    if (i) {
      var re, ne = ((re = C.current) === null || re === void 0 ? void 0 : re.offsetWidth) || 0, de = _ - ne;
      u <= de ? B(0) : B(u + ne - _);
    }
  }, [_, u, i]);
  function L(re) {
    return re.filter(function(ne) {
      return ne;
    });
  }
  var V = S.useMemo(function() {
    return L(_n(y));
  }, [y]), z = n === "time" && !V.length, K = S.useMemo(function() {
    return z ? L([O]) : V;
  }, [z, V, O]), J = z ? O : V, te = S.useMemo(function() {
    return K.length ? K.some(function(re) {
      return w(re);
    }) : !0;
  }, [K, w]), ie = function() {
    z && x(O), g(), b();
  }, U = /* @__PURE__ */ S.createElement("div", {
    className: "".concat(P, "-panel-layout")
  }, /* @__PURE__ */ S.createElement(RS, {
    prefixCls: P,
    presets: s,
    onClick: d,
    onHover: f
  }), /* @__PURE__ */ S.createElement("div", null, /* @__PURE__ */ S.createElement(NS, Pe({}, e, {
    value: J
  })), /* @__PURE__ */ S.createElement(OS, Pe({}, e, {
    showNow: o ? !1 : a,
    invalid: te,
    onSubmit: ie
  }))));
  t && (U = t(U));
  var G = "".concat(A, "-container"), q = "marginLeft", W = "marginRight", Z = /* @__PURE__ */ S.createElement("div", {
    onMouseDown: m,
    tabIndex: -1,
    className: qe(
      G,
      // Used for Today Button style, safe to remove if no need
      "".concat(P, "-").concat(r, "-panel-container")
    ),
    style: Te(Te({}, T ? W : q, R), T ? q : W, "auto"),
    onFocus: p,
    onBlur: h
  }, U);
  if (i) {
    var Q = Gl(c, T), ue = Wg(Q, T);
    Z = /* @__PURE__ */ S.createElement("div", {
      onMouseDown: m,
      ref: M,
      className: qe("".concat(P, "-range-wrapper"), "".concat(P, "-").concat(n, "-range-wrapper"))
    }, /* @__PURE__ */ S.createElement("div", {
      ref: C,
      className: "".concat(P, "-range-arrow"),
      style: Te({}, ue, u)
    }), /* @__PURE__ */ S.createElement(Kl, {
      onResize: H
    }, Z));
  }
  return Z;
}
function gy(e, t) {
  var r = e.format, n = e.maskFormat, a = e.generateConfig, i = e.locale, o = e.preserveInvalidOnBlur, l = e.inputReadOnly, u = e.required, c = e["aria-required"], s = e.onSubmit, f = e.onFocus, d = e.onBlur, p = e.onInputChange, h = e.onInvalid, m = e.open, v = e.onOpenChange, y = e.onKeyDown, x = e.onChange, w = e.activeHelp, O = e.name, g = e.autoComplete, b = e.id, $ = e.value, P = e.invalid, A = e.placeholder, T = e.disabled, C = e.activeIndex, M = e.allHelp, D = e.picker, I = function(L, V) {
    var z = a.locale.parse(i.locale, L, [V]);
    return z && a.isValidate(z) ? z : null;
  }, _ = r[0], E = S.useCallback(function(H) {
    return mt(H, {
      locale: i,
      format: _,
      generateConfig: a
    });
  }, [i, a, _]), j = S.useMemo(function() {
    return $.map(E);
  }, [$, E]), k = S.useMemo(function() {
    var H = D === "time" ? 8 : 10, L = typeof _ == "function" ? _(a.getNow()).length : _.length;
    return Math.max(H, L) + 2;
  }, [_, D, a]), R = function(L) {
    for (var V = 0; V < r.length; V += 1) {
      var z = r[V];
      if (typeof z == "string") {
        var K = I(L, z);
        if (K)
          return K;
      }
    }
    return !1;
  }, B = function(L) {
    function V(J) {
      return L !== void 0 ? J[L] : J;
    }
    var z = $f(e, {
      aria: !0,
      data: !0
    }), K = pe(pe({}, z), {}, {
      // ============== Shared ==============
      format: n,
      validateFormat: function(te) {
        return !!R(te);
      },
      preserveInvalidOnBlur: o,
      readOnly: l,
      required: u,
      "aria-required": c,
      name: O,
      autoComplete: g,
      size: k,
      // ============= By Index =============
      id: V(b),
      value: V(j) || "",
      invalid: V(P),
      placeholder: V(A),
      active: C === L,
      helped: M || w && C === L,
      disabled: V(T),
      onFocus: function(te) {
        f(te, L);
      },
      onBlur: function(te) {
        d(te, L);
      },
      onSubmit: s,
      // Get validate text value
      onChange: function(te) {
        p();
        var ie = R(te);
        if (ie) {
          h(!1, L), x(ie, L);
          return;
        }
        h(!!te, L);
      },
      onHelp: function() {
        v(!0, {
          index: L
        });
      },
      onKeyDown: function(te) {
        var ie = !1;
        if (y == null || y(te, function() {
          je.env.NODE_ENV !== "production" && ur(!1, "`preventDefault` callback is deprecated. Please call `event.preventDefault` directly."), ie = !0;
        }), !te.defaultPrevented && !ie)
          switch (te.key) {
            case "Escape":
              v(!1, {
                index: L
              });
              break;
            case "Enter":
              m || v(!0);
              break;
          }
      }
    }, t == null ? void 0 : t({
      valueTexts: j
    }));
    return Object.keys(K).forEach(function(J) {
      K[J] === void 0 && delete K[J];
    }), K;
  };
  return [B, E];
}
var LS = ["onMouseEnter", "onMouseLeave"];
function yy(e) {
  return S.useMemo(function() {
    return Xl(e, LS);
  }, [e]);
}
var BS = ["icon", "type"], FS = ["onClear"];
function eu(e) {
  var t = e.icon, r = e.type, n = cr(e, BS), a = S.useContext(sr), i = a.prefixCls;
  return t ? /* @__PURE__ */ S.createElement("span", Pe({
    className: "".concat(i, "-").concat(r)
  }, n), t) : null;
}
function Kc(e) {
  var t = e.onClear, r = cr(e, FS);
  return /* @__PURE__ */ S.createElement(eu, Pe({}, r, {
    type: "clear",
    role: "button",
    onMouseDown: function(a) {
      a.preventDefault();
    },
    onClick: function(a) {
      a.stopPropagation(), t();
    }
  }));
}
var pc = ["YYYY", "MM", "DD", "HH", "mm", "ss", "SSS"], Gd = "顧", HS = /* @__PURE__ */ function() {
  function e(t) {
    Nw(this, e), Te(this, "format", void 0), Te(this, "maskFormat", void 0), Te(this, "cells", void 0), Te(this, "maskCells", void 0), this.format = t;
    var r = pc.map(function(l) {
      return "(".concat(l, ")");
    }).join("|"), n = new RegExp(r, "g");
    this.maskFormat = t.replace(
      n,
      // Use Chinese character to avoid user use it in format
      function(l) {
        return Gd.repeat(l.length);
      }
    );
    var a = new RegExp("(".concat(pc.join("|"), ")")), i = (t.split(a) || []).filter(function(l) {
      return l;
    }), o = 0;
    this.cells = i.map(function(l) {
      var u = pc.includes(l), c = o, s = o + l.length;
      return o = s, {
        text: l,
        mask: u,
        start: c,
        end: s
      };
    }), this.maskCells = this.cells.filter(function(l) {
      return l.mask;
    });
  }
  return kw(e, [{
    key: "getSelection",
    value: function(r) {
      var n = this.maskCells[r] || {}, a = n.start, i = n.end;
      return [a || 0, i || 0];
    }
    /** Check given text match format */
  }, {
    key: "match",
    value: function(r) {
      for (var n = 0; n < this.maskFormat.length; n += 1) {
        var a = this.maskFormat[n], i = r[n];
        if (!i || a !== Gd && a !== i)
          return !1;
      }
      return !0;
    }
    /** Get mask cell count */
  }, {
    key: "size",
    value: function() {
      return this.maskCells.length;
    }
  }, {
    key: "getMaskCellIndex",
    value: function(r) {
      for (var n = Number.MAX_SAFE_INTEGER, a = 0, i = 0; i < this.maskCells.length; i += 1) {
        var o = this.maskCells[i], l = o.start, u = o.end;
        if (r >= l && r <= u)
          return i;
        var c = Math.min(Math.abs(r - l), Math.abs(r - u));
        c < n && (n = c, a = i);
      }
      return a;
    }
  }]), e;
}();
function WS(e) {
  var t = {
    YYYY: [0, 9999, (/* @__PURE__ */ new Date()).getFullYear()],
    MM: [1, 12],
    DD: [1, 31],
    HH: [0, 23],
    mm: [0, 59],
    ss: [0, 59],
    SSS: [0, 999]
  };
  return t[e];
}
var VS = ["active", "showActiveCls", "suffixIcon", "format", "validateFormat", "onChange", "onInput", "helped", "onHelp", "onSubmit", "onKeyDown", "preserveInvalidOnBlur", "invalid", "clearIcon"], Vo = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var r = e.active, n = e.showActiveCls, a = n === void 0 ? !0 : n, i = e.suffixIcon, o = e.format, l = e.validateFormat, u = e.onChange;
  e.onInput;
  var c = e.helped, s = e.onHelp, f = e.onSubmit, d = e.onKeyDown, p = e.preserveInvalidOnBlur, h = p === void 0 ? !1 : p, m = e.invalid, v = e.clearIcon, y = cr(e, VS), x = e.value, w = e.onFocus, O = e.onBlur, g = e.onMouseUp, b = S.useContext(sr), $ = b.prefixCls, P = b.input, A = P === void 0 ? "input" : P, T = "".concat($, "-input"), C = S.useState(!1), M = X(C, 2), D = M[0], I = M[1], _ = S.useState(x), E = X(_, 2), j = E[0], k = E[1], R = S.useState(""), B = X(R, 2), H = B[0], L = B[1], V = S.useState(null), z = X(V, 2), K = z[0], J = z[1], te = S.useState(null), ie = X(te, 2), U = ie[0], G = ie[1], q = j || "";
  S.useEffect(function() {
    k(x);
  }, [x]);
  var W = S.useRef(), Z = S.useRef();
  S.useImperativeHandle(t, function() {
    return {
      nativeElement: W.current,
      inputElement: Z.current,
      focus: function(oe) {
        Z.current.focus(oe);
      },
      blur: function() {
        Z.current.blur();
      }
    };
  });
  var Q = S.useMemo(function() {
    return new HS(o || "");
  }, [o]), ue = S.useMemo(function() {
    return c ? [0, 0] : Q.getSelection(K);
  }, [Q, K, c]), re = X(ue, 2), ne = re[0], de = re[1], Oe = function(oe) {
    oe && oe !== o && oe !== x && s();
  }, Re = St(function(he) {
    l(he) && u(he), k(he), Oe(he);
  }), Ee = function(oe) {
    if (!o) {
      var fe = oe.target.value;
      Oe(fe), k(fe), u(fe);
    }
  }, De = function(oe) {
    var fe = oe.clipboardData.getData("text");
    l(fe) && Re(fe);
  }, it = S.useRef(!1), ot = function() {
    it.current = !0;
  }, nt = function(oe) {
    var fe = oe.target, Se = fe.selectionStart, ae = Q.getMaskCellIndex(Se);
    J(ae), G({}), g == null || g(oe), it.current = !1;
  }, ze = function(oe) {
    I(!0), J(0), L(""), w(oe);
  }, He = function(oe) {
    O(oe);
  }, Wt = function(oe) {
    I(!1), He(oe);
  };
  Nf(r, function() {
    !r && !h && k(x);
  });
  var Fe = function(oe) {
    oe.key === "Enter" && l(q) && f(), d == null || d(oe);
  }, ct = function(oe) {
    Fe(oe);
    var fe = oe.key, Se = null, ae = null, ce = de - ne, Ve = o.slice(ne, de), et = function($t) {
      J(function(Mt) {
        var bt = Mt + $t;
        return bt = Math.max(bt, 0), bt = Math.min(bt, Q.size() - 1), bt;
      });
    }, Ye = function($t) {
      var Mt = WS(Ve), bt = X(Mt, 3), ye = bt[0], ke = bt[1], Xe = bt[2], pt = q.slice(ne, de), Vt = Number(pt);
      if (isNaN(Vt))
        return String(Xe || ($t > 0 ? ye : ke));
      var In = Vt + $t, an = ke - ye + 1;
      return String(ye + (an + In - ye) % an);
    };
    switch (fe) {
      case "Backspace":
      case "Delete":
        Se = "", ae = Ve;
        break;
      case "ArrowLeft":
        Se = "", et(-1);
        break;
      case "ArrowRight":
        Se = "", et(1);
        break;
      case "ArrowUp":
        Se = "", ae = Ye(1);
        break;
      case "ArrowDown":
        Se = "", ae = Ye(-1);
        break;
      default:
        isNaN(Number(fe)) || (Se = H + fe, ae = Se);
        break;
    }
    if (Se !== null && (L(Se), Se.length >= ce && (et(1), L(""))), ae !== null) {
      var Ct = (
        // before
        q.slice(0, ne) + // replace
        If(ae, ce) + // after
        q.slice(de)
      );
      Re(Ct.slice(0, o.length));
    }
    G({});
  }, Ge = S.useRef();
  kr(function() {
    if (!(!D || !o || it.current)) {
      if (!Q.match(q)) {
        Re(o);
        return;
      }
      return Z.current.setSelectionRange(ne, de), Ge.current = yr(function() {
        Z.current.setSelectionRange(ne, de);
      }), function() {
        yr.cancel(Ge.current);
      };
    }
  }, [Q, o, D, q, K, ne, de, U, Re]);
  var We = o ? {
    onFocus: ze,
    onBlur: Wt,
    onKeyDown: ct,
    onMouseDown: ot,
    onMouseUp: nt,
    onPaste: De
  } : {};
  return /* @__PURE__ */ S.createElement("div", {
    ref: W,
    className: qe(T, Te(Te({}, "".concat(T, "-active"), r && a), "".concat(T, "-placeholder"), c))
  }, /* @__PURE__ */ S.createElement(A, Pe({
    ref: Z,
    "aria-invalid": m,
    autoComplete: "off"
  }, y, {
    onKeyDown: Fe,
    onBlur: He
    // Replace with format
  }, We, {
    // Value
    value: q,
    onChange: Ee
  })), /* @__PURE__ */ S.createElement(eu, {
    type: "suffix",
    icon: i
  }), v);
});
je.env.NODE_ENV !== "production" && (Vo.displayName = "Input");
var zS = ["id", "clearIcon", "suffixIcon", "separator", "activeIndex", "activeHelp", "allHelp", "focused", "onFocus", "onBlur", "onKeyDown", "locale", "generateConfig", "placeholder", "className", "style", "onClick", "onClear", "value", "onChange", "onSubmit", "onInputChange", "format", "maskFormat", "preserveInvalidOnBlur", "onInvalid", "disabled", "invalid", "inputReadOnly", "direction", "onOpenChange", "onActiveOffset", "placement", "onMouseDown", "required", "aria-required", "autoFocus"], US = ["index"];
function YS(e, t) {
  var r = e.id, n = e.clearIcon, a = e.suffixIcon, i = e.separator, o = i === void 0 ? "~" : i, l = e.activeIndex;
  e.activeHelp, e.allHelp;
  var u = e.focused;
  e.onFocus, e.onBlur, e.onKeyDown, e.locale, e.generateConfig;
  var c = e.placeholder, s = e.className, f = e.style, d = e.onClick, p = e.onClear, h = e.value;
  e.onChange, e.onSubmit, e.onInputChange, e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid;
  var m = e.disabled, v = e.invalid;
  e.inputReadOnly;
  var y = e.direction;
  e.onOpenChange;
  var x = e.onActiveOffset, w = e.placement, O = e.onMouseDown;
  e.required, e["aria-required"];
  var g = e.autoFocus, b = cr(e, zS), $ = y === "rtl", P = S.useContext(sr), A = P.prefixCls, T = S.useMemo(function() {
    if (typeof r == "string")
      return [r];
    var q = r || {};
    return [q.start, q.end];
  }, [r]), C = S.useRef(), M = S.useRef(), D = S.useRef(), I = function(W) {
    var Z;
    return (Z = [M, D][W]) === null || Z === void 0 ? void 0 : Z.current;
  };
  S.useImperativeHandle(t, function() {
    return {
      nativeElement: C.current,
      focus: function(W) {
        if (Xi(W) === "object") {
          var Z, Q = W || {}, ue = Q.index, re = ue === void 0 ? 0 : ue, ne = cr(Q, US);
          (Z = I(re)) === null || Z === void 0 || Z.focus(ne);
        } else {
          var de;
          (de = I(W ?? 0)) === null || de === void 0 || de.focus();
        }
      },
      blur: function() {
        var W, Z;
        (W = I(0)) === null || W === void 0 || W.blur(), (Z = I(1)) === null || Z === void 0 || Z.blur();
      }
    };
  });
  var _ = yy(b), E = S.useMemo(function() {
    return Array.isArray(c) ? c : [c, c];
  }, [c]), j = gy(pe(pe({}, e), {}, {
    id: T,
    placeholder: E
  })), k = X(j, 1), R = k[0], B = Gl(w, $), H = Wg(B, $), L = B == null ? void 0 : B.toLowerCase().endsWith("right"), V = S.useState({
    position: "absolute",
    width: 0
  }), z = X(V, 2), K = z[0], J = z[1], te = St(function() {
    var q = I(l);
    if (q) {
      var W = q.nativeElement, Z = W.offsetWidth, Q = W.offsetLeft, ue = W.offsetParent, re = (ue == null ? void 0 : ue.offsetWidth) || 0, ne = L ? re - Z - Q : Q;
      J(function(de) {
        return pe(pe({}, de), {}, Te({
          width: Z
        }, H, ne));
      }), x(ne);
    }
  });
  S.useEffect(function() {
    te();
  }, [l]);
  var ie = n && (h[0] && !m[0] || h[1] && !m[1]), U = g && !m[0], G = g && !U && !m[1];
  return /* @__PURE__ */ S.createElement(Kl, {
    onResize: te
  }, /* @__PURE__ */ S.createElement("div", Pe({}, _, {
    className: qe(A, "".concat(A, "-range"), Te(Te(Te(Te({}, "".concat(A, "-focused"), u), "".concat(A, "-disabled"), m.every(function(q) {
      return q;
    })), "".concat(A, "-invalid"), v.some(function(q) {
      return q;
    })), "".concat(A, "-rtl"), $), s),
    style: f,
    ref: C,
    onClick: d,
    onMouseDown: function(W) {
      var Z = W.target;
      Z !== M.current.inputElement && Z !== D.current.inputElement && W.preventDefault(), O == null || O(W);
    }
  }), /* @__PURE__ */ S.createElement(Vo, Pe({
    ref: M
  }, R(0), {
    autoFocus: U,
    "date-range": "start"
  })), /* @__PURE__ */ S.createElement("div", {
    className: "".concat(A, "-range-separator")
  }, o), /* @__PURE__ */ S.createElement(Vo, Pe({
    ref: D
  }, R(1), {
    autoFocus: G,
    "date-range": "end"
  })), /* @__PURE__ */ S.createElement("div", {
    className: "".concat(A, "-active-bar"),
    style: K
  }), /* @__PURE__ */ S.createElement(eu, {
    type: "suffix",
    icon: a
  }), ie && /* @__PURE__ */ S.createElement(Kc, {
    icon: n,
    onClear: p
  })));
}
var by = /* @__PURE__ */ S.forwardRef(YS);
je.env.NODE_ENV !== "production" && (by.displayName = "RangeSelector");
function Xd(e, t) {
  var r = e ?? t;
  return Array.isArray(r) ? r : [r, r];
}
function So(e) {
  return e === 1 ? "end" : "start";
}
function qS(e, t) {
  var r = ry(e, function() {
    var Me = e.disabled, me = e.allowEmpty, Ie = Xd(Me, !1), st = Xd(me, !1);
    return {
      disabled: Ie,
      allowEmpty: st
    };
  }), n = X(r, 6), a = n[0], i = n[1], o = n[2], l = n[3], u = n[4], c = n[5], s = a.prefixCls, f = a.styles, d = a.classNames, p = a.placement, h = a.defaultValue, m = a.value, v = a.needConfirm, y = a.onKeyDown, x = a.disabled, w = a.allowEmpty, O = a.disabledDate, g = a.minDate, b = a.maxDate, $ = a.defaultOpen, P = a.open, A = a.onOpenChange, T = a.locale, C = a.generateConfig, M = a.picker, D = a.showNow, I = a.showToday, _ = a.showTime, E = a.mode, j = a.onPanelChange, k = a.onCalendarChange, R = a.onOk, B = a.defaultPickerValue, H = a.pickerValue, L = a.onPickerValueChange, V = a.inputReadOnly, z = a.suffixIcon, K = a.onFocus, J = a.onBlur, te = a.presets, ie = a.ranges, U = a.components, G = a.cellRender, q = a.dateRender, W = a.monthCellRender, Z = a.onClick, Q = ay(t), ue = ny(P, $, x, A), re = X(ue, 2), ne = re[0], de = re[1], Oe = function(me, Ie) {
    (x.some(function(st) {
      return !st;
    }) || !me) && de(me, Ie);
  }, Re = fy(C, T, l, !0, !1, h, m, k, R), Ee = X(Re, 5), De = Ee[0], it = Ee[1], ot = Ee[2], nt = Ee[3], ze = Ee[4], He = ot(), Wt = oy(x, w, ne), Fe = X(Wt, 7), ct = Fe[0], Ge = Fe[1], We = Fe[2], he = Fe[3], oe = Fe[4], fe = Fe[5], Se = Fe[6], ae = function(me, Ie) {
    Ge(!0), K == null || K(me, {
      range: So(Ie ?? he)
    });
  }, ce = function(me, Ie) {
    Ge(!1), J == null || J(me, {
      range: So(Ie ?? he)
    });
  }, Ve = S.useMemo(function() {
    if (!_)
      return null;
    var Me = _.disabledTime, me = Me ? function(Ie) {
      var st = So(he), rr = Ug(He, Se, he);
      return Me(Ie, st, {
        from: rr
      });
    } : void 0;
    return pe(pe({}, _), {}, {
      disabledTime: me
    });
  }, [_, he, He, Se]), et = br([M, M], {
    value: E
  }), Ye = X(et, 2), Ct = Ye[0], Tt = Ye[1], $t = Ct[he] || M, Mt = $t === "date" && Ve ? "datetime" : $t, bt = Mt === M && Mt !== "time", ye = py(M, $t, D, I, !0), ke = dy(a, De, it, ot, nt, x, l, ct, ne, c), Xe = X(ke, 2), pt = Xe[0], Vt = Xe[1], In = bS(He, x, Se, C, T, O), an = qg(He, c, w), oo = X(an, 2), Hu = oo[0], Wu = oo[1], Vu = ly(C, T, He, Ct, ne, he, i, bt, B, H, Ve == null ? void 0 : Ve.defaultOpenValue, L, g, b), Fa = X(Vu, 2), zu = Fa[0], Uu = Fa[1], Ha = St(function(Me, me, Ie) {
    var st = oi(Ct, he, me);
    if ((st[0] !== Ct[0] || st[1] !== Ct[1]) && Tt(st), j && Ie !== !1) {
      var rr = Ft(He);
      Me && (rr[he] = Me), j(rr, st);
    }
  }), dr = function(me, Ie) {
    return (
      // Trigger change only when date changed
      oi(He, Ie, me)
    );
  }, pr = function(me, Ie) {
    var st = He;
    me && (st = dr(me, he));
    var rr = fe(st);
    nt(st), pt(he, rr === null), rr === null ? Oe(!1, {
      force: !0
    }) : Ie || Q.current.focus({
      index: rr
    });
  }, Yu = function(me) {
    var Ie, st = me.target.getRootNode();
    if (!Q.current.nativeElement.contains((Ie = st.activeElement) !== null && Ie !== void 0 ? Ie : document.activeElement)) {
      var rr = x.findIndex(function(Aw) {
        return !Aw;
      });
      rr >= 0 && Q.current.focus({
        index: rr
      });
    }
    Oe(!0), Z == null || Z(me);
  }, qu = function() {
    Vt(null), Oe(!1, {
      force: !0
    });
  }, lo = S.useState(null), uo = X(lo, 2), co = uo[0], so = uo[1], fo = S.useState(null), vr = X(fo, 2), Vr = vr[0], Wa = vr[1], po = S.useMemo(function() {
    return Vr || He;
  }, [He, Vr]);
  S.useEffect(function() {
    ne || Wa(null);
  }, [ne]);
  var Ku = S.useState(0), vo = X(Ku, 2), ho = vo[0], Gu = vo[1], Xu = iy(te, ie), Zu = function(me) {
    Wa(me), so("preset");
  }, Qu = function(me) {
    var Ie = Vt(me);
    Ie && Oe(!1, {
      force: !0
    });
  }, Ju = function(me) {
    pr(me);
  }, ec = function(me) {
    Wa(me ? dr(me, he) : null), so("cell");
  }, tc = function(me) {
    Oe(!0), ae(me);
  }, rc = function() {
    We("panel");
  }, nc = function(me) {
    var Ie = oi(He, he, me);
    nt(Ie), !v && !o && i === Mt && pr(me);
  }, ac = function() {
    Oe(!1);
  }, ic = jf(G, q, W, So(he)), oc = He[he] || null, lc = St(function(Me) {
    return c(Me, {
      activeIndex: he
    });
  }), uc = S.useMemo(function() {
    var Me = $f(a, !1), me = gg(a, [].concat(Ft(Object.keys(Me)), ["onChange", "onCalendarChange", "style", "className", "onPanelChange", "disabledTime"]));
    return me;
  }, [a]), $e = /* @__PURE__ */ S.createElement(my, Pe({}, uc, {
    showNow: ye,
    showTime: Ve,
    range: !0,
    multiplePanel: bt,
    activeOffset: ho,
    placement: p,
    disabledDate: In,
    onFocus: tc,
    onBlur: ce,
    onPanelMouseDown: rc,
    picker: M,
    mode: $t,
    internalMode: Mt,
    onPanelChange: Ha,
    format: u,
    value: oc,
    isInvalid: lc,
    onChange: null,
    onSelect: nc,
    pickerValue: zu,
    defaultOpenValue: _n(_ == null ? void 0 : _.defaultOpenValue)[he],
    onPickerValueChange: Uu,
    hoverValue: po,
    onHover: ec,
    needConfirm: v,
    onSubmit: pr,
    onOk: ze,
    presets: Xu,
    onPresetHover: Zu,
    onPresetSubmit: Qu,
    onNow: Ju,
    cellRender: ic
  })), be = function(me, Ie) {
    var st = dr(me, Ie);
    nt(st);
  }, Nt = function() {
    We("input");
  }, hr = function(me, Ie) {
    We("input"), Oe(!0, {
      inherit: !0
    }), he !== Ie && ne && !v && o && pr(null, !0), oe(Ie), ae(me, Ie);
  }, mo = function(me, Ie) {
    if (Oe(!1), !v && We() === "input") {
      var st = fe(He);
      pt(he, st === null);
    }
    ce(me, Ie);
  }, Pw = function(me, Ie) {
    me.key === "Tab" && pr(null, !0), y == null || y(me, Ie);
  }, Cw = S.useMemo(function() {
    return {
      prefixCls: s,
      locale: T,
      generateConfig: C,
      button: U.button,
      input: U.input
    };
  }, [s, T, C, U.button, U.input]);
  if (kr(function() {
    ne && he !== void 0 && Ha(null, M, !1);
  }, [ne, he, M]), kr(function() {
    var Me = We();
    !ne && Me === "input" && (Oe(!1), pr(null, !0)), !ne && o && !v && Me === "panel" && (Oe(!0), pr());
  }, [ne]), je.env.NODE_ENV !== "production") {
    var _w = function(me) {
      return (
        // Value is empty
        !(m != null && m[me]) && // DefaultValue is empty
        !(h != null && h[me])
      );
    };
    x.some(function(Me, me) {
      return Me && _w(me) && !w[me];
    }) && ur(!1, "`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.");
  }
  return /* @__PURE__ */ S.createElement(sr.Provider, {
    value: Cw
  }, /* @__PURE__ */ S.createElement(Vg, Pe({}, Yg(a), {
    popupElement: $e,
    popupStyle: f.popup,
    popupClassName: d.popup,
    visible: ne,
    onClose: ac,
    range: !0
  }), /* @__PURE__ */ S.createElement(
    by,
    Pe({}, a, {
      // Ref
      ref: Q,
      suffixIcon: z,
      activeIndex: ct || ne ? he : null,
      activeHelp: !!Vr,
      allHelp: !!Vr && co === "preset",
      focused: ct,
      onFocus: hr,
      onBlur: mo,
      onKeyDown: Pw,
      onSubmit: pr,
      value: po,
      maskFormat: u,
      onChange: be,
      onInputChange: Nt,
      format: l,
      inputReadOnly: V,
      disabled: x,
      open: ne,
      onOpenChange: Oe,
      onClick: Yu,
      onClear: qu,
      invalid: Hu,
      onInvalid: Wu,
      onActiveOffset: Gu
    })
  )));
}
var xy = /* @__PURE__ */ S.forwardRef(qS);
je.env.NODE_ENV !== "production" && (xy.displayName = "RefRangePicker");
function KS(e) {
  var t = e.prefixCls, r = e.value, n = e.onRemove, a = e.removeIcon, i = a === void 0 ? "×" : a, o = e.formatDate, l = e.disabled, u = e.maxTagCount, c = e.placeholder, s = "".concat(t, "-selector"), f = "".concat(t, "-selection"), d = "".concat(f, "-overflow");
  function p(v, y) {
    return /* @__PURE__ */ S.createElement("span", {
      className: qe("".concat(f, "-item")),
      title: typeof v == "string" ? v : null
    }, /* @__PURE__ */ S.createElement("span", {
      className: "".concat(f, "-item-content")
    }, v), !l && y && /* @__PURE__ */ S.createElement("span", {
      onMouseDown: function(w) {
        w.preventDefault();
      },
      onClick: y,
      className: "".concat(f, "-item-remove")
    }, i));
  }
  function h(v) {
    var y = o(v), x = function(O) {
      O && O.stopPropagation(), n(v);
    };
    return p(y, x);
  }
  function m(v) {
    var y = "+ ".concat(v.length, " ...");
    return p(y);
  }
  return /* @__PURE__ */ S.createElement("div", {
    className: s
  }, /* @__PURE__ */ S.createElement(Zi, {
    prefixCls: d,
    data: r,
    renderItem: h,
    renderRest: m,
    itemKey: function(y) {
      return o(y);
    },
    maxCount: u
  }), !r.length && /* @__PURE__ */ S.createElement("span", {
    className: "".concat(t, "-selection-placeholder")
  }, c));
}
var GS = ["id", "open", "clearIcon", "suffixIcon", "activeHelp", "allHelp", "focused", "onFocus", "onBlur", "onKeyDown", "locale", "generateConfig", "placeholder", "className", "style", "onClick", "onClear", "internalPicker", "value", "onChange", "onSubmit", "onInputChange", "multiple", "maxTagCount", "format", "maskFormat", "preserveInvalidOnBlur", "onInvalid", "disabled", "invalid", "inputReadOnly", "direction", "onOpenChange", "onMouseDown", "required", "aria-required", "autoFocus", "removeIcon"];
function XS(e, t) {
  e.id;
  var r = e.open, n = e.clearIcon, a = e.suffixIcon;
  e.activeHelp, e.allHelp;
  var i = e.focused;
  e.onFocus, e.onBlur, e.onKeyDown;
  var o = e.locale, l = e.generateConfig, u = e.placeholder, c = e.className, s = e.style, f = e.onClick, d = e.onClear, p = e.internalPicker, h = e.value, m = e.onChange, v = e.onSubmit;
  e.onInputChange;
  var y = e.multiple, x = e.maxTagCount;
  e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid;
  var w = e.disabled, O = e.invalid;
  e.inputReadOnly;
  var g = e.direction;
  e.onOpenChange;
  var b = e.onMouseDown;
  e.required, e["aria-required"];
  var $ = e.autoFocus, P = e.removeIcon, A = cr(e, GS), T = g === "rtl", C = S.useContext(sr), M = C.prefixCls, D = S.useRef(), I = S.useRef();
  S.useImperativeHandle(t, function() {
    return {
      nativeElement: D.current,
      focus: function(K) {
        var J;
        (J = I.current) === null || J === void 0 || J.focus(K);
      },
      blur: function() {
        var K;
        (K = I.current) === null || K === void 0 || K.blur();
      }
    };
  });
  var _ = yy(A), E = function(K) {
    m([K]);
  }, j = function(K) {
    var J = h.filter(function(te) {
      return te && !At(l, o, te, K, p);
    });
    m(J), r || v();
  }, k = gy(pe(pe({}, e), {}, {
    onChange: E
  }), function(z) {
    var K = z.valueTexts;
    return {
      value: K[0] || "",
      active: i
    };
  }), R = X(k, 2), B = R[0], H = R[1], L = !!(n && h.length && !w), V = y ? /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(KS, {
    prefixCls: M,
    value: h,
    onRemove: j,
    formatDate: H,
    maxTagCount: x,
    disabled: w,
    removeIcon: P,
    placeholder: u
  }), /* @__PURE__ */ S.createElement("input", {
    className: "".concat(M, "-multiple-input"),
    value: h.map(H).join(","),
    ref: I,
    readOnly: !0,
    autoFocus: $
  }), /* @__PURE__ */ S.createElement(eu, {
    type: "suffix",
    icon: a
  }), L && /* @__PURE__ */ S.createElement(Kc, {
    icon: n,
    onClear: d
  })) : /* @__PURE__ */ S.createElement(Vo, Pe({
    ref: I
  }, B(), {
    autoFocus: $,
    suffixIcon: a,
    clearIcon: L && /* @__PURE__ */ S.createElement(Kc, {
      icon: n,
      onClear: d
    }),
    showActiveCls: !1
  }));
  return /* @__PURE__ */ S.createElement("div", Pe({}, _, {
    className: qe(M, Te(Te(Te(Te(Te({}, "".concat(M, "-multiple"), y), "".concat(M, "-focused"), i), "".concat(M, "-disabled"), w), "".concat(M, "-invalid"), O), "".concat(M, "-rtl"), T), c),
    style: s,
    ref: D,
    onClick: f,
    onMouseDown: function(K) {
      var J, te = K.target;
      te !== ((J = I.current) === null || J === void 0 ? void 0 : J.inputElement) && K.preventDefault(), b == null || b(K);
    }
  }), V);
}
var wy = /* @__PURE__ */ S.forwardRef(XS);
je.env.NODE_ENV !== "production" && (wy.displayName = "SingleSelector");
function ZS(e, t) {
  var r = ry(e), n = X(r, 6), a = n[0], i = n[1], o = n[2], l = n[3], u = n[4], c = n[5], s = a, f = s.prefixCls, d = s.styles, p = s.classNames, h = s.order, m = s.defaultValue, v = s.value, y = s.needConfirm, x = s.onChange, w = s.onKeyDown, O = s.disabled, g = s.disabledDate, b = s.minDate, $ = s.maxDate, P = s.defaultOpen, A = s.open, T = s.onOpenChange, C = s.locale, M = s.generateConfig, D = s.picker, I = s.showNow, _ = s.showToday, E = s.showTime, j = s.mode, k = s.onPanelChange, R = s.onCalendarChange, B = s.onOk, H = s.multiple, L = s.defaultPickerValue, V = s.pickerValue, z = s.onPickerValueChange, K = s.inputReadOnly, J = s.suffixIcon, te = s.removeIcon, ie = s.onFocus, U = s.onBlur, G = s.presets, q = s.components, W = s.cellRender, Z = s.dateRender, Q = s.monthCellRender, ue = s.onClick, re = ay(t);
  function ne($e) {
    return $e === null ? null : H ? $e : $e[0];
  }
  var de = vy(M, C, i), Oe = ny(A, P, [O], T), Re = X(Oe, 2), Ee = Re[0], De = Re[1], it = function(be, Nt, hr) {
    if (R) {
      var mo = pe({}, hr);
      delete mo.range, R(ne(be), ne(Nt), mo);
    }
  }, ot = function(be) {
    B == null || B(ne(be));
  }, nt = fy(M, C, l, !1, h, m, v, it, ot), ze = X(nt, 5), He = ze[0], Wt = ze[1], Fe = ze[2], ct = ze[3], Ge = ze[4], We = Fe(), he = oy([O]), oe = X(he, 4), fe = oe[0], Se = oe[1], ae = oe[2], ce = oe[3], Ve = function(be) {
    Se(!0), ie == null || ie(be, {});
  }, et = function(be) {
    Se(!1), U == null || U(be, {});
  }, Ye = br(D, {
    value: j
  }), Ct = X(Ye, 2), Tt = Ct[0], $t = Ct[1], Mt = Tt === "date" && E ? "datetime" : Tt, bt = py(D, Tt, I, _), ye = x && function($e, be) {
    x(ne($e), ne(be));
  }, ke = dy(
    pe(pe({}, a), {}, {
      onChange: ye
    }),
    He,
    Wt,
    Fe,
    ct,
    [],
    //disabled,
    l,
    fe,
    Ee,
    c
  ), Xe = X(ke, 2), pt = Xe[1], Vt = qg(We, c), In = X(Vt, 2), an = In[0], oo = In[1], Hu = S.useMemo(function() {
    return an.some(function($e) {
      return $e;
    });
  }, [an]), Wu = function(be, Nt) {
    if (z) {
      var hr = pe(pe({}, Nt), {}, {
        mode: Nt.mode[0]
      });
      delete hr.range, z(be[0], hr);
    }
  }, Vu = ly(
    M,
    C,
    We,
    [Tt],
    Ee,
    ce,
    i,
    !1,
    // multiplePanel,
    L,
    V,
    _n(E == null ? void 0 : E.defaultOpenValue),
    Wu,
    b,
    $
  ), Fa = X(Vu, 2), zu = Fa[0], Uu = Fa[1], Ha = St(function($e, be, Nt) {
    if ($t(be), k && Nt !== !1) {
      var hr = $e || We[We.length - 1];
      k(hr, be);
    }
  }), dr = function() {
    pt(Fe()), De(!1, {
      force: !0
    });
  }, pr = function(be) {
    !O && !re.current.nativeElement.contains(document.activeElement) && re.current.focus(), De(!0), ue == null || ue(be);
  }, Yu = function() {
    pt(null), De(!1, {
      force: !0
    });
  }, qu = S.useState(null), lo = X(qu, 2), uo = lo[0], co = lo[1], so = S.useState(null), fo = X(so, 2), vr = fo[0], Vr = fo[1], Wa = S.useMemo(function() {
    var $e = [vr].concat(Ft(We)).filter(function(be) {
      return be;
    });
    return H ? $e : $e.slice(0, 1);
  }, [We, vr, H]), po = S.useMemo(function() {
    return !H && vr ? [vr] : We.filter(function($e) {
      return $e;
    });
  }, [We, vr, H]);
  S.useEffect(function() {
    Ee || Vr(null);
  }, [Ee]);
  var Ku = iy(G), vo = function(be) {
    Vr(be), co("preset");
  }, ho = function(be) {
    var Nt = H ? de(Fe(), be) : [be], hr = pt(Nt);
    hr && !H && De(!1, {
      force: !0
    });
  }, Gu = function(be) {
    ho(be);
  }, Xu = function(be) {
    Vr(be), co("cell");
  }, Zu = function(be) {
    De(!0), Ve(be);
  }, Qu = function(be) {
    ae("panel");
    var Nt = H ? de(Fe(), be) : [be];
    ct(Nt), !y && !o && i === Mt && dr();
  }, Ju = function() {
    De(!1);
  }, ec = jf(W, Z, Q), tc = S.useMemo(function() {
    var $e = $f(a, !1), be = gg(a, [].concat(Ft(Object.keys($e)), ["onChange", "onCalendarChange", "style", "className", "onPanelChange"]));
    return pe(pe({}, be), {}, {
      multiple: a.multiple
    });
  }, [a]), rc = /* @__PURE__ */ S.createElement(my, Pe({}, tc, {
    showNow: bt,
    showTime: E,
    disabledDate: g,
    onFocus: Zu,
    onBlur: et,
    picker: D,
    mode: Tt,
    internalMode: Mt,
    onPanelChange: Ha,
    format: u,
    value: We,
    isInvalid: c,
    onChange: null,
    onSelect: Qu,
    pickerValue: zu,
    defaultOpenValue: E == null ? void 0 : E.defaultOpenValue,
    onPickerValueChange: Uu,
    hoverValue: Wa,
    onHover: Xu,
    needConfirm: y,
    onSubmit: dr,
    onOk: Ge,
    presets: Ku,
    onPresetHover: vo,
    onPresetSubmit: ho,
    onNow: Gu,
    cellRender: ec
  })), nc = function(be) {
    ct(be);
  }, ac = function() {
    ae("input");
  }, ic = function(be) {
    ae("input"), De(!0, {
      inherit: !0
    }), Ve(be);
  }, oc = function(be) {
    De(!1), et(be);
  }, lc = function(be, Nt) {
    be.key === "Tab" && dr(), w == null || w(be, Nt);
  }, uc = S.useMemo(function() {
    return {
      prefixCls: f,
      locale: C,
      generateConfig: M,
      button: q.button,
      input: q.input
    };
  }, [f, C, M, q.button, q.input]);
  return kr(function() {
    Ee && ce !== void 0 && Ha(null, D, !1);
  }, [Ee, ce, D]), kr(function() {
    var $e = ae();
    !Ee && $e === "input" && (De(!1), dr()), !Ee && o && !y && $e === "panel" && (De(!0), dr());
  }, [Ee]), /* @__PURE__ */ S.createElement(sr.Provider, {
    value: uc
  }, /* @__PURE__ */ S.createElement(Vg, Pe({}, Yg(a), {
    popupElement: rc,
    popupStyle: d.popup,
    popupClassName: p.popup,
    visible: Ee,
    onClose: Ju
  }), /* @__PURE__ */ S.createElement(
    wy,
    Pe({}, a, {
      // Ref
      ref: re,
      suffixIcon: J,
      removeIcon: te,
      activeHelp: !!vr,
      allHelp: !!vr && uo === "preset",
      focused: fe,
      onFocus: ic,
      onBlur: oc,
      onKeyDown: lc,
      onSubmit: dr,
      value: po,
      maskFormat: u,
      onChange: nc,
      onInputChange: ac,
      internalPicker: i,
      format: l,
      inputReadOnly: K,
      disabled: O,
      open: Ee,
      onOpenChange: De,
      onClick: pr,
      onClear: Yu,
      invalid: Hu,
      onInvalid: function(be) {
        oo(be, 0);
      }
    })
  )));
}
var Sy = /* @__PURE__ */ S.forwardRef(ZS);
je.env.NODE_ENV !== "production" && (Sy.displayName = "RefPicker");
function Oy(e) {
  return Gn(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const $y = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: a,
    controlHeightSM: i,
    controlHeightLG: o,
    fontSizeLG: l,
    lineHeightLG: u,
    paddingSM: c,
    controlPaddingHorizontalSM: s,
    controlPaddingHorizontal: f,
    colorFillAlter: d,
    colorPrimaryHover: p,
    colorPrimary: h,
    controlOutlineWidth: m,
    controlOutline: v,
    colorErrorOutline: y,
    colorWarningOutline: x,
    colorBgContainer: w
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((i - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((o - l * u) / 2 * 10) / 10 - a,
    paddingInline: c - a,
    paddingInlineSM: s - a,
    paddingInlineLG: f - a,
    addonBg: d,
    activeBorderColor: h,
    hoverBorderColor: p,
    activeShadow: `0 0 0 ${m}px ${v}`,
    errorActiveShadow: `0 0 0 ${m}px ${y}`,
    warningActiveShadow: `0 0 0 ${m}px ${x}`,
    hoverBg: w,
    activeBg: w,
    inputFontSize: r,
    inputFontSizeLG: l,
    inputFontSizeSM: r
  };
}, QS = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Lf = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, QS(Gn(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Py = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Zd = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Py(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), Cy = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Py(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Lf(e))
  }), Zd(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Zd(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Qd = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), JS = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, Qd(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Qd(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Lf(e))
    }
  })
}), _y = (e, t) => {
  const {
    componentCls: r
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${r}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${r}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${r}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, Ay = (e, t) => ({
  background: t.bg,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: t == null ? void 0 : t.inputColor
  },
  "&:hover": {
    background: t.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: t.activeBorderColor,
    backgroundColor: e.activeBg
  }
}), Jd = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Ay(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), Ey = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ay(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Lf(e))
  }), Jd(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Jd(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), ep = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), eO = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.colorFillTertiary
      },
      [`${e.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${se(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${se(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
        }
      }
    }
  }, ep(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), ep(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${se(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Ty = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), My = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: a
  } = e;
  return {
    padding: `${se(t)} ${se(a)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, Iy = (e) => ({
  padding: `${se(e.paddingBlockSM)} ${se(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), jy = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${se(e.paddingBlock)} ${se(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, Ty(e.colorTextPlaceholder)), {
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: e.controlHeight,
    lineHeight: e.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${e.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, My(e)),
  "&-sm": Object.assign({}, Iy(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), tO = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, My(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Iy(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${se(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${se(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${se(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${se(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${r}-cascader-picker`]: {
          margin: `-9px ${se(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${r}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [t]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, Rw()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [t]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${r}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${r}-select > ${r}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${r}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, rO = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, o = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Bo(e)), jy(e)), Cy(e)), Ey(e)), _y(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: r,
          paddingTop: o,
          paddingBottom: o
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
}, nO = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      "&:hover": {
        color: e.colorTextTertiary
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${se(e.inputAffixPadding)}`
      }
    }
  };
}, aO = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: a,
    colorIcon: i,
    colorIconHover: o,
    iconCls: l
  } = e, u = `${t}-affix-wrapper`, c = `${t}-affix-wrapper-disabled`;
  return {
    [u]: Object.assign(Object.assign(Object.assign(Object.assign({}, jy(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: n
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: r
        },
        "&-suffix": {
          marginInlineStart: r
        }
      }
    }), nO(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: i,
        cursor: "pointer",
        transition: `all ${a}`,
        "&:hover": {
          color: o
        }
      }
    }),
    [c]: {
      // password disabled
      [`${l}${t}-password-icon`]: {
        color: i,
        cursor: "not-allowed",
        "&:hover": {
          color: i
        }
      }
    }
  };
}, iO = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Bo(e)), tO(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: r,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: n
          }
        }
      }, JS(e)), eO(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      })
    })
  };
}, oO = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e, n = `${t}-search`;
  return {
    [n]: {
      [t]: {
        "&:hover, &:focus": {
          [`+ ${t}-group-addon ${n}-button:not(${r}-btn-primary)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        height: e.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${n}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${n}-button:not(${r}-btn-primary)`]: {
            color: e.colorTextDescription,
            "&:hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${r}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${n}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${t}-affix-wrapper, ${n}-button`]: {
          height: e.controlHeightLG
        }
      },
      "&-small": {
        [`${t}-affix-wrapper, ${n}-button`]: {
          height: e.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, lO = (e) => {
  const {
    componentCls: t,
    paddingLG: r
  } = e, n = `${t}-textarea`;
  return {
    [n]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${t}`]: {
          height: "100%"
        },
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${n}-has-feedback ${t}
      `]: {
        paddingInlineEnd: r
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${n}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
        [`${t}-suffix`]: {
          [`${t}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, uO = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
};
og("Input", (e) => {
  const t = Gn(e, Oy(e));
  return [
    rO(t),
    lO(t),
    aO(t),
    iO(t),
    oO(t),
    uO(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    yg(t)
  ];
}, $y, {
  resetFont: !1
});
const vc = (e, t) => {
  const {
    componentCls: r,
    controlHeight: n
  } = e, a = t ? `${r}-${t}` : "", i = L1(e);
  return [
    // genSelectionStyle(token, suffix),
    {
      [`${r}-multiple${a}`]: {
        paddingBlock: i.containerPadding,
        paddingInlineStart: i.basePadding,
        minHeight: n,
        // ======================== Selections ========================
        [`${r}-selection-item`]: {
          height: i.itemHeight,
          lineHeight: se(i.itemLineHeight)
        }
      }
    }
  ];
}, cO = (e) => {
  const {
    componentCls: t,
    calc: r,
    lineWidth: n
  } = e, a = Gn(e, {
    fontHeight: e.fontSize,
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.multipleItemHeightSM,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS,
    controlHeight: e.controlHeightSM
  }), i = Gn(e, {
    fontHeight: r(e.multipleItemHeightLG).sub(r(n).mul(2).equal()).equal(),
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius,
    controlHeight: e.controlHeightLG
  });
  return [
    // ======================== Size ========================
    vc(a, "small"),
    vc(e),
    vc(i, "large"),
    // ====================== Selection ======================
    {
      [`${t}${t}-multiple`]: Object.assign(Object.assign({
        width: "100%",
        cursor: "text",
        // ==================== Selector =====================
        [`${t}-selector`]: {
          flex: "auto",
          padding: 0,
          position: "relative",
          "&:after": {
            margin: 0
          },
          // ================== placeholder ==================
          [`${t}-selection-placeholder`]: {
            position: "absolute",
            top: "50%",
            insetInlineStart: e.inputPaddingHorizontalBase,
            insetInlineEnd: 0,
            transform: "translateY(-50%)",
            transition: `all ${e.motionDurationSlow}`,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            flex: 1,
            color: e.colorTextPlaceholder,
            pointerEvents: "none"
          }
        }
      }, B1(e)), {
        // ====================== Input ======================
        // Input is `readonly`, which is used for a11y only
        [`${t}-multiple-input`]: {
          width: 0,
          height: 0,
          border: 0,
          visibility: "hidden",
          position: "absolute",
          zIndex: -1
        }
      })
    }
  ];
}, sO = (e) => {
  const {
    pickerCellCls: t,
    pickerCellInnerCls: r,
    cellHeight: n,
    borderRadiusSM: a,
    motionDurationMid: i,
    cellHoverBg: o,
    lineWidth: l,
    lineType: u,
    colorPrimary: c,
    cellActiveWithRangeBg: s,
    colorTextLightSolid: f,
    colorTextDisabled: d,
    cellBgDisabled: p,
    colorFillSecondary: h
  } = e;
  return {
    "&::before": {
      position: "absolute",
      top: "50%",
      insetInlineStart: 0,
      insetInlineEnd: 0,
      zIndex: 1,
      height: n,
      transform: "translateY(-50%)",
      content: '""'
    },
    // >>> Default
    [r]: {
      position: "relative",
      zIndex: 2,
      display: "inline-block",
      minWidth: n,
      height: n,
      lineHeight: se(n),
      borderRadius: a,
      transition: `background ${i}`
    },
    // >>> Hover
    [`&:hover:not(${t}-in-view):not(${t}-disabled),
    &:hover:not(${t}-selected):not(${t}-range-start):not(${t}-range-end):not(${t}-disabled)`]: {
      [r]: {
        background: o
      }
    },
    // >>> Today
    [`&-in-view${t}-today ${r}`]: {
      "&::before": {
        position: "absolute",
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 1,
        border: `${se(l)} ${u} ${c}`,
        borderRadius: a,
        content: '""'
      }
    },
    // >>> In Range
    [`&-in-view${t}-in-range,
      &-in-view${t}-range-start,
      &-in-view${t}-range-end`]: {
      position: "relative",
      [`&:not(${t}-disabled):before`]: {
        background: s
      }
    },
    // >>> Selected
    [`&-in-view${t}-selected,
      &-in-view${t}-range-start,
      &-in-view${t}-range-end`]: {
      [`&:not(${t}-disabled) ${r}`]: {
        color: f,
        background: c
      },
      [`&${t}-disabled ${r}`]: {
        background: h
      }
    },
    [`&-in-view${t}-range-start:not(${t}-disabled):before`]: {
      insetInlineStart: "50%"
    },
    [`&-in-view${t}-range-end:not(${t}-disabled):before`]: {
      insetInlineEnd: "50%"
    },
    // range start border-radius
    [`&-in-view${t}-range-start:not(${t}-range-end) ${r}`]: {
      borderStartStartRadius: a,
      borderEndStartRadius: a,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0
    },
    // range end border-radius
    [`&-in-view${t}-range-end:not(${t}-range-start) ${r}`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      borderStartEndRadius: a,
      borderEndEndRadius: a
    },
    // >>> Disabled
    "&-disabled": {
      color: d,
      cursor: "not-allowed",
      [r]: {
        background: "transparent"
      },
      "&::before": {
        background: p
      }
    },
    [`&-disabled${t}-today ${r}::before`]: {
      borderColor: d
    }
  };
}, fO = (e) => {
  const {
    componentCls: t,
    pickerCellCls: r,
    pickerCellInnerCls: n,
    pickerYearMonthCellWidth: a,
    pickerControlIconSize: i,
    cellWidth: o,
    paddingSM: l,
    paddingXS: u,
    paddingXXS: c,
    colorBgContainer: s,
    lineWidth: f,
    lineType: d,
    borderRadiusLG: p,
    colorPrimary: h,
    colorTextHeading: m,
    colorSplit: v,
    pickerControlIconBorderWidth: y,
    colorIcon: x,
    textHeight: w,
    motionDurationMid: O,
    colorIconHover: g,
    fontWeightStrong: b,
    cellHeight: $,
    pickerCellPaddingVertical: P,
    colorTextDisabled: A,
    colorText: T,
    fontSize: C,
    motionDurationSlow: M,
    withoutTimeCellHeight: D,
    pickerQuarterPanelContentHeight: I,
    borderRadiusSM: _,
    colorTextLightSolid: E,
    cellHoverBg: j,
    timeColumnHeight: k,
    timeColumnWidth: R,
    timeCellHeight: B,
    controlItemBgActive: H,
    marginXXS: L,
    pickerDatePanelPaddingHorizontal: V,
    pickerControlIconMargin: z
  } = e, K = e.calc(o).mul(7).add(e.calc(V).mul(2)).equal();
  return {
    [t]: {
      "&-panel": {
        display: "inline-flex",
        flexDirection: "column",
        textAlign: "center",
        background: s,
        borderRadius: p,
        outline: "none",
        "&-focused": {
          borderColor: h
        },
        "&-rtl": {
          [`${t}-prev-icon,
              ${t}-super-prev-icon`]: {
            transform: "rotate(45deg)"
          },
          [`${t}-next-icon,
              ${t}-super-next-icon`]: {
            transform: "rotate(-135deg)"
          },
          [`${t}-time-panel`]: {
            [`${t}-content`]: {
              direction: "ltr",
              "> *": {
                direction: "rtl"
              }
            }
          }
        }
      },
      // ========================================================
      // =                     Shared Panel                     =
      // ========================================================
      "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel": {
        display: "flex",
        flexDirection: "column",
        width: K
      },
      // ======================= Header =======================
      "&-header": {
        display: "flex",
        padding: `0 ${se(u)}`,
        color: m,
        borderBottom: `${se(f)} ${d} ${v}`,
        "> *": {
          flex: "none"
        },
        button: {
          padding: 0,
          color: x,
          lineHeight: se(w),
          background: "transparent",
          border: 0,
          cursor: "pointer",
          transition: `color ${O}`,
          fontSize: "inherit",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center"
        },
        "> button": {
          minWidth: "1.6em",
          fontSize: C,
          "&:hover": {
            color: g
          },
          "&:disabled": {
            opacity: 0.25,
            pointerEvents: "none"
          }
        },
        "&-view": {
          flex: "auto",
          fontWeight: b,
          lineHeight: se(w),
          "> button": {
            color: "inherit",
            fontWeight: "inherit",
            "&:not(:first-child)": {
              marginInlineStart: u
            },
            "&:hover": {
              color: h
            }
          }
        }
      },
      // Arrow button
      "&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon": {
        position: "relative",
        width: i,
        height: i,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          width: i,
          height: i,
          border: "0 solid currentcolor",
          borderBlockWidth: `${se(y)} 0`,
          borderInlineWidth: `${se(y)} 0`,
          content: '""'
        }
      },
      "&-super-prev-icon,\n        &-super-next-icon": {
        "&::after": {
          position: "absolute",
          top: z,
          insetInlineStart: z,
          display: "inline-block",
          width: i,
          height: i,
          border: "0 solid currentcolor",
          borderBlockWidth: `${se(y)} 0`,
          borderInlineWidth: `${se(y)} 0`,
          content: '""'
        }
      },
      "&-prev-icon, &-super-prev-icon": {
        transform: "rotate(-45deg)"
      },
      "&-next-icon, &-super-next-icon": {
        transform: "rotate(135deg)"
      },
      // ======================== Body ========================
      "&-content": {
        width: "100%",
        tableLayout: "fixed",
        borderCollapse: "collapse",
        "th, td": {
          position: "relative",
          minWidth: $,
          fontWeight: "normal"
        },
        th: {
          height: e.calc($).add(e.calc(P).mul(2)).equal(),
          color: T,
          verticalAlign: "middle"
        }
      },
      "&-cell": Object.assign({
        padding: `${se(P)} 0`,
        color: A,
        cursor: "pointer",
        // In view
        "&-in-view": {
          color: T
        }
      }, sO(e)),
      "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
        [`${t}-content`]: {
          height: e.calc(D).mul(4).equal()
        },
        [n]: {
          padding: `0 ${se(u)}`
        }
      },
      "&-quarter-panel": {
        [`${t}-content`]: {
          height: I
        }
      },
      // ========================================================
      // =                       Special                        =
      // ========================================================
      // ===================== Decade Panel =====================
      "&-decade-panel": {
        [n]: {
          padding: `0 ${se(e.calc(u).div(2).equal())}`
        },
        [`${t}-cell::before`]: {
          display: "none"
        }
      },
      // ============= Year & Quarter & Month Panel =============
      "&-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
        [`${t}-body`]: {
          padding: `0 ${se(u)}`
        },
        [n]: {
          width: a
        }
      },
      // ====================== Date Panel ======================
      "&-date-panel": {
        [`${t}-body`]: {
          padding: `${se(u)} ${se(V)}`
        },
        [`${t}-content th`]: {
          boxSizing: "border-box",
          padding: 0
        }
      },
      // ====================== Week Panel ======================
      "&-week-panel": {
        // Clear cell style
        [`${t}-cell`]: {
          [`&:hover ${n},
            &-selected ${n},
            ${n}`]: {
            background: "transparent !important"
          }
        },
        "&-row": {
          td: {
            "&:before": {
              transition: `background ${O}`
            },
            "&:first-child:before": {
              borderStartStartRadius: _,
              borderEndStartRadius: _
            },
            "&:last-child:before": {
              borderStartEndRadius: _,
              borderEndEndRadius: _
            }
          },
          "&:hover td": {
            "&:before": {
              background: j
            }
          },
          "&-range-start td, &-range-end td, &-selected td, &-hover td": {
            // Rise priority to override hover style
            [`&${r}`]: {
              "&:before": {
                background: h
              },
              [`&${t}-cell-week`]: {
                color: new Fo(E).setAlpha(0.5).toHexString()
              },
              [n]: {
                color: E
              }
            }
          },
          "&-range-hover td:before": {
            background: H
          }
        }
      },
      // >>> ShowWeek
      "&-week-panel, &-date-panel-show-week": {
        [`${t}-body`]: {
          padding: `${se(u)} ${se(l)}`
        },
        [`${t}-content th`]: {
          width: "auto"
        }
      },
      // ==================== Datetime Panel ====================
      "&-datetime-panel": {
        display: "flex",
        [`${t}-time-panel`]: {
          borderInlineStart: `${se(f)} ${d} ${v}`
        },
        [`${t}-date-panel,
          ${t}-time-panel`]: {
          transition: `opacity ${M}`
        },
        // Keyboard
        "&-active": {
          [`${t}-date-panel,
            ${t}-time-panel`]: {
            opacity: 0.3,
            "&-active": {
              opacity: 1
            }
          }
        }
      },
      // ====================== Time Panel ======================
      "&-time-panel": {
        width: "auto",
        minWidth: "auto",
        [`${t}-content`]: {
          display: "flex",
          flex: "auto",
          height: k
        },
        "&-column": {
          flex: "1 0 auto",
          width: R,
          margin: `${se(c)} 0`,
          padding: 0,
          overflowY: "hidden",
          textAlign: "start",
          listStyle: "none",
          transition: `background ${O}`,
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: 8,
            backgroundColor: "transparent"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: e.colorTextTertiary,
            borderRadius: e.borderRadiusSM
          },
          // For Firefox
          "&": {
            scrollbarWidth: "thin",
            scrollbarColor: `${e.colorTextTertiary} transparent`
          },
          "&::after": {
            display: "block",
            height: e.calc("100%").sub(B).equal(),
            content: '""'
          },
          "&:not(:first-child)": {
            borderInlineStart: `${se(f)} ${d} ${v}`
          },
          "&-active": {
            background: new Fo(H).setAlpha(0.2).toHexString()
          },
          "&:hover": {
            overflowY: "auto"
          },
          "> li": {
            margin: 0,
            padding: 0,
            [`&${t}-time-panel-cell`]: {
              marginInline: L,
              [`${t}-time-panel-cell-inner`]: {
                display: "block",
                width: e.calc(R).sub(e.calc(L).mul(2)).equal(),
                height: B,
                margin: 0,
                paddingBlock: 0,
                paddingInlineEnd: 0,
                paddingInlineStart: e.calc(R).sub(B).div(2).equal(),
                color: T,
                lineHeight: se(B),
                borderRadius: _,
                cursor: "pointer",
                transition: `background ${O}`,
                "&:hover": {
                  background: j
                }
              },
              "&-selected": {
                [`${t}-time-panel-cell-inner`]: {
                  background: H
                }
              },
              "&-disabled": {
                [`${t}-time-panel-cell-inner`]: {
                  color: A,
                  background: "transparent",
                  cursor: "not-allowed"
                }
              }
            }
          }
        }
      }
    }
  };
}, dO = (e) => {
  const {
    componentCls: t,
    textHeight: r,
    lineWidth: n,
    paddingSM: a,
    antCls: i,
    colorPrimary: o,
    cellActiveWithRangeBg: l,
    colorPrimaryBorder: u,
    lineType: c,
    colorSplit: s
  } = e;
  return {
    [`${t}-dropdown`]: {
      // ======================== Footer ========================
      [`${t}-footer`]: {
        borderTop: `${se(n)} ${c} ${s}`,
        "&-extra": {
          padding: `0 ${se(a)}`,
          lineHeight: se(e.calc(r).sub(e.calc(n).mul(2)).equal()),
          textAlign: "start",
          "&:not(:last-child)": {
            borderBottom: `${se(n)} ${c} ${s}`
          }
        }
      },
      // ==================== Footer > Ranges ===================
      [`${t}-panels + ${t}-footer ${t}-ranges`]: {
        justifyContent: "space-between"
      },
      [`${t}-ranges`]: {
        marginBlock: 0,
        paddingInline: se(a),
        overflow: "hidden",
        textAlign: "start",
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "> li": {
          lineHeight: se(e.calc(r).sub(e.calc(n).mul(2)).equal()),
          display: "inline-block"
        },
        [`${t}-now-btn-disabled`]: {
          pointerEvents: "none",
          color: e.colorTextDisabled
        },
        // https://github.com/ant-design/ant-design/issues/23687
        [`${t}-preset > ${i}-tag-blue`]: {
          color: o,
          background: l,
          borderColor: u,
          cursor: "pointer"
        },
        [`${t}-ok`]: {
          paddingBlock: e.calc(n).mul(2).equal(),
          marginInlineStart: "auto"
        }
      }
    }
  };
}, pO = (e) => {
  const {
    componentCls: t,
    controlHeightLG: r,
    paddingXXS: n,
    padding: a
  } = e;
  return {
    pickerCellCls: `${t}-cell`,
    pickerCellInnerCls: `${t}-cell-inner`,
    pickerYearMonthCellWidth: e.calc(r).mul(1.5).equal(),
    pickerQuarterPanelContentHeight: e.calc(r).mul(1.4).equal(),
    pickerCellPaddingVertical: e.calc(n).add(e.calc(n).div(2)).equal(),
    pickerCellBorderGap: 2,
    // Magic for gap between cells
    pickerControlIconSize: 7,
    pickerControlIconMargin: 4,
    pickerControlIconBorderWidth: 1.5,
    pickerDatePanelPaddingHorizontal: e.calc(a).add(e.calc(n).div(2)).equal()
    // 18 in normal
  };
}, vO = (e) => {
  const {
    colorBgContainerDisabled: t,
    controlHeight: r,
    controlHeightSM: n,
    controlHeightLG: a,
    paddingXXS: i,
    lineWidth: o
  } = e, l = i * 2, u = o * 2, c = Math.min(r - l, r - u), s = Math.min(n - l, n - u), f = Math.min(a - l, a - u);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(i / 2),
    cellHoverBg: e.controlItemBgHover,
    cellActiveWithRangeBg: e.controlItemBgActive,
    cellHoverWithRangeBg: new Fo(e.colorPrimary).lighten(35).toHexString(),
    cellRangeBorderColor: new Fo(e.colorPrimary).lighten(20).toHexString(),
    cellBgDisabled: t,
    timeColumnWidth: a * 1.4,
    timeColumnHeight: 28 * 8,
    timeCellHeight: 28,
    cellWidth: n * 1.5,
    cellHeight: n,
    textHeight: a,
    withoutTimeCellHeight: a * 1.65,
    multipleItemBg: e.colorFillSecondary,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: c,
    multipleItemHeightSM: s,
    multipleItemHeightLG: f,
    multipleSelectorBgDisabled: t,
    multipleItemColorDisabled: e.colorTextDisabled,
    multipleItemBorderColorDisabled: "transparent"
  };
}, hO = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, $y(e)), vO(e)), e1(e)), {
  presetsWidth: 120,
  presetsMaxWidth: 200,
  zIndexPopup: e.zIndexPopupBase + 50
}), mO = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: [
      Object.assign(Object.assign(Object.assign({}, Cy(e)), Ey(e)), _y(e)),
      // ========================= Multiple =========================
      {
        "&-outlined": {
          [`&${t}-multiple ${t}-selection-item`]: {
            background: e.multipleItemBg,
            border: `${se(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
          }
        },
        "&-filled": {
          [`&${t}-multiple ${t}-selection-item`]: {
            background: e.colorBgContainer,
            border: `${se(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
          }
        },
        "&-borderless": {
          [`&${t}-multiple ${t}-selection-item`]: {
            background: e.multipleItemBg,
            border: `${se(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
          }
        }
      }
    ]
  };
}, hc = (e, t, r, n) => {
  const a = e.calc(r).add(2).equal(), i = e.max(e.calc(t).sub(a).div(2).equal(), 0), o = e.max(e.calc(t).sub(a).sub(i).equal(), 0);
  return {
    padding: `${se(i)} ${se(n)} ${se(o)}`
  };
}, gO = (e) => {
  const {
    componentCls: t,
    colorError: r,
    colorWarning: n
  } = e;
  return {
    [`${t}:not(${t}-disabled):not([disabled])`]: {
      [`&${t}-status-error`]: {
        [`${t}-active-bar`]: {
          background: r
        }
      },
      [`&${t}-status-warning`]: {
        [`${t}-active-bar`]: {
          background: n
        }
      }
    }
  };
}, yO = (e) => {
  const {
    componentCls: t,
    antCls: r,
    controlHeight: n,
    paddingInline: a,
    lineWidth: i,
    lineType: o,
    colorBorder: l,
    borderRadius: u,
    motionDurationMid: c,
    colorTextDisabled: s,
    colorTextPlaceholder: f,
    controlHeightLG: d,
    fontSizeLG: p,
    controlHeightSM: h,
    paddingInlineSM: m,
    paddingXS: v,
    marginXS: y,
    colorTextDescription: x,
    lineWidthBold: w,
    colorPrimary: O,
    motionDurationSlow: g,
    zIndexPopup: b,
    paddingXXS: $,
    sizePopupArrow: P,
    colorBgElevated: A,
    borderRadiusLG: T,
    boxShadowSecondary: C,
    borderRadiusSM: M,
    colorSplit: D,
    cellHoverBg: I,
    presetsWidth: _,
    presetsMaxWidth: E,
    boxShadowPopoverArrow: j,
    fontHeight: k,
    fontHeightLG: R,
    lineHeightLG: B
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign({}, Bo(e)), hc(e, n, k, a)), {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        borderRadius: u,
        transition: `border ${c}, box-shadow ${c}, background ${c}`,
        // ======================== Input =========================
        [`${t}-input`]: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          width: "100%",
          "> input": Object.assign(Object.assign({
            position: "relative",
            display: "inline-block",
            width: "100%",
            color: "inherit",
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            transition: `all ${c}`
          }, Ty(f)), {
            flex: "auto",
            // Fix Firefox flex not correct:
            // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
            minWidth: 1,
            height: "auto",
            padding: 0,
            background: "transparent",
            border: 0,
            fontFamily: "inherit",
            "&:focus": {
              boxShadow: "none",
              outline: 0
            },
            "&[disabled]": {
              background: "transparent",
              color: s,
              cursor: "not-allowed"
            }
          }),
          "&-placeholder": {
            "> input": {
              color: f
            }
          }
        },
        // Size
        "&-large": Object.assign(Object.assign({}, hc(e, d, R, a)), {
          [`${t}-input > input`]: {
            fontSize: p,
            lineHeight: B
          }
        }),
        "&-small": Object.assign({}, hc(e, h, k, m)),
        [`${t}-suffix`]: {
          display: "flex",
          flex: "none",
          alignSelf: "center",
          marginInlineStart: e.calc(v).div(2).equal(),
          color: s,
          lineHeight: 1,
          pointerEvents: "none",
          transition: `opacity ${c}, color ${c}`,
          "> *": {
            verticalAlign: "top",
            "&:not(:last-child)": {
              marginInlineEnd: y
            }
          }
        },
        [`${t}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineEnd: 0,
          color: s,
          lineHeight: 1,
          transform: "translateY(-50%)",
          cursor: "pointer",
          opacity: 0,
          transition: `opacity ${c}, color ${c}`,
          "> *": {
            verticalAlign: "top"
          },
          "&:hover": {
            color: x
          }
        },
        "&:hover": {
          [`${t}-clear`]: {
            opacity: 1
          },
          // Should use the following selector, but since `:has` has poor compatibility,
          // we use `:not(:last-child)` instead, which may cause some problems in some cases.
          // [`${componentCls}-suffix:has(+ ${componentCls}-clear)`]: {
          [`${t}-suffix:not(:last-child)`]: {
            opacity: 0
          }
        },
        [`${t}-separator`]: {
          position: "relative",
          display: "inline-block",
          width: "1em",
          height: p,
          color: s,
          fontSize: p,
          verticalAlign: "top",
          cursor: "default",
          [`${t}-focused &`]: {
            color: x
          },
          [`${t}-range-separator &`]: {
            [`${t}-disabled &`]: {
              cursor: "not-allowed"
            }
          }
        },
        // ======================== Range =========================
        "&-range": {
          position: "relative",
          display: "inline-flex",
          // Active bar
          [`${t}-active-bar`]: {
            bottom: e.calc(i).mul(-1).equal(),
            height: w,
            background: O,
            opacity: 0,
            transition: `all ${g} ease-out`,
            pointerEvents: "none"
          },
          [`&${t}-focused`]: {
            [`${t}-active-bar`]: {
              opacity: 1
            }
          },
          [`${t}-range-separator`]: {
            alignItems: "center",
            padding: `0 ${se(v)}`,
            lineHeight: 1
          }
        },
        // ======================== Clear =========================
        "&-range, &-multiple": {
          // Clear
          [`${t}-clear`]: {
            insetInlineEnd: a
          },
          [`&${t}-small`]: {
            [`${t}-clear`]: {
              insetInlineEnd: m
            }
          }
        },
        // ======================= Dropdown =======================
        "&-dropdown": Object.assign(Object.assign(Object.assign({}, Bo(e)), fO(e)), {
          pointerEvents: "none",
          position: "absolute",
          // Fix incorrect position of picker popup
          // https://github.com/ant-design/ant-design/issues/35590
          top: -9999,
          left: {
            _skip_check_: !0,
            value: -9999
          },
          zIndex: b,
          [`&${t}-dropdown-hidden`]: {
            display: "none"
          },
          "&-rtl": {
            direction: "rtl"
          },
          [`&${t}-dropdown-placement-bottomLeft,
            &${t}-dropdown-placement-bottomRight`]: {
            [`${t}-range-arrow`]: {
              top: 0,
              display: "block",
              transform: "translateY(-100%)"
            }
          },
          [`&${t}-dropdown-placement-topLeft,
            &${t}-dropdown-placement-topRight`]: {
            [`${t}-range-arrow`]: {
              bottom: 0,
              display: "block",
              transform: "translateY(100%) rotate(180deg)"
            }
          },
          [`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-topRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-topRight`]: {
            animationName: $g
          },
          [`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]: {
            animationName: Sg
          },
          // https://github.com/ant-design/ant-design/issues/48727
          [`&${r}-slide-up-leave ${t}-panel-container`]: {
            pointerEvents: "none"
          },
          [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topRight`]: {
            animationName: Pg
          },
          [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]: {
            animationName: Og
          },
          // Time picker with additional style
          [`${t}-panel > ${t}-time-panel`]: {
            paddingTop: $
          },
          // ======================== Ranges ========================
          [`${t}-range-wrapper`]: {
            display: "flex",
            position: "relative"
          },
          [`${t}-range-arrow`]: Object.assign(Object.assign({
            position: "absolute",
            zIndex: 1,
            display: "none",
            paddingInline: e.calc(a).mul(1.5).equal(),
            boxSizing: "content-box",
            transition: `all ${g} ease-out`
          }, t1(e, A, j)), {
            "&:before": {
              insetInlineStart: e.calc(a).mul(1.5).equal()
            }
          }),
          [`${t}-panel-container`]: {
            overflow: "hidden",
            verticalAlign: "top",
            background: A,
            borderRadius: T,
            boxShadow: C,
            transition: `margin ${g}`,
            display: "inline-block",
            pointerEvents: "auto",
            // ======================== Layout ========================
            [`${t}-panel-layout`]: {
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "stretch"
            },
            // ======================== Preset ========================
            [`${t}-presets`]: {
              display: "flex",
              flexDirection: "column",
              minWidth: _,
              maxWidth: E,
              ul: {
                height: 0,
                flex: "auto",
                listStyle: "none",
                overflow: "auto",
                margin: 0,
                padding: v,
                borderInlineEnd: `${se(i)} ${o} ${D}`,
                li: Object.assign(Object.assign({}, Lw), {
                  borderRadius: M,
                  paddingInline: v,
                  paddingBlock: e.calc(h).sub(k).div(2).equal(),
                  cursor: "pointer",
                  transition: `all ${g}`,
                  "+ li": {
                    marginTop: y
                  },
                  "&:hover": {
                    background: I
                  }
                })
              }
            },
            // ======================== Panels ========================
            [`${t}-panels`]: {
              display: "inline-flex",
              flexWrap: "nowrap",
              // [`${componentCls}-panel`]: {
              //   borderWidth: `0 0 ${unit(lineWidth)}`,
              // },
              "&:last-child": {
                [`${t}-panel`]: {
                  borderWidth: 0
                }
              }
            },
            [`${t}-panel`]: {
              verticalAlign: "top",
              background: "transparent",
              borderRadius: 0,
              borderWidth: 0,
              [`${t}-content, table`]: {
                textAlign: "center"
              },
              "&-focused": {
                borderColor: l
              }
            }
          }
        }),
        "&-dropdown-range": {
          padding: `${se(e.calc(P).mul(2).div(3).equal())} 0`,
          "&-hidden": {
            display: "none"
          }
        },
        "&-rtl": {
          direction: "rtl",
          [`${t}-separator`]: {
            transform: "rotate(180deg)"
          },
          [`${t}-footer`]: {
            "&-extra": {
              direction: "rtl"
            }
          }
        }
      })
    },
    // Follow code may reuse in other components
    Ud(e, "slide-up"),
    Ud(e, "slide-down"),
    zd(e, "move-up"),
    zd(e, "move-down")
  ];
}, Dy = og("DatePicker", (e) => {
  const t = Gn(Oy(e), pO(e), {
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [
    dO(t),
    yO(t),
    mO(t),
    gO(t),
    cO(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    yg(e, {
      focusElCls: `${e.componentCls}-focused`
    })
  ];
}, hO);
var bO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" }, xO = function(t, r) {
  return /* @__PURE__ */ S.createElement(qi, Pe({}, t, {
    ref: r,
    icon: bO
  }));
}, Bf = /* @__PURE__ */ S.forwardRef(xO);
je.env.NODE_ENV !== "production" && (Bf.displayName = "CalendarOutlined");
var wO = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, name: "clock-circle", theme: "outlined" }, SO = function(t, r) {
  return /* @__PURE__ */ S.createElement(qi, Pe({}, t, {
    ref: r,
    icon: wO
  }));
}, Ff = /* @__PURE__ */ S.forwardRef(SO);
je.env.NODE_ENV !== "production" && (Ff.displayName = "ClockCircleOutlined");
var OO = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, name: "swap-right", theme: "outlined" }, $O = function(t, r) {
  return /* @__PURE__ */ S.createElement(qi, Pe({}, t, {
    ref: r,
    icon: OO
  }));
}, ky = /* @__PURE__ */ S.forwardRef($O);
je.env.NODE_ENV !== "production" && (ky.displayName = "SwapRightOutlined");
function PO(e, t, r) {
  return r !== void 0 ? r : t === "year" && e.lang.yearPlaceholder ? e.lang.yearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.quarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.monthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.weekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.placeholder : e.lang.placeholder;
}
function CO(e, t, r) {
  return r !== void 0 ? r : t === "year" && e.lang.yearPlaceholder ? e.lang.rangeYearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.rangeQuarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.rangeMonthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.rangeWeekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.rangePlaceholder : e.lang.rangePlaceholder;
}
function Hf(e, t) {
  const r = {
    adjustX: 1,
    adjustY: 1
  };
  switch (t) {
    case "bottomLeft":
      return {
        points: ["tl", "bl"],
        offset: [0, 4],
        overflow: r
      };
    case "bottomRight":
      return {
        points: ["tr", "br"],
        offset: [0, 4],
        overflow: r
      };
    case "topLeft":
      return {
        points: ["bl", "tl"],
        offset: [0, -4],
        overflow: r
      };
    case "topRight":
      return {
        points: ["br", "tr"],
        offset: [0, -4],
        overflow: r
      };
    default:
      return {
        points: e === "rtl" ? ["tr", "br"] : ["tl", "bl"],
        offset: [0, 4],
        overflow: r
      };
  }
}
function Ny(e, t) {
  const {
    allowClear: r = !0
  } = e, {
    clearIcon: n,
    removeIcon: a
  } = z1(Object.assign(Object.assign({}, e), {
    prefixCls: t,
    componentName: "DatePicker"
  }));
  return [S.useMemo(() => r === !1 ? !1 : Object.assign({
    clearIcon: n
  }, r === !0 ? {} : r), [r, n]), a];
}
const [_O, AO] = ["week", "WeekPicker"], [EO, TO] = ["month", "MonthPicker"], [MO, IO] = ["year", "YearPicker"], [jO, DO] = ["quarter", "QuarterPicker"], [Ry, tp] = ["time", "TimePicker"], kO = (e) => /* @__PURE__ */ S.createElement(i1, Object.assign({
  size: "small",
  type: "primary"
}, e));
function Ly(e) {
  return S.useMemo(() => Object.assign({
    button: kO
  }, e), [e]);
}
var NO = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const RO = (e) => {
  const t = /* @__PURE__ */ S.forwardRef((r, n) => {
    var a;
    const {
      prefixCls: i,
      getPopupContainer: o,
      components: l,
      className: u,
      style: c,
      placement: s,
      size: f,
      disabled: d,
      bordered: p = !0,
      placeholder: h,
      popupClassName: m,
      dropdownClassName: v,
      status: y,
      rootClassName: x,
      variant: w,
      picker: O
    } = r, g = NO(r, ["prefixCls", "getPopupContainer", "components", "className", "style", "placement", "size", "disabled", "bordered", "placeholder", "popupClassName", "dropdownClassName", "status", "rootClassName", "variant", "picker"]), b = S.useRef(null), {
      getPrefixCls: $,
      direction: P,
      getPopupContainer: A,
      rangePicker: T
    } = S.useContext(Yl), C = $("picker", i), {
      compactSize: M,
      compactItemClassnames: D
    } = vg(C, P), I = $(), [_, E] = Ig("rangePicker", w, p), j = lg(C), [k, R, B] = Dy(C, j);
    if (je.env.NODE_ENV !== "production") {
      const Q = Of("DatePicker.RangePicker");
      Q.deprecated(!v, "dropdownClassName", "popupClassName"), Q.deprecated(!("bordered" in r), "bordered", "variant");
    }
    const [H] = Ny(r, C), L = Ly(l), V = bg((Q) => {
      var ue;
      return (ue = f ?? M) !== null && ue !== void 0 ? ue : Q;
    }), z = S.useContext(ug), K = d ?? z, J = S.useContext(hg), {
      hasFeedback: te,
      status: ie,
      feedbackIcon: U
    } = J, G = /* @__PURE__ */ S.createElement(S.Fragment, null, O === Ry ? /* @__PURE__ */ S.createElement(Ff, null) : /* @__PURE__ */ S.createElement(Bf, null), te && U);
    S.useImperativeHandle(n, () => b.current);
    const [q] = xg("Calendar", sg), W = Object.assign(Object.assign({}, q), r.locale), [Z] = cg("DatePicker", (a = r.popupStyle) === null || a === void 0 ? void 0 : a.zIndex);
    return k(/* @__PURE__ */ S.createElement(mg, {
      space: !0
    }, /* @__PURE__ */ S.createElement(xy, Object.assign({
      separator: /* @__PURE__ */ S.createElement("span", {
        "aria-label": "to",
        className: `${C}-separator`
      }, /* @__PURE__ */ S.createElement(ky, null)),
      disabled: K,
      ref: b,
      popupAlign: Hf(P, s),
      placement: s,
      placeholder: CO(W, O, h),
      suffixIcon: G,
      prevIcon: /* @__PURE__ */ S.createElement("span", {
        className: `${C}-prev-icon`
      }),
      nextIcon: /* @__PURE__ */ S.createElement("span", {
        className: `${C}-next-icon`
      }),
      superPrevIcon: /* @__PURE__ */ S.createElement("span", {
        className: `${C}-super-prev-icon`
      }),
      superNextIcon: /* @__PURE__ */ S.createElement("span", {
        className: `${C}-super-next-icon`
      }),
      transitionName: `${I}-slide-up`,
      picker: O
    }, g, {
      className: qe({
        [`${C}-${V}`]: V,
        [`${C}-${_}`]: E
      }, Tg(C, Mg(ie, y), te), R, D, u, T == null ? void 0 : T.className, B, j, x),
      style: Object.assign(Object.assign({}, T == null ? void 0 : T.style), c),
      locale: W.lang,
      prefixCls: C,
      getPopupContainer: o || A,
      generateConfig: e,
      components: L,
      direction: P,
      classNames: {
        popup: qe(R, m || v, B, j, x)
      },
      styles: {
        popup: Object.assign(Object.assign({}, r.popupStyle), {
          zIndex: Z
        })
      },
      allowClear: H
    }))));
  });
  return je.env.NODE_ENV !== "production" && (t.displayName = "RangePicker"), t;
};
var LO = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const BO = (e) => {
  const t = (u, c) => {
    const s = c === tp ? "timePicker" : "datePicker", f = /* @__PURE__ */ S.forwardRef((d, p) => {
      var h;
      const {
        prefixCls: m,
        getPopupContainer: v,
        components: y,
        style: x,
        className: w,
        rootClassName: O,
        size: g,
        bordered: b,
        placement: $,
        placeholder: P,
        popupClassName: A,
        dropdownClassName: T,
        disabled: C,
        status: M,
        variant: D,
        onCalendarChange: I
      } = d, _ = LO(d, ["prefixCls", "getPopupContainer", "components", "style", "className", "rootClassName", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status", "variant", "onCalendarChange"]), {
        getPrefixCls: E,
        direction: j,
        getPopupContainer: k,
        // Consume different styles according to different names
        [s]: R
      } = S.useContext(Yl), B = E("picker", m), {
        compactSize: H,
        compactItemClassnames: L
      } = vg(B, j), V = S.useRef(null), [z, K] = Ig("datePicker", D, b), J = lg(B), [te, ie, U] = Dy(B, J);
      S.useImperativeHandle(p, () => V.current);
      const G = {
        showToday: !0
      }, q = u || d.picker, W = E(), {
        onSelect: Z,
        multiple: Q
      } = _, ue = Z && u === "time" && !Q, re = (Ge, We, he) => {
        I == null || I(Ge, We, he), ue && Z(Ge);
      };
      if (je.env.NODE_ENV !== "production") {
        const Ge = Of(c || "DatePicker");
        je.env.NODE_ENV !== "production" && Ge(u !== "quarter", "deprecated", `DatePicker.${c} is legacy usage. Please use DatePicker[picker='${u}'] directly.`), Ge.deprecated(!T, "dropdownClassName", "popupClassName"), Ge.deprecated(!("bordered" in d), "bordered", "variant"), Ge.deprecated(!ue, "onSelect", "onCalendarChange");
      }
      const [ne, de] = Ny(d, B), Oe = Ly(y), Re = bg((Ge) => {
        var We;
        return (We = g ?? H) !== null && We !== void 0 ? We : Ge;
      }), Ee = S.useContext(ug), De = C ?? Ee, it = S.useContext(hg), {
        hasFeedback: ot,
        status: nt,
        feedbackIcon: ze
      } = it, He = /* @__PURE__ */ S.createElement(S.Fragment, null, q === "time" ? /* @__PURE__ */ S.createElement(Ff, null) : /* @__PURE__ */ S.createElement(Bf, null), ot && ze), [Wt] = xg("DatePicker", sg), Fe = Object.assign(Object.assign({}, Wt), d.locale), [ct] = cg("DatePicker", (h = d.popupStyle) === null || h === void 0 ? void 0 : h.zIndex);
      return te(/* @__PURE__ */ S.createElement(mg, {
        space: !0
      }, /* @__PURE__ */ S.createElement(Sy, Object.assign({
        ref: V,
        placeholder: PO(Fe, q, P),
        suffixIcon: He,
        dropdownAlign: Hf(j, $),
        placement: $,
        prevIcon: /* @__PURE__ */ S.createElement("span", {
          className: `${B}-prev-icon`
        }),
        nextIcon: /* @__PURE__ */ S.createElement("span", {
          className: `${B}-next-icon`
        }),
        superPrevIcon: /* @__PURE__ */ S.createElement("span", {
          className: `${B}-super-prev-icon`
        }),
        superNextIcon: /* @__PURE__ */ S.createElement("span", {
          className: `${B}-super-next-icon`
        }),
        transitionName: `${W}-slide-up`,
        picker: u,
        onCalendarChange: re
      }, G, _, {
        locale: Fe.lang,
        className: qe({
          [`${B}-${Re}`]: Re,
          [`${B}-${z}`]: K
        }, Tg(B, Mg(nt, M), ot), ie, L, R == null ? void 0 : R.className, w, U, J, O),
        style: Object.assign(Object.assign({}, R == null ? void 0 : R.style), x),
        prefixCls: B,
        getPopupContainer: v || k,
        generateConfig: e,
        components: Oe,
        direction: j,
        disabled: De,
        classNames: {
          popup: qe(ie, U, J, O, A || T)
        },
        styles: {
          popup: Object.assign(Object.assign({}, d.popupStyle), {
            zIndex: ct
          })
        },
        allowClear: ne,
        removeIcon: de
      }))));
    });
    return je.env.NODE_ENV !== "production" && c && (f.displayName = c), f;
  }, r = t(), n = t(_O, AO), a = t(EO, TO), i = t(MO, IO), o = t(jO, DO), l = t(Ry, tp);
  return {
    DatePicker: r,
    WeekPicker: n,
    MonthPicker: a,
    YearPicker: i,
    TimePicker: l,
    QuarterPicker: o
  };
}, By = (e) => {
  const {
    DatePicker: t,
    WeekPicker: r,
    MonthPicker: n,
    YearPicker: a,
    TimePicker: i,
    QuarterPicker: o
  } = BO(e), l = RO(e), u = t;
  return u.WeekPicker = r, u.MonthPicker = n, u.YearPicker = a, u.RangePicker = l, u.TimePicker = i, u.QuarterPicker = o, je.env.NODE_ENV !== "production" && (u.displayName = "DatePicker"), u;
}, Pa = By(iS);
function Fy(e) {
  const t = Hf(e.direction, e.placement);
  return t.overflow.adjustY = !1, t.overflow.adjustX = !1, Object.assign(Object.assign({}, e), {
    dropdownAlign: t
  });
}
const FO = Cg(Pa, "picker", null, Fy);
Pa._InternalPanelDoNotUseOrYouWillBeFired = FO;
const HO = Cg(Pa.RangePicker, "picker", null, Fy);
Pa._InternalRangePanelDoNotUseOrYouWillBeFired = HO;
Pa.generatePicker = By;
var WO = Array.isArray, Ht = WO, VO = typeof lr == "object" && lr && lr.Object === Object && lr, Hy = VO, zO = Hy, UO = typeof self == "object" && self && self.Object === Object && self, YO = zO || UO || Function("return this")(), Pr = YO, qO = Pr, KO = qO.Symbol, Ji = KO, rp = Ji, Wy = Object.prototype, GO = Wy.hasOwnProperty, XO = Wy.toString, Ya = rp ? rp.toStringTag : void 0;
function ZO(e) {
  var t = GO.call(e, Ya), r = e[Ya];
  try {
    e[Ya] = void 0;
    var n = !0;
  } catch {
  }
  var a = XO.call(e);
  return n && (t ? e[Ya] = r : delete e[Ya]), a;
}
var QO = ZO, JO = Object.prototype, e$ = JO.toString;
function t$(e) {
  return e$.call(e);
}
var r$ = t$, np = Ji, n$ = QO, a$ = r$, i$ = "[object Null]", o$ = "[object Undefined]", ap = np ? np.toStringTag : void 0;
function l$(e) {
  return e == null ? e === void 0 ? o$ : i$ : ap && ap in Object(e) ? n$(e) : a$(e);
}
var Br = l$;
function u$(e) {
  return e != null && typeof e == "object";
}
var Fr = u$, c$ = Br, s$ = Fr, f$ = "[object Symbol]";
function d$(e) {
  return typeof e == "symbol" || s$(e) && c$(e) == f$;
}
var Ca = d$, p$ = Ht, v$ = Ca, h$ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, m$ = /^\w*$/;
function g$(e, t) {
  if (p$(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || v$(e) ? !0 : m$.test(e) || !h$.test(e) || t != null && e in Object(t);
}
var Wf = g$;
function y$(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qr = y$;
const _a = /* @__PURE__ */ Le(Qr);
var b$ = Br, x$ = Qr, w$ = "[object AsyncFunction]", S$ = "[object Function]", O$ = "[object GeneratorFunction]", $$ = "[object Proxy]";
function P$(e) {
  if (!x$(e))
    return !1;
  var t = b$(e);
  return t == S$ || t == O$ || t == w$ || t == $$;
}
var Vf = P$;
const we = /* @__PURE__ */ Le(Vf);
var C$ = Pr, _$ = C$["__core-js_shared__"], A$ = _$, mc = A$, ip = function() {
  var e = /[^.]+$/.exec(mc && mc.keys && mc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function E$(e) {
  return !!ip && ip in e;
}
var T$ = E$, M$ = Function.prototype, I$ = M$.toString;
function j$(e) {
  if (e != null) {
    try {
      return I$.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vy = j$, D$ = Vf, k$ = T$, N$ = Qr, R$ = Vy, L$ = /[\\^$.*+?()[\]{}|]/g, B$ = /^\[object .+?Constructor\]$/, F$ = Function.prototype, H$ = Object.prototype, W$ = F$.toString, V$ = H$.hasOwnProperty, z$ = RegExp(
  "^" + W$.call(V$).replace(L$, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function U$(e) {
  if (!N$(e) || k$(e))
    return !1;
  var t = D$(e) ? z$ : B$;
  return t.test(R$(e));
}
var Y$ = U$;
function q$(e, t) {
  return e == null ? void 0 : e[t];
}
var K$ = q$, G$ = Y$, X$ = K$;
function Z$(e, t) {
  var r = X$(e, t);
  return G$(r) ? r : void 0;
}
var En = Z$, Q$ = En, J$ = Q$(Object, "create"), tu = J$, op = tu;
function eP() {
  this.__data__ = op ? op(null) : {}, this.size = 0;
}
var tP = eP;
function rP(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nP = rP, aP = tu, iP = "__lodash_hash_undefined__", oP = Object.prototype, lP = oP.hasOwnProperty;
function uP(e) {
  var t = this.__data__;
  if (aP) {
    var r = t[e];
    return r === iP ? void 0 : r;
  }
  return lP.call(t, e) ? t[e] : void 0;
}
var cP = uP, sP = tu, fP = Object.prototype, dP = fP.hasOwnProperty;
function pP(e) {
  var t = this.__data__;
  return sP ? t[e] !== void 0 : dP.call(t, e);
}
var vP = pP, hP = tu, mP = "__lodash_hash_undefined__";
function gP(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = hP && t === void 0 ? mP : t, this;
}
var yP = gP, bP = tP, xP = nP, wP = cP, SP = vP, OP = yP;
function Aa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Aa.prototype.clear = bP;
Aa.prototype.delete = xP;
Aa.prototype.get = wP;
Aa.prototype.has = SP;
Aa.prototype.set = OP;
var $P = Aa;
function PP() {
  this.__data__ = [], this.size = 0;
}
var CP = PP;
function _P(e, t) {
  return e === t || e !== e && t !== t;
}
var zf = _P, AP = zf;
function EP(e, t) {
  for (var r = e.length; r--; )
    if (AP(e[r][0], t))
      return r;
  return -1;
}
var ru = EP, TP = ru, MP = Array.prototype, IP = MP.splice;
function jP(e) {
  var t = this.__data__, r = TP(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : IP.call(t, r, 1), --this.size, !0;
}
var DP = jP, kP = ru;
function NP(e) {
  var t = this.__data__, r = kP(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var RP = NP, LP = ru;
function BP(e) {
  return LP(this.__data__, e) > -1;
}
var FP = BP, HP = ru;
function WP(e, t) {
  var r = this.__data__, n = HP(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var VP = WP, zP = CP, UP = DP, YP = RP, qP = FP, KP = VP;
function Ea(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ea.prototype.clear = zP;
Ea.prototype.delete = UP;
Ea.prototype.get = YP;
Ea.prototype.has = qP;
Ea.prototype.set = KP;
var nu = Ea, GP = En, XP = Pr, ZP = GP(XP, "Map"), Uf = ZP, lp = $P, QP = nu, JP = Uf;
function eC() {
  this.size = 0, this.__data__ = {
    hash: new lp(),
    map: new (JP || QP)(),
    string: new lp()
  };
}
var tC = eC;
function rC(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var nC = rC, aC = nC;
function iC(e, t) {
  var r = e.__data__;
  return aC(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var au = iC, oC = au;
function lC(e) {
  var t = oC(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var uC = lC, cC = au;
function sC(e) {
  return cC(this, e).get(e);
}
var fC = sC, dC = au;
function pC(e) {
  return dC(this, e).has(e);
}
var vC = pC, hC = au;
function mC(e, t) {
  var r = hC(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var gC = mC, yC = tC, bC = uC, xC = fC, wC = vC, SC = gC;
function Ta(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ta.prototype.clear = yC;
Ta.prototype.delete = bC;
Ta.prototype.get = xC;
Ta.prototype.has = wC;
Ta.prototype.set = SC;
var Yf = Ta, zy = Yf, OC = "Expected a function";
function qf(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(OC);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (qf.Cache || zy)(), r;
}
qf.Cache = zy;
var Uy = qf;
const $C = /* @__PURE__ */ Le(Uy);
var PC = Uy, CC = 500;
function _C(e) {
  var t = PC(e, function(n) {
    return r.size === CC && r.clear(), n;
  }), r = t.cache;
  return t;
}
var AC = _C, EC = AC, TC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, MC = /\\(\\)?/g, IC = EC(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(TC, function(r, n, a, i) {
    t.push(a ? i.replace(MC, "$1") : n || r);
  }), t;
}), jC = IC;
function DC(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Kf = DC, up = Ji, kC = Kf, NC = Ht, RC = Ca, LC = 1 / 0, cp = up ? up.prototype : void 0, sp = cp ? cp.toString : void 0;
function Yy(e) {
  if (typeof e == "string")
    return e;
  if (NC(e))
    return kC(e, Yy) + "";
  if (RC(e))
    return sp ? sp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -LC ? "-0" : t;
}
var BC = Yy, FC = BC;
function HC(e) {
  return e == null ? "" : FC(e);
}
var qy = HC, WC = Ht, VC = Wf, zC = jC, UC = qy;
function YC(e, t) {
  return WC(e) ? e : VC(e, t) ? [e] : zC(UC(e));
}
var Ky = YC, qC = Ca, KC = 1 / 0;
function GC(e) {
  if (typeof e == "string" || qC(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -KC ? "-0" : t;
}
var iu = GC, XC = Ky, ZC = iu;
function QC(e, t) {
  t = XC(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ZC(t[r++])];
  return r && r == n ? e : void 0;
}
var Gf = QC, JC = Gf;
function e_(e, t, r) {
  var n = e == null ? void 0 : JC(e, t);
  return n === void 0 ? r : n;
}
var Gy = e_;
const qt = /* @__PURE__ */ Le(Gy);
function t_(e) {
  return e == null;
}
var r_ = t_;
const Ce = /* @__PURE__ */ Le(r_);
var n_ = Br, a_ = Ht, i_ = Fr, o_ = "[object String]";
function l_(e) {
  return typeof e == "string" || !a_(e) && i_(e) && n_(e) == o_;
}
var u_ = l_;
const eo = /* @__PURE__ */ Le(u_);
var c_ = Br, s_ = Fr, f_ = "[object Number]";
function d_(e) {
  return typeof e == "number" || s_(e) && c_(e) == f_;
}
var Xy = d_;
const p_ = /* @__PURE__ */ Le(Xy);
var v_ = Xy;
function h_(e) {
  return v_(e) && e != +e;
}
var m_ = h_;
const Ma = /* @__PURE__ */ Le(m_);
var jt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, hn = function(t) {
  return eo(t) && t.indexOf("%") === t.length - 1;
}, ee = function(t) {
  return p_(t) && !Ma(t);
}, gt = function(t) {
  return ee(t) || eo(t);
}, g_ = 0, Ia = function(t) {
  var r = ++g_;
  return "".concat(t || "").concat(r);
}, Dt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!ee(t) && !eo(t))
    return n;
  var i;
  if (hn(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return Ma(i) && (i = n), a && i > r && (i = r), i;
}, Ln = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, y_ = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, Rt = function(t, r) {
  return ee(t) && ee(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function zo(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : qt(n, t)) === r;
  });
}
function zn(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Gc(e) {
  "@babel/helpers - typeof";
  return Gc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gc(e);
}
var b_ = ["viewBox", "children"], x_ = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], fp = ["points", "pathLength"], gc = {
  svg: b_,
  polygon: fp,
  polyline: fp
}, Xf = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Uo = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ S.isValidElement(t) && (n = t.props), !_a(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    Xf.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, w_ = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, $n = function(t, r, n) {
  if (!_a(t) || Gc(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    Xf.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = w_(o, r, n));
  }), a;
}, S_ = ["children"], O_ = ["children"];
function dp(e, t) {
  if (e == null) return {};
  var r = $_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Xc(e) {
  "@babel/helpers - typeof";
  return Xc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xc(e);
}
var pp = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart"
}, Mr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, vp = null, yc = null, Zf = function e(t) {
  if (t === vp && Array.isArray(yc))
    return yc;
  var r = [];
  return S.Children.forEach(t, function(n) {
    Ce(n) || (Bw.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), yc = r, vp = t, r;
};
function Jt(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return Mr(a);
  }) : n = [Mr(t)], Zf(e).forEach(function(a) {
    var i = qt(a, "type.displayName") || qt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function Ut(e, t) {
  var r = Jt(e, t);
  return r && r[0];
}
var hp = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!ee(n) || n <= 0 || !ee(a) || a <= 0);
}, P_ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], C_ = function(t) {
  return t && t.type && eo(t.type) && P_.indexOf(t.type) >= 0;
}, __ = function(t) {
  return t && Xc(t) === "object" && "clipDot" in t;
}, A_ = function(t, r, n, a) {
  var i, o = (i = gc == null ? void 0 : gc[a]) !== null && i !== void 0 ? i : [];
  return !we(t) && (a && o.includes(r) || x_.includes(r)) || n && Xf.includes(r);
}, ve = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ S.isValidElement(t) && (a = t.props), !_a(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var l;
    A_((l = a) === null || l === void 0 ? void 0 : l[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, Zc = function e(t, r) {
  if (t === r)
    return !0;
  var n = S.Children.count(t);
  if (n !== S.Children.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return mp(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!mp(i, o))
      return !1;
  }
  return !0;
}, mp = function(t, r) {
  if (Ce(t) && Ce(r))
    return !0;
  if (!Ce(t) && !Ce(r)) {
    var n = t.props || {}, a = n.children, i = dp(n, S_), o = r.props || {}, l = o.children, u = dp(o, O_);
    return a && l ? zn(i, u) && Zc(a, l) : !a && !l ? zn(i, u) : !1;
  }
  return !1;
}, gp = function(t, r) {
  var n = [], a = {};
  return Zf(t).forEach(function(i, o) {
    if (C_(i))
      n.push(i);
    else if (i) {
      var l = Mr(i.type), u = r[l] || {}, c = u.handler, s = u.once;
      if (c && (!s || !a[l])) {
        var f = c(i, l, o);
        n.push(f), a[l] = !0;
      }
    }
  }), n;
}, E_ = function(t) {
  var r = t && t.type;
  return r && pp[r] ? pp[r] : null;
}, T_ = function(t, r) {
  return Zf(r).indexOf(t);
}, M_ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qc.apply(this, arguments);
}
function I_(e, t) {
  if (e == null) return {};
  var r = j_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function j_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Jc(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, l = e.title, u = e.desc, c = I_(e, M_), s = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = Ae("recharts-surface", i);
  return /* @__PURE__ */ N.createElement("svg", Qc({}, ve(c, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(s.x, " ").concat(s.y, " ").concat(s.width, " ").concat(s.height)
  }), /* @__PURE__ */ N.createElement("title", null, l), /* @__PURE__ */ N.createElement("desc", null, u), t);
}
var D_ = ["children", "className"];
function es() {
  return es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, es.apply(this, arguments);
}
function k_(e, t) {
  if (e == null) return {};
  var r = N_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function N_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ne = /* @__PURE__ */ N.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = k_(e, D_), i = Ae("recharts-layer", n);
  return /* @__PURE__ */ N.createElement("g", es({
    className: i
  }, ve(a, !0), {
    ref: t
  }), r);
}), R_ = je.env.NODE_ENV !== "production", Ir = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (R_ && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
};
function L_(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var B_ = L_, F_ = B_;
function H_(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : F_(e, t, r);
}
var W_ = H_, V_ = "\\ud800-\\udfff", z_ = "\\u0300-\\u036f", U_ = "\\ufe20-\\ufe2f", Y_ = "\\u20d0-\\u20ff", q_ = z_ + U_ + Y_, K_ = "\\ufe0e\\ufe0f", G_ = "\\u200d", X_ = RegExp("[" + G_ + V_ + q_ + K_ + "]");
function Z_(e) {
  return X_.test(e);
}
var Zy = Z_;
function Q_(e) {
  return e.split("");
}
var J_ = Q_, Qy = "\\ud800-\\udfff", eA = "\\u0300-\\u036f", tA = "\\ufe20-\\ufe2f", rA = "\\u20d0-\\u20ff", nA = eA + tA + rA, aA = "\\ufe0e\\ufe0f", iA = "[" + Qy + "]", ts = "[" + nA + "]", rs = "\\ud83c[\\udffb-\\udfff]", oA = "(?:" + ts + "|" + rs + ")", Jy = "[^" + Qy + "]", eb = "(?:\\ud83c[\\udde6-\\uddff]){2}", tb = "[\\ud800-\\udbff][\\udc00-\\udfff]", lA = "\\u200d", rb = oA + "?", nb = "[" + aA + "]?", uA = "(?:" + lA + "(?:" + [Jy, eb, tb].join("|") + ")" + nb + rb + ")*", cA = nb + rb + uA, sA = "(?:" + [Jy + ts + "?", ts, eb, tb, iA].join("|") + ")", fA = RegExp(rs + "(?=" + rs + ")|" + sA + cA, "g");
function dA(e) {
  return e.match(fA) || [];
}
var pA = dA, vA = J_, hA = Zy, mA = pA;
function gA(e) {
  return hA(e) ? mA(e) : vA(e);
}
var yA = gA, bA = W_, xA = Zy, wA = yA, SA = qy;
function OA(e) {
  return function(t) {
    t = SA(t);
    var r = xA(t) ? wA(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? bA(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var $A = OA, PA = $A, CA = PA("toUpperCase"), _A = CA;
const ou = /* @__PURE__ */ Le(_A);
function Qe(e) {
  return function() {
    return e;
  };
}
const ab = Math.cos, Yo = Math.sin, fr = Math.sqrt, qo = Math.PI, lu = 2 * qo, ns = Math.PI, as = 2 * ns, fn = 1e-6, AA = as - fn;
function ib(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function EA(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ib;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class TA {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ib : EA(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, a) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +a}`;
  }
  bezierCurveTo(t, r, n, a, i, o) {
    this._append`C${+t},${+r},${+n},${+a},${this._x1 = +i},${this._y1 = +o}`;
  }
  arcTo(t, r, n, a, i) {
    if (t = +t, r = +r, n = +n, a = +a, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let o = this._x1, l = this._y1, u = n - t, c = a - r, s = o - t, f = l - r, d = s * s + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > fn) if (!(Math.abs(f * u - c * s) > fn) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, h = a - l, m = u * u + c * c, v = p * p + h * h, y = Math.sqrt(m), x = Math.sqrt(d), w = i * Math.tan((ns - Math.acos((m + d - v) / (2 * y * x))) / 2), O = w / x, g = w / y;
      Math.abs(O - 1) > fn && this._append`L${t + O * s},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > s * h)},${this._x1 = t + g * u},${this._y1 = r + g * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(a), u = n * Math.sin(a), c = t + l, s = r + u, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${s}` : (Math.abs(this._x1 - c) > fn || Math.abs(this._y1 - s) > fn) && this._append`L${c},${s}`, n && (d < 0 && (d = d % as + as), d > AA ? this._append`A${n},${n},0,1,${f},${t - l},${r - u}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = s}` : d > fn && this._append`A${n},${n},0,${+(d >= ns)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Qf(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new TA(t);
}
function Jf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ob(e) {
  this._context = e;
}
ob.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function uu(e) {
  return new ob(e);
}
function lb(e) {
  return e[0];
}
function ub(e) {
  return e[1];
}
function cb(e, t) {
  var r = Qe(!0), n = null, a = uu, i = null, o = Qf(l);
  e = typeof e == "function" ? e : e === void 0 ? lb : Qe(e), t = typeof t == "function" ? t : t === void 0 ? ub : Qe(t);
  function l(u) {
    var c, s = (u = Jf(u)).length, f, d = !1, p;
    for (n == null && (i = a(p = o())), c = 0; c <= s; ++c)
      !(c < s && r(f = u[c], c, u)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(f, c, u), +t(f, c, u));
    if (p) return i = null, p + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Qe(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Qe(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : Qe(!!u), l) : r;
  }, l.curve = function(u) {
    return arguments.length ? (a = u, n != null && (i = a(n)), l) : a;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? n = i = null : i = a(n = u), l) : n;
  }, l;
}
function Oo(e, t, r) {
  var n = null, a = Qe(!0), i = null, o = uu, l = null, u = Qf(c);
  e = typeof e == "function" ? e : e === void 0 ? lb : Qe(+e), t = typeof t == "function" ? t : Qe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? ub : Qe(+r);
  function c(f) {
    var d, p, h, m = (f = Jf(f)).length, v, y = !1, x, w = new Array(m), O = new Array(m);
    for (i == null && (l = o(x = u())), d = 0; d <= m; ++d) {
      if (!(d < m && a(v = f[d], d, f)) === y)
        if (y = !y)
          p = d, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), h = d - 1; h >= p; --h)
            l.point(w[h], O[h]);
          l.lineEnd(), l.areaEnd();
        }
      y && (w[d] = +e(v, d, f), O[d] = +t(v, d, f), l.point(n ? +n(v, d, f) : w[d], r ? +r(v, d, f) : O[d]));
    }
    if (x) return l = null, x + "" || null;
  }
  function s() {
    return cb().defined(a).curve(o).context(i);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Qe(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Qe(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Qe(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Qe(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Qe(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Qe(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return s().x(e).y(t);
  }, c.lineY1 = function() {
    return s().x(e).y(r);
  }, c.lineX1 = function() {
    return s().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Qe(!!f), c) : a;
  }, c.curve = function(f) {
    return arguments.length ? (o = f, i != null && (l = o(i)), c) : o;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? i = l = null : l = o(i = f), c) : i;
  }, c;
}
class sb {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function MA(e) {
  return new sb(e, !0);
}
function IA(e) {
  return new sb(e, !1);
}
const ed = {
  draw(e, t) {
    const r = fr(t / qo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, lu);
  }
}, jA = {
  draw(e, t) {
    const r = fr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, fb = fr(1 / 3), DA = fb * 2, kA = {
  draw(e, t) {
    const r = fr(t / DA), n = r * fb;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, NA = {
  draw(e, t) {
    const r = fr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, RA = 0.8908130915292852, db = Yo(qo / 10) / Yo(7 * qo / 10), LA = Yo(lu / 10) * db, BA = -ab(lu / 10) * db, FA = {
  draw(e, t) {
    const r = fr(t * RA), n = LA * r, a = BA * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = lu * i / 5, l = ab(o), u = Yo(o);
      e.lineTo(u * r, -l * r), e.lineTo(l * n - u * a, u * n + l * a);
    }
    e.closePath();
  }
}, bc = fr(3), HA = {
  draw(e, t) {
    const r = -fr(t / (bc * 3));
    e.moveTo(0, r * 2), e.lineTo(-bc * r, -r), e.lineTo(bc * r, -r), e.closePath();
  }
}, Kt = -0.5, Gt = fr(3) / 2, is = 1 / fr(12), WA = (is / 2 + 1) * 3, VA = {
  draw(e, t) {
    const r = fr(t / WA), n = r / 2, a = r * is, i = n, o = r * is + r, l = -i, u = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(l, u), e.lineTo(Kt * n - Gt * a, Gt * n + Kt * a), e.lineTo(Kt * i - Gt * o, Gt * i + Kt * o), e.lineTo(Kt * l - Gt * u, Gt * l + Kt * u), e.lineTo(Kt * n + Gt * a, Kt * a - Gt * n), e.lineTo(Kt * i + Gt * o, Kt * o - Gt * i), e.lineTo(Kt * l + Gt * u, Kt * u - Gt * l), e.closePath();
  }
};
function zA(e, t) {
  let r = null, n = Qf(a);
  e = typeof e == "function" ? e : Qe(e || ed), t = typeof t == "function" ? t : Qe(t === void 0 ? 64 : +t);
  function a() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Qe(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Qe(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function Ko() {
}
function Go(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function pb(e) {
  this._context = e;
}
pb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Go(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Go(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function UA(e) {
  return new pb(e);
}
function vb(e) {
  this._context = e;
}
vb.prototype = {
  areaStart: Ko,
  areaEnd: Ko,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Go(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function YA(e) {
  return new vb(e);
}
function hb(e) {
  this._context = e;
}
hb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Go(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function qA(e) {
  return new hb(e);
}
function mb(e) {
  this._context = e;
}
mb.prototype = {
  areaStart: Ko,
  areaEnd: Ko,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function KA(e) {
  return new mb(e);
}
function yp(e) {
  return e < 0 ? -1 : 1;
}
function bp(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), l = (i * a + o * n) / (n + a);
  return (yp(i) + yp(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(l)) || 0;
}
function xp(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function xc(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, l = (i - n) / 3;
  e._context.bezierCurveTo(n + l, a + l * t, i - l, o - l * r, i, o);
}
function Xo(e) {
  this._context = e;
}
Xo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        xc(this, this._t0, xp(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, xc(this, xp(this, r = bp(this, e, t)), r);
          break;
        default:
          xc(this, this._t0, r = bp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function gb(e) {
  this._context = new yb(e);
}
(gb.prototype = Object.create(Xo.prototype)).point = function(e, t) {
  Xo.prototype.point.call(this, t, e);
};
function yb(e) {
  this._context = e;
}
yb.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, a, i) {
    this._context.bezierCurveTo(t, e, n, r, i, a);
  }
};
function GA(e) {
  return new Xo(e);
}
function XA(e) {
  return new gb(e);
}
function bb(e) {
  this._context = e;
}
bb.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = wp(e), a = wp(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function wp(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function ZA(e) {
  return new bb(e);
}
function cu(e, t) {
  this._context = e, this._t = t;
}
cu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function QA(e) {
  return new cu(e, 0.5);
}
function JA(e) {
  return new cu(e, 0);
}
function eE(e) {
  return new cu(e, 1);
}
function Xn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, l = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < l; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function os(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function tE(e, t) {
  return e[t];
}
function rE(e) {
  const t = [];
  return t.key = e, t;
}
function nE() {
  var e = Qe([]), t = os, r = Xn, n = tE;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), rE), l, u = o.length, c = -1, s;
    for (const f of i)
      for (l = 0, ++c; l < u; ++l)
        (o[l][c] = [0, +n(f, o[l].key, c, i)]).data = f;
    for (l = 0, s = Jf(t(o)); l < u; ++l)
      o[s[l]].index = l;
    return r(o, s), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Qe(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : Qe(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? os : typeof i == "function" ? i : Qe(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? Xn, a) : r;
  }, a;
}
function aE(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    Xn(e, t);
  }
}
function iE(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, l = 0; o < a; ++o) l += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    Xn(e, t);
  }
}
function oE(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var l = 0, u = 0, c = 0; l < o; ++l) {
        for (var s = e[t[l]], f = s[n][1] || 0, d = s[n - 1][1] || 0, p = (f - d) / 2, h = 0; h < l; ++h) {
          var m = e[t[h]], v = m[n][1] || 0, y = m[n - 1][1] || 0;
          p += v - y;
        }
        u += f, c += p * f;
      }
      a[n - 1][1] += a[n - 1][0] = r, u && (r -= c / u);
    }
    a[n - 1][1] += a[n - 1][0] = r, Xn(e, t);
  }
}
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
var lE = ["type", "size", "sizeType"];
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ls.apply(this, arguments);
}
function Sp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Op(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sp(Object(r), !0).forEach(function(n) {
      uE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uE(e, t, r) {
  return t = cE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cE(e) {
  var t = sE(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function sE(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fE(e, t) {
  if (e == null) return {};
  var r = dE(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function dE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var xb = {
  symbolCircle: ed,
  symbolCross: jA,
  symbolDiamond: kA,
  symbolSquare: NA,
  symbolStar: FA,
  symbolTriangle: HA,
  symbolWye: VA
}, pE = Math.PI / 180, vE = function(t) {
  var r = "symbol".concat(ou(t));
  return xb[r] || ed;
}, hE = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var a = 18 * pE;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, mE = function(t, r) {
  xb["symbol".concat(ou(t))] = r;
}, td = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, l = o === void 0 ? "area" : o, u = fE(t, lE), c = Op(Op({}, u), {}, {
    type: n,
    size: i,
    sizeType: l
  }), s = function() {
    var v = vE(n), y = zA().type(v).size(hE(i, l, n));
    return y();
  }, f = c.className, d = c.cx, p = c.cy, h = ve(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ N.createElement("path", ls({}, h, {
    className: Ae("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: s()
  })) : null;
};
td.registerSymbol = mE;
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function us() {
  return us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, us.apply(this, arguments);
}
function $p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gE(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $p(Object(r), !0).forEach(function(n) {
      vi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $p(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sb(n.key), n);
  }
}
function xE(e, t, r) {
  return t && bE(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wE(e, t, r) {
  return t = Zo(t), SE(e, wb() ? Reflect.construct(t, r || [], Zo(e).constructor) : t.apply(e, r));
}
function SE(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return OE(e);
}
function OE(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wb = function() {
    return !!e;
  })();
}
function Zo(e) {
  return Zo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Zo(e);
}
function $E(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cs(e, t);
}
function cs(e, t) {
  return cs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, cs(e, t);
}
function vi(e, t, r) {
  return t = Sb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sb(e) {
  var t = PE(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function PE(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xt = 32, rd = /* @__PURE__ */ function(e) {
  function t() {
    return yE(this, t), wE(this, t, arguments);
  }
  return $E(t, e), xE(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = Xt / 2, o = Xt / 6, l = Xt / 3, u = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ N.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: Xt,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ N.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            d: "M0,".concat(i, "h").concat(l, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * l, ",").concat(i, `
            H`).concat(Xt, "M").concat(2 * l, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(l, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ N.createElement("path", {
            stroke: "none",
            fill: u,
            d: "M0,".concat(Xt / 8, "h").concat(Xt, "v").concat(Xt * 3 / 4, "h").concat(-Xt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ N.isValidElement(n.legendIcon)) {
          var c = gE({}, n);
          return delete c.legendIcon, /* @__PURE__ */ N.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ N.createElement(td, {
          fill: u,
          cx: i,
          cy: i,
          size: Xt,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, a = this.props, i = a.payload, o = a.iconSize, l = a.layout, u = a.formatter, c = a.inactiveColor, s = {
        x: 0,
        y: 0,
        width: Xt,
        height: Xt
      }, f = {
        display: l === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(p, h) {
        var m = p.formatter || u, v = Ae(vi(vi({
          "recharts-legend-item": !0
        }, "legend-item-".concat(h), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var y = we(p.value) ? null : p.value;
        Ir(
          !we(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = p.inactive ? c : p.color;
        return /* @__PURE__ */ N.createElement("li", us({
          className: v,
          style: f,
          key: "legend-item-".concat(h)
        }, $n(n.props, p, h)), /* @__PURE__ */ N.createElement(Jc, {
          width: o,
          height: o,
          viewBox: s,
          style: d
        }, n.renderIcon(p)), /* @__PURE__ */ N.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, m ? m(y, p, h) : y));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.payload, i = n.layout, o = n.align;
      if (!a || !a.length)
        return null;
      var l = {
        padding: 0,
        margin: 0,
        textAlign: i === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ N.createElement("ul", {
        className: "recharts-default-legend",
        style: l
      }, this.renderItems());
    }
  }]);
}(S.PureComponent);
vi(rd, "displayName", "Legend");
vi(rd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var CE = nu;
function _E() {
  this.__data__ = new CE(), this.size = 0;
}
var AE = _E;
function EE(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var TE = EE;
function ME(e) {
  return this.__data__.get(e);
}
var IE = ME;
function jE(e) {
  return this.__data__.has(e);
}
var DE = jE, kE = nu, NE = Uf, RE = Yf, LE = 200;
function BE(e, t) {
  var r = this.__data__;
  if (r instanceof kE) {
    var n = r.__data__;
    if (!NE || n.length < LE - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new RE(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var FE = BE, HE = nu, WE = AE, VE = TE, zE = IE, UE = DE, YE = FE;
function ja(e) {
  var t = this.__data__ = new HE(e);
  this.size = t.size;
}
ja.prototype.clear = WE;
ja.prototype.delete = VE;
ja.prototype.get = zE;
ja.prototype.has = UE;
ja.prototype.set = YE;
var Ob = ja, qE = "__lodash_hash_undefined__";
function KE(e) {
  return this.__data__.set(e, qE), this;
}
var GE = KE;
function XE(e) {
  return this.__data__.has(e);
}
var ZE = XE, QE = Yf, JE = GE, eT = ZE;
function Qo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new QE(); ++t < r; )
    this.add(e[t]);
}
Qo.prototype.add = Qo.prototype.push = JE;
Qo.prototype.has = eT;
var $b = Qo;
function tT(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Pb = tT;
function rT(e, t) {
  return e.has(t);
}
var Cb = rT, nT = $b, aT = Pb, iT = Cb, oT = 1, lT = 2;
function uT(e, t, r, n, a, i) {
  var o = r & oT, l = e.length, u = t.length;
  if (l != u && !(o && u > l))
    return !1;
  var c = i.get(e), s = i.get(t);
  if (c && s)
    return c == t && s == e;
  var f = -1, d = !0, p = r & lT ? new nT() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < l; ) {
    var h = e[f], m = t[f];
    if (n)
      var v = o ? n(m, h, f, t, e, i) : n(h, m, f, e, t, i);
    if (v !== void 0) {
      if (v)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!aT(t, function(y, x) {
        if (!iT(p, x) && (h === y || a(h, y, r, n, i)))
          return p.push(x);
      })) {
        d = !1;
        break;
      }
    } else if (!(h === m || a(h, m, r, n, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var _b = uT, cT = Pr, sT = cT.Uint8Array, fT = sT;
function dT(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var pT = dT;
function vT(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var nd = vT, Pp = Ji, Cp = fT, hT = zf, mT = _b, gT = pT, yT = nd, bT = 1, xT = 2, wT = "[object Boolean]", ST = "[object Date]", OT = "[object Error]", $T = "[object Map]", PT = "[object Number]", CT = "[object RegExp]", _T = "[object Set]", AT = "[object String]", ET = "[object Symbol]", TT = "[object ArrayBuffer]", MT = "[object DataView]", _p = Pp ? Pp.prototype : void 0, wc = _p ? _p.valueOf : void 0;
function IT(e, t, r, n, a, i, o) {
  switch (r) {
    case MT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case TT:
      return !(e.byteLength != t.byteLength || !i(new Cp(e), new Cp(t)));
    case wT:
    case ST:
    case PT:
      return hT(+e, +t);
    case OT:
      return e.name == t.name && e.message == t.message;
    case CT:
    case AT:
      return e == t + "";
    case $T:
      var l = gT;
    case _T:
      var u = n & bT;
      if (l || (l = yT), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= xT, o.set(e, t);
      var s = mT(l(e), l(t), n, a, i, o);
      return o.delete(e), s;
    case ET:
      if (wc)
        return wc.call(e) == wc.call(t);
  }
  return !1;
}
var jT = IT;
function DT(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Ab = DT, kT = Ab, NT = Ht;
function RT(e, t, r) {
  var n = t(e);
  return NT(e) ? n : kT(n, r(e));
}
var LT = RT;
function BT(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var FT = BT;
function HT() {
  return [];
}
var WT = HT, VT = FT, zT = WT, UT = Object.prototype, YT = UT.propertyIsEnumerable, Ap = Object.getOwnPropertySymbols, qT = Ap ? function(e) {
  return e == null ? [] : (e = Object(e), VT(Ap(e), function(t) {
    return YT.call(e, t);
  }));
} : zT, KT = qT;
function GT(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var XT = GT, ZT = Br, QT = Fr, JT = "[object Arguments]";
function eM(e) {
  return QT(e) && ZT(e) == JT;
}
var tM = eM, Ep = tM, rM = Fr, Eb = Object.prototype, nM = Eb.hasOwnProperty, aM = Eb.propertyIsEnumerable, iM = Ep(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ep : function(e) {
  return rM(e) && nM.call(e, "callee") && !aM.call(e, "callee");
}, ad = iM, Jo = { exports: {} };
function oM() {
  return !1;
}
var lM = oM;
Jo.exports;
(function(e, t) {
  var r = Pr, n = lM, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, u = l ? l.isBuffer : void 0, c = u || n;
  e.exports = c;
})(Jo, Jo.exports);
var Tb = Jo.exports, uM = 9007199254740991, cM = /^(?:0|[1-9]\d*)$/;
function sM(e, t) {
  var r = typeof e;
  return t = t ?? uM, !!t && (r == "number" || r != "symbol" && cM.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var id = sM, fM = 9007199254740991;
function dM(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fM;
}
var od = dM, pM = Br, vM = od, hM = Fr, mM = "[object Arguments]", gM = "[object Array]", yM = "[object Boolean]", bM = "[object Date]", xM = "[object Error]", wM = "[object Function]", SM = "[object Map]", OM = "[object Number]", $M = "[object Object]", PM = "[object RegExp]", CM = "[object Set]", _M = "[object String]", AM = "[object WeakMap]", EM = "[object ArrayBuffer]", TM = "[object DataView]", MM = "[object Float32Array]", IM = "[object Float64Array]", jM = "[object Int8Array]", DM = "[object Int16Array]", kM = "[object Int32Array]", NM = "[object Uint8Array]", RM = "[object Uint8ClampedArray]", LM = "[object Uint16Array]", BM = "[object Uint32Array]", tt = {};
tt[MM] = tt[IM] = tt[jM] = tt[DM] = tt[kM] = tt[NM] = tt[RM] = tt[LM] = tt[BM] = !0;
tt[mM] = tt[gM] = tt[EM] = tt[yM] = tt[TM] = tt[bM] = tt[xM] = tt[wM] = tt[SM] = tt[OM] = tt[$M] = tt[PM] = tt[CM] = tt[_M] = tt[AM] = !1;
function FM(e) {
  return hM(e) && vM(e.length) && !!tt[pM(e)];
}
var HM = FM;
function WM(e) {
  return function(t) {
    return e(t);
  };
}
var Mb = WM, el = { exports: {} };
el.exports;
(function(e, t) {
  var r = Hy, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var u = a && a.require && a.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(el, el.exports);
var VM = el.exports, zM = HM, UM = Mb, Tp = VM, Mp = Tp && Tp.isTypedArray, YM = Mp ? UM(Mp) : zM, Ib = YM, qM = XT, KM = ad, GM = Ht, XM = Tb, ZM = id, QM = Ib, JM = Object.prototype, eI = JM.hasOwnProperty;
function tI(e, t) {
  var r = GM(e), n = !r && KM(e), a = !r && !n && XM(e), i = !r && !n && !a && QM(e), o = r || n || a || i, l = o ? qM(e.length, String) : [], u = l.length;
  for (var c in e)
    (t || eI.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ZM(c, u))) && l.push(c);
  return l;
}
var rI = tI, nI = Object.prototype;
function aI(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || nI;
  return e === r;
}
var iI = aI;
function oI(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var jb = oI, lI = jb, uI = lI(Object.keys, Object), cI = uI, sI = iI, fI = cI, dI = Object.prototype, pI = dI.hasOwnProperty;
function vI(e) {
  if (!sI(e))
    return fI(e);
  var t = [];
  for (var r in Object(e))
    pI.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var hI = vI, mI = Vf, gI = od;
function yI(e) {
  return e != null && gI(e.length) && !mI(e);
}
var su = yI, bI = rI, xI = hI, wI = su;
function SI(e) {
  return wI(e) ? bI(e) : xI(e);
}
var ld = SI, OI = LT, $I = KT, PI = ld;
function CI(e) {
  return OI(e, PI, $I);
}
var _I = CI, Ip = _I, AI = 1, EI = Object.prototype, TI = EI.hasOwnProperty;
function MI(e, t, r, n, a, i) {
  var o = r & AI, l = Ip(e), u = l.length, c = Ip(t), s = c.length;
  if (u != s && !o)
    return !1;
  for (var f = u; f--; ) {
    var d = l[f];
    if (!(o ? d in t : TI.call(t, d)))
      return !1;
  }
  var p = i.get(e), h = i.get(t);
  if (p && h)
    return p == t && h == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var v = o; ++f < u; ) {
    d = l[f];
    var y = e[d], x = t[d];
    if (n)
      var w = o ? n(x, y, d, t, e, i) : n(y, x, d, e, t, i);
    if (!(w === void 0 ? y === x || a(y, x, r, n, i) : w)) {
      m = !1;
      break;
    }
    v || (v = d == "constructor");
  }
  if (m && !v) {
    var O = e.constructor, g = t.constructor;
    O != g && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof g == "function" && g instanceof g) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var II = MI, jI = En, DI = Pr, kI = jI(DI, "DataView"), NI = kI, RI = En, LI = Pr, BI = RI(LI, "Promise"), FI = BI, HI = En, WI = Pr, VI = HI(WI, "Set"), Db = VI, zI = En, UI = Pr, YI = zI(UI, "WeakMap"), qI = YI, ss = NI, fs = Uf, ds = FI, ps = Db, vs = qI, kb = Br, Da = Vy, jp = "[object Map]", KI = "[object Object]", Dp = "[object Promise]", kp = "[object Set]", Np = "[object WeakMap]", Rp = "[object DataView]", GI = Da(ss), XI = Da(fs), ZI = Da(ds), QI = Da(ps), JI = Da(vs), dn = kb;
(ss && dn(new ss(new ArrayBuffer(1))) != Rp || fs && dn(new fs()) != jp || ds && dn(ds.resolve()) != Dp || ps && dn(new ps()) != kp || vs && dn(new vs()) != Np) && (dn = function(e) {
  var t = kb(e), r = t == KI ? e.constructor : void 0, n = r ? Da(r) : "";
  if (n)
    switch (n) {
      case GI:
        return Rp;
      case XI:
        return jp;
      case ZI:
        return Dp;
      case QI:
        return kp;
      case JI:
        return Np;
    }
  return t;
});
var ej = dn, Sc = Ob, tj = _b, rj = jT, nj = II, Lp = ej, Bp = Ht, Fp = Tb, aj = Ib, ij = 1, Hp = "[object Arguments]", Wp = "[object Array]", $o = "[object Object]", oj = Object.prototype, Vp = oj.hasOwnProperty;
function lj(e, t, r, n, a, i) {
  var o = Bp(e), l = Bp(t), u = o ? Wp : Lp(e), c = l ? Wp : Lp(t);
  u = u == Hp ? $o : u, c = c == Hp ? $o : c;
  var s = u == $o, f = c == $o, d = u == c;
  if (d && Fp(e)) {
    if (!Fp(t))
      return !1;
    o = !0, s = !1;
  }
  if (d && !s)
    return i || (i = new Sc()), o || aj(e) ? tj(e, t, r, n, a, i) : rj(e, t, u, r, n, a, i);
  if (!(r & ij)) {
    var p = s && Vp.call(e, "__wrapped__"), h = f && Vp.call(t, "__wrapped__");
    if (p || h) {
      var m = p ? e.value() : e, v = h ? t.value() : t;
      return i || (i = new Sc()), a(m, v, r, n, i);
    }
  }
  return d ? (i || (i = new Sc()), nj(e, t, r, n, a, i)) : !1;
}
var uj = lj, cj = uj, zp = Fr;
function Nb(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !zp(e) && !zp(t) ? e !== e && t !== t : cj(e, t, r, n, Nb, a);
}
var ud = Nb, sj = Ob, fj = ud, dj = 1, pj = 2;
function vj(e, t, r, n) {
  var a = r.length, i = a, o = !n;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var l = r[a];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    l = r[a];
    var u = l[0], c = e[u], s = l[1];
    if (o && l[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var f = new sj();
      if (n)
        var d = n(c, s, u, e, t, f);
      if (!(d === void 0 ? fj(s, c, dj | pj, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var hj = vj, mj = Qr;
function gj(e) {
  return e === e && !mj(e);
}
var Rb = gj, yj = Rb, bj = ld;
function xj(e) {
  for (var t = bj(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, yj(a)];
  }
  return t;
}
var wj = xj;
function Sj(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Lb = Sj, Oj = hj, $j = wj, Pj = Lb;
function Cj(e) {
  var t = $j(e);
  return t.length == 1 && t[0][2] ? Pj(t[0][0], t[0][1]) : function(r) {
    return r === e || Oj(r, e, t);
  };
}
var _j = Cj;
function Aj(e, t) {
  return e != null && t in Object(e);
}
var Ej = Aj, Tj = Ky, Mj = ad, Ij = Ht, jj = id, Dj = od, kj = iu;
function Nj(e, t, r) {
  t = Tj(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = kj(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Dj(a) && jj(o, a) && (Ij(e) || Mj(e)));
}
var Rj = Nj, Lj = Ej, Bj = Rj;
function Fj(e, t) {
  return e != null && Bj(e, t, Lj);
}
var Hj = Fj, Wj = ud, Vj = Gy, zj = Hj, Uj = Wf, Yj = Rb, qj = Lb, Kj = iu, Gj = 1, Xj = 2;
function Zj(e, t) {
  return Uj(e) && Yj(t) ? qj(Kj(e), t) : function(r) {
    var n = Vj(r, e);
    return n === void 0 && n === t ? zj(r, e) : Wj(t, n, Gj | Xj);
  };
}
var Qj = Zj;
function Jj(e) {
  return e;
}
var ka = Jj;
function eD(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var tD = eD, rD = Gf;
function nD(e) {
  return function(t) {
    return rD(t, e);
  };
}
var aD = nD, iD = tD, oD = aD, lD = Wf, uD = iu;
function cD(e) {
  return lD(e) ? iD(uD(e)) : oD(e);
}
var sD = cD, fD = _j, dD = Qj, pD = ka, vD = Ht, hD = sD;
function mD(e) {
  return typeof e == "function" ? e : e == null ? pD : typeof e == "object" ? vD(e) ? dD(e[0], e[1]) : fD(e) : hD(e);
}
var Jr = mD;
function gD(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var yD = gD;
function bD(e) {
  return e !== e;
}
var xD = bD;
function wD(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var SD = wD, OD = yD, $D = xD, PD = SD;
function CD(e, t, r) {
  return t === t ? PD(e, t, r) : OD(e, $D, r);
}
var _D = CD, AD = _D;
function ED(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && AD(e, t, 0) > -1;
}
var TD = ED;
function MD(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var ID = MD;
function jD() {
}
var DD = jD, Oc = Db, kD = DD, ND = nd, RD = 1 / 0, LD = Oc && 1 / ND(new Oc([, -0]))[1] == RD ? function(e) {
  return new Oc(e);
} : kD, BD = LD, FD = $b, HD = TD, WD = ID, VD = Cb, zD = BD, UD = nd, YD = 200;
function qD(e, t, r) {
  var n = -1, a = HD, i = e.length, o = !0, l = [], u = l;
  if (r)
    o = !1, a = WD;
  else if (i >= YD) {
    var c = t ? null : zD(e);
    if (c)
      return UD(c);
    o = !1, a = VD, u = new FD();
  } else
    u = t ? [] : l;
  e:
    for (; ++n < i; ) {
      var s = e[n], f = t ? t(s) : s;
      if (s = r || s !== 0 ? s : 0, o && f === f) {
        for (var d = u.length; d--; )
          if (u[d] === f)
            continue e;
        t && u.push(f), l.push(s);
      } else a(u, f, r) || (u !== l && u.push(f), l.push(s));
    }
  return l;
}
var KD = qD, GD = Jr, XD = KD;
function ZD(e, t) {
  return e && e.length ? XD(e, GD(t)) : [];
}
var QD = ZD;
const Up = /* @__PURE__ */ Le(QD);
function Bb(e, t, r) {
  return t === !0 ? Up(e, r) : we(t) ? Up(e, t) : e;
}
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e);
}
var JD = ["ref"];
function Yp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yp(Object(r), !0).forEach(function(n) {
      fu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ek(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Hb(n.key), n);
  }
}
function tk(e, t, r) {
  return t && qp(e.prototype, t), r && qp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rk(e, t, r) {
  return t = tl(t), nk(e, Fb() ? Reflect.construct(t, r || [], tl(e).constructor) : t.apply(e, r));
}
function nk(e, t) {
  if (t && (Qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ak(e);
}
function ak(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fb = function() {
    return !!e;
  })();
}
function tl(e) {
  return tl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tl(e);
}
function ik(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && hs(e, t);
}
function hs(e, t) {
  return hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, hs(e, t);
}
function fu(e, t, r) {
  return t = Hb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hb(e) {
  var t = ok(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function ok(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lk(e, t) {
  if (e == null) return {};
  var r = uk(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ck(e) {
  return e.value;
}
function sk(e, t) {
  if (/* @__PURE__ */ N.isValidElement(e))
    return /* @__PURE__ */ N.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ N.createElement(e, t);
  t.ref;
  var r = lk(t, JD);
  return /* @__PURE__ */ N.createElement(rd, r);
}
var Kp = 1, Un = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    ek(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = rk(this, t, [].concat(a)), fu(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return ik(t, e), tk(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, a = this.getBBox();
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > Kp || Math.abs(a.height - this.lastBoundingBox.height) > Kp) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Cr({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, l = a.verticalAlign, u = a.margin, c = a.chartWidth, s = a.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var p = this.getBBoxSnapshot();
          f = {
            left: ((c || 0) - p.width) / 2
          };
        } else
          f = o === "right" ? {
            right: u && u.right || 0
          } : {
            left: u && u.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (l === "middle") {
          var h = this.getBBoxSnapshot();
          d = {
            top: ((s || 0) - h.height) / 2
          };
        } else
          d = l === "bottom" ? {
            bottom: u && u.bottom || 0
          } : {
            top: u && u.top || 0
          };
      return Cr(Cr({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, l = a.height, u = a.wrapperStyle, c = a.payloadUniqBy, s = a.payload, f = Cr(Cr({
        position: "absolute",
        width: o || "auto",
        height: l || "auto"
      }, this.getDefaultPosition(u)), u);
      return /* @__PURE__ */ N.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, sk(i, Cr(Cr({}, this.props), {}, {
        payload: Bb(s, c, ck)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = Cr(Cr({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && ee(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
}(S.PureComponent);
fu(Un, "displayName", "Legend");
fu(Un, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Gp = Ji, fk = ad, dk = Ht, Xp = Gp ? Gp.isConcatSpreadable : void 0;
function pk(e) {
  return dk(e) || fk(e) || !!(Xp && e && e[Xp]);
}
var vk = pk, hk = Ab, mk = vk;
function Wb(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = mk), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? Wb(l, t - 1, r, n, a) : hk(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var Vb = Wb;
function gk(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var u = o[e ? l : ++a];
      if (r(i[u], u, i) === !1)
        break;
    }
    return t;
  };
}
var yk = gk, bk = yk, xk = bk(), wk = xk, Sk = wk, Ok = ld;
function $k(e, t) {
  return e && Sk(e, t, Ok);
}
var zb = $k, Pk = su;
function Ck(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Pk(r))
      return e(r, n);
    for (var a = r.length, i = t ? a : -1, o = Object(r); (t ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var _k = Ck, Ak = zb, Ek = _k, Tk = Ek(Ak), cd = Tk, Mk = cd, Ik = su;
function jk(e, t) {
  var r = -1, n = Ik(e) ? Array(e.length) : [];
  return Mk(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
var Ub = jk;
function Dk(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var kk = Dk, Zp = Ca;
function Nk(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, a = e === e, i = Zp(e), o = t !== void 0, l = t === null, u = t === t, c = Zp(t);
    if (!l && !c && !i && e > t || i && o && u && !l && !c || n && o && u || !r && u || !a)
      return 1;
    if (!n && !i && !c && e < t || c && r && a && !n && !i || l && r && a || !o && a || !u)
      return -1;
  }
  return 0;
}
var Rk = Nk, Lk = Rk;
function Bk(e, t, r) {
  for (var n = -1, a = e.criteria, i = t.criteria, o = a.length, l = r.length; ++n < o; ) {
    var u = Lk(a[n], i[n]);
    if (u) {
      if (n >= l)
        return u;
      var c = r[n];
      return u * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var Fk = Bk, $c = Kf, Hk = Gf, Wk = Jr, Vk = Ub, zk = kk, Uk = Mb, Yk = Fk, qk = ka, Kk = Ht;
function Gk(e, t, r) {
  t.length ? t = $c(t, function(i) {
    return Kk(i) ? function(o) {
      return Hk(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : t = [qk];
  var n = -1;
  t = $c(t, Uk(Wk));
  var a = Vk(e, function(i, o, l) {
    var u = $c(t, function(c) {
      return c(i);
    });
    return { criteria: u, index: ++n, value: i };
  });
  return zk(a, function(i, o) {
    return Yk(i, o, r);
  });
}
var Xk = Gk;
function Zk(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var Qk = Zk, Jk = Qk, Qp = Math.max;
function eN(e, t, r) {
  return t = Qp(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = Qp(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), Jk(e, this, l);
  };
}
var tN = eN;
function rN(e) {
  return function() {
    return e;
  };
}
var nN = rN, aN = En, iN = function() {
  try {
    var e = aN(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Yb = iN, oN = nN, Jp = Yb, lN = ka, uN = Jp ? function(e, t) {
  return Jp(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: oN(t),
    writable: !0
  });
} : lN, cN = uN, sN = 800, fN = 16, dN = Date.now;
function pN(e) {
  var t = 0, r = 0;
  return function() {
    var n = dN(), a = fN - (n - r);
    if (r = n, a > 0) {
      if (++t >= sN)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var vN = pN, hN = cN, mN = vN, gN = mN(hN), yN = gN, bN = ka, xN = tN, wN = yN;
function SN(e, t) {
  return wN(xN(e, t, bN), e + "");
}
var ON = SN, $N = zf, PN = su, CN = id, _N = Qr;
function AN(e, t, r) {
  if (!_N(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? PN(r) && CN(t, r.length) : n == "string" && t in r) ? $N(r[t], e) : !1;
}
var du = AN, EN = Vb, TN = Xk, MN = ON, ev = du, IN = MN(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && ev(e, t[0], t[1]) ? t = [] : r > 2 && ev(t[0], t[1], t[2]) && (t = [t[0]]), TN(e, EN(t, 1), []);
}), jN = IN;
const sd = /* @__PURE__ */ Le(jN);
function hi(e) {
  "@babel/helpers - typeof";
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hi(e);
}
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ms.apply(this, arguments);
}
function DN(e, t) {
  return LN(e) || RN(e, t) || NN(e, t) || kN();
}
function kN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NN(e, t) {
  if (e) {
    if (typeof e == "string") return tv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tv(e, t);
  }
}
function tv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function RN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function LN(e) {
  if (Array.isArray(e)) return e;
}
function rv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rv(Object(r), !0).forEach(function(n) {
      BN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BN(e, t, r) {
  return t = FN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FN(e) {
  var t = HN(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function HN(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WN(e) {
  return Array.isArray(e) && gt(e[0]) && gt(e[1]) ? e.join(" ~ ") : e;
}
var VN = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, l = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, s = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, h = t.labelClassName, m = t.label, v = t.labelFormatter, y = t.accessibilityLayer, x = y === void 0 ? !1 : y, w = function() {
    if (s && s.length) {
      var M = {
        padding: 0,
        margin: 0
      }, D = (d ? sd(s, d) : s).map(function(I, _) {
        if (I.type === "none")
          return null;
        var E = Pc({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: I.color || "#000"
        }, l), j = I.formatter || f || WN, k = I.value, R = I.name, B = k, H = R;
        if (j && B != null && H != null) {
          var L = j(k, R, I, _, s);
          if (Array.isArray(L)) {
            var V = DN(L, 2);
            B = V[0], H = V[1];
          } else
            B = L;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ N.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(_),
            style: E
          }, gt(H) ? /* @__PURE__ */ N.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, H) : null, gt(H) ? /* @__PURE__ */ N.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ N.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, B), /* @__PURE__ */ N.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, I.unit || ""))
        );
      });
      return /* @__PURE__ */ N.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: M
      }, D);
    }
    return null;
  }, O = Pc({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), g = Pc({
    margin: 0
  }, c), b = !Ce(m), $ = b ? m : "", P = Ae("recharts-default-tooltip", p), A = Ae("recharts-tooltip-label", h);
  b && v && s !== void 0 && s !== null && ($ = v(m, s));
  var T = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ N.createElement("div", ms({
    className: P,
    style: O
  }, T), /* @__PURE__ */ N.createElement("p", {
    className: A,
    style: g
  }, /* @__PURE__ */ N.isValidElement($) ? $ : "".concat($)), w());
};
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function Po(e, t, r) {
  return t = zN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zN(e) {
  var t = UN(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function UN(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qa = "recharts-tooltip-wrapper", YN = {
  visibility: "hidden"
};
function qN(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Ae(qa, Po(Po(Po(Po({}, "".concat(qa, "-right"), ee(r) && t && ee(t.x) && r >= t.x), "".concat(qa, "-left"), ee(r) && t && ee(t.x) && r < t.x), "".concat(qa, "-bottom"), ee(n) && t && ee(t.y) && n >= t.y), "".concat(qa, "-top"), ee(n) && t && ee(t.y) && n < t.y));
}
function nv(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, l = e.tooltipDimension, u = e.viewBox, c = e.viewBoxDimension;
  if (i && ee(i[n]))
    return i[n];
  var s = r[n] - l - a, f = r[n] + a;
  if (t[n])
    return o[n] ? s : f;
  if (o[n]) {
    var d = s, p = u[n];
    return d < p ? Math.max(f, u[n]) : Math.max(s, u[n]);
  }
  var h = f + l, m = u[n] + c;
  return h > m ? Math.max(s, u[n]) : Math.max(f, u[n]);
}
function KN(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function GN(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, l = e.useTranslate3d, u = e.viewBox, c, s, f;
  return o.height > 0 && o.width > 0 && r ? (s = nv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: u,
    viewBoxDimension: u.width
  }), f = nv({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: u,
    viewBoxDimension: u.height
  }), c = KN({
    translateX: s,
    translateY: f,
    useTranslate3d: l
  })) : c = YN, {
    cssProperties: c,
    cssClasses: qN({
      translateX: s,
      translateY: f,
      coordinate: r
    })
  };
}
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function av(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? av(Object(r), !0).forEach(function(n) {
      ys(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : av(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ZN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Kb(n.key), n);
  }
}
function QN(e, t, r) {
  return t && ZN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function JN(e, t, r) {
  return t = rl(t), e2(e, qb() ? Reflect.construct(t, r || [], rl(e).constructor) : t.apply(e, r));
}
function e2(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return t2(e);
}
function t2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qb = function() {
    return !!e;
  })();
}
function rl(e) {
  return rl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rl(e);
}
function r2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gs(e, t);
}
function gs(e, t) {
  return gs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, gs(e, t);
}
function ys(e, t, r) {
  return t = Kb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Kb(e) {
  var t = n2(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function n2(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ov = 1, a2 = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    XN(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = JN(this, t, [].concat(a)), ys(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), ys(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var l, u, c, s;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (l = (u = r.props.coordinate) === null || u === void 0 ? void 0 : u.x) !== null && l !== void 0 ? l : 0,
            y: (c = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return r2(t, e), QN(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > ov || Math.abs(n.height - this.state.lastBoundingBox.height) > ov) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, a;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, l = a.animationDuration, u = a.animationEasing, c = a.children, s = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, h = a.position, m = a.reverseDirection, v = a.useTranslate3d, y = a.viewBox, x = a.wrapperStyle, w = GN({
        allowEscapeViewBox: o,
        coordinate: s,
        offsetTopLeft: p,
        position: h,
        reverseDirection: m,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: y
      }), O = w.cssClasses, g = w.cssProperties, b = iv(iv({
        transition: d && i ? "transform ".concat(l, "ms ").concat(u) : void 0
      }, g), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, x);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ N.createElement("div", {
          tabIndex: -1,
          className: O,
          style: b,
          ref: function(P) {
            n.wrapperNode = P;
          }
        }, c)
      );
    }
  }]);
}(S.PureComponent), i2 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, xr = {
  isSsr: i2(),
  get: function(t) {
    return xr[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      xr[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(a) {
        xr[a] = t[a];
      });
    }
  }
};
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
function lv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lv(Object(r), !0).forEach(function(n) {
      fd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function l2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Xb(n.key), n);
  }
}
function u2(e, t, r) {
  return t && l2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function c2(e, t, r) {
  return t = nl(t), s2(e, Gb() ? Reflect.construct(t, r || [], nl(e).constructor) : t.apply(e, r));
}
function s2(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return f2(e);
}
function f2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gb = function() {
    return !!e;
  })();
}
function nl(e) {
  return nl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, nl(e);
}
function d2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && bs(e, t);
}
function bs(e, t) {
  return bs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, bs(e, t);
}
function fd(e, t, r) {
  return t = Xb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xb(e) {
  var t = p2(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function p2(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v2(e) {
  return e.dataKey;
}
function h2(e, t) {
  return /* @__PURE__ */ N.isValidElement(e) ? /* @__PURE__ */ N.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ N.createElement(e, t) : /* @__PURE__ */ N.createElement(VN, t);
}
var ar = /* @__PURE__ */ function(e) {
  function t() {
    return o2(this, t), c2(this, t, arguments);
  }
  return d2(t, e), u2(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, l = a.animationDuration, u = a.animationEasing, c = a.content, s = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, h = a.payload, m = a.payloadUniqBy, v = a.position, y = a.reverseDirection, x = a.useTranslate3d, w = a.viewBox, O = a.wrapperStyle, g = h ?? [];
      f && g.length && (g = Bb(h.filter(function($) {
        return $.value != null && ($.hide !== !0 || n.props.includeHidden);
      }), m, v2));
      var b = g.length > 0;
      return /* @__PURE__ */ N.createElement(a2, {
        allowEscapeViewBox: o,
        animationDuration: l,
        animationEasing: u,
        isAnimationActive: d,
        active: i,
        coordinate: s,
        hasPayload: b,
        offset: p,
        position: v,
        reverseDirection: y,
        useTranslate3d: x,
        viewBox: w,
        wrapperStyle: O
      }, h2(c, uv(uv({}, this.props), {}, {
        payload: g
      })));
    }
  }]);
}(S.PureComponent);
fd(ar, "displayName", "Tooltip");
fd(ar, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !xr.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var m2 = Pr, g2 = function() {
  return m2.Date.now();
}, y2 = g2, b2 = /\s/;
function x2(e) {
  for (var t = e.length; t-- && b2.test(e.charAt(t)); )
    ;
  return t;
}
var w2 = x2, S2 = w2, O2 = /^\s+/;
function $2(e) {
  return e && e.slice(0, S2(e) + 1).replace(O2, "");
}
var P2 = $2, C2 = P2, cv = Qr, _2 = Ca, sv = NaN, A2 = /^[-+]0x[0-9a-f]+$/i, E2 = /^0b[01]+$/i, T2 = /^0o[0-7]+$/i, M2 = parseInt;
function I2(e) {
  if (typeof e == "number")
    return e;
  if (_2(e))
    return sv;
  if (cv(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = cv(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = C2(e);
  var r = E2.test(e);
  return r || T2.test(e) ? M2(e.slice(2), r ? 2 : 8) : A2.test(e) ? sv : +e;
}
var Zb = I2, j2 = Qr, Cc = y2, fv = Zb, D2 = "Expected a function", k2 = Math.max, N2 = Math.min;
function R2(e, t, r) {
  var n, a, i, o, l, u, c = 0, s = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(D2);
  t = fv(t) || 0, j2(r) && (s = !!r.leading, f = "maxWait" in r, i = f ? k2(fv(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);
  function p(b) {
    var $ = n, P = a;
    return n = a = void 0, c = b, o = e.apply(P, $), o;
  }
  function h(b) {
    return c = b, l = setTimeout(y, t), s ? p(b) : o;
  }
  function m(b) {
    var $ = b - u, P = b - c, A = t - $;
    return f ? N2(A, i - P) : A;
  }
  function v(b) {
    var $ = b - u, P = b - c;
    return u === void 0 || $ >= t || $ < 0 || f && P >= i;
  }
  function y() {
    var b = Cc();
    if (v(b))
      return x(b);
    l = setTimeout(y, m(b));
  }
  function x(b) {
    return l = void 0, d && n ? p(b) : (n = a = void 0, o);
  }
  function w() {
    l !== void 0 && clearTimeout(l), c = 0, n = u = a = l = void 0;
  }
  function O() {
    return l === void 0 ? o : x(Cc());
  }
  function g() {
    var b = Cc(), $ = v(b);
    if (n = arguments, a = this, u = b, $) {
      if (l === void 0)
        return h(u);
      if (f)
        return clearTimeout(l), l = setTimeout(y, t), p(u);
    }
    return l === void 0 && (l = setTimeout(y, t)), o;
  }
  return g.cancel = w, g.flush = O, g;
}
var L2 = R2, B2 = L2, F2 = Qr, H2 = "Expected a function";
function W2(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(H2);
  return F2(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), B2(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var V2 = W2;
const Qb = /* @__PURE__ */ Le(V2);
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Co(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dv(Object(r), !0).forEach(function(n) {
      z2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z2(e, t, r) {
  return t = U2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U2(e) {
  var t = Y2(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function Y2(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function q2(e, t) {
  return Z2(e) || X2(e, t) || G2(e, t) || K2();
}
function K2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G2(e, t) {
  if (e) {
    if (typeof e == "string") return pv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pv(e, t);
  }
}
function pv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function X2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function Z2(e) {
  if (Array.isArray(e)) return e;
}
var Jb = /* @__PURE__ */ S.forwardRef(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, l = e.height, u = l === void 0 ? "100%" : l, c = e.minWidth, s = c === void 0 ? 0 : c, f = e.minHeight, d = e.maxHeight, p = e.children, h = e.debounce, m = h === void 0 ? 0 : h, v = e.id, y = e.className, x = e.onResize, w = e.style, O = w === void 0 ? {} : w, g = S.useRef(null), b = S.useRef();
  b.current = x, S.useImperativeHandle(t, function() {
    return Object.defineProperty(g.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), g.current;
      },
      configurable: !0
    });
  });
  var $ = S.useState({
    containerWidth: a.width,
    containerHeight: a.height
  }), P = q2($, 2), A = P[0], T = P[1], C = S.useCallback(function(D, I) {
    T(function(_) {
      var E = Math.round(D), j = Math.round(I);
      return _.containerWidth === E && _.containerHeight === j ? _ : {
        containerWidth: E,
        containerHeight: j
      };
    });
  }, []);
  S.useEffect(function() {
    var D = function(R) {
      var B, H = R[0].contentRect, L = H.width, V = H.height;
      C(L, V), (B = b.current) === null || B === void 0 || B.call(b, L, V);
    };
    m > 0 && (D = Qb(D, m, {
      trailing: !0,
      leading: !1
    }));
    var I = new ResizeObserver(D), _ = g.current.getBoundingClientRect(), E = _.width, j = _.height;
    return C(E, j), I.observe(g.current), function() {
      I.disconnect();
    };
  }, [C, m]);
  var M = S.useMemo(function() {
    var D = A.containerWidth, I = A.containerHeight;
    if (D < 0 || I < 0)
      return null;
    Ir(hn(o) || hn(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), Ir(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var _ = hn(o) ? D : o, E = hn(u) ? I : u;
    r && r > 0 && (_ ? E = _ / r : E && (_ = E * r), d && E > d && (E = d)), Ir(_ > 0 || E > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, _, E, o, u, s, f, r);
    var j = !Array.isArray(p) && Mr(p.type).endsWith("Chart");
    return N.Children.map(p, function(k) {
      return /* @__PURE__ */ N.isValidElement(k) ? /* @__PURE__ */ S.cloneElement(k, Co({
        width: _,
        height: E
      }, j ? {
        style: Co({
          height: "100%",
          width: "100%",
          maxHeight: E,
          maxWidth: _
        }, k.props.style)
      } : {})) : k;
    });
  }, [r, p, u, d, f, s, A, o]);
  return /* @__PURE__ */ N.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: Ae("recharts-responsive-container", y),
    style: Co(Co({}, O), {}, {
      width: o,
      height: u,
      minWidth: s,
      minHeight: f,
      maxHeight: d
    }),
    ref: g
  }, M);
}), pu = function(t) {
  return null;
};
pu.displayName = "Cell";
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function vv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vv(Object(r), !0).forEach(function(n) {
      Q2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Q2(e, t, r) {
  return t = J2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J2(e) {
  var t = eR(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function eR(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Nn = {
  widthCache: {},
  cacheCount: 0
}, tR = 2e3, rR = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, hv = "recharts_measurement_span";
function nR(e) {
  var t = xs({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var li = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || xr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = nR(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Nn.widthCache[a])
    return Nn.widthCache[a];
  try {
    var i = document.getElementById(hv);
    i || (i = document.createElement("span"), i.setAttribute("id", hv), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = xs(xs({}, rR), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var l = i.getBoundingClientRect(), u = {
      width: l.width,
      height: l.height
    };
    return Nn.widthCache[a] = u, ++Nn.cacheCount > tR && (Nn.cacheCount = 0, Nn.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, aR = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function al(e, t) {
  return uR(e) || lR(e, t) || oR(e, t) || iR();
}
function iR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oR(e, t) {
  if (e) {
    if (typeof e == "string") return mv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mv(e, t);
  }
}
function mv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function uR(e) {
  if (Array.isArray(e)) return e;
}
function cR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fR(n.key), n);
  }
}
function sR(e, t, r) {
  return t && gv(e.prototype, t), r && gv(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fR(e) {
  var t = dR(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function dR(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var yv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, bv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, pR = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, vR = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, e0 = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, hR = Object.keys(e0), Bn = "NaN";
function mR(e, t) {
  return e * e0[t];
}
var _o = /* @__PURE__ */ function() {
  function e(t, r) {
    cR(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !pR.test(r) && (this.num = NaN, this.unit = ""), hR.includes(r) && (this.num = mR(t, r), this.unit = "px");
  }
  return sR(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, a = (n = vR.exec(r)) !== null && n !== void 0 ? n : [], i = al(a, 3), o = i[1], l = i[2];
      return new e(parseFloat(o), l ?? "");
    }
  }]);
}();
function t0(e) {
  if (e.includes(Bn))
    return Bn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = yv.exec(t)) !== null && r !== void 0 ? r : [], a = al(n, 4), i = a[1], o = a[2], l = a[3], u = _o.parse(i ?? ""), c = _o.parse(l ?? ""), s = o === "*" ? u.multiply(c) : u.divide(c);
    if (s.isNaN())
      return Bn;
    t = t.replace(yv, s.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = bv.exec(t)) !== null && f !== void 0 ? f : [], p = al(d, 4), h = p[1], m = p[2], v = p[3], y = _o.parse(h ?? ""), x = _o.parse(v ?? ""), w = m === "+" ? y.add(x) : y.subtract(x);
    if (w.isNaN())
      return Bn;
    t = t.replace(bv, w.toString());
  }
  return t;
}
var xv = /\(([^()]*)\)/;
function gR(e) {
  for (var t = e; t.includes("("); ) {
    var r = xv.exec(t), n = al(r, 2), a = n[1];
    t = t.replace(xv, t0(a));
  }
  return t;
}
function yR(e) {
  var t = e.replace(/\s+/g, "");
  return t = gR(t), t = t0(t), t;
}
function bR(e) {
  try {
    return yR(e);
  } catch {
    return Bn;
  }
}
function _c(e) {
  var t = bR(e.slice(5, -1));
  return t === Bn ? "" : t;
}
var xR = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], wR = ["dx", "dy", "angle", "className", "breakAll"];
function ws() {
  return ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ws.apply(this, arguments);
}
function wv(e, t) {
  if (e == null) return {};
  var r = SR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Sv(e, t) {
  return CR(e) || PR(e, t) || $R(e, t) || OR();
}
function OR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $R(e, t) {
  if (e) {
    if (typeof e == "string") return Ov(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ov(e, t);
  }
}
function Ov(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function CR(e) {
  if (Array.isArray(e)) return e;
}
var r0 = /[ \f\n\r\t\v\u2028\u2029]+/, n0 = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    Ce(r) || (n ? i = r.toString().split("") : i = r.toString().split(r0));
    var o = i.map(function(u) {
      return {
        word: u,
        width: li(u, a).width
      };
    }), l = n ? 0 : li(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: l
    };
  } catch {
    return null;
  }
}, _R = function(t, r, n, a, i) {
  var o = t.maxLines, l = t.children, u = t.style, c = t.breakAll, s = ee(o), f = l, d = function() {
    var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return _.reduce(function(E, j) {
      var k = j.word, R = j.width, B = E[E.length - 1];
      if (B && (a == null || i || B.width + R + n < Number(a)))
        B.words.push(k), B.width += R + n;
      else {
        var H = {
          words: [k],
          width: R
        };
        E.push(H);
      }
      return E;
    }, []);
  }, p = d(r), h = function(_) {
    return _.reduce(function(E, j) {
      return E.width > j.width ? E : j;
    });
  };
  if (!s)
    return p;
  for (var m = "…", v = function(_) {
    var E = f.slice(0, _), j = n0({
      breakAll: c,
      style: u,
      children: E + m
    }).wordsWithComputedWidth, k = d(j), R = k.length > o || h(k).width > Number(a);
    return [R, k];
  }, y = 0, x = f.length - 1, w = 0, O; y <= x && w <= f.length - 1; ) {
    var g = Math.floor((y + x) / 2), b = g - 1, $ = v(b), P = Sv($, 2), A = P[0], T = P[1], C = v(g), M = Sv(C, 1), D = M[0];
    if (!A && !D && (y = g + 1), A && D && (x = g - 1), !A && D) {
      O = T;
      break;
    }
    w++;
  }
  return O || p;
}, $v = function(t) {
  var r = Ce(t) ? [] : t.toString().split(r0);
  return [{
    words: r
  }];
}, AR = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, l = t.maxLines;
  if ((r || n) && !xr.isSsr) {
    var u, c, s = n0({
      breakAll: o,
      children: a,
      style: i
    });
    if (s) {
      var f = s.wordsWithComputedWidth, d = s.spaceWidth;
      u = f, c = d;
    } else
      return $v(a);
    return _R({
      breakAll: o,
      children: a,
      maxLines: l,
      style: i
    }, u, c, r, n);
  }
  return $v(a);
}, Pv = "#808080", Pn = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, l = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, s = t.scaleToFit, f = s === void 0 ? !1 : s, d = t.textAnchor, p = d === void 0 ? "start" : d, h = t.verticalAnchor, m = h === void 0 ? "end" : h, v = t.fill, y = v === void 0 ? Pv : v, x = wv(t, xR), w = S.useMemo(function() {
    return AR({
      breakAll: x.breakAll,
      children: x.children,
      maxLines: x.maxLines,
      scaleToFit: f,
      style: x.style,
      width: x.width
    });
  }, [x.breakAll, x.children, x.maxLines, f, x.style, x.width]), O = x.dx, g = x.dy, b = x.angle, $ = x.className, P = x.breakAll, A = wv(x, wR);
  if (!gt(n) || !gt(i))
    return null;
  var T = n + (ee(O) ? O : 0), C = i + (ee(g) ? g : 0), M;
  switch (m) {
    case "start":
      M = _c("calc(".concat(c, ")"));
      break;
    case "middle":
      M = _c("calc(".concat((w.length - 1) / 2, " * -").concat(l, " + (").concat(c, " / 2))"));
      break;
    default:
      M = _c("calc(".concat(w.length - 1, " * -").concat(l, ")"));
      break;
  }
  var D = [];
  if (f) {
    var I = w[0].width, _ = x.width;
    D.push("scale(".concat((ee(_) ? _ / I : 1) / I, ")"));
  }
  return b && D.push("rotate(".concat(b, ", ").concat(T, ", ").concat(C, ")")), D.length && (A.transform = D.join(" ")), /* @__PURE__ */ N.createElement("text", ws({}, ve(A, !0), {
    x: T,
    y: C,
    className: Ae("recharts-text", $),
    textAnchor: p,
    fill: y.includes("url") ? Pv : y
  }), w.map(function(E, j) {
    var k = E.words.join(P ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ N.createElement("tspan", {
        x: T,
        dy: j === 0 ? M : l,
        key: "".concat(k, "-").concat(j)
      }, k)
    );
  }));
};
function Xr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ER(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function dd(e) {
  let t, r, n;
  e.length !== 2 ? (t = Xr, r = (l, u) => Xr(e(l), u), n = (l, u) => e(l) - u) : (t = e === Xr || e === ER ? e : TR, r = e, n = e);
  function a(l, u, c = 0, s = l.length) {
    if (c < s) {
      if (t(u, u) !== 0) return s;
      do {
        const f = c + s >>> 1;
        r(l[f], u) < 0 ? c = f + 1 : s = f;
      } while (c < s);
    }
    return c;
  }
  function i(l, u, c = 0, s = l.length) {
    if (c < s) {
      if (t(u, u) !== 0) return s;
      do {
        const f = c + s >>> 1;
        r(l[f], u) <= 0 ? c = f + 1 : s = f;
      } while (c < s);
    }
    return c;
  }
  function o(l, u, c = 0, s = l.length) {
    const f = a(l, u, c, s - 1);
    return f > c && n(l[f - 1], u) > -n(l[f], u) ? f - 1 : f;
  }
  return { left: a, center: o, right: i };
}
function TR() {
  return 0;
}
function a0(e) {
  return e === null ? NaN : +e;
}
function* MR(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const IR = dd(Xr), to = IR.right;
dd(a0).center;
class Cv extends Map {
  constructor(t, r = kR) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(_v(this, t));
  }
  has(t) {
    return super.has(_v(this, t));
  }
  set(t, r) {
    return super.set(jR(this, t), r);
  }
  delete(t) {
    return super.delete(DR(this, t));
  }
}
function _v({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function jR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function DR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function kR(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function NR(e = Xr) {
  if (e === Xr) return i0;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function i0(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const RR = Math.sqrt(50), LR = Math.sqrt(10), BR = Math.sqrt(2);
function il(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= RR ? 10 : i >= LR ? 5 : i >= BR ? 2 : 1;
  let l, u, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, a) * o, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= r && r < 2 ? il(e, t, r * 2) : [l, u, c];
}
function Ss(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? il(t, e, r) : il(e, t, r);
  if (!(i >= a)) return [];
  const l = i - a + 1, u = new Array(l);
  if (n)
    if (o < 0) for (let c = 0; c < l; ++c) u[c] = (i - c) / -o;
    else for (let c = 0; c < l; ++c) u[c] = (i - c) * o;
  else if (o < 0) for (let c = 0; c < l; ++c) u[c] = (a + c) / -o;
  else for (let c = 0; c < l; ++c) u[c] = (a + c) * o;
  return u;
}
function Os(e, t, r) {
  return t = +t, e = +e, r = +r, il(e, t, r)[2];
}
function $s(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? Os(t, e, r) : Os(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function Av(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ev(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function o0(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? i0 : NR(a); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, s = Math.log(u), f = 0.5 * Math.exp(2 * s / 3), d = 0.5 * Math.sqrt(s * f * (u - f) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / u + d)), h = Math.min(n, Math.floor(t + (u - c) * f / u + d));
      o0(e, t, p, h, a);
    }
    const i = e[t];
    let o = r, l = n;
    for (Ka(e, r, t), a(e[n], i) > 0 && Ka(e, r, n); o < l; ) {
      for (Ka(e, o, l), ++o, --l; a(e[o], i) < 0; ) ++o;
      for (; a(e[l], i) > 0; ) --l;
    }
    a(e[r], i) === 0 ? Ka(e, r, l) : (++l, Ka(e, l, n)), l <= t && (r = l + 1), t <= l && (n = l - 1);
  }
  return e;
}
function Ka(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function FR(e, t, r) {
  if (e = Float64Array.from(MR(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Ev(e);
    if (t >= 1) return Av(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = Av(o0(e, i).subarray(0, i + 1)), l = Ev(e.subarray(i + 1));
    return o + (l - o) * (a - i);
  }
}
function HR(e, t, r = a0) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), l = +r(e[i + 1], i + 1, e);
    return o + (l - o) * (a - i);
  }
}
function WR(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function tr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Hr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Ps = Symbol("implicit");
function pd() {
  var e = new Cv(), t = [], r = [], n = Ps;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== Ps) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new Cv();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return pd(t, r).unknown(n);
  }, tr.apply(a, arguments), a;
}
function xi() {
  var e = pd().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, l = !1, u = 0, c = 0, s = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, h = p ? a : n, m = p ? n : a;
    i = (m - h) / Math.max(1, d - u + c * 2), l && (i = Math.floor(i)), h += (m - h - i * (d - u)) * s, o = i * (1 - u), l && (h = Math.round(h), o = Math.round(o));
    var v = WR(d).map(function(y) {
      return h + i * y;
    });
    return r(p ? v.reverse() : v);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, a] = d, n = +n, a = +a, f()) : [n, a];
  }, e.rangeRound = function(d) {
    return [n, a] = d, n = +n, a = +a, l = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (l = !!d, f()) : l;
  }, e.padding = function(d) {
    return arguments.length ? (u = Math.min(1, c = +d), f()) : u;
  }, e.paddingInner = function(d) {
    return arguments.length ? (u = Math.min(1, d), f()) : u;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (s = Math.max(0, Math.min(1, d)), f()) : s;
  }, e.copy = function() {
    return xi(t(), [n, a]).round(l).paddingInner(u).paddingOuter(c).align(s);
  }, tr.apply(f(), arguments);
}
function l0(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return l0(t());
  }, e;
}
function ui() {
  return l0(xi.apply(null, arguments).paddingInner(1));
}
function vd(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function u0(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function ro() {
}
var wi = 0.7, ol = 1 / wi, Yn = "\\s*([+-]?\\d+)\\s*", Si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", wr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", VR = /^#([0-9a-f]{3,8})$/, zR = new RegExp(`^rgb\\(${Yn},${Yn},${Yn}\\)$`), UR = new RegExp(`^rgb\\(${wr},${wr},${wr}\\)$`), YR = new RegExp(`^rgba\\(${Yn},${Yn},${Yn},${Si}\\)$`), qR = new RegExp(`^rgba\\(${wr},${wr},${wr},${Si}\\)$`), KR = new RegExp(`^hsl\\(${Si},${wr},${wr}\\)$`), GR = new RegExp(`^hsla\\(${Si},${wr},${wr},${Si}\\)$`), Tv = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
vd(ro, Oi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Mv,
  // Deprecated! Use color.formatHex.
  formatHex: Mv,
  formatHex8: XR,
  formatHsl: ZR,
  formatRgb: Iv,
  toString: Iv
});
function Mv() {
  return this.rgb().formatHex();
}
function XR() {
  return this.rgb().formatHex8();
}
function ZR() {
  return c0(this).formatHsl();
}
function Iv() {
  return this.rgb().formatRgb();
}
function Oi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = VR.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? jv(t) : r === 3 ? new Lt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ao(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ao(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = zR.exec(e)) ? new Lt(t[1], t[2], t[3], 1) : (t = UR.exec(e)) ? new Lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = YR.exec(e)) ? Ao(t[1], t[2], t[3], t[4]) : (t = qR.exec(e)) ? Ao(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = KR.exec(e)) ? Nv(t[1], t[2] / 100, t[3] / 100, 1) : (t = GR.exec(e)) ? Nv(t[1], t[2] / 100, t[3] / 100, t[4]) : Tv.hasOwnProperty(e) ? jv(Tv[e]) : e === "transparent" ? new Lt(NaN, NaN, NaN, 0) : null;
}
function jv(e) {
  return new Lt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ao(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Lt(e, t, r, n);
}
function QR(e) {
  return e instanceof ro || (e = Oi(e)), e ? (e = e.rgb(), new Lt(e.r, e.g, e.b, e.opacity)) : new Lt();
}
function Cs(e, t, r, n) {
  return arguments.length === 1 ? QR(e) : new Lt(e, t, r, n ?? 1);
}
function Lt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
vd(Lt, Cs, u0(ro, {
  brighter(e) {
    return e = e == null ? ol : Math.pow(ol, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wi : Math.pow(wi, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Lt(xn(this.r), xn(this.g), xn(this.b), ll(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Dv,
  // Deprecated! Use color.formatHex.
  formatHex: Dv,
  formatHex8: JR,
  formatRgb: kv,
  toString: kv
}));
function Dv() {
  return `#${mn(this.r)}${mn(this.g)}${mn(this.b)}`;
}
function JR() {
  return `#${mn(this.r)}${mn(this.g)}${mn(this.b)}${mn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kv() {
  const e = ll(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${xn(this.r)}, ${xn(this.g)}, ${xn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ll(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function xn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function mn(e) {
  return e = xn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Nv(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new or(e, t, r, n);
}
function c0(e) {
  if (e instanceof or) return new or(e.h, e.s, e.l, e.opacity);
  if (e instanceof ro || (e = Oi(e)), !e) return new or();
  if (e instanceof or) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, l = i - a, u = (i + a) / 2;
  return l ? (t === i ? o = (r - n) / l + (r < n) * 6 : r === i ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= u < 0.5 ? i + a : 2 - i - a, o *= 60) : l = u > 0 && u < 1 ? 0 : o, new or(o, l, u, e.opacity);
}
function eL(e, t, r, n) {
  return arguments.length === 1 ? c0(e) : new or(e, t, r, n ?? 1);
}
function or(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
vd(or, eL, u0(ro, {
  brighter(e) {
    return e = e == null ? ol : Math.pow(ol, e), new or(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wi : Math.pow(wi, e), new or(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new Lt(
      Ac(e >= 240 ? e - 240 : e + 120, a, n),
      Ac(e, a, n),
      Ac(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new or(Rv(this.h), Eo(this.s), Eo(this.l), ll(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ll(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Rv(this.h)}, ${Eo(this.s) * 100}%, ${Eo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Rv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Eo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ac(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const hd = (e) => () => e;
function tL(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function rL(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function nL(e) {
  return (e = +e) == 1 ? s0 : function(t, r) {
    return r - t ? rL(t, r, e) : hd(isNaN(t) ? r : t);
  };
}
function s0(e, t) {
  var r = t - e;
  return r ? tL(e, r) : hd(isNaN(e) ? t : e);
}
const Lv = function e(t) {
  var r = nL(t);
  function n(a, i) {
    var o = r((a = Cs(a)).r, (i = Cs(i)).r), l = r(a.g, i.g), u = r(a.b, i.b), c = s0(a.opacity, i.opacity);
    return function(s) {
      return a.r = o(s), a.g = l(s), a.b = u(s), a.opacity = c(s), a + "";
    };
  }
  return n.gamma = e, n;
}(1);
function aL(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function iL(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function oL(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = Na(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(l) {
    for (o = 0; o < n; ++o) i[o] = a[o](l);
    return i;
  };
}
function lL(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function ul(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function uL(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = Na(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var _s = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ec = new RegExp(_s.source, "g");
function cL(e) {
  return function() {
    return e;
  };
}
function sL(e) {
  return function(t) {
    return e(t) + "";
  };
}
function fL(e, t) {
  var r = _s.lastIndex = Ec.lastIndex = 0, n, a, i, o = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (n = _s.exec(e)) && (a = Ec.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), l[o] ? l[o] += i : l[++o] = i), (n = n[0]) === (a = a[0]) ? l[o] ? l[o] += a : l[++o] = a : (l[++o] = null, u.push({ i: o, x: ul(n, a) })), r = Ec.lastIndex;
  return r < t.length && (i = t.slice(r), l[o] ? l[o] += i : l[++o] = i), l.length < 2 ? u[0] ? sL(u[0].x) : cL(t) : (t = u.length, function(c) {
    for (var s = 0, f; s < t; ++s) l[(f = u[s]).i] = f.x(c);
    return l.join("");
  });
}
function Na(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? hd(t) : (r === "number" ? ul : r === "string" ? (n = Oi(t)) ? (t = n, Lv) : fL : t instanceof Oi ? Lv : t instanceof Date ? lL : iL(t) ? aL : Array.isArray(t) ? oL : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? uL : ul)(e, t);
}
function md(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function dL(e, t) {
  t === void 0 && (t = e, e = Na);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[l](o - l);
  };
}
function pL(e) {
  return function() {
    return e;
  };
}
function cl(e) {
  return +e;
}
var Bv = [0, 1];
function kt(e) {
  return e;
}
function As(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : pL(isNaN(t) ? NaN : 0.5);
}
function vL(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function hL(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = As(a, n), i = r(o, i)) : (n = As(n, a), i = r(i, o)), function(l) {
    return i(n(l));
  };
}
function mL(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = As(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(l) {
    var u = to(e, l, 1, n) - 1;
    return i[u](a[u](l));
  };
}
function no(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function vu() {
  var e = Bv, t = Bv, r = Na, n, a, i, o = kt, l, u, c;
  function s() {
    var d = Math.min(e.length, t.length);
    return o !== kt && (o = vL(e[0], e[d - 1])), l = d > 2 ? mL : hL, u = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (u || (u = l(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((c || (c = l(t, e.map(n), ul)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, cl), s()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), s()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = md, s();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : kt, s()) : o !== kt;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, s()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, function(d, p) {
    return n = d, a = p, s();
  };
}
function gd() {
  return vu()(kt, kt);
}
function gL(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function sl(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function ta(e) {
  return e = sl(Math.abs(e)), e ? e[1] : NaN;
}
function yL(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, l = e[0], u = 0; a > 0 && l > 0 && (u + l + 1 > n && (l = Math.max(1, n - u)), i.push(r.substring(a -= l, a + l)), !((u += l + 1) > n)); )
      l = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function bL(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var xL = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $i(e) {
  if (!(t = xL.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new yd({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
$i.prototype = yd.prototype;
function yd(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
yd.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function wL(e) {
  e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
}
var f0;
function SL(e, t) {
  var r = sl(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (f0 = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + sl(e, Math.max(0, t + i - 1))[0];
}
function Fv(e, t) {
  var r = sl(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const Hv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: gL,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Fv(e * 100, t),
  r: Fv,
  s: SL,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Wv(e) {
  return e;
}
var Vv = Array.prototype.map, zv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function OL(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Wv : yL(Vv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? Wv : bL(Vv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = $i(f);
    var d = f.fill, p = f.align, h = f.sign, m = f.symbol, v = f.zero, y = f.width, x = f.comma, w = f.precision, O = f.trim, g = f.type;
    g === "n" ? (x = !0, g = "g") : Hv[g] || (w === void 0 && (w = 12), O = !0, g = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var b = m === "$" ? r : m === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", $ = m === "$" ? n : /[%p]/.test(g) ? o : "", P = Hv[g], A = /[defgprs%]/.test(g);
    w = w === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function T(C) {
      var M = b, D = $, I, _, E;
      if (g === "c")
        D = P(C) + D, C = "";
      else {
        C = +C;
        var j = C < 0 || 1 / C < 0;
        if (C = isNaN(C) ? u : P(Math.abs(C), w), O && (C = wL(C)), j && +C == 0 && h !== "+" && (j = !1), M = (j ? h === "(" ? h : l : h === "-" || h === "(" ? "" : h) + M, D = (g === "s" ? zv[8 + f0 / 3] : "") + D + (j && h === "(" ? ")" : ""), A) {
          for (I = -1, _ = C.length; ++I < _; )
            if (E = C.charCodeAt(I), 48 > E || E > 57) {
              D = (E === 46 ? a + C.slice(I + 1) : C.slice(I)) + D, C = C.slice(0, I);
              break;
            }
        }
      }
      x && !v && (C = t(C, 1 / 0));
      var k = M.length + C.length + D.length, R = k < y ? new Array(y - k + 1).join(d) : "";
      switch (x && v && (C = t(R + C, R.length ? y - D.length : 1 / 0), R = ""), p) {
        case "<":
          C = M + C + D + R;
          break;
        case "=":
          C = M + R + C + D;
          break;
        case "^":
          C = R.slice(0, k = R.length >> 1) + M + C + D + R.slice(k);
          break;
        default:
          C = R + M + C + D;
          break;
      }
      return i(C);
    }
    return T.toString = function() {
      return f + "";
    }, T;
  }
  function s(f, d) {
    var p = c((f = $i(f), f.type = "f", f)), h = Math.max(-8, Math.min(8, Math.floor(ta(d) / 3))) * 3, m = Math.pow(10, -h), v = zv[8 + h / 3];
    return function(y) {
      return p(m * y) + v;
    };
  }
  return {
    format: c,
    formatPrefix: s
  };
}
var To, bd, d0;
$L({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function $L(e) {
  return To = OL(e), bd = To.format, d0 = To.formatPrefix, To;
}
function PL(e) {
  return Math.max(0, -ta(Math.abs(e)));
}
function CL(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ta(t) / 3))) * 3 - ta(Math.abs(e)));
}
function _L(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, ta(t) - ta(e)) + 1;
}
function p0(e, t, r, n) {
  var a = $s(e, t, r), i;
  switch (n = $i(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = CL(a, o)) && (n.precision = i), d0(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = _L(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = PL(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return bd(n);
}
function en(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Ss(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return p0(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], l = n[i], u, c, s = 10;
    for (l < o && (c = o, o = l, l = c, c = a, a = i, i = c); s-- > 0; ) {
      if (c = Os(o, l, r), c === u)
        return n[a] = o, n[i] = l, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      u = c;
    }
    return e;
  }, e;
}
function fl() {
  var e = gd();
  return e.copy = function() {
    return no(e, fl());
  }, tr.apply(e, arguments), en(e);
}
function v0(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, cl), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return v0(e).unknown(t);
  }, e = arguments.length ? Array.from(e, cl) : [0, 1], en(r);
}
function h0(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function Uv(e) {
  return Math.log(e);
}
function Yv(e) {
  return Math.exp(e);
}
function AL(e) {
  return -Math.log(-e);
}
function EL(e) {
  return -Math.exp(-e);
}
function TL(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function ML(e) {
  return e === 10 ? TL : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function IL(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function qv(e) {
  return (t, r) => -e(-t, r);
}
function xd(e) {
  const t = e(Uv, Yv), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = IL(n), i = ML(n), r()[0] < 0 ? (a = qv(a), i = qv(i), e(AL, EL)) : e(Uv, Yv), t;
  }
  return t.base = function(l) {
    return arguments.length ? (n = +l, o()) : n;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), o()) : r();
  }, t.ticks = (l) => {
    const u = r();
    let c = u[0], s = u[u.length - 1];
    const f = s < c;
    f && ([c, s] = [s, c]);
    let d = a(c), p = a(s), h, m;
    const v = l == null ? 10 : +l;
    let y = [];
    if (!(n % 1) && p - d < v) {
      if (d = Math.floor(d), p = Math.ceil(p), c > 0) {
        for (; d <= p; ++d)
          for (h = 1; h < n; ++h)
            if (m = d < 0 ? h / i(-d) : h * i(d), !(m < c)) {
              if (m > s) break;
              y.push(m);
            }
      } else for (; d <= p; ++d)
        for (h = n - 1; h >= 1; --h)
          if (m = d > 0 ? h / i(-d) : h * i(d), !(m < c)) {
            if (m > s) break;
            y.push(m);
          }
      y.length * 2 < v && (y = Ss(c, s, v));
    } else
      y = Ss(d, p, Math.min(p - d, v)).map(i);
    return f ? y.reverse() : y;
  }, t.tickFormat = (l, u) => {
    if (l == null && (l = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = $i(u)).precision == null && (u.trim = !0), u = bd(u)), l === 1 / 0) return u;
    const c = Math.max(1, n * l / t.ticks().length);
    return (s) => {
      let f = s / i(Math.round(a(s)));
      return f * n < n - 0.5 && (f *= n), f <= c ? u(s) : "";
    };
  }, t.nice = () => r(h0(r(), {
    floor: (l) => i(Math.floor(a(l))),
    ceil: (l) => i(Math.ceil(a(l)))
  })), t;
}
function m0() {
  const e = xd(vu()).domain([1, 10]);
  return e.copy = () => no(e, m0()).base(e.base()), tr.apply(e, arguments), e;
}
function Kv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Gv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function wd(e) {
  var t = 1, r = e(Kv(t), Gv(t));
  return r.constant = function(n) {
    return arguments.length ? e(Kv(t = +n), Gv(t)) : t;
  }, en(r);
}
function g0() {
  var e = wd(vu());
  return e.copy = function() {
    return no(e, g0()).constant(e.constant());
  }, tr.apply(e, arguments);
}
function Xv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function jL(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function DL(e) {
  return e < 0 ? -e * e : e * e;
}
function Sd(e) {
  var t = e(kt, kt), r = 1;
  function n() {
    return r === 1 ? e(kt, kt) : r === 0.5 ? e(jL, DL) : e(Xv(r), Xv(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, en(t);
}
function Od() {
  var e = Sd(vu());
  return e.copy = function() {
    return no(e, Od()).exponent(e.exponent());
  }, tr.apply(e, arguments), e;
}
function kL() {
  return Od.apply(null, arguments).exponent(0.5);
}
function Zv(e) {
  return Math.sign(e) * e * e;
}
function NL(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function y0() {
  var e = gd(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = NL(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(Zv(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, cl)).map(Zv)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return y0(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, tr.apply(a, arguments), en(a);
}
function b0() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++o < l; ) r[o - 1] = HR(e, o / l);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[to(r, o)];
  }
  return i.invertExtent = function(o) {
    var l = t.indexOf(o);
    return l < 0 ? [NaN, NaN] : [
      l > 0 ? r[l - 1] : e[0],
      l < r.length ? r[l] : e[e.length - 1]
    ];
  }, i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let l of o) l != null && !isNaN(l = +l) && e.push(l);
    return e.sort(Xr), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return b0().domain(e).range(t).unknown(n);
  }, tr.apply(i, arguments);
}
function x0() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(u) {
    return u != null && u <= u ? a[to(n, u, 0, r)] : i;
  }
  function l() {
    var u = -1;
    for (n = new Array(r); ++u < r; ) n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, l()) : [e, t];
  }, o.range = function(u) {
    return arguments.length ? (r = (a = Array.from(u)).length - 1, l()) : a.slice();
  }, o.invertExtent = function(u) {
    var c = a.indexOf(u);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(u) {
    return arguments.length && (i = u), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return x0().domain([e, t]).range(a).unknown(i);
  }, tr.apply(en(o), arguments);
}
function w0() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[to(e, i, 0, n)] : r;
  }
  return a.domain = function(i) {
    return arguments.length ? (e = Array.from(i), n = Math.min(e.length, t.length - 1), a) : e.slice();
  }, a.range = function(i) {
    return arguments.length ? (t = Array.from(i), n = Math.min(e.length, t.length - 1), a) : t.slice();
  }, a.invertExtent = function(i) {
    var o = t.indexOf(i);
    return [e[o - 1], e[o]];
  }, a.unknown = function(i) {
    return arguments.length ? (r = i, a) : r;
  }, a.copy = function() {
    return w0().domain(e).range(t).unknown(r);
  }, tr.apply(a, arguments);
}
const Tc = /* @__PURE__ */ new Date(), Mc = /* @__PURE__ */ new Date();
function yt(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), a.round = (i) => {
    const o = a(i), l = a.ceil(i);
    return i - o < l - i ? o : l;
  }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, l) => {
    const u = [];
    if (i = a.ceil(i), l = l == null ? 1 : Math.floor(l), !(i < o) || !(l > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+i)), t(i, l), e(i);
    while (c < i && i < o);
    return u;
  }, a.filter = (i) => yt((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, l) => {
    if (o >= o)
      if (l < 0) for (; ++l <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --l >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (Tc.setTime(+i), Mc.setTime(+o), e(Tc), e(Mc), Math.floor(r(Tc, Mc))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const dl = yt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
dl.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? yt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : dl);
dl.range;
const Ar = 1e3, Qt = Ar * 60, Er = Qt * 60, Nr = Er * 24, $d = Nr * 7, Qv = Nr * 30, Ic = Nr * 365, gn = yt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ar);
}, (e, t) => (t - e) / Ar, (e) => e.getUTCSeconds());
gn.range;
const Pd = yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar);
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getMinutes());
Pd.range;
const Cd = yt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getUTCMinutes());
Cd.range;
const _d = yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar - e.getMinutes() * Qt);
}, (e, t) => {
  e.setTime(+e + t * Er);
}, (e, t) => (t - e) / Er, (e) => e.getHours());
_d.range;
const Ad = yt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Er);
}, (e, t) => (t - e) / Er, (e) => e.getUTCHours());
Ad.range;
const ao = yt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Qt) / Nr,
  (e) => e.getDate() - 1
);
ao.range;
const hu = yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nr, (e) => e.getUTCDate() - 1);
hu.range;
const S0 = yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nr, (e) => Math.floor(e / Nr));
S0.range;
function Tn(e) {
  return yt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Qt) / $d);
}
const mu = Tn(0), pl = Tn(1), RL = Tn(2), LL = Tn(3), ra = Tn(4), BL = Tn(5), FL = Tn(6);
mu.range;
pl.range;
RL.range;
LL.range;
ra.range;
BL.range;
FL.range;
function Mn(e) {
  return yt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / $d);
}
const gu = Mn(0), vl = Mn(1), HL = Mn(2), WL = Mn(3), na = Mn(4), VL = Mn(5), zL = Mn(6);
gu.range;
vl.range;
HL.range;
WL.range;
na.range;
VL.range;
zL.range;
const Ed = yt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Ed.range;
const Td = yt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Td.range;
const Rr = yt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Rr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : yt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Rr.range;
const Lr = yt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Lr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : yt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Lr.range;
function O0(e, t, r, n, a, i) {
  const o = [
    [gn, 1, Ar],
    [gn, 5, 5 * Ar],
    [gn, 15, 15 * Ar],
    [gn, 30, 30 * Ar],
    [i, 1, Qt],
    [i, 5, 5 * Qt],
    [i, 15, 15 * Qt],
    [i, 30, 30 * Qt],
    [a, 1, Er],
    [a, 3, 3 * Er],
    [a, 6, 6 * Er],
    [a, 12, 12 * Er],
    [n, 1, Nr],
    [n, 2, 2 * Nr],
    [r, 1, $d],
    [t, 1, Qv],
    [t, 3, 3 * Qv],
    [e, 1, Ic]
  ];
  function l(c, s, f) {
    const d = s < c;
    d && ([c, s] = [s, c]);
    const p = f && typeof f.range == "function" ? f : u(c, s, f), h = p ? p.range(c, +s + 1) : [];
    return d ? h.reverse() : h;
  }
  function u(c, s, f) {
    const d = Math.abs(s - c) / f, p = dd(([, , v]) => v).right(o, d);
    if (p === o.length) return e.every($s(c / Ic, s / Ic, f));
    if (p === 0) return dl.every(Math.max($s(c, s, f), 1));
    const [h, m] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return h.every(m);
  }
  return [l, u];
}
const [UL, YL] = O0(Lr, Td, gu, S0, Ad, Cd), [qL, KL] = O0(Rr, Ed, mu, ao, _d, Pd);
function jc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Dc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ga(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function GL(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, l = e.months, u = e.shortMonths, c = Xa(a), s = Za(a), f = Xa(i), d = Za(i), p = Xa(o), h = Za(o), m = Xa(l), v = Za(l), y = Xa(u), x = Za(u), w = {
    a: j,
    A: k,
    b: R,
    B,
    c: null,
    d: ah,
    e: ah,
    f: yB,
    g: AB,
    G: TB,
    H: hB,
    I: mB,
    j: gB,
    L: $0,
    m: bB,
    M: xB,
    p: H,
    q: L,
    Q: lh,
    s: uh,
    S: wB,
    u: SB,
    U: OB,
    V: $B,
    w: PB,
    W: CB,
    x: null,
    X: null,
    y: _B,
    Y: EB,
    Z: MB,
    "%": oh
  }, O = {
    a: V,
    A: z,
    b: K,
    B: J,
    c: null,
    d: ih,
    e: ih,
    f: kB,
    g: UB,
    G: qB,
    H: IB,
    I: jB,
    j: DB,
    L: C0,
    m: NB,
    M: RB,
    p: te,
    q: ie,
    Q: lh,
    s: uh,
    S: LB,
    u: BB,
    U: FB,
    V: HB,
    w: WB,
    W: VB,
    x: null,
    X: null,
    y: zB,
    Y: YB,
    Z: KB,
    "%": oh
  }, g = {
    a: T,
    A: C,
    b: M,
    B: D,
    c: I,
    d: rh,
    e: rh,
    f: fB,
    g: th,
    G: eh,
    H: nh,
    I: nh,
    j: lB,
    L: sB,
    m: oB,
    M: uB,
    p: A,
    q: iB,
    Q: pB,
    s: vB,
    S: cB,
    u: eB,
    U: tB,
    V: rB,
    w: JL,
    W: nB,
    x: _,
    X: E,
    y: th,
    Y: eh,
    Z: aB,
    "%": dB
  };
  w.x = b(r, w), w.X = b(n, w), w.c = b(t, w), O.x = b(r, O), O.X = b(n, O), O.c = b(t, O);
  function b(U, G) {
    return function(q) {
      var W = [], Z = -1, Q = 0, ue = U.length, re, ne, de;
      for (q instanceof Date || (q = /* @__PURE__ */ new Date(+q)); ++Z < ue; )
        U.charCodeAt(Z) === 37 && (W.push(U.slice(Q, Z)), (ne = Jv[re = U.charAt(++Z)]) != null ? re = U.charAt(++Z) : ne = re === "e" ? " " : "0", (de = G[re]) && (re = de(q, ne)), W.push(re), Q = Z + 1);
      return W.push(U.slice(Q, Z)), W.join("");
    };
  }
  function $(U, G) {
    return function(q) {
      var W = Ga(1900, void 0, 1), Z = P(W, U, q += "", 0), Q, ue;
      if (Z != q.length) return null;
      if ("Q" in W) return new Date(W.Q);
      if ("s" in W) return new Date(W.s * 1e3 + ("L" in W ? W.L : 0));
      if (G && !("Z" in W) && (W.Z = 0), "p" in W && (W.H = W.H % 12 + W.p * 12), W.m === void 0 && (W.m = "q" in W ? W.q : 0), "V" in W) {
        if (W.V < 1 || W.V > 53) return null;
        "w" in W || (W.w = 1), "Z" in W ? (Q = Dc(Ga(W.y, 0, 1)), ue = Q.getUTCDay(), Q = ue > 4 || ue === 0 ? vl.ceil(Q) : vl(Q), Q = hu.offset(Q, (W.V - 1) * 7), W.y = Q.getUTCFullYear(), W.m = Q.getUTCMonth(), W.d = Q.getUTCDate() + (W.w + 6) % 7) : (Q = jc(Ga(W.y, 0, 1)), ue = Q.getDay(), Q = ue > 4 || ue === 0 ? pl.ceil(Q) : pl(Q), Q = ao.offset(Q, (W.V - 1) * 7), W.y = Q.getFullYear(), W.m = Q.getMonth(), W.d = Q.getDate() + (W.w + 6) % 7);
      } else ("W" in W || "U" in W) && ("w" in W || (W.w = "u" in W ? W.u % 7 : "W" in W ? 1 : 0), ue = "Z" in W ? Dc(Ga(W.y, 0, 1)).getUTCDay() : jc(Ga(W.y, 0, 1)).getDay(), W.m = 0, W.d = "W" in W ? (W.w + 6) % 7 + W.W * 7 - (ue + 5) % 7 : W.w + W.U * 7 - (ue + 6) % 7);
      return "Z" in W ? (W.H += W.Z / 100 | 0, W.M += W.Z % 100, Dc(W)) : jc(W);
    };
  }
  function P(U, G, q, W) {
    for (var Z = 0, Q = G.length, ue = q.length, re, ne; Z < Q; ) {
      if (W >= ue) return -1;
      if (re = G.charCodeAt(Z++), re === 37) {
        if (re = G.charAt(Z++), ne = g[re in Jv ? G.charAt(Z++) : re], !ne || (W = ne(U, q, W)) < 0) return -1;
      } else if (re != q.charCodeAt(W++))
        return -1;
    }
    return W;
  }
  function A(U, G, q) {
    var W = c.exec(G.slice(q));
    return W ? (U.p = s.get(W[0].toLowerCase()), q + W[0].length) : -1;
  }
  function T(U, G, q) {
    var W = p.exec(G.slice(q));
    return W ? (U.w = h.get(W[0].toLowerCase()), q + W[0].length) : -1;
  }
  function C(U, G, q) {
    var W = f.exec(G.slice(q));
    return W ? (U.w = d.get(W[0].toLowerCase()), q + W[0].length) : -1;
  }
  function M(U, G, q) {
    var W = y.exec(G.slice(q));
    return W ? (U.m = x.get(W[0].toLowerCase()), q + W[0].length) : -1;
  }
  function D(U, G, q) {
    var W = m.exec(G.slice(q));
    return W ? (U.m = v.get(W[0].toLowerCase()), q + W[0].length) : -1;
  }
  function I(U, G, q) {
    return P(U, t, G, q);
  }
  function _(U, G, q) {
    return P(U, r, G, q);
  }
  function E(U, G, q) {
    return P(U, n, G, q);
  }
  function j(U) {
    return o[U.getDay()];
  }
  function k(U) {
    return i[U.getDay()];
  }
  function R(U) {
    return u[U.getMonth()];
  }
  function B(U) {
    return l[U.getMonth()];
  }
  function H(U) {
    return a[+(U.getHours() >= 12)];
  }
  function L(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function V(U) {
    return o[U.getUTCDay()];
  }
  function z(U) {
    return i[U.getUTCDay()];
  }
  function K(U) {
    return u[U.getUTCMonth()];
  }
  function J(U) {
    return l[U.getUTCMonth()];
  }
  function te(U) {
    return a[+(U.getUTCHours() >= 12)];
  }
  function ie(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var G = b(U += "", w);
      return G.toString = function() {
        return U;
      }, G;
    },
    parse: function(U) {
      var G = $(U += "", !1);
      return G.toString = function() {
        return U;
      }, G;
    },
    utcFormat: function(U) {
      var G = b(U += "", O);
      return G.toString = function() {
        return U;
      }, G;
    },
    utcParse: function(U) {
      var G = $(U += "", !0);
      return G.toString = function() {
        return U;
      }, G;
    }
  };
}
var Jv = { "-": "", _: " ", 0: "0" }, Ot = /^\s*\d+/, XL = /^%/, ZL = /[\\^$*+?|[\]().{}]/g;
function Be(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function QL(e) {
  return e.replace(ZL, "\\$&");
}
function Xa(e) {
  return new RegExp("^(?:" + e.map(QL).join("|") + ")", "i");
}
function Za(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function JL(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function eB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function tB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function rB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function nB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function eh(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function th(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function aB(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function iB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function oB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function rh(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function lB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function nh(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function uB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function cB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function sB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function fB(e, t, r) {
  var n = Ot.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function dB(e, t, r) {
  var n = XL.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function pB(e, t, r) {
  var n = Ot.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function vB(e, t, r) {
  var n = Ot.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function ah(e, t) {
  return Be(e.getDate(), t, 2);
}
function hB(e, t) {
  return Be(e.getHours(), t, 2);
}
function mB(e, t) {
  return Be(e.getHours() % 12 || 12, t, 2);
}
function gB(e, t) {
  return Be(1 + ao.count(Rr(e), e), t, 3);
}
function $0(e, t) {
  return Be(e.getMilliseconds(), t, 3);
}
function yB(e, t) {
  return $0(e, t) + "000";
}
function bB(e, t) {
  return Be(e.getMonth() + 1, t, 2);
}
function xB(e, t) {
  return Be(e.getMinutes(), t, 2);
}
function wB(e, t) {
  return Be(e.getSeconds(), t, 2);
}
function SB(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function OB(e, t) {
  return Be(mu.count(Rr(e) - 1, e), t, 2);
}
function P0(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ra(e) : ra.ceil(e);
}
function $B(e, t) {
  return e = P0(e), Be(ra.count(Rr(e), e) + (Rr(e).getDay() === 4), t, 2);
}
function PB(e) {
  return e.getDay();
}
function CB(e, t) {
  return Be(pl.count(Rr(e) - 1, e), t, 2);
}
function _B(e, t) {
  return Be(e.getFullYear() % 100, t, 2);
}
function AB(e, t) {
  return e = P0(e), Be(e.getFullYear() % 100, t, 2);
}
function EB(e, t) {
  return Be(e.getFullYear() % 1e4, t, 4);
}
function TB(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? ra(e) : ra.ceil(e), Be(e.getFullYear() % 1e4, t, 4);
}
function MB(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Be(t / 60 | 0, "0", 2) + Be(t % 60, "0", 2);
}
function ih(e, t) {
  return Be(e.getUTCDate(), t, 2);
}
function IB(e, t) {
  return Be(e.getUTCHours(), t, 2);
}
function jB(e, t) {
  return Be(e.getUTCHours() % 12 || 12, t, 2);
}
function DB(e, t) {
  return Be(1 + hu.count(Lr(e), e), t, 3);
}
function C0(e, t) {
  return Be(e.getUTCMilliseconds(), t, 3);
}
function kB(e, t) {
  return C0(e, t) + "000";
}
function NB(e, t) {
  return Be(e.getUTCMonth() + 1, t, 2);
}
function RB(e, t) {
  return Be(e.getUTCMinutes(), t, 2);
}
function LB(e, t) {
  return Be(e.getUTCSeconds(), t, 2);
}
function BB(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function FB(e, t) {
  return Be(gu.count(Lr(e) - 1, e), t, 2);
}
function _0(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? na(e) : na.ceil(e);
}
function HB(e, t) {
  return e = _0(e), Be(na.count(Lr(e), e) + (Lr(e).getUTCDay() === 4), t, 2);
}
function WB(e) {
  return e.getUTCDay();
}
function VB(e, t) {
  return Be(vl.count(Lr(e) - 1, e), t, 2);
}
function zB(e, t) {
  return Be(e.getUTCFullYear() % 100, t, 2);
}
function UB(e, t) {
  return e = _0(e), Be(e.getUTCFullYear() % 100, t, 2);
}
function YB(e, t) {
  return Be(e.getUTCFullYear() % 1e4, t, 4);
}
function qB(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? na(e) : na.ceil(e), Be(e.getUTCFullYear() % 1e4, t, 4);
}
function KB() {
  return "+0000";
}
function oh() {
  return "%";
}
function lh(e) {
  return +e;
}
function uh(e) {
  return Math.floor(+e / 1e3);
}
var Rn, A0, E0;
GB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function GB(e) {
  return Rn = GL(e), A0 = Rn.format, Rn.parse, E0 = Rn.utcFormat, Rn.utcParse, Rn;
}
function XB(e) {
  return new Date(e);
}
function ZB(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Md(e, t, r, n, a, i, o, l, u, c) {
  var s = gd(), f = s.invert, d = s.domain, p = c(".%L"), h = c(":%S"), m = c("%I:%M"), v = c("%I %p"), y = c("%a %d"), x = c("%b %d"), w = c("%B"), O = c("%Y");
  function g(b) {
    return (u(b) < b ? p : l(b) < b ? h : o(b) < b ? m : i(b) < b ? v : n(b) < b ? a(b) < b ? y : x : r(b) < b ? w : O)(b);
  }
  return s.invert = function(b) {
    return new Date(f(b));
  }, s.domain = function(b) {
    return arguments.length ? d(Array.from(b, ZB)) : d().map(XB);
  }, s.ticks = function(b) {
    var $ = d();
    return e($[0], $[$.length - 1], b ?? 10);
  }, s.tickFormat = function(b, $) {
    return $ == null ? g : c($);
  }, s.nice = function(b) {
    var $ = d();
    return (!b || typeof b.range != "function") && (b = t($[0], $[$.length - 1], b ?? 10)), b ? d(h0($, b)) : s;
  }, s.copy = function() {
    return no(s, Md(e, t, r, n, a, i, o, l, u, c));
  }, s;
}
function QB() {
  return tr.apply(Md(qL, KL, Rr, Ed, mu, ao, _d, Pd, gn, A0).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function JB() {
  return tr.apply(Md(UL, YL, Lr, Td, gu, hu, Ad, Cd, gn, E0).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function yu() {
  var e = 0, t = 1, r, n, a, i, o = kt, l = !1, u;
  function c(f) {
    return f == null || isNaN(f = +f) ? u : o(a === 0 ? 0.5 : (f = (i(f) - r) * a, l ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (l = !!f, c) : l;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function s(f) {
    return function(d) {
      var p, h;
      return arguments.length ? ([p, h] = d, o = f(p, h), c) : [o(0), o(1)];
    };
  }
  return c.range = s(Na), c.rangeRound = s(md), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function tn(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function T0() {
  var e = en(yu()(kt));
  return e.copy = function() {
    return tn(e, T0());
  }, Hr.apply(e, arguments);
}
function M0() {
  var e = xd(yu()).domain([1, 10]);
  return e.copy = function() {
    return tn(e, M0()).base(e.base());
  }, Hr.apply(e, arguments);
}
function I0() {
  var e = wd(yu());
  return e.copy = function() {
    return tn(e, I0()).constant(e.constant());
  }, Hr.apply(e, arguments);
}
function Id() {
  var e = Sd(yu());
  return e.copy = function() {
    return tn(e, Id()).exponent(e.exponent());
  }, Hr.apply(e, arguments);
}
function eF() {
  return Id.apply(null, arguments).exponent(0.5);
}
function j0() {
  var e = [], t = kt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((to(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(Xr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => FR(e, i / n));
  }, r.copy = function() {
    return j0(t).domain(e);
  }, Hr.apply(r, arguments);
}
function bu() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, l, u, c = kt, s, f = !1, d;
  function p(m) {
    return isNaN(m = +m) ? d : (m = 0.5 + ((m = +s(m)) - i) * (n * m < n * i ? l : u), c(f ? Math.max(0, Math.min(1, m)) : m));
  }
  p.domain = function(m) {
    return arguments.length ? ([e, t, r] = m, a = s(e = +e), i = s(t = +t), o = s(r = +r), l = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(m) {
    return arguments.length ? (f = !!m, p) : f;
  }, p.interpolator = function(m) {
    return arguments.length ? (c = m, p) : c;
  };
  function h(m) {
    return function(v) {
      var y, x, w;
      return arguments.length ? ([y, x, w] = v, c = dL(m, [y, x, w]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = h(Na), p.rangeRound = h(md), p.unknown = function(m) {
    return arguments.length ? (d = m, p) : d;
  }, function(m) {
    return s = m, a = m(e), i = m(t), o = m(r), l = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function D0() {
  var e = en(bu()(kt));
  return e.copy = function() {
    return tn(e, D0());
  }, Hr.apply(e, arguments);
}
function k0() {
  var e = xd(bu()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return tn(e, k0()).base(e.base());
  }, Hr.apply(e, arguments);
}
function N0() {
  var e = wd(bu());
  return e.copy = function() {
    return tn(e, N0()).constant(e.constant());
  }, Hr.apply(e, arguments);
}
function jd() {
  var e = Sd(bu());
  return e.copy = function() {
    return tn(e, jd()).exponent(e.exponent());
  }, Hr.apply(e, arguments);
}
function tF() {
  return jd.apply(null, arguments).exponent(0.5);
}
const ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: xi,
  scaleDiverging: D0,
  scaleDivergingLog: k0,
  scaleDivergingPow: jd,
  scaleDivergingSqrt: tF,
  scaleDivergingSymlog: N0,
  scaleIdentity: v0,
  scaleImplicit: Ps,
  scaleLinear: fl,
  scaleLog: m0,
  scaleOrdinal: pd,
  scalePoint: ui,
  scalePow: Od,
  scaleQuantile: b0,
  scaleQuantize: x0,
  scaleRadial: y0,
  scaleSequential: T0,
  scaleSequentialLog: M0,
  scaleSequentialPow: Id,
  scaleSequentialQuantile: j0,
  scaleSequentialSqrt: eF,
  scaleSequentialSymlog: I0,
  scaleSqrt: kL,
  scaleSymlog: g0,
  scaleThreshold: w0,
  scaleTime: QB,
  scaleUtc: JB,
  tickFormat: p0
}, Symbol.toStringTag, { value: "Module" }));
var rF = Ca;
function nF(e, t, r) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var i = e[n], o = t(i);
    if (o != null && (l === void 0 ? o === o && !rF(o) : r(o, l)))
      var l = o, u = i;
  }
  return u;
}
var xu = nF;
function aF(e, t) {
  return e > t;
}
var R0 = aF, iF = xu, oF = R0, lF = ka;
function uF(e) {
  return e && e.length ? iF(e, lF, oF) : void 0;
}
var cF = uF;
const Kr = /* @__PURE__ */ Le(cF);
function sF(e, t) {
  return e < t;
}
var L0 = sF, fF = xu, dF = L0, pF = ka;
function vF(e) {
  return e && e.length ? fF(e, pF, dF) : void 0;
}
var hF = vF;
const wu = /* @__PURE__ */ Le(hF);
var mF = Kf, gF = Jr, yF = Ub, bF = Ht;
function xF(e, t) {
  var r = bF(e) ? mF : yF;
  return r(e, gF(t));
}
var wF = xF, SF = Vb, OF = wF;
function $F(e, t) {
  return SF(OF(e, t), 1);
}
var PF = $F;
const CF = /* @__PURE__ */ Le(PF);
var _F = ud;
function AF(e, t) {
  return _F(e, t);
}
var EF = AF;
const aa = /* @__PURE__ */ Le(EF);
var Ra = 1e9, TF = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, kd, at = !0, er = "[DecimalError] ", wn = er + "Invalid argument: ", Dd = er + "Exponent out of range: ", La = Math.floor, pn = Math.pow, MF = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Yt, xt = 1e7, rt = 7, B0 = 9007199254740991, hl = La(B0 / rt), le = {};
le.absoluteValue = le.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
le.comparedTo = le.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
le.decimalPlaces = le.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * rt;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
le.dividedBy = le.div = function(e) {
  return jr(this, new this.constructor(e));
};
le.dividedToIntegerBy = le.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ke(jr(t, new r(e), 0, 1), r.precision);
};
le.equals = le.eq = function(e) {
  return !this.cmp(e);
};
le.exponent = function() {
  return dt(this);
};
le.greaterThan = le.gt = function(e) {
  return this.cmp(e) > 0;
};
le.greaterThanOrEqualTo = le.gte = function(e) {
  return this.cmp(e) >= 0;
};
le.isInteger = le.isint = function() {
  return this.e > this.d.length - 2;
};
le.isNegative = le.isneg = function() {
  return this.s < 0;
};
le.isPositive = le.ispos = function() {
  return this.s > 0;
};
le.isZero = function() {
  return this.s === 0;
};
le.lessThan = le.lt = function(e) {
  return this.cmp(e) < 0;
};
le.lessThanOrEqualTo = le.lte = function(e) {
  return this.cmp(e) < 1;
};
le.logarithm = le.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Yt)) throw Error(er + "NaN");
  if (r.s < 1) throw Error(er + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Yt) ? new n(0) : (at = !1, t = jr(Pi(r, i), Pi(e, i), i), at = !0, Ke(t, a));
};
le.minus = le.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? W0(t, e) : F0(t, (e.s = -e.s, e));
};
le.modulo = le.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(er + "NaN");
  return r.s ? (at = !1, t = jr(r, e, 0, 1).times(e), at = !0, r.minus(t)) : Ke(new n(r), a);
};
le.naturalExponential = le.exp = function() {
  return H0(this);
};
le.naturalLogarithm = le.ln = function() {
  return Pi(this);
};
le.negated = le.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
le.plus = le.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? F0(t, e) : W0(t, (e.s = -e.s, e));
};
le.precision = le.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(wn + e);
  if (t = dt(a) + 1, n = a.d.length - 1, r = n * rt + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
le.squareRoot = le.sqrt = function() {
  var e, t, r, n, a, i, o, l = this, u = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new u(0);
    throw Error(er + "NaN");
  }
  for (e = dt(l), at = !1, a = Math.sqrt(+l), a == 0 || a == 1 / 0 ? (t = mr(l.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = La((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(a.toString()), r = u.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(jr(l, i, o + 2)).times(0.5), mr(i.d).slice(0, o) === (t = mr(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), a == o && t == "4999") {
        if (Ke(i, r + 1, 0), i.times(i).eq(l)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return at = !0, Ke(n, r);
};
le.times = le.mul = function(e) {
  var t, r, n, a, i, o, l, u, c, s = this, f = s.constructor, d = s.d, p = (e = new f(e)).d;
  if (!s.s || !e.s) return new f(0);
  for (e.s *= s.s, r = s.e + e.e, u = d.length, c = p.length, u < c && (i = d, d = p, p = i, o = u, u = c, c = o), i = [], o = u + c, n = o; n--; ) i.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, a = u + n; a > n; )
      l = i[a] + p[n] * d[a - n - 1] + t, i[a--] = l % xt | 0, t = l / xt | 0;
    i[a] = (i[a] + t) % xt | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, at ? Ke(e, f.precision) : e;
};
le.toDecimalPlaces = le.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Or(e, 0, Ra), t === void 0 ? t = n.rounding : Or(t, 0, 8), Ke(r, e + dt(r) + 1, t));
};
le.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = Cn(n, !0) : (Or(e, 0, Ra), t === void 0 ? t = a.rounding : Or(t, 0, 8), n = Ke(new a(n), e + 1, t), r = Cn(n, !0, e + 1)), r;
};
le.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? Cn(a) : (Or(e, 0, Ra), t === void 0 ? t = i.rounding : Or(t, 0, 8), n = Ke(new i(a), e + dt(a) + 1, t), r = Cn(n.abs(), !1, e + dt(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
le.toInteger = le.toint = function() {
  var e = this, t = e.constructor;
  return Ke(new t(e), dt(e) + 1, t.rounding);
};
le.toNumber = function() {
  return +this;
};
le.toPower = le.pow = function(e) {
  var t, r, n, a, i, o, l = this, u = l.constructor, c = 12, s = +(e = new u(e));
  if (!e.s) return new u(Yt);
  if (l = new u(l), !l.s) {
    if (e.s < 1) throw Error(er + "Infinity");
    return l;
  }
  if (l.eq(Yt)) return l;
  if (n = u.precision, e.eq(Yt)) return Ke(l, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = l.s, o) {
    if ((r = s < 0 ? -s : s) <= B0) {
      for (a = new u(Yt), t = Math.ceil(n / rt + 4), at = !1; r % 2 && (a = a.times(l), fh(a.d, t)), r = La(r / 2), r !== 0; )
        l = l.times(l), fh(l.d, t);
      return at = !0, e.s < 0 ? new u(Yt).div(a) : Ke(a, n);
    }
  } else if (i < 0) throw Error(er + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, at = !1, a = e.times(Pi(l, n + c)), at = !0, a = H0(a), a.s = i, a;
};
le.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = dt(a), n = Cn(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Or(e, 1, Ra), t === void 0 ? t = i.rounding : Or(t, 0, 8), a = Ke(new i(a), e, t), r = dt(a), n = Cn(a, e <= r || r <= i.toExpNeg, e)), n;
};
le.toSignificantDigits = le.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Or(e, 1, Ra), t === void 0 ? t = n.rounding : Or(t, 0, 8)), Ke(new n(r), e, t);
};
le.toString = le.valueOf = le.val = le.toJSON = le[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = dt(e), r = e.constructor;
  return Cn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function F0(e, t) {
  var r, n, a, i, o, l, u, c, s = e.constructor, f = s.precision;
  if (!e.s || !t.s)
    return t.s || (t = new s(e)), at ? Ke(t, f) : t;
  if (u = e.d, c = t.d, o = e.e, a = t.e, u = u.slice(), i = o - a, i) {
    for (i < 0 ? (n = u, i = -i, l = c.length) : (n = c, a = o, l = u.length), o = Math.ceil(f / rt), l = o > l ? o + 1 : l + 1, i > l && (i = l, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (l = u.length, i = c.length, l - i < 0 && (i = l, n = c, c = u, u = n), r = 0; i; )
    r = (u[--i] = u[i] + c[i] + r) / xt | 0, u[i] %= xt;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; ) u.pop();
  return t.d = u, t.e = a, at ? Ke(t, f) : t;
}
function Or(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(wn + e);
}
function mr(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = rt - n.length, r && (i += qr(r)), i += n;
    o = e[t], n = o + "", r = rt - n.length, r && (i += qr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var jr = /* @__PURE__ */ function() {
  function e(n, a) {
    var i, o = 0, l = n.length;
    for (n = n.slice(); l--; )
      i = n[l] * a + o, n[l] = i % xt | 0, o = i / xt | 0;
    return o && n.unshift(o), n;
  }
  function t(n, a, i, o) {
    var l, u;
    if (i != o)
      u = i > o ? 1 : -1;
    else
      for (l = u = 0; l < i; l++)
        if (n[l] != a[l]) {
          u = n[l] > a[l] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * xt + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var l, u, c, s, f, d, p, h, m, v, y, x, w, O, g, b, $, P, A = n.constructor, T = n.s == a.s ? 1 : -1, C = n.d, M = a.d;
    if (!n.s) return new A(n);
    if (!a.s) throw Error(er + "Division by zero");
    for (u = n.e - a.e, $ = M.length, g = C.length, p = new A(T), h = p.d = [], c = 0; M[c] == (C[c] || 0); ) ++c;
    if (M[c] > (C[c] || 0) && --u, i == null ? x = i = A.precision : o ? x = i + (dt(n) - dt(a)) + 1 : x = i, x < 0) return new A(0);
    if (x = x / rt + 2 | 0, c = 0, $ == 1)
      for (s = 0, M = M[0], x++; (c < g || s) && x--; c++)
        w = s * xt + (C[c] || 0), h[c] = w / M | 0, s = w % M | 0;
    else {
      for (s = xt / (M[0] + 1) | 0, s > 1 && (M = e(M, s), C = e(C, s), $ = M.length, g = C.length), O = $, m = C.slice(0, $), v = m.length; v < $; ) m[v++] = 0;
      P = M.slice(), P.unshift(0), b = M[0], M[1] >= xt / 2 && ++b;
      do
        s = 0, l = t(M, m, $, v), l < 0 ? (y = m[0], $ != v && (y = y * xt + (m[1] || 0)), s = y / b | 0, s > 1 ? (s >= xt && (s = xt - 1), f = e(M, s), d = f.length, v = m.length, l = t(f, m, d, v), l == 1 && (s--, r(f, $ < d ? P : M, d))) : (s == 0 && (l = s = 1), f = M.slice()), d = f.length, d < v && f.unshift(0), r(m, f, v), l == -1 && (v = m.length, l = t(M, m, $, v), l < 1 && (s++, r(m, $ < v ? P : M, v))), v = m.length) : l === 0 && (s++, m = [0]), h[c++] = s, l && m[0] ? m[v++] = C[O] || 0 : (m = [C[O]], v = 1);
      while ((O++ < g || m[0] !== void 0) && x--);
    }
    return h[0] || h.shift(), p.e = u, Ke(p, o ? i + dt(p) + 1 : i);
  };
}();
function H0(e, t) {
  var r, n, a, i, o, l, u = 0, c = 0, s = e.constructor, f = s.precision;
  if (dt(e) > 16) throw Error(Dd + dt(e));
  if (!e.s) return new s(Yt);
  for (t == null ? (at = !1, l = f) : l = t, o = new s(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(pn(2, c)) / Math.LN10 * 2 + 5 | 0, l += n, r = a = i = new s(Yt), s.precision = l; ; ) {
    if (a = Ke(a.times(e), l), r = r.times(++u), o = i.plus(jr(a, r, l)), mr(o.d).slice(0, l) === mr(i.d).slice(0, l)) {
      for (; c--; ) i = Ke(i.times(i), l);
      return s.precision = f, t == null ? (at = !0, Ke(i, f)) : i;
    }
    i = o;
  }
}
function dt(e) {
  for (var t = e.e * rt, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function kc(e, t, r) {
  if (t > e.LN10.sd())
    throw at = !0, r && (e.precision = r), Error(er + "LN10 precision limit exceeded");
  return Ke(new e(e.LN10), t);
}
function qr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Pi(e, t) {
  var r, n, a, i, o, l, u, c, s, f = 1, d = 10, p = e, h = p.d, m = p.constructor, v = m.precision;
  if (p.s < 1) throw Error(er + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Yt)) return new m(0);
  if (t == null ? (at = !1, c = v) : c = t, p.eq(10))
    return t == null && (at = !0), kc(m, c);
  if (c += d, m.precision = c, r = mr(h), n = r.charAt(0), i = dt(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = mr(p.d), n = r.charAt(0), f++;
    i = dt(p), n > 1 ? (p = new m("0." + r), i++) : p = new m(n + "." + r.slice(1));
  } else
    return u = kc(m, c + 2, v).times(i + ""), p = Pi(new m(n + "." + r.slice(1)), c - d).plus(u), m.precision = v, t == null ? (at = !0, Ke(p, v)) : p;
  for (l = o = p = jr(p.minus(Yt), p.plus(Yt), c), s = Ke(p.times(p), c), a = 3; ; ) {
    if (o = Ke(o.times(s), c), u = l.plus(jr(o, new m(a), c)), mr(u.d).slice(0, c) === mr(l.d).slice(0, c))
      return l = l.times(2), i !== 0 && (l = l.plus(kc(m, c + 2, v).times(i + ""))), l = jr(l, new m(f), c), m.precision = v, t == null ? (at = !0, Ke(l, v)) : l;
    l = u, a += 2;
  }
}
function sh(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = La(r / rt), e.d = [], n = (r + 1) % rt, r < 0 && (n += rt), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= rt; n < a; ) e.d.push(+t.slice(n, n += rt));
      t = t.slice(n), n = rt - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), at && (e.e > hl || e.e < -hl)) throw Error(Dd + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ke(e, t, r) {
  var n, a, i, o, l, u, c, s, f = e.d;
  for (o = 1, i = f[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += rt, a = t, c = f[s = 0];
  else {
    if (s = Math.ceil((n + 1) / rt), i = f.length, s >= i) return e;
    for (c = i = f[s], o = 1; i >= 10; i /= 10) o++;
    n %= rt, a = n - rt + o;
  }
  if (r !== void 0 && (i = pn(10, o - a - 1), l = c / i % 10 | 0, u = t < 0 || f[s + 1] !== void 0 || c % i, u = r < 4 ? (l || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || u || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / pn(10, o - a) : 0 : f[s - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return u ? (i = dt(e), f.length = 1, t = t - i - 1, f[0] = pn(10, (rt - t % rt) % rt), e.e = La(-t / rt) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = s, i = 1, s--) : (f.length = s + 1, i = pn(10, rt - n), f[s] = a > 0 ? (c / pn(10, o - a) % pn(10, a) | 0) * i : 0), u)
    for (; ; )
      if (s == 0) {
        (f[0] += i) == xt && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[s] += i, f[s] != xt) break;
        f[s--] = 0, i = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (at && (e.e > hl || e.e < -hl))
    throw Error(Dd + dt(e));
  return e;
}
function W0(e, t) {
  var r, n, a, i, o, l, u, c, s, f, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), at ? Ke(t, p) : t;
  if (u = e.d, f = t.d, n = t.e, c = e.e, u = u.slice(), o = c - n, o) {
    for (s = o < 0, s ? (r = u, o = -o, l = f.length) : (r = f, n = c, l = u.length), a = Math.max(Math.ceil(p / rt), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = u.length, l = f.length, s = a < l, s && (l = a), a = 0; a < l; a++)
      if (u[a] != f[a]) {
        s = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (s && (r = u, u = f, f = r, t.s = -t.s), l = u.length, a = f.length - l; a > 0; --a) u[l++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (i = a; i && u[--i] === 0; ) u[i] = xt - 1;
      --u[i], u[a] += xt;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (t.d = u, t.e = n, at ? Ke(t, p) : t) : new d(0);
}
function Cn(e, t, r) {
  var n, a = dt(e), i = mr(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + qr(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + qr(-a - 1) + i, r && (n = r - o) > 0 && (i += qr(n))) : a >= o ? (i += qr(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + qr(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += qr(n))), e.s < 0 ? "-" + i : i;
}
function fh(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function V0(e) {
  var t, r, n;
  function a(i) {
    var o = this;
    if (!(o instanceof a)) return new a(i);
    if (o.constructor = a, i instanceof a) {
      o.s = i.s, o.e = i.e, o.d = (i = i.d) ? i.slice() : i;
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0)
        throw Error(wn + i);
      if (i > 0)
        o.s = 1;
      else if (i < 0)
        i = -i, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (i === ~~i && i < 1e7) {
        o.e = 0, o.d = [i];
        return;
      }
      return sh(o, i.toString());
    } else if (typeof i != "string")
      throw Error(wn + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, MF.test(i)) sh(o, i);
    else throw Error(wn + i);
  }
  if (a.prototype = le, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = V0, a.config = a.set = IF, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function IF(e) {
  if (!e || typeof e != "object")
    throw Error(er + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    Ra,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < a.length; t += 3)
    if ((n = e[r = a[t]]) !== void 0)
      if (La(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(wn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(wn + r + ": " + n);
  return this;
}
var kd = V0(TF);
Yt = new kd(1);
const Ue = kd;
function jF(e) {
  return RF(e) || NF(e) || kF(e) || DF();
}
function DF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kF(e, t) {
  if (e) {
    if (typeof e == "string") return Es(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Es(e, t);
  }
}
function NF(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function RF(e) {
  if (Array.isArray(e)) return Es(e);
}
function Es(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var LF = function(t) {
  return t;
}, z0 = {
  "@@functional/placeholder": !0
}, U0 = function(t) {
  return t === z0;
}, dh = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && U0(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, BF = function e(t, r) {
  return t === 1 ? r : dh(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(l) {
      return l !== z0;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, dh(function() {
      for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
        u[c] = arguments[c];
      var s = a.map(function(f) {
        return U0(f) ? u.shift() : f;
      });
      return r.apply(void 0, jF(s).concat(u));
    }));
  });
}, Su = function(t) {
  return BF(t.length, t);
}, Ts = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, FF = Su(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), HF = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return LF;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(l, u) {
      return u(l);
    }, i.apply(void 0, arguments));
  };
}, Ms = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, Y0 = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(l, u) {
      return l === r[u];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function WF(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ue(e).abs().log(10).toNumber()) + 1, t;
}
function VF(e, t, r) {
  for (var n = new Ue(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var zF = Su(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), UF = Su(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), YF = Su(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Ou = {
  rangeStep: VF,
  getDigitCount: WF,
  interpolateNumber: zF,
  uninterpolateNumber: UF,
  uninterpolateTruncation: YF
};
function Is(e) {
  return GF(e) || KF(e) || q0(e) || qF();
}
function qF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KF(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function GF(e) {
  if (Array.isArray(e)) return js(e);
}
function Ci(e, t) {
  return QF(e) || ZF(e, t) || q0(e, t) || XF();
}
function XF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q0(e, t) {
  if (e) {
    if (typeof e == "string") return js(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return js(e, t);
  }
}
function js(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ZF(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
      for (var o = e[Symbol.iterator](), l; !(n = (l = o.next()).done) && (r.push(l.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      a = !0, i = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function QF(e) {
  if (Array.isArray(e)) return e;
}
function K0(e) {
  var t = Ci(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function G0(e, t, r) {
  if (e.lte(0))
    return new Ue(0);
  var n = Ou.getDigitCount(e.toNumber()), a = new Ue(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, l = new Ue(Math.ceil(i.div(o).toNumber())).add(r).mul(o), u = l.mul(a);
  return t ? u : new Ue(Math.ceil(u));
}
function JF(e, t, r) {
  var n = 1, a = new Ue(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new Ue(10).pow(Ou.getDigitCount(e) - 1), a = new Ue(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new Ue(Math.floor(e)));
  } else e === 0 ? a = new Ue(Math.floor((t - 1) / 2)) : r || (a = new Ue(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), l = HF(FF(function(u) {
    return a.add(new Ue(u - o).mul(n)).toNumber();
  }), Ts);
  return l(0, t);
}
function X0(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ue(0),
      tickMin: new Ue(0),
      tickMax: new Ue(0)
    };
  var i = G0(new Ue(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new Ue(0) : (o = new Ue(e).add(t).div(2), o = o.sub(new Ue(o).mod(i)));
  var l = Math.ceil(o.sub(e).div(i).toNumber()), u = Math.ceil(new Ue(t).sub(o).div(i).toNumber()), c = l + u + 1;
  return c > r ? X0(e, t, r, n, a + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, l = t > 0 ? l : l + (r - c)), {
    step: i,
    tickMin: o.sub(new Ue(l).mul(i)),
    tickMax: o.add(new Ue(u).mul(i))
  });
}
function e3(e) {
  var t = Ci(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), l = K0([r, n]), u = Ci(l, 2), c = u[0], s = u[1];
  if (c === -1 / 0 || s === 1 / 0) {
    var f = s === 1 / 0 ? [c].concat(Is(Ts(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Is(Ts(0, a - 1).map(function() {
      return -1 / 0;
    })), [s]);
    return r > n ? Ms(f) : f;
  }
  if (c === s)
    return JF(c, a, i);
  var d = X0(c, s, o, i), p = d.step, h = d.tickMin, m = d.tickMax, v = Ou.rangeStep(h, m.add(new Ue(0.1).mul(p)), p);
  return r > n ? Ms(v) : v;
}
function t3(e, t) {
  var r = Ci(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = K0([n, a]), l = Ci(o, 2), u = l[0], c = l[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (u === c)
    return [u];
  var s = Math.max(t, 2), f = G0(new Ue(c).sub(u).div(s - 1), i, 0), d = [].concat(Is(Ou.rangeStep(new Ue(u), new Ue(c).sub(new Ue(0.99).mul(f)), f)), [c]);
  return n > a ? Ms(d) : d;
}
var r3 = Y0(e3), n3 = Y0(t3), a3 = je.env.NODE_ENV === "production", Nc = "Invariant failed";
function Bt(e, t) {
  if (a3)
    throw new Error(Nc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Nc, ": ").concat(r) : Nc;
  throw new Error(n);
}
var i3 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function ia(e) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e);
}
function ml() {
  return ml = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ml.apply(this, arguments);
}
function o3(e, t) {
  return s3(e) || c3(e, t) || u3(e, t) || l3();
}
function l3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u3(e, t) {
  if (e) {
    if (typeof e == "string") return ph(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ph(e, t);
  }
}
function ph(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function c3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function s3(e) {
  if (Array.isArray(e)) return e;
}
function f3(e, t) {
  if (e == null) return {};
  var r = d3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function d3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function p3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, J0(n.key), n);
  }
}
function h3(e, t, r) {
  return t && v3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function m3(e, t, r) {
  return t = gl(t), g3(e, Z0() ? Reflect.construct(t, r || [], gl(e).constructor) : t.apply(e, r));
}
function g3(e, t) {
  if (t && (ia(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return y3(e);
}
function y3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Z0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Z0 = function() {
    return !!e;
  })();
}
function gl(e) {
  return gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gl(e);
}
function b3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ds(e, t);
}
function Ds(e, t) {
  return Ds = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ds(e, t);
}
function Q0(e, t, r) {
  return t = J0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J0(e) {
  var t = x3(e, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function x3(e, t) {
  if (ia(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $u = /* @__PURE__ */ function(e) {
  function t() {
    return p3(this, t), m3(this, t, arguments);
  }
  return b3(t, e), h3(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, l = n.dataKey, u = n.data, c = n.dataPointFormatter, s = n.xAxis, f = n.yAxis, d = f3(n, i3), p = ve(d, !1);
      this.props.direction === "x" && s.type !== "number" && (je.env.NODE_ENV !== "production" ? Bt(!1, 'ErrorBar requires Axis type property to be "number".') : Bt());
      var h = u.map(function(m) {
        var v = c(m, l), y = v.x, x = v.y, w = v.value, O = v.errorVal;
        if (!O)
          return null;
        var g = [], b, $;
        if (Array.isArray(O)) {
          var P = o3(O, 2);
          b = P[0], $ = P[1];
        } else
          b = $ = O;
        if (i === "vertical") {
          var A = s.scale, T = x + a, C = T + o, M = T - o, D = A(w - b), I = A(w + $);
          g.push({
            x1: I,
            y1: C,
            x2: I,
            y2: M
          }), g.push({
            x1: D,
            y1: T,
            x2: I,
            y2: T
          }), g.push({
            x1: D,
            y1: C,
            x2: D,
            y2: M
          });
        } else if (i === "horizontal") {
          var _ = f.scale, E = y + a, j = E - o, k = E + o, R = _(w - b), B = _(w + $);
          g.push({
            x1: j,
            y1: B,
            x2: k,
            y2: B
          }), g.push({
            x1: E,
            y1: R,
            x2: E,
            y2: B
          }), g.push({
            x1: j,
            y1: R,
            x2: k,
            y2: R
          });
        }
        return /* @__PURE__ */ N.createElement(Ne, ml({
          className: "recharts-errorBar",
          key: "bar-".concat(g.map(function(H) {
            return "".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2);
          }))
        }, p), g.map(function(H) {
          return /* @__PURE__ */ N.createElement("line", ml({}, H, {
            key: "line-".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2)
          }));
        }));
      });
      return /* @__PURE__ */ N.createElement(Ne, {
        className: "recharts-errorBars"
      }, h);
    }
  }]);
}(N.Component);
Q0($u, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
Q0($u, "displayName", "ErrorBar");
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
function vh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vh(Object(r), !0).forEach(function(n) {
      w3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function w3(e, t, r) {
  return t = S3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S3(e) {
  var t = O3(e, "string");
  return _i(t) == "symbol" ? t : t + "";
}
function O3(e, t) {
  if (_i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ex = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = Ut(r, Un);
  if (!o)
    return null;
  var l = Un.defaultProps, u = l !== void 0 ? un(un({}, l), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : i === "children" ? c = (n || []).reduce(function(s, f) {
    var d = f.item, p = f.props, h = p.sectors || p.data || [];
    return s.concat(h.map(function(m) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: m.name,
        color: m.fill,
        payload: m
      };
    }));
  }, []) : c = (n || []).map(function(s) {
    var f = s.item, d = f.type.defaultProps, p = d !== void 0 ? un(un({}, d), f.props) : {}, h = p.dataKey, m = p.name, v = p.legendType, y = p.hide;
    return {
      inactive: y,
      dataKey: h,
      type: u.iconType || v || "square",
      color: Nd(f),
      value: m || h,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), un(un(un({}, u), Un.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
function hh(e) {
  return _3(e) || C3(e) || P3(e) || $3();
}
function $3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P3(e, t) {
  if (e) {
    if (typeof e == "string") return ks(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ks(e, t);
  }
}
function C3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _3(e) {
  if (Array.isArray(e)) return ks(e);
}
function ks(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mh(Object(r), !0).forEach(function(n) {
      qn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qn(e, t, r) {
  return t = A3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A3(e) {
  var t = E3(e, "string");
  return Ai(t) == "symbol" ? t : t + "";
}
function E3(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ht(e, t, r) {
  return Ce(e) || Ce(t) ? r : gt(t) ? qt(e, t, r) : we(t) ? t(e) : r;
}
function ci(e, t, r, n) {
  var a = CF(e, function(l) {
    return ht(l, t);
  });
  if (r === "number") {
    var i = a.filter(function(l) {
      return ee(l) || parseFloat(l);
    });
    return i.length ? [wu(i), Kr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(l) {
    return !Ce(l);
  }) : a;
  return o.map(function(l) {
    return gt(l) || l instanceof Date ? l : "";
  });
}
var T3 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, l = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (l <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var u = i.range, c = 0; c < l; c++) {
      var s = c > 0 ? a[c - 1].coordinate : a[l - 1].coordinate, f = a[c].coordinate, d = c >= l - 1 ? a[0].coordinate : a[c + 1].coordinate, p = void 0;
      if (jt(f - s) !== jt(d - f)) {
        var h = [];
        if (jt(d - f) === jt(u[1] - u[0])) {
          p = d;
          var m = f + u[1] - u[0];
          h[0] = Math.min(m, (m + s) / 2), h[1] = Math.max(m, (m + s) / 2);
        } else {
          p = s;
          var v = d + u[1] - u[0];
          h[0] = Math.min(f, (v + f) / 2), h[1] = Math.max(f, (v + f) / 2);
        }
        var y = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
        if (t > y[0] && t <= y[1] || t >= h[0] && t <= h[1]) {
          o = a[c].index;
          break;
        }
      } else {
        var x = Math.min(s, d), w = Math.max(s, d);
        if (t > (x + f) / 2 && t <= (w + f) / 2) {
          o = a[c].index;
          break;
        }
      }
    }
  else
    for (var O = 0; O < l; O++)
      if (O === 0 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O > 0 && O < l - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O === l - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2) {
        o = n[O].index;
        break;
      }
  return o;
}, Nd = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ut(ut({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, l = i.fill, u;
  switch (a) {
    case "Line":
      u = o;
      break;
    case "Area":
    case "Radar":
      u = o && o !== "none" ? o : l;
      break;
    default:
      u = l;
      break;
  }
  return u;
}, M3 = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, l = Object.keys(i), u = 0, c = l.length; u < c; u++)
    for (var s = i[l[u]].stackGroups, f = Object.keys(s), d = 0, p = f.length; d < p; d++) {
      var h = s[f[d]], m = h.items, v = h.cateAxisId, y = m.filter(function($) {
        return Mr($.type).indexOf("Bar") >= 0;
      });
      if (y && y.length) {
        var x = y[0].type.defaultProps, w = x !== void 0 ? ut(ut({}, x), y[0].props) : y[0].props, O = w.barSize, g = w[v];
        o[g] || (o[g] = []);
        var b = Ce(O) ? r : O;
        o[g].push({
          item: y[0],
          stackList: y.slice(1),
          barSize: Ce(b) ? void 0 : Dt(b, n, 0)
        });
      }
    }
  return o;
}, I3 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, l = t.maxBarSize, u = o.length;
  if (u < 1) return null;
  var c = Dt(r, a, 0, !0), s, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, p = a / u, h = o.reduce(function(O, g) {
      return O + g.barSize || 0;
    }, 0);
    h += (u - 1) * c, h >= a && (h -= (u - 1) * c, c = 0), h >= a && p > 0 && (d = !0, p *= 0.9, h = u * p);
    var m = (a - h) / 2 >> 0, v = {
      offset: m - c,
      size: 0
    };
    s = o.reduce(function(O, g) {
      var b = {
        item: g.item,
        position: {
          offset: v.offset + v.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? p : g.barSize
        }
      }, $ = [].concat(hh(O), [b]);
      return v = $[$.length - 1].position, g.stackList && g.stackList.length && g.stackList.forEach(function(P) {
        $.push({
          item: P,
          position: v
        });
      }), $;
    }, f);
  } else {
    var y = Dt(n, a, 0, !0);
    a - 2 * y - (u - 1) * c <= 0 && (c = 0);
    var x = (a - 2 * y - (u - 1) * c) / u;
    x > 1 && (x >>= 0);
    var w = l === +l ? Math.min(x, l) : x;
    s = o.reduce(function(O, g, b) {
      var $ = [].concat(hh(O), [{
        item: g.item,
        position: {
          offset: y + (x + c) * b + (x - w) / 2,
          size: w
        }
      }]);
      return g.stackList && g.stackList.length && g.stackList.forEach(function(P) {
        $.push({
          item: P,
          position: $[$.length - 1].position
        });
      }), $;
    }, f);
  }
  return s;
}, j3 = function(t, r, n, a) {
  var i = n.children, o = n.width, l = n.margin, u = o - (l.left || 0) - (l.right || 0), c = ex({
    children: i,
    legendWidth: u
  });
  if (c) {
    var s = a || {}, f = s.width, d = s.height, p = c.align, h = c.verticalAlign, m = c.layout;
    if ((m === "vertical" || m === "horizontal" && h === "middle") && p !== "center" && ee(t[p]))
      return ut(ut({}, t), {}, qn({}, p, t[p] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && p === "center") && h !== "middle" && ee(t[h]))
      return ut(ut({}, t), {}, qn({}, h, t[h] + (d || 0)));
  }
  return t;
}, D3 = function(t, r, n) {
  return Ce(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, tx = function(t, r, n, a, i) {
  var o = r.props.children, l = Jt(o, $u).filter(function(c) {
    return D3(a, i, c.props.direction);
  });
  if (l && l.length) {
    var u = l.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, s) {
      var f = ht(s, n);
      if (Ce(f)) return c;
      var d = Array.isArray(f) ? [wu(f), Kr(f)] : [f, f], p = u.reduce(function(h, m) {
        var v = ht(s, m, 0), y = d[0] - Math.abs(Array.isArray(v) ? v[0] : v), x = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(y, h[0]), Math.max(x, h[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, k3 = function(t, r, n, a, i) {
  var o = r.map(function(l) {
    return tx(t, l, n, i, a);
  }).filter(function(l) {
    return !Ce(l);
  });
  return o && o.length ? o.reduce(function(l, u) {
    return [Math.min(l[0], u[0]), Math.max(l[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, rx = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && tx(t, u, c, a) || ci(t, c, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(u, c) {
        return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var l = {};
  return o.reduce(function(u, c) {
    for (var s = 0, f = c.length; s < f; s++)
      l[c[s]] || (l[c[s]] = !0, u.push(c[s]));
    return u;
  }, []);
}, nx = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, yn = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, l = t.range, u = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, c = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / u : 0;
  if (c = t.axisType === "angleAxis" && (l == null ? void 0 : l.length) >= 2 ? jt(l[0] - l[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var s = (t.ticks || t.niceTicks).map(function(f) {
      var d = i ? i.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + c,
        value: f,
        offset: c
      };
    });
    return s.filter(function(f) {
      return !Ma(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, d) {
    return {
      coordinate: a(f) + c,
      value: f,
      index: d,
      offset: c
    };
  }) : a.ticks && !n ? a.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: a(f) + c,
      value: f,
      offset: c
    };
  }) : a.domain().map(function(f, d) {
    return {
      coordinate: a(f) + c,
      value: i ? i[f] : f,
      index: d,
      offset: c
    };
  });
}, Rc = /* @__PURE__ */ new WeakMap(), Mo = function(t, r) {
  if (typeof r != "function")
    return t;
  Rc.has(t) || Rc.set(t, /* @__PURE__ */ new WeakMap());
  var n = Rc.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, ax = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, l = t.axisType;
  if (a === "auto")
    return o === "radial" && l === "radiusAxis" ? {
      scale: xi(),
      realScaleType: "band"
    } : o === "radial" && l === "angleAxis" ? {
      scale: fl(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: ui(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: xi(),
      realScaleType: "band"
    } : {
      scale: fl(),
      realScaleType: "linear"
    };
  if (eo(a)) {
    var u = "scale".concat(ou(a));
    return {
      scale: (ch[u] || ui)(),
      realScaleType: ch[u] ? u : "point"
    };
  }
  return we(a) ? {
    scale: a
  } : {
    scale: ui(),
    realScaleType: "point"
  };
}, gh = 1e-4, ix = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - gh, o = Math.max(a[0], a[1]) + gh, l = t(r[0]), u = t(r[n - 1]);
    (l < i || l > o || u < i || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, N3 = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, R3 = function(t, r) {
  if (!r || r.length !== 2 || !ee(r[0]) || !ee(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!ee(t[0]) || t[0] < n) && (i[0] = n), (!ee(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, L3 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, l = 0; l < r; ++l) {
        var u = Ma(t[l][n][1]) ? t[l][n][0] : t[l][n][1];
        u >= 0 ? (t[l][n][0] = i, t[l][n][1] = i + u, i = t[l][n][1]) : (t[l][n][0] = o, t[l][n][1] = o + u, o = t[l][n][1]);
      }
}, B3 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var l = Ma(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        l >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + l, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, F3 = {
  sign: L3,
  // @ts-expect-error definitelytyped types are incorrect
  expand: aE,
  // @ts-expect-error definitelytyped types are incorrect
  none: Xn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: iE,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: oE,
  positive: B3
}, H3 = function(t, r, n) {
  var a = r.map(function(l) {
    return l.props.dataKey;
  }), i = F3[n], o = nE().keys(a).value(function(l, u) {
    return +ht(l, u, 0);
  }).order(os).offset(i);
  return o(t);
}, W3 = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var l = o ? r.reverse() : r, u = {}, c = l.reduce(function(f, d) {
    var p, h = (p = d.type) !== null && p !== void 0 && p.defaultProps ? ut(ut({}, d.type.defaultProps), d.props) : d.props, m = h.stackId, v = h.hide;
    if (v)
      return f;
    var y = h[n], x = f[y] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (gt(m)) {
      var w = x.stackGroups[m] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      w.items.push(d), x.hasStack = !0, x.stackGroups[m] = w;
    } else
      x.stackGroups[Ia("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return ut(ut({}, f), {}, qn({}, y, x));
  }, u), s = {};
  return Object.keys(c).reduce(function(f, d) {
    var p = c[d];
    if (p.hasStack) {
      var h = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(m, v) {
        var y = p.stackGroups[v];
        return ut(ut({}, m), {}, qn({}, v, {
          numericAxisId: n,
          cateAxisId: a,
          items: y.items,
          stackedData: H3(t, y.items, i)
        }));
      }, h);
    }
    return ut(ut({}, f), {}, qn({}, d, p));
  }, s);
}, ox = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, l = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var s = r3(c, i, l);
    return t.domain([wu(s), Kr(s)]), {
      niceTicks: s
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = n3(f, i, l);
    return {
      niceTicks: d
    };
  }
  return null;
};
function yh(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Ce(a[t.dataKey])) {
      var l = zo(r, "value", a[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var u = ht(a, Ce(o) ? t.dataKey : o);
  return Ce(u) ? null : t.scale(u);
}
var bh = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, l = t.index;
  if (r.type === "category")
    return n[l] ? n[l].coordinate + a : null;
  var u = ht(o, r.dataKey, r.domain[l]);
  return Ce(u) ? null : r.scale(u) - i / 2 + a;
}, V3 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, z3 = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ut(ut({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (gt(i)) {
    var o = r[i];
    if (o) {
      var l = o.items.indexOf(t);
      return l >= 0 ? o.stackedData[l] : null;
    }
  }
  return null;
}, U3 = function(t) {
  return t.reduce(function(r, n) {
    return [wu(n.concat([r[0]]).filter(ee)), Kr(n.concat([r[1]]).filter(ee))];
  }, [1 / 0, -1 / 0]);
}, lx = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], l = o.stackedData, u = l.reduce(function(c, s) {
      var f = U3(s.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], a[0]), Math.max(u[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, xh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, wh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ns = function(t, r, n) {
  if (we(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (ee(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (xh.test(t[0])) {
    var i = +xh.exec(t[0])[1];
    a[0] = r[0] - i;
  } else we(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (ee(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (wh.test(t[1])) {
    var o = +wh.exec(t[1])[1];
    a[1] = r[1] + o;
  } else we(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, yl = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = sd(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, l = 1, u = i.length; l < u; l++) {
      var c = i[l], s = i[l - 1];
      o = Math.min((c.coordinate || 0) - (s.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Sh = function(t, r, n) {
  return !t || !t.length || aa(t, qt(n, "type.defaultProps.domain")) ? r : t;
}, ux = function(t, r) {
  var n = t.type.defaultProps ? ut(ut({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, l = n.formatter, u = n.tooltipType, c = n.chartType, s = n.hide;
  return ut(ut({}, ve(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: l,
    name: i || a,
    color: Nd(t),
    value: ht(r, a),
    type: u,
    payload: r,
    chartType: c,
    hide: s
  });
};
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
function Oh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oh(Object(r), !0).forEach(function(n) {
      cx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cx(e, t, r) {
  return t = Y3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y3(e) {
  var t = q3(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function q3(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function K3(e, t) {
  return Q3(e) || Z3(e, t) || X3(e, t) || G3();
}
function G3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X3(e, t) {
  if (e) {
    if (typeof e == "string") return $h(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $h(e, t);
  }
}
function $h(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Z3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function Q3(e) {
  if (Array.isArray(e)) return e;
}
var bl = Math.PI / 180, J3 = function(t) {
  return t * 180 / Math.PI;
}, Je = function(t, r, n, a) {
  return {
    x: t + Math.cos(-bl * a) * n,
    y: r + Math.sin(-bl * a) * n
  };
}, sx = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, eH = function(t, r, n, a, i) {
  var o = t.width, l = t.height, u = t.startAngle, c = t.endAngle, s = Dt(t.cx, o, o / 2), f = Dt(t.cy, l, l / 2), d = sx(o, l, n), p = Dt(t.innerRadius, d, 0), h = Dt(t.outerRadius, d, d * 0.8), m = Object.keys(r);
  return m.reduce(function(v, y) {
    var x = r[y], w = x.domain, O = x.reversed, g;
    if (Ce(x.range))
      a === "angleAxis" ? g = [u, c] : a === "radiusAxis" && (g = [p, h]), O && (g = [g[1], g[0]]);
    else {
      g = x.range;
      var b = g, $ = K3(b, 2);
      u = $[0], c = $[1];
    }
    var P = ax(x, i), A = P.realScaleType, T = P.scale;
    T.domain(w).range(g), ix(T);
    var C = ox(T, _r(_r({}, x), {}, {
      realScaleType: A
    })), M = _r(_r(_r({}, x), C), {}, {
      range: g,
      radius: h,
      realScaleType: A,
      scale: T,
      cx: s,
      cy: f,
      innerRadius: p,
      outerRadius: h,
      startAngle: u,
      endAngle: c
    });
    return _r(_r({}, v), {}, cx({}, y, M));
  }, {});
}, tH = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, rH = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, l = tH({
    x: n,
    y: a
  }, {
    x: i,
    y: o
  });
  if (l <= 0)
    return {
      radius: l
    };
  var u = (n - i) / l, c = Math.acos(u);
  return a > o && (c = 2 * Math.PI - c), {
    radius: l,
    angle: J3(c),
    angleInRadian: c
  };
}, nH = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, aH = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), l = Math.min(i, o);
  return t + l * 360;
}, Ph = function(t, r) {
  var n = t.x, a = t.y, i = rH({
    x: n,
    y: a
  }, r), o = i.radius, l = i.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var s = nH(r), f = s.startAngle, d = s.endAngle, p = l, h;
  if (f <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < f; )
      p += 360;
    h = p >= f && p <= d;
  } else {
    for (; p > f; )
      p -= 360;
    for (; p < d; )
      p += 360;
    h = p >= d && p <= f;
  }
  return h ? _r(_r({}, r), {}, {
    radius: o,
    angle: aH(p, r)
  }) : null;
}, fx = function(t) {
  return !/* @__PURE__ */ S.isValidElement(t) && !we(t) && typeof t != "boolean" ? t.className : "";
};
function Ti(e) {
  "@babel/helpers - typeof";
  return Ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ti(e);
}
var iH = ["offset"];
function oH(e) {
  return sH(e) || cH(e) || uH(e) || lH();
}
function lH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uH(e, t) {
  if (e) {
    if (typeof e == "string") return Rs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rs(e, t);
  }
}
function cH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sH(e) {
  if (Array.isArray(e)) return Rs(e);
}
function Rs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fH(e, t) {
  if (e == null) return {};
  var r = dH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function dH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ch(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ch(Object(r), !0).forEach(function(n) {
      pH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ch(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pH(e, t, r) {
  return t = vH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vH(e) {
  var t = hH(e, "string");
  return Ti(t) == "symbol" ? t : t + "";
}
function hH(e, t) {
  if (Ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mi() {
  return Mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mi.apply(this, arguments);
}
var mH = function(t) {
  var r = t.value, n = t.formatter, a = Ce(t.children) ? r : t.children;
  return we(n) ? n(a) : a;
}, gH = function(t, r) {
  var n = jt(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, yH = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, l = t.className, u = i, c = u.cx, s = u.cy, f = u.innerRadius, d = u.outerRadius, p = u.startAngle, h = u.endAngle, m = u.clockWise, v = (f + d) / 2, y = gH(p, h), x = y >= 0 ? 1 : -1, w, O;
  a === "insideStart" ? (w = p + x * o, O = m) : a === "insideEnd" ? (w = h - x * o, O = !m) : a === "end" && (w = h + x * o, O = m), O = y <= 0 ? O : !O;
  var g = Je(c, s, v, w), b = Je(c, s, v, w + (O ? 1 : -1) * 359), $ = "M".concat(g.x, ",").concat(g.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(b.x, ",").concat(b.y), P = Ce(t.id) ? Ia("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ N.createElement("text", Mi({}, n, {
    dominantBaseline: "central",
    className: Ae("recharts-radial-bar-label", l)
  }), /* @__PURE__ */ N.createElement("defs", null, /* @__PURE__ */ N.createElement("path", {
    id: P,
    d: $
  })), /* @__PURE__ */ N.createElement("textPath", {
    xlinkHref: "#".concat(P)
  }, r));
}, bH = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, l = i.cy, u = i.innerRadius, c = i.outerRadius, s = i.startAngle, f = i.endAngle, d = (s + f) / 2;
  if (a === "outside") {
    var p = Je(o, l, c + n, d), h = p.x, m = p.y;
    return {
      x: h,
      y: m,
      textAnchor: h >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (a === "center")
    return {
      x: o,
      y: l,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (a === "centerTop")
    return {
      x: o,
      y: l,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (a === "centerBottom")
    return {
      x: o,
      y: l,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var v = (u + c) / 2, y = Je(o, l, v, d), x = y.x, w = y.y;
  return {
    x,
    y: w,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, xH = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, l = o.x, u = o.y, c = o.width, s = o.height, f = s >= 0 ? 1 : -1, d = f * a, p = f > 0 ? "end" : "start", h = f > 0 ? "start" : "end", m = c >= 0 ? 1 : -1, v = m * a, y = m > 0 ? "end" : "start", x = m > 0 ? "start" : "end";
  if (i === "top") {
    var w = {
      x: l + c / 2,
      y: u - f * a,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return vt(vt({}, w), n ? {
      height: Math.max(u - n.y, 0),
      width: c
    } : {});
  }
  if (i === "bottom") {
    var O = {
      x: l + c / 2,
      y: u + s + d,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return vt(vt({}, O), n ? {
      height: Math.max(n.y + n.height - (u + s), 0),
      width: c
    } : {});
  }
  if (i === "left") {
    var g = {
      x: l - v,
      y: u + s / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return vt(vt({}, g), n ? {
      width: Math.max(g.x - n.x, 0),
      height: s
    } : {});
  }
  if (i === "right") {
    var b = {
      x: l + c + v,
      y: u + s / 2,
      textAnchor: x,
      verticalAnchor: "middle"
    };
    return vt(vt({}, b), n ? {
      width: Math.max(n.x + n.width - b.x, 0),
      height: s
    } : {});
  }
  var $ = n ? {
    width: c,
    height: s
  } : {};
  return i === "insideLeft" ? vt({
    x: l + v,
    y: u + s / 2,
    textAnchor: x,
    verticalAnchor: "middle"
  }, $) : i === "insideRight" ? vt({
    x: l + c - v,
    y: u + s / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, $) : i === "insideTop" ? vt({
    x: l + c / 2,
    y: u + d,
    textAnchor: "middle",
    verticalAnchor: h
  }, $) : i === "insideBottom" ? vt({
    x: l + c / 2,
    y: u + s - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, $) : i === "insideTopLeft" ? vt({
    x: l + v,
    y: u + d,
    textAnchor: x,
    verticalAnchor: h
  }, $) : i === "insideTopRight" ? vt({
    x: l + c - v,
    y: u + d,
    textAnchor: y,
    verticalAnchor: h
  }, $) : i === "insideBottomLeft" ? vt({
    x: l + v,
    y: u + s - d,
    textAnchor: x,
    verticalAnchor: p
  }, $) : i === "insideBottomRight" ? vt({
    x: l + c - v,
    y: u + s - d,
    textAnchor: y,
    verticalAnchor: p
  }, $) : _a(i) && (ee(i.x) || hn(i.x)) && (ee(i.y) || hn(i.y)) ? vt({
    x: l + Dt(i.x, c),
    y: u + Dt(i.y, s),
    textAnchor: "end",
    verticalAnchor: "end"
  }, $) : vt({
    x: l + c / 2,
    y: u + s / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, $);
}, wH = function(t) {
  return "cx" in t && ee(t.cx);
};
function wt(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = fH(e, iH), a = vt({
    offset: r
  }, n), i = a.viewBox, o = a.position, l = a.value, u = a.children, c = a.content, s = a.className, f = s === void 0 ? "" : s, d = a.textBreakAll;
  if (!i || Ce(l) && Ce(u) && !/* @__PURE__ */ S.isValidElement(c) && !we(c))
    return null;
  if (/* @__PURE__ */ S.isValidElement(c))
    return /* @__PURE__ */ S.cloneElement(c, a);
  var p;
  if (we(c)) {
    if (p = /* @__PURE__ */ S.createElement(c, a), /* @__PURE__ */ S.isValidElement(p))
      return p;
  } else
    p = mH(a);
  var h = wH(i), m = ve(a, !0);
  if (h && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return yH(a, p, m);
  var v = h ? bH(a) : xH(a);
  return /* @__PURE__ */ N.createElement(Pn, Mi({
    className: Ae("recharts-label", f)
  }, m, v, {
    breakAll: d
  }), p);
}
wt.displayName = "Label";
var dx = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, l = t.r, u = t.radius, c = t.innerRadius, s = t.outerRadius, f = t.x, d = t.y, p = t.top, h = t.left, m = t.width, v = t.height, y = t.clockWise, x = t.labelViewBox;
  if (x)
    return x;
  if (ee(m) && ee(v)) {
    if (ee(f) && ee(d))
      return {
        x: f,
        y: d,
        width: m,
        height: v
      };
    if (ee(p) && ee(h))
      return {
        x: p,
        y: h,
        width: m,
        height: v
      };
  }
  return ee(f) && ee(d) ? {
    x: f,
    y: d,
    width: 0,
    height: 0
  } : ee(r) && ee(n) ? {
    cx: r,
    cy: n,
    startAngle: i || a || 0,
    endAngle: o || a || 0,
    innerRadius: c || 0,
    outerRadius: s || u || l || 0,
    clockWise: y
  } : t.viewBox ? t.viewBox : {};
}, SH = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ N.createElement(wt, {
    key: "label-implicit",
    viewBox: r
  }) : gt(t) ? /* @__PURE__ */ N.createElement(wt, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ S.isValidElement(t) ? t.type === wt ? /* @__PURE__ */ S.cloneElement(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ N.createElement(wt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : we(t) ? /* @__PURE__ */ N.createElement(wt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : _a(t) ? /* @__PURE__ */ N.createElement(wt, Mi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, OH = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = dx(t), o = Jt(a, wt).map(function(u, c) {
    return /* @__PURE__ */ S.cloneElement(u, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var l = SH(t.label, r || i);
  return [l].concat(oH(o));
};
wt.parseViewBox = dx;
wt.renderCallByParent = OH;
function $H(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var PH = $H;
const CH = /* @__PURE__ */ Le(PH);
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
var _H = ["valueAccessor"], AH = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function EH(e) {
  return jH(e) || IH(e) || MH(e) || TH();
}
function TH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MH(e, t) {
  if (e) {
    if (typeof e == "string") return Ls(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ls(e, t);
  }
}
function IH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jH(e) {
  if (Array.isArray(e)) return Ls(e);
}
function Ls(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xl() {
  return xl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xl.apply(this, arguments);
}
function _h(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ah(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _h(Object(r), !0).forEach(function(n) {
      DH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _h(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DH(e, t, r) {
  return t = kH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kH(e) {
  var t = NH(e, "string");
  return Ii(t) == "symbol" ? t : t + "";
}
function NH(e, t) {
  if (Ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Eh(e, t) {
  if (e == null) return {};
  var r = RH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var LH = function(t) {
  return Array.isArray(t.value) ? CH(t.value) : t.value;
};
function Dr(e) {
  var t = e.valueAccessor, r = t === void 0 ? LH : t, n = Eh(e, _H), a = n.data, i = n.dataKey, o = n.clockWise, l = n.id, u = n.textBreakAll, c = Eh(n, AH);
  return !a || !a.length ? null : /* @__PURE__ */ N.createElement(Ne, {
    className: "recharts-label-list"
  }, a.map(function(s, f) {
    var d = Ce(i) ? r(s, f) : ht(s && s.payload, i), p = Ce(l) ? {} : {
      id: "".concat(l, "-").concat(f)
    };
    return /* @__PURE__ */ N.createElement(wt, xl({}, ve(s, !0), c, p, {
      parentViewBox: s.parentViewBox,
      value: d,
      textBreakAll: u,
      viewBox: wt.parseViewBox(Ce(o) ? s : Ah(Ah({}, s), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Dr.displayName = "LabelList";
function BH(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ N.createElement(Dr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ N.isValidElement(e) || we(e) ? /* @__PURE__ */ N.createElement(Dr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : _a(e) ? /* @__PURE__ */ N.createElement(Dr, xl({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function FH(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = Jt(n, Dr).map(function(o, l) {
    return /* @__PURE__ */ S.cloneElement(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(l)
    });
  });
  if (!r)
    return a;
  var i = BH(e.label, t);
  return [i].concat(EH(a));
}
Dr.renderCallByParent = FH;
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function Bs() {
  return Bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bs.apply(this, arguments);
}
function Th(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Th(Object(r), !0).forEach(function(n) {
      HH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Th(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HH(e, t, r) {
  return t = WH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WH(e) {
  var t = VH(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function VH(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zH = function(t, r) {
  var n = jt(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, Io = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, l = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, s = u * (l ? 1 : -1) + a, f = Math.asin(u / s) / bl, d = c ? i : i + o * f, p = Je(r, n, s, d), h = Je(r, n, a, d), m = c ? i - o * f : i, v = Je(r, n, s * Math.cos(f * bl), m);
  return {
    center: p,
    circleTangency: h,
    lineTangency: v,
    theta: f
  };
}, px = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, l = t.endAngle, u = zH(o, l), c = o + u, s = Je(r, n, i, o), f = Je(r, n, i, c), d = "M ".concat(s.x, ",").concat(s.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(o > c), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (a > 0) {
    var p = Je(r, n, a, o), h = Je(r, n, a, c);
    d += "L ".concat(h.x, ",").concat(h.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(o <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, UH = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, l = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, s = t.endAngle, f = jt(s - c), d = Io({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = d.circleTangency, h = d.lineTangency, m = d.theta, v = Io({
    cx: r,
    cy: n,
    radius: i,
    angle: s,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: u
  }), y = v.circleTangency, x = v.lineTangency, w = v.theta, O = u ? Math.abs(c - s) : Math.abs(c - s) - m - w;
  if (O < 0)
    return l ? "M ".concat(h.x, ",").concat(h.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : px({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: c,
      endAngle: s
    });
  var g = "M ".concat(h.x, ",").concat(h.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(f < 0), ",").concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(x.x, ",").concat(x.y, `
  `);
  if (a > 0) {
    var b = Io({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), $ = b.circleTangency, P = b.lineTangency, A = b.theta, T = Io({
      cx: r,
      cy: n,
      radius: a,
      angle: s,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), C = T.circleTangency, M = T.lineTangency, D = T.theta, I = u ? Math.abs(c - s) : Math.abs(c - s) - A - D;
    if (I < 0 && o === 0)
      return "".concat(g, "L").concat(r, ",").concat(n, "Z");
    g += "L".concat(M.x, ",").concat(M.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(I > 180), ",").concat(+(f > 0), ",").concat($.x, ",").concat($.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, "Z");
  } else
    g += "L".concat(r, ",").concat(n, "Z");
  return g;
}, YH = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, vx = function(t) {
  var r = Mh(Mh({}, YH), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, l = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, s = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || s === f)
    return null;
  var p = Ae("recharts-sector", d), h = o - i, m = Dt(l, h, 0, !0), v;
  return m > 0 && Math.abs(s - f) < 360 ? v = UH({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(m, h / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: s,
    endAngle: f
  }) : v = px({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: s,
    endAngle: f
  }), /* @__PURE__ */ N.createElement("path", Bs({}, ve(r, !0), {
    className: p,
    d: v,
    role: "img"
  }));
};
function Di(e) {
  "@babel/helpers - typeof";
  return Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Di(e);
}
function Fs() {
  return Fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fs.apply(this, arguments);
}
function Ih(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ih(Object(r), !0).forEach(function(n) {
      qH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ih(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qH(e, t, r) {
  return t = KH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KH(e) {
  var t = GH(e, "string");
  return Di(t) == "symbol" ? t : t + "";
}
function GH(e, t) {
  if (Di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dh = {
  curveBasisClosed: YA,
  curveBasisOpen: qA,
  curveBasis: UA,
  curveBumpX: MA,
  curveBumpY: IA,
  curveLinearClosed: KA,
  curveLinear: uu,
  curveMonotoneX: GA,
  curveMonotoneY: XA,
  curveNatural: ZA,
  curveStep: QA,
  curveStepAfter: eE,
  curveStepBefore: JA
}, jo = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Qa = function(t) {
  return t.x;
}, Ja = function(t) {
  return t.y;
}, XH = function(t, r) {
  if (we(t))
    return t;
  var n = "curve".concat(ou(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Dh["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Dh[n] || uu;
}, ZH = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, l = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, s = XH(n, l), f = c ? i.filter(function(m) {
    return jo(m);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(m) {
      return jo(m);
    }) : o, h = f.map(function(m, v) {
      return jh(jh({}, m), {}, {
        base: p[v]
      });
    });
    return l === "vertical" ? d = Oo().y(Ja).x1(Qa).x0(function(m) {
      return m.base.x;
    }) : d = Oo().x(Qa).y1(Ja).y0(function(m) {
      return m.base.y;
    }), d.defined(jo).curve(s), d(h);
  }
  return l === "vertical" && ee(o) ? d = Oo().y(Ja).x1(Qa).x0(o) : ee(o) ? d = Oo().x(Qa).y1(Ja).y0(o) : d = cb().x(Qa).y(Ja), d.defined(jo).curve(s), d(f);
}, Kn = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? ZH(t) : a;
  return /* @__PURE__ */ N.createElement("path", Fs({}, ve(t, !1), Uo(t), {
    className: Ae("recharts-curve", r),
    d: o,
    ref: i
  }));
}, QH = Object.getOwnPropertyNames, JH = Object.getOwnPropertySymbols, eW = Object.prototype.hasOwnProperty;
function kh(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function Do(e) {
  return function(r, n, a) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, a);
    var i = a.cache, o = i.get(r), l = i.get(n);
    if (o && l)
      return o === n && l === r;
    i.set(r, n), i.set(n, r);
    var u = e(r, n, a);
    return i.delete(r), i.delete(n), u;
  };
}
function Nh(e) {
  return QH(e).concat(JH(e));
}
var hx = Object.hasOwn || function(e, t) {
  return eW.call(e, t);
};
function Ba(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var mx = "_owner", Rh = Object.getOwnPropertyDescriptor, Lh = Object.keys;
function tW(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function rW(e, t) {
  return Ba(e.getTime(), t.getTime());
}
function Bh(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, a = e.entries(), i = 0, o, l; (o = a.next()) && !o.done; ) {
    for (var u = t.entries(), c = !1, s = 0; (l = u.next()) && !l.done; ) {
      var f = o.value, d = f[0], p = f[1], h = l.value, m = h[0], v = h[1];
      !c && !n[s] && (c = r.equals(d, m, i, s, e, t, r) && r.equals(p, v, d, m, e, t, r)) && (n[s] = !0), s++;
    }
    if (!c)
      return !1;
    i++;
  }
  return !0;
}
function nW(e, t, r) {
  var n = Lh(e), a = n.length;
  if (Lh(t).length !== a)
    return !1;
  for (var i; a-- > 0; )
    if (i = n[a], i === mx && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !hx(t, i) || !r.equals(e[i], t[i], i, i, e, t, r))
      return !1;
  return !0;
}
function ei(e, t, r) {
  var n = Nh(e), a = n.length;
  if (Nh(t).length !== a)
    return !1;
  for (var i, o, l; a-- > 0; )
    if (i = n[a], i === mx && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !hx(t, i) || !r.equals(e[i], t[i], i, i, e, t, r) || (o = Rh(e, i), l = Rh(t, i), (o || l) && (!o || !l || o.configurable !== l.configurable || o.enumerable !== l.enumerable || o.writable !== l.writable)))
      return !1;
  return !0;
}
function aW(e, t) {
  return Ba(e.valueOf(), t.valueOf());
}
function iW(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Fh(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, a = e.values(), i, o; (i = a.next()) && !i.done; ) {
    for (var l = t.values(), u = !1, c = 0; (o = l.next()) && !o.done; )
      !u && !n[c] && (u = r.equals(i.value, o.value, i.value, o.value, e, t, r)) && (n[c] = !0), c++;
    if (!u)
      return !1;
  }
  return !0;
}
function oW(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var lW = "[object Arguments]", uW = "[object Boolean]", cW = "[object Date]", sW = "[object Map]", fW = "[object Number]", dW = "[object Object]", pW = "[object RegExp]", vW = "[object Set]", hW = "[object String]", mW = Array.isArray, Hh = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Wh = Object.assign, gW = Object.prototype.toString.call.bind(Object.prototype.toString);
function yW(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, a = e.areObjectsEqual, i = e.arePrimitiveWrappersEqual, o = e.areRegExpsEqual, l = e.areSetsEqual, u = e.areTypedArraysEqual;
  return function(s, f, d) {
    if (s === f)
      return !0;
    if (s == null || f == null || typeof s != "object" || typeof f != "object")
      return s !== s && f !== f;
    var p = s.constructor;
    if (p !== f.constructor)
      return !1;
    if (p === Object)
      return a(s, f, d);
    if (mW(s))
      return t(s, f, d);
    if (Hh != null && Hh(s))
      return u(s, f, d);
    if (p === Date)
      return r(s, f, d);
    if (p === RegExp)
      return o(s, f, d);
    if (p === Map)
      return n(s, f, d);
    if (p === Set)
      return l(s, f, d);
    var h = gW(s);
    return h === cW ? r(s, f, d) : h === pW ? o(s, f, d) : h === sW ? n(s, f, d) : h === vW ? l(s, f, d) : h === dW ? typeof s.then != "function" && typeof f.then != "function" && a(s, f, d) : h === lW ? a(s, f, d) : h === uW || h === fW || h === hW ? i(s, f, d) : !1;
  };
}
function bW(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? ei : tW,
    areDatesEqual: rW,
    areMapsEqual: n ? kh(Bh, ei) : Bh,
    areObjectsEqual: n ? ei : nW,
    arePrimitiveWrappersEqual: aW,
    areRegExpsEqual: iW,
    areSetsEqual: n ? kh(Fh, ei) : Fh,
    areTypedArraysEqual: n ? ei : oW
  };
  if (r && (a = Wh({}, a, r(a))), t) {
    var i = Do(a.areArraysEqual), o = Do(a.areMapsEqual), l = Do(a.areObjectsEqual), u = Do(a.areSetsEqual);
    a = Wh({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: l,
      areSetsEqual: u
    });
  }
  return a;
}
function xW(e) {
  return function(t, r, n, a, i, o, l) {
    return e(t, r, l);
  };
}
function wW(e) {
  var t = e.circular, r = e.comparator, n = e.createState, a = e.equals, i = e.strict;
  if (n)
    return function(u, c) {
      var s = n(), f = s.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, p = s.meta;
      return r(u, c, {
        cache: d,
        equals: a,
        meta: p,
        strict: i
      });
    };
  if (t)
    return function(u, c) {
      return r(u, c, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: a,
        meta: void 0,
        strict: i
      });
    };
  var o = {
    cache: void 0,
    equals: a,
    meta: void 0,
    strict: i
  };
  return function(u, c) {
    return r(u, c, o);
  };
}
var SW = rn();
rn({ strict: !0 });
rn({ circular: !0 });
rn({
  circular: !0,
  strict: !0
});
rn({
  createInternalComparator: function() {
    return Ba;
  }
});
rn({
  strict: !0,
  createInternalComparator: function() {
    return Ba;
  }
});
rn({
  circular: !0,
  createInternalComparator: function() {
    return Ba;
  }
});
rn({
  circular: !0,
  createInternalComparator: function() {
    return Ba;
  },
  strict: !0
});
function rn(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, l = bW(e), u = yW(l), c = n ? n(u) : xW(u);
  return wW({ circular: r, comparator: u, createState: a, equals: c, strict: o });
}
function OW(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Vh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : OW(a);
  };
  requestAnimationFrame(n);
}
function Hs(e) {
  "@babel/helpers - typeof";
  return Hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hs(e);
}
function $W(e) {
  return AW(e) || _W(e) || CW(e) || PW();
}
function PW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CW(e, t) {
  if (e) {
    if (typeof e == "string") return zh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zh(e, t);
  }
}
function zh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _W(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function AW(e) {
  if (Array.isArray(e)) return e;
}
function EW() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, l = $W(o), u = l[0], c = l.slice(1);
        if (typeof u == "number") {
          Vh(a.bind(null, c), u);
          return;
        }
        a(u), Vh(a.bind(null, c));
        return;
      }
      Hs(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(i) {
      r = !1, n(i);
    },
    subscribe: function(i) {
      return t = i, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function ki(e) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ki(e);
}
function Uh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uh(Object(r), !0).forEach(function(n) {
      gx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gx(e, t, r) {
  return t = TW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TW(e) {
  var t = MW(e, "string");
  return ki(t) === "symbol" ? t : String(t);
}
function MW(e, t) {
  if (ki(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ki(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IW = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, jW = function(t) {
  return t;
}, DW = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, si = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return Yh(Yh({}, n), {}, gx({}, a, t(a, r[a])));
  }, {});
}, qh = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(DW(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, kW = je.env.NODE_ENV !== "production", wl = function(t, r, n, a, i, o, l, u) {
  if (kW && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, l, u], s = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[s++];
      }));
    }
};
function NW(e, t) {
  return BW(e) || LW(e, t) || yx(e, t) || RW();
}
function RW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function BW(e) {
  if (Array.isArray(e)) return e;
}
function FW(e) {
  return VW(e) || WW(e) || yx(e) || HW();
}
function HW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yx(e, t) {
  if (e) {
    if (typeof e == "string") return Ws(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ws(e, t);
  }
}
function WW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function VW(e) {
  if (Array.isArray(e)) return Ws(e);
}
function Ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Sl = 1e-4, bx = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, xx = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, Kh = function(t, r) {
  return function(n) {
    var a = bx(t, r);
    return xx(a, n);
  };
}, zW = function(t, r) {
  return function(n) {
    var a = bx(t, r), i = [].concat(FW(a.map(function(o, l) {
      return o * l;
    }).slice(1)), [0]);
    return xx(i, n);
  };
}, Gh = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0], i = r[1], o = r[2], l = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        a = 0, i = 0, o = 1, l = 1;
        break;
      case "ease":
        a = 0.25, i = 0.1, o = 0.25, l = 1;
        break;
      case "ease-in":
        a = 0.42, i = 0, o = 1, l = 1;
        break;
      case "ease-out":
        a = 0.42, i = 0, o = 0.58, l = 1;
        break;
      case "ease-in-out":
        a = 0, i = 0, o = 0.58, l = 1;
        break;
      default: {
        var u = r[0].split("(");
        if (u[0] === "cubic-bezier" && u[1].split(")")[0].split(",").length === 4) {
          var c = u[1].split(")")[0].split(",").map(function(v) {
            return parseFloat(v);
          }), s = NW(c, 4);
          a = s[0], i = s[1], o = s[2], l = s[3];
        } else
          wl(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  wl([a, o, i, l].every(function(v) {
    return typeof v == "number" && v >= 0 && v <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = Kh(a, o), d = Kh(i, l), p = zW(a, o), h = function(y) {
    return y > 1 ? 1 : y < 0 ? 0 : y;
  }, m = function(y) {
    for (var x = y > 1 ? 1 : y, w = x, O = 0; O < 8; ++O) {
      var g = f(w) - x, b = p(w);
      if (Math.abs(g - x) < Sl || b < Sl)
        return d(w);
      w = h(w - g / b);
    }
    return d(w);
  };
  return m.isStepper = !1, m;
}, UW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, l = o === void 0 ? 17 : o, u = function(s, f, d) {
    var p = -(s - f) * n, h = d * i, m = d + (p - h) * l / 1e3, v = d * l / 1e3 + s;
    return Math.abs(v - f) < Sl && Math.abs(m) < Sl ? [f, 0] : [v, m];
  };
  return u.isStepper = !0, u.dt = l, u;
}, YW = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0];
  if (typeof a == "string")
    switch (a) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Gh(a);
      case "spring":
        return UW();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return Gh(a);
        wl(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (wl(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Ni(e) {
  "@babel/helpers - typeof";
  return Ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ni(e);
}
function Xh(e) {
  return GW(e) || KW(e) || wx(e) || qW();
}
function qW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function GW(e) {
  if (Array.isArray(e)) return zs(e);
}
function Zh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zh(Object(r), !0).forEach(function(n) {
      Vs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vs(e, t, r) {
  return t = XW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XW(e) {
  var t = ZW(e, "string");
  return Ni(t) === "symbol" ? t : String(t);
}
function ZW(e, t) {
  if (Ni(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ni(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QW(e, t) {
  return tV(e) || eV(e, t) || wx(e, t) || JW();
}
function JW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wx(e, t) {
  if (e) {
    if (typeof e == "string") return zs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zs(e, t);
  }
}
function zs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function eV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function tV(e) {
  if (Array.isArray(e)) return e;
}
var Ol = function(t, r, n) {
  return t + (r - t) * n;
}, Us = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, rV = function e(t, r, n) {
  var a = si(function(i, o) {
    if (Us(o)) {
      var l = t(o.from, o.to, o.velocity), u = QW(l, 2), c = u[0], s = u[1];
      return Pt(Pt({}, o), {}, {
        from: c,
        velocity: s
      });
    }
    return o;
  }, r);
  return n < 1 ? si(function(i, o) {
    return Us(o) ? Pt(Pt({}, o), {}, {
      velocity: Ol(o.velocity, a[i].velocity, n),
      from: Ol(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const nV = function(e, t, r, n, a) {
  var i = IW(e, t), o = i.reduce(function(v, y) {
    return Pt(Pt({}, v), {}, Vs({}, y, [e[y], t[y]]));
  }, {}), l = i.reduce(function(v, y) {
    return Pt(Pt({}, v), {}, Vs({}, y, {
      from: e[y],
      velocity: 0,
      to: t[y]
    }));
  }, {}), u = -1, c, s, f = function() {
    return null;
  }, d = function() {
    return si(function(y, x) {
      return x.from;
    }, l);
  }, p = function() {
    return !Object.values(l).filter(Us).length;
  }, h = function(y) {
    c || (c = y);
    var x = y - c, w = x / r.dt;
    l = rV(r, l, w), a(Pt(Pt(Pt({}, e), t), d())), c = y, p() || (u = requestAnimationFrame(f));
  }, m = function(y) {
    s || (s = y);
    var x = (y - s) / n, w = si(function(g, b) {
      return Ol.apply(void 0, Xh(b).concat([r(x)]));
    }, o);
    if (a(Pt(Pt(Pt({}, e), t), w)), x < 1)
      u = requestAnimationFrame(f);
    else {
      var O = si(function(g, b) {
        return Ol.apply(void 0, Xh(b).concat([r(1)]));
      }, o);
      a(Pt(Pt(Pt({}, e), t), O));
    }
  };
  return f = r.isStepper ? h : m, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(u);
    };
  };
};
function oa(e) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e);
}
var aV = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function iV(e, t) {
  if (e == null) return {};
  var r = oV(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function oV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Lc(e) {
  return sV(e) || cV(e) || uV(e) || lV();
}
function lV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uV(e, t) {
  if (e) {
    if (typeof e == "string") return Ys(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ys(e, t);
  }
}
function cV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sV(e) {
  if (Array.isArray(e)) return Ys(e);
}
function Ys(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qh(Object(r), !0).forEach(function(n) {
      ai(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ai(e, t, r) {
  return t = Sx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sx(n.key), n);
  }
}
function pV(e, t, r) {
  return t && dV(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Sx(e) {
  var t = vV(e, "string");
  return oa(t) === "symbol" ? t : String(t);
}
function vV(e, t) {
  if (oa(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (oa(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qs(e, t);
}
function qs(e, t) {
  return qs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, qs(e, t);
}
function mV(e) {
  var t = gV();
  return function() {
    var n = $l(e), a;
    if (t) {
      var i = $l(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Ks(this, a);
  };
}
function Ks(e, t) {
  if (t && (oa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gs(e);
}
function Gs(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gV() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $l(e) {
  return $l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $l(e);
}
var $r = /* @__PURE__ */ function(e) {
  hV(r, e);
  var t = mV(r);
  function r(n, a) {
    var i;
    fV(this, r), i = t.call(this, n, a);
    var o = i.props, l = o.isActive, u = o.attributeName, c = o.from, s = o.to, f = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(Gs(i)), i.changeStyle = i.changeStyle.bind(Gs(i)), !l || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: s
      }), Ks(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, Ks(i);
      i.state = {
        style: u ? ai({}, u, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return pV(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, l = i.canBegin, u = i.attributeName, c = i.shouldReAnimate, s = i.to, f = i.from, d = this.state.style;
      if (l) {
        if (!o) {
          var p = {
            style: u ? ai({}, u, s) : s
          };
          this.state && d && (u && d[u] !== s || !u && d !== s) && this.setState(p);
          return;
        }
        if (!(SW(a.to, s) && a.canBegin && a.isActive)) {
          var h = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var m = h || c ? f : a.to;
          if (this.state && d) {
            var v = {
              style: u ? ai({}, u, m) : m
            };
            (u && d[u] !== m || !u && d !== m) && this.setState(v);
          }
          this.runAnimation(nr(nr({}, this.props), {}, {
            from: m,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), a && a();
    }
  }, {
    key: "handleStyleChange",
    value: function(a) {
      this.changeStyle(a);
    }
  }, {
    key: "changeStyle",
    value: function(a) {
      this.mounted && this.setState({
        style: a
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(a) {
      var i = this, o = a.from, l = a.to, u = a.duration, c = a.easing, s = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = nV(o, l, YW(c), u, this.changeStyle), h = function() {
        i.stopJSAnimation = p();
      };
      this.manager.start([d, s, h, u, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, l = a.begin, u = a.onAnimationStart, c = o[0], s = c.style, f = c.duration, d = f === void 0 ? 0 : f, p = function(m, v, y) {
        if (y === 0)
          return m;
        var x = v.duration, w = v.easing, O = w === void 0 ? "ease" : w, g = v.style, b = v.properties, $ = v.onAnimationEnd, P = y > 0 ? o[y - 1] : v, A = b || Object.keys(g);
        if (typeof O == "function" || O === "spring")
          return [].concat(Lc(m), [i.runJSAnimation.bind(i, {
            from: P.style,
            to: g,
            duration: x,
            easing: O
          }), x]);
        var T = qh(A, x, O), C = nr(nr(nr({}, P.style), g), {}, {
          transition: T
        });
        return [].concat(Lc(m), [C, x, $]).filter(jW);
      };
      return this.manager.start([u].concat(Lc(o.reduce(p, [s, Math.max(d, l)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = EW());
      var i = a.begin, o = a.duration, l = a.attributeName, u = a.to, c = a.easing, s = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, p = a.children, h = this.manager;
      if (this.unSubscribe = h.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var m = l ? ai({}, l, u) : u, v = qh(Object.keys(m), o, c);
      h.start([s, i, nr(nr({}, m), {}, {
        transition: v
      }), o, f]);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, i = a.children;
      a.begin;
      var o = a.duration;
      a.attributeName, a.easing;
      var l = a.isActive;
      a.steps, a.from, a.to, a.canBegin, a.onAnimationEnd, a.shouldReAnimate, a.onAnimationReStart;
      var u = iV(a, aV), c = S.Children.count(i), s = this.state.style;
      if (typeof i == "function")
        return i(s);
      if (!l || c === 0 || o <= 0)
        return i;
      var f = function(p) {
        var h = p.props, m = h.style, v = m === void 0 ? {} : m, y = h.className, x = /* @__PURE__ */ S.cloneElement(p, nr(nr({}, u), {}, {
          style: nr(nr({}, v), s),
          className: y
        }));
        return x;
      };
      return c === 1 ? f(S.Children.only(i)) : /* @__PURE__ */ N.createElement("div", null, S.Children.map(i, function(d) {
        return f(d);
      }));
    }
  }]), r;
}(S.PureComponent);
$r.displayName = "Animate";
$r.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
$r.propTypes = {
  from: _e.oneOfType([_e.object, _e.string]),
  to: _e.oneOfType([_e.object, _e.string]),
  attributeName: _e.string,
  // animation duration
  duration: _e.number,
  begin: _e.number,
  easing: _e.oneOfType([_e.string, _e.func]),
  steps: _e.arrayOf(_e.shape({
    duration: _e.number.isRequired,
    style: _e.object.isRequired,
    easing: _e.oneOfType([_e.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), _e.func]),
    // transition css properties(dash case), optional
    properties: _e.arrayOf("string"),
    onAnimationEnd: _e.func
  })),
  children: _e.oneOfType([_e.node, _e.func]),
  isActive: _e.bool,
  canBegin: _e.bool,
  onAnimationEnd: _e.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: _e.bool,
  onAnimationStart: _e.func,
  onAnimationReStart: _e.func
};
_e.object, _e.object, _e.object, _e.element;
_e.object, _e.object, _e.object, _e.oneOfType([_e.array, _e.element]), _e.any;
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
function Pl() {
  return Pl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pl.apply(this, arguments);
}
function yV(e, t) {
  return SV(e) || wV(e, t) || xV(e, t) || bV();
}
function bV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xV(e, t) {
  if (e) {
    if (typeof e == "string") return Jh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jh(e, t);
  }
}
function Jh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function SV(e) {
  if (Array.isArray(e)) return e;
}
function em(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? em(Object(r), !0).forEach(function(n) {
      OV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OV(e, t, r) {
  return t = $V(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $V(e) {
  var t = PV(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}
function PV(e, t) {
  if (Ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rm = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), l = a >= 0 ? 1 : -1, u = n >= 0 ? 1 : -1, c = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, s;
  if (o > 0 && i instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      f[d] = i[d] > o ? o : i[d];
    s = "M".concat(t, ",").concat(r + l * f[0]), f[0] > 0 && (s += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(c, ",").concat(t + u * f[0], ",").concat(r)), s += "L ".concat(t + n - u * f[1], ",").concat(r), f[1] > 0 && (s += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + l * f[1])), s += "L ".concat(t + n, ",").concat(r + a - l * f[2]), f[2] > 0 && (s += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(c, `,
        `).concat(t + n - u * f[2], ",").concat(r + a)), s += "L ".concat(t + u * f[3], ",").concat(r + a), f[3] > 0 && (s += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + a - l * f[3])), s += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var h = Math.min(o, i);
    s = "M ".concat(t, ",").concat(r + l * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(t + u * h, ",").concat(r, `
            L `).concat(t + n - u * h, ",").concat(r, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + l * h, `
            L `).concat(t + n, ",").concat(r + a - l * h, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(t + n - u * h, ",").concat(r + a, `
            L `).concat(t + u * h, ",").concat(r + a, `
            A `).concat(h, ",").concat(h, ",0,0,").concat(c, ",").concat(t, ",").concat(r + a - l * h, " Z");
  } else
    s = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return s;
}, CV = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, l = r.width, u = r.height;
  if (Math.abs(l) > 0 && Math.abs(u) > 0) {
    var c = Math.min(i, i + l), s = Math.max(i, i + l), f = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= s && a >= f && a <= d;
  }
  return !1;
}, _V = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Rd = function(t) {
  var r = tm(tm({}, _V), t), n = S.useRef(), a = S.useState(-1), i = yV(a, 2), o = i[0], l = i[1];
  S.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var O = n.current.getTotalLength();
        O && l(O);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, s = r.width, f = r.height, d = r.radius, p = r.className, h = r.animationEasing, m = r.animationDuration, v = r.animationBegin, y = r.isAnimationActive, x = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || s !== +s || f !== +f || s === 0 || f === 0)
    return null;
  var w = Ae("recharts-rectangle", p);
  return x ? /* @__PURE__ */ N.createElement($r, {
    canBegin: o > 0,
    from: {
      width: s,
      height: f,
      x: u,
      y: c
    },
    to: {
      width: s,
      height: f,
      x: u,
      y: c
    },
    duration: m,
    animationEasing: h,
    isActive: x
  }, function(O) {
    var g = O.width, b = O.height, $ = O.x, P = O.y;
    return /* @__PURE__ */ N.createElement($r, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: m,
      isActive: y,
      easing: h
    }, /* @__PURE__ */ N.createElement("path", Pl({}, ve(r, !0), {
      className: w,
      d: rm($, P, g, b, d),
      ref: n
    })));
  }) : /* @__PURE__ */ N.createElement("path", Pl({}, ve(r, !0), {
    className: w,
    d: rm(u, c, s, f, d)
  }));
}, AV = ["points", "className", "baseLinePoints", "connectNulls"];
function Fn() {
  return Fn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fn.apply(this, arguments);
}
function EV(e, t) {
  if (e == null) return {};
  var r = TV(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function nm(e) {
  return DV(e) || jV(e) || IV(e) || MV();
}
function MV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IV(e, t) {
  if (e) {
    if (typeof e == "string") return Xs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xs(e, t);
  }
}
function jV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function DV(e) {
  if (Array.isArray(e)) return Xs(e);
}
function Xs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var am = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, kV = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    am(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), am(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, fi = function(t, r) {
  var n = kV(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(nm(i), nm(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, l, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(l.x, ",").concat(l.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, NV = function(t, r, n) {
  var a = fi(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(fi(r.reverse(), n).slice(1));
}, RV = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = EV(t, AV);
  if (!r || !r.length)
    return null;
  var l = Ae("recharts-polygon", n);
  if (a && a.length) {
    var u = o.stroke && o.stroke !== "none", c = NV(r, a, i);
    return /* @__PURE__ */ N.createElement("g", {
      className: l
    }, /* @__PURE__ */ N.createElement("path", Fn({}, ve(o, !0), {
      fill: c.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: c
    })), u ? /* @__PURE__ */ N.createElement("path", Fn({}, ve(o, !0), {
      fill: "none",
      d: fi(r, i)
    })) : null, u ? /* @__PURE__ */ N.createElement("path", Fn({}, ve(o, !0), {
      fill: "none",
      d: fi(a, i)
    })) : null);
  }
  var s = fi(r, i);
  return /* @__PURE__ */ N.createElement("path", Fn({}, ve(o, !0), {
    fill: s.slice(-1) === "Z" ? o.fill : "none",
    className: l,
    d: s
  }));
};
function Zs() {
  return Zs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zs.apply(this, arguments);
}
var Pu = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = Ae("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ N.createElement("circle", Zs({}, ve(t, !1), Uo(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function Li(e) {
  "@babel/helpers - typeof";
  return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Li(e);
}
var LV = ["x", "y", "top", "left", "width", "height", "className"];
function Qs() {
  return Qs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qs.apply(this, arguments);
}
function im(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function BV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? im(Object(r), !0).forEach(function(n) {
      FV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : im(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FV(e, t, r) {
  return t = HV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HV(e) {
  var t = WV(e, "string");
  return Li(t) == "symbol" ? t : t + "";
}
function WV(e, t) {
  if (Li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VV(e, t) {
  if (e == null) return {};
  var r = zV(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zV(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var UV = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, YV = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, l = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, s = t.width, f = s === void 0 ? 0 : s, d = t.height, p = d === void 0 ? 0 : d, h = t.className, m = VV(t, LV), v = BV({
    x: n,
    y: i,
    top: l,
    left: c,
    width: f,
    height: p
  }, m);
  return !ee(n) || !ee(i) || !ee(f) || !ee(p) || !ee(l) || !ee(c) ? null : /* @__PURE__ */ N.createElement("path", Qs({}, ve(v, !0), {
    className: Ae("recharts-cross", h),
    d: UV(n, i, f, p, l, c)
  }));
}, qV = xu, KV = R0, GV = Jr;
function XV(e, t) {
  return e && e.length ? qV(e, GV(t), KV) : void 0;
}
var ZV = XV;
const QV = /* @__PURE__ */ Le(ZV);
var JV = xu, e8 = Jr, t8 = L0;
function r8(e, t) {
  return e && e.length ? JV(e, e8(t), t8) : void 0;
}
var n8 = r8;
const a8 = /* @__PURE__ */ Le(n8);
var i8 = ["cx", "cy", "angle", "ticks", "axisLine"], o8 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function la(e) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e);
}
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, di.apply(this, arguments);
}
function om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? om(Object(r), !0).forEach(function(n) {
      Cu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : om(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lm(e, t) {
  if (e == null) return {};
  var r = l8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function l8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function u8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function um(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $x(n.key), n);
  }
}
function c8(e, t, r) {
  return t && um(e.prototype, t), r && um(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s8(e, t, r) {
  return t = Cl(t), f8(e, Ox() ? Reflect.construct(t, r || [], Cl(e).constructor) : t.apply(e, r));
}
function f8(e, t) {
  if (t && (la(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return d8(e);
}
function d8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ox() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ox = function() {
    return !!e;
  })();
}
function Cl(e) {
  return Cl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Cl(e);
}
function p8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Js(e, t);
}
function Js(e, t) {
  return Js = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Js(e, t);
}
function Cu(e, t, r) {
  return t = $x(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $x(e) {
  var t = v8(e, "string");
  return la(t) == "symbol" ? t : t + "";
}
function v8(e, t) {
  if (la(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _u = /* @__PURE__ */ function(e) {
  function t() {
    return u8(this, t), s8(this, t, arguments);
  }
  return p8(t, e), c8(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var a = n.coordinate, i = this.props, o = i.angle, l = i.cx, u = i.cy;
        return Je(l, u, a, o);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, a;
      switch (n) {
        case "left":
          a = "end";
          break;
        case "right":
          a = "start";
          break;
        default:
          a = "middle";
          break;
      }
      return a;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, l = n.ticks, u = QV(l, function(s) {
        return s.coordinate || 0;
      }), c = a8(l, function(s) {
        return s.coordinate || 0;
      });
      return {
        cx: a,
        cy: i,
        startAngle: o,
        endAngle: o,
        innerRadius: c.coordinate || 0,
        outerRadius: u.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, l = n.ticks, u = n.axisLine, c = lm(n, i8), s = l.reduce(function(h, m) {
        return [Math.min(h[0], m.coordinate), Math.max(h[1], m.coordinate)];
      }, [1 / 0, -1 / 0]), f = Je(a, i, s[0], o), d = Je(a, i, s[1], o), p = cn(cn(cn({}, ve(c, !1)), {}, {
        fill: "none"
      }, ve(u, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ N.createElement("line", di({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, l = a.angle, u = a.tickFormatter, c = a.stroke, s = lm(a, o8), f = this.getTickTextAnchor(), d = ve(s, !1), p = ve(o, !1), h = i.map(function(m, v) {
        var y = n.getTickValueCoord(m), x = cn(cn(cn(cn({
          textAnchor: f,
          transform: "rotate(".concat(90 - l, ", ").concat(y.x, ", ").concat(y.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: c
        }, p), {}, {
          index: v
        }, y), {}, {
          payload: m
        });
        return /* @__PURE__ */ N.createElement(Ne, di({
          className: Ae("recharts-polar-radius-axis-tick", fx(o)),
          key: "tick-".concat(m.coordinate)
        }, $n(n.props, m, v)), t.renderTickItem(o, x, u ? u(m.value, v) : m.value));
      });
      return /* @__PURE__ */ N.createElement(Ne, {
        className: "recharts-polar-radius-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.axisLine, o = n.tick;
      return !a || !a.length ? null : /* @__PURE__ */ N.createElement(Ne, {
        className: Ae("recharts-polar-radius-axis", this.props.className)
      }, i && this.renderAxisLine(), o && this.renderTicks(), wt.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ N.isValidElement(n) ? o = /* @__PURE__ */ N.cloneElement(n, a) : we(n) ? o = n(a) : o = /* @__PURE__ */ N.createElement(Pn, di({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
}(S.PureComponent);
Cu(_u, "displayName", "PolarRadiusAxis");
Cu(_u, "axisType", "radiusAxis");
Cu(_u, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function ua(e) {
  "@babel/helpers - typeof";
  return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ua(e);
}
function vn() {
  return vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vn.apply(this, arguments);
}
function cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cm(Object(r), !0).forEach(function(n) {
      Au(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Cx(n.key), n);
  }
}
function m8(e, t, r) {
  return t && sm(e.prototype, t), r && sm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g8(e, t, r) {
  return t = _l(t), y8(e, Px() ? Reflect.construct(t, r || [], _l(e).constructor) : t.apply(e, r));
}
function y8(e, t) {
  if (t && (ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return b8(e);
}
function b8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Px() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Px = function() {
    return !!e;
  })();
}
function _l(e) {
  return _l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _l(e);
}
function x8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ef(e, t);
}
function ef(e, t) {
  return ef = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ef(e, t);
}
function Au(e, t, r) {
  return t = Cx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Cx(e) {
  var t = w8(e, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function w8(e, t) {
  if (ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var S8 = Math.PI / 180, fm = 1e-5, Eu = /* @__PURE__ */ function(e) {
  function t() {
    return h8(this, t), g8(this, t, arguments);
  }
  return x8(t, e), m8(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var a = this.props, i = a.cx, o = a.cy, l = a.radius, u = a.orientation, c = a.tickSize, s = c || 8, f = Je(i, o, l, n.coordinate), d = Je(i, o, l + (u === "inner" ? -1 : 1) * s, n.coordinate);
        return {
          x1: f.x,
          y1: f.y,
          x2: d.x,
          y2: d.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var a = this.props.orientation, i = Math.cos(-n.coordinate * S8), o;
      return i > fm ? o = a === "outer" ? "start" : "end" : i < -fm ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, l = n.axisLine, u = n.axisLineType, c = sn(sn({}, ve(this.props, !1)), {}, {
        fill: "none"
      }, ve(l, !1));
      if (u === "circle")
        return /* @__PURE__ */ N.createElement(Pu, vn({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var s = this.props.ticks, f = s.map(function(d) {
        return Je(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ N.createElement(RV, vn({
        className: "recharts-polar-angle-axis-line"
      }, c, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, l = a.tickLine, u = a.tickFormatter, c = a.stroke, s = ve(this.props, !1), f = ve(o, !1), d = sn(sn({}, s), {}, {
        fill: "none"
      }, ve(l, !1)), p = i.map(function(h, m) {
        var v = n.getTickLineCoord(h), y = n.getTickTextAnchor(h), x = sn(sn(sn({
          textAnchor: y
        }, s), {}, {
          stroke: "none",
          fill: c
        }, f), {}, {
          index: m,
          payload: h,
          x: v.x2,
          y: v.y2
        });
        return /* @__PURE__ */ N.createElement(Ne, vn({
          className: Ae("recharts-polar-angle-axis-tick", fx(o)),
          key: "tick-".concat(h.coordinate)
        }, $n(n.props, h, m)), l && /* @__PURE__ */ N.createElement("line", vn({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, v)), o && t.renderTickItem(o, x, u ? u(h.value, m) : h.value));
      });
      return /* @__PURE__ */ N.createElement(Ne, {
        className: "recharts-polar-angle-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.radius, o = n.axisLine;
      return i <= 0 || !a || !a.length ? null : /* @__PURE__ */ N.createElement(Ne, {
        className: Ae("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ N.isValidElement(n) ? o = /* @__PURE__ */ N.cloneElement(n, a) : we(n) ? o = n(a) : o = /* @__PURE__ */ N.createElement(Pn, vn({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
}(S.PureComponent);
Au(Eu, "displayName", "PolarAngleAxis");
Au(Eu, "axisType", "angleAxis");
Au(Eu, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var O8 = jb, $8 = O8(Object.getPrototypeOf, Object), P8 = $8, C8 = Br, _8 = P8, A8 = Fr, E8 = "[object Object]", T8 = Function.prototype, M8 = Object.prototype, _x = T8.toString, I8 = M8.hasOwnProperty, j8 = _x.call(Object);
function D8(e) {
  if (!A8(e) || C8(e) != E8)
    return !1;
  var t = _8(e);
  if (t === null)
    return !0;
  var r = I8.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && _x.call(r) == j8;
}
var k8 = D8;
const N8 = /* @__PURE__ */ Le(k8);
var R8 = Br, L8 = Fr, B8 = "[object Boolean]";
function F8(e) {
  return e === !0 || e === !1 || L8(e) && R8(e) == B8;
}
var H8 = F8;
const W8 = /* @__PURE__ */ Le(H8);
function Bi(e) {
  "@babel/helpers - typeof";
  return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bi(e);
}
function Al() {
  return Al = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Al.apply(this, arguments);
}
function V8(e, t) {
  return q8(e) || Y8(e, t) || U8(e, t) || z8();
}
function z8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U8(e, t) {
  if (e) {
    if (typeof e == "string") return dm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dm(e, t);
  }
}
function dm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Y8(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function q8(e) {
  if (Array.isArray(e)) return e;
}
function pm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pm(Object(r), !0).forEach(function(n) {
      K8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function K8(e, t, r) {
  return t = G8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G8(e) {
  var t = X8(e, "string");
  return Bi(t) == "symbol" ? t : t + "";
}
function X8(e, t) {
  if (Bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hm = function(t, r, n, a, i) {
  var o = n - a, l;
  return l = "M ".concat(t, ",").concat(r), l += "L ".concat(t + n, ",").concat(r), l += "L ".concat(t + n - o / 2, ",").concat(r + i), l += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), l += "L ".concat(t, ",").concat(r, " Z"), l;
}, Z8 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Q8 = function(t) {
  var r = vm(vm({}, Z8), t), n = S.useRef(), a = S.useState(-1), i = V8(a, 2), o = i[0], l = i[1];
  S.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && l(w);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, s = r.upperWidth, f = r.lowerWidth, d = r.height, p = r.className, h = r.animationEasing, m = r.animationDuration, v = r.animationBegin, y = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || s !== +s || f !== +f || d !== +d || s === 0 && f === 0 || d === 0)
    return null;
  var x = Ae("recharts-trapezoid", p);
  return y ? /* @__PURE__ */ N.createElement($r, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: u,
      y: c
    },
    to: {
      upperWidth: s,
      lowerWidth: f,
      height: d,
      x: u,
      y: c
    },
    duration: m,
    animationEasing: h,
    isActive: y
  }, function(w) {
    var O = w.upperWidth, g = w.lowerWidth, b = w.height, $ = w.x, P = w.y;
    return /* @__PURE__ */ N.createElement($r, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: m,
      easing: h
    }, /* @__PURE__ */ N.createElement("path", Al({}, ve(r, !0), {
      className: x,
      d: hm($, P, O, g, b),
      ref: n
    })));
  }) : /* @__PURE__ */ N.createElement("g", null, /* @__PURE__ */ N.createElement("path", Al({}, ve(r, !0), {
    className: x,
    d: hm(u, c, s, f, d)
  })));
}, J8 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Fi(e) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e);
}
function e6(e, t) {
  if (e == null) return {};
  var r = t6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function t6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function mm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function El(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mm(Object(r), !0).forEach(function(n) {
      r6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r6(e, t, r) {
  return t = n6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n6(e) {
  var t = a6(e, "string");
  return Fi(t) == "symbol" ? t : t + "";
}
function a6(e, t) {
  if (Fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function i6(e, t) {
  return El(El({}, t), e);
}
function o6(e, t) {
  return e === "symbols";
}
function gm(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ N.createElement(Rd, r);
    case "trapezoid":
      return /* @__PURE__ */ N.createElement(Q8, r);
    case "sector":
      return /* @__PURE__ */ N.createElement(vx, r);
    case "symbols":
      if (o6(t))
        return /* @__PURE__ */ N.createElement(td, r);
      break;
    default:
      return null;
  }
}
function l6(e) {
  return /* @__PURE__ */ S.isValidElement(e) ? e.props : e;
}
function Ax(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? i6 : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, l = e.isActive, u = e6(e, J8), c;
  if (/* @__PURE__ */ S.isValidElement(t))
    c = /* @__PURE__ */ S.cloneElement(t, El(El({}, u), l6(t)));
  else if (we(t))
    c = t(u);
  else if (N8(t) && !W8(t)) {
    var s = a(t, u);
    c = /* @__PURE__ */ N.createElement(gm, {
      shapeType: r,
      elementProps: s
    });
  } else {
    var f = u;
    c = /* @__PURE__ */ N.createElement(gm, {
      shapeType: r,
      elementProps: f
    });
  }
  return l ? /* @__PURE__ */ N.createElement(Ne, {
    className: o
  }, c) : c;
}
function Tu(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Mu(e, t) {
  return t != null && "sectors" in e.props;
}
function Hi(e, t) {
  return t != null && "points" in e.props;
}
function u6(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function c6(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function s6(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function f6(e, t) {
  var r;
  return Tu(e, t) ? r = u6 : Mu(e, t) ? r = c6 : Hi(e, t) && (r = s6), r;
}
function d6(e, t) {
  var r;
  return Tu(e, t) ? r = "trapezoids" : Mu(e, t) ? r = "sectors" : Hi(e, t) && (r = "points"), r;
}
function p6(e, t) {
  if (Tu(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Mu(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Hi(e, t) ? t.payload : {};
}
function v6(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = d6(r, t), i = p6(r, t), o = n.filter(function(u, c) {
    var s = aa(i, u), f = r.props[a].filter(function(h) {
      var m = f6(r, t);
      return m(h, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = c === d;
    return s && p;
  }), l = n.indexOf(o[o.length - 1]);
  return l;
}
var Lo;
function ca(e) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e);
}
function Hn() {
  return Hn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hn.apply(this, arguments);
}
function ym(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ym(Object(r), !0).forEach(function(n) {
      Zt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Tx(n.key), n);
  }
}
function m6(e, t, r) {
  return t && bm(e.prototype, t), r && bm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g6(e, t, r) {
  return t = Tl(t), y6(e, Ex() ? Reflect.construct(t, r || [], Tl(e).constructor) : t.apply(e, r));
}
function y6(e, t) {
  if (t && (ca(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return b6(e);
}
function b6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ex() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ex = function() {
    return !!e;
  })();
}
function Tl(e) {
  return Tl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Tl(e);
}
function x6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && tf(e, t);
}
function tf(e, t) {
  return tf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, tf(e, t);
}
function Zt(e, t, r) {
  return t = Tx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tx(e) {
  var t = w6(e, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function w6(e, t) {
  if (ca(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Wr = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return h6(this, t), n = g6(this, t, [r]), Zt(n, "pieRef", null), Zt(n, "sectorRefs", []), Zt(n, "id", Ia("recharts-pie-")), Zt(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), we(a) && a();
    }), Zt(n, "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), we(a) && a();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return x6(t, e), m6(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var a = this.props.activeIndex;
      return Array.isArray(a) ? a.indexOf(n) !== -1 : n === a;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.label, l = i.labelLine, u = i.dataKey, c = i.valueKey, s = ve(this.props, !1), f = ve(o, !1), d = ve(l, !1), p = o && o.offsetRadius || 20, h = n.map(function(m, v) {
        var y = (m.startAngle + m.endAngle) / 2, x = Je(m.cx, m.cy, m.outerRadius + p, y), w = Ze(Ze(Ze(Ze({}, s), m), {}, {
          stroke: "none"
        }, f), {}, {
          index: v,
          textAnchor: t.getTextAnchor(x.x, m.cx)
        }, x), O = Ze(Ze(Ze(Ze({}, s), m), {}, {
          fill: "none",
          stroke: m.fill
        }, d), {}, {
          index: v,
          points: [Je(m.cx, m.cy, m.outerRadius, y), x]
        }), g = u;
        return Ce(u) && Ce(c) ? g = "value" : Ce(u) && (g = c), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ N.createElement(Ne, {
          key: "label-".concat(m.startAngle, "-").concat(m.endAngle, "-").concat(m.midAngle, "-").concat(v)
        }, l && t.renderLabelLineItem(l, O, "line"), t.renderLabelItem(o, w, ht(m, g)));
      });
      return /* @__PURE__ */ N.createElement(Ne, {
        className: "recharts-pie-labels"
      }, h);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.activeShape, l = i.blendStroke, u = i.inactiveShape;
      return n.map(function(c, s) {
        if ((c == null ? void 0 : c.startAngle) === 0 && (c == null ? void 0 : c.endAngle) === 0 && n.length !== 1) return null;
        var f = a.isActiveIndex(s), d = u && a.hasActiveIndex() ? u : null, p = f ? o : d, h = Ze(Ze({}, c), {}, {
          stroke: l ? c.fill : c.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ N.createElement(Ne, Hn({
          ref: function(v) {
            v && !a.sectorRefs.includes(v) && a.sectorRefs.push(v);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, $n(a.props, c, s), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(c == null ? void 0 : c.startAngle, "-").concat(c == null ? void 0 : c.endAngle, "-").concat(c.midAngle, "-").concat(s)
        }), /* @__PURE__ */ N.createElement(Ax, Hn({
          option: p,
          isActive: f,
          shapeType: "sector"
        }, h)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.sectors, o = a.isAnimationActive, l = a.animationBegin, u = a.animationDuration, c = a.animationEasing, s = a.animationId, f = this.state, d = f.prevSectors, p = f.prevIsAnimationActive;
      return /* @__PURE__ */ N.createElement($r, {
        begin: l,
        duration: u,
        isActive: o,
        easing: c,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(s, "-").concat(p),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(h) {
        var m = h.t, v = [], y = i && i[0], x = y.startAngle;
        return i.forEach(function(w, O) {
          var g = d && d[O], b = O > 0 ? qt(w, "paddingAngle", 0) : 0;
          if (g) {
            var $ = Rt(g.endAngle - g.startAngle, w.endAngle - w.startAngle), P = Ze(Ze({}, w), {}, {
              startAngle: x + b,
              endAngle: x + $(m) + b
            });
            v.push(P), x = P.endAngle;
          } else {
            var A = w.endAngle, T = w.startAngle, C = Rt(0, A - T), M = C(m), D = Ze(Ze({}, w), {}, {
              startAngle: x + b,
              endAngle: x + M + b
            });
            v.push(D), x = D.endAngle;
          }
        }), /* @__PURE__ */ N.createElement(Ne, null, n.renderSectorsStatically(v));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var a = this;
      n.onkeydown = function(i) {
        if (!i.altKey)
          switch (i.key) {
            case "ArrowLeft": {
              var o = ++a.state.sectorToFocus % a.sectorRefs.length;
              a.sectorRefs[o].focus(), a.setState({
                sectorToFocus: o
              });
              break;
            }
            case "ArrowRight": {
              var l = --a.state.sectorToFocus < 0 ? a.sectorRefs.length - 1 : a.state.sectorToFocus % a.sectorRefs.length;
              a.sectorRefs[l].focus(), a.setState({
                sectorToFocus: l
              });
              break;
            }
            case "Escape": {
              a.sectorRefs[a.state.sectorToFocus].blur(), a.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, a = n.sectors, i = n.isAnimationActive, o = this.state.prevSectors;
      return i && a && a.length && (!o || !aa(o, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.hide, o = a.sectors, l = a.className, u = a.label, c = a.cx, s = a.cy, f = a.innerRadius, d = a.outerRadius, p = a.isAnimationActive, h = this.state.isAnimationFinished;
      if (i || !o || !o.length || !ee(c) || !ee(s) || !ee(f) || !ee(d))
        return null;
      var m = Ae("recharts-pie", l);
      return /* @__PURE__ */ N.createElement(Ne, {
        tabIndex: this.props.rootTabIndex,
        className: m,
        ref: function(y) {
          n.pieRef = y;
        }
      }, this.renderSectors(), u && this.renderLabels(o), wt.renderCallByParent(this.props, null, !1), (!p || h) && Dr.renderCallByParent(this.props, o, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return a.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: a.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== a.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, a) {
      return n > a ? "start" : n < a ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ N.isValidElement(n))
        return /* @__PURE__ */ N.cloneElement(n, a);
      if (we(n))
        return n(a);
      var o = Ae("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ N.createElement(Kn, Hn({}, a, {
        key: i,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ N.isValidElement(n))
        return /* @__PURE__ */ N.cloneElement(n, a);
      var o = i;
      if (we(n) && (o = n(a), /* @__PURE__ */ N.isValidElement(o)))
        return o;
      var l = Ae("recharts-pie-label-text", typeof n != "boolean" && !we(n) ? n.className : "");
      return /* @__PURE__ */ N.createElement(Pn, Hn({}, a, {
        alignmentBaseline: "middle",
        className: l
      }), o);
    }
  }]);
}(S.PureComponent);
Lo = Wr;
Zt(Wr, "displayName", "Pie");
Zt(Wr, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !xr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Zt(Wr, "parseDeltaAngle", function(e, t) {
  var r = jt(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Zt(Wr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = ve(e, !1), a = Jt(r, pu);
  return t && t.length ? t.map(function(i, o) {
    return Ze(Ze(Ze({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return Ze(Ze({}, n), i.props);
  }) : [];
});
Zt(Wr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = sx(a, i), l = n + Dt(e.cx, a, a / 2), u = r + Dt(e.cy, i, i / 2), c = Dt(e.innerRadius, o, 0), s = Dt(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: l,
    cy: u,
    innerRadius: c,
    outerRadius: s,
    maxRadius: f
  };
});
Zt(Wr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? Ze(Ze({}, t.type.defaultProps), t.props) : t.props, a = Lo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, l = n.endAngle, u = n.paddingAngle, c = n.dataKey, s = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), h = Lo.parseCoordinateOfPie(n, r), m = Lo.parseDeltaAngle(o, l), v = Math.abs(m), y = c;
  Ce(c) && Ce(f) ? (Ir(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = "value") : Ce(c) && (Ir(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = f);
  var x = a.filter(function(P) {
    return ht(P, y, 0) !== 0;
  }).length, w = (v >= 360 ? x : x - 1) * u, O = v - x * p - w, g = a.reduce(function(P, A) {
    var T = ht(A, y, 0);
    return P + (ee(T) ? T : 0);
  }, 0), b;
  if (g > 0) {
    var $;
    b = a.map(function(P, A) {
      var T = ht(P, y, 0), C = ht(P, s, A), M = (ee(T) ? T : 0) / g, D;
      A ? D = $.endAngle + jt(m) * u * (T !== 0 ? 1 : 0) : D = o;
      var I = D + jt(m) * ((T !== 0 ? p : 0) + M * O), _ = (D + I) / 2, E = (h.innerRadius + h.outerRadius) / 2, j = [{
        name: C,
        value: T,
        payload: P,
        dataKey: y,
        type: d
      }], k = Je(h.cx, h.cy, E, _);
      return $ = Ze(Ze(Ze({
        percent: M,
        cornerRadius: i,
        name: C,
        tooltipPayload: j,
        midAngle: _,
        middleRadius: E,
        tooltipPosition: k
      }, P), h), {}, {
        value: ht(P, y),
        startAngle: D,
        endAngle: I,
        payload: P,
        paddingAngle: jt(m) * u
      }), $;
    });
  }
  return Ze(Ze({}, h), {}, {
    sectors: b,
    data: a
  });
});
var S6 = Math.ceil, O6 = Math.max;
function $6(e, t, r, n) {
  for (var a = -1, i = O6(S6((t - e) / (r || 1)), 0), o = Array(i); i--; )
    o[n ? i : ++a] = e, e += r;
  return o;
}
var P6 = $6, C6 = Zb, xm = 1 / 0, _6 = 17976931348623157e292;
function A6(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = C6(e), e === xm || e === -xm) {
    var t = e < 0 ? -1 : 1;
    return t * _6;
  }
  return e === e ? e : 0;
}
var E6 = A6, T6 = P6, M6 = du, Bc = E6;
function I6(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && M6(t, r, n) && (r = n = void 0), t = Bc(t), r === void 0 ? (r = t, t = 0) : r = Bc(r), n = n === void 0 ? t < r ? 1 : -1 : Bc(n), T6(t, r, n, e);
  };
}
var j6 = I6, D6 = j6, k6 = D6(), N6 = k6;
const Ml = /* @__PURE__ */ Le(N6);
function Wi(e) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e);
}
function wm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wm(Object(r), !0).forEach(function(n) {
      Mx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mx(e, t, r) {
  return t = R6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R6(e) {
  var t = L6(e, "string");
  return Wi(t) == "symbol" ? t : t + "";
}
function L6(e, t) {
  if (Wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var B6 = ["Webkit", "Moz", "O", "ms"], F6 = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = B6.reduce(function(i, o) {
    return Sm(Sm({}, i), {}, Mx({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function sa(e) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e);
}
function Il() {
  return Il = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Il.apply(this, arguments);
}
function Om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), !0).forEach(function(n) {
      zt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $m(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jx(n.key), n);
  }
}
function W6(e, t, r) {
  return t && $m(e.prototype, t), r && $m(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function V6(e, t, r) {
  return t = jl(t), z6(e, Ix() ? Reflect.construct(t, r || [], jl(e).constructor) : t.apply(e, r));
}
function z6(e, t) {
  if (t && (sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return U6(e);
}
function U6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ix() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ix = function() {
    return !!e;
  })();
}
function jl(e) {
  return jl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jl(e);
}
function Y6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rf(e, t);
}
function rf(e, t) {
  return rf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, rf(e, t);
}
function zt(e, t, r) {
  return t = jx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jx(e) {
  var t = q6(e, "string");
  return sa(t) == "symbol" ? t : t + "";
}
function q6(e, t) {
  if (sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var K6 = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, l = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = ui().domain(Ml(0, u)).range([i, i + o - l]), s = c.domain().map(function(f) {
    return c(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(a),
    scale: c,
    scaleValues: s
  };
}, Pm = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, fa = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return H6(this, t), n = V6(this, t, [r]), zt(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), zt(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), zt(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var a = n.props, i = a.endIndex, o = a.onDragEnd, l = a.startIndex;
        o == null || o({
          endIndex: i,
          startIndex: l
        });
      }), n.detachDragEndListener();
    }), zt(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), zt(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), zt(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), zt(n, "handleSlideDragStart", function(a) {
      var i = Pm(a) ? a.changedTouches[0] : a;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: i.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return Y6(t, e), W6(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, l = this.props, u = l.gap, c = l.data, s = c.length - 1, f = Math.min(a, i), d = Math.max(a, i), p = t.getIndexInRange(o, f), h = t.getIndexInRange(o, d);
      return {
        startIndex: p - p % u,
        endIndex: h === s ? s : h - h % u
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, l = a.dataKey, u = ht(i[n], l, n);
      return we(o) ? o(u, n) : u;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var a = this.state, i = a.slideMoveStartX, o = a.startX, l = a.endX, u = this.props, c = u.x, s = u.width, f = u.travellerWidth, d = u.startIndex, p = u.endIndex, h = u.onChange, m = n.pageX - i;
      m > 0 ? m = Math.min(m, c + s - f - l, c + s - f - o) : m < 0 && (m = Math.max(m, c - o, c - l));
      var v = this.getIndex({
        startX: o + m,
        endX: l + m
      });
      (v.startIndex !== d || v.endIndex !== p) && h && h(v), this.setState({
        startX: o + m,
        endX: l + m,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = Pm(a) ? a.changedTouches[0] : a;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: i.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, l = a.endX, u = a.startX, c = this.state[o], s = this.props, f = s.x, d = s.width, p = s.travellerWidth, h = s.onChange, m = s.gap, v = s.data, y = {
        startX: this.state.startX,
        endX: this.state.endX
      }, x = n.pageX - i;
      x > 0 ? x = Math.min(x, f + d - p - c) : x < 0 && (x = Math.max(x, f - c)), y[o] = c + x;
      var w = this.getIndex(y), O = w.startIndex, g = w.endIndex, b = function() {
        var P = v.length - 1;
        return o === "startX" && (l > u ? O % m === 0 : g % m === 0) || l < u && g === P || o === "endX" && (l > u ? g % m === 0 : O % m === 0) || l > u && g === P;
      };
      this.setState(zt(zt({}, o, c + x), "brushMoveStartX", n.pageX), function() {
        h && b() && h(w);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, l = o.scaleValues, u = o.startX, c = o.endX, s = this.state[a], f = l.indexOf(s);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= l.length)) {
          var p = l[d];
          a === "startX" && p >= c || a === "endX" && p <= u || this.setState(zt({}, a, p), function() {
            i.props.onChange(i.getIndex({
              startX: i.state.startX,
              endX: i.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, u = n.fill, c = n.stroke;
      return /* @__PURE__ */ N.createElement("rect", {
        stroke: c,
        fill: u,
        x: a,
        y: i,
        width: o,
        height: l
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, u = n.data, c = n.children, s = n.padding, f = S.Children.only(c);
      return f ? /* @__PURE__ */ N.cloneElement(f, {
        x: a,
        y: i,
        width: o,
        height: l,
        margin: s,
        compact: !0,
        data: u
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, l = this, u = this.props, c = u.y, s = u.travellerWidth, f = u.height, d = u.traveller, p = u.ariaLabel, h = u.data, m = u.startIndex, v = u.endIndex, y = Math.max(n, this.props.x), x = Fc(Fc({}, ve(this.props, !1)), {}, {
        x: y,
        y: c,
        width: s,
        height: f
      }), w = p || "Min value: ".concat((i = h[m]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = h[v]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ N.createElement(Ne, {
        tabIndex: 0,
        role: "slider",
        "aria-label": w,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[a],
        onTouchStart: this.travellerDragStartHandlers[a],
        onKeyDown: function(g) {
          ["ArrowLeft", "ArrowRight"].includes(g.key) && (g.preventDefault(), g.stopPropagation(), l.handleTravellerMoveKeyboard(g.key === "ArrowRight" ? 1 : -1, a));
        },
        onFocus: function() {
          l.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          l.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(d, x));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, l = i.height, u = i.stroke, c = i.travellerWidth, s = Math.min(n, a) + c, f = Math.max(Math.abs(a - n) - c, 0);
      return /* @__PURE__ */ N.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: u,
        fillOpacity: 0.2,
        x: s,
        y: o,
        width: f,
        height: l
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, l = n.height, u = n.travellerWidth, c = n.stroke, s = this.state, f = s.startX, d = s.endX, p = 5, h = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ N.createElement(Ne, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ N.createElement(Pn, Il({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + l / 2
      }, h), this.getTextOfTick(a)), /* @__PURE__ */ N.createElement(Pn, Il({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + u + p,
        y: o + l / 2
      }, h), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, l = n.x, u = n.y, c = n.width, s = n.height, f = n.alwaysShowText, d = this.state, p = d.startX, h = d.endX, m = d.isTextActive, v = d.isSlideMoving, y = d.isTravellerMoving, x = d.isTravellerFocused;
      if (!a || !a.length || !ee(l) || !ee(u) || !ee(c) || !ee(s) || c <= 0 || s <= 0)
        return null;
      var w = Ae("recharts-brush", i), O = N.Children.count(o) === 1, g = F6("userSelect", "none");
      return /* @__PURE__ */ N.createElement(Ne, {
        className: w,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: g
      }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(p, h), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(h, "endX"), (m || v || y || x || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, l = n.height, u = n.stroke, c = Math.floor(i + l / 2) - 1;
      return /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: l,
        fill: u,
        stroke: "none"
      }), /* @__PURE__ */ N.createElement("line", {
        x1: a + 1,
        y1: c,
        x2: a + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ N.createElement("line", {
        x1: a + 1,
        y1: c + 2,
        x2: a + o - 1,
        y2: c + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, a) {
      var i;
      return /* @__PURE__ */ N.isValidElement(n) ? i = /* @__PURE__ */ N.cloneElement(n, a) : we(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, l = n.x, u = n.travellerWidth, c = n.updateId, s = n.startIndex, f = n.endIndex;
      if (i !== a.prevData || c !== a.prevUpdateId)
        return Fc({
          prevData: i,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: l,
          prevWidth: o
        }, i && i.length ? K6({
          data: i,
          width: o,
          x: l,
          travellerWidth: u,
          startIndex: s,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || l !== a.prevX || u !== a.prevTravellerWidth)) {
        a.scale.range([l, l + o - u]);
        var d = a.scale.domain().map(function(p) {
          return a.scale(p);
        });
        return {
          prevData: i,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: l,
          prevWidth: o,
          startX: a.scale(n.startIndex),
          endX: a.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, a) {
      for (var i = n.length, o = 0, l = i - 1; l - o > 1; ) {
        var u = Math.floor((o + l) / 2);
        n[u] > a ? l = u : o = u;
      }
      return a >= n[l] ? l : o;
    }
  }]);
}(S.PureComponent);
zt(fa, "displayName", "Brush");
zt(fa, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var G6 = cd;
function X6(e, t) {
  var r;
  return G6(e, function(n, a, i) {
    return r = t(n, a, i), !r;
  }), !!r;
}
var Z6 = X6, Q6 = Pb, J6 = Jr, ez = Z6, tz = Ht, rz = du;
function nz(e, t, r) {
  var n = tz(e) ? Q6 : ez;
  return r && rz(e, t, r) && (t = void 0), n(e, J6(t));
}
var az = nz;
const iz = /* @__PURE__ */ Le(az);
var Sr = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, Cm = Yb;
function oz(e, t, r) {
  t == "__proto__" && Cm ? Cm(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var lz = oz, uz = lz, cz = zb, sz = Jr;
function fz(e, t) {
  var r = {};
  return t = sz(t), cz(e, function(n, a, i) {
    uz(r, a, t(n, a, i));
  }), r;
}
var dz = fz;
const pz = /* @__PURE__ */ Le(dz);
function vz(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var hz = vz, mz = cd;
function gz(e, t) {
  var r = !0;
  return mz(e, function(n, a, i) {
    return r = !!t(n, a, i), r;
  }), r;
}
var yz = gz, bz = hz, xz = yz, wz = Jr, Sz = Ht, Oz = du;
function $z(e, t, r) {
  var n = Sz(e) ? bz : xz;
  return r && Oz(e, t, r) && (t = void 0), n(e, wz(t));
}
var Pz = $z;
const Cz = /* @__PURE__ */ Le(Pz);
var _z = ["x", "y"];
function da(e) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, da(e);
}
function nf() {
  return nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nf.apply(this, arguments);
}
function _m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), !0).forEach(function(n) {
      Az(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Az(e, t, r) {
  return t = Ez(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ez(e) {
  var t = Tz(e, "string");
  return da(t) == "symbol" ? t : t + "";
}
function Tz(e, t) {
  if (da(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mz(e, t) {
  if (e == null) return {};
  var r = Iz(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Iz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function jz(e, t) {
  var r = e.x, n = e.y, a = Mz(e, _z), i = "".concat(r), o = parseInt(i, 10), l = "".concat(n), u = parseInt(l, 10), c = "".concat(t.height || a.height), s = parseInt(c, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
  return ti(ti(ti(ti(ti({}, t), a), o ? {
    x: o
  } : {}), u ? {
    y: u
  } : {}), {}, {
    height: s,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function Am(e) {
  return /* @__PURE__ */ N.createElement(Ax, nf({
    shapeType: "rectangle",
    propTransformer: jz,
    activeClassName: "recharts-active-bar"
  }, e));
}
var Dz = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (je.env.NODE_ENV !== "production" ? Bt(!1, "minPointSize callback function received a value with type of ".concat(da(n), ". Currently only numbers are supported.")) : Bt()), r);
  };
}, kz = ["value", "background"], Dx;
function pa(e) {
  "@babel/helpers - typeof";
  return pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pa(e);
}
function Nz(e, t) {
  if (e == null) return {};
  var r = Rz(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Rz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Dl() {
  return Dl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dl.apply(this, arguments);
}
function Em(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Em(Object(r), !0).forEach(function(n) {
      Gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Lz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Nx(n.key), n);
  }
}
function Bz(e, t, r) {
  return t && Tm(e.prototype, t), r && Tm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fz(e, t, r) {
  return t = kl(t), Hz(e, kx() ? Reflect.construct(t, r || [], kl(e).constructor) : t.apply(e, r));
}
function Hz(e, t) {
  if (t && (pa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Wz(e);
}
function Wz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kx = function() {
    return !!e;
  })();
}
function kl(e) {
  return kl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kl(e);
}
function Vz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && af(e, t);
}
function af(e, t) {
  return af = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, af(e, t);
}
function Gr(e, t, r) {
  return t = Nx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nx(e) {
  var t = zz(e, "string");
  return pa(t) == "symbol" ? t : t + "";
}
function zz(e, t) {
  if (pa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (pa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var io = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Lz(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = Fz(this, t, [].concat(a)), Gr(r, "state", {
      isAnimationFinished: !1
    }), Gr(r, "id", Ia("recharts-bar-")), Gr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Gr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return Vz(t, e), Bz(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, l = i.dataKey, u = i.activeIndex, c = i.activeBar, s = ve(this.props, !1);
      return n && n.map(function(f, d) {
        var p = d === u, h = p ? c : o, m = ft(ft(ft({}, s), f), {}, {
          isActive: p,
          option: h,
          index: d,
          dataKey: l,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ N.createElement(Ne, Dl({
          className: "recharts-bar-rectangle"
        }, $n(a.props, f, d), {
          key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value)
        }), /* @__PURE__ */ N.createElement(Am, m));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, l = a.isAnimationActive, u = a.animationBegin, c = a.animationDuration, s = a.animationEasing, f = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ N.createElement($r, {
        begin: u,
        duration: c,
        isActive: l,
        easing: s,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var h = p.t, m = i.map(function(v, y) {
          var x = d && d[y];
          if (x) {
            var w = Rt(x.x, v.x), O = Rt(x.y, v.y), g = Rt(x.width, v.width), b = Rt(x.height, v.height);
            return ft(ft({}, v), {}, {
              x: w(h),
              y: O(h),
              width: g(h),
              height: b(h)
            });
          }
          if (o === "horizontal") {
            var $ = Rt(0, v.height), P = $(h);
            return ft(ft({}, v), {}, {
              y: v.y + v.height - P,
              height: P
            });
          }
          var A = Rt(0, v.width), T = A(h);
          return ft(ft({}, v), {}, {
            width: T
          });
        });
        return /* @__PURE__ */ N.createElement(Ne, null, n.renderRectanglesStatically(m));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !aa(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, l = a.activeIndex, u = ve(this.props.background, !1);
      return i.map(function(c, s) {
        c.value;
        var f = c.background, d = Nz(c, kz);
        if (!f)
          return null;
        var p = ft(ft(ft(ft(ft({}, d), {}, {
          fill: "#eee"
        }, f), u), $n(n.props, c, s)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: s,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ N.createElement(Am, Dl({
          key: "background-bar-".concat(s),
          option: n.props.background,
          isActive: s === l
        }, p));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, l = i.xAxis, u = i.yAxis, c = i.layout, s = i.children, f = Jt(s, $u);
      if (!f)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(v, y) {
        var x = Array.isArray(v.value) ? v.value[1] : v.value;
        return {
          x: v.x,
          y: v.y,
          value: x,
          errorVal: ht(v, y)
        };
      }, h = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ N.createElement(Ne, h, f.map(function(m) {
        return /* @__PURE__ */ N.cloneElement(m, {
          key: "error-bar-".concat(a, "-").concat(m.props.dataKey),
          data: o,
          xAxis: l,
          yAxis: u,
          layout: c,
          offset: d,
          dataPointFormatter: p
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, l = n.xAxis, u = n.yAxis, c = n.left, s = n.top, f = n.width, d = n.height, p = n.isAnimationActive, h = n.background, m = n.id;
      if (a || !i || !i.length)
        return null;
      var v = this.state.isAnimationFinished, y = Ae("recharts-bar", o), x = l && l.allowDataOverflow, w = u && u.allowDataOverflow, O = x || w, g = Ce(m) ? this.id : m;
      return /* @__PURE__ */ N.createElement(Ne, {
        className: y
      }, x || w ? /* @__PURE__ */ N.createElement("defs", null, /* @__PURE__ */ N.createElement("clipPath", {
        id: "clipPath-".concat(g)
      }, /* @__PURE__ */ N.createElement("rect", {
        x: x ? c : c - f / 2,
        y: w ? s : s - d / 2,
        width: x ? f : f * 2,
        height: w ? d : d * 2
      }))) : null, /* @__PURE__ */ N.createElement(Ne, {
        className: "recharts-bar-rectangles",
        clipPath: O ? "url(#clipPath-".concat(g, ")") : null
      }, h ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, g), (!p || v) && Dr.renderCallByParent(this.props, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: a.curData
      } : n.data !== a.curData ? {
        curData: n.data
      } : null;
    }
  }]);
}(S.PureComponent);
Dx = io;
Gr(io, "displayName", "Bar");
Gr(io, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !xr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Gr(io, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, l = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, s = e.dataStartIndex, f = e.displayedData, d = e.offset, p = N3(n, r);
  if (!p)
    return null;
  var h = t.layout, m = r.type.defaultProps, v = m !== void 0 ? ft(ft({}, m), r.props) : r.props, y = v.dataKey, x = v.children, w = v.minPointSize, O = h === "horizontal" ? o : i, g = c ? O.scale.domain() : null, b = V3({
    numericAxis: O
  }), $ = Jt(x, pu), P = f.map(function(A, T) {
    var C, M, D, I, _, E;
    c ? C = R3(c[s + T], g) : (C = ht(A, y), Array.isArray(C) || (C = [b, C]));
    var j = Dz(w, Dx.defaultProps.minPointSize)(C[1], T);
    if (h === "horizontal") {
      var k, R = [o.scale(C[0]), o.scale(C[1])], B = R[0], H = R[1];
      M = bh({
        axis: i,
        ticks: l,
        bandSize: a,
        offset: p.offset,
        entry: A,
        index: T
      }), D = (k = H ?? B) !== null && k !== void 0 ? k : void 0, I = p.size;
      var L = B - H;
      if (_ = Number.isNaN(L) ? 0 : L, E = {
        x: M,
        y: o.y,
        width: I,
        height: o.height
      }, Math.abs(j) > 0 && Math.abs(_) < Math.abs(j)) {
        var V = jt(_ || j) * (Math.abs(j) - Math.abs(_));
        D -= V, _ += V;
      }
    } else {
      var z = [i.scale(C[0]), i.scale(C[1])], K = z[0], J = z[1];
      if (M = K, D = bh({
        axis: o,
        ticks: u,
        bandSize: a,
        offset: p.offset,
        entry: A,
        index: T
      }), I = J - K, _ = p.size, E = {
        x: i.x,
        y: D,
        width: i.width,
        height: _
      }, Math.abs(j) > 0 && Math.abs(I) < Math.abs(j)) {
        var te = jt(I || j) * (Math.abs(j) - Math.abs(I));
        I += te;
      }
    }
    return ft(ft(ft({}, A), {}, {
      x: M,
      y: D,
      width: I,
      height: _,
      value: c ? C : C[1],
      payload: A,
      background: E
    }, $ && $[T] && $[T].props), {}, {
      tooltipPayload: [ux(r, A)],
      tooltipPosition: {
        x: M + I / 2,
        y: D + _ / 2
      }
    });
  });
  return ft({
    data: P,
    layout: h
  }, d);
});
function Vi(e) {
  "@babel/helpers - typeof";
  return Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vi(e);
}
function Uz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Rx(n.key), n);
  }
}
function Yz(e, t, r) {
  return t && Mm(e.prototype, t), r && Mm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Im(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Im(Object(r), !0).forEach(function(n) {
      Iu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Im(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Iu(e, t, r) {
  return t = Rx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rx(e) {
  var t = qz(e, "string");
  return Vi(t) == "symbol" ? t : t + "";
}
function qz(e, t) {
  if (Vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kz = function(t, r, n, a, i) {
  var o = t.width, l = t.height, u = t.layout, c = t.children, s = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: l - n.bottom,
    bottomMirror: l - n.bottom
  }, d = !!Ut(c, io);
  return s.reduce(function(p, h) {
    var m = r[h], v = m.orientation, y = m.domain, x = m.padding, w = x === void 0 ? {} : x, O = m.mirror, g = m.reversed, b = "".concat(v).concat(O ? "Mirror" : ""), $, P, A, T, C;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var M = y[1] - y[0], D = 1 / 0, I = m.categoricalDomain.sort();
      if (I.forEach(function(z, K) {
        K > 0 && (D = Math.min((z || 0) - (I[K - 1] || 0), D));
      }), Number.isFinite(D)) {
        var _ = D / M, E = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && ($ = _ * E / 2), m.padding === "no-gap") {
          var j = Dt(t.barCategoryGap, _ * E), k = _ * E / 2;
          $ = k - j - (k - j) / E * j;
        }
      }
    }
    a === "xAxis" ? P = [n.left + (w.left || 0) + ($ || 0), n.left + n.width - (w.right || 0) - ($ || 0)] : a === "yAxis" ? P = u === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + ($ || 0), n.top + n.height - (w.bottom || 0) - ($ || 0)] : P = m.range, g && (P = [P[1], P[0]]);
    var R = ax(m, i, d), B = R.scale, H = R.realScaleType;
    B.domain(y).range(P), ix(B);
    var L = ox(B, ir(ir({}, m), {}, {
      realScaleType: H
    }));
    a === "xAxis" ? (C = v === "top" && !O || v === "bottom" && O, A = n.left, T = f[b] - C * m.height) : a === "yAxis" && (C = v === "left" && !O || v === "right" && O, A = f[b] - C * m.width, T = n.top);
    var V = ir(ir(ir({}, m), L), {}, {
      realScaleType: H,
      x: A,
      y: T,
      scale: B,
      width: a === "xAxis" ? n.width : m.width,
      height: a === "yAxis" ? n.height : m.height
    });
    return V.bandSize = yl(V, L), !m.hide && a === "xAxis" ? f[b] += (C ? -1 : 1) * V.height : m.hide || (f[b] += (C ? -1 : 1) * V.width), ir(ir({}, p), {}, Iu({}, h, V));
  }, {});
}, Lx = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, Gz = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return Lx({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, Bx = /* @__PURE__ */ function() {
  function e(t) {
    Uz(this, e), this.scale = t;
  }
  return Yz(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.bandAware, i = n.position;
      if (r !== void 0) {
        if (i)
          switch (i) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var l = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + l;
            }
            default:
              return this.scale(r);
          }
        if (a) {
          var u = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + u;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), a = n[0], i = n[n.length - 1];
      return a <= i ? r >= a && r <= i : r >= i && r <= a;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
}();
Iu(Bx, "EPS", 1e-4);
var Ld = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return ir(ir({}, n), {}, Iu({}, a, Bx.create(t[a])));
  }, {});
  return ir(ir({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, l = i.position;
      return pz(a, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: l
        });
      });
    },
    isInRange: function(a) {
      return Cz(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function Xz(e) {
  return (e % 180 + 180) % 180;
}
var Zz = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = Xz(a), o = i * Math.PI / 180, l = Math.atan(n / r), u = o > l && o < Math.PI - l ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, Qz = $C(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function Nl(e) {
  "@babel/helpers - typeof";
  return Nl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nl(e);
}
var Fx = /* @__PURE__ */ S.createContext(void 0), Hx = /* @__PURE__ */ S.createContext(void 0), Wx = /* @__PURE__ */ S.createContext(void 0), Jz = /* @__PURE__ */ S.createContext({}), Vx = /* @__PURE__ */ S.createContext(void 0), zx = /* @__PURE__ */ S.createContext(0), Ux = /* @__PURE__ */ S.createContext(0), jm = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, l = t.children, u = t.width, c = t.height, s = Qz(i);
  return /* @__PURE__ */ N.createElement(Fx.Provider, {
    value: n
  }, /* @__PURE__ */ N.createElement(Hx.Provider, {
    value: a
  }, /* @__PURE__ */ N.createElement(Jz.Provider, {
    value: i
  }, /* @__PURE__ */ N.createElement(Wx.Provider, {
    value: s
  }, /* @__PURE__ */ N.createElement(Vx.Provider, {
    value: o
  }, /* @__PURE__ */ N.createElement(zx.Provider, {
    value: c
  }, /* @__PURE__ */ N.createElement(Ux.Provider, {
    value: u
  }, l)))))));
}, e4 = function() {
  return S.useContext(Vx);
};
function Yx(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var qx = function(t) {
  var r = S.useContext(Fx);
  r == null && (je.env.NODE_ENV !== "production" ? Bt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Bt());
  var n = r[t];
  return n == null && (je.env.NODE_ENV !== "production" ? Bt(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(Nl(t), "]. ").concat(Yx(r))) : Bt()), n;
}, Kx = function(t) {
  var r = S.useContext(Hx);
  r == null && (je.env.NODE_ENV !== "production" ? Bt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Bt());
  var n = r[t];
  return n == null && (je.env.NODE_ENV !== "production" ? Bt(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(Nl(t), "]. ").concat(Yx(r))) : Bt()), n;
}, t4 = function() {
  var t = S.useContext(Wx);
  return t;
}, Gx = function() {
  return S.useContext(Ux);
}, Xx = function() {
  return S.useContext(zx);
};
function va(e) {
  "@babel/helpers - typeof";
  return va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, va(e);
}
function r4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Qx(n.key), n);
  }
}
function a4(e, t, r) {
  return t && n4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function i4(e, t, r) {
  return t = Rl(t), o4(e, Zx() ? Reflect.construct(t, r || [], Rl(e).constructor) : t.apply(e, r));
}
function o4(e, t) {
  if (t && (va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return l4(e);
}
function l4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zx = function() {
    return !!e;
  })();
}
function Rl(e) {
  return Rl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rl(e);
}
function u4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && of(e, t);
}
function of(e, t) {
  return of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, of(e, t);
}
function Dm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function km(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dm(Object(r), !0).forEach(function(n) {
      Bd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bd(e, t, r) {
  return t = Qx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Qx(e) {
  var t = c4(e, "string");
  return va(t) == "symbol" ? t : t + "";
}
function c4(e, t) {
  if (va(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (va(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function s4(e, t) {
  return v4(e) || p4(e, t) || d4(e, t) || f4();
}
function f4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d4(e, t) {
  if (e) {
    if (typeof e == "string") return Nm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nm(e, t);
  }
}
function Nm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function p4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function v4(e) {
  if (Array.isArray(e)) return e;
}
function lf() {
  return lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lf.apply(this, arguments);
}
var h4 = function(t, r) {
  var n;
  return /* @__PURE__ */ N.isValidElement(t) ? n = /* @__PURE__ */ N.cloneElement(t, r) : we(t) ? n = t(r) : n = /* @__PURE__ */ N.createElement("line", lf({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, m4 = function(t, r, n, a, i, o, l, u, c) {
  var s = i.x, f = i.y, d = i.width, p = i.height;
  if (n) {
    var h = c.y, m = t.y.apply(h, {
      position: o
    });
    if (Sr(c, "discard") && !t.y.isInRange(m))
      return null;
    var v = [{
      x: s + d,
      y: m
    }, {
      x: s,
      y: m
    }];
    return u === "left" ? v.reverse() : v;
  }
  if (r) {
    var y = c.x, x = t.x.apply(y, {
      position: o
    });
    if (Sr(c, "discard") && !t.x.isInRange(x))
      return null;
    var w = [{
      x,
      y: f + p
    }, {
      x,
      y: f
    }];
    return l === "top" ? w.reverse() : w;
  }
  if (a) {
    var O = c.segment, g = O.map(function(b) {
      return t.apply(b, {
        position: o
      });
    });
    return Sr(c, "discard") && iz(g, function(b) {
      return !t.isInRange(b);
    }) ? null : g;
  }
  return null;
};
function g4(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, l = e.className, u = e.alwaysShow, c = e4(), s = qx(a), f = Kx(i), d = t4();
  if (!c || !d)
    return null;
  Ir(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Ld({
    x: s.scale,
    y: f.scale
  }), h = gt(t), m = gt(r), v = n && n.length === 2, y = m4(p, h, m, v, d, e.position, s.orientation, f.orientation, e);
  if (!y)
    return null;
  var x = s4(y, 2), w = x[0], O = w.x, g = w.y, b = x[1], $ = b.x, P = b.y, A = Sr(e, "hidden") ? "url(#".concat(c, ")") : void 0, T = km(km({
    clipPath: A
  }, ve(e, !0)), {}, {
    x1: O,
    y1: g,
    x2: $,
    y2: P
  });
  return /* @__PURE__ */ N.createElement(Ne, {
    className: Ae("recharts-reference-line", l)
  }, h4(o, T), wt.renderCallByParent(e, Gz({
    x1: O,
    y1: g,
    x2: $,
    y2: P
  })));
}
var Fd = /* @__PURE__ */ function(e) {
  function t() {
    return r4(this, t), i4(this, t, arguments);
  }
  return u4(t, e), a4(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ N.createElement(g4, this.props);
    }
  }]);
}(N.Component);
Bd(Fd, "displayName", "ReferenceLine");
Bd(Fd, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uf.apply(this, arguments);
}
function ha(e) {
  "@babel/helpers - typeof";
  return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ha(e);
}
function Rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rm(Object(r), !0).forEach(function(n) {
      ju(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ew(n.key), n);
  }
}
function x4(e, t, r) {
  return t && b4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function w4(e, t, r) {
  return t = Ll(t), S4(e, Jx() ? Reflect.construct(t, r || [], Ll(e).constructor) : t.apply(e, r));
}
function S4(e, t) {
  if (t && (ha(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return O4(e);
}
function O4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Jx = function() {
    return !!e;
  })();
}
function Ll(e) {
  return Ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ll(e);
}
function $4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cf(e, t);
}
function cf(e, t) {
  return cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, cf(e, t);
}
function ju(e, t, r) {
  return t = ew(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ew(e) {
  var t = P4(e, "string");
  return ha(t) == "symbol" ? t : t + "";
}
function P4(e, t) {
  if (ha(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ha(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var C4 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Ld({
    x: a.scale,
    y: i.scale
  }), l = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Sr(t, "discard") && !o.isInRange(l) ? null : l;
}, Du = /* @__PURE__ */ function(e) {
  function t() {
    return y4(this, t), w4(this, t, arguments);
  }
  return $4(t, e), x4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, l = n.alwaysShow, u = n.clipPathId, c = gt(a), s = gt(i);
      if (Ir(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !s)
        return null;
      var f = C4(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, h = this.props, m = h.shape, v = h.className, y = Sr(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, x = Lm(Lm({
        clipPath: y
      }, ve(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ N.createElement(Ne, {
        className: Ae("recharts-reference-dot", v)
      }, t.renderDot(m, x), wt.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(N.Component);
ju(Du, "displayName", "ReferenceDot");
ju(Du, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
ju(Du, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ N.isValidElement(e) ? r = /* @__PURE__ */ N.cloneElement(e, t) : we(e) ? r = e(t) : r = /* @__PURE__ */ N.createElement(Pu, uf({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sf.apply(this, arguments);
}
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
function Bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bm(Object(r), !0).forEach(function(n) {
      ku(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rw(n.key), n);
  }
}
function E4(e, t, r) {
  return t && A4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function T4(e, t, r) {
  return t = Bl(t), M4(e, tw() ? Reflect.construct(t, r || [], Bl(e).constructor) : t.apply(e, r));
}
function M4(e, t) {
  if (t && (ma(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return I4(e);
}
function I4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tw = function() {
    return !!e;
  })();
}
function Bl(e) {
  return Bl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bl(e);
}
function j4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ff(e, t);
}
function ff(e, t) {
  return ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ff(e, t);
}
function ku(e, t, r) {
  return t = rw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rw(e) {
  var t = D4(e, "string");
  return ma(t) == "symbol" ? t : t + "";
}
function D4(e, t) {
  if (ma(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ma(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var k4 = function(t, r, n, a, i) {
  var o = i.x1, l = i.x2, u = i.y1, c = i.y2, s = i.xAxis, f = i.yAxis;
  if (!s || !f) return null;
  var d = Ld({
    x: s.scale,
    y: f.scale
  }), p = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(u, {
      position: "start"
    }) : d.y.rangeMin
  }, h = {
    x: r ? d.x.apply(l, {
      position: "end"
    }) : d.x.rangeMax,
    y: a ? d.y.apply(c, {
      position: "end"
    }) : d.y.rangeMax
  };
  return Sr(i, "discard") && (!d.isInRange(p) || !d.isInRange(h)) ? null : Lx(p, h);
}, Nu = /* @__PURE__ */ function(e) {
  function t() {
    return _4(this, t), T4(this, t, arguments);
  }
  return j4(t, e), E4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, l = n.y2, u = n.className, c = n.alwaysShow, s = n.clipPathId;
      Ir(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = gt(a), d = gt(i), p = gt(o), h = gt(l), m = this.props.shape;
      if (!f && !d && !p && !h && !m)
        return null;
      var v = k4(f, d, p, h, this.props);
      if (!v && !m)
        return null;
      var y = Sr(this.props, "hidden") ? "url(#".concat(s, ")") : void 0;
      return /* @__PURE__ */ N.createElement(Ne, {
        className: Ae("recharts-reference-area", u)
      }, t.renderRect(m, Fm(Fm({
        clipPath: y
      }, ve(this.props, !0)), v)), wt.renderCallByParent(this.props, v));
    }
  }]);
}(N.Component);
ku(Nu, "displayName", "ReferenceArea");
ku(Nu, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
ku(Nu, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ N.isValidElement(e) ? r = /* @__PURE__ */ N.cloneElement(e, t) : we(e) ? r = e(t) : r = /* @__PURE__ */ N.createElement(Rd, sf({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function nw(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function N4(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return Zz(n, r);
}
function R4(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, l = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + l
  } : {
    start: n ? a + o : i + l,
    end: n ? a : i
  };
}
function Fl(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function L4(e, t) {
  return nw(e, t + 1);
}
function B4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, l = t.end, u = 0, c = 1, s = o, f = function() {
    var h = n == null ? void 0 : n[u];
    if (h === void 0)
      return {
        v: nw(n, c)
      };
    var m = u, v, y = function() {
      return v === void 0 && (v = r(h, m)), v;
    }, x = h.coordinate, w = u === 0 || Fl(e, x, y, s, l);
    w || (u = 0, s = o, c += 1), w && (s = x + e * (y() / 2 + a), u += c);
  }, d; c <= i.length; )
    if (d = f(), d) return d.v;
  return [];
}
function zi(e) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zi(e);
}
function Hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hm(Object(r), !0).forEach(function(n) {
      F4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F4(e, t, r) {
  return t = H4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H4(e) {
  var t = W4(e, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function W4(e, t) {
  if (zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = i.length, l = t.start, u = t.end, c = function(d) {
    var p = i[d], h, m = function() {
      return h === void 0 && (h = r(p, d)), h;
    };
    if (d === o - 1) {
      var v = e * (p.coordinate + e * m() / 2 - u);
      i[d] = p = _t(_t({}, p), {}, {
        tickCoord: v > 0 ? p.coordinate - v * e : p.coordinate
      });
    } else
      i[d] = p = _t(_t({}, p), {}, {
        tickCoord: p.coordinate
      });
    var y = Fl(e, p.tickCoord, m, l, u);
    y && (u = p.tickCoord - e * (m() / 2 + a), i[d] = _t(_t({}, p), {}, {
      isShow: !0
    }));
  }, s = o - 1; s >= 0; s--)
    c(s);
  return i;
}
function z4(e, t, r, n, a, i) {
  var o = (n || []).slice(), l = o.length, u = t.start, c = t.end;
  if (i) {
    var s = n[l - 1], f = r(s, l - 1), d = e * (s.coordinate + e * f / 2 - c);
    o[l - 1] = s = _t(_t({}, s), {}, {
      tickCoord: d > 0 ? s.coordinate - d * e : s.coordinate
    });
    var p = Fl(e, s.tickCoord, function() {
      return f;
    }, u, c);
    p && (c = s.tickCoord - e * (f / 2 + a), o[l - 1] = _t(_t({}, s), {}, {
      isShow: !0
    }));
  }
  for (var h = i ? l - 1 : l, m = function(x) {
    var w = o[x], O, g = function() {
      return O === void 0 && (O = r(w, x)), O;
    };
    if (x === 0) {
      var b = e * (w.coordinate - e * g() / 2 - u);
      o[x] = w = _t(_t({}, w), {}, {
        tickCoord: b < 0 ? w.coordinate - b * e : w.coordinate
      });
    } else
      o[x] = w = _t(_t({}, w), {}, {
        tickCoord: w.coordinate
      });
    var $ = Fl(e, w.tickCoord, g, u, c);
    $ && (u = w.tickCoord + e * (g() / 2 + a), o[x] = _t(_t({}, w), {}, {
      isShow: !0
    }));
  }, v = 0; v < h; v++)
    m(v);
  return o;
}
function U4(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, l = e.orientation, u = e.interval, c = e.tickFormatter, s = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (ee(u) || xr.isSsr)
    return L4(a, typeof u == "number" && ee(u) ? u : 0);
  var d = [], p = l === "top" || l === "bottom" ? "width" : "height", h = s && p === "width" ? li(s, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, m = function(w, O) {
    var g = we(c) ? c(w.value, O) : w.value;
    return p === "width" ? N4(li(g, {
      fontSize: t,
      letterSpacing: r
    }), h, f) : li(g, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, v = a.length >= 2 ? jt(a[1].coordinate - a[0].coordinate) : 1, y = R4(i, v, p);
  return u === "equidistantPreserveStart" ? B4(v, y, m, a, o) : (u === "preserveStart" || u === "preserveStartEnd" ? d = z4(v, y, m, a, o, u === "preserveStartEnd") : d = V4(v, y, m, a, o), d.filter(function(x) {
    return x.isShow;
  }));
}
var Y4 = ["viewBox"], q4 = ["viewBox"], K4 = ["ticks"];
function ga(e) {
  "@babel/helpers - typeof";
  return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ga(e);
}
function Wn() {
  return Wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wn.apply(this, arguments);
}
function Wm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wm(Object(r), !0).forEach(function(n) {
      Hd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hc(e, t) {
  if (e == null) return {};
  var r = G4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function G4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function X4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, iw(n.key), n);
  }
}
function Z4(e, t, r) {
  return t && Vm(e.prototype, t), r && Vm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Q4(e, t, r) {
  return t = Hl(t), J4(e, aw() ? Reflect.construct(t, r || [], Hl(e).constructor) : t.apply(e, r));
}
function J4(e, t) {
  if (t && (ga(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return e5(e);
}
function e5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function aw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (aw = function() {
    return !!e;
  })();
}
function Hl(e) {
  return Hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Hl(e);
}
function t5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && df(e, t);
}
function df(e, t) {
  return df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, df(e, t);
}
function Hd(e, t, r) {
  return t = iw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iw(e) {
  var t = r5(e, "string");
  return ga(t) == "symbol" ? t : t + "";
}
function r5(e, t) {
  if (ga(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ru = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return X4(this, t), n = Q4(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return t5(t, e), Z4(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = Hc(n, Y4), l = this.props, u = l.viewBox, c = Hc(l, q4);
      return !zn(i, u) || !zn(o, c) || !zn(a, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var a = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        a && this.setState({
          fontSize: window.getComputedStyle(a).fontSize,
          letterSpacing: window.getComputedStyle(a).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var a = this.props, i = a.x, o = a.y, l = a.width, u = a.height, c = a.orientation, s = a.tickSize, f = a.mirror, d = a.tickMargin, p, h, m, v, y, x, w = f ? -1 : 1, O = n.tickSize || s, g = ee(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          p = h = n.coordinate, v = o + +!f * u, m = v - w * O, x = m - w * d, y = g;
          break;
        case "left":
          m = v = n.coordinate, h = i + +!f * l, p = h - w * O, y = p - w * d, x = g;
          break;
        case "right":
          m = v = n.coordinate, h = i + +f * l, p = h + w * O, y = p + w * d, x = g;
          break;
        default:
          p = h = n.coordinate, v = o + +f * u, m = v + w * O, x = m + w * d, y = g;
          break;
      }
      return {
        line: {
          x1: p,
          y1: m,
          x2: h,
          y2: v
        },
        tick: {
          x: y,
          y: x
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, a = n.orientation, i = n.mirror, o;
      switch (a) {
        case "left":
          o = i ? "start" : "end";
          break;
        case "right":
          o = i ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, a = n.orientation, i = n.mirror, o = "end";
      switch (a) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = i ? "start" : "end";
          break;
        default:
          o = i ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, u = n.orientation, c = n.mirror, s = n.axisLine, f = It(It(It({}, ve(this.props, !1)), ve(s, !1)), {}, {
        fill: "none"
      });
      if (u === "top" || u === "bottom") {
        var d = +(u === "top" && !c || u === "bottom" && c);
        f = It(It({}, f), {}, {
          x1: a,
          y1: i + d * l,
          x2: a + o,
          y2: i + d * l
        });
      } else {
        var p = +(u === "left" && !c || u === "right" && c);
        f = It(It({}, f), {}, {
          x1: a + p * o,
          y1: i,
          x2: a + p * o,
          y2: i + l
        });
      }
      return /* @__PURE__ */ N.createElement("line", Wn({}, f, {
        className: Ae("recharts-cartesian-axis-line", qt(s, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, a, i) {
        var o = this, l = this.props, u = l.tickLine, c = l.stroke, s = l.tick, f = l.tickFormatter, d = l.unit, p = U4(It(It({}, this.props), {}, {
          ticks: n
        }), a, i), h = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), v = ve(this.props, !1), y = ve(s, !1), x = It(It({}, v), {}, {
          fill: "none"
        }, ve(u, !1)), w = p.map(function(O, g) {
          var b = o.getTickLineCoord(O), $ = b.line, P = b.tick, A = It(It(It(It({
            textAnchor: h,
            verticalAnchor: m
          }, v), {}, {
            stroke: "none",
            fill: c
          }, y), P), {}, {
            index: g,
            payload: O,
            visibleTicksCount: p.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ N.createElement(Ne, Wn({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, $n(o.props, O, g)), u && /* @__PURE__ */ N.createElement("line", Wn({}, x, $, {
            className: Ae("recharts-cartesian-axis-tick-line", qt(u, "className"))
          })), s && t.renderTickItem(s, A, "".concat(we(f) ? f(O.value, g) : O.value).concat(d || "")));
        });
        return /* @__PURE__ */ N.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, w);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.axisLine, o = a.width, l = a.height, u = a.ticksGenerator, c = a.className, s = a.hide;
      if (s)
        return null;
      var f = this.props, d = f.ticks, p = Hc(f, K4), h = d;
      return we(u) && (h = d && d.length > 0 ? u(this.props) : u(p)), o <= 0 || l <= 0 || !h || !h.length ? null : /* @__PURE__ */ N.createElement(Ne, {
        className: Ae("recharts-cartesian-axis", c),
        ref: function(v) {
          n.layerReference = v;
        }
      }, i && this.renderAxisLine(), this.renderTicks(h, this.state.fontSize, this.state.letterSpacing), wt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ N.isValidElement(n) ? o = /* @__PURE__ */ N.cloneElement(n, a) : we(n) ? o = n(a) : o = /* @__PURE__ */ N.createElement(Pn, Wn({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
}(S.Component);
Hd(Ru, "displayName", "CartesianAxis");
Hd(Ru, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var n5 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], a5 = ["key"], ow;
function ya(e) {
  "@babel/helpers - typeof";
  return ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ya(e);
}
function lw(e, t) {
  if (e == null) return {};
  var r = i5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function i5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function bn() {
  return bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bn.apply(this, arguments);
}
function zm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zm(Object(r), !0).forEach(function(n) {
      gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Um(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cw(n.key), n);
  }
}
function l5(e, t, r) {
  return t && Um(e.prototype, t), r && Um(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function u5(e, t, r) {
  return t = Wl(t), c5(e, uw() ? Reflect.construct(t, r || [], Wl(e).constructor) : t.apply(e, r));
}
function c5(e, t) {
  if (t && (ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return s5(e);
}
function s5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uw = function() {
    return !!e;
  })();
}
function Wl(e) {
  return Wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wl(e);
}
function f5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pf(e, t);
}
function pf(e, t) {
  return pf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, pf(e, t);
}
function gr(e, t, r) {
  return t = cw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cw(e) {
  var t = d5(e, "string");
  return ya(t) == "symbol" ? t : t + "";
}
function d5(e, t) {
  if (ya(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    o5(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = u5(this, t, [].concat(a)), gr(r, "state", {
      isAnimationFinished: !0
    }), gr(r, "id", Ia("recharts-area-")), gr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), we(o) && o();
    }), gr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), we(o) && o();
    }), r;
  }
  return f5(t, e), l5(t, [{
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive, l = this.state.isAnimationFinished;
      if (o && !l)
        return null;
      var u = this.props, c = u.dot, s = u.points, f = u.dataKey, d = ve(this.props, !1), p = ve(c, !0), h = s.map(function(v, y) {
        var x = Yr(Yr(Yr({
          key: "dot-".concat(y),
          r: 3
        }, d), p), {}, {
          index: y,
          cx: v.x,
          cy: v.y,
          dataKey: f,
          value: v.value,
          payload: v.payload,
          points: s
        });
        return t.renderDotItem(c, x);
      }), m = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ N.createElement(Ne, bn({
        className: "recharts-area-dots"
      }, m), h);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, l = a.strokeWidth, u = o[0].x, c = o[o.length - 1].x, s = n * Math.abs(u - c), f = Kr(o.map(function(d) {
        return d.y || 0;
      }));
      return ee(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Kr(i.map(function(d) {
        return d.y || 0;
      })), f)), ee(f) ? /* @__PURE__ */ N.createElement("rect", {
        x: u < c ? u : u - s,
        y: 0,
        width: s,
        height: Math.floor(f + (l ? parseInt("".concat(l), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, l = a.strokeWidth, u = o[0].y, c = o[o.length - 1].y, s = n * Math.abs(u - c), f = Kr(o.map(function(d) {
        return d.x || 0;
      }));
      return ee(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Kr(i.map(function(d) {
        return d.x || 0;
      })), f)), ee(f) ? /* @__PURE__ */ N.createElement("rect", {
        x: 0,
        y: u < c ? u : u - s,
        width: f + (l ? parseInt("".concat(l), 10) : 1),
        height: Math.floor(s)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(n) {
      var a = this.props.layout;
      return a === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
    }
  }, {
    key: "renderAreaStatically",
    value: function(n, a, i, o) {
      var l = this.props, u = l.layout, c = l.type, s = l.stroke, f = l.connectNulls, d = l.isRange;
      l.ref;
      var p = lw(l, n5);
      return /* @__PURE__ */ N.createElement(Ne, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ N.createElement(Kn, bn({}, ve(p, !0), {
        points: n,
        connectNulls: f,
        type: c,
        baseLine: a,
        layout: u,
        stroke: "none",
        className: "recharts-area-area"
      })), s !== "none" && /* @__PURE__ */ N.createElement(Kn, bn({}, ve(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: f,
        fill: "none",
        points: n
      })), s !== "none" && d && /* @__PURE__ */ N.createElement(Kn, bn({}, ve(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: f,
        fill: "none",
        points: a
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, l = o.points, u = o.baseLine, c = o.isAnimationActive, s = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, h = this.state, m = h.prevPoints, v = h.prevBaseLine;
      return /* @__PURE__ */ N.createElement($r, {
        begin: s,
        duration: f,
        isActive: c,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(y) {
        var x = y.t;
        if (m) {
          var w = m.length / l.length, O = l.map(function(P, A) {
            var T = Math.floor(A * w);
            if (m[T]) {
              var C = m[T], M = Rt(C.x, P.x), D = Rt(C.y, P.y);
              return Yr(Yr({}, P), {}, {
                x: M(x),
                y: D(x)
              });
            }
            return P;
          }), g;
          if (ee(u) && typeof u == "number") {
            var b = Rt(v, u);
            g = b(x);
          } else if (Ce(u) || Ma(u)) {
            var $ = Rt(v, 0);
            g = $(x);
          } else
            g = u.map(function(P, A) {
              var T = Math.floor(A * w);
              if (v[T]) {
                var C = v[T], M = Rt(C.x, P.x), D = Rt(C.y, P.y);
                return Yr(Yr({}, P), {}, {
                  x: M(x),
                  y: D(x)
                });
              }
              return P;
            });
          return i.renderAreaStatically(O, g, n, a);
        }
        return /* @__PURE__ */ N.createElement(Ne, null, /* @__PURE__ */ N.createElement("defs", null, /* @__PURE__ */ N.createElement("clipPath", {
          id: "animationClipPath-".concat(a)
        }, i.renderClipRect(x))), /* @__PURE__ */ N.createElement(Ne, {
          clipPath: "url(#animationClipPath-".concat(a, ")")
        }, i.renderAreaStatically(l, u, n, a)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, a) {
      var i = this.props, o = i.points, l = i.baseLine, u = i.isAnimationActive, c = this.state, s = c.prevPoints, f = c.prevBaseLine, d = c.totalLength;
      return u && o && o.length && (!s && d > 0 || !aa(s, o) || !aa(f, l)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, l, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, l = a.points, u = a.className, c = a.top, s = a.left, f = a.xAxis, d = a.yAxis, p = a.width, h = a.height, m = a.isAnimationActive, v = a.id;
      if (i || !l || !l.length)
        return null;
      var y = this.state.isAnimationFinished, x = l.length === 1, w = Ae("recharts-area", u), O = f && f.allowDataOverflow, g = d && d.allowDataOverflow, b = O || g, $ = Ce(v) ? this.id : v, P = (n = ve(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, A = P.r, T = A === void 0 ? 3 : A, C = P.strokeWidth, M = C === void 0 ? 2 : C, D = __(o) ? o : {}, I = D.clipDot, _ = I === void 0 ? !0 : I, E = T * 2 + M;
      return /* @__PURE__ */ N.createElement(Ne, {
        className: w
      }, O || g ? /* @__PURE__ */ N.createElement("defs", null, /* @__PURE__ */ N.createElement("clipPath", {
        id: "clipPath-".concat($)
      }, /* @__PURE__ */ N.createElement("rect", {
        x: O ? s : s - p / 2,
        y: g ? c : c - h / 2,
        width: O ? p : p * 2,
        height: g ? h : h * 2
      })), !_ && /* @__PURE__ */ N.createElement("clipPath", {
        id: "clipPath-dots-".concat($)
      }, /* @__PURE__ */ N.createElement("rect", {
        x: s - E / 2,
        y: c - E / 2,
        width: p + E,
        height: h + E
      }))) : null, x ? null : this.renderArea(b, $), (o || x) && this.renderDots(b, _, $), (!m || y) && Dr.renderCallByParent(this.props, l));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        curBaseLine: n.baseLine,
        prevPoints: a.curPoints,
        prevBaseLine: a.curBaseLine
      } : n.points !== a.curPoints || n.baseLine !== a.curBaseLine ? {
        curPoints: n.points,
        curBaseLine: n.baseLine
      } : null;
    }
  }]);
}(S.PureComponent);
ow = nn;
gr(nn, "displayName", "Area");
gr(nn, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !xr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
gr(nn, "getBaseValue", function(e, t, r, n) {
  var a = e.layout, i = e.baseValue, o = t.props.baseValue, l = o ?? i;
  if (ee(l) && typeof l == "number")
    return l;
  var u = a === "horizontal" ? n : r, c = u.scale.domain();
  if (u.type === "number") {
    var s = Math.max(c[0], c[1]), f = Math.min(c[0], c[1]);
    return l === "dataMin" ? f : l === "dataMax" || s < 0 ? s : Math.max(Math.min(c[0], c[1]), 0);
  }
  return l === "dataMin" ? c[0] : l === "dataMax" ? c[1] : c[0];
});
gr(nn, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, l = e.bandSize, u = e.dataKey, c = e.stackedData, s = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, h = c && c.length, m = ow.getBaseValue(t, r, n, a), v = p === "horizontal", y = !1, x = f.map(function(O, g) {
    var b;
    h ? b = c[s + g] : (b = ht(O, u), Array.isArray(b) ? y = !0 : b = [m, b]);
    var $ = b[1] == null || h && ht(O, u) == null;
    return v ? {
      x: yh({
        axis: n,
        ticks: i,
        bandSize: l,
        entry: O,
        index: g
      }),
      y: $ ? null : a.scale(b[1]),
      value: b,
      payload: O
    } : {
      x: $ ? null : n.scale(b[1]),
      y: yh({
        axis: a,
        ticks: o,
        bandSize: l,
        entry: O,
        index: g
      }),
      value: b,
      payload: O
    };
  }), w;
  return h || y ? w = x.map(function(O) {
    var g = Array.isArray(O.value) ? O.value[0] : null;
    return v ? {
      x: O.x,
      y: g != null && O.y != null ? a.scale(g) : null
    } : {
      x: g != null ? n.scale(g) : null,
      y: O.y
    };
  }) : w = v ? a.scale(m) : n.scale(m), Yr({
    points: x,
    baseLine: w,
    layout: p,
    isRange: y
  }, d);
});
gr(nn, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ N.isValidElement(e))
    r = /* @__PURE__ */ N.cloneElement(e, t);
  else if (we(e))
    r = e(t);
  else {
    var n = Ae("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = lw(t, a5);
    r = /* @__PURE__ */ N.createElement(Pu, bn({}, i, {
      key: a,
      className: n
    }));
  }
  return r;
});
function ba(e) {
  "@babel/helpers - typeof";
  return ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ba(e);
}
function p5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, dw(n.key), n);
  }
}
function h5(e, t, r) {
  return t && v5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function m5(e, t, r) {
  return t = Vl(t), g5(e, sw() ? Reflect.construct(t, r || [], Vl(e).constructor) : t.apply(e, r));
}
function g5(e, t) {
  if (t && (ba(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return y5(e);
}
function y5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sw = function() {
    return !!e;
  })();
}
function Vl(e) {
  return Vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vl(e);
}
function b5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vf(e, t);
}
function vf(e, t) {
  return vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, vf(e, t);
}
function fw(e, t, r) {
  return t = dw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dw(e) {
  var t = x5(e, "string");
  return ba(t) == "symbol" ? t : t + "";
}
function x5(e, t) {
  if (ba(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ba(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function w5(e) {
  var t = e.xAxisId, r = Gx(), n = Xx(), a = qx(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ N.createElement(Ru, hf({}, a, {
      className: Ae("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return yn(o, !0);
      }
    }))
  );
}
var Lu = /* @__PURE__ */ function(e) {
  function t() {
    return p5(this, t), m5(this, t, arguments);
  }
  return b5(t, e), h5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ N.createElement(w5, this.props);
    }
  }]);
}(N.Component);
fw(Lu, "displayName", "XAxis");
fw(Lu, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function xa(e) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xa(e);
}
function S5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function O5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hw(n.key), n);
  }
}
function $5(e, t, r) {
  return t && O5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function P5(e, t, r) {
  return t = zl(t), C5(e, pw() ? Reflect.construct(t, r || [], zl(e).constructor) : t.apply(e, r));
}
function C5(e, t) {
  if (t && (xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _5(e);
}
function _5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pw = function() {
    return !!e;
  })();
}
function zl(e) {
  return zl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zl(e);
}
function A5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mf(e, t);
}
function mf(e, t) {
  return mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, mf(e, t);
}
function vw(e, t, r) {
  return t = hw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hw(e) {
  var t = E5(e, "string");
  return xa(t) == "symbol" ? t : t + "";
}
function E5(e, t) {
  if (xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gf.apply(this, arguments);
}
var T5 = function(t) {
  var r = t.yAxisId, n = Gx(), a = Xx(), i = Kx(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ N.createElement(Ru, gf({}, i, {
      className: Ae("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: a
      },
      ticksGenerator: function(l) {
        return yn(l, !0);
      }
    }))
  );
}, Bu = /* @__PURE__ */ function(e) {
  function t() {
    return S5(this, t), P5(this, t, arguments);
  }
  return A5(t, e), $5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ N.createElement(T5, this.props);
    }
  }]);
}(N.Component);
vw(Bu, "displayName", "YAxis");
vw(Bu, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function Ym(e) {
  return D5(e) || j5(e) || I5(e) || M5();
}
function M5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function I5(e, t) {
  if (e) {
    if (typeof e == "string") return yf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yf(e, t);
  }
}
function j5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function D5(e) {
  if (Array.isArray(e)) return yf(e);
}
function yf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var bf = function(t, r, n, a, i) {
  var o = Jt(t, Fd), l = Jt(t, Du), u = [].concat(Ym(o), Ym(l)), c = Jt(t, Nu), s = "".concat(a, "Id"), f = a[0], d = r;
  if (u.length && (d = u.reduce(function(m, v) {
    if (v.props[s] === n && Sr(v.props, "extendDomain") && ee(v.props[f])) {
      var y = v.props[f];
      return [Math.min(m[0], y), Math.max(m[1], y)];
    }
    return m;
  }, d)), c.length) {
    var p = "".concat(f, "1"), h = "".concat(f, "2");
    d = c.reduce(function(m, v) {
      if (v.props[s] === n && Sr(v.props, "extendDomain") && ee(v.props[p]) && ee(v.props[h])) {
        var y = v.props[p], x = v.props[h];
        return [Math.min(m[0], y, x), Math.max(m[1], y, x)];
      }
      return m;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(m, v) {
    return ee(v) ? [Math.min(m[0], v), Math.max(m[1], v)] : m;
  }, d)), d;
}, mw = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function a(u, c, s) {
    this.fn = u, this.context = c, this.once = s || !1;
  }
  function i(u, c, s, f, d) {
    if (typeof s != "function")
      throw new TypeError("The listener must be a function");
    var p = new a(s, f || u, d), h = r ? r + c : c;
    return u._events[h] ? u._events[h].fn ? u._events[h] = [u._events[h], p] : u._events[h].push(p) : (u._events[h] = p, u._eventsCount++), u;
  }
  function o(u, c) {
    --u._eventsCount === 0 ? u._events = new n() : delete u._events[c];
  }
  function l() {
    this._events = new n(), this._eventsCount = 0;
  }
  l.prototype.eventNames = function() {
    var c = [], s, f;
    if (this._eventsCount === 0) return c;
    for (f in s = this._events)
      t.call(s, f) && c.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(s)) : c;
  }, l.prototype.listeners = function(c) {
    var s = r ? r + c : c, f = this._events[s];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, p = f.length, h = new Array(p); d < p; d++)
      h[d] = f[d].fn;
    return h;
  }, l.prototype.listenerCount = function(c) {
    var s = r ? r + c : c, f = this._events[s];
    return f ? f.fn ? 1 : f.length : 0;
  }, l.prototype.emit = function(c, s, f, d, p, h) {
    var m = r ? r + c : c;
    if (!this._events[m]) return !1;
    var v = this._events[m], y = arguments.length, x, w;
    if (v.fn) {
      switch (v.once && this.removeListener(c, v.fn, void 0, !0), y) {
        case 1:
          return v.fn.call(v.context), !0;
        case 2:
          return v.fn.call(v.context, s), !0;
        case 3:
          return v.fn.call(v.context, s, f), !0;
        case 4:
          return v.fn.call(v.context, s, f, d), !0;
        case 5:
          return v.fn.call(v.context, s, f, d, p), !0;
        case 6:
          return v.fn.call(v.context, s, f, d, p, h), !0;
      }
      for (w = 1, x = new Array(y - 1); w < y; w++)
        x[w - 1] = arguments[w];
      v.fn.apply(v.context, x);
    } else {
      var O = v.length, g;
      for (w = 0; w < O; w++)
        switch (v[w].once && this.removeListener(c, v[w].fn, void 0, !0), y) {
          case 1:
            v[w].fn.call(v[w].context);
            break;
          case 2:
            v[w].fn.call(v[w].context, s);
            break;
          case 3:
            v[w].fn.call(v[w].context, s, f);
            break;
          case 4:
            v[w].fn.call(v[w].context, s, f, d);
            break;
          default:
            if (!x) for (g = 1, x = new Array(y - 1); g < y; g++)
              x[g - 1] = arguments[g];
            v[w].fn.apply(v[w].context, x);
        }
    }
    return !0;
  }, l.prototype.on = function(c, s, f) {
    return i(this, c, s, f, !1);
  }, l.prototype.once = function(c, s, f) {
    return i(this, c, s, f, !0);
  }, l.prototype.removeListener = function(c, s, f, d) {
    var p = r ? r + c : c;
    if (!this._events[p]) return this;
    if (!s)
      return o(this, p), this;
    var h = this._events[p];
    if (h.fn)
      h.fn === s && (!d || h.once) && (!f || h.context === f) && o(this, p);
    else {
      for (var m = 0, v = [], y = h.length; m < y; m++)
        (h[m].fn !== s || d && !h[m].once || f && h[m].context !== f) && v.push(h[m]);
      v.length ? this._events[p] = v.length === 1 ? v[0] : v : o(this, p);
    }
    return this;
  }, l.prototype.removeAllListeners = function(c) {
    var s;
    return c ? (s = r ? r + c : c, this._events[s] && o(this, s)) : (this._events = new n(), this._eventsCount = 0), this;
  }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
})(mw);
var k5 = mw.exports;
const N5 = /* @__PURE__ */ Le(k5);
var Wc = new N5(), Vc = "recharts.syncMouseEvents";
function Ui(e) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e);
}
function R5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gw(n.key), n);
  }
}
function B5(e, t, r) {
  return t && L5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zc(e, t, r) {
  return t = gw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gw(e) {
  var t = F5(e, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function F5(e, t) {
  if (Ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var H5 = /* @__PURE__ */ function() {
  function e() {
    R5(this, e), zc(this, "activeIndex", 0), zc(this, "coordinateList", []), zc(this, "layout", "horizontal");
  }
  return B5(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, l = o === void 0 ? null : o, u = r.layout, c = u === void 0 ? null : u, s = r.offset, f = s === void 0 ? null : s, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = l ?? this.container, this.layout = c ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = p ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, l = a.height, u = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, s = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = i + u + c, d = o + this.offset.top + l / 2 + s;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
}();
function W5(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], a = e == null ? void 0 : e[1];
    if (n && a && ee(n) && ee(a))
      return !0;
  }
  return !1;
}
function V5(e, t, r, n) {
  var a = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - a : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - a,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function yw(e) {
  var t = e.cx, r = e.cy, n = e.radius, a = e.startAngle, i = e.endAngle, o = Je(t, r, n, a), l = Je(t, r, n, i);
  return {
    points: [o, l],
    cx: t,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function z5(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var l = t.cx, u = t.cy, c = t.innerRadius, s = t.outerRadius, f = t.angle, d = Je(l, u, c, f), p = Je(l, u, s, f);
      n = d.x, a = d.y, i = p.x, o = p.y;
    } else
      return yw(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function Yi(e) {
  "@babel/helpers - typeof";
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e);
}
function qm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qm(Object(r), !0).forEach(function(n) {
      U5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U5(e, t, r) {
  return t = Y5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y5(e) {
  var t = q5(e, "string");
  return Yi(t) == "symbol" ? t : t + "";
}
function q5(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function K5(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, l = e.activePayload, u = e.offset, c = e.activeTooltipIndex, s = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var h, m = Kn;
  if (d === "ScatterChart")
    h = o, m = YV;
  else if (d === "BarChart")
    h = V5(f, o, u, s), m = Rd;
  else if (f === "radial") {
    var v = yw(o), y = v.cx, x = v.cy, w = v.radius, O = v.startAngle, g = v.endAngle;
    h = {
      cx: y,
      cy: x,
      startAngle: O,
      endAngle: g,
      innerRadius: w,
      outerRadius: w
    }, m = vx;
  } else
    h = {
      points: z5(f, o, u)
    }, m = Kn;
  var b = ko(ko(ko(ko({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), h), ve(p, !1)), {}, {
    payload: l,
    payloadIndex: c,
    className: Ae("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ S.isValidElement(p) ? /* @__PURE__ */ S.cloneElement(p, b) : /* @__PURE__ */ S.createElement(m, b);
}
var G5 = ["item"], X5 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function wa(e) {
  "@babel/helpers - typeof";
  return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wa(e);
}
function Vn() {
  return Vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vn.apply(this, arguments);
}
function Km(e, t) {
  return J5(e) || Q5(e, t) || xw(e, t) || Z5();
}
function Z5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); u = !0) ;
    } catch (s) {
      c = !0, a = s;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function J5(e) {
  if (Array.isArray(e)) return e;
}
function Gm(e, t) {
  if (e == null) return {};
  var r = eU(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eU(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function tU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rU(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ww(n.key), n);
  }
}
function nU(e, t, r) {
  return t && rU(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function aU(e, t, r) {
  return t = Ul(t), iU(e, bw() ? Reflect.construct(t, r || [], Ul(e).constructor) : t.apply(e, r));
}
function iU(e, t) {
  if (t && (wa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oU(e);
}
function oU(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bw = function() {
    return !!e;
  })();
}
function Ul(e) {
  return Ul = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ul(e);
}
function lU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xf(e, t);
}
function xf(e, t) {
  return xf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xf(e, t);
}
function Sa(e) {
  return sU(e) || cU(e) || xw(e) || uU();
}
function uU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xw(e, t) {
  if (e) {
    if (typeof e == "string") return wf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wf(e, t);
  }
}
function cU(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sU(e) {
  if (Array.isArray(e)) return wf(e);
}
function wf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Xm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xm(Object(r), !0).forEach(function(n) {
      ge(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ge(e, t, r) {
  return t = ww(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ww(e) {
  var t = fU(e, "string");
  return wa(t) == "symbol" ? t : t + "";
}
function fU(e, t) {
  if (wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dU = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, pU = {
  width: "100%",
  height: "100%"
}, Sw = {
  x: 0,
  y: 0
};
function No(e) {
  return e;
}
var vU = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, hU = function(t, r, n, a) {
  var i = r.find(function(s) {
    return s && s.index === n;
  });
  if (i) {
    if (t === "horizontal")
      return {
        x: i.coordinate,
        y: a.y
      };
    if (t === "vertical")
      return {
        x: a.x,
        y: i.coordinate
      };
    if (t === "centric") {
      var o = i.coordinate, l = a.radius;
      return Y(Y(Y({}, a), Je(a.cx, a.cy, l, o)), {}, {
        angle: o,
        radius: l
      });
    }
    var u = i.coordinate, c = a.angle;
    return Y(Y(Y({}, a), Je(a.cx, a.cy, u, c)), {}, {
      angle: c,
      radius: u
    });
  }
  return Sw;
}, Fu = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(l, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(Sa(l), Sa(c)) : l;
  }, []);
  return o.length > 0 ? o : t && t.length && ee(a) && ee(i) ? t.slice(a, i + 1) : [];
};
function Ow(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Sf = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, l = Fu(r, t);
  return n < 0 || !i || !i.length || n >= l.length ? null : i.reduce(function(u, c) {
    var s, f = (s = c.props.data) !== null && s !== void 0 ? s : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? l : f;
      d = zo(p, o.dataKey, a);
    } else
      d = f && f[n] || l[n];
    return d ? [].concat(Sa(u), [ux(c, d)]) : u;
  }, []);
}, Zm = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = vU(i, n), l = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, s = T3(o, l, c, u);
  if (s >= 0 && c) {
    var f = c[s] && c[s].value, d = Sf(t, r, s, f), p = hU(n, l, s, i);
    return {
      activeTooltipIndex: s,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, mU = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, l = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, s = t.layout, f = t.children, d = t.stackOffset, p = nx(s, i);
  return n.reduce(function(h, m) {
    var v, y = m.type.defaultProps !== void 0 ? Y(Y({}, m.type.defaultProps), m.props) : m.props, x = y.type, w = y.dataKey, O = y.allowDataOverflow, g = y.allowDuplicatedCategory, b = y.scale, $ = y.ticks, P = y.includeHidden, A = y[o];
    if (h[A])
      return h;
    var T = Fu(t.data, {
      graphicalItems: a.filter(function(L) {
        var V, z = o in L.props ? L.props[o] : (V = L.type.defaultProps) === null || V === void 0 ? void 0 : V[o];
        return z === A;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), C = T.length, M, D, I;
    W5(y.domain, O, x) && (M = Ns(y.domain, null, O), p && (x === "number" || b !== "auto") && (I = ci(T, w, "category")));
    var _ = Ow(x);
    if (!M || M.length === 0) {
      var E, j = (E = y.domain) !== null && E !== void 0 ? E : _;
      if (w) {
        if (M = ci(T, w, x), x === "category" && p) {
          var k = y_(M);
          g && k ? (D = M, M = Ml(0, C)) : g || (M = Sh(j, M, m).reduce(function(L, V) {
            return L.indexOf(V) >= 0 ? L : [].concat(Sa(L), [V]);
          }, []));
        } else if (x === "category")
          g ? M = M.filter(function(L) {
            return L !== "" && !Ce(L);
          }) : M = Sh(j, M, m).reduce(function(L, V) {
            return L.indexOf(V) >= 0 || V === "" || Ce(V) ? L : [].concat(Sa(L), [V]);
          }, []);
        else if (x === "number") {
          var R = k3(T, a.filter(function(L) {
            var V, z, K = o in L.props ? L.props[o] : (V = L.type.defaultProps) === null || V === void 0 ? void 0 : V[o], J = "hide" in L.props ? L.props.hide : (z = L.type.defaultProps) === null || z === void 0 ? void 0 : z.hide;
            return K === A && (P || !J);
          }), w, i, s);
          R && (M = R);
        }
        p && (x === "number" || b !== "auto") && (I = ci(T, w, "category"));
      } else p ? M = Ml(0, C) : l && l[A] && l[A].hasStack && x === "number" ? M = d === "expand" ? [0, 1] : lx(l[A].stackGroups, u, c) : M = rx(T, a.filter(function(L) {
        var V = o in L.props ? L.props[o] : L.type.defaultProps[o], z = "hide" in L.props ? L.props.hide : L.type.defaultProps.hide;
        return V === A && (P || !z);
      }), x, s, !0);
      if (x === "number")
        M = bf(f, M, A, i, $), j && (M = Ns(j, M, O));
      else if (x === "category" && j) {
        var B = j, H = M.every(function(L) {
          return B.indexOf(L) >= 0;
        });
        H && (M = B);
      }
    }
    return Y(Y({}, h), {}, ge({}, A, Y(Y({}, y), {}, {
      axisType: i,
      domain: M,
      categoricalDomain: I,
      duplicateDomain: D,
      originalDomain: (v = y.domain) !== null && v !== void 0 ? v : _,
      isCategorical: p,
      layout: s
    })));
  }, {});
}, gU = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, l = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, s = t.layout, f = t.children, d = Fu(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, h = nx(s, i), m = -1;
  return n.reduce(function(v, y) {
    var x = y.type.defaultProps !== void 0 ? Y(Y({}, y.type.defaultProps), y.props) : y.props, w = x[o], O = Ow("number");
    if (!v[w]) {
      m++;
      var g;
      return h ? g = Ml(0, p) : l && l[w] && l[w].hasStack ? (g = lx(l[w].stackGroups, u, c), g = bf(f, g, w, i)) : (g = Ns(O, rx(d, n.filter(function(b) {
        var $, P, A = o in b.props ? b.props[o] : ($ = b.type.defaultProps) === null || $ === void 0 ? void 0 : $[o], T = "hide" in b.props ? b.props.hide : (P = b.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
        return A === w && !T;
      }), "number", s), a.defaultProps.allowDataOverflow), g = bf(f, g, w, i)), Y(Y({}, v), {}, ge({}, w, Y(Y({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: qt(dU, "".concat(i, ".").concat(m % 2), null),
        domain: g,
        originalDomain: O,
        isCategorical: h,
        layout: s
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return v;
  }, {});
}, yU = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, l = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, s = t.children, f = "".concat(a, "Id"), d = Jt(s, i), p = {};
  return d && d.length ? p = mU(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: l,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = gU(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: l,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, bU = function(t) {
  var r = Ln(t), n = yn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: sd(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: yl(r, n)
  };
}, Qm = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = Ut(r, fa), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, xU = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Mr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Jm = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, wU = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, l = t.yAxisMap, u = l === void 0 ? {} : l, c = n.width, s = n.height, f = n.children, d = n.margin || {}, p = Ut(f, fa), h = Ut(f, Un), m = Object.keys(u).reduce(function(g, b) {
    var $ = u[b], P = $.orientation;
    return !$.mirror && !$.hide ? Y(Y({}, g), {}, ge({}, P, g[P] + $.width)) : g;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), v = Object.keys(o).reduce(function(g, b) {
    var $ = o[b], P = $.orientation;
    return !$.mirror && !$.hide ? Y(Y({}, g), {}, ge({}, P, qt(g, "".concat(P)) + $.height)) : g;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), y = Y(Y({}, v), m), x = y.bottom;
  p && (y.bottom += p.props.height || fa.defaultProps.height), h && r && (y = j3(y, a, n, r));
  var w = c - y.left - y.right, O = s - y.top - y.bottom;
  return Y(Y({
    brushBottom: x
  }, y), {}, {
    // never return negative values for height and width
    width: Math.max(w, 0),
    height: Math.max(O, 0)
  });
}, SU = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, $w = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, l = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, s = t.formatAxisMap, f = t.defaultProps, d = function(y, x) {
    var w = x.graphicalItems, O = x.stackGroups, g = x.offset, b = x.updateId, $ = x.dataStartIndex, P = x.dataEndIndex, A = y.barSize, T = y.layout, C = y.barGap, M = y.barCategoryGap, D = y.maxBarSize, I = Jm(T), _ = I.numericAxisName, E = I.cateAxisName, j = xU(w), k = [];
    return w.forEach(function(R, B) {
      var H = Fu(y.data, {
        graphicalItems: [R],
        dataStartIndex: $,
        dataEndIndex: P
      }), L = R.type.defaultProps !== void 0 ? Y(Y({}, R.type.defaultProps), R.props) : R.props, V = L.dataKey, z = L.maxBarSize, K = L["".concat(_, "Id")], J = L["".concat(E, "Id")], te = {}, ie = u.reduce(function(Ee, De) {
        var it, ot, nt = x["".concat(De.axisType, "Map")], ze = L["".concat(De.axisType, "Id")];
        nt && nt[ze] || De.axisType === "zAxis" || (je.env.NODE_ENV !== "production" ? Bt(!1, "Specifying a(n) ".concat(De.axisType, "Id requires a corresponding ").concat(
          De.axisType,
          "Id on the targeted graphical component "
        ).concat((it = R == null || (ot = R.type) === null || ot === void 0 ? void 0 : ot.displayName) !== null && it !== void 0 ? it : "")) : Bt());
        var He = nt[ze];
        return Y(Y({}, Ee), {}, ge(ge({}, De.axisType, He), "".concat(De.axisType, "Ticks"), yn(He)));
      }, te), U = ie[E], G = ie["".concat(E, "Ticks")], q = O && O[K] && O[K].hasStack && z3(R, O[K].stackGroups), W = Mr(R.type).indexOf("Bar") >= 0, Z = yl(U, G), Q = [], ue = j && M3({
        barSize: A,
        stackGroups: O,
        totalSize: SU(ie, E)
      });
      if (W) {
        var re, ne, de = Ce(z) ? D : z, Oe = (re = (ne = yl(U, G, !0)) !== null && ne !== void 0 ? ne : de) !== null && re !== void 0 ? re : 0;
        Q = I3({
          barGap: C,
          barCategoryGap: M,
          bandSize: Oe !== Z ? Oe : Z,
          sizeList: ue[J],
          maxBarSize: de
        }), Oe !== Z && (Q = Q.map(function(Ee) {
          return Y(Y({}, Ee), {}, {
            position: Y(Y({}, Ee.position), {}, {
              offset: Ee.position.offset - Oe / 2
            })
          });
        }));
      }
      var Re = R && R.type && R.type.getComposedData;
      Re && k.push({
        props: Y(Y({}, Re(Y(Y({}, ie), {}, {
          displayedData: H,
          props: y,
          dataKey: V,
          item: R,
          bandSize: Z,
          barPosition: Q,
          offset: g,
          stackedData: q,
          layout: T,
          dataStartIndex: $,
          dataEndIndex: P
        }))), {}, ge(ge(ge({
          key: R.key || "item-".concat(B)
        }, _, ie[_]), E, ie[E]), "animationId", b)),
        childIndex: T_(R, y.children),
        item: R
      });
    }), k;
  }, p = function(y, x) {
    var w = y.props, O = y.dataStartIndex, g = y.dataEndIndex, b = y.updateId;
    if (!hp({
      props: w
    }))
      return null;
    var $ = w.children, P = w.layout, A = w.stackOffset, T = w.data, C = w.reverseStackOrder, M = Jm(P), D = M.numericAxisName, I = M.cateAxisName, _ = Jt($, n), E = W3(T, _, "".concat(D, "Id"), "".concat(I, "Id"), A, C), j = u.reduce(function(L, V) {
      var z = "".concat(V.axisType, "Map");
      return Y(Y({}, L), {}, ge({}, z, yU(w, Y(Y({}, V), {}, {
        graphicalItems: _,
        stackGroups: V.axisType === D && E,
        dataStartIndex: O,
        dataEndIndex: g
      }))));
    }, {}), k = wU(Y(Y({}, j), {}, {
      props: w,
      graphicalItems: _
    }), x == null ? void 0 : x.legendBBox);
    Object.keys(j).forEach(function(L) {
      j[L] = s(w, j[L], k, L.replace("Map", ""), r);
    });
    var R = j["".concat(I, "Map")], B = bU(R), H = d(w, Y(Y({}, j), {}, {
      dataStartIndex: O,
      dataEndIndex: g,
      updateId: b,
      graphicalItems: _,
      stackGroups: E,
      offset: k
    }));
    return Y(Y({
      formattedGraphicalItems: H,
      graphicalItems: _,
      offset: k,
      stackGroups: E
    }, B), j);
  }, h = /* @__PURE__ */ function(v) {
    function y(x) {
      var w, O, g;
      return tU(this, y), g = aU(this, y, [x]), ge(g, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), ge(g, "accessibilityManager", new H5()), ge(g, "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var $ = g.state, P = $.dataStartIndex, A = $.dataEndIndex, T = $.updateId;
          g.setState(Y({
            legendBBox: b
          }, p({
            props: g.props,
            dataStartIndex: P,
            dataEndIndex: A,
            updateId: T
          }, Y(Y({}, g.state), {}, {
            legendBBox: b
          }))));
        }
      }), ge(g, "handleReceiveSyncEvent", function(b, $, P) {
        if (g.props.syncId === b) {
          if (P === g.eventEmitterSymbol && typeof g.props.syncMethod != "function")
            return;
          g.applySyncEvent($);
        }
      }), ge(g, "handleBrushChange", function(b) {
        var $ = b.startIndex, P = b.endIndex;
        if ($ !== g.state.dataStartIndex || P !== g.state.dataEndIndex) {
          var A = g.state.updateId;
          g.setState(function() {
            return Y({
              dataStartIndex: $,
              dataEndIndex: P
            }, p({
              props: g.props,
              dataStartIndex: $,
              dataEndIndex: P,
              updateId: A
            }, g.state));
          }), g.triggerSyncEvent({
            dataStartIndex: $,
            dataEndIndex: P
          });
        }
      }), ge(g, "handleMouseEnter", function(b) {
        var $ = g.getMouseInfo(b);
        if ($) {
          var P = Y(Y({}, $), {}, {
            isTooltipActive: !0
          });
          g.setState(P), g.triggerSyncEvent(P);
          var A = g.props.onMouseEnter;
          we(A) && A(P, b);
        }
      }), ge(g, "triggeredAfterMouseMove", function(b) {
        var $ = g.getMouseInfo(b), P = $ ? Y(Y({}, $), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        g.setState(P), g.triggerSyncEvent(P);
        var A = g.props.onMouseMove;
        we(A) && A(P, b);
      }), ge(g, "handleItemMouseEnter", function(b) {
        g.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: b,
            activePayload: b.tooltipPayload,
            activeCoordinate: b.tooltipPosition || {
              x: b.cx,
              y: b.cy
            }
          };
        });
      }), ge(g, "handleItemMouseLeave", function() {
        g.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), ge(g, "handleMouseMove", function(b) {
        b.persist(), g.throttleTriggeredAfterMouseMove(b);
      }), ge(g, "handleMouseLeave", function(b) {
        g.throttleTriggeredAfterMouseMove.cancel();
        var $ = {
          isTooltipActive: !1
        };
        g.setState($), g.triggerSyncEvent($);
        var P = g.props.onMouseLeave;
        we(P) && P($, b);
      }), ge(g, "handleOuterEvent", function(b) {
        var $ = E_(b), P = qt(g.props, "".concat($));
        if ($ && we(P)) {
          var A, T;
          /.*touch.*/i.test($) ? T = g.getMouseInfo(b.changedTouches[0]) : T = g.getMouseInfo(b), P((A = T) !== null && A !== void 0 ? A : {}, b);
        }
      }), ge(g, "handleClick", function(b) {
        var $ = g.getMouseInfo(b);
        if ($) {
          var P = Y(Y({}, $), {}, {
            isTooltipActive: !0
          });
          g.setState(P), g.triggerSyncEvent(P);
          var A = g.props.onClick;
          we(A) && A(P, b);
        }
      }), ge(g, "handleMouseDown", function(b) {
        var $ = g.props.onMouseDown;
        if (we($)) {
          var P = g.getMouseInfo(b);
          $(P, b);
        }
      }), ge(g, "handleMouseUp", function(b) {
        var $ = g.props.onMouseUp;
        if (we($)) {
          var P = g.getMouseInfo(b);
          $(P, b);
        }
      }), ge(g, "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && g.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), ge(g, "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && g.handleMouseDown(b.changedTouches[0]);
      }), ge(g, "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && g.handleMouseUp(b.changedTouches[0]);
      }), ge(g, "triggerSyncEvent", function(b) {
        g.props.syncId !== void 0 && Wc.emit(Vc, g.props.syncId, b, g.eventEmitterSymbol);
      }), ge(g, "applySyncEvent", function(b) {
        var $ = g.props, P = $.layout, A = $.syncMethod, T = g.state.updateId, C = b.dataStartIndex, M = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          g.setState(Y({
            dataStartIndex: C,
            dataEndIndex: M
          }, p({
            props: g.props,
            dataStartIndex: C,
            dataEndIndex: M,
            updateId: T
          }, g.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var D = b.chartX, I = b.chartY, _ = b.activeTooltipIndex, E = g.state, j = E.offset, k = E.tooltipTicks;
          if (!j)
            return;
          if (typeof A == "function")
            _ = A(k, b);
          else if (A === "value") {
            _ = -1;
            for (var R = 0; R < k.length; R++)
              if (k[R].value === b.activeLabel) {
                _ = R;
                break;
              }
          }
          var B = Y(Y({}, j), {}, {
            x: j.left,
            y: j.top
          }), H = Math.min(D, B.x + B.width), L = Math.min(I, B.y + B.height), V = k[_] && k[_].value, z = Sf(g.state, g.props.data, _), K = k[_] ? {
            x: P === "horizontal" ? k[_].coordinate : H,
            y: P === "horizontal" ? L : k[_].coordinate
          } : Sw;
          g.setState(Y(Y({}, b), {}, {
            activeLabel: V,
            activeCoordinate: K,
            activePayload: z,
            activeTooltipIndex: _
          }));
        } else
          g.setState(b);
      }), ge(g, "renderCursor", function(b) {
        var $, P = g.state, A = P.isTooltipActive, T = P.activeCoordinate, C = P.activePayload, M = P.offset, D = P.activeTooltipIndex, I = P.tooltipAxisBandSize, _ = g.getTooltipEventType(), E = ($ = b.props.active) !== null && $ !== void 0 ? $ : A, j = g.props.layout, k = b.key || "_recharts-cursor";
        return /* @__PURE__ */ N.createElement(K5, {
          key: k,
          activeCoordinate: T,
          activePayload: C,
          activeTooltipIndex: D,
          chartName: r,
          element: b,
          isActive: E,
          layout: j,
          offset: M,
          tooltipAxisBandSize: I,
          tooltipEventType: _
        });
      }), ge(g, "renderPolarAxis", function(b, $, P) {
        var A = qt(b, "type.axisType"), T = qt(g.state, "".concat(A, "Map")), C = b.type.defaultProps, M = C !== void 0 ? Y(Y({}, C), b.props) : b.props, D = T && T[M["".concat(A, "Id")]];
        return /* @__PURE__ */ S.cloneElement(b, Y(Y({}, D), {}, {
          className: Ae(A, D.className),
          key: b.key || "".concat($, "-").concat(P),
          ticks: yn(D, !0)
        }));
      }), ge(g, "renderPolarGrid", function(b) {
        var $ = b.props, P = $.radialLines, A = $.polarAngles, T = $.polarRadius, C = g.state, M = C.radiusAxisMap, D = C.angleAxisMap, I = Ln(M), _ = Ln(D), E = _.cx, j = _.cy, k = _.innerRadius, R = _.outerRadius;
        return /* @__PURE__ */ S.cloneElement(b, {
          polarAngles: Array.isArray(A) ? A : yn(_, !0).map(function(B) {
            return B.coordinate;
          }),
          polarRadius: Array.isArray(T) ? T : yn(I, !0).map(function(B) {
            return B.coordinate;
          }),
          cx: E,
          cy: j,
          innerRadius: k,
          outerRadius: R,
          key: b.key || "polar-grid",
          radialLines: P
        });
      }), ge(g, "renderLegend", function() {
        var b = g.state.formattedGraphicalItems, $ = g.props, P = $.children, A = $.width, T = $.height, C = g.props.margin || {}, M = A - (C.left || 0) - (C.right || 0), D = ex({
          children: P,
          formattedGraphicalItems: b,
          legendWidth: M,
          legendContent: c
        });
        if (!D)
          return null;
        var I = D.item, _ = Gm(D, G5);
        return /* @__PURE__ */ S.cloneElement(I, Y(Y({}, _), {}, {
          chartWidth: A,
          chartHeight: T,
          margin: C,
          onBBoxUpdate: g.handleLegendBBoxUpdate
        }));
      }), ge(g, "renderTooltip", function() {
        var b, $ = g.props, P = $.children, A = $.accessibilityLayer, T = Ut(P, ar);
        if (!T)
          return null;
        var C = g.state, M = C.isTooltipActive, D = C.activeCoordinate, I = C.activePayload, _ = C.activeLabel, E = C.offset, j = (b = T.props.active) !== null && b !== void 0 ? b : M;
        return /* @__PURE__ */ S.cloneElement(T, {
          viewBox: Y(Y({}, E), {}, {
            x: E.left,
            y: E.top
          }),
          active: j,
          label: _,
          payload: j ? I : [],
          coordinate: D,
          accessibilityLayer: A
        });
      }), ge(g, "renderBrush", function(b) {
        var $ = g.props, P = $.margin, A = $.data, T = g.state, C = T.offset, M = T.dataStartIndex, D = T.dataEndIndex, I = T.updateId;
        return /* @__PURE__ */ S.cloneElement(b, {
          key: b.key || "_recharts-brush",
          onChange: Mo(g.handleBrushChange, b.props.onChange),
          data: A,
          x: ee(b.props.x) ? b.props.x : C.left,
          y: ee(b.props.y) ? b.props.y : C.top + C.height + C.brushBottom - (P.bottom || 0),
          width: ee(b.props.width) ? b.props.width : C.width,
          startIndex: M,
          endIndex: D,
          updateId: "brush-".concat(I)
        });
      }), ge(g, "renderReferenceElement", function(b, $, P) {
        if (!b)
          return null;
        var A = g, T = A.clipPathId, C = g.state, M = C.xAxisMap, D = C.yAxisMap, I = C.offset, _ = b.type.defaultProps || {}, E = b.props, j = E.xAxisId, k = j === void 0 ? _.xAxisId : j, R = E.yAxisId, B = R === void 0 ? _.yAxisId : R;
        return /* @__PURE__ */ S.cloneElement(b, {
          key: b.key || "".concat($, "-").concat(P),
          xAxis: M[k],
          yAxis: D[B],
          viewBox: {
            x: I.left,
            y: I.top,
            width: I.width,
            height: I.height
          },
          clipPathId: T
        });
      }), ge(g, "renderActivePoints", function(b) {
        var $ = b.item, P = b.activePoint, A = b.basePoint, T = b.childIndex, C = b.isRange, M = [], D = $.props.key, I = $.item.type.defaultProps !== void 0 ? Y(Y({}, $.item.type.defaultProps), $.item.props) : $.item.props, _ = I.activeDot, E = I.dataKey, j = Y(Y({
          index: T,
          dataKey: E,
          cx: P.x,
          cy: P.y,
          r: 4,
          fill: Nd($.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: P.payload,
          value: P.value
        }, ve(_, !1)), Uo(_));
        return M.push(y.renderActiveDot(_, j, "".concat(D, "-activePoint-").concat(T))), A ? M.push(y.renderActiveDot(_, Y(Y({}, j), {}, {
          cx: A.x,
          cy: A.y
        }), "".concat(D, "-basePoint-").concat(T))) : C && M.push(null), M;
      }), ge(g, "renderGraphicChild", function(b, $, P) {
        var A = g.filterFormatItem(b, $, P);
        if (!A)
          return null;
        var T = g.getTooltipEventType(), C = g.state, M = C.isTooltipActive, D = C.tooltipAxis, I = C.activeTooltipIndex, _ = C.activeLabel, E = g.props.children, j = Ut(E, ar), k = A.props, R = k.points, B = k.isRange, H = k.baseLine, L = A.item.type.defaultProps !== void 0 ? Y(Y({}, A.item.type.defaultProps), A.item.props) : A.item.props, V = L.activeDot, z = L.hide, K = L.activeBar, J = L.activeShape, te = !!(!z && M && j && (V || K || J)), ie = {};
        T !== "axis" && j && j.props.trigger === "click" ? ie = {
          onClick: Mo(g.handleItemMouseEnter, b.props.onClick)
        } : T !== "axis" && (ie = {
          onMouseLeave: Mo(g.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: Mo(g.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var U = /* @__PURE__ */ S.cloneElement(b, Y(Y({}, A.props), ie));
        function G(De) {
          return typeof D.dataKey == "function" ? D.dataKey(De.payload) : null;
        }
        if (te)
          if (I >= 0) {
            var q, W;
            if (D.dataKey && !D.allowDuplicatedCategory) {
              var Z = typeof D.dataKey == "function" ? G : "payload.".concat(D.dataKey.toString());
              q = zo(R, Z, _), W = B && H && zo(H, Z, _);
            } else
              q = R == null ? void 0 : R[I], W = B && H && H[I];
            if (J || K) {
              var Q = b.props.activeIndex !== void 0 ? b.props.activeIndex : I;
              return [/* @__PURE__ */ S.cloneElement(b, Y(Y(Y({}, A.props), ie), {}, {
                activeIndex: Q
              })), null, null];
            }
            if (!Ce(q))
              return [U].concat(Sa(g.renderActivePoints({
                item: A,
                activePoint: q,
                basePoint: W,
                childIndex: I,
                isRange: B
              })));
          } else {
            var ue, re = (ue = g.getItemByXY(g.state.activeCoordinate)) !== null && ue !== void 0 ? ue : {
              graphicalItem: U
            }, ne = re.graphicalItem, de = ne.item, Oe = de === void 0 ? b : de, Re = ne.childIndex, Ee = Y(Y(Y({}, A.props), ie), {}, {
              activeIndex: Re
            });
            return [/* @__PURE__ */ S.cloneElement(Oe, Ee), null, null];
          }
        return B ? [U, null, null] : [U, null];
      }), ge(g, "renderCustomized", function(b, $, P) {
        return /* @__PURE__ */ S.cloneElement(b, Y(Y({
          key: "recharts-customized-".concat(P)
        }, g.props), g.state));
      }), ge(g, "renderMap", {
        CartesianGrid: {
          handler: No,
          once: !0
        },
        ReferenceArea: {
          handler: g.renderReferenceElement
        },
        ReferenceLine: {
          handler: No
        },
        ReferenceDot: {
          handler: g.renderReferenceElement
        },
        XAxis: {
          handler: No
        },
        YAxis: {
          handler: No
        },
        Brush: {
          handler: g.renderBrush,
          once: !0
        },
        Bar: {
          handler: g.renderGraphicChild
        },
        Line: {
          handler: g.renderGraphicChild
        },
        Area: {
          handler: g.renderGraphicChild
        },
        Radar: {
          handler: g.renderGraphicChild
        },
        RadialBar: {
          handler: g.renderGraphicChild
        },
        Scatter: {
          handler: g.renderGraphicChild
        },
        Pie: {
          handler: g.renderGraphicChild
        },
        Funnel: {
          handler: g.renderGraphicChild
        },
        Tooltip: {
          handler: g.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: g.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: g.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: g.renderPolarAxis
        },
        Customized: {
          handler: g.renderCustomized
        }
      }), g.clipPathId = "".concat((w = x.id) !== null && w !== void 0 ? w : Ia("recharts"), "-clip"), g.throttleTriggeredAfterMouseMove = Qb(g.triggeredAfterMouseMove, (O = x.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), g.state = {}, g;
    }
    return lU(y, v), nU(y, [{
      key: "componentDidMount",
      value: function() {
        var w, O;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
            top: (O = this.props.margin.top) !== null && O !== void 0 ? O : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var w = this.props, O = w.children, g = w.data, b = w.height, $ = w.layout, P = Ut(O, ar);
        if (P) {
          var A = P.props.defaultIndex;
          if (!(typeof A != "number" || A < 0 || A > this.state.tooltipTicks.length - 1)) {
            var T = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value, C = Sf(this.state, g, A, T), M = this.state.tooltipTicks[A].coordinate, D = (this.state.offset.top + b) / 2, I = $ === "horizontal", _ = I ? {
              x: M,
              y: D
            } : {
              y: M,
              x: D
            }, E = this.state.formattedGraphicalItems.find(function(k) {
              var R = k.item;
              return R.type.name === "Scatter";
            });
            E && (_ = Y(Y({}, _), E.props.points[A].tooltipPosition), C = E.props.points[A].tooltipPayload);
            var j = {
              activeTooltipIndex: A,
              isTooltipActive: !0,
              activeLabel: T,
              activePayload: C,
              activeCoordinate: _
            };
            this.setState(j), this.renderCursor(P), this.accessibilityManager.setIndex(A);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(w, O) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== O.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== w.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== w.margin) {
          var g, b;
          this.accessibilityManager.setDetails({
            offset: {
              left: (g = this.props.margin.left) !== null && g !== void 0 ? g : 0,
              top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(w) {
        Zc([Ut(w.children, ar)], [Ut(this.props.children, ar)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var w = Ut(this.props.children, ar);
        if (w && typeof w.props.shared == "boolean") {
          var O = w.props.shared ? "axis" : "item";
          return l.indexOf(O) >= 0 ? O : i;
        }
        return i;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(w) {
        if (!this.container)
          return null;
        var O = this.container, g = O.getBoundingClientRect(), b = aR(g), $ = {
          chartX: Math.round(w.pageX - b.left),
          chartY: Math.round(w.pageY - b.top)
        }, P = g.width / O.offsetWidth || 1, A = this.inRange($.chartX, $.chartY, P);
        if (!A)
          return null;
        var T = this.state, C = T.xAxisMap, M = T.yAxisMap, D = this.getTooltipEventType();
        if (D !== "axis" && C && M) {
          var I = Ln(C).scale, _ = Ln(M).scale, E = I && I.invert ? I.invert($.chartX) : null, j = _ && _.invert ? _.invert($.chartY) : null;
          return Y(Y({}, $), {}, {
            xValue: E,
            yValue: j
          });
        }
        var k = Zm(this.state, this.props.data, this.props.layout, A);
        return k ? Y(Y({}, $), k) : null;
      }
    }, {
      key: "inRange",
      value: function(w, O) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, $ = w / g, P = O / g;
        if (b === "horizontal" || b === "vertical") {
          var A = this.state.offset, T = $ >= A.left && $ <= A.left + A.width && P >= A.top && P <= A.top + A.height;
          return T ? {
            x: $,
            y: P
          } : null;
        }
        var C = this.state, M = C.angleAxisMap, D = C.radiusAxisMap;
        if (M && D) {
          var I = Ln(M);
          return Ph({
            x: $,
            y: P
          }, I);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var w = this.props.children, O = this.getTooltipEventType(), g = Ut(w, ar), b = {};
        g && O === "axis" && (g.props.trigger === "click" ? b = {
          onClick: this.handleClick
        } : b = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var $ = Uo(this.props, this.handleOuterEvent);
        return Y(Y({}, $), b);
      }
    }, {
      key: "addListener",
      value: function() {
        Wc.on(Vc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Wc.removeListener(Vc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(w, O, g) {
        for (var b = this.state.formattedGraphicalItems, $ = 0, P = b.length; $ < P; $++) {
          var A = b[$];
          if (A.item === w || A.props.key === w.key || O === Mr(A.item.type) && g === A.childIndex)
            return A;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var w = this.clipPathId, O = this.state.offset, g = O.left, b = O.top, $ = O.height, P = O.width;
        return /* @__PURE__ */ N.createElement("defs", null, /* @__PURE__ */ N.createElement("clipPath", {
          id: w
        }, /* @__PURE__ */ N.createElement("rect", {
          x: g,
          y: b,
          height: $,
          width: P
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var w = this.state.xAxisMap;
        return w ? Object.entries(w).reduce(function(O, g) {
          var b = Km(g, 2), $ = b[0], P = b[1];
          return Y(Y({}, O), {}, ge({}, $, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var w = this.state.yAxisMap;
        return w ? Object.entries(w).reduce(function(O, g) {
          var b = Km(g, 2), $ = b[0], P = b[1];
          return Y(Y({}, O), {}, ge({}, $, P.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(w) {
        var O;
        return (O = this.state.xAxisMap) === null || O === void 0 || (O = O[w]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(w) {
        var O;
        return (O = this.state.yAxisMap) === null || O === void 0 || (O = O[w]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(w) {
        var O = this.state, g = O.formattedGraphicalItems, b = O.activeItem;
        if (g && g.length)
          for (var $ = 0, P = g.length; $ < P; $++) {
            var A = g[$], T = A.props, C = A.item, M = C.type.defaultProps !== void 0 ? Y(Y({}, C.type.defaultProps), C.props) : C.props, D = Mr(C.type);
            if (D === "Bar") {
              var I = (T.data || []).find(function(k) {
                return CV(w, k);
              });
              if (I)
                return {
                  graphicalItem: A,
                  payload: I
                };
            } else if (D === "RadialBar") {
              var _ = (T.data || []).find(function(k) {
                return Ph(w, k);
              });
              if (_)
                return {
                  graphicalItem: A,
                  payload: _
                };
            } else if (Tu(A, b) || Mu(A, b) || Hi(A, b)) {
              var E = v6({
                graphicalItem: A,
                activeTooltipItem: b,
                itemData: M.data
              }), j = M.activeIndex === void 0 ? E : M.activeIndex;
              return {
                graphicalItem: Y(Y({}, A), {}, {
                  childIndex: j
                }),
                payload: Hi(A, b) ? M.data[E] : A.props.data[E]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var w = this;
        if (!hp(this))
          return null;
        var O = this.props, g = O.children, b = O.className, $ = O.width, P = O.height, A = O.style, T = O.compact, C = O.title, M = O.desc, D = Gm(O, X5), I = ve(D, !1);
        if (T)
          return /* @__PURE__ */ N.createElement(jm, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ N.createElement(Jc, Vn({}, I, {
            width: $,
            height: P,
            title: C,
            desc: M
          }), this.renderClipPath(), gp(g, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var _, E;
          I.tabIndex = (_ = this.props.tabIndex) !== null && _ !== void 0 ? _ : 0, I.role = (E = this.props.role) !== null && E !== void 0 ? E : "application", I.onKeyDown = function(k) {
            w.accessibilityManager.keyboardEvent(k);
          }, I.onFocus = function() {
            w.accessibilityManager.focus();
          };
        }
        var j = this.parseEventsOfWrapper();
        return /* @__PURE__ */ N.createElement(jm, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ N.createElement("div", Vn({
          className: Ae("recharts-wrapper", b),
          style: Y({
            position: "relative",
            cursor: "default",
            width: $,
            height: P
          }, A)
        }, j, {
          ref: function(R) {
            w.container = R;
          }
        }), /* @__PURE__ */ N.createElement(Jc, Vn({}, I, {
          width: $,
          height: P,
          title: C,
          desc: M,
          style: pU
        }), this.renderClipPath(), gp(g, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(S.Component);
  ge(h, "displayName", r), ge(h, "defaultProps", Y({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, f)), ge(h, "getDerivedStateFromProps", function(v, y) {
    var x = v.dataKey, w = v.data, O = v.children, g = v.width, b = v.height, $ = v.layout, P = v.stackOffset, A = v.margin, T = y.dataStartIndex, C = y.dataEndIndex;
    if (y.updateId === void 0) {
      var M = Qm(v);
      return Y(Y(Y({}, M), {}, {
        updateId: 0
      }, p(Y(Y({
        props: v
      }, M), {}, {
        updateId: 0
      }), y)), {}, {
        prevDataKey: x,
        prevData: w,
        prevWidth: g,
        prevHeight: b,
        prevLayout: $,
        prevStackOffset: P,
        prevMargin: A,
        prevChildren: O
      });
    }
    if (x !== y.prevDataKey || w !== y.prevData || g !== y.prevWidth || b !== y.prevHeight || $ !== y.prevLayout || P !== y.prevStackOffset || !zn(A, y.prevMargin)) {
      var D = Qm(v), I = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: y.chartX,
        chartY: y.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: y.isTooltipActive
      }, _ = Y(Y({}, Zm(y, w, $)), {}, {
        updateId: y.updateId + 1
      }), E = Y(Y(Y({}, D), I), _);
      return Y(Y(Y({}, E), p(Y({
        props: v
      }, E), y)), {}, {
        prevDataKey: x,
        prevData: w,
        prevWidth: g,
        prevHeight: b,
        prevLayout: $,
        prevStackOffset: P,
        prevMargin: A,
        prevChildren: O
      });
    }
    if (!Zc(O, y.prevChildren)) {
      var j, k, R, B, H = Ut(O, fa), L = H && (j = (k = H.props) === null || k === void 0 ? void 0 : k.startIndex) !== null && j !== void 0 ? j : T, V = H && (R = (B = H.props) === null || B === void 0 ? void 0 : B.endIndex) !== null && R !== void 0 ? R : C, z = L !== T || V !== C, K = !Ce(w), J = K && !z ? y.updateId : y.updateId + 1;
      return Y(Y({
        updateId: J
      }, p(Y(Y({
        props: v
      }, y), {}, {
        updateId: J,
        dataStartIndex: L,
        dataEndIndex: V
      }), y)), {}, {
        prevChildren: O,
        dataStartIndex: L,
        dataEndIndex: V
      });
    }
    return null;
  }), ge(h, "renderActiveDot", function(v, y, x) {
    var w;
    return /* @__PURE__ */ S.isValidElement(v) ? w = /* @__PURE__ */ S.cloneElement(v, y) : we(v) ? w = v(y) : w = /* @__PURE__ */ N.createElement(Pu, y), /* @__PURE__ */ N.createElement(Ne, {
      className: "recharts-active-dot",
      key: x
    }, w);
  });
  var m = /* @__PURE__ */ S.forwardRef(function(y, x) {
    return /* @__PURE__ */ N.createElement(h, Vn({}, y, {
      ref: x
    }));
  });
  return m.displayName = h.displayName, m;
}, OU = $w({
  chartName: "PieChart",
  GraphicalChild: Wr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Eu
  }, {
    axisType: "radiusAxis",
    AxisComp: _u
  }],
  formatAxisMap: eH,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), $U = $w({
  chartName: "AreaChart",
  GraphicalChild: nn,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Lu
  }, {
    axisType: "yAxis",
    AxisComp: Bu
  }],
  formatAxisMap: Kz
});
const PU = (e) => e <= 7 ? { start: 1, end: 1 } : e <= 30 ? { start: 2, end: 2 } : { start: Math.floor(e * 0.1), end: Math.floor(e * 0.1) };
function CU({ data: e, labels: t }) {
  const r = Math.max(...e), n = Math.min(...e), a = e.reduce((c, s, f) => (s === r && c.push(f), c), []), i = e.reduce((c, s, f) => (s === n && c.push(f), c), []), o = a[Math.floor(a.length / 2)], l = i[Math.floor(i.length / 2)], u = e.map((c, s) => ({
    name: t[s],
    value: c,
    label: s === o || s === l ? `$${cc(c)}` : null
  }));
  return /* @__PURE__ */ F.jsx(Jb, { width: "100%", height: "100%", children: /* @__PURE__ */ F.jsxs(
    $U,
    {
      data: u,
      margin: { top: 30, right: 0, left: 0, bottom: 15 },
      children: [
        /* @__PURE__ */ F.jsx("defs", { children: /* @__PURE__ */ F.jsxs("linearGradient", { id: "colorValue", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ F.jsx("stop", { offset: "0%", stopColor: "#ccfda8", stopOpacity: 1 }),
          /* @__PURE__ */ F.jsx("stop", { offset: "100%", stopColor: "#ccfda8", stopOpacity: 0.05 })
        ] }) }),
        /* @__PURE__ */ F.jsx(
          Lu,
          {
            dataKey: "name",
            hide: !0
          }
        ),
        /* @__PURE__ */ F.jsx(
          Bu,
          {
            hide: !0
          }
        ),
        /* @__PURE__ */ F.jsx(
          ar,
          {
            formatter: (c) => [`$${cc(c)}`],
            contentStyle: {
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            },
            labelStyle: {
              color: "#666"
            }
          }
        ),
        /* @__PURE__ */ F.jsx(
          nn,
          {
            type: "monotone",
            dataKey: "value",
            stroke: "#52c41a",
            strokeWidth: 2,
            fill: "url(#colorValue)",
            animationDuration: 1e3,
            label: ({ x: c, y: s, value: f, index: d }) => {
              if (d === o || d === l) {
                const { start: p, end: h } = PU(e.length), m = d <= p, v = d >= e.length - h;
                let y = "middle", x = 0;
                v ? (y = "end", x = -10) : m && (y = "start", x = 10);
                const w = f === r ? -10 : 15;
                return /* @__PURE__ */ F.jsxs(
                  "text",
                  {
                    x: c,
                    y: s,
                    dx: x,
                    dy: w,
                    fill: "#262626",
                    fontSize: 12,
                    textAnchor: y,
                    children: [
                      "$",
                      cc(f)
                    ]
                  }
                );
              }
              return null;
            }
          }
        )
      ]
    }
  ) });
}
function _U({ data: e }) {
  const t = S.useMemo(() => {
    const r = e.reduce((n, a) => n + a.value, 0);
    return e.map((n) => ({
      ...n,
      value: r ? Number((n.value / r * 100).toFixed(2)) : 0
    }));
  }, [e]);
  return /* @__PURE__ */ F.jsxs("div", { className: "", children: [
    /* @__PURE__ */ F.jsx("div", { className: "h-[160px]", children: /* @__PURE__ */ F.jsx(Jb, { width: "100%", height: "100%", children: /* @__PURE__ */ F.jsxs(OU, { children: [
      /* @__PURE__ */ F.jsx(
        Wr,
        {
          data: t,
          cx: "50%",
          cy: "50%",
          innerRadius: "75%",
          outerRadius: "100%",
          dataKey: "value",
          animationDuration: 1e3,
          children: e.map((r, n) => /* @__PURE__ */ F.jsx(pu, { fill: r.color }, `cell-${n}`))
        }
      ),
      /* @__PURE__ */ F.jsx(
        ar,
        {
          formatter: (r) => [`${r}%`],
          contentStyle: {
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }
        }
      )
    ] }) }) }),
    /* @__PURE__ */ F.jsx("div", { className: "flex gap-x-4 gap-y-2 flex-wrap justify-center mt-4 mx-auto", children: e.map((r, n) => /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2", title: `$${r.value}`, children: [
      /* @__PURE__ */ F.jsx(
        "div",
        {
          className: "w-3 h-3 rounded-full",
          style: { backgroundColor: r.color }
        }
      ),
      /* @__PURE__ */ F.jsx("span", { className: "text-sm text-gray-600", children: Sn.getToken(r.label).symbol })
    ] }, n)) })
  ] });
}
const AU = ["performanceChart"], EU = async (e, t) => {
  try {
    const r = await Gi.get("/user-assets/performance-chart", {
      params: {
        address: e,
        days: t
      }
    });
    return {
      chartData: r.data.chartData,
      distribution: r.data.distribution
    };
  } catch (r) {
    throw Af(r);
  }
};
function TU(e, t) {
  const { address: r } = Ki.all();
  return Pf({
    queryKey: [...AU, r],
    queryFn: () => EU(r, e),
    enabled: (t == null ? void 0 : t.enabled) && !!r,
    staleTime: Cf(_f)
  });
}
const MU = Sn.createTokenMap((e) => e.color), IU = [
  "1Y",
  "YTD",
  "1M",
  "7D"
], jU = (e) => {
  switch (e) {
    case "1Y":
      return 365;
    case "YTD":
      return lt().diff(lt().startOf("year"), "day");
    case "1M":
      return 30;
    case "7D":
      return 7;
    default:
      return 365;
  }
};
function DU() {
  const e = ql(), { address: t } = Ki.all(), [r, n] = S.useState("7D"), [a, i] = S.useState([]), [o, l] = S.useState([]), [u, c] = S.useState([]), { data: s, isFetched: f, refetch: d } = TU(365, {
    enabled: !!t
  });
  S.useEffect(() => {
    f && p();
  }, [f]);
  const p = async () => {
    try {
      h(r);
      const v = ((s == null ? void 0 : s.distribution) || []).map((y) => ({
        label: y.label,
        value: y.value,
        color: MU[y.label]
      }));
      c(v);
    } catch (m) {
      const v = Af(m);
      dg.error(v.message);
    }
  }, h = (m) => {
    if (n(m), !s) return;
    const v = jU(m), y = s.chartData.slice(-v);
    i(y.map((x) => x.value)), l(y.map((x) => x.date));
  };
  return /* @__PURE__ */ F.jsxs("div", { children: [
    /* @__PURE__ */ F.jsx("div", { className: xe(
      "text-[#111111] font-bold",
      "text-2xl tablet:text-[32px]",
      "mb-6"
    ), children: "Overview" }),
    /* @__PURE__ */ F.jsxs("div", { className: xe(
      "flex flex-wrap justify-between",
      "gap-0 mobile:gap-[18px]"
    ), children: [
      /* @__PURE__ */ F.jsxs("div", { className: xe(
        "border border-[#ebebeb] rounded-xl p-[20px]",
        "w-full tablet:w-[366px] laptop:w-[500px] desktop:w-[804px]"
      ), children: [
        /* @__PURE__ */ F.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ F.jsx("p", { className: "text-base text-[#111111] font-bold leading-tight", children: "Performance" }),
          /* @__PURE__ */ F.jsx(
            Fw,
            {
              value: r,
              onValueChange: (m) => h(m),
              children: /* @__PURE__ */ F.jsx(Hw, { className: "h-[28px] bg-transparent", children: IU.map((m) => /* @__PURE__ */ F.jsx(
                Ww,
                {
                  value: m,
                  className: xe(
                    "h-[20px] pl-[16px] pr-0 text-base font-normal text-[#bdbdbd]",
                    "data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:font-bold"
                  ),
                  children: m
                },
                m
              )) })
            }
          )
        ] }),
        /* @__PURE__ */ F.jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ F.jsx(CU, { data: a, labels: o }) })
      ] }),
      /* @__PURE__ */ F.jsxs("div", { className: xe(
        "border border-[#ebebeb] rounded-xl p-[20px]",
        "flex-1"
      ), children: [
        /* @__PURE__ */ F.jsxs("div", { className: "flex justify-between items-center mb-[20px]", children: [
          /* @__PURE__ */ F.jsx("p", { className: "text-base text-[#111111] font-bold leading-tight", children: "Crypto allocation" }),
          /* @__PURE__ */ F.jsx("button", { className: "text-base text-[#727272]", onClick: () => e("/dashboard/viewall"), children: "View all" })
        ] }),
        /* @__PURE__ */ F.jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ F.jsx(_U, { data: u }) })
      ] })
    ] })
  ] });
}
const { RangePicker: kU } = Pa, Uc = [
  { symbol: "ALL", icon: "" },
  ...Sn.getAllTokens().map((e) => ({
    symbol: e.symbol,
    icon: e.logo
  }))
];
function NU({
  onDateChange: e,
  dates: t,
  onTokenChange: r,
  selectedToken: n,
  onReset: a,
  onDownloadCSV: i,
  onRefresh: o,
  isLoading: l
}) {
  var s, f;
  const u = (d) => {
    r(d);
  }, c = () => {
    l || (Tf("refresh"), o());
  };
  return /* @__PURE__ */ F.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-[14px]", children: [
      /* @__PURE__ */ F.jsxs(Vw, { children: [
        /* @__PURE__ */ F.jsxs(zw, { className: xe(
          "w-[120px] h-10 bg-white border border-[#E0E0E0] rounded-md",
          "hover:border-[#52c41a] focus:ring-[#52c41a] focus:outline-none",
          "text-sm px-3",
          "flex items-center justify-between"
        ), children: [
          /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ F.jsx(
              "img",
              {
                src: (s = Uc.find((d) => d.symbol === n)) == null ? void 0 : s.icon,
                alt: n,
                className: xe(
                  "w-4 h-4 rounded-full",
                  !((f = Uc.find((d) => d.symbol === n)) != null && f.icon) && "invisible"
                )
              }
            ),
            /* @__PURE__ */ F.jsx("span", { children: n })
          ] }),
          /* @__PURE__ */ F.jsx(Kw, { className: "h-4 w-4 opacity-50" })
        ] }),
        /* @__PURE__ */ F.jsx(Uw, { className: "bg-white", children: Uc.map((d) => /* @__PURE__ */ F.jsxs(
          Yw,
          {
            onClick: () => u(d.symbol),
            className: xe(
              "cursor-pointer text-sm",
              "flex items-center justify-between"
            ),
            children: [
              /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ F.jsx(
                  "img",
                  {
                    src: d.icon,
                    alt: d.symbol,
                    className: xe(
                      "w-4 h-4 rounded-full",
                      !d.icon && "invisible"
                    )
                  }
                ),
                /* @__PURE__ */ F.jsx("span", { className: xe(
                  n === d.symbol && "text-[#52c41a]"
                ), children: d.symbol })
              ] }),
              n === d.symbol && /* @__PURE__ */ F.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          },
          d.symbol
        )) })
      ] }),
      /* @__PURE__ */ F.jsx(
        ig,
        {
          theme: {
            token: {
              colorPrimary: "#52c41a",
              controlHeight: 40
            }
          },
          children: /* @__PURE__ */ F.jsx(
            kU,
            {
              value: [
                lt(t[0]),
                lt(t[1])
              ],
              disabledDate: (d) => d && d > lt().endOf("day"),
              onChange: (d) => {
                if (d && d[0] && d[1]) {
                  const p = d[0].startOf("day").toDate(), h = d[1].endOf("day").toDate();
                  e([p, h]);
                }
              },
              allowClear: !1
            }
          )
        }
      ),
      /* @__PURE__ */ F.jsx("div", { className: "hidden tablet:block text-[#52c41a]", children: /* @__PURE__ */ F.jsx(
        Gw,
        {
          size: 22,
          className: xe(
            "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
            l && "animate-spin duration-1000 hover:scale-100"
          ),
          onClick: () => c()
        }
      ) })
    ] }),
    /* @__PURE__ */ F.jsx(Ef, { className: "hidden tablet:block", onClick: i, children: "Download CSV" })
  ] });
}
const eg = Object.values(qw).reduce((e, t) => ({
  ...e,
  [t]: Sn.getToken(t).logo
}), {}), tg = (e, t = 12) => {
  const r = r1(BigInt(e)), [n, a = ""] = r.split("."), i = n.length > t ? n.slice(0, t) : n, o = i.replace(/\B(?=(\d{3})+(?!\d))/g, ","), l = t - i.length, u = l > 0 && a ? "." + a.slice(0, l) : "";
  return o + u;
}, Yc = (e) => {
  const r = `${Sn.getToken(e.token).scanTransactionUrl}/${e.hash}`;
  window.open(r, "_blank");
};
function RU({ data: e, isLoading: t }) {
  return /* @__PURE__ */ F.jsxs(o1, { className: xe(
    t && "opacity-30"
  ), children: [
    /* @__PURE__ */ F.jsx(l1, { className: "hidden tablet:table-header-group", children: /* @__PURE__ */ F.jsxs(sc, { className: "text-xs text-[#7b8293] leading-none hover:bg-transparent", children: [
      /* @__PURE__ */ F.jsx(on, { className: "h-[16px] px-0 pb-[8px]", children: "Transaction" }),
      /* @__PURE__ */ F.jsx(on, { className: "h-[16px] px-0 pb-[8px]", children: "Amount" }),
      /* @__PURE__ */ F.jsx(on, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Network" }),
      /* @__PURE__ */ F.jsx(on, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "From" }),
      /* @__PURE__ */ F.jsx(on, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "To" }),
      /* @__PURE__ */ F.jsx(on, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Transaction Hash" }),
      /* @__PURE__ */ F.jsx(on, { className: "h-[16px] px-0 pb-[8px] text-right", children: "Time" })
    ] }) }),
    /* @__PURE__ */ F.jsx(Wd, { className: "hidden tablet:table-row-group", children: e.map((r) => /* @__PURE__ */ F.jsxs(sc, { className: "hover:bg-transparent", children: [
      /* @__PURE__ */ F.jsx(zr, { className: xe(
        "px-0 py-6",
        "desktop:w-[121px] laptop:w-[121px] tablet:w-[100px]"
      ), children: /* @__PURE__ */ F.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ F.jsx("img", { src: eg[r.token], alt: r.token, className: "w-[28px] h-[28px]" }),
        /* @__PURE__ */ F.jsx("span", { className: xe(
          "font-bold leading-tight text-[#3d3d3d]",
          "text-xs desktop:text-sm"
        ), children: r.type })
      ] }) }),
      /* @__PURE__ */ F.jsx(zr, { className: xe(
        "px-0 py-6",
        "desktop:w-[190px] laptop:w-[150px] w-[122px]"
      ), children: /* @__PURE__ */ F.jsxs("span", { className: xe(
        "font-bold leading-tight",
        "text-xs desktop:text-sm",
        r.type === "Receive" ? "text-[#00a478]" : "text-[#ff6363]"
      ), children: [
        r.type === "Receive" ? "+" : "-",
        tg(r.amount),
        " ",
        Sn.getToken(r.token).symbol
      ] }) }),
      /* @__PURE__ */ F.jsx(zr, { className: xe(
        "hidden tablet:table-cell px-0 py-6",
        "text-[#929292] font-medium leading-none",
        "text-xs desktop:text-sm",
        "tablet:w-[70px] laptop:w-[90px] desktop:w-[120px]"
      ), children: r.network }),
      /* @__PURE__ */ F.jsxs(zr, { className: xe(
        "hidden tablet:table-cell px-0 py-6",
        "text-xs text-[#929292] font-medium leading-none break-all"
      ), children: [
        /* @__PURE__ */ F.jsx("div", { className: xe(
          "hidden tablet:block laptop:hidden",
          "max-w-[104px] mr-[10px]"
        ), children: /* @__PURE__ */ F.jsx(
          Dn,
          {
            title: /* @__PURE__ */ F.jsx(
              jn,
              {
                address: r.from,
                className: "text-white text-xs",
                iconClassName: "text-white",
                iconSize: 14
              }
            ),
            trigger: "hover",
            placement: "top",
            overlayClassName: "max-w-full",
            children: /* @__PURE__ */ F.jsx(
              "div",
              {
                className: "cursor-pointer",
                style: {
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  wordBreak: "break-word"
                },
                children: r.from
              }
            )
          }
        ) }),
        /* @__PURE__ */ F.jsx("div", { className: xe(
          "hidden laptop:block",
          "laptop:w-[131px] desktop:w-[216px]",
          "laptop:mr-[10px] desktop:mr-[30px]"
        ), children: /* @__PURE__ */ F.jsx(
          Dn,
          {
            title: /* @__PURE__ */ F.jsx(
              jn,
              {
                address: r.from,
                className: "text-white text-xs",
                iconClassName: "text-white",
                iconSize: 14
              }
            ),
            trigger: "hover",
            placement: "top",
            overlayClassName: "max-w-full",
            children: /* @__PURE__ */ F.jsx("div", { className: "truncate cursor-pointer", children: r.from })
          }
        ) })
      ] }),
      /* @__PURE__ */ F.jsxs(zr, { className: xe(
        "hidden tablet:table-cell px-0 py-6",
        "text-xs text-[#929292] font-medium leading-none break-all"
      ), children: [
        /* @__PURE__ */ F.jsx("div", { className: xe(
          "hidden tablet:block laptop:hidden",
          "max-w-[104px] mr-[10px]"
        ), children: /* @__PURE__ */ F.jsx(
          Dn,
          {
            title: /* @__PURE__ */ F.jsx(
              jn,
              {
                address: r.to,
                className: "text-white text-xs",
                iconClassName: "text-white",
                iconSize: 14
              }
            ),
            trigger: "hover",
            placement: "top",
            overlayClassName: "max-w-full",
            children: /* @__PURE__ */ F.jsx(
              "div",
              {
                className: "cursor-pointer",
                style: {
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  wordBreak: "break-word"
                },
                children: r.to
              }
            )
          }
        ) }),
        /* @__PURE__ */ F.jsx("div", { className: xe(
          "hidden laptop:block",
          "laptop:w-[131px] desktop:w-[216px]",
          "laptop:mr-[10px] desktop:mr-[30px]"
        ), children: /* @__PURE__ */ F.jsx(
          Dn,
          {
            title: /* @__PURE__ */ F.jsx(
              jn,
              {
                address: r.to,
                className: "text-white text-xs",
                iconClassName: "text-white",
                iconSize: 14
              }
            ),
            trigger: "hover",
            placement: "top",
            overlayClassName: "max-w-full",
            children: /* @__PURE__ */ F.jsx("div", { className: "truncate cursor-pointer", children: r.to })
          }
        ) })
      ] }),
      /* @__PURE__ */ F.jsxs(zr, { className: xe(
        "hidden tablet:table-cell px-0 py-6",
        "text-xs text-[#929292] font-medium leading-none break-all"
      ), children: [
        /* @__PURE__ */ F.jsx("div", { className: xe(
          "hidden tablet:block laptop:hidden",
          "max-w-[104px] mr-[5px]"
        ), children: /* @__PURE__ */ F.jsx(
          "div",
          {
            className: "cursor-pointer",
            style: {
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              wordBreak: "break-word"
            },
            onClick: () => Yc(r),
            children: r.hash
          }
        ) }),
        /* @__PURE__ */ F.jsx("div", { className: xe(
          "hidden laptop:block",
          "laptop:w-[131px] desktop:w-[216px]",
          "laptop:mr-[10px] desktop:mr-[30px]"
        ), children: /* @__PURE__ */ F.jsx("div", { className: "truncate cursor-pointer", onClick: () => Yc(r), children: r.hash }) })
      ] }),
      /* @__PURE__ */ F.jsx(zr, { className: "px-0 py-6 text-right text-xs text-black leading-none font-normal w-[110px]", children: new Date(r.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
      }) })
    ] }, r.id)) }),
    /* @__PURE__ */ F.jsx(Wd, { className: "table-row-group tablet:hidden", children: e.map((r) => /* @__PURE__ */ F.jsx(sc, { className: "hover:bg-transparent", children: /* @__PURE__ */ F.jsx(zr, { className: xe(
      "px-0 py-6 w-full"
    ), children: /* @__PURE__ */ F.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ F.jsx("img", { src: eg[r.token], alt: r.token, className: "w-[28px] h-[28px]" }),
      /* @__PURE__ */ F.jsxs("div", { className: "flex flex-col w-[300px]", children: [
        /* @__PURE__ */ F.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: r.type }),
        /* @__PURE__ */ F.jsxs("div", { className: "flex flex-col gap-2 mt-[6px] text-xs text-[#929292] font-medium leading-none", children: [
          /* @__PURE__ */ F.jsx(
            Dn,
            {
              title: /* @__PURE__ */ F.jsx(
                jn,
                {
                  address: r.to,
                  className: "text-white text-xs",
                  iconClassName: "text-white",
                  iconSize: 14
                }
              ),
              trigger: "click",
              placement: "top",
              overlayClassName: "max-w-full",
              children: /* @__PURE__ */ F.jsxs("div", { className: "truncate cursor-pointer", children: [
                "From: ",
                r.from
              ] })
            }
          ),
          /* @__PURE__ */ F.jsx(
            Dn,
            {
              title: /* @__PURE__ */ F.jsx(
                jn,
                {
                  address: r.to,
                  className: "text-white text-xs",
                  iconClassName: "text-white",
                  iconSize: 14
                }
              ),
              trigger: "click",
              placement: "top",
              overlayClassName: "max-w-full",
              children: /* @__PURE__ */ F.jsxs("div", { className: "truncate cursor-pointer", children: [
                "To: ",
                r.to
              ] })
            }
          ),
          /* @__PURE__ */ F.jsx("div", { className: "w-[300px]", children: /* @__PURE__ */ F.jsxs("div", { className: "truncate cursor-pointer", onClick: () => Yc(r), children: [
            "Transaction Hash: ",
            r.hash
          ] }) })
        ] }),
        /* @__PURE__ */ F.jsxs("div", { className: "flex justify-between mt-[20px]", children: [
          /* @__PURE__ */ F.jsxs("p", { children: [
            /* @__PURE__ */ F.jsx("span", { className: "text-[#929292]", children: "Network:" }),
            " ",
            r.network
          ] }),
          /* @__PURE__ */ F.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ F.jsxs("p", { className: xe(
              "text-lg font-bold leading-tight",
              r.type === "Receive" ? "text-[#00a478]" : "text-[#ff6363]"
            ), children: [
              r.type === "Receive" ? "+" : "-",
              tg(r.amount),
              " ",
              Sn.getToken(r.token).symbol
            ] }),
            /* @__PURE__ */ F.jsx("p", { children: new Date(r.timestamp).toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }) })
          ] })
        ] })
      ] })
    ] }) }) }, r.id)) })
  ] });
}
const LU = ["transactionHistory"], BU = async (e, t) => {
  try {
    return (await Gi.get("/user-assets/transaction-history", {
      params: {
        address: e,
        startDate: t == null ? void 0 : t.startDate,
        endDate: t == null ? void 0 : t.endDate,
        tokenType: (t == null ? void 0 : t.tokenType) === "ALL" || t == null ? void 0 : t.tokenType,
        useCache: t == null ? void 0 : t.useCache
      }
    })).data;
  } catch (r) {
    throw Af(r);
  }
};
function FU(e) {
  const { address: t } = Ki.all();
  return Pf({
    queryKey: [...LU, t, e == null ? void 0 : e.startDate, e == null ? void 0 : e.endDate, e == null ? void 0 : e.tokenType, e == null ? void 0 : e.useCache],
    queryFn: () => BU(t, e),
    enabled: (e == null ? void 0 : e.enabled) && !!t,
    staleTime: Cf(_f)
  });
}
const rg = [
  lt().subtract(1, "month").startOf("day").toDate(),
  lt().endOf("day").toDate()
];
function HU() {
  const { address: e } = Ki.all(), [t, r] = S.useState(rg), [n, a] = S.useState("ALL"), [i, o] = S.useState(!1), { data: l } = fg({
    enabled: !!e
  }), { data: u, isFetching: c, refetch: s, error: f } = FU({
    enabled: !!e,
    startDate: t[0].getTime(),
    endDate: t[1].getTime(),
    tokenType: n === "ALL" ? void 0 : n,
    useCache: !1
  });
  S.useEffect(() => {
    d(rg, "ALL");
  }, []), S.useEffect(() => {
    f && dg.error(f.message);
  }, [f]);
  const d = async (y, x = "ALL") => {
    r(y), a(x);
  }, p = (y) => {
    a(y), d(t, y);
  }, h = (y) => {
    r(y), d(y, n);
  }, m = async () => {
    o(!1), await s();
  }, v = () => {
    if (!u) return;
    Tf("download csv");
    const y = ["Date", "Type", "Token", "Amount", "Status"], x = u.map(($) => [
      lt($.timestamp).format("YYYY-MM-DD HH:mm:ss"),
      $.type,
      $.token,
      $.amount,
      $.status
    ]), w = [
      y.join(","),
      ...x.map(($) => $.join(","))
    ].join(`
`), O = new Blob([w], { type: "text/csv;charset=utf-8;" }), g = URL.createObjectURL(O), b = document.createElement("a");
    b.setAttribute("href", g), b.setAttribute("download", `transaction-history-${lt().format("YYYY-MM-DD")}.csv`), document.body.appendChild(b), b.click(), document.body.removeChild(b), URL.revokeObjectURL(g);
  };
  return /* @__PURE__ */ F.jsxs("div", { className: "min-h-[500px]", children: [
    /* @__PURE__ */ F.jsx("div", { className: xe(
      "text-[#111111] font-bold",
      "text-2xl tablet:text-[32px]",
      "mb-6"
    ), children: "History" }),
    l && !l.isZero && /* @__PURE__ */ F.jsx("div", { className: "mb-[40px]", children: /* @__PURE__ */ F.jsx(
      NU,
      {
        onDateChange: h,
        dates: t,
        onTokenChange: p,
        selectedToken: n,
        onDownloadCSV: v,
        onRefresh: m,
        isLoading: c
      }
    ) }),
    !c && (u == null ? void 0 : u.length) === 0 ? /* @__PURE__ */ F.jsxs("div", { className: "mt-[96px]", children: [
      /* @__PURE__ */ F.jsx(
        u1,
        {
          className: "mx-auto w-[120px]",
          text: "No transaction history now, but you can connect wallet and make a transfer!",
          imgSrc: "/imgs/icons/history_empty.svg"
        }
      ),
      /* @__PURE__ */ F.jsx(f1, { className: "mt-[24px]", buttonClassName: "text-white bg-black rounded-full py-[10px] px-[16px] w-[173px]" })
    ] }) : /* @__PURE__ */ F.jsx(RU, { data: u || [], isLoading: c })
  ] });
}
const WU = ["purchased-products"], VU = async () => (await Gi.get("/user/purchasedProducts")).data, zU = () => Pf({
  queryKey: WU,
  queryFn: VU,
  staleTime: Cf(_f)
});
function ng({
  className: e,
  icon: t,
  title: r,
  description: n,
  onClick: a
}) {
  return /* @__PURE__ */ F.jsx(
    "div",
    {
      className: xe(
        "border border-[#ebebeb] bg-[#fafafa] rounded-[20px]",
        "p-[16px] tablet:p-[40px] tablet:pb-[20px]",
        e
      ),
      onClick: a,
      children: /* @__PURE__ */ F.jsxs("div", { className: xe(
        "block tablet:flex tablet:items-center tablet:justify-between flex-wrap",
        "tablet:h-[46px] tablet:mb-[30px] tablet:px-[20px]"
      ), children: [
        /* @__PURE__ */ F.jsxs("div", { className: xe(
          "flex items-center",
          "shrink-0 min-w-fit",
          "w-[218px]",
          "mb-[12px] tablet:mb-0"
        ), children: [
          /* @__PURE__ */ F.jsx(
            "img",
            {
              className: xe(
                "w-[27px] tablet:w-[37px]",
                "mr-[16px] tablet:mr-[12px]"
              ),
              src: t,
              alt: "connect-dapps"
            }
          ),
          /* @__PURE__ */ F.jsx("p", { className: xe(
            "text-[#111111] font-bold leading-normal",
            "text-base tablet:text-2xl"
          ), children: r })
        ] }),
        /* @__PURE__ */ F.jsx("p", { className: xe(
          "text-[#828282]",
          "text-[10px] tablet:text-sm",
          "leading-3 tablet:leading-none",
          "w-full tablet:w-[319px] laptop:w-[394px] desktop:w-[587px]",
          "mb-[10px] tablet:mb-0"
        ), children: n }),
        /* @__PURE__ */ F.jsx("div", { className: xe(
          "w-fit ml-auto tablet:ml-0 tablet:w-auto"
        ), children: /* @__PURE__ */ F.jsx(
          "img",
          {
            className: "w-[30px] tablet:w-[44px]",
            src: "/imgs/icons/arrow_right_long.svg",
            alt: "arrow-right"
          }
        ) })
      ] })
    }
  );
}
function UU() {
  const e = ql(), { handleConnect: t } = Vd(), { data: r } = zU(), {
    setIsModalOpen: n,
    setDappInfo: a,
    isConnected: i,
    setDisplayUriInput: o
  } = Vd(), [l, u] = S.useState(!1), [c, s] = S.useState(null), f = () => {
    Tf("handleConnectDApps"), t();
  }, d = () => {
    const p = (r == null ? void 0 : r.filter((h) => h.category === "Payment")) || [];
    if (p.length >= 2) {
      e("/marketplace?category=Payment");
      return;
    }
    if (p.length === 1) {
      const h = p.find((v) => v.vendor === "Moonpay"), m = p.find((v) => v.integrationPoints.includes("walletconnect"));
      h ? (s(h), u(!0)) : m ? (a({
        name: m.name,
        url: m.serviceUrl
      }), o(!1), n(!0)) : e("/marketplace?category=Payment");
      return;
    }
    e("/marketplace?category=Payment");
  };
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    /* @__PURE__ */ F.jsxs("div", { children: [
      /* @__PURE__ */ F.jsx("p", { className: xe(
        "text-[#111111] font-bold leading-tight",
        "text-2xl tablet:text-[32px]",
        "mb-[24px] tablet:mb-[40px]"
      ), children: "Let’s get started" }),
      /* @__PURE__ */ F.jsx(
        ng,
        {
          icon: "/imgs/icons/connect_dapps.svg",
          title: "Connect to dApps",
          description: "Link your wallet to any dApp easily with WalletConnect. Enjoy secure access to DeFi, NFTs, and more—all from your wallet in just a few taps!",
          className: "mb-[24px] cursor-pointer",
          onClick: f
        }
      ),
      /* @__PURE__ */ F.jsx(
        ng,
        {
          icon: "/imgs/icons/top_up.svg",
          title: "Top up",
          description: "Transition smoothly into the web3 world with our intuitive on-ramp. Fund your wallet easily, access decentralized apps.",
          className: "cursor-pointer",
          onClick: d
        }
      )
    ] }),
    /* @__PURE__ */ F.jsx(wg, { isOpen: l, onClose: () => u(!1), product: c })
  ] });
}
function YU({
  className: e
}) {
  const t = ql(), [r, n] = S.useState([]);
  S.useEffect(() => {
    a();
  }, []);
  const a = async () => {
    const i = await Gi.get("/marketplace/product/recommend-products");
    n(i.data);
  };
  return /* @__PURE__ */ F.jsxs("div", { className: xe(
    e
  ), children: [
    /* @__PURE__ */ F.jsxs("div", { className: xe(
      "flex items-center justify-between flex-wrap",
      "mb-[24px]"
    ), children: [
      /* @__PURE__ */ F.jsxs("div", { children: [
        /* @__PURE__ */ F.jsx("p", { className: xe(
          "text-[#111111] font-bold leading-tight",
          "text-2xl tablet:text-[32px]"
        ), children: "Recommended Products" }),
        /* @__PURE__ */ F.jsx("p", { className: xe(
          "text-[#828282] leading-none text-sm mt-[8px]"
        ), children: "Tailor your own decentralized tools" })
      ] }),
      /* @__PURE__ */ F.jsx(Ef, { className: "py-[10px] hidden tablet:block", onClick: () => {
        t("/marketplace");
      }, children: "Explore more features" })
    ] }),
    /* @__PURE__ */ F.jsx("div", { className: xe([
      "flex flex-wrap mx-auto",
      "desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]",
      "desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6"
    ]), children: r.map((i) => /* @__PURE__ */ F.jsx(
      c1,
      {
        ...i,
        activedPurchasedProductIds: [],
        handleRampOpenModal: () => {
        },
        selectedCategory: "",
        className: "mobile:mb-[40px] mb-6"
      },
      i.id
    )) })
  ] });
}
function ag({
  products: e
}) {
  const [t, r] = S.useState([]), [n, a] = S.useState(!1), [i, o] = S.useState({}), { data: l } = Mf();
  S.useEffect(() => {
    if (l && l.purchasedProducts) {
      const s = l.purchasedProducts.filter((f) => f.status === "active").map((f) => f.productId);
      r(s);
    }
  }, [l]);
  const u = (s) => {
    a(!0), o(s);
  }, { handleClick: c } = s1({
    activedPurchasedProductIds: t,
    handleRampOpenModal: u
  });
  return /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
    /* @__PURE__ */ F.jsx("div", { className: xe(
      "flex",
      "tablet:flex-wrap tablet:gap-[24px]",
      "gap-[32px] overflow-x-auto pb-4",
      "scrollbar-none"
    ), children: e.map((s) => /* @__PURE__ */ F.jsxs(
      "div",
      {
        className: xe(
          "w-[154px] border border-[#ebebeb] rounded-2xl px-[22px] py-[22px] text-center cursor-pointer"
        ),
        onClick: () => c(s),
        children: [
          /* @__PURE__ */ F.jsx("img", { className: "w-[52px] h-[52px] mx-auto", src: s.logoUrl, alt: s.name }),
          /* @__PURE__ */ F.jsx("p", { className: "text-sm text-[#111111] truncate", title: s.name, children: s.name })
        ]
      },
      s.id
    )) }),
    /* @__PURE__ */ F.jsx(wg, { isOpen: n, onClose: () => a(!1), product: i })
  ] });
}
function qU() {
  const e = ql(), [t, r] = S.useState("frequently"), [n, a] = S.useState([]), { data: i } = Mf(), [o, l] = S.useState([]);
  S.useEffect(() => {
    i && i.purchasedProducts && u();
  }, [i]);
  const u = async () => {
    const s = await c(), f = (i == null ? void 0 : i.purchasedProducts.filter((p) => p.status === "active").map((p) => ({
      ...s.find((m) => m.id === p.productId),
      lastUsedAt: p.lastUsedAt
    }))) || [], d = f.filter((p) => {
      if (!p.lastUsedAt)
        return !1;
      const h = new Date(p.lastUsedAt);
      return Math.abs((/* @__PURE__ */ new Date()).getTime() - h.getTime()) < 24 * 60 * 60 * 1e3;
    });
    a(d), l(f);
  }, c = async () => (await Gi.get("/marketplace/product/all-products")).data;
  return /* @__PURE__ */ F.jsxs("div", { className: "mt-[80px]", children: [
    /* @__PURE__ */ F.jsxs("div", { className: "flex justify-between items-center border-b border-[#ebebeb]", children: [
      /* @__PURE__ */ F.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ F.jsx(
          "p",
          {
            className: xe(
              "text-[#929292] text-[22px] font-bold cursor-pointer",
              "pb-[14px] mr-[24px]",
              t === "frequently" && "text-black border-b-2 border-black"
            ),
            onClick: () => r("frequently"),
            children: "Frequently used"
          }
        ),
        /* @__PURE__ */ F.jsx(
          "p",
          {
            className: xe(
              "text-[#929292] text-[22px] font-bold cursor-pointer",
              "pb-[14px] mr-[24px]",
              t === "added" && "text-black border-b-2 border-black"
            ),
            onClick: () => r("added"),
            children: "Added"
          }
        )
      ] }),
      /* @__PURE__ */ F.jsx(Ef, { className: "py-[10px] hidden tablet:block", onClick: () => {
        e("/marketplace");
      }, children: "Explore more products" })
    ] }),
    /* @__PURE__ */ F.jsx("div", { className: "mt-4", children: t === "frequently" ? /* @__PURE__ */ F.jsx(ag, { products: n }) : /* @__PURE__ */ F.jsx(ag, { products: o }) })
  ] });
}
function lY() {
  const { address: e } = Ki.all(), { data: t } = fg({
    enabled: !!e
  }), { data: r } = Mf();
  return /* @__PURE__ */ F.jsxs("div", { className: "mt-[40px] tablet:mt-[100px]", children: [
    t && t.isUSDZero && /* @__PURE__ */ F.jsx(UU, {}),
    t && !t.isUSDZero && /* @__PURE__ */ F.jsx(DU, {}),
    ((r == null ? void 0 : r.purchasedProducts) ?? []).length > 0 ? /* @__PURE__ */ F.jsx(qU, {}) : /* @__PURE__ */ F.jsx(YU, { className: "mt-[48px] tablet:mt-[100px]" }),
    /* @__PURE__ */ F.jsx("div", { className: "mt-[60px] tablet:mt-[100px]", children: /* @__PURE__ */ F.jsx(HU, {}) })
  ] });
}
export {
  lY as default
};
