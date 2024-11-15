import { j as V } from "./vendor-radix-CNSo_uHA.js";
import { m as ui, a as es, u as zg, f as Ji, h as Vf, c as Ce, n as P1, o as _1, p as xp, D as E1, b as A1, d as T1, e as M1, B as zf, g as Ug, q as I1 } from "./main-BjushY0K.js";
import { c as De, I as j1, _ as we, h as D1 } from "./vendor-ui-utils-BJ7JrnFc.js";
import { c as ur, g as We, r as b, R as T, p as Oe, j as ts, l as N1, a as R1 } from "./vendor-react-U4DfHahV.js";
import { r as k1, L as B1, l as wp, u as Uf, I as Pa, _ as Yg, a as Uo, g as L1, d as H1, w as Wt, C as qg, c as Yf, b as je, e as en, f as ut, s as F1, h as Gg, i as Kg, S as W1, j as eo, k as V1, m as z1, n as U1, o as qf, p as Gf, q as X, t as fr, K as Mt, v as Xg, x as $r, y as wc, z as Kf, A as se, B as Y1, D as q1, E as Xf, F as Zf, G as Qf, H as Zg, R as rs, J as Br, V as G1, M as K1, N as X1, O as Z1, P as Q1, Q as J1, T as eS, U as tS, W as Vt, X as dr, Y as rS, Z as Yo, $ as nS, a0 as qo, a1 as aS, a2 as iS, a3 as oS, a4 as Qg, a5 as Jg, a6 as ey, a7 as ty } from "./roundedArrow-B8nY1w-V.js";
import { P as Me, B as ry } from "./vendor-utils-BclDYac0.js";
import { _ as ue, e as An, j as ve, k as Kt, f as Sp } from "./vendor-web3-Bd_bcm0c.js";
import { T as lS, a as sS, b as Sc, c as Rn, d as Op, e as Er } from "./table-Dhhux1DB.js";
import { E as cS, R as ny, P as uS, u as fS } from "./index-B_1zzfpv.js";
import { W as dS } from "./index-D6b8OblB.js";
import { u as pS, a as Jf } from "./MarketplaceProvider-CEsK4kup.js";
var hS = Array.isArray, zt = hS, vS = typeof ur == "object" && ur && ur.Object === Object && ur, ay = vS, mS = ay, gS = typeof self == "object" && self && self.Object === Object && self, yS = mS || gS || Function("return this")(), _r = yS, bS = _r, xS = bS.Symbol, to = xS, $p = to, iy = Object.prototype, wS = iy.hasOwnProperty, SS = iy.toString, qa = $p ? $p.toStringTag : void 0;
function OS(e) {
  var t = wS.call(e, qa), r = e[qa];
  try {
    e[qa] = void 0;
    var n = !0;
  } catch {
  }
  var a = SS.call(e);
  return n && (t ? e[qa] = r : delete e[qa]), a;
}
var $S = OS, CS = Object.prototype, PS = CS.toString;
function _S(e) {
  return PS.call(e);
}
var ES = _S, Cp = to, AS = $S, TS = ES, MS = "[object Null]", IS = "[object Undefined]", Pp = Cp ? Cp.toStringTag : void 0;
function jS(e) {
  return e == null ? e === void 0 ? IS : MS : Pp && Pp in Object(e) ? AS(e) : TS(e);
}
var Vr = jS;
function DS(e) {
  return e != null && typeof e == "object";
}
var zr = DS, NS = Vr, RS = zr, kS = "[object Symbol]";
function BS(e) {
  return typeof e == "symbol" || RS(e) && NS(e) == kS;
}
var _a = BS, LS = zt, HS = _a, FS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, WS = /^\w*$/;
function VS(e, t) {
  if (LS(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || HS(e) ? !0 : WS.test(e) || !FS.test(e) || t != null && e in Object(t);
}
var ed = VS;
function zS(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tn = zS;
const Ea = /* @__PURE__ */ We(tn);
var US = Vr, YS = tn, qS = "[object AsyncFunction]", GS = "[object Function]", KS = "[object GeneratorFunction]", XS = "[object Proxy]";
function ZS(e) {
  if (!YS(e))
    return !1;
  var t = US(e);
  return t == GS || t == KS || t == qS || t == XS;
}
var td = ZS;
const Pe = /* @__PURE__ */ We(td);
var QS = _r, JS = QS["__core-js_shared__"], eO = JS, Oc = eO, _p = function() {
  var e = /[^.]+$/.exec(Oc && Oc.keys && Oc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tO(e) {
  return !!_p && _p in e;
}
var rO = tO, nO = Function.prototype, aO = nO.toString;
function iO(e) {
  if (e != null) {
    try {
      return aO.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var oy = iO, oO = td, lO = rO, sO = tn, cO = oy, uO = /[\\^$.*+?()[\]{}|]/g, fO = /^\[object .+?Constructor\]$/, dO = Function.prototype, pO = Object.prototype, hO = dO.toString, vO = pO.hasOwnProperty, mO = RegExp(
  "^" + hO.call(vO).replace(uO, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gO(e) {
  if (!sO(e) || lO(e))
    return !1;
  var t = oO(e) ? mO : fO;
  return t.test(cO(e));
}
var yO = gO;
function bO(e, t) {
  return e == null ? void 0 : e[t];
}
var xO = bO, wO = yO, SO = xO;
function OO(e, t) {
  var r = SO(e, t);
  return wO(r) ? r : void 0;
}
var Tn = OO, $O = Tn, CO = $O(Object, "create"), ns = CO, Ep = ns;
function PO() {
  this.__data__ = Ep ? Ep(null) : {}, this.size = 0;
}
var _O = PO;
function EO(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var AO = EO, TO = ns, MO = "__lodash_hash_undefined__", IO = Object.prototype, jO = IO.hasOwnProperty;
function DO(e) {
  var t = this.__data__;
  if (TO) {
    var r = t[e];
    return r === MO ? void 0 : r;
  }
  return jO.call(t, e) ? t[e] : void 0;
}
var NO = DO, RO = ns, kO = Object.prototype, BO = kO.hasOwnProperty;
function LO(e) {
  var t = this.__data__;
  return RO ? t[e] !== void 0 : BO.call(t, e);
}
var HO = LO, FO = ns, WO = "__lodash_hash_undefined__";
function VO(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = FO && t === void 0 ? WO : t, this;
}
var zO = VO, UO = _O, YO = AO, qO = NO, GO = HO, KO = zO;
function Aa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Aa.prototype.clear = UO;
Aa.prototype.delete = YO;
Aa.prototype.get = qO;
Aa.prototype.has = GO;
Aa.prototype.set = KO;
var XO = Aa;
function ZO() {
  this.__data__ = [], this.size = 0;
}
var QO = ZO;
function JO(e, t) {
  return e === t || e !== e && t !== t;
}
var rd = JO, e$ = rd;
function t$(e, t) {
  for (var r = e.length; r--; )
    if (e$(e[r][0], t))
      return r;
  return -1;
}
var as = t$, r$ = as, n$ = Array.prototype, a$ = n$.splice;
function i$(e) {
  var t = this.__data__, r = r$(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : a$.call(t, r, 1), --this.size, !0;
}
var o$ = i$, l$ = as;
function s$(e) {
  var t = this.__data__, r = l$(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var c$ = s$, u$ = as;
function f$(e) {
  return u$(this.__data__, e) > -1;
}
var d$ = f$, p$ = as;
function h$(e, t) {
  var r = this.__data__, n = p$(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var v$ = h$, m$ = QO, g$ = o$, y$ = c$, b$ = d$, x$ = v$;
function Ta(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ta.prototype.clear = m$;
Ta.prototype.delete = g$;
Ta.prototype.get = y$;
Ta.prototype.has = b$;
Ta.prototype.set = x$;
var is = Ta, w$ = Tn, S$ = _r, O$ = w$(S$, "Map"), nd = O$, Ap = XO, $$ = is, C$ = nd;
function P$() {
  this.size = 0, this.__data__ = {
    hash: new Ap(),
    map: new (C$ || $$)(),
    string: new Ap()
  };
}
var _$ = P$;
function E$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var A$ = E$, T$ = A$;
function M$(e, t) {
  var r = e.__data__;
  return T$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var os = M$, I$ = os;
function j$(e) {
  var t = I$(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var D$ = j$, N$ = os;
function R$(e) {
  return N$(this, e).get(e);
}
var k$ = R$, B$ = os;
function L$(e) {
  return B$(this, e).has(e);
}
var H$ = L$, F$ = os;
function W$(e, t) {
  var r = F$(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var V$ = W$, z$ = _$, U$ = D$, Y$ = k$, q$ = H$, G$ = V$;
function Ma(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ma.prototype.clear = z$;
Ma.prototype.delete = U$;
Ma.prototype.get = Y$;
Ma.prototype.has = q$;
Ma.prototype.set = G$;
var ad = Ma, ly = ad, K$ = "Expected a function";
function id(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(K$);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (id.Cache || ly)(), r;
}
id.Cache = ly;
var sy = id;
const X$ = /* @__PURE__ */ We(sy);
var Z$ = sy, Q$ = 500;
function J$(e) {
  var t = Z$(e, function(n) {
    return r.size === Q$ && r.clear(), n;
  }), r = t.cache;
  return t;
}
var eC = J$, tC = eC, rC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nC = /\\(\\)?/g, aC = tC(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(rC, function(r, n, a, i) {
    t.push(a ? i.replace(nC, "$1") : n || r);
  }), t;
}), iC = aC;
function oC(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var od = oC, Tp = to, lC = od, sC = zt, cC = _a, uC = 1 / 0, Mp = Tp ? Tp.prototype : void 0, Ip = Mp ? Mp.toString : void 0;
function cy(e) {
  if (typeof e == "string")
    return e;
  if (sC(e))
    return lC(e, cy) + "";
  if (cC(e))
    return Ip ? Ip.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -uC ? "-0" : t;
}
var fC = cy, dC = fC;
function pC(e) {
  return e == null ? "" : dC(e);
}
var uy = pC, hC = zt, vC = ed, mC = iC, gC = uy;
function yC(e, t) {
  return hC(e) ? e : vC(e, t) ? [e] : mC(gC(e));
}
var fy = yC, bC = _a, xC = 1 / 0;
function wC(e) {
  if (typeof e == "string" || bC(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -xC ? "-0" : t;
}
var ls = wC, SC = fy, OC = ls;
function $C(e, t) {
  t = SC(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[OC(t[r++])];
  return r && r == n ? e : void 0;
}
var ld = $C, CC = ld;
function PC(e, t, r) {
  var n = e == null ? void 0 : CC(e, t);
  return n === void 0 ? r : n;
}
var dy = PC;
const Xt = /* @__PURE__ */ We(dy);
function _C(e) {
  return e == null;
}
var EC = _C;
const Ae = /* @__PURE__ */ We(EC);
var AC = Vr, TC = zt, MC = zr, IC = "[object String]";
function jC(e) {
  return typeof e == "string" || !TC(e) && MC(e) && AC(e) == IC;
}
var DC = jC;
const ro = /* @__PURE__ */ We(DC);
var NC = Vr, RC = zr, kC = "[object Number]";
function BC(e) {
  return typeof e == "number" || RC(e) && NC(e) == kC;
}
var py = BC;
const LC = /* @__PURE__ */ We(py);
var HC = py;
function FC(e) {
  return HC(e) && e != +e;
}
var WC = FC;
const Ia = /* @__PURE__ */ We(WC);
var Nt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, yn = function(t) {
  return ro(t) && t.indexOf("%") === t.length - 1;
}, ee = function(t) {
  return LC(t) && !Ia(t);
}, gt = function(t) {
  return ee(t) || ro(t);
}, VC = 0, ja = function(t) {
  var r = ++VC;
  return "".concat(t || "").concat(r);
}, Rt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!ee(t) && !ro(t))
    return n;
  var i;
  if (yn(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return Ia(i) && (i = n), a && i > r && (i = r), i;
}, Hn = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, zC = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, Lt = function(t, r) {
  return ee(t) && ee(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Go(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Xt(n, t)) === r;
  });
}
function Yn(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function uu(e) {
  "@babel/helpers - typeof";
  return uu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uu(e);
}
var UC = ["viewBox", "children"], YC = [
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
], jp = ["points", "pathLength"], $c = {
  svg: UC,
  polygon: jp,
  polyline: jp
}, sd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Ko = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ b.isValidElement(t) && (n = t.props), !Ea(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    sd.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, qC = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, Cn = function(t, r, n) {
  if (!Ea(t) || uu(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    sd.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = qC(o, r, n));
  }), a;
}, GC = ["children"], KC = ["children"];
function Dp(e, t) {
  if (e == null) return {};
  var r = XC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function XC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function fu(e) {
  "@babel/helpers - typeof";
  return fu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fu(e);
}
var Np = {
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
}, jr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Rp = null, Cc = null, cd = function e(t) {
  if (t === Rp && Array.isArray(Cc))
    return Cc;
  var r = [];
  return b.Children.forEach(t, function(n) {
    Ae(n) || (k1.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Cc = r, Rp = t, r;
};
function rr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return jr(a);
  }) : n = [jr(t)], cd(e).forEach(function(a) {
    var i = Xt(a, "type.displayName") || Xt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function qt(e, t) {
  var r = rr(e, t);
  return r && r[0];
}
var kp = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!ee(n) || n <= 0 || !ee(a) || a <= 0);
}, ZC = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], QC = function(t) {
  return t && t.type && ro(t.type) && ZC.indexOf(t.type) >= 0;
}, JC = function(t) {
  return t && fu(t) === "object" && "clipDot" in t;
}, eP = function(t, r, n, a) {
  var i, o = (i = $c == null ? void 0 : $c[a]) !== null && i !== void 0 ? i : [];
  return !Pe(t) && (a && o.includes(r) || YC.includes(r)) || n && sd.includes(r);
}, me = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ b.isValidElement(t) && (a = t.props), !Ea(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var l;
    eP((l = a) === null || l === void 0 ? void 0 : l[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, du = function e(t, r) {
  if (t === r)
    return !0;
  var n = b.Children.count(t);
  if (n !== b.Children.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Bp(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!Bp(i, o))
      return !1;
  }
  return !0;
}, Bp = function(t, r) {
  if (Ae(t) && Ae(r))
    return !0;
  if (!Ae(t) && !Ae(r)) {
    var n = t.props || {}, a = n.children, i = Dp(n, GC), o = r.props || {}, l = o.children, s = Dp(o, KC);
    return a && l ? Yn(i, s) && du(a, l) : !a && !l ? Yn(i, s) : !1;
  }
  return !1;
}, Lp = function(t, r) {
  var n = [], a = {};
  return cd(t).forEach(function(i, o) {
    if (QC(i))
      n.push(i);
    else if (i) {
      var l = jr(i.type), s = r[l] || {}, c = s.handler, u = s.once;
      if (c && (!u || !a[l])) {
        var f = c(i, l, o);
        n.push(f), a[l] = !0;
      }
    }
  }), n;
}, tP = function(t) {
  var r = t && t.type;
  return r && Np[r] ? Np[r] : null;
}, rP = function(t, r) {
  return cd(r).indexOf(t);
}, nP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function pu() {
  return pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pu.apply(this, arguments);
}
function aP(e, t) {
  if (e == null) return {};
  var r = iP(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function iP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function hu(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, l = e.title, s = e.desc, c = aP(e, nP), u = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = De("recharts-surface", i);
  return /* @__PURE__ */ T.createElement("svg", pu({}, me(c, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height)
  }), /* @__PURE__ */ T.createElement("title", null, l), /* @__PURE__ */ T.createElement("desc", null, s), t);
}
var oP = ["children", "className"];
function vu() {
  return vu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vu.apply(this, arguments);
}
function lP(e, t) {
  if (e == null) return {};
  var r = sP(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Fe = /* @__PURE__ */ T.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = lP(e, oP), i = De("recharts-layer", n);
  return /* @__PURE__ */ T.createElement("g", vu({
    className: i
  }, me(a, !0), {
    ref: t
  }), r);
}), cP = Oe.env.NODE_ENV !== "production", Dr = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (cP && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
};
function uP(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
var fP = uP, dP = fP;
function pP(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : dP(e, t, r);
}
var hP = pP, vP = "\\ud800-\\udfff", mP = "\\u0300-\\u036f", gP = "\\ufe20-\\ufe2f", yP = "\\u20d0-\\u20ff", bP = mP + gP + yP, xP = "\\ufe0e\\ufe0f", wP = "\\u200d", SP = RegExp("[" + wP + vP + bP + xP + "]");
function OP(e) {
  return SP.test(e);
}
var hy = OP;
function $P(e) {
  return e.split("");
}
var CP = $P, vy = "\\ud800-\\udfff", PP = "\\u0300-\\u036f", _P = "\\ufe20-\\ufe2f", EP = "\\u20d0-\\u20ff", AP = PP + _P + EP, TP = "\\ufe0e\\ufe0f", MP = "[" + vy + "]", mu = "[" + AP + "]", gu = "\\ud83c[\\udffb-\\udfff]", IP = "(?:" + mu + "|" + gu + ")", my = "[^" + vy + "]", gy = "(?:\\ud83c[\\udde6-\\uddff]){2}", yy = "[\\ud800-\\udbff][\\udc00-\\udfff]", jP = "\\u200d", by = IP + "?", xy = "[" + TP + "]?", DP = "(?:" + jP + "(?:" + [my, gy, yy].join("|") + ")" + xy + by + ")*", NP = xy + by + DP, RP = "(?:" + [my + mu + "?", mu, gy, yy, MP].join("|") + ")", kP = RegExp(gu + "(?=" + gu + ")|" + RP + NP, "g");
function BP(e) {
  return e.match(kP) || [];
}
var LP = BP, HP = CP, FP = hy, WP = LP;
function VP(e) {
  return FP(e) ? WP(e) : HP(e);
}
var zP = VP, UP = hP, YP = hy, qP = zP, GP = uy;
function KP(e) {
  return function(t) {
    t = GP(t);
    var r = YP(t) ? qP(t) : void 0, n = r ? r[0] : t.charAt(0), a = r ? UP(r, 1).join("") : t.slice(1);
    return n[e]() + a;
  };
}
var XP = KP, ZP = XP, QP = ZP("toUpperCase"), JP = QP;
const ss = /* @__PURE__ */ We(JP);
function tt(e) {
  return function() {
    return e;
  };
}
const wy = Math.cos, Xo = Math.sin, pr = Math.sqrt, Zo = Math.PI, cs = 2 * Zo, yu = Math.PI, bu = 2 * yu, hn = 1e-6, e_ = bu - hn;
function Sy(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function t_(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Sy;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class r_ {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Sy : t_(t);
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
    let o = this._x1, l = this._y1, s = n - t, c = a - r, u = o - t, f = l - r, d = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > hn) if (!(Math.abs(f * s - c * u) > hn) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, v = a - l, m = s * s + c * c, h = p * p + v * v, y = Math.sqrt(m), w = Math.sqrt(d), S = i * Math.tan((yu - Math.acos((m + d - h) / (2 * y * w))) / 2), O = S / w, g = S / y;
      Math.abs(O - 1) > hn && this._append`L${t + O * u},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > u * v)},${this._x1 = t + g * s},${this._y1 = r + g * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(a), s = n * Math.sin(a), c = t + l, u = r + s, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > hn || Math.abs(this._y1 - u) > hn) && this._append`L${c},${u}`, n && (d < 0 && (d = d % bu + bu), d > e_ ? this._append`A${n},${n},0,1,${f},${t - l},${r - s}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = u}` : d > hn && this._append`A${n},${n},0,${+(d >= yu)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function ud(e) {
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
  }, () => new r_(t);
}
function fd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Oy(e) {
  this._context = e;
}
Oy.prototype = {
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
function us(e) {
  return new Oy(e);
}
function $y(e) {
  return e[0];
}
function Cy(e) {
  return e[1];
}
function Py(e, t) {
  var r = tt(!0), n = null, a = us, i = null, o = ud(l);
  e = typeof e == "function" ? e : e === void 0 ? $y : tt(e), t = typeof t == "function" ? t : t === void 0 ? Cy : tt(t);
  function l(s) {
    var c, u = (s = fd(s)).length, f, d = !1, p;
    for (n == null && (i = a(p = o())), c = 0; c <= u; ++c)
      !(c < u && r(f = s[c], c, s)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(f, c, s), +t(f, c, s));
    if (p) return i = null, p + "" || null;
  }
  return l.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : tt(+s), l) : e;
  }, l.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : tt(+s), l) : t;
  }, l.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : tt(!!s), l) : r;
  }, l.curve = function(s) {
    return arguments.length ? (a = s, n != null && (i = a(n)), l) : a;
  }, l.context = function(s) {
    return arguments.length ? (s == null ? n = i = null : i = a(n = s), l) : n;
  }, l;
}
function So(e, t, r) {
  var n = null, a = tt(!0), i = null, o = us, l = null, s = ud(c);
  e = typeof e == "function" ? e : e === void 0 ? $y : tt(+e), t = typeof t == "function" ? t : tt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Cy : tt(+r);
  function c(f) {
    var d, p, v, m = (f = fd(f)).length, h, y = !1, w, S = new Array(m), O = new Array(m);
    for (i == null && (l = o(w = s())), d = 0; d <= m; ++d) {
      if (!(d < m && a(h = f[d], d, f)) === y)
        if (y = !y)
          p = d, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), v = d - 1; v >= p; --v)
            l.point(S[v], O[v]);
          l.lineEnd(), l.areaEnd();
        }
      y && (S[d] = +e(h, d, f), O[d] = +t(h, d, f), l.point(n ? +n(h, d, f) : S[d], r ? +r(h, d, f) : O[d]));
    }
    if (w) return l = null, w + "" || null;
  }
  function u() {
    return Py().defined(a).curve(o).context(i);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : tt(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : tt(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : tt(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : tt(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : tt(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : tt(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(r);
  }, c.lineX1 = function() {
    return u().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : tt(!!f), c) : a;
  }, c.curve = function(f) {
    return arguments.length ? (o = f, i != null && (l = o(i)), c) : o;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? i = l = null : l = o(i = f), c) : i;
  }, c;
}
class _y {
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
function n_(e) {
  return new _y(e, !0);
}
function a_(e) {
  return new _y(e, !1);
}
const dd = {
  draw(e, t) {
    const r = pr(t / Zo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, cs);
  }
}, i_ = {
  draw(e, t) {
    const r = pr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Ey = pr(1 / 3), o_ = Ey * 2, l_ = {
  draw(e, t) {
    const r = pr(t / o_), n = r * Ey;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, s_ = {
  draw(e, t) {
    const r = pr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, c_ = 0.8908130915292852, Ay = Xo(Zo / 10) / Xo(7 * Zo / 10), u_ = Xo(cs / 10) * Ay, f_ = -wy(cs / 10) * Ay, d_ = {
  draw(e, t) {
    const r = pr(t * c_), n = u_ * r, a = f_ * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = cs * i / 5, l = wy(o), s = Xo(o);
      e.lineTo(s * r, -l * r), e.lineTo(l * n - s * a, s * n + l * a);
    }
    e.closePath();
  }
}, Pc = pr(3), p_ = {
  draw(e, t) {
    const r = -pr(t / (Pc * 3));
    e.moveTo(0, r * 2), e.lineTo(-Pc * r, -r), e.lineTo(Pc * r, -r), e.closePath();
  }
}, Zt = -0.5, Qt = pr(3) / 2, xu = 1 / pr(12), h_ = (xu / 2 + 1) * 3, v_ = {
  draw(e, t) {
    const r = pr(t / h_), n = r / 2, a = r * xu, i = n, o = r * xu + r, l = -i, s = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(l, s), e.lineTo(Zt * n - Qt * a, Qt * n + Zt * a), e.lineTo(Zt * i - Qt * o, Qt * i + Zt * o), e.lineTo(Zt * l - Qt * s, Qt * l + Zt * s), e.lineTo(Zt * n + Qt * a, Zt * a - Qt * n), e.lineTo(Zt * i + Qt * o, Zt * o - Qt * i), e.lineTo(Zt * l + Qt * s, Zt * s - Qt * l), e.closePath();
  }
};
function m_(e, t) {
  let r = null, n = ud(a);
  e = typeof e == "function" ? e : tt(e || dd), t = typeof t == "function" ? t : tt(t === void 0 ? 64 : +t);
  function a() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : tt(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : tt(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function Qo() {
}
function Jo(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Ty(e) {
  this._context = e;
}
Ty.prototype = {
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
        Jo(this, this._x1, this._y1);
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
        Jo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function g_(e) {
  return new Ty(e);
}
function My(e) {
  this._context = e;
}
My.prototype = {
  areaStart: Qo,
  areaEnd: Qo,
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
        Jo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function y_(e) {
  return new My(e);
}
function Iy(e) {
  this._context = e;
}
Iy.prototype = {
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
        Jo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function b_(e) {
  return new Iy(e);
}
function jy(e) {
  this._context = e;
}
jy.prototype = {
  areaStart: Qo,
  areaEnd: Qo,
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
function x_(e) {
  return new jy(e);
}
function Hp(e) {
  return e < 0 ? -1 : 1;
}
function Fp(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), l = (i * a + o * n) / (n + a);
  return (Hp(i) + Hp(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(l)) || 0;
}
function Wp(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function _c(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, l = (i - n) / 3;
  e._context.bezierCurveTo(n + l, a + l * t, i - l, o - l * r, i, o);
}
function el(e) {
  this._context = e;
}
el.prototype = {
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
        _c(this, this._t0, Wp(this, this._t0));
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
          this._point = 3, _c(this, Wp(this, r = Fp(this, e, t)), r);
          break;
        default:
          _c(this, this._t0, r = Fp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Dy(e) {
  this._context = new Ny(e);
}
(Dy.prototype = Object.create(el.prototype)).point = function(e, t) {
  el.prototype.point.call(this, t, e);
};
function Ny(e) {
  this._context = e;
}
Ny.prototype = {
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
function w_(e) {
  return new el(e);
}
function S_(e) {
  return new Dy(e);
}
function Ry(e) {
  this._context = e;
}
Ry.prototype = {
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
        for (var n = Vp(e), a = Vp(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Vp(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function O_(e) {
  return new Ry(e);
}
function fs(e, t) {
  this._context = e, this._t = t;
}
fs.prototype = {
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
function $_(e) {
  return new fs(e, 0.5);
}
function C_(e) {
  return new fs(e, 0);
}
function P_(e) {
  return new fs(e, 1);
}
function Qn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, l = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < l; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function wu(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function __(e, t) {
  return e[t];
}
function E_(e) {
  const t = [];
  return t.key = e, t;
}
function A_() {
  var e = tt([]), t = wu, r = Qn, n = __;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), E_), l, s = o.length, c = -1, u;
    for (const f of i)
      for (l = 0, ++c; l < s; ++l)
        (o[l][c] = [0, +n(f, o[l].key, c, i)]).data = f;
    for (l = 0, u = fd(t(o)); l < s; ++l)
      o[u[l]].index = l;
    return r(o, u), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : tt(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : tt(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? wu : typeof i == "function" ? i : tt(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? Qn, a) : r;
  }, a;
}
function T_(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    Qn(e, t);
  }
}
function M_(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, l = 0; o < a; ++o) l += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    Qn(e, t);
  }
}
function I_(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var l = 0, s = 0, c = 0; l < o; ++l) {
        for (var u = e[t[l]], f = u[n][1] || 0, d = u[n - 1][1] || 0, p = (f - d) / 2, v = 0; v < l; ++v) {
          var m = e[t[v]], h = m[n][1] || 0, y = m[n - 1][1] || 0;
          p += h - y;
        }
        s += f, c += p * f;
      }
      a[n - 1][1] += a[n - 1][0] = r, s && (r -= c / s);
    }
    a[n - 1][1] += a[n - 1][0] = r, Qn(e, t);
  }
}
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
var j_ = ["type", "size", "sizeType"];
function Su() {
  return Su = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Su.apply(this, arguments);
}
function zp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Up(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zp(Object(r), !0).forEach(function(n) {
      D_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function D_(e, t, r) {
  return t = N_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N_(e) {
  var t = R_(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function R_(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k_(e, t) {
  if (e == null) return {};
  var r = B_(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function B_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ky = {
  symbolCircle: dd,
  symbolCross: i_,
  symbolDiamond: l_,
  symbolSquare: s_,
  symbolStar: d_,
  symbolTriangle: p_,
  symbolWye: v_
}, L_ = Math.PI / 180, H_ = function(t) {
  var r = "symbol".concat(ss(t));
  return ky[r] || dd;
}, F_ = function(t, r, n) {
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
      var a = 18 * L_;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, W_ = function(t, r) {
  ky["symbol".concat(ss(t))] = r;
}, pd = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, l = o === void 0 ? "area" : o, s = k_(t, j_), c = Up(Up({}, s), {}, {
    type: n,
    size: i,
    sizeType: l
  }), u = function() {
    var h = H_(n), y = m_().type(h).size(F_(i, l, n));
    return y();
  }, f = c.className, d = c.cx, p = c.cy, v = me(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ T.createElement("path", Su({}, v, {
    className: De("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: u()
  })) : null;
};
pd.registerSymbol = W_;
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function Ou() {
  return Ou = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ou.apply(this, arguments);
}
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
function V_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yp(Object(r), !0).forEach(function(n) {
      xi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U_(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ly(n.key), n);
  }
}
function Y_(e, t, r) {
  return t && U_(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q_(e, t, r) {
  return t = tl(t), G_(e, By() ? Reflect.construct(t, r || [], tl(e).constructor) : t.apply(e, r));
}
function G_(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return K_(e);
}
function K_(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function By() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (By = function() {
    return !!e;
  })();
}
function tl(e) {
  return tl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tl(e);
}
function X_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $u(e, t);
}
function $u(e, t) {
  return $u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $u(e, t);
}
function xi(e, t, r) {
  return t = Ly(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ly(e) {
  var t = Z_(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function Z_(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jt = 32, hd = /* @__PURE__ */ function(e) {
  function t() {
    return z_(this, t), q_(this, t, arguments);
  }
  return X_(t, e), Y_(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = Jt / 2, o = Jt / 6, l = Jt / 3, s = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ T.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: Jt,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ T.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            d: "M0,".concat(i, "h").concat(l, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * l, ",").concat(i, `
            H`).concat(Jt, "M").concat(2 * l, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(l, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ T.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(Jt / 8, "h").concat(Jt, "v").concat(Jt * 3 / 4, "h").concat(-Jt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ T.isValidElement(n.legendIcon)) {
          var c = V_({}, n);
          return delete c.legendIcon, /* @__PURE__ */ T.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ T.createElement(pd, {
          fill: s,
          cx: i,
          cy: i,
          size: Jt,
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
      var n = this, a = this.props, i = a.payload, o = a.iconSize, l = a.layout, s = a.formatter, c = a.inactiveColor, u = {
        x: 0,
        y: 0,
        width: Jt,
        height: Jt
      }, f = {
        display: l === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(p, v) {
        var m = p.formatter || s, h = De(xi(xi({
          "recharts-legend-item": !0
        }, "legend-item-".concat(v), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var y = Pe(p.value) ? null : p.value;
        Dr(
          !Pe(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = p.inactive ? c : p.color;
        return /* @__PURE__ */ T.createElement("li", Ou({
          className: h,
          style: f,
          key: "legend-item-".concat(v)
        }, Cn(n.props, p, v)), /* @__PURE__ */ T.createElement(hu, {
          width: o,
          height: o,
          viewBox: u,
          style: d
        }, n.renderIcon(p)), /* @__PURE__ */ T.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, m ? m(y, p, v) : y));
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
      return /* @__PURE__ */ T.createElement("ul", {
        className: "recharts-default-legend",
        style: l
      }, this.renderItems());
    }
  }]);
}(b.PureComponent);
xi(hd, "displayName", "Legend");
xi(hd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Q_ = is;
function J_() {
  this.__data__ = new Q_(), this.size = 0;
}
var eE = J_;
function tE(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var rE = tE;
function nE(e) {
  return this.__data__.get(e);
}
var aE = nE;
function iE(e) {
  return this.__data__.has(e);
}
var oE = iE, lE = is, sE = nd, cE = ad, uE = 200;
function fE(e, t) {
  var r = this.__data__;
  if (r instanceof lE) {
    var n = r.__data__;
    if (!sE || n.length < uE - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new cE(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var dE = fE, pE = is, hE = eE, vE = rE, mE = aE, gE = oE, yE = dE;
function Da(e) {
  var t = this.__data__ = new pE(e);
  this.size = t.size;
}
Da.prototype.clear = hE;
Da.prototype.delete = vE;
Da.prototype.get = mE;
Da.prototype.has = gE;
Da.prototype.set = yE;
var Hy = Da, bE = "__lodash_hash_undefined__";
function xE(e) {
  return this.__data__.set(e, bE), this;
}
var wE = xE;
function SE(e) {
  return this.__data__.has(e);
}
var OE = SE, $E = ad, CE = wE, PE = OE;
function rl(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new $E(); ++t < r; )
    this.add(e[t]);
}
rl.prototype.add = rl.prototype.push = CE;
rl.prototype.has = PE;
var Fy = rl;
function _E(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Wy = _E;
function EE(e, t) {
  return e.has(t);
}
var Vy = EE, AE = Fy, TE = Wy, ME = Vy, IE = 1, jE = 2;
function DE(e, t, r, n, a, i) {
  var o = r & IE, l = e.length, s = t.length;
  if (l != s && !(o && s > l))
    return !1;
  var c = i.get(e), u = i.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, d = !0, p = r & jE ? new AE() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < l; ) {
    var v = e[f], m = t[f];
    if (n)
      var h = o ? n(m, v, f, t, e, i) : n(v, m, f, e, t, i);
    if (h !== void 0) {
      if (h)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!TE(t, function(y, w) {
        if (!ME(p, w) && (v === y || a(v, y, r, n, i)))
          return p.push(w);
      })) {
        d = !1;
        break;
      }
    } else if (!(v === m || a(v, m, r, n, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var zy = DE, NE = _r, RE = NE.Uint8Array, kE = RE;
function BE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var LE = BE;
function HE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var vd = HE, qp = to, Gp = kE, FE = rd, WE = zy, VE = LE, zE = vd, UE = 1, YE = 2, qE = "[object Boolean]", GE = "[object Date]", KE = "[object Error]", XE = "[object Map]", ZE = "[object Number]", QE = "[object RegExp]", JE = "[object Set]", eA = "[object String]", tA = "[object Symbol]", rA = "[object ArrayBuffer]", nA = "[object DataView]", Kp = qp ? qp.prototype : void 0, Ec = Kp ? Kp.valueOf : void 0;
function aA(e, t, r, n, a, i, o) {
  switch (r) {
    case nA:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case rA:
      return !(e.byteLength != t.byteLength || !i(new Gp(e), new Gp(t)));
    case qE:
    case GE:
    case ZE:
      return FE(+e, +t);
    case KE:
      return e.name == t.name && e.message == t.message;
    case QE:
    case eA:
      return e == t + "";
    case XE:
      var l = VE;
    case JE:
      var s = n & UE;
      if (l || (l = zE), e.size != t.size && !s)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= YE, o.set(e, t);
      var u = WE(l(e), l(t), n, a, i, o);
      return o.delete(e), u;
    case tA:
      if (Ec)
        return Ec.call(e) == Ec.call(t);
  }
  return !1;
}
var iA = aA;
function oA(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var Uy = oA, lA = Uy, sA = zt;
function cA(e, t, r) {
  var n = t(e);
  return sA(e) ? n : lA(n, r(e));
}
var uA = cA;
function fA(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var dA = fA;
function pA() {
  return [];
}
var hA = pA, vA = dA, mA = hA, gA = Object.prototype, yA = gA.propertyIsEnumerable, Xp = Object.getOwnPropertySymbols, bA = Xp ? function(e) {
  return e == null ? [] : (e = Object(e), vA(Xp(e), function(t) {
    return yA.call(e, t);
  }));
} : mA, xA = bA;
function wA(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var SA = wA, OA = Vr, $A = zr, CA = "[object Arguments]";
function PA(e) {
  return $A(e) && OA(e) == CA;
}
var _A = PA, Zp = _A, EA = zr, Yy = Object.prototype, AA = Yy.hasOwnProperty, TA = Yy.propertyIsEnumerable, MA = Zp(/* @__PURE__ */ function() {
  return arguments;
}()) ? Zp : function(e) {
  return EA(e) && AA.call(e, "callee") && !TA.call(e, "callee");
}, md = MA, nl = { exports: {} };
function IA() {
  return !1;
}
var jA = IA;
nl.exports;
(function(e, t) {
  var r = _r, n = jA, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, l = o ? r.Buffer : void 0, s = l ? l.isBuffer : void 0, c = s || n;
  e.exports = c;
})(nl, nl.exports);
var qy = nl.exports, DA = 9007199254740991, NA = /^(?:0|[1-9]\d*)$/;
function RA(e, t) {
  var r = typeof e;
  return t = t ?? DA, !!t && (r == "number" || r != "symbol" && NA.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var gd = RA, kA = 9007199254740991;
function BA(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kA;
}
var yd = BA, LA = Vr, HA = yd, FA = zr, WA = "[object Arguments]", VA = "[object Array]", zA = "[object Boolean]", UA = "[object Date]", YA = "[object Error]", qA = "[object Function]", GA = "[object Map]", KA = "[object Number]", XA = "[object Object]", ZA = "[object RegExp]", QA = "[object Set]", JA = "[object String]", eT = "[object WeakMap]", tT = "[object ArrayBuffer]", rT = "[object DataView]", nT = "[object Float32Array]", aT = "[object Float64Array]", iT = "[object Int8Array]", oT = "[object Int16Array]", lT = "[object Int32Array]", sT = "[object Uint8Array]", cT = "[object Uint8ClampedArray]", uT = "[object Uint16Array]", fT = "[object Uint32Array]", at = {};
at[nT] = at[aT] = at[iT] = at[oT] = at[lT] = at[sT] = at[cT] = at[uT] = at[fT] = !0;
at[WA] = at[VA] = at[tT] = at[zA] = at[rT] = at[UA] = at[YA] = at[qA] = at[GA] = at[KA] = at[XA] = at[ZA] = at[QA] = at[JA] = at[eT] = !1;
function dT(e) {
  return FA(e) && HA(e.length) && !!at[LA(e)];
}
var pT = dT;
function hT(e) {
  return function(t) {
    return e(t);
  };
}
var Gy = hT, al = { exports: {} };
al.exports;
(function(e, t) {
  var r = ay, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, l = function() {
    try {
      var s = a && a.require && a.require("util").types;
      return s || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(al, al.exports);
var vT = al.exports, mT = pT, gT = Gy, Qp = vT, Jp = Qp && Qp.isTypedArray, yT = Jp ? gT(Jp) : mT, Ky = yT, bT = SA, xT = md, wT = zt, ST = qy, OT = gd, $T = Ky, CT = Object.prototype, PT = CT.hasOwnProperty;
function _T(e, t) {
  var r = wT(e), n = !r && xT(e), a = !r && !n && ST(e), i = !r && !n && !a && $T(e), o = r || n || a || i, l = o ? bT(e.length, String) : [], s = l.length;
  for (var c in e)
    (t || PT.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    OT(c, s))) && l.push(c);
  return l;
}
var ET = _T, AT = Object.prototype;
function TT(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || AT;
  return e === r;
}
var MT = TT;
function IT(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Xy = IT, jT = Xy, DT = jT(Object.keys, Object), NT = DT, RT = MT, kT = NT, BT = Object.prototype, LT = BT.hasOwnProperty;
function HT(e) {
  if (!RT(e))
    return kT(e);
  var t = [];
  for (var r in Object(e))
    LT.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var FT = HT, WT = td, VT = yd;
function zT(e) {
  return e != null && VT(e.length) && !WT(e);
}
var ds = zT, UT = ET, YT = FT, qT = ds;
function GT(e) {
  return qT(e) ? UT(e) : YT(e);
}
var bd = GT, KT = uA, XT = xA, ZT = bd;
function QT(e) {
  return KT(e, ZT, XT);
}
var JT = QT, eh = JT, eM = 1, tM = Object.prototype, rM = tM.hasOwnProperty;
function nM(e, t, r, n, a, i) {
  var o = r & eM, l = eh(e), s = l.length, c = eh(t), u = c.length;
  if (s != u && !o)
    return !1;
  for (var f = s; f--; ) {
    var d = l[f];
    if (!(o ? d in t : rM.call(t, d)))
      return !1;
  }
  var p = i.get(e), v = i.get(t);
  if (p && v)
    return p == t && v == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var h = o; ++f < s; ) {
    d = l[f];
    var y = e[d], w = t[d];
    if (n)
      var S = o ? n(w, y, d, t, e, i) : n(y, w, d, e, t, i);
    if (!(S === void 0 ? y === w || a(y, w, r, n, i) : S)) {
      m = !1;
      break;
    }
    h || (h = d == "constructor");
  }
  if (m && !h) {
    var O = e.constructor, g = t.constructor;
    O != g && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof g == "function" && g instanceof g) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var aM = nM, iM = Tn, oM = _r, lM = iM(oM, "DataView"), sM = lM, cM = Tn, uM = _r, fM = cM(uM, "Promise"), dM = fM, pM = Tn, hM = _r, vM = pM(hM, "Set"), Zy = vM, mM = Tn, gM = _r, yM = mM(gM, "WeakMap"), bM = yM, Cu = sM, Pu = nd, _u = dM, Eu = Zy, Au = bM, Qy = Vr, Na = oy, th = "[object Map]", xM = "[object Object]", rh = "[object Promise]", nh = "[object Set]", ah = "[object WeakMap]", ih = "[object DataView]", wM = Na(Cu), SM = Na(Pu), OM = Na(_u), $M = Na(Eu), CM = Na(Au), vn = Qy;
(Cu && vn(new Cu(new ArrayBuffer(1))) != ih || Pu && vn(new Pu()) != th || _u && vn(_u.resolve()) != rh || Eu && vn(new Eu()) != nh || Au && vn(new Au()) != ah) && (vn = function(e) {
  var t = Qy(e), r = t == xM ? e.constructor : void 0, n = r ? Na(r) : "";
  if (n)
    switch (n) {
      case wM:
        return ih;
      case SM:
        return th;
      case OM:
        return rh;
      case $M:
        return nh;
      case CM:
        return ah;
    }
  return t;
});
var PM = vn, Ac = Hy, _M = zy, EM = iA, AM = aM, oh = PM, lh = zt, sh = qy, TM = Ky, MM = 1, ch = "[object Arguments]", uh = "[object Array]", Oo = "[object Object]", IM = Object.prototype, fh = IM.hasOwnProperty;
function jM(e, t, r, n, a, i) {
  var o = lh(e), l = lh(t), s = o ? uh : oh(e), c = l ? uh : oh(t);
  s = s == ch ? Oo : s, c = c == ch ? Oo : c;
  var u = s == Oo, f = c == Oo, d = s == c;
  if (d && sh(e)) {
    if (!sh(t))
      return !1;
    o = !0, u = !1;
  }
  if (d && !u)
    return i || (i = new Ac()), o || TM(e) ? _M(e, t, r, n, a, i) : EM(e, t, s, r, n, a, i);
  if (!(r & MM)) {
    var p = u && fh.call(e, "__wrapped__"), v = f && fh.call(t, "__wrapped__");
    if (p || v) {
      var m = p ? e.value() : e, h = v ? t.value() : t;
      return i || (i = new Ac()), a(m, h, r, n, i);
    }
  }
  return d ? (i || (i = new Ac()), AM(e, t, r, n, a, i)) : !1;
}
var DM = jM, NM = DM, dh = zr;
function Jy(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !dh(e) && !dh(t) ? e !== e && t !== t : NM(e, t, r, n, Jy, a);
}
var xd = Jy, RM = Hy, kM = xd, BM = 1, LM = 2;
function HM(e, t, r, n) {
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
    var s = l[0], c = e[s], u = l[1];
    if (o && l[2]) {
      if (c === void 0 && !(s in e))
        return !1;
    } else {
      var f = new RM();
      if (n)
        var d = n(c, u, s, e, t, f);
      if (!(d === void 0 ? kM(u, c, BM | LM, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var FM = HM, WM = tn;
function VM(e) {
  return e === e && !WM(e);
}
var eb = VM, zM = eb, UM = bd;
function YM(e) {
  for (var t = UM(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, zM(a)];
  }
  return t;
}
var qM = YM;
function GM(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var tb = GM, KM = FM, XM = qM, ZM = tb;
function QM(e) {
  var t = XM(e);
  return t.length == 1 && t[0][2] ? ZM(t[0][0], t[0][1]) : function(r) {
    return r === e || KM(r, e, t);
  };
}
var JM = QM;
function eI(e, t) {
  return e != null && t in Object(e);
}
var tI = eI, rI = fy, nI = md, aI = zt, iI = gd, oI = yd, lI = ls;
function sI(e, t, r) {
  t = rI(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = lI(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && oI(a) && iI(o, a) && (aI(e) || nI(e)));
}
var cI = sI, uI = tI, fI = cI;
function dI(e, t) {
  return e != null && fI(e, t, uI);
}
var pI = dI, hI = xd, vI = dy, mI = pI, gI = ed, yI = eb, bI = tb, xI = ls, wI = 1, SI = 2;
function OI(e, t) {
  return gI(e) && yI(t) ? bI(xI(e), t) : function(r) {
    var n = vI(r, e);
    return n === void 0 && n === t ? mI(r, e) : hI(t, n, wI | SI);
  };
}
var $I = OI;
function CI(e) {
  return e;
}
var Ra = CI;
function PI(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var _I = PI, EI = ld;
function AI(e) {
  return function(t) {
    return EI(t, e);
  };
}
var TI = AI, MI = _I, II = TI, jI = ed, DI = ls;
function NI(e) {
  return jI(e) ? MI(DI(e)) : II(e);
}
var RI = NI, kI = JM, BI = $I, LI = Ra, HI = zt, FI = RI;
function WI(e) {
  return typeof e == "function" ? e : e == null ? LI : typeof e == "object" ? HI(e) ? BI(e[0], e[1]) : kI(e) : FI(e);
}
var rn = WI;
function VI(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var zI = VI;
function UI(e) {
  return e !== e;
}
var YI = UI;
function qI(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var GI = qI, KI = zI, XI = YI, ZI = GI;
function QI(e, t, r) {
  return t === t ? ZI(e, t, r) : KI(e, XI, r);
}
var JI = QI, ej = JI;
function tj(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && ej(e, t, 0) > -1;
}
var rj = tj;
function nj(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var aj = nj;
function ij() {
}
var oj = ij, Tc = Zy, lj = oj, sj = vd, cj = 1 / 0, uj = Tc && 1 / sj(new Tc([, -0]))[1] == cj ? function(e) {
  return new Tc(e);
} : lj, fj = uj, dj = Fy, pj = rj, hj = aj, vj = Vy, mj = fj, gj = vd, yj = 200;
function bj(e, t, r) {
  var n = -1, a = pj, i = e.length, o = !0, l = [], s = l;
  if (r)
    o = !1, a = hj;
  else if (i >= yj) {
    var c = t ? null : mj(e);
    if (c)
      return gj(c);
    o = !1, a = vj, s = new dj();
  } else
    s = t ? [] : l;
  e:
    for (; ++n < i; ) {
      var u = e[n], f = t ? t(u) : u;
      if (u = r || u !== 0 ? u : 0, o && f === f) {
        for (var d = s.length; d--; )
          if (s[d] === f)
            continue e;
        t && s.push(f), l.push(u);
      } else a(s, f, r) || (s !== l && s.push(f), l.push(u));
    }
  return l;
}
var xj = bj, wj = rn, Sj = xj;
function Oj(e, t) {
  return e && e.length ? Sj(e, wj(t)) : [];
}
var $j = Oj;
const ph = /* @__PURE__ */ We($j);
function rb(e, t, r) {
  return t === !0 ? ph(e, r) : Pe(t) ? ph(e, t) : e;
}
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
var Cj = ["ref"];
function hh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hh(Object(r), !0).forEach(function(n) {
      ps(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ab(n.key), n);
  }
}
function _j(e, t, r) {
  return t && vh(e.prototype, t), r && vh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ej(e, t, r) {
  return t = il(t), Aj(e, nb() ? Reflect.construct(t, r || [], il(e).constructor) : t.apply(e, r));
}
function Aj(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Tj(e);
}
function Tj(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nb = function() {
    return !!e;
  })();
}
function il(e) {
  return il = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, il(e);
}
function Mj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tu(e, t);
}
function Tu(e, t) {
  return Tu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Tu(e, t);
}
function ps(e, t, r) {
  return t = ab(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ab(e) {
  var t = Ij(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function Ij(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jj(e, t) {
  if (e == null) return {};
  var r = Dj(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Dj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Nj(e) {
  return e.value;
}
function Rj(e, t) {
  if (/* @__PURE__ */ T.isValidElement(e))
    return /* @__PURE__ */ T.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ T.createElement(e, t);
  t.ref;
  var r = jj(t, Cj);
  return /* @__PURE__ */ T.createElement(hd, r);
}
var mh = 1, qn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Pj(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = Ej(this, t, [].concat(a)), ps(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return Mj(t, e), _j(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > mh || Math.abs(a.height - this.lastBoundingBox.height) > mh) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Ar({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, l = a.verticalAlign, s = a.margin, c = a.chartWidth, u = a.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var p = this.getBBoxSnapshot();
          f = {
            left: ((c || 0) - p.width) / 2
          };
        } else
          f = o === "right" ? {
            right: s && s.right || 0
          } : {
            left: s && s.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (l === "middle") {
          var v = this.getBBoxSnapshot();
          d = {
            top: ((u || 0) - v.height) / 2
          };
        } else
          d = l === "bottom" ? {
            bottom: s && s.bottom || 0
          } : {
            top: s && s.top || 0
          };
      return Ar(Ar({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, l = a.height, s = a.wrapperStyle, c = a.payloadUniqBy, u = a.payload, f = Ar(Ar({
        position: "absolute",
        width: o || "auto",
        height: l || "auto"
      }, this.getDefaultPosition(s)), s);
      return /* @__PURE__ */ T.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, Rj(i, Ar(Ar({}, this.props), {}, {
        payload: rb(u, c, Nj)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = Ar(Ar({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && ee(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
}(b.PureComponent);
ps(qn, "displayName", "Legend");
ps(qn, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var gh = to, kj = md, Bj = zt, yh = gh ? gh.isConcatSpreadable : void 0;
function Lj(e) {
  return Bj(e) || kj(e) || !!(yh && e && e[yh]);
}
var Hj = Lj, Fj = Uy, Wj = Hj;
function ib(e, t, r, n, a) {
  var i = -1, o = e.length;
  for (r || (r = Wj), a || (a = []); ++i < o; ) {
    var l = e[i];
    t > 0 && r(l) ? t > 1 ? ib(l, t - 1, r, n, a) : Fj(a, l) : n || (a[a.length] = l);
  }
  return a;
}
var ob = ib;
function Vj(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), l = o.length; l--; ) {
      var s = o[e ? l : ++a];
      if (r(i[s], s, i) === !1)
        break;
    }
    return t;
  };
}
var zj = Vj, Uj = zj, Yj = Uj(), qj = Yj, Gj = qj, Kj = bd;
function Xj(e, t) {
  return e && Gj(e, t, Kj);
}
var lb = Xj, Zj = ds;
function Qj(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Zj(r))
      return e(r, n);
    for (var a = r.length, i = t ? a : -1, o = Object(r); (t ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var Jj = Qj, eD = lb, tD = Jj, rD = tD(eD), wd = rD, nD = wd, aD = ds;
function iD(e, t) {
  var r = -1, n = aD(e) ? Array(e.length) : [];
  return nD(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
var sb = iD;
function oD(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var lD = oD, bh = _a;
function sD(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, a = e === e, i = bh(e), o = t !== void 0, l = t === null, s = t === t, c = bh(t);
    if (!l && !c && !i && e > t || i && o && s && !l && !c || n && o && s || !r && s || !a)
      return 1;
    if (!n && !i && !c && e < t || c && r && a && !n && !i || l && r && a || !o && a || !s)
      return -1;
  }
  return 0;
}
var cD = sD, uD = cD;
function fD(e, t, r) {
  for (var n = -1, a = e.criteria, i = t.criteria, o = a.length, l = r.length; ++n < o; ) {
    var s = uD(a[n], i[n]);
    if (s) {
      if (n >= l)
        return s;
      var c = r[n];
      return s * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var dD = fD, Mc = od, pD = ld, hD = rn, vD = sb, mD = lD, gD = Gy, yD = dD, bD = Ra, xD = zt;
function wD(e, t, r) {
  t.length ? t = Mc(t, function(i) {
    return xD(i) ? function(o) {
      return pD(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : t = [bD];
  var n = -1;
  t = Mc(t, gD(hD));
  var a = vD(e, function(i, o, l) {
    var s = Mc(t, function(c) {
      return c(i);
    });
    return { criteria: s, index: ++n, value: i };
  });
  return mD(a, function(i, o) {
    return yD(i, o, r);
  });
}
var SD = wD;
function OD(e, t, r) {
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
var $D = OD, CD = $D, xh = Math.max;
function PD(e, t, r) {
  return t = xh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = xh(n.length - t, 0), o = Array(i); ++a < i; )
      o[a] = n[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = n[a];
    return l[t] = r(o), CD(e, this, l);
  };
}
var _D = PD;
function ED(e) {
  return function() {
    return e;
  };
}
var AD = ED, TD = Tn, MD = function() {
  try {
    var e = TD(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), cb = MD, ID = AD, wh = cb, jD = Ra, DD = wh ? function(e, t) {
  return wh(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ID(t),
    writable: !0
  });
} : jD, ND = DD, RD = 800, kD = 16, BD = Date.now;
function LD(e) {
  var t = 0, r = 0;
  return function() {
    var n = BD(), a = kD - (n - r);
    if (r = n, a > 0) {
      if (++t >= RD)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var HD = LD, FD = ND, WD = HD, VD = WD(FD), zD = VD, UD = Ra, YD = _D, qD = zD;
function GD(e, t) {
  return qD(YD(e, t, UD), e + "");
}
var KD = GD, XD = rd, ZD = ds, QD = gd, JD = tn;
function e2(e, t, r) {
  if (!JD(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? ZD(r) && QD(t, r.length) : n == "string" && t in r) ? XD(r[t], e) : !1;
}
var hs = e2, t2 = ob, r2 = SD, n2 = KD, Sh = hs, a2 = n2(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Sh(e, t[0], t[1]) ? t = [] : r > 2 && Sh(t[0], t[1], t[2]) && (t = [t[0]]), r2(e, t2(t, 1), []);
}), i2 = a2;
const Sd = /* @__PURE__ */ We(i2);
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function Mu() {
  return Mu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mu.apply(this, arguments);
}
function o2(e, t) {
  return u2(e) || c2(e, t) || s2(e, t) || l2();
}
function l2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s2(e, t) {
  if (e) {
    if (typeof e == "string") return Oh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Oh(e, t);
  }
}
function Oh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function c2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function u2(e) {
  if (Array.isArray(e)) return e;
}
function $h(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ic(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $h(Object(r), !0).forEach(function(n) {
      f2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $h(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f2(e, t, r) {
  return t = d2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d2(e) {
  var t = p2(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function p2(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function h2(e) {
  return Array.isArray(e) && gt(e[0]) && gt(e[1]) ? e.join(" ~ ") : e;
}
var v2 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, l = o === void 0 ? {} : o, s = t.labelStyle, c = s === void 0 ? {} : s, u = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, v = t.labelClassName, m = t.label, h = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, S = function() {
    if (u && u.length) {
      var I = {
        padding: 0,
        margin: 0
      }, N = (d ? Sd(u, d) : u).map(function(j, E) {
        if (j.type === "none")
          return null;
        var A = Ic({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: j.color || "#000"
        }, l), D = j.formatter || f || h2, R = j.value, k = j.name, L = R, H = k;
        if (D && L != null && H != null) {
          var B = D(R, k, j, E, u);
          if (Array.isArray(B)) {
            var W = o2(B, 2);
            L = W[0], H = W[1];
          } else
            L = B;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ T.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(E),
            style: A
          }, gt(H) ? /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, H) : null, gt(H) ? /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, L), /* @__PURE__ */ T.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, j.unit || ""))
        );
      });
      return /* @__PURE__ */ T.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: I
      }, N);
    }
    return null;
  }, O = Ic({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), g = Ic({
    margin: 0
  }, c), x = !Ae(m), $ = x ? m : "", C = De("recharts-default-tooltip", p), _ = De("recharts-tooltip-label", v);
  x && h && u !== void 0 && u !== null && ($ = h(m, u));
  var M = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ T.createElement("div", Mu({
    className: C,
    style: O
  }, M), /* @__PURE__ */ T.createElement("p", {
    className: _,
    style: g
  }, /* @__PURE__ */ T.isValidElement($) ? $ : "".concat($)), S());
};
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
function $o(e, t, r) {
  return t = m2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m2(e) {
  var t = g2(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function g2(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ga = "recharts-tooltip-wrapper", y2 = {
  visibility: "hidden"
};
function b2(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return De(Ga, $o($o($o($o({}, "".concat(Ga, "-right"), ee(r) && t && ee(t.x) && r >= t.x), "".concat(Ga, "-left"), ee(r) && t && ee(t.x) && r < t.x), "".concat(Ga, "-bottom"), ee(n) && t && ee(t.y) && n >= t.y), "".concat(Ga, "-top"), ee(n) && t && ee(t.y) && n < t.y));
}
function Ch(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, l = e.tooltipDimension, s = e.viewBox, c = e.viewBoxDimension;
  if (i && ee(i[n]))
    return i[n];
  var u = r[n] - l - a, f = r[n] + a;
  if (t[n])
    return o[n] ? u : f;
  if (o[n]) {
    var d = u, p = s[n];
    return d < p ? Math.max(f, s[n]) : Math.max(u, s[n]);
  }
  var v = f + l, m = s[n] + c;
  return v > m ? Math.max(u, s[n]) : Math.max(f, s[n]);
}
function x2(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function w2(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, l = e.useTranslate3d, s = e.viewBox, c, u, f;
  return o.height > 0 && o.width > 0 && r ? (u = Ch({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), f = Ch({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = x2({
    translateX: u,
    translateY: f,
    useTranslate3d: l
  })) : c = y2, {
    cssProperties: c,
    cssClasses: b2({
      translateX: u,
      translateY: f,
      coordinate: r
    })
  };
}
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
}
function Ph(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ph(Object(r), !0).forEach(function(n) {
      ju(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function O2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fb(n.key), n);
  }
}
function $2(e, t, r) {
  return t && O2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function C2(e, t, r) {
  return t = ol(t), P2(e, ub() ? Reflect.construct(t, r || [], ol(e).constructor) : t.apply(e, r));
}
function P2(e, t) {
  if (t && (ta(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _2(e);
}
function _2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ub() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ub = function() {
    return !!e;
  })();
}
function ol(e) {
  return ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ol(e);
}
function E2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Iu(e, t);
}
function Iu(e, t) {
  return Iu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Iu(e, t);
}
function ju(e, t, r) {
  return t = fb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fb(e) {
  var t = A2(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function A2(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Eh = 1, T2 = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    S2(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = C2(this, t, [].concat(a)), ju(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), ju(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var l, s, c, u;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (l = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null && l !== void 0 ? l : 0,
            y: (c = (u = r.props.coordinate) === null || u === void 0 ? void 0 : u.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return E2(t, e), $2(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Eh || Math.abs(n.height - this.state.lastBoundingBox.height) > Eh) && this.setState({
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, l = a.animationDuration, s = a.animationEasing, c = a.children, u = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, v = a.position, m = a.reverseDirection, h = a.useTranslate3d, y = a.viewBox, w = a.wrapperStyle, S = w2({
        allowEscapeViewBox: o,
        coordinate: u,
        offsetTopLeft: p,
        position: v,
        reverseDirection: m,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: h,
        viewBox: y
      }), O = S.cssClasses, g = S.cssProperties, x = _h(_h({
        transition: d && i ? "transform ".concat(l, "ms ").concat(s) : void 0
      }, g), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ T.createElement("div", {
          tabIndex: -1,
          className: O,
          style: x,
          ref: function(C) {
            n.wrapperNode = C;
          }
        }, c)
      );
    }
  }]);
}(b.PureComponent), M2 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, wr = {
  isSsr: M2(),
  get: function(t) {
    return wr[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      wr[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(a) {
        wr[a] = t[a];
      });
    }
  }
};
function ra(e) {
  "@babel/helpers - typeof";
  return ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ra(e);
}
function Ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Th(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(r), !0).forEach(function(n) {
      Od(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function j2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, pb(n.key), n);
  }
}
function D2(e, t, r) {
  return t && j2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function N2(e, t, r) {
  return t = ll(t), R2(e, db() ? Reflect.construct(t, r || [], ll(e).constructor) : t.apply(e, r));
}
function R2(e, t) {
  if (t && (ra(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return k2(e);
}
function k2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function db() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (db = function() {
    return !!e;
  })();
}
function ll(e) {
  return ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ll(e);
}
function B2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Du(e, t);
}
function Du(e, t) {
  return Du = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Du(e, t);
}
function Od(e, t, r) {
  return t = pb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pb(e) {
  var t = L2(e, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function L2(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function H2(e) {
  return e.dataKey;
}
function F2(e, t) {
  return /* @__PURE__ */ T.isValidElement(e) ? /* @__PURE__ */ T.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ T.createElement(e, t) : /* @__PURE__ */ T.createElement(v2, t);
}
var lr = /* @__PURE__ */ function(e) {
  function t() {
    return I2(this, t), N2(this, t, arguments);
  }
  return B2(t, e), D2(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, l = a.animationDuration, s = a.animationEasing, c = a.content, u = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, v = a.payload, m = a.payloadUniqBy, h = a.position, y = a.reverseDirection, w = a.useTranslate3d, S = a.viewBox, O = a.wrapperStyle, g = v ?? [];
      f && g.length && (g = rb(v.filter(function($) {
        return $.value != null && ($.hide !== !0 || n.props.includeHidden);
      }), m, H2));
      var x = g.length > 0;
      return /* @__PURE__ */ T.createElement(T2, {
        allowEscapeViewBox: o,
        animationDuration: l,
        animationEasing: s,
        isAnimationActive: d,
        active: i,
        coordinate: u,
        hasPayload: x,
        offset: p,
        position: h,
        reverseDirection: y,
        useTranslate3d: w,
        viewBox: S,
        wrapperStyle: O
      }, F2(c, Th(Th({}, this.props), {}, {
        payload: g
      })));
    }
  }]);
}(b.PureComponent);
Od(lr, "displayName", "Tooltip");
Od(lr, "defaultProps", {
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
  isAnimationActive: !wr.isSsr,
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
var W2 = _r, V2 = function() {
  return W2.Date.now();
}, z2 = V2, U2 = /\s/;
function Y2(e) {
  for (var t = e.length; t-- && U2.test(e.charAt(t)); )
    ;
  return t;
}
var q2 = Y2, G2 = q2, K2 = /^\s+/;
function X2(e) {
  return e && e.slice(0, G2(e) + 1).replace(K2, "");
}
var Z2 = X2, Q2 = Z2, Mh = tn, J2 = _a, Ih = NaN, eN = /^[-+]0x[0-9a-f]+$/i, tN = /^0b[01]+$/i, rN = /^0o[0-7]+$/i, nN = parseInt;
function aN(e) {
  if (typeof e == "number")
    return e;
  if (J2(e))
    return Ih;
  if (Mh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Mh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Q2(e);
  var r = tN.test(e);
  return r || rN.test(e) ? nN(e.slice(2), r ? 2 : 8) : eN.test(e) ? Ih : +e;
}
var hb = aN, iN = tn, jc = z2, jh = hb, oN = "Expected a function", lN = Math.max, sN = Math.min;
function cN(e, t, r) {
  var n, a, i, o, l, s, c = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(oN);
  t = jh(t) || 0, iN(r) && (u = !!r.leading, f = "maxWait" in r, i = f ? lN(jh(r.maxWait) || 0, t) : i, d = "trailing" in r ? !!r.trailing : d);
  function p(x) {
    var $ = n, C = a;
    return n = a = void 0, c = x, o = e.apply(C, $), o;
  }
  function v(x) {
    return c = x, l = setTimeout(y, t), u ? p(x) : o;
  }
  function m(x) {
    var $ = x - s, C = x - c, _ = t - $;
    return f ? sN(_, i - C) : _;
  }
  function h(x) {
    var $ = x - s, C = x - c;
    return s === void 0 || $ >= t || $ < 0 || f && C >= i;
  }
  function y() {
    var x = jc();
    if (h(x))
      return w(x);
    l = setTimeout(y, m(x));
  }
  function w(x) {
    return l = void 0, d && n ? p(x) : (n = a = void 0, o);
  }
  function S() {
    l !== void 0 && clearTimeout(l), c = 0, n = s = a = l = void 0;
  }
  function O() {
    return l === void 0 ? o : w(jc());
  }
  function g() {
    var x = jc(), $ = h(x);
    if (n = arguments, a = this, s = x, $) {
      if (l === void 0)
        return v(s);
      if (f)
        return clearTimeout(l), l = setTimeout(y, t), p(s);
    }
    return l === void 0 && (l = setTimeout(y, t)), o;
  }
  return g.cancel = S, g.flush = O, g;
}
var uN = cN, fN = uN, dN = tn, pN = "Expected a function";
function hN(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(pN);
  return dN(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), fN(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var vN = hN;
const vb = /* @__PURE__ */ We(vN);
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function Dh(e, t) {
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
    t % 2 ? Dh(Object(r), !0).forEach(function(n) {
      mN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mN(e, t, r) {
  return t = gN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gN(e) {
  var t = yN(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function yN(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bN(e, t) {
  return ON(e) || SN(e, t) || wN(e, t) || xN();
}
function xN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wN(e, t) {
  if (e) {
    if (typeof e == "string") return Nh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nh(e, t);
  }
}
function Nh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function SN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function ON(e) {
  if (Array.isArray(e)) return e;
}
var mb = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, l = e.height, s = l === void 0 ? "100%" : l, c = e.minWidth, u = c === void 0 ? 0 : c, f = e.minHeight, d = e.maxHeight, p = e.children, v = e.debounce, m = v === void 0 ? 0 : v, h = e.id, y = e.className, w = e.onResize, S = e.style, O = S === void 0 ? {} : S, g = b.useRef(null), x = b.useRef();
  x.current = w, b.useImperativeHandle(t, function() {
    return Object.defineProperty(g.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), g.current;
      },
      configurable: !0
    });
  });
  var $ = b.useState({
    containerWidth: a.width,
    containerHeight: a.height
  }), C = bN($, 2), _ = C[0], M = C[1], P = b.useCallback(function(N, j) {
    M(function(E) {
      var A = Math.round(N), D = Math.round(j);
      return E.containerWidth === A && E.containerHeight === D ? E : {
        containerWidth: A,
        containerHeight: D
      };
    });
  }, []);
  b.useEffect(function() {
    var N = function(k) {
      var L, H = k[0].contentRect, B = H.width, W = H.height;
      P(B, W), (L = x.current) === null || L === void 0 || L.call(x, B, W);
    };
    m > 0 && (N = vb(N, m, {
      trailing: !0,
      leading: !1
    }));
    var j = new ResizeObserver(N), E = g.current.getBoundingClientRect(), A = E.width, D = E.height;
    return P(A, D), j.observe(g.current), function() {
      j.disconnect();
    };
  }, [P, m]);
  var I = b.useMemo(function() {
    var N = _.containerWidth, j = _.containerHeight;
    if (N < 0 || j < 0)
      return null;
    Dr(yn(o) || yn(s), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, s), Dr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var E = yn(o) ? N : o, A = yn(s) ? j : s;
    r && r > 0 && (E ? A = E / r : A && (E = A * r), d && A > d && (A = d)), Dr(E > 0 || A > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, E, A, o, s, u, f, r);
    var D = !Array.isArray(p) && jr(p.type).endsWith("Chart");
    return T.Children.map(p, function(R) {
      return /* @__PURE__ */ T.isValidElement(R) ? /* @__PURE__ */ b.cloneElement(R, Co({
        width: E,
        height: A
      }, D ? {
        style: Co({
          height: "100%",
          width: "100%",
          maxHeight: A,
          maxWidth: E
        }, R.props.style)
      } : {})) : R;
    });
  }, [r, p, s, d, f, u, _, o]);
  return /* @__PURE__ */ T.createElement("div", {
    id: h ? "".concat(h) : void 0,
    className: De("recharts-responsive-container", y),
    style: Co(Co({}, O), {}, {
      width: o,
      height: s,
      minWidth: u,
      minHeight: f,
      maxHeight: d
    }),
    ref: g
  }, I);
}), vs = function(t) {
  return null;
};
vs.displayName = "Cell";
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Rh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rh(Object(r), !0).forEach(function(n) {
      $N(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $N(e, t, r) {
  return t = CN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CN(e) {
  var t = PN(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function PN(e, t) {
  if ($i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kn = {
  widthCache: {},
  cacheCount: 0
}, _N = 2e3, EN = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, kh = "recharts_measurement_span";
function AN(e) {
  var t = Nu({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var fi = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || wr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = AN(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (kn.widthCache[a])
    return kn.widthCache[a];
  try {
    var i = document.getElementById(kh);
    i || (i = document.createElement("span"), i.setAttribute("id", kh), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = Nu(Nu({}, EN), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var l = i.getBoundingClientRect(), s = {
      width: l.width,
      height: l.height
    };
    return kn.widthCache[a] = s, ++kn.cacheCount > _N && (kn.cacheCount = 0, kn.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, TN = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function sl(e, t) {
  return DN(e) || jN(e, t) || IN(e, t) || MN();
}
function MN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IN(e, t) {
  if (e) {
    if (typeof e == "string") return Bh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Bh(e, t);
  }
}
function Bh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function DN(e) {
  if (Array.isArray(e)) return e;
}
function NN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kN(n.key), n);
  }
}
function RN(e, t, r) {
  return t && Lh(e.prototype, t), r && Lh(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kN(e) {
  var t = BN(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function BN(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Fh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, LN = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, HN = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, gb = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, FN = Object.keys(gb), Fn = "NaN";
function WN(e, t) {
  return e * gb[t];
}
var Po = /* @__PURE__ */ function() {
  function e(t, r) {
    NN(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !LN.test(r) && (this.num = NaN, this.unit = ""), FN.includes(r) && (this.num = WN(t, r), this.unit = "px");
  }
  return RN(e, [{
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
      var n, a = (n = HN.exec(r)) !== null && n !== void 0 ? n : [], i = sl(a, 3), o = i[1], l = i[2];
      return new e(parseFloat(o), l ?? "");
    }
  }]);
}();
function yb(e) {
  if (e.includes(Fn))
    return Fn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Hh.exec(t)) !== null && r !== void 0 ? r : [], a = sl(n, 4), i = a[1], o = a[2], l = a[3], s = Po.parse(i ?? ""), c = Po.parse(l ?? ""), u = o === "*" ? s.multiply(c) : s.divide(c);
    if (u.isNaN())
      return Fn;
    t = t.replace(Hh, u.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = Fh.exec(t)) !== null && f !== void 0 ? f : [], p = sl(d, 4), v = p[1], m = p[2], h = p[3], y = Po.parse(v ?? ""), w = Po.parse(h ?? ""), S = m === "+" ? y.add(w) : y.subtract(w);
    if (S.isNaN())
      return Fn;
    t = t.replace(Fh, S.toString());
  }
  return t;
}
var Wh = /\(([^()]*)\)/;
function VN(e) {
  for (var t = e; t.includes("("); ) {
    var r = Wh.exec(t), n = sl(r, 2), a = n[1];
    t = t.replace(Wh, yb(a));
  }
  return t;
}
function zN(e) {
  var t = e.replace(/\s+/g, "");
  return t = VN(t), t = yb(t), t;
}
function UN(e) {
  try {
    return zN(e);
  } catch {
    return Fn;
  }
}
function Dc(e) {
  var t = UN(e.slice(5, -1));
  return t === Fn ? "" : t;
}
var YN = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], qN = ["dx", "dy", "angle", "className", "breakAll"];
function Ru() {
  return Ru = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ru.apply(this, arguments);
}
function Vh(e, t) {
  if (e == null) return {};
  var r = GN(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function GN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zh(e, t) {
  return QN(e) || ZN(e, t) || XN(e, t) || KN();
}
function KN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XN(e, t) {
  if (e) {
    if (typeof e == "string") return Uh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uh(e, t);
  }
}
function Uh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ZN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function QN(e) {
  if (Array.isArray(e)) return e;
}
var bb = /[ \f\n\r\t\v\u2028\u2029]+/, xb = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    Ae(r) || (n ? i = r.toString().split("") : i = r.toString().split(bb));
    var o = i.map(function(s) {
      return {
        word: s,
        width: fi(s, a).width
      };
    }), l = n ? 0 : fi(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: l
    };
  } catch {
    return null;
  }
}, JN = function(t, r, n, a, i) {
  var o = t.maxLines, l = t.children, s = t.style, c = t.breakAll, u = ee(o), f = l, d = function() {
    var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return E.reduce(function(A, D) {
      var R = D.word, k = D.width, L = A[A.length - 1];
      if (L && (a == null || i || L.width + k + n < Number(a)))
        L.words.push(R), L.width += k + n;
      else {
        var H = {
          words: [R],
          width: k
        };
        A.push(H);
      }
      return A;
    }, []);
  }, p = d(r), v = function(E) {
    return E.reduce(function(A, D) {
      return A.width > D.width ? A : D;
    });
  };
  if (!u)
    return p;
  for (var m = "…", h = function(E) {
    var A = f.slice(0, E), D = xb({
      breakAll: c,
      style: s,
      children: A + m
    }).wordsWithComputedWidth, R = d(D), k = R.length > o || v(R).width > Number(a);
    return [k, R];
  }, y = 0, w = f.length - 1, S = 0, O; y <= w && S <= f.length - 1; ) {
    var g = Math.floor((y + w) / 2), x = g - 1, $ = h(x), C = zh($, 2), _ = C[0], M = C[1], P = h(g), I = zh(P, 1), N = I[0];
    if (!_ && !N && (y = g + 1), _ && N && (w = g - 1), !_ && N) {
      O = M;
      break;
    }
    S++;
  }
  return O || p;
}, Yh = function(t) {
  var r = Ae(t) ? [] : t.toString().split(bb);
  return [{
    words: r
  }];
}, eR = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, l = t.maxLines;
  if ((r || n) && !wr.isSsr) {
    var s, c, u = xb({
      breakAll: o,
      children: a,
      style: i
    });
    if (u) {
      var f = u.wordsWithComputedWidth, d = u.spaceWidth;
      s = f, c = d;
    } else
      return Yh(a);
    return JN({
      breakAll: o,
      children: a,
      maxLines: l,
      style: i
    }, s, c, r, n);
  }
  return Yh(a);
}, qh = "#808080", Pn = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, l = o === void 0 ? "1em" : o, s = t.capHeight, c = s === void 0 ? "0.71em" : s, u = t.scaleToFit, f = u === void 0 ? !1 : u, d = t.textAnchor, p = d === void 0 ? "start" : d, v = t.verticalAnchor, m = v === void 0 ? "end" : v, h = t.fill, y = h === void 0 ? qh : h, w = Vh(t, YN), S = b.useMemo(function() {
    return eR({
      breakAll: w.breakAll,
      children: w.children,
      maxLines: w.maxLines,
      scaleToFit: f,
      style: w.style,
      width: w.width
    });
  }, [w.breakAll, w.children, w.maxLines, f, w.style, w.width]), O = w.dx, g = w.dy, x = w.angle, $ = w.className, C = w.breakAll, _ = Vh(w, qN);
  if (!gt(n) || !gt(i))
    return null;
  var M = n + (ee(O) ? O : 0), P = i + (ee(g) ? g : 0), I;
  switch (m) {
    case "start":
      I = Dc("calc(".concat(c, ")"));
      break;
    case "middle":
      I = Dc("calc(".concat((S.length - 1) / 2, " * -").concat(l, " + (").concat(c, " / 2))"));
      break;
    default:
      I = Dc("calc(".concat(S.length - 1, " * -").concat(l, ")"));
      break;
  }
  var N = [];
  if (f) {
    var j = S[0].width, E = w.width;
    N.push("scale(".concat((ee(E) ? E / j : 1) / j, ")"));
  }
  return x && N.push("rotate(".concat(x, ", ").concat(M, ", ").concat(P, ")")), N.length && (_.transform = N.join(" ")), /* @__PURE__ */ T.createElement("text", Ru({}, me(_, !0), {
    x: M,
    y: P,
    className: De("recharts-text", $),
    textAnchor: p,
    fill: y.includes("url") ? qh : y
  }), S.map(function(A, D) {
    var R = A.words.join(C ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ T.createElement("tspan", {
        x: M,
        dy: D === 0 ? I : l,
        key: "".concat(R, "-").concat(D)
      }, R)
    );
  }));
};
function Jr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tR(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function $d(e) {
  let t, r, n;
  e.length !== 2 ? (t = Jr, r = (l, s) => Jr(e(l), s), n = (l, s) => e(l) - s) : (t = e === Jr || e === tR ? e : rR, r = e, n = e);
  function a(l, s, c = 0, u = l.length) {
    if (c < u) {
      if (t(s, s) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], s) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function i(l, s, c = 0, u = l.length) {
    if (c < u) {
      if (t(s, s) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], s) <= 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function o(l, s, c = 0, u = l.length) {
    const f = a(l, s, c, u - 1);
    return f > c && n(l[f - 1], s) > -n(l[f], s) ? f - 1 : f;
  }
  return { left: a, center: o, right: i };
}
function rR() {
  return 0;
}
function wb(e) {
  return e === null ? NaN : +e;
}
function* nR(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const aR = $d(Jr), no = aR.right;
$d(wb).center;
class Gh extends Map {
  constructor(t, r = lR) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(Kh(this, t));
  }
  has(t) {
    return super.has(Kh(this, t));
  }
  set(t, r) {
    return super.set(iR(this, t), r);
  }
  delete(t) {
    return super.delete(oR(this, t));
  }
}
function Kh({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function iR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function oR({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function lR(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function sR(e = Jr) {
  if (e === Jr) return Sb;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Sb(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const cR = Math.sqrt(50), uR = Math.sqrt(10), fR = Math.sqrt(2);
function cl(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= cR ? 10 : i >= uR ? 5 : i >= fR ? 2 : 1;
  let l, s, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, l = Math.round(e * c), s = Math.round(t * c), l / c < e && ++l, s / c > t && --s, c = -c) : (c = Math.pow(10, a) * o, l = Math.round(e / c), s = Math.round(t / c), l * c < e && ++l, s * c > t && --s), s < l && 0.5 <= r && r < 2 ? cl(e, t, r * 2) : [l, s, c];
}
function ku(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? cl(t, e, r) : cl(e, t, r);
  if (!(i >= a)) return [];
  const l = i - a + 1, s = new Array(l);
  if (n)
    if (o < 0) for (let c = 0; c < l; ++c) s[c] = (i - c) / -o;
    else for (let c = 0; c < l; ++c) s[c] = (i - c) * o;
  else if (o < 0) for (let c = 0; c < l; ++c) s[c] = (a + c) / -o;
  else for (let c = 0; c < l; ++c) s[c] = (a + c) * o;
  return s;
}
function Bu(e, t, r) {
  return t = +t, e = +e, r = +r, cl(e, t, r)[2];
}
function Lu(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? Bu(t, e, r) : Bu(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function Xh(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Zh(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ob(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? Sb : sR(a); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, u = Math.log(s), f = 0.5 * Math.exp(2 * u / 3), d = 0.5 * Math.sqrt(u * f * (s - f) / s) * (c - s / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / s + d)), v = Math.min(n, Math.floor(t + (s - c) * f / s + d));
      Ob(e, t, p, v, a);
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
function dR(e, t, r) {
  if (e = Float64Array.from(nR(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Zh(e);
    if (t >= 1) return Xh(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = Xh(Ob(e, i).subarray(0, i + 1)), l = Zh(e.subarray(i + 1));
    return o + (l - o) * (a - i);
  }
}
function pR(e, t, r = wb) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), l = +r(e[i + 1], i + 1, e);
    return o + (l - o) * (a - i);
  }
}
function hR(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function ar(e, t) {
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
function Ur(e, t) {
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
const Hu = Symbol("implicit");
function Cd() {
  var e = new Gh(), t = [], r = [], n = Hu;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== Hu) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new Gh();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Cd(t, r).unknown(n);
  }, ar.apply(a, arguments), a;
}
function Pi() {
  var e = Cd().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, l = !1, s = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, v = p ? a : n, m = p ? n : a;
    i = (m - v) / Math.max(1, d - s + c * 2), l && (i = Math.floor(i)), v += (m - v - i * (d - s)) * u, o = i * (1 - s), l && (v = Math.round(v), o = Math.round(o));
    var h = hR(d).map(function(y) {
      return v + i * y;
    });
    return r(p ? h.reverse() : h);
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
    return arguments.length ? (s = Math.min(1, c = +d), f()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), f()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (u = Math.max(0, Math.min(1, d)), f()) : u;
  }, e.copy = function() {
    return Pi(t(), [n, a]).round(l).paddingInner(s).paddingOuter(c).align(u);
  }, ar.apply(f(), arguments);
}
function $b(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return $b(t());
  }, e;
}
function di() {
  return $b(Pi.apply(null, arguments).paddingInner(1));
}
function Pd(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Cb(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function ao() {
}
var _i = 0.7, ul = 1 / _i, Gn = "\\s*([+-]?\\d+)\\s*", Ei = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", vR = /^#([0-9a-f]{3,8})$/, mR = new RegExp(`^rgb\\(${Gn},${Gn},${Gn}\\)$`), gR = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), yR = new RegExp(`^rgba\\(${Gn},${Gn},${Gn},${Ei}\\)$`), bR = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${Ei}\\)$`), xR = new RegExp(`^hsl\\(${Ei},${Sr},${Sr}\\)$`), wR = new RegExp(`^hsla\\(${Ei},${Sr},${Sr},${Ei}\\)$`), Qh = {
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
Pd(ao, Ai, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Jh,
  // Deprecated! Use color.formatHex.
  formatHex: Jh,
  formatHex8: SR,
  formatHsl: OR,
  formatRgb: ev,
  toString: ev
});
function Jh() {
  return this.rgb().formatHex();
}
function SR() {
  return this.rgb().formatHex8();
}
function OR() {
  return Pb(this).formatHsl();
}
function ev() {
  return this.rgb().formatRgb();
}
function Ai(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = vR.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? tv(t) : r === 3 ? new Ht(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? _o(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? _o(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = mR.exec(e)) ? new Ht(t[1], t[2], t[3], 1) : (t = gR.exec(e)) ? new Ht(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = yR.exec(e)) ? _o(t[1], t[2], t[3], t[4]) : (t = bR.exec(e)) ? _o(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = xR.exec(e)) ? av(t[1], t[2] / 100, t[3] / 100, 1) : (t = wR.exec(e)) ? av(t[1], t[2] / 100, t[3] / 100, t[4]) : Qh.hasOwnProperty(e) ? tv(Qh[e]) : e === "transparent" ? new Ht(NaN, NaN, NaN, 0) : null;
}
function tv(e) {
  return new Ht(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function _o(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ht(e, t, r, n);
}
function $R(e) {
  return e instanceof ao || (e = Ai(e)), e ? (e = e.rgb(), new Ht(e.r, e.g, e.b, e.opacity)) : new Ht();
}
function Fu(e, t, r, n) {
  return arguments.length === 1 ? $R(e) : new Ht(e, t, r, n ?? 1);
}
function Ht(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Pd(Ht, Fu, Cb(ao, {
  brighter(e) {
    return e = e == null ? ul : Math.pow(ul, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _i : Math.pow(_i, e), new Ht(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ht(On(this.r), On(this.g), On(this.b), fl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rv,
  // Deprecated! Use color.formatHex.
  formatHex: rv,
  formatHex8: CR,
  formatRgb: nv,
  toString: nv
}));
function rv() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}`;
}
function CR() {
  return `#${bn(this.r)}${bn(this.g)}${bn(this.b)}${bn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function nv() {
  const e = fl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${On(this.r)}, ${On(this.g)}, ${On(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function fl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function On(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function bn(e) {
  return e = On(e), (e < 16 ? "0" : "") + e.toString(16);
}
function av(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new cr(e, t, r, n);
}
function Pb(e) {
  if (e instanceof cr) return new cr(e.h, e.s, e.l, e.opacity);
  if (e instanceof ao || (e = Ai(e)), !e) return new cr();
  if (e instanceof cr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, l = i - a, s = (i + a) / 2;
  return l ? (t === i ? o = (r - n) / l + (r < n) * 6 : r === i ? o = (n - t) / l + 2 : o = (t - r) / l + 4, l /= s < 0.5 ? i + a : 2 - i - a, o *= 60) : l = s > 0 && s < 1 ? 0 : o, new cr(o, l, s, e.opacity);
}
function PR(e, t, r, n) {
  return arguments.length === 1 ? Pb(e) : new cr(e, t, r, n ?? 1);
}
function cr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Pd(cr, PR, Cb(ao, {
  brighter(e) {
    return e = e == null ? ul : Math.pow(ul, e), new cr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _i : Math.pow(_i, e), new cr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new Ht(
      Nc(e >= 240 ? e - 240 : e + 120, a, n),
      Nc(e, a, n),
      Nc(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new cr(iv(this.h), Eo(this.s), Eo(this.l), fl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = fl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${iv(this.h)}, ${Eo(this.s) * 100}%, ${Eo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function iv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Eo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Nc(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const _d = (e) => () => e;
function _R(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function ER(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function AR(e) {
  return (e = +e) == 1 ? _b : function(t, r) {
    return r - t ? ER(t, r, e) : _d(isNaN(t) ? r : t);
  };
}
function _b(e, t) {
  var r = t - e;
  return r ? _R(e, r) : _d(isNaN(e) ? t : e);
}
const ov = function e(t) {
  var r = AR(t);
  function n(a, i) {
    var o = r((a = Fu(a)).r, (i = Fu(i)).r), l = r(a.g, i.g), s = r(a.b, i.b), c = _b(a.opacity, i.opacity);
    return function(u) {
      return a.r = o(u), a.g = l(u), a.b = s(u), a.opacity = c(u), a + "";
    };
  }
  return n.gamma = e, n;
}(1);
function TR(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function MR(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function IR(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = ka(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(l) {
    for (o = 0; o < n; ++o) i[o] = a[o](l);
    return i;
  };
}
function jR(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function dl(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function DR(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = ka(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var Wu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Rc = new RegExp(Wu.source, "g");
function NR(e) {
  return function() {
    return e;
  };
}
function RR(e) {
  return function(t) {
    return e(t) + "";
  };
}
function kR(e, t) {
  var r = Wu.lastIndex = Rc.lastIndex = 0, n, a, i, o = -1, l = [], s = [];
  for (e = e + "", t = t + ""; (n = Wu.exec(e)) && (a = Rc.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), l[o] ? l[o] += i : l[++o] = i), (n = n[0]) === (a = a[0]) ? l[o] ? l[o] += a : l[++o] = a : (l[++o] = null, s.push({ i: o, x: dl(n, a) })), r = Rc.lastIndex;
  return r < t.length && (i = t.slice(r), l[o] ? l[o] += i : l[++o] = i), l.length < 2 ? s[0] ? RR(s[0].x) : NR(t) : (t = s.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = s[u]).i] = f.x(c);
    return l.join("");
  });
}
function ka(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? _d(t) : (r === "number" ? dl : r === "string" ? (n = Ai(t)) ? (t = n, ov) : kR : t instanceof Ai ? ov : t instanceof Date ? jR : MR(t) ? TR : Array.isArray(t) ? IR : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? DR : dl)(e, t);
}
function Ed(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function BR(e, t) {
  t === void 0 && (t = e, e = ka);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[l](o - l);
  };
}
function LR(e) {
  return function() {
    return e;
  };
}
function pl(e) {
  return +e;
}
var lv = [0, 1];
function kt(e) {
  return e;
}
function Vu(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : LR(isNaN(t) ? NaN : 0.5);
}
function HR(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function FR(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = Vu(a, n), i = r(o, i)) : (n = Vu(n, a), i = r(i, o)), function(l) {
    return i(n(l));
  };
}
function WR(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = Vu(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(l) {
    var s = no(e, l, 1, n) - 1;
    return i[s](a[s](l));
  };
}
function io(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ms() {
  var e = lv, t = lv, r = ka, n, a, i, o = kt, l, s, c;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== kt && (o = HR(e[0], e[d - 1])), l = d > 2 ? WR : FR, s = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (s || (s = l(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((c || (c = l(t, e.map(n), dl)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, pl), u()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Ed, u();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : kt, u()) : o !== kt;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, u()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, function(d, p) {
    return n = d, a = p, u();
  };
}
function Ad() {
  return ms()(kt, kt);
}
function VR(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function hl(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function na(e) {
  return e = hl(Math.abs(e)), e ? e[1] : NaN;
}
function zR(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, l = e[0], s = 0; a > 0 && l > 0 && (s + l + 1 > n && (l = Math.max(1, n - s)), i.push(r.substring(a -= l, a + l)), !((s += l + 1) > n)); )
      l = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function UR(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var YR = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ti(e) {
  if (!(t = YR.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Td({
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
Ti.prototype = Td.prototype;
function Td(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Td.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function qR(e) {
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
var Eb;
function GR(e, t) {
  var r = hl(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (Eb = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + hl(e, Math.max(0, t + i - 1))[0];
}
function sv(e, t) {
  var r = hl(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const cv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: VR,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => sv(e * 100, t),
  r: sv,
  s: GR,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function uv(e) {
  return e;
}
var fv = Array.prototype.map, dv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function KR(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? uv : zR(fv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? uv : UR(fv.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Ti(f);
    var d = f.fill, p = f.align, v = f.sign, m = f.symbol, h = f.zero, y = f.width, w = f.comma, S = f.precision, O = f.trim, g = f.type;
    g === "n" ? (w = !0, g = "g") : cv[g] || (S === void 0 && (S = 12), O = !0, g = "g"), (h || d === "0" && p === "=") && (h = !0, d = "0", p = "=");
    var x = m === "$" ? r : m === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", $ = m === "$" ? n : /[%p]/.test(g) ? o : "", C = cv[g], _ = /[defgprs%]/.test(g);
    S = S === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function M(P) {
      var I = x, N = $, j, E, A;
      if (g === "c")
        N = C(P) + N, P = "";
      else {
        P = +P;
        var D = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? s : C(Math.abs(P), S), O && (P = qR(P)), D && +P == 0 && v !== "+" && (D = !1), I = (D ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + I, N = (g === "s" ? dv[8 + Eb / 3] : "") + N + (D && v === "(" ? ")" : ""), _) {
          for (j = -1, E = P.length; ++j < E; )
            if (A = P.charCodeAt(j), 48 > A || A > 57) {
              N = (A === 46 ? a + P.slice(j + 1) : P.slice(j)) + N, P = P.slice(0, j);
              break;
            }
        }
      }
      w && !h && (P = t(P, 1 / 0));
      var R = I.length + P.length + N.length, k = R < y ? new Array(y - R + 1).join(d) : "";
      switch (w && h && (P = t(k + P, k.length ? y - N.length : 1 / 0), k = ""), p) {
        case "<":
          P = I + P + N + k;
          break;
        case "=":
          P = I + k + P + N;
          break;
        case "^":
          P = k.slice(0, R = k.length >> 1) + I + P + N + k.slice(R);
          break;
        default:
          P = k + I + P + N;
          break;
      }
      return i(P);
    }
    return M.toString = function() {
      return f + "";
    }, M;
  }
  function u(f, d) {
    var p = c((f = Ti(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(na(d) / 3))) * 3, m = Math.pow(10, -v), h = dv[8 + v / 3];
    return function(y) {
      return p(m * y) + h;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Ao, Md, Ab;
XR({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function XR(e) {
  return Ao = KR(e), Md = Ao.format, Ab = Ao.formatPrefix, Ao;
}
function ZR(e) {
  return Math.max(0, -na(Math.abs(e)));
}
function QR(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(na(t) / 3))) * 3 - na(Math.abs(e)));
}
function JR(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, na(t) - na(e)) + 1;
}
function Tb(e, t, r, n) {
  var a = Lu(e, t, r), i;
  switch (n = Ti(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = QR(a, o)) && (n.precision = i), Ab(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = JR(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = ZR(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return Md(n);
}
function nn(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return ku(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return Tb(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], l = n[i], s, c, u = 10;
    for (l < o && (c = o, o = l, l = c, c = a, a = i, i = c); u-- > 0; ) {
      if (c = Bu(o, l, r), c === s)
        return n[a] = o, n[i] = l, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function vl() {
  var e = Ad();
  return e.copy = function() {
    return io(e, vl());
  }, ar.apply(e, arguments), nn(e);
}
function Mb(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, pl), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Mb(e).unknown(t);
  }, e = arguments.length ? Array.from(e, pl) : [0, 1], nn(r);
}
function Ib(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function pv(e) {
  return Math.log(e);
}
function hv(e) {
  return Math.exp(e);
}
function ek(e) {
  return -Math.log(-e);
}
function tk(e) {
  return -Math.exp(-e);
}
function rk(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function nk(e) {
  return e === 10 ? rk : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function ak(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function vv(e) {
  return (t, r) => -e(-t, r);
}
function Id(e) {
  const t = e(pv, hv), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = ak(n), i = nk(n), r()[0] < 0 ? (a = vv(a), i = vv(i), e(ek, tk)) : e(pv, hv), t;
  }
  return t.base = function(l) {
    return arguments.length ? (n = +l, o()) : n;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), o()) : r();
  }, t.ticks = (l) => {
    const s = r();
    let c = s[0], u = s[s.length - 1];
    const f = u < c;
    f && ([c, u] = [u, c]);
    let d = a(c), p = a(u), v, m;
    const h = l == null ? 10 : +l;
    let y = [];
    if (!(n % 1) && p - d < h) {
      if (d = Math.floor(d), p = Math.ceil(p), c > 0) {
        for (; d <= p; ++d)
          for (v = 1; v < n; ++v)
            if (m = d < 0 ? v / i(-d) : v * i(d), !(m < c)) {
              if (m > u) break;
              y.push(m);
            }
      } else for (; d <= p; ++d)
        for (v = n - 1; v >= 1; --v)
          if (m = d > 0 ? v / i(-d) : v * i(d), !(m < c)) {
            if (m > u) break;
            y.push(m);
          }
      y.length * 2 < h && (y = ku(c, u, h));
    } else
      y = ku(d, p, Math.min(p - d, h)).map(i);
    return f ? y.reverse() : y;
  }, t.tickFormat = (l, s) => {
    if (l == null && (l = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Ti(s)).precision == null && (s.trim = !0), s = Md(s)), l === 1 / 0) return s;
    const c = Math.max(1, n * l / t.ticks().length);
    return (u) => {
      let f = u / i(Math.round(a(u)));
      return f * n < n - 0.5 && (f *= n), f <= c ? s(u) : "";
    };
  }, t.nice = () => r(Ib(r(), {
    floor: (l) => i(Math.floor(a(l))),
    ceil: (l) => i(Math.ceil(a(l)))
  })), t;
}
function jb() {
  const e = Id(ms()).domain([1, 10]);
  return e.copy = () => io(e, jb()).base(e.base()), ar.apply(e, arguments), e;
}
function mv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function gv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function jd(e) {
  var t = 1, r = e(mv(t), gv(t));
  return r.constant = function(n) {
    return arguments.length ? e(mv(t = +n), gv(t)) : t;
  }, nn(r);
}
function Db() {
  var e = jd(ms());
  return e.copy = function() {
    return io(e, Db()).constant(e.constant());
  }, ar.apply(e, arguments);
}
function yv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function ik(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function ok(e) {
  return e < 0 ? -e * e : e * e;
}
function Dd(e) {
  var t = e(kt, kt), r = 1;
  function n() {
    return r === 1 ? e(kt, kt) : r === 0.5 ? e(ik, ok) : e(yv(r), yv(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, nn(t);
}
function Nd() {
  var e = Dd(ms());
  return e.copy = function() {
    return io(e, Nd()).exponent(e.exponent());
  }, ar.apply(e, arguments), e;
}
function lk() {
  return Nd.apply(null, arguments).exponent(0.5);
}
function bv(e) {
  return Math.sign(e) * e * e;
}
function sk(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Nb() {
  var e = Ad(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = sk(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(bv(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, pl)).map(bv)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Nb(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ar.apply(a, arguments), nn(a);
}
function Rb() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++o < l; ) r[o - 1] = pR(e, o / l);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[no(r, o)];
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
    return e.sort(Jr), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return Rb().domain(e).range(t).unknown(n);
  }, ar.apply(i, arguments);
}
function kb() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(s) {
    return s != null && s <= s ? a[no(n, s, 0, r)] : i;
  }
  function l() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, l()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (a = Array.from(s)).length - 1, l()) : a.slice();
  }, o.invertExtent = function(s) {
    var c = a.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (i = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return kb().domain([e, t]).range(a).unknown(i);
  }, ar.apply(nn(o), arguments);
}
function Bb() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[no(e, i, 0, n)] : r;
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
    return Bb().domain(e).range(t).unknown(r);
  }, ar.apply(a, arguments);
}
const kc = /* @__PURE__ */ new Date(), Bc = /* @__PURE__ */ new Date();
function bt(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), a.round = (i) => {
    const o = a(i), l = a.ceil(i);
    return i - o < l - i ? o : l;
  }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, l) => {
    const s = [];
    if (i = a.ceil(i), l = l == null ? 1 : Math.floor(l), !(i < o) || !(l > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+i)), t(i, l), e(i);
    while (c < i && i < o);
    return s;
  }, a.filter = (i) => bt((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, l) => {
    if (o >= o)
      if (l < 0) for (; ++l <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --l >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (kc.setTime(+i), Bc.setTime(+o), e(kc), e(Bc), Math.floor(r(kc, Bc))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const ml = bt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
ml.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? bt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : ml);
ml.range;
const Mr = 1e3, tr = Mr * 60, Ir = tr * 60, Lr = Ir * 24, Rd = Lr * 7, xv = Lr * 30, Lc = Lr * 365, xn = bt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Mr);
}, (e, t) => (t - e) / Mr, (e) => e.getUTCSeconds());
xn.range;
const kd = bt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mr);
}, (e, t) => {
  e.setTime(+e + t * tr);
}, (e, t) => (t - e) / tr, (e) => e.getMinutes());
kd.range;
const Bd = bt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * tr);
}, (e, t) => (t - e) / tr, (e) => e.getUTCMinutes());
Bd.range;
const Ld = bt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Mr - e.getMinutes() * tr);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getHours());
Ld.range;
const Hd = bt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCHours());
Hd.range;
const oo = bt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * tr) / Lr,
  (e) => e.getDate() - 1
);
oo.range;
const gs = bt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lr, (e) => e.getUTCDate() - 1);
gs.range;
const Lb = bt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lr, (e) => Math.floor(e / Lr));
Lb.range;
function Mn(e) {
  return bt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * tr) / Rd);
}
const ys = Mn(0), gl = Mn(1), ck = Mn(2), uk = Mn(3), aa = Mn(4), fk = Mn(5), dk = Mn(6);
ys.range;
gl.range;
ck.range;
uk.range;
aa.range;
fk.range;
dk.range;
function In(e) {
  return bt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Rd);
}
const bs = In(0), yl = In(1), pk = In(2), hk = In(3), ia = In(4), vk = In(5), mk = In(6);
bs.range;
yl.range;
pk.range;
hk.range;
ia.range;
vk.range;
mk.range;
const Fd = bt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Fd.range;
const Wd = bt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Wd.range;
const Hr = bt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Hr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : bt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Hr.range;
const Fr = bt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Fr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : bt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Fr.range;
function Hb(e, t, r, n, a, i) {
  const o = [
    [xn, 1, Mr],
    [xn, 5, 5 * Mr],
    [xn, 15, 15 * Mr],
    [xn, 30, 30 * Mr],
    [i, 1, tr],
    [i, 5, 5 * tr],
    [i, 15, 15 * tr],
    [i, 30, 30 * tr],
    [a, 1, Ir],
    [a, 3, 3 * Ir],
    [a, 6, 6 * Ir],
    [a, 12, 12 * Ir],
    [n, 1, Lr],
    [n, 2, 2 * Lr],
    [r, 1, Rd],
    [t, 1, xv],
    [t, 3, 3 * xv],
    [e, 1, Lc]
  ];
  function l(c, u, f) {
    const d = u < c;
    d && ([c, u] = [u, c]);
    const p = f && typeof f.range == "function" ? f : s(c, u, f), v = p ? p.range(c, +u + 1) : [];
    return d ? v.reverse() : v;
  }
  function s(c, u, f) {
    const d = Math.abs(u - c) / f, p = $d(([, , h]) => h).right(o, d);
    if (p === o.length) return e.every(Lu(c / Lc, u / Lc, f));
    if (p === 0) return ml.every(Math.max(Lu(c, u, f), 1));
    const [v, m] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return v.every(m);
  }
  return [l, s];
}
const [gk, yk] = Hb(Fr, Wd, bs, Lb, Hd, Bd), [bk, xk] = Hb(Hr, Fd, ys, oo, Ld, kd);
function Hc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Fc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Xa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function wk(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, l = e.months, s = e.shortMonths, c = Za(a), u = Qa(a), f = Za(i), d = Qa(i), p = Za(o), v = Qa(o), m = Za(l), h = Qa(l), y = Za(s), w = Qa(s), S = {
    a: D,
    A: R,
    b: k,
    B: L,
    c: null,
    d: Pv,
    e: Pv,
    f: zk,
    g: eB,
    G: rB,
    H: Fk,
    I: Wk,
    j: Vk,
    L: Fb,
    m: Uk,
    M: Yk,
    p: H,
    q: B,
    Q: Av,
    s: Tv,
    S: qk,
    u: Gk,
    U: Kk,
    V: Xk,
    w: Zk,
    W: Qk,
    x: null,
    X: null,
    y: Jk,
    Y: tB,
    Z: nB,
    "%": Ev
  }, O = {
    a: W,
    A: U,
    b: G,
    B: Q,
    c: null,
    d: _v,
    e: _v,
    f: lB,
    g: gB,
    G: bB,
    H: aB,
    I: iB,
    j: oB,
    L: Vb,
    m: sB,
    M: cB,
    p: ne,
    q: te,
    Q: Av,
    s: Tv,
    S: uB,
    u: fB,
    U: dB,
    V: pB,
    w: hB,
    W: vB,
    x: null,
    X: null,
    y: mB,
    Y: yB,
    Z: xB,
    "%": Ev
  }, g = {
    a: M,
    A: P,
    b: I,
    B: N,
    c: j,
    d: $v,
    e: $v,
    f: kk,
    g: Ov,
    G: Sv,
    H: Cv,
    I: Cv,
    j: jk,
    L: Rk,
    m: Ik,
    M: Dk,
    p: _,
    q: Mk,
    Q: Lk,
    s: Hk,
    S: Nk,
    u: Pk,
    U: _k,
    V: Ek,
    w: Ck,
    W: Ak,
    x: E,
    X: A,
    y: Ov,
    Y: Sv,
    Z: Tk,
    "%": Bk
  };
  S.x = x(r, S), S.X = x(n, S), S.c = x(t, S), O.x = x(r, O), O.X = x(n, O), O.c = x(t, O);
  function x(z, K) {
    return function(q) {
      var F = [], J = -1, Z = 0, le = z.length, re, ae, de;
      for (q instanceof Date || (q = /* @__PURE__ */ new Date(+q)); ++J < le; )
        z.charCodeAt(J) === 37 && (F.push(z.slice(Z, J)), (ae = wv[re = z.charAt(++J)]) != null ? re = z.charAt(++J) : ae = re === "e" ? " " : "0", (de = K[re]) && (re = de(q, ae)), F.push(re), Z = J + 1);
      return F.push(z.slice(Z, J)), F.join("");
    };
  }
  function $(z, K) {
    return function(q) {
      var F = Xa(1900, void 0, 1), J = C(F, z, q += "", 0), Z, le;
      if (J != q.length) return null;
      if ("Q" in F) return new Date(F.Q);
      if ("s" in F) return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (K && !("Z" in F) && (F.Z = 0), "p" in F && (F.H = F.H % 12 + F.p * 12), F.m === void 0 && (F.m = "q" in F ? F.q : 0), "V" in F) {
        if (F.V < 1 || F.V > 53) return null;
        "w" in F || (F.w = 1), "Z" in F ? (Z = Fc(Xa(F.y, 0, 1)), le = Z.getUTCDay(), Z = le > 4 || le === 0 ? yl.ceil(Z) : yl(Z), Z = gs.offset(Z, (F.V - 1) * 7), F.y = Z.getUTCFullYear(), F.m = Z.getUTCMonth(), F.d = Z.getUTCDate() + (F.w + 6) % 7) : (Z = Hc(Xa(F.y, 0, 1)), le = Z.getDay(), Z = le > 4 || le === 0 ? gl.ceil(Z) : gl(Z), Z = oo.offset(Z, (F.V - 1) * 7), F.y = Z.getFullYear(), F.m = Z.getMonth(), F.d = Z.getDate() + (F.w + 6) % 7);
      } else ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), le = "Z" in F ? Fc(Xa(F.y, 0, 1)).getUTCDay() : Hc(Xa(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + F.W * 7 - (le + 5) % 7 : F.w + F.U * 7 - (le + 6) % 7);
      return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, Fc(F)) : Hc(F);
    };
  }
  function C(z, K, q, F) {
    for (var J = 0, Z = K.length, le = q.length, re, ae; J < Z; ) {
      if (F >= le) return -1;
      if (re = K.charCodeAt(J++), re === 37) {
        if (re = K.charAt(J++), ae = g[re in wv ? K.charAt(J++) : re], !ae || (F = ae(z, q, F)) < 0) return -1;
      } else if (re != q.charCodeAt(F++))
        return -1;
    }
    return F;
  }
  function _(z, K, q) {
    var F = c.exec(K.slice(q));
    return F ? (z.p = u.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function M(z, K, q) {
    var F = p.exec(K.slice(q));
    return F ? (z.w = v.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function P(z, K, q) {
    var F = f.exec(K.slice(q));
    return F ? (z.w = d.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function I(z, K, q) {
    var F = y.exec(K.slice(q));
    return F ? (z.m = w.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function N(z, K, q) {
    var F = m.exec(K.slice(q));
    return F ? (z.m = h.get(F[0].toLowerCase()), q + F[0].length) : -1;
  }
  function j(z, K, q) {
    return C(z, t, K, q);
  }
  function E(z, K, q) {
    return C(z, r, K, q);
  }
  function A(z, K, q) {
    return C(z, n, K, q);
  }
  function D(z) {
    return o[z.getDay()];
  }
  function R(z) {
    return i[z.getDay()];
  }
  function k(z) {
    return s[z.getMonth()];
  }
  function L(z) {
    return l[z.getMonth()];
  }
  function H(z) {
    return a[+(z.getHours() >= 12)];
  }
  function B(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function W(z) {
    return o[z.getUTCDay()];
  }
  function U(z) {
    return i[z.getUTCDay()];
  }
  function G(z) {
    return s[z.getUTCMonth()];
  }
  function Q(z) {
    return l[z.getUTCMonth()];
  }
  function ne(z) {
    return a[+(z.getUTCHours() >= 12)];
  }
  function te(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function(z) {
      var K = x(z += "", S);
      return K.toString = function() {
        return z;
      }, K;
    },
    parse: function(z) {
      var K = $(z += "", !1);
      return K.toString = function() {
        return z;
      }, K;
    },
    utcFormat: function(z) {
      var K = x(z += "", O);
      return K.toString = function() {
        return z;
      }, K;
    },
    utcParse: function(z) {
      var K = $(z += "", !0);
      return K.toString = function() {
        return z;
      }, K;
    }
  };
}
var wv = { "-": "", _: " ", 0: "0" }, $t = /^\s*\d+/, Sk = /^%/, Ok = /[\\^$*+?|[\]().{}]/g;
function ze(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function $k(e) {
  return e.replace(Ok, "\\$&");
}
function Za(e) {
  return new RegExp("^(?:" + e.map($k).join("|") + ")", "i");
}
function Qa(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Ck(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function Pk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function _k(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function Ek(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function Ak(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Sv(e, t, r) {
  var n = $t.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Ov(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function Tk(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function Mk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Ik(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function $v(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function jk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Cv(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Dk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Nk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Rk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function kk(e, t, r) {
  var n = $t.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Bk(e, t, r) {
  var n = Sk.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Lk(e, t, r) {
  var n = $t.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Hk(e, t, r) {
  var n = $t.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Pv(e, t) {
  return ze(e.getDate(), t, 2);
}
function Fk(e, t) {
  return ze(e.getHours(), t, 2);
}
function Wk(e, t) {
  return ze(e.getHours() % 12 || 12, t, 2);
}
function Vk(e, t) {
  return ze(1 + oo.count(Hr(e), e), t, 3);
}
function Fb(e, t) {
  return ze(e.getMilliseconds(), t, 3);
}
function zk(e, t) {
  return Fb(e, t) + "000";
}
function Uk(e, t) {
  return ze(e.getMonth() + 1, t, 2);
}
function Yk(e, t) {
  return ze(e.getMinutes(), t, 2);
}
function qk(e, t) {
  return ze(e.getSeconds(), t, 2);
}
function Gk(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Kk(e, t) {
  return ze(ys.count(Hr(e) - 1, e), t, 2);
}
function Wb(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? aa(e) : aa.ceil(e);
}
function Xk(e, t) {
  return e = Wb(e), ze(aa.count(Hr(e), e) + (Hr(e).getDay() === 4), t, 2);
}
function Zk(e) {
  return e.getDay();
}
function Qk(e, t) {
  return ze(gl.count(Hr(e) - 1, e), t, 2);
}
function Jk(e, t) {
  return ze(e.getFullYear() % 100, t, 2);
}
function eB(e, t) {
  return e = Wb(e), ze(e.getFullYear() % 100, t, 2);
}
function tB(e, t) {
  return ze(e.getFullYear() % 1e4, t, 4);
}
function rB(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? aa(e) : aa.ceil(e), ze(e.getFullYear() % 1e4, t, 4);
}
function nB(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ze(t / 60 | 0, "0", 2) + ze(t % 60, "0", 2);
}
function _v(e, t) {
  return ze(e.getUTCDate(), t, 2);
}
function aB(e, t) {
  return ze(e.getUTCHours(), t, 2);
}
function iB(e, t) {
  return ze(e.getUTCHours() % 12 || 12, t, 2);
}
function oB(e, t) {
  return ze(1 + gs.count(Fr(e), e), t, 3);
}
function Vb(e, t) {
  return ze(e.getUTCMilliseconds(), t, 3);
}
function lB(e, t) {
  return Vb(e, t) + "000";
}
function sB(e, t) {
  return ze(e.getUTCMonth() + 1, t, 2);
}
function cB(e, t) {
  return ze(e.getUTCMinutes(), t, 2);
}
function uB(e, t) {
  return ze(e.getUTCSeconds(), t, 2);
}
function fB(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function dB(e, t) {
  return ze(bs.count(Fr(e) - 1, e), t, 2);
}
function zb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ia(e) : ia.ceil(e);
}
function pB(e, t) {
  return e = zb(e), ze(ia.count(Fr(e), e) + (Fr(e).getUTCDay() === 4), t, 2);
}
function hB(e) {
  return e.getUTCDay();
}
function vB(e, t) {
  return ze(yl.count(Fr(e) - 1, e), t, 2);
}
function mB(e, t) {
  return ze(e.getUTCFullYear() % 100, t, 2);
}
function gB(e, t) {
  return e = zb(e), ze(e.getUTCFullYear() % 100, t, 2);
}
function yB(e, t) {
  return ze(e.getUTCFullYear() % 1e4, t, 4);
}
function bB(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ia(e) : ia.ceil(e), ze(e.getUTCFullYear() % 1e4, t, 4);
}
function xB() {
  return "+0000";
}
function Ev() {
  return "%";
}
function Av(e) {
  return +e;
}
function Tv(e) {
  return Math.floor(+e / 1e3);
}
var Bn, Ub, Yb;
wB({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function wB(e) {
  return Bn = wk(e), Ub = Bn.format, Bn.parse, Yb = Bn.utcFormat, Bn.utcParse, Bn;
}
function SB(e) {
  return new Date(e);
}
function OB(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Vd(e, t, r, n, a, i, o, l, s, c) {
  var u = Ad(), f = u.invert, d = u.domain, p = c(".%L"), v = c(":%S"), m = c("%I:%M"), h = c("%I %p"), y = c("%a %d"), w = c("%b %d"), S = c("%B"), O = c("%Y");
  function g(x) {
    return (s(x) < x ? p : l(x) < x ? v : o(x) < x ? m : i(x) < x ? h : n(x) < x ? a(x) < x ? y : w : r(x) < x ? S : O)(x);
  }
  return u.invert = function(x) {
    return new Date(f(x));
  }, u.domain = function(x) {
    return arguments.length ? d(Array.from(x, OB)) : d().map(SB);
  }, u.ticks = function(x) {
    var $ = d();
    return e($[0], $[$.length - 1], x ?? 10);
  }, u.tickFormat = function(x, $) {
    return $ == null ? g : c($);
  }, u.nice = function(x) {
    var $ = d();
    return (!x || typeof x.range != "function") && (x = t($[0], $[$.length - 1], x ?? 10)), x ? d(Ib($, x)) : u;
  }, u.copy = function() {
    return io(u, Vd(e, t, r, n, a, i, o, l, s, c));
  }, u;
}
function $B() {
  return ar.apply(Vd(bk, xk, Hr, Fd, ys, oo, Ld, kd, xn, Ub).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function CB() {
  return ar.apply(Vd(gk, yk, Fr, Wd, bs, gs, Hd, Bd, xn, Yb).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function xs() {
  var e = 0, t = 1, r, n, a, i, o = kt, l = !1, s;
  function c(f) {
    return f == null || isNaN(f = +f) ? s : o(a === 0 ? 0.5 : (f = (i(f) - r) * a, l ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (l = !!f, c) : l;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function u(f) {
    return function(d) {
      var p, v;
      return arguments.length ? ([p, v] = d, o = f(p, v), c) : [o(0), o(1)];
    };
  }
  return c.range = u(ka), c.rangeRound = u(Ed), c.unknown = function(f) {
    return arguments.length ? (s = f, c) : s;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function an(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function qb() {
  var e = nn(xs()(kt));
  return e.copy = function() {
    return an(e, qb());
  }, Ur.apply(e, arguments);
}
function Gb() {
  var e = Id(xs()).domain([1, 10]);
  return e.copy = function() {
    return an(e, Gb()).base(e.base());
  }, Ur.apply(e, arguments);
}
function Kb() {
  var e = jd(xs());
  return e.copy = function() {
    return an(e, Kb()).constant(e.constant());
  }, Ur.apply(e, arguments);
}
function zd() {
  var e = Dd(xs());
  return e.copy = function() {
    return an(e, zd()).exponent(e.exponent());
  }, Ur.apply(e, arguments);
}
function PB() {
  return zd.apply(null, arguments).exponent(0.5);
}
function Xb() {
  var e = [], t = kt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((no(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(Jr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => dR(e, i / n));
  }, r.copy = function() {
    return Xb(t).domain(e);
  }, Ur.apply(r, arguments);
}
function ws() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, l, s, c = kt, u, f = !1, d;
  function p(m) {
    return isNaN(m = +m) ? d : (m = 0.5 + ((m = +u(m)) - i) * (n * m < n * i ? l : s), c(f ? Math.max(0, Math.min(1, m)) : m));
  }
  p.domain = function(m) {
    return arguments.length ? ([e, t, r] = m, a = u(e = +e), i = u(t = +t), o = u(r = +r), l = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(m) {
    return arguments.length ? (f = !!m, p) : f;
  }, p.interpolator = function(m) {
    return arguments.length ? (c = m, p) : c;
  };
  function v(m) {
    return function(h) {
      var y, w, S;
      return arguments.length ? ([y, w, S] = h, c = BR(m, [y, w, S]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = v(ka), p.rangeRound = v(Ed), p.unknown = function(m) {
    return arguments.length ? (d = m, p) : d;
  }, function(m) {
    return u = m, a = m(e), i = m(t), o = m(r), l = a === i ? 0 : 0.5 / (i - a), s = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function Zb() {
  var e = nn(ws()(kt));
  return e.copy = function() {
    return an(e, Zb());
  }, Ur.apply(e, arguments);
}
function Qb() {
  var e = Id(ws()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return an(e, Qb()).base(e.base());
  }, Ur.apply(e, arguments);
}
function Jb() {
  var e = jd(ws());
  return e.copy = function() {
    return an(e, Jb()).constant(e.constant());
  }, Ur.apply(e, arguments);
}
function Ud() {
  var e = Dd(ws());
  return e.copy = function() {
    return an(e, Ud()).exponent(e.exponent());
  }, Ur.apply(e, arguments);
}
function _B() {
  return Ud.apply(null, arguments).exponent(0.5);
}
const Mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Pi,
  scaleDiverging: Zb,
  scaleDivergingLog: Qb,
  scaleDivergingPow: Ud,
  scaleDivergingSqrt: _B,
  scaleDivergingSymlog: Jb,
  scaleIdentity: Mb,
  scaleImplicit: Hu,
  scaleLinear: vl,
  scaleLog: jb,
  scaleOrdinal: Cd,
  scalePoint: di,
  scalePow: Nd,
  scaleQuantile: Rb,
  scaleQuantize: kb,
  scaleRadial: Nb,
  scaleSequential: qb,
  scaleSequentialLog: Gb,
  scaleSequentialPow: zd,
  scaleSequentialQuantile: Xb,
  scaleSequentialSqrt: PB,
  scaleSequentialSymlog: Kb,
  scaleSqrt: lk,
  scaleSymlog: Db,
  scaleThreshold: Bb,
  scaleTime: $B,
  scaleUtc: CB,
  tickFormat: Tb
}, Symbol.toStringTag, { value: "Module" }));
var EB = _a;
function AB(e, t, r) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var i = e[n], o = t(i);
    if (o != null && (l === void 0 ? o === o && !EB(o) : r(o, l)))
      var l = o, s = i;
  }
  return s;
}
var Ss = AB;
function TB(e, t) {
  return e > t;
}
var e0 = TB, MB = Ss, IB = e0, jB = Ra;
function DB(e) {
  return e && e.length ? MB(e, jB, IB) : void 0;
}
var NB = DB;
const Zr = /* @__PURE__ */ We(NB);
function RB(e, t) {
  return e < t;
}
var t0 = RB, kB = Ss, BB = t0, LB = Ra;
function HB(e) {
  return e && e.length ? kB(e, LB, BB) : void 0;
}
var FB = HB;
const Os = /* @__PURE__ */ We(FB);
var WB = od, VB = rn, zB = sb, UB = zt;
function YB(e, t) {
  var r = UB(e) ? WB : zB;
  return r(e, VB(t));
}
var qB = YB, GB = ob, KB = qB;
function XB(e, t) {
  return GB(KB(e, t), 1);
}
var ZB = XB;
const QB = /* @__PURE__ */ We(ZB);
var JB = xd;
function eL(e, t) {
  return JB(e, t);
}
var tL = eL;
const oa = /* @__PURE__ */ We(tL);
var Ba = 1e9, rL = {
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
}, qd, lt = !0, nr = "[DecimalError] ", $n = nr + "Invalid argument: ", Yd = nr + "Exponent out of range: ", La = Math.floor, mn = Math.pow, nL = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Gt, St = 1e7, it = 7, r0 = 9007199254740991, bl = La(r0 / it), ce = {};
ce.absoluteValue = ce.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
ce.comparedTo = ce.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
ce.decimalPlaces = ce.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * it;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
ce.dividedBy = ce.div = function(e) {
  return Nr(this, new this.constructor(e));
};
ce.dividedToIntegerBy = ce.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ze(Nr(t, new r(e), 0, 1), r.precision);
};
ce.equals = ce.eq = function(e) {
  return !this.cmp(e);
};
ce.exponent = function() {
  return pt(this);
};
ce.greaterThan = ce.gt = function(e) {
  return this.cmp(e) > 0;
};
ce.greaterThanOrEqualTo = ce.gte = function(e) {
  return this.cmp(e) >= 0;
};
ce.isInteger = ce.isint = function() {
  return this.e > this.d.length - 2;
};
ce.isNegative = ce.isneg = function() {
  return this.s < 0;
};
ce.isPositive = ce.ispos = function() {
  return this.s > 0;
};
ce.isZero = function() {
  return this.s === 0;
};
ce.lessThan = ce.lt = function(e) {
  return this.cmp(e) < 0;
};
ce.lessThanOrEqualTo = ce.lte = function(e) {
  return this.cmp(e) < 1;
};
ce.logarithm = ce.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Gt)) throw Error(nr + "NaN");
  if (r.s < 1) throw Error(nr + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Gt) ? new n(0) : (lt = !1, t = Nr(Mi(r, i), Mi(e, i), i), lt = !0, Ze(t, a));
};
ce.minus = ce.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? i0(t, e) : n0(t, (e.s = -e.s, e));
};
ce.modulo = ce.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(nr + "NaN");
  return r.s ? (lt = !1, t = Nr(r, e, 0, 1).times(e), lt = !0, r.minus(t)) : Ze(new n(r), a);
};
ce.naturalExponential = ce.exp = function() {
  return a0(this);
};
ce.naturalLogarithm = ce.ln = function() {
  return Mi(this);
};
ce.negated = ce.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ce.plus = ce.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? n0(t, e) : i0(t, (e.s = -e.s, e));
};
ce.precision = ce.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error($n + e);
  if (t = pt(a) + 1, n = a.d.length - 1, r = n * it + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
ce.squareRoot = ce.sqrt = function() {
  var e, t, r, n, a, i, o, l = this, s = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new s(0);
    throw Error(nr + "NaN");
  }
  for (e = pt(l), lt = !1, a = Math.sqrt(+l), a == 0 || a == 1 / 0 ? (t = br(l.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = La((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(a.toString()), r = s.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(Nr(l, i, o + 2)).times(0.5), br(i.d).slice(0, o) === (t = br(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), a == o && t == "4999") {
        if (Ze(i, r + 1, 0), i.times(i).eq(l)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return lt = !0, Ze(n, r);
};
ce.times = ce.mul = function(e) {
  var t, r, n, a, i, o, l, s, c, u = this, f = u.constructor, d = u.d, p = (e = new f(e)).d;
  if (!u.s || !e.s) return new f(0);
  for (e.s *= u.s, r = u.e + e.e, s = d.length, c = p.length, s < c && (i = d, d = p, p = i, o = s, s = c, c = o), i = [], o = s + c, n = o; n--; ) i.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, a = s + n; a > n; )
      l = i[a] + p[n] * d[a - n - 1] + t, i[a--] = l % St | 0, t = l / St | 0;
    i[a] = (i[a] + t) % St | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, lt ? Ze(e, f.precision) : e;
};
ce.toDecimalPlaces = ce.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Cr(e, 0, Ba), t === void 0 ? t = n.rounding : Cr(t, 0, 8), Ze(r, e + pt(r) + 1, t));
};
ce.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = _n(n, !0) : (Cr(e, 0, Ba), t === void 0 ? t = a.rounding : Cr(t, 0, 8), n = Ze(new a(n), e + 1, t), r = _n(n, !0, e + 1)), r;
};
ce.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? _n(a) : (Cr(e, 0, Ba), t === void 0 ? t = i.rounding : Cr(t, 0, 8), n = Ze(new i(a), e + pt(a) + 1, t), r = _n(n.abs(), !1, e + pt(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
ce.toInteger = ce.toint = function() {
  var e = this, t = e.constructor;
  return Ze(new t(e), pt(e) + 1, t.rounding);
};
ce.toNumber = function() {
  return +this;
};
ce.toPower = ce.pow = function(e) {
  var t, r, n, a, i, o, l = this, s = l.constructor, c = 12, u = +(e = new s(e));
  if (!e.s) return new s(Gt);
  if (l = new s(l), !l.s) {
    if (e.s < 1) throw Error(nr + "Infinity");
    return l;
  }
  if (l.eq(Gt)) return l;
  if (n = s.precision, e.eq(Gt)) return Ze(l, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = l.s, o) {
    if ((r = u < 0 ? -u : u) <= r0) {
      for (a = new s(Gt), t = Math.ceil(n / it + 4), lt = !1; r % 2 && (a = a.times(l), jv(a.d, t)), r = La(r / 2), r !== 0; )
        l = l.times(l), jv(l.d, t);
      return lt = !0, e.s < 0 ? new s(Gt).div(a) : Ze(a, n);
    }
  } else if (i < 0) throw Error(nr + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, lt = !1, a = e.times(Mi(l, n + c)), lt = !0, a = a0(a), a.s = i, a;
};
ce.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = pt(a), n = _n(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Cr(e, 1, Ba), t === void 0 ? t = i.rounding : Cr(t, 0, 8), a = Ze(new i(a), e, t), r = pt(a), n = _n(a, e <= r || r <= i.toExpNeg, e)), n;
};
ce.toSignificantDigits = ce.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Cr(e, 1, Ba), t === void 0 ? t = n.rounding : Cr(t, 0, 8)), Ze(new n(r), e, t);
};
ce.toString = ce.valueOf = ce.val = ce.toJSON = ce[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = pt(e), r = e.constructor;
  return _n(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function n0(e, t) {
  var r, n, a, i, o, l, s, c, u = e.constructor, f = u.precision;
  if (!e.s || !t.s)
    return t.s || (t = new u(e)), lt ? Ze(t, f) : t;
  if (s = e.d, c = t.d, o = e.e, a = t.e, s = s.slice(), i = o - a, i) {
    for (i < 0 ? (n = s, i = -i, l = c.length) : (n = c, a = o, l = s.length), o = Math.ceil(f / it), l = o > l ? o + 1 : l + 1, i > l && (i = l, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (l = s.length, i = c.length, l - i < 0 && (i = l, n = c, c = s, s = n), r = 0; i; )
    r = (s[--i] = s[i] + c[i] + r) / St | 0, s[i] %= St;
  for (r && (s.unshift(r), ++a), l = s.length; s[--l] == 0; ) s.pop();
  return t.d = s, t.e = a, lt ? Ze(t, f) : t;
}
function Cr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error($n + e);
}
function br(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = it - n.length, r && (i += Xr(r)), i += n;
    o = e[t], n = o + "", r = it - n.length, r && (i += Xr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var Nr = /* @__PURE__ */ function() {
  function e(n, a) {
    var i, o = 0, l = n.length;
    for (n = n.slice(); l--; )
      i = n[l] * a + o, n[l] = i % St | 0, o = i / St | 0;
    return o && n.unshift(o), n;
  }
  function t(n, a, i, o) {
    var l, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (l = s = 0; l < i; l++)
        if (n[l] != a[l]) {
          s = n[l] > a[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * St + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var l, s, c, u, f, d, p, v, m, h, y, w, S, O, g, x, $, C, _ = n.constructor, M = n.s == a.s ? 1 : -1, P = n.d, I = a.d;
    if (!n.s) return new _(n);
    if (!a.s) throw Error(nr + "Division by zero");
    for (s = n.e - a.e, $ = I.length, g = P.length, p = new _(M), v = p.d = [], c = 0; I[c] == (P[c] || 0); ) ++c;
    if (I[c] > (P[c] || 0) && --s, i == null ? w = i = _.precision : o ? w = i + (pt(n) - pt(a)) + 1 : w = i, w < 0) return new _(0);
    if (w = w / it + 2 | 0, c = 0, $ == 1)
      for (u = 0, I = I[0], w++; (c < g || u) && w--; c++)
        S = u * St + (P[c] || 0), v[c] = S / I | 0, u = S % I | 0;
    else {
      for (u = St / (I[0] + 1) | 0, u > 1 && (I = e(I, u), P = e(P, u), $ = I.length, g = P.length), O = $, m = P.slice(0, $), h = m.length; h < $; ) m[h++] = 0;
      C = I.slice(), C.unshift(0), x = I[0], I[1] >= St / 2 && ++x;
      do
        u = 0, l = t(I, m, $, h), l < 0 ? (y = m[0], $ != h && (y = y * St + (m[1] || 0)), u = y / x | 0, u > 1 ? (u >= St && (u = St - 1), f = e(I, u), d = f.length, h = m.length, l = t(f, m, d, h), l == 1 && (u--, r(f, $ < d ? C : I, d))) : (u == 0 && (l = u = 1), f = I.slice()), d = f.length, d < h && f.unshift(0), r(m, f, h), l == -1 && (h = m.length, l = t(I, m, $, h), l < 1 && (u++, r(m, $ < h ? C : I, h))), h = m.length) : l === 0 && (u++, m = [0]), v[c++] = u, l && m[0] ? m[h++] = P[O] || 0 : (m = [P[O]], h = 1);
      while ((O++ < g || m[0] !== void 0) && w--);
    }
    return v[0] || v.shift(), p.e = s, Ze(p, o ? i + pt(p) + 1 : i);
  };
}();
function a0(e, t) {
  var r, n, a, i, o, l, s = 0, c = 0, u = e.constructor, f = u.precision;
  if (pt(e) > 16) throw Error(Yd + pt(e));
  if (!e.s) return new u(Gt);
  for (t == null ? (lt = !1, l = f) : l = t, o = new u(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(mn(2, c)) / Math.LN10 * 2 + 5 | 0, l += n, r = a = i = new u(Gt), u.precision = l; ; ) {
    if (a = Ze(a.times(e), l), r = r.times(++s), o = i.plus(Nr(a, r, l)), br(o.d).slice(0, l) === br(i.d).slice(0, l)) {
      for (; c--; ) i = Ze(i.times(i), l);
      return u.precision = f, t == null ? (lt = !0, Ze(i, f)) : i;
    }
    i = o;
  }
}
function pt(e) {
  for (var t = e.e * it, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Wc(e, t, r) {
  if (t > e.LN10.sd())
    throw lt = !0, r && (e.precision = r), Error(nr + "LN10 precision limit exceeded");
  return Ze(new e(e.LN10), t);
}
function Xr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Mi(e, t) {
  var r, n, a, i, o, l, s, c, u, f = 1, d = 10, p = e, v = p.d, m = p.constructor, h = m.precision;
  if (p.s < 1) throw Error(nr + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Gt)) return new m(0);
  if (t == null ? (lt = !1, c = h) : c = t, p.eq(10))
    return t == null && (lt = !0), Wc(m, c);
  if (c += d, m.precision = c, r = br(v), n = r.charAt(0), i = pt(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = br(p.d), n = r.charAt(0), f++;
    i = pt(p), n > 1 ? (p = new m("0." + r), i++) : p = new m(n + "." + r.slice(1));
  } else
    return s = Wc(m, c + 2, h).times(i + ""), p = Mi(new m(n + "." + r.slice(1)), c - d).plus(s), m.precision = h, t == null ? (lt = !0, Ze(p, h)) : p;
  for (l = o = p = Nr(p.minus(Gt), p.plus(Gt), c), u = Ze(p.times(p), c), a = 3; ; ) {
    if (o = Ze(o.times(u), c), s = l.plus(Nr(o, new m(a), c)), br(s.d).slice(0, c) === br(l.d).slice(0, c))
      return l = l.times(2), i !== 0 && (l = l.plus(Wc(m, c + 2, h).times(i + ""))), l = Nr(l, new m(f), c), m.precision = h, t == null ? (lt = !0, Ze(l, h)) : l;
    l = s, a += 2;
  }
}
function Iv(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = La(r / it), e.d = [], n = (r + 1) % it, r < 0 && (n += it), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= it; n < a; ) e.d.push(+t.slice(n, n += it));
      t = t.slice(n), n = it - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), lt && (e.e > bl || e.e < -bl)) throw Error(Yd + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ze(e, t, r) {
  var n, a, i, o, l, s, c, u, f = e.d;
  for (o = 1, i = f[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += it, a = t, c = f[u = 0];
  else {
    if (u = Math.ceil((n + 1) / it), i = f.length, u >= i) return e;
    for (c = i = f[u], o = 1; i >= 10; i /= 10) o++;
    n %= it, a = n - it + o;
  }
  if (r !== void 0 && (i = mn(10, o - a - 1), l = c / i % 10 | 0, s = t < 0 || f[u + 1] !== void 0 || c % i, s = r < 4 ? (l || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / mn(10, o - a) : 0 : f[u - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return s ? (i = pt(e), f.length = 1, t = t - i - 1, f[0] = mn(10, (it - t % it) % it), e.e = La(-t / it) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = u, i = 1, u--) : (f.length = u + 1, i = mn(10, it - n), f[u] = a > 0 ? (c / mn(10, o - a) % mn(10, a) | 0) * i : 0), s)
    for (; ; )
      if (u == 0) {
        (f[0] += i) == St && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[u] += i, f[u] != St) break;
        f[u--] = 0, i = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (lt && (e.e > bl || e.e < -bl))
    throw Error(Yd + pt(e));
  return e;
}
function i0(e, t) {
  var r, n, a, i, o, l, s, c, u, f, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), lt ? Ze(t, p) : t;
  if (s = e.d, f = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (u = o < 0, u ? (r = s, o = -o, l = f.length) : (r = f, n = c, l = s.length), a = Math.max(Math.ceil(p / it), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = s.length, l = f.length, u = a < l, u && (l = a), a = 0; a < l; a++)
      if (s[a] != f[a]) {
        u = s[a] < f[a];
        break;
      }
    o = 0;
  }
  for (u && (r = s, s = f, f = r, t.s = -t.s), l = s.length, a = f.length - l; a > 0; --a) s[l++] = 0;
  for (a = f.length; a > o; ) {
    if (s[--a] < f[a]) {
      for (i = a; i && s[--i] === 0; ) s[i] = St - 1;
      --s[i], s[a] += St;
    }
    s[a] -= f[a];
  }
  for (; s[--l] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, lt ? Ze(t, p) : t) : new d(0);
}
function _n(e, t, r) {
  var n, a = pt(e), i = br(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Xr(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + Xr(-a - 1) + i, r && (n = r - o) > 0 && (i += Xr(n))) : a >= o ? (i += Xr(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + Xr(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += Xr(n))), e.s < 0 ? "-" + i : i;
}
function jv(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function o0(e) {
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
        throw Error($n + i);
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
      return Iv(o, i.toString());
    } else if (typeof i != "string")
      throw Error($n + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, nL.test(i)) Iv(o, i);
    else throw Error($n + i);
  }
  if (a.prototype = ce, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = o0, a.config = a.set = aL, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function aL(e) {
  if (!e || typeof e != "object")
    throw Error(nr + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    Ba,
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
      else throw Error($n + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error($n + r + ": " + n);
  return this;
}
var qd = o0(rL);
Gt = new qd(1);
const qe = qd;
function iL(e) {
  return cL(e) || sL(e) || lL(e) || oL();
}
function oL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lL(e, t) {
  if (e) {
    if (typeof e == "string") return zu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zu(e, t);
  }
}
function sL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function cL(e) {
  if (Array.isArray(e)) return zu(e);
}
function zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var uL = function(t) {
  return t;
}, l0 = {
  "@@functional/placeholder": !0
}, s0 = function(t) {
  return t === l0;
}, Dv = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && s0(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, fL = function e(t, r) {
  return t === 1 ? r : Dv(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(l) {
      return l !== l0;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, Dv(function() {
      for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
        s[c] = arguments[c];
      var u = a.map(function(f) {
        return s0(f) ? s.shift() : f;
      });
      return r.apply(void 0, iL(u).concat(s));
    }));
  });
}, $s = function(t) {
  return fL(t.length, t);
}, Uu = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, dL = $s(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), pL = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return uL;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(l, s) {
      return s(l);
    }, i.apply(void 0, arguments));
  };
}, Yu = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, c0 = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(l, s) {
      return l === r[s];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function hL(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new qe(e).abs().log(10).toNumber()) + 1, t;
}
function vL(e, t, r) {
  for (var n = new qe(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var mL = $s(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), gL = $s(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), yL = $s(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Cs = {
  rangeStep: vL,
  getDigitCount: hL,
  interpolateNumber: mL,
  uninterpolateNumber: gL,
  uninterpolateTruncation: yL
};
function qu(e) {
  return wL(e) || xL(e) || u0(e) || bL();
}
function bL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function wL(e) {
  if (Array.isArray(e)) return Gu(e);
}
function Ii(e, t) {
  return $L(e) || OL(e, t) || u0(e, t) || SL();
}
function SL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u0(e, t) {
  if (e) {
    if (typeof e == "string") return Gu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gu(e, t);
  }
}
function Gu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function OL(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
      for (var o = e[Symbol.iterator](), l; !(n = (l = o.next()).done) && (r.push(l.value), !(t && r.length === t)); n = !0)
        ;
    } catch (s) {
      a = !0, i = s;
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
function $L(e) {
  if (Array.isArray(e)) return e;
}
function f0(e) {
  var t = Ii(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function d0(e, t, r) {
  if (e.lte(0))
    return new qe(0);
  var n = Cs.getDigitCount(e.toNumber()), a = new qe(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, l = new qe(Math.ceil(i.div(o).toNumber())).add(r).mul(o), s = l.mul(a);
  return t ? s : new qe(Math.ceil(s));
}
function CL(e, t, r) {
  var n = 1, a = new qe(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new qe(10).pow(Cs.getDigitCount(e) - 1), a = new qe(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new qe(Math.floor(e)));
  } else e === 0 ? a = new qe(Math.floor((t - 1) / 2)) : r || (a = new qe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), l = pL(dL(function(s) {
    return a.add(new qe(s - o).mul(n)).toNumber();
  }), Uu);
  return l(0, t);
}
function p0(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new qe(0),
      tickMin: new qe(0),
      tickMax: new qe(0)
    };
  var i = d0(new qe(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new qe(0) : (o = new qe(e).add(t).div(2), o = o.sub(new qe(o).mod(i)));
  var l = Math.ceil(o.sub(e).div(i).toNumber()), s = Math.ceil(new qe(t).sub(o).div(i).toNumber()), c = l + s + 1;
  return c > r ? p0(e, t, r, n, a + 1) : (c < r && (s = t > 0 ? s + (r - c) : s, l = t > 0 ? l : l + (r - c)), {
    step: i,
    tickMin: o.sub(new qe(l).mul(i)),
    tickMax: o.add(new qe(s).mul(i))
  });
}
function PL(e) {
  var t = Ii(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), l = f0([r, n]), s = Ii(l, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0) {
    var f = u === 1 / 0 ? [c].concat(qu(Uu(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(qu(Uu(0, a - 1).map(function() {
      return -1 / 0;
    })), [u]);
    return r > n ? Yu(f) : f;
  }
  if (c === u)
    return CL(c, a, i);
  var d = p0(c, u, o, i), p = d.step, v = d.tickMin, m = d.tickMax, h = Cs.rangeStep(v, m.add(new qe(0.1).mul(p)), p);
  return r > n ? Yu(h) : h;
}
function _L(e, t) {
  var r = Ii(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = f0([n, a]), l = Ii(o, 2), s = l[0], c = l[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (s === c)
    return [s];
  var u = Math.max(t, 2), f = d0(new qe(c).sub(s).div(u - 1), i, 0), d = [].concat(qu(Cs.rangeStep(new qe(s), new qe(c).sub(new qe(0.99).mul(f)), f)), [c]);
  return n > a ? Yu(d) : d;
}
var EL = c0(PL), AL = c0(_L), TL = Oe.env.NODE_ENV === "production", Vc = "Invariant failed";
function Ft(e, t) {
  if (TL)
    throw new Error(Vc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Vc, ": ").concat(r) : Vc;
  throw new Error(n);
}
var ML = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function la(e) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e);
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
function IL(e, t) {
  return RL(e) || NL(e, t) || DL(e, t) || jL();
}
function jL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DL(e, t) {
  if (e) {
    if (typeof e == "string") return Nv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nv(e, t);
  }
}
function Nv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function NL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function RL(e) {
  if (Array.isArray(e)) return e;
}
function kL(e, t) {
  if (e == null) return {};
  var r = BL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function BL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function LL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function HL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, m0(n.key), n);
  }
}
function FL(e, t, r) {
  return t && HL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function WL(e, t, r) {
  return t = wl(t), VL(e, h0() ? Reflect.construct(t, r || [], wl(e).constructor) : t.apply(e, r));
}
function VL(e, t) {
  if (t && (la(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zL(e);
}
function zL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function h0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (h0 = function() {
    return !!e;
  })();
}
function wl(e) {
  return wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wl(e);
}
function UL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ku(e, t);
}
function Ku(e, t) {
  return Ku = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ku(e, t);
}
function v0(e, t, r) {
  return t = m0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m0(e) {
  var t = YL(e, "string");
  return la(t) == "symbol" ? t : t + "";
}
function YL(e, t) {
  if (la(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ps = /* @__PURE__ */ function(e) {
  function t() {
    return LL(this, t), WL(this, t, arguments);
  }
  return UL(t, e), FL(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, l = n.dataKey, s = n.data, c = n.dataPointFormatter, u = n.xAxis, f = n.yAxis, d = kL(n, ML), p = me(d, !1);
      this.props.direction === "x" && u.type !== "number" && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'ErrorBar requires Axis type property to be "number".') : Ft());
      var v = s.map(function(m) {
        var h = c(m, l), y = h.x, w = h.y, S = h.value, O = h.errorVal;
        if (!O)
          return null;
        var g = [], x, $;
        if (Array.isArray(O)) {
          var C = IL(O, 2);
          x = C[0], $ = C[1];
        } else
          x = $ = O;
        if (i === "vertical") {
          var _ = u.scale, M = w + a, P = M + o, I = M - o, N = _(S - x), j = _(S + $);
          g.push({
            x1: j,
            y1: P,
            x2: j,
            y2: I
          }), g.push({
            x1: N,
            y1: M,
            x2: j,
            y2: M
          }), g.push({
            x1: N,
            y1: P,
            x2: N,
            y2: I
          });
        } else if (i === "horizontal") {
          var E = f.scale, A = y + a, D = A - o, R = A + o, k = E(S - x), L = E(S + $);
          g.push({
            x1: D,
            y1: L,
            x2: R,
            y2: L
          }), g.push({
            x1: A,
            y1: k,
            x2: A,
            y2: L
          }), g.push({
            x1: D,
            y1: k,
            x2: R,
            y2: k
          });
        }
        return /* @__PURE__ */ T.createElement(Fe, xl({
          className: "recharts-errorBar",
          key: "bar-".concat(g.map(function(H) {
            return "".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2);
          }))
        }, p), g.map(function(H) {
          return /* @__PURE__ */ T.createElement("line", xl({}, H, {
            key: "line-".concat(H.x1, "-").concat(H.x2, "-").concat(H.y1, "-").concat(H.y2)
          }));
        }));
      });
      return /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-errorBars"
      }, v);
    }
  }]);
}(T.Component);
v0(Ps, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
v0(Ps, "displayName", "ErrorBar");
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function Rv(e, t) {
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
    t % 2 ? Rv(Object(r), !0).forEach(function(n) {
      qL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qL(e, t, r) {
  return t = GL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GL(e) {
  var t = KL(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function KL(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var g0 = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = qt(r, qn);
  if (!o)
    return null;
  var l = qn.defaultProps, s = l !== void 0 ? un(un({}, l), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : i === "children" ? c = (n || []).reduce(function(u, f) {
    var d = f.item, p = f.props, v = p.sectors || p.data || [];
    return u.concat(v.map(function(m) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: m.name,
        color: m.fill,
        payload: m
      };
    }));
  }, []) : c = (n || []).map(function(u) {
    var f = u.item, d = f.type.defaultProps, p = d !== void 0 ? un(un({}, d), f.props) : {}, v = p.dataKey, m = p.name, h = p.legendType, y = p.hide;
    return {
      inactive: y,
      dataKey: v,
      type: s.iconType || h || "square",
      color: Gd(f),
      value: m || v,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), un(un(un({}, s), qn.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function Di(e) {
  "@babel/helpers - typeof";
  return Di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Di(e);
}
function kv(e) {
  return JL(e) || QL(e) || ZL(e) || XL();
}
function XL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZL(e, t) {
  if (e) {
    if (typeof e == "string") return Xu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xu(e, t);
  }
}
function QL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function JL(e) {
  if (Array.isArray(e)) return Xu(e);
}
function Xu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Bv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bv(Object(r), !0).forEach(function(n) {
      Kn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kn(e, t, r) {
  return t = eH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eH(e) {
  var t = tH(e, "string");
  return Di(t) == "symbol" ? t : t + "";
}
function tH(e, t) {
  if (Di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mt(e, t, r) {
  return Ae(e) || Ae(t) ? r : gt(t) ? Xt(e, t, r) : Pe(t) ? t(e) : r;
}
function pi(e, t, r, n) {
  var a = QB(e, function(l) {
    return mt(l, t);
  });
  if (r === "number") {
    var i = a.filter(function(l) {
      return ee(l) || parseFloat(l);
    });
    return i.length ? [Os(i), Zr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(l) {
    return !Ae(l);
  }) : a;
  return o.map(function(l) {
    return gt(l) || l instanceof Date ? l : "";
  });
}
var rH = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, l = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (l <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var s = i.range, c = 0; c < l; c++) {
      var u = c > 0 ? a[c - 1].coordinate : a[l - 1].coordinate, f = a[c].coordinate, d = c >= l - 1 ? a[0].coordinate : a[c + 1].coordinate, p = void 0;
      if (Nt(f - u) !== Nt(d - f)) {
        var v = [];
        if (Nt(d - f) === Nt(s[1] - s[0])) {
          p = d;
          var m = f + s[1] - s[0];
          v[0] = Math.min(m, (m + u) / 2), v[1] = Math.max(m, (m + u) / 2);
        } else {
          p = u;
          var h = d + s[1] - s[0];
          v[0] = Math.min(f, (h + f) / 2), v[1] = Math.max(f, (h + f) / 2);
        }
        var y = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
        if (t > y[0] && t <= y[1] || t >= v[0] && t <= v[1]) {
          o = a[c].index;
          break;
        }
      } else {
        var w = Math.min(u, d), S = Math.max(u, d);
        if (t > (w + f) / 2 && t <= (S + f) / 2) {
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
}, Gd = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? st(st({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, l = i.fill, s;
  switch (a) {
    case "Line":
      s = o;
      break;
    case "Area":
    case "Radar":
      s = o && o !== "none" ? o : l;
      break;
    default:
      s = l;
      break;
  }
  return s;
}, nH = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, l = Object.keys(i), s = 0, c = l.length; s < c; s++)
    for (var u = i[l[s]].stackGroups, f = Object.keys(u), d = 0, p = f.length; d < p; d++) {
      var v = u[f[d]], m = v.items, h = v.cateAxisId, y = m.filter(function($) {
        return jr($.type).indexOf("Bar") >= 0;
      });
      if (y && y.length) {
        var w = y[0].type.defaultProps, S = w !== void 0 ? st(st({}, w), y[0].props) : y[0].props, O = S.barSize, g = S[h];
        o[g] || (o[g] = []);
        var x = Ae(O) ? r : O;
        o[g].push({
          item: y[0],
          stackList: y.slice(1),
          barSize: Ae(x) ? void 0 : Rt(x, n, 0)
        });
      }
    }
  return o;
}, aH = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, l = t.maxBarSize, s = o.length;
  if (s < 1) return null;
  var c = Rt(r, a, 0, !0), u, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, p = a / s, v = o.reduce(function(O, g) {
      return O + g.barSize || 0;
    }, 0);
    v += (s - 1) * c, v >= a && (v -= (s - 1) * c, c = 0), v >= a && p > 0 && (d = !0, p *= 0.9, v = s * p);
    var m = (a - v) / 2 >> 0, h = {
      offset: m - c,
      size: 0
    };
    u = o.reduce(function(O, g) {
      var x = {
        item: g.item,
        position: {
          offset: h.offset + h.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? p : g.barSize
        }
      }, $ = [].concat(kv(O), [x]);
      return h = $[$.length - 1].position, g.stackList && g.stackList.length && g.stackList.forEach(function(C) {
        $.push({
          item: C,
          position: h
        });
      }), $;
    }, f);
  } else {
    var y = Rt(n, a, 0, !0);
    a - 2 * y - (s - 1) * c <= 0 && (c = 0);
    var w = (a - 2 * y - (s - 1) * c) / s;
    w > 1 && (w >>= 0);
    var S = l === +l ? Math.min(w, l) : w;
    u = o.reduce(function(O, g, x) {
      var $ = [].concat(kv(O), [{
        item: g.item,
        position: {
          offset: y + (w + c) * x + (w - S) / 2,
          size: S
        }
      }]);
      return g.stackList && g.stackList.length && g.stackList.forEach(function(C) {
        $.push({
          item: C,
          position: $[$.length - 1].position
        });
      }), $;
    }, f);
  }
  return u;
}, iH = function(t, r, n, a) {
  var i = n.children, o = n.width, l = n.margin, s = o - (l.left || 0) - (l.right || 0), c = g0({
    children: i,
    legendWidth: s
  });
  if (c) {
    var u = a || {}, f = u.width, d = u.height, p = c.align, v = c.verticalAlign, m = c.layout;
    if ((m === "vertical" || m === "horizontal" && v === "middle") && p !== "center" && ee(t[p]))
      return st(st({}, t), {}, Kn({}, p, t[p] + (f || 0)));
    if ((m === "horizontal" || m === "vertical" && p === "center") && v !== "middle" && ee(t[v]))
      return st(st({}, t), {}, Kn({}, v, t[v] + (d || 0)));
  }
  return t;
}, oH = function(t, r, n) {
  return Ae(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, y0 = function(t, r, n, a, i) {
  var o = r.props.children, l = rr(o, Ps).filter(function(c) {
    return oH(a, i, c.props.direction);
  });
  if (l && l.length) {
    var s = l.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, u) {
      var f = mt(u, n);
      if (Ae(f)) return c;
      var d = Array.isArray(f) ? [Os(f), Zr(f)] : [f, f], p = s.reduce(function(v, m) {
        var h = mt(u, m, 0), y = d[0] - Math.abs(Array.isArray(h) ? h[0] : h), w = d[1] + Math.abs(Array.isArray(h) ? h[1] : h);
        return [Math.min(y, v[0]), Math.max(w, v[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, lH = function(t, r, n, a, i) {
  var o = r.map(function(l) {
    return y0(t, l, n, i, a);
  }).filter(function(l) {
    return !Ae(l);
  });
  return o && o.length ? o.reduce(function(l, s) {
    return [Math.min(l[0], s[0]), Math.max(l[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, b0 = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && y0(t, s, c, a) || pi(t, c, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(s, c) {
        return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var l = {};
  return o.reduce(function(s, c) {
    for (var u = 0, f = c.length; u < f; u++)
      l[c[u]] || (l[c[u]] = !0, s.push(c[u]));
    return s;
  }, []);
}, x0 = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, wn = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, l = t.range, s = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, c = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / s : 0;
  if (c = t.axisType === "angleAxis" && (l == null ? void 0 : l.length) >= 2 ? Nt(l[0] - l[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var u = (t.ticks || t.niceTicks).map(function(f) {
      var d = i ? i.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + c,
        value: f,
        offset: c
      };
    });
    return u.filter(function(f) {
      return !Ia(f.coordinate);
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
}, zc = /* @__PURE__ */ new WeakMap(), To = function(t, r) {
  if (typeof r != "function")
    return t;
  zc.has(t) || zc.set(t, /* @__PURE__ */ new WeakMap());
  var n = zc.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, w0 = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, l = t.axisType;
  if (a === "auto")
    return o === "radial" && l === "radiusAxis" ? {
      scale: Pi(),
      realScaleType: "band"
    } : o === "radial" && l === "angleAxis" ? {
      scale: vl(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: di(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: Pi(),
      realScaleType: "band"
    } : {
      scale: vl(),
      realScaleType: "linear"
    };
  if (ro(a)) {
    var s = "scale".concat(ss(a));
    return {
      scale: (Mv[s] || di)(),
      realScaleType: Mv[s] ? s : "point"
    };
  }
  return Pe(a) ? {
    scale: a
  } : {
    scale: di(),
    realScaleType: "point"
  };
}, Lv = 1e-4, S0 = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - Lv, o = Math.max(a[0], a[1]) + Lv, l = t(r[0]), s = t(r[n - 1]);
    (l < i || l > o || s < i || s > o) && t.domain([r[0], r[n - 1]]);
  }
}, sH = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, cH = function(t, r) {
  if (!r || r.length !== 2 || !ee(r[0]) || !ee(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!ee(t[0]) || t[0] < n) && (i[0] = n), (!ee(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, uH = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, l = 0; l < r; ++l) {
        var s = Ia(t[l][n][1]) ? t[l][n][0] : t[l][n][1];
        s >= 0 ? (t[l][n][0] = i, t[l][n][1] = i + s, i = t[l][n][1]) : (t[l][n][0] = o, t[l][n][1] = o + s, o = t[l][n][1]);
      }
}, fH = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var l = Ia(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        l >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + l, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, dH = {
  sign: uH,
  // @ts-expect-error definitelytyped types are incorrect
  expand: T_,
  // @ts-expect-error definitelytyped types are incorrect
  none: Qn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: M_,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: I_,
  positive: fH
}, pH = function(t, r, n) {
  var a = r.map(function(l) {
    return l.props.dataKey;
  }), i = dH[n], o = A_().keys(a).value(function(l, s) {
    return +mt(l, s, 0);
  }).order(wu).offset(i);
  return o(t);
}, hH = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var l = o ? r.reverse() : r, s = {}, c = l.reduce(function(f, d) {
    var p, v = (p = d.type) !== null && p !== void 0 && p.defaultProps ? st(st({}, d.type.defaultProps), d.props) : d.props, m = v.stackId, h = v.hide;
    if (h)
      return f;
    var y = v[n], w = f[y] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (gt(m)) {
      var S = w.stackGroups[m] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      S.items.push(d), w.hasStack = !0, w.stackGroups[m] = S;
    } else
      w.stackGroups[ja("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return st(st({}, f), {}, Kn({}, y, w));
  }, s), u = {};
  return Object.keys(c).reduce(function(f, d) {
    var p = c[d];
    if (p.hasStack) {
      var v = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(m, h) {
        var y = p.stackGroups[h];
        return st(st({}, m), {}, Kn({}, h, {
          numericAxisId: n,
          cateAxisId: a,
          items: y.items,
          stackedData: pH(t, y.items, i)
        }));
      }, v);
    }
    return st(st({}, f), {}, Kn({}, d, p));
  }, u);
}, O0 = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, l = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var u = EL(c, i, l);
    return t.domain([Os(u), Zr(u)]), {
      niceTicks: u
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = AL(f, i, l);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Hv(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Ae(a[t.dataKey])) {
      var l = Go(r, "value", a[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var s = mt(a, Ae(o) ? t.dataKey : o);
  return Ae(s) ? null : t.scale(s);
}
var Fv = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, l = t.index;
  if (r.type === "category")
    return n[l] ? n[l].coordinate + a : null;
  var s = mt(o, r.dataKey, r.domain[l]);
  return Ae(s) ? null : r.scale(s) - i / 2 + a;
}, vH = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, mH = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? st(st({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (gt(i)) {
    var o = r[i];
    if (o) {
      var l = o.items.indexOf(t);
      return l >= 0 ? o.stackedData[l] : null;
    }
  }
  return null;
}, gH = function(t) {
  return t.reduce(function(r, n) {
    return [Os(n.concat([r[0]]).filter(ee)), Zr(n.concat([r[1]]).filter(ee))];
  }, [1 / 0, -1 / 0]);
}, $0 = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], l = o.stackedData, s = l.reduce(function(c, u) {
      var f = gH(u.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], a[0]), Math.max(s[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, Wv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Vv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Zu = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (ee(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Wv.test(t[0])) {
    var i = +Wv.exec(t[0])[1];
    a[0] = r[0] - i;
  } else Pe(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (ee(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Vv.test(t[1])) {
    var o = +Vv.exec(t[1])[1];
    a[1] = r[1] + o;
  } else Pe(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, Sl = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = Sd(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, l = 1, s = i.length; l < s; l++) {
      var c = i[l], u = i[l - 1];
      o = Math.min((c.coordinate || 0) - (u.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, zv = function(t, r, n) {
  return !t || !t.length || oa(t, Xt(n, "type.defaultProps.domain")) ? r : t;
}, C0 = function(t, r) {
  var n = t.type.defaultProps ? st(st({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, l = n.formatter, s = n.tooltipType, c = n.chartType, u = n.hide;
  return st(st({}, me(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: l,
    name: i || a,
    color: Gd(t),
    value: mt(r, a),
    type: s,
    payload: r,
    chartType: c,
    hide: u
  });
};
function Ni(e) {
  "@babel/helpers - typeof";
  return Ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ni(e);
}
function Uv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uv(Object(r), !0).forEach(function(n) {
      P0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P0(e, t, r) {
  return t = yH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yH(e) {
  var t = bH(e, "string");
  return Ni(t) == "symbol" ? t : t + "";
}
function bH(e, t) {
  if (Ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xH(e, t) {
  return $H(e) || OH(e, t) || SH(e, t) || wH();
}
function wH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SH(e, t) {
  if (e) {
    if (typeof e == "string") return Yv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yv(e, t);
  }
}
function Yv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function $H(e) {
  if (Array.isArray(e)) return e;
}
var Ol = Math.PI / 180, CH = function(t) {
  return t * 180 / Math.PI;
}, rt = function(t, r, n, a) {
  return {
    x: t + Math.cos(-Ol * a) * n,
    y: r + Math.sin(-Ol * a) * n
  };
}, _0 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, PH = function(t, r, n, a, i) {
  var o = t.width, l = t.height, s = t.startAngle, c = t.endAngle, u = Rt(t.cx, o, o / 2), f = Rt(t.cy, l, l / 2), d = _0(o, l, n), p = Rt(t.innerRadius, d, 0), v = Rt(t.outerRadius, d, d * 0.8), m = Object.keys(r);
  return m.reduce(function(h, y) {
    var w = r[y], S = w.domain, O = w.reversed, g;
    if (Ae(w.range))
      a === "angleAxis" ? g = [s, c] : a === "radiusAxis" && (g = [p, v]), O && (g = [g[1], g[0]]);
    else {
      g = w.range;
      var x = g, $ = xH(x, 2);
      s = $[0], c = $[1];
    }
    var C = w0(w, i), _ = C.realScaleType, M = C.scale;
    M.domain(S).range(g), S0(M);
    var P = O0(M, Tr(Tr({}, w), {}, {
      realScaleType: _
    })), I = Tr(Tr(Tr({}, w), P), {}, {
      range: g,
      radius: v,
      realScaleType: _,
      scale: M,
      cx: u,
      cy: f,
      innerRadius: p,
      outerRadius: v,
      startAngle: s,
      endAngle: c
    });
    return Tr(Tr({}, h), {}, P0({}, y, I));
  }, {});
}, _H = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, EH = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, l = _H({
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
  var s = (n - i) / l, c = Math.acos(s);
  return a > o && (c = 2 * Math.PI - c), {
    radius: l,
    angle: CH(c),
    angleInRadian: c
  };
}, AH = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, TH = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), l = Math.min(i, o);
  return t + l * 360;
}, qv = function(t, r) {
  var n = t.x, a = t.y, i = EH({
    x: n,
    y: a
  }, r), o = i.radius, l = i.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var u = AH(r), f = u.startAngle, d = u.endAngle, p = l, v;
  if (f <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < f; )
      p += 360;
    v = p >= f && p <= d;
  } else {
    for (; p > f; )
      p -= 360;
    for (; p < d; )
      p += 360;
    v = p >= d && p <= f;
  }
  return v ? Tr(Tr({}, r), {}, {
    radius: o,
    angle: TH(p, r)
  }) : null;
}, E0 = function(t) {
  return !/* @__PURE__ */ b.isValidElement(t) && !Pe(t) && typeof t != "boolean" ? t.className : "";
};
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
var MH = ["offset"];
function IH(e) {
  return RH(e) || NH(e) || DH(e) || jH();
}
function jH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DH(e, t) {
  if (e) {
    if (typeof e == "string") return Qu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qu(e, t);
  }
}
function NH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RH(e) {
  if (Array.isArray(e)) return Qu(e);
}
function Qu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kH(e, t) {
  if (e == null) return {};
  var r = BH(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function BH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Gv(e, t) {
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
    t % 2 ? Gv(Object(r), !0).forEach(function(n) {
      LH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LH(e, t, r) {
  return t = HH(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HH(e) {
  var t = FH(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}
function FH(e, t) {
  if (Ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ki.apply(this, arguments);
}
var WH = function(t) {
  var r = t.value, n = t.formatter, a = Ae(t.children) ? r : t.children;
  return Pe(n) ? n(a) : a;
}, VH = function(t, r) {
  var n = Nt(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, zH = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, l = t.className, s = i, c = s.cx, u = s.cy, f = s.innerRadius, d = s.outerRadius, p = s.startAngle, v = s.endAngle, m = s.clockWise, h = (f + d) / 2, y = VH(p, v), w = y >= 0 ? 1 : -1, S, O;
  a === "insideStart" ? (S = p + w * o, O = m) : a === "insideEnd" ? (S = v - w * o, O = !m) : a === "end" && (S = v + w * o, O = m), O = y <= 0 ? O : !O;
  var g = rt(c, u, h, S), x = rt(c, u, h, S + (O ? 1 : -1) * 359), $ = "M".concat(g.x, ",").concat(g.y, `
    A`).concat(h, ",").concat(h, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), C = Ae(t.id) ? ja("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ T.createElement("text", ki({}, n, {
    dominantBaseline: "central",
    className: De("recharts-radial-bar-label", l)
  }), /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("path", {
    id: C,
    d: $
  })), /* @__PURE__ */ T.createElement("textPath", {
    xlinkHref: "#".concat(C)
  }, r));
}, UH = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, l = i.cy, s = i.innerRadius, c = i.outerRadius, u = i.startAngle, f = i.endAngle, d = (u + f) / 2;
  if (a === "outside") {
    var p = rt(o, l, c + n, d), v = p.x, m = p.y;
    return {
      x: v,
      y: m,
      textAnchor: v >= o ? "start" : "end",
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
  var h = (s + c) / 2, y = rt(o, l, h, d), w = y.x, S = y.y;
  return {
    x: w,
    y: S,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, YH = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, l = o.x, s = o.y, c = o.width, u = o.height, f = u >= 0 ? 1 : -1, d = f * a, p = f > 0 ? "end" : "start", v = f > 0 ? "start" : "end", m = c >= 0 ? 1 : -1, h = m * a, y = m > 0 ? "end" : "start", w = m > 0 ? "start" : "end";
  if (i === "top") {
    var S = {
      x: l + c / 2,
      y: s - f * a,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return vt(vt({}, S), n ? {
      height: Math.max(s - n.y, 0),
      width: c
    } : {});
  }
  if (i === "bottom") {
    var O = {
      x: l + c / 2,
      y: s + u + d,
      textAnchor: "middle",
      verticalAnchor: v
    };
    return vt(vt({}, O), n ? {
      height: Math.max(n.y + n.height - (s + u), 0),
      width: c
    } : {});
  }
  if (i === "left") {
    var g = {
      x: l - h,
      y: s + u / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return vt(vt({}, g), n ? {
      width: Math.max(g.x - n.x, 0),
      height: u
    } : {});
  }
  if (i === "right") {
    var x = {
      x: l + c + h,
      y: s + u / 2,
      textAnchor: w,
      verticalAnchor: "middle"
    };
    return vt(vt({}, x), n ? {
      width: Math.max(n.x + n.width - x.x, 0),
      height: u
    } : {});
  }
  var $ = n ? {
    width: c,
    height: u
  } : {};
  return i === "insideLeft" ? vt({
    x: l + h,
    y: s + u / 2,
    textAnchor: w,
    verticalAnchor: "middle"
  }, $) : i === "insideRight" ? vt({
    x: l + c - h,
    y: s + u / 2,
    textAnchor: y,
    verticalAnchor: "middle"
  }, $) : i === "insideTop" ? vt({
    x: l + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: v
  }, $) : i === "insideBottom" ? vt({
    x: l + c / 2,
    y: s + u - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, $) : i === "insideTopLeft" ? vt({
    x: l + h,
    y: s + d,
    textAnchor: w,
    verticalAnchor: v
  }, $) : i === "insideTopRight" ? vt({
    x: l + c - h,
    y: s + d,
    textAnchor: y,
    verticalAnchor: v
  }, $) : i === "insideBottomLeft" ? vt({
    x: l + h,
    y: s + u - d,
    textAnchor: w,
    verticalAnchor: p
  }, $) : i === "insideBottomRight" ? vt({
    x: l + c - h,
    y: s + u - d,
    textAnchor: y,
    verticalAnchor: p
  }, $) : Ea(i) && (ee(i.x) || yn(i.x)) && (ee(i.y) || yn(i.y)) ? vt({
    x: l + Rt(i.x, c),
    y: s + Rt(i.y, u),
    textAnchor: "end",
    verticalAnchor: "end"
  }, $) : vt({
    x: l + c / 2,
    y: s + u / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, $);
}, qH = function(t) {
  return "cx" in t && ee(t.cx);
};
function Ot(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = kH(e, MH), a = vt({
    offset: r
  }, n), i = a.viewBox, o = a.position, l = a.value, s = a.children, c = a.content, u = a.className, f = u === void 0 ? "" : u, d = a.textBreakAll;
  if (!i || Ae(l) && Ae(s) && !/* @__PURE__ */ b.isValidElement(c) && !Pe(c))
    return null;
  if (/* @__PURE__ */ b.isValidElement(c))
    return /* @__PURE__ */ b.cloneElement(c, a);
  var p;
  if (Pe(c)) {
    if (p = /* @__PURE__ */ b.createElement(c, a), /* @__PURE__ */ b.isValidElement(p))
      return p;
  } else
    p = WH(a);
  var v = qH(i), m = me(a, !0);
  if (v && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return zH(a, p, m);
  var h = v ? UH(a) : YH(a);
  return /* @__PURE__ */ T.createElement(Pn, ki({
    className: De("recharts-label", f)
  }, m, h, {
    breakAll: d
  }), p);
}
Ot.displayName = "Label";
var A0 = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, l = t.r, s = t.radius, c = t.innerRadius, u = t.outerRadius, f = t.x, d = t.y, p = t.top, v = t.left, m = t.width, h = t.height, y = t.clockWise, w = t.labelViewBox;
  if (w)
    return w;
  if (ee(m) && ee(h)) {
    if (ee(f) && ee(d))
      return {
        x: f,
        y: d,
        width: m,
        height: h
      };
    if (ee(p) && ee(v))
      return {
        x: p,
        y: v,
        width: m,
        height: h
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
    outerRadius: u || s || l || 0,
    clockWise: y
  } : t.viewBox ? t.viewBox : {};
}, GH = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ T.createElement(Ot, {
    key: "label-implicit",
    viewBox: r
  }) : gt(t) ? /* @__PURE__ */ T.createElement(Ot, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ b.isValidElement(t) ? t.type === Ot ? /* @__PURE__ */ b.cloneElement(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ T.createElement(Ot, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Pe(t) ? /* @__PURE__ */ T.createElement(Ot, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Ea(t) ? /* @__PURE__ */ T.createElement(Ot, ki({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, KH = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = A0(t), o = rr(a, Ot).map(function(s, c) {
    return /* @__PURE__ */ b.cloneElement(s, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var l = GH(t.label, r || i);
  return [l].concat(IH(o));
};
Ot.parseViewBox = A0;
Ot.renderCallByParent = KH;
function XH(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var ZH = XH;
const QH = /* @__PURE__ */ We(ZH);
function Bi(e) {
  "@babel/helpers - typeof";
  return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bi(e);
}
var JH = ["valueAccessor"], eF = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function tF(e) {
  return iF(e) || aF(e) || nF(e) || rF();
}
function rF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nF(e, t) {
  if (e) {
    if (typeof e == "string") return Ju(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ju(e, t);
  }
}
function aF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function iF(e) {
  if (Array.isArray(e)) return Ju(e);
}
function Ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $l() {
  return $l = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $l.apply(this, arguments);
}
function Kv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kv(Object(r), !0).forEach(function(n) {
      oF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oF(e, t, r) {
  return t = lF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lF(e) {
  var t = sF(e, "string");
  return Bi(t) == "symbol" ? t : t + "";
}
function sF(e, t) {
  if (Bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zv(e, t) {
  if (e == null) return {};
  var r = cF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var uF = function(t) {
  return Array.isArray(t.value) ? QH(t.value) : t.value;
};
function Rr(e) {
  var t = e.valueAccessor, r = t === void 0 ? uF : t, n = Zv(e, JH), a = n.data, i = n.dataKey, o = n.clockWise, l = n.id, s = n.textBreakAll, c = Zv(n, eF);
  return !a || !a.length ? null : /* @__PURE__ */ T.createElement(Fe, {
    className: "recharts-label-list"
  }, a.map(function(u, f) {
    var d = Ae(i) ? r(u, f) : mt(u && u.payload, i), p = Ae(l) ? {} : {
      id: "".concat(l, "-").concat(f)
    };
    return /* @__PURE__ */ T.createElement(Ot, $l({}, me(u, !0), c, p, {
      parentViewBox: u.parentViewBox,
      value: d,
      textBreakAll: s,
      viewBox: Ot.parseViewBox(Ae(o) ? u : Xv(Xv({}, u), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Rr.displayName = "LabelList";
function fF(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ T.createElement(Rr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ T.isValidElement(e) || Pe(e) ? /* @__PURE__ */ T.createElement(Rr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : Ea(e) ? /* @__PURE__ */ T.createElement(Rr, $l({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function dF(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = rr(n, Rr).map(function(o, l) {
    return /* @__PURE__ */ b.cloneElement(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(l)
    });
  });
  if (!r)
    return a;
  var i = fF(e.label, t);
  return [i].concat(tF(a));
}
Rr.renderCallByParent = dF;
function Li(e) {
  "@babel/helpers - typeof";
  return Li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Li(e);
}
function ef() {
  return ef = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ef.apply(this, arguments);
}
function Qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qv(Object(r), !0).forEach(function(n) {
      pF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pF(e, t, r) {
  return t = hF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hF(e) {
  var t = vF(e, "string");
  return Li(t) == "symbol" ? t : t + "";
}
function vF(e, t) {
  if (Li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mF = function(t, r) {
  var n = Nt(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, Mo = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, l = t.isExternal, s = t.cornerRadius, c = t.cornerIsExternal, u = s * (l ? 1 : -1) + a, f = Math.asin(s / u) / Ol, d = c ? i : i + o * f, p = rt(r, n, u, d), v = rt(r, n, a, d), m = c ? i - o * f : i, h = rt(r, n, u * Math.cos(f * Ol), m);
  return {
    center: p,
    circleTangency: v,
    lineTangency: h,
    theta: f
  };
}, T0 = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, l = t.endAngle, s = mF(o, l), c = o + s, u = rt(r, n, i, o), f = rt(r, n, i, c), d = "M ".concat(u.x, ",").concat(u.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(o > c), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (a > 0) {
    var p = rt(r, n, a, o), v = rt(r, n, a, c);
    d += "L ".concat(v.x, ",").concat(v.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(o <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, gF = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, l = t.forceCornerRadius, s = t.cornerIsExternal, c = t.startAngle, u = t.endAngle, f = Nt(u - c), d = Mo({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: s
  }), p = d.circleTangency, v = d.lineTangency, m = d.theta, h = Mo({
    cx: r,
    cy: n,
    radius: i,
    angle: u,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: s
  }), y = h.circleTangency, w = h.lineTangency, S = h.theta, O = s ? Math.abs(c - u) : Math.abs(c - u) - m - S;
  if (O < 0)
    return l ? "M ".concat(v.x, ",").concat(v.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : T0({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: c,
      endAngle: u
    });
  var g = "M ".concat(v.x, ",").concat(v.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(f < 0), ",").concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (a > 0) {
    var x = Mo({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), $ = x.circleTangency, C = x.lineTangency, _ = x.theta, M = Mo({
      cx: r,
      cy: n,
      radius: a,
      angle: u,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), P = M.circleTangency, I = M.lineTangency, N = M.theta, j = s ? Math.abs(c - u) : Math.abs(c - u) - _ - N;
    if (j < 0 && o === 0)
      return "".concat(g, "L").concat(r, ",").concat(n, "Z");
    g += "L".concat(I.x, ",").concat(I.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(j > 180), ",").concat(+(f > 0), ",").concat($.x, ",").concat($.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(C.x, ",").concat(C.y, "Z");
  } else
    g += "L".concat(r, ",").concat(n, "Z");
  return g;
}, yF = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, M0 = function(t) {
  var r = Jv(Jv({}, yF), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, l = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, u = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || u === f)
    return null;
  var p = De("recharts-sector", d), v = o - i, m = Rt(l, v, 0, !0), h;
  return m > 0 && Math.abs(u - f) < 360 ? h = gF({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(m, v / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: u,
    endAngle: f
  }) : h = T0({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: u,
    endAngle: f
  }), /* @__PURE__ */ T.createElement("path", ef({}, me(r, !0), {
    className: p,
    d: h,
    role: "img"
  }));
};
function Hi(e) {
  "@babel/helpers - typeof";
  return Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hi(e);
}
function tf() {
  return tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tf.apply(this, arguments);
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
      bF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bF(e, t, r) {
  return t = xF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xF(e) {
  var t = wF(e, "string");
  return Hi(t) == "symbol" ? t : t + "";
}
function wF(e, t) {
  if (Hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rm = {
  curveBasisClosed: y_,
  curveBasisOpen: b_,
  curveBasis: g_,
  curveBumpX: n_,
  curveBumpY: a_,
  curveLinearClosed: x_,
  curveLinear: us,
  curveMonotoneX: w_,
  curveMonotoneY: S_,
  curveNatural: O_,
  curveStep: $_,
  curveStepAfter: P_,
  curveStepBefore: C_
}, Io = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Ja = function(t) {
  return t.x;
}, ei = function(t) {
  return t.y;
}, SF = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(ss(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? rm["".concat(n).concat(r === "vertical" ? "Y" : "X")] : rm[n] || us;
}, OF = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, l = t.layout, s = t.connectNulls, c = s === void 0 ? !1 : s, u = SF(n, l), f = c ? i.filter(function(m) {
    return Io(m);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(m) {
      return Io(m);
    }) : o, v = f.map(function(m, h) {
      return tm(tm({}, m), {}, {
        base: p[h]
      });
    });
    return l === "vertical" ? d = So().y(ei).x1(Ja).x0(function(m) {
      return m.base.x;
    }) : d = So().x(Ja).y1(ei).y0(function(m) {
      return m.base.y;
    }), d.defined(Io).curve(u), d(v);
  }
  return l === "vertical" && ee(o) ? d = So().y(ei).x1(Ja).x0(o) : ee(o) ? d = So().x(Ja).y1(ei).y0(o) : d = Py().x(Ja).y(ei), d.defined(Io).curve(u), d(f);
}, Xn = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? OF(t) : a;
  return /* @__PURE__ */ T.createElement("path", tf({}, me(t, !1), Ko(t), {
    className: De("recharts-curve", r),
    d: o,
    ref: i
  }));
}, $F = Object.getOwnPropertyNames, CF = Object.getOwnPropertySymbols, PF = Object.prototype.hasOwnProperty;
function nm(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function jo(e) {
  return function(r, n, a) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, a);
    var i = a.cache, o = i.get(r), l = i.get(n);
    if (o && l)
      return o === n && l === r;
    i.set(r, n), i.set(n, r);
    var s = e(r, n, a);
    return i.delete(r), i.delete(n), s;
  };
}
function am(e) {
  return $F(e).concat(CF(e));
}
var I0 = Object.hasOwn || function(e, t) {
  return PF.call(e, t);
};
function Ha(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var j0 = "_owner", im = Object.getOwnPropertyDescriptor, om = Object.keys;
function _F(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function EF(e, t) {
  return Ha(e.getTime(), t.getTime());
}
function lm(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, a = e.entries(), i = 0, o, l; (o = a.next()) && !o.done; ) {
    for (var s = t.entries(), c = !1, u = 0; (l = s.next()) && !l.done; ) {
      var f = o.value, d = f[0], p = f[1], v = l.value, m = v[0], h = v[1];
      !c && !n[u] && (c = r.equals(d, m, i, u, e, t, r) && r.equals(p, h, d, m, e, t, r)) && (n[u] = !0), u++;
    }
    if (!c)
      return !1;
    i++;
  }
  return !0;
}
function AF(e, t, r) {
  var n = om(e), a = n.length;
  if (om(t).length !== a)
    return !1;
  for (var i; a-- > 0; )
    if (i = n[a], i === j0 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !I0(t, i) || !r.equals(e[i], t[i], i, i, e, t, r))
      return !1;
  return !0;
}
function ti(e, t, r) {
  var n = am(e), a = n.length;
  if (am(t).length !== a)
    return !1;
  for (var i, o, l; a-- > 0; )
    if (i = n[a], i === j0 && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !I0(t, i) || !r.equals(e[i], t[i], i, i, e, t, r) || (o = im(e, i), l = im(t, i), (o || l) && (!o || !l || o.configurable !== l.configurable || o.enumerable !== l.enumerable || o.writable !== l.writable)))
      return !1;
  return !0;
}
function TF(e, t) {
  return Ha(e.valueOf(), t.valueOf());
}
function MF(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function sm(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, a = e.values(), i, o; (i = a.next()) && !i.done; ) {
    for (var l = t.values(), s = !1, c = 0; (o = l.next()) && !o.done; )
      !s && !n[c] && (s = r.equals(i.value, o.value, i.value, o.value, e, t, r)) && (n[c] = !0), c++;
    if (!s)
      return !1;
  }
  return !0;
}
function IF(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var jF = "[object Arguments]", DF = "[object Boolean]", NF = "[object Date]", RF = "[object Map]", kF = "[object Number]", BF = "[object Object]", LF = "[object RegExp]", HF = "[object Set]", FF = "[object String]", WF = Array.isArray, cm = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, um = Object.assign, VF = Object.prototype.toString.call.bind(Object.prototype.toString);
function zF(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, a = e.areObjectsEqual, i = e.arePrimitiveWrappersEqual, o = e.areRegExpsEqual, l = e.areSetsEqual, s = e.areTypedArraysEqual;
  return function(u, f, d) {
    if (u === f)
      return !0;
    if (u == null || f == null || typeof u != "object" || typeof f != "object")
      return u !== u && f !== f;
    var p = u.constructor;
    if (p !== f.constructor)
      return !1;
    if (p === Object)
      return a(u, f, d);
    if (WF(u))
      return t(u, f, d);
    if (cm != null && cm(u))
      return s(u, f, d);
    if (p === Date)
      return r(u, f, d);
    if (p === RegExp)
      return o(u, f, d);
    if (p === Map)
      return n(u, f, d);
    if (p === Set)
      return l(u, f, d);
    var v = VF(u);
    return v === NF ? r(u, f, d) : v === LF ? o(u, f, d) : v === RF ? n(u, f, d) : v === HF ? l(u, f, d) : v === BF ? typeof u.then != "function" && typeof f.then != "function" && a(u, f, d) : v === jF ? a(u, f, d) : v === DF || v === kF || v === FF ? i(u, f, d) : !1;
  };
}
function UF(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? ti : _F,
    areDatesEqual: EF,
    areMapsEqual: n ? nm(lm, ti) : lm,
    areObjectsEqual: n ? ti : AF,
    arePrimitiveWrappersEqual: TF,
    areRegExpsEqual: MF,
    areSetsEqual: n ? nm(sm, ti) : sm,
    areTypedArraysEqual: n ? ti : IF
  };
  if (r && (a = um({}, a, r(a))), t) {
    var i = jo(a.areArraysEqual), o = jo(a.areMapsEqual), l = jo(a.areObjectsEqual), s = jo(a.areSetsEqual);
    a = um({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: l,
      areSetsEqual: s
    });
  }
  return a;
}
function YF(e) {
  return function(t, r, n, a, i, o, l) {
    return e(t, r, l);
  };
}
function qF(e) {
  var t = e.circular, r = e.comparator, n = e.createState, a = e.equals, i = e.strict;
  if (n)
    return function(s, c) {
      var u = n(), f = u.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, p = u.meta;
      return r(s, c, {
        cache: d,
        equals: a,
        meta: p,
        strict: i
      });
    };
  if (t)
    return function(s, c) {
      return r(s, c, {
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
  return function(s, c) {
    return r(s, c, o);
  };
}
var GF = on();
on({ strict: !0 });
on({ circular: !0 });
on({
  circular: !0,
  strict: !0
});
on({
  createInternalComparator: function() {
    return Ha;
  }
});
on({
  strict: !0,
  createInternalComparator: function() {
    return Ha;
  }
});
on({
  circular: !0,
  createInternalComparator: function() {
    return Ha;
  }
});
on({
  circular: !0,
  createInternalComparator: function() {
    return Ha;
  },
  strict: !0
});
function on(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, l = UF(e), s = zF(l), c = n ? n(s) : YF(s);
  return qF({ circular: r, comparator: s, createState: a, equals: c, strict: o });
}
function KF(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function fm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : KF(a);
  };
  requestAnimationFrame(n);
}
function rf(e) {
  "@babel/helpers - typeof";
  return rf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rf(e);
}
function XF(e) {
  return e3(e) || JF(e) || QF(e) || ZF();
}
function ZF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QF(e, t) {
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
function JF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function e3(e) {
  if (Array.isArray(e)) return e;
}
function t3() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, l = XF(o), s = l[0], c = l.slice(1);
        if (typeof s == "number") {
          fm(a.bind(null, c), s);
          return;
        }
        a(s), fm(a.bind(null, c));
        return;
      }
      rf(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
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
function Fi(e) {
  "@babel/helpers - typeof";
  return Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fi(e);
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
function hm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pm(Object(r), !0).forEach(function(n) {
      D0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function D0(e, t, r) {
  return t = r3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function r3(e) {
  var t = n3(e, "string");
  return Fi(t) === "symbol" ? t : String(t);
}
function n3(e, t) {
  if (Fi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var a3 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, i3 = function(t) {
  return t;
}, o3 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, hi = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return hm(hm({}, n), {}, D0({}, a, t(a, r[a])));
  }, {});
}, vm = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(o3(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, l3 = Oe.env.NODE_ENV !== "production", Cl = function(t, r, n, a, i, o, l, s) {
  if (l3 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, l, s], u = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[u++];
      }));
    }
};
function s3(e, t) {
  return f3(e) || u3(e, t) || N0(e, t) || c3();
}
function c3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function f3(e) {
  if (Array.isArray(e)) return e;
}
function d3(e) {
  return v3(e) || h3(e) || N0(e) || p3();
}
function p3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N0(e, t) {
  if (e) {
    if (typeof e == "string") return nf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nf(e, t);
  }
}
function h3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function v3(e) {
  if (Array.isArray(e)) return nf(e);
}
function nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Pl = 1e-4, R0 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, k0 = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, mm = function(t, r) {
  return function(n) {
    var a = R0(t, r);
    return k0(a, n);
  };
}, m3 = function(t, r) {
  return function(n) {
    var a = R0(t, r), i = [].concat(d3(a.map(function(o, l) {
      return o * l;
    }).slice(1)), [0]);
    return k0(i, n);
  };
}, gm = function() {
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
        var s = r[0].split("(");
        if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
          var c = s[1].split(")")[0].split(",").map(function(h) {
            return parseFloat(h);
          }), u = s3(c, 4);
          a = u[0], i = u[1], o = u[2], l = u[3];
        } else
          Cl(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Cl([a, o, i, l].every(function(h) {
    return typeof h == "number" && h >= 0 && h <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = mm(a, o), d = mm(i, l), p = m3(a, o), v = function(y) {
    return y > 1 ? 1 : y < 0 ? 0 : y;
  }, m = function(y) {
    for (var w = y > 1 ? 1 : y, S = w, O = 0; O < 8; ++O) {
      var g = f(S) - w, x = p(S);
      if (Math.abs(g - w) < Pl || x < Pl)
        return d(S);
      S = v(S - g / x);
    }
    return d(S);
  };
  return m.isStepper = !1, m;
}, g3 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, l = o === void 0 ? 17 : o, s = function(u, f, d) {
    var p = -(u - f) * n, v = d * i, m = d + (p - v) * l / 1e3, h = d * l / 1e3 + u;
    return Math.abs(h - f) < Pl && Math.abs(m) < Pl ? [f, 0] : [h, m];
  };
  return s.isStepper = !0, s.dt = l, s;
}, y3 = function() {
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
        return gm(a);
      case "spring":
        return g3();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return gm(a);
        Cl(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Cl(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Wi(e) {
  "@babel/helpers - typeof";
  return Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wi(e);
}
function ym(e) {
  return w3(e) || x3(e) || B0(e) || b3();
}
function b3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function w3(e) {
  if (Array.isArray(e)) return of(e);
}
function bm(e, t) {
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
    t % 2 ? bm(Object(r), !0).forEach(function(n) {
      af(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function af(e, t, r) {
  return t = S3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S3(e) {
  var t = O3(e, "string");
  return Wi(t) === "symbol" ? t : String(t);
}
function O3(e, t) {
  if (Wi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $3(e, t) {
  return _3(e) || P3(e, t) || B0(e, t) || C3();
}
function C3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B0(e, t) {
  if (e) {
    if (typeof e == "string") return of(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return of(e, t);
  }
}
function of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function P3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function _3(e) {
  if (Array.isArray(e)) return e;
}
var _l = function(t, r, n) {
  return t + (r - t) * n;
}, lf = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, E3 = function e(t, r, n) {
  var a = hi(function(i, o) {
    if (lf(o)) {
      var l = t(o.from, o.to, o.velocity), s = $3(l, 2), c = s[0], u = s[1];
      return Pt(Pt({}, o), {}, {
        from: c,
        velocity: u
      });
    }
    return o;
  }, r);
  return n < 1 ? hi(function(i, o) {
    return lf(o) ? Pt(Pt({}, o), {}, {
      velocity: _l(o.velocity, a[i].velocity, n),
      from: _l(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const A3 = function(e, t, r, n, a) {
  var i = a3(e, t), o = i.reduce(function(h, y) {
    return Pt(Pt({}, h), {}, af({}, y, [e[y], t[y]]));
  }, {}), l = i.reduce(function(h, y) {
    return Pt(Pt({}, h), {}, af({}, y, {
      from: e[y],
      velocity: 0,
      to: t[y]
    }));
  }, {}), s = -1, c, u, f = function() {
    return null;
  }, d = function() {
    return hi(function(y, w) {
      return w.from;
    }, l);
  }, p = function() {
    return !Object.values(l).filter(lf).length;
  }, v = function(y) {
    c || (c = y);
    var w = y - c, S = w / r.dt;
    l = E3(r, l, S), a(Pt(Pt(Pt({}, e), t), d())), c = y, p() || (s = requestAnimationFrame(f));
  }, m = function(y) {
    u || (u = y);
    var w = (y - u) / n, S = hi(function(g, x) {
      return _l.apply(void 0, ym(x).concat([r(w)]));
    }, o);
    if (a(Pt(Pt(Pt({}, e), t), S)), w < 1)
      s = requestAnimationFrame(f);
    else {
      var O = hi(function(g, x) {
        return _l.apply(void 0, ym(x).concat([r(1)]));
      }, o);
      a(Pt(Pt(Pt({}, e), t), O));
    }
  };
  return f = r.isStepper ? v : m, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(s);
    };
  };
};
function sa(e) {
  "@babel/helpers - typeof";
  return sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sa(e);
}
var T3 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function M3(e, t) {
  if (e == null) return {};
  var r = I3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function I3(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Uc(e) {
  return R3(e) || N3(e) || D3(e) || j3();
}
function j3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D3(e, t) {
  if (e) {
    if (typeof e == "string") return sf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sf(e, t);
  }
}
function N3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function R3(e) {
  if (Array.isArray(e)) return sf(e);
}
function sf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xm(Object(r), !0).forEach(function(n) {
      li(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function li(e, t, r) {
  return t = L0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function B3(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, L0(n.key), n);
  }
}
function L3(e, t, r) {
  return t && B3(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function L0(e) {
  var t = H3(e, "string");
  return sa(t) === "symbol" ? t : String(t);
}
function H3(e, t) {
  if (sa(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sa(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cf(e, t);
}
function cf(e, t) {
  return cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, cf(e, t);
}
function W3(e) {
  var t = V3();
  return function() {
    var n = El(e), a;
    if (t) {
      var i = El(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return uf(this, a);
  };
}
function uf(e, t) {
  if (t && (sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ff(e);
}
function ff(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function V3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function El(e) {
  return El = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, El(e);
}
var Pr = /* @__PURE__ */ function(e) {
  F3(r, e);
  var t = W3(r);
  function r(n, a) {
    var i;
    k3(this, r), i = t.call(this, n, a);
    var o = i.props, l = o.isActive, s = o.attributeName, c = o.from, u = o.to, f = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(ff(i)), i.changeStyle = i.changeStyle.bind(ff(i)), !l || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: u
      }), uf(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, uf(i);
      i.state = {
        style: s ? li({}, s, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return L3(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, l = i.canBegin, s = i.attributeName, c = i.shouldReAnimate, u = i.to, f = i.from, d = this.state.style;
      if (l) {
        if (!o) {
          var p = {
            style: s ? li({}, s, u) : u
          };
          this.state && d && (s && d[s] !== u || !s && d !== u) && this.setState(p);
          return;
        }
        if (!(GF(a.to, u) && a.canBegin && a.isActive)) {
          var v = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var m = v || c ? f : a.to;
          if (this.state && d) {
            var h = {
              style: s ? li({}, s, m) : m
            };
            (s && d[s] !== m || !s && d !== m) && this.setState(h);
          }
          this.runAnimation(or(or({}, this.props), {}, {
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
      var i = this, o = a.from, l = a.to, s = a.duration, c = a.easing, u = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = A3(o, l, y3(c), s, this.changeStyle), v = function() {
        i.stopJSAnimation = p();
      };
      this.manager.start([d, u, v, s, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, l = a.begin, s = a.onAnimationStart, c = o[0], u = c.style, f = c.duration, d = f === void 0 ? 0 : f, p = function(m, h, y) {
        if (y === 0)
          return m;
        var w = h.duration, S = h.easing, O = S === void 0 ? "ease" : S, g = h.style, x = h.properties, $ = h.onAnimationEnd, C = y > 0 ? o[y - 1] : h, _ = x || Object.keys(g);
        if (typeof O == "function" || O === "spring")
          return [].concat(Uc(m), [i.runJSAnimation.bind(i, {
            from: C.style,
            to: g,
            duration: w,
            easing: O
          }), w]);
        var M = vm(_, w, O), P = or(or(or({}, C.style), g), {}, {
          transition: M
        });
        return [].concat(Uc(m), [P, w, $]).filter(i3);
      };
      return this.manager.start([s].concat(Uc(o.reduce(p, [u, Math.max(d, l)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = t3());
      var i = a.begin, o = a.duration, l = a.attributeName, s = a.to, c = a.easing, u = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, p = a.children, v = this.manager;
      if (this.unSubscribe = v.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var m = l ? li({}, l, s) : s, h = vm(Object.keys(m), o, c);
      v.start([u, i, or(or({}, m), {}, {
        transition: h
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
      var s = M3(a, T3), c = b.Children.count(i), u = this.state.style;
      if (typeof i == "function")
        return i(u);
      if (!l || c === 0 || o <= 0)
        return i;
      var f = function(p) {
        var v = p.props, m = v.style, h = m === void 0 ? {} : m, y = v.className, w = /* @__PURE__ */ b.cloneElement(p, or(or({}, s), {}, {
          style: or(or({}, h), u),
          className: y
        }));
        return w;
      };
      return c === 1 ? f(b.Children.only(i)) : /* @__PURE__ */ T.createElement("div", null, b.Children.map(i, function(d) {
        return f(d);
      }));
    }
  }]), r;
}(b.PureComponent);
Pr.displayName = "Animate";
Pr.defaultProps = {
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
Pr.propTypes = {
  from: Me.oneOfType([Me.object, Me.string]),
  to: Me.oneOfType([Me.object, Me.string]),
  attributeName: Me.string,
  // animation duration
  duration: Me.number,
  begin: Me.number,
  easing: Me.oneOfType([Me.string, Me.func]),
  steps: Me.arrayOf(Me.shape({
    duration: Me.number.isRequired,
    style: Me.object.isRequired,
    easing: Me.oneOfType([Me.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Me.func]),
    // transition css properties(dash case), optional
    properties: Me.arrayOf("string"),
    onAnimationEnd: Me.func
  })),
  children: Me.oneOfType([Me.node, Me.func]),
  isActive: Me.bool,
  canBegin: Me.bool,
  onAnimationEnd: Me.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: Me.bool,
  onAnimationStart: Me.func,
  onAnimationReStart: Me.func
};
Me.object, Me.object, Me.object, Me.element;
Me.object, Me.object, Me.object, Me.oneOfType([Me.array, Me.element]), Me.any;
function Vi(e) {
  "@babel/helpers - typeof";
  return Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vi(e);
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
function z3(e, t) {
  return G3(e) || q3(e, t) || Y3(e, t) || U3();
}
function U3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y3(e, t) {
  if (e) {
    if (typeof e == "string") return wm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wm(e, t);
  }
}
function wm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function q3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function G3(e) {
  if (Array.isArray(e)) return e;
}
function Sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Om(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sm(Object(r), !0).forEach(function(n) {
      K3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function K3(e, t, r) {
  return t = X3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X3(e) {
  var t = Z3(e, "string");
  return Vi(t) == "symbol" ? t : t + "";
}
function Z3(e, t) {
  if (Vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $m = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), l = a >= 0 ? 1 : -1, s = n >= 0 ? 1 : -1, c = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, u;
  if (o > 0 && i instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      f[d] = i[d] > o ? o : i[d];
    u = "M".concat(t, ",").concat(r + l * f[0]), f[0] > 0 && (u += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(c, ",").concat(t + s * f[0], ",").concat(r)), u += "L ".concat(t + n - s * f[1], ",").concat(r), f[1] > 0 && (u += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + l * f[1])), u += "L ".concat(t + n, ",").concat(r + a - l * f[2]), f[2] > 0 && (u += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(c, `,
        `).concat(t + n - s * f[2], ",").concat(r + a)), u += "L ".concat(t + s * f[3], ",").concat(r + a), f[3] > 0 && (u += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + a - l * f[3])), u += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var v = Math.min(o, i);
    u = "M ".concat(t, ",").concat(r + l * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + s * v, ",").concat(r, `
            L `).concat(t + n - s * v, ",").concat(r, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + l * v, `
            L `).concat(t + n, ",").concat(r + a - l * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + n - s * v, ",").concat(r + a, `
            L `).concat(t + s * v, ",").concat(r + a, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t, ",").concat(r + a - l * v, " Z");
  } else
    u = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return u;
}, Q3 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, l = r.width, s = r.height;
  if (Math.abs(l) > 0 && Math.abs(s) > 0) {
    var c = Math.min(i, i + l), u = Math.max(i, i + l), f = Math.min(o, o + s), d = Math.max(o, o + s);
    return n >= c && n <= u && a >= f && a <= d;
  }
  return !1;
}, J3 = {
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
}, Kd = function(t) {
  var r = Om(Om({}, J3), t), n = b.useRef(), a = b.useState(-1), i = z3(a, 2), o = i[0], l = i[1];
  b.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var O = n.current.getTotalLength();
        O && l(O);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, u = r.width, f = r.height, d = r.radius, p = r.className, v = r.animationEasing, m = r.animationDuration, h = r.animationBegin, y = r.isAnimationActive, w = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || u !== +u || f !== +f || u === 0 || f === 0)
    return null;
  var S = De("recharts-rectangle", p);
  return w ? /* @__PURE__ */ T.createElement(Pr, {
    canBegin: o > 0,
    from: {
      width: u,
      height: f,
      x: s,
      y: c
    },
    to: {
      width: u,
      height: f,
      x: s,
      y: c
    },
    duration: m,
    animationEasing: v,
    isActive: w
  }, function(O) {
    var g = O.width, x = O.height, $ = O.x, C = O.y;
    return /* @__PURE__ */ T.createElement(Pr, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: h,
      duration: m,
      isActive: y,
      easing: v
    }, /* @__PURE__ */ T.createElement("path", Al({}, me(r, !0), {
      className: S,
      d: $m($, C, g, x, d),
      ref: n
    })));
  }) : /* @__PURE__ */ T.createElement("path", Al({}, me(r, !0), {
    className: S,
    d: $m(s, c, u, f, d)
  }));
}, eW = ["points", "className", "baseLinePoints", "connectNulls"];
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
function tW(e, t) {
  if (e == null) return {};
  var r = rW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Cm(e) {
  return oW(e) || iW(e) || aW(e) || nW();
}
function nW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aW(e, t) {
  if (e) {
    if (typeof e == "string") return df(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return df(e, t);
  }
}
function iW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function oW(e) {
  if (Array.isArray(e)) return df(e);
}
function df(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Pm = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, lW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Pm(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Pm(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, vi = function(t, r) {
  var n = lW(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(Cm(i), Cm(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, l, s) {
      return "".concat(o).concat(s === 0 ? "M" : "L").concat(l.x, ",").concat(l.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, sW = function(t, r, n) {
  var a = vi(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(vi(r.reverse(), n).slice(1));
}, cW = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = tW(t, eW);
  if (!r || !r.length)
    return null;
  var l = De("recharts-polygon", n);
  if (a && a.length) {
    var s = o.stroke && o.stroke !== "none", c = sW(r, a, i);
    return /* @__PURE__ */ T.createElement("g", {
      className: l
    }, /* @__PURE__ */ T.createElement("path", Wn({}, me(o, !0), {
      fill: c.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: c
    })), s ? /* @__PURE__ */ T.createElement("path", Wn({}, me(o, !0), {
      fill: "none",
      d: vi(r, i)
    })) : null, s ? /* @__PURE__ */ T.createElement("path", Wn({}, me(o, !0), {
      fill: "none",
      d: vi(a, i)
    })) : null);
  }
  var u = vi(r, i);
  return /* @__PURE__ */ T.createElement("path", Wn({}, me(o, !0), {
    fill: u.slice(-1) === "Z" ? o.fill : "none",
    className: l,
    d: u
  }));
};
function pf() {
  return pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pf.apply(this, arguments);
}
var _s = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = De("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ T.createElement("circle", pf({}, me(t, !1), Ko(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function zi(e) {
  "@babel/helpers - typeof";
  return zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zi(e);
}
var uW = ["x", "y", "top", "left", "width", "height", "className"];
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
function fW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), !0).forEach(function(n) {
      dW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dW(e, t, r) {
  return t = pW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pW(e) {
  var t = hW(e, "string");
  return zi(t) == "symbol" ? t : t + "";
}
function hW(e, t) {
  if (zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vW(e, t) {
  if (e == null) return {};
  var r = mW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function mW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var gW = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, yW = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, l = o === void 0 ? 0 : o, s = t.left, c = s === void 0 ? 0 : s, u = t.width, f = u === void 0 ? 0 : u, d = t.height, p = d === void 0 ? 0 : d, v = t.className, m = vW(t, uW), h = fW({
    x: n,
    y: i,
    top: l,
    left: c,
    width: f,
    height: p
  }, m);
  return !ee(n) || !ee(i) || !ee(f) || !ee(p) || !ee(l) || !ee(c) ? null : /* @__PURE__ */ T.createElement("path", hf({}, me(h, !0), {
    className: De("recharts-cross", v),
    d: gW(n, i, f, p, l, c)
  }));
}, bW = Ss, xW = e0, wW = rn;
function SW(e, t) {
  return e && e.length ? bW(e, wW(t), xW) : void 0;
}
var OW = SW;
const $W = /* @__PURE__ */ We(OW);
var CW = Ss, PW = rn, _W = t0;
function EW(e, t) {
  return e && e.length ? CW(e, PW(t), _W) : void 0;
}
var AW = EW;
const TW = /* @__PURE__ */ We(AW);
var MW = ["cx", "cy", "angle", "ticks", "axisLine"], IW = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function ca(e) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e);
}
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mi.apply(this, arguments);
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
function fn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Em(Object(r), !0).forEach(function(n) {
      Es(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Am(e, t) {
  if (e == null) return {};
  var r = jW(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function jW(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function DW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, F0(n.key), n);
  }
}
function NW(e, t, r) {
  return t && Tm(e.prototype, t), r && Tm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function RW(e, t, r) {
  return t = Tl(t), kW(e, H0() ? Reflect.construct(t, r || [], Tl(e).constructor) : t.apply(e, r));
}
function kW(e, t) {
  if (t && (ca(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return BW(e);
}
function BW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function H0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (H0 = function() {
    return !!e;
  })();
}
function Tl(e) {
  return Tl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Tl(e);
}
function LW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vf(e, t);
}
function vf(e, t) {
  return vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, vf(e, t);
}
function Es(e, t, r) {
  return t = F0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F0(e) {
  var t = HW(e, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function HW(e, t) {
  if (ca(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var As = /* @__PURE__ */ function(e) {
  function t() {
    return DW(this, t), RW(this, t, arguments);
  }
  return LW(t, e), NW(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var a = n.coordinate, i = this.props, o = i.angle, l = i.cx, s = i.cy;
        return rt(l, s, a, o);
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, l = n.ticks, s = $W(l, function(u) {
        return u.coordinate || 0;
      }), c = TW(l, function(u) {
        return u.coordinate || 0;
      });
      return {
        cx: a,
        cy: i,
        startAngle: o,
        endAngle: o,
        innerRadius: c.coordinate || 0,
        outerRadius: s.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, l = n.ticks, s = n.axisLine, c = Am(n, MW), u = l.reduce(function(v, m) {
        return [Math.min(v[0], m.coordinate), Math.max(v[1], m.coordinate)];
      }, [1 / 0, -1 / 0]), f = rt(a, i, u[0], o), d = rt(a, i, u[1], o), p = fn(fn(fn({}, me(c, !1)), {}, {
        fill: "none"
      }, me(s, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ T.createElement("line", mi({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, l = a.angle, s = a.tickFormatter, c = a.stroke, u = Am(a, IW), f = this.getTickTextAnchor(), d = me(u, !1), p = me(o, !1), v = i.map(function(m, h) {
        var y = n.getTickValueCoord(m), w = fn(fn(fn(fn({
          textAnchor: f,
          transform: "rotate(".concat(90 - l, ", ").concat(y.x, ", ").concat(y.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: c
        }, p), {}, {
          index: h
        }, y), {}, {
          payload: m
        });
        return /* @__PURE__ */ T.createElement(Fe, mi({
          className: De("recharts-polar-radius-axis-tick", E0(o)),
          key: "tick-".concat(m.coordinate)
        }, Cn(n.props, m, h)), t.renderTickItem(o, w, s ? s(m.value, h) : m.value));
      });
      return /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-polar-radius-axis-ticks"
      }, v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.axisLine, o = n.tick;
      return !a || !a.length ? null : /* @__PURE__ */ T.createElement(Fe, {
        className: De("recharts-polar-radius-axis", this.props.className)
      }, i && this.renderAxisLine(), o && this.renderTicks(), Ot.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : Pe(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(Pn, mi({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
}(b.PureComponent);
Es(As, "displayName", "PolarRadiusAxis");
Es(As, "axisType", "radiusAxis");
Es(As, "defaultProps", {
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
function gn() {
  return gn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gn.apply(this, arguments);
}
function Mm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mm(Object(r), !0).forEach(function(n) {
      Ts(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Im(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V0(n.key), n);
  }
}
function WW(e, t, r) {
  return t && Im(e.prototype, t), r && Im(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function VW(e, t, r) {
  return t = Ml(t), zW(e, W0() ? Reflect.construct(t, r || [], Ml(e).constructor) : t.apply(e, r));
}
function zW(e, t) {
  if (t && (ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UW(e);
}
function UW(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function W0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (W0 = function() {
    return !!e;
  })();
}
function Ml(e) {
  return Ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ml(e);
}
function YW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mf(e, t);
}
function mf(e, t) {
  return mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, mf(e, t);
}
function Ts(e, t, r) {
  return t = V0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V0(e) {
  var t = qW(e, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function qW(e, t) {
  if (ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var GW = Math.PI / 180, jm = 1e-5, Ms = /* @__PURE__ */ function(e) {
  function t() {
    return FW(this, t), VW(this, t, arguments);
  }
  return YW(t, e), WW(t, [{
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
        var a = this.props, i = a.cx, o = a.cy, l = a.radius, s = a.orientation, c = a.tickSize, u = c || 8, f = rt(i, o, l, n.coordinate), d = rt(i, o, l + (s === "inner" ? -1 : 1) * u, n.coordinate);
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * GW), o;
      return i > jm ? o = a === "outer" ? "start" : "end" : i < -jm ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, l = n.axisLine, s = n.axisLineType, c = dn(dn({}, me(this.props, !1)), {}, {
        fill: "none"
      }, me(l, !1));
      if (s === "circle")
        return /* @__PURE__ */ T.createElement(_s, gn({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var u = this.props.ticks, f = u.map(function(d) {
        return rt(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ T.createElement(cW, gn({
        className: "recharts-polar-angle-axis-line"
      }, c, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, l = a.tickLine, s = a.tickFormatter, c = a.stroke, u = me(this.props, !1), f = me(o, !1), d = dn(dn({}, u), {}, {
        fill: "none"
      }, me(l, !1)), p = i.map(function(v, m) {
        var h = n.getTickLineCoord(v), y = n.getTickTextAnchor(v), w = dn(dn(dn({
          textAnchor: y
        }, u), {}, {
          stroke: "none",
          fill: c
        }, f), {}, {
          index: m,
          payload: v,
          x: h.x2,
          y: h.y2
        });
        return /* @__PURE__ */ T.createElement(Fe, gn({
          className: De("recharts-polar-angle-axis-tick", E0(o)),
          key: "tick-".concat(v.coordinate)
        }, Cn(n.props, v, m)), l && /* @__PURE__ */ T.createElement("line", gn({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, h)), o && t.renderTickItem(o, w, s ? s(v.value, m) : v.value));
      });
      return /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-polar-angle-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.radius, o = n.axisLine;
      return i <= 0 || !a || !a.length ? null : /* @__PURE__ */ T.createElement(Fe, {
        className: De("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : Pe(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(Pn, gn({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
}(b.PureComponent);
Ts(Ms, "displayName", "PolarAngleAxis");
Ts(Ms, "axisType", "angleAxis");
Ts(Ms, "defaultProps", {
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
var KW = Xy, XW = KW(Object.getPrototypeOf, Object), ZW = XW, QW = Vr, JW = ZW, eV = zr, tV = "[object Object]", rV = Function.prototype, nV = Object.prototype, z0 = rV.toString, aV = nV.hasOwnProperty, iV = z0.call(Object);
function oV(e) {
  if (!eV(e) || QW(e) != tV)
    return !1;
  var t = JW(e);
  if (t === null)
    return !0;
  var r = aV.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && z0.call(r) == iV;
}
var lV = oV;
const sV = /* @__PURE__ */ We(lV);
var cV = Vr, uV = zr, fV = "[object Boolean]";
function dV(e) {
  return e === !0 || e === !1 || uV(e) && cV(e) == fV;
}
var pV = dV;
const hV = /* @__PURE__ */ We(pV);
function Ui(e) {
  "@babel/helpers - typeof";
  return Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ui(e);
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
function vV(e, t) {
  return bV(e) || yV(e, t) || gV(e, t) || mV();
}
function mV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gV(e, t) {
  if (e) {
    if (typeof e == "string") return Dm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dm(e, t);
  }
}
function Dm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yV(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function bV(e) {
  if (Array.isArray(e)) return e;
}
function Nm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nm(Object(r), !0).forEach(function(n) {
      xV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xV(e, t, r) {
  return t = wV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wV(e) {
  var t = SV(e, "string");
  return Ui(t) == "symbol" ? t : t + "";
}
function SV(e, t) {
  if (Ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var km = function(t, r, n, a, i) {
  var o = n - a, l;
  return l = "M ".concat(t, ",").concat(r), l += "L ".concat(t + n, ",").concat(r), l += "L ".concat(t + n - o / 2, ",").concat(r + i), l += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), l += "L ".concat(t, ",").concat(r, " Z"), l;
}, OV = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, $V = function(t) {
  var r = Rm(Rm({}, OV), t), n = b.useRef(), a = b.useState(-1), i = vV(a, 2), o = i[0], l = i[1];
  b.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && l(S);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, u = r.upperWidth, f = r.lowerWidth, d = r.height, p = r.className, v = r.animationEasing, m = r.animationDuration, h = r.animationBegin, y = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || u !== +u || f !== +f || d !== +d || u === 0 && f === 0 || d === 0)
    return null;
  var w = De("recharts-trapezoid", p);
  return y ? /* @__PURE__ */ T.createElement(Pr, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: s,
      y: c
    },
    to: {
      upperWidth: u,
      lowerWidth: f,
      height: d,
      x: s,
      y: c
    },
    duration: m,
    animationEasing: v,
    isActive: y
  }, function(S) {
    var O = S.upperWidth, g = S.lowerWidth, x = S.height, $ = S.x, C = S.y;
    return /* @__PURE__ */ T.createElement(Pr, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: h,
      duration: m,
      easing: v
    }, /* @__PURE__ */ T.createElement("path", Il({}, me(r, !0), {
      className: w,
      d: km($, C, O, g, x),
      ref: n
    })));
  }) : /* @__PURE__ */ T.createElement("g", null, /* @__PURE__ */ T.createElement("path", Il({}, me(r, !0), {
    className: w,
    d: km(s, c, u, f, d)
  })));
}, CV = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Yi(e) {
  "@babel/helpers - typeof";
  return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yi(e);
}
function PV(e, t) {
  if (e == null) return {};
  var r = _V(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _V(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bm(Object(r), !0).forEach(function(n) {
      EV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EV(e, t, r) {
  return t = AV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AV(e) {
  var t = TV(e, "string");
  return Yi(t) == "symbol" ? t : t + "";
}
function TV(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function MV(e, t) {
  return jl(jl({}, t), e);
}
function IV(e, t) {
  return e === "symbols";
}
function Lm(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ T.createElement(Kd, r);
    case "trapezoid":
      return /* @__PURE__ */ T.createElement($V, r);
    case "sector":
      return /* @__PURE__ */ T.createElement(M0, r);
    case "symbols":
      if (IV(t))
        return /* @__PURE__ */ T.createElement(pd, r);
      break;
    default:
      return null;
  }
}
function jV(e) {
  return /* @__PURE__ */ b.isValidElement(e) ? e.props : e;
}
function U0(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? MV : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, l = e.isActive, s = PV(e, CV), c;
  if (/* @__PURE__ */ b.isValidElement(t))
    c = /* @__PURE__ */ b.cloneElement(t, jl(jl({}, s), jV(t)));
  else if (Pe(t))
    c = t(s);
  else if (sV(t) && !hV(t)) {
    var u = a(t, s);
    c = /* @__PURE__ */ T.createElement(Lm, {
      shapeType: r,
      elementProps: u
    });
  } else {
    var f = s;
    c = /* @__PURE__ */ T.createElement(Lm, {
      shapeType: r,
      elementProps: f
    });
  }
  return l ? /* @__PURE__ */ T.createElement(Fe, {
    className: o
  }, c) : c;
}
function Is(e, t) {
  return t != null && "trapezoids" in e.props;
}
function js(e, t) {
  return t != null && "sectors" in e.props;
}
function qi(e, t) {
  return t != null && "points" in e.props;
}
function DV(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function NV(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function RV(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function kV(e, t) {
  var r;
  return Is(e, t) ? r = DV : js(e, t) ? r = NV : qi(e, t) && (r = RV), r;
}
function BV(e, t) {
  var r;
  return Is(e, t) ? r = "trapezoids" : js(e, t) ? r = "sectors" : qi(e, t) && (r = "points"), r;
}
function LV(e, t) {
  if (Is(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (js(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return qi(e, t) ? t.payload : {};
}
function HV(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = BV(r, t), i = LV(r, t), o = n.filter(function(s, c) {
    var u = oa(i, s), f = r.props[a].filter(function(v) {
      var m = kV(r, t);
      return m(v, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = c === d;
    return u && p;
  }), l = n.indexOf(o[o.length - 1]);
  return l;
}
var Vo;
function fa(e) {
  "@babel/helpers - typeof";
  return fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fa(e);
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
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hm(Object(r), !0).forEach(function(n) {
      er(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, q0(n.key), n);
  }
}
function WV(e, t, r) {
  return t && Fm(e.prototype, t), r && Fm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function VV(e, t, r) {
  return t = Dl(t), zV(e, Y0() ? Reflect.construct(t, r || [], Dl(e).constructor) : t.apply(e, r));
}
function zV(e, t) {
  if (t && (fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return UV(e);
}
function UV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Y0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Y0 = function() {
    return !!e;
  })();
}
function Dl(e) {
  return Dl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Dl(e);
}
function YV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gf(e, t);
}
function gf(e, t) {
  return gf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, gf(e, t);
}
function er(e, t, r) {
  return t = q0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q0(e) {
  var t = qV(e, "string");
  return fa(t) == "symbol" ? t : t + "";
}
function qV(e, t) {
  if (fa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (fa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yr = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return FV(this, t), n = VV(this, t, [r]), er(n, "pieRef", null), er(n, "sectorRefs", []), er(n, "id", ja("recharts-pie-")), er(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Pe(a) && a();
    }), er(n, "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Pe(a) && a();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return YV(t, e), WV(t, [{
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
      var i = this.props, o = i.label, l = i.labelLine, s = i.dataKey, c = i.valueKey, u = me(this.props, !1), f = me(o, !1), d = me(l, !1), p = o && o.offsetRadius || 20, v = n.map(function(m, h) {
        var y = (m.startAngle + m.endAngle) / 2, w = rt(m.cx, m.cy, m.outerRadius + p, y), S = et(et(et(et({}, u), m), {}, {
          stroke: "none"
        }, f), {}, {
          index: h,
          textAnchor: t.getTextAnchor(w.x, m.cx)
        }, w), O = et(et(et(et({}, u), m), {}, {
          fill: "none",
          stroke: m.fill
        }, d), {}, {
          index: h,
          points: [rt(m.cx, m.cy, m.outerRadius, y), w]
        }), g = s;
        return Ae(s) && Ae(c) ? g = "value" : Ae(s) && (g = c), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ T.createElement(Fe, {
          key: "label-".concat(m.startAngle, "-").concat(m.endAngle, "-").concat(m.midAngle, "-").concat(h)
        }, l && t.renderLabelLineItem(l, O, "line"), t.renderLabelItem(o, S, mt(m, g)));
      });
      return /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-pie-labels"
      }, v);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.activeShape, l = i.blendStroke, s = i.inactiveShape;
      return n.map(function(c, u) {
        if ((c == null ? void 0 : c.startAngle) === 0 && (c == null ? void 0 : c.endAngle) === 0 && n.length !== 1) return null;
        var f = a.isActiveIndex(u), d = s && a.hasActiveIndex() ? s : null, p = f ? o : d, v = et(et({}, c), {}, {
          stroke: l ? c.fill : c.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ T.createElement(Fe, Vn({
          ref: function(h) {
            h && !a.sectorRefs.includes(h) && a.sectorRefs.push(h);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Cn(a.props, c, u), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(c == null ? void 0 : c.startAngle, "-").concat(c == null ? void 0 : c.endAngle, "-").concat(c.midAngle, "-").concat(u)
        }), /* @__PURE__ */ T.createElement(U0, Vn({
          option: p,
          isActive: f,
          shapeType: "sector"
        }, v)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.sectors, o = a.isAnimationActive, l = a.animationBegin, s = a.animationDuration, c = a.animationEasing, u = a.animationId, f = this.state, d = f.prevSectors, p = f.prevIsAnimationActive;
      return /* @__PURE__ */ T.createElement(Pr, {
        begin: l,
        duration: s,
        isActive: o,
        easing: c,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(u, "-").concat(p),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(v) {
        var m = v.t, h = [], y = i && i[0], w = y.startAngle;
        return i.forEach(function(S, O) {
          var g = d && d[O], x = O > 0 ? Xt(S, "paddingAngle", 0) : 0;
          if (g) {
            var $ = Lt(g.endAngle - g.startAngle, S.endAngle - S.startAngle), C = et(et({}, S), {}, {
              startAngle: w + x,
              endAngle: w + $(m) + x
            });
            h.push(C), w = C.endAngle;
          } else {
            var _ = S.endAngle, M = S.startAngle, P = Lt(0, _ - M), I = P(m), N = et(et({}, S), {}, {
              startAngle: w + x,
              endAngle: w + I + x
            });
            h.push(N), w = N.endAngle;
          }
        }), /* @__PURE__ */ T.createElement(Fe, null, n.renderSectorsStatically(h));
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
      return i && a && a.length && (!o || !oa(o, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.hide, o = a.sectors, l = a.className, s = a.label, c = a.cx, u = a.cy, f = a.innerRadius, d = a.outerRadius, p = a.isAnimationActive, v = this.state.isAnimationFinished;
      if (i || !o || !o.length || !ee(c) || !ee(u) || !ee(f) || !ee(d))
        return null;
      var m = De("recharts-pie", l);
      return /* @__PURE__ */ T.createElement(Fe, {
        tabIndex: this.props.rootTabIndex,
        className: m,
        ref: function(y) {
          n.pieRef = y;
        }
      }, this.renderSectors(), s && this.renderLabels(o), Ot.renderCallByParent(this.props, null, !1), (!p || v) && Rr.renderCallByParent(this.props, o, !1));
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
      if (/* @__PURE__ */ T.isValidElement(n))
        return /* @__PURE__ */ T.cloneElement(n, a);
      if (Pe(n))
        return n(a);
      var o = De("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ T.createElement(Xn, Vn({}, a, {
        key: i,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ T.isValidElement(n))
        return /* @__PURE__ */ T.cloneElement(n, a);
      var o = i;
      if (Pe(n) && (o = n(a), /* @__PURE__ */ T.isValidElement(o)))
        return o;
      var l = De("recharts-pie-label-text", typeof n != "boolean" && !Pe(n) ? n.className : "");
      return /* @__PURE__ */ T.createElement(Pn, Vn({}, a, {
        alignmentBaseline: "middle",
        className: l
      }), o);
    }
  }]);
}(b.PureComponent);
Vo = Yr;
er(Yr, "displayName", "Pie");
er(Yr, "defaultProps", {
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
  isAnimationActive: !wr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
er(Yr, "parseDeltaAngle", function(e, t) {
  var r = Nt(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
er(Yr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = me(e, !1), a = rr(r, vs);
  return t && t.length ? t.map(function(i, o) {
    return et(et(et({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return et(et({}, n), i.props);
  }) : [];
});
er(Yr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = _0(a, i), l = n + Rt(e.cx, a, a / 2), s = r + Rt(e.cy, i, i / 2), c = Rt(e.innerRadius, o, 0), u = Rt(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: l,
    cy: s,
    innerRadius: c,
    outerRadius: u,
    maxRadius: f
  };
});
er(Yr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? et(et({}, t.type.defaultProps), t.props) : t.props, a = Vo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, l = n.endAngle, s = n.paddingAngle, c = n.dataKey, u = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), v = Vo.parseCoordinateOfPie(n, r), m = Vo.parseDeltaAngle(o, l), h = Math.abs(m), y = c;
  Ae(c) && Ae(f) ? (Dr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = "value") : Ae(c) && (Dr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = f);
  var w = a.filter(function(C) {
    return mt(C, y, 0) !== 0;
  }).length, S = (h >= 360 ? w : w - 1) * s, O = h - w * p - S, g = a.reduce(function(C, _) {
    var M = mt(_, y, 0);
    return C + (ee(M) ? M : 0);
  }, 0), x;
  if (g > 0) {
    var $;
    x = a.map(function(C, _) {
      var M = mt(C, y, 0), P = mt(C, u, _), I = (ee(M) ? M : 0) / g, N;
      _ ? N = $.endAngle + Nt(m) * s * (M !== 0 ? 1 : 0) : N = o;
      var j = N + Nt(m) * ((M !== 0 ? p : 0) + I * O), E = (N + j) / 2, A = (v.innerRadius + v.outerRadius) / 2, D = [{
        name: P,
        value: M,
        payload: C,
        dataKey: y,
        type: d
      }], R = rt(v.cx, v.cy, A, E);
      return $ = et(et(et({
        percent: I,
        cornerRadius: i,
        name: P,
        tooltipPayload: D,
        midAngle: E,
        middleRadius: A,
        tooltipPosition: R
      }, C), v), {}, {
        value: mt(C, y),
        startAngle: N,
        endAngle: j,
        payload: C,
        paddingAngle: Nt(m) * s
      }), $;
    });
  }
  return et(et({}, v), {}, {
    sectors: x,
    data: a
  });
});
var GV = Math.ceil, KV = Math.max;
function XV(e, t, r, n) {
  for (var a = -1, i = KV(GV((t - e) / (r || 1)), 0), o = Array(i); i--; )
    o[n ? i : ++a] = e, e += r;
  return o;
}
var ZV = XV, QV = hb, Wm = 1 / 0, JV = 17976931348623157e292;
function ez(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = QV(e), e === Wm || e === -Wm) {
    var t = e < 0 ? -1 : 1;
    return t * JV;
  }
  return e === e ? e : 0;
}
var tz = ez, rz = ZV, nz = hs, Yc = tz;
function az(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && nz(t, r, n) && (r = n = void 0), t = Yc(t), r === void 0 ? (r = t, t = 0) : r = Yc(r), n = n === void 0 ? t < r ? 1 : -1 : Yc(n), rz(t, r, n, e);
  };
}
var iz = az, oz = iz, lz = oz(), sz = lz;
const Nl = /* @__PURE__ */ We(sz);
function Gi(e) {
  "@babel/helpers - typeof";
  return Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gi(e);
}
function Vm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vm(Object(r), !0).forEach(function(n) {
      G0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function G0(e, t, r) {
  return t = cz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cz(e) {
  var t = uz(e, "string");
  return Gi(t) == "symbol" ? t : t + "";
}
function uz(e, t) {
  if (Gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fz = ["Webkit", "Moz", "O", "ms"], dz = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = fz.reduce(function(i, o) {
    return zm(zm({}, i), {}, G0({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function da(e) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, da(e);
}
function Rl() {
  return Rl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rl.apply(this, arguments);
}
function Um(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Um(Object(r), !0).forEach(function(n) {
      Yt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Um(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ym(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, X0(n.key), n);
  }
}
function hz(e, t, r) {
  return t && Ym(e.prototype, t), r && Ym(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vz(e, t, r) {
  return t = kl(t), mz(e, K0() ? Reflect.construct(t, r || [], kl(e).constructor) : t.apply(e, r));
}
function mz(e, t) {
  if (t && (da(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return gz(e);
}
function gz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function K0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (K0 = function() {
    return !!e;
  })();
}
function kl(e) {
  return kl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kl(e);
}
function yz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && yf(e, t);
}
function yf(e, t) {
  return yf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, yf(e, t);
}
function Yt(e, t, r) {
  return t = X0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X0(e) {
  var t = bz(e, "string");
  return da(t) == "symbol" ? t : t + "";
}
function bz(e, t) {
  if (da(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xz = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, l = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = di().domain(Nl(0, s)).range([i, i + o - l]), u = c.domain().map(function(f) {
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
    scaleValues: u
  };
}, qm = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, pa = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return pz(this, t), n = vz(this, t, [r]), Yt(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), Yt(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), Yt(n, "handleDragEnd", function() {
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
    }), Yt(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Yt(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), Yt(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), Yt(n, "handleSlideDragStart", function(a) {
      var i = qm(a) ? a.changedTouches[0] : a;
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
  return yz(t, e), hz(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, l = this.props, s = l.gap, c = l.data, u = c.length - 1, f = Math.min(a, i), d = Math.max(a, i), p = t.getIndexInRange(o, f), v = t.getIndexInRange(o, d);
      return {
        startIndex: p - p % s,
        endIndex: v === u ? u : v - v % s
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, l = a.dataKey, s = mt(i[n], l, n);
      return Pe(o) ? o(s, n) : s;
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
      var a = this.state, i = a.slideMoveStartX, o = a.startX, l = a.endX, s = this.props, c = s.x, u = s.width, f = s.travellerWidth, d = s.startIndex, p = s.endIndex, v = s.onChange, m = n.pageX - i;
      m > 0 ? m = Math.min(m, c + u - f - l, c + u - f - o) : m < 0 && (m = Math.max(m, c - o, c - l));
      var h = this.getIndex({
        startX: o + m,
        endX: l + m
      });
      (h.startIndex !== d || h.endIndex !== p) && v && v(h), this.setState({
        startX: o + m,
        endX: l + m,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = qm(a) ? a.changedTouches[0] : a;
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
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, l = a.endX, s = a.startX, c = this.state[o], u = this.props, f = u.x, d = u.width, p = u.travellerWidth, v = u.onChange, m = u.gap, h = u.data, y = {
        startX: this.state.startX,
        endX: this.state.endX
      }, w = n.pageX - i;
      w > 0 ? w = Math.min(w, f + d - p - c) : w < 0 && (w = Math.max(w, f - c)), y[o] = c + w;
      var S = this.getIndex(y), O = S.startIndex, g = S.endIndex, x = function() {
        var C = h.length - 1;
        return o === "startX" && (l > s ? O % m === 0 : g % m === 0) || l < s && g === C || o === "endX" && (l > s ? g % m === 0 : O % m === 0) || l > s && g === C;
      };
      this.setState(Yt(Yt({}, o, c + w), "brushMoveStartX", n.pageX), function() {
        v && x() && v(S);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, l = o.scaleValues, s = o.startX, c = o.endX, u = this.state[a], f = l.indexOf(u);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= l.length)) {
          var p = l[d];
          a === "startX" && p >= c || a === "endX" && p <= s || this.setState(Yt({}, a, p), function() {
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
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, s = n.fill, c = n.stroke;
      return /* @__PURE__ */ T.createElement("rect", {
        stroke: c,
        fill: s,
        x: a,
        y: i,
        width: o,
        height: l
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, s = n.data, c = n.children, u = n.padding, f = b.Children.only(c);
      return f ? /* @__PURE__ */ T.cloneElement(f, {
        x: a,
        y: i,
        width: o,
        height: l,
        margin: u,
        compact: !0,
        data: s
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, l = this, s = this.props, c = s.y, u = s.travellerWidth, f = s.height, d = s.traveller, p = s.ariaLabel, v = s.data, m = s.startIndex, h = s.endIndex, y = Math.max(n, this.props.x), w = qc(qc({}, me(this.props, !1)), {}, {
        x: y,
        y: c,
        width: u,
        height: f
      }), S = p || "Min value: ".concat((i = v[m]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = v[h]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ T.createElement(Fe, {
        tabIndex: 0,
        role: "slider",
        "aria-label": S,
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
      }, t.renderTraveller(d, w));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, l = i.height, s = i.stroke, c = i.travellerWidth, u = Math.min(n, a) + c, f = Math.max(Math.abs(a - n) - c, 0);
      return /* @__PURE__ */ T.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: s,
        fillOpacity: 0.2,
        x: u,
        y: o,
        width: f,
        height: l
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, l = n.height, s = n.travellerWidth, c = n.stroke, u = this.state, f = u.startX, d = u.endX, p = 5, v = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ T.createElement(Pn, Rl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + l / 2
      }, v), this.getTextOfTick(a)), /* @__PURE__ */ T.createElement(Pn, Rl({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + s + p,
        y: o + l / 2
      }, v), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, l = n.x, s = n.y, c = n.width, u = n.height, f = n.alwaysShowText, d = this.state, p = d.startX, v = d.endX, m = d.isTextActive, h = d.isSlideMoving, y = d.isTravellerMoving, w = d.isTravellerFocused;
      if (!a || !a.length || !ee(l) || !ee(s) || !ee(c) || !ee(u) || c <= 0 || u <= 0)
        return null;
      var S = De("recharts-brush", i), O = T.Children.count(o) === 1, g = dz("userSelect", "none");
      return /* @__PURE__ */ T.createElement(Fe, {
        className: S,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: g
      }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(p, v), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(v, "endX"), (m || h || y || w || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, l = n.height, s = n.stroke, c = Math.floor(i + l / 2) - 1;
      return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: l,
        fill: s,
        stroke: "none"
      }), /* @__PURE__ */ T.createElement("line", {
        x1: a + 1,
        y1: c,
        x2: a + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ T.createElement("line", {
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
      return /* @__PURE__ */ T.isValidElement(n) ? i = /* @__PURE__ */ T.cloneElement(n, a) : Pe(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, l = n.x, s = n.travellerWidth, c = n.updateId, u = n.startIndex, f = n.endIndex;
      if (i !== a.prevData || c !== a.prevUpdateId)
        return qc({
          prevData: i,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: l,
          prevWidth: o
        }, i && i.length ? xz({
          data: i,
          width: o,
          x: l,
          travellerWidth: s,
          startIndex: u,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || l !== a.prevX || s !== a.prevTravellerWidth)) {
        a.scale.range([l, l + o - s]);
        var d = a.scale.domain().map(function(p) {
          return a.scale(p);
        });
        return {
          prevData: i,
          prevTravellerWidth: s,
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
        var s = Math.floor((o + l) / 2);
        n[s] > a ? l = s : o = s;
      }
      return a >= n[l] ? l : o;
    }
  }]);
}(b.PureComponent);
Yt(pa, "displayName", "Brush");
Yt(pa, "defaultProps", {
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
var wz = wd;
function Sz(e, t) {
  var r;
  return wz(e, function(n, a, i) {
    return r = t(n, a, i), !r;
  }), !!r;
}
var Oz = Sz, $z = Wy, Cz = rn, Pz = Oz, _z = zt, Ez = hs;
function Az(e, t, r) {
  var n = _z(e) ? $z : Pz;
  return r && Ez(e, t, r) && (t = void 0), n(e, Cz(t));
}
var Tz = Az;
const Mz = /* @__PURE__ */ We(Tz);
var Or = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, Gm = cb;
function Iz(e, t, r) {
  t == "__proto__" && Gm ? Gm(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var jz = Iz, Dz = jz, Nz = lb, Rz = rn;
function kz(e, t) {
  var r = {};
  return t = Rz(t), Nz(e, function(n, a, i) {
    Dz(r, a, t(n, a, i));
  }), r;
}
var Bz = kz;
const Lz = /* @__PURE__ */ We(Bz);
function Hz(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var Fz = Hz, Wz = wd;
function Vz(e, t) {
  var r = !0;
  return Wz(e, function(n, a, i) {
    return r = !!t(n, a, i), r;
  }), r;
}
var zz = Vz, Uz = Fz, Yz = zz, qz = rn, Gz = zt, Kz = hs;
function Xz(e, t, r) {
  var n = Gz(e) ? Uz : Yz;
  return r && Kz(e, t, r) && (t = void 0), n(e, qz(t));
}
var Zz = Xz;
const Qz = /* @__PURE__ */ We(Zz);
var Jz = ["x", "y"];
function ha(e) {
  "@babel/helpers - typeof";
  return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ha(e);
}
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bf.apply(this, arguments);
}
function Km(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Km(Object(r), !0).forEach(function(n) {
      e5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Km(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e5(e, t, r) {
  return t = t5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t5(e) {
  var t = r5(e, "string");
  return ha(t) == "symbol" ? t : t + "";
}
function r5(e, t) {
  if (ha(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ha(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function n5(e, t) {
  if (e == null) return {};
  var r = a5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function a5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function i5(e, t) {
  var r = e.x, n = e.y, a = n5(e, Jz), i = "".concat(r), o = parseInt(i, 10), l = "".concat(n), s = parseInt(l, 10), c = "".concat(t.height || a.height), u = parseInt(c, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
  return ri(ri(ri(ri(ri({}, t), a), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: u,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function Xm(e) {
  return /* @__PURE__ */ T.createElement(U0, bf({
    shapeType: "rectangle",
    propTransformer: i5,
    activeClassName: "recharts-active-bar"
  }, e));
}
var o5 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (Oe.env.NODE_ENV !== "production" ? Ft(!1, "minPointSize callback function received a value with type of ".concat(ha(n), ". Currently only numbers are supported.")) : Ft()), r);
  };
}, l5 = ["value", "background"], Z0;
function va(e) {
  "@babel/helpers - typeof";
  return va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, va(e);
}
function s5(e, t) {
  if (e == null) return {};
  var r = c5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function c5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Bl() {
  return Bl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bl.apply(this, arguments);
}
function Zm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zm(Object(r), !0).forEach(function(n) {
      Qr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, J0(n.key), n);
  }
}
function f5(e, t, r) {
  return t && Qm(e.prototype, t), r && Qm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function d5(e, t, r) {
  return t = Ll(t), p5(e, Q0() ? Reflect.construct(t, r || [], Ll(e).constructor) : t.apply(e, r));
}
function p5(e, t) {
  if (t && (va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return h5(e);
}
function h5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Q0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Q0 = function() {
    return !!e;
  })();
}
function Ll(e) {
  return Ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ll(e);
}
function v5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xf(e, t);
}
function xf(e, t) {
  return xf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xf(e, t);
}
function Qr(e, t, r) {
  return t = J0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J0(e) {
  var t = m5(e, "string");
  return va(t) == "symbol" ? t : t + "";
}
function m5(e, t) {
  if (va(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (va(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lo = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    u5(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = d5(this, t, [].concat(a)), Qr(r, "state", {
      isAnimationFinished: !1
    }), Qr(r, "id", ja("recharts-bar-")), Qr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Qr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return v5(t, e), f5(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, l = i.dataKey, s = i.activeIndex, c = i.activeBar, u = me(this.props, !1);
      return n && n.map(function(f, d) {
        var p = d === s, v = p ? c : o, m = dt(dt(dt({}, u), f), {}, {
          isActive: p,
          option: v,
          index: d,
          dataKey: l,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ T.createElement(Fe, Bl({
          className: "recharts-bar-rectangle"
        }, Cn(a.props, f, d), {
          key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value)
        }), /* @__PURE__ */ T.createElement(Xm, m));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, l = a.isAnimationActive, s = a.animationBegin, c = a.animationDuration, u = a.animationEasing, f = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ T.createElement(Pr, {
        begin: s,
        duration: c,
        isActive: l,
        easing: u,
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
        var v = p.t, m = i.map(function(h, y) {
          var w = d && d[y];
          if (w) {
            var S = Lt(w.x, h.x), O = Lt(w.y, h.y), g = Lt(w.width, h.width), x = Lt(w.height, h.height);
            return dt(dt({}, h), {}, {
              x: S(v),
              y: O(v),
              width: g(v),
              height: x(v)
            });
          }
          if (o === "horizontal") {
            var $ = Lt(0, h.height), C = $(v);
            return dt(dt({}, h), {}, {
              y: h.y + h.height - C,
              height: C
            });
          }
          var _ = Lt(0, h.width), M = _(v);
          return dt(dt({}, h), {}, {
            width: M
          });
        });
        return /* @__PURE__ */ T.createElement(Fe, null, n.renderRectanglesStatically(m));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !oa(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, l = a.activeIndex, s = me(this.props.background, !1);
      return i.map(function(c, u) {
        c.value;
        var f = c.background, d = s5(c, l5);
        if (!f)
          return null;
        var p = dt(dt(dt(dt(dt({}, d), {}, {
          fill: "#eee"
        }, f), s), Cn(n.props, c, u)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: u,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ T.createElement(Xm, Bl({
          key: "background-bar-".concat(u),
          option: n.props.background,
          isActive: u === l
        }, p));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, l = i.xAxis, s = i.yAxis, c = i.layout, u = i.children, f = rr(u, Ps);
      if (!f)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(h, y) {
        var w = Array.isArray(h.value) ? h.value[1] : h.value;
        return {
          x: h.x,
          y: h.y,
          value: w,
          errorVal: mt(h, y)
        };
      }, v = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ T.createElement(Fe, v, f.map(function(m) {
        return /* @__PURE__ */ T.cloneElement(m, {
          key: "error-bar-".concat(a, "-").concat(m.props.dataKey),
          data: o,
          xAxis: l,
          yAxis: s,
          layout: c,
          offset: d,
          dataPointFormatter: p
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, l = n.xAxis, s = n.yAxis, c = n.left, u = n.top, f = n.width, d = n.height, p = n.isAnimationActive, v = n.background, m = n.id;
      if (a || !i || !i.length)
        return null;
      var h = this.state.isAnimationFinished, y = De("recharts-bar", o), w = l && l.allowDataOverflow, S = s && s.allowDataOverflow, O = w || S, g = Ae(m) ? this.id : m;
      return /* @__PURE__ */ T.createElement(Fe, {
        className: y
      }, w || S ? /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-".concat(g)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: w ? c : c - f / 2,
        y: S ? u : u - d / 2,
        width: w ? f : f * 2,
        height: S ? d : d * 2
      }))) : null, /* @__PURE__ */ T.createElement(Fe, {
        className: "recharts-bar-rectangles",
        clipPath: O ? "url(#clipPath-".concat(g, ")") : null
      }, v ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, g), (!p || h) && Rr.renderCallByParent(this.props, i));
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
}(b.PureComponent);
Z0 = lo;
Qr(lo, "displayName", "Bar");
Qr(lo, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !wr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Qr(lo, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, l = e.xAxisTicks, s = e.yAxisTicks, c = e.stackedData, u = e.dataStartIndex, f = e.displayedData, d = e.offset, p = sH(n, r);
  if (!p)
    return null;
  var v = t.layout, m = r.type.defaultProps, h = m !== void 0 ? dt(dt({}, m), r.props) : r.props, y = h.dataKey, w = h.children, S = h.minPointSize, O = v === "horizontal" ? o : i, g = c ? O.scale.domain() : null, x = vH({
    numericAxis: O
  }), $ = rr(w, vs), C = f.map(function(_, M) {
    var P, I, N, j, E, A;
    c ? P = cH(c[u + M], g) : (P = mt(_, y), Array.isArray(P) || (P = [x, P]));
    var D = o5(S, Z0.defaultProps.minPointSize)(P[1], M);
    if (v === "horizontal") {
      var R, k = [o.scale(P[0]), o.scale(P[1])], L = k[0], H = k[1];
      I = Fv({
        axis: i,
        ticks: l,
        bandSize: a,
        offset: p.offset,
        entry: _,
        index: M
      }), N = (R = H ?? L) !== null && R !== void 0 ? R : void 0, j = p.size;
      var B = L - H;
      if (E = Number.isNaN(B) ? 0 : B, A = {
        x: I,
        y: o.y,
        width: j,
        height: o.height
      }, Math.abs(D) > 0 && Math.abs(E) < Math.abs(D)) {
        var W = Nt(E || D) * (Math.abs(D) - Math.abs(E));
        N -= W, E += W;
      }
    } else {
      var U = [i.scale(P[0]), i.scale(P[1])], G = U[0], Q = U[1];
      if (I = G, N = Fv({
        axis: o,
        ticks: s,
        bandSize: a,
        offset: p.offset,
        entry: _,
        index: M
      }), j = Q - G, E = p.size, A = {
        x: i.x,
        y: N,
        width: i.width,
        height: E
      }, Math.abs(D) > 0 && Math.abs(j) < Math.abs(D)) {
        var ne = Nt(j || D) * (Math.abs(D) - Math.abs(j));
        j += ne;
      }
    }
    return dt(dt(dt({}, _), {}, {
      x: I,
      y: N,
      width: j,
      height: E,
      value: c ? P : P[1],
      payload: _,
      background: A
    }, $ && $[M] && $[M].props), {}, {
      tooltipPayload: [C0(r, _)],
      tooltipPosition: {
        x: I + j / 2,
        y: N + E / 2
      }
    });
  });
  return dt({
    data: C,
    layout: v
  }, d);
});
function Ki(e) {
  "@babel/helpers - typeof";
  return Ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e);
}
function g5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ex(n.key), n);
  }
}
function y5(e, t, r) {
  return t && Jm(e.prototype, t), r && Jm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eg(Object(r), !0).forEach(function(n) {
      Ds(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ds(e, t, r) {
  return t = ex(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ex(e) {
  var t = b5(e, "string");
  return Ki(t) == "symbol" ? t : t + "";
}
function b5(e, t) {
  if (Ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var x5 = function(t, r, n, a, i) {
  var o = t.width, l = t.height, s = t.layout, c = t.children, u = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: l - n.bottom,
    bottomMirror: l - n.bottom
  }, d = !!qt(c, lo);
  return u.reduce(function(p, v) {
    var m = r[v], h = m.orientation, y = m.domain, w = m.padding, S = w === void 0 ? {} : w, O = m.mirror, g = m.reversed, x = "".concat(h).concat(O ? "Mirror" : ""), $, C, _, M, P;
    if (m.type === "number" && (m.padding === "gap" || m.padding === "no-gap")) {
      var I = y[1] - y[0], N = 1 / 0, j = m.categoricalDomain.sort();
      if (j.forEach(function(U, G) {
        G > 0 && (N = Math.min((U || 0) - (j[G - 1] || 0), N));
      }), Number.isFinite(N)) {
        var E = N / I, A = m.layout === "vertical" ? n.height : n.width;
        if (m.padding === "gap" && ($ = E * A / 2), m.padding === "no-gap") {
          var D = Rt(t.barCategoryGap, E * A), R = E * A / 2;
          $ = R - D - (R - D) / A * D;
        }
      }
    }
    a === "xAxis" ? C = [n.left + (S.left || 0) + ($ || 0), n.left + n.width - (S.right || 0) - ($ || 0)] : a === "yAxis" ? C = s === "horizontal" ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)] : [n.top + (S.top || 0) + ($ || 0), n.top + n.height - (S.bottom || 0) - ($ || 0)] : C = m.range, g && (C = [C[1], C[0]]);
    var k = w0(m, i, d), L = k.scale, H = k.realScaleType;
    L.domain(y).range(C), S0(L);
    var B = O0(L, sr(sr({}, m), {}, {
      realScaleType: H
    }));
    a === "xAxis" ? (P = h === "top" && !O || h === "bottom" && O, _ = n.left, M = f[x] - P * m.height) : a === "yAxis" && (P = h === "left" && !O || h === "right" && O, _ = f[x] - P * m.width, M = n.top);
    var W = sr(sr(sr({}, m), B), {}, {
      realScaleType: H,
      x: _,
      y: M,
      scale: L,
      width: a === "xAxis" ? n.width : m.width,
      height: a === "yAxis" ? n.height : m.height
    });
    return W.bandSize = Sl(W, B), !m.hide && a === "xAxis" ? f[x] += (P ? -1 : 1) * W.height : m.hide || (f[x] += (P ? -1 : 1) * W.width), sr(sr({}, p), {}, Ds({}, v, W));
  }, {});
}, tx = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, w5 = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return tx({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, rx = /* @__PURE__ */ function() {
  function e(t) {
    g5(this, e), this.scale = t;
  }
  return y5(e, [{
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
          var s = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + s;
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
Ds(rx, "EPS", 1e-4);
var Xd = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return sr(sr({}, n), {}, Ds({}, a, rx.create(t[a])));
  }, {});
  return sr(sr({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, l = i.position;
      return Lz(a, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: l
        });
      });
    },
    isInRange: function(a) {
      return Qz(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function S5(e) {
  return (e % 180 + 180) % 180;
}
var O5 = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = S5(a), o = i * Math.PI / 180, l = Math.atan(n / r), s = o > l && o < Math.PI - l ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, $5 = X$(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function Hl(e) {
  "@babel/helpers - typeof";
  return Hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hl(e);
}
var nx = /* @__PURE__ */ b.createContext(void 0), ax = /* @__PURE__ */ b.createContext(void 0), ix = /* @__PURE__ */ b.createContext(void 0), C5 = /* @__PURE__ */ b.createContext({}), ox = /* @__PURE__ */ b.createContext(void 0), lx = /* @__PURE__ */ b.createContext(0), sx = /* @__PURE__ */ b.createContext(0), tg = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, l = t.children, s = t.width, c = t.height, u = $5(i);
  return /* @__PURE__ */ T.createElement(nx.Provider, {
    value: n
  }, /* @__PURE__ */ T.createElement(ax.Provider, {
    value: a
  }, /* @__PURE__ */ T.createElement(C5.Provider, {
    value: i
  }, /* @__PURE__ */ T.createElement(ix.Provider, {
    value: u
  }, /* @__PURE__ */ T.createElement(ox.Provider, {
    value: o
  }, /* @__PURE__ */ T.createElement(lx.Provider, {
    value: c
  }, /* @__PURE__ */ T.createElement(sx.Provider, {
    value: s
  }, l)))))));
}, P5 = function() {
  return b.useContext(ox);
};
function cx(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var ux = function(t) {
  var r = b.useContext(nx);
  r == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ft());
  var n = r[t];
  return n == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(Hl(t), "]. ").concat(cx(r))) : Ft()), n;
}, fx = function(t) {
  var r = b.useContext(ax);
  r == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ft());
  var n = r[t];
  return n == null && (Oe.env.NODE_ENV !== "production" ? Ft(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(Hl(t), "]. ").concat(cx(r))) : Ft()), n;
}, _5 = function() {
  var t = b.useContext(ix);
  return t;
}, dx = function() {
  return b.useContext(sx);
}, px = function() {
  return b.useContext(lx);
};
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
function E5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vx(n.key), n);
  }
}
function T5(e, t, r) {
  return t && A5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function M5(e, t, r) {
  return t = Fl(t), I5(e, hx() ? Reflect.construct(t, r || [], Fl(e).constructor) : t.apply(e, r));
}
function I5(e, t) {
  if (t && (ma(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return j5(e);
}
function j5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hx = function() {
    return !!e;
  })();
}
function Fl(e) {
  return Fl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fl(e);
}
function D5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wf(e, t);
}
function wf(e, t) {
  return wf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, wf(e, t);
}
function rg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ng(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rg(Object(r), !0).forEach(function(n) {
      Zd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zd(e, t, r) {
  return t = vx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vx(e) {
  var t = N5(e, "string");
  return ma(t) == "symbol" ? t : t + "";
}
function N5(e, t) {
  if (ma(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ma(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function R5(e, t) {
  return H5(e) || L5(e, t) || B5(e, t) || k5();
}
function k5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B5(e, t) {
  if (e) {
    if (typeof e == "string") return ag(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ag(e, t);
  }
}
function ag(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function L5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function H5(e) {
  if (Array.isArray(e)) return e;
}
function Sf() {
  return Sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sf.apply(this, arguments);
}
var F5 = function(t, r) {
  var n;
  return /* @__PURE__ */ T.isValidElement(t) ? n = /* @__PURE__ */ T.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ T.createElement("line", Sf({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, W5 = function(t, r, n, a, i, o, l, s, c) {
  var u = i.x, f = i.y, d = i.width, p = i.height;
  if (n) {
    var v = c.y, m = t.y.apply(v, {
      position: o
    });
    if (Or(c, "discard") && !t.y.isInRange(m))
      return null;
    var h = [{
      x: u + d,
      y: m
    }, {
      x: u,
      y: m
    }];
    return s === "left" ? h.reverse() : h;
  }
  if (r) {
    var y = c.x, w = t.x.apply(y, {
      position: o
    });
    if (Or(c, "discard") && !t.x.isInRange(w))
      return null;
    var S = [{
      x: w,
      y: f + p
    }, {
      x: w,
      y: f
    }];
    return l === "top" ? S.reverse() : S;
  }
  if (a) {
    var O = c.segment, g = O.map(function(x) {
      return t.apply(x, {
        position: o
      });
    });
    return Or(c, "discard") && Mz(g, function(x) {
      return !t.isInRange(x);
    }) ? null : g;
  }
  return null;
};
function V5(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, l = e.className, s = e.alwaysShow, c = P5(), u = ux(a), f = fx(i), d = _5();
  if (!c || !d)
    return null;
  Dr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Xd({
    x: u.scale,
    y: f.scale
  }), v = gt(t), m = gt(r), h = n && n.length === 2, y = W5(p, v, m, h, d, e.position, u.orientation, f.orientation, e);
  if (!y)
    return null;
  var w = R5(y, 2), S = w[0], O = S.x, g = S.y, x = w[1], $ = x.x, C = x.y, _ = Or(e, "hidden") ? "url(#".concat(c, ")") : void 0, M = ng(ng({
    clipPath: _
  }, me(e, !0)), {}, {
    x1: O,
    y1: g,
    x2: $,
    y2: C
  });
  return /* @__PURE__ */ T.createElement(Fe, {
    className: De("recharts-reference-line", l)
  }, F5(o, M), Ot.renderCallByParent(e, w5({
    x1: O,
    y1: g,
    x2: $,
    y2: C
  })));
}
var Qd = /* @__PURE__ */ function(e) {
  function t() {
    return E5(this, t), M5(this, t, arguments);
  }
  return D5(t, e), T5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(V5, this.props);
    }
  }]);
}(T.Component);
Zd(Qd, "displayName", "ReferenceLine");
Zd(Qd, "defaultProps", {
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
function Of() {
  return Of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Of.apply(this, arguments);
}
function ga(e) {
  "@babel/helpers - typeof";
  return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ga(e);
}
function ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function og(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ig(Object(r), !0).forEach(function(n) {
      Ns(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gx(n.key), n);
  }
}
function Y5(e, t, r) {
  return t && U5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q5(e, t, r) {
  return t = Wl(t), G5(e, mx() ? Reflect.construct(t, r || [], Wl(e).constructor) : t.apply(e, r));
}
function G5(e, t) {
  if (t && (ga(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return K5(e);
}
function K5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mx = function() {
    return !!e;
  })();
}
function Wl(e) {
  return Wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wl(e);
}
function X5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $f(e, t);
}
function $f(e, t) {
  return $f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $f(e, t);
}
function Ns(e, t, r) {
  return t = gx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gx(e) {
  var t = Z5(e, "string");
  return ga(t) == "symbol" ? t : t + "";
}
function Z5(e, t) {
  if (ga(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ga(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Q5 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Xd({
    x: a.scale,
    y: i.scale
  }), l = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Or(t, "discard") && !o.isInRange(l) ? null : l;
}, Rs = /* @__PURE__ */ function(e) {
  function t() {
    return z5(this, t), q5(this, t, arguments);
  }
  return X5(t, e), Y5(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, l = n.alwaysShow, s = n.clipPathId, c = gt(a), u = gt(i);
      if (Dr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !u)
        return null;
      var f = Q5(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, v = this.props, m = v.shape, h = v.className, y = Or(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, w = og(og({
        clipPath: y
      }, me(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ T.createElement(Fe, {
        className: De("recharts-reference-dot", h)
      }, t.renderDot(m, w), Ot.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(T.Component);
Ns(Rs, "displayName", "ReferenceDot");
Ns(Rs, "defaultProps", {
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
Ns(Rs, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ T.isValidElement(e) ? r = /* @__PURE__ */ T.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ T.createElement(_s, Of({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function Cf() {
  return Cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cf.apply(this, arguments);
}
function ya(e) {
  "@babel/helpers - typeof";
  return ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ya(e);
}
function lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lg(Object(r), !0).forEach(function(n) {
      ks(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bx(n.key), n);
  }
}
function t6(e, t, r) {
  return t && e6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function r6(e, t, r) {
  return t = Vl(t), n6(e, yx() ? Reflect.construct(t, r || [], Vl(e).constructor) : t.apply(e, r));
}
function n6(e, t) {
  if (t && (ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return a6(e);
}
function a6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yx = function() {
    return !!e;
  })();
}
function Vl(e) {
  return Vl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vl(e);
}
function i6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pf(e, t);
}
function Pf(e, t) {
  return Pf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Pf(e, t);
}
function ks(e, t, r) {
  return t = bx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bx(e) {
  var t = o6(e, "string");
  return ya(t) == "symbol" ? t : t + "";
}
function o6(e, t) {
  if (ya(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var l6 = function(t, r, n, a, i) {
  var o = i.x1, l = i.x2, s = i.y1, c = i.y2, u = i.xAxis, f = i.yAxis;
  if (!u || !f) return null;
  var d = Xd({
    x: u.scale,
    y: f.scale
  }), p = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(s, {
      position: "start"
    }) : d.y.rangeMin
  }, v = {
    x: r ? d.x.apply(l, {
      position: "end"
    }) : d.x.rangeMax,
    y: a ? d.y.apply(c, {
      position: "end"
    }) : d.y.rangeMax
  };
  return Or(i, "discard") && (!d.isInRange(p) || !d.isInRange(v)) ? null : tx(p, v);
}, Bs = /* @__PURE__ */ function(e) {
  function t() {
    return J5(this, t), r6(this, t, arguments);
  }
  return i6(t, e), t6(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, l = n.y2, s = n.className, c = n.alwaysShow, u = n.clipPathId;
      Dr(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = gt(a), d = gt(i), p = gt(o), v = gt(l), m = this.props.shape;
      if (!f && !d && !p && !v && !m)
        return null;
      var h = l6(f, d, p, v, this.props);
      if (!h && !m)
        return null;
      var y = Or(this.props, "hidden") ? "url(#".concat(u, ")") : void 0;
      return /* @__PURE__ */ T.createElement(Fe, {
        className: De("recharts-reference-area", s)
      }, t.renderRect(m, sg(sg({
        clipPath: y
      }, me(this.props, !0)), h)), Ot.renderCallByParent(this.props, h));
    }
  }]);
}(T.Component);
ks(Bs, "displayName", "ReferenceArea");
ks(Bs, "defaultProps", {
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
ks(Bs, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ T.isValidElement(e) ? r = /* @__PURE__ */ T.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ T.createElement(Kd, Cf({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function xx(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function s6(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return O5(n, r);
}
function c6(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, l = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + l
  } : {
    start: n ? a + o : i + l,
    end: n ? a : i
  };
}
function zl(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function u6(e, t) {
  return xx(e, t + 1);
}
function f6(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, l = t.end, s = 0, c = 1, u = o, f = function() {
    var v = n == null ? void 0 : n[s];
    if (v === void 0)
      return {
        v: xx(n, c)
      };
    var m = s, h, y = function() {
      return h === void 0 && (h = r(v, m)), h;
    }, w = v.coordinate, S = s === 0 || zl(e, w, y, u, l);
    S || (s = 0, u = o, c += 1), S && (u = w + e * (y() / 2 + a), s += c);
  }, d; c <= i.length; )
    if (d = f(), d) return d.v;
  return [];
}
function Xi(e) {
  "@babel/helpers - typeof";
  return Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xi(e);
}
function cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), !0).forEach(function(n) {
      d6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d6(e, t, r) {
  return t = p6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p6(e) {
  var t = h6(e, "string");
  return Xi(t) == "symbol" ? t : t + "";
}
function h6(e, t) {
  if (Xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v6(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = i.length, l = t.start, s = t.end, c = function(d) {
    var p = i[d], v, m = function() {
      return v === void 0 && (v = r(p, d)), v;
    };
    if (d === o - 1) {
      var h = e * (p.coordinate + e * m() / 2 - s);
      i[d] = p = At(At({}, p), {}, {
        tickCoord: h > 0 ? p.coordinate - h * e : p.coordinate
      });
    } else
      i[d] = p = At(At({}, p), {}, {
        tickCoord: p.coordinate
      });
    var y = zl(e, p.tickCoord, m, l, s);
    y && (s = p.tickCoord - e * (m() / 2 + a), i[d] = At(At({}, p), {}, {
      isShow: !0
    }));
  }, u = o - 1; u >= 0; u--)
    c(u);
  return i;
}
function m6(e, t, r, n, a, i) {
  var o = (n || []).slice(), l = o.length, s = t.start, c = t.end;
  if (i) {
    var u = n[l - 1], f = r(u, l - 1), d = e * (u.coordinate + e * f / 2 - c);
    o[l - 1] = u = At(At({}, u), {}, {
      tickCoord: d > 0 ? u.coordinate - d * e : u.coordinate
    });
    var p = zl(e, u.tickCoord, function() {
      return f;
    }, s, c);
    p && (c = u.tickCoord - e * (f / 2 + a), o[l - 1] = At(At({}, u), {}, {
      isShow: !0
    }));
  }
  for (var v = i ? l - 1 : l, m = function(w) {
    var S = o[w], O, g = function() {
      return O === void 0 && (O = r(S, w)), O;
    };
    if (w === 0) {
      var x = e * (S.coordinate - e * g() / 2 - s);
      o[w] = S = At(At({}, S), {}, {
        tickCoord: x < 0 ? S.coordinate - x * e : S.coordinate
      });
    } else
      o[w] = S = At(At({}, S), {}, {
        tickCoord: S.coordinate
      });
    var $ = zl(e, S.tickCoord, g, s, c);
    $ && (s = S.tickCoord + e * (g() / 2 + a), o[w] = At(At({}, S), {}, {
      isShow: !0
    }));
  }, h = 0; h < v; h++)
    m(h);
  return o;
}
function g6(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, l = e.orientation, s = e.interval, c = e.tickFormatter, u = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (ee(s) || wr.isSsr)
    return u6(a, typeof s == "number" && ee(s) ? s : 0);
  var d = [], p = l === "top" || l === "bottom" ? "width" : "height", v = u && p === "width" ? fi(u, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, m = function(S, O) {
    var g = Pe(c) ? c(S.value, O) : S.value;
    return p === "width" ? s6(fi(g, {
      fontSize: t,
      letterSpacing: r
    }), v, f) : fi(g, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, h = a.length >= 2 ? Nt(a[1].coordinate - a[0].coordinate) : 1, y = c6(i, h, p);
  return s === "equidistantPreserveStart" ? f6(h, y, m, a, o) : (s === "preserveStart" || s === "preserveStartEnd" ? d = m6(h, y, m, a, o, s === "preserveStartEnd") : d = v6(h, y, m, a, o), d.filter(function(w) {
    return w.isShow;
  }));
}
var y6 = ["viewBox"], b6 = ["viewBox"], x6 = ["ticks"];
function ba(e) {
  "@babel/helpers - typeof";
  return ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ba(e);
}
function zn() {
  return zn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zn.apply(this, arguments);
}
function ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ug(Object(r), !0).forEach(function(n) {
      Jd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gc(e, t) {
  if (e == null) return {};
  var r = w6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function w6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function S6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sx(n.key), n);
  }
}
function O6(e, t, r) {
  return t && fg(e.prototype, t), r && fg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $6(e, t, r) {
  return t = Ul(t), C6(e, wx() ? Reflect.construct(t, r || [], Ul(e).constructor) : t.apply(e, r));
}
function C6(e, t) {
  if (t && (ba(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return P6(e);
}
function P6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wx = function() {
    return !!e;
  })();
}
function Ul(e) {
  return Ul = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ul(e);
}
function _6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, _f(e, t);
}
function Jd(e, t, r) {
  return t = Sx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sx(e) {
  var t = E6(e, "string");
  return ba(t) == "symbol" ? t : t + "";
}
function E6(e, t) {
  if (ba(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ba(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ls = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return S6(this, t), n = $6(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return _6(t, e), O6(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = Gc(n, y6), l = this.props, s = l.viewBox, c = Gc(l, b6);
      return !Yn(i, s) || !Yn(o, c) || !Yn(a, this.state);
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
      var a = this.props, i = a.x, o = a.y, l = a.width, s = a.height, c = a.orientation, u = a.tickSize, f = a.mirror, d = a.tickMargin, p, v, m, h, y, w, S = f ? -1 : 1, O = n.tickSize || u, g = ee(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          p = v = n.coordinate, h = o + +!f * s, m = h - S * O, w = m - S * d, y = g;
          break;
        case "left":
          m = h = n.coordinate, v = i + +!f * l, p = v - S * O, y = p - S * d, w = g;
          break;
        case "right":
          m = h = n.coordinate, v = i + +f * l, p = v + S * O, y = p + S * d, w = g;
          break;
        default:
          p = v = n.coordinate, h = o + +f * s, m = h + S * O, w = m + S * d, y = g;
          break;
      }
      return {
        line: {
          x1: p,
          y1: m,
          x2: v,
          y2: h
        },
        tick: {
          x: y,
          y: w
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
      var n = this.props, a = n.x, i = n.y, o = n.width, l = n.height, s = n.orientation, c = n.mirror, u = n.axisLine, f = Dt(Dt(Dt({}, me(this.props, !1)), me(u, !1)), {}, {
        fill: "none"
      });
      if (s === "top" || s === "bottom") {
        var d = +(s === "top" && !c || s === "bottom" && c);
        f = Dt(Dt({}, f), {}, {
          x1: a,
          y1: i + d * l,
          x2: a + o,
          y2: i + d * l
        });
      } else {
        var p = +(s === "left" && !c || s === "right" && c);
        f = Dt(Dt({}, f), {}, {
          x1: a + p * o,
          y1: i,
          x2: a + p * o,
          y2: i + l
        });
      }
      return /* @__PURE__ */ T.createElement("line", zn({}, f, {
        className: De("recharts-cartesian-axis-line", Xt(u, "className"))
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
        var o = this, l = this.props, s = l.tickLine, c = l.stroke, u = l.tick, f = l.tickFormatter, d = l.unit, p = g6(Dt(Dt({}, this.props), {}, {
          ticks: n
        }), a, i), v = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), h = me(this.props, !1), y = me(u, !1), w = Dt(Dt({}, h), {}, {
          fill: "none"
        }, me(s, !1)), S = p.map(function(O, g) {
          var x = o.getTickLineCoord(O), $ = x.line, C = x.tick, _ = Dt(Dt(Dt(Dt({
            textAnchor: v,
            verticalAnchor: m
          }, h), {}, {
            stroke: "none",
            fill: c
          }, y), C), {}, {
            index: g,
            payload: O,
            visibleTicksCount: p.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ T.createElement(Fe, zn({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, Cn(o.props, O, g)), s && /* @__PURE__ */ T.createElement("line", zn({}, w, $, {
            className: De("recharts-cartesian-axis-tick-line", Xt(s, "className"))
          })), u && t.renderTickItem(u, _, "".concat(Pe(f) ? f(O.value, g) : O.value).concat(d || "")));
        });
        return /* @__PURE__ */ T.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, S);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.axisLine, o = a.width, l = a.height, s = a.ticksGenerator, c = a.className, u = a.hide;
      if (u)
        return null;
      var f = this.props, d = f.ticks, p = Gc(f, x6), v = d;
      return Pe(s) && (v = d && d.length > 0 ? s(this.props) : s(p)), o <= 0 || l <= 0 || !v || !v.length ? null : /* @__PURE__ */ T.createElement(Fe, {
        className: De("recharts-cartesian-axis", c),
        ref: function(h) {
          n.layerReference = h;
        }
      }, i && this.renderAxisLine(), this.renderTicks(v, this.state.fontSize, this.state.letterSpacing), Ot.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ T.isValidElement(n) ? o = /* @__PURE__ */ T.cloneElement(n, a) : Pe(n) ? o = n(a) : o = /* @__PURE__ */ T.createElement(Pn, zn({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
}(b.Component);
Jd(Ls, "displayName", "CartesianAxis");
Jd(Ls, "defaultProps", {
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
var A6 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], T6 = ["key"], Ox;
function xa(e) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xa(e);
}
function $x(e, t) {
  if (e == null) return {};
  var r = M6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function M6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Sn() {
  return Sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sn.apply(this, arguments);
}
function dg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dg(Object(r), !0).forEach(function(n) {
      xr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Px(n.key), n);
  }
}
function j6(e, t, r) {
  return t && pg(e.prototype, t), r && pg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function D6(e, t, r) {
  return t = Yl(t), N6(e, Cx() ? Reflect.construct(t, r || [], Yl(e).constructor) : t.apply(e, r));
}
function N6(e, t) {
  if (t && (xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return R6(e);
}
function R6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cx = function() {
    return !!e;
  })();
}
function Yl(e) {
  return Yl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yl(e);
}
function k6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ef(e, t);
}
function Ef(e, t) {
  return Ef = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ef(e, t);
}
function xr(e, t, r) {
  return t = Px(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Px(e) {
  var t = B6(e, "string");
  return xa(t) == "symbol" ? t : t + "";
}
function B6(e, t) {
  if (xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ln = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    I6(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = D6(this, t, [].concat(a)), xr(r, "state", {
      isAnimationFinished: !0
    }), xr(r, "id", ja("recharts-area-")), xr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Pe(o) && o();
    }), xr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Pe(o) && o();
    }), r;
  }
  return k6(t, e), j6(t, [{
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive, l = this.state.isAnimationFinished;
      if (o && !l)
        return null;
      var s = this.props, c = s.dot, u = s.points, f = s.dataKey, d = me(this.props, !1), p = me(c, !0), v = u.map(function(h, y) {
        var w = Kr(Kr(Kr({
          key: "dot-".concat(y),
          r: 3
        }, d), p), {}, {
          index: y,
          cx: h.x,
          cy: h.y,
          dataKey: f,
          value: h.value,
          payload: h.payload,
          points: u
        });
        return t.renderDotItem(c, w);
      }), m = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ T.createElement(Fe, Sn({
        className: "recharts-area-dots"
      }, m), v);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, l = a.strokeWidth, s = o[0].x, c = o[o.length - 1].x, u = n * Math.abs(s - c), f = Zr(o.map(function(d) {
        return d.y || 0;
      }));
      return ee(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Zr(i.map(function(d) {
        return d.y || 0;
      })), f)), ee(f) ? /* @__PURE__ */ T.createElement("rect", {
        x: s < c ? s : s - u,
        y: 0,
        width: u,
        height: Math.floor(f + (l ? parseInt("".concat(l), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, l = a.strokeWidth, s = o[0].y, c = o[o.length - 1].y, u = n * Math.abs(s - c), f = Zr(o.map(function(d) {
        return d.x || 0;
      }));
      return ee(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(Zr(i.map(function(d) {
        return d.x || 0;
      })), f)), ee(f) ? /* @__PURE__ */ T.createElement("rect", {
        x: 0,
        y: s < c ? s : s - u,
        width: f + (l ? parseInt("".concat(l), 10) : 1),
        height: Math.floor(u)
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
      var l = this.props, s = l.layout, c = l.type, u = l.stroke, f = l.connectNulls, d = l.isRange;
      l.ref;
      var p = $x(l, A6);
      return /* @__PURE__ */ T.createElement(Fe, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ T.createElement(Xn, Sn({}, me(p, !0), {
        points: n,
        connectNulls: f,
        type: c,
        baseLine: a,
        layout: s,
        stroke: "none",
        className: "recharts-area-area"
      })), u !== "none" && /* @__PURE__ */ T.createElement(Xn, Sn({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: s,
        type: c,
        connectNulls: f,
        fill: "none",
        points: n
      })), u !== "none" && d && /* @__PURE__ */ T.createElement(Xn, Sn({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: s,
        type: c,
        connectNulls: f,
        fill: "none",
        points: a
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, l = o.points, s = o.baseLine, c = o.isAnimationActive, u = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, v = this.state, m = v.prevPoints, h = v.prevBaseLine;
      return /* @__PURE__ */ T.createElement(Pr, {
        begin: u,
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
        var w = y.t;
        if (m) {
          var S = m.length / l.length, O = l.map(function(C, _) {
            var M = Math.floor(_ * S);
            if (m[M]) {
              var P = m[M], I = Lt(P.x, C.x), N = Lt(P.y, C.y);
              return Kr(Kr({}, C), {}, {
                x: I(w),
                y: N(w)
              });
            }
            return C;
          }), g;
          if (ee(s) && typeof s == "number") {
            var x = Lt(h, s);
            g = x(w);
          } else if (Ae(s) || Ia(s)) {
            var $ = Lt(h, 0);
            g = $(w);
          } else
            g = s.map(function(C, _) {
              var M = Math.floor(_ * S);
              if (h[M]) {
                var P = h[M], I = Lt(P.x, C.x), N = Lt(P.y, C.y);
                return Kr(Kr({}, C), {}, {
                  x: I(w),
                  y: N(w)
                });
              }
              return C;
            });
          return i.renderAreaStatically(O, g, n, a);
        }
        return /* @__PURE__ */ T.createElement(Fe, null, /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
          id: "animationClipPath-".concat(a)
        }, i.renderClipRect(w))), /* @__PURE__ */ T.createElement(Fe, {
          clipPath: "url(#animationClipPath-".concat(a, ")")
        }, i.renderAreaStatically(l, s, n, a)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, a) {
      var i = this.props, o = i.points, l = i.baseLine, s = i.isAnimationActive, c = this.state, u = c.prevPoints, f = c.prevBaseLine, d = c.totalLength;
      return s && o && o.length && (!u && d > 0 || !oa(u, o) || !oa(f, l)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, l, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, l = a.points, s = a.className, c = a.top, u = a.left, f = a.xAxis, d = a.yAxis, p = a.width, v = a.height, m = a.isAnimationActive, h = a.id;
      if (i || !l || !l.length)
        return null;
      var y = this.state.isAnimationFinished, w = l.length === 1, S = De("recharts-area", s), O = f && f.allowDataOverflow, g = d && d.allowDataOverflow, x = O || g, $ = Ae(h) ? this.id : h, C = (n = me(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, _ = C.r, M = _ === void 0 ? 3 : _, P = C.strokeWidth, I = P === void 0 ? 2 : P, N = JC(o) ? o : {}, j = N.clipDot, E = j === void 0 ? !0 : j, A = M * 2 + I;
      return /* @__PURE__ */ T.createElement(Fe, {
        className: S
      }, O || g ? /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-".concat($)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: O ? u : u - p / 2,
        y: g ? c : c - v / 2,
        width: O ? p : p * 2,
        height: g ? v : v * 2
      })), !E && /* @__PURE__ */ T.createElement("clipPath", {
        id: "clipPath-dots-".concat($)
      }, /* @__PURE__ */ T.createElement("rect", {
        x: u - A / 2,
        y: c - A / 2,
        width: p + A,
        height: v + A
      }))) : null, w ? null : this.renderArea(x, $), (o || w) && this.renderDots(x, E, $), (!m || y) && Rr.renderCallByParent(this.props, l));
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
}(b.PureComponent);
Ox = ln;
xr(ln, "displayName", "Area");
xr(ln, "defaultProps", {
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
  isAnimationActive: !wr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
xr(ln, "getBaseValue", function(e, t, r, n) {
  var a = e.layout, i = e.baseValue, o = t.props.baseValue, l = o ?? i;
  if (ee(l) && typeof l == "number")
    return l;
  var s = a === "horizontal" ? n : r, c = s.scale.domain();
  if (s.type === "number") {
    var u = Math.max(c[0], c[1]), f = Math.min(c[0], c[1]);
    return l === "dataMin" ? f : l === "dataMax" || u < 0 ? u : Math.max(Math.min(c[0], c[1]), 0);
  }
  return l === "dataMin" ? c[0] : l === "dataMax" ? c[1] : c[0];
});
xr(ln, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, l = e.bandSize, s = e.dataKey, c = e.stackedData, u = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, v = c && c.length, m = Ox.getBaseValue(t, r, n, a), h = p === "horizontal", y = !1, w = f.map(function(O, g) {
    var x;
    v ? x = c[u + g] : (x = mt(O, s), Array.isArray(x) ? y = !0 : x = [m, x]);
    var $ = x[1] == null || v && mt(O, s) == null;
    return h ? {
      x: Hv({
        axis: n,
        ticks: i,
        bandSize: l,
        entry: O,
        index: g
      }),
      y: $ ? null : a.scale(x[1]),
      value: x,
      payload: O
    } : {
      x: $ ? null : n.scale(x[1]),
      y: Hv({
        axis: a,
        ticks: o,
        bandSize: l,
        entry: O,
        index: g
      }),
      value: x,
      payload: O
    };
  }), S;
  return v || y ? S = w.map(function(O) {
    var g = Array.isArray(O.value) ? O.value[0] : null;
    return h ? {
      x: O.x,
      y: g != null && O.y != null ? a.scale(g) : null
    } : {
      x: g != null ? n.scale(g) : null,
      y: O.y
    };
  }) : S = h ? a.scale(m) : n.scale(m), Kr({
    points: w,
    baseLine: S,
    layout: p,
    isRange: y
  }, d);
});
xr(ln, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ T.isValidElement(e))
    r = /* @__PURE__ */ T.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = De("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = $x(t, T6);
    r = /* @__PURE__ */ T.createElement(_s, Sn({}, i, {
      key: a,
      className: n
    }));
  }
  return r;
});
function wa(e) {
  "@babel/helpers - typeof";
  return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wa(e);
}
function L6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function H6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ax(n.key), n);
  }
}
function F6(e, t, r) {
  return t && H6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function W6(e, t, r) {
  return t = ql(t), V6(e, _x() ? Reflect.construct(t, r || [], ql(e).constructor) : t.apply(e, r));
}
function V6(e, t) {
  if (t && (wa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return z6(e);
}
function z6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _x() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_x = function() {
    return !!e;
  })();
}
function ql(e) {
  return ql = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ql(e);
}
function U6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Af(e, t);
}
function Af(e, t) {
  return Af = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Af(e, t);
}
function Ex(e, t, r) {
  return t = Ax(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ax(e) {
  var t = Y6(e, "string");
  return wa(t) == "symbol" ? t : t + "";
}
function Y6(e, t) {
  if (wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tf.apply(this, arguments);
}
function q6(e) {
  var t = e.xAxisId, r = dx(), n = px(), a = ux(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ T.createElement(Ls, Tf({}, a, {
      className: De("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return wn(o, !0);
      }
    }))
  );
}
var Hs = /* @__PURE__ */ function(e) {
  function t() {
    return L6(this, t), W6(this, t, arguments);
  }
  return U6(t, e), F6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(q6, this.props);
    }
  }]);
}(T.Component);
Ex(Hs, "displayName", "XAxis");
Ex(Hs, "defaultProps", {
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
function Sa(e) {
  "@babel/helpers - typeof";
  return Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sa(e);
}
function G6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function K6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ix(n.key), n);
  }
}
function X6(e, t, r) {
  return t && K6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Z6(e, t, r) {
  return t = Gl(t), Q6(e, Tx() ? Reflect.construct(t, r || [], Gl(e).constructor) : t.apply(e, r));
}
function Q6(e, t) {
  if (t && (Sa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return J6(e);
}
function J6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Tx = function() {
    return !!e;
  })();
}
function Gl(e) {
  return Gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Gl(e);
}
function e8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Mf(e, t);
}
function Mf(e, t) {
  return Mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Mf(e, t);
}
function Mx(e, t, r) {
  return t = Ix(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ix(e) {
  var t = t8(e, "string");
  return Sa(t) == "symbol" ? t : t + "";
}
function t8(e, t) {
  if (Sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, If.apply(this, arguments);
}
var r8 = function(t) {
  var r = t.yAxisId, n = dx(), a = px(), i = fx(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ T.createElement(Ls, If({}, i, {
      className: De("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: a
      },
      ticksGenerator: function(l) {
        return wn(l, !0);
      }
    }))
  );
}, Fs = /* @__PURE__ */ function(e) {
  function t() {
    return G6(this, t), Z6(this, t, arguments);
  }
  return e8(t, e), X6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ T.createElement(r8, this.props);
    }
  }]);
}(T.Component);
Mx(Fs, "displayName", "YAxis");
Mx(Fs, "defaultProps", {
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
function hg(e) {
  return o8(e) || i8(e) || a8(e) || n8();
}
function n8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a8(e, t) {
  if (e) {
    if (typeof e == "string") return jf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jf(e, t);
  }
}
function i8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function o8(e) {
  if (Array.isArray(e)) return jf(e);
}
function jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Df = function(t, r, n, a, i) {
  var o = rr(t, Qd), l = rr(t, Rs), s = [].concat(hg(o), hg(l)), c = rr(t, Bs), u = "".concat(a, "Id"), f = a[0], d = r;
  if (s.length && (d = s.reduce(function(m, h) {
    if (h.props[u] === n && Or(h.props, "extendDomain") && ee(h.props[f])) {
      var y = h.props[f];
      return [Math.min(m[0], y), Math.max(m[1], y)];
    }
    return m;
  }, d)), c.length) {
    var p = "".concat(f, "1"), v = "".concat(f, "2");
    d = c.reduce(function(m, h) {
      if (h.props[u] === n && Or(h.props, "extendDomain") && ee(h.props[p]) && ee(h.props[v])) {
        var y = h.props[p], w = h.props[v];
        return [Math.min(m[0], y, w), Math.max(m[1], y, w)];
      }
      return m;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(m, h) {
    return ee(h) ? [Math.min(m[0], h), Math.max(m[1], h)] : m;
  }, d)), d;
}, jx = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function a(s, c, u) {
    this.fn = s, this.context = c, this.once = u || !1;
  }
  function i(s, c, u, f, d) {
    if (typeof u != "function")
      throw new TypeError("The listener must be a function");
    var p = new a(u, f || s, d), v = r ? r + c : c;
    return s._events[v] ? s._events[v].fn ? s._events[v] = [s._events[v], p] : s._events[v].push(p) : (s._events[v] = p, s._eventsCount++), s;
  }
  function o(s, c) {
    --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
  }
  function l() {
    this._events = new n(), this._eventsCount = 0;
  }
  l.prototype.eventNames = function() {
    var c = [], u, f;
    if (this._eventsCount === 0) return c;
    for (f in u = this._events)
      t.call(u, f) && c.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(u)) : c;
  }, l.prototype.listeners = function(c) {
    var u = r ? r + c : c, f = this._events[u];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, p = f.length, v = new Array(p); d < p; d++)
      v[d] = f[d].fn;
    return v;
  }, l.prototype.listenerCount = function(c) {
    var u = r ? r + c : c, f = this._events[u];
    return f ? f.fn ? 1 : f.length : 0;
  }, l.prototype.emit = function(c, u, f, d, p, v) {
    var m = r ? r + c : c;
    if (!this._events[m]) return !1;
    var h = this._events[m], y = arguments.length, w, S;
    if (h.fn) {
      switch (h.once && this.removeListener(c, h.fn, void 0, !0), y) {
        case 1:
          return h.fn.call(h.context), !0;
        case 2:
          return h.fn.call(h.context, u), !0;
        case 3:
          return h.fn.call(h.context, u, f), !0;
        case 4:
          return h.fn.call(h.context, u, f, d), !0;
        case 5:
          return h.fn.call(h.context, u, f, d, p), !0;
        case 6:
          return h.fn.call(h.context, u, f, d, p, v), !0;
      }
      for (S = 1, w = new Array(y - 1); S < y; S++)
        w[S - 1] = arguments[S];
      h.fn.apply(h.context, w);
    } else {
      var O = h.length, g;
      for (S = 0; S < O; S++)
        switch (h[S].once && this.removeListener(c, h[S].fn, void 0, !0), y) {
          case 1:
            h[S].fn.call(h[S].context);
            break;
          case 2:
            h[S].fn.call(h[S].context, u);
            break;
          case 3:
            h[S].fn.call(h[S].context, u, f);
            break;
          case 4:
            h[S].fn.call(h[S].context, u, f, d);
            break;
          default:
            if (!w) for (g = 1, w = new Array(y - 1); g < y; g++)
              w[g - 1] = arguments[g];
            h[S].fn.apply(h[S].context, w);
        }
    }
    return !0;
  }, l.prototype.on = function(c, u, f) {
    return i(this, c, u, f, !1);
  }, l.prototype.once = function(c, u, f) {
    return i(this, c, u, f, !0);
  }, l.prototype.removeListener = function(c, u, f, d) {
    var p = r ? r + c : c;
    if (!this._events[p]) return this;
    if (!u)
      return o(this, p), this;
    var v = this._events[p];
    if (v.fn)
      v.fn === u && (!d || v.once) && (!f || v.context === f) && o(this, p);
    else {
      for (var m = 0, h = [], y = v.length; m < y; m++)
        (v[m].fn !== u || d && !v[m].once || f && v[m].context !== f) && h.push(v[m]);
      h.length ? this._events[p] = h.length === 1 ? h[0] : h : o(this, p);
    }
    return this;
  }, l.prototype.removeAllListeners = function(c) {
    var u;
    return c ? (u = r ? r + c : c, this._events[u] && o(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
  }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
})(jx);
var l8 = jx.exports;
const s8 = /* @__PURE__ */ We(l8);
var Kc = new s8(), Xc = "recharts.syncMouseEvents";
function Zi(e) {
  "@babel/helpers - typeof";
  return Zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zi(e);
}
function c8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function u8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Dx(n.key), n);
  }
}
function f8(e, t, r) {
  return t && u8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Zc(e, t, r) {
  return t = Dx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Dx(e) {
  var t = d8(e, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function d8(e, t) {
  if (Zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var p8 = /* @__PURE__ */ function() {
  function e() {
    c8(this, e), Zc(this, "activeIndex", 0), Zc(this, "coordinateList", []), Zc(this, "layout", "horizontal");
  }
  return f8(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, l = o === void 0 ? null : o, s = r.layout, c = s === void 0 ? null : s, u = r.offset, f = u === void 0 ? null : u, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
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
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, l = a.height, s = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, u = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = i + s + c, d = o + this.offset.top + l / 2 + u;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
}();
function h8(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], a = e == null ? void 0 : e[1];
    if (n && a && ee(n) && ee(a))
      return !0;
  }
  return !1;
}
function v8(e, t, r, n) {
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
function Nx(e) {
  var t = e.cx, r = e.cy, n = e.radius, a = e.startAngle, i = e.endAngle, o = rt(t, r, n, a), l = rt(t, r, n, i);
  return {
    points: [o, l],
    cx: t,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function m8(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var l = t.cx, s = t.cy, c = t.innerRadius, u = t.outerRadius, f = t.angle, d = rt(l, s, c, f), p = rt(l, s, u, f);
      n = d.x, a = d.y, i = p.x, o = p.y;
    } else
      return Nx(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function Qi(e) {
  "@babel/helpers - typeof";
  return Qi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qi(e);
}
function vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Do(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vg(Object(r), !0).forEach(function(n) {
      g8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g8(e, t, r) {
  return t = y8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y8(e) {
  var t = b8(e, "string");
  return Qi(t) == "symbol" ? t : t + "";
}
function b8(e, t) {
  if (Qi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function x8(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, l = e.activePayload, s = e.offset, c = e.activeTooltipIndex, u = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var v, m = Xn;
  if (d === "ScatterChart")
    v = o, m = yW;
  else if (d === "BarChart")
    v = v8(f, o, s, u), m = Kd;
  else if (f === "radial") {
    var h = Nx(o), y = h.cx, w = h.cy, S = h.radius, O = h.startAngle, g = h.endAngle;
    v = {
      cx: y,
      cy: w,
      startAngle: O,
      endAngle: g,
      innerRadius: S,
      outerRadius: S
    }, m = M0;
  } else
    v = {
      points: m8(f, o, s)
    }, m = Xn;
  var x = Do(Do(Do(Do({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), v), me(p, !1)), {}, {
    payload: l,
    payloadIndex: c,
    className: De("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ b.isValidElement(p) ? /* @__PURE__ */ b.cloneElement(p, x) : /* @__PURE__ */ b.createElement(m, x);
}
var w8 = ["item"], S8 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Oa(e) {
  "@babel/helpers - typeof";
  return Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oa(e);
}
function Un() {
  return Un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Un.apply(this, arguments);
}
function mg(e, t) {
  return C8(e) || $8(e, t) || kx(e, t) || O8();
}
function O8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $8(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, l = [], s = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function C8(e) {
  if (Array.isArray(e)) return e;
}
function gg(e, t) {
  if (e == null) return {};
  var r = P8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function P8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function E8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Bx(n.key), n);
  }
}
function A8(e, t, r) {
  return t && E8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function T8(e, t, r) {
  return t = Kl(t), M8(e, Rx() ? Reflect.construct(t, r || [], Kl(e).constructor) : t.apply(e, r));
}
function M8(e, t) {
  if (t && (Oa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return I8(e);
}
function I8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Rx = function() {
    return !!e;
  })();
}
function Kl(e) {
  return Kl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Kl(e);
}
function j8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Nf(e, t);
}
function Nf(e, t) {
  return Nf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Nf(e, t);
}
function $a(e) {
  return R8(e) || N8(e) || kx(e) || D8();
}
function D8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kx(e, t) {
  if (e) {
    if (typeof e == "string") return Rf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rf(e, t);
  }
}
function N8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function R8(e) {
  if (Array.isArray(e)) return Rf(e);
}
function Rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yg(e, t) {
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
    t % 2 ? yg(Object(r), !0).forEach(function(n) {
      ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ye(e, t, r) {
  return t = Bx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bx(e) {
  var t = k8(e, "string");
  return Oa(t) == "symbol" ? t : t + "";
}
function k8(e, t) {
  if (Oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var B8 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, L8 = {
  width: "100%",
  height: "100%"
}, Lx = {
  x: 0,
  y: 0
};
function No(e) {
  return e;
}
var H8 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, F8 = function(t, r, n, a) {
  var i = r.find(function(u) {
    return u && u.index === n;
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
      return Y(Y(Y({}, a), rt(a.cx, a.cy, l, o)), {}, {
        angle: o,
        radius: l
      });
    }
    var s = i.coordinate, c = a.angle;
    return Y(Y(Y({}, a), rt(a.cx, a.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return Lx;
}, Ws = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(l, s) {
    var c = s.props.data;
    return c && c.length ? [].concat($a(l), $a(c)) : l;
  }, []);
  return o.length > 0 ? o : t && t.length && ee(a) && ee(i) ? t.slice(a, i + 1) : [];
};
function Hx(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var kf = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, l = Ws(r, t);
  return n < 0 || !i || !i.length || n >= l.length ? null : i.reduce(function(s, c) {
    var u, f = (u = c.props.data) !== null && u !== void 0 ? u : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? l : f;
      d = Go(p, o.dataKey, a);
    } else
      d = f && f[n] || l[n];
    return d ? [].concat($a(s), [C0(c, d)]) : s;
  }, []);
}, bg = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = H8(i, n), l = t.orderedTooltipTicks, s = t.tooltipAxis, c = t.tooltipTicks, u = rH(o, l, c, s);
  if (u >= 0 && c) {
    var f = c[u] && c[u].value, d = kf(t, r, u, f), p = F8(n, l, u, i);
    return {
      activeTooltipIndex: u,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, W8 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, l = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, u = t.layout, f = t.children, d = t.stackOffset, p = x0(u, i);
  return n.reduce(function(v, m) {
    var h, y = m.type.defaultProps !== void 0 ? Y(Y({}, m.type.defaultProps), m.props) : m.props, w = y.type, S = y.dataKey, O = y.allowDataOverflow, g = y.allowDuplicatedCategory, x = y.scale, $ = y.ticks, C = y.includeHidden, _ = y[o];
    if (v[_])
      return v;
    var M = Ws(t.data, {
      graphicalItems: a.filter(function(B) {
        var W, U = o in B.props ? B.props[o] : (W = B.type.defaultProps) === null || W === void 0 ? void 0 : W[o];
        return U === _;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), P = M.length, I, N, j;
    h8(y.domain, O, w) && (I = Zu(y.domain, null, O), p && (w === "number" || x !== "auto") && (j = pi(M, S, "category")));
    var E = Hx(w);
    if (!I || I.length === 0) {
      var A, D = (A = y.domain) !== null && A !== void 0 ? A : E;
      if (S) {
        if (I = pi(M, S, w), w === "category" && p) {
          var R = zC(I);
          g && R ? (N = I, I = Nl(0, P)) : g || (I = zv(D, I, m).reduce(function(B, W) {
            return B.indexOf(W) >= 0 ? B : [].concat($a(B), [W]);
          }, []));
        } else if (w === "category")
          g ? I = I.filter(function(B) {
            return B !== "" && !Ae(B);
          }) : I = zv(D, I, m).reduce(function(B, W) {
            return B.indexOf(W) >= 0 || W === "" || Ae(W) ? B : [].concat($a(B), [W]);
          }, []);
        else if (w === "number") {
          var k = lH(M, a.filter(function(B) {
            var W, U, G = o in B.props ? B.props[o] : (W = B.type.defaultProps) === null || W === void 0 ? void 0 : W[o], Q = "hide" in B.props ? B.props.hide : (U = B.type.defaultProps) === null || U === void 0 ? void 0 : U.hide;
            return G === _ && (C || !Q);
          }), S, i, u);
          k && (I = k);
        }
        p && (w === "number" || x !== "auto") && (j = pi(M, S, "category"));
      } else p ? I = Nl(0, P) : l && l[_] && l[_].hasStack && w === "number" ? I = d === "expand" ? [0, 1] : $0(l[_].stackGroups, s, c) : I = b0(M, a.filter(function(B) {
        var W = o in B.props ? B.props[o] : B.type.defaultProps[o], U = "hide" in B.props ? B.props.hide : B.type.defaultProps.hide;
        return W === _ && (C || !U);
      }), w, u, !0);
      if (w === "number")
        I = Df(f, I, _, i, $), D && (I = Zu(D, I, O));
      else if (w === "category" && D) {
        var L = D, H = I.every(function(B) {
          return L.indexOf(B) >= 0;
        });
        H && (I = L);
      }
    }
    return Y(Y({}, v), {}, ye({}, _, Y(Y({}, y), {}, {
      axisType: i,
      domain: I,
      categoricalDomain: j,
      duplicateDomain: N,
      originalDomain: (h = y.domain) !== null && h !== void 0 ? h : E,
      isCategorical: p,
      layout: u
    })));
  }, {});
}, V8 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, l = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, u = t.layout, f = t.children, d = Ws(t.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), p = d.length, v = x0(u, i), m = -1;
  return n.reduce(function(h, y) {
    var w = y.type.defaultProps !== void 0 ? Y(Y({}, y.type.defaultProps), y.props) : y.props, S = w[o], O = Hx("number");
    if (!h[S]) {
      m++;
      var g;
      return v ? g = Nl(0, p) : l && l[S] && l[S].hasStack ? (g = $0(l[S].stackGroups, s, c), g = Df(f, g, S, i)) : (g = Zu(O, b0(d, n.filter(function(x) {
        var $, C, _ = o in x.props ? x.props[o] : ($ = x.type.defaultProps) === null || $ === void 0 ? void 0 : $[o], M = "hide" in x.props ? x.props.hide : (C = x.type.defaultProps) === null || C === void 0 ? void 0 : C.hide;
        return _ === S && !M;
      }), "number", u), a.defaultProps.allowDataOverflow), g = Df(f, g, S, i)), Y(Y({}, h), {}, ye({}, S, Y(Y({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: Xt(B8, "".concat(i, ".").concat(m % 2), null),
        domain: g,
        originalDomain: O,
        isCategorical: v,
        layout: u
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return h;
  }, {});
}, z8 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, l = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, u = t.children, f = "".concat(a, "Id"), d = rr(u, i), p = {};
  return d && d.length ? p = W8(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: l,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (p = V8(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: l,
    dataStartIndex: s,
    dataEndIndex: c
  })), p;
}, U8 = function(t) {
  var r = Hn(t), n = wn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Sd(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Sl(r, n)
  };
}, xg = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = qt(r, pa), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, Y8 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = jr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, wg = function(t) {
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
}, q8 = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, l = t.yAxisMap, s = l === void 0 ? {} : l, c = n.width, u = n.height, f = n.children, d = n.margin || {}, p = qt(f, pa), v = qt(f, qn), m = Object.keys(s).reduce(function(g, x) {
    var $ = s[x], C = $.orientation;
    return !$.mirror && !$.hide ? Y(Y({}, g), {}, ye({}, C, g[C] + $.width)) : g;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), h = Object.keys(o).reduce(function(g, x) {
    var $ = o[x], C = $.orientation;
    return !$.mirror && !$.hide ? Y(Y({}, g), {}, ye({}, C, Xt(g, "".concat(C)) + $.height)) : g;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), y = Y(Y({}, h), m), w = y.bottom;
  p && (y.bottom += p.props.height || pa.defaultProps.height), v && r && (y = iH(y, a, n, r));
  var S = c - y.left - y.right, O = u - y.top - y.bottom;
  return Y(Y({
    brushBottom: w
  }, y), {}, {
    // never return negative values for height and width
    width: Math.max(S, 0),
    height: Math.max(O, 0)
  });
}, G8 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Fx = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, l = o === void 0 ? ["axis"] : o, s = t.axisComponents, c = t.legendContent, u = t.formatAxisMap, f = t.defaultProps, d = function(y, w) {
    var S = w.graphicalItems, O = w.stackGroups, g = w.offset, x = w.updateId, $ = w.dataStartIndex, C = w.dataEndIndex, _ = y.barSize, M = y.layout, P = y.barGap, I = y.barCategoryGap, N = y.maxBarSize, j = wg(M), E = j.numericAxisName, A = j.cateAxisName, D = Y8(S), R = [];
    return S.forEach(function(k, L) {
      var H = Ws(y.data, {
        graphicalItems: [k],
        dataStartIndex: $,
        dataEndIndex: C
      }), B = k.type.defaultProps !== void 0 ? Y(Y({}, k.type.defaultProps), k.props) : k.props, W = B.dataKey, U = B.maxBarSize, G = B["".concat(E, "Id")], Q = B["".concat(A, "Id")], ne = {}, te = s.reduce(function(Te, Ne) {
        var Ge, Qe, Ke = w["".concat(Ne.axisType, "Map")], Ue = B["".concat(Ne.axisType, "Id")];
        Ke && Ke[Ue] || Ne.axisType === "zAxis" || (Oe.env.NODE_ENV !== "production" ? Ft(!1, "Specifying a(n) ".concat(Ne.axisType, "Id requires a corresponding ").concat(
          Ne.axisType,
          "Id on the targeted graphical component "
        ).concat((Ge = k == null || (Qe = k.type) === null || Qe === void 0 ? void 0 : Qe.displayName) !== null && Ge !== void 0 ? Ge : "")) : Ft());
        var Ve = Ke[Ue];
        return Y(Y({}, Te), {}, ye(ye({}, Ne.axisType, Ve), "".concat(Ne.axisType, "Ticks"), wn(Ve)));
      }, ne), z = te[A], K = te["".concat(A, "Ticks")], q = O && O[G] && O[G].hasStack && mH(k, O[G].stackGroups), F = jr(k.type).indexOf("Bar") >= 0, J = Sl(z, K), Z = [], le = D && nH({
        barSize: _,
        stackGroups: O,
        totalSize: G8(te, A)
      });
      if (F) {
        var re, ae, de = Ae(U) ? N : U, $e = (re = (ae = Sl(z, K, !0)) !== null && ae !== void 0 ? ae : de) !== null && re !== void 0 ? re : 0;
        Z = aH({
          barGap: P,
          barCategoryGap: I,
          bandSize: $e !== J ? $e : J,
          sizeList: le[Q],
          maxBarSize: de
        }), $e !== J && (Z = Z.map(function(Te) {
          return Y(Y({}, Te), {}, {
            position: Y(Y({}, Te.position), {}, {
              offset: Te.position.offset - $e / 2
            })
          });
        }));
      }
      var Be = k && k.type && k.type.getComposedData;
      Be && R.push({
        props: Y(Y({}, Be(Y(Y({}, te), {}, {
          displayedData: H,
          props: y,
          dataKey: W,
          item: k,
          bandSize: J,
          barPosition: Z,
          offset: g,
          stackedData: q,
          layout: M,
          dataStartIndex: $,
          dataEndIndex: C
        }))), {}, ye(ye(ye({
          key: k.key || "item-".concat(L)
        }, E, te[E]), A, te[A]), "animationId", x)),
        childIndex: rP(k, y.children),
        item: k
      });
    }), R;
  }, p = function(y, w) {
    var S = y.props, O = y.dataStartIndex, g = y.dataEndIndex, x = y.updateId;
    if (!kp({
      props: S
    }))
      return null;
    var $ = S.children, C = S.layout, _ = S.stackOffset, M = S.data, P = S.reverseStackOrder, I = wg(C), N = I.numericAxisName, j = I.cateAxisName, E = rr($, n), A = hH(M, E, "".concat(N, "Id"), "".concat(j, "Id"), _, P), D = s.reduce(function(B, W) {
      var U = "".concat(W.axisType, "Map");
      return Y(Y({}, B), {}, ye({}, U, z8(S, Y(Y({}, W), {}, {
        graphicalItems: E,
        stackGroups: W.axisType === N && A,
        dataStartIndex: O,
        dataEndIndex: g
      }))));
    }, {}), R = q8(Y(Y({}, D), {}, {
      props: S,
      graphicalItems: E
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(D).forEach(function(B) {
      D[B] = u(S, D[B], R, B.replace("Map", ""), r);
    });
    var k = D["".concat(j, "Map")], L = U8(k), H = d(S, Y(Y({}, D), {}, {
      dataStartIndex: O,
      dataEndIndex: g,
      updateId: x,
      graphicalItems: E,
      stackGroups: A,
      offset: R
    }));
    return Y(Y({
      formattedGraphicalItems: H,
      graphicalItems: E,
      offset: R,
      stackGroups: A
    }, L), D);
  }, v = /* @__PURE__ */ function(h) {
    function y(w) {
      var S, O, g;
      return _8(this, y), g = T8(this, y, [w]), ye(g, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), ye(g, "accessibilityManager", new p8()), ye(g, "handleLegendBBoxUpdate", function(x) {
        if (x) {
          var $ = g.state, C = $.dataStartIndex, _ = $.dataEndIndex, M = $.updateId;
          g.setState(Y({
            legendBBox: x
          }, p({
            props: g.props,
            dataStartIndex: C,
            dataEndIndex: _,
            updateId: M
          }, Y(Y({}, g.state), {}, {
            legendBBox: x
          }))));
        }
      }), ye(g, "handleReceiveSyncEvent", function(x, $, C) {
        if (g.props.syncId === x) {
          if (C === g.eventEmitterSymbol && typeof g.props.syncMethod != "function")
            return;
          g.applySyncEvent($);
        }
      }), ye(g, "handleBrushChange", function(x) {
        var $ = x.startIndex, C = x.endIndex;
        if ($ !== g.state.dataStartIndex || C !== g.state.dataEndIndex) {
          var _ = g.state.updateId;
          g.setState(function() {
            return Y({
              dataStartIndex: $,
              dataEndIndex: C
            }, p({
              props: g.props,
              dataStartIndex: $,
              dataEndIndex: C,
              updateId: _
            }, g.state));
          }), g.triggerSyncEvent({
            dataStartIndex: $,
            dataEndIndex: C
          });
        }
      }), ye(g, "handleMouseEnter", function(x) {
        var $ = g.getMouseInfo(x);
        if ($) {
          var C = Y(Y({}, $), {}, {
            isTooltipActive: !0
          });
          g.setState(C), g.triggerSyncEvent(C);
          var _ = g.props.onMouseEnter;
          Pe(_) && _(C, x);
        }
      }), ye(g, "triggeredAfterMouseMove", function(x) {
        var $ = g.getMouseInfo(x), C = $ ? Y(Y({}, $), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        g.setState(C), g.triggerSyncEvent(C);
        var _ = g.props.onMouseMove;
        Pe(_) && _(C, x);
      }), ye(g, "handleItemMouseEnter", function(x) {
        g.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: x,
            activePayload: x.tooltipPayload,
            activeCoordinate: x.tooltipPosition || {
              x: x.cx,
              y: x.cy
            }
          };
        });
      }), ye(g, "handleItemMouseLeave", function() {
        g.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), ye(g, "handleMouseMove", function(x) {
        x.persist(), g.throttleTriggeredAfterMouseMove(x);
      }), ye(g, "handleMouseLeave", function(x) {
        g.throttleTriggeredAfterMouseMove.cancel();
        var $ = {
          isTooltipActive: !1
        };
        g.setState($), g.triggerSyncEvent($);
        var C = g.props.onMouseLeave;
        Pe(C) && C($, x);
      }), ye(g, "handleOuterEvent", function(x) {
        var $ = tP(x), C = Xt(g.props, "".concat($));
        if ($ && Pe(C)) {
          var _, M;
          /.*touch.*/i.test($) ? M = g.getMouseInfo(x.changedTouches[0]) : M = g.getMouseInfo(x), C((_ = M) !== null && _ !== void 0 ? _ : {}, x);
        }
      }), ye(g, "handleClick", function(x) {
        var $ = g.getMouseInfo(x);
        if ($) {
          var C = Y(Y({}, $), {}, {
            isTooltipActive: !0
          });
          g.setState(C), g.triggerSyncEvent(C);
          var _ = g.props.onClick;
          Pe(_) && _(C, x);
        }
      }), ye(g, "handleMouseDown", function(x) {
        var $ = g.props.onMouseDown;
        if (Pe($)) {
          var C = g.getMouseInfo(x);
          $(C, x);
        }
      }), ye(g, "handleMouseUp", function(x) {
        var $ = g.props.onMouseUp;
        if (Pe($)) {
          var C = g.getMouseInfo(x);
          $(C, x);
        }
      }), ye(g, "handleTouchMove", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && g.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
      }), ye(g, "handleTouchStart", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && g.handleMouseDown(x.changedTouches[0]);
      }), ye(g, "handleTouchEnd", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && g.handleMouseUp(x.changedTouches[0]);
      }), ye(g, "triggerSyncEvent", function(x) {
        g.props.syncId !== void 0 && Kc.emit(Xc, g.props.syncId, x, g.eventEmitterSymbol);
      }), ye(g, "applySyncEvent", function(x) {
        var $ = g.props, C = $.layout, _ = $.syncMethod, M = g.state.updateId, P = x.dataStartIndex, I = x.dataEndIndex;
        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
          g.setState(Y({
            dataStartIndex: P,
            dataEndIndex: I
          }, p({
            props: g.props,
            dataStartIndex: P,
            dataEndIndex: I,
            updateId: M
          }, g.state)));
        else if (x.activeTooltipIndex !== void 0) {
          var N = x.chartX, j = x.chartY, E = x.activeTooltipIndex, A = g.state, D = A.offset, R = A.tooltipTicks;
          if (!D)
            return;
          if (typeof _ == "function")
            E = _(R, x);
          else if (_ === "value") {
            E = -1;
            for (var k = 0; k < R.length; k++)
              if (R[k].value === x.activeLabel) {
                E = k;
                break;
              }
          }
          var L = Y(Y({}, D), {}, {
            x: D.left,
            y: D.top
          }), H = Math.min(N, L.x + L.width), B = Math.min(j, L.y + L.height), W = R[E] && R[E].value, U = kf(g.state, g.props.data, E), G = R[E] ? {
            x: C === "horizontal" ? R[E].coordinate : H,
            y: C === "horizontal" ? B : R[E].coordinate
          } : Lx;
          g.setState(Y(Y({}, x), {}, {
            activeLabel: W,
            activeCoordinate: G,
            activePayload: U,
            activeTooltipIndex: E
          }));
        } else
          g.setState(x);
      }), ye(g, "renderCursor", function(x) {
        var $, C = g.state, _ = C.isTooltipActive, M = C.activeCoordinate, P = C.activePayload, I = C.offset, N = C.activeTooltipIndex, j = C.tooltipAxisBandSize, E = g.getTooltipEventType(), A = ($ = x.props.active) !== null && $ !== void 0 ? $ : _, D = g.props.layout, R = x.key || "_recharts-cursor";
        return /* @__PURE__ */ T.createElement(x8, {
          key: R,
          activeCoordinate: M,
          activePayload: P,
          activeTooltipIndex: N,
          chartName: r,
          element: x,
          isActive: A,
          layout: D,
          offset: I,
          tooltipAxisBandSize: j,
          tooltipEventType: E
        });
      }), ye(g, "renderPolarAxis", function(x, $, C) {
        var _ = Xt(x, "type.axisType"), M = Xt(g.state, "".concat(_, "Map")), P = x.type.defaultProps, I = P !== void 0 ? Y(Y({}, P), x.props) : x.props, N = M && M[I["".concat(_, "Id")]];
        return /* @__PURE__ */ b.cloneElement(x, Y(Y({}, N), {}, {
          className: De(_, N.className),
          key: x.key || "".concat($, "-").concat(C),
          ticks: wn(N, !0)
        }));
      }), ye(g, "renderPolarGrid", function(x) {
        var $ = x.props, C = $.radialLines, _ = $.polarAngles, M = $.polarRadius, P = g.state, I = P.radiusAxisMap, N = P.angleAxisMap, j = Hn(I), E = Hn(N), A = E.cx, D = E.cy, R = E.innerRadius, k = E.outerRadius;
        return /* @__PURE__ */ b.cloneElement(x, {
          polarAngles: Array.isArray(_) ? _ : wn(E, !0).map(function(L) {
            return L.coordinate;
          }),
          polarRadius: Array.isArray(M) ? M : wn(j, !0).map(function(L) {
            return L.coordinate;
          }),
          cx: A,
          cy: D,
          innerRadius: R,
          outerRadius: k,
          key: x.key || "polar-grid",
          radialLines: C
        });
      }), ye(g, "renderLegend", function() {
        var x = g.state.formattedGraphicalItems, $ = g.props, C = $.children, _ = $.width, M = $.height, P = g.props.margin || {}, I = _ - (P.left || 0) - (P.right || 0), N = g0({
          children: C,
          formattedGraphicalItems: x,
          legendWidth: I,
          legendContent: c
        });
        if (!N)
          return null;
        var j = N.item, E = gg(N, w8);
        return /* @__PURE__ */ b.cloneElement(j, Y(Y({}, E), {}, {
          chartWidth: _,
          chartHeight: M,
          margin: P,
          onBBoxUpdate: g.handleLegendBBoxUpdate
        }));
      }), ye(g, "renderTooltip", function() {
        var x, $ = g.props, C = $.children, _ = $.accessibilityLayer, M = qt(C, lr);
        if (!M)
          return null;
        var P = g.state, I = P.isTooltipActive, N = P.activeCoordinate, j = P.activePayload, E = P.activeLabel, A = P.offset, D = (x = M.props.active) !== null && x !== void 0 ? x : I;
        return /* @__PURE__ */ b.cloneElement(M, {
          viewBox: Y(Y({}, A), {}, {
            x: A.left,
            y: A.top
          }),
          active: D,
          label: E,
          payload: D ? j : [],
          coordinate: N,
          accessibilityLayer: _
        });
      }), ye(g, "renderBrush", function(x) {
        var $ = g.props, C = $.margin, _ = $.data, M = g.state, P = M.offset, I = M.dataStartIndex, N = M.dataEndIndex, j = M.updateId;
        return /* @__PURE__ */ b.cloneElement(x, {
          key: x.key || "_recharts-brush",
          onChange: To(g.handleBrushChange, x.props.onChange),
          data: _,
          x: ee(x.props.x) ? x.props.x : P.left,
          y: ee(x.props.y) ? x.props.y : P.top + P.height + P.brushBottom - (C.bottom || 0),
          width: ee(x.props.width) ? x.props.width : P.width,
          startIndex: I,
          endIndex: N,
          updateId: "brush-".concat(j)
        });
      }), ye(g, "renderReferenceElement", function(x, $, C) {
        if (!x)
          return null;
        var _ = g, M = _.clipPathId, P = g.state, I = P.xAxisMap, N = P.yAxisMap, j = P.offset, E = x.type.defaultProps || {}, A = x.props, D = A.xAxisId, R = D === void 0 ? E.xAxisId : D, k = A.yAxisId, L = k === void 0 ? E.yAxisId : k;
        return /* @__PURE__ */ b.cloneElement(x, {
          key: x.key || "".concat($, "-").concat(C),
          xAxis: I[R],
          yAxis: N[L],
          viewBox: {
            x: j.left,
            y: j.top,
            width: j.width,
            height: j.height
          },
          clipPathId: M
        });
      }), ye(g, "renderActivePoints", function(x) {
        var $ = x.item, C = x.activePoint, _ = x.basePoint, M = x.childIndex, P = x.isRange, I = [], N = $.props.key, j = $.item.type.defaultProps !== void 0 ? Y(Y({}, $.item.type.defaultProps), $.item.props) : $.item.props, E = j.activeDot, A = j.dataKey, D = Y(Y({
          index: M,
          dataKey: A,
          cx: C.x,
          cy: C.y,
          r: 4,
          fill: Gd($.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: C.payload,
          value: C.value
        }, me(E, !1)), Ko(E));
        return I.push(y.renderActiveDot(E, D, "".concat(N, "-activePoint-").concat(M))), _ ? I.push(y.renderActiveDot(E, Y(Y({}, D), {}, {
          cx: _.x,
          cy: _.y
        }), "".concat(N, "-basePoint-").concat(M))) : P && I.push(null), I;
      }), ye(g, "renderGraphicChild", function(x, $, C) {
        var _ = g.filterFormatItem(x, $, C);
        if (!_)
          return null;
        var M = g.getTooltipEventType(), P = g.state, I = P.isTooltipActive, N = P.tooltipAxis, j = P.activeTooltipIndex, E = P.activeLabel, A = g.props.children, D = qt(A, lr), R = _.props, k = R.points, L = R.isRange, H = R.baseLine, B = _.item.type.defaultProps !== void 0 ? Y(Y({}, _.item.type.defaultProps), _.item.props) : _.item.props, W = B.activeDot, U = B.hide, G = B.activeBar, Q = B.activeShape, ne = !!(!U && I && D && (W || G || Q)), te = {};
        M !== "axis" && D && D.props.trigger === "click" ? te = {
          onClick: To(g.handleItemMouseEnter, x.props.onClick)
        } : M !== "axis" && (te = {
          onMouseLeave: To(g.handleItemMouseLeave, x.props.onMouseLeave),
          onMouseEnter: To(g.handleItemMouseEnter, x.props.onMouseEnter)
        });
        var z = /* @__PURE__ */ b.cloneElement(x, Y(Y({}, _.props), te));
        function K(Ne) {
          return typeof N.dataKey == "function" ? N.dataKey(Ne.payload) : null;
        }
        if (ne)
          if (j >= 0) {
            var q, F;
            if (N.dataKey && !N.allowDuplicatedCategory) {
              var J = typeof N.dataKey == "function" ? K : "payload.".concat(N.dataKey.toString());
              q = Go(k, J, E), F = L && H && Go(H, J, E);
            } else
              q = k == null ? void 0 : k[j], F = L && H && H[j];
            if (Q || G) {
              var Z = x.props.activeIndex !== void 0 ? x.props.activeIndex : j;
              return [/* @__PURE__ */ b.cloneElement(x, Y(Y(Y({}, _.props), te), {}, {
                activeIndex: Z
              })), null, null];
            }
            if (!Ae(q))
              return [z].concat($a(g.renderActivePoints({
                item: _,
                activePoint: q,
                basePoint: F,
                childIndex: j,
                isRange: L
              })));
          } else {
            var le, re = (le = g.getItemByXY(g.state.activeCoordinate)) !== null && le !== void 0 ? le : {
              graphicalItem: z
            }, ae = re.graphicalItem, de = ae.item, $e = de === void 0 ? x : de, Be = ae.childIndex, Te = Y(Y(Y({}, _.props), te), {}, {
              activeIndex: Be
            });
            return [/* @__PURE__ */ b.cloneElement($e, Te), null, null];
          }
        return L ? [z, null, null] : [z, null];
      }), ye(g, "renderCustomized", function(x, $, C) {
        return /* @__PURE__ */ b.cloneElement(x, Y(Y({
          key: "recharts-customized-".concat(C)
        }, g.props), g.state));
      }), ye(g, "renderMap", {
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
      }), g.clipPathId = "".concat((S = w.id) !== null && S !== void 0 ? S : ja("recharts"), "-clip"), g.throttleTriggeredAfterMouseMove = vb(g.triggeredAfterMouseMove, (O = w.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), g.state = {}, g;
    }
    return j8(y, h), A8(y, [{
      key: "componentDidMount",
      value: function() {
        var S, O;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (S = this.props.margin.left) !== null && S !== void 0 ? S : 0,
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
        var S = this.props, O = S.children, g = S.data, x = S.height, $ = S.layout, C = qt(O, lr);
        if (C) {
          var _ = C.props.defaultIndex;
          if (!(typeof _ != "number" || _ < 0 || _ > this.state.tooltipTicks.length - 1)) {
            var M = this.state.tooltipTicks[_] && this.state.tooltipTicks[_].value, P = kf(this.state, g, _, M), I = this.state.tooltipTicks[_].coordinate, N = (this.state.offset.top + x) / 2, j = $ === "horizontal", E = j ? {
              x: I,
              y: N
            } : {
              y: I,
              x: N
            }, A = this.state.formattedGraphicalItems.find(function(R) {
              var k = R.item;
              return k.type.name === "Scatter";
            });
            A && (E = Y(Y({}, E), A.props.points[_].tooltipPosition), P = A.props.points[_].tooltipPayload);
            var D = {
              activeTooltipIndex: _,
              isTooltipActive: !0,
              activeLabel: M,
              activePayload: P,
              activeCoordinate: E
            };
            this.setState(D), this.renderCursor(C), this.accessibilityManager.setIndex(_);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(S, O) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== O.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== S.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== S.margin) {
          var g, x;
          this.accessibilityManager.setDetails({
            offset: {
              left: (g = this.props.margin.left) !== null && g !== void 0 ? g : 0,
              top: (x = this.props.margin.top) !== null && x !== void 0 ? x : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(S) {
        du([qt(S.children, lr)], [qt(this.props.children, lr)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var S = qt(this.props.children, lr);
        if (S && typeof S.props.shared == "boolean") {
          var O = S.props.shared ? "axis" : "item";
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
      value: function(S) {
        if (!this.container)
          return null;
        var O = this.container, g = O.getBoundingClientRect(), x = TN(g), $ = {
          chartX: Math.round(S.pageX - x.left),
          chartY: Math.round(S.pageY - x.top)
        }, C = g.width / O.offsetWidth || 1, _ = this.inRange($.chartX, $.chartY, C);
        if (!_)
          return null;
        var M = this.state, P = M.xAxisMap, I = M.yAxisMap, N = this.getTooltipEventType();
        if (N !== "axis" && P && I) {
          var j = Hn(P).scale, E = Hn(I).scale, A = j && j.invert ? j.invert($.chartX) : null, D = E && E.invert ? E.invert($.chartY) : null;
          return Y(Y({}, $), {}, {
            xValue: A,
            yValue: D
          });
        }
        var R = bg(this.state, this.props.data, this.props.layout, _);
        return R ? Y(Y({}, $), R) : null;
      }
    }, {
      key: "inRange",
      value: function(S, O) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = this.props.layout, $ = S / g, C = O / g;
        if (x === "horizontal" || x === "vertical") {
          var _ = this.state.offset, M = $ >= _.left && $ <= _.left + _.width && C >= _.top && C <= _.top + _.height;
          return M ? {
            x: $,
            y: C
          } : null;
        }
        var P = this.state, I = P.angleAxisMap, N = P.radiusAxisMap;
        if (I && N) {
          var j = Hn(I);
          return qv({
            x: $,
            y: C
          }, j);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var S = this.props.children, O = this.getTooltipEventType(), g = qt(S, lr), x = {};
        g && O === "axis" && (g.props.trigger === "click" ? x = {
          onClick: this.handleClick
        } : x = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var $ = Ko(this.props, this.handleOuterEvent);
        return Y(Y({}, $), x);
      }
    }, {
      key: "addListener",
      value: function() {
        Kc.on(Xc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Kc.removeListener(Xc, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(S, O, g) {
        for (var x = this.state.formattedGraphicalItems, $ = 0, C = x.length; $ < C; $++) {
          var _ = x[$];
          if (_.item === S || _.props.key === S.key || O === jr(_.item.type) && g === _.childIndex)
            return _;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var S = this.clipPathId, O = this.state.offset, g = O.left, x = O.top, $ = O.height, C = O.width;
        return /* @__PURE__ */ T.createElement("defs", null, /* @__PURE__ */ T.createElement("clipPath", {
          id: S
        }, /* @__PURE__ */ T.createElement("rect", {
          x: g,
          y: x,
          height: $,
          width: C
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var S = this.state.xAxisMap;
        return S ? Object.entries(S).reduce(function(O, g) {
          var x = mg(g, 2), $ = x[0], C = x[1];
          return Y(Y({}, O), {}, ye({}, $, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var S = this.state.yAxisMap;
        return S ? Object.entries(S).reduce(function(O, g) {
          var x = mg(g, 2), $ = x[0], C = x[1];
          return Y(Y({}, O), {}, ye({}, $, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(S) {
        var O;
        return (O = this.state.xAxisMap) === null || O === void 0 || (O = O[S]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(S) {
        var O;
        return (O = this.state.yAxisMap) === null || O === void 0 || (O = O[S]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(S) {
        var O = this.state, g = O.formattedGraphicalItems, x = O.activeItem;
        if (g && g.length)
          for (var $ = 0, C = g.length; $ < C; $++) {
            var _ = g[$], M = _.props, P = _.item, I = P.type.defaultProps !== void 0 ? Y(Y({}, P.type.defaultProps), P.props) : P.props, N = jr(P.type);
            if (N === "Bar") {
              var j = (M.data || []).find(function(R) {
                return Q3(S, R);
              });
              if (j)
                return {
                  graphicalItem: _,
                  payload: j
                };
            } else if (N === "RadialBar") {
              var E = (M.data || []).find(function(R) {
                return qv(S, R);
              });
              if (E)
                return {
                  graphicalItem: _,
                  payload: E
                };
            } else if (Is(_, x) || js(_, x) || qi(_, x)) {
              var A = HV({
                graphicalItem: _,
                activeTooltipItem: x,
                itemData: I.data
              }), D = I.activeIndex === void 0 ? A : I.activeIndex;
              return {
                graphicalItem: Y(Y({}, _), {}, {
                  childIndex: D
                }),
                payload: qi(_, x) ? I.data[A] : _.props.data[A]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var S = this;
        if (!kp(this))
          return null;
        var O = this.props, g = O.children, x = O.className, $ = O.width, C = O.height, _ = O.style, M = O.compact, P = O.title, I = O.desc, N = gg(O, S8), j = me(N, !1);
        if (M)
          return /* @__PURE__ */ T.createElement(tg, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ T.createElement(hu, Un({}, j, {
            width: $,
            height: C,
            title: P,
            desc: I
          }), this.renderClipPath(), Lp(g, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var E, A;
          j.tabIndex = (E = this.props.tabIndex) !== null && E !== void 0 ? E : 0, j.role = (A = this.props.role) !== null && A !== void 0 ? A : "application", j.onKeyDown = function(R) {
            S.accessibilityManager.keyboardEvent(R);
          }, j.onFocus = function() {
            S.accessibilityManager.focus();
          };
        }
        var D = this.parseEventsOfWrapper();
        return /* @__PURE__ */ T.createElement(tg, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ T.createElement("div", Un({
          className: De("recharts-wrapper", x),
          style: Y({
            position: "relative",
            cursor: "default",
            width: $,
            height: C
          }, _)
        }, D, {
          ref: function(k) {
            S.container = k;
          }
        }), /* @__PURE__ */ T.createElement(hu, Un({}, j, {
          width: $,
          height: C,
          title: P,
          desc: I,
          style: L8
        }), this.renderClipPath(), Lp(g, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(b.Component);
  ye(v, "displayName", r), ye(v, "defaultProps", Y({
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
  }, f)), ye(v, "getDerivedStateFromProps", function(h, y) {
    var w = h.dataKey, S = h.data, O = h.children, g = h.width, x = h.height, $ = h.layout, C = h.stackOffset, _ = h.margin, M = y.dataStartIndex, P = y.dataEndIndex;
    if (y.updateId === void 0) {
      var I = xg(h);
      return Y(Y(Y({}, I), {}, {
        updateId: 0
      }, p(Y(Y({
        props: h
      }, I), {}, {
        updateId: 0
      }), y)), {}, {
        prevDataKey: w,
        prevData: S,
        prevWidth: g,
        prevHeight: x,
        prevLayout: $,
        prevStackOffset: C,
        prevMargin: _,
        prevChildren: O
      });
    }
    if (w !== y.prevDataKey || S !== y.prevData || g !== y.prevWidth || x !== y.prevHeight || $ !== y.prevLayout || C !== y.prevStackOffset || !Yn(_, y.prevMargin)) {
      var N = xg(h), j = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: y.chartX,
        chartY: y.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: y.isTooltipActive
      }, E = Y(Y({}, bg(y, S, $)), {}, {
        updateId: y.updateId + 1
      }), A = Y(Y(Y({}, N), j), E);
      return Y(Y(Y({}, A), p(Y({
        props: h
      }, A), y)), {}, {
        prevDataKey: w,
        prevData: S,
        prevWidth: g,
        prevHeight: x,
        prevLayout: $,
        prevStackOffset: C,
        prevMargin: _,
        prevChildren: O
      });
    }
    if (!du(O, y.prevChildren)) {
      var D, R, k, L, H = qt(O, pa), B = H && (D = (R = H.props) === null || R === void 0 ? void 0 : R.startIndex) !== null && D !== void 0 ? D : M, W = H && (k = (L = H.props) === null || L === void 0 ? void 0 : L.endIndex) !== null && k !== void 0 ? k : P, U = B !== M || W !== P, G = !Ae(S), Q = G && !U ? y.updateId : y.updateId + 1;
      return Y(Y({
        updateId: Q
      }, p(Y(Y({
        props: h
      }, y), {}, {
        updateId: Q,
        dataStartIndex: B,
        dataEndIndex: W
      }), y)), {}, {
        prevChildren: O,
        dataStartIndex: B,
        dataEndIndex: W
      });
    }
    return null;
  }), ye(v, "renderActiveDot", function(h, y, w) {
    var S;
    return /* @__PURE__ */ b.isValidElement(h) ? S = /* @__PURE__ */ b.cloneElement(h, y) : Pe(h) ? S = h(y) : S = /* @__PURE__ */ T.createElement(_s, y), /* @__PURE__ */ T.createElement(Fe, {
      className: "recharts-active-dot",
      key: w
    }, S);
  });
  var m = /* @__PURE__ */ b.forwardRef(function(y, w) {
    return /* @__PURE__ */ T.createElement(v, Un({}, y, {
      ref: w
    }));
  });
  return m.displayName = v.displayName, m;
}, K8 = Fx({
  chartName: "PieChart",
  GraphicalChild: Yr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Ms
  }, {
    axisType: "radiusAxis",
    AxisComp: As
  }],
  formatAxisMap: PH,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), X8 = Fx({
  chartName: "AreaChart",
  GraphicalChild: ln,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Hs
  }, {
    axisType: "yAxis",
    AxisComp: Fs
  }],
  formatAxisMap: x5
});
function Z8({ data: e, labels: t }) {
  const r = Math.max(...e), n = Math.min(...e), a = e.map((i, o) => ({
    name: t[o],
    value: i,
    label: i === r || i === n ? `$${ui(i)}` : null
  }));
  return /* @__PURE__ */ V.jsx(mb, { width: "100%", height: "100%", children: /* @__PURE__ */ V.jsxs(
    X8,
    {
      data: a,
      margin: { top: 20, right: 0, left: 0, bottom: 0 },
      children: [
        /* @__PURE__ */ V.jsx("defs", { children: /* @__PURE__ */ V.jsxs("linearGradient", { id: "colorValue", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ V.jsx("stop", { offset: "5%", stopColor: "#52c41a", stopOpacity: 0.1 }),
          /* @__PURE__ */ V.jsx("stop", { offset: "95%", stopColor: "#52c41a", stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ V.jsx(
          Hs,
          {
            dataKey: "name",
            hide: !0
          }
        ),
        /* @__PURE__ */ V.jsx(
          Fs,
          {
            hide: !0
          }
        ),
        /* @__PURE__ */ V.jsx(
          lr,
          {
            formatter: (i) => [`$${ui(i)}`],
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
        /* @__PURE__ */ V.jsx(
          ln,
          {
            type: "monotone",
            dataKey: "value",
            stroke: "#52c41a",
            strokeWidth: 2,
            fill: "url(#colorValue)",
            animationDuration: 1e3,
            label: ({ x: i, y: o, value: l }) => l === r || l === n ? /* @__PURE__ */ V.jsxs(
              "text",
              {
                x: i,
                y: o,
                dy: l === r ? -10 : 20,
                fill: "#262626",
                fontSize: 12,
                textAnchor: "middle",
                children: [
                  "$",
                  ui(l)
                ]
              }
            ) : null
          }
        )
      ]
    }
  ) });
}
function Q8({ data: e }) {
  const t = b.useMemo(() => {
    const r = e.reduce((n, a) => n + a.value, 0);
    return e.map((n) => ({
      ...n,
      value: r ? Number((n.value / r * 100).toFixed(2)) : 0
    }));
  }, [e]);
  return /* @__PURE__ */ V.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ V.jsx("div", { className: "flex-1", children: /* @__PURE__ */ V.jsx(mb, { width: "100%", height: "100%", children: /* @__PURE__ */ V.jsxs(K8, { children: [
      /* @__PURE__ */ V.jsx(
        Yr,
        {
          data: t,
          cx: "50%",
          cy: "50%",
          innerRadius: "75%",
          outerRadius: "100%",
          dataKey: "value",
          animationDuration: 1e3,
          children: e.map((r, n) => /* @__PURE__ */ V.jsx(vs, { fill: r.color }, `cell-${n}`))
        }
      ),
      /* @__PURE__ */ V.jsx(
        lr,
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
    /* @__PURE__ */ V.jsx("div", { className: "flex gap-4 mt-4 mx-auto", children: e.map((r, n) => /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-2", title: `$${r.value}`, children: [
      /* @__PURE__ */ V.jsx(
        "div",
        {
          className: "w-3 h-3 rounded-full",
          style: { backgroundColor: r.color }
        }
      ),
      /* @__PURE__ */ V.jsx("span", { className: "text-sm text-gray-600", children: r.label })
    ] }, n)) })
  ] });
}
const J8 = ["performanceChart"], e4 = async (e) => {
  try {
    const t = await Ji.get("/user-assets/performance-chart", {
      params: { address: e }
    });
    return {
      chartData: t.data.chartData,
      distribution: t.data.distribution
    };
  } catch (t) {
    throw Vf(t);
  }
};
function t4(e) {
  const { address: t } = es.all();
  return zg({
    queryKey: [...J8, t],
    queryFn: () => e4(t),
    enabled: (e == null ? void 0 : e.enabled) && !!t
  });
}
const r4 = {
  ETH: "#3d7dc9",
  MATIC: "#c08fec",
  TVWT: "#52c41a"
};
function n4() {
  const e = ts(), { address: t } = es.all(), [r, n] = b.useState("30D"), [a, i] = b.useState([]), [o, l] = b.useState([]), [s, c] = b.useState([]), { data: u, isFetched: f, refetch: d } = t4({
    enabled: !!t
  });
  b.useEffect(() => {
    f && p();
  }, [f]);
  const p = async () => {
    try {
      const m = (u == null ? void 0 : u.chartData) || [], h = m.map((O) => O.value), y = m.map((O) => O.date);
      i(h), l(y);
      const S = ((u == null ? void 0 : u.distribution) || []).map((O) => ({
        label: O.label,
        value: O.value,
        color: r4[O.label]
      }));
      c(S);
    } catch (m) {
      const h = Vf(m);
      ry.error(h.message);
    }
  }, v = (m) => {
    n(m), m === "7D" ? (i((u == null ? void 0 : u.chartData.slice(-7).map((h) => h.value)) || []), l((u == null ? void 0 : u.chartData.slice(-7).map((h) => h.date)) || [])) : (i((u == null ? void 0 : u.chartData.map((h) => h.value)) || []), l((u == null ? void 0 : u.chartData.map((h) => h.date)) || []));
  };
  return /* @__PURE__ */ V.jsxs("div", { children: [
    /* @__PURE__ */ V.jsx("div", { className: Ce(
      "text-[#111111] font-bold",
      "text-2xl mobile:text-[32px]",
      "mb-6"
    ), children: "Overview" }),
    /* @__PURE__ */ V.jsxs("div", { className: Ce(
      "flex flex-wrap justify-between",
      "gap-0 mobile:gap-[18px]"
    ), children: [
      /* @__PURE__ */ V.jsxs("div", { className: Ce(
        "border border-[#ebebeb] rounded-xl p-[20px]",
        "w-full tablet:w-[366px] laptop:w-[500px] desktop:w-[804px]"
      ), children: [
        /* @__PURE__ */ V.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ V.jsx("p", { className: "text-base text-[#111111] font-bold leading-tight", children: "Performance" }),
            /* @__PURE__ */ V.jsx(j1, { size: 14 })
          ] }),
          /* @__PURE__ */ V.jsx(
            P1,
            {
              value: r,
              onValueChange: (m) => v(m),
              children: /* @__PURE__ */ V.jsxs(_1, { className: "h-[28px] bg-[#f5f5f5]", children: [
                /* @__PURE__ */ V.jsx(
                  xp,
                  {
                    value: "7D",
                    className: Ce(
                      "h-[20px] text-base font-normal text-[#111111]",
                      "data-[state=active]:text-[#979797]"
                    ),
                    children: "7D"
                  }
                ),
                /* @__PURE__ */ V.jsx(
                  xp,
                  {
                    value: "30D",
                    className: Ce(
                      "h-[20px] text-base font-normal text-[#111111]",
                      "data-[state=active]:text-[#979797]"
                    ),
                    children: "30D"
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ V.jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ V.jsx(Z8, { data: a, labels: o }) })
      ] }),
      /* @__PURE__ */ V.jsxs("div", { className: Ce(
        "border border-[#ebebeb] rounded-xl p-[20px]",
        "flex-1"
      ), children: [
        /* @__PURE__ */ V.jsxs("div", { className: "flex justify-between items-center mb-[20px]", children: [
          /* @__PURE__ */ V.jsx("p", { className: "text-base text-[#111111] font-bold leading-tight", children: "Crypto allocation" }),
          /* @__PURE__ */ V.jsx("button", { className: "text-base text-[#727272]", onClick: () => e("/dashboard/viewall"), children: "View all" })
        ] }),
        /* @__PURE__ */ V.jsx("div", { className: "h-[200px]", children: /* @__PURE__ */ V.jsx(Q8, { data: s }) })
      ] })
    ] })
  ] });
}
const Wx = (e, t) => {
  const r = b.useContext(B1), n = b.useMemo(() => {
    var i;
    const o = t || wp[e], l = (i = r == null ? void 0 : r[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof o == "function" ? o() : o), l || {});
  }, [e, t, r]), a = b.useMemo(() => {
    const i = r == null ? void 0 : r.locale;
    return r != null && r.exist && !i ? wp.locale : i;
  }, [r]);
  return [n, a];
};
var a4 = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, i4 = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, o4 = "".concat(a4, " ").concat(i4).split(/[\s\n]+/), l4 = "aria-", s4 = "data-";
function Sg(e, t) {
  return e.indexOf(t) === 0;
}
function ep(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r;
  t === !1 ? r = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? r = {
    aria: !0
  } : r = ue({}, t);
  var n = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (r.aria && (a === "role" || Sg(a, l4)) || // Data
    r.data && Sg(a, s4) || // Attr
    r.attr && o4.includes(a)) && (n[a] = e[a]);
  }), n;
}
const Vx = (e) => {
  const [, , , , t] = Uf();
  return t ? `${e}-css-var` : "";
};
var c4 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, u4 = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: c4
  }));
}, tp = /* @__PURE__ */ b.forwardRef(u4);
Oe.env.NODE_ENV !== "production" && (tp.displayName = "LoadingOutlined");
var so = ue({}, N1), f4 = so.version, d4 = so.render, p4 = so.unmountComponentAtNode, Vs;
try {
  var h4 = Number((f4 || "").split(".")[0]);
  h4 >= 18 && (Vs = so.createRoot);
} catch {
}
function Og(e) {
  var t = so.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && An(t) === "object" && (t.usingClientEntryPoint = e);
}
var Xl = "__rc_react_root__";
function v4(e, t) {
  Og(!0);
  var r = t[Xl] || Vs(t);
  Og(!1), r.render(e), t[Xl] = r;
}
function m4(e, t) {
  d4(e, t);
}
function g4(e, t) {
  if (Vs) {
    v4(e, t);
    return;
  }
  m4(e, t);
}
function y4(e) {
  return Bf.apply(this, arguments);
}
function Bf() {
  return Bf = Yg(/* @__PURE__ */ Uo().mark(function e(t) {
    return Uo().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[Xl]) === null || a === void 0 || a.unmount(), delete t[Xl];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Bf.apply(this, arguments);
}
function b4(e) {
  p4(e);
}
function x4(e) {
  return Lf.apply(this, arguments);
}
function Lf() {
  return Lf = Yg(/* @__PURE__ */ Uo().mark(function e(t) {
    return Uo().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Vs === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", y4(t));
        case 2:
          b4(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), Lf.apply(this, arguments);
}
const w4 = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, S4 = L1("Wave", (e) => [w4(e)]), zx = `${H1}-wave-target`;
function Qc(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function O4(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return Qc(t) ? t : Qc(r) ? r : Qc(n) ? n : null;
}
function Jc(e) {
  return Number.isNaN(e) ? 0 : e;
}
const $4 = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = b.useRef(null), [i, o] = b.useState(null), [l, s] = b.useState([]), [c, u] = b.useState(0), [f, d] = b.useState(0), [p, v] = b.useState(0), [m, h] = b.useState(0), [y, w] = b.useState(!1), S = {
    left: c,
    top: f,
    width: p,
    height: m,
    borderRadius: l.map((x) => `${x}px`).join(" ")
  };
  i && (S["--wave-color"] = i);
  function O() {
    const x = getComputedStyle(r);
    o(O4(r));
    const $ = x.position === "static", {
      borderLeftWidth: C,
      borderTopWidth: _
    } = x;
    u($ ? r.offsetLeft : Jc(-parseFloat(C))), d($ ? r.offsetTop : Jc(-parseFloat(_))), v(r.offsetWidth), h(r.offsetHeight);
    const {
      borderTopLeftRadius: M,
      borderTopRightRadius: P,
      borderBottomLeftRadius: I,
      borderBottomRightRadius: N
    } = x;
    s([M, P, N, I].map((j) => Jc(parseFloat(j))));
  }
  if (b.useEffect(() => {
    if (r) {
      const x = Wt(() => {
        O(), w(!0);
      });
      let $;
      return typeof ResizeObserver < "u" && ($ = new ResizeObserver(O), $.observe(r)), () => {
        Wt.cancel(x), $ == null || $.disconnect();
      };
    }
  }, []), !y)
    return null;
  const g = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(zx));
  return /* @__PURE__ */ b.createElement(qg, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (x, $) => {
      var C;
      if ($.deadline || $.propertyName === "opacity") {
        const _ = (C = a.current) === null || C === void 0 ? void 0 : C.parentElement;
        x4(_).then(() => {
          _ == null || _.remove();
        });
      }
      return !1;
    }
  }, (x, $) => {
    let {
      className: C
    } = x;
    return /* @__PURE__ */ b.createElement("div", {
      ref: Yf(a, $),
      className: je(t, C, {
        "wave-quick": g
      }),
      style: S
    });
  });
}, C4 = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), g4(/* @__PURE__ */ b.createElement($4, Object.assign({}, t, {
    target: e
  })), a);
}, P4 = (e, t, r) => {
  const {
    wave: n
  } = b.useContext(en), [, a, i] = Uf(), o = ut((c) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${zx}`) || u, {
      showEffect: d
    } = n || {};
    (d || C4)(f, {
      className: t,
      token: a,
      component: r,
      event: c,
      hashId: i
    });
  }), l = b.useRef();
  return (c) => {
    Wt.cancel(l.current), l.current = Wt(() => {
      o(c);
    });
  };
}, Ux = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = b.useContext(en), i = b.useRef(null), o = a("wave"), [, l] = S4(o), s = P4(i, je(o, l), n);
  if (T.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== 1 || r)
      return;
    const f = (d) => {
      !Kg(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || s(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ T.isValidElement(t))
    return t ?? null;
  const c = F1(t) ? Yf(t.ref, i) : i;
  return Gg(t, {
    ref: c
  });
};
Oe.env.NODE_ENV !== "production" && (Ux.displayName = "Wave");
const rp = (e) => {
  const t = T.useContext(W1);
  return T.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
};
var _4 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Yx = /* @__PURE__ */ b.createContext(void 0), E4 = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = b.useContext(en), {
    prefixCls: n,
    size: a,
    className: i
  } = e, o = _4(e, ["prefixCls", "size", "className"]), l = t("btn-group", n), [, , s] = Uf();
  let c = "";
  switch (a) {
    case "large":
      c = "lg";
      break;
    case "small":
      c = "sm";
      break;
  }
  if (Oe.env.NODE_ENV !== "production") {
    const f = eo("Button.Group");
    Oe.env.NODE_ENV !== "production" && f(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const u = je(l, {
    [`${l}-${c}`]: c,
    [`${l}-rtl`]: r === "rtl"
  }, i, s);
  return /* @__PURE__ */ b.createElement(Yx.Provider, {
    value: a
  }, /* @__PURE__ */ b.createElement("div", Object.assign({}, o, {
    className: u
  })));
}, $g = /^[\u4E00-\u9FA5]{2}$/, Hf = $g.test.bind($g);
function Cg(e) {
  return typeof e == "string";
}
function Ro(e) {
  return e === "text" || e === "link";
}
function A4(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Cg(e.type) && Hf(e.props.children) ? Gg(e, {
    children: e.props.children.split("").join(r)
  }) : Cg(e) ? Hf(e) ? /* @__PURE__ */ T.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ T.createElement("span", null, e) : V1(e) ? /* @__PURE__ */ T.createElement("span", null, e) : e;
}
function T4(e, t) {
  let r = !1;
  const n = [];
  return T.Children.forEach(e, (a) => {
    const i = typeof a, o = i === "string" || i === "number";
    if (r && o) {
      const l = n.length - 1, s = n[l];
      n[l] = `${s}${a}`;
    } else
      n.push(a);
    r = o;
  }), T.Children.map(n, (a) => A4(a, t));
}
const qx = /* @__PURE__ */ b.forwardRef((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: i
  } = e, o = je(`${i}-icon`, r);
  return /* @__PURE__ */ T.createElement("span", {
    ref: t,
    className: o,
    style: n
  }, a);
}), Pg = /* @__PURE__ */ b.forwardRef((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: i
  } = e, o = je(`${r}-loading-icon`, n);
  return /* @__PURE__ */ T.createElement(qx, {
    prefixCls: r,
    className: o,
    style: a,
    ref: t
  }, /* @__PURE__ */ T.createElement(tp, {
    className: i
  }));
}), eu = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), tu = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), M4 = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: i
  } = e, o = !!r;
  return n ? /* @__PURE__ */ T.createElement(Pg, {
    prefixCls: t,
    className: a,
    style: i
  }) : /* @__PURE__ */ T.createElement(qg, {
    visible: o,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: o,
    removeOnLeave: !0,
    onAppearStart: eu,
    onAppearActive: tu,
    onEnterStart: eu,
    onEnterActive: tu,
    onLeaveStart: tu,
    onLeaveActive: eu
  }, (l, s) => {
    let {
      className: c,
      style: u
    } = l;
    return /* @__PURE__ */ T.createElement(Pg, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, i), u),
      ref: s,
      iconClassName: c
    });
  });
}, _g = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), I4 = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: a,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      _g(`${t}-primary`, a),
      _g(`${t}-danger`, i)
    ]
  };
}, wt = Math.round;
function ru(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((a) => parseFloat(a));
  for (let a = 0; a < 3; a += 1)
    n[a] = t(n[a] || 0, r[a] || "", a);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Eg = (e, t, r) => r === 0 ? e : e / 100;
function ni(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class zs {
  constructor(t) {
    ve(this, "isValid", !0), ve(this, "r", 0), ve(this, "g", 0), ve(this, "b", 0), ve(this, "a", 1), ve(this, "_h", void 0), ve(this, "_s", void 0), ve(this, "_l", void 0), ve(this, "_v", void 0), ve(this, "_max", void 0), ve(this, "_min", void 0), ve(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let a = function(i) {
        return n.startsWith(i);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : a("rgb") ? this.fromRgbString(n) : a("hsl") ? this.fromHslString(n) : (a("hsv") || a("hsb")) && this.fromHsvString(n);
    } else if (t instanceof zs)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = ni(t.r), this.g = ni(t.g), this.b = ni(t.b), this.a = typeof t.a == "number" ? ni(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const r = this.toHsv();
    return r.h = t, this._c(r);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const o = i / 255;
      return o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4);
    }
    const r = t(this.r), n = t(this.g), a = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * a;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = wt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let a = this.getLightness() - t / 100;
    return a < 0 && (a = 0), this._c({
      h: r,
      s: n,
      l: a,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let a = this.getLightness() + t / 100;
    return a > 1 && (a = 1), this._c({
      h: r,
      s: n,
      l: a,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), a = r / 100, i = (l) => (n[l] - this[l]) * a + this[l], o = {
      r: wt(i("r")),
      g: wt(i("g")),
      b: wt(i("b")),
      a: wt(i("a") * 100) / 100
    };
    return this._c(o);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const r = this._c(t), n = this.a + r.a * (1 - this.a), a = (i) => wt((this[i] * this.a + r[i] * r.a * (1 - this.a)) / n);
    return this._c({
      r: a("r"),
      g: a("g"),
      b: a("b"),
      a: n
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const a = (this.b || 0).toString(16);
    if (t += a.length === 2 ? a : "0" + a, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = wt(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), r = wt(this.getSaturation() * 100), n = wt(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, r, n) {
    const a = this.clone();
    return a[t] = ni(r, n), a;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const r = t.replace("#", "");
    function n(a, i) {
      return parseInt(r[a] + r[i || a], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof a == "number" ? a : 1, r <= 0) {
      const d = wt(n * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, o = 0, l = 0;
    const s = t / 60, c = (1 - Math.abs(2 * n - 1)) * r, u = c * (1 - Math.abs(s % 2 - 1));
    s >= 0 && s < 1 ? (i = c, o = u) : s >= 1 && s < 2 ? (i = u, o = c) : s >= 2 && s < 3 ? (o = c, l = u) : s >= 3 && s < 4 ? (o = u, l = c) : s >= 4 && s < 5 ? (i = u, l = c) : s >= 5 && s < 6 && (i = c, l = u);
    const f = n - c / 2;
    this.r = wt((i + f) * 255), this.g = wt((o + f) * 255), this.b = wt((l + f) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof a == "number" ? a : 1;
    const i = wt(n * 255);
    if (this.r = i, this.g = i, this.b = i, r <= 0)
      return;
    const o = t / 60, l = Math.floor(o), s = o - l, c = wt(n * (1 - r) * 255), u = wt(n * (1 - r * s) * 255), f = wt(n * (1 - r * (1 - s)) * 255);
    switch (l) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const r = ru(t, Eg);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = ru(t, Eg);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = ru(t, (n, a) => (
      // Convert percentage to number. e.g. 50% -> 128
      a.includes("%") ? wt(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var j4 = ["b"], D4 = ["v"], nu = function(t) {
  return Math.round(Number(t || 0));
}, N4 = function(t) {
  if (t instanceof zs)
    return t;
  if (t && An(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, a = Kt(r, j4);
    return ue(ue({}, a), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Wr = /* @__PURE__ */ function(e) {
  z1(r, e);
  var t = U1(r);
  function r(n) {
    return qf(this, r), t.call(this, N4(n));
  }
  return Gf(r, [{
    key: "toHsbString",
    value: function() {
      var a = this.toHsb(), i = nu(a.s * 100), o = nu(a.b * 100), l = nu(a.h), s = a.a, c = "hsb(".concat(l, ", ").concat(i, "%, ").concat(o, "%)"), u = "hsba(".concat(l, ", ").concat(i, "%, ").concat(o, "%, ").concat(s.toFixed(s === 0 ? 0 : 2), ")");
      return s === 1 ? c : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var a = this.toHsv(), i = a.v, o = Kt(a, D4);
      return ue(ue({}, o), {}, {
        b: i,
        a: this.a
      });
    }
  }]), r;
}(zs), R4 = "rc-color-picker", Zn = function(t) {
  return t instanceof Wr ? t : new Wr(t);
}, k4 = Zn("#1677ff"), Gx = function(t) {
  var r = t.offset, n = t.targetRef, a = t.containerRef, i = t.color, o = t.type, l = a.current.getBoundingClientRect(), s = l.width, c = l.height, u = n.current.getBoundingClientRect(), f = u.width, d = u.height, p = f / 2, v = d / 2, m = (r.x + p) / s, h = 1 - (r.y + v) / c, y = i.toHsb(), w = m, S = (r.x + p) / s * 360;
  if (o)
    switch (o) {
      case "hue":
        return Zn(ue(ue({}, y), {}, {
          h: S <= 0 ? 0 : S
        }));
      case "alpha":
        return Zn(ue(ue({}, y), {}, {
          a: w <= 0 ? 0 : w
        }));
    }
  return Zn({
    h: y.h,
    s: m <= 0 ? 0 : m,
    b: h >= 1 ? 1 : h,
    a: y.a
  });
}, Kx = function(t, r) {
  var n = t.toHsb();
  switch (r) {
    case "hue":
      return {
        x: n.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    default:
      return {
        x: n.s * 100,
        y: (1 - n.b) * 100
      };
  }
}, B4 = function(t) {
  var r = t.color, n = t.prefixCls, a = t.className, i = t.style, o = t.onClick, l = "".concat(n, "-color-block");
  return /* @__PURE__ */ T.createElement("div", {
    className: je(l, a),
    style: i,
    onClick: o
  }, /* @__PURE__ */ T.createElement("div", {
    className: "".concat(l, "-inner"),
    style: {
      background: r
    }
  }));
};
function L4(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function Xx(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, a = e.onDragChange, i = e.onDragChangeComplete, o = e.calculate, l = e.color, s = e.disabledDrag, c = b.useState({
    x: 0,
    y: 0
  }), u = X(c, 2), f = u[0], d = u[1], p = b.useRef(null), v = b.useRef(null);
  b.useEffect(function() {
    d(o());
  }, [l]), b.useEffect(function() {
    return function() {
      document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", v.current), p.current = null, v.current = null;
    };
  }, []);
  var m = function(O) {
    var g = L4(O), x = g.pageX, $ = g.pageY, C = r.current.getBoundingClientRect(), _ = C.x, M = C.y, P = C.width, I = C.height, N = t.current.getBoundingClientRect(), j = N.width, E = N.height, A = j / 2, D = E / 2, R = Math.max(0, Math.min(x - _, P)) - A, k = Math.max(0, Math.min($ - M, I)) - D, L = {
      x: R,
      y: n === "x" ? f.y : k
    };
    if (j === 0 && E === 0 || j !== E)
      return !1;
    a == null || a(L);
  }, h = function(O) {
    O.preventDefault(), m(O);
  }, y = function(O) {
    O.preventDefault(), document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", v.current), p.current = null, v.current = null, i == null || i();
  }, w = function(O) {
    document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), !s && (m(O), document.addEventListener("mousemove", h), document.addEventListener("mouseup", y), document.addEventListener("touchmove", h), document.addEventListener("touchend", y), p.current = h, v.current = y);
  };
  return [f, w];
}
var Zx = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, a = t.color, i = t.prefixCls;
  return /* @__PURE__ */ T.createElement("div", {
    className: je("".concat(i, "-handler"), ve({}, "".concat(i, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: a
    }
  });
}, Qx = function(t) {
  var r = t.children, n = t.style, a = t.prefixCls;
  return /* @__PURE__ */ T.createElement("div", {
    className: "".concat(a, "-palette"),
    style: ue({
      position: "relative"
    }, n)
  }, r);
}, Jx = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.children, n = e.x, a = e.y;
  return /* @__PURE__ */ T.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(a, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), H4 = function(t) {
  var r = t.color, n = t.onChange, a = t.prefixCls, i = t.onChangeComplete, o = t.disabled, l = b.useRef(), s = b.useRef(), c = b.useRef(r), u = ut(function(m) {
    var h = Gx({
      offset: m,
      targetRef: s,
      containerRef: l,
      color: r
    });
    c.current = h, n(h);
  }), f = Xx({
    color: r,
    containerRef: l,
    targetRef: s,
    calculate: function() {
      return Kx(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return i == null ? void 0 : i(c.current);
    },
    disabledDrag: o
  }), d = X(f, 2), p = d[0], v = d[1];
  return /* @__PURE__ */ T.createElement("div", {
    ref: l,
    className: "".concat(a, "-select"),
    onMouseDown: v,
    onTouchStart: v
  }, /* @__PURE__ */ T.createElement(Qx, {
    prefixCls: a
  }, /* @__PURE__ */ T.createElement(Jx, {
    x: p.x,
    y: p.y,
    ref: s
  }, /* @__PURE__ */ T.createElement(Zx, {
    color: r.toRgbString(),
    prefixCls: a
  })), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(a, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, F4 = function(t, r) {
  var n = fr(t, {
    value: r
  }), a = X(n, 2), i = a[0], o = a[1], l = b.useMemo(function() {
    return Zn(i);
  }, [i]);
  return [l, o];
}, W4 = function(t) {
  var r = t.colors, n = t.children, a = t.direction, i = a === void 0 ? "to right" : a, o = t.type, l = t.prefixCls, s = b.useMemo(function() {
    return r.map(function(c, u) {
      var f = Zn(c);
      return o === "alpha" && u === r.length - 1 && (f = new Wr(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [r, o]);
  return /* @__PURE__ */ T.createElement("div", {
    className: "".concat(l, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(i, ", ").concat(s, ")")
    }
  }, n);
}, V4 = function(t) {
  var r = t.prefixCls, n = t.colors, a = t.disabled, i = t.onChange, o = t.onChangeComplete, l = t.color, s = t.type, c = b.useRef(), u = b.useRef(), f = b.useRef(l), d = function(g) {
    return s === "hue" ? g.getHue() : g.a * 100;
  }, p = ut(function(O) {
    var g = Gx({
      offset: O,
      targetRef: u,
      containerRef: c,
      color: l,
      type: s
    });
    f.current = g, i(d(g));
  }), v = Xx({
    color: l,
    targetRef: u,
    containerRef: c,
    calculate: function() {
      return Kx(l, s);
    },
    onDragChange: p,
    onDragChangeComplete: function() {
      o(d(f.current));
    },
    direction: "x",
    disabledDrag: a
  }), m = X(v, 2), h = m[0], y = m[1], w = T.useMemo(function() {
    if (s === "hue") {
      var O = l.toHsb();
      O.s = 1, O.b = 1, O.a = 1;
      var g = new Wr(O);
      return g;
    }
    return l;
  }, [l, s]), S = T.useMemo(function() {
    return n.map(function(O) {
      return "".concat(O.color, " ").concat(O.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ T.createElement("div", {
    ref: c,
    className: je("".concat(r, "-slider"), "".concat(r, "-slider-").concat(s)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ T.createElement(Qx, {
    prefixCls: r
  }, /* @__PURE__ */ T.createElement(Jx, {
    x: h.x,
    y: h.y,
    ref: u
  }, /* @__PURE__ */ T.createElement(Zx, {
    size: "small",
    color: w.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ T.createElement(W4, {
    colors: S,
    type: s,
    prefixCls: r
  })));
};
function z4(e) {
  return b.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || V4];
  }, [e]);
}
var U4 = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], Y4 = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.value, n = e.defaultValue, a = e.prefixCls, i = a === void 0 ? R4 : a, o = e.onChange, l = e.onChangeComplete, s = e.className, c = e.style, u = e.panelRender, f = e.disabledAlpha, d = f === void 0 ? !1 : f, p = e.disabled, v = p === void 0 ? !1 : p, m = e.components, h = z4(m), y = X(h, 1), w = y[0], S = F4(n || k4, r), O = X(S, 2), g = O[0], x = O[1], $ = b.useMemo(function() {
    return g.setA(1).toRgbString();
  }, [g]), C = function(k, L) {
    r || x(k), o == null || o(k, L);
  }, _ = function(k) {
    return new Wr(g.setHue(k));
  }, M = function(k) {
    return new Wr(g.setA(k / 100));
  }, P = function(k) {
    C(_(k), {
      type: "hue",
      value: k
    });
  }, I = function(k) {
    C(M(k), {
      type: "alpha",
      value: k
    });
  }, N = function(k) {
    l && l(_(k));
  }, j = function(k) {
    l && l(M(k));
  }, E = je("".concat(i, "-panel"), s, ve({}, "".concat(i, "-panel-disabled"), v)), A = {
    prefixCls: i,
    disabled: v,
    color: g
  }, D = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(H4, we({
    onChange: C
  }, A, {
    onChangeComplete: l
  })), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(i, "-slider-container")
  }, /* @__PURE__ */ T.createElement("div", {
    className: je("".concat(i, "-slider-group"), ve({}, "".concat(i, "-slider-group-disabled-alpha"), d))
  }, /* @__PURE__ */ T.createElement(w, we({}, A, {
    type: "hue",
    colors: U4,
    min: 0,
    max: 359,
    value: g.getHue(),
    onChange: P,
    onChangeComplete: N
  })), !d && /* @__PURE__ */ T.createElement(w, we({}, A, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: $
    }],
    min: 0,
    max: 100,
    value: g.a * 100,
    onChange: I,
    onChangeComplete: j
  }))), /* @__PURE__ */ T.createElement(B4, {
    color: g.toRgbString(),
    prefixCls: i
  })));
  return /* @__PURE__ */ T.createElement("div", {
    className: E,
    style: c,
    ref: t
  }, typeof u == "function" ? u(D) : D);
});
Oe.env.NODE_ENV !== "production" && (Y4.displayName = "ColorPicker");
const q4 = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", G4 = (e, t) => e ? q4(e, t) : "";
let K4 = /* @__PURE__ */ function() {
  function e(t) {
    qf(this, e);
    var r;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (r = t.colors) === null || r === void 0 ? void 0 : r.map((a) => ({
        color: new e(a.color),
        percent: a.percent
      })), this.cleared = t.cleared;
      return;
    }
    const n = Array.isArray(t);
    n && t.length ? (this.colors = t.map((a) => {
      let {
        color: i,
        percent: o
      } = a;
      return {
        color: new e(i),
        percent: o
      };
    }), this.metaColor = new Wr(this.colors[0].color.metaColor)) : this.metaColor = new Wr(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Gf(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return G4(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: r
      } = this;
      return r ? `linear-gradient(90deg, ${r.map((a) => `${a.color.toRgbString()} ${a.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(r) {
      return !r || this.isGradient() !== r.isGradient() ? !1 : this.isGradient() ? this.colors.length === r.colors.length && this.colors.every((n, a) => {
        const i = r.colors[a];
        return n.percent === i.percent && n.color.equals(i.color);
      }) : this.toHexString() === r.toHexString();
    }
  }]);
}();
const X4 = new Mt("antMoveDownIn", {
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
}), Z4 = new Mt("antMoveDownOut", {
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
}), Q4 = new Mt("antMoveLeftIn", {
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
}), J4 = new Mt("antMoveLeftOut", {
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
}), eU = new Mt("antMoveRightIn", {
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
}), tU = new Mt("antMoveRightOut", {
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
}), rU = new Mt("antMoveUpIn", {
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
}), nU = new Mt("antMoveUpOut", {
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
}), aU = {
  "move-up": {
    inKeyframes: rU,
    outKeyframes: nU
  },
  "move-down": {
    inKeyframes: X4,
    outKeyframes: Z4
  },
  "move-left": {
    inKeyframes: Q4,
    outKeyframes: J4
  },
  "move-right": {
    inKeyframes: eU,
    outKeyframes: tU
  }
}, Ag = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = aU[t];
  return [Xg(n, a, i, e.motionDurationMid), {
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
}, ew = new Mt("antSlideUpIn", {
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
}), tw = new Mt("antSlideUpOut", {
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
}), rw = new Mt("antSlideDownIn", {
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
}), nw = new Mt("antSlideDownOut", {
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
}), iU = new Mt("antSlideLeftIn", {
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
}), oU = new Mt("antSlideLeftOut", {
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
}), lU = new Mt("antSlideRightIn", {
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
}), sU = new Mt("antSlideRightOut", {
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
}), cU = {
  "slide-up": {
    inKeyframes: ew,
    outKeyframes: tw
  },
  "slide-down": {
    inKeyframes: rw,
    outKeyframes: nw
  },
  "slide-left": {
    inKeyframes: iU,
    outKeyframes: oU
  },
  "slide-right": {
    inKeyframes: lU,
    outKeyframes: sU
  }
}, Tg = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: a,
    outKeyframes: i
  } = cU[t];
  return [Xg(n, a, i, e.motionDurationMid), {
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
}, uU = (e, t) => {
  const {
    r,
    g: n,
    b: a,
    a: i
  } = e.toRgb(), o = new Wr(e.toRgbString()).onBackground(t).toHsv();
  return i <= 0.5 ? o.v > 0.5 : r * 0.299 + n * 0.587 + a * 0.114 > 192;
}, aw = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return $r(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, iw = (e) => {
  var t, r, n, a, i, o;
  const l = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, s = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, c = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (a = e.contentLineHeight) !== null && a !== void 0 ? a : wc(l), f = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : wc(s), d = (o = e.contentLineHeightLG) !== null && o !== void 0 ? o : wc(c), p = uU(new K4(e.colorBgSolid), "#fff") ? "#000" : "#fff";
  return {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: e.colorText,
    textTextHoverColor: e.colorText,
    textTextActiveColor: e.colorText,
    textHoverBg: e.colorFillTertiary,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    solidTextColor: p,
    contentFontSize: l,
    contentFontSizeSM: s,
    contentFontSizeLG: c,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: d,
    paddingBlock: Math.max((e.controlHeight - l * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - s * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - c * d) / 2 - e.lineWidth, 0)
  };
}, fU = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: e.marginXS,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${se(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        // https://github.com/ant-design/ant-design/issues/51380
        display: "inline-flex"
      },
      [`${t}-icon`]: {
        lineHeight: 1
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, Y1(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // iconPosition="end"
      "&-icon-end": {
        flexDirection: "row-reverse"
      }
    }
  };
}, ow = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), dU = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), pU = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), hU = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), np = (e, t, r, n, a, i, o, l) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, ow(e, Object.assign({
    background: t
  }, o), Object.assign({
    background: t
  }, l))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: a || void 0,
      borderColor: i || void 0
    }
  })
}), vU = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, hU(e))
}), mU = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Us = (e, t, r, n) => {
  const i = n && ["link", "text"].includes(n) ? mU : vU;
  return Object.assign(Object.assign({}, i(e)), ow(e.componentCls, t, r));
}, ap = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, Us(e, n, a))
}), ip = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, Us(e, n, a))
}), op = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), lp = (e, t, r, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, Us(e, r, n))
}), Ca = (e, t, r, n, a) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, Us(e, n, a, r))
}), gU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ap(e, e.solidTextColor, e.colorBgSolid, {
  background: e.colorBgSolidHover
}, {
  background: e.colorBgSolidActive
})), op(e)), lp(e, e.colorFillTertiary, {
  background: e.colorFillSecondary
}, {
  background: e.colorFill
})), Ca(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), np(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), yU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, ip(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), op(e)), lp(e, e.colorPrimaryBg, {
  background: e.colorPrimaryBgHover
}, {
  background: e.colorPrimaryBorder
})), Ca(e, e.colorLink, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), np(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), bU = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, ap(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), ip(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), op(e)), lp(e, e.colorErrorBg, {
  background: e.colorErrorBgFilledHover
}, {
  background: e.colorErrorBgActive
})), Ca(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Ca(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), np(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), xU = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-color-default`]: gU(e),
    [`${t}-color-primary`]: yU(e),
    [`${t}-color-dangerous`]: bU(e)
  };
}, wU = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, ip(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Ca(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), ap(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Ca(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), sp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: a,
    lineHeight: i,
    borderRadius: o,
    buttonPaddingHorizontal: l,
    iconCls: s,
    buttonPaddingVertical: c
  } = e, u = `${r}-icon-only`;
  return [
    {
      [t]: {
        fontSize: a,
        lineHeight: i,
        height: n,
        padding: `${se(c)} ${se(l)}`,
        borderRadius: o,
        [`&${u}`]: {
          width: n,
          paddingInline: 0,
          // make `btn-icon-only` not too narrow
          [`&${r}-compact-item`]: {
            flex: "none"
          },
          [`&${r}-round`]: {
            width: "auto"
          },
          [s]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: dU(e)
    },
    {
      [`${r}${r}-round${t}`]: pU(e)
    }
  ];
}, SU = (e) => {
  const t = $r(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return sp(t, e.componentCls);
}, OU = (e) => {
  const t = $r(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return sp(t, `${e.componentCls}-sm`);
}, $U = (e) => {
  const t = $r(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return sp(t, `${e.componentCls}-lg`);
}, CU = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, PU = Kf("Button", (e) => {
  const t = aw(e);
  return [
    // Shared
    fU(t),
    // Size
    SU(t),
    OU(t),
    $U(t),
    // Block
    CU(t),
    // Color
    xU(t),
    // https://github.com/ant-design/ant-design/issues/50969
    wU(t),
    // Button Group
    I4(t)
  ];
}, iw, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function _U(e, t, r) {
  const {
    focusElCls: n,
    focus: a,
    borderElCls: i
  } = r, o = i ? "> *" : "", l = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((s) => `&:${s} ${o}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [l]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${o}`]: {
        zIndex: 0
      }
    })
  };
}
function EU(e, t, r) {
  const {
    borderElCls: n
  } = r, a = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function cp(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, _U(e, n, t)), EU(r, n, t))
  };
}
function AU(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function TU(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function MU(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, AU(e, t)), TU(e.componentCls, t))
  };
}
const IU = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e;
  return {
    [t]: {
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: r(e.lineWidth).mul(-1).equal(),
            insetInlineStart: r(e.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${se(e.lineWidth)} * 2)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: r(e.lineWidth).mul(-1).equal(),
              insetInlineStart: r(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${se(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, jU = q1(["Button", "compact"], (e) => {
  const t = aw(e);
  return [
    // Space Compact
    cp(t),
    MU(t),
    IU(t)
  ];
}, iw);
var DU = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function NU(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const RU = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  link: ["primary", "link"],
  text: ["default", "text"]
}, kU = /* @__PURE__ */ T.forwardRef((e, t) => {
  var r, n, a, i;
  const {
    loading: o = !1,
    prefixCls: l,
    color: s,
    variant: c,
    type: u,
    danger: f = !1,
    shape: d = "default",
    size: p,
    styles: v,
    disabled: m,
    className: h,
    rootClassName: y,
    children: w,
    icon: S,
    iconPosition: O = "start",
    ghost: g = !1,
    block: x = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: $ = "button",
    classNames: C,
    style: _ = {},
    autoInsertSpace: M
  } = e, P = DU(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), I = u || "default", [N, j] = b.useMemo(() => {
    if (s && c)
      return [s, c];
    const Se = RU[I] || [];
    return f ? ["danger", Se[1]] : Se;
  }, [u, s, c, f]), A = N === "danger" ? "dangerous" : N, {
    getPrefixCls: D,
    direction: R,
    button: k
  } = b.useContext(en), L = (r = M ?? (k == null ? void 0 : k.autoInsertSpace)) !== null && r !== void 0 ? r : !0, H = D("btn", l), [B, W, U] = PU(H), G = b.useContext(Xf), Q = m ?? G, ne = b.useContext(Yx), te = b.useMemo(() => NU(o), [o]), [z, K] = b.useState(te.loading), [q, F] = b.useState(!1), Z = Yf(t, /* @__PURE__ */ b.createRef()), le = b.Children.count(w) === 1 && !S && !Ro(j);
  b.useEffect(() => {
    let Se = null;
    te.delay > 0 ? Se = setTimeout(() => {
      Se = null, K(!0);
    }, te.delay) : K(te.loading);
    function Ie() {
      Se && (clearTimeout(Se), Se = null);
    }
    return Ie;
  }, [te]), b.useEffect(() => {
    if (!Z || !Z.current || !L)
      return;
    const Se = Z.current.textContent;
    le && Hf(Se) ? q || F(!0) : q && F(!1);
  }, [Z]);
  const re = T.useCallback((Se) => {
    var Ie;
    if (z || Q) {
      Se.preventDefault();
      return;
    }
    (Ie = e.onClick) === null || Ie === void 0 || Ie.call(e, Se);
  }, [e.onClick, z, Q]);
  if (Oe.env.NODE_ENV !== "production") {
    const Se = eo("Button");
    Oe.env.NODE_ENV !== "production" && Se(!(typeof S == "string" && S.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${S}\` at https://ant.design/components/icon`), Oe.env.NODE_ENV !== "production" && Se(!(g && Ro(j)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: ae,
    compactItemClassnames: de
  } = Zf(H, R), $e = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, Be = rp((Se) => {
    var Ie, pe;
    return (pe = (Ie = p ?? ae) !== null && Ie !== void 0 ? Ie : ne) !== null && pe !== void 0 ? pe : Se;
  }), Te = Be && (n = $e[Be]) !== null && n !== void 0 ? n : "", Ne = z ? "loading" : S, Ge = Qf(P, ["navigate"]), Qe = je(H, W, U, {
    [`${H}-${d}`]: d !== "default" && d,
    // line(253 - 254): Compatible with versions earlier than 5.21.0
    [`${H}-${I}`]: I,
    [`${H}-dangerous`]: f,
    [`${H}-color-${A}`]: A,
    [`${H}-variant-${j}`]: j,
    [`${H}-${Te}`]: Te,
    [`${H}-icon-only`]: !w && w !== 0 && !!Ne,
    [`${H}-background-ghost`]: g && !Ro(j),
    [`${H}-loading`]: z,
    [`${H}-two-chinese-chars`]: q && L && !z,
    [`${H}-block`]: x,
    [`${H}-rtl`]: R === "rtl",
    [`${H}-icon-end`]: O === "end"
  }, de, h, y, k == null ? void 0 : k.className), Ke = Object.assign(Object.assign({}, k == null ? void 0 : k.style), _), Ue = je(C == null ? void 0 : C.icon, (a = k == null ? void 0 : k.classNames) === null || a === void 0 ? void 0 : a.icon), Ve = Object.assign(Object.assign({}, (v == null ? void 0 : v.icon) || {}), ((i = k == null ? void 0 : k.styles) === null || i === void 0 ? void 0 : i.icon) || {}), _t = S && !z ? /* @__PURE__ */ T.createElement(qx, {
    prefixCls: H,
    className: Ue,
    style: Ve
  }, S) : /* @__PURE__ */ T.createElement(M4, {
    existIcon: !!S,
    prefixCls: H,
    loading: z
  }), He = w || w === 0 ? T4(w, le && L) : null;
  if (Ge.href !== void 0)
    return B(/* @__PURE__ */ T.createElement("a", Object.assign({}, Ge, {
      className: je(Qe, {
        [`${H}-disabled`]: Q
      }),
      href: Q ? void 0 : Ge.href,
      style: Ke,
      onClick: re,
      ref: Z,
      tabIndex: Q ? -1 : 0
    }), _t, He));
  let ot = /* @__PURE__ */ T.createElement("button", Object.assign({}, P, {
    type: $,
    className: Qe,
    style: Ke,
    onClick: re,
    disabled: Q,
    ref: Z
  }), _t, He, !!de && /* @__PURE__ */ T.createElement(jU, {
    key: "compact",
    prefixCls: H
  }));
  return Ro(j) || (ot = /* @__PURE__ */ T.createElement(Ux, {
    component: "Button",
    disabled: z
  }, ot)), B(ot);
}), Ys = kU;
Ys.Group = E4;
Ys.__ANT_BUTTON = !0;
Oe.env.NODE_ENV !== "production" && (Ys.displayName = "Button");
function BU(e) {
  return (t) => /* @__PURE__ */ b.createElement(Zg, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ b.createElement(e, Object.assign({}, t)));
}
const lw = (e, t, r, n) => BU((i) => {
  const {
    prefixCls: o,
    style: l
  } = i, s = b.useRef(null), [c, u] = b.useState(0), [f, d] = b.useState(0), [p, v] = fr(!1, {
    value: i.open
  }), {
    getPrefixCls: m
  } = b.useContext(en), h = m(t, o);
  b.useEffect(() => {
    if (v(!0), typeof ResizeObserver < "u") {
      const S = new ResizeObserver((g) => {
        const x = g[0].target;
        u(x.offsetHeight + 8), d(x.offsetWidth);
      }), O = setInterval(() => {
        var g;
        const x = `.${h}-dropdown`, $ = (g = s.current) === null || g === void 0 ? void 0 : g.querySelector(x);
        $ && (clearInterval(O), S.observe($));
      }, 10);
      return () => {
        clearInterval(O), S.disconnect();
      };
    }
  }, []);
  let y = Object.assign(Object.assign({}, i), {
    style: Object.assign(Object.assign({}, l), {
      margin: 0
    }),
    open: p,
    visible: p,
    getPopupContainer: () => s.current
  });
  n && (y = n(y));
  const w = {
    paddingBottom: c,
    position: "relative",
    minWidth: f
  };
  return /* @__PURE__ */ b.createElement("div", {
    ref: s,
    style: w
  }, /* @__PURE__ */ b.createElement(e, Object.assign({}, y)));
});
var LU = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Ln = void 0;
function HU(e, t) {
  var r = e.prefixCls, n = e.invalidate, a = e.item, i = e.renderItem, o = e.responsive, l = e.responsiveDisabled, s = e.registerSize, c = e.itemKey, u = e.className, f = e.style, d = e.children, p = e.display, v = e.order, m = e.component, h = m === void 0 ? "div" : m, y = Kt(e, LU), w = o && !p;
  function S(C) {
    s(c, C);
  }
  b.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var O = i && a !== Ln ? i(a) : d, g;
  n || (g = {
    opacity: w ? 0 : 1,
    height: w ? 0 : Ln,
    overflowY: w ? "hidden" : Ln,
    order: o ? v : Ln,
    pointerEvents: w ? "none" : Ln,
    position: w ? "absolute" : Ln
  });
  var x = {};
  w && (x["aria-hidden"] = !0);
  var $ = /* @__PURE__ */ b.createElement(h, we({
    className: je(!n && r, u),
    style: ue(ue({}, g), f)
  }, x, y, {
    ref: t
  }), O);
  return o && ($ = /* @__PURE__ */ b.createElement(rs, {
    onResize: function(_) {
      var M = _.offsetWidth;
      S(M);
    },
    disabled: l
  }, $)), $;
}
var gi = /* @__PURE__ */ b.forwardRef(HU);
gi.displayName = "Item";
function FU(e) {
  if (typeof MessageChannel > "u")
    Wt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function WU() {
  var e = b.useRef(null), t = function(n) {
    e.current || (e.current = [], FU(function() {
      R1.unstable_batchedUpdates(function() {
        e.current.forEach(function(a) {
          a();
        }), e.current = null;
      });
    })), e.current.push(n);
  };
  return t;
}
function ai(e, t) {
  var r = b.useState(t), n = X(r, 2), a = n[0], i = n[1], o = ut(function(l) {
    e(function() {
      i(l);
    });
  });
  return [a, o];
}
var Zl = /* @__PURE__ */ T.createContext(null), VU = ["component"], zU = ["className"], UU = ["className"], YU = function(t, r) {
  var n = b.useContext(Zl);
  if (!n) {
    var a = t.component, i = a === void 0 ? "div" : a, o = Kt(t, VU);
    return /* @__PURE__ */ b.createElement(i, we({}, o, {
      ref: r
    }));
  }
  var l = n.className, s = Kt(n, zU), c = t.className, u = Kt(t, UU);
  return /* @__PURE__ */ b.createElement(Zl.Provider, {
    value: null
  }, /* @__PURE__ */ b.createElement(gi, we({
    ref: r,
    className: je(l, c)
  }, s, u)));
}, sw = /* @__PURE__ */ b.forwardRef(YU);
sw.displayName = "RawItem";
var qU = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], cw = "responsive", uw = "invalidate";
function GU(e) {
  return "+ ".concat(e.length, " ...");
}
function KU(e, t) {
  var r = e.prefixCls, n = r === void 0 ? "rc-overflow" : r, a = e.data, i = a === void 0 ? [] : a, o = e.renderItem, l = e.renderRawItem, s = e.itemKey, c = e.itemWidth, u = c === void 0 ? 10 : c, f = e.ssr, d = e.style, p = e.className, v = e.maxCount, m = e.renderRest, h = e.renderRawRest, y = e.suffix, w = e.component, S = w === void 0 ? "div" : w, O = e.itemComponent, g = e.onVisibleChange, x = Kt(e, qU), $ = f === "full", C = WU(), _ = ai(C, null), M = X(_, 2), P = M[0], I = M[1], N = P || 0, j = ai(C, /* @__PURE__ */ new Map()), E = X(j, 2), A = E[0], D = E[1], R = ai(C, 0), k = X(R, 2), L = k[0], H = k[1], B = ai(C, 0), W = X(B, 2), U = W[0], G = W[1], Q = ai(C, 0), ne = X(Q, 2), te = ne[0], z = ne[1], K = b.useState(null), q = X(K, 2), F = q[0], J = q[1], Z = b.useState(null), le = X(Z, 2), re = le[0], ae = le[1], de = b.useMemo(function() {
    return re === null && $ ? Number.MAX_SAFE_INTEGER : re || 0;
  }, [re, P]), $e = b.useState(!1), Be = X($e, 2), Te = Be[0], Ne = Be[1], Ge = "".concat(n, "-item"), Qe = Math.max(L, U), Ke = v === cw, Ue = i.length && Ke, Ve = v === uw, _t = Ue || typeof v == "number" && i.length > v, He = b.useMemo(function() {
    var be = i;
    return Ue ? P === null && $ ? be = i : be = i.slice(0, Math.min(i.length, N / u)) : typeof v == "number" && (be = i.slice(0, v)), be;
  }, [i, u, P, v, Ue]), ot = b.useMemo(function() {
    return Ue ? i.slice(de + 1) : i.slice(He.length);
  }, [i, He, Ue, de]), Se = b.useCallback(function(be, Le) {
    var Je;
    return typeof s == "function" ? s(be) : (Je = s && (be == null ? void 0 : be[s])) !== null && Je !== void 0 ? Je : Le;
  }, [s]), Ie = b.useCallback(o || function(be) {
    return be;
  }, [o]);
  function pe(be, Le, Je) {
    re === be && (Le === void 0 || Le === F) || (ae(be), Je || (Ne(be < i.length - 1), g == null || g(be)), Le !== void 0 && J(Le));
  }
  function oe(be, Le) {
    I(Le.clientWidth);
  }
  function he(be, Le) {
    D(function(Je) {
      var ht = new Map(Je);
      return Le === null ? ht.delete(be) : ht.set(be, Le), ht;
    });
  }
  function _e(be, Le) {
    G(Le), H(U);
  }
  function ie(be, Le) {
    z(Le);
  }
  function fe(be) {
    return A.get(Se(He[be], be));
  }
  Br(function() {
    if (N && typeof Qe == "number" && He) {
      var be = te, Le = He.length, Je = Le - 1;
      if (!Le) {
        pe(0, null);
        return;
      }
      for (var ht = 0; ht < Le; ht += 1) {
        var Ut = fe(ht);
        if ($ && (Ut = Ut || 0), Ut === void 0) {
          pe(ht - 1, void 0, !0);
          break;
        }
        if (be += Ut, // Only one means `totalWidth` is the final width
        Je === 0 && be <= N || // Last two width will be the final width
        ht === Je - 1 && be + fe(Je) <= N) {
          pe(Je, null);
          break;
        } else if (be + Qe > N) {
          pe(ht - 1, be - Ut - te + U);
          break;
        }
      }
      y && fe(0) + te > N && J(null);
    }
  }, [N, A, U, te, Se, He]);
  var Ye = Te && !!ot.length, nt = {};
  F !== null && Ue && (nt = {
    position: "absolute",
    left: F,
    top: 0
  });
  var Xe = {
    prefixCls: Ge,
    responsive: Ue,
    component: O,
    invalidate: Ve
  }, Et = l ? function(be, Le) {
    var Je = Se(be, Le);
    return /* @__PURE__ */ b.createElement(Zl.Provider, {
      key: Je,
      value: ue(ue({}, Xe), {}, {
        order: Le,
        item: be,
        itemKey: Je,
        registerSize: he,
        display: Le <= de
      })
    }, l(be, Le));
  } : function(be, Le) {
    var Je = Se(be, Le);
    return /* @__PURE__ */ b.createElement(gi, we({}, Xe, {
      order: Le,
      key: Je,
      item: be,
      renderItem: Ie,
      itemKey: Je,
      registerSize: he,
      display: Le <= de
    }));
  }, It, Ct = {
    order: Ye ? de : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ge, "-rest"),
    registerSize: _e,
    display: Ye
  };
  if (h)
    h && (It = /* @__PURE__ */ b.createElement(Zl.Provider, {
      value: ue(ue({}, Xe), Ct)
    }, h(ot)));
  else {
    var jt = m || GU;
    It = /* @__PURE__ */ b.createElement(gi, we({}, Xe, Ct), typeof jt == "function" ? jt(ot) : jt);
  }
  var xt = /* @__PURE__ */ b.createElement(S, we({
    className: je(!Ve && n, p),
    style: d,
    ref: t
  }, x), He.map(Et), _t ? It : null, y && /* @__PURE__ */ b.createElement(gi, we({}, Xe, {
    responsive: Ke,
    responsiveDisabled: !Ue,
    order: de,
    className: "".concat(Ge, "-suffix"),
    registerSize: ie,
    display: !0,
    style: nt
  }), y));
  return Ke && (xt = /* @__PURE__ */ b.createElement(rs, {
    onResize: oe,
    disabled: !Ue
  }, xt)), xt;
}
var co = /* @__PURE__ */ b.forwardRef(KU);
co.displayName = "Overflow";
co.Item = sw;
co.RESPONSIVE = cw;
co.INVALIDATE = uw;
function fw(e, t, r) {
  return je({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const dw = (e, t) => t || e, pw = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var n, a;
  const {
    variant: i,
    [e]: o
  } = b.useContext(en), l = b.useContext(G1), s = o == null ? void 0 : o.variant;
  let c;
  typeof t < "u" ? c = t : r === !1 ? c = "borderless" : c = (a = (n = l ?? s) !== null && n !== void 0 ? n : i) !== null && a !== void 0 ? a : "outlined";
  const u = K1.includes(c);
  return [c, u];
}, XU = (e) => {
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
}, ZU = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    borderRadiusSM: n,
    motionDurationSlow: a,
    paddingXS: i,
    multipleItemColorDisabled: o,
    multipleItemBorderColorDisabled: l,
    colorIcon: s,
    colorIconHover: c,
    INTERNAL_FIXED_ITEM_MARGIN: u
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
        marginBlock: u,
        borderRadius: n,
        cursor: "default",
        transition: `font-size ${a}, line-height ${a}, height ${a}`,
        marginInlineEnd: e.calc(u).mul(2).equal(),
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
        "&-remove": Object.assign(Object.assign({}, X1()), {
          display: "inline-flex",
          alignItems: "center",
          color: s,
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
var QU = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, JU = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: QU
  }));
}, hw = /* @__PURE__ */ b.forwardRef(JU);
Oe.env.NODE_ENV !== "production" && (hw.displayName = "DownOutlined");
var eY = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, tY = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: eY
  }));
}, vw = /* @__PURE__ */ b.forwardRef(tY);
Oe.env.NODE_ENV !== "production" && (vw.displayName = "SearchOutlined");
function rY(e) {
  let {
    suffixIcon: t,
    clearIcon: r,
    menuItemSelectedIcon: n,
    removeIcon: a,
    loading: i,
    multiple: o,
    hasFeedback: l,
    prefixCls: s,
    showSuffixIcon: c,
    feedbackIcon: u,
    showArrow: f,
    componentName: d
  } = e;
  Oe.env.NODE_ENV !== "production" && eo(d).deprecated(!r, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const p = r ?? /* @__PURE__ */ b.createElement(Z1, null), v = (w) => t === null && !l && !f ? null : /* @__PURE__ */ b.createElement(b.Fragment, null, c !== !1 && w, l && u);
  let m = null;
  if (t !== void 0)
    m = v(t);
  else if (i)
    m = v(/* @__PURE__ */ b.createElement(tp, {
      spin: !0
    }));
  else {
    const w = `${s}-suffix`;
    m = (S) => {
      let {
        open: O,
        showSearch: g
      } = S;
      return v(O && g ? /* @__PURE__ */ b.createElement(vw, {
        className: w
      }) : /* @__PURE__ */ b.createElement(hw, {
        className: w
      }));
    };
  }
  let h = null;
  n !== void 0 ? h = n : o ? h = /* @__PURE__ */ b.createElement(Q1, null) : h = null;
  let y = null;
  return a !== void 0 ? y = a : y = /* @__PURE__ */ b.createElement(J1, null), {
    clearIcon: p,
    suffixIcon: m,
    itemIcon: h,
    removeIcon: y
  };
}
var mw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    var r = 1e3, n = 6e4, a = 36e5, i = "millisecond", o = "second", l = "minute", s = "hour", c = "day", u = "week", f = "month", d = "quarter", p = "year", v = "date", m = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(j) {
      var E = ["th", "st", "nd", "rd"], A = j % 100;
      return "[" + j + (E[(A - 20) % 10] || E[A] || E[0]) + "]";
    } }, S = function(j, E, A) {
      var D = String(j);
      return !D || D.length >= E ? j : "" + Array(E + 1 - D.length).join(A) + j;
    }, O = { s: S, z: function(j) {
      var E = -j.utcOffset(), A = Math.abs(E), D = Math.floor(A / 60), R = A % 60;
      return (E <= 0 ? "+" : "-") + S(D, 2, "0") + ":" + S(R, 2, "0");
    }, m: function j(E, A) {
      if (E.date() < A.date()) return -j(A, E);
      var D = 12 * (A.year() - E.year()) + (A.month() - E.month()), R = E.clone().add(D, f), k = A - R < 0, L = E.clone().add(D + (k ? -1 : 1), f);
      return +(-(D + (A - R) / (k ? R - L : L - R)) || 0);
    }, a: function(j) {
      return j < 0 ? Math.ceil(j) || 0 : Math.floor(j);
    }, p: function(j) {
      return { M: f, y: p, w: u, d: c, D: v, h: s, m: l, s: o, ms: i, Q: d }[j] || String(j || "").toLowerCase().replace(/s$/, "");
    }, u: function(j) {
      return j === void 0;
    } }, g = "en", x = {};
    x[g] = w;
    var $ = "$isDayjsObject", C = function(j) {
      return j instanceof I || !(!j || !j[$]);
    }, _ = function j(E, A, D) {
      var R;
      if (!E) return g;
      if (typeof E == "string") {
        var k = E.toLowerCase();
        x[k] && (R = k), A && (x[k] = A, R = k);
        var L = E.split("-");
        if (!R && L.length > 1) return j(L[0]);
      } else {
        var H = E.name;
        x[H] = E, R = H;
      }
      return !D && R && (g = R), R || !D && g;
    }, M = function(j, E) {
      if (C(j)) return j.clone();
      var A = typeof E == "object" ? E : {};
      return A.date = j, A.args = arguments, new I(A);
    }, P = O;
    P.l = _, P.i = C, P.w = function(j, E) {
      return M(j, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var I = function() {
      function j(A) {
        this.$L = _(A.locale, null, !0), this.parse(A), this.$x = this.$x || A.x || {}, this[$] = !0;
      }
      var E = j.prototype;
      return E.parse = function(A) {
        this.$d = function(D) {
          var R = D.date, k = D.utc;
          if (R === null) return /* @__PURE__ */ new Date(NaN);
          if (P.u(R)) return /* @__PURE__ */ new Date();
          if (R instanceof Date) return new Date(R);
          if (typeof R == "string" && !/Z$/i.test(R)) {
            var L = R.match(h);
            if (L) {
              var H = L[2] - 1 || 0, B = (L[7] || "0").substring(0, 3);
              return k ? new Date(Date.UTC(L[1], H, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, B)) : new Date(L[1], H, L[3] || 1, L[4] || 0, L[5] || 0, L[6] || 0, B);
            }
          }
          return new Date(R);
        }(A), this.init();
      }, E.init = function() {
        var A = this.$d;
        this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
      }, E.$utils = function() {
        return P;
      }, E.isValid = function() {
        return this.$d.toString() !== m;
      }, E.isSame = function(A, D) {
        var R = M(A);
        return this.startOf(D) <= R && R <= this.endOf(D);
      }, E.isAfter = function(A, D) {
        return M(A) < this.startOf(D);
      }, E.isBefore = function(A, D) {
        return this.endOf(D) < M(A);
      }, E.$g = function(A, D, R) {
        return P.u(A) ? this[D] : this.set(R, A);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(A, D) {
        var R = this, k = !!P.u(D) || D, L = P.p(A), H = function(z, K) {
          var q = P.w(R.$u ? Date.UTC(R.$y, K, z) : new Date(R.$y, K, z), R);
          return k ? q : q.endOf(c);
        }, B = function(z, K) {
          return P.w(R.toDate()[z].apply(R.toDate("s"), (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(K)), R);
        }, W = this.$W, U = this.$M, G = this.$D, Q = "set" + (this.$u ? "UTC" : "");
        switch (L) {
          case p:
            return k ? H(1, 0) : H(31, 11);
          case f:
            return k ? H(1, U) : H(0, U + 1);
          case u:
            var ne = this.$locale().weekStart || 0, te = (W < ne ? W + 7 : W) - ne;
            return H(k ? G - te : G + (6 - te), U);
          case c:
          case v:
            return B(Q + "Hours", 0);
          case s:
            return B(Q + "Minutes", 1);
          case l:
            return B(Q + "Seconds", 2);
          case o:
            return B(Q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function(A) {
        return this.startOf(A, !1);
      }, E.$set = function(A, D) {
        var R, k = P.p(A), L = "set" + (this.$u ? "UTC" : ""), H = (R = {}, R[c] = L + "Date", R[v] = L + "Date", R[f] = L + "Month", R[p] = L + "FullYear", R[s] = L + "Hours", R[l] = L + "Minutes", R[o] = L + "Seconds", R[i] = L + "Milliseconds", R)[k], B = k === c ? this.$D + (D - this.$W) : D;
        if (k === f || k === p) {
          var W = this.clone().set(v, 1);
          W.$d[H](B), W.init(), this.$d = W.set(v, Math.min(this.$D, W.daysInMonth())).$d;
        } else H && this.$d[H](B);
        return this.init(), this;
      }, E.set = function(A, D) {
        return this.clone().$set(A, D);
      }, E.get = function(A) {
        return this[P.p(A)]();
      }, E.add = function(A, D) {
        var R, k = this;
        A = Number(A);
        var L = P.p(D), H = function(U) {
          var G = M(k);
          return P.w(G.date(G.date() + Math.round(U * A)), k);
        };
        if (L === f) return this.set(f, this.$M + A);
        if (L === p) return this.set(p, this.$y + A);
        if (L === c) return H(1);
        if (L === u) return H(7);
        var B = (R = {}, R[l] = n, R[s] = a, R[o] = r, R)[L] || 1, W = this.$d.getTime() + A * B;
        return P.w(W, this);
      }, E.subtract = function(A, D) {
        return this.add(-1 * A, D);
      }, E.format = function(A) {
        var D = this, R = this.$locale();
        if (!this.isValid()) return R.invalidDate || m;
        var k = A || "YYYY-MM-DDTHH:mm:ssZ", L = P.z(this), H = this.$H, B = this.$m, W = this.$M, U = R.weekdays, G = R.months, Q = R.meridiem, ne = function(K, q, F, J) {
          return K && (K[q] || K(D, k)) || F[q].slice(0, J);
        }, te = function(K) {
          return P.s(H % 12 || 12, K, "0");
        }, z = Q || function(K, q, F) {
          var J = K < 12 ? "AM" : "PM";
          return F ? J.toLowerCase() : J;
        };
        return k.replace(y, function(K, q) {
          return q || function(F) {
            switch (F) {
              case "YY":
                return String(D.$y).slice(-2);
              case "YYYY":
                return P.s(D.$y, 4, "0");
              case "M":
                return W + 1;
              case "MM":
                return P.s(W + 1, 2, "0");
              case "MMM":
                return ne(R.monthsShort, W, G, 3);
              case "MMMM":
                return ne(G, W);
              case "D":
                return D.$D;
              case "DD":
                return P.s(D.$D, 2, "0");
              case "d":
                return String(D.$W);
              case "dd":
                return ne(R.weekdaysMin, D.$W, U, 2);
              case "ddd":
                return ne(R.weekdaysShort, D.$W, U, 3);
              case "dddd":
                return U[D.$W];
              case "H":
                return String(H);
              case "HH":
                return P.s(H, 2, "0");
              case "h":
                return te(1);
              case "hh":
                return te(2);
              case "a":
                return z(H, B, !0);
              case "A":
                return z(H, B, !1);
              case "m":
                return String(B);
              case "mm":
                return P.s(B, 2, "0");
              case "s":
                return String(D.$s);
              case "ss":
                return P.s(D.$s, 2, "0");
              case "SSS":
                return P.s(D.$ms, 3, "0");
              case "Z":
                return L;
            }
            return null;
          }(K) || L.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(A, D, R) {
        var k, L = this, H = P.p(D), B = M(A), W = (B.utcOffset() - this.utcOffset()) * n, U = this - B, G = function() {
          return P.m(L, B);
        };
        switch (H) {
          case p:
            k = G() / 12;
            break;
          case f:
            k = G();
            break;
          case d:
            k = G() / 3;
            break;
          case u:
            k = (U - W) / 6048e5;
            break;
          case c:
            k = (U - W) / 864e5;
            break;
          case s:
            k = U / a;
            break;
          case l:
            k = U / n;
            break;
          case o:
            k = U / r;
            break;
          default:
            k = U;
        }
        return R ? k : P.a(k);
      }, E.daysInMonth = function() {
        return this.endOf(f).$D;
      }, E.$locale = function() {
        return x[this.$L];
      }, E.locale = function(A, D) {
        if (!A) return this.$L;
        var R = this.clone(), k = _(A, D, !0);
        return k && (R.$L = k), R;
      }, E.clone = function() {
        return P.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, j;
    }(), N = I.prototype;
    return M.prototype = N, [["$ms", i], ["$s", o], ["$m", l], ["$H", s], ["$W", c], ["$M", f], ["$y", p], ["$D", v]].forEach(function(j) {
      N[j[1]] = function(E) {
        return this.$g(E, j[0], j[1]);
      };
    }), M.extend = function(j, E) {
      return j.$i || (j(E, I, M), j.$i = !0), M;
    }, M.locale = _, M.isDayjs = C, M.unix = function(j) {
      return M(1e3 * j);
    }, M.en = x[g], M.Ls = x, M.p = {}, M;
  });
})(mw);
var nY = mw.exports;
const ct = /* @__PURE__ */ We(nY);
var gw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    return function(r, n) {
      n.prototype.weekday = function(a) {
        var i = this.$locale().weekStart || 0, o = this.$W, l = (o < i ? o + 7 : o) - i;
        return this.$utils().u(a) ? l : this.subtract(l, "day").add(a, "day");
      };
    };
  });
})(gw);
var aY = gw.exports;
const iY = /* @__PURE__ */ We(aY);
var yw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    return function(r, n, a) {
      var i = n.prototype, o = function(f) {
        return f && (f.indexOf ? f : f.s);
      }, l = function(f, d, p, v, m) {
        var h = f.name ? f : f.$locale(), y = o(h[d]), w = o(h[p]), S = y || w.map(function(g) {
          return g.slice(0, v);
        });
        if (!m) return S;
        var O = h.weekStart;
        return S.map(function(g, x) {
          return S[(x + (O || 0)) % 7];
        });
      }, s = function() {
        return a.Ls[a.locale()];
      }, c = function(f, d) {
        return f.formats[d] || function(p) {
          return p.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(v, m, h) {
            return m || h.slice(1);
          });
        }(f.formats[d.toUpperCase()]);
      }, u = function() {
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
        return u.bind(this)();
      }, a.localeData = function() {
        var f = s();
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
        return l(s(), "months");
      }, a.monthsShort = function() {
        return l(s(), "monthsShort", "months", 3);
      }, a.weekdays = function(f) {
        return l(s(), "weekdays", null, null, f);
      }, a.weekdaysShort = function(f) {
        return l(s(), "weekdaysShort", "weekdays", 3, f);
      }, a.weekdaysMin = function(f) {
        return l(s(), "weekdaysMin", "weekdays", 2, f);
      };
    };
  });
})(yw);
var oY = yw.exports;
const lY = /* @__PURE__ */ We(oY);
var bw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    var r = "week", n = "year";
    return function(a, i, o) {
      var l = i.prototype;
      l.week = function(s) {
        if (s === void 0 && (s = null), s !== null) return this.add(7 * (s - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var u = o(this).startOf(n).add(1, n).date(c), f = o(this).endOf(r);
          if (u.isBefore(f)) return 1;
        }
        var d = o(this).startOf(n).date(c).startOf(r).subtract(1, "millisecond"), p = this.diff(d, r, !0);
        return p < 0 ? o(this).startOf("week").week() : Math.ceil(p);
      }, l.weeks = function(s) {
        return s === void 0 && (s = null), this.week(s);
      };
    };
  });
})(bw);
var sY = bw.exports;
const cY = /* @__PURE__ */ We(sY);
var xw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    return function(r, n) {
      n.prototype.weekYear = function() {
        var a = this.month(), i = this.week(), o = this.year();
        return i === 1 && a === 11 ? o + 1 : a === 0 && i >= 52 ? o - 1 : o;
      };
    };
  });
})(xw);
var uY = xw.exports;
const fY = /* @__PURE__ */ We(uY);
var ww = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    return function(r, n) {
      var a = n.prototype, i = a.format;
      a.format = function(o) {
        var l = this, s = this.$locale();
        if (!this.isValid()) return i.bind(this)(o);
        var c = this.$utils(), u = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(f) {
          switch (f) {
            case "Q":
              return Math.ceil((l.$M + 1) / 3);
            case "Do":
              return s.ordinal(l.$D);
            case "gggg":
              return l.weekYear();
            case "GGGG":
              return l.isoWeekYear();
            case "wo":
              return s.ordinal(l.week(), "W");
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
        return i.bind(this)(u);
      };
    };
  });
})(ww);
var dY = ww.exports;
const pY = /* @__PURE__ */ We(dY);
var Sw = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(ur, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, i = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, s = {}, c = function(h) {
      return (h = +h) + (h > 68 ? 1900 : 2e3);
    }, u = function(h) {
      return function(y) {
        this[h] = +y;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(h) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z") return 0;
        var w = y.match(/([+-]|\d\d)/g), S = 60 * w[1] + (+w[2] || 0);
        return S === 0 ? 0 : w[0] === "+" ? -S : S;
      }(h);
    }], d = function(h) {
      var y = s[h];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, p = function(h, y) {
      var w, S = s.meridiem;
      if (S) {
        for (var O = 1; O <= 24; O += 1) if (h.indexOf(S(O, 0, y)) > -1) {
          w = O > 12;
          break;
        }
      } else w = h === (y ? "pm" : "PM");
      return w;
    }, v = { A: [l, function(h) {
      this.afternoon = p(h, !1);
    }], a: [l, function(h) {
      this.afternoon = p(h, !0);
    }], Q: [a, function(h) {
      this.month = 3 * (h - 1) + 1;
    }], S: [a, function(h) {
      this.milliseconds = 100 * +h;
    }], SS: [i, function(h) {
      this.milliseconds = 10 * +h;
    }], SSS: [/\d{3}/, function(h) {
      this.milliseconds = +h;
    }], s: [o, u("seconds")], ss: [o, u("seconds")], m: [o, u("minutes")], mm: [o, u("minutes")], H: [o, u("hours")], h: [o, u("hours")], HH: [o, u("hours")], hh: [o, u("hours")], D: [o, u("day")], DD: [i, u("day")], Do: [l, function(h) {
      var y = s.ordinal, w = h.match(/\d+/);
      if (this.day = w[0], y) for (var S = 1; S <= 31; S += 1) y(S).replace(/\[|\]/g, "") === h && (this.day = S);
    }], w: [o, u("week")], ww: [i, u("week")], M: [o, u("month")], MM: [i, u("month")], MMM: [l, function(h) {
      var y = d("months"), w = (d("monthsShort") || y.map(function(S) {
        return S.slice(0, 3);
      })).indexOf(h) + 1;
      if (w < 1) throw new Error();
      this.month = w % 12 || w;
    }], MMMM: [l, function(h) {
      var y = d("months").indexOf(h) + 1;
      if (y < 1) throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(h) {
      this.year = c(h);
    }], YYYY: [/\d{4}/, u("year")], Z: f, ZZ: f };
    function m(h) {
      var y, w;
      y = h, w = s && s.formats;
      for (var S = (h = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, P, I) {
        var N = I && I.toUpperCase();
        return P || w[I] || r[I] || w[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, E, A) {
          return E || A.slice(1);
        });
      })).match(n), O = S.length, g = 0; g < O; g += 1) {
        var x = S[g], $ = v[x], C = $ && $[0], _ = $ && $[1];
        S[g] = _ ? { regex: C, parser: _ } : x.replace(/^\[|\]$/g, "");
      }
      return function(M) {
        for (var P = {}, I = 0, N = 0; I < O; I += 1) {
          var j = S[I];
          if (typeof j == "string") N += j.length;
          else {
            var E = j.regex, A = j.parser, D = M.slice(N), R = E.exec(D)[0];
            A.call(P, R), M = M.replace(R, "");
          }
        }
        return function(k) {
          var L = k.afternoon;
          if (L !== void 0) {
            var H = k.hours;
            L ? H < 12 && (k.hours += 12) : H === 12 && (k.hours = 0), delete k.afternoon;
          }
        }(P), P;
      };
    }
    return function(h, y, w) {
      w.p.customParseFormat = !0, h && h.parseTwoDigitYear && (c = h.parseTwoDigitYear);
      var S = y.prototype, O = S.parse;
      S.parse = function(g) {
        var x = g.date, $ = g.utc, C = g.args;
        this.$u = $;
        var _ = C[1];
        if (typeof _ == "string") {
          var M = C[2] === !0, P = C[3] === !0, I = M || P, N = C[2];
          P && (N = C[2]), s = this.$locale(), !M && N && (s = w.Ls[N]), this.$d = function(D, R, k, L) {
            try {
              if (["x", "X"].indexOf(R) > -1) return new Date((R === "X" ? 1e3 : 1) * D);
              var H = m(R)(D), B = H.year, W = H.month, U = H.day, G = H.hours, Q = H.minutes, ne = H.seconds, te = H.milliseconds, z = H.zone, K = H.week, q = /* @__PURE__ */ new Date(), F = U || (B || W ? 1 : q.getDate()), J = B || q.getFullYear(), Z = 0;
              B && !W || (Z = W > 0 ? W - 1 : q.getMonth());
              var le, re = G || 0, ae = Q || 0, de = ne || 0, $e = te || 0;
              return z ? new Date(Date.UTC(J, Z, F, re, ae, de, $e + 60 * z.offset * 1e3)) : k ? new Date(Date.UTC(J, Z, F, re, ae, de, $e)) : (le = new Date(J, Z, F, re, ae, de, $e), K && (le = L(le).week(K).toDate()), le);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(x, _, $, w), this.init(), N && N !== !0 && (this.$L = this.locale(N).$L), I && x != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
        } else if (_ instanceof Array) for (var j = _.length, E = 1; E <= j; E += 1) {
          C[1] = _[E - 1];
          var A = w.apply(this, C);
          if (A.isValid()) {
            this.$d = A.$d, this.$L = A.$L, this.init();
            break;
          }
          E === j && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else O.call(this, g);
      };
    };
  });
})(Sw);
var hY = Sw.exports;
const vY = /* @__PURE__ */ We(hY);
ct.extend(vY);
ct.extend(pY);
ct.extend(iY);
ct.extend(lY);
ct.extend(cY);
ct.extend(fY);
ct.extend(function(e, t) {
  var r = t.prototype, n = r.format;
  r.format = function(i) {
    var o = (i || "").replace("Wo", "wo");
    return n.bind(this)(o);
  };
});
var mY = {
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
}, pn = function(t) {
  var r = mY[t];
  return r || t.split("_")[0];
}, Mg = function() {
  eS(!1, "Not match any format. Please help to fire a issue about this.");
}, gY = {
  // get
  getNow: function() {
    var t = ct();
    return typeof t.tz == "function" ? t.tz() : t;
  },
  getFixedDate: function(t) {
    return ct(t, ["YYYY-M-DD", "YYYY-MM-DD"]);
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
      return ct().locale(pn(t)).localeData().firstDayOfWeek();
    },
    getWeekFirstDate: function(t, r) {
      return r.locale(pn(t)).weekday(0);
    },
    getWeek: function(t, r) {
      return r.locale(pn(t)).week();
    },
    getShortWeekDays: function(t) {
      return ct().locale(pn(t)).localeData().weekdaysMin();
    },
    getShortMonths: function(t) {
      return ct().locale(pn(t)).localeData().monthsShort();
    },
    format: function(t, r, n) {
      return r.locale(pn(t)).format(n);
    },
    parse: function(t, r, n) {
      for (var a = pn(t), i = 0; i < n.length; i += 1) {
        var o = n[i], l = r;
        if (o.includes("wo") || o.includes("Wo")) {
          for (var s = l.split("-")[0], c = l.split("-")[1], u = ct(s, "YYYY").startOf("year").locale(a), f = 0; f <= 52; f += 1) {
            var d = u.add(f, "week");
            if (d.format("Wo") === c)
              return d;
          }
          return Mg(), null;
        }
        var p = ct(l, o, !0).locale(a);
        if (p.isValid())
          return p;
      }
      return r && Mg(), null;
    }
  }
};
function qs(e, t) {
  return e !== void 0 ? e : t ? "bottomRight" : "bottomLeft";
}
function Ow(e, t) {
  var r = qs(e, t), n = r == null ? void 0 : r.toLowerCase().endsWith("right"), a = n ? "insetInlineEnd" : "insetInlineStart";
  return t && (a = ["insetInlineStart", "insetInlineEnd"].find(function(i) {
    return i !== a;
  })), a;
}
var hr = /* @__PURE__ */ b.createContext(null), yY = {
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
function $w(e) {
  var t = e.popupElement, r = e.popupStyle, n = e.popupClassName, a = e.popupAlign, i = e.transitionName, o = e.getPopupContainer, l = e.children, s = e.range, c = e.placement, u = e.builtinPlacements, f = u === void 0 ? yY : u, d = e.direction, p = e.visible, v = e.onClose, m = b.useContext(hr), h = m.prefixCls, y = "".concat(h, "-dropdown"), w = qs(c, d === "rtl");
  return /* @__PURE__ */ b.createElement(tS, {
    showAction: [],
    hideAction: ["click"],
    popupPlacement: w,
    builtinPlacements: f,
    prefixCls: y,
    popupTransitionName: i,
    popup: t,
    popupAlign: a,
    popupVisible: p,
    popupClassName: je(n, ve(ve({}, "".concat(y, "-range"), s), "".concat(y, "-rtl"), d === "rtl")),
    popupStyle: r,
    stretch: "minWidth",
    getPopupContainer: o,
    onPopupVisibleChange: function(O) {
      O || v();
    }
  }, l);
}
function up(e, t) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0", n = String(e); n.length < t; )
    n = "".concat(r).concat(n);
  return n;
}
function jn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function yi(e, t, r) {
  var n = Vt(e);
  return n[t] = r, n;
}
function Gs(e, t) {
  var r = {}, n = t || Object.keys(e);
  return n.forEach(function(a) {
    e[a] !== void 0 && (r[a] = e[a]);
  }), r;
}
function Cw(e, t, r) {
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
function Pw(e, t, r) {
  var n = r !== void 0 ? r : t[t.length - 1], a = t.find(function(i) {
    return e[i];
  });
  return n !== a ? e[a] : void 0;
}
function _w(e) {
  return Gs(e, ["placement", "builtinPlacements", "popupAlign", "getPopupContainer", "transitionName", "direction"]);
}
function fp(e, t, r, n) {
  Oe.env.NODE_ENV !== "production" && (dr(!t, "'dateRender' is deprecated. Please use 'cellRender' instead."), dr(!r, "'monthCellRender' is deprecated. Please use 'cellRender' instead."));
  var a = b.useMemo(function() {
    return e || function(o, l) {
      var s = o;
      return t && l.type === "date" ? t(s, l.today) : r && l.type === "month" ? r(s, l.locale) : l.originNode;
    };
  }, [e, r, t]), i = b.useCallback(function(o, l) {
    return a(o, ue(ue({}, l), {}, {
      range: n
    }));
  }, [a, n]);
  return i;
}
function Ew(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = b.useState([!1, !1]), a = X(n, 2), i = a[0], o = a[1], l = function(u, f) {
    o(function(d) {
      return yi(d, f, u);
    });
  }, s = b.useMemo(function() {
    return i.map(function(c, u) {
      if (c)
        return !0;
      var f = e[u];
      return f ? !!(!r[u] && !f || f && t(f, {
        activeIndex: u
      })) : !1;
    });
  }, [e, i, t, r]);
  return [s, l];
}
function Aw(e, t, r, n, a) {
  var i = "", o = [];
  return e && o.push(a ? "hh" : "HH"), t && o.push("mm"), r && o.push("ss"), i = o.join(":"), n && (i += ".SSS"), a && (i += " A"), i;
}
function bY(e, t, r, n, a, i) {
  var o = e.fieldDateTimeFormat, l = e.fieldDateFormat, s = e.fieldTimeFormat, c = e.fieldMonthFormat, u = e.fieldYearFormat, f = e.fieldWeekFormat, d = e.fieldQuarterFormat, p = e.yearFormat, v = e.cellYearFormat, m = e.cellQuarterFormat, h = e.dayFormat, y = e.cellDateFormat, w = Aw(t, r, n, a, i);
  return ue(ue({}, e), {}, {
    fieldDateTimeFormat: o || "YYYY-MM-DD ".concat(w),
    fieldDateFormat: l || "YYYY-MM-DD",
    fieldTimeFormat: s || w,
    fieldMonthFormat: c || "YYYY-MM",
    fieldYearFormat: u || "YYYY",
    fieldWeekFormat: f || "gggg-wo",
    fieldQuarterFormat: d || "YYYY-[Q]Q",
    yearFormat: p || "YYYY",
    cellYearFormat: v || "YYYY",
    cellQuarterFormat: m || "[Q]Q",
    cellDateFormat: y || h || "D"
  });
}
function Tw(e, t) {
  var r = t.showHour, n = t.showMinute, a = t.showSecond, i = t.showMillisecond, o = t.use12Hours;
  return T.useMemo(function() {
    return bY(e, r, n, a, i, o);
  }, [e, r, n, a, i, o]);
}
function ii(e, t, r) {
  return r ?? t.some(function(n) {
    return e.includes(n);
  });
}
var xY = [
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
function wY(e) {
  var t = Gs(e, xY), r = e.format, n = e.picker, a = null;
  return r && (a = r, Array.isArray(a) && (a = a[0]), a = An(a) === "object" ? a.format : a), n === "time" && (t.format = a), [t, a];
}
function SY(e) {
  return e && typeof e == "string";
}
function Mw(e, t, r, n) {
  return [e, t, r, n].some(function(a) {
    return a !== void 0;
  });
}
function Iw(e, t, r, n, a) {
  var i = t, o = r, l = n;
  if (!e && !i && !o && !l && !a)
    i = !0, o = !0, l = !0;
  else if (e) {
    var s, c, u, f = [i, o, l].some(function(v) {
      return v === !1;
    }), d = [i, o, l].some(function(v) {
      return v === !0;
    }), p = f ? !0 : !d;
    i = (s = i) !== null && s !== void 0 ? s : p, o = (c = o) !== null && c !== void 0 ? c : p, l = (u = l) !== null && u !== void 0 ? u : p;
  }
  return [i, o, l, a];
}
function jw(e) {
  var t = e.showTime, r = wY(e), n = X(r, 2), a = n[0], i = n[1], o = t && An(t) === "object" ? t : {}, l = ue(ue({
    defaultOpenValue: o.defaultOpenValue || o.defaultValue
  }, a), o), s = l.showMillisecond, c = l.showHour, u = l.showMinute, f = l.showSecond, d = Mw(c, u, f, s), p = Iw(d, c, u, f, s), v = X(p, 3);
  return c = v[0], u = v[1], f = v[2], [l, ue(ue({}, l), {}, {
    showHour: c,
    showMinute: u,
    showSecond: f,
    showMillisecond: s
  }), l.format, i];
}
function Dw(e, t, r, n, a) {
  var i = e === "time";
  if (e === "datetime" || i) {
    for (var o = n, l = Cw(e, a, null), s = l, c = [t, r], u = 0; u < c.length; u += 1) {
      var f = jn(c[u])[0];
      if (SY(f)) {
        s = f;
        break;
      }
    }
    var d = o.showHour, p = o.showMinute, v = o.showSecond, m = o.showMillisecond, h = o.use12Hours, y = ii(s, ["a", "A", "LT", "LLL", "LTS"], h), w = Mw(d, p, v, m);
    w || (d = ii(s, ["H", "h", "k", "LT", "LLL"]), p = ii(s, ["m", "LT", "LLL"]), v = ii(s, ["s", "LTS"]), m = ii(s, ["SSS"]));
    var S = Iw(w, d, p, v, m), O = X(S, 3);
    d = O[0], p = O[1], v = O[2];
    var g = t || Aw(d, p, v, m, y);
    return ue(ue({}, o), {}, {
      // Format
      format: g,
      // Show Config
      showHour: d,
      showMinute: p,
      showSecond: v,
      showMillisecond: m,
      use12Hours: y
    });
  }
  return null;
}
function OY(e, t, r) {
  if (Oe.env.NODE_ENV !== "production" && r && dr(!1, "`clearIcon` will be removed in future. Please use `allowClear` instead."), t === !1)
    return null;
  var n = t && An(t) === "object" ? t : {};
  return n.clearIcon || r || /* @__PURE__ */ b.createElement("span", {
    className: "".concat(e, "-clear-btn")
  });
}
var au = 7;
function sn(e, t, r) {
  return !e && !t || e === t ? !0 : !e || !t ? !1 : r();
}
function Ff(e, t, r) {
  return sn(t, r, function() {
    var n = Math.floor(e.getYear(t) / 10), a = Math.floor(e.getYear(r) / 10);
    return n === a;
  });
}
function En(e, t, r) {
  return sn(t, r, function() {
    return e.getYear(t) === e.getYear(r);
  });
}
function Ig(e, t) {
  var r = Math.floor(e.getMonth(t) / 3);
  return r + 1;
}
function $Y(e, t, r) {
  return sn(t, r, function() {
    return En(e, t, r) && Ig(e, t) === Ig(e, r);
  });
}
function dp(e, t, r) {
  return sn(t, r, function() {
    return En(e, t, r) && e.getMonth(t) === e.getMonth(r);
  });
}
function pp(e, t, r) {
  return sn(t, r, function() {
    return En(e, t, r) && dp(e, t, r) && e.getDate(t) === e.getDate(r);
  });
}
function Nw(e, t, r) {
  return sn(t, r, function() {
    return e.getHour(t) === e.getHour(r) && e.getMinute(t) === e.getMinute(r) && e.getSecond(t) === e.getSecond(r);
  });
}
function Rw(e, t, r) {
  return sn(t, r, function() {
    return pp(e, t, r) && Nw(e, t, r) && e.getMillisecond(t) === e.getMillisecond(r);
  });
}
function si(e, t, r, n) {
  return sn(r, n, function() {
    var a = e.locale.getWeekFirstDate(t, r), i = e.locale.getWeekFirstDate(t, n);
    return En(e, a, i) && e.locale.getWeek(t, r) === e.locale.getWeek(t, n);
  });
}
function Tt(e, t, r, n, a) {
  switch (a) {
    case "date":
      return pp(e, r, n);
    case "week":
      return si(e, t.locale, r, n);
    case "month":
      return dp(e, r, n);
    case "quarter":
      return $Y(e, r, n);
    case "year":
      return En(e, r, n);
    case "decade":
      return Ff(e, r, n);
    case "time":
      return Nw(e, r, n);
    default:
      return Rw(e, r, n);
  }
}
function Ks(e, t, r, n) {
  return !t || !r || !n ? !1 : e.isAfter(n, t) && e.isAfter(r, n);
}
function ko(e, t, r, n, a) {
  return Tt(e, t, r, n, a) ? !0 : e.isAfter(r, n);
}
function CY(e, t, r) {
  var n = t.locale.getWeekFirstDay(e), a = t.setDate(r, 1), i = t.getWeekDay(a), o = t.addDate(a, n - i);
  return t.getMonth(o) === t.getMonth(r) && t.getDate(o) > 1 && (o = t.addDate(o, -7)), o;
}
function yt(e, t) {
  var r = t.generateConfig, n = t.locale, a = t.format;
  return e ? typeof a == "function" ? a(e) : r.locale.format(n.locale, e, a) : "";
}
function Ql(e, t, r) {
  var n = t, a = ["getHour", "getMinute", "getSecond", "getMillisecond"], i = ["setHour", "setMinute", "setSecond", "setMillisecond"];
  return i.forEach(function(o, l) {
    r ? n = e[o](n, e[a[l]](r)) : n = e[o](n, 0);
  }), n;
}
function PY(e, t, r, n, a) {
  var i = ut(function(o, l) {
    return !!(r && r(o, l) || n && e.isAfter(n, o) && !Tt(e, t, n, o, l.type) || a && e.isAfter(o, a) && !Tt(e, t, a, o, l.type));
  });
  return i;
}
function _Y(e, t, r) {
  return b.useMemo(function() {
    var n = Cw(e, t, r), a = jn(n), i = a[0], o = An(i) === "object" && i.type === "mask" ? i.format : null;
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
function EY(e, t, r) {
  return typeof e[0] == "function" || r ? !0 : t;
}
function AY(e, t, r, n) {
  var a = ut(function(i, o) {
    var l = ue({
      type: t
    }, o);
    if (delete l.activeIndex, // Date object is invalid
    !e.isValidate(i) || // Date is disabled by `disabledDate`
    r && r(i, l))
      return !0;
    if ((t === "date" || t === "time") && n) {
      var s, c = o && o.activeIndex === 1 ? "end" : "start", u = ((s = n.disabledTime) === null || s === void 0 ? void 0 : s.call(n, i, c, {
        from: l.from
      })) || {}, f = u.disabledHours, d = u.disabledMinutes, p = u.disabledSeconds, v = u.disabledMilliseconds, m = n.disabledHours, h = n.disabledMinutes, y = n.disabledSeconds, w = f || m, S = d || h, O = p || y, g = e.getHour(i), x = e.getMinute(i), $ = e.getSecond(i), C = e.getMillisecond(i);
      if (w && w().includes(g) || S && S(g).includes(x) || O && O(g, x).includes($) || v && v(g, x, $).includes(C))
        return !0;
    }
    return !1;
  });
  return a;
}
function Bo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = b.useMemo(function() {
    var n = e && jn(e);
    return t && n && (n[1] = n[1] || n[0]), n;
  }, [e, t]);
  return r;
}
function kw(e, t) {
  var r = e.generateConfig, n = e.locale, a = e.picker, i = a === void 0 ? "date" : a, o = e.prefixCls, l = o === void 0 ? "rc-picker" : o, s = e.styles, c = s === void 0 ? {} : s, u = e.classNames, f = u === void 0 ? {} : u, d = e.order, p = d === void 0 ? !0 : d, v = e.components, m = v === void 0 ? {} : v, h = e.inputRender, y = e.allowClear, w = e.clearIcon, S = e.needConfirm, O = e.multiple, g = e.format, x = e.inputReadOnly, $ = e.disabledDate, C = e.minDate, _ = e.maxDate, M = e.showTime, P = e.value, I = e.defaultValue, N = e.pickerValue, j = e.defaultPickerValue, E = Bo(P), A = Bo(I), D = Bo(N), R = Bo(j), k = i === "date" && M ? "datetime" : i, L = k === "time" || k === "datetime", H = L || O, B = S ?? L, W = jw(e), U = X(W, 4), G = U[0], Q = U[1], ne = U[2], te = U[3], z = Tw(n, Q), K = b.useMemo(function() {
    return Dw(k, ne, te, G, z);
  }, [k, ne, te, G, z]);
  Oe.env.NODE_ENV !== "production" && i === "time" && ["disabledHours", "disabledMinutes", "disabledSeconds"].some(function(Be) {
    return e[Be];
  }) && dr(!1, "'disabledHours', 'disabledMinutes', 'disabledSeconds' will be removed in the next major version, please use 'disabledTime' instead.");
  var q = b.useMemo(function() {
    return ue(ue({}, e), {}, {
      prefixCls: l,
      locale: z,
      picker: i,
      styles: c,
      classNames: f,
      order: p,
      components: ue({
        input: h
      }, m),
      clearIcon: OY(l, y, w),
      showTime: K,
      value: E,
      defaultValue: A,
      pickerValue: D,
      defaultPickerValue: R
    }, t == null ? void 0 : t());
  }, [e]), F = _Y(k, z, g), J = X(F, 2), Z = J[0], le = J[1], re = EY(Z, x, O), ae = PY(r, n, $, C, _), de = AY(r, i, ae, K), $e = b.useMemo(function() {
    return ue(ue({}, q), {}, {
      needConfirm: B,
      inputReadOnly: re,
      disabledDate: ae
    });
  }, [q, B, re, ae]);
  return [$e, k, H, Z, le, de];
}
function TY(e, t, r) {
  var n = fr(t, {
    value: e
  }), a = X(n, 2), i = a[0], o = a[1], l = T.useRef(e), s = T.useRef(), c = function() {
    Wt.cancel(s.current);
  }, u = ut(function() {
    o(l.current), r && i !== l.current && r(l.current);
  }), f = ut(function(d, p) {
    c(), l.current = d, d || p ? u() : s.current = Wt(u);
  });
  return T.useEffect(function() {
    return c;
  }, []), [i, f];
}
function Bw(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = arguments.length > 3 ? arguments[3] : void 0, a = r.every(function(u) {
    return u;
  }) ? !1 : e, i = TY(a, t || !1, n), o = X(i, 2), l = o[0], s = o[1];
  function c(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (!f.inherit || l) && s(u, f.force);
  }
  return [l, c];
}
function Lw(e) {
  var t = b.useRef();
  return b.useImperativeHandle(e, function() {
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
function Hw(e, t) {
  return b.useMemo(function() {
    return e || (t ? (dr(!1, "`ranges` is deprecated. Please use `presets` instead."), Object.entries(t).map(function(r) {
      var n = X(r, 2), a = n[0], i = n[1];
      return {
        label: a,
        value: i
      };
    })) : []);
  }, [e, t]);
}
function hp(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, n = b.useRef(t);
  n.current = t, rS(function() {
    if (e)
      n.current(e);
    else {
      var a = Wt(function() {
        n.current(e);
      }, r);
      return function() {
        Wt.cancel(a);
      };
    }
  }, [e]);
}
function Fw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = b.useState(0), a = X(n, 2), i = a[0], o = a[1], l = b.useState(!1), s = X(l, 2), c = s[0], u = s[1], f = b.useRef([]), d = b.useRef(null), p = function(y) {
    u(y);
  }, v = function(y) {
    return y && (d.current = y), d.current;
  }, m = function(y) {
    var w = f.current, S = new Set(w.filter(function(g) {
      return y[g] || t[g];
    })), O = w[w.length - 1] === 0 ? 1 : 0;
    return S.size >= 2 || e[O] ? null : O;
  };
  return hp(c || r, function() {
    c || (f.current = []);
  }), b.useEffect(function() {
    c && f.current.push(i);
  }, [c, i]), [c, p, v, i, o, m, f.current];
}
function MY(e, t, r, n, a, i) {
  var o = r[r.length - 1], l = function(c, u) {
    var f = X(e, 2), d = f[0], p = f[1], v = ue(ue({}, u), {}, {
      from: Pw(e, r)
    });
    return o === 1 && t[0] && d && // Same date isOK
    !Tt(n, a, d, c, v.type) && // Before start date
    n.isAfter(d, c) || o === 0 && t[1] && p && // Same date isOK
    !Tt(n, a, p, c, v.type) && // After end date
    n.isAfter(c, p) ? !0 : i == null ? void 0 : i(c, v);
  };
  return l;
}
function ci(e, t, r, n) {
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
var iu = [];
function Ww(e, t, r, n, a, i, o, l) {
  var s = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : iu, c = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : iu, u = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : iu, f = arguments.length > 11 ? arguments[11] : void 0, d = arguments.length > 12 ? arguments[12] : void 0, p = arguments.length > 13 ? arguments[13] : void 0, v = o === "time", m = i || 0, h = function(D) {
    var R = e.getNow();
    return v && (R = Ql(e, R)), s[D] || r[D] || R;
  }, y = X(c, 2), w = y[0], S = y[1], O = fr(function() {
    return h(0);
  }, {
    value: w
  }), g = X(O, 2), x = g[0], $ = g[1], C = fr(function() {
    return h(1);
  }, {
    value: S
  }), _ = X(C, 2), M = _[0], P = _[1], I = b.useMemo(function() {
    var A = [x, M][m];
    return v ? A : Ql(e, A, u[m]);
  }, [v, x, M, m, e, u]), N = function(D) {
    var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "panel", k = [$, P][m];
    k(D);
    var L = [x, M];
    L[m] = D, f && (!Tt(e, t, x, L[0], o) || !Tt(e, t, M, L[1], o)) && f(L, {
      source: R,
      range: m === 1 ? "end" : "start",
      mode: n
    });
  }, j = function(D, R) {
    if (l) {
      var k = {
        date: "month",
        week: "month",
        month: "year",
        quarter: "year"
      }, L = k[o];
      if (L && !Tt(e, t, D, R, L))
        return ci(e, o, R, -1);
      if (o === "year" && D) {
        var H = Math.floor(e.getYear(D) / 10), B = Math.floor(e.getYear(R) / 10);
        if (H !== B)
          return ci(e, o, R, -1);
      }
    }
    return R;
  }, E = b.useRef(null);
  return Br(function() {
    if (a && !s[m]) {
      var A = v ? null : e.getNow();
      if (E.current !== null && E.current !== m ? A = [x, M][m ^ 1] : r[m] ? A = m === 0 ? r[0] : j(r[0], r[1]) : r[m ^ 1] && (A = r[m ^ 1]), A) {
        d && e.isAfter(d, A) && (A = d);
        var D = l ? ci(e, o, A, 1) : A;
        p && e.isAfter(D, p) && (A = l ? ci(e, o, p, -1) : p), N(A, "reset");
      }
    }
  }, [a, m, r[m]]), b.useEffect(function() {
    a ? E.current = m : E.current = null;
  }, [a, m]), Br(function() {
    a && s && s[m] && N(s[m], "reset");
  }, [a, m]), [I, N];
}
function Vw(e, t) {
  var r = b.useRef(e), n = b.useState({}), a = X(n, 2), i = a[1], o = function(c) {
    return c && t !== void 0 ? t : r.current;
  }, l = function(c) {
    r.current = c, i({});
  };
  return [o, l, o(!0)];
}
var IY = [];
function zw(e, t, r) {
  var n = function(o) {
    return o.map(function(l) {
      return yt(l, {
        generateConfig: e,
        locale: t,
        format: r[0]
      });
    });
  }, a = function(o, l) {
    for (var s = Math.max(o.length, l.length), c = -1, u = 0; u < s; u += 1) {
      var f = o[u] || null, d = l[u] || null;
      if (f !== d && !Rw(e, f, d)) {
        c = u;
        break;
      }
    }
    return [c < 0, c !== 0];
  };
  return [n, a];
}
function Uw(e, t) {
  return Vt(e).sort(function(r, n) {
    return t.isAfter(r, n) ? 1 : -1;
  });
}
function jY(e) {
  var t = Vw(e), r = X(t, 2), n = r[0], a = r[1], i = ut(function() {
    a(e);
  });
  return b.useEffect(function() {
    i();
  }, [e]), [n, a];
}
function Yw(e, t, r, n, a, i, o, l, s) {
  var c = fr(i, {
    value: o
  }), u = X(c, 2), f = u[0], d = u[1], p = f || IY, v = jY(p), m = X(v, 2), h = m[0], y = m[1], w = zw(e, t, r), S = X(w, 2), O = S[0], g = S[1], x = ut(function(C) {
    var _ = Vt(C);
    if (n)
      for (var M = 0; M < 2; M += 1)
        _[M] = _[M] || null;
    else a && (_ = Uw(_.filter(function(A) {
      return A;
    }), e));
    var P = g(h(), _), I = X(P, 2), N = I[0], j = I[1];
    if (!N && (y(_), l)) {
      var E = O(_);
      l(_, E, {
        range: j ? "end" : "start"
      });
    }
  }), $ = function() {
    s && s(h());
  };
  return [p, d, h, x, $];
}
function qw(e, t, r, n, a, i, o, l, s, c) {
  var u = e.generateConfig, f = e.locale, d = e.picker, p = e.onChange, v = e.allowEmpty, m = e.order, h = i.some(function(N) {
    return N;
  }) ? !1 : m, y = zw(u, f, o), w = X(y, 2), S = w[0], O = w[1], g = Vw(t), x = X(g, 2), $ = x[0], C = x[1], _ = ut(function() {
    C(t);
  });
  b.useEffect(function() {
    _();
  }, [t]);
  var M = ut(function(N) {
    var j = N === null, E = Vt(N || $());
    if (j)
      for (var A = Math.max(i.length, E.length), D = 0; D < A; D += 1)
        i[D] || (E[D] = null);
    h && E[0] && E[1] && (E = Uw(E, u)), a(E);
    var R = E, k = X(R, 2), L = k[0], H = k[1], B = !L, W = !H, U = v ? (
      // Validate empty start
      (!B || v[0]) && // Validate empty end
      (!W || v[1])
    ) : !0, G = !m || B || W || Tt(u, f, L, H, d) || u.isAfter(H, L), Q = (
      // Validate start
      (!L || !c(L, {
        activeIndex: 0
      })) && // Validate end
      (!H || !c(H, {
        from: L,
        activeIndex: 1
      }))
    ), ne = (
      // Null value is from clear button
      j || // Normal check
      U && G && Q
    );
    if (ne) {
      r(E);
      var te = O(E, t), z = X(te, 1), K = z[0];
      p && !K && p(
        // Return null directly if all date are empty
        j && E.every(function(q) {
          return !q;
        }) ? null : E,
        S(E)
      );
    }
    return ne;
  }), P = ut(function(N, j) {
    var E = yi($(), N, n()[N]);
    C(E), j && M();
  }), I = !l && !s;
  return hp(!I, function() {
    I && (M(), a(t), _());
  }, 2), [P, M];
}
function Gw(e, t, r, n, a) {
  return t !== "date" && t !== "time" ? !1 : r !== void 0 ? r : n !== void 0 ? n : !a && (e === "date" || e === "time");
}
function DY(e, t, r, n, a, i) {
  var o = e;
  function l(f, d, p) {
    var v = i[f](o), m = p.find(function(S) {
      return S.value === v;
    });
    if (!m || m.disabled) {
      var h = p.filter(function(S) {
        return !S.disabled;
      }), y = Vt(h).reverse(), w = y.find(function(S) {
        return S.value <= v;
      }) || h[0];
      w && (v = w.value, o = i[d](o, v));
    }
    return v;
  }
  var s = l("getHour", "setHour", t()), c = l("getMinute", "setMinute", r(s)), u = l("getSecond", "setSecond", n(s, c));
  return l("getMillisecond", "setMillisecond", a(s, c, u)), o;
}
function Lo() {
  return [];
}
function Ho(e, t) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 2, o = [], l = r >= 1 ? r | 0 : 1, s = e; s <= t; s += l) {
    var c = a.includes(s);
    (!c || !n) && o.push({
      label: up(s, i),
      value: s,
      disabled: c
    });
  }
  return o;
}
function vp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = t || {}, a = n.use12Hours, i = n.hourStep, o = i === void 0 ? 1 : i, l = n.minuteStep, s = l === void 0 ? 1 : l, c = n.secondStep, u = c === void 0 ? 1 : c, f = n.millisecondStep, d = f === void 0 ? 100 : f, p = n.hideDisabledOptions, v = n.disabledTime, m = n.disabledHours, h = n.disabledMinutes, y = n.disabledSeconds, w = b.useMemo(function() {
    return r || e.getNow();
  }, [r, e]);
  if (Oe.env.NODE_ENV !== "production") {
    var S = 24 % o === 0, O = 60 % s === 0, g = 60 % u === 0;
    dr(S, "`hourStep` ".concat(o, " is invalid. It should be a factor of 24.")), dr(O, "`minuteStep` ".concat(s, " is invalid. It should be a factor of 60.")), dr(g, "`secondStep` ".concat(u, " is invalid. It should be a factor of 60."));
  }
  var x = b.useCallback(function(H) {
    var B = (v == null ? void 0 : v(H)) || {};
    return [B.disabledHours || m || Lo, B.disabledMinutes || h || Lo, B.disabledSeconds || y || Lo, B.disabledMilliseconds || Lo];
  }, [v, m, h, y]), $ = b.useMemo(function() {
    return x(w);
  }, [w, x]), C = X($, 4), _ = C[0], M = C[1], P = C[2], I = C[3], N = b.useCallback(function(H, B, W, U) {
    var G = Ho(0, 23, o, p, H()), Q = a ? G.map(function(K) {
      return ue(ue({}, K), {}, {
        label: up(K.value % 12 || 12, 2)
      });
    }) : G, ne = function(q) {
      return Ho(0, 59, s, p, B(q));
    }, te = function(q, F) {
      return Ho(0, 59, u, p, W(q, F));
    }, z = function(q, F, J) {
      return Ho(0, 999, d, p, U(q, F, J), 3);
    };
    return [Q, ne, te, z];
  }, [p, o, a, d, s, u]), j = b.useMemo(function() {
    return N(_, M, P, I);
  }, [N, _, M, P, I]), E = X(j, 4), A = E[0], D = E[1], R = E[2], k = E[3], L = function(B, W) {
    var U = function() {
      return A;
    }, G = D, Q = R, ne = k;
    if (W) {
      var te = x(W), z = X(te, 4), K = z[0], q = z[1], F = z[2], J = z[3], Z = N(K, q, F, J), le = X(Z, 4), re = le[0], ae = le[1], de = le[2], $e = le[3];
      U = function() {
        return re;
      }, G = ae, Q = de, ne = $e;
    }
    var Be = DY(B, U, G, Q, ne, e);
    return Be;
  };
  return [
    // getValidTime
    L,
    // Units
    A,
    D,
    R,
    k
  ];
}
function NY(e) {
  var t = e.mode, r = e.internalMode, n = e.renderExtraFooter, a = e.showNow, i = e.showTime, o = e.onSubmit, l = e.onNow, s = e.invalid, c = e.needConfirm, u = e.generateConfig, f = e.disabledDate, d = b.useContext(hr), p = d.prefixCls, v = d.locale, m = d.button, h = m === void 0 ? "button" : m, y = u.getNow(), w = vp(u, i, y), S = X(w, 1), O = S[0], g = n == null ? void 0 : n(t), x = f(y, {
    type: t
  }), $ = function() {
    if (!x) {
      var j = O(y);
      l(j);
    }
  }, C = "".concat(p, "-now"), _ = "".concat(C, "-btn"), M = a && /* @__PURE__ */ b.createElement("li", {
    className: C
  }, /* @__PURE__ */ b.createElement("a", {
    className: je(_, x && "".concat(_, "-disabled")),
    "aria-disabled": x,
    onClick: $
  }, r === "date" ? v.today : v.now)), P = c && /* @__PURE__ */ b.createElement("li", {
    className: "".concat(p, "-ok")
  }, /* @__PURE__ */ b.createElement(h, {
    disabled: s,
    onClick: o
  }, v.ok)), I = (M || P) && /* @__PURE__ */ b.createElement("ul", {
    className: "".concat(p, "-ranges")
  }, M, P);
  return !g && !I ? null : /* @__PURE__ */ b.createElement("div", {
    className: "".concat(p, "-footer")
  }, g && /* @__PURE__ */ b.createElement("div", {
    className: "".concat(p, "-footer-extra")
  }, g), I);
}
function Kw(e, t, r) {
  function n(a, i) {
    var o = a.findIndex(function(s) {
      return Tt(e, t, s, i, r);
    });
    if (o === -1)
      return [].concat(Vt(a), [i]);
    var l = Vt(a);
    return l.splice(o, 1), l;
  }
  return n;
}
var Dn = /* @__PURE__ */ b.createContext(null);
function Xs() {
  return b.useContext(Dn);
}
function Fa(e, t) {
  var r = e.prefixCls, n = e.generateConfig, a = e.locale, i = e.disabledDate, o = e.minDate, l = e.maxDate, s = e.cellRender, c = e.hoverValue, u = e.hoverRangeValue, f = e.onHover, d = e.values, p = e.pickerValue, v = e.onSelect, m = e.prevIcon, h = e.nextIcon, y = e.superPrevIcon, w = e.superNextIcon, S = n.getNow(), O = {
    now: S,
    values: d,
    pickerValue: p,
    prefixCls: r,
    disabledDate: i,
    minDate: o,
    maxDate: l,
    cellRender: s,
    hoverValue: c,
    hoverRangeValue: u,
    onHover: f,
    locale: a,
    generateConfig: n,
    onSelect: v,
    panelType: t,
    // Icons
    prevIcon: m,
    nextIcon: h,
    superPrevIcon: y,
    superNextIcon: w
  };
  return [O, S];
}
var kr = /* @__PURE__ */ b.createContext({});
Oe.env.NODE_ENV !== "production" && (kr.displayName = "PickerHackContext");
function uo(e) {
  for (var t = e.rowNum, r = e.colNum, n = e.baseDate, a = e.getCellDate, i = e.prefixColumn, o = e.rowClassName, l = e.titleFormat, s = e.getCellText, c = e.getCellClassName, u = e.headerCells, f = e.cellSelection, d = f === void 0 ? !0 : f, p = e.disabledDate, v = Xs(), m = v.prefixCls, h = v.panelType, y = v.now, w = v.disabledDate, S = v.cellRender, O = v.onHover, g = v.hoverValue, x = v.hoverRangeValue, $ = v.generateConfig, C = v.values, _ = v.locale, M = v.onSelect, P = p || w, I = "".concat(m, "-cell"), N = b.useContext(kr), j = N.onCellDblClick, E = function(W) {
    return C.some(function(U) {
      return U && Tt($, _, W, U, h);
    });
  }, A = [], D = 0; D < t; D += 1) {
    for (var R = [], k = void 0, L = function() {
      var W = D * r + H, U = a(n, W), G = P == null ? void 0 : P(U, {
        type: h
      });
      H === 0 && (k = U, i && R.push(i(k)));
      var Q = !1, ne = !1, te = !1;
      if (d && x) {
        var z = X(x, 2), K = z[0], q = z[1];
        Q = Ks($, K, q, U), ne = Tt($, _, U, K, h), te = Tt($, _, U, q, h);
      }
      var F = l ? yt(U, {
        locale: _,
        format: l,
        generateConfig: $
      }) : void 0, J = /* @__PURE__ */ b.createElement("div", {
        className: "".concat(I, "-inner")
      }, s(U));
      R.push(/* @__PURE__ */ b.createElement("td", {
        key: H,
        title: F,
        className: je(I, ue(ve(ve(ve(ve(ve(ve({}, "".concat(I, "-disabled"), G), "".concat(I, "-hover"), (g || []).some(function(Z) {
          return Tt($, _, U, Z, h);
        })), "".concat(I, "-in-range"), Q && !ne && !te), "".concat(I, "-range-start"), ne), "".concat(I, "-range-end"), te), "".concat(m, "-cell-selected"), !x && // WeekPicker use row instead
        h !== "week" && E(U)), c(U))),
        onClick: function() {
          G || M(U);
        },
        onDoubleClick: function() {
          !G && j && j();
        },
        onMouseEnter: function() {
          G || O == null || O(U);
        },
        onMouseLeave: function() {
          G || O == null || O(null);
        }
      }, S ? S(U, {
        prefixCls: m,
        originNode: J,
        today: y,
        type: h,
        locale: _
      }) : J));
    }, H = 0; H < r; H += 1)
      L();
    A.push(/* @__PURE__ */ b.createElement("tr", {
      key: D,
      className: o == null ? void 0 : o(k)
    }, R));
  }
  return /* @__PURE__ */ b.createElement("div", {
    className: "".concat(m, "-body")
  }, /* @__PURE__ */ b.createElement("table", {
    className: "".concat(m, "-content")
  }, u && /* @__PURE__ */ b.createElement("thead", null, /* @__PURE__ */ b.createElement("tr", null, u)), /* @__PURE__ */ b.createElement("tbody", null, A)));
}
var Fo = {
  visibility: "hidden"
};
function Wa(e) {
  var t = e.offset, r = e.superOffset, n = e.onChange, a = e.getStart, i = e.getEnd, o = e.children, l = Xs(), s = l.prefixCls, c = l.prevIcon, u = c === void 0 ? "‹" : c, f = l.nextIcon, d = f === void 0 ? "›" : f, p = l.superPrevIcon, v = p === void 0 ? "«" : p, m = l.superNextIcon, h = m === void 0 ? "»" : m, y = l.minDate, w = l.maxDate, S = l.generateConfig, O = l.locale, g = l.pickerValue, x = l.panelType, $ = "".concat(s, "-header"), C = b.useContext(kr), _ = C.hidePrev, M = C.hideNext, P = C.hideHeader, I = b.useMemo(function() {
    if (!y || !t || !i)
      return !1;
    var B = i(t(-1, g));
    return !ko(S, O, B, y, x);
  }, [y, t, g, i, S, O, x]), N = b.useMemo(function() {
    if (!y || !r || !i)
      return !1;
    var B = i(r(-1, g));
    return !ko(S, O, B, y, x);
  }, [y, r, g, i, S, O, x]), j = b.useMemo(function() {
    if (!w || !t || !a)
      return !1;
    var B = a(t(1, g));
    return !ko(S, O, w, B, x);
  }, [w, t, g, a, S, O, x]), E = b.useMemo(function() {
    if (!w || !r || !a)
      return !1;
    var B = a(r(1, g));
    return !ko(S, O, w, B, x);
  }, [w, r, g, a, S, O, x]), A = function(W) {
    t && n(t(W, g));
  }, D = function(W) {
    r && n(r(W, g));
  };
  if (P)
    return null;
  var R = "".concat($, "-prev-btn"), k = "".concat($, "-next-btn"), L = "".concat($, "-super-prev-btn"), H = "".concat($, "-super-next-btn");
  return /* @__PURE__ */ b.createElement("div", {
    className: $
  }, r && /* @__PURE__ */ b.createElement("button", {
    type: "button",
    "aria-label": "super-prev-year",
    onClick: function() {
      return D(-1);
    },
    tabIndex: -1,
    className: je(L, N && "".concat(L, "-disabled")),
    disabled: N,
    style: _ ? Fo : {}
  }, v), t && /* @__PURE__ */ b.createElement("button", {
    type: "button",
    "aria-label": "prev-year",
    onClick: function() {
      return A(-1);
    },
    tabIndex: -1,
    className: je(R, I && "".concat(R, "-disabled")),
    disabled: I,
    style: _ ? Fo : {}
  }, u), /* @__PURE__ */ b.createElement("div", {
    className: "".concat($, "-view")
  }, o), t && /* @__PURE__ */ b.createElement("button", {
    type: "button",
    "aria-label": "next-year",
    onClick: function() {
      return A(1);
    },
    tabIndex: -1,
    className: je(k, j && "".concat(k, "-disabled")),
    disabled: j,
    style: M ? Fo : {}
  }, d), r && /* @__PURE__ */ b.createElement("button", {
    type: "button",
    "aria-label": "super-next-year",
    onClick: function() {
      return D(1);
    },
    tabIndex: -1,
    className: je(H, E && "".concat(H, "-disabled")),
    disabled: E,
    style: M ? Fo : {}
  }, h));
}
function Zs(e) {
  var t = e.prefixCls, r = e.panelName, n = r === void 0 ? "date" : r, a = e.locale, i = e.generateConfig, o = e.pickerValue, l = e.onPickerValueChange, s = e.onModeChange, c = e.mode, u = c === void 0 ? "date" : c, f = e.disabledDate, d = e.onSelect, p = e.onHover, v = e.showWeek, m = "".concat(t, "-").concat(n, "-panel"), h = "".concat(t, "-cell"), y = u === "week", w = Fa(e, u), S = X(w, 2), O = S[0], g = S[1], x = i.locale.getWeekFirstDay(a.locale), $ = i.setDate(o, 1), C = CY(a.locale, i, $), _ = i.getMonth(o), M = v === void 0 ? y : v, P = M ? function(B) {
    var W = f == null ? void 0 : f(B, {
      type: "week"
    });
    return /* @__PURE__ */ b.createElement("td", {
      key: "week",
      className: je(h, "".concat(h, "-week"), ve({}, "".concat(h, "-disabled"), W)),
      onClick: function() {
        W || d(B);
      },
      onMouseEnter: function() {
        W || p == null || p(B);
      },
      onMouseLeave: function() {
        W || p == null || p(null);
      }
    }, /* @__PURE__ */ b.createElement("div", {
      className: "".concat(h, "-inner")
    }, i.locale.getWeek(a.locale, B)));
  } : null, I = [], N = a.shortWeekDays || (i.locale.getShortWeekDays ? i.locale.getShortWeekDays(a.locale) : []);
  P && I.push(/* @__PURE__ */ b.createElement("th", {
    key: "empty",
    "aria-label": "empty cell"
  }));
  for (var j = 0; j < au; j += 1)
    I.push(/* @__PURE__ */ b.createElement("th", {
      key: j
    }, N[(j + x) % au]));
  var E = function(W, U) {
    return i.addDate(W, U);
  }, A = function(W) {
    return yt(W, {
      locale: a,
      format: a.cellDateFormat,
      generateConfig: i
    });
  }, D = function(W) {
    var U = ve(ve({}, "".concat(t, "-cell-in-view"), dp(i, W, o)), "".concat(t, "-cell-today"), pp(i, W, g));
    return U;
  }, R = a.shortMonths || (i.locale.getShortMonths ? i.locale.getShortMonths(a.locale) : []), k = /* @__PURE__ */ b.createElement("button", {
    type: "button",
    "aria-label": "year panel",
    key: "year",
    onClick: function() {
      s("year", o);
    },
    tabIndex: -1,
    className: "".concat(t, "-year-btn")
  }, yt(o, {
    locale: a,
    format: a.yearFormat,
    generateConfig: i
  })), L = /* @__PURE__ */ b.createElement("button", {
    type: "button",
    "aria-label": "month panel",
    key: "month",
    onClick: function() {
      s("month", o);
    },
    tabIndex: -1,
    className: "".concat(t, "-month-btn")
  }, a.monthFormat ? yt(o, {
    locale: a,
    format: a.monthFormat,
    generateConfig: i
  }) : R[_]), H = a.monthBeforeYear ? [L, k] : [k, L];
  return /* @__PURE__ */ b.createElement(Dn.Provider, {
    value: O
  }, /* @__PURE__ */ b.createElement("div", {
    className: je(m, v && "".concat(m, "-show-week"))
  }, /* @__PURE__ */ b.createElement(Wa, {
    offset: function(W) {
      return i.addMonth(o, W);
    },
    superOffset: function(W) {
      return i.addYear(o, W);
    },
    onChange: l,
    getStart: function(W) {
      return i.setDate(W, 1);
    },
    getEnd: function(W) {
      var U = i.setDate(W, 1);
      return U = i.addMonth(U, 1), i.addDate(U, -1);
    }
  }, H), /* @__PURE__ */ b.createElement(uo, we({
    titleFormat: a.fieldDateFormat
  }, e, {
    colNum: au,
    rowNum: 6,
    baseDate: C,
    headerCells: I,
    getCellDate: E,
    getCellText: A,
    getCellClassName: D,
    prefixColumn: P,
    cellSelection: !y
  }))));
}
var RY = 1 / 3;
function kY(e, t) {
  var r = b.useRef(!1), n = b.useRef(null), a = b.useRef(null), i = function() {
    return r.current;
  }, o = function() {
    Wt.cancel(n.current), r.current = !1;
  }, l = b.useRef(), s = function() {
    var f = e.current;
    if (a.current = null, l.current = 0, f) {
      var d = f.querySelector('[data-value="'.concat(t, '"]')), p = f.querySelector("li"), v = function m() {
        o(), r.current = !0, l.current += 1;
        var h = f.scrollTop, y = p.offsetTop, w = d.offsetTop, S = w - y;
        if (w === 0 && d !== p || !Kg(f)) {
          l.current <= 5 && (n.current = Wt(m));
          return;
        }
        var O = h + (S - h) * RY, g = Math.abs(S - O);
        if (a.current !== null && a.current < g) {
          o();
          return;
        }
        if (a.current = g, g <= 1) {
          f.scrollTop = S, o();
          return;
        }
        f.scrollTop = O, n.current = Wt(m);
      };
      d && p && v();
    }
  }, c = ut(s);
  return [c, o, i];
}
var BY = 300;
function oi(e) {
  var t = e.units, r = e.value, n = e.optionalValue, a = e.type, i = e.onChange, o = e.onHover, l = e.onDblClick, s = e.changeOnScroll, c = Xs(), u = c.prefixCls, f = c.cellRender, d = c.now, p = c.locale, v = "".concat(u, "-time-panel"), m = "".concat(u, "-time-panel-cell"), h = b.useRef(null), y = b.useRef(), w = function() {
    clearTimeout(y.current);
  }, S = kY(h, r ?? n), O = X(S, 3), g = O[0], x = O[1], $ = O[2];
  Br(function() {
    return g(), w(), function() {
      x(), w();
    };
  }, [r, n, t]);
  var C = function(P) {
    w();
    var I = P.target;
    !$() && s && (y.current = setTimeout(function() {
      var N = h.current, j = N.querySelector("li").offsetTop, E = Array.from(N.querySelectorAll("li")), A = E.map(function(H) {
        return H.offsetTop - j;
      }), D = A.map(function(H, B) {
        return t[B].disabled ? Number.MAX_SAFE_INTEGER : Math.abs(H - I.scrollTop);
      }), R = Math.min.apply(Math, Vt(D)), k = D.findIndex(function(H) {
        return H === R;
      }), L = t[k];
      L && !L.disabled && i(L.value);
    }, BY));
  }, _ = "".concat(v, "-column");
  return /* @__PURE__ */ b.createElement("ul", {
    className: _,
    ref: h,
    "data-type": a,
    onScroll: C
  }, t.map(function(M) {
    var P = M.label, I = M.value, N = M.disabled, j = /* @__PURE__ */ b.createElement("div", {
      className: "".concat(m, "-inner")
    }, P);
    return /* @__PURE__ */ b.createElement("li", {
      key: I,
      className: je(m, ve(ve({}, "".concat(m, "-selected"), r === I), "".concat(m, "-disabled"), N)),
      onClick: function() {
        N || i(I);
      },
      onDoubleClick: function() {
        !N && l && l();
      },
      onMouseEnter: function() {
        o(I);
      },
      onMouseLeave: function() {
        o(null);
      },
      "data-value": I
    }, f ? f(I, {
      prefixCls: u,
      originNode: j,
      today: d,
      type: "time",
      subType: a,
      locale: p
    }) : j);
  }));
}
function Gr(e) {
  return e < 12;
}
function LY(e) {
  var t = e.showHour, r = e.showMinute, n = e.showSecond, a = e.showMillisecond, i = e.use12Hours, o = e.changeOnScroll, l = Xs(), s = l.prefixCls, c = l.values, u = l.generateConfig, f = l.locale, d = l.onSelect, p = l.onHover, v = p === void 0 ? function() {
  } : p, m = l.pickerValue, h = (c == null ? void 0 : c[0]) || null, y = b.useContext(kr), w = y.onCellDblClick, S = vp(u, e, h), O = X(S, 5), g = O[0], x = O[1], $ = O[2], C = O[3], _ = O[4], M = function(fe) {
    var Ye = h && u[fe](h), nt = m && u[fe](m);
    return [Ye, nt];
  }, P = M("getHour"), I = X(P, 2), N = I[0], j = I[1], E = M("getMinute"), A = X(E, 2), D = A[0], R = A[1], k = M("getSecond"), L = X(k, 2), H = L[0], B = L[1], W = M("getMillisecond"), U = X(W, 2), G = U[0], Q = U[1], ne = N === null ? null : Gr(N) ? "am" : "pm", te = b.useMemo(function() {
    return i ? Gr(N) ? x.filter(function(ie) {
      return Gr(ie.value);
    }) : x.filter(function(ie) {
      return !Gr(ie.value);
    }) : x;
  }, [N, x, i]), z = function(fe, Ye) {
    var nt, Xe = fe.filter(function(Et) {
      return !Et.disabled;
    });
    return Ye ?? // Fallback to enabled value
    (Xe == null || (nt = Xe[0]) === null || nt === void 0 ? void 0 : nt.value);
  }, K = z(x, N), q = b.useMemo(function() {
    return $(K);
  }, [$, K]), F = z(q, D), J = b.useMemo(function() {
    return C(K, F);
  }, [C, K, F]), Z = z(J, H), le = b.useMemo(function() {
    return _(K, F, Z);
  }, [_, K, F, Z]), re = z(le, G), ae = b.useMemo(function() {
    if (!i)
      return [];
    var ie = u.getNow(), fe = u.setHour(ie, 6), Ye = u.setHour(ie, 18), nt = function(Et, It) {
      var Ct = f.cellMeridiemFormat;
      return Ct ? yt(Et, {
        generateConfig: u,
        locale: f,
        format: Ct
      }) : It;
    };
    return [{
      label: nt(fe, "AM"),
      value: "am",
      disabled: x.every(function(Xe) {
        return Xe.disabled || !Gr(Xe.value);
      })
    }, {
      label: nt(Ye, "PM"),
      value: "pm",
      disabled: x.every(function(Xe) {
        return Xe.disabled || Gr(Xe.value);
      })
    }];
  }, [x, i, u, f]), de = function(fe) {
    var Ye = g(fe);
    d(Ye);
  }, $e = b.useMemo(function() {
    var ie = h || m || u.getNow(), fe = function(nt) {
      return nt != null;
    };
    return fe(N) ? (ie = u.setHour(ie, N), ie = u.setMinute(ie, D), ie = u.setSecond(ie, H), ie = u.setMillisecond(ie, G)) : fe(j) ? (ie = u.setHour(ie, j), ie = u.setMinute(ie, R), ie = u.setSecond(ie, B), ie = u.setMillisecond(ie, Q)) : fe(K) && (ie = u.setHour(ie, K), ie = u.setMinute(ie, F), ie = u.setSecond(ie, Z), ie = u.setMillisecond(ie, re)), ie;
  }, [h, m, N, D, H, G, K, F, Z, re, j, R, B, Q, u]), Be = function(fe, Ye) {
    return fe === null ? null : u[Ye]($e, fe);
  }, Te = function(fe) {
    return Be(fe, "setHour");
  }, Ne = function(fe) {
    return Be(fe, "setMinute");
  }, Ge = function(fe) {
    return Be(fe, "setSecond");
  }, Qe = function(fe) {
    return Be(fe, "setMillisecond");
  }, Ke = function(fe) {
    return fe === null ? null : fe === "am" && !Gr(N) ? u.setHour($e, N - 12) : fe === "pm" && Gr(N) ? u.setHour($e, N + 12) : $e;
  }, Ue = function(fe) {
    de(Te(fe));
  }, Ve = function(fe) {
    de(Ne(fe));
  }, _t = function(fe) {
    de(Ge(fe));
  }, He = function(fe) {
    de(Qe(fe));
  }, ot = function(fe) {
    de(Ke(fe));
  }, Se = function(fe) {
    v(Te(fe));
  }, Ie = function(fe) {
    v(Ne(fe));
  }, pe = function(fe) {
    v(Ge(fe));
  }, oe = function(fe) {
    v(Qe(fe));
  }, he = function(fe) {
    v(Ke(fe));
  }, _e = {
    onDblClick: w,
    changeOnScroll: o
  };
  return /* @__PURE__ */ b.createElement("div", {
    className: "".concat(s, "-content")
  }, t && /* @__PURE__ */ b.createElement(oi, we({
    units: te,
    value: N,
    optionalValue: j,
    type: "hour",
    onChange: Ue,
    onHover: Se
  }, _e)), r && /* @__PURE__ */ b.createElement(oi, we({
    units: q,
    value: D,
    optionalValue: R,
    type: "minute",
    onChange: Ve,
    onHover: Ie
  }, _e)), n && /* @__PURE__ */ b.createElement(oi, we({
    units: J,
    value: H,
    optionalValue: B,
    type: "second",
    onChange: _t,
    onHover: pe
  }, _e)), a && /* @__PURE__ */ b.createElement(oi, we({
    units: le,
    value: G,
    optionalValue: Q,
    type: "millisecond",
    onChange: He,
    onHover: oe
  }, _e)), i && /* @__PURE__ */ b.createElement(oi, we({
    units: ae,
    value: ne,
    type: "meridiem",
    onChange: ot,
    onHover: he
  }, _e)));
}
function Xw(e) {
  var t = e.prefixCls, r = e.value, n = e.locale, a = e.generateConfig, i = e.showTime, o = i || {}, l = o.format, s = "".concat(t, "-time-panel"), c = Fa(e, "time"), u = X(c, 1), f = u[0];
  return /* @__PURE__ */ b.createElement(Dn.Provider, {
    value: f
  }, /* @__PURE__ */ b.createElement("div", {
    className: je(s)
  }, /* @__PURE__ */ b.createElement(Wa, null, r ? yt(r, {
    locale: n,
    format: l,
    generateConfig: a
  }) : " "), /* @__PURE__ */ b.createElement(LY, i)));
}
function HY(e) {
  var t = e.prefixCls, r = e.generateConfig, n = e.showTime, a = e.onSelect, i = e.value, o = e.pickerValue, l = e.onHover, s = "".concat(t, "-datetime-panel"), c = vp(r, n), u = X(c, 1), f = u[0], d = function(h) {
    return i ? Ql(r, h, i) : Ql(r, h, o);
  }, p = function(h) {
    l == null || l(h && d(h));
  }, v = function(h) {
    var y = d(h);
    a(f(y, y));
  };
  return /* @__PURE__ */ b.createElement("div", {
    className: s
  }, /* @__PURE__ */ b.createElement(Zs, we({}, e, {
    onSelect: v,
    onHover: p
  })), /* @__PURE__ */ b.createElement(Xw, e));
}
function FY(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = "".concat(t, "-decade-panel"), s = Fa(e, "decade"), c = X(s, 1), u = c[0], f = function(x) {
    var $ = Math.floor(n.getYear(a) / 100) * 100;
    return n.setYear(x, $);
  }, d = function(x) {
    var $ = f(x);
    return n.addYear($, 99);
  }, p = f(a), v = d(a), m = n.addYear(p, -10), h = function(x, $) {
    return n.addYear(x, $ * 10);
  }, y = function(x) {
    var $ = r.cellYearFormat, C = yt(x, {
      locale: r,
      format: $,
      generateConfig: n
    }), _ = yt(n.addYear(x, 9), {
      locale: r,
      format: $,
      generateConfig: n
    });
    return "".concat(C, "-").concat(_);
  }, w = function(x) {
    return ve({}, "".concat(t, "-cell-in-view"), Ff(n, x, p) || Ff(n, x, v) || Ks(n, p, v, x));
  }, S = i ? function(g, x) {
    var $ = n.setDate(g, 1), C = n.setMonth($, 0), _ = n.setYear(C, Math.floor(n.getYear(C) / 10) * 10), M = n.addYear(_, 10), P = n.addDate(M, -1);
    return i(_, x) && i(P, x);
  } : null, O = "".concat(yt(p, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }), "-").concat(yt(v, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ b.createElement(Dn.Provider, {
    value: u
  }, /* @__PURE__ */ b.createElement("div", {
    className: l
  }, /* @__PURE__ */ b.createElement(Wa, {
    superOffset: function(x) {
      return n.addYear(a, x * 100);
    },
    onChange: o,
    getStart: f,
    getEnd: d
  }, O), /* @__PURE__ */ b.createElement(uo, we({}, e, {
    disabledDate: S,
    colNum: 3,
    rowNum: 4,
    baseDate: m,
    getCellDate: h,
    getCellText: y,
    getCellClassName: w
  }))));
}
function WY(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = e.onModeChange, s = "".concat(t, "-month-panel"), c = Fa(e, "month"), u = X(c, 1), f = u[0], d = n.setMonth(a, 0), p = r.shortMonths || (n.locale.getShortMonths ? n.locale.getShortMonths(r.locale) : []), v = function(O, g) {
    return n.addMonth(O, g);
  }, m = function(O) {
    var g = n.getMonth(O);
    return r.monthFormat ? yt(O, {
      locale: r,
      format: r.monthFormat,
      generateConfig: n
    }) : p[g];
  }, h = function() {
    return ve({}, "".concat(t, "-cell-in-view"), !0);
  }, y = i ? function(S, O) {
    var g = n.setDate(S, 1), x = n.setMonth(g, n.getMonth(g) + 1), $ = n.addDate(x, -1);
    return i(g, O) && i($, O);
  } : null, w = /* @__PURE__ */ b.createElement("button", {
    type: "button",
    key: "year",
    "aria-label": "year panel",
    onClick: function() {
      l("year");
    },
    tabIndex: -1,
    className: "".concat(t, "-year-btn")
  }, yt(a, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ b.createElement(Dn.Provider, {
    value: f
  }, /* @__PURE__ */ b.createElement("div", {
    className: s
  }, /* @__PURE__ */ b.createElement(Wa, {
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
  }, w), /* @__PURE__ */ b.createElement(uo, we({}, e, {
    disabledDate: y,
    titleFormat: r.fieldMonthFormat,
    colNum: 3,
    rowNum: 4,
    baseDate: d,
    getCellDate: v,
    getCellText: m,
    getCellClassName: h
  }))));
}
function VY(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.onPickerValueChange, o = e.onModeChange, l = "".concat(t, "-quarter-panel"), s = Fa(e, "quarter"), c = X(s, 1), u = c[0], f = n.setMonth(a, 0), d = function(y, w) {
    return n.addMonth(y, w * 3);
  }, p = function(y) {
    return yt(y, {
      locale: r,
      format: r.cellQuarterFormat,
      generateConfig: n
    });
  }, v = function() {
    return ve({}, "".concat(t, "-cell-in-view"), !0);
  }, m = /* @__PURE__ */ b.createElement("button", {
    type: "button",
    key: "year",
    "aria-label": "year panel",
    onClick: function() {
      o("year");
    },
    tabIndex: -1,
    className: "".concat(t, "-year-btn")
  }, yt(a, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ b.createElement(Dn.Provider, {
    value: u
  }, /* @__PURE__ */ b.createElement("div", {
    className: l
  }, /* @__PURE__ */ b.createElement(Wa, {
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
  }, m), /* @__PURE__ */ b.createElement(uo, we({}, e, {
    titleFormat: r.fieldQuarterFormat,
    colNum: 4,
    rowNum: 1,
    baseDate: f,
    getCellDate: d,
    getCellText: p,
    getCellClassName: v
  }))));
}
function zY(e) {
  var t = e.prefixCls, r = e.generateConfig, n = e.locale, a = e.value, i = e.hoverValue, o = e.hoverRangeValue, l = n.locale, s = "".concat(t, "-week-panel-row"), c = function(f) {
    var d = {};
    if (o) {
      var p = X(o, 2), v = p[0], m = p[1], h = si(r, l, v, f), y = si(r, l, m, f);
      d["".concat(s, "-range-start")] = h, d["".concat(s, "-range-end")] = y, d["".concat(s, "-range-hover")] = !h && !y && Ks(r, v, m, f);
    }
    return i && (d["".concat(s, "-hover")] = i.some(function(w) {
      return si(r, l, f, w);
    })), je(
      s,
      ve({}, "".concat(s, "-selected"), !o && si(r, l, a, f)),
      // Patch for hover range
      d
    );
  };
  return /* @__PURE__ */ b.createElement(Zs, we({}, e, {
    mode: "week",
    panelName: "week",
    rowClassName: c
  }));
}
function UY(e) {
  var t = e.prefixCls, r = e.locale, n = e.generateConfig, a = e.pickerValue, i = e.disabledDate, o = e.onPickerValueChange, l = e.onModeChange, s = "".concat(t, "-year-panel"), c = Fa(e, "year"), u = X(c, 1), f = u[0], d = function($) {
    var C = Math.floor(n.getYear(a) / 10) * 10;
    return n.setYear($, C);
  }, p = function($) {
    var C = d($);
    return n.addYear(C, 9);
  }, v = d(a), m = p(a), h = n.addYear(v, -1), y = function($, C) {
    return n.addYear($, C);
  }, w = function($) {
    return yt($, {
      locale: r,
      format: r.cellYearFormat,
      generateConfig: n
    });
  }, S = function($) {
    return ve({}, "".concat(t, "-cell-in-view"), En(n, $, v) || En(n, $, m) || Ks(n, v, m, $));
  }, O = i ? function(x, $) {
    var C = n.setMonth(x, 0), _ = n.setDate(C, 1), M = n.addYear(_, 1), P = n.addDate(M, -1);
    return i(_, $) && i(P, $);
  } : null, g = /* @__PURE__ */ b.createElement("button", {
    type: "button",
    key: "decade",
    "aria-label": "decade panel",
    onClick: function() {
      l("decade");
    },
    tabIndex: -1,
    className: "".concat(t, "-decade-btn")
  }, yt(v, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }), "-", yt(m, {
    locale: r,
    format: r.yearFormat,
    generateConfig: n
  }));
  return /* @__PURE__ */ b.createElement(Dn.Provider, {
    value: f
  }, /* @__PURE__ */ b.createElement("div", {
    className: s
  }, /* @__PURE__ */ b.createElement(Wa, {
    superOffset: function($) {
      return n.addYear(a, $ * 10);
    },
    onChange: o,
    getStart: d,
    getEnd: p
  }, g), /* @__PURE__ */ b.createElement(uo, we({}, e, {
    disabledDate: O,
    titleFormat: r.fieldYearFormat,
    colNum: 3,
    rowNum: 4,
    baseDate: h,
    getCellDate: y,
    getCellText: w,
    getCellClassName: S
  }))));
}
var YY = {
  date: Zs,
  datetime: HY,
  week: zY,
  month: WY,
  quarter: VY,
  year: UY,
  decade: FY,
  time: Xw
};
function qY(e, t) {
  var r, n = e.locale, a = e.generateConfig, i = e.direction, o = e.prefixCls, l = e.tabIndex, s = l === void 0 ? 0 : l, c = e.multiple, u = e.defaultValue, f = e.value, d = e.onChange, p = e.onSelect, v = e.defaultPickerValue, m = e.pickerValue, h = e.onPickerValueChange, y = e.mode, w = e.onPanelChange, S = e.picker, O = S === void 0 ? "date" : S, g = e.showTime, x = e.hoverValue, $ = e.hoverRangeValue, C = e.cellRender, _ = e.dateRender, M = e.monthCellRender, P = e.components, I = P === void 0 ? {} : P, N = e.hideHeader, j = ((r = b.useContext(hr)) === null || r === void 0 ? void 0 : r.prefixCls) || o || "rc-picker", E = b.useRef();
  b.useImperativeHandle(t, function() {
    return {
      nativeElement: E.current
    };
  });
  var A = jw(e), D = X(A, 4), R = D[0], k = D[1], L = D[2], H = D[3], B = Tw(n, k), W = O === "date" && g ? "datetime" : O, U = b.useMemo(function() {
    return Dw(W, L, H, R, B);
  }, [W, L, H, R, B]), G = a.getNow(), Q = fr(O, {
    value: y,
    postState: function(he) {
      return he || "date";
    }
  }), ne = X(Q, 2), te = ne[0], z = ne[1], K = te === "date" && U ? "datetime" : te, q = Kw(a, n, W), F = fr(u, {
    value: f
  }), J = X(F, 2), Z = J[0], le = J[1], re = b.useMemo(function() {
    var oe = jn(Z).filter(function(he) {
      return he;
    });
    return c ? oe : oe.slice(0, 1);
  }, [Z, c]), ae = ut(function(oe) {
    le(oe), d && (oe === null || re.length !== oe.length || re.some(function(he, _e) {
      return !Tt(a, n, he, oe[_e], W);
    })) && (d == null || d(c ? oe : oe[0]));
  }), de = ut(function(oe) {
    if (p == null || p(oe), te === O) {
      var he = c ? q(re, oe) : [oe];
      ae(he);
    }
  }), $e = fr(v || re[0] || G, {
    value: m
  }), Be = X($e, 2), Te = Be[0], Ne = Be[1];
  b.useEffect(function() {
    re[0] && !m && Ne(re[0]);
  }, [re[0]]);
  var Ge = function(he, _e) {
    w == null || w(he || m, _e || te);
  }, Qe = function(he) {
    var _e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    Ne(he), h == null || h(he), _e && Ge(he);
  }, Ke = function(he, _e) {
    z(he), _e && Qe(_e), Ge(_e, he);
  }, Ue = function(he) {
    if (de(he), Qe(he), te !== O) {
      var _e = ["decade", "year"], ie = [].concat(_e, ["month"]), fe = {
        quarter: [].concat(_e, ["quarter"]),
        week: [].concat(Vt(ie), ["week"]),
        date: [].concat(Vt(ie), ["date"])
      }, Ye = fe[O] || ie, nt = Ye.indexOf(te), Xe = Ye[nt + 1];
      Xe && Ke(Xe, he);
    }
  }, Ve = b.useMemo(function() {
    var oe, he;
    if (Array.isArray($)) {
      var _e = X($, 2);
      oe = _e[0], he = _e[1];
    } else
      oe = $;
    return !oe && !he ? null : (oe = oe || he, he = he || oe, a.isAfter(oe, he) ? [he, oe] : [oe, he]);
  }, [$, a]), _t = fp(C, _, M), He = I[K] || YY[K] || Zs, ot = b.useContext(kr), Se = b.useMemo(function() {
    return ue(ue({}, ot), {}, {
      hideHeader: N
    });
  }, [ot, N]);
  Oe.env.NODE_ENV !== "production" && dr(!re || re.every(function(oe) {
    return a.isValidate(oe);
  }), "Invalidate date pass to `value` or `defaultValue`.");
  var Ie = "".concat(j, "-panel"), pe = Gs(e, [
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
  return /* @__PURE__ */ b.createElement(kr.Provider, {
    value: Se
  }, /* @__PURE__ */ b.createElement("div", {
    ref: E,
    tabIndex: s,
    className: je(Ie, ve({}, "".concat(Ie, "-rtl"), i === "rtl"))
  }, /* @__PURE__ */ b.createElement(He, we({}, pe, {
    // Time
    showTime: U,
    prefixCls: j,
    locale: B,
    generateConfig: a,
    onModeChange: Ke,
    pickerValue: Te,
    onPickerValueChange: function(he) {
      Qe(he, !0);
    },
    value: re[0],
    onSelect: Ue,
    values: re,
    cellRender: _t,
    hoverRangeValue: Ve,
    hoverValue: x
  }))));
}
var zo = /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(qY));
Oe.env.NODE_ENV !== "production" && (zo.displayName = "PanelPicker");
function GY(e) {
  var t = e.picker, r = e.multiplePanel, n = e.pickerValue, a = e.onPickerValueChange, i = e.needConfirm, o = e.onSubmit, l = e.range, s = e.hoverValue, c = b.useContext(hr), u = c.prefixCls, f = c.generateConfig, d = b.useCallback(function(w, S) {
    return ci(f, t, w, S);
  }, [f, t]), p = b.useMemo(function() {
    return d(n, 1);
  }, [n, d]), v = function(S) {
    a(d(S, -1));
  }, m = {
    onCellDblClick: function() {
      i && o();
    }
  }, h = t === "time", y = ue(ue({}, e), {}, {
    hoverValue: null,
    hoverRangeValue: null,
    hideHeader: h
  });
  return l ? y.hoverRangeValue = s : y.hoverValue = s, r ? /* @__PURE__ */ b.createElement("div", {
    className: "".concat(u, "-panels")
  }, /* @__PURE__ */ b.createElement(kr.Provider, {
    value: ue(ue({}, m), {}, {
      hideNext: !0
    })
  }, /* @__PURE__ */ b.createElement(zo, y)), /* @__PURE__ */ b.createElement(kr.Provider, {
    value: ue(ue({}, m), {}, {
      hidePrev: !0
    })
  }, /* @__PURE__ */ b.createElement(zo, we({}, y, {
    pickerValue: p,
    onPickerValueChange: v
  })))) : /* @__PURE__ */ b.createElement(kr.Provider, {
    value: ue({}, m)
  }, /* @__PURE__ */ b.createElement(zo, y));
}
function jg(e) {
  return typeof e == "function" ? e() : e;
}
function KY(e) {
  var t = e.prefixCls, r = e.presets, n = e.onClick, a = e.onHover;
  return r.length ? /* @__PURE__ */ b.createElement("div", {
    className: "".concat(t, "-presets")
  }, /* @__PURE__ */ b.createElement("ul", null, r.map(function(i, o) {
    var l = i.label, s = i.value;
    return /* @__PURE__ */ b.createElement("li", {
      key: o,
      onClick: function() {
        n(jg(s));
      },
      onMouseEnter: function() {
        a(jg(s));
      },
      onMouseLeave: function() {
        a(null);
      }
    }, l);
  }))) : null;
}
function Zw(e) {
  var t = e.panelRender, r = e.internalMode, n = e.picker, a = e.showNow, i = e.range, o = e.multiple, l = e.activeOffset, s = l === void 0 ? 0 : l, c = e.placement, u = e.presets, f = e.onPresetHover, d = e.onPresetSubmit, p = e.onFocus, v = e.onBlur, m = e.onPanelMouseDown, h = e.direction, y = e.value, w = e.onSelect, S = e.isInvalid, O = e.defaultOpenValue, g = e.onOk, x = e.onSubmit, $ = b.useContext(hr), C = $.prefixCls, _ = "".concat(C, "-panel"), M = h === "rtl", P = b.useRef(null), I = b.useRef(null), N = b.useState(0), j = X(N, 2), E = j[0], A = j[1], D = b.useState(0), R = X(D, 2), k = R[0], L = R[1], H = function(ae) {
    ae.offsetWidth && A(ae.offsetWidth);
  };
  b.useEffect(function() {
    if (i) {
      var re, ae = ((re = P.current) === null || re === void 0 ? void 0 : re.offsetWidth) || 0, de = E - ae;
      s <= de ? L(0) : L(s + ae - E);
    }
  }, [E, s, i]);
  function B(re) {
    return re.filter(function(ae) {
      return ae;
    });
  }
  var W = b.useMemo(function() {
    return B(jn(y));
  }, [y]), U = n === "time" && !W.length, G = b.useMemo(function() {
    return U ? B([O]) : W;
  }, [U, W, O]), Q = U ? O : W, ne = b.useMemo(function() {
    return G.length ? G.some(function(re) {
      return S(re);
    }) : !0;
  }, [G, S]), te = function() {
    U && w(O), g(), x();
  }, z = /* @__PURE__ */ b.createElement("div", {
    className: "".concat(C, "-panel-layout")
  }, /* @__PURE__ */ b.createElement(KY, {
    prefixCls: C,
    presets: u,
    onClick: d,
    onHover: f
  }), /* @__PURE__ */ b.createElement("div", null, /* @__PURE__ */ b.createElement(GY, we({}, e, {
    value: Q
  })), /* @__PURE__ */ b.createElement(NY, we({}, e, {
    showNow: o ? !1 : a,
    invalid: ne,
    onSubmit: te
  }))));
  t && (z = t(z));
  var K = "".concat(_, "-container"), q = "marginLeft", F = "marginRight", J = /* @__PURE__ */ b.createElement("div", {
    onMouseDown: m,
    tabIndex: -1,
    className: je(
      K,
      // Used for Today Button style, safe to remove if no need
      "".concat(C, "-").concat(r, "-panel-container")
    ),
    style: ve(ve({}, M ? F : q, k), M ? q : F, "auto"),
    onFocus: p,
    onBlur: v
  }, z);
  if (i) {
    var Z = qs(c, M), le = Ow(Z, M);
    J = /* @__PURE__ */ b.createElement("div", {
      onMouseDown: m,
      ref: I,
      className: je("".concat(C, "-range-wrapper"), "".concat(C, "-").concat(n, "-range-wrapper"))
    }, /* @__PURE__ */ b.createElement("div", {
      ref: P,
      className: "".concat(C, "-range-arrow"),
      style: ve({}, le, s)
    }), /* @__PURE__ */ b.createElement(rs, {
      onResize: H
    }, J));
  }
  return J;
}
function Qw(e, t) {
  var r = e.format, n = e.maskFormat, a = e.generateConfig, i = e.locale, o = e.preserveInvalidOnBlur, l = e.inputReadOnly, s = e.required, c = e["aria-required"], u = e.onSubmit, f = e.onFocus, d = e.onBlur, p = e.onInputChange, v = e.onInvalid, m = e.open, h = e.onOpenChange, y = e.onKeyDown, w = e.onChange, S = e.activeHelp, O = e.name, g = e.autoComplete, x = e.id, $ = e.value, C = e.invalid, _ = e.placeholder, M = e.disabled, P = e.activeIndex, I = e.allHelp, N = e.picker, j = function(B, W) {
    var U = a.locale.parse(i.locale, B, [W]);
    return U && a.isValidate(U) ? U : null;
  }, E = r[0], A = b.useCallback(function(H) {
    return yt(H, {
      locale: i,
      format: E,
      generateConfig: a
    });
  }, [i, a, E]), D = b.useMemo(function() {
    return $.map(A);
  }, [$, A]), R = b.useMemo(function() {
    var H = N === "time" ? 8 : 10, B = typeof E == "function" ? E(a.getNow()).length : E.length;
    return Math.max(H, B) + 2;
  }, [E, N, a]), k = function(B) {
    for (var W = 0; W < r.length; W += 1) {
      var U = r[W];
      if (typeof U == "string") {
        var G = j(B, U);
        if (G)
          return G;
      }
    }
    return !1;
  }, L = function(B) {
    function W(Q) {
      return B !== void 0 ? Q[B] : Q;
    }
    var U = ep(e, {
      aria: !0,
      data: !0
    }), G = ue(ue({}, U), {}, {
      // ============== Shared ==============
      format: n,
      validateFormat: function(ne) {
        return !!k(ne);
      },
      preserveInvalidOnBlur: o,
      readOnly: l,
      required: s,
      "aria-required": c,
      name: O,
      autoComplete: g,
      size: R,
      // ============= By Index =============
      id: W(x),
      value: W(D) || "",
      invalid: W(C),
      placeholder: W(_),
      active: P === B,
      helped: I || S && P === B,
      disabled: W(M),
      onFocus: function(ne) {
        f(ne, B);
      },
      onBlur: function(ne) {
        d(ne, B);
      },
      onSubmit: u,
      // Get validate text value
      onChange: function(ne) {
        p();
        var te = k(ne);
        if (te) {
          v(!1, B), w(te, B);
          return;
        }
        v(!!ne, B);
      },
      onHelp: function() {
        h(!0, {
          index: B
        });
      },
      onKeyDown: function(ne) {
        var te = !1;
        if (y == null || y(ne, function() {
          Oe.env.NODE_ENV !== "production" && dr(!1, "`preventDefault` callback is deprecated. Please call `event.preventDefault` directly."), te = !0;
        }), !ne.defaultPrevented && !te)
          switch (ne.key) {
            case "Escape":
              h(!1, {
                index: B
              });
              break;
            case "Enter":
              m || h(!0);
              break;
          }
      }
    }, t == null ? void 0 : t({
      valueTexts: D
    }));
    return Object.keys(G).forEach(function(Q) {
      G[Q] === void 0 && delete G[Q];
    }), G;
  };
  return [L, A];
}
var XY = ["onMouseEnter", "onMouseLeave"];
function Jw(e) {
  return b.useMemo(function() {
    return Gs(e, XY);
  }, [e]);
}
var ZY = ["icon", "type"], QY = ["onClear"];
function Qs(e) {
  var t = e.icon, r = e.type, n = Kt(e, ZY), a = b.useContext(hr), i = a.prefixCls;
  return t ? /* @__PURE__ */ b.createElement("span", we({
    className: "".concat(i, "-").concat(r)
  }, n), t) : null;
}
function Wf(e) {
  var t = e.onClear, r = Kt(e, QY);
  return /* @__PURE__ */ b.createElement(Qs, we({}, r, {
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
var ou = ["YYYY", "MM", "DD", "HH", "mm", "ss", "SSS"], Dg = "顧", JY = /* @__PURE__ */ function() {
  function e(t) {
    qf(this, e), ve(this, "format", void 0), ve(this, "maskFormat", void 0), ve(this, "cells", void 0), ve(this, "maskCells", void 0), this.format = t;
    var r = ou.map(function(l) {
      return "(".concat(l, ")");
    }).join("|"), n = new RegExp(r, "g");
    this.maskFormat = t.replace(
      n,
      // Use Chinese character to avoid user use it in format
      function(l) {
        return Dg.repeat(l.length);
      }
    );
    var a = new RegExp("(".concat(ou.join("|"), ")")), i = (t.split(a) || []).filter(function(l) {
      return l;
    }), o = 0;
    this.cells = i.map(function(l) {
      var s = ou.includes(l), c = o, u = o + l.length;
      return o = u, {
        text: l,
        mask: s,
        start: c,
        end: u
      };
    }), this.maskCells = this.cells.filter(function(l) {
      return l.mask;
    });
  }
  return Gf(e, [{
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
        if (!i || a !== Dg && a !== i)
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
        var o = this.maskCells[i], l = o.start, s = o.end;
        if (r >= l && r <= s)
          return i;
        var c = Math.min(Math.abs(r - l), Math.abs(r - s));
        c < n && (n = c, a = i);
      }
      return a;
    }
  }]), e;
}();
function eq(e) {
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
var tq = ["active", "showActiveCls", "suffixIcon", "format", "validateFormat", "onChange", "onInput", "helped", "onHelp", "onSubmit", "onKeyDown", "preserveInvalidOnBlur", "invalid", "clearIcon"], Jl = /* @__PURE__ */ b.forwardRef(function(e, t) {
  var r = e.active, n = e.showActiveCls, a = n === void 0 ? !0 : n, i = e.suffixIcon, o = e.format, l = e.validateFormat, s = e.onChange;
  e.onInput;
  var c = e.helped, u = e.onHelp, f = e.onSubmit, d = e.onKeyDown, p = e.preserveInvalidOnBlur, v = p === void 0 ? !1 : p, m = e.invalid, h = e.clearIcon, y = Kt(e, tq), w = e.value, S = e.onFocus, O = e.onBlur, g = e.onMouseUp, x = b.useContext(hr), $ = x.prefixCls, C = x.input, _ = C === void 0 ? "input" : C, M = "".concat($, "-input"), P = b.useState(!1), I = X(P, 2), N = I[0], j = I[1], E = b.useState(w), A = X(E, 2), D = A[0], R = A[1], k = b.useState(""), L = X(k, 2), H = L[0], B = L[1], W = b.useState(null), U = X(W, 2), G = U[0], Q = U[1], ne = b.useState(null), te = X(ne, 2), z = te[0], K = te[1], q = D || "";
  b.useEffect(function() {
    R(w);
  }, [w]);
  var F = b.useRef(), J = b.useRef();
  b.useImperativeHandle(t, function() {
    return {
      nativeElement: F.current,
      inputElement: J.current,
      focus: function(oe) {
        J.current.focus(oe);
      },
      blur: function() {
        J.current.blur();
      }
    };
  });
  var Z = b.useMemo(function() {
    return new JY(o || "");
  }, [o]), le = b.useMemo(function() {
    return c ? [0, 0] : Z.getSelection(G);
  }, [Z, G, c]), re = X(le, 2), ae = re[0], de = re[1], $e = function(oe) {
    oe && oe !== o && oe !== w && u();
  }, Be = ut(function(pe) {
    l(pe) && s(pe), R(pe), $e(pe);
  }), Te = function(oe) {
    if (!o) {
      var he = oe.target.value;
      $e(he), R(he), s(he);
    }
  }, Ne = function(oe) {
    var he = oe.clipboardData.getData("text");
    l(he) && Be(he);
  }, Ge = b.useRef(!1), Qe = function() {
    Ge.current = !0;
  }, Ke = function(oe) {
    var he = oe.target, _e = he.selectionStart, ie = Z.getMaskCellIndex(_e);
    Q(ie), K({}), g == null || g(oe), Ge.current = !1;
  }, Ue = function(oe) {
    j(!0), Q(0), B(""), S(oe);
  }, Ve = function(oe) {
    O(oe);
  }, _t = function(oe) {
    j(!1), Ve(oe);
  };
  hp(r, function() {
    !r && !v && R(w);
  });
  var He = function(oe) {
    oe.key === "Enter" && l(q) && f(), d == null || d(oe);
  }, ot = function(oe) {
    He(oe);
    var he = oe.key, _e = null, ie = null, fe = de - ae, Ye = o.slice(ae, de), nt = function(Ct) {
      Q(function(jt) {
        var xt = jt + Ct;
        return xt = Math.max(xt, 0), xt = Math.min(xt, Z.size() - 1), xt;
      });
    }, Xe = function(Ct) {
      var jt = eq(Ye), xt = X(jt, 3), be = xt[0], Le = xt[1], Je = xt[2], ht = q.slice(ae, de), Ut = Number(ht);
      if (isNaN(Ut))
        return String(Je || (Ct > 0 ? be : Le));
      var Nn = Ut + Ct, cn = Le - be + 1;
      return String(be + (cn + Nn - be) % cn);
    };
    switch (he) {
      case "Backspace":
      case "Delete":
        _e = "", ie = Ye;
        break;
      case "ArrowLeft":
        _e = "", nt(-1);
        break;
      case "ArrowRight":
        _e = "", nt(1);
        break;
      case "ArrowUp":
        _e = "", ie = Xe(1);
        break;
      case "ArrowDown":
        _e = "", ie = Xe(-1);
        break;
      default:
        isNaN(Number(he)) || (_e = H + he, ie = _e);
        break;
    }
    if (_e !== null && (B(_e), _e.length >= fe && (nt(1), B(""))), ie !== null) {
      var Et = (
        // before
        q.slice(0, ae) + // replace
        up(ie, fe) + // after
        q.slice(de)
      );
      Be(Et.slice(0, o.length));
    }
    K({});
  }, Se = b.useRef();
  Br(function() {
    if (!(!N || !o || Ge.current)) {
      if (!Z.match(q)) {
        Be(o);
        return;
      }
      return J.current.setSelectionRange(ae, de), Se.current = Wt(function() {
        J.current.setSelectionRange(ae, de);
      }), function() {
        Wt.cancel(Se.current);
      };
    }
  }, [Z, o, N, q, G, ae, de, z, Be]);
  var Ie = o ? {
    onFocus: Ue,
    onBlur: _t,
    onKeyDown: ot,
    onMouseDown: Qe,
    onMouseUp: Ke,
    onPaste: Ne
  } : {};
  return /* @__PURE__ */ b.createElement("div", {
    ref: F,
    className: je(M, ve(ve({}, "".concat(M, "-active"), r && a), "".concat(M, "-placeholder"), c))
  }, /* @__PURE__ */ b.createElement(_, we({
    ref: J,
    "aria-invalid": m,
    autoComplete: "off"
  }, y, {
    onKeyDown: He,
    onBlur: Ve
    // Replace with format
  }, Ie, {
    // Value
    value: q,
    onChange: Te
  })), /* @__PURE__ */ b.createElement(Qs, {
    type: "suffix",
    icon: i
  }), h);
});
Oe.env.NODE_ENV !== "production" && (Jl.displayName = "Input");
var rq = ["id", "clearIcon", "suffixIcon", "separator", "activeIndex", "activeHelp", "allHelp", "focused", "onFocus", "onBlur", "onKeyDown", "locale", "generateConfig", "placeholder", "className", "style", "onClick", "onClear", "value", "onChange", "onSubmit", "onInputChange", "format", "maskFormat", "preserveInvalidOnBlur", "onInvalid", "disabled", "invalid", "inputReadOnly", "direction", "onOpenChange", "onActiveOffset", "placement", "onMouseDown", "required", "aria-required", "autoFocus"], nq = ["index"];
function aq(e, t) {
  var r = e.id, n = e.clearIcon, a = e.suffixIcon, i = e.separator, o = i === void 0 ? "~" : i, l = e.activeIndex;
  e.activeHelp, e.allHelp;
  var s = e.focused;
  e.onFocus, e.onBlur, e.onKeyDown, e.locale, e.generateConfig;
  var c = e.placeholder, u = e.className, f = e.style, d = e.onClick, p = e.onClear, v = e.value;
  e.onChange, e.onSubmit, e.onInputChange, e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid;
  var m = e.disabled, h = e.invalid;
  e.inputReadOnly;
  var y = e.direction;
  e.onOpenChange;
  var w = e.onActiveOffset, S = e.placement, O = e.onMouseDown;
  e.required, e["aria-required"];
  var g = e.autoFocus, x = Kt(e, rq), $ = y === "rtl", C = b.useContext(hr), _ = C.prefixCls, M = b.useMemo(function() {
    if (typeof r == "string")
      return [r];
    var q = r || {};
    return [q.start, q.end];
  }, [r]), P = b.useRef(), I = b.useRef(), N = b.useRef(), j = function(F) {
    var J;
    return (J = [I, N][F]) === null || J === void 0 ? void 0 : J.current;
  };
  b.useImperativeHandle(t, function() {
    return {
      nativeElement: P.current,
      focus: function(F) {
        if (An(F) === "object") {
          var J, Z = F || {}, le = Z.index, re = le === void 0 ? 0 : le, ae = Kt(Z, nq);
          (J = j(re)) === null || J === void 0 || J.focus(ae);
        } else {
          var de;
          (de = j(F ?? 0)) === null || de === void 0 || de.focus();
        }
      },
      blur: function() {
        var F, J;
        (F = j(0)) === null || F === void 0 || F.blur(), (J = j(1)) === null || J === void 0 || J.blur();
      }
    };
  });
  var E = Jw(x), A = b.useMemo(function() {
    return Array.isArray(c) ? c : [c, c];
  }, [c]), D = Qw(ue(ue({}, e), {}, {
    id: M,
    placeholder: A
  })), R = X(D, 1), k = R[0], L = qs(S, $), H = Ow(L, $), B = L == null ? void 0 : L.toLowerCase().endsWith("right"), W = b.useState({
    position: "absolute",
    width: 0
  }), U = X(W, 2), G = U[0], Q = U[1], ne = ut(function() {
    var q = j(l);
    if (q) {
      var F = q.nativeElement, J = F.offsetWidth, Z = F.offsetLeft, le = F.offsetParent, re = (le == null ? void 0 : le.offsetWidth) || 0, ae = B ? re - J - Z : Z;
      Q(function(de) {
        return ue(ue({}, de), {}, ve({
          width: J
        }, H, ae));
      }), w(ae);
    }
  });
  b.useEffect(function() {
    ne();
  }, [l]);
  var te = n && (v[0] && !m[0] || v[1] && !m[1]), z = g && !m[0], K = g && !z && !m[1];
  return /* @__PURE__ */ b.createElement(rs, {
    onResize: ne
  }, /* @__PURE__ */ b.createElement("div", we({}, E, {
    className: je(_, "".concat(_, "-range"), ve(ve(ve(ve({}, "".concat(_, "-focused"), s), "".concat(_, "-disabled"), m.every(function(q) {
      return q;
    })), "".concat(_, "-invalid"), h.some(function(q) {
      return q;
    })), "".concat(_, "-rtl"), $), u),
    style: f,
    ref: P,
    onClick: d,
    onMouseDown: function(F) {
      var J = F.target;
      J !== I.current.inputElement && J !== N.current.inputElement && F.preventDefault(), O == null || O(F);
    }
  }), /* @__PURE__ */ b.createElement(Jl, we({
    ref: I
  }, k(0), {
    autoFocus: z,
    "date-range": "start"
  })), /* @__PURE__ */ b.createElement("div", {
    className: "".concat(_, "-range-separator")
  }, o), /* @__PURE__ */ b.createElement(Jl, we({
    ref: N
  }, k(1), {
    autoFocus: K,
    "date-range": "end"
  })), /* @__PURE__ */ b.createElement("div", {
    className: "".concat(_, "-active-bar"),
    style: G
  }), /* @__PURE__ */ b.createElement(Qs, {
    type: "suffix",
    icon: a
  }), te && /* @__PURE__ */ b.createElement(Wf, {
    icon: n,
    onClear: p
  })));
}
var e1 = /* @__PURE__ */ b.forwardRef(aq);
Oe.env.NODE_ENV !== "production" && (e1.displayName = "RangeSelector");
function Ng(e, t) {
  var r = e ?? t;
  return Array.isArray(r) ? r : [r, r];
}
function Wo(e) {
  return e === 1 ? "end" : "start";
}
function iq(e, t) {
  var r = kw(e, function() {
    var Re = e.disabled, ge = e.allowEmpty, ke = Ng(Re, !1), ft = Ng(ge, !1);
    return {
      disabled: ke,
      allowEmpty: ft
    };
  }), n = X(r, 6), a = n[0], i = n[1], o = n[2], l = n[3], s = n[4], c = n[5], u = a.prefixCls, f = a.styles, d = a.classNames, p = a.placement, v = a.defaultValue, m = a.value, h = a.needConfirm, y = a.onKeyDown, w = a.disabled, S = a.allowEmpty, O = a.disabledDate, g = a.minDate, x = a.maxDate, $ = a.defaultOpen, C = a.open, _ = a.onOpenChange, M = a.locale, P = a.generateConfig, I = a.picker, N = a.showNow, j = a.showToday, E = a.showTime, A = a.mode, D = a.onPanelChange, R = a.onCalendarChange, k = a.onOk, L = a.defaultPickerValue, H = a.pickerValue, B = a.onPickerValueChange, W = a.inputReadOnly, U = a.suffixIcon, G = a.onFocus, Q = a.onBlur, ne = a.presets, te = a.ranges, z = a.components, K = a.cellRender, q = a.dateRender, F = a.monthCellRender, J = a.onClick, Z = Lw(t), le = Bw(C, $, w, _), re = X(le, 2), ae = re[0], de = re[1], $e = function(ge, ke) {
    (w.some(function(ft) {
      return !ft;
    }) || !ge) && de(ge, ke);
  }, Be = Yw(P, M, l, !0, !1, v, m, R, k), Te = X(Be, 5), Ne = Te[0], Ge = Te[1], Qe = Te[2], Ke = Te[3], Ue = Te[4], Ve = Qe(), _t = Fw(w, S, ae), He = X(_t, 7), ot = He[0], Se = He[1], Ie = He[2], pe = He[3], oe = He[4], he = He[5], _e = He[6], ie = function(ge, ke) {
    Se(!0), G == null || G(ge, {
      range: Wo(ke ?? pe)
    });
  }, fe = function(ge, ke) {
    Se(!1), Q == null || Q(ge, {
      range: Wo(ke ?? pe)
    });
  }, Ye = b.useMemo(function() {
    if (!E)
      return null;
    var Re = E.disabledTime, ge = Re ? function(ke) {
      var ft = Wo(pe), ir = Pw(Ve, _e, pe);
      return Re(ke, ft, {
        from: ir
      });
    } : void 0;
    return ue(ue({}, E), {}, {
      disabledTime: ge
    });
  }, [E, pe, Ve, _e]), nt = fr([I, I], {
    value: A
  }), Xe = X(nt, 2), Et = Xe[0], It = Xe[1], Ct = Et[pe] || I, jt = Ct === "date" && Ye ? "datetime" : Ct, xt = jt === I && jt !== "time", be = Gw(I, Ct, N, j, !0), Le = qw(a, Ne, Ge, Qe, Ke, w, l, ot, ae, c), Je = X(Le, 2), ht = Je[0], Ut = Je[1], Nn = MY(Ve, w, _e, P, M, O), cn = Ew(Ve, c, S), fo = X(cn, 2), Js = fo[0], ec = fo[1], tc = Ww(P, M, Ve, Et, ae, pe, i, xt, L, H, Ye == null ? void 0 : Ye.defaultOpenValue, B, g, x), za = X(tc, 2), rc = za[0], nc = za[1], Ua = ut(function(Re, ge, ke) {
    var ft = yi(Et, pe, ge);
    if ((ft[0] !== Et[0] || ft[1] !== Et[1]) && It(ft), D && ke !== !1) {
      var ir = Vt(Ve);
      Re && (ir[pe] = Re), D(ir, ft);
    }
  }), vr = function(ge, ke) {
    return (
      // Trigger change only when date changed
      yi(Ve, ke, ge)
    );
  }, mr = function(ge, ke) {
    var ft = Ve;
    ge && (ft = vr(ge, pe));
    var ir = he(ft);
    Ke(ft), ht(pe, ir === null), ir === null ? $e(!1, {
      force: !0
    }) : ke || Z.current.focus({
      index: ir
    });
  }, ac = function(ge) {
    var ke, ft = ge.target.getRootNode();
    if (!Z.current.nativeElement.contains((ke = ft.activeElement) !== null && ke !== void 0 ? ke : document.activeElement)) {
      var ir = w.findIndex(function(C1) {
        return !C1;
      });
      ir >= 0 && Z.current.focus({
        index: ir
      });
    }
    $e(!0), J == null || J(ge);
  }, ic = function() {
    Ut(null), $e(!1, {
      force: !0
    });
  }, po = b.useState(null), ho = X(po, 2), vo = ho[0], mo = ho[1], go = b.useState(null), gr = X(go, 2), qr = gr[0], Ya = gr[1], yo = b.useMemo(function() {
    return qr || Ve;
  }, [Ve, qr]);
  b.useEffect(function() {
    ae || Ya(null);
  }, [ae]);
  var oc = b.useState(0), bo = X(oc, 2), xo = bo[0], lc = bo[1], sc = Hw(ne, te), cc = function(ge) {
    Ya(ge), mo("preset");
  }, uc = function(ge) {
    var ke = Ut(ge);
    ke && $e(!1, {
      force: !0
    });
  }, fc = function(ge) {
    mr(ge);
  }, dc = function(ge) {
    Ya(ge ? vr(ge, pe) : null), mo("cell");
  }, pc = function(ge) {
    $e(!0), ie(ge);
  }, hc = function() {
    Ie("panel");
  }, vc = function(ge) {
    var ke = yi(Ve, pe, ge);
    Ke(ke), !h && !o && i === jt && mr(ge);
  }, mc = function() {
    $e(!1);
  }, gc = fp(K, q, F, Wo(pe)), yc = Ve[pe] || null, bc = ut(function(Re) {
    return c(Re, {
      activeIndex: pe
    });
  }), xc = b.useMemo(function() {
    var Re = ep(a, !1), ge = Qf(a, [].concat(Vt(Object.keys(Re)), ["onChange", "onCalendarChange", "style", "className", "onPanelChange", "disabledTime"]));
    return ge;
  }, [a]), Ee = /* @__PURE__ */ b.createElement(Zw, we({}, xc, {
    showNow: be,
    showTime: Ye,
    range: !0,
    multiplePanel: xt,
    activeOffset: xo,
    placement: p,
    disabledDate: Nn,
    onFocus: pc,
    onBlur: fe,
    onPanelMouseDown: hc,
    picker: I,
    mode: Ct,
    internalMode: jt,
    onPanelChange: Ua,
    format: s,
    value: yc,
    isInvalid: bc,
    onChange: null,
    onSelect: vc,
    pickerValue: rc,
    defaultOpenValue: jn(E == null ? void 0 : E.defaultOpenValue)[pe],
    onPickerValueChange: nc,
    hoverValue: yo,
    onHover: dc,
    needConfirm: h,
    onSubmit: mr,
    onOk: Ue,
    presets: sc,
    onPresetHover: cc,
    onPresetSubmit: uc,
    onNow: fc,
    cellRender: gc
  })), xe = function(ge, ke) {
    var ft = vr(ge, ke);
    Ke(ft);
  }, Bt = function() {
    Ie("input");
  }, yr = function(ge, ke) {
    Ie("input"), $e(!0, {
      inherit: !0
    }), pe !== ke && ae && !h && o && mr(null, !0), oe(ke), ie(ge, ke);
  }, wo = function(ge, ke) {
    if ($e(!1), !h && Ie() === "input") {
      var ft = he(Ve);
      ht(pe, ft === null);
    }
    fe(ge, ke);
  }, S1 = function(ge, ke) {
    ge.key === "Tab" && mr(null, !0), y == null || y(ge, ke);
  }, O1 = b.useMemo(function() {
    return {
      prefixCls: u,
      locale: M,
      generateConfig: P,
      button: z.button,
      input: z.input
    };
  }, [u, M, P, z.button, z.input]);
  if (Br(function() {
    ae && pe !== void 0 && Ua(null, I, !1);
  }, [ae, pe, I]), Br(function() {
    var Re = Ie();
    !ae && Re === "input" && ($e(!1), mr(null, !0)), !ae && o && !h && Re === "panel" && ($e(!0), mr());
  }, [ae]), Oe.env.NODE_ENV !== "production") {
    var $1 = function(ge) {
      return (
        // Value is empty
        !(m != null && m[ge]) && // DefaultValue is empty
        !(v != null && v[ge])
      );
    };
    w.some(function(Re, ge) {
      return Re && $1(ge) && !S[ge];
    }) && dr(!1, "`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.");
  }
  return /* @__PURE__ */ b.createElement(hr.Provider, {
    value: O1
  }, /* @__PURE__ */ b.createElement($w, we({}, _w(a), {
    popupElement: Ee,
    popupStyle: f.popup,
    popupClassName: d.popup,
    visible: ae,
    onClose: mc,
    range: !0
  }), /* @__PURE__ */ b.createElement(
    e1,
    we({}, a, {
      // Ref
      ref: Z,
      suffixIcon: U,
      activeIndex: ot || ae ? pe : null,
      activeHelp: !!qr,
      allHelp: !!qr && vo === "preset",
      focused: ot,
      onFocus: yr,
      onBlur: wo,
      onKeyDown: S1,
      onSubmit: mr,
      value: yo,
      maskFormat: s,
      onChange: xe,
      onInputChange: Bt,
      format: l,
      inputReadOnly: W,
      disabled: w,
      open: ae,
      onOpenChange: $e,
      onClick: ac,
      onClear: ic,
      invalid: Js,
      onInvalid: ec,
      onActiveOffset: lc
    })
  )));
}
var t1 = /* @__PURE__ */ b.forwardRef(iq);
Oe.env.NODE_ENV !== "production" && (t1.displayName = "RefRangePicker");
function oq(e) {
  var t = e.prefixCls, r = e.value, n = e.onRemove, a = e.removeIcon, i = a === void 0 ? "×" : a, o = e.formatDate, l = e.disabled, s = e.maxTagCount, c = e.placeholder, u = "".concat(t, "-selector"), f = "".concat(t, "-selection"), d = "".concat(f, "-overflow");
  function p(h, y) {
    return /* @__PURE__ */ b.createElement("span", {
      className: je("".concat(f, "-item")),
      title: typeof h == "string" ? h : null
    }, /* @__PURE__ */ b.createElement("span", {
      className: "".concat(f, "-item-content")
    }, h), !l && y && /* @__PURE__ */ b.createElement("span", {
      onMouseDown: function(S) {
        S.preventDefault();
      },
      onClick: y,
      className: "".concat(f, "-item-remove")
    }, i));
  }
  function v(h) {
    var y = o(h), w = function(O) {
      O && O.stopPropagation(), n(h);
    };
    return p(y, w);
  }
  function m(h) {
    var y = "+ ".concat(h.length, " ...");
    return p(y);
  }
  return /* @__PURE__ */ b.createElement("div", {
    className: u
  }, /* @__PURE__ */ b.createElement(co, {
    prefixCls: d,
    data: r,
    renderItem: v,
    renderRest: m,
    itemKey: function(y) {
      return o(y);
    },
    maxCount: s
  }), !r.length && /* @__PURE__ */ b.createElement("span", {
    className: "".concat(t, "-selection-placeholder")
  }, c));
}
var lq = ["id", "open", "clearIcon", "suffixIcon", "activeHelp", "allHelp", "focused", "onFocus", "onBlur", "onKeyDown", "locale", "generateConfig", "placeholder", "className", "style", "onClick", "onClear", "internalPicker", "value", "onChange", "onSubmit", "onInputChange", "multiple", "maxTagCount", "format", "maskFormat", "preserveInvalidOnBlur", "onInvalid", "disabled", "invalid", "inputReadOnly", "direction", "onOpenChange", "onMouseDown", "required", "aria-required", "autoFocus", "removeIcon"];
function sq(e, t) {
  e.id;
  var r = e.open, n = e.clearIcon, a = e.suffixIcon;
  e.activeHelp, e.allHelp;
  var i = e.focused;
  e.onFocus, e.onBlur, e.onKeyDown;
  var o = e.locale, l = e.generateConfig, s = e.placeholder, c = e.className, u = e.style, f = e.onClick, d = e.onClear, p = e.internalPicker, v = e.value, m = e.onChange, h = e.onSubmit;
  e.onInputChange;
  var y = e.multiple, w = e.maxTagCount;
  e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid;
  var S = e.disabled, O = e.invalid;
  e.inputReadOnly;
  var g = e.direction;
  e.onOpenChange;
  var x = e.onMouseDown;
  e.required, e["aria-required"];
  var $ = e.autoFocus, C = e.removeIcon, _ = Kt(e, lq), M = g === "rtl", P = b.useContext(hr), I = P.prefixCls, N = b.useRef(), j = b.useRef();
  b.useImperativeHandle(t, function() {
    return {
      nativeElement: N.current,
      focus: function(G) {
        var Q;
        (Q = j.current) === null || Q === void 0 || Q.focus(G);
      },
      blur: function() {
        var G;
        (G = j.current) === null || G === void 0 || G.blur();
      }
    };
  });
  var E = Jw(_), A = function(G) {
    m([G]);
  }, D = function(G) {
    var Q = v.filter(function(ne) {
      return ne && !Tt(l, o, ne, G, p);
    });
    m(Q), r || h();
  }, R = Qw(ue(ue({}, e), {}, {
    onChange: A
  }), function(U) {
    var G = U.valueTexts;
    return {
      value: G[0] || "",
      active: i
    };
  }), k = X(R, 2), L = k[0], H = k[1], B = !!(n && v.length && !S), W = y ? /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(oq, {
    prefixCls: I,
    value: v,
    onRemove: D,
    formatDate: H,
    maxTagCount: w,
    disabled: S,
    removeIcon: C,
    placeholder: s
  }), /* @__PURE__ */ b.createElement("input", {
    className: "".concat(I, "-multiple-input"),
    value: v.map(H).join(","),
    ref: j,
    readOnly: !0,
    autoFocus: $
  }), /* @__PURE__ */ b.createElement(Qs, {
    type: "suffix",
    icon: a
  }), B && /* @__PURE__ */ b.createElement(Wf, {
    icon: n,
    onClear: d
  })) : /* @__PURE__ */ b.createElement(Jl, we({
    ref: j
  }, L(), {
    autoFocus: $,
    suffixIcon: a,
    clearIcon: B && /* @__PURE__ */ b.createElement(Wf, {
      icon: n,
      onClear: d
    }),
    showActiveCls: !1
  }));
  return /* @__PURE__ */ b.createElement("div", we({}, E, {
    className: je(I, ve(ve(ve(ve(ve({}, "".concat(I, "-multiple"), y), "".concat(I, "-focused"), i), "".concat(I, "-disabled"), S), "".concat(I, "-invalid"), O), "".concat(I, "-rtl"), M), c),
    style: u,
    ref: N,
    onClick: f,
    onMouseDown: function(G) {
      var Q, ne = G.target;
      ne !== ((Q = j.current) === null || Q === void 0 ? void 0 : Q.inputElement) && G.preventDefault(), x == null || x(G);
    }
  }), W);
}
var r1 = /* @__PURE__ */ b.forwardRef(sq);
Oe.env.NODE_ENV !== "production" && (r1.displayName = "SingleSelector");
function cq(e, t) {
  var r = kw(e), n = X(r, 6), a = n[0], i = n[1], o = n[2], l = n[3], s = n[4], c = n[5], u = a, f = u.prefixCls, d = u.styles, p = u.classNames, v = u.order, m = u.defaultValue, h = u.value, y = u.needConfirm, w = u.onChange, S = u.onKeyDown, O = u.disabled, g = u.disabledDate, x = u.minDate, $ = u.maxDate, C = u.defaultOpen, _ = u.open, M = u.onOpenChange, P = u.locale, I = u.generateConfig, N = u.picker, j = u.showNow, E = u.showToday, A = u.showTime, D = u.mode, R = u.onPanelChange, k = u.onCalendarChange, L = u.onOk, H = u.multiple, B = u.defaultPickerValue, W = u.pickerValue, U = u.onPickerValueChange, G = u.inputReadOnly, Q = u.suffixIcon, ne = u.removeIcon, te = u.onFocus, z = u.onBlur, K = u.presets, q = u.components, F = u.cellRender, J = u.dateRender, Z = u.monthCellRender, le = u.onClick, re = Lw(t);
  function ae(Ee) {
    return Ee === null ? null : H ? Ee : Ee[0];
  }
  var de = Kw(I, P, i), $e = Bw(_, C, [O], M), Be = X($e, 2), Te = Be[0], Ne = Be[1], Ge = function(xe, Bt, yr) {
    if (k) {
      var wo = ue({}, yr);
      delete wo.range, k(ae(xe), ae(Bt), wo);
    }
  }, Qe = function(xe) {
    L == null || L(ae(xe));
  }, Ke = Yw(I, P, l, !1, v, m, h, Ge, Qe), Ue = X(Ke, 5), Ve = Ue[0], _t = Ue[1], He = Ue[2], ot = Ue[3], Se = Ue[4], Ie = He(), pe = Fw([O]), oe = X(pe, 4), he = oe[0], _e = oe[1], ie = oe[2], fe = oe[3], Ye = function(xe) {
    _e(!0), te == null || te(xe, {});
  }, nt = function(xe) {
    _e(!1), z == null || z(xe, {});
  }, Xe = fr(N, {
    value: D
  }), Et = X(Xe, 2), It = Et[0], Ct = Et[1], jt = It === "date" && A ? "datetime" : It, xt = Gw(N, It, j, E), be = w && function(Ee, xe) {
    w(ae(Ee), ae(xe));
  }, Le = qw(
    ue(ue({}, a), {}, {
      onChange: be
    }),
    Ve,
    _t,
    He,
    ot,
    [],
    //disabled,
    l,
    he,
    Te,
    c
  ), Je = X(Le, 2), ht = Je[1], Ut = Ew(Ie, c), Nn = X(Ut, 2), cn = Nn[0], fo = Nn[1], Js = b.useMemo(function() {
    return cn.some(function(Ee) {
      return Ee;
    });
  }, [cn]), ec = function(xe, Bt) {
    if (U) {
      var yr = ue(ue({}, Bt), {}, {
        mode: Bt.mode[0]
      });
      delete yr.range, U(xe[0], yr);
    }
  }, tc = Ww(
    I,
    P,
    Ie,
    [It],
    Te,
    fe,
    i,
    !1,
    // multiplePanel,
    B,
    W,
    jn(A == null ? void 0 : A.defaultOpenValue),
    ec,
    x,
    $
  ), za = X(tc, 2), rc = za[0], nc = za[1], Ua = ut(function(Ee, xe, Bt) {
    if (Ct(xe), R && Bt !== !1) {
      var yr = Ee || Ie[Ie.length - 1];
      R(yr, xe);
    }
  }), vr = function() {
    ht(He()), Ne(!1, {
      force: !0
    });
  }, mr = function(xe) {
    !O && !re.current.nativeElement.contains(document.activeElement) && re.current.focus(), Ne(!0), le == null || le(xe);
  }, ac = function() {
    ht(null), Ne(!1, {
      force: !0
    });
  }, ic = b.useState(null), po = X(ic, 2), ho = po[0], vo = po[1], mo = b.useState(null), go = X(mo, 2), gr = go[0], qr = go[1], Ya = b.useMemo(function() {
    var Ee = [gr].concat(Vt(Ie)).filter(function(xe) {
      return xe;
    });
    return H ? Ee : Ee.slice(0, 1);
  }, [Ie, gr, H]), yo = b.useMemo(function() {
    return !H && gr ? [gr] : Ie.filter(function(Ee) {
      return Ee;
    });
  }, [Ie, gr, H]);
  b.useEffect(function() {
    Te || qr(null);
  }, [Te]);
  var oc = Hw(K), bo = function(xe) {
    qr(xe), vo("preset");
  }, xo = function(xe) {
    var Bt = H ? de(He(), xe) : [xe], yr = ht(Bt);
    yr && !H && Ne(!1, {
      force: !0
    });
  }, lc = function(xe) {
    xo(xe);
  }, sc = function(xe) {
    qr(xe), vo("cell");
  }, cc = function(xe) {
    Ne(!0), Ye(xe);
  }, uc = function(xe) {
    ie("panel");
    var Bt = H ? de(He(), xe) : [xe];
    ot(Bt), !y && !o && i === jt && vr();
  }, fc = function() {
    Ne(!1);
  }, dc = fp(F, J, Z), pc = b.useMemo(function() {
    var Ee = ep(a, !1), xe = Qf(a, [].concat(Vt(Object.keys(Ee)), ["onChange", "onCalendarChange", "style", "className", "onPanelChange"]));
    return ue(ue({}, xe), {}, {
      multiple: a.multiple
    });
  }, [a]), hc = /* @__PURE__ */ b.createElement(Zw, we({}, pc, {
    showNow: xt,
    showTime: A,
    disabledDate: g,
    onFocus: cc,
    onBlur: nt,
    picker: N,
    mode: It,
    internalMode: jt,
    onPanelChange: Ua,
    format: s,
    value: Ie,
    isInvalid: c,
    onChange: null,
    onSelect: uc,
    pickerValue: rc,
    defaultOpenValue: A == null ? void 0 : A.defaultOpenValue,
    onPickerValueChange: nc,
    hoverValue: Ya,
    onHover: sc,
    needConfirm: y,
    onSubmit: vr,
    onOk: Se,
    presets: oc,
    onPresetHover: bo,
    onPresetSubmit: xo,
    onNow: lc,
    cellRender: dc
  })), vc = function(xe) {
    ot(xe);
  }, mc = function() {
    ie("input");
  }, gc = function(xe) {
    ie("input"), Ne(!0, {
      inherit: !0
    }), Ye(xe);
  }, yc = function(xe) {
    Ne(!1), nt(xe);
  }, bc = function(xe, Bt) {
    xe.key === "Tab" && vr(), S == null || S(xe, Bt);
  }, xc = b.useMemo(function() {
    return {
      prefixCls: f,
      locale: P,
      generateConfig: I,
      button: q.button,
      input: q.input
    };
  }, [f, P, I, q.button, q.input]);
  return Br(function() {
    Te && fe !== void 0 && Ua(null, N, !1);
  }, [Te, fe, N]), Br(function() {
    var Ee = ie();
    !Te && Ee === "input" && (Ne(!1), vr()), !Te && o && !y && Ee === "panel" && (Ne(!0), vr());
  }, [Te]), /* @__PURE__ */ b.createElement(hr.Provider, {
    value: xc
  }, /* @__PURE__ */ b.createElement($w, we({}, _w(a), {
    popupElement: hc,
    popupStyle: d.popup,
    popupClassName: p.popup,
    visible: Te,
    onClose: fc
  }), /* @__PURE__ */ b.createElement(
    r1,
    we({}, a, {
      // Ref
      ref: re,
      suffixIcon: Q,
      removeIcon: ne,
      activeHelp: !!gr,
      allHelp: !!gr && ho === "preset",
      focused: he,
      onFocus: gc,
      onBlur: yc,
      onKeyDown: bc,
      onSubmit: vr,
      value: yo,
      maskFormat: s,
      onChange: vc,
      onInputChange: mc,
      internalPicker: i,
      format: l,
      inputReadOnly: G,
      disabled: O,
      open: Te,
      onOpenChange: Ne,
      onClick: mr,
      onClear: ac,
      invalid: Js,
      onInvalid: function(xe) {
        fo(xe, 0);
      }
    })
  )));
}
var n1 = /* @__PURE__ */ b.forwardRef(cq);
Oe.env.NODE_ENV !== "production" && (n1.displayName = "RefPicker");
function a1(e) {
  return $r(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const i1 = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: a,
    controlHeightSM: i,
    controlHeightLG: o,
    fontSizeLG: l,
    lineHeightLG: s,
    paddingSM: c,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: f,
    colorFillAlter: d,
    colorPrimaryHover: p,
    colorPrimary: v,
    controlOutlineWidth: m,
    controlOutline: h,
    colorErrorOutline: y,
    colorWarningOutline: w,
    colorBgContainer: S
  } = e;
  return {
    paddingBlock: Math.max(Math.round((t - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockSM: Math.max(Math.round((i - r * n) / 2 * 10) / 10 - a, 0),
    paddingBlockLG: Math.ceil((o - l * s) / 2 * 10) / 10 - a,
    paddingInline: c - a,
    paddingInlineSM: u - a,
    paddingInlineLG: f - a,
    addonBg: d,
    activeBorderColor: v,
    hoverBorderColor: p,
    activeShadow: `0 0 0 ${m}px ${h}`,
    errorActiveShadow: `0 0 0 ${m}px ${y}`,
    warningActiveShadow: `0 0 0 ${m}px ${w}`,
    hoverBg: S,
    activeBg: S,
    inputFontSize: r,
    inputFontSizeLG: l,
    inputFontSizeSM: r
  };
}, uq = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), mp = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, uq($r(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), o1 = (e, t) => ({
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
}), Rg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, o1(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), l1 = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, o1(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, mp(e))
  }), Rg(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Rg(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), kg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), fq = (e) => ({
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
  }, kg(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), kg(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, mp(e))
    }
  })
}), s1 = (e, t) => {
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
}, c1 = (e, t) => ({
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
}), Bg = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, c1(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), u1 = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, c1(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, mp(e))
  }), Bg(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Bg(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Lg = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), dq = (e) => ({
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
  }, Lg(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Lg(e, {
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
}), f1 = (e) => ({
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
}), d1 = (e) => {
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
}, p1 = (e) => ({
  padding: `${se(e.paddingBlockSM)} ${se(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), h1 = (e) => Object.assign(Object.assign({
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
}, f1(e.colorTextPlaceholder)), {
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
  "&-lg": Object.assign({}, d1(e)),
  "&-sm": Object.assign({}, p1(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), pq = (e) => {
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
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, d1(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, p1(e)),
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
    }, nS()), {
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
}, hq = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: a
  } = e, o = a(r).sub(a(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Yo(e)), h1(e)), l1(e)), u1(e)), s1(e)), {
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
}, vq = (e) => {
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
}, mq = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: a,
    colorIcon: i,
    colorIconHover: o,
    iconCls: l
  } = e, s = `${t}-affix-wrapper`, c = `${t}-affix-wrapper-disabled`;
  return {
    [s]: Object.assign(Object.assign(Object.assign(Object.assign({}, h1(e)), {
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
    }), vq(e)), {
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
}, gq = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Yo(e)), pq(e)), {
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
      }, fq(e)), dq(e)), {
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
}, yq = (e) => {
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
}, bq = (e) => {
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
}, xq = (e) => {
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
Kf("Input", (e) => {
  const t = $r(e, a1(e));
  return [
    hq(t),
    bq(t),
    mq(t),
    gq(t),
    yq(t),
    xq(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    cp(t)
  ];
}, i1, {
  resetFont: !1
});
const lu = (e, t) => {
  const {
    componentCls: r,
    controlHeight: n
  } = e, a = t ? `${r}-${t}` : "", i = XU(e);
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
}, wq = (e) => {
  const {
    componentCls: t,
    calc: r,
    lineWidth: n
  } = e, a = $r(e, {
    fontHeight: e.fontSize,
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.multipleItemHeightSM,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS,
    controlHeight: e.controlHeightSM
  }), i = $r(e, {
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
    lu(a, "small"),
    lu(e),
    lu(i, "large"),
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
      }, ZU(e)), {
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
}, Sq = (e) => {
  const {
    pickerCellCls: t,
    pickerCellInnerCls: r,
    cellHeight: n,
    borderRadiusSM: a,
    motionDurationMid: i,
    cellHoverBg: o,
    lineWidth: l,
    lineType: s,
    colorPrimary: c,
    cellActiveWithRangeBg: u,
    colorTextLightSolid: f,
    colorTextDisabled: d,
    cellBgDisabled: p,
    colorFillSecondary: v
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
        border: `${se(l)} ${s} ${c}`,
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
        background: u
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
        background: v
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
}, Oq = (e) => {
  const {
    componentCls: t,
    pickerCellCls: r,
    pickerCellInnerCls: n,
    pickerYearMonthCellWidth: a,
    pickerControlIconSize: i,
    cellWidth: o,
    paddingSM: l,
    paddingXS: s,
    paddingXXS: c,
    colorBgContainer: u,
    lineWidth: f,
    lineType: d,
    borderRadiusLG: p,
    colorPrimary: v,
    colorTextHeading: m,
    colorSplit: h,
    pickerControlIconBorderWidth: y,
    colorIcon: w,
    textHeight: S,
    motionDurationMid: O,
    colorIconHover: g,
    fontWeightStrong: x,
    cellHeight: $,
    pickerCellPaddingVertical: C,
    colorTextDisabled: _,
    colorText: M,
    fontSize: P,
    motionDurationSlow: I,
    withoutTimeCellHeight: N,
    pickerQuarterPanelContentHeight: j,
    borderRadiusSM: E,
    colorTextLightSolid: A,
    cellHoverBg: D,
    timeColumnHeight: R,
    timeColumnWidth: k,
    timeCellHeight: L,
    controlItemBgActive: H,
    marginXXS: B,
    pickerDatePanelPaddingHorizontal: W,
    pickerControlIconMargin: U
  } = e, G = e.calc(o).mul(7).add(e.calc(W).mul(2)).equal();
  return {
    [t]: {
      "&-panel": {
        display: "inline-flex",
        flexDirection: "column",
        textAlign: "center",
        background: u,
        borderRadius: p,
        outline: "none",
        "&-focused": {
          borderColor: v
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
        width: G
      },
      // ======================= Header =======================
      "&-header": {
        display: "flex",
        padding: `0 ${se(s)}`,
        color: m,
        borderBottom: `${se(f)} ${d} ${h}`,
        "> *": {
          flex: "none"
        },
        button: {
          padding: 0,
          color: w,
          lineHeight: se(S),
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
          fontSize: P,
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
          fontWeight: x,
          lineHeight: se(S),
          "> button": {
            color: "inherit",
            fontWeight: "inherit",
            "&:not(:first-child)": {
              marginInlineStart: s
            },
            "&:hover": {
              color: v
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
          top: U,
          insetInlineStart: U,
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
          height: e.calc($).add(e.calc(C).mul(2)).equal(),
          color: M,
          verticalAlign: "middle"
        }
      },
      "&-cell": Object.assign({
        padding: `${se(C)} 0`,
        color: _,
        cursor: "pointer",
        // In view
        "&-in-view": {
          color: M
        }
      }, Sq(e)),
      "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
        [`${t}-content`]: {
          height: e.calc(N).mul(4).equal()
        },
        [n]: {
          padding: `0 ${se(s)}`
        }
      },
      "&-quarter-panel": {
        [`${t}-content`]: {
          height: j
        }
      },
      // ========================================================
      // =                       Special                        =
      // ========================================================
      // ===================== Decade Panel =====================
      "&-decade-panel": {
        [n]: {
          padding: `0 ${se(e.calc(s).div(2).equal())}`
        },
        [`${t}-cell::before`]: {
          display: "none"
        }
      },
      // ============= Year & Quarter & Month Panel =============
      "&-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
        [`${t}-body`]: {
          padding: `0 ${se(s)}`
        },
        [n]: {
          width: a
        }
      },
      // ====================== Date Panel ======================
      "&-date-panel": {
        [`${t}-body`]: {
          padding: `${se(s)} ${se(W)}`
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
              borderStartStartRadius: E,
              borderEndStartRadius: E
            },
            "&:last-child:before": {
              borderStartEndRadius: E,
              borderEndEndRadius: E
            }
          },
          "&:hover td": {
            "&:before": {
              background: D
            }
          },
          "&-range-start td, &-range-end td, &-selected td, &-hover td": {
            // Rise priority to override hover style
            [`&${r}`]: {
              "&:before": {
                background: v
              },
              [`&${t}-cell-week`]: {
                color: new qo(A).setAlpha(0.5).toHexString()
              },
              [n]: {
                color: A
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
          padding: `${se(s)} ${se(l)}`
        },
        [`${t}-content th`]: {
          width: "auto"
        }
      },
      // ==================== Datetime Panel ====================
      "&-datetime-panel": {
        display: "flex",
        [`${t}-time-panel`]: {
          borderInlineStart: `${se(f)} ${d} ${h}`
        },
        [`${t}-date-panel,
          ${t}-time-panel`]: {
          transition: `opacity ${I}`
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
          height: R
        },
        "&-column": {
          flex: "1 0 auto",
          width: k,
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
            height: e.calc("100%").sub(L).equal(),
            content: '""'
          },
          "&:not(:first-child)": {
            borderInlineStart: `${se(f)} ${d} ${h}`
          },
          "&-active": {
            background: new qo(H).setAlpha(0.2).toHexString()
          },
          "&:hover": {
            overflowY: "auto"
          },
          "> li": {
            margin: 0,
            padding: 0,
            [`&${t}-time-panel-cell`]: {
              marginInline: B,
              [`${t}-time-panel-cell-inner`]: {
                display: "block",
                width: e.calc(k).sub(e.calc(B).mul(2)).equal(),
                height: L,
                margin: 0,
                paddingBlock: 0,
                paddingInlineEnd: 0,
                paddingInlineStart: e.calc(k).sub(L).div(2).equal(),
                color: M,
                lineHeight: se(L),
                borderRadius: E,
                cursor: "pointer",
                transition: `background ${O}`,
                "&:hover": {
                  background: D
                }
              },
              "&-selected": {
                [`${t}-time-panel-cell-inner`]: {
                  background: H
                }
              },
              "&-disabled": {
                [`${t}-time-panel-cell-inner`]: {
                  color: _,
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
}, $q = (e) => {
  const {
    componentCls: t,
    textHeight: r,
    lineWidth: n,
    paddingSM: a,
    antCls: i,
    colorPrimary: o,
    cellActiveWithRangeBg: l,
    colorPrimaryBorder: s,
    lineType: c,
    colorSplit: u
  } = e;
  return {
    [`${t}-dropdown`]: {
      // ======================== Footer ========================
      [`${t}-footer`]: {
        borderTop: `${se(n)} ${c} ${u}`,
        "&-extra": {
          padding: `0 ${se(a)}`,
          lineHeight: se(e.calc(r).sub(e.calc(n).mul(2)).equal()),
          textAlign: "start",
          "&:not(:last-child)": {
            borderBottom: `${se(n)} ${c} ${u}`
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
          borderColor: s,
          cursor: "pointer"
        },
        [`${t}-ok`]: {
          paddingBlock: e.calc(n).mul(2).equal(),
          marginInlineStart: "auto"
        }
      }
    }
  };
}, Cq = (e) => {
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
}, Pq = (e) => {
  const {
    colorBgContainerDisabled: t,
    controlHeight: r,
    controlHeightSM: n,
    controlHeightLG: a,
    paddingXXS: i,
    lineWidth: o
  } = e, l = i * 2, s = o * 2, c = Math.min(r - l, r - s), u = Math.min(n - l, n - s), f = Math.min(a - l, a - s);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(i / 2),
    cellHoverBg: e.controlItemBgHover,
    cellActiveWithRangeBg: e.controlItemBgActive,
    cellHoverWithRangeBg: new qo(e.colorPrimary).lighten(35).toHexString(),
    cellRangeBorderColor: new qo(e.colorPrimary).lighten(20).toHexString(),
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
    multipleItemHeightSM: u,
    multipleItemHeightLG: f,
    multipleSelectorBgDisabled: t,
    multipleItemColorDisabled: e.colorTextDisabled,
    multipleItemBorderColorDisabled: "transparent"
  };
}, _q = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, i1(e)), Pq(e)), aS(e)), {
  presetsWidth: 120,
  presetsMaxWidth: 200,
  zIndexPopup: e.zIndexPopupBase + 50
}), Eq = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: [
      Object.assign(Object.assign(Object.assign({}, l1(e)), u1(e)), s1(e)),
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
}, su = (e, t, r, n) => {
  const a = e.calc(r).add(2).equal(), i = e.max(e.calc(t).sub(a).div(2).equal(), 0), o = e.max(e.calc(t).sub(a).sub(i).equal(), 0);
  return {
    padding: `${se(i)} ${se(n)} ${se(o)}`
  };
}, Aq = (e) => {
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
}, Tq = (e) => {
  const {
    componentCls: t,
    antCls: r,
    controlHeight: n,
    paddingInline: a,
    lineWidth: i,
    lineType: o,
    colorBorder: l,
    borderRadius: s,
    motionDurationMid: c,
    colorTextDisabled: u,
    colorTextPlaceholder: f,
    controlHeightLG: d,
    fontSizeLG: p,
    controlHeightSM: v,
    paddingInlineSM: m,
    paddingXS: h,
    marginXS: y,
    colorTextDescription: w,
    lineWidthBold: S,
    colorPrimary: O,
    motionDurationSlow: g,
    zIndexPopup: x,
    paddingXXS: $,
    sizePopupArrow: C,
    colorBgElevated: _,
    borderRadiusLG: M,
    boxShadowSecondary: P,
    borderRadiusSM: I,
    colorSplit: N,
    cellHoverBg: j,
    presetsWidth: E,
    presetsMaxWidth: A,
    boxShadowPopoverArrow: D,
    fontHeight: R,
    fontHeightLG: k,
    lineHeightLG: L
  } = e;
  return [
    {
      [t]: Object.assign(Object.assign(Object.assign({}, Yo(e)), su(e, n, R, a)), {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        borderRadius: s,
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
          }, f1(f)), {
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
              color: u,
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
        "&-large": Object.assign(Object.assign({}, su(e, d, k, a)), {
          [`${t}-input > input`]: {
            fontSize: p,
            lineHeight: L
          }
        }),
        "&-small": Object.assign({}, su(e, v, R, m)),
        [`${t}-suffix`]: {
          display: "flex",
          flex: "none",
          alignSelf: "center",
          marginInlineStart: e.calc(h).div(2).equal(),
          color: u,
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
          color: u,
          lineHeight: 1,
          transform: "translateY(-50%)",
          cursor: "pointer",
          opacity: 0,
          transition: `opacity ${c}, color ${c}`,
          "> *": {
            verticalAlign: "top"
          },
          "&:hover": {
            color: w
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
          color: u,
          fontSize: p,
          verticalAlign: "top",
          cursor: "default",
          [`${t}-focused &`]: {
            color: w
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
            height: S,
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
            padding: `0 ${se(h)}`,
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
        "&-dropdown": Object.assign(Object.assign(Object.assign({}, Yo(e)), Oq(e)), {
          pointerEvents: "none",
          position: "absolute",
          // Fix incorrect position of picker popup
          // https://github.com/ant-design/ant-design/issues/35590
          top: -9999,
          left: {
            _skip_check_: !0,
            value: -9999
          },
          zIndex: x,
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
            animationName: rw
          },
          [`&${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-enter${r}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-appear${r}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]: {
            animationName: ew
          },
          // https://github.com/ant-design/ant-design/issues/48727
          [`&${r}-slide-up-leave ${t}-panel-container`]: {
            pointerEvents: "none"
          },
          [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-topRight`]: {
            animationName: nw
          },
          [`&${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${r}-slide-up-leave${r}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]: {
            animationName: tw
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
          }, iS(e, _, D)), {
            "&:before": {
              insetInlineStart: e.calc(a).mul(1.5).equal()
            }
          }),
          [`${t}-panel-container`]: {
            overflow: "hidden",
            verticalAlign: "top",
            background: _,
            borderRadius: M,
            boxShadow: P,
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
              minWidth: E,
              maxWidth: A,
              ul: {
                height: 0,
                flex: "auto",
                listStyle: "none",
                overflow: "auto",
                margin: 0,
                padding: h,
                borderInlineEnd: `${se(i)} ${o} ${N}`,
                li: Object.assign(Object.assign({}, oS), {
                  borderRadius: I,
                  paddingInline: h,
                  paddingBlock: e.calc(v).sub(R).div(2).equal(),
                  cursor: "pointer",
                  transition: `all ${g}`,
                  "+ li": {
                    marginTop: y
                  },
                  "&:hover": {
                    background: j
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
          padding: `${se(e.calc(C).mul(2).div(3).equal())} 0`,
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
    Tg(e, "slide-up"),
    Tg(e, "slide-down"),
    Ag(e, "move-up"),
    Ag(e, "move-down")
  ];
}, v1 = Kf("DatePicker", (e) => {
  const t = $r(a1(e), Cq(e), {
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [
    $q(t),
    Tq(t),
    Eq(t),
    Aq(t),
    wq(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    cp(e, {
      focusElCls: `${e.componentCls}-focused`
    })
  ];
}, _q);
var Mq = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" }, Iq = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: Mq
  }));
}, gp = /* @__PURE__ */ b.forwardRef(Iq);
Oe.env.NODE_ENV !== "production" && (gp.displayName = "CalendarOutlined");
var jq = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, name: "clock-circle", theme: "outlined" }, Dq = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: jq
  }));
}, yp = /* @__PURE__ */ b.forwardRef(Dq);
Oe.env.NODE_ENV !== "production" && (yp.displayName = "ClockCircleOutlined");
var Nq = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z" } }] }, name: "swap-right", theme: "outlined" }, Rq = function(t, r) {
  return /* @__PURE__ */ b.createElement(Pa, we({}, t, {
    ref: r,
    icon: Nq
  }));
}, m1 = /* @__PURE__ */ b.forwardRef(Rq);
Oe.env.NODE_ENV !== "production" && (m1.displayName = "SwapRightOutlined");
function kq(e, t, r) {
  return r !== void 0 ? r : t === "year" && e.lang.yearPlaceholder ? e.lang.yearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.quarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.monthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.weekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.placeholder : e.lang.placeholder;
}
function Bq(e, t, r) {
  return r !== void 0 ? r : t === "year" && e.lang.yearPlaceholder ? e.lang.rangeYearPlaceholder : t === "quarter" && e.lang.quarterPlaceholder ? e.lang.rangeQuarterPlaceholder : t === "month" && e.lang.monthPlaceholder ? e.lang.rangeMonthPlaceholder : t === "week" && e.lang.weekPlaceholder ? e.lang.rangeWeekPlaceholder : t === "time" && e.timePickerLocale.placeholder ? e.timePickerLocale.rangePlaceholder : e.lang.rangePlaceholder;
}
function bp(e, t) {
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
function g1(e, t) {
  const {
    allowClear: r = !0
  } = e, {
    clearIcon: n,
    removeIcon: a
  } = rY(Object.assign(Object.assign({}, e), {
    prefixCls: t,
    componentName: "DatePicker"
  }));
  return [b.useMemo(() => r === !1 ? !1 : Object.assign({
    clearIcon: n
  }, r === !0 ? {} : r), [r, n]), a];
}
const [Lq, Hq] = ["week", "WeekPicker"], [Fq, Wq] = ["month", "MonthPicker"], [Vq, zq] = ["year", "YearPicker"], [Uq, Yq] = ["quarter", "QuarterPicker"], [y1, Hg] = ["time", "TimePicker"], qq = (e) => /* @__PURE__ */ b.createElement(Ys, Object.assign({
  size: "small",
  type: "primary"
}, e));
function b1(e) {
  return b.useMemo(() => Object.assign({
    button: qq
  }, e), [e]);
}
var Gq = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Kq = (e) => {
  const t = /* @__PURE__ */ b.forwardRef((r, n) => {
    var a;
    const {
      prefixCls: i,
      getPopupContainer: o,
      components: l,
      className: s,
      style: c,
      placement: u,
      size: f,
      disabled: d,
      bordered: p = !0,
      placeholder: v,
      popupClassName: m,
      dropdownClassName: h,
      status: y,
      rootClassName: w,
      variant: S,
      picker: O
    } = r, g = Gq(r, ["prefixCls", "getPopupContainer", "components", "className", "style", "placement", "size", "disabled", "bordered", "placeholder", "popupClassName", "dropdownClassName", "status", "rootClassName", "variant", "picker"]), x = b.useRef(null), {
      getPrefixCls: $,
      direction: C,
      getPopupContainer: _,
      rangePicker: M
    } = b.useContext(en), P = $("picker", i), {
      compactSize: I,
      compactItemClassnames: N
    } = Zf(P, C), j = $(), [E, A] = pw("rangePicker", S, p), D = Vx(P), [R, k, L] = v1(P, D);
    if (Oe.env.NODE_ENV !== "production") {
      const Z = eo("DatePicker.RangePicker");
      Z.deprecated(!h, "dropdownClassName", "popupClassName"), Z.deprecated(!("bordered" in r), "bordered", "variant");
    }
    const [H] = g1(r, P), B = b1(l), W = rp((Z) => {
      var le;
      return (le = f ?? I) !== null && le !== void 0 ? le : Z;
    }), U = b.useContext(Xf), G = d ?? U, Q = b.useContext(Qg), {
      hasFeedback: ne,
      status: te,
      feedbackIcon: z
    } = Q, K = /* @__PURE__ */ b.createElement(b.Fragment, null, O === y1 ? /* @__PURE__ */ b.createElement(yp, null) : /* @__PURE__ */ b.createElement(gp, null), ne && z);
    b.useImperativeHandle(n, () => x.current);
    const [q] = Wx("Calendar", ty), F = Object.assign(Object.assign({}, q), r.locale), [J] = Jg("DatePicker", (a = r.popupStyle) === null || a === void 0 ? void 0 : a.zIndex);
    return R(/* @__PURE__ */ b.createElement(ey, {
      space: !0
    }, /* @__PURE__ */ b.createElement(t1, Object.assign({
      separator: /* @__PURE__ */ b.createElement("span", {
        "aria-label": "to",
        className: `${P}-separator`
      }, /* @__PURE__ */ b.createElement(m1, null)),
      disabled: G,
      ref: x,
      popupAlign: bp(C, u),
      placement: u,
      placeholder: Bq(F, O, v),
      suffixIcon: K,
      prevIcon: /* @__PURE__ */ b.createElement("span", {
        className: `${P}-prev-icon`
      }),
      nextIcon: /* @__PURE__ */ b.createElement("span", {
        className: `${P}-next-icon`
      }),
      superPrevIcon: /* @__PURE__ */ b.createElement("span", {
        className: `${P}-super-prev-icon`
      }),
      superNextIcon: /* @__PURE__ */ b.createElement("span", {
        className: `${P}-super-next-icon`
      }),
      transitionName: `${j}-slide-up`,
      picker: O
    }, g, {
      className: je({
        [`${P}-${W}`]: W,
        [`${P}-${E}`]: A
      }, fw(P, dw(te, y), ne), k, N, s, M == null ? void 0 : M.className, L, D, w),
      style: Object.assign(Object.assign({}, M == null ? void 0 : M.style), c),
      locale: F.lang,
      prefixCls: P,
      getPopupContainer: o || _,
      generateConfig: e,
      components: B,
      direction: C,
      classNames: {
        popup: je(k, m || h, L, D, w)
      },
      styles: {
        popup: Object.assign(Object.assign({}, r.popupStyle), {
          zIndex: J
        })
      },
      allowClear: H
    }))));
  });
  return Oe.env.NODE_ENV !== "production" && (t.displayName = "RangePicker"), t;
};
var Xq = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
    t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Zq = (e) => {
  const t = (s, c) => {
    const u = c === Hg ? "timePicker" : "datePicker", f = /* @__PURE__ */ b.forwardRef((d, p) => {
      var v;
      const {
        prefixCls: m,
        getPopupContainer: h,
        components: y,
        style: w,
        className: S,
        rootClassName: O,
        size: g,
        bordered: x,
        placement: $,
        placeholder: C,
        popupClassName: _,
        dropdownClassName: M,
        disabled: P,
        status: I,
        variant: N,
        onCalendarChange: j
      } = d, E = Xq(d, ["prefixCls", "getPopupContainer", "components", "style", "className", "rootClassName", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status", "variant", "onCalendarChange"]), {
        getPrefixCls: A,
        direction: D,
        getPopupContainer: R,
        // Consume different styles according to different names
        [u]: k
      } = b.useContext(en), L = A("picker", m), {
        compactSize: H,
        compactItemClassnames: B
      } = Zf(L, D), W = b.useRef(null), [U, G] = pw("datePicker", N, x), Q = Vx(L), [ne, te, z] = v1(L, Q);
      b.useImperativeHandle(p, () => W.current);
      const K = {
        showToday: !0
      }, q = s || d.picker, F = A(), {
        onSelect: J,
        multiple: Z
      } = E, le = J && s === "time" && !Z, re = (Se, Ie, pe) => {
        j == null || j(Se, Ie, pe), le && J(Se);
      };
      if (Oe.env.NODE_ENV !== "production") {
        const Se = eo(c || "DatePicker");
        Oe.env.NODE_ENV !== "production" && Se(s !== "quarter", "deprecated", `DatePicker.${c} is legacy usage. Please use DatePicker[picker='${s}'] directly.`), Se.deprecated(!M, "dropdownClassName", "popupClassName"), Se.deprecated(!("bordered" in d), "bordered", "variant"), Se.deprecated(!le, "onSelect", "onCalendarChange");
      }
      const [ae, de] = g1(d, L), $e = b1(y), Be = rp((Se) => {
        var Ie;
        return (Ie = g ?? H) !== null && Ie !== void 0 ? Ie : Se;
      }), Te = b.useContext(Xf), Ne = P ?? Te, Ge = b.useContext(Qg), {
        hasFeedback: Qe,
        status: Ke,
        feedbackIcon: Ue
      } = Ge, Ve = /* @__PURE__ */ b.createElement(b.Fragment, null, q === "time" ? /* @__PURE__ */ b.createElement(yp, null) : /* @__PURE__ */ b.createElement(gp, null), Qe && Ue), [_t] = Wx("DatePicker", ty), He = Object.assign(Object.assign({}, _t), d.locale), [ot] = Jg("DatePicker", (v = d.popupStyle) === null || v === void 0 ? void 0 : v.zIndex);
      return ne(/* @__PURE__ */ b.createElement(ey, {
        space: !0
      }, /* @__PURE__ */ b.createElement(n1, Object.assign({
        ref: W,
        placeholder: kq(He, q, C),
        suffixIcon: Ve,
        dropdownAlign: bp(D, $),
        placement: $,
        prevIcon: /* @__PURE__ */ b.createElement("span", {
          className: `${L}-prev-icon`
        }),
        nextIcon: /* @__PURE__ */ b.createElement("span", {
          className: `${L}-next-icon`
        }),
        superPrevIcon: /* @__PURE__ */ b.createElement("span", {
          className: `${L}-super-prev-icon`
        }),
        superNextIcon: /* @__PURE__ */ b.createElement("span", {
          className: `${L}-super-next-icon`
        }),
        transitionName: `${F}-slide-up`,
        picker: s,
        onCalendarChange: re
      }, K, E, {
        locale: He.lang,
        className: je({
          [`${L}-${Be}`]: Be,
          [`${L}-${U}`]: G
        }, fw(L, dw(Ke, I), Qe), te, B, k == null ? void 0 : k.className, S, z, Q, O),
        style: Object.assign(Object.assign({}, k == null ? void 0 : k.style), w),
        prefixCls: L,
        getPopupContainer: h || R,
        generateConfig: e,
        components: $e,
        direction: D,
        disabled: Ne,
        classNames: {
          popup: je(te, z, Q, O, _ || M)
        },
        styles: {
          popup: Object.assign(Object.assign({}, d.popupStyle), {
            zIndex: ot
          })
        },
        allowClear: ae,
        removeIcon: de
      }))));
    });
    return Oe.env.NODE_ENV !== "production" && c && (f.displayName = c), f;
  }, r = t(), n = t(Lq, Hq), a = t(Fq, Wq), i = t(Vq, zq), o = t(Uq, Yq), l = t(y1, Hg);
  return {
    DatePicker: r,
    WeekPicker: n,
    MonthPicker: a,
    YearPicker: i,
    TimePicker: l,
    QuarterPicker: o
  };
}, x1 = (e) => {
  const {
    DatePicker: t,
    WeekPicker: r,
    MonthPicker: n,
    YearPicker: a,
    TimePicker: i,
    QuarterPicker: o
  } = Zq(e), l = Kq(e), s = t;
  return s.WeekPicker = r, s.MonthPicker = n, s.YearPicker = a, s.RangePicker = l, s.TimePicker = i, s.QuarterPicker = o, Oe.env.NODE_ENV !== "production" && (s.displayName = "DatePicker"), s;
}, Va = x1(gY);
function w1(e) {
  const t = bp(e.direction, e.placement);
  return t.overflow.adjustY = !1, t.overflow.adjustX = !1, Object.assign(Object.assign({}, e), {
    dropdownAlign: t
  });
}
const Qq = lw(Va, "picker", null, w1);
Va._InternalPanelDoNotUseOrYouWillBeFired = Qq;
const Jq = lw(Va.RangePicker, "picker", null, w1);
Va._InternalRangePanelDoNotUseOrYouWillBeFired = Jq;
Va.generatePicker = x1;
const { RangePicker: eG } = Va, cu = [
  { symbol: "All", icon: "" },
  { symbol: "ETH", icon: "/imgs/logos/eth.png" },
  { symbol: "MATIC", icon: "/imgs/logos/matic.png" },
  { symbol: "TVWT", icon: "/imgs/logos/tvwt.png" }
];
function tG({
  onDateChange: e,
  defaultDates: t,
  onTokenChange: r,
  selectedToken: n,
  onReset: a,
  onDownloadCSV: i
}) {
  var l, s;
  const o = (c) => {
    r(c);
  };
  return /* @__PURE__ */ V.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-[14px]", children: [
      /* @__PURE__ */ V.jsxs(E1, { children: [
        /* @__PURE__ */ V.jsxs(A1, { className: Ce(
          "w-[120px] h-10 bg-white border border-[#E0E0E0] rounded-md",
          "hover:border-[#52c41a] focus:ring-[#52c41a] focus:outline-none",
          "text-sm px-3",
          "flex items-center justify-between"
        ), children: [
          /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ V.jsx(
              "img",
              {
                src: (l = cu.find((c) => c.symbol === n)) == null ? void 0 : l.icon,
                alt: n,
                className: Ce(
                  "w-4 h-4 rounded-full",
                  !((s = cu.find((c) => c.symbol === n)) != null && s.icon) && "invisible"
                )
              }
            ),
            /* @__PURE__ */ V.jsx("span", { children: n })
          ] }),
          /* @__PURE__ */ V.jsx(D1, { className: "h-4 w-4 opacity-50" })
        ] }),
        /* @__PURE__ */ V.jsx(T1, { className: "bg-white", children: cu.map((c) => /* @__PURE__ */ V.jsxs(
          M1,
          {
            onClick: () => o(c.symbol),
            className: Ce(
              "cursor-pointer text-sm",
              "flex items-center justify-between"
            ),
            children: [
              /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ V.jsx(
                  "img",
                  {
                    src: c.icon,
                    alt: c.symbol,
                    className: Ce(
                      "w-4 h-4 rounded-full",
                      !c.icon && "invisible"
                    )
                  }
                ),
                /* @__PURE__ */ V.jsx("span", { className: Ce(
                  n === c.symbol && "text-[#52c41a]"
                ), children: c.symbol })
              ] }),
              n === c.symbol && /* @__PURE__ */ V.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          },
          c.symbol
        )) })
      ] }),
      /* @__PURE__ */ V.jsx(
        Zg,
        {
          theme: {
            token: {
              colorPrimary: "#52c41a",
              controlHeight: 40
            }
          },
          children: /* @__PURE__ */ V.jsx(
            eG,
            {
              defaultValue: [
                ct(t[0]),
                ct(t[1])
              ],
              disabledDate: (c) => c && c > ct().endOf("day"),
              onChange: (c) => {
                if (c && c[0] && c[1]) {
                  const u = c[0].startOf("day").toDate(), f = c[1].endOf("day").toDate();
                  e([u, f]);
                }
              }
            }
          )
        }
      ),
      /* @__PURE__ */ V.jsx("div", { className: "hidden tablet:block text-black text-base font-bold leading-tight cursor-pointer", onClick: a, children: " Reset" })
    ] }),
    /* @__PURE__ */ V.jsx(zf, { className: "hidden tablet:block", onClick: i, children: "Download CSV" })
  ] });
}
const Fg = {
  ETH: "/imgs/logos/eth.png",
  MATIC: "/imgs/logos/matic.png",
  TVWT: "/imgs/logos/tvwt.png"
};
function rG({ data: e }) {
  return /* @__PURE__ */ V.jsxs(lS, { children: [
    /* @__PURE__ */ V.jsx(sS, { className: "hidden tablet:table-header-group", children: /* @__PURE__ */ V.jsxs(Sc, { className: "text-xs text-[#7b8293] leading-none hover:bg-transparent", children: [
      /* @__PURE__ */ V.jsx(Rn, { className: "h-[16px] px-0 pb-[8px]", children: "Transaction" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "h-[16px] px-0 pb-[8px]", children: "Amount" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "Network" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "From" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "hidden tablet:table-cell h-[16px] px-0 pb-[8px]", children: "To" }),
      /* @__PURE__ */ V.jsx(Rn, { className: "h-[16px] px-0 pb-[8px] text-right", children: "Time" })
    ] }) }),
    /* @__PURE__ */ V.jsx(Op, { className: "hidden tablet:table-row-group", children: e.map((t) => /* @__PURE__ */ V.jsxs(Sc, { className: "hover:bg-transparent", children: [
      /* @__PURE__ */ V.jsx(Er, { className: Ce(
        "px-0 py-6",
        "desktop:w-[150px] laptop:w-[150px]"
      ), children: /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ V.jsx("img", { src: Fg[t.token], alt: t.token, className: "w-[28px] h-[28px]" }),
        /* @__PURE__ */ V.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: t.type })
      ] }) }),
      /* @__PURE__ */ V.jsx(Er, { className: Ce(
        "px-0 py-6",
        "desktop:w-[190px] laptop:w-[150px]"
      ), children: /* @__PURE__ */ V.jsxs("span", { className: Ce(
        "text-lg font-bold leading-tight",
        t.type === "Receive" ? "text-[#00a478]" : "text-[#ff6363]"
      ), children: [
        t.type === "Receive" ? "+" : "-",
        ui(Sp(t.amount), 2),
        " ",
        t.token
      ] }) }),
      /* @__PURE__ */ V.jsx(Er, { className: Ce(
        "hidden tablet:table-cell px-0 py-6",
        "text-sm text-[#929292] font-medium leading-none",
        "tablet:w-[90px] laptop:w-[120px]"
      ), children: t.network }),
      /* @__PURE__ */ V.jsxs(Er, { className: Ce(
        "hidden tablet:table-cell px-0 py-6",
        "text-xs text-[#929292] font-medium leading-none break-all"
      ), children: [
        /* @__PURE__ */ V.jsx("div", { className: Ce(
          "hidden tablet:block laptop:hidden",
          "max-w-[110px] truncate"
        ), children: t.from }),
        /* @__PURE__ */ V.jsx("div", { className: Ce(
          "hidden laptop:block desktop:hidden",
          "w-[141px] mr-[30px]"
        ), children: t.from }),
        /* @__PURE__ */ V.jsx("div", { className: Ce(
          "hidden desktop:block",
          "w-[298px]"
        ), children: t.from })
      ] }),
      /* @__PURE__ */ V.jsxs(Er, { className: Ce(
        "hidden tablet:table-cell px-0 py-6",
        "text-xs text-[#929292] font-medium leading-none break-all"
      ), children: [
        /* @__PURE__ */ V.jsx("div", { className: Ce(
          "hidden tablet:block laptop:hidden",
          "max-w-[110px] truncate"
        ), children: t.to }),
        /* @__PURE__ */ V.jsx("div", { className: Ce(
          "hidden laptop:block desktop:hidden",
          "w-[141px] mr-[30px]"
        ), children: t.to }),
        /* @__PURE__ */ V.jsx("div", { className: Ce(
          "hidden desktop:block",
          "w-[298px]"
        ), children: t.to })
      ] }),
      /* @__PURE__ */ V.jsx(Er, { className: "px-0 py-6 text-right text-sm text-black leading-none font-normal w-[120px]", children: new Date(t.timestamp).toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1
      }) })
    ] }, t.id)) }),
    /* @__PURE__ */ V.jsx(Op, { className: "table-row-group tablet:hidden", children: e.map((t) => /* @__PURE__ */ V.jsxs(Sc, { className: "hover:bg-transparent", children: [
      /* @__PURE__ */ V.jsx(Er, { className: Ce(
        "px-0 py-6 w-[180px]"
      ), children: /* @__PURE__ */ V.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ V.jsx("img", { src: Fg[t.token], alt: t.token, className: "w-[28px] h-[28px]" }),
        /* @__PURE__ */ V.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ V.jsx("span", { className: "text-base font-bold leading-tight text-[#3d3d3d]", children: t.type }),
          /* @__PURE__ */ V.jsxs("div", { className: "flex flex-col gap-1 mt-[6px] text-xs text-[#929292] font-medium leading-none break-all", children: [
            /* @__PURE__ */ V.jsxs("p", { children: [
              "From: ",
              t.from
            ] }),
            /* @__PURE__ */ V.jsxs("p", { children: [
              "To: ",
              t.to
            ] }),
            /* @__PURE__ */ V.jsxs("p", { children: [
              "Network: ",
              t.network
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ V.jsx(Er, { className: Ce(
        "px-0 py-6",
        "desktop:w-[190px] laptop:w-[150px]"
      ) }),
      /* @__PURE__ */ V.jsxs(Er, { className: "px-0 py-6 text-right text-sm text-black leading-none font-normal w-[120px]", children: [
        /* @__PURE__ */ V.jsxs("p", { className: Ce(
          "text-lg font-bold leading-tight",
          t.type === "Receive" ? "text-[#00a478]" : "text-[#ff6363]"
        ), children: [
          t.type === "Receive" ? "+" : "-",
          ui(Sp(t.amount), 2),
          " ",
          t.token
        ] }),
        /* @__PURE__ */ V.jsx("p", { children: new Date(t.timestamp).toLocaleString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1
        }) })
      ] })
    ] }, t.id)) })
  ] });
}
function nG() {
  const { address: e } = es.all(), [t, r] = b.useState([]), [n, a] = b.useState([
    ct().subtract(1, "month").startOf("day").toDate(),
    ct().endOf("day").toDate()
  ]), [i, o] = b.useState([]), [l, s] = b.useState(!1), [c, u] = b.useState("ALL");
  b.useEffect(() => {
    f(n, "ALL");
  }, []);
  const f = async (m, h = "ALL") => {
    const y = m[0].getTime(), w = m[1].getTime();
    try {
      s(!0);
      const S = await Ji.get("/user-assets/transaction-history", {
        params: {
          address: e,
          startDate: y,
          endDate: w
        }
      });
      o(S.data), r(h === "ALL" ? S.data.slice() : S.data.filter((O) => O.token === h));
    } catch (S) {
      const O = Vf(S);
      ry.error(O.message);
    } finally {
      s(!1);
    }
  }, d = (m) => {
    u(m), r(m === "ALL" ? i.slice() : i.filter((h) => h.token === m));
  }, p = () => {
    u("ALL"), f(n, "ALL");
  }, v = () => {
    Ug("download csv");
    const m = ["Date", "Type", "Token", "Amount", "Status"], h = t.map((g) => [
      ct(g.timestamp).format("YYYY-MM-DD HH:mm:ss"),
      g.type,
      g.token,
      g.amount,
      g.status
    ]), y = [
      m.join(","),
      ...h.map((g) => g.join(","))
    ].join(`
`), w = new Blob([y], { type: "text/csv;charset=utf-8;" }), S = URL.createObjectURL(w), O = document.createElement("a");
    O.setAttribute("href", S), O.setAttribute("download", `transaction-history-${ct().format("YYYY-MM-DD")}.csv`), document.body.appendChild(O), O.click(), document.body.removeChild(O), URL.revokeObjectURL(S);
  };
  return /* @__PURE__ */ V.jsxs("div", { className: "min-h-[500px]", children: [
    /* @__PURE__ */ V.jsx("div", { className: Ce(
      "text-[#111111] font-bold",
      "text-2xl mobile:text-[32px]",
      "mb-6"
    ), children: "History" }),
    t.length > 0 && /* @__PURE__ */ V.jsx("div", { className: "mb-[40px]", children: /* @__PURE__ */ V.jsx(
      tG,
      {
        onDateChange: (m) => f(m, c),
        defaultDates: n,
        onTokenChange: d,
        selectedToken: c,
        onReset: p,
        onDownloadCSV: v
      }
    ) }),
    !l && t.length === 0 ? /* @__PURE__ */ V.jsxs("div", { className: "mt-[96px]", children: [
      /* @__PURE__ */ V.jsx(cS, { className: "mx-auto", text: "No transaction history now, but you can connect wallet and make a transfer!" }),
      /* @__PURE__ */ V.jsx(dS, { className: "mt-[24px]", buttonClassName: "text-white bg-black rounded-full py-[10px] px-[16px] w-[173px]" })
    ] }) : /* @__PURE__ */ V.jsx(rG, { data: t })
  ] });
}
const aG = ["purchased-products"], iG = async () => (await Ji.get("/user/purchasedProducts")).data, oG = () => zg({
  queryKey: aG,
  queryFn: iG
});
function Wg({
  className: e,
  icon: t,
  title: r,
  description: n,
  onClick: a
}) {
  return /* @__PURE__ */ V.jsx(
    "div",
    {
      className: Ce(
        "border border-[#ebebeb] bg-[#fafafa] rounded-[20px]",
        "p-[16px] tablet:p-[40px] tablet:pb-[20px]",
        e
      ),
      onClick: a,
      children: /* @__PURE__ */ V.jsxs("div", { className: Ce(
        "block tablet:flex tablet:items-center tablet:justify-between flex-wrap",
        "tablet:h-[46px] tablet:mb-[30px] tablet:px-[20px]"
      ), children: [
        /* @__PURE__ */ V.jsxs("div", { className: Ce(
          "flex items-center",
          "shrink-0 min-w-fit",
          "w-[218px]",
          "mb-[12px] tablet:mb-0"
        ), children: [
          /* @__PURE__ */ V.jsx(
            "img",
            {
              className: Ce(
                "w-[27px] tablet:w-[37px]",
                "mr-[16px] tablet:mr-[12px]"
              ),
              src: t,
              alt: "connect-dapps"
            }
          ),
          /* @__PURE__ */ V.jsx("p", { className: Ce(
            "text-[#111111] font-bold leading-normal",
            "text-base tablet:text-2xl"
          ), children: r })
        ] }),
        /* @__PURE__ */ V.jsx("p", { className: Ce(
          "text-[#828282]",
          "text-[10px] tablet:text-sm",
          "leading-3 tablet:leading-none",
          "w-full tablet:w-[319px] laptop:w-[394px] desktop:w-[587px]",
          "mb-[10px] tablet:mb-0"
        ), children: n }),
        /* @__PURE__ */ V.jsx("div", { className: Ce(
          "w-fit ml-auto tablet:ml-0 tablet:w-auto"
        ), children: /* @__PURE__ */ V.jsx(
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
function lG() {
  const e = ts(), { handleConnect: t } = pS(), { data: r } = oG(), [n, a] = b.useState(!1), [i, o] = b.useState(null), l = () => {
    Ug("handleConnectDApps"), t();
  }, s = () => {
    const c = r ?? [];
    if (c.length >= 2) {
      e("/marketplace?category=Added");
      return;
    }
    if (c.length === 1) {
      const u = c.find((f) => f.vendor === "Moonpay");
      u ? (o(u), a(!0)) : e("/marketplace?category=Added");
      return;
    }
    e("/marketplace?category=Added");
  };
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsxs("div", { children: [
      /* @__PURE__ */ V.jsx("p", { className: Ce(
        "text-[#111111] font-bold leading-tight",
        "text-2xl tablet:text-[32px]",
        "mb-[24px] tablet:mb-[40px]"
      ), children: "Let’s get started" }),
      /* @__PURE__ */ V.jsx(
        Wg,
        {
          icon: "/imgs/icons/connect_dapps.svg",
          title: "Connect dApps",
          description: "Link your wallet to any dApp easily with WalletConnect. Enjoy secure access to DeFi, NFTs, and more—all from your wallet in just a few taps!",
          className: "mb-[24px] cursor-pointer",
          onClick: l
        }
      ),
      /* @__PURE__ */ V.jsx(
        Wg,
        {
          icon: "/imgs/icons/top_up.svg",
          title: "Top up",
          description: "Transition smoothly into the web3 world with our intuitive on-ramp. Fund your wallet easily, access decentralized apps.",
          className: "cursor-pointer",
          onClick: s
        }
      )
    ] }),
    /* @__PURE__ */ V.jsx(ny, { isOpen: n, onClose: () => a(!1), product: i })
  ] });
}
function sG({
  className: e
}) {
  const t = ts(), [r, n] = b.useState([]);
  b.useEffect(() => {
    a();
  }, []);
  const a = async () => {
    const i = await Ji.get("/marketplace/product/recommend-products");
    n(i.data);
  };
  return /* @__PURE__ */ V.jsxs("div", { className: Ce(
    e
  ), children: [
    /* @__PURE__ */ V.jsxs("div", { className: Ce(
      "flex items-center justify-between flex-wrap",
      "mb-[24px]"
    ), children: [
      /* @__PURE__ */ V.jsxs("div", { children: [
        /* @__PURE__ */ V.jsx("p", { className: Ce(
          "text-[#111111] font-bold leading-tight",
          "text-2xl tablet:text-[32px]"
        ), children: "Recommended Products" }),
        /* @__PURE__ */ V.jsx("p", { className: Ce(
          "text-[#828282] leading-none text-sm mt-[8px]"
        ), children: "Tailor your own decentralized tools" })
      ] }),
      /* @__PURE__ */ V.jsx(zf, { className: "py-[10px] hidden tablet:block", onClick: () => {
        t("/marketplace");
      }, children: "Explore more features" })
    ] }),
    /* @__PURE__ */ V.jsx("div", { className: Ce([
      "flex flex-wrap mx-auto",
      "desktop:w-[1224px] laptop:w-[816px] tablet:w-[720px] w-[346px]",
      "desktop:gap-x-6 laptop:gap-x-8 tablet:gap-x-6"
    ]), children: r.map((i) => /* @__PURE__ */ V.jsx(
      uS,
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
function Vg({
  products: e
}) {
  const [t, r] = b.useState([]), [n, a] = b.useState(!1), [i, o] = b.useState({}), { data: l } = Jf();
  b.useEffect(() => {
    if (l && l.purchasedProducts) {
      const u = l.purchasedProducts.filter((f) => f.status === "active").map((f) => f.productId);
      r(u);
    }
  }, [l]);
  const s = (u) => {
    a(!0), o(u);
  }, { handleClick: c } = fS({
    activedPurchasedProductIds: t,
    handleRampOpenModal: s
  });
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    /* @__PURE__ */ V.jsx("div", { className: Ce(
      "flex flex-wrap",
      "gap-[32px] desktop:gap-[24px]"
    ), children: e.map((u) => /* @__PURE__ */ V.jsxs(
      "div",
      {
        className: Ce(
          "w-[154px] border border-[#ebebeb] rounded-2xl px-[22px] py-[22px] text-center cursor-pointer"
        ),
        onClick: () => c(u),
        children: [
          /* @__PURE__ */ V.jsx("img", { className: "w-[52px] h-[52px] mx-auto", src: u.logoUrl, alt: u.name }),
          /* @__PURE__ */ V.jsx("p", { className: "text-sm text-[#111111] truncate", title: u.name, children: u.name })
        ]
      },
      u.id
    )) }),
    /* @__PURE__ */ V.jsx(ny, { isOpen: n, onClose: () => a(!1), product: i })
  ] });
}
function cG() {
  const e = ts(), [t, r] = b.useState("frequently"), [n, a] = b.useState([]), { data: i } = Jf(), [o, l] = b.useState([]);
  b.useEffect(() => {
    i && i.purchasedProducts && s();
  }, [i]);
  const s = async () => {
    const u = await c(), f = (i == null ? void 0 : i.purchasedProducts.filter((p) => p.status === "active").map((p) => ({
      ...u.find((m) => m.id === p.productId),
      lastUsedAt: p.lastUsedAt
    }))) || [], d = f.filter((p) => {
      if (!p.lastUsedAt)
        return !1;
      const v = new Date(p.lastUsedAt);
      return Math.abs((/* @__PURE__ */ new Date()).getTime() - v.getTime()) < 24 * 60 * 60 * 1e3;
    });
    a(d), l(f);
  }, c = async () => (await Ji.get("/marketplace/product/all-products")).data;
  return /* @__PURE__ */ V.jsxs("div", { className: "mt-[80px]", children: [
    /* @__PURE__ */ V.jsxs("div", { className: "flex justify-between items-center border-b border-[#ebebeb]", children: [
      /* @__PURE__ */ V.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ V.jsx(
          "p",
          {
            className: Ce(
              "text-[#929292] text-[22px] font-bold cursor-pointer",
              "pb-[14px] mr-[24px]",
              t === "frequently" && "text-black border-b-2 border-black"
            ),
            onClick: () => r("frequently"),
            children: "Frequently used"
          }
        ),
        /* @__PURE__ */ V.jsx(
          "p",
          {
            className: Ce(
              "text-[#929292] text-[22px] font-bold cursor-pointer",
              "pb-[14px] mr-[24px]",
              t === "added" && "text-black border-b-2 border-black"
            ),
            onClick: () => r("added"),
            children: "Added"
          }
        )
      ] }),
      /* @__PURE__ */ V.jsx(zf, { className: "py-[10px] hidden tablet:block", onClick: () => {
        e("/marketplace");
      }, children: "Explore more features" })
    ] }),
    /* @__PURE__ */ V.jsx("div", { className: "mt-4", children: t === "frequently" ? /* @__PURE__ */ V.jsx(Vg, { products: n }) : /* @__PURE__ */ V.jsx(Vg, { products: o }) })
  ] });
}
function wG() {
  const { address: e } = es.all(), { data: t } = I1({
    enabled: !!e
  }), { data: r } = Jf();
  return /* @__PURE__ */ V.jsxs("div", { className: "mt-[40px] mobile:mt-[100px]", children: [
    t && t.isZero && /* @__PURE__ */ V.jsx(lG, {}),
    t && !t.isZero && /* @__PURE__ */ V.jsx(n4, {}),
    ((r == null ? void 0 : r.purchasedProducts) ?? []).length > 0 ? /* @__PURE__ */ V.jsx(cG, {}) : /* @__PURE__ */ V.jsx(sG, { className: "mt-[48px] tablet:mt-[100px]" }),
    /* @__PURE__ */ V.jsx("div", { className: "mt-[60px] tablet:mt-[100px]", children: /* @__PURE__ */ V.jsx(nG, {}) })
  ] });
}
export {
  wG as default
};
